import React from 'react';
import { Button } from '../../../components/ui/button';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { Question, Solution, UserAttempt } from '../../../types';
import { LocalProofImage, revokeLocalProofImages } from '../../../utils/proofImages';
import { cn } from '../../../utils/cn';
import { getSubjectTheme } from '../../../utils/theme';
import { CheckCircle, XCircle, HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ResultCardProps {
  currentQuestion: Question;
  isCorrect: boolean;
  isMath: boolean;
  proofImages: LocalProofImage[];
  existingAttempt: UserAttempt | null;
  pastAttempts: UserAttempt[];
  solutionDetail: Solution | null;
  routeSubject: 'math' | 'english';
  selectedOption: string | null;
  currentIdx: number;
  questionsLength: number;
  setCurrentIdx: (val: number) => void;
  resetQuestionState: () => void;
  handleRetry: () => void;
  handleNext: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  currentQuestion,
  isCorrect,
  isMath,
  proofImages,
  existingAttempt,
  pastAttempts,
  solutionDetail,
  routeSubject,
  selectedOption,
  currentIdx,
  questionsLength,
  setCurrentIdx,
  resetQuestionState,
  handleRetry,
  handleNext,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className={cn(
        "p-4 rounded-xl border flex items-center gap-3",
        isCorrect
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
          : 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400'
      )}>
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
              <p className="text-xs font-bold opacity-90 mt-1">
                Đáp án bạn đã {currentQuestion.options && currentQuestion.options.length > 0 ? "chọn" : "nhập"}: <span className="underline font-black">{selectedOption}</span>
              </p>
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
              <p className="text-xs font-bold opacity-90 mt-1">
                Đáp án bạn đã {currentQuestion.options && currentQuestion.options.length > 0 ? "chọn" : "nhập"}: <span className="underline font-black">{selectedOption || '(Trống)'}</span>
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
          {currentIdx === questionsLength - 1 ? 'Hoàn thành' : 'Câu tiếp theo'} <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};
