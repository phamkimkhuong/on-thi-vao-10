import { m3AssessmentQuestions as formAQuestions } from './questions';
import { m3AssessmentQuestionsFormB } from './questionsFormB';
import { m3AssessmentSolutions as formASolutions } from './solutions';
import { m3AssessmentSolutionsFormB } from './solutionsFormB';

export const m3AssessmentQuestions = [...formAQuestions, ...m3AssessmentQuestionsFormB];
export const m3AssessmentSolutions = [...formASolutions, ...m3AssessmentSolutionsFormB];
