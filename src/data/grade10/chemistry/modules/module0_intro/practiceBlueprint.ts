import type { QuestionTypePracticeBlueprint } from '@/types';

export const m0PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt-intro-object',
    subTypes: [
      { id: 'chem10-qt-intro-object-st1', name: 'Phân biệt vật thể và chất', example: 'Phân loại chiếc cốc và thủy tinh tạo nên cốc.', recognitionSigns: ['Đề nêu một đồ vật cụ thể và vật liệu tạo nên nó.'], targetQuestionCount: 4 },
      { id: 'chem10-qt-intro-object-st2', name: 'Thành phần, cấu trúc, tính chất và biến đổi', example: 'Xác định câu hỏi đang nghiên cứu khía cạnh nào của chất.', recognitionSigns: ['Đề hỏi chất gồm gì, sắp xếp ra sao, có đặc điểm gì hoặc biến đổi thế nào.'], targetQuestionCount: 4 },
      { id: 'chem10-qt-intro-object-st3', name: 'Ba cấp độ biểu diễn hóa học', example: 'Nối hiện tượng bọt khí với mô hình tiểu phân và phương trình.', recognitionSigns: ['Cần chuyển giữa quan sát vĩ mô, mô hình vi mô và kí hiệu.'], targetQuestionCount: 4 },
      { id: 'chem10-qt-intro-object-st4', name: 'Vai trò và sử dụng hóa học có trách nhiệm', example: 'Phân tích lợi ích, rủi ro và cách dùng một sản phẩm hóa học.', recognitionSigns: ['Đề đặt hóa học trong y dược, vật liệu, sản xuất, môi trường hoặc an toàn.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt-intro-inquiry',
    subTypes: [
      { id: 'chem10-qt-intro-inquiry-st1', name: 'Quan sát và suy luận', example: 'Phân biệt “dung dịch đổi màu” với lời giải thích về chất mới.', recognitionSigns: ['Đề yêu cầu chọn điều ghi nhận trực tiếp hoặc lời giải thích.'], targetQuestionCount: 5 },
      { id: 'chem10-qt-intro-inquiry-st2', name: 'Câu hỏi, giả thuyết và biến thí nghiệm', example: 'Xác định biến độc lập, phụ thuộc và kiểm soát.', recognitionSigns: ['Đề mô tả thí nghiệm thay đổi một yếu tố.'], targetQuestionCount: 5 },
      { id: 'chem10-qt-intro-inquiry-st3', name: 'Đọc dữ liệu và kết luận đúng phạm vi', example: 'Rút kết luận từ bảng thời gian phản ứng.', recognitionSigns: ['Có bảng, đồ thị hoặc nhiều kết quả đo.'], targetQuestionCount: 5 },
      { id: 'chem10-qt-intro-inquiry-st4', name: 'Độ tin cậy và cải tiến thiết kế', example: 'Xử lí điểm ngoại lai và đề xuất đo lặp.', recognitionSigns: ['Đề hỏi dữ liệu có đáng tin hoặc thiết kế có công bằng không.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt01',
    subTypes: [
      { id: 'chem10-qt01-st1', name: 'Cân bằng phương trình đơn giản', example: 'Cân bằng Al + O₂ → Al₂O₃ bằng hệ số nguyên tối giản.', recognitionSigns: ['Đề yêu cầu tìm hoặc kiểm tra hệ số phản ứng.'], targetQuestionCount: 4 },
      { id: 'chem10-qt01-st2', name: 'Phân biệt hệ số và chỉ số', example: 'Nhận diện thao tác làm thay đổi bản chất chất.', recognitionSigns: ['Đề hỏi cách sửa phương trình hoặc phát hiện lỗi cân bằng.'], targetQuestionCount: 4 },
      { id: 'chem10-qt01-st3', name: 'Bảo toàn khối lượng trực tiếp', example: 'Tìm khối lượng chất còn thiếu từ tổng chất đầu và sản phẩm.', recognitionSigns: ['Cho khối lượng hầu hết các chất và hỏi phần còn lại.'], targetQuestionCount: 4 },
      { id: 'chem10-qt01-st4', name: 'Bảo toàn khối lượng có chất dư hoặc nhiều sản phẩm', example: 'Tách lượng phản ứng khỏi lượng ban đầu còn dư.', recognitionSigns: ['Có chất dư, khí thoát ra hoặc nhiều sản phẩm.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt02',
    subTypes: [
      { id: 'chem10-qt02-st1', name: 'Chuyển đổi mol và khối lượng', example: 'Dùng n = m/M hoặc m = nM.', recognitionSigns: ['Cho khối lượng, khối lượng mol hoặc số mol.'], targetQuestionCount: 4 },
      { id: 'chem10-qt02-st2', name: 'Mol và số hạt', example: 'Đổi số phân tử sang mol bằng hằng số Avogadro.', recognitionSigns: ['Dữ kiện là số nguyên tử, phân tử hoặc ion.'], targetQuestionCount: 4 },
      { id: 'chem10-qt02-st3', name: 'Thể tích khí theo điều kiện', example: 'Tính thể tích ở 25 °C, 1 bar bằng 24,79 L/mol.', recognitionSigns: ['Đề cho khí và nêu điều kiện đo.'], targetQuestionCount: 4 },
      { id: 'chem10-qt02-st4', name: 'Chuyển đổi hỗn hợp nhiều bước', example: 'Từ số hạt suy mol rồi suy khối lượng hoặc thể tích.', recognitionSigns: ['Phải nối từ hai công thức chuyển đổi trở lên.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt03',
    subTypes: [
      { id: 'chem10-qt03-st1', name: 'Lập công thức từ hóa trị', example: 'Lập công thức oxide của phosphorus(V).', recognitionSigns: ['Đề cho hóa trị của hai nguyên tố.'], targetQuestionCount: 4 },
      { id: 'chem10-qt03-st2', name: 'Lập công thức từ điện tích ion', example: 'Ghép Al³⁺ và SO₄²⁻ thành hợp chất trung hòa.', recognitionSigns: ['Đề cho cation và anion kèm điện tích.'], targetQuestionCount: 4 },
      { id: 'chem10-qt03-st3', name: 'Suy hóa trị từ công thức', example: 'Tìm hóa trị Fe trong Fe₂O₃.', recognitionSigns: ['Đề cho công thức và hóa trị của một thành phần.'], targetQuestionCount: 4 },
      { id: 'chem10-qt03-st4', name: 'Tối giản chỉ số và dùng ngoặc nhóm', example: 'Phân biệt CaO với Ca₂O₂ và viết đúng Al₂(SO₄)₃.', recognitionSigns: ['Có nhóm nguyên tử hoặc tỉ lệ chỉ số còn rút gọn được.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt04',
    subTypes: [
      { id: 'chem10-qt04-st1', name: 'Nồng độ phần trăm', example: 'Tính C% từ khối lượng chất tan và dung dịch.', recognitionSigns: ['Cho khối lượng chất tan và khối lượng dung dịch hoặc dung môi.'], targetQuestionCount: 4 },
      { id: 'chem10-qt04-st2', name: 'Nồng độ mol và pha loãng', example: 'Tính Cₘ hoặc nồng độ sau thêm dung môi.', recognitionSigns: ['Cho số mol, thể tích dung dịch hoặc thao tác pha loãng.'], targetQuestionCount: 4 },
      { id: 'chem10-qt04-st3', name: 'Tỉ lượng theo phương trình', example: 'Dùng tỉ lệ hệ số để tìm lượng sản phẩm.', recognitionSigns: ['Đề cho phương trình và lượng của một chất.'], targetQuestionCount: 4 },
      { id: 'chem10-qt04-st4', name: 'Chất giới hạn và chất dư', example: 'So n/hệ số của hai chất tham gia.', recognitionSigns: ['Đề cho lượng của từ hai chất phản ứng trở lên.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  }
];
