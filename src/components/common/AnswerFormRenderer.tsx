import React from 'react';
import type { AnswerField, Question, StructuredAnswer } from '../../types';
import { cn } from '../../utils/cn';

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

          return (
            <label
              key={field.key}
              className={cn('space-y-1.5', isLongField && schema.fields.length > 1 && 'sm:col-span-2')}
            >
              <span className="text-[11px] font-bold text-foreground">{field.label}</span>
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
