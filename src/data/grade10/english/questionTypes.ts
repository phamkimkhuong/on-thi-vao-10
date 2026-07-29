import { QuestionType } from '@/types';
import { g10EnglishDeepeningQuestionTypes } from './skillsDeepening';
import { g10EnglishSkillQuestionTypes } from './skillsExpansion';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g10EnglishQuestionTypes: QuestionType[] = [
  ...Object.values(modules).flatMap((mod: any) => mod.questionTypes || []),
  ...g10EnglishSkillQuestionTypes,
  ...g10EnglishDeepeningQuestionTypes
];
