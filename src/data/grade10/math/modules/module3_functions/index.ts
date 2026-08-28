import { g10MathModule3Topics } from './topics';
import { g10MathModule3QuestionTypes } from './questionTypes';
import { g10MathModule3Questions } from './questions';
import { g10MathModule3Solutions } from './solutions';
import { g10MathModule3ExpansionQuestions, g10MathModule3ExpansionSolutions } from './curriculumExpansion';

export const topics = g10MathModule3Topics;
export const questionTypes = g10MathModule3QuestionTypes;
export const questions = [...g10MathModule3Questions, ...g10MathModule3ExpansionQuestions];
export const solutions = [...g10MathModule3Solutions, ...g10MathModule3ExpansionSolutions];
