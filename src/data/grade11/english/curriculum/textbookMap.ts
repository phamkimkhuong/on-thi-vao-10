import type { CourseLesson } from '@/data/schema';

const unitTitles = [
  'A Long and Healthy Life',
  'The Generation Gap',
  'Cities of the Future',
  'ASEAN and Viet Nam',
  'Global Warming',
  'Preserving Our Heritage',
  'Education Options for School-Leavers',
  'Becoming Independent',
  'Social Issues',
  'The Ecosystem'
] as const;

const sections = [
  ['getting-started', 'Getting Started', 'content'],
  ['language', 'Language', 'content'],
  ['reading', 'Reading', 'content'],
  ['speaking', 'Speaking', 'content'],
  ['listening', 'Listening', 'content'],
  ['writing', 'Writing', 'content'],
  ['communication-culture', 'Communication and Culture / CLIL', 'content'],
  ['looking-back-project', 'Looking Back and Project', 'practice']
] as const;

const reviewAfterUnit = new Map([
  [3, 1],
  [5, 2],
  [8, 3],
  [10, 4]
]);

const lessons: CourseLesson[] = [];
let orderIndex = 1;

unitTitles.forEach((unitTitle, unitIndex) => {
  const unitNumber = unitIndex + 1;
  sections.forEach(([sectionId, sectionTitle, kind]) => {
    lessons.push({
      id: `eng11-u${unitNumber}-${sectionId}`,
      courseId: 'grade11:english',
      moduleId: `eng11-m${unitNumber}`,
      chapterNumber: unitNumber,
      lessonNumber: orderIndex,
      title: `Unit ${unitNumber}: ${unitTitle} — ${sectionTitle}`,
      kind,
      orderIndex,
      sourceIds: ['eng11-source-global-success-textbook'],
      reviewStatus: 'source_checked'
    });
    orderIndex += 1;
  });

  const reviewNumber = reviewAfterUnit.get(unitNumber);
  if (reviewNumber) {
    lessons.push({
      id: `eng11-review-${reviewNumber}`,
      courseId: 'grade11:english',
      moduleId: `eng11-m${unitNumber}`,
      chapterNumber: unitNumber,
      lessonNumber: orderIndex,
      title: `Review ${reviewNumber}`,
      kind: 'review',
      orderIndex,
      sourceIds: ['eng11-source-global-success-textbook'],
      reviewStatus: 'source_checked'
    });
    orderIndex += 1;
  }
});

export const g11EnglishTextbookLessons = lessons;
