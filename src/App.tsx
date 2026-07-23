import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAppStore } from './services/store';
import AppLayout from './components/layout/AppLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ROUTES } from './constants/routes';

function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return React.lazy(async () => {
    const hasReloaded = sessionStorage.getItem('chunk_reload_retry');
    try {
      const component = await factory();
      sessionStorage.removeItem('chunk_reload_retry');
      return component;
    } catch (error: any) {
      console.warn('Lỗi nạp file JS phiên bản cũ, đang tự động tải lại phiên bản mới:', error);
      if (!hasReloaded) {
        sessionStorage.setItem('chunk_reload_retry', 'true');
        window.location.reload();
      }
      throw error;
    }
  });
}

const Dashboard = lazyWithRetry(() => import('./features/dashboard/Dashboard'));
const Roadmap = lazyWithRetry(() => import('./features/roadmap/Roadmap'));
const QuestionTypeDetail = lazyWithRetry(() => import('./features/question-type/QuestionTypeDetail'));
const PracticeEngine = lazyWithRetry(() => import('./features/practice-engine/PracticeEngine'));
const MistakeNotebook = lazyWithRetry(() => import('./components/mistakes/MistakeNotebook'));
const ExamEngine = lazyWithRetry(() => import('./features/exam-engine/ExamEngine'));
const TeacherDashboard = lazyWithRetry(() => import('./features/teacher/TeacherDashboard'));
const PremiumPricing = lazyWithRetry(() => import('./features/premium/PremiumPricing').then(m => ({ default: m.PremiumPricing })));
const GeneralAiTutor = lazyWithRetry(() => import('./features/ai-tutor/GeneralAiTutor').then(m => ({ default: m.GeneralAiTutor })));
const SupportPage = lazyWithRetry(() => import('./features/support/SupportPage').then(m => ({ default: m.SupportPage })));
const AffiliateDashboard = lazyWithRetry(() => import('./features/affiliate/AffiliateDashboard').then(m => ({ default: m.AffiliateDashboard })));

import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, setAnalyticsUser, db } from './services/firebase';
import { progressService } from './services/progressService';
import { teacherAccessService } from './services/teacherAccessService';
import { Loader } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    ),
    errorElement: (
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    ),
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
      { path: ROUTES.AFFILIATE.substring(1), element: <AffiliateDashboard /> },
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

        // Tự động merge Cloud + Guest rồi hydrate LocalStorage khi đăng nhập (chỉ áp dụng đối với học sinh, bỏ qua giáo viên/admin).
        const isTeacher = await teacherAccessService.isTeacher(user);
        if (!isTeacher) {
          await progressService.syncUserData(user.uid);
          progressService.flushPendingAttempts(user.uid);
          refreshProgress();
        }

        // Lắng nghe real-time profile người dùng để cập nhật trạng thái Premium
        unsubscribeUserDoc = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            let premiumStatus = data.isPremium === true || data.role === 'premium';
            
            // Kiểm tra xem hạn dùng thử đã hết chưa
            if (data.premiumUntil) {
              const expiry = new Date(data.premiumUntil);
              if (expiry < new Date()) {
                premiumStatus = false;
              }
            }
            
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
            useAppStore.setState({
              userData: data,
              trialActivated: data.trialActivated === true,
              premiumUntil: data.premiumUntil || null
            });

            // Tự động mở Profile Modal nếu học sinh thiếu thông tin cá nhân (chỉ mở một lần duy nhất trong phiên làm việc)
            if (typeof sessionStorage !== 'undefined') {
              const hasAutoOpened = sessionStorage.getItem('ezonthi_profile_auto_opened');
              if (!hasAutoOpened && (!data.birthYear || !data.gender || !data.province)) {
                sessionStorage.setItem('ezonthi_profile_auto_opened', 'true');
                useAppStore.setState({ isProfileModalOpen: true });
              }
            }
          } else {
            setPremium(false);
            useAppStore.setState({
              userData: null,
              trialActivated: false,
              premiumUntil: null
            });
          }
        });
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
