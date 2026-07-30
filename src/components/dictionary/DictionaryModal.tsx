import React, { useState, useMemo } from 'react';
import { Volume2, Search, X, BookOpen, Sparkles, Link2 } from 'lucide-react';
import { useDictionaryStore } from '../../stores/useDictionaryStore';
import { dictionaryService, IDefinitionGroup } from '../../services/dictionaryService';
import { renderExampleHighlight } from '../../utils/exampleHighlight';

export const DictionaryModal: React.FC = () => {
  const { isModalOpen, activeWord, searchedTerm, closeModal, searchAndOpenModal, searchHistory } = useDictionaryStore();
  const [searchInput, setSearchInput] = useState('');

  // Tab state: 'main_definitions' vs 'relevant_words'
  const [activeTab, setActiveTab] = useState<'main_definitions' | 'relevant_words'>('main_definitions');

  // Part of speech active filters
  const [activeMainPos, setActiveMainPos] = useState<string>('');
  const [activeRelevantPos, setActiveRelevantPos] = useState<string>('');

  // Group main_definitions by part_of_speech
  const groupedMainDefinitions = useMemo(() => {
    if (!activeWord?.main_definitions) return {};
    const grouped: { [pos: string]: IDefinitionGroup[] } = {};

    activeWord.main_definitions.forEach((def) => {
      const pos = def.part_of_speech || 'OTHER';
      if (!grouped[pos]) grouped[pos] = [];
      grouped[pos].push(def);
    });

    return grouped;
  }, [activeWord]);

  const mainPosKeys = useMemo(() => Object.keys(groupedMainDefinitions), [groupedMainDefinitions]);

  // Set default active POS when activeWord changes
  React.useEffect(() => {
    if (mainPosKeys.length > 0 && (!activeMainPos || !mainPosKeys.includes(activeMainPos))) {
      setActiveMainPos(mainPosKeys[0]);
    }
  }, [mainPosKeys, activeMainPos]);

  // Group relevant_words by part_of_speech
  const groupedRelevantWords = useMemo(() => {
    if (!activeWord?.relevant_words) return {};
    const grouped: { [pos: string]: { word: string; definitions: IDefinitionGroup[] }[] } = {};

    activeWord.relevant_words.forEach((relWord) => {
      relWord.definitions?.forEach((def) => {
        const pos = def.part_of_speech || 'OTHER';
        if (!grouped[pos]) grouped[pos] = [];
        
        const existing = grouped[pos].find((item) => item.word === relWord.word);
        if (existing) {
          existing.definitions.push(def);
        } else {
          grouped[pos].push({
            word: relWord.word,
            definitions: [def],
          });
        }
      });
    });

    return grouped;
  }, [activeWord]);

  const relevantPosKeys = useMemo(() => Object.keys(groupedRelevantWords), [groupedRelevantWords]);

  React.useEffect(() => {
    if (relevantPosKeys.length > 0 && (!activeRelevantPos || !relevantPosKeys.includes(activeRelevantPos))) {
      setActiveRelevantPos(relevantPosKeys[0]);
    }
  }, [relevantPosKeys, activeRelevantPos]);

  if (!isModalOpen) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      searchAndOpenModal(searchInput.trim());
      setSearchInput('');
      setActiveTab('main_definitions');
    }
  };

  const handlePlayAudio = (word: string, type: 1 | 2, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    dictionaryService.playAudio(word, type);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 md:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 font-sans">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white shrink-0">
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <BookOpen className="w-5 h-5 text-emerald-200" />
            </div>
            <span>Tra cứu Từ điển Tiếng Anh</span>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Recent History */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Nhập từ cần tra cứu (ví dụ: spokesperson, service, opportunity)..."
              className="w-full pl-11 pr-24 py-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs text-sm font-medium"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Tra từ
            </button>
          </form>

          {/* Search History Chips */}
          {searchHistory.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5 flex-wrap text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-600 dark:text-slate-300 mr-1">Gần đây:</span>
              {searchHistory.slice(0, 7).map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    searchAndOpenModal(term);
                    setActiveTab('main_definitions');
                  }}
                  className="px-2.5 py-0.5 bg-slate-200/80 dark:bg-slate-700/80 hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-300 text-slate-700 dark:text-slate-300 rounded-md transition-colors font-medium cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
          {activeWord ? (
            <div>
              {/* Entry Word & Inflections Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight capitalize">
                    {activeWord.entry_word}
                  </h2>
                  {activeWord.inflections && activeWord.inflections.length > 0 && (
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Biến thể (Inflections):</span>{' '}
                      {activeWord.inflections.join(', ')}
                    </p>
                  )}
                </div>
              </div>

              {/* Main Navigation Tabs */}
              <div className="flex items-center gap-3 border-b-2 border-slate-200 dark:border-slate-800 mt-4 mb-4">
                <button
                  onClick={() => setActiveTab('main_definitions')}
                  className={`flex items-center gap-2 pb-2.5 px-3 text-sm font-bold border-b-3 transition-colors cursor-pointer -mb-[2px] ${
                    activeTab === 'main_definitions'
                      ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Nghĩa của từ</span>
                </button>

                {activeWord.relevant_words && activeWord.relevant_words.length > 0 && (
                  <button
                    onClick={() => setActiveTab('relevant_words')}
                    className={`flex items-center gap-2 pb-2.5 px-3 text-sm font-bold border-b-3 transition-colors cursor-pointer -mb-[2px] ${
                      activeTab === 'relevant_words'
                        ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    <Link2 className="w-4 h-4" />
                    <span>Từ liên quan ({activeWord.relevant_words.length})</span>
                  </button>
                )}
              </div>

              {/* Tab 1: MAIN DEFINITIONS */}
              {activeTab === 'main_definitions' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Part of Speech Badges (Filter Pills) */}
                  {mainPosKeys.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {mainPosKeys.map((pos) => (
                        <button
                          key={pos}
                          onClick={() => setActiveMainPos(pos)}
                          className={`px-3 py-1 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                            activeMainPos === pos
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {pos}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Definitions Cards List for Active POS */}
                  {activeMainPos && groupedMainDefinitions[activeMainPos] ? (
                    <div className="space-y-5">
                      {groupedMainDefinitions[activeMainPos].map((defGroup, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow"
                        >
                          {/* Inflection header */}
                          {defGroup.inflections && (
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/80 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold border border-blue-100 dark:border-slate-700">
                                {Array.isArray(defGroup.inflections) ? defGroup.inflections.join(' / ') : defGroup.inflections}
                              </span>
                            </div>
                          )}

                          {/* UK / US Pronunciation & Audio Player */}
                          <div className="flex items-center gap-4 flex-wrap mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/60">
                            {defGroup.ipa_uk && (
                              <div className="flex items-center gap-1.5 text-xs">
                                <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded">
                                  UK
                                </span>
                                <button
                                  onClick={(e) => handlePlayAudio(activeWord.entry_word, 1, e)}
                                  className="p-1 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-full transition-colors cursor-pointer"
                                  title="Nghe giọng UK"
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>
                                <span className="font-mono text-slate-600 dark:text-slate-400 font-medium">
                                  {defGroup.ipa_uk}
                                </span>
                              </div>
                            )}

                            {defGroup.ipa_us && (
                              <div className="flex items-center gap-1.5 text-xs">
                                <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded">
                                  US
                                </span>
                                <button
                                  onClick={(e) => handlePlayAudio(activeWord.entry_word, 2, e)}
                                  className="p-1 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-full transition-colors cursor-pointer"
                                  title="Nghe giọng US"
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>
                                <span className="font-mono text-slate-600 dark:text-slate-400 font-medium">
                                  {defGroup.ipa_us}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Meanings Blocks */}
                          <div className="space-y-4">
                            {defGroup.meanings.map((meaning, mIdx) => (
                              <div
                                key={mIdx}
                                className="pl-4 border-l-3 border-blue-500 dark:border-blue-400 space-y-2 py-0.5"
                              >
                                {/* Meta Badges (Level & Grammar note) */}
                                <div className="flex items-center gap-2 flex-wrap">
                                  {meaning.level && (
                                    <span className="px-2 py-0.5 bg-emerald-600 text-white text-[11px] font-bold rounded">
                                      {meaning.level}
                                    </span>
                                  )}
                                  {meaning.grammar_note && (
                                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                                      {meaning.grammar_note}
                                    </span>
                                  )}
                                </div>

                                {/* Main Definition Text */}
                                <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                                  {meaning.definition}
                                </p>

                                {/* Synonyms / Alternative Expressions */}
                                {meaning.alternative_expressions && meaning.alternative_expressions.length > 0 && (
                                  <div className="text-xs flex items-baseline gap-1.5 pt-0.5">
                                    <span className="font-bold text-amber-600 dark:text-amber-400">
                                      Từ đồng nghĩa:
                                    </span>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">
                                      {meaning.alternative_expressions.join(', ')}
                                    </span>
                                  </div>
                                )}

                                {/* Example Box */}
                                {meaning.example && (
                                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-sm border border-slate-100 dark:border-slate-800 mt-2">
                                    {renderExampleHighlight(meaning.example)}
                                  </div>
                                )}

                                {/* Useful Phrases Box */}
                                {meaning.useful_phrases && meaning.useful_phrases.length > 0 && (
                                  <div className="p-3 bg-amber-50/80 dark:bg-amber-950/30 rounded-lg text-xs border border-amber-200/80 dark:border-amber-800/50 space-y-1.5 mt-2">
                                    <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                                      <Sparkles className="w-3.5 h-3.5" />
                                      <span>Cụm từ hữu ích:</span>
                                    </div>
                                    <div className="space-y-1 pl-1">
                                      {meaning.useful_phrases.map((phrase, pIdx) => (
                                        <div key={pIdx} className="text-slate-800 dark:text-slate-200">
                                          • {renderExampleHighlight(phrase)}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}

              {/* Tab 2: RELEVANT WORDS */}
              {activeTab === 'relevant_words' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Relevant POS Badges */}
                  {relevantPosKeys.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {relevantPosKeys.map((pos) => (
                        <button
                          key={pos}
                          onClick={() => setActiveRelevantPos(pos)}
                          className={`px-3 py-1 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                            activeRelevantPos === pos
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {pos}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* List of Related Words for Active POS - Full Detail Display */}
                  {activeRelevantPos && groupedRelevantWords[activeRelevantPos] ? (
                    <div className="space-y-5">
                      {groupedRelevantWords[activeRelevantPos].map((relWordItem, rIdx) => (
                        <div
                          key={rIdx}
                          className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
                        >
                          {/* Related Word Title */}
                          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
                              {relWordItem.word}
                            </h4>
                          </div>

                          {/* Render all definitions for this related word */}
                          {relWordItem.definitions.map((defGroup, dIdx) => (
                            <div key={dIdx} className="space-y-3">
                              {/* Inflection */}
                              {defGroup.inflections && (
                                <div>
                                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium border border-blue-100 dark:border-slate-700">
                                    {Array.isArray(defGroup.inflections) ? defGroup.inflections.join(' / ') : defGroup.inflections}
                                  </span>
                                </div>
                              )}

                              {/* UK / US Pronunciation */}
                              <div className="flex items-center gap-4 flex-wrap text-xs pt-1">
                                {defGroup.ipa_uk && (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded">
                                      UK
                                    </span>
                                    <button
                                      onClick={(e) => handlePlayAudio(relWordItem.word, 1, e)}
                                      className="p-1 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-full transition-colors cursor-pointer"
                                      title="Nghe giọng UK"
                                    >
                                      <Volume2 className="w-4 h-4" />
                                    </button>
                                    <span className="font-mono text-slate-600 dark:text-slate-400 font-medium">
                                      {defGroup.ipa_uk}
                                    </span>
                                  </div>
                                )}

                                {defGroup.ipa_us && (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded">
                                      US
                                    </span>
                                    <button
                                      onClick={(e) => handlePlayAudio(relWordItem.word, 2, e)}
                                      className="p-1 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-full transition-colors cursor-pointer"
                                      title="Nghe giọng US"
                                    >
                                      <Volume2 className="w-4 h-4" />
                                    </button>
                                    <span className="font-mono text-slate-600 dark:text-slate-400 font-medium">
                                      {defGroup.ipa_us}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Meanings */}
                              <div className="space-y-3 pt-1">
                                {defGroup.meanings.map((meaning, mIdx) => (
                                  <div
                                    key={mIdx}
                                    className="pl-3.5 border-l-3 border-emerald-500 dark:border-emerald-400 space-y-2 py-0.5"
                                  >
                                    {/* Level & Grammar Note */}
                                    <div className="flex items-center gap-2 flex-wrap">
                                      {meaning.level && (
                                        <span className="px-2 py-0.5 bg-emerald-600 text-white text-[11px] font-bold rounded">
                                          {meaning.level}
                                        </span>
                                      )}
                                      {meaning.grammar_note && (
                                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                                          {meaning.grammar_note}
                                        </span>
                                      )}
                                    </div>

                                    {/* Definition */}
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                                      {meaning.definition}
                                    </p>

                                    {/* Synonyms */}
                                    {meaning.alternative_expressions && meaning.alternative_expressions.length > 0 && (
                                      <div className="text-xs flex items-baseline gap-1.5 pt-0.5">
                                        <span className="font-bold text-amber-600 dark:text-amber-400">
                                          Từ đồng nghĩa:
                                        </span>
                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                          {meaning.alternative_expressions.join(', ')}
                                        </span>
                                      </div>
                                    )}

                                    {/* Example Box */}
                                    {meaning.example && (
                                      <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-xs border border-slate-100 dark:border-slate-800">
                                        {renderExampleHighlight(meaning.example)}
                                      </div>
                                    )}

                                    {/* Useful Phrases */}
                                    {meaning.useful_phrases && meaning.useful_phrases.length > 0 && (
                                      <div className="p-2.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-lg text-xs border border-amber-200/80 dark:border-amber-800/50 space-y-1">
                                        <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                                          <Sparkles className="w-3.5 h-3.5" />
                                          <span>Cụm từ hữu ích:</span>
                                        </div>
                                        <div className="space-y-1 pl-1">
                                          {meaning.useful_phrases.map((phrase, pIdx) => (
                                            <div key={pIdx} className="text-slate-800 dark:text-slate-200">
                                              • {renderExampleHighlight(phrase)}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ) : (
            /* Not Found View */
            <div className="py-14 text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Không tìm thấy từ "{searchedTerm}"
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Vui lòng kiểm tra lại chính tả hoặc thử tìm kiếm các từ khác trong từ điển.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
