import type { QuestionType } from '@/types';

export const g10PhysicsModule0QuestionTypes: QuestionType[] = [
  {
    id: 'phy10-qt1', topicId: 'phy10-t0', name: 'Phương pháp Vật lí và an toàn thực hành', slug: 'phuong-phap-vat-li-an-toan',
    description: 'Nhận diện câu hỏi vật lí, phân biệt quan sát với suy luận và lựa chọn hành vi an toàn trong phòng thực hành.',
    exampleQuestionId: 'phy10-m0-q001', difficulty: 'easy', examFrequency: 'medium',
    theory: ['Vật lí nghiên cứu các dạng vận động, tương tác của vật chất và năng lượng bằng quan sát, mô hình, thí nghiệm và toán học.', 'An toàn được ưu tiên trước thu thập dữ liệu: phải nhận diện nguy cơ điện, nhiệt, cơ học, quang học và hóa chất trước khi thao tác.'],
    recognitionSigns: ['Đề hỏi phát biểu nào là quan sát, giả thuyết, kết luận hoặc câu hỏi có thể kiểm chứng.', 'Tình huống có thiết bị điện, nguồn nhiệt, vật rơi, laser hoặc dụng cụ vỡ và yêu cầu chọn cách xử lí.'],
    solvingSteps: ['Xác định mục tiêu: phân loại phát biểu hay xử lí nguy cơ.', 'Tách dữ kiện trực tiếp quan sát được khỏi phần giải thích hoặc suy đoán.', 'Với an toàn, ngắt nguồn/ngừng thao tác, cảnh báo người xung quanh và báo giáo viên theo đúng thứ tự ưu tiên.'],
    commonMistakes: ['Coi suy luận là dữ kiện quan sát.', 'Tự xử lí sự cố điện hoặc kính vỡ khi chưa ngắt nguồn và chưa báo người phụ trách.']
  },
  {
    id: 'phy10-qt2', topicId: 'phy10-t0', name: 'Đơn vị SI, đổi đơn vị và chọn dụng cụ', slug: 'don-vi-si-dung-cu-do',
    description: 'Đổi đơn vị, viết dạng khoa học và lựa chọn dụng cụ theo giới hạn đo, độ chia nhỏ nhất.',
    exampleQuestionId: 'phy10-m0-q005', difficulty: 'easy', examFrequency: 'high',
    theory: ['Đơn vị cơ bản thường dùng gồm mét (m), kilôgam (kg), giây (s); đơn vị dẫn xuất được tạo từ các đơn vị cơ bản.', 'Dụng cụ phù hợp phải có giới hạn đo không nhỏ hơn giá trị cần đo và độ chia đủ nhỏ so với độ chính xác mong muốn.'],
    recognitionSigns: ['Dữ kiện dùng km/h, cm, mm, ms, g hoặc lũy thừa mười và yêu cầu đổi về SI.', 'Đề cho nhiều dụng cụ với giới hạn đo, độ chia nhỏ nhất khác nhau.'],
    solvingSteps: ['Viết hệ số đổi đơn vị dưới dạng lũy thừa mười.', 'Đổi riêng phần số và phần đơn vị; với diện tích, thể tích phải nâng lũy thừa cả hệ số đổi.', 'Nếu chọn dụng cụ, loại dụng cụ thiếu giới hạn đo rồi chọn độ chia nhỏ nhất phù hợp nhất.'],
    commonMistakes: ['Đổi cm² sang m² như đổi cm sang m.', 'Chọn dụng cụ có độ chia rất nhỏ nhưng giới hạn đo không đủ.']
  },
  {
    id: 'phy10-qt3', topicId: 'phy10-t0', name: 'Đọc phép đo trực tiếp và tính giá trị trung bình', slug: 'phep-do-truc-tiep-trung-binh',
    description: 'Đọc đúng dụng cụ, tổ chức số liệu đo lặp và tính giá trị trung bình.',
    exampleQuestionId: 'phy10-q1', difficulty: 'easy', examFrequency: 'high',
    theory: ['Phép đo trực tiếp cho kết quả bằng cách đọc ngay trên dụng cụ; đo lặp giúp đánh giá dao động ngẫu nhiên.', 'Giá trị trung bình là tổng các kết quả chia cho số lần đo, chưa phải kết quả cuối cùng nếu chưa kèm sai số.'],
    recognitionSigns: ['Có thang chia, kim chỉ hoặc bảng nhiều lần đo cùng một đại lượng.', 'Yêu cầu tính giá trị trung bình hoặc nhận xét sự phân tán của số liệu.'],
    solvingSteps: ['Kiểm tra mọi số đo cùng đơn vị và loại bỏ lỗi ghi chép hiển nhiên chỉ khi có căn cứ.', 'Tính trung bình cộng của toàn bộ lần đo hợp lệ.', 'Giữ đủ chữ số trong bước trung gian để tiếp tục tính sai số.'],
    commonMistakes: ['Chọn giá trị xuất hiện nhiều nhất thay cho trung bình.', 'Làm tròn từng số hạng trước khi tính trung bình.']
  },
  {
    id: 'phy10-qt4', topicId: 'phy10-t0', name: 'Sai số tuyệt đối và sai số tỉ đối', slug: 'sai-so-tuyet-doi-ti-doi',
    description: 'Phân biệt nguồn sai số và tính sai số tuyệt đối trung bình, sai số phép đo, sai số tỉ đối theo quy ước đề bài.',
    exampleQuestionId: 'phy10-m0-q013', difficulty: 'medium', examFrequency: 'high',
    theory: ['Sai số ngẫu nhiên làm các lần đo dao động; sai số dụng cụ gắn với khả năng phân giải hoặc quy ước của dụng cụ.', 'Với quy ước phổ biến: sai số phép đo bằng sai số tuyệt đối trung bình cộng sai số dụng cụ; sai số tỉ đối bằng sai số tuyệt đối chia giá trị trung bình.'],
    recognitionSigns: ['Có nhiều lần đo, độ chia nhỏ nhất hoặc sai số dụng cụ và yêu cầu tính sai số.', 'Đề hỏi độ chính xác theo phần trăm hoặc so sánh chất lượng hai phép đo.'],
    solvingSteps: ['Tính giá trị trung bình.', 'Tính độ lệch tuyệt đối từng lần và lấy trung bình; cộng sai số dụng cụ nếu đề quy định.', 'Tính sai số tỉ đối, đổi sang phần trăm và không quên đơn vị của sai số tuyệt đối.'],
    commonMistakes: ['Lấy độ lệch có dấu khiến các sai lệch triệt tiêu.', 'So sánh hai phép đo chỉ bằng sai số tuyệt đối dù độ lớn đại lượng rất khác nhau.']
  },
  {
    id: 'phy10-qt5', topicId: 'phy10-t0', name: 'Làm tròn và ghi kết quả đo', slug: 'lam-tron-ghi-ket-qua-do',
    description: 'Làm tròn sai số, đồng bộ hàng thập phân và ghi kết quả dưới dạng giá trị trung bình cộng trừ sai số.',
    exampleQuestionId: 'phy10-m0-q017', difficulty: 'medium', examFrequency: 'high',
    theory: ['Sai số thường được giữ một chữ số có nghĩa, hoặc hai chữ số khi chữ số đầu nhỏ; quy ước cụ thể phải được nêu rõ.', 'Giá trị trung bình phải được làm tròn đến cùng hàng thập phân với sai số và luôn kèm đơn vị.'],
    recognitionSigns: ['Đã cho giá trị trung bình và sai số chưa làm tròn.', 'Yêu cầu chọn cách viết kết quả đo đúng quy cách.'],
    solvingSteps: ['Làm tròn sai số theo quy ước đề bài.', 'Làm tròn giá trị trung bình đến cùng hàng của chữ số cuối trong sai số.', 'Ghi dạng $A = (\\bar A \\pm \\Delta A)$ kèm đúng đơn vị.'],
    commonMistakes: ['Giữ giá trị trung bình nhiều chữ số hơn sai số cho phép.', 'Bỏ đơn vị hoặc đặt đơn vị chỉ cho một vế trong ngoặc.']
  },
  {
    id: 'phy10-qt6', topicId: 'phy10-t0', name: 'Phép đo gián tiếp và lan truyền sai số', slug: 'phep-do-gian-tiep-lan-truyen-sai-so',
    description: 'Tính đại lượng gián tiếp và ước lượng sai số cho tổng, hiệu, tích, thương hoặc lũy thừa đơn giản.',
    exampleQuestionId: 'phy10-m0-q021', difficulty: 'medium', examFrequency: 'medium',
    theory: ['Với tổng hoặc hiệu, sai số tuyệt đối cực đại được cộng; với tích hoặc thương, sai số tỉ đối cực đại được cộng.', 'Với lũy thừa $A=x^n$, sai số tỉ đối gần đúng của A bằng $|n|$ lần sai số tỉ đối của x.'],
    recognitionSigns: ['Đại lượng cần tìm không được đọc trực tiếp mà tính từ các số đo khác.', 'Công thức có dạng tổng, hiệu, tích, thương, diện tích, thể tích hoặc khối lượng riêng.'],
    solvingSteps: ['Tính giá trị trung tâm bằng công thức vật lí.', 'Chọn quy tắc lan truyền phù hợp với cấu trúc công thức.', 'Đổi sai số tỉ đối sang sai số tuyệt đối nếu cần và ghi kết quả đúng quy cách.'],
    commonMistakes: ['Cộng sai số tuyệt đối cho tích hoặc thương.', 'Quên nhân hệ số lũy thừa khi tính sai số diện tích hay thể tích.']
  },
  {
    id: 'phy10-qt7', topicId: 'phy10-t0', name: 'Thiết kế phép đo và đánh giá dữ liệu', slug: 'thiet-ke-phep-do-danh-gia-du-lieu',
    description: 'Xác định biến, đối chứng, số lần lặp, nguồn sai số và giới hạn kết luận từ bảng dữ liệu.',
    exampleQuestionId: 'phy10-m0-q025', difficulty: 'medium', examFrequency: 'high',
    theory: ['Một phép đo đáng tin cậy cần quy trình nhất quán, đủ lần lặp, thiết bị phù hợp và kiểm soát biến gây nhiễu.', 'Độ chụm mô tả mức gần nhau giữa các lần đo; độ đúng mô tả mức gần giá trị quy chiếu.'],
    recognitionSigns: ['Đề mô tả kế hoạch thí nghiệm, yêu cầu chỉ ra biến độc lập, phụ thuộc hoặc biến kiểm soát.', 'Có bảng số liệu, điểm ngoại lai, giá trị chuẩn hoặc yêu cầu đánh giá độ tin cậy.'],
    solvingSteps: ['Nêu rõ đại lượng chủ động thay đổi, đại lượng đo và các điều kiện phải giữ cố định.', 'Kiểm tra số lần lặp, cách hiệu chuẩn, độ phân giải và dấu hiệu ngoại lai.', 'Chỉ kết luận trong phạm vi dữ liệu; đề xuất phép đo bổ sung nếu bằng chứng chưa đủ.'],
    commonMistakes: ['Thay đổi đồng thời nhiều biến rồi quy kết kết quả cho một biến.', 'Tự ý xóa điểm ngoại lai mà không kiểm tra nguyên nhân hoặc đo lại.']
  }
];

