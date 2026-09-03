import { g10BiologyModule4Topics } from './topics';
import { g10BiologyModule4QuestionTypes } from './questionTypes';
import { g10BiologyModule4Questions } from './questions';
import { g10BiologyModule4Solutions } from './solutions';
import { g10BiologyModule4Adaptive } from './adaptiveBank';

export const topics = g10BiologyModule4Topics;
export const questionTypes = g10BiologyModule4QuestionTypes;
export const questions = [...g10BiologyModule4Questions, ...g10BiologyModule4Adaptive.questions];
export const solutions = [...g10BiologyModule4Solutions, ...g10BiologyModule4Adaptive.solutions];
