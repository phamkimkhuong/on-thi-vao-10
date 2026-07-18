import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt39', subTypes: [
    { id: 'phy10-qt39-st1', name: 'Độ lớn động lượng', example: 'Tính p = mv và đổi đơn vị.', recognitionSigns: ['Một vật có m và v.'], targetQuestionCount: 5 },
    { id: 'phy10-qt39-st2', name: 'Vector và dấu động lượng', example: 'Ghi phương chiều/dấu theo trục.', recognitionSigns: ['Có chiều dương hoặc chuyển động ngược chiều.'], targetQuestionCount: 5 },
    { id: 'phy10-qt39-st3', name: 'So sánh động lượng', example: 'So hai vật theo tích mv.', recognitionSigns: ['Nhiều vật có m, v khác nhau.'], targetQuestionCount: 4 },
    { id: 'phy10-qt39-st4', name: 'Suy m hoặc v từ p', example: 'Biến đổi công thức trong bối cảnh thực tế.', recognitionSigns: ['Cho động lượng và một đại lượng còn lại.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt40', subTypes: [
    { id: 'phy10-qt40-st1', name: 'Hệ cùng chiều', example: 'Cộng đại số các động lượng cùng dấu.', recognitionSigns: ['Nhiều vật chuyển động cùng chiều.'], targetQuestionCount: 6 },
    { id: 'phy10-qt40-st2', name: 'Hệ ngược chiều', example: 'Chọn chiều dương và cộng có dấu.', recognitionSigns: ['Các vật chuyển động đối nhau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt40-st3', name: 'Động lượng hệ bằng không', example: 'Tìm điều kiện p₁ + p₂ = 0.', recognitionSigns: ['Hỏi tổng động lượng bằng 0.'], targetQuestionCount: 6 },
    { id: 'phy10-qt40-st4', name: 'Cộng vector hai chiều', example: 'Ghép các thành phần vuông góc.', recognitionSigns: ['Các vận tốc không cùng đường thẳng.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt41', subTypes: [
    { id: 'phy10-qt41-st1', name: 'Xung lượng lực không đổi', example: 'Tính I = FΔt.', recognitionSigns: ['Cho lực trung bình và thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt41-st2', name: 'Độ biến thiên động lượng', example: 'Tính p₂ − p₁ có dấu.', recognitionSigns: ['Cho vận tốc trước–sau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt41-st3', name: 'Lực trung bình trong va đập', example: 'Tìm F = Δp/Δt.', recognitionSigns: ['Có va chạm trong thời gian ngắn.'], targetQuestionCount: 6 },
    { id: 'phy10-qt41-st4', name: 'Đồ thị lực–thời gian', example: 'Tính diện tích đại số.', recognitionSigns: ['Có F biến thiên theo t.'], targetQuestionCount: 6 },
    { id: 'phy10-qt41-st5', name: 'Ứng dụng an toàn', example: 'Giải thích túi khí/đệm làm giảm lực.', recognitionSigns: ['Cùng Δp nhưng thay đổi thời gian va chạm.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt42', subTypes: [
    { id: 'phy10-qt42-st1', name: 'Chọn hệ và phân loại lực', example: 'Xác định nội lực, ngoại lực.', recognitionSigns: ['Hỏi hệ nào kín/cô lập.'], targetQuestionCount: 6 },
    { id: 'phy10-qt42-st2', name: 'Điều kiện bảo toàn chính xác', example: 'Tổng ngoại lực bằng 0.', recognitionSigns: ['Ngoại lực triệt tiêu hoặc không có.'], targetQuestionCount: 6 },
    { id: 'phy10-qt42-st3', name: 'Bảo toàn gần đúng khi tương tác ngắn', example: 'Bỏ qua xung lượng ngoại lực.', recognitionSigns: ['Va chạm/nổ diễn ra rất nhanh.'], targetQuestionCount: 6 },
    { id: 'phy10-qt42-st4', name: 'Không bảo toàn và xung lượng ngoại lực', example: 'Liên hệ Δp_hệ = I_ngoại.', recognitionSigns: ['Ngoại lực đáng kể trong khoảng xét.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'experiment'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt43', subTypes: [
    { id: 'phy10-qt43-st1', name: 'Va chạm mềm cùng chiều', example: 'Hai vật dính nhau sau va chạm.', recognitionSigns: ['Cùng chuyển động sau va chạm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt43-st2', name: 'Va chạm mềm ngược chiều', example: 'Giữ dấu vận tốc và kết luận chiều sau.', recognitionSigns: ['Hai vật lao vào nhau rồi dính.'], targetQuestionCount: 6 },
    { id: 'phy10-qt43-st3', name: 'Va chạm một chiều không dính', example: 'Tìm một vận tốc sau khi biết ba vận tốc.', recognitionSigns: ['Vật tách rời sau va chạm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt43-st4', name: 'Bài toán ngược khối lượng/vận tốc', example: 'Suy dữ kiện trước từ trạng thái sau.', recognitionSigns: ['Ẩn nằm ở trạng thái trước hoặc khối lượng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt43-st5', name: 'Va chạm nhiều giai đoạn', example: 'Hai va chạm liên tiếp hoặc kết hợp chuyển động.', recognitionSigns: ['Có nhiều sự kiện theo thời gian.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt44', subTypes: [
    { id: 'phy10-qt44-st1', name: 'Giật lùi từ trạng thái đứng yên', example: 'Súng–đạn hoặc người–thuyền.', recognitionSigns: ['Hệ ban đầu đứng yên rồi hai phần tách ra.'], targetQuestionCount: 6 },
    { id: 'phy10-qt44-st2', name: 'Hệ ban đầu đang chuyển động', example: 'Giữ động lượng ban đầu khác 0.', recognitionSigns: ['Khối chung có vận tốc trước khi tách.'], targetQuestionCount: 6 },
    { id: 'phy10-qt44-st3', name: 'Nổ thành nhiều mảnh', example: 'Tìm động lượng mảnh còn lại.', recognitionSigns: ['Vật nổ/tách thành từ ba phần.'], targetQuestionCount: 6 },
    { id: 'phy10-qt44-st4', name: 'Tách theo hai phương', example: 'Bảo toàn theo từng trục.', recognitionSigns: ['Các mảnh bay không cùng đường thẳng.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt45', subTypes: [
    { id: 'phy10-qt45-st1', name: 'Tính động năng trước–sau', example: 'So tổng mv²/2.', recognitionSigns: ['Có đủ m, v trước và sau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt45-st2', name: 'Phân loại va chạm', example: 'Nhận diện đàn hồi/không đàn hồi/va chạm mềm.', recognitionSigns: ['Hỏi động năng có bảo toàn không.'], targetQuestionCount: 6 },
    { id: 'phy10-qt45-st3', name: 'Năng lượng hao hụt', example: 'Tính K_trước − K_sau.', recognitionSigns: ['Hỏi nhiệt, âm, biến dạng hoặc phần trăm mất.'], targetQuestionCount: 6 },
    { id: 'phy10-qt45-st4', name: 'Kết hợp động lượng và năng lượng', example: 'Tìm vận tốc rồi đánh giá năng lượng.', recognitionSigns: ['Thiếu vận tốc sau và hỏi loại va chạm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt45-st5', name: 'Phản biện bảo toàn sai', example: 'Phân biệt bảo toàn động lượng với động năng.', recognitionSigns: ['Có phát biểu khái niệm hoặc lời giải sai.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt46', subTypes: [
    { id: 'phy10-qt46-st1', name: 'Thiết kế phép đo va chạm', example: 'Chọn m, v trước/sau và dụng cụ.', recognitionSigns: ['Xe lăn, cổng quang hoặc video.'], targetQuestionCount: 6 },
    { id: 'phy10-qt46-st2', name: 'Xử lí bảng động lượng', example: 'Tính tổng p trước–sau có dấu.', recognitionSigns: ['Có bảng m, v.'], targetQuestionCount: 6 },
    { id: 'phy10-qt46-st3', name: 'Đánh giá sai lệch bảo toàn', example: 'Tính phần trăm lệch và so với bất định.', recognitionSigns: ['Hỏi định luật có được kiểm chứng không.'], targetQuestionCount: 6 },
    { id: 'phy10-qt46-st4', name: 'Phân tích năng lượng thí nghiệm', example: 'So động năng và phân loại va chạm.', recognitionSigns: ['Có dữ liệu đầy đủ trước–sau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt46-st5', name: 'Nguồn sai số và cải tiến', example: 'Ma sát, lệch trục, thời điểm đo.', recognitionSigns: ['Hỏi giới hạn hoặc cách cải thiện.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 5 } }
];
