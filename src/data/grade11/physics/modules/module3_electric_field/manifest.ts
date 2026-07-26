import type { ModuleManifest } from '@/data/schema';

export const g11PhysicsModule3Manifest: ModuleManifest = {
  id: 'phy11-m3',
  courseId: 'grade11:physics',
  title: 'Chương III: Điện trường',
  slug: 'dien-truong',
  orderIndex: 3,
  scope: 'core',
  topicIds: ['phy11-t03'],
  lessonIds: Array.from({ length: 6 }, (_, index) => `phy11-kntt-l${index + 16}`),
  prerequisiteModuleIds: [],
  reviewStatus: 'source_checked'
};
