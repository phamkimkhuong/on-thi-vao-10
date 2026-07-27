import type { CurriculumSource } from '@/data/schema';

export const g11MathCurriculumSources: CurriculumSource[] = [
  {
    id: 'math11-source-official-program',
    title: 'Tài liệu hướng dẫn thực hiện chương trình môn Toán lớp 11',
    authority: 'Bộ Giáo dục và Đào tạo',
    url: 'https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/3713/1-mon-toan--lop-11-ban-chinh-thuc-chot-ngay-30-8-2024signed.pdf',
    role: 'official_program',
    lastVerifiedAt: '2026-07-27'
  },
  {
    id: 'math11-source-textbook-selection',
    title: 'Thông tư 27/2023/TT-BGDĐT về lựa chọn sách giáo khoa trong cơ sở giáo dục phổ thông',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: '27/2023/TT-BGDĐT',
    issuedAt: '2023-12-28',
    url: 'https://vanban.chinhphu.vn/?classid=1&docid=209472&pageid=27160&typegroupid=6',
    role: 'legal_basis',
    lastVerifiedAt: '2026-07-27'
  },
  {
    id: 'math11-source-kntt-textbook-1',
    title: 'Sách giáo khoa Toán 11 - Tập 1 (Kết nối tri thức với cuộc sống)',
    authority: 'Nhà xuất bản Giáo dục Việt Nam',
    url: 'https://hanhtrangso.nxbgd.vn/',
    role: 'textbook',
    lastVerifiedAt: '2026-07-27'
  },
  {
    id: 'math11-source-kntt-textbook-2',
    title: 'Sách giáo khoa Toán 11 - Tập 2 (Kết nối tri thức với cuộc sống)',
    authority: 'Nhà xuất bản Giáo dục Việt Nam',
    url: 'https://hanhtrangso.nxbgd.vn/',
    role: 'textbook',
    lastVerifiedAt: '2026-07-27'
  },
  {
    id: 'math11-source-assessment-format',
    title: 'Cấu trúc định dạng đề thi tốt nghiệp THPT từ năm 2025',
    authority: 'Cục Quản lý chất lượng - Bộ Giáo dục và Đào tạo',
    issuedAt: '2023-12-29',
    url: 'https://vqa.moet.gov.vn/vi/news/thong-bao/cau-truc-dinh-dang-de-thi-tot-nghiep-thpt-tu-nam-2025-74.html',
    role: 'assessment_guidance',
    lastVerifiedAt: '2026-07-27'
  }
];
