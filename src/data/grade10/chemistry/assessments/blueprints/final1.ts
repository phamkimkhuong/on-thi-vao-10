import type { AssessmentBlueprint } from '@/types';

export const final1Blueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-final1-auto-v1',
  subjectId: 'chemistry',
  title: 'Ma trận Cuối học kỳ I – Hóa học 10 (chấm tự động)',
  kind: 'final',
  focus: 'mixed',
  semester: 1,
  duration: 45,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'],
  topicWeights: { 'chem10-t1': 0.33, 'chem10-t2': 0.33, 'chem10-t3': 0.34 },
  outcomeIds: [
    'chem10-atom-particles', 'chem10-atom-symbol', 'chem10-atom-isotope', 'chem10-atom-spectrum',
    'chem10-atom-model', 'chem10-atom-orbital', 'chem10-atom-configuration', 'chem10-atom-property',
    'chem10-periodic-structure', 'chem10-periodic-position', 'chem10-periodic-radius',
    'chem10-periodic-character', 'chem10-periodic-compounds',
    'chem10-bond-octet-ion', 'chem10-bond-ionic', 'chem10-bond-covalent',
    'chem10-bond-polarity', 'chem10-bond-intermolecular'
  ],
  competencyWeights: { chemical_cognition: 0.55, chemical_inquiry: 0.1, chemical_application: 0.35 },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 12, points: 3, responseType: 'multiple_choice' },
    { id: 'tf', title: 'Trắc nghiệm Đúng/Sai', itemCount: 4, points: 4, responseType: 'true_false_cluster' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 6, points: 3, responseType: 'short_answer' }
  ]
};
