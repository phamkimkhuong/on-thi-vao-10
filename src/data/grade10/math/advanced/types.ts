import type { Question, Solution } from '@/types';

export type AdvancedMathLevel = 'hard' | 'very_hard' | 'extreme';
export type AdvancedMathProblemStyle = 'compact' | 'extended' | 'olympiad';

export interface AdvancedMathTopic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string[];
}

export interface AdvancedMathQuestion extends Question {
  advancedLevel: AdvancedMathLevel;
  problemLength: AdvancedMathProblemStyle;
  estimatedMinutes: number;
  tags: string[];
  options: string[];
}

export interface AdvancedMathSolution extends Solution {
  insight: string;
}

