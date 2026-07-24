import type { AssessmentBlueprint, MockExam, Question, Solution } from '@/types';
import {
  m1AssessmentBlueprints,
  m1AssessmentExams,
  m1AssessmentQuestions,
  m1AssessmentSolutions
} from '../modules/module1_equilibrium/assessments';
import {
  m2AssessmentBlueprints,
  m2AssessmentExams,
  m2AssessmentQuestions,
  m2AssessmentSolutions
} from '../modules/module2_nitrogen_sulfur/assessments';
import {
  m3AssessmentBlueprints,
  m3AssessmentExams,
  m3AssessmentQuestions,
  m3AssessmentSolutions
} from '../modules/module3_organic_basics/assessments';
import {
  m4AssessmentBlueprints,
  m4AssessmentExams,
  m4AssessmentQuestions,
  m4AssessmentSolutions
} from '../modules/module4_hydrocarbons/assessments';
import {
  m5AssessmentBlueprints,
  m5AssessmentExams,
  m5AssessmentQuestions,
  m5AssessmentSolutions
} from '../modules/module5_halogen_alcohol_phenol/assessments';
import {
  m6AssessmentBlueprints,
  m6AssessmentExams,
  m6AssessmentQuestions,
  m6AssessmentSolutions
} from '../modules/module6_carbonyl_carboxylic_acid/assessments';
import { g11ChemistryTheoryBlueprints, g11ChemistryTheoryExams } from './theory';

// Aggregator chỉ gộp dữ liệu đã được biên soạn ở từng module/nhóm assessment.
// Không đặt câu hỏi hoặc lời giải thô tại file gốc này.
export const g11ChemistryAssessmentExams: MockExam[] = [
  ...g11ChemistryTheoryExams,
  ...m1AssessmentExams,
  ...m2AssessmentExams,
  ...m3AssessmentExams,
  ...m4AssessmentExams,
  ...m5AssessmentExams,
  ...m6AssessmentExams
];
export const g11ChemistryAssessmentQuestions: Question[] = [
  ...m1AssessmentQuestions,
  ...m2AssessmentQuestions,
  ...m3AssessmentQuestions,
  ...m4AssessmentQuestions,
  ...m5AssessmentQuestions,
  ...m6AssessmentQuestions
];
export const g11ChemistryAssessmentSolutions: Solution[] = [
  ...m1AssessmentSolutions,
  ...m2AssessmentSolutions,
  ...m3AssessmentSolutions,
  ...m4AssessmentSolutions,
  ...m5AssessmentSolutions,
  ...m6AssessmentSolutions
];
export const g11ChemistryAssessmentBlueprints: AssessmentBlueprint[] = [
  ...g11ChemistryTheoryBlueprints,
  ...m1AssessmentBlueprints,
  ...m2AssessmentBlueprints,
  ...m3AssessmentBlueprints,
  ...m4AssessmentBlueprints,
  ...m5AssessmentBlueprints,
  ...m6AssessmentBlueprints
];

export { g11ChemistryTheoryBlueprints, g11ChemistryTheoryExams } from './theory';
