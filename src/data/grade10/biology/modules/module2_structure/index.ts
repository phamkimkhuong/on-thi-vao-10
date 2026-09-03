import { g10BiologyModule2Topics } from './topics';
import { g10BiologyModule2QuestionTypes } from './questionTypes';
import { g10BiologyModule2Questions } from './questions';
import { g10BiologyModule2Solutions } from './solutions';
import { g10BiologyModule2Adaptive } from './adaptiveBank';

export const topics = g10BiologyModule2Topics;
export const questionTypes = g10BiologyModule2QuestionTypes;
export const questions = [...g10BiologyModule2Questions, ...g10BiologyModule2Adaptive.questions];
export const solutions = [...g10BiologyModule2Solutions, ...g10BiologyModule2Adaptive.solutions];
