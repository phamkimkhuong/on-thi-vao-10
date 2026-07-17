import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAppStore } from './services/store';
import AppLayout from './components/layout/AppLayout';
import { ROUTES } from './constants/routes';

const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard'));
const Roadmap = React.lazy(() => import('./features/roadmap/Roadmap'));
const QuestionTypeDetail = React.lazy(() => import('./features/question-type/QuestionTypeDetail'));
const PracticeEngine = React.lazy(() => import('./features/practice-engine/PracticeEngine'));
const MistakeNotebook = React.lazy(() => import('./components/mistakes/MistakeNotebook'));
const ExamEngine = React.lazy(() => import('./features/exam-engine/ExamEngine'));
const TeacherDashboard = React.lazy(() => import('./features/teacher/TeacherDashboard'));
const PremiumPricing = React.lazy(() => import('./features/premium/PremiumPricing').then(m => ({ default: m.PremiumPricing })));
const GeneralAiTutor = React.lazy(() => import('./features/ai-tutor/GeneralAiTutor').then(m => ({ default: m.GeneralAiTutor })));
const SupportPage = React.lazy(() => import('./features/support/SupportPage').then(m => ({ default: m.SupportPage })));

import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, setAnalyticsUser, db } from './services/firebase';
import { progressService } from './services/progressService';
import { Loader } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={ROUTES.DASHBOARD} replace /> },
      { path: ROUTES.DASHBOARD.substring(1), element: <Dashboard /> },
      { path: ROUTES.ROADMAP.substring(1), element: <Roadmap /> },
      { path: 'question-types/:questionTypeId', element: <QuestionTypeDetail /> },
      { path: ROUTES.PRACTICE.substring(1), element: <PracticeEngine /> },
      { path: 'practice/:questionTypeId', element: <PracticeEngine /> },
      { path: ROUTES.MISTAKES.substring(1), element: <MistakeNotebook /> },
      { path: ROUTES.EXAM.substring(1), element: <ExamEngine /> },
      { path: ROUTES.TEACHER.substring(1), element: <TeacherDashboard /> },
      { path: ROUTES.PREMIUM.substring(1), element: <PremiumPricing /> },
      { path: ROUTES.AI_TUTOR.substring(1), element: <GeneralAiTutor /> },
      { path: ROUTES.SUPPORT.substring(1), element: <SupportPage /> },
    ]
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.DASHBOARD} replace />
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
