import { defineCourseModule } from '@/data/schema';
import { g11MathModule4Manifest } from './manifest';
import { g11MathModule4Topics } from './topics';
import { g11MathModule4Lessons } from './lessons';
import { math11Module4Theory } from './theory';
import { g11MathModule4Outcomes, g11MathModule4Misconceptions } from './learningPath';
import { g11MathModule4QuestionTypes } from './questionTypes';
import { g11MathModule4Questions } from './questions';
import { g11MathModule4Solutions } from './solutions';
import {
  g11MathModule4ExpansionQuestions,
  g11MathModule4ExpansionSolutions
} from './questionsExpansion';
import { g11MathModule4PracticeBlueprints } from './practiceBlueprint';

export const g11MathModule4 = defineCourseModule({
  manifest: g11MathModule4Manifest,
  topics: g11MathModule4Topics,
  lessons: g11MathModule4Lessons,
  theory: math11Module4Theory,
  outcomes: g11MathModule4Outcomes,
  misconceptions: g11MathModule4Misconceptions,
  questionTypes: g11MathModule4QuestionTypes,
  practiceQuestions: [...g11MathModule4Questions, ...g11MathModule4ExpansionQuestions],
  practiceSolutions: [...g11MathModule4Solutions, ...g11MathModule4ExpansionSolutions],
  practiceBlueprints: g11MathModule4PracticeBlueprints
});
