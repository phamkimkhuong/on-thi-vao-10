import { Question } from '@/types';
import { m0Questions } from './modules/module0_intro';
import { m1Questions } from './modules/module1_atoms';
import { m2Questions } from './modules/module2_periodic';
import { m3Questions } from './modules/module3_bond';
import { m4Questions } from './modules/module4_redox';
import { m5Questions } from './modules/module5_energy';
import { m6Questions } from './modules/module6_rate';
import { m7Questions } from './modules/module7_halogen';
import { m8Questions } from './modules/module8_synthesis';

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
