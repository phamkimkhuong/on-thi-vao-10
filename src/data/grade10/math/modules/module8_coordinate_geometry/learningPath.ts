import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10MathModule8Outcomes: LearningOutcome[] = [
  { id: 'MATH10-M8-O01', topicId: 'math10-t8', title: 'Phương trình đường thẳng', description: 'Lập và chuyển đổi phương trình đường thẳng từ điểm, vectơ chỉ phương hoặc vectơ pháp tuyến.', scope: 'core', orderIndex: 1, questionTypeIds: ['math10-qt14'], prerequisiteOutcomeIds: ['MATH10-M5-O01'], misconceptionIds: ['MATH10-M8-M01'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 130, isCritical: true },
  { id: 'MATH10-M8-O02', topicId: 'math10-t8', title: 'Vị trí, góc và khoảng cách', description: 'Xét vị trí tương đối, tính góc giữa hai đường và khoảng cách từ điểm đến đường thẳng.', scope: 'core', orderIndex: 2, questionTypeIds: ['math10-qt14'], prerequisiteOutcomeIds: ['MATH10-M8-O01', 'MATH10-M5-O03'], misconceptionIds: ['MATH10-M8-M02'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120, isCritical: true },
  { id: 'MATH10-M8-O03', topicId: 'math10-t8', title: 'Đường tròn trong mặt phẳng tọa độ', description: 'Nhận dạng và lập phương trình đường tròn; xác định tâm, bán kính và tiếp tuyến đơn giản.', scope: 'core', orderIndex: 3, questionTypeIds: ['math10-qt15'], prerequisiteOutcomeIds: ['MATH10-M8-O01'], misconceptionIds: ['MATH10-M8-M03'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 120 },
  { id: 'MATH10-M8-O04', topicId: 'math10-t8', title: 'Ba đường conic', description: 'Nhận biết dạng chính tắc và khai thác các yếu tố cơ bản của elip, hypebol, parabol.', scope: 'core', orderIndex: 4, questionTypeIds: ['math10-qt16'], prerequisiteOutcomeIds: ['MATH10-M3-O02'], misconceptionIds: ['MATH10-M8-M04'], evidenceTypes: ['recognition', 'representation', 'calculation'], estimatedMinutes: 130 }
];

export const g10MathModule8Misconceptions: LearningMisconception[] = [
  { id: 'MATH10-M8-M01', outcomeId: 'MATH10-M8-O01', statement: 'Cặp (a,b) trong ax+by+c=0 là vectơ chỉ phương.', correction: 'Cặp (a,b) là vectơ pháp tuyến; một vectơ chỉ phương có thể là (b,−a).', severity: 'critical' },
  { id: 'MATH10-M8-M02', outcomeId: 'MATH10-M8-O02', statement: 'Hai đường có hệ số góc khác nhau thì vuông góc.', correction: 'Khác hệ số góc chỉ cho biết chúng không song song; vuông góc cần điều kiện tích hệ số góc bằng −1 khi cả hai hệ số tồn tại.', severity: 'critical' },
  { id: 'MATH10-M8-M03', outcomeId: 'MATH10-M8-O03', statement: 'Trong (x−a)²+(y−b)²=R², tâm là (−a,−b).', correction: 'Tâm là (a,b); dấu trong tọa độ tâm đối với hệ số sau khi khai triển mới cần xử lí cẩn thận.', severity: 'critical' },
  { id: 'MATH10-M8-M04', outcomeId: 'MATH10-M8-O04', statement: 'Mọi phương trình bậc hai theo x và y đều là đường tròn.', correction: 'Dấu và hệ số của các bình phương quyết định loại conic; đường tròn chỉ là một trường hợp đặc biệt.', severity: 'normal' }
];
