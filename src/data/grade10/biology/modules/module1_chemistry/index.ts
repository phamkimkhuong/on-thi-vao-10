import { g10BiologyModule1Topics } from './topics';
import { g10BiologyModule1QuestionTypes } from './questionTypes';
import { g10BiologyModule1Questions } from './questions';
import { g10BiologyModule1Solutions } from './solutions';
import { g10BiologyModule1Adaptive } from './adaptiveBank';

export const topics = g10BiologyModule1Topics;
export const questionTypes = g10BiologyModule1QuestionTypes;
export const questions = [...g10BiologyModule1Questions, ...g10BiologyModule1Adaptive.questions];
export const solutions = [...g10BiologyModule1Solutions, ...g10BiologyModule1Adaptive.solutions];
