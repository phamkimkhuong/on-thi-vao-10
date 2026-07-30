import type { QuestionTypePracticeBlueprint } from '@/types';

const coverage = {
  targetQuestionCount: 12,
  minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const,
  masteryHoldoutCount: 2
};

const blueprint = (
  questionTypeId: string,
  subTypes: QuestionTypePracticeBlueprint['subTypes']
): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: {
    ...coverage,
    requiredPracticeRoles: [...coverage.requiredPracticeRoles],
    requiredRepresentations: [...coverage.requiredRepresentations]
  }
});

export const g11EnglishModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('eng11-qt-u1-pronunciation', [
    { id: 'eng11-u1-pron-weak', name: 'Nhận biết dạng yếu', example: 'Have you finished? — have thường ở dạng yếu.', targetQuestionCount: 6 },
    { id: 'eng11-u1-pron-strong', name: 'Nhận biết dạng mạnh', example: 'Yes, I have. — have mang dạng mạnh.', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u1-vocabulary', [
    { id: 'eng11-u1-vocab-meaning', name: 'Nghĩa từ trong ngữ cảnh', example: 'immune system, life expectancy, ingredient', targetQuestionCount: 6 },
    { id: 'eng11-u1-vocab-collocation', name: 'Collocation sức khỏe', example: 'balanced diet, regular exercise, break a habit', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u1-grammar', [
    { id: 'eng11-u1-grammar-time', name: 'Dấu hiệu và mốc thời gian', example: 'I saw him yesterday / I have known him for years.', targetQuestionCount: 6 },
    { id: 'eng11-u1-grammar-context', name: 'Lựa chọn thì theo ngữ cảnh', example: 'The result matters now hoặc sự kiện đã kết thúc.', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u1-reading', [
    { id: 'eng11-u1-read-main-detail', name: 'Ý chính và chi tiết', example: 'Main idea / According to the passage', targetQuestionCount: 6 },
    { id: 'eng11-u1-read-infer-reference', name: 'Suy luận, quy chiếu và từ trong ngữ cảnh', example: 'The word “it” refers to... / It can be inferred...', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u1-writing', [
    { id: 'eng11-u1-write-order', name: 'Sắp xếp và liên kết câu', example: 'Chọn thứ tự tạo thành đoạn văn hợp lý.', targetQuestionCount: 6 },
    { id: 'eng11-u1-write-transform', name: 'Viết lại câu và chọn câu chủ đề', example: 'Viết lại với since/for hoặc chọn topic sentence.', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u1-communication', [
    { id: 'eng11-u1-comm-advice', name: 'Đưa và đáp lại lời khuyên', example: 'You should... / Thanks, I’ll try that.', targetQuestionCount: 6 },
    { id: 'eng11-u1-comm-response', name: 'Phản hồi trong tình huống sức khỏe', example: 'Hỏi thăm, đồng ý, từ chối hoặc đề nghị lịch sự.', targetQuestionCount: 6 }
  ])
];
