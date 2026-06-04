import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { progressService } from '../../services/progressService';
import { teacherAccessService } from '../../services/teacherAccessService';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../data/englishData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { SimulatedStudent, UserAttempt, UserProgress } from '../../types';
import {
  Users,
  GraduationCap,
  CheckCircle,
  XCircle,
  BookOpen,
  Award,
  Star,
  Activity,
  UserCheck,
  Loader
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getStarsFromScore } from '../../utils/theme';

export interface PendingGroup {
  id: string;
  student: SimulatedStudent;
  questionTypeId: string;
  selectedSubTense?: string;
  attempts: UserAttempt[];
}

const getSubTenseName = (subId: string): string => {
  switch (subId) {
    case 'present_simple': return 'Thì Hiện tại đơn';
    case 'past_simple': return 'Thì Quá khứ đơn';
    case 'present_continuous': return 'Thì Hiện tại tiếp diễn';
    case 'past_continuous': return 'Thì Quá khứ tiếp diễn';
    case 'all': return 'Tổng ôn thông minh';
    default: return '';
  }
};

const detectSubTense = (attempt: UserAttempt): string => {
  if (attempt.selectedSubTense) return attempt.selectedSubTense;
  if (attempt.questionTypeId !== 'eng-qt6') return '';
  const num = parseInt(attempt.questionId.replace('eng-q', ''), 10);
  if (isNaN(num)) return '';
  if ((num >= 5 && num <= 24) || (num >= 102 && num <= 121)) {
    return 'present_simple';
  } else if ((num >= 25 && num <= 44) || (num >= 122 && num <= 141)) {
    return 'past_simple';
  } else if ((num >= 45 && num <= 64) || (num >= 142 && num <= 161)) {
    return 'present_continuous';
  } else if ((num >= 65 && num <= 84) || (num >= 162 && num <= 181)) {
    return 'past_continuous';
  }
  return '';
};

const getQuestionSubTenseName = (questionId: string): string => {
  if (!questionId.startsWith('eng-q')) return '';
  const num = parseInt(questionId.replace('eng-q', ''), 10);
  if (isNaN(num)) return '';
  
  if ((num >= 5 && num <= 24) || (num >= 102 && num <= 121)) {
    return 'Thì Hiện tại đơn';
  } else if ((num >= 25 && num <= 44) || (num >= 122 && num <= 141)) {
    return 'Thì Quá khứ đơn';
  } else if ((num >= 45 && num <= 64) || (num >= 142 && num <= 161)) {
    return 'Thì Hiện tại tiếp diễn';
  } else if ((num >= 65 && num <= 84) || (num >= 162 && num <= 181)) {
    return 'Thì Quá khứ tiếp diễn';
  }
  return '';
};

export const TeacherDashboard: React.FC = () => {
  const { user } = useAppStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'students' | 'grading'>('students');
  const [students, setStudents] = useState<SimulatedStudent[]>([]);
  const [pendingAttempts, setPendingAttempts] = useState<Array<{ student: SimulatedStudent; attempt: UserAttempt }>>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'role-missing' | 'denied'>('checking');

  // Trạng thái chọn học sinh xem tiến độ
  const [selectedStudent, setSelectedStudent] = useState<SimulatedStudent | null>(null);
  const [studentProgress, setStudentProgress] = useState<UserProgress | null>(null);

  // Trạng thái xem bài làm để chấm
  const [reviewingItem, setReviewingItem] = useState<PendingGroup | null>(null);
  const [grades, setGrades] = useState<Record<string, { isCorrect: boolean; feedback: string }>>({});

  const [gradingSuccessMsg, setGradingSuccessMsg] = useState<string | null>(null);

  const pendingGroups = useMemo(() => {
    const groupsMap = new Map<string, PendingGroup>();

    pendingAttempts.forEach(({ student, attempt }) => {
      const subTense = attempt.selectedSubTense || (attempt.questionTypeId === 'eng-qt6' ? detectSubTense(attempt) : '');
      const key = `${student.id}-${attempt.questionTypeId}-${subTense}`;

      if (!groupsMap.has(key)) {
        groupsMap.set(key, {
          id: key,
          student,
          questionTypeId: attempt.questionTypeId,
          selectedSubTense: subTense || undefined,
          attempts: []
        });
      }

      groupsMap.get(key)!.attempts.push(attempt);
    });

    groupsMap.forEach(group => {
      group.attempts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    });

    return [...groupsMap.values()];
  }, [pendingAttempts]);

  const loadData = useCallback(async (teacherUserId = user?.uid) => {
    setIsLoading(true);
    setSelectedStudent(null);
    setStudentProgress(null);

    try {
      const list = await progressService.getRealStudents(teacherUserId ? [teacherUserId] : []);
      setStudents(list);
      const pending = await progressService.getRealPendingManualAttempts(list);
      setPendingAttempts(pending);
    } catch (e) {
      console.error(
        `Lỗi khi load dữ liệu giáo viên từ Firestore. UID hiện tại: "${user?.uid}". ` +
        `Nếu bị permission-denied, hãy kiểm tra UID này có nằm trong firestore.rules/isBootstrapTeacher() không.`,
        e
      );
    } finally {
      setIsLoading(false);
    }
  }, [user?.uid]);

  useEffect(() => {
    let cancelled = false;
    setAccessStatus('checking');

    if (!user) {
      setAccessStatus('denied');
      return () => {
        cancelled = true;
      };
    }

    teacherAccessService.isTeacher(user).then((allowed) => {
      if (cancelled) return;

      if (!allowed) {
        setAccessStatus(teacherAccessService.isBootstrapTeacher(user) ? 'role-missing' : 'denied');
        return;
      }

      setAccessStatus('allowed');
      loadData(user.uid);
    });

    return () => {
      cancelled = true;
    };
  }, [user, loadData]);

  if (accessStatus === 'checking') {
    return (
      <div className="max-w-md mx-auto my-12 text-center space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
          <Loader size={34} className="animate-spin" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-foreground">Đang kiểm tra quyền giáo viên</h3>
          <p className="text-xs font-semibold text-muted-foreground">
            Hệ thống đang xác thực role giáo viên từ Firestore.
          </p>
        </div>
      </div>
    );
  }

  if (accessStatus === 'role-missing') {
    return (
      <div className="max-w-lg mx-auto my-12 text-center space-y-6 p-8 rounded-2xl bg-card border border-amber-500/25 shadow-lg shadow-amber-500/5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
          <XCircle size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-foreground">Chưa đọc được role giáo viên</h3>
          <p className="text-xs font-semibold text-muted-foreground leading-relaxed">
            Email hiện tại đúng tài khoản giáo viên, nhưng app chưa đọc được document
            {' '}teachers/{user?.uid}. Hãy kiểm tra Firestore Rules đã Publish/Deploy và tải lại trang.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            onClick={() => window.location.reload()}
            className="w-full font-bold py-2.5 text-xs bg-amber-500 hover:bg-amber-600 text-white cursor-pointer"
          >
            Tải lại quyền
          </Button>
          <Button
            onClick={() => navigate('/dashboard')}
            className="w-full font-bold py-2.5 text-xs border border-border bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 cursor-pointer"
          >
            Về Bảng điều khiển
          </Button>
        </div>
      </div>
    );
  }

  if (accessStatus !== 'allowed') {
    return (
      <div className="max-w-md mx-auto my-12 text-center space-y-6 p-8 rounded-2xl bg-card border border-rose-500/20 shadow-lg shadow-rose-500/5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
          <XCircle size={40} className="animate-pulse" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-foreground">Không có quyền truy cập</h3>
          <p className="text-xs font-semibold text-muted-foreground">
            Tài khoản này chưa được cấp role giáo viên trên Firestore.
          </p>
        </div>
        <Button
          onClick={() => navigate('/dashboard')}
          className="w-full font-bold py-2.5 text-xs border border-border bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 cursor-pointer"
        >
          Quay lại Bảng điều khiển Học sinh
        </Button>
      </div>
    );
  }

  // Khi chọn một học sinh để xem báo cáo tiến trình
  const handleSelectStudent = async (student: SimulatedStudent) => {
    setSelectedStudent(student);
    setIsLoading(true);
    const prog = await progressService.getUserProgressFromFirestore(student.id);
    setStudentProgress(prog || {
      userId: student.id,
      masteryLevels: {},
      completedLessons: [],
      lastUpdatedAt: new Date().toISOString()
    });
    setIsLoading(false);
  };

  // Bắt đầu chấm bài làm theo nhóm (group)
  const handleStartReview = (group: PendingGroup) => {
    setReviewingItem(group);

    
    // Khởi tạo trạng thái chấm điểm cho từng bài làm trong nhóm
    const initialGrades: Record<string, { isCorrect: boolean; feedback: string }> = {};
    group.attempts.forEach(attempt => {
      initialGrades[attempt.id] = {
        isCorrect: attempt.isCorrect,
        feedback: ''
      };
    });
    setGrades(initialGrades);
    setGradingSuccessMsg(null);
  };

  // Submit chấm điểm hàng loạt từ giáo viên
  const handleGradeSubmit = async () => {
    if (!reviewingItem) return;

    setIsLoading(true);
    const { student, attempts } = reviewingItem;

    try {
      // Chấm điểm cho từng attempt trong group song song
      await Promise.all(
        attempts.map(attempt => {
          const grade = grades[attempt.id] || { isCorrect: attempt.isCorrect, feedback: '' };
          return progressService.gradeRealAttempt(
            student.id,
            attempt,
            grade.isCorrect,
            grade.feedback.trim()
          );
        })
      );

      setGradingSuccessMsg(`Đã phê duyệt thành công ${attempts.length} bài làm của học sinh!`);

      // Tải lại dữ liệu mới nhất
      await loadData();

      // Nếu đang xem học sinh đó, tải lại tiến độ
      if (selectedStudent && selectedStudent.id === student.id) {
        const prog = await progressService.getUserProgressFromFirestore(student.id);
        setStudentProgress(prog || {
          userId: student.id,
          masteryLevels: {},
          completedLessons: [],
          lastUpdatedAt: new Date().toISOString()
        });
      }
    } catch (e) {
      console.error("Lỗi khi chấm điểm các bài làm:", e);
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setReviewingItem(null);
    }, 1500);
  };
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">

      {/* Banner góc giáo viên */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white shadow-lg shadow-emerald-500/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
              <Users className="text-amber-300" size={24} />
              Hệ thống Quản lý & Chấm bài của Giáo viên
            </h2>
            <p className="text-xs md:text-sm text-emerald-100 font-medium max-w-2xl leading-relaxed">
              Theo dõi sát sao lộ trình tiến bộ của học sinh và chấm bài tự luận Toán bằng ảnh chụp lời giải thực tế.
            </p>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2 text-xs font-extrabold shadow-sm text-white select-none">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Hệ thống: Trực tuyến</span>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-border/30 gap-2">
        <button
          onClick={() => { setActiveTab('students'); setReviewingItem(null); }}
          className={cn(
            "px-4 py-2.5 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer",
            activeTab === 'students'
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <GraduationCap size={15} />
          Báo cáo Tiến độ Học sinh
        </button>
        <button
          onClick={() => { setActiveTab('grading'); }}
          className={cn(
            "px-4 py-2.5 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer relative",
            activeTab === 'grading'
              ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <UserCheck size={15} />
          Hàng đợi Phê duyệt
          {pendingGroups.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-black text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce">
              {pendingGroups.length}
            </span>
          )}
        </button>
      </div>

      {/* Content Tabs */}
      {isLoading ? (
        <div className="h-64 flex flex-col items-center justify-center gap-4 bg-card border border-border/40 rounded-2xl">
          <Loader size={36} className="animate-spin text-emerald-600" />
          <p className="text-xs font-bold text-muted-foreground animate-pulse">Đang tải thông tin học tập của học sinh...</p>
        </div>
      ) : activeTab === 'students' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Cột trái: Danh sách học sinh */}
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
                    onClick={() => handleSelectStudent(student)}
                    className={cn(
                      "cursor-pointer transition-all duration-200 hover:border-emerald-500/50 border",
                      isSelected ? "border-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/15" : "bg-card border-border/50"
                    )}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-10 h-10 rounded-full border border-emerald-500/20 bg-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-xs text-foreground truncate">{student.name}</h4>
                        <p className="text-[10px] text-muted-foreground font-semibold truncate">{student.email}</p>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold px-1.5 py-0.5 rounded">
                            Đã đạt: {completedCount} dạng bài
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Cột phải: Báo cáo chi tiết của học sinh được chọn */}
          <div className="md:col-span-2">
            {selectedStudent && studentProgress ? (
              <div className="space-y-6">

                {/* Profile Card */}
                <Card className="border-border/50 bg-card">
                  <CardHeader className="p-5 border-b border-border/20 flex flex-row items-center gap-4 space-y-0">
                    <img
                      src={selectedStudent.avatar}
                      alt={selectedStudent.name}
                      className="w-12 h-12 rounded-full border border-primary bg-slate-100 shrink-0"
                    />
                    <div>
                      <CardTitle className="text-foreground text-sm font-black">{selectedStudent.name}</CardTitle>
                      <CardDescription className="text-[10px] font-semibold text-muted-foreground">
                        Hồ sơ học tập toàn diện & Tiến trình Mastery thực tế
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 space-y-6">
                    {/* Thống kê nhanh */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-3">
                        <Award className="text-emerald-500" size={24} />
                        <div>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase leading-none mb-1">Số dạng đã master</p>
                          <h4 className="text-sm font-black text-foreground">{studentProgress.completedLessons.length} / {mathQuestionTypes.length + englishQuestionTypes.length}</h4>
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900 border border-border/30 p-3 rounded-xl flex items-center gap-3">
                        <Activity className="text-indigo-500" size={24} />
                        <div>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase leading-none mb-1">Tỷ lệ hoàn thành</p>
                          <h4 className="text-sm font-black text-foreground">
                            {Math.round((studentProgress.completedLessons.length / (mathQuestionTypes.length + englishQuestionTypes.length)) * 100)}%
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Danh sách tiến độ chi tiết từng môn */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-black text-foreground border-b border-border/20 pb-2">🎯 Điểm số Mastery theo chuyên đề</h4>

                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                        {/* Toán */}
                        <div className="space-y-2.5">
                          <h5 className="text-[10px] font-extrabold uppercase text-indigo-500">📐 Chuyên đề Toán học</h5>
                          {mathQuestionTypes.map((type) => {
                            const score = studentProgress.masteryLevels[type.id] ?? 0;
                            const stars = getStarsFromScore(score);

                            return (
                              <div key={type.id} className="flex items-center justify-between gap-4 p-2.5 border border-border/30 bg-slate-50/30 dark:bg-slate-900/5 rounded-lg text-xs">
                                <span className="font-extrabold text-foreground flex-1 truncate">{type.name}</span>
                                <div className="flex items-center gap-3 shrink-0">
                                  <div className="flex gap-0.5">
                                    {[1, 2, 3].map((s) => (
                                      <Star
                                        key={s}
                                        size={9}
                                        className={cn(s <= stars ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-700")}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-[10px] font-black text-indigo-500 w-10 text-right">{score}%</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Tiếng Anh */}
                        <div className="space-y-2.5 pt-2">
                          <h5 className="text-[10px] font-extrabold uppercase text-violet-500">🗣️ Chuyên đề Tiếng Anh</h5>
                          {englishQuestionTypes.map((type) => {
                            const score = studentProgress.masteryLevels[type.id] ?? 0;
                            const stars = getStarsFromScore(score);

                            return (
                              <div key={type.id} className="flex items-center justify-between gap-4 p-2.5 border border-border/30 bg-slate-50/30 dark:bg-slate-900/5 rounded-lg text-xs">
                                <span className="font-extrabold text-foreground flex-1 truncate">{type.name}</span>
                                <div className="flex items-center gap-3 shrink-0">
                                  <div className="flex gap-0.5">
                                    {[1, 2, 3].map((s) => (
                                      <Star
                                        key={s}
                                        size={9}
                                        className={cn(s <= stars ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-700")}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-[10px] font-black text-violet-500 w-10 text-right">{score}%</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>

                  </CardContent>
                </Card>

              </div>
            ) : (
              <div className="h-64 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center p-6 gap-2 bg-slate-50/10 dark:bg-slate-900/5">
                <Users size={32} className="text-muted-foreground/60 animate-pulse" />
                <h4 className="font-bold text-xs text-foreground">Chọn học sinh bên trái</h4>
                <p className="text-[10px] text-muted-foreground font-semibold">Để xem chi tiết điểm số Mastery, các ngôi sao đạt được và lịch sử làm bài.</p>
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Hàng đợi chấm bài */
        <div className="space-y-6">
          {!reviewingItem ? (
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                <BookOpen size={14} /> Bài làm Toán & Tiếng Anh chờ duyệt ({pendingGroups.length})
              </h3>

              {pendingGroups.length === 0 ? (
                <div className="p-8 border border-dashed border-border rounded-2xl text-center space-y-3 bg-slate-50/10 dark:bg-slate-900/5">
                  <CheckCircle size={40} className="mx-auto text-emerald-500 animate-bounce" />
                  <p className="text-xs font-bold text-foreground">Tuyệt vời! Đã hoàn thành chấm toàn bộ bài tự luận & trắc nghiệm.</p>
                  <p className="text-[10px] text-muted-foreground">Hiện tại không có học sinh nào có bài chờ phê duyệt.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pendingGroups.map((group) => {
                    const qType = mathQuestionTypes.find(t => t.id === group.questionTypeId) || englishQuestionTypes.find(t => t.id === group.questionTypeId);
                    
                    const subTenseName = group.selectedSubTense === 'all' 
                      ? 'Tổng ôn thông minh' 
                      : (group.selectedSubTense ? getSubTenseName(group.selectedSubTense) : '');

                    return (
                      <Card key={group.id} className="border-border/50 bg-card hover:border-emerald-500/30 transition-colors">
                        <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2 border-b border-border/20 pb-2">
                              <div className="flex items-center gap-2">
                                <img
                                  src={group.student.avatar}
                                  alt={group.student.name}
                                  className="w-6 h-6 rounded-full bg-slate-100 border border-emerald-500/20"
                                />
                                <span className="font-extrabold text-[11px] text-foreground">{group.student.name}</span>
                              </div>
                              <span className="text-[9px] font-bold text-muted-foreground">
                                {group.attempts.length > 0 && new Date(group.attempts[group.attempts.length - 1].createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>

                            {group.questionTypeId.startsWith('math') ? (
                              <>
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-500 inline-block">
                                  📐 {qType?.name}
                                </span>
                                <p className="text-xs font-semibold text-foreground mt-1">
                                  Bài làm tự luận Toán chờ duyệt ({group.attempts.length} câu).
                                </p>
                              </>
                            ) : (
                              <>
                                <div className="flex flex-wrap gap-1.5 items-center">
                                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-950 text-violet-500">
                                    🗣️ {qType?.name}
                                  </span>
                                  {subTenseName && (
                                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                                      {subTenseName}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs font-semibold text-foreground mt-1.5">
                                  Bài làm trắc nghiệm Tiếng Anh chờ duyệt ({group.attempts.length} câu).
                                </p>
                              </>
                            )}
                          </div>

                          <Button
                            onClick={() => handleStartReview(group)}
                            className="w-full font-bold text-[11px] py-1 px-3 border border-border bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                          >
                            Mở Workspace Chấm {group.attempts.length} câu
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Workspace chấm nhóm bài làm thông minh */
            <div className="space-y-6">

              {/* Back Button */}
              <button
                onClick={() => setReviewingItem(null)}
                className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer bg-secondary/50 hover:bg-secondary px-3 py-2 rounded-xl transition-all self-start"
              >
                ← Quay lại hàng đợi
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={reviewingItem.student.avatar}
                    alt={reviewingItem.student.name}
                    className="w-10 h-10 rounded-full border border-emerald-500/20 bg-slate-100"
                  />
                  <div>
                    <h3 className="text-sm font-black text-foreground">
                      Duyệt bài làm của {reviewingItem.student.name}
                    </h3>
                    <p className="text-[10px] text-muted-foreground font-semibold">
                      Chuyên đề: {mathQuestionTypes.find(t => t.id === reviewingItem.questionTypeId)?.name || englishQuestionTypes.find(t => t.id === reviewingItem.questionTypeId)?.name}
                      {reviewingItem.selectedSubTense && ` (${reviewingItem.selectedSubTense === 'all' ? 'Tổng ôn thông minh' : getSubTenseName(reviewingItem.selectedSubTense)})`}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviewingItem.attempts.map((attempt, index) => {
                    const qList = attempt.questionTypeId.startsWith('math') ? mathQuestions : englishQuestions;
                    const question = qList.find(q => q.id === attempt.questionId);
                    const grade = grades[attempt.id] || { isCorrect: attempt.isCorrect, feedback: '' };

                    const isMathAttempt = attempt.questionTypeId.startsWith('math');
                    const sList = isMathAttempt ? mathSolutions : englishSolutions;
                    const solutionDetail = sList.find(s => s.questionId === attempt.questionId);

                    return (
                      <Card key={attempt.id} className="border-border/50 bg-card overflow-hidden shadow-sm">
                        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 border-b border-border/30 p-4 flex flex-row items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-foreground">Câu hỏi {index + 1}</span>
                            {attempt.questionTypeId === 'eng-qt6' && (
                              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                                {getQuestionSubTenseName(attempt.questionId)}
                              </span>
                            )}
                          </div>
                          <span className="text-[9px] text-muted-foreground font-semibold">
                            {new Date(attempt.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </CardHeader>
                        
                        <CardContent className="p-5 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                            
                            {/* Phần hiển thị Đề bài & Lời giải học sinh */}
                            <div className="space-y-3">
                              <div>
                                <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đề bài:</span>
                                <div className="text-xs font-semibold text-foreground p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border/30">
                                  {question ? (
                                    <LatexRenderer text={question.content} />
                                  ) : (
                                    "Không tìm thấy câu hỏi"
                                  )}
                                </div>
                              </div>

                              {/* Nếu là toán, hiển thị ảnh chụp bài giải */}
                              {isMathAttempt && (
                                <div>
                                  <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Ảnh bài làm:</span>
                                  <div className="bg-black/90 p-2 rounded-xl flex items-center justify-center min-h-[200px] border border-border relative">
                                    {attempt.proofImages && attempt.proofImages.length > 0 ? (
                                      <img
                                        src={attempt.proofImages[0].downloadUrl}
                                        alt="Math Proof"
                                        className="max-h-[300px] object-contain rounded-lg"
                                      />
                                    ) : (
                                      <span className="text-xs text-muted-foreground">Không có ảnh chụp</span>
                                    )}
                                  </div>
                                </div>
                              )}

                              {/* Nếu là tiếng anh, hiển thị lựa chọn phương án */}
                              {!isMathAttempt && question?.options && (
                                <div>
                                  <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Lựa chọn phương án:</span>
                                  <div className="grid grid-cols-1 gap-2">
                                    {question.options.map((opt, oIdx) => {
                                      const optLetter = opt.trim().charAt(0);
                                      const studentLetter = attempt.userAnswer?.trim().charAt(0);
                                      const correctLetter = question.correctAnswer?.trim().charAt(0);
                                      
                                      const isStudentChoice = optLetter === studentLetter;
                                      const isCorrectChoice = optLetter === correctLetter;

                                      return (
                                        <div
                                          key={oIdx}
                                          className={cn(
                                            "p-2.5 rounded-lg text-xs font-semibold border",
                                            isStudentChoice
                                              ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                                              : "bg-card border-border text-foreground",
                                            isCorrectChoice && "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                                          )}
                                        >
                                          {opt}
                                          {isStudentChoice && <span className="text-[10px] font-bold ml-1.5">(Học sinh chọn)</span>}
                                          {isCorrectChoice && <span className="text-[10px] font-bold ml-1.5">(Đáp án đúng)</span>}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Phần hiển thị chấm điểm & Nhận xét của giáo viên */}
                            <div className="space-y-4">
                              <div>
                                <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đáp số đúng chuẩn:</span>
                                <div className="text-xs font-black text-emerald-500">
                                  {question?.correctAnswer || "(Không có)"}
                                </div>
                              </div>

                              {!isMathAttempt && (
                                <div>
                                  <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đáp án học sinh chọn:</span>
                                  <div className="text-xs font-black text-rose-500">
                                    {attempt.userAnswer || "(Không có)"}
                                  </div>
                                </div>
                              )}

                              <div className="space-y-2 border-t border-border/20 pt-3">
                                <span className="text-[9px] font-bold text-muted-foreground block uppercase">Chấm kết quả câu này:</span>
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setGrades(prev => ({
                                      ...prev,
                                      [attempt.id]: { ...prev[attempt.id], isCorrect: false }
                                    }))}
                                    className={cn(
                                      "flex-1 font-bold py-2 text-xs rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer",
                                      !grade.isCorrect
                                        ? "bg-rose-500/15 border-rose-500/40 text-rose-600 animate-fade-in"
                                        : "bg-background border-border text-muted-foreground hover:bg-secondary/40"
                                    )}
                                  >
                                    <XCircle size={14} /> Sai
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setGrades(prev => ({
                                      ...prev,
                                      [attempt.id]: { ...prev[attempt.id], isCorrect: true }
                                    }))}
                                    className={cn(
                                      "flex-1 font-bold py-2 text-xs rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer",
                                      grade.isCorrect
                                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-600 animate-fade-in"
                                        : "bg-background border-border text-muted-foreground hover:bg-secondary/40"
                                    )}
                                  >
                                    <CheckCircle size={14} /> Đúng
                                  </button>
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <span className="text-[9px] font-bold text-muted-foreground block uppercase">Nhận xét câu này (nếu có):</span>
                                <input
                                  type="text"
                                  value={grade.feedback}
                                  onChange={(e) => setGrades(prev => ({
                                    ...prev,
                                    [attempt.id]: { ...prev[attempt.id], feedback: e.target.value }
                                  }))}
                                  placeholder="Nhận xét riêng cho câu này..."
                                  className="w-full bg-slate-50 dark:bg-slate-900 border border-border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-foreground font-semibold"
                                />
                              </div>
                            </div>

                          </div>

                          {/* Hướng dẫn giải chi tiết cho giáo viên đối chiếu */}
                          {solutionDetail && (
                            <div className="border-t border-border/40 pt-4 mt-4 space-y-4">
                              <span className="text-[9px] font-black text-muted-foreground block uppercase tracking-wider">
                                💡 Hướng dẫn giải chi tiết (Học sinh nhìn thấy):
                              </span>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Tư duy nhận dạng & Đáp số */}
                                <div className="space-y-3">
                                  <div className={cn(
                                    "text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border",
                                    isMathAttempt 
                                      ? "bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/30" 
                                      : "bg-violet-50/50 dark:bg-violet-950/10 border-violet-100 dark:border-violet-900/30"
                                  )}>
                                    <span className="font-extrabold text-foreground block mb-1">💡 Tư duy nhận dạng:</span>
                                    <LatexRenderer text={solutionDetail.recognition} />
                                  </div>

                                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 border border-border/30 rounded-xl text-xs space-y-2">
                                    <div className="font-extrabold text-foreground">
                                      Đáp số đúng: <span className="text-emerald-500 font-black"><LatexRenderer text={question?.correctAnswer || solutionDetail.finalAnswer} /></span>
                                    </div>
                                    {solutionDetail.commonMistakes && solutionDetail.commonMistakes.length > 0 && (
                                      <div className="pt-2 border-t border-border/20 text-rose-600 dark:text-rose-400 font-semibold leading-relaxed">
                                        <span className="font-extrabold block text-foreground mb-1">⚠️ Lỗi dễ mắc (Tránh bẫy):</span>
                                        {solutionDetail.commonMistakes.map((m: string, i: number) => (
                                          <p key={i}>• {m}</p>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Các bước giải chi tiết */}
                                <div className="space-y-4 pl-1">
                                  {solutionDetail.detailedSteps.map((step: any, idx: number) => (
                                    <div key={idx} className="space-y-1">
                                      <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                                        <span className={cn(
                                          "w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] shrink-0 font-bold",
                                          isMathAttempt ? "bg-indigo-600" : "bg-violet-600"
                                        )}>
                                          {step.order}
                                        </span>
                                        {step.title}
                                      </h5>
                                      <div className="pl-6.5 text-xs font-semibold text-muted-foreground leading-relaxed">
                                        <LatexRenderer text={step.explanation} />
                                        {step.formula && (
                                          <div className="my-2 p-2 bg-secondary/50 rounded-lg text-foreground border border-border/5 overflow-x-auto">
                                            <LatexRenderer text={step.formula} block={true} />
                                          </div>
                                        )}
                                        {step.result && (
                                          <p className={cn(
                                            "font-bold mt-1",
                                            isMathAttempt ? "text-indigo-600 dark:text-indigo-400" : "text-violet-600 dark:text-violet-400"
                                          )}>
                                            👉 Kết quả bước: <LatexRenderer text={step.result} />
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Nút gửi phê duyệt cho cả nhóm */}
                <Card className="border-emerald-500/20 bg-card shadow-sm">
                  <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <h4 className="font-extrabold text-xs text-foreground">Xác nhận phê duyệt nhóm câu hỏi này</h4>
                      <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                        Hệ thống sẽ lưu lại điểm số của cả {reviewingItem.attempts.length} câu hỏi và mở lại cho học sinh làm lại các câu bị sai.
                      </p>
                    </div>

                    {gradingSuccessMsg ? (
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-bold animate-fade-in flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-500 animate-bounce" />
                        {gradingSuccessMsg}
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleGradeSubmit()}
                        className="font-bold text-xs py-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer h-10 w-full sm:w-auto"
                      >
                        🚀 Phê duyệt {reviewingItem.attempts.length} bài làm
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default TeacherDashboard;
