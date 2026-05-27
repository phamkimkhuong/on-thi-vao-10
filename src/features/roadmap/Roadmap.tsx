import React, { useState } from 'react';
import { useAppStore } from '../../services/store';
import { storageService } from '../../services/storage';
import { mathTopics, mathQuestionTypes } from '../../data/mathData';
import { englishTopics, englishQuestionTypes } from '../../data/englishData';
import { Card, CardContent } from '../../components/ui/card';
import { Star, ArrowRight, StarOff, Sparkles } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const { selectedSubject, selectQuestionType, setView } = useAppStore();
  const [progress] = useState<Record<string, number>>(() => storageService.getProgress().masteryLevels);

  const topics = selectedSubject === 'math' ? mathTopics : englishTopics;
  const questionTypes = selectedSubject === 'math' ? mathQuestionTypes : englishQuestionTypes;

  const handleSelectType = (id: string) => {
    selectQuestionType(id);
    setView('question-type');
  };

  const getDifficultyLabel = (difficulty: 'easy' | 'medium' | 'hard') => {
    switch (difficulty) {
      case 'easy': return { text: 'Cơ bản', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400' };
      case 'medium': return { text: 'Trung bình', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400' };
      case 'hard': return { text: 'Nâng cao', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400' };
    }
  };

  // Render các sao đánh giá mức độ Master của dạng bài
  const renderMasteryStars = (level: number) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      if (i <= level) {
        stars.push(<Star key={i} size={15} className="fill-amber-400 text-amber-400" />);
      } else {
        stars.push(<StarOff key={i} size={15} className="text-slate-300 dark:text-slate-700" />);
      }
    }
    return (
      <div className="flex gap-0.5" title={`Mức độ thành thạo: ${level}/3 (Master)`}>
        {stars}
      </div>
    );
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Header Giới thiệu Lộ trình */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-2">
          Lộ trình ôn thi môn {selectedSubject === 'math' ? '📐 Toán học' : '🗣️ Tiếng Anh'} vào 10
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Được thiết kế bám sát ma trận đề thi. Luyện từng dạng bài một cách bài bản, nâng cao mức độ Master để chinh phục điểm 9, 10.
        </p>
      </div>

      {/* Cây Chuyên Đề (Roadmap Tree) */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-4 space-y-12">
        
        {topics.map((topic, topicIndex) => {
          const filteredTypes = questionTypes.filter(type => type.topicId === topic.id);
          
          return (
            <div key={topic.id} className="relative">
              
              {/* Điểm nút trên trục thời gian */}
              <div className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center text-white text-[10px] font-black shadow-sm">
                {topicIndex + 1}
              </div>

              {/* Chi tiết chuyên đề */}
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    {topic.name}
                  </h3>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                    {filteredTypes.length} dạng bài thi cốt lõi
                  </span>
                </div>

                {/* Danh sách các Dạng bài của chuyên đề */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTypes.map((type) => {
                    const level = progress[type.id] ?? 0;
                    const diff = getDifficultyLabel(type.difficulty);
                    
                    return (
                      <Card 
                        key={type.id} 
                        className={`hover:translate-x-[2px] cursor-pointer hover:border-primary/40 border transition-all duration-200 bg-card ${
                          level === 3 ? 'border-emerald-500/20 shadow-sm shadow-emerald-500/5' : ''
                        }`}
                        onClick={() => handleSelectType(type.id)}
                      >
                        <CardContent className="p-5 flex flex-col justify-between h-full gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${diff.color}`}>
                                {diff.text}
                              </span>
                              {renderMasteryStars(level)}
                            </div>
                            
                            <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5 leading-snug">
                              {type.name}
                              {level === 3 && (
                                <span title="Đã Master hoàn hảo!">
                                  <Sparkles size={14} className="text-emerald-500 fill-emerald-500 shrink-0" />
                                </span>
                              )}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              {type.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-border/30 pt-3 text-[11px] font-semibold text-muted-foreground">
                            <span className="flex items-center gap-1">
                              📅 Thi: {type.examFrequency === 'high' ? 'Hay thi (Cao)' : 'Trung bình'}
                            </span>
                            <span className="text-primary hover:underline flex items-center gap-0.5">
                              Học chi tiết <ArrowRight size={12} />
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
};
export default Roadmap;
