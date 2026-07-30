import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const guides = [
  { number: 21, theme: 'chuỗi cảm ứng', principles: ['Cảm ứng gồm tiếp nhận, xử lí và đáp ứng chứ không chỉ là chuyển động.', 'Thụ thể chọn lọc loại kích thích và chuyển thành tín hiệu sinh học.', 'Đáp ứng giúp điều chỉnh hoạt động nhưng lợi ích còn phụ thuộc bối cảnh.'], reject: 'Phương án sai giới hạn cảm ứng ở động vật có não hoặc đồng nhất thụ thể với cơ quan đáp ứng.', review: 'Bài 14: Khái quát cảm ứng.' },
  { number: 22, theme: 'hướng động', principles: ['Hướng động là sinh trưởng định hướng theo hướng của tác nhân.', 'Dương nghĩa là về phía tác nhân, âm là tránh xa; không đồng nghĩa tốt–xấu.', 'Rễ và chồi có độ nhạy, đáp ứng kéo dài tế bào khác nhau với auxin.'], reject: 'Phương án nhiễu bỏ hướng tác nhân, đồng nhất rễ với chồi hoặc xem mọi hướng động đều dương.', review: 'Bài 15: Hướng động ở thực vật.' },
  { number: 23, theme: 'ứng động', principles: ['Chiều ứng động không phụ thuộc hướng đến của tác nhân.', 'Ứng động không sinh trưởng thường nhanh, thuận nghịch nhờ sức trương.', 'Ứng động sinh trưởng dựa trên sinh trưởng không đều giữa hai phía.'], reject: 'Phương án sai biến ứng động thành hướng động hoặc cho rằng mọi vận động nhanh đều do phân chia tế bào.', review: 'Bài 15: Ứng động ở thực vật.' },
  { number: 24, theme: 'thực hành cảm ứng', principles: ['Chỉ thay hướng chiếu sáng khi kiểm tra hướng sáng và giữ các điều kiện khác tương đương.', 'Góc cong, chiều dài và số mẫu là dữ liệu khách quan hơn đánh giá cảm tính.', 'Kiểm soát biến gây nhiễu và lặp lại là điều kiện để suy luận nguyên nhân.'], reject: 'Các phương án sai thay nhiều biến, bỏ đối chứng hoặc dùng một cây thuận lợi nhất.', review: 'Bài 16: Thực hành cảm ứng thực vật.' },
  { number: 25, theme: 'hệ thần kinh và phản xạ', principles: ['Tập trung hóa tăng từ lưới đến chuỗi hạch và dạng ống.', 'Cung phản xạ truyền từ thụ thể qua neuron cảm giác, trung ương, neuron vận động tới cơ quan đáp ứng.', 'Phản xạ bảo vệ có thể xảy ra trước nhận thức có ý thức.'], reject: 'Phương án sai đảo chiều neuron cảm giác–vận động hoặc cho rằng phản xạ luôn cần suy nghĩ chủ động.', review: 'Bài 17: Hệ thần kinh và cung phản xạ.' },
  { number: 26, theme: 'điện thế màng', principles: ['Điện thế nghỉ dựa trên gradient ion, tính thấm chọn lọc và cơ chế duy trì gradient.', 'Điện thế hoạt động trên ngưỡng có biên độ theo nguyên tắc tất cả hoặc không.', 'Myelin làm dẫn truyền nhảy cóc giữa các eo Ranvier.'], reject: 'Phương án sai đặt Na+ cao ở trong khi nghỉ, tăng biên độ xung theo cường độ hoặc mô tả sai vai trò myelin.', review: 'Bài 17: Điện thế nghỉ, hoạt động và xung thần kinh.' },
  { number: 27, theme: 'synapse hóa học', principles: ['Xung đến mở kênh Ca2+ và kích thích túi màng trước giải phóng chất trung gian.', 'Chất trung gian gắn thụ thể màng sau, làm đổi tính thấm ion.', 'Sự phân cực cấu trúc làm truyền tin chủ yếu một chiều.'], reject: 'Phương án nhiễu đặt túi ở màng sau, thụ thể ở màng trước hoặc cho chất trung gian truyền hai chiều tự do.', review: 'Bài 17: Truyền tin qua synapse.' },
  { number: 28, theme: 'tập tính động vật', principles: ['Tập tính bẩm sinh có nền tảng di truyền và thường khuôn mẫu.', 'Tập tính học được hình thành, điều chỉnh qua trải nghiệm và linh hoạt hơn.', 'Nhiều tập tính phối hợp thành phần bẩm sinh với học tập.'], reject: 'Phương án sai chia mọi tập tính thành hai cực tuyệt đối hoặc phủ nhận vai trò của trải nghiệm ở động vật.', review: 'Bài 18: Tập tính bẩm sinh và học được.' },
  { number: 29, theme: 'quan sát tập tính', principles: ['Ethogram dùng mô tả hành vi quan sát được, không gán cảm xúc thiếu bằng chứng.', 'Lấy mẫu theo khoảng cố định giúp ước lượng quỹ thời gian hành vi.', 'Ứng dụng tập tính cần bảo đảm phúc lợi động vật.'], reject: 'Phương án sai nhân hóa, lấy mẫu thiên lệch hoặc chỉ xét hiệu quả mà bỏ phúc lợi.', review: 'Bài 18: Quan sát và ứng dụng tập tính.' }
];

const letters: Choice[] = ['A', 'B', 'C', 'D'];
const recognitions = [
  'Câu hỏi trực tiếp về nền tảng.',
  'Câu sửa hiểu lầm thường gặp.',
  'Câu phân biệt cơ chế.',
  'Câu vận dụng tình huống.',
  'Câu đọc bằng chứng hoặc biểu diễn.',
  'Câu kiểm tra duy trì kiến thức.'
];

export const g11BiologyModule2Solutions: CourseSolution[] = guides.flatMap((guide, typeIndex) =>
  guide.principles.flatMap((principle, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const answer = letters[(4 - shift) % 4];
      const questionId = `bio11-m2-qt${guide.number}-q${String(localIndex).padStart(2, '0')}`;
      return {
        id: `sol-${questionId}`,
        questionId,
        courseId: 'grade11:biology',
        moduleId: 'bio11-m2',
        recognition: `${recognitions[variant]} Trọng tâm là ${guide.theme}.`,
        detailedSteps: [
          { order: 1, title: 'Tách dữ kiện', explanation: `${recognitions[variant]} Xác định tác nhân, đường truyền thông tin và đáp ứng trước khi chọn.` },
          { order: 2, title: 'Giải thích cơ chế', explanation: principle },
          { order: 3, title: 'Kiểm tra phương án còn lại', explanation: guide.reject }
        ],
        finalAnswer: answer,
        commonMistakes: [`Nhìn tên hiện tượng về ${guide.theme} nhưng không kiểm tra dấu hiệu cơ chế trong dữ kiện.`],
        reviewSuggestions: [guide.review]
      };
    })
  )
);
