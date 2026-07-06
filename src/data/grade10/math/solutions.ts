import { Solution } from '@/types';

export const g10MathSolutions: Solution[] = [
  {
    id: 'math10-s1',
    questionId: 'math10-q1',
    recognition: 'Tìm giao của hai tập hợp biểu diễn dưới dạng khoảng, đoạn số học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tập hợp A và B trên trục số',
        explanation: 'Vẽ một trục số thực $\\mathbb{R}$. Biểu diễn đoạn $A = [-2; 3]$ bằng cách lấy phần từ $-2$ đến $3$ (sử dụng ngoặc vuông) và gạch bỏ phần còn lại. Tương tự, biểu diễn khoảng $B = (1; 5)$ bằng cách lấy phần từ $1$ đến $5$ (sử dụng ngoặc tròn).',
        result: 'Đã biểu diễn A và B.'
      },
      {
        order: 2,
        title: 'Xác định giao của hai tập hợp',
        explanation: 'Giao của hai tập hợp $A \\cap B$ là phần trục số không bị gạch bỏ bởi cả hai tập hợp A và B. Phần giao nhau bắt đầu từ lớn hơn $1$ (ngoặc tròn từ B) đến bé hơn hoặc bằng $3$ (ngoặc vuông từ A). Do đó, $A \\cap B = (1; 3]$.',
        result: '(1; 3]'
      }
    ],
    finalAnswer: '(1; 3]',
    commonMistakes: [
      'Viết nhầm đầu ngoặc thành $[1; 3]$ hoặc $(1; 3)$ do không chú ý dấu ngoặc tròn ở số 1 của tập B.'
    ],
    reviewSuggestions: [
      'Xem lại kỹ định nghĩa phép giao ($\\cap$) của hai tập hợp và quy tắc lấy ngoặc tròn/ngoặc vuông.'
    ]
  }
];
