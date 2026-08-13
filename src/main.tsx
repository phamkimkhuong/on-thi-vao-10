import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './index.css';
import App from './App.tsx';

// Lazy-init Sentry: tải bất đồng bộ sau khi render UI để giảm TBT & kích thước bundle chính
import('./sentry').catch(() => {
  // Bỏ qua lỗi nếu Sentry không tải được - app vẫn hoạt động bình thường
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
