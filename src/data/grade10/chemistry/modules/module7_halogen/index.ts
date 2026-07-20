import { m7QuestionTypes } from './questionTypes';
import { m7Questions as coreQuestions } from './questions';
import { m7ExpansionQuestions } from './practiceExpansion/questions';
import { m7GapFillQuestions } from './practiceGapFill/questions';
import { m7Solutions as coreSolutions } from './solutions';
import { m7ExpansionSolutions } from './practiceExpansion/solutions';
import { m7GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m7QuestionTypes;
export const questions = [...coreQuestions, ...m7ExpansionQuestions, ...m7GapFillQuestions];
export const solutions = [...coreSolutions, ...m7ExpansionSolutions, ...m7GapFillSolutions];
