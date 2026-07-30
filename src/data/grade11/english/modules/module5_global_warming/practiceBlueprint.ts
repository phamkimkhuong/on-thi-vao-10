import type { QuestionTypePracticeBlueprint } from '@/types';

const names = {
  pronunciation: ['content-stress', 'contrastive-stress'],
  vocabulary: ['meaning-word-form', 'climate-collocation'],
  grammar: ['present-participle', 'past-participle'],
  reading: ['main-detail', 'infer-evidence'],
  writing: ['order-cohesion', 'transform-evidence'],
  communication: ['suggest-respond', 'evidence-tradeoff']
} as const;
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
export const g11EnglishModule5PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  Object.entries(names).map(([type, subTypes]) => ({
    questionTypeId: `eng11-qt-u5-${type}`,
    subTypes: subTypes.map(name => ({ id: `eng11-u5-${type}-${name}`, name, example: `Unit 5 ${name}`, targetQuestionCount: 6 })),
    coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
  }));
