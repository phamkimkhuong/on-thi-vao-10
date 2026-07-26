import type { CourseLesson } from '@/data/schema';

const lesson = (
  lessonNumber: number,
  moduleNumber: number,
  title: string,
  kind: CourseLesson['kind'] = 'content'
): CourseLesson => ({
  id: `phy11-kntt-l${lessonNumber}`,
  courseId: 'grade11:physics',
  moduleId: `phy11-m${moduleNumber}`,
  chapterNumber: moduleNumber,
  lessonNumber,
  title,
  kind,
  orderIndex: lessonNumber,
  sourceIds: ['phy11-source-kntt-textbook'],
  reviewStatus: 'source_checked'
});

export const g11PhysicsTextbookLessons: CourseLesson[] = [
  lesson(1, 1, 'Dao động điều hòa'),
  lesson(2, 1, 'Mô tả dao động điều hòa'),
  lesson(3, 1, 'Vận tốc, gia tốc trong dao động điều hòa'),
  lesson(4, 1, 'Bài tập về dao động điều hòa', 'practice'),
  lesson(5, 1, 'Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa'),
  lesson(6, 1, 'Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng'),
  lesson(7, 1, 'Bài tập về sự chuyển hóa năng lượng trong dao động điều hòa', 'practice'),
  lesson(8, 2, 'Mô tả sóng'),
  lesson(9, 2, 'Sóng ngang, sóng dọc, sự truyền năng lượng của sóng cơ'),
  lesson(10, 2, 'Thực hành đo tần số của sóng âm'),
  lesson(11, 2, 'Sóng điện từ'),
  lesson(12, 2, 'Giao thoa sóng'),
  lesson(13, 2, 'Sóng dừng'),
  lesson(14, 2, 'Bài tập về sóng', 'practice'),
  lesson(15, 2, 'Thực hành đo tốc độ truyền âm'),
  lesson(16, 3, 'Lực tương tác giữa các điện tích'),
  lesson(17, 3, 'Khái niệm điện trường'),
  lesson(18, 3, 'Điện trường đều'),
  lesson(19, 3, 'Thế năng điện'),
  lesson(20, 3, 'Điện thế'),
  lesson(21, 3, 'Tụ điện'),
  lesson(22, 4, 'Cường độ dòng điện'),
  lesson(23, 4, 'Điện trở. Định luật Ohm'),
  lesson(24, 4, 'Nguồn điện'),
  lesson(25, 4, 'Năng lượng và công suất điện'),
  lesson(26, 4, 'Thực hành đo suất điện động và điện trở trong của pin điện hóa')
];
