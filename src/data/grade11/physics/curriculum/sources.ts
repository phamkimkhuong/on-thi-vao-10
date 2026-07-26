import type { CurriculumSource } from '@/data/schema';

export const g11PhysicsCurriculumSources: CurriculumSource[] = [
  {
    id: 'phy11-source-decision-3588',
    title: 'Quyết định 3588/QĐ-BGDĐT về bộ sách giáo khoa sử dụng thống nhất toàn quốc',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: '3588/QĐ-BGDĐT',
    issuedAt: '2025-12-26',
    url: 'https://xaydungchinhsach.chinhphu.vn/quyet-dinh-so-3588-qd-bgddt-ve-bo-sach-giao-khoa-giao-duc-pho-thong-su-dung-thong-nhat-toan-quoc-119251227145448874.htm',
    role: 'legal_basis',
    lastVerifiedAt: '2026-07-26'
  },
  {
    id: 'phy11-source-official-guide',
    title: 'Tài liệu hướng dẫn thực hiện chương trình môn Vật lí lớp 11',
    authority: 'Bộ Giáo dục và Đào tạo',
    url: 'https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/3713/6-mon-vat-ly-ban-chinh-thuc-chot-ngay-29-8-2024signed.pdf',
    role: 'official_program',
    lastVerifiedAt: '2026-07-26'
  },
  {
    id: 'phy11-source-kntt-textbook',
    title: 'Vật lí 11 – Kết nối tri thức với cuộc sống',
    authority: 'Nhà xuất bản Giáo dục Việt Nam',
    url: 'https://taphuan.nxbgd.vn/',
    role: 'textbook',
    lastVerifiedAt: '2026-07-26'
  },
  {
    id: 'phy11-source-assessment-22',
    title: 'Thông tư 22/2021/TT-BGDĐT về đánh giá học sinh THCS và THPT',
    authority: 'Bộ Giáo dục và Đào tạo',
    documentNumber: '22/2021/TT-BGDĐT',
    issuedAt: '2021-07-20',
    url: 'https://vanban.chinhphu.vn/?docid=203926&pageid=27160+',
    role: 'assessment_guidance',
    lastVerifiedAt: '2026-07-26'
  }
];
