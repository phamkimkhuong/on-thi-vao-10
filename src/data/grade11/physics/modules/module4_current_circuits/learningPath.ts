import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11PhysicsModule4Outcomes: LearningOutcome[] = [
  {
    id: 'out-phy11-m4-01',
    topicId: 'phy11-t04',
    title: 'Mô tả cường độ dòng điện ở mức vi mô',
    description:
      'Liên hệ cường độ dòng điện với số hạt tải điện, điện tích, mật độ hạt, tiết diện và tốc độ dịch chuyển có hướng.',
    scope: 'core',
    orderIndex: 24,
    questionTypeIds: ['phy11-qt24'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['misc-phy11-m4-01'],
    evidenceTypes: ['explanation', 'calculation'],
    estimatedMinutes: 90
  },
  {
    id: 'out-phy11-m4-02',
    topicId: 'phy11-t04',
    title: 'Liên hệ điện lượng và cường độ dòng điện',
    description:
      'Vận dụng $I = \\Delta q/\\Delta t$ và giải thích đơn vị coulomb thông qua điện lượng chuyển qua tiết diện dây.',
    scope: 'core',
    orderIndex: 25,
    questionTypeIds: ['phy11-qt25'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: [],
    evidenceTypes: ['calculation', 'explanation'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'out-phy11-m4-03',
    topicId: 'phy11-t04',
    title: 'Phân tích điện trở và sự phụ thuộc nhiệt độ',
    description:
      'Mô tả điện trở, sự phụ thuộc vào vật liệu–kích thước–nhiệt độ và giải thích hoạt động cơ bản của điện trở nhiệt.',
    scope: 'core',
    orderIndex: 26,
    questionTypeIds: ['phy11-qt26'],
    prerequisiteOutcomeIds: ['out-phy11-m4-02'],
    misconceptionIds: [],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 90
  },
  {
    id: 'out-phy11-m4-04',
    topicId: 'phy11-t04',
    title: 'Đọc đặc tuyến dòng điện–điện áp',
    description:
      'Vẽ, đọc và phân tích đặc tuyến I–U của một số linh kiện hoặc vật dẫn.',
    scope: 'core',
    orderIndex: 27,
    questionTypeIds: ['phy11-qt27'],
    prerequisiteOutcomeIds: ['out-phy11-m4-03'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'data'],
    estimatedMinutes: 60
  },
  {
    id: 'out-phy11-m4-05',
    topicId: 'phy11-t04',
    title: 'Vận dụng định luật Ohm',
    description:
      'Vận dụng định luật Ohm cho vật dẫn và phân biệt điều kiện áp dụng với quan hệ định nghĩa điện trở.',
    scope: 'core',
    orderIndex: 28,
    questionTypeIds: ['phy11-qt28'],
    prerequisiteOutcomeIds: ['out-phy11-m4-03', 'out-phy11-m4-04'],
    misconceptionIds: ['misc-phy11-m4-02'],
    evidenceTypes: ['calculation', 'explanation'],
    estimatedMinutes: 120,
    isCritical: true
  },
  {
    id: 'out-phy11-m4-06',
    topicId: 'phy11-t04',
    title: 'Mô tả nguồn điện, suất điện động và điện trở trong',
    description:
      'Nêu ý nghĩa suất điện động, điện trở trong và vận dụng quan hệ giữa suất điện động, hiệu điện thế mạch ngoài và cường độ dòng điện.',
    scope: 'core',
    orderIndex: 29,
    questionTypeIds: ['phy11-qt29'],
    prerequisiteOutcomeIds: ['out-phy11-m4-05'],
    misconceptionIds: [],
    evidenceTypes: ['explanation', 'calculation'],
    estimatedMinutes: 120,
    isCritical: true
  },
  {
    id: 'out-phy11-m4-07',
    topicId: 'phy11-t04',
    title: 'Vận dụng năng lượng và công suất điện',
    description:
      'Tính điện năng, công suất điện; phân tích hiệu quả sử dụng điện và các lưu ý an toàn trong thực tiễn.',
    scope: 'core',
    orderIndex: 30,
    questionTypeIds: ['phy11-qt30'],
    prerequisiteOutcomeIds: ['out-phy11-m4-05'],
    misconceptionIds: [],
    evidenceTypes: ['calculation', 'application'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m4-08',
    topicId: 'phy11-t04',
    title: 'Đo suất điện động và điện trở trong của nguồn',
    description:
      'Lập phương án, thực hiện hoặc phân tích phép đo suất điện động và điện trở trong của pin điện hóa; xử lí số liệu và đánh giá sai số.',
    scope: 'core',
    orderIndex: 31,
    questionTypeIds: ['phy11-qt31'],
    prerequisiteOutcomeIds: ['out-phy11-m4-06'],
    misconceptionIds: [],
    evidenceTypes: ['experiment', 'data', 'explanation'],
    estimatedMinutes: 90
  }
];

export const g11PhysicsModule4Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-phy11-m4-01',
    outcomeId: 'out-phy11-m4-01',
    statement: 'Electron trong dây dẫn chuyển động với tốc độ bằng tốc độ truyền tín hiệu điện.',
    title: 'Nhầm tốc độ trôi với tốc độ lan truyền điện trường',
    description: 'Đồng nhất chuyển động có hướng chậm của hạt tải với sự thiết lập điện trường trong mạch.',
    correction:
      'Tốc độ trôi của electron rất nhỏ; trạng thái điện trường trong mạch được thiết lập nhanh hơn nhiều.',
    severity: 'normal',
    remediationOutcomeIds: ['out-phy11-m4-01']
  },
  {
    id: 'misc-phy11-m4-02',
    outcomeId: 'out-phy11-m4-05',
    statement: 'Mọi linh kiện có điện trở đều tuân theo định luật Ohm với điện trở không đổi.',
    title: 'Áp dụng định luật Ohm không xét điều kiện',
    description: 'Bỏ qua đặc tuyến phi tuyến hoặc sự thay đổi nhiệt độ của linh kiện.',
    correction:
      'Chỉ áp dụng dạng $U = IR$ với điện trở không đổi trong điều kiện khảo sát phù hợp; cần đọc đặc tuyến khi linh kiện phi tuyến.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m4-04', 'out-phy11-m4-05']
  }
];
