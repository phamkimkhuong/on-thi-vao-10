import fs from 'fs';
import path from 'path';


const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g10EnglishQuestionTypes = Object.values(modules).flatMap(
  (mod: any) => mod.questionTypes || []
);
