import { g11ChemistryEquilibriumTopics } from './topics';
import { g11ChemistryEquilibriumQuestionTypes } from './questionTypes';
import { g11ChemistryEquilibriumQuestions } from './questions';
import { g11ChemistryEquilibriumSolutions } from './solutions';
import {
  g11ChemistryEquilibriumMisconceptions,
  g11ChemistryEquilibriumOutcomes
} from './learningPath';
import { m1AssessmentQuestions, m1AssessmentSolutions } from './assessments';
import {
  g11ChemistryEquilibriumExpandedQuestions,
  g11ChemistryEquilibriumExpandedSolutions,
  g11ChemistryEquilibriumExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryEquilibriumTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryEquilibriumQuestionTypes,
  g11ChemistryEquilibriumExpansionSpecs
);
export const questions = [
  ...g11ChemistryEquilibriumQuestions,
  ...g11ChemistryEquilibriumExpandedQuestions
];
export const solutions = [
  ...g11ChemistryEquilibriumSolutions,
  ...g11ChemistryEquilibriumExpandedSolutions
];
export const outcomes = g11ChemistryEquilibriumOutcomes;
export const misconceptions = g11ChemistryEquilibriumMisconceptions;
export const assessmentQuestions = m1AssessmentQuestions;
export const assessmentSolutions = m1AssessmentSolutions;
