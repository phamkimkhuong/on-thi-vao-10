import React, { useEffect, useState, useCallback } from 'react';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { mathQuestions, mathQuestionTypes } from '../../data/mathData';
import { englishQuestions, englishQuestionTypes } from '../../data/englishData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { Question, ExamResult } from '../../types';
import { 
  Award, 
  Timer, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  CheckSquare, 
  TrendingUp,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamEngine: React.FC = () => {
  const { selectedSubject, setView, selectQuestionType, user } = useAppStore();

  const [examState, setExamState] = useState<'intro' | 'testing' | 'result'>('intro');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // Lưu trữ câu trả lời của học sinh
  
  // Đếm ngược thời gian (giây)
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  const durationMinutes = selectedSubject === 'math' ? 120 : 60;

  const handleSubmitExam = useCallback(() => {
    setExamState('result');

    let correctCount = 0;
    const totalCount = examQuestions.length;
    const attemptResults: Record<string, { userAnswer: string, isCorrect: boolean }> = {};

    examQuestions.forEach(q => {
      const userAns = answers[q.id] || '';
      let isCorrect: boolean;

      if (selectedSubject === 'math') {
        const cleanUser = userAns.trim().toLowerCase().replace(/\s+/g, '');
        const cleanCorrect = q.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');
        isCorrect = cleanUser === cleanCorrect || cleanCorrect.includes(cleanUser) && cleanUser.length > 1;
      } else {
        isCorrect = userAns === q.correctAnswer;
      }

      if (isCorrect) correctCount++;
      attemptResults[q.id] = {
        userAnswer: userAns,
        isCorrect
      };

      // Tự động ghi nhận lịch sử làm bài vào LocalStorage để đồng bộ tiến độ
      storageService.saveAttempt({
        id: `exam-attempt-${Date.now()}-${q.id}`,
        userId: 'guest',
        questionId: q.id,
        questionTypeId: q.questionTypeId,
        userAnswer: userAns,
        isCorrect,
        timeSpent: Math.round(timeSpent / totalCount),
        createdAt: new Date().toISOString()
      });
    });

    const score = Math.round((correctCount / totalCount) * 10 * 10) / 10; // Thang điểm 10 làm tròn 1 chữ số

    const result: ExamResult = {
      examId: `exam-${selectedSubject}-${Date.now()}`,
      score,
      correctCount,
      totalCount,
      timeSpent,
      completedAt: new Date().toISOString(),
      attempts: attemptResults
    };

    setExamResult(result);
    storageService.saveExamResult(result);

    // Đồng bộ Firestore
    if (user) {
      progressService.saveExamResult(user.uid, result);
    }

    if (score >= 8.0) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [examQuestions, answers, selectedSubject, timeSpent, user]);

  useEffect(() => {
    let timer: any;
    if (examState === 'testing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        setTimeSpent(prev => prev + 1);
      }, 1000);
    } else if (timeLeft === 0 && examState === 'testing') {
      handleSubmitExam(); // Tự động nộp bài khi hết giờ
    }

    return () => clearInterval(timer);
  }, [examState, timeLeft, handleSubmitExam]);

  const handleStartExam = () => {
    const isMath = selectedSubject === 'math';
    // Đề thi thử MVP sẽ bốc toàn bộ ngân hàng câu hỏi để kiểm tra toàn diện
    const qList = isMath ? mathQuestions : englishQuestions;

    setExamQuestions(qList);
    setAnswers({});
    setTimeLeft(durationMinutes * 60);
    setTimeSpent(0);
    setExamState('testing');
  };

  const handleInputChange = (questionId: string, val: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: val
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

        <Card className="border-indigo-500/10 shadow-md">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
            <CardTitle className="text-foreground text-base font-bold flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Đề thi thử {selectedSubject === 'math' ? 'Toán học lớp 9' : 'Tiếng Anh tuyển sinh'} số 1
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-xl border border-border/10">
                <span className="text-[10px] font-bold text-muted-foreground block mb-1">THỜI GIAN LÀM BÀI</span>
                <span className="text-sm font-extrabold text-foreground">{durationMinutes} phút</span>
              </div>
              <div className="p-4 bg-secondary rounded-xl border border-border/10">
                <span className="text-[10px] font-bold text-muted-foreground block mb-1">SỐ CÂU HỎI TRỰC CHIẾN</span>
                <span className="text-sm font-extrabold text-foreground">
                  {selectedSubject === 'math' ? '4 câu tự luận tổng hợp' : '4 câu trắc nghiệm điển hình'}
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
                {selectedSubject === 'math' ? (
                  // Nhập tự luận cho Toán
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground block">Đáp số của bạn:</label>
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      placeholder="Nhập câu trả lời..."
                      className="w-full sm:max-w-md bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold"
                    />
                  </div>
                ) : (
                  // Chọn trắc nghiệm cho Anh
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options?.map((opt: string, i: number) => {
                      const optLetter = opt.charAt(0);
                      const isSelected = answers[q.id] === optLetter;
                      return (
                        <button
                          key={i}
                          onClick={() => handleOptionSelect(q.id, optLetter)}
                          className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold border transition-all duration-150 active:scale-[0.99] cursor-pointer ${
                            isSelected 
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nộp bài thi */}
        <Button 
          onClick={handleSubmitExam}
          className="w-full font-bold py-4 text-xs bg-red-500 hover:bg-red-600 active:scale-[0.98] shadow-md shadow-red-500/10 flex items-center justify-center gap-1.5"
        >
          <CheckSquare size={16} /> Nộp bài thi thử &amp; Xem kết quả
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
                    <div key={item.typeId} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card ${
                      isWeak ? 'border-red-500/20 shadow-sm shadow-red-500/5' : 'border-border'
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
                            selectQuestionType(item.typeId);
                            setView('question-type');
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

            {/* Thoát phòng thi */}
            <Button
              onClick={() => { setExamState('intro'); setView('dashboard'); }}
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
