import { MockExam, Question, Solution } from '@/types';

export const g10MockExamsList: MockExam[] = [
  {
    id: 'mock-math10-1',
    subjectId: 'math',
    title: 'Đề khảo sát chất lượng đầu năm Toán 10 - Đề số 1',
    duration: 90,
    questionIds: ['math10-q1'],
    createdAt: new Date().toISOString()
  }
];

export const g10MockQuestions: Question[] = [];

export const g10MockSolutionsList: Solution[] = [];
