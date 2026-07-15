import { m7AssessmentQuestions as formAQuestions } from './questions';
import { m7AssessmentQuestionsFormB } from './questionsFormB';
import { m7AssessmentSolutions as formASolutions } from './solutions';
import { m7AssessmentSolutionsFormB } from './solutionsFormB';

export const m7AssessmentQuestions = [...formAQuestions, ...m7AssessmentQuestionsFormB];
export const m7AssessmentSolutions = [...formASolutions, ...m7AssessmentSolutionsFormB];
