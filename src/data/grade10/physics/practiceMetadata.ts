import type { QuestionPracticeMetadata } from '@/types';
import { g10PhysicsModule0PracticeMetadata } from './modules/module0_intro/practiceMetadata';
import { g10PhysicsModule1PracticeMetadata } from './modules/module1_kinematics/practiceMetadata';
import { g10PhysicsModule2PracticeMetadata } from './modules/module2_dynamics/practiceMetadata';
import { g10PhysicsModule3PracticeMetadata } from './modules/module3_energy/practiceMetadata';
import { g10PhysicsModule4PracticeMetadata } from './modules/module4_momentum/practiceMetadata';
import { g10PhysicsModule5PracticeMetadata } from './modules/module5_circular_motion/practiceMetadata';
import { g10PhysicsModule6PracticeMetadata } from './modules/module6_solid_deformation/practiceMetadata';

/** Aggregator migration: chỉ import và gộp metadata tường minh theo module. */
export const g10PhysicsPracticeMetadata: QuestionPracticeMetadata[] = [
  ...g10PhysicsModule0PracticeMetadata,
  ...g10PhysicsModule1PracticeMetadata,
  ...g10PhysicsModule2PracticeMetadata,
  ...g10PhysicsModule3PracticeMetadata,
  ...g10PhysicsModule4PracticeMetadata,
  ...g10PhysicsModule5PracticeMetadata,
  ...g10PhysicsModule6PracticeMetadata
];
