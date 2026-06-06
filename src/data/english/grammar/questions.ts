import { Question } from '@/types';
import { dang1Questions } from './questions/dang1';
import { dang2Questions } from './questions/dang2';
import { dang3Questions } from './questions/dang3';

export const grammarQuestions: Question[] = [
  ...dang1Questions,
  ...dang2Questions,
  ...dang3Questions
];
