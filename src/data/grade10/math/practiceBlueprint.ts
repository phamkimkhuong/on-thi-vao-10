import type { QuestionTypePracticeBlueprint } from '@/types';
import { g10MathModule1PracticeBlueprints } from './modules/module1_logic_sets/practiceBlueprint';
import { g10MathModule2PracticeBlueprints } from './modules/module2_inequalities/practiceBlueprint';
import { g10MathModule3PracticeBlueprints } from './modules/module3_functions/practiceBlueprint';
import { g10MathModule4PracticeBlueprints } from './modules/module4_trigonometry/practiceBlueprint';
import { g10MathModule5PracticeBlueprints } from './modules/module5_vectors/practiceBlueprint';
import { g10MathModule6PracticeBlueprints } from './modules/module6_combinatorics/practiceBlueprint';
import { g10MathModule7PracticeBlueprints } from './modules/module7_statistics_probability/practiceBlueprint';
import { g10MathModule8PracticeBlueprints } from './modules/module8_coordinate_geometry/practiceBlueprint';

export const g10MathPracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  ...g10MathModule1PracticeBlueprints,
  ...g10MathModule2PracticeBlueprints,
  ...g10MathModule3PracticeBlueprints,
  ...g10MathModule4PracticeBlueprints,
  ...g10MathModule5PracticeBlueprints,
  ...g10MathModule6PracticeBlueprints,
  ...g10MathModule7PracticeBlueprints,
  ...g10MathModule8PracticeBlueprints
];
