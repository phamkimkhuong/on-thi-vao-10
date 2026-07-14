import { Solution } from '@/types';
import { m0Solutions } from './modules/m0_intro';
import { m1Solutions } from './modules/m1_atoms';
import { m2Solutions } from './modules/m2_periodic';
import { m3Solutions } from './modules/m3_bond';
import { m4Solutions } from './modules/m4_redox';
import { m5Solutions } from './modules/m5_energy';
import { m6Solutions } from './modules/m6_rate';
import { m7Solutions } from './modules/m7_halogen';
import { m8Solutions } from './modules/m8_synthesis';

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
