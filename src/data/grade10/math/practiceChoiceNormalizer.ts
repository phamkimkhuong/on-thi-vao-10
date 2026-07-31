import type { Question, Solution } from '@/types';

export interface Math10PracticeChoice {
  id: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const applyMath10PracticeChoice = (
  question: Question,
  choice: Math10PracticeChoice | undefined
): Question => {
  if (!choice) return question;
  const { answerSchema: _legacyAnswerSchema, ...baseQuestion } = question;
  void _legacyAnswerSchema;

  return {
    ...baseQuestion,
    responseType: 'single_choice',
    options: choice.options,
    correctAnswer: choice.correctAnswer,
    acceptedAnswers: [choice.correctAnswer, choice.correctAnswer.toLowerCase()],
    validatorType: 'choice',
  };
};

export const applyMath10PracticeChoiceSolution = (
  solution: Solution,
  question: Question | undefined
): Solution => {
  if (!question?.options?.length || question.validatorType !== 'choice') return solution;
  const correctAnswer = Array.isArray(question.correctAnswer)
    ? question.correctAnswer[0]
    : question.correctAnswer;
  const answerIndex = String(correctAnswer).toUpperCase().charCodeAt(0) - 65;
  const finalAnswer = question.options[answerIndex];
  return finalAnswer ? { ...solution, finalAnswer } : solution;
};
