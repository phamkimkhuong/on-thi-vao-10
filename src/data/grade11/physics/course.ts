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

import {
  normalizePhysics11PracticeModules,
  normalizePhysics11Assessments
} from './practiceChoiceNormalizer';

const g11PhysicsPracticeModules = normalizePhysics11PracticeModules([
  g11PhysicsModule1,
  g11PhysicsModule2,
  g11PhysicsModule3,
  g11PhysicsModule4
]);

const g11PhysicsNormalizedAssessments = normalizePhysics11Assessments({
  ...emptyAssessmentBundle(),
  exams: g11PhysicsAssessmentExams,
  questions: g11PhysicsAssessmentQuestions,
  solutions: g11PhysicsAssessmentSolutions,
  blueprints: g11PhysicsAssessmentBlueprints
});

export const g11PhysicsCourse = defineCourse({
  course: {
    id: 'grade11:physics',
    grade: 'grade11',
    subject: 'physics',
    title: 'Vật lí 11',
    academicYear: '2026-2027',
    curriculumName: 'Chương trình giáo dục phổ thông 2018',
    textbookSeries: 'Kết nối tri thức với cuộc sống',
    contentVersion: '0.7.0',
    reviewStatus: 'draft'
  },
  curriculum: g11PhysicsCurriculum,
  modules: g11PhysicsPracticeModules,
  assessments: g11PhysicsNormalizedAssessments,
  media: g11PhysicsVideos
});
