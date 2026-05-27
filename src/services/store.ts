import { create } from 'zustand';
import { SubjectCode } from '../types';

interface AppState {
  darkMode: boolean;
  selectedSubject: SubjectCode;

  // Auth state
  user: any | null;
  authLoading: boolean;

  // Reactivity trigger for LocalStorage progress changes
  progressVersion: number;

  // Actions
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSubject: (subject: SubjectCode) => void;
  refreshProgress: () => void;

  // Auth actions
  setUser: (user: any | null) => void;
  setAuthLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => {
  // Lấy cấu hình dark mode ban đầu
  const initialDarkMode = typeof window !== 'undefined'
    ? localStorage.getItem('otv10_dark_mode') === 'true'
    : false;

  // Cập nhật class dark lên html ban đầu
  if (initialDarkMode && typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  } else if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('dark');
  }

  return {
    darkMode: initialDarkMode,
    selectedSubject: 'math',

    // Auth initial state
    user: null,
    authLoading: true,
    progressVersion: 0,

    toggleDarkMode: () => set((state) => {
      const newDark = !state.darkMode;
      localStorage.setItem('otv10_dark_mode', String(newDark));
      if (newDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newDark };
    }),

    setDarkMode: (dark) => set(() => {
      localStorage.setItem('otv10_dark_mode', String(dark));
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: dark };
    }),

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
