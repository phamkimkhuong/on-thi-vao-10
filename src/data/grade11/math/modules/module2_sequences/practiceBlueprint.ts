import type { QuestionTypePracticeBlueprint } from '@/types';

const blueprint = (
  questionTypeId: string,
  requiredRepresentations: QuestionTypePracticeBlueprint['coverage']['requiredRepresentations'],
  subTypes: QuestionTypePracticeBlueprint['subTypes']
): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: {
    targetQuestionCount: 24,
    minimumQuestionsPerSubType: 6,
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
    requiredRepresentations,
    masteryHoldoutCount: 4
  }
});

export const g11MathModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('math11-qt05', ['table', 'equation'], [
    { id: 'math11-qt05-st-explicit', name: 'Dãy cho bởi liệt kê hoặc công thức tổng quát', example: 'Tính số hạng hoặc tìm chỉ số từ $u_n$.', targetQuestionCount: 12 },
    { id: 'math11-qt05-st-recursive', name: 'Dãy truy hồi và tính chất', example: 'Tính số hạng kế tiếp hoặc xét đơn điệu.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt06', ['equation', 'text'], [
    { id: 'math11-qt06-st-term', name: 'Công sai và số hạng tổng quát', example: 'Tìm $u_n$, $d$ hoặc vị trí số hạng.', targetQuestionCount: 12 },
    { id: 'math11-qt06-st-sum', name: 'Tổng hữu hạn và bài toán thực tế', example: 'Tính $S_n$ hoặc tổng đại lượng tăng đều.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt07', ['equation', 'text'], [
    { id: 'math11-qt07-st-term', name: 'Công bội và số hạng tổng quát', example: 'Tìm $u_n$, $q$ hoặc vị trí số hạng.', targetQuestionCount: 12 },
    { id: 'math11-qt07-st-sum', name: 'Tổng hữu hạn và mô hình tăng trưởng', example: 'Tính $S_n$ hoặc đại lượng tăng theo tỉ lệ.', targetQuestionCount: 12 }
  ])
];
