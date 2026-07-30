import type { CourseQuestionType } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';

const seeds = [
  { number: 39, lesson: 24, name: 'So sánh sinh sản vô tính và hữu tính', focus: 'giao tử, thụ tinh, nguồn gene và biến dị', sign: 'Đề hỏi số cá thể bố mẹ, sự có mặt giao tử hoặc mức đa dạng đời con.', mistake: 'Cho rằng con vô tính tuyệt đối giống nhau trong mọi môi trường.', representation: 'table' },
  { number: 40, lesson: 25, name: 'Sinh sản vô tính và nhân giống thực vật', focus: 'cơ quan sinh dưỡng, tính toàn năng, giâm, chiết, ghép, nuôi cấy mô', sign: 'Đề nhắc cây con từ thân, rễ, lá hoặc nhân nhanh giống sạch bệnh.', mistake: 'Đồng nhất nuôi cấy mô với chuyển gene.', representation: 'diagram' },
  { number: 41, lesson: 25, name: 'Hoa, hình thành giao tử và thụ phấn', focus: 'bao phấn, hạt phấn, noãn, túi phôi và đường đi hạt phấn', sign: 'Đề có sơ đồ hoa, hạt phấn trên đầu nhụy hoặc tự thụ, giao phấn.', mistake: 'Đồng nhất thụ phấn với thụ tinh.', representation: 'diagram' },
  { number: 42, lesson: 25, name: 'Thụ tinh kép, hình thành hạt và quả', focus: 'hợp tử, nội nhũ, noãn thành hạt và bầu thành quả', sign: 'Đề hỏi hai tinh tử hoặc nguồn gốc phôi, nội nhũ, vỏ hạt, quả.', mistake: 'Cho rằng thụ tinh kép tạo hai phôi.', representation: 'diagram', hard: true },
  { number: 43, lesson: 26, name: 'Thực hành giâm, chiết và ghép', focus: 'vết cắt, mô tiếp xúc, ẩm, vô trùng, đối chứng và tỉ lệ sống', sign: 'Đề mô tả thao tác nhân giống và số cây ra rễ hoặc sống.', mistake: 'Kết luận từ một cành hoặc thay đồng thời nhiều điều kiện.', representation: 'experiment' },
  { number: 44, lesson: 26, name: 'Thực hành thụ phấn có kiểm soát', focus: 'khử nhị, bao cách li, lấy phấn, thụ phấn và ghi nhãn', sign: 'Đề yêu cầu sắp xếp quy trình lai hoặc xác định nguồn phấn.', mistake: 'Bỏ bước bao cách li hoặc khử nhị ở hoa mẹ lưỡng tính.', representation: 'experiment', hard: true },
  { number: 45, lesson: 27, name: 'Sinh sản vô tính ở động vật', focus: 'phân đôi, nảy chồi, phân mảnh, trinh sinh và tái sinh', sign: 'Đề mô tả con hình thành không có hợp nhất giao tử.', mistake: 'Xếp trinh sinh vào hữu tính chỉ vì có tế bào trứng.', representation: 'table' },
  { number: 46, lesson: 27, name: 'Giao tử, thụ tinh và phát triển phôi', focus: 'phát sinh giao tử, thụ tinh ngoài–trong và bảo vệ phôi', sign: 'Đề có tinh trùng, trứng, môi trường thụ tinh hoặc kiểu đẻ.', mistake: 'Đồng nhất thụ tinh trong với đẻ con.', representation: 'diagram' },
  { number: 47, lesson: 27, name: 'Điều hòa hormone sinh sản', focus: 'GnRH, FSH, LH, hormone sinh dục và phản hồi', sign: 'Đề thay đổi một hormone tuyến yên hoặc buồng trứng và hỏi hệ quả.', mistake: 'Gán FSH, LH một tác dụng giống nhau ở mọi giới.', representation: 'diagram', hard: true },
  { number: 48, lesson: 27, name: 'Sức khỏe sinh sản và hỗ trợ sinh sản', focus: 'cơ chế tránh thai, STI, đồng thuận, IVF và bằng chứng y khoa', sign: 'Đề là tình huống lựa chọn biện pháp, tư vấn hoặc công nghệ hỗ trợ.', mistake: 'Cho rằng mọi biện pháp tránh thai đều phòng STI.', representation: 'table', hard: true }
] as const;

export const g11BiologyModule4QuestionTypes: CourseQuestionType[] = seeds.map(seed => {
  const id = `bio11-qt${seed.number}`;
  const representations: QuestionRepresentationType[] = ['text', seed.representation as QuestionRepresentationType];
  return {
    id,
    topicId: 'bio11-t04',
    courseId: 'grade11:biology',
    moduleId: 'bio11-m4',
    lessonIds: [`bio11-kntt-l${seed.lesson}`],
    outcomeIds: [`out-bio11-${seed.number}`],
    name: seed.name,
    slug: seed.name.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: `Nhận diện, giải thích và vận dụng ${seed.focus}.`,
    difficulty: 'hard' in seed && seed.hard ? 'hard' : 'medium',
    examFrequency: 'high',
    exampleQuestionId: `bio11-m4-qt${seed.number}-q01`,
    recognitionSigns: [seed.sign, `Cần đối chiếu với ${seed.focus}.`],
    solvingSteps: ['Xác định hình thức sinh sản, cấu trúc hoặc giai đoạn.', `Theo dõi dòng tế bào và thông tin di truyền qua ${seed.focus}.`, 'Loại phương án đảo trình tự, đồng nhất khái niệm hoặc đưa khuyến nghị thiếu an toàn.'],
    commonMistakes: [seed.mistake, 'Chọn theo từ khóa mà không theo dõi nguồn gốc tế bào và trình tự quá trình.'],
    subTypes: [
      { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: `Nhận diện ${seed.focus}.`, targetQuestionCount: 9 },
      { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: `Vận dụng ${seed.focus}.`, targetQuestionCount: 9 }
    ],
    practiceCoverage: {
      targetQuestionCount: 18,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: representations,
      masteryHoldoutCount: 4
    }
  };
});
