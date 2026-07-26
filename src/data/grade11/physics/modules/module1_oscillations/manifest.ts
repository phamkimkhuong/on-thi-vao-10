import type { ModuleManifest } from '@/data/schema';

export const g11PhysicsModule1Manifest: ModuleManifest = {
  id: 'phy11-m1',
  courseId: 'grade11:physics',
  title: 'Chương I: Dao động',
  slug: 'dao-dong',
  orderIndex: 1,
  scope: 'core',
  topicIds: ['phy11-t01'],
  lessonIds: Array.from({ length: 7 }, (_, index) => `phy11-kntt-l${index + 1}`),
  prerequisiteModuleIds: [],
  reviewStatus: 'draft'
};
