import type {
  AssessmentCognitiveLevel,
  AssessmentCompetency,
  Question,
  Solution
} from '@/types';

export interface TheoryQuestionInput {
  id: string;
  topicId: string;
  questionTypeId: string;
  outcomeIds: string[];
  content: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  difficulty: 'easy' | 'medium' | 'hard';
  cognitiveLevel: AssessmentCognitiveLevel;
  competency?: AssessmentCompetency;
  estimatedSeconds?: number;
}

export const makeTheoryQuestion = (input: TheoryQuestionInput): Question => ({
  ...input,
  subjectId: 'chemistry',
  sourceType: 'mock_exam',
  validatorType: 'choice',
  acceptedAnswers: [input.correctAnswer, input.correctAnswer.toLowerCase()],
  points: 1,
  competency: input.competency ?? 'chemical_cognition',
  estimatedSeconds: input.estimatedSeconds ?? 60
});

export interface TheorySolutionInput {
  questionId: string;
  recognition: string;
  principle: string;
  explanation: string;
  finalAnswer: 'A' | 'B' | 'C' | 'D';
  commonMistakes: string[];
  reviewSuggestions: string[];
}

/**
 * Lời giải lý thuyết luôn mở đầu bằng dấu hiệu nhận dạng và nguyên tắc,
 * giúp học sinh mới biết phải bắt đầu suy luận từ đâu.
 */
export const makeTheorySolution = (input: TheorySolutionInput): Solution => ({
  id: `solution-${input.questionId}`,
  questionId: input.questionId,
  recognition: input.recognition,
  detailedSteps: [
    {
      order: 1,
      title: 'Nhận dạng kiến thức',
      explanation: input.recognition
    },
    {
      order: 2,
      title: 'Nguyên tắc cần nhớ',
      explanation: input.principle
    },
    {
      order: 3,
      title: 'Đối chiếu dữ kiện',
      explanation: input.explanation,
      result: input.finalAnswer
    }
  ],
  finalAnswer: input.finalAnswer,
  commonMistakes: input.commonMistakes,
  reviewSuggestions: input.reviewSuggestions
});
