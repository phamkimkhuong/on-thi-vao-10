import React from 'react';
import type { AnswerField, Question, StructuredAnswer } from '../../types';
import { cn } from '../../utils/cn';
import { LatexRenderer } from './LatexRenderer';

interface AnswerFormRendererProps {
  question: Question;
  value: StructuredAnswer;
  onChange: (value: StructuredAnswer) => void;
  disabled?: boolean;
  className?: string;
}

const inputModeForField = (field: AnswerField): React.HTMLAttributes<HTMLInputElement>['inputMode'] => {
  if (field.valueType === 'number' || field.valueType === 'fraction') return 'decimal';
  return 'text';
};

const autoCompleteForField = (field: AnswerField): string => {
  if (field.valueType === 'number' || field.valueType === 'fraction' || field.valueType === 'expression') {
    return 'off';
  }
  return 'on';
};

export const AnswerFormRenderer: React.FC<AnswerFormRendererProps> = ({
  question,
  value,
  onChange,
  disabled = false,
  className
}) => {
  const schema = question.answerSchema;
  if (!schema) return null;

  const updateField = (key: string, fieldValue: string) => {
    onChange({
      ...value,
      [key]: fieldValue
    });
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-muted-foreground block">Đáp án cuối cùng</span>
        {schema.autoCheckMode === 'manual' && (
          <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
            Tự đối chiếu
          </span>
        )}
      </div>

      <div className={cn('grid grid-cols-1 gap-3', schema.fields.length > 1 && 'sm:grid-cols-2')}>
        {schema.fields.map((field) => {
          const fieldValue = value[field.key] ?? '';
          const isLongField = field.valueType === 'expression' || field.valueType === 'text';

          if (field.valueType === 'choice') {
            return (
              <fieldset key={field.key} className="space-y-2 rounded-xl border border-border/60 bg-card p-3.5">
                <legend className="sr-only">{field.label}</legend>
                <span className="text-[11px] font-bold text-foreground block leading-relaxed">
                  <LatexRenderer text={field.label} />
                </span>
                <div className="grid grid-cols-2 gap-2" role="group" aria-label={field.label}>
                  {[
                    { value: 'Đ', label: 'Đúng' },
                    { value: 'S', label: 'Sai' }
                  ].map(option => {
                    const isSelected = fieldValue.toLocaleUpperCase('vi-VN') === option.value;
                    const selectedClasses = option.value === 'Đ'
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300';

                    return (
                      <button
                        key={option.value}
                        type="button"
                        disabled={disabled}
                        aria-pressed={isSelected}
                        onClick={() => updateField(field.key, option.value)}
                        className={cn(
                          'min-h-11 rounded-xl border px-3 py-2 text-xs font-extrabold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-60',
                          isSelected
                            ? selectedClasses
                            : 'border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                        )}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                {field.hint && (
                  <span className="block text-[10px] font-semibold text-muted-foreground leading-relaxed">
                    {field.hint}
                  </span>
                )}
              </fieldset>
            );
          }

          return (
            <label
              key={field.key}
              className={cn('space-y-1.5', isLongField && schema.fields.length > 1 && 'sm:col-span-2')}
            >
              <span className="text-[11px] font-bold text-foreground block">
                <LatexRenderer text={field.label} />
              </span>
              <input
                type="text"
                value={fieldValue}
                disabled={disabled}
                inputMode={inputModeForField(field)}
                autoComplete={autoCompleteForField(field)}
                onChange={(event) => updateField(field.key, event.target.value)}
                placeholder={field.placeholder ?? 'Nhập đáp án'}
                aria-label={field.label}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-semibold placeholder:text-muted-foreground/50 placeholder:font-normal disabled:opacity-70 disabled:cursor-not-allowed"
              />
              {field.hint && (
                <span className="block text-[10px] font-semibold text-muted-foreground leading-relaxed">
                  {field.hint}
                </span>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerFormRenderer;
