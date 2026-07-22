import type { Question } from '@/types';

export const g10MathModule2Questions: Question[] = [
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
      difficulty: 'hard',
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
      id: 'math10-q69',
      subjectId: 'math',
      topicId: 'math10-t2',
      questionTypeId: 'math10-qt3',
      content: 'Điểm $M(1;2)$ có thuộc miền nghiệm của hệ sau hay không?\\n$$\\begin{cases}2x+y\\le5\\\\x\\ge0\\\\y\\ge0\\end{cases}$$',
      difficulty: 'easy',
      sourceType: 'manual',
      correctAnswer: 'Có',
      acceptedAnswers: ['Có', 'co', 'có', 'Có, vì M thỏa mãn hệ'],
      validatorType: 'exact'
    },
  {
    "id": "math10-m2-q001",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Điểm nào không thuộc miền nghiệm của hệ $\\begin{cases}x+y\\le4\\\\x\\ge0\\\\y\\ge0\\end{cases}$?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $(-1;2)$",
      "B. $(0;0)$",
      "C. $(1;2)$",
      "D. $(3;1)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q002",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Điểm $M(2;2)$ có thuộc miền nghiệm của bất phương trình $x+2y<6$ không?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. Có, vì M nằm trên đường biên",
      "B. Không, vì M nằm trên đường biên bị loại",
      "C. Có, vì 2+2<6",
      "D. Không, vì M nằm ngoài góc phần tư I"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q003",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trong các điểm sau, điểm nào thuộc miền nghiệm $x\\ge0$, $y\\ge0$, $x+y\\le5$?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(3;3)$",
      "B. $(-1;1)$",
      "C. $(2;2)$",
      "D. $(4;2)$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q004",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Miền nghiệm của hệ $x\\ge0$, $y\\ge0$, $x+y\\le6$ là tam giác có ba đỉnh nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(0;0),(3;0),(0;3)$",
      "B. $(6;0),(0;6),(6;6)$",
      "C. $(0;0),(6;6),(0;6)$",
      "D. $(0;0),(6;0),(0;6)$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q005",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Miền nghiệm của hệ $x\\ge1$, $y\\ge0$, $x+y\\le5$ có các đỉnh nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(1;0),(5;0),(1;4)$",
      "B. $(0;0),(5;0),(0;5)$",
      "C. $(1;0),(4;0),(1;5)$",
      "D. $(1;1),(5;0),(0;5)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q006",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Cho hệ $x\\ge0$, $y\\ge0$, $x+y\\le6$, $2x+y\\le8$. Tọa độ các đỉnh miền nghiệm là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(0;0),(6;0),(2;4),(0;8)$",
      "B. $(0;0),(4;0),(2;4),(0;6)$",
      "C. $(0;0),(4;0),(4;2),(0;6)$",
      "D. $(0;0),(8;0),(2;4),(0;6)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q007",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Có bao nhiêu điểm nguyên thuộc miền $x\\ge0$, $y\\ge0$, $x+y\\le3$?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $6$",
      "B. $9$",
      "C. $10$",
      "D. $12$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q008",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Miền nghiệm của $x\\ge0$, $y\\ge0$, $y\\ge x$, $x+y\\le6$ là tam giác có các đỉnh nào?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(0;0),(6;0),(3;3)$",
      "B. $(0;0),(0;3),(6;0)$",
      "C. $(0;6),(6;0),(3;3)$",
      "D. $(0;0),(0;6),(3;3)$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q009",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Nửa mặt phẳng có bờ $2x-y=4$ và chứa gốc tọa độ được biểu diễn bởi bất phương trình nào?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $2x-y\\le4$",
      "B. $2x-y\\ge4$",
      "C. $2x-y<0$",
      "D. $2x-y>4$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q010",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên tam giác có các đỉnh $(0;0)$, $(4;0)$, $(0;3)$, GTLN của $F=2x+y$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $3$",
      "B. $8$",
      "C. $7$",
      "D. $11$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q011",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên tam giác có các đỉnh $(-1;0)$, $(2;0)$, $(0;4)$, GTNN của $F=x+2y$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $2$",
      "C. $-1$",
      "D. $8$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q012",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên miền $x\\ge0$, $y\\ge0$, $x+y\\le5$, GTLN của $F=3x+2y$ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $5$",
      "C. $25$",
      "D. $15$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q013",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên miền $x\\ge0$, $y\\ge0$, $x+y\\le5$, hàm $F=x+y$ đạt GTLN ở đâu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. Mọi điểm trên đoạn x+y=5 trong góc phần tư I",
      "B. Chỉ tại (5;0)",
      "C. Chỉ tại (0;5)",
      "D. Chỉ tại (0;0)"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q014",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Cho miền $x\\ge0$, $y\\ge0$, $x+2y\\le8$, $3x+y\\le9$. GTLN của $F=4x+5y$ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $20$",
      "B. $23$",
      "C. $12$",
      "D. $29$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q015",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên miền không bị chặn $x\\ge0$, $y\\ge0$, $x+y\\ge4$, GTNN của $F=x+y$ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $Không tồn tại$",
      "C. $4$",
      "D. $+\\infty$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q016",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Trên tứ giác có các đỉnh $(0;0)$, $(5;0)$, $(4;3)$, $(0;4)$, tổng GTLN và GTNN của $F=2x+3y$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $12$",
      "B. $27$",
      "C. $7$",
      "D. $17$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q017",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Một mảnh đất tối đa 10 ha dùng trồng ngô x ha và rau y ha. Lợi nhuận mỗi ha lần lượt là 2 và 3 triệu đồng, không có ràng buộc khác. Phương án tối ưu là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=0, y=10$",
      "B. $x=10, y=0$",
      "C. $x=5, y=5$",
      "D. $x=2, y=3$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q018",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Một xưởng có 8 giờ máy. Sản phẩm A cần 2 giờ, lãi 5; sản phẩm B cần 1 giờ, lãi 3. Nếu có thể sản xuất số lượng thực không âm, phương án tối ưu là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. 4 sản phẩm A, 0 sản phẩm B",
      "B. 0 sản phẩm A, 8 sản phẩm B",
      "C. 2 sản phẩm A, 4 sản phẩm B",
      "D. 8 sản phẩm A, 0 sản phẩm B"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q019",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Một sự kiện bán tối đa 50 vé gồm vé thường x và vé VIP y; vé VIP không quá 20. Lãi mỗi vé lần lượt 20 và 30 nghìn đồng. Phương án tối ưu là gì?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=50, y=0$",
      "B. $x=25, y=25$",
      "C. $x=30, y=20$",
      "D. $x=0, y=20$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q020",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Sản phẩm A dùng 2 đơn vị gỗ và 1 giờ công, lãi 5; B dùng 1 gỗ và 2 giờ, lãi 4. Có tối đa 10 gỗ và 8 giờ. Phương án tối ưu là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x=5, y=0$",
      "B. $x=0, y=4$",
      "C. $x=2, y=3$",
      "D. $x=4, y=2$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q021",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Thực phẩm A cung cấp 2 đơn vị đạm, 1 vitamin, giá 3; B cung cấp 1 đạm, 2 vitamin, giá 2. Cần ít nhất 6 đơn vị mỗi chất. Phương án chi phí nhỏ nhất là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x=2, y=2$",
      "B. $x=3, y=0$",
      "C. $x=0, y=6$",
      "D. $x=6, y=0$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q022",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Xe nhỏ chở 2 tấn, giá thuê 3 triệu; xe lớn chở 5 tấn, giá 6 triệu. Cần chở ít nhất 20 tấn. Phương án chi phí nhỏ nhất là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. 10 xe nhỏ, 0 xe lớn",
      "B. 0 xe nhỏ, 4 xe lớn",
      "C. 5 xe nhỏ, 2 xe lớn",
      "D. 0 xe nhỏ, 5 xe lớn"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q023",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Sản phẩm A dùng 3 giờ và 2 kg nguyên liệu, lãi 7; B dùng 2 giờ và 4 kg, lãi 8. Có 18 giờ và 20 kg. Với x,y nguyên không âm, phương án lãi lớn nhất là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $x=6, y=0$",
      "B. $x=0, y=5$",
      "C. $x=4, y=3$",
      "D. $x=3, y=3$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m2-q024",
    "subjectId": "math",
    "topicId": "math10-t2",
    "questionTypeId": "math10-qt3",
    "content": "Một lò làm bánh mì x và bánh kem y, tối đa 40 bánh; phải làm ít nhất 10 bánh mì và không quá 25 bánh kem. Lãi mỗi chiếc lần lượt 2 và 5. Phương án tối ưu là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $x=40, y=0$",
      "B. $x=10, y=25$",
      "C. $x=25, y=15$",
      "D. $x=15, y=25$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  }
];
