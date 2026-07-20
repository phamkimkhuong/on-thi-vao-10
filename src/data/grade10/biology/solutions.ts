import { Solution } from '@/types';
import { g10BiologyDisplayAnswerByQuestionId } from './questions';
import { normalizeBiologyPracticeSolution } from './practiceChoiceNormalizer';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

const moduleSolutions: Solution[] = Object.values(modules).flatMap(
  (mod: any) => mod.solutions || []
);

export const g10BiologySolutions: Solution[] = moduleSolutions.map(solution => (
  normalizeBiologyPracticeSolution(solution, g10BiologyDisplayAnswerByQuestionId.get(solution.questionId))
));
