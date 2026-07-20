import type { QuestionPracticeMetadata } from '@/types';

const modules = import.meta.glob('./modules/module*/practiceMetadata.ts', { eager: true });

/** Aggregator metadata; dữ liệu ánh xạ nằm trong từng module. */
export const g10BiologyPracticeMetadata: QuestionPracticeMetadata[] = Object.values(modules).flatMap(
  mod => Object.values(mod as Record<string, unknown>).flatMap(value => Array.isArray(value) ? value : [])
);
