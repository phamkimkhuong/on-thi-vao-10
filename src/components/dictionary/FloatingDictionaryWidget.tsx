import React, { useState } from 'react';
import { BookOpen, Search, X } from 'lucide-react';
import { useDictionaryStore } from '../../stores/useDictionaryStore';

export const FloatingDictionaryWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { searchAndOpenModal, initDictionary, isInitialized } = useDictionaryStore();

  const handleOpenSearch = async () => {
    if (!isInitialized) {
      await initDictionary();
    }
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchAndOpenModal(query.trim());
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Search Input Box */}
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200 w-72"
        >
          <Search className="w-4 h-4 text-slate-400 ml-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nhập từ cần tra..."
            autoFocus
            className="w-full py-1.5 px-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shrink-0 transition-colors"
          >
            Tra
          </button>
        </form>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={handleOpenSearch}
        className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
        title="Tra từ điển Tiếng Anh"
      >
        {isOpen ? <X className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
        
        <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Từ điển Anh - Việt
        </span>
      </button>
    </div>
  );
};
