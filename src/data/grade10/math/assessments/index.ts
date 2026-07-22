import type { AssessmentBlueprint } from '@/types';
import { g10MathAssessmentExams as semester1Exams } from './exams';
import { g10MathAssessmentQuestions as semester1Questions } from './questions';
import { g10MathAssessmentSolutions as semester1Solutions } from './solutions';
import {
  g10MathSemester2AssessmentBlueprints,
  g10MathSemester2AssessmentExams,
  g10MathSemester2AssessmentQuestions,
  g10MathSemester2AssessmentSolutions
} from './semester2';

export const g10MathAssessmentExams = [...semester1Exams, ...g10MathSemester2AssessmentExams];
export const g10MathAssessmentQuestions = [...semester1Questions, ...g10MathSemester2AssessmentQuestions];
export const g10MathAssessmentSolutions = [...semester1Solutions, ...g10MathSemester2AssessmentSolutions];

export const g10MathAssessmentBlueprints: AssessmentBlueprint[] = [...g10MathSemester2AssessmentBlueprints];
