import type { OfficialRequirement } from '@/data/schema';

const requirement = (
  id: string,
  moduleId: string,
  lessonIds: string[],
  title: string,
  normalizedRequirement: string,
  actionVerbs: string[],
  evidenceTypes: OfficialRequirement['evidenceTypes'],
  implementedOutcomeIds: string[]
): OfficialRequirement => ({
  id,
  courseId: 'grade11:physics',
  moduleId,
  lessonIds,
  title,
  normalizedRequirement,
  actionVerbs,
  evidenceTypes,
  sourceLocators: [
    `Tài liệu hướng dẫn Vật lí 11 → ${moduleId} → Yêu cầu cần đạt`
  ],
  implementedOutcomeIds,
  coverageStatus: 'covered',
  reviewStatus: 'source_checked'
});

export const g11PhysicsOfficialRequirements: OfficialRequirement[] = [
  requirement(
    'phy11-official-ch1-characteristics',
    'phy11-m1',
    ['phy11-kntt-l1', 'phy11-kntt-l2'],
    'Mô tả các đại lượng đặc trưng của dao động điều hòa',
    'Từ đồ thị li độ–thời gian và biểu thức dao động, xác định biên độ, chu kì, tần số, tần số góc và pha dao động.',
    ['xác định', 'mô tả'],
    ['representation', 'calculation'],
    ['out-phy11-m1-01']
  ),
  requirement(
    'phy11-official-ch1-motion',
    'phy11-m1',
    ['phy11-kntt-l3', 'phy11-kntt-l4'],
    'Xác định li độ, vận tốc và gia tốc',
    'Sử dụng đồ thị hoặc tính toán để xác định li độ, vận tốc và gia tốc của vật dao động điều hòa.',
    ['sử dụng', 'xác định', 'tính toán'],
    ['representation', 'calculation'],
    ['out-phy11-m1-02']
  ),
  requirement(
    'phy11-official-ch1-energy',
    'phy11-m1',
    ['phy11-kntt-l5', 'phy11-kntt-l7'],
    'Phân tích năng lượng dao động',
    'Mô tả sự chuyển hóa động năng–thế năng và vận dụng bảo toàn cơ năng cho dao động điều hòa lí tưởng.',
    ['mô tả', 'vận dụng'],
    ['representation', 'calculation', 'explanation'],
    ['out-phy11-m1-03']
  ),
  requirement(
    'phy11-official-ch1-damping-forced',
    'phy11-m1',
    ['phy11-kntt-l6'],
    'Mô tả dao động tắt dần và cưỡng bức',
    'Nêu đặc điểm, nguyên nhân và sự phụ thuộc của dao động tắt dần và dao động cưỡng bức.',
    ['nêu', 'mô tả'],
    ['explanation', 'application'],
    ['out-phy11-m1-04']
  ),
  requirement(
    'phy11-official-ch1-resonance',
    'phy11-m1',
    ['phy11-kntt-l6'],
    'Giải thích hiện tượng cộng hưởng',
    'Nêu điều kiện cộng hưởng và phân tích lợi ích hoặc tác hại của cộng hưởng trong thực tiễn.',
    ['nêu', 'phân tích', 'giải thích'],
    ['explanation', 'application'],
    ['out-phy11-m1-05']
  ),
  requirement(
    'phy11-official-ch1-experiment',
    'phy11-m1',
    ['phy11-kntt-l1'],
    'Khảo sát dao động bằng thực nghiệm',
    'Thực hiện hoặc phân tích thí nghiệm đơn giản tạo dao động, thu thập dữ liệu và mô tả dao động tự do.',
    ['thực hiện', 'phân tích', 'mô tả'],
    ['experiment', 'data', 'explanation'],
    ['out-phy11-m1-06']
  ),

  requirement(
    'phy11-official-ch2-description',
    'phy11-m2',
    ['phy11-kntt-l8'],
    'Mô tả sóng từ đồ thị',
    'Đọc đồ thị độ dịch chuyển–vị trí hoặc độ dịch chuyển–thời gian để xác định các đại lượng đặc trưng của sóng.',
    ['đọc', 'xác định', 'mô tả'],
    ['representation', 'data'],
    ['out-phy11-m2-01']
  ),
  requirement(
    'phy11-official-ch2-speed-energy',
    'phy11-m2',
    ['phy11-kntt-l8', 'phy11-kntt-l9', 'phy11-kntt-l14'],
    'Vận dụng tốc độ truyền sóng và giải thích truyền năng lượng',
    'Vận dụng v = λf và giải thích sự truyền năng lượng của sóng.',
    ['vận dụng', 'giải thích'],
    ['calculation', 'explanation'],
    ['out-phy11-m2-02']
  ),
  requirement(
    'phy11-official-ch2-wave-types',
    'phy11-m2',
    ['phy11-kntt-l9'],
    'Phân biệt sóng ngang và sóng dọc',
    'Phân biệt sóng ngang, sóng dọc theo phương dao động của phần tử môi trường.',
    ['phân biệt', 'nêu'],
    ['recognition', 'explanation'],
    ['out-phy11-m2-03']
  ),
  requirement(
    'phy11-official-ch2-sound-frequency',
    'phy11-m2',
    ['phy11-kntt-l10'],
    'Đo tần số sóng âm',
    'Thực hiện hoặc phân tích thí nghiệm đo tần số của sóng âm và xử lí số liệu.',
    ['thực hiện', 'phân tích', 'xử lí'],
    ['experiment', 'data'],
    ['out-phy11-m2-04']
  ),
  requirement(
    'phy11-official-ch2-electromagnetic',
    'phy11-m2',
    ['phy11-kntt-l11'],
    'Mô tả phổ sóng điện từ',
    'Sắp xếp các miền của phổ sóng điện từ theo bước sóng hoặc tần số và nêu một số ứng dụng.',
    ['sắp xếp', 'nêu', 'liên hệ'],
    ['representation', 'application'],
    ['out-phy11-m2-05']
  ),
  requirement(
    'phy11-official-ch2-interference',
    'phy11-m2',
    ['phy11-kntt-l12', 'phy11-kntt-l14'],
    'Phân tích giao thoa sóng',
    'Mô tả điều kiện giao thoa, xác định cực đại–cực tiểu và vận dụng quan hệ khoảng vân trong tình huống phù hợp.',
    ['mô tả', 'xác định', 'vận dụng'],
    ['representation', 'calculation', 'experiment'],
    ['out-phy11-m2-06']
  ),
  requirement(
    'phy11-official-ch2-standing',
    'phy11-m2',
    ['phy11-kntt-l13', 'phy11-kntt-l14'],
    'Phân tích sóng dừng',
    'Nhận biết nút–bụng, giải thích sự hình thành và vận dụng điều kiện sóng dừng.',
    ['nhận biết', 'giải thích', 'vận dụng'],
    ['representation', 'calculation', 'explanation'],
    ['out-phy11-m2-07']
  ),
  requirement(
    'phy11-official-ch2-sound-speed',
    'phy11-m2',
    ['phy11-kntt-l15'],
    'Đo tốc độ truyền âm',
    'Thực hiện hoặc phân tích phương án đo tốc độ truyền âm, xử lí số liệu và đánh giá sai số.',
    ['thực hiện', 'phân tích', 'đánh giá'],
    ['experiment', 'data', 'explanation'],
    ['out-phy11-m2-08']
  ),

  requirement(
    'phy11-official-ch3-coulomb',
    'phy11-m3',
    ['phy11-kntt-l16'],
    'Vận dụng định luật Coulomb',
    'Mô tả lực tương tác giữa các điện tích điểm và vận dụng định luật Coulomb.',
    ['mô tả', 'vận dụng'],
    ['representation', 'calculation'],
    ['out-phy11-m3-01']
  ),
  requirement(
    'phy11-official-ch3-field-concept',
    'phy11-m3',
    ['phy11-kntt-l17'],
    'Giải thích khái niệm điện trường',
    'Nêu khái niệm điện trường và sử dụng cường độ điện trường để đặc trưng điện trường tại một điểm.',
    ['nêu', 'giải thích', 'sử dụng'],
    ['explanation', 'representation'],
    ['out-phy11-m3-02']
  ),
  requirement(
    'phy11-official-ch3-point-charge',
    'phy11-m3',
    ['phy11-kntt-l17'],
    'Tính điện trường của điện tích điểm',
    'Vận dụng biểu thức điện trường của điện tích điểm và nguyên lí chồng chất điện trường.',
    ['vận dụng', 'tính toán'],
    ['representation', 'calculation'],
    ['out-phy11-m3-03']
  ),
  requirement(
    'phy11-official-ch3-field-lines',
    'phy11-m3',
    ['phy11-kntt-l17'],
    'Biểu diễn điện trường bằng đường sức',
    'Vẽ, đọc và giải thích đường sức hoặc phổ đường sức của một số điện trường đơn giản.',
    ['vẽ', 'đọc', 'giải thích'],
    ['representation', 'explanation'],
    ['out-phy11-m3-04']
  ),
  requirement(
    'phy11-official-ch3-uniform-field',
    'phy11-m3',
    ['phy11-kntt-l18'],
    'Vận dụng điện trường đều',
    'Mô tả điện trường đều và vận dụng quan hệ giữa cường độ điện trường, hiệu điện thế và khoảng cách.',
    ['mô tả', 'vận dụng'],
    ['representation', 'calculation'],
    ['out-phy11-m3-05']
  ),
  requirement(
    'phy11-official-ch3-charged-particle',
    'phy11-m3',
    ['phy11-kntt-l18'],
    'Phân tích chuyển động điện tích trong điện trường đều',
    'Phân tích lực và chuyển động của hạt mang điện trong điện trường đều.',
    ['phân tích', 'tính toán'],
    ['representation', 'calculation', 'application'],
    ['out-phy11-m3-06']
  ),
  requirement(
    'phy11-official-ch3-potential-energy',
    'phy11-m3',
    ['phy11-kntt-l19'],
    'Mô tả thế năng điện',
    'Liên hệ công của lực điện với độ biến thiên thế năng điện.',
    ['liên hệ', 'vận dụng'],
    ['explanation', 'calculation'],
    ['out-phy11-m3-07']
  ),
  requirement(
    'phy11-official-ch3-potential',
    'phy11-m3',
    ['phy11-kntt-l20'],
    'Vận dụng điện thế và hiệu điện thế',
    'Nêu ý nghĩa điện thế, hiệu điện thế và vận dụng quan hệ giữa công, điện tích, điện thế và điện trường.',
    ['nêu', 'vận dụng'],
    ['explanation', 'calculation'],
    ['out-phy11-m3-08']
  ),
  requirement(
    'phy11-official-ch3-capacitor',
    'phy11-m3',
    ['phy11-kntt-l21'],
    'Mô tả tụ điện và điện dung',
    'Nêu cấu tạo, công dụng của tụ điện; vận dụng định nghĩa điện dung và phân tích một số ứng dụng.',
    ['nêu', 'vận dụng', 'phân tích'],
    ['recognition', 'calculation', 'application'],
    ['out-phy11-m3-09']
  ),

  requirement(
    'phy11-official-ch4-current',
    'phy11-m4',
    ['phy11-kntt-l22'],
    'Mô tả cường độ dòng điện',
    'Liên hệ cường độ dòng điện với điện lượng và với chuyển động có hướng của các hạt tải điện.',
    ['liên hệ', 'vận dụng', 'giải thích'],
    ['calculation', 'explanation'],
    ['out-phy11-m4-01', 'out-phy11-m4-02']
  ),
  requirement(
    'phy11-official-ch4-resistance-temperature',
    'phy11-m4',
    ['phy11-kntt-l23'],
    'Phân tích điện trở và nhiệt độ',
    'Mô tả điện trở, sự phụ thuộc vào nhiệt độ và giải thích hoạt động cơ bản của điện trở nhiệt.',
    ['mô tả', 'giải thích'],
    ['explanation', 'data', 'application'],
    ['out-phy11-m4-03']
  ),
  requirement(
    'phy11-official-ch4-characteristic',
    'phy11-m4',
    ['phy11-kntt-l23'],
    'Đọc đặc tuyến dòng điện–điện áp',
    'Vẽ, đọc và phân tích đặc tuyến dòng điện–điện áp của vật dẫn hoặc linh kiện.',
    ['vẽ', 'đọc', 'phân tích'],
    ['representation', 'data'],
    ['out-phy11-m4-04']
  ),
  requirement(
    'phy11-official-ch4-ohm',
    'phy11-m4',
    ['phy11-kntt-l23'],
    'Vận dụng định luật Ohm',
    'Vận dụng định luật Ohm trong đúng điều kiện áp dụng.',
    ['vận dụng', 'phân biệt'],
    ['calculation', 'explanation'],
    ['out-phy11-m4-05']
  ),
  requirement(
    'phy11-official-ch4-source',
    'phy11-m4',
    ['phy11-kntt-l24'],
    'Mô tả nguồn điện',
    'Nêu ý nghĩa suất điện động, điện trở trong và vận dụng quan hệ điện của nguồn trong mạch kín.',
    ['nêu', 'vận dụng'],
    ['explanation', 'calculation'],
    ['out-phy11-m4-06']
  ),
  requirement(
    'phy11-official-ch4-energy-power',
    'phy11-m4',
    ['phy11-kntt-l25'],
    'Vận dụng năng lượng và công suất điện',
    'Tính điện năng, công suất điện và phân tích việc sử dụng điện hiệu quả, an toàn.',
    ['tính toán', 'phân tích', 'vận dụng'],
    ['calculation', 'application'],
    ['out-phy11-m4-07']
  ),
  requirement(
    'phy11-official-ch4-source-experiment',
    'phy11-m4',
    ['phy11-kntt-l26'],
    'Đo suất điện động và điện trở trong',
    'Thực hiện hoặc phân tích phép đo suất điện động và điện trở trong của pin điện hóa; xử lí số liệu và đánh giá sai số.',
    ['thực hiện', 'phân tích', 'đánh giá'],
    ['experiment', 'data', 'explanation'],
    ['out-phy11-m4-08']
  )
];
