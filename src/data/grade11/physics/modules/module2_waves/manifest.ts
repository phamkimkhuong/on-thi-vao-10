import type { ModuleManifest } from '@/data/schema';

export const g11PhysicsModule2Manifest: ModuleManifest = {
  id: 'phy11-m2',
  courseId: 'grade11:physics',
  title: 'Chương II: Sóng',
  slug: 'song',
  orderIndex: 2,
  scope: 'core',
  topicIds: ['phy11-t02'],
  lessonIds: Array.from({ length: 8 }, (_, index) => `phy11-kntt-l${index + 8}`),
  prerequisiteModuleIds: ['phy11-m1'],
  reviewStatus: 'source_checked'
};
