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
  }
];
