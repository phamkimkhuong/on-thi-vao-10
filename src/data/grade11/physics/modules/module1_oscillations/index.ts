import { g11PhysicsModule1Topics } from './topics';
import { g11PhysicsModule1QuestionTypes } from './questionTypes';
import { g11PhysicsModule1Questions } from './questions';
import { g11PhysicsModule1Solutions } from './solutions';
import { g11PhysicsModule1Outcomes, g11PhysicsModule1Misconceptions } from './learningPath';
import { g11PhysicsModule1Lessons } from './lessons';
import { g11PhysicsModule1Manifest } from './manifest';
import { g11PhysicsModule1PracticeBlueprints } from './practiceBlueprint';
import { phy11Module1Theory } from './theory';
import { defineCourseModule } from '@/data/schema';

export const topics = g11PhysicsModule1Topics;
export const questionTypes = g11PhysicsModule1QuestionTypes;
export const questions = g11PhysicsModule1Questions;
export const solutions = g11PhysicsModule1Solutions;
export const outcomes = g11PhysicsModule1Outcomes;
export const misconceptions = g11PhysicsModule1Misconceptions;
export const lessons = g11PhysicsModule1Lessons;
export const theory = phy11Module1Theory;
export const practiceBlueprints = g11PhysicsModule1PracticeBlueprints;

export const g11PhysicsModule1 = defineCourseModule({
  manifest: g11PhysicsModule1Manifest,
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
