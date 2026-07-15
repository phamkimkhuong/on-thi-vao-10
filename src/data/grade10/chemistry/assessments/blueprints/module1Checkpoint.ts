import type { AssessmentBlueprint } from '@/types';

export const module1CheckpointBlueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-module1-checkpoint-v1',
  subjectId: 'chemistry',
  title: 'Ma trận kiểm tra Module 1 – Cấu tạo nguyên tử',
  kind: 'module_checkpoint',
  duration: 20,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t1'],
  outcomeIds: [
    'chem10-atom-particles',
    'chem10-atom-symbol',
    'chem10-atom-isotope',
    'chem10-atom-spectrum',
    'chem10-atom-model',
    'chem10-atom-orbital',
    'chem10-atom-configuration',
    'chem10-atom-property'
  ],
  competencyWeights: {
    chemical_cognition: 0.7,
    chemical_inquiry: 0.1,
    chemical_application: 0.2
  },
  difficultyWeights: { easy: 0.3, medium: 0.55, hard: 0.15 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
  ]
};
