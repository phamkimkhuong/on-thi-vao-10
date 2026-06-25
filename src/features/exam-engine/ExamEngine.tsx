import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { logCustomEvent } from '../../services/firebase';
import { mathQuestions, mathQuestionTypes, mathSolutions } from '../../data/mathData';
import { englishQuestions, englishQuestionTypes, englishSolutions } from '../../data/englishData';
import { mockExamsList } from '../../data/mockExamsData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { AnswerFormRenderer } from '../../components/common/AnswerFormRenderer';
import { aiService } from '../../services/aiService';

import { ProofImageUploader } from '../../components/common/ProofImageUploader';
import { Question, ExamResult, StructuredAnswer, UserAttempt } from '../../types';
import { formatAnswerForDisplay, validateAnswer } from '../../utils/answerValidator';
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
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamEngine: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, user } = useAppStore();

  useEffect(() => {
    const start = Date.now();
    return () => {
      const durationSeconds = Math.round((Date.now() - start) / 1000);
      const durationMinutes = Math.round((durationSeconds / 60) * 100) / 100;
      if (durationSeconds > 2) {
        logCustomEvent('study_session_end', {
          subject: selectedSubject === 'math' ? 'Toán' : 'Anh',
          duration_minutes: durationMinutes,
          duration_seconds: durationSeconds,
          mode: 'exam'
        });
      }
    };
  }, [selectedSubject]);

  const [examState, setExamState] = useState<'intro' | 'testing' | 'result'>('intro');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // Lưu trữ câu trả lời của học sinh
  const [finalAnswers, setFinalAnswers] = useState<Record<string, StructuredAnswer>>({});
  const [proofImagesByQuestion, setProofImagesByQuestion] = useState<Record<string, LocalProofImage[]>>({});

  const [selectedExamId, setSelectedExamId] = useState<string>('');
  const subjectExams = mockExamsList.filter(exam => exam.subjectId === selectedSubject);

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
    const isMath = selectedSubject === 'math';
    const solutions = isMath ? mathSolutions : englishSolutions;
    return solutions.find(s => s.questionId === questionId);
  };

  useEffect(() => {
    if (subjectExams.length > 0) {
      setSelectedExamId(subjectExams[0].id);
    } else {
      setSelectedExamId('');
    }
  }, [selectedSubject]);

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

  const currentExam = mockExamsList.find(exam => exam.id === selectedExamId) || subjectExams[0];
  const durationMinutes = currentExam ? currentExam.duration : (selectedSubject === 'math' ? 120 : 60);
  const availableExamQuestions = selectedSubject === 'math' ? mathQuestions : englishQuestions;

  const handleSubmitExam = useCallback(async () => {
    if (isSubmittingExam) return;

    setIsSubmittingExam(true);
    setExamSubmitError(null);

    let correctCount = 0;
    const totalCount = examQuestions.length;
    const attemptResults: ExamResult['attempts'] = {};
    const currentUserId = user!.uid;
    const completedAt = new Date().toISOString();
    const examId = `exam-${selectedSubject}-${Date.now()}`;
    const examAttempts: UserAttempt[] = [];

    for (const q of examQuestions) {
      const answerInput = q.answerSchema ? (finalAnswers[q.id] ?? {}) : answers[q.id] || '';
      const userAns = formatAnswerForDisplay(q, answerInput);
      const isCorrect = validateAnswer(q, answerInput);
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

      if (isCorrect) correctCount++;
      attemptResults[q.id] = {
        userAnswer: userAns,
        ...(q.answerSchema ? { finalAnswer: finalAnswers[q.id] ?? {} } : {}),
        ...(uploadedProofImages.length > 0 ? { proofImages: uploadedProofImages } : {}),
        isCorrect
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

    const score = Math.round((correctCount / totalCount) * 10 * 10) / 10; // Thang điểm 10 làm tròn 1 chữ số

    const result: ExamResult = {
      examId,
      score,
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

    if (score >= 8.0) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [examQuestions, answers, finalAnswers, proofImagesByQuestion, selectedSubject, timeSpent, user, isSubmittingExam]);

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
    clearAllProofImages();
    // Bốc các câu hỏi thuộc đề thi thử được chọn
    if (currentExam) {
      const questionsForExam = currentExam.questionIds
        .map(id => availableExamQuestions.find(q => q.id === id))
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

    const isMath = selectedSubject === 'math';
    const typeList = isMath ? mathQuestionTypes : englishQuestionTypes;

    // Group kết quả theo QuestionType
    const analysis: Record<string, { name: string, total: number, correct: number }> = {};

    examQuestions.forEach(q => {
      const type = typeList.find(t => t.id === q.questionTypeId);
      const typeName = type?.name || 'Dạng bài khác';
      const typeId = q.questionTypeId;

      if (!analysis[typeId]) {
        analysis[typeId] = {
          name: typeName,
          total: 0,
          correct: 0
        };
      }

      analysis[typeId].total += 1;
      if (examResult.attempts[q.id]?.isCorrect) {
        analysis[typeId].correct += 1;
      }
    });

    return Object.entries(analysis).map(([typeId, data]) => ({
      typeId,
      ...data,
      percent: Math.round((data.correct / data.total) * 100)
    }));
  };

  // RENDER GIAO DIỆN GIỚI THIỆU ĐỀ THI
  if (examState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground">Phòng thi thử tuyển sinh vào lớp 10</h2>
          <p className="text-xs text-muted-foreground font-semibold">Đánh giá chuẩn xác năng lực học tập và rèn luyện tâm lý phòng thi thực tế.</p>
        </div>

        {/* Danh sách đề thi */}
        <div className="space-y-3">
          <label className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider block">Hãy chọn đề thi thử:</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subjectExams.map(exam => {
              const isSelected = selectedExamId === exam.id;
              return (
                <button
                  key={exam.id}
                  onClick={() => setSelectedExamId(exam.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected
                      ? 'bg-primary/5 border-primary shadow-sm shadow-primary/5'
                      : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/5 text-foreground'
                    }`}
                >
                  <h4 className="font-extrabold text-xs text-foreground mb-1">{exam.title}</h4>
                  <p className="text-[10px] text-muted-foreground font-semibold">
                    ⏱️ {exam.duration} phút • 📝 {exam.questionIds.length} câu hỏi
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {currentExam && (
          <Card className="border-indigo-500/10 shadow-md">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
              <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2">
                <Award className="text-primary" size={18} />
                Thông tin chi tiết: {currentExam.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary rounded-xl border border-border/10">
                  <span className="text-[10px] font-bold text-muted-foreground block mb-1">THỜI GIAN LÀM BÀI</span>
                  <span className="text-xs font-extrabold text-foreground">{currentExam.duration} phút</span>
                </div>
                <div className="p-4 bg-secondary rounded-xl border border-border/10">
                  <span className="text-[10px] font-bold text-muted-foreground block mb-1">SỐ CÂU HỎI TRỰC CHIẾN</span>
                  <span className="text-xs font-extrabold text-foreground">
                    {currentExam.questionIds.length} câu
                  </span>
                </div>
              </div>

              <div className="space-y-3 bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl text-xs font-semibold text-amber-700 dark:text-amber-400">
                <h4 className="font-extrabold flex items-center gap-1.5"><AlertTriangle size={14} /> Quy chế phòng thi thử:</h4>
                <p>• Hệ thống sẽ tự động chuyển sang **Focus Mode** (Chế độ tập trung), ẩn các thanh sidebar gây xao nhãng.</p>
                <p>• Hết giờ làm bài hệ thống sẽ tự động nộp bài thi.</p>
                <p>• Dữ liệu bài thi sẽ được phân tích sâu để tìm điểm yếu của bạn.</p>
              </div>

              <Button
                onClick={handleStartExam}
                className="w-full font-bold py-3.5 text-xs active:scale-[0.98] shadow-md shadow-primary/20 flex items-center justify-center gap-1.5"
              >
                <Play size={14} className="fill-white" /> Bắt đầu tính giờ thi thử
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // RENDER GIAO DIỆN LÀM BÀI THI THỬ (TESTING MODE - FOCUS MODE)
  if (examState === 'testing') {
    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-20">

        {/* Header phòng thi nổi (Sticky) */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-md py-4 border-b border-border/50 flex items-center justify-between z-30 px-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-red-500 animate-pulse uppercase tracking-wider">● Đang trong giờ thi thử nghiêm túc</span>
            <h3 className="text-sm font-extrabold text-foreground">
              Đề thi thử {selectedSubject === 'math' ? 'Toán học Vào 10' : 'Tiếng Anh Vào 10'}
            </h3>
          </div>

          <div className="flex items-center gap-3 bg-card border border-border px-4 py-2 rounded-xl shadow-sm">
            <Timer className="text-red-500 animate-pulse" size={18} />
            <span className="font-black text-sm text-foreground tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Danh sách câu hỏi */}
        <div className="space-y-6">
          {examQuestions.map((q, idx) => (
            <Card key={q.id} className="border-border">
              <CardHeader className="bg-slate-50/30 dark:bg-slate-900/5 py-3 border-b border-border/30">
                <span className="text-xs font-bold text-muted-foreground">Câu hỏi số {idx + 1}</span>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/10 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
                  <LatexRenderer text={q.content} />
                </div>

                {/* Phần trả lời */}
                {q.options && q.options.length > 0 ? (
                  // Chọn trắc nghiệm (Dành cho Tiếng Anh MCQ hoặc Câu hỏi có sẵn phương án)
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt: string, i: number) => {
                      const optLetter = opt.charAt(0);
                      const isSelected = answers[q.id] === optLetter;
                      return (
                        <button
                          key={i}
                          onClick={() => handleOptionSelect(q.id, optLetter)}
                          className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer ${isSelected
                            ? 'bg-primary/10 border-primary text-primary shadow-sm'
                            : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground'
                            }`}
                        >
                          {opt}
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
                    <label className="text-xs font-bold text-muted-foreground block">
                      {selectedSubject === 'math' ? 'Đáp số của bạn:' : 'Đáp án của bạn:'}
                    </label>
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      placeholder={selectedSubject === 'math' ? 'Nhập đáp số...' : 'Nhập câu trả lời...'}
                      className="w-full sm:max-w-md bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold"
                    />
                  </div>
                )}

                {selectedSubject === 'math' && (
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
          ))}
        </div>

        {examSubmitError && (
          <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
            {examSubmitError}
          </p>
        )}

        {/* Nộp bài thi */}
        <Button
          onClick={handleSubmitExam}
          disabled={isSubmittingExam}
          className="w-full font-bold py-4 text-xs bg-red-500 hover:bg-red-600 active:scale-[0.98] shadow-md shadow-red-500/10 flex items-center justify-center gap-1.5"
        >
          <CheckSquare size={16} /> {isSubmittingExam ? 'Đang lưu bài thi...' : 'Nộp bài thi thử & Xem kết quả'}
        </Button>
      </div>
    );
  }

  // RENDER TRANG BÁO CÁO KẾT QUẢ THI THỬ (RESULT MODE)
  if (examState === 'result' && examResult) {
    const analysis = getExamAnalysis();

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">

        {/* Kết quả chung */}
        <Card className="border-indigo-500/10 shadow-md overflow-hidden relative">
          <CardHeader className="bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground p-6 md:p-8 text-center">
            <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Báo cáo kết quả thi thử</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight leading-none">{examResult.score} <span className="text-sm font-bold opacity-75">/ 10 điểm</span></h2>
            <p className="text-xs text-indigo-100 font-semibold mt-2.5">
              Đúng {examResult.correctCount} / {examResult.totalCount} câu • Thời gian làm bài: {formatTime(examResult.timeSpent)}
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">

            {/* Lời khuyên cá nhân hóa */}
            <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-500/10 rounded-xl space-y-1.5 text-xs font-semibold text-muted-foreground">
              <span className="font-extrabold text-foreground flex items-center gap-1"><Zap size={14} className="text-amber-500" /> Nhận xét năng lực:</span>
              {examResult.score >= 8.0 ? (
                <p className="text-emerald-600 dark:text-emerald-400">Xuất sắc! Năng lực hiện tại của bạn đã rất vững chắc. Hãy tiếp tục giải thêm các đề nâng cao để củng cố tâm lý tốt nhất.</p>
              ) : examResult.score >= 5.0 ? (
                <p className="text-amber-600 dark:text-amber-400">Khá tốt! Bạn đã đạt mức điểm sàn trung bình ổn định. Tuy nhiên, vẫn còn một số dạng kiến thức bị lỏng lẻo cần khắc phục ngay.</p>
              ) : (
                <p className="text-rose-600 dark:text-rose-400">Cần cố gắng nhiều hơn! Điểm số này báo hiệu bạn đang bị hổng nhiều dạng bài cốt lõi. Hãy làm theo đề xuất rèn luyện dưới đây.</p>
              )}
            </div>

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
                        <p className="text-[10px] text-muted-foreground font-semibold">Tỷ lệ làm đúng: {item.correct} / {item.total} câu ({item.percent}%)</p>
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
                        ) : (
                          <span className="text-[9px] bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <X size={10} /> Sai
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-3 rounded-lg border border-border/10">
                        <LatexRenderer text={q.content} />
                      </div>

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
                                <span>{opt}</span>
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
                            <span className={isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>
                              {studentAnsText}
                            </span>
                          </div>
                          <div className="p-2.5 bg-slate-50/50 dark:bg-slate-900/10 rounded-lg border border-border/10">
                            <span className="text-[10px] text-muted-foreground block mb-0.5">ĐÁP ÁN ĐÚNG:</span>
                            <span className="text-primary">{correctAnsText}</span>
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
