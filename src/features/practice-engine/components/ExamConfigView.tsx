import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

interface ExamConfigViewProps {
  grammarSection: 'dang1' | 'dang2' | 'dang3' | 'dang4' | 'dang5' | null;
  examTenses: string[];
  setExamTenses: React.Dispatch<React.SetStateAction<string[]>>;
  examQuestionCount: number;
  setExamQuestionCount: (val: number) => void;
  examTimeLimit: number;
  setExamTimeLimit: (val: number) => void;
  setIsConfiguringExam: (val: boolean) => void;
  startExamPractice: () => void;
  selectionOptions?: Array<{ id: string; name: string; desc: string }>;
}

export const ExamConfigView: React.FC<ExamConfigViewProps> = ({
  grammarSection,
  examTenses,
  setExamTenses,
  examQuestionCount,
  setExamQuestionCount,
  examTimeLimit,
  setExamTimeLimit,
  setIsConfiguringExam,
  startExamPractice,
  selectionOptions,
}) => {
  const isGlobal = grammarSection === null;
  const tensesMeta = selectionOptions ?? (isGlobal
    ? [
        { id: 'module1', name: '📦 Dạng 1: Thì động từ cơ bản', desc: 'Luyện tập toàn bộ câu hỏi liên quan đến 6 thì tiếng Anh cơ bản.' },
        { id: 'module2', name: '📦 Dạng 2: Cấu trúc động từ (to V, V-ing, V0)', desc: 'Luyện các cấu trúc động từ nguyên mẫu và danh động từ.' },
        { id: 'module3', name: '📦 Dạng 3: Giới từ & Phrasal Verbs cơ bản', desc: 'Luyện giới từ cố định, phrasal verbs, giới từ thời gian/nơi chốn.' },
        { id: 'module4', name: '📦 Dạng 4: Cấu trúc So sánh (Comparisons)', desc: 'Luyện các cấu trúc so sánh hơn, so sánh nhất, so sánh bằng/không bằng.' },
        { id: 'module5', name: '📦 Dạng 5: Vị trí từ loại (Word Positions)', desc: 'Luyện vị trí của danh từ, động từ, tính từ, trạng từ.' }
      ]
    : [
        { id: 'present_simple', name: '⏱️ Thì Hiện tại đơn (Present Simple)', desc: 'Tập trung chia động từ thường/to be với: usually, often, every day...' },
        { id: 'past_simple', name: '🗓️ Thì Quá khứ đơn (Past Simple)', desc: 'Tập trung các dấu hiệu thời gian trong quá khứ: yesterday, ago, last summer...' },
        { id: 'present_continuous', name: '⚡ Thì Hiện tại tiếp diễn (Present Continuous)', desc: 'Tập trung hành động đang xảy ra: now, at the moment, Look!...' },
        { id: 'past_continuous', name: '⏳ Thì Quá khứ tiếp diễn (Past Continuous)', desc: 'Diễn tả hành động đang xảy ra tại thời điểm quá khứ với liên từ: while...' },
        { id: 'present_perfect', name: '✨ Thì Hiện tại hoàn thành (Present Perfect)', desc: 'Tập trung chia has/have + V3/ed với: since, for, just, already, yet, ever, never...' },
        { id: 'future_simple', name: '🔮 Thì Tương lai đơn & câu điều kiện loại 1 (Future Simple)', desc: 'Tập trung chia will + V nguyên mẫu, won\'t và cấu trúc câu điều kiện loại 1...' },
      ]);
  const usesTopicSelection = Boolean(selectionOptions);

  const toggleTense = (id: string) => {
    setExamTenses(prev => {
      if (prev.includes(id)) {
        return prev.filter(t => t !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5 px-3 sm:px-6 py-3 animate-fade-in pb-12 font-sans">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsConfiguringExam(false)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 bg-card hover:bg-secondary text-foreground cursor-pointer transition-colors shrink-0"
          aria-label="Quay lại"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-foreground text-sm sm:text-base font-black tracking-tight">
          🏆 Thiết lập cấu hình Đề thi trắc nghiệm
        </h2>
      </div>

      <div className="space-y-6 border border-border bg-card p-4 sm:p-6 rounded-xl shadow-sm">
        {/* 1. Chọn các dạng bài */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
            {usesTopicSelection
              ? "1. Chọn các Unit đưa vào đề:"
              : isGlobal
                ? "1. Chọn các dạng bài ôn thi:"
                : "1. Chọn các dạng thì thi cử:"}
          </h3>
          <div className={cn("grid gap-2.5", isGlobal ? "grid-cols-1" : "grid-cols-2")}>
            {tensesMeta.map((tense) => {
              const isChecked = examTenses.includes(tense.id);
              return (
                <div
                  key={tense.id}
                  onClick={() => toggleTense(tense.id)}
                  className={cn(
                    "flex items-center gap-2.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer select-none text-xs font-bold",
                    isChecked
                      ? "bg-indigo-500/5 border-indigo-500/30 text-indigo-900 dark:text-indigo-200"
                      : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span>{tense.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Chọn số câu hỏi */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
            2. Chọn số lượng câu hỏi:
          </h3>
          <div className="flex flex-wrap gap-2">
            {[10, 15, 20, 30, 40].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setExamQuestionCount(count)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                  examQuestionCount === count
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                    : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                )}
              >
                {count} câu
              </button>
            ))}
          </div>
        </div>

        {/* 3. Chọn thời gian làm bài */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
            3. Chọn thời gian làm bài:
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '5 phút', val: 5 },
              { label: '10 phút', val: 10 },
              { label: '15 phút', val: 15 },
              { label: '20 phút', val: 20 },
              { label: '30 phút', val: 30 },
              { label: 'Không giới hạn', val: 0 }
            ].map((item) => (
              <button
                key={item.val}
                type="button"
                onClick={() => setExamTimeLimit(item.val)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                  examTimeLimit === item.val
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                    : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {examTenses.length === 0 && (
          <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 text-xs font-semibold">
            ⚠️ Bạn cần chọn ít nhất 1 {usesTopicSelection ? 'Unit' : isGlobal ? 'dạng bài' : 'dạng thì'} để bắt đầu thi.
          </div>
        )}

        <Button
          onClick={startExamPractice}
          disabled={examTenses.length === 0}
          className="w-full font-bold py-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer h-11 rounded-xl"
        >
          🚀 Bắt đầu làm bài thi
        </Button>
      </div>
    </div>
  );
};
