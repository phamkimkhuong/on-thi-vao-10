import { Question } from '@/types';
import { m0Questions } from './modules/m0_intro';
import { m1Questions } from './modules/m1_atoms';
import { m2Questions } from './modules/m2_periodic';
import { m3Questions } from './modules/m3_bond';
import { m4Questions } from './modules/m4_redox';
import { m5Questions } from './modules/m5_energy';
import { m6Questions } from './modules/m6_rate';
import { m7Questions } from './modules/m7_halogen';
import { m8Questions } from './modules/m8_synthesis';

export const g10ChemistryQuestions: Question[] = [
  ...m0Questions,
  ...m1Questions,
  ...m2Questions,
  ...m3Questions,
  ...m4Questions,
  ...m5Questions,
  ...m6Questions,
  ...m7Questions,
  ...m8Questions
];
