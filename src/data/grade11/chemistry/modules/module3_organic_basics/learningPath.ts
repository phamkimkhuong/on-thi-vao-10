import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryOrganicBasicsOutcomes: LearningOutcome[] = [
  {
    id: 'chem11-org-organic-concept',
    topicId: 'chem11-t3',
    title: 'Khái niệm hợp chất hữu cơ',
    description: 'Nêu được hợp chất hữu cơ là các hợp chất của carbon, ngoại trừ một số hợp chất carbon được xếp vào hóa học vô cơ.',
    scope: 'core',
    orderIndex: 301,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-organic-living-only', 'chem11-mis-organic-always-carbon-hydrogen'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 20,
    isCritical: true
  },
  {
    id: 'chem11-org-organic-exceptions',
    topicId: 'chem11-t3',
    title: 'Các hợp chất carbon thuộc phạm vi vô cơ',
    description: 'Phân biệt hợp chất hữu cơ với CO, CO₂, carbonic acid, carbonate, hydrogencarbonate, carbide và một số hợp chất carbon vô cơ quen thuộc.',
    scope: 'core',
    orderIndex: 302,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: ['chem11-org-organic-concept'],
    misconceptionIds: ['chem11-mis-all-carbon-organic'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-org-organic-chemistry-scope',
    topicId: 'chem11-t3',
    title: 'Đối tượng của hóa học hữu cơ',
    description: 'Nêu được hóa học hữu cơ nghiên cứu thành phần, cấu trúc, tính chất, phản ứng, điều chế và ứng dụng của hợp chất hữu cơ.',
    scope: 'core',
    orderIndex: 303,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: ['chem11-org-organic-concept'],
    misconceptionIds: ['chem11-mis-organic-chemistry-plants-only'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 20
  },
  {
    id: 'chem11-org-composition-bonding',
    topicId: 'chem11-t3',
    title: 'Thành phần và liên kết phổ biến trong hợp chất hữu cơ',
    description: 'Nhận ra carbon là thành phần bắt buộc, hydrogen và các nguyên tố khác thường gặp; liên kết cộng hóa trị chiếm ưu thế trong nhiều hợp chất hữu cơ.',
    scope: 'core',
    orderIndex: 304,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: ['chem11-org-organic-concept'],
    misconceptionIds: ['chem11-mis-organic-only-ch', 'chem11-mis-organic-ionic-dominant'],
    evidenceTypes: ['recognition', 'representation', 'explanation'],
    estimatedMinutes: 25
  },
  {
    id: 'chem11-org-physical-characteristics',
    topicId: 'chem11-t3',
    title: 'Đặc điểm vật lí chung của hợp chất hữu cơ',
    description: 'Khái quát đúng xu hướng nhiệt độ nóng chảy–sôi, độ tan trong nước và độ tan trong dung môi hữu cơ mà không biến xu hướng thành quy tắc tuyệt đối.',
    scope: 'core',
    orderIndex: 305,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: ['chem11-org-composition-bonding'],
    misconceptionIds: ['chem11-mis-organic-never-water-soluble', 'chem11-mis-organic-always-low-boiling'],
    evidenceTypes: ['data', 'explanation', 'application'],
    estimatedMinutes: 25
  },
  {
    id: 'chem11-org-reaction-characteristics',
    topicId: 'chem11-t3',
    title: 'Đặc điểm phản ứng hữu cơ',
    description: 'Nêu được phản ứng hữu cơ thường diễn ra chậm, theo nhiều hướng và có thể cần điều kiện hoặc xúc tác; sản phẩm thường là hỗn hợp.',
    scope: 'core',
    orderIndex: 306,
    questionTypeIds: ['chem11-qt33'],
    prerequisiteOutcomeIds: ['chem11-org-composition-bonding'],
    misconceptionIds: ['chem11-mis-organic-reaction-always-complete'],
    evidenceTypes: ['data', 'explanation', 'application'],
    estimatedMinutes: 25
  },
  {
    id: 'chem11-org-classify-hydrocarbon',
    topicId: 'chem11-t3',
    title: 'Phân loại hydrocarbon',
    description: 'Nhận diện hydrocarbon là hợp chất hữu cơ chỉ chứa carbon và hydrogen; phân loại đúng từ công thức hoặc mô hình phân tử.',
    scope: 'core',
    orderIndex: 307,
    questionTypeIds: ['chem11-qt34'],
    prerequisiteOutcomeIds: ['chem11-org-organic-concept'],
    misconceptionIds: ['chem11-mis-hydrocarbon-any-organic'],
    evidenceTypes: ['recognition', 'representation', 'application'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-org-classify-derivative',
    topicId: 'chem11-t3',
    title: 'Phân loại dẫn xuất hydrocarbon',
    description: 'Nhận diện dẫn xuất hydrocarbon khi ngoài carbon và hydrogen còn có nguyên tố khác hoặc nhóm chức đặc trưng.',
    scope: 'core',
    orderIndex: 308,
    questionTypeIds: ['chem11-qt34'],
    prerequisiteOutcomeIds: ['chem11-org-classify-hydrocarbon'],
    misconceptionIds: ['chem11-mis-derivative-must-have-oxygen', 'chem11-mis-co2-hydrocarbon-derivative'],
    evidenceTypes: ['recognition', 'representation', 'application'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-org-functional-group',
    topicId: 'chem11-t3',
    title: 'Khái niệm và nhận diện nhóm chức cơ bản',
    description: 'Nêu nhóm chức là nguyên tử hoặc nhóm nguyên tử gây ra tính chất hóa học đặc trưng; nhận diện một số nhóm chức cơ bản từ công thức cấu tạo.',
    scope: 'core',
    orderIndex: 309,
    questionTypeIds: ['chem11-qt35'],
    prerequisiteOutcomeIds: ['chem11-org-classify-derivative'],
    misconceptionIds: ['chem11-mis-functional-group-any-fragment', 'chem11-mis-oh-always-alcohol'],
    evidenceTypes: ['recognition', 'representation', 'explanation', 'application'],
    estimatedMinutes: 40,
    isCritical: true
  },
  {
    id: 'chem11-org-distillation-principle',
    topicId: 'chem11-t3',
    title: 'Nguyên tắc chưng cất',
    description: 'Giải thích chưng cất dựa trên sự khác nhau về nhiệt độ sôi và khả năng bay hơi của các cấu tử trong hỗn hợp lỏng.',
    scope: 'core',
    orderIndex: 310,
    questionTypeIds: ['chem11-qt36'],
    prerequisiteOutcomeIds: ['chem11-org-physical-characteristics'],
    misconceptionIds: ['chem11-mis-distillation-density', 'chem11-mis-distillation-boil-same'],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-org-distillation-apparatus',
    topicId: 'chem11-t3',
    title: 'Dụng cụ và quy trình chưng cất thường',
    description: 'Nhận diện bình chưng cất, nhiệt kế, ống sinh hàn, bình hứng; sắp xếp đúng quy trình và dòng nước làm lạnh.',
    scope: 'core',
    orderIndex: 311,
    questionTypeIds: ['chem11-qt36'],
    prerequisiteOutcomeIds: ['chem11-org-distillation-principle'],
    misconceptionIds: ['chem11-mis-distillation-thermometer-liquid', 'chem11-mis-condenser-water-top'],
    evidenceTypes: ['experiment', 'representation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-org-distillation-data',
    topicId: 'chem11-t3',
    title: 'Đọc dữ liệu và vận dụng chưng cất',
    description: 'Đọc nhiệt độ sôi, đường nhiệt độ–thời gian và lựa chọn phân đoạn thu thích hợp trong các tình huống đơn giản.',
    scope: 'core',
    orderIndex: 312,
    questionTypeIds: ['chem11-qt36'],
    prerequisiteOutcomeIds: ['chem11-org-distillation-apparatus'],
    misconceptionIds: ['chem11-mis-distillation-collect-all'],
    evidenceTypes: ['data', 'experiment', 'application'],
    estimatedMinutes: 35
  },
  {
    id: 'chem11-org-extraction-principle',
    topicId: 'chem11-t3',
    title: 'Nguyên tắc chiết lỏng–lỏng',
    description: 'Giải thích chất tan phân bố khác nhau giữa hai dung môi không trộn lẫn và lựa chọn dung môi chiết phù hợp.',
    scope: 'core',
    orderIndex: 313,
    questionTypeIds: ['chem11-qt37'],
    prerequisiteOutcomeIds: ['chem11-org-physical-characteristics'],
    misconceptionIds: ['chem11-mis-extraction-miscible-solvents', 'chem11-mis-extraction-density-solubility'],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-org-extraction-funnel',
    topicId: 'chem11-t3',
    title: 'Phễu chiết và quy trình thao tác',
    description: 'Sắp xếp thao tác nạp mẫu, lắc–xả áp, để phân lớp, xác định lớp và tháo từng pha bằng phễu chiết.',
    scope: 'core',
    orderIndex: 314,
    questionTypeIds: ['chem11-qt37'],
    prerequisiteOutcomeIds: ['chem11-org-extraction-principle'],
    misconceptionIds: ['chem11-mis-extraction-no-vent', 'chem11-mis-extraction-layer-color-only'],
    evidenceTypes: ['experiment', 'representation', 'explanation'],
    estimatedMinutes: 40,
    isCritical: true
  },
  {
    id: 'chem11-org-extraction-efficiency-safety',
    topicId: 'chem11-t3',
    title: 'Hiệu quả và an toàn khi chiết',
    description: 'So sánh chiết nhiều lần với lượng nhỏ, xử lí nhũ tương cơ bản và lựa chọn thao tác an toàn với dung môi dễ bay hơi.',
    scope: 'core',
    orderIndex: 315,
    questionTypeIds: ['chem11-qt37'],
    prerequisiteOutcomeIds: ['chem11-org-extraction-funnel'],
    misconceptionIds: ['chem11-mis-extraction-one-large-best', 'chem11-mis-extraction-heat-sealed'],
    evidenceTypes: ['data', 'experiment', 'application'],
    estimatedMinutes: 35
  },
  {
    id: 'chem11-org-crystallization-principle',
    topicId: 'chem11-t3',
    title: 'Nguyên tắc kết tinh',
    description: 'Giải thích kết tinh dựa trên sự thay đổi độ tan theo nhiệt độ hoặc lượng dung môi và yêu cầu tạp chất có hành vi độ tan khác.',
    scope: 'core',
    orderIndex: 316,
    questionTypeIds: ['chem11-qt38'],
    prerequisiteOutcomeIds: ['chem11-org-physical-characteristics'],
    misconceptionIds: ['chem11-mis-crystallization-evaporate-dry', 'chem11-mis-crystallization-solubility-constant'],
    evidenceTypes: ['explanation', 'data', 'application'],
    estimatedMinutes: 30,
    isCritical: true
  },
  {
    id: 'chem11-org-crystallization-procedure',
    topicId: 'chem11-t3',
    title: 'Quy trình kết tinh và đánh giá hiệu suất',
    description: 'Sắp xếp hòa tan nóng–lọc nóng–làm nguội–lọc tinh thể–rửa–làm khô và tính lượng tinh thể lí thuyết từ dữ liệu độ tan.',
    scope: 'core',
    orderIndex: 317,
    questionTypeIds: ['chem11-qt38'],
    prerequisiteOutcomeIds: ['chem11-org-crystallization-principle'],
    misconceptionIds: ['chem11-mis-crystallization-cool-fast-always', 'chem11-mis-crystal-pure-perfect-yield'],
    evidenceTypes: ['experiment', 'data', 'representation'],
    estimatedMinutes: 40
  },
  {
    id: 'chem11-org-separation-method-selection',
    topicId: 'chem11-t3',
    title: 'Lựa chọn phương pháp tách trong thực tiễn',
    description: 'Chọn chưng cất, chiết hoặc kết tinh từ trạng thái hỗn hợp, nhiệt độ sôi, tính trộn lẫn và độ tan; giải thích giới hạn của lựa chọn.',
    scope: 'core',
    orderIndex: 318,
    questionTypeIds: ['chem11-qt38'],
    prerequisiteOutcomeIds: ['chem11-org-distillation-principle', 'chem11-org-extraction-principle', 'chem11-org-crystallization-principle'],
    misconceptionIds: ['chem11-mis-one-method-all-mixtures'],
    evidenceTypes: ['data', 'explanation', 'application'],
    estimatedMinutes: 40,
    isCritical: true
  },
  {
    id: 'chem11-org-molecular-formula-meaning',
    topicId: 'chem11-t3',
    title: 'Ý nghĩa công thức phân tử hợp chất hữu cơ',
    description: 'Nêu được công thức phân tử cho biết loại nguyên tố và số nguyên tử của mỗi nguyên tố trong một phân tử, nhưng chưa xác định duy nhất cấu tạo.',
    scope: 'core',
    orderIndex: 319,
    questionTypeIds: ['chem11-qt39'],
    prerequisiteOutcomeIds: ['chem11-org-composition-bonding'],
    misconceptionIds: ['chem11-mis-molecular-formula-structure', 'chem11-mis-subscript-mole'],
    evidenceTypes: ['recognition', 'representation', 'explanation'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-org-empirical-formula-meaning',
    topicId: 'chem11-t3',
    title: 'Công thức đơn giản nhất',
    description: 'Nêu được công thức đơn giản nhất biểu diễn tỉ lệ số nguyên tối giản giữa số nguyên tử các nguyên tố trong hợp chất.',
    scope: 'core',
    orderIndex: 320,
    questionTypeIds: ['chem11-qt39'],
    prerequisiteOutcomeIds: ['chem11-org-molecular-formula-meaning'],
    misconceptionIds: ['chem11-mis-empirical-same-molecular', 'chem11-mis-empirical-not-reduced'],
    evidenceTypes: ['recognition', 'representation', 'explanation'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-org-formula-multiple-relation',
    topicId: 'chem11-t3',
    title: 'Quan hệ giữa công thức phân tử và công thức đơn giản nhất',
    description: 'Thiết lập CTPT = (CTĐGN)n với n nguyên dương và dùng phân tử khối để xác định n.',
    scope: 'core',
    orderIndex: 321,
    questionTypeIds: ['chem11-qt39'],
    prerequisiteOutcomeIds: ['chem11-org-empirical-formula-meaning'],
    misconceptionIds: ['chem11-mis-formula-n-any', 'chem11-mis-molar-mass-ignore'],
    evidenceTypes: ['representation', 'calculation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-org-element-percent-from-formula',
    topicId: 'chem11-t3',
    title: 'Thành phần phần trăm khối lượng nguyên tố',
    description: 'Tính và kiểm tra phần trăm khối lượng các nguyên tố từ công thức phân tử hoặc công thức đơn giản nhất.',
    scope: 'core',
    orderIndex: 322,
    questionTypeIds: ['chem11-qt39'],
    prerequisiteOutcomeIds: ['chem11-org-molecular-formula-meaning'],
    misconceptionIds: ['chem11-mis-percent-atom-count', 'chem11-mis-percent-not-total'],
    evidenceTypes: ['calculation', 'data', 'application'],
    estimatedMinutes: 35
  },
  {
    id: 'chem11-org-empirical-from-percent',
    topicId: 'chem11-t3',
    title: 'Lập công thức đơn giản nhất từ phần trăm khối lượng',
    description: 'Quy đổi phần trăm khối lượng thành số mol tương đối, chia cho giá trị nhỏ nhất và đưa về tỉ lệ số nguyên tối giản.',
    scope: 'core',
    orderIndex: 323,
    questionTypeIds: ['chem11-qt40'],
    prerequisiteOutcomeIds: ['chem11-org-element-percent-from-formula'],
    misconceptionIds: ['chem11-mis-percent-direct-ratio', 'chem11-mis-ratio-round-early'],
    evidenceTypes: ['calculation', 'data', 'representation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-org-empirical-from-mass',
    topicId: 'chem11-t3',
    title: 'Lập công thức đơn giản nhất từ khối lượng nguyên tố',
    description: 'Dùng khối lượng từng nguyên tố để tính số mol tương đối và lập tỉ lệ nguyên tử tối giản, kể cả khi cần nhân toàn bộ tỉ lệ thập phân.',
    scope: 'core',
    orderIndex: 324,
    questionTypeIds: ['chem11-qt40'],
    prerequisiteOutcomeIds: ['chem11-org-empirical-formula-meaning'],
    misconceptionIds: ['chem11-mis-mass-as-subscript', 'chem11-mis-ratio-round-early'],
    evidenceTypes: ['calculation', 'data', 'representation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-org-combustion-analysis-ch',
    topicId: 'chem11-t3',
    title: 'Phân tích C và H từ sản phẩm cháy',
    description: 'Suy ra số mol carbon từ CO₂ và số mol hydrogen từ H₂O trong dữ liệu đốt cháy hoàn toàn hợp chất hữu cơ.',
    scope: 'core',
    orderIndex: 325,
    questionTypeIds: ['chem11-qt41'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-combustion-h-from-water', 'chem11-mis-combustion-c-from-co2-mass'],
    evidenceTypes: ['calculation', 'data', 'explanation'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'chem11-org-oxygen-by-difference',
    topicId: 'chem11-t3',
    title: 'Xác định oxygen bằng bảo toàn khối lượng',
    description: 'Xác định khối lượng hoặc số mol oxygen trong hợp chất bằng hiệu khối lượng khi đề xác nhận chất chỉ chứa C, H, O.',
    scope: 'core',
    orderIndex: 326,
    questionTypeIds: ['chem11-qt41'],
    prerequisiteOutcomeIds: ['chem11-org-combustion-analysis-ch'],
    misconceptionIds: ['chem11-mis-oxygen-from-o2-product', 'chem11-mis-difference-with-unknown-elements'],
    evidenceTypes: ['calculation', 'data', 'explanation'],
    estimatedMinutes: 40,
    isCritical: true
  },
  {
    id: 'chem11-org-molecular-formula-determination',
    topicId: 'chem11-t3',
    title: 'Lập và kiểm tra công thức phân tử',
    description: 'Kết hợp công thức đơn giản nhất với phân tử khối hoặc dữ liệu định lượng tương đương để xác định n, lập CTPT và kiểm tra lại thành phần nguyên tố.',
    scope: 'core',
    orderIndex: 327,
    questionTypeIds: ['chem11-qt41'],
    prerequisiteOutcomeIds: ['chem11-org-formula-multiple-relation', 'chem11-org-empirical-from-percent', 'chem11-org-combustion-analysis-ch'],
    misconceptionIds: ['chem11-mis-molar-mass-ignore', 'chem11-mis-formula-no-validation'],
    evidenceTypes: ['calculation', 'data', 'representation', 'application'],
    estimatedMinutes: 55,
    isCritical: true
  },
  {
    id: 'chem11-org-structure-theory-valence',
    topicId: 'chem11-t3', title: 'Hóa trị và trật tự liên kết trong thuyết cấu tạo',
    description: 'Trình bày nguyên tử liên kết theo đúng hóa trị và một trật tự xác định; carbon có hóa trị IV trong hợp chất hữu cơ.',
    scope: 'core', orderIndex: 328, questionTypeIds: ['chem11-qt42'],
    prerequisiteOutcomeIds: ['chem11-org-molecular-formula-meaning'],
    misconceptionIds: ['chem11-mis-structure-any-order', 'chem11-mis-carbon-variable-valence'],
    evidenceTypes: ['recognition', 'representation', 'explanation'], estimatedMinutes: 30, isCritical: true
  },
  {
    id: 'chem11-org-carbon-chain-bonding',
    topicId: 'chem11-t3', title: 'Khả năng liên kết và tạo mạch của carbon',
    description: 'Giải thích carbon liên kết với carbon và nguyên tố khác, tạo mạch thẳng, nhánh, vòng với liên kết đơn hoặc bội.',
    scope: 'core', orderIndex: 329, questionTypeIds: ['chem11-qt42'],
    prerequisiteOutcomeIds: ['chem11-org-structure-theory-valence'],
    misconceptionIds: ['chem11-mis-carbon-chain-straight-only'],
    evidenceTypes: ['representation', 'explanation', 'application'], estimatedMinutes: 30
  },
  {
    id: 'chem11-org-structure-property-relation',
    topicId: 'chem11-t3', title: 'Quan hệ cấu tạo và tính chất',
    description: 'Nêu tính chất phụ thuộc thành phần phân tử và cấu tạo hóa học; giải thích cùng CTPT có thể cho chất khác nhau.',
    scope: 'core', orderIndex: 330, questionTypeIds: ['chem11-qt42'],
    prerequisiteOutcomeIds: ['chem11-org-structure-theory-valence'],
    misconceptionIds: ['chem11-mis-same-formula-same-property'],
    evidenceTypes: ['explanation', 'data', 'application'], estimatedMinutes: 30, isCritical: true
  },
  {
    id: 'chem11-org-structural-formula-representations',
    topicId: 'chem11-t3', title: 'Công thức cấu tạo đầy đủ và thu gọn',
    description: 'Đọc, viết và chuyển đổi CTCT đầy đủ, CTCT thu gọn của một số hợp chất hữu cơ đơn giản.',
    scope: 'core', orderIndex: 331, questionTypeIds: ['chem11-qt42'],
    prerequisiteOutcomeIds: ['chem11-org-structure-theory-valence'],
    misconceptionIds: ['chem11-mis-condensed-loses-connectivity', 'chem11-mis-structural-formula-molecular'],
    evidenceTypes: ['representation', 'application'], estimatedMinutes: 45, isCritical: true
  },
  {
    id: 'chem11-org-homolog-concept',
    topicId: 'chem11-t3', title: 'Khái niệm đồng đẳng và dãy đồng đẳng',
    description: 'Nêu các chất đồng đẳng có cấu tạo và tính chất hóa học tương tự, thành phần phân tử hơn kém nhau một hay nhiều nhóm CH₂.',
    scope: 'core', orderIndex: 332, questionTypeIds: ['chem11-qt43'],
    prerequisiteOutcomeIds: ['chem11-org-structural-formula-representations'],
    misconceptionIds: ['chem11-mis-homolog-any-ch2', 'chem11-mis-homolog-same-formula'],
    evidenceTypes: ['recognition', 'explanation'], estimatedMinutes: 30, isCritical: true
  },
  {
    id: 'chem11-org-homolog-identification',
    topicId: 'chem11-t3', title: 'Nhận diện và suy luận chất đồng đẳng',
    description: 'Xác định các chất thuộc cùng dãy đồng đẳng từ CTPT/CTCT và suy ra công thức thành viên kế tiếp đơn giản.',
    scope: 'core', orderIndex: 333, questionTypeIds: ['chem11-qt43'],
    prerequisiteOutcomeIds: ['chem11-org-homolog-concept'],
    misconceptionIds: ['chem11-mis-homolog-functional-group-ignore'],
    evidenceTypes: ['representation', 'data', 'application'], estimatedMinutes: 40, isCritical: true
  },
  {
    id: 'chem11-org-isomer-concept',
    topicId: 'chem11-t3', title: 'Khái niệm đồng phân',
    description: 'Nêu các chất đồng phân có cùng CTPT nhưng khác cấu tạo hóa học và vì vậy có thể khác tính chất.',
    scope: 'core', orderIndex: 334, questionTypeIds: ['chem11-qt44'],
    prerequisiteOutcomeIds: ['chem11-org-structure-property-relation'],
    misconceptionIds: ['chem11-mis-isomer-different-formula', 'chem11-mis-isomer-same-drawing'],
    evidenceTypes: ['recognition', 'representation', 'explanation'], estimatedMinutes: 30, isCritical: true
  },
  {
    id: 'chem11-org-isomer-identification',
    topicId: 'chem11-t3', title: 'Nhận diện cặp đồng phân từ CTCT',
    description: 'So sánh CTPT và cách nối nguyên tử để phân biệt đồng phân, đồng đẳng và cùng một chất.',
    scope: 'core', orderIndex: 335, questionTypeIds: ['chem11-qt44'],
    prerequisiteOutcomeIds: ['chem11-org-isomer-concept'],
    misconceptionIds: ['chem11-mis-isomer-orientation', 'chem11-mis-homolog-isomer-confusion'],
    evidenceTypes: ['representation', 'explanation', 'application'], estimatedMinutes: 40, isCritical: true
  },
  {
    id: 'chem11-org-simple-isomer-enumeration',
    topicId: 'chem11-t3', title: 'Viết đồng phân cấu tạo đơn giản',
    description: 'Viết có hệ thống và loại trùng các CTCT của một số hợp chất đơn giản trong phạm vi bài học.',
    scope: 'core', orderIndex: 336, questionTypeIds: ['chem11-qt44'],
    prerequisiteOutcomeIds: ['chem11-org-isomer-identification'],
    misconceptionIds: ['chem11-mis-isomer-missing-branch', 'chem11-mis-isomer-double-count'],
    evidenceTypes: ['representation', 'application'], estimatedMinutes: 50, isCritical: true
  }
];

export const g11ChemistryOrganicBasicsMisconceptions: LearningMisconception[] = [
  {
    id: 'chem11-mis-organic-living-only',
    outcomeId: 'chem11-org-organic-concept',
    statement: 'Hợp chất hữu cơ chỉ có thể được tạo ra trong cơ thể sống.',
    correction: 'Rất nhiều hợp chất hữu cơ được tổng hợp trong phòng thí nghiệm và công nghiệp; nguồn gốc sinh học không phải tiêu chí định nghĩa.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-organic-concept']
  },
  {
    id: 'chem11-mis-organic-always-carbon-hydrogen',
    outcomeId: 'chem11-org-organic-concept',
    statement: 'Hợp chất hữu cơ bắt buộc phải đồng thời chứa carbon và hydrogen.',
    correction: 'Carbon là thành phần cốt lõi, nhưng một số hợp chất hữu cơ không chứa hydrogen, ví dụ một số dẫn xuất halogen.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-organic-concept', 'chem11-org-classify-derivative']
  },
  {
    id: 'chem11-mis-all-carbon-organic',
    outcomeId: 'chem11-org-organic-exceptions',
    statement: 'Mọi hợp chất chứa carbon đều là hợp chất hữu cơ.',
    correction: 'CO, CO₂, carbonic acid, carbonate, hydrogencarbonate, carbide và một số hợp chất carbon khác được xếp vào hóa học vô cơ.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-organic-exceptions']
  },
  {
    id: 'chem11-mis-organic-chemistry-plants-only',
    outcomeId: 'chem11-org-organic-chemistry-scope',
    statement: 'Hóa học hữu cơ chỉ nghiên cứu các chất lấy từ cây cối.',
    correction: 'Hóa học hữu cơ nghiên cứu thành phần, cấu trúc, tính chất, phản ứng, điều chế và ứng dụng của hợp chất hữu cơ từ mọi nguồn.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-organic-chemistry-scope']
  },
  {
    id: 'chem11-mis-organic-only-ch',
    outcomeId: 'chem11-org-composition-bonding',
    statement: 'Mọi hợp chất hữu cơ chỉ gồm carbon và hydrogen.',
    correction: 'Chỉ hydrocarbon mới gồm C và H; dẫn xuất có thể chứa O, N, halogen, S, P và các nguyên tố khác.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-composition-bonding', 'chem11-org-classify-derivative']
  },
  {
    id: 'chem11-mis-organic-ionic-dominant',
    outcomeId: 'chem11-org-composition-bonding',
    statement: 'Liên kết ion là kiểu liên kết chiếm ưu thế trong phần lớn hợp chất hữu cơ phân tử.',
    correction: 'Liên kết cộng hóa trị chiếm ưu thế trong phần lớn hợp chất hữu cơ phân tử.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-composition-bonding']
  },
  {
    id: 'chem11-mis-organic-never-water-soluble',
    outcomeId: 'chem11-org-physical-characteristics',
    statement: 'Mọi hợp chất hữu cơ đều hoàn toàn không tan trong nước.',
    correction: 'Nhiều hợp chất hữu cơ ít tan, nhưng các phân tử nhỏ có nhóm phân cực có thể tan tốt; đây là xu hướng chứ không phải quy tắc tuyệt đối.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-physical-characteristics']
  },
  {
    id: 'chem11-mis-organic-always-low-boiling',
    outcomeId: 'chem11-org-physical-characteristics',
    statement: 'Mọi hợp chất hữu cơ đều có nhiệt độ sôi thấp hơn mọi hợp chất vô cơ.',
    correction: 'Nhiệt độ sôi phụ thuộc khối lượng, cấu trúc và lực tương tác; chỉ nên nêu xu hướng chung, không so sánh tuyệt đối.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-physical-characteristics']
  },
  {
    id: 'chem11-mis-organic-reaction-always-complete',
    outcomeId: 'chem11-org-reaction-characteristics',
    statement: 'Phản ứng hữu cơ luôn xảy ra nhanh, hoàn toàn và chỉ tạo một sản phẩm.',
    correction: 'Nhiều phản ứng hữu cơ chậm, cần điều kiện hoặc xúc tác, theo nhiều hướng và có thể tạo hỗn hợp sản phẩm.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-reaction-characteristics']
  },
  {
    id: 'chem11-mis-hydrocarbon-any-organic',
    outcomeId: 'chem11-org-classify-hydrocarbon',
    statement: 'Mọi hợp chất hữu cơ đều là hydrocarbon.',
    correction: 'Hydrocarbon là hợp chất hữu cơ chỉ chứa C và H; chất có thêm nguyên tố khác thuộc dẫn xuất hydrocarbon.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-classify-hydrocarbon']
  },
  {
    id: 'chem11-mis-derivative-must-have-oxygen',
    outcomeId: 'chem11-org-classify-derivative',
    statement: 'Dẫn xuất hydrocarbon bắt buộc phải chứa oxygen.',
    correction: 'Dẫn xuất có thể chứa O, N, halogen, S hoặc nguyên tố khác; oxygen không phải điều kiện bắt buộc.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-classify-derivative']
  },
  {
    id: 'chem11-mis-co2-hydrocarbon-derivative',
    outcomeId: 'chem11-org-classify-derivative',
    statement: 'CO₂ là dẫn xuất hydrocarbon vì chứa carbon và oxygen.',
    correction: 'CO₂ là oxide vô cơ của carbon, thuộc nhóm ngoại lệ chứ không phải dẫn xuất hydrocarbon.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-organic-exceptions', 'chem11-org-classify-derivative']
  },
  {
    id: 'chem11-mis-functional-group-any-fragment',
    outcomeId: 'chem11-org-functional-group',
    statement: 'Bất kì đoạn công thức nào được khoanh lại cũng là nhóm chức.',
    correction: 'Nhóm chức là nguyên tử hoặc nhóm nguyên tử gây ra tính chất hóa học đặc trưng của một loại hợp chất.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-functional-group']
  },
  {
    id: 'chem11-mis-oh-always-alcohol',
    outcomeId: 'chem11-org-functional-group',
    statement: 'Hễ thấy nhóm –OH thì chất chắc chắn là alcohol.',
    correction: 'Cần xét –OH gắn với khung nào; –OH phenol và nhóm –COOH không được phân loại như –OH alcohol.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-functional-group']
  },
  {
    id: 'chem11-mis-distillation-density',
    outcomeId: 'chem11-org-distillation-principle',
    statement: 'Chưng cất tách các chất chủ yếu vì chúng có khối lượng riêng khác nhau.',
    correction: 'Chưng cất dựa chủ yếu vào khác biệt nhiệt độ sôi và độ bay hơi; khối lượng riêng là dữ kiện quan trọng hơn trong xác định lớp khi chiết.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-distillation-principle']
  },
  {
    id: 'chem11-mis-distillation-boil-same',
    outcomeId: 'chem11-org-distillation-principle',
    statement: 'Hai chất lỏng có nhiệt độ sôi rất gần nhau vẫn được tách hoàn toàn bằng một lần chưng cất thường đơn giản.',
    correction: 'Nhiệt độ sôi càng gần thì chưng cất thường càng khó tách rõ; có thể cần chưng cất phân đoạn hoặc phương pháp khác.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-distillation-principle']
  },
  {
    id: 'chem11-mis-distillation-thermometer-liquid',
    outcomeId: 'chem11-org-distillation-apparatus',
    statement: 'Bầu nhiệt kế trong bộ chưng cất phải ngập sâu trong chất lỏng đang đun.',
    correction: 'Bầu nhiệt kế cần đặt gần đường hơi đi vào sinh hàn để đo nhiệt độ hơi đi sang bình hứng.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-distillation-apparatus']
  },
  {
    id: 'chem11-mis-condenser-water-top',
    outcomeId: 'chem11-org-distillation-apparatus',
    statement: 'Nước làm lạnh nên đi vào sinh hàn từ đầu trên và ra ở đầu dưới.',
    correction: 'Nước thường đi vào từ đầu thấp và ra ở đầu cao để áo nước đầy, trao đổi nhiệt hiệu quả.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-distillation-apparatus']
  },
  {
    id: 'chem11-mis-distillation-collect-all',
    outcomeId: 'chem11-org-distillation-data',
    statement: 'Có thể gộp toàn bộ chất lỏng ngưng tụ từ đầu đến cuối vào một bình mà vẫn thu phân đoạn tinh khiết.',
    correction: 'Cần theo dõi nhiệt độ và đổi bình hứng theo khoảng phân đoạn; phần đầu, giữa và cuối có thành phần khác nhau.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-distillation-data']
  },
  {
    id: 'chem11-mis-extraction-miscible-solvents',
    outcomeId: 'chem11-org-extraction-principle',
    statement: 'Hai dung môi trộn lẫn hoàn toàn vẫn tạo hai lớp ổn định để chiết lỏng–lỏng.',
    correction: 'Chiết lỏng–lỏng cần hai dung môi hầu như không trộn lẫn để hình thành hai pha.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-extraction-principle']
  },
  {
    id: 'chem11-mis-extraction-density-solubility',
    outcomeId: 'chem11-org-extraction-principle',
    statement: 'Dung môi có khối lượng riêng lớn hơn luôn hòa tan chất cần chiết tốt hơn.',
    correction: 'Khả năng hòa tan và khối lượng riêng là hai thuộc tính khác nhau; chọn dung môi theo độ tan/chọn lọc, dùng khối lượng riêng để xác định vị trí lớp.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-extraction-principle', 'chem11-org-extraction-funnel']
  },
  {
    id: 'chem11-mis-extraction-no-vent',
    outcomeId: 'chem11-org-extraction-funnel',
    statement: 'Khi lắc phễu chiết chứa dung môi dễ bay hơi, không cần xả áp.',
    correction: 'Phải giữ nút và khóa đúng cách, đảo–lắc có kiểm soát và xả áp định kì theo hướng an toàn.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-extraction-funnel']
  },
  {
    id: 'chem11-mis-extraction-layer-color-only',
    outcomeId: 'chem11-org-extraction-funnel',
    statement: 'Luôn xác định lớp hữu cơ chỉ bằng màu sắc.',
    correction: 'Cần dựa vào khối lượng riêng, tính chất dung môi và phép kiểm tra giọt khi cần; màu có thể do chất tan chứ không xác định loại pha.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-extraction-funnel']
  },
  {
    id: 'chem11-mis-extraction-one-large-best',
    outcomeId: 'chem11-org-extraction-efficiency-safety',
    statement: 'Một lần chiết bằng toàn bộ dung môi luôn hiệu quả hơn nhiều lần chiết bằng các phần nhỏ với cùng tổng thể tích.',
    correction: 'Trong nhiều trường hợp, chiết lặp lại bằng các phần dung môi nhỏ thu hồi chất tan tốt hơn do cân bằng phân bố được thiết lập nhiều lần.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-extraction-efficiency-safety']
  },
  {
    id: 'chem11-mis-extraction-heat-sealed',
    outcomeId: 'chem11-org-extraction-efficiency-safety',
    statement: 'Có thể đun nóng phễu chiết đang nút kín để hai pha tách nhanh.',
    correction: 'Không đun nóng phễu chiết kín; áp suất hơi tăng có thể gây bật nút hoặc tai nạn.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-extraction-efficiency-safety']
  },
  {
    id: 'chem11-mis-crystallization-evaporate-dry',
    outcomeId: 'chem11-org-crystallization-principle',
    statement: 'Kết tinh tinh chế luôn phải cô cạn hoàn toàn dung môi.',
    correction: 'Thường hòa tan chất trong lượng dung môi nóng tối thiểu rồi làm nguội để tinh thể chọn lọc xuất hiện; cô cạn có thể giữ tạp chất trong sản phẩm.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-crystallization-principle']
  },
  {
    id: 'chem11-mis-crystallization-solubility-constant',
    outcomeId: 'chem11-org-crystallization-principle',
    statement: 'Độ tan không đổi theo nhiệt độ nên làm nguội không ảnh hưởng kết tinh.',
    correction: 'Kết tinh thường khai thác độ tan của chất giảm khi nhiệt độ giảm.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-crystallization-principle']
  },
  {
    id: 'chem11-mis-crystallization-cool-fast-always',
    outcomeId: 'chem11-org-crystallization-procedure',
    statement: 'Làm lạnh càng đột ngột luôn tạo tinh thể tinh khiết hơn.',
    correction: 'Làm nguội có kiểm soát thường tạo tinh thể lớn và ít giữ tạp hơn; làm lạnh quá nhanh có thể tạo tinh thể nhỏ giữ tạp.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-crystallization-procedure']
  },
  {
    id: 'chem11-mis-crystal-pure-perfect-yield',
    outcomeId: 'chem11-org-crystallization-procedure',
    statement: 'Kết tinh có thể đồng thời thu hồi 100% chất và loại bỏ 100% tạp chất.',
    correction: 'Có đánh đổi giữa độ tinh khiết và hiệu suất; một phần chất còn trong dung dịch mẹ và một phần tạp có thể bị giữ trong tinh thể.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-crystallization-procedure']
  },
  {
    id: 'chem11-mis-one-method-all-mixtures',
    outcomeId: 'chem11-org-separation-method-selection',
    statement: 'Một phương pháp tách duy nhất có thể dùng tối ưu cho mọi hỗn hợp hữu cơ.',
    correction: 'Phải chọn theo trạng thái, độ bay hơi, tính trộn lẫn, độ tan, độ bền nhiệt và mục tiêu tinh chế.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-separation-method-selection']
  },
  {
    id: 'chem11-mis-molecular-formula-structure',
    outcomeId: 'chem11-org-molecular-formula-meaning',
    statement: 'Công thức phân tử luôn cho biết duy nhất cách các nguyên tử liên kết với nhau.',
    correction: 'Công thức phân tử chỉ cho biết thành phần nguyên tố và số nguyên tử; nhiều chất có thể cùng công thức phân tử nhưng khác cấu tạo.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-molecular-formula-meaning']
  },
  {
    id: 'chem11-mis-subscript-mole',
    outcomeId: 'chem11-org-molecular-formula-meaning',
    statement: 'Chỉ số trong công thức phân tử là số mol nguyên tố trong mọi lượng mẫu.',
    correction: 'Chỉ số mô tả số nguyên tử trong một phân tử và tỉ lệ mol nguyên tử trong chất, không phải số mol tuyệt đối của mẫu bất kì.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-molecular-formula-meaning']
  },
  {
    id: 'chem11-mis-empirical-same-molecular',
    outcomeId: 'chem11-org-empirical-formula-meaning',
    statement: 'Công thức đơn giản nhất luôn trùng công thức phân tử.',
    correction: 'Công thức phân tử là một bội nguyên dương của công thức đơn giản nhất; hai công thức chỉ trùng khi bội n = 1.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-empirical-formula-meaning', 'chem11-org-formula-multiple-relation']
  },
  {
    id: 'chem11-mis-empirical-not-reduced',
    outcomeId: 'chem11-org-empirical-formula-meaning',
    statement: 'Có thể giữ nguyên C₂H₄O₂ làm công thức đơn giản nhất.',
    correction: 'Phải chia toàn bộ chỉ số cho ước chung lớn nhất; C₂H₄O₂ rút gọn thành CH₂O.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-empirical-formula-meaning']
  },
  {
    id: 'chem11-mis-formula-n-any',
    outcomeId: 'chem11-org-formula-multiple-relation',
    statement: 'Hệ số n trong CTPT = (CTĐGN)n có thể là số thập phân bất kì.',
    correction: 'n phải là số nguyên dương vì số nguyên tử trong phân tử là số nguyên.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-formula-multiple-relation']
  },
  {
    id: 'chem11-mis-molar-mass-ignore',
    outcomeId: 'chem11-org-formula-multiple-relation',
    statement: 'Biết công thức đơn giản nhất là đủ xác định duy nhất công thức phân tử.',
    correction: 'Cần thêm phân tử khối hoặc dữ kiện tương đương để xác định bội n.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-formula-multiple-relation', 'chem11-org-molecular-formula-determination']
  },
  {
    id: 'chem11-mis-percent-atom-count',
    outcomeId: 'chem11-org-element-percent-from-formula',
    statement: 'Phần trăm khối lượng nguyên tố bằng phần trăm số nguyên tử của nguyên tố đó.',
    correction: 'Phần trăm khối lượng phải dùng tổng khối lượng nguyên tử của nguyên tố chia cho phân tử khối.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-element-percent-from-formula']
  },
  {
    id: 'chem11-mis-percent-not-total',
    outcomeId: 'chem11-org-element-percent-from-formula',
    statement: 'Tổng phần trăm khối lượng các nguyên tố không cần gần 100%.',
    correction: 'Nếu đã xét đủ mọi nguyên tố và làm tròn hợp lí, tổng phần trăm phải bằng hoặc xấp xỉ 100%.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-element-percent-from-formula']
  },
  {
    id: 'chem11-mis-percent-direct-ratio',
    outcomeId: 'chem11-org-empirical-from-percent',
    statement: 'Có thể dùng trực tiếp tỉ lệ phần trăm khối lượng làm chỉ số nguyên tử.',
    correction: 'Phải chia phần trăm khối lượng cho nguyên tử khối để chuyển thành tỉ lệ mol nguyên tử.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-empirical-from-percent']
  },
  {
    id: 'chem11-mis-ratio-round-early',
    outcomeId: 'chem11-org-empirical-from-percent',
    statement: 'Tỉ lệ 1 : 1,5 có thể làm tròn ngay thành 1 : 2.',
    correction: 'Phải nhân toàn bộ tỉ lệ với cùng một số để đưa về số nguyên nhỏ nhất; 1 : 1,5 trở thành 2 : 3.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-empirical-from-percent', 'chem11-org-empirical-from-mass']
  },
  {
    id: 'chem11-mis-mass-as-subscript',
    outcomeId: 'chem11-org-empirical-from-mass',
    statement: 'Khối lượng gam của các nguyên tố có thể dùng thẳng làm chỉ số công thức.',
    correction: 'Phải đổi khối lượng từng nguyên tố sang số mol trước khi lập tỉ lệ chỉ số.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-empirical-from-mass']
  },
  {
    id: 'chem11-mis-combustion-h-from-water',
    outcomeId: 'chem11-org-combustion-analysis-ch',
    statement: 'Số mol hydrogen nguyên tử bằng số mol H₂O tạo thành.',
    correction: 'Mỗi mol H₂O chứa 2 mol nguyên tử H nên n(H) = 2n(H₂O).',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-combustion-analysis-ch']
  },
  {
    id: 'chem11-mis-combustion-c-from-co2-mass',
    outcomeId: 'chem11-org-combustion-analysis-ch',
    statement: 'Khối lượng carbon trong mẫu bằng khối lượng CO₂ thu được.',
    correction: 'Một mol CO₂ chứa một mol C; cần đổi CO₂ sang mol rồi suy ra m(C) = 12n(CO₂).',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-combustion-analysis-ch']
  },
  {
    id: 'chem11-mis-oxygen-from-o2-product',
    outcomeId: 'chem11-org-oxygen-by-difference',
    statement: 'Toàn bộ oxygen trong CO₂ và H₂O sau cháy đều có nguồn gốc từ hợp chất hữu cơ.',
    correction: 'Oxygen trong sản phẩm còn đến từ O₂ dùng để đốt; với chất chỉ chứa C, H, O, thường tìm O trong mẫu bằng hiệu khối lượng.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-oxygen-by-difference']
  },
  {
    id: 'chem11-mis-difference-with-unknown-elements',
    outcomeId: 'chem11-org-oxygen-by-difference',
    statement: 'Luôn quy phần khối lượng còn lại sau C và H là oxygen dù đề không cho thành phần nguyên tố.',
    correction: 'Chỉ dùng hiệu cho oxygen khi biết chất chỉ chứa C, H, O hoặc có dữ kiện loại trừ các nguyên tố khác.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-org-oxygen-by-difference']
  },
  {
    id: 'chem11-mis-formula-no-validation',
    outcomeId: 'chem11-org-molecular-formula-determination',
    statement: 'Sau khi tìm được một bộ chỉ số nguyên thì không cần kiểm tra lại phân tử khối và thành phần.',
    correction: 'Phải kiểm tra n là số nguyên dương, phân tử khối khớp dữ kiện và phần trăm/khối lượng nguyên tố được tái tạo đúng trong sai số cho phép.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-org-molecular-formula-determination']
  },
  {
    id: 'chem11-mis-structure-any-order', outcomeId: 'chem11-org-structure-theory-valence',
    statement: 'Các nguyên tử trong phân tử hữu cơ có thể nối theo trật tự bất kì mà vẫn là cùng chất.',
    correction: 'Các nguyên tử liên kết theo đúng hóa trị và trật tự xác định; thay đổi trật tự có thể tạo chất khác.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-structure-theory-valence']
  },
  {
    id: 'chem11-mis-carbon-variable-valence', outcomeId: 'chem11-org-structure-theory-valence',
    statement: 'Carbon trong hợp chất hữu cơ thường chỉ có hóa trị II.',
    correction: 'Trong khung thuyết cấu tạo phổ thông, carbon có hóa trị IV.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-structure-theory-valence']
  },
  {
    id: 'chem11-mis-carbon-chain-straight-only', outcomeId: 'chem11-org-carbon-chain-bonding',
    statement: 'Carbon chỉ tạo được mạch thẳng và liên kết đơn.',
    correction: 'Carbon có thể tạo mạch thẳng, nhánh, vòng và liên kết đơn hoặc bội.',
    severity: 'normal', remediationOutcomeIds: ['chem11-org-carbon-chain-bonding']
  },
  {
    id: 'chem11-mis-same-formula-same-property', outcomeId: 'chem11-org-structure-property-relation',
    statement: 'Cùng công thức phân tử thì chắc chắn cùng tính chất.',
    correction: 'Khác cấu tạo có thể dẫn đến tính chất khác dù cùng công thức phân tử.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-structure-property-relation']
  },
  {
    id: 'chem11-mis-condensed-loses-connectivity', outcomeId: 'chem11-org-structural-formula-representations',
    statement: 'Công thức thu gọn không thể hiện được trật tự liên kết.',
    correction: 'CTCT thu gọn vẫn mã hóa thứ tự nối các nhóm nguyên tử, chỉ lược bớt nét liên kết C–H.',
    severity: 'normal', remediationOutcomeIds: ['chem11-org-structural-formula-representations']
  },
  {
    id: 'chem11-mis-structural-formula-molecular', outcomeId: 'chem11-org-structural-formula-representations',
    statement: 'CH₃CH₂OH và C₂H₆O cung cấp lượng thông tin cấu tạo như nhau.',
    correction: 'CH₃CH₂OH thể hiện cách nối nhóm; C₂H₆O chỉ là CTPT.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-structural-formula-representations']
  },
  {
    id: 'chem11-mis-homolog-any-ch2', outcomeId: 'chem11-org-homolog-concept',
    statement: 'Hai chất hơn kém nhau CH₂ luôn là đồng đẳng.',
    correction: 'Ngoài chênh CH₂, chúng phải có cấu tạo và tính chất hóa học tương tự, thuộc cùng dãy.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-homolog-concept']
  },
  {
    id: 'chem11-mis-homolog-same-formula', outcomeId: 'chem11-org-homolog-concept',
    statement: 'Các chất đồng đẳng có cùng công thức phân tử.',
    correction: 'Các chất đồng đẳng có CTPT khác nhau, thường hơn kém một hay nhiều CH₂.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-homolog-concept']
  },
  {
    id: 'chem11-mis-homolog-functional-group-ignore', outcomeId: 'chem11-org-homolog-identification',
    statement: 'Chỉ cần đếm C,H, không cần xét nhóm chức khi nhận dãy đồng đẳng.',
    correction: 'Phải xét kiểu cấu tạo/nhóm chức tương tự trước khi so chênh CH₂.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-homolog-identification']
  },
  {
    id: 'chem11-mis-isomer-different-formula', outcomeId: 'chem11-org-isomer-concept',
    statement: 'Hai chất có CTPT khác nhau có thể là đồng phân.',
    correction: 'Điều kiện bắt buộc của đồng phân là cùng CTPT nhưng khác cấu tạo.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-isomer-concept']
  },
  {
    id: 'chem11-mis-isomer-same-drawing', outcomeId: 'chem11-org-isomer-concept',
    statement: 'Hai cách viết khác nhau của cùng một cấu tạo luôn là hai đồng phân.',
    correction: 'Phải so sánh liên kết; xoay hoặc viết ngược cùng một mạch vẫn là một chất.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-isomer-concept']
  },
  {
    id: 'chem11-mis-isomer-orientation', outcomeId: 'chem11-org-isomer-identification',
    statement: 'CH₃CH₂CH₃ và CH₃–CH₂–CH₃ là hai đồng phân vì cách trình bày khác.',
    correction: 'Hai biểu diễn có cùng liên kết nên là cùng một chất.',
    severity: 'normal', remediationOutcomeIds: ['chem11-org-isomer-identification']
  },
  {
    id: 'chem11-mis-homolog-isomer-confusion', outcomeId: 'chem11-org-isomer-identification',
    statement: 'Đồng đẳng và đồng phân đều có cùng CTPT.',
    correction: 'Đồng phân cùng CTPT; đồng đẳng khác CTPT và hơn kém CH₂ trong cùng dãy.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-isomer-identification', 'chem11-org-homolog-concept']
  },
  {
    id: 'chem11-mis-isomer-missing-branch', outcomeId: 'chem11-org-simple-isomer-enumeration',
    statement: 'Khi viết đồng phân chỉ cần xét mạch thẳng.',
    correction: 'Cần thay đổi khung carbon hợp lệ, gồm mạch thẳng và mạch nhánh trong phạm vi đề.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-simple-isomer-enumeration']
  },
  {
    id: 'chem11-mis-isomer-double-count', outcomeId: 'chem11-org-simple-isomer-enumeration',
    statement: 'Viết mạch từ trái sang phải và từ phải sang trái được tính là hai đồng phân.',
    correction: 'Hai cách viết có cùng liên kết chỉ được tính một cấu tạo.',
    severity: 'critical', remediationOutcomeIds: ['chem11-org-simple-isomer-enumeration']
  }
];
