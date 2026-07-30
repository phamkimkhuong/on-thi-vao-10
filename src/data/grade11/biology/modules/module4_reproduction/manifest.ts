import type { ModuleManifest } from '@/data/schema';

export const g11BiologyModule4Manifest: ModuleManifest = {
  id: 'bio11-m4',
  courseId: 'grade11:biology',
  title: 'Chương IV: Sinh sản ở sinh vật',
  slug: 'sinh-san-o-sinh-vat',
  orderIndex: 4,
  scope: 'core',
  topicIds: ['bio11-t04'],
  lessonIds: Array.from({ length: 4 }, (_, index) => `bio11-kntt-l${index + 24}`),
  prerequisiteModuleIds: ['bio11-m1', 'bio11-m2', 'bio11-m3'],
  reviewStatus: 'draft'
};
