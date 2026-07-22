import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule2Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M2-O01', topicId: 'math10-t2', title: 'Bất phương trình bậc nhất hai ẩn', description: 'Kiểm tra một cặp số và biểu diễn nửa mặt phẳng nghiệm, kể cả đường biên.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt3'], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M2-M01'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 70, isCritical: true },
  { id: 'MATH10-M2-O02', topicId: 'math10-t2', title: 'Miền nghiệm của hệ bất phương trình', description: 'Xác định giao các nửa mặt phẳng và tọa độ các đỉnh của miền nghiệm.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt3'], prerequisiteOutcomeIds: ['MATH10-M2-O01'], misconceptionIds: ['MATH10-M2-M02'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 100, isCritical: true },
  { id: 'MATH10-M2-O03', topicId: 'math10-t2', title: 'Bài toán tối ưu tuyến tính', description: 'Chọn biến, lập ràng buộc, hàm mục tiêu và đánh giá giá trị tại các đỉnh khả thi.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt3'], prerequisiteOutcomeIds: ['MATH10-M2-O02'], misconceptionIds: ['MATH10-M2-M03'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120 }
];

export const g10MathModule2Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M2-M01', outcomeId: 'MATH10-M2-O01', statement: 'Đường biên luôn thuộc miền nghiệm.', correction: 'Đường biên chỉ thuộc miền với dấu ≤ hoặc ≥; dấu < hoặc > loại đường biên.', severity: 'critical' },
  { id: 'MATH10-M2-M02', outcomeId: 'MATH10-M2-O02', statement: 'Miền nghiệm của hệ là hợp các miền nghiệm thành phần.', correction: 'Một điểm phải thỏa đồng thời mọi bất phương trình, nên miền nghiệm là phần giao.', severity: 'critical' },
  { id: 'MATH10-M2-M03', outcomeId: 'MATH10-M2-O03', statement: 'Nghiệm tối ưu toán học luôn dùng được trong bài toán thực tế.', correction: 'Phải kiểm tra điều kiện nguyên, không âm và ý nghĩa của biến trước khi kết luận phương án.', severity: 'normal' }
];
