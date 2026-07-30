import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule1Manifest } from './manifest';
import { g11EnglishModule1Topics } from './topics';
import { g11EnglishModule1Lessons } from './lessons';
import { g11EnglishModule1Theory } from './theory';
import { g11EnglishModule1Outcomes, g11EnglishModule1Misconceptions } from './learningPath';
import { g11EnglishModule1QuestionTypes } from './questionTypes';
import { g11EnglishModule1Questions } from './questions';
import { g11EnglishModule1Solutions } from './solutions';
import { g11EnglishModule1PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule1 = defineCourseModule({
  manifest: g11EnglishModule1Manifest,
  topics: g11EnglishModule1Topics,
  lessons: g11EnglishModule1Lessons,
  theory: g11EnglishModule1Theory,
  outcomes: g11EnglishModule1Outcomes,
  misconceptions: g11EnglishModule1Misconceptions,
  questionTypes: g11EnglishModule1QuestionTypes,
  practiceQuestions: g11EnglishModule1Questions,
  practiceSolutions: g11EnglishModule1Solutions,
  practiceBlueprints: g11EnglishModule1PracticeBlueprints
});
