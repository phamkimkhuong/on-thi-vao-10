import { m2QuestionTypes } from './questionTypes';
import { m2Questions as coreQuestions } from './questions';
import { m2ExpansionQuestions } from './practiceExpansion/questions';
import { m2GapFillQuestions } from './practiceGapFill/questions';
import { m2Solutions as coreSolutions } from './solutions';
import { m2ExpansionSolutions } from './practiceExpansion/solutions';
import { m2GapFillSolutions } from './practiceGapFill/solutions';

export const questionTypes = m2QuestionTypes;
export const questions = [...coreQuestions, ...m2ExpansionQuestions, ...m2GapFillQuestions];
export const solutions = [...coreSolutions, ...m2ExpansionSolutions, ...m2GapFillSolutions];
