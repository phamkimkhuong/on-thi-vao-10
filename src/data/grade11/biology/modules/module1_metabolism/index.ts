import { defineCourseModule } from '@/data/schema';
import { g11BiologyModule1Manifest } from './manifest';
import { g11BiologyModule1Topics } from './topics';
import { g11BiologyModule1Lessons } from './lessons';
import { g11BiologyModule1Theory } from './theory';
import { g11BiologyModule1Outcomes, g11BiologyModule1Misconceptions } from './learningPath';
import { g11BiologyModule1QuestionTypes } from './questionTypes';
import { g11BiologyModule1Questions } from './questions';
import { g11BiologyModule1Solutions } from './solutions';
import { g11BiologyModule1PracticeBlueprints } from './practiceBlueprint';

export const g11BiologyModule1 = defineCourseModule({
  manifest: g11BiologyModule1Manifest,
  topics: g11BiologyModule1Topics,
  lessons: g11BiologyModule1Lessons,
  theory: g11BiologyModule1Theory,
  outcomes: g11BiologyModule1Outcomes,
  misconceptions: g11BiologyModule1Misconceptions,
  questionTypes: g11BiologyModule1QuestionTypes,
  practiceQuestions: g11BiologyModule1Questions,
  practiceSolutions: g11BiologyModule1Solutions,
  practiceBlueprints: g11BiologyModule1PracticeBlueprints
});
