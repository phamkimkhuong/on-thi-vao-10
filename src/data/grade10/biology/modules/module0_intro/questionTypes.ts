import { QuestionType } from '@/types';
import {
  bio10Qt1Theory,
  bio10Qt9Theory,
  bio10Qt10Theory,
  bio10Qt11Theory,
  bio10Qt12Theory,
  bio10Qt13Theory
} from './theory';

export const g10BiologyModule0QuestionTypes: QuestionType[] = [
  {
    id: 'bio10-qt9',
    topicId: 'bio10-t0',
    name: 'Vai trò, triển vọng và đạo đức sinh học',
    slug: 'vai-tro-trien-vong-dao-duc-sinh-hoc',
    description: 'Nhận diện lĩnh vực sinh học, đánh giá ứng dụng và cân nhắc lợi ích–rủi ro–đạo đức.',
    exampleQuestionId: 'bio10-m0-q004',
    theory: bio10Qt9Theory,
    recognitionSigns: [
      'Đề mô tả một thành tựu, nghề nghiệp hoặc ứng dụng sinh học trong y tế, nông nghiệp hay môi trường.',
      'Đề yêu cầu đánh giá một quyết định có yếu tố lợi ích, rủi ro, quyền riêng tư hoặc công bằng.'
    ],
    solvingSteps: [
      'Xác định vấn đề sinh học và nhóm đối tượng chịu tác động.',
      'Tách riêng bằng chứng khoa học, lợi ích dự kiến, rủi ro và vấn đề đạo đức.',
      'Chọn kết luận cân bằng, có điều kiện kiểm soát và không tuyệt đối hóa công nghệ.'
    ],
    commonMistakes: [
      'Cho rằng công nghệ có lợi thì mặc nhiên không cần đánh giá rủi ro.',
      'Đưa ra phán xét đạo đức nhưng không dựa vào dữ kiện của tình huống.'
    ],
    difficulty: 'medium',
    examFrequency: 'medium'
  },
  {
    id: 'bio10-qt10',
    topicId: 'bio10-t0',
    name: 'Lựa chọn phương pháp nghiên cứu sinh học',
    slug: 'lua-chon-phuong-phap-nghien-cuu-sinh-hoc',
    description: 'Phân biệt quan sát, thực nghiệm, điều tra và lựa chọn phương pháp phù hợp với câu hỏi nghiên cứu.',
    exampleQuestionId: 'bio10-m0-q008',
    theory: bio10Qt10Theory,
    recognitionSigns: [
      'Đề hỏi nên thu thập thông tin bằng quan sát, điều tra hay chủ động thay đổi một yếu tố.',
      'Tình huống nhấn mạnh khả năng can thiệp, so sánh nhóm hoặc ghi nhận hiện tượng tự nhiên.'
    ],
    solvingSteps: [
      'Chuyển mục tiêu thành câu hỏi nghiên cứu cụ thể.',
      'Kiểm tra có cần chủ động tác động một biến hay chỉ ghi nhận/khảo sát hiện trạng.',
      'Chọn phương pháp tạo ra loại bằng chứng phù hợp, đồng thời xét tính an toàn và khả thi.'
    ],
    commonMistakes: [
      'Gọi mọi hoạt động có dụng cụ là thực nghiệm dù không có biến được chủ động thay đổi.',
      'Dùng điều tra ý kiến để kết luận trực tiếp một cơ chế sinh học.'
    ],
    difficulty: 'easy',
    examFrequency: 'medium'
  },
  {
    id: 'bio10-qt11',
    topicId: 'bio10-t0',
    name: 'Thiết kế thí nghiệm và kiểm soát biến',
    slug: 'thiet-ke-thi-nghiem-kiem-soat-bien',
    description: 'Xác định giả thuyết, biến độc lập, biến phụ thuộc, biến kiểm soát và nhóm đối chứng.',
    exampleQuestionId: 'bio10-m0-q012',
    theory: bio10Qt11Theory,
    recognitionSigns: [
      'Đề mô tả việc thay đổi một yếu tố và đo phản ứng của sinh vật hay mẫu vật.',
      'Đề yêu cầu chỉ ra biến, đối chứng, sai sót thiết kế hoặc cách tăng độ tin cậy.'
    ],
    solvingSteps: [
      'Viết quan hệ dự đoán theo mẫu: nếu biến độc lập thay đổi thì biến phụ thuộc thay đổi thế nào.',
      'Xác định duy nhất yếu tố chủ động thay đổi, đại lượng đo và các điều kiện phải giữ giống nhau.',
      'Kiểm tra đối chứng, số lần lặp, cỡ mẫu và cách đo có đủ để so sánh công bằng hay không.'
    ],
    commonMistakes: [
      'Nhầm biến phụ thuộc với đại lượng do người nghiên cứu chủ động đặt.',
      'Thay đổi đồng thời nhiều điều kiện nên không xác định được nguyên nhân.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'bio10-qt12',
    topicId: 'bio10-t0',
    name: 'Đọc dữ liệu và đánh giá kết luận sinh học',
    slug: 'doc-du-lieu-danh-gia-ket-luan-sinh-hoc',
    description: 'Đọc bảng số liệu, phân biệt kết quả với kết luận và xác định mức độ bằng chứng hỗ trợ giả thuyết.',
    exampleQuestionId: 'bio10-m0-q016',
    theory: bio10Qt12Theory,
    recognitionSigns: [
      'Đề cung cấp bảng, biểu đồ, số lần lặp hoặc kết quả của các nhóm thí nghiệm.',
      'Đề hỏi xu hướng, ngoại lệ, kết luận hợp lí hoặc giới hạn của dữ liệu.'
    ],
    solvingSteps: [
      'Đọc tên đại lượng, đơn vị, nhóm so sánh và điều kiện thu dữ liệu trước khi tính toán.',
      'Mô tả đúng xu hướng quan sát được, không thêm cơ chế chưa được kiểm tra.',
      'Đối chiếu với giả thuyết và giới hạn kết luận trong phạm vi mẫu, biến và điều kiện khảo sát.'
    ],
    commonMistakes: [
      'Dùng một kết quả phù hợp để tuyên bố giả thuyết đã được chứng minh tuyệt đối.',
      'Nhầm tương quan quan sát được với quan hệ nhân quả.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'bio10-qt13',
    topicId: 'bio10-t0',
    name: 'Công cụ nghiên cứu và tin sinh học',
    slug: 'cong-cu-nghien-cuu-tin-sinh-hoc',
    description: 'Lựa chọn kính hiển vi, thiết bị hoặc công cụ tin sinh học theo loại dữ liệu cần quan sát và phân tích.',
    exampleQuestionId: 'bio10-m0-q020',
    theory: bio10Qt13Theory,
    recognitionSigns: [
      'Đề hỏi công cụ dùng để quan sát cấu trúc nhỏ, đo đại lượng hoặc xử lí dữ liệu sinh học lớn.',
      'Đề mô tả so sánh trình tự DNA/protein, xây dựng cơ sở dữ liệu hoặc dự đoán cấu trúc.'
    ],
    solvingSteps: [
      'Xác định đối tượng cần khảo sát và loại dữ liệu cần thu: hình ảnh, số đo hay trình tự.',
      'Đối chiếu giới hạn phân giải, chức năng thiết bị và yêu cầu xử lí dữ liệu.',
      'Chọn công cụ trực tiếp tạo hoặc phân tích dữ liệu cần thiết, không chọn theo độ hiện đại đơn thuần.'
    ],
    commonMistakes: [
      'Cho rằng kính hiển vi có độ phóng đại lớn hơn luôn cho ảnh rõ hơn mà bỏ qua độ phân giải.',
      'Đồng nhất tin sinh học với việc chỉ lưu trữ văn bản trên máy tính.'
    ],
    difficulty: 'medium',
    examFrequency: 'medium'
  },
  {
    id: 'bio10-qt1',
    topicId: 'bio10-t0',
    name: 'Các cấp độ tổ chức của thế giới sống',
    slug: 'cac-cap-do-to-chuc-the-gioi-song',
    description: 'Sắp xếp các cấp tổ chức, xác định cấp cơ bản và giải thích đặc tính nổi trội của hệ sống.',
    exampleQuestionId: 'bio10-q1',
    theory: bio10Qt1Theory,
    recognitionSigns: [
      'Đề yêu cầu sắp xếp hoặc xác định cấp tổ chức từ tế bào đến sinh quyển.',
      'Đề hỏi cấp nhỏ nhất biểu hiện đầy đủ đặc trưng sống hoặc đặc tính nổi trội.'
    ],
    solvingSteps: [
      'Xác định đề đang hỏi thứ bậc, đơn vị cơ bản hay đặc tính của một cấp tổ chức.',
      'Đặt đối tượng vào chuỗi: tế bào → cơ thể → quần thể → quần xã → hệ sinh thái → sinh quyển.',
      'Kiểm tra phương án bằng nguyên tắc: cấp cao gồm các cấp thấp tương tác và có thể xuất hiện đặc tính mới.'
    ],
    commonMistakes: [
      'Chọn phân tử hoặc bào quan vì nhỏ hơn tế bào, dù chúng không tự biểu hiện đầy đủ đặc trưng sống.',
      'Đồng nhất quần thể với quần xã và bỏ qua điều kiện cùng loài.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  }
];
