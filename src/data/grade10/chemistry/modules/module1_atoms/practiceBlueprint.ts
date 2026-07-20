import type { QuestionTypePracticeBlueprint } from '@/types';

export const m1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt1',
    subTypes: [
      { id: 'chem10-qt1-st1', name: 'Điện tích, khối lượng và vị trí các hạt', example: 'So sánh proton, neutron và electron.', recognitionSigns: ['Đề hỏi đặc điểm của hạt cơ bản.'], targetQuestionCount: 4 },
      { id: 'chem10-qt1-st2', name: 'Tính p, n, e của nguyên tử và ion', example: 'Từ Z, A và điện tích tìm số hạt.', recognitionSigns: ['Có số khối, số hiệu nguyên tử hoặc điện tích ion.'], targetQuestionCount: 6 },
      { id: 'chem10-qt1-st3', name: 'Bài toán tổng số hạt', example: 'Lập hệ từ p + n + e và hiệu hạt mang điện.', recognitionSigns: ['Cho tổng hoặc hiệu giữa các loại hạt.'], targetQuestionCount: 6 },
      { id: 'chem10-qt1-st4', name: 'Kích thước và độ rỗng nguyên tử', example: 'Giải thích hạt nhân nhỏ nhưng chứa gần hết khối lượng.', recognitionSigns: ['Đề so sánh kích thước nguyên tử với hạt nhân.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt2',
    subTypes: [
      { id: 'chem10-qt2-st1', name: 'Đọc kí hiệu nguyên tử', example: 'Từ ⁴⁰₂₀Ca tìm p, n, e.', recognitionSigns: ['Có kí hiệu dạng A trên Z dưới.'], targetQuestionCount: 5 },
      { id: 'chem10-qt2-st2', name: 'Viết kí hiệu nguyên tử hoặc ion', example: 'Từ số hạt và điện tích viết kí hiệu đầy đủ.', recognitionSigns: ['Đề cho p, n, e rồi yêu cầu chọn hoặc viết kí hiệu.'], targetQuestionCount: 5 },
      { id: 'chem10-qt2-st3', name: 'Nhận diện cùng nguyên tố và đồng vị', example: 'So sánh các hạt có cùng Z nhưng khác A.', recognitionSigns: ['Đề cho nhiều nguyên tử để phân nhóm.'], targetQuestionCount: 5 },
      { id: 'chem10-qt2-st4', name: 'Tiểu phân đẳng electron', example: 'So sánh ion và nguyên tử có cùng số electron.', recognitionSigns: ['Có nhiều tiểu phân mang điện khác nhau.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt3',
    subTypes: [
      { id: 'chem10-qt3-st1', name: 'Khái niệm đồng vị và nguyên tử khối trung bình', example: 'Phân biệt số khối từng đồng vị với giá trị trung bình.', recognitionSigns: ['Đề hỏi ý nghĩa của đồng vị hoặc nguyên tử khối thập phân.'], targetQuestionCount: 4 },
      { id: 'chem10-qt3-st2', name: 'Tính trung bình có trọng số', example: 'Tính nguyên tử khối từ số khối và phần trăm.', recognitionSigns: ['Cho độ phổ biến của các đồng vị.'], targetQuestionCount: 6 },
      { id: 'chem10-qt3-st3', name: 'Bài toán ngược tỉ lệ đồng vị', example: 'Từ nguyên tử khối trung bình tìm phần trăm đồng vị.', recognitionSigns: ['Cho giá trị trung bình và còn ẩn một tỉ lệ.'], targetQuestionCount: 6 },
      { id: 'chem10-qt3-st4', name: 'Đọc phổ khối lượng', example: 'Đọc m/z và cường độ tương đối của các đỉnh.', recognitionSigns: ['Có phổ, đỉnh m/z hoặc cường độ tương đối.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt4',
    subTypes: [
      { id: 'chem10-qt4-st1', name: 'Mô hình Rutherford–Bohr', example: 'Nhận diện quỹ đạo và mức năng lượng trong mô hình Bohr.', recognitionSigns: ['Đề nhắc quỹ đạo xác định hoặc electron chuyển mức.'], targetQuestionCount: 4 },
      { id: 'chem10-qt4-st2', name: 'Mô hình nguyên tử hiện đại', example: 'Mô tả electron bằng phân bố xác suất.', recognitionSigns: ['Đề nhắc đám mây electron hoặc xác suất.'], targetQuestionCount: 4 },
      { id: 'chem10-qt4-st3', name: 'Phân biệt quỹ đạo và orbital', example: 'Bác bỏ quan niệm orbital là đường electron chạy.', recognitionSigns: ['Yêu cầu so sánh hai mô hình hoặc phát hiện ngộ nhận.'], targetQuestionCount: 4 },
      { id: 'chem10-qt4-st4', name: 'Giới hạn và giá trị của mô hình khoa học', example: 'Chọn mô hình phù hợp với mục đích giải thích.', recognitionSigns: ['Đề hỏi mô hình nào phù hợp hoặc vì sao mô hình cũ vẫn hữu ích.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt5',
    subTypes: [
      { id: 'chem10-qt5-st1', name: 'Phân biệt lớp, phân lớp và orbital', example: 'Xác định 2p là phân lớp còn một ô p là orbital.', recognitionSigns: ['Đề yêu cầu phân loại các cấp tổ chức electron.'], targetQuestionCount: 4 },
      { id: 'chem10-qt5-st2', name: 'Số orbital và sức chứa phân lớp', example: 'Phân lớp p có 3 AO và tối đa 6e.', recognitionSigns: ['Đề cho s, p, d hoặc f.'], targetQuestionCount: 4 },
      { id: 'chem10-qt5-st3', name: 'Số orbital và electron tối đa của lớp', example: 'Dùng n² và 2n².', recognitionSigns: ['Đề cho lớp K, L, M hoặc số lượng tử n.'], targetQuestionCount: 4 },
      { id: 'chem10-qt5-st4', name: 'Hình dạng và định hướng AO s, p', example: 'Nhận diện AO s hình cầu và ba AO p.', recognitionSigns: ['Đề có hình orbital hoặc hỏi hình dạng.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt6',
    subTypes: [
      { id: 'chem10-qt6-st1', name: 'Viết cấu hình electron nguyên tử', example: 'Viết cấu hình của nguyên tố Z ≤ 20.', recognitionSigns: ['Đề cho Z và hỏi cấu hình electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt6-st2', name: 'Cấu hình electron ion', example: 'Điều chỉnh tổng electron theo điện tích ion.', recognitionSigns: ['Tiểu phân có điện tích dương hoặc âm.'], targetQuestionCount: 5 },
      { id: 'chem10-qt6-st3', name: 'Sơ đồ ô orbital và quy tắc Hund', example: 'Phân bố electron độc thân trước khi ghép đôi.', recognitionSigns: ['Đề có ô orbital, mũi tên hoặc hỏi cách điền electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt6-st4', name: 'Electron độc thân và kiểm tra cấu hình', example: 'Đếm electron độc thân hoặc phát hiện cấu hình sai.', recognitionSigns: ['Đề hỏi số electron độc thân hoặc vi phạm Pauli/Hund.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt7',
    subTypes: [
      { id: 'chem10-qt7-st1', name: 'Đếm electron lớp ngoài cùng', example: 'Tìm lớp có n lớn nhất và cộng electron trên lớp đó.', recognitionSigns: ['Đề cho cấu hình và hỏi electron hóa trị/lớp ngoài cùng.'], targetQuestionCount: 4 },
      { id: 'chem10-qt7-st2', name: 'Phân loại kim loại, phi kim và khí hiếm', example: 'Dựa vào số electron lớp ngoài cùng để phân loại.', recognitionSigns: ['Đề yêu cầu xác định tính chất cơ bản của nguyên tố.'], targetQuestionCount: 4 },
      { id: 'chem10-qt7-st3', name: 'Xu hướng nhường, nhận hoặc dùng chung electron', example: 'Giải thích Na dễ nhường còn Cl dễ nhận electron.', recognitionSigns: ['Đề hỏi ion bền hoặc xu hướng đạt cấu hình khí hiếm.'], targetQuestionCount: 4 },
      { id: 'chem10-qt7-st4', name: 'Ngoại lệ và suy luận có điều kiện', example: 'Xử lí H, He hoặc nguyên tố có 4e lớp ngoài cùng.', recognitionSigns: ['Phát biểu tuyệt đối hoặc trường hợp không theo quy tắc nhanh.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  }
];
