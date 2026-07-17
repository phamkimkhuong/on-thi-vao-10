import type { Solution } from '@/types';

const solved = (questionId: string, recognition: string, explanation: string, finalAnswer: string, mistakes: string[], review: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition, detailedSteps: [{ order: 1, title: 'Nhận dạng', explanation: recognition }, { order: 2, title: 'Lập luận', explanation, result: finalAnswer }], finalAnswer, commonMistakes: mistakes, reviewSuggestions: review });

export const biologyFinal2SolutionsFormB: Solution[] = [
  solved('bio10-assess-final2-b-q01', 'Bánh nở nhờ khí tạo ra trong chuyển hóa của nấm men.', 'Lên men rượu tạo CO₂; bọt khí được giữ trong mạng bột làm khối bột nở.', 'A', ['Cho nấm men quang hợp.'], ['Lên men rượu']),
  solved('bio10-assess-final2-b-q02', 'Tăng sinh mất kiểm soát phải liên hệ gene điều hòa các điểm kiểm soát chu kì.', 'Tổn thương gene thúc đẩy/ức chế chu kì có thể cho tế bào lỗi tiếp tục phân chia và tăng nguy cơ ung thư.', 'A', ['Cho một tổn thương chắc chắn gây ung thư.'], ['Ung thư']),
  solved('bio10-assess-final2-b-q03', 'Vi sinh vật gồm nhiều nhóm, không đồng nhất với vi khuẩn hay virus.', 'Vi khuẩn, nấm men/nấm hiển vi và động vật nguyên sinh là những nhóm thường được nghiên cứu trong vi sinh học.', 'A', ['Cho mọi vi sinh vật gây bệnh.'], ['Các nhóm vi sinh vật']),
  solved('bio10-assess-final2-b-q04', 'Phản ứng hóa học vô cơ cung cấp năng lượng; CO₂ cung cấp carbon.', 'Nguồn năng lượng hóa học → hóa; nguồn carbon CO₂ → tự dưỡng, nên hóa tự dưỡng.', 'B', ['Nhầm nguồn năng lượng với nguồn carbon.'], ['Kiểu dinh dưỡng']),
  solved('bio10-assess-final2-b-q05', 'Cấy ria làm giảm dần mật độ tế bào trên bề mặt thạch.', 'Các tế bào/cụm được tách không gian để hình thành khuẩn lạc riêng, hỗ trợ phân lập dòng.', 'A', ['Cho cấy ria thay thế vô trùng.'], ['Phân lập vi sinh vật']),
  solved('bio10-assess-final2-b-q06', 'CFU nhấn mạnh đơn vị có khả năng tạo khuẩn lạc.', 'Một CFU có thể là một tế bào hoặc cụm sống; tế bào chết/không mọc trong điều kiện đó không được đếm.', 'A', ['CFU bằng chính xác tổng số tế bào.'], ['Định lượng CFU']),
  solved('bio10-assess-final2-b-q07', 'Pha cân bằng được nhận diện bằng tổng mật độ gần ổn định.', 'Số tế bào mới xấp xỉ số chết; quần thể vẫn chuyển hóa và một phần vẫn phân chia.', 'B', ['Cho mọi tế bào ngừng hoạt động.'], ['Pha sinh trưởng']),
  solved('bio10-assess-final2-b-q08', 'Nấm men là vi sinh vật nhân thực có thể sinh sản vô tính bằng nảy chồi.', 'Chồi hình thành, nhận vật chất tế bào và tách khỏi tế bào mẹ.', 'A', ['Gán phân đôi vi khuẩn cho mọi vi sinh vật.'], ['Sinh sản vi sinh vật']),
  solved('bio10-assess-final2-b-q09', 'Kháng thuốc là kết quả chọn lọc, không phải vi khuẩn “cố ý” thích nghi.', 'Dùng sai tạo áp lực chọn lọc: cá thể nhạy bị loại, cá thể kháng sống và tăng tỉ lệ.', 'A', ['Cho kháng sinh trị virus.'], ['Kháng kháng sinh']),
  solved('bio10-assess-final2-b-q10', 'Lên men hữu ích vẫn là quy trình sinh học cần kiểm soát giống, vệ sinh và điều kiện.', 'Dụng cụ sạch, nguyên liệu tốt, giống phù hợp, nhiệt độ–thời gian đúng làm giảm nhiễm tạp và nâng chất lượng.', 'A', ['Dùng vi sinh vật ngẫu nhiên.'], ['Ứng dụng lên men']),
  solved('bio10-assess-final2-b-q11', 'Virus không có cấu trúc tế bào hay hệ chuyển hóa độc lập.', 'Virus chỉ nhân lên trong tế bào chủ nhờ bộ máy của chủ; không phải mọi virus có vỏ hay cùng loại nucleic acid.', 'B', ['Gọi virus là tế bào nhỏ.'], ['Đặc điểm virus']),
  solved('bio10-assess-final2-b-q12', 'Giai đoạn sản xuất nucleic acid và protein được gọi là tổng hợp.', 'Sau xâm nhập, gene virus điều khiển/khai thác tế bào chủ để tổng hợp các thành phần.', 'C', ['Nhầm tổng hợp với lắp ráp.'], ['Chu trình virus']),
  solved('bio10-assess-final2-b-q13', 'Virus nhân lên bằng tổng hợp từng thành phần rồi lắp ráp, không bằng phân đôi.', 'Nucleic acid và protein virus được tạo riêng trong tế bào chủ và ghép thành virion mới.', 'A', ['Gán thoi phân bào/ribosome cho virus.'], ['Nhân lên virus']),
  solved('bio10-assess-final2-b-q14', 'Đường lây qua vector muỗi cần can thiệp vector và tiếp xúc với vector.', 'Loại nước đọng/nơi sinh sản, kiểm soát muỗi và phòng muỗi đốt cắt đường truyền.', 'A', ['Dùng kháng sinh cho virus.'], ['Phòng bệnh qua vector']),
  solved('bio10-assess-final2-b-q15', 'Biến thể phát sinh từ biến đổi di truyền và thay đổi tần số dưới chọn lọc.', 'Sao chép có thể tạo biến đổi; truyền lan/chọn lọc làm một số biến thể tăng. Không phải biến thể nào cũng nguy hiểm hơn.', 'A', ['Cho mọi biến thể tăng độc lực.'], ['Biến thể virus']),
  solved('bio10-assess-final2-b-q16', 'Ứng dụng virus là công nghệ rủi ro–lợi ích, cần nhiều tiêu chí hơn hiệu quả.', 'Phải đánh giá đặc hiệu, hiệu quả, phát tán, an toàn sinh học, quyền lợi và đạo đức trước sử dụng.', 'A', ['Cho virus biến đổi mặc nhiên an toàn.'], ['Ứng dụng virus']),
  solved('bio10-assess-final2-b-q17', 'Đọc đoạn tăng dốc, đoạn gần ngang và đoạn giảm; không suy cơ chế không được đo.', 'a Đúng: 1,3→36. b Đúng: 36→35. c Sai: suy vong là chết vượt sinh, không đồng thời. d Sai: bảng không cho cơ chế phân tử.', 'a:Đ|b:Đ|c:S|d:S', ['Suy cơ chế từ dữ liệu mô tả.'], ['Đường cong sinh trưởng']),
  solved('bio10-assess-final2-b-q18', 'Đánh giá biện pháp theo đường lây và nguồn tin theo bằng chứng/phương pháp.', 'a Đúng. b Sai: vaccine không tuyệt đối. c Đúng: nguồn, cách thu và thời điểm quyết định diễn giải. d Sai: lượt chia sẻ không chứng minh.', 'a:Đ|b:S|c:Đ|d:S', ['Đồng nhất phổ biến với đáng tin.'], ['Truyền thông bệnh virus']),
  solved('bio10-assess-final2-b-q19', 'Mỗi lần phân đôi làm số tế bào gấp đôi.', '$2^6=64$ tế bào.', '64', ['Tính 2×6.'], ['Sinh trưởng vi khuẩn']),
  solved('bio10-assess-final2-b-q20', 'Đếm các tuần có số ca ≥10.', 'Tuần 2 có 12 và tuần 3 có 18; có 2 tuần.', '2', ['Đếm tuần 4 có 9.'], ['Dữ liệu dịch tễ']),
  {
    id: 'solution-bio10-assess-final2-b-q21', questionId: 'bio10-assess-final2-b-q21', recognition: 'Dạng điều tra–truyền thông dịch tễ: phải xác minh dữ liệu, xác định đường lây, chọn can thiệp tương ứng và bác tin thuốc dựa trên bằng chứng.',
    detailedSteps: [
      { order: 1, title: 'Xác minh dữ liệu', explanation: 'Xác nhận định nghĩa ca, ngày khởi phát, lớp/tiếp xúc, nguồn báo cáo, số người có nguy cơ; lập đường cong ca theo thời gian và sơ đồ phân bố lớp.', points: 0.5 },
      { order: 2, title: 'Can thiệp đường lây', explanation: 'Phối hợp thông khí, vệ sinh tay/che ho, khuyến cáo người bệnh nghỉ và theo dõi, giảm tiếp xúc gần; điều chỉnh theo hướng dẫn y tế và đặc điểm virus.', points: 0.5 },
      { order: 3, title: 'Xử lí tin kháng sinh', explanation: 'Nêu kháng sinh tác động vi khuẩn, không dùng dự phòng/điều trị virus nếu không có chỉ định cho bội nhiễm; kiểm tra nguồn chính thống và không chia sẻ tin chưa xác minh.', points: 0.5 },
      { order: 4, title: 'Giới hạn và thông điệp', explanation: 'Dữ liệu ban đầu chưa chứng minh nguồn lây hay quan hệ nhân quả. Thông điệp ngắn, hành động được, không gây hoảng loạn và cập nhật khi có bằng chứng mới.', points: 0.5 }
    ], finalAnswer: 'Chấm theo rubric', commonMistakes: ['Kết luận ngay nguồn lây.', 'Dùng kháng sinh cho virus.', 'Nêu biện pháp không phù hợp đường lây.', 'Chia sẻ số liệu không kiểm chứng.'], reviewSuggestions: ['Dịch tễ học cơ bản', 'Truyền thông khoa học'],
    rubric: [
      { id: 'data', description: 'Xác minh và tổ chức dữ liệu dịch tễ phù hợp.', points: 0.5, evidence: ['Định nghĩa ca/ngày khởi phát', 'Phân bố lớp/tiếp xúc', 'Nguồn và mẫu số'] },
      { id: 'intervention', description: 'Chọn can thiệp phù hợp đường lây hô hấp.', points: 0.5, evidence: ['Thông khí/che ho/vệ sinh', 'Người bệnh giảm tiếp xúc', 'Theo hướng dẫn y tế'] },
      { id: 'misinformation', description: 'Xử lí đúng tin về kháng sinh.', points: 0.5, evidence: ['Kháng sinh không trị virus', 'Chỉ dùng theo chỉ định', 'Kiểm tra nguồn chính thống'] },
      { id: 'limits', description: 'Nêu giới hạn và truyền thông có trách nhiệm.', points: 0.5, evidence: ['Chưa chứng minh nguồn/nhân quả', 'Không gây hoảng loạn', 'Cập nhật khi có dữ liệu mới'] }
    ]
  }
];
