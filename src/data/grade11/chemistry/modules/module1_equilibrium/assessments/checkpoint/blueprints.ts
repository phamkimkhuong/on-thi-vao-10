import type { AssessmentBlueprint } from '@/types';

const foundationOutcomes = [
  'chem11-eq-reversible',
  'chem11-eq-dynamic',
  'chem11-eq-data',
  'chem11-eq-kc-expression',
  'chem11-eq-kc-calculation',
  'chem11-eq-shift-concentration',
  'chem11-eq-shift-pressure',
  'chem11-eq-rate-vs-position',
  'chem11-aq-strong-weak',
  'chem11-aq-ph-simple-solution',
  'chem11-aq-titration-calculation'
];

const score8Outcomes = [
  'chem11-eq-data',
  'chem11-eq-kc-expression',
  'chem11-eq-kc-calculation',
  'chem11-eq-kc-meaning',
  'chem11-eq-shift-pressure',
  'chem11-eq-shift-temperature',
  'chem11-eq-rate-vs-position',
  'chem11-aq-amphiprotic',
  'chem11-aq-ph-conversion',
  'chem11-aq-ph-simple-solution',
  'chem11-aq-titration-principle',
  'chem11-aq-titration-apparatus',
  'chem11-aq-titration-calculation'
];

const score9Outcomes = [
  'chem11-eq-kc-expression',
  'chem11-eq-kc-calculation',
  'chem11-eq-kc-meaning',
  'chem11-eq-shift-pressure',
  'chem11-eq-shift-temperature',
  'chem11-eq-experiment-temperature',
  'chem11-aq-electrolyte',
  'chem11-aq-strong-weak',
  'chem11-aq-conjugate-pair',
  'chem11-aq-amphiprotic',
  'chem11-aq-ph-simple-solution',
  'chem11-aq-titration-data',
  'chem11-aq-titration-calculation'
];

export const m1CheckpointBlueprints: AssessmentBlueprint[] = [
  {
    id: 'chem11-blueprint-m1-foundation-v1',
    subjectId: 'chemistry',
    title: 'Ma trận Chuyên đề Chương 1 – Nền tảng',
    kind: 'module_checkpoint',
    focus: 'mixed',
    difficultyBand: 'foundation',
    targetScoreRange: { min: 5, max: 7.9 },
    semester: 1,
    seriesOrder: 1,
    duration: 25,
    totalPoints: 10,
    scopeTopicIds: ['chem11-t1'],
    outcomeIds: foundationOutcomes,
    competencyWeights: { chemical_cognition: 0.7, chemical_inquiry: 0.1, chemical_application: 0.2 },
    difficultyWeights: { easy: 0.3333333333333333, medium: 0.5, hard: 0.16666666666666666 },
    sections: [
      { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
      { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
    ]
  },
  {
    id: 'chem11-blueprint-m1-score8-v1',
    subjectId: 'chemistry',
    title: 'Ma trận Chuyên đề Chương 1 – Mục tiêu 8+',
    kind: 'module_checkpoint',
    focus: 'mixed',
    difficultyBand: 'score8',
    targetScoreRange: { min: 8, max: 8.9 },
    semester: 1,
    seriesOrder: 2,
    duration: 30,
    totalPoints: 10,
    scopeTopicIds: ['chem11-t1'],
    outcomeIds: score8Outcomes,
    competencyWeights: { chemical_cognition: 0.55, chemical_inquiry: 0.15, chemical_application: 0.3 },
    difficultyWeights: { easy: 0.08333333333333333, medium: 0.5, hard: 0.4166666666666667 },
    sections: [
      { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
      { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
    ]
  },
  {
    id: 'chem11-blueprint-m1-score9-v1',
    subjectId: 'chemistry',
    title: 'Ma trận Chuyên đề Chương 1 – Mục tiêu 9+',
    kind: 'module_checkpoint',
    focus: 'mixed',
    difficultyBand: 'score9',
    targetScoreRange: { min: 9, max: 10 },
    semester: 1,
    seriesOrder: 3,
    duration: 35,
    totalPoints: 10,
    scopeTopicIds: ['chem11-t1'],
    outcomeIds: score9Outcomes,
    competencyWeights: { chemical_cognition: 0.45, chemical_inquiry: 0.2, chemical_application: 0.35 },
    difficultyWeights: { easy: 0.08333333333333333, medium: 0.3333333333333333, hard: 0.5833333333333334 },
    sections: [
      { id: 'mcq', title: 'Trắc nghiệm nhiều lựa chọn', itemCount: 8, points: 4, responseType: 'multiple_choice' },
      { id: 'short', title: 'Trả lời ngắn', itemCount: 4, points: 6, responseType: 'short_answer' }
    ]
  }
];
