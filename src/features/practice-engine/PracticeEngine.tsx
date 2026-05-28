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
  Sparkles
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
  const { selectedSubject, setSubject, user, progressVersion } = useAppStore();
  void progressVersion;
  const routeSubject = getSubjectFromQuestionTypeId(questionTypeId) ?? selectedSubject;
  const progress = storageService.getProgress(user?.uid ?? 'guest').masteryLevels;


  const [currentIdx, setCurrentIdx] = useState(0);
  const [structuredAnswer, setStructuredAnswer] = useState<StructuredAnswer>({});
  const [proofImages, setProofImages] = useState<LocalProofImage[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [existingAttempt, setExistingAttempt] = useState<UserAttempt | null>(null);

  // Quản lý trạng thái upload tiến trình & điều khiển
  const [uploadProgress, setUploadProgress] = useState<Record<string, ProofImageUploadProgress>>({});
  const [uploadControls, setUploadControls] = useState<Record<string, UploadControl>>({});

  const proofImagesRef = React.useRef(proofImages);
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

  const questions: Question[] = questionTypeId
    ? qList.filter(q => q.questionTypeId === questionTypeId)
    : qList;

  const questionAtIdx = questions[currentIdx] || null;

  const solutionDetail: Solution | null = questionAtIdx
    ? (isMath
      ? mathSolutions.find(s => s.questionId === questionAtIdx.id)
      : englishSolutions.find(s => s.questionId === questionAtIdx.id)) || null
    : null;

  const completedQuestionIds = useMemo(() => {
    const userId = user?.uid ?? 'guest';
    const attempts = storageService.getAttempts(userId);
    return new Set(
      attempts
        .filter(a => a.questionTypeId === questionTypeId)
        .map(a => a.questionId)
    );
  }, [user, questionTypeId, currentIdx, isSubmitted]);

  const resetQuestionState = useCallback(() => {
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
  }, [routeSubject, questionTypeId, resetQuestionState]);

  // Tự động kiểm tra và tải bài làm cũ của học sinh đối với câu hỏi này để tránh bắt làm lại từ đầu
  useEffect(() => {
    if (questions.length === 0) return;
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    let isMounted = true;

    const checkAttempt = async () => {
      // 1. Xem trước trong LocalStorage để render tức thì
      const userAttemptsLocal = storageService.getAttempts(user?.uid ?? 'guest');
      const attemptsForQLocal = userAttemptsLocal
        .filter(a => a.questionId === currentQ.id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestAttemptLocal = attemptsForQLocal[0] || null;

      if (latestAttemptLocal) {
        if (isMounted) {
          setExistingAttempt(latestAttemptLocal);
          setIsSubmitted(true);
          setIsCorrect(latestAttemptLocal.isCorrect);
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
              setExistingAttempt(latestAttemptRemote);
              setIsSubmitted(true);
              setIsCorrect(latestAttemptRemote.isCorrect);
            } else {
              setExistingAttempt(null);
              setIsSubmitted(false);
              setIsCorrect(false);
              setProofImages([]);
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
        }
      }
    };

    checkAttempt();

    return () => {
      isMounted = false;
    };
  }, [currentIdx, questionTypeId, questions, user]);

  const handleRetry = () => {
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
      gradingMode: isMath ? 'manual' : (currentQ.answerSchema?.autoCheckMode === 'manual' ? 'manual' : 'auto'),
      isCorrect: correct,
      timeSpent: Math.round((getNow() - questionStartAt) / 1000),
      createdAt: new Date().toISOString()
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
    setExistingAttempt(attemptData);
  };

  const handleNext = () => {
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

  if (isMath && !user) {
    return (
      <MathLoginRequired
        title="Đăng nhập để luyện tập môn Toán"
        description="Bài Toán cần lưu ảnh lời giải và tiến độ cá nhân theo tài khoản. Bạn cần đăng nhập trước khi chọn dạng bài hoặc nộp bài Toán."
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
          onClick={() => navigate('/practice')}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all"
        >
          ← Đổi dạng bài ôn tập
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
              {solutionDetail && (
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
                ) : isCorrect ? (
                  <>
                    <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-sm">Chính xác! Cực kỳ xuất sắc.</h4>
                      <p className="text-xs font-semibold opacity-90">Bạn đã tăng điểm số Mastery cho dạng bài này.</p>
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
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  className="flex-1 font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5 border border-border/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/5 cursor-pointer h-10"
                >
                  🔄 Làm lại bài này
                </Button>
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
