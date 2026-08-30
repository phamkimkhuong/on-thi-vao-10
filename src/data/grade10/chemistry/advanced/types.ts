import type { Question, QuestionStimulus, Solution } from '@/types';

export type AdvancedChemistryLevel = 'hard' | 'very_hard' | 'extreme';
export type AdvancedChemistryProblemLength = 'compact' | 'extended' | 'olympiad';
export type AdvancedChemistryScope = 'core_advanced' | 'grade10_specialized' | 'olympiad_extension';

export interface AdvancedChemistryTopic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string[];
}

export interface AdvancedChemistryQuestion extends Question {
  advancedLevel: AdvancedChemistryLevel;
  problemLength: AdvancedChemistryProblemLength;
  advancedScope: AdvancedChemistryScope;
  estimatedMinutes: number;
  tags: string[];
  options: string[];
}

export interface AdvancedChemistrySolution extends Solution {
  insight: string;
}

export interface AuthoredChemistryProblem {
  topicId: string;
  scope: AdvancedChemistryScope;
  content: string;
  options: string[];
  insight: string;
  principle: string;
  steps: Array<{ title: string; explanation: string; result?: string }>;
  mistakes: string[];
  tags: string[];
  stimulus?: QuestionStimulus;
}
