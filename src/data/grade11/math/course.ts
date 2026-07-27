import { defineCourse, emptyAssessmentBundle } from '@/data/schema';
import { g11MathCurriculum } from './curriculum';
import { g11MathModule1 } from './modules/module1_trigonometry';
import { g11MathModule2 } from './modules/module2_sequences';
import { g11MathModule3 } from './modules/module3_grouped_data';
import { g11MathModule4 } from './modules/module4_parallelism';
import { g11MathModule5 } from './modules/module5_limits';
import { g11MathModule6 } from './modules/module6_exponential_log';
import { g11MathModule7 } from './modules/module7_perpendicularity';
import { g11MathModule8 } from './modules/module8_probability_rules';
import { g11MathModule9 } from './modules/module9_derivatives';
import {
  g11MathAssessmentBlueprints,
  g11MathAssessmentExams,
  g11MathAssessmentQuestions,
  g11MathAssessmentSolutions
} from './assessments';
import { g11MathVideos } from './videos';

export const g11MathCourse = defineCourse({
  course: {
    id: 'grade11:math',
    grade: 'grade11',
    subject: 'math',
    title: 'Toán 11',
    academicYear: '2026-2027',
    curriculumName: 'Chương trình giáo dục phổ thông 2018',
    textbookSeries: 'Kết nối tri thức với cuộc sống',
    contentVersion: '0.1.0',
    reviewStatus: 'draft'
  },
  curriculum: g11MathCurriculum,
  modules: [
    g11MathModule1,
    g11MathModule2,
    g11MathModule3,
    g11MathModule4,
    g11MathModule5,
    g11MathModule6,
    g11MathModule7,
    g11MathModule8,
    g11MathModule9
  ],
  assessments: {
    ...emptyAssessmentBundle(),
    exams: g11MathAssessmentExams,
    questions: g11MathAssessmentQuestions,
    solutions: g11MathAssessmentSolutions,
    blueprints: g11MathAssessmentBlueprints
  },
  media: g11MathVideos
});
