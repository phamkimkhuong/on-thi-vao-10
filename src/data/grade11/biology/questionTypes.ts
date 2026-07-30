import type { QuestionType } from '@/types';
import { g11BiologyCourse } from './course';

export const g11BiologyQuestionTypes: QuestionType[] =
  g11BiologyCourse.modules.flatMap(module => module.questionTypes);
