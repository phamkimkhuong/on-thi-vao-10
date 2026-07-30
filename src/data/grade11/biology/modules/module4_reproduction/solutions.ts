import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const guides = [
  { number: 39, theme: 'hai hình thức sinh sản', principles: ['Vô tính không có hợp nhất giao tử và đời con thường gần nguồn về gene.', 'Hữu tính hình thành, hợp nhất giao tử và tạo biến dị tổ hợp.', 'Vô tính thuận lợi nhân nhanh; hữu tính tăng đa dạng nhưng lợi thế phụ thuộc môi trường.'], reject: 'Loại khẳng định một hình thức luôn tốt hơn hoặc đời con vô tính là bản sao tuyệt đối không chịu môi trường.', review: 'Bài 24: Khái quát sinh sản.' },
  { number: 40, theme: 'sinh sản vô tính thực vật', principles: ['Cơ quan sinh dưỡng có thể tái sinh cây mới.', 'Giâm, chiết và ghép khác nhau ở vị trí hình thành rễ và cách nối mô.', 'Nuôi cấy mô dựa tính toàn năng, vô trùng và hormone; không mặc nhiên chuyển gene.'], reject: 'Loại phương án bắt buộc có hạt, nhầm ghép với hòa trộn bộ gene hoặc bỏ điều kiện vô trùng.', review: 'Bài 25: Sinh sản vô tính ở thực vật.' },
  { number: 41, theme: 'hoa và thụ phấn', principles: ['Hạt phấn hình thành ở bao phấn; túi phôi nằm trong noãn ở bầu.', 'Thụ phấn là đưa hạt phấn đến đầu nhụy, xảy ra trước thụ tinh.', 'Thụ phấn chéo tăng cơ hội tổ hợp nhưng còn phụ thuộc tác nhân và tương hợp.'], reject: 'Loại phương án đảo vị trí cấu trúc hoặc đồng nhất hạt phấn chạm đầu nhụy với hợp tử.', review: 'Bài 25: Hoa, giao tử và thụ phấn.' },
  { number: 42, theme: 'thụ tinh kép', principles: ['Một tinh tử kết hợp trứng tạo hợp tử rồi thành phôi.', 'Tinh tử còn lại kết hợp tế bào trung tâm thường tạo nội nhũ tam bội.', 'Noãn thành hạt, bầu thành quả và vỏ noãn góp phần tạo vỏ hạt.'], reject: 'Loại phương án tạo hai phôi hoặc đảo nguồn gốc phôi, nội nhũ, hạt và quả.', review: 'Bài 25: Thụ tinh kép, hạt và quả.' },
  { number: 43, theme: 'nhân giống vô tính', principles: ['Cành giâm cần mô sống, ẩm nhưng thoáng và hạn chế mất nước.', 'Ghép cần mô sống tiếp xúc tốt, cố định và hạn chế nhiễm.', 'Thử chất kích rễ cần đối chứng, dãy liều và nhiều mẫu tương đương.'], reject: 'Loại quy trình làm mô mất nước, thiếu tiếp xúc hoặc kết luận từ một mẫu không đối chứng.', review: 'Bài 26: Thực hành nhân giống vô tính.' },
  { number: 44, theme: 'thụ phấn kiểm soát', principles: ['Khử nhị hoa mẹ lưỡng tính trước khi phấn chín để hạn chế tự thụ.', 'Bao cách li và ghi nhãn giúp kiểm soát nguồn phấn.', 'Đối chứng khử nhị không đưa phấn giúp phát hiện nhiễm phấn ngoài.'], reject: 'Loại quy trình bỏ khử nhị, bỏ bao cách li, không ghi cây bố hoặc dùng một hoa để khái quát.', review: 'Bài 26: Thực hành thụ phấn.' },
  { number: 45, theme: 'sinh sản vô tính động vật', principles: ['Phân đôi và nảy chồi không có hợp nhất giao tử.', 'Phân mảnh tạo cá thể mới chỉ khi có khả năng tái sinh cơ thể đầy đủ.', 'Trinh sinh phát triển từ trứng không thụ tinh nên thuộc vô tính.'], reject: 'Loại phương án đồng nhất lành vết thương với sinh sản hoặc xếp trinh sinh vào hữu tính chỉ vì có trứng.', review: 'Bài 27: Sinh sản vô tính ở động vật.' },
  { number: 46, theme: 'sinh sản hữu tính động vật', principles: ['Giảm phân tạo giao tử đơn bội và thụ tinh khôi phục lưỡng bội.', 'Thụ tinh ngoài thường cần nước và nhiều giao tử; thụ tinh trong tăng xác suất gặp nhau.', 'Nơi thụ tinh và nơi phôi phát triển là hai tiêu chí khác nhau.'], reject: 'Loại phương án đồng nhất thụ tinh trong với đẻ con hoặc đẻ trứng với thụ tinh ngoài.', review: 'Bài 27: Giao tử, thụ tinh và phát triển phôi.' },
  { number: 47, theme: 'điều hòa sinh sản', principles: ['GnRH kích thích tuyến yên tiết FSH và LH.', 'FSH hỗ trợ nang trứng; đỉnh LH liên quan rụng trứng và thể vàng.', 'Hormone sinh dục phản hồi lên dưới đồi–tuyến yên theo giai đoạn.'], reject: 'Loại phương án đảo nguồn hormone, thứ tự chu kì hoặc cho phản hồi luôn cùng một chiều.', review: 'Bài 27: Điều hòa hormone sinh sản.' },
  { number: 48, theme: 'sức khỏe sinh sản', principles: ['Bao cao su dùng đúng giảm nguy cơ thai và nhiều STI nhưng không tuyệt đối.', 'Biện pháp nội tiết có cơ chế, chống chỉ định và không ngừa mọi STI.', 'IVF là thụ tinh giao tử ngoài cơ thể rồi chuyển phôi, không phải nhân bản.'], reject: 'Loại thông tin quảng cáo tuyệt đối, thiếu đồng thuận hoặc khuyến nghị y tế không xét bệnh nền.', review: 'Bài 27: Sức khỏe và công nghệ hỗ trợ sinh sản.' }
];

const letters: Choice[] = ['A', 'B', 'C', 'D'];
const recognition = ['Nhận diện khái niệm.', 'Sửa hiểu lầm.', 'Rút kết luận từ dữ kiện.', 'Giải thích tình huống.', 'Đọc biểu diễn hoặc thực hành.', 'Ôn nguyên tắc cốt lõi.'];

export const g11BiologyModule4Solutions: CourseSolution[] = guides.flatMap((guide, typeIndex) =>
  guide.principles.flatMap((principle, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const answer = letters[(4 - ((typeIndex + factIndex * 2 + variant) % 4)) % 4];
      const questionId = `bio11-m4-qt${guide.number}-q${String(localIndex).padStart(2, '0')}`;
      return {
        id: `sol-${questionId}`, questionId, courseId: 'grade11:biology', moduleId: 'bio11-m4',
        recognition: `${recognition[variant]} Trọng tâm: ${guide.theme}.`,
        detailedSteps: [
          { order: 1, title: 'Theo dõi cấu trúc và trình tự', explanation: 'Xác định tế bào, cơ quan, nguồn gene và sự kiện xảy ra trước–sau.' },
          { order: 2, title: 'Giải thích cơ chế', explanation: principle },
          { order: 3, title: 'Loại phương án sai', explanation: guide.reject }
        ],
        finalAnswer: answer,
        commonMistakes: [`Chọn theo từ quen thuộc về ${guide.theme} nhưng không theo dõi nguồn tế bào hoặc trình tự.`],
        reviewSuggestions: [guide.review]
      };
    })
  )
);
