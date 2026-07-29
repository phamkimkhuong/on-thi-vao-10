import type { AssessmentBlueprint } from '@/types';

const autoGradedSections: AssessmentBlueprint['sections'] = [
  { id: 'mcq', title: 'Phần I. Trắc nghiệm nhiều lựa chọn', itemCount: 12, points: 3, responseType: 'multiple_choice' },
  { id: 'tf', title: 'Phần II. Trắc nghiệm Đúng/Sai', itemCount: 4, points: 4, responseType: 'true_false_cluster' },
  { id: 'short', title: 'Phần III. Trả lời ngắn', itemCount: 6, points: 3, responseType: 'short_answer' }
];

export const mathMidterm1Blueprint: AssessmentBlueprint = {
  id: 'math10-blueprint-midterm1-auto-v2',
  subjectId: 'math',
  title: 'Ma trận Giữa học kỳ I – Toán 10 (chấm tự động)',
  kind: 'midterm',
  focus: 'mixed',
  duration: 90,
  totalPoints: 10,
  scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
  topicWeights: {
    'math10-t1': 0.2,
    'math10-t2': 0.2,
    'math10-t3': 0.25,
    'math10-t4': 0.2,
    'math10-t5': 0.15
  },
  outcomeIds: [
    'MATH10-M1-O01', 'MATH10-M1-O02', 'MATH10-M1-O03',
    'MATH10-M2-O01', 'MATH10-M2-O02', 'MATH10-M2-O03',
    'MATH10-M3-O01', 'MATH10-M3-O02', 'MATH10-M3-O03',
    'MATH10-M4-O01', 'MATH10-M4-O02', 'MATH10-M4-O03',
    'MATH10-M5-O01', 'MATH10-M5-O02', 'MATH10-M5-O03'
  ],
  competencyWeights: {
    mathematical_reasoning: 0.4,
    mathematical_modeling: 0.2,
    mathematical_problem_solving: 0.4
  },
  difficultyWeights: { easy: 0.35, medium: 0.45, hard: 0.2 },
  sections: autoGradedSections
};

export const mathFinal1Blueprint: AssessmentBlueprint = {
  id: 'math10-blueprint-final1-auto-v2',
  subjectId: 'math',
  title: 'Ma trận Cuối học kỳ I – Toán 10 (chấm tự động)',
  kind: 'final',
  focus: 'mixed',
  duration: 90,
  totalPoints: 10,
  scopeTopicIds: ['math10-t1', 'math10-t2', 'math10-t3', 'math10-t4', 'math10-t5'],
  topicWeights: {
    'math10-t1': 0.15,
    'math10-t2': 0.15,
    'math10-t3': 0.25,
    'math10-t4': 0.25,
    'math10-t5': 0.2
  },
  outcomeIds: [
    'MATH10-M1-O01', 'MATH10-M1-O02', 'MATH10-M1-O03',
    'MATH10-M2-O01', 'MATH10-M2-O02', 'MATH10-M2-O03',
    'MATH10-M3-O01', 'MATH10-M3-O02', 'MATH10-M3-O03',
    'MATH10-M4-O01', 'MATH10-M4-O02', 'MATH10-M4-O03',
    'MATH10-M5-O01', 'MATH10-M5-O02', 'MATH10-M5-O03'
  ],
  competencyWeights: {
    mathematical_reasoning: 0.4,
    mathematical_modeling: 0.2,
    mathematical_problem_solving: 0.4
  },
  difficultyWeights: { easy: 0.3, medium: 0.5, hard: 0.2 },
  sections: autoGradedSections
};

export const g10MathSemester1AssessmentBlueprints: AssessmentBlueprint[] = [
  mathMidterm1Blueprint,
  mathFinal1Blueprint
];
