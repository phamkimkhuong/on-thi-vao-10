import { g10PhysicsModule3Topics } from './topics';
import { g10PhysicsModule3QuestionTypes } from './questionTypes';
import { g10PhysicsModule3Questions } from './questions';
import { g10PhysicsModule3Solutions } from './solutions';
import { g10PhysicsModule3ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule3ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule3Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule3Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule3GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule3GapFillSolutions } from './practiceGapFill/solutions';
import { g10PhysicsModule3RemediationQuestions, g10PhysicsModule3RemediationSolutions } from './practiceRemediation';

export const topics = g10PhysicsModule3Topics;
export const questionTypes = g10PhysicsModule3QuestionTypes;
export const questions = [...g10PhysicsModule3Questions, ...g10PhysicsModule3ExpansionQuestions, ...g10PhysicsModule3Expansion2Questions, ...g10PhysicsModule3GapFillQuestions, ...g10PhysicsModule3RemediationQuestions];
export const solutions = [...g10PhysicsModule3Solutions, ...g10PhysicsModule3ExpansionSolutions, ...g10PhysicsModule3Expansion2Solutions, ...g10PhysicsModule3GapFillSolutions, ...g10PhysicsModule3RemediationSolutions];
