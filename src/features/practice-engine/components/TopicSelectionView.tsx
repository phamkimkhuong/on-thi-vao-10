import React, { useMemo } from 'react';
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
  questionTypeId?: string;
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
  questionTypeId,
}) => {
  const navigate = useNavigate();
  const isMath = routeSubject === 'math';

  const dang1QIds = useMemo(() => [
    ...Array.from({ length: 80 }, (_, i) => `eng-q${i + 5}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 102}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 122}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 142}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 162}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 182}`),
    ...Array.from({ length: 20 }, (_, i) => `eng-q${i + 202}`)
  ], []);

  const dang2QIds = useMemo(() => Array.from({ length: 40 }, (_, i) => `eng-q${i + 222}`), []);
  const dang3QIds = useMemo(() => Array.from({ length: 40 }, (_, i) => `eng-q${i + 262}`), []);
  const dang4QIds = useMemo(() => Array.from({ length: 30 }, (_, i) => `eng-q${i + 302}`), []);
  const dang5QIds = useMemo(() => Array.from({ length: 30 }, (_, i) => `eng-q${i + 332}`), []);

  if (!isMath && questionTypeId === 'eng-qt6' && grammarSection === null) {
    const dangCards = [
      {
        id: 'dang1',
        name: '⏱️ Dạng 1: Thì động từ cơ bản',
        description: 'Luyện tập 6 thì động từ chủ chốt (Hiện tại đơn, Quá khứ đơn, Tiếp diễn, Hoàn thành, Tương lai đơn, Quá khứ tiếp diễn) và các quy tắc phối hợp thì.',
        qIds: dang1QIds,
      },
      {
        id: 'dang2',
        name: '📦 Dạng 2: Cấu trúc động từ',
        description: 'Luyện tập cấu trúc động từ nguyên mẫu và danh động từ (to V, V-ing, V0) để củng cố phản xạ phân biệt.',
        qIds: dang2QIds,
      },
      {
        id: 'dang3',
        name: '🔌 Dạng 3: Giới từ & Phrasal verbs',
        description: 'Luyện giới từ cố định đi kèm tính từ, động từ và các cụm động từ cơ bản thông dụng.',
        qIds: dang3QIds,
      },
      {
        id: 'dang4',
        name: '⚖️ Dạng 4: Cấu trúc So sánh',
        description: 'Rèn luyện các cấu trúc so sánh bằng, so sánh hơn, so sánh nhất của tính từ và trạng từ.',
        qIds: dang4QIds,
      },
      {
        id: 'dang5',
        name: '📐 Dạng 5: Vị trí của các loại từ',
        description: 'Rèn luyện kỹ năng xác định từ loại phù hợp (Danh - Động - Tính - Trạng) để điền vào câu dựa trên ngữ cảnh.',
        qIds: dang5QIds,
      },
    ];

    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => {
            navigate('/practice');
          }}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start animate-fade-in"
        >
          ← Quay lại chọn chuyên đề
        </button>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground tracking-tight">Trắc nghiệm Ngữ pháp & Từ vựng</h2>
          <p className="text-xs text-muted-foreground font-semibold">
            Chọn một trong 5 dạng chuyên đề dưới đây để bắt đầu ôn tập ngữ pháp và từ vựng Tiếng Anh vào 10.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dangCards.map((card) => {
            const percent = getSubTenseProgress(card.qIds);
            return (
              <Card
                key={card.id}
                className="hover:border-primary/50 cursor-pointer transition-all duration-200 hover:translate-x-[2px] border bg-card flex flex-col justify-between"
                onClick={() => {
                  setGrammarSection(card.id as any);
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
                  Tự chọn tổ hợp các dạng bài mong muốn và tạo ngẫu nhiên lượt luyện tập tối đa 40 câu hỏi.
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
                  Luyện thi tính giờ với số lượng câu và dạng bài tự chọn. Không hiện giải thích ngay khi làm, chỉ hiện toàn bộ khi nộp bài hoặc hết giờ.
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
      </div>
    );
  }

  if (!isMath && grammarSection !== null) {
    let subTenseCards: Array<{ id: string; name: string; description: string; qIds: string[] }> = [];
    let sectionTitle = '';
    let sectionDesc = '';

    if (grammarSection === 'dang1') {
      sectionTitle = 'Dạng 1: Thì động từ cơ bản';
      sectionDesc = 'Luyện tập sâu từng thì hoặc làm bài thi thử để kiểm tra trình độ.';
      subTenseCards = [
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
    } else if (grammarSection === 'dang2') {
      sectionTitle = 'Dạng 2: Cấu trúc động từ (to V, V-ing, V0)';
      sectionDesc = 'Luyện tập các cấu trúc động từ nguyên mẫu và danh động từ.';
      subTenseCards = [
        {
          id: 'to_v',
          name: '👉 Cấu trúc động từ dạng "to V"',
          description: 'Luyện chia động từ dạng to V sau các từ chỉ mong muốn, quyết định: decide, want, hope, agree, would like...',
          qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 222}`)
        },
        {
          id: 'v_ing',
          name: '👉 Cấu trúc động từ dạng "V-ing"',
          description: 'Luyện chia động từ dạng V-ing sau các từ chỉ sở thích, trì hoãn: enjoy, avoid, practice, finish, spend time...',
          qIds: Array.from({ length: 20 }, (_, i) => `eng-q${i + 242}`)
        },
        {
          id: 'verb_combo',
          name: '📑 Tổng hợp Cấu trúc động từ',
          description: 'Luyện tập tổng hợp các cấu trúc động từ (to V, V-ing, V0) để củng cố phản xạ phân biệt.',
          qIds: Array.from({ length: 40 }, (_, i) => `eng-q${i + 222}`)
        }
      ];
    } else if (grammarSection === 'dang3') {
      sectionTitle = 'Dạng 3: Giới từ & Phrasal verbs cơ bản';
      sectionDesc = 'Luyện giới từ cố định, phrasal verbs, giới từ thời gian/nơi chốn thông dụng.';
      subTenseCards = [
        {
          id: 'prep_phrasal',
          name: '🔌 Giới từ & Phrasal Verbs',
          description: 'Luyện giới từ đi kèm tính từ, động từ cố định (interested in, good at, turn off, look after, cut down on...).',
          qIds: Array.from({ length: 40 }, (_, i) => `eng-q${i + 262}`)
        }
      ];
    } else if (grammarSection === 'dang4') {
      sectionTitle = 'Dạng 4: Cấu trúc So sánh (Comparisons)';
      sectionDesc = 'Luyện các cấu trúc so sánh hơn, so sánh nhất, so sánh bằng/không bằng của tính từ và trạng từ.';
      subTenseCards = [
        {
          id: 'comparison',
          name: '⚖️ Cấu trúc So sánh (Comparisons)',
          description: 'Rèn luyện các cấu trúc so sánh bằng, so sánh hơn, so sánh nhất của tính từ/trạng từ ngắn và dài.',
          qIds: Array.from({ length: 30 }, (_, i) => `eng-q${i + 302}`)
        }
      ];
    } else if (grammarSection === 'dang5') {
      sectionTitle = 'Dạng 5: Vị trí từ loại (Word Positions)';
      sectionDesc = 'Luyện xác định vị trí của danh từ, động từ, tính từ, trạng từ trong cấu trúc câu.';
      subTenseCards = [
        {
          id: 'word_position',
          name: '📐 Vị trí từ loại (Word Positions)',
          description: 'Rèn luyện kỹ năng xác định từ loại phù hợp để điền vào câu dựa trên ngữ cảnh và từ đứng trước/sau.',
          qIds: Array.from({ length: 30 }, (_, i) => `eng-q${i + 332}`)
        }
      ];
    }

    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => {
            setGrammarSection(null);
          }}
          className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start animate-fade-in"
        >
          ← Quay lại danh sách Dạng bài
        </button>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-foreground tracking-tight">{sectionTitle}</h2>
          <p className="text-xs text-muted-foreground font-semibold">{sectionDesc}</p>
        </div>

        {/* Hero Milestone Card: Bài kiểm tra tổng hợp 6 thì */}
        {grammarSection === 'dang1' && (
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
        )}

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
                        setGrammarSection(null);
                        navigate(`/practice/eng-qt6`);
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
