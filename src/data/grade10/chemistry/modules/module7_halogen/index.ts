import { m7QuestionTypes } from './questionTypes';
import { m7Questions as coreQuestions } from './questions';
import { m7ExpansionQuestions } from './practiceExpansion/questions';
import { m7Solutions as coreSolutions } from './solutions';
import { m7ExpansionSolutions } from './practiceExpansion/solutions';

export const questionTypes = m7QuestionTypes;
export const questions = [...coreQuestions, ...m7ExpansionQuestions];
export const solutions = [...coreSolutions, ...m7ExpansionSolutions];
