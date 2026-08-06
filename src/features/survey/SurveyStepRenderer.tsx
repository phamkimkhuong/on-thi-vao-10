import React from 'react';
import type { SurveyQuestion, SurveyOption } from '../../types/surveyTypes';
import { Smile, Frown, Meh, Heart, ThumbsUp } from 'lucide-react';

interface SurveyStepRendererProps {
  question: SurveyQuestion;
  value: any;
  answers?: Record<string, any>;
  onChange: (val: any) => void;
}

const EMOJI_LEVELS = [
  { rating: 1, label: 'Chưa tốt 😢', icon: Frown, color: 'text-red-500 hover:border-red-500 bg-red-500/10' },
  { rating: 2, label: 'Cần cải thiện 😕', icon: Meh, color: 'text-orange-500 hover:border-orange-500 bg-orange-500/10' },
  { rating: 3, label: 'Bình thường 😐', icon: Smile, color: 'text-yellow-500 hover:border-yellow-500 bg-yellow-500/10' },
  { rating: 4, label: 'Tốt / Hài lòng 😊', icon: ThumbsUp, color: 'text-emerald-500 hover:border-emerald-500 bg-emerald-500/10' },
  { rating: 5, label: 'Rất tuyệt vời 😍', icon: Heart, color: 'text-pink-500 hover:border-pink-500 bg-pink-500/10' },
];

const LOW_RATING_REASONS = [
  { id: 'color', label: 'Màu sắc quá tối / chói' },
  { id: 'layout', label: 'Bố cục rối mắt / khó tìm bài' },
  { id: 'font', label: 'Chữ quá nhỏ / khó đọc' },
  { id: 'lag', label: 'Giao diện giật lag' },
  { id: 'other', label: 'Lý do khác...' },
];

export const SurveyStepRenderer: React.FC<SurveyStepRendererProps> = ({
  question,
  value,
  answers = {},
  onChange,
}) => {
  const options = typeof question.options === 'function'
    ? question.options(answers)
    : question.options;

  switch (question.type) {
    case 'single_choice': {
      const isCustomValue = typeof value === 'string' && value.startsWith('other:');
      const otherText = isCustomValue ? value.replace(/^other:?\s*/, '') : '';

      const handleSelectOption = (option: SurveyOption) => {
        if (option.hasInput || option.value === 'other') {
          onChange(otherText ? `other: ${otherText}` : 'other');
        } else {
          onChange(option.value);
        }
      };

      const handleOtherTextChange = (text: string) => {
        onChange(text.trim() ? `other: ${text}` : 'other');
      };

      return (
        <div className="grid grid-cols-1 gap-3">
          {options?.map((option) => {
            const isOther = option.hasInput || option.value === 'other';
            const isSelected = isOther
              ? (value === 'other' || isCustomValue)
              : value === option.value;

            return (
              <div key={option.id} className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  className={`flex items-center p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 shadow-md ring-2 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {option.icon && (
                    <span className="text-2xl mr-3.5 select-none shrink-0">{option.icon}</span>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-base">{option.label}</div>
                    {option.subLabel && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                        {option.subLabel}
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 transition-colors ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 dark:bg-indigo-500'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>

                {isOther && isSelected && (
                  <div className="pl-1 animate-fadeIn">
                    <input
                      type="text"
                      autoFocus
                      placeholder={option.inputPlaceholder || 'Gõ ý kiến của bạn...'}
                      value={otherText}
                      onChange={(e) => handleOtherTextChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 shadow-inner"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    case 'multi_choice': {
      const selectedValues: string[] = Array.isArray(value) ? value : [];

      const otherValueItem = selectedValues.find((v) => v === 'other' || v.startsWith('other:'));
      const otherText = otherValueItem ? otherValueItem.replace(/^other:?\s*/, '') : '';

      const toggleOption = (option: SurveyOption) => {
        const isOther = option.hasInput || option.value === 'other';
        const exists = selectedValues.some((v) => isOther ? (v === 'other' || v.startsWith('other:')) : v === option.value);

        if (exists) {
          onChange(selectedValues.filter((v) => isOther ? !(v === 'other' || v.startsWith('other:')) : v !== option.value));
        } else {
          const newItem = isOther ? (otherText ? `other: ${otherText}` : 'other') : option.value;
          onChange([...selectedValues, newItem]);
        }
      };

      const handleOtherTextChange = (text: string) => {
        const withoutOther = selectedValues.filter((v) => !(v === 'other' || v.startsWith('other:')));
        const newItem = text.trim() ? `other: ${text}` : 'other';
        onChange([...withoutOther, newItem]);
      };

      return (
        <div className="grid grid-cols-1 gap-3">
          {options?.map((option) => {
            const isOther = option.hasInput || option.value === 'other';
            const isSelected = selectedValues.some((v) => isOther ? (v === 'other' || v.startsWith('other:')) : v === option.value);

            return (
              <div key={option.id} className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => toggleOption(option)}
                  className={`flex items-center p-3.5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {option.icon && (
                    <span className="text-xl mr-3 select-none shrink-0">{option.icon}</span>
                  )}
                  <div className="flex-1 font-medium text-sm sm:text-base">{option.label}</div>
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ml-2 transition-colors ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 dark:bg-indigo-500 text-white'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {isSelected && (
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                </button>

                {isOther && isSelected && (
                  <div className="pl-1 animate-fadeIn">
                    <input
                      type="text"
                      autoFocus
                      placeholder={option.inputPlaceholder || 'Gõ ý kiến khác của bạn...'}
                      value={otherText}
                      onChange={(e) => handleOtherTextChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 shadow-inner"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    case 'emoji_scale': {
      const selectedRating = typeof value === 'number' ? value : (typeof value === 'object' ? value?.rating : null);
      const currentReason = typeof value === 'object' ? (value?.reason || '') : '';
      const isCustomReason = currentReason.startsWith('other:');
      const customReasonText = isCustomReason ? currentReason.replace(/^other:?\s*/, '') : (currentReason === 'other' ? '' : currentReason);
      const isOtherReasonSelected = currentReason === 'other' || isCustomReason;

      const handleSelectRating = (rating: number) => {
        if (rating === 1 || rating === 2) {
          onChange({ rating, reason: currentReason });
        } else {
          onChange(rating);
        }
      };

      const handleSelectReason = (reasonId: string) => {
        if (reasonId === 'other') {
          onChange({ rating: selectedRating, reason: customReasonText ? `other: ${customReasonText}` : 'other' });
        } else {
          const matchedLabel = LOW_RATING_REASONS.find(r => r.id === reasonId)?.label || reasonId;
          onChange({ rating: selectedRating, reason: matchedLabel });
        }
      };

      const handleCustomReasonTextChange = (text: string) => {
        onChange({ rating: selectedRating, reason: text.trim() ? `other: ${text}` : 'other' });
      };

      return (
        <div className="flex flex-col items-center gap-4 py-2">
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4 w-full">
            {EMOJI_LEVELS.map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedRating === item.rating;
              return (
                <button
                  key={item.rating}
                  type="button"
                  onClick={() => handleSelectRating(item.rating)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? `border-indigo-600 dark:border-indigo-500 scale-105 shadow-md ${item.color}`
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <IconComp className={`w-8 h-8 sm:w-10 sm:h-10 mb-1.5 transition-transform ${isSelected ? 'scale-110' : ''}`} />
                  <span className="text-[11px] sm:text-xs font-medium text-center line-clamp-1">
                    {item.rating}
                  </span>
                </button>
              );
            })}
          </div>
          {selectedRating && (
            <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 animate-fadeIn">
              {EMOJI_LEVELS.find((e) => e.rating === selectedRating)?.label}
            </div>
          )}

          {/* Câu hỏi phụ nếu chọn rating 1 hoặc 2 */}
          {(selectedRating === 1 || selectedRating === 2) && (
            <div className="w-full mt-2 p-4 rounded-2xl border-2 border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 flex flex-col gap-3 animate-fadeIn">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-300">
                Điều gì làm bạn chưa hài lòng nhất về giao diện?
              </div>
              <div className="flex flex-wrap gap-2">
                {LOW_RATING_REASONS.map((r) => {
                  const isReasonSelected = r.id === 'other'
                    ? isOtherReasonSelected
                    : currentReason === r.label;

                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => handleSelectReason(r.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        isReasonSelected
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                      }`}
                    >
                      <span>{r.label}</span>
                    </button>
                  );
                })}
              </div>

              {isOtherReasonSelected && (
                <div className="animate-fadeIn mt-1">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Gõ thêm vấn đề bạn chưa hài lòng..."
                    value={customReasonText}
                    onChange={(e) => handleCustomReasonTextChange(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 shadow-inner"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    case 'nps': {
      const selectedScore = typeof value === 'number' ? value : null;
      return (
        <div className="flex flex-col gap-3 py-2">
          <div className="grid grid-cols-11 gap-1 sm:gap-1.5 w-full">
            {Array.from({ length: 11 }, (_, i) => i).map((score) => {
              const isSelected = selectedScore === score;
              return (
                <button
                  key={score}
                  type="button"
                  onClick={() => onChange(score)}
                  className={`flex items-center justify-center h-10 sm:h-12 rounded-lg font-bold text-xs sm:text-sm border-2 transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 text-white dark:bg-indigo-500 scale-105 shadow'
                      : 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {score}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 px-1 font-medium">
            <span>0 - Không bao giờ</span>
            <span>10 - Rất sẵn sàng 🌟</span>
          </div>
        </div>
      );
    }

    case 'free_text': {
      return (
        <div className="flex flex-col gap-2">
          <textarea
            rows={4}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder || 'Nhập ý kiến của bạn...'}
            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 text-sm sm:text-base resize-none transition-colors"
          />
        </div>
      );
    }

    default:
      return null;
  }
};
