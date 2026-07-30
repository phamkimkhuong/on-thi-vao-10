import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
interface FactSeed { correct: string; wrong: [string, string, string]; context: string; }
interface TypeSeed {
  number: number;
  lesson: number;
  theme: string;
  representation: QuestionRepresentationType;
  facts: [FactSeed, FactSeed, FactSeed];
}

const typeSeeds: TypeSeed[] = [
  {
    number: 21, lesson: 14, theme: 'chuỗi cảm ứng ở sinh vật', representation: 'diagram',
    facts: [
      { correct: 'Cảm ứng gồm tiếp nhận kích thích, xử lí thông tin và tạo đáp ứng phù hợp.', wrong: ['Cảm ứng chỉ là vận động nhìn thấy bằng mắt.', 'Chỉ sinh vật có não mới cảm ứng.', 'Mọi đáp ứng đều xảy ra ngay và giống nhau.'], context: 'Rễ nhận biết vùng đất ẩm và thay đổi hướng sinh trưởng về phía đó.' },
      { correct: 'Thụ thể phải phù hợp với loại kích thích và chuyển kích thích thành tín hiệu sinh học.', wrong: ['Mọi thụ thể nhận mọi kích thích hiệu quả như nhau.', 'Thụ thể luôn chính là cơ quan thực hiện đáp ứng.', 'Kích thích không cần được chuyển thành tín hiệu.'], context: 'Tế bào cảm thụ ánh sáng phản ứng với ánh sáng nhưng không trực tiếp co cơ.' },
      { correct: 'Đáp ứng giúp sinh vật điều chỉnh hoạt động, tăng khả năng tồn tại và sinh sản trong môi trường biến đổi.', wrong: ['Mọi đáp ứng đều có lợi trong mọi hoàn cảnh.', 'Cảm ứng không liên quan thích nghi.', 'Đáp ứng chỉ có chức năng tạo chuyển động.'], context: 'Khí khổng đóng khi cây thiếu nước, làm giảm mất nước nhưng cũng hạn chế nhận CO2.' }
    ]
  },
  {
    number: 22, lesson: 15, theme: 'hướng động ở thực vật', representation: 'diagram',
    facts: [
      { correct: 'Hướng động là vận động sinh trưởng có hướng phụ thuộc hướng của tác nhân kích thích.', wrong: ['Hướng động không liên quan sinh trưởng.', 'Hướng động có chiều đáp ứng không phụ thuộc tác nhân.', 'Mọi hướng động đều hướng về tác nhân.'], context: 'Chồi cây cong dần về cửa sổ có ánh sáng chiếu từ một phía.' },
      { correct: 'Hướng động dương là sinh trưởng về phía tác nhân, hướng động âm là tránh xa tác nhân.', wrong: ['Dương luôn có lợi và âm luôn có hại.', 'Dương là cơ quan đi xuống, âm là đi lên.', 'Chỉ rễ mới có hướng động dương.'], context: 'Rễ chính sinh trưởng theo chiều trọng lực còn chồi chính sinh trưởng ngược chiều trọng lực.' },
      { correct: 'Cùng tín hiệu auxin có thể gây đáp ứng khác ở rễ và chồi vì độ nhạy và tác động lên kéo dài tế bào khác nhau.', wrong: ['Auxin luôn ức chế mọi tế bào chồi.', 'Rễ và chồi phản ứng giống hệt ở mọi nồng độ auxin.', 'Hướng sáng không liên quan sinh trưởng không đều.'], context: 'Ánh sáng một phía làm auxin phân bố lệch; phía tối chồi kéo dài mạnh hơn và chồi cong về sáng.' }
    ]
  },
  {
    number: 23, lesson: 15, theme: 'ứng động ở thực vật', representation: 'diagram',
    facts: [
      { correct: 'Ứng động có hướng đáp ứng không phụ thuộc hướng đến của tác nhân kích thích.', wrong: ['Ứng động luôn hướng về tác nhân.', 'Ứng động chỉ có ở rễ.', 'Ứng động không bao giờ liên quan sinh trưởng.'], context: 'Hoa nở khi đủ ánh sáng bất kể nguồn sáng nằm bên trái hay bên phải.' },
      { correct: 'Ứng động không sinh trưởng thường do thay đổi sức trương nước và có thể diễn ra nhanh, thuận nghịch.', wrong: ['Ứng động nhanh luôn do tế bào phân chia.', 'Sức trương nước không thể thay đổi vận động lá.', 'Mọi ứng động đều không thể đảo ngược.'], context: 'Lá trinh nữ khép nhanh khi chạm rồi mở lại sau một thời gian.' },
      { correct: 'Ứng động sinh trưởng do tốc độ sinh trưởng không đều giữa hai phía của cơ quan.', wrong: ['Ứng động sinh trưởng chỉ do co cơ.', 'Không có hormone tham gia ứng động sinh trưởng.', 'Ứng động sinh trưởng luôn hoàn thành trong vài giây.'], context: 'Cánh hoa mở và khép theo điều kiện môi trường nhờ sinh trưởng khác nhau ở hai phía.' }
    ]
  },
  {
    number: 24, lesson: 16, theme: 'thực hành cảm ứng thực vật', representation: 'experiment',
    facts: [
      { correct: 'Thí nghiệm hướng sáng cần các chậu tương đương và chỉ thay đổi hướng chiếu sáng.', wrong: ['Một chậu thiếu nước, một chậu đủ nước giúp kiểm tra riêng ánh sáng.', 'Không cần đối chứng trong hộp tối.', 'Dùng hai loài cây khác nhau làm hai nhóm là tốt nhất.'], context: 'Hai nhóm cây cùng tuổi được đặt trong hộp giống nhau, một hộp có khe sáng bên và một hộp chiếu đều.' },
      { correct: 'Góc cong hoặc hướng sinh trưởng được đo lặp lại là dữ liệu tốt hơn mô tả “cây đẹp hơn”.', wrong: ['Chỉ cần chụp một cây thuận lợi nhất.', 'Cảm nhận chủ quan chính xác hơn số đo.', 'Không cần xác định thời điểm đo.'], context: 'Học sinh đo góc cong của mười cây sau mỗi 12 giờ.' },
      { correct: 'Kết luận nhân quả chỉ đáng tin khi biến gây nhiễu được kiểm soát và kết quả lặp lại.', wrong: ['Thay đồng thời ánh sáng, nước, đất giúp xác định nguyên nhân.', 'Một lần quan sát đủ khẳng định cho mọi loài.', 'Có thể loại mọi cây không cong mà không nêu lí do.'], context: 'Ba lần lặp cho cùng xu hướng trong khi nhiệt độ và lượng nước được giữ như nhau.' }
    ]
  },
  {
    number: 25, lesson: 17, theme: 'hệ thần kinh và cung phản xạ', representation: 'diagram',
    facts: [
      { correct: 'Mức độ tập trung hóa thần kinh tăng từ dạng lưới đến chuỗi hạch rồi dạng ống.', wrong: ['Hệ dạng lưới tập trung hóa cao nhất.', 'Chuỗi hạch không có neuron liên kết.', 'Dạng ống chỉ có ở côn trùng.'], context: 'Động vật có đầu hóa rõ thường tập trung nhiều neuron và cơ quan cảm giác ở phía đầu.' },
      { correct: 'Cung phản xạ gồm thụ thể, neuron cảm giác, trung ương, neuron vận động và cơ quan đáp ứng.', wrong: ['Neuron vận động truyền tín hiệu từ thụ thể về trung ương.', 'Cơ quan đáp ứng luôn là một neuron.', 'Phản xạ không cần thụ thể.'], context: 'Chạm vật nóng làm thụ thể da phát tín hiệu về tủy sống rồi cơ tay co.' },
      { correct: 'Nhiều phản xạ bảo vệ được xử lí nhanh mà không cần chờ ý thức chủ động.', wrong: ['Mọi phản xạ đều phải được suy nghĩ trước.', 'Phản xạ không liên quan hệ thần kinh trung ương.', 'Đáp ứng phản xạ luôn chậm hơn hành động có ý thức.'], context: 'Tay rút khỏi vật nóng trước khi người đó mô tả rõ cảm giác đau.' }
    ]
  },
  {
    number: 26, lesson: 17, theme: 'điện thế màng và xung thần kinh', representation: 'graph',
    facts: [
      { correct: 'Điện thế nghỉ liên quan phân bố ion không đều, tính thấm chọn lọc và hoạt động duy trì gradient của bơm Na+/K+.', wrong: ['Na+ có nồng độ cao hơn hẳn bên trong neuron khi nghỉ.', 'Màng thấm như nhau với mọi ion.', 'Điện thế nghỉ không cần duy trì gradient ion.'], context: 'Khi nghỉ, mặt trong màng neuron âm tương đối so với mặt ngoài.' },
      { correct: 'Khi kích thích đạt ngưỡng, điện thế hoạt động tuân theo nguyên tắc tất cả hoặc không.', wrong: ['Kích thích mạnh luôn làm biên độ mỗi điện thế hoạt động tăng vô hạn.', 'Kích thích dưới ngưỡng tạo điện thế hoạt động hoàn chỉnh.', 'Điện thế hoạt động chỉ gồm một pha không đổi.'], context: 'Hai kích thích trên ngưỡng khác cường độ tạo các xung có biên độ gần giống nhưng tần số có thể khác.' },
      { correct: 'Bao myelin làm xung lan truyền kiểu nhảy cóc giữa các eo Ranvier, tăng tốc độ truyền.', wrong: ['Bao myelin làm ion đi qua mọi vị trí màng nhiều hơn.', 'Xung chỉ truyền trong phần myelin và bỏ qua eo Ranvier.', 'Mất myelin luôn làm truyền xung nhanh hơn.'], context: 'Sợi trục có myelin dẫn truyền nhanh dù điện thế hoạt động chủ yếu tái tạo tại các eo.' }
    ]
  },
  {
    number: 27, lesson: 17, theme: 'synapse hóa học', representation: 'diagram',
    facts: [
      { correct: 'Điện thế hoạt động đến cúc synapse mở kênh Ca2+, kích thích túi giải phóng chất trung gian.', wrong: ['Na+ ngoài khe tự tạo chất trung gian.', 'Túi synapse nằm chủ yếu ở màng sau.', 'Chất trung gian được giải phóng trước khi xung đến.'], context: 'Chặn kênh Ca2+ ở màng trước làm lượng chất trung gian giải phóng giảm mạnh.' },
      { correct: 'Chất trung gian khuếch tán qua khe và gắn thụ thể màng sau, làm thay đổi tính thấm ion.', wrong: ['Chất trung gian đi thẳng vào nhân neuron sau.', 'Thụ thể đặc hiệu nằm duy nhất ở màng trước.', 'Khe synapse truyền tín hiệu bằng dòng máu.'], context: 'Một thuốc chiếm thụ thể màng sau làm tín hiệu không tạo đáp ứng bình thường.' },
      { correct: 'Synapse hóa học truyền chủ yếu một chiều do túi chất trung gian ở trước và thụ thể ở sau.', wrong: ['Chất trung gian luôn truyền hai chiều như dòng điện trong dây.', 'Tính một chiều do khe synapse không có dịch.', 'Màng sau chủ động phóng túi ngược về màng trước.'], context: 'Kích thích neuron sau không làm các túi ở đầu tận cùng neuron trước tự giải phóng theo chiều ngược.' }
    ]
  },
  {
    number: 28, lesson: 18, theme: 'tập tính bẩm sinh và học được', representation: 'text',
    facts: [
      { correct: 'Tập tính bẩm sinh có nền tảng di truyền, thường mang tính khuôn mẫu và xuất hiện không cần học đầy đủ.', wrong: ['Tập tính bẩm sinh chỉ hình thành sau huấn luyện.', 'Mọi cá thể biểu hiện bẩm sinh hoàn toàn khác nhau.', 'Tập tính bẩm sinh không chịu ảnh hưởng môi trường.'], context: 'Nhện non có thể giăng lưới đặc trưng dù không được nhện trưởng thành dạy.' },
      { correct: 'Tập tính học được hình thành hoặc biến đổi qua trải nghiệm và thường linh hoạt hơn.', wrong: ['Tập tính học được được mã hóa hoàn chỉnh ngay khi sinh.', 'Học tập không làm thay đổi hành vi.', 'Chỉ con người mới có tập tính học được.'], context: 'Chim dần tránh loại thức ăn có màu từng gây khó chịu.' },
      { correct: 'Nhiều tập tính là kết quả phối hợp giữa nền tảng bẩm sinh và điều chỉnh do học tập.', wrong: ['Mọi tập tính phải hoàn toàn thuộc một trong hai nhóm.', 'Có học tập thì yếu tố di truyền không còn vai trò.', 'Tập tính phức tạp luôn hoàn toàn bẩm sinh.'], context: 'Chim có xu hướng hót bẩm sinh nhưng cần nghe đồng loại để hoàn thiện bài hót.' }
    ]
  },
  {
    number: 29, lesson: 18, theme: 'quan sát và ứng dụng tập tính', representation: 'table',
    facts: [
      { correct: 'Ethogram mô tả hành vi bằng tiêu chí quan sát được, tránh gán ý định hoặc cảm xúc không có bằng chứng.', wrong: ['Ethogram nên ghi “con vật buồn” mà không mô tả biểu hiện.', 'Mô tả hành vi không cần định nghĩa rõ.', 'Người quan sát có thể đổi tiêu chí giữa chừng tùy ý.'], context: 'Thay vì ghi “lo lắng”, nhóm ghi số lần đi vòng, thời gian ẩn nấp và tiếng kêu.' },
      { correct: 'Lấy mẫu theo khoảng thời gian cố định phù hợp để ước lượng tỉ lệ thời gian dành cho các hành vi.', wrong: ['Chỉ quan sát lúc hành vi thú vị nhất vẫn đại diện cả ngày.', 'Không cần ghi tổng thời gian quan sát.', 'Một cá thể luôn đại diện mọi cá thể của loài.'], context: 'Cứ mỗi hai phút, nhóm ghi hành vi đang xảy ra trong suốt một giờ.' },
      { correct: 'Ứng dụng tập tính phải xét phúc lợi động vật và tránh biện pháp gây đau, stress không cần thiết.', wrong: ['Hiệu quả sản xuất là tiêu chí duy nhất.', 'Có thể gây stress kéo dài vì động vật không có đáp ứng.', 'Huấn luyện không cần củng cố phù hợp.'], context: 'Thiết kế chuồng dựa trên hành vi bầy đàn, nơi trú ẩn và nhịp hoạt động tự nhiên.' }
    ]
  }
];

const roles: PracticeRole[] = ['guided', 'misconception_check', 'near_transfer', 'far_transfer', 'representation_switch', 'retention'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'medium', 'medium', 'hard', 'hard', 'easy'];
const letters: Choice[] = ['A', 'B', 'C', 'D'];

const stem = (theme: string, fact: FactSeed, variant: number, representation: QuestionRepresentationType) => {
  if (variant === 0) return `Xét tình huống: ${fact.context} Chọn nhận định đúng về ${theme}.`;
  if (variant === 1) return `Một học sinh phát biểu: “${fact.wrong[0]}” Cách sửa nào chính xác nhất?`;
  if (variant === 2) return `Từ dữ kiện “${fact.context}”, kết luận nào về ${theme} có căn cứ chính xác?`;
  if (variant === 3) return `${fact.context} Nhận định nào giải thích phù hợp nhất?`;
  if (variant === 4) return `Khi phân tích dữ liệu dạng ${representation} trong tình huống sau: ${fact.context} Kết luận nào không vượt quá bằng chứng?`;
  return `Ôn lại tình huống “${fact.context}”, ý cốt lõi nào về ${theme} cần được ghi nhớ?`;
};

export const g11BiologyModule2Questions: CourseQuestion[] = typeSeeds.flatMap((typeSeed, typeIndex) =>
  typeSeed.facts.flatMap((fact, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const baseOptions = [fact.correct, ...fact.wrong];
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
      const correctIndex = (4 - shift) % 4;
      const typeId = `bio11-qt${typeSeed.number}`;
      return {
        id: `bio11-m2-qt${typeSeed.number}-q${String(localIndex).padStart(2, '0')}`,
        subjectId: 'biology',
        courseId: 'grade11:biology',
        moduleId: 'bio11-m2',
        lessonId: `bio11-kntt-l${typeSeed.lesson}`,
        topicId: 'bio11-t02',
        questionTypeId: typeId,
        content: stem(typeSeed.theme, fact, variant, typeSeed.representation),
        options,
        correctAnswer: letters[correctIndex],
        responseType: 'single_choice',
        validatorType: 'choice',
        difficulty: difficulties[variant],
        sourceType: 'manual',
        outcomeIds: [`out-bio11-${typeSeed.number}`],
        subTypeId: `${typeId}-${variant < 3 ? 'st-concept' : 'st-application'}`,
        practiceRole: roles[variant],
        representationType: variant === 4 ? typeSeed.representation : 'text',
        isMasteryHoldout: variant === 5 || (factIndex === 0 && variant === 4)
      };
    })
  )
);
