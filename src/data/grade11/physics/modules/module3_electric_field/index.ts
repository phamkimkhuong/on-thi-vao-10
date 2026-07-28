import { defineCourseModule } from '@/data/schema';
import { g11PhysicsModule3Lessons } from './lessons';
import { g11PhysicsModule3Outcomes, g11PhysicsModule3Misconceptions } from './learningPath';
import { g11PhysicsModule3Manifest } from './manifest';
import { g11PhysicsModule3PracticeBlueprints } from './practiceBlueprint';
import { g11PhysicsModule3Questions } from './questions';
import { g11PhysicsModule3ExpansionQuestions, g11PhysicsModule3ExpansionSolutions } from './questionsExpansion';
import { g11PhysicsModule3QuestionTypes } from './questionTypes';
import { g11PhysicsModule3Solutions } from './solutions';
import { phy11Module3Theory } from './theory';
import { g11PhysicsModule3Topics } from './topics';

export const g11PhysicsModule3 = defineCourseModule({
  manifest: g11PhysicsModule3Manifest,
  topics: g11PhysicsModule3Topics,
  lessons: g11PhysicsModule3Lessons,
  theory: phy11Module3Theory,
  outcomes: g11PhysicsModule3Outcomes,
  misconceptions: g11PhysicsModule3Misconceptions,
  questionTypes: g11PhysicsModule3QuestionTypes,
  practiceQuestions: [...g11PhysicsModule3Questions, ...g11PhysicsModule3ExpansionQuestions],
  practiceSolutions: [...g11PhysicsModule3Solutions, ...g11PhysicsModule3ExpansionSolutions],
  practiceBlueprints: g11PhysicsModule3PracticeBlueprints
});
