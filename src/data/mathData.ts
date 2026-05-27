import { Topic, QuestionType, Question, Solution } from '../types';

export const mathTopics: Topic[] = [
  { id: 'math-t1', subjectId: 'math', name: 'Đại số nền tảng & Căn thức', slug: 'dai-so-va-can-thuc', orderIndex: 1, tier: 1 },
  { id: 'math-t2', subjectId: 'math', name: 'Phương trình & Hệ thức Vi-ét', slug: 'phuong-trinh-va-vi-et', orderIndex: 2, tier: 1 },
  { id: 'math-t3', subjectId: 'math', name: 'Hệ phương trình & Toán thực tế', slug: 'he-phuong-trinh-toan-thuc-te', orderIndex: 3, tier: 2 },
  { id: 'math-t4', subjectId: 'math', name: 'Hàm số & Đồ thị', slug: 'ham-so-va-do-thi', orderIndex: 4, tier: 2 },
  { id: 'math-t5', subjectId: 'math', name: 'Hình học đường tròn', slug: 'hinh-hoc-duong-tron', orderIndex: 5, tier: 3 }
];

export const mathQuestionTypes: QuestionType[] = [
  // Topic 1
  {
    id: 'math-qt1',
    topicId: 'math-t1',
    name: 'Rút gọn biểu thức chứa căn',
    slug: 'rut-gon-bieu-thuc-chua-can',
    description: 'Dạng toán cơ bản luôn xuất hiện trong câu 1 của đề thi vào 10, yêu cầu học sinh rút gọn một biểu thức đại số chứa căn thức bậc hai.',
    recognitionSigns: [
      'Đề bài cho biểu thức chứa các phân thức có căn thức bậc hai',
      'Yêu cầu rút gọn biểu thức A hoặc B',
      'Thường đi kèm điều kiện xác định của x (ví dụ: x >= 0, x != 1, x != 4)'
    ],
    solvingSteps: [
      'Tìm điều kiện xác định (nếu đề chưa cho)',
      'Phân tích các mẫu thức thành nhân tử để tìm mẫu thức chung (MTC)',
      'Quy đồng mẫu thức các phân thức',
      'Rút gọn tử thức bằng cách nhân phá ngoặc và thu gọn các hạng tử đồng dạng',
      'Chia tử thức cho mẫu thức chung, rút gọn nhân tử chung giữa tử và mẫu (nếu có)'
    ],
    commonMistakes: [
      'Quên không đặt hoặc sai điều kiện xác định',
      'Sai dấu khi nhân phá ngoặc (đặc biệt khi trước phân thức có dấu trừ)',
      'Khai căn sai: ví dụ cho rằng \\(\\sqrt{x^2} = x\\) khi chưa biết x dương hay âm'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  // Topic 2
  {
    id: 'math-qt2',
    topicId: 'math-t2',
    name: 'Biện luận nghiệm phương trình bậc hai & Hệ thức Vi-ét',
    slug: 'bien-luan-nghiem-va-vi-et',
    description: 'Dạng toán yêu cầu tìm tham số m để phương trình bậc hai có nghiệm thỏa mãn điều kiện đối xứng hoặc không đối xứng giữa hai nghiệm x1, x2.',
    recognitionSigns: [
      'Xuất hiện phương trình chứa tham số m, ví dụ: \\(x^2 - 2(m-1)x + m^2 - 3 = 0\\)',
      'Yêu cầu tìm m để phương trình có hai nghiệm phân biệt thỏa mãn đẳng thức liên quan đến \\(x_1, x_2\\)',
      'Đẳng thức có dạng đối xứng: \\(x_1^2 + x_2^2 = A\\), \\(x_1 x_2 = B\\) hoặc không đối xứng: \\(x_1 = 2x_2\\)'
    ],
    solvingSteps: [
      'Xác định các hệ số a, b (hoặc b\'), c của phương trình bậc hai',
      'Tính biệt thức \\(\\Delta\\) hoặc \\(\\Delta\'\\)',
      'Đặt điều kiện để phương trình có nghiệm (\\(\\Delta \\ge 0\\)) hoặc hai nghiệm phân biệt (\\(\\Delta > 0\\)) để tìm khoảng giá trị của m',
      'Áp dụng hệ thức Vi-ét để lập mối liên hệ: \\(x_1 + x_2 = -b/a\\) và \\(x_1 x_2 = c/a\\)',
      'Biến đổi đẳng thức đề bài theo tổng và tích nghiệm để giải tìm tham số m',
      'Đối chiếu giá trị m vừa tìm được với điều kiện có nghiệm ban đầu và kết luận'
    ],
    commonMistakes: [
      'Quên không đặt điều kiện để phương trình có nghiệm (\\(\\Delta \\ge 0\\)) trước khi dùng Vi-ét',
      'Biến đổi sai hằng đẳng thức: ví dụ \\(x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2\\) nhưng nhầm thành \\( - 4x_1x_2\\)',
      'Không đối chiếu m tìm được với điều kiện của biệt thức \\(\\Delta\\)'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  // Topic 3
  {
    id: 'math-qt3',
    topicId: 'math-t3',
    name: 'Giải hệ phương trình bậc nhất hai ẩn',
    slug: 'giai-he-phuong-trinh',
    description: 'Phương pháp giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế hoặc phương pháp cộng đại số, hoặc giải hệ bằng cách đặt ẩn phụ.',
    recognitionSigns: [
      'Đề bài cho hệ gồm hai phương trình chứa hai ẩn x và y',
      'Hệ phương trình có thể chứa các biểu thức phức tạp ở mẫu hoặc chứa căn thức, đòi hỏi đặt ẩn phụ'
    ],
    solvingSteps: [
      'Đặt điều kiện xác định cho hệ phương trình (nếu các biểu thức chứa căn hoặc ẩn ở mẫu)',
      'Chọn phương pháp giải thích hợp: đặt ẩn phụ (đối với hệ phức tạp) hoặc dùng phương pháp thế/cộng đại số (đối với hệ cơ bản)',
      'Giải hệ phương trình mới để tìm giá trị của các ẩn',
      'Đối chiếu với điều kiện xác định ban đầu và kết luận nghiệm (x; y)'
    ],
    commonMistakes: [
      'Quên không đặt điều kiện xác định cho ẩn nằm dưới mẫu thức hoặc trong căn thức',
      'Khi giải xong ẩn phụ (ví dụ: u = 3), quên không quy đổi ngược lại tìm ẩn gốc x, y',
      'Tính toán sai dấu khi thực hiện phương pháp cộng đại số trừ hai vế cho nhau'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'math-qt4',
    topicId: 'math-t3',
    name: 'Lập hệ phương trình từ bài toán thực tế',
    slug: 'lap-he-phuong-trinh-thuc-te',
    description: 'Dạng toán ứng dụng thực tế cực kỳ quan trọng, yêu cầu dịch đề bài từ ngôn ngữ đời sống sang hệ phương trình để giải toán giá tiền, năng suất, chuyển động.',
    recognitionSigns: [
      'Đề bài mô tả một tình huống thực tế: mua bán hàng hóa giảm giá, hai vòi nước cùng chảy, hai xe đi từ hai địa điểm khác nhau...',
      'Đề bài xuất hiện hai đại lượng chưa biết cần tìm và hai mối quan hệ độc lập giữa chúng'
    ],
    solvingSteps: [
      'Xác định rõ hai đại lượng cần tìm và đặt ẩn (ví dụ: gọi x, y là giá tiền ban đầu của hai món hàng), đặt điều kiện phù hợp (x, y > 0)',
      'Phân tích mối quan hệ thứ nhất của đề bài để lập phương trình thứ nhất',
      'Phân tích mối quan hệ thứ hai (ví dụ: giá sau khi giảm 10% là 0.9x, giảm 20% là 0.8y) để lập phương trình thứ hai',
      'Lập hệ phương trình từ hai phương trình trên và giải hệ ẩn x, y',
      'Đối chiếu điều kiện thực tế (thường là x, y phải dương, hoặc phải nguyên dương nếu là người/sản phẩm) và kết luận đúng câu hỏi đề bài'
    ],
    commonMistakes: [
      'Đặt ẩn nhưng quên không ghi đơn vị và đặt điều kiện cho ẩn',
      'Lập sai phương trình tính toán phần trăm giảm giá (ví dụ: giảm 10% thì giá còn 0.9x nhưng lại nhân thành 0.1x)',
      'Giải xong hệ phương trình nhưng quên không đối chiếu điều kiện thực tế, hoặc kết luận sai yêu cầu (ví dụ đề hỏi giá sau giảm nhưng lại kết luận giá gốc)'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  // Topic 4
  {
    id: 'math-qt5',
    topicId: 'math-t4',
    name: 'Sự tương giao giữa Parabol & Đường thẳng',
    slug: 'tuong-giao-parabol-va-duong-thang',
    description: 'Dạng toán nghiên cứu số giao điểm và tọa độ giao điểm giữa Parabol (P): \\(y = ax^2\\) và đường thẳng (d): \\(y = mx + n\\).',
    recognitionSigns: [
      'Cho đồ thị Parabol \\(y = ax^2\\) và đường thẳng \\(y = mx + n\\)',
      'Yêu cầu chứng minh đường thẳng luôn cắt parabol tại hai điểm phân biệt',
      'Yêu cầu tìm tham số m để đường thẳng tiếp xúc hoặc cắt parabol tại hai điểm nằm về hai phía trục tung, hoặc thỏa mãn tọa độ giao điểm'
    ],
    solvingSteps: [
      'Lập phương trình hoành độ giao điểm của (P) và (d): \\(ax^2 = mx + n \\Leftrightarrow ax^2 - mx - n = 0\\)',
      'Nghiên cứu số giao điểm dựa vào số nghiệm của phương trình hoành độ giao điểm (sử dụng biệt thức \\(\\Delta\\))',
      'Đường thẳng cắt (P) tại 2 điểm phân biệt khi \\(\\Delta > 0\\); tiếp xúc khi \\(\\Delta = 0\\); không cắt khi \\(\\Delta < 0\\)',
      'Nếu đề bài yêu cầu điều kiện về tọa độ giao điểm \\(x_1, x_2\\), áp dụng hệ thức Vi-ét cho phương trình hoành độ giao điểm vừa lập để biến đổi'
    ],
    commonMistakes: [
      'Lập sai phương trình hoành độ giao điểm do chuyển vế đổi dấu sai',
      'Nhầm lẫn giữa điều kiện hoành độ (x) và tung độ (y)',
      'Quên không kiểm tra điều kiện tồn tại giao điểm trước khi áp dụng Vi-ét'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  // Topic 5
  {
    id: 'math-qt6',
    topicId: 'math-t5',
    name: 'Chứng minh tứ giác nội tiếp đường tròn',
    slug: 'tu-giac-noi-tiep',
    description: 'Dạng toán hình học kinh điển luôn có trong câu hỏi đầu tiên của bài toán hình học tổng hợp, chứng minh 4 đỉnh của tứ giác cùng nằm trên một đường tròn.',
    recognitionSigns: [
      'Bài toán hình cho đường tròn (O), yêu cầu chứng minh tứ giác ABCD nội tiếp',
      'Xuất hiện các góc vuông từ đường cao, tiếp tuyến hoặc góc nội tiếp chắn nửa đường tròn'
    ],
    solvingSteps: [
      'Xác định tứ giác cần chứng minh nội tiếp',
      'Lựa chọn dấu hiệu chứng minh phù hợp:',
      '- Dấu hiệu 1: Tổng hai góc đối diện bằng \\(180^\\circ\\) (Ví dụ: \\(\\widehat{A} + \\widehat{C} = 180^\\circ\\))',
      '- Dấu hiệu 2: Hai đỉnh kề nhau cùng nhìn một cạnh dưới hai góc bằng nhau (Ví dụ: \\(\\widehat{ADB} = \\widehat{ACB}\\))',
      '- Dấu hiệu 3: Tứ giác có góc ngoài bằng góc trong tại đỉnh đối diện',
      '- Dấu hiệu 4: Bốn đỉnh cách đều một điểm cố định',
      'Trình bày lập luận chặt chẽ: chỉ rõ các góc bằng bao nhiêu độ, dựa trên giả thiết nào, rồi kết luận tứ giác nội tiếp theo dấu hiệu đã chọn'
    ],
    commonMistakes: [
      'Lập luận góc vuông nhưng không chỉ rõ lý do (ví dụ: do tiếp tuyến hoặc đường cao)',
      'Sử dụng hai góc nhìn cạnh nhưng hai đỉnh đó không kề nhau',
      'Viết sai thứ tự đỉnh của tứ giác khi kết luận nội tiếp'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  }
];

export const mathQuestions: Question[] = [
  // Rút gọn biểu thức chứa căn
  {
    id: 'math-q1',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(P = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}\\right) \\div \\left(\\frac{1}{\\sqrt{x}+1} + \\frac{2}{x-1}\\right)\\) với \\(x > 0, x \\neq 1\\).\n\na) Rút gọn biểu thức \\(P\\).\n\nb) Tìm giá trị của \\(x\\) để \\(P = \\frac{1}{2}\\).',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'x = 1/4',
    acceptedAnswers: ['x=1/4', '1/4', 'x = 0.25', '0.25'],
    validatorType: 'number',
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '1/4' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'numeric'
    },
    correctFinalAnswer: {
      x: '1/4'
    },
    acceptedFinalAnswers: [
      { x: '0.25' }
    ]
  },
  // Hệ thức Vi-ét
  {
    id: 'math-q2',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Cho phương trình bậc hai: \\(x^2 - 2(m+1)x + m^2 + 4 = 0\\) (với \\(m\\) là tham số).\n\na) Tìm \\(m\\) để phương trình có hai nghiệm phân biệt \\(x_1, x_2\\).\n\nb) Tìm \\(m\\) để hai nghiệm thỏa mãn hệ thức: \\(x_1^2 + x_2^2 - x_1 x_2 = 7\\).',
    difficulty: 'medium',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2024,
    correctAnswer: 'm = -4 + √31',
    acceptedAnswers: [
      'm = -4 + \\sqrt{31}',
      '-4 + sqrt(31)',
      '-4 + \\sqrt{31}',
      'm=-4+sqrt(31)'
    ],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        {
          key: 'm',
          label: 'm =',
          valueType: 'expression',
          placeholder: 'Ví dụ: -4 + √31',
          hint: 'Có thể nhập √31 hoặc căn 31.'
        }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      m: '-4 + √31'
    },
    acceptedFinalAnswers: [
      { m: '-4 + \\sqrt{31}' },
      { m: '-4+sqrt(31)' },
      { m: '-4 + căn 31' }
    ]
  },
  // Lập hệ phương trình thực tế
  {
    id: 'math-q3',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một cửa hàng bán tivi và tủ lạnh. Tổng giá niêm yết ban đầu của một chiếc tivi và một chiếc tủ lạnh là 25 triệu đồng. Nhân dịp lễ, cửa hàng giảm giá 10% cho tivi và giảm giá 20% cho tủ lạnh, do đó một khách hàng chỉ phải trả tổng cộng 21 triệu đồng để mua cả hai mặt hàng trên. Hỏi giá niêm yết ban đầu của mỗi mặt hàng là bao nhiêu?',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Tivi: 10 triệu, Tủ lạnh: 15 triệu',
    acceptedAnswers: [
      'Tivi 10 triệu, Tủ lạnh 15 triệu',
      'Tivi: 10, Tủ lạnh: 15',
      '10 15',
      'Tủ lạnh: 15 triệu, Tivi: 10 triệu',
      'Tủ lạnh 15 triệu, Tivi 10 triệu',
      'Tủ lạnh 15 Tivi 10'
    ],
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
  // Tứ giác nội tiếp
  {
    id: 'math-q4',
    subjectId: 'math',
    topicId: 'math-t5',
    questionTypeId: 'math-qt6',
    content: 'Cho đường tròn \\((O, R)\\) đường kính \\(AB\\). Lấy điểm \\(C\\) trên đường tròn sao cho \\(AC < BC\\). Kẻ đường cao \\(CH\\) của tam giác \\(ABC\\) (\\(H \\in AB\\)). Gọi \\(I\\) là trung điểm của \\(CH\\). Đường thẳng qua \\(A\\) vuông góc với \\(AB\\) cắt tia \\(BI\\) tại \\(K\\).\n\nChứng minh rằng tứ giác \\(AHCK\\) là tứ giác nội tiếp.',
    difficulty: 'medium',
    sourceType: 'official_exam',
    province: 'Hà Nội',
    year: 2023,
    correctAnswer: 'Chứng minh thành công',
    acceptedAnswers: ['Chứng minh thành công'],
    validatorType: 'manual'
  },
  // Rút gọn trực tiếp - Đề TPHCM 2023
  {
    id: 'math-q5',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Rút gọn biểu thức \\(A = \\frac{\\sqrt{x} + 1}{\\sqrt{x} - 1} - \\frac{2}{\\sqrt{x}+1} - \\frac{2}{x-1}\\) với \\(x \\ge 0, x \\neq 1\\).',
    difficulty: 'easy',
    sourceType: 'official_exam',
    province: 'TP.HCM',
    year: 2023,
    correctAnswer: 'A = (x + 1)/(x - 1)',
    acceptedAnswers: [
      '(x+1)/(x-1)',
      '(x + 1)/(x - 1)',
      'A = (x+1)/(x-1)'
    ],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        {
          key: 'A',
          label: 'A =',
          valueType: 'expression',
          placeholder: 'Ví dụ: (x+1)/(x-1)',
          hint: 'Nhập biểu thức đã rút gọn'
        }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '(x+1)/(x-1)'
    }
  },
  // Rút gọn trực tiếp - Tự biên soạn
  {
    id: 'math-q6',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(B = \\left(\\frac{1}{\\sqrt{x}+1} - \\frac{2}{x+2\\sqrt{x}+1}\\right) \\div \\frac{\\sqrt{x}-1}{x-1}\\) với \\(x \\ge 0, x \\neq 1\\).\n\nRút gọn biểu thức \\(B\\).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B = (√x - 1)/(√x + 1)',
    acceptedAnswers: [
      '(√x-1)/(√x+1)',
      '(sqrt(x)-1)/(sqrt(x)+1)',
      'B = (√x-1)/(√x+1)',
      'B = (sqrt(x)-1)/(sqrt(x)+1)'
    ],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        {
          key: 'B',
          label: 'B =',
          valueType: 'expression',
          placeholder: 'Ví dụ: (√x-1)/(√x+1)',
          hint: 'Nhập biểu thức đã rút gọn'
        }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      B: '(√x-1)/(√x+1)'
    },
    acceptedFinalAnswers: [
      { B: '(sqrt(x)-1)/(sqrt(x)+1)' }
    ]
  },
  // Rút gọn + Tìm x - Đề Bình Định 2024 (Biến thể)
  {
    id: 'math-q7',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(Q = \\left(\\frac{1}{\\sqrt{x}-1} - \\frac{1}{\\sqrt{x}+1}\\right) \\div \\frac{2\\sqrt{x}}{x-1}\\) với \\(x > 0, x \\neq 1\\).\n\na) Rút gọn biểu thức \\(Q\\).\n\nb) Tìm tất cả các giá trị của \\(x\\) để \\(Q < 1\\).',
    difficulty: 'medium',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2024,
    correctAnswer: 'x > 1',
    acceptedAnswers: ['x > 1', 'x>1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        {
          key: 'x',
          label: 'Điều kiện x:',
          valueType: 'expression',
          placeholder: 'Ví dụ: x > 1',
          hint: 'Nhập kết quả tìm x'
        }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      x: 'x > 1'
    },
    acceptedFinalAnswers: [
      { x: 'x>1' }
    ]
  },
  // Rút gọn + Tìm x nguyên để biểu thức nguyên - Tự biên soạn
  {
    id: 'math-q8',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(M = \\frac{x + 2\\sqrt{x} - 3}{x - \\sqrt{x}} \\div \\frac{\\sqrt{x}-1}{\\sqrt{x}}\\) với \\(x > 0, x \\neq 1\\).\n\na) Rút gọn biểu thức \\(M\\).\n\nb) Tìm tất cả các giá trị nguyên của \\(x\\) để \\(M\\) nhận giá trị nguyên.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'x ∈ {4, 9, 25}',
    acceptedAnswers: [
      'x ∈ {4, 9, 25}',
      'x = 4, x = 9, x = 25',
      '4, 9, 25',
      'x = 4, 9, 25'
    ],
    validatorType: 'manual',
    answerSchema: {
      type: 'expression',
      fields: [
        {
          key: 'x',
          label: 'Các giá trị x:',
          valueType: 'expression',
          placeholder: 'Ví dụ: 4, 9, 25',
          hint: 'Nhập các giá trị nguyên của x cách nhau bằng dấu phẩy'
        }
      ],
      proofImageRequired: true,
      autoCheckMode: 'manual'
    }
  }
];

export const mathSolutions: Solution[] = [
  {
    id: 'math-s1',
    questionId: 'math-q1',
    recognition: 'Biểu thức chứa phân thức có ẩn x nằm trong căn và dưới mẫu. Đề bài đã cho điều kiện xác định là \\(x > 0, x \\neq 1\\). Ta cần phân tích mẫu thức thành nhân tử để rút gọn từng cụm ngoặc trước khi thực hiện phép chia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích và rút gọn ngoặc thứ nhất (ngoặc chia)',
        explanation: 'Xét ngoặc thứ nhất: \\(A = \\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}\\). Nhận thấy mẫu thức thứ hai là \\(x-\\sqrt{x} = \\sqrt{x}(\\sqrt{x}-1)\\). Mẫu thức chung là \\(MTC = \\sqrt{x}(\\sqrt{x}-1)\\). Quy đồng tử thức:',
        formula: 'A = \\frac{\\sqrt{x} \\cdot \\sqrt{x}}{\\sqrt{x}(\\sqrt{x}-1)} - \\frac{1}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{x-1}{\\sqrt{x}(\\sqrt{x}-1)}',
        result: '\\(A = \\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{\\sqrt{x}+1}{\\sqrt{x}}\\)'
      },
      {
        order: 2,
        title: 'Phân tích và rút gọn ngoặc thứ hai (ngoặc bị chia)',
        explanation: 'Xét ngoặc thứ hai: \\(B = \\frac{1}{\\sqrt{x}+1} + \\frac{2}{x-1}\\). Nhận thấy mẫu thức thứ hai là \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\). MTC là \\((\\sqrt{x}-1)(\\sqrt{x}+1)\\). Quy đồng tử thức:',
        formula: 'B = \\frac{\\sqrt{x}-1 + 2}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x}+1}{(\\sqrt{x}-1)(\\sqrt{x}+1)}',
        result: '\\(B = \\frac{1}{\\sqrt{x}-1}\\)'
      },
      {
        order: 3,
        title: 'Thực hiện phép chia P = A / B',
        explanation: 'Lấy biểu thức rút gọn của ngoặc thứ nhất chia cho ngoặc thứ hai (nhân nghịch đảo):',
        formula: 'P = \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\div \\frac{1}{\\sqrt{x}-1} = \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\cdot (\\sqrt{x}-1)',
        result: '\\(P = \\frac{x-1}{\\sqrt{x}}\\)'
      },
      {
        order: 4,
        title: 'Giải phần b) Tìm x để P = 1/2',
        explanation: 'Cho biểu thức \\(P = \\frac{x-1}{\\sqrt{x}} = \\frac{1}{2}\\). Quy đồng chéo ta được phương trình:',
        formula: '2(x-1) = \\sqrt{x} \\Leftrightarrow 2x - \\sqrt{x} - 2 = 0',
        result: 'Đặt \\(t = \\sqrt{x}\\) \\((t > 0, t \\neq 1)\\) \\(\\Rightarrow 2t^2 - t - 2 = 0\\). Giải phương trình bậc hai tìm \\(t\\), ta thu được nghiệm thỏa mãn là \\(t = 1/2\\) (ứng với \\(x = 1/4\\)).'
      }
    ],
    finalAnswer: 'a) \\(P = \\frac{x-1}{\\sqrt{x}}\\), b) \\(x = 1/4\\)',
    commonMistakes: [
      'Quên điều kiện xác định khi quy đồng chéo hoặc quên đối chiếu nghiệm x = 1/4 với điều kiện đề bài',
      'Phân tích mẫu thức \\(x - \\sqrt{x}\\) sai thành \\(x(\\sqrt{x}-1)\\)'
    ],
    reviewSuggestions: [
      'Ôn tập chuyên đề Hằng đẳng thức căn bậc hai',
      'Luyện tập kỹ năng phân tích đa thức thành nhân tử'
    ]
  },
  {
    id: 'math-s2',
    questionId: 'math-q2',
    recognition: 'Phương trình bậc hai chứa tham số m. Để giải quyết, ta cần tính biệt thức \\(\\Delta\'\\) đặt điều kiện lớn hơn 0 để có hai nghiệm phân biệt. Sau đó, áp dụng Vi-ét biến đổi biểu thức đối xứng thành tổng và tích.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện để phương trình có hai nghiệm phân biệt',
        explanation: 'Xác định các hệ số: \\(a = 1, b\' = -(m+1), c = m^2 + 4\\). Tính biệt thức \\(\\Delta\'\\):',
        formula: '\\Delta\' = (m+1)^2 - (m^2+4) = m^2 + 2m + 1 - m^2 - 4 = 2m - 3',
        result: 'Để phương trình có hai nghiệm phân biệt, ta cần \\(\\Delta\' > 0 \\Leftrightarrow 2m - 3 > 0 \\Leftrightarrow m > 1.5\\)'
      },
      {
        order: 2,
        title: 'Áp dụng hệ thức Vi-ét',
        explanation: 'Với điều kiện m > 1.5, theo định lý Vi-ét ta có tổng và tích hai nghiệm:',
        formula: 'x_1 + x_2 = -b/a = 2(m+1), \\quad x_1 x_2 = c/a = m^2 + 4',
        result: 'Đây là hai biểu thức nền tảng để thay vào đẳng thức đề bài.'
      },
      {
        order: 3,
        title: 'Biến đổi và giải tìm tham số m',
        explanation: 'Xét biểu thức đề bài: \\(x_1^2 + x_2^2 - x_1 x_2 = 7\\). Biến đổi hằng đẳng thức để đưa về tổng và tích:',
        formula: '(x_1 + x_2)^2 - 3x_1 x_2 = 7 \\Rightarrow [2(m+1)]^2 - 3(m^2+4) = 7',
        result: '\\(\\Leftrightarrow 4(m^2 + 2m + 1) - 3m^2 - 12 - 7 = 0 \\Leftrightarrow m^2 + 8m - 15 = 0\\)'
      },
      {
        order: 4,
        title: 'Giải phương trình ẩn m và đối chiếu điều kiện',
        explanation: 'Giải phương trình bậc hai \\(m^2 + 8m - 15 = 0\\) ta tìm được nghiệm: \\(m = -4 + \\sqrt{31}\\) (khoảng 1.56) hoặc \\(m = -4 - \\sqrt{31}\\) (khoảng -9.56).',
        formula: 'm = -4 \\pm \\sqrt{31}',
        result: 'Đối chiếu với điều kiện \\(m > 1.5\\), chỉ có \\(m = -4 + \\sqrt{31}\\) thỏa mãn. Kết luận giá trị \\(m\\) cần tìm.'
      }
    ],
    finalAnswer: '\\(m = -4 + \\sqrt{31}\\)',
    commonMistakes: [
      'Quên điều kiện có nghiệm m > 1.5 dẫn đến kết luận nhận cả hai giá trị m tìm được',
      'Tính sai hằng đẳng thức từ \\(x_1^2 + x_2^2\\) thành \\((x_1+x_2)^2 - x_1x_2\\) dẫn đến phương trình sai'
    ],
    reviewSuggestions: [
      'Ôn tập công thức nghiệm thu gọn và biệt thức Delta',
      'Rèn luyện kỹ năng biến đổi biểu thức đối xứng chứa hai nghiệm'
    ]
  },
  {
    id: 'math-s3',
    questionId: 'math-q3',
    recognition: 'Đây là bài toán lập hệ phương trình vì đề có hai đại lượng chưa biết (giá gốc tivi và giá gốc tủ lạnh) cùng hai mối liên hệ độc lập (tổng giá gốc niêm yết và tổng số tiền thanh toán thực tế sau khi giảm giá phần trăm).',
    detailedSteps: [
      {
        order: 1,
        title: 'Gọi ẩn và đặt điều kiện cho ẩn',
        explanation: 'Gọi x là giá niêm yết gốc của một chiếc tivi (đơn vị: triệu đồng), y là giá niêm yết gốc của một chiếc tủ lạnh (đơn vị: triệu đồng).',
        formula: 'x > 0, \\quad y > 0',
        result: 'Điều kiện đơn giản nhưng bắt buộc để bài toán thực tế có nghĩa.'
      },
      {
        order: 2,
        title: 'Lập phương trình thứ nhất từ tổng giá niêm yết',
        explanation: 'Tổng giá niêm yết của hai mặt hàng ban đầu là 25 triệu đồng, nên ta lập được phương trình đầu tiên:',
        formula: 'x + y = 25',
        result: 'Phương trình (1)'
      },
      {
        order: 3,
        title: 'Lập phương trình thứ hai từ tổng số tiền thực trả sau giảm',
        explanation: 'Tivi giảm 10% nên giá thực tế bán là \\(100\\% - 10\\% = 90\\%\\) giá niêm yết, tương đương \\(0.9x\\). Tủ lạnh giảm 20% nên giá bán thực tế là \\(0.8y\\). Tổng tiền khách hàng thực trả là 21 triệu đồng, nên ta lập được phương trình:',
        formula: '0.9x + 0.8y = 21',
        result: 'Phương trình (2)'
      },
      {
        order: 4,
        title: 'Giải hệ phương trình và kết luận',
        explanation: 'Từ (1) và (2) ta lập hệ phương trình: \\(\\begin{cases} x + y = 25 \\\\ 0.9x + 0.8y = 21 \\end{cases}\\). Giải bằng phương pháp thế hoặc cộng đại số:',
        formula: 'x = 25 - y \\Rightarrow 0.9(25-y) + 0.8y = 21 \\Leftrightarrow 22.5 - 0.9y + 0.8y = 21 \\Leftrightarrow 0.1y = 1.5',
        result: '\\(y = 15\\) (thỏa mãn) \\(\\Rightarrow x = 10\\) (thỏa mãn). Kết luận giá niêm yết tivi là 10 triệu đồng, tủ lạnh là 15 triệu đồng.'
      }
    ],
    finalAnswer: 'Tivi: 10 triệu đồng, Tủ lạnh: 15 triệu đồng',
    commonMistakes: [
      'Lập sai số tiền sau giảm giá thành nhân 0.1 và 0.2 (đây là số tiền được giảm chứ không phải tiền thực trả)',
      'Thiếu đơn vị (triệu đồng) và điều kiện dương cho ẩn số'
    ],
    reviewSuggestions: [
      'Ôn tập các bài toán phần trăm trong chương trình THCS',
      'Luyện tập giải nhanh hệ phương trình bậc nhất hai ẩn'
    ]
  },
  {
    id: 'math-s5',
    questionId: 'math-q5',
    recognition: 'Biểu thức A gồm ba phân thức với các mẫu thức lần lượt là \\(\\sqrt{x}-1\\), \\(\\sqrt{x}+1\\) và \\(x-1\\). Nhận thấy mẫu thức thứ ba có thể phân tích thành \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\). Đây cũng chính là mẫu thức chung (MTC) của cả ba phân thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định Mẫu thức chung (MTC)',
        explanation: 'Phân tích mẫu thức thứ ba ta được: \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\). Do đó, Mẫu thức chung của biểu thức là \\(MTC = (\\sqrt{x}-1)(\\sqrt{x}+1)\\).',
        formula: 'MTC = (\\sqrt{x}-1)(\\sqrt{x}+1)'
      },
      {
        order: 2,
        title: 'Quy đồng và thực hiện phép tính trên tử số',
        explanation: 'Quy đồng tử số của các phân thức thành phần theo MTC và đưa về cùng một mẫu số:',
        formula: 'A = \\frac{(\\sqrt{x}+1)(\\sqrt{x}+1) - 2(\\sqrt{x}-1) - 2}{(\\sqrt{x}-1)(\\sqrt{x}+1)}',
        result: 'Ta thu được biểu thức dạng chung có tử số là: \\((\\sqrt{x}+1)^2 - 2(\\sqrt{x}-1) - 2\\)'
      },
      {
        order: 3,
        title: 'Khai triển và thu gọn tử số',
        explanation: 'Khai triển các hằng đẳng thức và nhân phân phối ở tử số:',
        formula: 'Tử = (x + 2\\sqrt{x} + 1) - 2\\sqrt{x} + 2 - 2 = x + 1',
        result: 'Tử số sau khi thu gọn là: \\(x + 1\\)'
      },
      {
        order: 4,
        title: 'Viết kết quả rút gọn cuối cùng',
        explanation: 'Ghép tử số đã rút gọn vào mẫu thức chung để được biểu thức thu gọn:',
        formula: 'A = \\frac{x+1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{x+1}{x-1}',
        result: '\\(A = \\frac{x+1}{x-1}\\) với điều kiện \\(x \\ge 0, x \\neq 1\\)'
      }
    ],
    finalAnswer: '\\(A = \\frac{x+1}{x-1}\\)',
    commonMistakes: [
      'Phân tích sai mẫu thức x - 1 thành x(\\sqrt{x}-1)',
      'Sai dấu khi nhân phá ngoặc ở tử số, đặc biệt là cụm -2(\\sqrt{x}-1) thành -2\\sqrt{x}-2'
    ],
    reviewSuggestions: [
      'Ôn tập hằng đẳng thức hiệu hai bình phương',
      'Luyện tập nhân chia đa thức chứa căn'
    ]
  },
  {
    id: 'math-s6',
    questionId: 'math-q6',
    recognition: 'Biểu thức B có dạng một ngoặc nhân chia với một phân thức. Ta cần rút gọn cụm trong ngoặc trước bằng cách quy đồng mẫu thức. Nhận thấy mẫu thức thứ hai là \\(x+2\\sqrt{x}+1 = (\\sqrt{x}+1)^2\\). Mẫu thức chung trong ngoặc là \\((\\sqrt{x}+1)^2\\).',
    detailedSteps: [
      {
        order: 1,
        title: 'Quy đồng và rút gọn cụm trong ngoặc',
        explanation: 'Trong ngoặc thứ nhất, ta có MTC là \\((\\sqrt{x}+1)^2\\). Tiến hành quy đồng và trừ tử số:',
        formula: 'C_{1} = \\frac{1(\\sqrt{x}+1) - 2}{(\\sqrt{x}+1)^2} = \\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)^2}',
        result: 'Kết quả rút gọn ngoặc thứ nhất là \\(\\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)^2}\\)'
      },
      {
        order: 2,
        title: 'Phân tích phân thức bị chia',
        explanation: 'Phân thức chia ở ngoài ngoặc là \\(\\frac{\\sqrt{x}-1}{x-1}\\). Phân tích mẫu thức \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\) ta được:',
        formula: 'C_{2} = \\frac{\\sqrt{x}-1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1}',
        result: 'Kết quả phân tích cụm chia là \\(\\frac{1}{\\sqrt{x}+1}\\)'
      },
      {
        order: 3,
        title: 'Thực hiện phép chia B = Cụm_1 / Cụm_2',
        explanation: 'Phép chia tương đương với nhân nghịch đảo phân thức chia:',
        formula: 'B = \\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)^2} \\div \\frac{1}{\\sqrt{x}+1} = \\frac{\\sqrt{x}-1}{(\\sqrt{x}+1)^2} \\cdot (\\sqrt{x}+1)',
        result: 'Rút gọn thừa số chung \\(\\sqrt{x}+1\\) ở tử và mẫu ta được: \\(B = \\frac{\\sqrt{x}-1}{\\sqrt{x}+1}\\)'
      }
    ],
    finalAnswer: '\\(B = \\frac{\\sqrt{x}-1}{\\sqrt{x}+1}\\)',
    commonMistakes: [
      'Không nhận ra hằng đẳng thức x + 2\\sqrt{x} + 1 = (\\sqrt{x}+1)^2 dẫn đến quy đồng mẫu thức phức tạp',
      'Quên nhân nghịch đảo khi thực hiện phép chia phân thức'
    ],
    reviewSuggestions: [
      'Luyện tập hằng đẳng thức bình phương của một tổng',
      'Ôn tập phép toán nhân chia phân thức đại số'
    ]
  },
  {
    id: 'math-s7',
    questionId: 'math-q7',
    recognition: 'Bài toán yêu cầu rút gọn biểu thức Q rồi giải bất phương trình Q < 1. Để rút gọn Q, ta quy đồng cụm ngoặc thứ nhất với MTC là \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\), sau đó nhân nghịch đảo với phân thức chia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Rút gọn biểu thức trong ngoặc thứ nhất',
        explanation: 'Quy đồng hai phân thức trong ngoặc với MTC là \\((\\sqrt{x}-1)(\\sqrt{x}+1) = x-1\\):',
        formula: 'A_{Q} = \\frac{1(\\sqrt{x}+1) - 1(\\sqrt{x}-1)}{x-1} = \\frac{\\sqrt{x}+1-\\sqrt{x}+1}{x-1} = \\frac{2}{x-1}',
        result: 'Cụm trong ngoặc được rút gọn thành \\(\\frac{2}{x-1}\\)'
      },
      {
        order: 2,
        title: 'Thực hiện phép chia để rút gọn Q',
        explanation: 'Nhân cụm trong ngoặc đã rút gọn với nghịch đảo của phân thức chia:',
        formula: 'Q = \\frac{2}{x-1} \\cdot \\frac{x-1}{2\\sqrt{x}} = \\frac{1}{\\sqrt{x}}',
        result: 'Kết quả rút gọn biểu thức là \\(Q = \\frac{1}{\\sqrt{x}}\\)'
      },
      {
        order: 3,
        title: 'Giải bất phương trình Q < 1',
        explanation: 'Thay biểu thức Q đã rút gọn vào bất phương trình đề bài cho:',
        formula: '\\frac{1}{\\sqrt{x}} < 1 \\Leftrightarrow \\sqrt{x} > 1 \\Leftrightarrow x > 1',
        result: 'Tìm được điều kiện là \\(x > 1\\)'
      },
      {
        order: 4,
        title: 'Đối chiếu điều kiện xác định và kết luận',
        explanation: 'Đối chiếu giá trị tìm được với điều kiện xác định ban đầu của bài toán là \\(x > 0, x \\neq 1\\):',
        formula: 'x > 1 \\cap (x > 0, x \\neq 1) \\Rightarrow x > 1',
        result: 'Kết luận: Giá trị x thỏa mãn là \\(x > 1\\)'
      }
    ],
    finalAnswer: 'a) \\(Q = \\frac{1}{\\sqrt{x}}\\), b) \\(x > 1\\)',
    commonMistakes: [
      'Quy đồng sai tử số trong ngoặc: nhầm \\(\\sqrt{x}+1 - (\\sqrt{x}-1) = 0\\) thay vì 2',
      'Khi giải bất phương trình chứa mẫu thức quên điều kiện xác định x > 0'
    ],
    reviewSuggestions: [
      'Luyện tập giải bất phương trình chứa ẩn ở mẫu thức',
      'Ôn tập các phép biến đổi căn thức cơ bản'
    ]
  },
  {
    id: 'math-s8',
    questionId: 'math-q8',
    recognition: 'Yêu cầu rút gọn biểu thức M trước, sau đó tìm các giá trị nguyên của x để M nhận giá trị nguyên. Ở phần rút gọn, phân tích tử thức thứ nhất thành nhân tử bằng cách tách hạng tử hoặc nhẩm nghiệm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các đa thức thành nhân tử',
        explanation: 'Nhận thấy tử số của phân thức thứ nhất \\(x + 2\\sqrt{x} - 3\\) có thể tách thành \\((\\sqrt{x}-1)(\\sqrt{x}+3)\\). Mẫu số \\(x-\\sqrt{x} = \\sqrt{x}(\\sqrt{x}-1)\\).',
        formula: '\\frac{x+2\\sqrt{x}-3}{x-\\sqrt{x}} = \\frac{(\\sqrt{x}-1)(\\sqrt{x}+3)}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{\\sqrt{x}+3}{\\sqrt{x}}',
        result: 'Phân thức thứ nhất rút gọn thành \\(\\frac{\\sqrt{x}+3}{\\sqrt{x}}\\)'
      },
      {
        order: 2,
        title: 'Thực hiện phép chia để rút gọn M',
        explanation: 'Nhân nghịch đảo với phân thức chia:',
        formula: 'M = \\frac{\\sqrt{x}+3}{\\sqrt{x}} \\cdot \\frac{\\sqrt{x}}{\\sqrt{x}-1} = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1}',
        result: 'Biểu thức rút gọn là \\(M = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1}\\)'
      },
      {
        order: 3,
        title: 'Phân tích M để tìm x nguyên',
        explanation: 'Biến đổi biểu thức M về dạng có phần nguyên và phần phân thức có tử số là một hằng số:',
        formula: 'M = \\frac{(\\sqrt{x}-1) + 4}{\\sqrt{x}-1} = 1 + \\frac{4}{\\sqrt{x}-1}',
        result: 'Để M nhận giá trị nguyên với x nguyên, thì \\(\\frac{4}{\\sqrt{x}-1}\\) phải là số nguyên.'
      },
      {
        order: 4,
        title: 'Tìm các giá trị x thỏa mãn',
        explanation: 'Từ lập luận trên, \\(\\sqrt{x}-1\\) phải là ước của 4. Ước của 4 là \\(\\{\\pm 1, \\pm 2, \\pm 4\\}\\). Lập bảng giá trị:',
        formula: '\\sqrt{x}-1 \\in \\{-1, 1, -2, 2, -4, 4\\}',
        result: 'Tính toán tìm x: với \\(\\sqrt{x}-1=-1\\) thì \\(x=0\\). Với \\(\\sqrt{x}-1=1\\) thì \\(x=4\\). Với \\(\\sqrt{x}-1=2\\) thì \\(x=9\\). Với \\(\\sqrt{x}-1=4\\) thì \\(x=25\\). Các trường hợp khác loại do căn thức âm.'
      },
      {
        order: 5,
        title: 'Đối chiếu điều kiện xác định và kết luận',
        explanation: 'Đối chiếu với điều kiện xác định của đề bài là \\(x > 0, x \\neq 1\\). Giá trị \\(x = 0\\) không thỏa mãn.',
        formula: 'x \\in \\{4, 9, 25\\}',
        result: 'Kết luận: Các giá trị x nguyên cần tìm là x = 4, x = 9, x = 25.'
      }
    ],
    finalAnswer: 'a) \\(M = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1}\\), b) \\(x \\in \\{4, 9, 25\\}\\)',
    commonMistakes: [
      'Không đặt điều kiện x > 0 dẫn đến nhận cả giá trị x = 0 trong đáp số cuối',
      'Không rút gọn biểu thức M trước khi đi tìm x nguyên',
      'Tính sai các ước của 4 hoặc giải sai phương trình \\(\\sqrt{x}-1 = k\\)'
    ],
    reviewSuggestions: [
      'Luyện tập chuyên đề Tìm giá trị của ẩn để biểu thức nhận giá trị nguyên',
      'Ôn tập các phương pháp phân tích đa thức chứa căn thành nhân tử'
    ]
  }
];
