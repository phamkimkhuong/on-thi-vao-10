import { QuestionType } from '@/types';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g10BiologyQuestionTypes: QuestionType[] = Object.values(modules).flatMap(
  (mod: any) => mod.questionTypes || []
);
