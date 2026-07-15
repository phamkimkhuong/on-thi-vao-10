import { m8QuestionTypes } from './questionTypes';
import { m8Questions as coreQuestions } from './questions';
import { m8ExpansionQuestions } from './practiceExpansion/questions';
import { m8Solutions as coreSolutions } from './solutions';
import { m8ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m8QuestionTypes;
export const questions = [...coreQuestions, ...m8ExpansionQuestions];
export const solutions = [...coreSolutions, ...m8ExpansionSolutions];
