import { m4QuestionTypes } from './questionTypes';
import { m4Questions as coreQuestions } from './questions';
import { m4ExpansionQuestions } from './practiceExpansion/questions';
import { m4Solutions as coreSolutions } from './solutions';
import { m4ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m4QuestionTypes;
export const questions = [...coreQuestions, ...m4ExpansionQuestions];
export const solutions = [...coreSolutions, ...m4ExpansionSolutions];
