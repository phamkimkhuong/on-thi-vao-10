import React from 'react';

/**
 * Utility helper để định dạng các câu ví dụ và cụm từ dạng "English text (Dịch tiếng Việt)"
 */
export const renderExampleHighlight = (text: string): React.ReactNode => {
  if (!text) return null;

  const match = text.match(/^(.+?)\s*\((.+)\)$/);
  if (match) {
    const englishText = match[1].trim();
    const vietnameseText = match[2].trim();

    return (
      <span>
        <span className="font-semibold text-slate-800 dark:text-slate-200 italic">
          {englishText}
        </span>{' '}
        <span className="text-slate-500 dark:text-slate-400 font-normal">
          ({vietnameseText})
        </span>
      </span>
    );
  }

  return <span>{text}</span>;
};
