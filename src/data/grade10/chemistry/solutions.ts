import { Solution } from '@/types';
import { g10ChemistryDisplayAnswerByQuestionId } from './questions';
import { normalizeChemistryPracticeSolution } from './practiceChoiceNormalizer';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

const moduleSolutions: Solution[] = Object.values(modules).flatMap(
  (mod: any) => mod.solutions || []
);

export const g10ChemistrySolutions: Solution[] = moduleSolutions.map(solution => (
  normalizeChemistryPracticeSolution(solution, g10ChemistryDisplayAnswerByQuestionId.get(solution.questionId))
));
