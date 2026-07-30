import type { QuestionTypePracticeBlueprint } from '@/types';
const names = { pronunciation: ['form', 'meaning-tone'], vocabulary: ['meaning-word-form', 'ecosystem-collocation'], grammar: ['formation-head', 'meaning-spelling'], reading: ['main-detail', 'infer-evaluate'], writing: ['order-cohesion', 'transform-evidence'], communication: ['ask-suggest', 'stakeholder-tradeoff'] } as const;
const coverage = { targetQuestionCount: 12, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const, requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2 };
export const g11EnglishModule10PracticeBlueprints: QuestionTypePracticeBlueprint[] = Object.entries(names).map(([type, subs]) => ({
  questionTypeId: `eng11-qt-u10-${type}`, subTypes: subs.map(name => ({ id: `eng11-u10-${type}-${name}`, name, example: `Unit 10 ${name}`, targetQuestionCount: 6 })),
  coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
