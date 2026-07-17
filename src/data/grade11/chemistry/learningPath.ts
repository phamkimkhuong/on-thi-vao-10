import type { LearningMisconception, LearningOutcome } from '@/types';
import { g11ChemistryModule0Outcomes, g11ChemistryModule0Misconceptions } from './modules/module0_intro/learningPath';

export const g11ChemistryOutcomes: LearningOutcome[] = [
  ...g11ChemistryModule0Outcomes
];

export const g11ChemistryMisconceptions: LearningMisconception[] = [
  ...g11ChemistryModule0Misconceptions
];
