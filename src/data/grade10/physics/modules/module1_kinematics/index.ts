import { g10PhysicsModule1Topics } from './topics';
import { g10PhysicsModule1QuestionTypes } from './questionTypes';
import { g10PhysicsModule1Questions } from './questions';
import { g10PhysicsModule1Solutions } from './solutions';
import { g10PhysicsModule1ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule1ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule1Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule1Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule1GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule1GapFillSolutions } from './practiceGapFill/solutions';
import { g10PhysicsModule1RemediationQuestions, g10PhysicsModule1RemediationSolutions } from './practiceRemediation';

export const topics = g10PhysicsModule1Topics;
export const questionTypes = g10PhysicsModule1QuestionTypes;
export const questions = [
  ...g10PhysicsModule1Questions,
  ...g10PhysicsModule1ExpansionQuestions,
  ...g10PhysicsModule1Expansion2Questions,
  ...g10PhysicsModule1GapFillQuestions,
  ...g10PhysicsModule1RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule1Solutions,
  ...g10PhysicsModule1ExpansionSolutions,
  ...g10PhysicsModule1Expansion2Solutions,
  ...g10PhysicsModule1GapFillSolutions,
  ...g10PhysicsModule1RemediationSolutions
];
