import type { Question } from '@/types';
import { g10HistoryExpansionQuestions } from './questionExpansion';

const legacyHistoryQuestions: Question[] = [
  // Type 1: Hiện thực lịch sử & Nhận thức lịch sử
  {
    id: 'g10-his-q1',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Tất cả những gì đã diễn ra trong quá khứ, tồn tại một cách khách quan và không phụ thuộc vào ý muốn chủ quan của con người được gọi là gì?',
    options: [
      'A. Nhận thức lịch sử',
      'B. Hiện thực lịch sử',
      'C. Tri thức lịch sử',
      'D. Khai thác sử liệu'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Đặc điểm nào sau đây KHÔNG phải là đặc điểm của nhận thức lịch sử?',
    options: [
      'A. Phụ thuộc vào góc nhìn và phương pháp của nhà nghiên cứu',
      'B. Có thể thay đổi khi phát hiện thêm các nguồn sử liệu mới',
      'C. Tồn tại hoàn toàn độc lập và không bao giờ thay đổi',
      'D. Mang tính chủ quan của con người khi tái hiện quá khứ'
    ],
    correctAnswer: 'C',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q1b',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Tại sao cùng một sự kiện lịch sử trong quá khứ nhưng các nhà sử học ở các thời kỳ khác nhau lại có thể đưa ra những nhận thức và đánh giá khác nhau?',
    options: [
      'A. Vì hiện thực lịch sử tự thay đổi bản chất theo thời gian',
      'B. Vì nhận thức lịch sử phụ thuộc vào nguồn sử liệu khai thác, mục đích nghiên cứu và thế giới quan của người nghiên cứu',
      'C. Vì hiện thực lịch sử không hề tồn tại một cách khách quan',
      'D. Vì các nhà sử học không cần tuân thủ nguyên tắc trung thực'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q1c',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Đoạn câu chuyện "Thái sử Bá nước Tề thà chịu chết chứ quyết ghi đúng sự thật Thôi Trữ giết vua" trong SGK Lịch sử 10 (Kết nối tri thức) phản ánh nguyên tắc cơ bản nào hàng đầu của Sử học?',
    options: [
      'A. Nguyên tắc tiến bộ và nhân văn',
      'B. Nguyên tắc trung thực và khách quan',
      'C. Nguyên tắc hội nhập quốc tế',
      'D. Nguyên tắc dự báo tương lai'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q1d',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Nội dung nào sau đây phản ánh đúng CHỨC NĂNG KHOA HỌC của Sử học?',
    options: [
      'A. Giáo dục lòng yêu nước và truyền thống đạo đức cho thế hệ trẻ',
      'B. Phục dựng hiện thực lịch sử chân thực, khách quan và phát hiện quy luật vận động của lịch sử',
      'C. Đúc kết bài học kinh nghiệm để ứng dụng vào quản lý xã hội hiện đại',
      'D. Dự báo chính xác tuyệt đối thời điểm xảy ra các sự kiện tương lai'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q1e',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-1',
    content: 'Đối tượng nghiên cứu chính của Sử học là gì?',
    options: [
      'A. Toàn bộ sự vận động của vũ trụ và hành tinh Trái Đất',
      'B. Quy luật biến đổi của khí hậu và địa chất qua các thời kỳ',
      'C. Toàn bộ quá khứ của loài người trên tất cả các lĩnh vực',
      'D. Chỉ nghiên cứu các cuộc chiến tranh và các triều đại vua chúa'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // Type 2: Tri thức lịch sử & Sử liệu (Bài 2)
  {
    id: 'g10-his-q3',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Nguồn sử liệu nào sau đây là nguồn sử liệu trực tiếp (sử liệu gốc) của sự kiện được nghiên cứu?',
    options: [
      'A. Truyền thuyết dân gian truyền miệng qua nhiều thế hệ',
      'B. Bài báo phân tích lịch sử viết sau sự kiện 100 năm',
      'C. Văn bia, hiện vật khảo cổ được khai quật trực tiếp tại di tích',
      'D. Tiểu thuyết hư cấu lấy đề tài lịch sử'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2b',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Câu ca dao/câu thơ của Chủ tịch Hồ Chí Minh: "Dân ta phải biết sử ta / Cho tường gốc tích nước nhà Việt Nam" đề cập trực tiếp đến vai trò cốt lõi nào của tri thức lịch sử?',
    options: [
      'A. Giúp con người dự báo chính xác tuyệt đối các thiên tai trong tương lai',
      'B. Giúp con người hiểu rõ cội nguồn dân tộc, bồi dưỡng lòng yêu nước và ý thức bản sắc',
      'C. Cung cấp các công thức toán học và quy luật vận động của vũ trụ',
      'D. Thay thế hoàn toàn các môn khoa học tự nhiên trong đời sống'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2c',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Vì sao việc học tập và khám phá lịch sử cần phải thực hiện SUỐT ĐỜI?',
    options: [
      'A. Vì kiến thức lịch sử trong sách giáo khoa phổ thông thường xuyên bị sai lệch hoàn toàn',
      'B. Vì tri thức lịch sử rất rộng lớn, luôn phát triển và xuất hiện thêm tư liệu mới cần giải mã',
      'C. Vì các sự kiện trong quá khứ liên tục biến đổi và xảy ra lại hàng ngày',
      'D. Vì học sinh bắt buộc phải thi lại môn Lịch sử định kỳ mỗi năm'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2d',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Trong quy trình nghiên cứu lịch sử, bước KHẢO CHỨNG VÀ THẨM ĐỊNH SỬ LIỆU có vai trò quyết định như thế nào?',
    options: [
      'A. Giúp phát minh ra các nguồn sử liệu mới mà quá khứ chưa hề có',
      'B. Giúp xác minh tính chân thực, độ tin cậy và lọc bỏ thông tin giả mạo trước khi sử dụng',
      'C. Giúp biến nhận thức chủ quan của nhà sử học thành hiện thực lịch sử khách quan',
      'D. Giúp thay đổi kết quả của các cuộc chiến tranh đã diễn ra trong quá khứ'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2e',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Các hiện vật Trống đồng Đông Sơn được phát hiện qua khai quật khảo cổ thuộc loại hình sử liệu nào và có giá trị ra sao?',
    options: [
      'A. Sử liệu truyền miệng, mang tính chủ quan cao',
      'B. Sử liệu hiện vật, cung cấp bằng chứng trực tiếp và vẫn cần được khảo chứng',
      'C. Sử liệu thứ cấp được chép lại thời phong kiến',
      'D. Sử liệu chữ viết chưa được giải mã'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q2f',
    subjectId: 'history',
    topicId: 'g10-his-topic-1',
    questionTypeId: 'g10-his-type-2',
    content: 'Ý nghĩa thực tiễn nổi bật nhất của việc đút kết các bài học kinh nghiệm từ lịch sử đối với xã hội hiện đại là gì?',
    options: [
      'A. Giúp con người dự đoán thời tiết chính xác tuyệt đối',
      'B. Phục vụ thực tiễn hiện tại, giải quyết các thách thức và định hướng phát triển tương lai',
      'C. Giúp tái tạo lại chính xác cuộc sống của người cổ đại',
      'D. Giúp loài người ngừng giao lưu văn hóa với các dân tộc khác'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 3: Sử học với các ngành khoa học (Bài 3)
  {
    id: 'g10-his-q4',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-3',
    content: 'Các nhà khảo cổ học thường phối hợp với ngành Hóa học bằng phương pháp đo phóng xạ Cacbon 14 (C14) nhằm mục đích chủ yếu nào?',
    options: [
      'A. Xác định niên đại tuyệt đối của các di vật hữu cơ trong quá khứ',
      'B. Phân tích thành phần hóa học để làm sạch di vật',
      'C. Đánh giá giá trị kinh tế của cổ vật trên thị trường',
      'D. Phôi phục lại màu sắc nguyên bản của hiện vật'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q3b',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-3',
    content: 'Mối quan hệ giữa Sử học với các ngành Khoa học Xã hội và Nhân văn (như Văn học, Xã hội học, Khảo cổ học) có bản chất như thế nào?',
    options: [
      'A. Sử học hoàn toàn phụ thuộc và bị thay thế bởi môn Văn học',
      'B. Mối quan hệ tương hỗ hai chiều: Sử học cung cấp bối cảnh quá khứ, các ngành khác cung cấp tư liệu và phương pháp chuyên ngành',
      'C. Các ngành Khoa học Xã hội khác không hề sử dụng tri thức lịch sử',
      'D. Sử học chỉ độc lập nghiên cứu mà không cần phối hợp với ngành nào'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q3c',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-3',
    content: 'Ứng dụng của ngành Sinh học và Di truyền học (phân tích gen/ADN hài cốt cổ) giúp nhà sử học làm sáng tỏ vấn đề cốt lõi nào?',
    options: [
      'A. Xác định chính xác trọng lượng của cổ vật',
      'B. Xác định nguồn gốc chủng tộc, mối quan hệ huyết thống và con đường di cư của cư dân cổ đại',
      'C. Xác định tuổi thọ của các công trình kiến trúc đá',
      'D. Dự báo thời điểm diễn ra chiến tranh trong tương lai'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q3d',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-3',
    content: 'Sự phối hợp giữa Sử học với Địa lý tự nhiên và Địa chất học có ý nghĩa nổi bật nào đối với việc nghiên cứu quá khứ?',
    options: [
      'A. Giúp nhà sử học tái hiện lại bối cảnh không gian địa lý, sự biến đổi khí hậu và môi trường sống của người xưa',
      'B. Giúp vẽ ra các bản đồ hành chính mới cho các quốc gia hiện đại',
      'C. Giúp thay đổi vị trí các châu lục trên Trái Đất',
      'D. Giúp phát minh ra nguồn năng lượng hóa thạch mới'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 4: Sử học với du lịch & bảo tồn (Bài 3)
  {
    id: 'g10-his-q5',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-4',
    content: 'Nguyên tắc quan trọng hàng đầu trong công tác bảo tồn và trùng tu các di sản văn hóa là gì?',
    options: [
      'A. Hiện đại hóa toàn bộ công trình để thu hút du khách',
      'B. Đảm bảo tính nguyên gốc và giá trị lịch sử của di sản',
      'C. Thay thế các vật liệu cổ bằng chất liệu bê tông cốt thép',
      'D. Xây dựng thêm nhiều dịch vụ thương mại xung quanh di sản'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q4b',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-4',
    content: 'Mối quan hệ hai chiều giữa Sử học và Ngành du lịch di sản được thể hiện như thế nào?',
    options: [
      'A. Sử học cung cấp tài nguyên di sản và tri thức quảng bá; du lịch mang lại nguồn kinh phí tài trợ tái đầu tư bảo tồn di sản',
      'B. Du lịch sẽ làm biến mất hoàn toàn các di sản lịch sử',
      'C. Sử học bắt buộc phải làm sai lệch lịch sử để phục vụ mục đích thương mại du lịch',
      'D. Ngành du lịch không cần sử dụng bất kỳ tri thức lịch sử nào'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q4c',
    subjectId: 'history',
    topicId: 'g10-his-topic-2',
    questionTypeId: 'g10-his-type-4',
    content: 'Tại sao công tác bảo tồn di sản văn hóa PHI VẬT THỂ (như Nhã nhạc cung đình Huế, Dân ca Quan họ) đòi hỏi sự tham gia trực tiếp của tri thức Sử học?',
    options: [
      'A. Để biến các di sản phi vật thể thành các di sản vật thể xây bằng đá',
      'B. Để phục dựng và truyền dạy đúng làn điệu, nghi lễ nguyên gốc, tránh bị lai căng hay biến chất',
      'C. Để dịch toàn bộ các bài dân ca sang tiếng Anh phục vụ thương mại',
      'D. Để cấm người dân địa phương tham gia thực hành di sản'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },

  // Type 5: Văn minh phương Đông cổ - trung đại (Bài 4)
  {
    id: 'g10-his-q6',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Bốn phát minh lớn về kỹ thuật của văn minh Trung Hoa cổ - trung đại đóng góp cho nhân loại bao gồm những gì?',
    options: [
      'A. Động cơ hơi nước, máy in, la bàn, thuốc súng',
      'B. Kỹ thuật làm giấy, kỹ thuật in, la bàn, thuốc súng',
      'C. Chữ cái Latinh, la bàn, thủy tinh, bánh xe',
      'D. Đồng hồ cơ học, máy dệt, thuốc súng, la bàn'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q5b',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Điểm khác biệt cốt lõi nhất giữa khái niệm "Văn hóa" và khái niệm "Văn minh" là gì?',
    options: [
      'A. Văn hóa chỉ bao gồm giá trị tinh thần, còn Văn minh chỉ bao gồm giá trị vật chất',
      'B. Văn hóa xuất hiện cùng với sự ra đời của loài người, còn Văn minh đại diện cho trạng thái phát triển cao gắn với Nhà nước, Đô thị và Chữ viết',
      'C. Văn minh xuất hiện trước Văn hóa hàng triệu năm',
      'D. Văn hóa chỉ có ở phương Tây, còn Văn minh chỉ có ở phương Đông'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q5c',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Điều kiện tự nhiên chung quan trọng nhất dẫn đến sự hình thành sớm của các nền văn minh phương Đông cổ đại (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa) là gì?',
    options: [
      'A. Có đường bờ biển dài thuận lợi cho thương mại đường biển',
      'B. Hình thành trên lưu vực các con sông lớn có đất đai phù sa màu mỡ và nguồn nước dồi dào',
      'C. Có nhiều đồng cỏ rộng lớn phát triển chăn nuôi gia súc du mục',
      'D. Có khí hậu băng giá quanh năm giúp bảo quản nông sản'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q5d',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Thành tựu Toán học vĩ đại nào của văn minh Ấn Độ cổ - trung đại được toàn nhân loại tiếp thu và sử dụng phổ biến cho đến ngày nay?',
    options: [
      'A. Phát minh ra các chữ số La Mã (I, V, X, L, C, D, M)',
      'B. Sáng tạo ra hệ thống 10 chữ số bao gồm cả số 0',
      'C. Tính ra tỉ số Pi chính xác đến 100 chữ số thập phân',
      'D. Phát minh ra máy tính cơ học bỏ túi'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q5e',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Công trình kiến trúc đồ sộ tiêu biểu nhất của văn minh Ai Cập cổ đại thể hiện uy quyền tối cao của các Pharaoh và trình độ kỹ thuật xây dựng kinh ngạc là gì?',
    options: [
      'A. Vườn treo Babylon',
      'B. Quần thể Kim tự tháp (tiêu biểu là Kim tự tháp Kê-ốp)',
      'C. Đền Parthenon',
      'D. Đấu trường Colosseum'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q5f',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Bộ tác phẩm được coi là đỉnh cao Sử học Trung Hoa cổ đại đặt nền móng cho thể loại biên soạn lịch sử kỷ truyện là tác phẩm nào?',
    options: [
      'A. Tam quốc diễn nghĩa của La Quán Trung',
      'B. Bộ Sử ký của Tư Mã Thiên',
      'C. Kinh Thi của Khổng Tử',
      'D. Tây du ký của Ngô Thừa Ân'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-5',
    content: 'Thành tựu sáng tạo ra chữ số 0 (Zero) có ý nghĩa đặc biệt quan trọng đối với toán học nhân loại là phát minh của nền văn minh nào?',
    options: [
      'A. Văn minh Ai Cập',
      'B. Văn minh Lưỡng Hà',
      'C. Văn minh Ấn Độ',
      'D. Văn minh Hy Lạp'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // Type 6: Văn minh phương Tây cổ - trung đại (Bài 6)
  {
    id: 'g10-his-q8',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Công trình kiến trúc nổi tiếng nào sau đây là biểu tượng cho đỉnh cao nghệ thuật xây dựng của văn minh La Mã cổ đại?',
    options: [
      'A. Kim tự tháp Giza',
      'B. Đền Parthenon',
      'C. Đấu trường Colosseum',
      'D. Quần thể Angkor Wat'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q6b',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Điều kiện tự nhiên nổi bật nào ở Nam Âu đã thúc đẩy văn minh Hy Lạp - La Mã cổ đại phát triển mạnh mẽ ngành kinh tế thương nghiệp đường biển?',
    options: [
      'A. Có các đồng bằng phù sa rộng lớn thích hợp cho việc làm lúa nước',
      'B. Bờ biển dài, cắt xẻ mạnh tạo ra nhiều vịnh, hải cảng tự nhiên kín gió',
      'C. Khí hậu hoang mạc khô hạn không thể trồng trọt',
      'D. Bao bọc bởi đại dương và hoàn toàn cô lập với thế giới bên ngoài'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q6c',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Hệ thống chữ viết nào do người Hy Lạp và La Mã cổ đại sáng tạo ra đã trở thành nền tảng cho chữ viết quốc tế hiện đại (bao gồm cả chữ Quốc ngữ của Việt Nam)?',
    options: [
      'A. Chữ tượng hình Ai Cập',
      'B. Chữ Nêm Lưỡng Hà',
      'C. Bảng chữ cái Latinh',
      'D. Chữ Phạn Ấn Độ'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q6d',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Nhà học giả Hy Lạp cổ đại nào được tôn vinh là "Người cha của Sử học thế giới" (Father of History)?',
    options: [
      'A. Hê-rô-đốt (Herodotus)',
      'B. Ô-clít (Euclid)',
      'C. Ác-si-mét (Archimedes)',
      'D. Hi-pô-cơ-rát (Hippocrates)'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q6e',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Bản chất cốt lõi của phong trào Văn hóa Phục hưng (thế kỷ XIV - XVII) ở Tây Âu là gì?',
    options: [
      'A. Khôi phục lại trật tự xã hội phong kiến trung đại',
      'B. Phong trào văn hóa tiến bộ của giai cấp tư sản đề cao giá trị con người (Chủ nghĩa nhân văn), chống lại sự thống trị của Giáo hội Thiên Chúa giáo',
      'C. Cuộc cách mạng tôn giáo nhằm củng cố quyền lực tối cao của Giáo hoàng',
      'D. Phong trào bảo tồn di sản văn hóa phương Đông cổ đại'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q6f',
    subjectId: 'history',
    topicId: 'g10-his-topic-3',
    questionTypeId: 'g10-his-type-6',
    content: 'Phát minh thiên văn học mang tính cách mạng thời Phục hưng của Cô-péc-ních và Ga-li-lê đã đập tan quan điểm sai lầm của Giáo hội là gì?',
    options: [
      'A. Thuyết Địa tâm (Trái Đất là trung tâm vũ trụ)',
      'B. Thuyết Nhật tâm (khẳng định Trái Đất và các hành tinh quay xung quanh Mặt Trời)',
      'C. Thuyết vạn vật hấp dẫn',
      'D. Thuyết tương đối'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 7: Cách mạng công nghiệp cận đại (Bài 7)
  {
    id: 'g10-his-q9',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Phát minh kỹ thuật nào được coi là khởi nguồn và là động lực quyết định thúc đẩy cuộc Cách mạng công nghiệp lần thứ nhất ở Anh (thế kỷ XVIII)?',
    options: [
      'A. Máy phát điện của Faraday',
      'B. Động cơ hơi nước của James Watt',
      'C. Động cơ đốt trong của Nikolaus Otto',
      'D. Máy điện thoại của Alexander Bell'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7b',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Ngành sản xuất nào là nơi khởi phát và chứng kiến những phát minh kỹ thuật đầu tiên của cuộc Cách mạng công nghiệp lần thứ nhất ở Anh?',
    options: [
      'A. Ngành Khai thác than đá và luyện kim',
      'B. Ngành Công nghiệp Dệt (kéo sợi và dệt vải)',
      'C. Ngành Giao thông vận tải đường sắt',
      'D. Ngành Chế tạo máy bay và ô tô'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7c',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Ý nghĩa bước ngoặt nhất của việc James Watt phát minh hoàn chỉnh Máy hơi nước (1784) là gì?',
    options: [
      'A. Giúp con người chế tạo ra tàu vũ trụ bay vào không gian',
      'B. Cung cấp nguồn động lực mới độc lập với tự nhiên, cho phép xây nhà máy ở bất kỳ đâu và chuyển từ lao động thủ công sang cơ khí hóa',
      'C. Thay thế hoàn toàn nông dân làm việc trên đồng ruộng',
      'D. Giúp phát minh ra mạng lưới Internet toàn cầu'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7d',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Nguồn năng lượng mới nào được coi là thành tựu trung tâm mang tính đột phá của cuộc Cách mạng công nghiệp lần thứ hai (nửa sau thế kỷ XIX)?',
    options: [
      'A. Năng lượng hơi nước',
      'B. Năng lượng Điện (Điện năng)',
      'C. Năng lượng hạt nhân',
      'D. Năng lượng gió và năng lượng mặt trời'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7e',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Hai quốc gia nào vươn lên trở thành trung tâm hàng đầu khởi phát và dẫn đầu cuộc Cách mạng công nghiệp lần thứ hai?',
    options: [
      'A. Anh và Pháp',
      'B. Mỹ và Đức',
      'C. Nga và Nhật Bản',
      'D. Ý và Tây Ban Nha'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q7f',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-7',
    content: 'Tác động xã hội sâu sắc nhất của các cuộc Cách mạng công nghiệp cận đại là dẫn tới sự hình thành của hai giai cấp cơ bản nào?',
    options: [
      'A. Giai cấp Lãnh chúa phong kiến và Nông nô',
      'B. Giai cấp Chủ nô và Nô lệ',
      'C. Giai cấp Tư sản công nghiệp và Giai cấp Vô sản (Công nhân)',
      'D. Giai cấp Trí thức và Nông dân'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // Type 8: Cách mạng công nghiệp hiện đại (Bài 8)
  {
    id: 'g10-his-q10',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Yếu tố cốt lõi mang tính đột phá của cuộc Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0) ở thế kỷ XXI là gì?',
    options: [
      'A. Động cơ đốt trong và năng lượng hơi nước',
      'B. Sự ra đời của máy dệt lò xo và luyện kim',
      'C. Trí tuệ nhân tạo (AI), Internet vạn vật (IoT) và Dữ liệu lớn (Big Data)',
      'D. Kỹ thuật sản xuất dây chuyền xe hơi cổ điển'
    ],
    correctAnswer: 'C',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q8b',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Thành tựu công nghệ then chốt nào mở đầu và giữ vai trò trung tâm trong cuộc Cách mạng công nghiệp lần thứ ba (nửa sau thế kỷ XX)?',
    options: [
      'A. Động cơ đốt trong chạy bằng xăng',
      'B. Máy tính điện tử (tiêu biểu như máy tính ENIAC 1946 và máy tính cá nhân)',
      'C. Công nghệ in 3D',
      'D. Xe lửa chạy bằng máy hơi nước'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q8c',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Sự xuất hiện của mạng Internet toàn cầu trong cuộc Cách mạng công nghiệp lần thứ ba đã mang lại tác động đột phá nào?',
    options: [
      'A. Biến toàn bộ nhân loại thành những người lao động nông nghiệp',
      'B. Kết nối, lưu trữ và truyền tải thông tin tri thức số hóa trên quy mô toàn cầu theo thời gian thực',
      'C. Thay thế hoàn toàn giao thông vận tải hàng không',
      'D. Làm ngưng trệ các hoạt động thương mại quốc tế'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q8d',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Bản chất nổi bật nhất làm nên sự khác biệt của Cách mạng công nghiệp lần thứ tư (4.0) so với các cuộc cách mạng công nghiệp trước đó là gì?',
    options: [
      'A. Chỉ tập trung phát triển công nghiệp nặng và luyện kim',
      'B. Hợp nhất các công nghệ giúp làm mờ ranh giới giữa các không gian vật lý, kỹ thuật số và sinh học',
      'C. Sử dụng chủ yếu sức lao động thủ công của con người',
      'D. Bị giới hạn hoàn toàn trong phạm vi quốc gia Nước Anh'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q8e',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Quốc gia đầu tiên phóng thành công Vệ tinh nhân tạo (Sputnik 1 - 1957), mở đầu cho kỷ nguyên chinh phục không gian vũ trụ của loài người thời hiện đại là quốc gia nào?',
    options: [
      'A. Nước Mỹ',
      'B. Liên Xô',
      'C. Nước Đức',
      'D. Nhật Bản'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q8f',
    subjectId: 'history',
    topicId: 'g10-his-topic-4',
    questionTypeId: 'g10-his-type-8',
    content: 'Tác động kinh tế quan trọng nhất của các cuộc Cách mạng công nghiệp thời hiện đại (3.0 và 4.0) đối với mô hình tăng trưởng toàn cầu là gì?',
    options: [
      'A. Đưa nhân loại quay trở lại thời kỳ kinh tế tự cung tự cấp',
      'B. Thúc đẩy chuyển dịch từ nền kinh tế công nghiệp cơ khí sang nền Kinh tế tri thức và Thương mại điện tử',
      'C. Làm tiêu tốn hết nguồn vốn tư bản của các quốc gia',
      'D. Ngăn cản quá trình toàn cầu hóa kinh tế'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 9: Cơ sở hình thành văn minh ĐNÁ (Bài 9)
  {
    id: 'g10-his-q11',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Nền tảng kinh tế sinh sống chủ đạo chung của đa số cư dân các quốc gia cổ Đông Nam Á là gì?',
    options: [
      'A. Chăn nuôi gia súc du mục trên thảo nguyên',
      'B. Nông nghiệp trồng lúa nước',
      'C. Thương mại hàng hải chuyên xuất khẩu đồ gốm',
      'D. Săn bắt và hái lượm thiên nhiên'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q9b',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Vị trí địa lý "Ngã tư đường" giao lưu quốc tế của Đông Nam Á được hình thành dựa trên yếu tố kết nối nào?',
    options: [
      'A. Là cầu nối giữa Châu Úc và Châu Bắc Mỹ',
      'B. Nằm ở tuyến giao thương hàng hải giữa Thái Bình Dương với Ấn Độ Dương, và giữa hai nền văn minh lớn Ấn Độ - Trung Hoa',
      'C. Nằm hoàn toàn cô lập giữa Đại Tây Dương',
      'D. Nằm ở trung tâm lục địa Châu Âu'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q9c',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Dạng tín ngưỡng bản địa đặc trưng của cư dân nông nghiệp Đông Nam Á thể hiện khát vọng sinh sôi nảy nở của con người và mùa màng là tín ngưỡng nào?',
    options: [
      'A. Tín ngưỡng Kitô giáo cổ đại',
      'B. Tín ngưỡng phồn thực (thờ sinh thực khí, thờ Nữ thần Mẹ/Nữ thần Lúa)',
      'C. Tín ngưỡng thờ thần Mặt Trăng phương Tây',
      'D. Tín ngưỡng sùng bái Đạo giáo'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q9d',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Đơn vị tổ chức xã hội cơ bản và lâu đời nhất của cư dân Đông Nam Á đóng vai trò kết nối cộng đồng để làm thủy lợi và chống thiên tai là gì?',
    options: [
      'A. Các điền trang phong kiến',
      'B. Làng / Công xã nông thôn (Làng, bản, phum, sóc)',
      'C. Các đô thị thương cảng sầm uất',
      'D. Các bang hội phong kiến'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q9e',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Thái độ và phương thức tiếp thu các tôn giáo lớn từ bên ngoài (Ấn Độ giáo, Phật giáo, Hồi giáo) của cư dân Đông Nam Á có điểm gì nổi bật?',
    options: [
      'A. Sao chép 100% nguyên mẫu mà không hề có sự thay đổi',
      'B. Tiếp thu có chọn lọc trên nền tảng bản địa, "Đông Nam Á hóa" tôn giáo ngoại nhập để phù hợp với văn hóa dân tộc',
      'C. Từ chối hoàn toàn và cấm đoán tất cả các tôn giáo từ bên ngoài',
      'D. Bị cưỡng bức tiếp nhận qua các cuộc chiến tranh xâm lược'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q9f',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-9',
    content: 'Tôn giáo lớn nào bắt đầu được truyền bá mạnh mẽ vào khu vực hải đảo Đông Nam Á (Indonesia, Malaysia, Brunei) từ thế kỷ XIII và trở thành tôn giáo chiếm ưu thế?',
    options: [
      'A. Ấn Độ giáo',
      'B. Hồi giáo (Islam)',
      'C. Nho giáo',
      'D. Thiên Chúa giáo'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 10: Thành tựu văn minh ĐNÁ (Bài 10)
  {
    id: 'g10-his-q12',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Quần thể đền tháp Angkor Wat nổi tiếng - kiệt tác kiến trúc đồ sộ thời cổ - trung đại là thành tựu rực rỡ của quốc gia nào?',
    options: [
      'A. Indonesia',
      'B. Thái Lan',
      'C. Campuchia',
      'D. Lào'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q10b',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Giai đoạn lịch sử nào được xem là thời kỳ phát triển thịnh vượng nhất ("Kỷ nguyên vàng") của các quốc gia phong kiến Đông Nam Á thời cổ - trung đại?',
    options: [
      'A. Từ thế kỷ VII TCN đến thế kỷ I',
      'B. Từ thế kỷ X đến thế kỷ XV',
      'C. Từ thế kỷ XVI đến thế kỷ XIX',
      'D. Nửa sau thế kỷ XX'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q10c',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Quần thể kiến trúc tháp Phật giáo Borobudur đồ sộ bậc nhất thế giới được xây dựng vào thế kỷ VIII - IX dưới vương triều Sailendra là thành tựu của nước nào?',
    options: [
      'A. Myanmar',
      'B. Indonesia',
      'C. Malaysia',
      'D. Philippines'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q10d',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Công trình kiến trúc Phật giáo dát vàng nổi tiếng nào được coi là biểu tượng quốc gia hiện diện trên Quốc huy và tiền giấy của nước Lào?',
    options: [
      'A. Tháp Thạt Luổng (Pha That Luang)',
      'B. Chùa Vàng Shwedagon',
      'C. Đền Chùa Trắng Wat Rong Khun',
      'D. Đền Banteay Srei'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q10e',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Bộ sử thi Ramayana của Ấn Độ khi truyền bá vào Thái Lan đã được phóng tác thành kiệt tác văn học dân tộc nổi tiếng nào?',
    options: [
      'A. Sử thi Reamker',
      'B. Sử thi Ramakien',
      'C. Tác phẩm Phra Lak Phra Lam',
      'D. Tác phẩm Hikayat Seri Rama'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q10f',
    subjectId: 'history',
    topicId: 'g10-his-topic-5',
    questionTypeId: 'g10-his-type-10',
    content: 'Hai tôn giáo ngoại nhập nào từ Ấn Độ có ảnh hưởng chi phối và sâu sắc nhất đến nghệ thuật kiến trúc, điêu khắc Đông Nam Á thời cổ - trung đại?',
    options: [
      'A. Nho giáo và Đạo giáo',
      'B. Phật giáo và Ấn Độ giáo (Hindu giáo)',
      'C. Hồi giáo và Thiên Chúa giáo',
      'D. Đạo Do Thái và Đạo Ba Tư'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // Type 11: Văn minh cổ trên đất nước VN (Bài 11)
  {
    id: 'g10-his-q13',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Hiện vật nào sau đây được coi là biểu tượng đỉnh cao cho kỹ thuật đúc đồng và đời sống tinh thần của cư dân Văn Lang - Âu Lạc?',
    options: [
      'A. Trống đồng Đông Sơn',
      'B. Tháp Chăm Mỹ Sơn',
      'C. Chuông kim khí Óc Eo',
      'D. Bình gốm Chu Đậu'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q11b',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Cơ sở văn hóa tiền thân trực tiếp phát triển đỉnh cao dẫn đến sự ra đời của nền Văn minh Văn Lang - Âu Lạc ở Bắc Bộ là văn hóa nào?',
    options: [
      'A. Văn hóa Phùng Nguyên',
      'B. Văn hóa Sa Huỳnh',
      'C. Văn hóa Đông Sơn',
      'D. Văn hóa Đồng Nai'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q11c',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Cơ sở văn hóa tiền thân nổi tiếng ở vùng Nam Trung Bộ (với đặc trưng mộ chum, khuyên tai hai đầu thú) trực tiếp dẫn tới sự hình thành Văn minh Chăm-pa là gì?',
    options: [
      'A. Văn hóa Sa Huỳnh',
      'B. Văn hóa Đông Sơn',
      'C. Văn hóa Óc Eo',
      'D. Văn hóa Hòa Bình'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q11d',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Quần thể di tích đền tháp gạch đá tuyệt mỹ - trung tâm tôn giáo Ấn Độ giáo nổi tiếng nhất của nền Văn minh Chăm-pa được UNESCO công nhận là Di sản thế giới là di tích nào?',
    options: [
      'A. Thánh địa Mỹ Sơn (Quảng Nam)',
      'B. Thành Cổ Loa (Hà Nội)',
      'C. Khu di tích Óc Eo (An Giang)',
      'D. Cố đô Hoa Lư (Ninh Bình)'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q11e',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Khu di tích thương cảng quốc tế sầm uất bậc nhất của nền Văn minh Phù Nam thời cổ đại ở vùng Nam Bộ (nơi phát hiện đồng tiền La Mã cổ) là gì?',
    options: [
      'A. Thương cảng Hội An',
      'B. Thương cảng Óc Eo (An Giang)',
      'C. Thương cảng Vân Đồn',
      'D. Thương cảng Thị Nại'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q11f',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-11',
    content: 'Loại hình nhà ở đặc trưng của cư dân Phù Nam phù hợp với môi trường địa hình sông nước ngập mặn và kênh rạch ở Nam Bộ là gì?',
    options: [
      'A. Nhà đất trình tường',
      'B. Nhà sàn trên sông/ven kênh rạch',
      'C. Lều vải du mục',
      'D. Nhà hang đá tự nhiên'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // Type 12: Văn minh Đại Việt (Bài 12)
  {
    id: 'g10-his-q14',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Văn Miếu được xây dựng vào năm 1070 dưới thời triều đại nào, đánh dấu mốc phát triển quan trọng của nền giáo dục Đại Việt?',
    options: [
      'A. Triều Đinh',
      'B. Triều Lý',
      'C. Triều Trần',
      'D. Triều Lê Sơ'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q12b',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Đặc trưng tư tưởng - tôn giáo nổi bật nhất của nền Văn minh Đại Việt thời kỳ Lý - Trần (thế kỷ XI - XIV) là gì?',
    options: [
      'A. Nho giáo giữ vị trí độc tôn tuyệt đối',
      'B. Tư tưởng "Tam giáo đồng nguyên" (Nho giáo, Phật giáo và Đạo giáo hòa hợp cùng phát triển)',
      'C. Đạo Thiên Chúa được coi là Quốc giáo',
      'D. Cấm đoán hoàn toàn các tôn giáo từ bên ngoài'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q12c',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Dưới thời triều đại phong kiến nào (thế kỷ XV), Nho giáo được nâng lên giữ vị trí ĐỘC TÔN trong tổ chức bộ máy nhà nước và giáo dục thi cử?',
    options: [
      'A. Triều Lý',
      'B. Triều Trần',
      'C. Triều Lê Sơ (thời Vua Lê Thánh Tông)',
      'D. Triều Tây Sơn'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q12d',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Luận điểm nổi tiếng "Hiền tài là nguyên khí của quốc gia" được khắc trên bia Tiến sĩ tại Văn Miếu năm 1484 do ai soạn thảo?',
    options: [
      'A. Nguyễn Trãi',
      'B. Thân Nhân Trung',
      'C. Lê Văn Hưu',
      'D. Ngô Sĩ Liên'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q12e',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Bộ luật bằng văn bản đầu tiên của quốc gia Đại Việt được ban hành năm 1042 mang tên là gì?',
    options: [
      'A. Bộ Quốc triều hình luật (Luật Hồng Đức)',
      'B. Bộ Luật Hình thư (thời Lý)',
      'C. Bộ Hoàng Việt luật lệ (Luật Gia Long)',
      'D. Bộ Luật Cổ Loa'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q12f',
    subjectId: 'history',
    topicId: 'g10-his-topic-6',
    questionTypeId: 'g10-his-type-12',
    content: 'Tác phẩm chính sử đầu tiên của nước ta biên soạn lịch sử dân tộc từ thời Hồng Bàng đến thời Lý - Trần do Lê Văn Hưu hoàn thành năm 1272 có tên là gì?',
    options: [
      'A. Đại Việt sử ký toàn thư',
      'B. Bộ Đại Việt sử ký',
      'C. Khâm định Việt sử thông giám cương mục',
      'D. Việt sử lược'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },

  // Type 13: Đời sống dân tộc VN (Bài 13)
  {
    id: 'g10-his-q15',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Di sản văn hóa phi vật thể nào của Việt Nam ở vùng Tây Nguyên đã được UNESCO vinh danh là Kiệt tác truyền khẩu và di sản phi vật thể nhân loại?',
    options: [
      'A. Hát Xoan Phú Thọ',
      'B. Nhã nhạc cung đình Huế',
      'C. Không gian văn hóa Cồng chiêng Tây Nguyên',
      'D. Dân ca Quan họ Bắc Ninh'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q13b',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Loại hình nghệ thuật múa dân gian biểu trưng cho tình đoàn kết gắn bó của người Thái ở vùng Tây Bắc đã được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm 2021 là gì?',
    options: [
      'A. Múa sạp',
      'B. Nghệ thuật Xòe Thái',
      'C. Múa khèn H\'Mông',
      'D. Múa trống Chày'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q13c',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Công trình kiến trúc nhà ở công cộng cao lớn tiêu biểu nằm ở trung tâm buôn làng Tây Nguyên — nơi diễn ra các lễ hội và họp bàn việc làng là công trình nào?',
    options: [
      'A. Nhà Trình tường',
      'B. Nhà Rông',
      'C. Nhà dài Ê đê',
      'D. Tháp Chăm'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q13d',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Nét nghệ thuật nổi bật nhất trong đời sống trang phục may mặc của đa số các dân tộc thiểu số miền núi ở Việt Nam là gì?',
    options: [
      'A. Nghệ thuật thêu dệt thổ cẩm với nhiều màu sắc và hoa văn độc đáo',
      'B. Kỹ thuật nhuộm lụa tơ tằm cổ điển',
      'C. Kỹ thuật may trang phục bằng da thú tự nhiên',
      'D. Nghệ thuật đính cườm kim loại nhập khẩu'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q13e',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Lễ hội truyền thống lớn nhất của đồng bào dân tộc Khmer ở Nam Bộ diễn ra vào rằm tháng 10 âm lịch để tạ ơn thần Mặt Trăng là lễ hội nào?',
    options: [
      'A. Lễ hội Chôl Chnăm Thmây',
      'B. Lễ hội Ok Om Bok (Lễ Cúng Trăng)',
      'C. Lễ hội Lồng Tồng',
      'D. Lễ mừng lúa mới'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q13f',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-13',
    content: 'Kiểu nhà ở truyền thống xây bằng đất nện dày giúp giữ ấm vào mùa đông và mát mẻ vào mùa hè của cư dân vùng núi cao phía Bắc (H\'Mông, Hà Nhì) là kiểu nhà nào?',
    options: [
      'A. Nhà sàn gỗ',
      'B. Nhà Trình tường',
      'C. Nhà nổi trên sông',
      'D. Nhà Rông'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // Type 14: Khối đại đoàn kết dân tộc (Bài 14)
  {
    id: 'g10-his-q16',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Nhân tố quyết định nhất tạo nên sức mạnh tổng hợp giúp dân tộc Việt Nam liên tục đánh bại các đế quốc xâm lược sừng sỏ trong lịch sử là gì?',
    options: [
      'A. Vũ khí hiện đại vượt trội kẻ thù',
      'B. Khối đại đoàn kết toàn dân tộc',
      'C. Sự viện trợ quân sự tuyệt đối từ bên ngoài',
      'D. Địa hình tự nhiên hoàn toàn hiểm trở'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q14b',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Hai yêu cầu lịch sử khách quan, cấp thiết nhất đã thúc đẩy sự hình thành sớm của Khối đại đoàn kết dân tộc Việt Nam từ thời cổ đại là gì?',
    options: [
      'A. Yêu cầu giao thương đường biển và phát triển ngành du lịch',
      'B. Yêu cầu làm thủy lợi/trị thủy chinh phục tự nhiên và nhu cầu tập hợp lực lượng chống giặc ngoại xâm',
      'C. Nhu cầu mở rộng lãnh thổ sang các đại dương',
      'D. Nhu cầu phân hóa giai cấp và tranh giành quyền lực'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q14c',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Thời phong kiến tự chủ (Lý, Trần, Lê), các vương triều đã thực hiện chính sách ngoại giao và nội trị nào để thắt chặt khối đoàn kết với các dân tộc thiểu số miền núi?',
    options: [
      'A. Cưỡng chế xua đuổi các tộc người miền núi',
      'B. Chính sách "Nhu viễn" mềm mỏng, phong chức tước và gả công chúa cho các tù trưởng miền núi',
      'C. Tịch thu toàn bộ ruộng đất của các tộc người thiểu số',
      'D. Cấm đồng bào miền núi giữ gìn ngôn ngữ và phong tục bản địa'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q14d',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Hình thức tổ chức Mặt trận Dân tộc Thống nhất đầu tiên ở Việt Nam được Đảng thành lập vào ngày 18/11/1930 có tên gọi là gì?',
    options: [
      'A. Mặt trận Việt Minh',
      'B. Hội Phản đế đồng minh',
      'C. Mặt trận Tổ quốc Việt Nam',
      'D. Mặt trận Dân chủ Đông Dương'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q14e',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Mặt trận nào được thành lập năm 1941 đã quy tụ sức mạnh toàn dân bùng nổ Tổng khởi nghĩa giành độc lập dân tộc trong Cách mạng tháng Tám 1945?',
    options: [
      'A. Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh)',
      'B. Mặt trận Tổ quốc Việt Nam',
      'C. Mặt trận Dân tộc Giải phóng miền Nam',
      'D. Hội Phản đế đồng minh'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'g10-his-q14f',
    subjectId: 'history',
    topicId: 'g10-his-topic-7',
    questionTypeId: 'g10-his-type-14',
    content: 'Ba nguyên tắc cốt lõi trong Chính sách Dân tộc hiện nay của Đảng và Nhà nước Việt Nam là gì?',
    options: [
      'A. Đoàn kết, Hòa bình, Cạnh tranh',
      'B. Đoàn kết, Bình đẳng, Tương trợ giúp đỡ nhau cùng phát triển',
      'C. Tự do, Bình đẳng, Bác ái',
      'D. Đập tan, Cưỡng chế, Tự quản'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  }
];

const answerLetters = ['A', 'B', 'C', 'D'] as const;

/** Chuẩn hóa ngân hàng cũ để không lộ quy luật đáp án B và bổ sung schema luyện tập V4. */
const normalizedLegacyQuestions: Question[] = legacyHistoryQuestions.map((question, index) => {
  const sourceOptions = question.options ?? [];
  const originalCorrectIndex = answerLetters.indexOf(
    question.correctAnswer.toUpperCase() as (typeof answerLetters)[number]
  );
  const cleanOptions = sourceOptions.map(option => option.replace(/^[A-D][.)]\s*/u, '').trim());
  const correctText = cleanOptions[originalCorrectIndex];
  const distractors = cleanOptions.filter((_, optionIndex) => optionIndex !== originalCorrectIndex);
  const targetCorrectIndex = index % 4;
  const normalizedOptions = [...distractors];
  normalizedOptions.splice(targetCorrectIndex, 0, correctText);
  const correctAnswer = answerLetters[targetCorrectIndex];
  const typeNumber = Number(question.questionTypeId.replace('g10-his-type-', ''));

  return {
    ...question,
    courseId: 'grade10:history',
    options: normalizedOptions.map((option, optionIndex) => `${answerLetters[optionIndex]}. ${option}`),
    correctAnswer,
    acceptedAnswers: [correctAnswer, correctAnswer.toLowerCase()],
    responseType: 'single_choice',
    validatorType: 'choice',
    outcomeIds: [`g10-his-out-${String(typeNumber).padStart(2, '0')}`],
    cognitiveLevel: question.difficulty === 'easy' ? 'recognition' : 'understanding',
    estimatedSeconds: question.difficulty === 'hard' ? 75 : 45,
    subTypeId: `g10-his-type-${typeNumber}-${['foundation', 'association', 'misconception'][index % 3]}`,
    practiceRole: ['guided', 'near_transfer', 'misconception_check'][index % 3] as NonNullable<Question['practiceRole']>,
    representationType: 'text',
    misconceptionId: index % 3 === 2
      ? `g10-his-misc-${String(typeNumber).padStart(2, '0')}`
      : undefined,
    isMasteryHoldout: index % 11 === 10
  };
});

export const g10HistoryQuestions: Question[] = [
  ...normalizedLegacyQuestions,
  ...g10HistoryExpansionQuestions
];
