import { defineCourseModule } from '@/data/schema';
import { g11BiologyModule2Manifest } from './manifest';
import { g11BiologyModule2Topics } from './topics';
import { g11BiologyModule2Lessons } from './lessons';
import { g11BiologyModule2Theory } from './theory';
import { g11BiologyModule2Outcomes, g11BiologyModule2Misconceptions } from './learningPath';
import { g11BiologyModule2QuestionTypes } from './questionTypes';
import { g11BiologyModule2Questions } from './questions';
import { g11BiologyModule2Solutions } from './solutions';
import { g11BiologyModule2PracticeBlueprints } from './practiceBlueprint';

export const g11BiologyModule2 = defineCourseModule({
  manifest: g11BiologyModule2Manifest,
  topics: g11BiologyModule2Topics,
  lessons: g11BiologyModule2Lessons,
  theory: g11BiologyModule2Theory,
  outcomes: g11BiologyModule2Outcomes,
  misconceptions: g11BiologyModule2Misconceptions,
  questionTypes: g11BiologyModule2QuestionTypes,
  practiceQuestions: g11BiologyModule2Questions,
  practiceSolutions: g11BiologyModule2Solutions,
  practiceBlueprints: g11BiologyModule2PracticeBlueprints
});
