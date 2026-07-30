import { defineCourse, emptyAssessmentBundle } from '@/data/schema';
import { g11EnglishCurriculum } from './curriculum';
import { g11EnglishModule1 } from './modules/module1_healthy_life';
import { g11EnglishModule2 } from './modules/module2_generation_gap';
import { g11EnglishModule3 } from './modules/module3_future_cities';
import { g11EnglishModule4 } from './modules/module4_asean_vietnam';
import { g11EnglishModule5 } from './modules/module5_global_warming';
import { g11EnglishModule6 } from './modules/module6_heritage';
import { g11EnglishModule7 } from './modules/module7_education_options';
import { g11EnglishModule8 } from './modules/module8_independence';
import { g11EnglishModule9 } from './modules/module9_social_issues';
import { g11EnglishModule10 } from './modules/module10_ecosystem';
import {
  g11EnglishAssessmentBlueprints,
  g11EnglishAssessmentExams,
  g11EnglishAssessmentQuestions,
  g11EnglishAssessmentSolutions
} from './assessments';
import { buildDetailedEnglishSolutions } from './solutionBuilder';

const learningModules = [
  g11EnglishModule1,
  g11EnglishModule2,
  g11EnglishModule3,
  g11EnglishModule4,
  g11EnglishModule5,
  g11EnglishModule6,
  g11EnglishModule7,
  g11EnglishModule8,
  g11EnglishModule9,
  g11EnglishModule10
].map(module => ({
  ...module,
  practiceSolutions: buildDetailedEnglishSolutions(
    module.practiceQuestions,
    module.practiceSolutions
  )
}));

export const g11EnglishCourse = defineCourse({
  course: {
    id: 'grade11:english',
    grade: 'grade11',
    subject: 'english',
    title: 'Tiếng Anh 11',
    academicYear: '2026-2027',
    curriculumName: 'Chương trình giáo dục phổ thông 2018',
    textbookSeries: 'Tiếng Anh 11 - Global Success (Kết nối tri thức với cuộc sống)',
    contentVersion: '0.7.0',
    reviewStatus: 'draft'
  },
  curriculum: g11EnglishCurriculum,
  modules: learningModules,
  assessments: {
    ...emptyAssessmentBundle(),
    exams: g11EnglishAssessmentExams,
    questions: g11EnglishAssessmentQuestions,
    solutions: g11EnglishAssessmentSolutions,
    blueprints: g11EnglishAssessmentBlueprints
  },
  media: []
});
