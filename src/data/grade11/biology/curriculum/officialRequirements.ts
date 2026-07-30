import type { OfficialRequirement } from '@/data/schema';

interface RequirementSeed {
  id: string;
  module: number;
  lessons: number[];
  title: string;
  requirement: string;
  verbs: string[];
  evidence: OfficialRequirement['evidenceTypes'];
  outcomes?: number[];
}

const implemented: RequirementSeed[] = [
  { id: 'metabolism-overview', module: 1, lessons: [1], title: 'Khái quát trao đổi chất', requirement: 'Phân tích được vai trò của trao đổi chất và chuyển hóa năng lượng đối với cơ thể sinh vật.', verbs: ['nêu', 'phân tích'], evidence: ['recognition', 'explanation'], outcomes: [1] },
  { id: 'water-absorption', module: 1, lessons: [2], title: 'Hấp thụ nước ở rễ', requirement: 'Trình bày và giải thích được cơ chế hấp thụ nước ở rễ theo thế nước.', verbs: ['trình bày', 'giải thích'], evidence: ['representation', 'explanation'], outcomes: [2] },
  { id: 'mineral-nutrition', module: 1, lessons: [2], title: 'Dinh dưỡng khoáng', requirement: 'Phân biệt được cơ chế hấp thụ ion khoáng và vai trò của một số nguyên tố khoáng thiết yếu.', verbs: ['phân biệt', 'vận dụng'], evidence: ['recognition', 'application'], outcomes: [3] },
  { id: 'plant-transport', module: 1, lessons: [2], title: 'Vận chuyển trong cây', requirement: 'Mô tả được vận chuyển trong mạch gỗ và mạch rây theo quan hệ nguồn–nơi chứa.', verbs: ['mô tả', 'so sánh'], evidence: ['representation', 'explanation'], outcomes: [4] },
  { id: 'transpiration', module: 1, lessons: [2], title: 'Thoát hơi nước', requirement: 'Giải thích được cơ chế thoát hơi nước, đóng mở khí khổng và các yếu tố ảnh hưởng.', verbs: ['giải thích', 'phân tích'], evidence: ['data', 'application'], outcomes: [5] },
  { id: 'water-experiment', module: 1, lessons: [3], title: 'Thực hành trao đổi nước và khoáng', requirement: 'Thiết kế hoặc phân tích được thí nghiệm về trao đổi nước, khoáng, thủy canh và khí canh.', verbs: ['thực hiện', 'phân tích'], evidence: ['experiment', 'data'], outcomes: [6] },
  { id: 'photosynthesis-light', module: 1, lessons: [4], title: 'Sắc tố và pha sáng', requirement: 'Trình bày được vai trò của sắc tố và các sản phẩm chính của pha sáng quang hợp.', verbs: ['trình bày', 'giải thích'], evidence: ['representation', 'explanation'], outcomes: [7] },
  { id: 'photosynthesis-pathways', module: 1, lessons: [4], title: 'Cố định carbon ở C3, C4 và CAM', requirement: 'So sánh được con đường cố định carbon ở thực vật C3, C4 và CAM.', verbs: ['so sánh', 'phân tích'], evidence: ['representation', 'application'], outcomes: [8] },
  { id: 'photosynthesis-factors', module: 1, lessons: [4], title: 'Yếu tố ảnh hưởng quang hợp', requirement: 'Phân tích được ảnh hưởng của ánh sáng, carbon dioxide và nhiệt độ đến quang hợp và năng suất.', verbs: ['phân tích', 'vận dụng'], evidence: ['data', 'application'], outcomes: [9] },
  { id: 'photosynthesis-experiment', module: 1, lessons: [5], title: 'Thực hành quang hợp', requirement: 'Phân tích được mục tiêu, đối chứng, hiện tượng và kết luận của thí nghiệm quang hợp.', verbs: ['thực hiện', 'phân tích'], evidence: ['experiment', 'data'], outcomes: [10] },
  { id: 'plant-respiration', module: 1, lessons: [6], title: 'Hô hấp ở thực vật', requirement: 'Trình bày được hô hấp hiếu khí, lên men và mối quan hệ giữa hô hấp với bảo quản nông sản.', verbs: ['trình bày', 'vận dụng'], evidence: ['explanation', 'application'], outcomes: [11] },
  { id: 'respiration-experiment', module: 1, lessons: [7], title: 'Thực hành hô hấp', requirement: 'Phân tích được thí nghiệm chứng minh hạt nảy mầm hô hấp, thải carbon dioxide và tỏa nhiệt.', verbs: ['thực hiện', 'phân tích'], evidence: ['experiment', 'data'], outcomes: [12] },
  { id: 'digestion', module: 1, lessons: [8], title: 'Dinh dưỡng và tiêu hóa', requirement: 'Phân biệt được các hình thức tiêu hóa và giải thích được sự phù hợp giữa cấu tạo với chức năng tiêu hóa.', verbs: ['phân biệt', 'giải thích'], evidence: ['representation', 'application'], outcomes: [13] },
  { id: 'animal-respiration', module: 1, lessons: [9], title: 'Hô hấp ở động vật', requirement: 'So sánh được các bề mặt trao đổi khí và giải thích được hiệu quả trao đổi khí.', verbs: ['so sánh', 'giải thích'], evidence: ['representation', 'application'], outcomes: [14] },
  { id: 'circulation', module: 1, lessons: [10], title: 'Tuần hoàn ở động vật', requirement: 'Phân biệt được hệ tuần hoàn hở, kín, đơn, kép và giải thích hoạt động của tim, mạch.', verbs: ['phân biệt', 'giải thích'], evidence: ['representation', 'application'], outcomes: [15] },
  { id: 'circulation-experiment', module: 1, lessons: [11], title: 'Thực hành tuần hoàn', requirement: 'Thu thập và xử lí được dữ liệu nhịp tim, huyết áp trong các điều kiện khác nhau.', verbs: ['đo', 'xử lí', 'nhận xét'], evidence: ['experiment', 'data'], outcomes: [16] },
  { id: 'immunity', module: 1, lessons: [12], title: 'Miễn dịch', requirement: 'Phân biệt được miễn dịch không đặc hiệu, đặc hiệu và giải thích nguyên lí vaccine.', verbs: ['phân biệt', 'giải thích'], evidence: ['representation', 'application'], outcomes: [17] },
  { id: 'excretion', module: 1, lessons: [13], title: 'Bài tiết', requirement: 'Trình bày được vai trò của bài tiết và cơ chế tạo nước tiểu ở thận.', verbs: ['trình bày', 'giải thích'], evidence: ['representation', 'explanation'], outcomes: [18] },
  { id: 'homeostasis', module: 1, lessons: [13], title: 'Cân bằng nội môi', requirement: 'Giải thích được cơ chế phản hồi âm trong điều hòa đường huyết, áp suất thẩm thấu và thân nhiệt.', verbs: ['giải thích', 'vận dụng'], evidence: ['representation', 'application'], outcomes: [19] },
  { id: 'metabolism-integration', module: 1, lessons: [1, 13], title: 'Tích hợp trao đổi chất ở cơ thể', requirement: 'Phân tích được sự phối hợp giữa tiêu hóa, hô hấp, tuần hoàn, bài tiết và cân bằng nội môi.', verbs: ['phân tích', 'vận dụng'], evidence: ['explanation', 'application'], outcomes: [20] },
  { id: 'response-overview', module: 2, lessons: [14], title: 'Khái quát cảm ứng', requirement: 'Nêu được khái niệm cảm ứng và mô tả chuỗi tiếp nhận–xử lí–đáp ứng.', verbs: ['nêu', 'mô tả'], evidence: ['recognition', 'representation'], outcomes: [21] },
  { id: 'tropism', module: 2, lessons: [15], title: 'Hướng động', requirement: 'Phân biệt được các kiểu hướng động và giải thích cơ chế hướng động ở thực vật.', verbs: ['phân biệt', 'giải thích'], evidence: ['representation', 'application'], outcomes: [22] },
  { id: 'nastic-movement', module: 2, lessons: [15], title: 'Ứng động', requirement: 'Phân biệt được ứng động sinh trưởng và không sinh trưởng bằng cơ chế phù hợp.', verbs: ['phân biệt', 'giải thích'], evidence: ['recognition', 'application'], outcomes: [23] },
  { id: 'plant-response-experiment', module: 2, lessons: [16], title: 'Thực hành cảm ứng thực vật', requirement: 'Thiết kế và phân tích được thí nghiệm chứng minh một hình thức cảm ứng ở thực vật.', verbs: ['thiết kế', 'phân tích'], evidence: ['experiment', 'data'], outcomes: [24] },
  { id: 'nervous-organization', module: 2, lessons: [17], title: 'Tổ chức hệ thần kinh và phản xạ', requirement: 'So sánh được các dạng hệ thần kinh và phân tích được cung phản xạ.', verbs: ['so sánh', 'phân tích'], evidence: ['representation', 'explanation'], outcomes: [25] },
  { id: 'membrane-potential', module: 2, lessons: [17], title: 'Điện thế màng và xung thần kinh', requirement: 'Giải thích được điện thế nghỉ, điện thế hoạt động và sự lan truyền xung thần kinh.', verbs: ['giải thích', 'phân tích'], evidence: ['representation', 'explanation'], outcomes: [26] },
  { id: 'synapse', module: 2, lessons: [17], title: 'Truyền tin qua synapse', requirement: 'Trình bày được cấu tạo, cơ chế truyền tin một chiều qua synapse hóa học.', verbs: ['trình bày', 'giải thích'], evidence: ['representation', 'application'], outcomes: [27] },
  { id: 'animal-behaviour', module: 2, lessons: [18], title: 'Tập tính bẩm sinh và học được', requirement: 'Phân biệt được tập tính bẩm sinh, học được và các hình thức học tập ở động vật.', verbs: ['phân biệt', 'vận dụng'], evidence: ['recognition', 'application'], outcomes: [28] },
  { id: 'behaviour-application', module: 2, lessons: [18], title: 'Quan sát và ứng dụng tập tính', requirement: 'Phân tích được dữ liệu quan sát tập tính và vận dụng hiểu biết về tập tính trong đời sống.', verbs: ['quan sát', 'phân tích', 'vận dụng'], evidence: ['data', 'application'], outcomes: [29] }
];

const remaining: RequirementSeed[] = [
  { id: 'growth-overview', module: 3, lessons: [19], title: 'Khái quát sinh trưởng và phát triển', requirement: 'Trình bày được khái niệm và quan hệ giữa sinh trưởng với phát triển.', verbs: ['trình bày'], evidence: ['recognition'], outcomes: [30] },
  { id: 'plant-growth', module: 3, lessons: [20], title: 'Sinh trưởng thực vật', requirement: 'Phân tích được sinh trưởng sơ cấp, thứ cấp, vai trò mô phân sinh và các yếu tố ảnh hưởng.', verbs: ['phân tích'], evidence: ['representation', 'data'], outcomes: [31, 33] },
  { id: 'plant-hormones', module: 3, lessons: [20, 21], title: 'Hormone thực vật và ứng dụng', requirement: 'Giải thích được tác động của hormone và ứng dụng điều tiết sinh trưởng thực vật.', verbs: ['giải thích', 'vận dụng'], evidence: ['application', 'experiment'], outcomes: [32, 34] },
  { id: 'animal-growth', module: 3, lessons: [22], title: 'Sinh trưởng động vật', requirement: 'Phân tích được các kiểu phát triển, sự điều hòa và yếu tố ảnh hưởng đến sinh trưởng ở động vật.', verbs: ['phân tích', 'vận dụng'], evidence: ['representation', 'application'], outcomes: [35, 36, 37] },
  { id: 'growth-practice', module: 3, lessons: [23], title: 'Thực hành sinh trưởng và phát triển', requirement: 'Quan sát, thu thập và xử lí được dữ liệu sinh trưởng hoặc biến thái.', verbs: ['quan sát', 'xử lí'], evidence: ['experiment', 'data'], outcomes: [38] },
  { id: 'reproduction-overview', module: 4, lessons: [24], title: 'Khái quát sinh sản', requirement: 'Phân biệt được sinh sản vô tính và hữu tính.', verbs: ['phân biệt'], evidence: ['recognition'], outcomes: [39] },
  { id: 'plant-reproduction', module: 4, lessons: [25], title: 'Sinh sản thực vật', requirement: 'Phân tích được sinh sản vô tính, hữu tính và thụ tinh kép ở thực vật.', verbs: ['phân tích'], evidence: ['representation'], outcomes: [40, 41, 42] },
  { id: 'reproduction-practice', module: 4, lessons: [26], title: 'Thực hành nhân giống và thụ phấn', requirement: 'Thực hiện hoặc phân tích được quy trình nhân giống vô tính, thụ phấn.', verbs: ['thực hiện', 'phân tích'], evidence: ['experiment'], outcomes: [43, 44] },
  { id: 'animal-reproduction', module: 4, lessons: [27], title: 'Sinh sản động vật', requirement: 'Giải thích được các hình thức, quá trình, điều hòa sinh sản và sức khỏe sinh sản ở động vật, người.', verbs: ['giải thích', 'vận dụng'], evidence: ['representation', 'application'], outcomes: [45, 46, 47, 48] },
  { id: 'physiology-integration', module: 5, lessons: [28], title: 'Cơ thể là hệ thống mở, tự điều chỉnh', requirement: 'Phân tích được mối quan hệ giữa các quá trình sinh lí trong cơ thể thực vật và động vật.', verbs: ['phân tích'], evidence: ['explanation', 'application'], outcomes: [49, 50, 51] },
  { id: 'body-biology-careers', module: 5, lessons: [29], title: 'Ngành nghề sinh học cơ thể', requirement: 'Tìm hiểu và đánh giá được một số ngành nghề liên quan đến sinh học cơ thể.', verbs: ['tìm hiểu', 'đánh giá'], evidence: ['application'], outcomes: [52] }
];

const toRequirement = (seed: RequirementSeed): OfficialRequirement => ({
  id: `bio11-official-${seed.id}`,
  courseId: 'grade11:biology',
  moduleId: `bio11-m${seed.module}`,
  lessonIds: seed.lessons.map(number => `bio11-kntt-l${number}`),
  title: seed.title,
  normalizedRequirement: seed.requirement,
  actionVerbs: seed.verbs,
  evidenceTypes: seed.evidence,
  sourceLocators: [`Tài liệu hướng dẫn Sinh học 11 → ${seed.title}`],
  implementedOutcomeIds: (seed.outcomes ?? []).map(number => `out-bio11-${String(number).padStart(2, '0')}`),
  coverageStatus: 'covered',
  reviewStatus: 'source_checked'
});

export const g11BiologyOfficialRequirements: OfficialRequirement[] = [
  ...implemented.map(toRequirement),
  ...remaining.map(toRequirement)
];
