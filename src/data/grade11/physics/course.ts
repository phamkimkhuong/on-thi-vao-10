import { defineCourse, emptyAssessmentBundle } from '@/data/schema';
import { g11PhysicsCurriculum } from './curriculum';
import { g11PhysicsModule1 } from './modules/module1_oscillations';
import { g11PhysicsModule2 } from './modules/module2_waves';
import { g11PhysicsModule3 } from './modules/module3_electric_field';
import { g11PhysicsModule4 } from './modules/module4_current_circuits';
import {
  g11PhysicsAssessmentBlueprints,
  g11PhysicsAssessmentExams,
  g11PhysicsAssessmentQuestions,
  g11PhysicsAssessmentSolutions
} from './assessments';
import { g11PhysicsVideos } from './videos';

export const g11PhysicsCourse = defineCourse({
  course: {
    id: 'grade11:physics',
    grade: 'grade11',
    subject: 'physics',
    title: 'Vật lí 11',
    academicYear: '2026-2027',
    curriculumName: 'Chương trình giáo dục phổ thông 2018',
    textbookSeries: 'Kết nối tri thức với cuộc sống',
    contentVersion: '0.2.0',
    reviewStatus: 'draft'
  },
  curriculum: g11PhysicsCurriculum,
  modules: [
    g11PhysicsModule1,
    g11PhysicsModule2,
    g11PhysicsModule3,
    g11PhysicsModule4
  ],
  assessments: {
    ...emptyAssessmentBundle(),
    exams: g11PhysicsAssessmentExams,
    questions: g11PhysicsAssessmentQuestions,
    solutions: g11PhysicsAssessmentSolutions,
    blueprints: g11PhysicsAssessmentBlueprints
  },
  media: g11PhysicsVideos
});
