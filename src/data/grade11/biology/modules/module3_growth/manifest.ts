import type { ModuleManifest } from '@/data/schema';

export const g11BiologyModule3Manifest: ModuleManifest = {
  id: 'bio11-m3',
  courseId: 'grade11:biology',
  title: 'Chương III: Sinh trưởng và phát triển ở sinh vật',
  slug: 'sinh-truong-va-phat-trien-o-sinh-vat',
  orderIndex: 3,
  scope: 'core',
  topicIds: ['bio11-t03'],
  lessonIds: Array.from({ length: 5 }, (_, index) => `bio11-kntt-l${index + 19}`),
  prerequisiteModuleIds: ['bio11-m1', 'bio11-m2'],
  reviewStatus: 'draft'
};
