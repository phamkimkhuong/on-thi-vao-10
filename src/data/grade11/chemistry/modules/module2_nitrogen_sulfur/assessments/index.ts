import { m2TheoryQuestions, m2TheorySolutions } from './theory';
import { m2CheckpointQuestions, m2CheckpointSolutions } from './checkpoint';
import { m2CheckpointBlueprints } from './checkpoint/blueprints';
import { m2CheckpointExams } from './checkpoint/exams';

export const m2AssessmentQuestions = [...m2TheoryQuestions, ...m2CheckpointQuestions];
export const m2AssessmentSolutions = [...m2TheorySolutions, ...m2CheckpointSolutions];
export const m2AssessmentBlueprints = [...m2CheckpointBlueprints];
export const m2AssessmentExams = [...m2CheckpointExams];

export { m2TheoryQuestions, m2TheorySolutions } from './theory';
export { m2CheckpointQuestions, m2CheckpointSolutions } from './checkpoint';
export { m2CheckpointBlueprints } from './checkpoint/blueprints';
export { m2CheckpointExams } from './checkpoint/exams';
