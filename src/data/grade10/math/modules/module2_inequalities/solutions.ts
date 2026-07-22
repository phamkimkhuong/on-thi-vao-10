import type { Solution } from '@/types';

export const g10MathModule2Solutions: Solution[] = [
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
      id: 'math10-s69',
      questionId: 'math10-q69',
      recognition: 'Dấu hiệu nhận biết: kiểm tra một điểm có thuộc miền nghiệm; thay trực tiếp tọa độ điểm vào tất cả bất phương trình.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thay tọa độ M',
          explanation: 'Với $M(1;2)$: $2x+y=2\\cdot1+2=4\\le5$, đồng thời $1\\ge0$ và $2\\ge0$.',
          result: 'Cả ba bất phương trình đều đúng'
        },
        {
          order: 2,
          title: 'Kết luận',
          explanation: 'Một điểm thuộc miền nghiệm của hệ khi thỏa mãn đồng thời mọi bất phương trình trong hệ.',
          result: 'M thuộc miền nghiệm'
        }
      ],
      finalAnswer: 'Có',
      commonMistakes: ['Chỉ kiểm tra bất phương trình đầu tiên mà không kiểm tra các điều kiện $x\\ge0$, $y\\ge0$.'],
      reviewSuggestions: ['Từ “hệ” có nghĩa là các điều kiện phải đồng thời đúng.']
    }
];
