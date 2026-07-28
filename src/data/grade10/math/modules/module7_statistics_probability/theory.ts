import type { QuestionTypeTheoryCheckpoint } from '@/types';

export const math10Qt11Theory: string[] = [
  '**1. Số đúng, số gần đúng và sai số tuyệt đối**\nNếu $a$ là giá trị đúng và $\\bar a$ là giá trị gần đúng thì sai số tuyệt đối:\n$$\\Delta_a=|a-\\bar a|$$\nKhi không biết $a$ nhưng biết $\\Delta_a\\le d$, viết $a=\\bar a\\pm d$ hoặc $a\\in[\\bar a-d;\\bar a+d]$.',
  '**2. Sai số tương đối**\nSai số tương đối đánh giá sai số so với quy mô đại lượng:\n$$\\delta_a=\\frac{\\Delta_a}{|a|}$$\nKhi giá trị đúng chưa biết, thường ước lượng bằng $\\delta_a\\approx\\Delta_a/|\\bar a|$; dạng phần trăm là $\\delta_a\\times100\\%$. Không dùng khi mẫu số bằng hoặc quá gần 0.',
  '**3. Làm tròn và độ chính xác**\nLàm tròn đến đơn vị $h$ tạo sai số do làm tròn không vượt quá $h/2$. Ví dụ làm tròn đến $0{,}1$ thì sai số tối đa là $0{,}05$. Chữ số ngay sau hàng giữ lại từ 5 trở lên thì tăng chữ số giữ lại một đơn vị.',
  '**4. Số trung bình cộng**\nVới mẫu $x_1,x_2,\\ldots,x_n$:\n$$\\bar x=\\frac{x_1+x_2+\\cdots+x_n}{n}$$\nNếu giá trị $x_i$ xuất hiện với tần số $n_i$:\n$$\\bar x=\\frac{\\sum n_ix_i}{\\sum n_i}$$\nMẫu số là tổng số quan sát, không phải số giá trị khác nhau.',
  '**5. Trung vị**\nSắp dữ liệu tăng dần. Nếu $n$ lẻ, trung vị $Q_2$ là giá trị ở vị trí $(n+1)/2$. Nếu $n$ chẵn, $Q_2$ là trung bình hai giá trị ở vị trí $n/2$ và $n/2+1$. Trung vị ít bị ảnh hưởng bởi giá trị quá lớn/nhỏ hơn trung bình.',
  '**6. Tứ phân vị theo quy ước của ngân hàng câu hỏi**\nSau khi sắp tăng: $Q_2$ là trung vị; $Q_1$ là trung vị nửa dưới; $Q_3$ là trung vị nửa trên. Khi $n$ lẻ, **bỏ $Q_2$ chung** trước khi chia hai nửa. Khi $n$ chẵn, chia mẫu thành hai nửa bằng nhau.',
  '**7. Mốt và lựa chọn đại lượng đại diện**\nMốt là giá trị có tần số lớn nhất; mẫu có thể không có mốt hoặc có nhiều mốt. Trung bình dùng toàn bộ số liệu nhưng nhạy với ngoại lệ; trung vị phù hợp dữ liệu lệch; mốt phù hợp khi cần giá trị xuất hiện phổ biến.',
  '**8. Quy trình xử lí dữ liệu**\nKiểm tra đơn vị; sắp xếp nếu tìm trung vị/tứ phân vị; đếm đúng $n$ hoặc tần số; chọn đúng đại lượng; tính; cuối cùng làm tròn theo yêu cầu và diễn giải trong bối cảnh.',
  '**9. Lỗi cần tránh**\n- Không sắp dữ liệu trước khi tìm trung vị, tứ phân vị.\n- Chia tổng cho số giá trị phân biệt.\n- Giữ trung vị chung trong hai nửa trái với quy ước đề.\n- Nhầm đơn vị làm tròn với số chữ số thập phân.\n- Gọi sai số tương đối là một đại lượng có đơn vị.'
];

export const math10Qt12Theory: string[] = [
  '**1. Khoảng biến thiên**\nVới mẫu đã sắp:\n$$R=x_{\\max}-x_{\\min}$$\n$R$ chỉ dùng hai giá trị biên nên rất nhạy với ngoại lệ. $R$ nhỏ thường biểu thị dữ liệu tập trung hơn, nhưng chưa phản ánh toàn bộ mẫu.',
  '**2. Khoảng tứ phân vị**\n$$IQR=Q_3-Q_1$$\n$IQR$ đo độ rộng của 50% dữ liệu giữa và ít bị ảnh hưởng bởi ngoại lệ hơn khoảng biến thiên. Phải tính $Q_1,Q_3$ theo cùng một quy ước tứ phân vị.',
  '**3. Quy tắc nhận diện ngoại lệ**\nCác ngưỡng hàng rào:\n$$L=Q_1-1{,}5IQR,\\qquad U=Q_3+1{,}5IQR$$\nGiá trị $x<L$ hoặc $x>U$ được xem là ngoại lệ theo quy tắc IQR. Giá trị đúng bằng hàng rào không bị đánh dấu.',
  '**4. Phương sai của mẫu số liệu theo chương trình**\nVới $n$ quan sát:\n$$s^2=\\frac1n\\sum_{i=1}^{n}(x_i-\\bar x)^2$$\nDạng tính nhanh:\n$$s^2=\\frac1n\\sum_{i=1}^{n}x_i^2-\\bar x^2$$\nNgân hàng câu hỏi này dùng công thức **chia cho $n$**, không dùng mẫu số $n-1$ của thống kê suy luận.',
  '**5. Dữ liệu có tần số**\nNếu $x_i$ có tần số $n_i$, tổng số quan sát $N=\\sum n_i$:\n$$s^2=\\frac1N\\sum n_i(x_i-\\bar x)^2$$\nMỗi độ lệch phải được tính theo trung bình chung và nhân đúng tần số.',
  '**6. Độ lệch chuẩn**\n$$s=\\sqrt{s^2}\\ge0$$\nĐộ lệch chuẩn có cùng đơn vị với dữ liệu; phương sai có đơn vị bình phương. Với các mẫu cùng đại lượng và cùng đơn vị, $s$ nhỏ hơn thường biểu thị ổn định/tập trung hơn quanh trung bình.',
  '**7. Ảnh hưởng của phép biến đổi**\nNếu mọi giá trị tăng thêm $c$, trung bình tăng $c$ nhưng phương sai và độ lệch chuẩn không đổi. Nếu mọi giá trị nhân $k$, phương sai nhân $k^2$ và độ lệch chuẩn nhân $|k|$.',
  '**8. So sánh và diễn giải**\nKhông chỉ nêu “mẫu A nhỏ hơn”; phải chỉ rõ đại lượng nào nhỏ hơn và kết luận mức phân tán. So sánh trực tiếp phương sai/độ lệch chuẩn chỉ hợp lí khi các mẫu dùng cùng đại lượng và đơn vị.',
  '**9. Lỗi cần tránh**\n- Quên bình phương độ lệch.\n- Chia cho $n-1$ trái quy ước đề.\n- Nhầm $s$ với $s^2$.\n- Quên căn khi hỏi độ lệch chuẩn.\n- Dùng trung bình để kết luận độ ổn định.\n- Cho giá trị bằng hàng rào là ngoại lệ.'
];

export const math10Qt13Theory: string[] = [
  '**1. Phép thử và không gian mẫu**\nPhép thử ngẫu nhiên có kết quả chưa biết trước. Mỗi kết quả sơ cấp phải được mô tả rõ; tập tất cả kết quả là không gian mẫu $\\Omega$. Biến cố $A$ là một tập con của $\\Omega$.',
  '**2. Kết quả có thứ tự**\nHai xúc xắc phân biệt cho kết quả $(i;j)$; $(1;2)$ và $(2;1)$ là hai kết quả khác nhau. Khi gieo nhiều lần, một kết quả là cả chuỗi theo đúng thứ tự thời gian.',
  '**3. Xác suất cổ điển**\nNếu $\\Omega$ hữu hạn và mọi kết quả sơ cấp đồng khả năng:\n$$P(A)=\\frac{n(A)}{n(\\Omega)}$$\nKhông được dùng tỉ số số phần tử nếu các kết quả trong không gian mẫu đã chọn không đồng khả năng.',
  '**4. Đếm không gian mẫu và biến cố**\nMô tả một kết quả trước, sau đó dùng quy tắc cộng, nhân, tổ hợp hoặc liệt kê. Tử số và mẫu số phải được đếm trên **cùng một mô hình kết quả**, cùng xét hoặc không xét thứ tự.',
  '**5. Biến cố đối**\nBiến cố đối $\\overline A=\\Omega\\setminus A$ thỏa:\n$$P(\\overline A)=1-P(A)$$\nDạng “ít nhất một” thường tính bằng 1 trừ xác suất “không có lần nào”.',
  '**6. Hợp và giao biến cố**\n$$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$$\nNếu $A,B$ xung khắc thì $A\\cap B=\\varnothing$ nên chỉ cộng. “Xung khắc” không đồng nghĩa “độc lập”.',
  '**7. Các phép thử độc lập lặp lại**\nNếu các lần thử độc lập và xác suất thất bại mỗi lần là $q$, xác suất thất bại cả $n$ lần là $q^n$. Vì vậy:\n$$P(\\text{ít nhất một lần thành công})=1-q^n$$\nChỉ được nhân xác suất khi tính độc lập đã được cho hoặc suy ra hợp lí từ mô hình.',
  '**8. Kiểm tra kết quả**\nLuôn có $0\\le P(A)\\le1$, $P(\\Omega)=1$, $P(\\varnothing)=0$. Biến cố có nhiều kết quả thuận lợi hơn trong cùng không gian đồng khả năng không thể có xác suất nhỏ hơn.',
  '**9. Lỗi cần tránh**\n- Chọn phần tử không gian mẫu không đồng khả năng.\n- Quên thứ tự khi phân biệt các lần gieo/vật gieo.\n- Cộng xác suất hai biến cố có giao.\n- Nhầm độc lập với xung khắc.\n- Tính “ít nhất một” bằng cách cộng chồng các trường hợp.\n- Đếm tử và mẫu theo hai quy ước khác nhau.'
];

export const g10MathModule7TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt11': math10Qt11Theory,
  'math10-qt12': math10Qt12Theory,
  'math10-qt13': math10Qt13Theory
};

export const g10MathModule7TheoryCheckpointsByQuestionTypeId: Record<
  string,
  QuestionTypeTheoryCheckpoint[]
> = {
  'math10-qt11': [
    {
      id: 'math10-check-qt11-1',
      question: 'Làm tròn đến đơn vị $0{,}1$ tạo sai số tuyệt đối tối đa bằng',
      options: ['$0{,}1$', '$0{,}05$', '$0{,}01$', '$0{,}5$'],
      correctAnswer: 'B',
      explanation: 'Sai số làm tròn tối đa bằng một nửa đơn vị làm tròn.'
    },
    {
      id: 'math10-check-qt11-2',
      question: 'Khi tính trung bình từ bảng tần số, mẫu số là',
      options: ['Số giá trị khác nhau', 'Tổng các giá trị', 'Tổng tần số', 'Tần số lớn nhất'],
      correctAnswer: 'C',
      explanation: 'Tổng tần số chính là tổng số quan sát của mẫu.'
    },
    {
      id: 'math10-check-qt11-3',
      question: 'Muốn tìm trung vị, thao tác bắt buộc trước tiên là',
      options: ['Bình phương số liệu', 'Sắp xếp số liệu', 'Loại mọi ngoại lệ', 'Tính phương sai'],
      correctAnswer: 'B',
      explanation: 'Trung vị và tứ phân vị phụ thuộc vị trí trong mẫu đã sắp.'
    }
  ],
  'math10-qt12': [
    {
      id: 'math10-check-qt12-1',
      question: 'Giá trị đúng bằng hàng rào trên $Q_3+1{,}5IQR$',
      options: ['Luôn là ngoại lệ', 'Không bị xem là ngoại lệ theo quy tắc IQR', 'Phải xóa khỏi mẫu', 'Là trung vị'],
      correctAnswer: 'B',
      explanation: 'Chỉ các giá trị lớn hơn hàng rào trên hoặc nhỏ hơn hàng rào dưới mới là ngoại lệ.'
    },
    {
      id: 'math10-check-qt12-2',
      question: 'Nếu mọi số liệu đều tăng thêm 7 thì độ lệch chuẩn',
      options: ['Tăng 7', 'Giảm 7', 'Không đổi', 'Nhân 49'],
      correctAnswer: 'C',
      explanation: 'Tịnh tiến toàn bộ mẫu không làm thay đổi các độ lệch so với trung bình.'
    },
    {
      id: 'math10-check-qt12-3',
      question: 'Hai mẫu cùng đại lượng và đơn vị; mẫu có độ lệch chuẩn nhỏ hơn thường',
      options: ['Có trung bình lớn hơn', 'Ổn định hơn', 'Có nhiều quan sát hơn', 'Luôn có ngoại lệ'],
      correctAnswer: 'B',
      explanation: 'Độ lệch chuẩn nhỏ biểu thị dữ liệu tập trung hơn quanh trung bình.'
    }
  ],
  'math10-qt13': [
    {
      id: 'math10-check-qt13-1',
      question: 'Gieo hai xúc xắc phân biệt, $(1;2)$ và $(2;1)$',
      options: ['Là cùng một kết quả', 'Là hai kết quả khác nhau', 'Không đồng khả năng', 'Đều không thuộc không gian mẫu'],
      correctAnswer: 'B',
      explanation: 'Hai vị trí ứng với hai xúc xắc phân biệt nên thứ tự tạo kết quả khác nhau.'
    },
    {
      id: 'math10-check-qt13-2',
      question: 'Công thức $P(A)=n(A)/n(\\Omega)$ dùng trực tiếp khi',
      options: ['Không gian mẫu vô hạn', 'Các kết quả sơ cấp đồng khả năng', 'A chắc chắn xảy ra', 'A và B độc lập'],
      correctAnswer: 'B',
      explanation: 'Đây là điều kiện cốt lõi của mô hình xác suất cổ điển.'
    },
    {
      id: 'math10-check-qt13-3',
      question: 'Xác suất có ít nhất một lần thành công trong n phép thử độc lập, xác suất thất bại mỗi lần là q, bằng',
      options: ['$q^n$', '$1-q^n$', '$(1-q)^n$', '$nq$'],
      correctAnswer: 'B',
      explanation: 'Dùng biến cố đối: 1 trừ xác suất thất bại trong cả n lần.'
    }
  ]
};
