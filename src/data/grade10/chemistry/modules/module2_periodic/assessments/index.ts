import { m2AssessmentQuestions as formAQuestions } from './questions';
import { m2AssessmentQuestionsFormB } from './questionsFormB';
import { m2AssessmentSolutions as formASolutions } from './solutions';
import { m2AssessmentSolutionsFormB } from './solutionsFormB';
import { m2TheoryQuestions, m2TheorySolutions } from './theory';

export const m2AssessmentQuestions = [...formAQuestions, ...m2AssessmentQuestionsFormB, ...m2TheoryQuestions];
export const m2AssessmentSolutions = [...formASolutions, ...m2AssessmentSolutionsFormB, ...m2TheorySolutions];
