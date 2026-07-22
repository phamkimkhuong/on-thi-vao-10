import type { Solution } from '@/types';

export const g10MathModule5Solutions: Solution[] = [
  {
      id: 'math10-s5',
      questionId: 'math10-q5',
      recognition: 'Phân tích vectơ cơ bản và ứng dụng để chứng minh ba điểm thẳng hàng.',
      detailedSteps: [
        {
          order: 1,
          title: 'Phân tích vectơ AM theo AB và AC',
          explanation: 'Từ hệ thức $\\vec{MB} = -2\\vec{MC} \\Leftrightarrow \\vec{AB} - \\vec{AM} = -2(\\vec{AC} - \\vec{AM}) \\Leftrightarrow \\vec{AB} - \\vec{AM} = -2\\vec{AC} + 2\\vec{AM}$.\nChuyển vế ta được: $3\\vec{AM} = \\vec{AB} + 2\\vec{AC} \\Rightarrow \\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$.',
          result: 'AM = 1/3AB + 2/3AC'
        },
        {
          order: 2,
          title: 'So sánh vectơ AN và vectơ AM để chứng minh thẳng hàng',
          explanation: 'Theo đề bài ta có $\\vec{AN} = \\frac{1}{9}\\vec{AB} + \\frac{2}{9}\\vec{AC}$. Đặt nhân tử chung $\\frac{1}{3}$ ta được:\n$\\vec{AN} = \\frac{1}{3}\\left(\\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}\\right)$.\nThế biểu thức $\\vec{AM}$ ở bước 1 vào, suy ra $\\vec{AN} = \\frac{1}{3}\\vec{AM}$.\nVì hai vectơ khác vectơ-không, cùng phương và cùng có điểm đầu A nên ba điểm A, N, M thẳng hàng.',
          result: 'AN = 1/3AM'
        }
      ],
      finalAnswer: 'AM = 1/3AB + 2/3AC',
      commonMistakes: [
        'Chèn sai quy tắc hiệu vectơ (ví dụ ghi $\\vec{MB} = -2\\vec{MC}$ thành $\\vec{AM} - \\vec{AB}$ thay vì $\\vec{AB} - \\vec{AM}$).',
        'Không rút gọn được về dạng biểu diễn tỷ số $\\vec{AN} = k\\vec{AM}$.'
      ],
      reviewSuggestions: [
        'Ghi nhớ quy tắc hiệu vectơ: $\\vec{XY} = \\vec{OY} - \\vec{OX}$ với O là điểm chèn bất kỳ.'
      ]
    },
  {
      id: 'math10-s54',
      questionId: 'math10-q54',
      recognition: 'Tính tích vô hướng của hai vectơ bằng cách biến đổi chung điểm đầu gốc để tìm góc.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đưa về cặp vectơ chung điểm đầu gốc',
          explanation: 'Ta cần tính tích vô hướng $\\vec{AB} \\cdot \\vec{BC}$.\nĐể xác định đúng góc giữa hai vectơ này, ta biến đổi vectơ $\\vec{AB} = -\\vec{BA}$.\nKhi đó: $\\vec{AB} \\cdot \\vec{BC} = (-\\vec{BA}) \\cdot \\vec{BC} = -\\vec{BA} \\cdot \\vec{BC}$.',
          result: 'AB.BC = -BA.BC'
        },
        {
          order: 2,
          title: 'Xác định góc giữa hai vectơ BA và BC',
          explanation: 'Hai vectơ $\\vec{BA}$ và $\\vec{BC}$ đã chung điểm đầu gốc $B$.\nGóc giữa chúng chính là góc $\\angle B$ của tam giác đều $ABC$.\nDo tam giác $ABC$ đều nên góc $\\angle B = 60^\\circ$.',
          result: 'Góc (BA, BC) = 60 độ'
        },
        {
          order: 3,
          title: 'Tính toán tích vô hướng',
          explanation: 'Theo định nghĩa tích vô hướng:\n$\\vec{BA} \\cdot \\vec{BC} = |\\vec{BA}| \\cdot |\\vec{BC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$.\nDo đó: $\\vec{AB} \\cdot \\vec{BC} = -\\frac{a^2}{2}$.',
          result: 'AB.BC = -a^2/2'
        }
      ],
      finalAnswer: '-a^2/2',
      commonMistakes: [
        'Xác định sai góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $60^\\circ$ thay vì $120^\\circ$ (góc bù với góc tam giác do chưa chung gốc).',
        'Thiếu dấu trừ ở kết quả cuối cùng.'
      ],
      reviewSuggestions: [
        'Luôn chú ý đưa hai vectơ về chung gốc (ví dụ gốc B) trước khi xác định số đo góc giữa chúng.'
      ]
    },
  {
      id: 'math10-s55',
      questionId: 'math10-q55',
      recognition: 'Tính tích vô hướng của hai vectơ từ biểu thức tọa độ Oxy.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thiết lập biểu thức tọa độ tích vô hướng',
          explanation: 'Với hai vectơ $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$, tích vô hướng được tính theo công thức:\n$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$.',
          result: 'u.v = x1*x2 + y1*y2'
        },
        {
          order: 2,
          title: 'Thay số và tính kết quả',
          explanation: 'Thay tọa độ $\\vec{u} = (2; -1)$ và $\\vec{v} = (3; 4)$ vào công thức:\n$\\vec{u} \\cdot \\vec{v} = 2 \\cdot 3 + (-1) \\cdot 4 = 6 - 4 = 2$.',
          result: 'u.v = 2'
        }
      ],
      finalAnswer: '2',
      commonMistakes: [
        'Nhân sai dấu ở các thành phần tọa độ âm (ví dụ nhân $(-1) \\cdot 4 = 4$ thay vì $-4$).'
      ],
      reviewSuggestions: [
        'Phương pháp tọa độ là cách tính tích vô hướng nhanh và ít sai sót nhất, chỉ cần cẩn thận các phép tính dấu âm.'
      ]
    },
  {
      id: 'math10-s56',
      questionId: 'math10-q56',
      recognition: 'Tính góc giữa hai vectơ khi biết tọa độ trong mặt phẳng Oxy.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính tích vô hướng của hai vectơ',
          explanation: 'Tích vô hướng của $\\vec{u} = (1; \\sqrt{3})$ và $\\vec{v} = (\\sqrt{3}; 1)$ là:\n$\\vec{u} \\cdot \\vec{v} = 1 \\cdot \\sqrt{3} + \\sqrt{3} \\cdot 1 = 2\\sqrt{3}$.',
          result: 'u.v = 2\\sqrt{3}'
        },
        {
          order: 2,
          title: 'Tính độ dài của mỗi vectơ',
          explanation: 'Độ dài của $\\vec{u}$ và $\\vec{v}$ lần lượt là:\n$|\\vec{u}| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1+3} = 2$.\n$|\\vec{v}| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3+1} = 2$.',
          result: '|u| = 2, |v| = 2'
        },
        {
          order: 3,
          title: 'Tính côsin và số đo góc',
          explanation: 'Côsin góc giữa hai vectơ là:\n$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{2\\sqrt{3}}{2 \\cdot 2} = \\frac{\\sqrt{3}}{2}$.\nSuy ra góc giữa hai vectơ bằng $30^\\circ$.',
          result: 'Góc = 30 độ'
        }
      ],
      finalAnswer: '30 độ',
      commonMistakes: [
        'Bấm máy tính hoặc tính sai giá trị góc lượng giác từ côsin (nhầm $\\cos x = \\frac{\\sqrt{3}}{2}$ ra góc $60^\\circ$).'
      ],
      reviewSuggestions: [
        'Luôn đảm bảo chia đúng tích vô hướng cho tích độ dài khi tìm côsin góc giữa hai vectơ.'
      ]
    },
  {
      id: 'math10-s57',
      questionId: 'math10-q57',
      recognition: 'Tính tích vô hướng từ tọa độ các đỉnh của tam giác.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tìm tọa độ các vectơ AB và AC',
          explanation: 'Ta tính tọa độ của hai vectơ bằng cách lấy tọa độ điểm sau trừ điểm trước:\n$\\vec{AB} = (x_B - x_A; y_B - y_A) = (-1 - 1; 1 - 2) = (-2; -1)$.\n$\\vec{AC} = (x_C - x_A; y_C - y_A) = (3 - 1; -2 - 2) = (2; -4)$.',
          result: 'AB = (-2; -1), AC = (2; -4)'
        },
        {
          order: 2,
          title: 'Tính tích vô hướng AB.AC',
          explanation: 'Áp dụng biểu thức tọa độ tích vô hướng:\n$\\vec{AB} \\cdot \\vec{AC} = (-2) \\cdot 2 + (-1) \\cdot (-4) = -4 + 4 = 0$.',
          result: 'AB.AC = 0'
        }
      ],
      finalAnswer: '0',
      commonMistakes: [
        'Tính sai tọa độ các vectơ do nhầm lẫn thứ tự trừ (lấy hoành độ A trừ hoành độ B thay vì ngược lại).'
      ],
      reviewSuggestions: [
        'Tích vô hướng bằng 0 chứng tỏ tam giác ABC vuông tại A. Việc kiểm tra tích vô hướng giúp phát hiện các góc vuông một cách nhanh chóng.'
      ]
    },
  {
      id: 'math10-s58',
      questionId: 'math10-q58',
      recognition: 'Tính tích vô hướng hình học bằng cách chèn điểm.',
      detailedSteps: [
        {
          order: 1,
          title: 'Chèn điểm A vào vectơ BC',
          explanation: 'Ta phân tích vectơ $\\vec{BC} = \\vec{AC} - \\vec{AB}$.\nKhi đó, tích vô hướng trở thành:\n$\\vec{AB} \\cdot \\vec{BC} = \\vec{AB} \\cdot (\\vec{AC} - \\vec{AB}) = \\vec{AB} \\cdot \\vec{AC} - \\vec{AB}^2$.',
          result: 'AB.BC = AB.AC - AB^2'
        },
        {
          order: 2,
          title: 'Tính các số hạng thành phần',
          explanation: 'Vì tam giác $ABC$ vuông tại $A$ nên hai vectơ $\\vec{AB}$ và $\\vec{AC}$ vuông góc với nhau:\n$\\vec{AB} \\cdot \\vec{AC} = 0$.\nBình phương vô hướng $\\vec{AB}^2 = AB^2 = 3^2 = 9$.',
          result: 'AB.AC = 0, AB^2 = 9'
        },
        {
          order: 3,
          title: 'Tổng hợp kết quả',
          explanation: 'Thế các giá trị vào biểu thức:\n$\\vec{AB} \\cdot \\vec{BC} = 0 - 9 = -9$.',
          result: 'AB.BC = -9'
        }
      ],
      finalAnswer: '-9',
      commonMistakes: [
        'Không đổi hướng và chèn điểm đúng, dẫn đến tính nhầm góc giữa $\\vec{AB}$ và $\\vec{BC}$ thành góc $\\angle B$ của tam giác vuông.'
      ],
      reviewSuggestions: [
        'Công thức chèn điểm hiệu $\\vec{XY} = \\vec{AY} - \\vec{AX}$ cực kỳ hữu ích để tính tích vô hướng khi tam giác có góc vuông tại A.'
      ]
    },
  {
      id: 'math10-s59',
      questionId: 'math10-q59',
      recognition: 'Tính độ dài của tổng hai vectơ dựa trên bình phương vô hướng.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính tích vô hướng của hai vectơ ban đầu',
          explanation: 'Tích vô hướng của $\\vec{a}$ và $\\vec{b}$ là:\n$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos 120^\\circ = 3 \\cdot 4 \\cdot (-0.5) = -6$.',
          result: 'a.b = -6'
        },
        {
          order: 2,
          title: 'Bình phương vô hướng biểu thức vectơ',
          explanation: 'Ta bình phương vô hướng độ dài vectơ $\\vec{u}$:\n$|\\vec{u}|^2 = (\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$.',
          result: '|u|^2 = a^2 + 2a.b + b^2'
        },
        {
          order: 3,
          title: 'Thế số và khai căn độ dài',
          explanation: 'Thay $|\\vec{a}| = 3, |\\vec{b}| = 4$ và $\\vec{a}\\cdot\\vec{b} = -6$ vào:\n$|\\vec{u}|^2 = 3^2 + 2(-6) + 4^2 = 9 - 12 + 16 = 13$.\nVậy độ dài của vectơ $|\\vec{u}| = \\sqrt{13}$.',
          result: '|u| = \\sqrt{13}'
        }
      ],
      finalAnswer: '\\sqrt{13}',
      commonMistakes: [
        'Nhầm lẫn giữa bình phương một tổng vectơ với tổng các bình phương độ dài (viết $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}| = 7$ là sai hoàn toàn).',
        'Tính sai dấu của $\\cos 120^\\circ$ làm thay đổi kết quả tích vô hướng.'
      ],
      reviewSuggestions: [
        'Muốn tìm độ dài của một biểu thức vectơ phức tạp, luôn thực hiện bình phương vô hướng biểu thức đó rồi khai căn kết quả.'
      ]
    },
  {
      id: 'math10-s60',
      questionId: 'math10-q60',
      recognition: 'Tìm điều kiện tham số để hai vectơ vuông góc.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thiết lập điều kiện vuông góc',
          explanation: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0:\n$\\vec{u} \\cdot \\vec{v} = 0$.',
          result: 'u.v = 0'
        },
        {
          order: 2,
          title: 'Áp dụng biểu thức tọa độ lập phương trình',
          explanation: 'Với $\\vec{u} = (2; x)$ và $\\vec{v} = (-3; 6)$:\n$\\vec{u} \\cdot \\vec{v} = 2 \\cdot (-3) + x \\cdot 6 = -6 + 6x$.\nCho tích vô hướng bằng 0 ta được phương trình: $-6 + 6x = 0$.',
          result: '-6 + 6x = 0'
        },
        {
          order: 3,
          title: 'Giải phương trình tìm x',
          explanation: 'Giải phương trình tuyến tính:\n$6x = 6 \\Rightarrow x = 1$.',
          result: 'x = 1'
        }
      ],
      finalAnswer: '1',
      commonMistakes: [
        'Nhầm điều kiện vuông góc sang điều kiện cùng phương (điều kiện cùng phương là hoành chia hoành bằng tung chia tung: $\\frac{2}{-3} = \\frac{x}{6}$).'
      ],
      reviewSuggestions: [
        'Ghi nhớ phân biệt rõ ràng: Vuông góc liên quan đến tích vô hướng bằng 0 ($x_1x_2 + y_1y_2 = 0$), cùng phương liên quan đến tỉ lệ tọa độ ($x_1y_2 - x_2y_1 = 0$).'
      ]
    },
  {
      id: 'math10-s61',
      questionId: 'math10-q61',
      recognition: 'Tìm tọa độ trực tâm của tam giác bằng phương pháp vectơ.',
      detailedSteps: [
        {
          order: 1,
          title: 'Gọi tọa độ H và thiết lập điều kiện trực tâm',
          explanation: 'Gọi trực tâm là $H(x; y)$.\nVì $H$ là trực tâm của tam giác $ABC$ nên ta có hệ điều kiện:\n$\\vec{AH} \\perp \\vec{BC} \\Leftrightarrow \\vec{AH} \\cdot \\vec{BC} = 0$\n$\\vec{BH} \\perp \\vec{AC} \\Leftrightarrow \\vec{BH} \\cdot \\vec{AC} = 0$.',
          result: 'AH.BC = 0 và BH.AC = 0'
        },
        {
          order: 2,
          title: 'Tính tọa độ các vectơ tương ứng',
          explanation: 'Ta có các vectơ:\n$\\vec{BC} = (5-5; 5-1) = (0; 4)$.\n$\\vec{AC} = (5-1; 5-3) = (4; 2)$.\n$\\vec{AH} = (x-1; y-3)$.\n$\\vec{BH} = (x-5; y-1)$.',
          result: 'BC=(0;4), AC=(4;2), AH=(x-1;y-3), BH=(x-5;y-1)'
        },
        {
          order: 3,
          title: 'Lập hệ phương trình và giải tìm x, y',
          explanation: 'Thay tọa độ vào hệ tích vô hướng:\n- $\\vec{AH} \\cdot \\vec{BC} = (x-1) \\cdot 0 + (y-3) \\cdot 4 = 0 \\Rightarrow 4(y-3) = 0 \\Rightarrow y = 3$.\n- $\\vec{BH} \\cdot \\vec{AC} = (x-5) \\cdot 4 + (y-1) \\cdot 2 = 0$.\nThay $y = 3$ vào bất phương trình thứ hai:\n$4(x-5) + 2(3-1) = 0 \\Rightarrow 4x - 20 + 4 = 0 \\Rightarrow 4x - 16 = 0 \\Rightarrow x = 4$.\nVậy trực tâm có tọa độ $H(4; 3)$.',
          result: 'H(4; 3)'
        }
      ],
      finalAnswer: 'H(4;3)',
      commonMistakes: [
        'Giải nhầm hệ phương trình do tính toán các tích tọa độ sai số.',
        'Viết sai công thức vectơ trực tâm (nhầm thành $\\vec{AH} \\cdot \\vec{AB} = 0$ hoặc tương tự).'
      ],
      reviewSuggestions: [
        'Sử dụng tính chất vuông góc của đường cao trong tam giác để lập hai phương trình tích vô hướng bằng 0 luôn là cách tối ưu nhất để tìm tọa độ trực tâm.'
      ]
    },
  {
      id: 'math10-s62',
      questionId: 'math10-q62',
      recognition: 'Chứng minh tính vuông góc trong hình học bằng phương pháp tọa độ hóa.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thiết lập hệ trục tọa độ Oxy',
          explanation: 'Đặt hình chữ nhật vào hệ trục Oxy sao cho:\n- Gốc O trùng với đỉnh $D(0; 0)$.\n- Cạnh $DC$ nằm trên trục hoành Ox, suy ra $C(2; 0)$.\n- Cạnh $DA$ nằm trên trục tung Oy, suy ra $A(0; 2\\sqrt{2})$.\n- Đỉnh $B$ có tọa độ $B(2; 2\\sqrt{2})$.',
          result: 'D(0;0), C(2;0), B(2;2\\sqrt{2}), A(0;2\\sqrt{2})'
        },
        {
          order: 2,
          title: 'Xác định tọa độ điểm K và các vectơ AC, BK',
          explanation: 'Vì $K$ là trung điểm của cạnh $AD$ nên $K(0; \\sqrt{2})$.\nTọa độ các vectơ cần tính:\n- $\\vec{AC} = (x_C - x_A; y_C - y_A) = (2; -2\\sqrt{2})$.\n- $\\vec{BK} = (x_K - x_B; y_K - y_B) = (0-2; \\sqrt{2}-2\\sqrt{2}) = (-2; -\\sqrt{2})$.',
          result: 'AC = (2; -2\\sqrt{2}), BK = (-2; -\\sqrt{2})'
        },
        {
          order: 3,
          title: 'Tính tích vô hướng AC.BK',
          explanation: 'Tích vô hướng của hai vectơ là:\n$\\vec{AC} \\cdot \\vec{BK} = 2 \\cdot (-2) + (-2\\sqrt{2}) \\cdot (-\\sqrt{2}) = -4 + 4 = 0$.\nVì tích vô hướng bằng 0 nên hai đường thẳng $AC$ và $BK$ vuông góc với nhau.',
          result: 'Tích vô hướng bằng 0'
        }
      ],
      finalAnswer: '0',
      commonMistakes: [
        'Đặt sai tọa độ các đỉnh của hình chữ nhật (ví dụ cho tọa độ đỉnh B sai tỉ lệ).',
        'Tính sai tọa độ trung điểm K.'
      ],
      reviewSuggestions: [
        'Tọa độ hóa (hình học giải tích) là công cụ cực kỳ mạnh mẽ để giải quyết các bài toán chứng minh vuông góc hoặc tính góc trong các hình có góc vuông sẵn như hình vuông, hình chữ nhật.'
      ]
    },
  {
      id: 'math10-s63',
      questionId: 'math10-q63',
      recognition: 'Tìm tham số k từ điều kiện vuông góc của tổ hợp các vectơ.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính tích vô hướng a.b',
          explanation: 'Ta có tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ là:\n$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos 60^\\circ = 1 \\cdot 2 \\cdot 0.5 = 1$.',
          result: 'a.b = 1'
        },
        {
          order: 2,
          title: 'Lập phương trình từ điều kiện vuông góc',
          explanation: 'Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc khi và chỉ khi:\n$\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow (\\vec{a} + 2\\vec{b}) \\cdot (k\\vec{a} - \\vec{b}) = 0$\n$\\Leftrightarrow k\\vec{a}^2 - \\vec{a}\\cdot\\vec{b} + 2k\\vec{a}\\cdot\\vec{b} - 2\\vec{b}^2 = 0$.',
          result: 'k*a^2 + (2k-1)*a.b - 2*b^2 = 0'
        },
        {
          order: 3,
          title: 'Thay số và giải tìm k',
          explanation: 'Vì $|\\vec{a}| = 1 \\Rightarrow \\vec{a}^2 = 1$; $|\\vec{b}| = 2 \\Rightarrow \\vec{b}^2 = 4$; $\\vec{a}\\cdot\\vec{b} = 1$.\nThay vào phương trình ta được:\n$k \\cdot 1 - 1 + 2k \\cdot 1 - 2 \\cdot 4 = 0$\n$\\Leftrightarrow 3k - 9 = 0 \\Rightarrow k = 3$.',
          result: 'k = 3'
        }
      ],
      finalAnswer: 'k = 3',
      commonMistakes: [
        'Quên bình phương độ dài khi nhân $\\vec{b} \\cdot \\vec{b}$ (nhầm thành $2$ thay vì $|\\vec{b}|^2 = 4$).',
        'Tính sai dấu trong tích đại số biểu thức vectơ.'
      ],
      reviewSuggestions: [
        'Nhớ quy tắc phân phối giống như nhân đa thức bình thường đối với phép nhân tích vô hướng các vectơ.'
      ]
    },
  {
      id: 'math10-s71',
      questionId: 'math10-q71',
      recognition: 'Dấu hiệu nhận biết: trung điểm của BC; chèn điểm B rồi dùng $\\vec{BM}=\\frac12\\vec{BC}$.',
      detailedSteps: [
        {
          order: 1,
          title: 'Chèn điểm B',
          explanation: '$\\vec{AM}=\\vec{AB}+\\vec{BM}$ và $\\vec{BM}=\\frac12\\vec{BC}=\\frac12(\\vec{AC}-\\vec{AB})$.',
          result: 'AM=AB+1/2(AC-AB)'
        },
        {
          order: 2,
          title: 'Thu gọn theo hai vectơ cơ sở',
          explanation: 'Gom hệ số của $\\vec{AB}$ và $\\vec{AC}$.',
          result: 'AM=1/2AB+1/2AC'
        }
      ],
      finalAnswer: 'AM = 1/2AB + 1/2AC',
      commonMistakes: ['Viết $\\vec{BC}=\\vec{AB}+\\vec{AC}$ thay vì $\\vec{AC}-\\vec{AB}$.'],
      reviewSuggestions: ['Ghi nhớ công thức vectơ trung điểm: $\\vec{AM}=\\frac12(\\vec{AB}+\\vec{AC})$.']
    },
  {
      id: 'math10-s72',
      questionId: 'math10-q72',
      recognition: 'Dấu hiệu nhận biết: điểm chia trong đoạn theo tỉ số; đổi toàn bộ độ dài về cùng một phần.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đặt một phần tỉ lệ',
          explanation: 'Vì $AN=2NB$, đặt $NB=t$ thì $AN=2t$ và $AB=AN+NB=3t$.',
          result: 'AN/AB=2/3'
        },
        {
          order: 2,
          title: 'Đưa về vectơ',
          explanation: 'N nằm giữa A và B nên $\\vec{AN}$ cùng hướng với $\\vec{AB}$.',
          result: 'AN=2/3AB'
        }
      ],
      finalAnswer: 'AN = 2/3AB',
      commonMistakes: ['Dùng hệ số $2$ mà quên tổng đoạn AB gồm ba phần.'],
      reviewSuggestions: ['Nếu $AN:NB=p:q$ thì $\\vec{AN}=\\frac{p}{p+q}\\vec{AB}$.']
    },
  {
      id: 'math10-s73',
      questionId: 'math10-q73',
      recognition: 'Dấu hiệu nhận biết: đường chéo hình bình hành; áp dụng trực tiếp quy tắc hình bình hành.',
      detailedSteps: [
        {
          order: 1,
          title: 'Chèn điểm B',
          explanation: '$\\vec{AC}=\\vec{AB}+\\vec{BC}$. Trong hình bình hành, $\\vec{BC}=\\vec{AD}$.',
          result: 'AC=AB+AD'
        }
      ],
      finalAnswer: 'AC = AB + AD',
      commonMistakes: ['Viết dấu trừ do nhầm chiều của $\\vec{BC}$ và $\\vec{AD}$.'],
      reviewSuggestions: ['Hai cạnh đối cùng chiều của hình bình hành biểu diễn cùng một vectơ.']
    },
  {
      id: 'math10-s74',
      questionId: 'math10-q74',
      recognition: 'Dấu hiệu nhận biết: trọng tâm tam giác; nối trọng tâm với trung điểm và dùng tỉ lệ $AG:GM=2:1$.',
      detailedSteps: [
        {
          order: 1,
          title: 'Dùng trung tuyến AM',
          explanation: 'Gọi M là trung điểm BC. Ta có $\\vec{AM}=\\frac12(\\vec{AB}+\\vec{AC})$.',
          result: 'AM=1/2(AB+AC)'
        },
        {
          order: 2,
          title: 'Dùng tính chất trọng tâm',
          explanation: '$\\vec{AG}=\\frac23\\vec{AM}=\\frac13(\\vec{AB}+\\vec{AC})$.',
          result: 'AG=1/3AB+1/3AC'
        }
      ],
      finalAnswer: 'AG = 1/3AB + 1/3AC',
      commonMistakes: ['Nhầm $AG=\\frac13AM$ thay vì $AG=\\frac23AM$.'],
      reviewSuggestions: ['Trọng tâm chia mỗi trung tuyến theo tỉ lệ 2:1 kể từ đỉnh.']
    },
  {
      id: 'math10-s75',
      questionId: 'math10-q75',
      recognition: 'Dấu hiệu nhận biết: hai điểm nằm trên hai cạnh; biểu diễn riêng $\\vec{AM}$, $\\vec{AN}$ rồi lấy hiệu.',
      detailedSteps: [
        {
          order: 1,
          title: 'Biểu diễn hai vectơ vị trí',
          explanation: 'M là trung điểm AB nên $\\vec{AM}=\\frac12\\vec{AB}$. Vì $AN:NC=2:1$ nên $\\vec{AN}=\\frac23\\vec{AC}$.',
          result: 'AM=1/2AB, AN=2/3AC'
        },
        {
          order: 2,
          title: 'Tính MN',
          explanation: '$\\vec{MN}=\\vec{AN}-\\vec{AM}$.',
          result: 'MN=-1/2AB+2/3AC'
        }
      ],
      finalAnswer: 'MN = -1/2AB + 2/3AC',
      commonMistakes: ['Đảo hiệu thành $\\vec{AM}-\\vec{AN}$, thu được vectơ NM.'],
      reviewSuggestions: ['Với cùng gốc A: $\\vec{MN}=\\vec{AN}-\\vec{AM}$.']
    },
  {
      id: 'math10-s76',
      questionId: 'math10-q76',
      recognition: 'Dấu hiệu nhận biết: hai vectơ đã được biểu diễn theo cùng cặp vectơ cơ sở; so sánh trực tiếp các hệ số.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đặt nhân tử chung',
          explanation: '$\\vec{AQ}=4\\vec{AB}-2\\vec{AC}=2(2\\vec{AB}-\\vec{AC})$.',
          result: 'AQ=2AP'
        },
        {
          order: 2,
          title: 'Đọc hệ số',
          explanation: 'So sánh với $\\vec{AQ}=k\\vec{AP}$ suy ra $k=2$. Đồng thời A, P, Q thẳng hàng.',
          result: 'k=2'
        }
      ],
      finalAnswer: '2',
      commonMistakes: ['Chỉ so sánh một hệ số mà không kiểm tra hệ số còn lại.'],
      reviewSuggestions: ['Hai vectơ tỉ lệ khi mọi hệ số theo cùng một cặp vectơ cơ sở có cùng tỉ số.']
    },
  {
      id: 'math10-s77',
      questionId: 'math10-q77',
      recognition: 'Dấu hiệu nhận biết: M chia cạnh BC theo tỉ số 2:1; đổi $\\vec{BM}$ thành một phần của $\\vec{BC}$ rồi chèn B.',
      detailedSteps: [
        {
          order: 1,
          title: 'Đổi tỉ số đoạn thẳng',
          explanation: '$BM:MC=2:1$ nên $\\vec{BM}=\\frac23\\vec{BC}=\\frac23(\\vec{AC}-\\vec{AB})$.',
          result: 'BM=2/3(AC-AB)'
        },
        {
          order: 2,
          title: 'Tính AM',
          explanation: '$\\vec{AM}=\\vec{AB}+\\vec{BM}=\\vec{AB}+\\frac23(\\vec{AC}-\\vec{AB})$.',
          result: 'AM=1/3AB+2/3AC'
        }
      ],
      finalAnswer: 'AM = 1/3AB + 2/3AC',
      commonMistakes: ['Đổi nhầm $BM=\\frac13BC$ vì nhìn vào phần MC thay vì BM.'],
      reviewSuggestions: ['Đoạn ứng với số 2 chiếm $2/(2+1)$ độ dài toàn cạnh.']
    },
  {
      id: 'math10-s78',
      questionId: 'math10-q78',
      recognition: 'Dấu hiệu nhận biết: trung điểm trên cạnh đối của hình bình hành; chèn qua đỉnh D.',
      detailedSteps: [
        {
          order: 1,
          title: 'Chèn điểm D',
          explanation: '$\\vec{AM}=\\vec{AD}+\\vec{DM}$. Vì M là trung điểm CD nên $\\vec{DM}=\\frac12\\vec{DC}$.',
          result: 'AM=AD+1/2DC'
        },
        {
          order: 2,
          title: 'Dùng tính chất hình bình hành',
          explanation: '$\\vec{DC}=\\vec{AB}$, do đó thu được biểu thức cần tìm.',
          result: 'AM=1/2AB+AD'
        }
      ],
      finalAnswer: 'AM = 1/2AB + AD',
      commonMistakes: ['Nhầm $\\vec{DC}=-\\vec{AB}$; thực tế hai vectơ này cùng hướng.'],
      reviewSuggestions: ['Quan sát chiều mũi tên trước khi thay các cạnh đối bằng nhau.']
    },
  {
      id: 'math10-s79',
      questionId: 'math10-q79',
      recognition: 'Dấu hiệu nhận biết: tìm tham số để A, M, N thẳng hàng; đặt $\\vec{AN}=k\\vec{AM}$ rồi so sánh hệ số.',
      detailedSteps: [
        {
          order: 1,
          title: 'Lập điều kiện cùng phương',
          explanation: 'Vì $\\vec{AB}$ và $\\vec{AC}$ không cùng phương, $A,M,N$ thẳng hàng khi tồn tại k sao cho $(m+1;3)=k(2;1)$ theo các hệ số tương ứng.',
          result: 'm+1=2k, 3=k'
        },
        {
          order: 2,
          title: 'Giải hệ hệ số',
          explanation: 'Từ $k=3$, suy ra $m+1=6$, nên $m=5$.',
          result: 'm=5'
        }
      ],
      finalAnswer: '5',
      commonMistakes: ['Cho hai hệ số bằng nhau trực tiếp thay vì cho chúng cùng tỉ lệ.'],
      reviewSuggestions: ['Khi đã có cùng cặp vectơ cơ sở, điều kiện cùng phương trở thành điều kiện hai cặp hệ số tỉ lệ.']
    },
  {
      id: 'math10-s80',
      questionId: 'math10-q80',
      recognition: 'Dấu hiệu nhận biết: hai vectơ chứa tham số theo cùng cơ sở; dùng định thức hệ số bằng 0 để tránh chia cho hệ số có thể bằng 0.',
      detailedSteps: [
        {
          order: 1,
          title: 'Lập điều kiện tỉ lệ',
          explanation: 'Hai cặp hệ số $(2;-1)$ và $(m-1;2m-5)$ phải tỉ lệ. Điều kiện tương đương là định thức bằng 0.',
          result: '2(2m-5)-(-1)(m-1)=0'
        },
        {
          order: 2,
          title: 'Giải phương trình',
          explanation: '$4m-10+m-1=0 \\Leftrightarrow 5m-11=0$.',
          result: 'm=11/5'
        }
      ],
      finalAnswer: '11/5',
      commonMistakes: ['Làm mất dấu âm của hệ số $-1$ khi khai triển định thức.'],
      reviewSuggestions: ['Với $(a;b)$ và $(c;d)$, điều kiện tỉ lệ an toàn là $ad-bc=0$.']
    },
  {
      id: 'math10-s81',
      questionId: 'math10-q81',
      recognition: 'Dấu hiệu nhận biết: hai điểm chia hai cạnh theo tỉ số; biểu diễn vectơ vị trí từ cùng gốc A rồi lấy hiệu.',
      detailedSteps: [
        {
          order: 1,
          title: 'Biểu diễn AM và AN',
          explanation: '$BM:MC=2:1$ nên $\\vec{AM}=\\frac13\\vec{AB}+\\frac23\\vec{AC}$. Vì $CN=3NA$, điểm N nằm trên CA và $AN=\\frac14AC$, nên $\\vec{AN}=\\frac14\\vec{AC}$.',
          result: 'AM=1/3AB+2/3AC, AN=1/4AC'
        },
        {
          order: 2,
          title: 'Tính MN và đọc x, y',
          explanation: '$\\vec{MN}=\\vec{AN}-\\vec{AM}=-\\frac13\\vec{AB}+(\\frac14-\\frac23)\\vec{AC}=-\\frac13\\vec{AB}-\\frac5{12}\\vec{AC}$. Do đó $x=-\\frac13$, $y=-\\frac5{12}$.',
          result: 'x+y=-1/3-5/12=-3/4'
        }
      ],
      finalAnswer: '-3/4',
      commonMistakes: ['Suy ra $AN=\\frac34AC$ thay vì $\\frac14AC$ từ điều kiện $CN=3NA$.'],
      reviewSuggestions: ['Vẽ thứ tự C–N–A và đánh dấu 3 phần, 1 phần trước khi chuyển tỉ số sang vectơ.']
    },
  {
      id: 'math10-s84',
      questionId: 'math10-q84',
      recognition: 'Dấu hiệu nhận biết: hai vectơ được cho bằng tọa độ; nhân các tọa độ cùng vị trí rồi cộng.',
      detailedSteps: [
        {
          order: 1,
          title: 'Áp dụng công thức tọa độ',
          explanation: '$\\vec{u}\\cdot\\vec{v}=2\\cdot3+(-1)\\cdot4=6-4$.',
          result: '2'
        }
      ],
      finalAnswer: '2',
      commonMistakes: ['Bỏ dấu âm của tung độ $-1$.'],
      reviewSuggestions: ['Với $u=(x_1;y_1)$, $v=(x_2;y_2)$: $u\\cdot v=x_1x_2+y_1y_2$.']
    },
  {
      id: 'math10-s85',
      questionId: 'math10-q85',
      recognition: 'Dấu hiệu nhận biết: biết độ dài và góc giữa hai vectơ, cần độ dài của hiệu; bình phương biểu thức rồi dùng tích vô hướng.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính tích vô hướng a.b',
          explanation: '$\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos60^\\circ=5\\cdot2\\cdot\\frac12=5$.',
          result: 'a.b=5'
        },
        {
          order: 2,
          title: 'Bình phương độ dài hiệu',
          explanation: '$|\\vec{a}-\\vec{b}|^2=|\\vec{a}|^2+|\\vec{b}|^2-2\\vec{a}\\cdot\\vec{b}=25+4-10=19$.',
          result: '|a-b|^2=19'
        },
        {
          order: 3,
          title: 'Lấy căn dương',
          explanation: 'Độ dài không âm nên $|\\vec{a}-\\vec{b}|=\\sqrt{19}$.',
          result: '\\sqrt{19}'
        }
      ],
      finalAnswer: '\\sqrt{19}',
      commonMistakes: ['Dùng dấu cộng ở hạng tử $2\\vec{a}\\cdot\\vec{b}$ dù đang tính hiệu hai vectơ.'],
      reviewSuggestions: ['Ghi nhớ $|a\\pm b|^2=|a|^2+|b|^2\\pm2a\\cdot b$.']
    },
  {
    "id": "math10-m5-s001",
    "questionId": "math10-m5-q001",
    "recognition": "Dạng biểu diễn vectơ theo cơ sở: chọn A làm gốc và đổi điểm M về hai hướng AB, AD.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng biểu diễn vectơ theo cơ sở: chọn A làm gốc và đổi điểm M về hai hướng AB, AD."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Vì $\\vec{BM}=\\frac12\\vec{BC}=\\frac12\\vec{AD}$ nên $\\vec{AM}=\\vec{AB}+\\vec{BM}=\\vec{AB}+\\frac12\\vec{AD}$.",
        "result": "$\\vec{AB}+\\frac12\\vec{AD}$"
      }
    ],
    "finalAnswer": "A. $\\vec{AM}=\\vec{AB}+\\frac12\\vec{AD}$",
    "commonMistakes": [
      "Nhầm M là trung điểm của đường chéo AC."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s002",
    "questionId": "math10-m5-q002",
    "recognition": "Dạng biểu diễn qua trung điểm và trọng tâm: viết hai vectơ vị trí cùng gốc A rồi lấy AG trừ AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng biểu diễn qua trung điểm và trọng tâm: viết hai vectơ vị trí cùng gốc A rồi lấy AG trừ AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac12(\\vec{AB}+\\vec{AC})$, $\\vec{AG}=\\frac13(\\vec{AB}+\\vec{AC})$; do đó $\\vec{MG}=\\vec{AG}-\\vec{AM}=-\\frac16(\\vec{AB}+\\vec{AC})$.",
        "result": "$-\\frac16(\\vec{AB}+\\vec{AC})$"
      }
    ],
    "finalAnswer": "B. $-\\frac16(\\vec{AB}+\\vec{AC})$",
    "commonMistakes": [
      "Lấy AM−AG nên đảo chiều vectơ MG."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s003",
    "questionId": "math10-m5-q003",
    "recognition": "Dạng hai vectơ vị trí cùng gốc: vectơ từ P đến Q bằng AQ trừ AP.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai vectơ vị trí cùng gốc: vectơ từ P đến Q bằng AQ trừ AP."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{PQ}=\\vec{PA}+\\vec{AQ}=-\\vec{AP}+\\vec{AQ}=-\\frac23\\vec{AB}+\\frac14\\vec{AC}$.",
        "result": "$-\\frac23\\vec{AB}+\\frac14\\vec{AC}$"
      }
    ],
    "finalAnswer": "B. $-\\frac23\\vec{AB}+\\frac14\\vec{AC}$",
    "commonMistakes": [
      "Cộng AP và AQ thay vì lấy AQ−AP."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s004",
    "questionId": "math10-m5-q004",
    "recognition": "Dạng hai điểm chia cạnh: đổi tỉ số thành vectơ vị trí AE, AF rồi lấy AF−AE.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai điểm chia cạnh: đổi tỉ số thành vectơ vị trí AE, AF rồi lấy AF−AE."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AE}=\\frac23\\vec{AB}$, $\\vec{AF}=\\frac14\\vec{AD}$ nên $\\vec{EF}=\\vec{AF}-\\vec{AE}=-\\frac23\\vec{AB}+\\frac14\\vec{AD}$.",
        "result": "$-\\frac23\\vec{AB}+\\frac14\\vec{AD}$"
      }
    ],
    "finalAnswer": "B. $-\\frac23\\vec{AB}+\\frac14\\vec{AD}$",
    "commonMistakes": [
      "Đọc sai tỉ số AE:EB thành AE=2AB."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s005",
    "questionId": "math10-m5-q005",
    "recognition": "Dạng biểu diễn rồi nhân vô hướng: trước hết tính MN=AN−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng biểu diễn rồi nhân vô hướng: trước hết tính MN=AN−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{MN}=\\frac23\\vec{AC}-\\frac12\\vec{AB}$; nhân 6 được $6\\vec{MN}=-3\\vec{AB}+4\\vec{AC}$.",
        "result": "$-3\\vec{AB}+4\\vec{AC}$"
      }
    ],
    "finalAnswer": "B. $-3\\vec{AB}+4\\vec{AC}$",
    "commonMistakes": [
      "Nhầm chiều MN thành NM."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s006",
    "questionId": "math10-m5-q006",
    "recognition": "Dạng nhận biết cùng phương bằng tọa độ: kiểm tra một vectơ có là bội của vectơ kia hay không.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng nhận biết cùng phương bằng tọa độ: kiểm tra một vectơ có là bội của vectơ kia hay không."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u=2\\vec v$ với hệ số dương nên hai vectơ cùng phương, cùng hướng.",
        "result": "Cùng phương, cùng hướng"
      }
    ],
    "finalAnswer": "A. Cùng phương, cùng hướng",
    "commonMistakes": [
      "Chỉ so sánh độ dài mà không so sánh hai tọa độ."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s007",
    "questionId": "math10-m5-q007",
    "recognition": "Dạng ba điểm thẳng hàng: lập hai vectơ có chung điểm đầu A rồi kiểm tra cùng phương.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng ba điểm thẳng hàng: lập hai vectơ có chung điểm đầu A rồi kiểm tra cùng phương."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AB}=(2;4)$, $\\vec{AC}=(3;6)=\\frac32\\vec{AB}$ nên A, B, C thẳng hàng.",
        "result": "A, B, C thẳng hàng"
      }
    ],
    "finalAnswer": "A. A, B, C thẳng hàng",
    "commonMistakes": [
      "Kết luận từ hình dung tọa độ mà không lập hai vectơ chung gốc."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s008",
    "questionId": "math10-m5-q008",
    "recognition": "Dạng thẳng hàng qua hai vectơ cùng gốc A: so sánh cặp hệ số theo AB, AC.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng thẳng hàng qua hai vectơ cùng gốc A: so sánh cặp hệ số theo AB, AC."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=2\\vec{AN}$ nên AM và AN cùng phương; vì chung gốc A, ba điểm A, M, N thẳng hàng.",
        "result": "A, M, N thẳng hàng"
      }
    ],
    "finalAnswer": "A. A, M, N thẳng hàng",
    "commonMistakes": [
      "Cho rằng cùng phương chưa đủ dù hai vectơ đã có chung gốc A."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s009",
    "questionId": "math10-m5-q009",
    "recognition": "Dạng cùng phương có tham số: dùng định thức tọa độ bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng cùng phương có tham số: dùng định thức tọa độ bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$6m-2\\cdot3=0 \\Leftrightarrow m=1$.",
        "result": "$m=1$"
      }
    ],
    "finalAnswer": "A. $m=1$",
    "commonMistakes": [
      "Đặt m/3=6/2, đảo một trong hai tỉ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s010",
    "questionId": "math10-m5-q010",
    "recognition": "Dạng tọa độ ba điểm thẳng hàng: lập AB, AC rồi cho định thức bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tọa độ ba điểm thẳng hàng: lập AB, AC rồi cho định thức bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AB}=(2;3)$, $\\vec{AC}=(m-1;6)$. Điều kiện $2\\cdot6-3(m-1)=0$ cho $m=5$.",
        "result": "$m=5$"
      }
    ],
    "finalAnswer": "B. $m=5$",
    "commonMistakes": [
      "Dùng tọa độ điểm thay cho tọa độ vectơ."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s011",
    "questionId": "math10-m5-q011",
    "recognition": "Dạng thẳng hàng theo hai vectơ cơ sở: hai cặp hệ số phải tỉ lệ.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng thẳng hàng theo hai vectơ cơ sở: hai cặp hệ số phải tỉ lệ."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Điều kiện $(m+1)/3=2/6=1/3$ nên $m+1=1$, suy ra $m=0$.",
        "result": "$m=0$"
      }
    ],
    "finalAnswer": "B. $m=0$",
    "commonMistakes": [
      "So sánh chéo sai cặp hệ số AB và AC."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s012",
    "questionId": "math10-m5-q012",
    "recognition": "Dạng cùng phương khi tham số xuất hiện ở cả hai tọa độ: dùng định thức để tránh chia cho biểu thức có thể bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng cùng phương khi tham số xuất hiện ở cả hai tọa độ: dùng định thức để tránh chia cho biểu thức có thể bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$2(m-1)-(m+1)=0 \\Leftrightarrow m-3=0$, nên $m=3$.",
        "result": "$m=3$"
      }
    ],
    "finalAnswer": "C. $m=3$",
    "commonMistakes": [
      "Chia hai tọa độ trước khi kiểm tra mẫu số."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s013",
    "questionId": "math10-m5-q013",
    "recognition": "Dạng cùng phương dẫn đến phương trình bậc hai: lập định thức rồi dùng hệ thức Viète cho tổng nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng cùng phương dẫn đến phương trình bậc hai: lập định thức rồi dùng hệ thức Viète cho tổng nghiệm."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$3m-(m+1)(2m-1)=0 \\Leftrightarrow 2m^2-2m-1=0$. Tổng hai nghiệm bằng $-(-2)/2=1$.",
        "result": "$1$"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Giải gần đúng rồi cộng sai thay vì dùng Viète."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s014",
    "questionId": "math10-m5-q014",
    "recognition": "Dạng hai trung điểm: có thể dùng trực tiếp định lí đường trung bình hoặc lấy AN−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai trung điểm: có thể dùng trực tiếp định lí đường trung bình hoặc lấy AN−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{MN}=\\frac12\\vec{AC}-\\frac12\\vec{AB}=\\frac12(\\vec{AC}-\\vec{AB})=\\frac12\\vec{BC}$.",
        "result": "$\\frac12\\vec{BC}$"
      }
    ],
    "finalAnswer": "A. $\\vec{MN}=\\frac12\\vec{BC}$",
    "commonMistakes": [
      "Đảo chiều BC thành CB."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s015",
    "questionId": "math10-m5-q015",
    "recognition": "Dạng hai điểm chia cạnh: viết AM, AN theo cùng gốc A rồi lấy AN−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai điểm chia cạnh: viết AM, AN theo cùng gốc A rồi lấy AN−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac13\\vec{AB}$, $\\vec{AN}=\\frac12\\vec{AC}$ nên $\\vec{MN}=-\\frac13\\vec{AB}+\\frac12\\vec{AC}$.",
        "result": "$-\\frac13\\vec{AB}+\\frac12\\vec{AC}$"
      }
    ],
    "finalAnswer": "B. $-\\frac13\\vec{AB}+\\frac12\\vec{AC}$",
    "commonMistakes": [
      "Đổi tỉ số 1:2 thành AM=1/2 AB."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s016",
    "questionId": "math10-m5-q016",
    "recognition": "Dạng lấy hiệu hai vectơ vị trí: PQ=AQ−AP nên hệ số AB đổi dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng lấy hiệu hai vectơ vị trí: PQ=AQ−AP nên hệ số AB đổi dấu."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{PQ}=-\\frac14\\vec{AB}+\\frac34\\vec{AC}$, do đó hệ số cần tìm là $-1/4$.",
        "result": "$-\\frac14$"
      }
    ],
    "finalAnswer": "A. $-\\frac14$",
    "commonMistakes": [
      "Giữ nguyên dấu của hệ số trong AP."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s017",
    "questionId": "math10-m5-q017",
    "recognition": "Dạng nhiều điểm chia đoạn: xác định đúng phần của điểm gần mỗi đầu mút trước khi lấy AN−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng nhiều điểm chia đoạn: xác định đúng phần của điểm gần mỗi đầu mút trước khi lấy AN−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac23\\vec{AB}+\\frac13\\vec{AC}$, $\\vec{AN}=\\frac34\\vec{AC}$. Vậy $x=-2/3$, $y=5/12$, nên $x+y=-1/4$.",
        "result": "$-\\frac14$"
      }
    ],
    "finalAnswer": "A. $-\\frac14$",
    "commonMistakes": [
      "Đổi BM:MC=1:2 thành hệ số AB=1/3 thay vì 2/3."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s018",
    "questionId": "math10-m5-q018",
    "recognition": "Dạng hai điểm nằm trên hai cạnh liên tiếp: biểu diễn AQ theo A trước rồi lấy AQ−AP.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai điểm nằm trên hai cạnh liên tiếp: biểu diễn AQ theo A trước rồi lấy AQ−AP."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AP}=\\frac25\\vec{AB}$; $\\vec{AQ}=\\vec{AB}+\\frac13\\vec{BC}=\\frac23\\vec{AB}+\\frac13\\vec{AC}$. Do đó $x=4/15,y=1/3$, nên $x+y=3/5$.",
        "result": "$\\frac35$"
      }
    ],
    "finalAnswer": "B. $\\frac35$",
    "commonMistakes": [
      "Cho AQ=1/3 AC dù Q nằm trên BC."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s019",
    "questionId": "math10-m5-q019",
    "recognition": "Dạng điểm chia trên hai cạnh song song của hình bình hành: đặt A làm gốc và chú ý CD ngược hướng AB.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng điểm chia trên hai cạnh song song của hình bình hành: đặt A làm gốc và chú ý CD ngược hướng AB."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$F=C+\\frac13(D-C)$ nên $\\vec{AF}=\\frac23\\vec{AB}+\\vec{AD}$. Trừ $\\vec{AE}=\\frac13\\vec{AB}$ được $\\vec{EF}=\\frac13\\vec{AB}+\\vec{AD}$.",
        "result": "$\\frac13\\vec{AB}+\\vec{AD}$"
      }
    ],
    "finalAnswer": "A. $\\frac13\\vec{AB}+\\vec{AD}$",
    "commonMistakes": [
      "Cho CF cùng hướng AB thay vì ngược hướng."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s020",
    "questionId": "math10-m5-q020",
    "recognition": "Dạng điểm được tạo qua hai tầng chia đoạn: tìm vectơ vị trí M, N rồi lấy trung bình để có P.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng điểm được tạo qua hai tầng chia đoạn: tìm vectơ vị trí M, N rồi lấy trung bình để có P."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac14\\vec{AB}$, $\\vec{AN}=\\frac13\\vec{AB}+\\frac23\\vec{AC}$. Do P là trung điểm, $x=7/24,y=1/3$ nên $x+y=5/8$.",
        "result": "$\\frac58$"
      }
    ],
    "finalAnswer": "B. $\\frac58$",
    "commonMistakes": [
      "Lấy AP=AM+AN thay vì một nửa tổng."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s021",
    "questionId": "math10-m5-q021",
    "recognition": "Dạng trung điểm–trọng tâm: biểu diễn AM và AG theo cùng gốc A rồi tính AG−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng trung điểm–trọng tâm: biểu diễn AM và AG theo cùng gốc A rồi tính AG−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AG}=\\frac13(\\vec{AB}+\\vec{AC})$, $\\vec{AM}=\\frac12\\vec{AB}$. Suy ra $\\vec{MG}=-\\frac16\\vec{AB}+\\frac13\\vec{AC}$.",
        "result": "$-\\frac16\\vec{AB}+\\frac13\\vec{AC}$"
      }
    ],
    "finalAnswer": "B. $-\\frac16\\vec{AB}+\\frac13\\vec{AC}$",
    "commonMistakes": [
      "Ghi trọng tâm là một nửa tổng hai vectơ."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s022",
    "questionId": "math10-m5-q022",
    "recognition": "Dạng hai điểm chia cạnh không chung gốc: quy đổi cả M, N về vectơ vị trí từ A.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai điểm chia cạnh không chung gốc: quy đổi cả M, N về vectơ vị trí từ A."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac35\\vec{AB}+\\frac25\\vec{AC}$; $CN:NA=1:2$ nên $\\vec{AN}=\\frac23\\vec{AC}$. Vậy $x=-3/5,y=4/15$, tổng bằng $-1/3$.",
        "result": "$-\\frac13$"
      }
    ],
    "finalAnswer": "A. $-\\frac13$",
    "commonMistakes": [
      "Đổi CN:NA=1:2 thành AN=1/3 AC."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s023",
    "questionId": "math10-m5-q023",
    "recognition": "Dạng điểm trung gian là trung điểm của hai điểm chia cạnh: lấy trung bình hai vectơ vị trí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng điểm trung gian là trung điểm của hai điểm chia cạnh: lấy trung bình hai vectơ vị trí."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AP}=\\frac35\\vec{AB}$, $\\vec{AQ}=\\frac25\\vec{AC}$ nên $\\vec{AR}=\\frac3{10}\\vec{AB}+\\frac15\\vec{AC}$; do đó $x+y=1/2$.",
        "result": "$\\frac12$"
      }
    ],
    "finalAnswer": "B. $\\frac12$",
    "commonMistakes": [
      "Quên chia đôi khi tính vectơ đến trung điểm R."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s024",
    "questionId": "math10-m5-q024",
    "recognition": "Dạng nhiều điểm phụ thuộc: biểu diễn AM, AG và AN từ cùng gốc A rồi lấy AN−AM.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng nhiều điểm phụ thuộc: biểu diễn AM, AG và AN từ cùng gốc A rồi lấy AN−AM."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AM}=\\frac12(\\vec{AB}+\\vec{AC})$, $\\vec{AN}=2\\vec{AG}=\\frac23(\\vec{AB}+\\vec{AC})$. Vậy $\\vec{MN}=\\frac16(\\vec{AB}+\\vec{AC})$.",
        "result": "$\\frac16(\\vec{AB}+\\vec{AC})$"
      }
    ],
    "finalAnswer": "A. $\\frac16(\\vec{AB}+\\vec{AC})$",
    "commonMistakes": [
      "Nhầm AN=2GN thay vì AN=2AG."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s025",
    "questionId": "math10-m5-q025",
    "recognition": "Dạng tích vô hướng từ độ dài và góc: thay trực tiếp vào |u||v|cosα.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tích vô hướng từ độ dài và góc: thay trực tiếp vào |u||v|cosα."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec v=2\\cdot3\\cdot\\cos60^\\circ=3$.",
        "result": "$3$"
      }
    ],
    "finalAnswer": "A. $3$",
    "commonMistakes": [
      "Quên nhân cos của góc."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s026",
    "questionId": "math10-m5-q026",
    "recognition": "Dạng nhận biết vuông góc: góc 90° làm cos bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng nhận biết vuông góc: góc 90° làm cos bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec v=|u||v|\\cos90^\\circ=0$.",
        "result": "$0$"
      }
    ],
    "finalAnswer": "B. $0$",
    "commonMistakes": [
      "Cho tích vô hướng bằng tích hai độ dài."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s027",
    "questionId": "math10-m5-q027",
    "recognition": "Dạng hai vectơ ngược hướng: góc giữa chúng là 180°, nên cos bằng −1.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai vectơ ngược hướng: góc giữa chúng là 180°, nên cos bằng −1."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec v=4\\cdot5\\cos180^\\circ=-20$.",
        "result": "$-20$"
      }
    ],
    "finalAnswer": "B. $-20$",
    "commonMistakes": [
      "Coi ngược hướng có góc 0°."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s028",
    "questionId": "math10-m5-q028",
    "recognition": "Dạng tích vô hướng trong tam giác với hai vectơ chung gốc A: góc giữa chính là góc BAC.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tích vô hướng trong tam giác với hai vectơ chung gốc A: góc giữa chính là góc BAC."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AB}\\cdot\\vec{AC}=5\\cdot7\\cos60^\\circ=35/2$.",
        "result": "$\\frac{35}{2}$"
      }
    ],
    "finalAnswer": "A. $\\frac{35}{2}$",
    "commonMistakes": [
      "Dùng sin60° thay cho cos60°."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s029",
    "questionId": "math10-m5-q029",
    "recognition": "Dạng hai vectơ không chung gốc theo góc hình học: góc giữa AB và BC là góc bù của góc ABC.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai vectơ không chung gốc theo góc hình học: góc giữa AB và BC là góc bù của góc ABC."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Góc giữa $\\vec{AB}$ và $\\vec{BC}$ bằng $120^\\circ$, nên tích bằng $a^2\\cos120^\\circ=-a^2/2$.",
        "result": "$-\\frac{a^2}{2}$"
      }
    ],
    "finalAnswer": "C. $-\\frac{a^2}{2}$",
    "commonMistakes": [
      "Dùng góc ABC=60° mà không đảo hướng BA thành AB."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s030",
    "questionId": "math10-m5-q030",
    "recognition": "Dạng tìm góc từ tích vô hướng: tính cos bằng tích vô hướng chia tích độ dài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tìm góc từ tích vô hướng: tính cos bằng tích vô hướng chia tích độ dài."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\cos\\alpha=-12/(3\\cdot8)=-1/2$, với $0^\\circ\\leq\\alpha\\leq180^\\circ$ nên $\\alpha=120^\\circ$.",
        "result": "$120^\\circ$"
      }
    ],
    "finalAnswer": "C. $120^\\circ$",
    "commonMistakes": [
      "Bỏ dấu âm và chọn góc 60°."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s031",
    "questionId": "math10-m5-q031",
    "recognition": "Dạng tích vô hướng của hai đường chéo: nhận ra AC vuông góc BD trong hình vuông.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tích vô hướng của hai đường chéo: nhận ra AC vuông góc BD trong hình vuông."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Hai đường chéo hình vuông vuông góc nên $\\vec{AC}\\cdot\\vec{BD}=0$.",
        "result": "$0$"
      }
    ],
    "finalAnswer": "B. $0$",
    "commonMistakes": [
      "Cho rằng hai đường chéo cùng độ dài nên tích vô hướng dương."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s032",
    "questionId": "math10-m5-q032",
    "recognition": "Dạng tích vô hướng khi chỉ biết ba cạnh: dùng bình phương AB+BC=AC để tránh xác định trực tiếp góc bù.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tích vô hướng khi chỉ biết ba cạnh: dùng bình phương AB+BC=AC để tránh xác định trực tiếp góc bù."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$|\\vec{AB}+\\vec{BC}|^2=|\\vec{AC}|^2$, nên $49=16+25+2\\vec{AB}\\cdot\\vec{BC}$; suy ra tích bằng 4.",
        "result": "$4$"
      }
    ],
    "finalAnswer": "C. $4$",
    "commonMistakes": [
      "Dùng định lí cosin với góc B nhưng quên góc giữa AB và BC là góc bù."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s033",
    "questionId": "math10-m5-q033",
    "recognition": "Dạng suy ngược tích vô hướng từ độ dài hiệu rồi tìm góc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng suy ngược tích vô hướng từ độ dài hiệu rồi tìm góc."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$7=4+9-2\\vec u\\cdot\\vec v$ nên $u\\cdot v=3$. Do đó $\\cos\\alpha=3/(2\\cdot3)=1/2$, suy ra $\\alpha=60^\\circ$.",
        "result": "$60^\\circ$"
      }
    ],
    "finalAnswer": "B. $60^\\circ$",
    "commonMistakes": [
      "Khai triển |u−v|² với dấu cộng ở hạng tử chéo."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s034",
    "questionId": "math10-m5-q034",
    "recognition": "Dạng tích vô hướng tọa độ: nhân hai hoành độ, hai tung độ rồi cộng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tích vô hướng tọa độ: nhân hai hoành độ, hai tung độ rồi cộng."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec v=3\\cdot4+(-2)\\cdot1=10$.",
        "result": "$10$"
      }
    ],
    "finalAnswer": "B. $10$",
    "commonMistakes": [
      "Cộng các tọa độ trước rồi mới nhân."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s035",
    "questionId": "math10-m5-q035",
    "recognition": "Dạng tọa độ điểm: phải lập tọa độ hai vectơ trước khi tính tích vô hướng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tọa độ điểm: phải lập tọa độ hai vectơ trước khi tính tích vô hướng."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AB}=(3;4)$, $\\vec{AC}=(-2;3)$ nên tích bằng $3(-2)+4\\cdot3=6$.",
        "result": "$6$"
      }
    ],
    "finalAnswer": "B. $6$",
    "commonMistakes": [
      "Nhân trực tiếp tọa độ A với B hoặc C."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s036",
    "questionId": "math10-m5-q036",
    "recognition": "Dạng tham số vuông góc: đặt tích vô hướng bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tham số vuông góc: đặt tích vô hướng bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$3m+2(-6)=0 \\Leftrightarrow 3m=12 \\Leftrightarrow m=4$.",
        "result": "$m=4$"
      }
    ],
    "finalAnswer": "D. $m=4$",
    "commonMistakes": [
      "Nhầm điều kiện vuông góc thành hai hệ số tỉ lệ."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s037",
    "questionId": "math10-m5-q037",
    "recognition": "Dạng tìm góc bằng tọa độ: kiểm tra tích vô hướng trước; nếu bằng 0 thì không cần tính độ dài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tìm góc bằng tọa độ: kiểm tra tích vô hướng trước; nếu bằng 0 thì không cần tính độ dài."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec v=1\\cdot2+2(-1)=0$ nên hai vectơ vuông góc, góc bằng $90^\\circ$.",
        "result": "$90^\\circ$"
      }
    ],
    "finalAnswer": "C. $90^\\circ$",
    "commonMistakes": [
      "Nhìn hai cặp tọa độ hoán đổi rồi kết luận cùng hướng."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s038",
    "questionId": "math10-m5-q038",
    "recognition": "Dạng tọa độ điểm có tham số và điều kiện vuông góc: lập AB bằng điểm cuối trừ điểm đầu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tọa độ điểm có tham số và điều kiện vuông góc: lập AB bằng điểm cuối trừ điểm đầu."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec{AB}=(2-m;2)$. Điều kiện $(2-m)\\cdot1+2(-2)=0$ cho $-m-2=0$, nên $m=-2$.",
        "result": "$m=-2$"
      }
    ],
    "finalAnswer": "A. $m=-2$",
    "commonMistakes": [
      "Lập AB=(m−2;−2), làm đảo toàn bộ dấu rồi xử lí không nhất quán."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s039",
    "questionId": "math10-m5-q039",
    "recognition": "Dạng tìm tham số từ góc tọa độ: lập công thức cos và dùng điều kiện m>0 để chọn nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tìm tham số từ góc tọa độ: lập công thức cos và dùng điều kiện m>0 để chọn nghiệm."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\cos45^\\circ=m/\\sqrt{m^2+1}$. Bình phương được $2m^2=m^2+1$, nên $m^2=1$; do $m>0$, $m=1$.",
        "result": "$m=1$"
      }
    ],
    "finalAnswer": "B. $m=1$",
    "commonMistakes": [
      "Bình phương xong giữ cả m=−1 dù đề cho m>0."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s040",
    "questionId": "math10-m5-q040",
    "recognition": "Dạng điều kiện vuông góc cơ bản: tích vô hướng bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng điều kiện vuông góc cơ bản: tích vô hướng bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Theo điều kiện vuông góc, $\\vec u\\cdot\\vec v=0$.",
        "result": "$0$"
      }
    ],
    "finalAnswer": "B. $0$",
    "commonMistakes": [
      "Nhầm tích vô hướng với tích độ dài."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s041",
    "questionId": "math10-m5-q041",
    "recognition": "Dạng bình phương vô hướng: một vectơ nhân chính nó bằng bình phương độ dài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng bình phương vô hướng: một vectơ nhân chính nó bằng bình phương độ dài."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$\\vec u\\cdot\\vec u=|\\vec u|^2=3^2=9$.",
        "result": "$9$"
      }
    ],
    "finalAnswer": "C. $9$",
    "commonMistakes": [
      "Cho u·u bằng chính độ dài u."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s042",
    "questionId": "math10-m5-q042",
    "recognition": "Dạng độ dài vectơ tọa độ: lấy căn tổng bình phương các thành phần.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng độ dài vectơ tọa độ: lấy căn tổng bình phương các thành phần."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$|\\vec u|=\\sqrt{3^2+4^2}=5$.",
        "result": "$5$"
      }
    ],
    "finalAnswer": "B. $5$",
    "commonMistakes": [
      "Quên khai căn và chọn 25."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s043",
    "questionId": "math10-m5-q043",
    "recognition": "Dạng độ dài tổng hai vectơ: bình phương tổng và dùng hạng tử chéo 2a·b.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng độ dài tổng hai vectơ: bình phương tổng và dùng hạng tử chéo 2a·b."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$|a+b|^2=|a|^2+|b|^2+2a\\cdot b=4+25+6=35$, nên độ dài bằng $\\sqrt{35}$.",
        "result": "$\\sqrt{35}$"
      }
    ],
    "finalAnswer": "C. $\\sqrt{35}$",
    "commonMistakes": [
      "Bỏ hệ số 2 trước tích vô hướng."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s044",
    "questionId": "math10-m5-q044",
    "recognition": "Dạng độ dài hiệu hai vectơ: bình phương hiệu có hạng tử chéo mang dấu trừ.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng độ dài hiệu hai vectơ: bình phương hiệu có hạng tử chéo mang dấu trừ."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$|a-b|^2=4+25-2\\cdot3=23$, nên $|a-b|=\\sqrt{23}$.",
        "result": "$\\sqrt{23}$"
      }
    ],
    "finalAnswer": "B. $\\sqrt{23}$",
    "commonMistakes": [
      "Dùng công thức của tổng và chọn √35."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s045",
    "questionId": "math10-m5-q045",
    "recognition": "Dạng tham số vuông góc: chuyển quan hệ hình học thành phương trình tích vô hướng bằng 0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tham số vuông góc: chuyển quan hệ hình học thành phương trình tích vô hướng bằng 0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$2m+1(-4)=0$ nên $2m=4$, suy ra $m=2$.",
        "result": "$m=2$"
      }
    ],
    "finalAnswer": "C. $m=2$",
    "commonMistakes": [
      "Đặt tỉ lệ tọa độ như điều kiện cùng phương."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s046",
    "questionId": "math10-m5-q046",
    "recognition": "Dạng độ dài tổ hợp vectơ: tính a·b trước rồi khai triển bình phương của 2a−b.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng độ dài tổ hợp vectơ: tính a·b trước rồi khai triển bình phương của 2a−b."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$a\\cdot b=3\\cdot4\\cos120^\\circ=-6$. Do đó $|2a-b|^2=4\\cdot9+16-4(-6)=76$, nên độ dài là $2\\sqrt{19}$.",
        "result": "$2\\sqrt{19}$"
      }
    ],
    "finalAnswer": "C. $2\\sqrt{19}$",
    "commonMistakes": [
      "Quên hệ số 4 trước a·b khi khai triển."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s047",
    "questionId": "math10-m5-q047",
    "recognition": "Dạng hai độ dài tổng–hiệu bằng nhau: bình phương hai vế để suy ra a·b=0.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng hai độ dài tổng–hiệu bằng nhau: bình phương hai vế để suy ra a·b=0."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "$|a+b|^2-|a-b|^2=4a\\cdot b=0$. Mà $a\\cdot b=m-6$, nên $m=6$.",
        "result": "$m=6$"
      }
    ],
    "finalAnswer": "D. $m=6$",
    "commonMistakes": [
      "Khai triển riêng hai bình phương rồi làm mất hạng tử chéo."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  },
  {
    "id": "math10-m5-s048",
    "questionId": "math10-m5-q048",
    "recognition": "Dạng tổng–hiệu vuông góc: kết hợp đẳng thức hình bình hành với điều kiện hai độ dài u, v bằng nhau.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng và chọn công cụ",
        "explanation": "Dạng tổng–hiệu vuông góc: kết hợp đẳng thức hình bình hành với điều kiện hai độ dài u, v bằng nhau."
      },
      {
        "order": 2,
        "title": "Thực hiện và kiểm tra",
        "explanation": "Vuông góc cho $(u+v)\\cdot(u-v)=|u|^2-|v|^2=0$, nên $|u|=|v|$. Lại có $10^2+6^2=2(|u|^2+|v|^2)=4|u|^2$, suy ra $|u|=\\sqrt{34}$.",
        "result": "$\\sqrt{34}$"
      }
    ],
    "finalAnswer": "C. $\\sqrt{34}$",
    "commonMistakes": [
      "Dùng 10+6=2|u| như độ dài đại số trên một đường thẳng."
    ],
    "reviewSuggestions": [
      "Đối chiếu chiều vectơ, cặp hệ số hoặc dấu của hạng tử chéo trước khi chốt đáp án."
    ]
  }
];
