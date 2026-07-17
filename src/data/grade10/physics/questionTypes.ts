import type { QuestionType } from '@/types';
import { g10PhysicsModule0QuestionTypes } from './modules/module0_intro/questionTypes';
import { g10PhysicsModule1QuestionTypes } from './modules/module1_kinematics/questionTypes';
import { g10PhysicsModule2QuestionTypes } from './modules/module2_dynamics/questionTypes';
import { g10PhysicsModule3QuestionTypes } from './modules/module3_energy/questionTypes';
import { g10PhysicsModule4QuestionTypes } from './modules/module4_momentum/questionTypes';
import { g10PhysicsModule5QuestionTypes } from './modules/module5_circular_motion/questionTypes';
import { g10PhysicsModule6QuestionTypes } from './modules/module6_solid_deformation/questionTypes';

/** Aggregator: không đặt dữ liệu dạng bài thô tại file gốc. */
export const g10PhysicsQuestionTypes: QuestionType[] = [
  ...g10PhysicsModule0QuestionTypes,
  ...g10PhysicsModule1QuestionTypes,
  ...g10PhysicsModule2QuestionTypes,
  ...g10PhysicsModule3QuestionTypes,
  ...g10PhysicsModule4QuestionTypes,
  ...g10PhysicsModule5QuestionTypes,
  ...g10PhysicsModule6QuestionTypes
];
