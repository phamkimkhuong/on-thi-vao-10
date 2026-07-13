import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { getTopics, getQuestionTypes } from '../../data';
import { Card, CardContent } from '../../components/ui/card';
import { Star, ArrowRight, StarOff, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getDifficultyTheme, getStarsFromScore, getTierTheme } from '../../utils/theme';
import { getSubjectName, getSubjectIcon } from '../../utils/subject';

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedGrade, user, progressVersion, isPremium } = useAppStore();
  void progressVersion;
  const progress = storageService.getProgress(user!.uid).masteryLevels;

  const topics = getTopics(selectedGrade, selectedSubject);
  const questionTypes = getQuestionTypes(selectedGrade, selectedSubject);
  const getMasteryStars = (questionTypeId: string) => getStarsFromScore(progress[questionTypeId] ?? 0);

  const handleSelectType = (id: string) => {
    const qType = questionTypes.find(t => t.id === id);
    const topic = topics.find(t => t.id === qType?.topicId);
    
    if (topic?.tier === 3 && !isPremium) {
      if (window.confirm("Chặng 3 / Chuyên đề nâng cao là đặc quyền dành riêng cho tài khoản Premium. Bạn có muốn nâng cấp lên Premium ngay để mở khóa toàn bộ lộ trình không?")) {
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

  const tiers = selectedGrade === 'grade9'
    ? [
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
      ]
    : [
        {
          id: 1,
          title: '🎯 HỌC KỲ I (Nền tảng kiến thức mới)',
          description: selectedSubject === 'math'
            ? 'Làm quen và củng cố kiến thức Mệnh đề, Tập hợp, Hàm số bậc hai, Bất phương trình và Hệ thức lượng.'
            : 'Ôn tập ngữ pháp & từ vựng nửa đầu năm học lớp 10 (Thì hiện tại tiếp diễn, tương lai, gerunds).'
        },
        {
          id: 2,
          title: '🚀 HỌC KỲ II (Tăng tốc bứt phá)',
          description: selectedSubject === 'math'
            ? 'Học tốt các chuyên đề về Vectơ, Đại số tổ hợp, Thống kê, Xác suất và Oxy.'
            : 'Học tốt ngữ pháp & từ vựng nửa sau năm học lớp 10 (Mệnh đề quan hệ, câu gián tiếp, điều kiện).'
        },
        {
          id: 3,
          title: '👑 CHUYÊN ĐỀ HỌC TẬP (Mở rộng & Nâng cao)',
          description: selectedSubject === 'math'
            ? 'Chinh phục các chuyên đề học tập tự chọn nâng cao (Conic nâng cao, Hệ phương trình 3 ẩn).'
            : 'Rèn luyện các cấu trúc ngữ pháp học thuật, bài đọc hiểu và viết luận nâng cao.'
        }
      ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-12">
      {/* Header Giới thiệu Lộ trình */}
      <div className="text-center space-y-3.5">
        <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tight flex items-center justify-center gap-2 font-sans">
          {selectedGrade === 'grade9' ? 'Lộ trình Ôn thi' : 'Lộ trình Học tốt'} môn {getSubjectIcon(selectedSubject)} {getSubjectName(selectedSubject)} {selectedGrade === 'grade9' ? 'vào 10' : 'Lớp 10'}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold">
          Lộ trình tinh gọn giúp bạn nắm chắc kiến thức {selectedGrade === 'grade9' ? 'ôn thi vào 10' : 'chương trình lớp 10'} toàn diện, tự do rèn luyện và mở khóa mọi dạng bài.
        </p>
      </div>

      {/* Render từng Chặng */}
      <div className="space-y-16">
        {tiers.map((tier) => {
          const tierTopics = topics.filter(t => t.tier === tier.id);

          return (
            <div key={tier.id} className="space-y-8">
              {/* Tiêu đề Chặng */}
              <div className={cn(
                'p-6 rounded-2xl border transition-all duration-300 shadow-md relative overflow-hidden group',
                getTierTheme(tier.id).badgeStyle
              )}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-current/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="flex items-center justify-between gap-3 flex-wrap relative z-10">
                  <h3 className="text-base font-black tracking-tight uppercase tracking-wider font-sans">{tier.title}</h3>
                  {tier.id === 3 && !isPremium && (
                    <span className="px-2.5 py-0.75 text-[8px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white rounded-md font-black tracking-widest uppercase shadow-sm animate-pulse-glow">👑 Khóa Premium</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-bold mt-2 leading-relaxed relative z-10">
                  {tier.description}
                </p>
              </div>

              {/* Danh sách các chuyên đề trong chặng */}
              <div className={cn(
                'relative border-l-2 pl-8 ml-5 space-y-12',
                getTierTheme(tier.id).lineStyle
              )}>
                {tierTopics.map((topic, topicIdx) => {
                  const filteredTypes = questionTypes.filter(type => type.topicId === topic.id);

                  return (
                    <div key={topic.id} className="relative group/topic">
                      {/* Điểm nút trên trục thời gian */}
                      <div className="absolute -left-[45px] top-0.5 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center text-xs font-black shadow-md transition-all bg-gradient-to-tr from-primary to-indigo-600 text-white group-hover/topic:scale-110 duration-300 animate-pulse-glow">
                        {topicIdx + 1}
                      </div>

                      {/* Chi tiết chuyên đề */}
                      <div className="space-y-5">
                        {(() => {
                          const completedCount = filteredTypes.filter(type => getMasteryStars(type.id) >= 2).length;
                          const percent = filteredTypes.length > 0 ? Math.round((completedCount / filteredTypes.length) * 100) : 0;

                          return (
                            <div className="flex flex-col gap-1.5 pl-1">
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                <h4 className="text-base font-extrabold text-foreground flex items-center gap-2 font-sans group-hover/topic:text-primary transition-colors">
                                  {topic.name}
                                </h4>
                                <div className="flex items-center gap-2">
                                  <div className="h-2 w-20 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shrink-0 shadow-inner">
                                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
                                  </div>
                                  <span className="text-[10px] text-primary font-black">{percent}% hoàn thành</span>
                                </div>
                              </div>
                              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
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
                                className={cn(
                                  "transition-all duration-300 border bg-card hover:-translate-y-1 hover:shadow-md active:scale-[0.99] cursor-pointer rounded-2xl",
                                  stars === 3
                                    ? 'border-emerald-500/20 hover:border-emerald-500/40 shadow-sm shadow-emerald-500/2'
                                    : 'border-border/40 hover:border-primary/30'
                                )}
                                onClick={() => handleSelectType(type.id)}
                              >
                                <CardContent className="p-5.5 flex flex-col justify-between h-full gap-4">
                                  <div className="space-y-2.5 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className={cn(
                                        'text-[9px] font-black px-2.5 py-0.5 rounded-lg border',
                                        diff.color
                                      )}>
                                        {diff.text}
                                      </span>
                                      {renderMasteryStars(stars)}
                                    </div>

                                    <h5 className="font-extrabold text-xs text-foreground flex items-center gap-1.5 leading-snug font-sans">
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
                                      <div className="pt-1">
                                        <span className="text-[9px] font-black text-primary bg-primary/8 dark:bg-primary/15 px-2.5 py-0.75 rounded-md inline-block select-none border border-primary/5">
                                          🎯 Gồm {type.subTypes.length} dạng bài con
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center justify-between border-t border-border/20 pt-3.5 text-[10px] font-bold text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      📅 Tần suất: {type.examFrequency === 'high' ? 'Hay thi' : 'Trung bình'}
                                    </span>
                                    <span className="text-primary hover:underline flex items-center gap-0.5 font-extrabold">
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
