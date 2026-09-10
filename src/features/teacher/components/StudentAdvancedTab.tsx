import React, { useState, useMemo } from 'react';
import { cn } from '../../../utils/cn';
import type { StudentAdvancedSubjectData } from '../../../services/teacherService';

interface StudentAdvancedTabProps {
  advancedData: StudentAdvancedSubjectData[];
  isLoading?: boolean;
}

export const StudentAdvancedTab: React.FC<StudentAdvancedTabProps> = ({
  advancedData,
  isLoading = false
}) => {
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<'math10' | 'phy10' | 'chem10' | 'bio10'>('math10');

  const activeSubject = useMemo(() => {
    return advancedData.find(s => s.subjectKey === selectedSubjectKey) || advancedData[0];
  }, [advancedData, selectedSubjectKey]);

  if (isLoading) {
    return (
      <div className="py-8 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-semibold">Đang tải tiến độ...</span>
      </div>
    );
  }

  if (!advancedData || advancedData.length === 0) {
    return (
      <div className="py-8 text-center text-xs text-muted-foreground font-semibold bg-slate-50/50 dark:bg-slate-900/5 rounded-xl border border-dashed border-border/50">
        Học sinh này chưa có tiến trình chuyên đề nâng cao.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* 4 Tabs Môn Học Nâng Cao */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {advancedData.map(subject => {
          const isSelected = subject.subjectKey === selectedSubjectKey;
          const percent = subject.totalQuestions > 0 
            ? Math.round((subject.completedCount / subject.totalQuestions) * 100) 
            : 0;

          return (
            <button
              key={subject.subjectKey}
              onClick={() => setSelectedSubjectKey(subject.subjectKey)}
              className={cn(
                "flex flex-col items-start p-2 rounded-xl border text-left transition-all cursor-pointer select-none",
                isSelected
                  ? "border-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-sm"
                  : "border-border/30 hover:border-border/60 bg-slate-50/10 dark:bg-slate-900/5 hover:bg-slate-50/30"
              )}
            >
              <div className="flex items-center gap-1.5 mb-1 w-full overflow-hidden">
                <span className="text-xs shrink-0">{subject.icon}</span>
                <span className="text-[9px] font-black truncate text-foreground flex-1 uppercase">
                  {subject.subjectName.replace('Nâng cao', '').trim()}
                </span>
                <span className="text-[7px] font-extrabold px-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Nâng cao
                </span>
              </div>
              <div className="w-full flex items-center justify-between text-[8px] mt-auto">
                <span className="font-bold text-muted-foreground">
                  {subject.completedCount}/{subject.totalQuestions} câu
                </span>
                <span className={cn(
                  "font-black text-[9px]",
                  percent > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
                )}>
                  {percent}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-0.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Danh sách chủ đề của Môn Đang Chọn (Thiết kế đồng bộ với StudentMasteryTab) */}
      {activeSubject && (
        <div className="space-y-2.5 p-3 rounded-xl border border-border/30 bg-slate-50/20 dark:bg-slate-900/10">
          <div className="flex items-center justify-between">
            <h5 className="text-[11px] font-extrabold uppercase flex items-center gap-1.5 text-foreground">
              <span>{activeSubject.icon}</span>
              <span>{activeSubject.subjectName}</span>
              <span className="text-[8px] font-black px-1.5 py-0.2 rounded border bg-card text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                Đúng {activeSubject.accuracyRate}%
              </span>
            </h5>
            <span className="text-[9px] font-extrabold text-muted-foreground">
              Đã làm: <strong className="text-foreground">{activeSubject.completedCount} / {activeSubject.totalQuestions}</strong> câu ({activeSubject.correctCount} đúng)
            </span>
          </div>

          {/* Danh sách từng Topic */}
          <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
            {activeSubject.topicStats.map(topic => {
              const topicAcc = topic.completed > 0 ? Math.round((topic.correct / topic.completed) * 100) : 0;
              const isStarted = topic.completed > 0;

              return (
                <div 
                  key={topic.topicId} 
                  className="flex items-center justify-between gap-3 p-2 border border-border/30 bg-card rounded-lg text-xs hover:border-border/80 transition-colors"
                >
                  <span className="font-extrabold text-foreground flex-1 truncate" title={topic.title}>
                    {topic.title}
                  </span>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[9px] font-bold text-muted-foreground">
                      {topic.completed}/{topic.total} câu
                    </span>

                    <span className={cn(
                      "text-[9px] font-black w-14 text-right px-1.5 py-0.5 rounded border",
                      !isStarted 
                        ? "text-muted-foreground/50 border-transparent bg-slate-100/50 dark:bg-slate-800/50"
                        : topicAcc >= 70
                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                        : "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
                    )}>
                      {isStarted ? `${topicAcc}% đúng` : 'Chưa làm'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
