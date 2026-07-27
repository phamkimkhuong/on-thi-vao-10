import type { GradeCode, SubjectCode } from '@/types';
import type { CourseDataBundle, CourseId } from './schema';

type CourseBundleLoader = () => Promise<CourseDataBundle>;

const courseBundleLoaders: Partial<Record<CourseId, CourseBundleLoader>> = {
  'grade11:physics': () =>
    import('./grade11/physics/course').then(module => module.g11PhysicsCourse),
  'grade11:math': () =>
    import('./grade11/math/course').then(module => module.g11MathCourse)
};

export const getCourseId = (
  grade: GradeCode,
  subject: SubjectCode
): CourseId => `${grade}:${subject}`;

export const loadRegisteredCourseBundle = async (
  grade: GradeCode,
  subject: SubjectCode
): Promise<CourseDataBundle | undefined> => {
  const loader = courseBundleLoaders[getCourseId(grade, subject)];
  return loader?.();
};

export const hasRegisteredCourseBundle = (
  grade: GradeCode,
  subject: SubjectCode
): boolean => Boolean(courseBundleLoaders[getCourseId(grade, subject)]);
