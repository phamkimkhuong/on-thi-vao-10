import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11PhysicsModule1Outcomes: LearningOutcome[] = [
  {
    id: 'out-phy11-m1-01',
    topicId: 'phy11-t01',
    title: 'Mô tả các đại lượng đặc trưng của dao động điều hòa',
    description:
      'Xác định biên độ, chu kì, tần số, tần số góc và pha dao động từ biểu thức hoặc đồ thị li độ–thời gian.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['phy11-qt01'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['misc-phy11-m1-01'],
    evidenceTypes: ['representation', 'calculation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m1-02',
    topicId: 'phy11-t01',
    title: 'Xác định li độ, vận tốc và gia tốc',
    description:
      'Sử dụng biểu thức, đồ thị và hệ thức độc lập thời gian để xác định trạng thái của vật dao động điều hòa.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['phy11-qt02'],
    prerequisiteOutcomeIds: ['out-phy11-m1-01'],
    misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation'],
    estimatedMinutes: 120,
    isCritical: true
  }
];

export const g11PhysicsModule1Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-phy11-m1-01',
    outcomeId: 'out-phy11-m1-01',
    statement: 'Biên độ A có thể mang giá trị âm.',
    title: 'Nhầm dấu của biên độ',
    description: 'Đồng nhất hệ số đứng trước hàm cos với biên độ mà chưa đưa phương trình về dạng chuẩn.',
    correction:
      'Biên độ A luôn dương. Nếu hệ số trước hàm cos âm, cần biến đổi pha để đưa phương trình về dạng chuẩn.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m1-01']
  }
];
