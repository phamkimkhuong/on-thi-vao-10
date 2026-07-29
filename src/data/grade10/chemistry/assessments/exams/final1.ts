import type { MockExam } from '@/types';

const instructions = [
  'Bài gồm 12 câu trắc nghiệm nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Phạm vi: Cấu tạo nguyên tử, Bảng tuần hoàn và Liên kết hóa học.',
  'Bài được chấm hoàn toàn tự động; kiểm tra từng phát biểu và định dạng số trước khi nộp.'
];

const questionIds = (form: 'a' | 'b') =>
  Array.from({ length: 22 }, (_, index) => `chem10-assess-final1-${form}-q${String(index + 1).padStart(2, '0')}`);

export const final1Exams: MockExam[] = [
  {
    id: 'chem10-final1-a', subjectId: 'chemistry', title: 'Cuối học kỳ I – Hóa học 10 (Mã A)', duration: 45,
    kind: 'final', focus: 'mixed', semester: 1, scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'],
    totalPoints: 10, formCode: 'A', parallelFormGroup: 'chem10-final1-auto-v1',
    blueprintId: 'chem10-blueprint-final1-auto-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', instructions, questionIds: questionIds('a'), createdAt: '2026-07-29T00:00:00.000Z'
  },
  {
    id: 'chem10-final1-b', subjectId: 'chemistry', title: 'Cuối học kỳ I – Hóa học 10 (Mã B)', duration: 45,
    kind: 'final', focus: 'mixed', semester: 1, scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'],
    totalPoints: 10, formCode: 'B', parallelFormGroup: 'chem10-final1-auto-v1',
    blueprintId: 'chem10-blueprint-final1-auto-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', instructions, questionIds: questionIds('b'), createdAt: '2026-07-29T00:00:00.000Z'
  }
];
