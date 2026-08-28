import type { QuestionType } from '@/types';
import {
  g10MathModule3TheoryByQuestionTypeId,
  g10MathModule3TheoryCheckpointsByQuestionTypeId
} from './theory';
import { g10MathModule3PracticeBlueprints } from './practiceBlueprint';

export const g10MathModule3QuestionTypes: QuestionType[] = [
  {
      id: 'math10-qt4',
      topicId: 'math10-t3',
      name: 'Xác định Parabol và Giá trị lớn nhất, nhỏ nhất của hàm số bậc hai',
      slug: 'xac-dinh-parabol-cuc-tri',
      description: 'Tìm các hệ số a, b, c của parabol $y = ax^2 + bx + c$ dựa trên các yếu tố hình học cho trước (đỉnh, trục đối xứng, điểm đi qua) và ứng dụng tìm giá trị lớn nhất, nhỏ nhất trong bài toán thực tế.',
      exampleQuestionId: 'math10-q4',
      theory: [
        '**1. Hàm số bậc hai và Parabol**:\n- Hàm số bậc hai có dạng tổng quát $y = ax^2 + bx + c$ ($a \\neq 0$), đồ thị của nó là một đường cong gọi là **Parabol**.\n- Nếu $a > 0$: Parabol có bề lõm hướng lên (hình chữ U), hàm số đạt **giá trị nhỏ nhất** (GTNN) tại đỉnh.\n- Nếu $a < 0$: Parabol có bề lõm hướng xuống (hình chữ U ngược), hàm số đạt **giá trị lớn nhất** (GTLN) tại đỉnh.',
        '**2. Đỉnh và Trục đối xứng của Parabol**:\n- Tọa độ đỉnh $I$ của parabol $y = ax^2 + bx + c$ là:\n$$I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right) \\quad \\text{với } \\Delta = b^2 - 4ac$$\n- Trục đối xứng là đường thẳng đứng $x = -\\frac{b}{2a}$.\n- **Dạng đỉnh** (dạng chính tắc): $y = a(x - p)^2 + q$ với đỉnh $I(p; q)$.\n- Chuyển đổi: $p = -\\frac{b}{2a}$, $q = -\\frac{\\Delta}{4a}$.',
        '**3. Giá trị lớn nhất, nhỏ nhất của hàm số bậc hai**:\n- Nếu $a > 0$: $y_{\\min} = -\\frac{\\Delta}{4a}$ đạt tại $x = -\\frac{b}{2a}$. Hàm số không có GTLN.\n- Nếu $a < 0$: $y_{\\max} = -\\frac{\\Delta}{4a}$ đạt tại $x = -\\frac{b}{2a}$. Hàm số không có GTNN.\n- **Trên đoạn $[m; n]$**: So sánh giá trị tại đỉnh (nếu đỉnh nằm trong đoạn) và giá trị tại hai đầu mút $x = m$, $x = n$.',
        '**4. Xác định Parabol từ các điều kiện cho trước**:\n- **Biết đỉnh $I(p; q)$ và 1 điểm đi qua**: Dùng dạng đỉnh $y = a(x - p)^2 + q$, thay tọa độ điểm để tìm $a$.\n- **Biết 3 điểm đi qua**: Thay tọa độ 3 điểm vào $y = ax^2 + bx + c$ được hệ 3 phương trình 3 ẩn, giải tìm $a, b, c$.\n- **Biết trục đối xứng $x = p$ và 2 điểm đi qua**: Từ trục đối xứng suy ra $b = -2ap$, thay vào phương trình rồi dùng 2 điểm để lập hệ tìm $a, c$.'
      ],
      subTypes: [
        {
          name: 'Xác định phương trình Parabol từ điều kiện hình học',
          example: 'Viết phương trình parabol $y = ax^2 + bx + c$ biết parabol có đỉnh $I(2; -1)$ và đi qua điểm $A(0; 3).',
          note: 'Dùng dạng đỉnh: $y = a(x - 2)^2 - 1$. Thay $A(0; 3)$: $3 = a(0 - 2)^2 - 1 = 4a - 1 \\Rightarrow a = 1$. Vậy $y = (x - 2)^2 - 1 = x^2 - 4x + 3$.'
        },
        {
          name: 'Tìm GTLN/GTNN của hàm số bậc hai (thuần toán)',
          example: 'Tìm giá trị nhỏ nhất của hàm số $y = 2x^2 - 8x + 5$.',
          note: 'Ta có $a = 2 > 0$ nên hàm đạt GTNN tại đỉnh. Hoành độ đỉnh $x = -\\frac{b}{2a} = \\frac{8}{4} = 2$. GTNN $= y(2) = 2(4) - 8(2) + 5 = -3$.'
        },
        {
          name: 'Bài toán thực tế ứng dụng Parabol (cổng chào, quỹ đạo, diện tích)',
          example: 'Một quả bóng được đá lên theo quỹ đạo parabol $h(t) = -5t^2 + 20t + 1$ (m). Tìm chiều cao lớn nhất quả bóng đạt được.',
          note: 'Ta có $a = -5 < 0$ nên hàm đạt GTLN. Thời điểm đạt GTLN: $t = -\\frac{20}{2(-5)} = 2$ (giây). Chiều cao lớn nhất: $h(2) = -5(4) + 20(2) + 1 = 21$ (m).'
        }
      ],
      recognitionSigns: [
        'Đề bài yêu cầu lập phương trình parabol $y = ax^2 + bx + c$ từ các điều kiện hình học (đỉnh, trục đối xứng, giao với trục, đi qua điểm).',
        'Yêu cầu tìm chiều cao lớn nhất, diện tích lớn nhất, hoặc chi phí nhỏ nhất của một mô hình biến đổi theo hàm bậc hai (cổng parabol, quỹ đạo vật ném xiên, hàng rào bao quanh...).'
      ],
      solvingSteps: [
        'Bước 1: Xác định dạng phương trình phù hợp: dạng tổng quát $y = ax^2 + bx + c$ hoặc dạng đỉnh $y = a(x - p)^2 + q$.',
        'Bước 2: Thay các điều kiện cho trước vào phương trình để lập hệ phương trình tìm các hệ số.',
        'Bước 3: Giải hệ phương trình tuyến tính để tìm $a, b, c$ (hoặc $a, p, q$).',
        'Bước 4: Với bài toán cực trị, tính hoành độ đỉnh $x_I = -\\frac{b}{2a}$, thay vào hàm số để tìm GTLN/GTNN. Kiểm tra dấu $a$ để xác định đó là GTLN hay GTNN.',
        'Bước 5: Trả lời câu hỏi kèm đơn vị đo và kiểm tra tính thực tiễn của kết quả.'
      ],
      commonMistakes: [
        'Nhớ nhầm công thức hoành độ đỉnh: viết $x_I = \\frac{b}{2a}$ thay vì $x_I = -\\frac{b}{2a}$ (thiếu dấu trừ).',
        'Không giới hạn miền xác định thực tế của biến số (ví dụ: chiều dài, thời gian phải dương).',
        'Nhầm lẫn giữa GTLN ($a < 0$) và GTNN ($a > 0$) do không xét dấu hệ số $a$.'
      ],
      difficulty: 'medium',
      examFrequency: 'high'
    },
  {
    "id": "math10-qt18",
    "topicId": "math10-t3",
    "name": "Khái niệm, tập xác định và biểu diễn hàm số",
    "slug": "khai-niem-tap-xac-dinh-bieu-dien-ham-so",
    "description": "Tính giá trị, xác định miền xác định, đọc bảng–đồ thị và thiết lập mô hình hàm số cơ bản từ dữ liệu hoặc tình huống.",
    "recognitionSigns": [
      "Đề hỏi f(a), tập xác định, tập giá trị hoặc đọc thông tin từ bảng và đồ thị.",
      "Đề mô tả một đầu ra phụ thuộc duy nhất vào đầu vào và yêu cầu lập công thức."
    ],
    "solvingSteps": [
      "Xác định biến đầu vào, đầu ra và biểu diễn đang được sử dụng.",
      "Đặt các điều kiện để công thức có nghĩa hoặc đọc đúng trục/bảng.",
      "Tính giá trị, miền hoặc tham số theo yêu cầu.",
      "Kiểm tra kết quả với tập nền và ý nghĩa thực tế."
    ],
    "commonMistakes": [
      "Nhầm tập xác định với tập giá trị.",
      "Quên giao đồng thời điều kiện căn và mẫu.",
      "Đọc tung độ khi đề hỏi hoành độ hoặc ngược lại."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m3-q025",
    "theory": [
      "Hàm số gán mỗi phần tử của tập xác định cho đúng một giá trị đầu ra.",
      "Tập xác định gồm mọi đầu vào làm công thức có nghĩa; đồ thị biểu diễn các điểm (x;f(x)).",
      "Miền xác định đọc theo hình chiếu lên Ox, tập giá trị đọc theo hình chiếu lên Oy."
    ]
  },
  {
    id: 'math10-qt20',
    topicId: 'math10-t3',
    name: 'Dấu của tam thức bậc hai',
    slug: 'dau-cua-tam-thuc-bac-hai',
    description: 'Xét dấu tam thức từ hệ số, biệt thức và nghiệm; đọc bảng dấu; xử lí điều kiện tham số để biểu thức luôn dương, âm, không âm hoặc không dương.',
    exampleQuestionId: 'math10-m3-q061',
    recognitionSigns: [
      'Đề hỏi biểu thức bậc hai dương, âm trên khoảng nào hoặc yêu cầu lập/đọc bảng xét dấu.',
      'Đề chứa tham số và các cụm “với mọi x”, “luôn dương”, “không âm”, “không dương”.'
    ],
    solvingSteps: [
      'Kiểm tra hệ số bậc hai có khác 0; nếu phụ thuộc tham số phải tách trường hợp suy biến.',
      'Tính biệt thức và tìm, sắp thứ tự các nghiệm thực nếu có.',
      'Dùng quy tắc cùng dấu hệ số a ở ngoài và trái dấu a ở giữa hai nghiệm.',
      'Chọn đúng điểm hoặc khoảng theo yêu cầu; phân biệt dấu nghiêm ngặt với dấu có bằng.'
    ],
    commonMistakes: [
      'Đảo dấu trong và ngoài hai nghiệm.',
      'Cho rằng nghiệm kép làm tam thức đổi dấu.',
      'Dùng điều kiện Δ≤0 cho yêu cầu luôn dương nghiêm ngặt.',
      'Quên xét trường hợp hệ số bậc hai bằng 0 trong bài tham số.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt21',
    topicId: 'math10-t3',
    name: 'Bất phương trình bậc hai một ẩn',
    slug: 'bat-phuong-trinh-bac-hai-mot-an',
    description: 'Giải bất phương trình bậc hai, tích và thương; xử lí dấu bằng, điều kiện xác định, tham số và mô hình thực tế.',
    exampleQuestionId: 'math10-m3-q097',
    recognitionSigns: [
      'Đề yêu cầu tìm tập nghiệm của bất phương trình chứa tam thức bậc hai.',
      'Biểu thức có thể phân tích thành tích/thương hoặc yêu cầu tham số để tập nghiệm có tính chất cho trước.'
    ],
    solvingSteps: [
      'Đưa bất phương trình về một vế và xác định điều kiện nếu có mẫu.',
      'Phân tích nhân tử hoặc tìm nghiệm của các tam thức, sau đó sắp mọi mốc tới hạn.',
      'Lập bảng xét dấu chung và chọn các khoảng đúng dấu.',
      'Xử lí đầu mút, loại nghiệm mẫu và giao với miền thực tế hoặc điều kiện tham số.'
    ],
    commonMistakes: [
      'Chọn khoảng nghiệm mà không xét dấu hệ số đầu.',
      'Lấy điểm làm mẫu bằng 0 khi bất phương trình có dấu bằng.',
      'Mất điều kiện loại sau khi rút gọn nhân tử chung.',
      'Chia hai vế cho biểu thức chứa ẩn hoặc tham số chưa biết dấu.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt23',
    topicId: 'math10-t3',
    name: 'Phương trình quy về phương trình bậc hai',
    slug: 'phuong-trinh-quy-ve-phuong-trinh-bac-hai',
    description: 'Giải phương trình căn bằng căn và căn bằng biểu thức bậc nhất bằng cách bình phương, giải phương trình bậc hai nhận được rồi thử lại nghiệm.',
    exampleQuestionId: 'math10-m3x-q001',
    recognitionSigns: [
      'Hai vế là căn bậc hai của các tam thức hoặc một vế là căn thức, vế còn lại là biểu thức bậc nhất.',
      'Sau khi bình phương hai vế và thu gọn, phương trình nhận được có bậc không quá hai.'
    ],
    solvingSteps: [
      'Nhận dạng đúng dạng phương trình và ghi điều kiện cần, đặc biệt vế không chứa căn phải không âm.',
      'Bình phương hai vế rồi thu gọn về phương trình bậc hai hoặc phương trình bậc nhất.',
      'Giải phương trình nhận được để tìm các nghiệm ứng viên.',
      'Thay từng ứng viên vào phương trình ban đầu, loại nghiệm không thỏa và kết luận.'
    ],
    commonMistakes: [
      'Xem phép bình phương là biến đổi tương đương và nhận mọi nghiệm của phương trình sau bình phương.',
      'Quên điều kiện vế bậc nhất phải không âm trong phương trình căn bằng biểu thức.',
      'Chỉ kiểm tra biểu thức dưới căn mà không thử lại phương trình ban đầu.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  }
];

for (const questionType of g10MathModule3QuestionTypes) {
  questionType.theory =
    g10MathModule3TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
  questionType.theoryCheckpoints =
    g10MathModule3TheoryCheckpointsByQuestionTypeId[questionType.id] ??
    questionType.theoryCheckpoints;

  const practiceBlueprint = g10MathModule3PracticeBlueprints.find(
    blueprint => blueprint.questionTypeId === questionType.id
  );
  if (practiceBlueprint) {
    questionType.subTypes = practiceBlueprint.subTypes;
    questionType.practiceCoverage = practiceBlueprint.coverage;
  }
}
