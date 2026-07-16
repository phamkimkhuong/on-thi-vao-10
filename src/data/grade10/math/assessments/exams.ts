import { MockExam } from '@/types';

export const g10MathAssessmentExams: MockExam[] = [
  {
    id: 'mock-math10-gk1',
    subjectId: 'math',
    title: 'Giữa học kỳ I – Toán 10 (Mã A)',
    duration: 90,
    kind: 'midterm',
    scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 4 câu nhiều lựa chọn, 2 cụm Đúng/Sai và 4 câu trả lời ngắn.',
      'Chọn đủ Đúng hoặc Sai cho từng phát biểu trong mỗi cụm trước khi nộp bài.',
      'Hết 90 phút hệ thống sẽ tự động nộp bài và hiển thị kết quả.'
    ],
    questionIds: [
      'mock-math10-q1',
      'mock-math10-q2',
      'mock-math10-q3',
      'mock-math10-q4',
      'mock-math10-q5',
      'mock-math10-q6',
      'mock-math10-q7',
      'mock-math10-q8',
      'mock-math10-q9',
      'mock-math10-q10'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'mock-math10-gk2',
    subjectId: 'math',
    title: 'Giữa học kỳ I – Toán 10 (Mã B)',
    duration: 90,
    kind: 'midterm',
    scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
    totalPoints: 10,
    formCode: 'B',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 4 câu nhiều lựa chọn, 2 cụm Đúng/Sai và 4 câu trả lời ngắn.',
      'Chọn đủ Đúng hoặc Sai cho từng phát biểu trong mỗi cụm trước khi nộp bài.',
      'Hết 90 phút hệ thống sẽ tự động nộp bài và hiển thị kết quả.'
    ],
    questionIds: [
      'mock-math10-q21',
      'mock-math10-q22',
      'mock-math10-q23',
      'mock-math10-q24',
      'mock-math10-q25',
      'mock-math10-q26',
      'mock-math10-q27',
      'mock-math10-q28',
      'mock-math10-q29',
      'mock-math10-q30'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'mock-math10-ck1',
    subjectId: 'math',
    title: 'Cuối học kỳ I – Toán 10 (Mã A)',
    duration: 90,
    kind: 'final',
    scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 12 câu nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
      'Kiểm tra lại các câu chưa trả lời và từng phát biểu Đúng/Sai trước khi nộp.',
      'Hết 90 phút hệ thống sẽ tự động nộp bài và hiển thị kết quả.'
    ],
    questionIds: [
      'mock-math10-q31',
      'mock-math10-q32',
      'mock-math10-q33',
      'mock-math10-q34',
      'mock-math10-q35',
      'mock-math10-q36',
      'mock-math10-q37',
      'mock-math10-q38',
      'mock-math10-q39',
      'mock-math10-q40',
      'mock-math10-q41',
      'mock-math10-q42',
      'mock-math10-q43',
      'mock-math10-q44',
      'mock-math10-q45',
      'mock-math10-q46',
      'mock-math10-q47',
      'mock-math10-q48',
      'mock-math10-q49',
      'mock-math10-q50',
      'mock-math10-q51',
      'mock-math10-q52'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'mock-math10-ck2',
    subjectId: 'math',
    title: 'Cuối học kỳ I – Toán 10 (Mã B)',
    duration: 90,
    kind: 'final',
    scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
    totalPoints: 10,
    formCode: 'B',
    resultReleasePolicy: 'after_submit',
    instructions: [
      'Bài gồm 12 câu nhiều lựa chọn, 4 cụm Đúng/Sai và 6 câu trả lời ngắn.',
      'Kiểm tra lại các câu chưa trả lời và từng phát biểu Đúng/Sai trước khi nộp.',
      'Hết 90 phút hệ thống sẽ tự động nộp bài và hiển thị kết quả.'
    ],
    questionIds: [
      'mock-math10-q53',
      'mock-math10-q54',
      'mock-math10-q55',
      'mock-math10-q56',
      'mock-math10-q57',
      'mock-math10-q58',
      'mock-math10-q59',
      'mock-math10-q60',
      'mock-math10-q61',
      'mock-math10-q62',
      'mock-math10-q63',
      'mock-math10-q64',
      'mock-math10-q65',
      'mock-math10-q66',
      'mock-math10-q67',
      'mock-math10-q68',
      'mock-math10-q69',
      'mock-math10-q70',
      'mock-math10-q71',
      'mock-math10-q72',
      'mock-math10-q73',
      'mock-math10-q74'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  }
];
