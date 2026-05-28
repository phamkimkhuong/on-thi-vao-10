import { Topic, QuestionType, Question, Solution } from '../types';

export const mathTopics: Topic[] = [
  { id: 'math-t1', subjectId: 'math', name: 'Đại số nền tảng & Căn thức', slug: 'dai-so-va-can-thuc', orderIndex: 1, tier: 1 },
  { id: 'math-t2', subjectId: 'math', name: 'Phương trình & Hệ thức Vi-ét', slug: 'phuong-trinh-va-vi-et', orderIndex: 2, tier: 1 },
  { id: 'math-t3', subjectId: 'math', name: 'Hệ phương trình & Toán thực tế', slug: 'he-phuong-trinh-toan-thuc-te', orderIndex: 3, tier: 2 },
  { id: 'math-t4', subjectId: 'math', name: 'Hàm số & Đồ thị', slug: 'ham-so-va-do-thi', orderIndex: 4, tier: 2 },
  { id: 'math-t5', subjectId: 'math', name: 'Hình học đường tròn', slug: 'hinh-hoc-duong-tron', orderIndex: 5, tier: 3 }
];

export const mathQuestionTypes: QuestionType[] = [
  {
    id: 'math-qt1',
    topicId: 'math-t1',
    name: 'Rút gọn biểu thức chứa căn',
    slug: 'rut-gon-bieu-thuc-chua-can',
    description: 'Dạng toán đại số kinh điển luôn chiếm 2 điểm (20% tổng số điểm) ở vị trí Câu 1 trong mọi đề thi tuyển sinh vào 10. Đề bài thường cho một biểu thức phức tạp gồm các phân thức đại số chứa căn bậc hai (thường là biến x), yêu cầu học sinh thực hiện rút gọn chính xác, sau đó vận dụng biểu thức rút gọn để giải quyết các câu hỏi phụ nâng cao như giải phương trình, tìm giá trị nguyên, so sánh hoặc tìm GTLN/GTNN.',
    exampleQuestionId: 'math-q1',
    recognitionSigns: [
      'Đề bài cho biểu thức chứa các căn thức bậc hai của biến \\( x \\) (ví dụ: \\( \\sqrt{x} \\)) kèm theo các phân thức đại số.',
      'Có nhiều phân thức phức tạp nằm trong ngoặc đơn nối với nhau bởi các phép toán cộng, trừ, nhân, chia.',
      'Các mẫu thức chứa biến thường có mối quan hệ nhân tử với nhau, ví dụ: \\( x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1) \\), \\( x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1) \\), hoặc \\( x + 2\\sqrt{x} = \\sqrt{x}(\\sqrt{x} + 2) \\).',
      'Yêu cầu đầu tiên luôn là: "Rút gọn biểu thức \\( A \\), \\( B \\), hoặc \\( P \\)".',
      'Các yêu cầu tiếp theo là các bài toán ứng dụng kết quả rút gọn: tính giá trị biểu thức, giải phương trình/bất phương trình, tìm giá trị nguyên của \\( x \\) để biểu thức nguyên, so sánh biểu thức với một số.'
    ],
    solvingSteps: [
      'Bước 1: Tìm điều kiện xác định (ĐKXĐ). Biểu thức dưới căn phải không âm (\\( x \\ge 0 \\)) và các mẫu thức phải khác 0.',
      'Bước 2: Phân tích các mẫu thức thành nhân tử để xác định Mẫu thức chung (MTC). Các hằng đẳng thức thường dùng: \\( a - b = (\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) \\).',
      'Bước 3: Quy đồng mẫu thức các phân thức trong từng cụm ngoặc. Thực hiện nhân cả tử và mẫu với nhân tử phụ tương ứng.',
      'Bước 4: Quy đồng mẫu thức, thực hiện phép tính ở tử số (phá ngoặc, nhân đơn thức/đa thức) giữ nguyên mẫu thức chung. Thu gọn tử số bằng cách nhóm các hạng tử đồng dạng.',
      'Bước 5: Phân tích tử số vừa thu gọn thành nhân tử để triệt tiêu các nhân tử chung với mẫu thức (nếu có).',
      'Bước 6: Thực hiện các phép toán nhân/chia ngoài ngoặc (nhân trực tiếp hoặc nhân nghịch đảo đối với phép chia phân thức) để thu được kết quả tối giản nhất.',
      'Bước 7: Sử dụng kết quả rút gọn tối giản để thực hiện câu phụ, đối chiếu kỹ kết quả tìm được với ĐKXĐ ban đầu trước khi kết luận.'
    ],
    commonMistakes: [
      'Bỏ sót hoặc không viết điều kiện xác định dẫn đến mất điểm trình bày hoặc lấy nhầm nghiệm không thỏa mãn.',
      'Sai dấu khi quy đồng mẫu thức, đặc biệt khi trước phân thức có dấu trừ \\( - \\) (quên đổi dấu toàn bộ tử số khi phá ngoặc).',
      'Rút gọn vội vã bằng cách triệt tiêu các số hạng đơn lẻ ở tử và mẫu khi chúng chưa được đưa về dạng tích (ví dụ: triệt tiêu \\( \\sqrt{x} \\) trong biểu thức \\( \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\)).',
      'Phép chia phân thức nhưng quên đảo ngược tử và mẫu của phân thức chia khi thực hiện phép nhân nghịch đảo.',
      'Khi làm câu phụ tìm giá trị nguyên của \\( x \\) để biểu thức nguyên, quên không đối chiếu giá trị \\( x \\) tìm được với điều kiện \\( x \\ge 0 \\) và các điều kiện mẫu khác 0.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        name: 'Dạng 1: Tính giá trị biểu thức căn không chứa biến',
        example: 'Tính giá trị biểu thức: \\( A = \\sqrt{18} - 2\\sqrt{50} + 3\\sqrt{8} \\)',
        note: 'Phân tích các số dưới căn thành tích có chứa số chính phương để đưa ra ngoài dấu căn, sau đó thực hiện cộng trừ các căn thức đồng dạng.'
      },
      {
        name: 'Dạng 2: Tìm điều kiện xác định của biểu thức phân thức chứa căn',
        example: 'Tìm điều kiện xác định của biểu thức: \\( P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{\\sqrt{x}} \\)',
        note: 'Đặt điều kiện cho các biểu thức dưới căn không âm (\\( x \\ge 0 \\)) và tất cả các mẫu thức khác 0 (\\( \\sqrt{x}-1 \\neq 0 \\), \\( \\sqrt{x}+1 \\neq 0 \\), và \\( \\sqrt{x} \\neq 0 \\)).'
      },
      {
        name: 'Dạng 3: Rút gọn biểu thức đơn giản có hai mẫu liên hợp',
        example: 'Rút gọn biểu thức: \\( A = \\frac{1}{\\sqrt{x}-1} - \\frac{1}{\\sqrt{x}+1} \\)',
        note: 'Quy đồng mẫu thức với mẫu chung là tích hai mẫu liên hợp \\( (\\sqrt{x}-1)(\\sqrt{x}+1) = x-1 \\), quy đồng tử số rồi rút gọn.'
      },
      {
        name: 'Dạng 4: Rút gọn biểu thức chứa phép nhân hoặc chia phân thức',
        example: 'Rút gọn biểu thức: \\( P = \\frac{x-4}{\\sqrt{x}-2} : \\frac{\\sqrt{x}+2}{\\sqrt{x}} \\)',
        note: 'Phân tích tử và mẫu thành nhân tử (áp dụng hằng đẳng thức hiệu hai bình phương \\( x-4 = (\\sqrt{x}-2)(\\sqrt{x}+2) \\)), sau đó chuyển phép chia thành nhân với phân thức nghịch đảo.'
      },
      {
        name: 'Dạng 5: Rút gọn rồi tính giá trị của biểu thức tại một điểm cụ thể',
        example: 'Cho biểu thức \\( P = \\frac{\\sqrt{x}}{\\sqrt{x}-3} \\). Tính giá trị của \\( P \\) tại \\( x = 4 \\).',
        note: 'Thay giá trị \\( x = 4 \\) (đã kiểm tra thỏa mãn ĐKXĐ \\( x \\ge 0, x \\neq 9 \\)) vào biểu thức rút gọn để tính ra kết quả số cụ thể.'
      },
      {
        name: 'Dạng 6: Rút gọn rồi giải phương trình hoặc bất phương trình theo biểu thức',
        example: 'Tìm giá trị của \\( x \\) để biểu thức rút gọn \\( P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} \\) bằng \\( \\frac{1}{3} \\) (tức là giải phương trình \\( P = \\frac{1}{3} \\)).',
        note: 'Cho biểu thức rút gọn bằng giá trị \\( k \\), quy đồng khử mẫu giải phương trình tìm \\( x \\), sau đó đối chiếu nghiêm ngặt kết quả với ĐKXĐ ban đầu.'
      },
      {
        name: 'Dạng 7: Rút gọn rồi tìm x nguyên để biểu thức nhận giá trị nguyên',
        example: 'Tìm các số nguyên \\( x \\) để biểu thức \\( P = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1} \\) nhận giá trị nguyên.',
        note: 'Tách tử số theo mẫu số thành dạng \\( P = 1 + \\frac{4}{\\sqrt{x}-1} \\). Để \\( P \\) nguyên thì mẫu thức \\( \\sqrt{x}-1 \\) phải là ước nguyên của tử số \\( 4 \\). Lập bảng tìm ước số để giải tìm \\( x \\) nguyên.'
      },
      {
        name: 'Dạng 8: Rút gọn rồi so sánh hoặc chứng minh bất đẳng thức, tìm GTLN/GTNN',
        example: 'Chứng minh biểu thức \\( P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} < 1 \\) với mọi \\( x \\ge 0, x \\neq 1 \\).',
        note: 'Xét hiệu \\( P - 1 = \\frac{-3}{\\sqrt{x}+2} \\). Vì tử số luôn âm (\\( -3 < 0 \\)) và mẫu số luôn dương (\\( \\sqrt{x}+2 > 0 \\)), nên hiệu luôn âm, suy ra \\( P < 1 \\). Hoặc áp dụng bất đẳng thức Cô-si để tìm GTLN/GTNN.'
      }
    ]
  },
  {
    id: 'math-qt2',
    topicId: 'math-t2',
    name: 'Biện luận nghiệm phương trình bậc hai & Hệ thức Vi-ét',
    slug: 'bien-luan-nghiem-va-vi-et',
    description: 'Chuyên đề trọng tâm ôn thi vào 10 (không chuyên), bao gồm các dạng toán biện luận số nghiệm của phương trình bậc hai bằng biệt thức \\( \\Delta \\) và vận dụng Hệ thức Vi-ét để tính biểu thức nghiệm hoặc tìm tham số thỏa mãn điều kiện.',
    recognitionSigns: [
      'Đề bài cho phương trình bậc hai có chứa tham số \\( m \\) (dạng \\( ax^2 + bx + c = 0 \\) với \\( a \\neq 0 \\)).',
      'Yêu cầu tìm \\( m \\) để phương trình có 2 nghiệm phân biệt, có nghiệm kép, vô nghiệm, hoặc có nghiệm.',
      'Yêu cầu tính giá trị biểu thức đối xứng của hai nghiệm \\( x_1, x_2 \\) (ví dụ: \\( x_1^2 + x_2^2 \\), \\( \\frac{1}{x_1} + \\frac{1}{x_2} \\), \\( (x_1 - x_2)^2 \\), \\( x_1^3 + x_2^3 \\)).',
      'Yêu cầu tìm \\( m \\) để nghiệm thỏa mãn các hệ thức liên hệ (đối xứng hoặc không đối xứng) hoặc xét dấu các nghiệm (cùng dấu, trái dấu, cùng dương, cùng âm).',
      'Yêu cầu tìm hai số khi biết tổng \\( S \\) và tích \\( P \\) của chúng.'
    ],
    solvingSteps: [
      'Bước 1: Xác định các hệ số \\( a, b, c \\). Tính biệt thức \\( \\Delta = b^2 - 4ac \\) (hoặc \\( \\Delta\' = (b\')^2 - ac \\) nếu \\( b \\) chẵn).',
      'Bước 2: Đặt điều kiện số nghiệm theo yêu cầu: \\( \\Delta > 0 \\) (2 nghiệm phân biệt), \\( \\Delta = 0 \\) (nghiệm kép), \\( \\Delta < 0 \\) (vô nghiệm), hoặc \\( \\Delta \\ge 0 \\) (có nghiệm).',
      'Bước 3: Áp dụng hệ thức Vi-ét gốc để lập tổng và tích nghiệm: \\( S = x_1 + x_2 = -\\frac{b}{a} \\) và \\( P = x_1x_2 = \\frac{c}{a} \\) (lưu ý chỉ áp dụng khi phương trình có nghiệm).',
      'Bước 4: Biến đổi biểu thức nghiệm của đề bài theo tổng \\( S \\) và tích \\( P \\) dựa trên các công thức phụ cần nhớ:\n  • \\( x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 \\)\n  • \\( \\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1x_2} \\)\n  • \\( (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2 \\)\n  • \\( x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2) \\)',
      'Bước 5: Giải điều kiện để tìm tham số \\( m \\), sau đó đối chiếu nghiêm ngặt với điều kiện có nghiệm ở Bước 2 trước khi kết luận.',
      'Bước 6: Đối với toán xét dấu nghiệm, áp dụng các bộ điều kiện tương ứng:\n  • Trái dấu: \\( ac < 0 \\) (không cần tính \\( \\Delta \\)).\n  • Cùng dấu phân biệt: \\( \\Delta > 0 \\) và \\( P > 0 \\).\n  • Cùng dương phân biệt: \\( \\Delta > 0 \\), \\( S > 0 \\), \\( P > 0 \\).\n  • Cùng âm phân biệt: \\( \\Delta > 0 \\), \\( S < 0 \\), \\( P > 0 \\).',
      'Bước 7: Đối với dạng tìm hai số biết tổng \\( S \\) và tích \\( P \\), hai số đó là nghiệm của phương trình \\( X^2 - SX + P = 0 \\) (điều kiện tồn tại là \\( S^2 \\ge 4P \\)).'
    ],
    commonMistakes: [
      'Lỗi nghiêm trọng: Áp dụng hệ thức Vi-ét để tìm tham số \\( m \\) nhưng quên không đặt điều kiện phương trình có nghiệm (\\( \\Delta \\ge 0 \\) hoặc \\( \\Delta > 0 \\)), dẫn đến kết luận cả các giá trị \\( m \\) làm phương trình vô nghiệm.',
      'Nhầm lẫn dấu trong công thức Vi-ét (ví dụ viết nhầm thành \\( x_1 + x_2 = \\frac{b}{a} \\) thay vị \\( -\\frac{b}{a} \\)).',
      'Khai triển sai các biểu thức phụ đối xứng, đặc biệt hay quên hệ số trong \\( (x_1 + x_2)^2 - 2x_1x_2 \\) hoặc nhầm dấu khi phá ngoặc.',
      'Mất thời gian tính toán điều kiện \\( \\Delta > 0 \\) đối với phương trình có hai nghiệm trái dấu (chỉ cần điều kiện ngắn gọn là \\( ac < 0 \\)).'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    exampleQuestionId: 'math-q2',
    subTypes: [
      {
        name: 'Dạng 1: Biện luận số nghiệm bằng Δ (Phân biệt, nghiệm kép, vô nghiệm)',
        example: 'Cho phương trình \\( x^2 - 2x + m = 0 \\). Tìm m để phương trình có hai nghiệm phân biệt.',
        note: 'Phương trình có hai nghiệm phân biệt khi \\( \\Delta > 0 \\Leftrightarrow (-2)^2 - 4 \\cdot 1 \\cdot m > 0 \\Leftrightarrow 4 - 4m > 0 \\Leftrightarrow m < 1 \\).'
      },
      {
        name: 'Dạng 2: Tìm m để phương trình có nghiệm kép',
        example: 'Cho phương trình \\( x^2 - 2(m + 1)x + m^2 = 0 \\). Tìm m để phương trình có nghiệm kép.',
        note: 'Tính \\( \\Delta\' = (m + 1)^2 - m^2 = 2m + 1 \\). Phương trình có nghiệm kép khi \\( \\Delta\' = 0 \\Leftrightarrow 2m + 1 = 0 \\Leftrightarrow m = -\\frac{1}{2} \\).'
      },
      {
        name: 'Dạng 3: Dùng Vi-ét tính biểu thức nghiệm đối xứng',
        example: 'Cho phương trình \\( x^2 - 5x + 3 = 0 \\) có hai nghiệm \\( x_1, x_2 \\). Tính \\( A = x_1^2 + x_2^2 \\).',
        note: 'Theo hệ thức Vi-ét: \\( x_1 + x_2 = 5 \\) và \\( x_1x_2 = 3 \\). Ta biến đổi đối xứng: \\( A = (x_1 + x_2)^2 - 2x_1x_2 = 5^2 - 2 \\cdot 3 = 19 \\).'
      },
      {
        name: 'Dạng 4: Tìm m để nghiệm thỏa mãn điều kiện',
        example: 'Cho phương trình \\( x^2 - 2mx + m - 1 = 0 \\). Tìm m để phương trình có hai nghiệm \\( x_1, x_2 \\) thỏa mãn \\( x_1 + x_2 = 4 \\).',
        note: 'Áp dụng Vi-ét ta được \\( x_1 + x_2 = 2m \\). Yêu cầu bài toán tương đương \\( 2m = 4 \\Leftrightarrow m = 2 \\). Chú ý thử lại hoặc đặt điều kiện \\( \\Delta \\ge 0 \\) để đảm bảo phương trình có nghiệm.'
      },
      {
        name: 'Dạng 5: Xét dấu hai nghiệm (Cùng dấu, trái dấu, dương, âm)',
        example: 'Cho phương trình \\( x^2 - 2(m - 1)x - m + 2 = 0 \\). Tìm m để phương trình có hai nghiệm trái dấu.',
        note: 'Phương trình có hai nghiệm trái dấu khi hệ số \\( a \\) và \\( c \\) trái dấu, tức là \\( ac < 0 \\Leftrightarrow 1 \\cdot (-m + 2) < 0 \\Leftrightarrow m > 2 \\).'
      },
      {
        name: 'Dạng 6: Tìm hai số khi biết tổng và tích',
        example: 'Tìm hai số biết tổng của chúng bằng 7 và tích của chúng bằng 12.',
        note: 'Hai số cần tìm là nghiệm của phương trình \\( X^2 - SX + P = 0 \\Rightarrow X^2 - 7X + 12 = 0 \\Rightarrow (X - 3)(X - 4) = 0 \\). Hai số đó là 3 và 4.'
      },
      {
        name: 'Dạng 7: Nhẩm nghiệm bằng a + b + c = 0 hoặc a - b + c = 0',
        example: 'Giải nhanh phương trình: \\( 2x^2 - 5x + 3 = 0 \\)',
        note: 'Ta có \\( a + b + c = 2 - 5 + 3 = 0 \\). Theo hệ quả hệ thức Vi-ét, phương trình có hai nghiệm: \\( x_1 = 1 \\) và \\( x_2 = \\frac{c}{a} = \\frac{3}{2} \\).'
      }
    ]
  },
  {
    id: 'math-qt3',
    topicId: 'math-t3',
    name: 'Giải hệ phương trình bậc nhất hai ẩn',
    slug: 'giai-he-phuong-trinh',
    description: 'Dạng toán yêu cầu giải hệ hai phương trình hai ẩn bằng phương pháp thế, cộng đại số hoặc đặt ẩn phụ.',
    recognitionSigns: [
      'Đề cho hệ gồm hai phương trình chứa hai ẩn x và y.',
      'Có thể giải bằng thế, cộng đại số hoặc đặt ẩn phụ.'
    ],
    solvingSteps: [
      'Đặt điều kiện xác định nếu hệ có mẫu hoặc căn.',
      'Chọn phương pháp giải phù hợp.',
      'Khử một ẩn để tìm ẩn còn lại.',
      'Thay lại để tìm nghiệm đầy đủ.',
      'Đối chiếu điều kiện và kết luận nghiệm.'
    ],
    commonMistakes: [
      'Đổi dấu sai khi cộng hoặc trừ hai phương trình.',
      'Tìm được x nhưng quên tìm y.',
      'Kết luận sai thứ tự x, y.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'math-qt4',
    topicId: 'math-t3',
    name: 'Lập hệ phương trình từ bài toán thực tế',
    slug: 'lap-he-phuong-trinh-thuc-te',
    description: 'Dạng toán yêu cầu chuyển dữ kiện đời sống như giá tiền, phần trăm, năng suất hoặc chuyển động thành hệ phương trình.',
    recognitionSigns: [
      'Đề mô tả tình huống thực tế.',
      'Có hai đại lượng chưa biết cần tìm.',
      'Có hai mối quan hệ độc lập để lập hai phương trình.'
    ],
    solvingSteps: [
      'Xác định đại lượng cần tìm và đặt ẩn.',
      'Ghi điều kiện và đơn vị cho ẩn.',
      'Lập phương trình thứ nhất từ dữ kiện đầu tiên.',
      'Lập phương trình thứ hai từ dữ kiện còn lại.',
      'Giải hệ và đối chiếu điều kiện thực tế.',
      'Trả lời đúng câu hỏi và đúng đơn vị.'
    ],
    commonMistakes: [
      'Quên đặt điều kiện và đơn vị cho ẩn.',
      'Lập sai phương trình phần trăm giảm giá.',
      'Giải đúng hệ nhưng trả lời sai yêu cầu đề bài.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        name: 'Dạng 1: Mua bán, giảm giá, phần trăm',
        example: 'Một tivi và một tủ lạnh có tổng giá niêm yết là 25 triệu đồng. Tivi giảm 10%, tủ lạnh giảm 20%. Sau giảm, tổng tiền là 21 triệu đồng. Tìm giá ban đầu mỗi món.',
        note: 'Gọi ẩn \\( x, y \\) là giá niêm yết của hai món. Lập hệ phương trình gồm tổng giá niêm yết ban đầu \\( x+y=25 \\) và tổng tiền thực tế sau giảm giá \\( 0,9x+0,8y=21 \\).'
      },
      {
        name: 'Dạng 2: Tổng số lượng và tỉ lệ phần trăm',
        example: 'Hai trường A và B có tổng 380 thí sinh dự thi. Tổng số thí sinh trúng tuyển là 191. Trường A có tỉ lệ trúng tuyển 55%, trường B có tỉ lệ trúng tuyển 45%. Hỏi mỗi trường có bao nhiêu thí sinh dự thi?',
        note: 'Gọi ẩn \\( x, y \\) là số thí sinh của mỗi trường. Lập hệ phương trình gồm tổng số thí sinh dự thi \\( x+y=380 \\) và tổng số thí sinh đỗ của hai trường \\( 0,55x+0,45y=191 \\).'
      },
      {
        name: 'Dạng 3: Vận chuyển, số xe và khối lượng mỗi xe',
        example: 'Một đội xe dự định chở 120 tấn hàng, mỗi xe chở như nhau. Sau đó đội phải chở thêm 40 tấn hàng nên điều thêm 2 xe, và mỗi xe lúc sau chở thêm 1 tấn so với dự định. Hỏi ban đầu đội có bao nhiêu xe?',
        note: 'Gọi ẩn \\( x \\) là số xe ban đầu. Thiết lập phương trình so sánh khối lượng chở của mỗi xe lúc sau với lúc đầu: \\( \\frac{160}{x+2} = \\frac{120}{x} + 1 \\).'
      },
      {
        name: 'Dạng 4: Chuyển động đường bộ (Xe máy, Ô tô)',
        example: 'Hai địa điểm A và B cách nhau 150 km. Một xe máy đi từ A đến B. Sau đó 1 giờ, một ô tô đi từ B về A. Hai xe gặp nhau tại C, biết C cách B 60 km. Vận tốc ô tô lớn hơn vận tốc xe máy 20 km/h. Tính vận tốc mỗi xe.',
        note: 'Gọi vận tốc xe máy là \\( x \\) (km/h) thì vận tốc ô tô là \\( x+20 \\) (km/h). Lập phương trình cân bằng thời gian đi của hai xe dựa trên quãng đường thực tế di chuyển.'
      },
      {
        name: 'Dạng 5: Năng suất, làm chung – làm riêng',
        example: 'Hai vòi nước cùng chảy vào một bể thì đầy bể sau 6 giờ. Nếu chảy riêng, vòi thứ nhất chảy đầy bể nhanh hơn vòi thứ hai 5 giờ. Hỏi mỗi vòi chảy riêng thì sau bao lâu đầy bể?',
        note: 'Gọi thời gian vòi một chảy riêng đầy bể là \\( x \\) (giờ) thì vòi hai là \\( x+5 \\) (giờ). Lập phương trình cộng công suất chảy trong 1 giờ của cả hai vòi: \\( \\frac{1}{x} + \\frac{1}{x+5} = \\frac{1}{6} \\).'
      }
    ]
  },
  {
    id: 'math-qt5',
    topicId: 'math-t4',
    name: 'Sự tương giao giữa Parabol & Đường thẳng',
    slug: 'tuong-giao-parabol-va-duong-thang',
    description: 'Dạng toán nghiên cứu số giao điểm và tọa độ giao điểm giữa parabol và đường thẳng.',
    recognitionSigns: [
      'Cho parabol y = ax^2 và đường thẳng y = mx + n.',
      'Yêu cầu xét số giao điểm hoặc tìm tham số để tiếp xúc/cắt nhau.',
      'Có thể cần dùng Delta và Vi-ét cho phương trình hoành độ giao điểm.'
    ],
    solvingSteps: [
      'Lập phương trình hoành độ giao điểm.',
      'Xét số nghiệm bằng Delta.',
      'Dùng Vi-ét nếu đề hỏi điều kiện liên quan đến tọa độ giao điểm.',
      'Kết luận theo yêu cầu đề bài.'
    ],
    commonMistakes: [
      'Lập sai phương trình hoành độ giao điểm.',
      'Nhầm điều kiện Delta cho cắt và tiếp xúc.',
      'Không kiểm tra điều kiện tồn tại giao điểm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt6',
    topicId: 'math-t5',
    name: 'Chứng minh tứ giác nội tiếp đường tròn',
    slug: 'tu-giac-noi-tiep',
    description: 'Dạng hình học chứng minh bốn điểm cùng nằm trên một đường tròn bằng các dấu hiệu góc.',
    recognitionSigns: [
      'Đề yêu cầu chứng minh tứ giác nội tiếp.',
      'Có góc vuông, đường cao, tiếp tuyến hoặc góc cùng nhìn một cạnh.',
      'Cần chỉ ra tổng hai góc đối bằng 180 độ hoặc hai góc cùng nhìn một cạnh bằng nhau.'
    ],
    solvingSteps: [
      'Xác định tứ giác cần chứng minh.',
      'Chọn dấu hiệu nội tiếp phù hợp.',
      'Chỉ rõ các góc bằng nhau hoặc tổng hai góc đối bằng 180 độ.',
      'Kết luận tứ giác nội tiếp.'
    ],
    commonMistakes: [
      'Không nêu lý do xuất hiện góc vuông.',
      'Dùng sai dấu hiệu tứ giác nội tiếp.',
      'Viết sai thứ tự đỉnh của tứ giác.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math-qt7',
    topicId: 'math-t1',
    name: 'Giải bất phương trình & Bất đẳng thức cơ bản',
    slug: 'giai-bat-phuong-trinh-va-bat-dang-thuc',
    description: 'Chuyên đề tổng hợp phương pháp giải bất phương trình bậc nhất một ẩn, bất phương trình quy về bậc nhất (chứa ngoặc, chứa mẫu thức, chú ý đổi chiều dấu khi nhân/chia số âm) và bài toán tìm GTLN/GTNN cơ bản sau khi rút gọn biểu thức',
    recognitionSigns: [
      'Đề bài yêu cầu giải bất phương trình chứa các dấu so sánh: \\( > \\), \\( < \\), \\( \\ge \\), \\( \\le \\).',
      'Đề bài yêu cầu tìm giá trị lớn nhất (GTLN) hoặc giá trị nhỏ nhất (GTNN) của một biểu thức sau khi rút gọn.'
    ],
    solvingSteps: [
      'Bước 1: Chuyển vế, đổi dấu các hạng tử chứa biến sang một vế, các hạng tử tự do sang vế còn lại.',
      'Bước 2: Thu gọn hai vế để đưa về dạng cơ bản \\( ax > b \\), \\( ax < b \\), \\( ax \\ge b \\) hoặc \\( ax \\le b \\). Chú ý quy đồng mẫu thức rồi khử mẫu nếu bất phương trình có mẫu số là hằng số dương.',
      'Bước 3: Chia cả hai vế cho hệ số \\( a \\). Nếu \\( a > 0 \\), giữ nguyên chiều bất phương trình; nếu \\( a < 0 \\), bắt buộc phải ĐỔI CHIỀU bất phương trình.',
      'Bước 4: Đối với bài toán tìm GTLN/GTNN, xuất phát từ điều kiện xác định của biến (thường là \\( x \\ge 0 \\)), đánh giá mẫu số hoặc các biểu thức trung gian để đưa ra bất đẳng thức chặn cho biểu thức P. Chỉ rõ dấu bằng xảy ra khi nào và kết luận.'
    ],
    commonMistakes: [
      'Quên không đổi chiều bất phương trình khi nhân hoặc chia cả hai vế cho một số âm.',
      'Khử mẫu số chứa biến mà chưa xác định rõ dấu của mẫu số đó là dương hay âm.',
      'Tìm được giá trị cực trị nhưng quên chỉ ra dấu bằng xảy ra khi nào hoặc giá trị đó không thỏa mãn điều kiện xác định ban đầu.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    exampleQuestionId: 'math-q22',
    subTypes: [
      {
        name: 'Dạng 1: Giải bất phương trình bậc nhất một ẩn',
        example: 'Giải bất phương trình: \\( 4x \\ge x + 3 \\)',
        note: 'Chuyển các hạng tử chứa x sang một vế và thu gọn: \\( 3x \\ge 3 \\Rightarrow x \\ge 1 \\).'
      },
      {
        name: 'Dạng 2: Bất phương trình có hệ số âm (Đổi chiều)',
        example: 'Giải bất phương trình: \\( -3x + 6 < 0 \\)',
        note: 'Chuyển vế được \\( -3x < -6 \\). Chia cả hai vế cho \\( -3 \\) và đổi chiều ta được \\( x > 2 \\).'
      },
      {
        name: 'Dạng 3: Bất phương trình có ngoặc, quy về bậc nhất',
        example: 'Giải bất phương trình: \\( 2(x - 3) \\le x + 4 \\)',
        note: 'Khai triển ngoặc, chuyển vế thu gọn để đưa về bất phương trình bậc nhất: \\( 2x - 6 \\le x + 4 \\Rightarrow x \\le 10 \\).'
      },
      {
        name: 'Dạng 4: Bất phương trình có phân số (Khử mẫu)',
        example: 'Giải bất phương trình: \\( \\frac{x - 1}{2} > \\frac{x + 3}{3} \\)',
        note: 'Quy đồng mẫu thức với mẫu chung là 6 (số dương) rồi khử mẫu: \\( 3(x - 1) > 2(x + 3) \\Rightarrow 3x - 3 > 2x + 6 \\Rightarrow x > 9 \\).'
      },
      {
        name: 'Dạng 5: Tìm GTLN/GTNN sau khi rút gọn',
        example: 'Cho biểu thức \\( P = \\frac{2}{\\sqrt{x} + 1} \\) với \\( x \\ge 0 \\). Tìm giá trị lớn nhất (GTLN) của biểu thức \\( P \\).',
        note: 'Đánh giá mẫu số: vì \\( x \\ge 0 \\Rightarrow \\sqrt{x} + 1 \\ge 1 \\Rightarrow P = \\frac{2}{\\sqrt{x}+1} \\le 2 \\). Dấu bằng xảy ra khi \\( x = 0 \\). GTLN của P là 2.'
      }
    ]
  }
];

export const mathQuestions: Question[] = [
  {
    id: 'math-q1',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(P = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}\\right) \\div \\left(\\frac{1}{\\sqrt{x}+1} + \\frac{2}{x-1}\\right)\\) với \\(x > 0, x \\neq 1\\).\n\n1. Rút gọn biểu thức \\(P\\).\n\n2. Tìm \\(x\\) để \\(P = -\\frac{3}{2}\\).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'P = \\frac{x - 1}{\\sqrt{x}}; x = \\frac{1}{4}',
    acceptedAnswers: ['x=1/4', '1/4', '0.25', 'x = 0.25'],
    validatorType: 'number',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'P', label: 'P =', valueType: 'expression', placeholder: '(x - 1)/sqrt(x)', hint: 'Nhập biểu thức P đã rút gọn.' },
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '1/4', hint: 'Nhập giá trị x ở câu phụ.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      P: '(x - 1)/sqrt(x)',
      x: '1/4'
    },
    acceptedFinalAnswers: [
      { P: '(x-1)/√x', x: '1/4' },
      { P: '(x - 1) / sqrt(x)', x: '0.25' }
    ]
  },
  {
    id: 'math-q2',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Cho phương trình bậc hai \\(x^2 - 2(m + 1)x + m^2 + 4 = 0\\).\n\n1. Tìm \\(m\\) để phương trình có hai nghiệm phân biệt \\(x_1, x_2\\).\n\n2. Tìm \\(m\\) để hai nghiệm thỏa mãn \\(x_1^2 + x_2^2 - x_1x_2 = 7\\).',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'm = -4 + \\sqrt{31}',
    acceptedAnswers: ['m=-4+√31', '-4+√31', '-4 + sqrt(31)'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm =', valueType: 'expression', placeholder: '-4 + √31' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: { m: '-4 + √31' },
    acceptedFinalAnswers: [
      { m: '-4 + sqrt(31)' }
    ]
  },
  {
    id: 'math-q3',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một cửa hàng bán tivi và tủ lạnh. Tổng giá niêm yết ban đầu của một chiếc tivi và một chiếc tủ lạnh là 25 triệu đồng. Nhân dịp lễ, cửa hàng giảm giá 10% cho tivi và giảm giá 20% cho tủ lạnh, do đó khách hàng chỉ phải trả 21 triệu đồng để mua cả hai mặt hàng. Hỏi giá niêm yết ban đầu của mỗi mặt hàng là bao nhiêu?',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Tivi: 10 triệu đồng; Tủ lạnh: 15 triệu đồng',
    acceptedAnswers: ['Tivi 10, Tủ lạnh 15', '10 15', 'Tivi: 10 triệu, Tủ lạnh: 15 triệu'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'tivi', label: 'Tivi =', valueType: 'number', placeholder: '10' },
        { key: 'tuLanh', label: 'Tủ lạnh =', valueType: 'number', placeholder: '15' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      tivi: '10',
      tuLanh: '15'
    }
  },
  {
    id: 'math-q4',
    subjectId: 'math',
    topicId: 'math-t5',
    questionTypeId: 'math-qt6',
    content: 'Cho đường tròn \\((O, R)\\) đường kính \\(AB\\). Lấy điểm \\(C\\) trên đường tròn sao cho \\(AC < BC\\). Kẻ đường cao \\(CH\\) của tam giác \\(ABC\\). Gọi \\(I\\) là trung điểm của \\(CH\\). Đường thẳng qua \\(A\\) vuông góc với \\(AB\\) cắt tia \\(BI\\) tại \\(K\\). Chứng minh tứ giác \\(AHCK\\) là tứ giác nội tiếp.',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Chứng minh tứ giác AHCK nội tiếp.',
    validatorType: 'manual',
    answerSchema: {
      type: 'proof-upload',
      fields: [],
      proofImageRequired: true,
      autoCheckMode: 'manual'
    }
  },
  {
    id: 'math-q5',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(A = \\frac{\\sqrt{x} + 1}{\\sqrt{x} - 1} - \\frac{2}{x - 1}\\) với \\(x \\ge 0, x \\neq 1\\).\n\n1. Rút gọn biểu thức \\(A\\).\n\n2. Tính giá trị của \\(A\\) khi \\(x = 4\\).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}; A(4) = \\frac{7}{3}',
    acceptedAnswers: ['7/3', 'A=7/3'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'expression', placeholder: '(x + 2sqrt(x) - 1)/(x - 1)' },
        { key: 'valueAt4', label: 'A khi x = 4:', valueType: 'fraction', placeholder: '7/3' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '(x + 2sqrt(x) - 1)/(x - 1)',
      valueAt4: '7/3'
    },
    acceptedFinalAnswers: [
      { A: '(x + 2√x - 1)/(x - 1)', valueAt4: '7/3' }
    ]
  },
  {
    id: 'math-q6',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(B = \\left(\\frac{1}{\\sqrt{x} - 2} + \\frac{1}{\\sqrt{x} + 2}\\right) \\cdot \\frac{x - 4}{2\\sqrt{x}}\\) với \\(x > 0, x \\neq 4\\).\n\n1. Rút gọn biểu thức \\(B\\).\n\n2. Tìm \\(x\\) để \\(B = 2\\).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'B = 1; không có giá trị \\(x\\) thỏa mãn \\(B = 2\\)',
    acceptedAnswers: ['B=1, không có x', 'không có', 'vo nghiem'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'B', label: 'B =', valueType: 'expression', placeholder: '1' },
        { key: 'x', label: 'x thỏa B = 2:', valueType: 'text', placeholder: 'không có' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      B: '1',
      x: 'không có'
    },
    acceptedFinalAnswers: [
      { B: '1', x: 'vô nghiệm' }
    ]
  },
  {
    id: 'math-q7',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(C = \\left(\\frac{\\sqrt{x}}{\\sqrt{x} + 1} + \\frac{1}{x + \\sqrt{x}}\\right) \\div \\left(\\frac{1}{\\sqrt{x}} - \\frac{1}{\\sqrt{x} + 1}\\right)\\) với \\(x > 0\\).\n\n1. Rút gọn biểu thức \\(C\\).\n\n2. Tìm \\(x\\) để \\(C = 6\\).',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: '\\(C = x + 1\\); \\(x = 5\\)',
    acceptedAnswers: ['x=5', '5', 'C=x+1, x=5'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'C', label: 'C =', valueType: 'expression', placeholder: 'x + 1' },
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '5' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      C: 'x + 1',
      x: '5'
    }
  },
  {
    id: 'math-q8',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt3',
    content: 'Giải hệ phương trình: \\(\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x = 3; y = 1',
    acceptedAnswers: ['x=3,y=1', '3 1'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '3' },
        { key: 'y', label: 'y =', valueType: 'number', placeholder: '1' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      x: '3',
      y: '1'
    }
  },
  {
    id: 'math-q9',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Tính giá trị của biểu thức số sau:\n\n\\(A = \\sqrt{18} - 2\\sqrt{50} + 3\\sqrt{8}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A = -\\sqrt{2}',
    acceptedAnswers: ['-√2', '-sqrt(2)', '-sqrt2', 'A=-√2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'expression', placeholder: '-√2', hint: 'Nhập giá trị rút gọn của biểu thức A.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '-√2'
    },
    acceptedFinalAnswers: [
      { A: '-sqrt(2)' }
    ]
  },
  {
    id: 'math-q10',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Tìm điều kiện xác định của biểu thức sau:\n\n\\(P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{\\sqrt{x}}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x > 0, x \\neq 1',
    acceptedAnswers: ['x>0, x!=1', 'x > 0 và x khác 1', 'x > 0, x ≠ 1', 'x>0; x khác 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'dkxd', label: 'Điều kiện xác định:', valueType: 'text', placeholder: 'x > 0, x ≠ 1', hint: 'Nhập điều kiện xác định của biến x.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      dkxd: 'x > 0, x ≠ 1'
    },
    acceptedFinalAnswers: [
      { dkxd: 'x>0, x!=1' }
    ]
  },
  {
    id: 'math-q11',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(M = \\frac{\\sqrt{x}+3}{\\sqrt{x}-1}\\) với \\(x \\ge 0, x \\neq 1\\).\n\nTìm các giá trị số nguyên của \\(x\\) để \\(M\\) nhận giá trị nguyên.',
    difficulty: 'hard',
    sourceType: 'manual',
    correctAnswer: 'x \\in \\{0, 4, 9, 25\\}',
    acceptedAnswers: ['0, 4, 9, 25', 'x = 0, 4, 9, 25', '{0, 4, 9, 25}'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'x', label: 'Các giá trị x nguyên:', valueType: 'text', placeholder: '0, 4, 9, 25', hint: 'Nhập các giá trị x tìm được, cách nhau bằng dấu phẩy.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      x: '0, 4, 9, 25'
    }
  },
  {
    id: 'math-q12',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: 'Cho biểu thức \\(Q = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2}\\) với \\(x \\ge 0\\).\n\n1. Chứng minh \\(Q < 1\\) với mọi \\(x \\ge 0\\).\n\n2. Tìm khoảng giá trị của \\(x\\) để \\(Q < 0\\).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Q < 1; 0 \\le x < 1',
    acceptedAnswers: ['0 <= x < 1', '0 < x < 1', 'x < 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'compare', label: 'Kết luận so sánh:', valueType: 'text', placeholder: 'Q < 1' },
        { key: 'range', label: 'Giá trị x để Q < 0:', valueType: 'text', placeholder: '0 <= x < 1' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      compare: 'Q < 1',
      range: '0 <= x < 1'
    }
  },
  {
    id: 'math-q13',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một máy giặt và một tủ lạnh có tổng giá niêm yết là 30 triệu đồng. Nhân dịp ngày lễ, máy giặt được giảm giá 15% và tủ lạnh được giảm giá 20%, nên tổng số tiền thực tế khách hàng phải trả để mua cả hai sản phẩm là 24,75 triệu đồng. Tìm giá niêm yết của mỗi sản phẩm.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Máy giặt: 15 triệu đồng, Tủ lạnh: 15 triệu đồng',
    acceptedAnswers: ['Máy giặt 15, Tủ lạnh 15', '15 15', 'Máy giặt: 15 triệu, Tủ lạnh: 15 triệu', '15', '15 triệu'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'mayGiat', label: 'Máy giặt =', valueType: 'number', placeholder: '15', hint: 'Nhập giá niêm yết của máy giặt (triệu đồng).' },
        { key: 'tuLanh', label: 'Tủ lạnh =', valueType: 'number', placeholder: '15', hint: 'Nhập giá niêm yết của tủ lạnh (triệu đồng).' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      mayGiat: '15',
      tuLanh: '15'
    }
  },
  {
    id: 'math-q14',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Hai lớp 9A và 9B có tổng số 82 học sinh. Cuối năm học, lớp 9A có 75% học sinh đạt danh hiệu học sinh khá giỏi, lớp 9B có 80% học sinh đạt danh hiệu học sinh khá giỏi. Biết tổng số học sinh khá giỏi của cả hai lớp là 64 em. Hỏi mỗi lớp có bao nhiêu học sinh?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Lớp 9A: 32 học sinh, Lớp 9B: 50 học sinh',
    acceptedAnswers: ['Lớp 9A 32, Lớp 9B 50', '32 50', '32', '50'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'lop9A', label: 'Lớp 9A =', valueType: 'number', placeholder: '32', hint: 'Nhập số học sinh của lớp 9A.' },
        { key: 'lop9B', label: 'Lớp 9B =', valueType: 'number', placeholder: '50', hint: 'Nhập số học sinh của lớp 9B.' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      lop9A: '32',
      lop9B: '50'
    }
  },
  {
    id: 'math-q15',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một đội xe dự định chở 120 tấn hàng, mỗi xe chở một khối lượng hàng như nhau. Sau đó đội phải chở thêm 40 tấn hàng nên điều thêm 2 xe, và mỗi xe lúc sau phải chở thêm 1 tấn hàng so với dự định. Hỏi ban đầu đội có bao nhiêu xe?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '8 xe hoặc 30 xe',
    acceptedAnswers: ['8 xe hoặc 30 xe', '8 hoặc 30', '8', '30', '8;30', '8, 30'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'soXe', label: 'Số xe ban đầu =', valueType: 'number', placeholder: '8 hoặc 30', hint: 'Nhập số xe ban đầu (chấp nhận 8 hoặc 30).' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      soXe: '8'
    },
    acceptedFinalAnswers: [
      { soXe: '30' }
    ]
  },
  {
    id: 'math-q16',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Hai địa điểm A và B cách nhau 140 km. Một xe máy khởi hành từ A đi đến B. Sau đó 1 giờ, một ô tô khởi hành từ B đi về A. Hai xe gặp nhau tại địa điểm C cách B là 60 km. Biết vận tốc của ô tô lớn hơn vận tốc của xe máy là 20 km/h. Tính vận tốc của mỗi xe.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Xe máy: 40 km/h, Ô tô: 60 km/h',
    acceptedAnswers: ['Xe máy 40, Ô tô 60', '40 60', 'Xe máy: 40, Ô tô: 60', '40', '60'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'xeMay', label: 'Vận tốc xe máy =', valueType: 'number', placeholder: '40', hint: 'Nhập vận tốc xe máy (km/h).' },
        { key: 'oTo', label: 'Vận tốc ô tô =', valueType: 'number', placeholder: '60', hint: 'Nhập vận tốc ô tô (km/h).' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      xeMay: '40',
      oTo: '60'
    }
  },
  {
    id: 'math-q17',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Hai vòi nước cùng chảy vào một bể không có nước thì đầy bể sau 6 giờ. Nếu chảy riêng một mình, vòi thứ nhất chảy đầy bể nhanh hơn vòi thứ hai là 5 giờ. Hỏi nếu chảy riêng một mình, mỗi vòi chảy đầy bể sau bao lâu?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Vòi thứ nhất: 10 giờ, Vòi thứ hai: 15 giờ',
    acceptedAnswers: ['Vòi 1: 10, Vòi 2: 15', '10 15', 'Vòi thứ nhất: 10, Vòi thứ hai: 15', '10', '15'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'voi1', label: 'Vòi thứ nhất =', valueType: 'number', placeholder: '10', hint: 'Nhập thời gian vòi thứ nhất chảy riêng (giờ).' },
        { key: 'voi2', label: 'Vòi thứ hai =', valueType: 'number', placeholder: '15', hint: 'Nhập thời gian vòi thứ hai chảy riêng (giờ).' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      voi1: '10',
      voi2: '15'
    }
  },
  {
    id: 'math-q18',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Hai tổ sản xuất theo kế hoạch phải làm tổng cộng 700 sản phẩm. Nhưng khi thực hiện, tổ I đã làm vượt mức 15% và tổ II đã làm vượt mức 20% so với kế hoạch, do đó cả hai tổ đã làm được 820 sản phẩm. Hỏi theo kế hoạch, mỗi tổ phải làm bao nhiêu sản phẩm?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Tổ I: 400 sản phẩm, Tổ II: 300 sản phẩm',
    acceptedAnswers: ['Tổ I 400, Tổ II 300', '400 300', '400', '300'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'toI', label: 'Tổ I =', valueType: 'number', placeholder: '400', hint: 'Nhập số sản phẩm theo kế hoạch của tổ I.' },
        { key: 'toII', label: 'Tổ II =', valueType: 'number', placeholder: '300', hint: 'Nhập số sản phẩm theo kế hoạch của tổ II.' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      toI: '400',
      toII: '300'
    }
  },
  {
    id: 'math-q19',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một đoàn xe cần vận chuyển 40 tấn hàng. Khi chuẩn bị khởi hành thì có 2 xe bị hỏng nên mỗi xe còn lại phải chở thêm 1 tấn hàng so với dự định để hoàn thành việc vận chuyển. Hỏi ban đầu đoàn xe có bao nhiêu xe? (Giả định mỗi xe chở một lượng hàng như nhau).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '10 xe',
    acceptedAnswers: ['10', '10 xe'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'soXe', label: 'Số xe ban đầu =', valueType: 'number', placeholder: '10', hint: 'Nhập số xe dự định ban đầu.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      soXe: '10'
    }
  },
  {
    id: 'math-q20',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Một người đi xe máy từ A đến B cách nhau 90 km. Khi từ B về A, người đó tăng vận tốc thêm 5 km/h nên thời gian về ít hơn thời gian đi là 15 phút. Tính vận tốc lúc đi của xe máy.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '40 km/h',
    acceptedAnswers: ['40', '40 km/h'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'vDi', label: 'Vận tốc lúc đi =', valueType: 'number', placeholder: '40', hint: 'Nhập vận tốc lúc đi của xe máy (km/h).' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      vDi: '40'
    }
  },
  {
    id: 'math-q21',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: 'Hai tổ sản xuất cùng làm chung một công việc thì hoàn thành sau 12 giờ. Nếu tổ I làm riêng một mình trong 3 giờ rồi nghỉ, sau đó tổ II làm riêng một mình trong 6 giờ thì cả hai tổ hoàn thành được 40% công việc. Hỏi nếu làm riêng một mình, mỗi tổ cần bao nhiêu thời gian để hoàn thành công việc đó?',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'Tổ I: 30 giờ, Tổ II: 20 giờ',
    acceptedAnswers: ['Tổ I 30, Tổ II 20', '30 20', '30', '20'],
    validatorType: 'multi-number',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'to1', label: 'Tổ I =', valueType: 'number', placeholder: '30', hint: 'Nhập thời gian tổ I hoàn thành công việc (giờ).' },
        { key: 'to2', label: 'Tổ II =', valueType: 'number', placeholder: '20', hint: 'Nhập thời gian tổ II hoàn thành công việc (giờ).' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      to1: '30',
      to2: '20'
    }
  },
  {
    id: 'math-q22',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(4x \\ge x + 3\\)',
    difficulty: 'easy',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2025,
    correctAnswer: 'x \\ge 1',
    acceptedAnswers: ['x>=1', 'x >= 1', '>=1', '>= 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x >= 1', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x >= 1'
    }
  },
  {
    id: 'math-q23',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(5x + 2 > 2x - 7\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x > -3',
    acceptedAnswers: ['x>-3', 'x > -3', '>-3', '>- 3'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x > -3', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x > -3'
    }
  },
  {
    id: 'math-q24',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau (chú ý đổi chiều khi chia số âm):\n\n\\(-3x + 6 < 0\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x > 2',
    acceptedAnswers: ['x>2', 'x > 2', '>2', '> 2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x > 2', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x > 2'
    }
  },
  {
    id: 'math-q25',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau (chú ý đổi chiều khi chia số âm):\n\n\\(5 - 2x < 1\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'x > 2',
    acceptedAnswers: ['x>2', 'x > 2', '>2', '> 2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x > 2', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x > 2'
    }
  },
  {
    id: 'math-q26',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(2(x - 3) \\le x + 4\\)',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'x \\le 10',
    acceptedAnswers: ['x<=10', 'x <= 10', '<=10', '<= 10'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x <= 10', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x <= 10'
    }
  },
  {
    id: 'math-q27',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(3(x - 2) > x + 4\\)',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'x > 5',
    acceptedAnswers: ['x>5', 'x > 5', '>5', '> 5'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x > 5', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x > 5'
    }
  },
  {
    id: 'math-q28',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(\\frac{x - 1}{2} > \\frac{x + 3}{3}\\)',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'x > 9',
    acceptedAnswers: ['x>9', 'x > 9', '>9', '> 9'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x > 9', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x > 9'
    }
  },
  {
    id: 'math-q29',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Giải bất phương trình sau:\n\n\\(\\frac{x + 1}{2} \\le \\frac{x + 5}{3}\\)',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'x \\le 7',
    acceptedAnswers: ['x<=7', 'x <= 7', '<=7', '<= 7'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'nghiem', label: 'Tập nghiệm:', valueType: 'text', placeholder: 'x <= 7', hint: 'Nhập tập nghiệm của bất phương trình.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      nghiem: 'x <= 7'
    }
  },
  {
    id: 'math-q30',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Cho biểu thức \\(P = \\frac{2}{\\sqrt{x} + 1}\\) với \\(x \\ge 0\\).\n\nTìm giá trị lớn nhất (GTLN) của biểu thức \\(P\\).',
    difficulty: 'medium',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2023,
    correctAnswer: '2',
    acceptedAnswers: ['2', 'max = 2', 'GTLN = 2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'gtln', label: 'GTLN =', valueType: 'number', placeholder: '2', hint: 'Nhập giá trị lớn nhất của biểu thức P.' },
        { key: 'xDatDuoc', label: 'đạt được khi x =', valueType: 'number', placeholder: '0', hint: 'Nhập giá trị x để dấu bằng xảy ra.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      gtln: '2',
      xDatDuoc: '0'
    }
  },
  {
    id: 'math-q31',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt7',
    content: 'Cho biểu thức \\(P = 5 - \\frac{2}{\\sqrt{x} + 1}\\) với \\(x \\ge 0\\).\n\nTìm giá trị nhỏ nhất (GTNN) của biểu thức \\(P\\).',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: '3',
    acceptedAnswers: ['3', 'min = 3', 'GTNN = 3'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'gtnn', label: 'GTNN =', valueType: 'number', placeholder: '3', hint: 'Nhập giá trị nhỏ nhất của biểu thức P.' },
        { key: 'xDatDuoc', label: 'đạt được khi x =', valueType: 'number', placeholder: '0', hint: 'Nhập giá trị x để dấu bằng xảy ra.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      gtnn: '3',
      xDatDuoc: '0'
    }
  },
  {
    id: 'math-q32',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình sau có hai nghiệm phân biệt:\n\n\\(x^2 - 2x + m = 0\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'm < 1',
    acceptedAnswers: ['m<1', 'm < 1'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm <', valueType: 'number', placeholder: '1', hint: 'Nhập giá trị giới hạn của m.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '1'
    }
  },
  {
    id: 'math-q33',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình sau có nghiệm kép:\n\n\\(x^2 - 2(m + 1)x + m^2 = 0\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'm = -1/2',
    acceptedAnswers: ['m=-1/2', 'm = -0.5', '-1/2', '-0.5'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm =', valueType: 'fraction', placeholder: '-1/2', hint: 'Nhập giá trị m.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '-1/2'
    }
  },
  {
    id: 'math-q34',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình sau vô nghiệm:\n\n\\(x^2 - 4x + m = 0\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'm > 4',
    acceptedAnswers: ['m>4', 'm > 4'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm >', valueType: 'number', placeholder: '4', hint: 'Nhập giá trị giới hạn của m.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '4'
    }
  },
  {
    id: 'math-q35',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Cho phương trình: \\(x^2 - 6x + 5 = 0\\) có hai nghiệm \\( x_1, x_2 \\).\n\nTính giá trị của biểu thức: \\(A = x_1^2 + x_2^2\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '26',
    acceptedAnswers: ['26', 'A=26'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'number', placeholder: '26', hint: 'Nhập giá trị tính được.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      A: '26'
    }
  },
  {
    id: 'math-q36',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Cho phương trình: \\(2x^2 - 5x + 1 = 0\\) có hai nghiệm \\( x_1, x_2 \\).\n\nTính giá trị của biểu thức: \\(B = \\frac{1}{x_1} + \\frac{1}{x_2}\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '5',
    acceptedAnswers: ['5', 'B=5'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'B', label: 'B =', valueType: 'number', placeholder: '5', hint: 'Nhập giá trị tính được.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      B: '5'
    }
  },
  {
    id: 'math-q37',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Cho phương trình: \\(x^2 - 3x - 2 = 0\\) có hai nghiệm \\( x_1, x_2 \\).\n\nTính giá trị của biểu thức: \\(C = (x_1 - x_2)^2\\)',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '17',
    acceptedAnswers: ['17', 'C=17'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'C', label: 'C =', valueType: 'number', placeholder: '17', hint: 'Nhập giá trị tính được.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      C: '17'
    }
  },
  {
    id: 'math-q38',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình: \\(x^2 - 2mx + m - 1 = 0\\) có hai nghiệm \\( x_1, x_2 \\) thỏa mãn: \\(x_1 + x_2 = 6\\)',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm = 3',
    acceptedAnswers: ['m=3', '3'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm =', valueType: 'number', placeholder: '3', hint: 'Nhập giá trị m tìm được.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '3'
    }
  },
  {
    id: 'math-q39',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình: \\(x^2 - 2(m + 1)x + m = 0\\) có hai nghiệm dương phân biệt.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm > 0',
    acceptedAnswers: ['m>0', 'm > 0'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm >', valueType: 'number', placeholder: '0', hint: 'Nhập giá trị giới hạn của m.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '0'
    }
  },
  {
    id: 'math-q40',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: 'Tìm giá trị của tham số \\( m \\) để phương trình: \\(x^2 - 2(m - 1)x - m + 2 = 0\\) có hai nghiệm trái dấu.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'm > 2',
    acceptedAnswers: ['m>2', 'm > 2'],
    validatorType: 'exact',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'm', label: 'm >', valueType: 'number', placeholder: '2', hint: 'Nhập giá trị giới hạn của m.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      m: '2'
    }
  }
];

export const mathSolutions: Solution[] = [
  {
    id: 'math-s1',
    questionId: 'math-q1',
    recognition: 'Đề có √x, nhiều phân thức, mẫu x - √x và x - 1, đồng thời có phép chia hai cụm biểu thức. Đây là dạng rút gọn biểu thức chứa căn có câu phụ tìm x.',
    detailedSteps: [
      {
        order: 1,
        title: 'Ghi điều kiện xác định',
        explanation: 'Theo đề bài, biểu thức xác định khi \\(x > 0\\) và \\(x \\neq 1\\). Điều kiện này phải dùng để đối chiếu nghiệm cuối cùng.',
        formula: 'x > 0, \\quad x \\neq 1',
        result: 'Điều kiện xác định là \\(x > 0, \\quad x \\neq 1\\).'
      },
      {
        order: 2,
        title: 'Rút gọn ngoặc thứ nhất',
        explanation: 'Đặt \\(A = \\frac{\\sqrt{x}}{\\sqrt{x} - 1} - \\frac{1}{x - \\sqrt{x}}\\). Vì \\(x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)\\), mẫu thức chung là \\(\\sqrt{x}(\\sqrt{x} - 1)\\).',
        formula: 'A = \\frac{x}{\\sqrt{x}(\\sqrt{x}-1)} - \\frac{1}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{x-1}{\\sqrt{x}(\\sqrt{x}-1)}',
        result: 'Rút gọn tiếp ta được: \\(A = \\frac{\\sqrt{x}+1}{\\sqrt{x}}\\).'
      },
      {
        order: 3,
        title: 'Rút gọn ngoặc thứ hai',
        explanation: 'Đặt \\(B = \\frac{1}{\\sqrt{x} + 1} + \\frac{2}{x - 1}\\). Vì \\(x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)\\), ta quy đồng theo mẫu này.',
        formula: 'B = \\frac{\\sqrt{x}-1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} + \\frac{2}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x}+1}{(\\sqrt{x}-1)(\\sqrt{x}+1)}',
        result: 'Rút gọn ta được: \\(B = \\frac{1}{\\sqrt{x}-1}\\).'
      },
      {
        order: 4,
        title: 'Thực hiện phép chia để rút gọn P',
        explanation: 'Ta có \\(P = A \\div B\\). Thực hiện phép chia bằng cách nhân với phân thức nghịch đảo.',
        formula: 'P = \\frac{\\sqrt{x}+1}{\\sqrt{x}} \\cdot (\\sqrt{x}-1) = \\frac{(\\sqrt{x}+1)(\\sqrt{x}-1)}{\\sqrt{x}}',
        result: 'Thu được kết quả rút gọn: \\(P = \\frac{x - 1}{\\sqrt{x}}\\).'
      },
      {
        order: 5,
        title: 'Tìm x khi P = -3/2',
        explanation: 'Đặt \\(t = \\sqrt{x}\\) với \\(t > 0, t \\neq 1\\). Phương trình trở thành \\(\\frac{t^2 - 1}{t} = -\\frac{3}{2}\\).',
        formula: '2(t^2 - 1) = -3t \\Rightarrow 2t^2 + 3t - 2 = 0 \\Rightarrow (2t - 1)(t + 2) = 0',
        result: 'Vì \\(t > 0\\) nên \\(t = \\frac{1}{2}\\), suy ra \\(x = \\frac{1}{4}\\) (thỏa mãn điều kiện).'
      }
    ],
    finalAnswer: '\\(P = \\frac{x - 1}{\\sqrt{x}}\\); \\(x = \\frac{1}{4}\\).',
    commonMistakes: [
      'Phân tích sai x - √x.',
      'Quên đổi phép chia thành nhân nghịch đảo.',
      'Không đối chiếu x = 1/4 với điều kiện xác định.'
    ],
    reviewSuggestions: [
      'Ôn lại phân tích mẫu thức chứa căn.',
      'Luyện thêm quy đồng phân thức.',
      'Xem lại cách đặt t = √x để giải câu phụ.'
    ]
  },
  {
    id: 'math-s2',
    questionId: 'math-q2',
    recognition: 'Đây là bài phương trình bậc hai có tham số và điều kiện về hai nghiệm, cần dùng Delta và hệ thức Vi-ét.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm điều kiện có hai nghiệm phân biệt',
        explanation: 'Với phương trình \\(x^2 - 2(m + 1)x + m^2 + 4 = 0\\), ta dùng biệt thức \\(\\Delta\'\\).',
        formula: "\\Delta' = (m + 1)^2 - (m^2 + 4) = 2m - 3",
        result: 'Phương trình có hai nghiệm phân biệt khi \\(\\Delta\' > 0 \\Leftrightarrow m > \\frac{3}{2}\\).'
      },
      {
        order: 2,
        title: 'Áp dụng Vi-ét',
        explanation: 'Theo hệ thức Vi-ét, ta có tổng và tích hai nghiệm là:',
        formula: 'x_1 + x_2 = 2(m + 1); \\quad x_1 x_2 = m^2 + 4',
        result: 'Ta sẽ thay thế tổng và tích này vào điều kiện đề bài.'
      },
      {
        order: 3,
        title: 'Biến đổi điều kiện nghiệm',
        explanation: 'Biến đổi biểu thức đối xứng: \\(x_1^2 + x_2^2 - x_1x_2 = (x_1 + x_2)^2 - 3x_1x_2\\).',
        formula: '[2(m + 1)]^2 - 3(m^2 + 4) = 7 \\Rightarrow 4(m^2 + 2m + 1) - 3m^2 - 12 = 7',
        result: 'Thu gọn ta được phương trình: \\(m^2 + 8m - 15 = 0\\).'
      },
      {
        order: 4,
        title: 'Giải và đối chiếu',
        explanation: 'Giải phương trình bậc hai đối với \\(m\\) rồi đối chiếu điều kiện \\(m > \\frac{3}{2}\\).',
        formula: 'm = -4 \\pm \\sqrt{31}',
        result: 'Do \\(m > 1.5\\), chỉ có giá trị \\(m = -4 + \\sqrt{31}\\) thỏa mãn.'
      }
    ],
    finalAnswer: '\\(m = -4 + \\sqrt{31}\\).',
    commonMistakes: [
      'Quên điều kiện có hai nghiệm phân biệt.',
      'Biến đổi sai x1² + x2².',
      'Nhận cả hai nghiệm m mà không đối chiếu điều kiện.'
    ],
    reviewSuggestions: [
      'Ôn lại Delta phẩy.',
      'Ôn hệ thức Vi-ét và biểu thức đối xứng của nghiệm.'
    ]
  },
  {
    id: 'math-s3',
    questionId: 'math-q3',
    recognition: 'Đây là bài lập hệ vì có hai đại lượng chưa biết và hai dữ kiện độc lập: tổng giá niêm yết và tổng tiền sau giảm giá.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện',
        explanation: 'Gọi \\(x\\) là giá tivi, \\(y\\) là giá tủ lạnh (đơn vị: triệu đồng).',
        formula: 'x > 0, \\quad y > 0',
        result: 'Điều kiện: cả hai ẩn đều phải là số dương.'
      },
      {
        order: 2,
        title: 'Lập phương trình tổng giá ban đầu',
        explanation: 'Tổng giá niêm yết ban đầu của tivi và tủ lạnh là 25 triệu đồng.',
        formula: 'x + y = 25',
        result: 'Ta có phương trình thứ nhất.'
      },
      {
        order: 3,
        title: 'Lập phương trình sau giảm giá',
        explanation: 'Tivi giảm 10% (còn \\(0.9x\\)), tủ lạnh giảm 20% (còn \\(0.8y\\)). Khách trả 21 triệu đồng.',
        formula: '0.9x + 0.8y = 21',
        result: 'Ta có phương trình thứ hai.'
      },
      {
        order: 4,
        title: 'Giải hệ và kết luận',
        explanation: 'Giải hệ phương trình gồm (1) và (2):',
        formula: '\\begin{cases} x + y = 25 \\\\ 0.9x + 0.8y = 21 \\end{cases} \\Rightarrow \\begin{cases} 0.9x + 0.9y = 22.5 \\\\ 0.9x + 0.8y = 21 \\end{cases} \\Rightarrow \\begin{cases} y = 15 \\\\ x = 10 \\end{cases}',
        result: 'Giá niêm yết ban đầu của tivi là 10 triệu đồng, tủ lạnh là 15 triệu đồng.'
      }
    ],
    finalAnswer: 'Tivi: 10 triệu đồng; Tủ lạnh: 15 triệu đồng.',
    commonMistakes: [
      'Nhầm giảm 10% thành giá còn 0.1x thay vị 0.9x.',
      'Quên đơn vị triệu đồng.',
      'Đảo đáp án tivi và tủ lạnh.'
    ],
    reviewSuggestions: [
      'Ôn lại bài toán phần trăm.',
      'Luyện cách đặt ẩn và lập phương trình từ dữ kiện thực tế.'
    ]
  },
  {
    id: 'math-s4',
    questionId: 'math-q4',
    recognition: 'Đây là bài chứng minh tứ giác nội tiếp, trọng tâm là tìm được hai góc vuông hoặc một dấu hiệu nội tiếp phù hợp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tứ giác cần chứng minh',
        explanation: 'Ta cần chứng minh bốn điểm \\(A, H, C, K\\) cùng thuộc một đường tròn.',
        formula: '\\text{Xét tứ giác } AHCK',
        result: 'Tứ giác cần xét là \\(AHCK\\).'
      },
      {
        order: 2,
        title: 'Tìm các góc đặc biệt',
        explanation: 'Vì \\(CH \\perp AB\\) tại \\(H\\), ta có \\(\\widehat{AHC} = 90^\\circ\\). Vì \\(AK \\perp AB\\) tại \\(A\\), ta có \\(\\widehat{KAC} = 90^\\circ\\) (chứng minh thông qua tính chất đường trung bình hoặc song song).',
        formula: '\\widehat{AHC} = 90^\\circ, \\quad \\widehat{KAC} = 90^\\circ',
        result: 'Ta thu được hai góc đối đều bằng \\(90^\\circ\\).'
      },
      {
        order: 3,
        title: 'Kết luận',
        explanation: 'Tứ giác \\(AHCK\\) có tổng hai góc đối diện bằng \\(180^\\circ\\):',
        formula: '\\widehat{AHC} + \\widehat{KAC} = 90^\\circ + 90^\\circ = 180^\\circ',
        result: 'Do đó, \\(AHCK\\) là tứ giác nội tiếp.'
      }
    ],
    finalAnswer: 'Tứ giác AHCK nội tiếp.',
    commonMistakes: [
      'Không nêu rõ lý do có góc vuông.',
      'Kết luận nội tiếp nhưng chưa chỉ ra dấu hiệu.',
      'Viết sai thứ tự tứ giác.'
    ],
    reviewSuggestions: [
      'Ôn lại các dấu hiệu nhận biết tứ giác nội tiếp.',
      'Luyện trình bày chứng minh góc trong hình học.'
    ]
  },
  {
    id: 'math-s5',
    questionId: 'math-q5',
    recognition: 'Đề có √x, phân thức và mẫu x - 1. Đây là câu rút gọn căn mức dễ, có thêm yêu cầu tính giá trị khi x = 4.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mẫu thức',
        explanation: 'Ta có mẫu thức chung là \\(x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)\\).',
        formula: 'x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)',
        result: 'Mẫu thức chung của biểu thức là \\(x - 1\\).'
      },
      {
        order: 2,
        title: 'Quy đồng và rút gọn',
        explanation: 'Quy đồng hai phân thức của \\(A\\) về mẫu chung \\(x - 1\\):',
        formula: 'A = \\frac{(\\sqrt{x} + 1)^2}{x - 1} - \\frac{2}{x - 1} = \\frac{x + 2\\sqrt{x} + 1 - 2}{x - 1}',
        result: 'Kết quả rút gọn: \\(A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}\\).'
      },
      {
        order: 3,
        title: 'Tính giá trị tại x = 4',
        explanation: 'Thay \\(x = 4\\) (thỏa mãn điều kiện) vào biểu thức \\(A\\) đã rút gọn, khi đó \\(\\sqrt{x} = 2\\).',
        formula: 'A(4) = \\frac{4 + 2 \\cdot 2 - 1}{4 - 1} = \\frac{7}{3}',
        result: 'Giá trị thu được là \\(A(4) = \\frac{7}{3}\\).'
      }
    ],
    finalAnswer: '\\(A = \\frac{x + 2\\sqrt{x} - 1}{x - 1}\\); \\(A(4) = \\frac{7}{3}\\).',
    commonMistakes: [
      'Quên phân tích x - 1.',
      'Khai triển sai (√x + 1)².',
      'Thay x = 4 nhưng quên √4 = 2.'
    ],
    reviewSuggestions: [
      'Ôn hằng đẳng thức bình phương của một tổng.',
      'Luyện quy đồng phân thức chứa căn.'
    ]
  },
  {
    id: 'math-s6',
    questionId: 'math-q6',
    recognition: 'Đề có hai phân thức đối xứng theo √x - 2 và √x + 2, sau đó nhân với x - 4. Đây là bài rút gọn căn mức trung bình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Rút gọn ngoặc đầu',
        explanation: 'Quy đồng biểu thức trong ngoặc: \\(\\frac{1}{\\sqrt{x} - 2} + \\frac{1}{\\sqrt{x} + 2}\\).',
        formula: '\\frac{\\sqrt{x} + 2 + \\sqrt{x} - 2}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} = \\frac{2\\sqrt{x}}{x - 4}',
        result: 'Biểu thức trong ngoặc được rút gọn thành: \\(\\frac{2\\sqrt{x}}{x - 4}\\).'
      },
      {
        order: 2,
        title: 'Nhân với phân thức còn lại',
        explanation: 'Thực hiện phép nhân biểu thức vừa rút gọn với phân thức thứ hai:',
        formula: 'B = \\frac{2\\sqrt{x}}{x - 4} \\cdot \\frac{x - 4}{2\\sqrt{x}}',
        result: 'Tử thức và mẫu thức triệt tiêu hoàn toàn, thu được: \\(B = 1\\).'
      },
      {
        order: 3,
        title: 'Xử lý câu phụ',
        explanation: 'Vì biểu thức \\(B\\) luôn rút gọn về hằng số \\(1\\) với mọi \\(x > 0, x \\neq 4\\), nên phương trình \\(B = 2\\) trở thành \\(1 = 2\\) (vô nghiệm).',
        formula: '1 = 2 \\quad (\\text{Vô lý})',
        result: 'Do đó không tồn tại giá trị nào của \\(x\\) thỏa mãn yêu cầu.'
      }
    ],
    finalAnswer: '\\(B = 1\\); không có \\(x\\) thỏa \\(B = 2\\).',
    commonMistakes: [
      'Không nhận ra x - 4 = (√x - 2)(√x + 2).',
      'Rút gọn nhầm khiến B khác 1.',
      'Vẫn cố giải B = 2 dù B đã rút gọn thành hằng số 1.'
    ],
    reviewSuggestions: [
      'Ôn hiệu hai bình phương.',
      'Luyện rút gọn biểu thức trước khi làm câu phụ.'
    ]
  },
  {
    id: 'math-s7',
    questionId: 'math-q7',
    recognition: 'Đề có phép chia hai cụm biểu thức chứa √x. Cần rút gọn từng cụm riêng trước khi chia.',
    detailedSteps: [
      {
        order: 1,
        title: 'Rút gọn cụm thứ nhất',
        explanation: 'Đặt \\(M = \\frac{\\sqrt{x}}{\\sqrt{x} + 1} + \\frac{1}{x + \\sqrt{x}}\\). Với mẫu chung là \\(x + \\sqrt{x} = \\sqrt{x}(\\sqrt{x} + 1)\\), ta quy đồng:',
        formula: 'M = \\frac{\\sqrt{x} \\cdot \\sqrt{x} + 1}{\\sqrt{x}(\\sqrt{x} + 1)} = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)}',
        result: 'Cụm thứ nhất rút gọn thành: \\(M = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)}\\).'
      },
      {
        order: 2,
        title: 'Rút gọn cụm thứ hai',
        explanation: 'Đặt \\(N = \\frac{1}{\\sqrt{x}} - \\frac{1}{\\sqrt{x} + 1}\\). Quy đồng theo mẫu chung là \\(\\sqrt{x}(\\sqrt{x} + 1)\\):',
        formula: 'N = \\frac{\\sqrt{x} + 1 - \\sqrt{x}}{\\sqrt{x}(\\sqrt{x} + 1)} = \\frac{1}{\\sqrt{x}(\\sqrt{x} + 1)}',
        result: 'Cụm thứ hai rút gọn thành: \\(N = \\frac{1}{\\sqrt{x}(\\sqrt{x} + 1)}\\).'
      },
      {
        order: 3,
        title: 'Thực hiện phép chia',
        explanation: 'Ta thực hiện phép chia \\(C = M \\div N\\) bằng cách nhân nghịch đảo:',
        formula: 'C = \\frac{x + 1}{\\sqrt{x}(\\sqrt{x} + 1)} \\cdot \\frac{\\sqrt{x}(\\sqrt{x} + 1)}{1}',
        result: 'Rút gọn hoàn toàn ta được: \\(C = x + 1\\).'
      },
      {
        order: 4,
        title: 'Tìm x khi C = 6',
        explanation: 'Thay biểu thức \\(C\\) đã rút gọn vào phương trình \\(C = 6\\):',
        formula: 'x + 1 = 6 \\Rightarrow x = 5',
        result: 'Giá trị \\(x = 5\\) thỏa mãn điều kiện xác định \\(x > 0\\).'
      }
    ],
    finalAnswer: '\\(C = x + 1\\); \\(x = 5\\).',
    commonMistakes: [
      'Phân tích sai x + √x.',
      'Quên đổi phép chia thành nhân nghịch đảo.',
      'Rút gọn nhầm làm mất biểu thức x + 1.'
    ],
    reviewSuggestions: [
      'Ôn phân tích x + √x.',
      'Luyện phép chia phân thức đại số.'
    ]
  },
  {
    id: 'math-s8',
    questionId: 'math-q8',
    recognition: 'Đây là hệ phương trình bậc nhất hai ẩn cơ bản, có thể giải nhanh bằng phương pháp cộng đại số.',
    detailedSteps: [
      {
        order: 1,
        title: 'Viết hệ phương trình',
        explanation: 'Ta có hệ phương trình: \\(\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}\\).',
        formula: '\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}',
        result: 'Nhận thấy hệ số của ẩn \\(y\\) đối nhau nên có thể cộng hai vế phương trình để khử \\(y\\).'
      },
      {
        order: 2,
        title: 'Khử ẩn y',
        explanation: 'Cộng từng vế của hai phương trình trong hệ ta được:',
        formula: '(2x + y) + (x - y) = 7 + 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3',
        result: 'Tìm được giá trị đầu tiên: \\(x = 3\\).'
      },
      {
        order: 3,
        title: 'Tìm y và kết luận',
        explanation: 'Thay \\(x = 3\\) vào phương trình thứ hai \\(x - y = 2\\) để tìm \\(y\\):',
        formula: '3 - y = 2 \\Rightarrow y = 1',
        result: 'Nghiệm của hệ phương trình là \\((x; y) = (3; 1)\\).'
      }
    ],
    finalAnswer: '\\(x = 3\\); \\(y = 1\\).',
    commonMistakes: [
      'Cộng hệ nhưng đổi dấu sai.',
      'Tìm x xong quên tìm y.',
      'Kết luận nghiệm sai thứ tự.'
    ],
    reviewSuggestions: [
      'Ôn phương pháp cộng đại số.',
      'Luyện kiểm tra nghiệm bằng cách thay lại vào hệ.'
    ]
  },
  {
    id: 'math-s9',
    questionId: 'math-q9',
    recognition: 'Đây là bài toán rút gọn biểu thức số không chứa biến. Ta phân tích các số dưới căn thành tích có chứa số chính phương để đưa ra ngoài dấu căn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các căn thức',
        explanation: 'Ta phân tích các số dưới dấu căn thành tích của một số chính phương với số nhỏ nhất có thể:',
        formula: '\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}; \\quad \\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}; \\quad \\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}',
        result: 'Đưa thừa số ra ngoài dấu căn: \\(3\\sqrt{2}, 5\\sqrt{2}, 2\\sqrt{2}\\).'
      },
      {
        order: 2,
        title: 'Thay thế và rút gọn',
        explanation: 'Thay các giá trị vừa tính vào biểu thức ban đầu và thực hiện phép cộng trừ các căn thức đồng dạng:',
        formula: 'A = 3\\sqrt{2} - 2 \\cdot (5\\sqrt{2}) + 3 \\cdot (2\\sqrt{2}) = 3\\sqrt{2} - 10\\sqrt{2} + 6\\sqrt{2}',
        result: 'A = (3 - 10 + 6)\\sqrt{2} = -\\sqrt{2}.'
      }
    ],
    finalAnswer: '\\(A = -\\sqrt{2}\\).',
    commonMistakes: [
      'Nhầm lẫn khi nhân hệ số ngoài căn (quên nhân 2 với 5, hoặc 3 với 2).',
      'Cộng trừ sai phần hệ số nguyên.'
    ],
    reviewSuggestions: [
      'Luyện kỹ năng đưa thừa số ra ngoài/vào trong dấu căn bậc hai.',
      'Chú ý tính toán cẩn thận phần hệ số.'
    ]
  },
  {
    id: 'math-s10',
    questionId: 'math-q10',
    recognition: 'Đây là bài toán tìm điều kiện xác định (ĐKXĐ). Biểu thức chứa căn thức bậc hai và chứa mẫu thức, do đó cần điều kiện để căn thức có nghĩa và mẫu thức khác 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xét các điều kiện của căn thức bậc hai',
        explanation: 'Biểu thức chứa căn thức bậc hai \\(\\sqrt{x}\\). Để căn thức này xác định, ta cần biểu thức dưới căn không âm:',
        formula: 'x \\ge 0',
        result: 'Điều kiện 1: \\(x \\ge 0\\).'
      },
      {
        order: 2,
        title: 'Xét điều kiện để các mẫu thức khác 0',
        explanation: 'Các mẫu thức trong biểu thức bao gồm: \\(\\sqrt{x}-1\\), \\(\\sqrt{x}+1\\) và mẫu thức ngoài cùng là \\(\\sqrt{x}\\). Ta cần các mẫu thức này đồng thời khác 0:',
        formula: '\\begin{cases} \\sqrt{x}-1 \\neq 0 \\\\ \\sqrt{x}+1 \\neq 0 \\\\ \\sqrt{x} \\neq 0 \\end{cases} \\Rightarrow \\begin{cases} \\sqrt{x} \\neq 1 \\\\ \\sqrt{x} \\neq -1 \\text{ (luôn đúng)} \\\\ x \\neq 0 \\end{cases} \\Rightarrow \\begin{cases} x \\neq 1 \\\\ x \\neq 0 \\end{cases}',
        result: 'Điều kiện 2: \\(x \\neq 0\\) và \\(x \\neq 1\\).'
      },
      {
        order: 3,
        title: 'Kết hợp các điều kiện',
        explanation: 'Kết hợp điều kiện từ cả căn thức và các mẫu thức:',
        formula: 'x \\ge 0, \\ x \\neq 0, \\ x \\neq 1 \\Rightarrow x > 0, \\ x \\neq 1',
        result: 'Điều kiện xác định của biểu thức P là \\(x > 0\\) và \\(x \\neq 1\\).'
      }
    ],
    finalAnswer: '\\(x > 0\\) và \\(x \\neq 1\\).',
    commonMistakes: [
      'Quên điều kiện mẫu thức \\(\\sqrt{x} \\neq 0\\) nằm ở phần chia hoặc phần mẫu chung ngoài.',
      'Nhầm lẫn giữa điều kiện lớn hơn hoặc bằng 0 với lớn hơn hẳn 0.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: căn dưới mẫu phải có điều kiện > 0.',
      'Luôn liệt kê đầy đủ tất cả các mẫu số xuất hiện trong đề bài.'
    ]
  },
  {
    id: 'math-s11',
    questionId: 'math-q11',
    recognition: 'Đây là dạng toán tìm giá trị nguyên của biến để biểu thức nhận giá trị nguyên. Ta sử dụng phương pháp chia tử cho mẫu để tách phần nguyên và phần phân thức, sau đó tìm ước của tử số.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tách biểu thức thành phần nguyên và phân thức',
        explanation: 'Ta biến đổi tử thức \\(\\sqrt{x}+3\\) xuất hiện lượng giống mẫu thức \\(\\sqrt{x}-1\\):',
        formula: 'M = \\frac{\\sqrt{x}-1+4}{\\sqrt{x}-1} = \\frac{\\sqrt{x}-1}{\\sqrt{x}-1} + \\frac{4}{\\sqrt{x}-1} = 1 + \\frac{4}{\\sqrt{x}-1}',
        result: 'Tách được: \\(M = 1 + \\frac{4}{\\sqrt{x}-1}\\).'
      },
      {
        order: 2,
        title: 'Lập luận điều kiện để biểu thức nguyên',
        explanation: 'Để \\(M\\) có giá trị nguyên khi \\(x\\) là số nguyên, ta cần phân thức \\(\\frac{4}{\\sqrt{x}-1}\\) nhận giá trị nguyên. Do đó, \\(\\sqrt{x}-1\\) phải là ước của 4.',
        formula: '\\sqrt{x}-1 \\in \\text{Ư}(4) = \\{1; -1; 2; -2; 4; -4\\}',
        result: 'Các giá trị có thể có của mẫu thức là: \\(\\pm 1, \\pm 2, \\pm 4\\).'
      },
      {
        order: 3,
        title: 'Lập bảng giá trị để giải tìm x',
        explanation: 'Ta giải từng phương trình với từng ước số để tìm giá trị của x và đối chiếu điều kiện xác định (\\(x \\ge 0, x \\neq 1\\)):',
        formula: '\\begin{array}{|c|c|c|c|c|c|c|} \\hline \\sqrt{x}-1 & 1 & -1 & 2 & -2 & 4 & -4 \\\\ \\hline \\sqrt{x} & 2 & 0 & 3 & -1 \\text{ (loại)} & 5 & -3 \\text{ (loại)} \\\\ \\hline x & 4 & 0 & 9 & - & 25 & - \\\\ \\hline \\text{Đối chiếu ĐKXĐ} & \\text{nhận} & \\text{nhận} & \\text{nhận} & - & \\text{nhận} & - \\\\ \\hline \\end{array}',
        result: 'Các giá trị tìm được thỏa mãn là: \\(x \\in \\{0; 4; 9; 25\\}\\).'
      }
    ],
    finalAnswer: '\\(x \\in \\{0, 4, 9, 25\\}\\).',
    commonMistakes: [
      'Quên đối chiếu giá trị \\(x\\) tìm được với điều kiện xác định (đặc biệt là giá trị biên hoặc nghiệm không thỏa mẫu).',
      'Thiếu các ước số âm (quên xét ước âm như -1, -2, -4).',
      'Để giá trị căn bằng số âm dẫn đến tìm ra nghiệm sai.'
    ],
    reviewSuggestions: [
      'Luôn lập bảng giá trị rõ ràng để tránh tính toán nhầm lẫn.',
      'Nhớ đối chiếu điều kiện xác định ở bước kết luận cuối cùng.'
    ]
  },
  {
    id: 'math-s12',
    questionId: 'math-q12',
    recognition: 'Đây là bài toán rút gọn kết hợp câu hỏi phụ dạng so sánh biểu thức với một số và giải bất phương trình chứa ẩn dưới căn thức bậc hai.',
    detailedSteps: [
      {
        order: 1,
        title: 'So sánh Q với 1 bằng cách xét hiệu',
        explanation: 'Để so sánh \\(Q\\) với 1, ta lập hiệu \\(Q - 1\\):',
        formula: 'Q - 1 = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2} - 1 = \\frac{\\sqrt{x}-1 - (\\sqrt{x}+2)}{\\sqrt{x}+2} = \\frac{-3}{\\sqrt{x}+2}',
        result: 'Hiệu thu gọn là \\(\\frac{-3}{\\sqrt{x}+2}\\).'
      },
      {
        order: 2,
        title: 'Biện luận dấu của hiệu',
        explanation: 'Vì \\(x \\ge 0\\) nên \\(\\sqrt{x} \\ge 0 \\Rightarrow \\sqrt{x}+2 \\ge 2 > 0\\). Số tử số là -3 là số âm. Do đó:',
        formula: '\\frac{-3}{\\sqrt{x}+2} < 0 \\Rightarrow Q - 1 < 0 \\Rightarrow Q < 1',
        result: 'Vậy \\(Q < 1\\) với mọi \\(x \\ge 0\\).'
      },
      {
        order: 3,
        title: 'Giải bất phương trình Q < 0',
        explanation: 'Ta giải bất phương trình: \\(\\frac{\\sqrt{x}-1}{\\sqrt{x}+2} < 0\\). Vì mẫu thức \\(\\sqrt{x}+2 > 0\\) với mọi \\(x \\ge 0\\), bất phương trình tương đương với tử thức nhỏ hơn 0:',
        formula: '\\sqrt{x}-1 < 0 \\Rightarrow \\sqrt{x} < 1 \\Rightarrow x < 1',
        result: 'Bất phương trình tương đương với \\(x < 1\\).'
      },
      {
        order: 4,
        title: 'Kết hợp điều kiện xác định',
        explanation: 'Kết hợp nghiệm \\(x < 1\\) với điều kiện xác định ban đầu \\(x \\ge 0\\):',
        formula: '0 \\le x < 1',
        result: 'Khoảng giá trị của x cần tìm là \\(0 \\le x < 1\\).'
      }
    ],
    finalAnswer: '\\(Q < 1\\); \\(0 \\le x < 1\\).',
    commonMistakes: [
      'Quên kết hợp điều kiện xác định \\(x \\ge 0\\) dẫn đến ghi kết quả sai lệch như \\(x < 1\\) (thiếu cận dưới 0).',
      'Xét hiệu so sánh nhưng nhân chéo phân thức khi chưa biết dấu của mẫu số (ở đây mẫu số luôn dương nên an toàn, nhưng thói quen nhân chéo dễ gây sai sót với biểu thức chưa rõ dấu).'
    ],
    reviewSuggestions: [
      'Phương pháp so sánh an toàn nhất luôn luôn là xét hiệu.',
      'Luôn chú ý điều kiện tập xác định khi viết khoảng giá trị cuối cùng.'
    ]
  },
  {
    id: 'math-s13',
    questionId: 'math-q13',
    recognition: 'Đề có các cụm từ "giá niêm yết", "giảm giá 15% và 20%", "tổng tiền thực tế". Đây là dạng toán thực tế mua bán, giảm giá, phần trăm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi giá niêm yết của máy giặt là \\(x\\) (triệu đồng) và giá niêm yết của tủ lạnh là \\(y\\) (triệu đồng).',
        formula: 'x > 0, \\quad y > 0',
        result: 'Điều kiện: cả hai ẩn đều phải là số dương.'
      },
      {
        order: 2,
        title: 'Lập phương trình tổng giá niêm yết',
        explanation: 'Vì tổng giá niêm yết ban đầu của máy giặt và tủ lạnh là 30 triệu đồng, ta có phương trình:',
        formula: 'x + y = 30',
        result: 'Ta được phương trình thứ nhất (1).'
      },
      {
        order: 3,
        title: 'Lập phương trình tổng tiền thực tế sau giảm giá',
        explanation: 'Máy giặt giảm giá 15% nên giá bán thực tế là \\(x \\cdot (100\\% - 15\\%) = 0,85x\\).\nTủ lạnh giảm giá 20% nên giá bán thực tế là \\(y \\cdot (100\\% - 20\\%) = 0,8y\\).\nTổng số tiền thực tế khách phải trả là 24,75 triệu đồng, ta có phương trình:',
        formula: '0,85x + 0,8y = 24,75',
        result: 'Ta được phương trình thứ hai (2).'
      },
      {
        order: 4,
        title: 'Giải hệ phương trình và đối chiếu điều kiện',
        explanation: 'Từ (1) ta có \\(y = 30 - x\\). Thay vào (2) ta được:',
        formula: '0,85x + 0,8(30 - x) = 24,75 \\Rightarrow 0,05x + 24 = 24,75 \\Rightarrow 0,05x = 0,75 \\Rightarrow x = 15',
        result: 'Từ đó suy ra \\(y = 30 - 15 = 15\\). Cả hai giá trị đều thỏa mãn điều kiện dương.'
      }
    ],
    finalAnswer: 'Giá niêm yết của máy giặt là 15 triệu đồng, tủ lạnh là 15 triệu đồng.',
    commonMistakes: [
      'Nhầm lẫn số tiền được giảm với số tiền phải trả (ví dụ viết phương trình là 0,15x + 0,20y = 24,75 là sai).',
      'Quên đối chiếu điều kiện hoặc thiếu đơn vị triệu đồng.'
    ],
    reviewSuggestions: [
      'Luyện thêm cách lập phương trình biểu diễn giá tiền sau khi tăng/giảm phần trăm.',
      'Chú ý phân biệt rõ ràng giữa "số tiền giảm giá" và "số tiền sau giảm giá".'
    ]
  },
  {
    id: 'math-s14',
    questionId: 'math-q14',
    recognition: 'Đề bài cho tổng số học sinh của hai lớp và tỉ lệ phần trăm đạt học sinh khá giỏi của từng lớp để tính tổng số học sinh khá giỏi. Đây là dạng toán tổng số lượng và tỉ lệ phần trăm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi số học sinh của lớp 9A là \\(x\\) (học sinh) và số học sinh của lớp 9B là \\(y\\) (học sinh).',
        formula: 'x, y \\in \\mathbb{N}^*, \\quad x, y < 82',
        result: 'Điều kiện: số học sinh phải là số nguyên dương và nhỏ hơn tổng số học sinh 82.'
      },
      {
        order: 2,
        title: 'Lập phương trình tổng số học sinh',
        explanation: 'Vì tổng số học sinh của cả hai lớp là 82 học sinh, ta có phương trình:',
        formula: 'x + y = 82',
        result: 'Ta thu được phương trình thứ nhất (1).'
      },
      {
        order: 3,
        title: 'Lập phương trình tổng số học sinh khá giỏi',
        explanation: 'Số học sinh khá giỏi lớp 9A là \\(75\\%x = 0,75x\\) học sinh.\nSố học sinh khá giỏi lớp 9B là \\(80\\%y = 0,80y\\) học sinh.\nVì tổng số học sinh khá giỏi của hai lớp là 64 học sinh, ta có phương trình:',
        formula: '0,75x + 0,8y = 64',
        result: 'Ta thu được phương trình thứ hai (2).'
      },
      {
        order: 4,
        title: 'Giải hệ phương trình và kết luận',
        explanation: 'Nhân phương trình (1) với 0,8 ta được \\(0,8x + 0,8y = 65,6\\). Trừ phương trình này cho phương trình (2):',
        formula: '(0,8x + 0,8y) - (0,75x + 0,8y) = 65,6 - 64 \\Rightarrow 0,05x = 1,6 \\Rightarrow x = 32',
        result: 'Thay \\(x = 32\\) vào (1) suy ra \\(y = 82 - 32 = 50\\). Cả hai đều thỏa mãn điều kiện là số nguyên dương.'
      }
    ],
    finalAnswer: 'Lớp 9A có 32 học sinh, lớp 9B có 50 học sinh.',
    commonMistakes: [
      'Đặt điều kiện cho ẩn chưa chặt chẽ (học sinh phải là số nguyên dương \\(\\mathbb{N}^*\\)).',
      'Tính toán nhầm lẫn khi nhân hệ số thập phân.'
    ],
    reviewSuggestions: [
      'Thực hành các bài toán có lời văn liên quan đến số học sinh, số sản phẩm đạt chuẩn.',
      'Nhớ quy đồng hệ số thành số nguyên (nhân cả hai vế với 100) để giải hệ dễ dàng hơn.'
    ]
  },
  {
    id: 'math-s15',
    questionId: 'math-q15',
    recognition: 'Đề bài có các chi tiết "dự định chở một lượng hàng", "sau đó chở thêm", "điều thêm xe" và "mỗi xe chở thêm/bớt hàng". Đây là dạng toán vận chuyển, số xe và khối lượng mỗi xe.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi số xe ban đầu của đội là \\(x\\) (xe).',
        formula: 'x \\in \\mathbb{N}^*',
        result: 'Điều kiện: số xe phải là số nguyên dương.'
      },
      {
        order: 2,
        title: 'Biểu diễn lượng hàng mỗi xe chở theo dự định',
        explanation: 'Theo dự định, đội xe chở 120 tấn hàng, chia đều cho \\(x\\) xe. Khối lượng hàng mỗi xe dự định chở là:',
        formula: '\\frac{120}{x} \\text{ (tấn)}',
        result: 'Biểu thức biểu diễn lượng hàng mỗi xe lúc đầu.'
      },
      {
        order: 3,
        title: 'Biểu diễn lượng hàng mỗi xe chở thực tế',
        explanation: 'Thực tế đội phải chở thêm 40 tấn hàng nên tổng khối lượng hàng là \\(120 + 40 = 160\\) tấn.\nSố xe thực tế là \\(x + 2\\) xe. Khối lượng hàng mỗi xe chở thực tế là:',
        formula: '\\frac{160}{x + 2} \\text{ (tấn)}',
        result: 'Biểu thức biểu diễn lượng hàng mỗi xe lúc sau.'
      },
      {
        order: 4,
        title: 'Lập phương trình',
        explanation: 'Vì mỗi xe lúc sau phải chở thêm 1 tấn so với dự định, ta có phương trình:',
        formula: '\\frac{160}{x + 2} - \\frac{120}{x} = 1',
        result: 'Ta lập được phương trình chứa ẩn ở mẫu.'
      },
      {
        order: 5,
        title: 'Giải phương trình và đối chiếu điều kiện',
        explanation: 'Quy đồng và khử mẫu phương trình (với điều kiện \\(x > 0\\)):',
        formula: '160x - 120(x + 2) = x(x + 2) \\Rightarrow 40x - 240 = x^2 + 2x \\Rightarrow x^2 - 38x + 240 = 0',
        result: 'Giải phương trình bậc hai ta được: \\(x = 8\\) hoặc \\(x = 30\\). Cả hai đều thỏa mãn điều kiện nguyên dương.'
      }
    ],
    finalAnswer: 'Ban đầu đội có 8 xe hoặc 30 xe.',
    commonMistakes: [
      'Quên không cộng thêm lượng hàng phát sinh (lấy 120 + 40 = 160 tấn) mà vẫn dùng 120 tấn cho lúc sau.',
      'Quy đồng mẫu thức và nhân phá ngoặc bị sai dấu.',
      'Chỉ lấy một nghiệm nguyên dương nhỏ hơn mà loại nghiệm lớn hơn khi không có điều kiện ràng buộc thêm.'
    ],
    reviewSuggestions: [
      'Luyện tập giải phương trình chứa ẩn ở mẫu bằng cách quy đồng tỉ mỉ.',
      'Cần đọc kỹ đề để xác định đúng lượng hàng thực tế chở (hàng ban đầu + hàng thêm).'
    ]
  },
  {
    id: 'math-s16',
    questionId: 'math-q16',
    recognition: 'Bài toán mô tả hai xe đi ngược chiều, xuất phát lệch giờ nhau và gặp nhau tại một điểm. Đây là dạng toán chuyển động đường bộ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và biểu diễn các vận tốc',
        explanation: 'Gọi vận tốc của xe máy là \\(x\\) (km/h). Vì vận tốc ô tô lớn hơn xe máy 20 km/h, nên vận tốc ô tô là \\(x + 20\\) (km/h).',
        formula: 'x > 0',
        result: 'Điều kiện: vận tốc xe máy phải là số dương.'
      },
      {
        order: 2,
        title: 'Tính quãng đường mỗi xe đã đi đến điểm gặp nhau',
        explanation: 'Hai xe gặp nhau tại C. C cách B là 60 km, do đó:\nQuãng đường ô tô đi được (từ B đến C) là 60 km.\nQuãng đường xe máy đi được (từ A đến C) là \\(140 - 60 = 80\\) km.',
        formula: 'S_{\\text{xe máy}} = 80 \\text{ km}, \\quad S_{\\text{ô tô}} = 60 \\text{ km}',
        result: 'Quãng đường hai xe lần lượt đi là 80 km và 60 km.'
      },
      {
        order: 3,
        title: 'Biểu diễn thời gian đi của mỗi xe',
        explanation: 'Thời gian xe máy đi từ A đến C là \\(\\frac{80}{x}\\) (giờ).\nThời gian ô tô đi từ B đến C là \\(\\frac{60}{x + 20}\\) (giờ).',
        formula: 't_{\\text{xe máy}} = \\frac{80}{x}, \\quad t_{\\text{ô tô}} = \\frac{60}{x + 20}',
        result: 'Biểu thức thời gian đi của hai xe.'
      },
      {
        order: 4,
        title: 'Lập phương trình và giải',
        explanation: 'Vì ô tô đi sau xe máy 1 giờ, thời gian xe máy đi đến khi gặp nhau nhiều hơn thời gian ô tô đi là 1 giờ:',
        formula: '\\frac{80}{x} - \\frac{60}{x + 20} = 1',
        result: 'Quy đồng mẫu thức ta được phương trình: \\(80(x + 20) - 60x = x(x + 20)\\).'
      },
      {
        order: 5,
        title: 'Thu gọn phương trình và kết luận',
        explanation: 'Biến đổi phương trình bậc hai:',
        formula: '80x + 1600 - 60x = x^2 + 20x \\Rightarrow x^2 = 1600 \\Rightarrow x = 40 \\text{ (vì } x > 0\\text{)}',
        result: 'Vận tốc xe máy là 40 km/h. Vận tốc ô tô là \\(40 + 20 = 60\\) km/h. Cả hai đều thỏa mãn.'
      }
    ],
    finalAnswer: 'Vận tốc xe máy: 40 km/h, vận tốc ô tô: 60 km/h.',
    commonMistakes: [
      'Xác định sai quãng đường đi được của xe máy (lấy nhầm 140 km thay vì trừ đi khoảng cách 60 km).',
      'Thiết lập sai phương trình hiệu thời gian (lấy thời gian ô tô trừ xe máy thay vì ngược lại).'
    ],
    reviewSuggestions: [
      'Vẽ sơ đồ chuyển động ngược chiều để hình dung rõ quãng đường của mỗi xe.',
      'Sử dụng bảng ba cột (Quãng đường, Vận tốc, Thời gian) để lập hệ thức chính xác.'
    ]
  },
  {
    id: 'math-s17',
    questionId: 'math-q17',
    recognition: 'Đề bài yêu cầu tìm thời gian chảy riêng của mỗi vòi khi biết thời gian chảy chung và hiệu số thời gian chảy riêng. Đây là dạng toán năng suất, làm chung – làm riêng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi thời gian vòi thứ nhất chảy một mình đầy bể là \\(x\\) (giờ).',
        formula: 'x > 6',
        result: 'Điều kiện: thời gian chảy riêng phải lớn hơn thời gian chảy chung là 6 giờ.'
      },
      {
        order: 2,
        title: 'Biểu diễn thời gian vòi thứ hai',
        explanation: 'Vì vòi thứ nhất chảy đầy bể nhanh hơn vòi thứ hai 5 giờ, nên vòi thứ hai cần nhiều thời gian hơn vòi thứ nhất là 5 giờ:',
        formula: 'x + 5 \\text{ (giờ)}',
        result: 'Thời gian vòi hai chảy một mình đầy bể là \\(x + 5\\) giờ.'
      },
      {
        order: 3,
        title: 'Tính năng suất trong 1 giờ',
        explanation: 'Trong 1 giờ:\nVòi thứ nhất chảy được \\(\\frac{1}{x}\\) bể.\nVòi thứ hai chảy được \\(\\frac{1}{x + 5}\\) bể.\nCả hai vòi cùng chảy đầy bể trong 6 giờ nên trong 1 giờ cả hai chảy được \\(\\frac{1}{6}\\) bể.',
        formula: '\\frac{1}{x} + \\frac{1}{x + 5} = \\frac{1}{6}',
        result: 'Ta có phương trình cộng năng suất trong 1 giờ.'
      },
      {
        order: 4,
        title: 'Giải phương trình và đối chiếu',
        explanation: 'Quy đồng mẫu thức và khử mẫu phương trình:',
        formula: '6(x + 5) + 6x = x(x + 5) \\Rightarrow 12x + 30 = x^2 + 5x \\Rightarrow x^2 - 7x - 30 = 0',
        result: 'Giải phương trình bậc hai ta được: \\(x = 10\\) (nhận) hoặc \\(x = -3\\) (loại do điều kiện \\(x > 6\\)).'
      },
      {
        order: 5,
        title: 'Kết luận',
        explanation: 'Thời gian vòi một chảy riêng đầy bể là 10 giờ. Thời gian vòi hai chảy riêng đầy bể là \\(10 + 5 = 15\\) giờ.',
        formula: 'x = 10, \\quad x + 5 = 15',
        result: 'Cả hai giá trị đều thỏa mãn các điều kiện thực tế.'
      }
    ],
    finalAnswer: 'Vòi thứ nhất chảy riêng đầy bể trong 10 giờ, vòi thứ hai trong 15 giờ.',
    commonMistakes: [
      'Nhầm lẫn thời gian chảy nhanh hơn: vòi một nhanh hơn vòi hai tức là thời gian vòi hai lớn hơn vòi một (đặt vòi hai là \\(x-5\\) khi đặt vòi một là \\(x\\) là sai điều kiện).',
      'Cộng trực tiếp thời gian \\(x + (x + 5) = 6\\) thay vì cộng năng suất (lượng công việc trong một đơn vị thời gian).'
    ],
    reviewSuggestions: [
      'Ghi nhớ nguyên tắc: không được cộng trực tiếp thời gian hoàn thành công việc, mà phải quy về năng suất làm việc trong 1 giờ.',
      'Luyện tập giải phương trình bậc hai bằng cách phân tích đa thức thành nhân tử.'
    ]
  },
  {
    id: 'math-s18',
    questionId: 'math-q18',
    recognition: 'Đề bài yêu cầu tìm số lượng sản phẩm mỗi tổ sản xuất theo kế hoạch khi biết tổng số sản phẩm dự định và tỉ lệ phần trăm vượt mức của mỗi tổ. Đây là dạng toán tổng số lượng và tỉ lệ phần trăm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi số sản phẩm tổ I phải làm theo kế hoạch là \\(x\\) (sản phẩm) và tổ II phải làm là \\(y\\) (sản phẩm).',
        formula: 'x, y \\in \\mathbb{N}^*, \\quad x, y < 700',
        result: 'Điều kiện: Số sản phẩm phải là số nguyên dương và nhỏ hơn 700.'
      },
      {
        order: 2,
        title: 'Lập phương trình theo kế hoạch',
        explanation: 'Theo kế hoạch, hai tổ dự định làm tổng cộng 700 sản phẩm, ta có phương trình:',
        formula: 'x + y = 700',
        result: 'Ta thu được phương trình thứ nhất (1).'
      },
      {
        order: 3,
        title: 'Lập phương trình theo thực tế thực hiện',
        explanation: 'Tổ I làm vượt mức 15% nên số sản phẩm thực tế làm được là \\(115\\%x = 1,15x\\).\nTổ II làm vượt mức 20% nên số sản phẩm thực tế làm được là \\(120\\%y = 1,2y\\).\nVì thực tế cả hai tổ làm được 820 sản phẩm, ta có phương trình:',
        formula: '1,15x + 1,2y = 820',
        result: 'Ta thu được phương trình thứ hai (2).'
      },
      {
        order: 4,
        title: 'Giải hệ phương trình và kết luận',
        explanation: 'Từ (1) ta có \\(y = 700 - x\\). Thế vào phương trình (2) ta được:',
        formula: '1,15x + 1,2(700 - x) = 820 \\Rightarrow -0,05x + 840 = 820 \\Rightarrow 0,05x = 20 \\Rightarrow x = 400',
        result: 'Từ đó suy ra \\(y = 700 - 400 = 300\\). Cả hai đều thỏa mãn điều kiện số nguyên dương.'
      }
    ],
    finalAnswer: 'Tổ I phải làm 400 sản phẩm, Tổ II phải làm 300 sản phẩm theo kế hoạch.',
    commonMistakes: [
      'Nhầm lẫn giữa số lượng làm vượt mức (15%x) và số lượng làm thực tế (115%x). Nếu viết phương trình là 0,15x + 0,2y = 820 là sai.',
      'Thiếu đơn vị sản phẩm hoặc quên đối chiếu điều kiện nguyên dương.'
    ],
    reviewSuggestions: [
      'Luyện tập chuyển đổi các khái niệm "vượt mức", "tăng thêm" thành hệ số phần trăm tương ứng.',
      'Sử dụng phương pháp thế để giải nhanh hệ phương trình khi có tổng đơn giản.'
    ]
  },
  {
    id: 'math-s19',
    questionId: 'math-q19',
    recognition: 'Đề bài có các chi tiết "dự định chở một lượng hàng cố định", "có một số xe bị hỏng", và "mỗi xe còn lại chở thêm hàng". Đây là dạng toán vận chuyển, số xe và khối lượng mỗi xe.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi số xe ban đầu của đoàn xe là \\(x\\) (xe).',
        formula: 'x \\in \\mathbb{N}^*, \\quad x > 2',
        result: 'Điều kiện: Số xe phải là số nguyên lớn hơn 2 (vì có 2 xe bị hỏng).'
      },
      {
        order: 2,
        title: 'Biểu diễn lượng hàng mỗi xe chở theo dự định',
        explanation: 'Dự định đoàn chở 40 tấn hàng chia đều cho \\(x\\) xe, nên mỗi xe dự định chở:',
        formula: '\\frac{40}{x} \\text{ (tấn)}',
        result: 'Lượng hàng chở mỗi xe theo dự kiến là \\(\\frac{40}{x}\\) tấn.'
      },
      {
        order: 3,
        title: 'Biểu diễn lượng hàng mỗi xe chở thực tế',
        explanation: 'Thực tế có 2 xe bị hỏng nên số xe còn lại là \\(x - 2\\) xe. Mỗi xe thực tế chở:',
        formula: '\\frac{40}{x - 2} \\text{ (tấn)}',
        result: 'Lượng hàng chở mỗi xe thực tế là \\(\\frac{40}{x - 2}\\) tấn.'
      },
      {
        order: 4,
        title: 'Lập phương trình',
        explanation: 'Vì thực tế mỗi xe còn lại phải chở thêm 1 tấn hàng so với dự định, ta có phương trình:',
        formula: '\\frac{40}{x - 2} - \\frac{40}{x} = 1',
        result: 'Phương trình chứa ẩn ở mẫu biểu diễn hiệu lượng chở.'
      },
      {
        order: 5,
        title: 'Giải phương trình và kết luận',
        explanation: 'Quy đồng mẫu thức và khử mẫu (với điều kiện \\(x > 2\\)):',
        formula: '40x - 40(x - 2) = x(x - 2) \\Rightarrow 80 = x^2 - 2x \\Rightarrow x^2 - 2x - 80 = 0',
        result: 'Giải phương trình bậc hai ta được \\(x = 10\\) (nhận) hoặc \\(x = -8\\) (loại). Vậy ban đầu có 10 xe.'
      }
    ],
    finalAnswer: 'Ban đầu đoàn xe có 10 xe.',
    commonMistakes: [
      'Quên điều kiện số xe phải lớn hơn 2 dẫn đến việc không loại trừ chặt chẽ nghiệm âm.',
      'Nhầm lẫn phép tính trừ khi quy đồng khử mẫu.'
    ],
    reviewSuggestions: [
      'Luyện tập kỹ năng phân tích phương trình bậc hai thành nhân tử để tìm nghiệm nhanh chóng.',
      'Phát hiện mối liên hệ nghịch tỷ lệ giữa số lượng xe và khối lượng hàng trên mỗi xe.'
    ]
  },
  {
    id: 'math-s20',
    questionId: 'math-q20',
    recognition: 'Đề bài cho quãng đường cố định, thay đổi vận tốc lúc đi và lúc về dẫn đến chênh lệch thời gian. Đây là dạng toán chuyển động.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi vận tốc lúc đi của xe máy là \\(x\\) (km/h).',
        formula: 'x > 0',
        result: 'Điều kiện: Vận tốc lúc đi phải là số dương.'
      },
      {
        order: 2,
        title: 'Biểu diễn các đại lượng lúc đi và lúc về',
        explanation: 'Quãng đường đi và về đều là 90 km.\nVận tốc lúc về tăng thêm 5 km/h nên vận tốc lúc về là \\(x + 5\\) (km/h).\nThời gian lúc đi là \\(\\frac{90}{x}\\) (giờ).\nThời gian lúc về là \\(\\frac{90}{x + 5}\\) (giờ).',
        formula: 't_{\\text{đi}} = \\frac{90}{x}, \\quad t_{\\text{về}} = \\frac{90}{x + 5}',
        result: 'Biểu thức thời gian đi và về.'
      },
      {
        order: 3,
        title: 'Đổi đơn vị và lập phương trình',
        explanation: 'Đổi 15 phút = \\(\\frac{15}{60} = \\frac{1}{4}\\) giờ.\nVì thời gian về ít hơn thời gian đi là 15 phút, ta có phương trình:',
        formula: '\\frac{90}{x} - \\frac{90}{x + 5} = \\frac{1}{4}',
        result: 'Phương trình cân bằng thời gian đi và về.'
      },
      {
        order: 4,
        title: 'Giải phương trình và kết luận',
        explanation: 'Quy đồng và khử mẫu phương trình (với \\(x > 0\\)):',
        formula: '360(x + 5) - 360x = x(x + 5) \\Rightarrow 1800 = x^2 + 5x \\Rightarrow x^2 + 5x - 1800 = 0',
        result: 'Tính biệt thức \\(\\Delta = 5^2 - 4 \\cdot (-1800) = 7225 = 85^2\\).\nNghiệm dương của phương trình là \\(x = \\frac{-5 + 85}{2} = 40\\) (nhận). Nghiệm âm bị loại.'
      }
    ],
    finalAnswer: 'Vận tốc lúc đi của xe máy là 40 km/h.',
    commonMistakes: [
      'Quên không đổi đơn vị thời gian từ phút sang giờ trước khi đưa vào phương trình.',
      'Lập sai hiệu thời gian (lấy thời gian về trừ đi thời gian đi).'
    ],
    reviewSuggestions: [
      'Nhớ công thức: Thời gian = Quãng đường / Vận tốc.',
      'Kiểm tra lại đơn vị đo lường trước khi đặt bút tính toán.'
    ]
  },
  {
    id: 'math-s21',
    questionId: 'math-q21',
    recognition: 'Đề bài cho thời gian hoàn thành khi hai tổ cùng làm chung và lượng phần trăm công việc hoàn thành khi làm riêng rẽ theo từng khoảng thời gian lệch nhau. Đây là dạng toán năng suất, làm chung – làm riêng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt ẩn và điều kiện xác định',
        explanation: 'Gọi thời gian tổ I làm riêng một mình hoàn thành công việc là \\(x\\) (giờ) và tổ II làm riêng một mình hoàn thành công việc là \\(y\\) (giờ).',
        formula: 'x, y > 12',
        result: 'Điều kiện: Thời gian hoàn thành riêng phải lớn hơn thời gian làm chung là 12 giờ.'
      },
      {
        order: 2,
        title: 'Lập phương trình năng suất làm chung',
        explanation: 'Trong 1 giờ, tổ I làm được \\(\\frac{1}{x}\\) công việc, tổ II làm được \\(\\frac{1}{y}\\) công việc.\nVì cả hai tổ cùng làm thì hoàn thành sau 12 giờ, ta có phương trình:',
        formula: '\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{12}',
        result: 'Ta thu được phương trình thứ nhất (1).'
      },
      {
        order: 3,
        title: 'Lập phương trình năng suất làm riêng lẻ',
        explanation: 'Tổ I làm riêng lẻ trong 3 giờ được \\(\\frac{3}{x}\\) công việc.\nTổ II làm riêng lẻ trong 6 giờ được \\(\\frac{6}{y}\\) công việc.\nCả hai tổ hoàn thành được 40% (tức là \\(\\frac{2}{5}\\)) công việc, ta có phương trình:',
        formula: '\\frac{3}{x} + \\frac{6}{y} = \\frac{2}{5}',
        result: 'Ta thu được phương trình thứ hai (2).'
      },
      {
        order: 4,
        title: 'Giải hệ phương trình bằng đặt ẩn phụ',
        explanation: 'Đặt \\(u = \\frac{1}{x}\\) và \\(v = \\frac{1}{y}\\) (với \\(u, v > 0\\)). Hệ phương trình trở thành:',
        formula: '\\begin{cases} u + v = \\frac{1}{12} \\\\ 3u + 6v = \\frac{2}{5} \\end{cases} \\Rightarrow \\begin{cases} 3u + 3v = \\frac{1}{4} \\\\ 3u + 6v = \\frac{2}{5} \\end{cases}',
        result: 'Trừ từng vế hai phương trình ta được: \\(3v = \\frac{2}{5} - \\frac{1}{4} = \\frac{3}{20} \\Rightarrow v = \\frac{1}{20}\\).'
      },
      {
        order: 5,
        title: 'Tính toán kết quả và đối chiếu',
        explanation: 'Từ \\(v = \\frac{1}{20}\\) suy ra \\(u = \\frac{1}{12} - \\frac{1}{20} = \\frac{1}{30}\\).\nThay lại ẩn ban đầu:',
        formula: '\\frac{1}{x} = \\frac{1}{30} \\Rightarrow x = 30; \\quad \\frac{1}{y} = \\frac{1}{20} \\Rightarrow y = 20',
        result: 'Cả hai nghiệm đều thỏa mãn điều kiện lớn hơn 12.'
      }
    ],
    finalAnswer: 'Tổ I làm một mình xong trong 30 giờ, Tổ II trong 20 giờ.',
    commonMistakes: [
      'Không dùng phương pháp đặt ẩn phụ mà quy đồng trực tiếp hệ phương trình hai ẩn ở mẫu gây phức tạp hóa bài toán.',
      'Cộng trực tiếp thời gian \\(3 + 6 = 9\\) giờ là hoàn toàn sai bản chất.'
    ],
    reviewSuggestions: [
      'Ghi nhớ phương pháp đặt ẩn phụ \\(u = 1/x\\), \\(v = 1/y\\) để giải quyết các hệ phương trình chứa ẩn dưới mẫu.',
      'Ôn lại cách đổi từ phần trăm sang phân số tối giản.'
    ]
  },
  {
    id: 'math-s22',
    questionId: 'math-q22',
    recognition: 'Đây là bất phương trình bậc nhất một ẩn cơ bản. Ta dùng quy tắc chuyển vế đổi dấu và chia cả hai vế cho hệ số dương.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chuyển vế đổi dấu',
        explanation: 'Ta chuyển hạng tử chứa biến \\(x\\) sang vế trái và đổi dấu:',
        formula: '4x \\ge x + 3 \\Rightarrow 4x - x \\ge 3',
        result: 'Được bất phương trình: \\(3x \\ge 3\\).'
      },
      {
        order: 2,
        title: 'Chia cả hai vế cho hệ số x',
        explanation: 'Chia cả hai vế cho \\(3\\) (vì \\(3 > 0\\) nên giữ nguyên chiều bất phương trình):',
        formula: 'x \\ge \\frac{3}{3} \\Rightarrow x \\ge 1',
        result: 'Tập nghiệm là \\(x \\ge 1\\).'
      }
    ],
    finalAnswer: 'x \\ge 1',
    commonMistakes: [
      'Chuyển vế nhưng quên đổi dấu (ví dụ chuyển x sang thành 4x + x là sai).'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc chuyển vế: khi chuyển một số hạng từ vế này sang vế kia phải đổi dấu số hạng đó.'
    ]
  },
  {
    id: 'math-s23',
    questionId: 'math-q23',
    recognition: 'Bất phương trình bậc nhất một ẩn cơ bản. Ta chuyển vế thu gọn và chia cả hai vế cho hệ số dương.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chuyển vế đổi dấu',
        explanation: 'Chuyển hạng tử chứa \\(x\\) sang vế trái và các số tự do sang vế phải:',
        formula: '5x - 2x > -7 - 2',
        result: 'Được bất phương trình: \\(3x > -9\\).'
      },
      {
        order: 2,
        title: 'Chia cả hai vế cho 3',
        explanation: 'Chia cả hai vế cho \\(3\\) (vì \\(3 > 0\\) nên giữ nguyên chiều):',
        formula: 'x > \\frac{-9}{3} \\Rightarrow x > -3',
        result: 'Tập nghiệm là \\(x > -3\\).'
      }
    ],
    finalAnswer: 'x > -3',
    commonMistakes: [
      'Nhầm lẫn dấu khi cộng trừ số âm ở vế phải (-7 - 2 = -9).'
    ],
    reviewSuggestions: [
      'Luyện tập cộng trừ các số nguyên âm.'
    ]
  },
  {
    id: 'math-s24',
    questionId: 'math-q24',
    recognition: 'Bất phương trình bậc nhất có hệ số x âm. Khi chia hai vế cho số âm, cần đặc biệt lưu ý đổi chiều bất phương trình.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chuyển vế hạng tử tự do',
        explanation: 'Chuyển số 6 sang vế phải và đổi dấu:',
        formula: '-3x + 6 < 0 \\Rightarrow -3x < -6',
        result: 'Được bất phương trình: \\(-3x < -6\\).'
      },
      {
        order: 2,
        title: 'Chia cả hai vế cho -3 và đổi chiều',
        explanation: 'Chia cả hai vế cho \\(-3\\). Vì \\(-3 < 0\\) nên ta phải đổi chiều dấu \\( < \\) thành \\( > \\):',
        formula: 'x > \\frac{-6}{-3} \\Rightarrow x > 2',
        result: 'Tập nghiệm là \\(x > 2\\).'
      }
    ],
    finalAnswer: 'x > 2',
    commonMistakes: [
      'Quên không đổi chiều bất phương trình khi chia cho số âm -3 (dẫn tới kết quả sai x < 2).'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc: khi nhân hoặc chia cả hai vế của bất phương trình với một số âm, ta phải đổi chiều bất phương trình.'
    ]
  },
  {
    id: 'math-s25',
    questionId: 'math-q25',
    recognition: 'Bất phương trình có hệ số x âm. Ta chuyển vế và đổi chiều khi chia số âm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Chuyển vế số tự do',
        explanation: 'Chuyển số 5 sang vế phải:',
        formula: '-2x < 1 - 5 \\Rightarrow -2x < -4',
        result: 'Bất phương trình thu gọn là \\(-2x < -4\\).'
      },
      {
        order: 2,
        title: 'Chia cho -2 và đổi chiều',
        explanation: 'Chia hai vế cho \\(-2\\) và đổi chiều dấu từ \\( < \\) thành \\( > \\):',
        formula: 'x > \\frac{-4}{-2} \\Rightarrow x > 2',
        result: 'Tập nghiệm là \\(x > 2\\).'
      }
    ],
    finalAnswer: 'x > 2',
    commonMistakes: [
      'Quên đổi chiều dấu bất phương trình khi chia cho số âm -2.'
    ],
    reviewSuggestions: [
      'Thực hành quy tắc đổi chiều khi nhân/chia số âm.'
    ]
  },
  {
    id: 'math-s26',
    questionId: 'math-q26',
    recognition: 'Bất phương trình có chứa ngoặc đơn. Ta thực hiện khai triển dấu ngoặc trước rồi thu gọn đưa về bất phương trình bậc nhất.',
    detailedSteps: [
      {
        order: 1,
        title: 'Khai triển ngoặc',
        explanation: 'Nhân phân phối để phá ngoặc ở vế trái:',
        formula: '2(x - 3) \\le x + 4 \\Rightarrow 2x - 6 \\le x + 4',
        result: 'Bất phương trình sau phá ngoặc là \\(2x - 6 \\le x + 4\\).'
      },
      {
        order: 2,
        title: 'Chuyển vế và thu gọn',
        explanation: 'Chuyển các hạng tử chứa x sang vế trái, hằng số sang vế phải:',
        formula: '2x - x \\le 4 + 6',
        result: 'Tập nghiệm thu được là \\(x \\le 10\\).'
      }
    ],
    finalAnswer: 'x \\le 10',
    commonMistakes: [
      'Phá ngoặc bị sai dấu (ví dụ nhân 2 với -3 thành +6 hoặc giữ nguyên -3).'
    ],
    reviewSuggestions: [
      'Ôn tập quy tắc nhân phân phối đơn thức với đa thức.'
    ]
  },
  {
    id: 'math-s27',
    questionId: 'math-q27',
    recognition: 'Bất phương trình có chứa ngoặc. Thực hiện phá ngoặc rồi thu gọn chuyển vế.',
    detailedSteps: [
      {
        order: 1,
        title: 'Khai triển ngoặc',
        explanation: 'Nhân phân phối phá ngoặc:',
        formula: '3x - 6 > x + 4',
        result: 'Được bất phương trình: \\(3x - 6 > x + 4\\).'
      },
      {
        order: 2,
        title: 'Chuyển vế và thu gọn',
        explanation: 'Chuyển vế đổi dấu các hạng tử:',
        formula: '3x - x > 4 + 6 \\Rightarrow 2x > 10 \\Rightarrow x > 5',
        result: 'Tập nghiệm là \\(x > 5\\).'
      }
    ],
    finalAnswer: 'x > 5',
    commonMistakes: [
      'Nhầm dấu khi chuyển vế hằng số (-6 chuyển vế thành -6 thay vì +6).'
    ],
    reviewSuggestions: [
      'Luyện tập cẩn thận quy tắc chuyển vế đổi dấu.'
    ]
  },
  {
    id: 'math-s28',
    questionId: 'math-q28',
    recognition: 'Bất phương trình có phân số với mẫu số là hằng số dương. Ta tìm mẫu số chung, quy đồng rồi khử mẫu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Quy đồng mẫu thức hai vế',
        explanation: 'Mẫu thức chung là \\(6\\) (vì \\(6\\) chia hết cho 2 và 3). Quy đồng hai vế:',
        formula: '\\frac{3(x - 1)}{6} > \\frac{2(x + 3)}{6}',
        result: 'Ta có hai vế có cùng mẫu thức dương là 6.'
      },
      {
        order: 2,
        title: 'Khử mẫu và khai triển',
        explanation: 'Nhân cả hai vế với 6 (vì 6 > 0 nên giữ nguyên chiều) để khử mẫu, sau đó khai triển:',
        formula: '3(x - 1) > 2(x + 3) \\Rightarrow 3x - 3 > 2x + 6',
        result: 'Được bất phương trình: \\(3x - 3 > 2x + 6\\).'
      },
      {
        order: 3,
        title: 'Chuyển vế thu gọn',
        explanation: 'Chuyển các hạng tử chứa x sang vế trái, hằng số sang vế phải:',
        formula: '3x - 2x > 6 + 3 \\Rightarrow x > 9',
        result: 'Tập nghiệm của bất phương trình là \\(x > 9\\).'
      }
    ],
    finalAnswer: 'x > 9',
    commonMistakes: [
      'Khi nhân khử mẫu, quên không nhân phân phối toàn bộ tử số (ví dụ viết nhầm thành 3x - 1 > 2x + 3).'
    ],
    reviewSuggestions: [
      'Chú ý bọc tử số trong dấu ngoặc đơn khi quy đồng khử mẫu để tránh nhân thiếu hạng tử.'
    ]
  },
  {
    id: 'math-s29',
    questionId: 'math-q29',
    recognition: 'Bất phương trình có phân số với mẫu số là hằng số dương. Ta tìm mẫu số chung là 6, quy đồng rồi khử mẫu.',
    detailedSteps: [
      {
        order: 1,
        title: 'Quy đồng mẫu thức',
        explanation: 'Quy đồng hai vế với mẫu chung là 6:',
        formula: '\\frac{3(x + 1)}{6} \\le \\frac{2(x + 5)}{6}',
        result: 'Hai vế quy đồng mẫu số chung là 6.'
      },
      {
        order: 2,
        title: 'Khử mẫu và khai triển',
        explanation: 'Nhân 6 ở cả hai vế để khử mẫu, sau đó phá ngoặc:',
        formula: '3(x + 1) \\le 2(x + 5) \\Rightarrow 3x + 3 \\le 2x + 10',
        result: 'Được bất phương trình: \\(3x + 3 \\le 2x + 10\\).'
      },
      {
        order: 3,
        title: 'Chuyển vế thu gọn',
        explanation: 'Chuyển vế thu gọn ta được:',
        formula: '3x - 2x \\le 10 - 3 \\Rightarrow x \\le 7',
        result: 'Tập nghiệm là \\(x \\le 7\\).'
      }
    ],
    finalAnswer: 'x \\le 7',
    commonMistakes: [
      'Quên nhân hệ số vào hằng số trong tử số khi quy đồng.'
    ],
    reviewSuggestions: [
      'Rèn luyện kỹ năng quy đồng mẫu thức đa thức.'
    ]
  },
  {
    id: 'math-s30',
    questionId: 'math-q30',
    recognition: 'Dạng toán tìm giá trị lớn nhất (GTLN) của biểu thức phân thức sau khi rút gọn. Ta xuất phát từ điều kiện xác định của biến để đánh giá mẫu thức.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá mẫu thức',
        explanation: 'Ta có điều kiện xác định là \\(x \\ge 0\\). Do đó:',
        formula: 'x \\ge 0 \\Rightarrow \\sqrt{x} \\ge 0 \\Rightarrow \\sqrt{x} + 1 \\ge 1',
        result: 'Mẫu thức luôn lớn hơn hoặc bằng 1.'
      },
      {
        order: 2,
        title: 'Đánh giá biểu thức P',
        explanation: 'Vì tử số \\(2 > 0\\) và mẫu số \\(\\sqrt{x} + 1 \\ge 1\\), khi nghịch đảo mẫu số và nhân với tử số, chiều của bất đẳng thức sẽ đổi:',
        formula: '\\sqrt{x} + 1 \\ge 1 \\Rightarrow \\frac{1}{\\sqrt{x} + 1} \\le 1 \\Rightarrow P = \\frac{2}{\\sqrt{x} + 1} \\le 2',
        result: 'Biểu thức P luôn nhỏ hơn hoặc bằng 2.'
      },
      {
        order: 3,
        title: 'Tìm điều kiện xảy ra dấu bằng',
        explanation: 'Dấu bằng xảy ra khi và chỉ khi mẫu thức đạt giá trị nhỏ nhất bằng 1:',
        formula: '\\sqrt{x} + 1 = 1 \\Leftrightarrow \\sqrt{x} = 0 \\Leftrightarrow x = 0 \\quad (\\text{thỏa mãn ĐKXĐ})',
        result: 'Dấu bằng đạt được tại \\(x = 0\\).'
      },
      {
        order: 4,
        title: 'Kết luận',
        explanation: 'Từ các bước đánh giá trên, ta kết luận:',
        formula: '\\text{GTLN của } P \\text{ là } 2 \\text{ khi } x = 0.',
        result: 'Giá trị lớn nhất của P là 2.'
      }
    ],
    finalAnswer: 'GTLN của P là 2 khi x = 0.',
    commonMistakes: [
      'Tìm được GTLN là 2 nhưng không chỉ ra dấu bằng xảy ra tại x = 0.',
      'Đánh giá sai chiều của phân thức khi mẫu lớn hơn hoặc bằng 1.'
    ],
    reviewSuggestions: [
      'Ôn tập các bất đẳng thức cơ bản và tính chất của phân số (mẫu càng lớn thì phân số càng nhỏ với tử số dương).'
    ]
  },
  {
    id: 'math-s31',
    questionId: 'math-q31',
    recognition: 'Dạng toán tìm giá trị nhỏ nhất (GTNN) của biểu thức có dạng hiệu. Ta đánh giá phần phân thức rồi lập hiệu để tìm cực trị.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá phân thức',
        explanation: 'Với điều kiện \\(x \\ge 0\\), ta đánh giá mẫu thức và phân thức trước:',
        formula: 'x \\ge 0 \\Rightarrow \\sqrt{x} + 1 \\ge 1 \\Rightarrow \\frac{2}{\\sqrt{x} + 1} \\le 2',
        result: 'Lượng phân thức bị trừ luôn nhỏ hơn hoặc bằng 2.'
      },
      {
        order: 2,
        title: 'Đánh giá biểu thức P',
        explanation: 'Vì lượng phân thức nhỏ hơn hoặc bằng 2, nên khi lấy 5 trừ đi lượng đó, giá trị nhận được sẽ lớn hơn hoặc bằng 5 - 2:',
        formula: 'P = 5 - \\frac{2}{\\sqrt{x} + 1} \\ge 5 - 2 = 3',
        result: 'Biểu thức P luôn lớn hơn hoặc bằng 3.'
      },
      {
        order: 3,
        title: 'Tìm điều kiện xảy ra dấu bằng',
        explanation: 'Dấu bằng xảy ra khi và chỉ khi phân thức đạt giá trị lớn nhất bằng 2:',
        formula: '\\frac{2}{\\sqrt{x} + 1} = 2 \\Leftrightarrow \\sqrt{x} + 1 = 1 \\Leftrightarrow x = 0 \\quad (\\text{thỏa mãn})',
        result: 'Dấu bằng đạt được tại \\(x = 0\\).'
      },
      {
        order: 4,
        title: 'Kết luận',
        explanation: 'Từ kết quả đánh giá trên, ta kết luận:',
        formula: '\\text{GTNN của } P \\text{ là } 3 \\text{ khi } x = 0.',
        result: 'Giá trị nhỏ nhất của P là 3.'
      }
    ],
    finalAnswer: 'GTNN của P là 3 khi x = 0.',
    commonMistakes: [
      'Nhầm lẫn chiều bất đẳng thức khi thực hiện phép trừ (nghĩ rằng phân thức nhỏ hơn hoặc bằng 2 thì hiệu 5 trừ phân thức cũng nhỏ hơn hoặc bằng 3 là sai).',
      'Quên chỉ ra điều kiện dấu bằng xảy ra tại x = 0.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: \\( A \\le B \\Rightarrow C - A \\ge C - B \\) (khi lấy một số trừ đi số nhỏ hơn thì hiệu sẽ lớn hơn).'
    ]
  },
  {
    id: 'math-s32',
    questionId: 'math-q32',
    recognition: 'Đề bài yêu cầu tìm tham số để phương trình bậc hai có hai nghiệm phân biệt. Ta tính Delta và đặt điều kiện Delta > 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hệ số và tính Delta',
        explanation: 'Phương trình \\(x^2 - 2x + m = 0\\) có hệ số \\(a = 1, b = -2, c = m\\). Ta tính biệt thức \\(\\Delta\\):',
        formula: '\\Delta = b^2 - 4ac = (-2)^2 - 4 \\cdot 1 \\cdot m = 4 - 4m',
        result: 'Biệt thức thu gọn là \\(\\Delta = 4 - 4m\\).'
      },
      {
        order: 2,
        title: 'Biện luận điều kiện nghiệm phân biệt',
        explanation: 'Phương trình có hai nghiệm phân biệt khi và chỉ khi \\(\\Delta > 0\\):',
        formula: '4 - 4m > 0 \\Leftrightarrow 4m < 4 \\Leftrightarrow m < 1',
        result: 'Kết quả tìm được là \\(m < 1\\).'
      }
    ],
    finalAnswer: 'm < 1',
    commonMistakes: [
      'Nhầm lẫn chiều bất phương trình khi chia cho số âm -4 (chia -4m > -4 phải đổi chiều thành m < 1).'
    ],
    reviewSuggestions: [
      'Ghi nhớ: phương trình bậc hai có hai nghiệm phân biệt khi và chỉ khi \\(\\Delta > 0\\).'
    ]
  },
  {
    id: 'math-s33',
    questionId: 'math-q33',
    recognition: 'Đề bài yêu cầu tìm tham số để phương trình bậc hai có nghiệm kép. Ta dùng Delta phẩy để rút gọn biểu thức và đặt Delta phẩy bằng 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính biệt thức Delta phẩy',
        explanation: 'Phương trình \\(x^2 - 2(m + 1)x + m^2 = 0\\) có hệ số \\(a = 1, b\' = -(m + 1), c = m^2\\):',
        formula: '\\Delta\' = (b\')^2 - ac = [-(m + 1)]^2 - 1 \\cdot m^2 = m^2 + 2m + 1 - m^2 = 2m + 1',
        result: 'Biệt thức Delta phẩy là \\(\\Delta\' = 2m + 1\\).'
      },
      {
        order: 2,
        title: 'Đặt điều kiện để có nghiệm kép',
        explanation: 'Phương trình có nghiệm kép khi và chỉ khi \\(\\Delta\' = 0\\):',
        formula: '2m + 1 = 0 \\Leftrightarrow 2m = -1 \\Leftrightarrow m = -\\frac{1}{2}',
        result: 'Kết quả là \\(m = -\\frac{1}{2}\\).'
      }
    ],
    finalAnswer: 'm = -1/2',
    commonMistakes: [
      'Khai triển hằng đẳng thức sai, quên không nhân đôi hệ số giữa \\((m+1)^2 = m^2 + 2m + 1\\).'
    ],
    reviewSuggestions: [
      'Ôn lại công thức tính Delta và Delta phẩy cùng hằng đẳng thức đáng nhớ.'
    ]
  },
  {
    id: 'math-s34',
    questionId: 'math-q34',
    recognition: 'Đề bài yêu cầu tìm tham số để phương trình bậc hai vô nghiệm. Ta tính Delta và đặt điều kiện Delta < 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính Delta phẩy',
        explanation: 'Phương trình \\(x^2 - 4x + m = 0\\) có hệ số \\(a = 1, b\' = -2, c = m\\):',
        formula: '\\Delta\' = (b\')^2 - ac = (-2)^2 - 1 \\cdot m = 4 - m',
        result: 'Biệt thức Delta phẩy là \\(\\Delta\' = 4 - m\\).'
      },
      {
        order: 2,
        title: 'Đặt điều kiện phương trình vô nghiệm',
        explanation: 'Phương trình vô nghiệm khi và chỉ khi biệt thức âm:',
        formula: '\\Delta\' < 0 \\Leftrightarrow 4 - m < 0 \\Leftrightarrow m > 4',
        result: 'Kết quả tìm được là \\(m > 4\\).'
      }
    ],
    finalAnswer: 'm > 4',
    commonMistakes: [
      'Chuyển vế nhưng quên đổi dấu hoặc sai dấu của bất phương trình.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: phương trình bậc hai vô nghiệm khi và chỉ khi \\(\\Delta < 0\\).'
    ]
  },
  {
    id: 'math-s35',
    questionId: 'math-q35',
    recognition: 'Bài toán yêu cầu tính giá trị biểu thức nghiệm đối xứng của phương trình bậc hai cụ thể. Ta áp dụng hệ thức Vi-ét để tính tổng, tích rồi thế vào biểu thức biến đổi.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng hệ thức Vi-ét',
        explanation: 'Với phương trình \\(x^2 - 6x + 5 = 0\\), do \\(a = 1 \\neq 0\\) và \\(\\Delta\' = (-3)^2 - 1 \\cdot 5 = 4 > 0\\), phương trình luôn có 2 nghiệm. Theo hệ thức Vi-ét:',
        formula: 'x_1 + x_2 = -\\frac{b}{a} = 6; \\quad x_1x_2 = \\frac{c}{a} = 5',
        result: 'Tổng nghiệm bằng 6, tích nghiệm bằng 5.'
      },
      {
        order: 2,
        title: 'Biến đổi biểu thức và thay số',
        explanation: 'Biến đổi biểu thức đối xứng \\(A = x_1^2 + x_2^2\\) theo tổng và tích nghiệm:',
        formula: 'A = (x_1 + x_2)^2 - 2x_1x_2 = 6^2 - 2 \\cdot 5 = 36 - 10 = 26',
        result: 'Giá trị biểu thức là \\(A = 26\\).'
      }
    ],
    finalAnswer: 'A = 26',
    commonMistakes: [
      'Biến đổi nhầm lẫn công thức đối xứng thành \\(x_1^2+x_2^2 = (x_1+x_2)^2 + 2x_1x_2\\) (sai dấu).'
    ],
    reviewSuggestions: [
      'Ghi nhớ hằng đẳng thức phụ: \\(x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2\\).'
    ]
  },
  {
    id: 'math-s36',
    questionId: 'math-q36',
    recognition: 'Bài toán yêu cầu tính giá trị biểu thức phân số đối xứng của hai nghiệm. Quy đồng mẫu thức biểu thức cần tính rồi thế tổng và tích nghiệm theo Vi-ét.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng hệ thức Vi-ét',
        explanation: 'Phương trình \\(2x^2 - 5x + 1 = 0\\) có \\(\\Delta = (-5)^2 - 4 \\cdot 2 \\cdot 1 = 17 > 0\\) nên luôn có 2 nghiệm. Theo Vi-ét:',
        formula: 'x_1 + x_2 = \\frac{5}{2}; \\quad x_1x_2 = \\frac{1}{2}',
        result: 'Tổng nghiệm là 5/2, tích nghiệm là 1/2.'
      },
      {
        order: 2,
        title: 'Quy đồng biểu thức B và thay số',
        explanation: 'Quy đồng biểu thức B về mẫu thức chung là \\(x_1x_2\\):',
        formula: 'B = \\frac{x_1 + x_2}{x_1x_2} = \\frac{5/2}{1/2} = 5',
        result: 'Giá trị biểu thức là \\(B = 5\\).'
      }
    ],
    finalAnswer: 'B = 5',
    commonMistakes: [
      'Xác định sai dấu của tổng nghiệm (nhầm lẫn công thức Vi-ét thành \\(x_1+x_2 = b/a\\)).'
    ],
    reviewSuggestions: [
      'Ghi nhớ: công thức tổng nghiệm theo Vi-ét có dấu trừ đằng trước: \\(S = -b/a\\).'
    ]
  },
  {
    id: 'math-s37',
    questionId: 'math-q37',
    recognition: 'Bài toán yêu cầu tính hiệu bình phương hai nghiệm. Ta biến đổi biểu thức về dạng tổng và tích nghiệm theo Vi-ét.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng hệ thức Vi-ét',
        explanation: 'Phương trình \\(x^2 - 3x - 2 = 0\\) có 2 nghiệm vì \\(\\Delta = (-3)^2 - 4 \\cdot 1 \\cdot (-2) = 17 > 0\\). Theo Vi-ét:',
        formula: 'x_1 + x_2 = 3; \\quad x_1x_2 = -2',
        result: 'Tổng nghiệm là 3, tích nghiệm là -2.'
      },
      {
        order: 2,
        title: 'Biến đổi biểu thức C và thay số',
        explanation: 'Khai triển hiệu bình phương \\(C = (x_1 - x_2)^2\\) để làm xuất hiện tổng và tích:',
        formula: 'C = x_1^2 - 2x_1x_2 + x_2^2 = (x_1 + x_2)^2 - 4x_1x_2 = 3^2 - 4 \\cdot (-2) = 9 + 8 = 17',
        result: 'Giá trị biểu thức là \\(C = 17\\).'
      }
    ],
    finalAnswer: 'C = 17',
    commonMistakes: [
      'Nhầm lẫn giữa hiệu bình phương \\((x_1-x_2)^2\\) với tổng bình phương \\(x_1^2+x_2^2\\).'
    ],
    reviewSuggestions: [
      'Ghi nhớ hệ thức biến đổi: \\((x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2\\).'
    ]
  },
  {
    id: 'math-s38',
    questionId: 'math-q38',
    recognition: 'Đề bài yêu cầu tìm m để tổng nghiệm thỏa mãn một hằng số. Ta dùng hệ thức Vi-ét để biểu diễn tổng nghiệm theo tham số m, sau đó giải phương trình tìm m và kiểm tra điều kiện tồn tại nghiệm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt điều kiện có nghiệm',
        explanation: 'Phương trình \\(x^2 - 2mx + m - 1 = 0\\) có nghiệm khi và chỉ khi \\(\\Delta\' \\ge 0\\):',
        formula: '\\Delta\' = (-m)^2 - 1 \\cdot (m - 1) = m^2 - m + 1 = \\left(m - \\frac{1}{2}\\right)^2 + \\frac{3}{4} > 0 \\quad \\forall m',
        result: 'Do Delta phẩy luôn dương, phương trình luôn có hai nghiệm phân biệt với mọi m.'
      },
      {
        order: 2,
        title: 'Áp dụng Vi-ét và giải tìm m',
        explanation: 'Theo hệ thức Vi-ét, tổng hai nghiệm là \\(x_1 + x_2 = -\\frac{b}{a} = 2m\\). Theo đề bài:',
        formula: 'x_1 + x_2 = 6 \\Rightarrow 2m = 6 \\Rightarrow m = 3',
        result: 'Giá trị tham số tìm được là \\(m = 3\\) (thỏa mãn điều kiện có nghiệm).'
      }
    ],
    finalAnswer: 'm = 3',
    commonMistakes: [
      'Quên không kiểm tra biệt thức Delta, đối với một số bài toán tham số, nếu Delta âm với giá trị m tìm được thì giá trị đó sẽ bị loại.'
    ],
    reviewSuggestions: [
      'Luôn duy trì thói quen xét hoặc kiểm tra lại điều kiện có nghiệm \\(\\Delta \\ge 0\\) khi dùng hệ thức Vi-ét.'
    ]
  },
  {
    id: 'math-s39',
    questionId: 'math-q39',
    recognition: 'Đề bài yêu cầu tìm tham số m để phương trình bậc hai có hai nghiệm dương phân biệt. Ta đặt đồng thời 3 điều kiện: Delta phẩy dương, Tổng nghiệm dương, và Tích nghiệm dương.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính biệt thức và các hệ số Vi-ét',
        explanation: 'Phương trình \\(x^2 - 2(m + 1)x + m = 0\\) có hệ số \\(a = 1, b = -2(m+1), c = m\\):',
        formula: '\\Delta\' = (m + 1)^2 - m = m^2 + 2m + 1 - m = m^2 + m + 1',
        result: 'Biệt thức \\(\\Delta\' = m^2 + m + 1 = (m + 1/2)^2 + 3/4 > 0\\) với mọi m.'
      },
      {
        order: 2,
        title: 'Lập hệ điều kiện có hai nghiệm dương phân biệt',
        explanation: 'Phương trình có hai nghiệm dương phân biệt khi và chỉ khi:',
        formula: '\\begin{cases} \\Delta\' > 0 \\\\ S = x_1 + x_2 > 0 \\\\ P = x_1x_2 > 0 \\end{cases} \\Leftrightarrow \\begin{cases} m^2+m+1 > 0 \\text{ (luôn đúng)} \\\\ 2(m + 1) > 0 \\\\ m > 0 \\end{cases}',
        result: 'Hệ điều kiện thu gọn là \\(m > -1\\) và \\(m > 0\\).'
      },
      {
        order: 3,
        title: 'Giao nghiệm kết luận',
        explanation: 'Kết hợp hai điều kiện trên ta thu được kết quả cuối cùng:',
        formula: 'm > 0',
        result: 'Giá trị m cần tìm là \\(m > 0\\).'
      }
    ],
    finalAnswer: 'm > 0',
    commonMistakes: [
      'Quên không xét điều kiện biệt thức Delta, hoặc kết hợp sai các điều kiện dấu nghiệm.'
    ],
    reviewSuggestions: [
      'Ghi nhớ: hai nghiệm phân biệt cùng dương khi \\(\\Delta > 0\\), \\(S > 0\\) và \\(P > 0\\).'
    ]
  },
  {
    id: 'math-s40',
    questionId: 'math-q40',
    recognition: 'Đề bài yêu cầu tìm m để phương trình bậc hai có hai nghiệm trái dấu. Điều kiện để phương trình bậc hai có hai nghiệm trái dấu là hệ số a và c trái dấu, tức là ac < 0.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập điều kiện hai nghiệm trái dấu',
        explanation: 'Phương trình \\(x^2 - 2(m - 1)x - m + 2 = 0\\) có hệ số \\(a = 1, c = -m + 2\\). Để phương trình có hai nghiệm trái dấu:',
        formula: 'a \\cdot c < 0 \\Leftrightarrow 1 \\cdot (-m + 2) < 0',
        result: 'Bất phương trình là \\(-m + 2 < 0\\).'
      },
      {
        order: 2,
        title: 'Giải bất phương trình tìm m',
        explanation: 'Giải bất phương trình trên ta được:',
        formula: '-m < -2 \\Leftrightarrow m > 2',
        result: 'Giá trị tìm được là \\(m > 2\\).'
      }
    ],
    finalAnswer: 'm > 2',
    commonMistakes: [
      'Đặt thêm điều kiện Delta phức tạp không cần thiết (khi ac < 0 thì phương trình luôn có 2 nghiệm phân biệt vì Delta = b² - 4ac luôn lớn hơn 0).',
      'Giải sai bất phương trình có hệ số âm.'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc nhanh: phương trình bậc hai có hai nghiệm trái dấu khi và chỉ khi \\(ac < 0\\).'
    ]
  }
];