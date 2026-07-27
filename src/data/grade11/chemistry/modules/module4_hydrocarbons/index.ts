import { g11ChemistryHydrocarbonsTopics } from './topics';
import { g11ChemistryHydrocarbonsQuestionTypes } from './questionTypes';
import { g11ChemistryHydrocarbonsQuestions } from './questions';
import { g11ChemistryHydrocarbonsSolutions } from './solutions';
import {
  g11ChemistryHydrocarbonsMisconceptions,
  g11ChemistryHydrocarbonsOutcomes
} from './learningPath';
import { m4AssessmentQuestions, m4AssessmentSolutions } from './assessments';
import {
  g11ChemistryHydrocarbonsExpandedQuestions,
  g11ChemistryHydrocarbonsExpandedSolutions,
  g11ChemistryHydrocarbonsExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryHydrocarbonsTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryHydrocarbonsQuestionTypes,
  g11ChemistryHydrocarbonsExpansionSpecs
);
export const questions = [
  ...g11ChemistryHydrocarbonsQuestions,
  ...g11ChemistryHydrocarbonsExpandedQuestions
];
export const solutions = [
  ...g11ChemistryHydrocarbonsSolutions,
  ...g11ChemistryHydrocarbonsExpandedSolutions
];
export const outcomes = g11ChemistryHydrocarbonsOutcomes;
export const misconceptions = g11ChemistryHydrocarbonsMisconceptions;
export const assessmentQuestions = m4AssessmentQuestions;
export const assessmentSolutions = m4AssessmentSolutions;
