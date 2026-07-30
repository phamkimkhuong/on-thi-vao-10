import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule3Manifest: ModuleManifest = {
  id: 'eng11-m3',
  courseId: 'grade11:english',
  title: 'Unit 3: Cities of the Future',
  slug: 'cities-of-the-future',
  orderIndex: 3,
  scope: 'core',
  topicIds: ['eng11-topic-u3'],
  lessonIds: [
    'eng11-u3-getting-started',
    'eng11-u3-language',
    'eng11-u3-reading',
    'eng11-u3-speaking',
    'eng11-u3-listening',
    'eng11-u3-writing',
    'eng11-u3-communication-culture',
    'eng11-u3-looking-back-project',
    'eng11-review-1'
  ],
  prerequisiteModuleIds: ['eng11-m1', 'eng11-m2'],
  reviewStatus: 'source_checked'
};
