import type { LearningMisconception, LearningOutcome } from '@/types';

const seeds = [
  { number: 30, title: 'Phân biệt sinh trưởng và phát triển', description: 'Phân biệt biến đổi định lượng của sinh trưởng với biến đổi định tính của phát triển và phân tích mối quan hệ giữa hai quá trình.', lesson: 19, evidence: ['recognition', 'explanation'], prerequisite: [1] },
  { number: 31, title: 'Mô phân sinh, sinh trưởng sơ cấp và thứ cấp', description: 'Xác định vị trí, hoạt động của mô phân sinh và giải thích sinh trưởng chiều dài, chiều ngang của thực vật.', lesson: 20, evidence: ['representation', 'explanation'], prerequisite: [30] },
  { number: 32, title: 'Hormone thực vật', description: 'So sánh nguồn hình thành và tác động phụ thuộc nồng độ, mô đích của auxin, gibberellin, cytokinin, ethylene và abscisic acid.', lesson: 20, evidence: ['representation', 'application'], prerequisite: [31] },
  { number: 33, title: 'Yếu tố ảnh hưởng sinh trưởng thực vật', description: 'Phân tích ảnh hưởng của kiểu gene, ánh sáng, nhiệt độ, nước và dinh dưỡng bằng dữ liệu hoặc đồ thị.', lesson: 20, evidence: ['data', 'application'], prerequisite: [31, 32] },
  { number: 34, title: 'Ứng dụng điều khiển sinh trưởng thực vật', description: 'Giải thích cơ sở của bấm ngọn, tỉa cành, xử lí hormone, tính tuổi cây và đánh giá giới hạn thực hành.', lesson: 21, evidence: ['experiment', 'application'], prerequisite: [31, 32, 33] },
  { number: 35, title: 'Các kiểu phát triển ở động vật', description: 'Phân biệt phát triển không qua biến thái, qua biến thái không hoàn toàn và qua biến thái hoàn toàn.', lesson: 22, evidence: ['representation', 'application'], prerequisite: [30] },
  { number: 36, title: 'Điều hòa sinh trưởng và biến thái ở động vật', description: 'Giải thích vai trò hormone sinh trưởng, thyroxine, ecdysone và juvenile hormone trong các nhóm động vật.', lesson: 22, evidence: ['representation', 'explanation'], prerequisite: [35] },
  { number: 37, title: 'Yếu tố ảnh hưởng và ứng dụng ở động vật', description: 'Phân tích tác động của dinh dưỡng, nhiệt độ, hormone và vận dụng vào chăm sóc sức khỏe, chăn nuôi có trách nhiệm.', lesson: 22, evidence: ['data', 'application'], prerequisite: [35, 36] },
  { number: 38, title: 'Thực hành quan sát biến thái', description: 'Thiết kế quan sát, lập bảng, nhận diện giai đoạn và rút kết luận có giới hạn từ vòng đời động vật.', lesson: 23, evidence: ['experiment', 'data'], prerequisite: [35, 36] }
] as const;

const misconceptions: LearningMisconception[] = [
  { id: 'bio11-misc-growth-development-same', outcomeId: 'out-bio11-30', title: 'Sinh trưởng và phát triển là một', description: 'Đồng nhất mọi tăng kích thước với hoàn thiện chức năng.', correction: 'Sinh trưởng thiên về biến đổi định lượng; phát triển gồm biến đổi định tính, phân hóa và phát sinh hình thái. Hai quá trình liên quan nhưng không đồng nhất.', severity: 'critical' },
  { id: 'bio11-misc-secondary-all-plants', outcomeId: 'out-bio11-31', title: 'Mọi cây đều sinh trưởng thứ cấp rõ', description: 'Cho rằng tăng đường kính thân diễn ra giống nhau ở mọi thực vật.', correction: 'Sinh trưởng thứ cấp điển hình ở cây hai lá mầm và hạt trần có mô phân sinh bên; đa số cây một lá mầm không có kiểu tăng đường kính này.', severity: 'normal' },
  { id: 'bio11-misc-hormone-one-effect', outcomeId: 'out-bio11-32', title: 'Mỗi hormone chỉ có một tác dụng', description: 'Học thuộc một tên hormone tương ứng đúng một hiệu quả.', correction: 'Tác động hormone phụ thuộc nồng độ, mô, giai đoạn và tương tác với hormone khác.', severity: 'critical' },
  { id: 'bio11-misc-pruning-feeds-fruit', outcomeId: 'out-bio11-34', title: 'Bấm ngọn chỉ để dồn dinh dưỡng', description: 'Bỏ qua cơ chế ưu thế ngọn và hormone.', correction: 'Loại bỏ chồi ngọn làm giảm nguồn auxin duy trì ưu thế ngọn, giúp chồi bên phát triển; thay đổi phân bổ nguồn lực là hệ quả phối hợp.', severity: 'critical' },
  { id: 'bio11-misc-molting-metamorphosis', outcomeId: 'out-bio11-35', title: 'Lột xác luôn là biến thái hoàn toàn', description: 'Đồng nhất sự thay vỏ với thay đổi kiểu cơ thể qua nhộng.', correction: 'Côn trùng biến thái không hoàn toàn cũng lột xác nhưng không có giai đoạn nhộng; biến thái hoàn toàn có ấu trùng và nhộng khác rõ con trưởng thành.', severity: 'critical' },
  { id: 'bio11-misc-growth-hormone-safe', outcomeId: 'out-bio11-37', title: 'Dùng hormone luôn giúp lớn nhanh an toàn', description: 'Bỏ qua chỉ định, liều và hậu quả sinh lí.', correction: 'Hormone chỉ nên dùng đúng chẩn đoán và chuyên môn; thừa hormone có thể gây rối loạn nghiêm trọng, không thay thế dinh dưỡng và chăm sóc.', severity: 'critical' }
];

const misconceptionIds = misconceptions.reduce<Map<string, string[]>>((map, item) => {
  if (!item.outcomeId || !item.id) return map;
  map.set(item.outcomeId, [...(map.get(item.outcomeId) ?? []), item.id]);
  return map;
}, new Map());

export const g11BiologyModule3Outcomes: LearningOutcome[] = seeds.map(seed => {
  const id = `out-bio11-${seed.number}`;
  return {
    id,
    topicId: 'bio11-t03',
    title: seed.title,
    description: seed.description,
    scope: 'core',
    orderIndex: seed.number,
    questionTypeIds: [`bio11-qt${seed.number}`],
    prerequisiteOutcomeIds: [...seed.prerequisite].map(
      number => `out-bio11-${String(number).padStart(2, '0')}`
    ),
    misconceptionIds: misconceptionIds.get(id) ?? [],
    evidenceTypes: [...seed.evidence] as LearningOutcome['evidenceTypes'],
    estimatedMinutes: 45,
    isCritical: [30, 31, 32, 34, 35, 36, 38].includes(seed.number)
  };
});

export const g11BiologyModule3Misconceptions = misconceptions;
