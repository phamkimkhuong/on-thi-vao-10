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
  }
];
