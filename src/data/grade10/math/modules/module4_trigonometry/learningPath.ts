import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule4Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M4-O01', topicId: 'math10-t4', title: 'Giá trị lượng giác của góc', description: 'Xác định dấu, giá trị và các hệ thức lượng giác cơ bản của góc từ 0° đến 180°.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt19'], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M4-M01'], evidenceTypes: ['calculation', 'explanation'], estimatedMinutes: 80, isCritical: true },
  { id: 'MATH10-M4-O02', topicId: 'math10-t4', title: 'Định lí sin, cosin và công thức diện tích', description: 'Chọn và vận dụng công thức phù hợp để tính cạnh, góc, diện tích và bán kính.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt6'], prerequisiteOutcomeIds: ['MATH10-M4-O01'], misconceptionIds: ['MATH10-M4-M02'], evidenceTypes: ['calculation', 'representation'], estimatedMinutes: 120, isCritical: true },
  { id: 'MATH10-M4-O03', topicId: 'math10-t4', title: 'Giải tam giác và đo đạc', description: 'Giải tam giác từ dữ kiện đủ và mô hình hóa bài toán khoảng cách, chiều cao, chuyển động.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt6'], prerequisiteOutcomeIds: ['MATH10-M4-O02'], misconceptionIds: ['MATH10-M4-M03'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 130 }
];

export const g10MathModule4Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M4-M01', outcomeId: 'MATH10-M4-O01', statement: 'Sin và cos của mọi góc từ 0° đến 180° đều dương.', correction: 'Sin dương trong khoảng này, nhưng cos âm với góc tù và bằng 0 tại 90°.', severity: 'critical' },
  { id: 'MATH10-M4-M02', outcomeId: 'MATH10-M4-O02', statement: 'Có thể ghép bất kì cạnh với bất kì góc trong định lí sin.', correction: 'Mỗi tỉ số phải ghép một cạnh với sin của góc đối diện cạnh đó.', severity: 'critical' },
  { id: 'MATH10-M4-M03', outcomeId: 'MATH10-M4-O03', statement: 'Kết quả máy tính là đủ để kết luận bài toán đo đạc.', correction: 'Cần mô hình đúng, chọn đơn vị, làm tròn theo yêu cầu và kiểm tra kết quả có hợp lí trong bối cảnh.', severity: 'normal' }
];
