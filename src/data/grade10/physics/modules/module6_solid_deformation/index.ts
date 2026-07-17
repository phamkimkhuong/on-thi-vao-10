import { g10PhysicsModule6Topics } from './topics';
import { g10PhysicsModule6QuestionTypes } from './questionTypes';
import { g10PhysicsModule6Questions } from './questions';
import { g10PhysicsModule6Solutions } from './solutions';
import { g10PhysicsModule6ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule6ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule6Topics;
export const questionTypes = g10PhysicsModule6QuestionTypes;
export const questions = [...g10PhysicsModule6Questions, ...g10PhysicsModule6ExpansionQuestions];
export const solutions = [...g10PhysicsModule6Solutions, ...g10PhysicsModule6ExpansionSolutions];
