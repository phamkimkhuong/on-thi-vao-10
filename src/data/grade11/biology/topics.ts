import type { Topic } from '@/types';
import { g11BiologyCourse } from './course';

export const g11BiologyTopics: Topic[] = g11BiologyCourse.modules
  .flatMap(module => module.topics)
  .sort((left, right) => left.orderIndex - right.orderIndex);
