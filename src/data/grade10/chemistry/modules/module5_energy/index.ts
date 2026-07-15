import { m5QuestionTypes } from './questionTypes';
import { m5Questions as coreQuestions } from './questions';
import { m5ExpansionQuestions } from './practiceExpansion/questions';
import { m5Solutions as coreSolutions } from './solutions';
import { m5ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m5QuestionTypes;
export const questions = [...coreQuestions, ...m5ExpansionQuestions];
export const solutions = [...coreSolutions, ...m5ExpansionSolutions];
