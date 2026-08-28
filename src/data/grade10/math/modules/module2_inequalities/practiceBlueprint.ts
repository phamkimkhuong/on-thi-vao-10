import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [{
  questionTypeId: 'math10-qt22',
  subTypes: [
    { id: 'math10-qt22-st1', name: 'Nhận dạng bất phương trình bậc nhất hai ẩn', example: 'Phân biệt ax+by≤c với biểu thức chứa x², xy hoặc phân thức.', recognitionSigns: ['Đề yêu cầu nhận dạng hoặc xác định hệ số a, b, c.', 'Hai hệ số của x và y không đồng thời bằng 0.'], targetQuestionCount: 12 },
    { id: 'math10-qt22-st2', name: 'Kiểm tra và tìm nghiệm', example: 'Thay cặp (x;y) vào bất phương trình hoặc tìm một cặp thỏa điều kiện.', recognitionSigns: ['Đề hỏi một điểm/cặp số có thuộc tập nghiệm hay không.', 'Có thể cố định một ẩn rồi tìm miền giá trị của ẩn còn lại.'], targetQuestionCount: 12 },
    { id: 'math10-qt22-st3', name: 'Đường biên và nửa mặt phẳng nghiệm', example: 'Vẽ ax+by=c, chọn điểm thử và xác định phía nghiệm.', recognitionSigns: ['Đề yêu cầu biểu diễn miền nghiệm hoặc chọn hình đúng.', 'Cần phân biệt đường biên nét liền và nét đứt.'], targetQuestionCount: 12 },
    { id: 'math10-qt22-st4', name: 'Đọc hình và mô hình hóa bất phương trình', example: 'Viết bất phương trình từ miền tô hoặc từ một giới hạn thực tế.', recognitionSigns: ['Dữ kiện được cho bằng đồ thị, bảng giá hoặc câu chữ.', 'Các cụm không quá, ít nhất, lớn hơn, nhỏ hơn quyết định chiều dấu.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 48, requiredRepresentations: ['text', 'equation', 'graph', 'table'] }
}, {
  questionTypeId: 'math10-qt3',
  subTypes: [
    { id: 'math10-qt3-st1', name: 'Nghiệm và miền nghiệm của hệ', example: 'Kiểm tra một điểm, lấy giao các nửa mặt phẳng rồi tìm các đỉnh.', recognitionSigns: ['Đề cho từ hai bất phương trình trở lên.', 'Một điểm phải đồng thời thỏa tất cả các điều kiện.'], targetQuestionCount: 12 },
    { id: 'math10-qt3-st2', name: 'Cực trị biểu thức tuyến tính trên đa giác', example: 'Tính giá trị hàm mục tiêu tại các đỉnh của miền đa giác.', recognitionSigns: ['Miền nghiệm đã cho hoặc có thể xác định thành một đa giác.', 'Biểu thức mục tiêu có dạng ax+by.'], targetQuestionCount: 12 },
    { id: 'math10-qt3-st3', name: 'Quy hoạch tuyến tính thực tế', example: 'Chọn biến, lập hệ ràng buộc rồi tối ưu lợi nhuận hoặc chi phí.', recognitionSigns: ['Đề có nguồn lực hữu hạn và nhiều phương án sản xuất.', 'Cần chuyển ngôn ngữ thực tế thành biến, ràng buộc và hàm mục tiêu.'], targetQuestionCount: 12 },
    { id: 'math10-qt3-st4', name: 'Lập hệ ràng buộc từ tình huống', example: 'Chọn ẩn và chuyển từng giới hạn thành một bất phương trình trong hệ.', recognitionSigns: ['Đề có nhiều điều kiện đồng thời nhưng chưa nhất thiết yêu cầu tối ưu.', 'Phải thêm điều kiện không âm hoặc nguyên theo ý nghĩa của biến.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 48, requiredRepresentations: ['text', 'equation', 'graph', 'table'] }
}];
