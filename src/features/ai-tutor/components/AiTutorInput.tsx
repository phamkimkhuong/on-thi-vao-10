import React from 'react';
import { Paperclip, Send, X } from 'lucide-react';

interface AiTutorInputProps {
  input: string;
  setInput: (val: string) => void;
  selectedFile: File | null;
  previewUrl: string | null;
  isLoading: boolean;
  isUploadingImage: boolean;
  errorMsg: string | null;
  placeholder: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: () => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export const AiTutorInput: React.FC<AiTutorInputProps> = ({
  input,
  setInput,
  selectedFile,
  previewUrl,
  isLoading,
  isUploadingImage,
  errorMsg,
  placeholder,
  fileInputRef,
  onImageChange,
  onRemoveImage,
  onSubmit,
}) => {
  const isLimitExhausted = errorMsg === "LIMIT_EXHAUSTED";
  const isDisabled = isLoading || isUploadingImage || isLimitExhausted;

  return (
    <div className="border-t border-border bg-slate-50/50 dark:bg-slate-900/20 p-3">
      {/* Preview Image Container */}
      {previewUrl && (
        <div className="relative inline-block mb-3 p-1 bg-background border border-border rounded-lg shadow-sm group">
          <img
            src={previewUrl}
            alt="Xem trước bài làm"
            className="max-h-24 max-w-full rounded-md object-contain"
          />
          <button
            type="button"
            onClick={onRemoveImage}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-md hover:bg-destructive/90 transition-colors cursor-pointer"
            title="Xóa ảnh"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <form onSubmit={onSubmit} className="flex gap-2 items-center">
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={onImageChange}
          accept="image/*"
          className="hidden"
        />

        {/* Attachment Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isDisabled}
          className="w-11 h-11 rounded-2xl border border-border bg-background hover:bg-secondary disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer transition-all shadow-sm text-muted-foreground"
          title="Đính kèm hình ảnh bài làm"
        >
          <Paperclip size={16} />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isDisabled}
          placeholder={isLimitExhausted ? "Bạn đã hết lượt hỏi hôm nay. Vui lòng nâng cấp..." : placeholder}
          className="flex-1 bg-background border border-border rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold disabled:bg-secondary/40 placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={(!input.trim() && !selectedFile) || isDisabled}
          className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white hover:opacity-95 disabled:opacity-40 flex items-center justify-center shrink-0 cursor-pointer shadow-md shadow-orange-500/10 transition-all"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};
