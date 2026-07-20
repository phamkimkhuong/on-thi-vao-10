import { QuestionType } from '@/types';
import { g10BiologyPracticeBlueprints } from './practiceBlueprint';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

const moduleQuestionTypes: QuestionType[] = Object.values(modules).flatMap(
  (mod: any) => mod.questionTypes || []
);

const blueprintByQuestionTypeId = new Map(
  g10BiologyPracticeBlueprints.map(blueprint => [blueprint.questionTypeId, blueprint])
);

export const g10BiologyQuestionTypes: QuestionType[] = moduleQuestionTypes.map(questionType => {
  const blueprint = blueprintByQuestionTypeId.get(questionType.id);
  return blueprint
    ? { ...questionType, subTypes: blueprint.subTypes, practiceCoverage: blueprint.coverage }
    : questionType;
});
