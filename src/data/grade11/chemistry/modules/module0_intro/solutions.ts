import { Solution } from '@/types';

export const g11ChemistryModule0Solutions: Solution[] = [
  {
    id: 'chem11-s1',
    questionId: 'chem11-q1',
    recognition: 'Đề bài cho nồng độ cân bằng của tất cả các chất trong phản ứng thuận nghịch và yêu cầu tính hằng số cân bằng Kc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Thiết lập biểu thức hằng số cân bằng',
        explanation: 'Với phản ứng $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$, biểu thức hằng số cân bằng là: $K_c = \\frac{[HI]^2}{[H_2] \\cdot [I_2]}$'
      },
      {
        order: 2,
        title: 'Tính toán giá trị Kc',
        explanation: 'Thay các giá trị nồng độ cân bằng vào biểu thức: $K_c = \\frac{0.40^2}{0.10 \\cdot 0.20} = \\frac{0.16}{0.02} = 8.0$'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Quên bình phương nồng độ của HI (hệ số tỉ lượng)', 'Lấy nồng độ chất phản ứng chia cho sản phẩm thay vì ngược lại'],
    reviewSuggestions: ['Xem lại định nghĩa biểu thức tính Kc và quy tắc lấy lũy thừa của hệ số tỉ lượng.']
  }
];
