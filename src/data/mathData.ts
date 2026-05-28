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
    description: 'Dạng toán đại số kinh điển luôn chiếm 2 điểm (20% tổng số điểm) ở vị trí Câu 1 trong mọi đề thi tuyển sinh vào 10. Đề bài thường cho một biểu thức phức tạp gồm các phân thức đại số chứa căn bậc hai (thường là biến x), yêu cầu học sinh thực hiện rút gọn chính xác, sau đó vận dụng biểu thức rút gọn để giải quyết các câu hỏi phụ nâng cao như giải phương trình, tìm giá trị nguyên, so sánh hoặc tìm GTLN/GTNN.',
    exampleQuestionId: 'math-q1',
    recognitionSigns: [
      'Đề bài cho biểu thức chứa các căn thức bậc hai của biến \\( x \\) (ví dụ: \\( \\sqrt{x} \\)) kèm theo các phân thức đại số.',
      'Có nhiều phân thức phức tạp nằm trong ngoặc đơn nối với nhau bởi các phép toán cộng, trừ, nhân, chia.',
      'Các mẫu thức chứa biến thường có mối quan hệ nhân tử với nhau, ví dụ: \\( x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1) \\), \\( x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1) \\), hoặc \\( x + 2\\sqrt{x} = \\sqrt{x}(\\sqrt{x} + 2) \\).',
      'Yêu cầu đầu tiên luôn là: "Rút gọn biểu thức \\( A \\), \\( B \\), hoặc \\( P \\)".',
      'Các yêu cầu tiếp theo là các bài toán ứng dụng kết quả rút gọn: tính giá trị biểu thức, giải phương trình/bất phương trình, tìm giá trị nguyên của \\( x \\) để biểu thức nguyên, so sánh biểu thức với một số.'
    ],
    solvingSteps: [
      'Bước 1: Tìm điều kiện xác định (ĐKXĐ). Biểu thức dưới căn phải không âm (\\( x \\ge 0 \\)) và các mẫu thức phải khác 0.',
      'Bước 2: Phân tích các mẫu thức thành nhân tử để xác định Mẫu thức chung (MTC). Các hằng đẳng thức thường dùng: \\( a - b = (\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) \\).',
      'Bước 3: Quy đồng mẫu thức các phân thức trong từng cụm ngoặc. Thực hiện nhân cả tử và mẫu với nhân tử phụ tương ứng.',
      'Bước 4: Quy đồng mẫu thức, thực hiện phép tính ở tử số (phá ngoặc, nhân đơn thức/đa thức) giữ nguyên mẫu thức chung. Thu gọn tử số bằng cách nhóm các hạng tử đồng dạng.',
      'Bước 5: Phân tích tử số vừa thu gọn thành nhân tử để triệt tiêu các nhân tử chung với mẫu thức (nếu có).',
      'Bước 6: Thực hiện các phép toán nhân/chia ngoài ngoặc (nhân trực tiếp hoặc nhân nghịch đảo đối với phép chia phân thức) để thu được kết quả tối giản nhất.',
      'Bước 7: Sử dụng kết quả rút gọn tối giản để thực hiện câu phụ, đối chiếu kỹ kết quả tìm được với ĐKXĐ ban đầu trước khi kết luận.'
    ],
    commonMistakes: [
      'Bỏ sót hoặc không viết điều kiện xác định dẫn đến mất điểm trình bày hoặc lấy nhầm nghiệm không thỏa mãn.',
      'Sai dấu khi quy đồng mẫu thức, đặc biệt khi trước phân thức có dấu trừ \\( - \\) (quên đổi dấu toàn bộ tử số khi phá ngoặc).',
      'Rút gọn vội vã bằng cách triệt tiêu các số hạng đơn lẻ ở tử và mẫu khi chúng chưa được đưa về dạng tích (ví dụ: triệt tiêu \\( \\sqrt{x} \\) trong biểu thức \\( \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\)).',
      'Phép chia phân thức nhưng quên đảo ngược tử và mẫu của phân thức chia khi thực hiện phép nhân nghịch đảo.',
      'Khi làm câu phụ tìm giá trị nguyên của \\( x \\) để biểu thức nguyên, quên không đối chiếu giá trị \\( x \\) tìm được với điều kiện \\( x \\ge 0 \\) và các điều kiện mẫu khác 0.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        name: 'Dạng 1: Tính giá trị biểu thức căn không chứa biến',
        example: 'Tính giá trị biểu thức: \\( A = \\sqrt{18} - 2\\sqrt{50} + 3\\sqrt{8} \\)',
        note: 'Phân tích các số dưới căn thành tích có chứa số chính phương để đưa ra ngoài dấu căn, sau đó thực hiện cộng trừ các căn thức đồng dạng.'
      },
      {
        name: 'Dạng 2: Tìm điều kiện xác định của biểu thức phân thức chứa căn',
        example: 'Tìm điều kiện xác định của biểu thức: \\( P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{\\sqrt{x}} \\)',
        note: 'Đặt điều kiện cho các biểu thức dưới căn không âm (\\( x \\ge 0 \\)) và tất cả các mẫu thức khác 0 (\\( \\sqrt{x}-1 \\neq 0 \\), \\( \\sqrt{x}+1 \\neq 0 \\), và \\( \\sqrt{x} \\neq 0 \\)).'
      },
      {
        name: 'Dạng 3: Rút gọn biểu thức đơn giản có hai mẫu liên hợp',
        example: 'Rút gọn biểu thức: \\( A = \\frac{1}{\\sqrt{x}-1} - \\frac{1}{\\sqrt{x}+1} \\)',
        note: 'Quy đồng mẫu thức với mẫu chung là tích hai mẫu liên hợp \\( (\\sqrt{x}-1)(\\sqrt{x}+1) = x-1 \\), quy đồng tử số rồi rút gọn.'
      },
      {
        name: 'Dạng 4: Rút gọn biểu thức chứa phép nhân hoặc chia phân thức',
        example: 'Rút gọn biểu thức: \\( P = \\frac{x-4}{\\sqrt{x}-2} : \\frac{\\sqrt{x}+2}{\\sqrt{x}} \\)',
        note: 'Phân tích tử và mẫu thành nhân tử (áp dụng hằng đẳng thức hiệu hai bình phương \\( x-4 = (\\sqrt{x}-2)(\\sqrt{x}+2) \\)), sau đó chuyển phép chia thành nhân với phân thức nghịch đảo.'
      },
      {
        name: 'Dạng 5: Rút gọn rồi tính giá trị của biểu thức tại một điểm cụ thể',
        example: 'Cho biểu thức \\( P = \\frac{\\sqrt{x}}{\\sqrt{x}-3} \\). Tính giá trị của \\( P \\) tại \\( x = 4 \\).',
        note: 'Thay giá trị \\( x = 4 \\) (đã kiểm tra thỏa mãn ĐKXĐ \\( x \\ge 0, x \\neq 9 \\)) vào biểu thức rút gọn để tính ra kết quả số cụ thể.'
      },
      {
        name: 'Dạng 6: Rút gọn rồi giải phương trình hoặc bất phương trình theo biểu thức',
        example: 'Tìm giá trị của \\( x \\) để biểu thức rút gọn \\( P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} \\) bằng \\( \\frac{1}{3} \\) (tức là giải phương trình \\( P = \\frac{1}{3} \\)).',
        note: 'Cho biểu thức rút gọn bằng giá trị \\( k \\), quy đồng khử mẫu giải phương trình tìm \\( x \\), sau đó đối chiếu nghiêm ngặt kết quả với ĐKXĐ ban đầu.'
      },
      {
        name: 'Dạng 7: Rút gọn rồi tìm x nguyên để biểu thức nhận giá trị nguyên',
        example: 'Tìm các số nguyên \\( x \\) để biểu thức \\( P = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1} \\) nhận giá trị nguyên.',
        note: 'Tách tử số theo mẫu số thành dạng \\( P = 1 + \\frac{4}{\\sqrt{x}-1} \\). Để \\( P \\) nguyên thì mẫu thức \\( \\sqrt{x}-1 \\) phải là ước nguyên của tử số \\( 4 \\). Lập bảng tìm ước số để giải tìm \\( x \\) nguyên.'
      },
      {
        name: 'Dạng 8: Rút gọn rồi so sánh hoặc chứng minh bất đẳng thức, tìm GTLN/GTNN',
        example: 'Chứng minh biểu thức \\( P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} < 1 \\) với mọi \\( x \\ge 0, x \\neq 1 \\).',
        note: 'Xét hiệu \\( P - 1 = \\frac{-3}{\\sqrt{x}+2} \\). Vì tử số luôn âm (\\( -3 < 0 \\)) và mẫu số luôn dương (\\( \\sqrt{x}+2 > 0 \\)), nên hiệu luôn âm, suy ra \\( P < 1 \\). Hoặc áp dụng bất đẳng thức Cô-si để tìm GTLN/GTNN.'
      }
    ]
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
    content: 'Cho biểu thức \\(P = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}\\right) \\div \\left(\\frac{1}{\\sqrt{x}+1} + \\frac{2}{x-1}\\right)\\) với \\(x > 0, x \\neq 1\\).\n\n1. Rút gọn biểu thức \\(P\\).\n\n2. Tìm \\(x\\) để \\(P = -\\frac{3}{2}\\).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'P = \\frac{x - 1}{\\sqrt{x}}; x = \\frac{1}{4}',
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
    content: 'Cho phương trình bậc hai \\(x^2 - 2(m + 1)x + m^2 + 4 = 0\\).\n\n1. Tìm \\(m\\) để phương trình có hai nghiệm phân biệt \\(x_1, x_2\\).\n\n2. Tìm \\(m\\) để hai nghiệm thỏa mãn \\(x_1^2 + x_2^2 - x_1x_2 = 7\\).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'm = -4 + \\sqrt{31}',
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
    content: 'Cho đường tròn \\((O, R)\\) đường kính \\(AB\\). Lấy điểm \\(C\\) trên đường tròn sao cho \\(AC < BC\\). Kẻ đường cao \\(CH\\) của tam giác \\(ABC\\). Gọi \\(I\\) là trung điểm của \\(CH\\). Đường thẳng qua \\(A\\) vuông góc với \\(AB\\) cắt tia \\(BI\\) tại \\(K\\). Chứng minh tứ giác \\(AHCK\\) là tứ giác nội tiếp.',
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
    content: 'Cho biểu thức \\(A = \\frac{\\sqrt{x} + 1}{\\sqrt{x} - 1} - \\frac{2}{x - 1}\\) với \\(x \\ge 0, x \\neq 1\\).\n\n1. Rút gọn biểu thức \\(A\\).\n\n2. Tính giá trị của \\(A\\) khi \\(x = 4\\).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}; A(4) = \\frac{7}{3}',
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
    content: 'Cho biểu thức \\(B = \\left(\\frac{1}{\\sqrt{x} - 2} + \\frac{1}{\\sqrt{x} + 2}\\right) \\cdot \\frac{x - 4}{2\\sqrt{x}}\\) với \\(x > 0, x \\neq 4\\).\n\n1. Rút gọn biểu thức \\(B\\).\n\n2. Tìm \\(x\\) để \\(B = 2\\).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'B = 1; không có giá trị \\(x\\) thỏa mãn \\(B = 2\\)',
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
    content: 'Cho biểu thức \\(C = \\left(\\frac{\\sqrt{x}}{\\sqrt{x} + 1} + \\frac{1}{x + \\sqrt{x}}\\right) \\div \\left(\\frac{1}{\\sqrt{x}} - \\frac{1}{\\sqrt{x} + 1}\\right)\\) với \\(x > 0\\).\n\n1. Rút gọn biểu thức \\(C\\).\n\n2. Tìm \\(x\\) để \\(C = 6\\).',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '\\(C = x + 1\\); \\(x = 5\\)',
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
    content: 'Giải hệ phương trình: \\(2x + y = 7\\) và \\(x - y = 2\\).',
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
  },
  {
    id: 'math-q9',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Tính giá trị của biểu thức số sau:\n\n\\(A = \\sqrt{18} - 2\\sqrt{50} + 3\\sqrt{8}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A = -\\sqrt{2}',
    acceptedAnswers: ['-√2', '-sqrt(2)', '-sqrt2', 'A=-√2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'expression', placeholder: '-√2', hint: 'Nhập giá trị rút gọn của biểu thức A.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '-√2'
    },
    acceptedFinalAnswers: [
      { A: '-sqrt(2)' }
    ]
  },
  {
    id: 'math-q10',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Tìm điều kiện xác định của biểu thức sau:\n\n\\(P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{\\sqrt{x}}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x > 0, x \\neq 1',
    acceptedAnswers: ['x>0, x!=1', 'x > 0 và x khác 1', 'x > 0, x ≠ 1', 'x>0; x khác 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'dkxd', label: 'Điều kiện xác định:', valueType: 'text', placeholder: 'x > 0, x ≠ 1', hint: 'Nhập điều kiện xác định của biến x.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      dkxd: 'x > 0, x ≠ 1'
    },
    acceptedFinalAnswers: [
      { dkxd: 'x>0, x!=1' }
    ]
  },
  {
    id: 'math-q11',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(M = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1}\\) với \\(x \\ge 0, x \\neq 1\\).\n\nTìm các giá trị số nguyên của \\(x\\) để \\(M\\) nhận giá trị nguyên.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'x \\in \\{0, 4, 9, 25\\}',
    acceptedAnswers: ['0, 4, 9, 25', 'x = 0, 4, 9, 25', '{0, 4, 9, 25}'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'x', label: 'Các giá trị x nguyên:', valueType: 'text', placeholder: '0, 4, 9, 25', hint: 'Nhập các giá trị x tìm được, cách nhau bằng dấu phẩy.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      x: '0, 4, 9, 25'
    }
  },
  {
    id: 'math-q12',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(Q = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2}\\) với \\(x \\ge 0\\).\n\n1. Chứng minh \\(Q < 1\\) với mọi \\(x \\ge 0\\).\n\n2. Tìm khoảng giá trị của \\(x\\) để \\(Q < 0\\).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Q < 1; 0 \\le x < 1',
    acceptedAnswers: ['0 <= x < 1', '0 < x < 1', 'x < 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'compare', label: 'Kết luận so sánh:', valueType: 'text', placeholder: 'Q < 1' },
        { key: 'range', label: 'Giá trị x để Q < 0:', valueType: 'text', placeholder: '0 <= x < 1' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      compare: 'Q < 1',
      range: '0 <= x < 1'
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
        explanation: 'Theo đề bài, biểu thức xác định khi \\(x > 0\\) và \\(x \\neq 1\\). Điều kiện này phải dùng để đối chiếu nghiệm cuối cùng.',
        formula: 'x > 0, \\quad x \\neq 1',
        result: 'Điều kiện xác định là \\(x > 0, \\quad x \\neq 1\\).'
      },
      {
        order: 2,
        title: 'Rút gọn ngoặc thứ nhất',
        explanation: 'Đặt \\(A = \\frac{\\sqrt{x}}{\\sqrt{x} - 1} - \\frac{1}{x - \\sqrt{x}}\\). Vì \\(x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)\\), mẫu thức chung là \\(\\sqrt{x}(\\sqrt{x} - 1)\\).',
        formula: 'A = \\frac{x}{\\sqrt{x}(\\sqrt{x}-1)} - \\frac{1}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{x-1}{\\sqrt{x}(\\sqrt{x}-1)}',
        result: 'Rút gọn tiếp ta được: \\(A = \\frac{\\sqrt{x}+1}{\\sqrt{x}}\\).'
      },
      {
        order: 3,
        title: 'Rút gọn ngoặc thứ hai',
        explanation: 'Đặt \\(B = \\frac{1}{\\sqrt{x} + 1} + \\frac{2}{x - 1}\\). Vì \\(x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)\\), ta quy đồng theo mẫu này.',
        formula: 'B = \\frac{\\sqrt{x}-1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} + \\frac{2}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x}+1}{(\\sqrt{x}-1)(\\sqrt{x}+1)}',
        result: 'Rút gọn ta được: \\(B = \\frac{1}{\\sqrt{x}-1}\\).'
      },
      {
        order: 4,
        title: 'Thực hiện phép chia để rút gọn P',
        explanation: 'Ta có \\(P = A \\div B\\). Thực hiện phép chia bằng cách nhân với phân thức nghịch đảo.',
        formula: 'P = \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\cdot (\\sqrt{x}-1) = \\frac{(\\sqrt{x}+1)(\\sqrt{x}-1)}{\\sqrt{x}}',
        result: 'Thu được kết quả rút gọn: \\(P = \\frac{x - 1}{\\sqrt{x}}\\).'
      },
      {
        order: 5,
        title: 'Tìm x khi P = -3/2',
        explanation: 'Đặt \\(t = \\sqrt{x}\\) với \\(t > 0, t \\neq 1\\). Phương trình trở thành \\(\\frac{t^2 - 1}{t} = -\\frac{3}{2}\\).',
        formula: '2(t^2 - 1) = -3t \\Rightarrow 2t^2 + 3t - 2 = 0 \\Rightarrow (2t - 1)(t + 2) = 0',
        result: 'Vì \\(t > 0\\) nên \\(t = \\frac{1}{2}\\), suy ra \\(x = \\frac{1}{4}\\) (thỏa mãn điều kiện).'
      }
    ],
    finalAnswer: '\\(P = \\frac{x - 1}{\\sqrt{x}}\\); \\(x = \\frac{1}{4}\\).',
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
        explanation: 'Với phương trình \\(x^2 - 2(m + 1)x + m^2 + 4 = 0\\), ta dùng biệt thức \\(\\Delta\'\\).',
        formula: "\\Delta' = (m + 1)^2 - (m^2 + 4) = 2m - 3",
        result: 'Phương trình có hai nghiệm phân biệt khi \\(\\Delta\' > 0 \\Leftrightarrow m > \\frac{3}{2}\\).'
      },
      {
        order: 2,
        title: 'Áp dụng Vi-ét',
        explanation: 'Theo hệ thức Vi-ét, ta có tổng và tích hai nghiệm là:',
        formula: 'x_1 + x_2 = 2(m + 1); \\quad x_1 x_2 = m^2 + 4',
        result: 'Ta sẽ thay thế tổng và tích này vào điều kiện đề bài.'
      },
      {
        order: 3,
        title: 'Biến đổi điều kiện nghiệm',
        explanation: 'Biến đổi biểu thức đối xứng: \\(x_1^2 + x_2^2 - x_1x_2 = (x_1 + x_2)^2 - 3x_1x_2\\).',
        formula: '[2(m + 1)]^2 - 3(m^2 + 4) = 7 \\Rightarrow 4(m^2 + 2m + 1) - 3m^2 - 12 = 7',
        result: 'Thu gọn ta được phương trình: \\(m^2 + 8m - 15 = 0\\).'
      },
      {
        order: 4,
        title: 'Giải và đối chiếu',
        explanation: 'Giải phương trình bậc hai đối với \\(m\\) rồi đối chiếu điều kiện \\(m > \\frac{3}{2}\\).',
        formula: 'm = -4 \\pm \\sqrt{31}',
        result: 'Do \\(m > 1.5\\), chỉ có giá trị \\(m = -4 + \\sqrt{31}\\) thỏa mãn.'
      }
    ],
    finalAnswer: '\\(m = -4 + \\sqrt{31}\\).',
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
        explanation: 'Gọi \\(x\\) là giá tivi, \\(y\\) là giá tủ lạnh (đơn vị: triệu đồng).',
        formula: 'x > 0, \\quad y > 0',
        result: 'Điều kiện: cả hai ẩn đều phải là số dương.'
      },
      {
        order: 2,
        title: 'Lập phương trình tổng giá ban đầu',
        explanation: 'Tổng giá niêm yết ban đầu của tivi và tủ lạnh là 25 triệu đồng.',
        formula: 'x + y = 25',
        result: 'Ta có phương trình thứ nhất.'
      },
      {
        order: 3,
        title: 'Lập phương trình sau giảm giá',
        explanation: 'Tivi giảm 10% (còn \\(0.9x\\)), tủ lạnh giảm 20% (còn \\(0.8y\\)). Khách trả 21 triệu đồng.',
        formula: '0.9x + 0.8y = 21',
        result: 'Ta có phương trình thứ hai.'
      },
      {
        order: 4,
        title: 'Giải hệ và kết luận',
        explanation: 'Giải hệ phương trình gồm (1) và (2):',
        formula: '\\begin{cases} x + y = 25 \\\\ 0.9x + 0.8y = 21 \\end{cases} \\Rightarrow \\begin{cases} 0.9x + 0.9y = 22.5 \\\\ 0.9x + 0.8y = 21 \\end{cases} \\Rightarrow \\begin{cases} y = 15 \\\\ x = 10 \\end{cases}',
        result: 'Giá niêm yết ban đầu của tivi là 10 triệu đồng, tủ lạnh là 15 triệu đồng.'
      }
    ],
    finalAnswer: 'Tivi: 10 triệu đồng; Tủ lạnh: 15 triệu đồng.',
    commonMistakes: [
      'Nhầm giảm 10% thành giá còn 0.1x thay vị 0.9x.',
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
        explanation: 'Ta cần chứng minh bốn điểm \\(A, H, C, K\\) cùng thuộc một đường tròn.',
        formula: '\\text{Xét tứ giác } AHCK',
        result: 'Tứ giác cần xét là \\(AHCK\\).'
      },
      {
        order: 2,
        title: 'Tìm các góc đặc biệt',
        explanation: 'Vì \\(CH \\perp AB\\) tại \\(H\\), ta có \\(\\widehat{AHC} = 90^\\circ\\). Vì \\(AK \\perp AB\\) tại \\(A\\), ta có \\(\\widehat{KAC} = 90^\\circ\\) (chứng minh thông qua tính chất đường trung bình hoặc song song).',
        formula: '\\widehat{AHC} = 90^\\circ, \\quad \\widehat{KAC} = 90^\\circ',
        result: 'Ta thu được hai góc đối đều bằng \\(90^\\circ\\).'
      },
      {
        order: 3,
        title: 'Kết luận',
        explanation: 'Tứ giác \\(AHCK\\) có tổng hai góc đối diện bằng \\(180^\\circ\\):',
        formula: '\\widehat{AHC} + \\widehat{KAC} = 90^\\circ + 90^\\circ = 180^\\circ',
        result: 'Do đó, \\(AHCK\\) là tứ giác nội tiếp.'
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
        explanation: 'Ta có mẫu thức chung là \\(x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)\\).',
        formula: 'x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)',
        result: 'Mẫu thức chung của biểu thức là \\(x - 1\\).'
      },
      {
        order: 2,
        title: 'Quy đồng và rút gọn',
        explanation: 'Quy đồng hai phân thức của \\(A\\) về mẫu chung \\(x - 1\\):',
        formula: 'A = \\frac{(\\sqrt{x} + 1)^2}{x - 1} - \\frac{2}{x - 1} = \\frac{x + 2\\sqrt{x} + 1 - 2}{x - 1}',
        result: 'Kết quả rút gọn: \\(A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}\\).'
      },
      {
        order: 3,
        title: 'Tính giá trị tại x = 4',
        explanation: 'Thay \\(x = 4\\) (thỏa mãn điều kiện) vào biểu thức \\(A\\) đã rút gọn, khi đó \\(\\sqrt{x} = 2\\).',
        formula: 'A(4) = \\frac{4 + 2 \\cdot 2 - 1}{4 - 1} = \\frac{7}{3}',
        result: 'Giá trị thu được là \\(A(4) = \\frac{7}{3}\\).'
      }
    ],
    finalAnswer: '\\(A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}\\); \\(A(4) = \\frac{7}{3}\\).',
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
        explanation: 'Quy đồng biểu thức trong ngoặc: \\(\\frac{1}{\\sqrt{x} - 2} + \\frac{1}{\\sqrt{x} + 2}\\).',
        formula: '\\frac{\\sqrt{x} + 2 + \\sqrt{x} - 2}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} = \\frac{2\\sqrt{x}}{x - 4}',
        result: 'Biểu thức trong ngoặc được rút gọn thành: \\(\\frac{2\\sqrt{x}}{x - 4}\\).'
      },
      {
        order: 2,
        title: 'Nhân với phân thức còn lại',
        explanation: 'Thực hiện phép nhân biểu thức vừa rút gọn với phân thức thứ hai:',
        formula: 'B = \\frac{2\\sqrt{x}}{x - 4} \\cdot \\frac{x - 4}{2\\sqrt{x}}',
        result: 'Tử thức và mẫu thức triệt tiêu hoàn toàn, thu được: \\(B = 1\\).'
      },
      {
        order: 3,
        title: 'Xử lý câu phụ',
        explanation: 'Vì biểu thức \\(B\\) luôn rút gọn về hằng số \\(1\\) với mọi \\(x > 0, x \\neq 4\\), nên phương trình \\(B = 2\\) trở thành \\(1 = 2\\) (vô nghiệm).',
        formula: '1 = 2 \\quad (\\text{Vô lý})',
        result: 'Do đó không tồn tại giá trị nào của \\(x\\) thỏa mãn yêu cầu.'
      }
    ],
    finalAnswer: '\\(B = 1\\); không có \\(x\\) thỏa \\(B = 2\\).',
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
        explanation: 'Đặt \\(M = \\frac{\\sqrt{x}}{\\sqrt{x} + 1} + \\frac{1}{x + \\sqrt{x}}\\). Với mẫu chung là \\(x + \\sqrt{x} = \\sqrt{x}(\\sqrt{x} + 1)\\), ta quy đồng:',
        formula: 'M = \\frac{\\sqrt{x} \\cdot \\sqrt{x} + 1}{\\sqrt{x}(\\sqrt{x} + 1)} = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)}',
        result: 'Cụm thứ nhất rút gọn thành: \\(M = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)}\\).'
      },
      {
        order: 2,
        title: 'Rút gọn cụm thứ hai',
        explanation: 'Đặt \\(N = \\frac{1}{\\sqrt{x}} - \\frac{1}{\\sqrt{x} + 1}\\). Quy đồng theo mẫu chung là \\(\\sqrt{x}(\\sqrt{x} + 1)\\):',
        formula: 'N = \\frac{\\sqrt{x} + 1 - \\sqrt{x}}{\\sqrt{x}(\\sqrt{x} + 1)} = \\frac{1}{\\sqrt{x}(\\sqrt{x} + 1)}',
        result: 'Cụm thứ hai rút gọn thành: \\(N = \\frac{1}{\\sqrt{x}(\\sqrt{x} + 1)}\\).'
      },
      {
        order: 3,
        title: 'Thực hiện phép chia',
        explanation: 'Ta thực hiện phép chia \\(C = M \\div N\\) bằng cách nhân nghịch đảo:',
        formula: 'C = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)} \\cdot \\frac{\\sqrt{x}(\\sqrt{x} + 1)}{1}',
        result: 'Rút gọn hoàn toàn ta được: \\(C = x + 1\\).'
      },
      {
        order: 4,
        title: 'Tìm x khi C = 6',
        explanation: 'Thay biểu thức \\(C\\) đã rút gọn vào phương trình \\(C = 6\\):',
        formula: 'x + 1 = 6 \\Rightarrow x = 5',
        result: 'Giá trị \\(x = 5\\) thỏa mãn điều kiện xác định \\(x > 0\\).'
      }
    ],
    finalAnswer: '\\(C = x + 1\\); \\(x = 5\\).',
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
        explanation: 'Ta có hệ phương trình: \\(\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}\\).',
        formula: '\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}',
        result: 'Nhận thấy hệ số của ẩn \\(y\\) đối nhau nên có thể cộng hai vế phương trình để khử \\(y\\).'
      },
      {
        order: 2,
        title: 'Khử ẩn y',
        explanation: 'Cộng từng vế của hai phương trình trong hệ ta được:',
        formula: '(2x + y) + (x - y) = 7 + 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3',
        result: 'Tìm được giá trị đầu tiên: \\(x = 3\\).'
      },
      {
        order: 3,
        title: 'Tìm y và kết luận',
        explanation: 'Thay \\(x = 3\\) vào phương trình thứ hai \\(x - y = 2\\) để tìm \\(y\\):',
        formula: '3 - y = 2 \\Rightarrow y = 1',
        result: 'Nghiệm của hệ phương trình là \\((x; y) = (3; 1)\\).'
      }
    ],
    finalAnswer: '\\(x = 3\\); \\(y = 1\\).',
    commonMistakes: [
      'Cộng hệ nhưng đổi dấu sai.',
      'Tìm x xong quên tìm y.',
      'Kết luận nghiệm sai thứ tự.'
    ],
    reviewSuggestions: [
      'Ôn phương pháp cộng đại số.',
      'Luyện kiểm tra nghiệm bằng cách thay lại vào hệ.'
    ]
  },
  {
    id: 'math-s9',
    questionId: 'math-q9',
    recognition: 'Đây là bài toán rút gọn biểu thức số không chứa biến. Ta phân tích các số dưới căn thành tích có chứa số chính phương để đưa ra ngoài dấu căn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các căn thức',
        explanation: 'Ta phân tích các số dưới dấu căn thành tích của một số chính phương với số nhỏ nhất có thể:',
        formula: '\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}; \\quad \\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}; \\quad \\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}',
        result: 'Đưa thừa số ra ngoài dấu căn: \\(3\\sqrt{2}, 5\\sqrt{2}, 2\\sqrt{2}\\).'
      },
      {
        order: 2,
        title: 'Thay thế và rút gọn',
        explanation: 'Thay các giá trị vừa tính vào biểu thức ban đầu và thực hiện phép cộng trừ các căn thức đồng dạng:',
        formula: 'A = 3\\sqrt{2} - 2 \\cdot (5\\sqrt{2}) + 3 \\cdot (2\\sqrt{2}) = 3\\sqrt{2} - 10\\sqrt{2} + 6\\sqrt{2}',
        result: 'A = (3 - 10 + 6)\\sqrt{2} = -\\sqrt{2}.'
      }
    ],
    finalAnswer: '\\(A = -\\sqrt{2}\\).',
    commonMistakes: [
      'Nhầm lẫn khi nhân hệ số ngoài căn (quên nhân 2 với 5, hoặc 3 với 2).',
      'Cộng trừ sai phần hệ số nguyên.'
    ],
    reviewSuggestions: [
      'Luyện kỹ năng đưa thừa số ra ngoài/vào trong dấu căn bậc hai.',
      'Chú ý tính toán cẩn thận phần hệ số.'
    ]
  },
  {
    id: 'math-s10',
    questionId: 'math-q10',
    recognition: 'Đây là bài toán tìm điều kiện xác định (ĐKXĐ). Biểu thức chứa căn thức bậc hai và chứa mẫu thức, do đó cần điều kiện để căn thức có nghĩa và mẫu thức khác 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xét các điều kiện của căn thức bậc hai',
        explanation: 'Biểu thức chứa căn thức bậc hai \\(\\sqrt{x}\\). Để căn thức này xác định, ta cần biểu thức dưới căn không âm:',
        formula: 'x \\ge 0',
        result: 'Điều kiện 1: \\(x \\ge 0\\).'
      },
      {
        order: 2,
        title: 'Xét điều kiện để các mẫu thức khác 0',
        explanation: 'Các mẫu thức trong biểu thức bao gồm: \\(\\sqrt{x}-1\\), \\(\\sqrt{x}+1\\) và mẫu thức ngoài cùng là \\(\\sqrt{x}\\). Ta cần các mẫu thức này đồng thời khác 0:',
        formula: '\\begin{cases} \\sqrt{x}-1 \\neq 0 \\\\ \\sqrt{x}+1 \\neq 0 \\\\ \\sqrt{x} \\neq 0 \\end{cases} \\Rightarrow \\begin{cases} \\sqrt{x} \\neq 1 \\\\ \\sqrt{x} \\neq -1 \\text{ (luôn đúng)} \\\\ x \\neq 0 \\end{cases} \\Rightarrow \\begin{cases} x \\neq 1 \\\\ x \\neq 0 \\end{cases}',
        result: 'Điều kiện 2: \\(x \\neq 0\\) và \\(x \\neq 1\\).'
      },
      {
        order: 3,
        title: 'Kết hợp các điều kiện',
        explanation: 'Kết hợp điều kiện từ cả căn thức và các mẫu thức:',
        formula: 'x \\ge 0, \\ x \\neq 0, \\ x \\neq 1 \\Rightarrow x > 0, \\ x \\neq 1',
        result: 'Điều kiện xác định của biểu thức P là \\(x > 0\\) và \\(x \\neq 1\\).'
      }
    ],
    finalAnswer: '\\(x > 0\\) và \\(x \\neq 1\\).',
    commonMistakes: [
      'Quên điều kiện mẫu thức \\(\\sqrt{x} \\neq 0\\) nằm ở phần chia hoặc phần mẫu chung ngoài.',
      'Nhầm lẫn giữa điều kiện lớn hơn hoặc bằng 0 với lớn hơn hẳn 0.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: căn dưới mẫu phải có điều kiện > 0.',
      'Luôn liệt kê đầy đủ tất cả các mẫu số xuất hiện trong đề bài.'
    ]
  },
  {
    id: 'math-s11',
    questionId: 'math-q11',
    recognition: 'Đây là dạng toán tìm giá trị nguyên của biến để biểu thức nhận giá trị nguyên. Ta sử dụng phương pháp chia tử cho mẫu để tách phần nguyên và phần phân thức, sau đó tìm ước của tử số.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tách biểu thức thành phần nguyên và phân thức',
        explanation: 'Ta biến đổi tử thức \\(\\sqrt{x}+3\\) xuất hiện lượng giống mẫu thức \\(\\sqrt{x}-1\\):',
        formula: 'M = \\frac{\\sqrt{x}-1+4}{\\sqrt{x}-1} = \\frac{\\sqrt{x}-1}{\\sqrt{x}-1} + \\frac{4}{\\sqrt{x}-1} = 1 + \\frac{4}{\\sqrt{x}-1}',
        result: 'Tách được: \\(M = 1 + \\frac{4}{\\sqrt{x}-1}\\).'
      },
      {
        order: 2,
        title: 'Lập luận điều kiện để biểu thức nguyên',
        explanation: 'Để \\(M\\) có giá trị nguyên khi \\(x\\) là số nguyên, ta cần phân thức \\(\\frac{4}{\\sqrt{x}-1}\\) nhận giá trị nguyên. Do đó, \\(\\sqrt{x}-1\\) phải là ước của 4.',
        formula: '\\sqrt{x}-1 \\in \\text{Ư}(4) = \\{1; -1; 2; -2; 4; -4\\}',
        result: 'Các giá trị có thể có của mẫu thức là: \\(\\pm 1, \\pm 2, \\pm 4\\).'
      },
      {
        order: 3,
        title: 'Lập bảng giá trị để giải tìm x',
        explanation: 'Ta giải từng phương trình với từng ước số để tìm giá trị của x và đối chiếu điều kiện xác định (\\(x \\ge 0, x \\neq 1\\)):',
        formula: '\\begin{array}{|c|c|c|c|c|c|c|} \\hline \\sqrt{x}-1 & 1 & -1 & 2 & -2 & 4 & -4 \\\\ \\hline \\sqrt{x} & 2 & 0 & 3 & -1 \\text{ (loại)} & 5 & -3 \\text{ (loại)} \\\\ \\hline x & 4 & 0 & 9 & - & 25 & - \\\\ \\hline \\text{Đối chiếu ĐKXĐ} & \\text{nhận} & \\text{nhận} & \\text{nhận} & - & \\text{nhận} & - \\\\ \\hline \\end{array}',
        result: 'Các giá trị tìm được thỏa mãn là: \\(x \\in \\{0; 4; 9; 25\\}\\).'
      }
    ],
    finalAnswer: '\\(x \\in \\{0, 4, 9, 25\\}\\).',
    commonMistakes: [
      'Quên đối chiếu giá trị \\(x\\) tìm được với điều kiện xác định (đặc biệt là giá trị biên hoặc nghiệm không thỏa mẫu).',
      'Thiếu các ước số âm (quên xét ước âm như -1, -2, -4).',
      'Để giá trị căn bằng số âm dẫn đến tìm ra nghiệm sai.'
    ],
    reviewSuggestions: [
      'Luôn lập bảng giá trị rõ ràng để tránh tính toán nhầm lẫn.',
      'Nhớ đối chiếu điều kiện xác định ở bước kết luận cuối cùng.'
    ]
  },
  {
    id: 'math-s12',
    questionId: 'math-q12',
    recognition: 'Đây là bài toán rút gọn kết hợp câu hỏi phụ dạng so sánh biểu thức với một số và giải bất phương trình chứa ẩn dưới căn thức bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'So sánh Q với 1 bằng cách xét hiệu',
        explanation: 'Để so sánh \\(Q\\) với 1, ta lập hiệu \\(Q - 1\\):',
        formula: 'Q - 1 = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} - 1 = \\frac{\\sqrt{x}-1 - (\\sqrt{x}+2)}{\\sqrt{x}+2} = \\frac{-3}{\\sqrt{x}+2}',
        result: 'Hiệu thu gọn là \\(\\frac{-3}{\\sqrt{x}+2}\\).'
      },
      {
        order: 2,
        title: 'Biện luận dấu của hiệu',
        explanation: 'Vì \\(x \\ge 0\\) nên \\(\\sqrt{x} \\ge 0 \\Rightarrow \\sqrt{x}+2 \\ge 2 > 0\\). Số tử số là -3 là số âm. Do đó:',
        formula: '\\frac{-3}{\\sqrt{x}+2} < 0 \\Rightarrow Q - 1 < 0 \\Rightarrow Q < 1',
        result: 'Vậy \\(Q < 1\\) với mọi \\(x \\ge 0\\).'
      },
      {
        order: 3,
        title: 'Giải bất phương trình Q < 0',
        explanation: 'Ta giải bất phương trình: \\(\\frac{\\sqrt{x}-1}{\\sqrt{x}+2} < 0\\). Vì mẫu thức \\(\\sqrt{x}+2 > 0\\) với mọi \\(x \\ge 0\\), bất phương trình tương đương với tử thức nhỏ hơn 0:',
        formula: '\\sqrt{x}-1 < 0 \\Rightarrow \\sqrt{x} < 1 \\Rightarrow x < 1',
        result: 'Bất phương trình tương đương với \\(x < 1\\).'
      },
      {
        order: 4,
        title: 'Kết hợp điều kiện xác định',
        explanation: 'Kết hợp nghiệm \\(x < 1\\) với điều kiện xác định ban đầu \\(x \\ge 0\\):',
        formula: '0 \\le x < 1',
        result: 'Khoảng giá trị của x cần tìm là \\(0 \\le x < 1\\).'
      }
    ],
    finalAnswer: '\\(Q < 1\\); \\(0 \\le x < 1\\).',
    commonMistakes: [
      'Quên kết hợp điều kiện xác định \\(x \\ge 0\\) dẫn đến ghi kết quả sai lệch như \\(x < 1\\) (thiếu cận dưới 0).',
      'Xét hiệu so sánh nhưng nhân chéo phân thức khi chưa biết dấu của mẫu số (ở đây mẫu số luôn dương nên an toàn, nhưng thói quen nhân chéo dễ gây sai sót với biểu thức chưa rõ dấu).'
    ],
    reviewSuggestions: [
      'Phương pháp so sánh an toàn nhất luôn luôn là xét hiệu.',
      'Luôn chú ý điều kiện tập xác định khi viết khoảng giá trị cuối cùng.'
    ]
  }
];