import type { MockExam } from '@/types';

const instructions = [
  'Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.',
  'Dùng quy ước ΔH = enthalpy sản phẩm − enthalpy chất đầu.',
  'Giữ đầy đủ dấu của kết quả và kiểm tra hệ số phương trình trước khi tính.'
];

export const module5CheckpointExams: MockExam[] = [
  {
    id: 'chem10-module5-checkpoint-a', subjectId: 'chemistry', title: 'Chuyên đề 5 – Năng lượng hóa học (Mã A)',
    duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t5'], totalPoints: 10, formCode: 'A',
    resultReleasePolicy: 'after_submit', instructions,
    questionIds: Array.from({ length: 12 }, (_, index) => 'chem10-assess-m5-cp-a-q' + String(index + 1).padStart(2, '0')),
    createdAt: '2026-07-15T00:00:00.000Z'
  },
  {
    id: 'chem10-module5-checkpoint-b', subjectId: 'chemistry', title: 'Chuyên đề 5 – Năng lượng hóa học (Mã B)',
    duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t5'], totalPoints: 10, formCode: 'B',
    resultReleasePolicy: 'after_submit', instructions,
    questionIds: Array.from({ length: 12 }, (_, index) => 'chem10-assess-m5-cp-b-q' + String(index + 1).padStart(2, '0')),
    createdAt: '2026-07-15T00:00:00.000Z'
  }
];
