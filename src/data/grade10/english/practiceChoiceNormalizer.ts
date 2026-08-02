import type { Question, Solution, SolutionStep } from '@/types';

const LETTERS = ['A', 'B', 'C', 'D'] as const;
const CHOICE_PREFIX = /^[A-D][.)]\s*/i;

const stableHash = (value: string): number => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

export const normalizeEnglishPracticeChoice = (question: Question): Question => {
  if (
    question.validatorType !== 'choice'
    || !/^[A-D]$/i.test(question.correctAnswer)
    || question.options?.length !== 4
  ) {
    return question;
  }

  const options = question.options.map(option => option.replace(CHOICE_PREFIX, '').trim());
  const correctIndex = question.correctAnswer.toUpperCase().charCodeAt(0) - 65;
  if (correctIndex < 0 || correctIndex >= options.length) return question;

  const reordered = [...options];
  const [correctOption] = reordered.splice(correctIndex, 1);
  const targetIndex = stableHash(`${question.id}:answer`) % 4;
  reordered.splice(targetIndex, 0, correctOption);
  const displayAnswer = LETTERS[targetIndex];

  let reorderedTranslationOptions: string[] | undefined = undefined;
  if (question.translation?.options && question.translation.options.length === options.length) {
    const transOpts = [...question.translation.options];
    const [correctTransOpt] = transOpts.splice(correctIndex, 1);
    transOpts.splice(targetIndex, 0, correctTransOpt);
    reorderedTranslationOptions = transOpts;
  }

  return {
    ...question,
    options: reordered.map((option, index) => `${LETTERS[index]}. ${option}`),
    correctAnswer: displayAnswer,
    acceptedAnswers: [displayAnswer, displayAnswer.toLowerCase()],
    translation: question.translation ? {
      ...question.translation,
      ...(reorderedTranslationOptions ? { options: reorderedTranslationOptions } : {})
    } : undefined
  };
};

const replaceAnswerReference = (text: string | undefined, oldAnswer: string, newAnswer: string) => {
  if (!text || oldAnswer === newAnswer) return text;
  return text.replace(
    new RegExp(`((?:option|answer|phương án|đáp án)\\s+)${oldAnswer}(?=[.\\s,;:]|$)`, 'gi'),
    `$1${newAnswer}`
  );
};

export const normalizeEnglishPracticeSolution = (
  solution: Solution,
  displayAnswer: string | undefined
): Solution => {
  if (!displayAnswer || !/^[A-D]$/i.test(solution.finalAnswer) || solution.finalAnswer === displayAnswer) {
    return solution;
  }
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

