import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const guides = [
  { number: 30, theme: 'sinh trưởng và phát triển', principles: ['Sinh trưởng là tăng không thuận nghịch về kích thước, khối lượng nhờ tăng số lượng hoặc kích thước tế bào.', 'Phát triển gồm phân hóa, phát sinh hình thái và biến đổi chức năng.', 'Hai quá trình liên quan nhưng không đồng nhất: sinh trưởng tạo vật chất, phát triển tổ chức lại cấu trúc và chức năng.'], reject: 'Loại phương án đồng nhất tăng tạm thời với sinh trưởng hoặc rút gọn phát triển thành tăng khối lượng.', review: 'Bài 19: Khái quát sinh trưởng và phát triển.' },
  { number: 31, theme: 'mô phân sinh', principles: ['Mô phân sinh đỉnh tạo sinh trưởng sơ cấp làm chồi, rễ dài ra.', 'Mô phân sinh bên tạo mô thứ cấp làm thân, rễ tăng đường kính.', 'Vòng năm phản ánh hoạt động theo mùa nhưng phải xét vòng giả và điều kiện môi trường.'], reject: 'Loại phương án đảo vai trò mô phân sinh đỉnh–bên hoặc khẳng định mọi thực vật sinh trưởng thứ cấp giống nhau.', review: 'Bài 20: Sinh trưởng ở thực vật.' },
  { number: 32, theme: 'hormone thực vật', principles: ['Auxin ở nồng độ phù hợp hỗ trợ kéo dài tế bào và ưu thế ngọn.', 'Gibberellin hỗ trợ kéo dài, nảy mầm; cytokinin thúc đẩy phân chia và làm chậm già hóa trong nhiều bối cảnh.', 'Ethylene liên quan chín quả; abscisic acid liên quan ngủ nghỉ và đáp ứng thiếu nước.'], reject: 'Hormone không phải chất dinh dưỡng; tác động phụ thuộc nồng độ, mô, giai đoạn và tương tác.', review: 'Bài 20: Hormone thực vật.' },
  { number: 33, theme: 'dữ liệu sinh trưởng cây', principles: ['Tốc độ trung bình bằng độ thay đổi đại lượng chia cho khoảng thời gian.', 'Đáp ứng với môi trường thường có vùng thích hợp và giới hạn, không tăng vô hạn.', 'Muốn suy luận nguyên nhân phải chỉ thay yếu tố khảo sát, giữ điều kiện khác tương đương và lặp mẫu.'], reject: 'Loại suy luận từ một điểm, nhầm độ cao với độ dốc hoặc thay nhiều biến cùng lúc.', review: 'Bài 20: Yếu tố ảnh hưởng sinh trưởng thực vật.' },
  { number: 34, theme: 'điều khiển sinh trưởng cây', principles: ['Bấm ngọn làm giảm ưu thế ngọn và tạo điều kiện chồi bên phát triển.', 'Thí nghiệm hormone cần đối chứng dung môi, dãy nồng độ và mẫu tương đương.', 'Tỉa cành hợp lí thay đổi ánh sáng, thông khí và phân bổ nguồn lực; hiệu quả phụ thuộc loài và mùa.'], reject: 'Loại kết luận “càng nhiều càng tốt”, thiếu đối chứng hoặc quy mọi hiệu quả cho dồn dinh dưỡng.', review: 'Bài 21: Thực hành bấm ngọn, tỉa cành và hormone.' },
  { number: 35, theme: 'kiểu phát triển động vật', principles: ['Phát triển trực tiếp có con non gần giống hình thái cơ bản của trưởng thành.', 'Biến thái không hoàn toàn không có nhộng; con non lột xác rồi thành trưởng thành.', 'Biến thái hoàn toàn có ấu trùng khác rõ trưởng thành và giai đoạn nhộng.'], reject: 'Không dùng riêng dấu hiệu lột xác; phải nhìn toàn bộ chuỗi giai đoạn và mức biến đổi hình thái.', review: 'Bài 22: Các kiểu phát triển ở động vật.' },
  { number: 36, theme: 'hormone phát triển động vật', principles: ['Growth hormone hỗ trợ sinh trưởng nhưng thừa hoặc thiếu đều gây rối loạn.', 'Thyroxine cần cho biến thái bình thường của nòng nọc.', 'Ecdysone gây lột xác; juvenile hormone cao duy trì đặc điểm ấu trùng ở lần lột xác.'], reject: 'Loại phương án cho hormone càng nhiều càng tốt hoặc đảo tác dụng ecdysone và juvenile hormone.', review: 'Bài 22: Điều hòa sinh trưởng động vật.' },
  { number: 37, theme: 'yếu tố sinh trưởng động vật', principles: ['Khẩu phần phải cân đối chứ không chỉ tăng tổng năng lượng.', 'Nhiệt độ ảnh hưởng rõ sinh trưởng động vật biến nhiệt và mỗi loài có khoảng thích hợp.', 'Sử dụng hormone cần chỉ định, liều và giám sát chuyên môn.'], reject: 'Loại lời khuyên dùng hormone tùy tiện, quan hệ tăng vô hạn hoặc quy chậm lớn cho một nguyên nhân duy nhất.', review: 'Bài 22: Yếu tố ảnh hưởng và ứng dụng.' },
  { number: 38, theme: 'quan sát biến thái', principles: ['Giai đoạn phải được định nghĩa bằng đặc điểm hình thái quan sát được.', 'Theo dõi nhiều cá thể theo lịch cố định giúp nhận diện biến thiên và thời lượng giai đoạn.', 'Thiết kế thay hai điều kiện cùng lúc không tách được tác động riêng của từng điều kiện.'], reject: 'Loại cách xếp giai đoạn chỉ theo kích thước, mẫu một cá thể hoặc kết luận nguyên nhân khi biến gây nhiễu chưa kiểm soát.', review: 'Bài 23: Thực hành quan sát biến thái.' }
];

const letters: Choice[] = ['A', 'B', 'C', 'D'];
const recognitions = [
  'Câu hỏi nền tảng: xác định đúng khái niệm hoặc cơ chế.',
  'Câu sửa một hiểu lầm thường gặp.',
  'Câu yêu cầu rút kết luận từ một dữ kiện cụ thể.',
  'Câu vận dụng: nối hiện tượng với cơ chế.',
  'Câu đọc sơ đồ, bảng hoặc thí nghiệm và giới hạn kết luận.',
  'Câu ôn duy trì: nhắc lại nguyên tắc có thể chuyển sang tình huống mới.'
];

export const g11BiologyModule3Solutions: CourseSolution[] = guides.flatMap((guide, typeIndex) =>
  guide.principles.flatMap((principle, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const answer = letters[(4 - shift) % 4];
      const questionId = `bio11-m3-qt${guide.number}-q${String(localIndex).padStart(2, '0')}`;
      return {
        id: `sol-${questionId}`,
        questionId,
        courseId: 'grade11:biology',
        moduleId: 'bio11-m3',
        recognition: `${recognitions[variant]} Trọng tâm: ${guide.theme}.`,
        detailedSteps: [
          { order: 1, title: 'Đọc dấu hiệu trong đề', explanation: 'Xác định đối tượng, giai đoạn, đại lượng thay đổi và điều kiện được giữ cố định.' },
          { order: 2, title: 'Nối với cơ chế', explanation: principle },
          { order: 3, title: 'Loại phương án nhiễu', explanation: guide.reject }
        ],
        finalAnswer: answer,
        commonMistakes: [`Nhớ tên về ${guide.theme} nhưng không đối chiếu giai đoạn, nồng độ hoặc giới hạn dữ liệu.`],
        reviewSuggestions: [guide.review]
      };
    })
  )
);
