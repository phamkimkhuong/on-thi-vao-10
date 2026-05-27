import { create } from 'zustand';
import { SubjectCode } from '../types';

export type ActiveView = 'dashboard' | 'roadmap' | 'question-type' | 'practice' | 'mistakes' | 'exam' | 'auth';

interface AppState {
  activeView: ActiveView;
  darkMode: boolean;
  selectedSubject: SubjectCode;
  selectedQuestionTypeId: string | null;
  selectedExamId: string | null;

  // Auth state
  user: any | null;
  authLoading: boolean;

  // Actions
  setView: (view: ActiveView) => void;
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSubject: (subject: SubjectCode) => void;
  selectQuestionType: (id: string | null) => void;
  selectExam: (id: string | null) => void;

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
    activeView: 'dashboard',
    darkMode: initialDarkMode,
    selectedSubject: 'math',
    selectedQuestionTypeId: null,
    selectedExamId: null,

    // Auth initial state
    user: null,
    authLoading: true,

    setView: (view) => set({ activeView: view, selectedQuestionTypeId: null, selectedExamId: null }),

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

    selectQuestionType: (id) => set({ selectedQuestionTypeId: id, activeView: id ? 'question-type' : 'roadmap' }),

    selectExam: (id) => set({ selectedExamId: id, activeView: id ? 'exam' : 'dashboard' }),

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
