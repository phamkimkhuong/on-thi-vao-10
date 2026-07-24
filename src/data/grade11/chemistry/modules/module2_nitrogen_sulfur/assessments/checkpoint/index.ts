import { m2FoundationCheckpointQuestions, m2FoundationCheckpointSolutions } from './foundation';
import { m2Score8CheckpointQuestions, m2Score8CheckpointSolutions } from './score8';
import { m2Score9CheckpointQuestions, m2Score9CheckpointSolutions } from './score9';

export const m2CheckpointQuestions = [...m2FoundationCheckpointQuestions, ...m2Score8CheckpointQuestions, ...m2Score9CheckpointQuestions];
export const m2CheckpointSolutions = [...m2FoundationCheckpointSolutions, ...m2Score8CheckpointSolutions, ...m2Score9CheckpointSolutions];

export { m2FoundationCheckpointQuestions, m2FoundationCheckpointSolutions } from './foundation';
export { m2Score8CheckpointQuestions, m2Score8CheckpointSolutions } from './score8';
export { m2Score9CheckpointQuestions, m2Score9CheckpointSolutions } from './score9';
