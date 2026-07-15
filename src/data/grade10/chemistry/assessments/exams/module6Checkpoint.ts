import type { MockExam } from '@/types';

const instructions = [
  'Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.',
  'Ghi tốc độ bằng giá trị dương và giữ đúng đơn vị nồng độ/thời gian.',
  'Khi phân tích thí nghiệm, phân biệt biến thay đổi, biến đo và biến kiểm soát.'
];

export const module6CheckpointExams: MockExam[] = [
  {
    id: 'chem10-module6-checkpoint-a', subjectId: 'chemistry', title: 'Chuyên đề 6 – Tốc độ phản ứng (Mã A)',
    duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t6'], totalPoints: 10, formCode: 'A',
    resultReleasePolicy: 'after_submit', instructions,
    questionIds: Array.from({ length: 12 }, (_, index) => 'chem10-assess-m6-cp-a-q' + String(index + 1).padStart(2, '0')),
    createdAt: '2026-07-15T00:00:00.000Z'
  },
  {
    id: 'chem10-module6-checkpoint-b', subjectId: 'chemistry', title: 'Chuyên đề 6 – Tốc độ phản ứng (Mã B)',
    duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t6'], totalPoints: 10, formCode: 'B',
    resultReleasePolicy: 'after_submit', instructions,
    questionIds: Array.from({ length: 12 }, (_, index) => 'chem10-assess-m6-cp-b-q' + String(index + 1).padStart(2, '0')),
    createdAt: '2026-07-15T00:00:00.000Z'
  }
];
