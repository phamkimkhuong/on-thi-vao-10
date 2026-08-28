import { g10MathModule2Topics } from './topics';
import { g10MathModule2QuestionTypes } from './questionTypes';
import { g10MathModule2Questions } from './questions';
import { g10MathModule2Solutions } from './solutions';
import {
  g10MathModule2ExpansionQuestions,
  g10MathModule2ExpansionSolutions
} from './curriculumExpansion';

export const topics = g10MathModule2Topics;
export const questionTypes = g10MathModule2QuestionTypes;
export const questions = [...g10MathModule2Questions, ...g10MathModule2ExpansionQuestions];
export const solutions = [...g10MathModule2Solutions, ...g10MathModule2ExpansionSolutions];
