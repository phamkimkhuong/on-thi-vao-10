import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'https://ezonthi.com';
const DIST_DIR = path.join(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('❌ Không tìm thấy dist/index.html. Hãy chạy vite build trước!');
  process.exit(1);
}

console.log('⚡ Đang tự động tạo các trang HTML tĩnh chuẩn SEO (Prerendering)...');

const htmlTemplate = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// 1. Quét dữ liệu tất cả dạng bài từ src/data
const dataDir = path.join(process.cwd(), 'src', 'data');
const questionTypeDataMap = new Map();

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Regex trích xuất id, name, description
      const idMatches = content.matchAll(/(?:id)\s*:\s*['"]([a-zA-Z0-9_-]*qt\d+[a-zA-Z0-9_-]*)['"]/g);
      for (const match of idMatches) {
        const id = match[1];
        if (id && !questionTypeDataMap.has(id)) {
          // Trích xuất name nếu có
          const nameMatch = content.slice(match.index).match(/name\s*:\s*['"]([^'"]+)['"]/);
          const name = nameMatch ? nameMatch[1] : id;

          // Xác định môn học & lớp dựa trên ID
          let subject = 'Toán';
          let grade = 'Lớp 10';
          if (id.startsWith('math9') || id.startsWith('math-qt')) { subject = 'Toán Học'; grade = 'Lớp 9'; }
          else if (id.startsWith('eng9') || id.startsWith('eng-qt')) { subject = 'Tiếng Anh'; grade = 'Lớp 9'; }
          else if (id.startsWith('g10-math') || id.startsWith('math10')) { subject = 'Toán Học'; grade = 'Lớp 10'; }
          else if (id.startsWith('g10-eng') || id.startsWith('eng10')) { subject = 'Tiếng Anh'; grade = 'Lớp 10'; }
          else if (id.startsWith('g10-chem') || id.startsWith('chem10')) { subject = 'Hóa Học'; grade = 'Lớp 10'; }
          else if (id.startsWith('g10-phy') || id.startsWith('phy10')) { subject = 'Vật Lý'; grade = 'Lớp 10'; }
          else if (id.startsWith('g10-bio') || id.startsWith('bio10')) { subject = 'Sinh Học'; grade = 'Lớp 10'; }
          else if (id.startsWith('g11-math') || id.startsWith('math11')) { subject = 'Toán Học'; grade = 'Lớp 11'; }
          else if (id.startsWith('g11-eng') || id.startsWith('eng11')) { subject = 'Tiếng Anh'; grade = 'Lớp 11'; }
          else if (id.startsWith('g11-chem') || id.startsWith('chem11')) { subject = 'Hóa Học'; grade = 'Lớp 11'; }
          else if (id.startsWith('g11-phy') || id.startsWith('phy11')) { subject = 'Vật Lý'; grade = 'Lớp 11'; }
          else if (id.startsWith('g11-bio') || id.startsWith('bio11')) { subject = 'Sinh Học'; grade = 'Lớp 11'; }

          questionTypeDataMap.set(id, { id, name, subject, grade });
        }
      }
    }
  }
}

walkDir(dataDir);

// 2. Danh sách trang tĩnh
const staticPages = [
  {
    route: '/about',
    title: 'Giới Thiệu Nền Tảng ezonthi | Ôn Thi Vào 10 & THPT',
    description: 'Nền tảng tự học trực tuyến hàng đầu dành cho học sinh Lớp 9, 10, 11, 12 bám sát chương trình GDPT 2018 với dạng bài cốt lõi, Sổ lỗi sai và AI Gia sư.'
  },
  {
    route: '/roadmap',
    title: 'Lộ Trình Học Tốt Cá Nhân Hóa | ezonthi',
    description: 'Bản đồ lộ trình học 3 chặng môn Toán, Tiếng Anh, Hóa học, Vật lý chuẩn hóa giúp học sinh nắm chắc kiến thức và bứt phá điểm số.'
  },
  {
    route: '/practice',
    title: 'Luyện Tập Thực Chiến & Giải Dạng Bài | ezonthi',
    description: 'Hệ thống luyện tập thực chiến trắc nghiệm và tự luận các môn Toán, Tiếng Anh, Hóa học, Vật lý bám sát cấu trúc đề thi GDPT 2018.'
  },
  {
    route: '/exam',
    title: 'Thi Thử & Kiểm Tra Đếm Giờ Thực Tế | ezonthi',
    description: 'Hệ thống thi thử đếm giờ tự động bám sát ma trận đề thi tuyển sinh vào 10 và đề thi học kỳ THPT các môn Toán, Tiếng Anh, Hóa học.'
  },
  {
    route: '/premium',
    title: 'Nâng Cấp Gói Premium 🌟 | ezonthi',
    description: 'Mở khóa toàn bộ lộ trình Chặng 3 nâng cao, ngân hàng đề thi chuyên sâu và đặc quyền hỏi đáp AI Gia sư không giới hạn.'
  },
  {
    route: '/support',
    title: 'Hỗ Trợ & Góp Ý Nền Tảng | ezonthi',
    description: 'Trung tâm hỗ trợ học sinh và giáo viên giải đáp thắc mắc, tiếp nhận góp ý nâng cấp hệ thống ezonthi.'
  }
];

function injectSeoToHtml(html, { title, description, canonicalUrl, jsonLd }) {
  let result = html;

  // Thay title
  result = result.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  // Thay description
  result = result.replace(/<meta name="description"\s+content=".*?"\s*\/?>/s, `<meta name="description" content="${description}" />`);

  // Thay canonical
  result = result.replace(/<link rel="canonical"\s+href=".*?"\s*\/?>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Thay OG & Twitter
  result = result.replace(/<meta property="og:title"\s+content=".*?"\s*\/?>/s, `<meta property="og:title" content="${title}" />`);
  result = result.replace(/<meta property="og:description"\s+content=".*?"\s*\/?>/s, `<meta property="og:description" content="${description}" />`);
  result = result.replace(/<meta property="og:url"\s+content=".*?"\s*\/?>/s, `<meta property="og:url" content="${canonicalUrl}" />`);

  result = result.replace(/<meta name="twitter:title"\s+content=".*?"\s*\/?>/s, `<meta name="twitter:title" content="${title}" />`);
  result = result.replace(/<meta name="twitter:description"\s+content=".*?"\s*\/?>/s, `<meta name="twitter:description" content="${description}" />`);

  // Chèn JSON-LD Schema nếu có
  if (jsonLd) {
    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    const scriptTags = schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');
    result = result.replace('</head>', `  ${scriptTags}\n</head>`);
  }

  return result;
}

// Write file helper
function writePrerenderedFile(routePath, htmlContent) {
  const targetDir = path.join(DIST_DIR, routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
}

// 3. Tạo trang tĩnh
for (const page of staticPages) {
  const canonicalUrl = `${DOMAIN}${page.route}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${DOMAIN}/` },
      { '@type': 'ListItem', position: 2, name: page.title.split('|')[0].trim(), item: canonicalUrl }
    ]
  };

  const pageHtml = injectSeoToHtml(htmlTemplate, {
    title: page.title,
    description: page.description,
    canonicalUrl,
    jsonLd: breadcrumb
  });

  writePrerenderedFile(page.route, pageHtml);
}

// 4. Tạo trang tĩnh cho tất cả 1,700+ dạng bài học
let generatedQtCount = 0;
for (const [id, item] of questionTypeDataMap.entries()) {
  const title = `${item.name} - ${item.subject} ${item.grade} | ezonthi`;
  const description = `Hướng dẫn lý thuyết, phương pháp giải, bẫy thường gặp và bài tập thực chiến dạng ${item.name} môn ${item.subject} ${item.grade} bám sát GDPT mới.`;
  const canonicalUrl = `${DOMAIN}/question-types/${id}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${DOMAIN}/` },
      { '@type': 'ListItem', position: 2, name: item.grade, item: `${DOMAIN}/roadmap` },
      { '@type': 'ListItem', position: 3, name: `${item.subject} ${item.grade}`, item: `${DOMAIN}/roadmap` },
      { '@type': 'ListItem', position: 4, name: item.name, item: canonicalUrl }
    ]
  };

  const qtHtml = injectSeoToHtml(htmlTemplate, {
    title,
    description,
    canonicalUrl,
    jsonLd: breadcrumb
  });

  writePrerenderedFile(`/question-types/${id}`, qtHtml);
  
  // Đồng thời tạo cho route practice
  const practiceCanonical = `${DOMAIN}/practice/${id}`;
  const practiceTitle = `Luyện Tập: ${item.name} - ${item.subject} ${item.grade} | ezonthi`;
  const practiceHtml = injectSeoToHtml(htmlTemplate, {
    title: practiceTitle,
    description,
    canonicalUrl: practiceCanonical,
    jsonLd: breadcrumb
  });
  writePrerenderedFile(`/practice/${id}`, practiceHtml);

  generatedQtCount++;
}

console.log(`✅ Hoàn tất Prerendering SEO! Đã tạo ${staticPages.length + generatedQtCount * 2} file HTML tĩnh chuẩn SEO trong dist/`);
