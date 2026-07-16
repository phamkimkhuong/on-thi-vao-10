import { Question } from '@/types';

export const g10MathQuestions: Question[] = [
  {
    id: 'math10-q1',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$. Hãy xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '(1; 3]',
    acceptedAnswers: ['(1;3]', '(1; 3]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q2',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = [m; m + 2]$ và $B = [-1; 3]$. Tìm tất cả các giá trị thực của tham số m để $A \\cap B \\neq \\varnothing$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '-3 <= m <= 3',
    acceptedAnswers: ['[-3; 3]', '-3 <= m <= 3', 'm in [-3;3]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q3',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một xưởng sản xuất bàn ghế học sinh cần lập kế hoạch sản xuất. Gọi $x$ là số bàn, $y$ là số ghế cần sản xuất trong một ngày. Điều kiện về nguyên vật liệu và nhân công được mô tả bởi hệ bất phương trình:\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 80 \\\\ 2x + y \\le 100 \\end{cases}$$\nLợi nhuận thu được là $F(x; y) = 400x + 300y$ (nghìn đồng). Tìm phương án sản xuất $(x; y)$ để xưởng thu được lợi nhuận lớn nhất.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '(20; 60)',
    acceptedAnswers: ['(20; 60)', '(20;60)', 'x=20, y=60', '20 bàn và 60 ghế'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q4',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một cổng chào có hình dạng Parabol $y = ax^2 + bx + c$ với chiều rộng đáy (khoảng cách giữa hai chân cổng) là $AB = 8\\text{m}$ và chiều cao đỉnh cổng so với mặt đất là $I = 6\\text{m}$. Giả sử ta chọn hệ trục tọa độ Oxy sao cho chân cổng A nằm tại gốc tọa độ O, chân cổng B nằm trên tia Ox. Hãy viết phương trình Parabol biểu diễn cổng chào đó.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'y = -3/8x^2 + 3x',
    acceptedAnswers: ['y = -3/8x^2 + 3x', 'y = -0.375x^2 + 3x', 'y=-3/8x^2+3x'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q5',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt5',
    content: 'Cho tam giác ABC. Điểm M thỏa mãn $\\vec{MB} = -2\\vec{MC}$ và điểm N thỏa mãn $\\vec{AN} = \\frac{1}{3}\\vec{AB} + \\frac{2}{9}\\vec{AC}$. Gọi G là trọng tâm tam giác ABC. Hãy phân tích vectơ $\\vec{AM}$ theo hai vectơ $\\vec{AB}$ và $\\vec{AC}$, từ đó chứng minh ba điểm A, N, M thẳng hàng.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'AM = 1/3AB + 2/3AC',
    acceptedAnswers: ['AM = 1/3AB + 2/3AC', 'AM = 1/3*AB + 2/3*AC', '1/3AB + 2/3AC'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q6',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-3; 2)$ và $B = [0; 5)$. Hãy xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '[0; 2)',
    acceptedAnswers: ['[0; 2)', '[0;2)', '[0; 2['],
    validatorType: 'exact'
  },
  {
    id: 'math10-q7',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = (-4; 1]$ và $B = (0; 3)$. Hãy xác định tập hợp $A \\cup B$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '(-4; 3)',
    acceptedAnswers: ['(-4; 3)', '(-4;3)', ']-4; 3['],
    validatorType: 'exact'
  },
  {
    id: 'math10-q8',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-2; 4]$ và $B = (1; 6]$. Hãy xác định tập hợp $A \\setminus B$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '[-2; 1]',
    acceptedAnswers: ['[-2; 1]', '[-2;1]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q9',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = (-\\infty; 2]$ và $B = [-1; 4)$. Hãy xác định tập hợp $B \\setminus A$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '(2; 4)',
    acceptedAnswers: ['(2; 4)', '(2;4)', ']2; 4['],
    validatorType: 'exact'
  },
  {
    id: 'math10-q10',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho tập hợp $A = [-3; 5)$. Hãy xác định phần bù của tập hợp A trong tập số thực $\\mathbb{R}$ (tức là $C_{\\mathbb{R}}A$).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '(-\\infty; -3) \\cup [5; +\\infty)',
    acceptedAnswers: [
      '(-\\infty; -3) \\cup [5; +\\infty)',
      '(-\\infty;-3) \\cup [5;+\\infty)',
      '(-\\infty; -3) U [5; +\\infty)',
      '(-\\infty;-3) U [5;+\\infty)'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q11',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [0; 3]$ và $B = (2; 6)$. Hãy xác định phần bù của tập hợp $A \\cup B$ trong tập số thực $\\mathbb{R}$ (tức là $C_{\\mathbb{R}}(A \\cup B)$).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '(-\\infty; 0) \\cup [6; +\\infty)',
    acceptedAnswers: [
      '(-\\infty; 0) \\cup [6; +\\infty)',
      '(-\\infty;0) \\cup [6;+\\infty)',
      '(-\\infty; 0) U [6; +\\infty)',
      '(-\\infty;0) U [6;+\\infty)'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q12',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = (-\\infty; -2]$ và $B = [-2; +\\infty)$. Hãy xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '{-2}',
    acceptedAnswers: ['{-2}', '{-2}', '[-2; -2]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q13',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho ba tập hợp $A = [-4; 2]$, $B = [-2; 4)$ và $C = (0; 5]$. Hãy xác định tập hợp $A \\cap B \\cap C$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '(0; 2]',
    acceptedAnswers: ['(0; 2]', '(0;2)', '(0; 2]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q14',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho hai tập hợp $A = [-3; 3]$ và $B = [-1; 2]$. Hãy xác định tập hợp $A \\setminus B$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '[-3; -1) \\cup (2; 3]',
    acceptedAnswers: [
      '[-3; -1) \\cup (2; 3]',
      '[-3;-1) \\cup (2;3]',
      '[-3; -1) U (2; 3]',
      '[-3;-1) U (2;3]'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q15',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = (m - 1; m + 3)$ và $B = (-\\infty; -3) \\cup [5; +\\infty)$. Tìm tất cả các giá trị của tham số m để $A \\cap B = \\varnothing$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '-2 <= m <= 2',
    acceptedAnswers: ['-2 <= m <= 2', '[-2; 2]', '-2 <= m <= 2', 'm in [-2;2]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q16',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = (m; m + 2)$ và $B = [-2; 4]$. Tìm tất cả các giá trị thực của tham số m để $A \\subset B$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '-2 <= m <= 2',
    acceptedAnswers: ['-2 <= m <= 2', '[-2; 2]', '-2 <= m <= 2', 'm in [-2;2]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q17',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 1; \\frac{m + 5}{2}]$ và $B = (-\\infty; -2) \\cup [3; +\\infty)$. Tìm tất cả các giá trị thực của m để $A \\cap B \\neq \\varnothing$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'm < -1 hoặc 1 <= m <= 7',
    acceptedAnswers: [
      'm < -1 hoặc 1 <= m <= 7',
      'm < -1 hoac 1 <= m <= 7',
      '(-\\infty; -1) \\cup [1; 7]',
      '(-\\infty;-1) \\cup [1;7]',
      'm <= -1 hoặc 1 <= m <= 7',
      'm <= -1 hoac 1 <= m <= 7',
      '(-\\infty; -1] \\cup [1; 7]',
      '(-\\infty;-1] \\cup [1;7]'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q18',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = [m; +\\infty)$ và $B = (5; +\\infty)$. Tìm điều kiện của tham số m để $A \\subset B$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm > 5',
    acceptedAnswers: ['m > 5', 'm > 5', '(5; +\\infty)'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q19',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = (m - 3; m]$ và $B = (1; 4)$. Tìm tất cả các giá trị của tham số m để $A \\cap B = \\varnothing$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm <= 1 hoặc m > 7',
    acceptedAnswers: ['m <= 1 hoặc m > 7', 'm <= 1 hoac m > 7', 'm <= 1 hoặc m >= 7', 'm <= 1 hoac m >= 7'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q20',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = (-\\infty; m)$ và $B = (-\\infty; 2m - 1]$. Tìm tất cả các giá trị thực của m để $A \\subset B$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm >= 1',
    acceptedAnswers: ['m >= 1', 'm >= 1', '[1; +\\infty)', '[1;+\\infty)'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q21',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m; m + 3]$ và $B = [2m - 1; 2m + 2]$. Tìm điều kiện của tham số m để $A \\cap B \\neq \\varnothing$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '-2 <= m <= 4',
    acceptedAnswers: ['-2 <= m <= 4', '[-2; 4]', '-2 <= m <= 4', 'm in [-2;4]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q22',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [2m - 1; 2m + 3]$ và $B = [-1; 5]$. Tìm tất cả các giá trị của tham số m để $A \\cap B = \\varnothing$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm < -2 hoặc m > 3',
    acceptedAnswers: ['m < -2 hoặc m > 3', 'm < -2 hoac m > 3', 'm < -2 hoặc m > 3', 'm < -2 hoac m > 3'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q23',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = [-3; 3]$ và $B = [m - 2; m + 5]$. Tìm điều kiện của tham số m để $A \\subset B$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '-2 <= m <= -1',
    acceptedAnswers: ['-2 <= m <= -1', '[-2; -1]', '-2 <= m <= -1', 'm in [-2;-1]'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q24',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Xác định miền nghiệm của hệ bất phương trình sau trên mặt phẳng tọa độ $Oxy$:\\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$$\\nTìm tọa độ tất cả các đỉnh của miền nghiệm.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'O(0;0), A(3;0), B(2;2), C(0;4)',
    acceptedAnswers: [
      'O(0;0), A(3;0), B(2;2), C(0;4)',
      '(0;0), (3;0), (2;2), (0;4)',
      'O(0; 0), A(3; 0), B(2; 2), C(0; 4)'
    ],
    validatorType: 'coordinates'
  },
  {
    id: 'math10-q25',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Cho miền nghiệm $D$ là tứ giác $OABC$ với các đỉnh $O(0; 0)$, $A(3; 0)$, $B(2; 2)$, $C(0; 4)$. Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = 3x + 2y$ trên miền nghiệm $D$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'max F = 10, min F = 0',
    acceptedAnswers: [
      'max F = 10 tại B(2;2), min F = 0 tại O(0;0)',
      'GTLN = 10, GTNN = 0',
      'max = 10, min = 0'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { max_f: '10', min_f: '0' },
    acceptedFinalAnswers: [
      { max_f: '10', min_f: '0' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'max_f', label: 'Giá trị lớn nhất (GTLN):', valueType: 'number', placeholder: 'Nhập GTLN' },
        { key: 'min_f', label: 'Giá trị nhỏ nhất (GTNN):', valueType: 'number', placeholder: 'Nhập GTNN' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q26',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 4y$ trên miền nghiệm của hệ bất phương trình:\\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 8 \\\\ 3x + 2y \\le 12 \\end{cases}$$',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '22',
    acceptedAnswers: ['22', 'F_max = 22', 'max F = 22', 'GTLN = 22'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q27',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 2x + 3y$ trên miền nghiệm của hệ bất phương trình:\\n$$\\begin{cases} x + y \\ge 3 \\\\ x + 2y \\ge 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$$',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '7',
    acceptedAnswers: ['7', 'F_min = 7', 'min F = 7', 'GTNN = 7'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q28',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một nông dân có 10 ha đất trồng lúa và ngô. Chi phí trồng 1 ha lúa là 2 triệu đồng, 1 ha ngô là 1 triệu đồng. Nông dân có tổng vốn 16 triệu đồng. Lợi nhuận thu được từ 1 ha lúa là 3 triệu đồng, 1 ha ngô là 2 triệu đồng. Hỏi nông dân cần trồng bao nhiêu ha lúa và bao nhiêu ha ngô để lợi nhuận thu được là lớn nhất?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '6 ha lúa, 4 ha ngô',
    acceptedAnswers: [
      '6 ha lúa và 4 ha ngô',
      '(6; 4)',
      '(6;4)',
      'x = 6, y = 4'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { lua: '6', ngo: '4' },
    acceptedFinalAnswers: [
      { lua: '6', ngo: '4' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'lua', label: 'Diện tích lúa (ha):', valueType: 'number', placeholder: 'ha lúa' },
        { key: 'ngo', label: 'Diện tích ngô (ha):', valueType: 'number', placeholder: 'ha ngô' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q29',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Tìm giá trị lớn nhất của biểu thức $F(x; y) = x + 3y$ trên miền nghiệm của hệ bất phương trình:\\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 10 \\\\ x + 3y \\le 12 \\end{cases}$$',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '12',
    acceptedAnswers: ['12', 'F_max = 12', 'max F = 12', 'GTLN = 12'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q30',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một công ty sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm A cần 2 giờ gia công và 1 giờ lắp ráp. Mỗi sản phẩm B cần 1 giờ gia công và 3 giờ lắp ráp. Thời gian gia công tối đa là 8 giờ/ngày, thời gian lắp ráp tối đa là 9 giờ/ngày. Lợi nhuận từ mỗi sản phẩm A là 5 triệu đồng, mỗi sản phẩm B là 4 triệu đồng. Tìm số sản phẩm mỗi loại cần sản xuất trong một ngày để lợi nhuận lớn nhất.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '3 sp A, 2 sp B',
    acceptedAnswers: [
      '3 sản phẩm A và 2 sản phẩm B',
      '(3; 2)',
      '(3;2)',
      'x = 3, y = 2'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { sp_a: '3', sp_b: '2' },
    acceptedFinalAnswers: [
      { sp_a: '3', sp_b: '2' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'sp_a', label: 'Số sản phẩm A:', valueType: 'number', placeholder: 'Nhập số lượng' },
        { key: 'sp_b', label: 'Số sản phẩm B:', valueType: 'number', placeholder: 'Nhập số lượng' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q31',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Xác định miền nghiệm của hệ bất phương trình sau và tìm tọa độ các đỉnh của miền nghiệm:\\n$$\\begin{cases} x \\ge 1 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ x - y \\le 3 \\end{cases}$$',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'A(1;0), B(3;0), C(4;1), D(1;4)',
    acceptedAnswers: [
      'A(1;0), B(3;0), C(4;1), D(1;4)',
      '(1;0), (3;0), (4;1), (1;4)',
      'A(1; 0), B(3; 0), C(4; 1), D(1; 4)'
    ],
    validatorType: 'coordinates'
  },
  {
    id: 'math10-q32',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Cho miền nghiệm $D$ được xác định bởi hệ bất phương trình:\\n$$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ x + 2y \\le 8 \\\\ 2x + y \\le 10 \\end{cases}$$\\nTìm giá trị lớn nhất của biểu thức $F(x; y) = 4x + 5y$ trên miền $D$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '26',
    acceptedAnswers: ['26', 'F_max = 26', 'max F = 26', 'GTLN = 26'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q33',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một cửa hàng bán hai loại bánh: bánh mì và bánh ngọt. Mỗi ngày cửa hàng sản xuất tối đa 100 chiếc bánh, trong đó số bánh ngọt không vượt quá 60 chiếc và số bánh mì không ít hơn 20 chiếc. Lợi nhuận từ mỗi chiếc bánh mì là 5 nghìn đồng, mỗi chiếc bánh ngọt là 8 nghìn đồng. Hỏi cửa hàng cần sản xuất bao nhiêu chiếc mỗi loại để lợi nhuận lớn nhất?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '40 bánh mì, 60 bánh ngọt',
    acceptedAnswers: [
      '40 bánh mì và 60 bánh ngọt',
      '(40; 60)',
      '(40;60)',
      'x = 40, y = 60'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { banh_mi: '40', banh_ngot: '60' },
    acceptedFinalAnswers: [
      { banh_mi: '40', banh_ngot: '60' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'banh_mi', label: 'Số bánh mì:', valueType: 'number', placeholder: 'Nhập số lượng' },
        { key: 'banh_ngot', label: 'Số bánh ngọt:', valueType: 'number', placeholder: 'Nhập số lượng' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q34',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $y = ax^2 + bx + 2$ đi qua hai điểm $A(1; 5)$ và $B(-2; 8)$. Tìm các hệ số $a, b$ và viết phương trình parabol đó.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'y = 2x^2 + x + 2',
    acceptedAnswers: ['y = 2x^2 + x + 2', 'y=2x^2+x+2', '2x^2+x+2', 'y = 2x^2+x+2'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q35',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm tọa độ đỉnh $I$ và phương trình trục đối xứng của parabol $(P): y = -x^2 + 4x - 3$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'I(2;1), x = 2',
    acceptedAnswers: ['I(2;1), x = 2', 'I(2; 1), x = 2', 'I(2;1); x=2', 'I(2;1), x=2', '(2;1), x=2'],
    validatorType: 'exact',
    correctFinalAnswer: { dinh_i: 'I(2;1)', truc_dx: 'x = 2' },
    acceptedFinalAnswers: [
      { dinh_i: 'I(2;1)', truc_dx: 'x = 2' },
      { dinh_i: '(2;1)', truc_dx: 'x = 2' },
      { dinh_i: 'I(2,1)', truc_dx: 'x = 2' },
      { dinh_i: '(2,1)', truc_dx: 'x = 2' }
    ],
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'dinh_i', label: 'Tọa độ đỉnh I:', valueType: 'text', placeholder: 'Ví dụ: I(2; 2)' },
        { key: 'truc_dx', label: 'Trục đối xứng:', valueType: 'text', placeholder: 'Ví dụ: x = 1' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q36',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $(P): y = ax^2 + bx + c$ biết $(P)$ đi qua điểm $A(1; 0)$ và có đỉnh $I(3; -4)$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'y = x^2 - 6x + 5',
    acceptedAnswers: ['y = x^2 - 6x + 5', 'y=x^2-6x+5', 'x^2-6x+5', 'y = x^2-6x+5'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q37',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $(P): y = ax^2 + bx + c$ có trục đối xứng là đường thẳng $x = 1$, cắt trục tung tại điểm $A(0; 4)$ và đi qua điểm $C(3; 7)$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'y = x^2 - 2x + 4',
    acceptedAnswers: ['y = x^2 - 2x + 4', 'y=x^2-2x+4', 'x^2-2x+4', 'y = x^2-2x+4'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q38',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 3$ trên đoạn $[0; 3]$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'max y = 3, min y = -1',
    acceptedAnswers: [
      'GTLN = 3, GTNN = -1',
      'max = 3, min = -1',
      'max y = 3, min y = -1',
      '3 và -1',
      '3; -1',
      'max = 3, min = -1'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { max_y: '3', min_y: '-1' },
    acceptedFinalAnswers: [
      { max_y: '3', min_y: '-1' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'max_y', label: 'Giá trị lớn nhất (GTLN):', valueType: 'number', placeholder: 'Nhập GTLN' },
        { key: 'min_y', label: 'Giá trị nhỏ nhất (GTNN):', valueType: 'number', placeholder: 'Nhập GTNN' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q39',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = -2x^2 + 4x + 1$ trên đoạn $[2; 4]$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'max y = 1, min y = -15',
    acceptedAnswers: [
      'GTLN = 1, GTNN = -15',
      'max = 1, min = -15',
      'max y = 1, min y = -15',
      '1 và -15',
      '1; -15'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { max_y: '1', min_y: '-15' },
    acceptedFinalAnswers: [
      { max_y: '1', min_y: '-15' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'max_y', label: 'Giá trị lớn nhất (GTLN):', valueType: 'number', placeholder: 'Nhập GTLN' },
        { key: 'min_y', label: 'Giá trị nhỏ nhất (GTNN):', valueType: 'number', placeholder: 'Nhập GTNN' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q40',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một quả bóng được đá từ mặt đất lên cao theo quỹ đạo là một parabol $h(t) = -5t^2 + 15t$ (trong đó $h$ là chiều cao tính bằng mét, $t$ là thời gian tính bằng giây kể từ lúc đá). Tìm chiều cao lớn nhất mà quả bóng đạt được.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '11.25m',
    acceptedAnswers: ['11.25m', '11.25', '11,25m', '11,25', '11.25 mét', '11,25 mét'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q41',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một người nông dân muốn rào một khu vườn hình chữ nhật có một cạnh là bức tường đá có sẵn. Người đó có 40m lưới thép để rào ba cạnh còn lại của khu vườn. Hỏi diện tích lớn nhất của khu vườn mà người đó có thể rào được là bao nhiêu mét vuông?',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '200m^2',
    acceptedAnswers: ['200m^2', '200', '200 m2', '200m2', '200 mét vuông'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q42',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm tất cả các giá trị thực của tham số $m$ để giá trị nhỏ nhất của hàm số $y = x^2 - 2mx + m^2 + 2m - 1$ trên đoạn $[0; 2]$ bằng $2$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'm = -3 hoặc m = 1.5',
    acceptedAnswers: [
      'm = -3 hoặc m = 1.5',
      'm = -3 hoặc m = 3/2',
      'm = -3; m = 1.5',
      'm = -3, m = 1.5',
      '-3 và 1.5',
      '-3; 1.5',
      'm = -3 hoặc m = 1,5'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q43',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một công ty du lịch dự định tổ chức một tour du lịch. Nếu giá tour là 2 triệu đồng/khách thì có 150 khách tham gia. Nếu công ty tăng giá tour thêm mỗi 100 nghìn đồng thì số khách tham gia giảm đi 5 khách. Hỏi công ty nên đặt giá tour là bao nhiêu để doanh thu đạt lớn nhất?',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '2.5 triệu đồng',
    acceptedAnswers: [
      '2.5 triệu đồng',
      '2,5 triệu đồng',
      '2.500.000 đồng',
      '2500000',
      '2.5 triệu',
      '2,5 triệu',
      '2500000 đồng'
    ],
    validatorType: 'exact'
  },
  {
    id: 'math10-q44',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có các cạnh $a = 6$, $b = 8$, $c = 10$. Tính diện tích tam giác $S$, bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ của tam giác đó.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'S = 24, R = 5, r = 2',
    acceptedAnswers: [
      'S = 24, R = 5, r = 2',
      'S=24, R=5, r=2',
      '24; 5; 2',
      '24, 5, 2',
      '24;5;2'
    ],
    validatorType: 'exact',
    correctFinalAnswer: { S: '24', R: '5', r: '2' },
    acceptedFinalAnswers: [
      { S: '24', R: '5', r: '2' }
    ],
    answerSchema: {
      type: 'single-number',
      fields: [
        { key: 'S', label: 'Diện tích S:', valueType: 'number', placeholder: 'Nhập S' },
        { key: 'R', label: 'Bán kính ngoại tiếp R:', valueType: 'number', placeholder: 'Nhập R' },
        { key: 'r', label: 'Bán kính nội tiếp r:', valueType: 'number', placeholder: 'Nhập r' }
      ],
      proofImageRequired: false,
      autoCheckMode: 'exact'
    }
  },
  {
    id: 'math10-q45',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có góc $A = 60^\\circ$, các cạnh $b = 5$ và $c = 8$. Tính độ dài cạnh $a$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '7',
    acceptedAnswers: ['7', 'a = 7', 'a=7'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q46',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có góc $A = 30^\\circ$, góc $B = 45^\\circ$ và cạnh $a = 4$. Tính độ dài cạnh $b$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '4\\sqrt{2}',
    acceptedAnswers: ['4\\sqrt{2}', '4\\sqrt{2}', '4*sqrt(2)', '5.66', '5,66', '4 \\sqrt{2}'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q47',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có các cạnh $a = 13$, $b = 14$, $c = 15$. Tính diện tích tam giác $S$ của tam giác đó.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '84',
    acceptedAnswers: ['84', 'S = 84', 'S=84'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q48',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có các cạnh $a = 7$, $b = 8$, $c = 5$. Tính bán kính đường tròn nội tiếp $r$ của tam giác đó.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '\\sqrt{3}',
    acceptedAnswers: ['\\sqrt{3}', '\\sqrt{3}', 'sqrt(3)', '1.73', '1,73', '\\sqrt{3}'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q49',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có các cạnh $a = 5$, $b = 6$, $c = 7$. Tính côsin của góc $A$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '5/7',
    acceptedAnswers: ['5/7', 'cos A = 5/7', 'cos(A) = 5/7', '0.71', '0,71'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q50',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Từ vị trí $A$ người ta quan sát một ngọn tháp và đo được góc nâng là $30^\\circ$. Đi về phía chân tháp 50m đến vị trí $B$, người ta đo được góc nâng là $60^\\circ$. Tính chiều cao của tháp (làm tròn kết quả đến hàng đơn vị mét).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '43m',
    acceptedAnswers: ['43m', '43', '43 mét', '43 m'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q51',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $a = 4$, $b = 5$ và diện tích $S = 5\\sqrt{3}$. Biết góc $C$ là góc tù. Tính độ dài cạnh $c$ của tam giác đó.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '\\sqrt{61}',
    acceptedAnswers: ['\\sqrt{61}', '\\sqrt{61}', 'sqrt(61)', '7.81', '7,81'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q52',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Hai chiếc tàu thủy cùng xuất phát từ vị trí $O$ đi thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất đi với vận tốc $15\\text{ km/h}$, tàu thứ hai đi với vận tốc $40\\text{ km/h}$. Hỏi sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu kilômét?',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '50',
    acceptedAnswers: ['50', '50km', '50 km', '50 kilômét', '50 kilomet'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q53',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Để đo khoảng cách từ điểm $A$ trên bờ đến hòn đảo nhỏ $C$ ngoài khơi, người ta chọn một điểm $B$ cùng ở trên bờ sao cho khoảng cách $AB = 100\\text{m}$. Đo các góc $\\angle CAB = 80^\\circ$ và $\\angle CBA = 70^\\circ$. Tính khoảng cách $AC$ từ bờ đến đảo (làm tròn kết quả đến hàng đơn vị mét).',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '188m',
    acceptedAnswers: ['188m', '188', '188 mét', '188 m'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q54',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác đều $ABC$ cạnh $a$. Tính tích vô hướng của hai vectơ $\\vec{AB}$ và $\\vec{BC}$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '-a^2/2',
    acceptedAnswers: ['-a^2/2', '-a^2 / 2', '-1/2a^2', '-0.5a^2', '-0,5a^2', '-1/2 a^2'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q55',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hai vectơ $\\vec{u} = (2; -1)$ và $\\vec{v} = (3; 4)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '2',
    acceptedAnswers: ['2', 'u.v = 2', 'u . v = 2'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q56',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hai vectơ $\\vec{u} = (1; \\sqrt{3})$ và $\\vec{v} = (\\sqrt{3}; 1)$. Tính số đo góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ (theo đơn vị độ).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '30 độ',
    acceptedAnswers: ['30 độ', '30', '30°', '30 do', '30 degree'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q57',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho ba điểm $A(1; 2)$, $B(-1; 1)$ và $C(3; -2)$. Tính tích vô hướng của hai vectơ $\\vec{AB}$ và $\\vec{AC}$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '0',
    acceptedAnswers: ['0', 'AB.AC = 0', 'AB . AC = 0'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q58',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3$ và $AC = 4$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{BC}$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '-9',
    acceptedAnswers: ['-9', 'AB.BC = -9', 'AB . BC = -9'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q59',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có độ dài lần lượt là $3$ và $4$. Biết góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ là $120^\\circ$. Tính độ dài của vectơ $\\vec{u} = \\vec{a} + \\vec{b}$.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '\\sqrt{13}',
    acceptedAnswers: ['\\sqrt{13}', '\\sqrt{13}', 'sqrt(13)', '3.61', '3,61'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q60',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho hai vectơ $\\vec{u} = (2; x)$ và $\\vec{v} = (-3; 6)$. Tìm giá trị của $x$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '1',
    acceptedAnswers: ['1', 'x = 1', 'x=1'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q61',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho tam giác $ABC$ với $A(1; 3)$, $B(5; 1)$ và $C(5; 5)$. Tìm tọa độ trực tâm $H$ của tam giác $ABC$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'H(4;3)',
    acceptedAnswers: ['H(4;3)', 'H(4; 3)', '(4;3)', '(4; 3)', '4;3', '4; 3'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q62',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hình chữ nhật $ABCD$ có $AB = 2$ và $AD = 2\\sqrt{2}$. Gọi $K$ là trung điểm của cạnh $AD$. Tính tích vô hướng của hai vectơ $\\vec{AC}$ và $\\vec{BK}$.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '0',
    acceptedAnswers: ['0', 'AC.BK = 0', 'AC . BK = 0'],
    validatorType: 'exact'
  },
  {
    id: 'math10-q63',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 1$, $|\\vec{b}| = 2$ và góc giữa chúng bằng $60^\\circ$. Tìm giá trị thực của tham số $k$ để hai vectơ $\\vec{u} = \\vec{a} + 2\\vec{b}$ và $\\vec{v} = k\\vec{a} - \\vec{b}$ vuông góc với nhau.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'k = 3',
    acceptedAnswers: ['k = 3', 'k=3', '3', 'k = 3'],
    validatorType: 'exact'
  }
];
