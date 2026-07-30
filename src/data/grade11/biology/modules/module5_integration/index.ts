import { defineCourseModule } from '@/data/schema';
import { g11BiologyModule5Manifest } from './manifest';
import { g11BiologyModule5Topics } from './topics';
import { g11BiologyModule5Lessons } from './lessons';
import { g11BiologyModule5Theory } from './theory';
import { g11BiologyModule5Outcomes, g11BiologyModule5Misconceptions } from './learningPath';
import { g11BiologyModule5QuestionTypes } from './questionTypes';
import { g11BiologyModule5Questions } from './questions';
import { g11BiologyModule5Solutions } from './solutions';
import { g11BiologyModule5PracticeBlueprints } from './practiceBlueprint';

export const g11BiologyModule5 = defineCourseModule({
  manifest: g11BiologyModule5Manifest,
  topics: g11BiologyModule5Topics,
  lessons: g11BiologyModule5Lessons,
  theory: g11BiologyModule5Theory,
  outcomes: g11BiologyModule5Outcomes,
  misconceptions: g11BiologyModule5Misconceptions,
  questionTypes: g11BiologyModule5QuestionTypes,
  practiceQuestions: g11BiologyModule5Questions,
  practiceSolutions: g11BiologyModule5Solutions,
  practiceBlueprints: g11BiologyModule5PracticeBlueprints
});
