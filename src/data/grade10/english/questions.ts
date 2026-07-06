import { Question } from '@/types';

export const g10EnglishQuestions: Question[] = [
  {
    id: 'eng10-q1',
    subjectId: 'english',
    topicId: 'eng10-t1',
    questionTypeId: 'eng10-qt1',
    content: 'Look! The students __________ soccer in the schoolyard.',
    options: [
      'A. play',
      'B. are playing',
      'C. plays',
      'D. is playing'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual',
    validatorType: 'choice'
  }
];
