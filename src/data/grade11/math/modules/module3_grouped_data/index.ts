import { defineCourseModule } from '@/data/schema';
import { g11MathModule3Manifest } from './manifest';
import { g11MathModule3Lessons } from './lessons';
import { g11MathModule3Topics } from './topics';
import { g11MathModule3QuestionTypes } from './questionTypes';
import { g11MathModule3Questions } from './questions';
import { g11MathModule3Solutions } from './solutions';
import { g11MathModule3Outcomes, g11MathModule3Misconceptions } from './learningPath';
import { math11Module3Theory } from './theory';
import { g11MathModule3PracticeBlueprints } from './practiceBlueprint';

export const g11MathModule3 = defineCourseModule({
  manifest: g11MathModule3Manifest,
  topics: g11MathModule3Topics,
  lessons: g11MathModule3Lessons,
  theory: math11Module3Theory,
  outcomes: g11MathModule3Outcomes,
  misconceptions: g11MathModule3Misconceptions,
  questionTypes: g11MathModule3QuestionTypes,
  practiceQuestions: g11MathModule3Questions,
  practiceSolutions: g11MathModule3Solutions,
  practiceBlueprints: g11MathModule3PracticeBlueprints
});
