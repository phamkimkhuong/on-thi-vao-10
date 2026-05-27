import React, { useEffect, useState, useCallback } from 'react';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { mathQuestions, mathQuestionTypes, mathSolutions } from '../../data/mathData';
import { englishQuestions, englishQuestionTypes, englishSolutions } from '../../data/englishData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import {
  Bookmark,
  CheckCircle,
  XCircle,
  Calendar,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MistakeNotebook: React.FC = () => {
  const { selectedSubject, user } = useAppStore();

  const [mistakes, setMistakes] = useState<any[]>([]);

  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);

  // Trạng thái cho việc luyện lại câu sai cụ thể
  const [activeMistake, setActiveMistake] = useState<any | null>(null);
  const [reAnswer, setReAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [reSubmitted, setReSubmitted] = useState(false);
  const [reCorrect, setReCorrect] = useState(false);
  const [reSolution, setReSolution] = useState<any>(null);

  const loadMistakes = useCallback(() => {
    const list = storageService.getMistakes();
    const isMath = selectedSubject === 'math';

    // Lọc lỗi sai theo môn đang chọn và trạng thái chưa fixed
    const filtered = list
      .filter(m => m.reviewStatus !== 'fixed')
      .map(m => {
        // Tìm thông tin câu hỏi
        const qList = isMath ? mathQuestions : englishQuestions;
        const q = qList.find(item => item.id === m.questionId);

        // Tìm tên dạng bài
        const typeList = isMath ? mathQuestionTypes : englishQuestionTypes;
        const type = typeList.find(t => t.id === m.questionTypeId);

        return {
          ...m,
          question: q,
          typeName: type?.name || 'Chưa phân loại'
        };
      })
      .filter(m => m.question !== undefined); // Loại bỏ các câu không tìm thấy câu hỏi gốc

    setMistakes(filtered);
  }, [selectedSubject]);

  useEffect(() => {
    loadMistakes();
    setSelectedTypeId(null);
    setActiveMistake(null);
  }, [selectedSubject, loadMistakes]);

  const startReview = (mistake: any) => {
    setActiveMistake(mistake);
    setReAnswer('');
    setSelectedOption(null);
    setReSubmitted(false);

    // Tìm giải pháp
    const isMath = selectedSubject === 'math';
    const sList = isMath ? mathSolutions : englishSolutions;
    const sol = sList.find(s => s.questionId === mistake.questionId);
    setReSolution(sol || null);
  };

  const handleReSubmit = () => {
    if (!activeMistake || reSubmitted) return;

    const isMath = selectedSubject === 'math';
    let correct: boolean;
    let finalAns = reAnswer;

    if (isMath) {
      const cleanUser = reAnswer.trim().toLowerCase().replace(/\s+/g, '');
      const cleanCorrect = activeMistake.question.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');
      correct = cleanUser === cleanCorrect || cleanCorrect.includes(cleanUser) && cleanUser.length > 1;
    } else {
      correct = selectedOption === activeMistake.question.correctAnswer;
      finalAns = selectedOption || '';
    }

    setReCorrect(correct);
    setReSubmitted(true);

    if (correct) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      // Đánh dấu là đã sửa đổi (fixed)
      storageService.resolveMistakeIfCorrect(activeMistake.questionId);

      // Đồng bộ Firestore
      if (user) {
        const localMistakes = storageService.getMistakes();
        const updated = localMistakes.find(m => m.questionId === activeMistake.questionId);
        if (updated) {
          progressService.saveMistake(user.uid, updated);
        }
      }
    } else {
      const attemptData = {
        id: activeMistake.id,
        userId: user ? user.uid : 'guest',
        questionId: activeMistake.questionId,
        questionTypeId: activeMistake.questionTypeId,
        userAnswer: finalAns,
        isCorrect: false,
        timeSpent: 30, // Mock time
        createdAt: new Date().toISOString()
      };
      // Làm sai tiếp, cập nhật số lần sai
      storageService.addOrUpdateMistake(attemptData);

      // Đồng bộ Firestore
      if (user) {
        const localMistakes = storageService.getMistakes();
        const updated = localMistakes.find(m => m.questionId === activeMistake.questionId);
        if (updated) {
          progressService.saveMistake(user.uid, updated);
        }
      }
    }
  };

  const closeReview = () => {
    setActiveMistake(null);
    loadMistakes(); // Load lại danh sách
  };

  const formatReviewTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();

    if (date <= now) {
      return <span className="text-red-500 font-bold flex items-center gap-1 animate-pulse"><Calendar size={12} /> Cần luyện lại ngay</span>;
    }

    return (
      <span className="text-muted-foreground font-semibold flex items-center gap-1">
        <Calendar size={12} /> Luyện lại sau: {date.toLocaleDateString('vi-VN')}
      </span>
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">

      {/* Giới thiệu Sổ lỗi */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-foreground flex items-center justify-center gap-2">
          <Bookmark className="text-primary fill-primary" size={24} />
          Sổ lỗi sai cá nhân (Mistake Notebook)
        </h2>
      </div>

      {/* Giao diện chính */}
      {!activeMistake ? (
        // HIỂN THỊ DANH SÁCH LỖI SAI
        mistakes.length === 0 ? (
          <Card className="border-emerald-500/10 shadow-sm">
            <CardContent className="p-8 text-center flex flex-col items-center gap-3">
              <CheckCircle className="text-emerald-500" size={48} />
              <h3 className="text-base font-bold text-foreground">Sổ lỗi sai trống trơn!</h3>
              <p className="text-xs text-muted-foreground max-w-sm">
                Thật xuất sắc! Bạn chưa có câu làm sai nào hoặc đã khắc phục thành công toàn bộ các lỗi sai cũ môn {selectedSubject === 'math' ? 'Toán học' : 'Tiếng Anh'}.
              </p>
            </CardContent>
          </Card>
        ) : selectedTypeId ? (
          // NHÁNH 1: HIỂN THỊ CHI TIẾT CÁC CÂU SAI CỦA DẠNG BÀI ĐÃ CHỌN
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedTypeId(null)}
                className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
              >
                ← Quay lại danh sách dạng bài
              </button>
              <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full border border-border/10">
                Dạng bài: {mistakes.find(m => m.questionTypeId === selectedTypeId)?.typeName || ''}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {mistakes
                .filter(m => m.questionTypeId === selectedTypeId)
                .map((mistake) => (
                  <Card
                    key={mistake.id}
                    className="hover:border-primary/30 border transition-all duration-200"
                  >
                    <CardContent className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center gap-0.5">
                            <AlertTriangle size={10} /> Đã sai: {mistake.reviewCount} lần
                          </span>
                          <span className="text-[9px] font-semibold">
                            {formatReviewTime(mistake.nextReviewAt)}
                          </span>
                        </div>

                        <div className="text-xs font-semibold text-foreground line-clamp-2 leading-relaxed bg-slate-50/50 dark:bg-slate-900/5 p-3 rounded-xl border border-border/10">
                          <LatexRenderer text={mistake.question.content} />
                        </div>

                        <div className="text-[10px] text-muted-foreground font-semibold">
                          Đáp án bạn đã điền: <span className="text-red-500 font-extrabold">{mistake.wrongAnswer || 'Trống'}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => startReview(mistake)}
                        className="self-start md:self-center font-bold text-xs py-2 px-4 shadow-sm shrink-0 cursor-pointer"
                      >
                        Luyện lại câu này
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ) : (
          // NHÁNH 2: HIỂN THỊ GOM NHÓM THEO DẠNG BÀI
          <div className="space-y-4">
            <div className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">
              Chọn dạng bài để khắc phục lỗi sai:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.values(
                mistakes.reduce((acc, mistake) => {
                  const typeId = mistake.questionTypeId;
                  if (!acc[typeId]) {
                    acc[typeId] = {
                      typeId,
                      typeName: mistake.typeName,
                      mistakes: []
                    };
                  }
                  acc[typeId].mistakes.push(mistake);
                  return acc;
                }, {} as Record<string, { typeId: string; typeName: string; mistakes: any[] }>)
              ).map((group: any) => {
                const count = group.mistakes.length;
                const totalWrongAttempts = group.mistakes.reduce((sum: number, m: any) => sum + (m.reviewCount || 1), 0);
                const isMath = group.typeId.startsWith('math');

                return (
                  <Card
                    key={group.typeId}
                    className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-x-[2px] border bg-card"
                    onClick={() => setSelectedTypeId(group.typeId)}
                  >
                    <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isMath ? 'bg-indigo-100 dark:bg-indigo-950 text-primary' : 'bg-violet-100 dark:bg-violet-950 text-violet-500'
                            }`}>
                            {isMath ? '📐 Toán' : '🗣️ Anh'}
                          </span>
                          <span className="text-[10px] font-extrabold text-red-500 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">
                            {count} câu sai
                          </span>
                        </div>

                        <h4 className="font-extrabold text-sm text-foreground leading-tight">
                          {group.typeName}
                        </h4>

                        <p className="text-[11px] text-muted-foreground leading-relaxed font-semibold">
                          Tổng số lần làm sai: <span className="font-bold text-red-500">{totalWrongAttempts} lần</span>
                        </p>
                      </div>

                      <div className="border-t border-border/20 pt-3 flex items-center justify-between text-[10px] font-bold text-primary">
                        <span>Lịch sử lỗi sai chi tiết</span>
                        <span className="flex items-center gap-0.5 hover:underline">
                          Khắc phục ngay →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )
      ) : (
        // GIẢI LẠI CÂU SAI (REVIEW MODE)
        <Card className="border-indigo-500/10 shadow-md">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30 flex flex-row items-center justify-between py-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Luyện lại câu sai</span>
              <CardTitle className="text-foreground text-sm font-bold mt-1">Dạng bài: {activeMistake.typeName}</CardTitle>
            </div>
            <button
              onClick={closeReview}
              className="text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Đóng lại [X]
            </button>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Đề bài */}
            <div className="text-sm font-semibold leading-relaxed text-foreground bg-slate-50/20 dark:bg-slate-900/5 p-4 rounded-xl border border-border/10">
              <LatexRenderer text={activeMistake.question.content} />
            </div>

            {!reSubmitted ? (
              <div className="space-y-4">
                {selectedSubject === 'math' ? (
                  // Nhập đáp án cho Toán
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground block">Giải lại và nhập đáp số mới của bạn:</label>
                    <input
                      type="text"
                      value={reAnswer}
                      onChange={(e) => setReAnswer(e.target.value)}
                      placeholder="Nhập câu trả lời tại đây..."
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold placeholder:text-muted-foreground/50"
                    />
                  </div>
                ) : (
                  // Chọn đáp án cho Tiếng Anh
                  <div className="grid grid-cols-1 gap-3">
                    {activeMistake.question.options?.map((opt: string, i: number) => {
                      const optLetter = opt.charAt(0);
                      const isSelected = selectedOption === optLetter;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedOption(optLetter)}
                          className={`w-full text-left p-4 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer ${isSelected
                            ? 'bg-primary/10 border-primary text-primary shadow-sm'
                            : 'bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground'
                            }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                <Button
                  onClick={handleReSubmit}
                  disabled={selectedSubject === 'math' ? !reAnswer.trim() : !selectedOption}
                  className="w-full font-bold py-3 mt-4 text-xs active:scale-[0.98]"
                >
                  Nộp bài giải lại
                </Button>
              </div>
            ) : (
              // BÁO CÁO KẾT QUẢ GIẢI LẠI
              <div className="space-y-6 animate-fade-in">
                <div className={`p-4 rounded-xl border flex items-center gap-3 ${reCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400'
                  }`}>
                  {reCorrect ? (
                    <>
                      <CheckCircle size={24} className="text-emerald-500 shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-sm">Tuyệt vời! Bạn đã sửa sai thành công câu hỏi này.</h4>
                        <p className="text-xs font-semibold opacity-90">Câu hỏi đã được loại khỏi Sổ lỗi và tăng điểm master dạng bài.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-rose-500 shrink-0" size={24} />
                      <div>
                        <h4 className="font-extrabold text-sm">Vẫn chưa đúng rồi. Đừng nản lòng nhé!</h4>
                        <p className="text-xs font-semibold opacity-90">Hãy xem kỹ quy trình giải chi tiết dưới đây để hiểu bản chất.</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Lời giải mẫu của câu sai */}
                {reSolution && (
                  <div className="space-y-4 border-t border-border/30 pt-6">
                    <h4 className="font-extrabold text-sm text-foreground">🔬 Quy trình giải chi tiết:</h4>
                    <div className="space-y-4 pl-1">
                      {reSolution.detailedSteps.map((step: any, sIdx: number) => (
                        <div key={sIdx} className="space-y-1">
                          <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                              {step.order}
                            </span>
                            {step.title}
                          </h5>
                          <div className="pl-6.5 text-xs font-semibold text-muted-foreground leading-relaxed">
                            <LatexRenderer text={step.explanation} />
                            {step.formula && (
                              <div className="my-1.5 p-2 bg-secondary/30 rounded text-foreground overflow-x-auto">
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

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-border/30 rounded-xl text-xs">
                      <div className="font-extrabold text-foreground">
                        Đáp án chính xác: <span className="text-emerald-500 font-black"><LatexRenderer text={activeMistake.question.correctAnswer} /></span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={closeReview}
                  className="w-full font-bold py-3 text-xs active:scale-[0.98] flex items-center justify-center gap-1.5"
                >
                  Quay lại Sổ lỗi sai <ArrowRight size={16} />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

    </div>
  );
};
export default MistakeNotebook;
