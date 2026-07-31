import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'https://ezonthi.com';
const TODAY = new Date().toISOString().split('T')[0];

console.log('🌐 Đang tạo sitemap.xml tự động cho SEO ezonthi.com...');

// 1. Quét tất cả các file trong src/data để thu thập danh sách questionType ID
const dataDir = path.join(process.cwd(), 'src', 'data');
const questionTypeIds = new Set();

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      // Tìm các thuộc tính id: 'math10-qt01' hoặc id: "chem11-qt02" hoặc questionTypeId: '...'
      const matches = content.matchAll(/(?:id|questionTypeId|qt)\s*:\s*['"]([a-zA-Z0-9_-]*qt\d+[a-zA-Z0-9_-]*)['"]/g);
      for (const match of matches) {
        if (match[1]) {
          questionTypeIds.add(match[1]);
        }
      }
    }
  }
}

walkDir(dataDir);
const sortedTypeIds = Array.from(questionTypeIds).sort();
console.log(`📌 Tìm thấy ${sortedTypeIds.length} dạng bài học trong hệ thống.`);

// 2. Danh sách trang tĩnh
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'weekly' },
  { url: '/roadmap', priority: '0.9', changefreq: 'weekly' },
  { url: '/practice', priority: '0.9', changefreq: 'daily' },
  { url: '/exam', priority: '0.8', changefreq: 'weekly' },
  { url: '/dashboard', priority: '0.8', changefreq: 'daily' },
  { url: '/ai-tutor', priority: '0.7', changefreq: 'weekly' },
  { url: '/mistakes', priority: '0.7', changefreq: 'weekly' },
  { url: '/premium', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.5', changefreq: 'monthly' }
];

// 3. Xây dựng cấu trúc XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Thêm trang tĩnh
for (const route of staticRoutes) {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${route.url}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// Thêm các trang dạng bài học & luyện tập theo ID
for (const id of sortedTypeIds) {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/question-types/${id}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;

  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/practice/${id}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

// 4. Ghi file sitemap.xml vào thư mục public
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`✅ Đã tạo tệp sitemap.xml thành công tại: ${sitemapPath} (${staticRoutes.length + sortedTypeIds.length * 2} URLs)`);
