import type { QuestionType } from '@/types';

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
