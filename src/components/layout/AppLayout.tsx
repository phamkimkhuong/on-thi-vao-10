import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
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
  ChevronDown,
  Check,
  Lock,
  Users,
  Sparkles,
  LifeBuoy
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { progressService } from '../../services/progressService';
import { teacherAccessService } from '../../services/teacherAccessService';
import { cn } from '../../utils/cn';
import { getQuestionTypes } from '../../data';
import { getSubjectName, getSubjectIcon, getSubjectFromQuestionTypeId } from '../../utils/subject';

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
  const [isContextDropdownOpen, setIsContextDropdownOpen] = useState(false);

  const getActiveContextLabel = () => {
    const gradeLabel = selectedGrade === 'grade9' ? 'Lớp 9' : 'Lớp 10';
    const subjectLabel = getSubjectName(selectedSubject);
    const icon = getSubjectIcon(selectedSubject);
    return `${icon} ${subjectLabel} - ${gradeLabel}`;
  };

  const handleContextChange = (grade: any, subject: any) => {
    setGrade(grade);
    setSubject(subject);
    setIsContextDropdownOpen(false);

    const path = location.pathname;
    const stayPaths = ['/dashboard', '/roadmap', '/practice', '/ai-tutor', '/mistakes', '/exam'];
    
    if (!stayPaths.includes(path)) {
      navigate('/roadmap');
    }
  };

  const courseGroups = [
    {
      grade: 'grade9',
      gradeTitle: 'Lớp 9 Ôn vào 10',
      courses: [
        { code: 'math', name: 'Toán học', icon: '📐', isLocked: false },
        { code: 'english', name: 'Tiếng Anh', icon: '🗣️', isLocked: false },
      ]
    },
    {
      grade: 'grade10',
      gradeTitle: 'Lớp 10',
      courses: [
        { code: 'math', name: 'Toán học', icon: '📐', isLocked: false },
        { code: 'english', name: 'Tiếng Anh', icon: '🗣️', isLocked: false },
        { code: 'chemistry', name: 'Hóa học', icon: '⚗️', isLocked: false },
      ]
    },
    {
      grade: 'future',
      gradeTitle: 'Lớp 11 & 12 (Sắp ra mắt)',
      courses: [
        { code: 'physics', name: 'Vật lý', icon: '🧪', isLocked: true },
        { code: 'biology', name: 'Sinh học', icon: '🧬', isLocked: true },
      ]
    }
  ];

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

  // Cập nhật tiêu đề động (Dynamic Title SEO)
  useEffect(() => {
    const path = location.pathname;
    const brandName = 'Dạng Bài Thực Chiến';
    
    if (path.startsWith('/teacher')) {
      document.title = `Góc Giáo Viên | ${brandName}`;
      return;
    }
    if (path.startsWith('/premium')) {
      document.title = `Nâng cấp Premium | ${brandName}`;
      return;
    }
    if (path.startsWith('/support')) {
      document.title = `Hỗ Trợ & Góp Ý | ${brandName}`;
      return;
    }
    if (path.startsWith('/mistakes')) {
      document.title = `Sổ Tay Sửa Lỗi Sai | ${brandName}`;
      return;
    }
    if (path.startsWith('/exam')) {
      const gradeLabel = selectedGrade === 'grade9' ? 'Lớp 9' : selectedGrade === 'grade10' ? 'Lớp 10' : '9 - 12';
      document.title = `Thi Thử & Kiểm Tra ${gradeLabel} | ${brandName}`;
      return;
    }
    if (path.startsWith('/ai-tutor')) {
      document.title = `Gia Sư AI Socratic | ${brandName}`;
      return;
    }
    
    // Theo môn và lớp
    const subjectLabel = selectedSubject === 'math' ? 'Toán Học' : selectedSubject === 'english' ? 'Tiếng Anh' : selectedSubject === 'chemistry' ? 'Hóa Học' : '';
    const gradeLabel = selectedGrade === 'grade9' ? 'Lớp 9' : selectedGrade === 'grade10' ? 'Lớp 10' : '9-12';
    
    if (selectedGrade === 'grade9' && selectedSubject === 'english') {
      document.title = `Luyện Thi Vào 10 Môn Tiếng Anh | ${brandName}`;
    } else if (selectedGrade === 'grade9' && selectedSubject === 'math') {
      document.title = `Luyện Thi Vào 10 Môn Toán | ${brandName}`;
    } else if (subjectLabel) {
      document.title = `Học Tốt ${subjectLabel} ${gradeLabel} | ${brandName}`;
    } else {
      document.title = `${brandName} | Web Học Tốt & Luyện Thi Lớp 9 - 12`;
    }
  }, [selectedGrade, selectedSubject, location.pathname]);

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
    },
    {
      path: '/support',
      label: 'Hỗ trợ & Góp ý',
      icon: LifeBuoy
    }
  ];

  // Tính toán nhanh tiến độ tổng quát
  const currentUserId = user?.uid || 'guest';
  const progress = storageService.getProgress(currentUserId);
  const currentQuestionTypes = getQuestionTypes(selectedGrade, selectedSubject);
  const currentCompletedCount = progress.completedLessons.filter(id => getSubjectFromQuestionTypeId(id) === selectedSubject).length;

  const canShowTeacherMenu = user ? (isTeacher || teacherAccessService.isBootstrapTeacher(user)) : false;

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
    if (path.startsWith('/support')) return 'Hỗ trợ & Góp ý';
    return 'Bảng điều khiển';
  };

  return (
    <div className="min-h-screen md:min-h-0 md:h-screen md:overflow-hidden bg-background text-foreground flex flex-col md:flex-row font-sans transition-colors duration-200">

      {/* 📱 Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm">
            10
          </div>
          <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            {selectedGrade === 'grade9' ? 'ÔN THI VÀO 10' : selectedGrade === 'grade10' ? 'HỌC TỐT LỚP 10' : 'HỌC TỐT 9 - 12'}
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
              <span className="font-black text-xs tracking-tight leading-none bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                DẠNG BÀI THỰC CHIẾN
              </span>
              <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-1.5">
                LỘ TRÌNH 9 - 12
              </span>
            </div>
          )}
        </div>

        <div className={cn("px-4 py-3.5 border-b border-border/20 md:hidden", isSidebarCollapsed && "px-2.5 py-3")}>
          <div className="relative">
            <button
              onClick={() => setIsContextDropdownOpen(!isContextDropdownOpen)}
              className="w-full px-4 py-2.5 text-xs font-black rounded-2xl bg-secondary/50 border border-border/30 text-foreground transition-all flex items-center justify-between cursor-pointer shadow-sm active:scale-95"
            >
              <span className="truncate">{getActiveContextLabel()}</span>
              <ChevronDown size={14} className={cn("transition-transform duration-200 shrink-0 ml-1.5", isContextDropdownOpen && "rotate-180")} />
            </button>

            {isContextDropdownOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setIsContextDropdownOpen(false)} />
                <div className="absolute left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/40 rounded-3xl shadow-xl p-3 space-y-3 z-40 max-h-[300px] overflow-y-auto">
                  {courseGroups.map((group) => (
                    <div key={group.grade} className="space-y-1.5">
                      <span className="text-[9px] text-muted-foreground font-black uppercase tracking-wider px-2 block">
                        {group.gradeTitle}
                      </span>
                      <div className="space-y-0.5">
                        {group.courses.map((course) => {
                          const isActive = !course.isLocked && selectedGrade === group.grade && selectedSubject === course.code;
                          return (
                            <button
                              key={course.code}
                              disabled={course.isLocked}
                              onClick={() => {
                                if (course.isLocked) return;
                                handleContextChange(group.grade, course.code);
                              }}
                              className={cn(
                                "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-extrabold transition-all cursor-pointer relative",
                                course.isLocked
                                  ? "text-muted-foreground/50 cursor-not-allowed opacity-60"
                                  : isActive
                                    ? "bg-primary/10 text-primary font-black border-l-4 border-primary pl-2 shadow-inner"
                                    : "text-foreground hover:bg-secondary/60"
                              )}
                            >
                              <span className="shrink-0">{course.icon}</span>
                              <span className="flex-1 truncate">{course.name}</span>
                              {isActive && <Check size={14} className="text-primary absolute right-3" />}
                              {course.isLocked && <Lock size={10} className="text-muted-foreground/40 absolute right-3" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
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
            {user ? (
              <>
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
              </>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-[11px] py-2 px-3 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-1.5"
              >
                🔑 Đăng nhập
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

      <main className="flex-1 flex flex-col min-h-screen md:min-h-0 md:max-h-screen md:overflow-y-auto bg-background">

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
              <div className="relative">
                <button
                  onClick={() => setIsContextDropdownOpen(!isContextDropdownOpen)}
                  className="px-3.5 py-1.5 text-xs font-black rounded-2xl bg-secondary/50 hover:bg-secondary border border-border/40 hover:border-primary/30 text-foreground transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                >
                  <span>{getActiveContextLabel()}</span>
                  <ChevronDown size={14} className={cn("transition-transform duration-200 shrink-0", isContextDropdownOpen && "rotate-180")} />
                </button>

                {isContextDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setIsContextDropdownOpen(false)} />
                    <div className="absolute left-0 mt-2 w-64 bg-card/95 backdrop-blur-xl border border-border/40 rounded-3xl shadow-xl p-3 space-y-3.5 z-40 animate-fade-in">
                      {courseGroups.map((group) => (
                        <div key={group.grade} className="space-y-1.5">
                          <span className="text-[9px] text-muted-foreground font-black uppercase tracking-wider px-2 block">
                            {group.gradeTitle}
                          </span>
                          <div className="space-y-0.5">
                            {group.courses.map((course) => {
                              const isActive = !course.isLocked && selectedGrade === group.grade && selectedSubject === course.code;
                              return (
                                <button
                                  key={course.code}
                                  disabled={course.isLocked}
                                  onClick={() => {
                                    if (course.isLocked) return;
                                    handleContextChange(group.grade, course.code);
                                  }}
                                  className={cn(
                                    "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-extrabold transition-all cursor-pointer relative",
                                    course.isLocked
                                      ? "text-muted-foreground/50 cursor-not-allowed opacity-60"
                                      : isActive
                                        ? "bg-primary/10 text-primary font-black border-l-4 border-primary pl-2 shadow-inner"
                                        : "text-foreground hover:bg-secondary/60 hover:translate-x-1"
                                  )}
                                >
                                  <span className="shrink-0">{course.icon}</span>
                                  <span className="flex-1 truncate">{course.name}</span>
                                  {isActive && <Check size={14} className="text-primary absolute right-3" />}
                                  {course.isLocked && <Lock size={10} className="text-muted-foreground/40 absolute right-3" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
          </div>
        </div>

        <div className="flex items-center gap-4.5">
            <div className="flex items-center gap-1.5 bg-secondary/40 backdrop-blur-sm px-3.5 py-2 rounded-2xl border border-border/20 shadow-sm">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Mastery:</span>
              <span className="text-xs font-black text-primary bg-primary/8 px-2 py-0.5 rounded-lg border border-primary/10">
                {`${currentCompletedCount}/${currentQuestionTypes.length} dạng`}
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
