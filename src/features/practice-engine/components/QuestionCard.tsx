import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { ProofImageUploader } from '../../../components/common/ProofImageUploader';
import { Question, Solution, StructuredAnswer, SubjectCode } from '../../../types';
import { AnswerFormRenderer } from '../../../components/common/AnswerFormRenderer';
import { LocalProofImage, revokeLocalProofImages } from '../../../utils/proofImages';
import { cn } from '../../../utils/cn';
import { getSubjectTheme } from '../../../utils/theme';
import { BookOpen, Lightbulb, ArrowLeft, ArrowRight, ChevronUp } from 'lucide-react';

interface QuestionCardProps {
  currentQuestion: Question;
  questionTypeId: string | undefined;
  selectedOption: string | null;
  handleOptionSelect: (letter: string) => void;
  setSelectedOption: (val: string | null) => void;
  hintLevel: number;
  triggerNextHint: () => void;
  solutionDetail: Solution | null;
  isMath: boolean;
  proofImages: LocalProofImage[];
  setProofImages: React.Dispatch<React.SetStateAction<LocalProofImage[]>>;
  isSubmitting: boolean;
  submitError: string | null;
  user: any;
  totalUploadStats: any;
  handlePauseUpload: () => void;
  handleResumeUpload: () => void;
  handleCancelUpload: () => void;
  submitDisabled: boolean;
  handleSubmit: () => void;
  currentIdx: number;
  questionsLength: number;
  setCurrentIdx: (val: number) => void;
  resetQuestionState: () => void;
  routeSubject: SubjectCode;
  structuredAnswer: StructuredAnswer;
  setStructuredAnswer: (val: StructuredAnswer) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  currentQuestion,
  questionTypeId,
  selectedOption,
  handleOptionSelect,
  setSelectedOption,
  hintLevel,
  triggerNextHint,
  solutionDetail,
  isMath,
  proofImages,
  setProofImages,
  isSubmitting,
  submitError,
  user,
  totalUploadStats,
  handlePauseUpload,
  handleResumeUpload,
  handleCancelUpload,
  submitDisabled,
  handleSubmit,
  currentIdx,
  questionsLength,
  setCurrentIdx,
  resetQuestionState,
  routeSubject,
  structuredAnswer,
  setStructuredAnswer,
}) => {
  const theme = getSubjectTheme(routeSubject);

  // Phân tách options từ content nếu validatorType === 'choice' và không có options riêng biệt
  let displayOptions = currentQuestion.options;
  let cleanContent = currentQuestion.content;

  if (
    (!displayOptions || displayOptions.length === 0) &&
    currentQuestion.validatorType === 'choice' &&
    currentQuestion.content.includes('\nA.')
  ) {
    const parts = currentQuestion.content.split(/\n(?=[A-D]\.\s)/);
    if (parts.length >= 2) {
      cleanContent = parts[0];
      displayOptions = parts.slice(1).map(opt => opt.trim());
    }
  }

  return (
    <Card className="glass border-border/40 shadow-lg rounded-3xl overflow-hidden">
      <CardHeader className="bg-secondary/20 border-b border-border/20 p-5">
        <CardTitle className="text-foreground text-sm font-black flex items-center gap-2 font-sans">
          <BookOpen size={17} className={cn("animate-float shrink-0", theme.iconColor)} />
          Luyện tập: {currentQuestion.questionTypeId ? currentQuestion.questionTypeId : 'Câu hỏi'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Đề bài */}
        <div className="text-sm font-bold leading-relaxed text-foreground bg-secondary/30 dark:bg-slate-950/20 p-5 rounded-2xl border border-border/20 shadow-inner font-sans">
          <LatexRenderer text={cleanContent} />
        </div>

        {/* Vùng chọn đáp án */}
        <div className="space-y-4">
          {isMath ? (
            // Trình bày hướng dẫn nộp ảnh giải cho môn Toán
            <div className="bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-500/10 p-4.5 rounded-2xl space-y-2">
              <h4 className="text-xs font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider">
                📝 Trình bày lời giải tự luận:
              </h4>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                Hãy làm bài giải chi tiết ra giấy hoặc vở ghi của bạn. Sau đó, **chụp ảnh bài giải** và tải lên bên dưới để nộp bài làm.
              </p>
            </div>
          ) : currentQuestion.questionTypeId === 'eng-qt8' ? (
            // Custom selector for Gap Filling
            <div className="space-y-4">
              <span className="text-xs font-black text-muted-foreground block mb-2 uppercase tracking-wider">Chọn đáp án cho từng chỗ trống:</span>
              <div className="space-y-4">
                {currentQuestion.answerSchema?.fields.map((field, idx) => {
                  const rawOptions = currentQuestion.options?.[idx] || '';
                  const choices = rawOptions.split(',').map(c => c.trim());
                  const letters = ['A', 'B', 'C', 'D'];
                  const currentValue = structuredAnswer[field.key] ?? '';

                  return (
                    <div key={field.key} className="p-4.5 bg-secondary/20 dark:bg-slate-900/40 rounded-2xl border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3.5 transition-all">
                      <div className="flex items-center gap-2 shrink-0">
                        {/* Vòng tròn số thứ tự chỗ trống đổi màu theo môn học */}
                        <span className={cn(
                          "w-6.5 h-6.5 rounded-xl text-white flex items-center justify-center text-xs font-black shadow-md",
                          routeSubject === 'math' ? 'bg-gradient-to-tr from-indigo-500 to-indigo-600 shadow-indigo-500/10' :
                          routeSubject === 'chemistry' ? 'bg-gradient-to-tr from-emerald-500 to-emerald-600 shadow-emerald-500/10' :
                          'bg-gradient-to-tr from-purple-500 to-purple-600 shadow-purple-500/10'
                        )}>
                          {idx + 1}
                        </span>
                        <span className="text-xs font-extrabold text-foreground">{field.label}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-xl">
                        {choices.map((choice, cIdx) => {
                          const letter = letters[cIdx];
                          const isSelected = currentValue === letter || currentValue.toLowerCase() === choice.toLowerCase();
                          
                          return (
                            <button
                              key={letter}
                              type="button"
                              onClick={() => {
                                setStructuredAnswer({
                                  ...structuredAnswer,
                                  [field.key]: letter
                                });
                              }}
                              disabled={isSubmitting}
                              className={cn(
                                "px-3.5 py-2.5 rounded-xl text-xs font-extrabold border transition-all duration-200 active:scale-95 cursor-pointer text-left flex items-center gap-1.5",
                                isSelected
                                  ? (routeSubject === 'math' ? "bg-indigo-500/10 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-sm font-black" :
                                     routeSubject === 'chemistry' ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm font-black" :
                                     "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 shadow-sm font-black")
                                  : "bg-card border-border/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground"
                              )}
                            >
                              <span className={cn(
                                "text-[9px] w-4.5 h-4.5 rounded-md flex items-center justify-center font-black shrink-0",
                                isSelected
                                  ? (routeSubject === 'math' ? "bg-indigo-600 text-white" :
                                     routeSubject === 'chemistry' ? "bg-emerald-600 text-white" :
                                     "bg-purple-600 text-white")
                                  : "bg-secondary text-muted-foreground"
                              )}>{letter}</span>
                              <span className="truncate">{choice}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : currentQuestion.questionTypeId === 'eng-qt13' && currentQuestion.answerSchema ? (
            // Custom selector for Reading Comprehension (Đọc hiểu trắc nghiệm)
            <div className="space-y-6 animate-fade-in">
              <span className="text-xs font-black text-muted-foreground block uppercase tracking-wider">Chọn câu trả lời đúng cho từng câu hỏi bên dưới:</span>
              <div className="space-y-6">
                {currentQuestion.answerSchema.fields.map((field, idx) => {
                  const rawOptions = currentQuestion.options?.[idx] || '';
                  const choices = rawOptions.split('|').map(c => c.trim());
                  const letters = ['A', 'B', 'C', 'D'];
                  const currentValue = structuredAnswer[field.key] ?? '';

                  return (
                    <div key={field.key} className="p-5 bg-secondary/15 dark:bg-slate-900/30 rounded-2xl border border-border/40 space-y-4 transition-all hover:border-primary/20">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-xl bg-gradient-to-tr from-primary to-indigo-600 text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-md shadow-primary/15 mt-0.5 animate-float">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-black text-foreground leading-relaxed font-sans">
                          {field.label}
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2.5">
                        {choices.map((choice, cIdx) => {
                          const letter = letters[cIdx];
                          const isSelected = currentValue === letter || currentValue.toLowerCase() === choice.toLowerCase();
                          const cleanChoice = choice.replace(/^[A-D]\.\s*/i, '');
                          
                          return (
                            <button
                              key={letter}
                              type="button"
                              onClick={() => {
                                setStructuredAnswer({
                                  ...structuredAnswer,
                                  [field.key]: letter
                                });
                              }}
                              disabled={isSubmitting}
                              className={cn(
                                "w-full px-4.5 py-3.5 rounded-2xl text-xs font-extrabold border transition-all duration-200 active:scale-[0.99] cursor-pointer text-left flex items-start gap-3",
                                isSelected
                                  ? "bg-primary/10 border-primary text-primary shadow-sm font-black"
                                  : "bg-card border-border/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground hover:translate-x-1"
                              )}
                            >
                              <span className={cn(
                                "text-[10px] w-5 h-5 rounded-md flex items-center justify-center font-black shrink-0 mt-0.5",
                                isSelected ? "bg-primary text-white animate-pulse" : "bg-secondary text-muted-foreground"
                              )}>{letter}</span>
                              <span className="leading-relaxed">{cleanChoice}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : currentQuestion.questionTypeId === 'eng-qt14' && currentQuestion.answerSchema ? (
            // Custom selector for Reading True/False (Đọc hiểu Đúng / Sai)
            <div className="space-y-6 animate-fade-in">
              <span className="text-xs font-black text-muted-foreground block uppercase tracking-wider">Đọc các nhận định dưới đây và chọn Đúng (T - True) hoặc Sai (F - False):</span>
              <div className="space-y-4">
                {currentQuestion.answerSchema.fields.map((field, idx) => {
                  const currentValue = structuredAnswer[field.key] ?? '';
                  const choices = ['T', 'F'];

                  return (
                    <div key={field.key} className="p-4.5 bg-secondary/15 dark:bg-slate-900/30 rounded-2xl border border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-primary/20">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-xl bg-gradient-to-tr from-primary to-indigo-600 text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-md shadow-primary/10 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs font-extrabold text-foreground leading-relaxed font-sans">
                          {field.label}
                        </p>
                      </div>
                      
                      <div className="flex gap-2.5 shrink-0 self-end sm:self-center">
                        {choices.map((choice) => {
                          const isSelected = currentValue === choice;
                          const isTrue = choice === 'T';
                          
                          return (
                            <button
                              key={choice}
                              type="button"
                              onClick={() => {
                                setStructuredAnswer({
                                  ...structuredAnswer,
                                  [field.key]: choice
                                });
                              }}
                              disabled={isSubmitting}
                              className={cn(
                                "px-4.5 py-2.5 rounded-xl text-xs font-black border transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 w-26 h-10",
                                isSelected
                                  ? isTrue
                                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-black shadow-sm shadow-emerald-500/5 animate-pulse-glow"
                                    : "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 font-black shadow-sm shadow-rose-500/5 animate-pulse-glow"
                                  : "bg-card border-border/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground"
                              )}
                            >
                              {choice === 'T' ? 'True (T)' : 'False (F)'}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : currentQuestion.answerSchema ? (
            <AnswerFormRenderer
              question={currentQuestion}
              value={structuredAnswer}
              onChange={setStructuredAnswer}
              disabled={isSubmitting}
            />
          ) : (
            // Trắc nghiệm hoặc tự điền từ (fill-in-the-blank) cho môn Anh
            <div className="grid grid-cols-1 gap-3.5">
              {displayOptions && displayOptions.length > 0 ? (
                displayOptions.map((opt: string, i: number) => {
                  const optLetter = opt.charAt(0); // A, B, C, D
                  const isSelected = selectedOption === optLetter;
                  const cleanOpt = opt.replace(/^[A-D]\.\s*/i, '');
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleOptionSelect(optLetter)}
                      className={cn(
                        "w-full text-left p-4.5 rounded-2xl text-xs font-extrabold border transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center gap-3",
                        isSelected
                          ? 'bg-primary/10 border-primary text-primary shadow-sm shadow-primary/5 font-black'
                          : 'bg-card border-border/60 hover:bg-slate-50/50 dark:hover:bg-slate-900/5 text-foreground hover:translate-x-1'
                      )}
                    >
                      <span className={cn(
                        "text-[10px] w-5 h-5 rounded-md flex items-center justify-center font-black shrink-0",
                        isSelected ? "bg-primary text-white animate-pulse" : "bg-secondary text-muted-foreground"
                      )}>{optLetter}</span>
                      <span>{cleanOpt}</span>
                    </button>
                  );
                })
              ) : (
                // Điền từ tự do (Word Form / etc.)
                <div className="space-y-2.5">
                  <label className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                    {currentQuestion.questionTypeId === 'eng-qt11' ? 'Sửa lại từ sai:' : 'Đáp án của bạn:'}
                  </label>
                  <input
                    type="text"
                    value={selectedOption || ''}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    placeholder={
                      currentQuestion.questionTypeId === 'eng-qt11'
                        ? "Nhập từ sửa lại (ví dụ: tired hoặc tiring -> tired)..."
                        : currentQuestion.questionTypeId === 'eng-qt15'
                        ? "Nhập phần viết lại (ví dụ: he knew the way)..."
                        : "Nhập từ cần điền (ví dụ: inventions)..."
                    }
                    className="w-full p-4.5 rounded-2xl text-xs font-extrabold border border-border/60 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && selectedOption && !isSubmitting) {
                        handleSubmit();
                      }
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* Nút gợi ý thông minh */}
          {solutionDetail && questionTypeId !== 'eng-qt6' && (
            <div className="flex flex-col gap-2 pt-3">
              <button
                type="button"
                onClick={triggerNextHint}
                className={cn(
                  "self-start text-[11px] font-black flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-xl border transition-all duration-300 shadow-sm active:scale-95",
                  routeSubject === 'math' ? "text-indigo-500 hover:text-indigo-600 hover:bg-indigo-500/5" : "text-violet-500 hover:text-violet-600 hover:bg-violet-500/5",
                  getSubjectTheme(routeSubject).bg,
                  getSubjectTheme(routeSubject).border
                )}
              >
                {hintLevel === solutionDetail.detailedSteps.length ? (
                  <>
                    <ChevronUp size={14} className="text-amber-500 animate-bounce" />
                    <span>Thu gọn gợi ý</span>
                  </>
                ) : (
                  <>
                    <Lightbulb size={14} className="text-amber-500 animate-pulse" />
                    <span>{hintLevel === 0 ? 'Gợi ý giải từng bước' : `Gợi ý tiếp theo (Bước ${hintLevel + 1})`}</span>
                  </>
                )}
              </button>

              {hintLevel > 0 && (
                <div className="p-4.5 bg-amber-500/5 border border-amber-500/15 rounded-2xl space-y-3.5 animate-fade-in">
                  {solutionDetail.detailedSteps.slice(0, hintLevel).map((step: any, sIdx: number) => (
                    <div key={sIdx} className="text-xs font-semibold text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-amber-500 shrink-0 font-black">Step {step.order}:</span>
                      <div className="flex-1">
                        <LatexRenderer text={step.explanation} />
                        {step.formula && (
                          <div className="mt-1.5 bg-secondary/40 p-2.5 rounded-xl text-foreground overflow-x-auto border border-border/10 font-mono text-[11px]">
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
            <div className="bg-indigo-500/5 border border-indigo-500/15 p-4.5 rounded-2xl space-y-3.5 animate-fade-in my-3">
              <div className="flex items-center justify-between text-xs font-black text-foreground">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    {totalUploadStats.isPaused ? (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    ) : (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                      </>
                    )}
                  </span>
                  {totalUploadStats.isPaused ? 'Đã tạm dừng tải ảnh' : 'Đang tải lên bài giải...'}
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-black">{totalUploadStats.percent}%</span>
              </div>

              {/* Thanh tiến độ */}
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-300",
                    totalUploadStats.isPaused ? "bg-amber-400" : "bg-indigo-500"
                  )}
                  style={{ width: `${totalUploadStats.percent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground">
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
            <p className="text-xs font-black text-rose-600 dark:text-rose-400 my-2.5">
              {submitError}
            </p>
          )}

          {/* Bấm nộp bài & Điều hướng chuyển câu */}
          <div className="space-y-3.5 mt-5">
            <Button
              onClick={handleSubmit}
              disabled={submitDisabled || isSubmitting}
              className="w-full font-black py-3.5 text-xs active:scale-[0.98] rounded-2xl shadow-md hover:shadow-lg transition-all animate-pulse-glow cursor-pointer"
            >
              {isSubmitting ? (proofImages && proofImages.length > 0 ? 'Giáo viên đang chấm bài...' : 'Đang gửi bài làm...') : 'Nộp bài tập'}
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
                className="flex-1 font-black py-2.5 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1.5 h-10.5 rounded-2xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft size={14} /> Câu trước
              </Button>
              <Button
                type="button"
                disabled={currentIdx === questionsLength - 1}
                onClick={() => {
                  revokeLocalProofImages(proofImages);
                  setCurrentIdx(currentIdx + 1);
                  resetQuestionState();
                }}
                variant="outline"
                className="flex-1 font-black py-2.5 text-xs border border-border/50 text-muted-foreground hover:text-foreground active:scale-[0.98] flex items-center justify-center gap-1.5 h-10.5 rounded-2xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Câu sau <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
