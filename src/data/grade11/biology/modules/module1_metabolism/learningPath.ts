import type { LearningMisconception, LearningOutcome } from '@/types';

interface OutcomeSeed {
  number: number;
  title: string;
  description: string;
  prerequisite?: number[];
  evidence: LearningOutcome['evidenceTypes'];
  minutes?: number;
  critical?: boolean;
}

const seeds: OutcomeSeed[] = [
  { number: 1, title: 'Trao đổi chất và chuyển hóa năng lượng', description: 'Phân biệt trao đổi chất, chuyển hóa năng lượng, đồng hóa và dị hóa; giải thích vì sao đây là điều kiện tồn tại của cơ thể.', evidence: ['recognition', 'explanation'], critical: true },
  { number: 2, title: 'Hấp thụ nước theo thế nước', description: 'Giải thích được đường đi của nước từ đất vào mạch gỗ dựa trên thế nước, cấu tạo lông hút và các con đường qua rễ.', prerequisite: [1], evidence: ['representation', 'explanation'], critical: true },
  { number: 3, title: 'Hấp thụ và vai trò ion khoáng', description: 'Phân biệt hấp thụ ion thụ động, chủ động; nhận diện vai trò và biểu hiện thiếu một số nguyên tố khoáng thiết yếu.', prerequisite: [1], evidence: ['recognition', 'application'] },
  { number: 4, title: 'Vận chuyển trong mạch gỗ và mạch rây', description: 'So sánh thành phần, động lực và hướng vận chuyển của mạch gỗ với mạch rây theo quan hệ nguồn–nơi chứa.', prerequisite: [2, 3], evidence: ['representation', 'explanation'], critical: true },
  { number: 5, title: 'Thoát hơi nước và khí khổng', description: 'Giải thích cơ chế đóng mở khí khổng, vai trò của thoát hơi nước và ảnh hưởng của các yếu tố môi trường.', prerequisite: [2, 4], evidence: ['data', 'application'], critical: true },
  { number: 6, title: 'Thực hành trao đổi nước và khoáng', description: 'Xác định mục tiêu, biến, đối chứng, hiện tượng và kết luận trong thí nghiệm thoát hơi nước, thủy canh hoặc khí canh.', prerequisite: [2, 3, 5], evidence: ['experiment', 'data'], critical: true },
  { number: 7, title: 'Sắc tố quang hợp và pha sáng', description: 'Giải thích vai trò của sắc tố, quang phân li nước, chuỗi truyền electron và sự hình thành ATP, NADPH.', prerequisite: [1], evidence: ['representation', 'explanation'], critical: true },
  { number: 8, title: 'Cố định carbon ở C3, C4 và CAM', description: 'So sánh không gian, thời gian cố định carbon và ý nghĩa thích nghi của thực vật C3, C4, CAM.', prerequisite: [7], evidence: ['representation', 'application'], critical: true },
  { number: 9, title: 'Yếu tố ảnh hưởng quang hợp và năng suất', description: 'Đọc được đồ thị ảnh hưởng của ánh sáng, carbon dioxide, nhiệt độ; vận dụng để đề xuất biện pháp tăng năng suất.', prerequisite: [7, 8], evidence: ['data', 'application'] },
  { number: 10, title: 'Thực hành quang hợp', description: 'Phân tích thí nghiệm phát hiện tinh bột, oxygen hoặc ảnh hưởng của điều kiện môi trường đến quang hợp.', prerequisite: [7, 9], evidence: ['experiment', 'data'], critical: true },
  { number: 11, title: 'Hô hấp ở thực vật', description: 'Phân biệt hô hấp hiếu khí và lên men; giải thích ảnh hưởng của điều kiện ngoại cảnh và ứng dụng bảo quản nông sản.', prerequisite: [1], evidence: ['explanation', 'application'], critical: true },
  { number: 12, title: 'Thực hành hô hấp thực vật', description: 'Phân tích đối chứng và dấu hiệu chứng minh hạt nảy mầm tiêu thụ oxygen, thải carbon dioxide, tỏa nhiệt.', prerequisite: [11], evidence: ['experiment', 'data'] },
  { number: 13, title: 'Dinh dưỡng và tiêu hóa ở động vật', description: 'Phân biệt tiêu hóa nội bào, ngoại bào; giải thích sự phù hợp của túi tiêu hóa, ống tiêu hóa và chế độ dinh dưỡng.', prerequisite: [1], evidence: ['representation', 'application'], critical: true },
  { number: 14, title: 'Trao đổi khí ở động vật', description: 'So sánh bề mặt cơ thể, mang, hệ ống khí, phổi và giải thích các đặc điểm làm tăng hiệu quả trao đổi khí.', prerequisite: [1], evidence: ['representation', 'application'], critical: true },
  { number: 15, title: 'Tuần hoàn ở động vật', description: 'Phân biệt tuần hoàn hở, kín, đơn, kép; giải thích chu kì tim, huyết áp và vận tốc máu trong hệ mạch.', prerequisite: [13, 14], evidence: ['representation', 'application'], critical: true },
  { number: 16, title: 'Thực hành đo nhịp tim và huyết áp', description: 'Đọc, xử lí và giải thích dữ liệu nhịp tim, huyết áp trước–sau vận động; nhận diện sai số đo.', prerequisite: [15], evidence: ['experiment', 'data'] },
  { number: 17, title: 'Miễn dịch và vaccine', description: 'Phân biệt hàng rào không đặc hiệu, miễn dịch dịch thể, miễn dịch tế bào; giải thích trí nhớ miễn dịch và vaccine.', prerequisite: [13, 15], evidence: ['representation', 'application'], critical: true },
  { number: 18, title: 'Bài tiết và sự tạo nước tiểu', description: 'Giải thích vai trò của thận, lọc ở cầu thận, tái hấp thu và bài tiết tiếp ở ống thận.', prerequisite: [15], evidence: ['representation', 'explanation'], critical: true },
  { number: 19, title: 'Cân bằng nội môi và phản hồi âm', description: 'Phân tích cơ chế điều hòa đường huyết, áp suất thẩm thấu, thân nhiệt theo mô hình bộ phận tiếp nhận–điều khiển–thực hiện.', prerequisite: [15, 18], evidence: ['representation', 'application'], critical: true },
  { number: 20, title: 'Phối hợp các hệ cơ quan trong trao đổi chất', description: 'Vận dụng kiến thức để giải thích sự phối hợp của tiêu hóa, hô hấp, tuần hoàn, bài tiết khi nghỉ, vận động hoặc mắc bệnh.', prerequisite: [13, 14, 15, 18, 19], evidence: ['explanation', 'application'], critical: true }
];

const misconceptions: LearningMisconception[] = [
  { id: 'bio11-misc-water-potential', outcomeId: 'out-bio11-02', title: 'Nước được rễ bơm chủ động', description: 'Cho rằng tế bào rễ dùng ATP để bơm trực tiếp phân tử nước.', correction: 'Nước qua màng theo chênh lệch thế nước; vận chuyển ion chủ động có thể làm thay đổi thế nước nhưng không bơm trực tiếp nước.', severity: 'critical' },
  { id: 'bio11-misc-phloem-down', outcomeId: 'out-bio11-04', title: 'Mạch rây chỉ vận chuyển xuống dưới', description: 'Đồng nhất mạch rây với một dòng luôn đi từ lá xuống rễ.', correction: 'Dịch mạch rây đi từ cơ quan nguồn đến cơ quan chứa hoặc sử dụng; trong các ống rây khác nhau, hướng có thể khác nhau.', severity: 'critical' },
  { id: 'bio11-misc-transpiration-waste', outcomeId: 'out-bio11-05', title: 'Thoát hơi nước chỉ gây lãng phí', description: 'Chỉ nhìn thấy cây mất nước và bỏ qua các vai trò sinh lí.', correction: 'Thoát hơi nước tạo lực hút dòng mạch gỗ, hỗ trợ trao đổi khí và điều hòa nhiệt, nhưng quá mức có thể gây hại.', severity: 'normal' },
  { id: 'bio11-misc-dark-reaction', outcomeId: 'out-bio11-08', title: 'Pha tối chỉ diễn ra ban đêm', description: 'Hiểu chữ “tối” là thời điểm ban đêm.', correction: 'Pha cố định carbon không dùng ánh sáng trực tiếp nhưng phụ thuộc ATP, NADPH của pha sáng nên thường diễn ra khi có ánh sáng.', severity: 'critical' },
  { id: 'bio11-misc-cam-c4', outcomeId: 'out-bio11-08', title: 'C4 và CAM giống hoàn toàn', description: 'Cho rằng hai nhóm chỉ khác tên gọi.', correction: 'C4 tách cố định carbon theo không gian giữa tế bào thịt lá và bao bó mạch; CAM tách theo thời gian đêm–ngày trong cùng tế bào.', severity: 'critical' },
  { id: 'bio11-misc-plant-breathing', outcomeId: 'out-bio11-11', title: 'Thực vật chỉ hô hấp ban đêm', description: 'Cho rằng ban ngày quang hợp thay thế hoàn toàn hô hấp.', correction: 'Hô hấp tế bào diễn ra cả ngày lẫn đêm; ban ngày quang hợp và hô hấp cùng diễn ra.', severity: 'critical' },
  { id: 'bio11-misc-insect-blood-oxygen', outcomeId: 'out-bio11-14', title: 'Máu côn trùng vận chuyển oxygen chủ yếu', description: 'Áp dụng chức năng tuần hoàn của động vật có xương sống cho côn trùng.', correction: 'Ở côn trùng, hệ ống khí đưa khí gần trực tiếp đến tế bào; dịch tuần hoàn không phải con đường vận chuyển oxygen chủ yếu.', severity: 'normal' },
  { id: 'bio11-misc-open-all-molluscs', outcomeId: 'out-bio11-15', title: 'Mọi thân mềm đều có tuần hoàn hở', description: 'Không xét ngoại lệ ở nhóm chân đầu.', correction: 'Đa số thân mềm có tuần hoàn hở, nhưng mực và bạch tuộc thuộc chân đầu có tuần hoàn kín.', severity: 'normal' },
  { id: 'bio11-misc-antibiotic-virus', outcomeId: 'out-bio11-17', title: 'Kháng sinh chữa được bệnh do virus', description: 'Đồng nhất tác nhân vi khuẩn và virus.', correction: 'Kháng sinh tác động lên cấu trúc hoặc quá trình của vi khuẩn, không điều trị trực tiếp virus; vaccine giúp tạo trí nhớ miễn dịch trước phơi nhiễm.', severity: 'critical' },
  { id: 'bio11-misc-homeostasis-fixed', outcomeId: 'out-bio11-19', title: 'Cân bằng nội môi là giữ chỉ số tuyệt đối không đổi', description: 'Hiểu ổn định là bất biến.', correction: 'Nội môi dao động trong khoảng phù hợp và được điều chỉnh liên tục, chủ yếu nhờ phản hồi âm.', severity: 'normal' }
];

const misconceptionIdsByOutcome = misconceptions.reduce<Map<string, string[]>>((map, item) => {
  if (!item.outcomeId || !item.id) return map;
  map.set(item.outcomeId, [...(map.get(item.outcomeId) ?? []), item.id]);
  return map;
}, new Map());

export const g11BiologyModule1Outcomes: LearningOutcome[] = seeds.map(seed => {
  const paddedNumber = String(seed.number).padStart(2, '0');
  const outcomeId = 'out-bio11-' + paddedNumber;

  return {
    id: outcomeId,
    topicId: 'bio11-t01',
    title: seed.title,
    description: seed.description,
    scope: 'core',
    orderIndex: seed.number,
    questionTypeIds: ['bio11-qt' + paddedNumber],
    prerequisiteOutcomeIds: (seed.prerequisite ?? []).map(
      number => 'out-bio11-' + String(number).padStart(2, '0')
    ),
    misconceptionIds: misconceptionIdsByOutcome.get(outcomeId) ?? [],
    evidenceTypes: seed.evidence,
    estimatedMinutes: seed.minutes ?? 45,
    isCritical: seed.critical ?? false
  };
});

export const g11BiologyModule1Misconceptions = misconceptions;
