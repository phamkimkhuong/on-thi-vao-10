import { g10PhysicsModule0Topics } from './topics';
import { g10PhysicsModule0QuestionTypes } from './questionTypes';
import { g10PhysicsModule0Questions } from './questions';
import { g10PhysicsModule0Solutions } from './solutions';
import { g10PhysicsModule0ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule0ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule0Topics;
export const questionTypes = g10PhysicsModule0QuestionTypes;
export const questions = [...g10PhysicsModule0Questions, ...g10PhysicsModule0ExpansionQuestions];
export const solutions = [...g10PhysicsModule0Solutions, ...g10PhysicsModule0ExpansionSolutions];
