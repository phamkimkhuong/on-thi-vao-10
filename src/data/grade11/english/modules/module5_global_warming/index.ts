import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule5Manifest } from './manifest';
import { g11EnglishModule5Topics } from './topics';
import { g11EnglishModule5Lessons } from './lessons';
import { g11EnglishModule5Theory } from './theory';
import { g11EnglishModule5Outcomes, g11EnglishModule5Misconceptions } from './learningPath';
import { g11EnglishModule5QuestionTypes } from './questionTypes';
import { g11EnglishModule5Questions } from './questions';
import { g11EnglishModule5Solutions } from './solutions';
import { g11EnglishModule5PracticeBlueprints } from './practiceBlueprint';

export const g11EnglishModule5 = defineCourseModule({
  manifest: g11EnglishModule5Manifest, topics: g11EnglishModule5Topics,
  lessons: g11EnglishModule5Lessons, theory: g11EnglishModule5Theory,
  outcomes: g11EnglishModule5Outcomes, misconceptions: g11EnglishModule5Misconceptions,
  questionTypes: g11EnglishModule5QuestionTypes, practiceQuestions: g11EnglishModule5Questions,
  practiceSolutions: g11EnglishModule5Solutions, practiceBlueprints: g11EnglishModule5PracticeBlueprints
});
