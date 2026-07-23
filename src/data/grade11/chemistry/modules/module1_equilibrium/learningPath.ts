import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryEquilibriumOutcomes: LearningOutcome[] = [
  {
    id: 'chem11-eq-reversible',
    topicId: 'chem11-t1',
    title: 'Phản ứng thuận nghịch',
    description: 'Nhận diện và biểu diễn phản ứng thuận nghịch; phân biệt chiều thuận và chiều nghịch trong cùng điều kiện.',
    scope: 'core',
    orderIndex: 101,
    questionTypeIds: ['chem11-qt01'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-eq-reversible-condition'],
    remediationOutcomeIds: ['chem11-bridge-equation'],
    evidenceTypes: ['recognition', 'representation'],
    estimatedMinutes: 20,
    isCritical: true
  },
  {
    id: 'chem11-eq-dynamic',
    topicId: 'chem11-t1',
    title: 'Bản chất cân bằng động',
    description: 'Giải thích cân bằng ở cấp vĩ mô và vi mô: hai tốc độ bằng nhau, thành phần hệ ổn định nhưng phản ứng không dừng.',
    scope: 'core',
    orderIndex: 102,
    questionTypeIds: ['chem11-qt01', 'chem11-qt02'],
    prerequisiteOutcomeIds: ['chem11-eq-reversible', 'chem11-bridge-rate-graph'],
    misconceptionIds: ['chem11-mis-eq-stops', 'chem11-mis-eq-equal-concentration'],
    remediationOutcomeIds: ['chem11-bridge-rate-graph'],
    evidenceTypes: ['explanation', 'data'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-eq-data',
    topicId: 'chem11-t1',
    title: 'Nhận diện cân bằng từ dữ liệu',
    description: 'Xác định thời điểm hoặc trạng thái cân bằng từ bảng, đồ thị nồng độ–thời gian và tốc độ–thời gian.',
    scope: 'core',
    orderIndex: 103,
    questionTypeIds: ['chem11-qt02'],
    prerequisiteOutcomeIds: ['chem11-eq-dynamic'],
    misconceptionIds: ['chem11-mis-eq-lines-cross'],
    evidenceTypes: ['data', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-eq-kc-expression',
    topicId: 'chem11-t1',
    title: 'Viết biểu thức hằng số cân bằng Kc',
    description: 'Viết đúng biểu thức $K_C$ từ phương trình đã cân bằng, dùng hệ số làm số mũ và xử lí đúng pha tinh khiết.',
    scope: 'core',
    orderIndex: 104,
    questionTypeIds: ['chem11-qt03'],
    prerequisiteOutcomeIds: ['chem11-eq-reversible', 'chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-kc-coefficient', 'chem11-mis-kc-pure-phase'],
    remediationOutcomeIds: ['chem11-bridge-equation'],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-eq-kc-calculation',
    topicId: 'chem11-t1',
    title: 'Tính Kc từ nồng độ cân bằng',
    description: 'Thay đúng nồng độ cân bằng vào biểu thức và tính $K_C$ cho hệ đơn giản.',
    scope: 'core',
    orderIndex: 105,
    questionTypeIds: ['chem11-qt03'],
    prerequisiteOutcomeIds: ['chem11-eq-kc-expression', 'chem11-bridge-concentration'],
    misconceptionIds: ['chem11-mis-kc-initial-concentration'],
    remediationOutcomeIds: ['chem11-bridge-concentration'],
    evidenceTypes: ['calculation', 'representation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-eq-kc-meaning',
    topicId: 'chem11-t1',
    title: 'Diễn giải ý nghĩa Kc',
    description: 'Diễn giải $K_C$ lớn hoặc nhỏ theo thành phần cân bằng và phân biệt hằng số cân bằng với tốc độ phản ứng.',
    scope: 'core',
    orderIndex: 106,
    questionTypeIds: ['chem11-qt03'],
    prerequisiteOutcomeIds: ['chem11-eq-kc-expression', 'chem11-eq-dynamic'],
    misconceptionIds: ['chem11-mis-kc-rate', 'chem11-mis-kc-initial-change'],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-eq-shift-concentration',
    topicId: 'chem11-t1',
    title: 'Chuyển dịch cân bằng khi thay đổi nồng độ',
    description: 'Dự đoán và giải thích chiều chuyển dịch khi thêm, bớt hoặc thay đổi nồng độ một chất.',
    scope: 'core',
    orderIndex: 107,
    questionTypeIds: ['chem11-qt04'],
    prerequisiteOutcomeIds: ['chem11-eq-dynamic', 'chem11-eq-kc-meaning'],
    misconceptionIds: ['chem11-mis-shift-concentration-rule', 'chem11-mis-solid-amount-shifts', 'chem11-mis-kc-concentration-change'],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-eq-shift-pressure',
    topicId: 'chem11-t1',
    title: 'Chuyển dịch cân bằng khi thay đổi áp suất hoặc thể tích',
    description: 'Dự đoán ảnh hưởng của áp suất/thể tích dựa trên tổng hệ số các chất khí và nhận diện trường hợp không chuyển dịch.',
    scope: 'core',
    orderIndex: 108,
    questionTypeIds: ['chem11-qt04'],
    prerequisiteOutcomeIds: ['chem11-eq-dynamic', 'chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-pressure-always-shifts', 'chem11-mis-pressure-count-all-phases'],
    remediationOutcomeIds: ['chem11-bridge-equation'],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-eq-shift-temperature',
    topicId: 'chem11-t1',
    title: 'Chuyển dịch cân bằng khi thay đổi nhiệt độ',
    description: 'Dự đoán và giải thích chiều chuyển dịch khi thay đổi nhiệt độ bằng cách xác định chiều thu nhiệt và chiều tỏa nhiệt.',
    scope: 'core',
    orderIndex: 109,
    questionTypeIds: ['chem11-qt05'],
    prerequisiteOutcomeIds: ['chem11-eq-dynamic', 'chem11-bridge-enthalpy'],
    misconceptionIds: ['chem11-mis-temperature-always-forward', 'chem11-mis-temperature-kc-constant'],
    remediationOutcomeIds: ['chem11-bridge-enthalpy'],
    evidenceTypes: ['explanation', 'application', 'data'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-eq-rate-vs-position',
    topicId: 'chem11-t1',
    title: 'Phân biệt tốc độ đạt cân bằng và vị trí cân bằng',
    description: 'Giải thích được chất xúc tác làm hệ đạt cân bằng nhanh hơn nhưng không làm thay đổi thành phần cân bằng hoặc hằng số cân bằng.',
    scope: 'core',
    orderIndex: 110,
    questionTypeIds: ['chem11-qt05'],
    prerequisiteOutcomeIds: ['chem11-eq-dynamic'],
    misconceptionIds: ['chem11-mis-catalyst-shifts', 'chem11-mis-catalyst-kc'],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-eq-le-chatelier-context',
    topicId: 'chem11-t1',
    title: 'Vận dụng cân bằng trong sản xuất hóa học',
    description: 'Đánh giá điều kiện sản xuất dựa trên sự đánh đổi giữa hiệu suất cân bằng, tốc độ, năng lượng, an toàn và chi phí.',
    scope: 'core',
    orderIndex: 111,
    questionTypeIds: ['chem11-qt05'],
    prerequisiteOutcomeIds: [
      'chem11-eq-shift-concentration',
      'chem11-eq-shift-pressure',
      'chem11-eq-shift-temperature',
      'chem11-eq-rate-vs-position'
    ],
    misconceptionIds: ['chem11-mis-industry-equilibrium-only'],
    evidenceTypes: ['application', 'explanation', 'data'],
    estimatedMinutes: 35,
    isCritical: false
  },
  {
    id: 'chem11-eq-experiment-temperature',
    topicId: 'chem11-t1',
    title: 'Phân tích thí nghiệm nhiệt độ với hệ NO₂/N₂O₄',
    description: 'Phân tích an toàn hiện tượng, biến thí nghiệm và dữ liệu của hệ kín $2NO_2\\rightleftharpoons N_2O_4$ khi thay đổi nhiệt độ.',
    scope: 'core',
    orderIndex: 112,
    questionTypeIds: ['chem11-qt06'],
    prerequisiteOutcomeIds: ['chem11-eq-shift-temperature'],
    misconceptionIds: ['chem11-mis-no2-color-product', 'chem11-mis-no2-open-system'],
    evidenceTypes: ['experiment', 'data', 'explanation'],
    estimatedMinutes: 40,
    isCritical: true
  },
  {
    id: 'chem11-aq-electrolyte',
    topicId: 'chem11-t1',
    title: 'Chất điện li và chất không điện li',
    description: 'Phân biệt chất điện li và không điện li từ bản chất tạo ion, dữ liệu dẫn điện hoặc mô tả hạt trong dung dịch.',
    scope: 'core',
    orderIndex: 113,
    questionTypeIds: ['chem11-qt07'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-electrolyte-soluble', 'chem11-mis-electrolyte-solid'],
    evidenceTypes: ['recognition', 'data', 'explanation'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-aq-dissociation',
    topicId: 'chem11-t1',
    title: 'Viết phương trình điện li',
    description: 'Viết đúng hệ số, điện tích và loại mũi tên trong phương trình điện li của các chất điển hình.',
    scope: 'core',
    orderIndex: 114,
    questionTypeIds: ['chem11-qt07'],
    prerequisiteOutcomeIds: ['chem11-aq-electrolyte', 'chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-dissociation-charge'],
    remediationOutcomeIds: ['chem11-bridge-equation'],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-strong-weak',
    topicId: 'chem11-t1',
    title: 'Điện li mạnh và điện li yếu',
    description: 'Phân biệt mức độ điện li mạnh/yếu với nồng độ đậm đặc/loãng và diễn giải dữ liệu dẫn điện hoặc mô hình hạt.',
    scope: 'core',
    orderIndex: 115,
    questionTypeIds: ['chem11-qt07'],
    prerequisiteOutcomeIds: ['chem11-aq-dissociation'],
    misconceptionIds: ['chem11-mis-strong-concentrated'],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-bronsted-role',
    topicId: 'chem11-t1',
    title: 'Xác định acid và base Brønsted–Lowry',
    description: 'Xác định acid là chất cho proton và base là chất nhận proton trong phản ứng cụ thể.',
    scope: 'core',
    orderIndex: 116,
    questionTypeIds: ['chem11-qt08'],
    prerequisiteOutcomeIds: ['chem11-aq-dissociation'],
    misconceptionIds: ['chem11-mis-acid-hydrogen-oh'],
    evidenceTypes: ['recognition', 'representation', 'explanation'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-aq-conjugate-pair',
    topicId: 'chem11-t1',
    title: 'Cặp acid–base liên hợp',
    description: 'Xác định cặp acid–base liên hợp và giải thích hai thành viên khác nhau đúng một proton.',
    scope: 'core',
    orderIndex: 117,
    questionTypeIds: ['chem11-qt08'],
    prerequisiteOutcomeIds: ['chem11-aq-bronsted-role'],
    misconceptionIds: ['chem11-mis-conjugate-any-pair'],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-aq-amphiprotic',
    topicId: 'chem11-t1',
    title: 'Vai trò phụ thuộc phản ứng và chất lưỡng tính',
    description: 'Giải thích một chất có thể cho hoặc nhận proton tùy đối tác, đặc biệt với nước và ion hydrogencarbonate.',
    scope: 'core',
    orderIndex: 118,
    questionTypeIds: ['chem11-qt08'],
    prerequisiteOutcomeIds: ['chem11-aq-bronsted-role', 'chem11-aq-conjugate-pair'],
    misconceptionIds: ['chem11-mis-acid-base-fixed-role'],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-water-equilibrium',
    topicId: 'chem11-t1',
    title: 'Cân bằng tự điện li của nước',
    description: 'Biểu diễn sự tự điện li của nước, sử dụng tích số ion của nước và quan hệ giữa nồng độ ion hydrogen với hydroxide ở 25 °C.',
    scope: 'core',
    orderIndex: 119,
    questionTypeIds: ['chem11-qt09'],
    prerequisiteOutcomeIds: ['chem11-aq-bronsted-role'],
    misconceptionIds: ['chem11-mis-neutral-no-ions'],
    evidenceTypes: ['representation', 'calculation', 'explanation'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-aq-ph-conversion',
    topicId: 'chem11-t1',
    title: 'Chuyển đổi giữa pH và nồng độ ion hydrogen',
    description: 'Chuyển đổi đúng giữa pH và nồng độ ion hydrogen; giải thích được bản chất logarit của thang pH.',
    scope: 'core',
    orderIndex: 120,
    questionTypeIds: ['chem11-qt09'],
    prerequisiteOutcomeIds: ['chem11-aq-water-equilibrium', 'chem11-bridge-logarithm'],
    misconceptionIds: ['chem11-mis-ph-linear'],
    remediationOutcomeIds: ['chem11-bridge-logarithm'],
    evidenceTypes: ['calculation', 'representation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-ph-simple-solution',
    topicId: 'chem11-t1',
    title: 'Tính pH dung dịch acid hoặc base mạnh đơn giản',
    description: 'Tính pH của dung dịch acid/base mạnh trong các trường hợp đơn giản, có xét hệ số tạo ion, pha loãng hoặc lượng dư sau phản ứng.',
    scope: 'core',
    orderIndex: 121,
    questionTypeIds: ['chem11-qt09'],
    prerequisiteOutcomeIds: ['chem11-aq-ph-conversion', 'chem11-bridge-concentration', 'chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-ph-from-oh-direct', 'chem11-mis-base-ignore-coefficient'],
    remediationOutcomeIds: ['chem11-bridge-concentration', 'chem11-bridge-equation'],
    evidenceTypes: ['calculation', 'explanation', 'application'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-aq-indicator',
    topicId: 'chem11-t1',
    title: 'Chất chỉ thị acid–base',
    description: 'Chọn và đọc kết quả của chất chỉ thị để xác định môi trường hoặc khoảng pH, đồng thời nhận biết giới hạn của phép thử màu.',
    scope: 'core',
    orderIndex: 122,
    questionTypeIds: ['chem11-qt10'],
    prerequisiteOutcomeIds: ['chem11-aq-ph-conversion'],
    misconceptionIds: ['chem11-mis-indicator-exact', 'chem11-mis-indicator-same-color'],
    evidenceTypes: ['experiment', 'data', 'application'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-ph-context',
    topicId: 'chem11-t1',
    title: 'Ý nghĩa thực tiễn của pH',
    description: 'Đọc dữ liệu và giải thích ý nghĩa của pH trong đất, nước, sức khỏe hoặc sinh trưởng sinh vật mà không diễn giải thang pH theo quan hệ tuyến tính.',
    scope: 'core',
    orderIndex: 123,
    questionTypeIds: ['chem11-qt10'],
    prerequisiteOutcomeIds: ['chem11-aq-ph-conversion'],
    misconceptionIds: ['chem11-mis-ph-context-linear'],
    evidenceTypes: ['data', 'application', 'explanation'],
    estimatedMinutes: 30,
    isCritical: false
  },
  {
    id: 'chem11-aq-ion-hydrolysis',
    topicId: 'chem11-t1',
    title: 'Cân bằng của Al³⁺, Fe³⁺ và CO₃²⁻ trong nước',
    description: 'Biểu diễn và giải thích sự tương tác của Al³⁺, Fe³⁺, CO₃²⁻ với nước, dự đoán môi trường dung dịch và liên hệ các hiện tượng hoặc ứng dụng thực tiễn trong phạm vi chương trình.',
    scope: 'core',
    orderIndex: 124,
    questionTypeIds: ['chem11-qt11'],
    prerequisiteOutcomeIds: ['chem11-aq-bronsted-role', 'chem11-aq-water-equilibrium'],
    misconceptionIds: [
      'chem11-mis-hydrolysis-dissociation',
      'chem11-mis-ion-charge-role',
      'chem11-mis-hydrolysis-irreversible',
      'chem11-mis-carbonate-releases-oh'
    ],
    evidenceTypes: ['representation', 'explanation', 'application', 'data'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-aq-titration-principle',
    topicId: 'chem11-t1',
    title: 'Nguyên tắc chuẩn độ acid–base',
    description: 'Trình bày nguyên tắc xác định nồng độ acid/base mạnh bằng dung dịch chuẩn và phân biệt chất phân tích, chất chuẩn, điểm tương đương với điểm kết thúc.',
    scope: 'core',
    orderIndex: 125,
    questionTypeIds: ['chem11-qt12'],
    prerequisiteOutcomeIds: ['chem11-aq-ph-conversion', 'chem11-bridge-concentration'],
    misconceptionIds: ['chem11-mis-endpoint-equivalence', 'chem11-mis-indicator-excess'],
    evidenceTypes: ['recognition', 'representation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-aq-titration-apparatus',
    topicId: 'chem11-t1',
    title: 'Dụng cụ và thao tác chuẩn độ',
    description: 'Chọn, chuẩn bị và đọc đúng burette, pipette bầu và bình tam giác; sắp xếp quy trình, nhận diện lỗi thao tác và sử dụng chỉ thị đúng mức.',
    scope: 'core',
    orderIndex: 126,
    questionTypeIds: ['chem11-qt12'],
    prerequisiteOutcomeIds: ['chem11-aq-titration-principle'],
    misconceptionIds: [
      'chem11-mis-burette-final-reading',
      'chem11-mis-titration-rinse-water',
      'chem11-mis-burette-parallax'
    ],
    evidenceTypes: ['experiment', 'recognition', 'explanation', 'data'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-aq-titration-data',
    topicId: 'chem11-t1',
    title: 'Xử lý số liệu chuẩn độ',
    description: 'Tính thể tích dung dịch chuẩn đã dùng, phân biệt lần chuẩn độ thô với các lần định lượng, chọn kết quả phù hợp, nhận diện bất thường và báo cáo giá trị đại diện.',
    scope: 'core',
    orderIndex: 127,
    questionTypeIds: ['chem11-qt13'],
    prerequisiteOutcomeIds: ['chem11-aq-titration-apparatus'],
    misconceptionIds: [
      'chem11-mis-titration-include-rough',
      'chem11-mis-titration-average-all',
      'chem11-mis-titration-exact-repeat',
      'chem11-mis-titration-false-precision'
    ],
    evidenceTypes: ['experiment', 'data', 'calculation', 'explanation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-aq-titration-calculation',
    topicId: 'chem11-t1',
    title: 'Tính nồng độ từ số liệu chuẩn độ',
    description: 'Tính nồng độ acid hoặc base mạnh từ titre đã xử lý, dựa trên số mol và tỉ lệ phương trình; giải được trường hợp hệ số khác 1:1 và bài toán có pha loãng.',
    scope: 'core',
    orderIndex: 128,
    questionTypeIds: ['chem11-qt14'],
    prerequisiteOutcomeIds: [
      'chem11-aq-titration-principle',
      'chem11-aq-titration-data',
      'chem11-bridge-equation',
      'chem11-bridge-concentration'
    ],
    misconceptionIds: [
      'chem11-mis-titration-cv-always',
      'chem11-mis-titration-stoich-invert',
      'chem11-mis-titration-rough-calc',
      'chem11-mis-titration-dilution-factor'
    ],
    remediationOutcomeIds: ['chem11-bridge-equation', 'chem11-bridge-concentration'],
    evidenceTypes: ['calculation', 'representation', 'data', 'explanation'],
    estimatedMinutes: 55,
    isCritical: true
  }
];

export const g11ChemistryEquilibriumMisconceptions: LearningMisconception[] = [
  {
    id: 'chem11-mis-eq-reversible-condition',
    outcomeId: 'chem11-eq-reversible',
    statement: 'Hai chiều xảy ra ở hai điều kiện khác nhau vẫn được xem là một phản ứng thuận nghịch.',
    correction: 'Phản ứng thuận nghịch phải có hai chiều xảy ra trong cùng điều kiện của hệ đang xét.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-eq-stops',
    outcomeId: 'chem11-eq-dynamic',
    statement: 'Ở trạng thái cân bằng, phản ứng thuận và nghịch đều dừng.',
    correction: 'Hai phản ứng vẫn diễn ra; tốc độ của chúng bằng nhau nên thành phần vĩ mô ổn định.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-eq-equal-concentration',
    outcomeId: 'chem11-eq-dynamic',
    statement: 'Ở cân bằng, nồng độ chất phản ứng và sản phẩm phải bằng nhau.',
    correction: 'Các nồng độ không đổi theo thời gian nhưng giá trị của chúng không nhất thiết bằng nhau.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-eq-lines-cross',
    outcomeId: 'chem11-eq-data',
    statement: 'Hệ đạt cân bằng khi hai đường nồng độ cắt nhau.',
    correction: 'Cân bằng được nhận ra khi các nồng độ ổn định hoặc tốc độ thuận bằng tốc độ nghịch; hai nồng độ có thể không bao giờ bằng nhau.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-coefficient',
    outcomeId: 'chem11-eq-kc-expression',
    statement: 'Hệ số phương trình được nhân với nồng độ trong biểu thức $K_C$.',
    correction: 'Hệ số tỉ lượng trở thành số mũ của nồng độ tương ứng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-pure-phase',
    outcomeId: 'chem11-eq-kc-expression',
    statement: 'Mọi chất xuất hiện trong phương trình đều phải có mặt trong biểu thức $K_C$.',
    correction: 'Chất rắn và chất lỏng tinh khiết có hoạt độ không đổi nên không xuất hiện trong biểu thức theo phạm vi đang học.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-initial-concentration',
    outcomeId: 'chem11-eq-kc-calculation',
    statement: 'Có thể thay nồng độ ban đầu trực tiếp vào biểu thức $K_C$.',
    correction: '$K_C$ được tính từ nồng độ của các chất tại trạng thái cân bằng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-rate',
    outcomeId: 'chem11-eq-kc-meaning',
    statement: '$K_C$ lớn nghĩa là phản ứng thuận xảy ra nhanh.',
    correction: '$K_C$ mô tả thành phần cân bằng, không mô tả tốc độ đạt cân bằng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-initial-change',
    outcomeId: 'chem11-eq-kc-meaning',
    statement: 'Thay đổi nồng độ ban đầu làm thay đổi $K_C$ tại cùng nhiệt độ.',
    correction: 'Ở nhiệt độ xác định, hệ có thể đạt thành phần cân bằng khác nhưng giá trị $K_C$ của phản ứng đã viết vẫn không đổi.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-shift-concentration-rule',
    outcomeId: 'chem11-eq-shift-concentration',
    statement: 'Thêm bất kì chất nào cũng làm cân bằng chuyển dịch sang phải.',
    correction: 'Hệ chuyển dịch theo chiều tiêu thụ bớt chính chất vừa được thêm; chiều phải hay trái phụ thuộc chất nằm ở vế nào.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-kc-concentration-change',
    outcomeId: 'chem11-eq-shift-concentration',
    statement: 'Thêm hoặc bớt chất làm thay đổi giá trị $K_C$.',
    correction: 'Ở nhiệt độ không đổi, hệ chuyển dịch để thiết lập thành phần mới nhưng $K_C$ vẫn giữ nguyên.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-solid-amount-shifts',
    outcomeId: 'chem11-eq-shift-concentration',
    statement: 'Thêm một chất rắn tinh khiết luôn làm cân bằng chuyển dịch theo chiều tiêu thụ chất rắn đó.',
    correction: 'Khi pha rắn tinh khiết vẫn tồn tại, tăng lượng chất rắn không làm thay đổi đại lượng trong biểu thức cân bằng và không gây chuyển dịch.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-pressure-always-shifts',
    outcomeId: 'chem11-eq-shift-pressure',
    statement: 'Tăng áp suất luôn làm mọi cân bằng khí chuyển dịch.',
    correction: 'Nếu tổng số mol khí hai vế bằng nhau, thay đổi áp suất do đổi thể tích không ưu tiên chiều nào.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-pressure-count-all-phases',
    outcomeId: 'chem11-eq-shift-pressure',
    statement: 'Khi xét ảnh hưởng áp suất phải đếm hệ số của mọi chất trong phương trình.',
    correction: 'Chỉ đếm các chất ở trạng thái khí khi so sánh tổng số mol khí hai vế.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-temperature-always-forward',
    outcomeId: 'chem11-eq-shift-temperature',
    statement: 'Tăng nhiệt độ luôn làm cân bằng chuyển dịch theo chiều thuận.',
    correction: 'Tăng nhiệt độ ưu tiên chiều thu nhiệt; chiều đó có thể là chiều thuận hoặc chiều nghịch tùy phản ứng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-temperature-kc-constant',
    outcomeId: 'chem11-eq-shift-temperature',
    statement: 'Thay đổi nhiệt độ không làm thay đổi giá trị hằng số cân bằng.',
    correction: 'Khác với nồng độ và áp suất, nhiệt độ có thể làm thay đổi giá trị hằng số cân bằng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-catalyst-shifts',
    outcomeId: 'chem11-eq-rate-vs-position',
    statement: 'Chất xúc tác làm cân bằng chuyển dịch theo chiều tạo nhiều sản phẩm hơn.',
    correction: 'Xúc tác làm tăng tốc độ cả hai chiều và chỉ giúp hệ đạt cùng trạng thái cân bằng nhanh hơn.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-catalyst-kc',
    outcomeId: 'chem11-eq-rate-vs-position',
    statement: 'Thêm chất xúc tác làm tăng hằng số cân bằng.',
    correction: 'Ở cùng nhiệt độ, xúc tác không làm thay đổi hằng số hoặc thành phần cân bằng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-industry-equilibrium-only',
    outcomeId: 'chem11-eq-le-chatelier-context',
    statement: 'Điều kiện cho hiệu suất cân bằng lớn nhất luôn là điều kiện vận hành công nghiệp tốt nhất.',
    correction: 'Sản xuất phải đồng thời cân nhắc tốc độ, năng lượng, thiết bị, an toàn, chi phí và khả năng tách sản phẩm.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-no2-color-product',
    outcomeId: 'chem11-eq-experiment-temperature',
    statement: 'Màu nâu đậm hơn chứng tỏ lượng N₂O₄ tăng.',
    correction: '$NO_2$ có màu nâu còn $N_2O_4$ gần như không màu; màu nâu đậm hơn cho thấy tỉ lệ $NO_2$ tăng.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-no2-open-system',
    outcomeId: 'chem11-eq-experiment-temperature',
    statement: 'Có thể mở ống chứa NO₂ để quan sát rõ hơn hoặc ngửi kiểm tra khí.',
    correction: '$NO_2$ là khí độc và kích ứng mạnh; chỉ quan sát hệ kín theo hướng dẫn, không mở hoặc ngửi trực tiếp.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-electrolyte-soluble',
    outcomeId: 'chem11-aq-electrolyte',
    statement: 'Mọi chất tan được trong nước đều là chất điện li.',
    correction: 'Chất tan chỉ là chất điện li khi tạo ion tự do trong dung dịch; đường tan nhưng chủ yếu tồn tại dạng phân tử.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-electrolyte-solid',
    outcomeId: 'chem11-aq-electrolyte',
    statement: 'Muối rắn dẫn điện tốt vì trong tinh thể đã có ion.',
    correction: 'Trong tinh thể rắn, ion bị giữ tại vị trí mạng; muối dẫn điện khi nóng chảy hoặc tan để ion có thể chuyển động.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-dissociation-charge',
    outcomeId: 'chem11-aq-dissociation',
    statement: 'Phương trình điện li chỉ cần bảo toàn số nguyên tử, không cần bảo toàn tổng điện tích.',
    correction: 'Phương trình điện li phải bảo toàn cả nguyên tử, hệ số ion và tổng điện tích hai vế.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-strong-concentrated',
    outcomeId: 'chem11-aq-strong-weak',
    statement: 'Chất điện li mạnh luôn tạo dung dịch đậm đặc hơn chất điện li yếu.',
    correction: 'Mạnh/yếu mô tả mức độ phân li thành ion; đậm đặc/loãng mô tả lượng chất tan trong một thể tích dung dịch.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-acid-hydrogen-oh',
    outcomeId: 'chem11-aq-bronsted-role',
    statement: 'Chất có hydrogen luôn là acid và chất có nhóm OH luôn là base.',
    correction: 'Theo Brønsted–Lowry, vai trò được xác định từ sự cho hoặc nhận proton trong phản ứng đang xét.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-conjugate-any-pair',
    outcomeId: 'chem11-aq-conjugate-pair',
    statement: 'Bất kì hai chất cùng xuất hiện trong phản ứng acid–base đều là một cặp liên hợp.',
    correction: 'Hai thành viên của một cặp liên hợp phải khác nhau đúng một proton.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-acid-base-fixed-role',
    outcomeId: 'chem11-aq-amphiprotic',
    statement: 'Một chất đã là acid trong một phản ứng thì không thể đóng vai trò base ở phản ứng khác.',
    correction: 'Vai trò phụ thuộc đối tác phản ứng; chất lưỡng tính có thể cho hoặc nhận proton trong những phản ứng khác nhau.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-neutral-no-ions',
    outcomeId: 'chem11-aq-water-equilibrium',
    statement: 'Nước trung tính hoàn toàn không chứa ion hydrogen và ion hydroxide.',
    correction: 'Nước tự điện li ở mức rất nhỏ; trung tính nghĩa là nồng độ hai ion bằng nhau, không phải đều bằng 0.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-ph-linear',
    outcomeId: 'chem11-aq-ph-conversion',
    statement: 'Nồng độ ion hydrogen tăng hai lần thì pH cũng tăng hoặc giảm hai đơn vị.',
    correction: 'pH là thang logarit; nồng độ ion hydrogen thay đổi 10 lần thì pH thay đổi một đơn vị theo chiều ngược lại.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-ph-from-oh-direct',
    outcomeId: 'chem11-aq-ph-simple-solution',
    statement: 'Có thể thay trực tiếp nồng độ ion hydroxide vào công thức pH = −lg[OH⁻].',
    correction: '−lg[OH⁻] là pOH; ở 25 °C cần dùng pH + pOH = 14 để tìm pH.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-base-ignore-coefficient',
    outcomeId: 'chem11-aq-ph-simple-solution',
    statement: 'Nồng độ OH⁻ luôn bằng nồng độ ban đầu của mọi base mạnh.',
    correction: 'Phải dùng phương trình điện li; một mol Ca(OH)₂ tạo hai mol OH⁻ khi điện li hoàn toàn.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-indicator-exact',
    outcomeId: 'chem11-aq-indicator',
    statement: 'Một màu của chất chỉ thị luôn cho biết chính xác một giá trị pH duy nhất.',
    correction: 'Chất chỉ thị thường chỉ xác định môi trường hoặc một khoảng pH dựa trên vùng chuyển màu.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-indicator-same-color',
    outcomeId: 'chem11-aq-indicator',
    statement: 'Mọi chất chỉ thị đều đổi sang cùng một màu trong cùng dung dịch.',
    correction: 'Mỗi chỉ thị có màu và khoảng chuyển màu riêng; phải đọc đúng bảng màu của chỉ thị được sử dụng.',
    severity: 'normal'
  },
  {
    id: 'chem11-mis-ph-context-linear',
    outcomeId: 'chem11-aq-ph-context',
    statement: 'Hai mẫu lệch nhau một đơn vị pH chỉ khác nhau một lượng acid rất nhỏ theo quan hệ tuyến tính.',
    correction: 'Chênh lệch một đơn vị pH tương ứng nồng độ ion hydrogen khác nhau 10 lần.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-hydrolysis-dissociation',
    outcomeId: 'chem11-aq-ion-hydrolysis',
    statement: 'Điện li của muối và phản ứng của ion với nước là cùng một quá trình.',
    correction: 'Điện li giải phóng ion khỏi chất điện li; thủy phân là cân bằng tiếp theo khi một số ion đã tạo thành tương tác với nước.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-ion-charge-role',
    outcomeId: 'chem11-aq-ion-hydrolysis',
    statement: 'Mọi cation đều làm dung dịch acid và mọi anion đều làm dung dịch base.',
    correction: 'Không thể kết luận chỉ từ dấu điện tích; phải xét khả năng ion tương tác với nước. Na⁺ và Cl⁻ là các phản ví dụ quen thuộc.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-hydrolysis-irreversible',
    outcomeId: 'chem11-aq-ion-hydrolysis',
    statement: 'Ion thủy phân bị tiêu thụ hoàn toàn theo phản ứng một chiều.',
    correction: 'Trong phạm vi đang học, sự tương tác của ion với nước được mô tả là một cân bằng; các tiểu phân cùng tồn tại tùy điều kiện.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-carbonate-releases-oh',
    outcomeId: 'chem11-aq-ion-hydrolysis',
    statement: 'Ion carbonate tự tách ra ion hydroxide vì trong công thức carbonate có oxygen.',
    correction: 'CO₃²⁻ nhận proton từ nước tạo HCO₃⁻; chính nước sau khi cho proton tạo OH⁻.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-endpoint-equivalence',
    outcomeId: 'chem11-aq-titration-principle',
    statement: 'Điểm kết thúc quan sát được luôn trùng tuyệt đối với điểm tương đương theo tỉ lượng.',
    correction: 'Điểm tương đương là trạng thái tỉ lượng; điểm kết thúc là tín hiệu thực nghiệm. Chọn chỉ thị và thao tác đúng để sai lệch giữa hai điểm đủ nhỏ.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-indicator-excess',
    outcomeId: 'chem11-aq-titration-principle',
    statement: 'Thêm thật nhiều chỉ thị sẽ làm điểm kết thúc chính xác hơn.',
    correction: 'Chỉ dùng lượng nhỏ theo hướng dẫn; quá nhiều chỉ thị có thể làm thay đổi hệ và khiến màu quá đậm, khó nhận điểm kết thúc đầu tiên.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-burette-final-reading',
    outcomeId: 'chem11-aq-titration-apparatus',
    statement: 'Thể tích chất chuẩn đã dùng chính là số đọc cuối trên burette.',
    correction: 'Thể tích đã dùng bằng số đọc cuối trừ số đọc đầu; số đọc đầu không nhất thiết bằng 0.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-rinse-water',
    outcomeId: 'chem11-aq-titration-apparatus',
    statement: 'Sau khi rửa bằng nước, có thể để nước còn lại trong burette hoặc pipette mà không ảnh hưởng nồng độ dung dịch.',
    correction: 'Burette và pipette cần được tráng bằng chính dung dịch sẽ chứa để tránh pha loãng; nước cất còn trong bình tam giác không làm đổi số mol mẫu đã pipette.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-burette-parallax',
    outcomeId: 'chem11-aq-titration-apparatus',
    statement: 'Có thể đọc burette từ bất kì góc nhìn nào và đọc như thang thể tích tăng từ dưới lên.',
    correction: 'Đặt mắt ngang mặt khum, đọc đúng mặt khum của dung dịch và nhớ thang burette tăng theo chiều từ trên xuống.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-include-rough',
    outcomeId: 'chem11-aq-titration-data',
    statement: 'Lần chuẩn độ thô phải được đưa vào trung bình giống các lần định lượng.',
    correction: 'Lần thô chủ yếu giúp định vị gần điểm kết thúc; giá trị đại diện được tính từ các lần định lượng phù hợp theo tiêu chí đã quy định.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-average-all',
    outcomeId: 'chem11-aq-titration-data',
    statement: 'Cứ lấy trung bình tất cả các lần đo thì kết quả sẽ tự động chính xác hơn.',
    correction: 'Phải kiểm tra quy trình và tính phù hợp trước; một giá trị bất thường có căn cứ không nên bị che giấu bằng trung bình.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-exact-repeat',
    outcomeId: 'chem11-aq-titration-data',
    statement: 'Các lần chuẩn độ hợp lệ phải cho thể tích giống hệt nhau đến mọi chữ số.',
    correction: 'Phép đo luôn có biến thiên; các kết quả được xem là phù hợp khi độ chênh nằm trong tiêu chí chấp nhận được nêu cho quy trình.',
    severity: 'normal'
  },
  {
    id: 'chem11-mis-titration-false-precision',
    outcomeId: 'chem11-aq-titration-data',
    statement: 'Có thể báo cáo trung bình với càng nhiều chữ số thập phân càng tốt.',
    correction: 'Số chữ số báo cáo phải phù hợp độ phân giải của burette và dữ liệu gốc; thêm chữ số không làm phép đo chính xác hơn.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-cv-always',
    outcomeId: 'chem11-aq-titration-calculation',
    statement: 'Mọi phép chuẩn độ acid–base đều có thể dùng trực tiếp $C_1V_1=C_2V_2$.',
    correction: 'Hệ thức này chỉ xuất hiện trực tiếp khi tỉ lệ mol phản ứng là 1:1; trường hợp khác phải dùng số mol và hệ số phương trình.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-stoich-invert',
    outcomeId: 'chem11-aq-titration-calculation',
    statement: 'Có thể nhân hoặc chia hệ số tỉ lượng theo trực giác mà không viết quan hệ mol.',
    correction: 'Viết rõ $n_A/a=n_B/b$ từ phương trình $aA+bB\\rightarrow...$ trước khi suy số mol chất cần tìm.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-rough-calc',
    outcomeId: 'chem11-aq-titration-calculation',
    statement: 'Nên dùng titre thô hoặc bất kì một lần đo nào để tính nồng độ cuối cùng.',
    correction: 'Phép tính cuối phải dùng titre đại diện đã được chọn từ các lần định lượng phù hợp.',
    severity: 'critical'
  },
  {
    id: 'chem11-mis-titration-dilution-factor',
    outcomeId: 'chem11-aq-titration-calculation',
    statement: 'Nồng độ tính từ aliquot của dung dịch đã pha loãng chính là nồng độ mẫu ban đầu.',
    correction: 'Kết quả chuẩn độ trước hết cho nồng độ dung dịch đã pha loãng; phải dùng hệ số pha loãng để suy ngược mẫu ban đầu.',
    severity: 'critical'
  }
];
