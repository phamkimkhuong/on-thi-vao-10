import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { mathTopics, mathQuestionTypes } from '../../data/mathData';
import { englishTopics, englishQuestionTypes } from '../../data/englishData';
import { Card, CardContent } from '../../components/ui/card';
import { Star, ArrowRight, StarOff, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getDifficultyTheme, getStarsFromScore, getTierTheme } from '../../utils/theme';

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, user, progressVersion, isPremium } = useAppStore();
  void progressVersion;
  const progress = storageService.getProgress(user!.uid).masteryLevels;

  const topics = selectedSubject === 'math' ? mathTopics : englishTopics;
  const questionTypes = selectedSubject === 'math' ? mathQuestionTypes : englishQuestionTypes;
  const getMasteryStars = (questionTypeId: string) => getStarsFromScore(progress[questionTypeId] ?? 0);

  const handleSelectType = (id: string) => {
    const qType = questionTypes.find(t => t.id === id);
    const topic = topics.find(t => t.id === qType?.topicId);
    
    if (topic?.tier === 3 && !isPremium) {
      if (window.confirm("Chặng 3 (Mục tiêu điểm 9-10) là đặc quyền dành riêng cho tài khoản Premium. Bạn có muốn nâng cấp lên Premium ngay để mở khóa toàn bộ lộ trình không?")) {
        navigate('/premium');
      }
      return;
    }
    navigate(`/question-types/${id}`);
  };



  const renderMasteryStars = (starsCount: number) => {
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
        : 'Ôn luyện các dạng câu hỏi Trắc nghiệm Ngữ pháp & Từ vựng nền tảng để nắm chắc 5 điểm đầu tiên.'
    },
    {
      id: 2,
      title: '🚀 CHẶNG 2: MỤC TIÊU ĐIỂM 7-8 (Tăng tốc bứt phá)',
      description: selectedSubject === 'math'
        ? 'Tăng tốc với Hệ phương trình, Toán thực tế và Hàm số & Đồ thị để đạt điểm 7-8.'
        : 'Luyện đọc quảng cáo và các cấu trúc biến đổi câu cơ bản (Bị động, Điều kiện...).'
    },
    {
      id: 3,
      title: '👑 CHẶNG 3: CHINH PHỤC ĐIỂM 9-10 (Thủ khoa bứt phá)',
      description: selectedSubject === 'math'
        ? 'Chinh phục chuyên đề Hình học đường tròn để hoàn thiện điểm 9 và vươn tới điểm 10.'
        : 'Làm chủ viết lại câu nâng cao/giới hạn từ, tìm và sửa lỗi sai, sắp xếp câu và đọc hiểu trắc nghiệm.'
    }
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-12">
      {/* Header Giới thiệu Lộ trình */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tight flex items-center justify-center gap-2">
          Lộ trình Ôn thi môn {selectedSubject === 'math' ? '📐 Toán học' : '🗣️ Tiếng Anh'} vào 10
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-semibold">
          Lộ trình tinh gọn giúp bạn nắm chắc kiến thức ôn thi vào 10 toàn diện, tự do rèn luyện và mở khóa mọi dạng bài.
        </p>
      </div>

      {/* Render từng Chặng */}
      <div className="space-y-12">
        {tiers.map((tier) => {
          const tierTopics = topics.filter(t => t.tier === tier.id);

          return (
            <div key={tier.id} className="space-y-6">
              {/* Tiêu đề Chặng */}
              <div className={cn(
                'p-5 rounded-2xl border transition-all duration-300',
                getTierTheme(tier.id).badgeStyle
              )}>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-base font-black tracking-tight">{tier.title}</h3>
                  {tier.id === 3 && !isPremium && (
                    <span className="px-2 py-0.5 text-[8px] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md font-black tracking-widest uppercase shadow-sm animate-pulse">👑 Khóa Premium</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-semibold mt-1.5 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Danh sách các chuyên đề trong chặng */}
              <div className={cn(
                'relative border-l-2 pl-6 ml-4 space-y-10',
                getTierTheme(tier.id).lineStyle
              )}>
                {tierTopics.map((topic, topicIdx) => {
                  const filteredTypes = questionTypes.filter(type => type.topicId === topic.id);

                  return (
                    <div key={topic.id} className="relative">
                      {/* Điểm nút trên trục thời gian */}
                      <div className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center text-[10px] font-black shadow-sm transition-colors bg-primary text-white">
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
                                </h4>
                                <div className="flex items-center gap-1.5">
                                  <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0">
                                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
                                  </div>
                                  <span className="text-[9px] text-primary font-black">{percent}% hoàn thành</span>
                                </div>
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
                                className={`transition-all duration-200 border bg-card ${
                                  stars === 3
                                    ? 'border-emerald-500/20 shadow-sm shadow-emerald-500/5 hover:translate-x-[2px] cursor-pointer hover:border-primary/40'
                                    : 'hover:translate-x-[2px] cursor-pointer hover:border-primary/40'
                                }`}
                                onClick={() => handleSelectType(type.id)}
                              >
                                <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                                  <div className="space-y-2 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className={cn(
                                        'text-[9px] font-bold px-2 py-0.5 rounded-full',
                                        diff.color
                                      )}>
                                        {diff.text}
                                      </span>
                                      {renderMasteryStars(stars)}
                                    </div>

                                    <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5 leading-snug">
                                      {type.name}
                                      {stars === 3 && (
                                        <span title="Đã Master hoàn hảo!">
                                          <Sparkles size={14} className="text-emerald-500 fill-emerald-500 shrink-0 animate-pulse" />
                                        </span>
                                      )}
                                    </h5>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                                      {type.description}
                                    </p>
                                    {type.subTypes && type.subTypes.length > 0 && (
                                      <div className="pt-1.5">
                                        <span className="text-[9px] font-bold text-primary bg-primary/10 dark:bg-primary/20 px-2 py-0.5 rounded-md inline-block select-none">
                                          🎯 Gồm {type.subTypes.length} dạng bài con
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center justify-between border-t border-border/30 pt-3 text-[10px] font-bold text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      📅 Tần suất: {type.examFrequency === 'high' ? 'Hay thi' : 'Trung bình'}
                                    </span>
                                    <span className="text-primary hover:underline flex items-center gap-0.5">
                                      Học chi tiết <ArrowRight size={10} />
                                    </span>
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
