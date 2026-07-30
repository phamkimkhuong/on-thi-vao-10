import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule10Manifest } from './manifest';
import { g11EnglishModule10Topics } from './topics';
import { g11EnglishModule10Lessons } from './lessons';
import { g11EnglishModule10Theory } from './theory';
import { g11EnglishModule10Outcomes, g11EnglishModule10Misconceptions } from './learningPath';
import { g11EnglishModule10QuestionTypes } from './questionTypes';
import { g11EnglishModule10Questions } from './questions';
import { g11EnglishModule10Solutions } from './solutions';
import { g11EnglishModule10PracticeBlueprints } from './practiceBlueprint';
export const g11EnglishModule10 = defineCourseModule({
  manifest: g11EnglishModule10Manifest, topics: g11EnglishModule10Topics, lessons: g11EnglishModule10Lessons,
  theory: g11EnglishModule10Theory, outcomes: g11EnglishModule10Outcomes, misconceptions: g11EnglishModule10Misconceptions,
  questionTypes: g11EnglishModule10QuestionTypes, practiceQuestions: g11EnglishModule10Questions,
  practiceSolutions: g11EnglishModule10Solutions, practiceBlueprints: g11EnglishModule10PracticeBlueprints
});
