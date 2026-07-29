import type { MockExam } from '@/types';

const midtermInstructions = [
  'Bài gồm 12 câu nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Mỗi cụm Đúng/Sai được chấm theo từng phát biểu; tổng điểm toàn bài là 10.',
  'Hết 90 phút hệ thống tự động nộp bài.'
];

const finalInstructions = [
  'Bài gồm 12 câu nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Kiểm tra từng phát biểu Đúng/Sai và định dạng phân số trước khi nộp.',
  'Hết 90 phút hệ thống tự động nộp bài.'
];

const ids = (prefix: string, count: number) => Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(2, '0')}`);
const midtermIds = (prefix: string) => [
  ...ids(prefix, 4),
  ...Array.from({ length: 8 }, (_, index) => `${prefix}${String(index + 11).padStart(2, '0')}`),
  `${prefix}05`, `${prefix}06`, `${prefix}19`, `${prefix}20`,
  `${prefix}07`, `${prefix}08`, `${prefix}09`, `${prefix}10`, `${prefix}21`, `${prefix}22`
];

export const g10MathSemester2AssessmentExams: MockExam[] = [
  {
    id: 'math10-midterm2-form-a', subjectId: 'math', title: 'Giữa học kỳ II – Toán 10 (Mã A)', duration: 90, kind: 'midterm', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7'], totalPoints: 10, formCode: 'A', instructions: midtermInstructions,
    questionIds: midtermIds('math10-assess-mid2-a-q'), blueprintId: 'math10-blueprint-midterm2-auto-v2', assessmentVersion: '2.0.0',
    parallelFormGroup: 'math10-midterm2-auto-v2',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-midterm2-form-b', subjectId: 'math', title: 'Giữa học kỳ II – Toán 10 (Mã B)', duration: 90, kind: 'midterm', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7'], totalPoints: 10, formCode: 'B', instructions: midtermInstructions,
    questionIds: midtermIds('math10-assess-mid2-b-q'), blueprintId: 'math10-blueprint-midterm2-auto-v2', assessmentVersion: '2.0.0',
    parallelFormGroup: 'math10-midterm2-auto-v2',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-final2-form-a', subjectId: 'math', title: 'Cuối học kỳ II – Toán 10 (Mã A)', duration: 90, kind: 'final', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7', 'math10-t8'], totalPoints: 10, formCode: 'A', instructions: finalInstructions,
    questionIds: ids('math10-assess-final2-a-q', 22), blueprintId: 'math10-blueprint-final2-v1', assessmentVersion: '1.0.0',
    parallelFormGroup: 'math10-final2-auto-v1',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-final2-form-b', subjectId: 'math', title: 'Cuối học kỳ II – Toán 10 (Mã B)', duration: 90, kind: 'final', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7', 'math10-t8'], totalPoints: 10, formCode: 'B', instructions: finalInstructions,
    questionIds: ids('math10-assess-final2-b-q', 22), blueprintId: 'math10-blueprint-final2-v1', assessmentVersion: '1.0.0',
    parallelFormGroup: 'math10-final2-auto-v1',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  }
];
