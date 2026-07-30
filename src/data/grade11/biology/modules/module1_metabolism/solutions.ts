import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
interface GuideSeed {
  number: number;
  theme: string;
  principles: [string, string, string];
  reject: string;
  review: string;
}

const guides: GuideSeed[] = [
  { number: 1, theme: 'trao đổi chất và năng lượng', principles: ['Đồng hóa tạo chất phức tạp và cần năng lượng; dị hóa phân giải chất, giải phóng năng lượng.', 'Trao đổi chất bao gồm thu nhận, biến đổi và thải chất, không chỉ là ăn hay hô hấp.', 'ATP truyền năng lượng giữa phản ứng giải phóng và phản ứng cần năng lượng.'], reject: 'Các lựa chọn sai đã thu hẹp trao đổi chất vào một hoạt động hoặc đảo vai trò đồng hóa–dị hóa–ATP.', review: 'Bài 1: Khái quát trao đổi chất và chuyển hóa năng lượng.' },
  { number: 2, theme: 'hấp thụ nước ở rễ', principles: ['Nước qua màng theo gradient thế nước; vận chuyển ion có thể tạo gradient nhưng không bơm trực tiếp nước.', 'Đai Caspary chặn con đường gian bào ở nội bì, buộc chất qua màng để được kiểm soát.', 'Lông hút tăng diện tích tiếp xúc với dung dịch đất và cần môi trường đủ oxygen.'], reject: 'Các phương án nhiễu dùng sai chiều thẩm thấu, vị trí đai Caspary hoặc biến lông hút thành mô dẫn.', review: 'Bài 2: Hấp thụ nước và con đường qua rễ.' },
  { number: 3, theme: 'dinh dưỡng khoáng', principles: ['Ion đi ngược gradient điện hóa cần protein vận chuyển và năng lượng.', 'Một nguyên tố thiết yếu có vai trò không thể được nguyên tố khác thay thế hoàn toàn.', 'Tính di động của nguyên tố ảnh hưởng vị trí xuất hiện triệu chứng thiếu trên lá già hay non.'], reject: 'Phương án sai đánh đồng ion với nước, cho rằng mọi nguyên tố trong cây đều thiết yếu hoặc chẩn đoán chỉ từ một dấu hiệu.', review: 'Bài 2: Hấp thụ ion khoáng và nguyên tố thiết yếu.' },
  { number: 4, theme: 'mạch gỗ và mạch rây', principles: ['Mạch gỗ dẫn nước, khoáng; lực hút do thoát hơi nước là động lực quan trọng.', 'Mạch rây đi từ nguồn đến nơi chứa hoặc sử dụng, nên hướng phụ thuộc từng cặp cơ quan.', 'Liên kết–bám dính giúp cột nước chịu sức căng và duy trì tính liên tục.'], reject: 'Phương án sai tráo thành phần dịch, tình trạng tế bào dẫn hoặc tuyệt đối hóa hướng dòng mạch rây.', review: 'Bài 2: Vận chuyển trong mạch gỗ và mạch rây.' },
  { number: 5, theme: 'thoát hơi nước', principles: ['Thoát hơi nước vừa tạo lực hút, vừa hỗ trợ trao đổi khí và làm mát.', 'Nước vào tế bào khí khổng làm tăng sức trương và thường giúp lỗ khí mở.', 'Môi trường thay đổi gradient hơi nước nhưng cây còn điều tiết khí khổng theo trạng thái nước.'], reject: 'Các phương án sai xem khí khổng là lỗ cố định hoặc coi tác động môi trường luôn tuyến tính, không có điều tiết.', review: 'Bài 2: Thoát hơi nước và điều tiết khí khổng.' },
  { number: 6, theme: 'thực hành trao đổi nước và khoáng', principles: ['So sánh công bằng cần nhóm tương đương và chỉ thay đổi biến đang khảo sát.', 'Rễ thủy canh vẫn hô hấp, cần oxygen và nồng độ ion thích hợp.', 'Kết luận cần đối chứng, số lần lặp và xử lí điểm bất thường minh bạch.'], reject: 'Phương án nhiễu bỏ đối chứng, thay nhiều biến hoặc dùng một mẫu để kết luận cho mọi trường hợp.', review: 'Bài 3: Thiết kế thí nghiệm trao đổi nước và khoáng.' },
  { number: 7, theme: 'pha sáng quang hợp', principles: ['Pha sáng ở màng thylakoid tạo ATP, NADPH; oxygen giải phóng có nguồn từ nước.', 'Sắc tố hấp thụ chọn lọc bước sóng và chuyển năng lượng về trung tâm phản ứng.', 'ATP và NADPH tiếp tục được dùng cho cố định carbon.'], reject: 'Phương án sai đặt pha sáng sai vị trí, cho O2 đến từ CO2 hoặc tách rời pha sáng khỏi cố định carbon.', review: 'Bài 4: Sắc tố và pha sáng quang hợp.' },
  { number: 8, theme: 'C3, C4 và CAM', principles: ['C4 tách cố định CO2 ban đầu và Calvin theo không gian giữa tế bào thịt lá, bao bó mạch.', 'CAM tách theo thời gian: nhận CO2 ban đêm và sử dụng ban ngày.', 'Tập trung CO2 quanh Rubisco giúp C4, CAM giảm quang hô hấp trong nóng hoặc khô.'], reject: 'Phương án sai tráo sự tách biệt không gian–thời gian hoặc cho rằng C4/CAM không cần Calvin và ánh sáng.', review: 'Bài 4: Các con đường cố định carbon.' },
  { number: 9, theme: 'yếu tố ảnh hưởng quang hợp', principles: ['Sau điểm bão hòa, yếu tố khác trở thành giới hạn nên tăng ánh sáng không còn hiệu quả rõ.', 'Tại điểm bù, quang hợp và hô hấp cân bằng về trao đổi chất đang xét.', 'Biện pháp sản xuất phải nhắm đúng yếu tố giới hạn và vùng tối ưu.'], reject: 'Các lựa chọn sai giả định quan hệ tăng vô hạn hoặc bỏ qua tương tác giữa ánh sáng, CO2, nhiệt độ và nước.', review: 'Bài 4: Đồ thị yếu tố giới hạn quang hợp.' },
  { number: 10, theme: 'thực hành quang hợp', principles: ['Khử tinh bột bảo đảm tinh bột phát hiện sau đó được tạo trong giai đoạn thí nghiệm.', 'Iodine phát hiện tinh bột ở phần có diệp lục và được chiếu sáng.', 'Đếm bọt khí chỉ là chỉ báo gần đúng, cần kiểm soát nhiệt độ và lặp lại.'], reject: 'Phương án nhiễu nhầm mục đích thuốc thử, bỏ khử tinh bột hoặc thay đồng thời ánh sáng và nhiệt độ.', review: 'Bài 5: Thí nghiệm chứng minh quang hợp.' },
  { number: 11, theme: 'hô hấp thực vật', principles: ['Hô hấp diễn ra liên tục ở tế bào sống để cung cấp ATP.', 'Thiếu oxygen làm tăng lên men, ít ATP và có thể tích lũy sản phẩm bất lợi.', 'Giảm nhiệt độ, điều chỉnh nước và khí có thể làm chậm hô hấp khi bảo quản.'], reject: 'Phương án sai cho rằng cây chỉ hô hấp ban đêm, lên men cho nhiều ATP hoặc hô hấp không liên quan bảo quản.', review: 'Bài 6: Hô hấp ở thực vật.' },
  { number: 12, theme: 'thực hành hô hấp', principles: ['Mẫu hạt sống phải so với mẫu không hô hấp nhưng có điều kiện tương đương.', 'Nước vôi trong phát hiện CO2 nếu hệ đã kiểm soát nguồn CO2 bên ngoài.', 'Chênh lệch nhiệt ổn định so với đối chứng cho thấy hô hấp tỏa nhiệt.'], reject: 'Các phương án sai bỏ đối chứng, dùng sai chỉ thị hoặc quy mọi chênh lệch một lần đo cho hô hấp.', review: 'Bài 7: Thí nghiệm chứng minh hô hấp.' },
  { number: 13, theme: 'tiêu hóa ở động vật', principles: ['Tiêu hóa làm nhỏ phân tử; hấp thụ đưa sản phẩm tiêu hóa qua biểu mô vào môi trường trong.', 'Ống tiêu hóa có dòng một chiều và các đoạn chuyên hóa.', 'Động vật ăn thực vật thường cần thích nghi cơ học, hóa học và vi sinh vật cộng sinh để xử lí cellulose.'], reject: 'Phương án sai đồng nhất tiêu hóa–hấp thụ, mô tả sai số lỗ của ống tiêu hóa hoặc phủ nhận cộng sinh.', review: 'Bài 8: Dinh dưỡng và tiêu hóa ở động vật.' },
  { number: 14, theme: 'trao đổi khí động vật', principles: ['Bề mặt trao đổi cần rộng, mỏng, ẩm và duy trì gradient.', 'Dòng ngược chiều ở mang giúp gradient oxygen tồn tại dọc bề mặt.', 'Hệ ống khí côn trùng đưa khí gần trực tiếp tới tế bào.'], reject: 'Phương án sai làm bề mặt dày, bỏ gradient hoặc áp chức năng vận chuyển O2 của máu động vật có xương sống cho côn trùng.', review: 'Bài 9: Hô hấp ở động vật.' },
  { number: 15, theme: 'tuần hoàn động vật', principles: ['Hệ kín giữ máu trong mạch, cho phép điều chỉnh áp lực và phân phối.', 'Chân đầu là ngoại lệ tuần hoàn kín trong ngành thân mềm.', 'Tổng tiết diện mao mạch lớn làm vận tốc máu thấp, thuận lợi trao đổi.'], reject: 'Phương án nhiễu nhầm hở–kín, tuyệt đối hóa mọi thân mềm hoặc chỉ nhìn đường kính một mao mạch.', review: 'Bài 10: Tuần hoàn ở động vật.' },
  { number: 16, theme: 'đo nhịp tim và huyết áp', principles: ['Chuẩn hóa tư thế, thời gian nghỉ và lặp lại giúp giảm sai số.', 'Nhịp tim tăng sau vận động góp phần tăng cung lượng tim.', 'Số đo phải được diễn giải cùng điều kiện, thiết bị và biến thiên cá nhân.'], reject: 'Các phương án sai so sánh khác điều kiện hoặc biến một lần đo thành chẩn đoán chắc chắn.', review: 'Bài 11: Thực hành tuần hoàn.' },
  { number: 17, theme: 'miễn dịch', principles: ['Hàng rào, viêm và thực bào thuộc bảo vệ không đặc hiệu.', 'Vaccine tạo đáp ứng đặc hiệu và tế bào nhớ trước phơi nhiễm thật.', 'Kháng sinh tác động vi khuẩn, không điều trị trực tiếp virus.'], reject: 'Phương án sai tráo miễn dịch đặc hiệu–không đặc hiệu, coi vaccine là thuốc chữa tức thời hoặc dùng kháng sinh cho virus.', review: 'Bài 12: Miễn dịch và vaccine.' },
  { number: 18, theme: 'tạo nước tiểu', principles: ['Hàng rào lọc bình thường giữ tế bào máu và phần lớn protein lớn.', 'Tái hấp thu đưa nước, chất cần thiết từ ống thận trở về máu.', 'Bài tiết tiếp đưa một số chất từ máu vào ống, hỗ trợ cân bằng ion và pH.'], reject: 'Các phương án sai biến tạo nước tiểu thành một lần lọc duy nhất hoặc đảo chiều tái hấp thu–bài tiết.', review: 'Bài 13: Bài tiết và nephron.' },
  { number: 19, theme: 'cân bằng nội môi', principles: ['Phản hồi âm tạo đáp ứng làm giảm sai lệch.', 'Hệ điều hòa cần tiếp nhận, điều khiển và thực hiện.', 'Nội môi ổn định động trong một khoảng, không phải bất biến tuyệt đối.'], reject: 'Phương án sai hiểu chữ “âm” là dừng hoạt động hoặc tách rời các thành phần của vòng điều hòa.', review: 'Bài 13: Cân bằng nội môi và phản hồi âm.' },
  { number: 20, theme: 'phối hợp hệ cơ quan', principles: ['Vận động làm tăng nhu cầu, nên hô hấp và tuần hoàn cùng tăng hoạt động.', 'Tiêu hóa–tuần hoàn–chuyển hóa tế bào–bài tiết nối nhau bằng dòng vật chất.', 'Rối loạn một hệ lan sang nhiều chỉ số vì các hệ phụ thuộc lẫn nhau.'], reject: 'Các phương án sai coi hệ cơ quan độc lập hoặc nối sai đường đi của O2, CO2, dinh dưỡng và chất thải.', review: 'Chương I: Sơ đồ tích hợp trao đổi chất toàn cơ thể.' }
];

const letters: Choice[] = ['A', 'B', 'C', 'D'];
const recognitionByVariant = [
  'Câu hỏi trực tiếp về khái niệm cốt lõi.',
  'Câu sửa một quan niệm sai thường gặp.',
  'Câu phân biệt các cơ chế gần nhau.',
  'Câu vận dụng vào tình huống thực tế.',
  'Câu yêu cầu kết luận vừa đủ từ dữ liệu hoặc biểu diễn.',
  'Câu kiểm tra khả năng ghi nhớ bền vững sau ôn tập.'
];

export const g11BiologyModule1Solutions: CourseSolution[] = guides.flatMap((guide, typeIndex) =>
  guide.principles.flatMap((principle, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const answer = letters[(4 - shift) % 4];
      const questionId = `bio11-m1-qt${String(guide.number).padStart(2, '0')}-q${String(localIndex).padStart(2, '0')}`;
      return {
        id: `sol-${questionId}`,
        questionId,
        courseId: 'grade11:biology',
        moduleId: 'bio11-m1',
        recognition: `${recognitionByVariant[variant]} Trọng tâm là ${guide.theme}.`,
        detailedSteps: [
          { order: 1, title: 'Đọc đúng yêu cầu', explanation: `${recognitionByVariant[variant]} Không chọn chỉ vì một từ quen; cần xét toàn bộ quan hệ sinh học trong phát biểu.` },
          { order: 2, title: 'Dùng cơ chế cốt lõi', explanation: principle },
          { order: 3, title: 'Loại phương án nhiễu', explanation: guide.reject }
        ],
        finalAnswer: answer,
        commonMistakes: [`Chọn nhận định có thuật ngữ đúng nhưng đảo chiều, sai cơ chế hoặc tuyệt đối hóa nội dung về ${guide.theme}.`],
        reviewSuggestions: [guide.review]
      };
    })
  )
);
