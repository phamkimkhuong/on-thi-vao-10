import type { AssessmentBlueprint } from '@/types';

export const module2CheckpointBlueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-module2-checkpoint-v1', subjectId: 'chemistry', title: 'Ma trận kiểm tra Module 2 – Bảng tuần hoàn', kind: 'module_checkpoint', duration: 20, totalPoints: 10,
  scopeTopicIds: ['chem10-t2'],
  outcomeIds: ['chem10-periodic-structure', 'chem10-periodic-position', 'chem10-periodic-radius', 'chem10-periodic-character', 'chem10-periodic-compounds'],
  competencyWeights: { chemical_cognition: 0.55, chemical_inquiry: 0.05, chemical_application: 0.4 },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
  ]
};
