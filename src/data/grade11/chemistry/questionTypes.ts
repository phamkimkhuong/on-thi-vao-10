import { QuestionType } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g11ChemistryQuestionTypes: QuestionType[] = Object.values(modules).flatMap(
  (mod: any) => mod.questionTypes || []
);
