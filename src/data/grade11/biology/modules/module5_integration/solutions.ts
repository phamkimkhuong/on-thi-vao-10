import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const guides = [
  { number: 49, theme: 'hệ thống mở và tự điều chỉnh', principles: ['Cơ thể trao đổi vật chất, năng lượng và thông tin với môi trường.', 'Các quá trình nối nhau bằng dòng chất và tín hiệu nên một mắt xích có thể ảnh hưởng nhiều hệ.', 'Phản hồi âm chống lại sai lệch và giữ đại lượng trong khoảng phù hợp.'], reject: 'Loại phương án coi cơ quan độc lập, nội môi bất biến tuyệt đối hoặc phản hồi âm làm sai lệch tăng.', review: 'Bài 28: Cơ thể là hệ thống mở.' },
  { number: 50, theme: 'tích hợp ở thực vật', principles: ['Rễ–mạch gỗ–lá phối hợp cung cấp nước, khoáng và nguyên liệu quang hợp.', 'Quang hợp tạo chất hữu cơ; hô hấp tạo ATP cho tế bào cả ngày lẫn đêm.', 'Hormone phối hợp nguồn lực và môi trường để điều hòa sinh trưởng, sinh sản.'], reject: 'Loại phương án cho cây chỉ cần quang hợp, hormone thay thế dinh dưỡng hoặc các cơ quan hoạt động tách rời.', review: 'Bài 28: Tích hợp sinh lí thực vật.' },
  { number: 51, theme: 'tích hợp ở động vật', principles: ['Tiêu hóa–hô hấp–tuần hoàn phối hợp cung cấp cơ chất và oxygen cho tế bào.', 'Tuần hoàn đưa chất thải đến phổi, thận; thận điều chỉnh nước, ion và pH.', 'Thần kinh và nội tiết phối hợp đáp ứng nhanh–kéo dài để duy trì nội môi.'], reject: 'Loại phương án cắt rời tuần hoàn khỏi hô hấp, bài tiết hoặc phủ nhận phối hợp thần kinh–nội tiết.', review: 'Bài 28: Tích hợp sinh lí động vật.' },
  { number: 52, theme: 'ngành nghề sinh học', principles: ['Chọn nghề cần đối chiếu nhiệm vụ, năng lực, đào tạo, môi trường và đạo đức.', 'Nguồn tin cần chính thức, cập nhật và được đối chiếu chéo.', 'Công việc với mẫu sinh học phải tuân thủ an toàn, bảo mật và giới hạn chuyên môn.'], reject: 'Loại quyết định dựa một quảng cáo, bỏ ngày cập nhật hoặc xem hiệu quả cao hơn an toàn và đạo đức.', review: 'Bài 29: Ngành nghề liên quan sinh học cơ thể.' }
];
const letters: Choice[] = ['A', 'B', 'C', 'D'];

export const g11BiologyModule5Solutions: CourseSolution[] = guides.flatMap((guide, typeIndex) =>
  guide.principles.flatMap((principle, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const questionId = `bio11-m5-qt${guide.number}-q${String(factIndex * 6 + variant + 1).padStart(2, '0')}`;
      const answer = letters[(4 - ((typeIndex + factIndex * 2 + variant) % 4)) % 4];
      return {
        id: `sol-${questionId}`, questionId, courseId: 'grade11:biology', moduleId: 'bio11-m5',
        recognition: `Câu tích hợp về ${guide.theme}: cần theo dõi ít nhất hai mắt xích thay vì chọn theo một từ khóa.`,
        detailedSteps: [
          { order: 1, title: 'Lập chuỗi nguyên nhân–kết quả', explanation: 'Xác định dòng vào, biến đổi, dòng ra và tín hiệu phản hồi trong tình huống.' },
          { order: 2, title: 'Nối các mắt xích', explanation: principle },
          { order: 3, title: 'Kiểm tra giới hạn', explanation: guide.reject }
        ],
        finalAnswer: answer,
        commonMistakes: [`Chỉ giải thích một cơ quan hoặc một tiêu chí trong vấn đề ${guide.theme}.`],
        reviewSuggestions: [guide.review]
      };
    })
  )
);
