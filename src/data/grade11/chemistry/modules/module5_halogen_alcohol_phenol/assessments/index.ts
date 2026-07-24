import { m5CheckpointQuestions, m5CheckpointSolutions } from './checkpoint';
import { m5CheckpointBlueprints } from './checkpoint/blueprints';
import { m5CheckpointExams } from './checkpoint/exams';
import { m5TheoryQuestions, m5TheorySolutions } from './theory';

export const m5AssessmentQuestions = [...m5TheoryQuestions, ...m5CheckpointQuestions];
export const m5AssessmentSolutions = [...m5TheorySolutions, ...m5CheckpointSolutions];
export const m5AssessmentBlueprints = [...m5CheckpointBlueprints];
export const m5AssessmentExams = [...m5CheckpointExams];

export { m5TheoryQuestions, m5TheorySolutions } from './theory';
