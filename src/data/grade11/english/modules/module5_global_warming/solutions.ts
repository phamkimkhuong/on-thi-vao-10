import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation', recognition: 'Xác định content words, thông tin đối lập và nhịp câu theo ngữ cảnh.',
    review: 'Sentence stress and rhythm', mistake: 'Nhấn mọi từ như nhau hoặc chọn theo độ dài chữ viết.',
    notes: [
      'Harmful là tính từ mang nội dung trong cụm harmful gases.', 'Emissions là danh từ nội dung nên thường nổi bật.',
      'Climate, reduce và serious đều là content words.', 'Energy nổi bật vì mang thông tin chính.',
      'Reduce là động từ chính, không phải function word.', 'Function words chủ yếu thể hiện quan hệ ngữ pháp.',
      'Solar đối lập trực tiếp với coal.', 'Trains sửa thông tin buses nên nhận contrastive stress.',
      'Âm tiết yếu có thể được rút ngắn giữa các nhịp nhấn.', 'Tuesday phải nổi bật để sửa Thursday.',
      'Function word có thể được nhấn khi cần sửa hoặc đối lập.', 'Stress phải được quyết định từ nghĩa và ngữ cảnh.'
    ]
  },
  {
    key: 'vocabulary', recognition: 'Xác định khái niệm, từ loại và collocation khí hậu.',
    review: 'Climate vocabulary: causes, impacts and responses', mistake: 'Nhầm mitigation với adaptation hoặc dùng sai collocation.',
    notes: [
      'Greenhouse gases giữ nhiệt trong khí quyển.', 'Carbon footprint là lượng phát thải gắn với hoạt động.',
      'Adaptation giảm mức độ tổn thương trước tác động.', 'Mitigation giảm phát thải hoặc tăng hấp thụ carbon.',
      'Mặt trời và gió là nguồn tái tạo.', 'Sea-level rise là cụm danh từ chuẩn.',
      'Reduce emissions là collocation chuẩn.', 'Switch to diễn đạt chuyển sang nguồn năng lượng khác.',
      'Carbon sinks hấp thụ và lưu carbon.', 'Cope with đi với tác động hoặc khó khăn.',
      'Sau energy cần danh từ efficiency.', 'Extreme weather chỉ các hiện tượng thời tiết nghiêm trọng.'
    ]
  },
  {
    key: 'grammar', recognition: 'Xác định chủ ngữ logic và quan hệ chủ động/bị động của participle clause.',
    review: 'Present and past participle clauses', mistake: 'Chọn dạng chỉ theo mặt chữ hoặc tạo dangling participle.',
    notes: [
      'Households chủ động use nên dùng Using.', 'Minh vừa walking vừa saves; chủ ngữ logic thống nhất.',
      'Researchers chủ động analyse data nên dùng Analysing.', 'Reducing mang quan hệ chủ động với chủ ngữ.',
      'Mai là người cycling và avoids nên câu không dangling.', 'Council là chủ thể comparing và selected.',
      'Paths bị flooded nên dùng past participle.', 'Building nhận tác động powered.',
      'Food được sourced từ farms nên dùng V3.', 'Roof được designed nên past participle clause đúng.',
      'Damaged rút gọn because the bridge was damaged.', 'Khôi phục mệnh đề đầy đủ để we là người driving.'
    ]
  },
  {
    key: 'reading', recognition: 'Định vị ý chính, chi tiết, giới hạn bằng chứng và tác động phân phối.',
    review: 'Reading climate evidence, adaptation and mitigation', mistake: 'Biến pilot hoặc số liệu ngắn hạn thành bảo đảm phổ quát.',
    notes: [
      'Bài 1 mô tả thử nghiệm nhiều biện pháp trước khi nhân rộng.', 'Điện dùng cho làm mát có thể làm tăng phát thải.',
      'Phòng tầng trên vẫn cần làm mát thêm lúc nóng nhất.', 'Dữ liệu mùa kết hợp phản hồi comfort định hướng cải tạo.',
      'Các nguồn đo đều có giới hạn nên công bố một khoảng.', 'Hạ tầng hạn chế làm người dân thiếu lựa chọn thực tế.',
      'Sáu tháng chưa đủ xác lập xu hướng bền vững.', 'Review xét khả năng tiếp cận giữa các khu vực.',
      'Thử nhỏ giúp quan sát rủi ro và sửa thiết kế.', 'Cư dân cung cấp tri thức địa phương về dòng nước và lối đi.',
      'Trao đổi carbon hệ sinh thái biến động theo thời gian.', 'Phục hồi cần tích hợp sinh thái, sinh kế, quyền và theo dõi dài hạn.'
    ]
  },
  {
    key: 'writing', recognition: 'Xác định cấu trúc problem–cause–impact–response và mức độ khẳng định.',
    review: 'Climate indirect writing and evidence', mistake: 'Dùng connector sai quan hệ hoặc khẳng định quá mức.',
    notes: [
      'Trình tự hợp lý là hiện tượng, tác động rồi phản ứng.', 'Câu đúng có phạm vi, đối tượng và rủi ro cụ thể.',
      'As a result nối nguyên nhân hạ tầng hạn chế với hệ quả.', 'Sau bằng chứng cần giải thích tác động và phản ứng.',
      'Suggests phản ánh đúng giới hạn chuỗi dữ liệu năm năm.', 'Sở thích âm nhạc không liên quan hiệu quả làm mát.',
      'School là chủ thể dùng đèn và giảm điện.', 'Hai phần phải chia sẻ chủ ngữ logic.',
      'Topic sentence bao quát các biện pháp giao thông.', 'May và điều kiện maintenance tránh overclaim.',
      'Because diễn đạt rõ quan hệ mái tối hấp thụ nhiệt.', 'Kết luận nêu cách theo dõi hiệu quả và khả năng tiếp cận.'
    ]
  },
  {
    key: 'communication', recognition: 'Xác định mục đích đề xuất, bằng chứng, trade-off, feasibility và fairness.',
    review: 'Responsible climate discussion', mistake: 'Chọn khẩu hiệu tuyệt đối hoặc chỉ dùng một tiêu chí.',
    notes: [
      'We could... là đề xuất mở và có thể thử.', 'Phản hồi ghi nhận lợi ích rồi yêu cầu dữ kiện.',
      'Câu hỏi trực tiếp yêu cầu dữ liệu hỗ trợ ước lượng.', 'Giá rẻ chưa đủ; cần xét hiệu quả và phân phối chi phí.',
      'Provided that thể hiện đồng ý có điều kiện kiểm soát.', 'Hành động cá nhân hiệu quả hơn khi hệ thống hỗ trợ.',
      'Nguồn lực, thời gian và năng lực triển khai quyết định feasibility.', 'Thu nhập và lợi ích liên quan đến fairness.',
      'Mitigation tác động nguyên nhân; adaptation giảm thiệt hại.', 'Cần kiểm tra khả năng chuyển giao trước khi scale.',
      'Câu trả lời nêu cả lợi ích điện và rủi ro sinh thái/sinh kế.', 'So sánh nhiều tiêu chí tránh lựa chọn phiến diện.'
    ]
  }
] as const;

export const g11EnglishModule5Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u5-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u5-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m5', recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu quy tắc và ngữ cảnh', explanation }
    ],
    finalAnswer: answers[index % 4], commonMistakes: [group.mistake], reviewSuggestions: [group.review]
  }))
);
