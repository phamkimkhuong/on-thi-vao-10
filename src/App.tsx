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
import TeacherDashboard from './features/teacher/TeacherDashboard';
import { AuthPage } from './features/auth/AuthPage';
import { PremiumPricing } from './features/premium/PremiumPricing';
import { GeneralAiTutor } from './features/ai-tutor/GeneralAiTutor';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, setAnalyticsUser, db } from './services/firebase';
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
      { path: 'teacher', element: <TeacherDashboard /> },
      { path: 'premium', element: <PremiumPricing /> },
      { path: 'ai-tutor', element: <GeneralAiTutor /> },
    ]
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />
  }
]);

export const App: React.FC = () => {
  const { authLoading, setUser, setAuthLoading, refreshProgress, setPremium } = useAppStore();

  useEffect(() => {
    let unsubscribeUserDoc: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Định danh người dùng trên Firebase Analytics
        setAnalyticsUser(user.uid);

        // Lắng nghe real-time profile người dùng để cập nhật trạng thái Premium
        unsubscribeUserDoc = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            const premiumStatus = data.isPremium === true || data.role === 'premium';
            
            // Nếu người dùng vừa được nâng cấp lên Premium thành công, chúc mừng bằng hiệu ứng confetti!
            const prevPremium = useAppStore.getState().isPremium;
            if (premiumStatus && !prevPremium) {
              import('canvas-confetti').then((confetti) => {
                confetti.default({
                  particleCount: 150,
                  spread: 80,
                  origin: { y: 0.6 }
                });
              });
            }
            
            setPremium(premiumStatus);
          } else {
            setPremium(false);
          }
        }, (err) => {
          console.error("Lỗi khi lắng nghe user profile:", err);
        });

        // Tự động merge Cloud + Guest rồi hydrate LocalStorage khi đăng nhập.
        await progressService.mergeGuestDataWithFirestore(user.uid);
        refreshProgress();
      } else {
        setAnalyticsUser(null);
        setPremium(false);
        if (unsubscribeUserDoc) {
          unsubscribeUserDoc();
          unsubscribeUserDoc = null;
        }
      }
      setAuthLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeUserDoc) {
        unsubscribeUserDoc();
      }
    };
  }, [setUser, setAuthLoading, refreshProgress, setPremium]);

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
