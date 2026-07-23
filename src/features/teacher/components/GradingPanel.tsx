import React, { useState, useMemo } from 'react';
import { BookOpen, RefreshCw, CheckCircle, XCircle, Loader } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { LatexRenderer } from '../../../components/common/LatexRenderer';
import { SimulatedStudent, UserAttempt, UserProgress, Question, Solution } from '../../../types';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../../data/englishData';
import { teacherService } from '../../../services/teacherService';
import { aiService } from '../../../services/aiService';
import { progressService } from '../../../services/progressService';
import { cn } from '../../../utils/cn';

export interface PendingGroup {
  id: string;
  student: SimulatedStudent;
  questionTypeId: string;
  selectedSubTense?: string;
  attempts: UserAttempt[];
}

interface GradingPanelProps {
  pendingAttempts: Array<{ student: SimulatedStudent; attempt: UserAttempt }>;
  loadData: () => Promise<void>;
  selectedStudent: SimulatedStudent | null;
  onUpdateStudentProgress: (studentProgress: UserProgress) => void;
  isLoading: boolean;
}

const getSubTenseName = (subTense: string): string => {
  switch (subTense) {
    case 'present_simple': return 'Thì Hiện tại đơn';
    case 'past_simple': return 'Thì Quá khứ đơn';
    case 'present_continuous': return 'Thì Hiện tại tiếp diễn';
    case 'past_continuous': return 'Thì Quá khứ tiếp diễn';
    case 'present_perfect': return 'Thì Hiện tại hoàn thành';
    case 'future_simple': return 'Thì Tương lai đơn';
    case 'exam': return 'Luyện thi trắc nghiệm';
    case 'all': return 'Tổng ôn thông minh';
    case 'to_v': return 'Cấu trúc to V';
    case 'v_ing': return 'Cấu trúc V-ing';
    case 'v0': return 'Động từ nguyên mẫu V0';
    case 'verb_combo': return 'Tổng hợp Cấu trúc động từ';
    case 'prep_phrasal': return 'Giới từ & Phrasal Verbs';
    case 'tenses_review': return 'Kiểm tra tổng hợp 6 thì';
    default: return '';
  }
};

const detectSubTense = (attempt: UserAttempt): string => {
  if (attempt.selectedSubTense) return attempt.selectedSubTense;
  if (attempt.questionTypeId !== 'eng-qt6') return '';
  const num = parseInt(attempt.questionId.replace('eng-q', ''), 10);
  if (isNaN(num)) return '';
  if ((num >= 5 && num <= 24) || (num >= 102 && num <= 121)) {
    return 'present_simple';
  } else if ((num >= 25 && num <= 44) || (num >= 122 && num <= 141)) {
    return 'past_simple';
  } else if ((num >= 45 && num <= 64) || (num >= 142 && num <= 161)) {
    return 'present_continuous';
  } else if ((num >= 65 && num <= 84) || (num >= 162 && num <= 181)) {
    return 'past_continuous';
  } else if (num >= 182 && num <= 201) {
    return 'present_perfect';
  } else if (num >= 202 && num <= 221) {
    return 'future_simple';
  } else if (num >= 222 && num <= 261) {
    return 'verb_combo';
  } else if (num >= 262 && num <= 301) {
    return 'prep_phrasal';
  }
  return '';
};

const getQuestionSubTenseName = (questionId: string): string => {
  if (!questionId.startsWith('eng-q')) return '';
  const num = parseInt(questionId.replace('eng-q', ''), 10);
  if (isNaN(num)) return '';

  if ((num >= 5 && num <= 24) || (num >= 102 && num <= 121)) {
    return 'Thì Hiện tại đơn';
  } else if ((num >= 25 && num <= 44) || (num >= 122 && num <= 141)) {
    return 'Thì Quá khứ đơn';
  } else if ((num >= 45 && num <= 64) || (num >= 142 && num <= 161)) {
    return 'Thì Hiện tại tiếp diễn';
  } else if ((num >= 65 && num <= 84) || (num >= 162 && num <= 181)) {
    return 'Thì Quá khứ tiếp diễn';
  } else if (num >= 182 && num <= 201) {
    return 'Thì Hiện tại hoàn thành';
  } else if (num >= 202 && num <= 221) {
    return 'Thì Tương lai đơn';
  } else if (num >= 222 && num <= 261) {
    return 'Tổng hợp Cấu trúc động từ';
  } else if (num >= 262 && num <= 301) {
    return 'Giới từ & Phrasal Verbs';
  }
  return '';
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

export const GradingPanel: React.FC<GradingPanelProps> = ({
  pendingAttempts,
  loadData,
  selectedStudent,
  onUpdateStudentProgress,
  isLoading,
}) => {
  const [reviewingItem, setReviewingItem] = useState<PendingGroup | null>(null);
  const [grades, setGrades] = useState<Record<string, { isCorrect: boolean; feedback: string }>>({});
  const [gradingSuccessMsg, setGradingSuccessMsg] = useState<string | null>(null);
  const [aiGradingLoading, setAiGradingLoading] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Nhóm các bài tự luận chờ chấm theo (Học sinh + Dạng bài + Tense) để chấm theo nhóm
  const pendingGroups = useMemo(() => {
    const groupsMap = new Map<string, PendingGroup>();

    pendingAttempts.forEach(({ student, attempt }) => {
      const subTense = attempt.selectedSubTense || (attempt.questionTypeId === 'eng-qt6' ? detectSubTense(attempt) : '');
      const key = `${student.id}-${attempt.questionTypeId}-${subTense}`;

      if (!groupsMap.has(key)) {
        groupsMap.set(key, {
          id: key,
          student,
          questionTypeId: attempt.questionTypeId,
          selectedSubTense: subTense,
          attempts: []
        });
      }

      groupsMap.get(key)!.attempts.push(attempt);
    });

    return Array.from(groupsMap.values());
  }, [pendingAttempts]);

  // Thống kê số câu đúng/sai trước khi phê duyệt
  const reviewingStudentStats = useMemo(() => {
    if (!reviewingItem) return { correct: 0, incorrect: 0 };
    let correct = 0;
    let incorrect = 0;

    reviewingItem.attempts.forEach(attempt => {
      const grade = grades[attempt.id];
      const isCorrect = grade ? grade.isCorrect : attempt.isCorrect;
      if (isCorrect) correct++;
      else incorrect++;
    });

    return { correct, incorrect };
  }, [reviewingItem, grades]);

  // Bắt đầu chấm bài làm theo nhóm (group)
  const handleStartReview = (group: PendingGroup) => {
    setReviewingItem(group);
    setGradingSuccessMsg(null);

    // Khởi tạo trạng thái chấm điểm cho từng bài làm trong nhóm
    const initialGrades: Record<string, { isCorrect: boolean; feedback: string }> = {};
    group.attempts.forEach(attempt => {
      initialGrades[attempt.id] = {
        isCorrect: attempt.isCorrect,
        feedback: ''
      };
    });
    setGrades(initialGrades);
  };

  const handleAiGrade = async (attempt: UserAttempt, question: Question, solution: Solution | undefined) => {
    setAiGradingLoading(prev => ({ ...prev, [attempt.id]: true }));

    try {
      let imageObj = undefined;
      if (attempt.proofImages && attempt.proofImages.length > 0) {
        const url = attempt.proofImages[0].downloadUrl;
        if (url) {
          imageObj = await fetchImageAsBase64(url);
        }
      }

      const result = await aiService.gradeProofAttempt(
        question,
        solution,
        attempt.userAnswer || '',
        imageObj
      );

      setGrades(prev => ({
        ...prev,
        [attempt.id]: {
          isCorrect: result.isCorrect,
          feedback: result.summaryFeedback
        }
      }));
    } catch (e: any) {
      console.error(e);
      alert('Không thể chấm tự động bằng AI: ' + (e.message || 'Lỗi không xác định'));
    } finally {
      setAiGradingLoading(prev => ({ ...prev, [attempt.id]: false }));
    }
  };

  // Submit chấm điểm hàng loạt từ giáo viên
  const handleGradeSubmit = async () => {
    if (!reviewingItem) return;

    setIsSubmitting(true);
    const { student, attempts } = reviewingItem;

    try {
      // Chấm điểm cho từng attempt trong group song song
      await Promise.all(
        attempts.map(attempt => {
          const grade = grades[attempt.id] || { isCorrect: attempt.isCorrect, feedback: '' };
          return teacherService.gradeRealAttempt(
            student.id,
            attempt,
            grade.isCorrect,
            grade.feedback.trim()
          );
        })
      );

      setGradingSuccessMsg(`Đã phê duyệt thành công ${attempts.length} bài làm của học sinh!`);

      // Tải lại dữ liệu mới nhất
      await loadData();

      // Nếu đang xem học sinh đó, tải lại tiến độ
      if (selectedStudent && selectedStudent.id === student.id) {
        const prog = await progressService.getUserProgressFromFirestore(student.id);
        if (prog) {
          onUpdateStudentProgress(prog);
        }
      }
    } catch (e) {
      console.error("Lỗi khi chấm điểm các bài làm:", e);
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setReviewingItem(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {!reviewingItem ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1">
              <BookOpen size={14} /> Bài làm chờ duyệt ({pendingGroups.length})
            </h3>
            <Button
              onClick={() => loadData()}
              disabled={isLoading}
              variant="outline"
              size="sm"
              className="h-7 text-[10px] font-extrabold gap-1.5 rounded-lg border-border bg-card hover:bg-secondary flex items-center cursor-pointer transition-all"
            >
              <RefreshCw size={12} className={cn("shrink-0", isLoading && "animate-spin")} />
              Làm mới
            </Button>
          </div>

          {pendingGroups.length === 0 ? (
            <div className="p-8 border border-dashed border-border rounded-2xl text-center space-y-3 bg-slate-50/10 dark:bg-slate-900/5">
              <CheckCircle size={40} className="mx-auto text-emerald-500 animate-bounce" />
              <p className="text-xs font-bold text-foreground">Tuyệt vời! Đã hoàn thành chấm toàn bộ bài tự luận & trắc nghiệm.</p>
              <p className="text-[10px] text-muted-foreground">Hiện tại không có học sinh nào có bài chờ phê duyệt.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingGroups.map((group) => {
                const qType = mathQuestionTypes.find(t => t.id === group.questionTypeId) || englishQuestionTypes.find(t => t.id === group.questionTypeId);
                const subTenseName = group.selectedSubTense === 'all'
                  ? 'Tổng ôn thông minh'
                  : (group.selectedSubTense ? getSubTenseName(group.selectedSubTense) : '');

                return (
                  <Card key={group.id} className="border-border/50 bg-card hover:border-emerald-500/30 transition-colors">
                    <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 border-b border-border/20 pb-2">
                          <div className="flex items-center gap-2">
                            <img
                              src={group.student.avatar}
                              alt={group.student.name}
                              className="w-6 h-6 rounded-full bg-slate-100 border border-emerald-500/20 shrink-0"
                            />
                            <span className="font-extrabold text-[11px] text-foreground truncate max-w-[120px]">{group.student.name}</span>
                          </div>
                          <span className="text-[9px] font-bold text-muted-foreground">
                            {group.attempts.length > 0 && new Date(group.attempts[group.attempts.length - 1].createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        {group.questionTypeId.startsWith('math') ? (
                          <>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-500 inline-block">
                              📐 {qType?.name}
                            </span>
                            <p className="text-xs font-semibold text-foreground mt-1">
                              Bài làm tự luận Toán chờ duyệt ({group.attempts.length} câu).
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="flex flex-wrap gap-1.5 items-center">
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-950 text-violet-500">
                                🗣️ {qType?.name}
                              </span>
                              {subTenseName && (
                                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                                  {subTenseName}
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-semibold text-foreground mt-1.5">
                              Bài làm trắc nghiệm Tiếng Anh chờ duyệt ({group.attempts.length} câu).
                            </p>
                          </>
                        )}
                      </div>

                      <Button
                        onClick={() => handleStartReview(group)}
                        className="w-full font-bold text-[11px] py-1 px-3 border border-border bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                      >
                        Mở Workspace Chấm {group.attempts.length} câu
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* Workspace chấm nhóm bài làm thông minh */
        <div className="space-y-6">
          {/* Back Button */}
          <button
            onClick={() => setReviewingItem(null)}
            className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start"
          >
            ← Quay lại hàng đợi
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={reviewingItem.student.avatar}
                alt={reviewingItem.student.name}
                className="w-10 h-10 rounded-full border border-emerald-500/20 bg-slate-100 shrink-0"
              />
              <div>
                <h3 className="text-sm font-black text-foreground">
                  Duyệt bài làm của {reviewingItem.student.name}
                </h3>
                <p className="text-[10px] text-muted-foreground font-semibold">
                  Chuyên đề: {mathQuestionTypes.find(t => t.id === reviewingItem.questionTypeId)?.name || englishQuestionTypes.find(t => t.id === reviewingItem.questionTypeId)?.name}
                  {reviewingItem.selectedSubTense && ` (${reviewingItem.selectedSubTense === 'all' ? 'Tổng ôn thông minh' : getSubTenseName(reviewingItem.selectedSubTense)})`}
                </p>

                {/* Thống kê số câu đúng/sai của học sinh */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] font-bold mt-1.5 text-muted-foreground bg-slate-50 dark:bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-border/30 w-fit">
                  <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
                    ✅ Đúng/Đạt: <span className="text-foreground font-black">{reviewingStudentStats.correct}</span>
                  </span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-0.5 text-rose-600 dark:text-rose-400">
                    ❌ Sai/Chưa đạt: <span className="text-foreground font-black">{reviewingStudentStats.incorrect}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviewingItem.attempts.map((attempt, index) => {
                const qList = attempt.questionTypeId.startsWith('math') ? mathQuestions : englishQuestions;
                const question = qList.find(q => q.id === attempt.questionId);
                const grade = grades[attempt.id] || { isCorrect: attempt.isCorrect, feedback: '' };

                const isMathAttempt = attempt.questionTypeId.startsWith('math');
                const sList = isMathAttempt ? mathSolutions : englishSolutions;
                const solutionDetail = sList.find(s => s.questionId === attempt.questionId);

                return (
                  <Card key={attempt.id} className="border-border/50 bg-card overflow-hidden shadow-sm">
                    <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30 p-4 flex flex-row items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-foreground">Câu hỏi {index + 1}</span>
                        {attempt.questionTypeId === 'eng-qt6' && (
                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                            {getQuestionSubTenseName(attempt.questionId)}
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] text-muted-foreground font-semibold">
                        {new Date(attempt.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </CardHeader>

                    <CardContent className="p-5 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {/* Phần hiển thị Đề bài & Lời giải học sinh */}
                        <div className="space-y-3">
                          <div>
                            <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đề bài:</span>
                            <div className="text-xs font-semibold text-foreground p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border/30">
                              {question ? (
                                <LatexRenderer text={question.content} />
                              ) : (
                                "Không tìm thấy câu hỏi"
                              )}
                            </div>
                          </div>

                          {/* Nếu là toán, hiển thị ảnh chụp bài giải */}
                          {isMathAttempt && (
                            <div>
                              <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Ảnh bài làm:</span>
                              <div className="bg-black/90 p-2 rounded-xl flex items-center justify-center min-h-[200px] border border-border relative">
                                {attempt.proofImages && attempt.proofImages.length > 0 ? (
                                  <img
                                    src={attempt.proofImages[0].downloadUrl}
                                    alt="Math Proof"
                                    className="max-h-[300px] object-contain rounded-lg"
                                  />
                                ) : (
                                  <span className="text-xs text-muted-foreground">Không có ảnh chụp</span>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Nếu là tiếng anh, hiển thị lựa chọn phương án */}
                          {!isMathAttempt && question?.options && (
                            <div>
                              <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Lựa chọn phương án:</span>
                              <div className="grid grid-cols-1 gap-2">
                                {question.options.map((opt, oIdx) => {
                                  const optLetter = opt.trim().charAt(0);
                                  const studentLetter = attempt.userAnswer?.trim().charAt(0);
                                  const correctLetter = question.correctAnswer?.trim().charAt(0);

                                  const isStudentChoice = optLetter === studentLetter;
                                  const isCorrectChoice = optLetter === correctLetter;

                                  return (
                                    <div
                                      key={oIdx}
                                      className={cn(
                                        "p-2.5 rounded-lg text-xs font-semibold border",
                                        isStudentChoice
                                          ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                                          : "bg-card border-border text-foreground",
                                        isCorrectChoice && "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                                      )}
                                    >
                                      {opt}
                                      {isStudentChoice && <span className="text-[10px] font-bold ml-1.5">(Học sinh chọn)</span>}
                                      {isCorrectChoice && <span className="text-[10px] font-bold ml-1.5">(Đáp án đúng)</span>}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phần hiển thị chấm điểm & Nhận xét của giáo viên */}
                        <div className="space-y-4">
                          <div>
                            <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đáp số đúng chuẩn:</span>
                            <div className="text-xs font-black text-emerald-500">
                              {question?.correctAnswer || "(Không có)"}
                            </div>
                          </div>

                          {!isMathAttempt && (
                            <div>
                              <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đáp án học sinh chọn:</span>
                              <div className="text-xs font-black text-rose-500">
                                {attempt.userAnswer || "(Không có)"}
                              </div>
                            </div>
                          )}

                          <div className="space-y-2 border-t border-border/20 pt-3">
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] font-bold text-muted-foreground uppercase">Chấm kết quả câu này:</span>
                              <button
                                type="button"
                                onClick={() => handleAiGrade(attempt, question!, solutionDetail)}
                                disabled={aiGradingLoading[attempt.id]}
                                className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-1 rounded-md transition-all"
                              >
                                {aiGradingLoading[attempt.id] ? (
                                  <>
                                    <Loader size={10} className="animate-spin text-emerald-600" />
                                    Đang chấm AI...
                                  </>
                                ) : (
                                  <>
                                    🤖 Trợ lý AI Chấm
                                  </>
                                )}
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setGrades(prev => ({
                                  ...prev,
                                  [attempt.id]: { ...prev[attempt.id], isCorrect: false }
                                }))}
                                className={cn(
                                  "flex-1 font-bold py-2 text-xs rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer",
                                  !grade.isCorrect
                                    ? "bg-rose-500/15 border-rose-500/40 text-rose-600 animate-fade-in"
                                    : "bg-background border-border text-muted-foreground hover:bg-secondary/40"
                                )}
                              >
                                <XCircle size={14} /> Sai
                              </button>
                              <button
                                type="button"
                                onClick={() => setGrades(prev => ({
                                  ...prev,
                                  [attempt.id]: { ...prev[attempt.id], isCorrect: true }
                                }))}
                                className={cn(
                                  "flex-1 font-bold py-2 text-xs rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer",
                                  grade.isCorrect
                                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-600 animate-fade-in"
                                    : "bg-background border-border text-muted-foreground hover:bg-secondary/40"
                                )}
                              >
                                <CheckCircle size={14} /> Đúng
                              </button>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-muted-foreground block uppercase">Nhận xét câu này (nếu có):</span>
                            <input
                              type="text"
                              value={grade.feedback}
                              onChange={(e) => setGrades(prev => ({
                                ...prev,
                                [attempt.id]: { ...prev[attempt.id], feedback: e.target.value }
                              }))}
                              placeholder="Nhận xét riêng cho câu này..."
                              className="w-full bg-slate-50 dark:bg-slate-900 border border-border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-foreground font-semibold"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hướng dẫn giải chi tiết cho giáo viên đối chiếu */}
                      {solutionDetail && (
                        <div className="border-t border-border/40 pt-4 mt-4 space-y-4">
                          <span className="text-[9px] font-black text-muted-foreground block uppercase tracking-wider">
                            💡 Hướng dẫn giải chi tiết (Học sinh nhìn thấy):
                          </span>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Tư duy nhận dạng & Đáp số */}
                            <div className="space-y-3">
                              <div className={cn(
                                "text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border",
                                isMathAttempt
                                  ? "bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/30"
                                  : "bg-violet-50/50 dark:bg-violet-950/10 border-violet-100 dark:border-violet-900/30"
                              )}>
                                <span className="font-extrabold text-foreground block mb-1">💡 Tư duy nhận dạng:</span>
                                <LatexRenderer text={solutionDetail.recognition} />
                              </div>

                              <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 border border-border/30 rounded-xl text-xs space-y-2">
                                <div className="font-extrabold text-foreground">
                                  Đáp số đúng: <span className="text-emerald-500 font-black"><LatexRenderer text={question?.correctAnswer || solutionDetail.finalAnswer} /></span>
                                </div>
                                {solutionDetail.commonMistakes && solutionDetail.commonMistakes.length > 0 && (
                                  <div className="pt-2 border-t border-border/20 text-rose-600 dark:text-rose-400 font-semibold leading-relaxed">
                                    <span className="font-extrabold block text-foreground mb-1">⚠️ Lỗi dễ mắc (Tránh bẫy):</span>
                                    {solutionDetail.commonMistakes.map((m: string, i: number) => (
                                      <p key={i}>• <LatexRenderer text={m} /></p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Các bước giải chi tiết */}
                            <div className="space-y-4 pl-1">
                              {solutionDetail.detailedSteps.map((step: any, idx: number) => (
                                <div key={idx} className="space-y-1">
                                  <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                                    <span className={cn(
                                      "w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] shrink-0 font-bold",
                                      isMathAttempt ? "bg-indigo-600" : "bg-violet-600"
                                    )}>
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
                                      <p className={cn(
                                        "font-bold mt-1",
                                        isMathAttempt ? "text-indigo-600 dark:text-indigo-400" : "text-violet-600 dark:text-violet-400"
                                      )}>
                                        👉 Kết quả bước: <LatexRenderer text={step.result} />
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Nút gửi phê duyệt cho cả nhóm */}
            <Card className="border-emerald-500/20 bg-card shadow-sm">
              <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h4 className="font-extrabold text-xs text-foreground">Xác nhận phê duyệt nhóm câu hỏi này</h4>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                    Hệ thống sẽ lưu lại điểm số của cả {reviewingItem.attempts.length} câu hỏi và mở lại cho học sinh làm lại các câu bị sai.
                  </p>
                </div>

                {gradingSuccessMsg ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-bold animate-fade-in flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500 animate-bounce" />
                    {gradingSuccessMsg}
                  </div>
                ) : (
                  <Button
                    onClick={handleGradeSubmit}
                    disabled={isSubmitting}
                    className="font-bold text-xs py-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer h-10 w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-1.5">
                        <Loader size={12} className="animate-spin text-white" />
                        Đang gửi...
                      </span>
                    ) : (
                      `🚀 Phê duyệt ${reviewingItem.attempts.length} bài làm`
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
