import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
interface FactSeed { correct: string; wrong: [string, string, string]; context: string; }
interface TypeSeed {
  number: number;
  lesson: number;
  theme: string;
  representation: QuestionRepresentationType;
  misconceptionId?: string;
  facts: [FactSeed, FactSeed, FactSeed];
}

const typeSeeds: TypeSeed[] = [
  {
    number: 30, lesson: 19, theme: 'sinh trưởng và phát triển', representation: 'diagram',
    misconceptionId: 'bio11-misc-growth-development-same',
    facts: [
      { correct: 'Sinh trưởng là sự tăng không thuận nghịch về kích thước và khối lượng do tăng số lượng hoặc kích thước tế bào.', wrong: ['Sinh trưởng chỉ là thay đổi hình dạng mà không tăng vật chất.', 'Mọi tăng khối lượng tạm thời do uống nước đều là sinh trưởng.', 'Sinh trưởng chỉ xảy ra sau khi cơ thể trưởng thành.'], context: 'Cây non tăng chiều cao và sinh khối khô qua nhiều tuần.' },
      { correct: 'Phát triển bao gồm phân hóa tế bào, phát sinh hình thái và chuyển đổi chức năng qua vòng đời.', wrong: ['Phát triển chỉ là tăng số kilogram của cơ thể.', 'Phát triển không liên quan đến sinh trưởng.', 'Phát triển kết thúc ngay sau lần phân bào đầu tiên.'], context: 'Chồi sinh dưỡng chuyển thành chồi hoa với cấu trúc và chức năng mới.' },
      { correct: 'Sinh trưởng tạo cơ sở vật chất cho phát triển, còn phát triển có thể làm thay đổi tốc độ và kiểu sinh trưởng.', wrong: ['Hai quá trình luôn có tốc độ bằng nhau.', 'Chỉ sinh trưởng mới chịu ảnh hưởng môi trường.', 'Có thể dùng một số đo chiều dài để mô tả đầy đủ mọi phát triển.'], context: 'Nòng nọc vừa tăng kích thước vừa hình thành chân và tiêu giảm đuôi.' }
    ]
  },
  {
    number: 31, lesson: 20, theme: 'mô phân sinh và kiểu sinh trưởng', representation: 'diagram',
    misconceptionId: 'bio11-misc-secondary-all-plants',
    facts: [
      { correct: 'Mô phân sinh đỉnh ở chồi và rễ tạo sinh trưởng sơ cấp, làm cơ quan dài ra.', wrong: ['Mô phân sinh đỉnh chỉ làm thân tăng đường kính.', 'Mô phân sinh đỉnh gồm toàn tế bào đã biệt hóa.', 'Cắt đỉnh rễ làm rễ dài nhanh hơn ngay lập tức.'], context: 'Các tế bào ngay sau đỉnh rễ phân chia rồi kéo dài và biệt hóa.' },
      { correct: 'Tầng sinh mạch và tầng sinh bần là mô phân sinh bên góp phần làm thân, rễ tăng đường kính.', wrong: ['Mô phân sinh bên tạo lá mới ở đỉnh chồi.', 'Tầng sinh mạch chỉ có ở mọi cây một lá mầm.', 'Sinh trưởng thứ cấp làm cơ quan ngắn dần.'], context: 'Thân cây gỗ hình thành thêm gỗ thứ cấp và libe thứ cấp mỗi mùa.' },
      { correct: 'Vòng năm có thể phản ánh hoạt động tầng sinh mạch theo mùa nhưng việc xác định tuổi cần xét vòng giả và điều kiện sống.', wrong: ['Mỗi vòng màu bất kì luôn chính xác bằng mười năm.', 'Vòng năm do mô phân sinh đỉnh tạo ra.', 'Không thể dùng lát cắt thân để thu thập thông tin sinh trưởng.'], context: 'Một lát cắt có các dải gỗ sớm–gỗ muộn nhưng cây từng chịu hai đợt hạn trong năm.' }
    ]
  },
  {
    number: 32, lesson: 20, theme: 'hormone thực vật', representation: 'table',
    misconceptionId: 'bio11-misc-hormone-one-effect',
    facts: [
      { correct: 'Auxin do chồi non tạo ra có thể duy trì ưu thế ngọn và kích thích kéo dài tế bào ở nồng độ phù hợp.', wrong: ['Auxin luôn ức chế mọi mô ở mọi nồng độ.', 'Auxin chỉ được tạo ở rễ già.', 'Auxin là chất dinh dưỡng cung cấp trực tiếp năng lượng.'], context: 'Khi chồi ngọn còn nguyên, nhiều chồi nách sinh trưởng yếu.' },
      { correct: 'Gibberellin thường thúc đẩy kéo dài thân và nảy mầm; cytokinin thúc đẩy phân chia tế bào và có thể làm chậm già hóa lá.', wrong: ['Gibberellin là tín hiệu chính gây đóng khí khổng khi hạn.', 'Cytokinin luôn làm quả chín nhanh.', 'Hai hormone luôn có tác động giống ethylene.'], context: 'Hạt xử lí gibberellin nảy mầm sớm hơn, mô nuôi cấy có cytokinin tạo nhiều chồi.' },
      { correct: 'Ethylene thường thúc đẩy chín quả; abscisic acid liên quan ngủ nghỉ và đóng khí khổng khi thiếu nước.', wrong: ['Ethylene chỉ có ở dạng rắn trong mạch gỗ.', 'Abscisic acid luôn kích thích hạt nảy mầm.', 'Mọi hormone thực vật đều chỉ thúc đẩy sinh trưởng.'], context: 'Chuối chín làm quả bên cạnh chín nhanh, còn cây hạn tăng tín hiệu đóng khí khổng.' }
    ]
  },
  {
    number: 33, lesson: 20, theme: 'dữ liệu sinh trưởng thực vật', representation: 'graph',
    facts: [
      { correct: 'Tốc độ sinh trưởng trong một khoảng được ước lượng bằng mức tăng đại lượng chia cho thời gian của khoảng đó.', wrong: ['Chỉ cần giá trị cuối mà không cần giá trị đầu.', 'Đường cong càng cao luôn có độ dốc càng lớn.', 'Tốc độ sinh trưởng không có đơn vị.'], context: 'Chiều cao cây tăng từ 12 cm lên 24 cm trong 6 ngày.' },
      { correct: 'Một yếu tố chỉ làm tăng sinh trưởng đến vùng thích hợp; vượt ngưỡng có thể không tăng thêm hoặc gây ức chế.', wrong: ['Tăng nhiệt độ luôn làm sinh trưởng tăng vô hạn.', 'Yếu tố giới hạn không thay đổi theo điều kiện.', 'Một điểm đo đủ xác định toàn bộ đường đáp ứng.'], context: 'Sinh khối tăng từ 20°C đến 28°C nhưng giảm rõ ở 38°C.' },
      { correct: 'Muốn quy khác biệt cho phân bón cần giữ giống, nước, ánh sáng, đất và thời gian đo tương đương giữa các nhóm.', wrong: ['Có thể dùng giống khác nhau mà vẫn kết luận riêng do phân bón.', 'Chỉ chọn cây lớn nhất mỗi nhóm là đủ.', 'Không cần lặp lại vì cây cùng loài luôn giống hệt nhau.'], context: 'Nhóm A và B dùng hai mức phân bón nhưng nhóm B đồng thời được tưới nhiều hơn.' }
    ]
  },
  {
    number: 34, lesson: 21, theme: 'điều khiển sinh trưởng thực vật', representation: 'experiment',
    misconceptionId: 'bio11-misc-pruning-feeds-fruit',
    facts: [
      { correct: 'Bấm chồi ngọn làm giảm ưu thế ngọn, từ đó chồi bên có điều kiện phát triển mạnh hơn.', wrong: ['Bấm ngọn làm mọi mô phân sinh ngừng vĩnh viễn.', 'Bấm ngọn bổ sung trực tiếp cytokinin từ dụng cụ.', 'Bấm ngọn chỉ có tác dụng vì lá nhận thêm carbon dioxide.'], context: 'Sau khi loại chồi ngọn, số cành bên tăng so với cây đối chứng.' },
      { correct: 'Thí nghiệm hormone cần dãy nồng độ, nhóm dung môi đối chứng, số mẫu đủ và cùng giai đoạn phát triển.', wrong: ['Chỉ dùng một cây ở nồng độ cao nhất.', 'Thay đồng thời hormone, nhiệt độ và giống.', 'Không cần đối chứng vì đã biết tên hormone.'], context: 'Nhóm khảo sát auxin lên ra rễ của cành giâm ở bốn nồng độ.' },
      { correct: 'Tỉa cành hợp lí có thể cải thiện ánh sáng, thông khí và phân bổ nguồn lực nhưng mức tỉa phụ thuộc loài, mùa và mục tiêu.', wrong: ['Cắt càng nhiều cành thì năng suất luôn càng cao.', 'Tỉa cành không thể ảnh hưởng quang hợp.', 'Một quy trình tỉa phù hợp mọi cây và mọi thời điểm.'], context: 'Vườn cây quá rậm có lá trong tán nhận ít ánh sáng và dễ ẩm kéo dài.' }
    ]
  },
  {
    number: 35, lesson: 22, theme: 'các kiểu phát triển động vật', representation: 'diagram',
    misconceptionId: 'bio11-misc-molting-metamorphosis',
    facts: [
      { correct: 'Phát triển không qua biến thái có con non mang đặc điểm hình thái cơ bản gần giống con trưởng thành.', wrong: ['Con non bắt buộc có giai đoạn nhộng.', 'Con non không tăng kích thước.', 'Chỉ động vật đẻ con mới phát triển trực tiếp.'], context: 'Gà con có sơ đồ cơ thể gần giống gà trưởng thành nhưng nhỏ và chưa thành thục.' },
      { correct: 'Biến thái không hoàn toàn thường theo chuỗi trứng–con non–trưởng thành và không có giai đoạn nhộng.', wrong: ['Con non hoàn toàn không giống trưởng thành và luôn sống khác môi trường.', 'Có bắt buộc giai đoạn nhộng bất động.', 'Không xảy ra lột xác.'], context: 'Châu chấu non qua nhiều lần lột xác rồi thành con trưởng thành.' },
      { correct: 'Biến thái hoàn toàn có ấu trùng khác rõ trưởng thành và có giai đoạn nhộng tái tổ chức cơ thể.', wrong: ['Chỉ gồm trứng và trưởng thành.', 'Ấu trùng là bản thu nhỏ hoàn chỉnh của trưởng thành.', 'Nhộng là trứng chưa nở.'], context: 'Vòng đời bướm gồm trứng, sâu bướm, nhộng và bướm trưởng thành.' }
    ]
  },
  {
    number: 36, lesson: 22, theme: 'hormone điều hòa phát triển động vật', representation: 'diagram',
    facts: [
      { correct: 'Growth hormone hỗ trợ sinh trưởng qua tác động lên chuyển hóa và các mô; thừa hoặc thiếu kéo dài gây rối loạn.', wrong: ['Growth hormone chỉ tác động lên màu da.', 'Càng nhiều growth hormone càng tốt ở mọi tuổi.', 'Hormone này thay thế hoàn toàn dinh dưỡng.'], context: 'Trẻ thiếu hormone tăng trưởng do bệnh tuyến yên có tốc độ cao chậm bất thường.' },
      { correct: 'Thyroxine cần cho biến thái nòng nọc; thiếu hormone tuyến giáp có thể làm chậm quá trình này.', wrong: ['Thyroxine duy trì vĩnh viễn dạng nòng nọc.', 'Thyroxine chỉ gây lột xác ở côn trùng.', 'Biến thái lưỡng cư hoàn toàn không chịu điều hòa nội tiết.'], context: 'Nòng nọc thiếu chức năng tuyến giáp kéo dài giai đoạn ấu trùng.' },
      { correct: 'Ecdysone khởi phát lột xác; juvenile hormone cao giúp lần lột xác còn giữ đặc điểm ấu trùng.', wrong: ['Juvenile hormone cao luôn tạo trưởng thành ngay.', 'Ecdysone ngăn mọi lần lột xác.', 'Hai hormone không tương tác trong biến thái.'], context: 'Ở côn trùng, ecdysone tăng khi juvenile hormone còn cao dẫn đến một tuổi ấu trùng mới.' }
    ]
  },
  {
    number: 37, lesson: 22, theme: 'yếu tố ảnh hưởng sinh trưởng động vật', representation: 'table',
    misconceptionId: 'bio11-misc-growth-hormone-safe',
    facts: [
      { correct: 'Dinh dưỡng cân đối cung cấp năng lượng, amino acid, vitamin và khoáng cần cho sinh trưởng; thừa năng lượng không đồng nghĩa phát triển khỏe mạnh.', wrong: ['Chỉ cần tăng đường là đủ cho mọi mô.', 'Protein không liên quan tạo mô mới.', 'Khẩu phần càng nhiều luôn càng an toàn.'], context: 'Hai nhóm vật nuôi có cùng năng lượng nhưng nhóm thiếu protein tăng khối lượng nạc kém.' },
      { correct: 'Động vật biến nhiệt chịu ảnh hưởng rõ của nhiệt độ môi trường vì nhiệt độ chi phối tốc độ phản ứng và hoạt động.', wrong: ['Nhiệt độ không ảnh hưởng enzyme của động vật biến nhiệt.', 'Nhiệt độ càng cao luôn càng tốt.', 'Mọi loài có cùng khoảng nhiệt tối ưu.'], context: 'Cá nuôi tăng trưởng tốt trong một khoảng nhiệt nhưng giảm ăn khi quá lạnh hoặc quá nóng.' },
      { correct: 'Can thiệp hormone cần chẩn đoán và giám sát chuyên môn; không dùng tùy tiện để tăng chiều cao hay tốc độ lớn.', wrong: ['Hormone bán trên mạng luôn an toàn nếu dùng ít.', 'Hormone có thể thay thế giấc ngủ và dinh dưỡng.', 'Không cần xét giai đoạn phát triển.'], context: 'Một học sinh khỏe mạnh định tự mua hormone tăng trưởng để cao nhanh.' }
    ]
  },
  {
    number: 38, lesson: 23, theme: 'thực hành quan sát biến thái', representation: 'experiment',
    facts: [
      { correct: 'Cần định nghĩa từng giai đoạn bằng dấu hiệu quan sát được như chân, đuôi, cánh hoặc nhộng thay vì chỉ dựa kích thước.', wrong: ['Cá thể lớn nhất luôn là trưởng thành.', 'Có thể gán giai đoạn theo cảm giác.', 'Màu sắc là dấu hiệu duy nhất cho mọi loài.'], context: 'Nhóm theo dõi nòng nọc và ghi sự xuất hiện chân sau, chân trước, mức tiêu đuôi.' },
      { correct: 'Quan sát nhiều cá thể theo lịch cố định giúp ước lượng thời lượng giai đoạn và nhận diện biến thiên cá thể.', wrong: ['Một cá thể đủ đại diện mọi điều kiện.', 'Chỉ ghi lúc có thay đổi thú vị.', 'Không cần ghi ngày và nhiệt độ.'], context: 'Mỗi ngày nhóm chụp ảnh 20 cá thể cùng điều kiện và lập bảng giai đoạn.' },
      { correct: 'Nếu hai nhóm khác cả nhiệt độ lẫn thức ăn, dữ liệu không tách được tác động riêng của nhiệt độ.', wrong: ['Có thể kết luận chắc chắn do nhiệt độ.', 'Thức ăn không thể ảnh hưởng phát triển.', 'Không cần nhóm đối chứng khi quan sát vòng đời.'], context: 'Nhóm ấm được cho nhiều thức ăn hơn nhóm mát và hoàn tất biến thái sớm hơn.' }
    ]
  }
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

export const g11BiologyModule3Questions: CourseQuestion[] = typeSeeds.flatMap((typeSeed, typeIndex) =>
  typeSeed.facts.flatMap((fact, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const baseOptions = [fact.correct, ...fact.wrong];
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
      const correctIndex = (4 - shift) % 4;
      const id = `bio11-qt${typeSeed.number}`;
      return {
        id: `bio11-m3-qt${typeSeed.number}-q${String(localIndex).padStart(2, '0')}`,
        subjectId: 'biology',
        courseId: 'grade11:biology',
        moduleId: 'bio11-m3',
        lessonId: `bio11-kntt-l${typeSeed.lesson}`,
        topicId: 'bio11-t03',
        questionTypeId: id,
        content: stem(typeSeed.theme, fact, variant, typeSeed.representation),
        options,
        correctAnswer: letters[correctIndex],
        responseType: 'single_choice',
        validatorType: 'choice',
        difficulty: difficulties[variant],
        sourceType: 'manual',
        outcomeIds: [`out-bio11-${typeSeed.number}`],
        subTypeId: `${id}-${variant <= 2 ? 'st-concept' : 'st-application'}`,
        practiceRole: roles[variant],
        representationType: variant === 4 ? typeSeed.representation : 'text',
        misconceptionId: variant === 1 ? typeSeed.misconceptionId : undefined,
        isMasteryHoldout: variant === 5 || (factIndex === 0 && variant === 4),
        cognitiveLevel: variant <= 1 ? 'recognition' : variant <= 3 ? 'understanding' : 'application',
        estimatedSeconds: variant >= 3 ? 100 : 65
      };
    })
  )
);
