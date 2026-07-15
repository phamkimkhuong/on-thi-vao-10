import { m7AssessmentQuestions as formAQuestions } from './questions';
import { m7AssessmentQuestionsFormB } from './questionsFormB';
import { m7AssessmentSolutions as formASolutions } from './solutions';
import { m7AssessmentSolutionsFormB } from './solutionsFormB';
import { m7TheoryQuestions, m7TheorySolutions } from './theory';

export const m7AssessmentQuestions = [...formAQuestions, ...m7AssessmentQuestionsFormB, ...m7TheoryQuestions];
export const m7AssessmentSolutions = [...formASolutions, ...m7AssessmentSolutionsFormB, ...m7TheorySolutions];
