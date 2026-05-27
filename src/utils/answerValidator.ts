import type { AnswerField, AnswerSchema, Question, StructuredAnswer, ValidatorType } from '../types';

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
    .replace(/√\s*\{([^{}]+)\}/g, 'sqrt($1)')
    .replace(/√\s*\(([^()]+)\)/g, 'sqrt($1)')
    .replace(/√\s*([a-z0-9]+)/g, 'sqrt($1)')
    .replace(/\bcan\s*\(([^()]+)\)/g, 'sqrt($1)')
    .replace(/\bcan\s+([a-z0-9]+)/g, 'sqrt($1)')
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

export type AnswerInput = string | StructuredAnswer;

export const isStructuredAnswer = (value: AnswerInput): value is StructuredAnswer => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

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

const extractSingleNumber = (value: string): number | null => {
  const values = extractNumericValues(value);
  return values.length === 1 ? values[0] : null;
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

const structuredAnswerCandidates = (question: Question, schema: AnswerSchema): StructuredAnswer[] => {
  const directCandidates = [
    question.correctFinalAnswer,
    ...(question.acceptedFinalAnswers ?? [])
  ].filter((candidate): candidate is StructuredAnswer => candidate !== undefined);

  if (directCandidates.length > 0) {
    return directCandidates;
  }

  if (schema.fields.length === 1) {
    const [field] = schema.fields;
    return answerCandidates(question).map(candidate => ({
      [field.key]: candidate
    }));
  }

  return [];
};

const fieldHasValue = (value: string | undefined): boolean => {
  return Boolean(value?.trim());
};

export const isAnswerComplete = (question: Question, answer: AnswerInput): boolean => {
  if (!question.answerSchema) {
    return isStructuredAnswer(answer)
      ? Object.values(answer).some(fieldHasValue)
      : fieldHasValue(answer);
  }

  if (!isStructuredAnswer(answer)) {
    return fieldHasValue(answer);
  }

  return question.answerSchema.fields
    .filter(field => field.required !== false)
    .every(field => fieldHasValue(answer[field.key]));
};

export const formatAnswerForDisplay = (question: Question, answer: AnswerInput): string => {
  if (!isStructuredAnswer(answer)) {
    return answer;
  }

  const schema = question.answerSchema;
  if (!schema) {
    return Object.entries(answer)
      .filter(([, value]) => fieldHasValue(value))
      .map(([key, value]) => `${key}: ${value.trim()}`)
      .join(', ');
  }

  return schema.fields
    .map(field => {
      const value = answer[field.key]?.trim();
      if (!value) return null;
      return `${field.label} ${value}`.replace(/\s+/g, ' ').trim();
    })
    .filter((value): value is string => value !== null)
    .join(', ');
};

const normalizeStructuredFieldText = (field: AnswerField, value: string): string => {
  const normalized = normalizeAnswerText(value);
  const aliases = [field.key, field.label.replace(/[=:]/g, '')]
    .map(alias => normalizeAnswerText(alias))
    .filter(Boolean);

  for (const alias of aliases) {
    if (normalized.startsWith(`${alias}=`)) {
      return normalized.slice(alias.length + 1);
    }
  }

  return normalized;
};

const compareTextValue = (field: AnswerField, userValue: string, candidateValue: string): boolean => {
  const normalizedUser = normalizeStructuredFieldText(field, userValue);
  const normalizedCandidate = normalizeStructuredFieldText(field, candidateValue);
  return normalizedUser.length > 0 && normalizedCandidate.length > 0 && normalizedUser === normalizedCandidate;
};

const compareChoiceValue = (userValue: string, candidateValue: string): boolean => {
  const normalizedUser = normalizeChoiceAnswer(userValue);
  const normalizedCandidate = normalizeChoiceAnswer(candidateValue);
  return normalizedUser.length > 0 && normalizedCandidate.length > 0 && normalizedUser === normalizedCandidate;
};

const compareNumericValue = (userValue: string, candidateValue: string): boolean => {
  const userNumber = extractSingleNumber(userValue);
  const candidateNumber = extractSingleNumber(candidateValue);
  return userNumber !== null && candidateNumber !== null && numbersEqual(userNumber, candidateNumber);
};

const compareFieldValue = (
  field: AnswerField,
  userValue: string,
  candidateValue: string,
  mode: AnswerSchema['autoCheckMode']
): boolean => {
  if (mode === 'keyed-numeric' || mode === 'numeric' || field.valueType === 'number' || field.valueType === 'fraction') {
    return compareNumericValue(userValue, candidateValue);
  }

  if (field.valueType === 'choice') {
    return compareChoiceValue(userValue, candidateValue);
  }

  return compareTextValue(field, userValue, candidateValue);
};

const compareStructuredByField = (
  schema: AnswerSchema,
  userAnswer: StructuredAnswer,
  candidate: StructuredAnswer
): boolean => {
  return schema.fields
    .filter(field => field.required !== false)
    .every(field => {
      const userValue = userAnswer[field.key];
      const candidateValue = candidate[field.key];

      if (!fieldHasValue(userValue) || !fieldHasValue(candidateValue)) {
        return false;
      }

      return compareFieldValue(field, userValue, candidateValue, schema.autoCheckMode);
    });
};

const compareStructuredUnorderedNumbers = (
  schema: AnswerSchema,
  userAnswer: StructuredAnswer,
  candidate: StructuredAnswer
): boolean => {
  const requiredFields = schema.fields.filter(field => field.required !== false);
  const toSortedNumbers = (source: StructuredAnswer): number[] | null => {
    const values = requiredFields.map(field => extractSingleNumber(source[field.key] ?? ''));
    if (values.some(value => value === null)) return null;

    return (values as number[]).sort((a, b) => a - b);
  };

  const userNumbers = toSortedNumbers(userAnswer);
  const candidateNumbers = toSortedNumbers(candidate);

  if (!userNumbers || !candidateNumbers || userNumbers.length !== candidateNumbers.length) {
    return false;
  }

  return userNumbers.every((value, index) => numbersEqual(value, candidateNumbers[index]));
};

const validateStructuredAnswer = (question: Question, userAnswer: StructuredAnswer): boolean => {
  const schema = question.answerSchema;
  if (!schema || !isAnswerComplete(question, userAnswer)) return false;

  const candidates = structuredAnswerCandidates(question, schema);
  if (candidates.length === 0) return false;

  switch (schema.autoCheckMode) {
    case 'unordered-numeric':
      return candidates.some(candidate => compareStructuredUnorderedNumbers(schema, userAnswer, candidate));
    case 'manual':
      return candidates.some(candidate => compareStructuredByField(schema, userAnswer, candidate));
    case 'exact':
    case 'numeric':
    case 'keyed-numeric':
    case 'expression-loose':
    default:
      return candidates.some(candidate => compareStructuredByField(schema, userAnswer, candidate));
  }
};

export function validateAnswer(question: Question, userAnswer: AnswerInput): boolean {
  if (isStructuredAnswer(userAnswer)) {
    return validateStructuredAnswer(question, userAnswer);
  }

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
