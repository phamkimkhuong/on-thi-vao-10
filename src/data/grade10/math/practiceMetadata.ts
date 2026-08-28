import type { QuestionPracticeMetadata } from '@/types';
import { g10MathModule1PracticeMetadata } from './modules/module1_logic_sets/practiceMetadata';
import { g10MathModule2PracticeMetadata } from './modules/module2_inequalities/practiceMetadata';
import { g10MathModule2ExpansionMetadata } from './modules/module2_inequalities/curriculumExpansion';
import { g10MathModule3PracticeMetadata } from './modules/module3_functions/practiceMetadata';
import { g10MathModule3ExpansionMetadata } from './modules/module3_functions/curriculumExpansion';
import { g10MathModule4PracticeMetadata } from './modules/module4_trigonometry/practiceMetadata';
import { g10MathModule5PracticeMetadata } from './modules/module5_vectors/practiceMetadata';
import { g10MathModule6PracticeMetadata } from './modules/module6_combinatorics/practiceMetadata';
import { g10MathModule7PracticeMetadata } from './modules/module7_statistics_probability/practiceMetadata';
import { g10MathModule8PracticeMetadata } from './modules/module8_coordinate_geometry/practiceMetadata';

export const g10MathPracticeMetadata: QuestionPracticeMetadata[] = [
  ...g10MathModule1PracticeMetadata,
  ...g10MathModule2PracticeMetadata,
  ...g10MathModule2ExpansionMetadata,
  ...g10MathModule3PracticeMetadata,
  ...g10MathModule3ExpansionMetadata,
  ...g10MathModule4PracticeMetadata,
  ...g10MathModule5PracticeMetadata,
  ...g10MathModule6PracticeMetadata,
  ...g10MathModule7PracticeMetadata,
  ...g10MathModule8PracticeMetadata
];
