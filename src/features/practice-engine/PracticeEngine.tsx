import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../data/englishData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { MathLoginRequired } from '../../components/common/MathLoginRequired';
import { ProofImageUploader } from '../../components/common/ProofImageUploader';
import { Question, Solution, StructuredAnswer, UserAttempt } from '../../types';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
  Star,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getStarsFromScore, getSubjectTheme } from '../../utils/theme';
import { formatAnswerForDisplay, validateAnswer } from '../../utils/answerValidator';
import { getSubjectFromQuestionTypeId } from '../../utils/subject';
import { LocalProofImage, revokeLocalProofImages } from '../../utils/proofImages';
import { proofImageService, ProofImageUploadProgress, UploadControl } from '../../services/proofImageService';
import { useMemo } from 'react';
import confetti from 'canvas-confetti';

const getNow = () => Date.now();

export const PracticeEngine: React.FC = () => {
  const { questionTypeId } = useParams<{ questionTypeId: string }>();
  const navigate = useNavigate();
  const { selectedSubject, setSubject, user, progressVersion, refreshProgress } = useAppStore();
  void progressVersion;
  const routeSubject = getSubjectFromQuestionTypeId(questionTypeId) ?? selectedSubject;
  const progress = storageService.getProgress(user?.uid ?? 'guest').masteryLevels;
  const tensesReviewBestScore = useMemo(() => {
    const userId = user?.uid ?? 'guest';
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
    const userId = user?.uid ?? 'guest';
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

  // Tab chọn thì cho phần Thì động từ cơ bản (eng-qt6)
  const [selectedSubTense, setSelectedSubTense] = useState<'all' | 'present_simple' | 'past_simple' | 'present_continuous' | 'past_continuous' | 'present_perfect' | 'future_simple' | 'exam' | 'to_v' | 'v_ing' | 'v0' | 'verb_combo' | 'tenses_review' | 'prep_phrasal' | null>(null);
  const [grammarSection, setGrammarSection] = useState<'dang1' | 'dang2' | 'dang3' | null>(null);
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

  const proofImagesRef = React.useRef(proofImages);
  const loadedQuestionIdRef = React.useRef<string | null>(null);
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

    const userId = user?.uid ?? 'guest';
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
      // Chỉ tính là đã hoàn thành (tô màu xanh) nếu lần làm mới nhất ở trạng thái chờ chấm
      if (attempt.gradingMode === 'manual') {
        completed.add(qId);
      }
    });

    return completed;
  }, [user, questionTypeId, currentIdx, isSubmitted, isExamMode, isExamSubmitted, examAnswers, examQuestions]);

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

    // Tránh việc click "Làm lại" bị ghi đè bởi useEffect khi re-render
    if (loadedQuestionIdRef.current === currentQ.id) {
      return;
    }

    let isMounted = true;
    loadedQuestionIdRef.current = currentQ.id;

    const checkAttempt = async () => {
      // 1. Xem trước trong LocalStorage để render tức thì
      const userAttemptsLocal = storageService.getAttempts(user?.uid ?? 'guest');
      const attemptsForQLocal = userAttemptsLocal
        .filter(a => a.questionId === currentQ.id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestAttemptLocal = attemptsForQLocal[0] || null;

      if (latestAttemptLocal) {
        if (isMounted) {
          if (latestAttemptLocal.gradingMode !== 'manual') {
            // Lần làm gần nhất đã được chấm: tạm ẩn để làm lại (Clean Slate)
            setExistingAttempt(null);
            setIsSubmitted(false);
            setIsCorrect(false);
            // Lưu tối đa 2 lần làm gần nhất để so sánh sau khi nộp
            setPastAttempts(attemptsForQLocal.slice(0, 2));
          } else {
            // Lần làm gần nhất đang chờ chấm: hiển thị giao diện đã nộp bài
            setExistingAttempt(latestAttemptLocal);
            setIsSubmitted(true);
            setIsCorrect(latestAttemptLocal.isCorrect);
            // Lưu tối đa 2 lần làm trước đó (bắt đầu từ lần thứ 2) để so sánh
            setPastAttempts(attemptsForQLocal.slice(1, 3));
          }
        }
      }

      // 2. Luôn đồng bộ và fetch trực tiếp từ Firestore nếu đã đăng nhập để có dữ liệu chính xác nhất
      if (user) {
        try {
          const remoteAttempts = await progressService.getAttempts(user.uid);
          // Lưu ngược lại Local để sử dụng offline/cached
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
  }, [currentIdx, questionTypeId, questions, user]);

  // Hiệu ứng đếm ngược thời gian thi
  useEffect(() => {
    if (!isExamMode || isExamSubmitted) return;

    const timer = setInterval(() => {
      if (examTimeLimit > 0) {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Hết giờ: Tự động nộp bài
            handleExamSubmit(true);
            return 0;
          }
          return prev - 1;
        });
      }
      setExamTotalTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamMode, isExamSubmitted, examTimeLimit]);

  const startExamPractice = () => {
    if (examTenses.length === 0) {
      alert('Vui lòng chọn ít nhất 1 thì để luyện thi!');
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

  const handleExamSubmit = async (isTimeOut = false) => {
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
        userId: user ? user.uid : 'guest',
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
      storageService.saveAttempt(user?.uid ?? 'guest', attemptData);

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
  };

  const handleRetry = () => {
    if (existingAttempt) {
      // Đưa existingAttempt hiện tại (vừa mới xem) vào danh sách pastAttempts
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
      userId: user ? user.uid : 'guest',
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

    // Lưu vào LocalStorage
    storageService.saveAttempt(user?.uid ?? 'guest', attemptData);

    // Đồng bộ Firestore
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
    setExistingAttempt(attemptData);
  };

  const handleNext = () => {
    if (isExamMode) {
      if (currentIdx < questions.length - 1) {
        revokeLocalProofImages(proofImages);
        setCurrentIdx(currentIdx + 1);
        resetQuestionState();
      } else if (!isExamSubmitted) {
        alert('Bạn đang ở câu hỏi cuối cùng. Hãy kiểm tra lại bài làm và nhấn nút "Nộp bài thi" để kết thúc.');
      } else {
        setIsExamMode(false);
        setIsExamSubmitted(false);
        setExamQuestions([]);
        setExamAnswers({});
        setSelectedSubTense(null);
      }
      return;
    }
    if (currentIdx < questions.length - 1) {
      revokeLocalProofImages(proofImages);
      setCurrentIdx(currentIdx + 1);
      resetQuestionState();
    } else {
      // Khi đã làm hết các câu hỏi
      alert('Tuyệt vời! Bạn đã hoàn thành toàn bộ bài tập trong lượt luyện này.');
      navigate('/dashboard');
    }
  };

  const triggerNextHint = () => {
    if (!solutionDetail) return;
    const maxSteps = solutionDetail.detailedSteps.length;
    setHintLevel(prev => Math.min(maxSteps, prev + 1));
  };

  if (!user) {
    return (
      <MathLoginRequired
        title={isMath ? "Đăng nhập để luyện tập môn Toán" : "Đăng nhập để luyện tập Tiếng Anh"}
        description={isMath 
          ? "Bài Toán cần lưu ảnh lời giải và tiến độ cá nhân theo tài khoản. Bạn cần đăng nhập trước khi chọn dạng bài hoặc nộp bài Toán."
          : "Bài tập Tiếng Anh cần gửi đáp án để thầy cô chấm và ghi nhận tiến độ. Bạn cần đăng nhập trước khi làm bài."
        }
      />
    );
  }

  // Nếu không có questionTypeId và học sinh vào thẳng Practice từ Menu
  // Hãy hiển thị danh sách dạng bài để học sinh chọn dạng để luyện
  if (!questionTypeId) {
    const types = routeSubject === 'math' ? mathQuestionTypes : englishQuestionTypes;

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground tracking-tight">Chọn dạng bài cần rèn luyện</h2>
          <p className="text-xs text-muted-foreground font-semibold">Tập trung rèn luyện chuyên sâu từng dạng sẽ giúp tăng điểm số nhanh hơn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {types.map((type) => {
            const isMath = type.id.startsWith('math');
            const score = progress[type.id] ?? 0;
            const stars = getStarsFromScore(score);
            const percent = Math.max(0, Math.min(100, score));

            return (
              <Card
                key={type.id}
                className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-x-[2px] border bg-card"
                onClick={() => navigate(`/practice/${type.id}`)}
              >
                <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn(
                        'text-[9px] font-bold px-2 py-0.5 rounded-full',
                        getSubjectTheme(isMath ? 'math' : 'english').badge
                      )}>
                        {isMath ? '📐 Toán' : '🗣️ Anh'}
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3].map((starIdx) => (
                          <Star
                            key={starIdx}
                            size={10}
                            className={starIdx <= stars ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"}
                          />
                        ))}
                      </div>
                    </div>

                    <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1">
                      {type.name}
                      {stars === 3 && (
                        <Sparkles size={12} className="text-emerald-500 fill-emerald-500 animate-pulse" />
                      )}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{type.description}</p>
                    {type.subTypes && type.subTypes.length > 0 && (
                      <div className="pt-1.5">
                        <span className="text-[9px] font-bold text-primary bg-primary/10 dark:bg-primary/20 px-2 py-0.5 rounded-md inline-block select-none">
                          🎯 Gồm {type.subTypes.length} dạng bài con
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-border/20 pt-3 text-[10px] font-bold text-muted-foreground">
                    <div className="flex items-center gap-1.5 flex-1 max-w-[60%]">
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
                      </div>
                      <span className="text-[9px] text-primary shrink-0">{percent}%</span>
                    </div>

                    <Button variant="outline" size="sm" className="font-bold text-[10px] py-1 px-3 shrink-0 border border-border/50 cursor-pointer h-7">
                      Luyện tập →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const startCustomReview = () => {
    if (selectedTensesForCombo.length < 2) return;

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
      }
      pool = [...pool, ...filtered];
    });

    // Fisher-Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Limit to 40 questions
    const limited = shuffled.slice(0, 40);

    setCustomQuestions(limited);
    setSelectedSubTense('all');
    setIsConfiguringAll(false);
  };

  // Màn hình cấu hình Luyện thi trắc nghiệm (Exam Configuration View)
  if (questionTypeId === 'eng-qt6' && isConfiguringExam) {
    const tensesMeta = [
      { id: 'present_simple', name: '⏱️ Thì Hiện tại đơn' },
      { id: 'past_simple', name: '🗓️ Thì Quá khứ đơn' },
      { id: 'present_continuous', name: '⚡ Thì Hiện tại tiếp diễn' },
      { id: 'past_continuous', name: '⏳ Thì Quá khứ tiếp diễn' },
      { id: 'present_perfect', name: '✨ Thì Hiện tại hoàn thành' },
      { id: 'future_simple', name: '🔮 Thì Tương lai đơn' },
    ];

    const toggleTense = (id: string) => {
      setExamTenses(prev => {
        if (prev.includes(id)) {
          return prev.filter(t => t !== id);
        } else {
          return [...prev, id];
        }
      });
    };

    return (
      <div className="space-y-6 max-w-2xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => {
            setIsConfiguringExam(false);
            setSelectedSubTense(null);
          }}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start"
        >
          ← Quay lại
        </button>

        <Card className="border-indigo-500/10 shadow-md">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
            <CardTitle className="text-foreground text-sm font-black flex items-center gap-2">
              🏆 Thiết lập cấu hình Đề thi trắc nghiệm
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* 1. Chọn các thì */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
                1. Chọn các dạng thì thi cử:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {tensesMeta.map((tense) => {
                  const isChecked = examTenses.includes(tense.id);
                  return (
                    <div
                      key={tense.id}
                      onClick={() => toggleTense(tense.id)}
                      className={cn(
                        "flex items-center gap-2.5 p-3.5 rounded-xl border transition-all duration-150 cursor-pointer select-none text-xs font-bold",
                        isChecked
                          ? "bg-indigo-500/5 border-indigo-500/30 text-indigo-900 dark:text-indigo-200"
                          : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                      <span>{tense.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Chọn số câu hỏi */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
                2. Chọn số lượng câu hỏi:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[10, 15, 20, 30, 40].map((count) => (
                  <button
                    key={count}
                    onClick={() => setExamQuestionCount(count)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                      examQuestionCount === count
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                        : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                    )}
                  >
                    {count} câu
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Chọn thời gian làm bài */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
                3. Chọn thời gian làm bài:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '5 phút', val: 5 },
                  { label: '10 phút', val: 10 },
                  { label: '15 phút', val: 15 },
                  { label: '20 phút', val: 20 },
                  { label: '30 phút', val: 30 },
                  { label: 'Không giới hạn', val: 0 }
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setExamTimeLimit(item.val)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                      examTimeLimit === item.val
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                        : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {examTenses.length === 0 && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 text-xs font-semibold">
                ⚠️ Bạn cần chọn ít nhất 1 dạng thì để bắt đầu thi.
              </div>
            )}

            <Button
              onClick={startExamPractice}
              disabled={examTenses.length === 0}
              className="w-full font-bold py-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer h-11"
            >
              🚀 Bắt đầu làm bài thi
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Màn hình cấu hình Tổng ôn thông minh (chọn ít nhất 2 dạng thì, tối đa 40 câu)
  if (questionTypeId === 'eng-qt6' && isConfiguringAll) {
    const tensesMeta = [
      { id: 'present_simple', name: '⏱️ Thì Hiện tại đơn (Present Simple)', desc: 'Tập trung chia động từ thường/to be với: usually, often, every day...' },
      { id: 'past_simple', name: '🗓️ Thì Quá khứ đơn (Past Simple)', desc: 'Tập trung các dấu hiệu thời gian trong quá khứ: yesterday, ago, last summer...' },
      { id: 'present_continuous', name: '⚡ Thì Hiện tại tiếp diễn (Present Continuous)', desc: 'Tập trung hành động đang xảy ra: now, at the moment, Look!...' },
      { id: 'past_continuous', name: '⏳ Thì Quá khứ tiếp diễn (Past Continuous)', desc: 'Diễn tả hành động đang xảy ra tại thời điểm quá khứ với liên từ: while...' },
      { id: 'present_perfect', name: '✨ Thì Hiện tại hoàn thành (Present Perfect)', desc: 'Tập trung chia has/have + V3/ed với: since, for, just, already, yet, ever, never...' },
      { id: 'future_simple', name: '🔮 Thì Tương lai đơn & câu điều kiện loại 1 (Future Simple)', desc: 'Tập trung chia will + V nguyên mẫu, won\'t và cấu trúc câu điều kiện loại 1...' },
    ];

    const toggleTense = (id: string) => {
      setSelectedTensesForCombo(prev => {
        if (prev.includes(id)) {
          return prev.filter(t => t !== id);
        } else {
          return [...prev, id];
        }
      });
    };

    const hasEnoughTenses = selectedTensesForCombo.length >= 2;

    return (
      <div className="space-y-6 max-w-2xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => setIsConfiguringAll(false)}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start"
        >
          ← Quay lại
        </button>

        <Card className="border-indigo-500/10 shadow-md">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
            <CardTitle className="text-foreground text-sm font-black flex items-center gap-2">
              📑 Thiết lập cấu hình Tổng ôn Thông minh
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
                1. Chọn các dạng thì muốn luyện tập (Ít nhất 2 dạng):
              </h3>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                Hệ thống sẽ tổng hợp câu hỏi từ các dạng thì đã chọn để rèn luyện phản xạ hỗn hợp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {tensesMeta.map((tense) => {
                const isChecked = selectedTensesForCombo.includes(tense.id);
                return (
                  <div
                    key={tense.id}
                    onClick={() => toggleTense(tense.id)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border transition-all duration-150 cursor-pointer active:scale-[0.99] select-none",
                      isChecked
                        ? "bg-indigo-500/5 border-indigo-500/30 text-indigo-900 dark:text-indigo-200"
                        : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // toggled via parent onClick
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <h4 className="font-extrabold text-xs">{tense.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">{tense.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
                2. Giới hạn số lượng câu hỏi mỗi lượt tạo:
              </h3>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-border/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">Mỗi lượt tổng ôn sẽ tạo ngẫu nhiên tối đa:</span>
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1 rounded-lg">40 Câu hỏi</span>
              </div>
            </div>

            {!hasEnoughTenses && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-1.5 animate-pulse">
                ⚠️ Bạn cần chọn ít nhất 2 dạng thì để bắt đầu tổng ôn.
              </div>
            )}

            <Button
              onClick={startCustomReview}
              disabled={!hasEnoughTenses}
              className="w-full font-bold py-3 text-xs active:scale-[0.98] cursor-pointer h-11 bg-primary text-primary-foreground hover:bg-primary/95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Bắt đầu Tổng ôn (40 câu)
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Màn hình chọn dạng thì con cho "Thì động từ cơ bản" (eng-qt6) dưới dạng Card
  if (questionTypeId === 'eng-qt6' && selectedSubTense === null && !isConfiguringExam) {
    if (grammarSection === null) {
      return (
        <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
          <button
            onClick={() => navigate('/practice')}
            className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start"
          >
            ← Quay lại danh sách dạng bài
          </button>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-foreground tracking-tight">Trắc nghiệm Ngữ pháp & Từ vựng</h2>
            <p className="text-xs text-muted-foreground font-semibold">Chọn chương trình học phù hợp để bắt đầu ôn tập.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Dạng 1: Thì động từ cơ bản */}
            <Card
              className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md"
              onClick={() => setGrammarSection('dang1')}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                      Module 1
                    </span>
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                      🔓 Luôn mở
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                    Dạng 1: Thì động từ cơ bản
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Nắm chắc 6 thì ngữ pháp trọng tâm trong đề thi vào 10 (Hiện tại đơn, Quá khứ đơn, Tiếp diễn, Hoàn thành, Tương lai đơn) và luyện thi trắc nghiệm.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/20 pt-4 text-xs font-bold text-primary">
                  <span>Khám phá 6 bài học →</span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-primary/50"
              onClick={() => {
                setSelectedSubTense('verb_combo');
                setGrammarSection('dang2');
              }}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                      Module 2
                    </span>
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      🔓 Sẵn sàng
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                    Dạng 2: Cấu trúc động từ (to V, V-ing, V0)
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Học các mẫu verb patterns đi với to V, V-ing, V0, cấu trúc song song. Đây là phần chuyển tiếp cực kỳ quan trọng hỗ trợ cho dạng Word Form và viết lại câu.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/20 pt-4 text-xs font-bold text-primary">
                  <span>Bắt đầu học ngay →</span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-primary/50"
              onClick={() => {
                setSelectedSubTense('prep_phrasal');
                setGrammarSection('dang3');
              }}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400">
                      Module 3
                    </span>
                    <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      🔓 Sẵn sàng
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                    Dạng 3: Giới từ & Phrasal Verbs cơ bản
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Học giới từ đi sau tính từ, động từ, cụm động từ (phrasal verbs) hay gặp và giới từ thời gian/nơi chốn (in, on, at) để lấy trọn điểm trắc nghiệm.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/20 pt-4 text-xs font-bold text-primary">
                  <span>Bắt đầu học ngay →</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    if (grammarSection === 'dang1') {
      const subTenseCards = [
        {
          id: 'present_simple',
          name: '⏱️ Thì Hiện tại đơn (Present Simple)',
          description: 'Tập trung luyện các câu chia thì Hiện tại đơn với các dấu hiệu nhận biết quen thuộc: usually, often, always, every day...',
          qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 5}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`)]
        },
        {
          id: 'past_simple',
          name: '🗓️ Thì Quá khứ đơn (Past Simple)',
          description: 'Tập trung luyện các câu chia thì Quá khứ đơn với các dấu hiệu thời gian quá khứ: yesterday, last summer, ago...',
          qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 25}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`)]
        },
        {
          id: 'present_continuous',
          name: '⚡ Thì Hiện tại tiếp diễn (Present Continuous)',
          description: 'Tập trung luyện các câu chia thì Hiện tại tiếp diễn với các dấu hiệu thời điểm hoặc cảm thán: now, at the moment, Look!...',
          qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 45}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`)]
        },
        {
          id: 'past_continuous',
          name: '⏳ Thì Quá khứ tiếp diễn (Past Continuous)',
          description: 'Tập trung luyện các câu chia thì Quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm quá khứ với liên từ while.',
          qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 65}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`)]
        },
        {
          id: 'present_perfect',
          name: '✨ Thì Hiện tại hoàn thành (Present Perfect)',
          description: 'Tập trung chia động từ ở thì Hiện tại hoàn thành (has/have + V3/ed) và phân biệt với Quá khứ đơn.',
          qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`)
        },
        {
          id: 'future_simple',
          name: '🔮 Thì Tương lai đơn (Future Simple / Will)',
          description: 'Tập trung chia động từ ở thì Tương lai đơn (will + V) và cấu trúc câu điều kiện loại 1.',
          qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
        },
        {
          id: 'all',
          name: '📑 Tổng ôn thông minh',
          description: 'Tự chọn tổ hợp các dạng thì mong muốn và tạo ngẫu nhiên lượt luyện tập tối đa 40 câu hỏi.',
          qIds: [
            ...Array.from({ length: 80 }, (_, i) => `eng-q${i + 5}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
          ]
        },
        {
          id: 'exam',
          name: '🏆 Luyện thi trắc nghiệm',
          description: 'Luyện thi tính giờ với số lượng câu và thì tự chọn. Không hiện giải thích ngay khi làm, chỉ hiện toàn bộ khi nộp bài hoặc hết giờ.',
          qIds: [
            ...Array.from({ length: 80 }, (_, i) => `eng-q${i + 5}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`),
            ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
          ]
        }
      ];

      return (
        <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
          <button
            onClick={() => setGrammarSection(null)}
            className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start animate-fade-in"
          >
            ← Quay lại chọn Module
          </button>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-foreground tracking-tight">Dạng 1: Thì động từ cơ bản</h2>
            <p className="text-xs text-muted-foreground font-semibold">Luyện tập sâu từng thì hoặc làm bài thi thử để kiểm tra trình độ.</p>
          </div>

          {/* Hero Milestone Card: Bài kiểm tra tổng hợp 6 thì */}
          <Card className="border-indigo-500/20 bg-gradient-to-br from-slate-50 to-indigo-50/20 dark:from-slate-900/50 dark:to-indigo-950/10 shadow-sm overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500 text-white flex items-center gap-1">
                    📝 ĐÁNH GIÁ NĂNG LỰC
                  </span>
                  <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                    🔓 Tự do ôn tập
                  </span>
                </div>
                <h3 className="font-extrabold text-sm md:text-base text-foreground">
                  Bài kiểm tra tổng hợp 6 thì
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                  Bài thi tổng hợp gồm **20 câu hỏi trắc nghiệm** trộn ngẫu nhiên từ cả 6 thì (thời gian làm bài: 15 phút, không hiện đáp án ngay). Khuyên dùng để tự đánh giá mức độ phản xạ phối hợp giữa các thì.
                </p>
                {tensesReviewAttemptsCount > 0 && (
                  <div className="flex gap-4 text-[10px] font-extrabold text-muted-foreground pt-1.5">
                    <span>Đã làm: <span className="text-foreground">{tensesReviewAttemptsCount} lần</span></span>
                    <span>Điểm cao nhất: <span className={cn(tensesReviewBestScore >= 15 ? "text-emerald-600" : "text-rose-600")}>{tensesReviewBestScore}/20 câu đúng ({Math.round(tensesReviewBestScore / 20 * 100)}%)</span></span>
                  </div>
                )}
              </div>
              <Button
                onClick={startTensesReview}
                className="font-bold text-xs py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer h-10 shrink-0 shadow-sm"
              >
                {tensesReviewAttemptsCount > 0 ? '🔄 Kiểm tra lại' : '✍️ Làm bài ngay'}
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subTenseCards.map((card) => {
              const percent = getSubTenseProgress(card.qIds);
              return (
                <Card
                  key={card.id}
                  className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-x-[2px] border bg-card flex flex-col justify-between"
                  onClick={() => {
                    if (card.id === 'all') {
                      setIsConfiguringAll(true);
                    } else if (card.id === 'exam') {
                      setIsConfiguringExam(true);
                    } else {
                      setSelectedSubTense(card.id as any);
                    }
                  }}
                >
                  <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                          🗣️ Anh
                        </span>
                      </div>

                      <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1">
                        {card.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{card.description}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/20 pt-3 text-[10px] font-bold text-muted-foreground">
                      <div className="flex items-center gap-1.5 flex-1 max-w-[60%]">
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
                        </div>
                        <span className="text-[9px] text-primary shrink-0">{percent}%</span>
                      </div>

                      <Button variant="outline" size="sm" className="font-bold text-[10px] py-1 px-3 shrink-0 border border-border/50 cursor-pointer h-7">
                        Luyện tập →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      );
    }
  }

  if (isExamMode) {
    const score = examQuestions.filter(q => validateAnswer(q, examAnswers[q.id] || '')).length;
    const correctAnswersCount = score;
    const incorrectAnswersCount = examQuestions.length - score;
    const percentage = Math.round((score / examQuestions.length) * 100);

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <div className="space-y-6 max-w-3xl mx-auto pb-12 animate-fade-in">
        {/* Header: Timer / Results summary */}
        {!isExamSubmitted ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card border border-border/45 p-4 rounded-2xl shadow-sm">
            <button
              onClick={() => {
                const confirmQuit = window.confirm('Bạn có chắc chắn muốn thoát chế độ luyện thi và hủy bỏ bài làm này?');
                if (confirmQuit) {
                  setIsExamMode(false);
                  setIsConfiguringExam(false);
                  setSelectedSubTense(null);
                }
              }}
              className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all"
            >
              ← Thoát luyện thi
            </button>

            {/* Timer banner */}
            <div className={cn(
              "px-4 py-2 rounded-xl border flex items-center gap-2 text-xs font-extrabold shadow-sm select-none",
              examTimeLimit === 0
                ? "bg-slate-50 dark:bg-slate-900 border-border text-muted-foreground"
                : examTimeLeft < 60
                  ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400 animate-pulse"
                  : examTimeLeft < 120
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 animate-pulse"
                    : "bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400"
            )}>
              <span className="relative flex h-2 w-2">
                <span className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  examTimeLeft < 60 ? "bg-rose-400" : "bg-indigo-400"
                )}></span>
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  examTimeLeft < 60 ? "bg-rose-500" : "bg-indigo-500"
                )}></span>
              </span>
              <span>
                {examTimeLimit === 0
                  ? '⏱️ Thời gian: Không giới hạn'
                  : `⏱️ Thời gian còn lại: ${formatTime(examTimeLeft)}`
                }
              </span>
            </div>

            <Button
              onClick={() => handleExamSubmit(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl cursor-pointer"
            >
              Nộp bài thi
            </Button>
          </div>
        ) : (
          /* Results Dashboard after submission */
          <Card className="border-indigo-500/10 shadow-lg bg-card overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-6 text-white text-center space-y-4">
              <h2 className="text-lg font-black tracking-tight flex items-center justify-center gap-2">
                🏆 Kết quả bài thi trắc nghiệm
              </h2>
              <div className="flex justify-center items-center gap-6">
                <div className="w-20 h-20 rounded-full border-4 border-white/20 flex flex-col items-center justify-center bg-white/10">
                  <span className="text-xl font-black">{percentage}%</span>
                  <span className="text-[9px] font-bold opacity-80">Điểm</span>
                </div>
                <div className="text-left space-y-1">
                  <p className="text-xs font-bold">Số câu đúng: <span className="text-emerald-300 font-black">{correctAnswersCount} / {examQuestions.length}</span></p>
                  <p className="text-xs font-bold">Số câu sai: <span className="text-rose-300 font-black">{incorrectAnswersCount} / {examQuestions.length}</span></p>
                  <p className="text-xs font-bold">Thời gian làm bài: <span className="text-amber-300 font-black">{formatTime(examTotalTimeSpent)}</span></p>
                </div>
              </div>

              {selectedSubTense === 'tenses_review' && (
                <div className={cn(
                  "p-4 rounded-xl border text-left text-xs font-semibold space-y-1 mt-3 leading-relaxed",
                  percentage >= 75
                    ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-100"
                    : "bg-rose-500/20 border-rose-500/30 text-rose-100"
                )}>
                  {percentage >= 75 ? (
                    <>
                      <h4 className="text-sm font-black text-emerald-300 flex items-center gap-1.5">
                        🎉 ĐÃ MỞ KHÓA DẠNG 2 CẤU TRÚC ĐỘNG TỪ!
                      </h4>
                      <p>Chúc mừng bạn đã hoàn thành bài kiểm tra điều kiện xuất sắc với {correctAnswersCount}/20 câu đúng ({percentage}%). Dạng 2: Cấu trúc động từ (to V, V-ing, V0) đã được mở khóa thành công!</p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-sm font-black text-rose-300 flex items-center gap-1.5">
                        🔒 CHƯA ĐỦ ĐIỀU KIỆN MỞ KHÓA DẠNG 2
                      </h4>
                      <p>Bạn đạt được {correctAnswersCount}/20 câu đúng ({percentage}%). Hãy làm lại bài kiểm tra hoặc ôn tập kỹ lại các thì cơ bản để đạt tối thiểu 75% (15/20 câu đúng) nhé!</p>
                    </>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-3 pt-2">
                <Button
                  onClick={selectedSubTense === 'tenses_review' ? startTensesReview : startExamPractice}
                  className="bg-white hover:bg-slate-100 text-indigo-700 font-black text-xs px-4 py-2 rounded-xl cursor-pointer"
                >
                  {selectedSubTense === 'tenses_review' ? '🔄 Thi lại bài test' : '🔄 Thi đề khác'}
                </Button>
                <Button
                  onClick={() => {
                    setIsExamMode(false);
                    setIsExamSubmitted(false);
                    setExamQuestions([]);
                    setExamAnswers({});
                    setSelectedSubTense(null);
                  }}
                  variant="outline"
                  className="border-white/40 hover:bg-white/10 text-white font-black text-xs px-4 py-2 rounded-xl cursor-pointer"
                >
                  🚪 Thoát luyện thi
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Question Selector Bubbles */}
        <div className="flex flex-wrap items-center gap-2 bg-card border border-border/45 p-4 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-muted-foreground mr-1">Câu hỏi thi:</span>
          {examQuestions.map((q, idx) => {
            const isActive = idx === currentIdx;
            const hasAnswer = examAnswers[q.id] !== undefined;
            const isCorrect = isExamSubmitted && examAnswers[q.id] === q.correctAnswer;

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIdx(idx);
                }}
                className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold transition-all duration-150 cursor-pointer border active:scale-95 shrink-0",
                  isActive
                    ? "bg-primary border-primary text-white shadow-sm shadow-primary/20 scale-105"
                    : isExamSubmitted
                      ? isCorrect
                        ? "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                        : "bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/20 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20"
                      : hasAnswer
                        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20"
                        : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
                title={`Câu ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Main Question Card */}
        <Card className="border-indigo-500/10 shadow-md">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
            <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              Câu hỏi {currentIdx + 1} / {examQuestions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Content */}
            <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
              <LatexRenderer text={questions[currentIdx].content} />
            </div>

            {/* Answer Options list */}
            <div className="grid grid-cols-1 gap-3">
              {questions[currentIdx].options?.map((opt: string, i: number) => {
                const optLetter = opt.charAt(0);
                const isSelected = examAnswers[questions[currentIdx].id] === optLetter;
                const isCorrectAnswer = questions[currentIdx].correctAnswer === optLetter;

                // Color styles based on active exam vs submitted review states
                const buttonStyle = isExamSubmitted
                  ? isCorrectAnswer
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-sm"
                    : isSelected
                      ? "bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-400 shadow-sm"
                      : "bg-card border-border opacity-70 text-foreground"
                  : isSelected
                    ? "bg-indigo-500/10 border-indigo-500 text-indigo-600 shadow-sm"
                    : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground";

                return (
                  <button
                    key={i}
                    disabled={isExamSubmitted}
                    onClick={() => handleOptionSelect(optLetter)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-pointer",
                      !isExamSubmitted && "active:scale-[0.99] cursor-pointer",
                      buttonStyle
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Review Status Banner after submission */}
            {isExamSubmitted && (
              <div className={cn(
                "p-4 rounded-xl border flex items-center gap-3",
                examAnswers[questions[currentIdx].id] === questions[currentIdx].correctAnswer
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400"
              )}>
                {examAnswers[questions[currentIdx].id] === questions[currentIdx].correctAnswer ? (
                  <>
                    <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-sm">Chính xác!</h4>
                      <p className="text-xs font-semibold opacity-90">Bạn đã trả lời đúng câu hỏi này.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle size={24} className="text-rose-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-sm">Chưa chính xác!</h4>
                      <p className="text-xs font-semibold opacity-90">
                        {examAnswers[questions[currentIdx].id]
                          ? `Bạn đã chọn đáp án ${examAnswers[questions[currentIdx].id]}. Đáp án đúng là ${questions[currentIdx].correctAnswer}.`
                          : `Bạn đã bỏ qua câu hỏi này. Đáp án đúng là ${questions[currentIdx].correctAnswer}.`
                        }
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Solution view after submission */}
            {isExamSubmitted && solutionDetail && (
              <div className="space-y-4 border-t border-border/30 pt-6 animate-fade-in">
                <h4 className="font-extrabold text-sm text-foreground">🔬 Lời giải chi tiết:</h4>

                <div className={cn(
                  "text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border",
                  getSubjectTheme(routeSubject).bg,
                  getSubjectTheme(routeSubject).border
                )}>
                  <span className="font-extrabold text-foreground block mb-1">💡 Tư duy nhận dạng:</span>
                  <LatexRenderer text={solutionDetail.recognition} />
                </div>

                <div className="space-y-5 pl-1.5">
                  {solutionDetail.detailedSteps.map((step: any, idx: number) => (
                    <div key={idx} className="space-y-1">
                      <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                          {step.order}
                        </span>
                        {step.title}
                      </h5>
                      <div className="pl-6.5 text-xs font-semibold text-muted-foreground leading-relaxed">
                        <LatexRenderer text={step.explanation} />
                        {step.formula && (
                          <div className="my-2 p-2 bg-secondary/50 rounded-lg text-foreground border border-border/5 overflow-x-auto">
                            <LatexRenderer text={step.formula} block={true} />
                          </div>
                        )}
                        {step.result && (
                          <p className="text-primary font-bold mt-1">
                            👉 Kết quả bước: <LatexRenderer text={step.result} />
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-border/30 rounded-xl text-xs space-y-2">
                  <div className="font-extrabold text-foreground">
                    Đáp số đúng: <span className="text-emerald-500 font-black"><LatexRenderer text={questions[currentIdx].correctAnswer} /></span>
                  </div>
                  {solutionDetail.commonMistakes.length > 0 && (
                    <div className="pt-2 border-t border-border/20 text-rose-600 dark:text-rose-400 font-semibold leading-relaxed">
                      <span className="font-extrabold block text-foreground mb-1">⚠️ Lỗi dễ mắc (Tránh bẫy):</span>
                      {solutionDetail.commonMistakes.map((m: string, i: number) => (
                        <p key={i}>• {m}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation controls */}
            <div className="flex gap-3 w-full pt-4">
              <Button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => {
                  setCurrentIdx(currentIdx - 1);
                }}
                variant="outline"
                className="flex-1 font-bold py-2 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1 h-10 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} /> Câu trước
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                variant="outline"
                className="flex-1 font-bold py-2 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1 h-10 cursor-pointer"
              >
                {currentIdx === examQuestions.length - 1 && isExamSubmitted ? "Thoát xem" : "Câu tiếp"} <ArrowRight size={14} />
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
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
        <button
          onClick={() => {
            if (questionTypeId === 'eng-qt6') {
              if (selectedSubTense === 'verb_combo' || selectedSubTense === 'prep_phrasal') {
                setGrammarSection(null);
              }
              setSelectedSubTense(null);
              setCustomQuestions(null);
              setIsConfiguringAll(false);
            } else {
              navigate('/practice');
            }
          }}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all"
        >
          {questionTypeId === 'eng-qt6' ? '← Đổi dạng thì ôn tập' : '← Đổi dạng bài ôn tập'}
        </button>

        {/* Bộ chọn câu hỏi thông minh, linh hoạt */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 max-w-full">
          <span className="text-xs font-bold text-muted-foreground mr-1 hidden sm:inline">Bài tập:</span>
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
                  "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold transition-all duration-150 cursor-pointer border active:scale-95 shrink-0",
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

      {/* Card câu hỏi chính */}
      <Card className="border-indigo-500/10 shadow-md">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
          <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2">
            <BookOpen size={16} className="text-primary" />
            Luyện tập: {mathQuestionTypes.find(t => t.id === questionTypeId)?.name || englishQuestionTypes.find(t => t.id === questionTypeId)?.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Đề bài */}
          <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
            <LatexRenderer text={currentQuestion.content} />
          </div>

          {/* Vùng chọn đáp án */}
          {!isSubmitted ? (
            <div className="space-y-4">
              {isMath ? (
                // Trình bày hướng dẫn nộp ảnh giải cho môn Toán
                <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-500/10 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    📝 Trình bày lời giải tự luận:
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    Hãy làm bài giải chi tiết ra giấy hoặc vở ghi của bạn. Sau đó, **chụp ảnh bài giải** và tải lên bên dưới để nộp bài làm.
                  </p>
                </div>
              ) : (
                // Trắc nghiệm cho môn Anh
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options?.map((opt: string, i: number) => {
                    const optLetter = opt.charAt(0); // A, B, C, D
                    const isSelected = selectedOption === optLetter;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(optLetter)}
                        className={`w-full text-left p-4 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer ${isSelected
                          ? 'bg-primary/10 border-primary text-primary shadow-sm shadow-primary/5'
                          : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground'
                          }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nút gợi ý thông minh */}
              {solutionDetail && questionTypeId !== 'eng-qt6' && (
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={triggerNextHint}
                    className={cn(
                      "self-start text-[11px] font-bold flex items-center gap-1 cursor-pointer px-3 py-1.5 rounded-lg border transition-colors",
                      routeSubject === 'math' ? "text-indigo-500 hover:text-indigo-600" : "text-violet-500 hover:text-violet-600",
                      getSubjectTheme(routeSubject).bg,
                      getSubjectTheme(routeSubject).border
                    )}
                  >
                    <Lightbulb size={14} className="text-amber-500 animate-pulse" />
                    {hintLevel === 0 ? 'Gợi ý giải từng bước' : `Gợi ý tiếp theo (Bước ${hintLevel + 1})`}
                  </button>

                  {hintLevel > 0 && (
                    <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-3 animate-fade-in">
                      {solutionDetail.detailedSteps.slice(0, hintLevel).map((step: any, sIdx: number) => (
                        <div key={sIdx} className="text-xs font-semibold text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-amber-500 shrink-0 font-extrabold">• Bước {step.order}:</span>
                          <div className="flex-1">
                            <LatexRenderer text={step.explanation} />
                            {step.formula && (
                              <div className="mt-1 bg-secondary/30 p-1.5 rounded text-foreground overflow-x-auto">
                                <LatexRenderer text={step.formula} block={true} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {isMath && (
                <ProofImageUploader
                  images={proofImages}
                  onChange={setProofImages}
                  disabled={isSubmitting}
                  required={true}
                  cloudEnabled={Boolean(user)}
                />
              )}

              {/* Vùng hiển thị tiến độ tải lên (Upload Progress UI) */}
              {isSubmitting && totalUploadStats && (
                <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl space-y-3 animate-fade-in my-3">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        {totalUploadStats.isPaused ? (
                          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        ) : (
                          <>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                          </>
                        )}
                      </span>
                      {totalUploadStats.isPaused ? 'Đã tạm dừng tải ảnh' : 'Đang tải lên ảnh bài làm...'}
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{totalUploadStats.percent}%</span>
                  </div>

                  {/* Thanh tiến độ */}
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-300",
                        totalUploadStats.isPaused ? "bg-amber-400" : "bg-indigo-500"
                      )}
                      style={{ width: `${totalUploadStats.percent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
                    <span>
                      Đã gửi {((totalUploadStats.bytesTransferred) / (1024 * 1024)).toFixed(2)} MB / {((totalUploadStats.totalBytes) / (1024 * 1024)).toFixed(2)} MB
                    </span>
                    <div className="flex items-center gap-3">
                      {totalUploadStats.isPaused ? (
                        <button
                          type="button"
                          onClick={handleResumeUpload}
                          className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                        >
                          ▶️ Tiếp tục
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handlePauseUpload}
                          className="text-[10px] font-black text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                        >
                          ⏸️ Tạm dừng
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handleCancelUpload}
                        className="text-[10px] font-black text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                      >
                        ⏹️ Hủy bỏ
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <p className="text-xs font-bold text-rose-600 dark:text-rose-400 my-2">
                  {submitError}
                </p>
              )}

              {/* Bấm nộp bài & Điều hướng chuyển câu */}
              <div className="space-y-3 mt-4">
                <Button
                  onClick={handleSubmit}
                  disabled={submitDisabled || isSubmitting}
                  className="w-full font-bold py-3 text-xs active:scale-[0.98]"
                >
                  {isSubmitting ? 'Đang lưu bài làm...' : 'Nộp bài tập'}
                </Button>

                <div className="flex gap-3 w-full">
                  <Button
                    type="button"
                    disabled={currentIdx === 0}
                    onClick={() => {
                      revokeLocalProofImages(proofImages);
                      setCurrentIdx(currentIdx - 1);
                      resetQuestionState();
                    }}
                    variant="outline"
                    className="flex-1 font-bold py-2 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1 h-9 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft size={14} /> Câu trước
                  </Button>
                  <Button
                    type="button"
                    disabled={currentIdx === questions.length - 1}
                    onClick={() => {
                      revokeLocalProofImages(proofImages);
                      setCurrentIdx(currentIdx + 1);
                      resetQuestionState();
                    }}
                    variant="outline"
                    className="flex-1 font-bold py-2 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1 h-9 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Câu sau <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Vùng hiển thị kết quả sau khi nộp bài
            <div className="space-y-6 animate-fade-in">
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400'
                }`}>
                {isMath ? (
                  existingAttempt && existingAttempt.gradingMode === 'auto' ? (
                    existingAttempt.isCorrect ? (
                      <>
                        <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                        <div>
                          <h4 className="font-extrabold text-sm">Kết quả: Đạt yêu cầu (Giáo viên đã duyệt) ✅</h4>
                          {existingAttempt.teacherFeedback && (
                            <p className="text-xs font-bold opacity-90 mt-1.5 p-2 bg-emerald-500/10 rounded-lg text-emerald-800 dark:text-emerald-300">
                              💬 Nhận xét của thầy cô: "{existingAttempt.teacherFeedback}"
                            </p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle size={24} className="text-rose-500 shrink-0" />
                        <div>
                          <h4 className="font-extrabold text-sm">Kết quả: Cần sửa lại (Chấm sai) ❌</h4>
                          {existingAttempt.teacherFeedback && (
                            <p className="text-xs font-bold opacity-90 mt-1.5 p-2 bg-rose-500/10 rounded-lg text-rose-800 dark:text-rose-300">
                              💬 Nhận xét của thầy cô: "{existingAttempt.teacherFeedback}"
                            </p>
                          )}
                        </div>
                      </>
                    )
                  ) : (
                    <>
                      <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-sm">Đã nộp bài giải thành công!</h4>
                        <p className="text-xs font-semibold opacity-90">Ảnh bài làm đã được lưu. Thầy cô sẽ sớm review và chấm bài cho bạn.</p>
                      </div>
                    </>
                  )
                ) : existingAttempt && existingAttempt.gradingMode === 'manual' ? (
                  <>
                    <HelpCircle size={24} className="text-amber-500 shrink-0 animate-pulse" />
                    <div>
                      <h4 className="font-extrabold text-sm">Đã nộp đáp án thành công!</h4>
                      <p className="text-xs font-semibold opacity-90">Đáp án của bạn đang chờ thầy cô kiểm tra và phê duyệt. Bạn chưa thể làm lại câu này cho đến khi thầy cô duyệt.</p>
                    </div>
                  </>
                ) : isCorrect ? (
                  <>
                    <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-sm">Chính xác! Cực kỳ xuất sắc.</h4>
                      <p className="text-xs font-semibold opacity-90">Bạn đã tăng điểm số Mastery cho dạng bài này.</p>
                      {existingAttempt?.teacherFeedback && (
                        <p className="text-xs font-bold opacity-90 mt-1.5 p-2 bg-emerald-500/10 rounded-lg text-emerald-800 dark:text-emerald-300">
                          💬 Nhận xét của thầy cô: "{existingAttempt.teacherFeedback}"
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle size={24} className="text-rose-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-sm">Chưa đúng rồi! Nhưng không sao.</h4>
                      <p className="text-xs font-semibold opacity-90">
                        Câu hỏi đã được lưu vào **Sổ lỗi sai**. Hãy xem kỹ lời giải chi tiết dưới đây để khắc phục nhé!
                      </p>
                      {existingAttempt?.teacherFeedback && (
                        <p className="text-xs font-bold opacity-90 mt-1.5 p-2 bg-rose-500/10 rounded-lg text-rose-800 dark:text-rose-300">
                          💬 Nhận xét của thầy cô: "{existingAttempt.teacherFeedback}"
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Ảnh bài làm đã nộp */}
              {isMath && (proofImages.length > 0 || (existingAttempt?.proofImages && existingAttempt.proofImages.length > 0)) && (
                <div className="space-y-3 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border/50 shadow-sm animate-fade-in">
                  <h4 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1.5">
                    🖼️ Ảnh bài làm bạn đã gửi:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {proofImages.length > 0
                      ? proofImages.map((img) => (
                        <div key={img.id} className="relative rounded-xl overflow-hidden border border-border bg-black/95 max-h-[320px] flex items-center justify-center shadow-md transition-all hover:border-indigo-500/30">
                          <img
                            src={img.previewUrl}
                            alt="Bài làm đã nộp"
                            className="max-h-[300px] object-contain rounded-lg p-1"
                          />
                        </div>
                      ))
                      : existingAttempt?.proofImages?.map((img) => (
                        <div key={img.id} className="relative rounded-xl overflow-hidden border border-border bg-black/95 max-h-[320px] flex items-center justify-center shadow-md transition-all hover:border-indigo-500/30">
                          <img
                            src={img.downloadUrl || img.storagePath}
                            alt="Bài làm đã nộp"
                            className="max-h-[300px] object-contain rounded-lg p-1"
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              )}

              {/* Lịch sử so sánh các lần làm trước */}
              {pastAttempts.length > 0 && (
                <div className="space-y-3 p-5 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-border/50 shadow-sm animate-fade-in">
                  <h4 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1.5">
                    ⏳ So sánh với các lần làm trước đó (Tối đa 2 lần gần nhất):
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {pastAttempts.map((past, idx) => {
                      const dateStr = new Date(past.createdAt).toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      });
                      
                      const isPastCorrect = past.isCorrect;
                      
                      return (
                        <div 
                          key={past.id} 
                          className={cn(
                            "p-4 rounded-xl border transition-all duration-150 relative flex flex-col justify-between gap-3 bg-card",
                            isPastCorrect 
                              ? "border-emerald-500/20 hover:border-emerald-500/35" 
                              : "border-rose-500/20 hover:border-rose-500/35"
                          )}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-bold text-muted-foreground">
                                Lần làm {pastAttempts.length - idx}: {dateStr}
                              </span>
                              <span className={cn(
                                "text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1",
                                isPastCorrect
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                              )}>
                                {isPastCorrect ? (
                                  <>
                                    <CheckCircle size={10} /> Đúng / Đạt
                                  </>
                                ) : (
                                  <>
                                    <XCircle size={10} /> Sai / Cần sửa
                                  </>
                                )}
                              </span>
                            </div>

                            <div className="text-xs font-semibold text-foreground">
                              {isMath ? (
                                <div className="space-y-2">
                                  <span className="text-muted-foreground block text-[11px]">Bài giải tự luận:</span>
                                  {past.proofImages && past.proofImages.length > 0 ? (
                                    <div className="flex gap-1.5 overflow-x-auto py-1">
                                      {past.proofImages.map((img) => (
                                        <div key={img.id} className="relative rounded-lg overflow-hidden border border-border bg-black w-14 h-14 shrink-0 flex items-center justify-center">
                                          <img 
                                            src={img.downloadUrl || img.storagePath} 
                                            alt="Minh chứng" 
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={() => window.open(img.downloadUrl || img.storagePath, '_blank')}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <span className="text-muted-foreground italic text-[11px]">Không có ảnh bài làm</span>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <span className="text-muted-foreground text-[11px]">Đáp án đã chọn: </span>
                                  <span className="font-extrabold text-primary">{past.userAnswer}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {past.teacherFeedback && (
                            <div className={cn(
                              "text-[10px] font-bold p-2 rounded-lg border",
                              isPastCorrect 
                                ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                                : "bg-rose-500/5 border-rose-500/10 text-rose-800 dark:text-rose-300"
                            )}>
                              💬 Nhận xét: "{past.teacherFeedback}"
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Lời giải chi tiết hiện lên */}
              {solutionDetail && (
                <div className="space-y-4 border-t border-border/30 pt-6 animate-fade-in">
                  <h4 className="font-extrabold text-sm text-foreground">🔬 Lời giải chi tiết:</h4>

                  <div className={cn(
                    "text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border",
                    getSubjectTheme(routeSubject).bg,
                    getSubjectTheme(routeSubject).border
                  )}>
                    <span className="font-extrabold text-foreground block mb-1">💡 Tư duy nhận dạng:</span>
                    <LatexRenderer text={solutionDetail.recognition} />
                  </div>

                  <div className="space-y-5 pl-1.5">
                    {solutionDetail.detailedSteps.map((step: any, idx: number) => (
                      <div key={idx} className="space-y-1">
                        <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                            {step.order}
                          </span>
                          {step.title}
                        </h5>
                        <div className="pl-6.5 text-xs font-semibold text-muted-foreground leading-relaxed">
                          <LatexRenderer text={step.explanation} />
                          {step.formula && (
                            <div className="my-2 p-2 bg-secondary/50 rounded-lg text-foreground border border-border/5 overflow-x-auto">
                              <LatexRenderer text={step.formula} block={true} />
                            </div>
                          )}
                          {step.result && (
                            <p className="text-primary font-bold mt-1">
                              👉 Kết quả bước: <LatexRenderer text={step.result} />
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-border/30 rounded-xl text-xs space-y-2">
                    <div className="font-extrabold text-foreground">
                      Đáp số đúng: <span className="text-emerald-500 font-black"><LatexRenderer text={currentQuestion.correctAnswer} /></span>
                    </div>
                    {solutionDetail.commonMistakes.length > 0 && (
                      <div className="pt-2 border-t border-border/20 text-rose-600 dark:text-rose-400 font-semibold leading-relaxed">
                        <span className="font-extrabold block text-foreground mb-1">⚠️ Lỗi dễ mắc (Tránh bẫy):</span>
                        {solutionDetail.commonMistakes.map((m: string, i: number) => (
                          <p key={i}>• {m}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tiếp tục / Làm lại / Đổi câu */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  disabled={currentIdx === 0}
                  onClick={() => {
                    revokeLocalProofImages(proofImages);
                    setCurrentIdx(currentIdx - 1);
                    resetQuestionState();
                  }}
                  variant="outline"
                  className="flex-1 font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5 border border-border/50 text-muted-foreground hover:bg-secondary/40 cursor-pointer h-10 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={16} /> Câu trước
                </Button>
                {(!existingAttempt || existingAttempt.gradingMode !== 'manual') && (
                  <Button
                    onClick={handleRetry}
                    variant="outline"
                    className="flex-1 font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5 border border-border/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/5 cursor-pointer h-10"
                  >
                    🔄 Làm lại bài này
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  className="flex-1 font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer h-10"
                >
                  Câu tiếp theo <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default PracticeEngine;
