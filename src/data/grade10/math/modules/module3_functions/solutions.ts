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
    "finalAnswer": "A. $y=x^2-2x-1$",
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
    "finalAnswer": "B. $y=x^2-4x+3$",
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
    "finalAnswer": "A. $y=-2(x+2)^2+3$",
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
    "finalAnswer": "B. $y=-2x^2+6x+8$",
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
    "finalAnswer": "A. $y=2(x-2)^2+1$",
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
    "finalAnswer": "B. $(-3;-4)$",
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
    "finalAnswer": "A. $(1;-3)$",
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
    "finalAnswer": "B. $(5;-3)$",
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
    "finalAnswer": "A. $20$",
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
    "finalAnswer": "B. $25$",
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
    "finalAnswer": "A. $13.25$",
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
    "finalAnswer": "B. $450$",
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
    "finalAnswer": "B. $5$",
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
    "finalAnswer": "B. $(-\\infty;5]$",
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
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Thay toàn bộ x bằng (a+1), giữ ngoặc khi khai triển."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$(a+1)^2-2(a+1)=a^2-1$.",
        "result": "a^2-1"
      }
    ],
    "finalAnswer": "A. $a^2-1$",
    "commonMistakes": [
      "Chỉ thay x ở một vị trí."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s034",
    "questionId": "math10-m3-q034",
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Chọn đúng nhánh riêng cho từng đầu vào."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$f(-3)=-1$, $f(2)=4$, tổng bằng 3.",
        "result": "3"
      }
    ],
    "finalAnswer": "B. $3$",
    "commonMistakes": [
      "Dùng cùng một công thức cho cả hai giá trị."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
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
    "recognition": "Dạng giá trị và tập xác định: thay đầu vào đúng vị trí; với tập xác định, tìm mọi điều kiện khiến công thức có nghĩa rồi lấy giao.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Căn ở mẫu phải dương nghiêm ngặt."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$4-x^2>0$ tương đương $-2<x<2$.",
        "result": "(-2;2)"
      }
    ],
    "finalAnswer": "D. $(-2;2)$",
    "commonMistakes": [
      "Dùng ≥0 và giữ hai đầu mút làm mẫu bằng 0."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
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
    "finalAnswer": "B. $x=0$",
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
    "finalAnswer": "B. $x\\in(-2;1)\\cup(4;6)$",
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
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đối xứng qua Oy đổi dấu hoành độ, giữ nguyên tung độ."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "(3;5) biến thành (−3;5).",
        "result": "(-3;5)"
      }
    ],
    "finalAnswer": "A. $(-3;5)$",
    "commonMistakes": [
      "Đổi dấu cả hai tọa độ như đối xứng qua gốc."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s046",
    "questionId": "math10-m3-q046",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Mỗi giao điểm với đường y=k tương ứng một nghiệm f(x)=k."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Có ba giao điểm phân biệt nên có ba hoành độ nghiệm.",
        "result": "3"
      }
    ],
    "finalAnswer": "B. $3$",
    "commonMistakes": [
      "Đếm giao với trục Ox thay vì đường y=2."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s047",
    "questionId": "math10-m3-q047",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đọc hoành độ và trạng thái điểm trống/kín."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "0 bị loại, 4 được lấy nên miền là (0;4].",
        "result": "(0;4]"
      }
    ],
    "finalAnswer": "C. $(0;4]$",
    "commonMistakes": [
      "Dùng tung độ 1 và 5 làm hai đầu tập xác định."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s048",
    "questionId": "math10-m3-q048",
    "recognition": "Dạng đọc bảng/đồ thị: xác định câu hỏi đang yêu cầu đầu vào, đầu ra, giao trục, dấu hay chiều biến thiên rồi đọc đúng trục.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Phân biệt vị trí đạt cực trị với chính giá trị cực trị."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$7-(-3)=10$.",
        "result": "10"
      }
    ],
    "finalAnswer": "D. $10$",
    "commonMistakes": [
      "Lấy hiệu hai hoành độ −2−4."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
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
    "finalAnswer": "B. $f(x)=2x-2$",
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
    "finalAnswer": "B. $u_n=3n+2$",
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
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Giá ban đầu là hệ số tự do; giảm đều tạo hệ số góc âm."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "Tại t=0 giá 500; mỗi năm trừ 40t.",
        "result": "V(t)=500-40t"
      }
    ],
    "finalAnswer": "A. $V(t)=500-40t$",
    "commonMistakes": [
      "Dùng dấu cộng cho một đại lượng đang giảm."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s058",
    "questionId": "math10-m3-q058",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Lập $V(t)=120+15t$ rồi giải V=300."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$120+15t=300$ nên t=12 phút.",
        "result": "12\\text{ phút}"
      }
    ],
    "finalAnswer": "B. $12\\text{ phút}$",
    "commonMistakes": [
      "Lấy 300/15 và bỏ lượng nước ban đầu."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
  },
  {
    "id": "math10-m3-s059",
    "questionId": "math10-m3-q059",
    "recognition": "Dạng biểu diễn và mô hình hàm: xác định biến vào–ra, nhận dạng quan hệ tuyến tính hoặc từng đoạn rồi kiểm tra đơn vị và miền thực tế.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn biểu diễn",
        "explanation": "Đây là mô hình từng đoạn: 3 GB vượt mức mới bị tính thêm."
      },
      {
        "order": 2,
        "title": "Tính toán và kiểm tra",
        "explanation": "$50+20(5-2)=110$ nghìn đồng.",
        "result": "110\\text{ nghìn đồng}"
      }
    ],
    "finalAnswer": "C. $110\\text{ nghìn đồng}$",
    "commonMistakes": [
      "Tính 20 cho cả 5 GB rồi cộng phí gói."
    ],
    "reviewSuggestions": [
      "Xác định rõ đầu vào, đầu ra và miền giá trị được phép trước khi tính."
    ]
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
  }
];
