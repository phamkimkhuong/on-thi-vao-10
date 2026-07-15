import type { AssessmentBlueprint } from '@/types';

/**
 * Ma trận mặc định cho đề giữa học kỳ I. Phạm vi thực tế có thể được cấu hình
 * theo kế hoạch dạy học của trường; blueprint này giả định đã hoàn thành Module 1–3.
 */
export const midterm1Blueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-midterm1-v1',
  subjectId: 'chemistry',
  title: 'Ma trận Giữa học kỳ I – Hóa học 10',
  kind: 'midterm',
  duration: 45,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3'],
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
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 16, points: 4, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 6, points: 6, responseType: 'short_answer' }
  ]
};
