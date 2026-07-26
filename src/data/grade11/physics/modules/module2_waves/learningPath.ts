import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11PhysicsModule2Outcomes: LearningOutcome[] = [
  {
    id: 'out-phy11-m2-01',
    topicId: 'phy11-t02',
    title: 'Mô tả sóng từ đồ thị',
    description:
      'Đọc đồ thị độ dịch chuyển–vị trí hoặc độ dịch chuyển–thời gian để xác định biên độ, bước sóng, chu kì và tần số.',
    scope: 'core',
    orderIndex: 7,
    questionTypeIds: ['phy11-qt07'],
    prerequisiteOutcomeIds: ['out-phy11-m1-01'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'data'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m2-02',
    topicId: 'phy11-t02',
    title: 'Vận dụng hệ thức tốc độ truyền sóng',
    description:
      'Vận dụng $v = \\lambda f$ và giải thích sự truyền năng lượng của sóng mà không kèm theo sự truyền vật chất theo sóng.',
    scope: 'core',
    orderIndex: 8,
    questionTypeIds: ['phy11-qt08'],
    prerequisiteOutcomeIds: ['out-phy11-m2-01'],
    misconceptionIds: ['misc-phy11-m2-01'],
    evidenceTypes: ['calculation', 'explanation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m2-03',
    topicId: 'phy11-t02',
    title: 'Phân biệt sóng ngang và sóng dọc',
    description:
      'Phân biệt sóng ngang, sóng dọc theo phương dao động của phần tử môi trường và nêu được ví dụ phù hợp.',
    scope: 'core',
    orderIndex: 9,
    questionTypeIds: ['phy11-qt09'],
    prerequisiteOutcomeIds: ['out-phy11-m2-01'],
    misconceptionIds: [],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 45
  },
  {
    id: 'out-phy11-m2-04',
    topicId: 'phy11-t02',
    title: 'Đo tần số của sóng âm',
    description:
      'Thực hiện hoặc phân tích thí nghiệm đo tần số sóng âm, xử lí số liệu và đánh giá kết quả.',
    scope: 'core',
    orderIndex: 10,
    questionTypeIds: ['phy11-qt10'],
    prerequisiteOutcomeIds: ['out-phy11-m2-01'],
    misconceptionIds: [],
    evidenceTypes: ['experiment', 'data'],
    estimatedMinutes: 60
  },
  {
    id: 'out-phy11-m2-05',
    topicId: 'phy11-t02',
    title: 'Mô tả phổ sóng điện từ',
    description:
      'Sắp xếp các miền của phổ sóng điện từ theo bước sóng hoặc tần số và liên hệ với một số ứng dụng.',
    scope: 'core',
    orderIndex: 11,
    questionTypeIds: ['phy11-qt11'],
    prerequisiteOutcomeIds: ['out-phy11-m2-02'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 60
  },
  {
    id: 'out-phy11-m2-06',
    topicId: 'phy11-t02',
    title: 'Phân tích giao thoa sóng',
    description:
      'Mô tả điều kiện giao thoa, xác định vị trí cực đại–cực tiểu và vận dụng hệ thức khoảng vân trong tình huống phù hợp.',
    scope: 'core',
    orderIndex: 12,
    questionTypeIds: ['phy11-qt12'],
    prerequisiteOutcomeIds: ['out-phy11-m2-02'],
    misconceptionIds: ['misc-phy11-m2-02'],
    evidenceTypes: ['representation', 'calculation', 'experiment'],
    estimatedMinutes: 120,
    isCritical: true
  },
  {
    id: 'out-phy11-m2-07',
    topicId: 'phy11-t02',
    title: 'Phân tích sóng dừng',
    description:
      'Nhận biết nút, bụng sóng; giải thích sự hình thành sóng dừng và vận dụng điều kiện sóng dừng trên dây.',
    scope: 'core',
    orderIndex: 13,
    questionTypeIds: ['phy11-qt13'],
    prerequisiteOutcomeIds: ['out-phy11-m2-02'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation', 'explanation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m2-08',
    topicId: 'phy11-t02',
    title: 'Đo tốc độ truyền âm',
    description:
      'Thực hiện hoặc phân tích phương án đo tốc độ truyền âm, xử lí số liệu và nêu được nguồn sai số chính.',
    scope: 'core',
    orderIndex: 14,
    questionTypeIds: ['phy11-qt14'],
    prerequisiteOutcomeIds: ['out-phy11-m2-02', 'out-phy11-m2-04'],
    misconceptionIds: [],
    evidenceTypes: ['experiment', 'data', 'explanation'],
    estimatedMinutes: 60
  }
];

export const g11PhysicsModule2Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-phy11-m2-01',
    outcomeId: 'out-phy11-m2-02',
    statement: 'Phần tử môi trường chuyển động từ nguồn đến nơi nhận cùng với sóng.',
    title: 'Nhầm truyền sóng với truyền vật chất',
    description: 'Không phân biệt dao động cục bộ của phần tử với sự lan truyền trạng thái dao động.',
    correction:
      'Sóng truyền năng lượng và trạng thái dao động; các phần tử môi trường chỉ dao động quanh vị trí cân bằng.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m2-02']
  },
  {
    id: 'misc-phy11-m2-02',
    outcomeId: 'out-phy11-m2-06',
    statement: 'Hai nguồn có cùng tần số luôn tạo được hệ vân giao thoa ổn định.',
    title: 'Thiếu điều kiện kết hợp',
    description: 'Bỏ qua yêu cầu về độ lệch pha không đổi giữa hai nguồn.',
    correction:
      'Hệ giao thoa ổn định cần hai nguồn kết hợp: cùng tần số và có độ lệch pha không đổi theo thời gian.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m2-06']
  }
];
