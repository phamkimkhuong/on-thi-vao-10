import { defineCourseModule } from '@/data/schema';
import { g11MathModule9Lessons } from './lessons';
import {
  g11MathModule9Misconceptions,
  g11MathModule9Outcomes
} from './learningPath';
import { g11MathModule9Manifest } from './manifest';
import { g11MathModule9PracticeBlueprints } from './practiceBlueprint';
import { g11MathModule9Questions } from './questions';
import {
  g11MathModule9ExpansionQuestions,
  g11MathModule9ExpansionSolutions
} from './questionsExpansion';
import { g11MathModule9QuestionTypes } from './questionTypes';
import { g11MathModule9Solutions } from './solutions';
import { math11Module9Theory } from './theory';
import { g11MathModule9Topics } from './topics';

export const g11MathModule9 = defineCourseModule({
  manifest: g11MathModule9Manifest,
  topics: g11MathModule9Topics,
  lessons: g11MathModule9Lessons,
  theory: math11Module9Theory,
  outcomes: g11MathModule9Outcomes,
  misconceptions: g11MathModule9Misconceptions,
  questionTypes: g11MathModule9QuestionTypes,
  practiceQuestions: [...g11MathModule9Questions, ...g11MathModule9ExpansionQuestions],
  practiceSolutions: [...g11MathModule9Solutions, ...g11MathModule9ExpansionSolutions],
  practiceBlueprints: g11MathModule9PracticeBlueprints
});
