import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const coverage = (targetQuestionCount: number, requiredRepresentations: QuestionTypePracticeCoverage['requiredRepresentations']): QuestionTypePracticeCoverage => ({
  targetQuestionCount,
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  requiredRepresentations,
  masteryHoldoutCount: targetQuestionCount === 36 ? 6 : 4
});

export const g10BiologyModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'bio10-qt21', subTypes: [
    { id: 'bio10-qt21-st1', name: 'Nội dung học thuyết tế bào', example: 'Nhận diện tế bào là đơn vị cấu trúc và chức năng.', targetQuestionCount: 12 },
    { id: 'bio10-qt21-st2', name: 'Bằng chứng, ngoại lệ và giới hạn khái quát', example: 'Vận dụng học thuyết cho virus và tế bào chuyên hóa.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'experiment']) },
  { questionTypeId: 'bio10-qt22', subTypes: [
    { id: 'bio10-qt22-st1', name: 'Thành phần tế bào nhân sơ', example: 'Nhận diện vùng nhân, ribosome, màng, thành và roi.', targetQuestionCount: 12 },
    { id: 'bio10-qt22-st2', name: 'Cấu trúc–chức năng và thích nghi nhân sơ', example: 'Suy hậu quả khi cấu trúc vi khuẩn bị tác động.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt23', subTypes: [
    { id: 'bio10-qt23-st1', name: 'Màng, thành tế bào và tế bào chất', example: 'Nhận diện mô hình khảm động và vai trò thành.', targetQuestionCount: 12 },
    { id: 'bio10-qt23-st2', name: 'Tính động, chọn lọc và liên kết tế bào', example: 'Phân tích protein màng, khung xương và chất nền.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt24', subTypes: [
    { id: 'bio10-qt24-st1', name: 'Cấu trúc và chức năng của nhân', example: 'Nhận diện màng nhân, lỗ nhân, nhân con và chromatin.', targetQuestionCount: 12 },
    { id: 'bio10-qt24-st2', name: 'Vận chuyển nhân và bằng chứng điều khiển', example: 'Phân tích chuyển nhân, tín hiệu nhập nhân và tế bào mất nhân.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'experiment']) },
  { questionTypeId: 'bio10-qt3', subTypes: [
    { id: 'bio10-qt3-st1', name: 'Nhận diện bào quan và chức năng', example: 'Phân biệt lưới nội chất, Golgi, lysosome, ti thể và lục lạp.', targetQuestionCount: 12 },
    { id: 'bio10-qt3-st2', name: 'Hệ thống nội màng và định tuyến protein', example: 'Theo dõi đường đi và kiểm soát chất lượng sản phẩm.', targetQuestionCount: 12 },
    { id: 'bio10-qt3-st3', name: 'Bào quan năng lượng và dữ liệu tổn thương', example: 'Đọc dữ kiện ti thể, lục lạp, peroxisome và lysosome.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'diagram', 'experiment']) },
  { questionTypeId: 'bio10-qt25', subTypes: [
    { id: 'bio10-qt25-st1', name: 'Nhận diện tế bào chuyên hóa', example: 'Ghép chức năng với cấu trúc nổi bật.', targetQuestionCount: 12 },
    { id: 'bio10-qt25-st2', name: 'Suy cấu trúc từ nhu cầu chức năng', example: 'Dự đoán bào quan phát triển ở tế bào tiết, cơ và hấp thu.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt26', subTypes: [
    { id: 'bio10-qt26-st1', name: 'So sánh nhân sơ–nhân thực và thực vật–động vật', example: 'Phân loại theo bộ tiêu chí cấu trúc.', targetQuestionCount: 12 },
    { id: 'bio10-qt26-st2', name: 'Ngoại lệ và sức mạnh tiêu chí phân loại', example: 'Phản biện kết luận dựa vào một dấu hiệu đơn lẻ.', targetQuestionCount: 12 }
  ], coverage: coverage(24, ['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt27', subTypes: [
    { id: 'bio10-qt27-st1', name: 'Thao tác và nhận diện ảnh hiển vi', example: 'Chọn vật kính, lấy nét, nhuộm và đọc ảnh.', targetQuestionCount: 12 },
    { id: 'bio10-qt27-st2', name: 'Lựa chọn kính và chuẩn bị tiêu bản', example: 'Phân biệt phóng đại, phân giải và artefact.', targetQuestionCount: 12 },
    { id: 'bio10-qt27-st3', name: 'Đo ảnh, thước tỉ lệ và sai số quan sát', example: 'Tính kích thước và đánh giá độ tin cậy phép đếm.', targetQuestionCount: 12 }
  ], coverage: coverage(36, ['text', 'table', 'diagram', 'experiment', 'equation']) }
];

