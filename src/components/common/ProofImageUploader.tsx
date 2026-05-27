import React, { useId, useMemo, useState } from 'react';
import { Camera, ImagePlus, Trash2, UploadCloud } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';
import type { LocalProofImage } from '../../utils/proofImages';

interface ProofImageUploaderProps {
  images: LocalProofImage[];
  onChange: (images: LocalProofImage[]) => void;
  disabled?: boolean;
  required?: boolean;
  maxImages?: number;
  maxSizeMb?: number;
  cloudEnabled?: boolean;
  className?: string;
}

const bytesToMb = (bytes: number): string => {
  return (bytes / (1024 * 1024)).toFixed(1);
};

const createImageId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

export const ProofImageUploader: React.FC<ProofImageUploaderProps> = ({
  images,
  onChange,
  disabled = false,
  required = false,
  maxImages = 3,
  maxSizeMb = 5,
  cloudEnabled = false,
  className
}) => {
  const inputId = useId();
  const [error, setError] = useState<string | null>(null);

  const maxBytes = maxSizeMb * 1024 * 1024;
  const canAddMore = images.length < maxImages;
  const helperText = useMemo(() => {
    if (cloudEnabled) {
      return 'Ảnh sẽ được lưu lên Firebase Storage khi nộp bài.';
    }
    return 'Chế độ Guest: ảnh chỉ dùng để đối chiếu trong lượt làm này. Đăng nhập để lưu cloud.';
  }, [cloudEnabled]);

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = '';
    setError(null);

    if (selectedFiles.length === 0) return;

    const remainingSlots = maxImages - images.length;
    if (remainingSlots <= 0) {
      setError(`Tối đa ${maxImages} ảnh cho mỗi câu.`);
      return;
    }

    const accepted: LocalProofImage[] = [];

    for (const file of selectedFiles.slice(0, remainingSlots)) {
      if (!file.type.startsWith('image/')) {
        setError('Chỉ nhận file ảnh bài làm.');
        continue;
      }

      if (file.size > maxBytes) {
        setError(`Mỗi ảnh cần nhỏ hơn ${maxSizeMb}MB.`);
        continue;
      }

      accepted.push({
        id: createImageId(),
        file,
        previewUrl: URL.createObjectURL(file)
      });
    }

    if (selectedFiles.length > remainingSlots) {
      setError(`Chỉ thêm được ${remainingSlots} ảnh nữa. Tối đa ${maxImages} ảnh cho mỗi câu.`);
    }

    if (accepted.length > 0) {
      onChange([...images, ...accepted]);
    }
  };

  const removeImage = (imageId: string) => {
    const removed = images.find(image => image.id === imageId);
    if (removed) {
      URL.revokeObjectURL(removed.previewUrl);
    }
    onChange(images.filter(image => image.id !== imageId));
  };

  return (
    <section className={cn('space-y-3 rounded-xl border border-border/30 bg-slate-50/40 dark:bg-slate-900/10 p-4', className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Camera size={15} className="text-primary" />
            <span className="text-xs font-extrabold text-foreground">Ảnh bài làm</span>
            {required && (
              <span className="text-[9px] font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.5 rounded-full">
                Bắt buộc
              </span>
            )}
          </div>
          <p className="text-[10px] font-semibold text-muted-foreground leading-relaxed">
            Chụp hoặc tải ảnh lời giải trên giấy để tự đối chiếu và gửi giáo viên review sau này.
          </p>
        </div>

        <div className="shrink-0">
          <input
            id={inputId}
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            disabled={disabled || !canAddMore}
            onChange={handleFilesSelected}
            className="sr-only"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled || !canAddMore}
            onClick={() => document.getElementById(inputId)?.click()}
            className="text-[11px] font-bold border border-border/50 cursor-pointer"
          >
            <ImagePlus size={13} className="mr-1" />
            Thêm ảnh
          </Button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={image.previewUrl}
                alt={image.file.name}
                className="aspect-[4/3] w-full object-cover"
              />
              <button
                type="button"
                disabled={disabled}
                onClick={() => removeImage(image.id)}
                className="absolute right-2 top-2 rounded-lg bg-slate-950/70 p-1.5 text-white hover:bg-rose-600 transition-colors disabled:opacity-50 cursor-pointer"
                aria-label="Xóa ảnh bài làm"
              >
                <Trash2 size={13} />
              </button>
              <div className="p-2 space-y-0.5">
                <p className="truncate text-[10px] font-bold text-foreground">{image.file.name}</p>
                <p className="text-[9px] font-semibold text-muted-foreground">{bytesToMb(image.file.size)}MB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-start gap-1.5 text-[10px] font-semibold text-muted-foreground leading-relaxed">
        <UploadCloud size={13} className={cloudEnabled ? 'text-emerald-500 shrink-0 mt-0.5' : 'text-amber-500 shrink-0 mt-0.5'} />
        <span>{helperText} Tối đa {maxImages} ảnh, mỗi ảnh dưới {maxSizeMb}MB.</span>
      </div>

      {error && (
        <p className="text-[10px] font-bold text-rose-600 dark:text-rose-400">
          {error}
        </p>
      )}
    </section>
  );
};

export default ProofImageUploader;
