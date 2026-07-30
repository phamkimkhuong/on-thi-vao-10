import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
interface FactSeed { correct: string; wrong: [string, string, string]; context: string; }
interface TypeSeed { number: number; lesson: number; theme: string; representation: QuestionRepresentationType; misconceptionId?: string; facts: [FactSeed, FactSeed, FactSeed]; }

const typeSeeds: TypeSeed[] = [
  { number: 49, lesson: 28, theme: 'cơ thể là hệ thống mở, tự điều chỉnh', representation: 'diagram', misconceptionId: 'bio11-misc-organs-independent', facts: [
    { correct: 'Cơ thể là hệ thống mở vì liên tục trao đổi vật chất, năng lượng và thông tin với môi trường.', wrong: ['Cơ thể sống không nhận hay thải chất.', 'Hệ thống mở nghĩa là không có ranh giới.', 'Chỉ động vật mới trao đổi với môi trường.'], context: 'Cơ thể nhận thức ăn, oxygen, ánh sáng và thải nhiệt, carbon dioxide, chất thải.' },
    { correct: 'Các quá trình sinh lí liên kết bằng dòng chất và tín hiệu; thay đổi một mắt xích có thể tạo hệ quả ở nhiều cơ quan.', wrong: ['Mỗi cơ quan hoạt động độc lập hoàn toàn.', 'Hormone không thể ảnh hưởng nhiều mô.', 'Tuần hoàn không kết nối với hô hấp hay bài tiết.'], context: 'Giảm thông khí làm oxygen máu giảm, tim tăng nhịp và khả năng vận động giảm.' },
    { correct: 'Phản hồi âm làm đáp ứng chống lại sai lệch, giúp đại lượng dao động trong khoảng phù hợp chứ không bất biến tuyệt đối.', wrong: ['Phản hồi âm luôn làm sai lệch tăng thêm.', 'Nội môi phải giữ đúng một con số không đổi.', 'Cơ chế điều hòa không cần thụ thể.'], context: 'Đường huyết tăng kích hoạt đáp ứng làm đường huyết giảm về vùng thích hợp.' }
  ]},
  { number: 50, lesson: 28, theme: 'tích hợp sinh lí thực vật', representation: 'diagram', misconceptionId: 'bio11-misc-plant-photosynthesis-only', facts: [
    { correct: 'Rễ hấp thụ nước, khoáng; mạch gỗ đưa lên lá, nơi carbon dioxide được cố định nhờ ánh sáng.', wrong: ['Lá tự tạo mọi khoáng chất cần thiết.', 'Mạch rây đưa chủ yếu nước từ rễ lên.', 'Carbon dioxide được rễ hút từ đất là nguồn chính.'], context: 'Khi đất khô, khí khổng đóng và quang hợp giảm dù ánh sáng mạnh.' },
    { correct: 'Quang hợp cung cấp chất hữu cơ; hô hấp phân giải chất hữu cơ tạo ATP cho hoạt động của tế bào cả ngày lẫn đêm.', wrong: ['Ban ngày thực vật hoàn toàn không hô hấp.', 'Hô hấp tạo glucose từ carbon dioxide.', 'Quang hợp trực tiếp cấp ATP cho mọi tế bào rễ suốt đêm.'], context: 'Rễ trong tối vẫn cần ATP để vận chuyển ion và sinh trưởng.' },
    { correct: 'Hormone phối hợp nguồn dinh dưỡng và tín hiệu môi trường để điều khiển sinh trưởng, ra hoa, tạo quả và ngủ nghỉ.', wrong: ['Ra hoa chỉ phụ thuộc kích thước cây.', 'Hormone thay thế được nước và khoáng.', 'Sinh sản không liên quan trạng thái dinh dưỡng.'], context: 'Cây thiếu nước tăng tín hiệu đóng khí khổng và có thể giảm tăng trưởng, đậu quả.' }
  ]},
  { number: 51, lesson: 28, theme: 'tích hợp sinh lí động vật', representation: 'diagram', facts: [
    { correct: 'Tiêu hóa cung cấp chất dinh dưỡng, hô hấp cung cấp oxygen, tuần hoàn đưa đến tế bào để hô hấp tạo ATP.', wrong: ['Tế bào nhận trực tiếp thức ăn chưa tiêu hóa từ ruột.', 'Oxygen chỉ cần cho phổi, không cần cho cơ.', 'Tuần hoàn không vận chuyển chất dinh dưỡng.'], context: 'Khi chạy, cơ tăng sử dụng oxygen và glucose nên thông khí, nhịp tim cùng tăng.' },
    { correct: 'Carbon dioxide và chất thải chuyển hóa được máu vận chuyển đến cơ quan thải; thận đồng thời điều chỉnh nước, ion và pH.', wrong: ['Thận chỉ tạo nước mà không liên quan nội môi.', 'Carbon dioxide chủ yếu thải qua ruột.', 'Bài tiết không phụ thuộc tuần hoàn.'], context: 'Mất nước làm giảm thể tích máu và tăng tín hiệu giữ nước ở thận.' },
    { correct: 'Hệ thần kinh tạo đáp ứng nhanh, nội tiết thường điều hòa rộng và kéo dài; hai hệ phối hợp duy trì nội môi và sinh sản.', wrong: ['Thần kinh và nội tiết không bao giờ tương tác.', 'Mọi hormone chỉ tác động một giây.', 'Phản xạ không thể ảnh hưởng hoạt động tuyến.'], context: 'Stress kích hoạt tín hiệu thần kinh và hormone, làm tim nhanh và huy động năng lượng.' }
  ]},
  { number: 52, lesson: 29, theme: 'ngành nghề sinh học cơ thể', representation: 'table', misconceptionId: 'bio11-misc-career-title', facts: [
    { correct: 'Đánh giá nghề cần xem nhiệm vụ hằng ngày, năng lực, lộ trình đào tạo, môi trường làm việc và chuẩn đạo đức.', wrong: ['Chỉ cần tên nghề nghe hấp dẫn.', 'Thu nhập quảng cáo là tiêu chí duy nhất.', 'Mọi nghề sinh học có cùng công việc.'], context: 'Học sinh so sánh kỹ thuật viên xét nghiệm, điều dưỡng thú y và kỹ sư nông nghiệp.' },
    { correct: 'Nguồn tin đáng tin nên đến từ cơ sở đào tạo, hiệp hội nghề, cơ quan quản lí hoặc người đang làm nghề và được đối chiếu chéo.', wrong: ['Một video quảng cáo ẩn danh đủ xác nhận mọi yêu cầu.', 'Không cần kiểm tra ngày cập nhật.', 'Bài đăng nhiều lượt xem luôn là nguồn chính thức.'], context: 'Hai trang đưa thông tin trái nhau về điều kiện hành nghề và thời gian đào tạo.' },
    { correct: 'Nghề liên quan mẫu sinh học, động vật hay người cần tuân thủ an toàn, bảo mật, phúc lợi và giới hạn chuyên môn.', wrong: ['Có thể chia sẻ dữ liệu người bệnh để quảng cáo.', 'Hiệu quả công việc cho phép bỏ an toàn sinh học.', 'Học sinh thực tập có thể tự chẩn đoán và điều trị.'], context: 'Phòng xét nghiệm xử lí mẫu người có thông tin định danh và nguy cơ lây nhiễm.' }
  ]}
];

const roles: PracticeRole[] = ['guided', 'misconception_check', 'near_transfer', 'far_transfer', 'representation_switch', 'retention'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'medium', 'medium', 'hard', 'hard', 'easy'];
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const stem = (theme: string, fact: FactSeed, variant: number, representation: QuestionRepresentationType) => {
  if (variant === 0) return `Xét tình huống: ${fact.context} Chọn nhận định đúng về ${theme}.`;
  if (variant === 1) return `Một học sinh nói: “${fact.wrong[0]}” Cách sửa nào chính xác nhất?`;
  if (variant === 2) return `Từ dữ kiện “${fact.context}”, kết luận nào về ${theme} có căn cứ?`;
  if (variant === 3) return `${fact.context} Chuỗi giải thích nào nối đúng các quá trình?`;
  if (variant === 4) return `Phân tích biểu diễn dạng ${representation}: ${fact.context} Kết luận nào không vượt quá bằng chứng?`;
  return `Ôn lại tình huống “${fact.context}”, ý nào về ${theme} cần ghi nhớ?`;
};

export const g11BiologyModule5Questions: CourseQuestion[] = typeSeeds.flatMap((typeSeed, typeIndex) =>
  typeSeed.facts.flatMap((fact, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const baseOptions = [fact.correct, ...fact.wrong];
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
      const id = `bio11-qt${typeSeed.number}`;
      return {
        id: `bio11-m5-qt${typeSeed.number}-q${String(localIndex).padStart(2, '0')}`,
        subjectId: 'biology', courseId: 'grade11:biology', moduleId: 'bio11-m5',
        lessonId: `bio11-kntt-l${typeSeed.lesson}`, topicId: 'bio11-t05', questionTypeId: id,
        content: stem(typeSeed.theme, fact, variant, typeSeed.representation),
        options, correctAnswer: letters[(4 - shift) % 4], responseType: 'single_choice', validatorType: 'choice',
        difficulty: difficulties[variant], sourceType: 'manual', outcomeIds: [`out-bio11-${typeSeed.number}`],
        subTypeId: `${id}-${variant <= 2 ? 'st-concept' : 'st-application'}`,
        practiceRole: roles[variant], representationType: variant === 4 ? typeSeed.representation : 'text',
        misconceptionId: variant === 1 ? typeSeed.misconceptionId : undefined,
        isMasteryHoldout: variant === 5 || (factIndex === 0 && variant === 4),
        cognitiveLevel: variant <= 1 ? 'recognition' : variant <= 3 ? 'understanding' : 'application',
        estimatedSeconds: variant >= 3 ? 110 : 70
      };
    })
  )
);
