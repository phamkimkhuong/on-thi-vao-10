import { defineCourseModule } from '@/data/schema';
import { g11PhysicsModule2Lessons } from './lessons';
import { g11PhysicsModule2Outcomes, g11PhysicsModule2Misconceptions } from './learningPath';
import { g11PhysicsModule2Manifest } from './manifest';
import { g11PhysicsModule2PracticeBlueprints } from './practiceBlueprint';
import { g11PhysicsModule2Questions } from './questions';
import {
  g11PhysicsModule2ExpansionQuestions,
  g11PhysicsModule2ExpansionSolutions
} from './questionsExpansion';
import { g11PhysicsModule2QuestionTypes } from './questionTypes';
import { g11PhysicsModule2Solutions } from './solutions';
import { phy11Module2Theory } from './theory';
import { g11PhysicsModule2Topics } from './topics';

export const g11PhysicsModule2 = defineCourseModule({
  manifest: g11PhysicsModule2Manifest,
  topics: g11PhysicsModule2Topics,
  lessons: g11PhysicsModule2Lessons,
  theory: phy11Module2Theory,
  outcomes: g11PhysicsModule2Outcomes,
  misconceptions: g11PhysicsModule2Misconceptions,
  questionTypes: g11PhysicsModule2QuestionTypes,
  practiceQuestions: [
    ...g11PhysicsModule2Questions,
    ...g11PhysicsModule2ExpansionQuestions
  ],
  practiceSolutions: [
    ...g11PhysicsModule2Solutions,
    ...g11PhysicsModule2ExpansionSolutions
  ],
  practiceBlueprints: g11PhysicsModule2PracticeBlueprints
});
