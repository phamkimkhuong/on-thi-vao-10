import { m8QuestionTypes } from './questionTypes';
import { m8Questions as coreQuestions } from './questions';
import { m8ExpansionQuestions } from './practiceExpansion/questions';
import { m8GapFillQuestions } from './practiceGapFill/questions';
import { m8Solutions as coreSolutions } from './solutions';
import { m8ExpansionSolutions } from './practiceExpansion/solutions';
import { m8GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m8QuestionTypes;
export const questions = [...coreQuestions, ...m8ExpansionQuestions, ...m8GapFillQuestions];
export const solutions = [...coreSolutions, ...m8ExpansionSolutions, ...m8GapFillSolutions];
