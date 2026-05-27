import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import {
  BookOpen,
  Map,
  Bookmark,
  GraduationCap,
  Award,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Lock
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { mathQuestionTypes } from '../../data/mathData';
import { englishQuestionTypes } from '../../data/englishData';

export const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    darkMode,
    toggleDarkMode,
    selectedSubject,
    setSubject,
    user,
    logout,
    progressVersion
  } = useAppStore();
  void progressVersion;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', label: 'Bảng điều khiển', icon: GraduationCap },
    { path: '/roadmap', label: 'Lộ trình học', icon: Map },
    { path: '/practice', label: 'Luyện tập', icon: BookOpen },
    { path: '/mistakes', label: 'Sổ lỗi sai', icon: Bookmark },
    { path: '/exam', label: 'Thi thử vào 10', icon: Award, isLocked: true }
  ];

  // Tính toán nhanh tiến độ tổng quát
  const currentUserId = user?.uid ?? 'guest';
  const progress = storageService.getProgress(currentUserId);
  const mathCompleted = progress.completedLessons.filter(id => id.startsWith('math')).length;
  const englishCompleted = progress.completedLessons.filter(id => id.startsWith('eng')).length;

  const mathPercent = Math.round((mathCompleted / mathQuestionTypes.length) * 100);
  const englishPercent = Math.round((englishCompleted / englishQuestionTypes.length) * 100);

  const getHeaderTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Bảng điều khiển';
    if (path.startsWith('/roadmap')) return 'Lộ trình học';
    if (path.startsWith('/question-types')) return 'Dạng bài chi tiết';
    if (path.startsWith('/practice')) return 'Luyện tập';
    if (path.startsWith('/mistakes')) return 'Sổ lỗi sai';
    if (path.startsWith('/exam')) return 'Thi thử vào 10';
    return 'Bảng điều khiển';
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row font-sans transition-colors duration-200">

      {/* 📱 Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm">
            10
          </div>
          <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            ÔN THI VÀO 10
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-secondary text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg bg-secondary text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* 🚪 Mobile Navigation Sidebar Drawer */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 🧭 Sidebar (Desktop & Mobile Panel) */}
      <aside className={`
        fixed md:sticky top-0 left-0 bottom-0 z-50 md:z-30
        w-64 bg-card border-r border-border flex flex-col h-screen
        transition-all duration-300 md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-border/50 hidden md:flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary/20">
            10
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight leading-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              DẠNG BÀI 10
            </span>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Lộ trình &amp; Luyện tập
            </span>
          </div>
        </div>

        {/* Môn Học Toggle */}
        <div className="px-4 py-5 border-b border-border/30">
          <div className="bg-secondary p-1 rounded-xl flex gap-1 border border-border/10">
            <button
              onClick={() => { setSubject('math'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${selectedSubject === 'math'
                  ? 'bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              📐 Toán học
            </button>
            <button
              onClick={() => { setSubject('english'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${selectedSubject === 'english'
                  ? 'bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              🗣️ Tiếng Anh
            </button>
          </div>
        </div>

        {/* Menu Điều Hướng */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
              (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            const isLocked = 'isLocked' in item && item.isLocked;

            return (
              <button
                key={item.path}
                onClick={() => {
                  if (isLocked) {
                    return;
                  }
                  navigate(item.path);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'bg-primary/10 text-primary border-l-4 border-primary pl-3'
                    : isLocked
                      ? 'text-muted-foreground/40 hover:bg-secondary/20 cursor-not-allowed'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }
                `}
              >
                <Icon size={18} className={isActive ? 'text-primary' : isLocked ? 'text-muted-foreground/30' : 'text-muted-foreground'} />
                <span className={isLocked ? 'line-through opacity-60' : ''}>
                  {item.label}
                </span>
                {isLocked && <Lock size={12} className="ml-auto text-muted-foreground/30" />}
                {isActive && !isLocked && <ChevronRight size={14} className="ml-auto text-primary" />}
              </button>
            );
          })}
        </nav>

        {/* Tiến Độ Thu Gọn */}
        <div className="p-4 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/10">
          <div className="text-xs font-bold text-muted-foreground mb-3 flex items-center gap-1.5">
            <TrendingUp size={14} /> TIẾN ĐỘ THỰC TẾ
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[11px] font-semibold mb-1">
                <span>📐 Toán học</span>
                <span>{mathPercent}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${mathPercent}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] font-semibold mb-1">
                <span>🗣️ Tiếng Anh</span>
                <span>{englishPercent}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${englishPercent}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Account Sidebar Section */}
        <div className="p-4 border-t border-border/50 bg-slate-50/20 dark:bg-slate-900/5">
          {user ? (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="text-xs font-black text-primary">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-extrabold truncate text-foreground leading-none">{user.displayName || 'Học sinh'}</span>
                <span className="text-[9px] text-muted-foreground font-semibold truncate leading-none mt-1">{user.email}</span>
                <button
                  onClick={() => { logout(); setIsSidebarOpen(false); navigate('/auth'); }}
                  className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-2 self-start cursor-pointer"
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs text-muted-foreground font-bold shrink-0">
                  K
                </div>
                <span className="text-[11px] font-bold text-muted-foreground">Chế độ Guest</span>
              </div>
              <button
                onClick={() => { navigate('/auth'); setIsSidebarOpen(false); }}
                className="text-[10px] font-bold text-primary hover:underline cursor-pointer bg-primary/5 px-2.5 py-1.5 rounded-lg border border-primary/10"
              >
                Đăng nhập
              </button>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle & Footer */}
        <div className="p-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span>Version MVP V2</span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-secondary text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Đổi giao diện Sáng/Tối"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </aside>

      {/* 🖥️ Main Workspace (Content Area) */}
      <main className="flex-1 flex flex-col min-h-screen md:max-h-screen md:overflow-y-auto bg-background">

        {/* 💻 Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-card border-b border-border shadow-sm sticky top-0 z-20">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-foreground capitalize">
              {getHeaderTitle()}
            </h1>
            <p className="text-xs text-muted-foreground font-semibold">
              Môn đang chọn: {selectedSubject === 'math' ? '📐 Toán học lớp 9' : '🗣️ Tiếng Anh ôn thi vào 10'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Stats */}
            <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-xl border border-border/10">
              <span className="text-xs font-bold text-muted-foreground">Mastery:</span>
              <span className="text-xs font-extrabold text-primary">
                {selectedSubject === 'math' ? `${mathCompleted}/6 dạng` : `${englishCompleted}/5 dạng`}
              </span>
            </div>

            {/* Account Status */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-border/50">
              {user ? (
                <>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <span className="text-xs font-black text-primary">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold leading-none">{user.displayName || 'Học sinh'}</span>
                    <button
                      onClick={() => { logout(); navigate('/auth'); }}
                      className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-1.5 self-start cursor-pointer"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-border/20 shrink-0">
                    <span className="text-xs font-bold text-muted-foreground">K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-none">Khách (Guest)</span>
                    <button
                      onClick={() => navigate('/auth')}
                      className="text-[9px] text-primary font-extrabold hover:underline leading-none mt-1.5 self-start cursor-pointer"
                    >
                      Đăng nhập / Đăng ký
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* ⚡ Content Wrapper */}
        <div className="flex-1 p-4 md:p-8 animate-fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default AppLayout;
