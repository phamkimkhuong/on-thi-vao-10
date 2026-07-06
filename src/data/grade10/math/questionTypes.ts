import { QuestionType } from '@/types';

export const g10MathQuestionTypes: QuestionType[] = [
  {
    id: 'math10-qt1',
    topicId: 'math10-t1',
    name: 'Giao, hợp và hiệu của các khoảng, đoạn số học',
    slug: 'giao-hop-hieu-khoang-doan',
    description: 'Tìm giao, hợp, hiệu của các tập hợp số biểu diễn dưới dạng khoảng, đoạn, nửa khoảng trên trục số. Đây là phần cơ bản xuất hiện trong tất cả các bài kiểm tra khảo sát chất lượng đầu năm lớp 10.',
    exampleQuestionId: 'math10-q1',
    recognitionSigns: [
      'Đề bài yêu cầu tìm tập hợp $A \\cap B$, $A \\cup B$, $A \\setminus B$ hoặc $C_{\\mathbb{R}}A$.',
      'Các tập hợp $A, B$ được cho dưới dạng khoảng $(a; b)$, đoạn $[a; b]$, hoặc nửa khoảng $[a; b)$, $(a; b]$.'
    ],
    solvingSteps: [
      'Bước 1: Vẽ trục số thực $\\mathbb{R}$.',
      'Bước 2: Biểu diễn các tập hợp trên cùng một trục số (sử dụng các ký hiệu ngoặc tròn, ngoặc vuông tương ứng).',
      'Bước 3: Dùng các quy tắc giao (lấy phần chung), hợp (lấy tất cả), hiệu (lấy phần thuộc tập này nhưng không thuộc tập kia) để xác định tập hợp kết quả.',
      'Bước 4: Viết kết quả dưới dạng khoảng, đoạn, nửa khoảng chuẩn.'
    ],
    commonMistakes: [
      'Lẫn lộn giữa ngoặc tròn (không lấy điểm biên) và ngoặc vuông (có lấy điểm biên).',
      'Khi tính hiệu $A \\setminus B$, quên đảo ngược dấu ngoặc tại các điểm biên của $B$.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt2',
    topicId: 'math10-t1',
    name: 'Tìm tham số m để giao của hai tập hợp số khác rỗng',
    slug: 'tim-m-giao-khac-rong',
    description: 'Bài toán nâng cao chứa tham số m liên quan đến điều kiện giao nhau khác rỗng hoặc tập hợp này là tập con của tập hợp kia.',
    exampleQuestionId: 'math10-q2',
    recognitionSigns: [
      'Đề bài cho các tập hợp chứa tham số m, ví dụ $A = [m; m+2]$, $B = (1; 3)$.',
      'Yêu cầu tìm tham số m để $A \\cap B \\neq \\varnothing$ hoặc $A \\subset B$.'
    ],
    solvingSteps: [
      'Bước 1: Xác định điều kiện tồn tại của các tập hợp (ví dụ đầu mút trái nhỏ hơn đầu mút phải).',
      'Bước 2: Sử dụng phương pháp phần bù (tìm điều kiện để giao nhau bằng rỗng $A \\cap B = \\varnothing$) sau đó lấy phủ định, hoặc biểu diễn trực tiếp trên trục số.',
      'Bước 3: Giải hệ bất phương trình chứa m thu được.',
      'Bước 4: Kết hợp điều kiện tồn tại và kết luận.'
    ],
    commonMistakes: [
      'Quên điều kiện tồn tại tập hợp (ví dụ $m \\le m+2$).',
      'Xét thiếu hoặc nhầm lẫn các dấu bằng tại các mốc biên giao nhau.'
    ],
    difficulty: 'hard',
    examFrequency: 'medium'
  },
  {
    id: 'math10-qt3',
    topicId: 'math10-t2',
    name: 'Xác định miền nghiệm và Bài toán tối ưu thực tế (Quy hoạch tuyến tính)',
    slug: 'mien-nghiem-bai-toan-toi-uu',
    description: 'Xác định miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ và tìm giá trị lớn nhất, nhỏ nhất của biểu thức F(x; y) để giải quyết các bài toán tối ưu trong sản xuất, kinh doanh.',
    exampleQuestionId: 'math10-q3',
    recognitionSigns: [
      'Hệ gồm từ 3 bất phương trình bậc nhất hai ẩn trở lên.',
      'Yêu cầu tìm giá trị lớn nhất hoặc nhỏ nhất của biểu thức $F(x; y) = ax + by$ trên miền nghiệm đó.'
    ],
    solvingSteps: [
      'Bước 1: Vẽ các đường thẳng tương ứng với các bất phương trình trong hệ trên mặt phẳng Oxy.',
      'Bước 2: Xác định miền nghiệm của từng bất phương trình và lấy giao để tìm miền nghiệm đa giác của hệ.',
      'Bước 3: Xác định tọa độ tất cả các đỉnh của đa giác miền nghiệm.',
      'Bước 4: Tính giá trị của biểu thức $F(x; y)$ tại tất cả các đỉnh này. Giá trị lớn nhất/nhỏ nhất sẽ đạt được tại một trong các đỉnh.'
    ],
    commonMistakes: [
      'Vẽ sai các đường thẳng hoặc xác định nhầm phía miền nghiệm.',
      'Tính sai tọa độ các giao điểm (đỉnh của đa giác).'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt4',
    topicId: 'math10-t3',
    name: 'Xác định Parabol và Giá trị lớn nhất, nhỏ nhất của hàm số bậc hai',
    slug: 'xac-dinh-parabol-cuc-tri',
    description: 'Tìm các hệ số a, b, c của parabol $y = ax^2 + bx + c$ dựa trên các yếu tố hình học cho trước (đỉnh, trục đối xứng, điểm đi qua) và ứng dụng tìm giá trị lớn nhất, nhỏ nhất trong bài toán thực tế.',
    exampleQuestionId: 'math10-q4',
    recognitionSigns: [
      'Yêu cầu lập phương trình parabol hoặc tìm đỉnh I.',
      'Yêu cầu tìm chiều cao lớn nhất, diện tích lớn nhất của một mô hình parabol thực tế (cổng parabol, quỹ đạo ném bóng).'
    ],
    solvingSteps: [
      'Bước 1: Thiết lập phương trình hàm số bậc hai $y = ax^2 + bx + c$ dựa trên tọa độ đỉnh $I(-b/2a; -\\Delta/4a)$ hoặc các điểm đi qua.',
      'Bước 2: Lập hệ phương trình tuyến tính đối với các hệ số a, b, c và giải hệ.',
      'Bước 3: Đối với bài toán cực trị thực tế, sử dụng tính chất biến thiên của hàm số bậc hai: đạt cực đại tại hoành độ đỉnh nếu $a < 0$, cực tiểu nếu $a > 0$.',
      'Bước 4: Trả lời câu hỏi kèm đơn vị đo.'
    ],
    commonMistakes: [
      'Nhớ nhầm công thức tọa độ đỉnh parabol, đặc biệt là hoành độ đỉnh $x_I = -b/2a$ (thành $b/2a$ hoặc $-b/a$).',
      'Không giới hạn điều kiện thực tế của biến số (ví dụ kích thước phải dương).'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt5',
    topicId: 'math10-t5',
    name: 'Phân tích vectơ và Chứng minh ba điểm thẳng hàng',
    slug: 'phan-tich-vecto-thang-hang',
    description: 'Biểu diễn một vectơ theo hai vectơ không cùng phương cho trước và ứng dụng biểu thức vectơ để chứng minh ba điểm thẳng hàng hoặc hai đường thẳng song song.',
    exampleQuestionId: 'math10-q5',
    recognitionSigns: [
      'Đề bài cho tam giác hoặc hình bình hành kèm theo các điểm chia đoạn thẳng theo tỷ số.',
      'Yêu cầu phân tích vectơ $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$, hoặc chứng minh ba điểm A, M, N thẳng hàng.'
    ],
    solvingSteps: [
      'Bước 1: Chọn hai vectơ cơ sở không cùng phương (ví dụ $\\vec{AB}, \\vec{AC}$ của tam giác ABC).',
      'Bước 2: Sử dụng quy tắc ba điểm, quy tắc hình bình hành và định nghĩa tích của vectơ với một số để biểu diễn các vectơ trung gian.',
      'Bước 3: Để chứng minh ba điểm X, Y, Z thẳng hàng, ta biểu diễn hai vectơ $\\vec{XY}$ và $\\vec{XZ}$ theo cặp vectơ cơ sở rồi chứng minh tồn tại hằng số k sao cho $\\vec{XY} = k\\vec{XZ}$.',
      'Bước 4: Kết luận.'
    ],
    commonMistakes: [
      'Cộng trừ các vectơ sai quy tắc (quy tắc chèn điểm).',
      'Nhầm lẫn chiều hướng và tỷ lệ độ dài của các vectơ (ví dụ $\\vec{MB} = -2\\vec{MC}$ viết nhầm thành $2\\vec{MC}$).'
    ],
    difficulty: 'hard',
    examFrequency: 'high'
  }
];
