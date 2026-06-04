import { create } from 'zustand';
import type { User } from 'firebase/auth';
import { SubjectCode } from '../types';

interface AppState {
  darkMode: boolean;
  selectedSubject: SubjectCode;

  // Auth state
  user: User | null;
  authLoading: boolean;

  // Reactivity trigger for LocalStorage progress changes
  progressVersion: number;

  // Actions
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSubject: (subject: SubjectCode) => void;
  refreshProgress: () => void;

  // Auth actions
  setUser: (user: User | null) => void;
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

    // Auth initial state
    user: null,
    authLoading: true,
    progressVersion: 0,

    toggleDarkMode: () => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
      }
    },

    setDarkMode: (_dark) => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
      }
    },

    setSubject: (subject) => set({ selectedSubject: subject }),
    refreshProgress: () => set((state) => ({ progressVersion: state.progressVersion + 1 })),

    setUser: (user) => set({ user }),
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
