import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { Question, Solution } from '../../../types';
import { validateAnswer } from '../../../utils/answerValidator';
import { cn } from '../../../utils/cn';
import { getSubjectTheme } from '../../../utils/theme';
import { BookOpen, CheckCircle, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ExamPracticeViewProps {
  questions: Question[];
  currentIdx: number;
  setCurrentIdx: (val: number) => void;
  examAnswers: Record<string, string>;
  setExamAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  isExamSubmitted: boolean;
  setIsExamSubmitted: (val: boolean) => void;
  examTimeLimit: number;
  examTimeLeft: number;
  examTotalTimeSpent: number;
  selectedSubTense: string | null;
  setSelectedSubTense: (val: any) => void;
  setIsExamMode: (val: boolean) => void;
  setIsConfiguringExam: (val: boolean) => void;
  setExamQuestions: (val: Question[]) => void;
  handleExamSubmit: (auto?: boolean) => void;
  startExamPractice: () => void;
  startTensesReview: () => void;
  handleOptionSelect: (letter: string) => void;
  handleNext: () => void;
  solutionDetail: Solution | null;
  routeSubject: 'math' | 'english';
}

export const ExamPracticeView: React.FC<ExamPracticeViewProps> = ({
  questions,
  currentIdx,
  setCurrentIdx,
  examAnswers,
  setExamAnswers,
  isExamSubmitted,
  setIsExamSubmitted,
  setIsExamMode,
  setIsConfiguringExam,
  setExamQuestions,
  examTimeLimit,
  examTimeLeft,
  examTotalTimeSpent,
  selectedSubTense,
  setSelectedSubTense,
  handleExamSubmit,
  startExamPractice,
  startTensesReview,
  handleOptionSelect,
  handleNext,
  solutionDetail,
  routeSubject,
}) => {
  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIdx];
  const score = questions.filter(q => validateAnswer(q, examAnswers[q.id] || '')).length;
  const correctAnswersCount = score;
  const incorrectAnswersCount = questions.length - score;
  const percentage = Math.round((score / questions.length) * 100);

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
                <p className="text-xs font-bold">Số câu đúng: <span className="text-emerald-300 font-black">{correctAnswersCount} / {questions.length}</span></p>
                <p className="text-xs font-bold">Số câu sai: <span className="text-rose-300 font-black">{incorrectAnswersCount} / {questions.length}</span></p>
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
        {questions.map((q, idx) => {
          const isActive = idx === currentIdx;
          const hasAnswer = examAnswers[q.id] !== undefined;
          const isCorrect = isExamSubmitted && validateAnswer(q, examAnswers[q.id] || '');

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
            Câu hỏi {currentIdx + 1} / {questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Content */}
          <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
            <LatexRenderer text={currentQuestion.content} />
          </div>

          {/* Answer Options list or text input for fill-in-the-blank */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options && currentQuestion.options.length > 0 ? (
              currentQuestion.options.map((opt: string, i: number) => {
                const optLetter = opt.charAt(0);
                const isSelected = examAnswers[currentQuestion.id] === optLetter;
                const isCorrectAnswer = currentQuestion.correctAnswer === optLetter;

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
              })
            ) : (
              // Điền từ tự do trong Exam Mode
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground">
                  {isExamSubmitted ? "Đáp án của bạn:" : "Nhập đáp án của bạn:"}
                </label>
                <input
                  type="text"
                  disabled={isExamSubmitted}
                  value={examAnswers[currentQuestion.id] || ''}
                  onChange={(e) => {
                    const typedVal = e.target.value;
                    setExamAnswers(prev => ({ ...prev, [currentQuestion.id]: typedVal }));
                  }}
                  placeholder={isExamSubmitted ? "Không có câu trả lời" : "Nhập từ cần điền (ví dụ: inventions)..."}
                  className={cn(
                    "w-full p-4 rounded-xl text-xs font-semibold border focus:outline-none transition-all duration-150 bg-card text-foreground",
                    isExamSubmitted
                      ? validateAnswer(currentQuestion, examAnswers[currentQuestion.id] || '')
                        ? "border-emerald-500 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                        : "border-rose-500 bg-rose-500/5 text-rose-700 dark:text-rose-400"
                      : "border-border focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  )}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isExamSubmitted) {
                      handleNext();
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Review Status Banner after submission */}
          {isExamSubmitted && (
            <div className={cn(
              "p-4 rounded-xl border flex items-center gap-3",
              validateAnswer(currentQuestion, examAnswers[currentQuestion.id] || '')
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                : "bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400"
            )}>
              {validateAnswer(currentQuestion, examAnswers[currentQuestion.id] || '') ? (
                <>
                  <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-sm">Chính xác!</h4>
                    <p className="text-xs font-semibold opacity-90">
                      {currentQuestion.options && currentQuestion.options.length > 0 ? (
                        `Bạn đã chọn đáp án đúng.`
                      ) : (
                        `Bạn đã nhập đúng đáp án: "${examAnswers[currentQuestion.id]}".`
                      )}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={24} className="text-rose-500 shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-sm">Chưa chính xác!</h4>
                    <p className="text-xs font-semibold opacity-90">
                      {currentQuestion.options && currentQuestion.options.length > 0 ? (
                        examAnswers[currentQuestion.id]
                          ? `Bạn đã chọn đáp án ${examAnswers[currentQuestion.id]}. Đáp án đúng là ${currentQuestion.correctAnswer}.`
                          : `Bạn đã bỏ qua câu hỏi này. Đáp án đúng là ${currentQuestion.correctAnswer}.`
                      ) : (
                        examAnswers[currentQuestion.id]
                          ? `Bạn đã nhập: "${examAnswers[currentQuestion.id]}". Đáp án đúng là "${currentQuestion.correctAnswer}".`
                          : `Bạn đã bỏ qua câu hỏi này. Đáp án đúng là "${currentQuestion.correctAnswer}".`
                      )}
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

              {solutionDetail.translation && (
                <div className="text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/10 border-border/30">
                  <span className="font-extrabold text-foreground block mb-1">🇬🇧 Dịch nghĩa câu hỏi:</span>
                  <p className="italic">"{solutionDetail.translation}"</p>
                </div>
              )}

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
              {currentIdx === questions.length - 1 && isExamSubmitted ? "Thoát xem" : "Câu tiếp"} <ArrowRight size={14} />
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};
export default ExamPracticeView;
