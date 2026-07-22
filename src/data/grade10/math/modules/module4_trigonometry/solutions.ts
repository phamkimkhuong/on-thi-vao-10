import type { Solution } from '@/types';

export const g10MathModule4Solutions: Solution[] = [
  {
      id: 'math10-s44',
      questionId: 'math10-q44',
      recognition: 'Tính diện tích, bán kính đường tròn nội tiếp, ngoại tiếp của tam giác vuông.',
      detailedSteps: [
        {
          order: 1,
          title: 'Nhận dạng tam giác vuông',
          explanation: 'Ta nhận thấy ba cạnh của tam giác thỏa mãn: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.\nTheo định lí đảo của định lí Pythagore, tam giác này vuông với cạnh huyền bằng $10$, hai cạnh góc vuông bằng $6$ và $8$.',
          result: 'Tam giác vuông với hai cạnh góc vuông 6 và 8'
        },
        {
          order: 2,
          title: 'Tính diện tích S của tam giác',
          explanation: 'Vì tam giác vuông nên diện tích bằng nửa tích hai cạnh góc vuông:\n$S = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$.',
          result: 'S = 24'
        },
        {
          order: 3,
          title: 'Tính bán kính đường tròn ngoại tiếp R',
          explanation: 'Trong tam giác vuông, tâm đường tròn ngoại tiếp là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền:\n$R = \\frac{10}{2} = 5$.',
          result: 'R = 5'
        },
        {
          order: 4,
          title: 'Tính bán kính đường tròn nội tiếp r',
          explanation: 'Ta tính nửa chu vi: $p = \\frac{6 + 8 + 10}{2} = 12$.\nDùng công thức diện tích $S = pr \\Rightarrow r = \\frac{S}{p} = \\frac{24}{12} = 2$.',
          result: 'r = 2'
        }
      ],
      finalAnswer: 'S = 24, R = 5, r = 2',
      commonMistakes: [
        'Không nhận ra tam giác vuông nên dùng công thức Heron rất cồng kềnh và dễ tính toán sai số.',
        'Nhầm công thức tính nhanh bán kính $R$ và $r$.'
      ],
      reviewSuggestions: [
        'Nhận diện các bộ số Pythagore phổ biến (3-4-5, 6-8-10, 5-12-13...) sẽ giúp giải quyết bài toán cực kỳ nhanh chóng.'
      ]
    },
  {
      id: 'math10-s45',
      questionId: 'math10-q45',
      recognition: 'Tính cạnh thứ ba của tam giác sử dụng định lí Côsin khi biết hai cạnh và góc xen giữa.',
      detailedSteps: [
        {
          order: 1,
          title: 'Áp dụng định lí Côsin đối với cạnh a',
          explanation: 'Theo định lí Côsin, ta có hệ thức:\n$a^2 = b^2 + c^2 - 2bc \\cos A$.',
          result: 'a^2 = b^2 + c^2 - 2bc*cos(A)'
        },
        {
          order: 2,
          title: 'Thay số và thực hiện tính toán',
          explanation: 'Thay $b = 5, c = 8, A = 60^\\circ$ vào phương trình:\n$a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ$\n$a^2 = 25 + 64 - 80 \\cdot 0.5$\n$a^2 = 89 - 40 = 49$.',
          result: 'a^2 = 49'
        },
        {
          order: 3,
          title: 'Tính độ dài cạnh a',
          explanation: 'Do độ dài cạnh phải lớn hơn 0 nên ta có:\n$a = \\sqrt{49} = 7$.',
          result: 'a = 7'
        }
      ],
      finalAnswer: '7',
      commonMistakes: [
        'Tính toán nhầm dấu ở tích số cuối cùng: viết $2bc \\cos A$ thành cộng thay vì trừ.',
        'Nhớ sai giá trị $\\cos 60^\\circ$ thành $\\frac{\\sqrt{3}}{2}$ (đây là giá trị của $\\sin 60^\\circ$).'
      ],
      reviewSuggestions: [
        'Đảm bảo ghi nhớ đúng bảng giá trị lượng giác của các góc đặc biệt ($30^\\circ, 45^\\circ, 60^\\circ$).'
      ]
    },
  {
      id: 'math10-s46',
      questionId: 'math10-q46',
      recognition: 'Tìm cạnh chưa biết sử dụng định lí Sin khi biết hai góc và một cạnh.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thiết lập biểu thức định lí Sin',
          explanation: 'Theo định lí Sin, ta có mối quan hệ giữa các cạnh và góc tương ứng:\n$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.',
          result: 'a/sin(A) = b/sin(B)'
        },
        {
          order: 2,
          title: 'Rút ra công thức tính cạnh b',
          explanation: 'Từ hệ thức trên, ta suy ra:\n$b = \\frac{a \\cdot \\sin B}{\\sin A}$.',
          result: 'b = a*sin(B)/sin(A)'
        },
        {
          order: 3,
          title: 'Thay số và rút gọn kết quả',
          explanation: 'Thay $a = 4, A = 30^\\circ, B = 45^\\circ$ vào:\n$b = \\frac{4 \\cdot \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{4 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 4\\sqrt{2}$.',
          result: 'b = 4\\sqrt{2}'
        }
      ],
      finalAnswer: '4\\sqrt{2}',
      commonMistakes: [
        'Nhầm công thức định lí Sin: viết $\\frac{a}{\\cos A}$ hoặc lấy nhầm cạnh chia cho sin góc không tương ứng.',
        'Tính sai thương số phân số kép chứa căn.'
      ],
      reviewSuggestions: [
        'Định lí Sin phát biểu: Cạnh đối diện chia cho sin góc đối diện bằng nhau cho cả 3 góc. Luôn xác định đúng cặp cạnh - góc đối diện.'
      ]
    },
  {
      id: 'math10-s47',
      questionId: 'math10-q47',
      recognition: 'Tính diện tích tam giác theo công thức Heron khi biết độ dài 3 cạnh.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính nửa chu vi p của tam giác',
          explanation: 'Nửa chu vi tam giác $p$ là:\n$p = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = 21$.',
          result: 'p = 21'
        },
        {
          order: 2,
          title: 'Áp dụng công thức Heron để tính diện tích',
          explanation: 'Theo công thức Heron, diện tích tam giác được tính bởi:\n$S = \\sqrt{p(p-a)(p-b)(p-c)}$.',
          result: 'S = sqrt(p(p-a)(p-b)(p-c))'
        },
        {
          order: 3,
          title: 'Thay số và tính kết quả',
          explanation: 'Thay $p = 21, a = 13, b = 14, c = 15$ vào công thức:\n$S = \\sqrt{21 \\cdot (21-13) \\cdot (21-14) \\cdot (21-15)}$\n$S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.',
          result: 'S = 84'
        }
      ],
      finalAnswer: '84',
      commonMistakes: [
        'Nhầm lẫn công thức chu vi: chia sai mẫu số chu vi (chu vi thay vì nửa chu vi).',
        'Tính nhẩm sai tích số dưới dấu căn dẫn đến việc khai căn không ra số nguyên.'
      ],
      reviewSuggestions: [
        'Để tính tích dưới căn nhanh hơn, ta có thể phân tích thành các thừa số nguyên tố:\n$21 \\cdot 8 \\cdot 7 \\cdot 6 = (3 \\cdot 7) \\cdot 8 \\cdot 7 \\cdot (2 \\cdot 3) = (3^2) \\cdot (7^2) \\cdot (16) = (3 \\cdot 7 \\cdot 4)^2 = 84^2$.'
      ]
    },
  {
      id: 'math10-s48',
      questionId: 'math10-q48',
      recognition: 'Tính bán kính đường tròn nội tiếp tam giác thường bằng công thức diện tích.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính nửa chu vi p của tam giác',
          explanation: 'Nửa chu vi tam giác là:\n$p = \\frac{a + b + c}{2} = \\frac{7 + 8 + 5}{2} = 10$.',
          result: 'p = 10'
        },
        {
          order: 2,
          title: 'Tính diện tích S bằng công thức Heron',
          explanation: 'Ta có:\n$S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{10 \\cdot (10-7) \\cdot (10-8) \\cdot (10-5)}$\n$S = \\sqrt{10 \\cdot 3 \\cdot 2 \\cdot 5} = \\sqrt{300} = 10\\sqrt{3}$.',
          result: 'S = 10\\sqrt{3}'
        },
        {
          order: 3,
          title: 'Tính bán kính đường tròn nội tiếp r',
          explanation: 'Từ hệ thức diện tích $S = pr$, ta suy ra:\n$r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3}$.',
          result: 'r = \\sqrt{3}'
        }
      ],
      finalAnswer: '\\sqrt{3}',
      commonMistakes: [
        'Không nhớ công thức tính bán kính đường tròn nội tiếp $r = S/p$.'
      ],
      reviewSuggestions: [
        'Công thức diện tích $S = pr$ liên kết chặt chẽ diện tích, nửa chu vi và bán kính đường tròn nội tiếp. Đây là cách chính để tìm $r$ trong đa số các bài toán tam giác thường.'
      ]
    },
  {
      id: 'math10-s49',
      questionId: 'math10-q49',
      recognition: 'Tính góc hoặc côsin của góc trong tam giác khi biết độ dài 3 cạnh.',
      detailedSteps: [
        {
          order: 1,
          title: 'Thiết lập công thức từ định lí Côsin',
          explanation: 'Theo định lí Côsin, ta có: $a^2 = b^2 + c^2 - 2bc \\cos A$.\nTừ đó suy ra hệ quả để tính côsin góc A:\n$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
          result: 'cos(A) = (b^2 + c^2 - a^2) / (2bc)'
        },
        {
          order: 2,
          title: 'Thay số và tính toán tỉ số',
          explanation: 'Thay các giá trị $a = 5, b = 6, c = 7$ vào công thức:\n$\\cos A = \\frac{6^2 + 7^2 - 5^2}{2 \\cdot 6 \\cdot 7} = \\frac{36 + 49 - 25}{84}$.',
          result: 'cos(A) = 60 / 84'
        },
        {
          order: 3,
          title: 'Rút gọn phân số',
          explanation: 'Rút gọn phân số $\\frac{60}{84}$ cho ước chung lớn nhất là $12$ ta được:\n$\\cos A = \\frac{5}{7}$.',
          result: 'cos(A) = 5/7'
        }
      ],
      finalAnswer: '5/7',
      commonMistakes: [
        'Nhầm vị trí các cạnh trong công thức: lấy lộn cạnh đối diện làm số hạng dương (nhầm thành $\\frac{a^2 + b^2 - c^2}{2ab}$ để tính $\\cos A$).'
      ],
      reviewSuggestions: [
        'Mẹo nhớ định lí Côsin: Số hạng mang dấu trừ ở trên tử luôn là bình phương cạnh đối diện với góc cần tính.'
      ]
    },
  {
      id: 'math10-s50',
      questionId: 'math10-q50',
      recognition: 'Giải bài toán đo chiều cao thực tế bằng cách thiết lập tam giác.',
      detailedSteps: [
        {
          order: 1,
          title: 'Dựng sơ đồ hình vẽ',
          explanation: 'Gọi tháp có chiều cao $h = CD$ ($D$ là chân tháp, $C$ là đỉnh tháp).\nĐiểm quan sát thứ nhất là $A$ với góc nâng $\\angle CAD = 30^\\circ$.\nĐiểm quan sát thứ hai là $B$ nằm giữa $A$ và $D$ với góc nâng $\\angle CBD = 60^\\circ$. Khoảng cách $AB = 50$m.',
          result: 'Thiết lập tam giác ABC'
        },
        {
          order: 2,
          title: 'Thiết lập biểu thức tính khoảng cách trên mặt đất theo h',
          explanation: 'Trong tam giác vuông $ADC$ và $BDC$, ta có:\n$AD = \\frac{h}{\\tan 30^\\circ} = h\\sqrt{3}$.\n$BD = \\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$.',
          result: 'AD = h*sqrt(3), BD = h/sqrt(3)'
        },
        {
          order: 3,
          title: 'Lập phương trình và giải tìm h',
          explanation: 'Do $A, B, D$ thẳng hàng nên:\n$AB = AD - BD \\Rightarrow 50 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}}$\n$50 = h \\left(\\frac{3 - 1}{\\sqrt{3}}\\right) = h \\frac{2}{\\sqrt{3}}$\n$\\Rightarrow h = \\frac{50 \\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.3$ (mét).\nLàm tròn đến hàng đơn vị mét ta được $43$ mét.',
          result: 'h = 43'
        }
      ],
      finalAnswer: '43m',
      commonMistakes: [
        'Thiết lập sai phương trình khoảng cách: lấy $AB = AD + BD$ do đặt sai vị trí điểm quan sát.',
        'Sử dụng sai hàm lượng giác (ví dụ dùng $\\sin$ thay vì $\\tan$).'
      ],
      reviewSuggestions: [
        'Phương pháp dùng hiệu của hai hàm $\\cot$ (hoặc $1/\\tan$) là dạng toán kinh điển để tính chiều cao khi biết khoảng cách dịch chuyển và hai góc nâng.'
      ]
    },
  {
      id: 'math10-s51',
      questionId: 'math10-q51',
      recognition: 'Tìm cạnh của tam giác từ diện tích và điều kiện góc tù.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính góc C từ diện tích tam giác',
          explanation: 'Ta có công thức diện tích tam giác: $S = \\frac{1}{2}ab \\sin C$.\nThay các giá trị đã biết vào:\n$5\\sqrt{3} = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin C \\Rightarrow 10 \\sin C = 5\\sqrt{3} \\Rightarrow \\sin C = \\frac{\\sqrt{3}}{2}$.',
          result: 'sin(C) = sqrt(3)/2'
        },
        {
          order: 2,
          title: 'Xác định số đo góc C từ điều kiện góc tù',
          explanation: 'Phương trình $\\sin C = \\frac{\\sqrt{3}}{2}$ cho ta hai giá trị góc trong khoảng $(0^\\circ; 180^\\circ)$ là $C = 60^\\circ$ hoặc $C = 120^\\circ$.\nVì đề bài cho biết góc $C$ là góc tù ($C > 90^\\circ$), nên ta nhận góc $C = 120^\\circ$.',
          result: 'C = 120 độ'
        },
        {
          order: 3,
          title: 'Tính cạnh c bằng định lí Côsin',
          explanation: 'Áp dụng định lí Côsin cho cạnh $c$:\n$c^2 = a^2 + b^2 - 2ab \\cos C$\n$c^2 = 4^2 + 5^2 - 2 \\cdot 4 \\cdot 5 \\cdot \\cos 120^\\circ$\n$c^2 = 16 + 25 - 40 \\cdot (-0.5) = 41 + 20 = 61$.\nDo đó, độ dài cạnh $c = \\sqrt{61}$.',
          result: 'c = \\sqrt{61}'
        }
      ],
      finalAnswer: '\\sqrt{61}',
      commonMistakes: [
        'Bỏ sót điều kiện "góc tù", lấy góc $C = 60^\\circ$ làm kết quả, dẫn đến tính ra $c^2 = 21 \\Rightarrow c = \\sqrt{21}$.',
        'Tính sai dấu của $\\cos 120^\\circ$: quên rằng cos của góc tù mang giá trị âm.'
      ],
      reviewSuggestions: [
        'Ghi nhớ: $\\cos(180^\\circ - x) = -\\cos x$. Do đó $\\cos 120^\\circ = -\\cos 60^\\circ = -0.5$. Góc tù thì giá trị cos luôn âm!'
      ]
    },
  {
      id: 'math10-s52',
      questionId: 'math10-q52',
      recognition: 'Bài toán thực tế về hai vật chuyển động rời nhau dưới một góc cho trước.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính quãng đường di chuyển của hai tàu',
          explanation: 'Sau 2 giờ:\n- Tàu thứ nhất đi được quãng đường: $OA = 15 \\text{ km/h} \\cdot 2 \\text{ h} = 30$ km.\n- Tàu thứ hai đi được quãng đường: $OB = 40 \\text{ km/h} \\cdot 2 \\text{ h} = 80$ km.',
          result: 'OA = 30km, OB = 80km'
        },
        {
          order: 2,
          title: 'Áp dụng định lí Côsin tính khoảng cách AB',
          explanation: 'Khoảng cách giữa hai tàu sau 2 giờ chính là độ dài đoạn $AB$ trong tam giác $OAB$ có góc $\\angle AOB = 60^\\circ$:\n$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos \\angle AOB$.',
          result: 'AB^2 = OA^2 + OB^2 - 2OA*OB*cos(60)'
        },
        {
          order: 3,
          title: 'Tính toán trị số',
          explanation: 'Thay số vào hệ thức:\n$AB^2 = 30^2 + 80^2 - 2 \\cdot 30 \\cdot 80 \\cdot \\cos 60^\\circ$\n$AB^2 = 900 + 6400 - 4800 \\cdot 0.5$\n$AB^2 = 7300 - 2400 = 4900$\n$\\Rightarrow AB = \\sqrt{4900} = 50$ (km).\nVậy khoảng cách giữa hai tàu sau 2 giờ là 50 km.',
          result: 'AB = 50'
        }
      ],
      finalAnswer: '50',
      commonMistakes: [
        'Tính sai quãng đường do quên nhân thời gian 2 giờ với vận tốc.',
        'Sử dụng công thức Pythagore $AB^2 = OA^2 + OB^2$ do nhầm lẫn góc di chuyển là $90^\\circ$.'
      ],
      reviewSuggestions: [
        'Đọc kĩ giả thiết để lấy đúng góc tạo bởi hướng đi của hai vật. Nếu đề cho lệch góc hướng bắc/đông thì cần vẽ hình phụ để tính đúng góc xen giữa.'
      ]
    },
  {
      id: 'math10-s53',
      questionId: 'math10-q53',
      recognition: 'Bài toán đo khoảng cách gián tiếp ra đảo sử dụng định lí Sin.',
      detailedSteps: [
        {
          order: 1,
          title: 'Tính số đo góc thứ ba trong tam giác ABC',
          explanation: 'Trong tam giác $ABC$, tổng ba góc bằng $180^\\circ$, do đó góc tại đảo $C$ là:\n$\\angle ACB = 180^\\circ - (\\angle CAB + \\angle CBA) = 180^\\circ - (80^\\circ + 70^\\circ) = 30^\\circ$.',
          result: 'góc C = 30 độ'
        },
        {
          order: 2,
          title: 'Áp dụng định lí Sin tìm khoảng cách AC',
          explanation: 'Theo định lí Sin, ta có tỉ số:\n$\\frac{AC}{\\sin \\angle CBA} = \\frac{AB}{\\sin \\angle ACB} \\Rightarrow \\frac{AC}{\\sin 70^\\circ} = \\frac{100}{\\sin 30^\\circ}$.',
          result: 'AC/sin(70) = 100/sin(30)'
        },
        {
          order: 3,
          title: 'Tính toán và làm tròn kết quả',
          explanation: 'Suy ra công thức tính $AC$:\n$AC = \\frac{100 \\cdot \\sin 70^\\circ}{\\sin 30^\\circ} = \\frac{100 \\cdot \\sin 70^\\circ}{0.5} = 200 \\cdot \\sin 70^\\circ$.\nVới $\\sin 70^\\circ \\approx 0.9397$, ta có:\n$AC \\approx 200 \\cdot 0.9397 = 187.94$ (mét).\nLàm tròn đến hàng đơn vị mét, khoảng cách từ bờ $A$ đến đảo $C$ là $188$ mét.',
          result: 'AC = 188'
        }
      ],
      finalAnswer: '188m',
      commonMistakes: [
        'Áp dụng sai định lí lượng giác (như dùng định lí Côsin khi không đủ dữ kiện cạnh).',
        'Tính sai góc $C$ do cộng nhẩm sai.'
      ],
      reviewSuggestions: [
        'Đây là phương pháp lượng giác hóa để định vị khoảng cách gián tiếp. Khi biết 1 cạnh và 2 góc kề, luôn tính góc còn lại trước rồi dùng định lí Sin để giải quyết các cạnh còn lại.'
      ]
    },
  {
      id: 'math10-s82',
      questionId: 'math10-q82',
      recognition: 'Dấu hiệu nhận biết: biết hai cạnh và góc xen giữa, cần cạnh còn lại; dùng định lý cosin.',
      detailedSteps: [
        {
          order: 1,
          title: 'Áp dụng định lý cosin',
          explanation: '$BC^2=AB^2+AC^2-2\\cdot AB\\cdot AC\\cos A=25+25-50\\cdot\\frac12=25$.',
          result: 'BC^2=25'
        },
        {
          order: 2,
          title: 'Lấy độ dài dương',
          explanation: 'Độ dài cạnh luôn dương nên $BC=5$.',
          result: 'BC=5'
        }
      ],
      finalAnswer: '5',
      commonMistakes: ['Quên hệ số 2 trong số hạng $2AB\\cdot AC\\cos A$.'],
      reviewSuggestions: ['Nhận diện dữ kiện cạnh–góc xen giữa–cạnh là tín hiệu trực tiếp của định lý cosin.']
    },
  {
      id: 'math10-s83',
      questionId: 'math10-q83',
      recognition: 'Dấu hiệu nhận biết: biết hai cạnh và góc xen giữa, yêu cầu diện tích; dùng $S=\\frac12ab\\sin C$.',
      detailedSteps: [
        {
          order: 1,
          title: 'Chọn đúng hai cạnh kề góc A',
          explanation: 'Hai cạnh AB và AC kề góc A nên $S=\\frac12\\cdot AB\\cdot AC\\cdot\\sin A$.',
          result: 'S=1/2·6·8·sin30°'
        },
        {
          order: 2,
          title: 'Tính giá trị',
          explanation: 'Vì $\\sin30^\\circ=\\frac12$, suy ra $S=\\frac12\\cdot6\\cdot8\\cdot\\frac12=12$.',
          result: 'S=12'
        }
      ],
      finalAnswer: '12',
      commonMistakes: ['Dùng cosin thay cho sin trong công thức diện tích.', 'Quên hệ số $\\frac12$.'],
      reviewSuggestions: ['Công thức diện tích dùng sin của góc xen giữa hai cạnh được nhân.']
    }
];
