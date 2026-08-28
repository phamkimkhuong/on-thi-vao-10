import type { Question, Solution } from '@/types';
import {
  g10HistoryKnowledgeSeeds,
  g10HistoryTopicIdForType
} from './contentBank';

const letters = ['A', 'B', 'C', 'D'] as const;
const prompts = [
  (focus: string) => `Nội dung nào sau đây phản ánh đúng kiến thức về ${focus}?`,
  (_focus: string, wrong: string) => `Một học sinh ghi: “${wrong}” Nội dung nào sau đây sửa lại ghi chép trên đúng nhất?`,
  (focus: string) => `Khi lập thẻ ghi nhớ về ${focus}, thông tin nào sau đây cần được giữ lại?`
];

const practiceRoles: NonNullable<Question['practiceRole']>[] = [
  'guided',
  'near_transfer',
  'misconception_check'
];

const subTypeIds = ['foundation', 'association', 'misconception'] as const;

const questions: Question[] = [];
const solutions: Solution[] = [];

g10HistoryKnowledgeSeeds.forEach((item, seedIndex) => {
  for (let variant = 0; variant < 3; variant += 1) {
    const id = `${item.id}-q${variant + 1}`;
    const rawOptions = [item.correct, ...item.wrong];
    const correctIndex = (seedIndex * 3 + variant) % 4;
    const options = [...rawOptions];
    const [correct] = options.splice(0, 1);
    options.splice(correctIndex, 0, correct);
    const correctAnswer = letters[correctIndex];
    const difficulty: Question['difficulty'] =
      variant === 0 ? 'easy' : variant === 1 || seedIndex % 2 === 0 ? 'medium' : 'hard';

    questions.push({
      id,
      courseId: 'grade10:history',
      subjectId: 'history',
      topicId: g10HistoryTopicIdForType(item.type),
      questionTypeId: `g10-his-type-${item.type}`,
      content: prompts[variant](item.focus, item.wrong[variant % 3]),
      options: options.map((option, index) => `${letters[index]}. ${option}`),
      correctAnswer,
      acceptedAnswers: [correctAnswer, correctAnswer.toLowerCase()],
      responseType: 'single_choice',
      validatorType: 'choice',
      difficulty,
      sourceType: 'manual',
      outcomeIds: [`g10-his-out-${String(item.type).padStart(2, '0')}`],
      cognitiveLevel: difficulty === 'easy' ? 'recognition' : 'understanding',
      estimatedSeconds: difficulty === 'hard' ? 75 : 45,
      subTypeId: `g10-his-type-${item.type}-${subTypeIds[variant]}`,
      practiceRole: practiceRoles[variant],
      representationType: 'text',
      misconceptionId: variant === 2
        ? `g10-his-misc-${String(item.type).padStart(2, '0')}`
        : undefined,
      isMasteryHoldout: variant === 2 && Number(item.id.slice(-2)) >= 6
    });

    solutions.push({
      id: `sol-${id}`,
      questionId: id,
      courseId: 'grade10:history',
      recognition: `Nhớ kiến thức chính về ${item.focus}.`,
      detailedSteps: [
        {
          order: 1,
          title: 'Kiến thức cần nhớ',
          explanation: `${item.correct} ${item.explanation}`
        }
      ],
      finalAnswer: correctAnswer,
      commonMistakes: [`Dễ nhầm với nhận định: “${item.wrong[0]}”`],
      reviewSuggestions: [`Ôn lại bài ${item.type} và thẻ kiến thức “${item.focus}”.`]
    });
  }
});

export const g10HistoryExpansionQuestions = questions;
export const g10HistoryExpansionSolutions = solutions;
