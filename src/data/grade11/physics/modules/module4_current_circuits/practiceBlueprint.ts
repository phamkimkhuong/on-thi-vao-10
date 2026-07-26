import type {
  PracticeRole,
  QuestionRepresentationType,
  QuestionTypePracticeBlueprint
} from '@/types';

const blueprint = (
  questionTypeId: string,
  subTypes: QuestionTypePracticeBlueprint['subTypes'],
  requiredRepresentations: QuestionRepresentationType[],
  requiredPracticeRoles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check']
): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: {
    targetQuestionCount: 12,
    minimumQuestionsPerSubType: 3,
    requiredPracticeRoles,
    requiredRepresentations,
    masteryHoldoutCount: 2
  }
});

export const g11PhysicsModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('phy11-qt24', [
    { id: 'phy11-qt24-st-microscopic', name: 'Tính I từ mô hình vi mô', example: 'Tính I từ n, S, v.', targetQuestionCount: 6 },
    { id: 'phy11-qt24-st-drift', name: 'Suy ra tốc độ trôi hoặc mật độ hạt', example: 'Tìm v khi biết I.', targetQuestionCount: 6 }
  ], ['equation', 'diagram']),
  blueprint('phy11-qt25', [
    { id: 'phy11-qt25-st-charge', name: 'I, q và thời gian', example: 'Tính q qua dây trong t giây.', targetQuestionCount: 6 },
    { id: 'phy11-qt25-st-carriers', name: 'Số hạt tải điện', example: 'Tính số electron qua tiết diện.', targetQuestionCount: 6 }
  ], ['equation', 'table']),
  blueprint('phy11-qt26', [
    { id: 'phy11-qt26-st-material', name: 'Điện trở vật dẫn', example: 'Tính R từ ρ, l, S.', targetQuestionCount: 6 },
    { id: 'phy11-qt26-st-temperature', name: 'Nhiệt độ và điện trở nhiệt', example: 'Đọc đặc tính thermistor.', targetQuestionCount: 6 }
  ], ['equation', 'graph']),
  blueprint('phy11-qt27', [
    { id: 'phy11-qt27-st-ohmic', name: 'Đặc tuyến vật dẫn Ohm', example: 'Tìm R từ đường thẳng I–U.', targetQuestionCount: 6 },
    { id: 'phy11-qt27-st-nonlinear', name: 'Đặc tuyến phi tuyến', example: 'So sánh R tại hai điểm của linh kiện.', targetQuestionCount: 6 }
  ], ['graph', 'table']),
  blueprint('phy11-qt28', [
    { id: 'phy11-qt28-st-basic', name: 'U, I và R', example: 'Tính I qua điện trở.', targetQuestionCount: 6 },
    { id: 'phy11-qt28-st-condition', name: 'Điều kiện áp dụng định luật Ohm', example: 'Đánh giá linh kiện từ bảng I–U.', targetQuestionCount: 6 }
  ], ['equation', 'graph']),
  blueprint('phy11-qt29', [
    { id: 'phy11-qt29-st-closed', name: 'Mạch kín có điện trở trong', example: 'Tính I và U của nguồn.', targetQuestionCount: 6 },
    { id: 'phy11-qt29-st-state', name: 'Hở mạch, ngắn mạch và hiệu suất', example: 'So sánh U ở các chế độ tải.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt30', [
    { id: 'phy11-qt30-st-calculation', name: 'Điện năng và công suất', example: 'Tính điện năng tiêu thụ trong tháng.', targetQuestionCount: 6 },
    { id: 'phy11-qt30-st-application', name: 'Hiệu quả và an toàn điện', example: 'Chọn thiết bị hoặc dây dẫn phù hợp.', targetQuestionCount: 6 }
  ], ['table', 'equation'], ['guided', 'near_transfer', 'far_transfer']),
  blueprint('phy11-qt31', [
    { id: 'phy11-qt31-st-circuit', name: 'Sơ đồ và quy trình đo', example: 'Chọn cách mắc ampe kế, vôn kế.', targetQuestionCount: 6 },
    { id: 'phy11-qt31-st-data', name: 'Xử lí bảng và đồ thị U–I', example: 'Tìm E và r từ đường thẳng.', targetQuestionCount: 6 }
  ], ['experiment', 'graph'], ['guided', 'representation_switch', 'far_transfer'])
];
