import React, { useEffect } from 'react';
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
import { Loader } from 'lucide-react';

export const App: React.FC = () => {
  const { activeView, authLoading, setUser, setAuthLoading, setView } = useAppStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false);
      
      // Nếu đã đăng nhập thành công và đang ở trang login, tự động chuyển về dashboard
      if (user && useAppStore.getState().activeView === 'auth') {
        setView('dashboard');
      }
    });

    return () => unsubscribe();
  }, [setUser, setAuthLoading, setView]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-foreground gap-4">
        <Loader size={48} className="animate-spin text-primary" />
        <h2 className="text-xs font-bold animate-pulse text-muted-foreground">Đang thiết lập phòng học trực tuyến...</h2>
      </div>
    );
  }

  if (activeView === 'auth') {
    return <AuthPage />;
  }

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'roadmap':
        return <Roadmap />;
      case 'question-type':
        return <QuestionTypeDetail />;
      case 'practice':
        return <PracticeEngine />;
      case 'mistakes':
        return <MistakeNotebook />;
      case 'exam':
        return <ExamEngine />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppLayout>
      {renderView()}
    </AppLayout>
  );
};

export default App;
