import { m4FoundationCheckpointQuestions, m4FoundationCheckpointSolutions } from './foundation';
import { m4Score8CheckpointQuestions, m4Score8CheckpointSolutions } from './score8';
import { m4Score9CheckpointQuestions, m4Score9CheckpointSolutions } from './score9';

export const m4CheckpointQuestions = [...m4FoundationCheckpointQuestions, ...m4Score8CheckpointQuestions, ...m4Score9CheckpointQuestions];
export const m4CheckpointSolutions = [...m4FoundationCheckpointSolutions, ...m4Score8CheckpointSolutions, ...m4Score9CheckpointSolutions];
