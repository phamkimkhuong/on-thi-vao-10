import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule7Manifest } from './manifest';
import { g11EnglishModule7Topics } from './topics';
import { g11EnglishModule7Lessons } from './lessons';
import { g11EnglishModule7Theory } from './theory';
import { g11EnglishModule7Outcomes, g11EnglishModule7Misconceptions } from './learningPath';
import { g11EnglishModule7QuestionTypes } from './questionTypes';
import { g11EnglishModule7Questions } from './questions';
import { g11EnglishModule7Solutions } from './solutions';
import { g11EnglishModule7PracticeBlueprints } from './practiceBlueprint';
export const g11EnglishModule7 = defineCourseModule({
  manifest: g11EnglishModule7Manifest, topics: g11EnglishModule7Topics,
  lessons: g11EnglishModule7Lessons, theory: g11EnglishModule7Theory,
  outcomes: g11EnglishModule7Outcomes, misconceptions: g11EnglishModule7Misconceptions,
  questionTypes: g11EnglishModule7QuestionTypes, practiceQuestions: g11EnglishModule7Questions,
  practiceSolutions: g11EnglishModule7Solutions, practiceBlueprints: g11EnglishModule7PracticeBlueprints
});
