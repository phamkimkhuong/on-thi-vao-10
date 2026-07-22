import { Question } from '@/types';

export const g10MathAssessmentQuestions: Question[] = [
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
    responseType: 'single_choice',
    points: 0.5,
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
    content: 'Cho hai tập hợp $A = [-2; 3)$ và $B = (1; 5]$. Xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
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
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: S',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'single_choice',
    points: 0.5,
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
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
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
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
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
    responseType: 'short_answer',
    points: 1,
    correctAnswer: '4',
    acceptedAnswers: ['4', '4 triệu', '4 triệu đồng'],
    validatorType: 'exact'
  },
  // ĐỀ GIỮA HỌC KỲ I – MÃ B (q21 - q30)
  // Phần I: Trắc nghiệm 4 lựa chọn
  {
    id: 'mock-math10-q21',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x < 3\\}$ và $B = \\{x \\in \\mathbb{R} \\mid 1 \\le x \\le 5\\}$. Tập hợp $A \\backslash B$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.5,
    options: [
      'A. $A \\backslash B = (-\\infty; 1)$',
      'B. $A \\backslash B = (-\\infty; 1]$',
      'C. $A \\backslash B = [1; 3)$',
      'D. $A \\backslash B = (1; 3)$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q22',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Mệnh đề nào sau đây là mệnh đề ĐÚNG?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.5,
    options: [
      'A. $\\forall x \\in \\mathbb{R}, x^2 > 0$',
      'B. $\\exists x \\in \\mathbb{R}, x^2 < 0$',
      'C. $\\exists x \\in \\mathbb{R}, x^2 - 3x + 2 = 0$',
      'D. $\\forall x \\in \\mathbb{R}, x^2 - x - 1 \\ge 0$'
    ],
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q23',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.5,
    options: [
      'A. $\\begin{cases} x^2 + y > 3 \\\\ x - y \\le 1 \\end{cases}$',
      'B. $\\begin{cases} x + 2y \\le 4 \\\\ 2x - 3y > 6 \\end{cases}$',
      'C. $\\begin{cases} x + y + z > 0 \\\\ x - y \\le 2 \\end{cases}$',
      'D. $\\begin{cases} xy + x > 1 \\\\ x - y \\le 3 \\end{cases}$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q24',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho parabol $(P): y = -x^2 + 2x + 3$. Hàm số đồng biến trên khoảng nào sau đây?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.5,
    options: [
      'A. $(1; +\\infty)$',
      'B. $(-\\infty; 1)$',
      'C. $(-\\infty; 2)$',
      'D. $(2; +\\infty)$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  // Phần II: Trắc nghiệm Đúng/Sai
  {
    id: 'mock-math10-q25',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho hàm số bậc hai $y = f(x) = -x^2 + 4x - 3$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Đồ thị hàm số đi qua điểm $M(1; 0)$ và có hoành độ đỉnh là $x = 2$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Giá trị lớn nhất của hàm số trên toàn bộ tập xác định là $1$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Đồ thị hàm số cắt trục tung tại điểm có tọa độ $(0; -3)$ và cắt trục hoành tại hai điểm phân biệt.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Tập hợp tất cả các giá trị của $x$ để $f(x) \\ge 0$ là đoạn $[1; 3]$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
  {
    id: 'mock-math10-q26',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một cửa hàng kinh doanh đồ gỗ muốn tối ưu doanh thu từ sản xuất hai loại ghế: ghế bành (x cái) và ghế tựa (y cái). Lợi nhuận thu được khi bán mỗi chiếc ghế bành là 250 nghìn đồng, mỗi chiếc ghế tựa là 150 nghìn đồng. Để sản xuất được một chiếc ghế bành cần 3 giờ làm việc của máy và 2 giờ hoàn thiện. Để sản xuất một chiếc ghế tựa cần 2 giờ làm việc của máy và 1 giờ hoàn thiện. Biết tổng số giờ máy hoạt động tối đa là 120 giờ và thời gian hoàn thiện tối đa là 70 giờ mỗi tuần. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 2,
    correctAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Bất phương trình giới hạn thời gian hoạt động của máy là $3x + 2y \\le 120$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Bất phương trình giới hạn thời gian hoàn thiện là $2x + y \\le 70$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Hàm số biểu thị lợi nhuận thu được (tính bằng nghìn đồng) là $F(x; y) = 150x + 250y$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Cửa hàng sẽ đạt lợi nhuận lớn nhất khi sản xuất 20 chiếc ghế bành và 30 chiếc ghế tựa.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
      { a: 'đ', b: 'đ', c: 's', d: 'đ' },
      { a: 'D', b: 'D', c: 'S', d: 'D' },
      { a: 'd', b: 'd', c: 's', d: 'd' }
    ]
  },
  // Phần III: Trắc nghiệm Trả lời ngắn
  {
    id: 'mock-math10-q27',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 3; m + 1]$ và $B = [-2; 5]$. Tìm số lượng các giá trị nguyên của m để $A \\subset B$. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 1,
    correctAnswer: '4',
    acceptedAnswers: ['4', '4 giá trị'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q28',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $y = ax^2 + bx + 3$ biết parabol đi qua điểm $A(1; 0)$ và có trục đối xứng là đường thẳng $x = 2$. Nhập phương trình parabol tìm được dạng chuẩn không chứa dấu cách (ví dụ: x^2-4x+3).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 1,
    correctAnswer: 'x^2-4x+3',
    acceptedAnswers: ['x^2-4x+3', 'x^2 - 4x + 3', 'y=x^2-4x+3', 'y = x^2 - 4x + 3'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q29',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Một người đứng tại điểm A trên bờ biển quan sát một ngọn hải đăng C ngoài khơi. Người đó đo góc giữa AC với một đường biên AB dài 200m trên bờ biển. Đo góc CAB = 60 độ và góc CBA = 45 độ. Tính khoảng cách AC từ điểm quan sát đến ngọn hải đăng (làm tròn đến hàng đơn vị mét, chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 1,
    correctAnswer: '146',
    acceptedAnswers: ['146', '146m', '146 mét'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q30',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho ba điểm A(1; 2), B(-2; 5), C(4; 4). Tính tích vô hướng của hai vectơ $\\vec{AB} \\cdot \\vec{AC}$. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 1,
    correctAnswer: '-3',
    acceptedAnswers: ['-3'],
    validatorType: 'exact'
  },
  // ĐỀ CUỐI KỲ 1 (22 CÂU CHUẨN BỘ GD&ĐT: q31 - q52)
  // Phần I: Trắc nghiệm 4 lựa chọn (12 câu)
  {
    id: 'mock-math10-q31',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho mệnh đề $P: "\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0"$. Mệnh đề phủ định của $P$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - x + 1 < 0$',
      'B. $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$',
      'C. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$',
      'D. $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - x + 1 \\ge 0$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q32',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [-1; 4]$ và $B = (2; 6)$. Xác định tập hợp $A \\backslash B$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $A \\backslash B = [-1; 2]$',
      'B. $A \\backslash B = [-1; 2)$',
      'C. $A \\backslash B = [4; 6)$',
      'D. $A \\backslash B = (2; 4]$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q33',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Miền nghiệm của bất phương trình $2x + y > 3$ chứa điểm nào sau đây?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. A(1; 1)',
      'B. B(0; 2)',
      'C. C(2; 1)',
      'D. D(-1; 3)'
    ],
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q34',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho hàm số $y = 2x^2 - 4x + 5$. Trục đối xứng của đồ thị hàm số là đường thẳng:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. x = 1',
      'B. x = 2',
      'C. x = -1',
      'D. x = -2'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q35',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $AB = 6, AC = 8$ và góc $\\angle A = 120^\\circ$. Tính độ dài cạnh $BC$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. BC = 10',
      'B. BC = $2\\sqrt{37}$',
      'C. BC = $2\\sqrt{13}$',
      'D. BC = 148'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q36',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác $ABC$ đều cạnh $a$. Tính độ dài của vectơ $\\vec{AB} + \\vec{AC}$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. a',
      'B. $a\\sqrt{3}$',
      'C. 2a',
      'D. $a\\sqrt{2}$'
    ],
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q37',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tập xác định của hàm số $y = \\frac{\\sqrt{x - 1}}{x - 3}$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. D = $[1; +\\infty) \\backslash \\{3\\}$',
      'B. D = $(1; +\\infty) \\backslash \\{3\\}$',
      'C. D = $[1; 3)$',
      'D. D = $\\mathbb{R} \\backslash \\{3\\}$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q38',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho parabol $(P): y = -x^2 + 4x - 3$. Tọa độ đỉnh $I$ của $(P)$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. I(2; 1)',
      'B. I(-2; -15)',
      'C. I(2; -1)',
      'D. I(1; 0)'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q39',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có ba cạnh $a = 5, b = 6, c = 7$. Diện tích $S$ của tam giác $ABC$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. S = $6\\sqrt{6}$',
      'B. S = 24',
      'C. S = 6',
      'D. S = $12\\sqrt{6}$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q40',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho hai điểm $A(1; 3)$ và $B(-2; 5)$. Tìm tọa độ của vectơ $\\vec{AB}$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $\\vec{AB} = (-3; 2)$',
      'B. $\\vec{AB} = (3; -2)$',
      'C. $\\vec{AB} = (-1; 8)$',
      'D. $\\vec{AB} = (-3; -2)$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q41',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho hai vectơ $\\vec{u} = (2; -3)$ và $\\vec{v} = (1; 4)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. -10',
      'B. 10',
      'C. -14',
      'D. 14'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q42',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m; m + 2]$ và $B = [1; 5]$. Có bao nhiêu giá trị nguyên của tham số $m$ để $A \\subset B$?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. 3',
      'B. 4',
      'C. 2',
      'D. 5'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  // Phần II: Trắc nghiệm Đúng/Sai (4 câu)
  {
    id: 'mock-math10-q43',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = (0; 4)$ với $m$ là tham số thực. Xét tính đúng sai của các phát biểu sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Khi $m = 1$ thì $A = [0; 4]$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Khi $m = 1$ thì $A \\cap B = [0; 4]$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Hai tập hợp A và B rời nhau ($A \\cap B = \\varnothing$) khi và chỉ khi $m \\le -3$ hoặc $m \\ge 5$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Có đúng $7$ giá trị nguyên của $m$ để $A \\cap B \\neq \\varnothing$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
    id: 'mock-math10-q44',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một doanh nghiệp cần sản xuất hai loại sản phẩm A và B. Để sản xuất 1 đơn vị sản phẩm A cần 2 giờ làm việc của máy I và 1 giờ của máy II. Để sản xuất 1 đơn vị sản phẩm B cần 1 giờ của máy I và 3 giờ của máy II. Biết máy I hoạt động tối đa 10 giờ/ngày, máy II hoạt động tối đa 15 giờ/ngày. Lợi nhuận của mỗi đơn vị sản phẩm A là 3 triệu đồng, sản phẩm B là 2 triệu đồng. Gọi x, y lần lượt là số đơn vị sản phẩm A và B sản xuất trong ngày. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Bất phương trình thời gian hoạt động của máy I là $2x + y \\le 10$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Bất phương trình thời gian hoạt động của máy II là $x + 3y \\le 15$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Hàm lợi nhuận thu được mỗi ngày là $F(x; y) = 2x + 3y$ (triệu đồng).', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Lợi nhuận lớn nhất của doanh nghiệp trong một ngày là 17 triệu đồng.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
      { a: 'đ', b: 'đ', c: 's', d: 'đ' },
      { a: 'D', b: 'D', c: 'S', d: 'D' },
      { a: 'd', b: 'd', c: 's', d: 'd' }
    ]
  },
  {
    id: 'mock-math10-q45',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho hàm số bậc hai $y = f(x) = -x^2 + 2x + 3$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Đồ thị hàm số có trục đối xứng là đường thẳng $x = 1$ và đi qua điểm $A(0; 3)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Hàm số nghịch biến trên khoảng $(-\\infty; 1)$ và đồng biến trên khoảng $(1; +\\infty)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt là $B(-1; 0)$ và $C(3; 0)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ là $4$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
    id: 'mock-math10-q46',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3, AC = 4$. Gọi $M$ là trung điểm của cạnh $BC$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Độ dài cạnh $BC$ bằng $5$ và độ dài đường trung tuyến $AM$ bằng $2,5$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Diện tích tam giác $ABC$ bằng $12$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Tích vô hướng $\\vec{AM} \\cdot \\vec{BC}$ bằng $3,5$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
  // Phần III: Trắc nghiệm Trả lời ngắn (6 câu)
  {
    id: 'mock-math10-q47',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 2; m + 2]$ và $B = [-1; 3]$. Tìm số lượng các giá trị nguyên của m để $A \\cap B \\neq \\varnothing$. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '9',
    acceptedAnswers: ['9', '9 giá trị'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q48',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $y = ax^2 + bx + 1$ biết parabol đi qua điểm $A(1; 4)$ và có đỉnh có hoành độ bằng $2$. Nhập phương trình parabol dạng chuẩn không chứa dấu cách (ví dụ: -x^2+4x+1).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '-x^2+4x+1',
    acceptedAnswers: ['-x^2+4x+1', '-x^2 + 4x + 1', 'y=-x^2+4x+1', 'y = -x^2 + 4x + 1'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q49',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một doanh nghiệp bán sản phẩm với giá bán $P = 100 - x$ (triệu đồng/sản phẩm), trong đó $x$ là số sản phẩm bán ra. Chi phí sản xuất $x$ sản phẩm là $C(x) = 20x + 100$ (triệu đồng). Hỏi doanh nghiệp cần bán bao nhiêu sản phẩm để thu được lợi nhuận lớn nhất? (Chỉ điền giá trị số).',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '40',
    acceptedAnswers: ['40', '40 sản phẩm'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q50',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Để đo khoảng cách từ điểm A trên bờ đến một con tàu C ngoài khơi, người ta chọn một điểm B trên bờ cách A một khoảng 150m. Đo các góc CAB = 45 độ và góc CBA = 75 độ. Tính khoảng cách AC từ bờ đến con tàu (làm tròn đến hàng đơn vị mét, chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '167',
    acceptedAnswers: ['167', '167m', '167 mét'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q51',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho hình vuông $ABCD$ cạnh $a$. Tính tích vô hướng của hai vectơ $\\vec{AB} \\cdot \\vec{BD}$ theo $a^2$ (nhập hệ số trước $a^2$, ví dụ nếu kết quả là -a^2 thì điền -1).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '-1',
    acceptedAnswers: ['-1'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q52',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho ba điểm A(1; 2), B(3; 5) và C(x; y). Biết C thuộc trục hoành Ox và tam giác ABC vuông tại A. Tìm hoành độ x của điểm C. (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '4',
    acceptedAnswers: ['4'],
    validatorType: 'exact'
  },
  // ĐỀ CUỐI KỲ 2 (22 CÂU CHUẨN BỘ GD&ĐT: q53 - q74)
  // Phần I: Trắc nghiệm 4 lựa chọn (12 câu)
  {
    id: 'mock-math10-q53',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt1',
    content: 'Cho mệnh đề $P: "\\exists x \\in \\mathbb{R}, x^2 - 4x + 3 = 0"$. Mệnh đề phủ định của $P$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - 4x + 3 \\neq 0$',
      'B. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - 4x + 3 = 0$',
      'C. $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - 4x + 3 \\neq 0$',
      'D. $\\bar{P}: \\forall x \\in \\mathbb{R}, x^2 - 4x + 3 < 0$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q54',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = (-\\infty; 2]$ và $B = [0; 4)$. Xác định tập hợp $A \\cap B$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $A \\cap B = [0; 2]$',
      'B. $A \\cap B = (0; 2)$',
      'C. $A \\cap B = [0; 2)$',
      'D. $A \\cap B = (-\\infty; 4)$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q55',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Miền nghiệm của bất phương trình $x - 2y \\le 2$ KHÔNG chứa điểm nào sau đây?',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. O(0; 0)',
      'B. A(2; 0)',
      'C. B(1; -1)',
      'D. C(0; -2)'
    ],
    correctAnswer: 'D',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q56',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tìm tọa độ đỉnh của parabol $(P): y = x^2 - 6x + 8$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. I(3; -1)',
      'B. I(-3; 35)',
      'C. I(3; 1)',
      'D. I(6; 8)'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q57',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $b = 8, c = 5$ và góc $\\angle A = 60^\\circ$. Tính diện tích $S$ của tam giác $ABC$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. S = $10\\sqrt{3}$',
      'B. S = 10',
      'C. S = $20\\sqrt{3}$',
      'D. S = 20'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q58',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác $ABC$ đều cạnh $a$. Tính tích vô hướng của hai vectơ $\\vec{AB} \\cdot \\vec{AC}$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $\\frac{1}{2}a^2$',
      'B. $\\frac{\\sqrt{3}}{2}a^2$',
      'C. $a^2$',
      'D. $-\\frac{1}{2}a^2$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q59',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Tập xác định của hàm số $y = \\sqrt{3x - 6}$ là:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. D = [2; +\\infty)',
      'B. D = (2; +\\infty)',
      'C. D = (-\\infty; 2]',
      'D. D = \\mathbb{R}'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q60',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho parabol $(P): y = -x^2 + 2x + 2$. Tìm giá trị lớn nhất của hàm số trên $\\mathbb{R}$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. y = 3',
      'B. y = 2',
      'C. y = 1',
      'D. y = 4'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q61',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có ba cạnh $a = 6, b = 8, c = 10$. Tính bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. R = 5',
      'B. R = 10',
      'C. R = 4',
      'D. R = 6'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q62',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho điểm $A(2; 5)$ và $B(-1; 1)$. Tìm tọa độ trung điểm $M$ của đoạn thẳng $AB$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. M(0,5; 3)',
      'B. M(0,5; 2)',
      'C. M(1; 3)',
      'D. M(1; 6)'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q63',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho hai vectơ $\\vec{a} = (3; 1)$ và $\\vec{b} = (-2; 6)$. Hai vectơ này vuông góc với nhau vì:',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. Tích vô hướng của chúng bằng 0',
      'B. Độ dài của chúng bằng nhau',
      'C. Tích hoành độ bằng tích tung độ',
      'D. Chúng cùng phương'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'mock-math10-q64',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho tập hợp $A = [1; 5]$ và $B = (m; m + 2)$. Tìm điều kiện của tham số $m$ để $A \\cap B = \\varnothing$.',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'single_choice',
    points: 0.25,
    options: [
      'A. $m \\le -1$ hoặc $m \\ge 5$',
      'B. $m < -1$ hoặc $m > 5$',
      'C. $-1 < m < 5$',
      'D. $m \\le 1$ hoặc $m \\ge 5$'
    ],
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  // Phần II: Trắc nghiệm Đúng/Sai (4 câu)
  {
    id: 'mock-math10-q65',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Cho hàm số bậc hai $y = f(x) = x^2 - 2x - 3$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Đồ thị hàm số có đỉnh là $I(1; -4)$ và trục đối xứng là đường thẳng $x = 1$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Hàm số đồng biến trên khoảng $(1; +\\infty)$ và nghịch biến trên khoảng $(-\\infty; 1)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Đồ thị hàm số đi qua điểm $M(0; 3)$ và cắt trục hoành tại các điểm $(-1; 0)$ và $(3; 0)$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ là $-4$ và đạt được tại $x = 1$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
      ]
    },
    correctFinalAnswer: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    acceptedFinalAnswers: [
      { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
      { a: 'đ', b: 'đ', c: 's', d: 'đ' },
      { a: 'D', b: 'D', c: 'S', d: 'D' },
      { a: 'd', b: 'd', c: 's', d: 'd' }
    ]
  },
  {
    id: 'mock-math10-q66',
    subjectId: 'math',
    topicId: 'math10-t2',
    questionTypeId: 'math10-qt3',
    content: 'Một hộ nông dân định trồng hoa cúc (x sào) và hoa hồng (y sào) trên diện tích đất 8 sào. Lợi nhuận từ mỗi sào cúc là 15 triệu đồng, mỗi sào hồng là 20 triệu đồng. Để chăm sóc, mỗi sào cúc cần 10 ngày công, mỗi sào hồng cần 15 ngày công mỗi vụ. Biết tổng số ngày công trồng chăm sóc không vượt quá 90 ngày công. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Bất phương trình mô tả giới hạn về ngày công lao động là $10x + 15y \\le 90$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Bất phương trình giới hạn diện tích đất trồng hoa là $x + y \\le 8$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Hàm số biểu thị lợi nhuận thu được (tính bằng triệu đồng) là $F(x; y) = 15x + 20y$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Để đạt lợi nhuận lớn nhất, hộ nông dân nên trồng 6 sào cúc và 2 sào hồng.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
  {
    id: 'mock-math10-q67',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ có $AB = 4, AC = 6$ và góc $\\angle A = 120^\\circ$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Độ dài cạnh $BC$ bằng $2\\sqrt{19}$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng $-12$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Diện tích tam giác $ABC$ bằng $6\\sqrt{3}$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng $\\frac{2\\sqrt{57}}{3}$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
  {
    id: 'mock-math10-q68',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho tam giác ABC có $A(1; 3), B(-2; 1), C(4; 1)$. Xét tính đúng sai của các khẳng định sau:',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'true_false_cluster',
    points: 1,
    correctAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: [
        { key: 'a', label: 'a) Tọa độ trọng tâm $G$ của tam giác $ABC$ là $G(1; \\frac{5}{3})$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'b', label: 'b) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng $-3$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'c', label: 'c) Tam giác $ABC$ cân tại $A$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' },
        { key: 'd', label: 'd) Tọa độ trực tâm $H$ của tam giác $ABC$ là $H(1; \\frac{11}{2})$.', valueType: 'choice', placeholder: 'Đ hoặc S', hint: 'Nhập Đ hoặc S' }
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
  // Phần III: Trắc nghiệm Trả lời ngắn (6 câu)
  {
    id: 'mock-math10-q69',
    subjectId: 'math',
    topicId: 'math10-t1',
    questionTypeId: 'math10-qt2',
    content: 'Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = [1; 5]$. Hỏi có bao nhiêu giá trị nguyên của m thuộc đoạn $[-5; 10]$ để $A \\cap B = \\varnothing$? (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '7',
    acceptedAnswers: ['7', '7 giá trị'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q70',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Xác định parabol $y = ax^2 + bx + 3$ biết parabol đi qua điểm $M(1; 0)$ và có đỉnh $I(2; -1)$. Nhập phương trình parabol tìm được dạng chuẩn không chứa dấu cách (ví dụ: x^2-4x+3).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: 'x^2-4x+3',
    acceptedAnswers: ['x^2-4x+3', 'x^2 - 4x + 3', 'y=x^2-4x+3', 'y = x^2 - 4x + 3'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q71',
    subjectId: 'math',
    topicId: 'math10-t3',
    questionTypeId: 'math10-qt4',
    content: 'Một cửa hàng điện máy bán máy điều hòa nhiệt độ với giá ban đầu là 12 triệu đồng/máy, trung bình bán được 40 máy mỗi tháng. Cửa hàng khảo sát thấy cứ mỗi lần giảm giá bán 500 nghìn đồng/máy thì số lượng máy bán ra trong tháng tăng thêm 5 máy. Hỏi cửa hàng cần giảm giá bán bao nhiêu triệu đồng mỗi máy để đạt doanh thu lớn nhất? (Chỉ điền giá trị số).',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '4',
    acceptedAnswers: ['4', '4 triệu', '4 triệu đồng'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q72',
    subjectId: 'math',
    topicId: 'math10-t4',
    questionTypeId: 'math10-qt6',
    content: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 6, AC = 8$. Gọi $M$ là trung điểm của $BC$. Tính độ dài đường trung tuyến $AM$. (Chỉ điền giá trị số).',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '5',
    acceptedAnswers: ['5'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q73',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Cho tam giác $ABC$ đều cạnh $a$. Tính tích vô hướng của hai vectơ $\\vec{AB} \\cdot \\vec{BC}$ theo $a^2$ (chỉ điền hệ số trước $a^2$, ví dụ nếu kết quả là -0,5a^2 thì điền -0,5).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '-0,5',
    acceptedAnswers: ['-0,5', '-0.5'],
    validatorType: 'exact'
  },
  {
    id: 'mock-math10-q74',
    subjectId: 'math',
    topicId: 'math10-t5',
    questionTypeId: 'math10-qt7',
    content: 'Trong mặt phẳng tọa độ Oxy, cho ba điểm A(2; 2), B(5; 1) và C(x; y). Biết C thuộc trục hoành Ox và tam giác ABC vuông tại C. Tìm hoành độ x của điểm C (biết x > 3). (Chỉ điền giá trị số).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    responseType: 'short_answer',
    points: 0.5,
    correctAnswer: '4',
    acceptedAnswers: ['4'],
    validatorType: 'exact'
  }
];
