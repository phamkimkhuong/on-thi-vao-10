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

export const g11PhysicsModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('phy11-qt15', [
    { id: 'phy11-qt15-st-pair', name: 'Tương tác hai điện tích', example: 'Tính lực giữa q1 và q2.', targetQuestionCount: 6 },
    { id: 'phy11-qt15-st-superposition', name: 'Tổng hợp nhiều lực điện', example: 'Tìm hợp lực lên một điện tích.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt16', [
    { id: 'phy11-qt16-st-concept', name: 'Nhận thức khái niệm điện trường', example: 'Phân biệt E và F.', targetQuestionCount: 6 },
    { id: 'phy11-qt16-st-force', name: 'Quan hệ lực–điện trường', example: 'Tìm F tác dụng lên điện tích q.', targetQuestionCount: 6 }
  ], ['text', 'diagram']),
  blueprint('phy11-qt17', [
    { id: 'phy11-qt17-st-single', name: 'Điện trường một điện tích điểm', example: 'Tìm E cách Q một khoảng r.', targetQuestionCount: 6 },
    { id: 'phy11-qt17-st-system', name: 'Chồng chất điện trường', example: 'Tìm E tổng hợp của hai điện tích.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt18', [
    { id: 'phy11-qt18-st-read', name: 'Đọc phổ đường sức', example: 'So sánh E tại hai vùng.', targetQuestionCount: 6 },
    { id: 'phy11-qt18-st-draw', name: 'Vẽ và kiểm tra đường sức', example: 'Chọn hình đúng của lưỡng cực.', targetQuestionCount: 6 }
  ], ['diagram', 'text']),
  blueprint('phy11-qt19', [
    { id: 'phy11-qt19-st-field', name: 'E, U và khoảng cách', example: 'Tính E giữa hai bản tụ.', targetQuestionCount: 6 },
    { id: 'phy11-qt19-st-force-work', name: 'Lực và công điện', example: 'Tính công dịch chuyển điện tích.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt20', [
    { id: 'phy11-qt20-st-collinear', name: 'Chuyển động dọc đường sức', example: 'Tìm vận tốc sau khi qua hiệu điện thế.', targetQuestionCount: 6 },
    { id: 'phy11-qt20-st-perpendicular', name: 'Chuyển động vuông góc đường sức', example: 'Tìm độ lệch của chùm hạt.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt21', [
    { id: 'phy11-qt21-st-work', name: 'Công của lực điện', example: 'Tính A khi q dịch chuyển.', targetQuestionCount: 6 },
    { id: 'phy11-qt21-st-energy', name: 'Biến thiên thế năng', example: 'Tìm Wt2 từ công lực điện.', targetQuestionCount: 6 }
  ], ['equation', 'diagram']),
  blueprint('phy11-qt22', [
    { id: 'phy11-qt22-st-potential', name: 'Điện thế tại một điểm', example: 'Tính V từ thế năng và điện tích.', targetQuestionCount: 6 },
    { id: 'phy11-qt22-st-voltage', name: 'Hiệu điện thế và công', example: 'Tính A từ q và UAB.', targetQuestionCount: 6 }
  ], ['equation', 'diagram']),
  blueprint('phy11-qt23', [
    { id: 'phy11-qt23-st-capacitance', name: 'Q, C và U', example: 'Tính điện tích của tụ đã nạp.', targetQuestionCount: 6 },
    { id: 'phy11-qt23-st-application', name: 'Thông số và ứng dụng tụ', example: 'Chọn tụ phù hợp cho thiết bị.', targetQuestionCount: 6 }
  ], ['equation', 'diagram'])
];
