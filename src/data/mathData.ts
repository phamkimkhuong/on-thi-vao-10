import { Topic, QuestionType, Question, Solution } from '../types';

export const mathTopics: Topic[] = [
  { id: 'math-t1', subjectId: 'math', name: 'Đại số nền tảng & Căn thức', slug: 'dai-so-va-can-thuc', orderIndex: 1, tier: 1 },
  { id: 'math-t2', subjectId: 'math', name: 'Phương trình & Hệ thức Vi-ét', slug: 'phuong-trinh-va-vi-et', orderIndex: 2, tier: 1 },
  { id: 'math-t3', subjectId: 'math', name: 'Hệ phương trình & Toán thực tế', slug: 'he-phuong-trinh-toan-thuc-te', orderIndex: 3, tier: 2 },
  { id: 'math-t4', subjectId: 'math', name: 'Hàm số & Đồ thị', slug: 'ham-so-va-do-thi', orderIndex: 4, tier: 2 },
  { id: 'math-t5', subjectId: 'math', name: 'Hình học đường tròn', slug: 'hinh-hoc-duong-tron', orderIndex: 5, tier: 3 }
];

export const mathQuestionTypes: QuestionType[] = [
  {
    id: 'math-qt1',
    topicId: 'math-t1',
    name: 'Rút gọn biểu thức chứa căn',
    slug: 'rut-gon-bieu-thuc-chua-can',
    description: 'Dạng toán đại số thường xuất hiện ở phần đầu đề thi vào 10. Đề thường cho biểu thức chứa căn bậc hai và phân thức, yêu cầu rút gọn rồi xử lý câu phụ như tính giá trị, tìm x hoặc so sánh.',
    exampleQuestionId: 'math-q1',
    recognitionSigns: [
      'Có √x hoặc biểu thức chứa căn bậc hai.',
      'Có nhiều phân thức cần quy đồng.',
      'Mẫu thức thường có dạng √x - 1, √x + 1, x - 1, x - √x hoặc x + √x.',
      'Đề yêu cầu rút gọn biểu thức A, B, P hoặc Q.',
      'Sau phần rút gọn thường có câu phụ như tính giá trị, tìm x hoặc tìm điều kiện của x.'
    ],
    solvingSteps: [
      'Ghi điều kiện xác định trước khi biến đổi.',
      'Phân tích các mẫu thức thành nhân tử để tìm mẫu thức chung.',
      'Rút gọn từng cụm riêng nếu biểu thức có nhiều ngoặc.',
      'Quy đồng, thu gọn tử số và chỉ rút gọn khi tử và mẫu ở dạng tích.',
      'Nếu có phép chia, đổi thành nhân với phân thức nghịch đảo.',
      'Dùng biểu thức đã rút gọn để làm câu phụ.',
      'Đối chiếu nghiệm hoặc đáp án cuối với điều kiện xác định.'
    ],
    commonMistakes: [
      'Quên điều kiện xác định.',
      'Phân tích sai x - √x thành x(√x - 1).',
      'Phân tích sai x - 1 hoặc quên dùng x - 1 = (√x - 1)(√x + 1).',
      'Chia phân thức nhưng quên nhân với phân thức nghịch đảo.',
      'Rút gọn khi tử và mẫu chưa ở dạng tích.',
      'Tìm được nghiệm nhưng không đối chiếu điều kiện.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt2',
    topicId: 'math-t2',
    name: 'Biện luận nghiệm phương trình bậc hai & Hệ thức Vi-ét',
    slug: 'bien-luan-nghiem-va-vi-et',
    description: 'Dạng toán yêu cầu tìm tham số để phương trình bậc hai có nghiệm thỏa mãn điều kiện về tổng, tích hoặc biểu thức liên quan đến hai nghiệm.',
    recognitionSigns: [
      'Xuất hiện phương trình bậc hai có tham số m.',
      'Đề nhắc đến hai nghiệm x1, x2.',
      'Có yêu cầu dùng tổng nghiệm, tích nghiệm hoặc biểu thức đối xứng của nghiệm.'
    ],
    solvingSteps: [
      'Xác định hệ số a, b, c.',
      'Đặt điều kiện có nghiệm hoặc có hai nghiệm phân biệt.',
      'Áp dụng hệ thức Vi-ét để biểu diễn x1 + x2 và x1x2.',
      'Biến đổi điều kiện đề bài theo tổng và tích nghiệm.',
      'Giải tìm tham số và đối chiếu điều kiện ban đầu.'
    ],
    commonMistakes: [
      'Quên điều kiện có nghiệm trước khi dùng Vi-ét.',
      'Biến đổi sai x1^2 + x2^2.',
      'Không đối chiếu tham số tìm được với điều kiện Delta.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt3',
    topicId: 'math-t3',
    name: 'Giải hệ phương trình bậc nhất hai ẩn',
    slug: 'giai-he-phuong-trinh',
    description: 'Dạng toán yêu cầu giải hệ hai phương trình hai ẩn bằng phương pháp thế, cộng đại số hoặc đặt ẩn phụ.',
    recognitionSigns: [
      'Đề cho hệ gồm hai phương trình chứa hai ẩn x và y.',
      'Có thể giải bằng thế, cộng đại số hoặc đặt ẩn phụ.'
    ],
    solvingSteps: [
      'Đặt điều kiện xác định nếu hệ có mẫu hoặc căn.',
      'Chọn phương pháp giải phù hợp.',
      'Khử một ẩn để tìm ẩn còn lại.',
      'Thay lại để tìm nghiệm đầy đủ.',
      'Đối chiếu điều kiện và kết luận nghiệm.'
    ],
    commonMistakes: [
      'Đổi dấu sai khi cộng hoặc trừ hai phương trình.',
      'Tìm được x nhưng quên tìm y.',
      'Kết luận sai thứ tự x, y.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'math-qt4',
    topicId: 'math-t3',
    name: 'Lập hệ phương trình từ bài toán thực tế',
    slug: 'lap-he-phuong-trinh-thuc-te',
    description: 'Dạng toán yêu cầu chuyển dữ kiện đời sống như giá tiền, phần trăm, năng suất hoặc chuyển động thành hệ phương trình.',
    recognitionSigns: [
      'Đề mô tả tình huống thực tế.',
      'Có hai đại lượng chưa biết cần tìm.',
      'Có hai mối quan hệ độc lập để lập hai phương trình.'
    ],
    solvingSteps: [
      'Xác định đại lượng cần tìm và đặt ẩn.',
      'Ghi điều kiện và đơn vị cho ẩn.',
      'Lập phương trình thứ nhất từ dữ kiện đầu tiên.',
      'Lập phương trình thứ hai từ dữ kiện còn lại.',
      'Giải hệ và đối chiếu điều kiện thực tế.',
      'Trả lời đúng câu hỏi và đúng đơn vị.'
    ],
    commonMistakes: [
      'Quên đặt điều kiện và đơn vị cho ẩn.',
      'Lập sai phương trình phần trăm giảm giá.',
      'Giải đúng hệ nhưng trả lời sai yêu cầu đề bài.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt5',
    topicId: 'math-t4',
    name: 'Sự tương giao giữa Parabol & Đường thẳng',
    slug: 'tuong-giao-parabol-va-duong-thang',
    description: 'Dạng toán nghiên cứu số giao điểm và tọa độ giao điểm giữa parabol và đường thẳng.',
    recognitionSigns: [
      'Cho parabol y = ax^2 và đường thẳng y = mx + n.',
      'Yêu cầu xét số giao điểm hoặc tìm tham số để tiếp xúc/cắt nhau.',
      'Có thể cần dùng Delta và Vi-ét cho phương trình hoành độ giao điểm.'
    ],
    solvingSteps: [
      'Lập phương trình hoành độ giao điểm.',
      'Xét số nghiệm bằng Delta.',
      'Dùng Vi-ét nếu đề hỏi điều kiện liên quan đến tọa độ giao điểm.',
      'Kết luận theo yêu cầu đề bài.'
    ],
    commonMistakes: [
      'Lập sai phương trình hoành độ giao điểm.',
      'Nhầm điều kiện Delta cho cắt và tiếp xúc.',
      'Không kiểm tra điều kiện tồn tại giao điểm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt6',
    topicId: 'math-t5',
    name: 'Chứng minh tứ giác nội tiếp đường tròn',
    slug: 'tu-giac-noi-tiep',
    description: 'Dạng hình học chứng minh bốn điểm cùng nằm trên một đường tròn bằng các dấu hiệu góc.',
    recognitionSigns: [
      'Đề yêu cầu chứng minh tứ giác nội tiếp.',
      'Có góc vuông, đường cao, tiếp tuyến hoặc góc cùng nhìn một cạnh.',
      'Cần chỉ ra tổng hai góc đối bằng 180 độ hoặc hai góc cùng nhìn một cạnh bằng nhau.'
    ],
    solvingSteps: [
      'Xác định tứ giác cần chứng minh.',
      'Chọn dấu hiệu nội tiếp phù hợp.',
      'Chỉ rõ các góc bằng nhau hoặc tổng hai góc đối bằng 180 độ.',
      'Kết luận tứ giác nội tiếp.'
    ],
    commonMistakes: [
      'Không nêu lý do xuất hiện góc vuông.',
      'Dùng sai dấu hiệu tứ giác nội tiếp.',
      'Viết sai thứ tự đỉnh của tứ giác.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  }
];

export const mathQuestions: Question[] = [
  {
    id: 'math-q1',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: `Cho biểu thức P = ((√x)/(√x - 1) - 1/(x - √x)) ÷ (1/(√x + 1) + 2/(x - 1)) với x > 0, x ≠ 1.

1. Rút gọn biểu thức P.

2. Tìm x để P = -3/2.`,
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'P = (x - 1)/√x; x = 1/4',
    acceptedAnswers: ['x=1/4', '1/4', '0.25', 'x = 0.25'],
    validatorType: 'number',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'P', label: 'P =', valueType: 'expression', placeholder: '(x - 1)/sqrt(x)', hint: 'Nhập biểu thức P đã rút gọn.' },
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '1/4', hint: 'Nhập giá trị x ở câu phụ.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      P: '(x - 1)/sqrt(x)',
      x: '1/4'
    },
    acceptedFinalAnswers: [
      { P: '(x-1)/√x', x: '1/4' },
      { P: '(x - 1) / sqrt(x)', x: '0.25' }
    ]
  },
  {
    id: 'math-q2',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: `Cho phương trình bậc hai x² - 2(m + 1)x + m² + 4 = 0.

1. Tìm m để phương trình có hai nghiệm phân biệt x1, x2.

2. Tìm m để hai nghiệm thỏa mãn x1² + x2² - x1x2 = 7.`,
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'm = -4 + √31',
    acceptedAnswers: ['m=-4+√31', '-4+√31', '-4 + sqrt(31)'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm =', valueType: 'expression', placeholder: '-4 + √31' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: { m: '-4 + √31' },
    acceptedFinalAnswers: [
      { m: '-4 + sqrt(31)' }
    ]
  },
  {
    id: 'math-q3',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một cửa hàng bán tivi và tủ lạnh. Tổng giá niêm yết ban đầu của một chiếc tivi và một chiếc tủ lạnh là 25 triệu đồng. Nhân dịp lễ, cửa hàng giảm giá 10% cho tivi và giảm giá 20% cho tủ lạnh, do đó khách hàng chỉ phải trả 21 triệu đồng để mua cả hai mặt hàng. Hỏi giá niêm yết ban đầu của mỗi mặt hàng là bao nhiêu?',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Tivi: 10 triệu đồng; Tủ lạnh: 15 triệu đồng',
    acceptedAnswers: ['Tivi 10, Tủ lạnh 15', '10 15', 'Tivi: 10 triệu, Tủ lạnh: 15 triệu'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'tivi', label: 'Tivi =', valueType: 'number', placeholder: '10' },
        { key: 'tuLanh', label: 'Tủ lạnh =', valueType: 'number', placeholder: '15' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      tivi: '10',
      tuLanh: '15'
    }
  },
  {
    id: 'math-q4',
    subjectId: 'math',
    topicId: 'math-t5',
    questionTypeId: 'math-qt6',
    content: 'Cho đường tròn (O, R) đường kính AB. Lấy điểm C trên đường tròn sao cho AC < BC. Kẻ đường cao CH của tam giác ABC. Gọi I là trung điểm của CH. Đường thẳng qua A vuông góc với AB cắt tia BI tại K. Chứng minh tứ giác AHCK là tứ giác nội tiếp.',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Chứng minh tứ giác AHCK nội tiếp.',
    validatorType: 'manual',
    answerSchema: {
      type: 'proof-upload',
      fields: [],
      proofImageRequired: true,
      autoCheckMode: 'manual'
    }
  },
  {
    id: 'math-q5',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: `Cho biểu thức A = (√x + 1)/(√x - 1) - 2/(x - 1) với x ≥ 0, x ≠ 1.

1. Rút gọn biểu thức A.

2. Tính giá trị của A khi x = 4.`,
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A = (x + 2√x - 1)/(x - 1); A(4) = 7/3',
    acceptedAnswers: ['7/3', 'A=7/3'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'expression', placeholder: '(x + 2sqrt(x) - 1)/(x - 1)' },
        { key: 'valueAt4', label: 'A khi x = 4:', valueType: 'fraction', placeholder: '7/3' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '(x + 2sqrt(x) - 1)/(x - 1)',
      valueAt4: '7/3'
    },
    acceptedFinalAnswers: [
      { A: '(x + 2√x - 1)/(x - 1)', valueAt4: '7/3' }
    ]
  },
  {
    id: 'math-q6',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: `Cho biểu thức B = (1/(√x - 2) + 1/(√x + 2)) · (x - 4)/(2√x) với x > 0, x ≠ 4.

1. Rút gọn biểu thức B.

2. Tìm x để B = 2.`,
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'B = 1; không có giá trị x thỏa mãn B = 2',
    acceptedAnswers: ['B=1, không có x', 'không có', 'vo nghiem'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'B', label: 'B =', valueType: 'expression', placeholder: '1' },
        { key: 'x', label: 'x thỏa B = 2:', valueType: 'text', placeholder: 'không có' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      B: '1',
      x: 'không có'
    },
    acceptedFinalAnswers: [
      { B: '1', x: 'vô nghiệm' }
    ]
  },
  {
    id: 'math-q7',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: `Cho biểu thức C = (√x/(√x + 1) + 1/(x + √x)) ÷ (1/√x - 1/(√x + 1)) với x > 0.

1. Rút gọn biểu thức C.

2. Tìm x để C = 6.`,
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'C = x + 1; x = 5',
    acceptedAnswers: ['x=5', '5', 'C=x+1, x=5'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'C', label: 'C =', valueType: 'expression', placeholder: 'x + 1' },
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '5' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      C: 'x + 1',
      x: '5'
    }
  },
  {
    id: 'math-q8',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt3',
    content: 'Giải hệ phương trình: 2x + y = 7 và x - y = 2.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x = 3; y = 1',
    acceptedAnswers: ['x=3,y=1', '3 1'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '3' },
        { key: 'y', label: 'y =', valueType: 'number', placeholder: '1' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      x: '3',
      y: '1'
    }
  }
];

export const mathSolutions: Solution[] = [
  {
    id: 'math-s1',
    questionId: 'math-q1',
    recognition: 'Đề có √x, nhiều phân thức, mẫu x - √x và x - 1, đồng thời có phép chia hai cụm biểu thức. Đây là dạng rút gọn biểu thức chứa căn có câu phụ tìm x.',
    detailedSteps: [
      {
        order: 1,
        title: 'Ghi điều kiện xác định',
        explanation: 'Theo đề bài, biểu thức xác định khi x > 0 và x ≠ 1. Điều kiện này phải dùng để đối chiếu nghiệm cuối cùng.',
        formula: 'x > 0, x ≠ 1',
        result: 'Điều kiện xác định là x > 0, x ≠ 1.'
      },
      {
        order: 2,
        title: 'Rút gọn ngoặc thứ nhất',
        explanation: 'Đặt A = √x/(√x - 1) - 1/(x - √x). Vì x - √x = √x(√x - 1), mẫu thức chung là √x(√x - 1).',
        formula: 'A = x/[√x(√x - 1)] - 1/[√x(√x - 1)] = (x - 1)/[√x(√x - 1)]',
        result: 'A = (√x + 1)/√x.'
      },
      {
        order: 3,
        title: 'Rút gọn ngoặc thứ hai',
        explanation: 'Đặt B = 1/(√x + 1) + 2/(x - 1). Vì x - 1 = (√x - 1)(√x + 1), ta quy đồng theo mẫu này.',
        formula: 'B = (√x - 1 + 2)/[(√x - 1)(√x + 1)] = (√x + 1)/[(√x - 1)(√x + 1)]',
        result: 'B = 1/(√x - 1).'
      },
      {
        order: 4,
        title: 'Thực hiện phép chia để rút gọn P',
        explanation: 'P = A ÷ B. Chia cho một phân thức là nhân với phân thức nghịch đảo.',
        formula: 'P = [(√x + 1)/√x] · (√x - 1) = [(√x + 1)(√x - 1)]/√x',
        result: 'P = (x - 1)/√x.'
      },
      {
        order: 5,
        title: 'Tìm x khi P = -3/2',
        explanation: 'Đặt t = √x, với t > 0. Khi đó (x - 1)/√x = (t² - 1)/t.',
        formula: '(t² - 1)/t = -3/2 ⇒ 2t² + 3t - 2 = 0 ⇒ (2t - 1)(t + 2) = 0',
        result: 'Vì t > 0 nên t = 1/2. Suy ra x = 1/4, thỏa mãn điều kiện.'
      }
    ],
    finalAnswer: 'P = (x - 1)/√x; x = 1/4.',
    commonMistakes: [
      'Phân tích sai x - √x.',
      'Quên đổi phép chia thành nhân nghịch đảo.',
      'Không đối chiếu x = 1/4 với điều kiện xác định.'
    ],
    reviewSuggestions: [
      'Ôn lại phân tích mẫu thức chứa căn.',
      'Luyện thêm quy đồng phân thức.',
      'Xem lại cách đặt t = √x để giải câu phụ.'
    ]
  },
  {
    id: 'math-s2',
    questionId: 'math-q2',
    recognition: 'Đây là bài phương trình bậc hai có tham số và điều kiện về hai nghiệm, cần dùng Delta và hệ thức Vi-ét.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện có hai nghiệm phân biệt',
        explanation: 'Với phương trình x² - 2(m + 1)x + m² + 4 = 0, dùng Delta phẩy.',
        formula: "Delta' = (m + 1)² - (m² + 4) = 2m - 3",
        result: 'Phương trình có hai nghiệm phân biệt khi m > 3/2.'
      },
      {
        order: 2,
        title: 'Áp dụng Vi-ét',
        explanation: 'Theo Vi-ét, tổng nghiệm là 2(m + 1), tích nghiệm là m² + 4.',
        formula: 'x1 + x2 = 2(m + 1); x1x2 = m² + 4',
        result: 'Dùng hai biểu thức này để thay vào điều kiện đề bài.'
      },
      {
        order: 3,
        title: 'Biến đổi điều kiện nghiệm',
        explanation: 'Ta có x1² + x2² - x1x2 = (x1 + x2)² - 3x1x2.',
        formula: '[2(m + 1)]² - 3(m² + 4) = 7',
        result: 'Thu được m² + 8m - 15 = 0.'
      },
      {
        order: 4,
        title: 'Giải và đối chiếu',
        explanation: 'Giải phương trình m² + 8m - 15 = 0 rồi đối chiếu m > 3/2.',
        formula: 'm = -4 ± √31',
        result: 'Chỉ m = -4 + √31 thỏa mãn điều kiện.'
      }
    ],
    finalAnswer: 'm = -4 + √31.',
    commonMistakes: [
      'Quên điều kiện có hai nghiệm phân biệt.',
      'Biến đổi sai x1² + x2².',
      'Nhận cả hai nghiệm m mà không đối chiếu điều kiện.'
    ],
    reviewSuggestions: [
      'Ôn lại Delta phẩy.',
      'Ôn hệ thức Vi-ét và biểu thức đối xứng của nghiệm.'
    ]
  },
  {
    id: 'math-s3',
    questionId: 'math-q3',
    recognition: 'Đây là bài lập hệ vì có hai đại lượng chưa biết và hai dữ kiện độc lập: tổng giá niêm yết và tổng tiền sau giảm giá.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện',
        explanation: 'Gọi x là giá tivi, y là giá tủ lạnh, đơn vị triệu đồng.',
        formula: 'x > 0, y > 0',
        result: 'Hai ẩn đều dương vì là giá tiền.'
      },
      {
        order: 2,
        title: 'Lập phương trình tổng giá ban đầu',
        explanation: 'Tổng giá niêm yết ban đầu là 25 triệu đồng.',
        formula: 'x + y = 25',
        result: 'Phương trình thứ nhất.'
      },
      {
        order: 3,
        title: 'Lập phương trình sau giảm giá',
        explanation: 'Tivi giảm 10% nên còn 0.9x. Tủ lạnh giảm 20% nên còn 0.8y. Tổng tiền thực trả là 21 triệu đồng.',
        formula: '0.9x + 0.8y = 21',
        result: 'Phương trình thứ hai.'
      },
      {
        order: 4,
        title: 'Giải hệ và kết luận',
        explanation: 'Giải hệ gồm x + y = 25 và 0.9x + 0.8y = 21.',
        formula: 'x = 10, y = 15',
        result: 'Giá tivi là 10 triệu đồng, giá tủ lạnh là 15 triệu đồng.'
      }
    ],
    finalAnswer: 'Tivi: 10 triệu đồng; Tủ lạnh: 15 triệu đồng.',
    commonMistakes: [
      'Nhầm giảm 10% thành giá còn 0.1x thay vì 0.9x.',
      'Quên đơn vị triệu đồng.',
      'Đảo đáp án tivi và tủ lạnh.'
    ],
    reviewSuggestions: [
      'Ôn lại bài toán phần trăm.',
      'Luyện cách đặt ẩn và lập phương trình từ dữ kiện thực tế.'
    ]
  },
  {
    id: 'math-s4',
    questionId: 'math-q4',
    recognition: 'Đây là bài chứng minh tứ giác nội tiếp, trọng tâm là tìm được hai góc vuông hoặc một dấu hiệu nội tiếp phù hợp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tứ giác cần chứng minh',
        explanation: 'Ta cần chứng minh bốn điểm A, H, C, K cùng thuộc một đường tròn.',
        result: 'Tứ giác cần xét là AHCK.'
      },
      {
        order: 2,
        title: 'Tìm các góc đặc biệt',
        explanation: 'Từ CH vuông góc AB và AK vuông góc AB, suy ra các góc liên quan đến H và A là góc vuông.',
        result: 'Có thể dùng dấu hiệu hai góc đối bù nhau để chứng minh nội tiếp.'
      },
      {
        order: 3,
        title: 'Kết luận',
        explanation: 'Sau khi chỉ ra tổng hai góc đối bằng 180 độ, kết luận tứ giác AHCK nội tiếp.',
        result: 'AHCK là tứ giác nội tiếp.'
      }
    ],
    finalAnswer: 'Tứ giác AHCK nội tiếp.',
    commonMistakes: [
      'Không nêu rõ lý do có góc vuông.',
      'Kết luận nội tiếp nhưng chưa chỉ ra dấu hiệu.',
      'Viết sai thứ tự tứ giác.'
    ],
    reviewSuggestions: [
      'Ôn lại các dấu hiệu nhận biết tứ giác nội tiếp.',
      'Luyện trình bày chứng minh góc trong hình học.'
    ]
  },
  {
    id: 'math-s5',
    questionId: 'math-q5',
    recognition: 'Đề có √x, phân thức và mẫu x - 1. Đây là câu rút gọn căn mức dễ, có thêm yêu cầu tính giá trị khi x = 4.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mẫu thức',
        explanation: 'Ta có x - 1 = (√x - 1)(√x + 1). Đây là mẫu thức chung.',
        formula: 'x - 1 = (√x - 1)(√x + 1)',
        result: 'Mẫu thức chung là x - 1.'
      },
      {
        order: 2,
        title: 'Quy đồng và rút gọn',
        explanation: 'Quy đồng hai phân thức của A về mẫu x - 1.',
        formula: 'A = (√x + 1)²/(x - 1) - 2/(x - 1)',
        result: 'A = (x + 2√x - 1)/(x - 1).'
      },
      {
        order: 3,
        title: 'Tính giá trị tại x = 4',
        explanation: 'Thay x = 4, khi đó √x = 2.',
        formula: 'A = (4 + 2·2 - 1)/(4 - 1)',
        result: 'A = 7/3.'
      }
    ],
    finalAnswer: 'A = (x + 2√x - 1)/(x - 1); A(4) = 7/3.',
    commonMistakes: [
      'Quên phân tích x - 1.',
      'Khai triển sai (√x + 1)².',
      'Thay x = 4 nhưng quên √4 = 2.'
    ],
    reviewSuggestions: [
      'Ôn hằng đẳng thức bình phương của một tổng.',
      'Luyện quy đồng phân thức chứa căn.'
    ]
  },
  {
    id: 'math-s6',
    questionId: 'math-q6',
    recognition: 'Đề có hai phân thức đối xứng theo √x - 2 và √x + 2, sau đó nhân với x - 4. Đây là bài rút gọn căn mức trung bình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Rút gọn ngoặc đầu',
        explanation: 'Quy đồng 1/(√x - 2) + 1/(√x + 2).',
        formula: '(√x + 2 + √x - 2)/[(√x - 2)(√x + 2)] = 2√x/(x - 4)',
        result: 'Ngoặc đầu rút gọn thành 2√x/(x - 4).'
      },
      {
        order: 2,
        title: 'Nhân với phân thức còn lại',
        explanation: 'Nhân 2√x/(x - 4) với (x - 4)/(2√x).',
        formula: 'B = [2√x/(x - 4)] · [(x - 4)/(2√x)]',
        result: 'B = 1.'
      },
      {
        order: 3,
        title: 'Xử lý câu phụ',
        explanation: 'Vì B luôn bằng 1 với mọi x thỏa điều kiện, nên không thể có B = 2.',
        result: 'Không có giá trị x thỏa mãn B = 2.'
      }
    ],
    finalAnswer: 'B = 1; không có x thỏa B = 2.',
    commonMistakes: [
      'Không nhận ra x - 4 = (√x - 2)(√x + 2).',
      'Rút gọn nhầm khiến B khác 1.',
      'Vẫn cố giải B = 2 dù B đã rút gọn thành hằng số 1.'
    ],
    reviewSuggestions: [
      'Ôn hiệu hai bình phương.',
      'Luyện rút gọn biểu thức trước khi làm câu phụ.'
    ]
  },
  {
    id: 'math-s7',
    questionId: 'math-q7',
    recognition: 'Đề có phép chia hai cụm biểu thức chứa √x. Cần rút gọn từng cụm riêng trước khi chia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Rút gọn cụm thứ nhất',
        explanation: 'Đặt M = √x/(√x + 1) + 1/(x + √x). Vì x + √x = √x(√x + 1).',
        formula: 'M = x/[√x(√x + 1)] + 1/[√x(√x + 1)]',
        result: 'M = (x + 1)/[√x(√x + 1)].'
      },
      {
        order: 2,
        title: 'Rút gọn cụm thứ hai',
        explanation: 'Đặt N = 1/√x - 1/(√x + 1). Quy đồng theo mẫu √x(√x + 1).',
        formula: 'N = (√x + 1 - √x)/[√x(√x + 1)]',
        result: 'N = 1/[√x(√x + 1)].'
      },
      {
        order: 3,
        title: 'Thực hiện phép chia',
        explanation: 'C = M ÷ N nên các mẫu giống nhau sẽ triệt tiêu.',
        formula: 'C = [(x + 1)/D] ÷ [1/D]',
        result: 'C = x + 1.'
      },
      {
        order: 4,
        title: 'Tìm x khi C = 6',
        explanation: 'Thay C = x + 1 vào điều kiện C = 6.',
        formula: 'x + 1 = 6',
        result: 'x = 5, thỏa mãn x > 0.'
      }
    ],
    finalAnswer: 'C = x + 1; x = 5.',
    commonMistakes: [
      'Phân tích sai x + √x.',
      'Quên đổi phép chia thành nhân nghịch đảo.',
      'Rút gọn nhầm làm mất biểu thức x + 1.'
    ],
    reviewSuggestions: [
      'Ôn phân tích x + √x.',
      'Luyện phép chia phân thức đại số.'
    ]
  },
  {
    id: 'math-s8',
    questionId: 'math-q8',
    recognition: 'Đây là hệ phương trình bậc nhất hai ẩn cơ bản, có thể giải nhanh bằng phương pháp cộng đại số.',
    detailedSteps: [
      {
        order: 1,
        title: 'Viết hệ phương trình',
        explanation: 'Ta có hệ gồm 2x + y = 7 và x - y = 2.',
        result: 'Có thể cộng hai phương trình để khử y.'
      },
      {
        order: 2,
        title: 'Khử y',
        explanation: 'Cộng hai phương trình theo vế.',
        formula: '(2x + y) + (x - y) = 7 + 2',
        result: '3x = 9 nên x = 3.'
      },
      {
        order: 3,
        title: 'Tìm y và kết luận',
        explanation: 'Thay x = 3 vào x - y = 2.',
        formula: '3 - y = 2',
        result: 'y = 1. Vậy nghiệm là x = 3, y = 1.'
      }
    ],
    finalAnswer: 'x = 3; y = 1.',
    commonMistakes: [
      'Cộng hệ nhưng đổi dấu sai.',
      'Tìm x xong quên tìm y.',
      'Kết luận nghiệm sai thứ tự.'
    ],
    reviewSuggestions: [
      'Ôn phương pháp cộng đại số.',
      'Luyện kiểm tra nghiệm bằng cách thay lại vào hệ.'
    ]
  }
];