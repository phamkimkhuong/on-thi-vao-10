import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule4Manifest } from './manifest';
import { g11EnglishModule4Topics } from './topics';
import { g11EnglishModule4Lessons } from './lessons';
import { g11EnglishModule4Theory } from './theory';
import { g11EnglishModule4Outcomes, g11EnglishModule4Misconceptions } from './learningPath';
import { g11EnglishModule4QuestionTypes } from './questionTypes';
import { g11EnglishModule4Questions } from './questions';
import { g11EnglishModule4Solutions } from './solutions';
import { g11EnglishModule4PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule4 = defineCourseModule({
  manifest: g11EnglishModule4Manifest,
  topics: g11EnglishModule4Topics,
  lessons: g11EnglishModule4Lessons,
  theory: g11EnglishModule4Theory,
  outcomes: g11EnglishModule4Outcomes,
  misconceptions: g11EnglishModule4Misconceptions,
  questionTypes: g11EnglishModule4QuestionTypes,
  practiceQuestions: g11EnglishModule4Questions,
  practiceSolutions: g11EnglishModule4Solutions,
  practiceBlueprints: g11EnglishModule4PracticeBlueprints
});
