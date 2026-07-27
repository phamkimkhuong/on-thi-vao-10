import { g11ChemistryNitrogenSulfurTopics } from './topics';
import { g11ChemistryNitrogenSulfurQuestionTypes } from './questionTypes';
import { g11ChemistryNitrogenSulfurQuestions } from './questions';
import { g11ChemistryNitrogenSulfurSolutions } from './solutions';
import {
  g11ChemistryNitrogenSulfurMisconceptions,
  g11ChemistryNitrogenSulfurOutcomes
} from './learningPath';
import { m2AssessmentQuestions, m2AssessmentSolutions } from './assessments';
import {
  g11ChemistryNitrogenSulfurExpandedQuestions,
  g11ChemistryNitrogenSulfurExpandedSolutions,
  g11ChemistryNitrogenSulfurExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryNitrogenSulfurTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryNitrogenSulfurQuestionTypes,
  g11ChemistryNitrogenSulfurExpansionSpecs
);
export const questions = [
  ...g11ChemistryNitrogenSulfurQuestions,
  ...g11ChemistryNitrogenSulfurExpandedQuestions
];
export const solutions = [
  ...g11ChemistryNitrogenSulfurSolutions,
  ...g11ChemistryNitrogenSulfurExpandedSolutions
];
export const outcomes = g11ChemistryNitrogenSulfurOutcomes;
export const misconceptions = g11ChemistryNitrogenSulfurMisconceptions;
export const assessmentQuestions = m2AssessmentQuestions;
export const assessmentSolutions = m2AssessmentSolutions;
