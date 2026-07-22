import type { Solution } from '@/types';

export const g10MathModule3Solutions: Solution[] = [
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
      id: 'math10-s70',
      questionId: 'math10-q70',
      recognition: 'Dấu hiệu nhận biết: đề hỏi trục đối xứng của parabol $y=ax^2+bx+c$; dùng $x=-b/(2a)$.',
      detailedSteps: [
        {
          order: 1,
          title: 'Xác định hệ số',
          explanation: 'Với $y=2x^2-8x+3$, ta có $a=2$, $b=-8$.',
          result: 'a=2, b=-8'
        },
        {
          order: 2,
          title: 'Tính trục đối xứng',
          explanation: '$x=-\\dfrac{b}{2a}=-\\dfrac{-8}{2\\cdot2}=2$.',
          result: 'x=2'
        }
      ],
      finalAnswer: '2',
      commonMistakes: ['Quên dấu trừ trong công thức hoặc thay $b=8$ thay vì $b=-8$.'],
      reviewSuggestions: ['Đọc hệ số kèm theo dấu của nó trước khi thay vào công thức.']
    }
];
