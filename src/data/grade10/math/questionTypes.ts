import type { QuestionType } from '@/types';
import { g10MathPracticeBlueprints } from './practiceBlueprint';
import { g10MathModule1QuestionTypes } from './modules/module1_logic_sets/questionTypes';
import { g10MathModule2QuestionTypes } from './modules/module2_inequalities/questionTypes';
import { g10MathModule3QuestionTypes } from './modules/module3_functions/questionTypes';
import { g10MathModule4QuestionTypes } from './modules/module4_trigonometry/questionTypes';
import { g10MathModule5QuestionTypes } from './modules/module5_vectors/questionTypes';
import { g10MathModule6QuestionTypes } from './modules/module6_combinatorics/questionTypes';
import { g10MathModule7QuestionTypes } from './modules/module7_statistics_probability/questionTypes';
import { g10MathModule8QuestionTypes } from './modules/module8_coordinate_geometry/questionTypes';

const rawQuestionTypes: QuestionType[] = [
  ...g10MathModule1QuestionTypes,
  ...g10MathModule2QuestionTypes,
  ...g10MathModule3QuestionTypes,
  ...g10MathModule4QuestionTypes,
  ...g10MathModule5QuestionTypes,
  ...g10MathModule6QuestionTypes,
  ...g10MathModule7QuestionTypes,
  ...g10MathModule8QuestionTypes
];

const blueprintByQuestionTypeId = new Map(
  g10MathPracticeBlueprints.map(blueprint => [blueprint.questionTypeId, blueprint])
);

/** Aggregator: gắn blueprint tường minh, không suy luận dạng con từ thứ tự câu. */
export const g10MathQuestionTypes: QuestionType[] = rawQuestionTypes.map(questionType => {
  const blueprint = blueprintByQuestionTypeId.get(questionType.id);
  return blueprint
    ? { ...questionType, subTypes: blueprint.subTypes, practiceCoverage: blueprint.coverage }
    : questionType;
});
