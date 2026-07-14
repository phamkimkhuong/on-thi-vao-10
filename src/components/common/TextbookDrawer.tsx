import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, Minimize2, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TextbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pages: number[];
  bookName: string;
}

export const TextbookDrawer: React.FC<TextbookDrawerProps> = ({
  isOpen,
  onClose,
  pages,
  bookName
}) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Reset active page and zoom when pages array changes
  useEffect(() => {
    setActivePageIndex(0);
    setZoomScale(1);
  }, [pages]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isFullscreen]);

  if (!isOpen || pages.length === 0) return null;

  const currentPageNum = pages[activePageIndex];
  const r2PublicUrl = import.meta.env.VITE_R2_PUBLIC_URL || 'https://pub-2d2aecd54c5d4fbaa53c59d09c29b464.r2.dev';
  const imageUrl = `${r2PublicUrl}/chemistry/page_${currentPageNum}.png`;

  const handlePrevPage = () => {
    if (activePageIndex > 0) {
      setActivePageIndex(activePageIndex - 1);
      setZoomScale(1); // reset zoom on page change
    }
  };

  const handleNextPage = () => {
    if (activePageIndex < pages.length - 1) {
      setActivePageIndex(activePageIndex + 1);
      setZoomScale(1); // reset zoom on page change
    }
  };

  const handleZoomIn = () => {
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Sliding Drawer Container */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 bg-card border-l border-border shadow-2xl flex flex-col transition-all duration-300 animate-slide-in",
          isFullscreen ? "w-full max-w-full" : "w-full max-w-2xl"
        )}
      >
        {/* Header toolbar */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 select-none">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            <div>
              <h3 className="text-xs font-black text-foreground">
                {bookName}
              </h3>
              <p className="text-[10px] font-bold text-muted-foreground">
                Đang đọc Trang {currentPageNum} (Bài {activePageIndex + 1}/{pages.length} của phần này)
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-secondary/80 rounded-xl p-1 border border-border/40">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 0.75}
                title="Thu nhỏ"
                className="p-1.5 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
              >
                <ZoomOut size={14} />
              </button>
              <span className="text-[10px] font-black w-10 text-center text-muted-foreground select-none">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 2.5}
                title="Phóng to"
                className="p-1.5 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
              >
                <ZoomIn size={14} />
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Thu nhỏ trình đọc" : "Đọc toàn màn hình"}
              className="p-2 rounded-xl text-muted-foreground hover:bg-secondary cursor-pointer transition-all active:scale-95 border border-border/10"
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Đóng trình đọc"
              className="p-2 rounded-xl text-muted-foreground hover:bg-secondary hover:text-destructive cursor-pointer transition-all active:scale-95 border border-border/10"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Page selector Tabs tab row */}
        <div className="bg-background border-b border-border/40 p-2 overflow-x-auto flex gap-1.5 scrollbar-none select-none">
          {pages.map((pageNum, idx) => (
            <button
              key={pageNum}
              onClick={() => {
                setActivePageIndex(idx);
                setZoomScale(1);
              }}
              className={cn(
                "px-3 py-1.5 text-[10px] font-extrabold rounded-lg border transition-all cursor-pointer whitespace-nowrap",
                idx === activePageIndex
                  ? "bg-emerald-600 border-emerald-700 text-white shadow-xs"
                  : "bg-secondary/40 text-muted-foreground hover:bg-secondary border-border/10"
              )}
            >
              Trang {pageNum}
            </button>
          ))}
        </div>

        {/* Reader Canvas viewport */}
        <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950 p-4 flex items-start justify-center relative">
          <div 
            className="transition-transform duration-200 ease-out origin-top shadow-xl border border-border/50 rounded-lg bg-white overflow-hidden"
            style={{
              transform: `scale(${zoomScale})`,
              maxWidth: '100%'
            }}
          >
            <img
              src={imageUrl}
              alt={`Trang ${currentPageNum}`}
              className="w-full h-auto select-none pointer-events-none"
              style={{
                width: isFullscreen ? '750px' : '640px'
              }}
            />
          </div>
        </div>

        {/* Bottom Navigation Toolbar */}
        <div className="p-3 border-t border-border flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 select-none">
          <button
            onClick={handlePrevPage}
            disabled={activePageIndex === 0}
            className="inline-flex items-center gap-1 text-[10px] font-extrabold px-3 py-1.5 rounded-xl border border-border/50 hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
          >
            <ChevronLeft size={13} /> Trang trước
          </button>

          <span className="text-[10px] font-black text-muted-foreground bg-secondary/60 border border-border/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
            {activePageIndex + 1} / {pages.length} trang đối chiếu
          </span>

          <button
            onClick={handleNextPage}
            disabled={activePageIndex === pages.length - 1}
            className="inline-flex items-center gap-1 text-[10px] font-extrabold px-3 py-1.5 rounded-xl border border-border/50 hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
          >
            Trang tiếp <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </>
  );
};
