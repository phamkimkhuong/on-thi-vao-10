import type { GradeCode, SubjectCode } from './index';

export type SurveyQuestionType =
  | 'single_choice'
  | 'multi_choice'
  | 'emoji_scale'
  | 'nps'
  | 'free_text';

export interface SurveyOption {
  id: string;
  label: string;
  subLabel?: string;
  icon?: string;
  value: string;
  hasInput?: boolean;
  inputPlaceholder?: string;
}

export interface SurveyQuestion {
  id: string;
  title: string;
  description?: string;
  type: SurveyQuestionType;
  options?: SurveyOption[] | ((answers: Record<string, any>) => SurveyOption[]);
  placeholder?: string;
  isOptional?: boolean;
}

export interface SurveyConfig {
  id: string;
  title: string;
  subtitle: string;
  questions: SurveyQuestion[];
}

export interface UnifiedSurveyResponse {
  grade?: GradeCode;
  goal?: string;
  preferredSubject?: SubjectCode;
  selfAssessedLevel?: string;
  primaryDevice?: string;
  uiRating?: number; // 1 to 5
  wishedFeatures?: string[];
  studyHurdles?: string;
  npsScore?: number; // 0 to 10
  additionalComments?: string;
  completedAt: string;
}

export interface UserSurveyState {
  completed: boolean;
  data?: UnifiedSurveyResponse;
}
