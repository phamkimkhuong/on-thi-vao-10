import type { Question } from '@/types';

export const m6TheoryQuestions: Question[] = [
  {
    id: "chem11-theory-m6-q01",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt75",
    content: "Nhóm carbonyl được biểu diễn như thế nào?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Nhóm –COOH.",
      "B. Nhóm –C≡N.",
      "C. Nhóm >C=O gồm carbon liên kết đôi với oxygen.",
      "D. Nhóm –OH không gắn carbonyl."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-carbonyl-concept"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "recognition",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m6-v01"
  },
  {
    id: "chem11-theory-m6-q02",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt75",
    content: "Phân biệt aldehyde và ketone dựa trực tiếp vào cấu tạo quanh carbonyl carbon như thế nào?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Aldehyde luôn có hai oxygen.",
      "B. Ketone luôn nằm ở đầu mạch.",
      "C. Aldehyde không có liên kết C=O.",
      "D. Aldehyde có ít nhất một H gắn carbonyl carbon; ketone có hai gốc carbon."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-aldehyde-concept",
      "chem11-car-ketone-concept"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m6-v02"
  },
  {
    id: "chem11-theory-m6-q03",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt76",
    content: "Mô tả nào đúng về liên kết C=O?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Gồm một liên kết σ và một liên kết π, phân cực Cδ+–Oδ−.",
      "B. Gồm hai liên kết σ không phân cực.",
      "C. Là liên kết ion hoàn toàn.",
      "D. Carbonyl carbon có hình học tứ diện bắt buộc."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-carbonyl-bond-geometry"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m6-v03"
  },
  {
    id: "chem11-theory-m6-q04",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt77",
    content: "Khử aldehyde và ketone bằng tác nhân khử thích hợp cho sản phẩm tương ứng nào?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Cả hai đều → alcohol bậc III.",
      "B. Aldehyde → alcohol bậc I; ketone → alcohol bậc II.",
      "C. Aldehyde → ketone; ketone → acid.",
      "D. Cả hai đều mất oxygen tạo alkane ngay."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-reduction-aldehyde",
      "chem11-car-reduction-ketone"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m6-v04"
  },
  {
    id: "chem11-theory-m6-q05",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt78",
    content: "Thuốc thử Tollens thường dùng để phân biệt cặp chất nào?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Hai alkane liên tiếp.",
      "B. Ethanol và nước chỉ dựa vào màu.",
      "C. Aldehyde và ketone đơn giản vì aldehyde cho bạc kim loại còn ketone thường âm tính.",
      "D. Hai muối chloride."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-tollens-oxidation"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m6-v01"
  },
  {
    id: "chem11-theory-m6-q06",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt79",
    content: "Dấu hiệu dương tính của phản ứng iodoform là gì?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Khí không màu làm đục nước vôi.",
      "B. Kết tủa đỏ gạch Cu₂O.",
      "C. Gương bạc trên thành ống.",
      "D. Kết tủa vàng CHI₃."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-iodoform-reaction"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "recognition",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m6-v02"
  },
  {
    id: "chem11-theory-m6-q07",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt80",
    content: "Biện pháp an toàn phù hợp khi dùng acetone là gì?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Làm nơi thông thoáng, tránh nguồn lửa và đậy kín vì acetone dễ bay hơi, dễ cháy.",
      "B. Đun bằng ngọn lửa trần để bay hơi nhanh.",
      "C. Ngửi sát miệng chai để kiểm tra.",
      "D. Đổ lượng dư trực tiếp xuống cống."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-car-acetone-applications-safety"
    ],
    competency: "chemical_application",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m6-v03"
  },
  {
    id: "chem11-theory-m6-q08",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt81",
    content: "Điều kiện để công thức chung CₙH₂ₙO₂ áp dụng cho carboxylic acid là gì?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Mọi carboxylic acid.",
      "B. Acid no, đơn chức, mạch hở.",
      "C. Chỉ acid thơm đa chức.",
      "D. Mọi hợp chất chứa oxygen."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-cax-concept",
      "chem11-cax-formula-classification"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m6-v04"
  },
  {
    id: "chem11-theory-m6-q09",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt82",
    content: "Vì sao carboxylic acid thường có nhiệt độ sôi cao so với chất có khối lượng mol tương đương?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Acid là tinh thể ion trong mọi trạng thái.",
      "B. Nhóm –COOH không phân cực.",
      "C. Các phân tử tạo liên kết hydrogen mạnh, thường hình thành dimer.",
      "D. Acid không có lực tương tác phân tử."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-cax-hydrogen-bond-dimer",
      "chem11-cax-physical-state-boiling"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m6-v01"
  },
  {
    id: "chem11-theory-m6-q10",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt83",
    content: "Đối với dung dịch CH₃COOH 0,10 M, phát biểu nào hợp lí?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. [H⁺] đúng bằng 0,10 M như acid mạnh một nấc.",
      "B. Dung dịch không có ion H⁺.",
      "C. Acetic acid phân li tạo OH⁻ là chủ yếu.",
      "D. [H⁺] nhỏ hơn 0,10 M vì acetic acid phân li không hoàn toàn."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-cax-weak-acid-dissociation"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m6-v02"
  },
  {
    id: "chem11-theory-m6-q11",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt84",
    content: "Phản ứng ester hóa giữa carboxylic acid và alcohol có đặc điểm nào?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Là phản ứng thuận nghịch tạo ester và nước, thường cần acid xúc tác và đun nóng.",
      "B. Luôn xảy ra hoàn toàn không cần xúc tác.",
      "C. Tạo aldehyde và hydrogen.",
      "D. Là phản ứng oxi hóa–khử bắt buộc."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-cax-esterification-equation"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m6-v03"
  },
  {
    id: "chem11-theory-m6-q12",
    subjectId: "chemistry",
    topicId: "chem11-t6",
    questionTypeId: "chem11-qt85",
    content: "Hiện tượng khi cho acetic acid vào NaHCO₃ là gì?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Tạo gương bạc.",
      "B. Sủi bọt CO₂ do tạo acetate, nước và carbon dioxide.",
      "C. Kết tủa vàng iodoform.",
      "D. Không phản ứng vì acetic acid yếu."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-cax-carbonate-reaction"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m6-v04"
  }
];
