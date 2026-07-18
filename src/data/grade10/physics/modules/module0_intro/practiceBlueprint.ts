import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10PhysicsModule0PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'phy10-qt1',
    subTypes: [
      { id: 'phy10-qt1-st1', name: 'Nhận diện phương pháp Vật lí', example: 'Phân biệt quan sát, giả thuyết, mô hình và kết luận.', recognitionSigns: ['Đề mô tả các bước tìm hiểu một hiện tượng.'], targetQuestionCount: 4 },
      { id: 'phy10-qt1-st2', name: 'Quy tắc an toàn', example: 'Chọn cách xử lí đúng khi dùng điện, nhiệt hoặc vật rơi.', recognitionSigns: ['Có dụng cụ thí nghiệm hoặc tình huống mất an toàn.'], targetQuestionCount: 5 },
      { id: 'phy10-qt1-st3', name: 'Đánh giá quy trình', example: 'Phát hiện bước thiếu hoặc kết luận vượt quá chứng cứ.', recognitionSigns: ['Đề cho một quy trình hay báo cáo thí nghiệm.'], targetQuestionCount: 5 },
      { id: 'phy10-qt1-st4', name: 'Tình huống thực hành mới', example: 'Đề xuất cách nghiên cứu và bảo đảm an toàn.', recognitionSigns: ['Yêu cầu tự xây dựng phương án trong bối cảnh lạ.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'phy10-qt2',
    subTypes: [
      { id: 'phy10-qt2-st1', name: 'Nhận diện đại lượng và đơn vị SI', example: 'Ghép đại lượng với đơn vị cơ bản hoặc dẫn xuất.', recognitionSigns: ['Hỏi tên, kí hiệu hoặc đơn vị SI.'], targetQuestionCount: 4 },
      { id: 'phy10-qt2-st2', name: 'Đổi đơn vị một bước', example: 'Đổi km/h sang m/s hoặc cm sang m.', recognitionSigns: ['Hai đơn vị cùng đại lượng.'], targetQuestionCount: 5 },
      { id: 'phy10-qt2-st3', name: 'Đổi đơn vị diện tích, thể tích và lũy thừa', example: 'Đổi cm² sang m² hoặc g/cm³ sang kg/m³.', recognitionSigns: ['Đơn vị có số mũ hoặc là tỉ số.'], targetQuestionCount: 5 },
      { id: 'phy10-qt2-st4', name: 'Chọn dụng cụ và giới hạn đo', example: 'Chọn thước/cân phù hợp với vật cần đo.', recognitionSigns: ['Đề cho nhiều dụng cụ có độ chia khác nhau.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'diagram'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'phy10-qt3',
    subTypes: [
      { id: 'phy10-qt3-st1', name: 'Đọc dụng cụ đo', example: 'Đọc thước, đồng hồ hoặc cân đúng độ chia.', recognitionSigns: ['Có hình/mô tả vạch chia và vị trí kim.'], targetQuestionCount: 5 },
      { id: 'phy10-qt3-st2', name: 'Tính giá trị trung bình', example: 'Tính trung bình từ nhiều lần đo.', recognitionSigns: ['Có dãy kết quả cùng đại lượng.'], targetQuestionCount: 5 },
      { id: 'phy10-qt3-st3', name: 'Phát hiện số liệu bất thường', example: 'Đánh giá điểm ngoại lai trước khi lấy trung bình.', recognitionSigns: ['Một kết quả lệch rõ so với các lần còn lại.'], targetQuestionCount: 4 },
      { id: 'phy10-qt3-st4', name: 'Đọc và so sánh bảng đo', example: 'So sánh hai nhóm đo về độ chụm và giá trị trung bình.', recognitionSigns: ['Có bảng nhiều nhóm hoặc nhiều dụng cụ.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'diagram', 'experiment'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'phy10-qt4',
    subTypes: [
      { id: 'phy10-qt4-st1', name: 'Sai số dụng cụ và ngẫu nhiên', example: 'Xác định thành phần sai số từ độ chia và độ phân tán.', recognitionSigns: ['Cho độ chia nhỏ nhất hoặc nhiều lần đo.'], targetQuestionCount: 5 },
      { id: 'phy10-qt4-st2', name: 'Sai số tuyệt đối', example: 'Tính sai số tuyệt đối của phép đo trực tiếp.', recognitionSigns: ['Hỏi khoảng lệch có cùng đơn vị với đại lượng đo.'], targetQuestionCount: 5 },
      { id: 'phy10-qt4-st3', name: 'Sai số tỉ đối', example: 'Tính phần trăm sai số.', recognitionSigns: ['Hỏi độ chính xác tương đối hoặc phần trăm.'], targetQuestionCount: 4 },
      { id: 'phy10-qt4-st4', name: 'So sánh chất lượng phép đo', example: 'Chọn phép đo tốt hơn từ sai số tuyệt đối/tỉ đối.', recognitionSigns: ['Hai phép đo có thang giá trị khác nhau.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'phy10-qt5',
    subTypes: [
      { id: 'phy10-qt5-st1', name: 'Làm tròn theo sai số', example: 'Làm tròn sai số và giá trị trung bình cùng hàng.', recognitionSigns: ['Có giá trị đo kèm sai số chưa làm tròn.'], targetQuestionCount: 5 },
      { id: 'phy10-qt5-st2', name: 'Ghi kết quả chuẩn', example: 'Viết A = Ā ± ΔA kèm đơn vị.', recognitionSigns: ['Yêu cầu trình bày kết quả cuối cùng.'], targetQuestionCount: 5 },
      { id: 'phy10-qt5-st3', name: 'Chữ số có nghĩa', example: 'Xác định số chữ số có nghĩa phù hợp.', recognitionSigns: ['So sánh nhiều cách ghi cùng một giá trị.'], targetQuestionCount: 4 },
      { id: 'phy10-qt5-st4', name: 'Phát hiện cách ghi sai', example: 'Chọn kết quả sai hàng thập phân hoặc thiếu đơn vị.', recognitionSigns: ['Có nhiều phương án trình bày kết quả.'], targetQuestionCount: 4 }
    ],
    coverage: { targetQuestionCount: 18, minimumQuestionsPerSubType: 3, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation'], masteryHoldoutCount: 3 }
  },
  {
    questionTypeId: 'phy10-qt6',
    subTypes: [
      { id: 'phy10-qt6-st1', name: 'Đại lượng tổng và hiệu', example: 'Lan truyền sai số tuyệt đối trong A = B ± C.', recognitionSigns: ['Đại lượng cần tìm là tổng hoặc hiệu các phép đo.'], targetQuestionCount: 6 },
      { id: 'phy10-qt6-st2', name: 'Đại lượng tích và thương', example: 'Lan truyền sai số tỉ đối trong A = BC hoặc B/C.', recognitionSigns: ['Công thức chứa phép nhân hoặc chia.'], targetQuestionCount: 6 },
      { id: 'phy10-qt6-st3', name: 'Đại lượng có lũy thừa', example: 'Ước lượng sai số của diện tích, thể tích.', recognitionSigns: ['Công thức có bình phương hoặc lập phương.'], targetQuestionCount: 6 },
      { id: 'phy10-qt6-st4', name: 'Phép đo gián tiếp nhiều bước', example: 'Từ số đo trực tiếp tính đại lượng và sai số cuối.', recognitionSigns: ['Phải đổi đơn vị và kết hợp nhiều phép đo.'], targetQuestionCount: 6 }
    ],
    coverage: { targetQuestionCount: 24, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'equation', 'table', 'experiment'], masteryHoldoutCount: 4 }
  },
  {
    questionTypeId: 'phy10-qt7',
    subTypes: [
      { id: 'phy10-qt7-st1', name: 'Xác định biến và đại lượng đo', example: 'Chỉ ra biến độc lập, phụ thuộc và kiểm soát.', recognitionSigns: ['Đề mô tả mục tiêu của phép đo/thí nghiệm.'], targetQuestionCount: 6 },
      { id: 'phy10-qt7-st2', name: 'Thiết kế quy trình đo', example: 'Sắp xếp dụng cụ và các bước thu dữ liệu.', recognitionSigns: ['Yêu cầu đề xuất hoặc sửa quy trình.'], targetQuestionCount: 6 },
      { id: 'phy10-qt7-st3', name: 'Xử lí bảng và đồ thị', example: 'Tính, vẽ hoặc suy ra quan hệ từ dữ liệu.', recognitionSigns: ['Có bảng số liệu hoặc trục đồ thị.'], targetQuestionCount: 6 },
      { id: 'phy10-qt7-st4', name: 'Độ chụm, độ đúng và ngoại lai', example: 'Đánh giá hai bộ dữ liệu so với giá trị chuẩn.', recognitionSigns: ['Có phép đo lặp hoặc giá trị tham chiếu.'], targetQuestionCount: 6 },
      { id: 'phy10-qt7-st5', name: 'Nguồn sai số và cải tiến', example: 'Nêu nguồn sai số cụ thể và cách giảm.', recognitionSigns: ['Hỏi giới hạn, độ tin cậy hoặc cách cải thiện.'], targetQuestionCount: 6 }
    ],
    coverage: { targetQuestionCount: 30, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'], requiredRepresentations: ['text', 'table', 'graph', 'diagram', 'experiment'], masteryHoldoutCount: 5 }
  }
];
