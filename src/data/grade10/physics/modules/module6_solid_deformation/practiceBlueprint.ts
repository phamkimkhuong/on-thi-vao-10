import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule6PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt54', subTypes: [
    { id: 'phy10-qt54-st1', name: 'Biến dạng kéo và nén', example: 'Phân loại theo lực ở hai đầu vật.', recognitionSigns: ['Thanh/dây bị dài ra hoặc ngắn lại.'], targetQuestionCount: 5 },
    { id: 'phy10-qt54-st2', name: 'Đàn hồi và không đàn hồi', example: 'Xét trạng thái sau khi bỏ lực.', recognitionSigns: ['Hỏi vật có trở lại hình dạng ban đầu.'], targetQuestionCount: 5 },
    { id: 'phy10-qt54-st3', name: 'Giới hạn đàn hồi', example: 'Nhận diện khi vật không còn hồi phục.', recognitionSigns: ['Tải tăng hoặc có biến dạng dư.'], targetQuestionCount: 4 },
    { id: 'phy10-qt54-st4', name: 'Vật liệu và tình huống thực tế', example: 'Cao su, thép, đất sét, dây cáp.', recognitionSigns: ['Yêu cầu giải thích/so sánh vật liệu.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt55', subTypes: [
    { id: 'phy10-qt55-st1', name: 'Độ biến dạng tuyệt đối', example: 'Tính Δl = l − l₀ có dấu.', recognitionSigns: ['Cho chiều dài đầu và sau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt55-st2', name: 'Độ biến dạng tương đối', example: 'Tính ε = Δl/l₀.', recognitionSigns: ['Hỏi tỉ lệ biến dạng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt55-st3', name: 'Phần trăm biến dạng', example: 'Đổi ε sang phần trăm.', recognitionSigns: ['Kết quả yêu cầu %.'], targetQuestionCount: 6 },
    { id: 'phy10-qt55-st4', name: 'Bài toán ngược', example: 'Suy l, l₀ hoặc Δl từ ε.', recognitionSigns: ['Ẩn là chiều dài hoặc kích thước ban đầu.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt56', subTypes: [
    { id: 'phy10-qt56-st1', name: 'Tính lực đàn hồi', example: 'Tính độ lớn lực đàn hồi bằng F = k|Δl|.', recognitionSigns: ['Cho k và độ dãn/nén.'], targetQuestionCount: 6 },
    { id: 'phy10-qt56-st2', name: 'Tìm độ cứng hoặc biến dạng', example: 'Biến đổi định luật Hooke.', recognitionSigns: ['Cho hai trong F, k, Δl.'], targetQuestionCount: 6 },
    { id: 'phy10-qt56-st3', name: 'Cân bằng với lò xo', example: 'Kết hợp lực đàn hồi với trọng lực/lực ngoài.', recognitionSigns: ['Vật gắn lò xo đứng yên.'], targetQuestionCount: 6 },
    { id: 'phy10-qt56-st4', name: 'Kiểm tra miền áp dụng Hooke', example: 'Không ngoại suy ngoài giới hạn đàn hồi.', recognitionSigns: ['Có giới hạn tải hoặc dữ liệu phi tuyến.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt57', subTypes: [
    { id: 'phy10-qt57-st1', name: 'Đọc điểm trên đồ thị F–Δl', example: 'Suy lực hoặc độ biến dạng.', recognitionSigns: ['Có đồ thị/bảng F và Δl.'], targetQuestionCount: 6 },
    { id: 'phy10-qt57-st2', name: 'Tính k từ hệ số góc', example: 'k = ΔF/Δ(Δl).', recognitionSigns: ['Đoạn thẳng qua gốc.'], targetQuestionCount: 6 },
    { id: 'phy10-qt57-st3', name: 'Nhận diện miền tuyến tính', example: 'Xác định giới hạn Hooke.', recognitionSigns: ['Đồ thị bắt đầu cong/lệch tuyến tính.'], targetQuestionCount: 6 },
    { id: 'phy10-qt57-st4', name: 'So sánh độ cứng', example: 'So hệ số góc của nhiều vật/lò xo.', recognitionSigns: ['Nhiều đường trên cùng hệ trục.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt58', subTypes: [
    { id: 'phy10-qt58-st1', name: 'Bố trí và quy trình đo', example: 'Treo tải, đo l₀ và l.', recognitionSigns: ['Giá treo, lò xo, quả cân, thước.'], targetQuestionCount: 6 },
    { id: 'phy10-qt58-st2', name: 'Lập bảng F–Δl', example: 'Đổi m thành F = mg và tính độ dãn.', recognitionSigns: ['Có khối lượng tải và chiều dài.'], targetQuestionCount: 6 },
    { id: 'phy10-qt58-st3', name: 'Xử lí đồ thị để tìm k', example: 'Lấy hệ số góc miền tuyến tính.', recognitionSigns: ['Nhiều cặp F–Δl.'], targetQuestionCount: 6 },
    { id: 'phy10-qt58-st4', name: 'Sai số và độ tin cậy', example: 'Thị sai, dao động, đo một lần.', recognitionSigns: ['Hỏi nguồn sai số/cải tiến.'], targetQuestionCount: 6 },
    { id: 'phy10-qt58-st5', name: 'Phát hiện vượt giới hạn đàn hồi', example: 'So lượt tăng/giảm tải hoặc biến dạng dư.', recognitionSigns: ['Dữ liệu không còn tuyến tính/hồi phục.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt59', subTypes: [
    { id: 'phy10-qt59-st1', name: 'Cân lò xo và thang đo', example: 'Suy tải từ độ dãn trong miền tuyến tính.', recognitionSigns: ['Thiết bị đo dùng lò xo.'], targetQuestionCount: 6 },
    { id: 'phy10-qt59-st2', name: 'Tải và độ dãn giới hạn', example: 'Tính lực/khối lượng tối đa an toàn.', recognitionSigns: ['Có giới hạn đàn hồi hoặc tải tối đa.'], targetQuestionCount: 6 },
    { id: 'phy10-qt59-st3', name: 'Lò xo ghép song song', example: 'Cùng biến dạng, lực tổng cộng.', recognitionSigns: ['Nhiều lò xo cùng đỡ một tải.'], targetQuestionCount: 6 },
    { id: 'phy10-qt59-st4', name: 'Lò xo ghép nối tiếp', example: 'Cùng lực, độ dãn tổng.', recognitionSigns: ['Các lò xo nối đầu–đuôi.'], targetQuestionCount: 6 },
    { id: 'phy10-qt59-st5', name: 'Thiết kế và chọn lò xo', example: 'Chọn k, giới hạn và độ nhạy phù hợp.', recognitionSigns: ['Yêu cầu tối ưu thiết bị/an toàn.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph', 'diagram'], masteryHoldoutCount: 5 } }
];
