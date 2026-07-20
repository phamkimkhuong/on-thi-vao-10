import { m6QuestionTypes } from './questionTypes';
import { m6Questions as coreQuestions } from './questions';
import { m6ExpansionQuestions } from './practiceExpansion/questions';
import { m6GapFillQuestions } from './practiceGapFill/questions';
import { m6Solutions as coreSolutions } from './solutions';
import { m6ExpansionSolutions } from './practiceExpansion/solutions';
import { m6GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m6QuestionTypes;
export const questions = [...coreQuestions, ...m6ExpansionQuestions, ...m6GapFillQuestions];
export const solutions = [...coreSolutions, ...m6ExpansionSolutions, ...m6GapFillSolutions];
