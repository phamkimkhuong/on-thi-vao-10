import type { AdvancedChemistryLevel, AdvancedChemistryProblemLength, AdvancedChemistryQuestion, AdvancedChemistrySolution, AuthoredChemistryProblem } from './types';
import { atomProblems } from './authored/atom';
import { periodicProblems } from './authored/periodic';
import { bondProblems } from './authored/bond';
import { nuclearProblems } from './authored/nuclear';
import { redoxProblems } from './authored/redox';
import { energyProblems } from './authored/energy';
import { rateProblems } from './authored/rate';
import { halogenProblems } from './authored/halogen';
import { experimentProblems } from './authored/experiment';
import { buildChemistrySolution } from './pedagogy';

type AnswerLetter = 'A' | 'B' | 'C' | 'D';
const letters: AnswerLetter[] = ['A', 'B', 'C', 'D'];
const allProblems: AuthoredChemistryProblem[] = [
  ...atomProblems,
  ...periodicProblems,
  ...bondProblems,
  ...nuclearProblems,
  ...redoxProblems,
  ...energyProblems,
  ...rateProblems,
  ...halogenProblems,
  ...experimentProblems
];

const levelForIndex = (index: number): AdvancedChemistryLevel => {
  const position = index % 12;
  return position < 3 ? 'hard' : position < 8 ? 'very_hard' : 'extreme';
};

const lengthForIndex = (index: number): AdvancedChemistryProblemLength => {
  const position = index % 12;
  return position < 4 ? 'compact' : position < 9 ? 'extended' : 'olympiad';
};

const minutesFor = (level: AdvancedChemistryLevel, length: AdvancedChemistryProblemLength): number => {
  const base = level === 'hard' ? 7 : level === 'very_hard' ? 11 : 15;
  return base + (length === 'compact' ? 0 : length === 'extended' ? 2 : 5);
};

const built = allProblems.map((raw, index) => {
  const sequence = index + 1;
  const targetIndex = index % 4;
  const [correctOption, ...distractors] = raw.options;
  const options = [...distractors];
  options.splice(targetIndex, 0, correctOption);
  const answer = letters[targetIndex];
  const level = levelForIndex(index);
  const problemLength = lengthForIndex(index);
  const id = `chem10-adv-q${String(sequence).padStart(3, '0')}`;
  const pedagogy = buildChemistrySolution(raw, level, answer);

  const question: AdvancedChemistryQuestion = {
    id,
    subjectId: 'chemistry',
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
    advancedScope: raw.scope,
    estimatedMinutes: minutesFor(level, problemLength),
    tags: raw.tags,
    stimulus: raw.stimulus
  };

  const solution: AdvancedChemistrySolution = {
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

export const advancedChemistry10Questions = built.map(item => item.question);
export const advancedChemistry10Solutions = built.map(item => item.solution);
