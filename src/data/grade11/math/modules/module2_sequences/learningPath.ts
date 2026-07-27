import type { LearningOutcome, LearningMisconception } from '@/types';

export const g11MathModule2Outcomes: LearningOutcome[] = [
  {
    id: 'out-math11-m2-01',
    topicId: 'math11-t02',
    title: 'Nhận biết và mô tả dãy số',
    description: 'Xác định số hạng của dãy cho bởi liệt kê, công thức số hạng tổng quát hoặc hệ thức truy hồi; xét tính tăng, giảm và bị chặn trong trường hợp cơ bản.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['math11-qt05'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['misc-math11-m2-01'],
    evidenceTypes: ['recognition', 'representation', 'calculation', 'explanation'],
    estimatedMinutes: 50,
    isCritical: true
  },
  {
    id: 'out-math11-m2-02',
    topicId: 'math11-t02',
    title: 'Vận dụng cấp số cộng',
    description: 'Nhận biết cấp số cộng, xác định công sai, số hạng tổng quát và tổng các số hạng đầu; giải quyết bài toán mô hình tăng hoặc giảm đều.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['math11-qt06'],
    prerequisiteOutcomeIds: ['out-math11-m2-01'],
    misconceptionIds: ['misc-math11-m2-02'],
    evidenceTypes: ['recognition', 'calculation', 'application'],
    estimatedMinutes: 55,
    isCritical: true
  },
  {
    id: 'out-math11-m2-03',
    topicId: 'math11-t02',
    title: 'Vận dụng cấp số nhân',
    description: 'Nhận biết cấp số nhân, xác định công bội, số hạng tổng quát và tổng các số hạng đầu; giải quyết bài toán mô hình tăng trưởng theo tỉ lệ.',
    scope: 'core',
    orderIndex: 7,
    questionTypeIds: ['math11-qt07'],
    prerequisiteOutcomeIds: ['out-math11-m2-01'],
    misconceptionIds: ['misc-math11-m2-03'],
    evidenceTypes: ['recognition', 'calculation', 'application'],
    estimatedMinutes: 55,
    isCritical: true
  }
];

export const g11MathModule2Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-math11-m2-01',
    outcomeId: 'out-math11-m2-01',
    statement: 'Chỉ cần một vài số hạng đầu tăng thì có thể kết luận cả dãy tăng.',
    correction: 'Muốn kết luận dãy tăng phải chứng minh $u_{n+1}>u_n$ với mọi chỉ số thuộc miền xác định.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m2-02',
    outcomeId: 'out-math11-m2-02',
    statement: 'Số hạng tổng quát của cấp số cộng là $u_n=u_1+nd$.',
    correction: 'Từ $u_1$ đến $u_n$ có $n-1$ bước nên $u_n=u_1+(n-1)d$.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m2-03',
    outcomeId: 'out-math11-m2-03',
    statement: 'Cấp số nhân tăng thêm cùng một lượng ở mỗi bước.',
    correction: 'Cấp số nhân nhân với cùng công bội $q$ ở mỗi bước; tăng thêm cùng một lượng là đặc trưng của cấp số cộng.',
    severity: 'critical'
  }
];
