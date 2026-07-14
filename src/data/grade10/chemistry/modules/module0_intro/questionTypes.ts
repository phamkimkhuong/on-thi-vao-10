import type { QuestionType } from '@/types';

export const m0QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt-intro-object',
    topicId: 'chem10-t0',
    name: 'Hóa học nghiên cứu điều gì?',
    slug: 'hoa-hoc-nghien-cuu-dieu-gi',
    description: 'Phân biệt vật thể với chất và nhận diện bốn góc nhìn của hóa học: thành phần, cấu trúc, tính chất và sự biến đổi của chất.',
    exampleQuestionId: 'chem10-q-intro-object-1',
    difficulty: 'easy',
    examFrequency: 'medium',
    theory: [
      '**1. Đối tượng nghiên cứu của hóa học**:\nHóa học nghiên cứu **thành phần**, **cấu trúc**, **tính chất** và **sự biến đổi** của chất. Một câu hỏi hóa học tốt không chỉ hỏi “chất này tên gì?” mà còn tìm mối quan hệ giữa cấu trúc và hành vi của chất.',
      '**2. Phân biệt vật thể và chất**:\nVật thể là đối tượng cụ thể; chất là vật liệu tạo nên vật thể. Ví dụ, “cốc” là vật thể, còn thủy tinh hoặc nhựa là chất tạo nên cốc. Một vật thể có thể gồm nhiều chất và một chất có thể tạo nên nhiều vật thể.',
      '**3. Ba tầng biểu diễn hóa học**:\n- **Vĩ mô**: điều quan sát hoặc đo được như màu, khí, kết tủa, nhiệt độ.\n- **Vi mô**: nguyên tử, ion, phân tử và tương tác giữa chúng.\n- **Ký hiệu**: công thức, phương trình, bảng và đồ thị.\nHọc tốt Hóa học là chuyển đổi đúng giữa cả ba tầng.'
    ],
    subTypes: [
      { name: 'Phân biệt vật thể và chất', example: 'Một dây điện gồm lõi đồng và lớp nhựa bọc ngoài.', note: 'Dây điện là vật thể; đồng và nhựa là các chất cấu tạo nên vật thể.' },
      { name: 'Phân loại câu hỏi nghiên cứu', example: 'Vì sao muối tan trong nước?', note: 'Câu hỏi liên hệ tính chất quan sát được với cấu trúc và tương tác vi mô.' }
    ],
    recognitionSigns: ['Câu hỏi yêu cầu phân biệt vật thể với chất.', 'Câu hỏi đề cập thành phần, cấu trúc, tính chất hoặc sự biến đổi.', 'Cần nối hiện tượng vĩ mô với mô hình vi mô hoặc ký hiệu hóa học.'],
    solvingSteps: ['Bước 1: Xác định đối tượng được nói tới là vật thể hay chất.', 'Bước 2: Xác định câu hỏi đang xét thành phần, cấu trúc, tính chất hay sự biến đổi.', 'Bước 3: Chỉ kết luận trong phạm vi bằng chứng được cung cấp; không biến suy đoán vi mô thành điều đã quan sát.'],
    commonMistakes: ['Đồng nhất vật thể với chất tạo nên nó.', 'Cho rằng hóa học chỉ nghiên cứu phản ứng hoặc hóa chất nhân tạo.', 'Trộn lẫn điều quan sát được với lời giải thích ở cấp độ hạt.']
  },
  {
    id: 'chem10-qt-intro-inquiry',
    topicId: 'chem10-t0',
    name: 'Quan sát, bằng chứng và kết luận',
    slug: 'quan-sat-bang-chung-ket-luan',
    description: 'Phân biệt quan sát với suy luận, xác định biến thí nghiệm và đánh giá kết luận có thực sự được dữ liệu hỗ trợ hay không.',
    exampleQuestionId: 'chem10-q-intro-inquiry-1',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Quan sát không phải suy luận**:\nQuan sát là điều đo hoặc ghi nhận trực tiếp, ví dụ “nhiệt độ tăng từ 25 °C lên 31 °C”. Suy luận là cách giải thích dữ kiện, ví dụ “quá trình đã giải phóng nhiệt”. Một suy luận phải dựa trên quan sát nhưng không được viết như thể nó là dữ kiện trực tiếp.',
      '**2. Ba loại biến trong thí nghiệm**:\n- **Biến độc lập**: yếu tố người nghiên cứu chủ động thay đổi.\n- **Biến phụ thuộc**: đại lượng được đo để xem ảnh hưởng.\n- **Biến kiểm soát**: những yếu tố cần giữ giống nhau để so sánh công bằng.',
      '**3. Kết luận đúng phạm vi**:\nKết luận phải trả lời đúng câu hỏi nghiên cứu, phù hợp dữ liệu và nêu giới hạn khi cần. Phản ứng nhanh hơn không tự động có nghĩa là tạo nhiều sản phẩm cuối cùng hơn.'
    ],
    subTypes: [
      { name: 'Phân biệt quan sát và suy luận', example: 'Dung dịch chuyển từ không màu sang hồng.', note: 'Đây là quan sát. “Đã tạo ra chất mới màu hồng” là suy luận cần thêm bằng chứng.' },
      { name: 'Xác định biến thí nghiệm', example: 'Đo thời gian viên sủi tan ở ba nhiệt độ nước.', note: 'Nhiệt độ là biến độc lập; thời gian là biến phụ thuộc; lượng nước và kích thước viên là biến kiểm soát.' }
    ],
    recognitionSigns: ['Đề mô tả một thí nghiệm hoặc bảng dữ liệu.', 'Yêu cầu xác định biến, giả thuyết, quan sát hoặc kết luận.', 'Cần đánh giá dữ liệu có đủ chứng minh một khẳng định hay không.'],
    solvingSteps: ['Bước 1: Viết chính xác câu hỏi mà thí nghiệm muốn trả lời.', 'Bước 2: Xác định yếu tố được thay đổi, đại lượng được đo và các yếu tố phải giữ cố định.', 'Bước 3: Tách dữ kiện quan sát khỏi cách giải thích.', 'Bước 4: Chọn kết luận hẹp nhất nhưng vẫn trả lời được câu hỏi nghiên cứu.'],
    commonMistakes: ['Gọi suy luận là quan sát.', 'Thay đổi đồng thời nhiều biến nhưng vẫn quy kết kết quả cho một biến.', 'Kết luận về lượng sản phẩm chỉ từ dữ liệu tốc độ phản ứng.', 'Dùng một lần đo duy nhất để khẳng định quy luật tuyệt đối.']
  },
  {
    id: 'chem10-qt01',
    topicId: 'chem10-t0',
    name: 'Cân bằng phương trình & Bảo toàn khối lượng',
    slug: 'can-bang-phuong-trinh-bao-toan-khoi-luong',
    description: 'Rèn luyện kỹ năng cân bằng nhanh phương trình hóa học dạng đơn giản và áp dụng định luật bảo toàn khối lượng để tính khối lượng các chất trong phản ứng.',
    exampleQuestionId: 'chem10-q01',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Định luật bảo toàn khối lượng**:\n- Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng.\n- Ví dụ: Với phản ứng $A + B \\rightarrow C + D$, ta luôn có: $m_A + m_B = m_C + m_D$.',
      '**2. Phương pháp cân bằng phương trình hóa học**:\n- Cân bằng số nguyên tử của mỗi nguyên tố ở hai vế sao cho bằng nhau.\n- *Quy tắc ưu tiên*: Cân bằng kim loại trước $\\rightarrow$ phi kim khác $\\rightarrow$ Hydrogen $\\rightarrow$ Oxygen.'
    ],
    subTypes: [
      {
        name: 'Cân bằng phương trình bằng phương pháp chẵn - lẻ hoặc đại số',
        example: 'Cân bằng phản ứng: $\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_3\\text{O}_4$.',
        note: 'Vế phải có 4 nguyên tử O, vế trái có 2 nguyên tử O. Thêm hệ số 2 vào trước $\\text{O}_2$. Vế phải có 3 nguyên tử Fe, thêm hệ số 3 trước $\\text{Fe}$ vế trái. Ta được: $3\\text{Fe} + 2\\text{O}_2 \\rightarrow \\text{Fe}_3\\text{O}_4$.'
      },
      {
        name: 'Tính khối lượng bằng bảo toàn khối lượng',
        example: 'Đốt cháy hoàn toàn 2,4 g Magnesium trong khí Oxygen thu được 4,0 g Magnesium oxide. Tính khối lượng khí Oxygen đã tham gia phản ứng.',
        note: 'Áp dụng định luật BTKL: $m_{\\text{Mg}} + m_{\\text{O}_2} = m_{\\text{MgO}} \\Rightarrow 2,4 + m_{\\text{O}_2} = 4,0 \\Rightarrow m_{\\text{O}_2} = 1,6\\text{ g}$.'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu điền hệ số cân bằng của phản ứng hóa học.',
      'Cho khối lượng của hầu hết các chất tham gia và sản phẩm, yêu cầu tính khối lượng chất còn lại.'
    ],
    solvingSteps: [
      'Bước 1: Liệt kê số lượng nguyên tử mỗi nguyên tố ở cả hai vế.',
      'Bước 2: Tìm hệ số thích hợp điền vào trước công thức hóa học để làm cân bằng số nguyên tử.',
      'Bước 3: Lập phương trình khối lượng theo định luật bảo toàn khối lượng, thay các giá trị đã biết và tìm giá trị cần tính.'
    ],
    commonMistakes: [
      'Thay đổi các chỉ số dưới trong công thức hóa học khi cân bằng (ví dụ: biến $\\text{O}_2$ thành $\\text{O}_3$ để cân bằng, đây là lỗi sai bản chất nghiêm trọng).',
      'Không đổi đơn vị đồng nhất trước khi tính toán khối lượng.'
    ]
  },
  {
    id: 'chem10-qt02',
    topicId: 'chem10-t0',
    name: 'Mol, Khối lượng mol & Thể tích chất khí',
    slug: 'mol-khoi-luong-mol-the-tich-khi',
    description: 'Chuyển đổi qua lại giữa số mol (n), khối lượng (m), số hạt vi mô (N) và thể tích khí (V) ở các điều kiện khác nhau.',
    exampleQuestionId: 'chem10-q02',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Khái niệm Mol**:\n- Mol là lượng chất chứa $6,022 \\cdot 10^{23}$ hạt vi mô (nguyên tử hoặc phân tử) của chất đó. Số $N_A = 6,022 \\cdot 10^{23}$ gọi là hằng số Avogadro.',
      '**2. Công thức chuyển đổi**:\n- Tính số mol theo khối lượng: $n = \\frac{m}{M}$ (trong đó $M$ là khối lượng mol, đơn vị g/mol).\n- Tính thể tích khí ở điều kiện chuẩn (đkc, 25 °C và 1 bar): $V = n \\cdot 24,79$ (lít).\n*Lưu ý*: Ở điều kiện tiêu chuẩn cũ (đktc, 0 °C và 1 atm) thể tích là $n \\cdot 22,4$. Chương trình mới 2018 sử dụng chuẩn đkc là $24,79$.'
    ],
    subTypes: [
      {
        name: 'Tính số mol và khối lượng chất',
        example: 'Tính số mol có trong 8 g khí Oxygen ($\\text{O}_2$, $M=32\\text{ g/mol}$).',
        note: '$n = \\frac{m}{M} = \\frac{8}{32} = 0,25\\text{ mol}$.'
      },
      {
        name: 'Tính thể tích chất khí ở điều kiện chuẩn (24,79 L)',
        example: 'Tính thể tích của 0,5 mol khí Carbon dioxide ($\\text{CO}_2$) ở điều kiện chuẩn.',
        note: 'Áp dụng công thức đkc: $V = n \\cdot 24,79 = 0,5 \\cdot 24,79 = 12,395\\text{ lít}$.'
      }
    ],
    recognitionSigns: [
      'Cho khối lượng chất và yêu cầu tìm số mol hoặc thể tích khí.',
      'Đề bài dùng cụm từ "điều kiện chuẩn" hoặc "đkc" để tính thể tích khí.'
    ],
    solvingSteps: [
      'Bước 1: Tính khối lượng mol (M) của chất bằng cách cộng nguyên tử khối của các nguyên tố trong phân thức.',
      'Bước 2: Sử dụng công thức chuyển đổi phù hợp để tìm đại lượng yêu cầu.',
      'Bước 3: Chú ý nhân/chia đúng hằng số thể tích $24,79$ đối với chất khí ở điều kiện chuẩn mới.'
    ],
    commonMistakes: [
      'Vẫn sử dụng hằng số $22,4$ của chương trình cũ thay vì $24,79$ ở điều kiện chuẩn mới.',
      'Nhầm lẫn khối lượng mol nguyên tử của khí lưỡng nguyên tử (ví dụ tính $M_{\\text{O}_2} = 16$ thay vì $32$).'
    ]
  },
  {
    id: 'chem10-qt03',
    topicId: 'chem10-t0',
    name: 'Hóa trị & Công thức hóa học của hợp chất',
    slug: 'hoa-tri-cong-thuc-hoa-hoc',
    description: 'Xác định hóa trị của nguyên tố trong hợp chất và lập công thức hóa học dựa trên quy tắc hóa trị.',
    exampleQuestionId: 'chem10-q03',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Định nghĩa Hóa trị**:\n- Hóa trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Quy ước H chọn làm đơn vị (hóa trị I), O có hóa trị II.',
      '**2. Quy tắc hóa trị**:\n- Trong công thức hóa học của hợp chất hai nguyên tố $\\text{A}_x\\text{B}_y$ (với A có hóa trị $a$, B có hóa trị $b$): \n  $$x \\cdot a = y \\cdot b$$\n- Tỉ lệ chỉ số: $\\frac{x}{y} = \\frac{b}{a} = \\frac{b\'}{a\'}$ (rút gọn thành phân số tối giản).'
    ],
    subTypes: [
      {
        name: 'Lập công thức hóa học từ hóa trị',
        example: 'Lập công thức hóa học của hợp chất tạo bởi Aluminium (Al hóa trị III) và Oxygen (O hóa trị II).',
        note: 'Gọi công thức là $\\text{Al}_x\\text{O}_y$. Ta có: $x \\cdot \\text{III} = y \\cdot \\text{II} \\Rightarrow \\frac{x}{y} = \\frac{2}{3}$. Vậy công thức là $\\text{Al}_2\\text{O}_3$.'
      }
    ],
    recognitionSigns: [
      'Cho biết hóa trị của các nguyên tố hoặc nhóm nguyên tử và yêu cầu viết công thức hóa học đúng.',
      'Yêu cầu xác định hóa trị của một nguyên tố trong một công thức chất cho trước.'
    ],
    solvingSteps: [
      'Bước 1: Viết công thức dạng tổng quát $\\text{A}_x\\text{B}_y$.',
      'Bước 2: Lập phương trình quy tắc hóa trị $x \\cdot a = y \\cdot b$.',
      'Bước 3: Lập tỉ lệ $\\frac{x}{y}$ và rút gọn về tỉ số tối giản để chọn chỉ số $x, y$ nhỏ nhất.'
    ],
    commonMistakes: [
      'Không rút gọn chỉ số xuống tối giản (ví dụ viết $\\text{S}_2\\text{O}_4$ thay vì $\\text{SO}_2$ cho hợp chất Lưu huỳnh hóa trị IV và Oxygen).'
    ]
  },
  {
    id: 'chem10-qt04',
    topicId: 'chem10-t0',
    name: 'Nồng độ dung dịch & Phép toán tỉ lệ hóa học',
    slug: 'nong-do-dung-dich-toan-ti-le',
    description: 'Tính toán nồng độ phần trăm (C%), nồng độ mol (CM) của dung dịch và thực hiện các phép toán tỉ lệ lượng chất trong phương trình phản ứng.',
    exampleQuestionId: 'chem10-q04',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Nồng độ phần trăm ($C\\%$)**:\n- Biểu thị số gam chất tan có trong 100 gam dung dịch:\n  $$C\\% = \\frac{m_{ct}}{m_{dd}} \\cdot 100\\% \\quad (\\text{với } m_{dd} = m_{ct} + m_{dm})$$',
      '**2. Nồng độ mol ($C_M$)**:\n- Biểu thị số mol chất tan có trong 1 lít dung dịch:\n  $$C_M = \\frac{n}{V_{dd}} \\quad (\\text{đơn vị mol/L hoặc M})$$',
      '**3. Toán tỉ lệ phương trình**:\n- Dựa trên hệ số cân bằng để lập tỉ số mol giữa các chất phản ứng để xác định chất dư, chất hết và tính lượng sản phẩm sinh ra.'
    ],
    subTypes: [
      {
        name: 'Tính nồng độ dung dịch',
        example: 'Hòa tan 10 g muối ăn vào 90 g nước. Tính nồng độ phần trăm của dung dịch muối thu được.',
        note: '$m_{dd} = 10 + 90 = 100\\text{ g}$. $C\\% = \\frac{10}{100} \\cdot 100\\% = 10\\%$.'
      },
      {
        name: 'Tính theo phương trình hóa học (tìm chất dư - hết)',
        example: 'Cho 0,2 mol Zn phản ứng với 0,3 mol HCl theo phương trình: $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$. Tính số mol khí $\\text{H}_2$ thu được.',
        note: 'Xét tỉ lệ: Zn là $\\frac{0,2}{1} = 0,2$, HCl là $\\frac{0,3}{2} = 0,15$. Vì $0,15 < 0,2$ nên HCl hết, Zn dư. Số mol $\\text{H}_2$ tính theo HCl: $n_{\\text{H}_2} = \\frac{1}{2} n_{\\text{HCl}} = 0,15\\text{ mol}$.'
      }
    ],
    recognitionSigns: [
      'Cho khối lượng chất tan và dung dịch, yêu cầu tính C% hoặc CM.',
      'Cho lượng của cả hai chất tham gia phản ứng và yêu cầu tính sản phẩm (bài toán chất dư).'
    ],
    solvingSteps: [
      'Bước 1: Chuyển đổi tất cả các dữ liệu khối lượng, thể tích về số mol.',
      'Bước 2: Viết phương trình phản ứng và cân bằng chính xác.',
      'Bước 3: Lập tỉ số $\\frac{n_{ban \\ dau}}{he \\ so}$ của các chất tham gia để so sánh và xác định chất phản ứng hết.',
      'Bước 4: Sử dụng số mol của chất phản ứng hết để tính lượng sản phẩm hoặc nồng độ dung dịch sau phản ứng.'
    ],
    commonMistakes: [
      'Tính sai khối lượng dung dịch ($m_{dd}$), quên cộng khối lượng chất tan vào dung môi nước, hoặc không trừ khối lượng kết tủa, khí thoát ra.',
      'Tính sản phẩm theo chất dư thay vì chất phản ứng hết.'
    ]
  }
];
