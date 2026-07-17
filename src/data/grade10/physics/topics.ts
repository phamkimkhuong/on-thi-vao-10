import type { Topic } from '@/types';
import { g10PhysicsModule0Topics } from './modules/module0_intro/topics';
import { g10PhysicsModule1Topics } from './modules/module1_kinematics/topics';
import { g10PhysicsModule2Topics } from './modules/module2_dynamics/topics';
import { g10PhysicsModule3Topics } from './modules/module3_energy/topics';
import { g10PhysicsModule4Topics } from './modules/module4_momentum/topics';
import { g10PhysicsModule5Topics } from './modules/module5_circular_motion/topics';
import { g10PhysicsModule6Topics } from './modules/module6_solid_deformation/topics';

/** Aggregator: không đặt dữ liệu topic thô tại file gốc. */
export const g10PhysicsTopics: Topic[] = [
  ...g10PhysicsModule0Topics,
  ...g10PhysicsModule1Topics,
  ...g10PhysicsModule2Topics,
  ...g10PhysicsModule3Topics,
  ...g10PhysicsModule4Topics,
  ...g10PhysicsModule5Topics,
  ...g10PhysicsModule6Topics
];
