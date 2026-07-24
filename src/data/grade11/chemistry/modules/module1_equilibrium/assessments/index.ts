import { m1TheoryQuestions, m1TheorySolutions } from './theory';
import { m1CheckpointQuestions, m1CheckpointSolutions } from './checkpoint';
import { m1CheckpointBlueprints } from './checkpoint/blueprints';
import { m1CheckpointExams } from './checkpoint/exams';

export const m1AssessmentQuestions = [...m1TheoryQuestions, ...m1CheckpointQuestions];
export const m1AssessmentSolutions = [...m1TheorySolutions, ...m1CheckpointSolutions];
export const m1AssessmentBlueprints = [...m1CheckpointBlueprints];
export const m1AssessmentExams = [...m1CheckpointExams];

export { m1TheoryQuestions, m1TheorySolutions } from './theory';
export { m1CheckpointQuestions, m1CheckpointSolutions } from './checkpoint';
export { m1CheckpointBlueprints } from './checkpoint/blueprints';
export { m1CheckpointExams } from './checkpoint/exams';
