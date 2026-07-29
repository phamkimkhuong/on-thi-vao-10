import React from 'react';
import { Maximize2, Pause, Play, RotateCcw, X } from 'lucide-react';
import type { Question, QuestionMedia } from '../../types';
import { cn } from '../../utils/cn';
import { LatexRenderer } from './LatexRenderer';

interface QuestionStimulusRendererProps {
  question: Question;
  className?: string;
}

const MediaFigure: React.FC<{
  media: QuestionMedia;
  onZoom: (media: QuestionMedia) => void;
}> = ({ media, onZoom }) => (
  <figure className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
    <button
      type="button"
      onClick={() => onZoom(media)}
      aria-label={`Phóng to hình: ${media.alt}`}
      className="group relative block min-h-11 w-full cursor-zoom-in overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-inset dark:bg-slate-950"
    >
      <img
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
        className="h-auto max-h-[28rem] w-full object-contain transition-transform duration-200 group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:transform-none"
      />
      <span className="absolute right-3 top-3 flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/70 bg-slate-950/70 text-white shadow-lg backdrop-blur-sm">
        <Maximize2 size={18} aria-hidden="true" />
      </span>
    </button>
    {(media.caption || media.credit) && (
      <figcaption className="space-y-1 border-t border-border/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {media.caption && <p className="font-semibold text-foreground">{media.caption}</p>}
        {media.credit && <p>Nguồn: {media.credit}</p>}
      </figcaption>
    )}
    {media.longDescription && (
      <details className="border-t border-border/40 px-4 py-3 text-xs text-muted-foreground">
        <summary className="min-h-11 cursor-pointer font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
          Mô tả chi tiết hình
        </summary>
        <p className="mt-2 leading-relaxed">{media.longDescription}</p>
      </details>
    )}
  </figure>
);

export const QuestionStimulusRenderer: React.FC<QuestionStimulusRendererProps> = ({ question, className }) => {
  const [activeMedia, setActiveMedia] = React.useState<QuestionMedia | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const [audioPlayCount, setAudioPlayCount] = React.useState(0);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const stimulus = question.stimulus;
  const mediaItems = [...(stimulus?.media ?? []), ...(question.media ?? [])];

  React.useEffect(() => {
    if (!activeMedia) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMedia(null);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMedia]);

  React.useEffect(() => () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [question.id]);

  const playAudio = () => {
    if (!stimulus?.audioText || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(stimulus.audioText);
    utterance.lang = stimulus.audioLanguage ?? 'en-US';
    utterance.rate = stimulus.audioPlaybackRate ?? 0.92;
    utterance.onend = () => setIsAudioPlaying(false);
    utterance.onerror = () => setIsAudioPlaying(false);
    setIsAudioPlaying(true);
    setAudioPlayCount(count => count + 1);
    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
  };

  if (!stimulus && mediaItems.length === 0) return null;

  return (
    <>
      <section
        aria-label={stimulus?.title ?? 'Ngữ liệu câu hỏi'}
        className={cn('space-y-4 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 sm:p-5', className)}
      >
        {(stimulus?.title || stimulus?.content) && (
          <div className="space-y-2">
            {stimulus.title && <h3 className="text-sm font-black text-foreground">{stimulus.title}</h3>}
            {stimulus.content && (
              <div className="text-sm font-semibold leading-relaxed text-muted-foreground">
                <LatexRenderer text={stimulus.content} />
              </div>
            )}
          </div>
        )}

        {stimulus?.audioText && (
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3">
            <button
              type="button"
              onClick={isAudioPlaying ? stopAudio : playAudio}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
            >
              {isAudioPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
              {isAudioPlaying ? 'Tạm dừng' : audioPlayCount > 0 ? 'Nghe lại' : 'Phát bài nghe'}
            </button>
            {audioPlayCount > 0 && !isAudioPlaying && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
                <RotateCcw size={14} aria-hidden="true" />
                Đã phát {audioPlayCount} lần
              </span>
            )}
            <span className="text-[11px] font-semibold text-muted-foreground">
              Nghe trọn đoạn trước khi chọn đáp án. Transcript chỉ xuất hiện trong lời giải.
            </span>
          </div>
        )}

        {mediaItems.length > 0 && (
          <div className={cn('grid grid-cols-1 gap-4', mediaItems.length > 1 && 'lg:grid-cols-2')}>
            {mediaItems.map(media => <MediaFigure key={media.id} media={media} onZoom={setActiveMedia} />)}
          </div>
        )}

        {stimulus?.dataTable && (
          <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
            <table className="w-full min-w-[32rem] border-collapse text-left text-xs">
              <caption className="border-b border-border/60 px-4 py-3 text-left font-bold text-foreground">
                {stimulus.dataTable.caption}
              </caption>
              <thead className="bg-secondary/60 text-foreground">
                <tr>
                  {stimulus.dataTable.columns.map(column => (
                    <th key={column.key} scope="col" className="px-4 py-3 font-black">
                      {column.label}{column.unit ? ` (${column.unit})` : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stimulus.dataTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-border/40 even:bg-secondary/20">
                    {stimulus.dataTable?.columns.map((column, columnIndex) => (
                      <td key={column.key} className="px-4 py-3 font-semibold text-muted-foreground">
                        {columnIndex === 0 ? <span className="font-bold text-foreground">{row[column.key]}</span> : row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {activeMedia && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Hình phóng to: ${activeMedia.alt}`}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={event => {
            if (event.target === event.currentTarget) setActiveMedia(null);
          }}
        >
          <div className="relative flex max-h-[95dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-border/60 px-4 py-3">
              <p className="line-clamp-2 text-sm font-bold text-foreground">{activeMedia.caption ?? activeMedia.alt}</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveMedia(null)}
                aria-label="Đóng hình phóng to"
                className="flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="min-h-0 overflow-auto bg-white p-3 dark:bg-slate-950 sm:p-5">
              <img
                src={activeMedia.src}
                alt={activeMedia.alt}
                width={activeMedia.width}
                height={activeMedia.height}
                className="mx-auto h-auto max-w-full object-contain"
              />
            </div>
            {activeMedia.longDescription && (
              <p className="max-h-28 overflow-auto border-t border-border/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                {activeMedia.longDescription}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionStimulusRenderer;
