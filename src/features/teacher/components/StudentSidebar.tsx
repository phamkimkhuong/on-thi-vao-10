import React from 'react';
import { Users, Loader } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { SimulatedStudent } from '../../../types';
import { cn } from '../../../utils/cn';

interface StudentSidebarProps {
  students: SimulatedStudent[];
  selectedStudent: SimulatedStudent | null;
  onSelectStudent: (student: SimulatedStudent) => void;
  hasMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
}

export const StudentSidebar: React.FC<StudentSidebarProps> = ({
  students,
  selectedStudent,
  onSelectStudent,
  hasMore,
  isLoadingMore,
  onLoadMore,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1">
        <Users size={14} /> Danh sách học sinh ({students.length})
      </h3>

      <div className="space-y-3">
        {students.map((student) => {
          const isSelected = selectedStudent?.id === student.id;
          const completedCount = (student as any).completedCount ?? 0;

          return (
            <Card
              key={student.id}
              onClick={() => onSelectStudent(student)}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:border-emerald-500/50 border",
                isSelected ? "border-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/15" : "bg-card border-border/50"
              )}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-10 h-10 rounded-full border border-emerald-500/20 bg-slate-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-extrabold text-xs text-foreground truncate">{student.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-semibold truncate">{student.email}</p>

                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold px-1.5 py-0.5 rounded">
                      Đã đạt: {completedCount} dạng bài
                    </span>
                    {student.isPremium && (
                      <span className="text-[9px] bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 font-black px-1.5 py-0.5 rounded border border-amber-500/20 animate-pulse flex items-center gap-0.5">
                        ⭐ Premium
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {hasMore && (
          <div className="pt-2 text-center">
            <Button
              onClick={onLoadMore}
              disabled={isLoadingMore}
              variant="outline"
              className="w-full text-xs font-bold py-2 hover:bg-emerald-500/5 active:scale-[0.98] transition-all cursor-pointer border-dashed border-border/80"
            >
              {isLoadingMore ? (
                <span className="flex items-center justify-center gap-1.5">
                  <Loader size={12} className="animate-spin text-emerald-600" />
                  Đang tải thêm...
                </span>
              ) : (
                'Tải thêm học sinh'
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
