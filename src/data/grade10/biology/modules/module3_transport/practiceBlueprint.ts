import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

/**
 * Blueprint Module 3 được tách theo thao tác nhận thức, không theo thứ tự câu hỏi.
 * Mỗi dạng con cần 12 câu theo chuẩn 3 dễ - 5 vừa - 4 khó trước khi coi là phủ đủ.
 */
export const g10BiologyModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'bio10-qt4',
    subTypes: [
      { id: 'bio10-qt4-st1', name: 'Khuếch tán đơn giản và khuếch tán hỗ trợ', example: 'Chọn con đường qua màng từ kích thước, độ phân cực, gradient và protein vận chuyển.', recognitionSigns: ['Chất đi cùng gradient nồng độ hoặc điện hóa.', 'Cần xét chất đi trực tiếp qua lipid hay qua kênh/protein tải.'], targetQuestionCount: 12 },
      { id: 'bio10-qt4-st2', name: 'Thẩm thấu, ưu trương và nhược trương', example: 'Dự đoán chiều nước và trạng thái tế bào trong các môi trường khác nhau.', recognitionSigns: ['Đề nhắc nước, màng bán thấm, trương/co hoặc phản co nguyên sinh.', 'Phải xác định chất tan không thấm và so sánh hai phía màng.'], targetQuestionCount: 12 },
      { id: 'bio10-qt4-st3', name: 'Đọc dữ liệu tính thấm và cân bằng màng', example: 'Suy dung dịch đẳng trương từ bảng đổi khối lượng hoặc dữ kiện màng thấm chọn lọc.', recognitionSigns: ['Đề cho phần trăm đổi khối lượng, nhiều chất tan hoặc diễn biến theo thời gian.', 'Không được chỉ cộng nồng độ ban đầu; phải xét chất nào qua màng.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'table', 'graph', 'experiment'] }
  },
  {
    questionTypeId: 'bio10-qt28',
    subTypes: [
      { id: 'bio10-qt28-st1', name: 'Vận chuyển chủ động sơ cấp và bơm màng', example: 'Dự đoán hậu quả khi ATP cạn hoặc bơm ion bị ức chế.', recognitionSigns: ['Protein trực tiếp dùng ATP và chất đi ngược gradient.', 'Cần nối hoạt động bơm với gradient được duy trì.'], targetQuestionCount: 12 },
      { id: 'bio10-qt28-st2', name: 'Đồng vận chuyển và vận chuyển chủ động thứ cấp', example: 'Phân tích symport/antiport dùng gradient do một bơm khác tạo ra.', recognitionSigns: ['Một chất đi xuống gradient kéo chất khác đi ngược gradient.', 'ATP không nhất thiết được dùng trực tiếp tại protein đồng vận chuyển.'], targetQuestionCount: 12 },
      { id: 'bio10-qt28-st3', name: 'Gradient điện hóa, độ bão hòa và chất ức chế', example: 'Kết hợp điện thế, nồng độ và dữ liệu tốc độ để nhận diện cơ chế.', recognitionSigns: ['Đề nhắc điện thế màng, tốc độ đạt trần, đột biến hoặc chất ức chế.', 'Cần phân biệt ảnh hưởng trực tiếp với hệ quả thứ cấp.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'table', 'graph', 'equation'] }
  },
  {
    questionTypeId: 'bio10-qt29',
    subTypes: [
      { id: 'bio10-qt29-st1', name: 'Thực bào và ẩm bào', example: 'Nhận diện cơ chế thu nhận hạt rắn lớn hoặc dịch ngoại bào.', recognitionSigns: ['Màng biến dạng và tạo túi đưa vật chất vào tế bào.', 'Loại vật chất giúp phân biệt thực bào với ẩm bào.'], targetQuestionCount: 12 },
      { id: 'bio10-qt29-st2', name: 'Nhập bào qua thụ thể', example: 'Dự đoán hậu quả khi ligand hoặc thụ thể đặc hiệu bị biến đổi.', recognitionSigns: ['Đề nhắc ligand, thụ thể, hố có áo hoặc thu nhận chọn lọc.', 'Không suy rằng hỏng một thụ thể làm dừng mọi hình thức nhập bào.'], targetQuestionCount: 12 },
      { id: 'bio10-qt29-st3', name: 'Xuất bào và cân bằng màng', example: 'Giải thích bài tiết, hòa màng và tái chế diện tích màng.', recognitionSigns: ['Túi nội bào hòa màng để giải phóng chất ra ngoài.', 'Cần theo dõi hướng túi màng và sự cân bằng nhập–xuất bào.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'experiment'] }
  },
  {
    questionTypeId: 'bio10-qt30',
    subTypes: [
      { id: 'bio10-qt30-st1', name: 'Quan sát co và phản co nguyên sinh', example: 'Nhận diện trạng thái tế bào từ tiêu bản trước và sau khi đổi dung dịch.', recognitionSigns: ['Đề mô tả màng sinh chất tách khỏi thành hoặc áp sát trở lại.', 'Phải liên hệ hình thái với chiều di chuyển của nước.'], targetQuestionCount: 12 },
      { id: 'bio10-qt30-st2', name: 'Thiết kế thí nghiệm tính thấm màng', example: 'Chọn biến, đối chứng và cách chuẩn hóa mẫu khi khảo sát màng.', recognitionSigns: ['Đề yêu cầu lập kế hoạch hoặc tìm biến gây nhiễu.', 'Chỉ thay một biến độc lập và giữ ổn định các điều kiện còn lại.'], targetQuestionCount: 12 },
      { id: 'bio10-qt30-st3', name: 'Xử lí dữ liệu, sai số và cải tiến', example: 'Đánh giá bảng số liệu, mẫu lặp và nguồn sai số của thí nghiệm màng.', recognitionSigns: ['Đề cho kết quả nhiều nghiệm thức hoặc một kết luận thực nghiệm.', 'Cần xét độ lặp lại, cách đo và bằng chứng có đủ cho kết luận hay không.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['experiment', 'table', 'graph', 'diagram'] }
  },
  {
    questionTypeId: 'bio10-qt31',
    subTypes: [
      { id: 'bio10-qt31-st1', name: 'Thụ thể và tiếp nhận tín hiệu', example: 'Chọn thụ thể màng hoặc nội bào từ tính chất của phân tử tín hiệu.', recognitionSigns: ['Đề cho hormone/ligand và vị trí thụ thể.', 'Tính tan trong lipid giúp dự đoán khả năng đi qua màng.'], targetQuestionCount: 12 },
      { id: 'bio10-qt31-st2', name: 'Truyền tin, khuếch đại và kết thúc tín hiệu', example: 'Sắp xếp tiếp nhận–truyền tin–đáp ứng và giải thích khuếch đại.', recognitionSigns: ['Đề nhắc chuỗi protein, chất truyền tin thứ hai hoặc phosphoryl hóa.', 'Cần theo dõi hướng truyền tín hiệu và cơ chế tắt tín hiệu.'], targetQuestionCount: 12 },
      { id: 'bio10-qt31-st3', name: 'Đột biến, thuốc và đáp ứng sinh lí', example: 'Suy hậu quả khi thụ thể hoạt hóa liên tục hoặc một mắt xích bị ức chế.', recognitionSigns: ['Đề có đột biến, thuốc ức chế hoặc đáp ứng bất thường.', 'Cần xác định vị trí can thiệp rồi lần theo các bước phía sau.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'table', 'experiment'] }
  }
];
