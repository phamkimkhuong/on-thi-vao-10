import type { AssessmentBlueprint, MockExam, Question, Solution } from '@/types';

// Chỉ công bố đề thi khi đã có ma trận, đủ số câu và tổng điểm 10.
// Không dùng câu luyện tập đơn lẻ để giả lập một đề giữa kỳ.
export const g11ChemistryAssessmentExams: MockExam[] = [];
export const g11ChemistryAssessmentQuestions: Question[] = [];
export const g11ChemistryAssessmentSolutions: Solution[] = [];
export const g11ChemistryAssessmentBlueprints: AssessmentBlueprint[] = [];
