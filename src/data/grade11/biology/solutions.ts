import type { Solution } from '@/types';
import { g11BiologyCourse } from './course';

export const g11BiologySolutions: Solution[] =
  g11BiologyCourse.modules.flatMap(module => module.practiceSolutions);
