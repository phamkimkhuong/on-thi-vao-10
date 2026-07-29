import { g10PhysicsModule6Topics } from './topics';
import { g10PhysicsModule6QuestionTypes } from './questionTypes';
import { g10PhysicsModule6Questions } from './questions';
import { g10PhysicsModule6Solutions } from './solutions';
import { g10PhysicsModule6ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule6ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule6Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule6Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule6GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule6GapFillSolutions } from './practiceGapFill/solutions';
import {
  g10PhysicsModule6RemediationQuestions,
  g10PhysicsModule6RemediationSolutions
} from './practiceRemediation';

export const topics = g10PhysicsModule6Topics;
export const questionTypes = g10PhysicsModule6QuestionTypes;
export const questions = [
  ...g10PhysicsModule6Questions,
  ...g10PhysicsModule6ExpansionQuestions,
  ...g10PhysicsModule6Expansion2Questions,
  ...g10PhysicsModule6GapFillQuestions,
  ...g10PhysicsModule6RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule6Solutions,
  ...g10PhysicsModule6ExpansionSolutions,
  ...g10PhysicsModule6Expansion2Solutions,
  ...g10PhysicsModule6GapFillSolutions,
  ...g10PhysicsModule6RemediationSolutions
];
