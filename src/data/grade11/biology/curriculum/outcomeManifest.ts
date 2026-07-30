import type { OutcomeManifestEntry } from '@/data/schema';

const moduleByOutcome = (number: number) => number <= 20 ? 1 : 2;
const lessonByOutcome = [
  1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13,
  14, 15, 15, 16, 17, 17, 17, 18, 18
];
const requirementIds = [
  'metabolism-overview', 'water-absorption', 'mineral-nutrition', 'plant-transport',
  'transpiration', 'water-experiment', 'photosynthesis-light', 'photosynthesis-pathways',
  'photosynthesis-factors', 'photosynthesis-experiment', 'plant-respiration',
  'respiration-experiment', 'digestion', 'animal-respiration', 'circulation',
  'circulation-experiment', 'immunity', 'excretion', 'homeostasis',
  'metabolism-integration', 'response-overview', 'tropism', 'nastic-movement',
  'plant-response-experiment', 'nervous-organization', 'membrane-potential',
  'synapse', 'animal-behaviour', 'behaviour-application'
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
      contentVersion: '0.1.0',
      lastVerifiedAt: '2026-07-30'
    };
  });
