import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10BiologyModule7PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'bio10-qt8',
    subTypes: [
      { id: 'bio10-qt8-st1', name: 'Thành phần và cấu trúc virus', example: 'Nhận diện genome, capsid, vỏ ngoài và gai bề mặt.', recognitionSigns: ['Đề hỏi bộ phận hoặc chức năng cấu trúc của virus.', 'Phải phân biệt thành phần bắt buộc với thành phần chỉ có ở một số virus.'], targetQuestionCount: 12 },
      { id: 'bio10-qt8-st2', name: 'Bản chất vô bào và kí sinh nội bào bắt buộc', example: 'Giải thích vì sao virus không tự chuyển hóa hay sinh sản ngoài tế bào.', recognitionSigns: ['Đề so sánh virus với tế bào hoặc hỏi khả năng sống độc lập.', 'Cần dựa vào việc virus thiếu ribosome và hệ chuyển hóa hoàn chỉnh.'], targetQuestionCount: 12 },
      { id: 'bio10-qt8-st3', name: 'Tính đặc hiệu vật chủ và cấu trúc–chức năng', example: 'Suy loại tế bào virus có thể xâm nhập từ tương tác gai–thụ thể.', recognitionSigns: ['Đề nhắc thụ thể, phổ vật chủ hoặc đột biến protein bề mặt.', 'Không đồng nhất bám được với hoàn tất toàn bộ chu trình nhân lên.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'table'] }
  },
  {
    questionTypeId: 'bio10-qt42',
    subTypes: [
      { id: 'bio10-qt42-st1', name: 'Các giai đoạn nhân lên của virus', example: 'Sắp xếp bám–xâm nhập–sinh tổng hợp–lắp ráp–giải phóng.', recognitionSigns: ['Đề yêu cầu thứ tự hoặc xác định giai đoạn bị thuốc chặn.', 'Cần bám vào sự kiện đặc trưng thay vì học tên rời rạc.'], targetQuestionCount: 12 },
      { id: 'bio10-qt42-st2', name: 'Chu trình tan, tiềm tan và giải phóng', example: 'Phân biệt ly giải, nảy chồi và trạng thái hệ gene tiềm ẩn.', recognitionSigns: ['Đề nhắc tế bào vỡ, nảy chồi hoặc genome virus tồn tại lâu trong tế bào.', 'Cần tách cách giải phóng khỏi khả năng nhân lên.'], targetQuestionCount: 12 },
      { id: 'bio10-qt42-st3', name: 'Cơ chế gây bệnh và can thiệp kháng virus', example: 'Nối sự chiếm dụng tế bào, tổn thương mô và đáp ứng miễn dịch với triệu chứng.', recognitionSigns: ['Đề hỏi vì sao tế bào/mô bị tổn thương hoặc vị trí thuốc tác động.', 'Mức độ bệnh không chỉ do số tế bào bị virus phá trực tiếp.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'table', 'graph'] }
  },
  {
    questionTypeId: 'bio10-qt43',
    subTypes: [
      { id: 'bio10-qt43-st1', name: 'Đường truyền và cắt chuỗi lây nhiễm', example: 'Chọn biện pháp phòng bệnh phù hợp với đường hô hấp, tiếp xúc, vector hoặc nước.', recognitionSigns: ['Đề mô tả đường lây hoặc một mắt xích dịch tễ.', 'Biện pháp đúng phải tác động đúng nguồn, đường truyền hoặc người cảm nhiễm.'], targetQuestionCount: 12 },
      { id: 'bio10-qt43-st2', name: 'Vaccine, miễn dịch và hiệu quả bảo vệ', example: 'Diễn giải đúng hiệu quả vaccine và trí nhớ miễn dịch.', recognitionSigns: ['Đề nhắc vaccine, kháng thể, tế bào T hoặc phần trăm hiệu quả.', 'Không biến giảm nguy cơ tương đối thành bảo vệ tuyệt đối cho từng người.'], targetQuestionCount: 12 },
      { id: 'bio10-qt43-st3', name: 'Biến thể và dữ liệu dịch tễ', example: 'Đánh giá số ca, tỉ lệ dương tính và đặc tính của biến thể.', recognitionSigns: ['Đề có số ca, dân số, xét nghiệm hoặc biến thể.', 'Cần chuẩn hóa mẫu số/thời gian và tách khả năng lây khỏi mức độ nặng.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'table', 'graph'] }
  },
  {
    questionTypeId: 'bio10-qt44',
    subTypes: [
      { id: 'bio10-qt44-st1', name: 'Ứng dụng virus và đánh giá rủi ro', example: 'Phân tích vector virus, phage trị liệu hoặc virus diệt côn trùng.', recognitionSigns: ['Đề nêu ứng dụng virus trong y học, nông nghiệp hoặc công nghệ gene.', 'Cần cân bằng lợi ích, tính đặc hiệu và rủi ro sinh học.'], targetQuestionCount: 12 },
      { id: 'bio10-qt44-st2', name: 'Đánh giá nguồn tin và truyền thông khoa học', example: 'Kiểm tra nguồn, bằng chứng, cỡ mẫu và mức chắc chắn của thông tin sức khỏe.', recognitionSigns: ['Đề cho bài viết, thông điệp hoặc tuyên bố sức khỏe.', 'Không dùng tiêu đề, biểu đồ hay uy tín mơ hồ thay cho bằng chứng gốc.'], targetQuestionCount: 12 },
      { id: 'bio10-qt44-st3', name: 'Thiết kế khảo sát, đạo đức và sai lệch', example: 'Nhận diện thiên lệch chọn mẫu và yêu cầu bảo vệ dữ liệu cá nhân.', recognitionSigns: ['Đề mô tả khảo sát, người tham gia hoặc dữ liệu cá nhân.', 'Cần xét tính đại diện, đồng thuận, quyền riêng tư và giới hạn suy rộng.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'table', 'graph', 'experiment'] }
  }
];
