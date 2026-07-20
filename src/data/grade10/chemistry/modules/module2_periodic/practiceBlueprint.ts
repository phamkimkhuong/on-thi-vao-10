import type { QuestionTypePracticeBlueprint } from '@/types';

export const m2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'chem10-qt8',
    subTypes: [
      { id: 'chem10-qt8-st1', name: 'Cấu tạo bảng tuần hoàn', example: 'Phân biệt ô nguyên tố, chu kì và nhóm.', recognitionSigns: ['Đề hỏi ý nghĩa hàng, cột hoặc số thứ tự ô.'], targetQuestionCount: 4 },
      { id: 'chem10-qt8-st2', name: 'Xác định chu kì từ số lớp electron', example: 'Ba lớp electron tương ứng chu kì 3.', recognitionSigns: ['Cho mô hình lớp hoặc cấu hình theo lớp.'], targetQuestionCount: 4 },
      { id: 'chem10-qt8-st3', name: 'Xác định nhóm nguyên tố s, p', example: 'Từ electron lớp ngoài cùng suy nhóm A.', recognitionSigns: ['Cho số electron hóa trị hoặc cấu hình lớp ngoài.'], targetQuestionCount: 4 },
      { id: 'chem10-qt8-st4', name: 'Suy cấu tạo từ vị trí', example: 'Từ chu kì và nhóm suy số lớp, electron ngoài cùng.', recognitionSigns: ['Đề cho sẵn vị trí trong bảng tuần hoàn.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 16, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt9',
    subTypes: [
      { id: 'chem10-qt9-st1', name: 'Từ cấu hình suy vị trí', example: 'Tìm ô, chu kì và nhóm từ cấu hình electron.', recognitionSigns: ['Đề cho Z hoặc cấu hình đầy đủ.'], targetQuestionCount: 5 },
      { id: 'chem10-qt9-st2', name: 'Từ vị trí suy cấu hình', example: 'Viết cấu hình lớp ngoài từ chu kì và nhóm.', recognitionSigns: ['Đề cho chu kì, nhóm rồi hỏi cấu hình.'], targetQuestionCount: 5 },
      { id: 'chem10-qt9-st3', name: 'Liên hệ vị trí với ion bền', example: 'Suy điện tích ion thường gặp từ nhóm.', recognitionSigns: ['Đề hỏi xu hướng nhường/nhận electron.'], targetQuestionCount: 5 },
      { id: 'chem10-qt9-st4', name: 'Nhận diện nguyên tố từ chuỗi dữ kiện', example: 'Kết hợp cấu hình, vị trí và tính chất để tìm X.', recognitionSigns: ['Có nhiều điều kiện về Z, cấu hình và vị trí.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt10',
    subTypes: [
      { id: 'chem10-qt10-st1', name: 'Xu hướng bán kính trong chu kì', example: 'Sắp xếp Na, Mg, Al theo bán kính.', recognitionSigns: ['Các nguyên tố cùng chu kì.'], targetQuestionCount: 5 },
      { id: 'chem10-qt10-st2', name: 'Xu hướng bán kính trong nhóm', example: 'So sánh Li, Na, K.', recognitionSigns: ['Các nguyên tố cùng nhóm nhưng khác chu kì.'], targetQuestionCount: 5 },
      { id: 'chem10-qt10-st3', name: 'So sánh nguyên tử và ion', example: 'So bán kính Na với Na⁺ hoặc dãy đẳng electron.', recognitionSigns: ['Có tiểu phân mang điện.'], targetQuestionCount: 5 },
      { id: 'chem10-qt10-st4', name: 'Giải thích bằng lớp electron và lực hút hạt nhân', example: 'Giải thích xu hướng thay vì chỉ nhớ mũi tên.', recognitionSigns: ['Đề yêu cầu “vì sao” hoặc chọn nguyên nhân.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt11',
    subTypes: [
      { id: 'chem10-qt11-st1', name: 'Xu hướng độ âm điện', example: 'Sắp xếp độ âm điện trong chu kì hoặc nhóm.', recognitionSigns: ['Đề hỏi khả năng hút electron liên kết.'], targetQuestionCount: 5 },
      { id: 'chem10-qt11-st2', name: 'Xu hướng tính kim loại', example: 'So khả năng nhường electron của các nguyên tố.', recognitionSigns: ['Đề hỏi kim loại mạnh hoặc khả năng tạo cation.'], targetQuestionCount: 5 },
      { id: 'chem10-qt11-st3', name: 'Xu hướng tính phi kim', example: 'So khả năng nhận electron của các phi kim.', recognitionSigns: ['Đề hỏi phi kim mạnh hoặc khả năng tạo anion.'], targetQuestionCount: 5 },
      { id: 'chem10-qt11-st4', name: 'Giải thích quan hệ giữa các xu hướng', example: 'Liên hệ bán kính, lực hút hạt nhân và độ âm điện.', recognitionSigns: ['Đề yêu cầu giải thích đồng thời nhiều đại lượng.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'chem10-qt12',
    subTypes: [
      { id: 'chem10-qt12-st1', name: 'Tính acid–base của oxide', example: 'Sắp xếp oxide trong một chu kì từ base đến acid.', recognitionSigns: ['Đề cho công thức oxide cao nhất.'], targetQuestionCount: 5 },
      { id: 'chem10-qt12-st2', name: 'Tính acid–base của hydroxide', example: 'Phân loại hydroxide base, lưỡng tính hoặc acid.', recognitionSigns: ['Đề cho hydroxide hoặc acid chứa oxygen.'], targetQuestionCount: 5 },
      { id: 'chem10-qt12-st3', name: 'Phát biểu và giải thích định luật tuần hoàn', example: 'Nối sự lặp lại cấu hình ngoài với tính chất.', recognitionSigns: ['Đề hỏi bản chất tính tuần hoàn.'], targetQuestionCount: 5 },
      { id: 'chem10-qt12-st4', name: 'Suy nguyên tố từ hợp chất và xu hướng', example: 'Tìm X từ oxide cao nhất và vị trí.', recognitionSigns: ['Đề kết hợp công thức hợp chất với vị trí hoặc tính chất.'], targetQuestionCount: 5 }
    ],
    coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  }
];
