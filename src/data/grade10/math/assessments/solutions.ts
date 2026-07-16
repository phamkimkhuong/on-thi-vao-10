import { Solution } from '@/types';

export const g10MathAssessmentSolutions: Solution[] = [
  // ĐỀ GIỮA KỲ (s1 - s10)
  {
    id: 'mock-math10-s1',
    questionId: 'mock-math10-q1',
    recognition: 'Phủ định mệnh đề chứa kí hiệu tồn tại và bất đẳng thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc phủ định mệnh đề lượng từ',
        explanation: 'Phủ định của mệnh đề chứa kí hiệu $\\exists$ là mệnh đề chứa kí hiệu $\\forall$, và phủ định của bất đẳng thức $f(x) < 0$ là $f(x) \\ge 0$.',
        result: 'Thay thế \\exists thành \\forall và < thành \\ge'
      },
      {
        order: 2,
        title: 'Viết mệnh đề phủ định',
        explanation: 'Ta được mệnh đề phủ định là: $\\bar{P}: "\\forall x \\in \\mathbb{R}, x^2 - x + 7 \\ge 0"$. Đối chiếu các phương án, chọn B.',
        result: 'Mệnh đề phủ định tương ứng là phương án B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn phủ định của < là > thay vì \\ge.'],
    reviewSuggestions: ['Nhớ quy tắc đổi lượng từ: \\exists \\leftrightarrow \\forall và đổi chiều dấu: < \\leftrightarrow \\ge.']
  },
  {
    id: 'mock-math10-s2',
    questionId: 'mock-math10-q2',
    recognition: 'Tìm giao của hai tập hợp số (khoảng, đoạn).',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tập hợp trên trục số',
        explanation: 'Tập hợp $A = [-2; 3)$ bao gồm các số từ $-2$ đến cận dưới $3$. Tập $B = (1; 5]$ gồm các số lớn hơn $1$ đến $5$.',
        result: 'A = [-2; 3), B = (1; 5]'
      },
      {
        order: 2,
        title: 'Lấy phần giao nhau',
        explanation: 'Phần chung giữa $A$ và $B$ là phần lớn hơn $1$ và bé hơn $3$, tức là khoảng $(1; 3)$. Đối chiếu chọn B.',
        result: 'A giao B = (1; 3)'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn đầu mút tròn và vuông, ví dụ chọn [1; 3) hoặc (1; 3].'],
    reviewSuggestions: ['Vẽ hai tập hợp lên cùng một trục số và gạch phần không thuộc mỗi tập hợp để thấy rõ phần giao.']
  },
  {
    id: 'mock-math10-s3',
    questionId: 'mock-math10-q3',
    recognition: 'Xác định điểm thuộc miền nghiệm của hệ bất phương trình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thay thế tọa độ điểm vào hệ bất phương trình',
        explanation: 'Ta lần lượt thay tọa độ của các điểm M, N, P, Q vào hệ $\\begin{cases} 2x - y > 1 \\\\ x + y \\le 3 \\end{cases}$:\n- Với $P(2; 0)$: $2(2) - 0 = 4 > 1$ (thỏa mãn) và $2 + 0 = 2 \\le 3$ (thỏa mãn).',
        result: 'P(2; 0) thỏa mãn cả hai bất phương trình'
      },
      {
        order: 2,
        title: 'Kết luận phương án đúng',
        explanation: 'Vì điểm P(2; 0) thỏa mãn đồng thời cả hai bất phương trình trong hệ nên P thuộc miền nghiệm. Chọn C.',
        result: 'Chọn C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Tính toán nhầm dấu khi thay tọa độ có số âm hoặc thay sai thứ tự x và y.'],
    reviewSuggestions: ['Luôn kiểm tra điểm thỏa mãn tất cả các bất phương trình trong hệ mới kết luận thuộc miền nghiệm.']
  },
  {
    id: 'mock-math10-s4',
    questionId: 'mock-math10-q4',
    recognition: 'Tìm tọa độ đỉnh của Parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính hoành độ đỉnh',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.',
        result: 'x_I = 2'
      },
      {
        order: 2,
        title: 'Tính tung độ đỉnh',
        explanation: 'Thay $x_I = 2$ vào phương trình parabol ta được tung độ đỉnh $y_I = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Do đó đỉnh là $I(2; -1)$. Chọn A.',
        result: 'y_I = -1'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhớ sai công thức hoành độ đỉnh thành $x = \\frac{b}{2a}$ dẫn đến tìm sai tọa độ.'],
    reviewSuggestions: ['Có thể dùng máy tính cầm tay chức năng giải phương trình bậc hai để kiểm tra tọa độ đỉnh cực trị (Min/Max).']
  },
  {
    id: 'mock-math10-s5',
    questionId: 'mock-math10-q5',
    recognition: 'Khảo sát điều kiện tập hợp số chứa tham số và phép toán tập hợp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá phát biểu a',
        explanation: 'Khi $m = 0$, ta có $A = [0 - 1; 0 + 3] = [-1; 3]$. Phát biểu này Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá phát biểu b',
        explanation: 'Khi $m = 0$, $A \\cap B = [-1; 3] \\cap (-1; 3) = (-1; 3)$. Phát biểu b ghi $A \\cap B = [-1; 3]$ là Sai (S) do thiếu loại trừ điểm biên $-1$ và $3$.',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá phát biểu c',
        explanation: 'Hai tập hợp rời nhau khi biên phải của A bé hơn biên trái của B ($m + 3 \\le -1 \\Leftrightarrow m \\le -4$) hoặc biên trái của A lớn hơn biên phải của B ($m - 1 \\ge 3 \\Leftrightarrow m \\ge 4$). Phát biểu này Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá phát biểu d',
        explanation: 'Giao khác rỗng khi $-4 < m < 4$. Giá trị nguyên của m là $\\{-3; -2; -1; 0; 1; 2; 3\\}$, tổng cộng có 7 giá trị. Phát biểu này Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Quên lấy phủ định điều kiện rời nhau khi tìm điều kiện giao khác rỗng.'],
    reviewSuggestions: ['Hãy biểu diễn trực quan các khoảng trên trục số đối với từng giá trị tham số m cụ thể để kiểm tra.']
  },
  {
    id: 'mock-math10-s6',
    questionId: 'mock-math10-q6',
    recognition: 'Giải bài toán quy hoạch tuyến tính tối ưu chi phí thực tế.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá phát biểu a',
        explanation: 'Lượng thịt bò x và thịt lợn y không âm và tối đa mua là 1,6kg thịt bò, 1,4kg thịt lợn. Do đó: $0 \\le x \\le 1,6$ và $0 \\le y \\le 1,4$. Phát biểu này Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá phát biểu b',
        explanation: 'Lượng protein cần ít nhất 900 đơn vị. Mỗi kg thịt bò chứa 800 đơn vị, lợn chứa 600 đơn vị. Bất phương trình đúng phải là $800x + 600y \\ge 900$. Phát biểu này Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá phát biểu c',
        explanation: 'Lượng lipid cần ít nhất 400 đơn vị. Mỗi kg thịt bò chứa 200 đơn vị, lợn chứa 400 đơn vị. Bất phương trình tương ứng là $200x + 400y \\ge 400$. Phát biểu này Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá phát biểu d',
        explanation: 'Chi phí mua thịt là $F(x; y) = 250x + 160y$. Vẽ miền nghiệm giới hạn bởi các đường thẳng, ta tìm được các đỉnh đa giác. Giá trị nhỏ nhất đạt tại giao điểm của hai đường thẳng protein và lipid: $x = 0,6; y = 0,7$ với chi phí $F = 250(0,6) + 160(0,7) = 262$ nghìn đồng. Phát biểu ghi 272 nghìn đồng là Sai (S).',
        result: 'd) Sai'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: S',
    commonMistakes: ['Lập sai chiều của bất phương trình (nhầm lẫn giữa "ít nhất" và "nhiều nhất").'],
    reviewSuggestions: ['Với bài toán tối ưu thực tế, vẽ miền nghiệm lồi và tính giá trị tại các đỉnh là phương pháp giải quyết chính xác nhất.']
  },
  {
    id: 'mock-math10-s7',
    questionId: 'mock-math10-q7',
    recognition: 'Xác định hệ số của parabol khi biết tọa độ đỉnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng hoành độ đỉnh thiết lập mối liên hệ',
        explanation: 'Đỉnh $I(1; 3)$ thuộc parabol $y = ax^2 + bx + 2$. Hoành độ đỉnh là $x_I = -\\frac{b}{2a} = 1 \\Rightarrow b = -2a$.',
        result: 'b = -2a'
      },
      {
        order: 2,
        title: 'Sử dụng tọa độ đỉnh lập phương trình thứ hai',
        explanation: 'Thay tọa độ đỉnh $I(1; 3)$ vào phương trình parabol: $3 = a(1)^2 + b(1) + 2 \\Rightarrow a + b = 1$.',
        result: 'a + b = 1'
      },
      {
        order: 3,
        title: 'Giải hệ phương trình tìm parabol',
        explanation: 'Thay $b = -2a$ vào $a + b = 1$ ta được $a - 2a = 1 \\Rightarrow a = -1 \\Rightarrow b = 2$. Vậy parabol cần tìm là $y = -x^2 + 2x + 2$.',
        result: 'y = -x^2+2x+2'
      }
    ],
    finalAnswer: '-x^2+2x+2',
    commonMistakes: ['Nhập dư thừa ký tự khoảng trắng hoặc dấu cách khiến định dạng kiểm tra không khớp.'],
    reviewSuggestions: ['Viết liền mạch phương trình theo đúng định dạng được hướng dẫn ở đề bài.']
  },
  {
    id: 'mock-math10-s8',
    questionId: 'mock-math10-q8',
    recognition: 'Bài toán cực trị thực tế chuyển động ném bóng hình parabol.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận diện phương trình hàm bậc hai',
        explanation: 'Hàm độ cao $h(t) = -5t^2 + 20t$ có đồ thị là parabol bề lõm quay xuống dưới ($a = -5 < 0$). Giá trị lớn nhất đạt được tại hoành độ đỉnh.',
        result: 'Hàm đạt Max tại đỉnh parabol'
      },
      {
        order: 2,
        title: 'Tính thời điểm đạt độ cao cực đại',
        explanation: 'Thời điểm quả bóng đạt độ cao lớn nhất là hoành độ đỉnh: $t = -\\frac{b}{2a} = -\\frac{20}{2(-5)} = 2$ (giây).',
        result: 't = 2'
      }
    ],
    finalAnswer: '2',
    commonMistakes: ['Tính nhầm sang độ cao lớn nhất là 20m thay vì thời gian bóng bay là 2s.'],
    reviewSuggestions: ['Đọc kĩ đề xem câu hỏi yêu cầu tìm thời gian (t) hay độ cao lớn nhất (h).']
  },
  {
    id: 'mock-math10-s9',
    questionId: 'mock-math10-q9',
    recognition: 'Tính chiều cao tháp bằng hệ thức lượng lượng giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập biểu thức độ dài hình chiếu',
        explanation: 'Gọi $h$ là chiều cao tháp CD. Các tam giác vuông $ADC$ và $BDC$ cho ta:\n$AD = h \\cdot \\cot 30^\\circ = h\\sqrt{3}$,\n$BD = h \\cdot \\cot 45^\\circ = h$.',
        result: 'AD = h*sqrt(3), BD = h'
      },
      {
        order: 2,
        title: 'Lập phương trình và giải h',
        explanation: 'Khoảng cách giữa A và B là: $AB = AD - BD \\Rightarrow 30 = h\\sqrt{3} - h \\Rightarrow h = \\frac{30}{\\sqrt{3} - 1} \\approx 40.98$ (m). Làm tròn đến đơn vị mét ta được 41.',
        result: 'h = 41'
      }
    ],
    finalAnswer: '41',
    commonMistakes: ['Làm tròn sai chữ số thập phân hoặc dùng nhầm hàm lượng giác.'],
    reviewSuggestions: ['Hãy vẽ hình phác thảo để dễ dàng thiết lập các phương trình hình học trực quan.']
  },
  {
    id: 'mock-math10-s10',
    questionId: 'mock-math10-q10',
    recognition: 'Tính góc và côsin góc giữa hai vectơ dựa trên tọa độ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng của hai vectơ',
        explanation: 'Tích vô hướng $\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 = 3(2) + (-1)(6) = 6 - 6 = 0$.',
        result: 'a.b = 0'
      },
      {
        order: 2,
        title: 'Kết luận côsin góc giữa hai vectơ',
        explanation: 'Vì tích vô hướng bằng 0 nên hai vectơ vuông góc với nhau. Côsin góc giữa chúng bằng 0.',
        result: 'cos = 0'
      }
    ],
    finalAnswer: '0',
    commonMistakes: ['Tính nhầm tích vô hướng dẫn đến côsin khác 0.'],
    reviewSuggestions: ['Nếu tích vô hướng bằng 0 thì góc giữa hai vectơ bằng 90 độ và côsin bằng 0.']
  },

  // ĐỀ CUỐI KỲ (s11 - s20)
  {
    id: 'mock-math10-s11',
    questionId: 'mock-math10-q11',
    recognition: 'Điều kiện để đoạn này là tập con của đoạn kia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập điều kiện tập con',
        explanation: 'Để $A = [m; m + 2] \\subset B = [-1; 4]$, ta cần:\n$\\begin{cases} m \\ge -1 \\\\ m + 2 \\le 4 \\end{cases} \\Rightarrow \\begin{cases} m \\ge -1 \\\\ m \\le 2 \\end{cases} \\Rightarrow -1 \\le m \\le 2$. Chọn A.',
        result: 'm thuộc [-1; 2]'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Quên lấy dấu bằng ở các đầu mút biên.'],
    reviewSuggestions: ['Kiểm tra các ngoặc vuông/tròn ở biên kỹ lưỡng trước khi quyết định lấy dấu bằng.']
  },
  {
    id: 'mock-math10-s12',
    questionId: 'mock-math10-q12',
    recognition: 'Tích vô hướng của hai vectơ chung gốc trong tam giác đều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định góc và độ dài các vectơ',
        explanation: 'Góc giữa $\\vec{AB}$ và $\\vec{AC}$ là góc $\\angle A = 60^\\circ$ của tam giác đều $ABC$. Độ dài của hai vectơ đều bằng $2a$.',
        result: 'Góc = 60 độ, Độ dài = 2a'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng hình học',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos 60^\\circ = 2a \\cdot 2a \\cdot 0.5 = 2a^2$. Chọn A.',
        result: 'Tích = 2a^2'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn độ dài cạnh tam giác là a thay vì 2a dẫn đến tính sai hệ số.'],
    reviewSuggestions: ['Chú ý đọc kĩ độ dài cạnh của tam giác đều đề bài cho là gì (a, 2a, hay a\\sqrt{3}).']
  },
  {
    id: 'mock-math10-s13',
    questionId: 'mock-math10-q13',
    recognition: 'Tính diện tích tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng tính chất tam giác',
        explanation: 'Ta nhận thấy ba cạnh của tam giác thỏa mãn hệ thức Pythagore: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Do đó tam giác vuông tại góc đối diện cạnh lớn nhất c = 10.',
        result: 'Tam giác vuông với hai cạnh góc vuông là 6 và 8'
      },
      {
        order: 2,
        title: 'Tính diện tích tam giác',
        explanation: 'Diện tích tam giác vuông là: $S = \\frac{1}{2} a \\cdot b = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$. Chọn B.',
        result: 'S = 24'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Sử dụng công thức tính diện tích sai hoặc không nhận ra tam giác vuông làm kéo dài thời gian tính.'],
    reviewSuggestions: ['Nhận biết nhanh các bộ ba số Pythagore (3-4-5, 6-8-10) giúp giải nhanh bài toán trắc nghiệm hình học.']
  },
  {
    id: 'mock-math10-s14',
    questionId: 'mock-math10-q14',
    recognition: 'Xác định trục đối xứng của đồ thị parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức đường tiệm cận/trục đối xứng',
        explanation: 'Trục đối xứng của parabol $y = ax^2 + bx + c$ là đường thẳng $x = -\\frac{b}{2a}$.',
        result: 'x = -b / (2a)'
      },
      {
        order: 2,
        title: 'Thay số tính trục đối xứng',
        explanation: 'Với parabol $y = -2x^2 + 4x + 1$, ta có $a = -2, b = 4$. Suy ra trục đối xứng là $x = -\\frac{4}{2(-2)} = 1$. Chọn A.',
        result: 'x = 1'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn trục đối xứng viết dưới dạng y = ... thay vì x = ... hoặc tính nhầm dấu.'],
    reviewSuggestions: ['Trục đối xứng luôn đi qua hoành độ đỉnh nên có dạng x = hoành độ đỉnh.']
  },
  {
    id: 'mock-math10-s15',
    questionId: 'mock-math10-q15',
    recognition: 'Khảo sát tính chất đồng biến, nghịch biến và cực trị hàm bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá đỉnh parabol (phát biểu a)',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{-4}{2(1)} = 2$, tung độ đỉnh $y_I = -1$. Đỉnh parabol là $I(2; -1)$. Phát biểu a Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá chiều biến thiên (phát biểu b)',
        explanation: 'Vì hệ số $a = 1 > 0$, parabol quay bề lõm lên trên, hàm nghịch biến trên khoảng $(-\\infty; 2)$ và đồng biến trên khoảng $(2; +\\infty)$. Phát biểu b ghi hàm đồng biến trên $(-\\infty; 2)$ là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá giao điểm với Ox (phát biểu c)',
        explanation: 'Phương trình hoành độ giao điểm $x^2 - 4x + 3 = 0 \\Rightarrow x = 1$ hoặc $x = 3$. Đồ thị cắt Ox tại $A(1; 0)$ và $B(3; 0)$. Phát biểu c Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá cực trị trên đoạn (phát biểu d)',
        explanation: 'Trên đoạn $[0; 3]$, hoành độ đỉnh $x_I = 2$ thuộc đoạn. Giá trị nhỏ nhất của hàm số đạt tại đỉnh, bằng $-1$. Phát biểu d Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Nhầm lẫn chiều biến thiên của hàm bậc hai khi hệ số a dương/âm.'],
    reviewSuggestions: ['Vẽ bảng biến thiên phác thảo ra giấy giúp kiểm tra tính đồng biến, nghịch biến nhanh và chính xác nhất.']
  },
  {
    id: 'mock-math10-s16',
    questionId: 'mock-math10-q16',
    recognition: 'Giải tam giác bằng các định lý Sin, Cosin và tích vô hướng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá độ dài cạnh BC (phát biểu a)',
        explanation: 'Định lý Cosin: $BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos A = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 40 = 49 \\Rightarrow BC = 7$. Phát biểu a Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá diện tích tam giác (phát biểu b)',
        explanation: 'Diện tích $S = \\frac{1}{2} AB \\cdot AC \\cdot \\sin A = \\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$. Phát biểu b Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá bán kính R ngoại tiếp (phát biểu c)',
        explanation: 'Định lý Sin: $2R = \\frac{BC}{\\sin A} \\Rightarrow R = \\frac{7}{2\\sin 60^\\circ} = \\frac{7}{\\sqrt{3}} = \\frac{7\\sqrt{3}}{3}$. Phát biểu c Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá tích vô hướng vectơ (phát biểu d)',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos A = 5 \\cdot 8 \\cdot \\cos 60^\\circ = 20$. Khẳng định d Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    commonMistakes: ['Tính toán nhầm công thức cosin hoặc sin góc A.'],
    reviewSuggestions: ['Hãy liên kết các đại lượng tam giác thông qua các định lý cơ bản: Sin, Cosin, diện tích tam giác để giải chuỗi trắc nghiệm đúng sai nhanh chóng.']
  },
  {
    id: 'mock-math10-s17',
    questionId: 'mock-math10-q17',
    recognition: 'Đếm số lượng giá trị nguyên của tham số m để giao khác rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện để giao bằng rỗng',
        explanation: '$A \\cap B = \\varnothing \\Leftrightarrow m + 3 \\le -1$ hoặc $m - 1 \\ge 3 \\Leftrightarrow m \\le -4$ hoặc $m \\ge 4$.',
        result: 'm <= -4 hoặc m >= 4'
      },
      {
        order: 2,
        title: 'Lấy phủ định tìm điều kiện giao khác rỗng và đếm số nguyên',
        explanation: 'Để giao khác rỗng: $-4 < m < 4$. Giá trị nguyên của m là $\\{-3; -2; -1; 0; 1; 2; 3\\}$, tổng cộng có 7 giá trị nguyên.',
        result: '7 giá trị'
      }
    ],
    finalAnswer: '7',
    commonMistakes: ['Không đọc kỹ yêu cầu đếm số lượng mà ghi khoảng giá trị số.'],
    reviewSuggestions: ['Nếu bài yêu cầu đếm số lượng thì đáp số cuối cùng bắt buộc phải là một số nguyên dương cụ thể.']
  },
  {
    id: 'mock-math10-s18',
    questionId: 'mock-math10-q18',
    recognition: 'Giải tam giác thực tế đo đạc khoảng cách giữa hai điểm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính góc đối diện cạnh AB',
        explanation: 'Trong tam giác ABC, góc $\\angle C = 180^\\circ - 45^\\circ - 60^\\circ = 75^\\circ$.',
        result: 'Góc C = 75 độ'
      },
      {
        order: 2,
        title: 'Áp dụng định lý Sin tìm khoảng cách AC',
        explanation: '$\\frac{AC}{\\sin B} = \\frac{AB}{\\sin C} \\Rightarrow AC = \\frac{100 \\cdot \\sin 60^\\circ}{\\sin 75^\\circ} \\approx \\frac{100 \\cdot 0.8660}{0.9659} \\approx 89.65$ (m). Làm tròn đến đơn vị mét ta được 90.',
        result: 'AC = 90'
      }
    ],
    finalAnswer: '90',
    commonMistakes: ['Nhầm công thức định lý Sin hoặc bấm máy tính sai hệ góc.'],
    reviewSuggestions: ['Ghi nhớ định lý Sin: a/sinA = b/sinB = c/sinC = 2R để liên kết các cạnh góc nhanh chóng.']
  },
  {
    id: 'mock-math10-s19',
    questionId: 'mock-math10-q19',
    recognition: 'Tìm hoành độ trực tâm H của tam giác trong mặt phẳng tọa độ Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hệ thức trực tâm qua tích vô hướng',
        explanation: 'Trực tâm $H(x; y)$ của tam giác $ABC$ thỏa mãn $\\vec{AH} \\cdot \\vec{BC} = 0$ và $\\vec{BH} \\cdot \\vec{AC} = 0$.',
        result: 'AH vuông góc BC, BH vuông góc AC'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng và hoành độ x',
        explanation: 'Ta có $\\vec{BC} = (4; 0)$ và $\\vec{AH} = (x - 1; y - 2)$. Tích vô hướng $\\vec{AH} \\cdot \\vec{BC} = 4(x - 1) + 0(y - 2) = 0 \\Rightarrow x - 1 = 0 \\Rightarrow x = 1$.',
        result: 'x = 1'
      }
    ],
    finalAnswer: '1',
    commonMistakes: ['Lập sai vectơ hoặc tính toán nhầm tọa độ dẫn đến hoành độ khác.'],
    reviewSuggestions: ['Khi một cạnh tam giác song song với trục tọa độ (như BC cùng tung độ y = 0), việc tính trực tâm sẽ đơn giản hóa đáng kể.']
  },
  {
    id: 'mock-math10-s20',
    questionId: 'mock-math10-q20',
    recognition: 'Bài toán tối ưu doanh thu thực tế sử dụng hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hàm doanh thu theo số lần giảm giá',
        explanation: 'Gọi x là số lần giảm giá 200 nghìn đồng ($x \\ge 0$). Giá vé mới là $10 - 0.2x$ (triệu đồng). Số khách là $50 + 5x$ (người). Doanh thu $R(x) = (10 - 0.2x)(50 + 5x) = -x^2 + 40x + 500$.',
        result: 'R(x) = -x^2 + 40x + 500'
      },
      {
        order: 2,
        title: 'Tính số tiền cần giảm để doanh thu lớn nhất',
        explanation: 'Hàm số bậc hai đạt cực đại tại hoành độ đỉnh $x = -\\frac{40}{2(-1)} = 20$ (lần). Số tiền cần giảm là $20 \\cdot 0.2 = 4$ (triệu đồng).',
        result: '4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Nhầm lẫn giữa số lần giảm giá (20 lần) và số tiền giảm tương ứng (4 triệu đồng).'],
    reviewSuggestions: ['Luôn kiểm tra kỹ đơn vị của câu hỏi yêu cầu (ở đây là số triệu đồng cần giảm).']
  },
  // ĐỀ GIỮA KỲ 2 (s21 - s30)
  {
    id: 'mock-math10-s21',
    questionId: 'mock-math10-q21',
    recognition: 'Phép toán hiệu của hai tập hợp số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định các khoảng tập hợp',
        explanation: 'Ta viết hai tập hợp dưới dạng khoảng: $A = (-\\infty; 3)$, $B = [1; 5]$.',
        result: 'A = (-\\infty; 3), B = [1; 5]'
      },
      {
        order: 2,
        title: 'Tính hiệu A \\ B',
        explanation: 'Phép hiệu $A \\backslash B$ lấy các phần tử thuộc A nhưng loại đi các phần tử thuộc B. Vì B chứa đoạn $[1; 5]$ nên ta gạch đi phần từ $1$ trở đi. Vậy hiệu là khoảng $(-\\infty; 1)$. Chọn A.',
        result: 'A \\ B = (-\\infty; 1)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Lấy nhầm ngoặc vuông tại đầu mút, ví dụ chọn (-\\infty; 1].'],
    reviewSuggestions: ['Nhớ gạch đi tất cả các phần tử thuộc tập B (kể cả điểm mút 1 nếu nó có trong B).']
  },
  {
    id: 'mock-math10-s22',
    questionId: 'mock-math10-q22',
    recognition: 'Xác định tính đúng sai của mệnh đề chứa kí hiệu toán học.',
    detailedSteps: [
      {
        order: 1,
        title: 'Kiểm tra từng phương án',
        explanation: '- Phương án A sai vì với $x=0$, $x^2 = 0 \\ngtr 0$.\n- Phương án B sai vì bình phương số thực luôn không âm.\n- Phương án C đúng vì phương trình $x^2 - 3x + 2 = 0$ có nghiệm thực $x=1, x=2$.\n- Phương án D sai vì với $x=1$, $1^2 - 1 - 1 = -1 < 0$.',
        result: 'Mệnh đề C đúng'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Bỏ qua các trường hợp biên đặc biệt như x = 0 hoặc x = 1.'],
    reviewSuggestions: ['Tìm một phản ví dụ (counterexample) để chứng minh một mệnh đề chứa lượng từ \\forall là sai.']
  },
  {
    id: 'mock-math10-s23',
    questionId: 'mock-math10-q23',
    recognition: 'Nhận dạng hệ bất phương trình bậc nhất hai ẩn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Kiểm tra bậc của các ẩn số',
        explanation: 'Hệ bất phương trình bậc nhất hai ẩn chỉ chứa x, y bậc nhất, không có tích xy hay biến khác. Đối chiếu ta thấy hệ B: $\\begin{cases} x + 2y \\le 4 \\\\ 2x - 3y > 6 \\end{cases}$ thỏa mãn hoàn toàn.',
        result: 'Chọn B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn hệ bậc nhất hai ẩn với hệ chứa tích xy hoặc biến z.'],
    reviewSuggestions: ['Định nghĩa hệ bất phương trình bậc nhất hai ẩn có dạng các bất phương trình bậc nhất hai ẩn ghép lại.']
  },
  {
    id: 'mock-math10-s24',
    questionId: 'mock-math10-q24',
    recognition: 'Khảo sát chiều biến thiên của hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hoành độ đỉnh',
        explanation: 'Parabol có hệ số $a = -1 < 0$ và hoành độ đỉnh $x_I = -\\frac{2}{2(-1)} = 1$.',
        result: 'x_I = 1'
      },
      {
        order: 2,
        title: 'Xác định khoảng đồng biến',
        explanation: 'Vì $a < 0$, đồ thị đi lên rồi đi xuống. Do đó hàm số đồng biến trên khoảng $(-\\infty; 1)$ và nghịch biến trên khoảng $(1; +\\infty)$. Chọn B.',
        result: 'Đồng biến trên (-\\infty; 1)'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn khoảng đồng biến của a < 0 và a > 0.'],
    reviewSuggestions: ['Vẽ nhanh bảng biến thiên có hình dạng mũi tên đi lên/xuống để không bị nhầm.']
  },
  {
    id: 'mock-math10-s25',
    questionId: 'mock-math10-q25',
    recognition: 'Khảo sát và tính chất đồ thị hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Thay $x = 1 \\Rightarrow y = 0$. Đỉnh $x_I = -\\frac{4}{2(-1)} = 2$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Giá trị lớn nhất đạt tại hoành độ đỉnh $x = 2$, khi đó $y_{\\max} = f(2) = 1$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Đồ thị cắt Oy tại $(0; -3)$. Phương trình hoành độ giao điểm có hai nghiệm phân biệt $x=1, x=3$. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Xét bất phương trình $-x^2 + 4x - 3 \\ge 0 \\Leftrightarrow x^2 - 4x + 3 \\le 0 \\Leftrightarrow 1 \\le x \\le 3$. Tập nghiệm là đoạn $[1; 3]$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    commonMistakes: ['Tính sai giá trị đỉnh cực trị dẫn đến kết luận b sai.'],
    reviewSuggestions: ['Thay tọa độ đỉnh trực tiếp vào hàm số ban đầu để kiểm tra lại giá trị cực đại/cực tiểu.']
  },
  {
    id: 'mock-math10-s26',
    questionId: 'mock-math10-q26',
    recognition: 'Quy hoạch tuyến tính tối ưu lợi nhuận sản xuất ghế.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Thời gian máy hoạt động tối đa 120 giờ nên $3x + 2y \\le 120$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Thời gian hoàn thiện tối đa 70 giờ nên $2x + y \\le 70$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Lợi nhuận của ghế bành là 250, ghế tựa là 150. Hàm lợi nhuận là $F(x; y) = 250x + 150y$. Khẳng định c ghi $150x + 250y$ là Sai (S).',
        result: 'c) Sai'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Miền nghiệm có các đỉnh $O(0;0), A(35;0), B(0;60), C(20;30)$. Tính F tại các đỉnh:\n- $F(O) = 0$.\n- $F(A) = 250(35) = 8750$.\n- $F(B) = 150(60) = 9000$.\n- $F(C) = 250(20) + 150(30) = 9500$.\nLớn nhất là 9500 nghìn đồng tại $C(20; 30)$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    commonMistakes: ['Tính nhầm tọa độ giao điểm hoặc quên tính giá trị lợi nhuận tại các điểm biên biên trục tọa độ.'],
    reviewSuggestions: ['Hàm mục tiêu luôn đạt giá trị tối ưu tại một trong các đỉnh lồi của miền nghiệm đa giác.']
  },
  {
    id: 'mock-math10-s27',
    questionId: 'mock-math10-q27',
    recognition: 'Tìm tham số m để tập hợp này là con của tập hợp kia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập bất phương trình điều kiện',
        explanation: 'Để $A = [m - 3; m + 1] \\subset B = [-2; 5]$, ta cần:\n$\\begin{cases} m - 3 \\ge -2 \\\\ m + 1 \\le 5 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge 1 \\\\ m \\le 4 \\end{cases} \\Leftrightarrow 1 \\le m \\le 4$.',
        result: '1 <= m <= 4'
      },
      {
        order: 2,
        title: 'Đếm số lượng giá trị nguyên',
        explanation: 'Các giá trị nguyên của m là $\\{1; 2; 3; 4\\}$. Tổng cộng có 4 giá trị nguyên thỏa mãn.',
        result: '4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Tính sai khoảng m hoặc đếm thiếu phần tử đầu mút.'],
    reviewSuggestions: ['Vẽ hai đoạn số chồng lên nhau trên giấy để kiểm chứng trực quan điều kiện tập con.']
  },
  {
    id: 'mock-math10-s28',
    questionId: 'mock-math10-q28',
    recognition: 'Lập phương trình parabol khi biết trục đối xứng và điểm đi qua.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng trục đối xứng lập phương trình thứ nhất',
        explanation: 'Parabol $y = ax^2 + bx + 3$ có trục đối xứng $x = 2 \\Rightarrow -\\frac{b}{2a} = 2 \\Rightarrow b = -4a$.',
        result: 'b = -4a'
      },
      {
        order: 2,
        title: 'Sử dụng điểm đi qua lập phương trình thứ hai',
        explanation: 'Đi qua $A(1; 0) \\Rightarrow 0 = a(1)^2 + b(1) + 3 \\Rightarrow a + b = -3$.',
        result: 'a + b = -3'
      },
      {
        order: 3,
        title: 'Giải hệ tìm a và b',
        explanation: 'Thay $b = -4a$ vào $a + b = -3$ ta có $a - 4a = -3 \\Rightarrow -3a = -3 \\Rightarrow a = 1 \\Rightarrow b = -4$. Vậy parabol là $y = x^2 - 4x + 3$.',
        result: 'x^2-4x+3'
      }
    ],
    finalAnswer: 'x^2-4x+3',
    commonMistakes: ['Tính nhầm dấu khi giải hệ phương trình hoặc viết thừa chữ y = trong kết quả ngắn.'],
    reviewSuggestions: ['Đọc kĩ định dạng yêu cầu của đáp án ngắn để nhập chính xác biểu thức.']
  },
  {
    id: 'mock-math10-s29',
    questionId: 'mock-math10-q29',
    recognition: 'Tính khoảng cách gián tiếp ngoài khơi sử dụng định lý Sin.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính góc đối diện cạnh AB',
        explanation: 'Trong tam giác ABC, góc $\\angle C = 180^\\circ - 60^\\circ - 45^\\circ = 75^\\circ$.',
        result: 'Góc C = 75 độ'
      },
      {
        order: 2,
        title: 'Áp dụng định lý Sin tìm AC',
        explanation: '$\\frac{AC}{\\sin B} = \\frac{AB}{\\sin C} \\Rightarrow AC = \\frac{200 \\cdot \\sin 45^\\circ}{\\sin 75^\\circ} \\approx \\frac{200 \\cdot 0.7071}{0.9659} \\approx 146.41$ (m). Làm tròn đến đơn vị mét là 146.',
        result: 'AC = 146'
      }
    ],
    finalAnswer: '146',
    commonMistakes: ['Tính sai giá trị lượng giác hoặc làm tròn sai chữ số.'],
    reviewSuggestions: ['Chuyển máy tính bỏ túi về chế độ DEG khi tính các góc dạng độ.']
  },
  {
    id: 'mock-math10-s30',
    questionId: 'mock-math10-q30',
    recognition: 'Tính tích vô hướng của hai vectơ từ tọa độ các điểm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm tọa độ các vectơ',
        explanation: 'Ta có $\\vec{AB} = (-2 - 1; 5 - 2) = (-3; 3)$, và $\\vec{AC} = (4 - 1; 4 - 2) = (3; 2)$.',
        result: 'AB = (-3; 3), AC = (3; 2)'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng của hai vectơ',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = x_1x_2 + y_1y_2 = (-3)(3) + 3(2) = -9 + 6 = -3$.',
        result: '-3'
      }
    ],
    finalAnswer: '-3',
    commonMistakes: ['Trừ nhầm tọa độ điểm sau cho điểm trước hoặc nhân sai dấu tích.'],
    reviewSuggestions: ['Công thức tọa độ vectơ: AB = (xB - xA; yB - yA) và tích vô hướng: x1x2 + y1y2.']
  },
  // ĐỀ CUỐI KỲ 1 (s31 - s52)
  {
    id: 'mock-math10-s31',
    questionId: 'mock-math10-q31',
    recognition: 'Phủ định mệnh đề chứa kí hiệu lượng từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Quy tắc phủ định mệnh đề lượng từ',
        explanation: 'Phủ định của mệnh đề chứa kí hiệu $\\forall$ là mệnh đề chứa kí hiệu $\\exists$, và phủ định của bất đẳng thức $f(x) > 0$ là $f(x) \\le 0$.',
        result: 'Đổi \\forall thành \\exists và > thành \\le'
      },
      {
        order: 2,
        title: 'Chọn phương án phủ định chính xác',
        explanation: 'Ta có phủ định là $\\bar{P}: \\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$. Đối chiếu chọn B.',
        result: 'B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn phủ định của > là < thay vì \\le.'],
    reviewSuggestions: ['Chú ý các cặp dấu phủ định trong mệnh đề toán học: > và \\le, < và \\ge, = và \\neq.']
  },
  {
    id: 'mock-math10-s32',
    questionId: 'mock-math10-q32',
    recognition: 'Thực hiện phép hiệu của hai tập hợp số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích hai tập hợp số',
        explanation: 'Tập hợp $A = [-1; 4]$ gồm các số thực từ $-1$ đến $4$. Tập hợp $B = (2; 6)$ gồm các số thực lớn hơn $2$ đến bé hơn $6$.',
        result: 'A = [-1; 4], B = (2; 6)'
      },
      {
        order: 2,
        title: 'Tính hiệu A \\ B',
        explanation: 'Phép hiệu $A \\backslash B$ lấy các phần tử thuộc A nhưng không thuộc B. Do đó ta loại các số thuộc khoảng $(2; 6)$ khỏi đoạn $[-1; 4]$. Kết quả là đoạn $[-1; 2]$. Chọn A.',
        result: '[-1; 2]'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Lấy nhầm ngoặc tròn tại điểm mút 2 (chọn [-1; 2)).'],
    reviewSuggestions: ['Vì số 2 không thuộc B nên nó vẫn nằm trong hiệu A \\ B, do đó ta lấy ngoặc vuông tại 2.']
  },
  {
    id: 'mock-math10-s33',
    questionId: 'mock-math10-q33',
    recognition: 'Xác định điểm thuộc miền nghiệm của bất phương trình bậc nhất hai ẩn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thay tọa độ các phương án vào bất phương trình',
        explanation: 'Bất phương trình là $2x + y > 3$. Ta thay tọa độ các điểm:\n- Với A(1; 1): $2(1) + 1 = 3 \\ngtr 3$.\n- Với B(0; 2): $2(0) + 2 = 2 \\ngtr 3$.\n- Với C(2; 1): $2(2) + 1 = 5 > 3$ (thỏa mãn).\n- Với D(-1; 3): $2(-1) + 3 = 1 \\ngtr 3$.',
        result: 'Điểm C(2; 1) thuộc miền nghiệm'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Thay lộn giá trị hoành độ x và tung độ y.'],
    reviewSuggestions: ['Thay tọa độ điểm cẩn thận theo thứ tự (x; y).']
  },
  {
    id: 'mock-math10-s34',
    questionId: 'mock-math10-q34',
    recognition: 'Xác định trục đối xứng của đồ thị hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức trục đối xứng',
        explanation: 'Hàm số bậc hai $y = 2x^2 - 4x + 5$ có hệ số $a = 2$, $b = -4$. Trục đối xứng có phương trình $x = -\\frac{b}{2a} = -\\frac{-4}{2(2)} = 1$. Chọn A.',
        result: 'x = 1'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm công thức trục đối xứng thành -b/a hoặc tính nhầm dấu.'],
    reviewSuggestions: ['Trục đối xứng của parabol luôn đi qua hoành độ đỉnh: x = -b/(2a).']
  },
  {
    id: 'mock-math10-s35',
    questionId: 'mock-math10-q35',
    recognition: 'Tính độ dài cạnh tam giác sử dụng định lý Cosin.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng định lý Cosin',
        explanation: 'Ta có $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos A$. Thay số:\n$BC^2 = 6^2 + 8^2 - 2 \\cdot 6 \\cdot 8 \\cdot \\cos 120^\\circ = 36 + 64 - 96 \\cdot (-0.5) = 100 + 48 = 148$.',
        result: 'BC^2 = 148'
      },
      {
        order: 2,
        title: 'Khai căn tìm độ dài BC',
        explanation: '$BC = \\sqrt{148} = 2\\sqrt{37}$. Chọn B.',
        result: '2\\sqrt{37}'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Tính nhầm giá trị $\\cos 120^\\circ = 0.5$ thay vì $-0.5$, dẫn đến kết quả $BC = 2\\sqrt{13}$.'],
    reviewSuggestions: ['Góc tù luôn có giá trị Cosin âm. Hãy lưu ý dấu trừ của định lý Cosin sẽ đổi thành cộng.']
  },
  {
    id: 'mock-math10-s36',
    questionId: 'mock-math10-q36',
    recognition: 'Tính độ dài tổng của hai vectơ chung gốc trong tam giác đều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng quy tắc hình bình hành / trung điểm',
        explanation: 'Gọi M là trung điểm của BC. Ta có $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$. Do đó $|\\vec{AB} + \\vec{AC}| = 2AM$.',
        result: '2AM'
      },
      {
        order: 2,
        title: 'Tính độ dài đường cao AM của tam giác đều',
        explanation: 'Đường trung tuyến/cao trong tam giác đều cạnh a có độ dài là $AM = \\frac{a\\sqrt{3}}{2}$. Do đó $2AM = 2 \\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$. Chọn B.',
        result: 'a\\sqrt{3}'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cộng trực tiếp độ dài của 2 vectơ thành 2a.'],
    reviewSuggestions: ['Độ dài của tổng vectơ không bằng tổng độ dài. Hãy quy về đường trung tuyến hoặc hình bình hành để tính toán.']
  },
  {
    id: 'mock-math10-s37',
    questionId: 'mock-math10-q37',
    recognition: 'Tìm tập xác định của hàm số chứa căn thức và phân thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập điều kiện xác định',
        explanation: 'Hàm số xác định khi và chỉ khi:\n- Biểu thức trong căn không âm: $x - 1 \\ge 0 \\Leftrightarrow x \\ge 1$.\n- Mẫu thức khác 0: $x - 3 \\neq 0 \\Leftrightarrow x \\neq 3$.',
        result: 'x >= 1 và x != 3'
      },
      {
        order: 2,
        title: 'Kết luận tập xác định',
        explanation: 'Tập xác định là $D = [1; +\\infty) \\backslash \\{3\\}$. Chọn A.',
        result: '[1; +\\infty) \\backslash \\{3\\}'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Quên điều kiện mẫu thức khác 3 hoặc quên ngoặc vuông ở đầu mút 1.'],
    reviewSuggestions: ['Đối với căn ở tử số, điều kiện là biểu thức lớn hơn hoặc bằng 0; đối với mẫu số, điều kiện là khác 0.']
  },
  {
    id: 'mock-math10-s38',
    questionId: 'mock-math10-q38',
    recognition: 'Xác định tọa độ đỉnh của parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính hoành độ đỉnh x',
        explanation: 'Hệ số $a = -1$, $b = 4$, $c = -3$. Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2$.',
        result: 'x = 2'
      },
      {
        order: 2,
        title: 'Tính tung độ đỉnh y',
        explanation: 'Thay $x = 2$ vào phương trình parabol ta được $y_I = -(2)^2 + 4(2) - 3 = 1$. Vậy đỉnh là $I(2; 1)$. Chọn A.',
        result: 'I(2; 1)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Tính sai dấu hoành độ dẫn đến tung độ sai.'],
    reviewSuggestions: ['Có thể tính tung độ đỉnh qua công thức $-\\Delta/(4a)$ hoặc nhanh nhất là thế hoành độ vào hàm số.']
  },
  {
    id: 'mock-math10-s39',
    questionId: 'mock-math10-q39',
    recognition: 'Tính diện tích tam giác theo công thức Heron.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính nửa chu vi tam giác',
        explanation: 'Ta có nửa chu vi $p = \\frac{5 + 6 + 7}{2} = 9$.',
        result: 'p = 9'
      },
      {
        order: 2,
        title: 'Áp dụng công thức Heron',
        explanation: 'Diện tích tam giác là $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$. Chọn A.',
        result: '6\\sqrt{6}'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Tính sai nửa chu vi hoặc khai căn nhầm.'],
    reviewSuggestions: ['Công thức Heron đặc biệt hữu ích khi đề bài cho biết độ dài 3 cạnh là các số nguyên đẹp.']
  },
  {
    id: 'mock-math10-s40',
    questionId: 'mock-math10-q40',
    recognition: 'Xác định tọa độ vectơ AB từ tọa độ hai điểm A và B.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức tính tọa độ vectơ',
        explanation: 'Ta có $\\vec{AB} = (x_B - x_A; y_B - y_A) = (-2 - 1; 5 - 3) = (-3; 2)$. Chọn A.',
        result: '\\vec{AB} = (-3; 2)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Lấy tọa độ điểm A trừ đi B (tọa độ ngọn trừ gốc) dẫn đến sai dấu.'],
    reviewSuggestions: ['Hãy nhớ câu thần chú: Vectơ bằng tọa độ ngọn trừ tọa độ gốc.']
  },
  {
    id: 'mock-math10-s41',
    questionId: 'mock-math10-q41',
    recognition: 'Tính tích vô hướng của hai vectơ khi biết tọa độ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức biểu thức tọa độ tích vô hướng',
        explanation: 'Tích vô hướng $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 = 2(1) + (-3)(4) = 2 - 12 = -10$. Chọn A.',
        result: '-10'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Tính nhầm nhân chéo hoành độ với tung độ.'],
    reviewSuggestions: ['Tích vô hướng bằng hoành nhân hoành cộng tung nhân tung. Kết quả thu được luôn là một số thực.']
  },
  {
    id: 'mock-math10-s42',
    questionId: 'mock-math10-q42',
    recognition: 'Tìm tham số m để đoạn A là tập con của đoạn B.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập hệ bất phương trình điều kiện',
        explanation: 'Để $A = [m; m + 2] \\subset B = [1; 5]$, ta cần:\n$\\begin{cases} m \\ge 1 \\\\ m + 2 \\le 5 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge 1 \\\\ m \\le 3 \\end{cases} \\Leftrightarrow 1 \\le m \\le 3$.',
        result: '1 <= m <= 3'
      },
      {
        order: 2,
        title: 'Đếm số lượng giá trị nguyên m',
        explanation: 'Các giá trị nguyên của m thỏa mãn là $\\{1; 2; 3\\}$, có tất cả 3 giá trị. Chọn A.',
        result: '3'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Thiếu các giá trị ở điểm biên hoặc giải bất phương trình sai.'],
    reviewSuggestions: ['Vẽ trục số để biểu diễn điều kiện bao hàm của hai đoạn số.']
  },
  {
    id: 'mock-math10-s43',
    questionId: 'mock-math10-q43',
    recognition: 'Khảo sát giao tập hợp chứa tham số m.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Khi $m = 1$, ta được $A = [1 - 1; 1 + 3] = [0; 4]$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Với $m = 1$, $A = [0; 4]$ và $B = (0; 4) \\Rightarrow A \\cap B = (0; 4)$. Khẳng định b ghi $A \\cap B = [0; 4]$ là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Hai tập rời nhau khi và chỉ khi $m + 3 \\le 0$ (tập A nằm hoàn toàn bên trái B) hoặc $m - 1 \\ge 4$ (tập A nằm bên phải B) $\\Leftrightarrow m \\le -3$ hoặc $m \\ge 5$. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Hai tập giao nhau khác rỗng khi phần bù rời nhau có nghĩa là $-3 < m < 5$. Số nguyên m thỏa mãn là $\\{-2; -1; 0; 1; 2; 3; 4\\}$ (gồm 7 giá trị). Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Không chú ý đến ngoặc tròn/ngoặc vuông tại các điểm biên biên dẫn đến đếm nhầm số nguyên.'],
    reviewSuggestions: ['Định nghĩa tập giao $A \\cap B$ lấy phần tử thuộc cả hai tập. Điểm biên của ngoặc tròn sẽ loại trừ khỏi kết quả giao.']
  },
  {
    id: 'mock-math10-s44',
    questionId: 'mock-math10-q44',
    recognition: 'Ứng dụng quy hoạch tuyến tính để tìm phương án sản xuất tối ưu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Tổng thời gian máy I hoạt động là $2x + y \\le 10$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Tổng thời gian máy II hoạt động là $x + 3y \\le 15$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Lợi nhuận nhận được là $F(x; y) = 3x + 2y$ (triệu đồng). Khẳng định ghi $2x + 3y$ là Sai (S).',
        result: 'c) Sai'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Miền nghiệm có các đỉnh $O(0;0), A(5;0), B(0;5), C(3;4)$. Tính lợi nhuận F:\n- $F(O) = 0$.\n- $F(A) = 3(5) + 0 = 15$.\n- $F(B) = 0 + 2(5) = 10$.\n- $F(C) = 3(3) + 2(4) = 17$.\nDo đó lợi nhuận cực đại đạt 17 triệu đồng tại $C(3; 4)$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    commonMistakes: ['Vẽ sai miền nghiệm hoặc tính toán nhầm tọa độ đỉnh giao điểm C.'],
    reviewSuggestions: ['Đỉnh giao điểm luôn là nghiệm của hệ phương trình tạo bởi hai bất phương trình biên độ tối đa.']
  },
  {
    id: 'mock-math10-s45',
    questionId: 'mock-math10-q45',
    recognition: 'Khảo sát và biện luận tính chất của hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Trục đối xứng $x = -\\frac{2}{2(-1)} = 1$. Thay $x = 0 \\Rightarrow y = 3$ đi qua $A(0; 3)$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Hệ số $a = -1 < 0$ nên đồ thị quay bề lõm xuống. Hàm số phải đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; +\\infty)$. Khẳng định b nói ngược lại là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Cho $-x^2 + 2x + 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Cắt Ox tại hai điểm phân biệt $B(-1; 0)$ và $C(3; 0)$. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Hoành độ đỉnh $x_I = 1 \\in [0; 2]$. Cực đại đạt tại $x=1$ với $y = f(1) = 4$. Đây cũng là giá trị lớn nhất trên đoạn. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Nhầm lẫn chiều biến thiên khi hệ số a âm.'],
    reviewSuggestions: ['Bảng biến thiên của parabol với a < 0 luôn có đỉnh lồi đi lên, nên đồng biến ở nhánh bên trái trục đối xứng.']
  },
  {
    id: 'mock-math10-s46',
    questionId: 'mock-math10-q46',
    recognition: 'Hệ thức lượng và tích vô hướng trong tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Pythagore: $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{9 + 16} = 5$. Đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = BC/2 = 2,5$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Diện tích tam giác vuông là $S = \\frac{1}{2}AB \\cdot AC = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. Khẳng định ghi $12$ là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Tam giác ABC vuông tại A nên $AB \\perp AC \\Rightarrow \\vec{AB} \\cdot \\vec{AC} = 0$. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Biểu diễn qua vectơ chung gốc: $\\vec{AM} = \\frac{1}{2}(\\vec{AB} + \\vec{AC})$, và $\\vec{BC} = \\vec{AC} - \\vec{AB}$. Tích vô hướng:\n$\\vec{AM} \\cdot \\vec{BC} = \\frac{1}{2}(\\vec{AB} + \\vec{AC})(\\vec{AC} - \\vec{AB}) = \\frac{1}{2}(AC^2 - AB^2) = \\frac{1}{2}(16 - 9) = 3,5$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Tính nhầm công thức diện tích hoặc phân tích sai tích vô hướng theo bình phương vô hướng.'],
    reviewSuggestions: ['Quy tích vô hướng của hai vectơ bất kỳ về tích vô hướng của hai vectơ vuông góc đã biết độ dài để tính toán dễ dàng.']
  },
  {
    id: 'mock-math10-s47',
    questionId: 'mock-math10-q47',
    recognition: 'Biện luận tham số để hai tập hợp có giao khác rỗng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xét điều kiện để hai tập rời nhau',
        explanation: '$A \\cap B = \\varnothing \\Leftrightarrow m + 2 < -1$ hoặc $m - 2 > 3 \\Leftrightarrow m < -3$ hoặc $m > 5$.',
        result: 'm < -3 hoặc m > 5'
      },
      {
        order: 2,
        title: 'Xét điều kiện để giao khác rỗng',
        explanation: 'Phủ định điều kiện rời nhau ở bước 1 cho $-3 \\le m \\le 5$. Vì hai tập đều lấy các đầu mút nên $m=-3$ và $m=5$ vẫn làm giao khác rỗng. Các giá trị nguyên là $\\{-3;-2;-1;0;1;2;3;4;5\\}$, gồm $5-(-3)+1=9$ giá trị.',
        result: 'Có 9 giá trị nguyên'
      }
    ],
    finalAnswer: '9',
    commonMistakes: ['Giải sai điều kiện biên của hiệu tập hợp dẫn đến tính thừa hoặc thiếu phần tử nguyên.'],
    reviewSuggestions: ['Vẽ hai tập hợp trên trục số để so sánh các điểm đầu mút một cách chính xác nhất.']
  },
  {
    id: 'mock-math10-s48',
    questionId: 'mock-math10-q48',
    recognition: 'Xác định parabol qua điểm đi qua và trục đối xứng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập phương trình qua trục đối xứng',
        explanation: 'Trục đối xứng $x = -\\frac{b}{2a} = 2 \\Rightarrow b = -4a$.',
        result: 'b = -4a'
      },
      {
        order: 2,
        title: 'Thiết lập phương trình qua điểm đi qua',
        explanation: 'Đi qua $A(1; 4) \\Rightarrow a(1)^2 + b(1) + 1 = 4 \\Rightarrow a + b = 3$.',
        result: 'a + b = 3'
      },
      {
        order: 3,
        title: 'Giải hệ và lập parabol',
        explanation: 'Thay $b = -4a$ vào ta được $a - 4a = 3 \\Rightarrow -3a = 3 \\Rightarrow a = -1 \\Rightarrow b = 4$. Parabol là $y = -x^2 + 4x + 1$.',
        result: '-x^2+4x+1'
      }
    ],
    finalAnswer: '-x^2+4x+1',
    commonMistakes: ['Tính toán sai dấu khi giải hệ số a và b.'],
    reviewSuggestions: ['Thế ngược tọa độ điểm A(1; 4) và đỉnh I(2; 5) để kiểm định sự chính xác của hàm số bậc hai vừa tìm.']
  },
  {
    id: 'mock-math10-s49',
    questionId: 'mock-math10-q49',
    recognition: 'Bài toán thực tế tìm lợi nhuận cực đại của doanh nghiệp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hàm doanh thu và lợi nhuận',
        explanation: 'Doanh thu thu được: $R(x) = xP = x(100 - x) = -x^2 + 100x$.\nLợi nhuận thu được: $L(x) = R(x) - C(x) = -x^2 + 100x - (20x + 100) = -x^2 + 80x - 100$.',
        result: 'L(x) = -x^2 + 80x - 100'
      },
      {
        order: 2,
        title: 'Tìm cực trị của hàm lợi nhuận',
        explanation: 'Hàm số bậc hai đạt giá trị cực đại tại hoành độ đỉnh $x = -\\frac{80}{2(-1)} = 40$. Vậy doanh nghiệp cần bán 40 sản phẩm.',
        result: '40'
      }
    ],
    finalAnswer: '40',
    commonMistakes: ['Nhầm lẫn hàm lợi nhuận với hàm doanh thu (quên trừ đi hàm chi phí C(x)).'],
    reviewSuggestions: ['Lợi nhuận luôn bằng Doanh thu trừ đi Chi phí. Đừng quên mở ngoặc đổi dấu toàn bộ các hạng tử của C(x).']
  },
  {
    id: 'mock-math10-s50',
    questionId: 'mock-math10-q50',
    recognition: 'Tính khoảng cách gián tiếp ngoài khơi sử dụng định lý Sin.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính góc C đối diện cạnh AB',
        explanation: 'Góc $\\angle C = 180^\\circ - 45^\\circ - 75^\\circ = 60^\\circ$.',
        result: '60 độ'
      },
      {
        order: 2,
        title: 'Áp dụng định lý Sin tính AC',
        explanation: 'Ta có $\\frac{AC}{\\sin B} = \\frac{AB}{\\sin C} \\Rightarrow AC = \\frac{150 \\cdot \\sin 75^\\circ}{\\sin 60^\\circ} \\approx \\frac{150 \\cdot 0.9659}{0.8660} \\approx 167.3$ (m). Làm tròn đến hàng đơn vị mét là 167.',
        result: '167'
      }
    ],
    finalAnswer: '167',
    commonMistakes: ['Sử dụng sai định lý Sin hoặc bấm máy tính ở chế độ Radian.'],
    reviewSuggestions: ['Kiểm tra chế độ đo góc trên máy tính (D hoặc DEG) trước khi bấm các giá trị lượng giác.']
  },
  {
    id: 'mock-math10-s51',
    questionId: 'mock-math10-q51',
    recognition: 'Tính tích vô hướng của hai vectơ trong hình vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chuyển về tích vô hướng chung gốc',
        explanation: 'Ta có $\\vec{AB} \\cdot \\vec{BD} = -\\vec{AB} \\cdot \\vec{DB}$.',
        result: '-\\vec{AB} \\cdot \\vec{DB}'
      },
      {
        order: 2,
        title: 'Tính độ dài và góc giữa hai vectơ',
        explanation: 'Độ dài $AB = a$, độ dài đường chéo $BD = a\\sqrt{2}$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{DB}$ là góc $\\angle ABD = 45^\\circ$.\nTích vô hướng: $-a \\cdot a\\sqrt{2} \\cdot \\cos 45^\\circ = -a^2\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = -a^2$.',
        result: '-a^2'
      },
      {
        order: 3,
        title: 'Tìm hệ số của a^2',
        explanation: 'Biểu thức tích vô hướng bằng $-1 \\cdot a^2$, vậy hệ số cần điền là -1.',
        result: '-1'
      }
    ],
    finalAnswer: '-1',
    commonMistakes: ['Tính ra kết quả dương $a^2$ do nhầm lẫn góc hoặc quên đổi dấu vectơ chung gốc.'],
    reviewSuggestions: ['Hãy chú ý hướng của các vectơ. Nếu chưa chung gốc, cần sử dụng phép đối vectơ hoặc dời vectơ để quy về góc chung gốc.']
  },
  {
    id: 'mock-math10-s52',
    questionId: 'mock-math10-q52',
    recognition: 'Tìm hoành độ điểm thuộc trục Ox để tam giác vuông tại đỉnh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biểu diễn tọa độ các vectơ',
        explanation: 'Điểm C thuộc Ox nên có tọa độ $C(x; 0)$. Ta tính tọa độ hai vectơ:\n$\\vec{AB} = (3 - 1; 5 - 2) = (2; 3)$,\n$\\vec{AC} = (x - 1; 0 - 2) = (x - 1; -2)$.',
        result: 'AB = (2; 3), AC = (x-1; -2)'
      },
      {
        order: 2,
        title: 'Thiết lập điều kiện vuông góc qua tích vô hướng',
        explanation: 'Tam giác ABC vuông tại A khi và chỉ khi:\n$\\vec{AB} \\cdot \\vec{AC} = 0 \\Leftrightarrow 2(x - 1) + 3(-2) = 0 \\Leftrightarrow 2x - 2 - 6 = 0 \\Leftrightarrow 2x - 8 = 0 \\Leftrightarrow x = 4$.',
        result: 'x = 4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Tính sai tích vô hướng hoặc nhầm lẫn đỉnh vuông (ví dụ tính vuông tại B hoặc C).'],
    reviewSuggestions: ['Tam giác vuông tại đỉnh nào thì tích vô hướng của hai vectơ đi từ đỉnh đó bằng 0 (ở đây là vuông tại A nên AB . AC = 0).']
  },
  // ĐỀ CUỐI KỲ 2 (s53 - s74)
  {
    id: 'mock-math10-s53',
    questionId: 'mock-math10-q53',
    recognition: 'Phủ định mệnh đề chứa kí hiệu lượng từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc phủ định mệnh đề lượng từ',
        explanation: 'Phủ định của mệnh đề chứa kí hiệu $\\exists$ là mệnh đề chứa kí hiệu $\\forall$, và phủ định của phép bằng $=$ là phép khác $\\neq$.',
        result: 'Đổi \\exists thành \\forall và = thành \\neq'
      },
      {
        order: 2,
        title: 'Xác định mệnh đề phủ định',
        explanation: 'Ta được mệnh đề phủ định là: $\\bar{P}: "\\forall x \\in \\mathbb{R}, x^2 - 4x + 3 \\neq 0"$. Chọn A.',
        result: 'A'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn phủ định của = là < hoặc >.'],
    reviewSuggestions: ['Chú ý đổi đúng ký hiệu lượng từ từ tồn tại sang với mọi và ngược lại.']
  },
  {
    id: 'mock-math10-s54',
    questionId: 'mock-math10-q54',
    recognition: 'Tìm giao của hai tập hợp số thực.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định khoảng chung',
        explanation: 'Tập hợp $A = (-\\infty; 2]$ và $B = [0; 4)$. Phần giao nhau giữa chúng chứa các giá trị lớn hơn hoặc bằng 0 và nhỏ hơn hoặc bằng 2, tức là đoạn $[0; 2]$. Chọn A.',
        result: '[0; 2]'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn ngoặc vuông và ngoặc tròn tại các điểm mút biên.'],
    reviewSuggestions: ['Vẽ hai tập hợp lên trục số và gạch phần không chung để tìm giao chính xác.']
  },
  {
    id: 'mock-math10-s55',
    questionId: 'mock-math10-q55',
    recognition: 'Điểm thuộc miền nghiệm của bất phương trình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thay tọa độ điểm vào bất phương trình',
        explanation: 'Thay điểm C(0; -2) vào $x - 2y \\le 2$ ta được $0 - 2(-2) = 4 \\le 2$ (Vô lý). Do đó C không thuộc miền nghiệm. Chọn D.',
        result: 'D'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Thay sai vị trí hoành độ x và tung độ y.'],
    reviewSuggestions: ['Luôn kiểm tra kĩ dấu lớn hơn/nhỏ hơn sau khi thế giá trị.']
  },
  {
    id: 'mock-math10-s56',
    questionId: 'mock-math10-q56',
    recognition: 'Tìm tọa độ đỉnh của parabol bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính hoành độ đỉnh',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$.',
        result: 'x = 3'
      },
      {
        order: 2,
        title: 'Tính tung độ đỉnh',
        explanation: 'Thay $x_I = 3$ vào $y = x^2 - 6x + 8$ ta có $y_I = 3^2 - 6(3) + 8 = -1$. Đỉnh là $I(3; -1)$. Chọn A.',
        result: 'I(3; -1)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Tính nhầm dấu hoành độ đỉnh.'],
    reviewSuggestions: ['Hoành độ đỉnh parabol $y = ax^2 + bx + c$ tính bằng công thức $x = -b/(2a)$.']
  },
  {
    id: 'mock-math10-s57',
    questionId: 'mock-math10-q57',
    recognition: 'Tính diện tích tam giác sử dụng công thức lượng giác.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức tính diện tích',
        explanation: 'Diện tích tam giác là $S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$. Chọn A.',
        result: '10\\sqrt{3}'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm giá trị $\\sin 60^\\circ = 1/2$.'],
    reviewSuggestions: ['Ghi nhớ bảng giá trị lượng giác các góc đặc biệt: $\\sin 60^\\circ = \\sqrt{3}/2$.']
  },
  {
    id: 'mock-math10-s58',
    questionId: 'mock-math10-q58',
    recognition: 'Tích vô hướng của hai vectơ chung gốc trong tam giác đều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng định nghĩa tích vô hướng',
        explanation: 'Ta có $\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos(\\vec{AB}, \\vec{AC}) = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{1}{2}a^2$. Chọn A.',
        result: '1/2 a^2'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm góc tam giác đều bằng $90^\\circ$ hoặc góc tù.'],
    reviewSuggestions: ['Trong tam giác đều ABC, góc giữa hai vectơ cùng xuất phát từ đỉnh A là $\\angle A = 60^\\circ$.']
  },
  {
    id: 'mock-math10-s59',
    questionId: 'mock-math10-q59',
    recognition: 'Tìm tập xác định của hàm số chứa căn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Giải bất phương trình điều kiện trong căn',
        explanation: 'Điều kiện xác định: $3x - 6 \\ge 0 \\Leftrightarrow 3x \\ge 6 \\Leftrightarrow x \\ge 2$. Tập xác định $D = [2; +\\infty)$. Chọn A.',
        result: '[2; +\\infty)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn khoảng tròn (2; +\\infty) thay vì đoạn vuông [2; +\\infty).'],
    reviewSuggestions: ['Căn thức ở tử số thì biểu thức dưới căn lấy cả dấu bằng 0.']
  },
  {
    id: 'mock-math10-s60',
    questionId: 'mock-math10-q60',
    recognition: 'Tìm giá trị lớn nhất của hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính hoành độ đỉnh',
        explanation: 'Hoành độ đỉnh parabol $x_I = -\\frac{2}{2(-1)} = 1$.',
        result: 'x = 1'
      },
      {
        order: 2,
        title: 'Tính giá trị cực đại lớn nhất',
        explanation: 'Vì $a = -1 < 0$, đồ thị có bề lõm quay xuống nên giá trị lớn nhất chính là tung độ đỉnh: $y(1) = -(1)^2 + 2(1) + 2 = 3$. Chọn A.',
        result: 'y = 3'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Tính nhầm giá trị lớn nhất thành hoành độ đỉnh x = 1.'],
    reviewSuggestions: ['Giá trị lớn nhất/nhỏ nhất của hàm số luôn là tung độ y, không phải hoành độ x.']
  },
  {
    id: 'mock-math10-s61',
    questionId: 'mock-math10-q61',
    recognition: 'Tính bán kính đường tròn ngoại tiếp của tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng tam giác vuông Pythagore',
        explanation: 'Ta có $6^2 + 8^2 = 36 + 64 = 100 = 10^2$, nên theo định lý đảo Pythagore, tam giác ABC vuông tại C có cạnh huyền c = 10.',
        result: 'Tam giác vuông tại C'
      },
      {
        order: 2,
        title: 'Tính bán kính đường tròn ngoại tiếp',
        explanation: 'Trong tam giác vuông, bán kính đường tròn ngoại tiếp bằng nửa cạnh huyền: $R = c/2 = 10/2 = 5$. Chọn A.',
        result: '5'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Áp dụng công thức tính R tổng quát quá phức tạp dẫn đến tính toán nhầm.'],
    reviewSuggestions: ['Nhận biết nhanh tam giác vuông (qua các bộ số Pythagore như 3-4-5, 6-8-10) sẽ giúp tính R cực kì nhanh chóng.']
  },
  {
    id: 'mock-math10-s62',
    questionId: 'mock-math10-q62',
    recognition: 'Tính tọa độ trung điểm của đoạn thẳng trong mặt phẳng tọa độ Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức tọa độ trung điểm',
        explanation: '$x_M = \\frac{x_A + x_B}{2} = \\frac{2 + (-1)}{2} = 0,5$; $y_M = \\frac{y_A + y_B}{2} = \\frac{5 + 1}{2} = 3$. Vậy $M(0,5; 3)$. Chọn A.',
        result: 'M(0,5; 3)'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Trừ tọa độ thay vì cộng chia đôi.'],
    reviewSuggestions: ['Tọa độ trung điểm bằng trung bình cộng tọa độ của hai đầu mút đoạn thẳng.']
  },
  {
    id: 'mock-math10-s63',
    questionId: 'mock-math10-q63',
    recognition: 'Nhận dạng mối quan hệ vuông góc của hai vectơ bằng tích vô hướng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính tích vô hướng của hai vectơ',
        explanation: 'Ta có $\\vec{a} \\cdot \\vec{b} = 3(-2) + 1(6) = -6 + 6 = 0$. Vì tích vô hướng bằng 0 nên hai vectơ vuông góc. Chọn A.',
        result: 'Chọn A'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn định nghĩa vuông góc với cùng phương.'],
    reviewSuggestions: ['Hai vectơ khác vectơ-không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0.']
  },
  {
    id: 'mock-math10-s64',
    questionId: 'mock-math10-q64',
    recognition: 'Tìm điều kiện tham số để hai tập hợp rời nhau.',
    detailedSteps: [
      {
        order: 1,
        title: 'Biện luận vị trí hai tập hợp trên trục số',
        explanation: 'Để $A = [1; 5]$ và $B = (m; m + 2)$ rời nhau ($A \\cap B = \\varnothing$) thì B phải nằm hoàn toàn bên trái hoặc bên phải A.',
        result: 'B bên trái hoặc bên phải A'
      },
      {
        order: 2,
        title: 'Thiết lập các bất phương trình biên',
        explanation: '- Trường hợp 1: B ở bên trái A $\\Leftrightarrow m + 2 \\le 1 \\Leftrightarrow m \\le -1$.\n- Trường hợp 2: B ở bên phải A $\\Leftrightarrow m \\ge 5$.\nVậy điều kiện là $m \\le -1$ hoặc $m \\ge 5$. Chọn A.',
        result: 'm <= -1 hoặc m >= 5'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn dấu bằng ở mốc biên (ví dụ chọn m < -1 hoặc m > 5).'],
    reviewSuggestions: ['Vì đầu mút của B là ngoặc tròn nên khi $m+2=1$, B có giá trị cận lớn nhất tiệm cận 1 nhưng không chứa 1. Do đó hai tập vẫn rời nhau, lấy dấu bằng tại m = -1.']
  },
  {
    id: 'mock-math10-s65',
    questionId: 'mock-math10-q65',
    recognition: 'Khảo sát và biện luận tính chất của đồ thị hàm số bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Hoành độ đỉnh $x_I = -\\frac{-2}{2} = 1$. Tung độ đỉnh $y_I = 1^2 - 2(1) - 3 = -4$. Trục đối xứng $x = 1$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Hệ số $a = 1 > 0$ nên đồ thị quay bề lõm lên. Hàm số đồng biến trên khoảng $(1; +\\infty)$ và nghịch biến trên khoảng $(-\\infty; 1)$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Cho $x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Đồ thị cắt Oy tại $(0; -3)$. Khẳng định c ghi đi qua $M(0; 3)$ là Sai (S).',
        result: 'c) Sai'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Đỉnh hoành độ $x=1 \\in [0; 2]$. Cực tiểu của hàm số đạt tại $x=1$ với giá trị cực tiểu $y = -4$. Đây cũng là giá trị nhỏ nhất trên đoạn. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: S; d: Đ',
    commonMistakes: ['Tính sai tung độ giao điểm với trục tung.'],
    reviewSuggestions: ['Thay x = 0 vào hàm số để luôn tìm được tọa độ giao điểm với trục tung chính xác nhất.']
  },
  {
    id: 'mock-math10-s66',
    questionId: 'mock-math10-q66',
    recognition: 'Bài toán quy hoạch tuyến tính tối ưu hóa lợi nhuận nông nghiệp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Tổng số ngày công cúc và hồng là $10x + 15y$. Hạn mức tối đa 90 ngày công nên $10x + 15y \\le 90$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Diện tích trồng hoa tối đa 8 sào nên $x + y \\le 8$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Hàm số lợi nhuận biểu diễn: $F(x; y) = 15x + 20y$ (triệu đồng). Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Các đỉnh miền nghiệm đa giác: $O(0;0), A(8;0), B(0;6), C(6;2)$.\n- $F(O) = 0$.\n- $F(A) = 15(8) = 120$.\n- $F(B) = 20(6) = 120$.\n- $F(C) = 15(6) + 20(2) = 130$.\nLợi nhuận lớn nhất đạt được là 130 triệu đồng tại $C(6; 2)$ (trồng 6 sào cúc và 2 sào hồng). Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    commonMistakes: ['Giải sai giao điểm đa giác miền nghiệm.'],
    reviewSuggestions: ['Luôn kiểm tra các điều kiện thực tế như x, y không âm để giới hạn đúng miền nghiệm đa giác lồi.']
  },
  {
    id: 'mock-math10-s67',
    questionId: 'mock-math10-q67',
    recognition: 'Hệ thức lượng nâng cao trong tam giác chứa góc tù.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Định lý Cosin: $BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos 120^\\circ = 16 + 36 - 48(-0.5) = 76 \\Rightarrow BC = 2\\sqrt{19}$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: '$\\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos 120^\\circ = 4 \\cdot 6 \\cdot (-0.5) = -12$. Đúng (Đ).',
        result: 'b) Đúng'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: '$S = \\frac{1}{2}AB \\cdot AC \\cdot \\sin 120^\\circ = \\frac{1}{2} \\cdot 24 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Định lý Sin: $R = \\frac{BC}{2\\sin 120^\\circ} = \\frac{2\\sqrt{19}}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{2\\sqrt{19}}{\\sqrt{3}} = \\frac{2\\sqrt{57}}{3}$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: Đ; c: Đ; d: Đ',
    commonMistakes: ['Tính sai giá trị lượng giác của góc tù 120 độ.'],
    reviewSuggestions: ['Hãy nhớ: $\\sin 120^\\circ > 0$ nhưng $\\cos 120^\\circ < 0$.']
  },
  {
    id: 'mock-math10-s68',
    questionId: 'mock-math10-q68',
    recognition: 'Khảo sát tam giác trong mặt phẳng tọa độ Oxy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá khẳng định a',
        explanation: 'Trọng tâm $G(x_G; y_G)$ tính bằng trung bình cộng tọa độ 3 đỉnh: $x_G = (1 - 2 + 4)/3 = 1$, $y_G = (3 + 1 + 1)/3 = 5/3$. Đúng (Đ).',
        result: 'a) Đúng'
      },
      {
        order: 2,
        title: 'Đánh giá khẳng định b',
        explanation: 'Vectơ $\\vec{AB} = (-3; -2)$, $\\vec{AC} = (3; -2)$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = (-3)(3) + (-2)(-2) = -9 + 4 = -5$. Khẳng định b ghi $-3$ là Sai (S).',
        result: 'b) Sai'
      },
      {
        order: 3,
        title: 'Đánh giá khẳng định c',
        explanation: 'Độ dài $AB = \\sqrt{(-3)^2 + (-2)^2} = \\sqrt{13}$. Độ dài $AC = \\sqrt{3^2 + (-2)^2} = \\sqrt{13}$. Vì $AB = AC$ nên tam giác ABC cân tại A. Đúng (Đ).',
        result: 'c) Đúng'
      },
      {
        order: 4,
        title: 'Đánh giá khẳng định d',
        explanation: 'Gọi $H(1; y)$ là trực tâm. Ta có $\\vec{BH} = (3; y - 1)$ vuông góc $\\vec{AC} = (3; -2) \\Rightarrow 3(3) - 2(y - 1) = 0 \\Rightarrow 9 - 2y + 2 = 0 \\Rightarrow y = 11/2$. Trực tâm $H(1; \\frac{11}{2})$. Đúng (Đ).',
        result: 'd) Đúng'
      }
    ],
    finalAnswer: 'a: Đ; b: S; c: Đ; d: Đ',
    commonMistakes: ['Tính nhầm tích vô hướng của hai vectơ dẫn đến chọn sai phương án b.'],
    reviewSuggestions: ['Vẽ phác họa tọa độ các điểm trên mặt phẳng tọa độ để trực quan hóa tính đối xứng của tam giác cân.']
  },
  {
    id: 'mock-math10-s69',
    questionId: 'mock-math10-q69',
    recognition: 'Biện luận số lượng giá trị nguyên m để hai tập hợp rời nhau.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm khoảng m để hai tập rời nhau',
        explanation: 'Để $A = [m - 1; m + 3]$ và $B = [1; 5]$ rời nhau, ta cần:\n- Hoặc $m + 3 < 1 \\Rightarrow m < -2$.\n- Hoặc $m - 1 > 5 \\Rightarrow m > 6$.',
        result: 'm < -2 hoặc m > 6'
      },
      {
        order: 2,
        title: 'Đếm số lượng giá trị nguyên m thuộc [-5; 10]',
        explanation: 'Các số nguyên thỏa mãn là:\n- Từ $-5$ đến $-3$: $\\{-5; -4; -3\\}$ (gồm 3 giá trị).\n- Từ $7$ đến $10$: $\\{7; 8; 9; 10\\}$ (gồm 4 giá trị).\nTổng cộng có $3 + 4 = 7$ giá trị nguyên.',
        result: '7'
      }
    ],
    finalAnswer: '7',
    commonMistakes: ['Đếm thiếu các giá trị nguyên âm hoặc lấy nhầm biên rời nhau chứa dấu bằng.'],
    reviewSuggestions: ['Ghi danh sách cụ thể các phần tử số nguyên thỏa mãn điều kiện để đối chiếu đếm không sai sót.']
  },
  {
    id: 'mock-math10-s70',
    questionId: 'mock-math10-q70',
    recognition: 'Xác định phương trình parabol qua đỉnh và một điểm đi qua.',
    detailedSteps: [
      {
        order: 1,
        title: 'Sử dụng hoành độ và tung độ đỉnh',
        explanation: 'Đỉnh $I(2; -1)$ cho $-\\frac{b}{2a}=2 \\Rightarrow b=-4a$. Thay tọa độ đỉnh vào phương trình: $4a+2b+3=-1 \\Rightarrow 2a+b=-2$.',
        result: 'b=-4a và 2a+b=-2'
      },
      {
        order: 2,
        title: 'Giải hệ tìm hệ số a và b',
        explanation: 'Thay $b=-4a$ vào $2a+b=-2$: $2a-4a=-2 \\Rightarrow a=1$, suy ra $b=-4$. Khi đó $f(1)=1-4+3=0$, đúng với điểm $M(1;0)$.',
        result: 'x^2-4x+3'
      }
    ],
    finalAnswer: 'x^2-4x+3',
    commonMistakes: ['Thay sai công thức tọa độ đỉnh parabol.'],
    reviewSuggestions: ['Kiểm tra lại bằng cách thay tọa độ đỉnh I(2; -1) và điểm M(1; 6) trực tiếp vào hàm số xem có thỏa mãn không.']
  },
  {
    id: 'mock-math10-s71',
    questionId: 'mock-math10-q71',
    recognition: 'Bài toán thực tế tìm mức giảm giá bán để tối đa hóa doanh thu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Lập hàm doanh thu R(x) theo số lần giảm giá',
        explanation: 'Gọi x là số lần giảm giá 500 nghìn đồng. Giá mới là $12 - 0.5x$, số lượng mới là $40 + 5x$.\nHàm doanh thu: $R(x) = (12 - 0.5x)(40 + 5x) = -2.5x^2 + 40x + 480$.',
        result: 'R(x) = -2.5x^2 + 40x + 480'
      },
      {
        order: 2,
        title: 'Tìm cực đại doanh thu',
        explanation: 'Hàm số bậc hai đạt cực đại tại hoành độ đỉnh $x = -\\frac{40}{2(-2.5)} = 8$ (lần). Số tiền cần giảm là $8 \\cdot 0.5 = 4$ triệu đồng.',
        result: '4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Tính ra 8 (số lần giảm) mà quên nhân với mức giảm mỗi lần (0.5 triệu).'],
    reviewSuggestions: ['Hãy đọc kỹ câu hỏi yêu cầu tính mức giảm giá (số triệu đồng) chứ không phải tính số lần giảm giá.']
  },
  {
    id: 'mock-math10-s72',
    questionId: 'mock-math10-q72',
    recognition: 'Tính độ dài đường trung tuyến tam giác vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính cạnh huyền',
        explanation: 'Cạnh huyền $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{36 + 64} = 10$.',
        result: 'BC = 10'
      },
      {
        order: 2,
        title: 'Tính trung tuyến ứng với cạnh huyền',
        explanation: 'Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = BC/2 = 10/2 = 5$.',
        result: '5'
      }
    ],
    finalAnswer: '5',
    commonMistakes: ['Áp dụng công thức đường trung tuyến tổng quát quá phức tạp.'],
    reviewSuggestions: ['Nhận biết tam giác vuông để sử dụng ngay tính chất đường trung tuyến ứng với cạnh huyền.']
  },
  {
    id: 'mock-math10-s73',
    questionId: 'mock-math10-q73',
    recognition: 'Tính tích vô hướng của hai vectơ trong tam giác đều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Quy tích vô hướng về chung gốc',
        explanation: 'Ta có $\\vec{AB} \\cdot \\vec{BC} = -\\vec{BA} \\cdot \\vec{BC}$.',
        result: '-\\vec{BA} \\cdot \\vec{BC}'
      },
      {
        order: 2,
        title: 'Tính tích vô hướng',
        explanation: '$-BA \\cdot BC \\cdot \\cos 60^\\circ = -a \\cdot a \\cdot 0.5 = -0,5a^2$. Hệ số trước $a^2$ là -0,5.',
        result: '-0,5'
      }
    ],
    finalAnswer: '-0,5',
    commonMistakes: ['Quên đổi dấu khi chuyển tích vô hướng về chung gốc.'],
    reviewSuggestions: ['Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{BC}$ là $120^\\circ$ (góc ngoài tam giác đều), chứ không phải $60^\\circ$.']
  },
  {
    id: 'mock-math10-s74',
    questionId: 'mock-math10-q74',
    recognition: 'Tìm hoành độ điểm thuộc trục hoành Ox để tạo thành góc vuông.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập tọa độ và tính vectơ',
        explanation: 'C thuộc Ox nên $C(x; 0)$. Ta có $\\vec{CA} = (2 - x; 2)$ và $\\vec{CB} = (5 - x; 1)$.',
        result: 'CA = (2-x; 2), CB = (5-x; 1)'
      },
      {
        order: 2,
        title: 'Giải điều kiện vuông góc',
        explanation: '$\\vec{CA} \\cdot \\vec{CB} = 0 \\Leftrightarrow (x - 2)(x - 5) + 2 = 0 \\Leftrightarrow x^2 - 7x + 12 = 0 \\Leftrightarrow x = 3$ hoặc $x = 4$.\nDo đề bài yêu cầu $x > 3$, ta chọn $x = 4$.',
        result: 'x = 4'
      }
    ],
    finalAnswer: '4',
    commonMistakes: ['Lấy cả hai giá trị x = 3 và x = 4 mà bỏ qua điều kiện lọc x > 3.'],
    reviewSuggestions: ['Đọc kĩ điều kiện kèm theo của tham số hoặc tọa độ biến ở cuối đề bài để loại nghiệm chính xác.']
  }
];
