import type { LearningOutcome, LearningMisconception } from '@/types';

export const g11MathModule1Outcomes: LearningOutcome[] = [
  {
    id: 'out-math11-m1-01',
    topicId: 'math11-t01',
    title: 'Góc lượng giác và giá trị lượng giác',
    description: 'Biểu diễn góc lượng giác, sử dụng hệ thức Chasles, đường tròn lượng giác và các hệ thức giá trị lượng giác.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['math11-qt01'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['misc-math11-m1-01'],
    evidenceTypes: ['recognition', 'representation', 'calculation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'out-math11-m1-02',
    topicId: 'math11-t01',
    title: 'Biến đổi biểu thức lượng giác',
    description: 'Vận dụng công thức cộng, góc nhân đôi, tích thành tổng và tổng thành tích để tính toán, biến đổi.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['math11-qt02'],
    prerequisiteOutcomeIds: ['out-math11-m1-01'],
    misconceptionIds: ['misc-math11-m1-02'],
    evidenceTypes: ['calculation', 'explanation', 'application'],
    estimatedMinutes: 55,
    isCritical: true
  },
  {
    id: 'out-math11-m1-03',
    topicId: 'math11-t01',
    title: 'Hàm số lượng giác và đồ thị',
    description: 'Mô tả, vẽ và khai thác đồ thị của bốn hàm số lượng giác, bao gồm miền xác định, tập giá trị, chu kì và tính đơn điệu.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['math11-qt03'],
    prerequisiteOutcomeIds: ['out-math11-m1-01'],
    misconceptionIds: ['misc-math11-m1-03'],
    evidenceTypes: ['recognition', 'representation', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'out-math11-m1-04',
    topicId: 'math11-t01',
    title: 'Giải phương trình lượng giác cơ bản',
    description: 'Giải bốn phương trình lượng giác cơ bản, phương trình đưa trực tiếp về dạng cơ bản và tính nghiệm gần đúng khi phù hợp.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['math11-qt04'],
    prerequisiteOutcomeIds: ['out-math11-m1-02', 'out-math11-m1-03'],
    misconceptionIds: ['misc-math11-m1-04'],
    evidenceTypes: ['representation', 'calculation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  }
];

export const g11MathModule1Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-math11-m1-01',
    outcomeId: 'out-math11-m1-01',
    statement: 'Góc cùng tia cuối có cùng số đo duy nhất.',
    correction: 'Các góc cùng tia đầu và tia cuối có số đo sai khác nhau một bội của $2\\pi$.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m1-02',
    outcomeId: 'out-math11-m1-02',
    statement: 'Dùng cùng một dấu giữa công thức $\\sin(a\\pm b)$ và $\\cos(a\\pm b)$.',
    correction: 'Công thức sin giữ dấu; công thức cos đổi dấu ở tích $\\sin a\\sin b$.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m1-03',
    outcomeId: 'out-math11-m1-03',
    statement: 'Cả bốn hàm số lượng giác đều có tập xác định là $\\mathbb{R}$.',
    correction: '$\\tan x$ và $\\cot x$ bị loại tại các điểm làm mẫu số tương ứng bằng 0.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m1-04',
    outcomeId: 'out-math11-m1-04',
    statement: 'Phương trình $\\sin x=\\sin\\alpha$ chỉ có một họ nghiệm.',
    correction: 'Phải xét hai họ $x=\\alpha+2k\\pi$ và $x=\\pi-\\alpha+2k\\pi$, với $k\\in\\mathbb Z$.',
    severity: 'critical'
  }
];
