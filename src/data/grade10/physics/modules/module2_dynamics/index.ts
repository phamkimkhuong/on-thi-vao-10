import { g10PhysicsModule2Topics } from './topics';
import { g10PhysicsModule2QuestionTypes } from './questionTypes';
import { g10PhysicsModule2Questions } from './questions';
import { g10PhysicsModule2Solutions } from './solutions';
import { g10PhysicsModule2ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule2ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule2Topics;
export const questionTypes = g10PhysicsModule2QuestionTypes;
export const questions = [...g10PhysicsModule2Questions, ...g10PhysicsModule2ExpansionQuestions];
export const solutions = [...g10PhysicsModule2Solutions, ...g10PhysicsModule2ExpansionSolutions];
