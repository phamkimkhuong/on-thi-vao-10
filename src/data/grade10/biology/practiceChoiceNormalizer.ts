import type { Question, Solution, SolutionStep } from '@/types';

const LETTERS = ['A', 'B', 'C', 'D'] as const;
const CHOICE_PREFIX = /^[A-D][.)]\s*/i;

/** FNV-1a: tạo vị trí đáp án ổn định theo ID, không nhảy giữa các lần render. */
const stableHash = (value: string): number => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

export const normalizeBiologyPracticeChoice = (question: Question): Question => {
  if (question.validatorType !== 'choice' || !/^[A-D]$/i.test(question.correctAnswer)) return question;
  if (!question.options || question.options.length !== 4) return question;

  const originalOptions = question.options.map(option => option.replace(CHOICE_PREFIX, '').trim());
  const originalCorrectIndex = question.correctAnswer.toUpperCase().charCodeAt(0) - 65;
  if (originalCorrectIndex < 0 || originalCorrectIndex >= originalOptions.length) return question;

  const reordered = [...originalOptions];
  const [correctOption] = reordered.splice(originalCorrectIndex, 1);
  const targetIndex = stableHash(`${question.id}:answer`) % LETTERS.length;
  reordered.splice(targetIndex, 0, correctOption);

  const displayAnswer = LETTERS[targetIndex];
  const nonLetterAnswers = (question.acceptedAnswers ?? []).filter(answer => !/^[A-D]$/i.test(answer.trim()));

  return {
    ...question,
    responseType: 'single_choice',
    options: reordered.map((option, index) => `${LETTERS[index]}. ${option}`),
    correctAnswer: displayAnswer,
    acceptedAnswers: [displayAnswer, displayAnswer.toLowerCase(), ...nonLetterAnswers]
  };
};

const replaceAnswerReference = (
  value: string | undefined,
  oldAnswer: string,
  newAnswer: string
): string | undefined => {
  if (!value || oldAnswer === newAnswer) return value;
  return value.replace(
    new RegExp(`((?:phương án|đáp án|chọn)\\s+)${oldAnswer}(?=[.\\s,;:]|$)`, 'gi'),
    `$1${newAnswer}`
  );
};

/** Đồng bộ chữ cái được nhắc trong lời giải sau khi hoán vị phương án. */
export const normalizeBiologyPracticeSolution = (
  solution: Solution,
  displayAnswer: string | undefined
): Solution => {
  if (!displayAnswer || !/^[A-D]$/i.test(solution.finalAnswer) || solution.finalAnswer === displayAnswer) return solution;

  const oldAnswer = solution.finalAnswer.toUpperCase();
  const newAnswer = displayAnswer.toUpperCase();
  return {
    ...solution,
    finalAnswer: newAnswer,
    detailedSteps: solution.detailedSteps.map((step: SolutionStep) => ({
      ...step,
      explanation: replaceAnswerReference(step.explanation, oldAnswer, newAnswer) ?? step.explanation,
      result: replaceAnswerReference(step.result, oldAnswer, newAnswer)
    }))
  };
};
