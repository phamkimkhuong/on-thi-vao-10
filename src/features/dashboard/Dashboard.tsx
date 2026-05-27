import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { mathTopics, mathQuestionTypes } from '../../data/mathData';
import { englishTopics, englishQuestionTypes } from '../../data/englishData';
import { 
  Bookmark, 
  Award, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Zap
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { setSubject, user } = useAppStore();

  const currentUserId = user?.uid ?? 'guest';
  const progress = storageService.getProgress(currentUserId);
  const mistakes = storageService.getMistakes(currentUserId).filter(m => m.reviewStatus !== 'fixed');
  const exams = storageService.getExamResults(currentUserId);
  
  // Tìm dạng bài dang dở gần nhất
  const attempts = storageService.getAttempts(currentUserId);
  let lastActiveTypeId: string | null = null;
  if (attempts.length > 0) {
    lastActiveTypeId = attempts[attempts.length - 1].questionTypeId;
  } else {
    lastActiveTypeId = 'math-qt1'; // mặc định chuyên đề 1 Toán
  }

  const allQuestionTypes = [...mathQuestionTypes, ...englishQuestionTypes];
  const lastActiveType = allQuestionTypes.find(qt => qt.id === lastActiveTypeId) || mathQuestionTypes[0];
  const lastActiveSubject = lastActiveType.id.startsWith('math') ? 'math' : 'english';
  const lastActiveLevel = progress.masteryLevels[lastActiveType.id] ?? 0;
  const lastActivePercent = Math.round((lastActiveLevel / 3) * 100);

  // Tính toán số dạng đã master/hoàn thành
  const mathCompleted = progress.completedLessons.filter(id => id.startsWith('math')).length;
  const englishCompleted = progress.completedLessons.filter(id => id.startsWith('eng')).length;
  
  const mathProgress = Math.round((mathCompleted / 6) * 100);
  const englishProgress = Math.round((englishCompleted / 5) * 100);

  // Điểm thi thử gần nhất
  const examScore = exams.length > 0 ? `${exams[exams.length - 1].score}/10` : 'Chưa thi';

  // Xác định xem một dạng bài có bị khóa theo chặng học tập hay không
  const isTypeLocked = (questionTypeId: string): boolean => {
    const isMath = questionTypeId.startsWith('math');
    const topicsList = isMath ? mathTopics : englishTopics;
    const qTypesList = isMath ? mathQuestionTypes : englishQuestionTypes;

    const type = qTypesList.find(qt => qt.id === questionTypeId);
    if (!type) return true;

    const topic = topicsList.find(t => t.id === type.topicId);
    if (!topic) return true;

    const tierId = topic.tier;
    if (tierId === 1) return false;

    const mastery = progress.masteryLevels;

    if (tierId === 2) {
      const tier1Topics = topicsList.filter(t => t.tier === 1);
      const tier1QTs = qTypesList.filter(qt => tier1Topics.some(t => t.id === qt.topicId));
      return !tier1QTs.every(qt => (mastery[qt.id] ?? 0) >= 2);
    }

    if (tierId === 3) {
      const tier1Topics = topicsList.filter(t => t.tier === 1);
      const tier1QTs = qTypesList.filter(qt => tier1Topics.some(t => t.id === qt.topicId));
      const tier1Ok = tier1QTs.every(qt => (mastery[qt.id] ?? 0) >= 2);

      const tier2Topics = topicsList.filter(t => t.tier === 2);
      const tier2QTs = qTypesList.filter(qt => tier2Topics.some(t => t.id === qt.topicId));
      const tier2Ok = tier2QTs.every(qt => (mastery[qt.id] ?? 0) >= 2);

      return !tier1Ok || !tier2Ok;
    }

    return false;
  };

  // Xác định 3 dạng bài yếu nhất (mastery level thấp nhất và có trong lịch sử làm bài, KHÔNG BỊ KHÓA)
  const allTypes = [...mathQuestionTypes, ...englishQuestionTypes];
  const weakTypes = allTypes
    .map(type => {
      const level = progress.masteryLevels[type.id] ?? 0;
      // Đếm xem làm sai bao nhiêu câu trong dạng này
      const wrongAttempts = storageService.getAttempts(currentUserId).filter(a => a.questionTypeId === type.id && !a.isCorrect).length;
      return {
        ...type,
        level,
        wrongAttempts
      };
    })
    // Lọc ra các dạng đã từng sờ vào hoặc có mức master thấp, VÀ KHÔNG BỊ KHÓA
    .filter(item => (item.level < 2 || item.wrongAttempts > 0) && !isTypeLocked(item.id))
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

  const handleFixWeakType = (typeId: string, subjectCode: 'math' | 'english') => {
    setSubject(subjectCode);
    navigate(`/question-types/${typeId}`);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* 🌟 Welcome Card & Motivational Quote */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-indigo-600 to-indigo-700 p-6 md:p-8 text-primary-foreground shadow-lg shadow-primary/10">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Cột trái: Lời chào và Quotes */}
          <div className="space-y-3 md:col-span-2">
            <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
              <Sparkles className="animate-pulse text-amber-400" size={24} />
              Chào bạn, người chiến binh ôn thi vào 10!
            </h2>
            <p className="text-xs md:text-sm text-indigo-100 font-semibold italic max-w-2xl leading-relaxed">
              "{quote}"
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => navigate('/roadmap')}
                variant="secondary"
                className="font-extrabold text-xs px-4 py-2 bg-white hover:bg-indigo-50 text-primary active:scale-[0.98] rounded-xl flex items-center gap-1 cursor-pointer"
              >
                Khám phá bản đồ lộ trình <ArrowRight size={12} />
              </Button>
            </div>
          </div>

          {/* Cột phải: Thẻ "Học tiếp nhanh" (Quick Resume) dạng Glassmorphism */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4.5 rounded-xl space-y-3 shadow-md">
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 flex items-center gap-1.5">
              <Zap size={12} className="text-amber-300 animate-pulse fill-amber-300" /> HỌC TIẾP DẠNG BÀI
            </div>
            
            <div className="space-y-1">
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-white/20 text-white">
                {lastActiveSubject === 'math' ? '📐 Toán' : '🗣️ Anh'}
              </span>
              <h4 className="font-extrabold text-xs text-white truncate mt-1">
                {lastActiveType.name}
              </h4>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-[9px] font-bold text-indigo-100">
                <span>Thành thạo: {lastActivePercent}%</span>
                <span>{lastActiveLevel}/3⭐</span>
              </div>
              <div className="h-1 w-full bg-white/25 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${lastActivePercent}%` }} />
              </div>
            </div>

            <Button
              onClick={() => {
                setSubject(lastActiveSubject);
                navigate(`/question-types/${lastActiveType.id}`);
              }}
              className="w-full font-black py-2 mt-1 text-[11px] bg-amber-400 hover:bg-amber-300 text-slate-900 border-none shadow-sm active:scale-[0.98] rounded-lg flex items-center justify-center gap-1 cursor-pointer"
            >
              Luyện tiếp tục <ArrowRight size={12} />
            </Button>
          </div>
        </div>
        
        {/* Background decorative bubbles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl" />
      </div>

      {/* 📊 Key Progress Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <Card className="hover:translate-y-[-2px] transition-all">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center">
              <Bookmark size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-semibold leading-none mb-1.5">SỔ LỖI SAI</p>
              <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">
                {mistakes.length} <span className="text-xs font-bold text-muted-foreground">câu</span>
              </h3>
              <p className="text-[10px] text-muted-foreground mt-1 font-semibold">Chưa khắc phục xong</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:translate-y-[-2px] transition-all">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <Award size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-semibold leading-none mb-1.5">ĐỀ THI GẦN NHẤT</p>
              <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">
                {examScore}
              </h3>
              <p className="text-[10px] text-muted-foreground mt-1 font-semibold">Đánh giá thực chiến</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:translate-y-[-2px] transition-all">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
              📐
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-semibold leading-none mb-1.5">TIẾN ĐỘ TOÁN</p>
              <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">
                {mathProgress}%
              </h3>
              <Progress value={mathProgress} className="h-1.5 mt-1.5" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:translate-y-[-2px] transition-all">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 text-violet-500 flex items-center justify-center">
              🗣️
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-semibold leading-none mb-1.5">TIẾN ĐỘ ANH</p>
              <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">
                {englishProgress}%
              </h3>
              <Progress value={englishProgress} className="h-1.5 mt-1.5" />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* ⚡ Split Layout: Weak Zones vs Next Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 🚨 Red Zone: Weakest Topics (Vùng kiến thức cần khắc phục) */}
        <Card className="lg:col-span-2 border-red-500/20 dark:border-red-500/10 shadow-sm shadow-red-500/5">
          <CardHeader className="bg-red-50/30 dark:bg-red-950/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 animate-bounce" size={20} />
                <CardTitle className="text-red-600 dark:text-red-400">Vùng cảnh báo: Điểm yếu của bạn</CardTitle>
              </div>
              <span className="text-[10px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Khẩn cấp
              </span>
            </div>
            <CardDescription className="text-red-600/80 dark:text-red-400/80 font-medium">
              Hệ thống tự động phát hiện các dạng bài bạn đang gặp khó khăn (tỷ lệ trả lời sai cao hoặc chưa học sâu).
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {weakTypes.length === 0 ? (
              <div className="p-8 text-center flex flex-col items-center gap-3">
                <CheckCircle className="text-emerald-500" size={40} />
                <p className="text-sm font-bold text-foreground">Tuyệt vời! Hiện tại bạn không có điểm yếu nào nổi bật.</p>
                <p className="text-xs text-muted-foreground">Hãy tiếp tục duy trì phong độ bằng cách học bài mới và thi thử.</p>
              </div>
            ) : (
              <div className="divide-y divide-border/30">
                {weakTypes.map((type) => {
                  const subjectCode = type.id.startsWith('math') ? 'math' : 'english';
                  const isMath = subjectCode === 'math';
                  
                  return (
                    <div key={type.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/10 transition-colors">
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isMath ? 'bg-indigo-100 dark:bg-indigo-950 text-primary' : 'bg-violet-100 dark:bg-violet-950 text-violet-500'
                          }`}>
                            {isMath ? '📐 Toán' : '🗣️ Anh'}
                          </span>
                          <span className="text-xs text-muted-foreground font-bold flex items-center gap-1">
                            <Zap size={12} className="text-amber-500" /> Tần suất thi: {type.examFrequency === 'high' ? 'Cao' : 'Trung bình'}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-sm text-foreground truncate">{type.name}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{type.description}</p>
                        
                        {type.wrongAttempts > 0 && (
                          <div className="flex items-center gap-1.5 text-[10px] text-red-500 font-semibold mt-1">
                            <span>Làm sai trong quá khứ: {type.wrongAttempts} lần</span>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        onClick={() => handleFixWeakType(type.id, subjectCode)}
                        variant="outline"
                        size="sm"
                        className="self-start sm:self-center font-bold text-xs hover:border-red-500/50 border-border/50 text-foreground shrink-0 border"
                      >
                        Khắc phục <ArrowRight size={12} className="ml-1" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 📚 Roadmap & Recommended Study Plan (Tác vụ tiếp theo) */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-foreground">Lộ trình học khuyên dùng</CardTitle>
            <CardDescription>Các chuyên đề cốt lõi giúp bạn lấy điểm tối đa.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="space-y-3 flex-1">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/30">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-indigo-500/10">
                  1
                </div>
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-foreground">📐 Toán: Lập hệ phương trình thực tế</h5>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-0.5 leading-relaxed">
                    Dạng toán chiếm 1.5 - 2 điểm trong cấu trúc đề thi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/30">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold text-sm shrink-0 border border-violet-500/10">
                  2
                </div>
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-foreground">🗣️ Anh: Câu bị động (Passive voice)</h5>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-0.5 leading-relaxed">
                    Luôn có trong câu hỏi trắc nghiệm chia động từ/biến đổi câu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border/30 opacity-70">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-500/10">
                  3
                </div>
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-foreground">📚 Thi thử tổng hợp</h5>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-0.5 leading-relaxed">
                    Kiểm tra toàn diện năng lực và làm quen áp lực phòng thi.
                  </p>
                </div>
              </div>

            </div>

            <Button 
              onClick={() => navigate('/roadmap')}
              className="w-full font-bold py-2.5 mt-auto text-xs active:scale-[0.98]"
            >
              Mở bản đồ lộ trình chi tiết
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};
export default Dashboard;
