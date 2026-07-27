import type {
  PracticeRole,
  Question,
  QuestionRepresentationType,
  Solution,
  ValidatorType
} from '@/types';

export type ChemistryPracticeExpansionSpec = {
  id: string;
  topicId: string;
  questionTypeId: string;
  subTypeId: string;
  content: string;
  responseType: 'single_choice' | 'short_answer';
  options?: [string, string, string, string];
  correctAnswer: string;
  acceptedAnswers?: string[];
  validatorType: ValidatorType;
  difficulty: 'medium' | 'hard';
  outcomeIds: string[];
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  isMasteryHoldout?: boolean;
  estimatedSeconds: number;
  solution: {
    recognition: string;
    reasoning: [string, string, ...string[]];
    commonMistake: string;
    reviewSuggestion: string;
  };
};

export const buildChemistryPracticeExpansion = (
  specs: ChemistryPracticeExpansionSpec[]
): { questions: Question[]; solutions: Solution[] } => ({
  questions: specs.map(spec => ({
    id: spec.id,
    subjectId: 'chemistry',
    topicId: spec.topicId,
    questionTypeId: spec.questionTypeId,
    content: spec.content,
    responseType: spec.responseType,
    ...(spec.options ? { options: spec.options } : {}),
    correctAnswer: spec.correctAnswer,
    ...(spec.acceptedAnswers ? { acceptedAnswers: spec.acceptedAnswers } : {}),
    difficulty: spec.difficulty,
    sourceType: 'manual',
    validatorType: spec.validatorType,
    outcomeIds: spec.outcomeIds,
    subTypeId: spec.subTypeId,
    practiceRole: spec.practiceRole,
    representationType: spec.representationType,
    ...(spec.isMasteryHoldout ? { isMasteryHoldout: true } : {}),
    estimatedSeconds: spec.estimatedSeconds
  })),
  solutions: specs.map(spec => ({
    id: `${spec.id}-solution`,
    questionId: spec.id,
    recognition: spec.solution.recognition,
    detailedSteps: spec.solution.reasoning.map((explanation, index) => ({
      order: index + 1,
      title: `Bước ${index + 1}`,
      explanation
    })),
    finalAnswer: spec.correctAnswer,
    commonMistakes: [spec.solution.commonMistake],
    reviewSuggestions: [spec.solution.reviewSuggestion]
  }))
});

export const expandChemistryPracticeCoverage = (
  questionTypes: import('@/types').QuestionType[],
  specs: ChemistryPracticeExpansionSpec[]
): import('@/types').QuestionType[] => {
  const additionsByType = new Map<string, ChemistryPracticeExpansionSpec[]>();
  for (const spec of specs) {
    const current = additionsByType.get(spec.questionTypeId) ?? [];
    current.push(spec);
    additionsByType.set(spec.questionTypeId, current);
  }

  return questionTypes.map(questionType => {
    const additions = additionsByType.get(questionType.id);
    if (!additions || !questionType.practiceCoverage) return questionType;

    return {
      ...questionType,
      subTypes: questionType.subTypes?.map(subType => ({
        ...subType,
        targetQuestionCount:
          (subType.targetQuestionCount ?? 0)
          + additions.filter(spec => spec.subTypeId === subType.id).length
      })),
      practiceCoverage: {
        ...questionType.practiceCoverage,
        targetQuestionCount:
          questionType.practiceCoverage.targetQuestionCount + additions.length,
        minimumQuestionsPerSubType:
          questionType.practiceCoverage.minimumQuestionsPerSubType
          + Math.min(...(questionType.subTypes ?? []).map(subType =>
            additions.filter(spec => spec.subTypeId === subType.id).length
          ))
      }
    };
  });
};
