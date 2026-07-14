import { QuestionType, Question, Solution } from '@/types';

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

export const m0Questions: Question[] = [
  {
    id: 'chem10-q-intro-object-1', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Trong phát biểu “Một chai nước khoáng gồm vỏ chai bằng nhựa và phần nước chứa các chất khoáng hòa tan”, cách phân loại nào đúng?\nA. Chai nước khoáng, nhựa và nước đều là vật thể.\nB. Chai nước khoáng là vật thể; nhựa, nước và các chất khoáng là những chất.\nC. Nhựa là vật thể; chai nước khoáng và nước là những chất.\nD. Chỉ những chất khoáng mới thuộc phạm vi nghiên cứu của hóa học.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-object-2', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Khi viên sủi được thả vào nước, học sinh ghi: “Có nhiều bọt khí thoát ra; các tiểu phân trong viên sủi đã phản ứng và tạo thành chất khí.” Phần nào là quan sát trực tiếp?\nA. Có nhiều bọt khí thoát ra.\nB. Các tiểu phân đã phản ứng.\nC. Một chất khí mới chắc chắn đã được tạo thành.\nD. Cả ba ý đều là quan sát trực tiếp.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-inquiry-1', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Một học sinh khảo sát ảnh hưởng của nhiệt độ nước đến thời gian viên sủi phản ứng hết. Em dùng các cốc nước ở 10 °C, 30 °C và 50 °C, giữ nguyên lượng nước và loại viên sủi. Biến phụ thuộc trong thí nghiệm là gì?\nA. Nhiệt độ nước.\nB. Thời gian viên sủi phản ứng hết.\nC. Lượng nước trong mỗi cốc.\nD. Loại viên sủi.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-inquiry-2', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Trong thí nghiệm trên, viên sủi phản ứng hết nhanh nhất ở 50 °C. Kết luận nào phù hợp nhất với dữ liệu?\nA. Nhiệt độ cao làm phản ứng nhanh hơn trong phạm vi điều kiện đã khảo sát.\nB. Nước 50 °C luôn tạo ra nhiều sản phẩm hơn nước 10 °C.\nC. Mọi phản ứng hóa học đều nhanh nhất ở đúng 50 °C.\nD. Nhiệt độ là yếu tố duy nhất ảnh hưởng đến mọi phản ứng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt01',
    content: 'Đốt cháy hoàn toàn $m$ gam kim loại Magnesium (Mg) trong khí Oxygen ($O_2$) dư, thu thu được 8,0 gam hợp chất Magnesium oxide (MgO). Biết khối lượng khí Oxygen tham gia phản ứng là 3,2 gam. Hãy tính giá trị của $m$ (khối lượng kim loại Mg ban đầu).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '4.8',
    acceptedAnswers: ['4.8', '4,8'],
    validatorType: 'number'
  },
  {
    id: 'chem10-q02',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt02',
    content: 'Hãy tính thể tích khí Oxygen ($O_2$) đo ở điều kiện chuẩn (đkc: 25 °C, 1 bar) tương ứng với lượng chất là 0,4 mol.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '9.916',
    acceptedAnswers: ['9.916', '9,916'],
    validatorType: 'number'
  },
  {
    id: 'chem10-q03',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt03',
    content: 'Hợp chất X được tạo bởi nguyên tố Phosphorus (hóa trị V) và Oxygen (hóa trị II). Công thức hóa học viết đúng của hợp chất X theo quy tắc hóa trị là:\nA. PO\nB. P2O5\nC. P5O2\nD. PO5',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q04',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt04',
    content: 'Cho 0,1 mol kim loại Iron (Fe) tác dụng với dung dịch chứa 0,3 mol Acid hydrochloric (HCl) theo phương trình phản ứng: Fe + 2HCl -> FeCl2 + H2. Sau khi phản ứng hoàn toàn, số mol khí Hydrogen (H2) sinh ra là bao nhiêu?',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '0.1',
    acceptedAnswers: ['0.1', '0,1'],
    validatorType: 'number'
  },
  {
    id: 'chem10-qintro-object-3',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Trong chiếc thìa bằng thép không gỉ, cách gọi nào đúng?\nA. Thìa là chất, thép là vật thể.\nB. Thìa là vật thể, thép không gỉ là chất tạo nên vật thể.\nC. Cả thìa và thép đều là nguyên tố.\nD. Thép chỉ là một biến đổi hóa học.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-object-4',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Câu hỏi nào tập trung vào cấu trúc của chất?\nA. Nước sôi ở nhiệt độ nào?\nB. Phân tử nước gồm các nguyên tử liên kết và sắp xếp ra sao?\nC. Có bao nhiêu mililít nước trong cốc?\nD. Cốc có chiều cao bao nhiêu?',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-inquiry-3',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Muốn khảo sát ảnh hưởng của diện tích bề mặt đá vôi đến tốc độ phản ứng với acid, thiết kế nào công bằng nhất?\nA. Đổi cả khối lượng, nhiệt độ và kích thước đá.\nB. Dùng cùng khối lượng đá, cùng acid và nhiệt độ; chỉ thay kích thước hạt.\nC. Chỉ quan sát một mẫu bột đá.\nD. Dùng hai loại acid khác nhau.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-inquiry-4',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Ba lần đo thời gian phản ứng cho kết quả 42 s, 41 s và 88 s. Cách xử lí hợp lí nhất là gì?\nA. Bỏ 88 s ngay mà không kiểm tra.\nB. Chỉ dùng lần 88 s.\nC. Kiểm tra nguyên nhân ngoại lệ, lặp lại phép đo rồi mới quyết định cách xử lí.\nD. Cộng ba số và khẳng định tuyệt đối.',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Hệ số nguyên tối giản của phương trình $Al+O_2\\rightarrow Al_2O_3$ là:\nA. 2, 1, 1\nB. 4, 3, 2\nC. 2, 3, 1\nD. 1, 1, 1',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Nhiệt phân 25,0 g chất A thu được 14,0 g chất rắn B và khí C. Khối lượng C là:\nA. 9,0 g\nB. 11,0 g\nC. 14,0 g\nD. 39,0 g',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Khi cân bằng phương trình, thao tác nào làm thay đổi bản chất chất?\nA. Đặt hệ số 2 trước $H_2O$.\nB. Đổi $H_2O$ thành $H_2O_2$.\nC. Rút gọn các hệ số cùng chia hết.\nD. Kiểm tra số nguyên tử hai vế.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Số mol trong 11 g $CO_2$ ($M=44$ g/mol) là:\nA. 0,20 mol\nB. 0,25 mol\nC. 2,5 mol\nD. 4,0 mol',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Khối lượng của 0,30 mol $O_2$ là:\nA. 4,8 g\nB. 9,6 g\nC. 16,0 g\nD. 32,0 g',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Ở 25 °C và 1 bar, 0,20 mol khí có thể tích gần nhất là:\nA. 4,48 L\nB. 4,96 L\nC. 22,40 L\nD. 24,79 L',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Công thức đúng của hợp chất tạo bởi $Al^{3+}$ và $O^{2-}$ là:\nA. AlO\nB. $Al_2O_3$\nC. $Al_3O_2$\nD. $AlO_3$',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Trong $Fe_2O_3$, nếu oxygen có hóa trị II thì iron có hóa trị:\nA. I\nB. II\nC. III\nD. VI',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Vì sao công thức $Ca_2O_2$ cần viết tối giản thành $CaO$?\nA. Vì phải bỏ nguyên tố oxygen.\nB. Vì tỉ lệ chỉ số 2:2 rút gọn thành 1:1.\nC. Vì Ca và O có cùng nguyên tử khối.\nD. Vì chỉ số luôn phải bằng 1.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Hòa tan 15 g muối vào 85 g nước. Nồng độ phần trăm của dung dịch là:\nA. 15%\nB. 17,65%\nC. 85%\nD. 100%',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Dung dịch chứa 0,50 mol chất tan trong 250 mL dung dịch có nồng độ mol là:\nA. 0,125 M\nB. 0,50 M\nC. 2,0 M\nD. 4,0 M',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Theo $2H_2+O_2\\rightarrow2H_2O$, cho 3 mol $H_2$ và 2 mol $O_2$. Chất giới hạn và số mol nước tối đa là:\nA. $O_2$, 2 mol\nB. $H_2$, 3 mol\nC. $H_2$, 2 mol\nD. $O_2$, 4 mol',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  }
];

export const m0Solutions: Solution[] = [
  {
    id: 'chem10-s-intro-object-1', questionId: 'chem10-q-intro-object-1', recognition: 'Phân biệt đối tượng cụ thể với các chất cấu tạo nên đối tượng đó.',
    detailedSteps: [
      { order: 1, title: 'Xác định vật thể', explanation: 'Chai nước khoáng là một đối tượng cụ thể có hình dạng và công dụng xác định, nên được xem là vật thể.' },
      { order: 2, title: 'Xác định các chất', explanation: 'Nhựa là chất tạo nên vỏ chai; nước và các chất khoáng hòa tan là các chất tạo nên phần bên trong. Vì vậy phương án B phân loại đúng.' }
    ], finalAnswer: 'B', commonMistakes: ['Cho rằng mọi danh từ nhìn thấy được đều là vật thể hoặc mọi thứ bên trong chai đều là một chất duy nhất.'], reviewSuggestions: ['Ôn lại sự khác nhau giữa vật thể và chất; thử phân tích thêm một chiếc thìa inox hoặc dây điện.']
  },
  {
    id: 'chem10-s-intro-object-2', questionId: 'chem10-q-intro-object-2', recognition: 'Tách dữ kiện cảm nhận trực tiếp khỏi mô hình giải thích ở cấp độ hạt.',
    detailedSteps: [
      { order: 1, title: 'Tìm điều ghi nhận trực tiếp', explanation: '“Có nhiều bọt khí thoát ra” là điều có thể nhìn thấy trực tiếp, nên là quan sát.' },
      { order: 2, title: 'Nhận diện suy luận', explanation: 'Các phát biểu về tiểu phân phản ứng và chất khí mới là lời giải thích dựa trên mô hình hóa học. Chúng có thể hợp lí nhưng vẫn là suy luận cần bằng chứng hỗ trợ.' }
    ], finalAnswer: 'A', commonMistakes: ['Coi một lời giải thích khoa học hợp lí là quan sát trực tiếp.'], reviewSuggestions: ['Khi đọc báo cáo thí nghiệm, gạch chân số đo và hiện tượng trước; đánh dấu phần giải thích riêng.']
  },
  {
    id: 'chem10-s-intro-inquiry-1', questionId: 'chem10-q-intro-inquiry-1', recognition: 'Xác định đại lượng được đo để phản ánh ảnh hưởng của biến chủ động thay đổi.',
    detailedSteps: [
      { order: 1, title: 'Tìm biến được thay đổi', explanation: 'Học sinh chủ động đặt nhiệt độ ở 10 °C, 30 °C và 50 °C, nên nhiệt độ là biến độc lập.' },
      { order: 2, title: 'Tìm đại lượng được đo', explanation: 'Thời gian viên sủi phản ứng hết được đo để xem nhiệt độ ảnh hưởng thế nào, nên đây là biến phụ thuộc. Lượng nước và loại viên là biến kiểm soát.' }
    ], finalAnswer: 'B', commonMistakes: ['Chọn nhiệt độ vì đây là yếu tố nổi bật nhất, nhưng không phân biệt biến độc lập với biến phụ thuộc.'], reviewSuggestions: ['Ghi nhớ: độc lập = chủ động thay đổi; phụ thuộc = đo kết quả; kiểm soát = giữ giống nhau.']
  },
  {
    id: 'chem10-s-intro-inquiry-2', questionId: 'chem10-q-intro-inquiry-2', recognition: 'Chọn kết luận không vượt quá phạm vi của dữ liệu thí nghiệm.',
    detailedSteps: [
      { order: 1, title: 'Xác định dữ liệu thực sự chứng minh', explanation: 'Dữ liệu chỉ so sánh thời gian phản ứng tại ba nhiệt độ trong một hệ viên sủi cụ thể. Nó hỗ trợ kết luận rằng nhiệt độ cao hơn làm phản ứng nhanh hơn trong phạm vi đã khảo sát.' },
      { order: 2, title: 'Loại suy rộng quá mức', explanation: 'Thời gian ngắn hơn không chứng minh lượng sản phẩm cuối cùng nhiều hơn. Một thí nghiệm cũng không đủ để kết luận cho mọi phản ứng hoặc khẳng định nhiệt độ là yếu tố duy nhất.' }
    ], finalAnswer: 'A', commonMistakes: ['Đồng nhất tốc độ phản ứng với lượng sản phẩm cuối cùng.', 'Suy rộng từ một hệ thí nghiệm sang mọi phản ứng hóa học.'], reviewSuggestions: ['Khi kết luận, dùng cụm “trong điều kiện đã khảo sát” nếu dữ liệu chỉ bao phủ một phạm vi giới hạn.']
  },
  {
    id: 'chem10-s01',
    questionId: 'chem10-q01',
    recognition: 'Áp dụng định luật bảo toàn khối lượng cho phản ứng cháy của Magnesium.',
    detailedSteps: [
      {
        order: 1,
        title: 'Viết phương trình phản ứng',
        explanation: 'Phương trình hóa học phản ứng cháy của Mg:\n$$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$$'
      },
      {
        order: 2,
        title: 'Áp dụng Định luật bảo toàn khối lượng',
        explanation: 'Tổng khối lượng chất tham gia phản ứng bằng tổng khối lượng sản phẩm tạo thành:\n$$m_{\\text{Mg}} + m_{\\text{O}_2} = m_{\\text{MgO}}$$'
      },
      {
        order: 3,
        title: 'Tính khối lượng m của Magnesium',
        explanation: 'Thay số liệu đề bài vào:\n$$m + 3,2 = 8,0 \\Rightarrow m = 8,0 - 3,2 = 4,8\\text{ gam}$$'
      }
    ],
    finalAnswer: '4.8',
    commonMistakes: [
      'Không nhớ định luật bảo toàn khối lượng hoặc cộng sai hệ số.'
    ],
    reviewSuggestions: [
      'Xem lại định luật bảo toàn khối lượng và phương pháp cân bằng phương trình hóa học.'
    ]
  },
  {
    id: 'chem10-s02',
    questionId: 'chem10-q02',
    recognition: 'Tính thể tích khí ở điều kiện chuẩn mới (24,79 L/mol).',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận diện điều kiện tính thể tích',
        explanation: 'Đề bài yêu cầu đo ở điều kiện chuẩn (đkc: 25 °C, 1 bar). Ở đkc, 1 mol chất khí bất kì chiếm thể tích là $24,79$ lít.'
      },
      {
        order: 2,
        title: 'Áp dụng công thức tính thể tích',
        explanation: 'Thể tích khí Oxygen là:\n$$V_{\\text{O}_2} = n \\cdot 24,79 = 0,4 \\cdot 24,79 = 9,916\\text{ lít}$$'
      }
    ],
    finalAnswer: '9.916',
    commonMistakes: [
      'Sử dụng công thức cũ ở đktc ($V = n \\cdot 22,4 = 0,4 \\cdot 22,4 = 8,96$ lít). Học sinh cần lưu ý chuyển đổi sang hằng số $24,79$.'
    ],
    reviewSuggestions: [
      'Ghi nhớ hằng số thể tích mol điều kiện chuẩn mới là 24,79 lít/mol.'
    ]
  },
  {
    id: 'chem10-s03',
    questionId: 'chem10-q03',
    recognition: 'Lập công thức hóa học dựa vào hóa trị của Phosphorus (V) và Oxygen (II).',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt công thức hóa học tổng quát',
        explanation: 'Gọi công thức hóa học của hợp chất là $\\text{P}_x\\text{O}_y$ (với $x, y$ là số nguyên dương tối giản).'
      },
      {
        order: 2,
        title: 'Áp dụng quy tắc hóa trị',
        explanation: 'Theo quy tắc hóa trị: tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia:\n$$x \\cdot \\text{V} = y \\cdot \\text{II} \\Rightarrow \\frac{x}{y} = \\frac{\\text{II}}{\\text{V}} = \\frac{2}{5}$$\nChọn $x = 2$, $y = 5$. Công thức hóa học là $\\text{P}_2\\text{O}_5$.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Viết sai vị trí hóa trị thành chỉ số dạng $\\text{P}_5\\text{O}_2$ (Phương án C) do nhầm chéo hóa trị.'
    ],
    reviewSuggestions: [
      'Ôn tập lại quy tắc hóa trị và cách lập công thức hóa học tối giản.'
    ]
  },
  {
    id: 'chem10-s04',
    questionId: 'chem10-q04',
    recognition: 'Bài toán tính lượng chất theo phương trình hóa học khi biết lượng của hai chất tham gia phản ứng (bài toán chất dư - hết).',
    detailedSteps: [
      {
        order: 1,
        title: 'So sánh tỉ số để xác định chất phản ứng hết',
        explanation: 'Phương trình phản ứng:\n$$\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2$$\nTa lập tỉ số lượng chất phản ứng:\n- Với Fe: $\\frac{0,1}{1} = 0,1$\n- With HCl: $\\frac{0,3}{2} = 0,15$\nVì $0,1 < 0,15$ nên Fe phản ứng hết, HCl còn dư sau phản ứng.'
      },
      {
        order: 2,
        title: 'Tính số mol khí Hydrogen sinh ra',
        explanation: 'Vì Fe hết nên lượng sản phẩm $\\text{H}_2$ phải được tính theo số mol Fe:\nTheo phương trình: $n_{\\text{H}_2} = n_{\\text{Fe}} = 0,1\\text{ mol}$.'
      }
    ],
    finalAnswer: '0.1',
    commonMistakes: [
      'Tính số mol $\\text{H}_2$ theo HCl dư: $n_{\\text{H}_2} = \\frac{1}{2} n_{\\text{HCl}} = 0,15\\text{ mol}$. Lỗi này xảy ra khi học sinh không lập tỉ lệ chất dư chất hết.'
    ],
    reviewSuggestions: [
      'Xem lại phương pháp giải bài toán lượng chất dư trong phương trình phản ứng hóa học.'
    ]
  },
  // Các câu giải từ foundationPractice
  ...[
    { id: 'chem10-sintro-object-3', qId: 'chem10-qintro-object-3', ans: 'B', exp: 'Thìa là đối tượng cụ thể; thép không gỉ là vật liệu tạo nên thìa.' },
    { id: 'chem10-sintro-object-4', qId: 'chem10-qintro-object-4', ans: 'B', exp: 'Câu B hỏi trực tiếp cách các nguyên tử liên kết và sắp xếp trong chất.' },
    { id: 'chem10-sintro-inquiry-3', qId: 'chem10-qintro-inquiry-3', ans: 'B', exp: 'Chỉ diện tích bề mặt được thay đổi; các yếu tố còn lại phải được kiểm soát.' },
    { id: 'chem10-sintro-inquiry-4', qId: 'chem10-qintro-inquiry-4', ans: 'C', exp: 'Dữ liệu ngoại lệ cần được kiểm tra và đo lặp, không được tùy tiện loại bỏ.' },
    { id: 'chem10-s01c', qId: 'chem10-q01c', ans: 'B', exp: '$4Al+3O_2\\rightarrow2Al_2O_3$ bảo toàn 4 Al và 6 O.' },
    { id: 'chem10-s01d', qId: 'chem10-q01d', ans: 'B', exp: 'Bảo toàn khối lượng: $m_C=25,0-14,0=11,0$ g.' },
    { id: 'chem10-s01e', qId: 'chem10-q01e', ans: 'B', exp: 'Thay chỉ số làm đổi công thức và tạo thành chất khác; chỉ được thay hệ số.' },
    { id: 'chem10-s02c', qId: 'chem10-q02c', ans: 'B', exp: '$n=m/M=11/44=0,25$ mol.' },
    { id: 'chem10-s02d', qId: 'chem10-q02d', ans: 'B', exp: '$m=nM=0,30\\times32=9,6$ g.' },
    { id: 'chem10-s02e', qId: 'chem10-q02e', ans: 'B', exp: '$V=0,20\\times24,79=4,958$ L, xấp xỉ 4,96 L.' },
    { id: 'chem10-s03c', qId: 'chem10-q03c', ans: 'B', exp: 'Tỉ lệ điện tích tối giản là 2 ion Al³⁺ với 3 ion O²⁻.' },
    { id: 'chem10-s03d', qId: 'chem10-q03d', ans: 'C', exp: '$2\\times x=3\\times II$, suy ra $x=III$.' },
    { id: 'chem10-s03e', qId: 'chem10-q03e', ans: 'B', exp: 'Công thức biểu diễn tỉ lệ nguyên tử/ion tối giản, ở đây là 1:1.' },
    { id: 'chem10-s04c', qId: 'chem10-q04c', ans: 'A', exp: '$m_{dd}=100$ g nên $C\\%=15/100\\times100\\%=15\\%$.' },
    { id: 'chem10-s04d', qId: 'chem10-q04d', ans: 'C', exp: 'Đổi 250 mL = 0,250 L; $C_M=0,50/0,250=2,0$ M.' },
    { id: 'chem10-s04e', qId: 'chem10-q04e', ans: 'B', exp: '3 mol H₂ cần 1,5 mol O₂ nên H₂ hết trước; tỉ lệ H₂:H₂O là 1:1, tạo 3 mol nước.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.',
    detailedSteps: [
      { order: 1, title: 'Phân tích dữ kiện', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện.'],
    reviewSuggestions: ['Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp.']
  }))
];
