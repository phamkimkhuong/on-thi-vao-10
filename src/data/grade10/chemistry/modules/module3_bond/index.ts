import { m3QuestionTypes } from './questionTypes';
import { m3Questions as coreQuestions } from './questions';
import { m3ExpansionQuestions } from './practiceExpansion/questions';
import { m3GapFillQuestions } from './practiceGapFill/questions';
import { m3Expansion2Questions } from './practiceExpansion2/questions';
import { m3Solutions as coreSolutions } from './solutions';
import { m3ExpansionSolutions } from './practiceExpansion/solutions';
import { m3GapFillSolutions } from './practiceGapFill/solutions';
import { m3Expansion2Solutions } from './practiceExpansion2/solutions';

export const questionTypes = m3QuestionTypes;
export const questions = [...coreQuestions, ...m3ExpansionQuestions, ...m3GapFillQuestions, ...m3Expansion2Questions];
export const solutions = [...coreSolutions, ...m3ExpansionSolutions, ...m3GapFillSolutions, ...m3Expansion2Solutions];
