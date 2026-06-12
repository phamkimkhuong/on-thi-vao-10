import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { logCustomEvent } from '../../services/firebase';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../data/englishData';
import { Button } from '../../components/ui/button';

import { Question, Solution, StructuredAnswer, UserAttempt } from '../../types';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { formatAnswerForDisplay, validateAnswer } from '../../utils/answerValidator';
import { getSubjectFromQuestionTypeId } from '../../utils/subject';
import { LocalProofImage, revokeLocalProofImages } from '../../utils/proofImages';
import { proofImageService, ProofImageUploadProgress, UploadControl } from '../../services/proofImageService';
import confetti from 'canvas-confetti';

// Import subcomponents
import { TopicSelectionView } from './components/TopicSelectionView';
import { PracticeConfigView } from './components/PracticeConfigView';
import { ExamConfigView } from './components/ExamConfigView';
import { ExamPracticeView } from './components/ExamPracticeView';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { AiTutorPanel } from '../../components/common/AiTutorPanel';

const getNow = () => Date.now();

export const PracticeEngine: React.FC = () => {
  const { questionTypeId } = useParams<{ questionTypeId: string }>();
  const navigate = useNavigate();
  const { selectedSubject, setSubject, user, progressVersion, refreshProgress, isPremium } = useAppStore();
  void progressVersion;
  const routeSubject = getSubjectFromQuestionTypeId(questionTypeId) ?? selectedSubject;

  useEffect(() => {
    const start = Date.now();
    return () => {
      const durationSeconds = Math.round((Date.now() - start) / 1000);
      const durationMinutes = Math.round((durationSeconds / 60) * 100) / 100;
      if (durationSeconds > 2) {
        logCustomEvent('study_session_end', {
          subject: routeSubject === 'math' ? 'Toán' : 'Anh',
          duration_minutes: durationMinutes,
          duration_seconds: durationSeconds,
          mode: 'practice'
        });
      }
    };
  }, [routeSubject]);

  const tensesReviewBestScore = useMemo(() => {
    void progressVersion;
    const userId = user!.uid;
    const attempts = storageService.getAttempts(userId);
    const reviewAttempts = attempts.filter(a => a.selectedSubTense === 'tenses_review');
    
    const sessions: Record<string, { correct: number; total: number }> = {};
    reviewAttempts.forEach(a => {
      let sessionId = '';
      if (a.id.startsWith('attempt-tenses_review-')) {
        const parts = a.id.split('-');
        sessionId = parts.slice(2, -1).join('-');
      }
      if (!sessionId) {
        sessionId = a.createdAt.substring(0, 19);
      }
      if (!sessions[sessionId]) {
        sessions[sessionId] = { correct: 0, total: 0 };
      }
      sessions[sessionId].total += 1;
      if (a.isCorrect) {
        sessions[sessionId].correct += 1;
      }
    });

    let bestScore = 0;
    Object.values(sessions).forEach(s => {
      if (s.correct > bestScore) {
        bestScore = s.correct;
      }
    });
    return bestScore;
  }, [user, progressVersion]);

  const tensesReviewAttemptsCount = useMemo(() => {
    void progressVersion;
    const userId = user!.uid;
    const attempts = storageService.getAttempts(userId);
    const reviewAttempts = attempts.filter(a => a.selectedSubTense === 'tenses_review');
    const uniqueSessionIds = new Set<string>();
    reviewAttempts.forEach(a => {
      let sessionId = '';
      if (a.id.startsWith('attempt-tenses_review-')) {
        const parts = a.id.split('-');
        sessionId = parts.slice(2, -1).join('-');
      }
      if (!sessionId) {
        sessionId = a.createdAt.substring(0, 19);
      }
      uniqueSessionIds.add(sessionId);
    });
    return uniqueSessionIds.size;
  }, [user, progressVersion]);

  const globalProgressPercent = useMemo(() => {
    void progressVersion;
    const userId = user!.uid;
    const attempts = storageService.getAttempts(userId);
    const correctQIds = new Set<string>();
    attempts.forEach(a => {
      if (a.isCorrect && a.questionTypeId === 'eng-qt6') {
        correctQIds.add(a.questionId);
      }
    });
    const engQt6Questions = englishQuestions.filter(q => q.questionTypeId === 'eng-qt6');
    const totalQCount = engQt6Questions.length;
    if (totalQCount === 0) return 0;
    const percent = Math.round((correctQIds.size / totalQCount) * 100);
    return Math.max(1, percent);
  }, [user, progressVersion]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [structuredAnswer, setStructuredAnswer] = useState<StructuredAnswer>({});
  const [proofImages, setProofImages] = useState<LocalProofImage[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [existingAttempt, setExistingAttempt] = useState<UserAttempt | null>(null);
  const [pastAttempts, setPastAttempts] = useState<UserAttempt[]>([]);
  const [isTutorOpen, setIsTutorOpen] = useState(false);

  // Tab chọn thì cho phần Thì động từ cơ bản (eng-qt6)
  const [selectedSubTense, setSelectedSubTense] = useState<'all' | 'present_simple' | 'past_simple' | 'present_continuous' | 'past_continuous' | 'present_perfect' | 'future_simple' | 'exam' | 'to_v' | 'v_ing' | 'v0' | 'verb_combo' | 'tenses_review' | 'prep_phrasal' | 'comparison' | 'word_position' | null>(null);
  const [grammarSection, setGrammarSection] = useState<'dang1' | 'dang2' | 'dang3' | 'dang4' | 'dang5' | null>(null);
  const [customQuestions, setCustomQuestions] = useState<Question[] | null>(null);
  const [selectedTensesForCombo, setSelectedTensesForCombo] = useState<string[]>([
    'present_simple',
    'past_simple',
    'present_continuous',
    'past_continuous',
    'present_perfect',
    'future_simple'
  ]);
  const [isConfiguringAll, setIsConfiguringAll] = useState(false);

  // States cho tính năng Luyện thi trắc nghiệm (Exam Mode)
  const [isConfiguringExam, setIsConfiguringExam] = useState(false);
  const [examTenses, setExamTenses] = useState<string[]>([
    'present_simple',
    'past_simple',
    'present_continuous',
    'past_continuous',
    'present_perfect',
    'future_simple'
  ]);
  const [examQuestionCount, setExamQuestionCount] = useState<number>(20);
  const [examTimeLimit, setExamTimeLimit] = useState<number>(15); // số phút, 0 = không giới hạn
  const [isExamMode, setIsExamMode] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({}); // { questionId: selectedOption }
  const [examTimeLeft, setExamTimeLeft] = useState<number>(0); // giây còn lại
  const [examTotalTimeSpent, setExamTotalTimeSpent] = useState<number>(0);

  // Quản lý trạng thái upload tiến trình & điều khiển
  const [uploadProgress, setUploadProgress] = useState<Record<string, ProofImageUploadProgress>>({});
  const [uploadControls, setUploadControls] = useState<Record<string, UploadControl>>({});

  const proofImagesRef = useRef(proofImages);
  const loadedQuestionIdRef = useRef<string | null>(null);
  useEffect(() => {
    proofImagesRef.current = proofImages;
  }, [proofImages]);

  // Thu hồi các Object URL khi component unmount để tránh rò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      revokeLocalProofImages(proofImagesRef.current);
    };
  }, []);

  // Quản lý mức độ gợi ý (0: không gợi ý, 1: hiện gợi ý bước 1, 2: hiện gợi ý bước 2,...)
  const [hintLevel, setHintLevel] = useState(0);
  const [questionStartAt, setQuestionStartAt] = useState(() => Date.now());

  const totalUploadStats = useMemo(() => {
    const values = Object.values(uploadProgress);
    if (values.length === 0) return null;

    let totalBytes = 0;
    let bytesTransferred = 0;
    let runningCount = 0;
    let pausedCount = 0;
    let errorCount = 0;
    let canceledCount = 0;

    values.forEach(v => {
      totalBytes += v.totalBytes;
      bytesTransferred += v.bytesTransferred;
      if (v.state === 'running') runningCount++;
      else if (v.state === 'paused') pausedCount++;
      else if (v.state === 'error') errorCount++;
      else if (v.state === 'canceled') canceledCount++;
    });

    const percent = totalBytes > 0 ? Math.round((bytesTransferred / totalBytes) * 100) : 0;

    return {
      percent,
      bytesTransferred,
      totalBytes,
      runningCount,
      pausedCount,
      errorCount,
      canceledCount,
      isPaused: pausedCount > 0 && runningCount === 0,
      isAllCompleted: bytesTransferred === totalBytes && totalBytes > 0
    };
  }, [uploadProgress]);

  const handlePauseUpload = () => {
    Object.values(uploadControls).forEach(ctrl => ctrl.pause());
  };

  const handleResumeUpload = () => {
    Object.values(uploadControls).forEach(ctrl => ctrl.resume());
  };

  const handleCancelUpload = () => {
    Object.values(uploadControls).forEach(ctrl => ctrl.cancel());
  };

  // Derived States - Tính toán trực tiếp trong lúc render
  const isMath = routeSubject === 'math';
  const qList = isMath ? mathQuestions : englishQuestions;

  const questions: Question[] = useMemo(() => {
    if (isExamMode) {
      return examQuestions;
    }

    if (questionTypeId === 'eng-qt6' && selectedSubTense === 'all' && customQuestions) {
      return customQuestions;
    }

    let filtered = questionTypeId
      ? qList.filter(q => q.questionTypeId === questionTypeId)
      : qList;

    if (questionTypeId === 'eng-qt6' && selectedSubTense && selectedSubTense !== 'all') {
      if (selectedSubTense === 'present_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 5 && num <= 24) || (num >= 102 && num <= 121);
        });
      } else if (selectedSubTense === 'past_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 25 && num <= 44) || (num >= 122 && num <= 141);
        });
      } else if (selectedSubTense === 'present_continuous') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 45 && num <= 64) || (num >= 142 && num <= 161);
        });
      } else if (selectedSubTense === 'past_continuous') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 65 && num <= 84) || (num >= 162 && num <= 181);
        });
      } else if (selectedSubTense === 'present_perfect') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 182 && num <= 201;
        });
      } else if (selectedSubTense === 'future_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 202 && num <= 221;
        });
      } else if (selectedSubTense === 'to_v') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 222 && num <= 241;
        });
      } else if (selectedSubTense === 'v_ing') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 242 && num <= 261;
        });
      } else if (selectedSubTense === 'v0') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 262 && num <= 281;
        });
      } else if (selectedSubTense === 'verb_combo') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 222 && num <= 261;
        });
      } else if (selectedSubTense === 'prep_phrasal') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 262 && num <= 301;
        });
      } else if (selectedSubTense === 'comparison') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 302 && num <= 331;
        });
      } else if (selectedSubTense === 'word_position') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 332 && num <= 361;
        });
      } else if (selectedSubTense === 'tenses_review') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 5 && num <= 221;
        });
      }
    }
    return filtered;
  }, [questionTypeId, qList, selectedSubTense, customQuestions, isExamMode, examQuestions]);

  const questionAtIdx = questions[currentIdx] || null;

  const solutionDetail: Solution | null = questionAtIdx
    ? (isMath
      ? mathSolutions.find(s => s.questionId === questionAtIdx.id)
      : englishSolutions.find(s => s.questionId === questionAtIdx.id)) || null
    : null;

  const completedQuestionIds = useMemo(() => {
    if (isExamMode) {
      if (!isExamSubmitted) {
        return new Set(Object.keys(examAnswers));
      } else {
        return new Set(examQuestions.map(q => q.id));
      }
    }

    const userId = user!.uid;
    const attempts = storageService.getAttempts(userId);
    
    // Tìm lần làm gần nhất cho từng câu hỏi
    const latestAttemptsByQId: Record<string, UserAttempt> = {};
    attempts.forEach(a => {
      if (a.questionTypeId === questionTypeId) {
        const existing = latestAttemptsByQId[a.questionId];
        if (!existing || new Date(a.createdAt).getTime() > new Date(existing.createdAt).getTime()) {
          latestAttemptsByQId[a.questionId] = a;
        }
      }
    });

    const completed = new Set<string>();
    Object.entries(latestAttemptsByQId).forEach(([qId, attempt]) => {
      if (attempt.gradingMode === 'manual') {
        completed.add(qId);
      }
    });

    void progressVersion;
    return completed;
  }, [user, questionTypeId, progressVersion, isExamMode, isExamSubmitted, examAnswers, examQuestions]);

  const getSubTenseProgress = useCallback((qIds: string[]) => {
    const done = qIds.filter(id => completedQuestionIds.has(id)).length;
    return Math.round((done / qIds.length) * 100);
  }, [completedQuestionIds]);

  const resetQuestionState = useCallback(() => {
    loadedQuestionIdRef.current = null;
    setStructuredAnswer({});
    setProofImages(prev => {
      revokeLocalProofImages(prev);
      return [];
    });
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setHintLevel(0);
    setQuestionStartAt(Date.now());
    setUploadProgress({});
    setUploadControls({});
    setPastAttempts([]);
  }, []);

  useEffect(() => {
    const subjectFromRoute = getSubjectFromQuestionTypeId(questionTypeId);
    if (subjectFromRoute && subjectFromRoute !== selectedSubject) {
      setSubject(subjectFromRoute);
    }
  }, [questionTypeId, selectedSubject, setSubject]);

  // Reset index và state khi chuyển đổi dạng bài hoặc môn học
  useEffect(() => {
    setCurrentIdx(0);
    resetQuestionState();
    setSelectedSubTense(null);
    setCustomQuestions(null);
    setIsConfiguringAll(false);
    setIsConfiguringExam(false);
    setIsExamMode(false);
    setIsExamSubmitted(false);
    setExamQuestions([]);
    setExamAnswers({});
    setGrammarSection(null);
  }, [routeSubject, questionTypeId, resetQuestionState]);

  // Reset index và state khi chuyển đổi dạng thì động từ cơ bản
  useEffect(() => {
    setCurrentIdx(0);
    resetQuestionState();
    if (selectedSubTense !== 'exam') {
      setIsConfiguringExam(false);
      setIsExamMode(false);
      setIsExamSubmitted(false);
      setExamQuestions([]);
      setExamAnswers({});
    }
  }, [selectedSubTense, resetQuestionState]);

  // Tự động kiểm tra và tải bài làm cũ của học sinh đối với câu hỏi này để tránh bắt làm lại từ đầu
  useEffect(() => {
    if (isExamMode) return;
    if (questions.length === 0) return;
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    if (loadedQuestionIdRef.current === currentQ.id) {
      return;
    }

    let isMounted = true;
    loadedQuestionIdRef.current = currentQ.id;

    const checkAttempt = async () => {
      const userAttemptsLocal = storageService.getAttempts(user!.uid);
      const attemptsForQLocal = userAttemptsLocal
        .filter(a => a.questionId === currentQ.id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestAttemptLocal = attemptsForQLocal[0] || null;

      if (latestAttemptLocal) {
        if (isMounted) {
          if (latestAttemptLocal.gradingMode !== 'manual') {
            setExistingAttempt(null);
            setIsSubmitted(false);
            setIsCorrect(false);
            setPastAttempts(attemptsForQLocal.slice(0, 2));
          } else {
            setExistingAttempt(latestAttemptLocal);
            setIsSubmitted(true);
            setIsCorrect(latestAttemptLocal.isCorrect);
            setPastAttempts(attemptsForQLocal.slice(1, 3));
          }
        }
      }

      if (user) {
        try {
          const remoteAttempts = await progressService.getAttempts(user.uid);
          storageService.saveAttemptsLocal(user.uid, remoteAttempts);

          const attemptsForQRemote = remoteAttempts
            .filter(a => a.questionId === currentQ.id)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

          const latestAttemptRemote = attemptsForQRemote[0] || null;

          if (isMounted) {
            if (latestAttemptRemote) {
              if (latestAttemptRemote.gradingMode !== 'manual') {
                setExistingAttempt(null);
                setIsSubmitted(false);
                setIsCorrect(false);
                setPastAttempts(attemptsForQRemote.slice(0, 2));
              } else {
                setExistingAttempt(latestAttemptRemote);
                setIsSubmitted(true);
                setIsCorrect(latestAttemptRemote.isCorrect);
                setPastAttempts(attemptsForQRemote.slice(1, 3));
              }
            } else {
              setExistingAttempt(null);
              setIsSubmitted(false);
              setIsCorrect(false);
              setProofImages([]);
              setPastAttempts([]);
            }
          }
        } catch (err) {
          console.error("Lỗi khi tải bài làm mới nhất từ Firestore:", err);
        }
      } else if (!latestAttemptLocal) {
        if (isMounted) {
          setExistingAttempt(null);
          setIsSubmitted(false);
          setIsCorrect(false);
          setProofImages([]);
          setPastAttempts([]);
        }
      }
    };

    checkAttempt();

    return () => {
      isMounted = false;
    };
  }, [currentIdx, questionTypeId, questions, user, isExamMode]);

  const handleExamSubmit = useCallback(async (isTimeOut = false) => {
    if (isExamSubmitted) return;

    if (isTimeOut) {
      alert('Hết giờ làm bài thi! Hệ thống đang tự động nộp bài làm của bạn.');
    } else {
      const confirmSubmit = window.confirm('Bạn có chắc chắn muốn nộp bài thi trắc nghiệm này không?');
      if (!confirmSubmit) return;
    }

    setIsExamSubmitted(true);

    const attemptsToSave: UserAttempt[] = [];
    const averageTimeSpent = Math.max(1, Math.round(examTotalTimeSpent / examQuestions.length));
    const sessionId = getNow();
    const sessionTimestamp = new Date().toISOString();

    for (const q of examQuestions) {
      const selectedAns = examAnswers[q.id] || '';
      const finalAns = selectedAns ? formatAnswerForDisplay(q, selectedAns) : 'Chưa trả lời';
      const correct = validateAnswer(q, selectedAns);
      const attemptId = selectedSubTense === 'tenses_review'
        ? `attempt-tenses_review-${sessionId}-${q.id}`
        : `attempt-${getNow()}-${q.id}`;

      const attemptData: UserAttempt = {
        id: attemptId,
        userId: user!.uid,
        questionId: q.id,
        questionTypeId: q.questionTypeId,
        userAnswer: finalAns,
        gradingMode: 'manual',
        isCorrect: correct,
        timeSpent: averageTimeSpent,
        createdAt: sessionTimestamp,
        selectedSubTense: selectedSubTense || 'exam'
      };

      attemptsToSave.push(attemptData);
      storageService.saveAttempt(user!.uid, attemptData);

      logCustomEvent('request_teacher_grading', {
        subjectId: selectedSubject,
        examId: sessionId.toString(),
        questionTypeId: q.questionTypeId,
        questionId: q.id,
        isExam: true
      });

      if (!correct && user) {
        const localMistakes = storageService.getMistakes(user.uid);
        const activeMistake = localMistakes.find(m => m.questionId === q.id);
        if (activeMistake) {
          progressService.saveMistake(user.uid, activeMistake);
        }
      }
    }

    if (user) {
      try {
        progressService.saveUserProfile(user);
        await Promise.all(
          attemptsToSave.map(attempt => progressService.saveAttempt(user.uid, attempt))
        );
      } catch (err) {
        console.error("Lỗi khi đồng bộ kết quả thi trắc nghiệm lên Firestore:", err);
      }
    }

    refreshProgress();

    const score = examQuestions.filter(q => validateAnswer(q, examAnswers[q.id] || '')).length;
    const pct = (score / examQuestions.length) * 100;
    if (pct >= 80 || (selectedSubTense === 'tenses_review' && pct >= 75)) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 }
      });
    }
  }, [
    isExamSubmitted,
    examTotalTimeSpent,
    examQuestions,
    examAnswers,
    selectedSubTense,
    user,
    selectedSubject,
    refreshProgress
  ]);

  // Hiệu ứng đếm ngược thời gian thi
  useEffect(() => {
    if (!isExamMode || isExamSubmitted) return;

    const timer = setInterval(() => {
      if (examTimeLimit > 0) {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleExamSubmit(true);
            return 0;
          }
          return prev - 1;
        });
      }
      setExamTotalTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamMode, isExamSubmitted, examTimeLimit, handleExamSubmit]);

  const startExamPractice = () => {
    if (examTenses.length === 0) {
      alert('Vui lòng chọn ít nhất 1 dạng bài để luyện thi!');
      return;
    }

    let pool: Question[] = [];
    examTenses.forEach(tense => {
      let filtered: Question[] = [];
      if (tense === 'present_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 5 && num <= 24) || (num >= 102 && num <= 121));
        });
      } else if (tense === 'past_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 25 && num <= 44) || (num >= 122 && num <= 141));
        });
      } else if (tense === 'present_continuous') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 45 && num <= 64) || (num >= 142 && num <= 161));
        });
      } else if (tense === 'past_continuous') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 65 && num <= 84) || (num >= 162 && num <= 181));
        });
      } else if (tense === 'present_perfect') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && (num >= 182 && num <= 201);
        });
      } else if (tense === 'future_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && (num >= 202 && num <= 221);
        });
      } else if (tense === 'module1') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 5 && num <= 221;
        });
      } else if (tense === 'module2') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 222 && num <= 261;
        });
      } else if (tense === 'module3') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 262 && num <= 301;
        });
      } else if (tense === 'module4') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 302 && num <= 331;
        });
      } else if (tense === 'module5') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 332 && num <= 361;
        });
      }
      pool = [...pool, ...filtered];
    });

    if (pool.length === 0) {
      alert('Không tìm thấy câu hỏi tương ứng!');
      return;
    }

    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const finalQuestions = shuffled.slice(0, examQuestionCount);
    setExamQuestions(finalQuestions);
    setExamAnswers({});
    setExamTimeLeft(examTimeLimit * 60);
    setExamTotalTimeSpent(0);
    setIsExamMode(true);
    setIsExamSubmitted(false);
    setIsConfiguringExam(false);
    setSelectedSubTense('exam');
    setCurrentIdx(0);
    resetQuestionState();
  };

  const startTensesReview = () => {
    const pool = qList.filter(q => {
      if (q.questionTypeId !== 'eng-qt6') return false;
      const num = parseInt(q.id.replace('eng-q', ''), 10);
      return num >= 5 && num <= 221;
    });

    if (pool.length === 0) {
      alert('Không tìm thấy câu hỏi tương ứng!');
      return;
    }

    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const finalQuestions = shuffled.slice(0, 20);
    setExamQuestions(finalQuestions);
    setExamAnswers({});
    setExamTimeLimit(15);
    setExamTimeLeft(15 * 60);
    setExamTotalTimeSpent(0);
    setIsExamMode(true);
    setIsExamSubmitted(false);
    setIsConfiguringExam(false);
    setSelectedSubTense('tenses_review');
    setCurrentIdx(0);
    resetQuestionState();
  };

  const handleRetry = () => {
    if (existingAttempt) {
      setPastAttempts(prev => {
        const filtered = prev.filter(a => a.id !== existingAttempt.id);
        return [existingAttempt, ...filtered].slice(0, 2);
      });
    }
    setExistingAttempt(null);
    setProofImages(prev => {
      revokeLocalProofImages(prev);
      return [];
    });
    setIsSubmitted(false);
    setIsCorrect(false);
    setStructuredAnswer({});
    setSelectedOption(null);
    setSubmitError(null);
    setHintLevel(0);
    setQuestionStartAt(Date.now());
    setUploadProgress({});
    setUploadControls({});
  };

  const handleOptionSelect = (optLetter: string) => {
    if (isExamMode) {
      if (isExamSubmitted) return;
      setExamAnswers(prev => ({ ...prev, [questions[currentIdx].id]: optLetter }));
      return;
    }
    if (isSubmitted) return;
    setSelectedOption(optLetter);
  };

  const handleSubmit = async () => {
    if (questions.length === 0 || isSubmitted || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const currentQ = questions[currentIdx];
    const isMath = routeSubject === 'math';

    const answerInput = isMath
      ? "(Đã nộp ảnh bài làm)"
      : selectedOption || '';
    const finalAnswer = isMath
      ? "(Đã nộp ảnh bài làm)"
      : formatAnswerForDisplay(currentQ, answerInput);
    const correct = isMath ? true : validateAnswer(currentQ, answerInput);
    const attemptId = `attempt-${getNow()}`;
    let uploadedProofImages: UserAttempt['proofImages'] = [];

    try {
      if (user && proofImages.length > 0) {
        uploadedProofImages = await proofImageService.uploadProofImages(
          user.uid,
          attemptId,
          proofImages.map(image => ({ id: image.id, file: image.file })),
          {
            onProgress: (prog) => {
              setUploadProgress(prog);
            },
            onTasksCreated: (ctrls) => {
              setUploadControls(ctrls);
            }
          }
        );
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Không thể upload ảnh bài làm. Vui lòng thử lại.';
      setSubmitError(message);
      setIsSubmitting(false);
      return;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    setIsSubmitting(false);

    if (correct) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }

    const attemptData: UserAttempt = {
      id: attemptId,
      userId: user!.uid,
      questionId: currentQ.id,
      questionTypeId: currentQ.questionTypeId,
      userAnswer: finalAnswer,
      ...(!isMath && currentQ.answerSchema ? { finalAnswer: structuredAnswer } : {}),
      ...(uploadedProofImages.length > 0 ? { proofImages: uploadedProofImages } : {}),
      gradingMode: 'manual',
      isCorrect: correct,
      timeSpent: Math.round((getNow() - questionStartAt) / 1000),
      createdAt: new Date().toISOString(),
      ...(selectedSubTense ? { selectedSubTense } : {})
    };

    storageService.saveAttempt(user!.uid, attemptData);

    logCustomEvent('request_teacher_grading', {
      subjectId: routeSubject,
      questionTypeId: currentQ.questionTypeId,
      questionId: currentQ.id,
      hasProofImages: uploadedProofImages.length > 0
    });

    if (user) {
      progressService.saveUserProfile(user);
      progressService.saveAttempt(user.uid, attemptData);
      if (!correct) {
        const localMistakes = storageService.getMistakes(user.uid);
        const activeMistake = localMistakes.find(m => m.questionId === currentQ.id);
        if (activeMistake) {
          progressService.saveMistake(user.uid, activeMistake);
        }
      }
    }

    refreshProgress();
  };

  const handleNext = () => {
    revokeLocalProofImages(proofImages);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      resetQuestionState();
    } else {
      const goBack = window.confirm('Chúc mừng bạn đã hoàn thành tất cả câu hỏi ôn tập của dạng bài này! Bạn có muốn quay lại danh sách không?');
      if (goBack) {
        if (questionTypeId === 'eng-qt6') {
          setSelectedSubTense(null);
        } else {
          navigate('/practice');
        }
      }
    }
  };

  const startCustomReview = () => {
    const isGlobal = grammarSection === null;
    if (isGlobal) {
      if (selectedTensesForCombo.length < 1) return;
    } else {
      if (selectedTensesForCombo.length < 2) return;
    }

    let pool: Question[] = [];
    selectedTensesForCombo.forEach(tense => {
      let filtered: Question[] = [];
      if (tense === 'present_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 5 && num <= 24) || (num >= 102 && num <= 121));
        });
      } else if (tense === 'past_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 25 && num <= 44) || (num >= 122 && num <= 141));
        });
      } else if (tense === 'present_continuous') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 45 && num <= 64) || (num >= 142 && num <= 161));
        });
      } else if (tense === 'past_continuous') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && ((num >= 65 && num <= 84) || (num >= 162 && num <= 181));
        });
      } else if (tense === 'present_perfect') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && (num >= 182 && num <= 201);
        });
      } else if (tense === 'future_simple') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && (num >= 202 && num <= 221);
        });
      } else if (tense === 'module1') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 5 && num <= 221;
        });
      } else if (tense === 'module2') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 222 && num <= 261;
        });
      } else if (tense === 'module3') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 262 && num <= 301;
        });
      } else if (tense === 'module4') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 302 && num <= 331;
        });
      } else if (tense === 'module5') {
        filtered = qList.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return q.questionTypeId === 'eng-qt6' && num >= 332 && num <= 361;
        });
      }
      pool = [...pool, ...filtered];
    });

    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const limited = shuffled.slice(0, 40);

    setCustomQuestions(limited);
    setSelectedSubTense('all');
    setIsConfiguringAll(false);
  };

  const triggerNextHint = () => {
    if (solutionDetail) {
      const maxSteps = solutionDetail.detailedSteps.length;
      setHintLevel(prev => (prev < maxSteps ? prev + 1 : prev));
    }
  };

  // Render switches

  if (questionTypeId === 'eng-qt6' && isConfiguringExam) {
    return (
      <ExamConfigView
        grammarSection={grammarSection}
        examTenses={examTenses}
        setExamTenses={setExamTenses}
        examQuestionCount={examQuestionCount}
        setExamQuestionCount={setExamQuestionCount}
        examTimeLimit={examTimeLimit}
        setExamTimeLimit={setExamTimeLimit}
        setIsConfiguringExam={setIsConfiguringExam}
        startExamPractice={startExamPractice}
      />
    );
  }

  if (questionTypeId === 'eng-qt6' && isConfiguringAll) {
    return (
      <PracticeConfigView
        grammarSection={grammarSection}
        selectedTensesForCombo={selectedTensesForCombo}
        setSelectedTensesForCombo={setSelectedTensesForCombo}
        setIsConfiguringAll={setIsConfiguringAll}
        startCustomReview={startCustomReview}
      />
    );
  }

  if (isExamMode) {
    return (
      <ExamPracticeView
        questions={questions}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
        examAnswers={examAnswers}
        setExamAnswers={setExamAnswers}
        isExamSubmitted={isExamSubmitted}
        setIsExamSubmitted={setIsExamSubmitted}
        examTimeLimit={examTimeLimit}
        examTimeLeft={examTimeLeft}
        examTotalTimeSpent={examTotalTimeSpent}
        selectedSubTense={selectedSubTense}
        setSelectedSubTense={setSelectedSubTense}
        setIsExamMode={setIsExamMode}
        setIsConfiguringExam={setIsConfiguringExam}
        setExamQuestions={setExamQuestions}
        handleExamSubmit={handleExamSubmit}
        startExamPractice={startExamPractice}
        startTensesReview={startTensesReview}
        handleOptionSelect={handleOptionSelect}
        handleNext={handleNext}
        solutionDetail={solutionDetail}
        routeSubject={routeSubject}
      />
    );
  }

  if (questionTypeId === undefined || (questionTypeId === 'eng-qt6' && selectedSubTense === null)) {
    return (
      <TopicSelectionView
        routeSubject={routeSubject}
        mathQuestionTypes={mathQuestionTypes}
        englishQuestionTypes={englishQuestionTypes}
        grammarSection={grammarSection}
        setGrammarSection={setGrammarSection}
        setSelectedSubTense={setSelectedSubTense}
        setSelectedTensesForCombo={setSelectedTensesForCombo}
        setIsConfiguringAll={setIsConfiguringAll}
        setIsConfiguringExam={setIsConfiguringExam}
        setExamTenses={setExamTenses}
        globalProgressPercent={globalProgressPercent}
        tensesReviewAttemptsCount={tensesReviewAttemptsCount}
        tensesReviewBestScore={tensesReviewBestScore}
        startTensesReview={startTensesReview}
        getSubTenseProgress={getSubTenseProgress}
        isPremium={isPremium}
        questionTypeId={questionTypeId}
      />
    );
  }

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center max-w-lg mx-auto space-y-4">
        <AlertTriangle size={40} className="mx-auto text-amber-500" />
        <h3 className="text-lg font-bold text-foreground">Chưa có câu hỏi luyện tập</h3>
        <p className="text-xs text-muted-foreground">Hiện tại hệ thống đang cập nhật ngân hàng đề cho dạng bài này. Vui lòng chọn dạng bài khác.</p>
        <Button onClick={() => navigate('/practice')} variant="outline" className="text-xs font-bold border border-border/50">
          Quay lại danh sách dạng bài
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];
  const submitDisabled = isMath
    ? proofImages.length === 0
    : !selectedOption;

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12">
      {/* Header trạng thái luyện tập */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card border border-border/45 p-4 rounded-2xl shadow-sm">
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (questionTypeId === 'eng-qt6') {
                setSelectedSubTense(null);
              } else {
                navigate('/practice');
              }
            }}
            className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all font-semibold"
          >
            ← Quay lại
          </button>
          
          {!isExamMode && currentQuestion && (
            <button
              onClick={() => setIsTutorOpen(true)}
              type="button"
              className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm border border-emerald-500/25"
            >
              <Sparkles size={13} className="text-emerald-500 fill-emerald-500 animate-pulse" />
              Hỏi Gia sư AI
            </button>
          )}
        </div>

        {/* Bong bóng tròn hiển thị số câu */}
        <div className="flex flex-wrap items-center gap-1.5 flex-1 justify-end max-w-full overflow-x-auto py-1">
          {questions.map((q, idx) => {
            const isActive = idx === currentIdx;
            const isCompleted = completedQuestionIds.has(q.id);

            return (
              <button
                key={q.id}
                onClick={() => {
                  revokeLocalProofImages(proofImages);
                  setCurrentIdx(idx);
                  resetQuestionState();
                }}
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-extrabold transition-all duration-150 cursor-pointer border active:scale-95 shrink-0",
                  isActive
                    ? "bg-primary border-primary text-white shadow-sm shadow-primary/20 scale-105"
                    : isCompleted
                      ? "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                      : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
                title={isCompleted ? `Câu ${idx + 1} (Đã nộp bài)` : `Câu ${idx + 1} (Chưa làm)`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question/Result Card */}
      {!isSubmitted ? (
        <QuestionCard
          currentQuestion={currentQuestion}
          questionTypeId={questionTypeId}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
          setSelectedOption={setSelectedOption}
          hintLevel={hintLevel}
          triggerNextHint={triggerNextHint}
          solutionDetail={solutionDetail}
          isMath={isMath}
          proofImages={proofImages}
          setProofImages={setProofImages}
          isSubmitting={isSubmitting}
          submitError={submitError}
          user={user}
          totalUploadStats={totalUploadStats}
          handlePauseUpload={handlePauseUpload}
          handleResumeUpload={handleResumeUpload}
          handleCancelUpload={handleCancelUpload}
          submitDisabled={submitDisabled}
          handleSubmit={handleSubmit}
          currentIdx={currentIdx}
          questionsLength={questions.length}
          setCurrentIdx={setCurrentIdx}
          resetQuestionState={resetQuestionState}
          routeSubject={routeSubject}
        />
      ) : (
        <ResultCard
          currentQuestion={currentQuestion}
          isCorrect={isCorrect}
          isMath={isMath}
          proofImages={proofImages}
          existingAttempt={existingAttempt}
          pastAttempts={pastAttempts}
          solutionDetail={solutionDetail}
          routeSubject={routeSubject}
          selectedOption={selectedOption}
          currentIdx={currentIdx}
          questionsLength={questions.length}
          setCurrentIdx={setCurrentIdx}
          resetQuestionState={resetQuestionState}
          handleRetry={handleRetry}
          handleNext={handleNext}
        />
      )}

      {currentQuestion && (
        <AiTutorPanel
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          question={currentQuestion}
          solution={solutionDetail || undefined}
          studentAnswer={selectedOption || ''}
        />
      )}
    </div>
  );
};

export default PracticeEngine;
