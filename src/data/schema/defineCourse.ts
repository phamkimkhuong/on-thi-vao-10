import { COURSE_DATA_SCHEMA_VERSION } from './types';
import type {
  AssessmentBundle,
  CourseDataBundle,
  CourseModuleData,
  LegacySubjectDataInput,
  SubjectRuntimeData
} from './types';

export const emptyAssessmentBundle = (): AssessmentBundle => ({
  exams: [],
  questions: [],
  solutions: [],
  blueprints: []
});

export const defineCourseModule = (
  module: Omit<
    CourseModuleData,
    'theory' | 'outcomes' | 'misconceptions' | 'practiceBlueprints' | 'assessments' | 'media'
  > &
    Partial<
      Pick<
        CourseModuleData,
        'theory' | 'outcomes' | 'misconceptions' | 'practiceBlueprints' | 'assessments' | 'media'
      >
    >
): CourseModuleData => ({
  ...module,
  theory: module.theory ?? [],
  outcomes: module.outcomes ?? [],
  misconceptions: module.misconceptions ?? [],
  practiceBlueprints: module.practiceBlueprints ?? [],
  assessments: module.assessments ?? emptyAssessmentBundle(),
  media: module.media ?? []
});

export const defineCourse = (
  course: Omit<CourseDataBundle, 'schemaVersion'>
): CourseDataBundle => ({
  ...course,
  schemaVersion: COURSE_DATA_SCHEMA_VERSION
});

export const toSubjectRuntimeData = (
  bundle: CourseDataBundle
): SubjectRuntimeData => {
  const moduleAssessments = bundle.modules.map(module => module.assessments);
  const assessmentQuestions = [
    ...moduleAssessments.flatMap(assessment => assessment.questions),
    ...bundle.assessments.questions
  ];
  const assessmentSolutions = [
    ...moduleAssessments.flatMap(assessment => assessment.solutions),
    ...bundle.assessments.solutions
  ];

  return {
    topics: bundle.modules.flatMap(module => module.topics),
    questionTypes: bundle.modules.flatMap(module => module.questionTypes),
    questions: [
      ...bundle.modules.flatMap(module => module.practiceQuestions),
      ...assessmentQuestions
    ],
    solutions: [
      ...bundle.modules.flatMap(module => module.practiceSolutions),
      ...assessmentSolutions
    ],
    mockExams: [
      ...moduleAssessments.flatMap(assessment => assessment.exams),
      ...bundle.assessments.exams
    ],
    assessmentBlueprints: [
      ...moduleAssessments.flatMap(assessment => assessment.blueprints),
      ...bundle.assessments.blueprints
    ],
    learningOutcomes: bundle.modules.flatMap(module => module.outcomes),
    learningMisconceptions: bundle.modules.flatMap(module => module.misconceptions),
    courseBundle: bundle
  };
};

export const normalizeLegacySubjectData = (
  legacy: LegacySubjectDataInput
): SubjectRuntimeData => ({
  ...legacy,
  assessmentBlueprints: legacy.assessmentBlueprints ?? [],
  learningOutcomes: legacy.learningOutcomes ?? [],
  learningMisconceptions: legacy.learningMisconceptions ?? []
});
