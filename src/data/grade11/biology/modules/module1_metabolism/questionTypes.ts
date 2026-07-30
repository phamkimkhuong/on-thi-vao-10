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
  difficulty?: CourseQuestionType['difficulty'];
}

const seeds: TypeSeed[] = [
  { number: 1, lesson: 1, name: 'Khái quát trao đổi chất và chuyển hóa năng lượng', description: 'Phân biệt chất lấy vào, sản phẩm thải, đồng hóa, dị hóa và dòng năng lượng trong cơ thể.', focus: 'mối quan hệ giữa trao đổi chất, đồng hóa, dị hóa và ATP', sign: 'Đề mô tả cơ thể lấy chất từ môi trường, biến đổi chất hoặc giải phóng năng lượng.', mistake: 'Đồng nhất trao đổi chất với riêng hoạt động tiêu hóa hoặc hô hấp.', representation: 'diagram', difficulty: 'easy' },
  { number: 2, lesson: 2, name: 'Hấp thụ nước ở rễ theo thế nước', description: 'Giải thích sự hấp thụ nước qua lông hút và các con đường vận chuyển xuyên qua rễ.', focus: 'thế nước, thẩm thấu, con đường gian bào và tế bào chất', sign: 'Dữ kiện nhắc đến đất, lông hút, nội bì hoặc đai Caspary.', mistake: 'Cho rằng rễ dùng ATP để bơm trực tiếp phân tử nước.', representation: 'diagram' },
  { number: 3, lesson: 2, name: 'Hấp thụ ion và dinh dưỡng khoáng', description: 'Phân biệt vận chuyển ion thụ động, chủ động và liên hệ nguyên tố khoáng với biểu hiện thiếu dinh dưỡng.', focus: 'gradient điện hóa, protein vận chuyển và nguyên tố thiết yếu', sign: 'Đề cho nồng độ ion, ATP hoặc triệu chứng thiếu khoáng ở lá.', mistake: 'Cho rằng mọi ion khoáng đều đi vào rễ theo cùng một cơ chế.', representation: 'table' },
  { number: 4, lesson: 2, name: 'Vận chuyển mạch gỗ và mạch rây', description: 'So sánh thành phần dịch, tế bào dẫn, động lực và hướng vận chuyển trong hai hệ mạch.', focus: 'lực hút thoát hơi nước, áp suất rễ và quan hệ nguồn–nơi chứa', sign: 'Đề nhắc mạch gỗ, mạch rây, cơ quan nguồn hoặc cơ quan dự trữ.', mistake: 'Khẳng định dịch mạch rây luôn chỉ đi từ trên xuống dưới.', representation: 'diagram' },
  { number: 5, lesson: 2, name: 'Thoát hơi nước và điều tiết khí khổng', description: 'Giải thích vai trò thoát hơi nước, cơ chế khí khổng và ảnh hưởng của môi trường.', focus: 'sức trương tế bào khí khổng và chênh lệch hơi nước', sign: 'Đề thay đổi ánh sáng, độ ẩm, gió hoặc tình trạng nước của cây.', mistake: 'Coi thoát hơi nước chỉ là sự mất nước có hại.', representation: 'graph' },
  { number: 6, lesson: 3, name: 'Thực hành trao đổi nước, khoáng và trồng không đất', description: 'Phân tích thiết kế, đối chứng, hiện tượng và kết luận của thí nghiệm trao đổi nước hoặc dung dịch dinh dưỡng.', focus: 'biến thí nghiệm, đối chứng, cách đo và bằng chứng quan sát', sign: 'Đề có quy trình bịt lá, cân khối lượng, dung dịch khoáng, thủy canh hoặc khí canh.', mistake: 'Rút kết luận nguyên nhân khi thí nghiệm thay đổi đồng thời nhiều điều kiện.', representation: 'experiment' },
  { number: 7, lesson: 4, name: 'Sắc tố quang hợp và pha sáng', description: 'Phân tích hấp thụ ánh sáng, quang phân li nước, truyền electron và tạo ATP, NADPH.', focus: 'vị trí màng thylakoid và sản phẩm cung cấp cho chu trình Calvin', sign: 'Đề nhắc diệp lục, bước sóng, oxygen, ATP hoặc NADPH.', mistake: 'Cho rằng oxygen quang hợp có nguồn gốc từ carbon dioxide.', representation: 'diagram' },
  { number: 8, lesson: 4, name: 'Cố định carbon ở thực vật C3, C4 và CAM', description: 'So sánh chất nhận carbon, sản phẩm đầu tiên, sự tách biệt không gian hoặc thời gian và ý nghĩa thích nghi.', focus: 'tế bào thịt lá, bao bó mạch, khí khổng ban đêm và quang hô hấp', sign: 'Đề cho loài sống khô nóng hoặc yêu cầu phân biệt C3, C4, CAM.', mistake: 'Nhầm tách biệt theo không gian của C4 với tách biệt theo thời gian của CAM.', representation: 'table', difficulty: 'hard' },
  { number: 9, lesson: 4, name: 'Yếu tố ảnh hưởng quang hợp và năng suất', description: 'Đọc đồ thị và vận dụng điểm bù, điểm bão hòa ánh sáng, carbon dioxide, nhiệt độ trong sản xuất.', focus: 'yếu tố giới hạn và vùng tối ưu thay vì tăng vô hạn', sign: 'Đề có đồ thị cường độ quang hợp theo ánh sáng, CO2 hoặc nhiệt độ.', mistake: 'Cho rằng tăng một yếu tố luôn làm quang hợp tăng không giới hạn.', representation: 'graph', difficulty: 'hard' },
  { number: 10, lesson: 5, name: 'Thực hành chứng minh quang hợp', description: 'Phân tích thí nghiệm tinh bột, oxygen, sắc tố và ảnh hưởng điều kiện đến quang hợp.', focus: 'khử tinh bột, đối chứng, thuốc thử iodine và thu khí', sign: 'Đề mô tả lá che sáng, đun cồn, iodine hoặc cây thủy sinh tạo bọt khí.', mistake: 'Bỏ qua bước khử tinh bột hoặc vai trò của nhóm đối chứng.', representation: 'experiment' },
  { number: 11, lesson: 6, name: 'Hô hấp ở thực vật và bảo quản nông sản', description: 'Phân biệt hô hấp hiếu khí, lên men và phân tích tác động của nhiệt độ, nước, oxygen đến hô hấp.', focus: 'phân giải chất hữu cơ, tạo ATP và điều chỉnh cường độ hô hấp', sign: 'Đề nhắc hạt nảy mầm, nông sản, kho lạnh, ngập úng hoặc thiếu oxygen.', mistake: 'Cho rằng thực vật chỉ hô hấp khi không có ánh sáng.', representation: 'diagram' },
  { number: 12, lesson: 7, name: 'Thực hành chứng minh hô hấp', description: 'Đọc thiết kế chứng minh hạt nảy mầm thải CO2, tỏa nhiệt hoặc tiêu thụ O2.', focus: 'mẫu sống, mẫu đối chứng đã xử lí và chỉ thị phù hợp', sign: 'Đề có bình hạt, nước vôi trong, nhiệt kế hoặc giọt màu trong ống mao dẫn.', mistake: 'Dùng hạt chết làm mẫu thử nhưng không có mẫu sống để so sánh.', representation: 'experiment' },
  { number: 13, lesson: 8, name: 'Dinh dưỡng và tiêu hóa ở động vật', description: 'So sánh tiêu hóa nội bào, túi tiêu hóa, ống tiêu hóa và sự thích nghi với thức ăn.', focus: 'biến đổi cơ học, hóa học và hấp thụ chất dinh dưỡng', sign: 'Đề cho cấu tạo khoang tiêu hóa, ống tiêu hóa hoặc chế độ ăn của động vật.', mistake: 'Đồng nhất tiêu hóa với hấp thụ hoặc cho rằng mọi động vật đều có ống tiêu hóa.', representation: 'diagram' },
  { number: 14, lesson: 9, name: 'Bề mặt trao đổi khí ở động vật', description: 'So sánh trao đổi khí qua bề mặt cơ thể, mang, hệ ống khí, phổi và cơ chế thông khí.', focus: 'diện tích, độ mỏng, độ ẩm, chênh lệch nồng độ và dòng đối lưu', sign: 'Đề mô tả giun, cá, côn trùng, lưỡng cư, chim hoặc thú.', mistake: 'Cho rằng dịch tuần hoàn côn trùng vận chuyển oxygen chủ yếu.', representation: 'diagram' },
  { number: 15, lesson: 10, name: 'Hệ tuần hoàn, tim và hệ mạch', description: 'Phân biệt tuần hoàn hở, kín, đơn, kép và phân tích chu kì tim, huyết áp, vận tốc máu.', focus: 'đường đi của máu và quan hệ cấu tạo–chức năng của tim, mạch', sign: 'Đề có sơ đồ vòng tuần hoàn, số ngăn tim, huyết áp hoặc tiết diện mạch.', mistake: 'Cho rằng mọi thân mềm có tuần hoàn hở hoặc mao mạch có vận tốc máu lớn nhất.', representation: 'diagram', difficulty: 'hard' },
  { number: 16, lesson: 11, name: 'Thực hành nhịp tim và huyết áp', description: 'Xử lí số đo trước–sau vận động, đánh giá cách đo, sai số và giới hạn kết luận.', focus: 'lặp lại phép đo, điều kiện chuẩn và so sánh dữ liệu cá nhân', sign: 'Đề cung cấp bảng nhịp tim, huyết áp hoặc quy trình dùng máy đo.', mistake: 'Dùng một lần đo để chẩn đoán bệnh hoặc so sánh các nhóm không cùng điều kiện.', representation: 'table' },
  { number: 17, lesson: 12, name: 'Miễn dịch, kháng thể và vaccine', description: 'Phân biệt miễn dịch không đặc hiệu, đặc hiệu, dịch thể, tế bào và giải thích trí nhớ miễn dịch.', focus: 'kháng nguyên, lymphocyte, kháng thể và đáp ứng lần hai', sign: 'Đề nhắc hàng rào bảo vệ, viêm, vaccine, kháng thể hoặc tế bào nhớ.', mistake: 'Cho rằng vaccine chữa ngay bệnh đang mắc hoặc kháng sinh diệt virus.', representation: 'diagram' },
  { number: 18, lesson: 13, name: 'Bài tiết và sự tạo nước tiểu', description: 'Phân tích lọc ở cầu thận, tái hấp thu, bài tiết tiếp và vai trò duy trì thành phần máu.', focus: 'cầu thận, bao Bowman, ống thận và ống góp', sign: 'Đề cho thành phần dịch lọc, nước tiểu hoặc tổn thương một phần nephron.', mistake: 'Cho rằng nước tiểu được tạo ra chỉ bằng một lần lọc máu.', representation: 'diagram' },
  { number: 19, lesson: 13, name: 'Cân bằng nội môi và phản hồi âm', description: 'Phân tích bộ phận tiếp nhận, điều khiển, thực hiện trong điều hòa đường huyết, nước và thân nhiệt.', focus: 'giá trị chuẩn, sai lệch và đáp ứng làm giảm sai lệch', sign: 'Đề mô tả chỉ số nội môi tăng hoặc giảm rồi cơ thể đáp ứng.', mistake: 'Hiểu cân bằng nội môi là giữ mọi chỉ số tuyệt đối không đổi.', representation: 'diagram', difficulty: 'hard' },
  { number: 20, lesson: 13, name: 'Tích hợp các hệ cơ quan trong trao đổi chất', description: 'Giải thích sự phối hợp tiêu hóa–hô hấp–tuần hoàn–bài tiết trong vận động, nghỉ ngơi và bệnh lí.', focus: 'dòng vật chất, oxygen, carbon dioxide, chất thải và tín hiệu điều hòa', sign: 'Tình huống yêu cầu liên kết từ ba hệ cơ quan trở lên.', mistake: 'Phân tích từng hệ độc lập và bỏ qua chất hoặc tín hiệu nối giữa chúng.', representation: 'diagram', difficulty: 'hard' }
];

const makeQuestionType = (seed: TypeSeed): CourseQuestionType => {
  const id = `bio11-qt${String(seed.number).padStart(2, '0')}`;
  const representations: QuestionRepresentationType[] = seed.representation === 'text'
    ? ['text']
    : ['text', seed.representation];
  return {
    id,
    topicId: 'bio11-t01',
    courseId: 'grade11:biology',
    moduleId: 'bio11-m1',
    lessonIds: [`bio11-kntt-l${seed.lesson}`],
    outcomeIds: [`out-bio11-${String(seed.number).padStart(2, '0')}`],
    name: seed.name,
    slug: seed.name.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: seed.description,
    difficulty: seed.difficulty ?? 'medium',
    examFrequency: 'high',
    exampleQuestionId: `bio11-m1-qt${String(seed.number).padStart(2, '0')}-q01`,
    recognitionSigns: [
      seed.sign,
      `Câu hỏi yêu cầu vận dụng ${seed.focus} để giải thích hoặc loại trừ nhận định.`
    ],
    solvingSteps: [
      'Xác định đối tượng, cấp tổ chức và dữ kiện sinh học mà đề đang kiểm tra.',
      `Đối chiếu dữ kiện với ${seed.focus}; nếu có bảng, sơ đồ hoặc thí nghiệm thì đọc bằng chứng trước khi kết luận.`,
      'Chọn kết luận vừa đủ với dữ kiện, sau đó loại phương án tuyệt đối hóa, đảo nguyên nhân–kết quả hoặc dùng sai phạm vi.'
    ],
    commonMistakes: [
      seed.mistake,
      'Chọn phương án có thuật ngữ quen nhưng không giải thích đúng dữ kiện cụ thể.'
    ],
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
};

export const g11BiologyModule1QuestionTypes: CourseQuestionType[] = seeds.map(makeQuestionType);
