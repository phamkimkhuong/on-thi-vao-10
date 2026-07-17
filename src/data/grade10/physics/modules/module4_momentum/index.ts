import { g10PhysicsModule4Topics } from './topics';
import { g10PhysicsModule4QuestionTypes } from './questionTypes';
import { g10PhysicsModule4Questions } from './questions';
import { g10PhysicsModule4Solutions } from './solutions';
import { g10PhysicsModule4ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule4ExpansionSolutions } from './practiceExpansion/solutions';

export const topics = g10PhysicsModule4Topics;
export const questionTypes = g10PhysicsModule4QuestionTypes;
export const questions = [...g10PhysicsModule4Questions, ...g10PhysicsModule4ExpansionQuestions];
export const solutions = [...g10PhysicsModule4Solutions, ...g10PhysicsModule4ExpansionSolutions];
