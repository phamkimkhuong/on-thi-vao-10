import { defineCourseModule } from '@/data/schema';
import { g11EnglishModule8Manifest } from './manifest';
import { g11EnglishModule8Topics } from './topics';
import { g11EnglishModule8Lessons } from './lessons';
import { g11EnglishModule8Theory } from './theory';
import { g11EnglishModule8Outcomes, g11EnglishModule8Misconceptions } from './learningPath';
import { g11EnglishModule8QuestionTypes } from './questionTypes';
import { g11EnglishModule8Questions } from './questions';
import { g11EnglishModule8Solutions } from './solutions';
import { g11EnglishModule8PracticeBlueprints } from './practiceBlueprint';
export const g11EnglishModule8 = defineCourseModule({
  manifest: g11EnglishModule8Manifest, topics: g11EnglishModule8Topics,
  lessons: g11EnglishModule8Lessons, theory: g11EnglishModule8Theory,
  outcomes: g11EnglishModule8Outcomes, misconceptions: g11EnglishModule8Misconceptions,
  questionTypes: g11EnglishModule8QuestionTypes, practiceQuestions: g11EnglishModule8Questions,
  practiceSolutions: g11EnglishModule8Solutions, practiceBlueprints: g11EnglishModule8PracticeBlueprints
});
