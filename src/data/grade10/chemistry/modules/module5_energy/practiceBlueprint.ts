import type { QuestionTypePracticeBlueprint } from '@/types';

export const m5PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt22',
    subTypes: [
      { id: 'chem10-qt22-st1', name: 'Xác định hệ và môi trường', example: 'Phân định phần đang nghiên cứu và phần xung quanh.', recognitionSigns: ['Đề hỏi nhiệt truyền giữa phản ứng và bên ngoài.'], targetQuestionCount: 4 },
      { id: 'chem10-qt22-st2', name: 'Nhận diện phản ứng tỏa nhiệt', example: 'Hệ giải phóng nhiệt, môi trường nóng lên.', recognitionSigns: ['Nhiệt độ môi trường tăng hoặc có ΔH < 0.'], targetQuestionCount: 4 },
      { id: 'chem10-qt22-st3', name: 'Nhận diện phản ứng thu nhiệt', example: 'Hệ nhận nhiệt, môi trường lạnh đi.', recognitionSigns: ['Nhiệt độ môi trường giảm hoặc có ΔH > 0.'], targetQuestionCount: 4 },
      { id: 'chem10-qt22-st4', name: 'Dòng năng lượng và ứng dụng thực tế', example: 'Giải thích túi chườm nóng/lạnh hoặc quá trình đốt cháy.', recognitionSigns: ['Đề đặt phản ứng trong thiết bị hoặc tình huống đời sống.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt23',
    subTypes: [
      { id: 'chem10-qt23-st1', name: 'Ý nghĩa dấu và độ lớn ΔH', example: 'Diễn giải ΔH = −286 kJ theo phương trình.', recognitionSigns: ['Đề cho giá trị ΔH kèm dấu.'], targetQuestionCount: 5 },
      { id: 'chem10-qt23-st2', name: 'Đọc và dựng sơ đồ năng lượng', example: 'So mức năng lượng chất đầu và sản phẩm.', recognitionSigns: ['Có trục năng lượng hoặc sơ đồ mức.'], targetQuestionCount: 5 },
      { id: 'chem10-qt23-st3', name: 'Đổi chiều phương trình nhiệt hóa học', example: 'Đảo phản ứng thì đổi dấu ΔH.', recognitionSigns: ['Phương trình yêu cầu là chiều ngược dữ kiện.'], targetQuestionCount: 5 },
      { id: 'chem10-qt23-st4', name: 'Thay đổi hệ số và ΔH', example: 'Nhân/chia phương trình thì nhân/chia ΔH tương ứng.', recognitionSigns: ['Phương trình đích khác dữ kiện bởi một hệ số.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'graph'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt24',
    subTypes: [
      { id: 'chem10-qt24-st1', name: 'Enthalpy tạo thành chuẩn', example: 'Nhận diện phản ứng tạo một mol chất từ đơn chất bền.', recognitionSigns: ['Đề hỏi ΔfH° hoặc phản ứng tạo thành chuẩn.'], targetQuestionCount: 5 },
      { id: 'chem10-qt24-st2', name: 'Tính ΔH từ bảng ΔfH°', example: 'Tổng sản phẩm trừ tổng chất đầu có hệ số.', recognitionSigns: ['Đề cho bảng enthalpy tạo thành.'], targetQuestionCount: 7 },
      { id: 'chem10-qt24-st3', name: 'Tìm dữ kiện enthalpy còn thiếu', example: 'Lập phương trình ΔH để tìm một ΔfH°.', recognitionSigns: ['Một giá trị trong bảng hoặc phản ứng chưa biết.'], targetQuestionCount: 6 },
      { id: 'chem10-qt24-st4', name: 'Nhiệt lượng theo lượng chất', example: 'Quy đổi ΔH của phương trình cho số mol thực tế.', recognitionSigns: ['Đề cho khối lượng hoặc số mol phản ứng.'], targetQuestionCount: 6 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'chem10-qt25',
    subTypes: [
      { id: 'chem10-qt25-st1', name: 'Đếm liên kết bị phá vỡ và hình thành', example: 'Đếm theo phương trình đã cân bằng.', recognitionSigns: ['Đề cho công thức cấu tạo và năng lượng liên kết.'], targetQuestionCount: 6 },
      { id: 'chem10-qt25-st2', name: 'Tính ΔH từ năng lượng liên kết', example: 'ΔH ≈ tổng E phá − tổng E tạo.', recognitionSigns: ['Có bảng năng lượng liên kết trung bình.'], targetQuestionCount: 7 },
      { id: 'chem10-qt25-st3', name: 'Bài toán ngược năng lượng liên kết', example: 'Từ ΔH tìm năng lượng một liên kết chưa biết.', recognitionSigns: ['Một giá trị năng lượng liên kết là ẩn.'], targetQuestionCount: 6 },
      { id: 'chem10-qt25-st4', name: 'Giải thích dấu ΔH và giới hạn xấp xỉ', example: 'So năng lượng phá với năng lượng giải phóng khi tạo liên kết.', recognitionSigns: ['Đề hỏi vì sao tỏa/thu nhiệt hoặc độ chính xác của kết quả.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 }
  }
];
