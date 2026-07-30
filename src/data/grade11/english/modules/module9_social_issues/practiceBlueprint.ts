import type { QuestionTypePracticeBlueprint } from '@/types';
const names = { pronunciation: ['two-choice', 'multi-choice-context'], vocabulary: ['meaning-word-form', 'social-collocation'], grammar: ['addition-contrast', 'cause-result'], reading: ['main-detail', 'infer-evaluate'], writing: ['order-cohesion', 'transform-proposal'], communication: ['disappointment-support', 'boundary-escalate'] } as const;
const coverage = { targetQuestionCount: 12, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const, requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2 };
export const g11EnglishModule9PracticeBlueprints: QuestionTypePracticeBlueprint[] = Object.entries(names).map(([type, subs]) => ({
  questionTypeId: `eng11-qt-u9-${type}`, subTypes: subs.map(name => ({ id: `eng11-u9-${type}-${name}`, name, example: `Unit 9 ${name}`, targetQuestionCount: 6 })),
  coverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
