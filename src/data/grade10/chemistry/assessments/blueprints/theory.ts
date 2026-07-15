import type { AssessmentBlueprint } from '@/types';

const moduleOutcomes: Record<number, string[]> = {
  1: ['chem10-atom-particles', 'chem10-atom-symbol', 'chem10-atom-isotope', 'chem10-atom-spectrum', 'chem10-atom-model', 'chem10-atom-orbital', 'chem10-atom-configuration', 'chem10-atom-property'],
  2: ['chem10-periodic-structure', 'chem10-periodic-position', 'chem10-periodic-radius', 'chem10-periodic-character', 'chem10-periodic-compounds'],
  3: ['chem10-bond-octet-ion', 'chem10-bond-ionic', 'chem10-bond-covalent', 'chem10-bond-polarity', 'chem10-bond-intermolecular'],
  4: ['chem10-redox-oxidation-number', 'chem10-redox-process', 'chem10-redox-agents', 'chem10-redox-balance'],
  5: ['chem10-energy-system', 'chem10-energy-enthalpy', 'chem10-energy-formation', 'chem10-energy-bond'],
  6: ['chem10-rate-average', 'chem10-rate-graph', 'chem10-rate-factors', 'chem10-rate-catalyst'],
  7: ['chem10-halogen-trends', 'chem10-halogen-oxidizing', 'chem10-halogen-reactions', 'chem10-halogen-hydrogen', 'chem10-halogen-identification']
};

export const chemistryTheoryModuleBlueprints: AssessmentBlueprint[] = Array.from(
  { length: 7 },
  (_, index) => {
    const moduleNumber = index + 1;
    const itemCount = 8;
    return {
      id: `chem10-blueprint-theory-module${moduleNumber}-v1`,
      subjectId: 'chemistry',
      title: `Ma trận kiểm tra lý thuyết Chuyên đề ${moduleNumber}`,
      kind: 'module_checkpoint',
      focus: 'theory',
      theoryScope: 'module',
      duration: 12,
      totalPoints: itemCount,
      scopeTopicIds: [`chem10-t${moduleNumber}`],
      outcomeIds: moduleOutcomes[moduleNumber],
      competencyWeights: { chemical_cognition: 0.8, chemical_inquiry: 0.1, chemical_application: 0.1 },
      difficultyWeights: { easy: 0.3, medium: 0.55, hard: 0.15 },
      sections: [{ id: 'theory-mcq', title: 'Khái niệm – giải thích – ngộ nhận', itemCount, points: itemCount, responseType: 'multiple_choice' }]
    };
  }
);

export const chemistryTheoryComprehensiveBlueprint: AssessmentBlueprint = {
  id: 'chem10-blueprint-theory-comprehensive-v1',
  subjectId: 'chemistry',
  title: 'Ma trận kiểm tra lý thuyết tổng hợp Hóa học 10',
  kind: 'full_course',
  focus: 'theory',
  theoryScope: 'comprehensive',
  duration: 30,
  totalPoints: 28,
  scopeTopicIds: Array.from({ length: 7 }, (_, index) => `chem10-t${index + 1}`),
  topicWeights: Object.fromEntries(Array.from({ length: 7 }, (_, index) => [`chem10-t${index + 1}`, 1 / 7])),
  outcomeIds: Object.values(moduleOutcomes).flat(),
  competencyWeights: { chemical_cognition: 0.8, chemical_inquiry: 0.1, chemical_application: 0.1 },
  difficultyWeights: { easy: 0.25, medium: 0.6, hard: 0.15 },
  sections: [{ id: 'theory-comprehensive', title: 'Lý thuyết tổng hợp 7 chuyên đề', itemCount: 28, points: 28, responseType: 'multiple_choice' }]
};
