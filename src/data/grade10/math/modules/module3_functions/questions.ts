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
    }
];
