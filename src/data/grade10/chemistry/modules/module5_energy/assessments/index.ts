import { m5AssessmentQuestions as formAQuestions } from './questions';
import { m5AssessmentQuestionsFormB } from './questionsFormB';
import { m5AssessmentSolutions as formASolutions } from './solutions';
import { m5AssessmentSolutionsFormB } from './solutionsFormB';

export const m5AssessmentQuestions = [...formAQuestions, ...m5AssessmentQuestionsFormB];
export const m5AssessmentSolutions = [...formASolutions, ...m5AssessmentSolutionsFormB];
