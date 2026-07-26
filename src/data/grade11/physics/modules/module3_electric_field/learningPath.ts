import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11PhysicsModule3Outcomes: LearningOutcome[] = [
  {
    id: 'out-phy11-m3-01',
    topicId: 'phy11-t03',
    title: 'Vận dụng định luật Coulomb',
    description:
      'Mô tả lực tương tác giữa hai điện tích điểm và vận dụng định luật Coulomb trong các tình huống đơn giản.',
    scope: 'core',
    orderIndex: 15,
    questionTypeIds: ['phy11-qt15'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m3-02',
    topicId: 'phy11-t03',
    title: 'Giải thích khái niệm điện trường',
    description:
      'Nêu được điện trường là môi trường truyền tương tác điện và sử dụng cường độ điện trường để đặc trưng điện trường tại một điểm.',
    scope: 'core',
    orderIndex: 16,
    questionTypeIds: ['phy11-qt16'],
    prerequisiteOutcomeIds: ['out-phy11-m3-01'],
    misconceptionIds: ['misc-phy11-m3-01'],
    evidenceTypes: ['explanation', 'representation'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'out-phy11-m3-03',
    topicId: 'phy11-t03',
    title: 'Tính điện trường của điện tích điểm',
    description:
      'Vận dụng $E = k|Q|/r^2$, nguyên lí chồng chất và quy tắc vector để xác định điện trường.',
    scope: 'core',
    orderIndex: 17,
    questionTypeIds: ['phy11-qt17'],
    prerequisiteOutcomeIds: ['out-phy11-m3-02'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation'],
    estimatedMinutes: 120,
    isCritical: true
  },
  {
    id: 'out-phy11-m3-04',
    topicId: 'phy11-t03',
    title: 'Biểu diễn điện trường bằng đường sức',
    description:
      'Vẽ, đọc và giải thích đường sức hoặc phổ đường sức của một số điện trường đơn giản.',
    scope: 'core',
    orderIndex: 18,
    questionTypeIds: ['phy11-qt18'],
    prerequisiteOutcomeIds: ['out-phy11-m3-02'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 60
  },
  {
    id: 'out-phy11-m3-05',
    topicId: 'phy11-t03',
    title: 'Vận dụng điện trường đều',
    description:
      'Mô tả điện trường đều và vận dụng quan hệ giữa cường độ điện trường với hiệu điện thế và khoảng cách.',
    scope: 'core',
    orderIndex: 19,
    questionTypeIds: ['phy11-qt19'],
    prerequisiteOutcomeIds: ['out-phy11-m3-02'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m3-06',
    topicId: 'phy11-t03',
    title: 'Phân tích chuyển động của điện tích trong điện trường đều',
    description:
      'Phân tích lực và chuyển động của hạt mang điện đi vào điện trường đều, đặc biệt khi vận tốc ban đầu vuông góc với đường sức.',
    scope: 'core',
    orderIndex: 20,
    questionTypeIds: ['phy11-qt20'],
    prerequisiteOutcomeIds: ['out-phy11-m3-05'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation', 'application'],
    estimatedMinutes: 120
  },
  {
    id: 'out-phy11-m3-07',
    topicId: 'phy11-t03',
    title: 'Mô tả thế năng điện',
    description:
      'Liên hệ công của lực điện với độ biến thiên thế năng điện và vận dụng trong điện trường đều.',
    scope: 'core',
    orderIndex: 21,
    questionTypeIds: ['phy11-qt21'],
    prerequisiteOutcomeIds: ['out-phy11-m3-05'],
    misconceptionIds: [],
    evidenceTypes: ['explanation', 'calculation'],
    estimatedMinutes: 90
  },
  {
    id: 'out-phy11-m3-08',
    topicId: 'phy11-t03',
    title: 'Vận dụng điện thế và hiệu điện thế',
    description:
      'Nêu ý nghĩa điện thế, hiệu điện thế và vận dụng các quan hệ giữa công, điện tích, điện thế và điện trường.',
    scope: 'core',
    orderIndex: 22,
    questionTypeIds: ['phy11-qt22'],
    prerequisiteOutcomeIds: ['out-phy11-m3-07'],
    misconceptionIds: ['misc-phy11-m3-02'],
    evidenceTypes: ['explanation', 'calculation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m3-09',
    topicId: 'phy11-t03',
    title: 'Mô tả tụ điện và điện dung',
    description:
      'Nêu cấu tạo, công dụng của tụ điện; vận dụng định nghĩa điện dung và phân tích một số ứng dụng an toàn.',
    scope: 'core',
    orderIndex: 23,
    questionTypeIds: ['phy11-qt23'],
    prerequisiteOutcomeIds: ['out-phy11-m3-08'],
    misconceptionIds: [],
    evidenceTypes: ['recognition', 'calculation', 'application'],
    estimatedMinutes: 120,
    isCritical: true
  }
];

export const g11PhysicsModule3Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-phy11-m3-01',
    outcomeId: 'out-phy11-m3-02',
    statement: 'Cường độ điện trường tại một điểm phụ thuộc vào điện tích thử đặt tại điểm đó.',
    title: 'Nhầm điện trường với lực điện',
    description: 'Không phân biệt đại lượng đặc trưng cho điện trường với lực tác dụng lên điện tích thử.',
    correction:
      'Cường độ điện trường do các điện tích nguồn quyết định; lực điện còn phụ thuộc điện tích thử qua $\\vec F = q\\vec E$.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m3-02']
  },
  {
    id: 'misc-phy11-m3-02',
    outcomeId: 'out-phy11-m3-08',
    statement: 'Điện thế và hiệu điện thế là cùng một đại lượng.',
    title: 'Đồng nhất điện thế với hiệu điện thế',
    description: 'Không phân biệt giá trị tại một điểm với độ chênh giữa hai điểm.',
    correction:
      'Điện thế đặc trưng cho một điểm; hiệu điện thế là độ chênh điện thế giữa hai điểm theo quy ước dấu.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m3-08']
  }
];
