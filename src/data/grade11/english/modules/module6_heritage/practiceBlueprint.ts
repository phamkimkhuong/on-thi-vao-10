import type { QuestionTypePracticeBlueprint } from '@/types';
const names = {
  pronunciation: ['statement-command', 'list-intonation'],
  vocabulary: ['meaning-word-form', 'heritage-collocation'],
  grammar: ['purpose-adjective', 'noun-modifier'],
  reading: ['main-detail', 'infer-stakeholder'],
  writing: ['order-cohesion', 'transform-proposal'],
  communication: ['request-suggest', 'community-respect']
} as const;
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
export const g11EnglishModule6PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  Object.entries(names).map(([type, subTypes]) => ({
    questionTypeId: `eng11-qt-u6-${type}`,
    subTypes: subTypes.map(name => ({ id: `eng11-u6-${type}-${name}`, name, example: `Unit 6 ${name}`, targetQuestionCount: 6 })),
    coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
  }));
