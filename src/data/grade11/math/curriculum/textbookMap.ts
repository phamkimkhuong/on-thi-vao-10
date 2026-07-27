import type { CourseLesson } from '@/data/schema';

const lesson = (
  lessonNumber: number,
  moduleNumber: number,
  title: string,
  kind: CourseLesson['kind'] = 'content'
): CourseLesson => ({
  id: `math11-kntt-l${lessonNumber}`,
  courseId: 'grade11:math',
  moduleId: `math11-m${moduleNumber}`,
  chapterNumber: moduleNumber,
  lessonNumber,
  title,
  kind,
  orderIndex: lessonNumber,
  sourceIds: [
    lessonNumber <= 17
      ? 'math11-source-kntt-textbook-1'
      : 'math11-source-kntt-textbook-2'
  ],
  reviewStatus: 'source_checked'
});

export const g11MathTextbookLessons: CourseLesson[] = [
  // Tập 1 - Chương 1: Hàm số lượng giác và phương trình lượng giác (Module 1)
  lesson(1, 1, 'Giá trị lượng giác của góc lượng giác'),
  lesson(2, 1, 'Công thức lượng giác'),
  lesson(3, 1, 'Hàm số lượng giác'),
  lesson(4, 1, 'Phương trình lượng giác cơ bản'),

  // Tập 1 - Chương 2: Dãy số. Cấp số cộng và cấp số nhân (Module 2)
  lesson(5, 2, 'Dãy số'),
  lesson(6, 2, 'Cấp số cộng'),
  lesson(7, 2, 'Cấp số nhân'),

  // Tập 1 - Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm (Module 3)
  lesson(8, 3, 'Mẫu số liệu ghép nhóm'),
  lesson(9, 3, 'Các số đặc trưng đo xu thế trung tâm'),

  // Tập 1 - Chương 4: Quan hệ song song trong không gian (Module 4)
  lesson(10, 4, 'Đường thẳng và mặt phẳng trong không gian'),
  lesson(11, 4, 'Hai đường thẳng song song'),
  lesson(12, 4, 'Đường thẳng song song với mặt phẳng'),
  lesson(13, 4, 'Hai mặt phẳng song song'),
  lesson(14, 4, 'Phép chiếu song song'),

  // Tập 1 - Chương 5: Giới hạn. Hàm số liên tục (Module 5)
  lesson(15, 5, 'Giới hạn của dãy số'),
  lesson(16, 5, 'Giới hạn của hàm số'),
  lesson(17, 5, 'Hàm số liên tục'),

  // Tập 2 - Chương 6: Hàm số mũ và hàm số lôgarit (Module 6)
  lesson(18, 6, 'Lũy thừa với số mũ thực'),
  lesson(19, 6, 'Lôgarit'),
  lesson(20, 6, 'Hàm số mũ và hàm số lôgarit'),
  lesson(21, 6, 'Phương trình, bất phương trình mũ và lôgarit'),

  // Tập 2 - Chương 7: Quan hệ vuông góc trong không gian (Module 7)
  lesson(22, 7, 'Hai đường thẳng vuông góc'),
  lesson(23, 7, 'Đường thẳng vuông góc với mặt phẳng'),
  lesson(24, 7, 'Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng'),
  lesson(25, 7, 'Hai mặt phẳng vuông góc'),
  lesson(26, 7, 'Khoảng cách'),
  lesson(27, 7, 'Thể tích'),

  // Tập 2 - Chương 8: Các quy tắc tính xác suất (Module 8)
  lesson(28, 8, 'Biến cố hợp, biến cố giao, biến cố độc lập'),
  lesson(29, 8, 'Công thức cộng xác suất'),
  lesson(30, 8, 'Công thức nhân xác suất cho hai biến cố độc lập'),

  // Tập 2 - Chương 9: Đạo hàm (Module 9)
  lesson(31, 9, 'Định nghĩa và ý nghĩa của đạo hàm'),
  lesson(32, 9, 'Các quy tắc tính đạo hàm'),
  lesson(33, 9, 'Đạo hàm cấp hai')
];
