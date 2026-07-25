import type { Question } from '@/types';

export const g10MathModule3Questions: Question[] = [
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
      id: 'math10-q70',
      subjectId: 'math',
      topicId: 'math10-t3',
      questionTypeId: 'math10-qt4',
      content: 'Tìm hoành độ trục đối xứng của parabol $y=2x^2-8x+3$.',
      difficulty: 'easy',
      sourceType: 'manual',
      correctAnswer: '2',
      acceptedAnswers: ['2', 'x = 2', 'x=2'],
      validatorType: 'number',
      correctFinalAnswer: { value: '2' },
      acceptedFinalAnswers: [{ value: '2' }],
      answerSchema: {
        type: 'single-number',
        fields: [{ key: 'value', label: 'Hoành độ trục đối xứng:', valueType: 'number', placeholder: 'Nhập giá trị' }],
        proofImageRequired: false,
        autoCheckMode: 'numeric'
      }
    },
  {
    "id": "math10-m3-q001",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có đỉnh $I(1;-2)$ và đi qua $A(0;-1)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $y=x^2-2x-1$",
      "B. $y=x^2+2x-1$",
      "C. $y=-x^2+2x-1$",
      "D. $y=(x-1)^2+2$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q002",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có hai nghiệm 1, 3 và đi qua điểm $(0;3)$. Phương trình là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $y=x^2+4x+3$",
      "B. $y=x^2-4x+3$",
      "C. $y=3x^2-4x+1$",
      "D. $y=-x^2+4x-3$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q003",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol đi qua ba điểm $(-1;6)$, $(0;1)$, $(2;3)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $y=x^2-4x+1$",
      "B. $y=2x^2+3x+1$",
      "C. $y=2x^2-3x+1$",
      "D. $y=-2x^2-3x+1$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q004",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có trục đối xứng $x=2$, cắt Oy tại $(0;5)$ và đi qua $(1;2)$. Phương trình là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $y=x^2+4x+5$",
      "B. $y=2x^2-4x+5$",
      "C. $y=-x^2+4x+5$",
      "D. $y=x^2-4x+5$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q005",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có đỉnh $I(-2;3)$ và đi qua $(0;-5)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $y=-2(x+2)^2+3$",
      "B. $y=2(x+2)^2+3$",
      "C. $y=-2(x-2)^2+3$",
      "D. $y=-2(x+2)^2-3$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q006",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có hai nghiệm −1, 4 và đi qua $(0;8)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $y=2x^2-6x-8$",
      "B. $y=-2x^2+6x+8$",
      "C. $y=-2x^2-6x+8$",
      "D. $y=x^2-3x-4$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q007",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol đi qua $(0;-2)$, $(1;0)$, $(3;10)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $y=x^2-x-2$",
      "B. $y=2x^2+x-2$",
      "C. $y=x^2+x-2$",
      "D. $y=-x^2+x+2$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q008",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có trục đối xứng $x=-1$, cắt Oy tại $(0;2)$ và đi qua $(2;14)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $y=\\frac32x^2-3x+2$",
      "B. $y=3x^2+\\frac32x+2$",
      "C. $y=-\\frac32x^2+3x+2$",
      "D. $y=\\frac32x^2+3x+2$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q009",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Parabol có đỉnh $(2;1)$ và cắt Oy tại $(0;9)$. Phương trình nào đúng?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $y=2(x-2)^2+1$",
      "B. $y=2(x+2)^2+1$",
      "C. $y=-2(x-2)^2+1$",
      "D. $y=(x-2)^2+1$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q010",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Đỉnh của parabol $y=x^2+6x+5$ là điểm nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $(3;-4)$",
      "B. $(-3;-4)$",
      "C. $(-3;4)$",
      "D. $(3;4)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q011",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "GTNN của $y=2x^2-8x+1$ trên $\\mathbb R$ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $7$",
      "B. $-8$",
      "C. $-7$",
      "D. $1$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q012",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "GTLN của $y=-x^2-2x+3$ trên $\\mathbb R$ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $-1$",
      "B. $3$",
      "C. $5$",
      "D. $4$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q013",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Trên đoạn $[0;4]$, hàm $y=x^2-4x+1$ có cặp (GTLN; GTNN) nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(1;-3)$",
      "B. $(-3;1)$",
      "C. $(1;1)$",
      "D. $(5;-3)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q014",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Trên đoạn $[-1;2]$, hàm $y=-2x^2+4x+3$ có cặp (GTLN; GTNN) nào?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(3;-3)$",
      "B. $(5;-3)$",
      "C. $(5;3)$",
      "D. $(-3;5)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q015",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Tập giá trị của $y=3(x-2)^2-4$ là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(-\\infty;-4]$",
      "B. $[-2;+\\infty)$",
      "C. $[-4;+\\infty)$",
      "D. $(-4;+\\infty)$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q016",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Tìm m để GTNN của $y=x^2-4x+m$ trên $\\mathbb R$ bằng 3.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $m=3$",
      "B. $m=-1$",
      "C. $m=4$",
      "D. $m=7$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q017",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Độ cao quả bóng là $h(t)=-5t^2+20t$. Chiều cao lớn nhất bằng bao nhiêu mét?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $20$",
      "B. $2$",
      "C. $15$",
      "D. $25$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q018",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Hình chữ nhật có chu vi 20 m. Diện tích lớn nhất bằng bao nhiêu mét vuông?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $20$",
      "B. $25$",
      "C. $50$",
      "D. $100$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q019",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Doanh thu được mô tả bởi $R(x)=-2x^2+40x$ (triệu đồng). Doanh thu lớn nhất là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $20$",
      "C. $200$",
      "D. $400$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q020",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Cổng vòm có dạng $y=-x^2+6x$ với mặt đất là y=0. Chiều cao lớn nhất của cổng là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $3$",
      "B. $6$",
      "C. $12$",
      "D. $9$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q021",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Quỹ đạo có $h(t)=-5t^2+15t+2$. Chiều cao cực đại là bao nhiêu mét?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $13.25$",
      "B. $1.5$",
      "C. $11.25$",
      "D. $15.25$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q022",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Có 60 m hàng rào để rào ba cạnh hình chữ nhật sát tường. Diện tích lớn nhất là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $225$",
      "B. $450$",
      "C. $600$",
      "D. $900$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q023",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Giá ban đầu 40 nghìn đồng bán được 100 sản phẩm. Mỗi lần tăng 5 nghìn thì giảm 10 sản phẩm. Giá nào cho doanh thu lớn nhất?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. 40 nghìn đồng",
      "B. 50 nghìn đồng",
      "C. 45 nghìn đồng",
      "D. 55 nghìn đồng"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q024",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt4",
    "content": "Lợi nhuận $P(x)=-3x^2+120x-500$ (triệu đồng). Lợi nhuận lớn nhất bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $20$",
      "B. $500$",
      "C. $1200$",
      "D. $700$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q025",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Cho $f(x)=2x-3$. Tính $f(4)$.",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $5$",
      "B. $8$",
      "C. $1$",
      "D. $-5$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q026",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Cho $f(x)=x^2+1$. Tính $f(-2)$.",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $-3$",
      "B. $5$",
      "C. $3$",
      "D. $-5$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q027",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=x^3-2x+1$ là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $[0;+\\infty)$",
      "B. $\\mathbb R\\setminus\\{0\\}$",
      "C. $\\mathbb R$",
      "D. $(-\\infty;1]$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q028",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\dfrac{1}{x-3}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\mathbb R\\setminus\\{-3\\}$",
      "B. $(3;+\\infty)$",
      "C. $\\mathbb R$",
      "D. $\\mathbb R\\setminus\\{3\\}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q029",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\sqrt{x+2}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $[-2;+\\infty)$",
      "B. $(-2;+\\infty)$",
      "C. $(-\\infty;-2]$",
      "D. $[2;+\\infty)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q030",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\sqrt{5-x}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $[5;+\\infty)$",
      "B. $(-\\infty;5]$",
      "C. $(-\\infty;5)$",
      "D. $(-5;+\\infty)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q031",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\dfrac{x+1}{x^2-4}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\mathbb R\\setminus\\{2\\}$",
      "B. $[-2;2]$",
      "C. $\\mathbb R\\setminus\\{-2;2\\}$",
      "D. $(-2;2)$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q032",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\dfrac{\\sqrt{2x-1}}{x-3}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(\\frac12;3)\\cup(3;+\\infty)$",
      "B. $[\\frac12;+\\infty)$",
      "C. $(-\\infty;\\frac12]\\setminus\\{3\\}$",
      "D. $[\\frac12;3)\\cup(3;+\\infty)$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q033",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Cho $f(x)=x^2-2x$. Biểu thức $f(a+1)$ bằng gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $a^2-1$",
      "B. $a^2+1$",
      "C. $a^2-2a-1$",
      "D. $a^2+2a$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q034",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Cho $f(x)=\\begin{cases}x+2&x<0\\\\x^2&x\\ge0\\end{cases}$. Tính $f(-3)+f(2)$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $-1$",
      "B. $3$",
      "C. $5$",
      "D. $9$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q035",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\sqrt{\\dfrac{x-1}{x+2}}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(-2;1]$",
      "B. $(-\\infty;-2]\\cup(1;+\\infty)$",
      "C. $(-\\infty;-2)\\cup[1;+\\infty)$",
      "D. $[1;+\\infty)$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q036",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Tập xác định của $f(x)=\\dfrac{1}{\\sqrt{4-x^2}}$ là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $[-2;2]$",
      "B. $(-\\infty;-2)\\cup(2;+\\infty)$",
      "C. $[-2;2)$",
      "D. $(-2;2)$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q037",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Bảng giá trị cho x: −2,−1,0,1,2 và f(x): 4,1,0,1,4. Giá trị $f(-1)$ là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $-1$",
      "C. $0$",
      "D. $4$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q038",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Với bảng x: −2,−1,0,1,2 và f(x): 4,1,0,1,4, nghiệm của $f(x)=0$ là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=-2$",
      "B. $x=0$",
      "C. $x=1$",
      "D. $x=2$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q039",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị chỉ tồn tại từ điểm kín $(-3;1)$ đến điểm kín $(5;2)$. Tập xác định đọc được là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $[1;2]$",
      "B. $(-3;5)$",
      "C. $[-3;5]$",
      "D. $[-3;2]$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q040",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị có tung độ nhỏ nhất −2 và lớn nhất 6, đều đạt được. Tập giá trị là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(-2;6)$",
      "B. $[-2;+\\infty)$",
      "C. $[-6;2]$",
      "D. $[-2;6]$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q041",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị cắt trục Ox tại $x=-1$ và $x=3$. Nghiệm của $f(x)=0$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x=-1\\text{ hoặc }x=3$",
      "B. $x=0$",
      "C. $x=1\\text{ hoặc }x=-3$",
      "D. $x=-1\\text{ và }x=0$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q042",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị nằm phía trên Ox trên các khoảng $(-2;1)$ và $(4;6)$. Khi nào $f(x)>0$?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x\\in(1;4)$",
      "B. $x\\in(-2;1)\\cup(4;6)$",
      "C. $x\\in[-2;1]\\cup[4;6]$",
      "D. $x\\in(-\\infty;-2)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q043",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Hàm số liên tục tại $x=2$, tăng trên $(-\\infty;2)$ và giảm trên $(2;+\\infty)$. Điểm $x=2$ có vai trò gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $Điểm đạt cực tiểu$",
      "B. $Một nghiệm bắt buộc$",
      "C. $Điểm đạt cực đại$",
      "D. $Điểm gián đoạn bắt buộc$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q044",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Bảng biến thiên cho biết f giảm từ 5 xuống −1 rồi tăng lên 3. Giá trị nhỏ nhất là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $5$",
      "B. $3$",
      "C. $-5$",
      "D. $-1$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q045",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị đối xứng qua trục Oy và đi qua $(3;5)$. Điểm nào chắc chắn cũng thuộc đồ thị?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(-3;5)$",
      "B. $(3;-5)$",
      "C. $(-5;3)$",
      "D. $(5;-3)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q046",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Một đường ngang $y=2$ cắt đồ thị tại ba điểm phân biệt. Phương trình $f(x)=2$ có bao nhiêu nghiệm?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $3$",
      "C. $2$",
      "D. $Không có$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q047",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị gồm đoạn từ điểm trống $(0;1)$ đến điểm kín $(4;5)$. Tập xác định là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $[0;4]$",
      "B. $(1;5]$",
      "C. $(0;4]$",
      "D. $[1;5)$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q048",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đồ thị $y=f(x)$ có GTLN 7 tại x=−2 và GTNN −3 tại x=4. Hiệu GTLN−GTNN bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $4$",
      "B. $5$",
      "C. $-10$",
      "D. $10$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q049",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Hàm bậc nhất đi qua $(0;1)$ và $(2;5)$. Công thức là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $y=2x+1$",
      "B. $y=x+2$",
      "C. $y=2x-1$",
      "D. $y=3x+1$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q050",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Hàm $f(x)=ax+b$ thỏa $f(0)=-2$, $f(3)=4$. Công thức nào đúng?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $f(x)=2x+2$",
      "B. $f(x)=2x-2$",
      "C. $f(x)=3x-2$",
      "D. $f(x)=x+4$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q051",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Đại lượng y tỉ lệ thuận với x, và y=12 khi x=4. Công thức liên hệ là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $y=4x$",
      "B. $y=12x$",
      "C. $y=3x$",
      "D. $y=3+x$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q052",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Taxi thu 12 nghìn đồng mở cửa và 8 nghìn cho mỗi km. Chi phí C (nghìn đồng) theo quãng đường x là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $C(x)=12x+8$",
      "B. $C(x)=20x$",
      "C. $C(x)=8x-12$",
      "D. $C(x)=12+8x$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q053",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Nhiệt độ Fahrenheit theo Celsius được cho bởi $F=\\frac95C+32$. Khi C=20 thì F bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $68$",
      "B. $36$",
      "C. $52$",
      "D. $64$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q054",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Dãy số bắt đầu 5 và mỗi bước tăng 3. Hàm theo số thứ tự n (n≥1) là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $u_n=5n+3$",
      "B. $u_n=3n+2$",
      "C. $u_n=3n+5$",
      "D. $u_n=5n-2$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q055",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Quan hệ nào không xác định một hàm số từ x sang y?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. Mỗi x có đúng một y",
      "B. Hai x khác nhau có thể cùng một y",
      "C. Một giá trị x có thể đi với hai giá trị y khác nhau",
      "D. Miền xác định chỉ có một phần tử"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q056",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Hàm tuyến tính có $f(2)=7$, $f(5)=16$. Tốc độ thay đổi trung bình là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $9$",
      "B. $\\frac97$",
      "C. $23$",
      "D. $3$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q057",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Một máy có giá 500 triệu và giảm đều 40 triệu mỗi năm. Giá trị V sau t năm là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $V(t)=500-40t$",
      "B. $V(t)=500+40t$",
      "C. $V(t)=40-500t$",
      "D. $V(t)=500(40t)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q058",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Bể có sẵn 120 lít và được bơm thêm 15 lít/phút. Sau bao lâu bể có 300 lít?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $20\\text{ phút}$",
      "B. $12\\text{ phút}$",
      "C. $8\\text{ phút}$",
      "D. $28\\text{ phút}$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q059",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Cước dữ liệu là 50 nghìn cho 2 GB đầu và 20 nghìn cho mỗi GB vượt mức. Dùng 5 GB phải trả bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $100\\text{ nghìn đồng}$",
      "B. $150\\text{ nghìn đồng}$",
      "C. $110\\text{ nghìn đồng}$",
      "D. $60\\text{ nghìn đồng}$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m3-q060",
    "subjectId": "math",
    "topicId": "math10-t3",
    "questionTypeId": "math10-qt18",
    "content": "Hàm affine qua A(−2;5) và B(4;−1). Giá trị f(1) bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $3$",
      "C. $-2$",
      "D. $2$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    id: 'math10-m3-q061', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)=x^2-5x+6$ dương trên tập nào?', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $\\mathbb R$', 'B. $(2;3)$', 'C. $(-\\infty;2)\\cup(3;+\\infty)$', 'D. $[2;3]$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q062', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)=-x^2+4x-3$ dương trên khoảng nào?', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $(-\\infty;1)$', 'B. $(1;3)$', 'C. $(3;+\\infty)$', 'D. $(-\\infty;1)\\cup(3;+\\infty)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q063', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Dấu của $f(x)=2x^2+4x+5$ được mô tả đúng bởi phương án nào?', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $f(x)>0$ với mọi $x$', 'B. $f(x)<0$ với mọi $x$', 'C. $f(x)\\ge0$ và bằng $0$ tại $x=-1$', 'D. $f(x)$ đổi dấu hai lần'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q064', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Dấu của $f(x)=-3x^2+6x-4$ được mô tả đúng bởi phương án nào?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. Luôn dương', 'B. Không âm và có một nghiệm kép', 'C. Đổi dấu tại hai nghiệm', 'D. Luôn âm'], correctAnswer: 'D', acceptedAnswers: ['D'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q065', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Với $f(x)=x^2-6x+9$, kết luận nào đúng?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $f(x)>0$ với mọi $x$', 'B. $f(x)<0$ khi $x<3$', 'C. $f(x)\\ge0$ với mọi $x$ và $f(3)=0$', 'D. $f(x)$ đổi dấu tại $x=3$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q066', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Với $f(x)=-(2x+1)^2$, kết luận nào đúng?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $f(x)<0$ với mọi $x$', 'B. $f(x)\\le0$ với mọi $x$ và $f(-\\tfrac12)=0$', 'C. $f(x)\\ge0$ với mọi $x$', 'D. $f(x)$ đổi dấu tại $x=-\\tfrac12$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q067', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)=(x+2)(x-5)$ âm trên khoảng nào?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-\\infty;-2)$', 'B. $(-2;5)$', 'C. $(5;+\\infty)$', 'D. $(-\\infty;-2)\\cup(5;+\\infty)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q068', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)=-2(x-1)(x+4)$ dương trên khoảng nào?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-4;1)$', 'B. $(-\\infty;-4)$', 'C. $(1;+\\infty)$', 'D. $(-\\infty;-4)\\cup(1;+\\infty)$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q069', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f$ có hai nghiệm $x_1<0<x_2$ và $f(0)>0$. Dấu của hệ số bậc hai $a$ là gì?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $a>0$', 'B. $a<0$', 'C. $a=0$', 'D. Không xác định được'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q070', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Một tam thức bậc hai có nghiệm $-2,5$ và âm trên $(-\\infty;-2)\\cup(5;+\\infty)$. Tam thức nào có thể là nó?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $(x+2)(x-5)$', 'B. $-(x+2)(x-5)$', 'C. $(x-2)(x+5)$', 'D. $-(x-2)(x+5)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q071', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Cho $m>1$ và $f(x)=x^2-(m+1)x+m$. Khoảng mà $f(x)<0$ là', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $(m;1)$', 'B. $(1;m)$', 'C. $(-\\infty;1)\\cup(m;+\\infty)$', 'D. $[1;m]$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q072', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Cho $f_m(x)=(m-2)(x+1)^2$. Khi $m<2$, kết luận nào đúng?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $f_m(x)<0$ với mọi $x$', 'B. $f_m(x)\\le0$ với mọi $x$ và bằng $0$ tại $x=-1$', 'C. $f_m(x)\\ge0$ với mọi $x$', 'D. $f_m$ đổi dấu tại $x=-1$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q073', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Dấu của $f(0)$ với $f(x)=x^2-x-6$ là', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Không xác định'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q074', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Dấu của $f(-1)$ với $f(x)=-2x^2+5x+3$ là', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Không xác định'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q075', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức có hệ số đầu dương và hai nghiệm $-3,2$. Tại $x=0$, tam thức mang dấu gì?', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Phụ thuộc hệ số tự do'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q076', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)$ có bảng dấu: dương trên $(-\\infty;-1)$, âm trên $(-1;4)$, dương trên $(4;+\\infty)$. Mệnh đề nào đúng?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $a<0$', 'B. $f(0)>0$', 'C. Hai nghiệm là $-1,4$ và $a>0$', 'D. $f(5)<0$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q077', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Biết $f(x)=a(x-2)(x+1)$ và $f(0)=4$. Dấu của $f(x)$ trên $(2;+\\infty)$ là', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Đổi dấu'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q078', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Có bao nhiêu số nguyên $x$ thuộc $[-3;4]$ để $x^2-x-6<0$?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $3$', 'B. $4$', 'C. $5$', 'D. $6$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q079', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Cho $f(x)$ có nghiệm kép $x=2$ và hệ số đầu âm. Mệnh đề nào đúng?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $f(x)>0$ khi $x<2$', 'B. $f(x)<0$ khi $x\\ne2$', 'C. $f$ đổi dấu tại $2$', 'D. $f(x)\\ge0$ với mọi $x$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q080', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Biết $f(1)=0$, $f(4)=0$ và $f(2)=-6$. Dấu của hệ số bậc hai là', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Không đủ dữ kiện'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q081', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f(x)=2x^2-(2m+2)x+2m$ với $m>1$. Với mọi $x\\in(1;m)$, $f(x)$ mang dấu nào?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Không xác định'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q082', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Một tam thức $f$ thỏa $f(x)>0$ khi $x<-2$ hoặc $x>5$, và $f(x)<0$ khi $-2<x<5$. Tỉ số $\\dfrac{f(0)}{f(6)}$ mang dấu gì?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Không tồn tại'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q083', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Cho $f(x)=ax^2+bx+c$ có $a<0$, $\\Delta>0$ và hai nghiệm đều dương. Mệnh đề nào chắc chắn đúng?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $f(0)>0$', 'B. $f(0)<0$', 'C. $c=0$', 'D. $b=0$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q084', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tam thức $f$ có hai nghiệm phân biệt $x_1<x_2$. Tích $f(x_1-1)f(\\tfrac{x_1+x_2}{2})$ mang dấu gì?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. Dương', 'B. Âm', 'C. Bằng $0$', 'D. Phụ thuộc dấu của $a$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q085', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $x^2-2mx+m+2>0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $-1<m<2$', 'B. $m\\le-1$ hoặc $m\\ge2$', 'C. $-1\\le m\\le2$', 'D. $m>2$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q086', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $x^2-2mx+m+2\\ge0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $-1<m<2$', 'B. $-1\\le m\\le2$', 'C. $m<-1$ hoặc $m>2$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q087', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $-x^2+2mx-m-2<0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $-1<m<2$', 'B. $m\\le-1$ hoặc $m\\ge2$', 'C. $-1\\le m\\le2$', 'D. $m< -1$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q088', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $mx^2-2x+1>0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $m\\ge1$', 'B. $m>1$', 'C. $m<1$', 'D. $m>0$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q089', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $(m-1)x^2+2(m-1)x+m+2\\ge0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $m>1$', 'B. $m\\ge1$', 'C. $m<1$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q090', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Có bao nhiêu giá trị thực $m$ để $x^2+(m-2)x+1\\le0$ với mọi $x\\in\\mathbb R$?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $0$', 'B. $1$', 'C. $2$', 'D. Vô số'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q091', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $mx^2+2x+m\\ge0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $m>0$', 'B. $m\\ge1$', 'C. $|m|\\ge1$', 'D. $m\\le-1$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q092', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $(m+1)x^2-2(m-1)x+m+1<0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $m<-1$', 'B. $m>0$', 'C. $-1<m<0$', 'D. Không tồn tại $m$'], correctAnswer: 'D', acceptedAnswers: ['D'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q093', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $x^2-2(m+1)x+m^2+4m+3\\ge0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $m>-1$', 'B. $m\\ge-1$', 'C. $m\\le-1$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q094', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Với bao nhiêu giá trị thực $m$, tam thức $(m^2+1)x^2-2mx+1$ luôn dương trên $\\mathbb R$?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. Không có', 'B. Chỉ $m=0$', 'C. Mọi $m\\in\\mathbb R$', 'D. Chỉ $m\\ne0$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q095', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Với tham số $m$, khoảng mà $x^2-2mx+m^2-1<0$ là', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $(m-1;m+1)$', 'B. $(-\\infty;m-1)\\cup(m+1;+\\infty)$', 'C. $[m-1;m+1]$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q096', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt20',
    content: 'Tìm $m$ để $x^2-2(m-1)x+m^2-4m+5>0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $m<2$', 'B. $m\\le2$', 'C. $m>2$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q097', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $x^2-5x+6>0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $(2;3)$', 'B. $[2;3]$', 'C. $(-\\infty;2)\\cup(3;+\\infty)$', 'D. $(-\\infty;2]\\cup[3;+\\infty)$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q098', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $x^2-5x+6\\le0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $(2;3)$', 'B. $[2;3]$', 'C. $(-\\infty;2]\\cup[3;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q099', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $-x^2+4x-3\\ge0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $[1;3]$', 'B. $(1;3)$', 'C. $(-\\infty;1]\\cup[3;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q100', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $2x^2+4x+5<0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $\\mathbb R$', 'B. $\\varnothing$', 'C. $(-\\infty;-1)$', 'D. $(-1;+\\infty)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q101', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $-3x^2+6x-4\\le0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $\\varnothing$', 'B. $\\mathbb R$', 'C. $(-\\infty;1]$', 'D. $[1;+\\infty)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q102', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $(x-2)^2>0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $\\mathbb R$', 'B. $\\{2\\}$', 'C. $\\mathbb R\\setminus\\{2\\}$', 'D. $\\varnothing$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q103', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $(2x+1)^2\\le0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $\\mathbb R$', 'B. $\\{-\\tfrac12\\}$', 'C. $(-\\infty;-\\tfrac12]$', 'D. $\\varnothing$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q104', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $x^2-9<0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-3;3)$', 'B. $[-3;3]$', 'C. $(-\\infty;-3)\\cup(3;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q105', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $-2x^2+8x-6>0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $(1;3)$', 'B. $[1;3]$', 'C. $(-\\infty;1)\\cup(3;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q106', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $3x^2+x-2\\ge0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $[-1;\\tfrac23]$', 'B. $(-1;\\tfrac23)$', 'C. $(-\\infty;-1]\\cup[\\tfrac23;+\\infty)$', 'D. $(-\\infty;-1)\\cup(\\tfrac23;+\\infty)$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q107', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $4x^2-4x+1\\le0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $\\mathbb R$', 'B. $\\{\\tfrac12\\}$', 'C. $(-\\infty;\\tfrac12]$', 'D. $\\varnothing$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q108', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $x^2+2x-8\\ge0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $[-4;2]$', 'B. $(-4;2)$', 'C. $(-\\infty;-4]\\cup[2;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q109', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $(x-1)(x+3)\\le0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $[-3;1]$', 'B. $(-3;1)$', 'C. $(-\\infty;-3]\\cup[1;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q110', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{(x-2)(x+1)}{x-3}>0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $(-1;2)\\cup(3;+\\infty)$', 'B. $(-\\infty;-1)\\cup(2;3)$', 'C. $[-1;2]\\cup(3;+\\infty)$', 'D. $(-1;3)$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q111', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x+2}{x-1}\\ge0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $[-2;1)$', 'B. $(-\\infty;-2]\\cup(1;+\\infty)$', 'C. $(-\\infty;-2)\\cup[1;+\\infty)$', 'D. $[-2;1]$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q112', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x^2-4}{x+1}<0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-\\infty;-2)\\cup(-1;2)$', 'B. $(-2;-1)\\cup(2;+\\infty)$', 'C. $(-\\infty;-2]\\cup[-1;2]$', 'D. $(-2;2)$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q113', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $(x-1)^2(x+2)>0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-2;+\\infty)$', 'B. $(-2;1)\\cup(1;+\\infty)$', 'C. $(-\\infty;-2)$', 'D. $[-2;1)\\cup(1;+\\infty)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q114', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x^2-1}{x^2-4}\\le0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $[-2;-1]\\cup[1;2]$', 'B. $(-2;-1]\\cup[1;2)$', 'C. $(-\\infty;-2)\\cup(-1;1)\\cup(2;+\\infty)$', 'D. $(-2;2)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q115', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac1{x^2-5x+6}>0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(2;3)$', 'B. $(-\\infty;2)\\cup(3;+\\infty)$', 'C. $(-\\infty;2]\\cup[3;+\\infty)$', 'D. $\\mathbb R\\setminus\\{2,3\\}$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q116', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x^2-4x+3}{x^2-1}\\ge0$.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $(-\\infty;-1)\\cup[3;+\\infty)$', 'B. $(-\\infty;-1]\\cup[3;+\\infty)$', 'C. $(-1;1)\\cup[3;+\\infty)$', 'D. $(-\\infty;-1)\\cup\\{1\\}\\cup[3;+\\infty)$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q117', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x^2-4}{x-2}<0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $x<-2$', 'B. $x<2$', 'C. $-2<x<2$', 'D. $x>-2,\\ x\\ne2$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q118', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\left(\\dfrac{x-1}{x+2}\\right)^2>0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $\\mathbb R\\setminus\\{-2\\}$', 'B. $\\mathbb R\\setminus\\{1\\}$', 'C. $\\mathbb R\\setminus\\{-2,1\\}$', 'D. $(-2;1)$'], correctAnswer: 'C', acceptedAnswers: ['C'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q119', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $(x^2+x-6)(x-1)\\le0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $[-3;1]\\cup[2;+\\infty)$', 'B. $(-\\infty;-3]\\cup[1;2]$', 'C. $[-3;1]$', 'D. $(-\\infty;-3)\\cup(1;2)$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q120', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải bất phương trình $\\dfrac{x+1}{x^2-4x+3}\\le0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $(-\\infty;-1]\\cup(1;3)$', 'B. $(-\\infty;-1)\\cup[1;3]$', 'C. $[-1;1)\\cup(3;+\\infty)$', 'D. $(-1;1)\\cup(3;+\\infty)$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q121', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải theo $x$ bất phương trình $x^2-2mx+m^2-4\\le0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $[m-2;m+2]$', 'B. $(m-2;m+2)$', 'C. $(-\\infty;m-2]\\cup[m+2;+\\infty)$', 'D. $\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q122', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Tìm $m$ để bất phương trình $x^2-2mx+m+2\\ge0$ đúng với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $-1<m<2$', 'B. $-1\\le m\\le2$', 'C. $m\\le-1$ hoặc $m\\ge2$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q123', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Giải theo $x$ bất phương trình $x^2-2(m+1)x+m^2+2m\\le0$.', responseType: 'single_choice', difficulty: 'easy', sourceType: 'manual',
    options: ['A. $[m;m+2]$', 'B. $(m;m+2)$', 'C. $(-\\infty;m]\\cup[m+2;+\\infty)$', 'D. $[m-2;m]$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q124', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Bất phương trình $x^2-5x+6\\le0$ có bao nhiêu nghiệm nguyên?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $1$', 'B. $2$', 'C. $3$', 'D. Vô số'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q125', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Tìm $m$ để bất phương trình $x^2-4x+m\\le0$ có ít nhất một nghiệm thực.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $m<4$', 'B. $m\\le4$', 'C. $m\\ge4$', 'D. $m>4$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q126', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Tìm $m$ để bất phương trình $x^2-2mx+m+1\\le0$ vô nghiệm.', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $\\dfrac{1-\\sqrt5}{2}<m<\\dfrac{1+\\sqrt5}{2}$', 'B. $m\\le\\dfrac{1-\\sqrt5}{2}$ hoặc $m\\ge\\dfrac{1+\\sqrt5}{2}$', 'C. $m<0$', 'D. $m>1$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q127', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Bất phương trình nào có tập nghiệm đúng bằng $[2;5]$?', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $x^2-7x+10\\le0$', 'B. $x^2-7x+10<0$', 'C. $x^2+7x+10\\le0$', 'D. $-x^2+7x-10\\le0$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q128', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Độ dài của tập nghiệm bất phương trình $-x^2+6x-5\\ge0$ là', responseType: 'single_choice', difficulty: 'medium', sourceType: 'manual',
    options: ['A. $2$', 'B. $4$', 'C. $5$', 'D. $6$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q129', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Lợi nhuận (triệu đồng) của một sản phẩm là $P(x)=-2x^2+40x-150$. Doanh nghiệp có lãi khi', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $5<x<15$', 'B. $x<5$ hoặc $x>15$', 'C. $5\\le x\\le15$', 'D. $x>0$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q130', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Độ cao của vật là $h(t)=-5t^2+20t$ (m). Trong khoảng thời gian nào vật ở độ cao ít nhất $15$ m?', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $1\\le t\\le3$', 'B. $1<t<3$', 'C. $t\\le1$ hoặc $t\\ge3$', 'D. $0\\le t\\le4$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q131', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Tìm $m$ để $(m-1)x^2-2(m-1)x+m-2\\le0$ với mọi $x\\in\\mathbb R$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $m<1$', 'B. $m\\le1$', 'C. $m\\ge1$', 'D. $m>1$'], correctAnswer: 'B', acceptedAnswers: ['B'], validatorType: 'choice'
  },
  {
    id: 'math10-m3-q132', subjectId: 'math', topicId: 'math10-t3', questionTypeId: 'math10-qt21',
    content: 'Tìm $m$ để $x=0$ là một nghiệm của bất phương trình $x^2-2mx+m^2-1<0$.', responseType: 'single_choice', difficulty: 'hard', sourceType: 'manual',
    options: ['A. $-1<m<1$', 'B. $m\\le-1$ hoặc $m\\ge1$', 'C. $-1\\le m\\le1$', 'D. $m\\in\\mathbb R$'], correctAnswer: 'A', acceptedAnswers: ['A'], validatorType: 'choice'
  }
];
