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
  }
];
