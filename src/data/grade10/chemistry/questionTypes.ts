import type { QuestionType } from '@/types';
import { g10ChemistryPracticeBlueprints } from './practiceBlueprint';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

const moduleQuestionTypes: QuestionType[] = Object.values(modules).flatMap(
  (mod: any) => mod.questionTypes || []
);

const practiceBlueprintByTypeId = new Map(
  g10ChemistryPracticeBlueprints.map(blueprint => [blueprint.questionTypeId, blueprint])
);

/** Aggregator: chỉ gộp module và gắn blueprint theo ID, không chứa dữ liệu thô. */
export const g10ChemistryQuestionTypes: QuestionType[] = moduleQuestionTypes.map(questionType => {
  const blueprint = practiceBlueprintByTypeId.get(questionType.id);
  return blueprint
    ? { ...questionType, subTypes: blueprint.subTypes, practiceCoverage: blueprint.coverage }
    : questionType;
});
