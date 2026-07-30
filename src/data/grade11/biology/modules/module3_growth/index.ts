import { defineCourseModule } from '@/data/schema';
import { g11BiologyModule3Manifest } from './manifest';
import { g11BiologyModule3Topics } from './topics';
import { g11BiologyModule3Lessons } from './lessons';
import { g11BiologyModule3Theory } from './theory';
import { g11BiologyModule3Outcomes, g11BiologyModule3Misconceptions } from './learningPath';
import { g11BiologyModule3QuestionTypes } from './questionTypes';
import { g11BiologyModule3Questions } from './questions';
import { g11BiologyModule3Solutions } from './solutions';
import { g11BiologyModule3PracticeBlueprints } from './practiceBlueprint';

export const g11BiologyModule3 = defineCourseModule({
  manifest: g11BiologyModule3Manifest,
  topics: g11BiologyModule3Topics,
  lessons: g11BiologyModule3Lessons,
  theory: g11BiologyModule3Theory,
  outcomes: g11BiologyModule3Outcomes,
  misconceptions: g11BiologyModule3Misconceptions,
  questionTypes: g11BiologyModule3QuestionTypes,
  practiceQuestions: g11BiologyModule3Questions,
  practiceSolutions: g11BiologyModule3Solutions,
  practiceBlueprints: g11BiologyModule3PracticeBlueprints
});
