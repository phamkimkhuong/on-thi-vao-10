import type { AssessmentBlueprint } from '@/types';

/**
 * Đề cuối học kỳ II bao phủ toàn bộ Hóa học 10 cốt lõi nhưng ưu tiên phần học
 * trong học kỳ II. Với thang 10 điểm, topicWeights tương ứng:
 * M1=0,75; M2=0,75; M3=0,75; M4=1,75; M5=1,75; M6=1,50; M7=2,75 điểm.
 */
export const final2Blueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-final2-v1',
  subjectId: 'chemistry',
  title: 'Ma trận Cuối học kỳ II – Hóa học 10',
  kind: 'final',
  duration: 60,
  totalPoints: 10,
  scopeTopicIds: ['chem10-t1', 'chem10-t2', 'chem10-t3', 'chem10-t4', 'chem10-t5', 'chem10-t6', 'chem10-t7'],
  topicWeights: {
    'chem10-t1': 0.075,
    'chem10-t2': 0.075,
    'chem10-t3': 0.075,
    'chem10-t4': 0.175,
    'chem10-t5': 0.175,
    'chem10-t6': 0.15,
    'chem10-t7': 0.275
  },
  outcomeIds: [
    'chem10-atom-particles', 'chem10-atom-symbol', 'chem10-atom-isotope', 'chem10-atom-spectrum',
    'chem10-atom-model', 'chem10-atom-orbital', 'chem10-atom-configuration', 'chem10-atom-property',
    'chem10-periodic-structure', 'chem10-periodic-position', 'chem10-periodic-radius',
    'chem10-periodic-character', 'chem10-periodic-compounds',
    'chem10-bond-octet-ion', 'chem10-bond-ionic', 'chem10-bond-covalent',
    'chem10-bond-polarity', 'chem10-bond-intermolecular',
    'chem10-redox-oxidation-number', 'chem10-redox-process', 'chem10-redox-agents', 'chem10-redox-balance',
    'chem10-energy-system', 'chem10-energy-enthalpy', 'chem10-energy-formation', 'chem10-energy-bond',
    'chem10-rate-average', 'chem10-rate-graph', 'chem10-rate-factors', 'chem10-rate-catalyst',
    'chem10-halogen-trends', 'chem10-halogen-oxidizing', 'chem10-halogen-reactions',
    'chem10-halogen-hydrogen', 'chem10-halogen-identification'
  ],
  competencyWeights: {
    chemical_cognition: 0.5,
    chemical_inquiry: 0.1,
    chemical_application: 0.4
  },
  difficultyWeights: { easy: 0.25, medium: 0.55, hard: 0.2 },
  sections: [
    { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 20, points: 5, responseType: 'multiple_choice' },
    { id: 'short', title: 'Trả lời ngắn', itemCount: 5, points: 5, responseType: 'short_answer' }
  ]
};
