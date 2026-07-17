import type { LearningMisconception, LearningOutcome } from '@/types';
import { g10PhysicsModule0Outcomes, g10PhysicsModule0Misconceptions } from './modules/module0_intro/learningPath';
import { g10PhysicsModule1Outcomes, g10PhysicsModule1Misconceptions } from './modules/module1_kinematics/learningPath';
import { g10PhysicsModule2Outcomes, g10PhysicsModule2Misconceptions } from './modules/module2_dynamics/learningPath';
import { g10PhysicsModule3Outcomes, g10PhysicsModule3Misconceptions } from './modules/module3_energy/learningPath';
import { g10PhysicsModule4Outcomes, g10PhysicsModule4Misconceptions } from './modules/module4_momentum/learningPath';
import { g10PhysicsModule5Outcomes, g10PhysicsModule5Misconceptions } from './modules/module5_circular_motion/learningPath';
import { g10PhysicsModule6Outcomes, g10PhysicsModule6Misconceptions } from './modules/module6_solid_deformation/learningPath';

export const g10PhysicsOutcomes: LearningOutcome[] = [
  ...g10PhysicsModule0Outcomes,
  ...g10PhysicsModule1Outcomes,
  ...g10PhysicsModule2Outcomes,
  ...g10PhysicsModule3Outcomes,
  ...g10PhysicsModule4Outcomes,
  ...g10PhysicsModule5Outcomes,
  ...g10PhysicsModule6Outcomes
];

export const g10PhysicsMisconceptions: LearningMisconception[] = [
  ...g10PhysicsModule0Misconceptions,
  ...g10PhysicsModule1Misconceptions,
  ...g10PhysicsModule2Misconceptions,
  ...g10PhysicsModule3Misconceptions,
  ...g10PhysicsModule4Misconceptions,
  ...g10PhysicsModule5Misconceptions,
  ...g10PhysicsModule6Misconceptions
];
