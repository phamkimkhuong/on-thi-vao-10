import { m2AssessmentQuestions as formAQuestions } from './questions';
import { m2AssessmentQuestionsFormB } from './questionsFormB';
import { m2AssessmentSolutions as formASolutions } from './solutions';
import { m2AssessmentSolutionsFormB } from './solutionsFormB';

export const m2AssessmentQuestions = [...formAQuestions, ...m2AssessmentQuestionsFormB];
export const m2AssessmentSolutions = [...formASolutions, ...m2AssessmentSolutionsFormB];
