import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule5Manifest: ModuleManifest = {
  id: 'eng11-m5',
  courseId: 'grade11:english',
  title: 'Unit 5: Global Warming',
  slug: 'global-warming',
  orderIndex: 5,
  scope: 'core',
  topicIds: ['eng11-topic-u5'],
  lessonIds: [
    'eng11-u5-getting-started', 'eng11-u5-language', 'eng11-u5-reading',
    'eng11-u5-speaking', 'eng11-u5-listening', 'eng11-u5-writing',
    'eng11-u5-communication-culture', 'eng11-u5-looking-back-project'
  ],
  prerequisiteModuleIds: ['eng11-m1', 'eng11-m2', 'eng11-m3', 'eng11-m4'],
  reviewStatus: 'source_checked'
};
