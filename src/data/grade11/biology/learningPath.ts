import type { LearningMisconception, LearningOutcome } from '@/types';
import { g11BiologyCourse } from './course';

export const g11BiologyOutcomes: LearningOutcome[] = g11BiologyCourse.modules
  .flatMap(module => module.outcomes)
  .sort((left, right) => left.orderIndex - right.orderIndex);

export const g11BiologyMisconceptions: LearningMisconception[] =
  g11BiologyCourse.modules.flatMap(module => module.misconceptions);
