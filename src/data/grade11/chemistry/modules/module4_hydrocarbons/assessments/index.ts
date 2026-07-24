import { m4CheckpointQuestions, m4CheckpointSolutions } from './checkpoint';
import { m4CheckpointBlueprints } from './checkpoint/blueprints';
import { m4CheckpointExams } from './checkpoint/exams';
import { m4TheoryQuestions, m4TheorySolutions } from './theory';

export const m4AssessmentQuestions = [...m4TheoryQuestions, ...m4CheckpointQuestions];
export const m4AssessmentSolutions = [...m4TheorySolutions, ...m4CheckpointSolutions];
export const m4AssessmentBlueprints = [...m4CheckpointBlueprints];
export const m4AssessmentExams = [...m4CheckpointExams];

export { m4TheoryQuestions, m4TheorySolutions } from './theory';
