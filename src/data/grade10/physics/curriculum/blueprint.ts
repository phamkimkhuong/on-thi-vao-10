import type { LearningEvidenceType } from '@/types';

export interface PhysicsCurriculumOutcomeSpec {
  id: string;
  title: string;
  description: string;
  evidenceTypes: LearningEvidenceType[];
  isCritical?: boolean;
}

export interface PhysicsCurriculumModuleSpec {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  officialHours: number;
  orderIndex: number;
  summary: string;
  outcomes: PhysicsCurriculumOutcomeSpec[];
}

/**
 * Blueprint nội dung cốt lõi Vật lí 10 theo CTGDPT 2018.
 * Đây là nguồn đặc tả để phát triển module; chỉ module đã đủ học liệu mới được
 * đưa vào các aggregator dành cho học sinh.
 */
export const g10PhysicsCurriculumModules: PhysicsCurriculumModuleSpec[] = [
  {
    id: 'PHY10-M0', topicId: 'phy10-t0', slug: 'mo-dau-do-luong', title: 'Mở đầu và đo lường', officialHours: 4, orderIndex: 1,
    summary: 'Thiết lập phương pháp học Vật lí, an toàn, đơn vị SI, phép đo, sai số và cách lập luận từ dữ liệu.',
    outcomes: [
      { id: 'PHY10-M0-O01', title: 'Đối tượng và vai trò của Vật lí', description: 'Nêu được đối tượng nghiên cứu, mục đích học tập và vai trò của Vật lí trong khoa học, công nghệ và đời sống.', evidenceTypes: ['recognition', 'explanation'] },
      { id: 'PHY10-M0-O02', title: 'An toàn trong học tập Vật lí', description: 'Nhận diện nguy cơ, lựa chọn quy tắc an toàn và xử lí ban đầu trong tình huống thực hành.', evidenceTypes: ['recognition', 'application'], isCritical: true },
      { id: 'PHY10-M0-O03', title: 'Đơn vị SI và dụng cụ đo', description: 'Chọn đơn vị, dụng cụ, giới hạn đo và độ chia nhỏ nhất phù hợp với đại lượng cần đo.', evidenceTypes: ['recognition', 'application'] },
      { id: 'PHY10-M0-O04', title: 'Phép đo trực tiếp', description: 'Đọc kết quả, tổ chức đo lặp và tính giá trị trung bình của phép đo trực tiếp.', evidenceTypes: ['calculation', 'experiment'] },
      { id: 'PHY10-M0-O05', title: 'Sai số phép đo', description: 'Phân biệt sai số ngẫu nhiên, sai số dụng cụ; tính sai số tuyệt đối và sai số tỉ đối theo quy ước được cung cấp.', evidenceTypes: ['calculation', 'explanation'], isCritical: true },
      { id: 'PHY10-M0-O06', title: 'Ghi kết quả đo', description: 'Làm tròn sai số và ghi giá trị đo với độ chính xác, đơn vị và chữ số có nghĩa phù hợp.', evidenceTypes: ['representation', 'calculation'], isCritical: true },
      { id: 'PHY10-M0-O07', title: 'Phép đo gián tiếp', description: 'Tính giá trị và ước lượng sai số của đại lượng được xác định từ các đại lượng đo trực tiếp trong trường hợp đơn giản.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M0-O08', title: 'Thiết kế và đánh giá phép đo', description: 'Xác định biến, kiểm soát điều kiện, đọc bảng số liệu và đánh giá độ tin cậy, độ chính xác của kết luận.', evidenceTypes: ['data', 'experiment', 'explanation'], isCritical: true }
    ]
  },
  {
    id: 'PHY10-M1', topicId: 'phy10-t1', slug: 'dong-hoc', title: 'Động học', officialHours: 16, orderIndex: 2,
    summary: 'Mô tả chuyển động bằng ngôn ngữ, vector, đồ thị, phương trình và dữ liệu thực nghiệm.',
    outcomes: [
      { id: 'PHY10-M1-O01', title: 'Hệ quy chiếu và vị trí', description: 'Xác định vật mốc, hệ trục, mốc thời gian và mô tả vị trí của vật.', evidenceTypes: ['representation', 'application'] },
      { id: 'PHY10-M1-O02', title: 'Quãng đường và độ dịch chuyển', description: 'Phân biệt, tính và biểu diễn quãng đường với độ dịch chuyển trong chuyển động thẳng.', evidenceTypes: ['representation', 'calculation'], isCritical: true },
      { id: 'PHY10-M1-O03', title: 'Tốc độ và vận tốc', description: 'Phân biệt tốc độ, vận tốc; tính giá trị trung bình và tức thời trong tình huống đơn giản.', evidenceTypes: ['calculation', 'explanation'], isCritical: true },
      { id: 'PHY10-M1-O04', title: 'Chuyển động tổng hợp', description: 'Vận dụng quy tắc cộng vận tốc trong các hệ quy chiếu chuyển động thẳng đơn giản.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M1-O05', title: 'Đồ thị độ dịch chuyển–thời gian', description: 'Vẽ, đọc hệ số góc và suy luận trạng thái chuyển động từ đồ thị độ dịch chuyển–thời gian.', evidenceTypes: ['representation', 'data'], isCritical: true },
      { id: 'PHY10-M1-O06', title: 'Gia tốc', description: 'Nêu ý nghĩa, xác định vector và tính gia tốc từ sự biến thiên vận tốc.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M1-O07', title: 'Chuyển động thẳng biến đổi đều', description: 'Vận dụng các hệ thức vận tốc, độ dịch chuyển và thời gian đúng điều kiện.', evidenceTypes: ['calculation', 'application'], isCritical: true },
      { id: 'PHY10-M1-O08', title: 'Đồ thị vận tốc–thời gian', description: 'Dùng hệ số góc và diện tích đại số để xác định gia tốc và độ dịch chuyển.', evidenceTypes: ['representation', 'data'], isCritical: true },
      { id: 'PHY10-M1-O09', title: 'Rơi tự do', description: 'Mô tả, giải thích và tính toán chuyển động rơi tự do khi bỏ qua sức cản không khí.', evidenceTypes: ['explanation', 'calculation'] },
      { id: 'PHY10-M1-O10', title: 'Chuyển động ném', description: 'Phân tích chuyển động ném thành các chuyển động thành phần và dự đoán quỹ đạo.', evidenceTypes: ['representation', 'calculation', 'application'] },
      { id: 'PHY10-M1-O11', title: 'Thực hành đo tốc độ', description: 'Lựa chọn phương án, thu thập và xử lí dữ liệu để đo tốc độ của vật chuyển động.', evidenceTypes: ['experiment', 'data'] },
      { id: 'PHY10-M1-O12', title: 'Thực hành đo gia tốc rơi tự do', description: 'Thiết kế hoặc phân tích phép đo g, đánh giá sai số và giới hạn kết luận.', evidenceTypes: ['experiment', 'data', 'explanation'] }
    ]
  },
  {
    id: 'PHY10-M2', topicId: 'phy10-t2', slug: 'dong-luc-hoc', title: 'Động lực học', officialHours: 18, orderIndex: 3,
    summary: 'Giải thích sự thay đổi chuyển động bằng lực và phân tích điều kiện cân bằng của vật.',
    outcomes: [
      { id: 'PHY10-M2-O01', title: 'Tổng hợp và phân tích lực', description: 'Biểu diễn, tổng hợp và phân tích các lực đồng quy bằng vector.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M2-O02', title: 'Sơ đồ lực tự do', description: 'Xác định đúng vật khảo sát và biểu diễn đầy đủ các lực tác dụng lên vật.', evidenceTypes: ['representation', 'explanation'], isCritical: true },
      { id: 'PHY10-M2-O03', title: 'Định luật I Newton', description: 'Giải thích quán tính và trạng thái chuyển động khi hợp lực bằng không.', evidenceTypes: ['explanation', 'application'] },
      { id: 'PHY10-M2-O04', title: 'Định luật II Newton', description: 'Liên hệ hợp lực, khối lượng và gia tốc; vận dụng theo từng trục tọa độ.', evidenceTypes: ['representation', 'calculation'], isCritical: true },
      { id: 'PHY10-M2-O05', title: 'Định luật III Newton', description: 'Nhận diện cặp lực tương tác và phân biệt với hai lực cân bằng.', evidenceTypes: ['explanation', 'application'], isCritical: true },
      { id: 'PHY10-M2-O06', title: 'Trọng lực và trọng lượng', description: 'Phân biệt khối lượng, trọng lực, trọng lượng và vận dụng trong tình huống đơn giản.', evidenceTypes: ['explanation', 'calculation'] },
      { id: 'PHY10-M2-O07', title: 'Lực đàn hồi', description: 'Xác định phương, chiều và độ lớn lực đàn hồi trong giới hạn đàn hồi.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M2-O08', title: 'Lực ma sát', description: 'Phân biệt các loại ma sát và xác định vai trò, độ lớn của lực ma sát.', evidenceTypes: ['representation', 'application'] },
      { id: 'PHY10-M2-O09', title: 'Lực căng và phản lực', description: 'Biểu diễn lực căng dây, phản lực liên kết và vận dụng trong hệ vật đơn giản.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M2-O10', title: 'Chuyển động trong chất lưu', description: 'Mô tả vai trò lực cản và giải thích vận tốc giới hạn ở mức định tính.', evidenceTypes: ['explanation', 'application'] },
      { id: 'PHY10-M2-O11', title: 'Cân bằng lực', description: 'Thiết lập điều kiện cân bằng tịnh tiến cho vật chịu các lực đồng quy.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M2-O12', title: 'Moment lực', description: 'Tính moment và giải thích tác dụng làm quay phụ thuộc lực và cánh tay đòn.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M2-O13', title: 'Cân bằng vật rắn', description: 'Vận dụng quy tắc moment và điều kiện cân bằng trong tình huống thực tế.', evidenceTypes: ['representation', 'calculation', 'application'], isCritical: true },
      { id: 'PHY10-M2-O14', title: 'Khối lượng riêng và áp suất chất lỏng', description: 'Tính, giải thích sự phụ thuộc và vận dụng khối lượng riêng, áp suất chất lỏng.', evidenceTypes: ['calculation', 'application'] }
    ]
  },
  {
    id: 'PHY10-M3', topicId: 'phy10-t3', slug: 'cong-nang-luong-cong-suat', title: 'Công, năng lượng và công suất', officialHours: 10, orderIndex: 4,
    summary: 'Mô tả chuyển hóa năng lượng, công của lực, công suất và hiệu suất.',
    outcomes: [
      { id: 'PHY10-M3-O01', title: 'Năng lượng và chuyển hóa', description: 'Nhận diện các dạng năng lượng và mô tả sự truyền, chuyển hóa năng lượng.', evidenceTypes: ['recognition', 'explanation'] },
      { id: 'PHY10-M3-O02', title: 'Công của lực', description: 'Tính công, xác định dấu và giải thích ý nghĩa của công trong chuyển hóa năng lượng.', evidenceTypes: ['representation', 'calculation'], isCritical: true },
      { id: 'PHY10-M3-O03', title: 'Công suất', description: 'Tính và so sánh tốc độ thực hiện công hoặc truyền năng lượng.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M3-O04', title: 'Hiệu suất', description: 'Phân biệt năng lượng có ích, toàn phần và xác định hiệu suất của thiết bị.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M3-O05', title: 'Động năng và định lí động năng', description: 'Tính động năng và vận dụng mối liên hệ giữa công của hợp lực với độ biến thiên động năng.', evidenceTypes: ['calculation', 'explanation'] },
      { id: 'PHY10-M3-O06', title: 'Thế năng', description: 'Tính thế năng trọng trường, thế năng đàn hồi và nhận ra sự phụ thuộc mốc thế năng.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M3-O07', title: 'Bảo toàn cơ năng', description: 'Xác định điều kiện và vận dụng bảo toàn cơ năng cho hệ đơn giản.', evidenceTypes: ['calculation', 'application'], isCritical: true },
      { id: 'PHY10-M3-O08', title: 'Năng lượng trong thực tiễn', description: 'Phân tích tổn hao, hiệu quả năng lượng và đề xuất giải pháp sử dụng năng lượng hợp lí.', evidenceTypes: ['data', 'application'] }
    ]
  },
  {
    id: 'PHY10-M4', topicId: 'phy10-t4', slug: 'dong-luong', title: 'Động lượng', officialHours: 6, orderIndex: 5,
    summary: 'Mô tả tác dụng của tương tác trong thời gian ngắn và giải quyết va chạm bằng bảo toàn.',
    outcomes: [
      { id: 'PHY10-M4-O01', title: 'Động lượng', description: 'Nêu ý nghĩa, xác định vector và tính động lượng của vật hoặc hệ.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M4-O02', title: 'Xung lượng', description: 'Liên hệ xung lượng của lực với độ biến thiên động lượng.', evidenceTypes: ['calculation', 'explanation'] },
      { id: 'PHY10-M4-O03', title: 'Hệ kín và bảo toàn động lượng', description: 'Nhận diện điều kiện, thiết lập và vận dụng định luật bảo toàn động lượng.', evidenceTypes: ['representation', 'calculation'], isCritical: true },
      { id: 'PHY10-M4-O04', title: 'Va chạm một chiều', description: 'Giải bài toán va chạm mềm hoặc tách vật trong một chiều với quy ước dấu nhất quán.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M4-O05', title: 'Năng lượng trong va chạm', description: 'Phân tích sự thay đổi động năng và không đồng nhất bảo toàn động lượng với bảo toàn động năng.', evidenceTypes: ['data', 'explanation'], isCritical: true },
      { id: 'PHY10-M4-O06', title: 'Thực hành va chạm', description: 'Lựa chọn phương án đo, xử lí dữ liệu và đánh giá động lượng trước, sau va chạm.', evidenceTypes: ['experiment', 'data'] }
    ]
  },
  {
    id: 'PHY10-M5', topicId: 'phy10-t5', slug: 'chuyen-dong-tron', title: 'Chuyển động tròn', officialHours: 4, orderIndex: 6,
    summary: 'Mô tả đại lượng góc và giải thích chuyển động tròn bằng gia tốc, hợp lực hướng tâm.',
    outcomes: [
      { id: 'PHY10-M5-O01', title: 'Góc theo radian', description: 'Đổi và vận dụng góc radian trong mô tả chuyển động tròn.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M5-O02', title: 'Tốc độ góc', description: 'Tính tốc độ góc, chu kì, tần số và liên hệ với tốc độ dài.', evidenceTypes: ['calculation', 'application'] },
      { id: 'PHY10-M5-O03', title: 'Gia tốc hướng tâm', description: 'Xác định hướng, độ lớn gia tốc hướng tâm và giải thích sự đổi hướng vận tốc.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M5-O04', title: 'Lực hướng tâm', description: 'Xác định hợp lực đóng vai trò hướng tâm trong từng tình huống, không coi đó là lực mới.', evidenceTypes: ['representation', 'explanation'], isCritical: true },
      { id: 'PHY10-M5-O05', title: 'Ứng dụng chuyển động tròn', description: 'Vận dụng điều kiện động lực học vào đường cong, vòng quay và thiết bị thực tế.', evidenceTypes: ['calculation', 'application'] }
    ]
  },
  {
    id: 'PHY10-M6', topicId: 'phy10-t6', slug: 'bien-dang-vat-ran', title: 'Biến dạng của vật rắn', officialHours: 4, orderIndex: 7,
    summary: 'Mô tả biến dạng đàn hồi, đặc tính lò xo và kiểm chứng định luật Hooke bằng dữ liệu.',
    outcomes: [
      { id: 'PHY10-M6-O01', title: 'Biến dạng kéo và nén', description: 'Nhận diện, mô tả biến dạng kéo, nén và phân biệt biến dạng đàn hồi với không đàn hồi.', evidenceTypes: ['recognition', 'explanation'] },
      { id: 'PHY10-M6-O02', title: 'Độ biến dạng', description: 'Xác định độ biến dạng tuyệt đối, tương đối trong tình huống đơn giản.', evidenceTypes: ['representation', 'calculation'] },
      { id: 'PHY10-M6-O03', title: 'Định luật Hooke', description: 'Vận dụng quan hệ lực–độ biến dạng trong giới hạn đàn hồi.', evidenceTypes: ['calculation', 'application'], isCritical: true },
      { id: 'PHY10-M6-O04', title: 'Đồ thị lực–độ biến dạng', description: 'Đọc hệ số góc, xác định độ cứng và nhận diện miền không còn tuân theo Hooke.', evidenceTypes: ['representation', 'data'], isCritical: true },
      { id: 'PHY10-M6-O05', title: 'Thực hành xác định độ cứng', description: 'Thiết kế hoặc phân tích phép đo độ cứng lò xo, đánh giá sai số và an toàn.', evidenceTypes: ['experiment', 'data', 'application'] }
    ]
  }
];

export const g10PhysicsCoreContentHours = g10PhysicsCurriculumModules.reduce(
  (total, module) => total + module.officialHours,
  0
);

export const g10PhysicsPeriodicReviewAndAssessmentHours = 8;
export const g10PhysicsCoreProgramHours = 70;

