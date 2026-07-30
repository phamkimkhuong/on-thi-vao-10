import type { CourseLesson } from '@/data/schema';

const lesson = (
  lessonNumber: number,
  moduleNumber: number,
  title: string,
  kind: CourseLesson['kind'] = 'content'
): CourseLesson => ({
  id: `bio11-kntt-l${lessonNumber}`,
  courseId: 'grade11:biology',
  moduleId: `bio11-m${moduleNumber}`,
  chapterNumber: moduleNumber,
  lessonNumber,
  title,
  kind,
  orderIndex: lessonNumber,
  sourceIds: ['bio11-source-kntt-textbook'],
  reviewStatus: 'source_checked'
});

export const g11BiologyTextbookLessons: CourseLesson[] = [
  lesson(1, 1, 'Khái quát về trao đổi chất và chuyển hóa năng lượng'),
  lesson(2, 1, 'Trao đổi nước và khoáng ở thực vật'),
  lesson(3, 1, 'Thực hành: Trao đổi nước và khoáng ở thực vật', 'practice'),
  lesson(4, 1, 'Quang hợp ở thực vật'),
  lesson(5, 1, 'Thực hành: Quang hợp ở thực vật', 'practice'),
  lesson(6, 1, 'Hô hấp ở thực vật'),
  lesson(7, 1, 'Thực hành: Hô hấp ở thực vật', 'practice'),
  lesson(8, 1, 'Dinh dưỡng và tiêu hóa ở động vật'),
  lesson(9, 1, 'Hô hấp ở động vật'),
  lesson(10, 1, 'Tuần hoàn ở động vật'),
  lesson(11, 1, 'Thực hành: Một số thí nghiệm về tuần hoàn', 'practice'),
  lesson(12, 1, 'Miễn dịch ở người và động vật'),
  lesson(13, 1, 'Bài tiết và cân bằng nội môi'),
  lesson(14, 2, 'Khái quát về cảm ứng ở sinh vật'),
  lesson(15, 2, 'Cảm ứng ở thực vật'),
  lesson(16, 2, 'Thực hành: Cảm ứng ở thực vật', 'practice'),
  lesson(17, 2, 'Cảm ứng ở động vật'),
  lesson(18, 2, 'Tập tính ở động vật'),
  lesson(19, 3, 'Khái quát về sinh trưởng và phát triển ở sinh vật'),
  lesson(20, 3, 'Sinh trưởng và phát triển ở thực vật'),
  lesson(21, 3, 'Thực hành: Bấm ngọn, tỉa cành, xử lí kích thích tố và tính tuổi cây', 'practice'),
  lesson(22, 3, 'Sinh trưởng và phát triển ở động vật'),
  lesson(23, 3, 'Thực hành: Quan sát biến thái ở động vật', 'practice'),
  lesson(24, 4, 'Khái quát về sinh sản ở sinh vật'),
  lesson(25, 4, 'Sinh sản ở thực vật'),
  lesson(26, 4, 'Thực hành: Nhân giống vô tính và thụ phấn cho cây', 'practice'),
  lesson(27, 4, 'Sinh sản ở động vật'),
  lesson(28, 5, 'Mối quan hệ giữa các quá trình sinh lí trong cơ thể sinh vật'),
  lesson(29, 5, 'Một số ngành nghề liên quan đến sinh học cơ thể')
];
