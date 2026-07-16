import { Topic } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g10BiologyTopics: Topic[] = Object.values(modules)
  .flatMap((mod: any) => mod.topics || [])
  .sort((a, b) => a.orderIndex - b.orderIndex);
