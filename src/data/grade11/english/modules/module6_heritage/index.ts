import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule6Manifest } from './manifest';
import { g11EnglishModule6Topics } from './topics';
import { g11EnglishModule6Lessons } from './lessons';
import { g11EnglishModule6Theory } from './theory';
import { g11EnglishModule6Outcomes, g11EnglishModule6Misconceptions } from './learningPath';
import { g11EnglishModule6QuestionTypes } from './questionTypes';
import { g11EnglishModule6Questions } from './questions';
import { g11EnglishModule6Solutions } from './solutions';
import { g11EnglishModule6PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule6 = defineCourseModule({
  manifest: g11EnglishModule6Manifest, topics: g11EnglishModule6Topics,
  lessons: g11EnglishModule6Lessons, theory: g11EnglishModule6Theory,
  outcomes: g11EnglishModule6Outcomes, misconceptions: g11EnglishModule6Misconceptions,
  questionTypes: g11EnglishModule6QuestionTypes, practiceQuestions: g11EnglishModule6Questions,
  practiceSolutions: g11EnglishModule6Solutions, practiceBlueprints: g11EnglishModule6PracticeBlueprints
});
