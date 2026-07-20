import type { QuestionTypePracticeBlueprint } from '@/types';

export const m4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt18',
    subTypes: [
      { id: 'chem10-qt18-st1', name: 'Quy tắc số oxi hóa cơ bản', example: 'Gán số oxi hóa cho đơn chất, ion đơn nguyên tử, H và O.', recognitionSigns: ['Đề yêu cầu dùng các quy tắc quy ước.'], targetQuestionCount: 5 },
      { id: 'chem10-qt18-st2', name: 'Số oxi hóa trong hợp chất trung hòa', example: 'Tìm S trong H₂SO₄.', recognitionSigns: ['Tổng số oxi hóa của phân tử bằng 0.'], targetQuestionCount: 5 },
      { id: 'chem10-qt18-st3', name: 'Số oxi hóa trong ion nhiều nguyên tử', example: 'Tìm Mn trong MnO₄⁻.', recognitionSigns: ['Tổng số oxi hóa bằng điện tích ion.'], targetQuestionCount: 5 },
      { id: 'chem10-qt18-st4', name: 'Ngoại lệ và phát hiện sai', example: 'Xử lí peroxide hoặc hydride kim loại trong phạm vi bài.', recognitionSigns: ['Công thức chứa liên kết O–O hoặc H với kim loại mạnh.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt19',
    subTypes: [
      { id: 'chem10-qt19-st1', name: 'Nhận diện sự oxi hóa và sự khử', example: 'Tăng số oxi hóa là bị oxi hóa.', recognitionSigns: ['Có số oxi hóa trước và sau.'], targetQuestionCount: 5 },
      { id: 'chem10-qt19-st2', name: 'Viết quá trình nhường electron', example: 'Fe²⁺ → Fe³⁺ + e.', recognitionSigns: ['Tiểu phân tăng số oxi hóa.'], targetQuestionCount: 5 },
      { id: 'chem10-qt19-st3', name: 'Viết quá trình nhận electron', example: 'Cl₂ + 2e → 2Cl⁻.', recognitionSigns: ['Tiểu phân giảm số oxi hóa.'], targetQuestionCount: 5 },
      { id: 'chem10-qt19-st4', name: 'Bảo toàn electron giữa hai quá trình', example: 'Nhân các bán phản ứng để số electron nhường bằng nhận.', recognitionSigns: ['Đề yêu cầu ghép hai quá trình electron.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt20',
    subTypes: [
      { id: 'chem10-qt20-st1', name: 'Xác định chất oxi hóa', example: 'Chất chứa nguyên tố giảm số oxi hóa là chất oxi hóa.', recognitionSigns: ['Đề hỏi chất nhận electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt20-st2', name: 'Xác định chất khử', example: 'Chất chứa nguyên tố tăng số oxi hóa là chất khử.', recognitionSigns: ['Đề hỏi chất nhường electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt20-st3', name: 'Xác định đồng thời vai trò trong phản ứng', example: 'Lập bảng số oxi hóa để ghép chất và vai trò.', recognitionSigns: ['Có nhiều chất và yêu cầu phân loại vai trò.'], targetQuestionCount: 5 },
      { id: 'chem10-qt20-st4', name: 'Phản ứng tự oxi hóa–khử hoặc vai trò kép', example: 'Một nguyên tố từ cùng mức vừa tăng vừa giảm số oxi hóa.', recognitionSigns: ['Cùng nguyên tố đi vào hai sản phẩm có số oxi hóa khác nhau.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt21',
    subTypes: [
      { id: 'chem10-qt21-st1', name: 'Cân bằng phản ứng một nguyên tố thay đổi', example: 'Cân bằng phản ứng kim loại với phi kim.', recognitionSigns: ['Chỉ một cặp nguyên tố đổi số oxi hóa.'], targetQuestionCount: 6 },
      { id: 'chem10-qt21-st2', name: 'Cân bằng phản ứng nhiều tiểu phân', example: 'Đặt hệ số sau khi cân bằng electron rồi cân bằng phần còn lại.', recognitionSigns: ['Phương trình có acid, base hoặc nhiều sản phẩm.'], targetQuestionCount: 6 },
      { id: 'chem10-qt21-st3', name: 'Tìm hệ số hoặc chất còn thiếu', example: 'Dùng bảo toàn electron để suy hệ số cần hỏi.', recognitionSigns: ['Đề không yêu cầu viết trọn phương trình mà hỏi một hệ số.'], targetQuestionCount: 6 },
      { id: 'chem10-qt21-st4', name: 'Kiểm tra và sửa phương trình redox', example: 'Kiểm tra cả nguyên tử, điện tích và electron.', recognitionSigns: ['Đề cho sẵn lời giải hoặc phương trình có thể sai.'], targetQuestionCount: 6 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 4 }
  }
];
