import type {
  AssessmentCognitiveLevel,
  AssessmentCompetency,
  Question,
  QuestionPracticeMetadata,
  QuestionRepresentationType,
  QuestionStimulus,
  Solution
} from '@/types';

export interface BiologyAdaptiveSeed {
  id: string;
  questionTypeId: string;
  topicId: string;
  outcomeId: string;
  subTypeId: string;
  prompt: string;
  correct: string;
  distractors: [string, string, string];
  recognition: string;
  reasoning: string;
  trap: string;
  representationType?: QuestionRepresentationType;
  stimulus?: QuestionStimulus;
  competency?: AssessmentCompetency;
  cognitiveLevel?: AssessmentCognitiveLevel;
}

export type BiologyAdaptiveCase = Omit<
  BiologyAdaptiveSeed,
  'id' | 'questionTypeId' | 'topicId' | 'outcomeId' | 'subTypeId'
>;

export const buildBiologySeedGroup = (config: {
  prefix: string;
  questionTypeId: string;
  topicId: string;
  outcomeId: string;
  subTypeId: string;
  cases: BiologyAdaptiveCase[];
}): BiologyAdaptiveSeed[] => config.cases.map((item, index) => ({
  ...item,
  id: `${config.prefix}${String(index + 1).padStart(2, '0')}`,
  questionTypeId: config.questionTypeId,
  topicId: config.topicId,
  outcomeId: config.outcomeId,
  subTypeId: config.subTypeId
}));

const ANSWERS = ['A', 'B', 'C', 'D'] as const;
const DIFFICULTIES: Question['difficulty'][] = [
  'easy', 'easy', 'easy',
  'medium', 'medium', 'medium', 'medium', 'medium',
  'hard', 'hard', 'hard', 'hard'
];
const ROLES: QuestionPracticeMetadata['practiceRole'][] = [
  'guided',
  'near_transfer',
  'misconception_check',
  'representation_switch',
  'near_transfer',
  'retention',
  'guided',
  'representation_switch',
  'far_transfer',
  'far_transfer',
  'mastery_holdout',
  'mastery_holdout'
];

const labelOptions = (seed: BiologyAdaptiveSeed, index: number) => {
  const correctIndex = index % ANSWERS.length;
  const contents = [...seed.distractors];
  contents.splice(correctIndex, 0, seed.correct);
  return {
    options: contents.map((content, optionIndex) => `${ANSWERS[optionIndex]}. ${content}`),
    correctAnswer: ANSWERS[correctIndex]
  };
};

/**
 * Mỗi cụm seed gồm đúng 12 câu: 3 dễ, 5 vừa, 4 khó. Câu 11–12 là holdout,
 * luôn ẩn ở lượt học đầu. Nội dung vẫn được biên soạn tường minh trong seed;
 * factory chỉ chuẩn hóa nhãn đáp án và metadata, không sinh biến thể thay số.
 */
export const buildBiologyAdaptiveBank = (seeds: BiologyAdaptiveSeed[]) => {
  const questions: Question[] = [];
  const solutions: Solution[] = [];
  const metadata: QuestionPracticeMetadata[] = [];

  const positionBySubType = new Map<string, number>();

  for (const seed of seeds) {
    const index = positionBySubType.get(seed.subTypeId) ?? 0;
    positionBySubType.set(seed.subTypeId, index + 1);
    const { options, correctAnswer } = labelOptions(seed, index);
    const difficulty = DIFFICULTIES[index] ?? 'hard';
    const practiceRole = ROLES[index] ?? 'far_transfer';
    const representationType = seed.representationType ?? 'text';
    const isMasteryHoldout = practiceRole === 'mastery_holdout';

    questions.push({
      id: seed.id,
      subjectId: 'biology',
      topicId: seed.topicId,
      questionTypeId: seed.questionTypeId,
      responseType: 'single_choice',
      content: seed.prompt,
      options,
      correctAnswer,
      acceptedAnswers: [correctAnswer, correctAnswer.toLowerCase()],
      difficulty,
      sourceType: 'manual',
      validatorType: 'choice',
      outcomeIds: [seed.outcomeId],
      competency: seed.competency ?? (difficulty === 'easy' ? 'biological_cognition' : 'biological_application'),
      cognitiveLevel: seed.cognitiveLevel ?? (difficulty === 'easy' ? 'understanding' : 'application'),
      estimatedSeconds: difficulty === 'easy' ? 55 : difficulty === 'medium' ? 75 : 105,
      variantGroupId: seed.id,
      stimulus: seed.stimulus,
      subTypeId: seed.subTypeId,
      practiceRole,
      representationType,
      isMasteryHoldout
    });

    solutions.push({
      id: `${seed.id}-solution`,
      questionId: seed.id,
      recognition: seed.recognition,
      detailedSteps: [
        {
          order: 1,
          title: 'Đọc đúng dữ kiện',
          explanation: seed.recognition
        },
        {
          order: 2,
          title: 'Nối dữ kiện với kiến thức',
          explanation: seed.reasoning
        },
        {
          order: 3,
          title: 'Loại phương án gây nhiễu',
          explanation: `${seed.trap} Vì vậy chọn ${correctAnswer}.`
        }
      ],
      finalAnswer: correctAnswer,
      commonMistakes: [seed.trap],
      reviewSuggestions: [`Ôn lại ${seed.outcomeId} và tự giải thích cơ chế bằng lời của em.`]
    });

    metadata.push({
      questionId: seed.id,
      subTypeId: seed.subTypeId,
      practiceRole,
      representationType,
      isMasteryHoldout
    });
  }

  return { questions, solutions, metadata };
};

export const buildLegacyBiologyMetadata = (
  entries: Array<{
    questionTypeId: string;
    subTypeId: string;
    questionIds: string[];
  }>
): QuestionPracticeMetadata[] => entries.flatMap(entry => entry.questionIds.map((questionId, index) => {
  const practiceRole = ROLES[index] ?? 'far_transfer';
  return {
    questionId,
    subTypeId: entry.subTypeId,
    practiceRole,
    representationType: index === 3 || index === 7 ? 'diagram' : index === 8 || index === 9 ? 'experiment' : 'text',
    isMasteryHoldout: practiceRole === 'mastery_holdout'
  };
}));
