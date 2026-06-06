import { Question } from '@/types';
import { dang1Questions } from './questions/dang1';
import { dang2Questions } from './questions/dang2';
import { dang3Questions } from './questions/dang3';
import { dang4Questions } from './questions/dang4';
import { dang5Questions } from './questions/dang5';

export const grammarQuestions: Question[] = [
  ...dang1Questions,
  ...dang2Questions,
  ...dang3Questions,
  ...dang4Questions,
  ...dang5Questions
];


