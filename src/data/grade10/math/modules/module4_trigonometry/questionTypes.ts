import type { QuestionType } from '@/types';
import { g10MathModule4TheoryByQuestionTypeId } from './theory';

export const g10MathModule4QuestionTypes: QuestionType[] = [
  {
      id: 'math10-qt6',
      topicId: 'math10-t4',
      name: 'Hệ thức lượng và Giải tam giác trong thực tế',
      slug: 'he-thuc-luong-va-giai-tam-giac',
      description: 'Sử dụng các định lí Côsin, định lí Sin, công thức tính diện tích tam giác và giải tam giác để tìm các yếu tố trong tam giác hoặc đo đạc khoảng cách, chiều cao trong thực tế.',
      exampleQuestionId: 'math10-q44',
      theory: [
        '**1. Định lí Côsin**:\nTrong tam giác $ABC$ có các cạnh $a, b, c$ đối diện với các góc $A, B, C$:\n$$a^2 = b^2 + c^2 - 2bc \\cos A$$\n$$b^2 = a^2 + c^2 - 2ac \\cos B$$\n$$c^2 = a^2 + b^2 - 2ab \\cos C$$\n- **Hệ quả (Tính góc)**:\n$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}, \\quad \\cos B = \\frac{a^2 + c^2 - b^2}{2ac}, \\quad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$',
        '**2. Định lí Sin**:\n$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$\nTrong đó $R$ là bán kính đường tròn ngoại tiếp tam giác $ABC$.',
        '**3. Các công thức tính diện tích tam giác ($S$)**:\n- Công thức cơ bản: $S = \\frac{1}{2}ah_a = \\frac{1}{2}bh_b = \\frac{1}{2}ch_c$\n- Tích hai cạnh và sin góc xen giữa: $S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}bc \\sin A = \\frac{1}{2}ac \\sin B$\n- Theo bán kính đường tròn ngoại tiếp $R$: $S = \\frac{abc}{4R}$\n- Theo bán kính đường tròn nội tiếp $r$ và nửa chu vi $p = \\frac{a+b+c}{2}$: $S = pr$\n- Công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)}$',
        '**4. Giải tam giác và Ứng dụng thực tế**:\n- **Giải tam giác**: Tính các cạnh và các góc chưa biết của tam giác khi đã cho trước một số yếu tố.\n- **Ứng dụng thực tế**: Mô hình hóa các bài toán đo khoảng cách giữa hai địa điểm bị ngăn cách (ví dụ sông, núi), đo chiều cao của một tòa tháp hoặc ngọn núi mà không thể trèo lên đỉnh bằng các tam giác và góc đo được từ giác kế.'
      ],
      subTypes: [
        {
          name: 'Tính các yếu tố trong tam giác (cạnh, góc, diện tích, bán kính R, r)',
          example: 'Cho tam giác $ABC$ có $a = 7, b = 8, c = 5$. Tính diện tích tam giác $S$ và bán kính đường tròn nội tiếp $r$.',
          note: 'Tính nửa chu vi $p = 10$. Dùng công thức Heron $S = \\sqrt{10(10-7)(10-8)(10-5)} = 10\\sqrt{3}$. Tính $r = S/p = \\sqrt{3}$.'
        },
        {
          name: 'Giải tam giác khi biết 2 cạnh và 1 góc, hoặc 1 cạnh và 2 góc',
          example: 'Cho tam giác $ABC$ có $b = 10$, góc $A = 30^\\circ$, góc $C = 45^\\circ$. Tính cạnh $a$ và $c$.',
          note: 'Góc $B = 180^\\circ - 30^\\circ - 45^\\circ = 105^\\circ$. Dùng định lí Sin: $a = \\frac{b \\sin A}{\\sin B}$ và $c = \\frac{b \\sin C}{\\sin B}$.'
        },
        {
          name: 'Bài toán đo đạc thực tế ứng dụng hệ thức lượng',
          example: 'Đo chiều cao của một ngọn tháp bằng cách đo góc nâng tại hai điểm cách nhau 20m. Điểm thứ nhất nhìn đỉnh góc $30^\\circ$, điểm thứ hai góc $45^\\circ$.',
          note: 'Sử dụng hệ thức lượng trong tam giác vuông hoặc định lí Sin trong tam giác thường để lập phương trình tính chiều cao tháp.'
        }
      ],
      recognitionSigns: [
        'Đề bài cho các cạnh, các góc hoặc diện tích tam giác và yêu cầu tìm yếu tố còn lại.',
        'Bài toán đo đạc thực tế có hình vẽ minh họa tam giác với các số đo góc và khoảng cách giữa các điểm quan sát.'
      ],
      solvingSteps: [
        'Bước 1: Vẽ hình, ký hiệu các đỉnh, cạnh ($a, b, c$) và góc ($A, B, C$) tương ứng của tam giác.',
        'Bước 2: Phân tích các yếu tố đã biết và chọn định lí phù hợp:\n  - Biết 3 cạnh: Dùng định lí Côsin để tính các góc.\n  - Biết 2 cạnh và góc xen giữa: Dùng định lí Côsin tìm cạnh thứ ba, sau đó dùng định lí Sin tìm các góc còn lại.\n  - Biết 1 cạnh và 2 góc: Tìm góc thứ ba, sau đó dùng định lí Sin để tìm hai cạnh còn lại.',
        'Bước 3: Chọn công thức diện tích thích hợp (Heron nếu biết 3 cạnh, sin nếu biết 2 cạnh 1 góc...) để tính diện tích, từ đó tính bán kính $R, r$ hoặc chiều cao nếu đề bài yêu cầu.',
        'Bước 4: Đối với bài toán thực tế, vẽ sơ đồ tam giác hóa các đối tượng địa lý và thực hiện tính toán, ghi rõ đơn vị đo.'
      ],
      commonMistakes: [
        'Nhầm lẫn giữa các công thức tính diện tích (ví dụ nhầm $S = \\frac{abc}{4R}$ thành $\\frac{abc}{R}$ hoặc $S = pr$ thành $S = \\frac{p}{r}$).',
        'Tính sai giá trị lượng giác của các góc lớn hơn $90^\\circ$ (ví dụ $\\cos 120^\\circ = -0.5$).',
        'Quên chuyển máy tính sang chế độ độ (Degree) khi bấm các hàm $\\sin, \\cos$ dẫn đến sai lệch kết quả số đo góc.'
      ],
      difficulty: 'medium',
      examFrequency: 'high'
    },
  {
    "id": "math10-qt19",
    "topicId": "math10-t4",
    "name": "Giá trị lượng giác của góc từ 0° đến 180°",
    "slug": "gia-tri-luong-giac-goc-0-180",
    "description": "Tính và suy luận sin, cos, tan của góc; sử dụng góc bù, hệ thức cơ bản và dấu của góc nhọn–tù.",
    "recognitionSigns": [
      "Đề cho góc từ 0° đến 180° và hỏi sin, cos, tan hoặc dấu.",
      "Đề cho một giá trị lượng giác và yêu cầu tìm giá trị còn lại hay xác định góc."
    ],
    "solvingSteps": [
      "Xác định góc đặc biệt hoặc góc chuẩn liên quan.",
      "Xác định dấu theo vị trí góc trên nửa đường tròn.",
      "Áp dụng công thức góc bù hoặc hệ thức sin²+cos²=1.",
      "Kiểm tra miền góc để loại nghiệm sai dấu."
    ],
    "commonMistakes": [
      "Cho cos góc tù dương.",
      "Đổi dấu sin của hai góc bù.",
      "Chỉ lấy nghiệm góc nhọn khi phương trình sin có hai nghiệm."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m4-q025",
    "theory": [
      "$\\sin(180°-\\alpha)=\\sin\\alpha$, $\\cos(180°-\\alpha)=-\\cos\\alpha$, $\\tan(180°-\\alpha)=-\\tan\\alpha$.",
      "$\\sin^2\\alpha+\\cos^2\\alpha=1$ và $\\tan\\alpha=\\sin\\alpha/\\cos\\alpha$.",
      "Trong (0°,180°), sin dương; cos dương với góc nhọn và âm với góc tù."
    ]
  }
];

for (const questionType of g10MathModule4QuestionTypes) {
  questionType.theory =
    g10MathModule4TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
}
