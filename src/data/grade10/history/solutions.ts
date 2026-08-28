import type { Solution } from '@/types';
import { g10HistoryExpansionSolutions } from './questionExpansion';
import { g10HistoryQuestions } from './questions';

const legacyHistorySolutions: Solution[] = [
  {
    id: 'g10-his-s1',
    questionId: 'g10-his-q1',
    recognition: 'Nhận biết khái niệm hiện thực lịch sử khách quan.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích bản chất khái niệm',
        explanation: 'Hiện thực lịch sử là những gì đã xảy ra trong quá khứ, tồn tại khách quan và không phụ thuộc vào ý muốn con người.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm với Nhận thức lịch sử (chủ quan của người nghiên cứu)'],
    reviewSuggestions: ['Ôn tập bài 1: Hiện thực lịch sử và nhận thức lịch sử']
  },
  {
    id: 'g10-his-s2',
    questionId: 'g10-his-q2',
    recognition: 'Nhận biết đặc điểm nhận thức lịch sử.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích phương án sai',
        explanation: 'Nhận thức lịch sử mang tính chủ quan và có thể thay đổi khi có thêm tư liệu mới, không bao giờ bất biến.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nghĩ rằng nhận thức lịch sử là cố định tuyệt đối'],
    reviewSuggestions: ['Xem lại bài 1: Phân biệt hiện thực và nhận thức lịch sử']
  },
  {
    id: 'g10-his-s1b',
    questionId: 'g10-his-q1b',
    recognition: 'Giải thích nguyên nhân vì sao nhận thức lịch sử lại đa dạng và thay đổi.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các yếu tố ảnh hưởng đến Nhận thức lịch sử',
        explanation: 'Nhận thức lịch sử là hình ảnh quá khứ tái hiện qua trí tuệ con người. Sự khác nhau giữa các nhà sử học bắt nguồn từ: nguồn sử liệu tiếp cận được, phương pháp nghiên cứu, thế giới quan và bối cảnh thời đại của từng tác giả.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ rằng hiện thực lịch sử có thể tự thay đổi'],
    reviewSuggestions: ['Bài 1: Tính chủ quan và tính đa dạng của nhận thức lịch sử']
  },
  {
    id: 'g10-his-s1c',
    questionId: 'g10-his-q1c',
    recognition: 'Vận dụng tư liệu cổ đại để xác định nguyên tắc Sử học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ý nghĩa câu chuyện Thái sử Bá',
        explanation: 'Thái sử Bá và các em thà chết chứ nhất quyết ghi đúng sự thật "Thôi Trữ giết vua", không chấp nhận bóp méo sử sách theo lệnh quyền thần. Đây là tấm gương tiêu biểu nhất cho nguyên tắc TRUNG THỰC và KHÁCH QUAN của Sử học.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm với nguyên tắc tiến bộ/nhân văn'],
    reviewSuggestions: ['Bài 1: Các nguyên tắc cơ bản của Sử học & Đạo đức nghề nghiệp']
  },
  {
    id: 'g10-his-s1d',
    questionId: 'g10-his-q1d',
    recognition: 'Phân biệt Chức năng Khoa học và Chức năng Xã hội của Sử học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định chức năng khoa học',
        explanation: 'Chức năng khoa học của Sử học là khôi phục hiện thực lịch sử chân thực, khách quan và tìm ra các quy luật vận động của lịch sử. Trong khi đó, giáo dục bài học hay lòng yêu nước thuộc về Chức năng Xã hội.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm chức năng khoa học với chức năng xã hội (giáo dục)'],
    reviewSuggestions: ['Bài 1: Chức năng và nhiệm vụ của Sử học']
  },
  {
    id: 'g10-his-s1e',
    questionId: 'g10-his-q1e',
    recognition: 'Nhận biết đối tượng nghiên cứu của Sử học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định phạm vi nghiên cứu của Sử học',
        explanation: 'Đối tượng nghiên cứu của Sử học là toàn bộ quá khứ của loài người trên mọi lĩnh vực (chính trị, kinh tế, xã hội, văn hóa, tư tưởng...).'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Giới hạn đối tượng Sử học chỉ trong chiến tranh hay vua chúa'],
    reviewSuggestions: ['Bài 1: Khái niệm Sử học và Đối tượng nghiên cứu']
  },
  {
    id: 'g10-his-s3',
    questionId: 'g10-his-q3',
    recognition: 'Xác định loại hình sử liệu gốc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá độ tin cậy của sử liệu',
        explanation: 'Văn bia và hiện vật khảo cổ tại di tích có thể là sử liệu gốc, cung cấp thông tin trực tiếp nhưng vẫn cần được khảo chứng.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn truyền thuyết dân gian là sử liệu gốc có độ chính xác 100%'],
    reviewSuggestions: ['Xem lại bài 2: Các loại hình sử liệu']
  },
  {
    id: 'g10-his-s2b',
    questionId: 'g10-his-q2b',
    recognition: 'Giải thích ý nghĩa tư tưởng Hồ Chí Minh về việc học lịch sử.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích trích dẫn của Bác Hồ',
        explanation: 'Câu nói "Dân ta phải biết sử ta / Cho tường gốc tích nước nhà Việt Nam" nhấn mạnh việc học lịch sử giúp mỗi người hiểu rõ cội nguồn, bản sắc và nuôi dưỡng lòng yêu nước.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng lịch sử chỉ dự báo thiên tai hay thay thế khoa học tự nhiên'],
    reviewSuggestions: ['Bài 2: Vai trò và ý nghĩa của tri thức lịch sử']
  },
  {
    id: 'g10-his-s2c',
    questionId: 'g10-his-q2c',
    recognition: 'Giải thích nguyên nhân vì sao cần học tập lịch sử suốt đời.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích tính rộng lớn và mở rộng của tri thức lịch sử',
        explanation: 'Tri thức lịch sử rất rộng lớn, luôn xuất hiện thêm nguồn phát hiện mới. Học tập suốt đời giúp hoàn thiện nhận thức và mở rộng tư duy hội nhập.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng lịch sử chỉ cần học trong nhà trường phổ thông'],
    reviewSuggestions: ['Bài 2: Học tập và khám phá lịch sử suốt đời']
  },
  {
    id: 'g10-his-s2d',
    questionId: 'g10-his-q2d',
    recognition: 'Phân tích vai trò của thẩm định sử liệu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mục đích bước khảo chứng sử liệu',
        explanation: 'Khảo chứng và thẩm định giúp xác minh tính chân thực của nguồn tư liệu, loại bỏ thông tin bị xuyên tạc hoặc giả mạo trước khi đưa vào biên soạn.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ rằng nhà sử học có thể tự tạo ra sử liệu mới'],
    reviewSuggestions: ['Bài 2: Quy trình xử lý và thẩm định sử liệu']
  },
  {
    id: 'g10-his-s2e',
    questionId: 'g10-his-q2e',
    recognition: 'Phân loại hiện vật khảo cổ Trống đồng Đông Sơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân loại và đánh giá giá trị hiện vật',
        explanation: 'Trống đồng Đông Sơn là sử liệu hiện vật, cung cấp bằng chứng trực tiếp về đời sống cư dân cổ và vẫn cần được nghiên cứu, đối chiếu.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm hiện vật khảo cổ với sử liệu truyền miệng'],
    reviewSuggestions: ['Bài 2: Phân loại sử liệu gốc và sử liệu thứ cấp']
  },
  {
    id: 'g10-his-s2f',
    questionId: 'g10-his-q2f',
    recognition: 'Ứng dụng bài học lịch sử vào thực tiễn hiện đại.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định giá trị thực tiễn của bài học lịch sử',
        explanation: 'Lịch sử đúc kết kinh nghiệm từ quá khứ để giúp thế hệ hôm nay giải quyết các vấn đề thực tiễn và định hướng con đường phát triển tương lai.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn ứng dụng lịch sử với việc dự báo thời tiết'],
    reviewSuggestions: ['Bài 2: Kết nối quá khứ, hiện tại và tương lai']
  },
  {
    id: 'g10-his-s4',
    questionId: 'g10-his-q4',
    recognition: 'Mối liên ngành giữa Sử học và Hóa học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Ứng dụng phương pháp C14',
        explanation: 'Đo phóng xạ Cacbon 14 trong các mẫu vật hữu cơ giúp xác định tuổi tuyệt đối của hiện vật.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng Hóa học chỉ dùng làm sạch di vật'],
    reviewSuggestions: ['Xem lại bài 3: Sử học với các ngành khoa học']
  },
  {
    id: 'g10-his-s3b',
    questionId: 'g10-his-q3b',
    recognition: 'Mối quan hệ tương hỗ giữa Sử học và KHXH&NV.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích tính hai chiều của mối quan hệ liên ngành',
        explanation: 'Sử học cung cấp dữ liệu bối cảnh quá khứ cho các ngành KHXH&NV khác, và ngược lại các ngành này cung cấp phương pháp tiếp cận chuyên sâu để làm sáng tỏ quá khứ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng Sử học phụ thuộc hoàn toàn hoặc độc lập tuyệt đối'],
    reviewSuggestions: ['Bài 3: Sử học với các ngành Khoa học Xã hội & Nhân văn']
  },
  {
    id: 'g10-his-s3c',
    questionId: 'g10-his-q3c',
    recognition: 'Ứng dụng Di truyền học trong Sử học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích giá trị của phân tích gen/ADN cổ',
        explanation: 'Phân tích ADN từ hài cốt cổ đại giúp các nhà khoa học xác định chính xác dòng máu, quan hệ huyết thống và sơ đồ di cư của người cổ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm phân tích ADN với việc đo trọng lượng cổ vật'],
    reviewSuggestions: ['Bài 3: Sử học với các ngành Khoa học Tự nhiên']
  },
  {
    id: 'g10-his-s3d',
    questionId: 'g10-his-q3d',
    recognition: 'Ứng dụng Địa lý tự nhiên và Địa chất trong Sử học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích không gian địa lý lịch sử',
        explanation: 'Địa lý tự nhiên và Địa chất giúp tái hiện môi trường sinh thái, mực nước biển và khí hậu thời kỳ cổ đại mà con người sinh sống.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nghĩ rằng Địa lý chỉ để vẽ bản đồ hành chính hiện đại'],
    reviewSuggestions: ['Bài 3: Mối quan hệ giữa Sử học và Địa lý']
  },
  {
    id: 'g10-his-s5',
    questionId: 'g10-his-q5',
    recognition: 'Nguyên tắc bảo tồn di sản.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nguyên tắc bảo tồn',
        explanation: 'Bảo tồn di sản phải đảm bảo tính nguyên gốc và giá trị vốn có, tránh làm biến dạng di sản.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng bảo tồn là phải bê tông hóa di sản'],
    reviewSuggestions: ['Xem lại bài 3: Sử học với bảo tồn di sản']
  },
  {
    id: 'g10-his-s4b',
    questionId: 'g10-his-q4b',
    recognition: 'Mối quan hệ giữa Sử học và Du lịch di sản.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích tác động hai chiều giữa Sử học và Du lịch',
        explanation: 'Sử học cung cấp nguồn di sản và tri thức để làm du lịch, ngành du lịch mang lại nguồn thu kinh tế để tái đầu tư cho công tác bảo tồn.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng du lịch làm biến mất di sản hoàn toàn'],
    reviewSuggestions: ['Bài 3: Sử học với sự phát triển du lịch']
  },
  {
    id: 'g10-his-s4c',
    questionId: 'g10-his-q4c',
    recognition: 'Bảo tồn di sản văn hóa phi vật thể.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vai trò Sử học đối với di sản phi vật thể',
        explanation: 'Tri thức Lịch sử giúp sưu tầm, lưu giữ và tái hiện chuẩn xác các lễ hội, làn điệu, tập quán nguyên gốc của tổ tiên.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng di sản phi vật thể có thể biến thành di sản đá'],
    reviewSuggestions: ['Bài 3: Bảo tồn di sản văn hóa phi vật thể']
  },
  {
    id: 'g10-his-s6',
    questionId: 'g10-his-q6',
    recognition: 'Thành tựu kỹ thuật văn minh Trung Hoa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Liệt kê 4 phát minh lớn',
        explanation: 'Bốn phát minh nổi tiếng của Trung Hoa gồm: Kỹ thuật làm giấy, kỹ thuật in, la bàn và thuốc súng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm phát minh thời cận đại như máy hơi nước'],
    reviewSuggestions: ['Xem lại bài 4: Văn minh phương Đông cổ - trung đại']
  },
  {
    id: 'g10-his-s5b',
    questionId: 'g10-his-q5b',
    recognition: 'Phân biệt khái niệm Văn hóa và Văn minh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích bản chất khái niệm Văn minh',
        explanation: 'Văn hóa xuất hiện cùng thời điểm loài người hình thành, còn Văn minh là trạng thái phát triển cao của văn hóa, đánh dấu bằng sự ra đời của Nhà nước, Đô thị và Chữ viết.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn Văn hóa chỉ là tinh thần, Văn minh chỉ là vật chất'],
    reviewSuggestions: ['Bài 4: Khái niệm Văn hóa và Văn minh']
  },
  {
    id: 'g10-his-s5c',
    questionId: 'g10-his-q5c',
    recognition: 'Điều kiện tự nhiên hình thành Văn minh phương Đông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích vị trí các con sông lớn',
        explanation: 'Các nền văn minh phương Đông đều hình thành trên lưu vực các đại giang (Sông Nẫy, Sông Ti-grơ & Ơ-phơ-rát, Sông Ấn & Sông Hằng, Sông Hoàng Hà & Trường Giang) có đất đai phù sa màu mỡ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm với điều kiện thương mại đường biển của phương Tây'],
    reviewSuggestions: ['Bài 4: Khái quát văn minh phương Đông cổ đại']
  },
  {
    id: 'g10-his-s5d',
    questionId: 'g10-his-q5d',
    recognition: 'Thành tựu toán học vĩ đại của Ấn Độ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định đóng góp hệ thống 10 chữ số',
        explanation: 'Người Ấn Độ cổ - trung đại đã sáng tạo ra hệ thống 10 chữ số (từ 0 đến 9). Người Ả Rập sau đó truyền bá sang châu Âu nên thường gọi nhầm là chữ số Ả Rập.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ chữ số 0 do người La Mã hoặc người Ả Rập phát minh'],
    reviewSuggestions: ['Bài 4: Thành tựu văn minh Ấn Độ']
  },
  {
    id: 'g10-his-s5e',
    questionId: 'g10-his-q5e',
    recognition: 'Kiến trúc Kim tự tháp Ai Cập cổ đại.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định công trình kiến trúc Ai Cập',
        explanation: 'Các Kim tự tháp (tiêu biểu là Kê-ốp) là lăng mộ khổng lồ của các Pharaoh, thể hiện quyền lực thần thánh và kỹ thuật xây dựng phi thường.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Kim tự tháp Ai Cập với Vườn treo Babylon của Lưỡng Hà'],
    reviewSuggestions: ['Bài 4: Kiến trúc văn minh Ai Cập cổ đại']
  },
  {
    id: 'g10-his-s5f',
    questionId: 'g10-his-q5f',
    recognition: 'Thành tựu Sử học Trung Hoa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định bộ Sử ký Tư Mã Thiên',
        explanation: 'Bộ "Sử ký" của Tư Mã Thiên thời Hán là kiệt tác sử học đặt nền móng cho thể loại lịch sử kỷ truyện ở phương Đông.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Sử ký với tiểu thuyết chương hồi như Tam Quốc hay Tây Du Ký'],
    reviewSuggestions: ['Bài 4: Thành tựu Sử học Trung Hoa']
  },
  {
    id: 'g10-his-s7',
    questionId: 'g10-his-q7',
    recognition: 'Phát minh chữ số 0 của Ấn Độ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định nguồn gốc chữ số 0',
        explanation: 'Người Ấn Độ thời cổ đại đã phát minh ra hệ chữ số từ 0 đến 9, đóng góp cực kỳ to lớn cho toán học.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nghĩ chữ số 0 do người Ả Rập sáng tạo ra (Ả Rập chỉ có công truyền bá)'],
    reviewSuggestions: ['Xem lại bài 5: Thành tựu toán học Ấn Độ']
  },
  {
    id: 'g10-his-s8',
    questionId: 'g10-his-q8',
    recognition: 'Đấu trường Colosseum La Mã.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định công trình kiến trúc',
        explanation: 'Đấu trường Colosseum ở Roma là biểu tượng kiến trúc vĩ đại của La Mã cổ đại.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm Đền Parthenon ở Hy Lạp với Colosseum ở La Mã'],
    reviewSuggestions: ['Xem lại bài 6: Văn minh phương Tây cổ đại']
  },
  {
    id: 'g10-his-s6b',
    questionId: 'g10-his-q6b',
    recognition: 'Điều kiện địa lý văn minh Hy Lạp - La Mã cổ đại.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích điều kiện hải cảng Nam Âu',
        explanation: 'Bờ biển dài và nhiều vịnh biển kín gió tự nhiên đã thúc đẩy Hy Lạp và La Mã phát triển rực rỡ thương nghiệp hải hải và thủ công nghiệp.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm với điều kiện sông ngòi làm lúa nước của phương Đông'],
    reviewSuggestions: ['Bài 6: Cơ sở hình thành văn minh Hy Lạp - La Mã']
  },
  {
    id: 'g10-his-s6c',
    questionId: 'g10-his-q6c',
    recognition: 'Bảng chữ cái Latinh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định nguồn gốc chữ Latinh',
        explanation: 'Người Hy Lạp và La Mã cổ đại đã sáng tạo ra bảng chữ cái Latinh (A, B, C...) — nền tảng chữ viết của nhiều quốc gia hiện đại bao gồm cả chữ Quốc ngữ.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm chữ Latinh với chữ tượng hình Ai Cập hay chữ Nêm'],
    reviewSuggestions: ['Bài 6: Thành tựu chữ viết Hy Lạp - La Mã']
  },
  {
    id: 'g10-his-s6d',
    questionId: 'g10-his-q6d',
    recognition: 'Người cha của Sử học thế giới Herodotus.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định danh xưng của Herodotus',
        explanation: 'Hê-rô-đốt (Herodotus) với bộ tác phẩm "Lịch sử cuộc chiến tranh Hy Lạp - Ba Tư" được tôn vinh là Người cha của Sử học thế giới.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm Herodotus với các nhà toán học như Euclid hay Archimedes'],
    reviewSuggestions: ['Bài 6: Thành tựu khoa học Hy Lạp cổ đại']
  },
  {
    id: 'g10-his-s6e',
    questionId: 'g10-his-q6e',
    recognition: 'Bản chất phong trào Văn hóa Phục hưng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích bản chất giai cấp và tư tưởng Phục hưng',
        explanation: 'Phong trào Văn hóa Phục hưng là cuộc đấu tranh tư tưởng của giai cấp tư sản mới ra đời, đề cao Chủ nghĩa Nhân văn và khoa học duy vật, tấn công Giáo hội phong kiến.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ phong trào Phục hưng nhằm củng cố trật tự phong kiến'],
    reviewSuggestions: ['Bài 6: Văn minh Tây Âu thời kỳ Phục hưng']
  },
  {
    id: 'g10-his-s6f',
    questionId: 'g10-his-q6f',
    recognition: 'Thuyết Nhật tâm của Copernicus và Galileo.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích đóng góp của Thuyết Nhật tâm',
        explanation: 'Copernicus và Galileo khẳng định Mặt Trời là trung tâm hệ hành tinh (Thuyết Nhật tâm), đánh gục Thuyết Địa tâm sai lầm của Giáo hội.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Thuyết Nhật tâm với Thuyết Địa tâm của Giáo hội'],
    reviewSuggestions: ['Bài 6: Thành tựu thiên văn học thời Phục hưng']
  },
  {
    id: 'g10-his-s9',
    questionId: 'g10-his-q9',
    recognition: 'Động cơ hơi nước James Watt.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mốc phát minh Cách mạng 1.0',
        explanation: 'Máy hơi nước do James Watt cải tiến (1784) đã mở đầu kỷ nguyên máy móc cho Cách mạng công nghiệp lần 1.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm sang năng lượng điện của Cách mạng lần 2'],
    reviewSuggestions: ['Xem lại bài 7: Các cuộc cách mạng công nghiệp thời cận đại']
  },
  {
    id: 'g10-his-s7b',
    questionId: 'g10-his-q7b',
    recognition: 'Ngành khởi phát Cách mạng công nghiệp 1.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định ngành dệt ở Anh',
        explanation: 'Cách mạng công nghiệp 1.0 ở Anh bắt đầu từ ngành công nghiệp nhẹ (ngành Dệt) với phát minh con thoi bay và máy kéo sợi Jenny.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm ngành dệt với khai thác than đá hay giao thông đường sắt'],
    reviewSuggestions: ['Bài 7: Thành tựu Cách mạng công nghiệp lần 1']
  },
  {
    id: 'g10-his-s7c',
    questionId: 'g10-his-q7c',
    recognition: 'Ý nghĩa máy hơi nước James Watt.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nguồn động lực mới',
        explanation: 'Máy hơi nước cung cấp sức kéo máy móc độc lập với thiên nhiên, cho phép đặt nhà máy tại các đô thị và đẩy nhanh quá trình cơ khí hóa.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ máy hơi nước giúp chế tạo tàu vũ trụ'],
    reviewSuggestions: ['Bài 7: Động cơ hơi nước và chuyển biến sản xuất']
  },
  {
    id: 'g10-his-s7d',
    questionId: 'g10-his-q7d',
    recognition: 'Thành tựu năng lượng điện Cách mạng 2.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định nguồn năng lượng trung tâm của Cách mạng 2.0',
        explanation: 'Việc phát minh ra máy phát điện và ứng dụng rộng rãi Điện năng là thành tựu cốt lõi của cuộc Cách mạng công nghiệp lần thứ 2.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm điện năng với năng lượng hơi nước của Cách mạng 1.0'],
    reviewSuggestions: ['Bài 7: Năng lượng điện trong Cách mạng 2.0']
  },
  {
    id: 'g10-his-s7e',
    questionId: 'g10-his-q7e',
    recognition: 'Trung tâm dẫn đầu Cách mạng công nghiệp 2.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định Mỹ và Đức',
        explanation: 'Mỹ và Đức với ứng dụng mạnh mẽ khoa học vào công nghiệp đã nhanh chóng vượt qua Anh để dẫn đầu cuộc Cách mạng công nghiệp lần thứ 2.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Mỹ và Đức với Anh và Pháp (dẫn đầu thời lần 1)'],
    reviewSuggestions: ['Bài 7: Các trung tâm công nghiệp cận đại']
  },
  {
    id: 'g10-his-s7f',
    questionId: 'g10-his-q7f',
    recognition: 'Tác động giai cấp của Cách mạng công nghiệp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích hai giai cấp cơ bản',
        explanation: 'Cách mạng công nghiệp cận đại hình thành hai giai cấp đối kháng trong xã hội tư bản: Tư sản công nghiệp (nắm tư liệu sản xuất) và Vô sản (làm thuê).'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm giai cấp tư sản - vô sản với lãnh chúa - nông nô phong kiến'],
    reviewSuggestions: ['Bài 7: Tác động xã hội của Cách mạng công nghiệp']
  },
  {
    id: 'g10-his-s10',
    questionId: 'g10-his-q10',
    recognition: 'Đặc trưng Cách mạng 4.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích trụ cột Cách mạng 4.0',
        explanation: 'Cách mạng 4.0 dựa trên Trí tuệ nhân tạo (AI), Internet vạn vật (IoT) và Dữ liệu lớn (Big Data).'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn với tự động hóa máy tính truyền thống của Cách mạng 3.0'],
    reviewSuggestions: ['Xem lại bài 8: Các cuộc cách mạng công nghiệp thời hiện đại']
  },
  {
    id: 'g10-his-s8b',
    questionId: 'g10-his-q8b',
    recognition: 'Thành tựu máy tính điện tử trong Cách mạng 3.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mốc máy tính điện tử',
        explanation: 'Sự ra đời của máy tính điện tử (ENIAC 1946) và sự phát triển của máy tính cá nhân là thành tựu then chốt mở đầu cho kỷ nguyên số hóa.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm máy tính điện tử với động cơ đốt trong hay công nghệ in 3D'],
    reviewSuggestions: ['Bài 8: Cách mạng công nghiệp lần thứ ba']
  },
  {
    id: 'g10-his-s8c',
    questionId: 'g10-his-q8c',
    recognition: 'Tác động của mạng Internet toàn cầu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích vai trò kết nối thông tin của Internet',
        explanation: 'Internet giúp số hóa, kết nối và chia sẻ toàn bộ khối lượng tri thức nhân loại vượt qua ranh giới địa lý theo thời gian thực.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ Internet khiến con người quay lại thời kỳ nông nghiệp'],
    reviewSuggestions: ['Bài 8: Mạng Internet và công nghệ thông tin']
  },
  {
    id: 'g10-his-s8d',
    questionId: 'g10-his-q8d',
    recognition: 'Bản chất đột phá của Cách mạng 4.0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích sự hợp nhất 3 không gian công nghệ',
        explanation: 'Cách mạng 4.0 tạo sự khác biệt ở khả năng hợp nhất các công nghệ làm mờ ranh giới giữa vật lý (robot, xe tự lái), kỹ thuật số (AI, Big Data) và sinh học (gen).'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ 4.0 chỉ là mở rộng của công nghiệp nặng truyền thống'],
    reviewSuggestions: ['Bài 8: Bản chất Cách mạng công nghiệp lần thứ tư']
  },
  {
    id: 'g10-his-s8e',
    questionId: 'g10-his-q8e',
    recognition: 'Liên Xô phóng vệ tinh nhân tạo Sputnik 1.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định sự kiện mở đầu kỷ nguyên vũ trụ',
        explanation: 'Năm 1957, Liên Xô phóng thành công Sputnik 1 — vệ tinh nhân tạo đầu tiên của loài người bay vào không gian vũ trụ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Liên Xô với Mỹ trong sự kiện phóng vệ tinh đầu tiên'],
    reviewSuggestions: ['Bài 8: Chinh phục không gian vũ trụ']
  },
  {
    id: 'g10-his-s8f',
    questionId: 'g10-his-q8f',
    recognition: 'Chuyển dịch sang Kinh tế tri thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mô hình Kinh tế tri thức',
        explanation: 'Các cuộc cách mạng 3.0 và 4.0 thúc đẩy mạnh mẽ quá trình chuyển dịch nền kinh tế từ dựa vào cơ khí sang dựa trên tri thức, thông tin và công nghệ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Kinh tế tri thức với nền kinh tế tự cung tự cấp'],
    reviewSuggestions: ['Bài 8: Tác động kinh tế của Cách mạng hiện đại']
  },
  {
    id: 'g10-his-s11',
    questionId: 'g10-his-q11',
    recognition: 'Kinh tế nông nghiệp lúa nước ĐNÁ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nền tảng sinh sống',
        explanation: 'Khí hậu nhiệt đới gió mùa và hệ thống sông lớn tạo điều kiện cho cư dân ĐNÁ phát triển nông nghiệp lúa nước.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm với kinh tế du mục trên thảo nguyên'],
    reviewSuggestions: ['Xem lại bài 9: Cơ sở hình thành văn minh ĐNÁ']
  },
  {
    id: 'g10-his-s9b',
    questionId: 'g10-his-q9b',
    recognition: 'Vị trí Ngã tư đường của Đông Nam Á.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích vị trí cầu nối hải cảng',
        explanation: 'Đông Nam Á là ngã tư đường kết nối giữa hai đại dương (Thái Bình Dương - Ấn Độ Dương) và hai nền văn minh lớn (Ấn Độ - Trung Hoa).'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm địa lý ĐNÁ với Châu Úc hay Châu Âu'],
    reviewSuggestions: ['Bài 9: Vị trí địa lý và môi trường tự nhiên ĐNÁ']
  },
  {
    id: 'g10-his-s9c',
    questionId: 'g10-his-q9c',
    recognition: 'Tín ngưỡng phồn thực nông nghiệp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích bản chất tín ngưỡng phồn thực',
        explanation: 'Tín ngưỡng phồn thực thờ sinh thực khí và Nữ thần Mẹ/Nữ thần Lúa thể hiện ước vọng nhân bản về sự sinh sôi nảy nở của con người và mùa màng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm tín ngưỡng phồn thực với Kitô giáo hay Đạo giáo'],
    reviewSuggestions: ['Bài 9: Tín ngưỡng bản địa Đông Nam Á']
  },
  {
    id: 'g10-his-s9d',
    questionId: 'g10-his-q9d',
    recognition: 'Công xã nông thôn (Làng) ở ĐNÁ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vai trò của Làng/Bản/Phum/Sóc',
        explanation: 'Làng là công xã nông thôn bền vững nhất giúp kết nối cư dân làm thủy lợi, đê điều chống lũ và phòng thủ đất nước.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm làng xã với điền trang phong kiến châu Âu'],
    reviewSuggestions: ['Bài 9: Cơ cấu xã hội làng xã Đông Nam Á']
  },
  {
    id: 'g10-his-s9e',
    questionId: 'g10-his-q9e',
    recognition: 'Đông Nam Á hóa tôn giáo ngoại nhập.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích phương thức tiếp biến tôn giáo',
        explanation: 'Cư dân ĐNÁ tiếp thu có chọn lọc các tôn giáo Ấn Độ, Trung Hoa, Hồi giáo và hòa quyện với tín ngưỡng bản địa để tạo nên bản sắc riêng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng ĐNÁ sao chép 100% nguyên mẫu tôn giáo ngoại nhập'],
    reviewSuggestions: ['Bài 9: Sự tiếp biến văn hóa tôn giáo']
  },
  {
    id: 'g10-his-s9f',
    questionId: 'g10-his-q9f',
    recognition: 'Sự truyền bá Hồi giáo tại ĐNÁ hải đảo.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tôn giáo Hồi giáo',
        explanation: 'Hồi giáo được thương nhân Ấn Độ và Ả Rập truyền bá vào ĐNÁ từ thế kỷ XIII và nhanh chóng thành tôn giáo chủ đạo ở Indonesia, Malaysia, Brunei.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Hồi giáo với Nho giáo hay Ấn Độ giáo'],
    reviewSuggestions: ['Bài 9: Hồi giáo tại Đông Nam Á hải đảo']
  },
  {
    id: 'g10-his-s12',
    questionId: 'g10-his-q12',
    recognition: 'Đền Angkor Wat Campuchia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định quốc gia có Angkor Wat',
        explanation: 'Angkor Wat là quần thể kiến trúc tôn giáo kiệt tác tại Campuchia.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm Angkor Wat với Borobudur ở Indonesia'],
    reviewSuggestions: ['Xem lại bài 10: Thành tựu văn minh Đông Nam Á']
  },
  {
    id: 'g10-his-s10b',
    questionId: 'g10-his-q10b',
    recognition: 'Giai đoạn thịnh vượng của các quốc gia ĐNÁ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định Kỷ nguyên vàng ĐNÁ',
        explanation: 'Từ thế kỷ X đến thế kỷ XV là giai đoạn phát triển thịnh vượng nhất của các quốc gia phong kiến ĐNÁ (Đại Việt, Angkor, Pagan, Sukhothai, Majapahit...).'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm kỷ nguyên thịnh vượng với giai đoạn hình thành đầu công nguyên'],
    reviewSuggestions: ['Bài 10: Hành trình phát triển các quốc gia Đông Nam Á']
  },
  {
    id: 'g10-his-s10c',
    questionId: 'g10-his-q10c',
    recognition: 'Quần thể tháp Borobudur Indonesia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định di tích Borobudur',
        explanation: 'Tháp Borobudur là quần thể kiến trúc Phật giáo đồ sộ bằng đá dạng tháp bậc tầng lớn nhất thế giới tại đảo Java (Indonesia).'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Borobudur với đền Angkor Wat ở Campuchia'],
    reviewSuggestions: ['Bài 10: Kiến trúc Phật giáo Borobudur']
  },
  {
    id: 'g10-his-s10d',
    questionId: 'g10-his-q10d',
    recognition: 'Tháp Thạt Luổng biểu tượng của Lào.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định biểu tượng Thạt Luổng',
        explanation: 'Tháp Thạt Luổng (Pha That Luang) là di tích Phật giáo dát vàng nổi tiếng, là biểu tượng quốc gia hiện diện trên Quốc huy và tiền giấy của Lào.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm Thạt Luổng với Chùa Vàng Shwedagon ở Myanmar'],
    reviewSuggestions: ['Bài 10: Biểu tượng văn hóa Phật giáo Lào']
  },
  {
    id: 'g10-his-s10e',
    questionId: 'g10-his-q10e',
    recognition: 'Sử thi Ramakien Thái Lan.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tên tác phẩm Ramakien',
        explanation: 'Sử thi Ramayana của Ấn Độ khi truyền bá vào Thái Lan đã được người Thái sáng tạo và phóng tác thành kiệt tác Ramakien.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Ramakien với Reamker (của Campuchia)'],
    reviewSuggestions: ['Bài 10: Thành tựu văn học Đông Nam Á']
  },
  {
    id: 'g10-his-s10f',
    questionId: 'g10-his-q10f',
    recognition: 'Ảnh hưởng Phật giáo và Ấn Độ giáo.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ảnh hưởng hai tôn giáo Ấn Độ',
        explanation: 'Phật giáo và Ấn Độ giáo (Hindu giáo) là hai tôn giáo từ Ấn Độ chi phối toàn bộ phong cách kiến trúc đền tháp và điêu khắc ở Đông Nam Á cổ - trung đại.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm ảnh hưởng Phật giáo - Hindu giáo với Nho giáo - Đạo giáo'],
    reviewSuggestions: ['Bài 10: Ảnh hưởng tôn giáo đến kiến trúc Đông Nam Á']
  },
  {
    id: 'g10-his-s13',
    questionId: 'g10-his-q13',
    recognition: 'Trống đồng Đông Sơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hiện vật tiêu biểu Văn Lang - Âu Lạc',
        explanation: 'Trống đồng Đông Sơn đại diện cho trình độ đúc đồng đỉnh cao và tâm hồn người Việt cổ thời Văn Lang - Âu Lạc.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm hiện vật của văn minh Chăm-pa hay Phù Nam'],
    reviewSuggestions: ['Xem lại bài 11: Văn minh Văn Lang - Âu Lạc']
  },
  {
    id: 'g10-his-s11b',
    questionId: 'g10-his-q11b',
    recognition: 'Văn hóa Đông Sơn tiền thân Văn Lang - Âu Lạc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định văn hóa Đông Sơn',
        explanation: 'Văn hóa Đông Sơn là giai đoạn phát triển đỉnh cao của thời đại đồ đồng ở Bắc Bộ, tiền thân trực tiếp sáng tạo nên nền Văn minh Văn Lang - Âu Lạc.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm Văn hóa Đông Sơn ở Bắc Bộ với Sa Huỳnh ở Nam Trung Bộ'],
    reviewSuggestions: ['Bài 11: Nền tảng văn hóa Đông Sơn']
  },
  {
    id: 'g10-his-s11c',
    questionId: 'g10-his-q11c',
    recognition: 'Văn hóa Sa Huỳnh tiền thân Văn minh Chăm-pa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định văn hóa Sa Huỳnh',
        explanation: 'Văn hóa Sa Huỳnh (Nam Trung Bộ) nổi tiếng với tục táng mộ chum và trang sức thủy tinh, là cơ sở tiền thân trực tiếp hình thành Văn minh Chăm-pa.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm Sa Huỳnh với Đông Sơn hay Óc Eo'],
    reviewSuggestions: ['Bài 11: Nền tảng văn hóa Sa Huỳnh']
  },
  {
    id: 'g10-his-s11d',
    questionId: 'g10-his-q11d',
    recognition: 'Thánh địa Mỹ Sơn Chăm-pa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định di tích Mỹ Sơn',
        explanation: 'Thánh địa Mỹ Sơn (Quảng Nam) là trung tâm đền tháp tôn giáo Ấn Độ giáo tuyệt mỹ của Vương quốc Chăm-pa.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm Thánh địa Mỹ Sơn với Cổ Loa hay Óc Eo'],
    reviewSuggestions: ['Bài 11: Thành tựu kiến trúc Văn minh Chăm-pa']
  },
  {
    id: 'g10-his-s11e',
    questionId: 'g10-his-q11e',
    recognition: 'Thương cảng quốc tế Óc Eo Phù Nam.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định khu di tích Óc Eo',
        explanation: 'Khu di tích Óc Eo (An Giang) là thương cảng sầm uất bậc nhất của Phù Nam, giao thương với cả Ấn Độ, La Mã và Trung Quốc.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm thương cảng Óc Eo cổ đại với Hội An thời phong kiến'],
    reviewSuggestions: ['Bài 11: Kinh tế thương nghiệp Văn minh Phù Nam']
  },
  {
    id: 'g10-his-s11f',
    questionId: 'g10-his-q11f',
    recognition: 'Nhà sàn sông nước Phù Nam.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định kiểu nhà sàn Phù Nam',
        explanation: 'Nhà sàn dựng trên cột gỗ ven sông hoặc ven kênh rạch là nét kiến trúc nhà ở đặc trưng thích ứng môi trường ngập mặn của cư dân Phù Nam.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nhà sàn sông nước với nhà đất trình tường miền núi'],
    reviewSuggestions: ['Bài 11: Đời sống vật chất Văn minh Phù Nam']
  },
  {
    id: 'g10-his-s14',
    questionId: 'g10-his-q14',
    recognition: 'Văn Miếu thành lập năm 1070.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mốc lịch sử xây dựng Văn Miếu',
        explanation: 'Văn Miếu được Vua Lý Thánh Tông cho xây dựng vào năm 1070 dưới thời Triều Lý.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm sang thời Lê Sơ hoặc thời Trần'],
    reviewSuggestions: ['Xem lại bài 12: Văn minh Đại Việt - Giáo dục']
  },
  {
    id: 'g10-his-s12b',
    questionId: 'g10-his-q12b',
    recognition: 'Tư tưởng Tam giáo đồng nguyên thời Lý - Trần.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích bản chất Tam giáo đồng nguyên',
        explanation: 'Thời Lý - Trần, Nho giáo, Phật giáo và Đạo giáo hòa hợp cùng phát triển, trong đó Phật giáo phát triển mạnh mẽ và có ảnh hưởng sâu rộng nhất.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm thời Lý - Trần với Nho giáo độc tôn thời Lê Sơ'],
    reviewSuggestions: ['Bài 12: Tư tưởng và tôn giáo thời Lý - Trần']
  },
  {
    id: 'g10-his-s12c',
    questionId: 'g10-his-q12c',
    recognition: 'Nho giáo độc tôn thời Lê Sơ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thời kỳ Nho giáo độc tôn',
        explanation: 'Dưới thời Vua Lê Thánh Tông (thời Lê Sơ thế kỷ XV), Nho giáo được đưa lên giữ vị trí độc tôn trong quản lý nhà nước, giáo dục và thi cử.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm Nho giáo độc tôn thời Lê Sơ với thời Lý hay Trần'],
    reviewSuggestions: ['Bài 12: Nho giáo và giáo dục thời Lê Sơ']
  },
  {
    id: 'g10-his-s12d',
    questionId: 'g10-his-q12d',
    recognition: 'Thân Nhân Trung và câu nói Hiền tài là nguyên khí.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tác giả câu nói khắc bia Tiến sĩ',
        explanation: 'Năm 1484, Thân Nhân Trung soạn bài văn bia Văn Miếu với câu nói bất hủ: "Hiền tài là nguyên khí của quốc gia".'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Thân Nhân Trung với Nguyễn Trãi hay Lê Văn Hưu'],
    reviewSuggestions: ['Bài 12: Tôn vinh đạo học và bia Tiến sĩ']
  },
  {
    id: 'g10-his-s12e',
    questionId: 'g10-his-q12e',
    recognition: 'Bộ luật Hình thư thời Lý.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định bộ luật bằng văn bản đầu tiên',
        explanation: 'Bộ luật Hình thư ban hành năm 1042 dưới thời Vua Lý Thái Tông là bộ luật bằng văn bản đầu tiên của nước ta.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Luật Hình thư thời Lý với Luật Hồng Đức thời Lê Sơ'],
    reviewSuggestions: ['Bài 12: Bộ luật thành văn đầu tiên của Đại Việt']
  },
  {
    id: 'g10-his-s12f',
    questionId: 'g10-his-q12f',
    recognition: 'Bộ Đại Việt sử ký của Lê Văn Hưu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tác phẩm sử học thời Trần',
        explanation: 'Năm 1272, Lê Văn Hưu hoàn thành bộ "Đại Việt sử ký" (30 quyển) — bộ chính sử đầu tiên ghi chép lịch sử Việt Nam.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Đại Việt sử ký của Lê Văn Hưu với Đại Việt sử ký toàn thư của Ngô Sĩ Liên'],
    reviewSuggestions: ['Bài 12: Sử học thời Trần - Đại Việt sử ký']
  },
  {
    id: 'g10-his-s15',
    questionId: 'g10-his-q15',
    recognition: 'Cồng chiêng Tây Nguyên.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định di sản Tây Nguyên',
        explanation: 'Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO vinh danh năm 2005.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm với Nhã nhạc cung đình Huế hay Dân ca Quan họ'],
    reviewSuggestions: ['Xem lại bài 13: Đời sống văn hóa dân tộc']
  },
  {
    id: 'g10-his-s13b',
    questionId: 'g10-his-q13b',
    recognition: 'Nghệ thuật Xòe Thái Tây Bắc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định di sản múa Xòe Thái',
        explanation: 'Nghệ thuật Xòe Thái (Tây Bắc) biểu trưng cho tình đoàn kết gắn bó cộng đồng đã được UNESCO ghi danh là Di sản văn hóa phi vật thể nhân loại năm 2021.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm múa Xòe Thái với múa sạp hay múa khèn H\'Mông'],
    reviewSuggestions: ['Bài 13: Nghệ thuật múa dân gian dân tộc']
  },
  {
    id: 'g10-his-s13c',
    questionId: 'g10-his-q13c',
    recognition: 'Nhà Rông ở buôn làng Tây Nguyên.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định công trình Nhà Rông',
        explanation: 'Nhà Rông là công trình nhà ở cộng đồng cao nhất nằm ở vị trí trung tâm buôn làng Tây Nguyên (người Ba Na, Xơ Đăng...).'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Nhà Rông với Nhà Trình tường miền núi phía Bắc'],
    reviewSuggestions: ['Bài 13: Kiến trúc nhà ở các dân tộc Tây Nguyên']
  },
  {
    id: 'g10-his-s13d',
    questionId: 'g10-his-q13d',
    recognition: 'Nghệ thuật thêu dệt thổ cẩm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nghệ thuật dệt thổ cẩm',
        explanation: 'Kỹ thuật thêu dệt thổ cẩm nhiều sắc màu với hoa văn độc đáo là nét đặc trưng văn hóa mặc tiêu biểu của đa số dân tộc thiểu số miền núi.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm thổ cẩm với lụa tơ tằm cổ điển'],
    reviewSuggestions: ['Bài 13: Trang phục truyền thống dân tộc']
  },
  {
    id: 'g10-his-s13e',
    questionId: 'g10-his-q13e',
    recognition: 'Lễ hội Ok Om Bok của người Khmer.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định Lễ hội Ok Om Bok',
        explanation: 'Lễ hội Ok Om Bok (Lễ Cúng Trăng) diễn ra vào rằm tháng 10 âm lịch là lễ hội cầu mùa và tạ ơn lớn nhất của đồng bào Khmer Nam Bộ.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Ok Om Bok với Tết Chôl Chnăm Thmây'],
    reviewSuggestions: ['Bài 13: Lễ hội truyền thống các dân tộc']
  },
  {
    id: 'g10-his-s13f',
    questionId: 'g10-his-q13f',
    recognition: 'Nhà Trình tường vùng núi cao phía Bắc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định kiểu Nhà Trình tường',
        explanation: 'Nhà Trình tường đắp bằng đất nện dày là lối kiến trúc nhà ở độc đáo thích ứng với khí hậu khắc nghiệt vùng núi cao của người H\'Mông, Hà Nhì.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Nhà Trình tường với nhà sàn ven sông'],
    reviewSuggestions: ['Bài 13: Kiến trúc nhà ở vùng núi cao']
  },
  {
    id: 'g10-his-s16',
    questionId: 'g10-his-q16',
    recognition: 'Sức mạnh đại đoàn kết dân tộc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nhân tố quyết định thắng lợi',
        explanation: 'Khối đại đoàn kết toàn dân tộc chính là nguồn sức mạnh vô địch giúp Việt Nam giữ vững nền độc lập qua hàng ngàn năm.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng vũ khí hay hỗ trợ bên ngoài quyết định hoàn toàn'],
    reviewSuggestions: ['Xem lại bài 14: Khối đại đoàn kết dân tộc']
  },
  {
    id: 'g10-his-s14b',
    questionId: 'g10-his-q14b',
    recognition: 'Nhu cầu trị thủy và chống ngoại xâm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích hai yêu cầu lịch sử khởi nguồn đại đoàn kết',
        explanation: 'Khối đại đoàn kết dân tộc hình thành sớm xuất phát từ hai yêu cầu khách quan: Trị thủy/chinh phục tự nhiên để sinh tồn và Chống ngoại xâm để bảo vệ độc lập.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm yêu cầu trị thủy - chống ngoại xâm với nhu cầu giao thương du lịch'],
    reviewSuggestions: ['Bài 14: Cơ sở hình thành khối đại đoàn kết']
  },
  {
    id: 'g10-his-s14c',
    questionId: 'g10-his-q14c',
    recognition: 'Chính sách Nhu viễn thời phong kiến.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích chính sách đoàn kết tộc người thời phong kiến',
        explanation: 'Các vua Lý, Trần, Lê áp dụng chính sách "Nhu viễn" mềm mỏng, gả công chúa, phong chức tước cho các tù trưởng miền núi để thắt chặt quan hệ đoàn kết.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nghĩ triều đình phong kiến cưỡng chế xua đuổi đồng bào miền núi'],
    reviewSuggestions: ['Bài 14: Chính sách đoàn kết dân tộc thời phong kiến']
  },
  {
    id: 'g10-his-s14d',
    questionId: 'g10-his-q14d',
    recognition: 'Hội Phản đế đồng minh thành lập 18/11/1930.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hình thức Mặt trận đầu tiên',
        explanation: 'Ngày 18/11/1930, Đảng thành lập Hội Phản đế đồng minh — hình thức Mặt trận Dân tộc Thống nhất đầu tiên ở Việt Nam.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm Hội Phản đế đồng minh với Mặt trận Việt Minh năm 1941'],
    reviewSuggestions: ['Bài 14: Sự ra đời của Mặt trận Dân tộc Thống nhất']
  },
  {
    id: 'g10-his-s14e',
    questionId: 'g10-his-q14e',
    recognition: 'Mặt trận Việt Minh năm 1941.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vai trò Mặt trận Việt Minh',
        explanation: 'Mặt trận Việt Minh (thành lập 1941) đã quy tụ sức mạnh toàn dân tộc làm nên thắng lợi vĩ đại của Cách mạng tháng Tám năm 1945.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm Mặt trận Việt Minh với Mặt trận Tổ quốc Việt Nam sau này'],
    reviewSuggestions: ['Bài 14: Vai trò của Mặt trận Việt Minh']
  },
  {
    id: 'g10-his-s14f',
    questionId: 'g10-his-q14f',
    recognition: 'Nguyên tắc Chính sách Dân tộc hiện nay.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định ba nguyên tắc cốt lõi',
        explanation: 'Chính sách dân tộc của Đảng và Nhà nước Việt Nam quán triệt 3 nguyên tắc: Đoàn kết, Bình đẳng, Tương trợ giúp đỡ nhau cùng phát triển.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm 3 nguyên tắc dân tộc với Tự do - Bình đẳng - Bác ái của Pháp'],
    reviewSuggestions: ['Bài 14: Chính sách dân tộc của Đảng và Nhà nước']
  }
];

const finalAnswerByQuestionId = new Map(
  g10HistoryQuestions.map(question => [question.id, question.correctAnswer])
);

export const g10HistorySolutions: Solution[] = [
  ...legacyHistorySolutions.map(solution => ({
    ...solution,
    courseId: 'grade10:history',
    finalAnswer: finalAnswerByQuestionId.get(solution.questionId) ?? solution.finalAnswer
  })),
  ...g10HistoryExpansionSolutions
];
