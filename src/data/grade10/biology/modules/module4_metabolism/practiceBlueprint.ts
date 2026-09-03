import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const coverage = (targetQuestionCount: number, requiredRepresentations: QuestionTypePracticeCoverage['requiredRepresentations']): QuestionTypePracticeCoverage => ({
  targetQuestionCount,
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  requiredRepresentations,
  masteryHoldoutCount: targetQuestionCount === 36 ? 6 : 4
});

export const g10BiologyModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'bio10-qt32', subTypes: [
    { id: 'bio10-qt32-st1', name: 'Cấu tạo, thủy phân và chu trình ATP', example: 'Nhận diện vai trò truyền năng lượng của ATP.', targetQuestionCount: 12 },
    { id: 'bio10-qt32-st2', name: 'Ghép cặp phản ứng và trạng thái năng lượng', example: 'Theo dõi ATP/ADP trong vận chuyển, co cơ và tổng hợp.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'equation']) },
  { questionTypeId: 'bio10-qt5', subTypes: [
    { id: 'bio10-qt5-st1', name: 'Cấu trúc và yếu tố ảnh hưởng enzyme', example: 'Nhận diện tính đặc hiệu và đường cong hoạt tính.', targetQuestionCount: 12 },
    { id: 'bio10-qt5-st2', name: 'Cơ chế xúc tác và các kiểu ức chế', example: 'Phân biệt động học với nhiệt động học và vị trí tác động.', targetQuestionCount: 12 },
    { id: 'bio10-qt5-st3', name: 'Dữ liệu động học và điều hòa enzyme', example: 'Đọc đồ thị bão hòa, pH, nhiệt độ và phản hồi âm.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'graph', 'experiment']) },
  { questionTypeId: 'bio10-qt33', subTypes: [
    { id: 'bio10-qt33-st1', name: 'Quy trình thực hành enzyme', example: 'Nhận diện biến, đối chứng và chỉ báo hoạt tính.', targetQuestionCount: 12 },
    { id: 'bio10-qt33-st2', name: 'Thiết kế và chuẩn hóa phép đo', example: 'Kiểm soát thời gian, lượng enzyme và cách đo sản phẩm.', targetQuestionCount: 12 },
    { id: 'bio10-qt33-st3', name: 'Sai số, đường chuẩn và phân biệt giả thuyết', example: 'Đánh giá độ lặp, giới hạn đo và hiệu ứng lô.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'graph', 'experiment']) },
  { questionTypeId: 'bio10-qt34', subTypes: [
    { id: 'bio10-qt34-st1', name: 'Đồng hóa và các kiểu tự dưỡng', example: 'Nhận diện quang hợp, hóa tổng hợp và nguồn carbon.', targetQuestionCount: 12 },
    { id: 'bio10-qt34-st2', name: 'Dòng năng lượng–carbon trong tổng hợp', example: 'Phân tích pha sáng, cố định carbon và phản hồi.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt35', subTypes: [
    { id: 'bio10-qt35-st1', name: 'Các giai đoạn hô hấp và lên men', example: 'Nhận diện vị trí, sản phẩm và hiệu suất.', targetQuestionCount: 12 },
    { id: 'bio10-qt35-st2', name: 'Dòng electron và giới hạn hô hấp', example: 'Phân tích oxygen, gradient proton và tái sinh NAD+.', targetQuestionCount: 12 },
    { id: 'bio10-qt35-st3', name: 'Mạng chuyển hóa và dữ liệu dòng carbon', example: 'Theo dõi isotope, tháo ghép và quan hệ tổng hợp–phân giải.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'graph', 'equation']) }
];

