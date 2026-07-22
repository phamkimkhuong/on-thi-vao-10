import type { QuestionType } from '@/types';

export const g10MathModule5QuestionTypes: QuestionType[] = [
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
    },
  {
      id: 'math10-qt7',
      topicId: 'math10-t5',
      name: 'Tích vô hướng của hai vectơ và ứng dụng',
      slug: 'tich-vo-huong-hai-vecto-va-ung-dung',
      description: 'Tính tích vô hướng của hai vectơ dựa trên độ dài và góc hoặc dựa trên tọa độ Oxy; ứng dụng tích vô hướng để tính độ dài đoạn thẳng, góc giữa hai vectơ và chứng minh tính vuông góc.',
      exampleQuestionId: 'math10-q54',
      theory: [
        '**1. Định nghĩa tích vô hướng**:\nCho hai vectơ $\\vec{u}$ và $\\vec{v}$ đều khác $\\vec{0}$. Tích vô hướng của $\\vec{u}$ và $\\vec{v}$ là một số, ký hiệu là $\\vec{u} \\cdot \\vec{v}$, được xác định bởi:\n$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$$\n- Bình phương vô hướng: $\\vec{u}^2 = |\\vec{u}|^2 \\Rightarrow |\\vec{u}| = \\sqrt{\\vec{u}^2}$.\n- Hệ quả (Tính góc giữa hai vectơ): $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ (với $\\vec{u}, \\vec{v} \\neq \\vec{0}$).',
        '**2. Biểu thức tọa độ trong mặt phẳng Oxy**:\nCho $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$:\n- Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$\n- Độ dài vectơ: $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2}$\n- Góc giữa hai vectơ: $\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}$\n- Điều kiện hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1x_2 + y_1y_2 = 0$.'
      ],
      subTypes: [
        {
          name: 'Tính tích vô hướng và góc dựa trên độ dài và góc cho trước',
          example: 'Cho tam giác đều $ABC$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.',
          note: 'Ta có $|\\vec{AB}| = a, |\\vec{AC}| = a$ và góc $(\\vec{AB}, \\vec{AC}) = \\angle BAC = 60^\\circ$. Vậy $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$.'
        },
        {
          name: 'Tính tích vô hướng, độ dài, góc bằng tọa độ Oxy',
          example: 'Cho $\\vec{u} = (1; 2)$ và $\\vec{v} = (-2; 1)$. Tính tích vô hướng và góc giữa chúng.',
          note: '$\\vec{u} \\cdot \\vec{v} = 1(-2) + 2(1) = 0 \\Rightarrow \\vec{u} \\perp \\vec{v}$, góc giữa hai vectơ bằng $90^\\circ$.'
        },
        {
          name: 'Ứng dụng bình phương vô hướng tính độ dài và chứng minh vuông góc',
          example: 'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 2, |\\vec{b}| = 3, (\\vec{a}, \\vec{b}) = 120^\\circ$. Tính độ dài vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$.',
          note: 'Tính $|\\vec{u}|^2 = (2\\vec{a} - \\vec{b})^2 = 4\\vec{a}^2 - 4\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$. Thế số ta được $|\\vec{u}| = \\sqrt{37}$.'
        }
      ],
      recognitionSigns: [
        'Đề bài yêu cầu tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ hoặc góc giữa hai vectơ.',
        'Yêu cầu chứng minh hai đường thẳng vuông góc hoặc hai vectơ vuông góc.',
        'Đề bài cho độ dài các vectơ và góc giữa chúng, hoặc cho tọa độ các điểm/vectơ trên hệ trục Oxy.'
      ],
      solvingSteps: [
        'Bước 1: Xác định phương pháp tính tích vô hướng phù hợp (định nghĩa hình học hay biểu thức tọa độ Oxy).',
        'Bước 2: \n  - Nếu dùng tọa độ: Áp dụng công thức $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$.\n  - Nếu dùng hình học: Xác định độ dài hai vectơ và góc chung của chúng. Chú ý đưa về chung gốc (ví dụ góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $180^\\circ - \\angle B$).',
        'Bước 3: Tính góc hoặc chứng minh vuông góc (nếu tích vô hướng bằng 0 thì hai vectơ vuông góc).',
        'Bước 4: Để tính độ dài biểu thức vectơ phức tạp, bình phương vô hướng biểu thức đó rồi khai căn ở kết quả cuối.'
      ],
      commonMistakes: [
        'Xác định sai góc giữa hai vectơ khi chúng chưa chung gốc (ví dụ góc giữa $\\vec{AB}$ và $\\vec{BC}$ viết nhầm thành góc $\\angle B$ thay vì $180^\\circ - \\angle B$).',
        'Lẫn lộn bình phương vô hướng của vectơ và bình phương độ dài (thực chất chúng bằng nhau: $\\vec{u}^2 = |\\vec{u}|^2$).',
        'Nhầm dấu khi thực hiện nhân các tọa độ âm.'
      ],
      difficulty: 'medium',
      examFrequency: 'high'
    }
];
