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
    },
  {
    "id": "math10-m3-s001",
    "questionId": "math10-m3-q001",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dữ kiện có đỉnh nên dùng $y=a(x-1)^2-2$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay A: $-1=a-2$ nên a=1; khai triển được $y=x^2-2x-1$.",
        "result": "y=x^2-2x-1"
      }
    ],
    "finalAnswer": "D. $y=x^2-2x-1$",
    "commonMistakes": [
      "Đọc sai dấu tọa độ đỉnh trong biểu thức $(x-p)^2$."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s002",
    "questionId": "math10-m3-q002",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Biết hai nghiệm thì viết $y=a(x-1)(x-3)$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay x=0,y=3: $3=3a$ nên a=1; khai triển được kết quả.",
        "result": "y=x^2-4x+3"
      }
    ],
    "finalAnswer": "C. $y=x^2-4x+3$",
    "commonMistakes": [
      "Mặc định a=1 mà không dùng điểm thứ ba để kiểm tra."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s003",
    "questionId": "math10-m3-q003",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dùng $y=ax^2+bx+c$ và thay ba điểm để lập hệ."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Từ (0;1) có c=1; hai điểm còn lại cho a−b=5 và 2a+b=1, suy ra a=2,b=−3.",
        "result": "y=2x^2-3x+1"
      }
    ],
    "finalAnswer": "C. $y=2x^2-3x+1$",
    "commonMistakes": [
      "Thay tọa độ âm và tính sai dấu của bx."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s004",
    "questionId": "math10-m3-q004",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Từ c=5 và $-b/(2a)=2$ suy ra b=−4a."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay (1;2): $a+b+5=2$; kết hợp b=−4a cho a=1,b=−4.",
        "result": "y=x^2-4x+5"
      }
    ],
    "finalAnswer": "D. $y=x^2-4x+5$",
    "commonMistakes": [
      "Dùng công thức trục đối xứng thiếu dấu trừ."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s005",
    "questionId": "math10-m3-q005",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Viết ngay dạng đỉnh $y=a(x+2)^2+3$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay (0;−5): $-5=4a+3$, suy ra a=−2.",
        "result": "y=-2(x+2)^2+3"
      }
    ],
    "finalAnswer": "D. $y=-2(x+2)^2+3$",
    "commonMistakes": [
      "Nhầm đỉnh (−2;3) thành biểu thức $(x-2)^2$."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s006",
    "questionId": "math10-m3-q006",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Viết $y=a(x+1)(x-4)$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay x=0,y=8 được $8=-4a$, nên a=−2; khai triển được kết quả.",
        "result": "y=-2x^2+6x+8"
      }
    ],
    "finalAnswer": "C. $y=-2x^2+6x+8$",
    "commonMistakes": [
      "Khai triển sai tích $(x+1)(x-4)$."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s007",
    "questionId": "math10-m3-q007",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Thay ba điểm vào dạng tổng quát."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "c=−2, a+b=2, 3a+b=4; suy ra a=1,b=1.",
        "result": "y=x^2+x-2"
      }
    ],
    "finalAnswer": "C. $y=x^2+x-2$",
    "commonMistakes": [
      "Không rút gọn phương trình từ điểm (3;10) trước khi giải hệ."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s008",
    "questionId": "math10-m3-q008",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Có c=2 và $-b/(2a)=-1$, nên b=2a."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay (2;14): $4a+2b+2=14$; với b=2a suy ra a=3/2,b=3.",
        "result": "y=\\frac32x^2+3x+2"
      }
    ],
    "finalAnswer": "D. $y=\\frac32x^2+3x+2$",
    "commonMistakes": [
      "Xử lí sai dấu âm của trục $x=-1$."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s009",
    "questionId": "math10-m3-q009",
    "recognition": "Dạng xác định parabol: dữ kiện là đỉnh, trục, nghiệm hoặc các điểm thuộc đồ thị; chọn dạng phương trình giúp giảm số ẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dùng dạng đỉnh $y=a(x-2)^2+1$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Thay (0;9): $9=4a+1$, suy ra a=2.",
        "result": "y=2(x-2)^2+1"
      }
    ],
    "finalAnswer": "D. $y=2(x-2)^2+1$",
    "commonMistakes": [
      "Dùng tung độ giao Oy làm hệ số tự do ngay trong dạng đỉnh."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s010",
    "questionId": "math10-m3-q010",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tính $x_I=-b/(2a)$ rồi thay vào hàm."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=-3$, $y_I=9-18+5=-4$.",
        "result": "(-3;-4)"
      }
    ],
    "finalAnswer": "C. $(-3;-4)$",
    "commonMistakes": [
      "Quên dấu trừ trong công thức hoành độ đỉnh."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s011",
    "questionId": "math10-m3-q011",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Vì a>0, GTNN đạt tại đỉnh."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=2$ và $y(2)=8-16+1=-7$.",
        "result": "-7"
      }
    ],
    "finalAnswer": "C. $-7$",
    "commonMistakes": [
      "Trả lời hoành độ đỉnh 2 thay vì giá trị nhỏ nhất."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s012",
    "questionId": "math10-m3-q012",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Vì a<0, GTLN là tung độ đỉnh."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=-1$, $y(-1)=-1+2+3=4$.",
        "result": "4"
      }
    ],
    "finalAnswer": "D. $4$",
    "commonMistakes": [
      "Kết luận không có GTLN chỉ vì miền là R."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s013",
    "questionId": "math10-m3-q013",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "So sánh giá trị tại đỉnh x=2 và hai đầu mút."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$y(0)=1$, $y(2)=-3$, $y(4)=1$.",
        "result": "(1;-3)"
      }
    ],
    "finalAnswer": "D. $(1;-3)$",
    "commonMistakes": [
      "Chỉ xét đỉnh mà không tính hai đầu mút của đoạn."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s014",
    "questionId": "math10-m3-q014",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đỉnh x=1 nằm trong đoạn nên là một ứng viên cùng hai đầu mút."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$y(1)=5$, $y(-1)=-3$, $y(2)=3$.",
        "result": "(5;-3)"
      }
    ],
    "finalAnswer": "C. $(5;-3)$",
    "commonMistakes": [
      "Bỏ đầu mút −1 vì parabol quay xuống."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s015",
    "questionId": "math10-m3-q015",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dạng đỉnh cho thấy bình phương không âm và a>0."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Giá trị nhỏ nhất −4 đạt tại x=2; phía trên không bị chặn.",
        "result": "[-4;+\\infty)"
      }
    ],
    "finalAnswer": "C. $[-4;+\\infty)$",
    "commonMistakes": [
      "Dùng hoành độ đỉnh 2 làm cận của tập giá trị."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s016",
    "questionId": "math10-m3-q016",
    "recognition": "Dạng đỉnh và cực trị: dấu a quyết định hướng mở; trên đoạn kín phải so sánh đỉnh hợp lệ với cả hai đầu mút.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Hoàn thành bình phương hoặc tính tung độ đỉnh."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$y=(x-2)^2+m-4$, nên GTNN=m−4=3, suy ra m=7.",
        "result": "m=7"
      }
    ],
    "finalAnswer": "D. $m=7$",
    "commonMistakes": [
      "Cho GTNN bằng m mà quên phần −4."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s017",
    "questionId": "math10-m3-q017",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Hệ số bậc hai âm nên độ cao lớn nhất tại đỉnh."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$t_I=2$ giây và $h(2)=-20+40=20$ m.",
        "result": "20"
      }
    ],
    "finalAnswer": "D. $20$",
    "commonMistakes": [
      "Trả lời thời điểm 2 giây thay cho chiều cao."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s018",
    "questionId": "math10-m3-q018",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Gọi một cạnh x, cạnh kia 10−x; diện tích $S=x(10-x)$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$S=-x^2+10x$ đạt cực đại tại x=5, nên S=25.",
        "result": "25"
      }
    ],
    "finalAnswer": "C. $25$",
    "commonMistakes": [
      "Dùng 20−x cho cạnh còn lại dù nửa chu vi mới bằng 10."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s019",
    "questionId": "math10-m3-q019",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Parabol quay xuống nên lấy tung độ đỉnh."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=10$ và $R(10)=-200+400=200$.",
        "result": "200"
      }
    ],
    "finalAnswer": "C. $200$",
    "commonMistakes": [
      "Trả lời x=10 thay vì R=200."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s020",
    "questionId": "math10-m3-q020",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đỉnh của parabol là điểm cao nhất của vòm."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=3$ và $y(3)=-9+18=9$.",
        "result": "9"
      }
    ],
    "finalAnswer": "D. $9$",
    "commonMistakes": [
      "Lấy khoảng cách giữa hai nghiệm 6 làm chiều cao."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s021",
    "questionId": "math10-m3-q021",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tính thời điểm đỉnh rồi thay lại vào h."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$t_I=1.5$; $h(1.5)=-11.25+22.5+2=13.25$.",
        "result": "13.25"
      }
    ],
    "finalAnswer": "D. $13.25$",
    "commonMistakes": [
      "Quên cộng độ cao ban đầu 2 m."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s022",
    "questionId": "math10-m3-q022",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Nếu chiều rộng là x thì cạnh còn lại là 60−2x."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$S=x(60-2x)$ đạt cực đại tại x=15; cạnh dài 30 và S=450.",
        "result": "450"
      }
    ],
    "finalAnswer": "C. $450$",
    "commonMistakes": [
      "Lập chu vi bốn cạnh thay vì ba cạnh cần rào."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s023",
    "questionId": "math10-m3-q023",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Gọi x là số lần tăng; $R=(40+5x)(100-10x)$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$R=-50x^2+100x+4000$ đạt đỉnh tại x=1, nên giá là 45 nghìn.",
        "result": "45 nghìn đồng"
      }
    ],
    "finalAnswer": "C. 45 nghìn đồng",
    "commonMistakes": [
      "Trả lời x=1 thay vì chuyển về mức giá thực tế."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s024",
    "questionId": "math10-m3-q024",
    "recognition": "Dạng mô hình parabol: biến thực tế tạo hàm bậc hai; phải tối ưu trong miền có ý nghĩa và trả lời đúng đại lượng kèm đơn vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Xác định đỉnh của mô hình lợi nhuận và kiểm tra miền x≥0."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x_I=20$; $P(20)=-1200+2400-500=700$.",
        "result": "700"
      }
    ],
    "finalAnswer": "D. $700$",
    "commonMistakes": [
      "Bỏ hằng số chi phí −500 khi tính lợi nhuận."
    ],
    "reviewSuggestions": [
      "Ưu tiên dạng đỉnh khi đề cho đỉnh hoặc yêu cầu cực trị."
    ]
  },
  {
    "id": "math10-m3-s025",
    "questionId": "math10-m3-q025",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Giá trị hàm tại x=4 được tính bằng phép thay trực tiếp."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$f(4)=2\\cdot4-3=5$.",
        "result": "5"
      }
    ],
    "finalAnswer": "A. $5$",
    "commonMistakes": [
      "Nhân 2 với (4−3) thay vì thay vào đúng biểu thức."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s026",
    "questionId": "math10-m3-q026",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đặt −2 trong ngoặc trước khi bình phương."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$f(-2)=(-2)^2+1=5$.",
        "result": "5"
      }
    ],
    "finalAnswer": "C. $5$",
    "commonMistakes": [
      "Viết $(-2)^2=-4$."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s027",
    "questionId": "math10-m3-q027",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đa thức xác định với mọi số thực."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Biểu thức không có mẫu, căn hay điều kiện hạn chế.",
        "result": "\\mathbb R"
      }
    ],
    "finalAnswer": "C. $\\mathbb R$",
    "commonMistakes": [
      "Loại x=0 dù đa thức vẫn tính được tại 0."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s028",
    "questionId": "math10-m3-q028",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Mẫu số phải khác 0."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x-3\\ne0$ nên x≠3.",
        "result": "\\mathbb R\\setminus\\{3\\}"
      }
    ],
    "finalAnswer": "D. $\\mathbb R\\setminus\\{3\\}$",
    "commonMistakes": [
      "Giải $x-3\\ne0$ thành x≠−3."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s029",
    "questionId": "math10-m3-q029",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Biểu thức dưới căn bậc hai phải không âm."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x+2\\ge0$ nên x≥−2.",
        "result": "[-2;+\\infty)"
      }
    ],
    "finalAnswer": "A. $[-2;+\\infty)$",
    "commonMistakes": [
      "Dùng dấu > và loại điểm làm biểu thức dưới căn bằng 0."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s030",
    "questionId": "math10-m3-q030",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Giải điều kiện $5-x\\ge0$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Đổi vế được x≤5.",
        "result": "(-\\infty;5]"
      }
    ],
    "finalAnswer": "C. $(-\\infty;5]$",
    "commonMistakes": [
      "Không đổi chiều khi nhân bất phương trình với −1."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s031",
    "questionId": "math10-m3-q031",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Phân tích mẫu $(x-2)(x+2)$ và loại mọi nghiệm của mẫu."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Mẫu bằng 0 tại x=−2 và x=2.",
        "result": "\\mathbb R\\setminus\\{-2;2\\}"
      }
    ],
    "finalAnswer": "C. $\\mathbb R\\setminus\\{-2;2\\}$",
    "commonMistakes": [
      "Chỉ loại nghiệm dương của phương trình mẫu."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s032",
    "questionId": "math10-m3-q032",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Kết hợp điều kiện căn không âm và mẫu khác 0."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$x\\ge1/2$ đồng thời x≠3.",
        "result": "[\\frac12;3)\\cup(3;+\\infty)"
      }
    ],
    "finalAnswer": "D. $[\\frac12;3)\\cup(3;+\\infty)$",
    "commonMistakes": [
      "Thỏa điều kiện căn nhưng quên loại điểm làm mẫu bằng 0."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s033",
    "questionId": "math10-m3-q033",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Điều kiện căn thứ nhất cho $\\dfrac{x-1}{x+2}\\ge0$, suy ra $x\\in(-\\infty;-2)\\cup[1;+\\infty)$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Căn ở mẫu yêu cầu $5-x>0$, tức $x<5$. Giao hai điều kiện là $(-\\infty;-2)\\cup[1;5)$.","result":"$(-\\infty;-2)\\cup[1;5)$"}],
    "finalAnswer": "A. $(-\\infty;-2)\\cup[1;5)$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s034",
    "questionId": "math10-m3-q034",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"$f(-2)=-3$ nên $f(f(-2))=f(-3)=-5$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"$f(2)=3$ nên $f(f(2))=f(3)=8$. Tổng bằng $-5+8=3$.","result":"$3$"}],
    "finalAnswer": "C. $3$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s035",
    "questionId": "math10-m3-q035",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Giải bất phương trình phân thức ≥0 và loại nghiệm mẫu."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Bảng dấu với mốc −2,1 cho miền dương $(-∞,-2)\\cup[1,∞)$.",
        "result": "(-\\infty;-2)\\cup[1;+\\infty)"
      }
    ],
    "finalAnswer": "C. $(-\\infty;-2)\\cup[1;+\\infty)$",
    "commonMistakes": [
      "Nhân chéo khi chưa biết dấu của mẫu x+2."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s036",
    "questionId": "math10-m3-q036",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Căn ở mẫu yêu cầu $(x-1)(4-x)>0$, suy ra $1<x<4$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Điều kiện $\\sqrt{x+2}$ là $x\\ge-2$. Giao hai miền vẫn là $(1;4)$.","result":"$(1;4)$"}],
    "finalAnswer": "D. $(1;4)$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s037",
    "questionId": "math10-m3-q037",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tìm cột có đầu vào x=−1 rồi đọc đầu ra cùng cột."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Cột x=−1 tương ứng f(x)=1.",
        "result": "1"
      }
    ],
    "finalAnswer": "A. $1$",
    "commonMistakes": [
      "Đọc nhầm hàng x thay cho hàng f(x)."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s038",
    "questionId": "math10-m3-q038",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tìm trong hàng f(x) giá trị 0 rồi đọc x tương ứng."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Giá trị 0 chỉ xuất hiện tại cột x=0.",
        "result": "x=0"
      }
    ],
    "finalAnswer": "D. $x=0$",
    "commonMistakes": [
      "Tìm f(0) thay vì tìm đầu vào tạo ra đầu ra 0."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s039",
    "questionId": "math10-m3-q039",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tập xác định là hình chiếu của đồ thị lên trục Ox."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Hoành độ chạy từ −3 đến 5 và cả hai điểm đầu đều kín.",
        "result": "[-3;5]"
      }
    ],
    "finalAnswer": "C. $[-3;5]$",
    "commonMistakes": [
      "Lấy các tung độ 1 và 2 làm tập xác định."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s040",
    "questionId": "math10-m3-q040",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tập giá trị là hình chiếu của đồ thị lên trục Oy."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Mọi tung độ từ −2 đến 6 xuất hiện, hai biên đều được đạt.",
        "result": "[-2;6]"
      }
    ],
    "finalAnswer": "D. $[-2;6]$",
    "commonMistakes": [
      "Đọc theo trục Ox thay vì Oy."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s041",
    "questionId": "math10-m3-q041",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Nghiệm f(x)=0 chính là hoành độ giao điểm với Ox."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Hai giao điểm cho hai nghiệm −1 và 3.",
        "result": "x=-1\\text{ hoặc }x=3"
      }
    ],
    "finalAnswer": "A. $x=-1\\text{ hoặc }x=3$",
    "commonMistakes": [
      "Dùng tung độ giao điểm thay cho hoành độ."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s042",
    "questionId": "math10-m3-q042",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dấu dương tương ứng phần đồ thị có tung độ dương, nằm trên Ox."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Theo mô tả, hai khoảng dương đúng là $(-2,1)$ và $(4,6)$.",
        "result": "x\\in(-2;1)\\cup(4;6)"
      }
    ],
    "finalAnswer": "D. $x\\in(-2;1)\\cup(4;6)$",
    "commonMistakes": [
      "Lấy cả các giao điểm nơi f(x)=0 vào nghiệm dấu >."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s043",
    "questionId": "math10-m3-q043",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tăng rồi giảm nghĩa là giá trị chuyển từ đi lên sang đi xuống."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Hàm liên tục tại 2 và đổi chiều từ tăng sang giảm, nên x=2 là vị trí đạt cực đại.",
        "result": "Điểm đạt cực đại"
      }
    ],
    "finalAnswer": "C. $Điểm đạt cực đại$",
    "commonMistakes": [
      "Nhầm thứ tự tăng–giảm với giảm–tăng."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s044",
    "questionId": "math10-m3-q044",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Theo dõi chiều mũi tên và chọn mức thấp nhất đạt được."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Giá trị ở điểm chuyển từ giảm sang tăng là −1.",
        "result": "-1"
      }
    ],
    "finalAnswer": "D. $-1$",
    "commonMistakes": [
      "Chọn giá trị cuối bảng 3 thay vì giá trị thấp nhất."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s045",
    "questionId": "math10-m3-q045",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Đối xứng qua $Oy$ nghĩa là $f$ chẵn: $f(-x)=f(x)$. Do đó $f(-2)=f(2)=3$ và $f(1)=f(-1)=-4$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Suy ra $f(-2)+f(1)=3-4=-1$.","result":"$-1$"}],
    "finalAnswer": "A. $-1$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s046",
    "questionId": "math10-m3-q046",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Tích bằng 0 khi $f(x)=2$ hoặc $f(x)=-1$. Hai phương trình lần lượt có 3 và 2 nghiệm."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Hai mức tung độ khác nhau không thể có chung nghiệm, nên tổng cộng có $3+2=5$ nghiệm phân biệt.","result":"$5$"}],
    "finalAnswer": "D. $5$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s047",
    "questionId": "math10-m3-q047",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Tập xác định là $(-2;4]$; tập giá trị là $[-1;3)$ do đầu có tung độ 3 bị loại, đầu có tung độ -1 được lấy."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Giao hai tập là $[-1;3)$.","result":"$[-1;3)$"}],
    "finalAnswer": "C. $[-1;3)$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s048",
    "questionId": "math10-m3-q048",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Vì hệ số 2 dương, $g_{\\min}=2(-3)-5=-11$ và $g_{\\max}=2\\cdot7-5=9$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Tổng hai cực trị là $-11+9=-2$.","result":"$-2$"}],
    "finalAnswer": "D. $-2$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s049",
    "questionId": "math10-m3-q049",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đặt y=ax+b, dùng điểm có x=0 để tìm b."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "b=1; thay (2;5): $5=2a+1$ nên a=2.",
        "result": "y=2x+1"
      }
    ],
    "finalAnswer": "A. $y=2x+1$",
    "commonMistakes": [
      "Dùng tỉ số 5/2 làm hệ số góc mà bỏ tung độ ban đầu."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s050",
    "questionId": "math10-m3-q050",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Từ f(0) đọc b, sau đó dùng f(3) tìm a."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "b=−2; $3a-2=4$ nên a=2.",
        "result": "f(x)=2x-2"
      }
    ],
    "finalAnswer": "D. $f(x)=2x-2$",
    "commonMistakes": [
      "Đổi nhầm f(0) thành hệ số a."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s051",
    "questionId": "math10-m3-q051",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tỉ lệ thuận có dạng y=kx."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$k=12/4=3$.",
        "result": "y=3x"
      }
    ],
    "finalAnswer": "C. $y=3x$",
    "commonMistakes": [
      "Dùng công thức affine y=kx+b dù đề nói tỉ lệ thuận."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s052",
    "questionId": "math10-m3-q052",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tách chi phí cố định và chi phí biến đổi theo mỗi km."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Phí mở cửa là hằng số 12; x km đóng góp 8x.",
        "result": "C(x)=12+8x"
      }
    ],
    "finalAnswer": "D. $C(x)=12+8x$",
    "commonMistakes": [
      "Nhân cả phí mở cửa với quãng đường."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s053",
    "questionId": "math10-m3-q053",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Thay C=20 vào đúng mô hình đã cho."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$F=36+32=68$.",
        "result": "68"
      }
    ],
    "finalAnswer": "A. $68$",
    "commonMistakes": [
      "Quên cộng mốc lệch 32."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s054",
    "questionId": "math10-m3-q054",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dãy cấp số cộng có $u_n=u_1+(n-1)d$."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$u_n=5+3(n-1)=3n+2$.",
        "result": "u_n=3n+2"
      }
    ],
    "finalAnswer": "D. $u_n=3n+2$",
    "commonMistakes": [
      "Dùng 5+3n và làm số hạng đầu thành 8."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s055",
    "questionId": "math10-m3-q055",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Định nghĩa hàm yêu cầu mỗi đầu vào có duy nhất một đầu ra."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Một x cho hai y làm vi phạm tính duy nhất.",
        "result": "Một giá trị x có thể đi với hai giá trị y khác nhau"
      }
    ],
    "finalAnswer": "C. Một giá trị x có thể đi với hai giá trị y khác nhau",
    "commonMistakes": [
      "Cho rằng hai đầu vào cùng đầu ra cũng vi phạm định nghĩa."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s056",
    "questionId": "math10-m3-q056",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Dùng tỉ số thay đổi đầu ra trên thay đổi đầu vào."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$(16-7)/(5-2)=9/3=3$.",
        "result": "3"
      }
    ],
    "finalAnswer": "D. $3$",
    "commonMistakes": [
      "Lấy 16−7 mà không chia cho 5−2."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s057",
    "questionId": "math10-m3-q057",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Trong 5 năm đầu, $V(t)=500-40t$ và $V(5)=300$."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Sau đó $V(t)=300-20(t-5)=400-20t$, bảo đảm hai nhánh khớp tại $t=5$.","result":"$V(t)=\\begin{cases}500-40t&0\\le t\\le5\\\\400-20t&t>5\\end{cases}$"}],
    "finalAnswer": "A. $V(t)=\\begin{cases}500-40t&0\\le t\\le5\\\\400-20t&t>5\\end{cases}$",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s058",
    "questionId": "math10-m3-q058",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Sau 6 phút bể có $120+6\\cdot15=210$ lít."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Cần thêm 90 lít ở tốc độ 10 lít/phút, mất 9 phút. Tổng thời gian là 15 phút.","result":"$15$ phút"}],
    "finalAnswer": "D. $15$ phút",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s059",
    "questionId": "math10-m3-q059",
    "recognition": "Câu khó nhiều bước: phải kết hợp điều kiện miền, công thức và kiểm tra dấu hoặc đầu mút trước khi chọn đáp án.",
    "detailedSteps": [{"order":1,"title":"Thiết lập điều kiện và suy luận","explanation":"Chi phí 5 GB đầu là $50+3\\cdot20=110$ nghìn đồng."},{"order":2,"title":"Tính toán, giao điều kiện và kết luận","explanation":"Ba GB vượt mức 5 GB tốn $3\\cdot30=90$ nghìn đồng, tổng cộng 200 nghìn đồng.","result":"$200$ nghìn"}],
    "finalAnswer": "C. $200$ nghìn",
    "commonMistakes": ["Chỉ thực hiện một phép tính trực tiếp mà bỏ điều kiện miền, dấu, nhánh hàm hoặc bước giao kết quả."],
    "reviewSuggestions": ["Tách bài thành từng điều kiện, giữ kết quả trung gian chính xác rồi mới giao hoặc tổng hợp ở bước cuối."]
  },
  {
    "id": "math10-m3-s060",
    "questionId": "math10-m3-q060",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Tìm hệ số góc từ hai điểm rồi lập công thức."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$a=(-1-5)/(4+2)=-1$; y=−x+3 nên f(1)=2.",
        "result": "2"
      }
    ],
    "finalAnswer": "D. $2$",
    "commonMistakes": [
      "Tính mẫu số 4−(−2) thành 2."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    id: 'math10-m3-s061', questionId: 'math10-m3-q061',
    recognition: 'Dạng xét dấu từ hai nghiệm: phân tích nhân tử, sắp nghiệm rồi dùng quy tắc cùng dấu hệ số đầu ở ngoài.',
    detailedSteps: [{ order: 1, title: 'Tìm các mốc đổi dấu', explanation: '$f(x)=(x-2)(x-3)$ có hai nghiệm $2<3$ và hệ số đầu dương.' }, { order: 2, title: 'Chọn miền dương', explanation: 'Tam thức dương ở ngoài hai nghiệm, không lấy nghiệm vì đề dùng dấu $>$.', result: '$(-\\infty;2)\\cup(3;+\\infty)$' }],
    finalAnswer: 'C. $(-\\infty;2)\\cup(3;+\\infty)$', commonMistakes: ['Chọn khoảng giữa hai nghiệm hoặc lấy cả hai nghiệm.'], reviewSuggestions: ['Ôn quy tắc dấu khi $\\Delta>0$.']
  },
  {
    id: 'math10-m3-s062', questionId: 'math10-m3-q062',
    recognition: 'Dạng xét dấu với hệ số đầu âm: dấu trong/ngoài đảo so với tam thức có hệ số đầu dương.',
    detailedSteps: [{ order: 1, title: 'Tìm nghiệm và hệ số đầu', explanation: '$f(x)=-(x-1)(x-3)$ có hai nghiệm $1,3$ và $a=-1<0$.' }, { order: 2, title: 'Chọn miền dương', explanation: 'Tam thức trái dấu $a$ ở giữa hai nghiệm nên dương trên $(1;3)$.', result: '$(1;3)$' }],
    finalAnswer: 'D. $(1;3)$', commonMistakes: ['Máy móc chọn miền ngoài mà không xét dấu $a$.'], reviewSuggestions: ['Ôn câu nhớ “cùng dấu ngoài, trái dấu trong”.']
  },
  {
    id: 'math10-m3-s063', questionId: 'math10-m3-q063',
    recognition: 'Dạng tam thức vô nghiệm thực: tính $\\Delta$ rồi kết luận dấu theo hệ số đầu.',
    detailedSteps: [{ order: 1, title: 'Tính biệt thức', explanation: '$\\Delta=4^2-4\\cdot2\\cdot5=-24<0$.' }, { order: 2, title: 'Kết luận dấu', explanation: 'Không có nghiệm và $a=2>0$, vì vậy $f(x)>0$ với mọi số thực $x$.', result: '$f(x)>0,\\ \\forall x$' }],
    finalAnswer: 'A. $f(x)>0$ với mọi $x$', commonMistakes: ['Thấy $b^2>0$ rồi kết luận sai rằng có hai nghiệm.'], reviewSuggestions: ['Ôn trường hợp $\\Delta<0$.']
  },
  {
    id: 'math10-m3-s064', questionId: 'math10-m3-q064',
    recognition: 'Dạng tam thức không có nghiệm và hệ số đầu âm.',
    detailedSteps: [{ order: 1, title: 'Kiểm tra nghiệm', explanation: '$\\Delta=6^2-4(-3)(-4)=36-48=-12<0$.' }, { order: 2, title: 'Theo dấu hệ số đầu', explanation: 'Vì $a=-3<0$, tam thức luôn âm trên $\\mathbb R$.', result: '$f(x)<0,\\ \\forall x$' }],
    finalAnswer: 'D. Luôn âm', commonMistakes: ['Bỏ dấu âm trong tích $4ac$.'], reviewSuggestions: ['Ôn cách tính biệt thức khi hệ số âm.']
  },
  {
    id: 'math10-m3-s065', questionId: 'math10-m3-q065',
    recognition: 'Dạng nghiệm kép: viết thành bình phương để thấy dấu và điểm bằng 0.',
    detailedSteps: [{ order: 1, title: 'Hoàn thành bình phương', explanation: '$f(x)=(x-3)^2$.' }, { order: 2, title: 'Đọc dấu', explanation: 'Bình phương luôn không âm và chỉ bằng $0$ khi $x=3$; dấu không đổi qua nghiệm kép.', result: '$f(x)\\ge0$, $f(3)=0$' }],
    finalAnswer: 'C. $f(x)\\ge0$ với mọi $x$ và $f(3)=0$', commonMistakes: ['Đồng nhất “không âm” với “luôn dương”.'], reviewSuggestions: ['Ôn sự khác nhau giữa $>0$ và $\\ge0$.']
  },
  {
    id: 'math10-m3-s066', questionId: 'math10-m3-q066',
    recognition: 'Dạng một bình phương nhân hệ số âm.',
    detailedSteps: [{ order: 1, title: 'Xét phần bình phương', explanation: '$(2x+1)^2\\ge0$ và bằng $0$ tại $x=-\\tfrac12$.' }, { order: 2, title: 'Nhân với $-1$', explanation: 'Đổi chiều dấu: $f(x)\\le0$ với mọi $x$, bằng $0$ đúng tại $-\\tfrac12$.', result: '$f(x)\\le0$' }],
    finalAnswer: 'D. $f(x)\\le0$ với mọi $x$ và $f(-\\tfrac12)=0$', commonMistakes: ['Kết luận luôn âm và bỏ sót điểm bằng 0.'], reviewSuggestions: ['Ôn dấu của bình phương và nghiệm kép.']
  },
  {
    id: 'math10-m3-s067', questionId: 'math10-m3-q067',
    recognition: 'Dạng tích hai nhân tử bậc nhất có hệ số đầu dương.',
    detailedSteps: [{ order: 1, title: 'Xác định nghiệm', explanation: 'Hai nghiệm là $-2<5$; hệ số của $x^2$ bằng $1>0$.' }, { order: 2, title: 'Chọn khoảng trái dấu hệ số đầu', explanation: 'Tam thức âm ở giữa hai nghiệm.', result: '$(-2;5)$' }],
    finalAnswer: 'D. $(-2;5)$', commonMistakes: ['Đọc nghiệm $x+2=0$ thành $x=2$.'], reviewSuggestions: ['Ôn cách tìm nghiệm của nhân tử bậc nhất.']
  },
  {
    id: 'math10-m3-s068', questionId: 'math10-m3-q068',
    recognition: 'Dạng đã phân tích nhân tử nhưng có hệ số âm đứng ngoài.',
    detailedSteps: [{ order: 1, title: 'Xếp nghiệm', explanation: 'Hai nghiệm là $-4<1$ và hệ số đầu $-2<0$.' }, { order: 2, title: 'Xét miền dương', explanation: 'Giữa hai nghiệm, tam thức trái dấu $a$, tức mang dấu dương.', result: '$(-4;1)$' }],
    finalAnswer: 'A. $(-4;1)$', commonMistakes: ['Bỏ hệ số $-2$ khi lập bảng dấu.'], reviewSuggestions: ['Luôn ghi dấu hệ số đầu trước khi chọn khoảng.']
  },
  {
    id: 'math10-m3-s069', questionId: 'math10-m3-q069',
    recognition: 'Dạng suy ngược hệ số đầu từ vị trí điểm so với hai nghiệm.',
    detailedSteps: [{ order: 1, title: 'Định vị điểm', explanation: 'Do $x_1<0<x_2$, điểm $0$ nằm giữa hai nghiệm.' }, { order: 2, title: 'Dùng quy tắc dấu', explanation: 'Ở giữa, $f$ trái dấu $a$. Vì $f(0)>0$ nên $a<0$.', result: '$a<0$' }],
    finalAnswer: 'D. $a<0$', commonMistakes: ['Cho rằng dấu tại mọi điểm luôn cùng dấu $a$.'], reviewSuggestions: ['Ôn dấu trong khoảng giữa hai nghiệm.']
  },
  {
    id: 'math10-m3-s070', questionId: 'math10-m3-q070',
    recognition: 'Dạng dựng tam thức từ nghiệm và dấu ngoài.',
    detailedSteps: [{ order: 1, title: 'Dựng dạng nhân tử', explanation: 'Có nghiệm $-2,5$ nên $f(x)=a(x+2)(x-5)$.' }, { order: 2, title: 'Suy dấu hệ số', explanation: 'Ngoài hai nghiệm, dấu của $f$ là dấu $a$. Đề cho âm nên $a<0$; chọn $a=-1$.', result: '$-(x+2)(x-5)$' }],
    finalAnswer: 'B. $-(x+2)(x-5)$', commonMistakes: ['Viết sai nhân tử ứng với nghiệm âm.'], reviewSuggestions: ['Ôn dạng $a(x-x_1)(x-x_2)$.']
  },
  {
    id: 'math10-m3-s071', questionId: 'math10-m3-q071',
    recognition: 'Dạng chứa tham số nhưng đã phân tích được thành hai nhân tử có thứ tự nghiệm xác định.',
    detailedSteps: [{ order: 1, title: 'Phân tích và xếp nghiệm', explanation: '$f(x)=(x-1)(x-m)$. Do $m>1$, hai nghiệm theo thứ tự là $1<m$.' }, { order: 2, title: 'Chọn miền âm', explanation: 'Hệ số đầu dương nên tam thức âm giữa hai nghiệm.', result: '$(1;m)$' }],
    finalAnswer: 'B. $(1;m)$', commonMistakes: ['Không dùng điều kiện $m>1$ để sắp hai nghiệm.'], reviewSuggestions: ['Trong bài tham số, luôn khóa thứ tự các mốc.']
  },
  {
    id: 'math10-m3-s072', questionId: 'math10-m3-q072',
    recognition: 'Dạng hệ số nhân bình phương: xét dấu hệ số và nhớ điểm bình phương bằng 0.',
    detailedSteps: [{ order: 1, title: 'Xét từng thừa số', explanation: '$m<2$ nên $m-2<0$; $(x+1)^2\\ge0$.' }, { order: 2, title: 'Kết hợp dấu', explanation: 'Tích không dương và bằng $0$ khi $x=-1$, không đổi dấu tại điểm này.', result: '$f_m(x)\\le0$' }],
    finalAnswer: 'B. $f_m(x)\\le0$ với mọi $x$ và bằng $0$ tại $x=-1$', commonMistakes: ['Kết luận $<0$ với mọi $x$ và bỏ nghiệm kép.'], reviewSuggestions: ['Ôn nghiệm bội chẵn.']
  },
  {
    id: 'math10-m3-s073', questionId: 'math10-m3-q073',
    recognition: 'Dạng hỏi dấu tại một điểm: thay trực tiếp thường nhanh hơn lập cả bảng dấu.',
    detailedSteps: [{ order: 1, title: 'Thay giá trị', explanation: '$f(0)=0^2-0-6=-6$.' }, { order: 2, title: 'Kết luận dấu', explanation: '$-6<0$ nên $f(0)$ âm.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Tìm nghiệm dài dòng rồi chọn nhầm khoảng.'], reviewSuggestions: ['Ưu tiên thay trực tiếp khi chỉ hỏi một điểm.']
  },
  {
    id: 'math10-m3-s074', questionId: 'math10-m3-q074',
    recognition: 'Dạng giá trị tại điểm với hệ số âm; cần đặt ngoặc khi thay số âm.',
    detailedSteps: [{ order: 1, title: 'Thay đúng dấu', explanation: '$f(-1)=-2(-1)^2+5(-1)+3=-2-5+3=-4$.' }, { order: 2, title: 'Kết luận', explanation: '$-4<0$.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Tính $(-1)^2=-1$ hoặc quên $5(-1)=-5$.'], reviewSuggestions: ['Đặt giá trị âm trong ngoặc khi thay.']
  },
  {
    id: 'math10-m3-s075', questionId: 'math10-m3-q075',
    recognition: 'Dạng đọc dấu từ vị trí tương đối của điểm và hai nghiệm.',
    detailedSteps: [{ order: 1, title: 'Định vị $0$', explanation: '$-3<0<2$, nên $0$ ở giữa hai nghiệm.' }, { order: 2, title: 'Dùng dấu trong', explanation: 'Giữa hai nghiệm tam thức trái dấu hệ số đầu; $a>0$ nên giá trị âm.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Không đặt $0$ lên trục số.'], reviewSuggestions: ['Vẽ nhanh ba mốc trước khi kết luận.']
  },
  {
    id: 'math10-m3-s076', questionId: 'math10-m3-q076',
    recognition: 'Dạng đọc bảng dấu ngược để suy nghiệm và dấu hệ số đầu.',
    detailedSteps: [{ order: 1, title: 'Đọc các mốc', explanation: 'Dấu đổi tại $-1$ và $4$, nên đây là hai nghiệm đơn.' }, { order: 2, title: 'Đọc dấu ngoài', explanation: 'Bên ngoài dương nên hệ số đầu $a>0$; phương án C mô tả đủ cả hai dữ kiện.', result: 'Hai nghiệm $-1,4$, $a>0$' }],
    finalAnswer: 'C. Hai nghiệm là $-1,4$ và $a>0$', commonMistakes: ['Chỉ nhìn khoảng giữa và suy $a<0$.'], reviewSuggestions: ['Dấu ngoài cùng chính là dấu của $a$.']
  },
  {
    id: 'math10-m3-s077', questionId: 'math10-m3-q077',
    recognition: 'Dạng cần suy dấu hệ số từ một giá trị rồi mới xét khoảng.',
    detailedSteps: [{ order: 1, title: 'Tìm dấu $a$', explanation: '$f(0)=a(-2)(1)=-2a=4$, nên $a=-2<0$.' }, { order: 2, title: 'Xét bên phải hai nghiệm', explanation: 'Trên $(2;+\\infty)$ là miền ngoài, $f$ cùng dấu $a$, nên âm.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Cho $a=2$ do bỏ dấu của $-2$.'], reviewSuggestions: ['Tách bước suy hệ số và bước xét dấu.']
  },
  {
    id: 'math10-m3-s078', questionId: 'math10-m3-q078',
    recognition: 'Dạng đếm nghiệm nguyên sau khi tìm khoảng dấu.',
    detailedSteps: [{ order: 1, title: 'Giải điều kiện dấu', explanation: '$x^2-x-6=(x+2)(x-3)<0$ nên $-2<x<3$.' }, { order: 2, title: 'Liệt kê số nguyên', explanation: 'Các số nguyên là $-1,0,1,2$, đều thuộc đoạn đã cho.', result: '$4$' }],
    finalAnswer: 'B. $4$', commonMistakes: ['Lấy cả $-2$ và $3$ dù bất đẳng thức nghiêm ngặt.'], reviewSuggestions: ['Viết khoảng trước, rồi mới đếm số nguyên.']
  },
  {
    id: 'math10-m3-s079', questionId: 'math10-m3-q079',
    recognition: 'Dạng nghiệm kép và hệ số đầu âm.',
    detailedSteps: [{ order: 1, title: 'Viết cấu trúc', explanation: '$f(x)=a(x-2)^2$ với $a<0$.' }, { order: 2, title: 'Xét dấu', explanation: 'Khi $x\\ne2$, bình phương dương nên tích âm; tại $2$ bằng $0$.', result: '$f(x)<0$ khi $x\\ne2$' }],
    finalAnswer: 'B. $f(x)<0$ khi $x\\ne2$', commonMistakes: ['Cho rằng mọi nghiệm đều làm đổi dấu.'], reviewSuggestions: ['Ôn ảnh hưởng của nghiệm bội chẵn.']
  },
  {
    id: 'math10-m3-s080', questionId: 'math10-m3-q080',
    recognition: 'Dạng suy dấu hệ số từ giá trị nằm giữa hai nghiệm.',
    detailedSteps: [{ order: 1, title: 'Định vị điểm', explanation: '$1<2<4$, nên $x=2$ nằm giữa hai nghiệm.' }, { order: 2, title: 'Đối chiếu dấu', explanation: 'Giữa hai nghiệm, $f$ trái dấu $a$. Vì $f(2)=-6<0$, suy ra $a>0$.', result: '$a>0$' }],
    finalAnswer: 'A. Dương', commonMistakes: ['Kết luận $a<0$ vì $f(2)<0$.'], reviewSuggestions: ['Phân biệt dấu của hàm với dấu hệ số ở miền giữa.']
  },
  {
    id: 'math10-m3-s081', questionId: 'math10-m3-q081',
    recognition: 'Dạng tham số đã có thể phân tích nhân tử và biết thứ tự nghiệm.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$f(x)=2(x-1)(x-m)$. Hai nghiệm là $1<m$.' }, { order: 2, title: 'Xét khoảng cho sẵn', explanation: 'Trên $(1;m)$, hai nhân tử trái dấu; nhân với $2>0$ nên $f(x)<0$.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Không nhận ra $2m$ là tích hai nghiệm nhân hệ số.'], reviewSuggestions: ['Thử phân tích trước khi dùng công thức nghiệm.']
  },
  {
    id: 'math10-m3-s082', questionId: 'math10-m3-q082',
    recognition: 'Dạng đọc dấu ở hai điểm từ các khoảng đã cho rồi xét dấu thương.',
    detailedSteps: [{ order: 1, title: 'Đọc dấu từng giá trị', explanation: '$0\\in(-2;5)$ nên $f(0)<0$; $6>5$ nên $f(6)>0$.' }, { order: 2, title: 'Xét thương', explanation: 'Số âm chia số dương là số âm.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Nhìn hai giá trị đều khác 0 rồi kết luận thương dương.'], reviewSuggestions: ['Ghi riêng dấu tử và mẫu trước khi kết hợp.']
  },
  {
    id: 'math10-m3-s083', questionId: 'math10-m3-q083',
    recognition: 'Dạng suy dấu tại điểm nằm ngoài hai nghiệm dương.',
    detailedSteps: [{ order: 1, title: 'Định vị $0$', explanation: 'Hai nghiệm đều dương nên $0$ nằm bên trái cả hai, tức ở miền ngoài.' }, { order: 2, title: 'Dùng dấu ngoài', explanation: 'Miền ngoài cùng dấu $a$. Vì $a<0$, $f(0)=c<0$.', result: '$f(0)<0$' }],
    finalAnswer: 'B. $f(0)<0$', commonMistakes: ['Cho $0$ nằm giữa hai nghiệm chỉ vì $0$ là số đặc biệt.'], reviewSuggestions: ['Luôn đặt các mốc lên trục số.']
  },
  {
    id: 'math10-m3-s084', questionId: 'math10-m3-q084',
    recognition: 'Dạng so sánh dấu ở một điểm ngoài và một điểm giữa hai nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định hai miền', explanation: '$x_1-1<x_1$ nằm ngoài; $\\tfrac{x_1+x_2}{2}$ nằm giữa hai nghiệm.' }, { order: 2, title: 'Kết hợp dấu', explanation: 'Dấu ngoài là dấu $a$, dấu giữa trái dấu $a$, nên tích luôn âm.', result: 'Âm' }],
    finalAnswer: 'B. Âm', commonMistakes: ['Cho rằng cần biết dấu cụ thể của $a$.'], reviewSuggestions: ['Có thể suy quan hệ dấu mà không cần biết $a>0$ hay $a<0$.']
  },
  {
    id: 'math10-m3-s085', questionId: 'math10-m3-q085',
    recognition: 'Dạng tam thức luôn dương với hệ số đầu cố định dương: dùng điều kiện $\\Delta<0$.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện biệt thức', explanation: '$a=1>0$; cần $\\Delta=(-2m)^2-4(m+2)<0$.' }, { order: 2, title: 'Giải theo tham số', explanation: '$4(m^2-m-2)<0\\Leftrightarrow(m-2)(m+1)<0$.', result: '$-1<m<2$' }],
    finalAnswer: 'A. $-1<m<2$', commonMistakes: ['Dùng $\\Delta\\le0$ cho dấu $>0$.'], reviewSuggestions: ['Gắn dấu nghiêm ngặt với $\\Delta<0$.']
  },
  {
    id: 'math10-m3-s086', questionId: 'math10-m3-q086',
    recognition: 'Dạng tam thức không âm với hệ số đầu dương: cho phép nghiệm kép nên dùng $\\Delta\\le0$.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện', explanation: '$a=1>0$ và $\\Delta=4(m-2)(m+1)\\le0$.' }, { order: 2, title: 'Giải bất phương trình tham số', explanation: 'Tích không dương giữa hai nghiệm $-1,2$.', result: '$-1\\le m\\le2$' }],
    finalAnswer: 'B. $-1\\le m\\le2$', commonMistakes: ['Loại hai đầu mút dù đề dùng $\\ge0$.'], reviewSuggestions: ['Phân biệt luôn dương và không âm.']
  },
  {
    id: 'math10-m3-s087', questionId: 'math10-m3-q087',
    recognition: 'Dạng tam thức luôn âm: hệ số đầu âm và biệt thức âm.',
    detailedSteps: [{ order: 1, title: 'Kiểm tra hệ số đầu', explanation: '$a=-1<0$ đã thỏa điều kiện về hướng dấu.' }, { order: 2, title: 'Buộc không có nghiệm', explanation: '$\\Delta=(2m)^2-4(-1)(-m-2)=4(m-2)(m+1)<0$.', result: '$-1<m<2$' }],
    finalAnswer: 'A. $-1<m<2$', commonMistakes: ['Thấy dấu trừ trước $x^2$ rồi kết luận luôn âm.'], reviewSuggestions: ['Luôn kiểm tra thêm $\\Delta<0$.']
  },
  {
    id: 'math10-m3-s088', questionId: 'math10-m3-q088',
    recognition: 'Dạng hệ số đầu phụ thuộc tham số: phải đồng thời có $a>0$ và $\\Delta<0$.',
    detailedSteps: [{ order: 1, title: 'Điều kiện bậc hai và hướng dấu', explanation: 'Cần $m>0$.' }, { order: 2, title: 'Điều kiện biệt thức', explanation: '$\\Delta=4-4m<0\\Leftrightarrow m>1$, điều kiện này đã kéo theo $m>0$.', result: '$m>1$' }],
    finalAnswer: 'B. $m>1$', commonMistakes: ['Chỉ lấy $m>0$ mà không xét nghiệm của tam thức.'], reviewSuggestions: ['Bài “mọi x” luôn kiểm tra cả dấu $a$ và $\\Delta$.']
  },
  {
    id: 'math10-m3-s089', questionId: 'math10-m3-q089',
    recognition: 'Dạng tham số có trường hợp suy biến; không được bỏ $m=1$ khi hệ số $x^2$ bằng 0.',
    detailedSteps: [{ order: 1, title: 'Xét $m=1$', explanation: 'Biểu thức trở thành hằng số $3\\ge0$, nên $m=1$ nhận.' }, { order: 2, title: 'Xét $m\\ne1$', explanation: 'Muốn không âm mọi $x$: $m-1>0$ và $\\Delta=-12(m-1)\\le0$, suy ra $m>1$. Gộp hai trường hợp.', result: '$m\\ge1$' }],
    finalAnswer: 'B. $m\\ge1$', commonMistakes: ['Áp dụng định lí tam thức rồi loại luôn $m=1$.'], reviewSuggestions: ['Tách $a=0$ trước mọi bài tham số.']
  },
  {
    id: 'math10-m3-s090', questionId: 'math10-m3-q090',
    recognition: 'Dạng hỏi tam thức hệ số đầu dương luôn không dương—có thể loại ngay bằng hành vi khi $|x|$ lớn.',
    detailedSteps: [{ order: 1, title: 'Xét hệ số đầu', explanation: 'Hệ số $x^2$ luôn là $1>0$.' }, { order: 2, title: 'Suy hành vi', explanation: 'Khi $|x|$ đủ lớn, $x^2+(m-2)x+1\\to+\\infty$, nên không thể $\\le0$ với mọi $x$.', result: 'Không có giá trị $m$' }],
    finalAnswer: 'A. $0$', commonMistakes: ['Chỉ ép $\\Delta\\le0$ mà quên dấu $a$ phải âm cho yêu cầu luôn không dương.'], reviewSuggestions: ['Kiểm tra dấu hệ số đầu trước khi tính dài.']
  },
  {
    id: 'math10-m3-s091', questionId: 'math10-m3-q091',
    recognition: 'Dạng tam thức không âm với cả hệ số đầu và biệt thức phụ thuộc tham số.',
    detailedSteps: [{ order: 1, title: 'Điều kiện hệ số đầu', explanation: 'Cần $m>0$; $m=0$ cho biểu thức $2x$ không không âm với mọi $x$.' }, { order: 2, title: 'Điều kiện biệt thức', explanation: '$\\Delta=4-4m^2\\le0\\Leftrightarrow |m|\\ge1$. Giao với $m>0$.', result: '$m\\ge1$' }],
    finalAnswer: 'B. $m\\ge1$', commonMistakes: ['Chọn $|m|\\ge1$ mà không giao điều kiện $a>0$.'], reviewSuggestions: ['Viết các điều kiện rồi lấy giao.']
  },
  {
    id: 'math10-m3-s092', questionId: 'math10-m3-q092',
    recognition: 'Dạng chứng minh không tồn tại tham số bằng sự mâu thuẫn giữa dấu hệ số đầu và biệt thức.',
    detailedSteps: [{ order: 1, title: 'Điều kiện hệ số đầu', explanation: 'Muốn luôn âm cần $m+1<0$, tức $m<-1$.' }, { order: 2, title: 'Kiểm tra biệt thức', explanation: '$\\Delta=4(m-1)^2-4(m+1)^2=-16m$. Với $m<-1$, $\\Delta>0$, trái yêu cầu $\\Delta<0$.', result: 'Không tồn tại $m$' }],
    finalAnswer: 'D. Không tồn tại $m$', commonMistakes: ['Giải riêng $a<0$ rồi dừng.'], reviewSuggestions: ['Điều kiện luôn âm gồm hai điều kiện đồng thời.']
  },
  {
    id: 'math10-m3-s093', questionId: 'math10-m3-q093',
    recognition: 'Dạng hoàn thành bình phương giúp đọc trực tiếp giá trị nhỏ nhất.',
    detailedSteps: [{ order: 1, title: 'Đưa về dạng đỉnh', explanation: '$f(x)=[x-(m+1)]^2+2m+2$.' }, { order: 2, title: 'Ép giá trị nhỏ nhất không âm', explanation: 'Bình phương nhỏ nhất bằng $0$, nên cần $2m+2\\ge0$.', result: '$m\\ge-1$' }],
    finalAnswer: 'B. $m\\ge-1$', commonMistakes: ['Dùng $2m+2>0$ dù đề cho $\\ge0$.'], reviewSuggestions: ['Khai thác dạng bình phương khi biểu thức thuận lợi.']
  },
  {
    id: 'math10-m3-s094', questionId: 'math10-m3-q094',
    recognition: 'Dạng kiểm tra một tam thức tham số luôn dương với mọi giá trị của tham số.',
    detailedSteps: [{ order: 1, title: 'Dấu hệ số đầu', explanation: '$m^2+1>0$ với mọi $m$.' }, { order: 2, title: 'Biệt thức', explanation: '$\\Delta=(-2m)^2-4(m^2+1)=-4<0$ với mọi $m$.', result: 'Mọi $m\\in\\mathbb R$' }],
    finalAnswer: 'C. Mọi $m\\in\\mathbb R$', commonMistakes: ['Cho rằng $m^2+1$ có thể bằng 0.'], reviewSuggestions: ['Nhớ $m^2+1$ luôn dương trên số thực.']
  },
  {
    id: 'math10-m3-s095', questionId: 'math10-m3-q095',
    recognition: 'Dạng tam thức chứa tham số có thể viết thành hiệu hai bình phương.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$x^2-2mx+m^2-1=(x-m)^2-1=(x-m-1)(x-m+1)$.' }, { order: 2, title: 'Chọn khoảng âm', explanation: 'Hệ số đầu dương, hai nghiệm $m-1<m+1$, nên âm ở giữa.', result: '$(m-1;m+1)$' }],
    finalAnswer: 'A. $(m-1;m+1)$', commonMistakes: ['Sắp ngược hai nghiệm theo $m$.'], reviewSuggestions: ['Hai mốc $m-1,m+1$ luôn có thứ tự cố định.']
  },
  {
    id: 'math10-m3-s096', questionId: 'math10-m3-q096',
    recognition: 'Dạng luôn dương giải nhanh bằng hoàn thành bình phương.',
    detailedSteps: [{ order: 1, title: 'Biến đổi', explanation: '$f(x)=[x-(m-1)]^2+4-2m$.' }, { order: 2, title: 'Ép giá trị nhỏ nhất dương', explanation: 'GTNN là $4-2m$; cần $4-2m>0$.', result: '$m<2$' }],
    finalAnswer: 'A. $m<2$', commonMistakes: ['Lấy $m\\le2$ và quên tại $m=2$ biểu thức có thể bằng 0.'], reviewSuggestions: ['Với “luôn dương”, GTNN phải lớn hơn 0.']
  },
  {
    id: 'math10-m3-s097', questionId: 'math10-m3-q097',
    recognition: 'Dạng bất phương trình bậc hai cơ bản, dấu $>0$: tìm nghiệm rồi lấy miền dương không gồm đầu mút.',
    detailedSteps: [{ order: 1, title: 'Phân tích tam thức', explanation: '$x^2-5x+6=(x-2)(x-3)$, hai nghiệm $2<3$, hệ số đầu dương.' }, { order: 2, title: 'Chọn tập nghiệm', explanation: 'Miền dương nằm ngoài hai nghiệm; dấu nghiêm ngặt nên loại $2,3$.', result: '$(-\\infty;2)\\cup(3;+\\infty)$' }],
    finalAnswer: 'C. $(-\\infty;2)\\cup(3;+\\infty)$', commonMistakes: ['Lấy cả $2,3$ hoặc chọn miền giữa.'], reviewSuggestions: ['Ôn mẫu nghiệm của $f(x)>0$ khi $a>0$.']
  },
  {
    id: 'math10-m3-s098', questionId: 'math10-m3-q098',
    recognition: 'Dạng bất phương trình bậc hai $\\le0$ với hệ số đầu dương.',
    detailedSteps: [{ order: 1, title: 'Tìm nghiệm', explanation: 'Tam thức bằng $(x-2)(x-3)$, có nghiệm $2,3$.' }, { order: 2, title: 'Chọn miền không dương', explanation: 'Hệ số đầu dương nên không dương giữa hai nghiệm và lấy hai nghiệm vì có dấu bằng.', result: '$[2;3]$' }],
    finalAnswer: 'B. $[2;3]$', commonMistakes: ['Dùng ngoặc tròn dù bất phương trình có dấu bằng.'], reviewSuggestions: ['Kiểm tra ký hiệu $<$ hay $\\le$ trước khi viết đáp án.']
  },
  {
    id: 'math10-m3-s099', questionId: 'math10-m3-q099',
    recognition: 'Dạng hệ số đầu âm, yêu cầu $\\ge0$: miền nghiệm nằm giữa hai nghiệm.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$-x^2+4x-3=-(x-1)(x-3)$.' }, { order: 2, title: 'Chọn miền', explanation: 'Tam thức không âm trên đoạn giữa hai nghiệm, gồm cả hai đầu mút.', result: '$[1;3]$' }],
    finalAnswer: 'A. $[1;3]$', commonMistakes: ['Chọn miền ngoài theo thói quen với $a>0$.'], reviewSuggestions: ['Ghi dấu $a$ trước khi chọn trong hay ngoài.']
  },
  {
    id: 'math10-m3-s100', questionId: 'math10-m3-q100',
    recognition: 'Dạng tam thức luôn dương nhưng bất phương trình yêu cầu âm.',
    detailedSteps: [{ order: 1, title: 'Xét dấu tam thức', explanation: '$\\Delta=4^2-4\\cdot2\\cdot5=-24<0$ và $a=2>0$, nên biểu thức luôn dương.' }, { order: 2, title: 'Đối chiếu yêu cầu', explanation: 'Không có $x$ nào làm biểu thức nhỏ hơn $0$.', result: '$\\varnothing$' }],
    finalAnswer: 'B. $\\varnothing$', commonMistakes: ['Cố tìm khoảng quanh $-1$ dù phương trình không có nghiệm.'], reviewSuggestions: ['Khi $\\Delta<0$, có thể kết luận ngay toàn bộ tập nghiệm.']
  },
  {
    id: 'math10-m3-s101', questionId: 'math10-m3-q101',
    recognition: 'Dạng tam thức luôn âm và bất phương trình yêu cầu không dương.',
    detailedSteps: [{ order: 1, title: 'Xét biệt thức', explanation: '$\\Delta=36-48=-12<0$ và $a=-3<0$, nên biểu thức luôn âm.' }, { order: 2, title: 'Kết luận tập nghiệm', explanation: 'Mọi số thực đều thỏa dấu $\\le0$.', result: '$\\mathbb R$' }],
    finalAnswer: 'B. $\\mathbb R$', commonMistakes: ['Cho rằng $\\Delta<0$ luôn dẫn tới vô nghiệm bất phương trình.'], reviewSuggestions: ['$\\Delta<0$ chỉ nói không có nghiệm phương trình; dấu còn phụ thuộc $a$.']
  },
  {
    id: 'math10-m3-s102', questionId: 'math10-m3-q102',
    recognition: 'Dạng bình phương lớn hơn 0: loại đúng điểm làm bình phương bằng 0.',
    detailedSteps: [{ order: 1, title: 'Dùng tính không âm', explanation: '$(x-2)^2\\ge0$ với mọi $x$.' }, { order: 2, title: 'Xử lí dấu nghiêm ngặt', explanation: 'Biểu thức bằng $0$ đúng khi $x=2$, nên mọi số thực khác $2$ đều thỏa.', result: '$\\mathbb R\\setminus\\{2\\}$' }],
    finalAnswer: 'C. $\\mathbb R\\setminus\\{2\\}$', commonMistakes: ['Kết luận $\\mathbb R$ vì bình phương không âm.'], reviewSuggestions: ['Phân biệt “không âm” với “dương”.']
  },
  {
    id: 'math10-m3-s103', questionId: 'math10-m3-q103',
    recognition: 'Dạng bình phương không dương: chỉ có thể bằng 0.',
    detailedSteps: [{ order: 1, title: 'Nhận xét dấu', explanation: '$(2x+1)^2\\ge0$, nên điều kiện $\\le0$ tương đương bằng $0$.' }, { order: 2, title: 'Giải phương trình', explanation: '$2x+1=0\\Rightarrow x=-\\tfrac12$.', result: '$\\{-\\tfrac12\\}$' }],
    finalAnswer: 'B. $\\{-\\tfrac12\\}$', commonMistakes: ['Kết luận vô nghiệm vì tưởng bình phương luôn dương.'], reviewSuggestions: ['Bình phương có thể bằng 0.']
  },
  {
    id: 'math10-m3-s104', questionId: 'math10-m3-q104',
    recognition: 'Dạng hiệu hai bình phương, hệ số đầu dương và yêu cầu âm.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$x^2-9=(x-3)(x+3)$ có hai nghiệm $-3,3$.' }, { order: 2, title: 'Chọn khoảng âm', explanation: 'Tam thức âm giữa hai nghiệm, dấu $<0$ nên không lấy đầu mút.', result: '$(-3;3)$' }],
    finalAnswer: 'A. $(-3;3)$', commonMistakes: ['Lấy $[-3;3]$.'], reviewSuggestions: ['Dấu nghiêm ngặt dùng ngoặc tròn.']
  },
  {
    id: 'math10-m3-s105', questionId: 'math10-m3-q105',
    recognition: 'Dạng bất phương trình hệ số đầu âm; có thể đặt nhân tử âm ra ngoài.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$-2x^2+8x-6=-2(x-1)(x-3)$.' }, { order: 2, title: 'Xét dấu', explanation: 'Hệ số đầu âm nên biểu thức dương giữa hai nghiệm; không lấy đầu mút.', result: '$(1;3)$' }],
    finalAnswer: 'A. $(1;3)$', commonMistakes: ['Chia cho $-2$ nhưng không đổi chiều bất phương trình.'], reviewSuggestions: ['Xét dấu trực tiếp giúp tránh lỗi đổi chiều.']
  },
  {
    id: 'math10-m3-s106', questionId: 'math10-m3-q106',
    recognition: 'Dạng nghiệm phân số: tìm chính xác nghiệm rồi chọn miền ngoài vì hệ số đầu dương.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$3x^2+x-2=(3x-2)(x+1)$, nghiệm $-1$ và $\\tfrac23$.' }, { order: 2, title: 'Chọn miền không âm', explanation: 'Lấy hai miền ngoài và gồm hai nghiệm.', result: '$(-\\infty;-1]\\cup[\\tfrac23;+\\infty)$' }],
    finalAnswer: 'C. $(-\\infty;-1]\\cup[\\tfrac23;+\\infty)$', commonMistakes: ['Giải $3x-2=0$ thành $x=2$.'], reviewSuggestions: ['Kiểm tra nghiệm của từng nhân tử.']
  },
  {
    id: 'math10-m3-s107', questionId: 'math10-m3-q107',
    recognition: 'Dạng bình phương không dương với nghiệm kép.',
    detailedSteps: [{ order: 1, title: 'Nhận dạng hằng đẳng thức', explanation: '$4x^2-4x+1=(2x-1)^2$.' }, { order: 2, title: 'Buộc bằng 0', explanation: 'Bình phương $\\le0$ chỉ khi bằng $0$, nên $2x-1=0$.', result: '$\\{\\tfrac12\\}$' }],
    finalAnswer: 'B. $\\{\\tfrac12\\}$', commonMistakes: ['Cho nghiệm là một khoảng quanh $\\tfrac12$.'], reviewSuggestions: ['Nghiệm kép không tạo khoảng âm.']
  },
  {
    id: 'math10-m3-s108', questionId: 'math10-m3-q108',
    recognition: 'Dạng tam thức hệ số đầu dương, yêu cầu không âm.',
    detailedSteps: [{ order: 1, title: 'Tìm hai nghiệm', explanation: '$x^2+2x-8=(x+4)(x-2)$, nghiệm $-4<2$.' }, { order: 2, title: 'Chọn miền ngoài', explanation: 'Không âm ở ngoài và lấy cả hai nghiệm.', result: '$(-\\infty;-4]\\cup[2;+\\infty)$' }],
    finalAnswer: 'C. $(-\\infty;-4]\\cup[2;+\\infty)$', commonMistakes: ['Chọn đoạn $[-4;2]$.'], reviewSuggestions: ['Với $a>0$, dấu dương nằm ngoài hai nghiệm.']
  },
  {
    id: 'math10-m3-s109', questionId: 'math10-m3-q109',
    recognition: 'Dạng bất phương trình tích hai nhân tử, yêu cầu không dương.',
    detailedSteps: [{ order: 1, title: 'Xác định các mốc', explanation: 'Tích bằng $0$ tại $x=-3,1$; hệ số đầu dương.' }, { order: 2, title: 'Chọn miền', explanation: 'Tích không dương giữa hai mốc và lấy cả hai đầu mút.', result: '$[-3;1]$' }],
    finalAnswer: 'A. $[-3;1]$', commonMistakes: ['Đọc $x+3=0$ thành $x=3$.'], reviewSuggestions: ['Sắp mốc trước khi điền dấu.']
  },
  {
    id: 'math10-m3-s110', questionId: 'math10-m3-q110',
    recognition: 'Dạng bất phương trình thương có ba mốc: nghiệm tử có thể đổi dấu, nghiệm mẫu luôn bị loại.',
    detailedSteps: [{ order: 1, title: 'Lập các mốc', explanation: 'Tử bằng $0$ tại $-1,2$; mẫu bằng $0$ tại $3$, nên điều kiện $x\\ne3$.' }, { order: 2, title: 'Lập bảng dấu', explanation: 'Dấu lần lượt trên bốn khoảng là $-,+,-,+$. Chọn dấu $>0$ và không lấy mốc.', result: '$(-1;2)\\cup(3;+\\infty)$' }],
    finalAnswer: 'A. $(-1;2)\\cup(3;+\\infty)$', commonMistakes: ['Lấy $x=3$ hoặc lấy nghiệm tử khi dấu nghiêm ngặt.'], reviewSuggestions: ['Đánh dấu nghiệm mẫu bằng vạch loại.']
  },
  {
    id: 'math10-m3-s111', questionId: 'math10-m3-q111',
    recognition: 'Dạng phân thức bậc nhất trên bậc nhất.',
    detailedSteps: [{ order: 1, title: 'Xác định mốc', explanation: 'Tử bằng $0$ tại $-2$; mẫu bằng $0$ tại $1$ và phải loại.' }, { order: 2, title: 'Xét dấu', explanation: 'Phân thức không âm trên $(-\\infty;-2]$ và $(1;+\\infty)$.', result: '$(-\\infty;-2]\\cup(1;+\\infty)$' }],
    finalAnswer: 'B. $(-\\infty;-2]\\cup(1;+\\infty)$', commonMistakes: ['Dùng ngoặc vuông tại $x=1$.'], reviewSuggestions: ['Nghiệm mẫu không bao giờ được nhận.']
  },
  {
    id: 'math10-m3-s112', questionId: 'math10-m3-q112',
    recognition: 'Dạng thương có tử là hiệu hai bình phương; cần lập bảng theo ba mốc.',
    detailedSteps: [{ order: 1, title: 'Phân tích và điều kiện', explanation: '$\\dfrac{(x-2)(x+2)}{x+1}$, các mốc $-2,-1,2$; loại $-1$.' }, { order: 2, title: 'Chọn khoảng âm', explanation: 'Dấu âm trên $(-\\infty;-2)$ và $(-1;2)$; dấu nghiêm ngặt loại các nghiệm tử.', result: '$(-\\infty;-2)\\cup(-1;2)$' }],
    finalAnswer: 'A. $(-\\infty;-2)\\cup(-1;2)$', commonMistakes: ['Sắp sai thứ tự $-2,-1,2$.'], reviewSuggestions: ['Viết tất cả mốc lên một trục số.']
  },
  {
    id: 'math10-m3-s113', questionId: 'math10-m3-q113',
    recognition: 'Dạng tích có nhân tử bình phương: nghiệm bội chẵn không làm đổi dấu.',
    detailedSteps: [{ order: 1, title: 'Xét cấu trúc dấu', explanation: '$(x-1)^2>0$ khi $x\\ne1$ và bằng $0$ tại $1$; dấu chủ yếu theo $x+2$.' }, { order: 2, title: 'Áp dụng dấu $>0$', explanation: 'Cần $x>-2$, đồng thời loại $x=1$ và $x=-2$.', result: '$(-2;1)\\cup(1;+\\infty)$' }],
    finalAnswer: 'B. $(-2;1)\\cup(1;+\\infty)$', commonMistakes: ['Cho dấu đổi tại nghiệm kép $x=1$.'], reviewSuggestions: ['Nhân tử mũ chẵn giữ nguyên dấu qua nghiệm.']
  },
  {
    id: 'math10-m3-s114', questionId: 'math10-m3-q114',
    recognition: 'Dạng thương hai hiệu bình phương, có bốn mốc và hai điểm loại.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$\\dfrac{(x-1)(x+1)}{(x-2)(x+2)}$; loại $x=\\pm2$, nghiệm tử $x=\\pm1$.' }, { order: 2, title: 'Bảng dấu', explanation: 'Phân thức không dương trên $(-2;-1]$ và $[1;2)$; lấy nghiệm tử, loại nghiệm mẫu.', result: '$(-2;-1]\\cup[1;2)$' }],
    finalAnswer: 'B. $(-2;-1]\\cup[1;2)$', commonMistakes: ['Đóng ngoặc tại $\\pm2$.'], reviewSuggestions: ['Phân biệt mốc tử và mốc mẫu trước khi chọn ngoặc.']
  },
  {
    id: 'math10-m3-s115', questionId: 'math10-m3-q115',
    recognition: 'Dạng nghịch đảo: vì tử $1>0$, dấu của phân thức chính là dấu mẫu.',
    detailedSteps: [{ order: 1, title: 'Xét mẫu', explanation: '$x^2-5x+6=(x-2)(x-3)>0$ ở ngoài hai nghiệm.' }, { order: 2, title: 'Giữ điều kiện xác định', explanation: 'Mẫu không được bằng $0$, nên hai mốc đều dùng ngoặc tròn.', result: '$(-\\infty;2)\\cup(3;+\\infty)$' }],
    finalAnswer: 'B. $(-\\infty;2)\\cup(3;+\\infty)$', commonMistakes: ['Cho phân thức bằng 0 tại nghiệm của mẫu.'], reviewSuggestions: ['Phân thức có tử $1$ không bao giờ bằng 0.']
  },
  {
    id: 'math10-m3-s116', questionId: 'math10-m3-q116',
    recognition: 'Dạng có nhân tử chung ở tử và mẫu: được rút gọn để xét dấu nhưng phải giữ miền xác định ban đầu.',
    detailedSteps: [{ order: 1, title: 'Phân tích và rút gọn có điều kiện', explanation: '$\\dfrac{(x-1)(x-3)}{(x-1)(x+1)}=\\dfrac{x-3}{x+1}$ với $x\\ne-1,1$.' }, { order: 2, title: 'Giải phân thức rút gọn', explanation: '$\\dfrac{x-3}{x+1}\\ge0$ trên $(-\\infty;-1)\\cup[3;+\\infty)$. Điểm $1$ không nằm trong tập này.', result: '$(-\\infty;-1)\\cup[3;+\\infty)$' }],
    finalAnswer: 'A. $(-\\infty;-1)\\cup[3;+\\infty)$', commonMistakes: ['Cho $x=-1$ hoặc quên điều kiện $x=1$ của biểu thức gốc.'], reviewSuggestions: ['Ghi điều kiện trước khi rút gọn.']
  },
  {
    id: 'math10-m3-s117', questionId: 'math10-m3-q117',
    recognition: 'Dạng rút gọn nhân tử chung với dấu nghiêm ngặt.',
    detailedSteps: [{ order: 1, title: 'Rút gọn có điều kiện', explanation: '$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ nhưng điều kiện gốc là $x\\ne2$.' }, { order: 2, title: 'Giải bất phương trình', explanation: '$x+2<0\\Leftrightarrow x<-2$; miền này tự động không chứa $2$.', result: '$x<-2$' }],
    finalAnswer: 'A. $x<-2$', commonMistakes: ['Giải $x+2<0$ thành $x<2$.'], reviewSuggestions: ['Rút gọn xong vẫn đối chiếu điều kiện gốc.']
  },
  {
    id: 'math10-m3-s118', questionId: 'math10-m3-q118',
    recognition: 'Dạng bình phương của phân thức lớn hơn 0: loại nơi phân thức bằng 0 và nơi không xác định.',
    detailedSteps: [{ order: 1, title: 'Miền xác định', explanation: '$x+2\\ne0\\Rightarrow x\\ne-2$.' }, { order: 2, title: 'Điều kiện dương', explanation: 'Bình phương dương khi phân thức khác $0$, nên thêm $x\\ne1$.', result: '$\\mathbb R\\setminus\\{-2,1\\}$' }],
    finalAnswer: 'C. $\\mathbb R\\setminus\\{-2,1\\}$', commonMistakes: ['Chỉ loại nghiệm mẫu mà quên điểm làm bình phương bằng 0.'], reviewSuggestions: ['Với $A^2>0$, cần $A$ xác định và $A\\ne0$.']
  },
  {
    id: 'math10-m3-s119', questionId: 'math10-m3-q119',
    recognition: 'Dạng tích ba nhân tử bậc nhất sau khi phân tích tam thức.',
    detailedSteps: [{ order: 1, title: 'Phân tích và xếp mốc', explanation: '$(x^2+x-6)(x-1)=(x+3)(x-2)(x-1)$, các mốc $-3<1<2$.' }, { order: 2, title: 'Bảng dấu tích', explanation: 'Tích không dương trên $(-\\infty;-3]$ và $[1;2]$.', result: '$(-\\infty;-3]\\cup[1;2]$' }],
    finalAnswer: 'B. $(-\\infty;-3]\\cup[1;2]$', commonMistakes: ['Sắp mốc $1,2$ sai hoặc bỏ một nhân tử.'], reviewSuggestions: ['Phân tích hoàn toàn rồi mới lập bảng dấu chung.']
  },
  {
    id: 'math10-m3-s120', questionId: 'math10-m3-q120',
    recognition: 'Dạng thương có tử bậc nhất và mẫu bậc hai đã phân tích được.',
    detailedSteps: [{ order: 1, title: 'Xác định mốc và điểm loại', explanation: 'Tử có nghiệm $-1$; mẫu $(x-1)(x-3)$ nên loại $1,3$.' }, { order: 2, title: 'Lập bảng dấu', explanation: 'Phân thức $\\le0$ trên $(-\\infty;-1]$ và $(1;3)$; chỉ $-1$ được lấy.', result: '$(-\\infty;-1]\\cup(1;3)$' }],
    finalAnswer: 'A. $(-\\infty;-1]\\cup(1;3)$', commonMistakes: ['Lấy $1$ hoặc $3$ vì có dấu bằng.'], reviewSuggestions: ['Dấu bằng không bao giờ cho phép lấy nghiệm mẫu.']
  },
  {
    id: 'math10-m3-s121', questionId: 'math10-m3-q121',
    recognition: 'Dạng bất phương trình tham số giải theo $x$, thuận lợi khi hoàn thành bình phương.',
    detailedSteps: [{ order: 1, title: 'Đưa về khoảng cách', explanation: '$x^2-2mx+m^2-4\\le0\\Leftrightarrow(x-m)^2\\le4$.' }, { order: 2, title: 'Giải trị tuyệt đối', explanation: '$|x-m|\\le2\\Leftrightarrow m-2\\le x\\le m+2$.', result: '$[m-2;m+2]$' }],
    finalAnswer: 'A. $[m-2;m+2]$', commonMistakes: ['Viết khoảng đối xứng quanh 0 thay vì quanh $m$.'], reviewSuggestions: ['Nhận dạng $(x-m)^2\\le r^2$.']
  },
  {
    id: 'math10-m3-s122', questionId: 'math10-m3-q122',
    recognition: 'Dạng bất phương trình đúng với mọi $x$: tam thức hệ số đầu dương phải có $\\Delta\\le0$.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện', explanation: '$a=1>0$ và $\\Delta=4(m-2)(m+1)\\le0$.' }, { order: 2, title: 'Giải theo $m$', explanation: 'Tích không dương giữa hai nghiệm $-1,2$.', result: '$-1\\le m\\le2$' }],
    finalAnswer: 'B. $-1\\le m\\le2$', commonMistakes: ['Dùng $\\Delta<0$ và loại trường hợp bất phương trình chạm 0.'], reviewSuggestions: ['Dấu $\\ge0$ cho phép nghiệm kép.']
  },
  {
    id: 'math10-m3-s123', questionId: 'math10-m3-q123',
    recognition: 'Dạng tham số có hai nghiệm biểu diễn trực tiếp theo $m$.',
    detailedSteps: [{ order: 1, title: 'Phân tích', explanation: '$x^2-2(m+1)x+m^2+2m=(x-m)(x-m-2)$.' }, { order: 2, title: 'Chọn đoạn không dương', explanation: 'Hệ số đầu dương, hai nghiệm $m<m+2$, nên nghiệm là đoạn đóng giữa chúng.', result: '$[m;m+2]$' }],
    finalAnswer: 'A. $[m;m+2]$', commonMistakes: ['Cho rằng phải chia trường hợp theo dấu $m$.'], reviewSuggestions: ['$m<m+2$ đúng với mọi $m$, nên không cần chia trường hợp.']
  },
  {
    id: 'math10-m3-s124', questionId: 'math10-m3-q124',
    recognition: 'Dạng đếm nghiệm nguyên: giải tập nghiệm thực trước, sau đó mới liệt kê số nguyên.',
    detailedSteps: [{ order: 1, title: 'Giải bất phương trình', explanation: '$(x-2)(x-3)\\le0\\Leftrightarrow2\\le x\\le3$.' }, { order: 2, title: 'Đếm', explanation: 'Hai số nguyên thỏa là $2$ và $3$.', result: '$2$' }],
    finalAnswer: 'B. $2$', commonMistakes: ['Đếm độ dài đoạn thay vì đếm các số nguyên.'], reviewSuggestions: ['Liệt kê trực tiếp khi khoảng ngắn.']
  },
  {
    id: 'math10-m3-s125', questionId: 'math10-m3-q125',
    recognition: 'Dạng “bất phương trình $\\le0$ có nghiệm” với parabol mở lên: giá trị nhỏ nhất phải không dương, tương đương $\\Delta\\ge0$.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện có giao với trục', explanation: '$\\Delta=(-4)^2-4m=16-4m\\ge0$.' }, { order: 2, title: 'Giải theo tham số', explanation: '$16-4m\\ge0\\Leftrightarrow m\\le4$.', result: '$m\\le4$' }],
    finalAnswer: 'B. $m\\le4$', commonMistakes: ['Dùng $\\Delta>0$ và loại trường hợp chỉ có một nghiệm kép.'], reviewSuggestions: ['“Có ít nhất một nghiệm” bao gồm trường hợp tiếp xúc.']
  },
  {
    id: 'math10-m3-s126', questionId: 'math10-m3-q126',
    recognition: 'Dạng $a>0$, bất phương trình $f(x)\\le0$ vô nghiệm: cần tam thức luôn dương, tức $\\Delta<0$.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện biệt thức', explanation: '$\\Delta=(-2m)^2-4(m+1)=4(m^2-m-1)<0$.' }, { order: 2, title: 'Giải bất phương trình theo $m$', explanation: 'Hai nghiệm của $m^2-m-1$ là $\\dfrac{1\\pm\\sqrt5}{2}$; biểu thức âm ở giữa.', result: '$\\dfrac{1-\\sqrt5}{2}<m<\\dfrac{1+\\sqrt5}{2}$' }],
    finalAnswer: 'A. $\\dfrac{1-\\sqrt5}{2}<m<\\dfrac{1+\\sqrt5}{2}$', commonMistakes: ['Dùng $\\Delta\\le0$ dù tại $\\Delta=0$ vẫn có một nghiệm.'], reviewSuggestions: ['Vô nghiệm của $f\\le0$ cần $f>0$ mọi nơi.']
  },
  {
    id: 'math10-m3-s127', questionId: 'math10-m3-q127',
    recognition: 'Dạng suy ngược bất phương trình từ tập nghiệm là một đoạn đóng.',
    detailedSteps: [{ order: 1, title: 'Suy nghiệm và dấu hệ số', explanation: 'Tập nghiệm $[2;5]$ của dạng $f\\le0$ cần $a>0$ và hai nghiệm $2,5$.' }, { order: 2, title: 'Dựng tam thức', explanation: 'Chọn $f(x)=(x-2)(x-5)=x^2-7x+10$.', result: '$x^2-7x+10\\le0$' }],
    finalAnswer: 'A. $x^2-7x+10\\le0$', commonMistakes: ['Chọn dấu $<0$ nên làm mất hai đầu mút.'], reviewSuggestions: ['Đọc kiểu ngoặc của tập nghiệm để chọn dấu bất phương trình.']
  },
  {
    id: 'math10-m3-s128', questionId: 'math10-m3-q128',
    recognition: 'Dạng tìm độ dài tập nghiệm sau khi giải một bất phương trình bậc hai.',
    detailedSteps: [{ order: 1, title: 'Tìm tập nghiệm', explanation: '$-x^2+6x-5=-(x-1)(x-5)\\ge0$ khi $1\\le x\\le5$.' }, { order: 2, title: 'Tính độ dài đoạn', explanation: 'Độ dài là $5-1=4$.', result: '$4$' }],
    finalAnswer: 'B. $4$', commonMistakes: ['Đếm hai đầu mút và trả lời 5.'], reviewSuggestions: ['Độ dài đoạn $[a;b]$ là $b-a$.']
  },
  {
    id: 'math10-m3-s129', questionId: 'math10-m3-q129',
    recognition: 'Dạng ứng dụng lợi nhuận: “có lãi” nghĩa là $P(x)>0$, sau đó giao miền thực tế nếu cần.',
    detailedSteps: [{ order: 1, title: 'Lập điều kiện', explanation: '$-2x^2+40x-150>0\\Leftrightarrow-2(x-5)(x-15)>0$.' }, { order: 2, title: 'Chọn khoảng dương', explanation: 'Parabol mở xuống nên lợi nhuận dương giữa hai nghiệm.', result: '$5<x<15$' }],
    finalAnswer: 'A. $5<x<15$', commonMistakes: ['Dùng $\\ge0$ dù “có lãi” không gồm hòa vốn.'], reviewSuggestions: ['Dịch đúng ngôn ngữ thực tế thành dấu toán học.']
  },
  {
    id: 'math10-m3-s130', questionId: 'math10-m3-q130',
    recognition: 'Dạng ứng dụng độ cao: “ít nhất” tương ứng dấu $\\ge$.',
    detailedSteps: [{ order: 1, title: 'Đưa về một vế', explanation: '$-5t^2+20t\\ge15\\Leftrightarrow-5(t-1)(t-3)\\ge0$.' }, { order: 2, title: 'Giải và kiểm tra thời gian', explanation: 'Biểu thức không âm giữa hai nghiệm; khoảng $[1;3]$ nằm trong miền $t\\ge0$.', result: '$1\\le t\\le3$' }],
    finalAnswer: 'A. $1\\le t\\le3$', commonMistakes: ['Dịch “ít nhất” thành dấu $>$.'], reviewSuggestions: ['Gạch chân các từ “ít nhất”, “lớn hơn”, “không vượt quá”.']
  },
  {
    id: 'math10-m3-s131', questionId: 'math10-m3-q131',
    recognition: 'Dạng đúng với mọi $x$ có hệ số đầu phụ thuộc tham số; hoàn thành bình phương giúp bao quát cả trường hợp suy biến.',
    detailedSteps: [{ order: 1, title: 'Biến đổi', explanation: '$(m-1)x^2-2(m-1)x+m-2=(m-1)(x-1)^2-1$.' }, { order: 2, title: 'Xét hệ số của bình phương', explanation: 'Nếu $m\\le1$, $(m-1)(x-1)^2\\le0$ nên cả biểu thức $\\le-1<0$. Nếu $m>1$, biểu thức tăng vô hạn khi $|x|$ lớn.', result: '$m\\le1$' }],
    finalAnswer: 'B. $m\\le1$', commonMistakes: ['Loại $m=1$ vì hệ số bậc hai bằng 0 dù biểu thức khi đó là $-1$.'], reviewSuggestions: ['Kiểm tra riêng trường hợp suy biến hoặc dùng biến đổi tương đương bao quát.']
  },
  {
    id: 'math10-m3-s132', questionId: 'math10-m3-q132',
    recognition: 'Dạng yêu cầu một giá trị cụ thể thuộc tập nghiệm: thay trực tiếp giá trị đó vào bất phương trình.',
    detailedSteps: [{ order: 1, title: 'Thay $x=0$', explanation: 'Điều kiện trở thành $m^2-1<0$.' }, { order: 2, title: 'Giải theo $m$', explanation: '$(m-1)(m+1)<0$ nên $m$ nằm giữa hai nghiệm.', result: '$-1<m<1$' }],
    finalAnswer: 'A. $-1<m<1$', commonMistakes: ['Giải toàn bộ bất phương trình theo $x$ dù chỉ cần kiểm tra $x=0$.'], reviewSuggestions: ['Nhận dạng yêu cầu “$x_0$ là nghiệm” để thay trực tiếp.']
  }
];
