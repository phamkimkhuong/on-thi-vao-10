import { QuestionType } from '@/types';

export const g10ChemistryQuestionTypes: QuestionType[] = [
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
      'Vẫn sử dụng hằng số $22,4$ của chương trình cũ thay vì $24,79$ ở điều kiện chuẩn mới theo quy định chương trình GDPT 2018.',
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
  },
  {
    id: 'chem10-qt1',
    topicId: 'chem10-t1',
    name: 'Thành phần cấu tạo nguyên tử & Các hạt cơ bản (H10-A01)',
    slug: 'thanh-phan-nguyen-tu-hat-co-ban',
    description: 'Xác định số lượng, điện tích và khối lượng của các hạt cơ bản (proton, neutron, electron) trong nguyên tử trung hòa hoặc ion. So sánh kích thước hạt nhân và vỏ nguyên tử.',
    exampleQuestionId: 'chem10-q1',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Ba loại hạt cơ bản cấu tạo nên nguyên tử**:\n- **Proton (p)**: Mang điện tích dương ($+1$ hoặc $+1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân.\n- **Neutron (n)**: Không mang điện ($0$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân.\n- **Electron (e)**: Mang điện tích âm ($-1$ hoặc $-1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối cực nhỏ ($0,00055\\text{ amu}$ $\\approx \\frac{1}{1837}$ khối lượng proton). Chuyển động ở lớp vỏ nguyên tử.',
      '**2. Đặc trưng kích thước & Khối lượng**:\n- **Khối lượng**: Vì khối lượng electron vô cùng nhỏ so với proton và neutron, nên khối lượng nguyên tử tập trung hầu hết ở hạt nhân. Khối lượng nguyên tử $\\approx$ Khối lượng hạt nhân.\n- **Kích thước**: Đường kính nguyên tử khoảng $10^{-10}\\text{m}$ (1 Å), lớn hơn đường kính hạt nhân ($10^{-14}\\text{m}$) khoảng 10.000 lần. Phần lớn thể tích nguyên tử là khoảng không trống rỗng.'
    ],
    subTypes: [
      {
        name: 'Tính số hạt cơ bản trong nguyên tử trung hòa',
        example: 'Nguyên tử Sodium (Natri) có số proton là 11 và số neutron là 12. Xác định số electron và khối lượng nguyên tử tương đối.',
        note: 'Vì nguyên tử trung hòa điện, số electron = số proton = 11. Khối lượng nguyên tử xấp xỉ bằng số khối $A = P + N = 11 + 12 = 23\\text{ amu}$.'
      },
      {
        name: 'So sánh kích thước và độ rỗng nguyên tử',
        example: 'Nếu phóng đại hạt nhân nguyên tử thành một quả bóng tennis đường kính 6 cm ở giữa sân vận động, thì vỏ nguyên tử tương ứng với đường kính bao nhiêu?',
        note: 'Tỉ lệ kích thước nguyên tử / hạt nhân là 10.000 lần. Vậy đường kính nguyên tử tương ứng với $6 \\cdot 10.000\\text{ cm} = 600\\text{ m}$. Hầu hết không gian trong nguyên tử là khoảng trống.'
      }
    ],
    recognitionSigns: [
      'Yêu cầu tính số hạt p, n, e hoặc số điện tích hạt nhân trong nguyên tử.',
      'Yêu cầu so sánh về khối lượng hoặc điện tích giữa các hạt cơ bản.',
      'Câu hỏi lý thuyết về độ rỗng, kích thước nguyên tử so với hạt nhân.'
    ],
    solvingSteps: [
      'Bước 1: Nhận diện điện tích hạt nhân $Z$, trong nguyên tử luôn có $P = E = Z$.',
      'Bước 2: Tính toán khối lượng hạt nhân (hoặc số khối $A = P + N$) và bỏ qua khối lượng lớp vỏ electron khi tính xấp xỉ khối lượng nguyên tử.',
      'Bước 3: Sử dụng các mối quan hệ so sánh để giải thích các hiện tượng thực nghiệm (như thí nghiệm bắn phá lá vàng của Rutherford).'
    ],
    commonMistakes: [
      'Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bố đều.',
      'Hiểu sai rằng hạt nhân chiếm phần lớn thể tích của nguyên tử (thực tế hạt nhân cực kì nhỏ bé).'
    ]
  },
  {
    id: 'chem10-qt2',
    topicId: 'chem10-t1',
    name: 'Nguyên tố hóa học & Kí hiệu nguyên tử (H10-A02)',
    slug: 'nguyen-to-hoa-hoc-ki-hieu-nguyen-tu',
    description: 'Xác định số hiệu nguyên tử Z, số khối A và viết/đọc kí hiệu nguyên tử dưới dạng $_{Z}^{A}\\text{X}$. Định nghĩa nguyên tố dựa trên số proton.',
    exampleQuestionId: 'chem10-q2',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Nguyên tố hóa học**:\n- Nguyên tố hóa học là tập hợp các nguyên tử có cùng **số proton** (cùng số điện tích hạt nhân Z).\n- Số proton là đặc trưng cốt lõi của nguyên tố. Thay đổi số proton sẽ tạo ra nguyên tố mới.',
      '**2. Kí hiệu nguyên tử**:\n- Biểu diễn dưới dạng: $_{Z}^{A}\\text{X}$, trong đó:\n  *   $X$: Kí hiệu hóa học của nguyên tố.\n  *   $Z$: Số hiệu nguyên tử (bằng số proton = đơn vị điện tích hạt nhân).\n  *   $A$: Số khối (tổng số proton và neutron: $A = Z + N$).',
      '**3. Phân biệt Số hiệu nguyên tử, Số khối và Nguyên tử khối**:\n- **Số hiệu nguyên tử ($Z$)**: Luôn là số nguyên dương.\n- **Số khối ($A$)**: Luôn là số nguyên dương, là tổng số hạt trong hạt nhân.\n- **Nguyên tử khối**: Khối lượng thực tế tính bằng amu, thường gần bằng nhưng không bằng khít số khối do có khối lượng lẻ của các hạt và độ hụt khối hạt nhân.'
    ],
    subTypes: [
      {
        name: 'Đọc thông tin từ kí hiệu nguyên tử',
        example: 'Đọc các thông số của nguyên tử Kali kí hiệu $_{19}^{39}\\text{K}$.',
        note: 'Số hiệu nguyên tử $Z = 19$ (suy ra nguyên tử có 19 proton và 19 electron). Số khối $A = 39$. Số neutron $N = 39 - 19 = 20$.'
      },
      {
        name: 'Xác định cùng hay khác nguyên tố',
        example: 'Cho ba nguyên tử A (17p, 18n), B (17p, 20n), C (18p, 20n). Những nguyên tử nào thuộc cùng một nguyên tố?',
        note: 'A và B thuộc cùng một nguyên tố hóa học (Chlorine) vì đều có 17 proton. C thuộc nguyên tố khác (Argon) vì có 18 proton.'
      }
    ],
    recognitionSigns: [
      'Cho các kí hiệu nguyên tử dạng $_{Z}^{A}\\text{X}$ và yêu cầu đọc thông tin số hạt.',
      'Cho thông tin số p và n của nhiều nguyên tử khác nhau và yêu cầu phân nhóm nguyên tố.'
    ],
    solvingSteps: [
      'Bước 1: Xác định số hiệu nguyên tử $Z$ từ chỉ số dưới, và số khối $A$ từ chỉ số trên của kí hiệu nguyên tử.',
      'Bước 2: Sử dụng công thức $N = A - Z$ để tìm số neutron.',
      'Bước 3: Nhớ rằng số proton quyết định danh tính nguyên tố, nếu số proton bằng nhau thì các nguyên tử cùng thuộc một nguyên tố.'
    ],
    commonMistakes: [
      'Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử.',
      'Lầm tưởng rằng thay đổi số neutron (tạo đồng vị) là biến thành nguyên tố hóa học khác.'
    ]
  },
  {
    id: 'chem10-qt3',
    topicId: 'chem10-t1',
    name: 'Đồng vị & Nguyên tử khối trung bình (H10-A03)',
    slug: 'dong-vi-nguyen-tu-khoi-trung-binh-ms',
    description: 'Xác định khái niệm đồng vị, đọc biểu đồ phổ khối lượng (MS) và tính toán nguyên tử khối trung bình của các nguyên tố.',
    exampleQuestionId: 'chem10-q3',
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      '**1. Đồng vị**:\n- Đồng vị là các nguyên tử có **cùng số proton** (cùng Z) nhưng **khác số neutron** (dẫn đến khác số khối A).\n- Ví dụ: Hydrogen có 3 đồng vị: $_{1}^{1}\\text{H}$ (Protium), $_{1}^{2}\\text{H}$ (Deuterium), $_{1}^{3}\\text{H}$ (Tritium).',
      '**2. Nguyên tử khối trung bình ($\\overline{A}$)**:\n- Vì các nguyên tố trong tự nhiên là hỗn hợp của nhiều đồng vị với tỉ lệ xác định, nguyên tử khối trong bảng tuần hoàn là nguyên tử khối trung bình có trọng số:\n  $$\\overline{A} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2 + ... + A_n \\cdot x_n}{100}$$\n  (với $A_i$ là số khối đồng vị $i$, $x_i$ là phần trăm số nguyên tử tương ứng, $\\Sigma x_i = 100\\%$).',
      '**3. Phổ khối lượng (Mass Spectrometry - MS)**:\n- Phương pháp thực nghiệm đo chính xác tỉ số khối lượng / điện tích ($m/z$) của các đồng vị để xác định số khối và tỉ lệ phần trăm số nguyên tử tương đối của chúng.'
    ],
    subTypes: [
      {
        name: 'Đọc dữ liệu phổ khối lượng MS và tính nguyên tử khối trung bình',
        example: 'Phổ khối lượng của nguyên tố Magnesium cho thấy 3 vạch tương ứng với $^{24}\\text{Mg}$ (78,99%), $^{25}\\text{Mg}$ (10,00%) và $^{26}\\text{Mg}$ (11,01%). Tính nguyên tử khối trung bình.',
        note: '$\\overline{A} = \\frac{24 \\cdot 78,99 + 25 \\cdot 10,00 + 26 \\cdot 11,01}{100} \\approx 24,32$.'
      },
      {
        name: 'Tính tỉ lệ % đồng vị (Bài toán ngược)',
        example: 'Boron có nguyên tử khối trung bình là 10,81 gồm hai đồng vị $^{10}\\text{B}$ và $^{11}\\text{B}$. Tính phần trăm số nguyên tử đồng vị $^{11}\\text{B}$.',
        note: 'Đặt phần trăm $^{11}\\text{B}$ là $x$. Ta có: $11x + 10(100 - x) = 10,81 \\cdot 100 \\Rightarrow x = 81\\%$.'
      }
    ],
    recognitionSigns: [
      'Cho biểu đồ phổ khối lượng MS có các đỉnh biểu thị số khối (m/z) và phần trăm tương đối.',
      'Cho nguyên tử khối trung bình và yêu cầu xác định phần trăm hoặc số khối của đồng vị chưa biết.'
    ],
    solvingSteps: [
      'Bước 1: Trích xuất các cặp dữ liệu (số khối $A_i$, tỷ lệ phần trăm $x_i\\%$) từ đề bài hoặc từ phổ khối lượng.',
      'Bước 2: Áp dụng công thức tính trung bình có trọng số.',
      'Bước 3: Giải phương trình hoặc hệ phương trình (kết hợp phương trình tổng phần trăm $\\Sigma x_i = 100\\%$).'
    ],
    commonMistakes: [
      'Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến).',
      'Lầm tưởng rằng mọi nguyên tử của nguyên tố đều có khối lượng đúng bằng số nguyên tử khối trung bình (thực tế đó chỉ là con số trung bình của hỗn hợp các đồng vị).'
    ]
  },
  {
    id: 'chem10-qt4',
    topicId: 'chem10-t1',
    name: 'Mô hình nguyên tử Rutherford–Bohr & Hiện đại (H10-A04)',
    slug: 'mo-hinh-nguyen-tu-bohr-hien-dai',
    description: 'So sánh mô hình nguyên tử Rutherford–Bohr và mô hình lượng tử hiện đại. Giải thích khái niệm orbital nguyên tử (AO) và ý nghĩa vùng xác suất.',
    exampleQuestionId: 'chem10-q4',
    difficulty: 'medium',
    examFrequency: 'medium',
    theory: [
      '**1. Mô hình Rutherford–Bohr**:\n- Mô tả electron chuyển động xung quanh hạt nhân theo những **quỹ đạo tròn hoặc bầu dục xác định**, giống như các hành tinh quay quanh Mặt Trời.\n- Năng lượng của electron trên mỗi quỹ đạo là xác định. Khi hấp thụ hay giải phóng năng lượng, electron nhảy giữa các quỹ đạo.',
      '**2. Mô hình nguyên tử hiện đại (Mô hình lượng tử)**:\n- Khẳng định electron chuyển động cực nhanh xung quanh hạt nhân trong những vùng không gian không theo quỹ đạo xác định nào.\n- **Orbital nguyên tử (AO)**: Vùng không gian xung quanh hạt nhân mà tại đó **xác suất tìm thấy electron là lớn nhất** (khoảng 90%).\n- Electron được biểu diễn dưới dạng đám mây xác suất lượng tử (đám mây electron).'
    ],
    subTypes: [
      {
        name: 'So sánh khái niệm Quỹ đạo và Orbital',
        example: 'Sự khác biệt cốt lõi giữa "quỹ đạo chuyển động" của Bohr và "orbital nguyên tử" của mô hình hiện đại là gì?',
        note: '"Quỹ đạo" là đường đi cơ học xác định vẽ ra vị trí chính xác của electron. "Orbital" là vùng không gian có xác suất tìm thấy electron cao nhất (90%), không mô tả đường đi cụ thể.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi yêu cầu so sánh hoặc tìm điểm khác biệt giữa mô hình Bohr và mô hình hiện đại.',
      'Hỏi về khái niệm đám mây electron hoặc định nghĩa orbital nguyên tử.'
    ],
    solvingSteps: [
      'Bước 1: Nắm rõ bản chất của mô hình Bohr: quỹ đạo xác định, tính chất cơ học cổ điển.',
      'Bước 2: Nắm rõ bản chất mô hình hiện đại: vùng không gian xác suất (orbital), tính chất sóng hạt lượng tử.',
      'Bước 3: Phân tích các phát biểu để chỉ ra ngộ nhận.'
    ],
    commonMistakes: [
      'Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó.',
      'Nghĩ rằng mô hình Bohr hoàn toàn vô giá trị (thực tế nó vẫn rất hữu ích cho các giải thích trực quan sơ bộ ở cấp trung học).'
    ]
  },
  {
    id: 'chem10-qt5',
    topicId: 'chem10-t1',
    name: 'Orbital, Lớp và Phân lớp electron (H10-A05)',
    slug: 'orbital-lop-phan-lop-electron',
    description: 'Xác định hình dạng orbital s, p. Phân biệt lớp, phân lớp electron và tính toán số lượng orbital, số electron tối đa trong phân lớp/lớp.',
    exampleQuestionId: 'chem10-q5',
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      '**1. Hình dạng orbital nguyên tử (AO)**:\n- **AO s**: Có dạng hình cầu, đối xứng trong không gian.\n- **AO p**: Có dạng hình số 8 nổi (hình quả tạ đôi), gồm 3 orbital định hướng theo 3 trục tọa độ: $p_x, p_y, p_z$.',
      '**2. Lớp và phân lớp electron**:\n- **Lớp electron ($n$)**: Gồm các electron có mức năng lượng gần bằng nhau. Kí hiệu lớp: 1(K), 2(L), 3(M), 4(N)...\n- **Phân lớp electron**: Mỗi lớp chia thành các phân lớp s, p, d, f gồm các electron có mức năng lượng bằng nhau. Lớp thứ $n$ có $n$ phân lớp (với $n \\le 4$).',
      '**3. Số lượng orbital và electron tối đa**:\n- Mỗi orbital chứa tối đa **2 electron** (có chiều tự quay ngược nhau - Pauli).\n- Lớp thứ $n$ có $n^2$ orbital và chứa tối đa $2n^2$ electron.'
    ],
    subTypes: [
      {
        name: 'Tính số orbital và electron tối đa của lớp/phân lớp',
        example: 'Xác định số orbital và số electron tối đa của lớp M (n = 3).',
        note: 'Lớp M có $n = 3$. Số orbital là $n^2 = 3^2 = 9$ AO (gồm 1 AO s, 3 AO p và 5 AO d). Số electron tối đa là $2n^2 = 2 \\cdot 9 = 18$ e.'
      }
    ],
    recognitionSigns: [
      'Yêu cầu tính số orbital trong một lớp hoặc phân lớp cụ thể.',
      'Yêu cầu đếm số electron tối đa của một lớp hoặc phân lớp.'
    ],
    solvingSteps: [
      'Bước 1: Xác định số lớp $n$ hoặc phân lớp cần xét.',
      'Bước 2: Nhớ số lượng orbital tương ứng: phân lớp s có 1, p có 3, d có 5, f có 7.',
      'Bước 3: Nhân đôi số orbital để tìm số electron tối đa trong lớp/phân lớp đó.'
    ],
    commonMistakes: [
      'Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p).',
      'Tính sai số orbital do quên rằng mỗi orbital chứa tối đa 2 electron chứ không phải chỉ 1.'
    ]
  },
  {
    id: 'chem10-qt6',
    topicId: 'chem10-t1',
    name: 'Cấu hình electron & Sơ đồ ô orbital (H10-A06)',
    slug: 'cau-hinh-electron-so-do-orbital',
    description: 'Viết cấu hình electron của nguyên tử và ion (đặc biệt là 20 nguyên tố đầu tiên). Biểu diễn bằng sơ đồ ô orbital và xác định số electron độc thân.',
    exampleQuestionId: 'chem10-q6',
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      '**1. Các nguyên lí và quy tắc phân bố electron**:\n- **Nguyên lí vững bền**: Electron điền lần lượt vào các orbital từ mức năng lượng thấp đến cao: $1s \\rightarrow 2s \\rightarrow 2p \\rightarrow 3s \\rightarrow 3p \\rightarrow 4s \\rightarrow 3d...$\n- **Nguyên lí Pauli**: Trong một ô orbital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau ($\\uparrow\\downarrow$).\n- **Quy tắc Hund**: Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là tối đa và có chiều tự quay giống nhau ($\\uparrow \\ \\uparrow \\ \\uparrow$).',
      '**2. Các bước viết cấu hình electron**:\n- Bước 1: Xác định tổng số electron.\n- Bước 2: Điền electron theo thứ tự mức năng lượng tăng dần.\n- Bước 3: Sắp xếp các phân lớp theo từng lớp từ trong ra ngoài (ví dụ viết $3d$ trước $4s$).'
    ],
    subTypes: [
      {
        name: 'Viết cấu hình electron và đếm số electron độc thân',
        example: 'Viết cấu hình electron của Phosphorus (Z = 15) và biểu diễn phân lớp ngoài cùng bằng ô orbital để tìm số electron độc thân.',
        note: 'Cấu hình: $1s^2 2s^2 2p^6 3s^2 3p^3$. Phân lớp ngoài cùng $3p^3$ có 3 electron điền vào 3 ô orbital: $\\uparrow \\ \\uparrow \\ \\uparrow$. Vậy P có 3 electron độc thân.'
      }
    ],
    recognitionSigns: [
      'Đề bài cho số hiệu nguyên tử Z và yêu cầu viết hoặc nhận diện cấu hình electron đúng.',
      'Yêu cầu đếm số electron độc thân của nguyên tử hoặc ion.'
    ],
    solvingSteps: [
      'Bước 1: Xác định số electron của nguyên tử (bằng Z) hoặc ion (Z hiệu chỉnh theo điện tích).',
      'Bước 2: Phân bố electron theo thứ tự mức năng lượng tăng dần.',
      'Bước 3: Sắp xếp lại cấu hình theo thứ tự lớp.',
      'Bước 4: Vẽ sơ đồ ô orbital cho phân lớp chưa đầy để đếm số electron độc thân.'
    ],
    commonMistakes: [
      'Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp.',
      'Không tuân thủ quy tắc Hund khi điền electron độc thân (ví dụ điền ghép đôi ngay lập tức khiến đếm thiếu số electron độc thân).'
    ]
  },
  {
    id: 'chem10-qt7',
    topicId: 'chem10-t1',
    name: 'Cấu hình electron & Tính chất hóa học nguyên tố (H10-A07)',
    slug: 'cau-hinh-electron-tinh-chat-nguyen-to',
    description: 'Dự đoán tính chất hóa học cơ bản (kim loại, phi kim, khí hiếm) của nguyên tố dựa trên số electron lớp ngoài cùng từ cấu hình electron.',
    exampleQuestionId: 'chem10-q7',
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      '**1. Số electron lớp ngoài cùng quyết định tính chất**:\n- **1, 2, 3 e lớp ngoài cùng**: Thường là **Kim loại** (dễ nhường e để đạt octet), trừ H, He và B.\n- **5, 6, 7 e lớp ngoài cùng**: Thường là **Phi kim** (dễ nhận hoặc dùng chung e để đạt octet).\n- **8 e lớp ngoài cùng** (và He có 2e): Là **Khí hiếm** (trạng thái cấu hình bền vững, trơ về mặt hóa học).\n- **4 e lớp ngoài cùng**: Có thể là kim loại (nếu ở chu kì lớn như Pb, Sn) hoặc phi kim (nếu ở chu kì nhỏ như C, Si).',
      '**2. Mối liên hệ chu kì/nhóm**:\n- Số lớp electron = Thứ tự chu kì.\n- Số electron lớp ngoài cùng (đối với nguyên tố s, p) = Thứ tự nhóm A.'
    ],
    subTypes: [
      {
        name: 'Dự đoán tính chất và phân loại nguyên tố',
        example: 'Nguyên tố Sulfur (Lưu huỳnh) có Z = 16. Xác định số e lớp ngoài cùng và loại nguyên tố.',
        note: 'Cấu hình S: $1s^2 2s^2 2p^6 3s^2 3p^4$. Lớp ngoài cùng (lớp 3) có $2 + 4 = 6$ electron. Vậy Sulfur là phi kim.'
      }
    ],
    recognitionSigns: [
      'Cho cấu hình electron hoặc số hiệu nguyên tử Z.',
      'Yêu cầu phân loại nguyên tố là kim loại, phi kim hay khí hiếm.'
    ],
    solvingSteps: [
      'Bước 1: Viết chính xác cấu hình electron nguyên tử.',
      'Bước 2: Tìm lớp electron có số thứ tự lớn nhất (lớp ngoài cùng).',
      'Bước 3: Tính tổng số electron nằm trên lớp ngoài cùng này.',
      'Bước 4: Đối chiếu quy tắc số e lớp ngoài cùng để kết luận.'
    ],
    commonMistakes: [
      'Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng.',
      'Quên các ngoại lệ như Hydrogen (Z = 1 có 1e lớp ngoài cùng nhưng là phi kim), Helium (Z = 2 có 2e lớp ngoài cùng nhưng là khí hiếm).'
    ]
  },
  {
    id: 'chem10-qt8', topicId: 'chem10-t2', name: 'Ô nguyên tố, Chu kì & Nhóm', slug: 'o-nguyen-to-chu-ki-nhom', description: 'Đọc vị trí và cấu trúc cơ bản của bảng tuần hoàn.', exampleQuestionId: 'chem10-q8a', difficulty: 'easy', examFrequency: 'high',
    theory: ['**Chu kì** gồm các nguyên tố có cùng số lớp electron. **Nhóm A** tập hợp các nguyên tố có cấu hình electron lớp ngoài cùng tương tự và tính chất gần nhau. Số thứ tự ô bằng số hiệu nguyên tử Z.'],
    recognitionSigns: ['Yêu cầu xác định ô, chu kì hoặc nhóm.', 'Cho vị trí và yêu cầu suy ra đặc điểm cấu tạo.'], solvingSteps: ['Xác định Z của ô nguyên tố.', 'Đếm số lớp electron để tìm chu kì.', 'Với nguyên tố nhóm A, xét electron lớp ngoài cùng để tìm nhóm.'], commonMistakes: ['Nhầm số thứ tự chu kì với tổng số electron.', 'Cho rằng mọi nguyên tố cùng chu kì có tính chất giống nhau.']
  },
  {
    id: 'chem10-qt9', topicId: 'chem10-t2', name: 'Cấu hình electron & Vị trí trong bảng tuần hoàn', slug: 'cau-hinh-electron-vi-tri', description: 'Suy ra vị trí nguyên tố từ cấu hình electron và thực hiện chiều ngược lại.', exampleQuestionId: 'chem10-q9a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Số lớp electron cho biết chu kì. Với nguyên tố nhóm A, tổng electron lớp ngoài cùng thường cho biết số thứ tự nhóm A. Cần xác định lớp có số $n$ lớn nhất, không chỉ nhìn phân lớp viết cuối.'],
    recognitionSigns: ['Đề cho cấu hình electron và hỏi vị trí.', 'Đề cho chu kì, nhóm và hỏi cấu hình lớp ngoài cùng.'], solvingSteps: ['Kiểm tra tổng electron bằng Z.', 'Tìm số n lớn nhất để xác định chu kì.', 'Đếm electron lớp ngoài cùng để xác định nhóm A.'], commonMistakes: ['Chỉ nhìn phân lớp cuối mà bỏ qua toàn bộ lớp ngoài cùng.']
  },
  {
    id: 'chem10-qt10', topicId: 'chem10-t2', name: 'Xu hướng Bán kính nguyên tử', slug: 'xu-huong-ban-kinh-nguyen-tu', description: 'So sánh và giải thích bán kính nguyên tử trong chu kì, nhóm.', exampleQuestionId: 'chem10-q10a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong một chu kì, số lớp không đổi nhưng điện tích hạt nhân tăng nên bán kính nhìn chung giảm. Trong một nhóm, số lớp electron tăng và che chắn mạnh hơn nên bán kính nhìn chung tăng từ trên xuống.'],
    recognitionSigns: ['Yêu cầu sắp xếp bán kính.', 'Yêu cầu giải thích xu hướng trong chu kì hoặc nhóm.'], solvingSteps: ['Xác định các nguyên tố cùng chu kì hay cùng nhóm.', 'So sánh số lớp electron trước.', 'Nếu cùng số lớp, so sánh lực hút hạt nhân.'], commonMistakes: ['Học thuộc mũi tên nhưng áp dụng sai khi các nguyên tố không cùng chu kì hoặc nhóm.']
  },
  {
    id: 'chem10-qt11', topicId: 'chem10-t2', name: 'Độ âm điện & Tính Kim loại–Phi kim', slug: 'do-am-dien-kim-loai-phi-kim', description: 'Giải thích xu hướng hút electron và tính chất nguyên tố.', exampleQuestionId: 'chem10-q11a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong chu kì, độ âm điện và tính phi kim nhìn chung tăng từ trái sang phải; tính kim loại giảm. Trong nhóm A, đi xuống dưới, bán kính và che chắn tăng nên khả năng hút electron liên kết thường giảm.'],
    recognitionSigns: ['So sánh độ âm điện.', 'Sắp xếp tính kim loại hoặc phi kim.'], solvingSteps: ['Xác định vị trí tương đối.', 'Liên hệ bán kính và lực hút hạt nhân.', 'Suy ra khả năng nhường hoặc hút electron.'], commonMistakes: ['Đồng nhất độ âm điện với ái lực electron hoặc khả năng nhận electron tự do trong mọi tình huống.']
  },
  {
    id: 'chem10-qt12', topicId: 'chem10-t2', name: 'Oxide, Hydroxide & Định luật tuần hoàn', slug: 'oxide-hydroxide-dinh-luat-tuan-hoan', description: 'Dự đoán xu hướng acid–base của hợp chất và phát biểu định luật tuần hoàn.', exampleQuestionId: 'chem10-q12a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong một chu kì, khi tính kim loại giảm và tính phi kim tăng, oxide/hydroxide thường chuyển dần từ tính base qua lưỡng tính đến acid. Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo điện tích hạt nhân.'],
    recognitionSigns: ['So sánh tính acid–base của oxide/hydroxide.', 'Yêu cầu phát biểu hoặc vận dụng định luật tuần hoàn.'], solvingSteps: ['Xác định vị trí trong chu kì.', 'Suy ra tính kim loại–phi kim.', 'Liên hệ với tính base–acid của hợp chất.'], commonMistakes: ['Cho rằng mọi oxide kim loại đều chỉ có tính base hoặc mọi oxide phi kim đều có cùng độ acid.']
  },
  {
    id: 'chem10-qt13', topicId: 'chem10-t3', name: 'Quy tắc Octet & Sự hình thành Ion', slug: 'octet-hinh-thanh-ion', description: 'Giải thích nguyên tử nhường hoặc nhận electron để hình thành ion.', exampleQuestionId: 'chem10-q13a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Quy tắc octet là mô hình hữu ích: nhiều nguyên tử có xu hướng nhường, nhận hoặc dùng chung electron để đạt lớp ngoài cùng bền như khí hiếm. Mất electron tạo cation; nhận electron tạo anion.'], recognitionSigns: ['Yêu cầu viết quá trình tạo ion.', 'Dự đoán điện tích ion từ electron ngoài cùng.'], solvingSteps: ['Viết cấu hình electron lớp ngoài cùng.', 'Chọn số electron ít nhất cần nhường/nhận để đạt cấu hình bền.', 'Kiểm tra dấu và độ lớn điện tích ion.'], commonMistakes: ['Nhầm nhường electron tạo ion âm.', 'Coi octet là quy luật tuyệt đối không có giới hạn.']
  },
  {
    id: 'chem10-qt14', topicId: 'chem10-t3', name: 'Liên kết Ion & Tinh thể Ion', slug: 'lien-ket-ion-tinh-the-ion', description: 'Giải thích lực hút ion và tính chất của hợp chất ion.', exampleQuestionId: 'chem10-q14a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết ion là lực hút tĩnh điện giữa các ion trái dấu. Chất ion thường tạo mạng tinh thể, có nhiệt độ nóng chảy cao và chỉ dẫn điện khi ion có thể chuyển động trong trạng thái nóng chảy hoặc dung dịch.'], recognitionSigns: ['Hợp chất giữa kim loại điển hình và phi kim điển hình.', 'Giải thích nóng chảy hoặc dẫn điện của tinh thể ion.'], solvingSteps: ['Xác định ion tạo thành.', 'Cân bằng tổng điện tích để lập tỉ lệ.', 'Liên hệ trạng thái chuyển động của ion với tính chất.'], commonMistakes: ['Coi NaCl là các phân tử riêng lẻ.', 'Cho rằng tinh thể NaCl rắn dẫn điện vì có ion.']
  },
  {
    id: 'chem10-qt15', topicId: 'chem10-t3', name: 'Liên kết Cộng hóa trị & Công thức Lewis', slug: 'cong-hoa-tri-lewis', description: 'Biểu diễn electron hóa trị và cặp electron dùng chung.', exampleQuestionId: 'chem10-q15a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết cộng hóa trị hình thành bởi một hay nhiều cặp electron dùng chung. Công thức Lewis biểu diễn liên kết và các cặp electron chưa tham gia liên kết. Liên kết đơn, đôi, ba tương ứng một, hai, ba cặp dùng chung.'], recognitionSigns: ['Yêu cầu vẽ Lewis.', 'Đếm cặp electron dùng chung hoặc electron hóa trị.'], solvingSteps: ['Tính tổng electron hóa trị.', 'Chọn khung liên kết.', 'Phân bố electron để thỏa cấu hình bền và kiểm tra tổng.'], commonMistakes: ['Chỉ vẽ liên kết mà quên cặp electron tự do.', 'Đếm electron liên kết hai lần sai quy tắc.']
  },
  {
    id: 'chem10-qt16', topicId: 'chem10-t3', name: 'Phân cực Liên kết & Phân tử', slug: 'phan-cuc-lien-ket-phan-tu', description: 'Dùng độ âm điện và tính đối xứng để xét phân cực.', exampleQuestionId: 'chem10-q16a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Chênh lệch độ âm điện làm cặp electron liên kết lệch về nguyên tử hút mạnh hơn. Tuy nhiên, phân tử có các liên kết phân cực vẫn có thể không phân cực nếu các moment liên kết triệt tiêu do cấu trúc đối xứng.'], recognitionSigns: ['So sánh độ phân cực liên kết.', 'Phân biệt liên kết phân cực và phân tử phân cực.'], solvingSteps: ['Xét độ âm điện từng liên kết.', 'Xét sự sắp xếp các liên kết trong toàn phân tử.', 'Tổng hợp các moment liên kết.'], commonMistakes: ['Có liên kết phân cực thì kết luận ngay phân tử phân cực.']
  },
  {
    id: 'chem10-qt17', topicId: 'chem10-t3', name: 'Liên kết Hydrogen & Tương tác van der Waals', slug: 'hydrogen-van-der-waals', description: 'Giải thích lực giữa các phân tử và ảnh hưởng tới tính chất vật lí.', exampleQuestionId: 'chem10-q17a', difficulty: 'medium', examFrequency: 'medium',
    theory: ['Liên kết hydrogen xuất hiện mạnh khi H liên kết với nguyên tử có độ âm điện lớn như N, O, F và tương tác với cặp electron tự do. Van der Waals yếu hơn nhưng tồn tại rộng rãi; độ lớn tăng khi đám mây electron dễ phân cực hơn.'], recognitionSigns: ['So sánh nhiệt độ sôi.', 'Giải thích lực hút giữa các phân tử.'], solvingSteps: ['Xác định liên kết H–N/O/F và cặp electron tự do.', 'Phân biệt lực trong phân tử với lực giữa phân tử.', 'Liên hệ lực hút mạnh hơn với năng lượng tách phân tử lớn hơn.'], commonMistakes: ['Gọi liên kết O–H trong nước là liên kết hydrogen.', 'Cho rằng van der Waals không đáng kể trong mọi trường hợp.']
  },
  {
    id: 'chem10-qt18', topicId: 'chem10-t4', name: 'Xác định Số oxi hóa', slug: 'xac-dinh-so-oxi-hoa', description: 'Tính số oxi hóa của nguyên tố trong đơn chất, ion và hợp chất.', exampleQuestionId: 'chem10-q18a', difficulty: 'easy', examFrequency: 'high', theory: ['Đơn chất có số oxi hóa 0. Ion đơn nguyên tử có số oxi hóa bằng điện tích. Tổng số oxi hóa trong phân tử trung hòa bằng 0; trong ion đa nguyên tử bằng điện tích ion. O thường −2 và H thường +1 trong các trường hợp cơ bản.'], recognitionSigns: ['Yêu cầu tìm số oxi hóa.', 'Cần nhận diện nguyên tố thay đổi số oxi hóa.'], solvingSteps: ['Gán các số oxi hóa đã biết.', 'Lập tổng đại số theo điện tích tiểu phân.', 'Giải và kiểm tra kết quả.'], commonMistakes: ['Nhầm số oxi hóa với điện tích thật trên nguyên tử trong liên kết cộng hóa trị.']
  },
  {
    id: 'chem10-qt19', topicId: 'chem10-t4', name: 'Quá trình Oxi hóa & Khử', slug: 'qua-trinh-oxi-hoa-khu', description: 'Viết và phân biệt quá trình nhường, nhận electron.', exampleQuestionId: 'chem10-q19a', difficulty: 'medium', examFrequency: 'high', theory: ['Oxi hóa là nhường electron, số oxi hóa tăng. Khử là nhận electron, số oxi hóa giảm. Hai quá trình luôn xảy ra đồng thời trong phản ứng oxi hóa–khử.'], recognitionSigns: ['Có sự thay đổi số oxi hóa.', 'Yêu cầu viết bán phản ứng electron.'], solvingSteps: ['Xác định số oxi hóa trước và sau.', 'Số tăng: viết quá trình nhường e.', 'Số giảm: viết quá trình nhận e.'], commonMistakes: ['Đồng nhất oxi hóa với tác dụng oxygen.', 'Đảo chiều electron nhường–nhận.']
  },
  {
    id: 'chem10-qt20', topicId: 'chem10-t4', name: 'Chất Oxi hóa & Chất khử', slug: 'chat-oxi-hoa-chat-khu', description: 'Xác định vai trò của các chất trong phản ứng redox.', exampleQuestionId: 'chem10-q20a', difficulty: 'medium', examFrequency: 'high', theory: ['Chất oxi hóa nhận electron và bị khử. Chất khử nhường electron và bị oxi hóa. Tên gọi mô tả tác dụng của chất lên chất khác, không phải quá trình nó tự trải qua.'], recognitionSigns: ['Yêu cầu chỉ ra chất oxi hóa/chất khử.', 'Cho phản ứng có số oxi hóa thay đổi.'], solvingSteps: ['Theo dõi nguyên tố thay đổi trong từng chất.', 'Chất chứa nguyên tố giảm số oxi hóa là chất oxi hóa.', 'Chất chứa nguyên tố tăng số oxi hóa là chất khử.'], commonMistakes: ['Gọi chất bị oxi hóa là chất oxi hóa.']
  },
  {
    id: 'chem10-qt21', topicId: 'chem10-t4', name: 'Cân bằng bằng Phương pháp Electron', slug: 'can-bang-phuong-phap-electron', description: 'Cân bằng hệ số dựa trên bảo toàn electron.', exampleQuestionId: 'chem10-q21a', difficulty: 'medium', examFrequency: 'high', theory: ['Tổng electron chất khử nhường bằng tổng electron chất oxi hóa nhận. Sau khi cân bằng nguyên tố thay đổi số oxi hóa, tiếp tục cân bằng các nguyên tố còn lại và kiểm tra toàn phương trình.'], recognitionSigns: ['Phản ứng có nguyên tố đổi số oxi hóa.', 'Yêu cầu cân bằng theo electron.'], solvingSteps: ['Xác định số oxi hóa thay đổi.', 'Viết quá trình nhường và nhận electron.', 'Nhân hệ số để bảo toàn electron.', 'Đặt hệ số và cân bằng phần còn lại.', 'Kiểm tra nguyên tử.'], commonMistakes: ['Thay chỉ số trong công thức.', 'Bảo toàn electron nhưng quên kiểm tra nguyên tử khác.']
  },
  { id: 'chem10-qt22', topicId: 'chem10-t5', name: 'Hệ, Môi trường & Tỏa–Thu nhiệt', slug: 'he-moi-truong-toa-thu-nhiet', description: 'Nhận diện hướng truyền năng lượng trong phản ứng.', exampleQuestionId: 'chem10-q22a', difficulty: 'easy', examFrequency: 'high', theory: ['Hệ là phần đang nghiên cứu; phần còn lại là môi trường. Phản ứng tỏa nhiệt truyền năng lượng từ hệ ra môi trường; phản ứng thu nhiệt nhận năng lượng từ môi trường.'], recognitionSigns: ['Nhiệt độ môi trường tăng/giảm.', 'Yêu cầu phân loại tỏa hoặc thu nhiệt.'], solvingSteps: ['Chọn ranh giới hệ.', 'Xác định hướng truyền nhiệt.', 'Kết luận tỏa hay thu nhiệt.'], commonMistakes: ['Đồng nhất nhiệt độ của hệ với nhiệt độ môi trường.'] },
  { id: 'chem10-qt23', topicId: 'chem10-t5', name: 'Biến thiên Enthalpy & Sơ đồ Năng lượng', slug: 'bien-thien-enthalpy-so-do', description: 'Đọc và biểu diễn dấu ΔH.', exampleQuestionId: 'chem10-q23a', difficulty: 'medium', examFrequency: 'high', theory: ['$\\Delta H=H_{sản phẩm}-H_{chất đầu}$. Tỏa nhiệt: ΔH < 0, sản phẩm thấp năng lượng hơn. Thu nhiệt: ΔH > 0. Đảo chiều phản ứng phải đổi dấu ΔH; nhân phương trình phải nhân ΔH.'], recognitionSigns: ['Cho sơ đồ mức năng lượng.', 'Đổi chiều hoặc nhân hệ số phương trình nhiệt hóa học.'], solvingSteps: ['So sánh mức năng lượng.', 'Tính sản phẩm trừ chất đầu.', 'Kiểm tra chiều và hệ số.'], commonMistakes: ['Đảo phản ứng nhưng giữ nguyên dấu.', 'Nhân hệ số mà không nhân ΔH.'] },
  { id: 'chem10-qt24', topicId: 'chem10-t5', name: 'Enthalpy Tạo thành & ΔH Phản ứng', slug: 'enthalpy-tao-thanh', description: 'Tính ΔH từ dữ liệu tạo thành chuẩn.', exampleQuestionId: 'chem10-q24a', difficulty: 'medium', examFrequency: 'high', theory: ['$\\Delta H^\\circ_{phản ứng}=\\sum \\nu\\Delta_fH^\\circ(sản phẩm)-\\sum \\nu\\Delta_fH^\\circ(chất đầu)$. Enthalpy tạo thành chuẩn của đơn chất bền ở trạng thái chuẩn bằng 0.'], recognitionSigns: ['Cho bảng ΔfH°.', 'Yêu cầu tính nhiệt phản ứng.'], solvingSteps: ['Cân bằng phương trình.', 'Nhân mỗi giá trị với hệ số.', 'Lấy tổng sản phẩm trừ tổng chất đầu.'], commonMistakes: ['Bỏ hệ số.', 'Đảo thứ tự chất đầu và sản phẩm.'] },
  { id: 'chem10-qt25', topicId: 'chem10-t5', name: 'Năng lượng Liên kết & ΔH', slug: 'nang-luong-lien-ket', description: 'Ước tính ΔH bằng liên kết bị phá và được tạo.', exampleQuestionId: 'chem10-q25a', difficulty: 'medium', examFrequency: 'high', theory: ['$\\Delta H\\approx\\sum E(liên kết bị phá)-\\sum E(liên kết được tạo)$. Phá liên kết cần năng lượng; tạo liên kết giải phóng năng lượng. Giá trị năng lượng liên kết thường là trung bình nên kết quả là gần đúng.'], recognitionSigns: ['Cho bảng năng lượng liên kết.', 'Phản ứng ở pha khí với cấu tạo liên kết rõ.'], solvingSteps: ['Đếm liên kết bị phá.', 'Đếm liên kết được tạo.', 'Tính phá trừ tạo và xét dấu.'], commonMistakes: ['Dùng tạo trừ phá.', 'Đếm sai số liên kết theo hệ số.'] },
  { id: 'chem10-qt26', topicId: 'chem10-t6', name: 'Tốc độ Trung bình', slug: 'toc-do-trung-binh', description: 'Tính biến thiên nồng độ theo thời gian.', exampleQuestionId: 'chem10-q26a', difficulty: 'easy', examFrequency: 'high', theory: ['Tốc độ trung bình là độ biến thiên nồng độ trong một khoảng thời gian. Chất đầu giảm nên dùng dấu âm để tốc độ dương; sản phẩm tăng.'], recognitionSigns: ['Cho nồng độ ở hai thời điểm.'], solvingSteps: ['Tính ΔC.', 'Tính Δt.', 'Xét dấu, hệ số và đơn vị.'], commonMistakes: ['Quên dấu hoặc đơn vị.'] },
  { id: 'chem10-qt27', topicId: 'chem10-t6', name: 'Đồ thị Nồng độ–Thời gian', slug: 'do-thi-nong-do-thoi-gian', description: 'Đọc xu hướng và độ dốc.', exampleQuestionId: 'chem10-q27a', difficulty: 'medium', examFrequency: 'high', theory: ['Chất đầu thường giảm, sản phẩm tăng. Độ lớn độ dốc biểu thị tốc độ tức thời tương đối; đường thường phẳng dần khi chất đầu bị tiêu thụ.'], recognitionSigns: ['Cho đồ thị C–t.'], solvingSteps: ['Đọc trục.', 'Xác định đường tăng/giảm.', 'So sánh độ dốc.'], commonMistakes: ['Đồng nhất nồng độ lớn với tốc độ lớn.'] },
  { id: 'chem10-qt28', topicId: 'chem10-t6', name: 'Va chạm & Yếu tố Ảnh hưởng', slug: 'va-cham-yeu-to', description: 'Giải thích các yếu tố làm đổi tốc độ.', exampleQuestionId: 'chem10-q28a', difficulty: 'medium', examFrequency: 'high', theory: ['Va chạm hiệu quả cần đủ năng lượng và định hướng phù hợp. Nồng độ/áp suất tăng tần suất va chạm; nhiệt độ tăng tỉ lệ hạt đủ năng lượng; nghiền nhỏ tăng diện tích tiếp xúc.'], recognitionSigns: ['So sánh điều kiện phản ứng.'], solvingSteps: ['Xác định yếu tố thay đổi.', 'Liên hệ va chạm hiệu quả.', 'Chỉ kết luận về tốc độ.'], commonMistakes: ['Cho rằng nhanh hơn luôn tạo nhiều sản phẩm hơn.'] },
  { id: 'chem10-qt29', topicId: 'chem10-t6', name: 'Xúc tác & Thiết kế Thí nghiệm', slug: 'xuc-tac-thi-nghiem', description: 'Giải thích xúc tác và kiểm soát biến.', exampleQuestionId: 'chem10-q29a', difficulty: 'medium', examFrequency: 'high', theory: ['Xúc tác tạo con đường có năng lượng hoạt hóa thấp hơn, tăng tốc độ nhưng không đổi ΔH. Thí nghiệm công bằng chỉ thay một biến và giữ các biến khác ổn định.'], recognitionSigns: ['So sánh có/không xúc tác.'], solvingSteps: ['Xác định biến.', 'Kiểm tra biến kiểm soát.', 'Giải thích bằng năng lượng hoạt hóa.'], commonMistakes: ['Cho rằng xúc tác đổi ΔH hoặc lượng sản phẩm cuối.'] },
  { id: 'chem10-qt30', topicId: 'chem10-t7', name: 'Vị trí & Xu hướng Halogen', slug: 'xu-huong-halogen', description: 'Giải thích cấu hình và xu hướng nhóm VIIA.', exampleQuestionId: 'chem10-q30a', difficulty: 'easy', examFrequency: 'high', theory: ['Halogen có lớp ngoài cùng $ns^2np^5$. Đi xuống nhóm, bán kính và nhiệt độ sôi thường tăng, tính oxi hóa giảm.'], recognitionSigns: ['So sánh F, Cl, Br, I.'], solvingSteps: ['Xét cấu hình.', 'Xét bán kính.', 'Suy xu hướng.'], commonMistakes: ['Cho rằng mọi tính chất tăng cùng chiều.'] },
  { id: 'chem10-qt31', topicId: 'chem10-t7', name: 'Tính Oxi hóa & Phản ứng Thế', slug: 'the-halogen', description: 'Dự đoán phản ứng halogen–halide.', exampleQuestionId: 'chem10-q31a', difficulty: 'medium', examFrequency: 'high', theory: ['Tính oxi hóa giảm $F_2>Cl_2>Br_2>I_2$. Halogen mạnh hơn oxi hóa được halide yếu hơn.'], recognitionSigns: ['Halogen gặp muối halide.'], solvingSteps: ['Xếp tính oxi hóa.', 'Chọn chiều phản ứng.', 'Cân bằng electron.'], commonMistakes: ['Đảo chiều phản ứng thế.'] },
  { id: 'chem10-qt32', topicId: 'chem10-t7', name: 'Phản ứng Đặc trưng Halogen', slug: 'phan-ung-halogen', description: 'Phản ứng với H2, nước và kiềm.', exampleQuestionId: 'chem10-q32a', difficulty: 'medium', examFrequency: 'high', theory: ['Halogen phản ứng H2 tạo HX. Chlorine với nước tạo HCl và HClO; với kiềm lạnh loãng tạo chloride và hypochlorite.'], recognitionSigns: ['Halogen gặp H2, nước, NaOH.'], solvingSteps: ['Xác định điều kiện.', 'Theo dõi số oxi hóa.', 'Cân bằng.'], commonMistakes: ['Bỏ qua điều kiện phản ứng.'] },
  { id: 'chem10-qt33', topicId: 'chem10-t7', name: 'Hydrogen Halide & Acid', slug: 'hydrogen-halide', description: 'So sánh HF, HCl, HBr, HI.', exampleQuestionId: 'chem10-q33a', difficulty: 'medium', examFrequency: 'high', theory: ['Liên kết H–F rất bền và HF tạo liên kết hydrogen. Độ mạnh acid trong nước tăng HF < HCl < HBr < HI; tính khử halide tăng từ F− đến I−.'], recognitionSigns: ['So sánh HX.'], solvingSteps: ['Xét độ bền H–X.', 'Xét phân li.', 'Xét khả năng nhường electron.'], commonMistakes: ['Suy acid mạnh chỉ từ độ âm điện.'] },
  { id: 'chem10-qt34', topicId: 'chem10-t7', name: 'Nhận biết Ion Halide', slug: 'nhan-biet-halide', description: 'Nhận biết bằng ion bạc.', exampleQuestionId: 'chem10-q34a', difficulty: 'medium', examFrequency: 'high', theory: ['AgCl trắng, AgBr vàng nhạt/kem, AgI vàng. Cần kết hợp hiện tượng với phương trình ion và an toàn hóa chất.'], recognitionSigns: ['Thêm AgNO3 vào halide.'], solvingSteps: ['Xác định ion.', 'Dự đoán kết tủa.', 'Viết phương trình ion.'], commonMistakes: ['Nhớ màu nhưng nhầm ion.'] }
];
