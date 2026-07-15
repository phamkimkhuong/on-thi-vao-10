import type { AssessmentBlueprint } from '@/types';

export const module7CheckpointBlueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-module7-checkpoint-v1', subjectId: 'chemistry',
  title: 'Ma trận kiểm tra Module 7 – Halogen', kind: 'module_checkpoint',
  duration: 20, totalPoints: 10, scopeTopicIds: ['chem10-t7'],
  outcomeIds: [
    'chem10-halogen-trends', 'chem10-halogen-oxidizing', 'chem10-halogen-reactions',
    'chem10-halogen-hydrogen', 'chem10-halogen-identification'
  ],
  competencyWeights: { chemical_cognition: 0.55, chemical_inquiry: 0.05, chemical_application: 0.4 },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
  ]
};
