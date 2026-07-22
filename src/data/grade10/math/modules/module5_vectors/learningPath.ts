import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule5Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M5-O01', topicId: 'math10-t5', title: 'Vectơ và các phép toán', description: 'Nhận biết vectơ bằng nhau, đối nhau; thực hiện tổng, hiệu và tích vectơ với một số.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt5'], prerequisiteOutcomeIds: [], misconceptionIds: ['MATH10-M5-M01'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 100, isCritical: true },
  { id: 'MATH10-M5-O02', topicId: 'math10-t5', title: 'Biểu diễn vectơ và quan hệ điểm', description: 'Biểu diễn vectơ theo cơ sở, dùng điều kiện cùng phương để xử lí thẳng hàng và chia đoạn.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt5'], prerequisiteOutcomeIds: ['MATH10-M5-O01'], misconceptionIds: ['MATH10-M5-M02'], evidenceTypes: ['calculation', 'explanation'], estimatedMinutes: 120, isCritical: true },
  { id: 'MATH10-M5-O03', topicId: 'math10-t5', title: 'Tích vô hướng và ứng dụng', description: 'Tính tích vô hướng bằng độ dài–góc hoặc tọa độ; vận dụng vào góc, độ dài và vuông góc.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt7'], prerequisiteOutcomeIds: ['MATH10-M5-O01'], misconceptionIds: ['MATH10-M5-M03'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 130, isCritical: true }
];

export const g10MathModule5Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M5-M01', outcomeId: 'MATH10-M5-O01', statement: 'Hai vectơ cùng độ dài thì bằng nhau.', correction: 'Hai vectơ bằng nhau phải cùng hướng và cùng độ dài; vị trí đặt không quan trọng.', severity: 'critical' },
  { id: 'MATH10-M5-M02', outcomeId: 'MATH10-M5-O02', statement: 'Hai vectơ cùng phương luôn chứng minh được ba điểm thẳng hàng.', correction: 'Phải bảo đảm hai vectơ đang xét có các điểm mút liên hệ với ba điểm cần chứng minh.', severity: 'critical' },
  { id: 'MATH10-M5-M03', outcomeId: 'MATH10-M5-O03', statement: 'Góc hình học tại B luôn là góc giữa vectơ AB và BC.', correction: 'Vectơ AB hướng vào B còn BC hướng ra khỏi B, nên góc giữa chúng có thể là góc bù của góc ABC.', severity: 'critical' }
];
