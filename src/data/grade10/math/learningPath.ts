import type { LearningMisconception, LearningOutcome } from '@/types';
import { g10MathModule1Misconceptions, g10MathModule1Outcomes } from './modules/module1_logic_sets/learningPath';
import { g10MathModule2Misconceptions, g10MathModule2Outcomes } from './modules/module2_inequalities/learningPath';
import { g10MathModule3Misconceptions, g10MathModule3Outcomes } from './modules/module3_functions/learningPath';
import { g10MathModule4Misconceptions, g10MathModule4Outcomes } from './modules/module4_trigonometry/learningPath';
import { g10MathModule5Misconceptions, g10MathModule5Outcomes } from './modules/module5_vectors/learningPath';
import { g10MathModule6Misconceptions, g10MathModule6Outcomes } from './modules/module6_combinatorics/learningPath';
import { g10MathModule7Misconceptions, g10MathModule7Outcomes } from './modules/module7_statistics_probability/learningPath';
import { g10MathModule8Misconceptions, g10MathModule8Outcomes } from './modules/module8_coordinate_geometry/learningPath';

export const g10MathOutcomes: LearningOutcome[] = [
  ...g10MathModule1Outcomes,
  ...g10MathModule2Outcomes,
  ...g10MathModule3Outcomes,
  ...g10MathModule4Outcomes,
  ...g10MathModule5Outcomes,
  ...g10MathModule6Outcomes,
  ...g10MathModule7Outcomes,
  ...g10MathModule8Outcomes
];

export const g10MathMisconceptions: LearningMisconception[] = [
  ...g10MathModule1Misconceptions,
  ...g10MathModule2Misconceptions,
  ...g10MathModule3Misconceptions,
  ...g10MathModule4Misconceptions,
  ...g10MathModule5Misconceptions,
  ...g10MathModule6Misconceptions,
  ...g10MathModule7Misconceptions,
  ...g10MathModule8Misconceptions
];
