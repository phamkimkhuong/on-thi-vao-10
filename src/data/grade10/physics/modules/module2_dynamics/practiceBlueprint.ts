import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt19', subTypes: [
    { id: 'phy10-qt19-st1', name: 'Hai lực cùng/ngược phương', example: 'Cộng đại số lực theo một trục.', recognitionSigns: ['Các lực cùng giá hoặc song song.'], targetQuestionCount: 5 },
    { id: 'phy10-qt19-st2', name: 'Hai lực vuông góc', example: 'Dùng định lí Pythagore và xác định hướng.', recognitionSigns: ['Hai phương lực vuông góc.'], targetQuestionCount: 5 },
    { id: 'phy10-qt19-st3', name: 'Hai lực hợp góc', example: 'Dùng quy tắc hình bình hành hoặc định lí cos.', recognitionSigns: ['Cho góc giữa hai lực.'], targetQuestionCount: 6 },
    { id: 'phy10-qt19-st4', name: 'Phân tích lực theo trục', example: 'Tách lực nghiêng thành Fx, Fy.', recognitionSigns: ['Lực tạo góc với trục/mặt phẳng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt19-st5', name: 'Tổng hợp nhiều lực bằng thành phần', example: 'Cộng các thành phần rồi ghép hợp lực.', recognitionSigns: ['Có từ ba lực hoặc nhiều phương.'], targetQuestionCount: 8 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt20', subTypes: [
    { id: 'phy10-qt20-st1', name: 'Vật trên mặt ngang', example: 'Vẽ P, N, lực kéo và ma sát.', recognitionSigns: ['Vật tiếp xúc mặt ngang.'], targetQuestionCount: 6 },
    { id: 'phy10-qt20-st2', name: 'Vật trên mặt nghiêng', example: 'Vẽ lực và chọn trục song song/vuông góc.', recognitionSigns: ['Có mặt phẳng nghiêng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt20-st3', name: 'Vật treo/dây/lò xo', example: 'Nhận diện trọng lực, lực căng, đàn hồi.', recognitionSigns: ['Có dây treo hoặc lò xo.'], targetQuestionCount: 6 },
    { id: 'phy10-qt20-st4', name: 'Nhiều vật và liên kết', example: 'Cô lập từng vật trong hệ.', recognitionSigns: ['Có hai vật, ròng rọc hoặc tiếp xúc nhau.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt21', subTypes: [
    { id: 'phy10-qt21-st1', name: 'Hợp lực bằng không', example: 'Suy trạng thái vận tốc không đổi.', recognitionSigns: ['Đứng yên hoặc chuyển động thẳng đều.'], targetQuestionCount: 5 },
    { id: 'phy10-qt21-st2', name: 'Quán tính khi xe đổi chuyển động', example: 'Giải thích người chúi/ngả khi xe phanh/chạy.', recognitionSigns: ['Xe khởi hành, phanh hoặc rẽ.'], targetQuestionCount: 5 },
    { id: 'phy10-qt21-st3', name: 'Hiện tượng quán tính đời sống', example: 'Giũ bụi, rút khăn, búa tra cán.', recognitionSigns: ['Một phần hệ đổi chuyển động đột ngột.'], targetQuestionCount: 4 },
    { id: 'phy10-qt21-st4', name: 'Phản biện ngộ nhận về lực', example: 'Bác bỏ “cần lực để duy trì vận tốc”.', recognitionSigns: ['Phát biểu khái niệm cần đánh giá.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt22', subTypes: [
    { id: 'phy10-qt22-st1', name: 'Một lực/hợp lực cùng phương', example: 'Tìm F, m hoặc a từ F = ma.', recognitionSigns: ['Chuyển động trên một trục, hợp lực đã biết.'], targetQuestionCount: 6 },
    { id: 'phy10-qt22-st2', name: 'Nhiều lực trên mặt ngang', example: 'Tính hợp lực có kéo, ma sát.', recognitionSigns: ['Có nhiều lực cùng phương chuyển động.'], targetQuestionCount: 6 },
    { id: 'phy10-qt22-st3', name: 'Lực kéo nghiêng và phản lực', example: 'Chiếu lực lên Ox, Oy.', recognitionSigns: ['Lực hợp góc với phương ngang.'], targetQuestionCount: 6 },
    { id: 'phy10-qt22-st4', name: 'Mặt phẳng nghiêng', example: 'Chiếu trọng lực theo mặt nghiêng.', recognitionSigns: ['Vật trên dốc có/không ma sát.'], targetQuestionCount: 6 },
    { id: 'phy10-qt22-st5', name: 'Hệ nhiều vật', example: 'Dùng toàn hệ rồi tách từng vật.', recognitionSigns: ['Hai vật nối dây hoặc tiếp xúc.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt23', subTypes: [
    { id: 'phy10-qt23-st1', name: 'Nhận diện cặp lực III Newton', example: 'Nêu lực A lên B và B lên A.', recognitionSigns: ['Hai vật đang tương tác.'], targetQuestionCount: 5 },
    { id: 'phy10-qt23-st2', name: 'Phân biệt với hai lực cân bằng', example: 'Kiểm tra hai lực tác dụng lên cùng hay khác vật.', recognitionSigns: ['Có nhiều lực cùng độ lớn ngược chiều.'], targetQuestionCount: 5 },
    { id: 'phy10-qt23-st3', name: 'So sánh lực khi khối lượng khác nhau', example: 'Xe tải–xe con, Trái Đất–vật.', recognitionSigns: ['Hai vật rất khác khối lượng.'], targetQuestionCount: 4 },
    { id: 'phy10-qt23-st4', name: 'Ứng dụng chuyển động do tương tác', example: 'Đi bộ, bơi, tên lửa.', recognitionSigns: ['Hỏi lực nào làm vật tiến lên.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt24', subTypes: [
    { id: 'phy10-qt24-st1', name: 'Khối lượng và trọng lực', example: 'Tính P = mg và phân biệt kg–N.', recognitionSigns: ['Cho m, g hoặc hỏi trọng lượng.'], targetQuestionCount: 5 },
    { id: 'phy10-qt24-st2', name: 'Trọng lực ở nơi có g khác', example: 'So sánh trọng lượng trên hành tinh/độ cao khác.', recognitionSigns: ['Giá trị g thay đổi.'], targetQuestionCount: 4 },
    { id: 'phy10-qt24-st3', name: 'Số chỉ cân trong thang máy', example: 'Tìm N khi hệ có gia tốc.', recognitionSigns: ['Người/vật đứng trên cân trong hệ tăng tốc.'], targetQuestionCount: 7 },
    { id: 'phy10-qt24-st4', name: 'Trạng thái không trọng lượng biểu kiến', example: 'Suy N = 0 khi rơi tự do.', recognitionSigns: ['Cân mất số chỉ hoặc hệ rơi tự do.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt25', subTypes: [
    { id: 'phy10-qt25-st1', name: 'Chiều lực đàn hồi', example: 'Xác định lực chống lại kéo/nén.', recognitionSigns: ['Lò xo hoặc vật đàn hồi biến dạng.'], targetQuestionCount: 5 },
    { id: 'phy10-qt25-st2', name: 'Tính F, k hoặc Δl', example: 'Vận dụng F = k|Δl|.', recognitionSigns: ['Cho hai trong ba đại lượng F, k, Δl.'], targetQuestionCount: 6 },
    { id: 'phy10-qt25-st3', name: 'Lò xo treo cân bằng', example: 'Kết hợp kΔl = mg.', recognitionSigns: ['Vật treo đứng yên trên lò xo.'], targetQuestionCount: 7 },
    { id: 'phy10-qt25-st4', name: 'Đồ thị và giới hạn đàn hồi', example: 'Đọc k từ F–Δl và nhận diện miền Hooke.', recognitionSigns: ['Có bảng/đồ thị lực–độ dãn.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt26', subTypes: [
    { id: 'phy10-qt26-st1', name: 'Ma sát nghỉ và điều kiện trượt', example: 'So lực kéo với ma sát nghỉ cực đại.', recognitionSigns: ['Vật chưa trượt hoặc sắp trượt.'], targetQuestionCount: 6 },
    { id: 'phy10-qt26-st2', name: 'Ma sát trượt trên mặt ngang', example: 'Tính μN và gia tốc.', recognitionSigns: ['Vật đang trượt trên mặt nhám.'], targetQuestionCount: 6 },
    { id: 'phy10-qt26-st3', name: 'Ma sát trên mặt nghiêng/lực kéo nghiêng', example: 'Tìm N trước khi tính ma sát.', recognitionSigns: ['N không bằng mg trực tiếp.'], targetQuestionCount: 6 },
    { id: 'phy10-qt26-st4', name: 'Lực cản chất lưu', example: 'Giải thích lực cản tăng theo tốc độ.', recognitionSigns: ['Vật chuyển động trong không khí/nước.'], targetQuestionCount: 6 },
    { id: 'phy10-qt26-st5', name: 'Vận tốc giới hạn', example: 'Dùng điều kiện hợp lực bằng 0.', recognitionSigns: ['Rơi đều sau một thời gian.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt27', subTypes: [
    { id: 'phy10-qt27-st1', name: 'Lực căng một dây', example: 'Xác định chiều và độ lớn lực căng.', recognitionSigns: ['Vật treo/kéo bởi dây nhẹ.'], targetQuestionCount: 5 },
    { id: 'phy10-qt27-st2', name: 'Phản lực mặt đỡ', example: 'Tìm N khi có thêm lực đứng/nghiêng.', recognitionSigns: ['Vật tiếp xúc mặt đỡ.'], targetQuestionCount: 5 },
    { id: 'phy10-qt27-st3', name: 'Hai vật nối dây', example: 'Giải gia tốc chung và lực căng.', recognitionSigns: ['Dây nhẹ không dãn nối hai vật.'], targetQuestionCount: 7 },
    { id: 'phy10-qt27-st4', name: 'Hệ ròng rọc đơn giản', example: 'Viết Newton riêng cho từng vật.', recognitionSigns: ['Dây qua ròng rọc lí tưởng.'], targetQuestionCount: 7 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt28', subTypes: [
    { id: 'phy10-qt28-st1', name: 'Cân bằng hai lực', example: 'Nhận diện hai lực cùng giá, ngược chiều.', recognitionSigns: ['Vật chỉ chịu hai lực và cân bằng.'], targetQuestionCount: 5 },
    { id: 'phy10-qt28-st2', name: 'Cân bằng ba lực theo trục', example: 'Chiếu lực lên Ox, Oy.', recognitionSigns: ['Ba lực đồng quy, có góc.'], targetQuestionCount: 7 },
    { id: 'phy10-qt28-st3', name: 'Nút dây và vật treo', example: 'Tìm lực căng các dây nghiêng.', recognitionSigns: ['Nhiều dây gặp nhau tại một điểm.'], targetQuestionCount: 7 },
    { id: 'phy10-qt28-st4', name: 'Cân bằng trên mặt nghiêng', example: 'Kết hợp lực giữ, ma sát và trọng lực.', recognitionSigns: ['Vật đứng yên trên dốc.'], targetQuestionCount: 5 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt29', subTypes: [
    { id: 'phy10-qt29-st1', name: 'Moment của một lực', example: 'Tính M = Fd và chiều quay.', recognitionSigns: ['Có trục quay và giá lực.'], targetQuestionCount: 6 },
    { id: 'phy10-qt29-st2', name: 'Cánh tay đòn', example: 'Tìm khoảng cách vuông góc từ trục tới giá lực.', recognitionSigns: ['Lực nghiêng hoặc điểm đặt không đủ để suy d.'], targetQuestionCount: 6 },
    { id: 'phy10-qt29-st3', name: 'Quy tắc moment', example: 'Cân bằng moment thuận và ngược chiều.', recognitionSigns: ['Đòn bẩy, cân hoặc thanh có trục.'], targetQuestionCount: 6 },
    { id: 'phy10-qt29-st4', name: 'Thanh có trọng lượng/bản lề', example: 'Kể moment của trọng lực thanh.', recognitionSigns: ['Thanh đồng chất có khối lượng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt29-st5', name: 'Cân bằng lực và moment đồng thời', example: 'Tìm phản lực bản lề và lực giữ.', recognitionSigns: ['Có nhiều ẩn lực trên vật rắn.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt30', subTypes: [
    { id: 'phy10-qt30-st1', name: 'Khối lượng riêng', example: 'Tính ρ, m, V và đổi đơn vị.', recognitionSigns: ['Cho khối lượng và thể tích.'], targetQuestionCount: 5 },
    { id: 'phy10-qt30-st2', name: 'Áp suất lực trên mặt', example: 'Tính p = F/S và so sánh diện tích.', recognitionSigns: ['Lực ép vuông góc trên diện tích.'], targetQuestionCount: 5 },
    { id: 'phy10-qt30-st3', name: 'Áp suất chất lỏng theo độ sâu', example: 'Dùng p = ρgh.', recognitionSigns: ['Điểm nằm trong chất lỏng đứng yên.'], targetQuestionCount: 6 },
    { id: 'phy10-qt30-st4', name: 'So sánh điểm/bình và áp suất tổng', example: 'Phân biệt áp suất dư và tuyệt đối.', recognitionSigns: ['Nhiều điểm, nhiều chất lỏng hoặc có áp suất khí quyển.'], targetQuestionCount: 8 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 } }
];
