import type { QuestionTypePracticeBlueprint } from '@/types';
const names = {
  pronunciation: ['yes-no', 'wh-context'], vocabulary: ['meaning-word-form', 'education-collocation'],
  grammar: ['perfect-gerund', 'perfect-participle'], reading: ['main-detail', 'infer-evaluate'],
  writing: ['order-cohesion', 'transform-advice'], communication: ['ask-advise', 'compare-agency']
} as const;
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
export const g11EnglishModule7PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  Object.entries(names).map(([type, subTypes]) => ({
    questionTypeId: `eng11-qt-u7-${type}`,
    subTypes: subTypes.map(name => ({ id: `eng11-u7-${type}-${name}`, name, example: `Unit 7 ${name}`, targetQuestionCount: 6 })),
    coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
  }));
