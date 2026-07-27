import { defineCourseModule } from '@/data/schema';
import { g11MathModule2Manifest } from './manifest';
import { g11MathModule2Lessons } from './lessons';
import { g11MathModule2Topics } from './topics';
import { g11MathModule2QuestionTypes } from './questionTypes';
import { g11MathModule2Questions } from './questions';
import { g11MathModule2Solutions } from './solutions';
import {
  g11MathModule2ExpansionQuestions,
  g11MathModule2ExpansionSolutions
} from './questionsExpansion';
import { g11MathModule2Outcomes, g11MathModule2Misconceptions } from './learningPath';
import { math11Module2Theory } from './theory';
import { g11MathModule2PracticeBlueprints } from './practiceBlueprint';

export const topics = g11MathModule2Topics;
export const questionTypes = g11MathModule2QuestionTypes;
export const questions = [...g11MathModule2Questions, ...g11MathModule2ExpansionQuestions];
export const solutions = [...g11MathModule2Solutions, ...g11MathModule2ExpansionSolutions];
export const outcomes = g11MathModule2Outcomes;
export const misconceptions = g11MathModule2Misconceptions;
export const lessons = g11MathModule2Lessons;
export const theory = math11Module2Theory;
export const practiceBlueprints = g11MathModule2PracticeBlueprints;

export const g11MathModule2 = defineCourseModule({
  manifest: g11MathModule2Manifest,
  topics,
  lessons,
  theory,
  outcomes,
  misconceptions,
  questionTypes,
  practiceQuestions: questions,
  practiceSolutions: solutions,
  practiceBlueprints
});
