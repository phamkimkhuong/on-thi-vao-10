import { MockExam } from '@/types';

export const g11ChemistryAssessmentExams: MockExam[] = [
  {
    id: 'chem11-exam-midterm1',
    subjectId: 'chemistry',
    title: 'Đề thi giữa kỳ 1 Hóa học 11',
    duration: 45,
    questionIds: ['chem11-q1'],
    createdAt: new Date().toISOString()
  }
];

export const g11ChemistryAssessmentQuestions = [];
export const g11ChemistryAssessmentSolutions = [];
