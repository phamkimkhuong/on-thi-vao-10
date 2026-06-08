import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported, Analytics, setUserId, setUserProperties, logEvent as firebaseLogEvent } from 'firebase/analytics';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyC--Q8dDklMtRVrTkgczovpDPma28jq8xI",
  authDomain: "on-thi-vao-10-7d87c.firebaseapp.com",
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
import { signInWithCustomToken } from 'firebase/auth';
(window as any).auth = auth;
(window as any).signInWithCustomToken = signInWithCustomToken;

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

// Khởi tạo Analytics an toàn cho môi trường Web
// analytics chỉ được import khi đang ở môi trường Web/Browser
export let analytics: Analytics | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Helper định danh học sinh
export const setAnalyticsUser = (userId: string | null) => {
  if (analytics) {
    setUserId(analytics, userId);
    if (userId) {
      setUserProperties(analytics, { role: 'student' });
    }
  }
};

// Helper ghi nhận sự kiện chuyển đổi tùy chỉnh
export const logCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, params);
  }
};

