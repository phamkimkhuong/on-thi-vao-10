import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';
import type { Analytics } from 'firebase/analytics';
import type { FirebasePerformance } from 'firebase/performance';

const firebaseConfig = {
  apiKey: "AIzaSyC--Q8dDklMtRVrTkgczovpDPma28jq8xI",
  authDomain: "ezonthi.com",
  projectId: "on-thi-vao-10-7d87c",
  storageBucket: "on-thi-vao-10-7d87c.firebasestorage.app",
  messagingSenderId: "326319018998",
  appId: "1:326319018998:web:02bdb2d1afd36e218dedd7",
  measurementId: "G-DNGBNS5HRX"
};

// Khởi tạo Firebase
export const app = initializeApp(firebaseConfig);

// Khởi tạo Auth
export const auth = getAuth(app);

// Khởi tạo Firebase Storage để lưu ảnh bài làm tự luận
export const firebaseStorage = getStorage(app);

// Khởi tạo Functions để gọi Backend AI Proxy
export const functions = getFunctions(app);

// Khởi tạo Firestore với Offline Persistence (bộ nhớ đệm đa tab cục bộ)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

// Telemetry được nạp sau khi giao diện đã tương tác được. Không đưa Analytics/
// Performance vào đường tải quan trọng của trang public hoặc màn hình Auth.
export let analytics: Analytics | null = null;
export let performance: FirebasePerformance | null = null;
let analyticsApi: typeof import('firebase/analytics') | null = null;
let telemetryPromise: Promise<void> | null = null;
let pendingAnalyticsUserId: string | null = null;

const applyAnalyticsUser = () => {
  if (!analytics || !analyticsApi) return;
  analyticsApi.setUserId(analytics, pendingAnalyticsUserId);
  if (pendingAnalyticsUserId) {
    analyticsApi.setUserProperties(analytics, { role: 'student' });
  }
};

export const initializeFirebaseTelemetry = (): Promise<void> => {
  if (telemetryPromise) return telemetryPromise;

  telemetryPromise = (async () => {
    if (typeof window === 'undefined') return;

    const [analyticsModule, performanceModule] = await Promise.all([
      import('firebase/analytics'),
      import('firebase/performance')
    ]);

    analyticsApi = analyticsModule;

    try {
      if (await analyticsModule.isSupported()) {
        analytics = analyticsModule.getAnalytics(app);
        applyAnalyticsUser();
      }
    } catch (error) {
      console.warn('Firebase Analytics chưa hỗ trợ hoặc bị chặn trên trình duyệt hiện tại:', error);
    }

    try {
      performance = performanceModule.getPerformance(app);
    } catch (error) {
      console.warn('Firebase Performance Monitoring chưa hỗ trợ hoặc bị chặn trên trình duyệt hiện tại:', error);
    }
  })();

  return telemetryPromise;
};

// Helper định danh học sinh
export const setAnalyticsUser = (userId: string | null) => {
  pendingAnalyticsUserId = userId;
  applyAnalyticsUser();
};

// Helper ghi nhận sự kiện chuyển đổi tùy chỉnh
export const logCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (analytics && analyticsApi) {
    analyticsApi.logEvent(analytics, eventName, params);
  }
};

