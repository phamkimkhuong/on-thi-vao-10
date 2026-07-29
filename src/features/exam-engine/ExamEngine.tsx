import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { logCustomEvent } from '../../services/firebase';
import { getQuestionTypes, getMockExams, getAssessmentBlueprints, getLearningOutcomes, getTopics, getQuestions, getSolutions } from '../../data';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { ConfirmationModal } from '../../components/common/ConfirmationModal';
import { authService } from '../../services/authService';
import { AnswerFormRenderer } from '../../components/common/AnswerFormRenderer';
import { QuestionStimulusRenderer } from '../../components/common/QuestionStimulusRenderer';
import { aiService } from '../../services/aiService';

import { ProofImageUploader } from '../../components/common/ProofImageUploader';
import { AssessmentBlueprint, MockExam, Question, ExamResult, StructuredAnswer, UserAttempt } from '../../types';
import { formatAnswerForDisplay, isAnswerComplete, scoreAnswer } from '../../utils/answerValidator';
import { cn } from '../../utils/cn';
import { LocalProofImage, revokeLocalProofImages } from '../../utils/proofImages';
import { proofImageService } from '../../services/proofImageService';
import {
  Award,
  Timer,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Play,
  CheckSquare,
  TrendingUp,
  Zap,
  X,
  Sparkles,
  BookOpen,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';

type ExamQuestionEntry = { question: Question; index: number };
type ExamSectionView = {
  id: string;
  title?: string;
  expectedItemCount?: number;
  points?: number;
  entries: ExamQuestionEntry[];
};

const questionMatchesBlueprintSection = (
  question: Question,
  section: AssessmentBlueprint['sections'][number]
) => {
  const competencyBySectionId: Record<string, Question['competency'][]> = {
    language: ['english_language_knowledge'],
    reading: ['english_reading'],
    listening: ['english_listening'],
    writing: ['english_writing'],
    speaking: ['english_speaking', 'english_interaction']
  };
  const expectedCompetencies = competencyBySectionId[section.id];
  if (expectedCompetencies && question.competency) {
    return expectedCompetencies.includes(question.competency);
  }
  if (section.responseType === 'multiple_choice') {
    return question.responseType === 'single_choice' || (!question.responseType && Boolean(question.options?.length));
  }
  return question.responseType === section.responseType;
};

/**
 * Blueprint quyết định cách trình bày đề, nhưng không được làm thất lạc câu hỏi.
 * Câu chưa ánh xạ được sẽ được giữ ở một phần dự phòng để lỗi metadata có thể nhìn thấy.
 */
const buildExamSections = (questions: Question[], blueprint?: AssessmentBlueprint): ExamSectionView[] => {
  const entries = questions.map((question, index) => ({ question, index }));
  if (!blueprint) return [{ id: 'all-questions', entries }];

  const assignedQuestionIds = new Set<string>();
  const sections: ExamSectionView[] = blueprint.sections.map(section => {
    const sectionEntries = entries.filter(entry => {
      if (assignedQuestionIds.has(entry.question.id)) return false;
      if (!questionMatchesBlueprintSection(entry.question, section)) return false;
      assignedQuestionIds.add(entry.question.id);
      return true;
    });

    return {
      id: section.id,
      title: section.title,
      expectedItemCount: section.itemCount,
      points: section.points,
      entries: sectionEntries
    };
  }).filter(section => section.entries.length > 0);

  const unmatchedEntries = entries.filter(entry => !assignedQuestionIds.has(entry.question.id));
  if (unmatchedEntries.length > 0) {
    sections.push({
      id: 'unmapped-questions',
      title: 'Phần bổ sung',
      expectedItemCount: unmatchedEntries.length,
      entries: unmatchedEntries
    });
  }

  return sections;
};

const buildQuestionPointMap = (sections: ExamSectionView[]): Map<string, number> => {
  const pointsByQuestionId = new Map<string, number>();
  for (const section of sections) {
    if (section.entries.length === 0) continue;
    if (section.points === undefined) {
      for (const { question } of section.entries) {
        pointsByQuestionId.set(question.id, question.points ?? 1);
      }
      continue;
    }
    const pointsPerItem = section.points / section.entries.length;
    for (const { question } of section.entries) {
      pointsByQuestionId.set(question.id, pointsPerItem);
    }
  }
  return pointsByQuestionId;
};

export const ExamEngine: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedGrade, user } = useAppStore();

  const subjectQuestionTypes = getQuestionTypes(selectedGrade, selectedSubject);
  const subjectLearningOutcomes = getLearningOutcomes(selectedGrade, selectedSubject);
  const subjectTopics = getTopics(selectedGrade, selectedSubject);
  const mockExamsList = getMockExams(selectedGrade, selectedSubject);
  const subjectAssessmentBlueprints = getAssessmentBlueprints(selectedGrade, selectedSubject);

  const subjectLabels: Record<string, string> = {
    math: 'Toán học',
    english: 'Tiếng Anh',
    chemistry: 'Hóa học',
    physics: 'Vật lí',
    biology: 'Sinh học'
  };
  const subjectLabel = subjectLabels[selectedSubject] ?? 'Môn học';
  const assessmentKindLabels: Record<string, string> = {
    diagnostic: 'Chẩn đoán',
    module_checkpoint: 'Kiểm tra Chuyên đề',
    midterm: 'Giữa kỳ',
    final: 'Cuối kỳ',
    full_course: 'Tổng hợp toàn khóa'
  };

  useEffect(() => {
    const start = Date.now();
    return () => {
      const durationSeconds = Math.round((Date.now() - start) / 1000);
      const durationMinutes = Math.round((durationSeconds / 60) * 100) / 100;
      if (durationSeconds > 2) {
        logCustomEvent('study_session_end', {
          subject: subjectLabel,
          duration_minutes: durationMinutes,
          duration_seconds: durationSeconds,
          mode: 'exam'
        });
      }
    };
  }, [selectedSubject, subjectLabel]);

  const [examState, setExamState] = useState<'intro' | 'testing' | 'result'>('intro');
  const [showLoginConfirm, setShowLoginConfirm] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // Lưu trữ câu trả lời của học sinh
  const [finalAnswers, setFinalAnswers] = useState<Record<string, StructuredAnswer>>({});
  const [proofImagesByQuestion, setProofImagesByQuestion] = useState<Record<string, LocalProofImage[]>>({});

  const [selectedExamId, setSelectedExamId] = useState<string>('');
  type ExamTab = 'all' | 'diagnostic' | 'theory' | 'checkpoint' | 'midterm' | 'final';
  const [activeTab, setActiveTab] = useState<ExamTab>('all');

  const subjectExams = React.useMemo(() => {
    return mockExamsList.filter(exam => exam.subjectId === selectedSubject);
  }, [selectedSubject, mockExamsList]);

  const availableTabs = React.useMemo<ExamTab[]>(() => {
    const tabs: ExamTab[] = ['all'];
    if (subjectExams.some(exam => exam.kind === 'diagnostic')) tabs.push('diagnostic');
    if (subjectExams.some(exam => exam.focus === 'theory')) tabs.push('theory');
    if (subjectExams.some(exam => exam.kind === 'module_checkpoint' && exam.focus !== 'theory')) tabs.push('checkpoint');
    if (subjectExams.some(exam => exam.kind === 'midterm' && exam.focus !== 'theory')) tabs.push('midterm');
    if (subjectExams.some(exam => exam.kind === 'final' && exam.focus !== 'theory')) tabs.push('final');
    return tabs;
  }, [subjectExams]);

  useEffect(() => {
    if (!availableTabs.includes(activeTab)) setActiveTab('all');
  }, [activeTab, availableTabs]);

  // Lọc đề thi theo tab đang chọn
  const filteredExams = React.useMemo(() => {
    return subjectExams.filter(exam => {
      if (activeTab === 'all') return true;
      if (activeTab === 'diagnostic') return exam.kind === 'diagnostic';
      if (activeTab === 'theory') return exam.focus === 'theory';
      if (activeTab === 'checkpoint') return exam.kind === 'module_checkpoint' && exam.focus !== 'theory';
      if (activeTab === 'midterm') return exam.kind === 'midterm' && exam.focus !== 'theory';
      if (activeTab === 'final') return exam.kind === 'final' && exam.focus !== 'theory';
      return true;
    });
  }, [subjectExams, activeTab]);

  // Gộp các đề thi trùng tên (chỉ khác mã đề A/B)
  const groupedExams = React.useMemo(() => {
    const groups: Record<string, { baseTitle: string; exams: MockExam[] }> = {};
    filteredExams.forEach(exam => {
      const baseTitle = exam.title.replace(/\s*\(Mã\s+[A-Z]\)\s*$/, '').trim();
      if (!groups[baseTitle]) {
        groups[baseTitle] = { baseTitle, exams: [] };
      }
      groups[baseTitle].exams.push(exam);
    });
    return Object.values(groups);
  }, [filteredExams]);

  // Tự động cập nhật selectedExamId khi đổi tab hoặc đổi môn học
  useEffect(() => {
    if (filteredExams.length > 0) {
      const stillAvailable = filteredExams.some(e => e.id === selectedExamId);
      if (!stillAvailable) {
        setSelectedExamId(filteredExams[0].id);
      }
    } else {
      setSelectedExamId('');
    }
  }, [activeTab, filteredExams, selectedExamId]);

  const getExamCategoryLabel = (exam: MockExam) => {
    if (exam.focus === 'theory') {
      return exam.theoryScope === 'comprehensive' ? 'Lý thuyết tổng hợp' : 'Lý thuyết chuyên đề';
    }
    return assessmentKindLabels[exam.kind ?? 'module_checkpoint'];
  };

  const getDifficultyBandLabel = (exam: MockExam) => {
    if (exam.difficultyBand === 'foundation') return 'Nền tảng';
    if (exam.difficultyBand === 'score8') return 'Mục tiêu 8+';
    if (exam.difficultyBand === 'score9') return 'Mục tiêu 9+';
    return null;
  };

  const getDifficultyBandClassName = (exam: MockExam) => {
    if (exam.difficultyBand === 'foundation') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300';
    if (exam.difficultyBand === 'score8') return 'bg-amber-500/10 text-amber-700 dark:text-amber-300';
    return 'bg-rose-500/10 text-rose-700 dark:text-rose-300';
  };

  const [expandedSolutionId, setExpandedSolutionId] = useState<Record<string, boolean>>({});
  const [aiFeedback, setAiFeedback] = useState<Record<string, { isCorrect: boolean; score: number; feedback: string }>>({});
  const [aiLoading, setAiLoading] = useState<Record<string, boolean>>({});

  const toggleSolution = (questionId: string) => {
    setExpandedSolutionId(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const fetchImageAsBase64 = async (url: string): Promise<{ data: string; mimeType: string }> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve({
          data: base64Data,
          mimeType: blob.type
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleRequestAiGrading = async (q: Question, attempt: any) => {
    setAiLoading(prev => ({ ...prev, [q.id]: true }));
    try {
      const solution = getSolutionForQuestion(q.id);
      let imageObj = undefined;
      if (attempt.proofImages && attempt.proofImages.length > 0) {
        const url = attempt.proofImages[0].downloadUrl;
        if (url) {
          imageObj = await fetchImageAsBase64(url);
        }
      }
      
      const result = await aiService.gradeProofAttempt(
        q,
        solution,
        attempt.userAnswer || '',
        imageObj
      );
      
      setAiFeedback(prev => ({
        ...prev,
        [q.id]: {
          isCorrect: result.isCorrect,
          score: result.score,
          feedback: result.summaryFeedback
        }
      }));
    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Không thể lấy đánh giá từ AI lúc này. Vui lòng thử lại sau.');
    } finally {
      setAiLoading(prev => ({ ...prev, [q.id]: false }));
    }
  };

  const getSolutionForQuestion = (questionId: string) => {
    return getSolutions(selectedGrade, selectedSubject).find(s => s.questionId === questionId);
  };

  useEffect(() => {
    const exams = getMockExams(selectedGrade, selectedSubject);
    if (exams.length > 0) {
      setSelectedExamId(exams[0].id);
    } else {
      setSelectedExamId('');
    }
  }, [selectedSubject, selectedGrade]);

  const proofImagesByQuestionRef = React.useRef(proofImagesByQuestion);
  useEffect(() => {
    proofImagesByQuestionRef.current = proofImagesByQuestion;
  }, [proofImagesByQuestion]);

  // Thu hồi toàn bộ Blob URL của đề thi khi component unmount để tránh rò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      Object.values(proofImagesByQuestionRef.current).forEach(images => {
        revokeLocalProofImages(images);
      });
    };
  }, []);

  const clearAllProofImages = () => {
    setProofImagesByQuestion(prev => {
      Object.values(prev).forEach(images => {
        revokeLocalProofImages(images);
      });
      return {};
    });
  };

  // Đếm ngược thời gian (giây)
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [isSubmittingExam, setIsSubmittingExam] = useState(false);
  const [examSubmitError, setExamSubmitError] = useState<string | null>(null);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const currentExam = mockExamsList.find(exam => exam.id === selectedExamId) || subjectExams[0];
  const currentBlueprint = currentExam?.blueprintId
    ? subjectAssessmentBlueprints.find(blueprint => blueprint.id === currentExam.blueprintId)
    : undefined;
  const examSections = React.useMemo(
    () => buildExamSections(examQuestions, currentBlueprint),
    [examQuestions, currentBlueprint]
  );
  const questionPointsById = React.useMemo(
    () => buildQuestionPointMap(examSections),
    [examSections]
  );
  const durationMinutes = currentExam ? currentExam.duration : (selectedSubject === 'chemistry' ? 45 : selectedSubject === 'math' ? 120 : 60);

  useEffect(() => {
    if (examState !== 'testing') return;

    const warnBeforeLeaving = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', warnBeforeLeaving);
    return () => window.removeEventListener('beforeunload', warnBeforeLeaving);
  }, [examState]);

  const handleSubmitExam = useCallback(async () => {
    if (isSubmittingExam) return;

    setIsSubmittingExam(true);
    setExamSubmitError(null);

    let correctCount = 0;
    let earnedPoints = 0;
    let pendingPoints = 0;
    let gradedMaxPoints = 0;
    let gradedCount = 0;
    const totalCount = examQuestions.length;
    const maxPoints = Math.round(examQuestions.reduce(
      (sum, question) => sum + (questionPointsById.get(question.id) ?? question.points ?? 1),
      0
    ) * 1000) / 1000;
    const attemptResults: ExamResult['attempts'] = {};
    const currentUserId = user!.uid;
    const completedAt = new Date().toISOString();
    const examId = `exam-${selectedSubject}-${Date.now()}`;
    const examAttempts: UserAttempt[] = [];

    for (const q of examQuestions) {
      const answerInput = q.answerSchema ? (finalAnswers[q.id] ?? {}) : answers[q.id] || '';
      const userAns = formatAnswerForDisplay(q, answerInput);
      const isManual = q.answerSchema?.autoCheckMode === 'manual' || q.validatorType === 'manual';
      const questionPoints = questionPointsById.get(q.id) ?? q.points ?? 1;
      const answerScore = isManual
        ? null
        : scoreAnswer(q, answerInput, questionPoints);
      const isCorrect = answerScore?.isCorrect ?? false;
      const awardedPoints = answerScore?.earnedPoints ?? 0;
      const attemptId = `attempt-${examId}-${q.id}`;
      const localProofImages = proofImagesByQuestion[q.id] ?? [];
      let uploadedProofImages: UserAttempt['proofImages'] = [];

      try {
        if (user && localProofImages.length > 0) {
          uploadedProofImages = await proofImageService.uploadProofImages(
            user.uid,
            attemptId,
            localProofImages.map(image => ({ id: image.id, file: image.file }))
          );
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Không thể upload ảnh bài làm. Vui lòng thử lại.';
        setExamSubmitError(message);
        setIsSubmittingExam(false);
        return;
      }

      if (isManual) pendingPoints += questionPoints;
      else {
        gradedCount++;
        gradedMaxPoints += questionPoints;
      }
      if (!isManual && isCorrect) correctCount++;
      earnedPoints += awardedPoints;
      attemptResults[q.id] = {
        userAnswer: userAns,
        ...(q.answerSchema ? { finalAnswer: finalAnswers[q.id] ?? {} } : {}),
        ...(uploadedProofImages.length > 0 ? { proofImages: uploadedProofImages } : {}),
        isCorrect,
        gradingStatus: isManual ? 'pending' : 'graded',
        earnedPoints: awardedPoints,
        maxPoints: questionPoints,
        ...(answerScore?.partResults ? { partResults: answerScore.partResults } : {})
      };

      // Tự động ghi nhận lịch sử làm bài vào LocalStorage để đồng bộ tiến độ
      const attemptData: UserAttempt = {
        id: attemptId,
        userId: currentUserId,
        questionId: q.id,
        questionTypeId: q.questionTypeId,
        userAnswer: userAns,
        ...(q.answerSchema ? { finalAnswer: finalAnswers[q.id] ?? {} } : {}),
        ...(uploadedProofImages.length > 0 ? { proofImages: uploadedProofImages } : {}),
        gradingMode: q.answerSchema?.autoCheckMode === 'manual' ? 'manual' : 'auto',
        isCorrect,
        timeSpent: Math.round(timeSpent / totalCount),
        createdAt: completedAt
      };

      examAttempts.push(attemptData);
      storageService.saveAttempt(currentUserId, attemptData);

      logCustomEvent('request_teacher_grading', {
        subjectId: selectedSubject,
        examId,
        questionTypeId: q.questionTypeId,
        questionId: q.id,
        hasProofImages: localProofImages.length > 0
      });
    }

    const score = maxPoints > 0
      ? Math.round((earnedPoints / maxPoints) * 10 * 10) / 10
      : 0;

    const result: ExamResult = {
      examId,
      sourceExamId: currentExam?.id,
      score,
      earnedPoints,
      maxPoints,
      gradedMaxPoints,
      pendingPoints,
      gradedCount,
      correctCount,
      totalCount,
      timeSpent,
      completedAt,
      attempts: attemptResults
    };

    setExamResult(result);
    setExamState('result');
    setIsSubmittingExam(false);
    storageService.saveExamResult(currentUserId, result);

    // Đồng bộ Firestore
    if (user) {
      const examQuestionIds = new Set(examQuestions.map(q => q.id));
      const examMistakes = storageService
        .getMistakes(user.uid)
        .filter(mistake => examQuestionIds.has(mistake.questionId));

      progressService.saveExamSubmission(user.uid, result, examAttempts, examMistakes);
    }

    if (pendingPoints === 0 && score >= 8.0) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [examQuestions, answers, finalAnswers, proofImagesByQuestion, selectedSubject, timeSpent, user, isSubmittingExam, currentExam, questionPointsById]);

  useEffect(() => {
    let timer: any;
    if (examState === 'testing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        setTimeSpent(prev => prev + 1);
      }, 1000);
    } else if (timeLeft === 0 && examState === 'testing') {
      void handleSubmitExam(); // Tự động nộp bài khi hết giờ
    }

    return () => clearInterval(timer);
  }, [examState, timeLeft, handleSubmitExam]);

  const handleStartExam = () => {
    if (!user) {
      setShowLoginConfirm(true);
      return;
    }
    clearAllProofImages();
    // Bốc các câu hỏi thuộc đề thi thử được chọn
    if (currentExam) {
      const questionsForExam = currentExam.questionIds
        .map(id => getQuestions(selectedGrade, selectedSubject).find(q => q.id === id))
        .filter((q): q is Question => q !== undefined);
      setExamQuestions(questionsForExam);
      setTimeLeft(currentExam.duration * 60);
    } else {
      setExamQuestions([]);
      setTimeLeft(durationMinutes * 60);
    }
    setAnswers({});
    setFinalAnswers({});
    setIsSubmittingExam(false);
    setExamSubmitError(null);
    setShowSubmitConfirm(false);
    setShowExitConfirm(false);
    setTimeSpent(0);
    setExamState('testing');
  };

  const handleInputChange = (questionId: string, val: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: val
    }));
  };

  const handleFinalAnswerChange = (questionId: string, value: StructuredAnswer) => {
    setFinalAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleProofImagesChange = (questionId: string, images: LocalProofImage[]) => {
    setProofImagesByQuestion(prev => ({
      ...prev,
      [questionId]: images
    }));
  };

  const handleOptionSelect = (questionId: string, optLetter: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optLetter
    }));
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const displayMins = mins < 10 ? `0${mins}` : mins;
    const displaySecs = secs < 10 ? `0${secs}` : secs;

    if (hrs > 0) {
      return `${hrs}:${displayMins}:${displaySecs}`;
    }
    return `${displayMins}:${displaySecs}`;
  };

  const getExamAnalysis = () => {
    if (!examResult) return [];

    const typeList = subjectQuestionTypes;

    // Group kết quả theo QuestionType
    const analysis: Record<string, { name: string, total: number, correct: number, earned: number, maximum: number }> = {};

    examQuestions.forEach(q => {
      if (examResult.attempts[q.id]?.gradingStatus === 'pending') return;
      const type = typeList.find(t => t.id === q.questionTypeId);
      const typeName = type?.name || 'Dạng bài khác';
      const typeId = q.questionTypeId;

      if (!analysis[typeId]) {
        analysis[typeId] = {
          name: typeName,
          total: 0,
          correct: 0,
          earned: 0,
          maximum: 0
        };
      }

      analysis[typeId].total += 1;
      analysis[typeId].earned += examResult.attempts[q.id]?.earnedPoints ?? 0;
      analysis[typeId].maximum += examResult.attempts[q.id]?.maxPoints ?? q.points ?? 1;
      if (examResult.attempts[q.id]?.isCorrect) {
        analysis[typeId].correct += 1;
      }
    });

    return Object.entries(analysis).map(([typeId, data]) => ({
      typeId,
      ...data,
      percent: data.maximum > 0 ? Math.round((data.earned / data.maximum) * 100) : 0
    }));
  };

  const getOutcomeAnalysis = () => {
    if (!examResult) return [];

    const analysis: Record<string, { title: string; earned: number; maximum: number; questionTypeId?: string }> = {};

    examQuestions.forEach(question => {
      if (examResult.attempts[question.id]?.gradingStatus === 'pending') return;
      const outcomeIds = question.outcomeIds ?? [];
      if (outcomeIds.length === 0) return;

      const attempt = examResult.attempts[question.id];
      const questionMaximum = attempt?.maxPoints ?? question.points ?? 1;
      const questionEarned = attempt?.earnedPoints ?? (attempt?.isCorrect ? questionMaximum : 0);
      const maximumShare = questionMaximum / outcomeIds.length;
      const earnedShare = questionEarned / outcomeIds.length;

      outcomeIds.forEach(outcomeId => {
        const outcome = subjectLearningOutcomes.find(item => item.id === outcomeId);
        if (!analysis[outcomeId]) {
          analysis[outcomeId] = {
            title: outcome?.title ?? outcomeId,
            earned: 0,
            maximum: 0,
            questionTypeId: outcome?.questionTypeIds[0]
          };
        }
        analysis[outcomeId].earned += earnedShare;
        analysis[outcomeId].maximum += maximumShare;
      });
    });

    return Object.entries(analysis)
      .map(([outcomeId, data]) => ({
        outcomeId,
        ...data,
        percent: data.maximum > 0 ? Math.round((data.earned / data.maximum) * 100) : 0
      }))
      .sort((a, b) => a.percent - b.percent);
  };

  const getTopicAnalysis = () => {
    if (!examResult) return [];

    const analysis: Record<string, { title: string; orderIndex: number; total: number; correct: number; earned: number; maximum: number }> = {};
    examQuestions.forEach(question => {
      if (examResult.attempts[question.id]?.gradingStatus === 'pending') return;
      const topic = subjectTopics.find(item => item.id === question.topicId);
      if (!analysis[question.topicId]) {
        analysis[question.topicId] = {
          title: topic?.name ?? question.topicId,
          orderIndex: topic?.orderIndex ?? Number.MAX_SAFE_INTEGER,
          total: 0,
          correct: 0,
          earned: 0,
          maximum: 0
        };
      }
      analysis[question.topicId].total += 1;
      analysis[question.topicId].earned += examResult.attempts[question.id]?.earnedPoints ?? 0;
      analysis[question.topicId].maximum += examResult.attempts[question.id]?.maxPoints ?? question.points ?? 1;
      if (examResult.attempts[question.id]?.isCorrect) analysis[question.topicId].correct += 1;
    });

    return Object.entries(analysis)
      .map(([topicId, data]) => ({
        topicId,
        ...data,
        percent: data.maximum > 0 ? Math.round((data.earned / data.maximum) * 100) : 0
      }))
      .sort((a, b) => a.orderIndex - b.orderIndex);
  };

  // RENDER GIAO DIỆN GIỚI THIỆU ĐỀ THI
  if (examState === 'intro') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-500/5 via-primary/5 to-purple-500/5 border border-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-xs font-black text-primary uppercase tracking-wider mb-1">
              <Award className="w-3.5 h-3.5" />
              Phòng Thi Thử Thực Chiến
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
              Thi thử & Kiểm tra {subjectLabel}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">
              Đánh giá mức độ làm chủ kiến thức bằng đề kiểm tra có phạm vi và thời gian rõ ràng.
            </p>
          </div>

          {/* Lọc đề thi theo Tab */}
          <div role="tablist" aria-label="Lọc loại bài kiểm tra" className="flex w-full items-center gap-1 overflow-x-auto bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-border/40 self-start md:w-auto relative z-10 shrink-0">
            {availableTabs.map(tab => {
              const tabLabels = {
                all: 'Tất cả',
                diagnostic: 'Chẩn đoán',
                theory: 'Lý thuyết',
                checkpoint: 'Chuyên đề',
                midterm: 'Giữa kỳ',
                final: 'Cuối kỳ'
              };
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`min-h-11 shrink-0 px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    isActive
                      ? 'bg-card text-foreground shadow-sm scale-102 font-black'
                      : 'text-muted-foreground hover:text-foreground font-bold'
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Layout 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cột trái: Danh sách đề thi */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mb-1">
              Danh sách đề thi ({groupedExams.length} bộ đề · {filteredExams.length} mã đề):
            </label>
            
            {groupedExams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {groupedExams.map(group => {
                  const isGroupSelected = group.exams.some(e => e.id === selectedExamId);
                  const selectedExamInGroup = group.exams.find(e => e.id === selectedExamId) || group.exams[0];
                  const isSelected = selectedExamId === selectedExamInGroup.id;
                  
                  return (
                    <div
                      key={group.baseTitle}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isGroupSelected}
                      aria-label={`Chọn ${group.baseTitle}${group.exams.length > 1 ? `, có ${group.exams.length} mã đề` : ''}`}
                      onClick={() => setSelectedExamId(selectedExamInGroup.id)}
                      onKeyDown={(event) => {
                        if (event.target !== event.currentTarget) return;
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelectedExamId(selectedExamInGroup.id);
                        }
                      }}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full bg-card hover:shadow-lg hover:-translate-y-0.5 cursor-pointer select-none relative overflow-hidden group ${
                        isGroupSelected
                          ? 'border-primary shadow-md shadow-primary/5 ring-1 ring-primary/25 bg-gradient-to-br from-card to-primary/[0.01]'
                          : 'border-border/65 hover:border-border/100'
                      }`}
                    >
                      {/* Selected gradient indicator left bar */}
                      {isGroupSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-indigo-500" />
                      )}

                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-primary flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              {getExamCategoryLabel(selectedExamInGroup)}
                            </span>
                            {getDifficultyBandLabel(selectedExamInGroup) && (
                              <span className={cn(
                                'rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider',
                                getDifficultyBandClassName(selectedExamInGroup)
                              )}>
                                {getDifficultyBandLabel(selectedExamInGroup)}
                              </span>
                            )}
                          </div>
                          {group.exams.length > 1 && (
                            <span className="text-[9px] text-muted-foreground font-bold bg-secondary/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {group.exams.length} mã đề
                            </span>
                          )}
                        </div>

                        <h4 className="font-extrabold text-xs sm:text-sm text-foreground line-clamp-2 leading-relaxed group-hover:text-primary transition-colors">
                          {group.baseTitle}
                        </h4>
                      </div>

                      {/* Variant selector & select status */}
                      <div className="space-y-4 pt-4 border-t border-border/40 mt-5">
                        {group.exams.length > 1 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-wider block">Chọn mã đề:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {group.exams.map(exam => {
                                const isVariantSelected = selectedExamId === exam.id;
                                return (
                                  <button
                                    key={exam.id}
                                    type="button"
                                    aria-pressed={isVariantSelected}
                                    aria-label={`Chọn mã đề ${exam.formCode}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedExamId(exam.id);
                                    }}
                                    className={`min-h-11 min-w-11 px-3 py-2 rounded-lg text-[10px] font-extrabold border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                                      isVariantSelected
                                        ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                                        : 'bg-secondary text-muted-foreground border-transparent hover:bg-secondary/80'
                                    }`}
                                  >
                                    Mã {exam.formCode}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[10px] font-bold text-muted-foreground">
                            Thời gian: <span className="font-extrabold text-foreground">{selectedExamInGroup.duration} phút</span>
                          </span>
                          <span className={cn(
                            "inline-flex items-center gap-1 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider transition-all",
                            isSelected
                              ? "bg-primary text-primary-foreground shadow-xs"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          )}>
                            {isSelected ? 'Đang chọn' : 'Xem chi tiết'}
                            <ArrowRight size={10} className={cn("transition-transform", isSelected ? "translate-x-0.5" : "")} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center space-y-2">
                <p className="text-sm font-extrabold text-foreground">Không tìm thấy đề thi phù hợp</p>
                <p className="text-xs text-muted-foreground font-semibold">Vui lòng quay lại sau hoặc thử chọn danh mục khác.</p>
              </div>
            )}
          </div>

          {/* Cột phải: Sticky chi tiết đề thi */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            {currentExam && filteredExams.some(e => e.id === currentExam.id) ? (
              <Card className="border-border shadow-lg overflow-hidden rounded-2xl bg-card">
                <div className="h-2 bg-gradient-to-r from-primary to-indigo-500" />
                <CardHeader className="p-6 border-b border-border/40">
                  <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2.5">
                    <Award className="text-primary" size={18} />
                    Chi tiết đề thi
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl border border-rose-500/10 bg-rose-500/[0.02] dark:bg-rose-500/[0.01] flex flex-col gap-1">
                      <span className="text-[9px] font-black text-rose-600 dark:text-rose-400 block tracking-wider uppercase flex items-center gap-1">
                        <Timer size={10} /> THỜI GIAN LÀM BÀI
                      </span>
                      <span className="text-xs font-black text-foreground">{currentExam.duration} phút</span>
                    </div>
                    <div className="p-4 rounded-2xl border border-blue-500/10 bg-blue-500/[0.02] dark:bg-blue-500/[0.01] flex flex-col gap-1">
                      <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 block tracking-wider uppercase flex items-center gap-1">
                        <BookOpen size={10} /> SỐ CÂU THỰC CHIẾN
                      </span>
                      <span className="text-xs font-black text-foreground">
                        {currentExam.questionIds.length} câu
                      </span>
                    </div>
                    {currentExam.kind && (
                      <div className="p-4 rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] dark:bg-purple-500/[0.01] flex flex-col gap-1">
                        <span className="text-[9px] font-black text-purple-600 dark:text-purple-400 block tracking-wider uppercase flex items-center gap-1">
                          <Award size={10} /> TRỌNG TÂM ĐÁNH GIÁ
                        </span>
                        <span className="text-xs font-black text-foreground truncate">{getExamCategoryLabel(currentExam)}</span>
                      </div>
                    )}
                    {currentExam.formCode && (
                      <div className="p-4 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] flex flex-col gap-1">
                        <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 block tracking-wider uppercase flex items-center gap-1">
                          <Zap size={10} /> MÃ ĐỀ THI
                        </span>
                        <span className="text-xs font-black text-foreground">{currentExam.formCode}</span>
                      </div>
                    )}
                    {currentExam.targetScoreRange && (
                      <div className="p-4 rounded-2xl border border-amber-500/10 bg-amber-500/[0.02] dark:bg-amber-500/[0.01] flex flex-col gap-1">
                        <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 block tracking-wider uppercase flex items-center gap-1">
                          <Target size={10} /> DẢI ĐIỂM MỤC TIÊU
                        </span>
                        <span className="text-xs font-black text-foreground">
                          {currentExam.targetScoreRange.min}–{currentExam.targetScoreRange.max} điểm
                        </span>
                      </div>
                    )}
                  </div>

                  {currentBlueprint && (
                    <div className="rounded-2xl border border-primary/15 bg-primary/[0.025] p-4 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-[10px] font-black uppercase tracking-wider text-primary">Cấu trúc bài kiểm tra</h4>
                        <span className="text-[10px] font-extrabold text-muted-foreground">{currentBlueprint.totalPoints} điểm</span>
                      </div>
                      <div className="space-y-2">
                        {currentBlueprint.sections.map(section => (
                          <div key={section.id} className="flex items-start justify-between gap-3 text-[11px]">
                            <span className="font-semibold leading-relaxed text-foreground">{section.title}</span>
                            <span className="shrink-0 font-bold text-muted-foreground">
                              {section.itemCount} câu · {section.points} điểm
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 bg-amber-500/[0.03] border border-amber-500/15 p-4.5 rounded-2xl text-xs font-semibold text-amber-700 dark:text-amber-400">
                    <h4 className="font-black text-xs flex items-center gap-1.5 uppercase tracking-wider">
                      {currentExam.focus === 'theory' ? <BookOpen size={13} /> : <AlertTriangle size={13} className="animate-pulse" />}
                      {currentExam.focus === 'theory' ? 'Hướng dẫn kiểm tra lý thuyết' : 'Quy chế phòng thi thử'}
                    </h4>
                    <div className="space-y-2">
                      {(currentExam.instructions ?? [
                        'Hệ thống chuyển sang chế độ tập trung trong thời gian làm bài.',
                        'Hết giờ hệ thống sẽ tự động nộp bài.',
                        'Kết quả được phân tích để xác định nội dung cần ôn lại.'
                      ]).map((instruction, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span className="text-[11px] leading-relaxed text-muted-foreground font-semibold">{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleStartExam}
                    className="min-h-12 w-full font-black py-4.5 text-xs bg-gradient-to-r from-primary via-indigo-600 to-indigo-700 hover:opacity-95 active:scale-[0.98] shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 rounded-2xl border-none cursor-pointer text-white"
                  >
                    <Play size={13} className="fill-white" /> {currentExam.focus === 'theory' ? 'Bắt đầu kiểm tra lý thuyết' : 'Bắt đầu tính giờ thi thử'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center space-y-3">
                <Sparkles className="text-muted-foreground mx-auto w-8 h-8 opacity-40 animate-pulse" />
                <p className="text-xs font-extrabold text-muted-foreground">Vui lòng chọn đề thi để xem chi tiết</p>
              </div>
            )}
          </div>

        </div>

        <ConfirmationModal
          isOpen={showLoginConfirm}
          title="Yêu cầu đăng nhập học tập"
          description="Bạn cần đăng nhập học tập để bắt đầu tính giờ làm bài và lưu kết quả thi thử."
          confirmLabel="Đăng nhập ngay"
          cancelLabel="Hủy bỏ"
          onConfirm={async () => {
            setShowLoginConfirm(false);
            try {
              await authService.signInWithGoogle();
            } catch (err: any) {
              alert(err.message || 'Lỗi đăng nhập bằng Google.');
            }
          }}
          onCancel={() => setShowLoginConfirm(false)}
        />
      </div>
    );
  }

  // RENDER GIAO DIỆN LÀM BÀI THI THỬ (TESTING MODE - FOCUS MODE)
  if (examState === 'testing') {
    const answeredQuestionIds = new Set(
      examQuestions
        .filter(question => {
          if (question.answerSchema) {
            return isAnswerComplete(question, finalAnswers[question.id] ?? {});
          }
          return Boolean(answers[question.id]?.trim());
        })
        .map(question => question.id)
    );
    const unansweredCount = examQuestions.length - answeredQuestionIds.size;
    const completionPercent = examQuestions.length > 0
      ? Math.round((answeredQuestionIds.size / examQuestions.length) * 100)
      : 0;
    const timerIsUrgent = timeLeft <= 5 * 60;

    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-20">

        {/* Header phòng thi nổi (Sticky) */}
        <div className="sticky top-0 bg-background/90 backdrop-blur-md py-3 border-b border-border/50 z-30 px-2 space-y-3">
          <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-col">
            <span className="text-[9px] font-bold text-red-500 animate-pulse uppercase tracking-wider">
              ● {currentExam?.focus === 'theory' ? 'Đang kiểm tra kiến thức lý thuyết' : 'Đang trong giờ thi thử nghiêm túc'}
            </span>
            <h3 className="truncate text-sm font-extrabold text-foreground">
              {currentExam?.title ?? `Bài kiểm tra ${subjectLabel}`}
            </h3>
            <span className="mt-1 text-[10px] font-bold text-muted-foreground">
              Đã trả lời {answeredQuestionIds.size}/{examQuestions.length} câu
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowExitConfirm(true)}
              className="min-h-11 min-w-11 px-3 text-xs font-bold"
              aria-label="Thoát khỏi bài thi"
            >
              <X size={15} /> <span className="hidden sm:inline">Thoát</span>
            </Button>
          <div role="timer" aria-label={`Thời gian còn lại ${formatTime(timeLeft)}`} className={cn(
            'flex min-h-11 items-center gap-2 bg-card border px-3 py-2 rounded-xl shadow-sm',
            timerIsUrgent ? 'border-red-500/40 text-red-600 dark:text-red-400' : 'border-border text-foreground'
          )}>
            <Timer className={cn(timerIsUrgent && 'animate-pulse')} size={18} />
            <span className="font-black text-sm tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>
          </div>
          </div>
          <div
            role="progressbar"
            aria-label="Tiến độ trả lời"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={completionPercent}
            className="h-1.5 overflow-hidden rounded-full bg-secondary"
          >
            <div className="h-full rounded-full bg-emerald-500 transition-[width] duration-200" style={{ width: `${completionPercent}%` }} />
          </div>
        </div>

        <nav aria-label="Điều hướng câu hỏi" className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Điều hướng nhanh</span>
            <span className={`text-[10px] font-bold ${unansweredCount > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
              {unansweredCount > 0 ? `Còn ${unansweredCount} câu chưa trả lời` : 'Đã hoàn thành tất cả câu'}
            </span>
          </div>
          <div className="space-y-2.5">
            {examSections.map(section => (
              <div key={section.id} className="flex items-start gap-3">
                {section.title && (
                  <span className="w-28 shrink-0 pt-2 text-[9px] font-extrabold leading-tight text-muted-foreground line-clamp-2">
                    {section.title.replace(/^Phần\s+[IVX]+\.\s*/i, '')}
                  </span>
                )}
                <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
                  {section.entries.map(({ question, index }) => {
                    const answered = answeredQuestionIds.has(question.id);
                    return (
                      <button
                        key={question.id}
                        type="button"
                        aria-label={`Đi tới câu ${index + 1}${answered ? ', đã trả lời' : ', chưa trả lời'}`}
                        onClick={() => document.getElementById(`exam-question-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        className={cn(
                          'h-11 min-w-11 rounded-lg border px-2 text-xs font-extrabold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                          answered
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                            : 'border-border bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                        )}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Danh sách câu hỏi */}
        <div className="space-y-8">
          {examSections.map(section => (
            <section key={section.id} aria-labelledby={section.title ? `exam-section-${section.id}` : undefined} className="space-y-5">
              {section.title && (
                <div id={`exam-section-${section.id}`} className="rounded-2xl border border-primary/15 bg-primary/[0.035] px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-black text-foreground">{section.title}</h4>
                    <span className="text-[10px] font-bold text-muted-foreground">
                      {section.entries.length} câu
                      {section.expectedItemCount !== undefined && section.entries.length !== section.expectedItemCount
                        ? ` · ma trận dự kiến ${section.expectedItemCount}`
                        : ''}
                      {section.points !== undefined ? ` · ${section.points} điểm` : ''}
                    </span>
                  </div>
                </div>
              )}
              <div className="space-y-6">
          {section.entries.map(({ question: q, index: idx }) => {
            const isChoice = q.options && q.options.length > 0;

            return (
                <Card id={`exam-question-${idx + 1}`} key={q.id} aria-labelledby={`exam-question-title-${idx + 1}`} className="scroll-mt-36 border-border">
                  <CardHeader className="bg-slate-50/30 dark:bg-slate-900/5 py-3 border-b border-border/30">
                  <h5 id={`exam-question-title-${idx + 1}`} className="text-xs font-bold text-muted-foreground">Câu hỏi số {idx + 1}</h5>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  <QuestionStimulusRenderer question={q} />
                  <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/10 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
                    <LatexRenderer text={q.content} />
                  </div>

                  {/* Phần trả lời */}
                  {isChoice && q.options ? (
                    // Chọn trắc nghiệm (Dành cho Tiếng Anh MCQ hoặc Câu hỏi có sẵn phương án)
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt: string, i: number) => {
                        const optLetter = opt.charAt(0);
                        const isSelected = answers[q.id] === optLetter;
                        return (
                          <button
                            key={i}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => handleOptionSelect(q.id, optLetter)}
                            className={`min-h-11 w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isSelected
                              ? 'bg-primary/10 border-primary text-primary shadow-sm'
                              : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground'
                              }`}
                          >
                            <LatexRenderer text={opt} />
                          </button>
                        );
                      })}
                    </div>
                  ) : q.answerSchema ? (
                    // Nhập tự luận có Schema phức tạp (Dành cho Toán)
                    <AnswerFormRenderer
                      question={q}
                      value={finalAnswers[q.id] ?? {}}
                      onChange={(value) => handleFinalAnswerChange(q.id, value)}
                    />
                  ) : (
                    // Nhập tự luận/điền từ ngắn (Dành cho Toán hoặc Tiếng Anh viết/wordform)
                    <div className="space-y-2">
                      <label htmlFor={`exam-answer-${q.id}`} className="text-xs font-bold text-muted-foreground block">
                        {selectedSubject === 'math' ? 'Đáp số của bạn:' : 'Đáp án của bạn:'}
                      </label>
                      <input
                        id={`exam-answer-${q.id}`}
                        type="text"
                        inputMode={q.validatorType === 'number' ? 'decimal' : 'text'}
                        value={answers[q.id] || ''}
                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                        placeholder={selectedSubject === 'math' ? 'Nhập đáp số...' : 'Nhập câu trả lời...'}
                        className="w-full sm:max-w-md bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold"
                      />
                    </div>
                  )}

                  {selectedSubject === 'math' && q.answerSchema?.proofImageRequired && (
                    <ProofImageUploader
                      images={proofImagesByQuestion[q.id] ?? []}
                      onChange={(images) => handleProofImagesChange(q.id, images)}
                      disabled={isSubmittingExam}
                      required={q.answerSchema?.proofImageRequired ?? false}
                      cloudEnabled={Boolean(user)}
                    />
                  )}
                </CardContent>
              </Card>
            );
          })}
              </div>
            </section>
          ))}
        </div>

        {examSubmitError && (
          <p role="alert" className="text-xs font-bold text-rose-600 dark:text-rose-400">
            {examSubmitError}
          </p>
        )}

        {/* Nộp bài thi */}
        <Button
          onClick={() => setShowSubmitConfirm(true)}
          disabled={isSubmittingExam}
          className="min-h-12 w-full font-bold py-4 text-xs bg-red-500 hover:bg-red-600 active:scale-[0.98] shadow-md shadow-red-500/10 flex items-center justify-center gap-1.5"
        >
          <CheckSquare size={16} /> {isSubmittingExam ? 'Đang lưu bài thi...' : 'Nộp bài thi thử & Xem kết quả'}
        </Button>

        <ConfirmationModal
          isOpen={showSubmitConfirm}
          title="Xác nhận nộp bài"
          description={unansweredCount > 0
            ? `Bạn còn ${unansweredCount} câu chưa trả lời. Các câu này sẽ được tính là sai nếu bạn nộp bài ngay.`
            : 'Bạn đã trả lời tất cả câu hỏi. Hãy xác nhận để nộp bài và xem kết quả.'}
          confirmLabel={unansweredCount > 0 ? 'Vẫn nộp bài' : 'Nộp bài'}
          cancelLabel="Kiểm tra lại"
          onConfirm={() => {
            setShowSubmitConfirm(false);
            void handleSubmitExam();
          }}
          onCancel={() => setShowSubmitConfirm(false)}
        />
        <ConfirmationModal
          isOpen={showExitConfirm}
          title="Thoát khỏi bài thi?"
          description="Các câu trả lời của lượt làm hiện tại chưa được nộp và sẽ bị xóa nếu bạn thoát."
          confirmLabel="Thoát và xóa lượt làm"
          cancelLabel="Tiếp tục làm bài"
          variant="danger"
          onConfirm={() => {
            setShowExitConfirm(false);
            clearAllProofImages();
            setAnswers({});
            setFinalAnswers({});
            setExamState('intro');
          }}
          onCancel={() => setShowExitConfirm(false)}
        />
      </div>
    );
  }

  // RENDER TRANG BÁO CÁO KẾT QUẢ THI THỬ (RESULT MODE)
  if (examState === 'result' && examResult) {
    const analysis = getExamAnalysis();
    const outcomeAnalysis = getOutcomeAnalysis();
    const topicAnalysis = getTopicAnalysis();

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">

        {/* Kết quả chung */}
        <Card className="border-indigo-500/10 shadow-md overflow-hidden relative">
          <CardHeader className="bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground p-6 md:p-8 text-center">
            <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {currentExam?.focus === 'theory' ? 'Báo cáo kiến thức lý thuyết' : 'Báo cáo kết quả thi thử'}
            </span>
            {(examResult.pendingPoints ?? 0) > 0 ? (
              <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight leading-none">
                {Math.round((examResult.earnedPoints ?? 0) * 100) / 100}
                <span className="text-sm font-bold opacity-75"> / {Math.round((examResult.gradedMaxPoints ?? 0) * 100) / 100} điểm đã chấm</span>
              </h2>
            ) : (
              <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight leading-none">{examResult.score} <span className="text-sm font-bold opacity-75">/ 10 điểm</span></h2>
            )}
            <p className="text-xs text-indigo-100 font-semibold mt-2.5">
              Đúng {examResult.correctCount} / {examResult.gradedCount ?? examResult.totalCount} câu đã chấm • Thời gian làm bài: {formatTime(examResult.timeSpent)}
            </p>
            {examResult.earnedPoints !== undefined && examResult.maxPoints !== undefined && (
              <p className="text-[11px] text-indigo-100 font-semibold mt-1">
                {(examResult.pendingPoints ?? 0) > 0
                  ? `Tổng điểm toàn đề: ${examResult.maxPoints}; chưa công bố điểm cuối cùng`
                  : `Điểm thô: ${examResult.earnedPoints} / ${examResult.maxPoints}`}
              </p>
            )}
            {(examResult.pendingPoints ?? 0) > 0 && (
              <p className="mt-1.5 text-[11px] font-extrabold text-amber-200">
                Còn {examResult.pendingPoints} điểm tự luận đang chờ chấm theo rubric; không quy đổi phần đã chấm thành điểm toàn bài.
              </p>
            )}
          </CardHeader>
          <CardContent className="p-6 space-y-6">

            {/* Lời khuyên cá nhân hóa */}
            <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-500/10 rounded-xl space-y-1.5 text-xs font-semibold text-muted-foreground">
              <span className="font-extrabold text-foreground flex items-center gap-1"><Zap size={14} className="text-amber-500" /> Nhận xét năng lực:</span>
              {(examResult.pendingPoints ?? 0) > 0 ? (
                <p className="text-amber-600 dark:text-amber-400">Hệ thống mới chấm các phần khách quan. Phần tự luận/thực nghiệm đang chờ giáo viên hoặc AI đánh giá theo rubric nên chưa kết luận mức độ làm chủ toàn bài.</p>
              ) : examResult.score >= 8.0 ? (
                <p className="text-emerald-600 dark:text-emerald-400">Xuất sắc! Năng lực hiện tại của bạn đã rất vững chắc. Hãy tiếp tục giải thêm các đề nâng cao để củng cố tâm lý tốt nhất.</p>
              ) : examResult.score >= 5.0 ? (
                <p className="text-amber-600 dark:text-amber-400">Khá tốt! Bạn đã đạt mức điểm sàn trung bình ổn định. Tuy nhiên, vẫn còn một số dạng kiến thức bị lỏng lẻo cần khắc phục ngay.</p>
              ) : (
                <p className="text-rose-600 dark:text-rose-400">Cần cố gắng nhiều hơn! Điểm số này báo hiệu bạn đang bị hổng nhiều dạng bài cốt lõi. Hãy làm theo đề xuất rèn luyện dưới đây.</p>
              )}
            </div>

            {currentExam?.focus === 'theory' && topicAnalysis.length > 1 && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5"><BookOpen size={16} /> Bản đồ ghi nhớ theo chuyên đề:</h4>
                  <p className="mt-1 text-[10px] font-semibold text-muted-foreground">Ưu tiên ôn lại các chuyên đề dưới 60%, sau đó làm bài lý thuyết riêng của chuyên đề đó.</p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {topicAnalysis.map(item => {
                    const isWeak = item.percent < 60;
                    return (
                      <div key={item.topicId} className={`rounded-xl border p-3.5 ${isWeak ? 'border-rose-500/20 bg-rose-500/5' : 'border-border bg-card'}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-extrabold text-foreground">{item.title}</p>
                            <p className="mt-1 text-[9px] font-semibold text-muted-foreground">
                              Đạt {Math.round(item.earned * 100) / 100}/{Math.round(item.maximum * 100) / 100} điểm
                            </p>
                          </div>
                          <span className={`text-xs font-black ${isWeak ? 'text-rose-500' : 'text-emerald-500'}`}>{item.percent}%</span>
                        </div>
                        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                          <div className={`h-full rounded-full ${isWeak ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {outcomeAnalysis.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5"><Award size={16} /> Mức độ làm chủ theo chuẩn đầu ra:</h4>
                  <p className="mt-1 text-[10px] font-semibold text-muted-foreground">Câu gắn nhiều chuẩn được chia đều trọng số để kết quả không bị tính trùng.</p>
                </div>
                <div className="space-y-3">
                  {outcomeAnalysis.map(item => {
                    const isWeak = item.percent < 60;
                    const earned = Math.round(item.earned * 100) / 100;
                    const maximum = Math.round(item.maximum * 100) / 100;
                    return (
                      <div key={item.outcomeId} className={`rounded-xl border p-4 ${isWeak ? 'border-rose-500/20 bg-rose-500/5' : 'border-border bg-card'}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h5 className="text-xs font-extrabold text-foreground">{item.title}</h5>
                              {isWeak && <span className="shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-[8px] font-bold uppercase text-rose-600 dark:bg-rose-950 dark:text-rose-400">Cần củng cố</span>}
                            </div>
                            <p className="mt-1 text-[10px] font-semibold text-muted-foreground">{earned} / {maximum} điểm quy đổi</p>
                          </div>
                          <span className={`text-sm font-black ${isWeak ? 'text-rose-500' : 'text-emerald-500'}`}>{item.percent}%</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                          <div className={`h-full rounded-full ${isWeak ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${item.percent}%` }} />
                        </div>
                        {isWeak && item.questionTypeId && (
                          <Button onClick={() => navigate(`/question-types/${item.questionTypeId}`)} variant="outline" size="sm" className="mt-3 h-8 text-[10px] font-bold">
                            Học lại chuẩn này <ArrowRight size={11} className="ml-1" />
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Phân tích theo từng QuestionType */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5"><TrendingUp size={16} /> Phân tích chi tiết theo dạng bài:</h4>
              <div className="space-y-3">
                {analysis.map((item) => {
                  const isWeak = item.percent < 60;
                  return (
                    <div key={item.typeId} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card ${isWeak ? 'border-red-500/20 shadow-sm shadow-red-500/5' : 'border-border'
                      }`}>
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h5 className="font-extrabold text-xs text-foreground truncate">{item.name}</h5>
                          {isWeak && (
                            <span className="text-[8px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 animate-pulse">Yếu</span>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground font-semibold">
                          Mức điểm đạt được: {Math.round(item.earned * 100) / 100} / {Math.round(item.maximum * 100) / 100} ({item.percent}%)
                        </p>
                      </div>

                      {isWeak ? (
                        <Button
                          onClick={() => {
                            navigate(`/question-types/${item.typeId}`);
                          }}
                          variant="outline"
                          size="sm"
                          className="font-bold text-xs hover:border-red-500/50 text-foreground shrink-0 border border-border/50"
                        >
                          Ôn luyện ngay <ArrowRight size={12} className="ml-1" />
                        </Button>
                      ) : (
                        <span className="text-xs text-emerald-500 font-extrabold flex items-center gap-1 shrink-0"><CheckCircle size={14} /> Mastered</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chi tiết từng câu hỏi & Đáp án / Lời giải */}
            <div className="space-y-4 pt-6 border-t border-border/50">
              <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                <CheckSquare size={16} /> Chi tiết bài làm và lời giải:
              </h4>
              <div className="space-y-4">
                {examQuestions.map((q, idx) => {
                  const attempt = examResult.attempts[q.id];
                  const isCorrect = attempt?.isCorrect;
                  const isManual = q.answerSchema?.autoCheckMode === 'manual' || q.validatorType === 'manual';
                  const isPartiallyCorrect = !isManual && !isCorrect && (attempt?.earnedPoints ?? 0) > 0;
                  const solution = getSolutionForQuestion(q.id);
                  const isExpanded = expandedSolutionId[q.id];
                  const hasSubmitted = !!(attempt && (attempt.userAnswer?.trim() !== '' || (attempt.proofImages && attempt.proofImages.length > 0)));

                  // Định dạng câu trả lời của học sinh và đáp án đúng
                  const studentAnsText = attempt?.userAnswer || '(Không có câu trả lời)';
                  const correctAnsText = formatAnswerForDisplay(q, q.answerSchema ? (q.correctFinalAnswer ?? {}) : q.correctAnswer);

                  return (
                    <div key={q.id} className="p-4 rounded-xl border border-border bg-card space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-muted-foreground font-sans">Câu hỏi {idx + 1}</span>
                        {isManual ? (
                          <span className="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <AlertTriangle size={10} /> Chờ giáo viên chấm
                          </span>
                        ) : isCorrect ? (
                          <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle size={10} /> Đúng
                          </span>
                        ) : isPartiallyCorrect ? (
                          <span className="text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <AlertTriangle size={10} /> Đúng một phần · {Math.round((attempt?.earnedPoints ?? 0) * 100) / 100}/{attempt?.maxPoints ?? q.points ?? 1} điểm
                          </span>
                        ) : (
                          <span className="text-[9px] bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <X size={10} /> Sai
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-3 rounded-lg border border-border/10">
                        <LatexRenderer text={q.content} />
                      </div>

                      <QuestionStimulusRenderer question={q} />

                      {q.options && q.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                          {q.options.map((opt: string, i: number) => {
                            const optLetter = opt.charAt(0);
                            const isCorrectOpt = optLetter === q.correctAnswer;
                            const isUserSelected = attempt?.userAnswer === optLetter;

                            let optStyle = "border-border bg-slate-50/10 dark:bg-slate-900/5 text-muted-foreground/80";
                            if (isCorrectOpt) {
                              optStyle = "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/10 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm shadow-emerald-500/5";
                            } else if (isUserSelected) {
                              optStyle = "border-rose-500 bg-rose-50/30 dark:bg-rose-950/10 text-rose-600 dark:text-rose-400 font-bold shadow-sm shadow-rose-500/5";
                            }

                            return (
                              <div
                                key={i}
                                className={`p-3 rounded-xl text-xs font-semibold border flex items-center justify-between ${optStyle}`}
                              >
                                <span className="flex-1"><LatexRenderer text={opt} /></span>
                                {isCorrectOpt && <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-extrabold uppercase shrink-0 ml-2">Đáp án đúng</span>}
                                {isUserSelected && !isCorrectOpt && <span className="text-[10px] bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-full font-extrabold uppercase shrink-0 ml-2">Bạn chọn</span>}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {(!q.options || q.options.length === 0) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold mt-2">
                          <div className="p-2.5 bg-slate-50/50 dark:bg-slate-900/10 rounded-lg border border-border/10">
                            <span className="text-[10px] text-muted-foreground block mb-0.5">BÀI LÀM CỦA BẠN:</span>
                            <span className={isCorrect
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : isPartiallyCorrect
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-rose-600 dark:text-rose-400'}>
                              <LatexRenderer text={studentAnsText} />
                            </span>
                          </div>
                          <div className="p-2.5 bg-slate-50/50 dark:bg-slate-900/10 rounded-lg border border-border/10">
                            <span className="text-[10px] text-muted-foreground block mb-0.5">ĐÁP ÁN ĐÚNG:</span>
                            <span className="text-primary">
                              <LatexRenderer text={correctAnsText} />
                            </span>
                          </div>
                        </div>
                      )}

                      {attempt?.proofImages && attempt.proofImages.length > 0 && (
                        <div className="mt-3.5 space-y-2">
                          <span className="text-[10px] text-muted-foreground block font-bold tracking-wider">ẢNH BÀI LÀM ĐÃ NỘP:</span>
                          <div className="flex flex-wrap gap-3">
                            {attempt.proofImages.map((img: any, i: number) => (
                              <a
                                key={img.id || i}
                                href={img.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative group overflow-hidden rounded-xl border border-border/50 bg-slate-100 dark:bg-slate-900 hover:border-primary/50 transition-all shadow-sm"
                              >
                                <img src={img.downloadUrl} alt="Ảnh bài làm" className="h-24 w-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-[10px] text-white font-extrabold">Xem ảnh lớn</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {(selectedSubject === 'math' || (attempt?.proofImages && attempt.proofImages.length > 0)) && (
                        <div className="mt-4 p-4 rounded-xl border border-purple-500/10 bg-purple-500/5 space-y-3">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-1.5 text-xs font-black text-purple-600 dark:text-purple-400">
                              <Sparkles size={16} className="animate-pulse" />
                              <span>Trợ lý AI chấm bài tự động (Gemini)</span>
                            </div>
                            
                            {!aiFeedback[q.id] && (
                              <Button
                                onClick={() => handleRequestAiGrading(q, attempt)}
                                disabled={aiLoading[q.id] || !hasSubmitted}
                                className="h-7 text-[10px] font-black bg-purple-600 hover:bg-purple-700 text-white gap-1 px-3.5 rounded-lg active:scale-[0.98] transition-all shadow-md shadow-purple-500/10 border-none shrink-0"
                              >
                                {aiLoading[q.id] ? (
                                  <>
                                    <div className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                                    <span>Đang chấm...</span>
                                  </>
                                ) : (
                                  <>
                                    <Sparkles size={12} />
                                    <span>Xem AI chấm bài</span>
                                  </>
                                )}
                              </Button>
                            )}
                          </div>

                          {aiFeedback[q.id] ? (
                            <div className="space-y-2 text-xs animate-fade-in font-semibold text-muted-foreground">
                              <div className={`p-2.5 rounded-lg font-extrabold flex items-center gap-1.5 ${
                                aiFeedback[q.id].isCorrect 
                                  ? 'bg-emerald-100/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400' 
                                  : 'bg-rose-100/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400'
                              }`}>
                                {aiFeedback[q.id].isCorrect ? '✅ Đạt yêu cầu' : '⚠️ Chưa đạt yêu cầu'} 
                                <span className="text-[10px] opacity-75 font-normal">| Điểm số đề xuất:</span>
                                <span className="underline font-black text-foreground">{aiFeedback[q.id].score} / 10 điểm</span>
                              </div>
                              <div className="p-3 bg-white/50 dark:bg-slate-900/60 rounded-lg border border-purple-500/5 text-[11px] leading-relaxed text-foreground/90 font-medium">
                                <LatexRenderer text={aiFeedback[q.id].feedback} />
                              </div>
                            </div>
                          ) : (
                            <p className="text-[10px] font-semibold">
                              {!hasSubmitted ? (
                                <span className="text-rose-500 dark:text-rose-400 flex items-center gap-1.5">
                                  <AlertTriangle size={12} className="shrink-0" />
                                  Học sinh chưa nộp bài làm cho câu hỏi này. Vui lòng nhập câu trả lời hoặc chụp ảnh bài giải để được AI chấm bài.
                                </span>
                              ) : (
                                <span className="text-muted-foreground">
                                  Bạn có thể yêu cầu AI chấm điểm lời giải viết tay hoặc lời giải bằng chữ để nhận phản hồi phân tích chi tiết tức thì.
                                </span>
                              )}
                            </p>
                          )}
                        </div>
                      )}

                      {solution && (
                        <div className="pt-2">
                          <button
                            onClick={() => toggleSolution(q.id)}
                            className="text-xs font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            {isExpanded ? 'Ẩn lời giải chi tiết ▲' : 'Xem lời giải chi tiết & dịch nghĩa ▼'}
                          </button>

                          {isExpanded && (
                            <div className="mt-3 p-4 bg-primary/5 rounded-xl border border-primary/10 space-y-4 text-xs leading-relaxed animate-fade-in text-muted-foreground font-semibold">
                              {solution.translation && (
                                <div className="space-y-1">
                                  <h6 className="font-extrabold text-foreground">Dịch nghĩa câu hỏi:</h6>
                                  <p className="text-[11px] text-muted-foreground">{solution.translation}</p>
                                </div>
                              )}

                              <div className="space-y-3">
                                <h6 className="font-extrabold text-foreground">Các bước giải chi tiết:</h6>
                                {solution.detailedSteps.map(step => (
                                  <div key={step.order} className="pl-3 border-l-2 border-primary/30 space-y-1">
                                    <div className="font-extrabold text-foreground">
                                      Bước {step.order}: {step.title}
                                    </div>
                                    <div className="text-[11px]">
                                      <LatexRenderer text={step.explanation} />
                                    </div>
                                    {step.formula && (
                                      <div className="my-1.5 p-2 bg-slate-50 dark:bg-slate-950 rounded border border-border/20 text-foreground">
                                        <LatexRenderer text={step.formula} />
                                      </div>
                                    )}
                                    {step.result && (
                                      <div className="text-[11px] font-bold text-primary">
                                        Kết quả: <LatexRenderer text={step.result} />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {solution.commonMistakes && solution.commonMistakes.length > 0 && (
                                <div className="space-y-1 bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg text-rose-700 dark:text-rose-400">
                                  <h6 className="font-extrabold flex items-center gap-1"><AlertTriangle size={12} /> Lỗi sai thường gặp:</h6>
                                  <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                                    {solution.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Thoát phòng thi */}
            <Button
              onClick={() => { clearAllProofImages(); setExamState('intro'); navigate('/dashboard'); }}
              className="w-full font-bold py-3 text-xs active:scale-[0.98] mt-4"
            >
              Quay lại Bảng điều khiển
            </Button>
          </CardContent>
        </Card>

      </div>
    );
  }

  return null;
};
export default ExamEngine;
