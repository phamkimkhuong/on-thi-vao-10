import { g10PhysicsModule0Topics } from './topics';
import { g10PhysicsModule0QuestionTypes } from './questionTypes';
import { g10PhysicsModule0Questions } from './questions';
import { g10PhysicsModule0Solutions } from './solutions';
import { g10PhysicsModule0ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule0ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule0Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule0Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule0GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule0GapFillSolutions } from './practiceGapFill/solutions';
import { g10PhysicsModule0RemediationQuestions, g10PhysicsModule0RemediationSolutions } from './practiceRemediation';

export const topics = g10PhysicsModule0Topics;
export const questionTypes = g10PhysicsModule0QuestionTypes;
export const questions = [
  ...g10PhysicsModule0Questions,
  ...g10PhysicsModule0ExpansionQuestions,
  ...g10PhysicsModule0Expansion2Questions,
  ...g10PhysicsModule0GapFillQuestions,
  ...g10PhysicsModule0RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule0Solutions,
  ...g10PhysicsModule0ExpansionSolutions,
  ...g10PhysicsModule0Expansion2Solutions,
  ...g10PhysicsModule0GapFillSolutions,
  ...g10PhysicsModule0RemediationSolutions
];
