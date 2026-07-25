import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxModalProps {
  activeLightboxUrl: string | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  activeLightboxUrl,
  onClose,
}) => {
  if (!activeLightboxUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900 text-white cursor-pointer transition-all border border-white/10"
        title="Đóng"
      >
        <X size={20} />
      </button>
      <div
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden rounded-xl bg-card border border-border/10 shadow-2xl p-1 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeLightboxUrl}
          alt="Hình ảnh phóng to"
          className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
        />
      </div>
    </div>
  );
};
