import type { QuestionTypePracticeBlueprint } from '@/types';

export const m6PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt26',
    subTypes: [
      { id: 'chem10-qt26-st1', name: 'Tốc độ trung bình theo nồng độ', example: 'Tính |ΔC|/Δt cho chất phản ứng hoặc sản phẩm.', recognitionSigns: ['Cho nồng độ tại hai thời điểm.'], targetQuestionCount: 5 },
      { id: 'chem10-qt26-st2', name: 'Chuẩn hóa tốc độ theo hệ số phản ứng', example: 'Chia biến thiên nồng độ cho hệ số tỉ lượng.', recognitionSigns: ['Đề so tốc độ biến thiên của nhiều chất trong cùng phản ứng.'], targetQuestionCount: 5 },
      { id: 'chem10-qt26-st3', name: 'Tốc độ từ thể tích khí, khối lượng hoặc số mol', example: 'Đổi đại lượng quan sát thành tốc độ trung bình.', recognitionSigns: ['Dữ liệu không cho trực tiếp nồng độ.'], targetQuestionCount: 5 },
      { id: 'chem10-qt26-st4', name: 'Biểu thức tốc độ phản ứng đơn giản', example: 'Dùng biểu thức được cung cấp để suy ảnh hưởng nồng độ.', recognitionSigns: ['Đề cho v = kCᵃCᵇ hoặc yêu cầu dùng biểu thức tốc độ.'], targetQuestionCount: 5 },
      { id: 'chem10-qt26-st5', name: 'Đơn vị và hằng số tốc độ', example: 'Kiểm tra đơn vị của v và diễn giải k trong dữ kiện.', recognitionSigns: ['Đề hỏi đơn vị hoặc giá trị hằng số tốc độ.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'chem10-qt27',
    subTypes: [
      { id: 'chem10-qt27-st1', name: 'Đọc nồng độ tại thời điểm', example: 'Đọc C của chất trên đồ thị C–t.', recognitionSigns: ['Có đồ thị nồng độ theo thời gian.'], targetQuestionCount: 5 },
      { id: 'chem10-qt27-st2', name: 'Tính tốc độ từ độ dốc dây cung', example: 'Dùng hai điểm để tính tốc độ trung bình.', recognitionSigns: ['Đề hỏi tốc độ trong một khoảng thời gian.'], targetQuestionCount: 5 },
      { id: 'chem10-qt27-st3', name: 'So sánh tốc độ ở các giai đoạn', example: 'Nhận diện đoạn đồ thị dốc hơn.', recognitionSigns: ['Đề yêu cầu so nhanh/chậm giữa các khoảng.'], targetQuestionCount: 5 },
      { id: 'chem10-qt27-st4', name: 'Chuyển đổi bảng, đồ thị và mô tả', example: 'Chọn đồ thị phù hợp từ bảng số liệu.', recognitionSigns: ['Dữ liệu xuất hiện dưới nhiều dạng biểu diễn.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt28',
    subTypes: [
      { id: 'chem10-qt28-st1', name: 'Nồng độ và áp suất', example: 'Giải thích số va chạm tăng khi tăng nồng độ/áp suất.', recognitionSigns: ['Thay đổi lượng tiểu phân trong một thể tích.'], targetQuestionCount: 5 },
      { id: 'chem10-qt28-st2', name: 'Nhiệt độ và hệ số Van’t Hoff', example: 'Tính mức tăng tốc độ khi nhiệt độ tăng nhiều khoảng 10 °C.', recognitionSigns: ['Đề cho hệ số nhiệt độ γ hoặc các mức nhiệt.'], targetQuestionCount: 5 },
      { id: 'chem10-qt28-st3', name: 'Diện tích bề mặt', example: 'So bột và viên rắn cùng khối lượng.', recognitionSigns: ['Chất rắn có kích thước hạt khác nhau.'], targetQuestionCount: 5 },
      { id: 'chem10-qt28-st4', name: 'Giải thích bằng va chạm hiệu quả', example: 'Liên hệ tần suất, năng lượng và định hướng va chạm.', recognitionSigns: ['Đề hỏi nguyên nhân vi mô của thay đổi tốc độ.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt29',
    subTypes: [
      { id: 'chem10-qt29-st1', name: 'Cơ chế tác dụng của xúc tác', example: 'Xúc tác tạo đường phản ứng có năng lượng hoạt hóa thấp hơn.', recognitionSigns: ['Đề hỏi vì sao xúc tác làm phản ứng nhanh.'], targetQuestionCount: 5 },
      { id: 'chem10-qt29-st2', name: 'Sơ đồ năng lượng có và không xúc tác', example: 'So đỉnh năng lượng nhưng giữ nguyên ΔH.', recognitionSigns: ['Có hai đường cong năng lượng phản ứng.'], targetQuestionCount: 5 },
      { id: 'chem10-qt29-st3', name: 'Thiết kế thí nghiệm kiểm tra xúc tác', example: 'Giữ mọi biến khác cố định, chỉ thay xúc tác.', recognitionSigns: ['Đề mô tả hai thí nghiệm cần so sánh.'], targetQuestionCount: 5 },
      { id: 'chem10-qt29-st4', name: 'Ứng dụng và giới hạn của xúc tác', example: 'Phân biệt tăng tốc độ với tăng lượng sản phẩm cuối.', recognitionSigns: ['Đề đặt xúc tác trong sản xuất hoặc đời sống.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 3 }
  }
];
