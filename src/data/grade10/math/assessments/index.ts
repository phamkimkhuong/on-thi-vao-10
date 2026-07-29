import type { AssessmentBlueprint, Question } from '@/types';
import { g10MathSemester1AssessmentBlueprints } from './blueprints';
import { g10MathAssessmentExams as semester1Exams } from './exams';
import {
  g10MathMidtermExpansionQuestions,
  g10MathMidtermExpansionSolutions
} from './midtermExpansion';
import { g10MathAssessmentQuestions as semester1Questions } from './questions';
import { g10MathAssessmentSolutions as semester1Solutions } from './solutions';
import {
  g10MathSemester2AssessmentBlueprints,
  g10MathSemester2AssessmentExams,
  g10MathSemester2AssessmentQuestions,
  g10MathSemester2AssessmentSolutions
} from './semester2';

export const g10MathAssessmentExams = [...semester1Exams, ...g10MathSemester2AssessmentExams];

const legacyMidtermIds = new Set([
  ...Array.from({ length: 10 }, (_, index) => `mock-math10-q${index + 1}`),
  ...Array.from({ length: 10 }, (_, index) => `mock-math10-q${index + 21}`)
]);

const normalizeAutoGradedMidtermPoints = (question: Question): Question => {
  const isExpandedMidterm2 = question.id.startsWith('math10-assess-mid2-');
  if (!legacyMidtermIds.has(question.id) && !isExpandedMidterm2) return question;

  const points = question.responseType === 'single_choice'
    ? 0.25
    : question.responseType === 'true_false_cluster'
      ? 1
      : 0.5;
  return { ...question, points };
};

export const g10MathAssessmentQuestions = [
  ...semester1Questions,
  ...g10MathSemester2AssessmentQuestions,
  ...g10MathMidtermExpansionQuestions
].map(normalizeAutoGradedMidtermPoints);

export const g10MathAssessmentSolutions = [
  ...semester1Solutions,
  ...g10MathSemester2AssessmentSolutions,
  ...g10MathMidtermExpansionSolutions
];

export const g10MathAssessmentBlueprints: AssessmentBlueprint[] = [
  ...g10MathSemester1AssessmentBlueprints,
  ...g10MathSemester2AssessmentBlueprints
];
