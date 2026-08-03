import type { MockExam, AssessmentBlueprint, Question, Solution } from '@/types';
import { g10HistoryQuestions } from '../questions';

export const g10HistoryAssessmentQuestions: Question[] = [];

export const g10HistoryAssessmentSolutions: Solution[] = [];

export const g10HistoryAssessmentExams: MockExam[] = [
  {
    id: 'g10-his-exam-midterm1',
    subjectId: 'history',
    title: 'Đề kiểm tra Giữa Kỳ 1',
    duration: 45,
    questionIds: g10HistoryQuestions.slice(0, 10).map(q => q.id),
    createdAt: '2026-08-01T00:00:00.000Z',
    kind: 'midterm',
    semester: 1,
    totalPoints: 10
  },
  {
    id: 'g10-his-exam-final1',
    subjectId: 'history',
    title: 'Đề thi Học Kỳ 1 Lịch Sử 10',
    duration: 45,
    questionIds: g10HistoryQuestions.map(q => q.id),
    createdAt: '2026-08-01T00:00:00.000Z',
    kind: 'final',
    semester: 1,
    totalPoints: 10
  }
];

export const g10HistoryAssessmentBlueprints: AssessmentBlueprint[] = [
  {
    id: 'g10-his-bp-midterm1',
    subjectId: 'history',
    title: 'Ma trận đề thi Giữa Kỳ 1 Lịch Sử 10',
    kind: 'midterm',
    semester: 1,
    duration: 45,
    totalPoints: 10,
    scopeTopicIds: ['g10-his-topic-1', 'g10-his-topic-2', 'g10-his-topic-3'],
    outcomeIds: ['g10-his-out-1', 'g10-his-out-2'],
    competencyWeights: {},
    difficultyWeights: {
      easy: 0.4,
      medium: 0.4,
      hard: 0.2
    },
    sections: [
      {
        id: 'sec-1',
        title: 'Phần I: Câu hỏi trắc nghiệm nhiều lựa chọn',
        itemCount: 10,
        points: 10,
        responseType: 'multiple_choice'
      }
    ]
  }
];
