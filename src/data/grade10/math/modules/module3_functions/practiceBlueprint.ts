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
}];
