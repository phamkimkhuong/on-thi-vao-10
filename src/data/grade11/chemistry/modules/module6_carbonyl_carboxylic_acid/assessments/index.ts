import { m6CheckpointQuestions, m6CheckpointSolutions } from './checkpoint';
import { m6CheckpointBlueprints } from './checkpoint/blueprints';
import { m6CheckpointExams } from './checkpoint/exams';
import { m6TheoryQuestions, m6TheorySolutions } from './theory';

export const m6AssessmentQuestions = [...m6TheoryQuestions, ...m6CheckpointQuestions];
export const m6AssessmentSolutions = [...m6TheorySolutions, ...m6CheckpointSolutions];
export const m6AssessmentBlueprints = [...m6CheckpointBlueprints];
export const m6AssessmentExams = [...m6CheckpointExams];

export { m6TheoryQuestions, m6TheorySolutions } from './theory';
