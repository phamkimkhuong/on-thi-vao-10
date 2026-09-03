import type { Question, QuestionStimulus, Solution } from '@/types';

export type AdvancedBiologyLevel = 'hard' | 'very_hard' | 'extreme';
export type AdvancedBiologyProblemLength = 'compact' | 'extended' | 'olympiad';

export interface AdvancedBiologyTopic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string[];
}

export interface AdvancedBiologyQuestion extends Question {
  advancedLevel: AdvancedBiologyLevel;
  problemLength: AdvancedBiologyProblemLength;
  estimatedMinutes: number;
  tags: string[];
  options: string[];
}

export interface AdvancedBiologySolution extends Solution {
  insight: string;
}

export interface AuthoredBiologyProblem {
  topicId: string;
  content: string;
  options: [string, string, string, string];
  insight: string;
  evidence: string;
  mechanism: string;
  reasoning: string[];
  distractorReasons: [string, string, string];
  tags: string[];
  stimulus?: QuestionStimulus;
}
