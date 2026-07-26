import { QuestionType } from '@/types';
import { g11PhysicsCourse } from './course';

export const g11PhysicsQuestionTypes: QuestionType[] =
  g11PhysicsCourse.modules.flatMap(module => module.questionTypes);
