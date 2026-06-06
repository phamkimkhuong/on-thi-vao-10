import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { ProofImageUploader } from '../../../components/common/ProofImageUploader';
import { Question, Solution } from '../../../types';
import { LocalProofImage, revokeLocalProofImages } from '../../../utils/proofImages';
import { cn } from '../../../utils/cn';
import { getSubjectTheme } from '../../../utils/theme';
import { BookOpen, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

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
  routeSubject: 'math' | 'english';
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
}) => {
  return (
    <Card className="border-indigo-500/10 shadow-md">
      <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
        <CardTitle className="text-foreground text-sm font-bold flex items-center gap-2">
          <BookOpen size={16} className="text-primary" />
          Luyện tập: {currentQuestion.questionTypeId ? currentQuestion.questionTypeId : 'Câu hỏi'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Đề bài */}
        <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
          <LatexRenderer text={currentQuestion.content} />
        </div>

        {/* Vùng chọn đáp án */}
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
            // Trắc nghiệm hoặc tự điền từ (fill-in-the-blank) cho môn Anh
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options && currentQuestion.options.length > 0 ? (
                currentQuestion.options.map((opt: string, i: number) => {
                  const optLetter = opt.charAt(0); // A, B, C, D
                  const isSelected = selectedOption === optLetter;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleOptionSelect(optLetter)}
                      className={`w-full text-left p-4 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer ${isSelected
                        ? 'bg-primary/10 border-primary text-primary shadow-sm shadow-primary/5'
                        : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground'
                        }`}
                    >
                      {opt}
                    </button>
                  );
                })
              ) : (
                // Điền từ tự do (Word Form / etc.)
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground">Đáp án của bạn:</label>
                  <input
                    type="text"
                    value={selectedOption || ''}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    placeholder="Nhập từ cần điền (ví dụ: inventions)..."
                    className="w-full p-4 rounded-xl text-xs font-semibold border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-150"
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
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
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
                disabled={currentIdx === questionsLength - 1}
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
      </CardContent>
    </Card>
  );
};
