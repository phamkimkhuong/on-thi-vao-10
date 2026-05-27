export type SubjectCode = 'math' | 'english';

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
  isCorrect: boolean;
  timeSpent: number; // đơn vị: giây
  createdAt: string; // ISO String
}

export interface UserMistake {
  id: string;
  userId: string;
  questionId: string;
  questionTypeId: string;
  wrongAnswer: string;
  reviewStatus: 'new' | 'reviewing' | 'fixed';
  reviewCount: number;
  nextReviewAt: string; // ISO String
  lastAttemptedAt: string; // ISO String
}

export interface UserProgress {
  userId: string;
  // Map từ questionTypeId -> mức độ master (0: chưa học, 1: đang học, 2: đã học, 3: master)
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
    isCorrect: boolean;
  }>;
}
