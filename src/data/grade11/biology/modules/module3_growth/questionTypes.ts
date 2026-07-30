import type { CourseQuestionType } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';

interface TypeSeed {
  number: number;
  lesson: number;
  name: string;
  description: string;
  focus: string;
  sign: string;
  mistake: string;
  representation: QuestionRepresentationType;
  hard?: boolean;
}

const seeds: TypeSeed[] = [
  { number: 30, lesson: 19, name: 'Sinh trưởng và phát triển', description: 'Phân biệt biến đổi định lượng, định tính và mối liên hệ giữa hai quá trình.', focus: 'khối lượng, kích thước, phân hóa và phát sinh hình thái', sign: 'Đề mô tả tăng kích thước hoặc xuất hiện cấu trúc, chức năng mới.', mistake: 'Gọi mọi thay đổi theo thời gian là sinh trưởng.', representation: 'diagram' },
  { number: 31, lesson: 20, name: 'Mô phân sinh và kiểu sinh trưởng thực vật', description: 'Xác định mô phân sinh đỉnh, bên và kết quả sinh trưởng sơ cấp, thứ cấp.', focus: 'vị trí mô phân sinh và chiều tăng của cơ quan', sign: 'Đề nhắc đỉnh chồi, đỉnh rễ, tầng sinh mạch, vòng gỗ hoặc tăng chiều dài.', mistake: 'Cho rằng mô trưởng thành bất kì đều phân chia mạnh như mô phân sinh.', representation: 'diagram' },
  { number: 32, lesson: 20, name: 'Hormone thực vật và tương tác hormone', description: 'So sánh tác động của năm nhóm hormone chính theo mô, nồng độ và giai đoạn.', focus: 'auxin, gibberellin, cytokinin, ethylene và abscisic acid', sign: 'Đề mô tả kéo dài thân, nảy mầm, phân chia, chín quả, rụng lá hoặc ngủ nghỉ.', mistake: 'Gán mỗi hormone một tác dụng tuyệt đối trong mọi mô.', representation: 'table', hard: true },
  { number: 33, lesson: 20, name: 'Đọc dữ liệu sinh trưởng thực vật', description: 'Phân tích đường cong, tốc độ sinh trưởng và yếu tố giới hạn.', focus: 'kiểu gene, nước, khoáng, nhiệt độ, ánh sáng và giai đoạn', sign: 'Đề có bảng hoặc đồ thị chiều cao, sinh khối theo thời gian hay điều kiện.', mistake: 'Dùng hai điểm đơn lẻ để khẳng định quan hệ tăng vô hạn.', representation: 'graph', hard: true },
  { number: 34, lesson: 21, name: 'Thực hành điều khiển sinh trưởng cây', description: 'Giải thích bấm ngọn, tỉa cành, hormone, vòng năm và kiểm soát biến.', focus: 'ưu thế ngọn, chồi bên, nồng độ xử lí và tuổi vòng gỗ', sign: 'Đề mô tả thao tác làm vườn, xử lí chất điều hòa hoặc lát cắt thân gỗ.', mistake: 'Kết luận hiệu quả từ một cây hoặc dùng hormone không đối chứng.', representation: 'experiment' },
  { number: 35, lesson: 22, name: 'Phát triển và biến thái ở động vật', description: 'Nhận diện phát triển trực tiếp, biến thái không hoàn toàn và hoàn toàn từ vòng đời.', focus: 'mức giống con trưởng thành, giai đoạn ấu trùng và nhộng', sign: 'Đề có sơ đồ trứng–con non–trưởng thành hoặc trứng–ấu trùng–nhộng–trưởng thành.', mistake: 'Dùng riêng dấu hiệu lột xác để kết luận biến thái hoàn toàn.', representation: 'diagram' },
  { number: 36, lesson: 22, name: 'Hormone điều hòa sinh trưởng và biến thái', description: 'Phân tích trục hormone ở người, lưỡng cư và côn trùng.', focus: 'growth hormone, thyroxine, ecdysone và juvenile hormone', sign: 'Đề thay đổi tuyến nội tiết hoặc nồng độ hormone và hỏi kết quả phát triển.', mistake: 'Đồng nhất hormone gây lột xác với hormone duy trì đặc điểm ấu trùng.', representation: 'diagram', hard: true },
  { number: 37, lesson: 22, name: 'Yếu tố và ứng dụng sinh trưởng động vật', description: 'Đọc dữ liệu dinh dưỡng, nhiệt độ, sức khỏe và đánh giá biện pháp can thiệp.', focus: 'yếu tố di truyền, dinh dưỡng, môi trường và sử dụng hormone có trách nhiệm', sign: 'Đề so sánh khẩu phần, nhiệt độ nuôi, tốc độ lớn hoặc can thiệp hormone.', mistake: 'Quy mọi chậm lớn cho một nguyên nhân hoặc khuyên dùng hormone tùy tiện.', representation: 'table' },
  { number: 38, lesson: 23, name: 'Thực hành quan sát biến thái', description: 'Lập ethogram vòng đời, đo giai đoạn, kiểm soát điều kiện và giới hạn kết luận.', focus: 'dấu hiệu hình thái, thời lượng giai đoạn, lặp mẫu và điều kiện nuôi', sign: 'Đề cung cấp nhật kí quan sát nòng nọc, sâu, nhộng hoặc côn trùng trưởng thành.', mistake: 'Xếp giai đoạn chỉ theo kích thước hoặc quan sát một cá thể.', representation: 'experiment' }
];

export const g11BiologyModule3QuestionTypes: CourseQuestionType[] = seeds.map(seed => {
  const id = `bio11-qt${seed.number}`;
  const representations: QuestionRepresentationType[] =
    seed.representation === 'text' ? ['text'] : ['text', seed.representation];
  return {
    id,
    topicId: 'bio11-t03',
    courseId: 'grade11:biology',
    moduleId: 'bio11-m3',
    lessonIds: [`bio11-kntt-l${seed.lesson}`],
    outcomeIds: [`out-bio11-${seed.number}`],
    name: seed.name,
    slug: seed.name.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: seed.description,
    difficulty: seed.hard ? 'hard' : 'medium',
    examFrequency: 'high',
    exampleQuestionId: `bio11-m3-qt${seed.number}-q01`,
    recognitionSigns: [seed.sign, `Cần đối chiếu với ${seed.focus}.`],
    solvingSteps: [
      'Xác định giai đoạn, mô, hormone hoặc yếu tố môi trường đang được xét.',
      `Đối chiếu dữ kiện với ${seed.focus}; đọc bảng, sơ đồ hay thí nghiệm trước khi suy luận.`,
      'Loại phương án tuyệt đối hóa, nhầm quan hệ nhân quả hoặc vượt quá phạm vi dữ liệu.'
    ],
    commonMistakes: [seed.mistake, 'Chỉ nhớ tên giai đoạn nhưng không kiểm tra dấu hiệu cấu trúc và cơ chế.'],
    subTypes: [
      { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: `Nhận diện và giải thích ${seed.focus}.`, targetQuestionCount: 9 },
      { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: `Vận dụng ${seed.focus} vào dữ liệu.`, targetQuestionCount: 9 }
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
