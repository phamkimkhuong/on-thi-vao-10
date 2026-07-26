import type { LearningMisconception, LearningOutcome } from '@/types';
import { g11PhysicsCourse } from './course';

export const g11PhysicsOutcomes: LearningOutcome[] = g11PhysicsCourse.modules
  .flatMap(module => module.outcomes)
  .sort((a, b) => a.orderIndex - b.orderIndex);

export const g11PhysicsMisconceptions: LearningMisconception[] =
  g11PhysicsCourse.modules.flatMap(module => module.misconceptions);
