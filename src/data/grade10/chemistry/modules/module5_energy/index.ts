import { m5QuestionTypes } from './questionTypes';
import { m5Questions as coreQuestions } from './questions';
import { m5ExpansionQuestions } from './practiceExpansion/questions';
import { m5GapFillQuestions } from './practiceGapFill/questions';
import { m5Solutions as coreSolutions } from './solutions';
import { m5ExpansionSolutions } from './practiceExpansion/solutions';
import { m5GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m5QuestionTypes;
export const questions = [...coreQuestions, ...m5ExpansionQuestions, ...m5GapFillQuestions];
export const solutions = [...coreSolutions, ...m5ExpansionSolutions, ...m5GapFillSolutions];
