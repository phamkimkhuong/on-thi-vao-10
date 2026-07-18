import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt8', subTypes: [
    { id: 'phy10-qt8-st1', name: 'Vật mốc và tính tương đối', example: 'Xác định chuyển động so với người, xe hoặc mặt đất.', recognitionSigns: ['Có từ “so với” hoặc nhiều vật quan sát.'], targetQuestionCount: 5 },
    { id: 'phy10-qt8-st2', name: 'Chọn hệ quy chiếu', example: 'Chọn vật mốc, trục, gốc và đồng hồ.', recognitionSigns: ['Yêu cầu mô tả đầy đủ một chuyển động.'], targetQuestionCount: 5 },
    { id: 'phy10-qt8-st3', name: 'Tọa độ có dấu', example: 'Tìm tọa độ bên trái/phải gốc theo chiều dương.', recognitionSigns: ['Có trục Ox và vị trí so với O.'], targetQuestionCount: 4 },
    { id: 'phy10-qt8-st4', name: 'Thời điểm và khoảng thời gian', example: 'Phân biệt t với Δt từ hai mốc.', recognitionSigns: ['Cho giờ bắt đầu/kết thúc hoặc mốc t = 0.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt9', subTypes: [
    { id: 'phy10-qt9-st1', name: 'Một chặng không đổi chiều', example: 'So sánh s và |Δx| trên một đoạn thẳng.', recognitionSigns: ['Vật đi thẳng từ đầu đến cuối.'], targetQuestionCount: 5 },
    { id: 'phy10-qt9-st2', name: 'Nhiều chặng có quay lại', example: 'Cộng quãng đường và tính vị trí cuối.', recognitionSigns: ['Có “quay lại”, “đổi chiều” hoặc nhiều chặng.'], targetQuestionCount: 7 },
    { id: 'phy10-qt9-st3', name: 'Vector độ dịch chuyển', example: 'Xác định độ lớn, phương và chiều.', recognitionSigns: ['Hỏi vector hoặc dấu của độ dịch chuyển.'], targetQuestionCount: 5 },
    { id: 'phy10-qt9-st4', name: 'Suy luận từ vị trí đầu–cuối', example: 'Tìm dữ kiện còn thiếu khi biết s và Δx.', recognitionSigns: ['Đề cho cả quãng đường và vị trí.'], targetQuestionCount: 7 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt10', subTypes: [
    { id: 'phy10-qt10-st1', name: 'Tốc độ trung bình một/nhiều chặng', example: 'Tính tổng quãng đường chia tổng thời gian.', recognitionSigns: ['Hỏi nhanh chậm trên cả hành trình.'], targetQuestionCount: 6 },
    { id: 'phy10-qt10-st2', name: 'Vận tốc trung bình', example: 'Dùng độ dịch chuyển có dấu.', recognitionSigns: ['Hỏi vận tốc hoặc hành trình có đổi chiều.'], targetQuestionCount: 6 },
    { id: 'phy10-qt10-st3', name: 'Bài toán dừng nghỉ', example: 'Tính tốc độ trung bình kể cả thời gian nghỉ.', recognitionSigns: ['Có khoảng nghỉ hoặc chờ.'], targetQuestionCount: 6 },
    { id: 'phy10-qt10-st4', name: 'Tốc độ tức thời và dữ liệu đo', example: 'Đọc tốc kế/cổng quang tại một thời điểm.', recognitionSigns: ['Hỏi “tại thời điểm” hoặc số chỉ thiết bị.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt11', subTypes: [
    { id: 'phy10-qt11-st1', name: 'Cùng chiều và đuổi kịp', example: 'Tính vận tốc tương đối bằng hiệu có dấu.', recognitionSigns: ['Hai vật đi cùng chiều hoặc đuổi nhau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt11-st2', name: 'Ngược chiều và gặp nhau', example: 'Tính tốc độ khép khoảng cách.', recognitionSigns: ['Hai vật tiến lại gần từ hai phía.'], targetQuestionCount: 6 },
    { id: 'phy10-qt11-st3', name: 'Vật–môi trường–bờ', example: 'Ghép vận tốc thuyền/nước/bờ.', recognitionSigns: ['Có ba hệ quy chiếu lồng nhau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt11-st4', name: 'Qua sông hai chiều', example: 'Phân tích thành phần ngang và dọc.', recognitionSigns: ['Hai vận tốc vuông góc và hỏi hướng/tầm lệch.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt12', subTypes: [
    { id: 'phy10-qt12-st1', name: 'Đọc vị trí và trạng thái', example: 'Đọc x tại t, nhận diện đứng yên/đổi chiều.', recognitionSigns: ['Có đồ thị x–t nhiều đoạn.'], targetQuestionCount: 6 },
    { id: 'phy10-qt12-st2', name: 'Tính vận tốc từ hệ số góc', example: 'Dùng Δx/Δt trên một đoạn.', recognitionSigns: ['Hỏi độ dốc hoặc vận tốc.'], targetQuestionCount: 6 },
    { id: 'phy10-qt12-st3', name: 'So sánh nhiều vật và giao điểm', example: 'Xác định thời điểm hai vật gặp nhau.', recognitionSigns: ['Có từ hai đường trên cùng hệ trục.'], targetQuestionCount: 6 },
    { id: 'phy10-qt12-st4', name: 'Dựng/chuyển đổi biểu diễn', example: 'Từ bảng hoặc phương trình dựng đồ thị x–t.', recognitionSigns: ['Cho bảng (t,x) hoặc x(t).'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt13', subTypes: [
    { id: 'phy10-qt13-st1', name: 'Gia tốc trung bình', example: 'Tính Δv/Δt với vận tốc có dấu.', recognitionSigns: ['Cho vận tốc ở hai thời điểm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt13-st2', name: 'Vector và dấu gia tốc', example: 'Xác định phương chiều của a.', recognitionSigns: ['Hỏi hướng biến thiên vận tốc.'], targetQuestionCount: 5 },
    { id: 'phy10-qt13-st3', name: 'Nhanh dần và chậm dần', example: 'So dấu v và a ở cả chiều dương/âm.', recognitionSigns: ['Hỏi trạng thái nhanh/chậm dần.'], targetQuestionCount: 7 },
    { id: 'phy10-qt13-st4', name: 'Suy luận từ bảng/đồ thị vận tốc', example: 'Ước lượng a từ dữ liệu.', recognitionSigns: ['Có bảng v–t hoặc mô tả độ dốc.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt14', subTypes: [
    { id: 'phy10-qt14-st1', name: 'Hệ thức vận tốc–thời gian', example: 'Tìm v, v₀, a hoặc t từ v = v₀ + at.', recognitionSigns: ['Không cần quãng đường.'], targetQuestionCount: 6 },
    { id: 'phy10-qt14-st2', name: 'Phương trình tọa độ/quãng đường', example: 'Dùng Δx = v₀t + at²/2.', recognitionSigns: ['Cho thời gian và hỏi vị trí/quãng đường.'], targetQuestionCount: 6 },
    { id: 'phy10-qt14-st3', name: 'Hệ thức không thời gian', example: 'Dùng v² − v₀² = 2aΔx.', recognitionSigns: ['Không cho hoặc không hỏi thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt14-st4', name: 'Dừng lại và đổi chiều', example: 'Tìm thời điểm v = 0 và chọn nghiệm vật lí.', recognitionSigns: ['Có phanh, ném lên hoặc chuyển động chậm dần.'], targetQuestionCount: 6 },
    { id: 'phy10-qt14-st5', name: 'Nhiều giai đoạn/hai vật', example: 'Ghép các chặng hoặc điều kiện gặp nhau.', recognitionSigns: ['Gia tốc thay đổi theo chặng hoặc có hai phương trình chuyển động.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt15', subTypes: [
    { id: 'phy10-qt15-st1', name: 'Đọc vận tốc và trạng thái', example: 'Đọc v tại t, nhận diện v = 0 và đổi chiều.', recognitionSigns: ['Có đồ thị v–t.'], targetQuestionCount: 6 },
    { id: 'phy10-qt15-st2', name: 'Gia tốc từ độ dốc', example: 'Tính Δv/Δt trên từng đoạn.', recognitionSigns: ['Hỏi gia tốc hoặc đoạn nhanh/chậm dần.'], targetQuestionCount: 6 },
    { id: 'phy10-qt15-st3', name: 'Độ dịch chuyển từ diện tích đại số', example: 'Cộng diện tích có dấu.', recognitionSigns: ['Hỏi vị trí cuối hoặc Δx.'], targetQuestionCount: 6 },
    { id: 'phy10-qt15-st4', name: 'Quãng đường từ diện tích tuyệt đối', example: 'Tách phần trên/dưới trục thời gian.', recognitionSigns: ['Hỏi tổng đường đi khi v đổi dấu.'], targetQuestionCount: 6 },
    { id: 'phy10-qt15-st5', name: 'Dựng và liên hệ đồ thị', example: 'Từ mô tả chuyển động dựng v–t hoặc liên hệ x–t.', recognitionSigns: ['Yêu cầu chọn/vẽ đồ thị phù hợp.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt16', subTypes: [
    { id: 'phy10-qt16-st1', name: 'Thả rơi từ nghỉ', example: 'Tính t, h hoặc v khi v₀ = 0.', recognitionSigns: ['“Thả rơi”, bỏ qua cản không khí.'], targetQuestionCount: 6 },
    { id: 'phy10-qt16-st2', name: 'Quãng đường theo giây', example: 'Tính quãng đường trong giây cuối hoặc hai khoảng.', recognitionSigns: ['Hỏi trong giây thứ n.'], targetQuestionCount: 6 },
    { id: 'phy10-qt16-st3', name: 'Ném thẳng đứng', example: 'Tìm độ cao cực đại và thời gian lên/xuống.', recognitionSigns: ['Vận tốc đầu hướng lên hoặc xuống.'], targetQuestionCount: 6 },
    { id: 'phy10-qt16-st4', name: 'Hai vật rơi/ném liên tiếp', example: 'Tìm khoảng cách hoặc thời điểm gặp.', recognitionSigns: ['Hai vật bắt đầu ở các thời điểm khác nhau.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt17', subTypes: [
    { id: 'phy10-qt17-st1', name: 'Thời gian rơi', example: 'Tìm t từ chuyển động thành phần thẳng đứng.', recognitionSigns: ['Ném ngang từ độ cao h.'], targetQuestionCount: 6 },
    { id: 'phy10-qt17-st2', name: 'Tầm xa và vị trí', example: 'Dùng x = v₀t cùng phương trình rơi.', recognitionSigns: ['Hỏi khoảng ngang khi chạm đất.'], targetQuestionCount: 6 },
    { id: 'phy10-qt17-st3', name: 'Vận tốc và góc chạm', example: 'Ghép vₓ, vᵧ theo vector.', recognitionSigns: ['Hỏi độ lớn/hướng vận tốc tại một điểm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt17-st4', name: 'Quỹ đạo và bài toán ngược', example: 'Suy v₀ hoặc h từ điểm rơi/quỹ đạo.', recognitionSigns: ['Cho tầm xa hoặc phương trình quỹ đạo.'], targetQuestionCount: 6 },
    { id: 'phy10-qt17-st5', name: 'So sánh nhiều vật ném', example: 'So thời gian/tầm xa khi đổi v₀ hoặc h.', recognitionSigns: ['Có hai lần ném với điều kiện khác nhau.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt18', subTypes: [
    { id: 'phy10-qt18-st1', name: 'Đo tốc độ bằng cổng quang/video', example: 'Chọn quãng đường và khoảng thời gian tương ứng.', recognitionSigns: ['Có cổng quang, video hoặc khung hình.'], targetQuestionCount: 6 },
    { id: 'phy10-qt18-st2', name: 'Đo gia tốc/rơi tự do', example: 'Lập bảng h–t² và suy g.', recognitionSigns: ['Có nhiều cặp độ cao–thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt18-st3', name: 'Xử lí dữ liệu động học', example: 'Tính vận tốc/gia tốc từ bảng hoặc đồ thị.', recognitionSigns: ['Dữ liệu vị trí/vận tốc theo thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt18-st4', name: 'Sai số và điểm ngoại lai', example: 'Đánh giá độ chụm, số liệu bất thường.', recognitionSigns: ['Có phép đo lặp hoặc giá trị lệch mạnh.'], targetQuestionCount: 6 },
    { id: 'phy10-qt18-st5', name: 'Thiết kế và cải tiến thí nghiệm', example: 'Kiểm soát biến và giảm sai số.', recognitionSigns: ['Yêu cầu đề xuất/sửa quy trình.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 5 } }
];
