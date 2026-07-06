import { MockExam, Question, Solution } from '@/types';

export const g10MockExamsList: MockExam[] = [
  {
    id: 'mock-math10-gk1',
    subjectId: 'math',
    title: 'Đề kiểm tra Giữa học kỳ 1 - Toán 10 (Đề số 1)',
    duration: 90,
    questionIds: [
      'mock-math10-q1',
      'mock-math10-q2',
      'mock-math10-q3',
      'mock-math10-q4',
      'mock-math10-q5',
      'mock-math10-q6',
      'mock-math10-q7',
      'mock-math10-q8',
      'mock-math10-q9',
      'mock-math10-q10'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'mock-math10-ck1',
    subjectId: 'math',
    title: 'Đề kiểm tra Cuối học kỳ 1 - Toán 10 (Đề số 1)',
    duration: 90,
    questionIds: [
      'mock-math10-q11',
      'mock-math10-q12',
      'mock-math10-q13',
      'mock-math10-q14',
      'mock-math10-q15',
      'mock-math10-q16',
      'mock-math10-q17',
      'mock-math10-q18',
      'mock-math10-q19',
      'mock-math10-q20'
    ],
    createdAt: new Date().toISOString()
  }
];

export const g10MockQuestions: Question[] = [
  // ĐỀ GIỮA KỲ (q1 - q10)
  // Phần I: Trắc nghiệm 4 lựa chọn
  {
    id: 'mock-math10-q1',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Mệnh đề phủ định của mệnh đề $P: \\exists x \\in \\mathbb{R}, x^2 - x + 7 < 0$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - x + 7 > 0$',
      'B. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - x + 7 \\ge 0$',
      'C. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - x + 7 < 0$',
      'D. $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - x + 7 \\ge 0$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q2',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-2; 3)$ and $B = (1; 5]$. Xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $A \\cap B = [-2; 5]$',
      'B. $A \\cap B = (1; 3)$',
      'C. $A \\cap B = [1; 3)$',
      'D. $A \\cap B = (1; 3]$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q3',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 2x - y > 1 \\\\ x + y \\le 3 \\end{cases}$?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $M(1; 0)$',
      'B. $N(2; 2)$',
      'C. $P(2; 0)$',
      'D. $Q(0; 2)$'
    ],
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q4',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm tọa độ đỉnh $I$ của parabol $(P): y = x^2 - 4x + 3$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $I(2; -1)$',
      'B. $I(-2; 15)$',
      'C. $I(2; 1)$',
      'D. $I(-2; -1)$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  // Phần II: Trắc nghiệm Đúng/Sai
  {
    id: 'mock-math10-q5',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = (-1; 3)$ với $m$ là tham số thực. Xét tính đúng sai của các phát biểu sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      proofImageRequired: false,
      autoCheckMode: 'keyed-numeric',
      fields: [
        { key: 'a', label: 'a) Khi $m = 0$ thì $A = [-1; 3]$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ (Đúng) hoặc S (Sai)' },
        { key: 'b', label: 'b) Khi $m = 0$ thì $A \\cap B = [-1; 3]$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ (Đúng) hoặc S (Sai)' },
        { key: 'c', label: 'c) Hai tập hợp $A$ và $B$ rời nhau ($A \\cap B = \\varnothing$) khi và chỉ khi $m \\le -4$ hoặc $m \\ge 4$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ (Đúng) hoặc S (Sai)' },
        { key: 'd', label: 'd) Có đúng $7$ giá trị nguyên của $m$ để $A \\cap B \\neq \\varnothing$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ (Đúng) hoặc S (Sai)' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'S', c: 'Đ', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'S', c: 'Đ', d: 'Đ' },
      { a: 'đ', b: 's', c: 'đ', d: 'đ' },
      { a: 'D', b: 'S', c: 'D', d: 'D' },
      { a: 'd', b: 's', c: 'd', d: 'd' }
    ]
  },
  {
    id: 'mock-math10-q6',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipid mỗi ngày trong khẩu phần ăn. Mỗi kilôgam thịt bò chứa 800 đơn vị protein và 200 đơn vị lipid. Mỗi kilôgam thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipid. Gia đình chỉ mua tối đa 1,6 kg thịt bò và 1,4 kg thịt lợn. Gọi x, y lần lượt là số kg thịt bò và thịt lợn gia đình mua. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    correctAnswer: 'a: Đ; b: S; c: Đ; d: S',
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      proofImageRequired: false,
      autoCheckMode: 'keyed-numeric',
      fields: [
        { key: 'a', label: 'a) Điều kiện giới hạn lượng thịt mua là $0 \\le x \\le 1,6$ và $0 \\le y \\le 1,4$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Bất phương trình biểu diễn lượng protein tối thiểu cần là $800x + 600y \\le 900$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Bất phương trình biểu diễn lượng lipid tối thiểu cần là $200x + 400y \\ge 400$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Nếu giá thịt bò là $250$ nghìn đồng/kg, lợn là $160$ nghìn đồng/kg, chi phí mua thấp nhất là $272$ nghìn đồng.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'S', c: 'Đ', d: 'S' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'S', c: 'Đ', d: 'S' },
      { a: 'đ', b: 's', c: 'đ', d: 's' },
      { a: 'D', b: 'S', c: 'D', d: 'S' },
      { a: 'd', b: 's', c: 'd', d: 's' }
    ]
  },
  // Phần III: Trắc nghiệm Trả lời ngắn
  {
    id: 'mock-math10-q7',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $y = ax^2 + bx + 2$ biết parabol có đỉnh $I(1; 3)$. Nhập phương trình tìm được dưới dạng chuẩn không dấu cách (ví dụ: -x^2+2x+2).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '-x^2+2x+2',
    acceptedAnswers: ['-x^2+2x+2', '-x^2 + 2x + 2', 'y=-x^2+2x+2', 'y = -x^2 + 2x + 2'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q8',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một quả bóng được đá lên từ mặt đất với quỹ đạo hình parabol có phương trình $h(t) = -5t^2 + 20t$ (m). Hỏi sau bao nhiêu giây thì quả bóng đạt độ cao lớn nhất? (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '2',
    acceptedAnswers: ['2', '2s', '2 giây'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q9',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Để đo chiều cao của một tòa tháp, người ta đứng tại hai điểm $A$ và $B$ trên mặt đất cách nhau $30\\text{m}$ (thẳng hàng với chân tháp $D$) và dùng giác kế để đo góc nâng của đỉnh tháp $C$. Góc nâng tại $A$ là $30^\\circ$, tại $B$ là $45^\\circ$ ($B$ nằm giữa $A$ và $D$). Tính chiều cao tháp (làm tròn kết quả đến hàng đơn vị mét, chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '41',
    acceptedAnswers: ['41', '41m', '41 mét'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q10',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho hai vectơ $\\vec{a} = (3; -1)$ và $\\vec{b} = (2; 6)$. Tính côsin của góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '0',
    acceptedAnswers: ['0'],
    validatorType: 'exact'
  },

  // ĐỀ CUỐI KỲ (q11 - q20)
  // Phần I: Trắc nghiệm 4 lựa chọn
  {
    id: 'mock-math10-q11',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = [m; m + 2]$ và $B = [-1; 4]$. Tìm tất cả các giá trị thực của tham số $m$ để $A \\subset B$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $m \\in [-1; 2]$',
      'B. $m \\in (-1; 2)$',
      'C. $m \\in [-1; 4]$',
      'D. $m \\in [0; 2]$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q12',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác $ABC$ đều cạnh $2a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $2a^2$',
      'B. $4a^2$',
      'C. $a^2$',
      'D. $2a^2\\sqrt{3}$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q13',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $a = 6, b = 8, c = 10$. Tính diện tích $S$ của tam giác $ABC$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $S = 48$',
      'B. $S = 24$',
      'C. $S = 14$',
      'D. $S = 30$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q14',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Trục đối xứng của parabol $y = -2x^2 + 4x + 1$ là đường thẳng:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    options: [
      'A. $x = 1$',
      'B. $x = 2$',
      'C. $x = -1$',
      'D. $x = -2$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  // Phần II: Trắc nghiệm Đúng/Sai
  {
    id: 'mock-math10-q15',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho hàm số bậc hai $y = f(x) = x^2 - 4x + 3$. Xét tính đúng sai của các phát biểu sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      proofImageRequired: false,
      autoCheckMode: 'keyed-numeric',
      fields: [
        { key: 'a', label: 'a) Đồ thị hàm số có đỉnh là $I(2; -1)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Hàm số đồng biến trên khoảng $(-\\infty; 2)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Đồ thị cắt trục hoành tại hai điểm phân biệt là $A(1; 0)$ và $B(3; 0)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$ là $-1$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'S', c: 'Đ', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'S', c: 'Đ', d: 'Đ' },
      { a: 'đ', b: 's', c: 'đ', d: 'đ' },
      { a: 'D', b: 'S', c: 'D', d: 'D' },
      { a: 'd', b: 's', c: 'd', d: 'd' }
    ]
  },
  {
    id: 'mock-math10-q16',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $AB = 5, AC = 8$ và góc $\\angle A = 60^\\circ$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      proofImageRequired: false,
      autoCheckMode: 'keyed-numeric',
      fields: [
        { key: 'a', label: 'a) Độ dài cạnh $BC$ bằng $7$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Diện tích tam giác $ABC$ bằng $10\\sqrt{3}$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng $\\frac{7\\sqrt{3}}{3}$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng $20$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'Đ', c: 'Đ', d: 'Đ' },
      { a: 'đ', b: 'đ', c: 'đ', d: 'đ' },
      { a: 'D', b: 'D', c: 'D', d: 'D' },
      { a: 'd', b: 'd', c: 'd', d: 'd' }
    ]
  },
  // Phần III: Trắc nghiệm Trả lời ngắn
  {
    id: 'mock-math10-q17',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = (-1; 3)$. Tìm số lượng giá trị nguyên của tham số m để $A \\cap B \\neq \\varnothing$. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '7',
    acceptedAnswers: ['7', '7 giá trị'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q18',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Một người đứng ở vị trí A trên bờ hồ muốn đo khoảng cách đến tháp C trên một hòn đảo nhỏ giữa hồ. Người đó đo góc giữa AC với một đường biên AB dài 100m trên bờ hồ. Đo góc CAB = 45 độ và góc CBA = 60 độ. Tính khoảng cách AC (làm tròn đến hàng đơn vị mét, chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '90',
    acceptedAnswers: ['90', '90m', '90 mét'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q19',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho tam giác ABC có A(1; 2), B(-2; 0) và C(2; 0). Tìm hoành độ của trực tâm H của tam giác ABC. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: '1',
    acceptedAnswers: ['1', 'x = 1', 'hoành độ là 1'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q20',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một công ty du lịch bán vé tour với giá ban đầu là 10 triệu đồng/người, dự kiến có 50 khách. Qua khảo sát thấy cứ mỗi lần giảm giá vé 200 nghìn đồng/người thì khách đăng ký tăng thêm 5 người. Hỏi công ty cần giảm giá vé bao nhiêu triệu đồng để đạt doanh thu lớn nhất? (Chỉ điền giá trị số).',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    correctAnswer: '4',
    acceptedAnswers: ['4', '4 triệu', '4 triệu đồng'],
    validatorType: 'exact'
  }
];

export const g10MockSolutionsList: Solution[] = [
  // ĐỀ GIỮA KỲ (s1 - s10)
  {
    id: 'mock-math10-s1',
    questionId: 'mock-math10-q1',
    recognition: 'Phủ định mệnh đề chứa kí hiệu tồn tại và bất đẳng thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc phủ định mệnh đề lượng từ',
        explanation: 'Phủ định của mệnh đề chứa kí hiệu $\\exists$ là mệnh đề chứa kí hiệu $\\forall$, và phủ định của bất đẳng thức $f(x) < 0$ là $f(x) \\ge 0$.',
        result: 'Thay thế \\exists thành \\forall và < thành \\ge'
      },
      {
        order: 2,
        title: 'Viết mệnh đề phủ định',
        explanation: 'Ta được mệnh đề phủ định là: $\\bar{P}: "\\forall x \\in \\mathbb{R}, x^2 - x + 7 \\ge 0"$. Đối chiếu các phương án, chọn B.',
        result: 'Mệnh đề phủ định tương ứng là phương án B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn phủ định của < là > thay vì \\ge.'],
    reviewSuggestions: ['Nhớ quy tắc đổi lượng từ: \\exists \\leftrightarrow \\forall và đổi chiều dấu: < \\leftrightarrow \\ge.']
  },
  {
    id: 'mock-math10-s2',
    questionId: 'mock-math10-q2',
    recognition: 'Tìm giao của hai tập hợp số (khoảng, đoạn).',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tập hợp trên trục số',
        explanation: 'Tập hợp $A = [-2; 3)$ bao gồm các số từ $-2$ đến cận dưới $3$. Tập $B = (1; 5]$ gồm các số lớn hơn $1$ đến $5$.',
        result: 'A = [-2; 3), B = (1; 5]'
      },
      {
        order: 2,
        title: 'Lấy phần giao nhau',
        explanation: 'Phần chung giữa $A$ và $B$ là phần lớn hơn $1$ và bé hơn $3$, tức là khoảng $(1; 3)$. Đối chiếu chọn B.',
        result: 'A giao B = (1; 3)'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn đầu mút tròn và vuông, ví dụ chọn [1; 3) hoặc (1; 3].'],
    reviewSuggestions: ['Vẽ hai tập hợp lên cùng một trục số và gạch phần không thuộc mỗi tập hợp để thấy rõ phần giao.']
  },
  {
    id: 'mock-math10-s3',
    questionId: 'mock-math10-q3',
    recognition: 'Xác định điểm thuộc miền nghiệm của hệ bất phương trình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thay thế tọa độ điểm vào hệ bất phương trình',
        explanation: 'Ta lần lượt thay tọa độ của các điểm M, N, P, Q vào hệ $\\begin{cases} 2x - y > 1 \\\\ x + y \\le 3 \\end{cases}$:\n- Với $P(2; 0)$: $2(2) - 0 = 4 > 1$ (thỏa mãn) và $2 + 0 = 2 \\le 3$ (thỏa mãn).',
        result: 'P(2; 0) thỏa mãn cả hai bất phương trình'
      },
      {
        order: 2,
        title: 'Kết luận phương án đúng',
        explanation: 'Vì điểm P(2; 0) thỏa mãn đồng thời cả hai bất phương trình trong hệ nên P thuộc miền nghiệm. Chọn C.',
        result: 'Chọn C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Tính toán nhầm dấu khi thay tọa độ có số âm hoặc thay sai thứ tự x và y.'],
    reviewSuggestions: ['Luôn kiểm tra điểm thỏa mãn tất cả các bất phương trình trong hệ mới kết luận thuộc miền nghiệm.']
  },
  {
    id: 'mock-math10-s4',
    questionId: 'mock-math10-q4',
    recognition: 'Tìm tọa độ đỉnh của Parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính hoành độ đỉnh',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.',
        result: 'x_I = 2'
      },
      {
        order: 2,
        title: 'Tính tung độ đỉnh',
        explanation: 'Thay $x_I = 2$ vào phương trình parabol ta được tung độ đỉnh $y_I = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Do đó đỉnh là $I(2; -1)$. Chọn A.',
        result: 'y_I = -1'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhớ sai công thức hoành độ đỉnh thành $x = \\frac{b}{2a}$ dẫn đến tìm sai tọa độ.'],
    reviewSuggestions: ['Có thể dùng máy tính cầm tay chức năng giải phương trình bậc hai để kiểm tra tọa độ đỉnh cực trị (Min/Max).']
  },
  {
    id: 'mock-math10-s5',
    questionId: 'mock-math10-q5',
    recognition: 'Khảo sát điều kiện tập hợp số chứa tham số và phép toán tập hợp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá phát biểu a',
        explanation: 'Khi $m = 0$, ta có $A = [0 - 1; 0 + 3] = [-1; 3]$. Phát biểu này Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá phát biểu b',
        explanation: 'Khi $m = 0$, $A \\cap B = [-1; 3] \\cap (-1; 3) = (-1; 3)$. Phát biểu b ghi $A \\cap B = [-1; 3]$ là Sai (S) do thiếu loại trừ điểm biên $-1$ và $3$.',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá phát biểu c',
        explanation: 'Hai tập hợp rời nhau khi biên phải của A bé hơn biên trái của B ($m + 3 \\le -1 \\Leftrightarrow m \\le -4$) hoặc biên trái của A lớn hơn biên phải của B ($m - 1 \\ge 3 \\Leftrightarrow m \\ge 4$). Phát biểu này Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá phát biểu d',
        explanation: 'Giao khác rỗng khi $-4 < m < 4$. Giá trị nguyên của m là $\\{-3; -2; -1; 0; 1; 2; 3\\}$, tổng cộng có 7 giá trị. Phát biểu này Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Quên lấy phủ định điều kiện rời nhau khi tìm điều kiện giao khác rỗng.'],
    reviewSuggestions: ['Hãy biểu diễn trực quan các khoảng trên trục số đối với từng giá trị tham số m cụ thể để kiểm tra.']
  },
  {
    id: 'mock-math10-s6',
    questionId: 'mock-math10-q6',
    recognition: 'Giải bài toán quy hoạch tuyến tính tối ưu chi phí thực tế.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá phát biểu a',
        explanation: 'Lượng thịt bò x và thịt lợn y không âm và tối đa mua là 1,6kg thịt bò, 1,4kg thịt lợn. Do đó: $0 \\le x \\le 1,6$ và $0 \\le y \\le 1,4$. Phát biểu này Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá phát biểu b',
        explanation: 'Lượng protein cần ít nhất 900 đơn vị. Mỗi kg thịt bò chứa 800 đơn vị, lợn chứa 600 đơn vị. Bất phương trình đúng phải là $800x + 600y \\ge 900$. Phát biểu này Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá phát biểu c',
        explanation: 'Lượng lipid cần ít nhất 400 đơn vị. Mỗi kg thịt bò chứa 200 đơn vị, lợn chứa 400 đơn vị. Bất phương trình tương ứng là $200x + 400y \\ge 400$. Phát biểu này Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá phát biểu d',
        explanation: 'Chi phí mua thịt là $F(x; y) = 250x + 160y$. Vẽ miền nghiệm giới hạn bởi các đường thẳng, ta tìm được các đỉnh đa giác. Giá trị nhỏ nhất đạt tại giao điểm của hai đường thẳng protein và lipid: $x = 0,6; y = 0,7$ với chi phí $F = 250(0,6) + 160(0,7) = 262$ nghìn đồng. Phát biểu ghi 272 nghìn đồng là Sai (S).',
        result: 'd) Sai'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: S',
    commonMistakes: ['Lập sai chiều của bất phương trình (nhầm lẫn giữa "ít nhất" và "nhiều nhất").'],
    reviewSuggestions: ['Với bài toán tối ưu thực tế, vẽ miền nghiệm lồi và tính giá trị tại các đỉnh là phương pháp giải quyết chính xác nhất.']
  },
  {
    id: 'mock-math10-s7',
    questionId: 'mock-math10-q7',
    recognition: 'Xác định hệ số của parabol khi biết tọa độ đỉnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng hoành độ đỉnh thiết lập mối liên hệ',
        explanation: 'Đỉnh $I(1; 3)$ thuộc parabol $y = ax^2 + bx + 2$. Hoành độ đỉnh là $x_I = -\\frac{b}{2a} = 1 \\Rightarrow b = -2a$.',
        result: 'b = -2a'
      },
      {
        order: 2,
        title: 'Sử dụng tọa độ đỉnh lập phương trình thứ hai',
        explanation: 'Thay tọa độ đỉnh $I(1; 3)$ vào phương trình parabol: $3 = a(1)^2 + b(1) + 2 \\Rightarrow a + b = 1$.',
        result: 'a + b = 1'
      },
      {
        order: 3,
        title: 'Giải hệ phương trình tìm parabol',
        explanation: 'Thay $b = -2a$ vào $a + b = 1$ ta được $a - 2a = 1 \\Rightarrow a = -1 \\Rightarrow b = 2$. Vậy parabol cần tìm là $y = -x^2 + 2x + 2$.',
        result: 'y = -x^2+2x+2'
      }
    ],
    finalAnswer: '-x^2+2x+2',
    commonMistakes: ['Nhập dư thừa ký tự khoảng trắng hoặc dấu cách khiến định dạng kiểm tra không khớp.'],
    reviewSuggestions: ['Viết liền mạch phương trình theo đúng định dạng được hướng dẫn ở đề bài.']
  },
  {
    id: 'mock-math10-s8',
    questionId: 'mock-math10-q8',
    recognition: 'Bài toán cực trị thực tế chuyển động ném bóng hình parabol.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận diện phương trình hàm bậc hai',
        explanation: 'Hàm độ cao $h(t) = -5t^2 + 20t$ có đồ thị là parabol bề lõm quay xuống dưới ($a = -5 < 0$). Giá trị lớn nhất đạt được tại hoành độ đỉnh.',
        result: 'Hàm đạt Max tại đỉnh parabol'
      },
      {
        order: 2,
        title: 'Tính thời điểm đạt độ cao cực đại',
        explanation: 'Thời điểm quả bóng đạt độ cao lớn nhất là hoành độ đỉnh: $t = -\\frac{b}{2a} = -\\frac{20}{2(-5)} = 2$ (giây).',
        result: 't = 2'
      }
    ],
    finalAnswer: '2',
    commonMistakes: ['Tính nhầm sang độ cao lớn nhất là 20m thay vì thời gian bóng bay là 2s.'],
    reviewSuggestions: ['Đọc kĩ đề xem câu hỏi yêu cầu tìm thời gian (t) hay độ cao lớn nhất (h).']
  },
  {
    id: 'mock-math10-s9',
    questionId: 'mock-math10-q9',
    recognition: 'Tính chiều cao tháp bằng hệ thức lượng lượng giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập biểu thức độ dài hình chiếu',
        explanation: 'Gọi $h$ là chiều cao tháp CD. Các tam giác vuông $ADC$ và $BDC$ cho ta:\n$AD = h \\cdot \\cot 30^\\circ = h\\sqrt{3}$,\n$BD = h \\cdot \\cot 45^\\circ = h$.',
        result: 'AD = h*sqrt(3), BD = h'
      },
      {
        order: 2,
        title: 'Lập phương trình và giải h',
        explanation: 'Khoảng cách giữa A và B là: $AB = AD - BD \\Rightarrow 30 = h\\sqrt{3} - h \\Rightarrow h = \\frac{30}{\\sqrt{3} - 1} \\approx 40.98$ (m). Làm tròn đến đơn vị mét ta được 41.',
        result: 'h = 41'
      }
    ],
    finalAnswer: '41',
    commonMistakes: ['Làm tròn sai chữ số thập phân hoặc dùng nhầm hàm lượng giác.'],
    reviewSuggestions: ['Hãy vẽ hình phác thảo để dễ dàng thiết lập các phương trình hình học trực quan.']
  },
  {
    id: 'mock-math10-s10',
    questionId: 'mock-math10-q10',
    recognition: 'Tính góc và côsin góc giữa hai vectơ dựa trên tọa độ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng của hai vectơ',
        explanation: 'Tích vô hướng $\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 = 3(2) + (-1)(6) = 6 - 6 = 0$.',
        result: 'a.b = 0'
      },
      {
        order: 2,
        title: 'Kết luận côsin góc giữa hai vectơ',
        explanation: 'Vì tích vô hướng bằng 0 nên hai vectơ vuông góc với nhau. Côsin góc giữa chúng bằng 0.',
        result: 'cos = 0'
      }
    ],
    finalAnswer: '0',
    commonMistakes: ['Tính nhầm tích vô hướng dẫn đến côsin khác 0.'],
    reviewSuggestions: ['Nếu tích vô hướng bằng 0 thì góc giữa hai vectơ bằng 90 độ và côsin bằng 0.']
  },

  // ĐỀ CUỐI KỲ (s11 - s20)
  {
    id: 'mock-math10-s11',
    questionId: 'mock-math10-q11',
    recognition: 'Điều kiện để đoạn này là tập con của đoạn kia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập điều kiện tập con',
        explanation: 'Để $A = [m; m + 2] \\subset B = [-1; 4]$, ta cần:\n$\\begin{cases} m \\ge -1 \\\\ m + 2 \\le 4 \\end{cases} \\Rightarrow \\begin{cases} m \\ge -1 \\\\ m \\le 2 \\end{cases} \\Rightarrow -1 \\le m \\le 2$. Chọn A.',
        result: 'm thuộc [-1; 2]'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Quên lấy dấu bằng ở các đầu mút biên.'],
    reviewSuggestions: ['Kiểm tra các ngoặc vuông/tròn ở biên kỹ lưỡng trước khi quyết định lấy dấu bằng.']
  },
  {
    id: 'mock-math10-s12',
    questionId: 'mock-math10-q12',
    recognition: 'Tích vô hướng của hai vectơ chung gốc trong tam giác đều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định góc và độ dài các vectơ',
        explanation: 'Góc giữa $\\vec{AB}$ và $\\vec{AC}$ là góc $\\angle A = 60^\\circ$ của tam giác đều $ABC$. Độ dài của hai vectơ đều bằng $2a$.',
        result: 'Góc = 60 độ, Độ dài = 2a'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng hình học',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos 60^\\circ = 2a \\cdot 2a \\cdot 0.5 = 2a^2$. Chọn A.',
        result: 'Tích = 2a^2'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn độ dài cạnh tam giác là a thay vì 2a dẫn đến tính sai hệ số.'],
    reviewSuggestions: ['Chú ý đọc kĩ độ dài cạnh của tam giác đều đề bài cho là gì (a, 2a, hay a\\sqrt{3}).']
  },
  {
    id: 'mock-math10-s13',
    questionId: 'mock-math10-q13',
    recognition: 'Tính diện tích tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng tính chất tam giác',
        explanation: 'Ta nhận thấy ba cạnh của tam giác thỏa mãn hệ thức Pythagore: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Do đó tam giác vuông tại góc đối diện cạnh lớn nhất c = 10.',
        result: 'Tam giác vuông với hai cạnh góc vuông là 6 và 8'
      },
      {
        order: 2,
        title: 'Tính diện tích tam giác',
        explanation: 'Diện tích tam giác vuông là: $S = \\frac{1}{2} a \\cdot b = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$. Chọn B.',
        result: 'S = 24'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Sử dụng công thức tính diện tích sai hoặc không nhận ra tam giác vuông làm kéo dài thời gian tính.'],
    reviewSuggestions: ['Nhận biết nhanh các bộ ba số Pythagore (3-4-5, 6-8-10) giúp giải nhanh bài toán trắc nghiệm hình học.']
  },
  {
    id: 'mock-math10-s14',
    questionId: 'mock-math10-q14',
    recognition: 'Xác định trục đối xứng của đồ thị parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức đường tiệm cận/trục đối xứng',
        explanation: 'Trục đối xứng của parabol $y = ax^2 + bx + c$ là đường thẳng $x = -\\frac{b}{2a}$.',
        result: 'x = -b / (2a)'
      },
      {
        order: 2,
        title: 'Thay số tính trục đối xứng',
        explanation: 'Với parabol $y = -2x^2 + 4x + 1$, ta có $a = -2, b = 4$. Suy ra trục đối xứng là $x = -\\frac{4}{2(-2)} = 1$. Chọn A.',
        result: 'x = 1'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn trục đối xứng viết dưới dạng y = ... thay vì x = ... hoặc tính nhầm dấu.'],
    reviewSuggestions: ['Trục đối xứng luôn đi qua hoành độ đỉnh nên có dạng x = hoành độ đỉnh.']
  },
  {
    id: 'mock-math10-s15',
    questionId: 'mock-math10-q15',
    recognition: 'Khảo sát tính chất đồng biến, nghịch biến và cực trị hàm bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá đỉnh parabol (phát biểu a)',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{-4}{2(1)} = 2$, tung độ đỉnh $y_I = -1$. Đỉnh parabol là $I(2; -1)$. Phát biểu a Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá chiều biến thiên (phát biểu b)',
        explanation: 'Vì hệ số $a = 1 > 0$, parabol quay bề lõm lên trên, hàm nghịch biến trên khoảng $(-\\infty; 2)$ và đồng biến trên khoảng $(2; +\\infty)$. Phát biểu b ghi hàm đồng biến trên $(-\\infty; 2)$ là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá giao điểm với Ox (phát biểu c)',
        explanation: 'Phương trình hoành độ giao điểm $x^2 - 4x + 3 = 0 \\Rightarrow x = 1$ hoặc $x = 3$. Đồ thị cắt Ox tại $A(1; 0)$ và $B(3; 0)$. Phát biểu c Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá cực trị trên đoạn (phát biểu d)',
        explanation: 'Trên đoạn $[0; 3]$, hoành độ đỉnh $x_I = 2$ thuộc đoạn. Giá trị nhỏ nhất của hàm số đạt tại đỉnh, bằng $-1$. Phát biểu d Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Nhầm lẫn chiều biến thiên của hàm bậc hai khi hệ số a dương/âm.'],
    reviewSuggestions: ['Vẽ bảng biến thiên phác thảo ra giấy giúp kiểm tra tính đồng biến, nghịch biến nhanh và chính xác nhất.']
  },
  {
    id: 'mock-math10-s16',
    questionId: 'mock-math10-q16',
    recognition: 'Giải tam giác bằng các định lý Sin, Cosin và tích vô hướng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá độ dài cạnh BC (phát biểu a)',
        explanation: 'Định lý Cosin: $BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos A = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 40 = 49 \\Rightarrow BC = 7$. Phát biểu a Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá diện tích tam giác (phát biểu b)',
        explanation: 'Diện tích $S = \\frac{1}{2} AB \\cdot AC \\cdot \\sin A = \\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$. Phát biểu b Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá bán kính R ngoại tiếp (phát biểu c)',
        explanation: 'Định lý Sin: $2R = \\frac{BC}{\\sin A} \\Rightarrow R = \\frac{7}{2\\sin 60^\\circ} = \\frac{7}{\\sqrt{3}} = \\frac{7\\sqrt{3}}{3}$. Phát biểu c Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá tích vô hướng vectơ (phát biểu d)',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos A = 5 \\cdot 8 \\cdot \\cos 60^\\circ = 20$. Khẳng định d Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    commonMistakes: ['Tính toán nhầm công thức cosin hoặc sin góc A.'],
    reviewSuggestions: ['Hãy liên kết các đại lượng tam giác thông qua các định lý cơ bản: Sin, Cosin, diện tích tam giác để giải chuỗi trắc nghiệm đúng sai nhanh chóng.']
  },
  {
    id: 'mock-math10-s17',
    questionId: 'mock-math10-q17',
    recognition: 'Đếm số lượng giá trị nguyên của tham số m để giao khác rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện để giao bằng rỗng',
        explanation: '$A \\cap B = \\varnothing \\Leftrightarrow m + 3 \\le -1$ hoặc $m - 1 \\ge 3 \\Leftrightarrow m \\le -4$ hoặc $m \\ge 4$.',
        result: 'm <= -4 hoặc m >= 4'
      },
      {
        order: 2,
        title: 'Lấy phủ định tìm điều kiện giao khác rỗng và đếm số nguyên',
        explanation: 'Để giao khác rỗng: $-4 < m < 4$. Giá trị nguyên của m là $\\{-3; -2; -1; 0; 1; 2; 3\\}$, tổng cộng có 7 giá trị nguyên.',
        result: '7 giá trị'
      }
    ],
    finalAnswer: '7',
    commonMistakes: ['Không đọc kỹ yêu cầu đếm số lượng mà ghi khoảng giá trị số.'],
    reviewSuggestions: ['Nếu bài yêu cầu đếm số lượng thì đáp số cuối cùng bắt buộc phải là một số nguyên dương cụ thể.']
  },
  {
    id: 'mock-math10-s18',
    questionId: 'mock-math10-q18',
    recognition: 'Giải tam giác thực tế đo đạc khoảng cách giữa hai điểm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính góc đối diện cạnh AB',
        explanation: 'Trong tam giác ABC, góc $\\angle C = 180^\\circ - 45^\\circ - 60^\\circ = 75^\\circ$.',
        result: 'Góc C = 75 độ'
      },
      {
        order: 2,
        title: 'Áp dụng định lý Sin tìm khoảng cách AC',
        explanation: '$\\frac{AC}{\\sin B} = \\frac{AB}{\\sin C} \\Rightarrow AC = \\frac{100 \\cdot \\sin 60^\\circ}{\\sin 75^\\circ} \\approx \\frac{100 \\cdot 0.8660}{0.9659} \\approx 89.65$ (m). Làm tròn đến đơn vị mét ta được 90.',
        result: 'AC = 90'
      }
    ],
    finalAnswer: '90',
    commonMistakes: ['Nhầm công thức định lý Sin hoặc bấm máy tính sai hệ góc.'],
    reviewSuggestions: ['Ghi nhớ định lý Sin: a/sinA = b/sinB = c/sinC = 2R để liên kết các cạnh góc nhanh chóng.']
  },
  {
    id: 'mock-math10-s19',
    questionId: 'mock-math10-q19',
    recognition: 'Tìm hoành độ trực tâm H của tam giác trong mặt phẳng tọa độ Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hệ thức trực tâm qua tích vô hướng',
        explanation: 'Trực tâm $H(x; y)$ của tam giác $ABC$ thỏa mãn $\\vec{AH} \\cdot \\vec{BC} = 0$ và $\\vec{BH} \\cdot \\vec{AC} = 0$.',
        result: 'AH vuông góc BC, BH vuông góc AC'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng và hoành độ x',
        explanation: 'Ta có $\\vec{BC} = (4; 0)$ và $\\vec{AH} = (x - 1; y - 2)$. Tích vô hướng $\\vec{AH} \\cdot \\vec{BC} = 4(x - 1) + 0(y - 2) = 0 \\Rightarrow x - 1 = 0 \\Rightarrow x = 1$.',
        result: 'x = 1'
      }
    ],
    finalAnswer: '1',
    commonMistakes: ['Lập sai vectơ hoặc tính toán nhầm tọa độ dẫn đến hoành độ khác.'],
    reviewSuggestions: ['Khi một cạnh tam giác song song với trục tọa độ (như BC cùng tung độ y = 0), việc tính trực tâm sẽ đơn giản hóa đáng kể.']
  },
  {
    id: 'mock-math10-s20',
    questionId: 'mock-math10-q20',
    recognition: 'Bài toán tối ưu doanh thu thực tế sử dụng hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hàm doanh thu theo số lần giảm giá',
        explanation: 'Gọi x là số lần giảm giá 200 nghìn đồng ($x \\ge 0$). Giá vé mới là $10 - 0.2x$ (triệu đồng). Số khách là $50 + 5x$ (người). Doanh thu $R(x) = (10 - 0.2x)(50 + 5x) = -x^2 + 40x + 500$.',
        result: 'R(x) = -x^2 + 40x + 500'
      },
      {
        order: 2,
        title: 'Tính số tiền cần giảm để doanh thu lớn nhất',
        explanation: 'Hàm số bậc hai đạt cực đại tại hoành độ đỉnh $x = -\\frac{40}{2(-1)} = 20$ (lần). Số tiền cần giảm là $20 \\cdot 0.2 = 4$ (triệu đồng).',
        result: '4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Nhầm lẫn giữa số lần giảm giá (20 lần) và số tiền giảm tương ứng (4 triệu đồng).'],
    reviewSuggestions: ['Luôn kiểm tra kỹ đơn vị của câu hỏi yêu cầu (ở đây là số triệu đồng cần giảm).']
  }
];
