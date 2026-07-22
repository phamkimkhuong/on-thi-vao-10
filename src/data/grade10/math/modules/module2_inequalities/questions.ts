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
    }
];
