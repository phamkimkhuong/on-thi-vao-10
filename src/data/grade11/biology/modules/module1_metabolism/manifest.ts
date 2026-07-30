import type { ModuleManifest } from '@/data/schema';

export const g11BiologyModule1Manifest: ModuleManifest = {
  id: 'bio11-m1',
  courseId: 'grade11:biology',
  title: 'Chương I: Trao đổi chất và chuyển hóa năng lượng ở sinh vật',
  slug: 'trao-doi-chat-va-chuyen-hoa-nang-luong',
  orderIndex: 1,
  scope: 'core',
  topicIds: ['bio11-t01'],
  lessonIds: Array.from({ length: 13 }, (_, index) => `bio11-kntt-l${index + 1}`),
  prerequisiteModuleIds: [],
  reviewStatus: 'draft'
};
