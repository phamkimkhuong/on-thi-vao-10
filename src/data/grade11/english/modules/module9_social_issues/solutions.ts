import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation',
    recognition: 'Xác định đây có phải câu hỏi lựa chọn thật sự không, sau đó theo dõi vị trí từng phương án.',
    review: 'Rise–fall intonation in choice questions',
    mistake: 'Cho mọi từ nối bằng or cùng một ngữ điệu hoặc làm tất cả phương án đều lên giọng.',
    notes: [
      'Phương án chưa kết thúc danh sách thường lên giọng để báo còn lựa chọn phía sau.',
      'Phương án cuối thường xuống giọng để đóng danh sách lựa chọn.',
      'Câu có hai phương án điển hình dùng mẫu rise–fall.',
      'Email là phương án đầu nên lên giọng; call là phương án cuối nên xuống giọng.',
      'Giọng lên cho người nghe biết người nói chưa hoàn thành danh sách.',
      'Trong ba lựa chọn, online support đứng cuối nên nhận final fall.',
      'Ba lựa chọn lần lượt có mẫu rise–rise–fall.',
      'B chưa phải lựa chọn cuối nên thông thường vẫn lên giọng.',
      'Final fall báo tập hợp lựa chọn đã hoàn tất.',
      'Câu hỏi nêu hai thời điểm thay thế nhau là choice question thực sự.',
      'Lặp lại phương án đầu với giọng lên có thể dùng để kiểm tra/xác nhận lại.',
      'Cần xét lựa chọn có thật và vị trí trong danh sách, không chỉ nhìn từ or.'
    ]
  },
  {
    key: 'vocabulary',
    recognition: 'Nhận diện nghĩa trong ngữ cảnh và kiểm tra collocation của chủ đề social issues.',
    review: 'Social issues, reporting and support vocabulary',
    mistake: 'Chọn từ cùng chủ đề nhưng sai nghĩa hoặc ghép động từ–danh từ không tự nhiên.',
    notes: [
      'Peer pressure là áp lực phải hành xử giống nhóm bạn.',
      'Bullying là hành vi gây hại lặp lại có yếu tố mất cân bằng quyền lực.',
      'Cyberbullying diễn ra qua tin nhắn hoặc nền tảng trực tuyến.',
      'Discrimination là sự đối xử bất công dựa trên đặc điểm của một người hay nhóm.',
      'Bystander là người chứng kiến sự việc.',
      'Upstander là người chứng kiến và lựa chọn hành động hỗ trợ an toàn.',
      'Raise awareness là collocation chuẩn với nghĩa nâng cao nhận thức.',
      'Report bullying là báo cáo hành vi bắt nạt qua kênh phù hợp.',
      'Seek support có nghĩa chủ động tìm kiếm sự hỗ trợ.',
      'Protect privacy là bảo vệ quyền riêng tư và dữ liệu nhận dạng.',
      'Measure outcomes tập trung vào kết quả, không chỉ số hoạt động đã làm.',
      'Challenge discrimination là phản đối và xử lý sự đối xử bất công.'
    ]
  },
  {
    key: 'grammar',
    recognition: 'Xác định quan hệ bổ sung, tương phản hay nguyên nhân–kết quả; sau đó kiểm tra linker đi với mệnh đề hay cụm danh từ.',
    review: 'Linking words and phrases',
    mistake: 'Dùng because of/despite trước mệnh đề đầy đủ hoặc dùng đồng thời although...but, because...so.',
    notes: [
      'Although đi trước mệnh đề đầy đủ và biểu thị tương phản.',
      'Despite đi trước cụm danh từ its popularity.',
      'Moreover bổ sung thêm một kết quả cùng chiều.',
      'In addition dùng để thêm một lợi ích hoặc luận điểm.',
      'However nối hai ý tương phản: tiếp cận cao nhưng hiểu quy trình thấp.',
      'In spite of đi với V-ing being short.',
      'Because đi trước mệnh đề có chủ ngữ và động từ.',
      'Because of đi trước cụm danh từ a transport strike.',
      'As a result giới thiệu kết quả của việc đào tạo nhân viên.',
      'Because + clause là cấu trúc nguyên nhân đúng.',
      'Despite + V-ing diễn đạt tương phản đúng mà không thêm but.',
      'Although đã mang nghĩa tương phản nên không dùng thêm but.'
    ]
  },
  {
    key: 'reading',
    recognition: 'Tìm bằng chứng về rào cản, biện pháp bảo vệ, chỉ báo kết quả và giới hạn của kết luận.',
    review: 'Reading social-issue interventions critically',
    mistake: 'Suy từ một chỉ số rằng vấn đề chắc chắn tăng/giảm hoặc chiến dịch đã tạo ra toàn bộ thay đổi.',
    notes: [
      'Học sinh thiếu tiêu chí rõ ràng và lo danh tính bị công khai.',
      'Số báo cáo tăng có thể phản ánh nhận thức và niềm tin vào quy trình tốt hơn.',
      'Báo cáo thiếu chi tiết và thời gian phản hồi không đồng đều là hai vấn đề được phát hiện.',
      'Dữ liệu báo cáo phải được đọc trong bối cảnh và cùng nhiều chỉ báo.',
      'Khẩu hiệu không giúp người học ứng phó với tình huống xã hội thực tế.',
      'Chương trình mới thêm kịch bản, đặt ranh giới, phương án thay thế và đường hỗ trợ.',
      'Đo lại sau ba tháng kiểm tra khả năng duy trì và chuyển thành hành vi.',
      'Tự báo cáo có thể bị sai lệch bởi trí nhớ và mong muốn trả lời đẹp.',
      'Chiến dịch cần chỉ dẫn bước tiếp theo và năng lực dịch vụ đủ đáp ứng.',
      'Không ép kể chuyện cá nhân và không công bố nhóm nhỏ giúp bảo vệ danh tính.',
      'Thời gian chờ tăng lúc đầu rồi giảm sau khi lịch làm việc được điều chỉnh.',
      'Truyền thông khuyến khích tìm trợ giúp phải đi cùng dịch vụ dễ tiếp cận và bảo mật.'
    ]
  },
  {
    key: 'writing',
    recognition: 'Kiểm tra bài đề xuất theo chuỗi vấn đề–bằng chứng–hành động–bảo vệ–đánh giá.',
    review: 'Evidence-based social-issue proposals',
    mistake: 'Đặt mục tiêu mơ hồ, thêm chi tiết không liên quan hoặc khẳng định kết quả chắc chắn khi chưa đo.',
    notes: [
      'Cần xác định vấn đề trước, gắn hành động và bảo vệ, rồi mới đánh giá.',
      'Câu mở đầu nêu rõ vấn đề và nhóm học sinh trong phạm vi.',
      'However thể hiện tương phản giữa lượt xem cao và hiểu biết thấp.',
      'Sau bằng chứng phải là hành động xử lý đúng rào cản đã nhận diện.',
      'Mục tiêu đo được có nội dung cần tăng và mốc thời gian.',
      'Sở thích trò chơi của người thiết kế không liên quan đến hiệu quả đề xuất.',
      'Despite + noun phrase diễn đạt tương phản đúng và gọn.',
      'Dữ liệu tổng hợp đủ lớn giúp báo cáo mà không lộ danh tính.',
      'Topic sentence bao quát cả phòng ngừa, báo cáo an toàn và hỗ trợ tiếp nối.',
      'May improve và kế hoạch đo lường tránh tuyên bố quá mức.',
      'Because + clause liên kết rào cản lộ danh tính với giải pháp báo cáo ẩn danh.',
      'Kết bài tốt nêu chỉ báo và thời điểm rà soát cụ thể.'
    ]
  },
  {
    key: 'communication',
    recognition: 'Ưu tiên thừa nhận trải nghiệm, trao quyền lựa chọn, bảo mật có giới hạn và chuyển tuyến khi có nguy cơ.',
    review: 'Supportive and safety-aware communication',
    mistake: 'Đổ lỗi, giảm nhẹ tổn hại, hứa giữ bí mật tuyệt đối hoặc tự quyết thay người cần hỗ trợ.',
    notes: [
      'I’m sorry that happened to you thể hiện đồng cảm mà không quy lỗi.',
      'Phản hồi thừa nhận tổn hại rồi hỏi loại hỗ trợ người kia mong muốn.',
      'Would you like...? trao quyền lựa chọn và đề nghị đồng hành.',
      'Quyền riêng tư cần được tôn trọng nhưng không thể tuyệt đối khi có nguy cơ an toàn.',
      'Lưu bằng chứng và dùng kênh phù hợp an toàn hơn đối đầu nguy hiểm.',
      'Đe dọa có thời điểm gần cần liên hệ người lớn tin cậy hoặc hỗ trợ khẩn cấp ngay.',
      'Câu trả lời vừa từ chối phát tán hình ảnh vừa đề nghị hỗ trợ báo cáo.',
      'Thừa nhận phản hồi về loại trừ và hỏi cách thay đổi tạo đối thoại thực chất.',
      'Dịch vụ phải nói rõ bảo mật, giới hạn bảo mật và bước tiếp theo.',
      'Đồng hành dùng kênh an toàn hỗ trợ mà không tước quyền quyết định.',
      'Gọi đó là trò đùa không xóa được tác động đối với người bị hại.',
      'Khi có khả năng gây hại, ưu tiên trợ giúp khẩn cấp và người lớn/chuyên môn phù hợp.'
    ]
  }
] as const;

export const g11EnglishModule9Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u9-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u9-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m9',
    recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu quy tắc và bằng chứng', explanation }
    ],
    finalAnswer: answers[index % 4],
    commonMistakes: [group.mistake],
    reviewSuggestions: [group.review]
  }))
);
