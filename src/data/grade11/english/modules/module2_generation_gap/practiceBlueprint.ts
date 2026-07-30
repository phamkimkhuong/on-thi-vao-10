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

export const g11EnglishModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('eng11-qt-u2-pronunciation', [
    { id: 'eng11-u2-pron-expand', name: 'Mở rộng dạng rút gọn', example: 'we’ll → we will; she’s finished → she has finished', targetQuestionCount: 6 },
    { id: 'eng11-u2-pron-context', name: 'Chọn dạng theo ngữ cảnh', example: 'Phân biệt he’s = he is/he has và mức độ trang trọng.', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u2-vocabulary', [
    { id: 'eng11-u2-vocab-meaning', name: 'Nghĩa từ trong ngữ cảnh', example: 'generation gap, value, attitude, conflict', targetQuestionCount: 6 },
    { id: 'eng11-u2-vocab-collocation', name: 'Collocation về gia đình', example: 'set rules, respect privacy, reach a compromise', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u2-grammar', [
    { id: 'eng11-u2-grammar-obligation', name: 'Nghĩa vụ và lời khuyên', example: 'must / have to / should', targetQuestionCount: 6 },
    { id: 'eng11-u2-grammar-negative', name: 'Cấm đoán và không cần thiết', example: 'mustn’t / don’t have to / shouldn’t', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u2-reading', [
    { id: 'eng11-u2-read-main-detail', name: 'Mục đích, ý chính và chi tiết', example: 'Main purpose / According to the passage', targetQuestionCount: 6 },
    { id: 'eng11-u2-read-infer-attitude', name: 'Suy luận, thái độ và quy chiếu', example: 'It can be inferred / The writer suggests / refers to', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u2-writing', [
    { id: 'eng11-u2-write-order', name: 'Sắp xếp đoạn và liên kết ý', example: 'Topic sentence, opposing view, compromise, conclusion', targetQuestionCount: 6 },
    { id: 'eng11-u2-write-transform', name: 'Viết lại câu với modal', example: 'It is necessary → have to; It is advisable → should', targetQuestionCount: 6 }
  ]),
  blueprint('eng11-qt-u2-communication', [
    { id: 'eng11-u2-comm-opinion', name: 'Nêu và phản hồi quan điểm', example: 'In my view... / I see your point, but...', targetQuestionCount: 6 },
    { id: 'eng11-u2-comm-compromise', name: 'Làm rõ và thỏa hiệp', example: 'Do you mean...? / How about agreeing on...?', targetQuestionCount: 6 }
  ])
];
