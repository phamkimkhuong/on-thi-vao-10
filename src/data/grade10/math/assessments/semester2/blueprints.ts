import type { AssessmentBlueprint } from '@/types';

export const mathMidterm2Blueprint: AssessmentBlueprint = {
  id: 'math10-blueprint-midterm2-auto-v2',
  subjectId: 'math',
  title: 'Ma trận Giữa học kỳ II – Toán 10',
  kind: 'midterm',
  focus: 'mixed',
  duration: 90,
  totalPoints: 10,
  scopeTopicIds: ['math10-t6', 'math10-t7'],
  topicWeights: { 'math10-t6': 0.5, 'math10-t7': 0.5 },
  outcomeIds: ['MATH10-M6-O01', 'MATH10-M6-O02', 'MATH10-M6-O03', 'MATH10-M7-O01', 'MATH10-M7-O02', 'MATH10-M7-O03'],
  competencyWeights: { mathematical_reasoning: 0.4, mathematical_modeling: 0.2, mathematical_problem_solving: 0.4 },
  difficultyWeights: { easy: 0.3, medium: 0.5, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Phần I. Trắc nghiệm nhiều lựa chọn', itemCount: 12, points: 3, responseType: 'multiple_choice' },
    { id: 'tf', title: 'Phần II. Trắc nghiệm Đúng/Sai', itemCount: 4, points: 4, responseType: 'true_false_cluster' },
    { id: 'short', title: 'Phần III. Trả lời ngắn', itemCount: 6, points: 3, responseType: 'short_answer' }
  ]
};

export const mathFinal2Blueprint: AssessmentBlueprint = {
  id: 'math10-blueprint-final2-v1',
  subjectId: 'math',
  title: 'Ma trận Cuối học kỳ II – Toán 10',
  kind: 'final',
  focus: 'mixed',
  duration: 90,
  totalPoints: 10,
  scopeTopicIds: ['math10-t6', 'math10-t7', 'math10-t8'],
  topicWeights: { 'math10-t6': 0.3, 'math10-t7': 0.3, 'math10-t8': 0.4 },
  outcomeIds: [
    'MATH10-M6-O01', 'MATH10-M6-O02', 'MATH10-M6-O03',
    'MATH10-M7-O01', 'MATH10-M7-O02', 'MATH10-M7-O03',
    'MATH10-M8-O01', 'MATH10-M8-O02', 'MATH10-M8-O03', 'MATH10-M8-O04'
  ],
  competencyWeights: { mathematical_reasoning: 0.35, mathematical_modeling: 0.2, mathematical_problem_solving: 0.45 },
  difficultyWeights: { easy: 0.3, medium: 0.5, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Phần I. Trắc nghiệm nhiều lựa chọn', itemCount: 12, points: 3, responseType: 'multiple_choice' },
    { id: 'tf', title: 'Phần II. Trắc nghiệm Đúng/Sai', itemCount: 4, points: 4, responseType: 'true_false_cluster' },
    { id: 'short', title: 'Phần III. Trả lời ngắn', itemCount: 6, points: 3, responseType: 'short_answer' }
  ]
};

export const g10MathSemester2AssessmentBlueprints: AssessmentBlueprint[] = [mathMidterm2Blueprint, mathFinal2Blueprint];
