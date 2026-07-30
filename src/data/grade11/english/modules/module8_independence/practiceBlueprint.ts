import type { QuestionTypePracticeBlueprint } from '@/types';
const names = {
  pronunciation: ['invite-suggest', 'request-politeness'], vocabulary: ['meaning-word-form', 'independence-collocation'],
  grammar: ['subject-object-focus', 'adverbial-focus'], reading: ['main-detail', 'infer-evaluate'],
  writing: ['order-cohesion', 'transform-plan'], communication: ['invite-request', 'support-agency']
} as const;
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
export const g11EnglishModule8PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  Object.entries(names).map(([type, subTypes]) => ({
    questionTypeId: `eng11-qt-u8-${type}`,
    subTypes: subTypes.map(name => ({ id: `eng11-u8-${type}-${name}`, name, example: `Unit 8 ${name}`, targetQuestionCount: 6 })),
    coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
  }));
