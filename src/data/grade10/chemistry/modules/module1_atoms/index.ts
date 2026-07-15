import { m1QuestionTypes } from './questionTypes';
import { m1Questions as coreQuestions } from './questions';
import { m1ExpansionQuestions } from './practiceExpansion/questions';
import { m1Solutions as coreSolutions } from './solutions';
import { m1ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m1QuestionTypes;
export const questions = [...coreQuestions, ...m1ExpansionQuestions];
export const solutions = [...coreSolutions, ...m1ExpansionSolutions];
