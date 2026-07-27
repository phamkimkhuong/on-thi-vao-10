import type { QuestionTypePracticeBlueprint } from '@/types';

const b = (
  id: string,
  reps: QuestionTypePracticeBlueprint['coverage']['requiredRepresentations'],
  subTypes: QuestionTypePracticeBlueprint['subTypes']
): QuestionTypePracticeBlueprint => ({
  questionTypeId: id,
  subTypes,
  coverage: {
    targetQuestionCount: 24,
    minimumQuestionsPerSubType: 6,
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
    requiredRepresentations: reps,
    masteryHoldoutCount: 4
  }
});

export const g11MathModule6PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  b('math11-qt18', ['equation', 'text'], [
    { id: 'math11-qt18-st-rules', name: 'Quy tắc lũy thừa', example: 'Rút gọn tích, thương, lũy thừa của lũy thừa.', targetQuestionCount: 12 },
    { id: 'math11-qt18-st-radical', name: 'Số mũ hữu tỉ và ứng dụng', example: 'Đổi căn sang lũy thừa và tính giá trị.', targetQuestionCount: 12 }
  ]),
  b('math11-qt19', ['equation', 'text'], [
    { id: 'math11-qt19-st-definition', name: 'Định nghĩa và giá trị cơ bản', example: 'Tính $\\log_ab$ từ $a^x=b$.', targetQuestionCount: 12 },
    { id: 'math11-qt19-st-properties', name: 'Tính chất và đổi cơ số', example: 'Rút gọn tổng, hiệu lôgarit.', targetQuestionCount: 12 }
  ]),
  b('math11-qt20', ['graph', 'text'], [
    { id: 'math11-qt20-st-properties', name: 'Tính chất và đồ thị', example: 'Nhận dạng miền, chiều biến thiên, tiệm cận.', targetQuestionCount: 12 },
    { id: 'math11-qt20-st-model', name: 'Mô hình tăng trưởng', example: 'Tính lãi kép hoặc tăng trưởng.', targetQuestionCount: 12 }
  ]),
  b('math11-qt21', ['equation', 'graph'], [
    { id: 'math11-qt21-st-equation', name: 'Phương trình cơ bản', example: 'Đưa về cùng cơ số.', targetQuestionCount: 12 },
    { id: 'math11-qt21-st-inequality', name: 'Bất phương trình cơ bản', example: 'Xét cơ số và điều kiện.', targetQuestionCount: 12 }
  ])
];
