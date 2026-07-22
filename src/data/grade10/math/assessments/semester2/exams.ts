import type { MockExam } from '@/types';

const midtermInstructions = [
  'Bài gồm 4 câu nhiều lựa chọn, 2 cụm Đúng/Sai và 4 câu trả lời ngắn.',
  'Mỗi cụm Đúng/Sai được chấm theo từng phát biểu; tổng điểm toàn bài là 10.',
  'Hết 90 phút hệ thống tự động nộp bài.'
];

const finalInstructions = [
  'Bài gồm 12 câu nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Kiểm tra từng phát biểu Đúng/Sai và định dạng phân số trước khi nộp.',
  'Hết 90 phút hệ thống tự động nộp bài.'
];

const ids = (prefix: string, count: number) => Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(2, '0')}`);

export const g10MathSemester2AssessmentExams: MockExam[] = [
  {
    id: 'math10-midterm2-form-a', subjectId: 'math', title: 'Giữa học kỳ II – Toán 10 (Mã A)', duration: 90, kind: 'midterm', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7'], totalPoints: 10, formCode: 'A', instructions: midtermInstructions,
    questionIds: ids('math10-assess-mid2-a-q', 10), blueprintId: 'math10-blueprint-midterm2-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-midterm2-form-b', subjectId: 'math', title: 'Giữa học kỳ II – Toán 10 (Mã B)', duration: 90, kind: 'midterm', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7'], totalPoints: 10, formCode: 'B', instructions: midtermInstructions,
    questionIds: ids('math10-assess-mid2-b-q', 10), blueprintId: 'math10-blueprint-midterm2-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-final2-form-a', subjectId: 'math', title: 'Cuối học kỳ II – Toán 10 (Mã A)', duration: 90, kind: 'final', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7', 'math10-t8'], totalPoints: 10, formCode: 'A', instructions: finalInstructions,
    questionIds: ids('math10-assess-final2-a-q', 22), blueprintId: 'math10-blueprint-final2-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  },
  {
    id: 'math10-final2-form-b', subjectId: 'math', title: 'Cuối học kỳ II – Toán 10 (Mã B)', duration: 90, kind: 'final', focus: 'mixed',
    scopeTopicIds: ['math10-t6', 'math10-t7', 'math10-t8'], totalPoints: 10, formCode: 'B', instructions: finalInstructions,
    questionIds: ids('math10-assess-final2-b-q', 22), blueprintId: 'math10-blueprint-final2-v1', assessmentVersion: '1.0.0',
    resultReleasePolicy: 'after_submit', createdAt: '2026-07-22T00:00:00.000Z'
  }
];
