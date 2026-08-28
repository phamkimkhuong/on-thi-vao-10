import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  robots?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_DOMAIN = 'https://ezonthi.com';
const DEFAULT_TITLE = 'ezonthi | Ôn thi vào 10 & Học tốt lớp 10 - 11';
const DEFAULT_DESCRIPTION =
  'ezonthi giúp học sinh ôn thi vào 10 và học tốt lớp 10, 11 theo từng dạng bài với lý thuyết, luyện tập, kiểm tra và lời giải.';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/logo.png`;

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  keywords,
  robots = 'index, follow',
  jsonLd
}) => {
  const rawCanonical = canonicalUrl
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${DEFAULT_DOMAIN}${canonicalUrl}`)
    : (typeof window !== 'undefined' ? window.location.href : `${DEFAULT_DOMAIN}/`);

  const currentCanonical = (() => {
    try {
      const url = new URL(rawCanonical, DEFAULT_DOMAIN);
      url.search = '';
      url.hash = '';
      if (url.pathname !== '/' && !url.pathname.endsWith('/')) url.pathname += '/';
      return url.toString();
    } catch {
      return rawCanonical;
    }
  })();

  const schemas = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph / Facebook / Zalo */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:site_name" content="ezonthi" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {schemas.map((schema, idx) => (
        <script key={`json-ld-${idx}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
