import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface StudentMasteryTabProps {
  groupedMasteryData: Array<{
    info: {
      key: string;
      name: string;
      icon: string;
      grade: string;
      textClass: string;
      badgeClass: string;
    };
    masteredCount: number;
    items: Array<{
      typeId: string;
      name: string;
      score: number;
      stars: number;
    }>;
  }>;
  selectedSubjectKey: string;
  onSelectSubjectKey: (key: string) => void;
}

export const StudentMasteryTab: React.FC<StudentMasteryTabProps> = ({
  groupedMasteryData,
  selectedSubjectKey,
  onSelectSubjectKey,
}) => {
  if (groupedMasteryData.length === 0) {
    return (
      <div className="py-8 text-center text-xs text-muted-foreground font-semibold bg-slate-50/50 dark:bg-slate-900/5 rounded-xl border border-dashed border-border/50">
        Học sinh này chưa có tiến trình học tập.
      </div>
    );
  }

  const activeKey = selectedSubjectKey || groupedMasteryData[0]?.info.key || '';
  const activeGroup = groupedMasteryData.find(g => g.info.key === activeKey) || groupedMasteryData[0];

  return (
    <div className="space-y-3">
      {/* Grid Tabs Môn Học */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {groupedMasteryData.map((group) => {
          const isSelected = activeKey === group.info.key;
          return (
            <button
              key={group.info.key}
              onClick={() => onSelectSubjectKey(group.info.key)}
              className={cn(
                "flex flex-col items-start p-2 rounded-xl border text-left transition-all cursor-pointer select-none",
                isSelected
                  ? "border-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-sm"
                  : "border-border/30 hover:border-border/60 bg-slate-50/10 dark:bg-slate-900/5 hover:bg-slate-50/30 dark:hover:bg-slate-900/10"
              )}
            >
              <div className="flex items-center gap-1.5 mb-1 w-full overflow-hidden">
                <span className="text-xs shrink-0">{group.info.icon}</span>
                <span className="text-[9px] font-black truncate text-foreground flex-1 uppercase">
                  {group.info.name.replace('Học', '').replace('học', '').trim()}
                </span>
              </div>
              <div className="w-full flex items-center justify-between mt-auto">
                <span className="text-[8px] font-bold text-muted-foreground">
                  {group.masteredCount}/{group.items.length} dạng
                </span>
                <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400">
                  {Math.round((group.masteredCount / group.items.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-0.5 rounded-full overflow-hidden mt-1">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(group.masteredCount / group.items.length) * 100}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Danh sách dạng bài của Môn Học Đang Chọn */}
      {activeGroup && (
        <div className="space-y-2.5 p-3 rounded-xl border border-border/30 bg-slate-50/20 dark:bg-slate-900/10">
          <div className="flex items-center justify-between">
            <h5 className={cn("text-[11px] font-extrabold uppercase flex items-center gap-1.5", activeGroup.info.textClass)}>
              <span>{activeGroup.info.icon}</span>
              <span>{activeGroup.info.name}</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded border font-bold text-muted-foreground bg-card">
                {activeGroup.info.grade}
              </span>
            </h5>
            <span className="text-[9px] font-extrabold text-muted-foreground">
              Đã master: <strong className="text-foreground">{activeGroup.masteredCount} / {activeGroup.items.length}</strong> dạng bài
            </span>
          </div>

          <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
            {activeGroup.items.map((type) => (
              <div key={type.typeId} className="flex items-center justify-between gap-4 p-2 border border-border/30 bg-card rounded-lg text-xs hover:border-border/80 transition-colors">
                <span className="font-extrabold text-foreground flex-1 truncate">{type.name}</span>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        size={9}
                        className={cn(s <= type.stars ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-700")}
                      />
                    ))}
                  </div>
                  <span className={cn("text-[10px] font-black w-10 text-right", activeGroup.info.textClass)}>{type.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
