import { g11ChemistryOrganicBasicsTopics } from './topics';
import { g11ChemistryOrganicBasicsQuestionTypes } from './questionTypes';
import { g11ChemistryOrganicBasicsQuestions } from './questions';
import { g11ChemistryOrganicBasicsSolutions } from './solutions';
import {
  g11ChemistryOrganicBasicsMisconceptions,
  g11ChemistryOrganicBasicsOutcomes
} from './learningPath';
import { m3AssessmentQuestions, m3AssessmentSolutions } from './assessments';
import {
  g11ChemistryOrganicBasicsExpandedQuestions,
  g11ChemistryOrganicBasicsExpandedSolutions,
  g11ChemistryOrganicBasicsExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryOrganicBasicsTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryOrganicBasicsQuestionTypes,
  g11ChemistryOrganicBasicsExpansionSpecs
);
export const questions = [
  ...g11ChemistryOrganicBasicsQuestions,
  ...g11ChemistryOrganicBasicsExpandedQuestions
];
export const solutions = [
  ...g11ChemistryOrganicBasicsSolutions,
  ...g11ChemistryOrganicBasicsExpandedSolutions
];
export const outcomes = g11ChemistryOrganicBasicsOutcomes;
export const misconceptions = g11ChemistryOrganicBasicsMisconceptions;
export const assessmentQuestions = m3AssessmentQuestions;
export const assessmentSolutions = m3AssessmentSolutions;
