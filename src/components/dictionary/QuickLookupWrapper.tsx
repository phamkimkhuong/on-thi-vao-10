import React, { useEffect } from 'react';
import { useDictionaryStore } from '../../stores/useDictionaryStore';

interface QuickLookupWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const QuickLookupWrapper: React.FC<QuickLookupWrapperProps> = ({ children, className = '' }) => {
  const { openPopover, initDictionary, isInitialized } = useDictionaryStore();

  useEffect(() => {
    if (!isInitialized) {
      initDictionary();
    }
  }, [initDictionary, isInitialized]);

  const handleMouseUp = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (!selection) return;

    const selectedText = selection.toString().trim();
    if (selectedText && selectedText.length >= 2 && selectedText.length <= 40) {
      // Bắt từ đầu tiên nếu người dùng bôi đen nhiều từ
      const firstWord = selectedText.split(/\s+/)[0].replace(/[^a-zA-Z]/g, '');
      if (firstWord && firstWord.length >= 2) {
        openPopover(firstWord, { x: e.clientX, y: e.clientY });
      }
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (!selection) return;

    const selectedText = selection.toString().trim();
    if (selectedText) {
      const cleanWord = selectedText.replace(/[^a-zA-Z]/g, '');
      if (cleanWord && cleanWord.length >= 2) {
        openPopover(cleanWord, { x: e.clientX, y: e.clientY });
      }
    }
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
      className={`relative select-text ${className}`}
    >
      {children}
    </div>
  );
};
