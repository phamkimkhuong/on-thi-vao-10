import type { QuestionTypePracticeBlueprint } from '@/types';
import { g10PhysicsModule0PracticeBlueprints } from './modules/module0_intro/practiceBlueprint';
import { g10PhysicsModule1PracticeBlueprints } from './modules/module1_kinematics/practiceBlueprint';
import { g10PhysicsModule2PracticeBlueprints } from './modules/module2_dynamics/practiceBlueprint';
import { g10PhysicsModule3PracticeBlueprints } from './modules/module3_energy/practiceBlueprint';
import { g10PhysicsModule4PracticeBlueprints } from './modules/module4_momentum/practiceBlueprint';
import { g10PhysicsModule5PracticeBlueprints } from './modules/module5_circular_motion/practiceBlueprint';
import { g10PhysicsModule6PracticeBlueprints } from './modules/module6_solid_deformation/practiceBlueprint';

export const g10PhysicsPracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  ...g10PhysicsModule0PracticeBlueprints,
  ...g10PhysicsModule1PracticeBlueprints,
  ...g10PhysicsModule2PracticeBlueprints,
  ...g10PhysicsModule3PracticeBlueprints,
  ...g10PhysicsModule4PracticeBlueprints,
  ...g10PhysicsModule5PracticeBlueprints,
  ...g10PhysicsModule6PracticeBlueprints
];
