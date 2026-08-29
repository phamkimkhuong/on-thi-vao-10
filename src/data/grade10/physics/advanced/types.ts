import type { Question, Solution } from '@/types';

export type AdvancedPhysicsLevel = 'hard' | 'very_hard' | 'extreme';
export type AdvancedPhysicsProblemLength = 'compact' | 'extended' | 'olympiad';

export interface AdvancedPhysicsTopic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string[];
}

export interface AdvancedPhysicsQuestion extends Question {
  advancedLevel: AdvancedPhysicsLevel;
  problemLength: AdvancedPhysicsProblemLength;
  estimatedMinutes: number;
  tags: string[];
  options: string[];
}

export interface AdvancedPhysicsSolution extends Solution {
  insight: string;
}
