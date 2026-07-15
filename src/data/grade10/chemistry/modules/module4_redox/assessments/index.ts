import { m4AssessmentQuestions as formAQuestions } from './questions';
import { m4AssessmentQuestionsFormB } from './questionsFormB';
import { m4AssessmentSolutions as formASolutions } from './solutions';
import { m4AssessmentSolutionsFormB } from './solutionsFormB';

export const m4AssessmentQuestions = [...formAQuestions, ...m4AssessmentQuestionsFormB];
export const m4AssessmentSolutions = [...formASolutions, ...m4AssessmentSolutionsFormB];
