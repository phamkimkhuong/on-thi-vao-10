import React from 'react';
import { Award, Activity, Timer, CheckCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface StudentSummaryProps {
  completedLessonsCount: number;
  totalQuestionTypesCount: number;
  stats: {
    totalStudyMinutes: number;
    accuracyRate: number;
    activeDaysInLast7: number;
    totalAttempts: number;
    activityGrid: Array<{ label: string; count: number; dateStr: string; active: boolean }>;
  };
}

export const StudentSummary: React.FC<StudentSummaryProps> = ({
  completedLessonsCount,
  totalQuestionTypesCount,
  stats,
}) => {
  return (
    <div className="space-y-6">
      {/* Thống kê nhanh */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-2.5">
          <Award className="text-emerald-500 shrink-0" size={20} />
          <div>
            <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Số dạng master</p>
            <h4 className="text-xs font-black text-foreground">{completedLessonsCount} / {totalQuestionTypesCount}</h4>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-2.5">
          <Activity className="text-indigo-500 shrink-0" size={20} />
          <div>
            <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Tỷ lệ hoàn thành</p>
            <h4 className="text-xs font-black text-foreground">
              {totalQuestionTypesCount > 0 ? Math.round((completedLessonsCount / totalQuestionTypesCount) * 100) : 0}%
            </h4>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-2.5">
          <Timer className="text-amber-500 shrink-0" size={20} />
          <div>
            <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Tổng giờ tự học</p>
            <h4 className="text-xs font-black text-foreground">
              {stats.totalStudyMinutes} phút
            </h4>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-2.5">
          <CheckCircle className="text-teal-500 shrink-0" size={20} />
          <div>
            <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Tỷ lệ chính xác</p>
            <h4 className="text-xs font-black text-foreground">
              {stats.accuracyRate}%
            </h4>
          </div>
        </div>
      </div>

      {/* Biểu đồ 7 ngày qua */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-4 rounded-xl space-y-3">
        <div className="flex items-center justify-between border-b border-border/20 pb-2">
          <h5 className="text-[10px] font-black uppercase text-foreground tracking-wider flex items-center gap-1.5">
            <Activity size={14} className="text-emerald-500 animate-pulse" />
            Tần suất học tập 7 ngày qua ({stats.activeDaysInLast7}/7 ngày hoạt động)
          </h5>
          <span className="text-[9px] font-extrabold text-muted-foreground">
            Tổng cộng {stats.totalAttempts} câu đã làm
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {stats.activityGrid.map((day, dIdx) => (
            <div
              key={dIdx}
              className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-card border border-border/40"
            >
              <span className="text-[8px] font-bold text-muted-foreground">{day.label.split(' ')[0]}</span>
              <div
                className={cn(
                  "w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-black transition-all",
                  day.active
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/20"
                    : "bg-slate-100 dark:bg-slate-800 text-muted-foreground/40 border border-dashed border-border/50"
                )}
                title={day.active ? `Đã làm ${day.count} câu vào ngày ${day.dateStr}` : 'Không có hoạt động'}
              >
                {day.count > 0 ? day.count : '-'}
              </div>
              <span className="text-[7px] font-semibold text-muted-foreground/60">{day.label.split(' ')[1]?.replace(/[()]/g, '')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
