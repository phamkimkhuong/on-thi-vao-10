import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule3PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  { questionTypeId: 'phy10-qt31', subTypes: [
    { id: 'phy10-qt31-st1', name: 'Nhận diện dạng năng lượng', example: 'Chỉ ra động năng, thế năng, nhiệt, điện...', recognitionSigns: ['Hỏi năng lượng đang được tích trữ ở đâu.'], targetQuestionCount: 5 },
    { id: 'phy10-qt31-st2', name: 'Truyền và chuyển hóa năng lượng', example: 'Lập chuỗi năng lượng vào–ra.', recognitionSigns: ['Có thiết bị hoặc quá trình biến đổi.'], targetQuestionCount: 5 },
    { id: 'phy10-qt31-st3', name: 'Năng lượng có ích và hao phí', example: 'Nhận diện nhiệt/âm không mong muốn.', recognitionSigns: ['Hỏi phần hữu ích và thất thoát.'], targetQuestionCount: 4 },
    { id: 'phy10-qt31-st4', name: 'Sơ đồ/bảo toàn năng lượng', example: 'Hoàn thiện sơ đồ Sankey hoặc cân bằng năng lượng.', recognitionSigns: ['Có số liệu năng lượng vào, ra.'], targetQuestionCount: 4 }
  ], coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'diagram', 'table'], masteryHoldoutCount: 3 } },
  { questionTypeId: 'phy10-qt32', subTypes: [
    { id: 'phy10-qt32-st1', name: 'Công của lực cùng/ngược chiều', example: 'Tính A = ±Fs.', recognitionSigns: ['Lực song song chuyển dời.'], targetQuestionCount: 6 },
    { id: 'phy10-qt32-st2', name: 'Công của lực hợp góc', example: 'Dùng Fs cosα.', recognitionSigns: ['Cho góc giữa lực và chuyển dời.'], targetQuestionCount: 6 },
    { id: 'phy10-qt32-st3', name: 'Công của các lực đặc biệt', example: 'Trọng lực, ma sát, phản lực, hướng tâm.', recognitionSigns: ['Hỏi riêng công của một lực cụ thể.'], targetQuestionCount: 6 },
    { id: 'phy10-qt32-st4', name: 'Công tổng/nhiều chặng', example: 'Cộng đại số công từng lực hoặc từng đoạn.', recognitionSigns: ['Có nhiều lực hoặc quỹ đạo đổi hướng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt32-st5', name: 'Công từ đồ thị F–s', example: 'Tính diện tích đại số dưới đồ thị.', recognitionSigns: ['Có lực biến thiên theo vị trí.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'graph', 'diagram'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt33', subTypes: [
    { id: 'phy10-qt33-st1', name: 'Công suất trung bình', example: 'Tính P = A/t.', recognitionSigns: ['Cho công/năng lượng và thời gian.'], targetQuestionCount: 6 },
    { id: 'phy10-qt33-st2', name: 'So sánh máy/thời gian', example: 'Suy máy mạnh hơn hoặc thời gian cần thiết.', recognitionSigns: ['Cùng công khác thời gian hoặc ngược lại.'], targetQuestionCount: 6 },
    { id: 'phy10-qt33-st3', name: 'Công suất cơ học P = Fv', example: 'Tính với lực cùng/hợp góc vận tốc.', recognitionSigns: ['Cho lực và vận tốc.'], targetQuestionCount: 6 },
    { id: 'phy10-qt33-st4', name: 'Đổi đơn vị và công suất định mức', example: 'W, kW, kWh và giới hạn thiết bị.', recognitionSigns: ['Có nhãn công suất hoặc đơn vị điện năng.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt34', subTypes: [
    { id: 'phy10-qt34-st1', name: 'Tính hiệu suất', example: 'H = Eích/Etoàn phần.', recognitionSigns: ['Có năng lượng/công có ích và cung cấp.'], targetQuestionCount: 6 },
    { id: 'phy10-qt34-st2', name: 'Suy năng lượng vào hoặc có ích', example: 'Biến đổi công thức hiệu suất.', recognitionSigns: ['Cho H và một trong hai năng lượng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt34-st3', name: 'Hiệu suất nhiều giai đoạn', example: 'Nhân hiệu suất các khâu nối tiếp.', recognitionSigns: ['Năng lượng qua nhiều thiết bị/quá trình.'], targetQuestionCount: 6 },
    { id: 'phy10-qt34-st4', name: 'Đánh giá dữ liệu và giới hạn', example: 'Phát hiện H > 100% hoặc sai định nghĩa đầu ra.', recognitionSigns: ['Yêu cầu kiểm tra tính hợp lí.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt35', subTypes: [
    { id: 'phy10-qt35-st1', name: 'Tính động năng', example: 'Tìm Wđ, m hoặc v.', recognitionSigns: ['Cho khối lượng và tốc độ.'], targetQuestionCount: 6 },
    { id: 'phy10-qt35-st2', name: 'So sánh theo m và v', example: 'Suy quan hệ tỉ lệ v².', recognitionSigns: ['Thay đổi khối lượng/tốc độ.'], targetQuestionCount: 5 },
    { id: 'phy10-qt35-st3', name: 'Định lí động năng một lực', example: 'Dùng A = ΔWđ.', recognitionSigns: ['Hỏi công làm thay đổi tốc độ.'], targetQuestionCount: 6 },
    { id: 'phy10-qt35-st4', name: 'Định lí động năng nhiều lực', example: 'Công tổng của kéo, ma sát, trọng lực.', recognitionSigns: ['Nhiều lực sinh công.'], targetQuestionCount: 7 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt36', subTypes: [
    { id: 'phy10-qt36-st1', name: 'Thế năng trọng trường', example: 'Tính Wt = mgh theo mốc chọn.', recognitionSigns: ['Cho độ cao và mốc thế năng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt36-st2', name: 'Độ biến thiên thế năng và công trọng lực', example: 'Liên hệ công trọng lực với A_P = −ΔWt.', recognitionSigns: ['Vật đổi độ cao giữa hai điểm.'], targetQuestionCount: 6 },
    { id: 'phy10-qt36-st3', name: 'Thế năng đàn hồi', example: 'Tính thế năng đàn hồi bằng kx²/2.', recognitionSigns: ['Lò xo biến dạng trong giới hạn đàn hồi.'], targetQuestionCount: 6 },
    { id: 'phy10-qt36-st4', name: 'Mốc thế năng và so sánh trạng thái', example: 'Đổi mốc nhưng giữ ΔWt.', recognitionSigns: ['Hỏi dấu/giá trị khi chọn mốc khác.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 4 } },
  { questionTypeId: 'phy10-qt37', subTypes: [
    { id: 'phy10-qt37-st1', name: 'Rơi/trượt không ma sát', example: 'Đổi thế năng thành động năng.', recognitionSigns: ['Chỉ có lực thế sinh công.'], targetQuestionCount: 6 },
    { id: 'phy10-qt37-st2', name: 'Ném lên/con lắc', example: 'Tìm độ cao, tốc độ tại vị trí khác.', recognitionSigns: ['Chuyển đổi động–thế năng qua hai trạng thái.'], targetQuestionCount: 6 },
    { id: 'phy10-qt37-st3', name: 'Cơ năng với lò xo', example: 'Trao đổi động năng và thế năng đàn hồi.', recognitionSigns: ['Có lò xo và vật chuyển động.'], targetQuestionCount: 6 },
    { id: 'phy10-qt37-st4', name: 'Có lực không bảo toàn', example: 'Cơ năng giảm/tăng bằng công lực ngoài.', recognitionSigns: ['Có ma sát, lực kéo hoặc hao phí.'], targetQuestionCount: 6 },
    { id: 'phy10-qt37-st5', name: 'Bài toán nhiều trạng thái và điều kiện', example: 'Kết hợp bảo toàn với hình học/động lực học.', recognitionSigns: ['Nhiều mốc hoặc yêu cầu điều kiện đạt tới vị trí.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram', 'graph'], masteryHoldoutCount: 5 } },
  { questionTypeId: 'phy10-qt38', subTypes: [
    { id: 'phy10-qt38-st1', name: 'Đọc nhãn và dữ liệu năng lượng', example: 'Suy năng lượng/công suất từ bảng thiết bị.', recognitionSigns: ['Có bảng, nhãn hoặc hóa đơn năng lượng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt38-st2', name: 'Sơ đồ dòng năng lượng', example: 'Đọc/lập sơ đồ Sankey.', recognitionSigns: ['Độ rộng hoặc số liệu các nhánh năng lượng.'], targetQuestionCount: 6 },
    { id: 'phy10-qt38-st3', name: 'So sánh phương án sử dụng năng lượng', example: 'Đánh giá hiệu suất, thời gian, chi phí.', recognitionSigns: ['Nhiều thiết bị/phương án.'], targetQuestionCount: 6 },
    { id: 'phy10-qt38-st4', name: 'Thí nghiệm và dữ liệu cơ năng', example: 'Đánh giá bảo toàn từ số liệu đo.', recognitionSigns: ['Bảng vị trí–vận tốc hoặc năng lượng trước/sau.'], targetQuestionCount: 6 }
  ], coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 4 } }
];
