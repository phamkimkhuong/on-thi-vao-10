import type { MockExam } from '@/types';
import { physicsMidterm1QuestionsFormA, physicsMidterm1QuestionsFormB, physicsMidterm1SolutionsFormA, physicsMidterm1SolutionsFormB } from './midterm1';
import { physicsMidterm1Exams } from './exams/midterm1';
import { physicsFinal1QuestionsFormA, physicsFinal1QuestionsFormB, physicsFinal1SolutionsFormA, physicsFinal1SolutionsFormB } from './final1';
import { physicsFinal1Exams } from './exams/final1';

export {
  g10PhysicsAssessmentBlueprints,
  physicsMidterm1Blueprint,
  physicsFinal1Blueprint,
  physicsMidterm2Blueprint,
  physicsFinal2Blueprint
} from './blueprints';

export const g10PhysicsAssessmentExams: MockExam[] = [
  {
    id: 'phy10-diagnostic-module0',
    subjectId: 'physics',
    title: 'Chẩn đoán nền tảng Vật lí 10 – Đo lường',
    duration: 20,
    kind: 'diagnostic',
    focus: 'mixed',
    scopeTopicIds: ['phy10-t0'],
    formCode: 'D0',
    instructions: [
      'Bài chẩn đoán không dùng để tính điểm định kỳ.',
      'Hoàn thành 12 câu để xác định lỗ hổng về đơn vị, phép đo, sai số và dữ liệu.',
      'Không dùng máy tính ở các câu nhận biết; có thể dùng máy tính cho phép tính sai số.'
    ],
    questionIds: [
      'phy10-m0-q002',
      'phy10-m0-q003',
      'phy10-m0-q006',
      'phy10-m0-q007',
      'phy10-q1',
      'phy10-m0-q012',
      'phy10-m0-q014',
      'phy10-m0-q016',
      'phy10-m0-q017',
      'phy10-m0-q022',
      'phy10-m0-q027',
      'phy10-m0-q028'
    ],
    resultReleasePolicy: 'immediate',
    assessmentVersion: '1.0.0',
    createdAt: '2026-07-17T00:00:00.000Z'
  },
  ...physicsMidterm1Exams,
  ...physicsFinal1Exams
];

export const g10PhysicsAssessmentQuestions = [
  ...physicsMidterm1QuestionsFormA,
  ...physicsMidterm1QuestionsFormB,
  ...physicsFinal1QuestionsFormA,
  ...physicsFinal1QuestionsFormB
];
export const g10PhysicsAssessmentSolutions = [
  ...physicsMidterm1SolutionsFormA,
  ...physicsMidterm1SolutionsFormB,
  ...physicsFinal1SolutionsFormA,
  ...physicsFinal1SolutionsFormB
];
