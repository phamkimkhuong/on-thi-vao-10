import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule2Manifest: ModuleManifest = {
  id: 'eng11-m2',
  courseId: 'grade11:english',
  title: 'Unit 2: The Generation Gap',
  slug: 'the-generation-gap',
  orderIndex: 2,
  scope: 'core',
  topicIds: ['eng11-topic-u2'],
  lessonIds: [
    'eng11-u2-getting-started',
    'eng11-u2-language',
    'eng11-u2-reading',
    'eng11-u2-speaking',
    'eng11-u2-listening',
    'eng11-u2-writing',
    'eng11-u2-communication-culture',
    'eng11-u2-looking-back-project'
  ],
  prerequisiteModuleIds: ['eng11-m1'],
  reviewStatus: 'source_checked'
};
