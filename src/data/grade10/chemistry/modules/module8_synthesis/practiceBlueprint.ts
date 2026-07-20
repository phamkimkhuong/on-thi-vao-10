import type { QuestionTypePracticeBlueprint } from '@/types';

export const m8PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt35',
    subTypes: [
      { id: 'chem10-qt35-st1', name: 'Cấu hình → vị trí → tính chất', example: 'Từ Z suy cấu hình, vị trí và xu hướng hóa học.', recognitionSigns: ['Một nguyên tố được cho bằng Z hoặc cấu hình.'], targetQuestionCount: 4 },
      { id: 'chem10-qt35-st2', name: 'Vị trí → liên kết → hợp chất', example: 'Từ hai vị trí suy ion và loại liên kết.', recognitionSigns: ['Đề cho hai nguyên tố rồi hỏi hợp chất giữa chúng.'], targetQuestionCount: 4 },
      { id: 'chem10-qt35-st3', name: 'Liên kết → cấu trúc → tính chất vật lí', example: 'So tinh thể ion với phân tử cộng hóa trị.', recognitionSigns: ['Đề yêu cầu giải thích dẫn điện, nhiệt độ sôi hoặc độ tan.'], targetQuestionCount: 4 },
      { id: 'chem10-qt35-st4', name: 'Nhận diện nguyên tố chưa biết', example: 'Kết hợp cấu hình, oxide và xu hướng để tìm X.', recognitionSigns: ['Có chuỗi nhiều dữ kiện về cùng nguyên tố.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt36',
    subTypes: [
      { id: 'chem10-qt36-st1', name: 'Redox kết hợp dấu ΔH', example: 'Xác định vai trò chất và chiều truyền nhiệt.', recognitionSigns: ['Phản ứng vừa có đổi số oxi hóa vừa cho ΔH.'], targetQuestionCount: 4 },
      { id: 'chem10-qt36-st2', name: 'Tỉ lượng phản ứng kết hợp nhiệt', example: 'Từ số mol tìm nhiệt lượng theo phương trình.', recognitionSigns: ['Đề cho lượng chất và ΔH của phương trình.'], targetQuestionCount: 4 },
      { id: 'chem10-qt36-st3', name: 'Đổi chiều, thay hệ số và quá trình electron', example: 'Đảo hoặc chia phương trình đồng thời xử lí ΔH và vai trò.', recognitionSigns: ['Phương trình đích khác chiều hoặc hệ số dữ kiện.'], targetQuestionCount: 4 },
      { id: 'chem10-qt36-st4', name: 'Năng lượng liên kết trong phản ứng redox', example: 'Cân bằng trước khi đếm liên kết phá và tạo.', recognitionSigns: ['Đề có bảng năng lượng liên kết cùng phản ứng oxi hóa–khử.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt37',
    subTypes: [
      { id: 'chem10-qt37-st1', name: 'Đọc và tính từ bảng dữ liệu', example: 'Tính tốc độ hoặc xu hướng từ nhiều phép đo.', recognitionSigns: ['Có bảng số liệu kèm đơn vị.'], targetQuestionCount: 5 },
      { id: 'chem10-qt37-st2', name: 'Đọc và chuyển đổi đồ thị', example: 'Suy kết luận từ độ dốc hoặc mức năng lượng.', recognitionSigns: ['Có đồ thị nồng độ–thời gian hoặc năng lượng.'], targetQuestionCount: 5 },
      { id: 'chem10-qt37-st3', name: 'Kiểm soát biến và thiết kế công bằng', example: 'Chỉ thay một yếu tố khi so sánh tốc độ.', recognitionSigns: ['Hai thí nghiệm khác đồng thời nhiều điều kiện.'], targetQuestionCount: 5 },
      { id: 'chem10-qt37-st4', name: 'Độ tin cậy, ngoại lệ và giới hạn kết luận', example: 'Kiểm tra điểm ngoại lai trước khi loại bỏ.', recognitionSigns: ['Có phép đo lặp hoặc kết luận vượt dữ liệu.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt38',
    subTypes: [
      { id: 'chem10-qt38-st1', name: 'Đánh giá chuỗi phát biểu liên chương', example: 'Chọn chuỗi cấu tạo–liên kết–phản ứng hoàn toàn đúng.', recognitionSigns: ['Mỗi phương án chứa nhiều mệnh đề thuộc các chương khác nhau.'], targetQuestionCount: 4 },
      { id: 'chem10-qt38-st2', name: 'Tình huống tích hợp ba mạch kiến thức', example: 'Kết hợp tuần hoàn, redox và halogen.', recognitionSigns: ['Đề cần ít nhất ba bước suy luận khác loại.'], targetQuestionCount: 4 },
      { id: 'chem10-qt38-st3', name: 'Phê bình lời giải và phát hiện lỗi gốc', example: 'Kết quả số đúng nhưng phương trình hoặc kết luận sai.', recognitionSigns: ['Đề cung cấp lời giải của học sinh để đánh giá.'], targetQuestionCount: 4 },
      { id: 'chem10-qt38-st4', name: 'Giải thích mức độ làm chủ', example: 'Vừa tính, giải thích bản chất và xử lí dữ liệu mới.', recognitionSigns: ['Đề yêu cầu biện luận hoặc lựa chọn bằng chứng làm chủ.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph', 'experiment'], masteryHoldoutCount: 3 }
  }
];
