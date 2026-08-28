import React from 'react';
import { ArrowRight, BookOpenCheck, CheckCircle2 } from 'lucide-react';
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
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-12 pb-20">
      <SeoHead
        title={page.title}
        description={page.description}
        canonicalUrl={page.route}
        jsonLd={breadcrumb}
      />

      <section className="rounded-3xl border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-indigo-950/40 dark:via-slate-950 dark:to-violet-950/30 px-5 py-10 md:px-12 md:py-16 text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300 mb-4">
          {page.eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
          {page.h1}
        </h1>
        <p className="mt-5 text-sm md:text-lg leading-7 text-muted-foreground max-w-3xl mx-auto font-medium">
          {page.intro}
        </p>
        <Link
          to={page.links[0].href}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition-colors"
        >
          Bắt đầu học <ArrowRight size={17} />
        </Link>
      </section>

      <div className="grid md:grid-cols-2 gap-5">
        {page.sections.map(section => (
          <section key={section.heading} className="rounded-2xl border border-border bg-card p-5 md:p-7 shadow-sm">
            <div className="flex items-start gap-3">
              <BookOpenCheck className="mt-1 shrink-0 text-indigo-600" size={22} />
              <div>
                <h2 className="text-xl font-black text-foreground">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm md:text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
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
        <h2 id="seo-next-heading" className="text-2xl font-black text-foreground">Chọn nội dung phù hợp</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {page.links.map(link => (
            <Link key={link.href + link.label} to={link.href} className="group rounded-2xl border border-border bg-card p-5 hover:border-indigo-400 hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black text-foreground group-hover:text-indigo-600">{link.label}</h3>
                <ArrowRight size={17} className="shrink-0 text-muted-foreground group-hover:text-indigo-600" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SeoLandingPage;
