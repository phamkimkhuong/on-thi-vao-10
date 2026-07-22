import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule1Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M1-O01', topicId: 'math10-t1', title: 'Mệnh đề và phép toán logic', description: 'Nhận biết mệnh đề, phủ định, mệnh đề kéo theo, tương đương và xác định tính đúng sai trong tình huống phù hợp.', scope: 'core', orderIndex: 1, questionTypeIds: [], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M1-M01'], evidenceTypes: ['recognition', 'explanation'], estimatedMinutes: 60, isCritical: true },
  { id: 'MATH10-M1-O02', topicId: 'math10-t1', title: 'Biểu diễn và phép toán tập hợp', description: 'Biểu diễn tập hợp bằng kí hiệu, khoảng–đoạn và thực hiện giao, hợp, hiệu, phần bù.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt1'], prerequisiteOutcomeIds: ['MATH10-M1-O01'], misconceptionIds: ['MATH10-M1-M02'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 90, isCritical: true },
  { id: 'MATH10-M1-O03', topicId: 'math10-t1', title: 'Tập hợp chứa tham số', description: 'Chuyển điều kiện giao, rời nhau hoặc tập con thành hệ điều kiện đúng trên các đầu mút.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt2'], prerequisiteOutcomeIds: ['MATH10-M1-O02'], misconceptionIds: ['MATH10-M1-M03'], evidenceTypes: ['calculation', 'explanation'], estimatedMinutes: 100, isCritical: true }
];

export const g10MathModule1Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M1-M01', outcomeId: 'MATH10-M1-O01', statement: 'Phủ định một mệnh đề chỉ cần thêm từ “không” vào câu ban đầu.', correction: 'Phủ định phải đổi đúng lượng từ và quan hệ để có giá trị đúng sai đối lập với mệnh đề gốc.', severity: 'critical' },
  { id: 'MATH10-M1-M02', outcomeId: 'MATH10-M1-O02', statement: 'Đầu mút xuất hiện trong công thức của khoảng thì luôn thuộc kết quả.', correction: 'Phải kiểm tra dấu ngoặc và phép toán tại từng đầu mút; việc viết cùng một số không quyết định nó được lấy.', severity: 'critical' },
  { id: 'MATH10-M1-M03', outcomeId: 'MATH10-M1-O03', statement: 'Điều kiện giao khác rỗng và điều kiện tập con có thể giải bằng cùng một bất đẳng thức.', correction: 'Giao khác rỗng chỉ cần có điểm chung; tập con yêu cầu mọi điểm của tập thứ nhất nằm trong tập thứ hai.', severity: 'critical' }
];
