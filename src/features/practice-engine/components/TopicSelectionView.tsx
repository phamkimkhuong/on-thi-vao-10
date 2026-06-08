import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { cn } from '../../../utils/cn';
import { QuestionType } from '../../../types';
import { mathTopics } from '../../../data/mathData';
import { englishTopics } from '../../../data/englishData';

interface TopicSelectionViewProps {
  routeSubject: 'math' | 'english';
  mathQuestionTypes: QuestionType[];
  englishQuestionTypes: QuestionType[];
  grammarSection: 'dang1' | 'dang2' | 'dang3' | 'dang4' | 'dang5' | null;
  setGrammarSection: (val: 'dang1' | 'dang2' | 'dang3' | 'dang4' | 'dang5' | null) => void;
  setSelectedSubTense: (val: any) => void;
  setSelectedTensesForCombo: (val: string[]) => void;
  setIsConfiguringAll: (val: boolean) => void;
  setIsConfiguringExam: (val: boolean) => void;
  setExamTenses: (val: string[]) => void;
  globalProgressPercent: number;
  tensesReviewAttemptsCount: number;
  tensesReviewBestScore: number;
  startTensesReview: () => void;
  getSubTenseProgress: (qIds: string[]) => number;
  isPremium: boolean;
}

export const TopicSelectionView: React.FC<TopicSelectionViewProps> = ({
  routeSubject,
  mathQuestionTypes,
  englishQuestionTypes,
  grammarSection,
  setGrammarSection,
  setSelectedSubTense,
  setSelectedTensesForCombo,
  setIsConfiguringAll,
  setIsConfiguringExam,
  setExamTenses,
  globalProgressPercent,
  tensesReviewAttemptsCount,
  tensesReviewBestScore,
  startTensesReview,
  getSubTenseProgress,
  isPremium,
}) => {
  const navigate = useNavigate();
  const isMath = routeSubject === 'math';

  if (!isMath && grammarSection === 'dang1') {
    const subTenseCards = [
      {
        id: 'present_simple',
        name: '⏱️ Thì Hiện tại đơn (Present Simple)',
        description: 'Tập trung luyện các câu chia thì Hiện tại đơn với các dấu hiệu nhận biết quen thuộc: usually, often, always, every day...',
        qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 5}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`)]
      },
      {
        id: 'past_simple',
        name: '🗓️ Thì Quá khứ đơn (Past Simple)',
        description: 'Tập trung luyện các câu chia thì Quá khứ đơn với các dấu hiệu thời gian quá khứ: yesterday, last summer, ago...',
        qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 25}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`)]
      },
      {
        id: 'present_continuous',
        name: '⚡ Thì Hiện tại tiếp diễn (Present Continuous)',
        description: 'Tập trung luyện các câu chia thì Hiện tại tiếp diễn với các dấu hiệu thời điểm hoặc cảm thán: now, at the moment, Look!...',
        qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 45}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`)]
      },
      {
        id: 'past_continuous',
        name: '⏳ Thì Quá khứ tiếp diễn (Past Continuous)',
        description: 'Tập trung luyện các câu chia thì Quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm quá khứ với liên từ while.',
        qIds: [...Array.from({ length: 20 }, (_, i) => `eng-q${i + 65}`), ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`)]
      },
      {
        id: 'present_perfect',
        name: '✨ Thì Hiện tại hoàn thành (Present Perfect)',
        description: 'Tập trung chia động từ ở thì Hiện tại hoàn thành (has/have + V3/ed) và phân biệt với Quá khứ đơn.',
        qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`)
      },
      {
        id: 'future_simple',
        name: '🔮 Thì Tương lai đơn (Future Simple / Will)',
        description: 'Tập trung chia động từ ở thì Tương lai đơn (will + V) và cấu trúc câu điều kiện loại 1.',
        qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
      },
      {
        id: 'all',
        name: '📑 Tổng ôn thông minh',
        description: 'Tự chọn tổ hợp các dạng thì mong muốn và tạo ngẫu nhiên lượt luyện tập tối đa 40 câu hỏi.',
        qIds: [
          ...Array.from({ length: 80 }, (_, i) => `eng-q${i + 5}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
        ]
      },
      {
        id: 'exam',
        name: '🏆 Luyện thi trắc nghiệm',
        description: 'Luyện thi tính giờ với số lượng câu và thì tự chọn. Không hiện giải thích ngay khi làm, chỉ hiện toàn bộ khi nộp bài hoặc hết giờ.',
        qIds: [
          ...Array.from({ length: 80 }, (_, i) => `eng-q${i + 5}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`),
          ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
        ]
      }
    ];

    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => setGrammarSection(null)}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start animate-fade-in"
        >
          ← Quay lại chọn Module
        </button>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground tracking-tight">Dạng 1: Thì động từ cơ bản</h2>
          <p className="text-xs text-muted-foreground font-semibold">Luyện tập sâu từng thì hoặc làm bài thi thử để kiểm tra trình độ.</p>
        </div>

        {/* Hero Milestone Card: Bài kiểm tra tổng hợp 6 thì */}
        <Card className="border-indigo-500/20 bg-gradient-to-br from-slate-50 to-indigo-50/20 dark:from-slate-900/50 dark:to-indigo-950/10 shadow-sm overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500 text-white flex items-center gap-1">
                  📝 ĐÁNH GIÁ NĂNG LỰC
                </span>
                <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                  🔓 Tự do ôn tập
                </span>
              </div>
              <h3 className="font-extrabold text-sm md:text-base text-foreground">
                Bài kiểm tra tổng hợp 6 thì
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                Bài thi tổng hợp gồm **20 câu hỏi trắc nghiệm** trộn ngẫu nhiên từ cả 6 thì (thời gian làm bài: 15 phút, không hiện đáp án ngay). Khuyên dùng để tự đánh giá mức độ phản xạ phối hợp giữa các thì.
              </p>
              {tensesReviewAttemptsCount > 0 && (
                <div className="flex gap-4 text-[10px] font-extrabold text-muted-foreground pt-1.5">
                  <span>Đã làm: <span className="text-foreground">{tensesReviewAttemptsCount} lần</span></span>
                  <span>Điểm cao nhất: <span className={cn(tensesReviewBestScore >= 15 ? "text-emerald-600" : "text-rose-600")}>{tensesReviewBestScore}/20 câu đúng ({Math.round(tensesReviewBestScore / 20 * 100)}%)</span></span>
                </div>
              )}
            </div>
            <Button
              onClick={startTensesReview}
              className="font-bold text-xs py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer h-10 shrink-0 shadow-sm"
            >
              {tensesReviewAttemptsCount > 0 ? '🔄 Kiểm tra lại' : '✍️ Làm bài ngay'}
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subTenseCards.map((card) => {
            const percent = getSubTenseProgress(card.qIds);
            return (
              <Card
                key={card.id}
                className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-x-[2px] border bg-card flex flex-col justify-between"
                onClick={() => {
                  if (card.id === 'all') {
                    setIsConfiguringAll(true);
                  } else if (card.id === 'exam') {
                    setIsConfiguringExam(true);
                  } else {
                    setSelectedSubTense(card.id as any);
                  }
                }}
              >
                <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                        🗣️ Anh
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1">
                      {card.name}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{card.description}</p>
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

  // Màn hình chọn dạng bài chính
  const topics = isMath ? mathTopics : englishTopics;
  const qTypes = isMath ? mathQuestionTypes : englishQuestionTypes;

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-foreground tracking-tight">
          {isMath ? '📐 Luyện tập Toán tuyển sinh 10' : '🗣️ Luyện tập Tiếng Anh vào 10'}
        </h2>
        <p className="text-xs text-muted-foreground font-semibold">
          {isMath 
            ? 'Học sinh làm bài tự luận chi tiết ra giấy, chụp ảnh gửi bài để thầy cô chấm và nhận xét.' 
            : 'Tổng hợp các câu hỏi trắc nghiệm & điền từ bám sát đề thi chính thức tỉnh Bình Định.'}
        </p>
      </div>

      {topics.map((topic) => {
        const topicQTypes = qTypes.filter(qt => qt.topicId === topic.id);
        if (topicQTypes.length === 0) return null;

        return (
          <div key={topic.id} className="space-y-4">
            <div className="flex items-center gap-2.5 border-b border-border/20 pb-2">
              <div className="h-4 w-1 bg-primary rounded-full" />
              <h3 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
                {topic.name}
              </h3>
              <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-muted-foreground font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {topicQTypes.length} dạng bài
              </span>
            </div>

            <div className={cn("grid gap-4", isMath ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
              {topicQTypes.map((qType) => {
                return (
                  <Card
                    key={qType.id}
                    className="cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-primary/50"
                    onClick={() => {
                      if (topic.tier === 3 && !isPremium) {
                        if (window.confirm("Chặng 3 (Mục tiêu điểm 9-10) là đặc quyền dành riêng cho tài khoản Premium. Bạn có muốn nâng cấp lên Premium ngay để mở khóa không?")) {
                          navigate('/premium');
                        }
                        return;
                      }

                      if (qType.id === 'eng-qt6') {
                        setGrammarSection('dang1');
                      } else {
                        setSelectedSubTense(null);
                        setGrammarSection(null);
                        navigate(`/practice/${qType.id}`);
                      }
                    }}
                  >
                    <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                            {qType.id === 'eng-qt6' ? 'Module 1' : qType.id === 'eng-qt7' ? 'Module 6' : qType.id === 'eng-qt8' ? 'Module 7' : 'Bài học'}
                          </span>
                          {topic.tier === 3 && !isPremium ? (
                            <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 animate-pulse flex items-center gap-0.5">
                              👑 Khóa Premium
                            </span>
                          ) : (
                            <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                              🔓 Sẵn sàng
                            </span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                          {qType.name}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {qType.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-border/20 pt-4 text-xs font-bold text-primary">
                        <span>
                          {qType.id === 'eng-qt6' ? 'Khám phá 6 bài học →' : 'Bắt đầu học ngay →'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}

      {!isMath && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border/50">
          <Card
            className="cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-indigo-500/30"
            onClick={() => {
              setSelectedTensesForCombo(['module1', 'module2', 'module3', 'module4', 'module5']);
              setIsConfiguringAll(true);
            }}
          >
            <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 px-2.5 py-1 rounded-full text-[9px] font-bold w-fit">
                    <span className="text-[10px]">🗣️</span> Anh
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  📝 Tổng ôn thông minh
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tự chọn tổ hợp các dạng thì mong muốn và tạo ngẫu nhiên lượt luyện tập tối đa 40 câu hỏi.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/20 pt-4 mt-auto">
                <div className="flex items-center gap-2 flex-1 max-w-[65%]">
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-300"
                      style={{ width: `${globalProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground shrink-0">{globalProgressPercent}%</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="font-bold text-[11px] py-1 px-3.5 border border-border/50 hover:bg-accent hover:text-accent-foreground cursor-pointer h-8 rounded-xl shrink-0"
                >
                  Luyện tập →
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-all duration-200 hover:translate-y-[-2px] border bg-card flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-indigo-500/30"
            onClick={() => {
              setExamTenses(['module1', 'module2', 'module3', 'module4', 'module5']);
              setIsConfiguringExam(true);
            }}
          >
            <CardContent className="p-6 flex flex-col justify-between h-full gap-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 px-2.5 py-1 rounded-full text-[9px] font-bold w-fit">
                    <span className="text-[10px]">🗣️</span> Anh
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  🏆 Luyện thi trắc nghiệm
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Luyện thi tính giờ với số lượng câu và thì tự chọn. Không hiện giải thích ngay khi làm, chỉ hiện toàn bộ khi nộp bài hoặc hết giờ.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/20 pt-4 mt-auto">
                <div className="flex items-center gap-2 flex-1 max-w-[65%]">
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-300"
                      style={{ width: `${globalProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground shrink-0">{globalProgressPercent}%</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="font-bold text-[11px] py-1 px-3.5 border border-border/50 hover:bg-accent hover:text-accent-foreground cursor-pointer h-8 rounded-xl shrink-0"
                >
                  Luyện tập →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
