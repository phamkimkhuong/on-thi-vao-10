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
  },
  {
    id: 'eng10-q2',
    subjectId: 'english',
    topicId: 'eng10-t1',
    questionTypeId: 'eng10-qt2',
    content: 'The school board decided __________ more trees around the campus to protect the environment.',
    options: [
      'A. plant',
      'B. planting',
      'C. to plant',
      'D. planted'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual',
    validatorType: 'choice'
  },
  {
    id: 'eng10-q3',
    subjectId: 'english',
    topicId: 'eng10-t1',
    questionTypeId: 'eng10-qt3',
    content: 'A new song __________ by the famous singer next month.',
    options: [
      'A. is released',
      'B. will be released',
      'C. is releasing',
      'D. was released'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual',
    validatorType: 'choice'
  },
  {
    id: 'eng10-q4',
    subjectId: 'english',
    topicId: 'eng10-t2',
    questionTypeId: 'eng10-qt4',
    content: 'Read the text and choose the best option to complete the blank: "Green Technology (1) __________ popular because it helps save energy. Many companies are now trying to develop eco-friendly devices to protect our planet."',
    options: [
      'A. is becoming',
      'B. become',
      'C. became',
      'D. is become'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'manual',
    validatorType: 'choice'
  },
  {
    id: 'eng10-q5',
    subjectId: 'english',
    topicId: 'eng10-t3',
    questionTypeId: 'eng10-qt5',
    content: 'The teacher __________ teaches us English grammar is very friendly and supportive.',
    options: [
      'A. which',
      'B. who',
      'C. whom',
      'D. whose'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual',
    validatorType: 'choice'
  }
];
