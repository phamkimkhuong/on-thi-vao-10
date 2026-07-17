import { Question } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g11ChemistryQuestions: Question[] = Object.values(modules).flatMap(
  (mod: any) => mod.questions || []
);
