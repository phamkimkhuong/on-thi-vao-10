import { defineCourseModule } from '@/data/schema';
import { g11BiologyModule4Manifest } from './manifest';
import { g11BiologyModule4Topics } from './topics';
import { g11BiologyModule4Lessons } from './lessons';
import { g11BiologyModule4Theory } from './theory';
import { g11BiologyModule4Outcomes, g11BiologyModule4Misconceptions } from './learningPath';
import { g11BiologyModule4QuestionTypes } from './questionTypes';
import { g11BiologyModule4Questions } from './questions';
import { g11BiologyModule4Solutions } from './solutions';
import { g11BiologyModule4PracticeBlueprints } from './practiceBlueprint';

export const g11BiologyModule4 = defineCourseModule({
  manifest: g11BiologyModule4Manifest,
  topics: g11BiologyModule4Topics,
  lessons: g11BiologyModule4Lessons,
  theory: g11BiologyModule4Theory,
  outcomes: g11BiologyModule4Outcomes,
  misconceptions: g11BiologyModule4Misconceptions,
  questionTypes: g11BiologyModule4QuestionTypes,
  practiceQuestions: g11BiologyModule4Questions,
  practiceSolutions: g11BiologyModule4Solutions,
  practiceBlueprints: g11BiologyModule4PracticeBlueprints
});
