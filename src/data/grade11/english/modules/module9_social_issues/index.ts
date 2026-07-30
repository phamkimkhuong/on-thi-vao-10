import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule9Manifest } from './manifest';
import { g11EnglishModule9Topics } from './topics';
import { g11EnglishModule9Lessons } from './lessons';
import { g11EnglishModule9Theory } from './theory';
import { g11EnglishModule9Outcomes, g11EnglishModule9Misconceptions } from './learningPath';
import { g11EnglishModule9QuestionTypes } from './questionTypes';
import { g11EnglishModule9Questions } from './questions';
import { g11EnglishModule9Solutions } from './solutions';
import { g11EnglishModule9PracticeBlueprints } from './practiceBlueprint';
export const g11EnglishModule9 = defineCourseModule({
  manifest: g11EnglishModule9Manifest, topics: g11EnglishModule9Topics, lessons: g11EnglishModule9Lessons,
  theory: g11EnglishModule9Theory, outcomes: g11EnglishModule9Outcomes, misconceptions: g11EnglishModule9Misconceptions,
  questionTypes: g11EnglishModule9QuestionTypes, practiceQuestions: g11EnglishModule9Questions,
  practiceSolutions: g11EnglishModule9Solutions, practiceBlueprints: g11EnglishModule9PracticeBlueprints
});
