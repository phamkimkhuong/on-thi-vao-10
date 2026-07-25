import { QuestionType } from '@/types';
import {
  bio10Qt32Theory,
  bio10Qt5Theory,
  bio10Qt33Theory,
  bio10Qt34Theory,
  bio10Qt35Theory
} from './theory';

export const g10BiologyModule4QuestionTypes: QuestionType[] = [
  {
    id: 'bio10-qt32', topicId: 'bio10-t4', name: 'Năng lượng, ATP và ghép cặp phản ứng', slug: 'nang-luong-atp',
    description: 'Phân tích cấu tạo, chu trình ATP–ADP và vai trò ghép phản ứng giải phóng năng lượng với công tế bào.',
    exampleQuestionId: 'bio10-m4-q001',
    theory: bio10Qt32Theory,
    recognitionSigns: ['Đề nhắc ATP, ADP, phosphate, thủy phân, phosphoryl hóa hoặc công cơ học–vận chuyển–hóa học.', 'Yêu cầu phân biệt chất mang năng lượng ngắn hạn với chất dự trữ lâu dài.'],
    solvingSteps: ['Xác định phản ứng đang giải phóng hay cần năng lượng.', 'Theo dõi ATP → ADP + Pi hoặc chiều tái tạo ATP.', 'Giải thích cách ghép cặp năng lượng và tránh mô tả ATP như kho dự trữ lâu dài.'],
    commonMistakes: ['Cho rằng ATP dự trữ năng lượng lâu dài, năng lượng nằm riêng trong một liên kết hoặc thủy phân ATP tự động thực hiện mọi công.'],
    difficulty: 'easy', examFrequency: 'high'
  },
  {
    id: 'bio10-qt5', topicId: 'bio10-t4', name: 'Cơ chế và các yếu tố ảnh hưởng enzyme', slug: 'co-che-yeu-to-enzyme',
    description: 'Giải thích tính đặc hiệu, năng lượng hoạt hóa và đọc đồ thị hoạt tính theo nhiệt độ, pH, nồng độ, chất ức chế.',
    exampleQuestionId: 'bio10-q5',
    theory: bio10Qt5Theory,
    recognitionSigns: ['Đề mô tả phức hợp enzyme–cơ chất, trung tâm hoạt động hoặc năng lượng hoạt hóa.', 'Đề cung cấp bảng/đồ thị tốc độ theo nhiệt độ, pH, nồng độ cơ chất/enzyme hay chất ức chế.'],
    solvingSteps: ['Xác định biến độc lập, biến phụ thuộc và vùng điều kiện đang khảo sát.', 'Đọc xu hướng dữ liệu trước khi gắn với va chạm, bão hòa hoặc biến đổi cấu trúc enzyme.', 'Kiểm tra tính đặc hiệu và nhớ enzyme không làm đổi cân bằng hay bị tiêu hao sau mỗi chu kì.'],
    commonMistakes: ['Kết luận tăng nhiệt độ luôn tăng hoạt tính; cho rằng enzyme cung cấp năng lượng hoặc bị dùng hết.'],
    difficulty: 'easy', examFrequency: 'high'
  },
  {
    id: 'bio10-qt33', topicId: 'bio10-t4', name: 'Thực hành hoạt tính enzyme', slug: 'thuc-hanh-enzyme',
    description: 'Thiết kế và phân tích thí nghiệm amylase, catalase; xác định biến, đối chứng, chỉ thị, sai số và kết luận.',
    exampleQuestionId: 'bio10-m4-q024',
    theory: bio10Qt33Theory,
    recognitionSigns: ['Đề có ống nghiệm, thời gian phản ứng, iodine, bọt khí hoặc các mức nhiệt độ/pH.', 'Yêu cầu chọn đối chứng, giữ biến, đọc kết quả và đánh giá độ tin cậy.'],
    solvingSteps: ['Viết câu hỏi nghiên cứu và xác định biến độc lập/phụ thuộc.', 'Giữ các biến còn lại giống nhau và chọn đối chứng phù hợp.', 'Liên hệ tín hiệu đo được với lượng cơ chất/sản phẩm rồi kết luận trong phạm vi dữ liệu.'],
    commonMistakes: ['Đồng nhất ít cơ chất còn lại với hoạt tính thấp; không có đối chứng; thay đổi nhiều yếu tố cùng lúc.'],
    difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt34', topicId: 'bio10-t4', name: 'Tổng hợp chất và tích lũy năng lượng', slug: 'tong-hop-chat',
    description: 'Phân tích đồng hóa, quang hợp, hóa tổng hợp và quang khử ở mức khái quát.',
    exampleQuestionId: 'bio10-m4-q036',
    theory: bio10Qt34Theory,
    recognitionSigns: ['Đề mô tả tạo phân tử phức tạp từ chất đơn giản và cần năng lượng.', 'Xuất hiện nguồn carbon, nguồn năng lượng ánh sáng/hóa học hoặc sắc tố quang hợp.'],
    solvingSteps: ['Xác định nguồn carbon và nguồn năng lượng.', 'Phân biệt quang hợp giải phóng oxygen, quang khử và hóa tổng hợp.', 'Theo dõi vật chất được tổng hợp và dạng năng lượng được tích lũy.'],
    commonMistakes: ['Cho rằng chỉ thực vật mới tự dưỡng hoặc mọi quá trình dùng ánh sáng đều giải phóng oxygen.'],
    difficulty: 'medium', examFrequency: 'medium'
  },
  {
    id: 'bio10-qt35', topicId: 'bio10-t4', name: 'Hô hấp, lên men và quan hệ chuyển hóa', slug: 'ho-hap-len-men',
    description: 'So sánh phân giải hiếu khí–kị khí, lên men; liên hệ tổng hợp–phân giải và ứng dụng thực tiễn.',
    exampleQuestionId: 'bio10-m4-q048',
    theory: bio10Qt35Theory,
    recognitionSigns: ['Đề cho oxygen, glucose, ATP, CO2, ethanol/lactate hoặc vị trí các giai đoạn hô hấp.', 'Yêu cầu so hiệu suất, giải thích lên men hay kết nối sản phẩm phân giải với nguyên liệu tổng hợp.'],
    solvingSteps: ['Xác định điều kiện có/không oxygen và chất nhận electron cuối cùng ở mức yêu cầu.', 'Theo dõi sản phẩm, vị trí và lượng ATP tương đối của con đường.', 'Đặt con đường trong mạng chuyển hóa: phân giải cung cấp ATP/chất trung gian, tổng hợp sử dụng chúng.'],
    commonMistakes: ['Đồng nhất hô hấp kị khí với lên men; cho rằng lên men không tạo ATP hoặc thực vật không hô hấp.'],
    difficulty: 'hard', examFrequency: 'high'
  }
];
