import type { LearningMisconception, LearningOutcome } from '@/types';

const seeds = [
  { number: 49, title: 'Cơ thể là hệ thống mở, tự điều chỉnh', description: 'Mô hình hóa dòng vật chất, năng lượng, thông tin và cơ chế phản hồi giữa cơ thể với môi trường.', evidence: ['representation', 'explanation'], prerequisite: [20, 29, 38, 48] },
  { number: 50, title: 'Tích hợp các quá trình sinh lí ở thực vật', description: 'Phân tích phối hợp hấp thụ, vận chuyển, quang hợp, hô hấp, hormone, sinh trưởng và sinh sản ở cây.', evidence: ['representation', 'application'], prerequisite: [4, 7, 11, 32, 41] },
  { number: 51, title: 'Tích hợp các quá trình sinh lí ở động vật', description: 'Phân tích phối hợp tiêu hóa, hô hấp, tuần hoàn, bài tiết, thần kinh, nội tiết, sinh trưởng và sinh sản.', evidence: ['data', 'application'], prerequisite: [20, 27, 36, 47] },
  { number: 52, title: 'Ngành nghề sinh học cơ thể', description: 'Đối chiếu nhiệm vụ, năng lực, đào tạo, an toàn, đạo đức và nguồn thông tin của các nghề liên quan.', evidence: ['data', 'application'], prerequisite: [49] }
] as const;

const misconceptions: LearningMisconception[] = [
  { id: 'bio11-misc-organs-independent', outcomeId: 'out-bio11-49', title: 'Cơ quan hoạt động độc lập', description: 'Phân tích từng hệ mà không nối dòng vật chất và thông tin.', correction: 'Các quá trình phụ thuộc nhau qua chất vận chuyển, năng lượng, tín hiệu thần kinh–hormone và phản hồi.', severity: 'critical' },
  { id: 'bio11-misc-plant-photosynthesis-only', outcomeId: 'out-bio11-50', title: 'Cây chỉ cần quang hợp', description: 'Bỏ qua hô hấp, nước, khoáng và vận chuyển.', correction: 'Quang hợp cần nguyên liệu, hệ vận chuyển và hô hấp vẫn cung cấp ATP cho nhiều hoạt động cả ngày lẫn đêm.', severity: 'critical' },
  { id: 'bio11-misc-career-title', outcomeId: 'out-bio11-52', title: 'Chọn nghề chỉ theo tên gọi', description: 'Không kiểm tra nhiệm vụ, đào tạo, môi trường làm việc.', correction: 'Cần đối chiếu nguồn đáng tin, công việc thực tế, yêu cầu năng lực, lộ trình đào tạo, an toàn và đạo đức.', severity: 'normal' }
];

const misconceptionIds = misconceptions.reduce<Map<string, string>>((map, item) => {
  if (item.outcomeId && item.id) map.set(item.outcomeId, item.id);
  return map;
}, new Map());

export const g11BiologyModule5Outcomes: LearningOutcome[] = seeds.map(seed => {
  const id = `out-bio11-${seed.number}`;
  return {
    id, topicId: 'bio11-t05', title: seed.title, description: seed.description, scope: 'core',
    orderIndex: seed.number, questionTypeIds: [`bio11-qt${seed.number}`],
    prerequisiteOutcomeIds: [...seed.prerequisite].map(
      number => `out-bio11-${String(number).padStart(2, '0')}`
    ),
    misconceptionIds: misconceptionIds.has(id) ? [misconceptionIds.get(id)!] : [],
    evidenceTypes: [...seed.evidence] as LearningOutcome['evidenceTypes'],
    estimatedMinutes: 45, isCritical: seed.number !== 52
  };
});

export const g11BiologyModule5Misconceptions = misconceptions;
