import type { MockExam } from '@/types';

const instructions = [
  'Bài gồm 12 câu trắc nghiệm nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Phạm vi: Phản ứng oxi hóa–khử và Năng lượng hóa học.',
  'Bài được chấm hoàn toàn tự động; kiểm tra số oxi hóa, dấu của ΔH và hệ số trước khi nộp.'
];

const questionIds = (form: 'a' | 'b') =>
  Array.from({ length: 22 }, (_, index) => `chem10-assess-mid2-${form}-q${String(index + 1).padStart(2, '0')}`);

export const midterm2Exams: MockExam[] = [
  {
    id: 'chem10-midterm2-a', subjectId: 'chemistry', title: 'Giữa học kỳ II – Hóa học 10 (Mã A)', duration: 45,
    kind: 'midterm', focus: 'mixed', semester: 2, scopeTopicIds: ['chem10-t4', 'chem10-t5'],
    totalPoints: 10, formCode: 'A', parallelFormGroup: 'chem10-midterm2-auto-v1',
    blueprintId: 'chem10-blueprint-midterm2-auto-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', instructions, questionIds: questionIds('a'), createdAt: '2026-07-29T00:00:00.000Z'
  },
  {
    id: 'chem10-midterm2-b', subjectId: 'chemistry', title: 'Giữa học kỳ II – Hóa học 10 (Mã B)', duration: 45,
    kind: 'midterm', focus: 'mixed', semester: 2, scopeTopicIds: ['chem10-t4', 'chem10-t5'],
    totalPoints: 10, formCode: 'B', parallelFormGroup: 'chem10-midterm2-auto-v1',
    blueprintId: 'chem10-blueprint-midterm2-auto-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', instructions, questionIds: questionIds('b'), createdAt: '2026-07-29T00:00:00.000Z'
  }
];
