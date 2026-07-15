import { m6QuestionTypes } from './questionTypes';
import { m6Questions as coreQuestions } from './questions';
import { m6ExpansionQuestions } from './practiceExpansion/questions';
import { m6Solutions as coreSolutions } from './solutions';
import { m6ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m6QuestionTypes;
export const questions = [...coreQuestions, ...m6ExpansionQuestions];
export const solutions = [...coreSolutions, ...m6ExpansionSolutions];
