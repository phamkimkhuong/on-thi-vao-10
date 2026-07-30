import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule4Manifest: ModuleManifest = {
  id: 'eng11-m4',
  courseId: 'grade11:english',
  title: 'Unit 4: ASEAN and Viet Nam',
  slug: 'asean-and-viet-nam',
  orderIndex: 4,
  scope: 'core',
  topicIds: ['eng11-topic-u4'],
  lessonIds: [
    'eng11-u4-getting-started',
    'eng11-u4-language',
    'eng11-u4-reading',
    'eng11-u4-speaking',
    'eng11-u4-listening',
    'eng11-u4-writing',
    'eng11-u4-communication-culture',
    'eng11-u4-looking-back-project'
  ],
  prerequisiteModuleIds: ['eng11-m1', 'eng11-m2', 'eng11-m3'],
  reviewStatus: 'source_checked'
};
