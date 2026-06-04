import { Question } from '@/types';
import { phoneticsQuestions } from './phonetics/questions';
import { grammarQuestions } from './grammar/questions';
import { readingQuestions } from './reading/questions';
import { writingQuestions } from './writing/questions';

export const englishQuestions: Question[] = [
  ...phoneticsQuestions,
  ...grammarQuestions,
  ...readingQuestions,
  ...writingQuestions
];
