import type { LearningMisconception, LearningOutcome } from '@/types';
import { g10BiologyModule0Misconceptions, g10BiologyModule0Outcomes } from './modules/module0_intro/learningPath';
import { g10BiologyModule1Misconceptions, g10BiologyModule1Outcomes } from './modules/module1_chemistry/learningPath';
import { g10BiologyModule2Misconceptions, g10BiologyModule2Outcomes } from './modules/module2_structure/learningPath';
import { g10BiologyModule3Misconceptions, g10BiologyModule3Outcomes } from './modules/module3_transport/learningPath';
import { g10BiologyModule4Misconceptions, g10BiologyModule4Outcomes } from './modules/module4_metabolism/learningPath';
import { g10BiologyModule5Misconceptions, g10BiologyModule5Outcomes } from './modules/module5_cell_division/learningPath';
import { g10BiologyModule6Misconceptions, g10BiologyModule6Outcomes } from './modules/module6_microbiology/learningPath';
import { g10BiologyModule7Misconceptions, g10BiologyModule7Outcomes } from './modules/module7_virus/learningPath';

export const g10BiologyOutcomes: LearningOutcome[] = [
  ...g10BiologyModule0Outcomes,
  ...g10BiologyModule1Outcomes,
  ...g10BiologyModule2Outcomes,
  ...g10BiologyModule3Outcomes,
  ...g10BiologyModule4Outcomes,
  ...g10BiologyModule5Outcomes,
  ...g10BiologyModule6Outcomes,
  ...g10BiologyModule7Outcomes
];

export const g10BiologyMisconceptions: LearningMisconception[] = [
  ...g10BiologyModule0Misconceptions,
  ...g10BiologyModule1Misconceptions,
  ...g10BiologyModule2Misconceptions,
  ...g10BiologyModule3Misconceptions,
  ...g10BiologyModule4Misconceptions,
  ...g10BiologyModule5Misconceptions,
  ...g10BiologyModule6Misconceptions,
  ...g10BiologyModule7Misconceptions
];
