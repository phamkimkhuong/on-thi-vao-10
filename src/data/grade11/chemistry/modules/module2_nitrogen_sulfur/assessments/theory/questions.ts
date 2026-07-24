import type { Question } from '@/types';

export const m2TheoryQuestions: Question[] = [
  {
    id: "chem11-theory-m2-q01",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt15",
    content: "Vì sao N₂ tương đối kém hoạt động ở nhiệt độ thường?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Nitrogen không có electron hóa trị.",
      "B. N₂ là phân tử ion.",
      "C. Phân tử có liên kết ba N≡N bền, cần năng lượng lớn để phá vỡ.",
      "D. N₂ không va chạm với chất khác."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-n2-bond-inertness"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m2-v01"
  },
  {
    id: "chem11-theory-m2-q02",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt16",
    content: "Hình học phân tử và tính phân cực của NH₃ được mô tả đúng là gì?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Tam giác phẳng và không phân cực.",
      "B. Thẳng và phân cực.",
      "C. Tứ diện đều và không phân cực.",
      "D. Chóp tam giác và phân cực."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-nh3-structure"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "recognition",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m2-v02"
  },
  {
    id: "chem11-theory-m2-q03",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt16",
    content: "NH₃ tan rất nhiều trong nước chủ yếu do đâu?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. NH₃ phân cực, tạo liên kết hydrogen với nước và một phần phản ứng tạo NH₄⁺, OH⁻.",
      "B. NH₃ có khối lượng mol lớn.",
      "C. NH₃ là chất rắn ion.",
      "D. NH₃ không có cặp electron tự do."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-nh3-solubility"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m2-v03"
  },
  {
    id: "chem11-theory-m2-q04",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt17",
    content: "Trong phản ứng NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, NH₃ đóng vai trò gì theo Brønsted–Lowry?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Acid vì nhường proton.",
      "B. Base vì nhận proton từ H₂O.",
      "C. Chất oxi hóa vì nhận electron.",
      "D. Chất xúc tác vì không biến đổi."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-nh3-base"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m2-v04"
  },
  {
    id: "chem11-theory-m2-q05",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt19",
    content: "Thuốc thử và hiện tượng thích hợp để nhận biết ion NH₄⁺ là gì?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Thêm BaCl₂, xuất hiện kết tủa trắng.",
      "B. Thêm AgNO₃, xuất hiện kết tủa vàng.",
      "C. Thêm kiềm, đun nhẹ; khí thoát ra làm quỳ tím ẩm hóa xanh.",
      "D. Thêm acid mạnh, thoát khí làm đục nước vôi."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-ammonium-identification"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m2-v01"
  },
  {
    id: "chem11-theory-m2-q06",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt20",
    content: "NO₂ góp phần gây mưa acid theo cơ chế tổng quát nào?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. NO₂ tạo trực tiếp kết tủa sulfate.",
      "B. NO₂ làm nước mưa mất toàn bộ oxygen.",
      "C. NO₂ là base mạnh nên làm tăng pH.",
      "D. NO₂ bị chuyển hóa trong khí quyển tạo các acid chứa nitrogen, làm giảm pH nước mưa."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-nox-acid-rain"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m2-v02"
  },
  {
    id: "chem11-theory-m2-q07",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt21",
    content: "Khi Cu phản ứng với HNO₃, vì sao thường không thu được H₂ như với acid không có tính oxi hóa mạnh?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Ion nitrate trong môi trường acid oxi hóa Cu và bị khử thành oxide nitrogen.",
      "B. Cu đứng sau H nên không phản ứng với mọi acid.",
      "C. HNO₃ không chứa hydrogen.",
      "D. Cu chỉ phản ứng với base."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-hno3-oxidizing"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m2-v03"
  },
  {
    id: "chem11-theory-m2-q08",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt22",
    content: "Hậu quả trực tiếp thường gặp của phú dưỡng hóa là gì?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Nước trở nên tinh khiết hơn.",
      "B. Tảo phát triển mạnh, sau đó sự phân hủy làm giảm oxygen hòa tan và gây chết sinh vật thủy sinh.",
      "C. Mọi ion nitrate biến mất ngay.",
      "D. pH luôn đúng bằng 7."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-eutrophication-effects"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m2-v04"
  },
  {
    id: "chem11-theory-m2-q09",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt24",
    content: "Vì sao sulfur có thể vừa thể hiện tính oxi hóa vừa thể hiện tính khử?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Sulfur không thay đổi số oxi hóa.",
      "B. Sulfur chỉ tồn tại ở số oxi hóa +6.",
      "C. Sulfur ở số oxi hóa 0 có thể nhận electron xuống −2 hoặc nhường electron lên số oxi hóa dương.",
      "D. Mọi phản ứng của sulfur đều là acid–base."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-sulfur-oxidizing",
      "chem11-ns-sulfur-reducing"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m2-v01"
  },
  {
    id: "chem11-theory-m2-q10",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt26",
    content: "Phát biểu nào đúng về tính oxi hóa–khử của SO₂?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. SO₂ chỉ có tính acid, không tham gia redox.",
      "B. SO₂ chỉ là chất oxi hóa.",
      "C. SO₂ chỉ là chất khử trong mọi phản ứng.",
      "D. S(+4) là mức trung gian nên SO₂ có thể bị oxi hóa lên +6 hoặc bị khử xuống mức thấp hơn."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-so2-redox"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m2-v02"
  },
  {
    id: "chem11-theory-m2-q11",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt30",
    content: "Quy tắc an toàn đúng khi pha loãng H₂SO₄ đặc là gì?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Rót từ từ acid vào nước, khuấy và làm mát; không rót nước vào acid.",
      "B. Rót nhanh nước vào acid để giảm nồng độ.",
      "C. Đun nóng acid trước khi pha.",
      "D. Có thể pha trong bình kín hoàn toàn."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-h2so4-dilution-first-aid"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m2-v03"
  },
  {
    id: "chem11-theory-m2-q12",
    subjectId: "chemistry",
    topicId: "chem11-t2",
    questionTypeId: "chem11-qt32",
    content: "Để nhận biết ion SO₄²⁻ trong dung dịch, cách làm phù hợp là gì?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Thêm quỳ tím và quan sát màu xanh.",
      "B. Acid hóa mẫu rồi thêm ion Ba²⁺, thu kết tủa trắng BaSO₄ bền trong acid.",
      "C. Thêm NaOH rồi đun để thu NH₃.",
      "D. Thêm AgNO₃ và kết luận từ mọi kết tủa trắng."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-ns-sulfate-identification"
    ],
    competency: "chemical_inquiry",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m2-v04"
  }
];
