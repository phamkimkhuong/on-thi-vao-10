import { g10PhysicsModule2Topics } from './topics';
import { g10PhysicsModule2QuestionTypes } from './questionTypes';
import { g10PhysicsModule2Questions } from './questions';
import { g10PhysicsModule2Solutions } from './solutions';
import { g10PhysicsModule2ExpansionQuestions } from './practiceExpansion/questions';
import { g10PhysicsModule2ExpansionSolutions } from './practiceExpansion/solutions';
import { g10PhysicsModule2Expansion2Questions } from './practiceExpansion2/questions';
import { g10PhysicsModule2Expansion2Solutions } from './practiceExpansion2/solutions';
import { g10PhysicsModule2GapFillQuestions } from './practiceGapFill/questions';
import { g10PhysicsModule2GapFillSolutions } from './practiceGapFill/solutions';
import { g10PhysicsModule2RemediationQuestions, g10PhysicsModule2RemediationSolutions } from './practiceRemediation';

export const topics = g10PhysicsModule2Topics;
export const questionTypes = g10PhysicsModule2QuestionTypes;
export const questions = [
  ...g10PhysicsModule2Questions,
  ...g10PhysicsModule2ExpansionQuestions,
  ...g10PhysicsModule2Expansion2Questions,
  ...g10PhysicsModule2GapFillQuestions,
  ...g10PhysicsModule2RemediationQuestions
];
export const solutions = [
  ...g10PhysicsModule2Solutions,
  ...g10PhysicsModule2ExpansionSolutions,
  ...g10PhysicsModule2Expansion2Solutions,
  ...g10PhysicsModule2GapFillSolutions,
  ...g10PhysicsModule2RemediationSolutions
];
