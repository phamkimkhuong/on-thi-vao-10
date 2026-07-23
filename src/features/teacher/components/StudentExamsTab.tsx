import React from 'react';
import { ExamResult } from '../../../types';
import { mathQuestionTypes, mathQuestions } from '../../../data/mathData';
import { englishQuestionTypes, englishQuestions } from '../../../data/englishData';
import { allQuestionTypesMap, allQuestionsMap } from '../../../data/allDataRegistry';
import { formatAnswerForDisplay } from '../../../utils/answerValidator';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { Button } from '../../../components/ui/button';
import { cn } from '../../../utils/cn';

interface StudentExamsTabProps {
  exams: ExamResult[];
  selectedExamForDetail: ExamResult | null;
  onSelectExamForDetail: (exam: ExamResult | null) => void;
}

export const StudentExamsTab: React.FC<StudentExamsTabProps> = ({
  exams,
  selectedExamForDetail,
  onSelectExamForDetail,
}) => {
  if (exams.length === 0) {
    return (
      <div className="py-8 text-center text-xs text-muted-foreground font-semibold bg-slate-50/50 dark:bg-slate-900/5 rounded-xl border border-dashed border-border/50">
        Học sinh này chưa tham gia đề thi thử nào.
      </div>
    );
  }

  // Tính toán phân tích dạng bài thi thử này
  const getExamAnalysisForTeacher = (ex: ExamResult) => {
    const typeAnalysis: Record<string, { name: string; total: number; correct: number }> = {};

    Object.entries(ex.attempts).forEach(([qId, attempt]) => {
      const q = allQuestionsMap.get(qId) || mathQuestions.find(q => q.id === qId) || englishQuestions.find(q => q.id === qId);
      if (!q) return;

      const qType = allQuestionTypesMap.get(q.questionTypeId);
      const qTypeName = qType ? qType.name : (q.id.startsWith('math')
        ? mathQuestionTypes.find(t => t.id === q.questionTypeId)?.name
        : englishQuestionTypes.find(t => t.id === q.questionTypeId)?.name) || `Dạng ${q.questionTypeId}`;

      if (!typeAnalysis[q.questionTypeId]) {
        typeAnalysis[q.questionTypeId] = {
          name: qTypeName,
          total: 0,
          correct: 0
        };
      }

      typeAnalysis[q.questionTypeId].total++;
      if (attempt.isCorrect) {
        typeAnalysis[q.questionTypeId].correct++;
      }
    });

    return Object.entries(typeAnalysis).map(([typeId, data]) => ({
      typeId,
      name: data.name,
      total: data.total,
      correct: data.correct,
      percent: Math.round((data.correct / data.total) * 100)
    }));
  };

  return (
    <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
      {exams.map((exam) => {
        const isMath = exam.examId.includes('math');
        const examDate = new Date(exam.completedAt).toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
        const isSelectedExam = selectedExamForDetail?.examId === exam.examId;

        return (
          <div key={exam.examId} className="border border-border/45 bg-slate-50/20 dark:bg-slate-900/10 rounded-xl p-3.5 space-y-3.5 transition-all hover:border-emerald-500/25">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className={cn(
                    "text-[9px] font-bold px-1.5 py-0.5 rounded",
                    isMath ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400" : "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                  )}>
                    {isMath ? '📐 Toán học' : '🗣️ Tiếng Anh'}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-semibold">{examDate}</span>
                </div>
                <h6 className="font-extrabold text-xs text-foreground mt-0.5">
                  Đề thi thử {isMath ? 'Toán học Vào 10' : 'Tiếng Anh Vào 10'}
                </h6>
              </div>

              <div className="text-right shrink-0 flex items-center gap-3">
                <div>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">{exam.score}</span>
                  <span className="text-[9px] text-muted-foreground font-bold"> / 10đ</span>
                </div>
                <Button
                  onClick={() => onSelectExamForDetail(isSelectedExam ? null : exam)}
                  variant="outline"
                  size="sm"
                  className="h-6 text-[9px] font-extrabold px-2.5 rounded-lg hover:border-emerald-500/30 hover:bg-emerald-500/5 active:scale-[0.98] transition-all cursor-pointer"
                >
                  {isSelectedExam ? 'Ẩn chi tiết' : 'Xem chi tiết'}
                </Button>
              </div>
            </div>

            {isSelectedExam && (
              <div className="mt-3 pt-3 border-t border-border/20 space-y-4 animate-fade-in text-xs font-semibold text-muted-foreground">

                {/* Nhận xét năng lực */}
                <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-500/10 rounded-xl space-y-1">
                  <span className="font-extrabold text-foreground flex items-center gap-1">⚡ Nhận xét năng lực:</span>
                  {exam.score >= 8.0 ? (
                    <p className="text-emerald-600 dark:text-emerald-400 text-[11px]">Xuất sắc! Năng lực hiện tại của học sinh đã rất vững chắc.</p>
                  ) : exam.score >= 5.0 ? (
                    <p className="text-amber-600 dark:text-amber-400 text-[11px]">Khá tốt! Đạt mức trung bình khá nhưng vẫn còn một số lỗ hổng kiến thức.</p>
                  ) : (
                    <p className="text-rose-600 dark:text-rose-400 text-[11px]">Cần cố gắng nhiều hơn! Học sinh bị hổng nhiều dạng bài cốt lõi, cần bồi dưỡng thêm.</p>
                  )}
                </div>

                {/* Phân tích theo chuyên đề */}
                <div className="space-y-2">
                  <span className="font-extrabold text-foreground flex items-center gap-1.5">📊 Phân tích chi tiết theo dạng bài:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getExamAnalysisForTeacher(exam).map((item) => {
                      const isWeak = item.percent < 60;
                      return (
                        <div key={item.typeId} className={cn(
                          "p-2.5 rounded-lg border flex flex-col justify-between gap-1 bg-card",
                          isWeak ? "border-red-500/20" : "border-border/60"
                        )}>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-[10px] text-foreground truncate">{item.name}</span>
                            {isWeak && (
                              <span className="text-[7px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold px-1 py-0.2 rounded uppercase">Yếu</span>
                            )}
                          </div>
                          <span className="text-[9px] text-muted-foreground">Tỷ lệ đúng: {item.correct}/{item.total} ({item.percent}%)</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Chi tiết từng câu hỏi */}
                <div className="space-y-2">
                  <span className="font-extrabold text-foreground flex items-center gap-1.5">📝 Chi tiết câu trả lời học sinh:</span>
                  <div className="space-y-2.5 max-h-[250px] overflow-y-auto pr-1">
                    {Object.entries(exam.attempts).map(([qId, att], eIdx) => {
                      const q = mathQuestions.find(question => question.id === qId) || englishQuestions.find(question => question.id === qId);
                      if (!q) return null;

                      return (
                        <div key={qId} className="p-3 rounded-lg border border-border/50 bg-card space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[9px] font-bold text-muted-foreground">Câu {eIdx + 1}</span>
                            <span className={cn(
                              "text-[8px] font-bold px-1.5 py-0.2 rounded uppercase",
                              att.isCorrect ? "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600" : "bg-rose-100 dark:bg-rose-950/30 text-rose-600"
                            )}>
                              {att.isCorrect ? 'Đúng' : 'Sai'}
                            </span>
                          </div>
                          <div className="text-[10px] text-foreground/80 leading-relaxed font-medium bg-slate-50/20 p-2 rounded border border-border/10">
                            <LatexRenderer text={q.content} />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[9px] font-bold">
                            <div>
                              <span className="text-muted-foreground block">BÀI LÀM:</span>
                              <span className={att.isCorrect ? "text-emerald-600" : "text-rose-600"}>{att.userAnswer || '(Không có)'}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block">ĐÁP ÁN ĐÚNG:</span>
                              <span className="text-indigo-600 dark:text-indigo-400">
                                {formatAnswerForDisplay(q, q.answerSchema ? (q.correctFinalAnswer ?? {}) : q.correctAnswer)}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
