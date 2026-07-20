import type { Question, Solution, SolutionStep } from '@/types';

const LETTERS = ['A', 'B', 'C', 'D'] as const;
const CHOICE_PREFIX = /^[A-D][.)]\s*/i;

/** FNV-1a: ổn định theo questionId, không đổi giữa các lần render hoặc phiên học. */
const stableHash = (value: string): number => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

const extractChoiceParts = (question: Question): { stem: string; options: string[] } | null => {
  if (question.options?.length) {
    return {
      stem: question.content.trim(),
      options: question.options.map(option => option.replace(CHOICE_PREFIX, '').trim())
    };
  }

  const parts = question.content.split(/\n(?=[A-D][.)]\s*)/);
  if (parts.length < 3) return null;
  return {
    stem: parts[0].trim(),
    options: parts.slice(1).map(option => option.replace(CHOICE_PREFIX, '').trim())
  };
};

export const normalizeChemistryPracticeChoice = (question: Question): Question => {
  if (question.validatorType !== 'choice' || !/^[A-D]$/i.test(question.correctAnswer)) return question;

  const parsed = extractChoiceParts(question);
  if (!parsed || parsed.options.length !== 4) return question;

  const originalCorrectIndex = question.correctAnswer.toUpperCase().charCodeAt(0) - 65;
  if (originalCorrectIndex < 0 || originalCorrectIndex >= parsed.options.length) return question;

  const reordered = [...parsed.options];
  const [correctOption] = reordered.splice(originalCorrectIndex, 1);
  const boundedTargetIndex = stableHash(`${question.id}:answer`) % parsed.options.length;
  reordered.splice(boundedTargetIndex, 0, correctOption);

  const displayAnswer = LETTERS[boundedTargetIndex];
  const nonLetterAnswers = (question.acceptedAnswers ?? []).filter(answer => !/^[A-D]$/i.test(answer.trim()));

  return {
    ...question,
    content: parsed.stem,
    responseType: 'single_choice',
    options: reordered.map((option, index) => `${LETTERS[index]}. ${option}`),
    correctAnswer: displayAnswer,
    acceptedAnswers: [displayAnswer, displayAnswer.toLowerCase(), ...nonLetterAnswers]
  };
};

const replaceAnswerReference = (text: string | undefined, oldAnswer: string, newAnswer: string): string | undefined => {
  if (!text || oldAnswer === newAnswer) return text;
  return text.replace(
    new RegExp(`((?:phương án|đáp án)\\s+)${oldAnswer}(?=[.\\s,;:]|$)`, 'gi'),
    `$1${newAnswer}`
  );
};

/** Đồng bộ chữ cái trong lời giải sau khi phương án đã được hoán vị. */
export const normalizeChemistryPracticeSolution = (
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
