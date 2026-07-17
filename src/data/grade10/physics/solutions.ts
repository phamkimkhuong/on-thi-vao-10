import type { Solution } from '@/types';
import { g10PhysicsModule0Solutions } from './modules/module0_intro/solutions';
import { g10PhysicsModule0ExpansionSolutions } from './modules/module0_intro/practiceExpansion/solutions';
import { g10PhysicsModule1Solutions } from './modules/module1_kinematics/solutions';
import { g10PhysicsModule1ExpansionSolutions } from './modules/module1_kinematics/practiceExpansion/solutions';
import { g10PhysicsModule2Solutions } from './modules/module2_dynamics/solutions';
import { g10PhysicsModule2ExpansionSolutions } from './modules/module2_dynamics/practiceExpansion/solutions';
import { g10PhysicsModule3Solutions } from './modules/module3_energy/solutions';
import { g10PhysicsModule3ExpansionSolutions } from './modules/module3_energy/practiceExpansion/solutions';
import { g10PhysicsModule4Solutions } from './modules/module4_momentum/solutions';
import { g10PhysicsModule4ExpansionSolutions } from './modules/module4_momentum/practiceExpansion/solutions';
import { g10PhysicsModule5Solutions } from './modules/module5_circular_motion/solutions';
import { g10PhysicsModule5ExpansionSolutions } from './modules/module5_circular_motion/practiceExpansion/solutions';
import { g10PhysicsModule6Solutions } from './modules/module6_solid_deformation/solutions';
import { g10PhysicsModule6ExpansionSolutions } from './modules/module6_solid_deformation/practiceExpansion/solutions';

/** Aggregator: không đặt dữ liệu lời giải thô tại file gốc. */
export const g10PhysicsSolutions: Solution[] = [
  ...g10PhysicsModule0Solutions,
  ...g10PhysicsModule0ExpansionSolutions,
  ...g10PhysicsModule1Solutions,
  ...g10PhysicsModule1ExpansionSolutions,
  ...g10PhysicsModule2Solutions,
  ...g10PhysicsModule2ExpansionSolutions,
  ...g10PhysicsModule3Solutions,
  ...g10PhysicsModule3ExpansionSolutions,
  ...g10PhysicsModule4Solutions,
  ...g10PhysicsModule4ExpansionSolutions,
  ...g10PhysicsModule5Solutions,
  ...g10PhysicsModule5ExpansionSolutions,
  ...g10PhysicsModule6Solutions,
  ...g10PhysicsModule6ExpansionSolutions
];
