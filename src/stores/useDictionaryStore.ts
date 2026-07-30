import { create } from 'zustand';
import { dictionaryService, IVocabularyItem } from '../services/dictionaryService';

export interface IPopoverPosition {
  x: number;
  y: number;
}

interface DictionaryState {
  isInitialized: boolean;
  isLoading: boolean;
  isModalOpen: boolean;
  activeWord: IVocabularyItem | null;
  searchedTerm: string;
  popoverWord: IVocabularyItem | null;
  popoverPosition: IPopoverPosition | null;
  searchHistory: string[];

  // Actions
  initDictionary: () => Promise<void>;
  openModalWithWord: (wordOrTerm: string | IVocabularyItem) => void;
  closeModal: () => void;
  openPopover: (term: string, pos: IPopoverPosition) => void;
  closePopover: () => void;
  searchAndOpenModal: (term: string) => void;
  clearHistory: () => void;
}

export const useDictionaryStore = create<DictionaryState>((set, get) => ({
  isInitialized: false,
  isLoading: false,
  isModalOpen: false,
  activeWord: null,
  searchedTerm: '',
  popoverWord: null,
  popoverPosition: null,
  searchHistory: [],

  initDictionary: async () => {
    if (get().isInitialized || get().isLoading) return;
    set({ isLoading: true });
    const success = await dictionaryService.init();
    set({ isInitialized: success, isLoading: false });
  },

  openModalWithWord: (wordOrTerm) => {
    if (typeof wordOrTerm === 'string') {
      get().searchAndOpenModal(wordOrTerm);
    } else {
      const term = wordOrTerm.entry_word;
      const history = [term, ...get().searchHistory.filter((t) => t !== term)].slice(0, 20);
      set({
        activeWord: wordOrTerm,
        searchedTerm: term,
        isModalOpen: true,
        popoverPosition: null,
        popoverWord: null,
        searchHistory: history,
      });
    }
  },

  closeModal: () => {
    set({ isModalOpen: false });
  },

  openPopover: (term, pos) => {
    if (!term || !term.trim()) return;
    const wordData = dictionaryService.searchWord(term);
    if (wordData) {
      set({
        popoverWord: wordData,
        popoverPosition: pos,
        searchedTerm: term.trim(),
      });
    }
  },

  closePopover: () => {
    set({ popoverPosition: null, popoverWord: null });
  },

  searchAndOpenModal: (term) => {
    if (!term || !term.trim()) return;
    const cleanTerm = term.trim();
    const wordData = dictionaryService.searchWord(cleanTerm);
    const history = [cleanTerm, ...get().searchHistory.filter((t) => t !== cleanTerm)].slice(0, 20);

    if (wordData) {
      set({
        activeWord: wordData,
        searchedTerm: cleanTerm,
        isModalOpen: true,
        popoverPosition: null,
        popoverWord: null,
        searchHistory: history,
      });
    } else {
      set({
        activeWord: null,
        searchedTerm: cleanTerm,
        isModalOpen: true,
        popoverPosition: null,
        popoverWord: null,
        searchHistory: history,
      });
    }
  },

  clearHistory: () => {
    set({ searchHistory: [] });
  },
}));
