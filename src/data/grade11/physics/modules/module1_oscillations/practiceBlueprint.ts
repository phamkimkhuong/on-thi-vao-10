import type { QuestionTypePracticeBlueprint } from '@/types';

export const g11PhysicsModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'phy11-qt01',
    subTypes: [
      {
        id: 'phy11-qt01-st-equation',
        name: 'Đọc đại lượng từ phương trình dao động',
        example: 'Xác định A, ω, φ từ x = A cos(ωt + φ).',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt01-st-graph',
        name: 'Đọc đại lượng từ đồ thị li độ–thời gian',
        example: 'Xác định A và T từ đồ thị x–t.',
        targetQuestionCount: 6
      }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    questionTypeId: 'phy11-qt02',
    subTypes: [
      {
        id: 'phy11-qt02-st-extrema',
        name: 'Giá trị cực đại của vận tốc và gia tốc',
        example: 'Tính vmax và amax từ A, ω.',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt02-st-state',
        name: 'Trạng thái dao động tại một thời điểm hoặc vị trí',
        example: 'Xác định x, v, a và chiều chuyển động.',
        targetQuestionCount: 6
      }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    questionTypeId: 'phy11-qt03',
    subTypes: [
      { id: 'phy11-qt03-st-state', name: 'Năng lượng tại một trạng thái', example: 'Tìm động năng, thế năng tại li độ x.', targetQuestionCount: 6 },
      { id: 'phy11-qt03-st-conservation', name: 'Bảo toàn và chuyển hóa năng lượng', example: 'Tìm vận tốc hoặc vị trí từ bảo toàn cơ năng.', targetQuestionCount: 6 }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    questionTypeId: 'phy11-qt04',
    subTypes: [
      { id: 'phy11-qt04-st-damped', name: 'Dao động tắt dần', example: 'Đọc đồ thị biên độ giảm và giải thích tổn hao.', targetQuestionCount: 6 },
      { id: 'phy11-qt04-st-forced', name: 'Dao động cưỡng bức', example: 'Xác định tần số trạng thái ổn định.', targetQuestionCount: 6 }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['text', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    questionTypeId: 'phy11-qt05',
    subTypes: [
      { id: 'phy11-qt05-st-condition', name: 'Điều kiện và đường cong cộng hưởng', example: 'Đọc đồ thị biên độ–tần số.', targetQuestionCount: 6 },
      { id: 'phy11-qt05-st-application', name: 'Lợi ích và tác hại', example: 'Đề xuất cách hạn chế cộng hưởng có hại.', targetQuestionCount: 6 }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['graph', 'text'],
      masteryHoldoutCount: 2
    }
  },
  {
    questionTypeId: 'phy11-qt06',
    subTypes: [
      { id: 'phy11-qt06-st-design', name: 'Thiết kế và quy trình đo', example: 'Chọn dụng cụ và các bước đo chu kì.', targetQuestionCount: 6 },
      { id: 'phy11-qt06-st-data', name: 'Xử lí dữ liệu thực nghiệm', example: 'Tính chu kì trung bình từ bảng số liệu.', targetQuestionCount: 6 }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'representation_switch', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table'],
      masteryHoldoutCount: 2
    }
  }
];
