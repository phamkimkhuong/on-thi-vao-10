import { m3QuestionTypes } from './questionTypes';
import { m3Questions as coreQuestions } from './questions';
import { m3ExpansionQuestions } from './practiceExpansion/questions';
import { m3Solutions as coreSolutions } from './solutions';
import { m3ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m3QuestionTypes;
export const questions = [...coreQuestions, ...m3ExpansionQuestions];
export const solutions = [...coreSolutions, ...m3ExpansionSolutions];
