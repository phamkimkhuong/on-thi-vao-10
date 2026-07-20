import type { QuestionTypePracticeBlueprint } from '@/types';

export const m3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt13',
    subTypes: [
      { id: 'chem10-qt13-st1', name: 'Quy tắc octet và giới hạn áp dụng', example: 'Nhận diện xu hướng đạt cấu hình khí hiếm.', recognitionSigns: ['Đề hỏi vì sao nguyên tử nhường, nhận hoặc góp chung electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt13-st2', name: 'Viết quá trình tạo cation', example: 'Al → Al³⁺ + 3e.', recognitionSigns: ['Nguyên tử kim loại tạo ion dương.'], targetQuestionCount: 5 },
      { id: 'chem10-qt13-st3', name: 'Viết quá trình tạo anion', example: 'O + 2e → O²⁻.', recognitionSigns: ['Nguyên tử phi kim tạo ion âm.'], targetQuestionCount: 5 },
      { id: 'chem10-qt13-st4', name: 'Dự đoán ion bền và tỉ lệ hợp chất', example: 'Từ Z suy ion rồi ghép công thức trung hòa.', recognitionSigns: ['Đề cho cấu hình hoặc Z của hai nguyên tố.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt14',
    subTypes: [
      { id: 'chem10-qt14-st1', name: 'Nhận diện sự hình thành liên kết ion', example: 'Mô tả chuyển electron và lực hút giữa ion trái dấu.', recognitionSigns: ['Cặp kim loại–phi kim điển hình hoặc ion trái dấu.'], targetQuestionCount: 6 },
      { id: 'chem10-qt14-st2', name: 'Lập công thức theo trung hòa điện tích', example: 'Ghép Al³⁺ với O²⁻ thành Al₂O₃.', recognitionSigns: ['Đề cho điện tích cation và anion.'], targetQuestionCount: 6 },
      { id: 'chem10-qt14-st3', name: 'Cấu trúc mạng tinh thể ion', example: 'Giải thích tinh thể ion không gồm phân tử riêng lẻ.', recognitionSigns: ['Đề nhắc mạng tinh thể, nút mạng hoặc đơn vị công thức.'], targetQuestionCount: 6 },
      { id: 'chem10-qt14-st4', name: 'Tính chất vật lí của hợp chất ion', example: 'Giải thích dẫn điện, nhiệt độ nóng chảy và tính giòn.', recognitionSigns: ['Đề hỏi trạng thái nào dẫn điện hoặc vì sao tinh thể vỡ.'], targetQuestionCount: 6 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'experiment'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'chem10-qt15',
    subTypes: [
      { id: 'chem10-qt15-st1', name: 'Tính tổng electron hóa trị', example: 'Đếm electron hóa trị của CO₂ hoặc ion nhiều nguyên tử.', recognitionSigns: ['Bước đầu cần cộng electron hóa trị của mọi nguyên tử.'], targetQuestionCount: 4 },
      { id: 'chem10-qt15-st2', name: 'Viết công thức electron và Lewis', example: 'Phân bố liên kết và cặp electron chưa liên kết.', recognitionSigns: ['Đề yêu cầu chọn hoặc hoàn thiện cấu trúc Lewis.'], targetQuestionCount: 6 },
      { id: 'chem10-qt15-st3', name: 'Liên kết đơn, đôi, ba và cho–nhận', example: 'Phân loại số cặp electron dùng chung hoặc cặp cho–nhận.', recognitionSigns: ['Đề hỏi bậc liên kết hay nguồn gốc cặp electron liên kết.'], targetQuestionCount: 5 },
      { id: 'chem10-qt15-st4', name: 'Liên kết sigma và pi', example: 'Phân tích liên kết đôi gồm một sigma và một pi.', recognitionSigns: ['Đề nhắc σ, π hoặc trục xen phủ orbital.'], targetQuestionCount: 5 },
      { id: 'chem10-qt15-st5', name: 'Năng lượng, độ dài và độ bền liên kết', example: 'So sánh liên kết đơn, đôi và ba.', recognitionSigns: ['Đề hỏi liên kết dài/ngắn, mạnh/yếu hoặc năng lượng liên kết.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'chem10-qt16',
    subTypes: [
      { id: 'chem10-qt16-st1', name: 'Phân loại liên kết bằng hiệu độ âm điện', example: 'Tính Δχ và nhận diện mức độ phân cực.', recognitionSigns: ['Đề cho độ âm điện của hai nguyên tử.'], targetQuestionCount: 5 },
      { id: 'chem10-qt16-st2', name: 'Chiều phân cực liên kết', example: 'Xác định đầu δ+ và δ−.', recognitionSigns: ['Đề hỏi electron lệch về phía nguyên tử nào.'], targetQuestionCount: 5 },
      { id: 'chem10-qt16-st3', name: 'Phân cực phân tử và tính đối xứng', example: 'Giải thích CO₂ không phân cực dù liên kết C=O phân cực.', recognitionSigns: ['Đề có phân tử nhiều liên kết hoặc hình học đối xứng.'], targetQuestionCount: 5 },
      { id: 'chem10-qt16-st4', name: 'Vận dụng phân cực vào tính chất', example: 'Dự đoán khả năng hòa tan hoặc tương tác giữa các phân tử.', recognitionSigns: ['Đề nối cấu trúc phân cực với tính chất vĩ mô.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt17',
    subTypes: [
      { id: 'chem10-qt17-st1', name: 'Điều kiện tạo liên kết hydrogen', example: 'Nhận diện H liên kết với F, O hoặc N và nguyên tử nhận.', recognitionSigns: ['Phân tử chứa H và nguyên tử có độ âm điện lớn/cặp electron tự do.'], targetQuestionCount: 5 },
      { id: 'chem10-qt17-st2', name: 'Phân biệt liên kết trong và giữa phân tử', example: 'Không nhầm liên kết O–H với liên kết hydrogen.', recognitionSigns: ['Đề hỏi bản chất hoặc vị trí của tương tác.'], targetQuestionCount: 5 },
      { id: 'chem10-qt17-st3', name: 'Giải thích nhiệt độ sôi và độ tan', example: 'So ethanol với ether hoặc HF với HCl.', recognitionSigns: ['Hai chất gần khối lượng nhưng khác nhiệt độ sôi/độ tan.'], targetQuestionCount: 5 },
      { id: 'chem10-qt17-st4', name: 'Lực London và xu hướng kích thước', example: 'Giải thích F₂ < Cl₂ < Br₂ < I₂ về nhiệt độ sôi.', recognitionSigns: ['Dãy phân tử không phân cực có kích thước khác nhau.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram', 'experiment'], masteryHoldoutCount: 3 }
  }
];
