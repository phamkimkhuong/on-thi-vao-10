import { m4AssessmentQuestions as formAQuestions } from './questions';
import { m4AssessmentQuestionsFormB } from './questionsFormB';
import { m4AssessmentSolutions as formASolutions } from './solutions';
import { m4AssessmentSolutionsFormB } from './solutionsFormB';
import { m4TheoryQuestions, m4TheorySolutions } from './theory';

export const m4AssessmentQuestions = [...formAQuestions, ...m4AssessmentQuestionsFormB, ...m4TheoryQuestions];
export const m4AssessmentSolutions = [...formASolutions, ...m4AssessmentSolutionsFormB, ...m4TheorySolutions];
