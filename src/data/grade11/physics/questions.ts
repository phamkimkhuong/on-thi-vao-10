import { Question } from '@/types';
import { g11PhysicsCourse } from './course';

export const g11PhysicsQuestions: Question[] =
  g11PhysicsCourse.modules.flatMap(module => module.practiceQuestions);
