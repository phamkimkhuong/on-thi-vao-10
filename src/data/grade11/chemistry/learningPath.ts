import type { LearningMisconception, LearningOutcome } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g11ChemistryOutcomes: LearningOutcome[] = Object.values(modules)
  .flatMap((mod: any) => (mod.outcomes || []) as LearningOutcome[])
  .sort((a, b) => a.orderIndex - b.orderIndex);

export const g11ChemistryMisconceptions: LearningMisconception[] = Object.values(modules)
  .flatMap((mod: any) => (mod.misconceptions || []) as LearningMisconception[]);
