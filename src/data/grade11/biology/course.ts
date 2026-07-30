import { defineCourse, emptyAssessmentBundle } from '@/data/schema';
import { g11BiologyCurriculum } from './curriculum';
import { g11BiologyModule1 } from './modules/module1_metabolism';
import { g11BiologyModule2 } from './modules/module2_response';
import { g11BiologyModule3 } from './modules/module3_growth';
import { g11BiologyModule4 } from './modules/module4_reproduction';
import { g11BiologyModule5 } from './modules/module5_integration';
import {
  g11BiologyAssessmentBlueprints,
  g11BiologyAssessmentExams,
  g11BiologyAssessmentQuestions,
  g11BiologyAssessmentSolutions
} from './assessments';

export const g11BiologyCourse = defineCourse({
  course: {
    id: 'grade11:biology',
    grade: 'grade11',
    subject: 'biology',
    title: 'Sinh học 11',
    academicYear: '2026-2027',
    curriculumName: 'Chương trình giáo dục phổ thông 2018',
    textbookSeries: 'Kết nối tri thức với cuộc sống',
    contentVersion: '1.0.0',
    reviewStatus: 'draft'
  },
  curriculum: g11BiologyCurriculum,
  modules: [
    g11BiologyModule1,
    g11BiologyModule2,
    g11BiologyModule3,
    g11BiologyModule4,
    g11BiologyModule5
  ],
  assessments: {
    ...emptyAssessmentBundle(),
    exams: g11BiologyAssessmentExams,
    questions: g11BiologyAssessmentQuestions,
    solutions: g11BiologyAssessmentSolutions,
    blueprints: g11BiologyAssessmentBlueprints
  },
  media: []
});
