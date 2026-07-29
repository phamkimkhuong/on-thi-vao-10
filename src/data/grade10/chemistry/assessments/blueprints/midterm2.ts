import type { AssessmentBlueprint } from '@/types';

export const midterm2Blueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-midterm2-auto-v1',
  subjectId: 'chemistry',
  title: 'Ma trận Giữa học kỳ II – Hóa học 10 (chấm tự động)',
  kind: 'midterm',
  focus: 'mixed',
  semester: 2,
  duration: 45,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t4', 'chem10-t5'],
  topicWeights: { 'chem10-t4': 0.5, 'chem10-t5': 0.5 },
  outcomeIds: [
    'chem10-redox-oxidation-number', 'chem10-redox-process', 'chem10-redox-agents', 'chem10-redox-balance',
    'chem10-energy-system', 'chem10-energy-enthalpy', 'chem10-energy-formation', 'chem10-energy-bond'
  ],
  competencyWeights: { chemical_cognition: 0.5, chemical_inquiry: 0.1, chemical_application: 0.4 },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 12, points: 3, responseType: 'multiple_choice' },
    { id: 'tf', title: 'Trắc nghiệm Đúng/Sai', itemCount: 4, points: 4, responseType: 'true_false_cluster' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 6, points: 3, responseType: 'short_answer' }
  ]
};
