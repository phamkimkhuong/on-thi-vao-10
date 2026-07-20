import type { QuestionTypePracticeBlueprint } from '@/types';

export const m7PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt30',
    subTypes: [
      { id: 'chem10-qt30-st1', name: 'Vị trí và cấu hình electron halogen', example: 'Nhận diện ns²np⁵ và nhóm VIIA.', recognitionSigns: ['Đề cho cấu hình ngoài cùng hoặc vị trí nhóm.'], targetQuestionCount: 4 },
      { id: 'chem10-qt30-st2', name: 'Trạng thái, màu sắc và nhiệt độ sôi', example: 'So F₂, Cl₂, Br₂, I₂.', recognitionSigns: ['Đề hỏi tính chất vật lí hoặc trạng thái ở nhiệt độ thường.'], targetQuestionCount: 4 },
      { id: 'chem10-qt30-st3', name: 'Xu hướng tính oxi hóa trong nhóm', example: 'Sắp xếp F₂ > Cl₂ > Br₂ > I₂.', recognitionSigns: ['Đề hỏi khả năng nhận electron của đơn chất halogen.'], targetQuestionCount: 4 },
      { id: 'chem10-qt30-st4', name: 'Giải thích xu hướng bằng cấu tạo', example: 'Liên hệ bán kính và lực hút electron.', recognitionSigns: ['Đề yêu cầu nguyên nhân thay vì chỉ thứ tự.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt31',
    subTypes: [
      { id: 'chem10-qt31-st1', name: 'Dự đoán phản ứng thế halogen', example: 'Cl₂ oxi hóa Br⁻ nhưng Br₂ không oxi hóa Cl⁻.', recognitionSigns: ['Halogen tác dụng với dung dịch muối halide.'], targetQuestionCount: 5 },
      { id: 'chem10-qt31-st2', name: 'Viết phương trình ion', example: 'Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂.', recognitionSigns: ['Đề yêu cầu sản phẩm hoặc phương trình rút gọn.'], targetQuestionCount: 5 },
      { id: 'chem10-qt31-st3', name: 'Xác định chất oxi hóa và chất khử', example: 'Halogen nhận electron, ion halide nhường electron.', recognitionSigns: ['Đề hỏi vai trò các chất trong phản ứng thế.'], targetQuestionCount: 5 },
      { id: 'chem10-qt31-st4', name: 'Hỗn hợp halide và thứ tự phản ứng', example: 'Xác định ion dễ bị oxi hóa trước.', recognitionSigns: ['Dung dịch chứa nhiều ion halide hoặc lượng halogen giới hạn.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt32',
    subTypes: [
      { id: 'chem10-qt32-st1', name: 'Halogen tác dụng với hydrogen', example: 'H₂ + Cl₂ → 2HCl và điều kiện phản ứng.', recognitionSigns: ['Đề ghép X₂ với H₂.'], targetQuestionCount: 5 },
      { id: 'chem10-qt32-st2', name: 'Chlorine tác dụng với nước', example: 'Cl₂ + H₂O ⇌ HCl + HClO.', recognitionSigns: ['Đề hỏi nước chlorine, tẩy màu hoặc HClO.'], targetQuestionCount: 5 },
      { id: 'chem10-qt32-st3', name: 'Chlorine tác dụng với dung dịch kiềm', example: 'Phân biệt NaOH lạnh loãng với nóng đặc.', recognitionSigns: ['Đề có Cl₂ và NaOH kèm điều kiện.'], targetQuestionCount: 5 },
      { id: 'chem10-qt32-st4', name: 'Tự oxi hóa–khử và ứng dụng', example: 'Theo dõi Cl từ 0 thành −1 và +1.', recognitionSigns: ['Một nguyên tố halogen tạo hai sản phẩm có số oxi hóa khác nhau.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt33',
    subTypes: [
      { id: 'chem10-qt33-st1', name: 'Cấu tạo và tính chất vật lí hydrogen halide', example: 'Giải thích nhiệt độ sôi bất thường của HF.', recognitionSigns: ['Đề hỏi liên kết H–X hoặc nhiệt độ sôi HX.'], targetQuestionCount: 5 },
      { id: 'chem10-qt33-st2', name: 'Độ mạnh acid HX', example: 'HF < HCl < HBr < HI trong nước.', recognitionSigns: ['Đề so khả năng phân li hoặc độ mạnh acid.'], targetQuestionCount: 5 },
      { id: 'chem10-qt33-st3', name: 'Tính khử của ion halide', example: 'F⁻ < Cl⁻ < Br⁻ < I⁻.', recognitionSigns: ['Đề hỏi ion nào dễ nhường electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt33-st4', name: 'Giải thích đồng thời nhiều xu hướng', example: 'Phân biệt nguyên nhân nhiệt độ sôi và độ mạnh acid của HF.', recognitionSigns: ['Đề kết hợp liên kết hydrogen, độ bền liên kết và tính acid.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt34',
    subTypes: [
      { id: 'chem10-qt34-st1', name: 'Màu kết tủa bạc halide', example: 'AgCl trắng, AgBr kem, AgI vàng.', recognitionSigns: ['Đề cho hiện tượng khi thêm AgNO₃.'], targetQuestionCount: 5 },
      { id: 'chem10-qt34-st2', name: 'Phương trình ion nhận biết', example: 'Ag⁺ + Br⁻ → AgBr↓.', recognitionSigns: ['Đề yêu cầu viết phương trình ion rút gọn.'], targetQuestionCount: 5 },
      { id: 'chem10-qt34-st3', name: 'Acid hóa và loại nhiễu', example: 'Không dùng HCl vì đưa thêm Cl⁻.', recognitionSigns: ['Đề hỏi thuốc thử, acid hóa hoặc dương tính giả.'], targetQuestionCount: 5 },
      { id: 'chem10-qt34-st4', name: 'Thiết kế quy trình nhận biết', example: 'Chọn thuốc thử, đối chứng và kết luận có điều kiện.', recognitionSigns: ['Đề có nhiều mẫu chưa biết hoặc yêu cầu quy trình.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'experiment'], masteryHoldoutCount: 3 }
  }
];
