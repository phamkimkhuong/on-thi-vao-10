import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule2Manifest } from './manifest';
import { g11EnglishModule2Topics } from './topics';
import { g11EnglishModule2Lessons } from './lessons';
import { g11EnglishModule2Theory } from './theory';
import { g11EnglishModule2Outcomes, g11EnglishModule2Misconceptions } from './learningPath';
import { g11EnglishModule2QuestionTypes } from './questionTypes';
import { g11EnglishModule2Questions } from './questions';
import { g11EnglishModule2Solutions } from './solutions';
import { g11EnglishModule2PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule2 = defineCourseModule({
  manifest: g11EnglishModule2Manifest,
  topics: g11EnglishModule2Topics,
  lessons: g11EnglishModule2Lessons,
  theory: g11EnglishModule2Theory,
  outcomes: g11EnglishModule2Outcomes,
  misconceptions: g11EnglishModule2Misconceptions,
  questionTypes: g11EnglishModule2QuestionTypes,
  practiceQuestions: g11EnglishModule2Questions,
  practiceSolutions: g11EnglishModule2Solutions,
  practiceBlueprints: g11EnglishModule2PracticeBlueprints
});
