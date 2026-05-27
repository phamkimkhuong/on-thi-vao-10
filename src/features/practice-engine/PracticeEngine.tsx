import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../data/englishData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { Question, Solution } from '../../types';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRight,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';

const getNow = () => Date.now();

export const PracticeEngine: React.FC = () => {
  const { selectedSubject, selectedQuestionTypeId, selectQuestionType, setView } = useAppStore();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Quản lý mức độ gợi ý (0: không gợi ý, 1: hiện gợi ý bước 1, 2: hiện gợi ý bước 2,...)
  const [hintLevel, setHintLevel] = useState(0);
  const [timeStart] = useState(() => Date.now());

  // Derived States - Tính toán trực tiếp trong lúc render
  const isMath = selectedSubject === 'math';
  const qList = isMath ? mathQuestions : englishQuestions;

  const questions: Question[] = selectedQuestionTypeId
    ? qList.filter(q => q.questionTypeId === selectedQuestionTypeId)
    : qList;

  const questionAtIdx = questions[currentIdx] || null;

  const solutionDetail: Solution | null = questionAtIdx
    ? (isMath
      ? mathSolutions.find(s => s.questionId === questionAtIdx.id)
      : englishSolutions.find(s => s.questionId === questionAtIdx.id)) || null
    : null;

  const resetQuestionState = () => {
    setUserAnswer('');
    setSelectedOption(null);
    setIsSubmitted(false);
    setHintLevel(0);
  };

  // Reset index và state khi chuyển đổi dạng bài hoặc môn học
  useEffect(() => {
    setCurrentIdx(0);
    resetQuestionState();
  }, [selectedSubject, selectedQuestionTypeId]);

  const handleOptionSelect = (optLetter: string) => {
    if (isSubmitted) return;
    setSelectedOption(optLetter);
  };

  const handleSubmit = () => {
    if (questions.length === 0 || isSubmitted) return;

    const currentQ = questions[currentIdx];
    const isMath = selectedSubject === 'math';

    let correct: boolean;
    let finalAnswer = userAnswer;

    if (isMath) {
      // Chuẩn hóa câu trả lời tự luận để so sánh tương đối
      const cleanUser = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
      const cleanCorrect = currentQ.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');

      // So sánh trực tiếp hoặc bán trực tiếp
      correct = cleanUser === cleanCorrect || cleanCorrect.includes(cleanUser) && cleanUser.length > 1;
    } else {
      correct = selectedOption === currentQ.correctAnswer;
      finalAnswer = selectedOption || '';
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }

    // Lưu vào LocalStorage
    storageService.saveAttempt({
      id: `attempt-${getNow()}`,
      userId: 'guest',
      questionId: currentQ.id,
      questionTypeId: currentQ.questionTypeId,
      userAnswer: finalAnswer,
      isCorrect: correct,
      timeSpent: Math.round((getNow() - timeStart) / 1000),
      createdAt: new Date().toISOString()
    });
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      resetQuestionState();
    } else {
      // Khi đã làm hết các câu hỏi
      alert('Tuyệt vời! Bạn đã hoàn thành toàn bộ bài tập trong lượt luyện này.');
      setView('dashboard');
    }
  };

  const triggerNextHint = () => {
    if (!solutionDetail) return;
    const maxSteps = solutionDetail.detailedSteps.length;
    setHintLevel(prev => Math.min(maxSteps, prev + 1));
  };

  // Nếu không có selectedQuestionTypeId và học sinh vào thẳng Practice từ Menu
  // Hãy hiển thị danh sách dạng bài để học sinh chọn dạng để luyện
  if (!selectedQuestionTypeId) {
    const types = selectedSubject === 'math' ? mathQuestionTypes : englishQuestionTypes;

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground tracking-tight">Chọn dạng bài cần rèn luyện</h2>
          <p className="text-xs text-muted-foreground font-semibold">Tập trung rèn luyện chuyên sâu từng dạng sẽ giúp tăng điểm số nhanh hơn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {types.map((type) => {
            const isMath = type.id.startsWith('math');
            return (
              <Card
                key={type.id}
                className="hover:border-primary/50 cursor-pointer transition-all duration-200"
                onClick={() => selectQuestionType(type.id)}
              >
                <CardContent className="p-5 flex justify-between items-center gap-4">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isMath ? 'bg-indigo-100 dark:bg-indigo-950 text-primary' : 'bg-violet-100 dark:bg-violet-950 text-violet-500'
                      }`}>
                      {isMath ? '📐 Toán' : '🗣️ Anh'}
                    </span>
                    <h4 className="font-extrabold text-sm text-foreground truncate">{type.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{type.description}</p>
                  </div>
                  <Button variant="outline" size="sm" className="font-bold text-xs shrink-0 border border-border/50">
                    Luyện tập
                  </Button>
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
        <Button onClick={() => selectQuestionType(null)} variant="outline" className="text-xs font-bold border border-border/50">
          Quay lại danh sách dạng bài
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12">

      {/* Header trạng thái luyện tập */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => selectQuestionType(null)}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
        >
          ← Đổi dạng bài ôn tập
        </button>
        <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          Câu {currentIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Card câu hỏi chính */}
      <Card className="border-indigo-500/10 shadow-md">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
          <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2">
            <BookOpen size={16} className="text-primary" />
            Luyện tập: {mathQuestionTypes.find(t => t.id === selectedQuestionTypeId)?.name || englishQuestionTypes.find(t => t.id === selectedQuestionTypeId)?.name}
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
                // Tự luận cho môn Toán
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground block">Nhập đáp số của bạn (Ví dụ: x = 1/4):</label>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Nhập câu trả lời ngắn tại đây..."
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold placeholder:text-muted-foreground/50 placeholder:font-normal"
                  />
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
                    className="self-start text-[11px] font-bold text-indigo-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer bg-indigo-50/50 dark:bg-indigo-950/20 px-3 py-1.5 rounded-lg border border-indigo-500/10"
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
                            <p>{step.explanation}</p>
                            {step.formula && (
                              <div className="mt-1 bg-secondary/30 p-1.5 rounded text-foreground inline-block">
                                <LatexRenderer text={step.formula} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bấm nộp bài */}
              <Button
                onClick={handleSubmit}
                disabled={isMath ? !userAnswer.trim() : !selectedOption}
                className="w-full font-bold py-3 mt-4 text-xs active:scale-[0.98]"
              >
                Nộp bài tập
              </Button>
            </div>
          ) : (
            // Vùng hiển thị kết quả sau khi nộp bài
            <div className="space-y-6 animate-fade-in">
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400'
                }`}>
                {isCorrect ? (
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

              {/* Lời giải chi tiết hiện lên */}
              {solutionDetail && (
                <div className="space-y-4 border-t border-border/30 pt-6 animate-fade-in">
                  <h4 className="font-extrabold text-sm text-foreground">🔬 Lời giải chi tiết:</h4>

                  <div className="text-xs font-semibold text-muted-foreground bg-indigo-50/30 dark:bg-indigo-950/10 p-3.5 rounded-xl border border-indigo-500/10">
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
                          <p>{step.explanation}</p>
                          {step.formula && (
                            <div className="my-2 p-2 bg-secondary/50 rounded-lg text-foreground border border-border/5 overflow-x-auto">
                              <LatexRenderer text={step.formula} block={true} />
                            </div>
                          )}
                          {step.result && (
                            <p className="text-primary font-bold mt-1">👉 Kết quả bước: {step.result}</p>
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

              {/* Tiếp tục / Đổi câu */}
              <Button
                onClick={handleNext}
                className="w-full font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                Câu tiếp theo <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

    </div>
  );
};
export default PracticeEngine;
