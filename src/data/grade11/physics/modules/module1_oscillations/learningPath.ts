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
  },
  {
    id: 'out-phy11-m1-03',
    topicId: 'phy11-t01',
    title: 'Phân tích năng lượng trong dao động điều hòa',
    description:
      'Mô tả sự chuyển hóa giữa động năng và thế năng; vận dụng sự bảo toàn cơ năng trong mô hình dao động lí tưởng.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['phy11-qt03'],
    prerequisiteOutcomeIds: ['out-phy11-m1-02'],
    misconceptionIds: ['misc-phy11-m1-02'],
    evidenceTypes: ['representation', 'calculation', 'explanation'],
    estimatedMinutes: 90,
    isCritical: true
  },
  {
    id: 'out-phy11-m1-04',
    topicId: 'phy11-t01',
    title: 'Phân biệt dao động tắt dần và dao động cưỡng bức',
    description:
      'Mô tả đặc điểm, nguyên nhân và sự phụ thuộc của dao động tắt dần, dao động cưỡng bức trong các tình huống thực tế.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['phy11-qt04'],
    prerequisiteOutcomeIds: ['out-phy11-m1-01'],
    misconceptionIds: [],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 60
  },
  {
    id: 'out-phy11-m1-05',
    topicId: 'phy11-t01',
    title: 'Giải thích hiện tượng cộng hưởng',
    description:
      'Nêu điều kiện xảy ra cộng hưởng và phân tích được lợi ích hoặc tác hại của cộng hưởng trong thực tiễn.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['phy11-qt05'],
    prerequisiteOutcomeIds: ['out-phy11-m1-04'],
    misconceptionIds: ['misc-phy11-m1-03'],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'out-phy11-m1-06',
    topicId: 'phy11-t01',
    title: 'Khảo sát dao động bằng thực nghiệm',
    description:
      'Thực hiện hoặc phân tích thí nghiệm đơn giản tạo dao động, thu thập dữ liệu và mô tả đặc điểm của dao động tự do.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['phy11-qt06'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: [],
    evidenceTypes: ['experiment', 'data', 'explanation'],
    estimatedMinutes: 60
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
  },
  {
    id: 'misc-phy11-m1-02',
    outcomeId: 'out-phy11-m1-03',
    statement: 'Động năng và thế năng của vật dao động điều hòa luôn không đổi.',
    title: 'Nhầm đại lượng năng lượng được bảo toàn',
    description: 'Không phân biệt từng dạng năng lượng với tổng cơ năng của hệ lí tưởng.',
    correction:
      'Động năng và thế năng biến thiên, chuyển hóa qua lại; tổng cơ năng mới không đổi khi bỏ qua lực cản.',
    severity: 'critical',
    remediationOutcomeIds: ['out-phy11-m1-03']
  },
  {
    id: 'misc-phy11-m1-03',
    outcomeId: 'out-phy11-m1-05',
    statement: 'Mọi dao động cưỡng bức đều là cộng hưởng.',
    title: 'Đồng nhất dao động cưỡng bức với cộng hưởng',
    description: 'Bỏ qua điều kiện tần số lực cưỡng bức gần bằng tần số riêng của hệ.',
    correction:
      'Cộng hưởng là trường hợp đặc biệt của dao động cưỡng bức khi tần số cưỡng bức phù hợp với tần số riêng.',
    severity: 'normal',
    remediationOutcomeIds: ['out-phy11-m1-04', 'out-phy11-m1-05']
  }
];
