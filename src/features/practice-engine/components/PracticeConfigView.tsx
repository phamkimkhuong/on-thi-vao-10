import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { cn } from '../../../utils/cn';

interface PracticeConfigViewProps {
  grammarSection: 'dang1' | 'dang2' | 'dang3' | 'dang4' | 'dang5' | null;
  selectedTensesForCombo: string[];
  setSelectedTensesForCombo: React.Dispatch<React.SetStateAction<string[]>>;
  setIsConfiguringAll: (val: boolean) => void;
  startCustomReview: () => void;
}

export const PracticeConfigView: React.FC<PracticeConfigViewProps> = ({
  grammarSection,
  selectedTensesForCombo,
  setSelectedTensesForCombo,
  setIsConfiguringAll,
  startCustomReview,
}) => {
  const isGlobal = grammarSection === null;
  const tensesMeta = isGlobal
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
      ];

  const toggleTense = (id: string) => {
    setSelectedTensesForCombo(prev => {
      if (prev.includes(id)) {
        return prev.filter(t => t !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const hasEnoughTenses = isGlobal ? selectedTensesForCombo.length >= 1 : selectedTensesForCombo.length >= 2;

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-12 animate-fade-in">
      <button
        onClick={() => setIsConfiguringAll(false)}
        className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start animate-fade-in"
      >
        ← Quay lại
      </button>

      <Card className="border-indigo-500/10 shadow-md">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30">
          <CardTitle className="text-foreground text-sm font-black flex items-center gap-2">
            📑 Thiết lập cấu hình Tổng ôn Thông minh
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
              {isGlobal ? "1. Chọn các dạng bài muốn luyện tập (Ít nhất 1 dạng):" : "1. Chọn các dạng thì muốn luyện tập (Ít nhất 2 dạng):"}
            </h3>
            <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
              {isGlobal ? "Hệ thống sẽ tổng hợp câu hỏi từ các dạng bài đã chọn để tạo đề ôn tập tổng hợp." : "Hệ thống sẽ tổng hợp câu hỏi từ các dạng thì đã chọn để rèn luyện phản xạ hỗn hợp."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {tensesMeta.map((tense) => {
              const isChecked = selectedTensesForCombo.includes(tense.id);
              return (
                <div
                  key={tense.id}
                  onClick={() => toggleTense(tense.id)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border transition-all duration-150 cursor-pointer active:scale-[0.99] select-none",
                    isChecked
                      ? "bg-indigo-500/5 border-indigo-500/30 text-indigo-900 dark:text-indigo-200"
                      : "bg-card border-border hover:bg-slate-50/50 dark:hover:bg-slate-900/10 text-foreground"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // toggled via parent onClick
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="font-extrabold text-xs">{tense.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">{tense.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">
              2. Giới hạn số lượng câu hỏi mỗi lượt tạo:
            </h3>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-border/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground">Mỗi lượt tổng ôn sẽ tạo ngẫu nhiên tối đa:</span>
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1 rounded-lg">40 Câu hỏi</span>
            </div>
          </div>

          {!hasEnoughTenses && (
            <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 text-xs font-semibold">
              {isGlobal ? "⚠️ Bạn cần chọn ít nhất 1 dạng bài để bắt đầu." : "⚠️ Bạn cần chọn ít nhất 2 thì ngữ pháp để có thể trộn đề luyện tập."}
            </div>
          )}

          <Button
            onClick={startCustomReview}
            disabled={!hasEnoughTenses}
            className="w-full font-bold py-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer h-11"
          >
            🚀 Bắt đầu luyện tập tổng hợp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
