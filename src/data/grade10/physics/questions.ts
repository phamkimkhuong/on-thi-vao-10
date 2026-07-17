import type { Question } from '@/types';
import { g10PhysicsModule0Questions } from './modules/module0_intro/questions';
import { g10PhysicsModule0ExpansionQuestions } from './modules/module0_intro/practiceExpansion/questions';
import { g10PhysicsModule1Questions } from './modules/module1_kinematics/questions';
import { g10PhysicsModule1ExpansionQuestions } from './modules/module1_kinematics/practiceExpansion/questions';
import { g10PhysicsModule2Questions } from './modules/module2_dynamics/questions';
import { g10PhysicsModule2ExpansionQuestions } from './modules/module2_dynamics/practiceExpansion/questions';
import { g10PhysicsModule3Questions } from './modules/module3_energy/questions';
import { g10PhysicsModule3ExpansionQuestions } from './modules/module3_energy/practiceExpansion/questions';
import { g10PhysicsModule4Questions } from './modules/module4_momentum/questions';
import { g10PhysicsModule4ExpansionQuestions } from './modules/module4_momentum/practiceExpansion/questions';
import { g10PhysicsModule5Questions } from './modules/module5_circular_motion/questions';
import { g10PhysicsModule5ExpansionQuestions } from './modules/module5_circular_motion/practiceExpansion/questions';
import { g10PhysicsModule6Questions } from './modules/module6_solid_deformation/questions';
import { g10PhysicsModule6ExpansionQuestions } from './modules/module6_solid_deformation/practiceExpansion/questions';

/** Aggregator: không đặt dữ liệu câu hỏi thô tại file gốc. */
export const g10PhysicsQuestions: Question[] = [
  ...g10PhysicsModule0Questions,
  ...g10PhysicsModule0ExpansionQuestions,
  ...g10PhysicsModule1Questions,
  ...g10PhysicsModule1ExpansionQuestions,
  ...g10PhysicsModule2Questions,
  ...g10PhysicsModule2ExpansionQuestions,
  ...g10PhysicsModule3Questions,
  ...g10PhysicsModule3ExpansionQuestions,
  ...g10PhysicsModule4Questions,
  ...g10PhysicsModule4ExpansionQuestions,
  ...g10PhysicsModule5Questions,
  ...g10PhysicsModule5ExpansionQuestions,
  ...g10PhysicsModule6Questions,
  ...g10PhysicsModule6ExpansionQuestions
];
