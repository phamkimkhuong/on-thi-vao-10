import { g10PhysicsModule5Topics } from './topics';
import { g10PhysicsModule5QuestionTypes } from './questionTypes';
import { g10PhysicsModule5Questions } from './questions';
import { g10PhysicsModule5Solutions } from './solutions';
import { g10PhysicsModule5ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule5ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule5Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule5Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule5GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule5GapFillSolutions } from './practiceGapFill/solutions';
import {
  g10PhysicsModule5RemediationQuestions,
  g10PhysicsModule5RemediationSolutions
} from './practiceRemediation';

export const topics = g10PhysicsModule5Topics;
export const questionTypes = g10PhysicsModule5QuestionTypes;
export const questions = [
  ...g10PhysicsModule5Questions,
  ...g10PhysicsModule5ExpansionQuestions,
  ...g10PhysicsModule5Expansion2Questions,
  ...g10PhysicsModule5GapFillQuestions,
  ...g10PhysicsModule5RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule5Solutions,
  ...g10PhysicsModule5ExpansionSolutions,
  ...g10PhysicsModule5Expansion2Solutions,
  ...g10PhysicsModule5GapFillSolutions,
  ...g10PhysicsModule5RemediationSolutions
];
