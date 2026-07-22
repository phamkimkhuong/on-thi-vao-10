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
    }
];
