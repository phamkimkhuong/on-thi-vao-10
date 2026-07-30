import type { CourseQuestionType } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';

const seeds = [
  { number: 49, lesson: 28, name: 'Cơ thể là hệ thống mở và tự điều chỉnh', focus: 'dòng vật chất–năng lượng–thông tin và phản hồi', sign: 'Tình huống nối môi trường với từ ba quá trình sinh lí trở lên.', mistake: 'Phân tích từng cơ quan như các hộp độc lập.', representation: 'diagram' as QuestionRepresentationType },
  { number: 50, lesson: 28, name: 'Tích hợp sinh lí thực vật', focus: 'rễ–mạch–lá, quang hợp–hô hấp, hormone–sinh trưởng–sinh sản', sign: 'Đề thay đổi nước, ánh sáng hoặc cơ quan và hỏi nhiều hệ quả trên cây.', mistake: 'Cho rằng quang hợp thay thế hô hấp vào ban ngày.', representation: 'diagram' as QuestionRepresentationType },
  { number: 51, lesson: 28, name: 'Tích hợp sinh lí động vật', focus: 'tiêu hóa–hô hấp–tuần hoàn–bài tiết và thần kinh–nội tiết', sign: 'Đề mô tả vận động, bệnh hoặc thay đổi nội môi ảnh hưởng nhiều hệ.', mistake: 'Dừng ở triệu chứng của một hệ mà không theo dõi nguyên nhân và bù trừ.', representation: 'diagram' as QuestionRepresentationType },
  { number: 52, lesson: 29, name: 'Đánh giá ngành nghề sinh học cơ thể', focus: 'nhiệm vụ, năng lực, đào tạo, an toàn, đạo đức và độ tin cậy nguồn', sign: 'Đề là hồ sơ nghề, quảng cáo khóa học hoặc tình huống lựa chọn nghề.', mistake: 'Chọn nghề chỉ theo tên, thu nhập quảng cáo hoặc một nguồn không kiểm chứng.', representation: 'table' as QuestionRepresentationType }
];

export const g11BiologyModule5QuestionTypes: CourseQuestionType[] = seeds.map(seed => {
  const id = `bio11-qt${seed.number}`;
  return {
    id, topicId: 'bio11-t05', courseId: 'grade11:biology', moduleId: 'bio11-m5',
    lessonIds: [`bio11-kntt-l${seed.lesson}`], outcomeIds: [`out-bio11-${seed.number}`],
    name: seed.name, slug: seed.name.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: `Phân tích và vận dụng ${seed.focus}.`, difficulty: 'hard', examFrequency: 'medium',
    exampleQuestionId: `bio11-m5-qt${seed.number}-q01`,
    recognitionSigns: [seed.sign, `Phải nối bằng ${seed.focus}.`],
    solvingSteps: ['Vẽ hoặc hình dung dòng vào–biến đổi–dòng ra và tín hiệu điều hòa.', `Theo dõi ${seed.focus} qua từng mắt xích.`, 'Kiểm tra giới hạn dữ liệu, độ tin cậy nguồn và hệ quả đạo đức trước kết luận.'],
    commonMistakes: [seed.mistake, 'Nhảy từ tương quan sang nguyên nhân khi chưa xét mắt xích trung gian.'],
    subTypes: [
      { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: `Giải thích ${seed.focus}.`, targetQuestionCount: 9 },
      { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: `Vận dụng ${seed.focus}.`, targetQuestionCount: 9 }
    ],
    practiceCoverage: {
      targetQuestionCount: 18, minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', seed.representation], masteryHoldoutCount: 4
    }
  };
});
