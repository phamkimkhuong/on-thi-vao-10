import { Topic } from '@/types';
import { g11PhysicsCourse } from './course';

export const g11PhysicsTopics: Topic[] = g11PhysicsCourse.modules
  .flatMap(module => module.topics)
  .sort((a, b) => a.orderIndex - b.orderIndex);
