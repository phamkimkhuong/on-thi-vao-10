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
  },
  {
    id: 'math10-s6',
    questionId: 'math10-q6',
    recognition: 'Phép giao hai nửa khoảng có chứa điểm mút chung.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tập hợp A và B trên trục số',
        explanation: 'Sắp xếp các điểm biên của hai tập hợp theo thứ tự tăng dần: $-3 < 0 < 2 < 5$. Vẽ trục số thực, xác định đoạn nửa khoảng $A = [-3; 2)$ và $B = [0; 5)$.',
        result: 'Đã biểu diễn A và B.'
      },
      {
        order: 2,
        title: 'Tìm giao của hai tập hợp',
        explanation: 'Lọc các phần tử đồng thời thuộc cả $A$ và $B$. Phần chung này bắt đầu từ $0$ (lấy vì có ngoặc vuông $[$ ở $B$) đến $2$ (không lấy vì có ngoặc tròn $)$ ở $A$). Do đó: $A \\cap B = [0; 2)$.',
        result: '[0; 2)'
      }
    ],
    finalAnswer: '[0; 2)',
    commonMistakes: [
      'Ghi nhầm đầu mút thành $(0; 2)$ hoặc $[0; 2]$ do không chú ý dấu ngoặc tròn tại điểm 2 của tập A.'
    ],
    reviewSuggestions: [
      'Xem lại khái niệm phần chung của phép giao, chú ý nếu một tập hợp chứa mốc biên nhưng tập kia không chứa thì giao của chúng sẽ không chứa mốc đó.'
    ]
  },
  {
    id: 'math10-s7',
    questionId: 'math10-q7',
    recognition: 'Phép hợp của khoảng và nửa khoảng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định các đầu mút biên và biểu diễn',
        explanation: 'Sắp xếp các điểm biên theo thứ tự tăng dần: $-4 < 0 < 1 < 3$. Biểu diễn khoảng $A = (-4; 1]$ và khoảng $B = (0; 3)$ trên trục số.',
        result: 'Đã biểu diễn A và B.'
      },
      {
        order: 2,
        title: 'Xác định tập hợp hợp',
        explanation: 'Hợp của hai tập hợp là phần trục số trải dài từ giá trị nhỏ nhất của tập này đến giá trị lớn nhất của tập kia mà không bị ngắt quãng. Vì hai tập giao nhau khác rỗng (giao là $(0;1]$), hợp của chúng sẽ kéo dài từ $-4$ đến $3$. Cả hai biên đều sử dụng ngoặc tròn. Do đó: $A \\cup B = (-4; 3)$.',
        result: '(-4; 3)'
      }
    ],
    finalAnswer: '(-4; 3)',
    commonMistakes: [
      'Ghi nhầm ngoặc tròn ở số 3 thành ngoặc vuông, hoặc ghi nhầm thành $(-4; 1]$ do không gộp cả tập B.'
    ],
    reviewSuggestions: [
      'Luôn chú ý tô đậm toàn bộ các khoảng thuộc ít nhất một trong hai tập hợp trên trục số để tránh bỏ sót phần tử.'
    ]
  },
  {
    id: 'math10-s8',
    questionId: 'math10-q8',
    recognition: 'Phép hiệu của hai tập hợp số (trừ đoạn cho khoảng).',
    detailedSteps: [
      {
        order: 1,
        title: 'Giữ lại đoạn A và loại bỏ tập B',
        explanation: 'Đoạn $A = [-2; 4]$ và khoảng $B = (1; 6]$. Khi thực hiện hiệu $A \\setminus B$, ta gạch bỏ toàn bộ phần bên phải điểm 1 thuộc khoảng B. Phần còn lại thuộc A là từ $-2$ đến $1$.',
        result: 'Đoạn còn lại từ -2 đến 1'
      },
      {
        order: 2,
        title: 'Đảo ngoặc tại điểm mút chung x = 1',
        explanation: 'Do $1$ không thuộc $B$ (ngoặc tròn ở $B$), nên khi bỏ đi tập $B$, điểm $1$ vẫn không bị trừ đi. Điểm $1$ vẫn thuộc $A$, do đó ta lấy điểm $1$. Ngoặc tròn $($ tại $1$ trong $B$ đổi thành ngoặc vuông $]$ trong kết quả hiệu. Kết quả: $A \\setminus B = [-2; 1]$.',
        result: '[-2; 1]'
      }
    ],
    finalAnswer: '[-2; 1]',
    commonMistakes: [
      'Ghi nhầm ngoặc vuông ở điểm 1 thành ngoặc tròn $[-2; 1)$ do không áp dụng quy tắc đảo dấu ngoặc của phép hiệu.'
    ],
    reviewSuggestions: [
      'Nhớ quy tắc vàng: Khi tính hiệu $A \\setminus B$, dấu ngoặc tại mút biên của $B$ sẽ bị **ngược lại** ở kết quả.'
    ]
  },
  {
    id: 'math10-s9',
    questionId: 'math10-q9',
    recognition: 'Phép hiệu của hai tập hợp số (trừ nửa khoảng cho khoảng vô hạn).',
    detailedSteps: [
      {
        order: 1,
        title: 'Giữ lại nửa khoảng B và loại bỏ tập A',
        explanation: 'Tập $B = [-1; 4)$ và $A = (-\\infty; 2]$. Ta gạch bỏ toàn bộ phần thuộc A (nhỏ hơn hoặc bằng 2). Phần còn lại của B nằm từ $2$ đến $4$.',
        result: 'Đoạn từ 2 đến 4'
      },
      {
        order: 2,
        title: 'Đảo ngoặc tại điểm biên chung x = 2',
        explanation: 'Vì điểm $2$ thuộc $A$ (ngoặc vuông ở $A$), nên khi bỏ đi tập $A$, điểm $2$ cũng bị trừ đi hoàn toàn và không thể có mặt trong kết quả hiệu. Ngoặc vuông $]$ tại $2$ ở tập A sẽ đảo thành ngoặc tròn $($ ở kết quả. Đầu mút $4$ giữ nguyên ngoặc tròn. Kết quả: $B \\setminus A = (2; 4)$.',
        result: '(2; 4)'
      }
    ],
    finalAnswer: '(2; 4)',
    commonMistakes: [
      'Ghi nhầm đầu mút tại 2 thành ngoặc vuông $[2; 4)$ do quên trừ đi giá trị biên 2 đã thuộc tập A.'
    ],
    reviewSuggestions: [
      'Xem lại kỹ lý thuyết phép hiệu: phần tử thuộc hiệu $B \\setminus A$ bắt buộc phải KHÔNG thuộc A.'
    ]
  },
  {
    id: 'math10-s10',
    questionId: 'math10-q10',
    recognition: 'Tìm phần bù của một nửa khoảng trong tập số thực R.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn phép toán dưới dạng phép hiệu R trừ A',
        explanation: 'Phần bù $C_{\\mathbb{R}}A$ chính là phép toán $\\mathbb{R} \\setminus A$. Ta lấy toàn bộ trục số thực $(-\\infty; +\\infty)$ và gạch bỏ đi nửa khoảng $A = [-3; 5)$.',
        result: 'Trục số thực gạch bỏ [-3; 5)'
      },
      {
        order: 2,
        title: 'Xác định các khoảng còn lại và đảo ngoặc ở biên',
        explanation: 'Phần còn lại sau khi gạch bỏ gồm hai khoảng ngoài cùng: từ $-\\infty$ đến $-3$, và từ $5$ đến $+\\infty$.\n- Tại biên $x = -3$: Ở tập A là ngoặc vuông $[$ (lấy biên), nên phần bù phải gạch bỏ đi điểm $-3$ này (đảo thành ngoặc tròn $)_x$). Kết quả phần trái là $(-\\infty; -3)$.\n- Tại biên $x = 5$: Ở tập A là ngoặc tròn $)$ (không lấy biên), nên phần bù sẽ giữ lại điểm $5$ (đảo thành ngoặc vuông $[$). Kết quả phần phải là $[5; +\\infty)$.\n- Gộp lại bằng ký hiệu hợp ($\\cup$): $C_{\\mathbb{R}}A = (-\\infty; -3) \\cup [5; +\\infty)$.',
        result: '(-\\infty; -3) \\cup [5; +\\infty)'
      }
    ],
    finalAnswer: '(-\\infty; -3) \\cup [5; +\\infty)',
    commonMistakes: [
      'Ghi sai ngoặc ở biên thành $(-\\infty; -3] \\cup (5; +\\infty)$ do quên đảo chiều ngoặc của cả hai biên.'
    ],
    reviewSuggestions: [
      'Phần bù của một đoạn/khoảng luôn luôn chia làm hai nửa nằm ở hai đầu trục số và nối với nhau bằng ký hiệu hợp.'
    ]
  },
  {
    id: 'math10-s11',
    questionId: 'math10-q11',
    recognition: 'Tìm phần bù của phép hợp hai tập hợp số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm hợp của hai tập hợp A và B',
        explanation: 'Ta có $A = [0; 3]$ và $B = (2; 6)$. Biểu diễn A và B trên trục số thực. Giao của chúng khác rỗng vì $(2; 3]$ thuộc cả hai tập. Do đó, hợp của chúng kéo dài liên tục từ $0$ (lấy biên) đến $6$ (không lấy biên). Ta được: $A \\cup B = [0; 6)$.',
        result: '[0; 6)'
      },
      {
        order: 2,
        title: 'Tìm phần bù của hợp trên tập số thực R',
        explanation: 'Phần bù $C_{\\mathbb{R}}(A \\cup B) = \\mathbb{R} \\setminus [0; 6)$. \nTa loại bỏ đoạn $[0; 6)$ khỏi trục số thực. Phần còn lại gồm hai khoảng ngoài cùng: từ $-\\infty$ đến $0$, và từ $6$ đến $+\\infty$.\n- Điểm biên $0$ (ngoặc vuông ở hợp) sẽ đảo thành ngoặc tròn $($ ở kết quả phần bù.\n- Điểm biên $6$ (ngoặc tròn ở hợp) sẽ đảo thành ngoặc vuông $[$ ở kết quả phần bù.\nVậy: $C_{\\mathbb{R}}(A \\cup B) = (-\\infty; 0) \\cup [6; +\\infty)$.',
        result: '(-\\infty; 0) \\cup [6; +\\infty)'
      }
    ],
    finalAnswer: '(-\\infty; 0) \\cup [6; +\\infty)',
    commonMistakes: [
      'Gộp sai phép hợp (ví dụ nhầm thành $[0; 6]$ hoặc $(0; 6)$).',
      'Quên đảo ngoặc tại điểm biên của phép hợp khi lấy phần bù.'
    ],
    reviewSuggestions: [
      'Luôn luôn thực hiện phép toán trong ngoặc đơn trước ($A \\cup B$), sau đó mới thực hiện phép toán ngoài ngoặc ($C_{\\mathbb{R}}$).'
    ]
  },
  {
    id: 'math10-s12',
    questionId: 'math10-q12',
    recognition: 'Phép giao của hai nửa khoảng vô hạn có chung điểm biên duy nhất.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn hai nửa khoảng vô hạn trên trục số',
        explanation: 'Biểu diễn tập $A = (-\\infty; -2]$ (gồm các số bé hơn hoặc bằng $-2$) và tập $B = [-2; +\\infty)$ (gồm các số lớn hơn hoặc bằng $-2$) trên trục số.',
        result: 'Đã biểu diễn A và B.'
      },
      {
        order: 2,
        title: 'Xác định giao của hai tập hợp',
        explanation: 'Tìm các giá trị thực đồng thời thuộc cả hai tập hợp. Do tập A chứa điểm $-2$ (ngoặc vuông) và tập B cũng chứa điểm $-2$ (ngoặc vuông), điểm duy nhất thuộc cả A và B là $x = -2$. Các điểm khác đều bị gạch bỏ. Do đó: $A \\cap B = \\{-2\\}$.',
        result: '{-2}'
      }
    ],
    finalAnswer: '{-2}',
    commonMistakes: [
      'Chọn đáp án rỗng $\\varnothing$ do nghĩ hai khoảng nằm về hai phía đối lập mà quên xét điểm mút chung.',
      'Viết sai định dạng tập hợp phần tử đơn lẻ thành đoạn $[-2; -2]$ (ít khi dùng).'
    ],
    reviewSuggestions: [
      'Chú ý dấu ngoặc vuông tại biên chung. Nếu một trong hai tập hợp tại điểm biên là ngoặc tròn, giao của chúng sẽ bằng rỗng.'
    ]
  },
  {
    id: 'math10-s13',
    questionId: 'math10-q13',
    recognition: 'Tìm giao của ba tập hợp số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm giao của hai tập hợp đầu tiên A và B',
        explanation: 'Cho $A = [-4; 2]$ và $B = [-2; 4)$. Giao $A \\cap B$ là phần chung của hai đoạn này. Sắp xếp mốc biên: $-4 < -2 < 2 < 4$. Ta có: $A \\cap B = [-2; 2]$.',
        result: '[-2; 2]'
      },
      {
        order: 2,
        title: 'Tìm giao của kết quả trên với tập hợp C',
        explanation: 'Tìm giao của $[-2; 2]$ với tập $C = (0; 5]$. Sắp xếp mốc biên: $-2 < 0 < 2 < 5$. Phần chung nằm giữa $0$ (ngoặc tròn ở C) và $2$ (ngoặc vuông ở giao đầu). Do đó: $A \\cap B \\cap C = (0; 2]$.',
        result: '(0; 2]'
      }
    ],
    finalAnswer: '(0; 2]',
    commonMistakes: [
      'Tính toán sai các phép toán trung gian.',
      'Lẫn lộn ngoặc tròn và ngoặc vuông ở kết quả cuối cùng.'
    ],
    reviewSuggestions: [
      'Khi giao nhiều tập hợp, bạn có thể vẽ tất cả lên cùng một trục số và gạch phần không thuộc của từng tập hợp một, phần còn lại cuối cùng chính là đáp án.'
    ]
  },
  {
    id: 'math10-s14',
    questionId: 'math10-q14',
    recognition: 'Phép hiệu tách đoạn lớn cho đoạn nhỏ nằm ở giữa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tập bị trừ A và tập trừ B',
        explanation: 'Ta có $A = [-3; 3]$ và $B = [-1; 2]$. Tập B nằm hoàn toàn bên trong tập A (vì $-3 < -1 < 2 < 3$).',
        result: 'B chứa trong A'
      },
      {
        order: 2,
        title: 'Loại bỏ tập B khỏi tập A và thực hiện đảo ngoặc',
        explanation: 'Khi gạch bỏ phần thuộc B $[-1; 2]$ khỏi A, trục số bị chia thành 2 phần độc lập: \n- Phần bên trái từ $-3$ đến $-1$. Tại biên $x = -1$: Do B chứa điểm $-1$ (ngoặc vuông) nên khi loại bỏ B, ta loại bỏ cả điểm $-1$. Ngoặc vuông ở B đổi thành ngoặc tròn ở hiệu: $[-3; -1)$.\n- Phần bên phải từ $2$ đến $3$. Tại biên $x = 2$: Do B chứa điểm $2$ (ngoặc vuông) nên khi loại bỏ B, điểm $2$ bị loại đi. Ngoặc vuông ở B đổi thành ngoặc tròn ở hiệu: $(2; 3]$.\n- Gộp lại bằng dấu hợp: $A \\setminus B = [-3; -1) \\cup (2; 3]$.',
        result: '[-3; -1) \\cup (2; 3]'
      }
    ],
    finalAnswer: '[-3; -1) \\cup (2; 3]',
    commonMistakes: [
      'Quên đảo dấu ngoặc vuông của B thành ngoặc tròn trong kết quả hiệu.',
      'Viết sai kết quả bằng cách chỉ ghi lại một bên của khoảng số học.'
    ],
    reviewSuggestions: [
      'Khi tập bị trừ chứa hoàn toàn tập trừ, hiệu sẽ tách thành hai tập hợp rời rạc ở hai phía đầu mút.'
    ]
  },
  {
    id: 'math10-s15',
    questionId: 'math10-q15',
    recognition: 'Giao của một khoảng và hợp của hai khoảng vô hạn bằng rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biến đổi điều kiện giao bằng rỗng',
        explanation: 'Ta có $B = (-\\infty; -3) \\cup [5; +\\infty)$. Phần bù của B trong $\\mathbb{R}$ chính là khoảng $C_{\\mathbb{R}}B = [-3; 5)$. \nĐể khoảng $A = (m - 1; m + 3)$ giao với B bằng rỗng, thì A phải nằm hoàn toàn trong phần bù của B, nghĩa là $A \\subset [-3; 5)$.',
        result: 'A \\subset [-3; 5)'
      },
      {
        order: 2,
        title: 'Giải hệ bất phương trình đầu mút biên',
        explanation: 'Để khoảng $A = (m - 1; m + 3) \\subset [-3; 5)$, ta cần:\n$$\\begin{cases} -3 \\le m - 1 \\\\ m + 3 \\le 5 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -2 \\\\ m \\le 2 \\end{cases} \\Leftrightarrow -2 \\le m \\le 2.$$\nVì A dùng ngoặc tròn nên tại các mốc biên $-3$ và $5$ lấy dấu bằng là hoàn toàn chính xác.',
        result: '-2 <= m <= 2'
      }
    ],
    finalAnswer: '-2 <= m <= 2',
    commonMistakes: [
      'Không nhận diện được mối quan hệ thông qua tập hợp phần bù.',
      'Xét nhầm hoặc bỏ sót dấu bằng ở các điểm biên.'
    ],
    reviewSuggestions: [
      'Với bài toán giao của một khoảng với hợp hai khoảng bằng rỗng, cách nhanh nhất là đưa về điều kiện tập con trong tập phần bù.'
    ]
  },
  {
    id: 'math10-s16',
    questionId: 'math10-q16',
    recognition: 'Điều kiện chứa nhau của khoảng và đoạn chứa tham số.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập bất phương trình đầu mút',
        explanation: 'Để khoảng $A = (m; m + 2) \\subset B = [-2; 4]$, ta cần khoảng A nằm trọn trong đoạn B. Điều kiện tương ứng là:\n$$\\begin{cases} -2 \\le m \\\\ m + 2 \\le 4 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -2 \\\\ m \\le 2 \\end{cases} \\Leftrightarrow -2 \\le m \\le 2.$$',
        result: '-2 <= m <= 2'
      },
      {
        order: 2,
        title: 'Kiểm tra tính hợp lệ của các giá trị biên',
        explanation: 'Nếu $m = -2$, ta có $A = (-2; 0) \\subset [-2; 4]$ (đúng).\nNếu $m = 2$, ta có $A = (2; 4) \\subset [-2; 4]$ (đúng).\nDo đó, giá trị $m \\in [-2; 2]$ hoàn toàn thỏa mãn.',
        result: 'm in [-2; 2]'
      }
    ],
    finalAnswer: '-2 <= m <= 2',
    commonMistakes: [
      'Nhầm lẫn điều kiện thành $-2 < m < 2$ (bỏ dấu bằng) do sợ ngoặc tròn không được bằng ngoặc vuông. Tuy nhiên, tập tròn có thể là con của tập vuông tại cùng biên.'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc: $(a; b) \\subset [a; b]$ là đúng, nhưng $[a; b] \\subset (a; b)$ là sai.'
    ]
  },
  {
    id: 'math10-s17',
    questionId: 'math10-q17',
    recognition: 'Tìm m để đoạn giao với hợp của hai khoảng khác rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt điều kiện tồn tại tập hợp A',
        explanation: 'Để tập hợp $A = [m - 1; \\frac{m + 5}{2}]$ tồn tại (khác rỗng), ta cần:\n$$m - 1 \\le \\frac{m + 5}{2} \\Leftrightarrow 2m - 2 \\le m + 5 \\Leftrightarrow m \\le 7.$$',
        result: 'm <= 7'
      },
      {
        order: 2,
        title: 'Tìm điều kiện phần bù giao bằng rỗng',
        explanation: 'Để $A \\cap B = \\varnothing$ với $B = (-\\infty; -2) \\cup [3; +\\infty)$, đoạn A phải nằm hoàn toàn trong khoảng phần bù $C_{\\mathbb{R}}B = [-2; 3)$.\nTa cần:\n$$\\begin{cases} -2 \\le m - 1 \\\\ \\frac{m + 5}{2} < 3 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -1 \\\\ m + 5 < 6 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -1 \\\\ m < 1 \\end{cases} \\Leftrightarrow -1 \\le m < 1.$$',
        result: '-1 <= m < 1'
      },
      {
        order: 3,
        title: 'Lấy phủ định và kết hợp điều kiện tồn tại',
        explanation: 'Điều kiện để $A \\cap B \\neq \\varnothing$ là phủ định của điều kiện giao bằng rỗng ở trên:\n$$m < -1 \\quad \\text{hoặc} \\quad m \\ge 1.$$\nKết hợp với điều kiện tồn tại $m \\le 7$ ta được: $m < -1$ hoặc $1 \\le m \\le 7$.',
        result: 'm < -1 hoặc 1 <= m <= 7'
      }
    ],
    finalAnswer: 'm <= -1 hoặc 1 <= m <= 7',
    commonMistakes: [
      'Quên không đặt điều kiện tồn tại $m \\le 7$ cho đoạn A, dẫn đến thừa nhận các giá trị $m > 7$.',
      'Lấy sai dấu bằng ở biên của hệ bất phương trình phần bù.'
    ],
    reviewSuggestions: [
      'Luôn đặt điều kiện tồn tại cho tập hợp số chứa tham số trước khi thực hiện bất kỳ phép toán nào.'
    ]
  },
  {
    id: 'math10-s18',
    questionId: 'math10-q18',
    recognition: 'Điều kiện tập con đối với các khoảng số vô hạn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn và so sánh đầu mút',
        explanation: 'Ta có $A = [m; +\\infty)$ và $B = (5; +\\infty)$. Để $A \\subset B$, mọi phần tử thuộc A phải thuộc B. Rõ ràng ta cần so sánh hai biên trái: $m$ và $5$. \nĐể đoạn A nằm trọn trong B, ta cần $m \\ge 5$.',
        result: 'm >= 5'
      },
      {
        order: 2,
        title: 'Xét trường hợp dấu bằng tại biên m = 5',
        explanation: 'Nếu $m = 5$, ta có $A = [5; +\\infty)$ và $B = (5; +\\infty)$. \nKhi đó, điểm $5 \\in A$ nhưng $5 \\notin B$, suy ra $A \\not\\subset B$ (vi phạm tính tập con). \nDo đó, ta không được lấy dấu bằng tại $m = 5$. Điều kiện đúng là $m > 5$.',
        result: 'm > 5'
      }
    ],
    finalAnswer: 'm > 5',
    commonMistakes: [
      'Chọn đáp án $m \\ge 5$ do thói quen lấy dấu bằng mà không thử lại mốc biên biên độ để kiểm tra điều kiện tập con.'
    ],
    reviewSuggestions: [
      'Với mọi bài toán chứa tham số có mút biên, luôn thử lại trực tiếp giá trị dấu bằng tại biên để chắc chắn điều kiện đúng.'
    ]
  },
  {
    id: 'math10-s19',
    questionId: 'math10-q19',
    recognition: 'Tìm m để khoảng và nửa khoảng chứa tham số giao nhau bằng rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn và chia trường hợp rời nhau',
        explanation: 'Ta có $A = (m - 3; m]$ và $B = (1; 4)$. Để $A \\cap B = \\varnothing$, tập A phải nằm hoàn toàn bên trái hoặc bên phải tập B.\n- Trường hợp 1 (A bên trái B): biên phải của A nhỏ hơn hoặc bằng biên trái của B $\\Leftrightarrow m \\le 1$.\n- Trường hợp 2 (A bên phải B): biên trái của A lớn hơn hoặc bằng biên phải của B $\\Leftrightarrow m - 3 \\ge 4 \\Leftrightarrow m \\ge 7$.',
        result: 'm <= 1 hoặc m >= 7'
      },
      {
        order: 2,
        title: 'Biện luận dấu bằng tại biên',
        explanation: 'Xét tại biên $m = 7$: khi đó $A = (4; 7]$. Tập $B = (1; 4)$. Giao $A \\cap B$ rõ ràng bằng rỗng (vì A không lấy điểm 4, B cũng không lấy điểm 4). Vậy dấu bằng tại $m = 7$ là hợp lệ.\nXét tại biên $m = 1$: khi đó $A = (-2; 1]$. Tập $B = (1; 4)$. Giao $A \\cap B$ bằng rỗng (vì A lấy điểm 1 nhưng B không lấy điểm 1). Vậy dấu bằng tại $m = 1$ cũng hợp lệ.\nKết luận: $m \\le 1$ hoặc $m \\ge 7$.',
        result: 'm <= 1 hoặc m >= 7'
      }
    ],
    finalAnswer: 'm <= 1 hoặc m >= 7',
    commonMistakes: [
      'Quên không lấy dấu bằng tại các mốc biên tiếp xúc, dẫn đến chọn đáp án bị thiếu giá trị biên.'
    ],
    reviewSuggestions: [
      'Luôn luôn kiểm tra dấu bằng tại các mốc biên tiếp xúc bằng cách thay trực tiếp vào giả thiết.'
    ]
  },
  {
    id: 'math10-s20',
    questionId: 'math10-q20',
    recognition: 'Điều kiện tập con đối với các khoảng số vô hạn về phía âm vô cực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập bất phương trình so sánh biên phải',
        explanation: 'Ta có $A = (-\\infty; m)$ và $B = (-\\infty; 2m - 1]$. Để $A \\subset B$, ta cần biên phải của A phải nhỏ hơn hoặc bằng biên phải của B: $m \\le 2m - 1$.',
        result: 'm <= 2m - 1'
      },
      {
        order: 2,
        title: 'Giải bất phương trình và biện luận',
        explanation: 'Bất phương trình $m \\le 2m - 1 \\Leftrightarrow m \\ge 1$.\n- Xét tại biên $m = 1$: $A = (-\\infty; 1)$ và $B = (-\\infty; 1]$. Rõ ràng $A \\subset B$ vì tập tròn chứa ít phần tử hơn tập vuông tại điểm mút. Nên dấu bằng hoàn toàn chính xác.',
        result: 'm >= 1'
      }
    ],
    finalAnswer: 'm >= 1',
    commonMistakes: [
      'Nhầm lẫn chiều bất phương trình so sánh biên hoặc chọn đáp án $m > 1$ mà quên lấy dấu bằng.'
    ],
    reviewSuggestions: [
      'Khoảng tròn $(-\\infty; a)$ luôn là con của nửa khoảng vuông $(-\\infty; a]$.'
    ]
  },
  {
    id: 'math10-s21',
    questionId: 'math10-q21',
    recognition: 'Tìm m để hai đoạn số thực chứa tham số giao nhau khác rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện để hai tập hợp giao nhau bằng rỗng',
        explanation: 'Ta có $A = [m; m + 3]$ và $B = [2m - 1; 2m + 2]$. Để $A \\cap B = \\varnothing$, đoạn A phải nằm hoàn toàn bên trái hoặc bên phải đoạn B.\n- TH1 (A nằm bên trái B): $m + 3 < 2m - 1 \\Leftrightarrow m > 4$.\n- TH2 (A nằm bên phải B): $2m + 2 < m \\Leftrightarrow m < -2$.\nVậy điều kiện giao bằng rỗng là: $m < -2$ hoặc $m > 4$.',
        result: 'm < -2 hoặc m > 4'
      },
      {
        order: 2,
        title: 'Lấy phủ định để tìm điều kiện giao nhau khác rỗng',
        explanation: 'Điều kiện để $A \\cap B \\neq \\varnothing$ là phủ định của điều kiện giao bằng rỗng ở trên: \n$$-2 \\le m \\le 4.$$',
        result: '-2 <= m <= 4'
      }
    ],
    finalAnswer: '-2 <= m <= 4',
    commonMistakes: [
      'Không chia đủ hai trường hợp A nằm bên trái và A nằm bên phải B.',
      'Lẫn lộn dấu bằng khi lấy phủ định phần bù.'
    ],
    reviewSuggestions: [
      'Phủ định của dấu bé hơn ($<$) là dấu lớn hơn hoặc bằng ($\\ge$), phủ định của dấu lớn hơn ($>$) là dấu nhỏ hơn hoặc bằng ($\\le$).'
    ]
  },
  {
    id: 'math10-s22',
    questionId: 'math10-q22',
    recognition: 'Tìm m để đoạn chứa tham số và đoạn số thực rời nhau.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập hệ bất phương trình rời nhau',
        explanation: 'Ta có $A = [2m - 1; 2m + 3]$ và $B = [-1; 5]$. Để $A \\cap B = \\varnothing$, ta có 2 trường hợp:\n- Trường hợp 1 (A bên trái B): Biên phải của A nhỏ hơn biên trái của B $\\Leftrightarrow 2m + 3 < -1 \\Leftrightarrow 2m < -4 \\Leftrightarrow m < -2$.\n- Trường hợp 2 (A bên phải B): Biên trái của A lớn hơn biên phải của B $\\Leftrightarrow 2m - 1 > 5 \\Leftrightarrow 2m > 6 \\Leftrightarrow m > 3$.',
        result: 'm < -2 hoặc m > 3'
      },
      {
        order: 2,
        title: 'Kết luận điều kiện m',
        explanation: 'Gộp cả hai trường hợp, ta được điều kiện của m là $m < -2$ hoặc $m > 3$.',
        result: 'm < -2 hoặc m > 3'
      }
    ],
    finalAnswer: 'm < -2 hoặc m > 3',
    commonMistakes: [
      'Lấy sai dấu bằng ở biên (nhầm thành $m \\le -2$ hoặc $m \\ge 3$). Vì cả hai tập hợp đều là đoạn (ngoặc vuông), nếu mút tiếp xúc bằng nhau thì chúng vẫn có 1 điểm chung, tức là giao khác rỗng. Do đó không được lấy dấu bằng.'
    ],
    reviewSuggestions: [
      'Với hai đoạn $[a; b]$ và $[c; d]$, giao bằng rỗng khi và chỉ khi $b < c$ hoặc $d < a$ (không có dấu bằng).'
    ]
  },
  {
    id: 'math10-s23',
    questionId: 'math10-q23',
    recognition: 'Điều kiện tập con chứa tham số giữa hai đoạn số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập hệ bất phương trình tập con',
        explanation: 'Để đoạn $A = [-3; 3] \\subset B = [m - 2; m + 5]$, ta cần đoạn A nằm trọn vẹn bên trong đoạn B. Điều kiện tương ứng với các đầu mút là:\n$$\\begin{cases} m - 2 \\le -3 \\\\ m + 5 \\ge 3 \\end{cases} \\Leftrightarrow \\begin{cases} m \\le -1 \\\\ m \\ge -2 \\end{cases} \\Leftrightarrow -2 \\le m \\le -1.$$',
        result: '-2 <= m <= -1'
      },
      {
        order: 2,
        title: 'Kiểm tra tính hợp lệ',
        explanation: 'Do cả hai tập đều dùng ngoặc vuông nên tại các biên lấy dấu bằng là hoàn toàn chính xác.',
        result: '-2 <= m <= -1'
      }
    ],
    finalAnswer: '-2 <= m <= -1',
    commonMistakes: [
      'Giải sai hệ bất phương trình dẫn đến kết quả rỗng hoặc ngược chiều dấu.'
    ],
    reviewSuggestions: [
      'Vẽ trực quan hai đoạn số học trên giấy và dịch chuyển đoạn B chứa tham số m để thấy rõ điều kiện chặn biên.'
    ]
  },
  {
    id: 'math10-s24',
    questionId: 'math10-q24',
    recognition: 'Xác định miền nghiệm và tìm đỉnh của hệ bất phương trình bậc nhất hai ẩn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Vẽ các đường biên trên mặt phẳng tọa độ',
        explanation: 'Các đường biên của hệ là:\n- $(d_1): x = 0$ (trục $Oy$)\n- $(d_2): y = 0$ (trục $Ox$)\n- $(d_3): x + y = 4$ đi qua $A(4; 0)$ và $B(0; 4)$\n- $(d_4): 2x + y = 6$ đi qua $C(3; 0)$ và $D(0; 6)$',
        result: 'Vẽ đủ 4 đường biên'
      },
      {
        order: 2,
        title: 'Xác định miền nghiệm bằng phép thử điểm',
        explanation: 'Thử điểm $O(0; 0)$:\n- $x \\ge 0$: $0 \\ge 0$ (đúng)\n- $y \\ge 0$: $0 \\ge 0$ (đúng)\n- $x + y \\le 4$: $0 \\le 4$ (đúng)\n- $2x + y \\le 6$: $0 \\le 6$ (đúng)\nVậy gốc $O$ thuộc miền nghiệm. Miền nghiệm nằm cùng phía với gốc $O$ so với cả 4 đường biên, tạo thành một tứ giác lồi.',
        result: 'Miền nghiệm là tứ giác lồi chứa gốc O'
      },
      {
        order: 3,
        title: 'Tìm tọa độ các đỉnh bằng cách giải hệ phương trình giao điểm',
        explanation: '- Đỉnh $O$: Giao của $x=0$ và $y=0$ $\\Rightarrow O(0; 0)$.\n- Đỉnh $A$: Giao của $y=0$ và $2x+y=6$ $\\Rightarrow 2x=6 \\Rightarrow A(3; 0)$.\n- Đỉnh $B$: Giao của $x+y=4$ và $2x+y=6$. Trừ vế: $x=2$, suy ra $y=2$ $\\Rightarrow B(2; 2)$.\n- Đỉnh $C$: Giao của $x=0$ và $x+y=4$ $\\Rightarrow C(0; 4)$.',
        result: 'O(0;0), A(3;0), B(2;2), C(0;4)'
      }
    ],
    finalAnswer: 'O(0;0), A(3;0), B(2;2), C(0;4)',
    commonMistakes: [
      'Nhầm lẫn giữa đường biên $x+y=4$ và $2x+y=6$ khi tìm giao điểm.',
      'Quên gốc tọa độ $O(0;0)$ cũng là một đỉnh của miền nghiệm.'
    ],
    reviewSuggestions: [
      'Luôn kiểm tra từng đỉnh tìm được có thỏa mãn tất cả bất phương trình trong hệ hay không.'
    ]
  },
  {
    id: 'math10-s25',
    questionId: 'math10-q25',
    recognition: 'Tính giá trị cực trị của biểu thức bậc nhất tại các đỉnh đa giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính giá trị F tại từng đỉnh',
        explanation: 'Biểu thức $F(x; y) = 3x + 2y$. Tính tại các đỉnh:\n- $F(O) = F(0; 0) = 3(0) + 2(0) = 0$\n- $F(A) = F(3; 0) = 3(3) + 2(0) = 9$\n- $F(B) = F(2; 2) = 3(2) + 2(2) = 10$\n- $F(C) = F(0; 4) = 3(0) + 2(4) = 8$',
        result: 'F(O)=0, F(A)=9, F(B)=10, F(C)=8'
      },
      {
        order: 2,
        title: 'So sánh và kết luận',
        explanation: 'So sánh bốn giá trị: $0 < 8 < 9 < 10$.\nVậy giá trị lớn nhất của $F$ là $\\max F = 10$ đạt tại đỉnh $B(2; 2)$ và giá trị nhỏ nhất là $\\min F = 0$ đạt tại đỉnh $O(0; 0)$.',
        result: 'max F = 10 tại B(2;2), min F = 0 tại O(0;0)'
      }
    ],
    finalAnswer: 'max F = 10 tại B(2;2), min F = 0 tại O(0;0)',
    commonMistakes: [
      'Tính nhầm giá trị do nhầm hệ số (ví dụ tính $3(2) + 2(2) = 8$ thay vì $10$).'
    ],
    reviewSuggestions: [
      'Lập bảng giá trị F tại tất cả các đỉnh sẽ giúp tránh sai sót trong tính toán.'
    ]
  },
  {
    id: 'math10-s26',
    questionId: 'math10-q26',
    recognition: 'Tìm cực trị của biểu thức mục tiêu trên miền đa giác từ hệ bất phương trình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Vẽ đường biên và xác định các đỉnh',
        explanation: 'Các đường biên:\n- $(d_1): x = 0$, $(d_2): y = 0$\n- $(d_3): x + 2y = 8$ đi qua $(8; 0)$ và $(0; 4)$\n- $(d_4): 3x + 2y = 12$ đi qua $(4; 0)$ và $(0; 6)$\n\nGiao điểm tạo các đỉnh:\n- $O(0; 0)$: giao $x=0, y=0$\n- $A(4; 0)$: giao $y=0$ và $3x+2y=12$\n- $B$: giao $x+2y=8$ và $3x+2y=12$. Trừ vế: $2x=4 \\Rightarrow x=2, y=3$ $\\Rightarrow B(2; 3)$\n- $C(0; 4)$: giao $x=0$ và $x+2y=8$',
        result: 'O(0;0), A(4;0), B(2;3), C(0;4)'
      },
      {
        order: 2,
        title: 'Tính giá trị F tại các đỉnh và so sánh',
        explanation: '$F(x; y) = 5x + 4y$:\n- $F(O) = 0$\n- $F(A) = 5(4) + 4(0) = 20$\n- $F(B) = 5(2) + 4(3) = 22$\n- $F(C) = 5(0) + 4(4) = 16$\n\nSo sánh: $0 < 16 < 20 < 22$. Vậy $\\max F = 22$ đạt tại đỉnh $B(2; 3)$.',
        result: 'max F = 22'
      }
    ],
    finalAnswer: '22',
    commonMistakes: [
      'Giải sai hệ phương trình giao điểm giữa hai đường biên, dẫn đến sai tọa độ đỉnh B.'
    ],
    reviewSuggestions: [
      'Kiểm tra lại tọa độ từng đỉnh bằng cách thay ngược vào các phương trình đường biên.'
    ]
  },
  {
    id: 'math10-s27',
    questionId: 'math10-q27',
    recognition: 'Tìm giá trị nhỏ nhất của biểu thức trên miền nghiệm không giới hạn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Vẽ đường biên và xác định đỉnh của miền nghiệm',
        explanation: 'Các đường biên:\n- $(d_1): x + y = 3$ đi qua $(3; 0)$ và $(0; 3)$\n- $(d_2): x + 2y = 4$ đi qua $(4; 0)$ và $(0; 2)$\n- $(d_3): x = 0$, $(d_4): y = 0$\n\nMiền nghiệm nằm phía trên cả hai đường $(d_1)$ và $(d_2)$, trong góc phần tư thứ nhất.\n\nTìm đỉnh:\n- $A(3; 0)$: giao $y=0$ và $x+y=3$\n- $B$: giao $x+y=3$ và $x+2y=4$. Trừ vế: $y=1, x=2$ $\\Rightarrow B(2; 1)$\n- $C(0; 3)$: giao $x=0$ và $x+y=3$. Kiểm tra $x+2y=0+6=6 \\ge 4$ (đúng).\n\nLưu ý: Đỉnh $(4; 0)$ không thuộc miền nghiệm vì $4+0=4 > 3$ nhưng $y=0 \\ge 0$ và $x+y=4>3$ (đúng), $x+2(0)=4 \\ge 4$ (đúng). Nhưng ta cần xét: điểm giao $y=0$ và $x+2y=4$ cho $(4;0)$. Kiểm tra $x+y=4 \\ge 3$ (đúng). Vậy $D(4; 0)$ cũng thuộc miền nghiệm.',
        result: 'Miền nghiệm không giới hạn có các đỉnh A(3;0), B(2;1), C(0;3) hoặc thêm D(4;0)'
      },
      {
        order: 2,
        title: 'Tính giá trị F tại các đỉnh',
        explanation: '$F(x; y) = 2x + 3y$:\n- $F(A) = F(3; 0) = 2(3) + 3(0) = 6$. Kiểm tra: $x+2y = 3+0 = 3 < 4$ (không thỏa $x+2y \\ge 4$). Vậy $A(3; 0)$ không thuộc miền nghiệm.\n- $F(D) = F(4; 0) = 2(4) + 3(0) = 8$\n- $F(B) = F(2; 1) = 2(2) + 3(1) = 7$\n- $F(C) = F(0; 3) = 2(0) + 3(3) = 9$\n\nSo sánh các đỉnh hợp lệ: $7 < 8 < 9$. Vậy $\\min F = 7$ đạt tại $B(2; 1)$.',
        result: 'min F = 7'
      }
    ],
    finalAnswer: '7',
    commonMistakes: [
      'Không kiểm tra lại đỉnh có thuộc miền nghiệm hay không, dẫn đến chọn đỉnh sai.',
      'Nhầm lẫn chiều bất đẳng thức ($\\ge$ thay vì $\\le$) khi xác định miền nghiệm.'
    ],
    reviewSuggestions: [
      'Với miền nghiệm không giới hạn, giá trị cực đại có thể không tồn tại (phát tán ra vô cực), nhưng giá trị cực tiểu vẫn luôn đạt tại một đỉnh.'
    ]
  },
  {
    id: 'math10-s28',
    questionId: 'math10-q28',
    recognition: 'Bài toán tối ưu thực tế: phân bổ diện tích trồng trọt để tối đa lợi nhuận.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập ẩn số và hệ bất phương trình ràng buộc',
        explanation: 'Gọi $x$ (ha) là diện tích trồng lúa, $y$ (ha) là diện tích trồng ngô ($x, y \\ge 0$).\n\nCác ràng buộc:\n- Tổng diện tích: $x + y \\le 10$\n- Tổng chi phí: $2x + y \\le 16$ (triệu đồng)\n- Điều kiện không âm: $x \\ge 0, y \\ge 0$\n\nHàm mục tiêu cần tối đa: $F(x; y) = 3x + 2y$ (triệu đồng).',
        result: 'Hệ ràng buộc và hàm mục tiêu'
      },
      {
        order: 2,
        title: 'Tìm tọa độ các đỉnh miền nghiệm',
        explanation: 'Các đỉnh:\n- $O(0; 0)$\n- $A(8; 0)$: giao $y=0$ và $2x+y=16$. Kiểm tra $x+y=8 \\le 10$ (đúng).\n- $B$: giao $x+y=10$ và $2x+y=16$. Trừ: $x=6, y=4$ $\\Rightarrow B(6; 4)$.\n- $C(0; 10)$: giao $x=0$ và $x+y=10$. Kiểm tra $2(0)+10=10 \\le 16$ (đúng).',
        result: 'O(0;0), A(8;0), B(6;4), C(0;10)'
      },
      {
        order: 3,
        title: 'Tính giá trị hàm mục tiêu tại các đỉnh',
        explanation: '$F(x; y) = 3x + 2y$:\n- $F(O) = 0$\n- $F(A) = 3(8) + 2(0) = 24$\n- $F(B) = 3(6) + 2(4) = 26$\n- $F(C) = 3(0) + 2(10) = 20$\n\n$\\max F = 26$ tại $B(6; 4)$. Vậy nông dân cần trồng **6 ha lúa và 4 ha ngô** để lợi nhuận lớn nhất là 26 triệu đồng.',
        result: '6 ha lúa và 4 ha ngô'
      }
    ],
    finalAnswer: '6 ha lúa và 4 ha ngô',
    commonMistakes: [
      'Thiết lập sai hệ bất phương trình ràng buộc, đặc biệt là nhầm đơn vị chi phí và diện tích.',
      'Kết luận sai do chọn đỉnh không thuộc miền nghiệm (ví dụ: chọn A(8;0) mà không kiểm tra $x+y \\le 10$).'
    ],
    reviewSuggestions: [
      'Với bài toán thực tế, luôn kiểm tra đáp án có ý nghĩa thực tiễn hay không (ví dụ: diện tích không âm, không vượt quá tổng đất).'
    ]
  },
  {
    id: 'math10-s29',
    questionId: 'math10-q29',
    recognition: 'Tìm cực trị khi hàm mục tiêu trùng dạng với một ràng buộc biên.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định các đỉnh miền nghiệm',
        explanation: 'Các đường biên: $x=0$, $y=0$, $2x+y=10$, $x+3y=12$.\n\nTìm đỉnh:\n- $O(0; 0)$\n- $A(5; 0)$: giao $y=0$ và $2x+y=10$\n- $B$: giao $2x+y=10$ và $x+3y=12$. Nhân PT1 với 3: $6x+3y=30$. Trừ PT2: $5x=18 \\Rightarrow x=\\frac{18}{5}$, $y=10-2 \\cdot \\frac{18}{5}=\\frac{14}{5}$ $\\Rightarrow B(\\frac{18}{5}; \\frac{14}{5})$.\n- $C(0; 4)$: giao $x=0$ và $x+3y=12$.',
        result: 'O(0;0), A(5;0), B(18/5; 14/5), C(0;4)'
      },
      {
        order: 2,
        title: 'Tính giá trị F tại các đỉnh',
        explanation: '$F(x; y) = x + 3y$:\n- $F(O) = 0$\n- $F(A) = 5 + 0 = 5$\n- $F(B) = \\frac{18}{5} + 3 \\cdot \\frac{14}{5} = \\frac{18 + 42}{5} = 12$\n- $F(C) = 0 + 3(4) = 12$\n\nNhận xét: $\\max F = 12$ đạt tại cả $B$ và $C$. Điều này xảy ra do đường mức $F = x + 3y = 12$ trùng với đường biên $x + 3y = 12$. Mọi điểm trên đoạn $BC$ đều cho $F = 12$.',
        result: 'max F = 12'
      }
    ],
    finalAnswer: '12',
    commonMistakes: [
      'Quên không kiểm tra đỉnh $C(0; 4)$ và kết luận sai rằng cực trị chỉ đạt tại B.',
      'Tính sai tọa độ phân số khi giải hệ phương trình.'
    ],
    reviewSuggestions: [
      'Khi GTLN đạt tại hai đỉnh liền kề, mọi điểm trên cạnh nối hai đỉnh đó cũng cho cùng giá trị tối ưu. Đây là trường hợp đặc biệt xảy ra khi đường mức song song với một cạnh của đa giác.'
    ]
  },
  {
    id: 'math10-s30',
    questionId: 'math10-q30',
    recognition: 'Bài toán tối ưu thực tế: phân bổ thời gian sản xuất để tối đa lợi nhuận.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập ẩn số và hệ ràng buộc',
        explanation: 'Gọi $x$ là số sản phẩm A, $y$ là số sản phẩm B sản xuất mỗi ngày ($x, y \\ge 0$).\n\nRàng buộc:\n- Thời gian gia công: $2x + y \\le 8$\n- Thời gian lắp ráp: $x + 3y \\le 9$\n\nHàm mục tiêu: $F(x; y) = 5x + 4y$ (triệu đồng).',
        result: 'Hệ ràng buộc và hàm mục tiêu'
      },
      {
        order: 2,
        title: 'Tìm tọa độ các đỉnh',
        explanation: '- $O(0; 0)$\n- $A(4; 0)$: giao $y=0$ và $2x+y=8$\n- $B$: giao $2x+y=8$ và $x+3y=9$. Nhân PT1 với 3: $6x+3y=24$. Trừ PT2: $5x=15 \\Rightarrow x=3, y=2$ $\\Rightarrow B(3; 2)$.\n- $C(0; 3)$: giao $x=0$ và $x+3y=9$.',
        result: 'O(0;0), A(4;0), B(3;2), C(0;3)'
      },
      {
        order: 3,
        title: 'Tính giá trị hàm mục tiêu',
        explanation: '$F(x; y) = 5x + 4y$:\n- $F(O) = 0$\n- $F(A) = 5(4) + 4(0) = 20$\n- $F(B) = 5(3) + 4(2) = 23$\n- $F(C) = 5(0) + 4(3) = 12$\n\n$\\max F = 23$ tại $B(3; 2)$. Vậy cần sản xuất **3 sản phẩm A và 2 sản phẩm B** mỗi ngày.',
        result: '3 sản phẩm A và 2 sản phẩm B'
      }
    ],
    finalAnswer: '3 sản phẩm A và 2 sản phẩm B',
    commonMistakes: [
      'Thiết lập nhầm ràng buộc gia công và lắp ráp (đảo hệ số giữa hai dòng).',
      'Quên ràng buộc $x, y \\ge 0$ dẫn đến miền nghiệm mở rộng sai.'
    ],
    reviewSuggestions: [
      'Khi đọc đề bài toán thực tế, lập bảng tóm tắt dữ liệu ràng buộc để tránh nhầm lẫn hệ số.'
    ]
  },
  {
    id: 'math10-s31',
    questionId: 'math10-q31',
    recognition: 'Xác định miền nghiệm của hệ có biên $x \\ge 1$ và $x - y \\le 3$.',
    detailedSteps: [
      {
        order: 1,
        title: 'Vẽ đường biên và xác định miền nghiệm',
        explanation: 'Các đường biên:\n- $(d_1): x = 1$ (đường thẳng đứng)\n- $(d_2): y = 0$ (trục $Ox$)\n- $(d_3): x + y = 5$ đi qua $(5; 0)$ và $(0; 5)$\n- $(d_4): x - y = 3$ đi qua $(3; 0)$ và $(0; -3)$\n\nMiền nghiệm là phần giao của: $x \\ge 1$ (bên phải $d_1$), $y \\ge 0$ (phía trên $d_2$), $x+y \\le 5$ (phía dưới $d_3$), $x-y \\le 3$ (phía trên $d_4$).',
        result: 'Miền nghiệm là tứ giác lồi'
      },
      {
        order: 2,
        title: 'Tìm tọa độ các đỉnh',
        explanation: '- $A$: giao $x=1$ và $y=0$ $\\Rightarrow A(1; 0)$\n- $B$: giao $y=0$ và $x-y=3$ $\\Rightarrow x=3 \\Rightarrow B(3; 0)$. Kiểm tra: $x+y=3 \\le 5$ (đúng), $x \\ge 1$ (đúng).\n- $C$: giao $x+y=5$ và $x-y=3$. Cộng vế: $2x=8 \\Rightarrow x=4, y=1$ $\\Rightarrow C(4; 1)$.\n- $D$: giao $x=1$ và $x+y=5$ $\\Rightarrow y=4 \\Rightarrow D(1; 4)$. Kiểm tra: $x-y=1-4=-3 \\le 3$ (đúng).',
        result: 'A(1;0), B(3;0), C(4;1), D(1;4)'
      }
    ],
    finalAnswer: 'A(1;0), B(3;0), C(4;1), D(1;4)',
    commonMistakes: [
      'Quên kiểm tra tính hợp lệ của các đỉnh tìm được (một đỉnh có thể nằm ngoài miền nghiệm do vi phạm bất phương trình khác).',
      'Vẽ sai miền nghiệm của $x - y \\le 3$ (nhầm sang phía dưới đường $x - y = 3$).'
    ],
    reviewSuggestions: [
      'Với bất phương trình dạng $x - y \\le 3$, thử điểm $O(0; 0)$: $0 - 0 = 0 \\le 3$ (đúng), vậy miền nghiệm chứa gốc O, tức là phía trên đường $x - y = 3$.'
    ]
  },
  {
    id: 'math10-s32',
    questionId: 'math10-q32',
    recognition: 'Tìm cực trị trên miền đa giác có 5 ràng buộc (ngũ giác).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định các đỉnh miền nghiệm',
        explanation: 'Các đường biên: $x=0$, $y=0$, $x+y=6$, $x+2y=8$, $2x+y=10$.\n\nTìm đỉnh:\n- $O(0; 0)$\n- $A(5; 0)$: giao $y=0$ và $2x+y=10$\n- $B$: giao $2x+y=10$ và $x+y=6$. Trừ: $x=4, y=2$ $\\Rightarrow B(4; 2)$. Kiểm tra $x+2y=8 \\le 8$ (đúng).\n- $C$: giao $x+y=6$ và $x+2y=8$. Trừ: $y=2, x=4$ $\\Rightarrow$ trùng $B$.\n\nThử cách khác: giao $2x+y=10$ và $x+2y=8$. Nhân PT2 với 2: $2x+4y=16$. Trừ PT1: $3y=6 \\Rightarrow y=2, x=4$ $\\Rightarrow$ cũng ra $B(4; 2)$.\n\nVậy 3 đường $x+y=6$, $x+2y=8$, $2x+y=10$ cùng đi qua điểm $B(4; 2)$.\n\n- $C(0; 4)$: giao $x=0$ và $x+2y=8$. Kiểm tra $x+y=4 \\le 6$ (đúng), $2x+y=4 \\le 10$ (đúng).\n\nVậy miền nghiệm là tứ giác $OABC$ với đỉnh $O(0;0), A(5;0), B(4;2), C(0;4)$.',
        result: 'O(0;0), A(5;0), B(4;2), C(0;4)'
      },
      {
        order: 2,
        title: 'Tính giá trị F tại các đỉnh',
        explanation: '$F(x; y) = 4x + 5y$:\n- $F(O) = 0$\n- $F(A) = 4(5) + 5(0) = 20$\n- $F(B) = 4(4) + 5(2) = 26$\n- $F(C) = 4(0) + 5(4) = 20$\n\nSo sánh: $0 < 20 = 20 < 26$. Kiểm tra lại điểm B có thuộc miền nghiệm: $x+y=6 \\le 6$ ✓, $x+2y=8 \\le 8$ ✓, $2x+y=10 \\le 10$ ✓.\n\nVậy $\\max F = 26$ đạt tại đỉnh $B(4; 2)$.',
        result: 'max F = 26'
      }
    ],
    finalAnswer: '26',
    commonMistakes: [
      'Quên kiểm tra một trong năm ràng buộc khi xác nhận đỉnh.',
      'Nhầm lẫn khi ba đường biên đồng quy tại một điểm, tưởng rằng miền nghiệm có nhiều đỉnh hơn thực tế.'
    ],
    reviewSuggestions: [
      'Với hệ có 5 bất phương trình, miền nghiệm vẫn có thể có ít hơn 5 đỉnh nếu các đường biên đồng quy.'
    ]
  },
  {
    id: 'math10-s33',
    questionId: 'math10-q33',
    recognition: 'Bài toán tối ưu thực tế: phân bổ sản lượng bánh để tối đa doanh thu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập ẩn số và hệ ràng buộc',
        explanation: 'Gọi $x$ là số bánh mì, $y$ là số bánh ngọt sản xuất mỗi ngày ($x, y \\ge 0$).\n\nRàng buộc:\n- Tổng số bánh: $x + y \\le 100$\n- Số bánh ngọt tối đa: $y \\le 60$\n- Số bánh mì tối thiểu: $x \\ge 20$\n\nHàm mục tiêu: $F(x; y) = 5x + 8y$ (nghìn đồng).',
        result: 'Hệ ràng buộc và hàm mục tiêu'
      },
      {
        order: 2,
        title: 'Tìm tọa độ các đỉnh',
        explanation: 'Các đỉnh:\n- $A(20; 0)$: giao $x=20$ và $y=0$\n- $B(100; 0)$: giao $y=0$ và $x+y=100$. Kiểm tra $x \\ge 20$ (đúng).\n- Nhưng kiểm tra $y \\le 60$: $0 \\le 60$ (đúng). Tuy nhiên $x = 100 > 20$, hợp lệ.\n- $C(40; 60)$: giao $x+y=100$ và $y=60$ $\\Rightarrow x=40$. Kiểm tra $x \\ge 20$ (đúng).\n- $D(20; 60)$: giao $x=20$ và $y=60$. Kiểm tra $x+y=80 \\le 100$ (đúng).',
        result: 'A(20;0), B(100;0), C(40;60), D(20;60)'
      },
      {
        order: 3,
        title: 'Tính giá trị hàm mục tiêu',
        explanation: '$F(x; y) = 5x + 8y$:\n- $F(A) = 5(20) + 8(0) = 100$\n- $F(B) = 5(100) + 8(0) = 500$\n- $F(C) = 5(40) + 8(60) = 200 + 480 = 680$\n- $F(D) = 5(20) + 8(60) = 100 + 480 = 580$\n\n$\\max F = 680$ tại $C(40; 60)$. Vậy cửa hàng cần sản xuất **40 bánh mì và 60 bánh ngọt** để lợi nhuận lớn nhất là 680 nghìn đồng.',
        result: '40 bánh mì và 60 bánh ngọt'
      }
    ],
    finalAnswer: '40 bánh mì và 60 bánh ngọt',
    commonMistakes: [
      'Bỏ sót ràng buộc $x \\ge 20$ (số bánh mì không ít hơn 20), dẫn đến chọn phương án toàn bánh ngọt.',
      'Nhầm đỉnh $B(100; 0)$ là phương án tối ưu do $x$ lớn nhất mà quên so sánh giá trị F.'
    ],
    reviewSuggestions: [
      'Bài toán này có ràng buộc cận dưới ($x \\ge 20$), dẫn đến miền nghiệm không bao gồm gốc tọa độ. Luôn chú ý các ràng buộc "tối thiểu" bên cạnh các ràng buộc "tối đa" thông thường.'
    ]
  },
  {
    id: 'math10-s34',
    questionId: 'math10-q34',
    recognition: 'Xác định parabol $y = ax^2 + bx + c$ khi biết hai điểm đi qua và hệ số c.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thay tọa độ điểm A(1; 5) vào phương trình',
        explanation: 'Do parabol đi qua $A(1; 5)$ nên ta thay $x = 1, y = 5$ vào phương trình:\n$a(1)^2 + b(1) + 2 = 5 \\Rightarrow a + b = 3$.',
        result: 'a + b = 3'
      },
      {
        order: 2,
        title: 'Thay tọa độ điểm B(-2; 8) vào phương trình',
        explanation: 'Do parabol đi qua $B(-2; 8)$ nên ta thay $x = -2, y = 8$ vào phương trình:\n$a(-2)^2 + b(-2) + 2 = 8 \\Rightarrow 4a - 2b = 6 \\Rightarrow 2a - b = 3$.',
        result: '2a - b = 3'
      },
      {
        order: 3,
        title: 'Giải hệ phương trình tìm a và b',
        explanation: 'Ta giải hệ phương trình hai ẩn:\n$$\\begin{cases} a + b = 3 \\\\ 2a - b = 3 \\end{cases} \\Rightarrow \\begin{cases} 3a = 6 \\\\ b = 3 - a \\end{cases} \\Rightarrow \\begin{cases} a = 2 \\\\ b = 1 \\end{cases}$$\nThế hai hệ số tìm được vào ta thu được phương trình Parabol: $y = 2x^2 + x + 2$.',
        result: 'y = 2x^2 + x + 2'
      }
    ],
    finalAnswer: 'y = 2x^2 + x + 2',
    commonMistakes: [
      'Nhầm dấu khi thế tọa độ âm của điểm B, ví dụ viết $(-2)^2 = -4$ thay vì $4$.'
    ],
    reviewSuggestions: [
      'Sau khi giải xong hệ phương trình, luôn thay ngược lại tọa độ các điểm đề bài cho vào phương trình parabol để tự kiểm tra kết quả.'
    ]
  },
  {
    id: 'math10-s35',
    questionId: 'math10-q35',
    recognition: 'Xác định tọa độ đỉnh và phương trình trục đối xứng của đồ thị hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định các hệ số của hàm số bậc hai',
        explanation: 'Từ phương trình hàm số $y = -x^2 + 4x - 3$, ta có các hệ số:\n$a = -1$, $b = 4$, $c = -3$.',
        result: 'a = -1, b = 4, c = -3'
      },
      {
        order: 2,
        title: 'Tính hoành độ và tung độ đỉnh I',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2$.\nTung độ đỉnh $y_I = -\\frac{\\Delta}{4a}$ hoặc tính nhanh bằng cách thế $x = 2$ vào phương trình hàm số:\n$y_I = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$.\nVậy tọa độ đỉnh của parabol là $I(2; 1)$.',
        result: 'I(2; 1)'
      },
      {
        order: 3,
        title: 'Xác định phương trình trục đối xứng',
        explanation: 'Trục đối xứng của parabol là đường thẳng đi qua đỉnh và vuông góc với trục hoành, có phương trình dạng $x = x_I$.\nDo đó, trục đối xứng là $x = 2$.',
        result: 'x = 2'
      }
    ],
    finalAnswer: 'I(2;1), x = 2',
    commonMistakes: [
      'Nhớ nhầm công thức hoành độ đỉnh thành $x_I = \\frac{b}{2a}$ (thiếu dấu trừ) hoặc $x_I = -\\frac{b}{a}$.',
      'Tính sai tung độ đỉnh khi thay $x$ vào do bỏ sót dấu trừ ngoài ngoặc vuông của $-x^2$ (viết $-(2)^2 = 4$ thay vì $-4$).'
    ],
    reviewSuggestions: [
      'Chú ý phân biệt rõ giữa $-x^2$ và $(-x)^2$. Luôn thực hiện lũy thừa trước rồi mới áp dụng dấu trừ bên ngoài.'
    ]
  },
  {
    id: 'math10-s36',
    questionId: 'math10-q36',
    recognition: 'Xác định phương trình parabol từ tọa độ đỉnh và một điểm đi qua.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng công thức dạng chính tắc (dạng đỉnh)',
        explanation: 'Phương trình parabol có thể viết dưới dạng chính tắc: $y = a(x - x_I)^2 + y_I$.\nThế tọa độ đỉnh $I(3; -4)$ vào, ta được:\n$y = a(x - 3)^2 - 4$.',
        result: 'y = a(x-3)^2 - 4'
      },
      {
        order: 2,
        title: 'Tìm hệ số a bằng điểm đi qua A(1; 0)',
        explanation: 'Vì parabol đi qua $A(1; 0)$ nên ta thế $x = 1, y = 0$ vào phương trình:\n$0 = a(1 - 3)^2 - 4 \\Rightarrow 4a - 4 = 0 \\Rightarrow a = 1$ (thỏa mãn $a \\neq 0$).',
        result: 'a = 1'
      },
      {
        order: 3,
        title: 'Khai triển đưa về dạng tổng quát',
        explanation: 'Thế $a = 1$ vào phương trình ở bước 1 và khai triển hằng đẳng thức:\n$y = 1(x - 3)^2 - 4 = (x^2 - 6x + 9) - 4 = x^2 - 6x + 5$.',
        result: 'y = x^2 - 6x + 5'
      }
    ],
    finalAnswer: 'y = x^2 - 6x + 5',
    commonMistakes: [
      'Khai triển hằng đẳng thức nhầm lẫn (ví dụ $(x-3)^2 = x^2 - 9$ hoặc $x^2 - 3x + 9$).',
      'Quên không đổi dấu hoặc không rút gọn hết các hệ số tự do.'
    ],
    reviewSuggestions: [
      'Sử dụng dạng đỉnh $y = a(x - p)^2 + q$ khi biết tọa độ đỉnh sẽ nhanh và ít bị sai sót hơn là giải hệ 3 phương trình 3 ẩn.'
    ]
  },
  {
    id: 'math10-s37',
    questionId: 'math10-q37',
    recognition: 'Xác định parabol khi biết trục đối xứng, điểm cắt trục tung và điểm đi qua.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hệ số c từ điểm cắt trục tung',
        explanation: 'Parabol cắt trục tung tại điểm $A(0; 4)$, nghĩa là với $x = 0$ thì $y = 4$.\nThay vào phương trình $y = ax^2 + bx + c$, ta được: $a(0)^2 + b(0) + c = 4 \\Rightarrow c = 4$.',
        result: 'c = 4'
      },
      {
        order: 2,
        title: 'Thiết lập mối liên hệ giữa a và b từ trục đối xứng',
        explanation: 'Trục đối xứng của parabol là đường thẳng $x = 1$, ta có:\n$-\\frac{b}{2a} = 1 \\Rightarrow b = -2a$.',
        result: 'b = -2a'
      },
      {
        order: 3,
        title: 'Tìm a và b bằng cách thế tọa độ điểm C(3; 7)',
        explanation: 'Do parabol đi qua $C(3; 7)$ nên ta thế $x = 3, y = 7$ và $c = 4$ vào phương trình:\n$7 = a(3)^2 + b(3) + 4 \\Rightarrow 9a + 3b = 3 \\Rightarrow 3a + b = 1$.\nThay $b = -2a$ vào phương trình này ta được:\n$3a + (-2a) = 1 \\Rightarrow a = 1$.\nTừ đó suy ra $b = -2(1) = -2$.\nVậy phương trình parabol cần tìm là $y = x^2 - 2x + 4$.',
        result: 'y = x^2 - 2x + 4'
      }
    ],
    finalAnswer: 'y = x^2 - 2x + 4',
    commonMistakes: [
      'Xác định sai tọa độ điểm giao với trục tung (cho là $A(4; 0)$ thay vì $A(0; 4)$).',
      'Nhầm hệ thức trục đối xứng thành $-\\frac{b}{a} = 1$ dẫn đến tỉ lệ hệ số sai.'
    ],
    reviewSuggestions: [
      'Giao điểm với trục tung luôn có hoành độ bằng 0. Điểm thuộc trục hoành luôn có tung độ bằng 0.'
    ]
  },
  {
    id: 'math10-s38',
    questionId: 'math10-q38',
    recognition: 'Tìm giá trị lớn nhất và nhỏ nhất của hàm số bậc hai trên một đoạn chứa hoành độ đỉnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hoành độ đỉnh I của parabol',
        explanation: 'Hàm số $y = x^2 - 4x + 3$ có hoành độ đỉnh là:\n$x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.',
        result: 'x_I = 2'
      },
      {
        order: 2,
        title: 'So sánh hoành độ đỉnh với đoạn xét',
        explanation: 'Ta nhận thấy hoành độ đỉnh $x_I = 2$ thuộc đoạn $[0; 3]$.\nVì hệ số $a = 1 > 0$ nên parabol có bề lõm quay lên, hàm số đạt cực tiểu tại đỉnh $x = 2$.',
        result: 'Đỉnh nằm trong đoạn xét'
      },
      {
        order: 3,
        title: 'Tính các giá trị mốc để so sánh cực trị',
        explanation: 'Tính giá trị của hàm số tại đỉnh và hai đầu mút của đoạn $[0; 3]$:\n- Tại đỉnh: $y(2) = 2^2 - 4(2) + 3 = -1$.\n- Tại biên trái: $y(0) = 3$.\n- Tại biên phải: $y(3) = 3^2 - 4(3) + 3 = 0$.\nSo sánh các giá trị: $-1 < 0 < 3$.\nDo đó, giá trị lớn nhất của hàm số trên đoạn $[0; 3]$ là $3$ (đạt tại $x = 0$), giá trị nhỏ nhất của hàm số là $-1$ (đạt tại $x = 2$).',
        result: 'GTLN = 3, GTNN = -1'
      }
    ],
    finalAnswer: 'GTLN = 3, GTNN = -1',
    commonMistakes: [
      'Quên tính giá trị tại đỉnh mà chỉ tính giá trị tại hai đầu mút $y(0)$ và $y(3)$, dẫn đến bỏ sót giá trị nhỏ nhất thực sự tại $x=2$.'
    ],
    reviewSuggestions: [
      'Khi tìm GTLN/GTNN của hàm số bậc hai trên đoạn $[m; n]$, bước đầu tiên bắt buộc phải là tính hoành độ đỉnh $x_I$ và kiểm tra xem có thuộc đoạn đó hay không.'
    ]
  },
  {
    id: 'math10-s39',
    questionId: 'math10-q39',
    recognition: 'Tìm giá trị lớn nhất và nhỏ nhất của hàm số bậc hai trên đoạn không chứa hoành độ đỉnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hoành độ đỉnh của parabol',
        explanation: 'Hàm số bậc hai $y = -2x^2 + 4x + 1$ có hoành độ đỉnh là:\n$x_I = -\\frac{b}{2a} = -\\frac{4}{2(-2)} = 1$.',
        result: 'x_I = 1'
      },
      {
        order: 2,
        title: 'Kiểm tra tính đơn điệu trên đoạn xét',
        explanation: 'Hoành độ đỉnh $x_I = 1$ không thuộc đoạn $[2; 4]$ (vì $1 < 2$).\nVì hệ số $a = -2 < 0$, đồ thị hàm số có bề lõm quay xuống. Hàm số đồng biến trên khoảng $(-\\infty; 1)$ và nghịch biến trên khoảng $(1; +\\infty)$.\nDo đoạn $[2; 4]$ nằm hoàn toàn trong khoảng nghịch biến $(1; +\\infty)$ nên hàm số luôn nghịch biến trên đoạn $[2; 4]$.',
        result: 'Hàm số nghịch biến trên đoạn [2; 4]'
      },
      {
        order: 3,
        title: 'Tính giá trị tại hai đầu mút đoạn để kết luận',
        explanation: 'Vì hàm số nghịch biến trên đoạn $[2; 4]$ nên:\n- Giá trị lớn nhất đạt tại đầu mút trái: $GTLN = y(2) = -2(2)^2 + 4(2) + 1 = 1$.\n- Giá trị nhỏ nhất đạt tại đầu mút phải: $GTNN = y(4) = -2(4)^2 + 4(4) + 1 = -15$.\nSo sánh: $GTLN = 1$ tại $x = 2$, $GTNN = -15$ tại $x = 4$.',
        result: 'GTLN = 1, GTNN = -15'
      }
    ],
    finalAnswer: 'GTLN = 1, GTNN = -15',
    commonMistakes: [
      'Vẫn lấy giá trị tại đỉnh $y(1) = 3$ làm giá trị lớn nhất mà không để ý rằng $x=1$ nằm ngoài phạm vi đoạn xét $[2; 4]$.'
    ],
    reviewSuggestions: [
      'Luôn lập bảng biến thiên thu nhỏ trên đoạn xét để tránh nhầm lẫn hướng tăng giảm của đồ thị.'
    ]
  },
  {
    id: 'math10-s40',
    questionId: 'math10-q40',
    recognition: 'Bài toán cực trị thực tế: quỹ đạo bay parabol đạt chiều cao cực đại.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng hàm số chiều cao',
        explanation: 'Quỹ đạo chuyển động của quả bóng được mô tả bởi hàm số bậc hai $h(t) = -5t^2 + 15t$.\nVới hệ số $a = -5 < 0$, đồ thị hàm số này có bề lõm quay xuống dưới, chứng tỏ hàm số đạt giá trị cực đại tại đỉnh của parabol.',
        result: 'Hàm số đạt GTLN tại đỉnh'
      },
      {
        order: 2,
        title: 'Tìm thời điểm đạt chiều cao lớn nhất',
        explanation: 'Thời điểm $t$ quả bóng đạt chiều cao lớn nhất tương ứng với hoành độ đỉnh của parabol:\n$t = -\\frac{b}{2a} = -\\frac{15}{2(-5)} = 1.5$ (giây).',
        result: 't = 1.5 giây'
      },
      {
        order: 3,
        title: 'Tính chiều cao lớn nhất của quả bóng',
        explanation: 'Thay $t = 1.5$ vào phương trình hàm số $h(t)$ để tìm giá trị lớn nhất:\n$h_{\\max} = h(1.5) = -5(1.5)^2 + 15(1.5) = -11.25 + 22.5 = 11.25$ (mét).\nVậy chiều cao lớn nhất quả bóng đạt được là $11.25$ mét.',
        result: 'h_max = 11.25m'
      }
    ],
    finalAnswer: '11.25m',
    commonMistakes: [
      'Tìm nhầm hoành độ đỉnh (thời điểm $t = 1.5$s) và trả lời đó là chiều cao lớn nhất.',
      'Tính sai giá trị bình phương của số thập phân $1.5^2$.'
    ],
    reviewSuggestions: [
      'Đọc kỹ câu hỏi: Đề bài yêu cầu tìm "thời điểm" đạt cực đại (tìm t) hay "giá trị cực đại" (tìm h).'
    ]
  },
  {
    id: 'math10-s41',
    questionId: 'math10-q41',
    recognition: 'Bài toán tối ưu hóa diện tích thực tế sử dụng hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập biểu thức độ dài các cạnh khu vườn',
        explanation: 'Gọi $x$ (mét) là chiều rộng của khu vườn hình chữ nhật ($x > 0$).\nDo khu vườn được rào bằng 40m lưới thép cho 3 cạnh (chừa lại một cạnh là bức tường đá có sẵn),\nnên chiều dài của cạnh song song với bức tường đá là:\n$40 - 2x$ (mét).\nĐiều kiện kích thước dương: $40 - 2x > 0 \\Rightarrow x < 20$. Vậy điều kiện của ẩn là $0 < x < 20$.',
        result: 'Cạnh còn lại là 40 - 2x'
      },
      {
        order: 2,
        title: 'Xây dựng hàm số diện tích khu vườn',
        explanation: 'Diện tích $S$ của khu vườn hình chữ nhật được tính theo công thức:\n$S(x) = x \\cdot (40 - 2x) = -2x^2 + 40x$ ($m^2$).\nĐây là một hàm số bậc hai đối với $x$ có hệ số $a = -2 < 0$.',
        result: 'S(x) = -2x^2 + 40x'
      },
      {
        order: 3,
        title: 'Tìm diện tích lớn nhất của khu vườn',
        explanation: 'Vì $a = -2 < 0$, đồ thị hàm diện tích là một parabol quay bề lõm xuống. Diện tích đạt giá trị lớn nhất tại hoành độ đỉnh:\n$x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = 10$ (mét).\nTọa độ này thỏa mãn điều kiện thực tế $0 < 10 < 20$.\nDiện tích lớn nhất khi đó là:\n$S(10) = -2(10)^2 + 40(10) = -200 + 400 = 200$ ($m^2$).',
        result: 'Diện tích lớn nhất là 200m^2'
      }
    ],
    finalAnswer: '200m^2',
    commonMistakes: [
      'Thiết lập biểu thức chiều dài sai (ví dụ gọi chiều dài là $40 - x$ thay vì $40 - 2x$, nhầm lẫn việc rào cả 4 cạnh).'
    ],
    reviewSuggestions: [
      'Phác thảo hình vẽ minh họa khu vườn và tường đá để đếm chính xác số cạnh cần rào.'
    ]
  },
  {
    id: 'math10-s42',
    questionId: 'math10-q42',
    recognition: 'Biện luận giá trị nhỏ nhất của hàm số bậc hai chứa tham số trên một đoạn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hoành độ đỉnh chứa tham số m',
        explanation: 'Hàm số $y = x^2 - 2mx + m^2 + 2m - 1$ có hoành độ đỉnh là $x_I = -\\frac{-2m}{2} = m$.',
        result: 'x_I = m'
      },
      {
        order: 2,
        title: 'Xét các trường hợp vị trí của m so với đoạn [0; 2]',
        explanation: 'Ta biện luận vị trí của hoành độ đỉnh $m$ đối với đoạn $[0; 2]$:\n\n- **Trường hợp 1: $m < 0$**:\n  Đỉnh nằm bên trái đoạn, hàm số đồng biến trên $[0; 2]$. GTNN đạt tại $x = 0$.\n  $\\Rightarrow \\min y = y(0) = m^2 + 2m - 1$.\n  Theo yêu cầu: $m^2 + 2m - 1 = 2 \\Leftrightarrow m^2 + 2m - 3 = 0 \\Rightarrow m = 1$ (loại vì $1 > 0$) hoặc $m = -3$ (thỏa mãn $m < 0$).\n\n- **Trường hợp 2: $0 \\le m \\le 2$**:\n  Đỉnh nằm trong đoạn, GTNN đạt tại đỉnh $x = m$.\n  $\\Rightarrow \\min y = y(m) = m^2 - 2m^2 + m^2 + 2m - 1 = 2m - 1$.\n  Theo yêu cầu: $2m - 1 = 2 \\Leftrightarrow m = 1.5$ (thỏa mãn $0 \\le 1.5 \\le 2$).\n\n- **Trường hợp 3: $m > 2$**:\n  Đỉnh nằm bên phải đoạn, hàm số nghịch biến trên $[0; 2]$. GTNN đạt tại $x = 2$.\n  $\\Rightarrow \\min y = y(2) = 2^2 - 4m + m^2 + 2m - 1 = m^2 - 2m + 3$.\n  Theo yêu cầu: $m^2 - 2m + 3 = 2 \\Leftrightarrow m^2 - 2m + 1 = 0 \\Leftrightarrow (m-1)^2 = 0 \\Rightarrow m = 1$ (loại vì $1 < 2$).',
        result: 'Xét đủ 3 trường hợp và tìm được m = -3, m = 1.5'
      },
      {
        order: 3,
        title: 'Tổng hợp kết quả',
        explanation: 'Các giá trị tham số thỏa mãn bài toán là $m = -3$ hoặc $m = 1.5$.',
        result: 'm = -3 hoặc m = 1.5'
      }
    ],
    finalAnswer: 'm = -3 hoặc m = 1.5',
    commonMistakes: [
      'Không chia trường hợp biện luận vị trí đỉnh m mà mặc định GTNN luôn đạt tại đỉnh $x = m$.',
      'Giải phương trình bậc hai ra nghiệm nhưng quên không đối chiếu điều kiện chặn của từng trường hợp.'
    ],
    reviewSuggestions: [
      'Khi biện luận cực trị hàm số bậc hai chứa tham số trên đoạn $[a; b]$, hãy vẽ 3 trường hợp đồ thị (đỉnh nằm bên trái, trong, bên phải đoạn) để thiết lập đúng điều kiện tương ứng.'
    ]
  },
  {
    id: 'math10-s43',
    questionId: 'math10-q43',
    recognition: 'Bài toán thực tế tối ưu hóa doanh thu sử dụng hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập biến số và các đại lượng theo biến',
        explanation: 'Gọi $x$ là số lần tăng giá vé thêm 100 nghìn đồng ($x \\ge 0$).\n- Giá vé mới sau khi tăng là: $2000 + 100x$ (nghìn đồng/khách).\n- Số lượng khách du lịch tương ứng tham gia là: $150 - 5x$ (khách).\nĐiều kiện số khách dương: $150 - 5x > 0 \\Rightarrow x < 30$. Vậy điều kiện là $0 \\le x < 30$.',
        result: 'Giá: 2000 + 100x; Khách: 150 - 5x'
      },
      {
        order: 2,
        title: 'Xây dựng hàm doanh thu',
        explanation: 'Doanh thu $R(x)$ bằng giá vé nhân số khách du lịch:\n$R(x) = (2000 + 100x)(150 - 5x)$\n$R(x) = 300000 - 10000x + 15000x - 500x^2$\n$R(x) = -500x^2 + 5000x + 300000$ (nghìn đồng).',
        result: 'R(x) = -500x^2 + 5000x + 300000'
      },
      {
        order: 3,
        title: 'Tìm giá tour tối ưu đạt doanh thu lớn nhất',
        explanation: 'Hàm doanh thu là hàm số bậc hai có hệ số $a = -500 < 0$, nên đồ thị parabol quay bề lõm xuống. Doanh thu đạt giá trị lớn nhất tại hoành độ đỉnh:\n$x = -\\frac{b}{2a} = -\\frac{5000}{2(-500)} = 5$ (thỏa mãn điều kiện $0 \\le 5 < 30$).\n\nGiá tour tối ưu cần đặt là:\n$2000 + 100(5) = 2500$ (nghìn đồng) = 2.5 triệu đồng.',
        result: 'Giá tour tối ưu là 2.5 triệu đồng'
      }
    ],
    finalAnswer: '2.5 triệu đồng',
    commonMistakes: [
      'Nhầm lẫn đơn vị tiền tệ (ví dụ viết 2 triệu thành 2 thay vì 2000 nghìn đồng), dẫn đến lệch hệ số hàm bậc hai.',
      'Trả lời số lần tăng giá $x=5$ thay vì trả lời mức giá bán cuối cùng là 2.5 triệu đồng.'
    ],
    reviewSuggestions: [
      'Luôn đổi tất cả các đại lượng tiền tệ về cùng một đơn vị (ví dụ: nghìn đồng) trước khi lập phương trình.'
    ]
  },
  {
    id: 'math10-s44',
    questionId: 'math10-q44',
    recognition: 'Tính diện tích, bán kính đường tròn nội tiếp, ngoại tiếp của tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng tam giác vuông',
        explanation: 'Ta nhận thấy ba cạnh của tam giác thỏa mãn: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.\nTheo định lí đảo của định lí Pythagore, tam giác này vuông với cạnh huyền bằng $10$, hai cạnh góc vuông bằng $6$ và $8$.',
        result: 'Tam giác vuông với hai cạnh góc vuông 6 và 8'
      },
      {
        order: 2,
        title: 'Tính diện tích S của tam giác',
        explanation: 'Vì tam giác vuông nên diện tích bằng nửa tích hai cạnh góc vuông:\n$S = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$.',
        result: 'S = 24'
      },
      {
        order: 3,
        title: 'Tính bán kính đường tròn ngoại tiếp R',
        explanation: 'Trong tam giác vuông, tâm đường tròn ngoại tiếp là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền:\n$R = \\frac{10}{2} = 5$.',
        result: 'R = 5'
      },
      {
        order: 4,
        title: 'Tính bán kính đường tròn nội tiếp r',
        explanation: 'Ta tính nửa chu vi: $p = \\frac{6 + 8 + 10}{2} = 12$.\nDùng công thức diện tích $S = pr \\Rightarrow r = \\frac{S}{p} = \\frac{24}{12} = 2$.',
        result: 'r = 2'
      }
    ],
    finalAnswer: 'S = 24, R = 5, r = 2',
    commonMistakes: [
      'Không nhận ra tam giác vuông nên dùng công thức Heron rất cồng kềnh và dễ tính toán sai số.',
      'Nhầm công thức tính nhanh bán kính $R$ và $r$.'
    ],
    reviewSuggestions: [
      'Nhận diện các bộ số Pythagore phổ biến (3-4-5, 6-8-10, 5-12-13...) sẽ giúp giải quyết bài toán cực kỳ nhanh chóng.'
    ]
  },
  {
    id: 'math10-s45',
    questionId: 'math10-q45',
    recognition: 'Tính cạnh thứ ba của tam giác sử dụng định lí Côsin khi biết hai cạnh và góc xen giữa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng định lí Côsin đối với cạnh a',
        explanation: 'Theo định lí Côsin, ta có hệ thức:\n$a^2 = b^2 + c^2 - 2bc \\cos A$.',
        result: 'a^2 = b^2 + c^2 - 2bc*cos(A)'
      },
      {
        order: 2,
        title: 'Thay số và thực hiện tính toán',
        explanation: 'Thay $b = 5, c = 8, A = 60^\\circ$ vào phương trình:\n$a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ$\n$a^2 = 25 + 64 - 80 \\cdot 0.5$\n$a^2 = 89 - 40 = 49$.',
        result: 'a^2 = 49'
      },
      {
        order: 3,
        title: 'Tính độ dài cạnh a',
        explanation: 'Do độ dài cạnh phải lớn hơn 0 nên ta có:\n$a = \\sqrt{49} = 7$.',
        result: 'a = 7'
      }
    ],
    finalAnswer: '7',
    commonMistakes: [
      'Tính toán nhầm dấu ở tích số cuối cùng: viết $2bc \\cos A$ thành cộng thay vì trừ.',
      'Nhớ sai giá trị $\\cos 60^\\circ$ thành $\\frac{\\sqrt{3}}{2}$ (đây là giá trị của $\\sin 60^\\circ$).'
    ],
    reviewSuggestions: [
      'Đảm bảo ghi nhớ đúng bảng giá trị lượng giác của các góc đặc biệt ($30^\\circ, 45^\\circ, 60^\\circ$).'
    ]
  },
  {
    id: 'math10-s46',
    questionId: 'math10-q46',
    recognition: 'Tìm cạnh chưa biết sử dụng định lí Sin khi biết hai góc và một cạnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập biểu thức định lí Sin',
        explanation: 'Theo định lí Sin, ta có mối quan hệ giữa các cạnh và góc tương ứng:\n$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.',
        result: 'a/sin(A) = b/sin(B)'
      },
      {
        order: 2,
        title: 'Rút ra công thức tính cạnh b',
        explanation: 'Từ hệ thức trên, ta suy ra:\n$b = \\frac{a \\cdot \\sin B}{\\sin A}$.',
        result: 'b = a*sin(B)/sin(A)'
      },
      {
        order: 3,
        title: 'Thay số và rút gọn kết quả',
        explanation: 'Thay $a = 4, A = 30^\\circ, B = 45^\\circ$ vào:\n$b = \\frac{4 \\cdot \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{4 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 4\\sqrt{2}$.',
        result: 'b = 4\\sqrt{2}'
      }
    ],
    finalAnswer: '4\\sqrt{2}',
    commonMistakes: [
      'Nhầm công thức định lí Sin: viết $\\frac{a}{\\cos A}$ hoặc lấy nhầm cạnh chia cho sin góc không tương ứng.',
      'Tính sai thương số phân số kép chứa căn.'
    ],
    reviewSuggestions: [
      'Định lí Sin phát biểu: Cạnh đối diện chia cho sin góc đối diện bằng nhau cho cả 3 góc. Luôn xác định đúng cặp cạnh - góc đối diện.'
    ]
  },
  {
    id: 'math10-s47',
    questionId: 'math10-q47',
    recognition: 'Tính diện tích tam giác theo công thức Heron khi biết độ dài 3 cạnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính nửa chu vi p của tam giác',
        explanation: 'Nửa chu vi tam giác $p$ là:\n$p = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = 21$.',
        result: 'p = 21'
      },
      {
        order: 2,
        title: 'Áp dụng công thức Heron để tính diện tích',
        explanation: 'Theo công thức Heron, diện tích tam giác được tính bởi:\n$S = \\sqrt{p(p-a)(p-b)(p-c)}$.',
        result: 'S = sqrt(p(p-a)(p-b)(p-c))'
      },
      {
        order: 3,
        title: 'Thay số và tính kết quả',
        explanation: 'Thay $p = 21, a = 13, b = 14, c = 15$ vào công thức:\n$S = \\sqrt{21 \\cdot (21-13) \\cdot (21-14) \\cdot (21-15)}$\n$S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.',
        result: 'S = 84'
      }
    ],
    finalAnswer: '84',
    commonMistakes: [
      'Nhầm lẫn công thức chu vi: chia sai mẫu số chu vi (chu vi thay vì nửa chu vi).',
      'Tính nhẩm sai tích số dưới dấu căn dẫn đến việc khai căn không ra số nguyên.'
    ],
    reviewSuggestions: [
      'Để tính tích dưới căn nhanh hơn, ta có thể phân tích thành các thừa số nguyên tố:\n$21 \\cdot 8 \\cdot 7 \\cdot 6 = (3 \\cdot 7) \\cdot 8 \\cdot 7 \\cdot (2 \\cdot 3) = (3^2) \\cdot (7^2) \\cdot (16) = (3 \\cdot 7 \\cdot 4)^2 = 84^2$.'
    ]
  },
  {
    id: 'math10-s48',
    questionId: 'math10-q48',
    recognition: 'Tính bán kính đường tròn nội tiếp tam giác thường bằng công thức diện tích.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính nửa chu vi p của tam giác',
        explanation: 'Nửa chu vi tam giác là:\n$p = \\frac{a + b + c}{2} = \\frac{7 + 8 + 5}{2} = 10$.',
        result: 'p = 10'
      },
      {
        order: 2,
        title: 'Tính diện tích S bằng công thức Heron',
        explanation: 'Ta có:\n$S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{10 \\cdot (10-7) \\cdot (10-8) \\cdot (10-5)}$\n$S = \\sqrt{10 \\cdot 3 \\cdot 2 \\cdot 5} = \\sqrt{300} = 10\\sqrt{3}$.',
        result: 'S = 10\\sqrt{3}'
      },
      {
        order: 3,
        title: 'Tính bán kính đường tròn nội tiếp r',
        explanation: 'Từ hệ thức diện tích $S = pr$, ta suy ra:\n$r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3}$.',
        result: 'r = \\sqrt{3}'
      }
    ],
    finalAnswer: '\\sqrt{3}',
    commonMistakes: [
      'Không nhớ công thức tính bán kính đường tròn nội tiếp $r = S/p$.'
    ],
    reviewSuggestions: [
      'Công thức diện tích $S = pr$ liên kết chặt chẽ diện tích, nửa chu vi và bán kính đường tròn nội tiếp. Đây là cách chính để tìm $r$ trong đa số các bài toán tam giác thường.'
    ]
  },
  {
    id: 'math10-s49',
    questionId: 'math10-q49',
    recognition: 'Tính góc hoặc côsin của góc trong tam giác khi biết độ dài 3 cạnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập công thức từ định lí Côsin',
        explanation: 'Theo định lí Côsin, ta có: $a^2 = b^2 + c^2 - 2bc \\cos A$.\nTừ đó suy ra hệ quả để tính côsin góc A:\n$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
        result: 'cos(A) = (b^2 + c^2 - a^2) / (2bc)'
      },
      {
        order: 2,
        title: 'Thay số và tính toán tỉ số',
        explanation: 'Thay các giá trị $a = 5, b = 6, c = 7$ vào công thức:\n$\\cos A = \\frac{6^2 + 7^2 - 5^2}{2 \\cdot 6 \\cdot 7} = \\frac{36 + 49 - 25}{84}$.',
        result: 'cos(A) = 60 / 84'
      },
      {
        order: 3,
        title: 'Rút gọn phân số',
        explanation: 'Rút gọn phân số $\\frac{60}{84}$ cho ước chung lớn nhất là $12$ ta được:\n$\\cos A = \\frac{5}{7}$.',
        result: 'cos(A) = 5/7'
      }
    ],
    finalAnswer: '5/7',
    commonMistakes: [
      'Nhầm vị trí các cạnh trong công thức: lấy lộn cạnh đối diện làm số hạng dương (nhầm thành $\\frac{a^2 + b^2 - c^2}{2ab}$ để tính $\\cos A$).'
    ],
    reviewSuggestions: [
      'Mẹo nhớ định lí Côsin: Số hạng mang dấu trừ ở trên tử luôn là bình phương cạnh đối diện với góc cần tính.'
    ]
  },
  {
    id: 'math10-s50',
    questionId: 'math10-q50',
    recognition: 'Giải bài toán đo chiều cao thực tế bằng cách thiết lập tam giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Dựng sơ đồ hình vẽ',
        explanation: 'Gọi tháp có chiều cao $h = CD$ ($D$ là chân tháp, $C$ là đỉnh tháp).\nĐiểm quan sát thứ nhất là $A$ với góc nâng $\\angle CAD = 30^\\circ$.\nĐiểm quan sát thứ hai là $B$ nằm giữa $A$ và $D$ với góc nâng $\\angle CBD = 60^\\circ$. Khoảng cách $AB = 50$m.',
        result: 'Thiết lập tam giác ABC'
      },
      {
        order: 2,
        title: 'Thiết lập biểu thức tính khoảng cách trên mặt đất theo h',
        explanation: 'Trong tam giác vuông $ADC$ và $BDC$, ta có:\n$AD = \\frac{h}{\\tan 30^\\circ} = h\\sqrt{3}$.\n$BD = \\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$.',
        result: 'AD = h*sqrt(3), BD = h/sqrt(3)'
      },
      {
        order: 3,
        title: 'Lập phương trình và giải tìm h',
        explanation: 'Do $A, B, D$ thẳng hàng nên:\n$AB = AD - BD \\Rightarrow 50 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}}$\n$50 = h \\left(\\frac{3 - 1}{\\sqrt{3}}\\right) = h \\frac{2}{\\sqrt{3}}$\n$\\Rightarrow h = \\frac{50 \\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.3$ (mét).\nLàm tròn đến hàng đơn vị mét ta được $43$ mét.',
        result: 'h = 43'
      }
    ],
    finalAnswer: '43m',
    commonMistakes: [
      'Thiết lập sai phương trình khoảng cách: lấy $AB = AD + BD$ do đặt sai vị trí điểm quan sát.',
      'Sử dụng sai hàm lượng giác (ví dụ dùng $\\sin$ thay vì $\\tan$).'
    ],
    reviewSuggestions: [
      'Phương pháp dùng hiệu của hai hàm $\\cot$ (hoặc $1/\\tan$) là dạng toán kinh điển để tính chiều cao khi biết khoảng cách dịch chuyển và hai góc nâng.'
    ]
  },
  {
    id: 'math10-s51',
    questionId: 'math10-q51',
    recognition: 'Tìm cạnh của tam giác từ diện tích và điều kiện góc tù.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính góc C từ diện tích tam giác',
        explanation: 'Ta có công thức diện tích tam giác: $S = \\frac{1}{2}ab \\sin C$.\nThay các giá trị đã biết vào:\n$5\\sqrt{3} = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin C \\Rightarrow 10 \\sin C = 5\\sqrt{3} \\Rightarrow \\sin C = \\frac{\\sqrt{3}}{2}$.',
        result: 'sin(C) = sqrt(3)/2'
      },
      {
        order: 2,
        title: 'Xác định số đo góc C từ điều kiện góc tù',
        explanation: 'Phương trình $\\sin C = \\frac{\\sqrt{3}}{2}$ cho ta hai giá trị góc trong khoảng $(0^\\circ; 180^\\circ)$ là $C = 60^\\circ$ hoặc $C = 120^\\circ$.\nVì đề bài cho biết góc $C$ là góc tù ($C > 90^\\circ$), nên ta nhận góc $C = 120^\\circ$.',
        result: 'C = 120 độ'
      },
      {
        order: 3,
        title: 'Tính cạnh c bằng định lí Côsin',
        explanation: 'Áp dụng định lí Côsin cho cạnh $c$:\n$c^2 = a^2 + b^2 - 2ab \\cos C$\n$c^2 = 4^2 + 5^2 - 2 \\cdot 4 \\cdot 5 \\cdot \\cos 120^\\circ$\n$c^2 = 16 + 25 - 40 \\cdot (-0.5) = 41 + 20 = 61$.\nDo đó, độ dài cạnh $c = \\sqrt{61}$.',
        result: 'c = \\sqrt{61}'
      }
    ],
    finalAnswer: '\\sqrt{61}',
    commonMistakes: [
      'Bỏ sót điều kiện "góc tù", lấy góc $C = 60^\\circ$ làm kết quả, dẫn đến tính ra $c^2 = 21 \\Rightarrow c = \\sqrt{21}$.',
      'Tính sai dấu của $\\cos 120^\\circ$: quên rằng cos của góc tù mang giá trị âm.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: $\\cos(180^\\circ - x) = -\\cos x$. Do đó $\\cos 120^\\circ = -\\cos 60^\\circ = -0.5$. Góc tù thì giá trị cos luôn âm!'
    ]
  },
  {
    id: 'math10-s52',
    questionId: 'math10-q52',
    recognition: 'Bài toán thực tế về hai vật chuyển động rời nhau dưới một góc cho trước.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính quãng đường di chuyển của hai tàu',
        explanation: 'Sau 2 giờ:\n- Tàu thứ nhất đi được quãng đường: $OA = 15 \\text{ km/h} \\cdot 2 \\text{ h} = 30$ km.\n- Tàu thứ hai đi được quãng đường: $OB = 40 \\text{ km/h} \\cdot 2 \\text{ h} = 80$ km.',
        result: 'OA = 30km, OB = 80km'
      },
      {
        order: 2,
        title: 'Áp dụng định lí Côsin tính khoảng cách AB',
        explanation: 'Khoảng cách giữa hai tàu sau 2 giờ chính là độ dài đoạn $AB$ trong tam giác $OAB$ có góc $\\angle AOB = 60^\\circ$:\n$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos \\angle AOB$.',
        result: 'AB^2 = OA^2 + OB^2 - 2OA*OB*cos(60)'
      },
      {
        order: 3,
        title: 'Tính toán trị số',
        explanation: 'Thay số vào hệ thức:\n$AB^2 = 30^2 + 80^2 - 2 \\cdot 30 \\cdot 80 \\cdot \\cos 60^\\circ$\n$AB^2 = 900 + 6400 - 4800 \\cdot 0.5$\n$AB^2 = 7300 - 2400 = 4900$\n$\\Rightarrow AB = \\sqrt{4900} = 50$ (km).\nVậy khoảng cách giữa hai tàu sau 2 giờ là 50 km.',
        result: 'AB = 50'
      }
    ],
    finalAnswer: '50',
    commonMistakes: [
      'Tính sai quãng đường do quên nhân thời gian 2 giờ với vận tốc.',
      'Sử dụng công thức Pythagore $AB^2 = OA^2 + OB^2$ do nhầm lẫn góc di chuyển là $90^\\circ$.'
    ],
    reviewSuggestions: [
      'Đọc kĩ giả thiết để lấy đúng góc tạo bởi hướng đi của hai vật. Nếu đề cho lệch góc hướng bắc/đông thì cần vẽ hình phụ để tính đúng góc xen giữa.'
    ]
  },
  {
    id: 'math10-s53',
    questionId: 'math10-q53',
    recognition: 'Bài toán đo khoảng cách gián tiếp ra đảo sử dụng định lí Sin.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính số đo góc thứ ba trong tam giác ABC',
        explanation: 'Trong tam giác $ABC$, tổng ba góc bằng $180^\\circ$, do đó góc tại đảo $C$ là:\n$\\angle ACB = 180^\\circ - (\\angle CAB + \\angle CBA) = 180^\\circ - (80^\\circ + 70^\\circ) = 30^\\circ$.',
        result: 'góc C = 30 độ'
      },
      {
        order: 2,
        title: 'Áp dụng định lí Sin tìm khoảng cách AC',
        explanation: 'Theo định lí Sin, ta có tỉ số:\n$\\frac{AC}{\\sin \\angle CBA} = \\frac{AB}{\\sin \\angle ACB} \\Rightarrow \\frac{AC}{\\sin 70^\\circ} = \\frac{100}{\\sin 30^\\circ}$.',
        result: 'AC/sin(70) = 100/sin(30)'
      },
      {
        order: 3,
        title: 'Tính toán và làm tròn kết quả',
        explanation: 'Suy ra công thức tính $AC$:\n$AC = \\frac{100 \\cdot \\sin 70^\\circ}{\\sin 30^\\circ} = \\frac{100 \\cdot \\sin 70^\\circ}{0.5} = 200 \\cdot \\sin 70^\\circ$.\nVới $\\sin 70^\\circ \\approx 0.9397$, ta có:\n$AC \\approx 200 \\cdot 0.9397 = 187.94$ (mét).\nLàm tròn đến hàng đơn vị mét, khoảng cách từ bờ $A$ đến đảo $C$ là $188$ mét.',
        result: 'AC = 188'
      }
    ],
    finalAnswer: '188m',
    commonMistakes: [
      'Áp dụng sai định lí lượng giác (như dùng định lí Côsin khi không đủ dữ kiện cạnh).',
      'Tính sai góc $C$ do cộng nhẩm sai.'
    ],
    reviewSuggestions: [
      'Đây là phương pháp lượng giác hóa để định vị khoảng cách gián tiếp. Khi biết 1 cạnh và 2 góc kề, luôn tính góc còn lại trước rồi dùng định lí Sin để giải quyết các cạnh còn lại.'
    ]
  },
  {
    id: 'math10-s54',
    questionId: 'math10-q54',
    recognition: 'Tính tích vô hướng của hai vectơ bằng cách biến đổi chung điểm đầu gốc để tìm góc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đưa về cặp vectơ chung điểm đầu gốc',
        explanation: 'Ta cần tính tích vô hướng $\\vec{AB} \\cdot \\vec{BC}$.\nĐể xác định đúng góc giữa hai vectơ này, ta biến đổi vectơ $\\vec{AB} = -\\vec{BA}$.\nKhi đó: $\\vec{AB} \\cdot \\vec{BC} = (-\\vec{BA}) \\cdot \\vec{BC} = -\\vec{BA} \\cdot \\vec{BC}$.',
        result: 'AB.BC = -BA.BC'
      },
      {
        order: 2,
        title: 'Xác định góc giữa hai vectơ BA và BC',
        explanation: 'Hai vectơ $\\vec{BA}$ và $\\vec{BC}$ đã chung điểm đầu gốc $B$.\nGóc giữa chúng chính là góc $\\angle B$ của tam giác đều $ABC$.\nDo tam giác $ABC$ đều nên góc $\\angle B = 60^\\circ$.',
        result: 'Góc (BA, BC) = 60 độ'
      },
      {
        order: 3,
        title: 'Tính toán tích vô hướng',
        explanation: 'Theo định nghĩa tích vô hướng:\n$\\vec{BA} \\cdot \\vec{BC} = |\\vec{BA}| \\cdot |\\vec{BC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$.\nDo đó: $\\vec{AB} \\cdot \\vec{BC} = -\\frac{a^2}{2}$.',
        result: 'AB.BC = -a^2/2'
      }
    ],
    finalAnswer: '-a^2/2',
    commonMistakes: [
      'Xác định sai góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $60^\\circ$ thay vì $120^\\circ$ (góc bù với góc tam giác do chưa chung gốc).',
      'Thiếu dấu trừ ở kết quả cuối cùng.'
    ],
    reviewSuggestions: [
      'Luôn chú ý đưa hai vectơ về chung gốc (ví dụ gốc B) trước khi xác định số đo góc giữa chúng.'
    ]
  },
  {
    id: 'math10-s55',
    questionId: 'math10-q55',
    recognition: 'Tính tích vô hướng của hai vectơ từ biểu thức tọa độ Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập biểu thức tọa độ tích vô hướng',
        explanation: 'Với hai vectơ $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$, tích vô hướng được tính theo công thức:\n$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$.',
        result: 'u.v = x1*x2 + y1*y2'
      },
      {
        order: 2,
        title: 'Thay số và tính kết quả',
        explanation: 'Thay tọa độ $\\vec{u} = (2; -1)$ và $\\vec{v} = (3; 4)$ vào công thức:\n$\\vec{u} \\cdot \\vec{v} = 2 \\cdot 3 + (-1) \\cdot 4 = 6 - 4 = 2$.',
        result: 'u.v = 2'
      }
    ],
    finalAnswer: '2',
    commonMistakes: [
      'Nhân sai dấu ở các thành phần tọa độ âm (ví dụ nhân $(-1) \\cdot 4 = 4$ thay vì $-4$).'
    ],
    reviewSuggestions: [
      'Phương pháp tọa độ là cách tính tích vô hướng nhanh và ít sai sót nhất, chỉ cần cẩn thận các phép tính dấu âm.'
    ]
  },
  {
    id: 'math10-s56',
    questionId: 'math10-q56',
    recognition: 'Tính góc giữa hai vectơ khi biết tọa độ trong mặt phẳng Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng của hai vectơ',
        explanation: 'Tích vô hướng của $\\vec{u} = (1; \\sqrt{3})$ và $\\vec{v} = (\\sqrt{3}; 1)$ là:\n$\\vec{u} \\cdot \\vec{v} = 1 \\cdot \\sqrt{3} + \\sqrt{3} \\cdot 1 = 2\\sqrt{3}$.',
        result: 'u.v = 2\\sqrt{3}'
      },
      {
        order: 2,
        title: 'Tính độ dài của mỗi vectơ',
        explanation: 'Độ dài của $\\vec{u}$ và $\\vec{v}$ lần lượt là:\n$|\\vec{u}| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1+3} = 2$.\n$|\\vec{v}| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3+1} = 2$.',
        result: '|u| = 2, |v| = 2'
      },
      {
        order: 3,
        title: 'Tính côsin và số đo góc',
        explanation: 'Côsin góc giữa hai vectơ là:\n$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{2\\sqrt{3}}{2 \\cdot 2} = \\frac{\\sqrt{3}}{2}$.\nSuy ra góc giữa hai vectơ bằng $30^\\circ$.',
        result: 'Góc = 30 độ'
      }
    ],
    finalAnswer: '30 độ',
    commonMistakes: [
      'Bấm máy tính hoặc tính sai giá trị góc lượng giác từ côsin (nhầm $\\cos x = \\frac{\\sqrt{3}}{2}$ ra góc $60^\\circ$).'
    ],
    reviewSuggestions: [
      'Luôn đảm bảo chia đúng tích vô hướng cho tích độ dài khi tìm côsin góc giữa hai vectơ.'
    ]
  },
  {
    id: 'math10-s57',
    questionId: 'math10-q57',
    recognition: 'Tính tích vô hướng từ tọa độ các đỉnh của tam giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm tọa độ các vectơ AB và AC',
        explanation: 'Ta tính tọa độ của hai vectơ bằng cách lấy tọa độ điểm sau trừ điểm trước:\n$\\vec{AB} = (x_B - x_A; y_B - y_A) = (-1 - 1; 1 - 2) = (-2; -1)$.\n$\\vec{AC} = (x_C - x_A; y_C - y_A) = (3 - 1; -2 - 2) = (2; -4)$.',
        result: 'AB = (-2; -1), AC = (2; -4)'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng AB.AC',
        explanation: 'Áp dụng biểu thức tọa độ tích vô hướng:\n$\\vec{AB} \\cdot \\vec{AC} = (-2) \\cdot 2 + (-1) \\cdot (-4) = -4 + 4 = 0$.',
        result: 'AB.AC = 0'
      }
    ],
    finalAnswer: '0',
    commonMistakes: [
      'Tính sai tọa độ các vectơ do nhầm lẫn thứ tự trừ (lấy hoành độ A trừ hoành độ B thay vì ngược lại).'
    ],
    reviewSuggestions: [
      'Tích vô hướng bằng 0 chứng tỏ tam giác ABC vuông tại A. Việc kiểm tra tích vô hướng giúp phát hiện các góc vuông một cách nhanh chóng.'
    ]
  },
  {
    id: 'math10-s58',
    questionId: 'math10-q58',
    recognition: 'Tính tích vô hướng hình học bằng cách chèn điểm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chèn điểm A vào vectơ BC',
        explanation: 'Ta phân tích vectơ $\\vec{BC} = \\vec{AC} - \\vec{AB}$.\nKhi đó, tích vô hướng trở thành:\n$\\vec{AB} \\cdot \\vec{BC} = \\vec{AB} \\cdot (\\vec{AC} - \\vec{AB}) = \\vec{AB} \\cdot \\vec{AC} - \\vec{AB}^2$.',
        result: 'AB.BC = AB.AC - AB^2'
      },
      {
        order: 2,
        title: 'Tính các số hạng thành phần',
        explanation: 'Vì tam giác $ABC$ vuông tại $A$ nên hai vectơ $\\vec{AB}$ và $\\vec{AC}$ vuông góc với nhau:\n$\\vec{AB} \\cdot \\vec{AC} = 0$.\nBình phương vô hướng $\\vec{AB}^2 = AB^2 = 3^2 = 9$.',
        result: 'AB.AC = 0, AB^2 = 9'
      },
      {
        order: 3,
        title: 'Tổng hợp kết quả',
        explanation: 'Thế các giá trị vào biểu thức:\n$\\vec{AB} \\cdot \\vec{BC} = 0 - 9 = -9$.',
        result: 'AB.BC = -9'
      }
    ],
    finalAnswer: '-9',
    commonMistakes: [
      'Không đổi hướng và chèn điểm đúng, dẫn đến tính nhầm góc giữa $\\vec{AB}$ và $\\vec{BC}$ thành góc $\\angle B$ của tam giác vuông.'
    ],
    reviewSuggestions: [
      'Công thức chèn điểm hiệu $\\vec{XY} = \\vec{AY} - \\vec{AX}$ cực kỳ hữu ích để tính tích vô hướng khi tam giác có góc vuông tại A.'
    ]
  },
  {
    id: 'math10-s59',
    questionId: 'math10-q59',
    recognition: 'Tính độ dài của tổng hai vectơ dựa trên bình phương vô hướng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng của hai vectơ ban đầu',
        explanation: 'Tích vô hướng của $\\vec{a}$ và $\\vec{b}$ là:\n$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos 120^\\circ = 3 \\cdot 4 \\cdot (-0.5) = -6$.',
        result: 'a.b = -6'
      },
      {
        order: 2,
        title: 'Bình phương vô hướng biểu thức vectơ',
        explanation: 'Ta bình phương vô hướng độ dài vectơ $\\vec{u}$:\n$|\\vec{u}|^2 = (\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$.',
        result: '|u|^2 = a^2 + 2a.b + b^2'
      },
      {
        order: 3,
        title: 'Thế số và khai căn độ dài',
        explanation: 'Thay $|\\vec{a}| = 3, |\\vec{b}| = 4$ và $\\vec{a}\\cdot\\vec{b} = -6$ vào:\n$|\\vec{u}|^2 = 3^2 + 2(-6) + 4^2 = 9 - 12 + 16 = 13$.\nVậy độ dài của vectơ $|\\vec{u}| = \\sqrt{13}$.',
        result: '|u| = \\sqrt{13}'
      }
    ],
    finalAnswer: '\\sqrt{13}',
    commonMistakes: [
      'Nhầm lẫn giữa bình phương một tổng vectơ với tổng các bình phương độ dài (viết $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}| = 7$ là sai hoàn toàn).',
      'Tính sai dấu của $\\cos 120^\\circ$ làm thay đổi kết quả tích vô hướng.'
    ],
    reviewSuggestions: [
      'Muốn tìm độ dài của một biểu thức vectơ phức tạp, luôn thực hiện bình phương vô hướng biểu thức đó rồi khai căn kết quả.'
    ]
  },
  {
    id: 'math10-s60',
    questionId: 'math10-q60',
    recognition: 'Tìm điều kiện tham số để hai vectơ vuông góc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập điều kiện vuông góc',
        explanation: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0:\n$\\vec{u} \\cdot \\vec{v} = 0$.',
        result: 'u.v = 0'
      },
      {
        order: 2,
        title: 'Áp dụng biểu thức tọa độ lập phương trình',
        explanation: 'Với $\\vec{u} = (2; x)$ và $\\vec{v} = (-3; 6)$:\n$\\vec{u} \\cdot \\vec{v} = 2 \\cdot (-3) + x \\cdot 6 = -6 + 6x$.\nCho tích vô hướng bằng 0 ta được phương trình: $-6 + 6x = 0$.',
        result: '-6 + 6x = 0'
      },
      {
        order: 3,
        title: 'Giải phương trình tìm x',
        explanation: 'Giải phương trình tuyến tính:\n$6x = 6 \\Rightarrow x = 1$.',
        result: 'x = 1'
      }
    ],
    finalAnswer: '1',
    commonMistakes: [
      'Nhầm điều kiện vuông góc sang điều kiện cùng phương (điều kiện cùng phương là hoành chia hoành bằng tung chia tung: $\\frac{2}{-3} = \\frac{x}{6}$).'
    ],
    reviewSuggestions: [
      'Ghi nhớ phân biệt rõ ràng: Vuông góc liên quan đến tích vô hướng bằng 0 ($x_1x_2 + y_1y_2 = 0$), cùng phương liên quan đến tỉ lệ tọa độ ($x_1y_2 - x_2y_1 = 0$).'
    ]
  },
  {
    id: 'math10-s61',
    questionId: 'math10-q61',
    recognition: 'Tìm tọa độ trực tâm của tam giác bằng phương pháp vectơ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Gọi tọa độ H và thiết lập điều kiện trực tâm',
        explanation: 'Gọi trực tâm là $H(x; y)$.\nVì $H$ là trực tâm của tam giác $ABC$ nên ta có hệ điều kiện:\n$\\vec{AH} \\perp \\vec{BC} \\Leftrightarrow \\vec{AH} \\cdot \\vec{BC} = 0$\n$\\vec{BH} \\perp \\vec{AC} \\Leftrightarrow \\vec{BH} \\cdot \\vec{AC} = 0$.',
        result: 'AH.BC = 0 và BH.AC = 0'
      },
      {
        order: 2,
        title: 'Tính tọa độ các vectơ tương ứng',
        explanation: 'Ta có các vectơ:\n$\\vec{BC} = (5-5; 5-1) = (0; 4)$.\n$\\vec{AC} = (5-1; 5-3) = (4; 2)$.\n$\\vec{AH} = (x-1; y-3)$.\n$\\vec{BH} = (x-5; y-1)$.',
        result: 'BC=(0;4), AC=(4;2), AH=(x-1;y-3), BH=(x-5;y-1)'
      },
      {
        order: 3,
        title: 'Lập hệ phương trình và giải tìm x, y',
        explanation: 'Thay tọa độ vào hệ tích vô hướng:\n- $\\vec{AH} \\cdot \\vec{BC} = (x-1) \\cdot 0 + (y-3) \\cdot 4 = 0 \\Rightarrow 4(y-3) = 0 \\Rightarrow y = 3$.\n- $\\vec{BH} \\cdot \\vec{AC} = (x-5) \\cdot 4 + (y-1) \\cdot 2 = 0$.\nThay $y = 3$ vào bất phương trình thứ hai:\n$4(x-5) + 2(3-1) = 0 \\Rightarrow 4x - 20 + 4 = 0 \\Rightarrow 4x - 16 = 0 \\Rightarrow x = 4$.\nVậy trực tâm có tọa độ $H(4; 3)$.',
        result: 'H(4; 3)'
      }
    ],
    finalAnswer: 'H(4;3)',
    commonMistakes: [
      'Giải nhầm hệ phương trình do tính toán các tích tọa độ sai số.',
      'Viết sai công thức vectơ trực tâm (nhầm thành $\\vec{AH} \\cdot \\vec{AB} = 0$ hoặc tương tự).'
    ],
    reviewSuggestions: [
      'Sử dụng tính chất vuông góc của đường cao trong tam giác để lập hai phương trình tích vô hướng bằng 0 luôn là cách tối ưu nhất để tìm tọa độ trực tâm.'
    ]
  },
  {
    id: 'math10-s62',
    questionId: 'math10-q62',
    recognition: 'Chứng minh tính vuông góc trong hình học bằng phương pháp tọa độ hóa.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập hệ trục tọa độ Oxy',
        explanation: 'Đặt hình chữ nhật vào hệ trục Oxy sao cho:\n- Gốc O trùng với đỉnh $D(0; 0)$.\n- Cạnh $DC$ nằm trên trục hoành Ox, suy ra $C(2; 0)$.\n- Cạnh $DA$ nằm trên trục tung Oy, suy ra $A(0; 2\\sqrt{2})$.\n- Đỉnh $B$ có tọa độ $B(2; 2\\sqrt{2})$.',
        result: 'D(0;0), C(2;0), B(2;2\\sqrt{2}), A(0;2\\sqrt{2})'
      },
      {
        order: 2,
        title: 'Xác định tọa độ điểm K và các vectơ AC, BK',
        explanation: 'Vì $K$ là trung điểm của cạnh $AD$ nên $K(0; \\sqrt{2})$.\nTọa độ các vectơ cần tính:\n- $\\vec{AC} = (x_C - x_A; y_C - y_A) = (2; -2\\sqrt{2})$.\n- $\\vec{BK} = (x_K - x_B; y_K - y_B) = (0-2; \\sqrt{2}-2\\sqrt{2}) = (-2; -\\sqrt{2})$.',
        result: 'AC = (2; -2\\sqrt{2}), BK = (-2; -\\sqrt{2})'
      },
      {
        order: 3,
        title: 'Tính tích vô hướng AC.BK',
        explanation: 'Tích vô hướng của hai vectơ là:\n$\\vec{AC} \\cdot \\vec{BK} = 2 \\cdot (-2) + (-2\\sqrt{2}) \\cdot (-\\sqrt{2}) = -4 + 4 = 0$.\nVì tích vô hướng bằng 0 nên hai đường thẳng $AC$ và $BK$ vuông góc với nhau.',
        result: 'Tích vô hướng bằng 0'
      }
    ],
    finalAnswer: '0',
    commonMistakes: [
      'Đặt sai tọa độ các đỉnh của hình chữ nhật (ví dụ cho tọa độ đỉnh B sai tỉ lệ).',
      'Tính sai tọa độ trung điểm K.'
    ],
    reviewSuggestions: [
      'Tọa độ hóa (hình học giải tích) là công cụ cực kỳ mạnh mẽ để giải quyết các bài toán chứng minh vuông góc hoặc tính góc trong các hình có góc vuông sẵn như hình vuông, hình chữ nhật.'
    ]
  },
  {
    id: 'math10-s63',
    questionId: 'math10-q63',
    recognition: 'Tìm tham số k từ điều kiện vuông góc của tổ hợp các vectơ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng a.b',
        explanation: 'Ta có tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ là:\n$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos 60^\\circ = 1 \\cdot 2 \\cdot 0.5 = 1$.',
        result: 'a.b = 1'
      },
      {
        order: 2,
        title: 'Lập phương trình từ điều kiện vuông góc',
        explanation: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc khi và chỉ khi:\n$\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow (\\vec{a} + 2\\vec{b}) \\cdot (k\\vec{a} - \\vec{b}) = 0$\n$\\Leftrightarrow k\\vec{a}^2 - \\vec{a}\\cdot\\vec{b} + 2k\\vec{a}\\cdot\\vec{b} - 2\\vec{b}^2 = 0$.',
        result: 'k*a^2 + (2k-1)*a.b - 2*b^2 = 0'
      },
      {
        order: 3,
        title: 'Thay số và giải tìm k',
        explanation: 'Vì $|\\vec{a}| = 1 \\Rightarrow \\vec{a}^2 = 1$; $|\\vec{b}| = 2 \\Rightarrow \\vec{b}^2 = 4$; $\\vec{a}\\cdot\\vec{b} = 1$.\nThay vào phương trình ta được:\n$k \\cdot 1 - 1 + 2k \\cdot 1 - 2 \\cdot 4 = 0$\n$\\Leftrightarrow 3k - 9 = 0 \\Rightarrow k = 3$.',
        result: 'k = 3'
      }
    ],
    finalAnswer: 'k = 3',
    commonMistakes: [
      'Quên bình phương độ dài khi nhân $\\vec{b} \\cdot \\vec{b}$ (nhầm thành $2$ thay vì $|\\vec{b}|^2 = 4$).',
      'Tính sai dấu trong tích đại số biểu thức vectơ.'
    ],
    reviewSuggestions: [
      'Nhớ quy tắc phân phối giống như nhân đa thức bình thường đối với phép nhân tích vô hướng các vectơ.'
    ]
  }
];
