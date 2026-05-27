import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { mathTopics, mathQuestionTypes } from '../../data/mathData';
import { englishTopics, englishQuestionTypes } from '../../data/englishData';
import { Card, CardContent } from '../../components/ui/card';
import { Star, ArrowRight, StarOff, Sparkles, Lock } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getDifficultyTheme, getStarsFromScore, getTierTheme } from '../../utils/theme';

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, user, progressVersion } = useAppStore();
  void progressVersion;
  const progress = storageService.getProgress(user?.uid ?? 'guest').masteryLevels;

  const topics = selectedSubject === 'math' ? mathTopics : englishTopics;
  const questionTypes = selectedSubject === 'math' ? mathQuestionTypes : englishQuestionTypes;
  const getMasteryStars = (questionTypeId: string) => getStarsFromScore(progress[questionTypeId] ?? 0);

  const isTierLocked = (tierId: number): boolean => {
    if (tierId === 1) return false;

    if (tierId === 2) {
      const tier1Topics = topics.filter(t => t.tier === 1);
      const tier1QTs = questionTypes.filter(qt => tier1Topics.some(t => t.id === qt.topicId));
      return !tier1QTs.every(qt => getMasteryStars(qt.id) >= 2);
    }

    if (tierId === 3) {
      const tier1Topics = topics.filter(t => t.tier === 1);
      const tier1QTs = questionTypes.filter(qt => tier1Topics.some(t => t.id === qt.topicId));
      const tier1Ok = tier1QTs.every(qt => getMasteryStars(qt.id) >= 2);

      const tier2Topics = topics.filter(t => t.tier === 2);
      const tier2QTs = questionTypes.filter(qt => tier2Topics.some(t => t.id === qt.topicId));
      const tier2Ok = tier2QTs.every(qt => getMasteryStars(qt.id) >= 2);

      return !tier1Ok || !tier2Ok;
    }

    return false;
  };

  const handleSelectType = (id: string, isLocked: boolean) => {
    if (isLocked) {
      alert('🔒 Dạng bài này đang được khóa!\n\nHãy tập trung luyện tập đạt từ 2⭐ ở các dạng bài của chặng trước để mở khóa nhé. Học căn bản trước sẽ giúp bạn nắm chắc điểm 5 dễ dàng!');
      return;
    }
    navigate(`/question-types/${id}`);
  };



  const renderMasteryStars = (starsCount: number, isLocked: boolean) => {
    if (isLocked) {
      return (
        <div className="flex gap-0.5 opacity-40">
          <StarOff size={15} className="text-slate-300 dark:text-slate-700" />
          <StarOff size={15} className="text-slate-300 dark:text-slate-700" />
          <StarOff size={15} className="text-slate-300 dark:text-slate-700" />
        </div>
      );
    }
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      if (i <= starsCount) {
        stars.push(<Star key={i} size={15} className="fill-amber-400 text-amber-400 animate-pulse" />);
      } else {
        stars.push(<StarOff key={i} size={15} className="text-slate-300 dark:text-slate-700" />);
      }
    }
    return (
      <div className="flex gap-0.5" title={`Mức độ thành thạo: ${starsCount}/3 (Master)`}>
        {stars}
      </div>
    );
  };

  const tiers = [
    {
      id: 1,
      title: '🎯 CHẶNG 1: ĐẢM BẢO ĐIỂM 5 (Vững vàng nền tảng)',
      description: selectedSubject === 'math'
        ? 'Luyện thật chắc Đại số nền tảng & Căn thức để nắm chắc 5 điểm đầu tiên của đề thi.'
        : 'Ôn tập nhuần nhuyễn phần Ngữ âm cơ bản để quét trọn vẹn điểm phần phát âm/trọng âm.'
    },
    {
      id: 2,
      title: '🚀 CHẶNG 2: MỤC TIÊU ĐIỂM 7-8 (Tăng tốc bứt phá)',
      description: selectedSubject === 'math'
        ? 'Tăng tốc với Hệ phương trình, Toán thực tế và Hàm số & Đồ thị để đạt điểm 7-8.'
        : 'Nắm chắc kiến thức Từ vựng & Ngữ pháp nâng cao (Bị động, Điều kiện, Mệnh đề quan hệ).'
    },
    {
      id: 3,
      title: '👑 CHẶNG 3: CHINH PHỤC ĐIỂM 9-10 (Thủ khoa bứt phá)',
      description: selectedSubject === 'math'
        ? 'Chinh phục chuyên đề Hình học đường tròn để hoàn thiện điểm 9 và vươn tới điểm 10.'
        : 'Làm quen với các dạng bài Đọc hiểu chuyên sâu và Viết lại câu nâng cao.'
    }
  ];

  const firstLockedTierId = tiers.find(t => isTierLocked(t.id))?.id;

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-12">
      {/* Header Giới thiệu Lộ trình */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tight flex items-center justify-center gap-2">
          Lộ trình Ôn thi môn {selectedSubject === 'math' ? '📐 Toán học' : '🗣️ Tiếng Anh'} vào 10
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-semibold">
          Lộ trình mở khóa thông minh giúp bạn học tập không ngợp. Vững chắc 5 điểm cơ bản trước khi mở khóa chinh phục các mốc điểm 8, 9, 10 cao hơn.
        </p>
      </div>

      {/* Render từng Chặng */}
      <div className="space-y-12">
        {tiers.map((tier) => {
          const tierTopics = topics.filter(t => t.tier === tier.id);
          const isLocked = isTierLocked(tier.id);

          if (isLocked) {
            if (tier.id === firstLockedTierId) {
              return (
                <div
                  key={tier.id}
                  className="relative p-8 rounded-3xl border border-dashed border-primary/30 bg-gradient-to-br from-slate-100/50 to-slate-200/30 dark:from-slate-900/60 dark:to-purple-950/20 backdrop-blur-md overflow-hidden text-center space-y-4 shadow-xl transition-all duration-500 hover:border-primary/50 group"
                >
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/5 relative">
                    <Lock size={32} className="animate-pulse" />
                    <Sparkles size={16} className="absolute -top-1 -right-1 text-amber-400 fill-amber-400 animate-bounce" />
                  </div>

                  <div className="flex justify-center gap-2 pt-2 relative z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  </div>
                </div>
              );
            }
            return null;
          }

          return (
            <div key={tier.id} className="space-y-6">
              {/* Tiêu đề Chặng */}
              <div className={cn(
                'p-5 rounded-2xl border transition-all duration-300',
                isLocked
                  ? 'bg-slate-100/50 dark:bg-slate-900/10 border-border/40 opacity-60'
                  : getTierTheme(tier.id).badgeStyle
              )}>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-black tracking-tight">{tier.title}</h3>
                  {isLocked && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-muted-foreground flex items-center gap-1">
                      <Lock size={10} /> ĐANG KHÓA
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-semibold mt-1.5 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Danh sách các chuyên đề trong chặng */}
              <div className={cn(
                'relative border-l-2 pl-6 ml-4 space-y-10',
                isLocked ? 'border-border/30 opacity-60' : getTierTheme(tier.id).lineStyle
              )}>
                {tierTopics.map((topic, topicIdx) => {
                  const filteredTypes = questionTypes.filter(type => type.topicId === topic.id);

                  return (
                    <div key={topic.id} className="relative">
                      {/* Điểm nút trên trục thời gian */}
                      <div className={`absolute -left-[35px] top-0.5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center text-[10px] font-black shadow-sm transition-colors ${isLocked
                        ? 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                        : 'bg-primary text-white'
                        }`}>
                        {topicIdx + 1}
                      </div>

                      {/* Chi tiết chuyên đề */}
                      <div className="space-y-4">
                        {(() => {
                          const completedCount = filteredTypes.filter(type => getMasteryStars(type.id) >= 2).length;
                          const percent = filteredTypes.length > 0 ? Math.round((completedCount / filteredTypes.length) * 100) : 0;

                          return (
                            <div className="flex flex-col gap-1.5">
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <h4 className="text-sm font-black text-foreground flex items-center gap-2">
                                  {topic.name}
                                  {isLocked && <Lock size={12} className="text-muted-foreground" />}
                                </h4>
                                {!isLocked && (
                                  <div className="flex items-center gap-1.5">
                                    <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                                      <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
                                    </div>
                                    <span className="text-[9px] text-primary font-black">{percent}% hoàn thành</span>
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                                {filteredTypes.length} dạng bài thi cốt lõi
                              </span>
                            </div>
                          );
                        })()}

                        {/* Danh sách dạng bài */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredTypes.map((type) => {
                            const stars = getMasteryStars(type.id);
                            const diff = getDifficultyTheme(type.difficulty);

                            return (
                              <Card
                                key={type.id}
                                className={`transition-all duration-200 border bg-card ${isLocked
                                  ? 'border-border/20 opacity-70 cursor-not-allowed hover:bg-slate-50/10'
                                  : stars === 3
                                    ? 'border-emerald-500/20 shadow-sm shadow-emerald-500/5 hover:translate-x-[2px] cursor-pointer hover:border-primary/40'
                                    : 'hover:translate-x-[2px] cursor-pointer hover:border-primary/40'
                                  }`}
                                onClick={() => handleSelectType(type.id, isLocked)}
                              >
                                <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                                  <div className="space-y-2 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className={cn(
                                        'text-[9px] font-bold px-2 py-0.5 rounded-full',
                                        isLocked ? 'bg-secondary text-muted-foreground' : diff.color
                                      )}>
                                        {diff.text}
                                      </span>
                                      {renderMasteryStars(stars, isLocked)}
                                    </div>

                                    <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5 leading-snug">
                                      {type.name}
                                      {stars === 3 && !isLocked && (
                                        <span title="Đã Master hoàn hảo!">
                                          <Sparkles size={14} className="text-emerald-500 fill-emerald-500 shrink-0 animate-pulse" />
                                        </span>
                                      )}
                                    </h5>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                                      {type.description}
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-border/30 pt-3 text-[10px] font-bold text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      📅 Tần suất: {type.examFrequency === 'high' ? 'Hay thi' : 'Trung bình'}
                                    </span>
                                    {!isLocked ? (
                                      <span className="text-primary hover:underline flex items-center gap-0.5">
                                        Học chi tiết <ArrowRight size={10} />
                                      </span>
                                    ) : (
                                      <span className="text-muted-foreground flex items-center gap-0.5">
                                        <Lock size={10} /> Đang khóa
                                      </span>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Roadmap;
