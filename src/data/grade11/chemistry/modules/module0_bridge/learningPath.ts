import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryBridgeOutcomes: LearningOutcome[] = [
  {
    id: 'chem11-bridge-equation',
    topicId: 'chem11-t0',
    title: 'Đọc và cân bằng phương trình hóa học',
    description: 'Đọc đúng hệ số, trạng thái chất và cân bằng phương trình bằng hệ số.',
    scope: 'bridge',
    orderIndex: 1,
    questionTypeIds: ['chem11-bridge-qt-equation'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-bridge-subscript'],
    evidenceTypes: ['representation'],
    estimatedMinutes: 15,
    isCritical: true
  },
  {
    id: 'chem11-bridge-concentration',
    topicId: 'chem11-t0',
    title: 'Tính nồng độ mol',
    description: 'Đổi đúng đơn vị và tính nồng độ mol từ số mol, thể tích dung dịch.',
    scope: 'bridge',
    orderIndex: 2,
    questionTypeIds: ['chem11-bridge-qt-equation'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-bridge-volume'],
    evidenceTypes: ['calculation'],
    estimatedMinutes: 15,
    isCritical: true
  },
  {
    id: 'chem11-bridge-rate-graph',
    topicId: 'chem11-t0',
    title: 'Đọc dữ liệu nồng độ–thời gian',
    description: 'Nhận ra xu hướng biến đổi và khoảng thời gian đại lượng ổn định.',
    scope: 'bridge',
    orderIndex: 3,
    questionTypeIds: ['chem11-bridge-qt-rate-energy'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: [],
    evidenceTypes: ['data'],
    estimatedMinutes: 10
  },
  {
    id: 'chem11-bridge-enthalpy',
    topicId: 'chem11-t0',
    title: 'Phân biệt phản ứng tỏa nhiệt và thu nhiệt',
    description: 'Dùng dấu của biến thiên enthalpy để nhận diện chiều tỏa nhiệt hoặc thu nhiệt.',
    scope: 'bridge',
    orderIndex: 4,
    questionTypeIds: ['chem11-bridge-qt-rate-energy'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-bridge-enthalpy-sign'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 10
  },
  {
    id: 'chem11-bridge-logarithm',
    topicId: 'chem11-t0',
    title: 'Lũy thừa 10 và logarit thập phân',
    description: 'Đổi được giữa lũy thừa cơ số 10 và logarit thập phân trong các phép tính pH đơn giản.',
    scope: 'bridge',
    orderIndex: 5,
    questionTypeIds: ['chem11-bridge-qt-logarithm'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-bridge-log-sign'],
    evidenceTypes: ['calculation', 'representation'],
    estimatedMinutes: 15,
    isCritical: true
  }
];

export const g11ChemistryBridgeMisconceptions: LearningMisconception[] = [
  {
    id: 'chem11-mis-bridge-subscript',
    outcomeId: 'chem11-bridge-equation',
    statement: 'Có thể thay đổi chỉ số trong công thức hóa học để cân bằng phương trình.',
    correction: 'Chỉ được đặt hệ số trước công thức; thay chỉ số sẽ biến chất ban đầu thành chất khác.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-bridge-volume',
    outcomeId: 'chem11-bridge-concentration',
    statement: 'Có thể đưa thể tích theo mL trực tiếp vào công thức $C_M=n/V$.',
    correction: 'Trong công thức nồng độ mol, thể tích dung dịch phải đổi sang lít.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-bridge-enthalpy-sign',
    outcomeId: 'chem11-bridge-enthalpy',
    statement: '$\\Delta H<0$ nghĩa là hệ hấp thụ nhiệt.',
    correction: '$\\Delta H<0$ nghĩa là hệ giải phóng nhiệt ra môi trường, tức phản ứng tỏa nhiệt.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-bridge-log-sign',
    outcomeId: 'chem11-bridge-logarithm',
    statement: '$-\\lg(10^{-3})=-3$.',
    correction: '$\\lg(10^{-3})=-3$ nên $-\\lg(10^{-3})=3$.',
    severity: 'critical'
  }
];
