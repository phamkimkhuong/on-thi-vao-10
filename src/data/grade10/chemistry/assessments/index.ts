import { m1AssessmentQuestions, m1AssessmentSolutions } from '../modules/module1_atoms/assessments';
import { m2AssessmentQuestions, m2AssessmentSolutions } from '../modules/module2_periodic/assessments';
import { m3AssessmentQuestions, m3AssessmentSolutions } from '../modules/module3_bond/assessments';
import { m4AssessmentQuestions, m4AssessmentSolutions } from '../modules/module4_redox/assessments';
import { m5AssessmentQuestions, m5AssessmentSolutions } from '../modules/module5_energy/assessments';
import { m6AssessmentQuestions, m6AssessmentSolutions } from '../modules/module6_rate/assessments';
import { m7AssessmentQuestions, m7AssessmentSolutions } from '../modules/module7_halogen/assessments';
import { module1CheckpointExams } from './exams/module1Checkpoint';
import { module2CheckpointExams } from './exams/module2Checkpoint';
import { module3CheckpointExams } from './exams/module3Checkpoint';
import { module4CheckpointExams } from './exams/module4Checkpoint';
import { module5CheckpointExams } from './exams/module5Checkpoint';
import { module6CheckpointExams } from './exams/module6Checkpoint';
import { module7CheckpointExams } from './exams/module7Checkpoint';
import { midterm1Questions, midterm1Solutions } from './midterm1';
import { final2Questions, final2Solutions } from './final2';
import { g10ChemistryPeriodicAutoQuestions, g10ChemistryPeriodicAutoSolutions } from './periodicAuto';
import { midterm1Exams } from './exams/midterm1';
import { final1Exams } from './exams/final1';
import { midterm2Exams } from './exams/midterm2';
import { final2Exams } from './exams/final2';
import { chemistryTheoryExams } from './exams/theory';
import { module1CheckpointBlueprint } from './blueprints/module1Checkpoint';
import { module2CheckpointBlueprint } from './blueprints/module2Checkpoint';
import { module3CheckpointBlueprint } from './blueprints/module3Checkpoint';
import { module4CheckpointBlueprint } from './blueprints/module4Checkpoint';
import { module5CheckpointBlueprint } from './blueprints/module5Checkpoint';
import { module6CheckpointBlueprint } from './blueprints/module6Checkpoint';
import { module7CheckpointBlueprint } from './blueprints/module7Checkpoint';
import { midterm1Blueprint } from './blueprints/midterm1';
import { final1Blueprint } from './blueprints/final1';
import { midterm2Blueprint } from './blueprints/midterm2';
import { final2Blueprint } from './blueprints/final2';
import { chemistryTheoryModuleBlueprints, chemistryTheoryComprehensiveBlueprint } from './blueprints/theory';

export { module1CheckpointBlueprint } from './blueprints/module1Checkpoint';
export { module2CheckpointBlueprint } from './blueprints/module2Checkpoint';
export { module3CheckpointBlueprint } from './blueprints/module3Checkpoint';
export { module4CheckpointBlueprint } from './blueprints/module4Checkpoint';
export { module5CheckpointBlueprint } from './blueprints/module5Checkpoint';
export { module6CheckpointBlueprint } from './blueprints/module6Checkpoint';
export { module7CheckpointBlueprint } from './blueprints/module7Checkpoint';
export { midterm1Blueprint } from './blueprints/midterm1';
export { final1Blueprint } from './blueprints/final1';
export { midterm2Blueprint } from './blueprints/midterm2';
export { final2Blueprint } from './blueprints/final2';
export { chemistryTheoryModuleBlueprints, chemistryTheoryComprehensiveBlueprint } from './blueprints/theory';
export const g10ChemistryAssessmentBlueprints = [
  module1CheckpointBlueprint,
  module2CheckpointBlueprint,
  module3CheckpointBlueprint,
  module4CheckpointBlueprint,
  module5CheckpointBlueprint,
  module6CheckpointBlueprint,
  module7CheckpointBlueprint,
  midterm1Blueprint,
  final1Blueprint,
  midterm2Blueprint,
  final2Blueprint,
  ...chemistryTheoryModuleBlueprints,
  chemistryTheoryComprehensiveBlueprint
];
export const g10ChemistryAssessmentExams = [...module1CheckpointExams, ...module2CheckpointExams, ...module3CheckpointExams, ...module4CheckpointExams, ...module5CheckpointExams, ...module6CheckpointExams, ...module7CheckpointExams, ...chemistryTheoryExams, ...midterm1Exams, ...final1Exams, ...midterm2Exams, ...final2Exams];

const newPeriodicQuestions = g10ChemistryPeriodicAutoQuestions.filter(question =>
  question.id.startsWith('chem10-assess-final1-') || question.id.startsWith('chem10-assess-mid2-')
);
const newPeriodicSolutions = g10ChemistryPeriodicAutoSolutions.filter(solution =>
  solution.questionId.startsWith('chem10-assess-final1-') || solution.questionId.startsWith('chem10-assess-mid2-')
);

export const g10ChemistryAssessmentQuestions = [...m1AssessmentQuestions, ...m2AssessmentQuestions, ...m3AssessmentQuestions, ...m4AssessmentQuestions, ...m5AssessmentQuestions, ...m6AssessmentQuestions, ...m7AssessmentQuestions, ...midterm1Questions, ...newPeriodicQuestions, ...final2Questions];
export const g10ChemistryAssessmentSolutions = [...m1AssessmentSolutions, ...m2AssessmentSolutions, ...m3AssessmentSolutions, ...m4AssessmentSolutions, ...m5AssessmentSolutions, ...m6AssessmentSolutions, ...m7AssessmentSolutions, ...midterm1Solutions, ...newPeriodicSolutions, ...final2Solutions];
