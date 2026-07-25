import React from 'react';
import { Bot, Sparkles, Brain, Trash2 } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { getSubjectName, getSubjectIcon } from '../../../utils/subject';
import type { SubjectCode } from '../../../types';

interface AiTutorHeaderProps {
  subject: SubjectCode;
  selectedGrade: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  showDiagnostics: boolean;
  onDiagnosticsClick: () => void;
  onClearHistory: () => void;
}

export const AiTutorHeader: React.FC<AiTutorHeaderProps> = ({
  subject,
  selectedGrade,
  isSidebarOpen,
  setIsSidebarOpen,
  showDiagnostics,
  onDiagnosticsClick,
  onClearHistory,
}) => {
  const gradeNumber = selectedGrade === 'grade9' ? '9' : selectedGrade === 'grade10' ? '10' : selectedGrade === 'grade11' ? '11' : '12';

  return (
    <div className="p-3 border-b border-border bg-slate-50/50 dark:bg-slate-900/20 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1.5 rounded-xl border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-all cursor-pointer flex items-center justify-center"
          title={isSidebarOpen ? "Ẩn lịch sử" : "Hiện lịch sử"}
        >
          <Brain size={15} />
        </button>

        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/10">
          <Bot size={20} />
        </div>
        <div>
          <h2 className="text-sm font-black flex items-center gap-1.5 leading-none">
            <span className="mr-0.5">{getSubjectIcon(subject)}</span>
            Gia sư {getSubjectName(subject)} {gradeNumber}
            {selectedGrade === 'grade9' && (
              <span className="px-1.5 py-0.5 text-[8px] bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-md font-bold">
                Ôn thi vào 10
              </span>
            )}
            <span className="px-2 py-0.5 text-[8px] bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md font-bold flex items-center gap-0.5">
              <Sparkles size={8} className="fill-amber-400" /> Socratic
            </span>
          </h2>
          <p className="text-[10px] font-semibold text-muted-foreground mt-1">Tri thức SGK chuẩn GDPT 2018 & Trí nhớ học tập cá nhân hóa</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onDiagnosticsClick}
          title={showDiagnostics ? "Ẩn Hồ sơ năng lực" : "Hiện Hồ sơ năng lực"}
          className={cn(
            "p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs font-bold border",
            showDiagnostics
              ? "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20"
              : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground border-border/60"
          )}
        >
          <Brain size={16} />
          <span className="hidden sm:inline">{showDiagnostics ? "Ẩn Hồ sơ" : "Hiện Hồ sơ"}</span>
        </button>

        <button
          onClick={onClearHistory}
          title="Làm mới cuộc trò chuyện"
          className="p-2 rounded-xl text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground transition-all cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};
