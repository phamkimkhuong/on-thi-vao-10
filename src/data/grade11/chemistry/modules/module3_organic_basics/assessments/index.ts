import { m3TheoryQuestions, m3TheorySolutions } from './theory';
import { m3CheckpointQuestions, m3CheckpointSolutions } from './checkpoint';
import { m3CheckpointBlueprints } from './checkpoint/blueprints';
import { m3CheckpointExams } from './checkpoint/exams';

export const m3AssessmentQuestions = [...m3TheoryQuestions, ...m3CheckpointQuestions];
export const m3AssessmentSolutions = [...m3TheorySolutions, ...m3CheckpointSolutions];
export const m3AssessmentBlueprints = [...m3CheckpointBlueprints];
export const m3AssessmentExams = [...m3CheckpointExams];

export { m3TheoryQuestions, m3TheorySolutions } from './theory';
export { m3CheckpointQuestions, m3CheckpointSolutions } from './checkpoint';
export { m3CheckpointBlueprints } from './checkpoint/blueprints';
export { m3CheckpointExams } from './checkpoint/exams';
