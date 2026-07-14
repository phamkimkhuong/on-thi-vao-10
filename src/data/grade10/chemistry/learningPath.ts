import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10ChemistryOutcomes: LearningOutcome[] = [
  {
    id: 'chem10-intro-object', topicId: 'chem10-t0', orderIndex: 1, scope: 'core',
    title: 'Hóa học nghiên cứu điều gì?',
    description: 'Phân biệt chất với vật thể và nhận diện thành phần, cấu trúc, tính chất, sự biến đổi của chất.',
    questionTypeIds: ['chem10-qt-intro-object'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['recognition', 'explanation', 'application'], estimatedMinutes: 18,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [6, 7, 8] }
  },
  {
    id: 'chem10-intro-inquiry', topicId: 'chem10-t0', orderIndex: 2, scope: 'core',
    title: 'Quan sát, bằng chứng và kết luận',
    description: 'Phân biệt quan sát với suy luận, xác định biến và rút kết luận phù hợp từ dữ liệu.',
    questionTypeIds: ['chem10-qt-intro-inquiry'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['data', 'experiment', 'explanation'], estimatedMinutes: 22,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [9, 10, 11, 12] }
  },
  {
    id: 'chem10-bridge-equation', topicId: 'chem10-t0', orderIndex: 3, scope: 'bridge',
    title: 'Cân bằng phương trình và bảo toàn',
    description: 'Bài bổ trợ THCS, chỉ cần học khi kết quả chẩn đoán cho thấy còn nhầm hệ số, chỉ số hoặc bảo toàn nguyên tử.',
    questionTypeIds: ['chem10-qt01'], prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem10-mis-subscript-balance'], evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 25
  },
  {
    id: 'chem10-bridge-mole', topicId: 'chem10-t0', orderIndex: 4, scope: 'bridge',
    title: 'Mol, khối lượng mol và thể tích khí',
    description: 'Khôi phục kỹ năng chuyển đổi lượng chất để dùng ở các chương phản ứng.',
    questionTypeIds: ['chem10-qt02'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['calculation', 'representation'], estimatedMinutes: 25
  },
  {
    id: 'chem10-bridge-formula', topicId: 'chem10-t0', orderIndex: 5, scope: 'bridge',
    title: 'Hóa trị và công thức hóa học',
    description: 'Bài bổ trợ cho học sinh chưa đọc và lập chắc công thức hợp chất.',
    questionTypeIds: ['chem10-qt03'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['representation', 'calculation'], estimatedMinutes: 20
  },
  {
    id: 'chem10-bridge-ratio', topicId: 'chem10-t0', orderIndex: 6, scope: 'bridge',
    title: 'Nồng độ và phép toán tỉ lệ',
    description: 'Bổ trợ phần trăm, nồng độ và tỉ lệ phương trình trước các bài có số liệu.',
    questionTypeIds: ['chem10-qt04'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['calculation', 'data'], estimatedMinutes: 25
  },
  {
    id: 'chem10-atom-particles', topicId: 'chem10-t1', orderIndex: 1, scope: 'core',
    title: 'Thành phần và kích thước nguyên tử',
    description: 'Xác định proton, neutron, electron; giải thích khối lượng tập trung ở hạt nhân và phần lớn thể tích nguyên tử là khoảng không.',
    questionTypeIds: ['chem10-qt1'], prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem10-mis-nucleus-volume'], evidenceTypes: ['recognition', 'explanation', 'calculation'], estimatedMinutes: 22, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [13, 14, 15] }
  },
  {
    id: 'chem10-atom-symbol', topicId: 'chem10-t1', orderIndex: 2, scope: 'core',
    title: 'Nguyên tố và kí hiệu nguyên tử',
    description: 'Đọc số hiệu nguyên tử, số khối và xác định số hạt từ kí hiệu nguyên tử.',
    questionTypeIds: ['chem10-qt2'], prerequisiteOutcomeIds: ['chem10-atom-particles'],
    misconceptionIds: ['chem10-mis-element-neutron'], evidenceTypes: ['representation', 'calculation', 'explanation'], estimatedMinutes: 20, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [17] }
  },
  {
    id: 'chem10-atom-isotope', topicId: 'chem10-t1', orderIndex: 3, scope: 'core',
    title: 'Đồng vị và nguyên tử khối trung bình',
    description: 'Phân biệt đồng vị, số khối và nguyên tử khối trung bình; tính trung bình có trọng số.',
    questionTypeIds: ['chem10-qt3'], prerequisiteOutcomeIds: ['chem10-atom-symbol'],
    misconceptionIds: ['chem10-mis-average-mass'], evidenceTypes: ['calculation', 'explanation'],
    remediationOutcomeIds: ['chem10-bridge-ratio'], estimatedMinutes: 28, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [18, 19, 20] }
  },
  {
    id: 'chem10-atom-spectrum', topicId: 'chem10-t1', orderIndex: 4, scope: 'core',
    title: 'Đọc dữ liệu phổ khối lượng',
    description: 'Đọc trục, cường độ tương đối và dùng phổ khối để xác định đồng vị, độ phổ biến.',
    questionTypeIds: ['chem10-qt3'], prerequisiteOutcomeIds: ['chem10-atom-isotope'],
    misconceptionIds: ['chem10-mis-peak-height'], evidenceTypes: ['data', 'calculation', 'explanation'], estimatedMinutes: 24,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [19, 20] }
  },
  {
    id: 'chem10-atom-model', topicId: 'chem10-t1', orderIndex: 5, scope: 'core',
    title: 'Mô hình Bohr và mô hình hiện đại',
    description: 'Hiểu mô hình khoa học có giới hạn và orbital không phải đường chuyển động cố định của electron.',
    questionTypeIds: ['chem10-qt4'], prerequisiteOutcomeIds: ['chem10-atom-particles'],
    misconceptionIds: ['chem10-mis-orbit-orbital'], evidenceTypes: ['explanation', 'representation'], estimatedMinutes: 22, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [21, 22] }
  },
  {
    id: 'chem10-atom-orbital', topicId: 'chem10-t1', orderIndex: 6, scope: 'core',
    title: 'Orbital, lớp và phân lớp',
    description: 'Phân biệt lớp, phân lớp, orbital và sức chứa electron tương ứng.',
    questionTypeIds: ['chem10-qt5'], prerequisiteOutcomeIds: ['chem10-atom-model'], misconceptionIds: [],
    evidenceTypes: ['recognition', 'representation', 'explanation'], estimatedMinutes: 26,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [22, 23] }
  },
  {
    id: 'chem10-atom-configuration', topicId: 'chem10-t1', orderIndex: 7, scope: 'core',
    title: 'Cấu hình electron và sơ đồ orbital',
    description: 'Viết cấu hình electron và sơ đồ orbital cho các nguyên tố trong phạm vi cốt lõi.',
    questionTypeIds: ['chem10-qt6'], prerequisiteOutcomeIds: ['chem10-atom-orbital'], misconceptionIds: [],
    evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 32, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [23, 24, 25] }
  },
  {
    id: 'chem10-atom-property', topicId: 'chem10-t1', orderIndex: 8, scope: 'core',
    title: 'Cấu hình electron và tính chất sơ bộ',
    description: 'Dùng electron lớp ngoài cùng để dự đoán xu hướng kim loại, phi kim hoặc khí hiếm.',
    questionTypeIds: ['chem10-qt7'], prerequisiteOutcomeIds: ['chem10-atom-configuration'], misconceptionIds: [],
    evidenceTypes: ['explanation', 'application'], estimatedMinutes: 24, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [25, 26] }
  },
  {
    id: 'chem10-periodic-structure', topicId: 'chem10-t2', orderIndex: 1, scope: 'core', title: 'Ô nguyên tố, chu kì và nhóm',
    description: 'Đọc cấu trúc bảng tuần hoàn và phân loại nguyên tố theo vị trí.', questionTypeIds: ['chem10-qt8'], prerequisiteOutcomeIds: ['chem10-atom-symbol'], misconceptionIds: [], evidenceTypes: ['recognition', 'representation'], estimatedMinutes: 22,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [30, 31, 32, 33] }
  },
  {
    id: 'chem10-periodic-position', topicId: 'chem10-t2', orderIndex: 2, scope: 'core', title: 'Cấu hình electron và vị trí',
    description: 'Suy ra chu kì, nhóm và loại nguyên tố từ cấu hình electron.', questionTypeIds: ['chem10-qt9'], prerequisiteOutcomeIds: ['chem10-atom-configuration'], misconceptionIds: [], evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 28, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [33] }
  },
  {
    id: 'chem10-periodic-radius', topicId: 'chem10-t2', orderIndex: 3, scope: 'core', title: 'Xu hướng bán kính nguyên tử',
    description: 'Giải thích xu hướng bán kính bằng số lớp electron và lực hút hạt nhân.', questionTypeIds: ['chem10-qt10'], prerequisiteOutcomeIds: ['chem10-periodic-position'], misconceptionIds: ['chem10-mis-radius-arrow'], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 25, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [35, 36] }
  },
  {
    id: 'chem10-periodic-character', topicId: 'chem10-t2', orderIndex: 4, scope: 'core', title: 'Độ âm điện và tính kim loại–phi kim',
    description: 'Liên hệ khả năng hút electron với xu hướng kim loại và phi kim.', questionTypeIds: ['chem10-qt11'], prerequisiteOutcomeIds: ['chem10-periodic-radius'], misconceptionIds: [], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 28, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [36, 37, 38, 39] }
  },
  {
    id: 'chem10-periodic-compounds', topicId: 'chem10-t2', orderIndex: 5, scope: 'core', title: 'Oxide, hydroxide và định luật tuần hoàn',
    description: 'Dự đoán xu hướng acid–base của oxide, hydroxide và khái quát định luật tuần hoàn.', questionTypeIds: ['chem10-qt12'], prerequisiteOutcomeIds: ['chem10-periodic-character'], misconceptionIds: [], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 30,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [40, 41, 42, 43, 44] }
  },
  {
    id: 'chem10-bond-octet-ion', topicId: 'chem10-t3', orderIndex: 1, scope: 'core', title: 'Quy tắc octet và sự hình thành ion',
    description: 'Giải thích xu hướng nhường, nhận electron và sự hình thành cation, anion.', questionTypeIds: ['chem10-qt13'], prerequisiteOutcomeIds: ['chem10-atom-property'], misconceptionIds: [], evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 25, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [49, 50] }
  },
  {
    id: 'chem10-bond-ionic', topicId: 'chem10-t3', orderIndex: 2, scope: 'core', title: 'Liên kết ion và tinh thể ion',
    description: 'Mô tả lực hút tĩnh điện giữa ion và liên hệ cấu trúc mạng tinh thể với tính chất.', questionTypeIds: ['chem10-qt14'], prerequisiteOutcomeIds: ['chem10-bond-octet-ion'], misconceptionIds: ['chem10-mis-ionic-molecule'], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 28, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [51, 52, 53, 54, 55] }
  },
  {
    id: 'chem10-bond-covalent', topicId: 'chem10-t3', orderIndex: 3, scope: 'core', title: 'Liên kết cộng hóa trị và công thức Lewis',
    description: 'Biểu diễn cặp electron dùng chung, liên kết đơn–đôi–ba và công thức Lewis.', questionTypeIds: ['chem10-qt15'], prerequisiteOutcomeIds: ['chem10-bond-octet-ion'], misconceptionIds: [], evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 32, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [55, 56, 57, 58] }
  },
  {
    id: 'chem10-bond-polarity', topicId: 'chem10-t3', orderIndex: 4, scope: 'core', title: 'Phân cực liên kết và phân tử',
    description: 'Phân biệt liên kết phân cực với độ phân cực tổng thể của phân tử.', questionTypeIds: ['chem10-qt16'], prerequisiteOutcomeIds: ['chem10-bond-covalent', 'chem10-periodic-character'], misconceptionIds: ['chem10-mis-bond-molecule-polarity'], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 30, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [59, 60] }
  },
  {
    id: 'chem10-bond-intermolecular', topicId: 'chem10-t3', orderIndex: 5, scope: 'core', title: 'Liên kết hydrogen và van der Waals',
    description: 'Phân biệt lực giữa các phân tử với liên kết trong phân tử và giải thích tính chất vật lí.', questionTypeIds: ['chem10-qt17'], prerequisiteOutcomeIds: ['chem10-bond-polarity'], misconceptionIds: ['chem10-mis-intermolecular-bond'], evidenceTypes: ['explanation', 'application', 'data'], estimatedMinutes: 30,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [64, 65, 66, 67] }
  },
  {
    id: 'chem10-redox-oxidation-number', topicId: 'chem10-t4', orderIndex: 1, scope: 'core', title: 'Số oxi hóa',
    description: 'Xác định số oxi hóa bằng các quy tắc và kiểm tra tổng đại số.', questionTypeIds: ['chem10-qt18'], prerequisiteOutcomeIds: ['chem10-bond-octet-ion'], misconceptionIds: [], evidenceTypes: ['calculation', 'representation'], estimatedMinutes: 24, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [71, 72, 73] }
  },
  {
    id: 'chem10-redox-process', topicId: 'chem10-t4', orderIndex: 2, scope: 'core', title: 'Quá trình oxi hóa và quá trình khử',
    description: 'Liên hệ thay đổi số oxi hóa với sự nhường và nhận electron.', questionTypeIds: ['chem10-qt19'], prerequisiteOutcomeIds: ['chem10-redox-oxidation-number'], misconceptionIds: ['chem10-mis-redox-name'], evidenceTypes: ['representation', 'explanation'], estimatedMinutes: 24, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [73, 74] }
  },
  {
    id: 'chem10-redox-agents', topicId: 'chem10-t4', orderIndex: 3, scope: 'core', title: 'Chất oxi hóa và chất khử',
    description: 'Xác định vai trò chất dựa trên electron mà chất nhận hoặc nhường.', questionTypeIds: ['chem10-qt20'], prerequisiteOutcomeIds: ['chem10-redox-process'], misconceptionIds: [], evidenceTypes: ['explanation', 'application'], estimatedMinutes: 22, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [74] }
  },
  {
    id: 'chem10-redox-balance', topicId: 'chem10-t4', orderIndex: 4, scope: 'core', title: 'Cân bằng phản ứng bằng electron',
    description: 'Bảo toàn electron nhường–nhận và hoàn tất hệ số phương trình.', questionTypeIds: ['chem10-qt21'], prerequisiteOutcomeIds: ['chem10-redox-agents'], misconceptionIds: ['chem10-mis-redox-balance'], evidenceTypes: ['calculation', 'representation', 'explanation'], remediationOutcomeIds: ['chem10-bridge-equation'], estimatedMinutes: 32, isCritical: true,
    textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [74, 75, 76] }
  },
  { id: 'chem10-energy-system', topicId: 'chem10-t5', orderIndex: 1, scope: 'core', title: 'Hệ, môi trường và tỏa–thu nhiệt', description: 'Phân biệt hệ với môi trường và hướng truyền năng lượng.', questionTypeIds: ['chem10-qt22'], prerequisiteOutcomeIds: ['chem10-intro-inquiry'], misconceptionIds: [], evidenceTypes: ['recognition','explanation','application'], estimatedMinutes: 22, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [81, 82] } },
  { id: 'chem10-energy-enthalpy', topicId: 'chem10-t5', orderIndex: 2, scope: 'core', title: 'Biến thiên enthalpy và sơ đồ năng lượng', description: 'Đọc dấu ΔH và biểu diễn mức năng lượng chất đầu–sản phẩm.', questionTypeIds: ['chem10-qt23'], prerequisiteOutcomeIds: ['chem10-energy-system'], misconceptionIds: ['chem10-mis-enthalpy-sign'], evidenceTypes: ['representation','explanation'], estimatedMinutes: 25, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [82, 83, 84] } },
  { id: 'chem10-energy-formation', topicId: 'chem10-t5', orderIndex: 3, scope: 'core', title: 'Tính ΔH từ enthalpy tạo thành', description: 'Dùng hệ số phương trình và tổng enthalpy tạo thành sản phẩm–chất đầu.', questionTypeIds: ['chem10-qt24'], prerequisiteOutcomeIds: ['chem10-energy-enthalpy'], misconceptionIds: [], evidenceTypes: ['calculation','explanation'], estimatedMinutes: 30, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [84, 85, 86] } },
  { id: 'chem10-energy-bond', topicId: 'chem10-t5', orderIndex: 4, scope: 'core', title: 'Tính ΔH từ năng lượng liên kết', description: 'Phân biệt năng lượng phá và tạo liên kết để ước tính ΔH.', questionTypeIds: ['chem10-qt25'], prerequisiteOutcomeIds: ['chem10-energy-enthalpy','chem10-bond-covalent'], misconceptionIds: ['chem10-mis-bond-energy'], evidenceTypes: ['calculation','explanation'], estimatedMinutes: 32, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [86, 87, 88] } },
  { id: 'chem10-rate-average', topicId: 'chem10-t6', orderIndex: 1, scope: 'core', title: 'Tốc độ trung bình', description: 'Tính tốc độ từ biến thiên nồng độ theo thời gian.', questionTypeIds: ['chem10-qt26'], prerequisiteOutcomeIds: ['chem10-bridge-ratio'], misconceptionIds: [], evidenceTypes: ['calculation','explanation'], estimatedMinutes: 25, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [93, 94, 95] } },
  { id: 'chem10-rate-graph', topicId: 'chem10-t6', orderIndex: 2, scope: 'core', title: 'Đồ thị nồng độ–thời gian', description: 'Đọc chất đầu, sản phẩm và tốc độ qua độ dốc.', questionTypeIds: ['chem10-qt27'], prerequisiteOutcomeIds: ['chem10-rate-average'], misconceptionIds: [], evidenceTypes: ['data','explanation'], estimatedMinutes: 25, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [93, 94, 95] } },
  { id: 'chem10-rate-factors', topicId: 'chem10-t6', orderIndex: 3, scope: 'core', title: 'Va chạm và yếu tố ảnh hưởng', description: 'Giải thích nồng độ, áp suất, nhiệt độ và diện tích bề mặt.', questionTypeIds: ['chem10-qt28'], prerequisiteOutcomeIds: ['chem10-rate-graph'], misconceptionIds: ['chem10-mis-rate-yield'], evidenceTypes: ['explanation','application','experiment'], estimatedMinutes: 30, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [95, 96, 97, 98, 99] } },
  { id: 'chem10-rate-catalyst', topicId: 'chem10-t6', orderIndex: 4, scope: 'core', title: 'Xúc tác và thiết kế thí nghiệm', description: 'Giải thích năng lượng hoạt hóa và kiểm soát biến.', questionTypeIds: ['chem10-qt29'], prerequisiteOutcomeIds: ['chem10-rate-factors','chem10-intro-inquiry'], misconceptionIds: ['chem10-mis-catalyst-enthalpy'], evidenceTypes: ['explanation','experiment','data'], estimatedMinutes: 28, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [99, 100] } },
  { id: 'chem10-halogen-trends', topicId: 'chem10-t7', orderIndex: 1, scope: 'core', title: 'Vị trí và xu hướng Halogen', description: 'Liên hệ cấu hình ns²np⁵ với xu hướng nhóm.', questionTypeIds: ['chem10-qt30'], prerequisiteOutcomeIds: ['chem10-periodic-character','chem10-atom-configuration'], misconceptionIds: [], evidenceTypes: ['explanation','data'], estimatedMinutes: 26, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [104, 105, 106] } },
  { id: 'chem10-halogen-oxidizing', topicId: 'chem10-t7', orderIndex: 2, scope: 'core', title: 'Tính oxi hóa và phản ứng thế', description: 'Dự đoán phản ứng giữa halogen và halide.', questionTypeIds: ['chem10-qt31'], prerequisiteOutcomeIds: ['chem10-halogen-trends','chem10-redox-agents'], misconceptionIds: ['chem10-mis-halogen-displacement'], evidenceTypes: ['explanation','application'], estimatedMinutes: 28, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [107, 108, 109, 110] } },
  { id: 'chem10-halogen-reactions', topicId: 'chem10-t7', orderIndex: 3, scope: 'core', title: 'Phản ứng đặc trưng của Halogen', description: 'Phản ứng với hydrogen, nước và kiềm.', questionTypeIds: ['chem10-qt32'], prerequisiteOutcomeIds: ['chem10-halogen-oxidizing'], misconceptionIds: [], evidenceTypes: ['representation','explanation'], estimatedMinutes: 30, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [108, 109, 110] } },
  { id: 'chem10-halogen-hydrogen', topicId: 'chem10-t7', orderIndex: 4, scope: 'core', title: 'Hydrogen halide và acid', description: 'Giải thích HF khác biệt, xu hướng acid và tính khử.', questionTypeIds: ['chem10-qt33'], prerequisiteOutcomeIds: ['chem10-halogen-trends','chem10-bond-intermolecular'], misconceptionIds: ['chem10-mis-hf-acid'], evidenceTypes: ['explanation','application'], estimatedMinutes: 28, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [112, 113, 114] } },
  { id: 'chem10-halogen-identification', topicId: 'chem10-t7', orderIndex: 5, scope: 'core', title: 'Nhận biết ion halide', description: 'Dùng ion bạc, màu kết tủa và ứng dụng an toàn.', questionTypeIds: ['chem10-qt34'], prerequisiteOutcomeIds: ['chem10-halogen-hydrogen'], misconceptionIds: [], evidenceTypes: ['experiment','data','application'], estimatedMinutes: 28, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [115, 116, 117] } },
  { id: 'chem10-synthesis-structure', topicId: 'chem10-t8', orderIndex: 1, scope: 'core', title: 'Kết nối cấu tạo và tính chất', description: 'Suy luận xuyên suốt từ cấu hình electron đến vị trí, liên kết và tính chất.', questionTypeIds: ['chem10-qt35'], prerequisiteOutcomeIds: ['chem10-periodic-compounds','chem10-bond-intermolecular'], misconceptionIds: [], evidenceTypes: ['explanation','application'], estimatedMinutes: 35, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69] } },
  { id: 'chem10-synthesis-reaction', topicId: 'chem10-t8', orderIndex: 2, scope: 'core', title: 'Kết nối phản ứng và năng lượng', description: 'Phối hợp electron, hệ số và biến thiên enthalpy trong cùng phản ứng.', questionTypeIds: ['chem10-qt36'], prerequisiteOutcomeIds: ['chem10-redox-balance','chem10-energy-bond'], misconceptionIds: [], evidenceTypes: ['calculation','explanation'], estimatedMinutes: 35, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90] } },
  { id: 'chem10-synthesis-inquiry', topicId: 'chem10-t8', orderIndex: 3, scope: 'core', title: 'Dữ liệu và thiết kế thí nghiệm', description: 'Đọc dữ liệu, kiểm soát biến, xử lí ngoại lệ và giới hạn kết luận.', questionTypeIds: ['chem10-qt37'], prerequisiteOutcomeIds: ['chem10-rate-catalyst','chem10-halogen-identification'], misconceptionIds: [], evidenceTypes: ['data','experiment','explanation'], estimatedMinutes: 35, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117] } },
  { id: 'chem10-synthesis-final', topicId: 'chem10-t8', orderIndex: 4, scope: 'core', title: 'Đánh giá tổng hợp cuối khóa', description: 'Vận dụng toàn bộ các mạch kiến thức Hóa học 10 trong tình huống tích hợp.', questionTypeIds: ['chem10-qt38'], prerequisiteOutcomeIds: ['chem10-synthesis-structure','chem10-synthesis-reaction','chem10-synthesis-inquiry'], misconceptionIds: [], evidenceTypes: ['explanation','application','data'], estimatedMinutes: 45, isCritical: true, textbook: { bookId: 'sgk-hoa-10', bookName: 'SGK Hóa học 10', pages: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118] } }
];

export const g10ChemistryMisconceptions: LearningMisconception[] = [
  { id: 'chem10-mis-subscript-balance', outcomeId: 'chem10-bridge-equation', severity: 'critical', statement: 'Có thể thay chỉ số trong công thức để cân bằng phương trình.', correction: 'Chỉ được thay hệ số trước công thức; đổi chỉ số sẽ tạo thành chất khác.' },
  { id: 'chem10-mis-nucleus-volume', outcomeId: 'chem10-atom-particles', severity: 'critical', statement: 'Hạt nhân chiếm phần lớn thể tích nguyên tử.', correction: 'Hạt nhân chứa gần hết khối lượng nhưng chỉ chiếm phần cực nhỏ thể tích.' },
  { id: 'chem10-mis-element-neutron', outcomeId: 'chem10-atom-symbol', severity: 'critical', statement: 'Thay đổi số neutron sẽ tạo ra nguyên tố mới.', correction: 'Số proton quyết định nguyên tố; thay đổi neutron tạo đồng vị.' },
  { id: 'chem10-mis-average-mass', outcomeId: 'chem10-atom-isotope', severity: 'critical', statement: 'Nguyên tử khối trung bình là trung bình cộng không trọng số và là khối lượng của mọi nguyên tử.', correction: 'Đây là trung bình có trọng số theo độ phổ biến đồng vị, không phải khối lượng của một nguyên tử cụ thể.' },
  { id: 'chem10-mis-peak-height', outcomeId: 'chem10-atom-spectrum', severity: 'normal', statement: 'Đỉnh phổ cao hơn nghĩa là đồng vị nặng hơn.', correction: 'Vị trí trên trục khối lượng cho biết khối lượng; chiều cao/cường độ cho biết độ phổ biến tương đối.' },
  { id: 'chem10-mis-orbit-orbital', outcomeId: 'chem10-atom-model', severity: 'critical', statement: 'Orbital là đường tròn electron chuyển động quanh hạt nhân.', correction: 'Orbital là vùng không gian có xác suất tìm thấy electron lớn, không phải quỹ đạo xác định.' }
  ,{ id: 'chem10-mis-radius-arrow', outcomeId: 'chem10-periodic-radius', severity: 'critical', statement: 'Chỉ cần thuộc chiều mũi tên bán kính mà không xét lớp electron và lực hút hạt nhân.', correction: 'Trong chu kì phải xét lực hút hạt nhân tăng; trong nhóm phải xét số lớp electron và hiệu ứng che chắn tăng.' }
  ,{ id: 'chem10-mis-ionic-molecule', outcomeId: 'chem10-bond-ionic', severity: 'critical', statement: 'NaCl tồn tại dưới dạng từng phân tử NaCl riêng biệt trong tinh thể.', correction: 'Tinh thể ion là mạng lưới ion mở rộng; NaCl biểu diễn tỉ lệ tối giản giữa Na+ và Cl−.' }
  ,{ id: 'chem10-mis-bond-molecule-polarity', outcomeId: 'chem10-bond-polarity', severity: 'critical', statement: 'Có liên kết phân cực thì phân tử chắc chắn phân cực.', correction: 'Độ phân cực phân tử còn phụ thuộc cách các moment liên kết tổng hợp hoặc triệt tiêu.' }
  ,{ id: 'chem10-mis-intermolecular-bond', outcomeId: 'chem10-bond-intermolecular', severity: 'critical', statement: 'Liên kết hydrogen là liên kết cộng hóa trị H–O bên trong phân tử nước.', correction: 'Liên kết O–H là cộng hóa trị; liên kết hydrogen chủ yếu là tương tác giữa các phân tử hoặc các vùng khác nhau.' }
  ,{ id: 'chem10-mis-redox-name', outcomeId: 'chem10-redox-process', severity: 'critical', statement: 'Oxi hóa luôn là phản ứng trực tiếp với oxygen.', correction: 'Bản chất oxi hóa là nhường electron và số oxi hóa tăng; không bắt buộc có oxygen.' }
  ,{ id: 'chem10-mis-redox-balance', outcomeId: 'chem10-redox-balance', severity: 'critical', statement: 'Có thể thay chỉ số trong công thức để bảo toàn electron.', correction: 'Chỉ đặt hệ số trước chất; thay chỉ số làm biến đổi chất.' }
  ,{ id: 'chem10-mis-enthalpy-sign', outcomeId: 'chem10-energy-enthalpy', severity: 'critical', statement: 'ΔH âm nghĩa là hệ hấp thụ nhiệt vì có dấu âm.', correction: 'ΔH âm nghĩa là enthalpy hệ giảm và năng lượng được truyền ra môi trường.' }
  ,{ id: 'chem10-mis-bond-energy', outcomeId: 'chem10-energy-bond', severity: 'critical', statement: 'Phá liên kết giải phóng năng lượng.', correction: 'Phá liên kết luôn cần hấp thụ năng lượng; tạo liên kết giải phóng năng lượng.' }
  ,{ id: 'chem10-mis-rate-yield', outcomeId: 'chem10-rate-factors', severity: 'critical', statement: 'Phản ứng nhanh hơn chắc chắn tạo nhiều sản phẩm cuối cùng hơn.', correction: 'Tốc độ mô tả thời gian biến đổi; lượng cuối còn phụ thuộc lượng chất và cân bằng.' }
  ,{ id: 'chem10-mis-catalyst-enthalpy', outcomeId: 'chem10-rate-catalyst', severity: 'critical', statement: 'Xúc tác làm thay đổi ΔH.', correction: 'Xúc tác giảm năng lượng hoạt hóa nhưng không đổi trạng thái đầu–cuối và ΔH.' }
  ,{ id: 'chem10-mis-halogen-displacement', outcomeId: 'chem10-halogen-oxidizing', severity: 'critical', statement: 'Halide yếu hơn đẩy được halogen mạnh hơn.', correction: 'Halogen oxi hóa mạnh hơn mới oxi hóa được ion halide yếu hơn.' }
  ,{ id: 'chem10-mis-hf-acid', outcomeId: 'chem10-halogen-hydrogen', severity: 'critical', statement: 'HF mạnh nhất vì F âm điện nhất.', correction: 'Liên kết H–F rất bền nên HF là acid yếu trong nước so với HCl, HBr, HI.' }
];
