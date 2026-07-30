import type { QuestionTypePracticeBlueprint } from '@/types';
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
const bp = (questionTypeId: string, subTypes: QuestionTypePracticeBlueprint['subTypes']): QuestionTypePracticeBlueprint => ({
  questionTypeId, subTypes,
  coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
});
export const g11EnglishModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  bp('eng11-qt-u4-pronunciation', [
    { id: 'eng11-u4-pron-word', name: 'Nhận biết elision trong từ', example: 'family, different, history, comfortable', targetQuestionCount: 6 },
    { id: 'eng11-u4-pron-principle', name: 'Vận dụng nguyên tắc phát âm', example: 'Xác định âm tiết yếu có thể bị lược và trường hợp không được tùy ý lược.', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u4-vocabulary', [
    { id: 'eng11-u4-vocab-meaning', name: 'Khái niệm và từ loại', example: 'member state, diversity, identity, participant', targetQuestionCount: 6 },
    { id: 'eng11-u4-vocab-collocation', name: 'Collocation hợp tác khu vực', example: 'promote cooperation, strengthen ties, host a summit', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u4-grammar', [
    { id: 'eng11-u4-grammar-subject', name: 'Gerund làm chủ ngữ', example: 'Learning about ASEAN broadens perspectives.', targetQuestionCount: 6 },
    { id: 'eng11-u4-grammar-object', name: 'Gerund làm tân ngữ/sau giới từ', example: 'enjoy meeting; interested in joining', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u4-reading', [
    { id: 'eng11-u4-read-main-detail', name: 'Mục đích, ý chính và chi tiết', example: 'Main purpose / According to the passage', targetQuestionCount: 6 },
    { id: 'eng11-u4-read-infer-fairness', name: 'Suy luận, quy chiếu và công bằng', example: 'It can be inferred / who benefits / refers to', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u4-writing', [
    { id: 'eng11-u4-write-order', name: 'Sắp xếp thông báo/thư', example: 'Purpose → details → action', targetQuestionCount: 6 },
    { id: 'eng11-u4-write-transform', name: 'Kết hợp và hoàn thiện văn bản', example: 'Chọn câu chủ đề, kết luận hoặc viết lại với gerund', targetQuestionCount: 6 }
  ]),
  bp('eng11-qt-u4-communication', [
    { id: 'eng11-u4-comm-invite-info', name: 'Mời và hỏi thông tin', example: 'Would you like to...? / Could you tell me...?', targetQuestionCount: 6 },
    { id: 'eng11-u4-comm-cultural', name: 'Phản hồi đa văn hóa', example: 'Hỏi trải nghiệm cụ thể, tránh định kiến và thể hiện tôn trọng.', targetQuestionCount: 6 }
  ])
];
