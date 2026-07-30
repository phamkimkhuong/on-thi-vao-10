import type { QuestionTypePracticeBlueprint } from '@/types';

const coverage = {
  targetQuestionCount: 12,
  minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const,
  masteryHoldoutCount: 2
};
const bp = (questionTypeId: string, subTypes: QuestionTypePracticeBlueprint['subTypes']): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
});

export const g11EnglishModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  bp('eng11-qt-u3-pronunciation', [
    { id: 'eng11-u3-pron-identify', name: 'Nhận diện vị trí nối âm', example: 'lives‿in, cities‿of', targetQuestionCount: 6 },
    { id: 'eng11-u3-pron-boundary', name: 'Phân biệt ranh giới có/không nối', example: 'Xét âm thực tế và vị trí ngắt câu.', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u3-vocabulary', [
    { id: 'eng11-u3-vocab-meaning', name: 'Nghĩa từ đô thị', example: 'infrastructure, sensor, pedestrian, congestion', targetQuestionCount: 6 },
    { id: 'eng11-u3-vocab-collocation', name: 'Collocation đô thị thông minh', example: 'renewable energy, public transport, reduce congestion', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u3-grammar', [
    { id: 'eng11-u3-grammar-stative', name: 'Stative verbs chuyển nghĩa ở tiếp diễn', example: 'I think / I am thinking; I have / I am having', targetQuestionCount: 6 },
    { id: 'eng11-u3-grammar-linking', name: 'Linking verbs + adjective', example: 'The plan seems practical; the air smells clean.', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u3-reading', [
    { id: 'eng11-u3-read-main-detail', name: 'Ý chính, mục đích và chi tiết', example: 'Main idea / According to the passage', targetQuestionCount: 6 },
    { id: 'eng11-u3-read-infer-evidence', name: 'Suy luận, bằng chứng và quy chiếu', example: 'The evidence suggests / refers to', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u3-writing', [
    { id: 'eng11-u3-write-order', name: 'Sắp xếp lập luận đô thị', example: 'Problem → solution → effect → limitation', targetQuestionCount: 6 },
    { id: 'eng11-u3-write-transform', name: 'Kết hợp và viết lại câu', example: 'Nối nguyên nhân-kết quả; chọn topic/concluding sentence', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u3-communication', [
    { id: 'eng11-u3-comm-prediction', name: 'Dự đoán và đánh giá', example: 'This may reduce congestion, but...', targetQuestionCount: 6 },
    { id: 'eng11-u3-comm-proposal', name: 'Đề xuất và phản hồi giải pháp', example: 'Why don’t we...? / That could work if...', targetQuestionCount: 6 }
  ])
];
