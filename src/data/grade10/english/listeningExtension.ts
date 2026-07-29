import type { Topic } from '@/types';

export const ENGLISH10_LISTENING_EXTENSION_TOPIC_ID = 'eng10-listening-extension';

export const g10EnglishListeningExtensionTopics: Topic[] = [
  {
    id: ENGLISH10_LISTENING_EXTENSION_TOPIC_ID,
    subjectId: 'english',
    name: 'Chuyên đề mở rộng: Listening (Luyện nghe tự chọn)',
    slug: 'listening-extension',
    orderIndex: 100,
    tier: 3
  }
];
