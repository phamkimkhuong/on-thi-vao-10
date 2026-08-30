import type {
  AdvancedMathLevel,
  AdvancedMathProblemStyle,
  AdvancedMathQuestion,
  AdvancedMathSolution
} from './types';
import type { AuthoredProblem } from './authored/helpers';
import { buildPedagogicalSolution } from './pedagogy';
import { algebraProblems } from './authored/algebra';
import { functionProblems } from './authored/functions';
import { inequalityProblems } from './authored/inequalities';
import { numberTheoryProblems } from './authored/numberTheory';
import { combinatoricsProblems } from './authored/combinatorics';
import { geometryProblems } from './authored/geometry';
import { coordinateProblems } from './authored/coordinate';
import { modelingProblems } from './authored/modeling';

type AnswerLetter = 'A' | 'B' | 'C' | 'D';
const letters: AnswerLetter[] = ['A', 'B', 'C', 'D'];
const allProblems: AuthoredProblem[] = [
  ...algebraProblems,
  ...functionProblems,
  ...inequalityProblems,
  ...numberTheoryProblems,
  ...combinatoricsProblems,
  ...geometryProblems,
  ...coordinateProblems,
  ...modelingProblems
];

const levelForPosition = (position: number): AdvancedMathLevel => position < 6 ? 'hard' : position < 16 ? 'very_hard' : 'extreme';
const styleForPosition = (position: number): AdvancedMathProblemStyle => position < 12 ? 'compact' : position < 20 ? 'extended' : 'olympiad';
const minutesForLevel = (level: AdvancedMathLevel): number => level === 'hard' ? 8 : level === 'very_hard' ? 13 : 18;

const built = allProblems.map((raw, zeroIndex) => {
  const sequence = zeroIndex + 1;
  const topicPosition = zeroIndex % 24;
  const level = levelForPosition(topicPosition);
  const style = styleForPosition(topicPosition);
  const targetIndex = zeroIndex % 4;
  const [correctOption, ...distractors] = raw.options;
  const options = [...distractors];
  options.splice(targetIndex, 0, correctOption);
  const answer = letters[targetIndex];
  const id = `math10-adv-q${String(sequence).padStart(3, '0')}`;
  const pedagogy = buildPedagogicalSolution(raw, level, answer);

  const question: AdvancedMathQuestion = {
    id,
    subjectId: 'math',
    topicId: raw.topicId,
    questionTypeId: `${raw.topicId}-type`,
    content: raw.content,
    responseType: 'single_choice',
    difficulty: 'hard',
    sourceType: 'manual',
    options,
    correctAnswer: answer,
    advancedLevel: level,
    problemLength: style,
    estimatedMinutes: minutesForLevel(level),
    tags: raw.tags,
    stimulus: raw.stimulus
  };

  const solution: AdvancedMathSolution = {
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

export const advancedMath10Questions = built.map(item => item.question);
export const advancedMath10Solutions = built.map(item => item.solution);
