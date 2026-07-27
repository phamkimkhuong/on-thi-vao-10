import type { LearningOutcome, LearningMisconception } from '@/types';

export const g11MathModule3Outcomes: LearningOutcome[] = [
  {
    id: 'out-math11-m3-01',
    topicId: 'math11-t03',
    title: 'Lập và đọc mẫu số liệu ghép nhóm',
    description: 'Chuyển mẫu số liệu thành bảng ghép nhóm, đọc nhóm, tần số, tần số tương đối và xác định giá trị đại diện.',
    scope: 'core',
    orderIndex: 8,
    questionTypeIds: ['math11-qt08'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['misc-math11-m3-01'],
    evidenceTypes: ['recognition', 'representation', 'data', 'calculation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'out-math11-m3-02',
    topicId: 'math11-t03',
    title: 'Tính và giải thích các số đặc trưng trung tâm',
    description: 'Ước lượng số trung bình, trung vị, tứ phân vị và mốt của mẫu ghép nhóm; giải thích ý nghĩa trong bối cảnh dữ liệu.',
    scope: 'core',
    orderIndex: 9,
    questionTypeIds: ['math11-qt09'],
    prerequisiteOutcomeIds: ['out-math11-m3-01'],
    misconceptionIds: ['misc-math11-m3-02'],
    evidenceTypes: ['data', 'calculation', 'explanation', 'application'],
    estimatedMinutes: 65,
    isCritical: true
  }
];

export const g11MathModule3Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-math11-m3-01',
    outcomeId: 'out-math11-m3-01',
    statement: 'Khoảng $[a;b)$ chứa cả hai đầu mút $a$ và $b$.',
    correction: 'Khoảng $[a;b)$ chứa $a$ nhưng không chứa $b$; giá trị $b$ thuộc nhóm kế tiếp nếu có.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m3-02',
    outcomeId: 'out-math11-m3-02',
    statement: 'Các số đặc trưng tính từ bảng ghép nhóm là giá trị chính xác của mẫu gốc.',
    correction: 'Phép tính dùng giá trị đại diện và nội suy trong nhóm nên thường chỉ là giá trị xấp xỉ.',
    severity: 'critical'
  }
];
