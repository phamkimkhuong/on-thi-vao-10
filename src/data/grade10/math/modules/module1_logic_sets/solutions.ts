import type { Solution } from '@/types';

export const g10MathModule1Solutions: Solution[] = [
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
      finalAnswer: 'm < -1 hoặc 1 <= m <= 7',
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
      id: 'math10-s64',
      questionId: 'math10-q64',
      recognition: 'Dấu hiệu nhận biết: yêu cầu đếm phần tử không thuộc hai nhóm có phần giao; dùng nguyên lý bù và công thức cộng của hai tập hợp.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đếm từng tập và phần giao',
          explanation: 'Trong $U=\\{1;2;\\ldots;30\\}$ có 15 số chia hết cho 2 và 10 số chia hết cho 3. Các số vừa chia hết cho 2 vừa chia hết cho 3 là các bội của 6, có $\\lfloor 30/6\\rfloor=5$ số.',
          result: '|A|=15, |B|=10, |A \\cap B|=5'
        },
        {
          order: 2,
          title: 'Dùng nguyên lý bù',
          explanation: '$|A\\cup B|=|A|+|B|-|A\\cap B|=15+10-5=20$. Vì $|U|=30$ nên $|U\\setminus(A\\cup B)|=30-20=10$.',
          result: '10'
        }
      ],
      finalAnswer: '10',
      commonMistakes: ['Cộng $15+10$ mà không trừ 5 phần tử đã bị đếm hai lần.'],
      reviewSuggestions: ['Khi hai tập có thể giao nhau, luôn dùng $|A\\cup B|=|A|+|B|-|A\\cap B|$.']
    },
  {
      id: 'math10-s65',
      questionId: 'math10-q65',
      recognition: 'Dấu hiệu nhận biết: biểu thức có phép hợp rồi phép hiệu; phải thực hiện phép toán trong ngoặc trước và kiểm tra ngoặc tại từng mốc biên.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tìm hợp A và B',
          explanation: 'Hai khoảng $[-4;5]$ và $(-2;7)$ chồng lên nhau, nên hợp kéo dài từ $-4$ được lấy đến $7$ không được lấy.',
          result: 'A \\cup B=[-4;7)'
        },
        {
          order: 2,
          title: 'Loại đoạn C',
          explanation: 'Loại toàn bộ $[0;3]$ khỏi $[-4;7)$. Hai điểm 0 và 3 thuộc C nên không còn trong kết quả.',
          result: '[-4;0) \\cup (3;7)'
        }
      ],
      finalAnswer: '[-4; 0) \\cup (3; 7)',
      commonMistakes: ['Giữ lại 0 hoặc 3 dù hai điểm này thuộc tập bị trừ C.', 'Thực hiện phép hiệu trước phép hợp trong ngoặc.'],
      reviewSuggestions: ['Thực hiện phép toán tập hợp theo thứ tự dấu ngoặc, rồi xét riêng từng đầu mút.']
    },
  {
      id: 'math10-s66',
      questionId: 'math10-q66',
      recognition: 'Dấu hiệu nhận biết: hai đoạn giao khác rỗng; so sánh đầu trái lớn nhất với đầu phải nhỏ nhất.',
      detailedSteps: [
        {
          order: 1,
          title: 'Xác định điều kiện hai đoạn còn chạm nhau',
          explanation: 'Đoạn A kết thúc tại 1, còn đoạn B bắt đầu tại m. Hai đoạn có điểm chung khi đầu trái của B không vượt quá đầu phải của A.',
          result: 'm \\le 1'
        },
        {
          order: 2,
          title: 'Kiểm tra biên',
          explanation: 'Tại $m=1$, cả hai đoạn đều chứa điểm 1 nên giao vẫn khác rỗng; vì vậy phải lấy dấu bằng.',
          result: 'm \\le 1'
        }
      ],
      finalAnswer: 'm <= 1',
      commonMistakes: ['Viết $m<1$ vì quên cả hai đầu mút tại 1 đều là ngoặc vuông.'],
      reviewSuggestions: ['Sau khi so sánh đầu mút, thay trực tiếp giá trị biên để quyết định dấu bằng.']
    },
  {
      id: 'math10-s67',
      questionId: 'math10-q67',
      recognition: 'Dấu hiệu nhận biết: đoạn chứa tham số phải vừa tồn tại vừa nằm hoàn toàn trong một đoạn cố định.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đặt điều kiện A khác rỗng',
          explanation: 'Đoạn $[m;4]$ khác rỗng khi đầu trái không lớn hơn đầu phải.',
          result: 'm \\le 4'
        },
        {
          order: 2,
          title: 'Đặt điều kiện tập con',
          explanation: 'Để $[m;4]\\subset[1;6]$, đầu trái m không được nhỏ hơn 1. Đầu phải 4 đã nằm trong B.',
          result: 'm \\ge 1'
        },
        {
          order: 3,
          title: 'Kết hợp điều kiện',
          explanation: 'Kết hợp $m\\le4$ và $m\\ge1$.',
          result: '1 \\le m \\le 4'
        }
      ],
      finalAnswer: '1 <= m <= 4',
      commonMistakes: ['Chỉ xét tập con mà quên điều kiện để đoạn $[m;4]$ tồn tại.'],
      reviewSuggestions: ['Với khoảng hoặc đoạn có hai đầu phụ thuộc tham số, luôn kiểm tra điều kiện khác rỗng trước.']
    },
  {
      id: 'math10-s68',
      questionId: 'math10-q68',
      recognition: 'Dấu hiệu nhận biết: một khoảng di động phải nằm trong đoạn cố định rồi yêu cầu lấy giá trị nguyên lớn nhất.',
      detailedSteps: [
        {
          order: 1,
          title: 'So sánh hai đầu mút',
          explanation: 'Để $(m-1;m+1)\\subset[-3;2]$, cần $m-1\\ge-3$ và $m+1\\le2$. Dấu bằng được phép vì khoảng A không lấy hai đầu mút, còn B lại chứa chúng.',
          result: '-2 \\le m \\le 1'
        },
        {
          order: 2,
          title: 'Chọn số nguyên lớn nhất',
          explanation: 'Trong đoạn $[-2;1]$, số nguyên lớn nhất là 1.',
          result: 'm=1'
        }
      ],
      finalAnswer: '1',
      commonMistakes: ['Dùng bất đẳng thức nghiêm chỉ vì A có ngoặc tròn.'],
      reviewSuggestions: ['Ngoặc tròn của tập con vẫn có thể trùng biên với ngoặc vuông của tập chứa.']
    }
];
