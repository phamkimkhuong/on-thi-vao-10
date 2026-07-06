import { Question } from '@/types';

export const g10MathQuestions: Question[] = [
  {
    id: 'math10-q1',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$. Hãy xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '(1; 3]',
    acceptedAnswers: ['(1;3]', '(1; 3]'],
    validatorType: 'exact'
  }
];
