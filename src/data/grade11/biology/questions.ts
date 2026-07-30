import type { Question } from '@/types';
import { g11BiologyCourse } from './course';

export const g11BiologyQuestions: Question[] =
  g11BiologyCourse.modules.flatMap(module => module.practiceQuestions);
