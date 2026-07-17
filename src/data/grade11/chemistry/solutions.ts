import { Solution } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g11ChemistrySolutions: Solution[] = Object.values(modules).flatMap(
  (mod: any) => mod.solutions || []
);
