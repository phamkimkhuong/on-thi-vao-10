import { m1AssessmentQuestions as formAQuestions } from './questions';
import { m1AssessmentQuestionsFormB } from './questionsFormB';
import { m1AssessmentSolutions as formASolutions } from './solutions';
import { m1AssessmentSolutionsFormB } from './solutionsFormB';
import { m1TheoryQuestions, m1TheorySolutions } from './theory';

export const m1AssessmentQuestions = [...formAQuestions, ...m1AssessmentQuestionsFormB, ...m1TheoryQuestions];
export const m1AssessmentSolutions = [...formASolutions, ...m1AssessmentSolutionsFormB, ...m1TheorySolutions];
