import { g10PhysicsModule5Topics } from './topics';
import { g10PhysicsModule5QuestionTypes } from './questionTypes';
import { g10PhysicsModule5Questions } from './questions';
import { g10PhysicsModule5Solutions } from './solutions';
import { g10PhysicsModule5ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule5ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule5Topics;
export const questionTypes = g10PhysicsModule5QuestionTypes;
export const questions = [...g10PhysicsModule5Questions, ...g10PhysicsModule5ExpansionQuestions];
export const solutions = [...g10PhysicsModule5Solutions, ...g10PhysicsModule5ExpansionSolutions];
