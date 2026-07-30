import type { LearningMisconception, LearningOutcome } from '@/types';

const seeds = [
  { number: 21, title: 'Chuỗi tiếp nhận và đáp ứng kích thích', description: 'Mô tả được cảm ứng theo chuỗi kích thích–tiếp nhận–xử lí–đáp ứng và giải thích vai trò thích nghi.', lesson: 14, evidence: ['recognition', 'representation'] as LearningOutcome['evidenceTypes'], prerequisite: [] },
  { number: 22, title: 'Hướng động ở thực vật', description: 'Phân biệt hướng sáng, hướng trọng lực, hướng nước, hướng hóa và giải thích hướng động dương, âm.', lesson: 15, evidence: ['representation', 'application'] as LearningOutcome['evidenceTypes'], prerequisite: [21] },
  { number: 23, title: 'Ứng động ở thực vật', description: 'Phân biệt ứng động sinh trưởng với ứng động không sinh trưởng dựa trên tác nhân và cơ chế.', lesson: 15, evidence: ['recognition', 'application'] as LearningOutcome['evidenceTypes'], prerequisite: [21] },
  { number: 24, title: 'Thực hành cảm ứng ở thực vật', description: 'Thiết kế hoặc phân tích thí nghiệm hướng sáng, hướng trọng lực; xác định biến, đối chứng và kết luận.', lesson: 16, evidence: ['experiment', 'data'] as LearningOutcome['evidenceTypes'], prerequisite: [22, 23] },
  { number: 25, title: 'Tổ chức hệ thần kinh và cung phản xạ', description: 'So sánh hệ thần kinh dạng lưới, chuỗi hạch, dạng ống và phân tích các bộ phận của cung phản xạ.', lesson: 17, evidence: ['representation', 'explanation'] as LearningOutcome['evidenceTypes'], prerequisite: [21] },
  { number: 26, title: 'Điện thế nghỉ, điện thế hoạt động và xung thần kinh', description: 'Giải thích vai trò chênh lệch ion, tính thấm màng và sự lan truyền điện thế hoạt động.', lesson: 17, evidence: ['representation', 'explanation'] as LearningOutcome['evidenceTypes'], prerequisite: [25] },
  { number: 27, title: 'Truyền tin qua synapse hóa học', description: 'Sắp xếp đúng các bước giải phóng chất trung gian, gắn thụ thể và tạo đáp ứng sau synapse.', lesson: 17, evidence: ['representation', 'application'] as LearningOutcome['evidenceTypes'], prerequisite: [26] },
  { number: 28, title: 'Tập tính bẩm sinh và học được', description: 'Phân biệt cơ sở, độ linh hoạt của tập tính bẩm sinh, học được và các hình thức học tập.', lesson: 18, evidence: ['recognition', 'application'] as LearningOutcome['evidenceTypes'], prerequisite: [25] },
  { number: 29, title: 'Quan sát và ứng dụng tập tính động vật', description: 'Đọc dữ liệu quan sát, tránh nhân hóa và vận dụng tập tính vào chăn nuôi, bảo tồn, kiểm soát sinh vật.', lesson: 18, evidence: ['data', 'application'] as LearningOutcome['evidenceTypes'], prerequisite: [28] }
];

const misconceptions: LearningMisconception[] = [
  { id: 'bio11-misc-plant-no-response', outcomeId: 'out-bio11-21', title: 'Thực vật không có cảm ứng', description: 'Cho rằng không di chuyển nhanh đồng nghĩa không đáp ứng kích thích.', correction: 'Thực vật đáp ứng bằng thay đổi sinh trưởng, sức trương nước, đóng mở khí khổng và nhiều biến đổi sinh lí khác.', severity: 'critical' },
  { id: 'bio11-misc-tropism-nastic', outcomeId: 'out-bio11-23', title: 'Mọi vận động của cây đều là hướng động', description: 'Chỉ nhìn thấy cây chuyển động mà không xét hướng của tác nhân.', correction: 'Hướng động phụ thuộc hướng tác nhân; ứng động có hướng đáp ứng không phụ thuộc hướng tác nhân.', severity: 'critical' },
  { id: 'bio11-misc-reflex-conscious', outcomeId: 'out-bio11-25', title: 'Phản xạ luôn có ý thức', description: 'Cho rằng mọi phản xạ đều cần chủ động suy nghĩ.', correction: 'Nhiều phản xạ được xử lí nhanh qua trung ương thần kinh mà không cần ý thức chủ động.', severity: 'normal' },
  { id: 'bio11-misc-action-potential-strength', outcomeId: 'out-bio11-26', title: 'Kích thích mạnh tạo điện thế hoạt động cao hơn', description: 'Áp dụng sai quan hệ cường độ kích thích với biên độ điện thế hoạt động.', correction: 'Khi vượt ngưỡng, một điện thế hoạt động tuân theo nguyên tắc tất cả hoặc không; cường độ thường được mã hóa bằng tần số xung.', severity: 'critical' },
  { id: 'bio11-misc-synapse-two-way', outcomeId: 'out-bio11-27', title: 'Synapse hóa học truyền hai chiều như dây dẫn', description: 'Bỏ qua sự phân cực cấu trúc của synapse.', correction: 'Túi chất trung gian ở màng trước và thụ thể ở màng sau làm truyền tin qua synapse hóa học chủ yếu theo một chiều.', severity: 'critical' },
  { id: 'bio11-misc-behaviour-binary', outcomeId: 'out-bio11-28', title: 'Tập tính chỉ hoàn toàn bẩm sinh hoặc hoàn toàn học được', description: 'Không xét sự phối hợp giữa di truyền và trải nghiệm.', correction: 'Nhiều tập tính có nền tảng bẩm sinh nhưng được điều chỉnh về thời điểm, mức độ hoặc cách biểu hiện nhờ học tập.', severity: 'normal' }
];

const misconceptionIdsByOutcome = new Map(misconceptions.map(item => [item.outcomeId, item.id]));

export const g11BiologyModule2Outcomes: LearningOutcome[] = seeds.map(seed => ({
  id: `out-bio11-${seed.number}`,
  topicId: 'bio11-t02',
  title: seed.title,
  description: seed.description,
  scope: 'core',
  orderIndex: seed.number,
  questionTypeIds: [`bio11-qt${seed.number}`],
  prerequisiteOutcomeIds: seed.prerequisite.map(number => `out-bio11-${number}`),
  misconceptionIds: misconceptionIdsByOutcome.has(`out-bio11-${seed.number}`)
    ? [misconceptionIdsByOutcome.get(`out-bio11-${seed.number}`)!]
    : [],
  evidenceTypes: seed.evidence,
  estimatedMinutes: 45,
  isCritical: [21, 24, 25, 26, 27, 28].includes(seed.number)
}));

export const g11BiologyModule2Misconceptions = misconceptions;
