import { Question } from '@/types';
import { grammarQuestions } from './grammar/questions';
import { wordFormQuestions } from './wordform/questions';
import { readingQuestions } from './reading/questions';
import { writingQuestions } from './writing/questions';
import { englishMockQuestions } from '../mockExamsData';

export const englishQuestions: Question[] = [
  ...grammarQuestions,
  ...wordFormQuestions,
  ...readingQuestions,
  ...writingQuestions,
  ...englishMockQuestions
];


