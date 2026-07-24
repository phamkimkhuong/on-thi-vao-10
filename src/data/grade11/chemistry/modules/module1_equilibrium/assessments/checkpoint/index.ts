import { m1FoundationCheckpointQuestions, m1FoundationCheckpointSolutions } from './foundation';
import { m1Score8CheckpointQuestions, m1Score8CheckpointSolutions } from './score8';
import { m1Score9CheckpointQuestions, m1Score9CheckpointSolutions } from './score9';

export const m1CheckpointQuestions = [...m1FoundationCheckpointQuestions, ...m1Score8CheckpointQuestions, ...m1Score9CheckpointQuestions];
export const m1CheckpointSolutions = [...m1FoundationCheckpointSolutions, ...m1Score8CheckpointSolutions, ...m1Score9CheckpointSolutions];

export { m1FoundationCheckpointQuestions, m1FoundationCheckpointSolutions } from './foundation';
export { m1Score8CheckpointQuestions, m1Score8CheckpointSolutions } from './score8';
export { m1Score9CheckpointQuestions, m1Score9CheckpointSolutions } from './score9';
