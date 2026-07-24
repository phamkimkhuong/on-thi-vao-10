import type { Question } from '@/types';

export const m1TheoryQuestions: Question[] = [
  {
    id: "chem11-theory-m1-q01",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt01",
    content: "Phản ứng thuận nghịch được nhận biết đúng nhất bởi đặc điểm nào?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Phản ứng chỉ xảy ra đến khi hết chất giới hạn.",
      "B. Phản ứng luôn có hiệu suất 100%.",
      "C. Phản ứng chỉ đổi chiều khi thêm xúc tác.",
      "D. Trong cùng điều kiện, phản ứng có thể diễn ra theo cả chiều thuận và chiều nghịch."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-reversible"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "recognition",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m1-v01"
  },
  {
    id: "chem11-theory-m1-q02",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt02",
    content: "Ở trạng thái cân bằng hóa học, phát biểu nào đúng?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch và cả hai vẫn khác 0.",
      "B. Phản ứng thuận và nghịch đều dừng hẳn.",
      "C. Nồng độ mọi chất trong hệ bằng nhau.",
      "D. Số mol chất phản ứng luôn bằng số mol sản phẩm."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-dynamic"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m1-v02"
  },
  {
    id: "chem11-theory-m1-q03",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt03",
    content: "Trên đồ thị nồng độ–thời gian của một phản ứng thuận nghịch, dấu hiệu đáng tin cậy nhất cho thấy hệ đã đạt cân bằng là gì?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Mọi đường nồng độ cắt nhau tại một điểm.",
      "B. Nồng độ mỗi chất trở nên không đổi theo thời gian, dù các giá trị không nhất thiết bằng nhau.",
      "C. Nồng độ chất phản ứng giảm về 0.",
      "D. Nồng độ sản phẩm bằng đúng nồng độ chất phản ứng."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-data"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m1-v03"
  },
  {
    id: "chem11-theory-m1-q04",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt03",
    content: "Với cân bằng CaCO₃(s) ⇌ CaO(s) + CO₂(g), biểu thức Kc phù hợp là gì?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Kc = [CaO][CO₂]/[CaCO₃].",
      "B. Kc = [CaCO₃]/([CaO][CO₂]).",
      "C. Kc = [CO₂].",
      "D. Kc = 1/[CO₂]."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-kc-expression"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m1-v04"
  },
  {
    id: "chem11-theory-m1-q05",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt03",
    content: "Ở cùng nhiệt độ, một phản ứng có Kc rất lớn. Kết luận nào hợp lí nhất?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Tốc độ phản ứng thuận luôn lớn hơn tốc độ nghịch ở cân bằng.",
      "B. Phản ứng đạt cân bằng nhanh hơn mọi phản ứng có Kc nhỏ.",
      "C. Chất xúc tác đã làm tăng giá trị Kc.",
      "D. Trạng thái cân bằng thiên về phía sản phẩm, nhưng không có nghĩa phản ứng thuận hoàn toàn."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-kc-meaning"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m1-v01"
  },
  {
    id: "chem11-theory-m1-q06",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt04",
    content: "Xét N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Khi thêm H₂ ở nhiệt độ không đổi, hệ chuyển dịch thế nào?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Theo chiều tạo NH₃ để làm giảm tác động tăng H₂.",
      "B. Theo chiều phân hủy NH₃.",
      "C. Không chuyển dịch vì Kc không đổi.",
      "D. Cân bằng dừng lại hoàn toàn."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-shift-concentration"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m1-v02"
  },
  {
    id: "chem11-theory-m1-q07",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt04",
    content: "Tăng áp suất bằng cách giảm thể tích chỉ làm chuyển dịch cân bằng khí khi nào?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. Khi phương trình có ít nhất một chất khí.",
      "B. Khi tổng số mol khí ở hai vế khác nhau.",
      "C. Khi có chất xúc tác.",
      "D. Khi tất cả hệ số cân bằng đều bằng 1."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-shift-pressure"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m1-v03"
  },
  {
    id: "chem11-theory-m1-q08",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt05",
    content: "Thêm chất xúc tác vào một hệ đang ở cân bằng gây tác động nào?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Làm tăng Kc và chuyển dịch sang phải.",
      "B. Chỉ tăng tốc độ phản ứng thuận.",
      "C. Làm tăng tốc độ cả hai chiều tương ứng nhưng không làm chuyển dịch cân bằng.",
      "D. Làm giảm nồng độ sản phẩm ở cân bằng."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-eq-rate-vs-position"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m1-v04"
  },
  {
    id: "chem11-theory-m1-q09",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt07",
    content: "Phát biểu nào phân biệt đúng chất điện li mạnh và chất điện li yếu?",
    responseType: "single_choice",
    difficulty: "easy",
    sourceType: "mock_exam",
    options: [
      "A. Dung dịch điện li mạnh luôn có nồng độ lớn hơn.",
      "B. Điện li yếu không tạo ion.",
      "C. Mọi acid đều là chất điện li mạnh.",
      "D. Chất điện li mạnh phân li gần như hoàn toàn; chất điện li yếu chỉ phân li một phần trong nước."
    ],
    correctAnswer: "D",
    acceptedAnswers: [
      "D",
      "d"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-aq-strong-weak"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "understanding",
    estimatedSeconds: 50,
    variantGroupId: "chem11-theory-m1-v01"
  },
  {
    id: "chem11-theory-m1-q10",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt08",
    content: "Trong phản ứng NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, cặp acid–base liên hợp nào đúng?",
    responseType: "single_choice",
    difficulty: "medium",
    sourceType: "mock_exam",
    options: [
      "A. NH₄⁺/NH₃.",
      "B. NH₃/OH⁻.",
      "C. H₂O/NH₄⁺.",
      "D. NH₄⁺/OH⁻."
    ],
    correctAnswer: "A",
    acceptedAnswers: [
      "A",
      "a"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-aq-conjugate-pair"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 70,
    variantGroupId: "chem11-theory-m1-v02"
  },
  {
    id: "chem11-theory-m1-q11",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt10",
    content: "Một dung dịch có pH = 3. Nhận xét nào đúng?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Dung dịch có [OH⁻] = 10⁻³ M.",
      "B. Dung dịch có môi trường acid và làm quỳ tím hóa đỏ.",
      "C. Dung dịch trung tính vì pH nhỏ hơn 7 không đáng kể.",
      "D. Pha loãng bằng nước luôn làm pH giảm."
    ],
    correctAnswer: "B",
    acceptedAnswers: [
      "B",
      "b"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-aq-ph-context",
      "chem11-aq-indicator"
    ],
    competency: "chemical_cognition",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m1-v03"
  },
  {
    id: "chem11-theory-m1-q12",
    subjectId: "chemistry",
    topicId: "chem11-t1",
    questionTypeId: "chem11-qt14",
    content: "Khi chuẩn độ acid mạnh bằng base mạnh, vì sao phải thêm dung dịch chuẩn từ burette từ từ gần điểm tương đương?",
    responseType: "single_choice",
    difficulty: "hard",
    sourceType: "mock_exam",
    options: [
      "A. Vì phản ứng trung hòa chỉ xảy ra khi nhỏ giọt.",
      "B. Vì burette không đo được thể tích lớn.",
      "C. Vì một lượng rất nhỏ dung dịch chuẩn có thể làm pH thay đổi mạnh và gây vượt điểm tương đương.",
      "D. Vì chất chỉ thị làm phản ứng chậm lại."
    ],
    correctAnswer: "C",
    acceptedAnswers: [
      "C",
      "c"
    ],
    validatorType: "choice",
    points: 1,
    outcomeIds: [
      "chem11-aq-ph-simple-solution"
    ],
    competency: "chemical_inquiry",
    cognitiveLevel: "application",
    estimatedSeconds: 90,
    variantGroupId: "chem11-theory-m1-v04"
  }
];
