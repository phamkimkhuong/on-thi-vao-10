import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryModule0Outcomes: LearningOutcome[] = [
  {
    id: 'CHEM11-M0-O01',
    topicId: 'chem11-t0',
    title: 'Tính hằng số cân bằng Kc',
    description: 'Biết cách thiết lập biểu thức và tính toán giá trị hằng số cân bằng Kc của phản ứng thuận nghịch.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['chem11-qt1'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['CHEM11-M0-M01'],
    evidenceTypes: ['recognition', 'calculation']
  }
];

export const g11ChemistryModule0Misconceptions: LearningMisconception[] = [
  {
    id: 'CHEM11-M0-M01',
    outcomeId: 'CHEM11-M0-O01',
    statement: 'Bỏ qua hệ số lũy thừa của các chất trong biểu thức tính Kc.',
    correction: 'Trong biểu thức hằng số cân bằng Kc, nồng độ của mỗi chất phải được nâng lên lũy thừa bằng hệ số tỉ lượng tương ứng trong phương trình hóa học đã cân bằng.',
    severity: 'critical'
  }
];
