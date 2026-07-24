import { m3FoundationCheckpointQuestions, m3FoundationCheckpointSolutions } from './foundation';
import { m3Score8CheckpointQuestions, m3Score8CheckpointSolutions } from './score8';
import { m3Score9CheckpointQuestions, m3Score9CheckpointSolutions } from './score9';

export const m3CheckpointQuestions = [...m3FoundationCheckpointQuestions, ...m3Score8CheckpointQuestions, ...m3Score9CheckpointQuestions];
export const m3CheckpointSolutions = [...m3FoundationCheckpointSolutions, ...m3Score8CheckpointSolutions, ...m3Score9CheckpointSolutions];
