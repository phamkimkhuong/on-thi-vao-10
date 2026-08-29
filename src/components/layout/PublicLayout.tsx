import React, { Suspense, useEffect, useState } from 'react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const savedTheme = window.localStorage.getItem('otv10_theme');
  if (savedTheme === 'dark') return true;
  if (savedTheme === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const PublicLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('otv10_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-card/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Về trang chủ ezonthi">
            <img
              src="/logo.webp"
              alt="ezonthi"
              width="240"
              height="131"
              className="h-11 w-auto"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-muted-foreground md:flex" aria-label="Điều hướng công khai">
            <Link className="transition-colors hover:text-brand-ink" to="/on-thi-vao-10/">Ôn thi vào 10</Link>
            <Link className="transition-colors hover:text-brand-ink" to="/lop-10/">Học lớp 10</Link>
            <Link className="transition-colors hover:text-brand-ink" to="/lop-11/">Học lớp 11</Link>
            <Link className="transition-colors hover:text-brand-ink" to="/about/">Giới thiệu</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(current => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors hover:bg-muted"
              aria-label={darkMode ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link
              to="/dashboard/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-ink px-4 py-2.5 text-xs font-extrabold text-primary-foreground transition-colors hover:bg-brand-ink/90 sm:text-sm"
            >
              Vào lớp học <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-7xl px-6 py-12 text-sm font-semibold text-muted-foreground">Đang mở nội dung…</div>}>
        <Outlet />
      </Suspense>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-semibold">© 2026 ezonthi — Học đúng trọng tâm, luyện đúng dạng.</p>
          <div className="flex flex-wrap gap-5 font-semibold">
            <Link className="hover:text-brand-ink" to="/about/">Về nền tảng</Link>
            <Link className="hover:text-brand-ink" to="/on-thi-vao-10/">Lộ trình vào 10</Link>
            <Link className="hover:text-brand-ink" to="/lop-10/">Lớp 10</Link>
            <Link className="hover:text-brand-ink" to="/lop-11/">Lớp 11</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
