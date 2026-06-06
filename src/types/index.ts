export type SubjectCode = 'math' | 'english';

export type ValidatorType =
  | 'exact'
  | 'choice'
  | 'number'
  | 'multi-number'
  | 'text-includes'
  | 'manual';

export type AnswerFieldType =
  | 'number'
  | 'fraction'
  | 'expression'
  | 'text'
  | 'choice'
  | 'boolean';

export type AnswerSchemaType =
  | 'single-number'
  | 'equation-roots'
  | 'system-solution'
  | 'expression'
  | 'proof-upload'
  | 'self-check';

export type AutoCheckMode =
  | 'exact'
  | 'numeric'
  | 'unordered-numeric'
  | 'keyed-numeric'
  | 'expression-loose'
  | 'manual';

export type StructuredAnswer = Record<string, string>;

export interface AnswerField {
  key: string;
  label: string;
  valueType: AnswerFieldType;
  placeholder?: string;
  hint?: string;
  required?: boolean;
}

export interface AnswerSchema {
  type: AnswerSchemaType;
  fields: AnswerField[];
  proofImageRequired: boolean;
  orderMatters?: boolean;
  autoCheckMode: AutoCheckMode;
}

export interface ProofImage {
  id: string;
  storagePath: string;
  downloadUrl?: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
  uploadedAt: string;
}

export interface Subject {
  id: string;
  code: SubjectCode;
  name: string;
  isEnabled: boolean;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  slug: string;
  orderIndex: number;
  tier: 1 | 2 | 3; // Chặng học tập: 1 (điểm 5), 2 (điểm 7-8), 3 (điểm 9-10)
}

export interface SubType {
  name: string;
  example: string;
  note?: string;
}

export interface QuestionType {
  id: string;
  topicId: string;
  name: string;
  slug: string;
  description: string;
  recognitionSigns: string[];
  solvingSteps: string[];
  commonMistakes: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  examFrequency: 'low' | 'medium' | 'high';
  exampleQuestionId?: string; // ID câu hỏi dùng làm ví dụ mẫu trong tab "Ví dụ mẫu"
  subTypes?: SubType[]; // Phân dạng bài tập con chi tiết
}


export interface Question {
  id: string;
  subjectId: SubjectCode;
  topicId: string;
  questionTypeId: string;
  content: string; // Hỗ trợ LaTeX
  difficulty: 'easy' | 'medium' | 'hard';
  sourceType: 'manual' | 'official_exam' | 'mock_exam';
  province?: string;
  year?: number;
  options?: string[]; // Dùng cho trắc nghiệm (Tiếng Anh)
  correctAnswer: string;
  acceptedAnswers?: string[];
  validatorType?: ValidatorType;
  answerSchema?: AnswerSchema;
  correctFinalAnswer?: StructuredAnswer;
  acceptedFinalAnswers?: StructuredAnswer[];
}

export interface SolutionStep {
  order: number;
  title: string;
  explanation: string;
  formula?: string; // Ký hiệu toán học LaTeX
  result?: string;
}

export interface Solution {
  id: string;
  questionId: string;
  recognition: string;
  translation?: string; // Dịch nghĩa của câu hỏi tiếng Anh
  detailedSteps: SolutionStep[];
  finalAnswer: string;
  commonMistakes: string[];
  reviewSuggestions: string[]; // Khuyên học sinh ôn lại thẻ kiến thức nào
}

export interface UserAttempt {
  id: string;
  userId: string;
  questionId: string;
  questionTypeId: string;
  userAnswer: string;
  finalAnswer?: StructuredAnswer;
  proofImages?: ProofImage[];
  gradingMode?: 'auto' | 'self-check' | 'manual';
  isCorrect: boolean;
  timeSpent: number; // đơn vị: giây
  createdAt: string; // ISO String
  teacherFeedback?: string;
  selectedSubTense?: string;
}

export interface UserMistake {
  id: string;
  userId: string;
  questionId: string;
  questionTypeId: string;
  wrongAnswer: string;
  proofImages?: ProofImage[];
  reviewStatus: 'new' | 'reviewing' | 'fixed';
  reviewCount: number;
  nextReviewAt: string; // ISO String
  lastAttemptedAt: string; // ISO String
  teacherFeedback?: string;
}

export interface UserProgress {
  userId: string;
  // Map từ questionTypeId -> mastery score 0-100.
  // Chuyển sang sao 0-3 bằng getStarsFromScore trước khi render/unlock UI.
  masteryLevels: Record<string, number>;
  completedLessons: string[]; // Danh sách các bài/dạng bài đã hoàn thành
  lastUpdatedAt: string;
}

export interface MockExam {
  id: string;
  subjectId: SubjectCode;
  title: string;
  duration: number; // đơn vị: phút
  questionIds: string[];
  createdAt: string;
}

export interface ExamResult {
  examId: string;
  score: number;
  correctCount: number;
  totalCount: number;
  timeSpent: number; // đơn vị: giây
  completedAt: string;
  attempts: Record<string, {
    userAnswer: string;
    finalAnswer?: StructuredAnswer;
    proofImages?: ProofImage[];
    isCorrect: boolean;
  }>;
}

export interface SimulatedStudent {
  id: string;
  name: string;
  avatar: string;
  email: string;
}
