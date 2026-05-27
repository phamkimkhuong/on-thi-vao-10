import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAppStore } from './services/store';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './features/dashboard/Dashboard';
import Roadmap from './features/roadmap/Roadmap';
import QuestionTypeDetail from './features/question-type/QuestionTypeDetail';
import PracticeEngine from './features/practice-engine/PracticeEngine';
import MistakeNotebook from './components/mistakes/MistakeNotebook';
import ExamEngine from './features/exam-engine/ExamEngine';
import { AuthPage } from './features/auth/AuthPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { progressService } from './services/progressService';
import { Loader } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'roadmap', element: <Roadmap /> },
      { path: 'question-types/:questionTypeId', element: <QuestionTypeDetail /> },
      { path: 'practice', element: <PracticeEngine /> },
      { path: 'practice/:questionTypeId', element: <PracticeEngine /> },
      { path: 'mistakes', element: <MistakeNotebook /> },
      { path: 'exam', element: <ExamEngine /> },
    ]
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />
  }
]);

export const App: React.FC = () => {
  const { authLoading, setUser, setAuthLoading, refreshProgress } = useAppStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Tự động merge Cloud + Guest rồi hydrate LocalStorage khi đăng nhập.
        await progressService.mergeGuestDataWithFirestore(user.uid);
        refreshProgress();
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setAuthLoading, refreshProgress]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-foreground gap-4">
        <Loader size={48} className="animate-spin text-primary" />
        <h2 className="text-xs font-bold animate-pulse text-muted-foreground">Đang thiết lập phòng học trực tuyến...</h2>
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;
