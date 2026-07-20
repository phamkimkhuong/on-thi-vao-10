import { m4QuestionTypes } from './questionTypes';
import { m4Questions as coreQuestions } from './questions';
import { m4ExpansionQuestions } from './practiceExpansion/questions';
import { m4GapFillQuestions } from './practiceGapFill/questions';
import { m4Expansion2Questions } from './practiceExpansion2/questions';
import { m4Solutions as coreSolutions } from './solutions';
import { m4ExpansionSolutions } from './practiceExpansion/solutions';
import { m4GapFillSolutions } from './practiceGapFill/solutions';
import { m4Expansion2Solutions } from './practiceExpansion2/solutions';

export const questionTypes = m4QuestionTypes;
export const questions = [...coreQuestions, ...m4ExpansionQuestions, ...m4GapFillQuestions, ...m4Expansion2Questions];
export const solutions = [...coreSolutions, ...m4ExpansionSolutions, ...m4GapFillSolutions, ...m4Expansion2Solutions];
