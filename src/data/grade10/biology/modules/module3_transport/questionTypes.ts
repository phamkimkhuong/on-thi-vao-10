import { QuestionType } from '@/types';

export const g10BiologyModule3QuestionTypes: QuestionType[] = [
  {
    id: 'bio10-qt4', topicId: 'bio10-t3', name: 'Khuếch tán, thẩm thấu và tính trương', slug: 'khuech-tan-tham-thau',
    description: 'Xác định chiều vận chuyển thụ động và dự đoán đáp ứng của tế bào trong môi trường ưu–nhược–đẳng trương.',
    exampleQuestionId: 'bio10-q4',
    recognitionSigns: ['Đề cho chênh lệch nồng độ, tính thấm của màng hoặc thay đổi thể tích tế bào.', 'Xuất hiện các từ khóa khuếch tán đơn giản, khuếch tán hỗ trợ, thẩm thấu, ưu trương, nhược trương hoặc đẳng trương.'],
    solvingSteps: ['Khoanh vùng hệ đang xét và xác định chất nào thực sự đi qua màng.', 'So sánh nồng độ hoặc thế nước ở hai phía, đồng thời kiểm tra màng có thấm chất đó không.', 'Suy ra chiều dòng ròng rồi dự đoán thể tích, sức trương hoặc trạng thái co nguyên sinh.'],
    commonMistakes: ['Nhầm chiều nước với chiều chất tan; bỏ qua tính thấm chọn lọc; cho rằng cân bằng động nghĩa là các phân tử ngừng chuyển động.'],
    difficulty: 'easy', examFrequency: 'high'
  },
  {
    id: 'bio10-qt28', topicId: 'bio10-t3', name: 'Vận chuyển chủ động qua màng', slug: 'van-chuyen-chu-dong',
    description: 'Phân biệt vận chuyển chủ động với khuếch tán hỗ trợ; phân tích vai trò gradient, ATP, bơm và đồng vận chuyển.',
    exampleQuestionId: 'bio10-m3-q012',
    recognitionSigns: ['Chất đi ngược gradient hoặc tế bào phải duy trì chênh lệch nồng độ lâu dài.', 'Đề nhắc ATP, bơm ion, protein tải, đồng vận chuyển hay chất ức chế hô hấp.'],
    solvingSteps: ['Xác định chiều gradient điện hóa của chất.', 'Tìm nguồn năng lượng trực tiếp hoặc gián tiếp và protein vận chuyển liên quan.', 'Dự đoán hậu quả khi thiếu ATP, hỏng bơm hoặc mất gradient ghép cặp.'],
    commonMistakes: ['Cho rằng mọi protein vận chuyển đều dùng ATP trực tiếp hoặc mọi chuyển động từ thấp lên cao đều độc lập với điện tích.'],
    difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt29', topicId: 'bio10-t3', name: 'Nhập bào và xuất bào', slug: 'nhap-bao-xuat-bao',
    description: 'Nhận diện thực bào, ẩm bào, nhập bào qua thụ thể và xuất bào; theo dõi đường đi của túi màng.',
    exampleQuestionId: 'bio10-m3-q024',
    recognitionSigns: ['Đối tượng vận chuyển là hạt lớn, đại phân tử hoặc một lượng dịch mà kênh màng không thể chuyển riêng lẻ.', 'Màng lõm vào tạo túi hoặc túi nội bào hòa với màng sinh chất.'],
    solvingSteps: ['Xác định hướng vận chuyển: vào hay ra khỏi tế bào.', 'Kiểm tra tính chọn lọc và kích thước vật chất để phân biệt các kiểu vận chuyển túi.', 'Theo dõi sự biến dạng màng, đích của túi và nhu cầu năng lượng.'],
    commonMistakes: ['Đồng nhất nhập bào với khuếch tán hoặc cho rằng xuất bào làm mất vĩnh viễn toàn bộ diện tích màng.'],
    difficulty: 'medium', examFrequency: 'medium'
  },
  {
    id: 'bio10-qt30', topicId: 'bio10-t3', name: 'Thực hành tính thấm và co nguyên sinh', slug: 'thuc-hanh-tinh-tham-co-nguyen-sinh',
    description: 'Thiết kế, đọc dữ liệu và đánh giá thí nghiệm thẩm thấu, co–phản co nguyên sinh và tính thấm chọn lọc.',
    exampleQuestionId: 'bio10-m3-q036',
    recognitionSigns: ['Đề có tiêu bản biểu bì thực vật, dung dịch nồng độ khác nhau, khối lượng mẫu hoặc tỉ lệ tế bào co nguyên sinh.', 'Yêu cầu xác định biến, đối chứng, sai số, kết luận hoặc cải tiến quy trình.'],
    solvingSteps: ['Xác định câu hỏi nghiên cứu, biến độc lập, biến phụ thuộc và biến kiểm soát.', 'Đọc xu hướng số liệu hoặc mô tả khoảng cách màng–thành tế bào.', 'Kết luận trong giới hạn dữ liệu, kiểm tra khả năng phản co và đề xuất lặp lại/đối chứng.'],
    commonMistakes: ['Dùng một quan sát để kết luận tuyệt đối; nhầm thành tế bào co lại; thay đổi đồng thời nhiều biến.'],
    difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt31', topicId: 'bio10-t3', name: 'Truyền tin tế bào và vận dụng', slug: 'truyen-tin-te-bao-van-dung',
    description: 'Phân tích tiếp nhận–truyền tin–đáp ứng, vị trí thụ thể, khuếch đại tín hiệu và rối loạn truyền tin.',
    exampleQuestionId: 'bio10-m3-q048',
    recognitionSigns: ['Đề có ligand, hormone, thụ thể màng/nội bào, chất truyền tin thứ hai hoặc protein đích.', 'Yêu cầu dự đoán đáp ứng khi thụ thể, mắt xích truyền tin hay phân tử đích bị biến đổi.'],
    solvingSteps: ['Tách sơ đồ thành tiếp nhận, truyền tin nội bào và đáp ứng.', 'Xác định vị trí thụ thể từ tính chất hóa học của ligand và đường đi qua màng.', 'Lần theo mắt xích bị tác động để dự đoán đáp ứng tăng, giảm hay kéo dài.'],
    commonMistakes: ['Cho rằng mọi ligand phải đi vào tế bào hoặc một ligand luôn tạo cùng đáp ứng ở mọi loại tế bào.'],
    difficulty: 'hard', examFrequency: 'high'
  }
];
