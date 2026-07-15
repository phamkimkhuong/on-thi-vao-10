import { m0QuestionTypes } from './questionTypes';
import { m0Questions as coreQuestions } from './questions';
import { m0ExpansionQuestions } from './practiceExpansion/questions';
import { m0Solutions as coreSolutions } from './solutions';
import { m0ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m0QuestionTypes;
export const questions = [...coreQuestions, ...m0ExpansionQuestions];
export const solutions = [...coreSolutions, ...m0ExpansionSolutions];
