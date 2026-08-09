import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_DOMAIN = 'https://ezonthi.com';
const DEFAULT_TITLE = 'ezonthi | Nền tảng Học tốt & Luyện thi Lớp 9 - 12';
const DEFAULT_DESCRIPTION =
  'ezonthi - Nền tảng tự học trực tuyến hàng đầu dành cho học sinh Lớp 9, 10, 11, 12. Chuyên sâu luyện đề, giải dạng bài thực chiến các môn Toán, Tiếng Anh, Hóa học, Vật lý bám sát chương trình GDPT 2018.';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/logo.png`;

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  keywords,
  jsonLd
}) => {
  const currentCanonical = canonicalUrl
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${DEFAULT_DOMAIN}${canonicalUrl}`)
    : (typeof window !== 'undefined' ? window.location.href : DEFAULT_DOMAIN);

  const schemas = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
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
