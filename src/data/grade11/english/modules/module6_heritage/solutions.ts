import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation', recognition: 'Xác định mục đích phát ngôn và vị trí mục trong danh sách.',
    review: 'Intonation in statements, commands and lists', mistake: 'Áp một đường nét ngữ điệu cho mọi ngữ cảnh.',
    notes: [
      'Statement hoàn chỉnh trung tính thường kết thúc xuống giọng.', 'Câu kể về giờ đóng cửa thường dùng final fall.',
      'Command trung tính thường có falling intonation.', 'Lời nhắc hoàn chỉnh thường kết thúc bằng falling tone.',
      'Final fall thường báo ý đã hoàn chỉnh.', 'Ngữ điệu tương tác với mục đích, thái độ và bối cảnh.',
      'Maps là mục chưa cuối nên thường lên giọng.', 'Rising tone báo còn mục tiếp theo.',
      'Mục cuối thường xuống để khép danh sách.', 'Mẫu phổ biến là rise–rise–fall.',
      'Rising tone trên statement có thể mời xác nhận.', 'Cần kết hợp pitch với grammar và context.'
    ]
  },
  {
    key: 'vocabulary', recognition: 'Phân biệt loại di sản, hoạt động bảo tồn và collocation.',
    review: 'Heritage values, threats and preservation vocabulary', mistake: 'Đồng nhất di sản với công trình hoặc dùng sai từ loại.',
    notes: [
      'Vật thể và công trình thuộc tangible heritage.', 'Tri thức và trình diễn thuộc intangible heritage.',
      'Artisan là người có kỹ năng nghề thủ công.', 'Restoration đưa phần vật chất về trạng thái lịch sử xác định.',
      'Deterioration là sự xuống cấp.', 'Conservation là danh từ chỉ bảo tồn/quản lý.',
      'Preserve cultural heritage là collocation đúng.', 'Pass down là truyền qua thế hệ.',
      'Raise awareness là nâng cao nhận thức.', 'Document oral histories là ghi chép có hệ thống.',
      'Be involved in là tham gia vào.', 'Protect the site from damage là bảo vệ khỏi hư hại.'
    ]
  },
  {
    key: 'grammar', recognition: 'Xác định to-infinitive chỉ mục đích, sau adjective hoặc bổ nghĩa noun; phân biệt prepositional to.',
    review: 'To-infinitive clauses', mistake: 'Dùng V-ing ngay sau infinitive to hoặc dùng to-V sau giới từ to.',
    notes: [
      'To examine nêu mục đích chuyến thăm.', 'To repair nêu mục đích gây quỹ.',
      'To improve nêu mục đích thêm captions.', 'To document trả lời vì sao họ phỏng vấn.',
      'Important đi với to obtain trong cấu trúc đánh giá.', 'Proud đi với to share.',
      'To restore bổ nghĩa plan.', 'To store bổ nghĩa place.',
      'First student theo sau bởi to interview.', 'A method to record là noun + infinitive modifier.',
      'Committed to có to là giới từ nên dùng preserving.', 'To plan chỉ mục đích; committed to consulting dùng prepositional to.'
    ]
  },
  {
    key: 'reading', recognition: 'Đọc value, stakeholder, consent, evidence, benefit, cost và outcome.',
    review: 'Reading community-centred heritage preservation', mistake: 'Dùng số lượt xem, khách hoặc sản phẩm làm bằng chứng duy nhất.',
    notes: [
      'Một số bài hát có hạn chế văn hóa nên quyền truy cập phải do cộng đồng quyết định.', 'Người tham gia chọn access, naming và future use.',
      'Giữ hai ký ức tránh áp đặt một phiên bản chính thức.', 'Thành công gồm context, consent, trust và control.',
      'Áp lực thay đổi theo nơi/thời gian và giới hạn ảnh hưởng sinh kế.', 'Visitor fee tài trợ thu gom rác và theo dõi công trình.',
      'Chợ mới giúp các quầy tiếp cận dòng khách mới.', 'Đánh giá cần xét phân phối và tác động ngoài số lượt đến.',
      'Sao chép máy móc khiến kỹ năng thiếu liên hệ đời sống.', 'Nền tảng vật liệu, dụng cụ và cấu trúc vẫn bắt buộc.',
      'Bảo tồn giữ tri thức/tiêu chuẩn nhưng cho phép đổi mới có trách nhiệm.', 'Năng lực độc lập, giải thích ý nghĩa và mentoring cho thấy transmission.'
    ]
  },
  {
    key: 'writing', recognition: 'Tổ chức value–risk–action–participation và dùng mục tiêu có thể kiểm chứng.',
    review: 'Heritage proposals, notices and realistic claims', mistake: 'Thiếu quyền cộng đồng hoặc hứa kết quả tuyệt đối.',
    notes: [
      'Giới thiệu giá trị trước, rồi nguy cơ và hành động.', 'Opening nêu rõ hoạt động và thời gian.',
      'However nối lợi ích kinh tế với rủi ro hư hại.', 'Thông tin thực hành phải theo sau purpose.',
      'Mục tiêu có số người, kỹ năng và thời hạn đo được.', 'Sở thích thể thao không liên quan restoration.',
      'To create nêu mục đích scanning.', 'Could help cùng cơ chế cụ thể tránh overclaim.',
      'Topic sentence bao quát consent, access và credit.', 'Cộng đồng trực tiếp phê duyệt và rà soát.',
      'To reduce vibration nêu rõ mục đích di chuyển bãi xe.', 'Kết luận xác định ba nhóm kết quả cần review.'
    ]
  },
  {
    key: 'communication', recognition: 'Xác định permission, consent, credit, community authority và đánh giá kết quả.',
    review: 'Respectful heritage communication', mistake: 'Giả định quyền công bố hoặc để chuyên gia quyết định một chiều.',
    notes: [
      'Câu hỏi xin phép cả ghi và phạm vi sử dụng.', 'Thiết kế archive phải phản ánh điều kiện của cộng đồng.',
      'Co-design trao vai trò thực chất cho artisans.', 'Hỏi custodian tôn trọng hạn chế nghi lễ.',
      'Credit phải theo tên và cách diễn đạt đã thỏa thuận.', 'Revenue cần được xét cùng phân phối và damage.',
      'Hỏi when/by whom giúp hiểu bối cảnh.', 'Community-only hoặc không ghi là lựa chọn tôn trọng giới hạn.',
      'Chuyên gia hỗ trợ, không thay quyền quyết định.', 'Hỏi practitioners đưa định nghĩa authenticity về đúng chủ thể.',
      'Miễn phí, dịch và đi lại giải quyết rào cản tiếp cận.', 'Kỹ năng, hiểu biết, duy trì thực hành và feedback đo transmission.'
    ]
  }
] as const;

export const g11EnglishModule6Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u6-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u6-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m6', recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu quy tắc và ngữ cảnh', explanation }
    ],
    finalAnswer: answers[index % 4], commonMistakes: [group.mistake], reviewSuggestions: [group.review]
  }))
);
