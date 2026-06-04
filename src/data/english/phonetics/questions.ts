import { Question } from '@/types';

export const phoneticsQuestions: Question[] = [
  {
    "id": "eng-q1",
    "subjectId": "english",
    "topicId": "eng-t1",
    "questionTypeId": "eng-qt1",
    "content": "Choose the word whose underlined part is pronounced differently from that of the others:",
    "options": [
      "A. cups",
      "B. books",
      "C. bats",
      "D. bags"
    ],
    "difficulty": "easy",
    "sourceType": "official_exam",
    "province": "Bình Định",
    "year": 2024,
    "correctAnswer": "D",
    "validatorType": "choice"
  },
  {
    "id": "eng-q2",
    "subjectId": "english",
    "topicId": "eng-t1",
    "questionTypeId": "eng-qt2",
    "content": "Choose the word whose underlined part is pronounced differently from that of the others:",
    "options": [
      "A. washed",
      "B. worked",
      "C. played",
      "D. watched"
    ],
    "difficulty": "easy",
    "sourceType": "mock_exam",
    "correctAnswer": "C",
    "validatorType": "choice"
  }
];
