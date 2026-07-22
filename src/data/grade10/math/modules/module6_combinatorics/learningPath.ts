import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule6Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M6-O01', topicId: 'math10-t6', title: 'Quy tắc cộng và quy tắc nhân', description: 'Phân rã một công việc thành các trường hợp loại trừ nhau hoặc các công đoạn liên tiếp để đếm.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt8'], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M6-M01'], evidenceTypes: ['calculation', 'explanation'], estimatedMinutes: 80, isCritical: true },
  { id: 'MATH10-M6-O02', topicId: 'math10-t6', title: 'Hoán vị, chỉnh hợp và tổ hợp', description: 'Nhận diện vai trò của thứ tự, chọn đúng mô hình đếm và xử lí các ràng buộc cơ bản.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt9'], prerequisiteOutcomeIds: ['MATH10-M6-O01'], misconceptionIds: ['MATH10-M6-M02'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 130, isCritical: true },
  { id: 'MATH10-M6-O03', topicId: 'math10-t6', title: 'Nhị thức Newton', description: 'Khai triển nhị thức, xác định số hạng và hệ số theo yêu cầu.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt10'], prerequisiteOutcomeIds: ['MATH10-M6-O02'], misconceptionIds: ['MATH10-M6-M03'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 90 }
];

export const g10MathModule6Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M6-M01', outcomeId: 'MATH10-M6-O01', statement: 'Hễ đề có nhiều lựa chọn thì dùng quy tắc cộng.', correction: 'Dùng cộng cho các trường hợp loại trừ nhau; dùng nhân cho các công đoạn phải thực hiện liên tiếp.', severity: 'critical' },
  { id: 'MATH10-M6-M02', outcomeId: 'MATH10-M6-O02', statement: 'Chọn k phần tử luôn dùng tổ hợp.', correction: 'Nếu vị trí hoặc thứ tự của các phần tử được chọn tạo kết quả khác thì phải dùng chỉnh hợp hoặc mô hình có thứ tự.', severity: 'critical' },
  { id: 'MATH10-M6-M03', outcomeId: 'MATH10-M6-O03', statement: 'Số mũ của hai biến trong một số hạng khai triển biến đổi độc lập.', correction: 'Trong khai triển bậc n, tổng số mũ của hai thừa số trong mỗi số hạng luôn bằng n.', severity: 'normal' }
];
