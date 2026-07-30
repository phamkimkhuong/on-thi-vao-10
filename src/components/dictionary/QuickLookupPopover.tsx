import React, { useEffect, useRef } from 'react';
import { Volume2, ExternalLink, X } from 'lucide-react';
import { useDictionaryStore } from '../../stores/useDictionaryStore';
import { dictionaryService } from '../../services/dictionaryService';

export const QuickLookupPopover: React.FC = () => {
  const { popoverWord, popoverPosition, searchedTerm, closePopover, openModalWithWord } = useDictionaryStore();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        closePopover();
      }
    };

    if (popoverPosition) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverPosition, closePopover]);

  if (!popoverPosition) return null;

  // Tính toán vị trí hiển thị đảm bảo nằm trong khung hình (Viewport)
  const left = Math.min(Math.max(16, popoverPosition.x - 120), window.innerWidth - 300);
  const top = popoverPosition.y + 10 > window.innerHeight - 200 ? popoverPosition.y - 180 : popoverPosition.y + 10;

  const handleSpeak = (text: string) => {
    dictionaryService.speak(text);
  };

  const firstDefinition = popoverWord?.main_definitions?.[0];
  const firstMeaning = firstDefinition?.meanings?.[0];

  return (
    <div
      ref={popoverRef}
      style={{ left: `${left}px`, top: `${top}px` }}
      className="fixed z-50 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-slate-900 dark:text-white">
              {popoverWord ? popoverWord.entry_word : searchedTerm}
            </span>
            {firstDefinition?.part_of_speech && (
              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-[10px] font-bold rounded uppercase">
                {firstDefinition.part_of_speech}
              </span>
            )}
          </div>
          {firstDefinition?.ipa_uk && (
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              {firstDefinition.ipa_uk}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1">
          {popoverWord && (
            <button
              onClick={() => handleSpeak(popoverWord.entry_word)}
              className="p-1 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Phát âm"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closePopover}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Meanings Snippet */}
      {popoverWord && firstMeaning ? (
        <div className="mt-2 text-xs space-y-1.5">
          <p className="font-medium text-slate-800 dark:text-slate-200 line-clamp-2">
            {firstMeaning.definition}
          </p>

          {firstMeaning.example && (
            <p className="italic text-slate-500 dark:text-slate-400 text-[11px] line-clamp-2 bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded">
              "{firstMeaning.example}"
            </p>
          )}
        </div>
      ) : (
        <p className="mt-2 text-xs text-slate-500 italic">
          Chưa có trong từ điển offline.
        </p>
      )}

      {/* Action Footer */}
      <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">Từ điển Anh - Việt</span>
        <button
          onClick={() => {
            closePopover();
            if (popoverWord) {
              openModalWithWord(popoverWord);
            } else {
              openModalWithWord(searchedTerm);
            }
          }}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          <span>Xem chi tiết</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
