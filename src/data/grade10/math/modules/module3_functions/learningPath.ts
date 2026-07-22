import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule3Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M3-O01', topicId: 'math10-t3', title: 'Khái niệm và biểu diễn hàm số', description: 'Xác định tập xác định, giá trị hàm số và đọc thông tin từ bảng, công thức hoặc đồ thị.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt18'], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M3-M01'], evidenceTypes: ['recognition', 'representation', 'data'], estimatedMinutes: 90, isCritical: true },
  { id: 'MATH10-M3-O02', topicId: 'math10-t3', title: 'Đồ thị hàm số bậc hai', description: 'Xác định chiều mở, đỉnh, trục đối xứng, giao trục và dựng đồ thị parabol.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt4'], prerequisiteOutcomeIds: ['MATH10-M3-O01'], misconceptionIds: ['MATH10-M3-M02'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 120, isCritical: true },
  { id: 'MATH10-M3-O03', topicId: 'math10-t3', title: 'Cực trị và mô hình bậc hai', description: 'Tìm cực trị trên miền xác định và giải thích kết quả trong bài toán thực tế.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt4'], prerequisiteOutcomeIds: ['MATH10-M3-O02'], misconceptionIds: ['MATH10-M3-M03'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120 }
];

export const g10MathModule3Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M3-M01', outcomeId: 'MATH10-M3-O01', statement: 'Mọi công thức đại số đều xác định với mọi số thực.', correction: 'Tập xác định phụ thuộc các phép toán xuất hiện như mẫu số, căn thức và điều kiện của tình huống.', severity: 'critical' },
  { id: 'MATH10-M3-M02', outcomeId: 'MATH10-M3-O02', statement: 'Hoành độ đỉnh của ax²+bx+c là b/(2a).', correction: 'Hoành độ đỉnh là −b/(2a); dấu âm là một phần của công thức.', severity: 'critical' },
  { id: 'MATH10-M3-M03', outcomeId: 'MATH10-M3-O03', statement: 'Đỉnh parabol luôn cho GTLN hoặc GTNN trên mọi đoạn.', correction: 'Nếu đỉnh không thuộc đoạn, cực trị trên đoạn kín đạt tại một đầu mút; luôn phải so sánh các ứng viên hợp lệ.', severity: 'critical' }
];
