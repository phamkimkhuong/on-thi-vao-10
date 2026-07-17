import { create } from 'zustand';
import type { User } from 'firebase/auth';
import { SubjectCode } from '../types';

interface AppState {
  darkMode: boolean;
  selectedSubject: SubjectCode;
  selectedGrade: 'grade9' | 'grade10';

  // Auth state
  user: User | null;
  authLoading: boolean;
  isPremium: boolean;

  // Reactivity trigger for LocalStorage progress changes
  progressVersion: number;

  // Data Loading State
  isLoadingData: boolean;

  // Actions
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSubject: (subject: SubjectCode) => void;
  setGrade: (grade: 'grade9' | 'grade10') => void;
  refreshProgress: () => void;
  setIsLoadingData: (loading: boolean) => void;

  // Auth actions
  setUser: (user: User | null) => void;
  setPremium: (isPremium: boolean) => void;
  setAuthLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => {
  // Lấy cấu hình dark mode ban đầu (luôn mặc định là sáng)
  const initialDarkMode = false;

  // Luôn đảm bảo không có class dark trên html
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('dark');
  }

  return {
    darkMode: initialDarkMode,
    selectedSubject: 'math',
    selectedGrade: (typeof localStorage !== 'undefined' && localStorage.getItem('otv10_selected_grade') as 'grade9' | 'grade10') || 'grade9',

    // Auth initial state
    user: null,
    authLoading: true,
    progressVersion: 0,
    isPremium: false,
    isLoadingData: true,

    toggleDarkMode: () => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
      }
    },

    setDarkMode: () => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
      }
    },

    setSubject: (subject) => set({ selectedSubject: subject }),
    setGrade: (grade) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('otv10_selected_grade', grade);
      }
      set({ selectedGrade: grade });
    },
    refreshProgress: () => set((state) => ({ progressVersion: state.progressVersion + 1 })),
    setIsLoadingData: (loading) => set({ isLoadingData: loading }),

    setUser: (user) => set({ user }),
    setPremium: (isPremium) => set({ isPremium }),
    setAuthLoading: (loading) => set({ authLoading: loading }),
    logout: async () => {
      const { signOut } = await import('firebase/auth');
      const { auth } = await import('./firebase');
      await signOut(auth);
      set({ user: null });
    }
  };
});
export default useAppStore;
