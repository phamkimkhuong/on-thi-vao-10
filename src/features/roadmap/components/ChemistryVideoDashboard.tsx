import React, { useState } from 'react';
import { g10ChemistryVideos, ChemistryChapterVideo } from '../../../data/grade10/chemistry/videos';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Play, Tv, Sparkles } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const ChemistryVideoDashboard: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<ChemistryChapterVideo>(g10ChemistryVideos[0]);

  // Bộ lọc tách ID YouTube từ bất kỳ định dạng link nào (watch?v=, youtu.be, embed, v.v.)
  const getYouTubeId = (url: string): string => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const activeVideoId = getYouTubeId(activeVideo.youtubeUrl);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Giới thiệu bài giảng */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border border-emerald-500/10 p-6 flex items-center justify-between gap-6">
        <div className="space-y-1.5 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <Tv className="w-3.5 h-3.5" />
            BÀI GIẢNG ĐIỆN TỬ HÓA HỌC 10
          </div>
          <h3 className="text-xl md:text-2xl font-black text-foreground">
            Học qua Video Trực Quan sinh động
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground font-semibold">
            Tận dụng sức mạnh của hình ảnh và âm thanh giúp bạn hiểu sâu hơn bản chất nguyên tử, liên kết và các phản ứng hóa học phức tạp.
          </p>
        </div>
        <div className="hidden sm:block p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-500 shrink-0">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Cột trái (7/12): Trình phát video chính */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="relative overflow-hidden rounded-3xl bg-black border border-slate-800 shadow-2xl aspect-video group">
            {activeVideoId ? (
              <iframe
                title={activeVideo.chapterName}
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1&autoplay=0`}
                className="absolute inset-0 w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-950 p-6 text-center">
                <Tv className="w-16 h-16 text-rose-600 mb-3" />
                <p className="text-sm font-bold text-slate-200">Không thể tải trình phát video</p>
                <p className="text-xs text-slate-500 mt-1">Đường dẫn video '{activeVideo.youtubeUrl}' không đúng định dạng.</p>
              </div>
            )}
          </div>

          {/* Chi tiết video đang phát */}
          <Card className="border-emerald-500/10 shadow-lg rounded-2xl bg-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500" />
            <CardHeader className="p-6 pb-3">
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-1">
                Đang phát video bài giảng:
              </span>
              <CardTitle className="text-foreground text-base md:text-lg font-black leading-snug">
                {activeVideo.chapterName}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4 text-xs font-semibold leading-relaxed text-muted-foreground">
              <p className="text-foreground/90 font-medium">
                {activeVideo.description}
              </p>
              
              <div className="p-4 bg-emerald-500/[0.02] dark:bg-emerald-950/[0.02] border border-emerald-500/10 rounded-2xl flex items-start gap-3">
                <span className="text-emerald-500 shrink-0 text-sm mt-0.5">💡</span>
                <p className="text-[11px] font-semibold text-emerald-700/90 dark:text-emerald-400/90">
                  <strong className="text-foreground">Lời khuyên học tốt:</strong> Nên xem kỹ bài giảng video này từ đầu đến cuối trước khi đọc tài liệu lý thuyết chi tiết để có cái nhìn tổng quan và hệ thống hóa kiến thức một cách khoa học nhất.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cột phải (5/12): Danh sách Playlist */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-4">
          <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block pl-1">
            DANH SÁCH BÀI GIẢNG ({g10ChemistryVideos.length} CHƯƠNG):
          </label>
          
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1.5 scrollbar-thin">
            {g10ChemistryVideos.map((video, index) => {
              const isPlaying = activeVideo.chapterId === video.chapterId;
              
              return (
                <div
                  key={video.chapterId}
                  onClick={() => setActiveVideo(video)}
                  className={cn(
                    "p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none flex items-center justify-between gap-4 bg-card",
                    isPlaying
                      ? "border-emerald-500 shadow-md shadow-emerald-500/5 bg-gradient-to-br from-card to-emerald-500/[0.01] ring-1 ring-emerald-500/25"
                      : "border-border/65 hover:border-emerald-500/40 hover:-translate-y-0.5 hover:shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors shadow-xs",
                      isPlaying
                        ? "bg-emerald-500 text-white"
                        : "bg-secondary text-muted-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-500"
                    )}>
                      {isPlaying ? (
                        <Play className="w-3.5 h-3.5 fill-white" />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="min-w-0 space-y-0.5">
                      <h4 className={cn(
                        "text-xs font-black truncate leading-snug transition-colors",
                        isPlaying ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"
                      )}>
                        {video.chapterName}
                      </h4>
                      <p className="text-[10px] text-muted-foreground font-semibold truncate max-w-xs">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <span className={cn(
                    "shrink-0 text-[8px] font-black px-2 py-0.75 rounded-md uppercase tracking-wider border",
                    isPlaying
                      ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400 animate-pulse"
                      : "bg-secondary border-transparent text-muted-foreground"
                  )}>
                    {isPlaying ? 'Đang phát' : 'Chờ xem'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ChemistryVideoDashboard;
