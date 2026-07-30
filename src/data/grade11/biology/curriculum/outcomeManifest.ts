import type { OutcomeManifestEntry } from '@/data/schema';

const moduleByOutcome = (number: number) => {
  if (number <= 20) return 1;
  if (number <= 29) return 2;
  if (number <= 38) return 3;
  if (number <= 48) return 4;
  return 5;
};
const lessonByOutcome = [
  1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13,
  14, 15, 15, 16, 17, 17, 17, 18, 18,
  19, 20, 20, 20, 21, 22, 22, 22, 23,
  24, 25, 25, 25, 26, 26, 27, 27, 27, 27,
  28, 28, 28, 29
];
const requirementIds = [
  'metabolism-overview', 'water-absorption', 'mineral-nutrition', 'plant-transport',
  'transpiration', 'water-experiment', 'photosynthesis-light', 'photosynthesis-pathways',
  'photosynthesis-factors', 'photosynthesis-experiment', 'plant-respiration',
  'respiration-experiment', 'digestion', 'animal-respiration', 'circulation',
  'circulation-experiment', 'immunity', 'excretion', 'homeostasis',
  'metabolism-integration', 'response-overview', 'tropism', 'nastic-movement',
  'plant-response-experiment', 'nervous-organization', 'membrane-potential',
  'synapse', 'animal-behaviour', 'behaviour-application',
  'growth-overview', 'plant-growth', 'plant-hormones', 'plant-growth',
  'plant-hormones', 'animal-growth', 'animal-growth', 'animal-growth',
  'growth-practice', 'reproduction-overview', 'plant-reproduction',
  'plant-reproduction', 'plant-reproduction', 'reproduction-practice',
  'reproduction-practice', 'animal-reproduction', 'animal-reproduction',
  'animal-reproduction', 'animal-reproduction', 'physiology-integration',
  'physiology-integration', 'physiology-integration', 'body-biology-careers'
];

export const g11BiologyOutcomeManifest: OutcomeManifestEntry[] =
  requirementIds.map((requirementId, index) => {
    const number = index + 1;
    const moduleNumber = moduleByOutcome(number);
    return {
      outcomeId: `out-bio11-${String(number).padStart(2, '0')}`,
      courseId: 'grade11:biology',
      moduleId: `bio11-m${moduleNumber}`,
      scope: 'core',
      scopeBasis: 'official_required',
      officialRequirementIds: [`bio11-official-${requirementId}`],
      lessonIds: [`bio11-kntt-l${lessonByOutcome[index]}`],
      reviewStatus: 'source_checked',
      contentVersion: '1.0.0',
      lastVerifiedAt: '2026-07-30'
    };
  });
