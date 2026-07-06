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
  },
  {
    id: 'math10-s2',
    questionId: 'math10-q2',
    recognition: 'Bài toán tìm tham số m để hai tập hợp số giao nhau khác rỗng bằng phương pháp phủ định.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện để A giao B bằng rỗng',
        explanation: 'Ta có $A = [m; m + 2]$ là đoạn luôn có nghĩa vì $m < m + 2$. Tập hợp $B = [-1; 3]$. Để $A \\cap B = \\varnothing$, đoạn A phải nằm hoàn toàn bên trái hoặc bên phải đoạn B. \nTrường hợp 1 (A nằm bên trái B): $m + 2 < -1 \\Leftrightarrow m < -3$.\nTrường hợp 2 (A nằm bên phải B): $m > 3$. \nVậy $A \\cap B = \\varnothing \\Leftrightarrow m < -3$ hoặc $m > 3$.',
        result: 'm < -3 hoặc m > 3'
      },
      {
        order: 2,
        title: 'Lấy phủ định để tìm điều kiện giao nhau khác rỗng',
        explanation: 'Điều kiện để $A \\cap B \\neq \\varnothing$ là phủ định của điều kiện trên. Do đó: $-3 \\le m \\le 3$.',
        result: '-3 <= m <= 3'
      }
    ],
    finalAnswer: '-3 <= m <= 3',
    commonMistakes: [
      'Lấy nhầm dấu ngoặc đơn thành ngoặc vuông hoặc ngược lại ở mốc biên biên độ m = -3 và m = 3.',
      'Quên không xét cả hai phía bên trái và bên phải của đoạn B.'
    ],
    reviewSuggestions: [
      'Luôn vẽ trục số thực để hình dung trực quan vị trí tương đối giữa hai tập hợp.'
    ]
  },
  {
    id: 'math10-s3',
    questionId: 'math10-q3',
    recognition: 'Bài toán quy hoạch tuyến tính ứng dụng thực tế của hệ bất phương trình bậc nhất hai ẩn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn miền nghiệm của hệ bất phương trình',
        explanation: 'Vẽ hệ trục tọa độ Oxy. Vẽ các đường thẳng: \n$d_1: x + y = 80$, đi qua $(0; 80)$ và $(80; 0)$.\n$d_2: 2x + y = 100$, đi qua $(0; 100)$ và $(50; 0)$.\nMiền nghiệm của hệ là miền tứ giác lồi OABC nằm ở góc phần tư thứ nhất, giới hạn bởi các trục tọa độ và các đường thẳng $d_1$, $d_2$.',
        result: 'Miền nghiệm là tứ giác OABC'
      },
      {
        order: 2,
        title: 'Tìm tọa độ các đỉnh của tứ giác',
        explanation: 'Tọa độ đỉnh O là gốc tọa độ $(0; 0)$.\nĐỉnh A nằm trên trục hoành (giao của $d_2$ với Ox): $A(50; 0)$.\nĐỉnh C nằm trên trục tung (giao của $d_1$ với Oy): $C(0; 80)$.\nĐỉnh B là giao điểm của $d_1$ và $d_2$: Giải hệ $\\begin{cases} x + y = 80 \\\\ 2x + y = 100 \\end{cases} \\Rightarrow B(20; 60)$.',
        result: 'O(0;0), A(50;0), B(20;60), C(0;80)'
      },
      {
        order: 3,
        title: 'Tính giá trị F(x; y) tại các đỉnh và chọn GTLN',
        explanation: 'Tính lợi nhuận F tại các đỉnh:\n$F(O) = 400(0) + 300(0) = 0$\n$F(A) = 400(50) + 300(0) = 20,000$ (nghìn đồng)\n$F(C) = 400(0) + 300(80) = 24,000$ (nghìn đồng)\n$F(B) = 400(20) + 300(60) = 8,000 + 18,000 = 26,000$ (nghìn đồng).\nVậy giá trị lớn nhất của F là 26,000 nghìn đồng (26 triệu đồng), đạt được tại đỉnh $B(20; 60)$.',
        result: 'x = 20, y = 60'
      }
    ],
    finalAnswer: '(20; 60)',
    commonMistakes: [
      'Giải sai tọa độ đỉnh giao điểm B do bấm máy tính hoặc tính nhẩm nhầm lẫn.',
      'Xác định sai miền nghiệm dẫn tới lấy nhầm đỉnh biên như $(80;0)$ hay $(0;100)$.'
    ],
    reviewSuggestions: [
      'Kiểm tra lại xem miền nghiệm là miền lồi bị chặn hay không bị chặn và luôn tính đầy đủ giá trị F tại mọi đỉnh đa giác.'
    ]
  },
  {
    id: 'math10-s4',
    questionId: 'math10-q4',
    recognition: 'Lập phương trình parabol từ các dữ kiện thực tế hình học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tọa độ các điểm mốc trên hệ trục',
        explanation: 'Chân cổng A tại gốc tọa độ nên $A(0; 0)$. Chân cổng B cách chân cổng A là 8m trên trục Ox nên $B(8; 0)$.\nDo tính đối xứng của parabol, đỉnh cổng chào I nằm trên trục đối xứng đi qua trung điểm của đoạn AB. Hoành độ đỉnh là $x_I = 4$. Chiều cao cổng so với mặt đất là 6m nên tung độ đỉnh là $y_I = 6$. Vậy đỉnh cổng chào là $I(4; 6)$.',
        result: 'A(0;0), B(8;0), I(4;6)'
      },
      {
        order: 2,
        title: 'Lập hệ phương trình tìm các hệ số a, b, c',
        explanation: 'Parabol có phương trình $y = ax^2 + bx + c$ ($a \\neq 0$). Do parabol đi qua A, B, I nên ta có hệ phương trình:\n$$\\begin{cases} a(0)^2 + b(0) + c = 0 \\\\ a(8)^2 + b(8) + c = 0 \\\\ a(4)^2 + b(4) + c = 6 \\end{cases} \\Rightarrow \\begin{cases} c = 0 \\\\ 64a + 8b = 0 \\\\ 16a + 4b = 6 \\end{cases} \\Rightarrow \\begin{cases} a = -\\frac{3}{8} \\\\ b = 3 \\\\ c = 0 \\end{cases}$$',
        result: 'a = -3/8, b = 3, c = 0'
      },
      {
        order: 3,
        title: 'Kết luận phương trình parabol',
        explanation: 'Thế các hệ số vào ta được phương trình Parabol đại diện cho cổng chào: $y = -\\frac{3}{8}x^2 + 3x$.',
        result: 'y = -3/8x^2 + 3x'
      }
    ],
    finalAnswer: 'y = -3/8x^2 + 3x',
    commonMistakes: [
      'Lập sai hệ phương trình do xác định nhầm tọa độ đỉnh (ví dụ cho đỉnh nằm trên trục tung $(0; 6)$ khi đặt hệ trục sai cách).',
      'Tính sai phân số khi giải hệ phương trình tuyến tính.'
    ],
    reviewSuggestions: [
      'Luôn kiểm tra lại phương trình thu được bằng cách thế tọa độ các điểm A, B, I vào xem có thỏa mãn không.'
    ]
  },
  {
    id: 'math10-s5',
    questionId: 'math10-q5',
    recognition: 'Phân tích vectơ cơ bản và ứng dụng để chứng minh ba điểm thẳng hàng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích vectơ AM theo AB và AC',
        explanation: 'Từ hệ thức $\\vec{MB} = -2\\vec{MC} \\Leftrightarrow \\vec{AB} - \\vec{AM} = -2(\\vec{AC} - \\vec{AM}) \\Leftrightarrow \\vec{AB} - \\vec{AM} = -2\\vec{AC} + 2\\vec{AM}$.\nChuyển vế ta được: $3\\vec{AM} = \\vec{AB} + 2\\vec{AC} \\Rightarrow \\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$.',
        result: 'AM = 1/3AB + 2/3AC'
      },
      {
        order: 2,
        title: 'So sánh vectơ AN và vectơ AM để chứng minh thẳng hàng',
        explanation: 'Theo đề bài ta có $\\vec{AN} = \\frac{1}{3}\\vec{AB} + \\frac{2}{9}\\vec{AC}$. Đặt nhân tử chung $\\frac{1}{3}$ ra ngoài ta thu được:\n$\\vec{AN} = \\frac{1}{3}\\left(\\vec{AB} + \\frac{2}{3}\\vec{AC}\\right)$.\nThế biểu thức $\\vec{AM}$ ở bước 1 vào ta được: $\\vec{AN} = \\frac{1}{3}\\vec{AM}$.\nVì $\\vec{AN}$ và $\\vec{AM}$ cùng phương (đều có chung điểm đầu A), do đó ba điểm A, N, M thẳng hàng.',
        result: 'AN = 1/3AM'
      }
    ],
    finalAnswer: 'AM = 1/3AB + 2/3AC',
    commonMistakes: [
      'Chèn sai quy tắc hiệu vectơ (ví dụ ghi $\\vec{MB} = -2\\vec{MC}$ thành $\\vec{AM} - \\vec{AB}$ thay vì $\\vec{AB} - \\vec{AM}$).',
      'Không rút gọn được về dạng biểu diễn tỷ số $\\vec{AN} = k\\vec{AM}$.'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc hiệu vectơ: $\\vec{XY} = \\vec{OY} - \\vec{OX}$ với O là điểm chèn bất kỳ.'
    ]
  }
];
