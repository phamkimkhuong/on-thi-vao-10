import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation',
    recognition: 'Kiểm tra polarity, trợ động từ, đại từ chủ ngữ và mục đích xác nhận của question tag.',
    review: 'Question tags and rising/falling intonation',
    mistake: 'Chỉ đảo dấu câu mà bỏ qua trợ động từ, đại từ hoặc dùng một ngữ điệu cố định cho mọi tag.',
    notes: [
      'Mệnh đề khẳng định với is lấy tag phủ định isn’t it.',
      'Động từ thường migrate ở hiện tại dùng trợ động từ do: don’t they.',
      'Mệnh đề chính phủ định thường lấy tag khẳng định.',
      'The water isn’t clean là phủ định nên tag đúng là is it.',
      'Can trong mệnh đề chính được lặp lại ở tag phủ định can’t we.',
      'Lời đề nghị bắt đầu bằng Let’s thường dùng tag shall we.',
      'Giọng lên thường cho thấy người nói thật sự chưa chắc và muốn xác nhận.',
      'Rising tag trong ngữ cảnh này cho biết người nói đang chờ thông tin xác nhận.',
      'Falling tag thường cho thấy người nói kỳ vọng người nghe đồng ý.',
      'Giọng xuống trình bày nhận định khá chắc chắn rồi mời người nghe đồng tình.',
      'Cùng cấu trúc tag nhưng độ chắc chắn và mục đích giao tiếp có thể khác.',
      'Phải kiểm tra polarity, auxiliary, pronoun và intended certainty theo đúng thứ tự.'
    ]
  },
  {
    key: 'vocabulary',
    recognition: 'Xác định vai trò sinh thái hoặc quá trình được mô tả rồi chọn thuật ngữ/collocation chính xác.',
    review: 'Ecosystem vocabulary and collocations',
    mistake: 'Nhầm habitat với ecosystem hoặc chọn từ cùng trường nghĩa nhưng sai vai trò sinh thái.',
    notes: [
      'Ecosystem gồm các thành phần sống và không sống tương tác với nhau.',
      'Habitat là nơi sống tự nhiên của một loài.',
      'Biodiversity là sự đa dạng ở cấp gene, loài và hệ sinh thái.',
      'Food web mô tả nhiều mối quan hệ dinh dưỡng liên kết với nhau.',
      'Decomposer phân giải vật chất hữu cơ chết.',
      'Keystone species tạo ảnh hưởng sinh thái lớn hơn nhiều so với độ phong phú của nó.',
      'Restore habitat là collocation tự nhiên cho phục hồi sinh cảnh.',
      'Monitor a population là theo dõi quần thể theo thời gian.',
      'Đường sá có thể disrupt ecological connectivity, tức làm gián đoạn kết nối.',
      'Hành lang có thể improve connectivity giữa các mảng sinh cảnh.',
      'Đất ngập nước provide ecosystem services như lưu giữ nước lũ.',
      'Control invasive species là kiểm soát loài xâm lấn.'
    ]
  },
  {
    key: 'grammar',
    recognition: 'Xác định head noun, modifier, vị trí số nhiều và kiểu viết quy ước của compound noun.',
    review: 'Compound nouns: meaning, head and spelling',
    mistake: 'Cho danh từ đầu luôn là head, đánh dấu số nhiều ở từ đầu hoặc tự suy ra cách viết mà không kiểm tra quy ước.',
    notes: [
      'Food web là compound noun gồm hai danh từ.',
      'Trong wildlife corridor, corridor là head và wildlife bổ nghĩa loại hành lang.',
      'River bank là một loại bank; head noun nằm ở cuối.',
      'Số nhiều được đánh dấu trên head: food webs.',
      'Wildlife corridors là dạng số nhiều đúng.',
      'Trong ecosystem service, ecosystem bổ nghĩa cho service.',
      'Food chain thường được viết mở thành hai từ.',
      'Wildlife thường được viết liền thành một từ.',
      'Decision-making thường dùng dấu nối trong ngữ cảnh này.',
      'Cách viết compound noun mang tính quy ước nên cần tra từ điển đáng tin cậy.',
      'Habitat loss có head noun là loss.',
      'Compound noun có thể có nghĩa chuyên biệt và được viết mở, liền hoặc có gạch nối.'
    ]
  },
  {
    key: 'reading',
    recognition: 'Theo dõi baseline, cơ chế sinh thái, chỉ báo, tác động xã hội và điều kiện khiến kế hoạch phải thay đổi.',
    review: 'Reading ecosystem restoration evidence',
    mistake: 'Đồng nhất hoạt động như trồng cây/thả loài với phục hồi thành công hoặc suy diễn nhân quả từ dữ liệu ngắn hạn.',
    notes: [
      'Số cây trồng không cho biết cây sống, động vật di chuyển hay qua đường an toàn.',
      'Nông dân chỉ ra hàng rào, lịch canh tác và sử dụng đất ảnh hưởng đường di chuyển.',
      'Một số đoạn cây sống thấp trong mùa khô và cây bụi xâm lấn lan rộng.',
      'Trao đổi gene và tác động quần thể dài hạn chưa được biết nên chưa thể tuyên bố phục hồi hoàn toàn.',
      'Động vật ăn thịt được kỳ vọng giảm áp lực của động vật ăn cỏ lên cây non.',
      'Ngưỡng định trước cho phép tạm dừng hoặc đảo ngược chương trình.',
      'Một cá thể được di dời vì liên tục tiếp cận trang trại.',
      'Mẫu nhỏ và thời gian ngắn hạn chế kết luận về tác động toàn mạng lưới thức ăn.',
      'Thí nghiệm nhỏ kiểm tra vì điều kiện từng địa điểm có thể quyết định tỷ lệ sống.',
      'Nước đục kéo dài làm tỷ lệ sống ở một địa điểm thấp.',
      'Khác biệt sẵn có giữa các địa điểm ngăn việc quy toàn bộ số cá non tăng cho cỏ biển.',
      'Phục hồi cần xử lý nguyên nhân suy giảm và theo dõi cả kết quả sinh thái lẫn xã hội.'
    ]
  },
  {
    key: 'writing',
    recognition: 'Tổ chức vấn đề–cơ chế–bằng chứng–biện pháp–chỉ báo và dùng ngôn ngữ tương xứng với độ chắc chắn.',
    review: 'Evidence-based ecosystem proposals',
    mistake: 'Dùng ảnh hoặc một chỉ báo để tuyên bố phục hồi toàn diện và không nêu điều kiện duy trì/điều chỉnh.',
    notes: [
      'Trình tự hợp lý là nêu mất sinh cảnh, giải thích cơ chế rồi đề xuất phục hồi có giám sát.',
      'Mở bài có mức suy giảm, địa điểm và thời gian tạo baseline rõ.',
      'However nối cải thiện tỷ lệ sống với vấn đề chất lượng nước còn tồn tại.',
      'Sau cơ chế cần bằng chứng và biện pháp nhắm đúng nguyên nhân.',
      'Water-quality monitoring là compound noun dùng đúng trong câu.',
      'Con vật yêu thích của người thiết kế không liên quan đến đánh giá phục hồi.',
      'Suggest và nêu đúng hai loài giúp kết luận thận trọng, sát dữ liệu camera.',
      'Số nhiều đặt ở head noun: wildlife corridors.',
      'Topic sentence bao quát tỷ lệ sống, di chuyển và roadkill như nhiều chỉ báo.',
      'May và điều kiện duy trì tránh cam kết vượt quá bằng chứng.',
      'Because + clause liên kết runoff làm giảm ánh sáng với phản ứng xử lý xói mòn.',
      'Đề xuất thích ứng kết bằng lịch rà soát, chỉ báo và ngưỡng kích hoạt thay đổi.'
    ]
  },
  {
    key: 'communication',
    recognition: 'Đánh giá phát biểu theo chất lượng bằng chứng, khả năng thích ứng, sự tham gia và phân bổ lợi ích–chi phí.',
    review: 'Discussing ecosystem choices and trade-offs',
    mistake: 'Hứa chắc chắn, che giấu thất bại hoặc tham vấn khi mọi quyết định đã cố định.',
    notes: [
      'Câu hỏi về indicators tập trung trực tiếp vào bằng chứng chức năng food web.',
      'Thử nghiệm điều kiện địa điểm và tỷ lệ sống trước giúp giảm rủi ro mở rộng sai.',
      'Ngưỡng, theo dõi và sửa phương pháp là ba thành phần của adaptive management.',
      'Lập bản đồ tuyến thiết yếu đưa mối quan tâm tiếp cận vào thiết kế.',
      'Bảo vệ nơi làm tổ nhưng giảm quyền tiếp cận mùa vụ là một trade-off rõ.',
      'Một loài tăng là tín hiệu tích cực nhưng chưa đại diện đa dạng và chức năng toàn hệ.',
      'Tham vấn có ý nghĩa khi bên liên quan ảnh hưởng được lựa chọn và rà soát kết quả.',
      'Ngư dân có tri thức địa phương và chịu tác động trực tiếp của quyết định tiếp cận.',
      'Hỏi về tác động chưa đo hoặc xuất hiện chậm làm rõ mức độ bất định.',
      'Báo cáo thất bại rồi so sánh điều kiện tạo nền tảng cho thiết kế lại.',
      'Đánh giá cần so lợi ích sinh thái với người gánh chi phí và cách giảm thiệt hại.',
      'Kế hoạch nên đổi khi chạm ngưỡng hoặc xuất hiện tác hại ngoài dự kiến.'
    ]
  }
] as const;

export const g11EnglishModule10Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u10-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u10-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m10',
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
