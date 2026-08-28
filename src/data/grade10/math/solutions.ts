import type { Solution } from '@/types';
import { g10MathQuestions } from './questions';
import { applyMath10PracticeChoiceSolution } from './practiceChoiceNormalizer';
import { g10MathModule1Solutions } from './modules/module1_logic_sets/solutions';
import { g10MathModule2Solutions } from './modules/module2_inequalities/solutions';
import { g10MathModule2ExpansionSolutions } from './modules/module2_inequalities/curriculumExpansion';
import { g10MathModule3Solutions } from './modules/module3_functions/solutions';
import { g10MathModule3ExpansionSolutions } from './modules/module3_functions/curriculumExpansion';
import { g10MathModule4Solutions } from './modules/module4_trigonometry/solutions';
import { g10MathModule5Solutions } from './modules/module5_vectors/solutions';
import { g10MathModule6Solutions } from './modules/module6_combinatorics/solutions';
import { g10MathModule7Solutions } from './modules/module7_statistics_probability/solutions';
import { g10MathModule8Solutions } from './modules/module8_coordinate_geometry/solutions';

const rawSolutions: Solution[] = [
  ...g10MathModule1Solutions,
  ...g10MathModule2Solutions,
  ...g10MathModule2ExpansionSolutions,
  ...g10MathModule3Solutions,
  ...g10MathModule3ExpansionSolutions,
  ...g10MathModule4Solutions,
  ...g10MathModule5Solutions,
  ...g10MathModule6Solutions,
  ...g10MathModule7Solutions,
  ...g10MathModule8Solutions
];

const questionById = new Map(
  g10MathQuestions.map(question => [question.id, question])
);

/** Aggregator: đồng bộ đáp án lời giải với lựa chọn A–B–C–D đã chuẩn hóa. */
export const g10MathSolutions: Solution[] = rawSolutions.map(solution =>
  applyMath10PracticeChoiceSolution(
    solution,
    questionById.get(solution.questionId)
  )
);
