import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule7Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M7-O01', topicId: 'math10-t7', title: 'Mô tả và biểu diễn mẫu số liệu', description: 'Đọc bảng, biểu đồ; xác định số gần đúng, sai số và các đặc trưng xu thế trung tâm.', scope: 'core', orderIndex: 1, questionTypeIds: [], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M7-M01'], evidenceTypes: ['data', 'calculation'], estimatedMinutes: 110, isCritical: true },
  { id: 'MATH10-M7-O02', topicId: 'math10-t7', title: 'Độ phân tán và giá trị ngoại lệ', description: 'Tính, so sánh khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn và nhận diện ngoại lệ.', scope: 'core', orderIndex: 2, questionTypeIds: [], prerequisiteOutcomeIds: ['MATH10-M7-O01'], misconceptionIds: ['MATH10-M7-M02'], evidenceTypes: ['data', 'calculation', 'explanation'], estimatedMinutes: 130, isCritical: true },
  { id: 'MATH10-M7-O03', topicId: 'math10-t7', title: 'Xác suất theo mô hình cổ điển', description: 'Mô tả không gian mẫu hữu hạn đồng khả năng, đếm biến cố và tính xác suất.', scope: 'core', orderIndex: 3, questionTypeIds: [], prerequisiteOutcomeIds: ['MATH10-M6-O01'], misconceptionIds: ['MATH10-M7-M03'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120, isCritical: true }
];

export const g10MathModule7Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M7-M01', outcomeId: 'MATH10-M7-O01', statement: 'Trung bình cộng luôn đại diện tốt nhất cho mọi mẫu số liệu.', correction: 'Giá trị ngoại lệ có thể kéo lệch trung bình; cần xem trung vị và bối cảnh trước khi chọn đại diện.', severity: 'critical' },
  { id: 'MATH10-M7-M02', outcomeId: 'MATH10-M7-O02', statement: 'Hai mẫu cùng trung bình thì có mức biến động giống nhau.', correction: 'Độ phân tán phải được đánh giá riêng bằng khoảng biến thiên, tứ phân vị, phương sai hoặc độ lệch chuẩn.', severity: 'critical' },
  { id: 'MATH10-M7-M03', outcomeId: 'MATH10-M7-O03', statement: 'Mọi kết quả trong không gian mẫu đều đồng khả năng.', correction: 'Công thức cổ điển chỉ áp dụng trực tiếp khi các kết quả sơ cấp được chọn là đồng khả năng.', severity: 'critical' }
];
