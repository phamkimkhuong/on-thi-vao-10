import { Solution } from '@/types';
import { dang1Solutions } from './solutions/dang1';
import { dang2Solutions } from './solutions/dang2';
import { dang3Solutions } from './solutions/dang3';

export const grammarSolutions: Solution[] = [
  ...dang1Solutions,
  ...dang2Solutions,
  ...dang3Solutions
];
