import type { CurriculumSource } from '@/data/schema';

export const g11EnglishCurriculumSources: CurriculumSource[] = [
  {
    id: 'eng11-source-textbook-decision-3588',
    title: 'Quyết định 3588/QĐ-BGDĐT về bộ sách giáo khoa sử dụng thống nhất toàn quốc',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: '3588/QĐ-BGDĐT',
    issuedAt: '2025-12-26',
    url: 'https://thuvienphapluat.vn/van-ban/EN/Giao-duc/Decision-3588-QD-BGDDT-2025-General-education-textbooks-for-use-nationwide/696053/tieng-anh.aspx',
    role: 'legal_basis',
    lastVerifiedAt: '2026-07-30'
  },
  {
    id: 'eng11-source-official-program',
    title: 'Chương trình giáo dục phổ thông môn Tiếng Anh',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: 'Thông tư 32/2018/TT-BGDĐT',
    issuedAt: '2018-12-26',
    url: 'https://lophocnguvan.com/wp-content/uploads/Giao-duc-pho-thong-2018-Mon-Tieng-Anh.pdf',
    role: 'official_program',
    lastVerifiedAt: '2026-07-30'
  },
  {
    id: 'eng11-source-global-success-textbook',
    title: 'Sách giáo khoa Tiếng Anh 11 - Global Success',
    authority: 'Nhà xuất bản Giáo dục Việt Nam',
    url: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-11-global-success.4879788302',
    role: 'textbook',
    lastVerifiedAt: '2026-07-30'
  },
  {
    id: 'eng11-source-assessment-circular-22',
    title: 'Quy định đánh giá học sinh trung học cơ sở và trung học phổ thông',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: '22/2021/TT-BGDĐT',
    issuedAt: '2021-07-20',
    url: 'https://congbao.chinhphu.vn/van-ban/thong-tu-so-22-2021-tt-bgddt-36881/40026.htm',
    role: 'assessment_guidance',
    lastVerifiedAt: '2026-07-30'
  }
];
