import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
interface FactSeed { correct: string; wrong: [string, string, string]; context: string; }
interface TypeSeed {
  number: number; lesson: number; theme: string; representation: QuestionRepresentationType;
  misconceptionId?: string; facts: [FactSeed, FactSeed, FactSeed];
}

const typeSeeds: TypeSeed[] = [
  { number: 39, lesson: 24, theme: 'sinh sản vô tính và hữu tính', representation: 'table', misconceptionId: 'bio11-misc-asexual-identical', facts: [
    { correct: 'Sinh sản vô tính không có sự hợp nhất giao tử và thường tạo đời con rất gần nguồn ban đầu về gene.', wrong: ['Sinh sản vô tính luôn cần hai cá thể bố mẹ.', 'Sinh sản vô tính bắt buộc tạo giao tử đơn bội.', 'Đời con vô tính không thể chịu ảnh hưởng môi trường.'], context: 'Một đoạn thân khoai tây mọc thành cây mới.' },
    { correct: 'Sinh sản hữu tính có sự hình thành và hợp nhất giao tử, tạo tổ hợp allele mới ở đời con.', wrong: ['Sinh sản hữu tính luôn nhanh hơn vô tính.', 'Mọi con hữu tính giống hệt một bố hoặc mẹ.', 'Hữu tính không tạo biến dị tổ hợp.'], context: 'Tinh tử kết hợp tế bào trứng tạo hợp tử.' },
    { correct: 'Vô tính thuận lợi khi cần tăng nhanh kiểu gene thích nghi; hữu tính tăng đa dạng, hữu ích khi môi trường biến đổi.', wrong: ['Một hình thức luôn tốt hơn trong mọi môi trường.', 'Vô tính không có lợi thế tốc độ.', 'Đa dạng di truyền luôn làm mọi cá thể khỏe hơn.'], context: 'Quần thể vô tính tăng nhanh trong môi trường ổn định nhưng cùng nhạy với một mầm bệnh mới.' }
  ]},
  { number: 40, lesson: 25, theme: 'sinh sản vô tính thực vật', representation: 'diagram', misconceptionId: 'bio11-misc-tissue-culture-gmo', facts: [
    { correct: 'Thân, rễ hoặc lá có thể tạo cây mới nhờ tế bào còn khả năng phân chia và tái sinh cơ quan.', wrong: ['Chỉ hạt mới tạo được cây mới.', 'Sinh sản sinh dưỡng bắt buộc có thụ tinh.', 'Cây con luôn khác hoàn toàn cây nguồn về gene.'], context: 'Mắt củ khoai tây phát triển thành chồi và cây mới.' },
    { correct: 'Giâm dùng đoạn cơ quan tạo rễ; chiết kích thích rễ trên cành còn gắn cây; ghép nối chồi hoặc cành với gốc ghép.', wrong: ['Giâm và ghép đều bắt buộc tạo hạt.', 'Chiết cắt rời cành trước khi cành ra rễ.', 'Ghép làm gene hai cây hòa thành một bộ gene mới.'], context: 'Cành được khoanh vỏ, bó bầu ẩm đến khi ra rễ rồi mới cắt.' },
    { correct: 'Nuôi cấy mô dùng mẫu nhỏ trong điều kiện vô trùng và môi trường hormone phù hợp để nhân nhanh cây.', wrong: ['Nuôi cấy mô mặc nhiên là chuyển gene.', 'Không cần vô trùng vì mô tự diệt vi sinh vật.', 'Mọi tỉ lệ auxin–cytokinin tạo cùng một cơ quan.'], context: 'Đỉnh sinh trưởng sạch được nuôi trên môi trường để tạo nhiều cây giống đồng đều.' }
  ]},
  { number: 41, lesson: 25, theme: 'hoa, giao tử và thụ phấn', representation: 'diagram', misconceptionId: 'bio11-misc-pollination-fertilization', facts: [
    { correct: 'Hạt phấn hình thành trong bao phấn; túi phôi chứa tế bào trứng nằm trong noãn ở bầu nhụy.', wrong: ['Tế bào trứng nằm trong bao phấn.', 'Hạt phấn hình thành ở đầu nhụy.', 'Noãn nằm ngoài hoa và không thuộc bầu.'], context: 'Sơ đồ hoa chỉ rõ nhị bao quanh nhụy có bầu chứa noãn.' },
    { correct: 'Thụ phấn là sự chuyển hạt phấn đến đầu nhụy; thụ tinh là sự hợp nhất giao tử xảy ra sau đó trong noãn.', wrong: ['Hạt phấn chạm đầu nhụy là hợp tử hình thành ngay.', 'Thụ tinh xảy ra trước thụ phấn.', 'Thụ phấn chỉ có ở hoa đơn tính.'], context: 'Hạt phấn nảy ống trên đầu nhụy rồi ống phấn kéo dài vào noãn.' },
    { correct: 'Thụ phấn chéo có thể tăng tổ hợp di truyền nhưng phụ thuộc tác nhân vận chuyển phấn và sự tương hợp.', wrong: ['Thụ phấn chéo luôn xảy ra trong cùng một hoa.', 'Tự thụ phấn không thể tạo hạt.', 'Mọi hạt phấn đến đầu nhụy đều thụ tinh thành công.'], context: 'Ong mang phấn giữa hoa của hai cây cùng loài.' }
  ]},
  { number: 42, lesson: 25, theme: 'thụ tinh kép, hạt và quả', representation: 'diagram', misconceptionId: 'bio11-misc-double-fertilization-two-embryos', facts: [
    { correct: 'Một tinh tử kết hợp tế bào trứng tạo hợp tử lưỡng bội, phát triển thành phôi.', wrong: ['Tinh tử kết hợp tế bào trứng tạo nội nhũ tam bội.', 'Tế bào trứng phát triển thành vỏ quả.', 'Cả hai tinh tử cùng tạo hai phôi.'], context: 'Ống phấn giải phóng hai tinh tử vào túi phôi.' },
    { correct: 'Tinh tử còn lại kết hợp tế bào trung tâm chứa hai nhân cực, thường tạo nội nhũ tam bội.', wrong: ['Tạo thêm một hợp tử lưỡng bội.', 'Tạo vỏ hạt chỉ từ tinh tử.', 'Không xảy ra dung hợp thứ hai.'], context: 'Sau thụ tinh, mô dinh dưỡng nuôi phôi hình thành trong hạt.' },
    { correct: 'Noãn thường phát triển thành hạt, bầu nhụy thành quả; vỏ hạt có nguồn từ vỏ noãn.', wrong: ['Hạt phấn phát triển thành quả.', 'Nội nhũ phát triển thành vỏ quả.', 'Noãn luôn phát triển thành lá.'], context: 'Sau thụ tinh, bầu lớn lên bao quanh các noãn đã thành hạt.' }
  ]},
  { number: 43, lesson: 26, theme: 'thực hành nhân giống vô tính', representation: 'experiment', facts: [
    { correct: 'Cành giâm cần mô sống, độ ẩm phù hợp và giảm mất nước trong thời gian hình thành rễ.', wrong: ['Phơi khô hoàn toàn cành trước khi giâm.', 'Ngập toàn bộ lá trong nước kéo dài.', 'Dùng cành bệnh để tăng sức đề kháng.'], context: 'Cành giâm được cắt bớt lá và đặt trong giá thể ẩm, thoáng.' },
    { correct: 'Ghép thành công cần tầng mô sống của cành ghép và gốc ghép tiếp xúc tốt, được cố định và hạn chế nhiễm bệnh.', wrong: ['Chỉ cần đặt hai lớp vỏ ngoài cạnh nhau.', 'Không cần tương hợp giữa cành và gốc.', 'Chồi ghép phải được để mất nước nhanh.'], context: 'Mặt cắt được áp sát và quấn kín sau khi khử sạch dụng cụ.' },
    { correct: 'So sánh chất kích rễ cần nhóm đối chứng, dãy nồng độ, cành tương đương và tính tỉ lệ ra rễ trên nhiều mẫu.', wrong: ['Chọn cành ra rễ đẹp nhất làm đại diện.', 'Thay cả giống và nồng độ cùng lúc.', 'Không cần ghi số cành thất bại.'], context: 'Ba mươi cành được chia ngẫu nhiên vào ba nồng độ và một nhóm dung môi.' }
  ]},
  { number: 44, lesson: 26, theme: 'thụ phấn có kiểm soát', representation: 'experiment', facts: [
    { correct: 'Khử nhị hoa mẹ trước khi hạt phấn của hoa đó chín giúp hạn chế tự thụ phấn.', wrong: ['Khử nhụy để hoa mẹ dễ tạo hạt.', 'Khử nhị sau khi quả đã hình thành.', 'Bỏ hết cánh hoa là đủ ngăn tự thụ.'], context: 'Nhà chọn giống dùng hoa lưỡng tính làm cây mẹ trong phép lai.' },
    { correct: 'Bao cách li trước và sau khi đưa phấn mong muốn giúp ngăn nguồn phấn ngoài không kiểm soát.', wrong: ['Mở hoa tự do sau khi khử nhị.', 'Không cần ghi cây bố vì phấn đều giống nhau.', 'Bao kín trước khi khử nhị rồi không thao tác nữa.'], context: 'Hoa mẹ được ghi nhãn ngày, nguồn phấn và bọc túi thoáng thích hợp.' },
    { correct: 'Đối chứng không đưa phấn sau khử nhị giúp phát hiện tự thụ hoặc nhiễm phấn ngoài trong quy trình.', wrong: ['Đối chứng phải được thụ phấn bằng mọi nguồn phấn.', 'Không đậu quả ở đối chứng chứng minh cây bố vô sinh.', 'Một hoa duy nhất đủ đánh giá tỉ lệ đậu hạt.'], context: 'Một nhóm hoa khử nhị và bao cách li nhưng không quét phấn.' }
  ]},
  { number: 45, lesson: 27, theme: 'sinh sản vô tính động vật', representation: 'table', misconceptionId: 'bio11-misc-parthenogenesis-sexual', facts: [
    { correct: 'Phân đôi tạo hai cá thể từ một cơ thể; nảy chồi tạo chồi mới có thể tách ra hoặc tạo tập đoàn.', wrong: ['Phân đôi luôn cần thụ tinh.', 'Nảy chồi chỉ có ở thực vật.', 'Hai hình thức bắt buộc tạo giao tử.'], context: 'Thủy tức hình thành chồi bên lớn dần rồi tách khỏi cơ thể mẹ.' },
    { correct: 'Phân mảnh tạo cá thể từ phần cơ thể khi loài có khả năng tái sinh đầy đủ; tái sinh bộ phận đơn thuần chưa chắc là sinh sản.', wrong: ['Mọi lành vết thương đều tạo cá thể mới.', 'Mọi mảnh của mọi động vật đều sống thành con.', 'Tái sinh chân thằn lằn làm xuất hiện thằn lằn thứ hai.'], context: 'Một mảnh giun dẹp có thể tái tạo phần thiếu thành cơ thể hoàn chỉnh.' },
    { correct: 'Trinh sinh là phát triển cá thể từ trứng không thụ tinh nên được xếp vào sinh sản vô tính.', wrong: ['Có trứng nên bắt buộc là hữu tính.', 'Trinh sinh luôn tạo cá thể lưỡng bội giống mẹ.', 'Trinh sinh không xảy ra ở động vật.'], context: 'Ong đực phát triển từ trứng không thụ tinh.' }
  ]},
  { number: 46, lesson: 27, theme: 'sinh sản hữu tính động vật', representation: 'diagram', facts: [
    { correct: 'Giảm phân tạo giao tử đơn bội; thụ tinh khôi phục bộ nhiễm sắc thể lưỡng bội ở hợp tử.', wrong: ['Nguyên phân tạo giao tử và làm giảm một nửa nhiễm sắc thể.', 'Thụ tinh làm hợp tử thành đơn bội.', 'Giao tử không mang vật chất di truyền.'], context: 'Tinh trùng và trứng đơn bội hợp nhất tạo hợp tử.' },
    { correct: 'Thụ tinh ngoài thường cần môi trường nước và nhiều giao tử; thụ tinh trong tăng xác suất giao tử gặp nhau trong cơ thể cái.', wrong: ['Thụ tinh ngoài luôn có tỉ lệ sống cao hơn.', 'Thụ tinh trong chỉ có ở động vật đẻ con.', 'Cá không thể có thụ tinh trong.'], context: 'Ếch phóng nhiều trứng và tinh trùng vào nước.' },
    { correct: 'Đẻ trứng hay đẻ con mô tả nơi phôi phát triển, không đồng nhất hoàn toàn với thụ tinh ngoài hay trong.', wrong: ['Mọi loài thụ tinh trong đều đẻ con.', 'Mọi loài đẻ trứng đều thụ tinh ngoài.', 'Vỏ trứng chứng minh không có thụ tinh.'], context: 'Chim thụ tinh trong nhưng phôi phát triển tiếp trong trứng ngoài cơ thể mẹ.' }
  ]},
  { number: 47, lesson: 27, theme: 'điều hòa hormone sinh sản', representation: 'diagram', facts: [
    { correct: 'GnRH từ vùng dưới đồi kích thích tuyến yên tiết FSH và LH, tác động lên tuyến sinh dục.', wrong: ['FSH và LH chỉ do tuyến sinh dục tiết.', 'GnRH trực tiếp tạo giao tử mà không qua tuyến yên.', 'Tuyến yên không liên quan sinh sản.'], context: 'Sơ đồ trục dưới đồi–tuyến yên–buồng trứng có các mũi tên hormone.' },
    { correct: 'FSH hỗ trợ phát triển nang trứng; đỉnh LH liên quan rụng trứng và hình thành thể vàng.', wrong: ['FSH trực tiếp gây kinh nguyệt ở mọi thời điểm.', 'LH luôn thấp nhất ngay trước rụng trứng.', 'Thể vàng hình thành trước khi nang phát triển.'], context: 'Giữa chu kì xuất hiện đỉnh hormone tuyến yên ngắn trước rụng trứng.' },
    { correct: 'Hormone sinh dục có thể phản hồi lên dưới đồi và tuyến yên; phản hồi thay đổi theo giai đoạn chu kì.', wrong: ['Phản hồi luôn dương trong cả chu kì.', 'Estrogen và progesterone không ảnh hưởng tuyến yên.', 'Nồng độ hormone không thay đổi theo thời gian.'], context: 'Progesterone cao ở pha hoàng thể góp phần làm giảm FSH và LH.' }
  ]},
  { number: 48, lesson: 27, theme: 'sức khỏe sinh sản', representation: 'table', misconceptionId: 'bio11-misc-contraception-sti', facts: [
    { correct: 'Bao cao su dùng đúng giúp giảm nguy cơ mang thai và nhiều bệnh lây truyền qua đường tình dục, nhưng không bảo vệ tuyệt đối.', wrong: ['Thuốc tránh thai nội tiết ngăn mọi STI.', 'Rửa sau quan hệ là biện pháp tránh thai đáng tin cậy.', 'Không cần sự đồng thuận nếu đã dùng biện pháp.'], context: 'Một cặp đôi cần vừa tránh thai vừa giảm nguy cơ lây nhiễm.' },
    { correct: 'Biện pháp nội tiết chủ yếu tác động rụng trứng, chất nhầy hoặc nội mạc và cần dùng theo hướng dẫn y tế phù hợp.', wrong: ['Thuốc nội tiết tiêu diệt mọi tác nhân gây bệnh.', 'Dùng tùy ý không có chống chỉ định.', 'Thuốc làm mất khả năng sinh sản vĩnh viễn ở mọi người.'], context: 'Người dùng cần tư vấn vì có bệnh nền và đang dùng thuốc khác.' },
    { correct: 'IVF cho trứng và tinh trùng thụ tinh trong phòng thí nghiệm rồi chuyển phôi; quyết định cần tư vấn chuyên môn và đạo đức.', wrong: ['IVF là nhân bản vô tính người.', 'IVF bảo đảm thành công tuyệt đối trong một lần.', 'IVF không liên quan giao tử.'], context: 'Cặp vợ chồng được tư vấn thụ tinh trong ống nghiệm sau đánh giá vô sinh.' }
  ]}
];

const roles: PracticeRole[] = ['guided', 'misconception_check', 'near_transfer', 'far_transfer', 'representation_switch', 'retention'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'medium', 'medium', 'hard', 'hard', 'easy'];
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const stem = (theme: string, fact: FactSeed, variant: number, representation: QuestionRepresentationType) => {
  if (variant === 0) return `Xét tình huống: ${fact.context} Chọn nhận định đúng về ${theme}.`;
  if (variant === 1) return `Một học sinh nói: “${fact.wrong[0]}” Cách sửa nào chính xác nhất?`;
  if (variant === 2) return `Từ dữ kiện “${fact.context}”, kết luận nào về ${theme} có căn cứ?`;
  if (variant === 3) return `${fact.context} Cơ chế hoặc cách giải thích nào phù hợp nhất?`;
  if (variant === 4) return `Phân tích biểu diễn dạng ${representation}: ${fact.context} Kết luận nào không vượt quá bằng chứng?`;
  return `Ôn lại tình huống “${fact.context}”, ý nào về ${theme} cần ghi nhớ?`;
};

export const g11BiologyModule4Questions: CourseQuestion[] = typeSeeds.flatMap((typeSeed, typeIndex) =>
  typeSeed.facts.flatMap((fact, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const baseOptions = [fact.correct, ...fact.wrong];
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
      const correctIndex = (4 - shift) % 4;
      const id = `bio11-qt${typeSeed.number}`;
      return {
        id: `bio11-m4-qt${typeSeed.number}-q${String(localIndex).padStart(2, '0')}`,
        subjectId: 'biology', courseId: 'grade11:biology', moduleId: 'bio11-m4',
        lessonId: `bio11-kntt-l${typeSeed.lesson}`, topicId: 'bio11-t04', questionTypeId: id,
        content: stem(typeSeed.theme, fact, variant, typeSeed.representation),
        options, correctAnswer: letters[correctIndex], responseType: 'single_choice', validatorType: 'choice',
        difficulty: difficulties[variant], sourceType: 'manual', outcomeIds: [`out-bio11-${typeSeed.number}`],
        subTypeId: `${id}-${variant <= 2 ? 'st-concept' : 'st-application'}`,
        practiceRole: roles[variant], representationType: variant === 4 ? typeSeed.representation : 'text',
        misconceptionId: variant === 1 ? typeSeed.misconceptionId : undefined,
        isMasteryHoldout: variant === 5 || (factIndex === 0 && variant === 4),
        cognitiveLevel: variant <= 1 ? 'recognition' : variant <= 3 ? 'understanding' : 'application',
        estimatedSeconds: variant >= 3 ? 100 : 65
      };
    })
  )
);
