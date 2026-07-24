import { m5FoundationCheckpointQuestions, m5FoundationCheckpointSolutions } from './foundation';
import { m5Score8CheckpointQuestions, m5Score8CheckpointSolutions } from './score8';
import { m5Score9CheckpointQuestions, m5Score9CheckpointSolutions } from './score9';

export const m5CheckpointQuestions = [...m5FoundationCheckpointQuestions, ...m5Score8CheckpointQuestions, ...m5Score9CheckpointQuestions];
export const m5CheckpointSolutions = [...m5FoundationCheckpointSolutions, ...m5Score8CheckpointSolutions, ...m5Score9CheckpointSolutions];
