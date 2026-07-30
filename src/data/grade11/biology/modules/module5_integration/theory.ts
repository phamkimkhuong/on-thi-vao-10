import type { TheoryBlock } from '@/data/schema';

const seeds = [
  { number: 49, lesson: 28, title: 'Cơ thể là hệ thống mở, tự điều chỉnh', concept: 'Cơ thể là hệ thống mở vì trao đổi vật chất, năng lượng, thông tin với môi trường; đồng thời có mạng điều hòa giữ trạng thái phù hợp.', mechanism: 'Dòng vào được biến đổi, phân phối và tạo dòng ra. Thụ thể phát hiện sai lệch, trung tâm điều khiển tạo lệnh và cơ quan thực hiện đáp ứng; phản hồi âm giảm sai lệch.', use: 'Khi một mắt xích thay đổi, theo dõi chất, năng lượng và tín hiệu sang các hệ khác rồi mới kết luận.', trap: 'Ổn định không phải bất biến tuyệt đối; các cơ quan không phải những hộp hoạt động độc lập.', key: ['Cơ thể trao đổi liên tục với môi trường.', 'Các quá trình nối bằng dòng chất và tín hiệu.', 'Phản hồi âm giảm sai lệch.', 'Nội môi dao động trong khoảng phù hợp.'] },
  { number: 50, lesson: 28, title: 'Tích hợp sinh lí thực vật', concept: 'Rễ, thân, lá và cơ quan sinh sản phối hợp qua hệ mạch, chất hữu cơ và hormone.', mechanism: 'Rễ lấy nước–khoáng, mạch gỗ đưa lên; lá quang hợp, mạch rây phân phối chất hữu cơ; hô hấp tạo ATP; hormone điều phối sinh trưởng và sinh sản.', use: 'Thiếu nước có thể đóng khí khổng, giảm carbon dioxide, giảm quang hợp và thay đổi phân bổ chất cho tăng trưởng, tạo quả.', trap: 'Cây vẫn hô hấp ban ngày; quang hợp không thay thế hấp thụ khoáng, vận chuyển hay điều hòa.', key: ['Rễ–mạch–lá tạo một chuỗi.', 'Quang hợp cung cấp chất hữu cơ.', 'Hô hấp cung cấp ATP.', 'Hormone nối môi trường với sinh trưởng, sinh sản.'] },
  { number: 51, lesson: 28, title: 'Tích hợp sinh lí động vật', concept: 'Các hệ tiêu hóa, hô hấp, tuần hoàn, bài tiết, thần kinh và nội tiết cùng phục vụ tế bào và duy trì nội môi.', mechanism: 'Chất dinh dưỡng và oxygen được đưa đến tế bào; chất thải được đưa đi. Thần kinh đáp ứng nhanh, hormone điều hòa rộng và kéo dài; phản hồi phối hợp các cơ quan.', use: 'Trong vận động, cơ tăng ATP làm nhu cầu oxygen, glucose tăng; thông khí, tim, huy động nhiên liệu và thải nhiệt cùng thay đổi.', trap: 'Không giải thích triệu chứng của một hệ mà bỏ nguyên nhân, bù trừ và hậu quả ở các hệ khác.', key: ['Tế bào là điểm hội tụ dòng chất.', 'Tuần hoàn nối nhiều hệ.', 'Bài tiết góp phần giữ nội môi.', 'Thần kinh và nội tiết phối hợp điều hòa.'] },
  { number: 52, lesson: 29, title: 'Ngành nghề sinh học cơ thể', concept: 'Nhóm nghề gồm y–dược, thú y, nông nghiệp, công nghệ sinh học, xét nghiệm, dinh dưỡng, bảo tồn và nghiên cứu.', mechanism: 'Mỗi nghề có nhiệm vụ, công cụ, năng lực, đào tạo, chứng chỉ, rủi ro và trách nhiệm đạo đức khác nhau.', use: 'Thu thập từ cơ sở đào tạo, cơ quan quản lí, hiệp hội và người làm nghề; kiểm tra ngày, mục đích, bằng chứng rồi đối chiếu nhiều nguồn.', trap: 'Tên nghề và quảng cáo thu nhập không mô tả đầy đủ công việc; không được bỏ an toàn, bảo mật và giới hạn chuyên môn.', key: ['Đối chiếu nhiệm vụ thực tế.', 'Kiểm tra lộ trình đào tạo.', 'Ưu tiên nguồn chính thức, cập nhật.', 'An toàn và đạo đức là yêu cầu nghề nghiệp.'] }
] as const;

const letters = ['A', 'B', 'C', 'D'] as const;
export const g11BiologyModule5Theory: TheoryBlock[] = seeds.map((seed, index) => ({
  id: `bio11-theory-${seed.number}`, courseId: 'grade11:biology', moduleId: 'bio11-m5',
  lessonIds: [`bio11-kntt-l${seed.lesson}`], outcomeIds: [`out-bio11-${seed.number}`],
  questionTypeIds: [`bio11-qt${seed.number}`], sourceIds: ['bio11-source-official-guide', 'bio11-source-kntt-textbook'],
  title: seed.title,
  objectives: ['Mô hình hóa dòng vật chất, năng lượng và thông tin.', 'Giải thích quan hệ nhiều mắt xích.', 'Đánh giá bằng chứng, an toàn và đạo đức.'],
  content: `**Khái niệm nền tảng**\n${seed.concept}\n\n**Cơ chế cần hiểu**\n${seed.mechanism}\n\n**Vận dụng**\n${seed.use}\n\n**Dễ nhầm**\n${seed.trap}`,
  formulas: [], keyPoints: [...seed.key],
  workedExamples: [
    { id: `bio11-theory-${seed.number}-ex1`, title: 'Lập chuỗi tích hợp', problem: seed.use, steps: ['Xác định dòng vào, biến đổi và dòng ra.', `Nối bằng cơ chế: ${seed.mechanism}`], answer: seed.key[1] },
    { id: `bio11-theory-${seed.number}-ex2`, title: 'Kiểm tra giới hạn', problem: seed.trap, steps: ['Tìm mắt xích hoặc tiêu chí bị bỏ qua.', `Đối chiếu nguyên tắc: ${seed.key[0]}`], answer: `Ghi nhớ: ${seed.key[0]} ${seed.key[3]}` }
  ],
  checkpoints: seed.key.map((point, cp) => {
    const shift = (index + cp) % 4;
    const base = [point, 'Mỗi cơ quan hoặc tiêu chí hoạt động độc lập hoàn toàn.', 'Có thể kết luận nguyên nhân mà không theo dõi mắt xích trung gian.', 'An toàn, đạo đức và giới hạn bằng chứng không ảnh hưởng quyết định.'];
    return { id: `bio11-theory-${seed.number}-cp${cp + 1}`, question: `Nhận định nào đúng về ${seed.title.toLocaleLowerCase('vi')}?`, options: [...base.slice(shift), ...base.slice(0, shift)] as [string, string, string, string], correctAnswer: letters[(4 - shift) % 4], explanation: point };
  }),
  orderIndex: seed.number, reviewStatus: 'draft'
}));
