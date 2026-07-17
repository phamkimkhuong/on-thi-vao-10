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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-card/95 border border-border/50 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-scale-in p-6 space-y-5 text-center relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onCancel}
          aria-label="Đóng hộp thoại xác nhận"
          className="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-secondary/80 text-muted-foreground transition-all cursor-pointer active:scale-95"
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
          <h3 className="font-black text-sm text-foreground leading-snug">{title}</h3>
          <p className="text-[10px] md:text-xs font-semibold text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button
            onClick={onCancel}
            variant="outline"
            className="w-full font-bold py-2 px-3 text-xs border border-border cursor-pointer hover:bg-secondary rounded-xl transition-all h-10 active:scale-95"
          >
            {cancelLabel}
          </Button>
          <Button
            onClick={onConfirm}
            className={cn(
              "w-full font-bold py-2 px-3 text-xs text-white cursor-pointer rounded-xl transition-all h-10 active:scale-95",
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
