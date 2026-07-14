import { Solution } from '@/types';
import { m0Solutions } from './modules/module0_intro';
import { m1Solutions } from './modules/module1_atoms';
import { m2Solutions } from './modules/module2_periodic';
import { m3Solutions } from './modules/module3_bond';
import { m4Solutions } from './modules/module4_redox';
import { m5Solutions } from './modules/module5_energy';
import { m6Solutions } from './modules/module6_rate';
import { m7Solutions } from './modules/module7_halogen';
import { m8Solutions } from './modules/module8_synthesis';

export const g10ChemistrySolutions: Solution[] = [
  ...m0Solutions,
  ...m1Solutions,
  ...m2Solutions,
  ...m3Solutions,
  ...m4Solutions,
  ...m5Solutions,
  ...m6Solutions,
  ...m7Solutions,
  ...m8Solutions
];
