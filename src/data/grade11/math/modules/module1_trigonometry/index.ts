import { defineCourseModule } from '@/data/schema';
import { g11MathModule1Manifest } from './manifest';
import { g11MathModule1Lessons } from './lessons';
import { g11MathModule1Topics } from './topics';
import { g11MathModule1QuestionTypes } from './questionTypes';
import { g11MathModule1Questions } from './questions';
import { g11MathModule1Solutions } from './solutions';
import {
  g11MathModule1ExpansionQuestions,
  g11MathModule1ExpansionSolutions
} from './questionsExpansion';
import { g11MathModule1Outcomes, g11MathModule1Misconceptions } from './learningPath';
import { math11Module1Theory } from './theory';
import { g11MathModule1PracticeBlueprints } from './practiceBlueprint';

export const topics = g11MathModule1Topics;
export const questionTypes = g11MathModule1QuestionTypes;
export const questions = [...g11MathModule1Questions, ...g11MathModule1ExpansionQuestions];
export const solutions = [...g11MathModule1Solutions, ...g11MathModule1ExpansionSolutions];
export const outcomes = g11MathModule1Outcomes;
export const misconceptions = g11MathModule1Misconceptions;
export const lessons = g11MathModule1Lessons;
export const theory = math11Module1Theory;
export const practiceBlueprints = g11MathModule1PracticeBlueprints;

export const g11MathModule1 = defineCourseModule({
  manifest: g11MathModule1Manifest,
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
