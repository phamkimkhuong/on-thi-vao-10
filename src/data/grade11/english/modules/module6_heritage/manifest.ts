import type { ModuleManifest } from '@/data/schema';

export const g11EnglishModule6Manifest: ModuleManifest = {
  id: 'eng11-m6', courseId: 'grade11:english', title: 'Unit 6: Preserving Our Heritage',
  slug: 'preserving-our-heritage', orderIndex: 6, scope: 'core',
  topicIds: ['eng11-topic-u6'],
  lessonIds: [
    'eng11-u6-getting-started', 'eng11-u6-language', 'eng11-u6-reading',
    'eng11-u6-speaking', 'eng11-u6-listening', 'eng11-u6-writing',
    'eng11-u6-communication-culture', 'eng11-u6-looking-back-project'
  ],
  prerequisiteModuleIds: ['eng11-m1', 'eng11-m2', 'eng11-m3', 'eng11-m4', 'eng11-m5'],
  reviewStatus: 'source_checked'
};
