import type { ModuleManifest } from '@/data/schema';

export const g11BiologyModule2Manifest: ModuleManifest = {
  id: 'bio11-m2',
  courseId: 'grade11:biology',
  title: 'Chương II: Cảm ứng ở sinh vật',
  slug: 'cam-ung-o-sinh-vat',
  orderIndex: 2,
  scope: 'core',
  topicIds: ['bio11-t02'],
  lessonIds: Array.from({ length: 5 }, (_, index) => `bio11-kntt-l${index + 14}`),
  prerequisiteModuleIds: ['bio11-m1'],
  reviewStatus: 'draft'
};
