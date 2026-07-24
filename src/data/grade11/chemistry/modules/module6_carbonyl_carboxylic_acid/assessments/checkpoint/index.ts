import { m6FoundationCheckpointQuestions, m6FoundationCheckpointSolutions } from './foundation';
import { m6Score8CheckpointQuestions, m6Score8CheckpointSolutions } from './score8';
import { m6Score9CheckpointQuestions, m6Score9CheckpointSolutions } from './score9';

export const m6CheckpointQuestions = [...m6FoundationCheckpointQuestions, ...m6Score8CheckpointQuestions, ...m6Score9CheckpointQuestions];
export const m6CheckpointSolutions = [...m6FoundationCheckpointSolutions, ...m6Score8CheckpointSolutions, ...m6Score9CheckpointSolutions];
