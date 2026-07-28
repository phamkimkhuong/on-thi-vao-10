import { defineCourseModule } from '@/data/schema';
import { g11PhysicsModule4Lessons } from './lessons';
import { g11PhysicsModule4Outcomes, g11PhysicsModule4Misconceptions } from './learningPath';
import { g11PhysicsModule4Manifest } from './manifest';
import { g11PhysicsModule4PracticeBlueprints } from './practiceBlueprint';
import { g11PhysicsModule4Questions } from './questions';
import { g11PhysicsModule4ExpansionQuestions, g11PhysicsModule4ExpansionSolutions } from './questionsExpansion';
import { g11PhysicsModule4QuestionTypes } from './questionTypes';
import { g11PhysicsModule4Solutions } from './solutions';
import { phy11Module4Theory } from './theory';
import { g11PhysicsModule4Topics } from './topics';

export const g11PhysicsModule4 = defineCourseModule({
  manifest: g11PhysicsModule4Manifest,
  topics: g11PhysicsModule4Topics,
  lessons: g11PhysicsModule4Lessons,
  theory: phy11Module4Theory,
  outcomes: g11PhysicsModule4Outcomes,
  misconceptions: g11PhysicsModule4Misconceptions,
  questionTypes: g11PhysicsModule4QuestionTypes,
  practiceQuestions: [...g11PhysicsModule4Questions, ...g11PhysicsModule4ExpansionQuestions],
  practiceSolutions: [...g11PhysicsModule4Solutions, ...g11PhysicsModule4ExpansionSolutions],
  practiceBlueprints: g11PhysicsModule4PracticeBlueprints
});
