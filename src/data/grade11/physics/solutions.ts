import { Solution } from '@/types';
import { g11PhysicsCourse } from './course';

export const g11PhysicsSolutions: Solution[] =
  g11PhysicsCourse.modules.flatMap(module => module.practiceSolutions);
