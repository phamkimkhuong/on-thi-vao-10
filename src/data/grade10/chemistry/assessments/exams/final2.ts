import type { MockExam } from '@/types';

const instructions = [
  'Bài gồm 12 câu trắc nghiệm nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
  'Phạm vi Chuyên đề 1–7; trọng tâm phản ứng oxi hóa–khử, năng lượng, tốc độ phản ứng và halogen.',
  'Bài được chấm hoàn toàn tự động; kiểm tra dấu, đơn vị và từng phát biểu trước khi nộp.'
];

const selectedChoiceNumbers = [1, 2, 4, 5, 7, 8, 10, 13, 16, 17, 18, 20];

const questionIds = (form: 'a' | 'b') => [
  ...selectedChoiceNumbers.map(number => `chem10-assess-final2-${form}-q${String(number).padStart(2, '0')}`),
  ...Array.from({ length: 4 }, (_, index) => `chem10-assess-final2-${form}-tf${String(index + 1).padStart(2, '0')}`),
  ...Array.from({ length: 5 }, (_, index) => `chem10-assess-final2-${form}-q${String(index + 21).padStart(2, '0')}`),
  `chem10-assess-final2-${form}-extra-short01`
];

export const final2Exams: MockExam[] = [
  {
    id: 'chem10-final2-a',
    subjectId: 'chemistry',
    title: 'Cuối học kỳ II – Hóa học 10 (Mã A)',
    duration: 45,
    kind: 'final',
    focus: 'mixed',
    semester: 2,
    scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3', 'chem10-t4', 'chem10-t5', 'chem10-t6', 'chem10-t7'],
    totalPoints: 10,
    formCode: 'A',
    parallelFormGroup: 'chem10-final2-auto-v2',
    blueprintId: 'chem10-blueprint-final2-auto-v2',
    assessmentVersion: '2.0.0',
    resultReleasePolicy: 'after_submit',
    instructions,
    questionIds: questionIds('a'),
    createdAt: '2026-07-29T00:00:00.000Z'
  },
  {
    id: 'chem10-final2-b',
    subjectId: 'chemistry',
    title: 'Cuối học kỳ II – Hóa học 10 (Mã B)',
    duration: 45,
    kind: 'final',
    focus: 'mixed',
    semester: 2,
    scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3', 'chem10-t4', 'chem10-t5', 'chem10-t6', 'chem10-t7'],
    totalPoints: 10,
    formCode: 'B',
    parallelFormGroup: 'chem10-final2-auto-v2',
    blueprintId: 'chem10-blueprint-final2-auto-v2',
    assessmentVersion: '2.0.0',
    resultReleasePolicy: 'after_submit',
    instructions,
    questionIds: questionIds('b'),
    createdAt: '2026-07-29T00:00:00.000Z'
  }
];
