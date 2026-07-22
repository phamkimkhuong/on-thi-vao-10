import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [{
  questionTypeId: 'math10-qt3',
  subTypes: [
    { id: 'math10-qt3-st1', name: 'Nửa mặt phẳng và miền nghiệm của hệ', example: 'Vẽ đường biên, chọn đúng nửa mặt phẳng rồi lấy giao các miền.', recognitionSigns: ['Đề yêu cầu kiểm tra điểm, biểu diễn miền nghiệm hoặc tìm các đỉnh.', 'Mỗi bất phương trình tạo một nửa mặt phẳng có kể hoặc không kể đường biên.'], targetQuestionCount: 12 },
    { id: 'math10-qt3-st2', name: 'Cực trị biểu thức tuyến tính trên đa giác', example: 'Tính giá trị hàm mục tiêu tại các đỉnh của miền đa giác.', recognitionSigns: ['Miền nghiệm đã cho hoặc có thể xác định thành một đa giác.', 'Biểu thức mục tiêu có dạng ax+by.'], targetQuestionCount: 12 },
    { id: 'math10-qt3-st3', name: 'Quy hoạch tuyến tính thực tế', example: 'Chọn biến, lập hệ ràng buộc rồi tối ưu lợi nhuận hoặc chi phí.', recognitionSigns: ['Đề có nguồn lực hữu hạn và nhiều phương án sản xuất.', 'Cần chuyển ngôn ngữ thực tế thành biến, ràng buộc và hàm mục tiêu.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'graph', 'table'] }
}];
