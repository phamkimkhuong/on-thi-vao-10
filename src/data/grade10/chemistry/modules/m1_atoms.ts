import { QuestionType, Question, Solution } from '@/types';

export const m1QuestionTypes: QuestionType[] = [
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
      'Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều.',
      'Hiểu sai rằng hạt nhân chiếm phần lớn thể tích của nguyên tử (thực tế hạt nhân cực kì nhỏ bé).'
    ]
  },
  {
    id: 'chem10-qt2',
    topicId: 'chem10-t1',
    name: 'Nguyên tố hóa học & Kí hiệu nguyên tử (H10-A02)',
    slug: 'nguyen-to-hoa-hoc-ki-hieu-nguyen-tu',
    description: 'Xác định số hiệu nguyên tử Z, số khối A và viết/đọc kí hiệu nguyên tử dưới dạng _{Z}^{A}\\text{X}$. Định nghĩa nguyên tố dựa trên số proton.',
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
  }
];

export const m1Questions: Question[] = [
  {
    id: 'chem10-q1',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt1',
    content: 'Phát biểu nào sau đây về cấu tạo nguyên tử là đúng?\nA. Electron có khối lượng xấp xỉ bằng khối lượng proton.\nB. Hạt nhân chiếm hầu hết thể tích và khối lượng của nguyên tử.\nC. Neutron nằm ở hạt nhân và mang điện tích âm.\nD. Khối lượng nguyên tử tập trung hầu hết ở hạt nhân vì khối lượng electron là vô cùng nhỏ.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'D',
    acceptedAnswers: ['D', 'd'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q2',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt2',
    content: 'Kí hiệu nguyên tử nào sau đây biểu diễn chính xác nguyên tử Potassium (Kali) có chứa 19 proton, 20 neutron và 19 electron?\nA. $_{19}^{20}\\text{K}$\nB. $_{19}^{39}\\text{K}$\nC. $_{20}^{39}\\text{Ca}$\nD. $_{39}^{19}\\text{K}$',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q3',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt3',
    content: 'Phổ khối lượng (MS) của nguyên tố chlorine trong tự nhiên cho thấy hai đồng vị chính có số khối và độ phổ biến như sau: $^{35}\\text{Cl}$ chiếm 75,77% và $^{37}\\text{Cl}$ chiếm 24,23%. Hãy tính nguyên tử khối trung bình của chlorine (làm tròn kết quả đến hai chữ số thập phân).',
    difficulty: 'medium',
    sourceType: 'official_exam',
    correctAnswer: '35.48',
    acceptedAnswers: ['35.48', '35,48'],
    validatorType: 'exact'
  },
  {
    id: 'chem10-q4',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt4',
    content: 'Theo mô hình nguyên tử lượng tử hiện đại, orbital nguyên tử (AO) được định nghĩa là gì?\nA. Quỹ đạo tròn hoặc bầu dục xác định mà electron chạy dọc theo đó.\nB. Vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).\nC. Đám mây chứa toàn bộ proton và electron của nguyên tử.\nD. Đường đi chuyển động của electron giống như hành tinh quay quanh Mặt Trời.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q5',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt5',
    content: 'Lớp electron M ($n = 3$) có tối đa bao nhiêu orbital nguyên tử (AO) và chứa tối đa bao nhiêu electron?\nA. 3 orbital, 6 electron\nB. 9 orbital, 18 electron\nC. 4 orbital, 8 electron\nD. 16 orbital, 32 electron',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q6',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt6',
    content: 'Nguyên tử chlorine có số hiệu nguyên tử Z = 17. Cấu hình electron và số electron độc thân ở trạng thái cơ bản được biểu diễn đúng là:\nA. $1s^2 2s^2 2p^6 3s^2 3p^5$, có 1 electron độc thân.\nB. $1s^2 2s^2 2p^6 3s^2 3p^5$, không có electron độc thân.\nC. $1s^2 2s^2 2p^6 3s^2 3p^6$, có 1 electron độc thân.\nD. $1s^2 2s^2 2p^6 3s^2 3p^4$, có 2 electron độc thân.',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'A',
    acceptedAnswers: ['A', 'a'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q7',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt7',
    content: 'Một nguyên tử nguyên tố X có cấu hình electron lớp ngoài cùng là $3s^2 3p^4$. Phát biểu nào sau đây về X là đúng?\nA. X là một kim loại mạnh vì có 6 electron lớp ngoài cùng.\nB. X là một phi kim vì có 6 electron lớp ngoài cùng.\nC. X là một khí hiếm trơ về mặt hóa học.\nD. X là một phi kim vì có 4 electron ở phân lớp ngoài cùng.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q1b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Một nguyên tử trung hòa có 13 proton và 14 neutron. Phát biểu nào đúng?\nA. Nguyên tử có 14 electron và số khối 27.\nB. Nguyên tử có 13 electron và số khối 27.\nC. Nguyên tử có 13 electron và số khối 14.\nD. Nguyên tử có 27 electron và 13 neutron.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q2b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Hai nguyên tử X và Y lần lượt có (17 proton, 18 neutron) và (17 proton, 20 neutron). Kết luận nào đúng?\nA. X và Y là hai nguyên tố khác nhau vì khác số neutron.\nB. X và Y là đồng vị của cùng một nguyên tố vì cùng số proton.\nC. X và Y có cùng số khối.\nD. X và Y có số electron khác nhau khi đều trung hòa.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q3b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Phổ khối của một nguyên tố có hai đỉnh tại m/z = 10 và m/z = 11 với cường độ tương đối lần lượt 20% và 80%. Phát biểu nào đúng?\nA. Đồng vị khối lượng 10 phổ biến hơn vì nằm bên trái.\nB. Đồng vị khối lượng 11 chiếm 80% và nguyên tử khối trung bình xấp xỉ 10,8.\nC. Đỉnh cao hơn chứng tỏ đồng vị có điện tích hạt nhân lớn hơn.\nD. Nguyên tử khối trung bình bằng 10,5 vì lấy trung bình cộng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q4b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Phát biểu nào mô tả đúng nhất vai trò của mô hình Rutherford–Bohr trong học tập?\nA. Đây là ảnh chụp chính xác đường đi của electron.\nB. Mô hình hoàn toàn vô dụng vì đã có mô hình hiện đại.\nC. Mô hình giúp biểu diễn mức năng lượng và lớp electron một cách trực quan nhưng không mô tả electron chạy trên quỹ đạo xác định trong mô hình hiện đại.\nD. Mô hình chứng minh orbital có dạng đường tròn.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q5b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Phân lớp p có bao nhiêu orbital và chứa tối đa bao nhiêu electron?\nA. 1 orbital và 2 electron.\nB. 2 orbital và 4 electron.\nC. 3 orbital và 6 electron.\nD. 6 orbital và 12 electron.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q6b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Nguyên tử oxygen có Z = 8. Cấu hình electron nào đúng?\nA. $1s^2 2s^2 2p^4$\nB. $1s^2 2s^2 2p^6$\nC. $1s^2 2s^4 2p^2$\nD. $1s^2 2p^6$',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q7b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Nguyên tử X có cấu hình electron $1s^2 2s^2 2p^6 3s^1$. Dự đoán nào hợp lí nhất?\nA. X là khí hiếm vì có lớp thứ hai bão hòa.\nB. X có xu hướng nhận thêm 7 electron.\nC. X là kim loại và có xu hướng nhường 1 electron lớp ngoài cùng.\nD. X là phi kim vì chỉ có 1 electron lớp ngoài cùng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  // Dữ liệu từ foundationPractice
  { id: 'chem10-q1c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1', content: 'Nguyên tử trung hòa X có 15 electron và số khối 31. Số proton và neutron lần lượt là:\nA. 15 và 16\nB. 16 và 15\nC. 15 và 31\nD. 31 và 15', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q1d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1', content: 'Phát biểu nào đúng về kích thước nguyên tử?\nA. Hạt nhân chiếm gần toàn bộ thể tích.\nB. Electron tập trung bên trong hạt nhân.\nC. Hạt nhân rất nhỏ so với nguyên tử nhưng chứa gần hết khối lượng.\nD. Neutron quyết định điện tích nguyên tử.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q2c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2', content: 'Nguyên tử $^{40}_{20}Ca$ có số proton, neutron, electron là:\nA. 20, 20, 20\nB. 20, 40, 20\nC. 40, 20, 40\nD. 20, 20, 40', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q2d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2', content: 'Hai nguyên tử có cùng Z nhưng khác A. Kết luận đúng là:\nA. Hai ion trái dấu.\nB. Hai đồng vị của cùng nguyên tố.\nC. Hai nguyên tố khác nhau.\nD. Có cùng số neutron.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q3c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3', content: 'Nguyên tố X có 60% đồng vị khối lượng 24 và 40% đồng vị khối lượng 26. Nguyên tử khối trung bình là:\nA. 24,0\nB. 24,8\nC. 25,0\nD. 26,0', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q3d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3', content: 'Trên phổ khối, hai đỉnh tại 79 và 81 có chiều cao gần bằng nhau. Diễn giải phù hợp nhất là:\nA. Hai đồng vị có độ phổ biến gần bằng nhau.\nB. Đồng vị 81 nhẹ hơn.\nC. Nguyên tố có số proton 79 và 81.\nD. Nguyên tử khối chắc chắn bằng 81.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q4c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4', content: 'Điểm khác biệt cốt lõi giữa quỹ đạo Bohr và orbital hiện đại là:\nA. Orbital là vùng xác suất, không phải đường đi xác định.\nB. Orbital chứa proton.\nC. Bohr không có hạt nhân.\nD. Hai khái niệm hoàn toàn giống nhau.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q4d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4', content: 'Khi dùng hình “đám mây electron”, cách hiểu đúng là:\nA. Electron là hơi nước.\nB. Mật độ đám mây biểu diễn xác suất tìm thấy electron.\nC. Đó là ảnh chụp electron đứng yên.\nD. Rìa đám mây là quỹ đạo cứng.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q5c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5', content: 'Phân lớp s có số orbital và sức chứa tối đa là:\nA. 1 AO, 2 electron\nB. 2 AO, 4 electron\nC. 3 AO, 6 electron\nD. 5 AO, 10 electron', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q5d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5', content: 'Lớp n = 2 gồm các phân lớp nào và chứa tối đa bao nhiêu electron?\nA. 2s; 2 electron\nB. 2s, 2p; 8 electron\nC. 2p, 2d; 10 electron\nD. 2s, 2p, 2d; 18 electron', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q6c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6', content: 'Cấu hình electron của Na (Z = 11) là:\nA. $1s^22s^22p^63s^1$\nB. $1s^22s^22p^53s^2$\nC. $1s^22s^22p^6$\nD. $1s^22s^22p^63p^1$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q6d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6', content: 'Theo quy tắc Hund, ba electron đầu tiên điền vào ba AO p như thế nào?\nA. Ghép đôi trong một AO trước.\nB. Phân bố độc thân vào ba AO với spin song song trước.\nC. Chỉ điền hai AO.\nD. Mỗi AO chứa ba electron.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q7c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7', content: 'Nguyên tử có lớp ngoài cùng $2s^22p^6$ được dự đoán là:\nA. Kim loại kiềm mạnh.\nB. Phi kim hoạt động mạnh.\nC. Khí hiếm tương đối trơ.\nD. Có xu hướng nhận thêm 6 electron.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q7d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7', content: 'X có cấu hình lớp ngoài cùng $3s^23p^5$. Xu hướng tạo ion đơn nguyên tử hợp lí nhất là:\nA. Nhường 5 electron.\nB. Nhận 1 electron tạo $X^-$.\nC. Nhường 2 electron tạo $X^{2+}$.\nD. Không có electron hóa trị.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m1Solutions: Solution[] = [
  {
    id: 'chem10-s1',
    questionId: 'chem10-q1',
    recognition: 'Câu hỏi lý thuyết kiểm tra thành phần cấu tạo nguyên tử, độ rỗng nguyên tử và tỉ lệ khối lượng của các hạt cơ bản.',
    detailedSteps: [
      { order: 1, title: 'Phân tích phương án A', explanation: 'Khối lượng electron $m_e \\approx 0,00055\\text{ amu}$ vô cùng nhỏ, chỉ bằng khoảng $\\frac{1}{1837}$ khối lượng proton ($m_p \\approx 1\\text{ amu}$). Do đó, phát biểu A là **sai**.' },
      { order: 2, title: 'Phân tích phương án B', explanation: 'Hạt nhân chiếm hầu hết khối lượng của nguyên tử (do electron quá nhẹ), nhưng kích thước hạt nhân lại vô cùng nhỏ bé so với nguyên tử (nhỏ hơn khoảng 10.000 lần). Phần lớn thể tích nguyên tử là khoảng trống. Do đó, phát biểu B là **sai**.' },
      { order: 3, title: 'Phân tích phương án C', explanation: 'Neutron là hạt không mang điện tích ($0$), nằm trong hạt nhân nguyên tử cùng với proton (mang điện tích dương). Do đó, phát biểu C là **sai**.' },
      { order: 4, title: 'Phân tích phương án D', explanation: 'Vì khối lượng electron cực kì nhỏ bé, nên khối lượng toàn bộ nguyên tử tập trung hầu hết ở hạt nhân. Phát biểu D là **đúng**.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Nhầm lẫn electron có khối lượng lớn tương đương với proton.', 'Hiểu sai rằng hạt nhân to và chiếm phần lớn thể tích nguyên tử.'],
    reviewSuggestions: ['Ôn lại bảng đặc trưng khối lượng và điện tích của 3 loại hạt cơ bản p, n, e.']
  },
  {
    id: 'chem10-s2',
    questionId: 'chem10-q2',
    recognition: 'Câu hỏi viết kí hiệu nguyên tử $_{Z}^{A}\\text{X}$ từ số hạt p, n, e cho trước.',
    detailedSteps: [
      { order: 1, title: 'Xác định số hiệu nguyên tử Z và chỉ số dưới', explanation: 'Số hiệu nguyên tử $Z$ bằng số proton của nguyên tử: $Z = 19$. Số hiệu này được viết ở góc dưới bên trái của kí hiệu nguyên tử: $_{19}\\text{K}$.' },
      { order: 2, title: 'Xác định số khối A và chỉ số trên', explanation: 'Số khối $A = Z + N = 19 + 20 = 39$. Số khối được viết ở góc trên bên trái của kí hiệu nguyên tử: $^{39}\\text{K}$.' },
      { order: 3, title: 'Tổng hợp kí hiệu nguyên tử', explanation: 'Ghép chỉ số trên và chỉ số dưới ta được kí hiệu nguyên tử hoàn chỉnh của Potassium: $_{19}^{39}\\text{K}$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn số khối A bằng số neutron (viết $_{19}^{20}\\text{K}$ - Phương án A).', 'Nhầm lẫn vị trí số hiệu Z ở trên, số khối A ở dưới (viết $_{39}^{19}\\text{K}$ - Phương án D).', 'Nhầm sang nguyên tố Calcium khi thấy số hạt neutron bằng 20 (viết $_{20}^{39}\\text{Ca}$ - Phương án C).'],
    reviewSuggestions: ['Ghi nhớ quy ước chuẩn quốc tế: số khối A viết ở TRÊN, số hiệu nguyên tử Z viết ở DƯỚI.']
  },
  {
    id: 'chem10-s3',
    questionId: 'chem10-q3',
    recognition: 'Tính nguyên tử khối trung bình của Chlorine từ dữ liệu phần trăm của hai đồng vị $^{35}\\text{Cl}$ và $^{37}\\text{Cl}$.',
    detailedSteps: [
      { order: 1, title: 'Trích xuất thông số từ phổ khối lượng', explanation: 'Đồng vị thứ nhất: $A_1 = 35$, chiếm tỉ lệ $x_1 = 75,77\\%$.\nĐồng vị thứ hai: $A_2 = 37$, chiếm tỉ lệ $x_2 = 24,23\\%$.' },
      { order: 2, title: 'Áp dụng công thức tính nguyên tử khối trung bình', explanation: 'Thay các thông số vào công thức trung bình có trọng số:\n$$\\overline{A} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2}{100}$$\n$$\\overline{A} = \\frac{35 \\cdot 75,77 + 37 \\cdot 24,23}{100} = \\frac{2651,95 + 896,51}{100} = \\frac{3548,46}{100} = 35,4846$$' },
      { order: 3, title: 'Làm tròn kết quả', explanation: 'Làm tròn kết quả đến hai chữ số thập phân thu được: $35,48$.' }
    ],
    finalAnswer: '35.48',
    commonMistakes: ['Lấy trung bình cộng đơn thuần: $\\frac{35 + 37}{2} = 36$. Đây là lỗi cực kì phổ biến khi không hiểu bản chất trọng số đồng vị.', 'Làm tròn sai quy tắc hoặc nhầm lẫn phần trăm.'],
    reviewSuggestions: ['Ghi nhớ rằng nguyên tử khối trung bình trong bảng tuần hoàn đại diện cho hỗn hợp trung bình của các đồng vị tự nhiên, không phải một nguyên tử Chlorine đơn lẻ có khối lượng 35,48.']
  },
  {
    id: 'chem10-s4',
    questionId: 'chem10-q4',
    recognition: 'Câu hỏi phân biệt khái niệm quỹ đạo chuyển động xác định (Bohr) và đám mây xác suất tìm thấy electron (Orbital hiện đại).',
    detailedSteps: [
      { order: 1, title: 'Phân tích khái niệm quỹ đạo cổ điển (Rutherford-Bohr)', explanation: 'Theo mô hình Rutherford-Bohr, electron chuyển động dọc theo một quỹ đạo xác định (giống đường đi của hành tinh quanh Mặt Trời). Phương án A và D mô tả quan điểm cũ này.' },
      { order: 2, title: 'Phân tích khái niệm orbital lượng tử hiện đại', explanation: 'Theo mô hình lượng tử, electron chuyển động rất nhanh và không có quỹ đạo cố định. Do đó ta chỉ có thể xác định vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là cao nhất (khoảng 90%). Vùng này được gọi là orbital nguyên tử (AO). Vậy phương án B mô tả đúng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất orbital với quỹ đạo chuyển động tròn hoặc bầu dục vật lý.', 'Cho rằng mô hình Bohr mô tả đúng hoàn toàn hành vi lượng tử vi mô của electron.'],
    reviewSuggestions: ['Đọc kĩ sự tiến hóa của các mô hình nguyên tử và lý do chuyển dịch sang mô hình lượng tử.']
  },
  {
    id: 'chem10-s5',
    questionId: 'chem10-q5',
    recognition: 'Tính toán số lượng orbital và số electron tối đa của lớp M ($n = 3$) dựa trên công thức cấu tạo lớp.',
    detailedSteps: [
      { order: 1, title: 'Xác định số phân lớp của lớp M', explanation: 'Lớp M tương ứng với số thứ tự lớp $n = 3$. Lớp thứ 3 có 3 phân lớp là: $3s$, $3p$, và $3d$.' },
      { order: 2, title: 'Xác định số orbital (AO) trong mỗi phân lớp', explanation: '- Phân lớp $3s$ có 1 orbital.\n- Phân lớp $3p$ có 3 orbital.\n- Phân lớp $3d$ có 5 orbital.\nTổng số orbital của lớp M là: $1 + 3 + 5 = 9$ orbital (thỏa mãn công thức $n^2 = 3^2 = 9$).' },
      { order: 3, title: 'Tính số electron tối đa', explanation: 'Mỗi orbital chứa tối đa 2 electron ngược chiều tự quay (theo nguyên lí Pauli). Số electron tối đa là:\n$$9 \\cdot 2 = 18 \\text{ electron (hoặc } 2n^2 = 2 \\cdot 3^2 = 18\\text{ e)}$$\nVậy phương án B là đúng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn lớp M ($n=3$) có 3 orbital (tương ứng số phân lớp, chọn phương án A).', 'Quên nhân đôi số orbital để tìm số electron tối đa, hoặc nhầm lẫn kí hiệu lớp M với lớp N ($n=4$, chọn phương án D).'],
    reviewSuggestions: ['Ghi nhớ dãy kí hiệu lớp: K(1), L(2), M(3), N(4) và các công thức tổng quát số AO ($n^2$) và e tối đa ($2n^2$).']
  },
  {
    id: 'chem10-s6',
    questionId: 'chem10-q6',
    recognition: 'Viết cấu hình electron của chlorine và phân bố electron trên ba orbital thuộc phân lớp 3p.',
    detailedSteps: [
      { order: 1, title: 'Điền đủ 17 electron', explanation: 'Điền electron theo thứ tự mức năng lượng thu được $1s^2 2s^2 2p^6 3s^2 3p^5$. Tổng số mũ là $2+2+6+2+5=17$, đúng bằng Z.' },
      { order: 2, title: 'Phân bố electron trên orbital 3p', explanation: 'Phân lớp p có 3 orbital. Năm electron được phân bố sao cho ba orbital nhận electron đơn trước rồi mới ghép đôi, vì vậy còn đúng 1 electron độc thân. Chọn A.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đếm đúng tổng electron nhưng ghép đôi electron trong orbital p quá sớm, dẫn đến sai số electron độc thân.'],
    reviewSuggestions: ['Ôn lại thứ tự điền electron và quy tắc phân bố electron độc thân trên các orbital cùng mức năng lượng.']
  },
  {
    id: 'chem10-s7',
    questionId: 'chem10-q7',
    recognition: 'Dự đoán tính chất phi kim từ cấu hình electron lớp ngoài cùng $3s^2 3p^4$.',
    detailedSteps: [
      { order: 1, title: 'Tính số electron lớp ngoài cùng', explanation: 'Cấu hình electron lớp ngoài cùng của X là $3s^2 3p^4$. Lớp ngoài cùng là lớp thứ 3. Tổng số electron lớp ngoài cùng là: $2 (ở 3s) + 4 (ở 3p) = 6$ electron.' },
      { order: 2, title: 'Dự đoán loại nguyên tố', explanation: 'Nguyên tử có 6 electron lớp ngoài cùng (tương tự Oxygen, Sulfur) là những phi kim tiêu biểu. Các nguyên tử này có xu hướng nhận thêm 2 electron (hoặc góp chung electron) để đạt cấu hình octet vững bền. Vậy phương án B là phát biểu đúng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn số electron ở lớp ngoài cùng với số electron ở phân lớp ngoài cùng (nghĩ có 4e ngoài cùng nên là kim loại, chọn phương án D).', 'Cho rằng 6 electron ngoài cùng thì dễ nhường đi nên là kim loại mạnh (nhầm xu hướng nhận e của phi kim thành nhường e, chọn phương án A).'],
    reviewSuggestions: ['Ôn tập quy tắc xác định kim loại, phi kim, khí hiếm dựa trên số electron lớp ngoài cùng (1,2,3 e: kim loại; 5,6,7 e: phi kim; 8 e: khí hiếm).']
  },
  {
    id: 'chem10-s1b', questionId: 'chem10-q1b', recognition: 'Dùng tính trung hòa điện và định nghĩa số khối.',
    detailedSteps: [{ order: 1, title: 'Tính số electron', explanation: 'Nguyên tử trung hòa có số electron bằng số proton, nên có 13 electron.' }, { order: 2, title: 'Tính số khối', explanation: 'Số khối $A=p+n=13+14=27$. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Nhầm số neutron với số electron hoặc coi số khối chỉ bằng số neutron.'], reviewSuggestions: ['Ôn quan hệ $e=p$ trong nguyên tử trung hòa và $A=p+n$.']
  },
  {
    id: 'chem10-s2b', questionId: 'chem10-q2b', recognition: 'Số proton quyết định danh tính nguyên tố; số neutron phân biệt đồng vị.',
    detailedSteps: [{ order: 1, title: 'So sánh số proton', explanation: 'X và Y đều có 17 proton nên thuộc cùng một nguyên tố.' }, { order: 2, title: 'So sánh số neutron', explanation: 'Hai nguyên tử khác số neutron nên là hai đồng vị; khi trung hòa chúng đều có 17 electron. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Cho rằng thay đổi neutron tạo ra nguyên tố mới.'], reviewSuggestions: ['Ghi nhớ: proton quyết định nguyên tố, neutron quyết định đồng vị.']
  },
  {
    id: 'chem10-s3b', questionId: 'chem10-q3b', recognition: 'Đọc vị trí đỉnh là khối lượng và cường độ đỉnh là độ phổ biến.',
    detailedSteps: [{ order: 1, title: 'Đọc độ phổ biến', explanation: 'Đỉnh tại 11 có cường độ 80%, nên đồng vị khối lượng 11 phổ biến hơn.' }, { order: 2, title: 'Tính trung bình có trọng số', explanation: '$\\overline{A}=10\\times0{,}20+11\\times0{,}80=10{,}8$. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Lấy trung bình cộng 10,5 hoặc coi đỉnh cao hơn là đồng vị nặng hơn mà không đọc trục.'], reviewSuggestions: ['Ôn ý nghĩa hai trục của phổ khối và trung bình có trọng số.']
  },
  {
    id: 'chem10-s4b', questionId: 'chem10-q4b', recognition: 'Đánh giá giá trị và giới hạn của một mô hình khoa học.',
    detailedSteps: [{ order: 1, title: 'Giữ lại giá trị của mô hình', explanation: 'Mô hình Rutherford–Bohr hữu ích để biểu diễn lớp và mức năng lượng một cách trực quan.' }, { order: 2, title: 'Nhận diện giới hạn', explanation: 'Mô hình hiện đại không xem electron chạy trên đường tròn xác định. Vì vậy C là mô tả cân bằng và đúng nhất.' }],
    finalAnswer: 'C', commonMistakes: ['Chọn một trong hai cực đoan: coi mô hình là ảnh chụp hoàn toàn đúng hoặc hoàn toàn vô dụng.'], reviewSuggestions: ['Phân biệt mô hình khoa học với hình ảnh trực tiếp của thế giới vi mô.']
  },
  {
    id: 'chem10-s5b', questionId: 'chem10-q5b', recognition: 'Nhớ cấu trúc phân lớp p.',
    detailedSteps: [{ order: 1, title: 'Đếm orbital', explanation: 'Phân lớp p gồm 3 orbital có cùng mức năng lượng.' }, { order: 2, title: 'Tính sức chứa', explanation: 'Mỗi orbital chứa tối đa 2 electron, nên phân lớp p chứa tối đa $3\\times2=6$ electron. Chọn C.' }],
    finalAnswer: 'C', commonMistakes: ['Nhầm số orbital với số electron tối đa.'], reviewSuggestions: ['Lập bảng s: 1 AO/2e; p: 3 AO/6e; d: 5 AO/10e.']
  },
  {
    id: 'chem10-s6b', questionId: 'chem10-q6b', recognition: 'Điền 8 electron theo thứ tự mức năng lượng.',
    detailedSteps: [{ order: 1, title: 'Điền electron', explanation: '$1s$ nhận 2e, $2s$ nhận 2e, còn 4e điền vào $2p$.' }, { order: 2, title: 'Kiểm tra tổng', explanation: '$1s^2 2s^2 2p^4$ có tổng 8 electron, nên A đúng.' }],
    finalAnswer: 'A', commonMistakes: ['Viết một phân lớp s chứa quá 2 electron hoặc bỏ qua phân lớp 2s.'], reviewSuggestions: ['Luôn cộng tổng số mũ và đối chiếu với Z.']
  },
  {
    id: 'chem10-s7b', questionId: 'chem10-q7b', recognition: 'Dự đoán xu hướng tính chất từ một electron lớp ngoài cùng.',
    detailedSteps: [{ order: 1, title: 'Xác định lớp ngoài cùng', explanation: 'Cấu hình kết thúc bằng $3s^1$, nên X có 1 electron lớp ngoài cùng.' }, { order: 2, title: 'Dự đoán xu hướng', explanation: 'Nguyên tử có 1 electron lớp ngoài cùng thường dễ nhường electron đó để đạt cấu hình bền, thể hiện tính kim loại. Chọn C.' }],
    finalAnswer: 'C', commonMistakes: ['Chỉ nhìn lớp thứ hai đã bão hòa mà bỏ qua electron ở lớp thứ ba.'], reviewSuggestions: ['Khi phân loại, luôn xác định lớp có số n lớn nhất trước.']
  },
  // Dữ liệu giải từ foundationPractice
  ...[
    { id: 'chem10-s1c', qId: 'chem10-q1c', ans: 'A', exp: 'Nguyên tử trung hòa có p=e=15; $n=A-Z=31-15=16$.' },
    { id: 'chem10-s1d', qId: 'chem10-q1d', ans: 'C', exp: 'Hạt nhân có kích thước rất nhỏ, chứa proton và neutron nên tập trung gần hết khối lượng.' },
    { id: 'chem10-s2c', qId: 'chem10-q2c', ans: 'A', exp: '$p=e=Z=20$ và $n=A-Z=20$.' },
    { id: 'chem10-s2d', qId: 'chem10-q2d', ans: 'B', exp: 'Cùng Z nghĩa là cùng số proton và cùng nguyên tố; khác A nghĩa là khác số neutron.' },
    { id: 'chem10-s3c', qId: 'chem10-q3c', ans: 'B', exp: '$\\bar A=24\\times0,60+26\\times0,40=24,8$.' },
    { id: 'chem10-s3d', qId: 'chem10-q3d', ans: 'A', exp: 'Vị trí đỉnh cho khối lượng; cường độ tương đối gần bằng nhau biểu thị độ phổ biến gần bằng nhau.' },
    { id: 'chem10-s4c', qId: 'chem10-q4c', ans: 'A', exp: 'Mô hình hiện đại mô tả vùng xác suất tìm thấy electron, không gán đường chuyển động xác định.' },
    { id: 'chem10-s4d', qId: 'chem10-q4d', ans: 'B', exp: 'Đám mây là mô hình xác suất; vùng đậm hơn tương ứng xác suất tìm thấy electron lớn hơn.' },
    { id: 'chem10-s5c', qId: 'chem10-q5c', ans: 'A', exp: 'Mỗi phân lớp s có một orbital và mỗi orbital chứa tối đa hai electron.' },
    { id: 'chem10-s5d', qId: 'chem10-q5d', ans: 'B', exp: 'Lớp 2 gồm 2s (2e) và 2p (6e), tổng tối đa 8 electron.' },
    { id: 'chem10-s6c', qId: 'chem10-q6c', ans: 'A', exp: 'Phân bộ đủ 11 electron theo thứ tự mức năng lượng cho cấu hình kết thúc ở 3s¹.' },
    { id: 'chem10-s6d', qId: 'chem10-q6d', ans: 'B', exp: 'Các AO cùng mức năng lượng được điền electron độc thân với spin song song trước khi ghép đôi.' },
    { id: 'chem10-s7c', qId: 'chem10-q7c', ans: 'C', exp: 'Lớp ngoài cùng bão hòa là cấu hình bền đặc trưng của khí hiếm.' },
    { id: 'chem10-s7d', qId: 'chem10-q7d', ans: 'B', exp: 'X có 7 electron hóa trị, thường nhận thêm 1 electron để đạt cấu hình bền.' }
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
