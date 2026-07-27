import { g11ChemistryCarbonylCarboxylicAcidTopics } from './topics';
import { g11ChemistryCarbonylCarboxylicAcidQuestionTypes } from './questionTypes';
import { g11ChemistryCarbonylCarboxylicAcidQuestions } from './questions';
import { g11ChemistryCarbonylCarboxylicAcidSolutions } from './solutions';
import {
  g11ChemistryCarbonylCarboxylicAcidMisconceptions,
  g11ChemistryCarbonylCarboxylicAcidOutcomes
} from './learningPath';
import { m6AssessmentQuestions, m6AssessmentSolutions } from './assessments';
import {
  g11ChemistryCarbonylCarboxylicAcidExpandedQuestions,
  g11ChemistryCarbonylCarboxylicAcidExpandedSolutions,
  g11ChemistryCarbonylCarboxylicAcidExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryCarbonylCarboxylicAcidTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryCarbonylCarboxylicAcidQuestionTypes,
  g11ChemistryCarbonylCarboxylicAcidExpansionSpecs
);
export const questions = [
  ...g11ChemistryCarbonylCarboxylicAcidQuestions,
  ...g11ChemistryCarbonylCarboxylicAcidExpandedQuestions
];
export const solutions = [
  ...g11ChemistryCarbonylCarboxylicAcidSolutions,
  ...g11ChemistryCarbonylCarboxylicAcidExpandedSolutions
];
export const outcomes = g11ChemistryCarbonylCarboxylicAcidOutcomes;
export const misconceptions = g11ChemistryCarbonylCarboxylicAcidMisconceptions;
export const assessmentQuestions = m6AssessmentQuestions;
export const assessmentSolutions = m6AssessmentSolutions;
