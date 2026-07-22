import type { Topic } from '@/types';
import { g10MathModule1Topics } from './modules/module1_logic_sets/topics';
import { g10MathModule2Topics } from './modules/module2_inequalities/topics';
import { g10MathModule3Topics } from './modules/module3_functions/topics';
import { g10MathModule4Topics } from './modules/module4_trigonometry/topics';
import { g10MathModule5Topics } from './modules/module5_vectors/topics';
import { g10MathModule6Topics } from './modules/module6_combinatorics/topics';
import { g10MathModule7Topics } from './modules/module7_statistics_probability/topics';
import { g10MathModule8Topics } from './modules/module8_coordinate_geometry/topics';

/** Aggregator: dữ liệu thô được sở hữu bởi từng module. */
export const g10MathTopics: Topic[] = [
  ...g10MathModule1Topics,
  ...g10MathModule2Topics,
  ...g10MathModule3Topics,
  ...g10MathModule4Topics,
  ...g10MathModule5Topics,
  ...g10MathModule6Topics,
  ...g10MathModule7Topics,
  ...g10MathModule8Topics
];
