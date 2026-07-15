import type { AssessmentBlueprint } from '@/types';

export const module4CheckpointBlueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-module4-checkpoint-v1',
  subjectId: 'chemistry',
  title: 'Ma trận kiểm tra Module 4 – Phản ứng oxi hóa–khử',
  kind: 'module_checkpoint',
  duration: 20,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t4'],
  outcomeIds: [
    'chem10-redox-oxidation-number',
    'chem10-redox-process',
    'chem10-redox-agents',
    'chem10-redox-balance'
  ],
  competencyWeights: { chemical_cognition: 0.55, chemical_inquiry: 0.05, chemical_application: 0.4 },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
  ]
};
