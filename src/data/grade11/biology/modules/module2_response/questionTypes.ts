import type { CourseQuestionType } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';

const seeds = [
  { number: 21, lesson: 14, name: 'Chuỗi tiếp nhận và đáp ứng kích thích', description: 'Nhận diện kích thích, bộ phận tiếp nhận, xử lí và đáp ứng ở thực vật, động vật.', focus: 'chuỗi kích thích–thụ thể–xử lí–đáp ứng', sign: 'Đề mô tả một biến đổi môi trường và phản ứng sau đó của sinh vật.', mistake: 'Cho rằng chỉ động vật có hệ thần kinh mới có cảm ứng.', representation: 'diagram' as QuestionRepresentationType },
  { number: 22, lesson: 15, name: 'Hướng động ở thực vật', description: 'Phân biệt hướng sáng, hướng trọng lực, hướng nước, hướng hóa và giải thích sinh trưởng không đều.', focus: 'hướng tác nhân và chiều sinh trưởng của cơ quan', sign: 'Đề cho tác nhân có hướng xác định và cơ quan cây cong về hoặc tránh xa tác nhân.', mistake: 'Gắn mọi hướng động với cùng một cách phân bố auxin ở rễ và chồi.', representation: 'diagram' as QuestionRepresentationType },
  { number: 23, lesson: 15, name: 'Ứng động ở thực vật', description: 'Phân biệt ứng động sinh trưởng, không sinh trưởng và cơ chế sức trương nước.', focus: 'đáp ứng không phụ thuộc hướng tác nhân và cơ chế vận động', sign: 'Đề nhắc hoa nở, lá khép, khí khổng hoặc vận động theo chu kì ngày đêm.', mistake: 'Gọi mọi vận động của thực vật là hướng động.', representation: 'diagram' as QuestionRepresentationType },
  { number: 24, lesson: 16, name: 'Thực hành cảm ứng ở thực vật', description: 'Thiết kế thí nghiệm hướng sáng, hướng trọng lực và đánh giá đối chứng, cách đo.', focus: 'một biến độc lập, đối chứng và chỉ số định lượng phản ứng', sign: 'Đề mô tả hộp tối, chậu cây, hạt nảy mầm hoặc thay đổi hướng nguồn sáng.', mistake: 'Thay đổi đồng thời ánh sáng, nước và nhiệt độ rồi quy kết kết quả cho ánh sáng.', representation: 'experiment' as QuestionRepresentationType },
  { number: 25, lesson: 17, name: 'Tổ chức hệ thần kinh và cung phản xạ', description: 'So sánh hệ thần kinh dạng lưới, chuỗi hạch, dạng ống và phân tích cung phản xạ.', focus: 'mức tập trung hóa thần kinh và đường truyền của cung phản xạ', sign: 'Đề có sơ đồ neuron cảm giác, trung gian, vận động hoặc các kiểu hệ thần kinh.', mistake: 'Cho rằng phản xạ luôn cần ý thức hoặc neuron vận động truyền tin về trung ương.', representation: 'diagram' as QuestionRepresentationType },
  { number: 26, lesson: 17, name: 'Điện thế màng và lan truyền xung thần kinh', description: 'Giải thích điện thế nghỉ, điện thế hoạt động, nguyên tắc tất cả hoặc không và lan truyền xung.', focus: 'gradient Na+, K+, tính thấm màng và tái phân cực', sign: 'Đề có điện thế màng, ngưỡng kích thích, kênh ion hoặc bao myelin.', mistake: 'Cho rằng kích thích càng mạnh thì biên độ điện thế hoạt động càng cao.', representation: 'graph' as QuestionRepresentationType },
  { number: 27, lesson: 17, name: 'Truyền tin qua synapse hóa học', description: 'Sắp xếp cơ chế truyền tin và giải thích tính một chiều, độ trễ, tác động của chất hóa học.', focus: 'Ca2+, túi synapse, chất trung gian và thụ thể màng sau', sign: 'Đề mô tả đầu tận cùng neuron, khe synapse hoặc chất dẫn truyền thần kinh.', mistake: 'Cho rằng chất trung gian truyền ngược từ màng sau về màng trước.', representation: 'diagram' as QuestionRepresentationType },
  { number: 28, lesson: 18, name: 'Tập tính bẩm sinh và học được', description: 'Phân biệt cơ sở di truyền, trải nghiệm và các hình thức học tập ở động vật.', focus: 'tính khuôn mẫu, độ linh hoạt và vai trò của trải nghiệm', sign: 'Đề mô tả hành vi kiếm ăn, sinh sản, di cư, quen nhờn, điều kiện hóa hoặc học khôn.', mistake: 'Xếp tập tính phức tạp hoàn toàn vào bẩm sinh hoặc học được mà không xét sự phối hợp.', representation: 'text' as QuestionRepresentationType },
  { number: 29, lesson: 18, name: 'Quan sát và ứng dụng tập tính động vật', description: 'Đọc tần suất, thời lượng hành vi và vận dụng tập tính trong chăn nuôi, bảo tồn.', focus: 'mô tả hành vi quan sát được, lấy mẫu và tránh nhân hóa', sign: 'Đề có bảng thời gian hành vi, ethogram hoặc tình huống điều khiển tập tính.', mistake: 'Gán cảm xúc con người thay cho mô tả hành vi và bằng chứng quan sát.', representation: 'table' as QuestionRepresentationType }
];

export const g11BiologyModule2QuestionTypes: CourseQuestionType[] = seeds.map(seed => {
  const id = `bio11-qt${seed.number}`;
  const representations: QuestionRepresentationType[] = seed.representation === 'text'
    ? ['text']
    : ['text', seed.representation];
  return {
    id,
    topicId: 'bio11-t02',
    courseId: 'grade11:biology',
    moduleId: 'bio11-m2',
    lessonIds: [`bio11-kntt-l${seed.lesson}`],
    outcomeIds: [`out-bio11-${seed.number}`],
    name: seed.name,
    slug: seed.name.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: seed.description,
    difficulty: [26, 27, 29].includes(seed.number) ? 'hard' : 'medium',
    examFrequency: 'high',
    exampleQuestionId: `bio11-m2-qt${seed.number}-q01`,
    recognitionSigns: [seed.sign, `Cần đối chiếu dữ kiện với ${seed.focus}.`],
    solvingSteps: [
      'Xác định tác nhân, bộ phận tiếp nhận và loại đáp ứng được mô tả.',
      `Dùng ${seed.focus} để sắp xếp cơ chế hoặc đọc dữ liệu.`,
      'Loại phương án nhân hóa, tuyệt đối hóa hoặc đảo chiều truyền thông tin; chọn kết luận sát bằng chứng.'
    ],
    commonMistakes: [seed.mistake, 'Ghi nhớ tên hiện tượng nhưng không kiểm tra dấu hiệu cơ chế trong tình huống.'],
    subTypes: [
      { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: `Nhận diện và giải thích ${seed.focus}.`, targetQuestionCount: 9 },
      { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: `Vận dụng ${seed.focus} vào tình huống hoặc dữ liệu.`, targetQuestionCount: 9 }
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
