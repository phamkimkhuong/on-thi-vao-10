import type {
  AdvancedBiologyLevel,
  AdvancedBiologyProblemLength,
  AdvancedBiologyQuestion,
  AdvancedBiologySolution,
  AuthoredBiologyProblem
} from './types';
import { methodProblems } from './authored/method';
import { moleculeProblems } from './authored/molecule';
import { cellProblems } from './authored/cell';
import { transportProblems } from './authored/transport';
import { metabolismProblems } from './authored/metabolism';
import { divisionProblems } from './authored/division';
import { microbeProblems } from './authored/microbe';
import { virusProblems } from './authored/virus';
import { buildBiologySolution } from './pedagogy';

type AnswerLetter = 'A' | 'B' | 'C' | 'D';
const letters: AnswerLetter[] = ['A', 'B', 'C', 'D'];
const allProblems: AuthoredBiologyProblem[] = [
  ...methodProblems,
  ...moleculeProblems,
  ...cellProblems,
  ...transportProblems,
  ...metabolismProblems,
  ...divisionProblems,
  ...microbeProblems,
  ...virusProblems
];

const levelForPosition = (position: number): AdvancedBiologyLevel => (
  position < 6 ? 'hard' : position < 14 ? 'very_hard' : 'extreme'
);

const lengthForPosition = (position: number): AdvancedBiologyProblemLength => (
  position < 6 ? 'compact' : position < 14 ? 'extended' : 'olympiad'
);

const minutesFor = (level: AdvancedBiologyLevel, length: AdvancedBiologyProblemLength): number => {
  const base = level === 'hard' ? 7 : level === 'very_hard' ? 11 : 16;
  return base + (length === 'compact' ? 0 : length === 'extended' ? 2 : 4);
};

const built = allProblems.map((raw, index) => {
  const sequence = index + 1;
  const topicPosition = index % 18;
  const answerIndex = index % 4;
  const [correctOption, ...distractors] = raw.options;
  const options = [...distractors];
  options.splice(answerIndex, 0, correctOption);
  const answer = letters[answerIndex];
  const level = levelForPosition(topicPosition);
  const problemLength = lengthForPosition(topicPosition);
  const id = `bio10-adv-q${String(sequence).padStart(3, '0')}`;
  const pedagogy = buildBiologySolution(raw, answer);

  const question: AdvancedBiologyQuestion = {
    id,
    subjectId: 'biology',
    topicId: raw.topicId,
    questionTypeId: `${raw.topicId}-type`,
    content: raw.content,
    responseType: 'single_choice',
    difficulty: 'hard',
    sourceType: 'manual',
    options,
    correctAnswer: answer,
    advancedLevel: level,
    problemLength,
    estimatedMinutes: minutesFor(level, problemLength),
    tags: raw.tags,
    stimulus: raw.stimulus
  };

  const solution: AdvancedBiologySolution = {
    id: id.replace('-q', '-s'),
    questionId: id,
    recognition: pedagogy.recognition,
    insight: pedagogy.insight,
    detailedSteps: pedagogy.steps,
    finalAnswer: answer,
    commonMistakes: pedagogy.mistakes,
    reviewSuggestions: pedagogy.reviewSuggestions
  };

  return { question, solution };
});

export const advancedBiology10Questions = built.map(item => item.question);
export const advancedBiology10Solutions = built.map(item => item.solution);
