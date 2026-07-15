import type { MockExam } from '@/types';

export const module1CheckpointExams: MockExam[] = [
  {
    id: 'chem10-module1-checkpoint-a',
    subjectId: 'chemistry',
    title: 'Chuyên đề 1 – Cấu tạo nguyên tử (Mã A)',
    duration: 20,
    kind: 'module_checkpoint',
    scopeTopicIds: ['chem10-t1'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.',
      'Không xem tài liệu trong thời gian làm bài.',
      'Có thể dùng máy tính cho phép tính nguyên tử khối trung bình.'
    ],
    questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m1-cp-a-q${String(index + 1).padStart(2, '0')}`),
    createdAt: '2026-07-15T00:00:00.000Z'
  },
  {
    id: 'chem10-module1-checkpoint-b',
    subjectId: 'chemistry',
    title: 'Chuyên đề 1 – Cấu tạo nguyên tử (Mã B)',
    duration: 20,
    kind: 'module_checkpoint',
    scopeTopicIds: ['chem10-t1'],
    totalPoints: 10,
    formCode: 'B',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.',
      'Không xem tài liệu trong thời gian làm bài.',
      'Có thể dùng máy tính cho phép tính nguyên tử khối trung bình.'
    ],
    questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m1-cp-b-q${String(index + 1).padStart(2, '0')}`),
    createdAt: '2026-07-15T00:00:00.000Z'
  }
];
