import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
type Note = [Choice, string];
const groups: Array<{ key: string; recognition: string; review: string; mistake: string; notes: Note[] }> = [
  {
    key: 'pron',
    recognition: 'Xét âm cuối thực tế của từ trước, âm đầu của từ sau và vị trí quãng ngắt.',
    review: 'Linking final consonants to initial vowels',
    mistake: 'Dựa vào chữ viết hoặc nối qua một quãng ngắt rõ.',
    notes: [
      ['A', 'Lives kết thúc bằng /z/ và in bắt đầu bằng nguyên âm nên có thể nối.'],
      ['B', 'Cities kết thúc bằng /z/ và of bắt đầu bằng nguyên âm.'],
      ['C', 'Turn kết thúc bằng phụ âm và on bắt đầu bằng nguyên âm.'],
      ['D', 'Bus‿is và is‿electric đều là ranh giới phụ âm-nguyên âm.'],
      ['A', 'Make kết thúc bằng âm /k/ dù có chữ e câm, nên nối với it.'],
      ['B', 'For kết thúc bằng phụ âm /r/ trong cách phát âm nối và everyone bắt đầu bằng nguyên âm.'],
      ['C', 'Green park có hai âm phụ âm /n/ và /p/ ở ranh giới.'],
      ['D', 'Dấu chấm tạo quãng ngắt nên thường không nối qua đó.'],
      ['A', 'Âm cuối của make là /k/, không phải nguyên âm.'],
      ['B', 'Nối âm phụ thuộc âm thực tế và việc có quãng ngắt hay không.'],
      ['C', 'Safe kết thúc bằng /f/ và and bắt đầu bằng nguyên âm.'],
      ['D', 'Không nối qua dấu chấm, nhưng opened‿its có điều kiện nối.']
    ]
  },
  {
    key: 'vocab',
    recognition: 'Xác định khái niệm đô thị, từ loại và collocation.',
    review: 'Smart-city vocabulary and collocations',
    mistake: 'Chọn từ cùng chủ đề nhưng không đúng nghĩa hoặc cụm cố định.',
    notes: [
      ['A', 'Roads, utilities và networks thuộc infrastructure.'],
      ['B', 'Sensor là thiết bị phát hiện hoặc đo điều kiện.'],
      ['C', 'Traffic congestion là tình trạng tắc nghẽn giao thông.'],
      ['D', 'Pedestrian là người di chuyển bằng chân.'],
      ['A', 'Affordable nghĩa là có mức giá người thu nhập thông thường có thể chi trả.'],
      ['B', 'City planning là quá trình tổ chức đất và dịch vụ đô thị.'],
      ['A', 'Solar và wind là renewable energy.'],
      ['B', 'Cụm đúng là public transport.'],
      ['C', 'Reduce emissions là giảm phát thải.'],
      ['D', 'Ease congestion là làm giảm tắc nghẽn.'],
      ['A', 'Cụm cố định là quality of life.'],
      ['B', 'Air-quality sensors đo chất lượng không khí.']
    ]
  },
  {
    key: 'grammar',
    recognition: 'Xét nghĩa trạng thái/hành động của động từ hoặc xác định linking verb.',
    review: 'Stative verbs in continuous forms; linking verbs + adjective',
    mistake: 'Cấm mọi stative verb ở tiếp diễn hoặc dùng adverb sau linking verb.',
    notes: [
      ['A', 'Think mang nghĩa cho rằng nên dùng simple form.'],
      ['B', 'Is thinking about diễn tả quá trình cân nhắc tạm thời.'],
      ['C', 'Has mô tả sự sở hữu một mạng lưới xe buýt.'],
      ['D', 'Is having a meeting diễn tả đang tham gia cuộc họp.'],
      ['A', 'Is feeling diễn tả hành động sờ/kiểm tra vật liệu.'],
      ['B', 'See mang nghĩa hiểu nên dùng simple form.'],
      ['C', 'Look là linking verb nên theo sau là adjective attractive.'],
      ['D', 'Smell mô tả chủ ngữ air nên dùng adjective clean.'],
      ['A', 'Become là linking verb, safer là adjective so sánh.'],
      ['B', 'Seem là linking verb nên dùng practical.'],
      ['C', 'Are tasting mô tả hành động chủ động kiểm tra hương/vị/chất lượng.'],
      ['D', 'Feel là linking verb nên dùng adjective comfortable.']
    ]
  },
  {
    key: 'reading',
    recognition: 'Xác định vấn đề, giải pháp, bằng chứng và giới hạn trong từng văn bản.',
    review: 'Critical reading about future-city solutions',
    mistake: 'Chọn kết luận mạnh hơn bằng chứng hoặc bỏ qua tác động ngoài dự kiến.',
    notes: [
      ['A', 'Bài mô tả cách thử nghiệm đường phố được đo, phỏng vấn và điều chỉnh.'],
      ['B', 'Phỏng vấn bổ sung trải nghiệm mà số liệu không giải thích được.'],
      ['C', 'Một số đường lân cận trở nên đông hơn khi xe đổi tuyến.'],
      ['D', 'Thành phố bổ sung hai điểm giao hàng.'],
      ['A', 'Bài xem digital twin là công cụ thử kịch bản cần minh bạch, không phải máy ra quyết định.'],
      ['B', 'Ít cảm biến khiến mô hình có ít dữ liệu về khu vực đó.'],
      ['C', 'Its quay lại danh từ model.'],
      ['D', 'Tác giả ủng hộ công nghệ khi giới hạn rõ và có phán đoán công chúng.'],
      ['A', 'Ít cây, nhiều mặt lát và mái tối hấp thụ nhiệt.'],
      ['B', 'Trồng nơi dễ có thể ưu tiên phố giàu, rộng và trì hoãn khu nóng nhất.'],
      ['C', 'Danh sách hộ nhận hỗ trợ cho phép kiểm tra phân phối có công bằng không.'],
      ['D', 'Giải pháp kỹ thuật cần đi cùng ưu tiên công bằng và kế hoạch bảo trì.']
    ]
  },
  {
    key: 'writing',
    recognition: 'Theo dõi cấu trúc vấn đề–giải pháp–tác động–điều kiện và từ nối.',
    review: 'Indirect writing: urban problem-solution arguments',
    mistake: 'Liệt kê giải pháp mà không giải thích cơ chế hoặc giới hạn.',
    notes: [
      ['A', 'B nêu vấn đề, C nêu giải pháp và A nêu kết quả.'],
      ['B', 'Câu B bao quát nhiều giải pháp và báo trước tiêu chí so sánh.'],
      ['C', 'However nối lợi ích dữ liệu với giới hạn của nó.'],
      ['D', 'First → Next → Finally tạo b-c-a.'],
      ['A', 'Màu mái nhà ga không chứng minh khả năng tiếp cận giao thông.'],
      ['B', 'Câu B tổng hợp lợi ích và điều kiện bảo vệ dữ liệu.'],
      ['C', 'Thêm xe buýt là nguyên nhân, giảm thời gian chờ là kết quả.'],
      ['D', 'Although liên kết tính đổi mới với hạn chế chi phí.'],
      ['A', 'Câu A bao quát buses, cycle lanes và walkable streets dưới hệ thống cân bằng.'],
      ['B', 'May và if giữ mức độ dự đoán phù hợp với điều kiện dữ liệu.'],
      ['C', 'Câu C rõ, cụ thể và tránh lặp từ.'],
      ['D', 'Câu D tổng hợp khả năng tiếp cận, chất lượng sống và thích ứng nhiệt.']
    ]
  },
  {
    key: 'comm',
    recognition: 'Xác định mức độ chắc chắn, lợi ích-hạn chế và điều kiện của đề xuất.',
    review: 'Predictions and proposals about urban solutions',
    mistake: 'Diễn đạt mọi dự đoán như sự chắc chắn hoặc bỏ qua nhóm dễ bị loại trừ.',
    notes: [
      ['A', 'Probably not phù hợp vì câu sau nêu lợi ích có giới hạn.'],
      ['B', 'Could diễn tả khả năng giảm nhiệt và quản lý nước mưa.'],
      ['C', 'Likely đi cùng điều kiện về fares tạo dự đoán cân bằng.'],
      ['D', 'Câu ghi nhận lợi ích rồi nêu nguy cơ loại trừ.'],
      ['A', 'Be likely to thể hiện xác suất cao nhưng không bảo đảm.'],
      ['B', 'Might phù hợp với kết quả phụ thuộc dữ liệu và điều chỉnh tuyến.'],
      ['A', 'Why don’t we consider là đề xuất phù hợp.'],
      ['B', 'That could work if ghi nhận giải pháp và thêm điều kiện tiếp cận.'],
      ['C', 'Thử nghiệm với nhiều nhóm người dùng là phương án bao trùm nhất.'],
      ['D', 'Kết hợp dữ liệu nhiệt với vulnerability ưu tiên theo rủi ro và công bằng.'],
      ['A', 'Provided that thêm điều kiện giá vé hợp lý một cách xây dựng.'],
      ['B', 'Xem bằng chứng thử nghiệm trước giúp quyết định có cơ sở.']
    ]
  }
];

export const g11EnglishModule3Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map(([answer, explanation], index) => ({
    id: `eng11-sol-u3-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u3-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m3',
    recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu ngữ cảnh', explanation }
    ],
    finalAnswer: answer,
    commonMistakes: [group.mistake],
    reviewSuggestions: [group.review]
  }))
);
