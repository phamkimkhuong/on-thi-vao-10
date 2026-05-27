import type { Question, ValidatorType } from '../types';

export type { ValidatorType } from '../types';

const NUMBER_TOLERANCE = 1e-6;

const normalizeAnswerText = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\\\(|\\\)|\$/g, '')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
    .replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)')
    .replace(/√\s*([0-9]+)/g, 'sqrt($1)')
    .replace(/[–—−]/g, '-')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, '');
};

const normalizeChoiceAnswer = (value: string): string => {
  const normalized = normalizeAnswerText(value);
  const optionLetter = normalized.match(/^[a-z]/)?.[0];
  return optionLetter ?? normalized;
};

const answerCandidates = (question: Question): string[] => [
  question.correctAnswer,
  ...(question.acceptedAnswers ?? [])
].filter(Boolean);

const matchesNormalizedCandidate = (question: Question, userAnswer: string): boolean => {
  const normalizedUser = normalizeAnswerText(userAnswer);
  if (!normalizedUser) return false;

  return answerCandidates(question).some(candidate => normalizeAnswerText(candidate) === normalizedUser);
};

const parseNumber = (rawValue: string): number | null => {
  const value = rawValue.replace(',', '.');
  const fractionMatch = value.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);

  if (fractionMatch) {
    const numerator = Number(fractionMatch[1]);
    const denominator = Number(fractionMatch[2]);
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
      return null;
    }
    return numerator / denominator;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const extractNumericValues = (value: string): number[] => {
  const normalized = normalizeAnswerText(value);
  const values: number[] = [];
  const consumedRanges: Array<[number, number]> = [];

  const fractionPattern = /-?\d+(?:[.,]\d+)?\/-?\d+(?:[.,]\d+)?/g;
  for (const match of normalized.matchAll(fractionPattern)) {
    const numeric = parseNumber(match[0]);
    if (numeric !== null) {
      values.push(numeric);
      consumedRanges.push([match.index ?? 0, (match.index ?? 0) + match[0].length]);
    }
  }

  const isInsideConsumedRange = (index: number): boolean => {
    return consumedRanges.some(([start, end]) => index >= start && index < end);
  };

  const numberPattern = /-?\d+(?:[.,]\d+)?/g;
  for (const match of normalized.matchAll(numberPattern)) {
    const index = match.index ?? 0;
    if (isInsideConsumedRange(index)) continue;

    const numeric = parseNumber(match[0]);
    if (numeric !== null) {
      values.push(numeric);
    }
  }

  return values;
};

const numbersEqual = (left: number, right: number): boolean => {
  return Math.abs(left - right) <= NUMBER_TOLERANCE;
};

const validateNumberAnswer = (question: Question, userAnswer: string): boolean => {
  if (matchesNormalizedCandidate(question, userAnswer)) return true;

  const userNumbers = extractNumericValues(userAnswer);
  if (userNumbers.length !== 1) return false;

  return answerCandidates(question).some(candidate => {
    const candidateNumbers = extractNumericValues(candidate);
    return candidateNumbers.length === 1 && numbersEqual(userNumbers[0], candidateNumbers[0]);
  });
};

const validateMultiNumberAnswer = (question: Question, userAnswer: string): boolean => {
  if (matchesNormalizedCandidate(question, userAnswer)) return true;

  const userNumbers = extractNumericValues(userAnswer);
  if (userNumbers.length === 0) return false;

  const candidateNumbers = extractNumericValues(question.correctAnswer);
  if (candidateNumbers.length !== userNumbers.length) return false;

  return candidateNumbers.every((candidateNumber, index) => {
    return numbersEqual(candidateNumber, userNumbers[index]);
  });
};

export function validateAnswer(question: Question, userAnswer: string): boolean {
  const validatorType: ValidatorType = question.validatorType ?? (question.options ? 'choice' : 'exact');

  switch (validatorType) {
    case 'choice': {
      const normalizedUser = normalizeChoiceAnswer(userAnswer);
      if (!normalizedUser) return false;

      return answerCandidates(question).some(candidate => {
        return normalizeChoiceAnswer(candidate) === normalizedUser;
      });
    }
    case 'number':
      return validateNumberAnswer(question, userAnswer);
    case 'multi-number':
      return validateMultiNumberAnswer(question, userAnswer);
    case 'text-includes': {
      const normalizedUser = normalizeAnswerText(userAnswer);
      if (!normalizedUser) return false;

      return answerCandidates(question).some(candidate => {
        const normalizedCandidate = normalizeAnswerText(candidate);
        return normalizedCandidate.length > 0 && normalizedUser.includes(normalizedCandidate);
      });
    }
    case 'manual':
      return (question.acceptedAnswers?.length ?? 0) > 0 && matchesNormalizedCandidate(question, userAnswer);
    case 'exact':
    default:
      return matchesNormalizedCandidate(question, userAnswer);
  }
}
