import { Solution } from '@/types';
import { phoneticsSolutions } from './phonetics/solutions';
import { grammarSolutions } from './grammar/solutions';
import { wordFormSolutions } from './wordform/solutions';
import { readingSolutions } from './reading/solutions';
import { writingSolutions } from './writing/solutions';

export const englishSolutions: Solution[] = [
  ...phoneticsSolutions,
  ...grammarSolutions,
  ...wordFormSolutions,
  ...readingSolutions,
  ...writingSolutions
];

