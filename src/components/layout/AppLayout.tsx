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
  Users,
  Sparkles
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { teacherAccessService } from '../../services/teacherAccessService';
import { cn } from '../../utils/cn';
import { getQuestionTypes } from '../../data';

export const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedSubject,
    setSubject,
    selectedGrade,
    setGrade,
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
    {
      path: '/exam',
      label: selectedGrade === 'grade9' ? 'Thi thử vào 10' : 'Thi thử & Kiểm tra',
      icon: Award
    }
  ];

  // Tính toán nhanh tiến độ tổng quát
  const currentUserId = user.uid;
  const progress = storageService.getProgress(currentUserId);
  const mathQuestionTypes = getQuestionTypes(selectedGrade, 'math');
  const englishQuestionTypes = getQuestionTypes(selectedGrade, 'english');
  const mathCompleted = progress.completedLessons.filter(id => id.startsWith('math')).length;
  const englishCompleted = progress.completedLessons.filter(id => id.startsWith('eng')).length;

  const canShowTeacherMenu = isTeacher || teacherAccessService.isBootstrapTeacher(user);

  const getHeaderTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Bảng điều khiển';
    if (path.startsWith('/roadmap')) return 'Lộ trình học';
    if (path.startsWith('/question-types')) return 'Dạng bài chi tiết';
    if (path.startsWith('/practice')) return 'Luyện tập';
    if (path.startsWith('/ai-tutor')) return 'Gia sư AI Socratic';
    if (path.startsWith('/mistakes')) return 'Sổ lỗi sai';
    if (path.startsWith('/exam')) return selectedGrade === 'grade9' ? 'Thi thử vào 10' : 'Thi thử & Kiểm tra';
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
            {selectedGrade === 'grade9' ? 'ÔN THI VÀO 10' : 'HỌC TỐT LỚP 10'}
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

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 left-0 bottom-0 z-50 md:z-30
        glass flex flex-col h-screen overflow-y-auto
        transition-all duration-300 md:translate-x-0
        ${isSidebarCollapsed ? 'w-64 md:w-22' : 'w-64 md:w-68'}
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className={cn(
          "p-6 border-b border-border/40 hidden md:flex items-center gap-3.5 cursor-pointer group",
          isSidebarCollapsed && "justify-center p-5"
        )} onClick={() => navigate('/dashboard')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/30 shrink-0 group-hover:scale-105 transition-transform duration-300 animate-float">
            10
          </div>
          {!isSidebarCollapsed && (
            <div className="flex flex-col animate-fade-in">
              <span className="font-black text-base tracking-tight leading-none bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                DẠNG BÀI 10
              </span>
              <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-1.5">
                LỘ TRÌNH THỰC CHIẾN
              </span>
            </div>
          )}
        </div>

        <div className={cn("px-4 pt-5 border-b border-border/20 md:hidden", isSidebarCollapsed && "px-2.5 pt-3")}>
          <div className={cn(
            "bg-secondary/50 backdrop-blur-sm p-1 rounded-2xl flex border border-border/10 shadow-inner",
            isSidebarCollapsed ? "flex-col gap-1.5 p-1" : "flex-row gap-1"
          )}>
            <button
              onClick={() => { setGrade('grade9'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-[10px] font-black rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95",
                isSidebarCollapsed ? "w-full aspect-square text-sm" : "flex-1",
                selectedGrade === 'grade9'
                  ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              )}
            >
              {isSidebarCollapsed ? '9️⃣' : '9️⃣ Ôn vào 10'}
            </button>
            <button
              onClick={() => { setGrade('grade10'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-[10px] font-black rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95",
                isSidebarCollapsed ? "w-full aspect-square text-sm" : "flex-1",
                selectedGrade === 'grade10'
                  ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              )}
            >
              {isSidebarCollapsed ? '🔟' : '🔟 Lớp 10'}
            </button>
          </div>
        </div>

        <div className={cn("px-4 py-5 border-b border-border/20 md:hidden", isSidebarCollapsed && "px-2.5 py-4")}>
          <div className={cn(
            "bg-secondary/50 backdrop-blur-sm p-1 rounded-2xl flex border border-border/10 shadow-inner",
            isSidebarCollapsed ? "flex-col gap-1.5 p-1" : "flex-row gap-1"
          )}>
            <button
              onClick={() => { setSubject('math'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-xs font-black rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95",
                isSidebarCollapsed ? "w-full aspect-square text-base" : "flex-1",
                selectedSubject === 'math'
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              )}
            >
              {isSidebarCollapsed ? '📐' : '📐 Toán học'}
            </button>
            <button
              onClick={() => { setSubject('english'); setIsSidebarOpen(false); navigate('/roadmap'); }}
              className={cn(
                "py-2 text-xs font-black rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95",
                isSidebarCollapsed ? "w-full aspect-square text-base" : "flex-1",
                selectedSubject === 'english'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              )}
            >
              {isSidebarCollapsed ? '🗣️' : '🗣️ Tiếng Anh'}
            </button>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1.5">
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
                  "w-full flex items-center gap-3.5 px-4.5 py-3 rounded-2xl text-sm font-extrabold transition-all duration-300 cursor-pointer active:scale-98",
                  isSidebarCollapsed && "justify-center px-2 py-3.5 gap-0",
                  isActive
                    ? 'bg-gradient-to-r from-primary/12 to-primary/3 text-primary border-l-4 border-primary pl-3.5 shadow-sm shadow-primary/5'
                    : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground hover:translate-x-1.5'
                )}
                title={isSidebarCollapsed ? item.label : undefined}
              >
                <Icon size={19} className={cn("shrink-0", isActive ? 'text-primary' : 'text-muted-foreground')} />
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
            <div className={cn("pt-4 border-t border-border/20 mt-4", isSidebarCollapsed && "pt-3 border-t border-border/10 mt-3")}>
              <button
                onClick={() => {
                  navigate('/teacher');
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3.5 px-4.5 py-3 rounded-2xl text-sm font-black transition-all duration-300 cursor-pointer border border-dashed relative active:scale-98",
                  isSidebarCollapsed && "justify-center px-2 py-3.5 gap-0",
                  location.pathname === '/teacher'
                    ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/40 dark:text-emerald-400"
                    : "text-emerald-600 hover:bg-emerald-500/5 hover:text-emerald-700 hover:translate-x-1.5 border-emerald-500/20 dark:text-emerald-400"
                )}
                title={isSidebarCollapsed ? "Góc Giáo viên 👩‍🏫" : undefined}
              >
                <Users size={19} className="text-emerald-500 animate-pulse shrink-0" />
                {!isSidebarCollapsed && <span>Góc Giáo viên 👩‍🏫</span>}
                {realPendingCount > 0 && (
                  <span className={cn(
                    "bg-rose-500 text-white font-black text-[9px] rounded-full flex items-center justify-center animate-bounce shrink-0",
                    isSidebarCollapsed
                      ? "absolute top-1 right-1.5 w-4 h-4 text-[8px]"
                      : "ml-auto w-5 h-5 shadow-md shadow-rose-500/20"
                  )}>
                    {realPendingCount}
                  </span>
                )}
              </button>
            </div>
          )}
        </nav>

        {!isPremium && !isSidebarCollapsed && (
          <div className="mx-4 my-3.5 p-4.5 rounded-2xl glass-premium text-center shrink-0 border border-amber-500/25 shadow-md shadow-amber-500/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-12 h-12 bg-amber-400/20 rounded-full blur-xl -mr-3 -mt-3 group-hover:scale-125 transition-transform duration-500" />
            <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 block mb-1 tracking-wider uppercase flex items-center justify-center gap-1">
              👑 NÂNG CẤP PREMIUM
            </span>
            <p className="text-[9px] text-amber-700/80 dark:text-amber-300/80 font-bold mb-3">Mở khóa Gia sư AI & Chặng 3</p>
            <button
              onClick={() => { setIsSidebarOpen(false); navigate('/premium'); }}
              className="w-full py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-[11px] rounded-xl shadow-md hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 transition-all cursor-pointer animate-pulse-glow"
            >
              Kích hoạt ngay
            </button>
          </div>
        )}

        <div className={cn("p-4 border-t border-border/20 bg-slate-50/20 dark:bg-slate-900/5", isSidebarCollapsed && "p-3")}>
          <div className={cn("flex items-center gap-3", isSidebarCollapsed && "flex-col gap-1.5 justify-center")}>
            <div
              className={cn(
                "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95",
                isPremium ? "border-amber-400/60 shadow-md shadow-amber-400/10" : "border-primary/20"
              )}
              title={`${user.displayName || 'Học sinh'} (${user.email})`}
              onClick={() => {
                if (isSidebarCollapsed && window.confirm("Đăng xuất tài khoản?")) {
                  logout();
                  navigate('/auth');
                }
              }}
            >
              <span className={cn("text-xs font-black", isPremium ? "text-amber-500" : "text-primary")}>
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            {!isSidebarCollapsed ? (
              <div className="flex flex-col min-w-0 flex-1 text-left">
                <span className="text-xs font-extrabold truncate text-foreground leading-none flex items-center gap-1.5">
                  {user.displayName || 'Học sinh'}
                  {isPremium && (
                    <span className="px-1.5 py-0.5 text-[7px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md font-black tracking-widest shrink-0 leading-none">PRO</span>
                  )}
                </span>
                <span className="text-[9px] text-muted-foreground font-semibold truncate leading-none mt-2">{user.email}</span>
                <button
                  onClick={() => { logout(); setIsSidebarOpen(false); navigate('/auth'); }}
                  className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-2.5 self-start cursor-pointer active:scale-95"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <button
                onClick={() => { logout(); navigate('/auth'); }}
                className="text-[9px] text-rose-500 font-black hover:underline cursor-pointer active:scale-95 mt-1"
                title="Đăng xuất"
              >
                Thoát
              </button>
            )}
          </div>
        </div>

        <div className={cn(
          "p-4 border-t border-border/20 flex items-center justify-center text-[10px] text-muted-foreground font-bold tracking-wider",
          isSidebarCollapsed && "p-2"
        )}>
          {!isSidebarCollapsed ? <span>VERSION PRO MAX V2</span> : <span>PRO</span>}
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-h-screen md:max-h-screen md:overflow-y-auto bg-background">

        <header className="hidden md:flex items-center justify-between px-8 py-4.5 bg-card/60 backdrop-blur-lg border-b border-border/30 shadow-sm sticky top-0 z-20">
          <div className="flex items-center gap-4.5">
            <button
              onClick={toggleSidebarCollapse}
              className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground border border-border/20 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer hidden md:flex items-center justify-center shrink-0 active:scale-95"
              title={isSidebarCollapsed ? "Mở rộng menu" : "Thu gọn menu"}
            >
              {isSidebarCollapsed ? <Menu size={18} /> : <X size={18} />}
            </button>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h1 className="text-xl font-black tracking-tight text-foreground capitalize leading-tight shrink-0">
                {getHeaderTitle()}
              </h1>
              
              <div className="hidden md:flex items-center gap-2 bg-secondary/35 backdrop-blur-sm p-1 rounded-2xl border border-border/20 shadow-inner">
                <div className="flex gap-0.5">
                  <button
                    onClick={() => { setGrade('grade9'); navigate('/roadmap'); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black rounded-xl transition-all duration-200 cursor-pointer active:scale-95",
                      selectedGrade === 'grade9'
                        ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                    )}
                  >
                    Lớp 9 Ôn vào 10
                  </button>
                  <button
                    onClick={() => { setGrade('grade10'); navigate('/roadmap'); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black rounded-xl transition-all duration-200 cursor-pointer active:scale-95",
                      selectedGrade === 'grade10'
                        ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                    )}
                  >
                    Lớp 10
                  </button>
                </div>
                <div className="h-4 w-px bg-border/20 mx-1" />
                <div className="flex gap-0.5">
                  <button
                    onClick={() => { setSubject('math'); navigate('/roadmap'); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black rounded-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1",
                      selectedSubject === 'math'
                        ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                    )}
                  >
                    📐 Toán học
                  </button>
                  <button
                    onClick={() => { setSubject('english'); navigate('/roadmap'); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black rounded-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1",
                      selectedSubject === 'english'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                    )}
                  >
                    🗣️ Tiếng Anh
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4.5">
            <div className="flex items-center gap-1.5 bg-secondary/40 backdrop-blur-sm px-3.5 py-2 rounded-2xl border border-border/20 shadow-sm">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Mastery:</span>
              <span className="text-xs font-black text-primary bg-primary/8 px-2 py-0.5 rounded-lg border border-primary/10">
                {selectedSubject === 'math'
                  ? `${mathCompleted}/${mathQuestionTypes.length} dạng`
                  : `${englishCompleted}/${englishQuestionTypes.length} dạng`}
              </span>
            </div>

            {!isPremium && (
              <button
                onClick={() => navigate('/premium')}
                className="px-3.5 py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer flex items-center gap-1 shrink-0 animate-pulse-glow"
              >
                👑 Lên Premium
              </button>
            )}

            <div className="flex items-center gap-3 pl-3.5 border-l border-border/20">
              <div className={cn(
                "w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center border shrink-0",
                isPremium ? "border-amber-400/60 shadow-md shadow-amber-400/5" : "border-primary/10"
              )}>
                <span className={cn("text-xs font-black", isPremium ? "text-amber-500" : "text-primary")}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold leading-none flex items-center gap-1.5">
                  {user.displayName || 'Học sinh'}
                  {isPremium && (
                    <span className="px-1.5 py-0.5 text-[7px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md font-black tracking-widest shrink-0 leading-none">PRO</span>
                  )}
                </span>
                <button
                  onClick={() => { logout(); navigate('/auth'); }}
                  className="text-[9px] text-rose-500 font-extrabold hover:underline leading-none mt-2 self-start cursor-pointer active:scale-95"
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ⚡ Content Wrapper */}
        <div className={cn(
          "flex-1 animate-fade-in",
          location.pathname.startsWith('/ai-tutor') ? "p-2 md:p-3" : "p-4 md:p-8"
        )}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default AppLayout;
