import { create } from 'zustand';
import type { User } from 'firebase/auth';
import type { SubjectCode } from '../types';

type GradeCode = 'grade9' | 'grade10' | 'grade11' | 'grade12';

const availableSubjectsByGrade: Record<GradeCode, SubjectCode[]> = {
  grade9: ['math', 'english'],
  grade10: ['math', 'english', 'physics', 'chemistry', 'biology'],
  grade11: ['chemistry', 'physics', 'math', 'english'],
  grade12: []
};

const getInitialCourseSelection = (): { grade: GradeCode; subject: SubjectCode } => {
  if (typeof localStorage === 'undefined') return { grade: 'grade9', subject: 'math' };

  const storedGrade = localStorage.getItem('otv10_selected_grade') as GradeCode | null;
  const grade = storedGrade && storedGrade in availableSubjectsByGrade ? storedGrade : 'grade9';
  const availableSubjects = availableSubjectsByGrade[grade];

  // Lớp chưa phát hành không được trở thành ngữ cảnh khởi động sau khi tải lại trang.
  if (availableSubjects.length === 0) return { grade: 'grade9', subject: 'math' };

  const storedSubject = localStorage.getItem('otv10_selected_subject') as SubjectCode | null;
  const subject = storedSubject && availableSubjects.includes(storedSubject)
    ? storedSubject
    : availableSubjects[0];

  return { grade, subject };
};

interface AppState {
  darkMode: boolean;
  selectedSubject: SubjectCode;
  selectedGrade: 'grade9' | 'grade10' | 'grade11' | 'grade12';

  // Auth state
  user: User | null;
  userData: any | null;
  authLoading: boolean;
  isPremium: boolean;
  trialActivated: boolean;
  premiumUntil: string | null;
  isProfileModalOpen: boolean;

  // Reactivity trigger for LocalStorage progress changes
  progressVersion: number;

  // Data Loading State
  isLoadingData: boolean;

  // Actions
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
  setSubject: (subject: SubjectCode) => void;
  setGrade: (grade: 'grade9' | 'grade10' | 'grade11') => void;
  refreshProgress: () => void;
  setIsLoadingData: (loading: boolean) => void;

  // Auth actions
  setUser: (user: User | null) => void;
  setPremium: (isPremium: boolean) => void;
  setAuthLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
  setIsProfileModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => {
  // Lấy cấu hình dark mode ban đầu (luôn mặc định là sáng)
  const initialDarkMode = false;
  const initialCourseSelection = getInitialCourseSelection();

  // Luôn đảm bảo không có class dark trên html
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('dark');
  }

  return {
    darkMode: initialDarkMode,
    selectedSubject: initialCourseSelection.subject,
    selectedGrade: initialCourseSelection.grade,

    // Auth initial state
    user: null,
    userData: null,
    authLoading: true,
    progressVersion: 0,
    isPremium: false,
    trialActivated: false,
    premiumUntil: null,
    isLoadingData: true,
    isProfileModalOpen: false,

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

    setSubject: (subject) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('otv10_selected_subject', subject);
      }
      set({ selectedSubject: subject });
    },
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
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('ezonthi_profile_auto_opened');
      }
      set({ user: null, userData: null });
    },
    setIsProfileModalOpen: (open) => set({ isProfileModalOpen: open })
  };
});
export default useAppStore;
