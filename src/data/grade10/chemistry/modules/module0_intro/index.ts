import { m0QuestionTypes } from './questionTypes';
import { m0Questions as coreQuestions } from './questions';
import { m0ExpansionQuestions } from './practiceExpansion/questions';
import { m0GapFillQuestions } from './practiceGapFill/questions';
import { m0Solutions as coreSolutions } from './solutions';
import { m0ExpansionSolutions } from './practiceExpansion/solutions';
import { m0GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m0QuestionTypes;
export const questions = [...coreQuestions, ...m0ExpansionQuestions, ...m0GapFillQuestions];
export const solutions = [...coreSolutions, ...m0ExpansionSolutions, ...m0GapFillSolutions];
