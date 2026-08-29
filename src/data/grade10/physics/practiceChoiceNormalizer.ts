import type { Question, Solution } from '@/types';

export interface Physics10PracticeChoice {
  id: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

const CLEANUP_INPUT_PROMPTS = [
  /\s*Chỉ nhập giá trị số\./gi,
  /\s*Chỉ nhập giá trị thập phân\./gi,
  /\s*Chỉ nhập số\./gi,
  /\s*Chỉ điền số\./gi,
  /\s*Chỉ nhập số nguyên\./gi,
  /\s*Chỉ nhập đáp số\./gi,
  /\s*Chỉ nhập giá trị\./gi,
  /\s*Làm tròn đến hai chữ số thập phân\./gi,
  /\s*Làm tròn đến một chữ số thập phân\./gi,
];

export const applyPhysics10PracticeChoice = (
  question: Question,
  choice: Physics10PracticeChoice | undefined
): Question => {
  if (!choice) return question;

  let cleanedContent = question.content;
  for (const regex of CLEANUP_INPUT_PROMPTS) {
    cleanedContent = cleanedContent.replace(regex, '');
  }

  const { answerSchema: _legacyAnswerSchema, ...baseQuestion } = question;
  void _legacyAnswerSchema;

  return {
    ...baseQuestion,
    content: cleanedContent.trim(),
    responseType: 'single_choice',
    options: choice.options,
    correctAnswer: choice.correctAnswer,
    acceptedAnswers: [choice.correctAnswer, choice.correctAnswer.toLowerCase()],
    validatorType: 'choice',
  };
};

export const applyPhysics10PracticeChoiceSolution = (
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
