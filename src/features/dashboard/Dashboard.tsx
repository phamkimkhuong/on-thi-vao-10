import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { getQuestionTypes } from '../../data';
import {
  Bookmark,
  Award,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getSubjectTheme, getStarsFromScore } from '../../utils/theme';
import { getSubjectName, getSubjectIcon, getSubjectFromQuestionTypeId } from '../../utils/subject';
import type { SubjectCode } from '../../types';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { setSubject, selectedGrade, user, progressVersion } = useAppStore();
  void progressVersion;

  const currentUserId = user!.uid;
  const progress = storageService.getProgress(currentUserId);
  const mistakes = storageService.getMistakes(currentUserId).filter(m => m.reviewStatus !== 'fixed');
  const exams = storageService.getExamResults(currentUserId);

  const activeSubjects: SubjectCode[] = selectedGrade === 'grade9'
    ? ['math', 'english']
    : ['math', 'english', 'chemistry'];

  // Tìm dạng bài dạng dở gần nhất
  const attempts = storageService.getAttempts(currentUserId);
  let lastActiveTypeId: string | null = null;
  if (attempts.length > 0) {
    lastActiveTypeId = attempts[attempts.length - 1].questionTypeId;
  } else {
    lastActiveTypeId = selectedGrade === 'grade9' ? 'math-qt1' : 'math10-qt1';
  }

  const allQuestionTypes = activeSubjects.flatMap(sub => getQuestionTypes(selectedGrade, sub));
  const lastActiveType = (allQuestionTypes.find(qt => qt.id === lastActiveTypeId) || allQuestionTypes[0] || { id: '', name: 'Chưa học', description: '' }) as any;
  const lastActiveSubject = getSubjectFromQuestionTypeId(lastActiveType.id) || 'math';
  const lastActiveLevel = getStarsFromScore(progress.masteryLevels[lastActiveType.id] ?? 0);
  const lastActivePercent = Math.round((lastActiveLevel / 3) * 100);

  // Tính toán số dạng đã master/hoàn thành của các môn học
  const subjectProgressList = activeSubjects.map(sub => {
    const qTypes = getQuestionTypes(selectedGrade, sub);
    const completed = progress.completedLessons.filter(id => getSubjectFromQuestionTypeId(id) === sub).length;
    const percent = qTypes.length > 0 ? Math.round((completed / qTypes.length) * 100) : 0;
    return {
      code: sub,
      name: getSubjectName(sub),
      icon: getSubjectIcon(sub),
      percent
    };
  });

  // Điểm thi thử gần nhất
  const examScore = exams.length > 0 ? `${exams[exams.length - 1].score}/10` : 'Chưa thi';

  // Xác định 3 dạng bài yếu nhất (mastery level thấp nhất và có trong lịch sử làm bài)
  const allTypes = [...allQuestionTypes];
  const weakTypes = allTypes
    .map(type => {
      const level = getStarsFromScore(progress.masteryLevels[type.id] ?? 0);
      // Đếm xem làm sai bao nhiêu câu trong dạng này
      const wrongAttempts = storageService.getAttempts(currentUserId).filter(a => a.questionTypeId === type.id && !a.isCorrect).length;
      return {
        ...type,
        level,
        wrongAttempts
      };
    })
    // Lọc ra các dạng đã từng sờ vào hoặc có mức master thấp
    .filter(item => (item.level < 2 || item.wrongAttempts > 0))
    // Sắp xếp: ưu tiên số lần làm sai nhiều lên trước, rồi tới mức master thấp
    .sort((a, b) => b.wrongAttempts - a.wrongAttempts || a.level - b.level)
    .slice(0, 3);

  // Lấy câu trích dẫn ngẫu nhiên truyền động lực học
  const quotes = [
    "Hành trình vạn dặm bắt đầu từ những bước chân đầu tiên. Hãy giải quyết gọn gàng từng dạng bài hôm nay!",
    "Thi đỗ vào lớp 10 không khó, chỉ cần bạn không lặp lại sai lầm cũ. Hãy ôn lại sổ lỗi sai thường xuyên nhé!",
    "Chăm chỉ cộng phương pháp đúng là chìa khóa của thành công. Roadmap đã sẵn sàng, đi thôi!",
    "Từng câu Toán rút gọn, từng cấu trúc bị động bạn luyện hôm nay chính là bậc thang dẫn tới cánh cổng trường cấp 3 mơ ước."
  ];

  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  const handleFixWeakType = (typeId: string, subjectCode: SubjectCode) => {
    setSubject(subjectCode);
    navigate(`/question-types/${typeId}`);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fade-in">

      {/* 🌟 Minimalist Greeting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-2 font-sans">
            <Sparkles className="text-amber-500 fill-amber-500 shrink-0 animate-float" size={24} />
            Chào {user?.displayName || 'học sinh'}, người chiến thắng!
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-bold italic max-w-2xl leading-relaxed">
            "{quote}"
          </p>
        </div>

        {/* Streak/Level Gamified Badge */}
        <div className="flex items-center gap-2 bg-secondary/40 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-border/20 shadow-sm self-start md:self-center shrink-0">
          <span className="text-xs font-black text-foreground flex items-center gap-1">
            🔥 <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Streak:</span> 5 ngày
          </span>
          <div className="w-px h-4 bg-border/40" />
          <span className="text-xs font-black text-primary flex items-center gap-1">
            ⭐️ <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Level:</span> 12
          </span>
        </div>
      </div>

      {/* 📐 Main Workspace Grid: 2 Columns (Left 2/3 - Core Study Actions, Right 1/3 - Stats & Weaknesses) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 👈 Left Column (2/3 width) - Focus actions & Roadmap */}
        <div className="lg:col-span-2 space-y-6">

          {/* Card Học tiếp nhanh (Core Resume Card) */}
          <Card className="glass border-border/40 shadow-lg rounded-3xl overflow-hidden relative group">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-linear-to-tr from-primary/10 to-indigo-500/10 rounded-full blur-3xl -mr-8 -mt-8 animate-pulse-glow" />
            <CardHeader className="bg-secondary/25 border-b border-border/20 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-amber-500 fill-amber-500 animate-pulse" />
                  <CardTitle className="text-foreground text-sm font-black uppercase tracking-wider font-sans">Học tiếp dạng bài dở dang</CardTitle>
                </div>
                <span className={cn(
                  'text-[9px] font-black px-2.5 py-0.5 rounded-lg border',
                  getSubjectTheme(lastActiveSubject).badge
                )}>
                  {`${getSubjectIcon(lastActiveSubject)} ${getSubjectName(lastActiveSubject)}`}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5 flex flex-col">
              <div className="space-y-2">
                <h3 className="text-base md:text-lg font-black text-foreground leading-snug font-sans group-hover:text-primary transition-colors">
                  {lastActiveType.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold max-w-2xl">
                  {lastActiveType.description || 'Tiếp tục luyện tập dạng bài này để tăng mức độ thành thạo và đạt điểm số tối đa.'}
                </p>
              </div>

              <div className="space-y-2 bg-secondary/20 p-4.5 rounded-2xl border border-border/10">
                <div className="flex items-center justify-between text-xs font-black text-foreground">
                  <span className="flex items-center gap-1">
                    🎯 Tiến độ dạng bài: <span className="text-primary">{lastActivePercent}%</span>
                  </span>
                  <span className="text-amber-500 flex items-center gap-0.5">
                    {lastActiveLevel}/3 ⭐
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-linear-to-r from-primary to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${lastActivePercent}%` }}
                  />
                </div>
              </div>

              <Button
                onClick={() => {
                  setSubject(lastActiveSubject);
                  navigate(`/question-types/${lastActiveType.id}`);
                }}
                className="w-fit px-8 font-black py-3 text-xs bg-linear-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5 animate-pulse-glow self-start"
              >
                Tiếp tục học ngay <ArrowRight size={13} />
              </Button>
            </CardContent>
          </Card>

          {/* Lộ trình học khuyên dùng (Recommended Study Plan) */}
          <Card className="border border-border/40 rounded-3xl shadow-md overflow-hidden">
            <CardHeader className="bg-secondary/15 p-5 border-b border-border/20">
              <CardTitle className="text-foreground font-black text-sm uppercase tracking-wider font-sans">Lộ trình học khuyên dùng hôm nay</CardTitle>
              <CardDescription className="text-xs font-semibold text-muted-foreground mt-1">Các chuyên đề cốt lõi được cá nhân hóa nhằm giúp bạn bứt phá điểm số.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-secondary/20 border border-border/10 hover:border-indigo-500/20 transition-all duration-300 group">
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 border group-hover:scale-105 transition-transform shadow-inner", getSubjectTheme('math').iconBg, getSubjectTheme('math').iconColor, getSubjectTheme('math').border)}>
                    1
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-black text-foreground group-hover:text-indigo-500 transition-colors">📐 Toán: Lập hệ phương trình thực tế</h5>
                    <p className="text-[10px] text-muted-foreground font-bold mt-1 leading-relaxed">
                      Dạng toán chiếm 1.5 - 2 điểm trong cấu trúc đề thi ôn thi vào 10.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-secondary/20 border border-border/10 hover:border-purple-500/20 transition-all duration-300 group">
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 border group-hover:scale-105 transition-transform shadow-inner", getSubjectTheme('english').iconBg, getSubjectTheme('english').iconColor, getSubjectTheme('english').border)}>
                    2
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-black text-foreground group-hover:text-purple-500 transition-colors">🗣️ Anh: Câu bị động (Passive voice)</h5>
                    <p className="text-[10px] text-muted-foreground font-bold mt-1 leading-relaxed">
                      Luôn xuất hiện dưới dạng câu hỏi trắc nghiệm chia động từ hoặc viết lại câu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-secondary/20 border border-border/10 opacity-70 group hover:opacity-100 transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/8 text-emerald-500 border border-emerald-500/10 flex items-center justify-center font-black text-xs shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-black text-foreground group-hover:text-emerald-500 transition-colors">📚 Thi thử tổng hợp</h5>
                    <p className="text-[10px] text-muted-foreground font-bold mt-1 leading-relaxed">
                      Làm quen áp lực thời gian và rèn luyện tâm lý phòng thi thực tế.
                    </p>
                  </div>
                </div>

              </div>

              <Button
                onClick={() => navigate('/roadmap')}
                variant="outline"
                className="w-full font-black py-3 text-xs active:scale-[0.98] border border-border/50 text-foreground hover:text-primary rounded-2xl mt-2 cursor-pointer transition-all"
              >
                Mở bản đồ lộ trình chi tiết <ArrowRight size={13} className="ml-1" />
              </Button>
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

              {/* Danh sách tiến độ các môn */}
              {subjectProgressList.map(subProgress => (
                <div key={subProgress.code} className="p-4 rounded-2xl bg-secondary/25 border border-border/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-black text-foreground">
                    <span className="flex items-center gap-1">{subProgress.icon} Tiến độ {subProgress.name}</span>
                    <span>{subProgress.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        subProgress.code === 'math' ? "bg-linear-to-r from-indigo-500 to-blue-500" :
                        subProgress.code === 'english' ? "bg-linear-to-r from-purple-500 to-pink-500" :
                        "bg-linear-to-r from-emerald-500 to-teal-500"
                      )} 
                      style={{ width: `${subProgress.percent}%` }} 
                    />
                  </div>
                </div>
              ))}

            </CardContent>
          </Card>

          {/* Vùng cảnh báo điểm yếu (Weakness Radar Widget) */}
          <Card className="border border-red-500/15 dark:border-red-500/10 shadow-md shadow-red-500/2 overflow-hidden rounded-3xl">
            <CardHeader className="bg-red-500/4 dark:bg-red-950/10 p-5 border-b border-red-500/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="text-red-500 animate-bounce" size={17} />
                  <CardTitle className="text-red-700 dark:text-red-400 font-black text-sm uppercase tracking-wider font-sans">Lỗ hổng kiến thức</CardTitle>
                </div>
                <span className="text-[8px] bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 font-black px-2 py-0.5 rounded-md border border-red-200/50 dark:border-red-500/10 leading-none">
                  SOS
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-4.5 space-y-3.5">
              {weakTypes.length === 0 ? (
                <div className="p-6 text-center flex flex-col items-center gap-2.5">
                  <CheckCircle className="text-emerald-500" size={36} />
                  <p className="text-xs font-black text-foreground">Bạn không có lỗ hổng lớn nào.</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">Hãy duy trì việc học hàng ngày!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {weakTypes.map((type) => {
                    const subjectCode = getSubjectFromQuestionTypeId(type.id) || 'math';

                    return (
                      <div key={type.id} className="p-3.5 bg-secondary/15 dark:bg-slate-900/30 rounded-2xl border border-border/40 hover:border-red-500/20 transition-all flex flex-col gap-2.5 group">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className={cn(
                              'text-[8px] font-black px-2 py-0.5 rounded-md border leading-none',
                              getSubjectTheme(subjectCode).badge
                            )}>
                              {getSubjectIcon(subjectCode)} {getSubjectName(subjectCode)}
                            </span>
                          </div>
                          <h4 className="font-extrabold text-xs text-foreground group-hover:text-red-500 transition-colors leading-snug">{type.name}</h4>
                        </div>

                        <div className="flex items-center justify-between gap-2 mt-0.5">
                          {type.wrongAttempts > 0 && (
                            <span className="text-[9px] text-red-500 font-extrabold bg-red-500/5 px-2 py-0.5 rounded-md border border-red-500/10">
                              Làm sai: {type.wrongAttempts} lần
                            </span>
                          )}
                          <button
                            onClick={() => handleFixWeakType(type.id, subjectCode)}
                            className="text-[9px] font-black text-red-600 dark:text-red-400 hover:underline flex items-center gap-0.5 cursor-pointer ml-auto"
                          >
                            Khắc phục <ArrowRight size={10} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
};
export default Dashboard;
