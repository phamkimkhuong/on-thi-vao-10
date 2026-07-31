import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './index.css';
import App from './App.tsx';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  ignoreErrors: [
    'Database is closing/hidden',
    'Database is closing',
    /Database is closing\/hidden/i,
    'Error invoking postMessage: Java object is gone',
    /Error invoking postMessage/i,
    /Java object is gone/i,
    'zaloJSV2 is not defined',
    /zaloJSV2/i,
  ],
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 0.2, // Tỷ lệ mẫu theo dõi hiệu năng (20%)
  replaysSessionSampleRate: 0.1, // Tỷ lệ xem lại phiên học (10%)
  replaysOnErrorSampleRate: 1.0, // Tự động ghi lại video phiên làm việc khi xảy ra lỗi (100%)
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
