import type { AssessmentCognitiveLevel, Question, Solution } from '@/types';
import {
  g10ChemistryPeriodicAutoQuestions,
  g10ChemistryPeriodicAutoSolutions,
  rebalanceChemistryChoice
} from '../periodicAuto';
import { final2QuestionsFormA } from './questionsFormA';
import { final2QuestionsFormB } from './questionsFormB';
import { final2SolutionsFormA } from './solutionsFormA';
import { final2SolutionsFormB } from './solutionsFormB';

const selectedChoiceNumbers = [1, 2, 4, 5, 7, 8, 10, 13, 16, 17, 18, 20];
const choiceDifficulties: Question['difficulty'][] = [
  'easy', 'easy', 'easy', 'easy',
  'medium', 'medium', 'medium', 'medium', 'medium', 'medium',
  'hard', 'hard'
];
const shortDifficulties: Question['difficulty'][] = ['easy', 'medium', 'medium', 'medium', 'medium'];
const answerPattern = ['A', 'B', 'C', 'D'] as const;

export const final2AutoSelectedQuestionIds = {
  a: selectedChoiceNumbers.map(number => `chem10-assess-final2-a-q${String(number).padStart(2, '0')}`),
  b: selectedChoiceNumbers.map(number => `chem10-assess-final2-b-q${String(number).padStart(2, '0')}`)
};

const selectedIndexById = new Map<string, number>(
  (['a', 'b'] as const).flatMap(form =>
    final2AutoSelectedQuestionIds[form].map((id, index) => [id, index] as const)
  )
);

const shortIndexById = new Map<string, number>(
  (['a', 'b'] as const).flatMap(form =>
    Array.from({ length: 5 }, (_, index) => [
      `chem10-assess-final2-${form}-q${String(index + 21).padStart(2, '0')}`,
      index
    ] as const)
  )
);

const cognitiveFor = (difficulty: Question['difficulty']): AssessmentCognitiveLevel =>
  difficulty === 'easy' ? 'recognition' : difficulty === 'medium' ? 'understanding' : 'application';

const normalizeFinal2Question = (question: Question): Question => {
  const choiceIndex = selectedIndexById.get(question.id);
  if (choiceIndex !== undefined) {
    const difficulty = choiceDifficulties[choiceIndex];
    return rebalanceChemistryChoice(
      {
        ...question,
        difficulty,
        cognitiveLevel: cognitiveFor(difficulty),
        points: 0.25,
        responseType: 'single_choice'
      },
      answerPattern[choiceIndex % answerPattern.length]
    );
  }

  const shortIndex = shortIndexById.get(question.id);
  if (shortIndex !== undefined) {
    const difficulty = shortDifficulties[shortIndex];
    return {
      ...question,
      difficulty,
      cognitiveLevel: cognitiveFor(difficulty),
      points: 0.5,
      responseType: 'short_answer'
    };
  }

  return question;
};

const rawQuestions = [...final2QuestionsFormA, ...final2QuestionsFormB].map(normalizeFinal2Question);
const normalizedQuestionById = new Map(rawQuestions.map(question => [question.id, question]));

const normalizeFinal2Solution = (solution: Solution): Solution => {
  const question = normalizedQuestionById.get(solution.questionId);
  if (!question || (!selectedIndexById.has(question.id) && !shortIndexById.has(question.id))) return solution;
  const originalExplanation = solution.detailedSteps.map(step => step.explanation).join(' ');
  return {
    ...solution,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng', explanation: solution.recognition },
      { order: 2, title: 'Phân tích và tính toán', explanation: originalExplanation },
      { order: 3, title: 'Kiểm tra và kết luận', explanation: `Đáp án cuối cùng là ${question.correctAnswer}.`, result: question.correctAnswer }
    ],
    finalAnswer: question.correctAnswer
  };
};

const final2AdditionalQuestions = g10ChemistryPeriodicAutoQuestions.filter(question =>
  question.id.startsWith('chem10-assess-final2-')
);
const final2AdditionalSolutions = g10ChemistryPeriodicAutoSolutions.filter(solution =>
  solution.questionId.startsWith('chem10-assess-final2-')
);

export const final2Questions = [...rawQuestions, ...final2AdditionalQuestions];
export const final2Solutions = [
  ...[...final2SolutionsFormA, ...final2SolutionsFormB].map(normalizeFinal2Solution),
  ...final2AdditionalSolutions
];
