import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import {
  BookOpen,
  Map,
  Bookmark,
  GraduationCap,
  Award,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Users,
  Sparkles
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { teacherAccessService } from '../../services/teacherAccessService';
import { cn } from '../../utils/cn';
import { mathQuestionTypes } from '../../data/mathData';
import { englishQuestionTypes } from '../../data/englishData';

export const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedSubject,
    setSubject,
    user,
    logout,
    progressVersion,
    isPremium
  } = useAppStore();
  void progressVersion;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    return localStorage.getItem('otv10_sidebar_collapsed') === 'true';
  });
  const [isTeacher, setIsTeacher] = useState(false);
  const [realPendingCount, setRealPendingCount] = useState(0);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('otv10_sidebar_collapsed', String(next));
      return next;
    });
  };

  // Tự động đảm bảo thông tin hồ sơ của học sinh tồn tại trong Firestore collection 'users'
  useEffect(() => {
    if (user) {
      progressService.saveUserProfile(user);
    }
  }, [user]);

  useEffect(() => {
    let cancelled = false;
    setIsTeacher(false);
    setRealPendingCount(0);

    if (!user) {
      return () => {
        cancelled = true;
      };
    }

    teacherAccessService.isTeacher(user).then((allowed) => {
      if (!cancelled) {
        setIsTeacher(allowed);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Lấy số lượng bài chờ chấm thực tế trên Firestore để hiển thị Badge ở góc Giáo viên
  useEffect(() => {
    if (!user || !isTeacher) {
      setRealPendingCount(0);
      return;
    }

    const fetchRealPendingCount = async () => {
      try {
        const studentsList = await progressService.getRealStudents([user.uid]);
        const pending = await progressService.getRealPendingManualAttempts(studentsList);
        setRealPendingCount(pending.length);
      } catch (e) {
        console.error("Lỗi khi load real pending count ở sidebar:", e);
      }
    };

    fetchRealPendingCount();

    // Tự động tải lại mỗi 180 giây để báo bài mới cho Giáo viên (tiết kiệm Firestore read)
    const interval = setInterval(fetchRealPendingCount, 180000);
    return () => clearInterval(interval);
  }, [user, isTeacher]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const menuItems = [
    { path: '/dashboard', label: 'Bảng điều khiển', icon: GraduationCap },
    { path: '/roadmap', label: 'Lộ trình học', icon: Map },
    { path: '/practice', label: 'Luyện tập', icon: BookOpen },
    { path: '/ai-tutor', label: 'Gia sư AI', icon: Sparkles },
    { path: '/mistakes', label: 'Sổ lỗi sai', icon: Bookmark },
    { path: '/exam', label: 'Thi thử vào 10', icon: Award }
  ];

  // Tính toán nhanh tiến độ tổng quát
  const currentUserId = user.uid;
  const progress = storageService.getProgress(currentUserId);
  const mathCompleted = progress.completedLessons.filter(id => id.startsWith('math')).length;
  const englishCompleted = progress.completedLessons.filter(id => id.startsWith('eng')).length;

  const mathPercent = Math.round((mathCompleted / mathQuestionTypes.length) * 100);
  const englishPercent = Math.round((englishCompleted / englishQuestionTypes.length) * 100);
  const canShowTeacherMenu = isTeacher || teacherAccessService.isBootstrapTeacher(user);

  const getHeaderTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Bảng điều khiển';
    if (path.startsWith('/roadmap')) return 'Lộ trình học';
    if (path.startsWith('/question-types')) return 'Dạng bài chi tiết';
    if (path.startsWith('/practice')) return 'Luyện tập';
    if (path.startsWith('/ai-tutor')) return 'Gia sư AI Socratic';
    if (path.startsWith('/mistakes')) return 'Sổ lỗi sai';
    if (path.startsWith('/exam')) return 'Thi thử vào 10';
    if (path.startsWith('/teacher')) return 'Góc Giáo viên';
    return 'Bảng điều khiển';
  };

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-background text-foreground flex flex-col md:flex-row font-sans transition-colors duration-200">

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
        bg-card border-r border-border flex flex-col h-screen
        transition-all duration-300 md:translate-x-0
        ${isSidebarCollapsed ? 'w-64 md:w-20' : 'w-64 md:w-64'}
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className={cn(
          "p-6 border-b border-border/50 hidden md:flex items-center gap-3 cursor-pointer",
          isSidebarCollapsed && "justify-center p-4"
        )} onClick={() => navigate('/dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary/20 shrink-0">
            10
          </div>
          {!isSidebarCollapsed && (
            <div className="flex flex-col animate-fade-in">
              <span className="font-extrabold text-base tracking-tight leading-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                DẠNG BÀI 10
              </span>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                Lộ trình &amp; Luyện tập
              </span>
            </div>
          )}
        </div>

        {/* Môn Học Toggle */}
        <div className={cn("px-4 py-5 border-b border-border/30", isSidebarCollapsed && "px-2 py-4")}>
          <div className={cn(
            "bg-secondary p-1 rounded-xl flex border border-border/10",
            isSidebarCollapsed ? "flex-col gap-1.5 p-1" : "flex-row gap-1"
          )}>
            <button
              onClick={() => { setSubject('math'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center",
                isSidebarCollapsed ? "w-full aspect-square text-sm" : "flex-1",
                selectedSubject === 'math'
                  ? 'bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title={isSidebarCollapsed ? "Toán học" : undefined}
            >
              {isSidebarCollapsed ? '📐' : '📐 Toán học'}
            </button>
            <button
              onClick={() => { setSubject('english'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center",
                isSidebarCollapsed ? "w-full aspect-square text-sm" : "flex-1",
                selectedSubject === 'english'
                  ? 'bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title={isSidebarCollapsed ? "Tiếng Anh" : undefined}
            >
              {isSidebarCollapsed ? '🗣️' : '🗣️ Tiếng Anh'}
            </button>
          </div>
        </div>

        {/* Menu Điều Hướng */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path ||
              (item.path !== '/dashboard' && location.pathname.startsWith(item.path));

            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                  isSidebarCollapsed && "justify-center px-2 py-3 gap-0",
                  isActive
                    ? 'bg-primary/10 text-primary border-l-4 border-primary pl-3'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
                title={isSidebarCollapsed ? item.label : undefined}
              >
                <Icon size={18} className={cn("shrink-0", isActive ? 'text-primary' : 'text-muted-foreground')} />
                {!isSidebarCollapsed && (
                  <span>
                    {item.label}
                  </span>
                )}
                {!isSidebarCollapsed && isActive && <ChevronRight size={14} className="ml-auto text-primary" />}
              </button>
            );
          })}

          {canShowTeacherMenu && (
            <div className={cn("pt-3 border-t border-border/20 mt-3", isSidebarCollapsed && "pt-2 border-t border-border/10 mt-2")}>
              <button
                onClick={() => {
                  navigate('/teacher');
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-extrabold transition-all duration-200 cursor-pointer border border-dashed relative",
                  isSidebarCollapsed && "justify-center px-2 py-3 gap-0",
                  location.pathname === '/teacher'
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/40 dark:text-emerald-400"
                    : "text-emerald-600 hover:bg-emerald-500/5 hover:text-emerald-700 border-emerald-500/20 dark:text-emerald-400"
                )}
                title={isSidebarCollapsed ? "Góc Giáo viên 👩‍🏫" : undefined}
              >
                <Users size={18} className="text-emerald-500 animate-pulse shrink-0" />
                {!isSidebarCollapsed && <span>Góc Giáo viên 👩‍🏫</span>}
                {realPendingCount > 0 && (
                  <span className={cn(
                    "bg-rose-500 text-white font-black text-[9px] rounded-full flex items-center justify-center animate-bounce shrink-0",
                    isSidebarCollapsed
                      ? "absolute top-1 right-1.5 w-3.5 h-3.5 text-[8px]"
                      : "ml-auto w-4.5 h-4.5"
                  )}>
                    {realPendingCount}
                  </span>
                )}
              </button>
            </div>
          )}
        </nav>

        {/* Tiến Độ Thu Gọn */}
        {!isSidebarCollapsed && (
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
        )}

        {/* Nâng cấp Premium Banner */}
        {!isPremium && !isSidebarCollapsed && (
          <div className="mx-4 my-3 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center animate-pulse shrink-0">
            <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 block mb-1.5">⚡ AI &amp; CHẶNG 3 BỊ GIỚI HẠN</span>
            <button
              onClick={() => { setIsSidebarOpen(false); navigate('/premium'); }}
              className="w-full py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-[11px] rounded-lg shadow-md transition-all cursor-pointer"
            >
              Nâng cấp Premium
            </button>
          </div>
        )}

        {/* Account Sidebar Section */}
        <div className={cn("p-4 border-t border-border/50 bg-slate-50/20 dark:bg-slate-900/5", isSidebarCollapsed && "p-2.5")}>
          <div className={cn("flex items-center gap-2.5", isSidebarCollapsed && "flex-col gap-1 justify-center")}>
            <div
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 cursor-pointer"
              title={`${user.displayName || 'Học sinh'} (${user.email})`}
              onClick={() => {
                if (isSidebarCollapsed && window.confirm("Đăng xuất tài khoản?")) {
                  logout();
                  navigate('/auth');
                }
              }}
            >
              <span className="text-xs font-black text-primary">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            {!isSidebarCollapsed ? (
              <div className="flex flex-col min-w-0 flex-1 text-left">
                <span className="text-xs font-extrabold truncate text-foreground leading-none flex items-center gap-1">
                  {user.displayName || 'Học sinh'}
                  {isPremium && (
                    <span className="px-1 py-0.5 text-[7px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded font-black tracking-widest shrink-0 leading-none">PRO</span>
                  )}
                </span>
                <span className="text-[9px] text-muted-foreground font-semibold truncate leading-none mt-1.5">{user.email}</span>
                <button
                  onClick={() => { logout(); setIsSidebarOpen(false); navigate('/auth'); }}
                  className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-2 self-start cursor-pointer"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <button
                onClick={() => { logout(); navigate('/auth'); }}
                className="text-[9px] text-rose-500 font-extrabold hover:underline cursor-pointer"
                title="Đăng xuất"
              >
                Thoát
              </button>
            )}
          </div>
        </div>

        {/* Dark Mode Toggle & Footer */}
        <div className={cn(
          "p-4 border-t border-border/50 flex items-center justify-center text-xs text-muted-foreground font-semibold",
          isSidebarCollapsed && "p-2"
        )}>
          {!isSidebarCollapsed ? <span>Version MVP V2</span> : <span>V2</span>}
        </div>
      </aside>

      {/* 🖥️ Main Workspace (Content Area) */}
      <main className="flex-1 flex flex-col min-h-screen md:max-h-screen md:overflow-y-auto bg-background">

        {/* 💻 Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-card border-b border-border shadow-sm sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebarCollapse}
              className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-foreground border border-border/30 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer hidden md:flex items-center justify-center shrink-0"
              title={isSidebarCollapsed ? "Mở rộng menu" : "Thu gọn menu"}
            >
              {isSidebarCollapsed ? <Menu size={18} /> : <X size={18} />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-foreground capitalize leading-tight">
                {getHeaderTitle()}
              </h1>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                Môn đang chọn: {selectedSubject === 'math' ? '📐 Toán học lớp 9' : '🗣️ Tiếng Anh ôn thi vào 10'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Stats */}
            <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-xl border border-border/10">
              <span className="text-xs font-bold text-muted-foreground">Mastery:</span>
              <span className="text-xs font-extrabold text-primary">
                {selectedSubject === 'math'
                  ? `${mathCompleted}/${mathQuestionTypes.length} dạng`
                  : `${englishCompleted}/${englishQuestionTypes.length} dạng`}
              </span>
            </div>

            {/* Account Status */}
            {!isPremium && (
              <button
                onClick={() => navigate('/premium')}
                className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-xl shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1 shrink-0 scale-95"
              >
                👑 Lên Premium
              </button>
            )}

            <div className="flex items-center gap-2.5 pl-2 border-l border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="text-xs font-black text-primary">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold leading-none flex items-center gap-1">
                  {user.displayName || 'Học sinh'}
                  {isPremium && (
                    <span className="px-1 py-0.5 text-[7px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded font-black tracking-widest shrink-0 leading-none">PRO</span>
                  )}
                </span>
                <button
                  onClick={() => { logout(); navigate('/auth'); }}
                  className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-1.5 self-start cursor-pointer"
                >
                  Đăng xuất
                </button>
              </div>
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
