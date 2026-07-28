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
): QuestionTypePracticeBlueprint => {
  const targetQuestionCount =
    questionTypeId === 'phy11-qt12' || questionTypeId === 'phy11-qt13'
      ? 24
      : questionTypeId === 'phy11-qt07' || questionTypeId === 'phy11-qt08'
        ? 18
        : 12;
  return {
  questionTypeId,
  subTypes: subTypes.map(subType => ({
    ...subType,
    targetQuestionCount: targetQuestionCount / 2
  })),
  coverage: {
    targetQuestionCount,
    minimumQuestionsPerSubType: targetQuestionCount === 12 ? 3 : 6,
    requiredPracticeRoles: [
      ...new Set([
        ...requiredPracticeRoles,
        ...(targetQuestionCount > 12 ? ['far_transfer' as const] : [])
      ])
    ],
    requiredRepresentations,
    masteryHoldoutCount: targetQuestionCount === 24 ? 6 : targetQuestionCount === 18 ? 4 : 2
  }
  };
};

export const g11PhysicsModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('phy11-qt07', [
    { id: 'phy11-qt07-st-space', name: 'Đồ thị độ dịch chuyển–vị trí', example: 'Đọc A và λ từ đồ thị u–x.', targetQuestionCount: 6 },
    { id: 'phy11-qt07-st-time', name: 'Đồ thị độ dịch chuyển–thời gian', example: 'Đọc A và T từ đồ thị u–t.', targetQuestionCount: 6 }
  ], ['graph', 'equation']),
  blueprint('phy11-qt08', [
    { id: 'phy11-qt08-st-calculation', name: 'Tính v, λ, f, T', example: 'Tính bước sóng từ tốc độ và tần số.', targetQuestionCount: 6 },
    { id: 'phy11-qt08-st-energy', name: 'Truyền năng lượng', example: 'Giải thích vật nổi không đi theo gợn sóng.', targetQuestionCount: 6 }
  ], ['equation', 'diagram']),
  blueprint('phy11-qt09', [
    { id: 'phy11-qt09-st-classify', name: 'Phân loại từ mô tả', example: 'Phân loại sóng trên dây và sóng âm.', targetQuestionCount: 6 },
    { id: 'phy11-qt09-st-medium', name: 'Loại sóng và môi trường', example: 'Chọn môi trường truyền được sóng cơ.', targetQuestionCount: 6 }
  ], ['text', 'diagram']),
  blueprint('phy11-qt10', [
    { id: 'phy11-qt10-st-procedure', name: 'Thiết bị và quy trình đo', example: 'Sắp xếp các bước dùng micro và phần mềm.', targetQuestionCount: 6 },
    { id: 'phy11-qt10-st-signal', name: 'Xử lí tín hiệu âm', example: 'Tính f từ đồ thị điện áp–thời gian.', targetQuestionCount: 6 }
  ], ['experiment', 'graph'], ['guided', 'representation_switch', 'far_transfer']),
  blueprint('phy11-qt11', [
    { id: 'phy11-qt11-st-spectrum', name: 'Thứ tự và đại lượng phổ', example: 'So sánh λ của tia hồng ngoại và tử ngoại.', targetQuestionCount: 6 },
    { id: 'phy11-qt11-st-application', name: 'Ứng dụng và an toàn', example: 'Ghép miền sóng với ứng dụng phù hợp.', targetQuestionCount: 6 }
  ], ['table', 'text']),
  blueprint('phy11-qt12', [
    { id: 'phy11-qt12-st-path', name: 'Hiệu đường đi và cực trị', example: 'Xác định điểm cực đại từ d2 − d1.', targetQuestionCount: 6 },
    { id: 'phy11-qt12-st-fringe', name: 'Khoảng vân và dữ liệu giao thoa', example: 'Tính λ từ khoảng vân.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt13', [
    { id: 'phy11-qt13-st-fixed', name: 'Hai đầu cùng loại biên', example: 'Dây hai đầu cố định có n bó sóng.', targetQuestionCount: 6 },
    { id: 'phy11-qt13-st-mixed', name: 'Hai đầu khác loại biên', example: 'Một đầu cố định, một đầu tự do.', targetQuestionCount: 6 }
  ], ['diagram', 'equation']),
  blueprint('phy11-qt14', [
    { id: 'phy11-qt14-st-resonance', name: 'Phương pháp cộng hưởng', example: 'Tìm λ từ hai vị trí cộng hưởng liên tiếp.', targetQuestionCount: 6 },
    { id: 'phy11-qt14-st-time', name: 'Phương pháp thời gian truyền', example: 'Tính v từ quãng đường và độ trễ.', targetQuestionCount: 6 }
  ], ['experiment', 'table'], ['guided', 'representation_switch', 'far_transfer'])
];
