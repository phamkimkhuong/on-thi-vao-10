import { g10PhysicsModule3Topics } from './topics';
import { g10PhysicsModule3QuestionTypes } from './questionTypes';
import { g10PhysicsModule3Questions } from './questions';
import { g10PhysicsModule3Solutions } from './solutions';
import { g10PhysicsModule3ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule3ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule3Topics;
export const questionTypes = g10PhysicsModule3QuestionTypes;
export const questions = [...g10PhysicsModule3Questions, ...g10PhysicsModule3ExpansionQuestions];
export const solutions = [...g10PhysicsModule3Solutions, ...g10PhysicsModule3ExpansionSolutions];
