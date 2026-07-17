import { g10PhysicsModule1Topics } from './topics';
import { g10PhysicsModule1QuestionTypes } from './questionTypes';
import { g10PhysicsModule1Questions } from './questions';
import { g10PhysicsModule1Solutions } from './solutions';
import { g10PhysicsModule1ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule1ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule1Topics;
export const questionTypes = g10PhysicsModule1QuestionTypes;
export const questions = [...g10PhysicsModule1Questions, ...g10PhysicsModule1ExpansionQuestions];
export const solutions = [...g10PhysicsModule1Solutions, ...g10PhysicsModule1ExpansionSolutions];
