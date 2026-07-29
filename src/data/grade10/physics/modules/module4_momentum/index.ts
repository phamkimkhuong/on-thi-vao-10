import { g10PhysicsModule4Topics } from './topics';
import { g10PhysicsModule4QuestionTypes } from './questionTypes';
import { g10PhysicsModule4Questions } from './questions';
import { g10PhysicsModule4Solutions } from './solutions';
import { g10PhysicsModule4ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule4ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule4Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule4Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule4GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule4GapFillSolutions } from './practiceGapFill/solutions';
import {
  g10PhysicsModule4RemediationQuestions,
  g10PhysicsModule4RemediationSolutions
} from './practiceRemediation';

export const topics = g10PhysicsModule4Topics;
export const questionTypes = g10PhysicsModule4QuestionTypes;
export const questions = [
  ...g10PhysicsModule4Questions,
  ...g10PhysicsModule4ExpansionQuestions,
  ...g10PhysicsModule4Expansion2Questions,
  ...g10PhysicsModule4GapFillQuestions,
  ...g10PhysicsModule4RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule4Solutions,
  ...g10PhysicsModule4ExpansionSolutions,
  ...g10PhysicsModule4Expansion2Solutions,
  ...g10PhysicsModule4GapFillSolutions,
  ...g10PhysicsModule4RemediationSolutions
];
