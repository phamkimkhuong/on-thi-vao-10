import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10PhysicsModule5Outcomes: LearningOutcome[] = [
  { id: 'PHY10-M5-O01', topicId: 'phy10-t5', title: 'Góc theo radian', description: 'Đổi và vận dụng góc radian trong mô tả chuyển động tròn.', scope: 'core', orderIndex: 1, questionTypeIds: ['phy10-qt47'], prerequisiteOutcomeIds: ['PHY10-M0-O04'], misconceptionIds: ['PHY10-M5-M01'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 60 },
  { id: 'PHY10-M5-O02', topicId: 'phy10-t5', title: 'Tốc độ góc', description: 'Tính tốc độ góc, chu kì, tần số và liên hệ với tốc độ dài.', scope: 'core', orderIndex: 2, questionTypeIds: ['phy10-qt48', 'phy10-qt49', 'phy10-qt53'], prerequisiteOutcomeIds: ['PHY10-M5-O01', 'PHY10-M1-O03'], misconceptionIds: ['PHY10-M5-M02'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120 },
  { id: 'PHY10-M5-O03', topicId: 'phy10-t5', title: 'Gia tốc hướng tâm', description: 'Xác định hướng, độ lớn gia tốc hướng tâm và giải thích sự đổi hướng vận tốc.', scope: 'core', orderIndex: 3, questionTypeIds: ['phy10-qt50', 'phy10-qt53'], prerequisiteOutcomeIds: ['PHY10-M1-O06', 'PHY10-M5-O02'], misconceptionIds: ['PHY10-M5-M03'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 90 },
  { id: 'PHY10-M5-O04', topicId: 'phy10-t5', title: 'Lực hướng tâm', description: 'Xác định hợp lực đóng vai trò hướng tâm trong từng tình huống, không coi đó là lực mới.', scope: 'core', orderIndex: 4, questionTypeIds: ['phy10-qt51'], prerequisiteOutcomeIds: ['PHY10-M2-O02', 'PHY10-M2-O04', 'PHY10-M5-O03'], misconceptionIds: ['PHY10-M5-M04'], evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 105, isCritical: true },
  { id: 'PHY10-M5-O05', topicId: 'phy10-t5', title: 'Ứng dụng chuyển động tròn', description: 'Vận dụng điều kiện động lực học vào đường cong, vòng quay và thiết bị thực tế.', scope: 'core', orderIndex: 5, questionTypeIds: ['phy10-qt52'], prerequisiteOutcomeIds: ['PHY10-M2-O08', 'PHY10-M2-O09', 'PHY10-M5-O04'], misconceptionIds: ['PHY10-M5-M05'], evidenceTypes: ['calculation', 'application'], estimatedMinutes: 120 }
];

export const g10PhysicsModule5Misconceptions: LearningMisconception[] = [
  { id: 'PHY10-M5-M01', outcomeId: 'PHY10-M5-O01', statement: 'Có thể thay góc theo độ trực tiếp vào s=rθ.', correction: 'Hệ thức s=rθ yêu cầu θ tính bằng radian.', severity: 'critical' },
  { id: 'PHY10-M5-M02', outcomeId: 'PHY10-M5-O02', statement: 'Mọi điểm trên một đĩa quay có cùng tốc độ dài.', correction: 'Các điểm có cùng tốc độ góc nhưng v=ωr nên điểm xa trục có tốc độ dài lớn hơn.', severity: 'critical' },
  { id: 'PHY10-M5-M03', outcomeId: 'PHY10-M5-O03', statement: 'Chuyển động tròn đều có gia tốc bằng 0 vì tốc độ không đổi.', correction: 'Độ lớn vận tốc không đổi nhưng hướng vector đổi, tạo gia tốc hướng vào tâm.', severity: 'critical' },
  { id: 'PHY10-M5-M04', outcomeId: 'PHY10-M5-O04', statement: 'Lực hướng tâm là một lực mới tác dụng thêm vào vật.', correction: 'Đó là tên vai trò của hợp lực các lực thực theo hướng vào tâm.', severity: 'critical' },
  { id: 'PHY10-M5-M05', outcomeId: 'PHY10-M5-O05', statement: 'Phản lực hoặc lực căng có thể nhận giá trị âm để giữ vật trên quỹ đạo.', correction: 'Lực liên kết một chiều không thể âm; giá trị 0 đánh dấu mất tiếp xúc hoặc dây chùng.', severity: 'critical' }
];
