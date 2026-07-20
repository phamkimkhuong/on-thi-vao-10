import type { QuestionTypePracticeBlueprint } from '@/types';

const modules = import.meta.glob('./modules/module*/practiceBlueprint.ts', { eager: true });

/** Aggregator blueprint; dữ liệu chi tiết thuộc từng module. */
export const g10BiologyPracticeBlueprints: QuestionTypePracticeBlueprint[] = Object.values(modules).flatMap(
  mod => Object.values(mod as Record<string, unknown>).flatMap(value => Array.isArray(value) ? value : [])
);
