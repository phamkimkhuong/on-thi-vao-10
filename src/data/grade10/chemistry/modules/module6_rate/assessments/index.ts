import { m6AssessmentQuestions as formAQuestions } from './questions';
import { m6AssessmentQuestionsFormB } from './questionsFormB';
import { m6AssessmentSolutions as formASolutions } from './solutions';
import { m6AssessmentSolutionsFormB } from './solutionsFormB';
import { m6TheoryQuestions, m6TheorySolutions } from './theory';

export const m6AssessmentQuestions = [...formAQuestions, ...m6AssessmentQuestionsFormB, ...m6TheoryQuestions];
export const m6AssessmentSolutions = [...formASolutions, ...m6AssessmentSolutionsFormB, ...m6TheorySolutions];
