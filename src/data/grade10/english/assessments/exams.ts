import { MockExam } from '@/types';

const languageOnlyInstructions = [
  'Bài kiểm tra trực tuyến tập trung vào phát âm, từ vựng và ngữ pháp theo phạm vi Unit đã công bố.',
  'Mỗi câu có một đáp án đúng; kết quả và lời giải chỉ hiển thị sau khi nộp bài.',
  'Phần Listening chưa được đưa vào đề khi chưa có tệp âm thanh và cơ chế phát nghe kiểm soát.'
];

export const g10EnglishAssessmentExams: MockExam[] = [
  {
    id: 'eng10-midterm1-a',
    subjectId: 'english',
    title: 'Giữa học kỳ I – Tiếng Anh 10 (Mã A)',
    duration: 45,
    kind: 'midterm',
    scopeTopicIds: ['eng10-t1', 'eng10-t2', 'eng10-t3'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      ...languageOnlyInstructions,
      'Đề gồm 30 câu: Unit 1–3 được phân bổ cân bằng, có câu nhận biết, thông hiểu và vận dụng.'
    ],
    questionIds: [
      'eng10-q1', 'eng10-q5', 'eng10-q203', 'eng10-q51', 'eng10-q168',
      'eng10-q76', 'eng10-q93', 'eng10-q207', 'eng10-q9', 'eng10-q172',
      'eng10-q11', 'eng10-q126', 'eng10-q130', 'eng10-q16', 'eng10-q133',
      'eng10-q137', 'eng10-q56', 'eng10-q175', 'eng10-q79', 'eng10-q102',
      'eng10-q21', 'eng10-q140', 'eng10-q143', 'eng10-q26', 'eng10-q146',
      'eng10-q151', 'eng10-q61', 'eng10-q182', 'eng10-q82', 'eng10-q109'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'eng10-final1-a',
    subjectId: 'english',
    title: 'Cuối học kỳ I – Tiếng Anh 10 (Mã A)',
    duration: 60,
    kind: 'final',
    scopeTopicIds: ['eng10-t1', 'eng10-t2', 'eng10-t3', 'eng10-t4', 'eng10-t5'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      ...languageOnlyInstructions,
      'Đề gồm 35 câu: mỗi Unit 1–5 có 7 câu, phân bố khoảng 43% dễ, 43% trung bình và 14% khó.'
    ],
    questionIds: [
      'eng10-q2', 'eng10-q6', 'eng10-q7', 'eng10-q10', 'eng10-q204', 'eng10-q52', 'eng10-q169',
      'eng10-q12', 'eng10-q127', 'eng10-q131', 'eng10-q17', 'eng10-q134', 'eng10-q57', 'eng10-q176',
      'eng10-q22', 'eng10-q141', 'eng10-q144', 'eng10-q27', 'eng10-q147', 'eng10-q62', 'eng10-q183',
      'eng10-q37', 'eng10-q31', 'eng10-q205', 'eng10-q66', 'eng10-q189', 'eng10-q67', 'eng10-q190',
      'eng10-q42', 'eng10-q41', 'eng10-q158', 'eng10-q44', 'eng10-q161', 'eng10-q71', 'eng10-q196'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'eng10-midterm2-a',
    subjectId: 'english',
    title: 'Giữa học kỳ II – Tiếng Anh 10 (Mã A)',
    duration: 45,
    kind: 'midterm',
    scopeTopicIds: ['eng10-t6', 'eng10-t7', 'eng10-t8'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      ...languageOnlyInstructions,
      'Đề gồm 30 câu: Unit 6–8 được phân bổ cân bằng, theo tỷ lệ 40% dễ, 40% trung bình và 20% khó.'
    ],
    questionIds: [
      'eng10-q229', 'eng10-q232', 'eng10-q238', 'eng10-q241', 'eng10-q244',
      'eng10-q250', 'eng10-q253', 'eng10-q256', 'eng10-q230', 'eng10-q235',
      'eng10-q265', 'eng10-q268', 'eng10-q274', 'eng10-q277', 'eng10-q280',
      'eng10-q286', 'eng10-q289', 'eng10-q292', 'eng10-q290', 'eng10-q271',
      'eng10-q301', 'eng10-q304', 'eng10-q310', 'eng10-q313', 'eng10-q316',
      'eng10-q322', 'eng10-q325', 'eng10-q328', 'eng10-q326', 'eng10-q307'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  },
  {
    id: 'eng10-final2-a',
    subjectId: 'english',
    title: 'Cuối học kỳ II – Tiếng Anh 10 (Mã A)',
    duration: 60,
    kind: 'final',
    scopeTopicIds: ['eng10-t6', 'eng10-t7', 'eng10-t8', 'eng10-t9', 'eng10-t10'],
    totalPoints: 10,
    formCode: 'A',
    resultReleasePolicy: 'after_submit',
    instructions: [
      ...languageOnlyInstructions,
      'Đề gồm 35 câu: mỗi Unit 6–10 có 7 câu, phân bố khoảng 43% dễ, 43% trung bình và 14% khó.'
    ],
    questionIds: [
      'eng10-q231', 'eng10-q233', 'eng10-q239', 'eng10-q242', 'eng10-q245', 'eng10-q254', 'eng10-q257',
      'eng10-q266', 'eng10-q269', 'eng10-q275', 'eng10-q278', 'eng10-q281', 'eng10-q291', 'eng10-q293',
      'eng10-q302', 'eng10-q305', 'eng10-q311', 'eng10-q314', 'eng10-q317', 'eng10-q327', 'eng10-q329',
      'eng10-q337', 'eng10-q340', 'eng10-q346', 'eng10-q349', 'eng10-q352', 'eng10-q361', 'eng10-q364',
      'eng10-q373', 'eng10-q376', 'eng10-q382', 'eng10-q385', 'eng10-q388', 'eng10-q397', 'eng10-q400'
    ],
    createdAt: '2026-07-16T00:00:00.000Z'
  }
];
