import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule1Manifest: ModuleManifest = {
  id: 'eng11-m1',
  courseId: 'grade11:english',
  title: 'Unit 1: A Long and Healthy Life',
  slug: 'a-long-and-healthy-life',
  orderIndex: 1,
  scope: 'core',
  topicIds: ['eng11-topic-u1'],
  lessonIds: [
    'eng11-u1-getting-started',
    'eng11-u1-language',
    'eng11-u1-reading',
    'eng11-u1-speaking',
    'eng11-u1-listening',
    'eng11-u1-writing',
    'eng11-u1-communication-culture',
    'eng11-u1-looking-back-project'
  ],
  prerequisiteModuleIds: [],
  reviewStatus: 'source_checked'
};
