import { m6AssessmentQuestions as formAQuestions } from './questions';
import { m6AssessmentQuestionsFormB } from './questionsFormB';
import { m6AssessmentSolutions as formASolutions } from './solutions';
import { m6AssessmentSolutionsFormB } from './solutionsFormB';

export const m6AssessmentQuestions = [...formAQuestions, ...m6AssessmentQuestionsFormB];
export const m6AssessmentSolutions = [...formASolutions, ...m6AssessmentSolutionsFormB];
