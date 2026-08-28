import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'danger' | 'warning';
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  description,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy bỏ',
  onConfirm,
  onCancel,
  icon,
  variant = 'primary'
}) => {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId} className="bg-card border border-border rounded-xl w-full max-w-sm overflow-hidden shadow-2xl animate-scale-in p-6 space-y-5 text-center relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onCancel}
          aria-label="Đóng hộp thoại xác nhận"
          className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl hover:bg-secondary/80 text-muted-foreground transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <X size={15} />
        </button>

        {/* Icon */}
        <div className="mx-auto flex items-center justify-center">
          {icon ? (
            icon
          ) : (
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center",
              variant === 'primary' && "bg-primary/10 text-primary",
              variant === 'warning' && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
              variant === 'danger' && "bg-rose-500/10 text-rose-500"
            )}>
              <AlertTriangle size={24} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <h3 id={titleId} className="font-black text-sm text-foreground leading-snug">{title}</h3>
          <p id={descriptionId} className="text-xs font-semibold text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button
            onClick={onCancel}
            variant="outline"
            className="w-full min-h-11 font-bold py-2 px-3 text-xs border border-border cursor-pointer hover:bg-secondary rounded-xl transition-all active:scale-95"
          >
            {cancelLabel}
          </Button>
          <Button
            onClick={onConfirm}
            className={cn(
              "w-full min-h-11 font-bold py-2 px-3 text-xs text-white cursor-pointer rounded-xl transition-all active:scale-95",
              variant === 'primary' && "bg-primary hover:bg-primary/95",
              variant === 'warning' && "bg-amber-500 hover:bg-amber-600 border-amber-600",
              variant === 'danger' && "bg-rose-600 hover:bg-rose-700"
            )}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
