import type { ModuleManifest } from '@/data/schema';

export const g11PhysicsModule4Manifest: ModuleManifest = {
  id: 'phy11-m4',
  courseId: 'grade11:physics',
  title: 'Chương IV: Dòng điện và mạch điện',
  slug: 'dong-dien-va-mach-dien',
  orderIndex: 4,
  scope: 'core',
  topicIds: ['phy11-t04'],
  lessonIds: Array.from({ length: 5 }, (_, index) => `phy11-kntt-l${index + 22}`),
  prerequisiteModuleIds: [],
  reviewStatus: 'source_checked'
};
