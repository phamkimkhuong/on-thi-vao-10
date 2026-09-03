import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const coverage = (targetQuestionCount: number, requiredRepresentations: QuestionTypePracticeCoverage['requiredRepresentations']): QuestionTypePracticeCoverage => ({
  targetQuestionCount,
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  requiredRepresentations,
  masteryHoldoutCount: targetQuestionCount === 36 ? 6 : 4
});

export const g10BiologyModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'bio10-qt14', subTypes: [
    { id: 'bio10-qt14-st1', name: 'Nguyên tố đa lượng, vi lượng và carbon', example: 'Nhận diện vai trò nguyên tố và bộ khung carbon.', targetQuestionCount: 12 },
    { id: 'bio10-qt14-st2', name: 'Dữ kiện thiếu khoáng và quan hệ liều–đáp ứng', example: 'Giới hạn kết luận từ thí nghiệm dinh dưỡng khoáng.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'experiment', 'table']) },
  { questionTypeId: 'bio10-qt15', subTypes: [
    { id: 'bio10-qt15-st1', name: 'Phân cực, liên kết hydrogen và vai trò của nước', example: 'Nối cấu tạo nước với tính dung môi và điều hòa nhiệt.', targetQuestionCount: 12 },
    { id: 'bio10-qt15-st2', name: 'Nước trong hệ sống và dữ liệu vật lí', example: 'Giải thích hiện tượng sinh học từ tương tác phân tử nước.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt16', subTypes: [
    { id: 'bio10-qt16-st1', name: 'Phân loại và chức năng carbohydrate', example: 'Phân biệt đường đơn, đường đôi và đường đa.', targetQuestionCount: 12 },
    { id: 'bio10-qt16-st2', name: 'Liên kết, cấu trúc và khả năng tiêu hóa', example: 'Suy chức năng từ cách tổ chức chuỗi carbohydrate.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'experiment']) },
  { questionTypeId: 'bio10-qt17', subTypes: [
    { id: 'bio10-qt17-st1', name: 'Các nhóm lipid và chức năng', example: 'Phân biệt triglyceride, phospholipid và steroid.', targetQuestionCount: 12 },
    { id: 'bio10-qt17-st2', name: 'Lipid màng, độ lỏng và ứng dụng', example: 'Suy đặc tính màng từ thành phần acid béo.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt2', subTypes: [
    { id: 'bio10-qt2-st1', name: 'Đơn phân, các bậc cấu trúc và chức năng protein', example: 'Nhận diện liên kết và cấp cấu trúc.', targetQuestionCount: 12 },
    { id: 'bio10-qt2-st2', name: 'Gấp cuộn, biến tính và tính đặc hiệu', example: 'Theo dõi tác động của thay đổi cấu trúc lên chức năng.', targetQuestionCount: 12 },
    { id: 'bio10-qt2-st3', name: 'Dữ liệu protein và kiểm chứng cơ chế', example: 'Đọc bảng hoạt tính, điện di và thí nghiệm cứu hồi.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'graph', 'experiment']) },
  { questionTypeId: 'bio10-qt18', subTypes: [
    { id: 'bio10-qt18-st1', name: 'Nucleotide, DNA và các loại RNA', example: 'So sánh cấu tạo và chức năng DNA–RNA.', targetQuestionCount: 12 },
    { id: 'bio10-qt18-st2', name: 'Trình tự, chiều mạch và biểu hiện thông tin', example: 'Suy luận từ nguyên tắc bổ sung và vai trò RNA.', targetQuestionCount: 12 },
    { id: 'bio10-qt18-st3', name: 'Dữ liệu nucleic acid và sai số thực nghiệm', example: 'Đọc điện di, mức biểu hiện và đối chứng phân tử.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'experiment']) },
  { questionTypeId: 'bio10-qt19', subTypes: [
    { id: 'bio10-qt19-st1', name: 'Ứng dụng phân tử sinh học trong đời sống', example: 'Giải thích chế biến, dinh dưỡng và DNA.', targetQuestionCount: 12 },
    { id: 'bio10-qt19-st2', name: 'Phản biện tuyên bố dinh dưỡng và nhận dạng', example: 'Đánh giá nhãn, khẩu phần và giới hạn bằng chứng.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'experiment']) },
  { questionTypeId: 'bio10-qt20', subTypes: [
    { id: 'bio10-qt20-st1', name: 'Thuốc thử và hiện tượng nhận biết', example: 'Nhận diện Benedict, iodine, Biuret và Sudan.', targetQuestionCount: 12 },
    { id: 'bio10-qt20-st2', name: 'Đối chứng, nhiễm chéo và đọc kết quả', example: 'Phân tích bảng phối hợp nhiều phép thử.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'experiment']) }
];

