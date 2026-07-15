import type { MockExam } from '@/types';

const sharedInstructions = [
  'Bài gồm 16 câu trắc nghiệm nhiều lựa chọn (4 điểm) và 6 câu trả lời ngắn (6 điểm).',
  'Phạm vi: Cấu tạo nguyên tử, Bảng tuần hoàn và Liên kết hóa học.',
  'Đọc kĩ đơn vị, nhập câu trả lời ngắn dưới dạng số và không xem tài liệu.'
];

export const midterm1Exams: MockExam[] = [
  {
    id: 'chem10-midterm1-a', subjectId: 'chemistry', title: 'Giữa học kỳ I – Hóa học 10 (Mã A)', duration: 45,
    kind: 'midterm', scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'], totalPoints: 10, formCode: 'A',
    resultReleasePolicy: 'after_submit', instructions: sharedInstructions,
    questionIds: Array.from({ length: 22 }, (_, index) => `chem10-assess-mid1-a-q${String(index + 1).padStart(2, '0')}`),
    createdAt: '2026-07-15T00:00:00.000Z'
  },
  {
    id: 'chem10-midterm1-b', subjectId: 'chemistry', title: 'Giữa học kỳ I – Hóa học 10 (Mã B)', duration: 45,
    kind: 'midterm', scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'], totalPoints: 10, formCode: 'B',
    resultReleasePolicy: 'after_submit', instructions: sharedInstructions,
    questionIds: Array.from({ length: 22 }, (_, index) => `chem10-assess-mid1-b-q${String(index + 1).padStart(2, '0')}`),
    createdAt: '2026-07-15T00:00:00.000Z'
  }
];
