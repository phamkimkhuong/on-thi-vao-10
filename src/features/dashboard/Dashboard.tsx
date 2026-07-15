import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { getTopics, getQuestionTypes } from '../../data';
import {
  Bookmark,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  BookOpen
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getSubjectTheme, getStarsFromScore } from '../../utils/theme';
import { getSubjectName, getSubjectIcon, getSubjectFromQuestionTypeId } from '../../utils/subject';
import { LatexRenderer } from '../../components/common/LatexRenderer';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedGrade, user, progressVersion } = useAppStore();
  void progressVersion;

  const currentUserId = user?.uid || 'guest';
  const progress = storageService.getProgress(currentUserId);
  const readLessons = storageService.getReadLessons(currentUserId);
  const readLessonsSet = new Set(readLessons);
  const completedLessonsSet = new Set(progress.completedLessons);

  // 1. Lấy danh sách chuyên đề & dạng bài của môn/lớp hiện tại theo đúng thứ tự
  const topics = getTopics(selectedGrade, selectedSubject);
  const questionTypes = getQuestionTypes(selectedGrade, selectedSubject);

  const sequentialTypes: any[] = [];
  [1, 2, 3].forEach(tierId => {
    const tierTopics = topics.filter(t => t.tier === tierId);
    tierTopics.forEach(topic => {
      const filteredTypes = questionTypes.filter(type => type.topicId === topic.id);
      sequentialTypes.push(...filteredTypes);
    });
  });

  const totalTypesCount = sequentialTypes.length;

  // 2. Tính toán thống kê theo môn học hiện tại
  // Tiến độ Lộ trình học (Lý thuyết)
  const readTypesCount = sequentialTypes.filter(type => readLessonsSet.has(type.id)).length;
  const roadmapPercent = totalTypesCount > 0 ? Math.round((readTypesCount / totalTypesCount) * 100) : 0;

  // Tiến độ Luyện tập (Bài tập)
  const masteredTypesCount = sequentialTypes.filter(type => completedLessonsSet.has(type.id)).length;
  const practicePercent = totalTypesCount > 0 ? Math.round((masteredTypesCount / totalTypesCount) * 100) : 0;

  // Sổ lỗi sai môn hiện tại
  const mistakes = storageService.getMistakes(currentUserId)
    .filter(m => m.reviewStatus !== 'fixed' && getSubjectFromQuestionTypeId(m.questionTypeId) === selectedSubject);

  // Thi thử môn hiện tại
  const exams = storageService.getExamResults(currentUserId);
  const subjectExams = exams.filter(e => {
    if (selectedSubject === 'math') return e.examId.startsWith('math');
    if (selectedSubject === 'english') return e.examId.startsWith('eng');
    if (selectedSubject === 'chemistry') return e.examId.startsWith('chem');
    return true;
  });
  const examScore = subjectExams.length > 0 ? `${subjectExams[subjectExams.length - 1].score}/10` : 'Chưa thi';

  // 3. Xử lý "Học tiếp dạng bài dở dang" (Lộ trình lý thuyết)
  const lastActiveTheoryId = localStorage.getItem('otv10_last_active_theory');
  let activeTheoryType: any = null;
  let activeTheoryStatus: 'inprogress' | 'next' | 'completed';

  if (lastActiveTheoryId && sequentialTypes.some(t => t.id === lastActiveTheoryId) && !readLessonsSet.has(lastActiveTheoryId)) {
    activeTheoryType = sequentialTypes.find(t => t.id === lastActiveTheoryId);
    activeTheoryStatus = 'inprogress';
  } else {
    const nextUnread = sequentialTypes.find(t => !readLessonsSet.has(t.id));
    if (nextUnread) {
      activeTheoryType = nextUnread;
      activeTheoryStatus = 'next';
    } else {
      activeTheoryStatus = 'completed';
    }
  }

  // 4. Xử lý "Luyện tiếp dạng bài dở dang" (Luyện tập)
  const attempts = storageService.getAttempts(currentUserId);
  const subjectAttempts = attempts.filter(a => getSubjectFromQuestionTypeId(a.questionTypeId) === selectedSubject);
  let lastActivePracticeId: string | null = null;
  if (subjectAttempts.length > 0) {
    lastActivePracticeId = subjectAttempts[subjectAttempts.length - 1].questionTypeId;
  }

  let activePracticeType: any = null;
  let activePracticeStatus: 'inprogress' | 'next' | 'completed';
  let activePracticeScore = 0;
  let activePracticeLevel = 0;

  if (lastActivePracticeId && sequentialTypes.some(t => t.id === lastActivePracticeId) && !completedLessonsSet.has(lastActivePracticeId)) {
    activePracticeType = sequentialTypes.find(t => t.id === lastActivePracticeId);
    activePracticeStatus = 'inprogress';
    activePracticeScore = progress.masteryLevels[lastActivePracticeId] || 0;
    activePracticeLevel = getStarsFromScore(activePracticeScore);
  } else {
    const nextUnmastered = sequentialTypes.find(t => !completedLessonsSet.has(t.id));
    if (nextUnmastered) {
      activePracticeType = nextUnmastered;
      activePracticeStatus = 'next';
      activePracticeScore = progress.masteryLevels[nextUnmastered.id] || 0;
      activePracticeLevel = getStarsFromScore(activePracticeScore);
    } else {
      activePracticeStatus = 'completed';
    }
  }

  // Lấy câu trích dẫn ngẫu nhiên truyền động lực học
  const quotes = [
    "Hành trình vạn dặm bắt đầu từ những bước chân đầu tiên. Hãy giải quyết gọn gàng từng dạng bài hôm nay!",
    "Thi đỗ vào lớp 10 không khó, chỉ cần bạn không lặp lại sai lầm cũ. Hãy ôn lại sổ lỗi sai thường xuyên nhé!",
    "Chăm chỉ cộng phương pháp đúng là chìa khóa của thành công. Roadmap đã sẵn sàng, đi thôi!",
    "Từng câu Toán rút gọn, từng cấu trúc bị động bạn luyện hôm nay chính là bậc thang dẫn tới cánh cổng trường cấp 3 mơ ước."
  ];

  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fade-in">

      {/* 🌟 Minimalist Greeting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-2 font-sans">
            <Sparkles className="text-amber-500 fill-amber-500 shrink-0 animate-float" size={24} />
            Chào {user?.displayName || 'bạn'}, người chiến thắng!
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-bold italic max-w-2xl leading-relaxed">
            "{quote}"
          </p>
        </div>
      </div>

      {/* 🌟 Guest Mode Banner */}
      {!user && (
        <div className="bg-gradient-to-r from-primary/10 via-indigo-500/5 to-transparent border border-primary/20 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-black text-foreground">Bạn đang học ở chế độ xem thử (Guest Mode)</h3>
            <p className="text-[11px] text-muted-foreground font-semibold">Đăng nhập tài khoản để học lý thuyết đầy đủ, lưu kết quả học tập và bắt đầu làm bài luyện tập/thi thử.</p>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className="px-6 py-2.5 font-bold text-xs bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all cursor-pointer shadow-md active:scale-95 shrink-0"
          >
            Đăng nhập ngay
          </button>
        </div>
      )}

      {/* 📐 Main Workspace Grid: 2 Columns (Left 2/3 - Core Study Actions, Right 1/3 - Stats & Weaknesses) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 👈 Left Column (2/3 width) - Focus actions & Roadmap */}
        <div className="lg:col-span-2 space-y-6">

          {/* Card 1: LỘ TRÌNH HỌC (LÝ THUYẾT) */}
          <Card className="glass border-border/40 shadow-lg rounded-3xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-44 h-44 bg-linear-to-tr from-primary/10 to-indigo-500/10 rounded-full blur-3xl -mr-8 -mt-8 animate-pulse-glow" />
            <CardHeader className="bg-secondary/25 border-b border-border/20 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className={cn("animate-pulse", getSubjectTheme(selectedSubject).iconColor)} />
                  <CardTitle className="text-foreground text-sm font-black uppercase tracking-wider font-sans">Lộ trình học (Lý thuyết)</CardTitle>
                </div>
                <span className={cn(
                  'text-[9px] font-black px-2.5 py-0.5 rounded-lg border',
                  getSubjectTheme(selectedSubject).badge
                )}>
                  {`${getSubjectIcon(selectedSubject)} ${getSubjectName(selectedSubject)}`}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5 flex flex-col">
              {activeTheoryStatus === 'completed' ? (
                <div className="space-y-3 py-4 text-center flex flex-col items-center">
                  <CheckCircle className="text-emerald-500 animate-bounce" size={40} />
                  <h3 className="text-base font-black text-foreground">Đã học xong lý thuyết!</h3>
                  <p className="text-xs text-muted-foreground font-semibold max-w-sm leading-relaxed">
                    Tuyệt vời! Bạn đã hoàn thành đọc toàn bộ lý thuyết lộ trình môn học này. Hãy chuyển sang phần luyện tập để thực chiến.
                  </p>
                  <Button
                    onClick={() => navigate('/roadmap')}
                    variant="outline"
                    className="mt-2 font-black py-2.5 px-6 text-xs border border-border text-foreground hover:text-primary rounded-xl cursor-pointer"
                  >
                    Xem lại lộ trình học <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <span className={cn(
                      "text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border inline-block leading-none",
                      activeTheoryStatus === 'inprogress'
                        ? "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
                        : "bg-secondary text-muted-foreground border-border/40"
                    )}>
                      {activeTheoryStatus === 'inprogress' ? "⚡ Học tiếp dạng bài dở dang" : "🎯 Dạng bài tiếp theo cần học"}
                    </span>
                    <h3 className="text-base md:text-lg font-black text-foreground leading-snug font-sans pt-1">
                      <LatexRenderer text={activeTheoryType.name} />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold max-w-2xl">
                      {activeTheoryType.description || 'Đọc lý thuyết và cách giải dạng bài này để chuẩn bị làm bài tập.'}
                    </p>
                  </div>

                  <Button
                    onClick={() => navigate(`/question-types/${activeTheoryType.id}`)}
                    className={cn(
                      "w-fit px-8 font-black py-3 text-xs text-white rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5 self-start",
                      selectedSubject === 'math' ? 'bg-indigo-600 hover:bg-indigo-700' :
                        selectedSubject === 'chemistry' ? 'bg-emerald-600 hover:bg-emerald-700' :
                          'bg-purple-600 hover:bg-purple-700'
                    )}
                  >
                    {activeTheoryStatus === 'inprogress' ? "Tiếp tục học ngay" : "Bắt đầu học ngay"} <ArrowRight size={13} />
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Card 2: LUYỆN TẬP (BÀI TẬP) */}
          <Card className="glass border-border/40 shadow-lg rounded-3xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-44 h-44 bg-linear-to-tr from-primary/10 to-indigo-500/10 rounded-full blur-3xl -mr-8 -mt-8 animate-pulse-glow" />
            <CardHeader className="bg-secondary/25 border-b border-border/20 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-amber-500 fill-amber-500 animate-pulse" />
                  <CardTitle className="text-foreground text-sm font-black uppercase tracking-wider font-sans">Luyện tập (Bài tập)</CardTitle>
                </div>
                <span className={cn(
                  'text-[9px] font-black px-2.5 py-0.5 rounded-lg border',
                  getSubjectTheme(selectedSubject).badge
                )}>
                  {`${getSubjectIcon(selectedSubject)} ${getSubjectName(selectedSubject)}`}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5 flex flex-col">
              {activePracticeStatus === 'completed' ? (
                <div className="space-y-3 py-4 text-center flex flex-col items-center">
                  <Award className="text-amber-500 animate-bounce" size={40} />
                  <h3 className="text-base font-black text-foreground">Đã hoàn thành luyện tập!</h3>
                  <p className="text-xs text-muted-foreground font-semibold max-w-sm leading-relaxed">
                    Chúc mừng! Bạn đã đạt mức thành thạo tối thiểu 2 sao cho toàn bộ các dạng bài tập môn học này.
                  </p>
                  <Button
                    onClick={() => navigate('/practice')}
                    variant="outline"
                    className="mt-2 font-black py-2.5 px-6 text-xs border border-border text-foreground hover:text-primary rounded-xl cursor-pointer"
                  >
                    Xem lại các dạng bài luyện tập <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <span className={cn(
                      "text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border inline-block leading-none",
                      activePracticeStatus === 'inprogress'
                        ? "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
                        : "bg-secondary text-muted-foreground border-border/40"
                    )}>
                      {activePracticeStatus === 'inprogress' ? "⚡ Luyện tiếp dạng bài dở dang" : "🎯 Dạng bài tiếp theo cần luyện"}
                    </span>
                    <h3 className="text-base md:text-lg font-black text-foreground leading-snug font-sans pt-1">
                      <LatexRenderer text={activePracticeType.name} />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold max-w-2xl">
                      {activePracticeType.description || 'Luyện tập dạng bài này ngay để tăng mức độ thành thạo và tích lũy sao.'}
                    </p>
                  </div>

                  <div className="space-y-2 bg-secondary/20 p-4.5 rounded-2xl border border-border/10">
                    <div className="flex items-center justify-between text-xs font-black text-foreground">
                      <span className="flex items-center gap-1">
                        🎯 Mức thành thạo: <span className="text-primary">{activePracticeScore}/100</span>
                      </span>
                      <span className="text-amber-500 flex items-center gap-0.5 font-bold">
                        Đánh giá: {activePracticeLevel}/3 ⭐
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          selectedSubject === 'math' ? 'bg-indigo-600' :
                            selectedSubject === 'chemistry' ? 'bg-emerald-600' :
                              'bg-purple-600'
                        )}
                        style={{ width: `${activePracticeScore}%` }}
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate(`/practice/${activePracticeType.id}`)}
                    className={cn(
                      "w-fit px-8 font-black py-3 text-xs text-white rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5 self-start",
                      selectedSubject === 'math' ? 'bg-indigo-600 hover:bg-indigo-700' :
                        selectedSubject === 'chemistry' ? 'bg-emerald-600 hover:bg-emerald-700' :
                          'bg-purple-600 hover:bg-purple-700'
                    )}
                  >
                    {activePracticeStatus === 'inprogress' ? "Tiếp tục luyện tập" : "Bắt đầu luyện tập"} <ArrowRight size={13} />
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

        </div>

        {/* 👉 Right Column (1/3 width) - Stats Widget & Weakness list */}
        <div className="space-y-6">

          {/* Widget Thống kê tổng quan (Mastery Stats Widget) */}
          <Card className="border border-border/40 rounded-3xl shadow-md overflow-hidden">
            <CardHeader className="bg-secondary/15 p-5 border-b border-border/20">
              <CardTitle className="text-foreground font-black text-sm uppercase tracking-wider font-sans">Thống kê tổng quan</CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">

              {/* Sổ lỗi sai */}
              <div
                onClick={() => navigate('/mistakes')}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/10 hover:border-amber-500/20 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/8 dark:bg-amber-500/15 text-amber-500 flex items-center justify-center border border-amber-500/10 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Bookmark size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] text-muted-foreground font-black tracking-wider block uppercase mb-0.5">Sổ lỗi sai</span>
                  <span className="text-sm font-black text-foreground">
                    {mistakes.length} câu <span className="text-[10px] text-slate-400 font-bold">chờ ôn tập</span>
                  </span>
                </div>
              </div>

              {/* Điểm thi thử */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/8 dark:bg-emerald-500/15 text-emerald-500 flex items-center justify-center border border-emerald-500/10 shrink-0 shadow-sm">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] text-muted-foreground font-black tracking-wider block uppercase mb-0.5">Đề thi mới nhất</span>
                  <span className="text-sm font-black text-foreground">
                    {examScore}
                  </span>
                </div>
              </div>

              {/* Tiến độ Lộ trình học (Lý thuyết) */}
              <div className="p-4 rounded-2xl bg-secondary/25 border border-border/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-black text-foreground">
                  <span className="flex items-center gap-1">📖 Tiến độ Lộ trình học (Lý thuyết)</span>
                  <span>{roadmapPercent}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      selectedSubject === 'math' ? "bg-linear-to-r from-indigo-500 to-blue-500" :
                        selectedSubject === 'chemistry' ? "bg-linear-to-r from-emerald-500 to-teal-500" :
                          "bg-linear-to-r from-purple-500 to-pink-500"
                    )}
                    style={{ width: `${roadmapPercent}%` }}
                  />
                </div>
              </div>

              {/* Tiến độ Luyện tập (Bài tập) */}
              <div className="p-4 rounded-2xl bg-secondary/25 border border-border/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-black text-foreground">
                  <span className="flex items-center gap-1">🎯 Tiến độ Luyện tập (Bài tập)</span>
                  <span>{practicePercent}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      selectedSubject === 'math' ? "bg-linear-to-r from-indigo-500 to-blue-500" :
                        selectedSubject === 'chemistry' ? "bg-linear-to-r from-emerald-500 to-teal-500" :
                          "bg-linear-to-r from-purple-500 to-pink-500"
                    )}
                    style={{ width: `${practicePercent}%` }}
                  />
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
