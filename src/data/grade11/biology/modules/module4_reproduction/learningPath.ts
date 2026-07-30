import type { LearningMisconception, LearningOutcome } from '@/types';

const seeds = [
  { number: 39, title: 'Sinh sản vô tính và hữu tính', description: 'Phân biệt số nguồn gene, giao tử, thụ tinh, tốc độ và ý nghĩa biến dị của hai hình thức sinh sản.', evidence: ['recognition', 'explanation'], prerequisite: [30] },
  { number: 40, title: 'Sinh sản vô tính ở thực vật', description: 'Phân tích sinh sản bằng thân, rễ, lá và các phương pháp giâm, chiết, ghép, nuôi cấy mô.', evidence: ['representation', 'application'], prerequisite: [39] },
  { number: 41, title: 'Hoa, giao tử và thụ phấn', description: 'Nhận diện cấu tạo hoa, sự hình thành hạt phấn, túi phôi và phân biệt tự thụ phấn với thụ phấn chéo.', evidence: ['representation', 'explanation'], prerequisite: [39] },
  { number: 42, title: 'Thụ tinh kép, hạt và quả', description: 'Giải thích hai sự kiện dung hợp ở thực vật có hoa và nguồn gốc phôi, nội nhũ, hạt, quả.', evidence: ['representation', 'application'], prerequisite: [41] },
  { number: 43, title: 'Thực hành nhân giống vô tính', description: 'Phân tích quy trình giâm, chiết, ghép và thiết kế so sánh tỉ lệ sống, ra rễ.', evidence: ['experiment', 'data'], prerequisite: [40] },
  { number: 44, title: 'Thực hành thụ phấn có kiểm soát', description: 'Sắp xếp thao tác khử nhị, bao hoa, lấy phấn, thụ phấn, ghi nhãn và đối chứng.', evidence: ['experiment', 'application'], prerequisite: [41, 42] },
  { number: 45, title: 'Sinh sản vô tính ở động vật', description: 'Phân biệt phân đôi, nảy chồi, phân mảnh, trinh sinh và đánh giá ưu, hạn chế.', evidence: ['recognition', 'application'], prerequisite: [39] },
  { number: 46, title: 'Sinh sản hữu tính ở động vật', description: 'Phân tích phát sinh giao tử, thụ tinh ngoài–trong, đẻ trứng–đẻ con và phát triển phôi.', evidence: ['representation', 'application'], prerequisite: [39, 35] },
  { number: 47, title: 'Điều hòa sinh sản ở người và động vật', description: 'Giải thích trục dưới đồi–tuyến yên–tuyến sinh dục, chu kì buồng trứng và phản hồi hormone.', evidence: ['representation', 'explanation'], prerequisite: [46] },
  { number: 48, title: 'Sức khỏe sinh sản và công nghệ hỗ trợ', description: 'Đánh giá biện pháp tránh thai, phòng bệnh lây truyền, hỗ trợ sinh sản và quyết định có trách nhiệm.', evidence: ['data', 'application'], prerequisite: [46, 47] }
] as const;

const misconceptions: LearningMisconception[] = [
  { id: 'bio11-misc-asexual-identical', outcomeId: 'out-bio11-39', title: 'Vô tính tạo bản sao tuyệt đối', description: 'Cho rằng con vô tính không thể khác nhau.', correction: 'Con thường rất giống nguồn về gene nhưng đột biến và môi trường vẫn có thể tạo khác biệt kiểu hình.', severity: 'normal' },
  { id: 'bio11-misc-tissue-culture-gmo', outcomeId: 'out-bio11-40', title: 'Nuôi cấy mô luôn tạo GMO', description: 'Đồng nhất nhân nhanh mô với chuyển gene.', correction: 'Nuôi cấy mô dựa trên tính toàn năng và điều kiện hormone; không mặc nhiên đưa gene ngoại lai.', severity: 'critical' },
  { id: 'bio11-misc-pollination-fertilization', outcomeId: 'out-bio11-41', title: 'Thụ phấn là thụ tinh', description: 'Đồng nhất hạt phấn đến đầu nhụy với hợp nhất giao tử.', correction: 'Thụ phấn xảy ra trước; ống phấn phải phát triển đưa tinh tử đến túi phôi rồi mới có thụ tinh.', severity: 'critical' },
  { id: 'bio11-misc-double-fertilization-two-embryos', outcomeId: 'out-bio11-42', title: 'Thụ tinh kép tạo hai phôi', description: 'Hiểu sai hai lần dung hợp đều tạo hợp tử.', correction: 'Một tinh tử kết hợp trứng tạo hợp tử; tinh tử còn lại kết hợp tế bào trung tâm tạo nội nhũ.', severity: 'critical' },
  { id: 'bio11-misc-parthenogenesis-sexual', outcomeId: 'out-bio11-45', title: 'Trinh sinh là hữu tính vì có trứng', description: 'Chỉ nhìn thấy tế bào trứng.', correction: 'Trong trinh sinh, cá thể phát triển từ trứng không thụ tinh nên được xếp vào sinh sản vô tính.', severity: 'normal' },
  { id: 'bio11-misc-contraception-sti', outcomeId: 'out-bio11-48', title: 'Mọi biện pháp tránh thai đều ngừa STI', description: 'Đồng nhất tránh thai với phòng lây truyền bệnh.', correction: 'Nhiều biện pháp nội tiết hoặc dụng cụ tránh thai không ngăn tiếp xúc tác nhân; bao cao su dùng đúng giúp giảm nguy cơ STI.', severity: 'critical' }
];

const misconceptionIds = misconceptions.reduce<Map<string, string[]>>((map, item) => {
  if (!item.outcomeId || !item.id) return map;
  map.set(item.outcomeId, [...(map.get(item.outcomeId) ?? []), item.id]);
  return map;
}, new Map());

export const g11BiologyModule4Outcomes: LearningOutcome[] = seeds.map(seed => {
  const id = `out-bio11-${seed.number}`;
  return {
    id,
    topicId: 'bio11-t04',
    title: seed.title,
    description: seed.description,
    scope: 'core',
    orderIndex: seed.number,
    questionTypeIds: [`bio11-qt${seed.number}`],
    prerequisiteOutcomeIds: [...seed.prerequisite].map(number => `out-bio11-${number}`),
    misconceptionIds: misconceptionIds.get(id) ?? [],
    evidenceTypes: [...seed.evidence] as LearningOutcome['evidenceTypes'],
    estimatedMinutes: 45,
    isCritical: ![39, 45].includes(seed.number)
  };
});

export const g11BiologyModule4Misconceptions = misconceptions;
