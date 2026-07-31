import type { Question } from '@/types';
import { g10MathPracticeMetadata } from './practiceMetadata';
import { g10MathPracticeChoices } from './practiceChoices';
import { applyMath10PracticeChoice } from './practiceChoiceNormalizer';
import { g10MathModule1Questions } from './modules/module1_logic_sets/questions';
import { g10MathModule2Questions } from './modules/module2_inequalities/questions';
import { g10MathModule3Questions } from './modules/module3_functions/questions';
import { g10MathModule4Questions } from './modules/module4_trigonometry/questions';
import { g10MathModule5Questions } from './modules/module5_vectors/questions';
import { g10MathModule6Questions } from './modules/module6_combinatorics/questions';
import { g10MathModule7Questions } from './modules/module7_statistics_probability/questions';
import { g10MathModule8Questions } from './modules/module8_coordinate_geometry/questions';

const rawQuestions: Question[] = [
  ...g10MathModule1Questions,
  ...g10MathModule2Questions,
  ...g10MathModule3Questions,
  ...g10MathModule4Questions,
  ...g10MathModule5Questions,
  ...g10MathModule6Questions,
  ...g10MathModule7Questions,
  ...g10MathModule8Questions
];

const metadataByQuestionId = new Map(
  g10MathPracticeMetadata.map(metadata => [metadata.questionId, metadata])
);
const choiceByQuestionId = new Map(
  g10MathPracticeChoices.map(choice => [choice.id, choice])
);

/** Aggregator: chuẩn hóa câu luyện tập về A–B–C–D rồi gắn metadata học tập. */
export const g10MathQuestions: Question[] = rawQuestions.map(question => {
  const normalizedQuestion = applyMath10PracticeChoice(
    question,
    choiceByQuestionId.get(question.id)
  );
  const metadata = metadataByQuestionId.get(question.id);
  return metadata
    ? { ...normalizedQuestion, ...metadata, id: question.id }
    : normalizedQuestion;
});
