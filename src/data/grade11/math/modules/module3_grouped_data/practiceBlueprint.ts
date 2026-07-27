import type { QuestionTypePracticeBlueprint } from '@/types';

export const g11MathModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'math11-qt08',
    subTypes: [
      { id: 'math11-qt08-st-read', name: 'Đọc bảng ghép nhóm', example: 'Tìm cỡ mẫu và tần số.', targetQuestionCount: 12 },
      { id: 'math11-qt08-st-group', name: 'Ghép nhóm và giá trị đại diện', example: 'Xếp dữ liệu và tìm trung điểm nhóm.', targetQuestionCount: 12 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'], requiredRepresentations: ['table', 'text'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'math11-qt09',
    subTypes: [
      { id: 'math11-qt09-st-mean-mode', name: 'Số trung bình và mốt', example: 'Ước lượng $\\bar x$ và $M_o$.', targetQuestionCount: 12 },
      { id: 'math11-qt09-st-median-quartile', name: 'Trung vị và tứ phân vị', example: 'Nội suy $M_e,Q_1,Q_3$.', targetQuestionCount: 12 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'], requiredRepresentations: ['table', 'equation'], masteryHoldoutCount: 4 }
  }
];
