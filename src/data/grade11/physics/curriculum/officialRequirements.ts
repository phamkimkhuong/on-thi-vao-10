import type { OfficialRequirement } from '@/data/schema';

export const g11PhysicsOfficialRequirements: OfficialRequirement[] = [
  {
    id: 'phy11-official-ch1-characteristics',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1', 'phy11-kntt-l2'],
    title: 'Mô tả các đại lượng đặc trưng của dao động điều hòa',
    normalizedRequirement:
      'Từ đồ thị li độ–thời gian và biểu thức dao động, xác định biên độ, chu kì, tần số, tần số góc và pha dao động.',
    actionVerbs: ['xác định', 'mô tả'],
    evidenceTypes: ['representation', 'calculation'],
    sourceLocators: ['Tài liệu hướng dẫn Vật lí 11 → Dao động → Yêu cầu cần đạt'],
    implementedOutcomeIds: ['out-phy11-m1-01'],
    coverageStatus: 'partial',
    coverageNotes: 'Scaffold hiện mới có câu hỏi đọc biểu thức; còn thiếu câu hỏi đọc đồ thị.',
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-official-ch1-velocity-acceleration',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l3', 'phy11-kntt-l4'],
    title: 'Xác định li độ, vận tốc và gia tốc trong dao động điều hòa',
    normalizedRequirement:
      'Sử dụng đồ thị hoặc tính toán để xác định li độ, vận tốc và gia tốc của vật dao động điều hòa.',
    actionVerbs: ['sử dụng', 'xác định', 'tính toán'],
    evidenceTypes: ['representation', 'calculation'],
    sourceLocators: ['Tài liệu hướng dẫn Vật lí 11 → Dao động → Yêu cầu cần đạt'],
    implementedOutcomeIds: ['out-phy11-m1-02'],
    coverageStatus: 'partial',
    coverageNotes: 'Scaffold mới phủ vận tốc cực đại; còn thiếu gia tốc, đồ thị và quan hệ pha.',
    reviewStatus: 'source_checked'
  }
];
