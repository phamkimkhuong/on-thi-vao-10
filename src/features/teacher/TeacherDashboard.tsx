import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { progressService } from '../../services/progressService';
import { mathQuestionTypes } from '../../data/mathData';
import { englishQuestionTypes } from '../../data/englishData';
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
  Maximize2,
  RotateCw,
  MessageSquare,
  Award,
  Star,
  Activity,
  UserCheck,
  Loader
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getStarsFromScore } from '../../utils/theme';

export const TeacherDashboard: React.FC = () => {
  const { user } = useAppStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'students' | 'grading'>('students');
  const [students, setStudents] = useState<SimulatedStudent[]>([]);
  const [pendingAttempts, setPendingAttempts] = useState<Array<{ student: SimulatedStudent; attempt: UserAttempt }>>([]);

  const [isLoading, setIsLoading] = useState(false);

  // Trạng thái chọn học sinh xem tiến độ
  const [selectedStudent, setSelectedStudent] = useState<SimulatedStudent | null>(null);
  const [studentProgress, setStudentProgress] = useState<UserProgress | null>(null);

  // Trạng thái xem ảnh bài làm tự luận Toán để chấm
  const [reviewingItem, setReviewingItem] = useState<{ student: SimulatedStudent; attempt: UserAttempt } | null>(null);
  const [imageRotation, setImageRotation] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [gradingSuccessMsg, setGradingSuccessMsg] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    setSelectedStudent(null);
    setStudentProgress(null);

    try {
      const list = await progressService.getRealStudents();
      setStudents(list);
      const pending = await progressService.getRealPendingManualAttempts(list);
      setPendingAttempts(pending);
    } catch (e) {
      console.error("Lỗi khi load dữ liệu giáo viên từ Firestore:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email === 'phamkhuong436@gmail.com') {
      loadData();
    }
  }, [user]);

  if (user?.email !== 'phamkhuong436@gmail.com') {
    return (
      <div className="max-w-md mx-auto my-12 text-center space-y-6 p-8 rounded-2xl bg-card border border-rose-500/20 shadow-lg shadow-rose-500/5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
          <XCircle size={40} className="animate-pulse" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-foreground">Không có quyền truy cập</h3>
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

  // Bắt đầu chấm một bài làm tự luận
  const handleStartReview = (item: { student: SimulatedStudent; attempt: UserAttempt }) => {
    setReviewingItem(item);
    setImageRotation(0);
    setIsZoomed(false);
    setFeedbackText('');
    setGradingSuccessMsg(null);
  };

  // Submit chấm điểm từ giáo viên
  const handleGradeSubmit = async (isCorrect: boolean) => {
    if (!reviewingItem) return;

    const { student, attempt } = reviewingItem;
    setIsLoading(true);

    try {
      await progressService.gradeRealAttempt(student.id, attempt, isCorrect, feedbackText.trim());

      setGradingSuccessMsg(isCorrect ? "Đã duyệt bài làm ĐẠT yêu cầu!" : "Đã gửi đánh giá CẦN SỬA LẠI tới học sinh.");

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
      console.error("Lỗi khi chấm điểm:", e);
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
            <span>Đang kết nối Firestore</span>
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
          Hàng đợi Chấm bài Toán
          {pendingAttempts.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-black text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce">
              {pendingAttempts.length}
            </span>
          )}
        </button>
      </div>

      {/* Content Tabs */}
      {isLoading ? (
        <div className="h-64 flex flex-col items-center justify-center gap-4 bg-card border border-border/40 rounded-2xl">
          <Loader size={36} className="animate-spin text-emerald-600" />
          <p className="text-xs font-bold text-muted-foreground animate-pulse">Đang đồng bộ dữ liệu với Firestore...</p>
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
        /* Hàng đợi chấm bài tự luận Toán */
        <div className="space-y-6">
          {!reviewingItem ? (
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                <BookOpen size={14} /> Bài làm Toán chờ giáo viên duyệt ({pendingAttempts.length})
              </h3>

              {pendingAttempts.length === 0 ? (
                <div className="p-8 border border-dashed border-border rounded-2xl text-center space-y-3 bg-slate-50/10 dark:bg-slate-900/5">
                  <CheckCircle size={40} className="mx-auto text-emerald-500 animate-bounce" />
                  <p className="text-xs font-bold text-foreground">Tuyệt vời! Đã hoàn thành chấm toàn bộ bài tự luận.</p>
                  <p className="text-[10px] text-muted-foreground">Hiện tại không có học sinh nào có bài chờ phê duyệt ảnh giải.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pendingAttempts.map((item, index) => {
                    const qType = mathQuestionTypes.find(t => t.id === item.attempt.questionTypeId);

                    return (
                      <Card key={index} className="border-border/50 bg-card hover:border-emerald-500/30 transition-colors">
                        <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2 border-b border-border/20 pb-2">
                              <div className="flex items-center gap-2">
                                <img
                                  src={item.student.avatar}
                                  alt={item.student.name}
                                  className="w-6 h-6 rounded-full bg-slate-100 border border-emerald-500/20"
                                />
                                <span className="font-extrabold text-[11px] text-foreground">{item.student.name}</span>
                              </div>
                              <span className="text-[9px] font-bold text-muted-foreground">
                                {new Date(item.attempt.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>

                            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-500 inline-block">
                              📐 {qType?.name}
                            </span>
                            <p className="text-xs font-semibold text-foreground line-clamp-2 mt-1">
                              Bài làm đã tải lên {item.attempt.proofImages?.length || 0} ảnh lời giải để chờ chấm.
                            </p>
                          </div>

                          <Button
                            onClick={() => handleStartReview(item)}
                            className="w-full font-bold text-[11px] py-1 px-3 border border-border bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                          >
                            Mở Workspace Chấm bài
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Workspace chấm ảnh bài làm thông minh */
            <div className="space-y-6">

              {/* Back Button */}
              <button
                onClick={() => setReviewingItem(null)}
                className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
              >
                ← Quay lại hàng đợi bài làm
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* Cột trái: Ảnh bài làm của học sinh */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase text-muted-foreground tracking-wider">
                    🖼️ Ảnh bài làm của {reviewingItem.student.name}
                  </h4>

                  <Card className="overflow-hidden border-border/50 bg-black relative flex items-center justify-center p-2 min-h-[400px]">
                    {reviewingItem.attempt.proofImages && reviewingItem.attempt.proofImages.length > 0 ? (
                      <div className="relative w-full flex items-center justify-center overflow-hidden">
                        <img
                          src={reviewingItem.attempt.proofImages[0].downloadUrl}
                          alt="Student Proof"
                          className={cn(
                            "max-h-[420px] max-w-full rounded-lg transition-all object-contain",
                            isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                          )}
                          style={{ transform: `rotate(${imageRotation}deg)` }}
                          onClick={() => setIsZoomed(!isZoomed)}
                        />

                        {/* Các nút xoay & zoom ảnh */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <button
                            onClick={() => setImageRotation((prev) => (prev + 90) % 360)}
                            className="bg-slate-900/80 hover:bg-slate-900 p-2 rounded-xl text-white shadow transition-colors cursor-pointer"
                            title="Xoay ảnh 90 độ"
                          >
                            <RotateCw size={14} />
                          </button>
                          <button
                            onClick={() => setIsZoomed(!isZoomed)}
                            className="bg-slate-900/80 hover:bg-slate-900 p-2 rounded-xl text-white shadow transition-colors cursor-pointer"
                            title="Phóng to / Thu nhỏ"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-8 text-slate-400">
                        Không tìm thấy ảnh bài làm được upload.
                      </div>
                    )}
                  </Card>

                  <p className="text-[10px] text-muted-foreground text-center font-semibold italic">
                    💡 Mẹo: Nhấp vào ảnh để phóng to/thu nhỏ. Sử dụng nút xoay nếu ảnh chụp bị ngược.
                  </p>
                </div>

                {/* Cột phải: Đáp án & Thao tác chấm điểm */}
                <div className="space-y-6">

                  {/* Đáp án đối chiếu */}
                  <Card className="border-border/50 bg-card">
                    <CardHeader className="p-5 border-b border-border/20">
                      <CardTitle className="text-foreground text-xs font-black">🔬 Lời giải đối chiếu chuẩn</CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 space-y-4">
                      <div>
                        <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đề bài Toán:</span>
                        <div className="text-xs font-semibold text-foreground p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border/30">
                          <LatexRenderer text="Cho biểu thức \(A = \frac{\sqrt{x} + 1}{\sqrt{x} - 1}\) với \(x \ge 0; x \neq 1\). Tính giá trị của biểu thức khi \(x = 4\)." />
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] font-bold text-muted-foreground block mb-1 uppercase">Đáp số đúng:</span>
                        <div className="text-sm font-black text-emerald-500">
                          A = 3
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Form chấm bài của Giáo viên */}
                  <Card className="border-emerald-500/20 bg-card shadow-sm shadow-emerald-500/5">
                    <CardHeader className="p-5 border-b border-border/20">
                      <CardTitle className="text-foreground text-xs font-black flex items-center gap-1.5">
                        <MessageSquare size={15} className="text-emerald-500" />
                        Nhận xét & Phê duyệt kết quả
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-5 space-y-4">
                      {gradingSuccessMsg ? (
                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-center rounded-xl text-xs font-bold animate-fade-in flex items-center justify-center gap-2">
                          <CheckCircle size={20} className="text-emerald-500 animate-bounce" />
                          {gradingSuccessMsg}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase block">Nhận xét chi tiết (Feedback cho học sinh):</label>
                            <textarea
                              value={feedbackText}
                              onChange={(e) => setFeedbackText(e.target.value)}
                              placeholder="Ví dụ: Trình bày bài giải rõ ràng, tính toán cẩn thận. Tuy nhiên chú ý ghi đầy đủ điều kiện xác định ở mỗi bước biến đổi..."
                              className="w-full min-h-[90px] bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground font-semibold placeholder:text-muted-foreground/40 placeholder:font-normal"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                              onClick={() => handleGradeSubmit(false)}
                              className="w-full font-bold py-3 text-xs bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/20 hover:border-rose-500/40 text-rose-600 dark:text-rose-400 rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <XCircle size={15} />
                              Cần sửa lại (Chấm Sai)
                            </button>

                            <button
                              onClick={() => handleGradeSubmit(true)}
                              className="w-full font-bold py-3 text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <CheckCircle size={15} />
                              Đạt yêu cầu (Chấm Đúng)
                            </button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                </div>

              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default TeacherDashboard;
