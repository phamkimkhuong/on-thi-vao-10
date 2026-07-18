import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule5PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt47', subTypes: [
    { id: 'phy10-qt47-st1', name: 'Đổi độ–radian', example: 'Đổi góc giữa độ và rad.', recognitionSigns: ['Góc quay có đơn vị độ/rad.'], targetQuestionCount: 5 },
    { id: 'phy10-qt47-st2', name: 'Số vòng và góc quét', example: 'Đổi N vòng thành 2πN.', recognitionSigns: ['Cho số vòng hoặc phần vòng.'], targetQuestionCount: 5 },
    { id: 'phy10-qt47-st3', name: 'Độ dài cung', example: 'Tính s = rθ với θ rad.', recognitionSigns: ['Hỏi quãng đường điểm trên vành.'], targetQuestionCount: 4 },
    { id: 'phy10-qt47-st4', name: 'Suy bán kính/góc từ cung', example: 'Biến đổi s = rθ.', recognitionSigns: ['Cho s và một trong r, θ.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt48', subTypes: [
    { id: 'phy10-qt48-st1', name: 'Chu kì và tần số', example: 'Dùng f = 1/T = N/t.', recognitionSigns: ['Cho số vòng và thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt48-st2', name: 'Tốc độ góc', example: 'Dùng ω = 2πf = 2π/T.', recognitionSigns: ['Hỏi rad/s.'], targetQuestionCount: 6 },
    { id: 'phy10-qt48-st3', name: 'Đổi rpm–Hz–rad/s', example: 'Đổi vòng/phút sang SI.', recognitionSigns: ['Có rpm hoặc vòng/phút.'], targetQuestionCount: 6 },
    { id: 'phy10-qt48-st4', name: 'Bài toán số vòng/thời gian', example: 'Suy N hoặc t từ chu kì/tần số.', recognitionSigns: ['Hỏi số vòng sau một khoảng.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt49', subTypes: [
    { id: 'phy10-qt49-st1', name: 'Tính v = ωr', example: 'Tìm v, ω hoặc r.', recognitionSigns: ['Cho bán kính và tốc độ góc/dài.'], targetQuestionCount: 6 },
    { id: 'phy10-qt49-st2', name: 'Dùng chu kì/tần số', example: 'Tính v = 2πr/T.', recognitionSigns: ['Cho T hoặc f thay vì ω.'], targetQuestionCount: 6 },
    { id: 'phy10-qt49-st3', name: 'So sánh điểm trên vật rắn quay', example: 'Cùng ω, v tỉ lệ r.', recognitionSigns: ['Hai điểm cách trục khác nhau.'], targetQuestionCount: 6 },
    { id: 'phy10-qt49-st4', name: 'Bánh xe lăn không trượt', example: 'Liên hệ vận tốc tịnh tiến và ωR.', recognitionSigns: ['Bánh xe lăn trên mặt đường.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt50', subTypes: [
    { id: 'phy10-qt50-st1', name: 'Hướng gia tốc hướng tâm', example: 'Vẽ a hướng vào tâm ở các vị trí.', recognitionSigns: ['Vật chuyển động tròn đều.'], targetQuestionCount: 5 },
    { id: 'phy10-qt50-st2', name: 'Tính từ v và r', example: 'Tính gia tốc hướng tâm bằng a = v²/r.', recognitionSigns: ['Cho tốc độ dài.'], targetQuestionCount: 5 },
    { id: 'phy10-qt50-st3', name: 'Tính từ ω và r', example: 'Tính gia tốc hướng tâm bằng a = ω²r.', recognitionSigns: ['Cho tốc độ góc.'], targetQuestionCount: 5 },
    { id: 'phy10-qt50-st4', name: 'So sánh và bài toán ngược', example: 'Suy r, v hoặc tỉ số gia tốc.', recognitionSigns: ['Thay đổi r, v hoặc ω.'], targetQuestionCount: 5 }
  ], coverage: { targetQuestionCount: 20, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt51', subTypes: [
    { id: 'phy10-qt51-st1', name: 'Nhận diện lực thực tạo hướng tâm', example: 'Ma sát, căng, hấp dẫn hoặc phản lực.', recognitionSigns: ['Hỏi lực nào giữ quỹ đạo tròn.'], targetQuestionCount: 6 },
    { id: 'phy10-qt51-st2', name: 'Một lực đóng vai trò hướng tâm', example: 'Đặt lực thực theo bán kính bằng mv²/r.', recognitionSigns: ['Chỉ một lực theo bán kính.'], targetQuestionCount: 6 },
    { id: 'phy10-qt51-st3', name: 'Nhiều lực theo bán kính', example: 'Chiếu tổng lực thực vào tâm.', recognitionSigns: ['Có trọng lực, phản lực, lực căng đồng thời.'], targetQuestionCount: 6 },
    { id: 'phy10-qt51-st4', name: 'Bài toán ngược lực/tốc độ/bán kính', example: 'Suy đại lượng giới hạn từ hợp lực.', recognitionSigns: ['Hỏi lực căng, tốc độ hoặc bán kính.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt52', subTypes: [
    { id: 'phy10-qt52-st1', name: 'Xe vào cua phẳng', example: 'Ma sát tạo lực hướng tâm và giới hạn tốc độ.', recognitionSigns: ['Đường cong nằm ngang.'], targetQuestionCount: 6 },
    { id: 'phy10-qt52-st2', name: 'Đường nghiêng', example: 'Chiếu N và P theo bán kính.', recognitionSigns: ['Mặt đường nghiêng một góc.'], targetQuestionCount: 6 },
    { id: 'phy10-qt52-st3', name: 'Vòng tròn đứng', example: 'Viết phương trình ở đỉnh/đáy.', recognitionSigns: ['Vật chuyển động trong vòng thẳng đứng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt52-st4', name: 'Điều kiện mất tiếp xúc/chùng dây', example: 'Đặt N = 0 hoặc T = 0.', recognitionSigns: ['Hỏi tốc độ tối thiểu/giới hạn.'], targetQuestionCount: 6 },
    { id: 'phy10-qt52-st5', name: 'Ứng dụng quay tổng hợp', example: 'Máy quay, vệ tinh, vật trên đĩa.', recognitionSigns: ['Bối cảnh mới cần chọn lực hướng tâm.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt53', subTypes: [
    { id: 'phy10-qt53-st1', name: 'Đo chu kì nhiều vòng', example: 'Tính T = t/N và giảm sai số bấm giờ.', recognitionSigns: ['Có số vòng và tổng thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt53-st2', name: 'Xử lí video/cảm biến', example: 'Đếm khoảng thời gian và xác định bán kính.', recognitionSigns: ['Có fps, khung hình hoặc cảm biến.'], targetQuestionCount: 6 },
    { id: 'phy10-qt53-st3', name: 'Tính đại lượng từ dữ liệu', example: 'Suy f, ω, v, a từ bảng đo.', recognitionSigns: ['Bảng r, N, t.'], targetQuestionCount: 6 },
    { id: 'phy10-qt53-st4', name: 'Kiểm chứng quan hệ', example: 'Vẽ đồ thị hoặc so tỉ lệ a–ω²r.', recognitionSigns: ['Nhiều bộ dữ liệu thay đổi một biến.'], targetQuestionCount: 6 },
    { id: 'phy10-qt53-st5', name: 'Sai số và cải tiến', example: 'Phát hiện đếm sai vòng, đo sai bán kính.', recognitionSigns: ['Hỏi độ tin cậy/nguồn sai số.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 5 } }
];
