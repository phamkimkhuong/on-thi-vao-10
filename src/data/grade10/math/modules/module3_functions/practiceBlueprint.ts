import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [{
  questionTypeId: 'math10-qt4',
  subTypes: [
    { id: 'math10-qt4-st1', name: 'Xác định parabol từ điều kiện', example: 'Lập hệ phương trình cho a, b, c từ điểm, đỉnh hoặc trục đối xứng.', recognitionSigns: ['Đề yêu cầu tìm phương trình hàm số bậc hai.', 'Dữ kiện thường là điểm thuộc đồ thị, đỉnh, trục hoặc giao trục.'], targetQuestionCount: 12 },
    { id: 'math10-qt4-st2', name: 'Đỉnh, trục và cực trị trên miền', example: 'So sánh giá trị tại đỉnh nếu thuộc miền với giá trị tại các đầu mút.', recognitionSigns: ['Đề hỏi đỉnh, trục đối xứng, GTLN hoặc GTNN.', 'Nếu có đoạn đóng thì phải kiểm tra cả hai đầu mút.'], targetQuestionCount: 12 },
    { id: 'math10-qt4-st3', name: 'Mô hình thực tế bằng hàm bậc hai', example: 'Lập hoặc khai thác parabol để tối ưu chiều cao, diện tích, doanh thu.', recognitionSigns: ['Đề có quỹ đạo, cổng vòm, hình chữ nhật hoặc doanh thu.', 'Cần xác định miền có ý nghĩa thực tế trước khi tối ưu.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'graph', 'diagram'] }
}, {
  questionTypeId: 'math10-qt18',
  subTypes: [
    { id: 'math10-qt18-st1', name: 'Giá trị và tập xác định của hàm số', example: 'Thay giá trị hoặc kết hợp điều kiện mẫu, căn và biểu thức từng đoạn.', recognitionSigns: ['Đề hỏi f(a) hoặc miền công thức có nghĩa.', 'Xuất hiện mẫu số, căn bậc hai hoặc hàm từng đoạn.'], targetQuestionCount: 12 },
    { id: 'math10-qt18-st2', name: 'Đọc bảng, đồ thị và biến thiên', example: 'Đọc giá trị, nghiệm, dấu, tập xác định và cực trị từ biểu diễn trực quan.', recognitionSigns: ['Dữ kiện là bảng giá trị, đồ thị hoặc bảng biến thiên.', 'Cần phân biệt thông tin theo trục Ox và Oy.'], targetQuestionCount: 12 },
    { id: 'math10-qt18-st3', name: 'Biểu diễn và mô hình hàm số cơ bản', example: 'Lập hàm affine, tỉ lệ hoặc từng đoạn từ dữ liệu thực tế.', recognitionSigns: ['Đề mô tả đầu ra thay đổi theo đầu vào.', 'Có giá trị ban đầu và tốc độ tăng/giảm.'], targetQuestionCount: 12 }
  ],
  coverage: {
    targetQuestionCount: 36,
    minimumQuestionsPerSubType: 12,
    requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
    requiredRepresentations: ['text', 'equation', 'table', 'graph'],
    masteryHoldoutCount: 2
  }
}, {
  questionTypeId: 'math10-qt20',
  subTypes: [
    { id: 'math10-qt20-st1', name: 'Biệt thức, nghiệm và quy tắc dấu', example: 'Từ Δ và dấu a, xác định dấu của tam thức trên các khoảng.', recognitionSigns: ['Đề cho trực tiếp tam thức hoặc hai nghiệm.', 'Cần dùng quy tắc cùng dấu ngoài, trái dấu trong.'], targetQuestionCount: 12 },
    { id: 'math10-qt20-st2', name: 'Đọc bảng dấu và xác định dấu trên miền', example: 'Đọc mốc, dấu hoặc đếm các giá trị thỏa một điều kiện dấu.', recognitionSigns: ['Đề hỏi dấu tại điểm, trên khoảng hoặc từ bảng dấu.', 'Có thể cần kết hợp nhiều dữ kiện về nghiệm và hệ số.'], targetQuestionCount: 12 },
    { id: 'math10-qt20-st3', name: 'Tam thức chứa tham số', example: 'Tìm m để tam thức luôn dương, không âm hoặc có dấu quy định.', recognitionSigns: ['Có tham số trong hệ số và cụm “với mọi x”.', 'Phải kiểm tra cả trường hợp hệ số bậc hai bằng 0.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'table'] }
}, {
  questionTypeId: 'math10-qt21',
  subTypes: [
    { id: 'math10-qt21-st1', name: 'Bất phương trình bậc hai cơ bản', example: 'Giải ax²+bx+c ≥ 0 bằng định lí dấu tam thức.', recognitionSigns: ['Một tam thức bậc hai được so sánh với 0.', 'Cần phân biệt dấu nghiêm ngặt và có bằng.'], targetQuestionCount: 12 },
    { id: 'math10-qt21-st2', name: 'Bất phương trình tích và thương', example: 'Lập bảng dấu chung từ các nghiệm tử và điểm loại của mẫu.', recognitionSigns: ['Vế trái là tích hoặc phân thức.', 'Có nhiều mốc tới hạn và mẫu số phải khác 0.'], targetQuestionCount: 12 },
    { id: 'math10-qt21-st3', name: 'Tham số, số nghiệm và ứng dụng', example: 'Biến điều kiện về tập nghiệm thành điều kiện của Δ, a hoặc các nghiệm.', recognitionSigns: ['Đề hỏi tham số, số nghiệm hoặc khoảng nghiệm.', 'Tình huống thực tế dẫn đến một bất phương trình bậc hai.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'table', 'graph'] }
}];
