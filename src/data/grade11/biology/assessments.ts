import { MockExam, AssessmentBlueprint, Question, Solution } from '@/types';

export const g11BiologyAssessmentExams: MockExam[] = [
  {
    id: 'bio11-midterm1-form-a',
    subjectId: 'biology',
    title: 'Kiểm tra Giữa Học kỳ I – Sinh học 11 (Mã A)',
    duration: 45,
    createdAt: '2026-07-30T21:20:00.000Z',
    kind: 'midterm',
    focus: 'mixed',
    scopeTopicIds: ['bio11-t01'],
    totalPoints: 10,
    formCode: 'A',
    instructions: ['Đề kiểm tra trắc nghiệm 45 phút môn Sinh học 11.'],
    questionIds: ['bio11-q01', 'bio11-q02', 'bio11-q03']
  },
  {
    id: 'bio11-final1-form-a',
    subjectId: 'biology',
    title: 'Kiểm tra Cuối Học kỳ I – Sinh học 11 (Mã A)',
    duration: 45,
    createdAt: '2026-07-30T21:20:00.000Z',
    kind: 'final',
    focus: 'mixed',
    scopeTopicIds: ['bio11-t01', 'bio11-t02'],
    totalPoints: 10,
    formCode: 'A',
    instructions: ['Đề thi tổng hợp Cuối Học kỳ I Sinh học 11.'],
    questionIds: ['bio11-q01', 'bio11-q04', 'bio11-q05']
  },
  {
    id: 'bio11-midterm2-form-a',
    subjectId: 'biology',
    title: 'Kiểm tra Giữa Học kỳ II – Sinh học 11 (Mã A)',
    duration: 45,
    createdAt: '2026-07-30T21:20:00.000Z',
    kind: 'midterm',
    focus: 'mixed',
    scopeTopicIds: ['bio11-t03', 'bio11-t04'],
    totalPoints: 10,
    formCode: 'A',
    instructions: ['Đề kiểm tra Giữa Học kỳ II Sinh học 11.'],
    questionIds: ['bio11-q06', 'bio11-q07', 'bio11-q08']
  },
  {
    id: 'bio11-final2-form-a',
    subjectId: 'biology',
    title: 'Kiểm tra Cuối Học kỳ II – Sinh học 11 (Mã A)',
    duration: 45,
    createdAt: '2026-07-30T21:20:00.000Z',
    kind: 'final',
    focus: 'mixed',
    scopeTopicIds: ['bio11-t04', 'bio11-t05'],
    totalPoints: 10,
    formCode: 'A',
    instructions: ['Đề thi tổng hợp Cuối Học kỳ II Sinh học 11 (Chương 4 & 5 Premium).'],
    questionIds: ['bio11-q08', 'bio11-q09', 'bio11-q10']
  }
];

export const g11BiologyAssessmentBlueprints: AssessmentBlueprint[] = [];
export const g11BiologyAssessmentQuestions: Question[] = [];
export const g11BiologyAssessmentSolutions: Solution[] = [];
