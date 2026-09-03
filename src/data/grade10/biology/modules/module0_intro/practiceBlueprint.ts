import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const coverage = (requiredRepresentations: QuestionTypePracticeCoverage['requiredRepresentations']): QuestionTypePracticeCoverage => ({
  targetQuestionCount: 24,
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  requiredRepresentations,
  masteryHoldoutCount: 4
});

export const g10BiologyModule0PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'bio10-qt9', subTypes: [
    { id: 'bio10-qt9-st1', name: 'Vai trò và triển vọng của sinh học', example: 'Phân tích đóng góp của sinh học trong y học, nông nghiệp và môi trường.', targetQuestionCount: 12 },
    { id: 'bio10-qt9-st2', name: 'Đạo đức, an toàn và giới hạn ứng dụng', example: 'Cân bằng lợi ích, nguy cơ, quyền riêng tư và trách nhiệm xã hội.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'experiment', 'table']) },
  { questionTypeId: 'bio10-qt10', subTypes: [
    { id: 'bio10-qt10-st1', name: 'Nhận diện phương pháp nghiên cứu', example: 'Phân biệt quan sát, thực nghiệm, phân tích và mô hình hóa.', targetQuestionCount: 12 },
    { id: 'bio10-qt10-st2', name: 'Chọn phương pháp theo câu hỏi và cấp tổ chức', example: 'Chọn công cụ tạo đúng loại bằng chứng cần thiết.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'experiment', 'diagram']) },
  { questionTypeId: 'bio10-qt11', subTypes: [
    { id: 'bio10-qt11-st1', name: 'Biến, đối chứng và giả thuyết', example: 'Nhận diện biến độc lập, phụ thuộc và đối chứng.', targetQuestionCount: 12 },
    { id: 'bio10-qt11-st2', name: 'Kiểm soát nhiễu và nâng độ tin cậy', example: 'Phát hiện biến gây nhiễu, thiên lệch và cách cải tiến.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'experiment', 'table']) },
  { questionTypeId: 'bio10-qt12', subTypes: [
    { id: 'bio10-qt12-st1', name: 'Đọc bảng, đồ thị và xu hướng', example: 'Rút kết luận đúng phạm vi từ dữ liệu.', targetQuestionCount: 12 },
    { id: 'bio10-qt12-st2', name: 'Đánh giá sức mạnh và giới hạn bằng chứng', example: 'Xét cỡ mẫu, biến thiên, đối chứng và khả năng khái quát.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'table', 'graph', 'experiment']) },
  { questionTypeId: 'bio10-qt13', subTypes: [
    { id: 'bio10-qt13-st1', name: 'Công cụ nghiên cứu sinh học', example: 'Nhận diện kính hiển vi, thiết bị phân tích và cơ sở dữ liệu.', targetQuestionCount: 12 },
    { id: 'bio10-qt13-st2', name: 'Tin sinh học, chất lượng dữ liệu và tái lập', example: 'Đánh giá đầu ra thuật toán, metadata và sai lệch dữ liệu.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'table', 'diagram']) },
  { questionTypeId: 'bio10-qt1', subTypes: [
    { id: 'bio10-qt1-st1', name: 'Nhận diện các cấp tổ chức sống', example: 'Phân biệt tế bào, cơ thể, quần thể, quần xã và hệ sinh thái.', targetQuestionCount: 12 },
    { id: 'bio10-qt1-st2', name: 'Tính hệ thống và đặc tính nổi trội', example: 'Theo dõi tác động giữa các cấp và giải thích tự điều chỉnh.', targetQuestionCount: 12 }
  ], coverage: coverage(['text', 'diagram', 'experiment']) }
];

