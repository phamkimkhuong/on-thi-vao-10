import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpenCheck, CheckCircle2, NotebookTabs } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { createBreadcrumbSchema } from '@/utils/seoSchemas';
import { getSeoLandingPage } from '@/seo/landingPages';

const SeoLandingPage: React.FC = () => {
  const location = useLocation();
  const page = getSeoLandingPage(location.pathname);

  if (!page) return <Navigate to="/" replace />;

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Trang chủ', item: '/' },
    ...(page.route === '/' ? [] : [{ name: page.h1, item: page.route }])
  ]);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-7 md:py-10 space-y-12 md:space-y-16 pb-20">
      <SeoHead
        title={page.title}
        description={page.description}
        canonicalUrl={page.route}
        jsonLd={breadcrumb}
      />

      <section className="academic-grid paper-panel relative overflow-hidden rounded-2xl px-5 py-8 md:px-10 lg:px-14 md:py-12">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-action" aria-hidden="true" />
        <div className="grid lg:grid-cols-[1.45fr_0.75fr] gap-8 lg:gap-14 items-center">
          <div>
            <p className="section-kicker mb-4">{page.eyebrow}</p>
            <h1 className="text-3xl md:text-5xl lg:text-[3.35rem] font-black tracking-[-0.045em] text-foreground max-w-4xl leading-[1.12]">
              {page.h1}
            </h1>
            <p className="mt-5 text-sm md:text-lg leading-8 text-muted-foreground max-w-3xl font-medium">
              {page.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={page.links[0].href}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-action px-5 py-3 text-sm font-extrabold text-white hover:bg-brand-action/90 transition-colors shadow-sm"
              >
                Bắt đầu học <ArrowRight size={17} />
              </Link>
              <Link
                to="/about/"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-ink/30 bg-card px-5 py-3 text-sm font-extrabold text-brand-ink hover:bg-brand-ink/7 transition-colors"
              >
                Cách ezonthi hoạt động
              </Link>
            </div>
          </div>

          <aside className="bg-card border border-brand-line rounded-xl p-5 md:p-6 shadow-sm" aria-label="Phương pháp học trên ezonthi">
            <div className="flex items-center gap-2 pb-4 border-b border-border">
              <NotebookTabs size={20} className="text-brand-ink" />
              <p className="font-black text-sm text-foreground">Một buổi học gọn trong 3 bước</p>
            </div>
            <ol className="mt-4 space-y-4">
              {['Đọc kiến thức cần nhớ', 'Kiểm tra mức độ làm chủ', 'Luyện câu hỏi và sửa lỗi'].map((item, index) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <span className="w-7 h-7 rounded-md bg-brand-ink text-primary-foreground flex items-center justify-center text-xs font-black shrink-0">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-5">
        {page.sections.map(section => (
          <section key={section.heading} className="paper-panel rounded-xl p-5 md:p-7">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-ink/10 text-brand-ink flex items-center justify-center shrink-0">
                <BookOpenCheck size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm md:text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-brand-learning" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="seo-next-heading">
        <p className="section-kicker">Danh mục học tập</p>
        <h2 id="seo-next-heading" className="mt-2 text-2xl md:text-3xl font-black text-foreground tracking-tight">Chọn nội dung phù hợp</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {page.links.map((link, index) => (
            <Link key={link.href + link.label} to={link.href} className="group rounded-xl border border-border bg-card p-5 hover:border-brand-action/60 hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-black tracking-[0.14em] text-brand-action">MỤC {String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight size={17} className="shrink-0 text-muted-foreground group-hover:text-brand-action" />
              </div>
              <h3 className="mt-3 font-black text-foreground group-hover:text-brand-action">{link.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SeoLandingPage;
