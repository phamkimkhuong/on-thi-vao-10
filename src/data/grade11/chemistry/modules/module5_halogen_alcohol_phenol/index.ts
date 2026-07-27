import { g11ChemistryHalogenAlcoholPhenolTopics } from './topics';
import { g11ChemistryHalogenAlcoholPhenolQuestionTypes } from './questionTypes';
import { g11ChemistryHalogenAlcoholPhenolQuestions } from './questions';
import { g11ChemistryHalogenAlcoholPhenolSolutions } from './solutions';
import {
  g11ChemistryHalogenAlcoholPhenolMisconceptions,
  g11ChemistryHalogenAlcoholPhenolOutcomes
} from './learningPath';
import { m5AssessmentQuestions, m5AssessmentSolutions } from './assessments';
import {
  g11ChemistryHalogenAlcoholPhenolExpandedQuestions,
  g11ChemistryHalogenAlcoholPhenolExpandedSolutions,
  g11ChemistryHalogenAlcoholPhenolExpansionSpecs
} from './practiceExpansion';
import { expandChemistryPracticeCoverage } from '../../practiceExpansionBuilder';

export const topics = g11ChemistryHalogenAlcoholPhenolTopics;
export const questionTypes = expandChemistryPracticeCoverage(
  g11ChemistryHalogenAlcoholPhenolQuestionTypes,
  g11ChemistryHalogenAlcoholPhenolExpansionSpecs
);
export const questions = [
  ...g11ChemistryHalogenAlcoholPhenolQuestions,
  ...g11ChemistryHalogenAlcoholPhenolExpandedQuestions
];
export const solutions = [
  ...g11ChemistryHalogenAlcoholPhenolSolutions,
  ...g11ChemistryHalogenAlcoholPhenolExpandedSolutions
];
export const outcomes = g11ChemistryHalogenAlcoholPhenolOutcomes;
export const misconceptions = g11ChemistryHalogenAlcoholPhenolMisconceptions;
export const assessmentQuestions = m5AssessmentQuestions;
export const assessmentSolutions = m5AssessmentSolutions;
