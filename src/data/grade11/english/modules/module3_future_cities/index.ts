import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule3Manifest } from './manifest';
import { g11EnglishModule3Topics } from './topics';
import { g11EnglishModule3Lessons } from './lessons';
import { g11EnglishModule3Theory } from './theory';
import { g11EnglishModule3Outcomes, g11EnglishModule3Misconceptions } from './learningPath';
import { g11EnglishModule3QuestionTypes } from './questionTypes';
import { g11EnglishModule3Questions } from './questions';
import { g11EnglishModule3Solutions } from './solutions';
import { g11EnglishModule3PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule3 = defineCourseModule({
  manifest: g11EnglishModule3Manifest,
  topics: g11EnglishModule3Topics,
  lessons: g11EnglishModule3Lessons,
  theory: g11EnglishModule3Theory,
  outcomes: g11EnglishModule3Outcomes,
  misconceptions: g11EnglishModule3Misconceptions,
  questionTypes: g11EnglishModule3QuestionTypes,
  practiceQuestions: g11EnglishModule3Questions,
  practiceSolutions: g11EnglishModule3Solutions,
  practiceBlueprints: g11EnglishModule3PracticeBlueprints
});
