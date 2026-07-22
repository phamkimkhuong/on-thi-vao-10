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
    },
  {
    "id": "math10-m4-s001",
    "questionId": "math10-m4-q001",
    "recognition": "Dạng tính một yếu tố tam giác: nhận dạng bộ dữ kiện để chọn sin, cosin, Heron hoặc công thức bán kính ít ẩn nhất.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Biết hai cạnh và góc xen giữa, dùng $S=\\frac12bc\\sin A$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$S=\\frac12\\cdot6\\cdot8\\cdot1=24$.",
        "result": "24"
      }
    ],
    "finalAnswer": "A. $24$",
    "commonMistakes": [
      "Quên hệ số 1/2 trong công thức diện tích."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s002",
    "questionId": "math10-m4-q002",
    "recognition": "Dạng tính một yếu tố tam giác: nhận dạng bộ dữ kiện để chọn sin, cosin, Heron hoặc công thức bán kính ít ẩn nhất.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Biết ba cạnh, tính diện tích và nửa chu vi rồi dùng $S=pr$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Đường cao ứng với đáy 12 là 8 nên S=48; p=16, do đó r=48/16=3.",
        "result": "3"
      }
    ],
    "finalAnswer": "B. $3$",
    "commonMistakes": [
      "Dùng chu vi 32 thay cho nửa chu vi p."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s003",
    "questionId": "math10-m4-q003",
    "recognition": "Dạng tính một yếu tố tam giác: nhận dạng bộ dữ kiện để chọn sin, cosin, Heron hoặc công thức bán kính ít ẩn nhất.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dữ kiện một cặp cạnh–góc đối diện gợi hệ thức $a/\\sin A=2R$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$2R=8/(1/2)=16$, nên R=8.",
        "result": "8"
      }
    ],
    "finalAnswer": "C. $8$",
    "commonMistakes": [
      "Quên hệ số 2 trước R."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s004",
    "questionId": "math10-m4-q004",
    "recognition": "Dạng tính một yếu tố tam giác: nhận dạng bộ dữ kiện để chọn sin, cosin, Heron hoặc công thức bán kính ít ẩn nhất.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Biết ba cạnh, dùng định lí cosin cho góc đối diện cạnh lớn nhất."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos C=(7^2+8^2-13^2)/(2\\cdot7\\cdot8)=-1/2$, nên C=120°.",
        "result": "120^\\circ"
      }
    ],
    "finalAnswer": "D. $120^\\circ$",
    "commonMistakes": [
      "Đặt cạnh 13 vào vị trí cạnh kề thay vì cạnh đối diện."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s005",
    "questionId": "math10-m4-q005",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Có một cạnh và hai góc, dùng định lí sin với đúng cặp a–A, b–B."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$b=a\\sin B/\\sin A=\\sqrt6(\\sqrt2/2)/(\\sqrt3/2)=2$.",
        "result": "2"
      }
    ],
    "finalAnswer": "A. $2$",
    "commonMistakes": [
      "Ghép cạnh b với sin A thay vì sin B."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s006",
    "questionId": "math10-m4-q006",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Hai cạnh bằng nhau thì hai góc đối diện bằng nhau."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "A=B=50°, nên C=180°−100°=80°.",
        "result": "80^\\circ"
      }
    ],
    "finalAnswer": "B. $80^\\circ$",
    "commonMistakes": [
      "Cho góc xen giữa bằng 50° mà không tính tổng ba góc."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s007",
    "questionId": "math10-m4-q007",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Kiểm tra hệ thức đảo Pythagore hoặc dùng cosin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$3^2+4^2=5^2$, nên góc đối diện cạnh 5 là góc vuông.",
        "result": "90^\\circ"
      }
    ],
    "finalAnswer": "C. $90^\\circ$",
    "commonMistakes": [
      "Cho góc đối diện cạnh lớn nhất là 60° theo hình vẽ phỏng đoán."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s008",
    "questionId": "math10-m4-q008",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Biết hai cạnh và góc xen giữa, dùng định lí cosin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$a^2=36+64-2\\cdot6\\cdot8\\cdot1/2=52$, nên $a=2\\sqrt{13}$.",
        "result": "2\\sqrt{13}"
      }
    ],
    "finalAnswer": "D. $2\\sqrt{13}$",
    "commonMistakes": [
      "Dùng định lí sin khi chưa có cặp cạnh–góc đối diện."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s009",
    "questionId": "math10-m4-q009",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tính C=90° rồi dùng định lí sin với cạnh huyền c."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$a=10\\sin30°=5$, $b=10\\sin60°=5\\sqrt3$.",
        "result": "(5;5\\sqrt3)"
      }
    ],
    "finalAnswer": "A. $(5;5\\sqrt3)$",
    "commonMistakes": [
      "Đổi vị trí a và b so với các góc đối diện."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s010",
    "questionId": "math10-m4-q010",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Biết ba cạnh, dùng hệ quả định lí cosin cho góc A."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos A=(8^2+9^2-7^2)/(2\\cdot8\\cdot9)=96/144=2/3$.",
        "result": "\\frac23"
      }
    ],
    "finalAnswer": "B. $\\frac23$",
    "commonMistakes": [
      "Trừ nhầm bình phương cạnh c thay vì cạnh a."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s011",
    "questionId": "math10-m4-q011",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Đây là trường hợp cạnh–cạnh–góc không xen giữa; kiểm tra khả năng góc B và 180°−B."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin B=b\\sin A/a=2/3$; cả B và 180°−B đều để C dương, nên có hai tam giác.",
        "result": "2"
      }
    ],
    "finalAnswer": "C. $2$",
    "commonMistakes": [
      "Máy tính chỉ trả một giá trị arcsin rồi kết luận có một tam giác."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s012",
    "questionId": "math10-m4-q012",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Hai cạnh kề góc C đã biết, dùng định lí cosin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$c^2=49+81-2\\cdot7\\cdot9\\cdot1/2=67$.",
        "result": "\\sqrt{67}"
      }
    ],
    "finalAnswer": "D. $\\sqrt{67}$",
    "commonMistakes": [
      "Cộng số hạng $2ab\\cos C$ thay vì trừ."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s013",
    "questionId": "math10-m4-q013",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tính C=30°, rồi dùng định lí sin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Vì C=A nên c=a=10; $b=10\\sin120°/\\sin30°=10\\sqrt3$.",
        "result": "20+10\\sqrt3"
      }
    ],
    "finalAnswer": "A. $20+10\\sqrt3$",
    "commonMistakes": [
      "Cho b=10 vì nhìn nhầm B bằng A."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s014",
    "questionId": "math10-m4-q014",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "So sánh bình phương cạnh lớn nhất với tổng bình phương hai cạnh còn lại."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$8^2=64<5^2+7^2=74$, nên góc lớn nhất vẫn là góc nhọn.",
        "result": "Góc nhọn"
      }
    ],
    "finalAnswer": "B. Góc nhọn",
    "commonMistakes": [
      "Cho rằng cạnh lớn nhất luôn đối diện góc tù."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s015",
    "questionId": "math10-m4-q015",
    "recognition": "Dạng giải tam giác: cần tìm nhiều yếu tố; kiểm tra tổng góc, cặp cạnh–góc đối diện và trường hợp SSA có thể cho hai nghiệm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tính C=60° rồi áp dụng định lí sin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$c=a\\sin60°/\\sin45°=4\\sqrt2(\\sqrt3/2)/(\\sqrt2/2)=4\\sqrt3$.",
        "result": "4\\sqrt3"
      }
    ],
    "finalAnswer": "C. $4\\sqrt3$",
    "commonMistakes": [
      "Dùng sin B thay vì sin C cho cạnh c."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s016",
    "questionId": "math10-m4-q016",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Mô hình là tam giác vuông, thang là cạnh huyền và độ cao đối diện góc 60°."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$h=5\\sin60°=5\\sqrt3/2$.",
        "result": "\\frac{5\\sqrt3}{2}"
      }
    ],
    "finalAnswer": "D. $\\frac{5\\sqrt3}{2}$",
    "commonMistakes": [
      "Dùng cos60° để tính cạnh đối diện."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s017",
    "questionId": "math10-m4-q017",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Chiều cao và bóng là hai cạnh góc vuông, dùng tang góc nâng."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$h=10\\tan45°=10$.",
        "result": "10"
      }
    ],
    "finalAnswer": "A. $10$",
    "commonMistakes": [
      "Dùng sin khi đã biết cạnh kề chứ không biết cạnh huyền."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s018",
    "questionId": "math10-m4-q018",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Hai quãng đường tạo hai cạnh góc vuông."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$d=\\sqrt{3^2+4^2}=5$ km.",
        "result": "5"
      }
    ],
    "finalAnswer": "B. $5$",
    "commonMistakes": [
      "Cộng trực tiếp hai quãng đường."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s019",
    "questionId": "math10-m4-q019",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Hai quãng đường và góc xen giữa đã biết, dùng định lí cosin."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$d^2=400+900-2\\cdot20\\cdot30\\cdot1/2=700$.",
        "result": "10\\sqrt7"
      }
    ],
    "finalAnswer": "C. $10\\sqrt7$",
    "commonMistakes": [
      "Dùng Pythagore dù góc không phải 90°."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s020",
    "questionId": "math10-m4-q020",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Khoảng cách nằm ngang là cạnh kề, chiều cao là cạnh đối."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$h=20\\tan30°=20/\\sqrt3=20\\sqrt3/3$.",
        "result": "\\frac{20\\sqrt3}{3}"
      }
    ],
    "finalAnswer": "D. $\\frac{20\\sqrt3}{3}$",
    "commonMistakes": [
      "Lấy $20/\\tan30°$ thay vì nhân."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s021",
    "questionId": "math10-m4-q021",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tam giác có C=90° và AB là cạnh huyền."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$AC=AB\\sin45°=100\\sqrt2/2=50\\sqrt2$.",
        "result": "50\\sqrt2"
      }
    ],
    "finalAnswer": "A. $50\\sqrt2$",
    "commonMistakes": [
      "Dùng AB làm cạnh góc vuông thay vì cạnh đối diện góc 90°."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s022",
    "questionId": "math10-m4-q022",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dốc là cạnh huyền; độ cao là cạnh đối diện góc nghiêng."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$h=8\\sin30°=4$.",
        "result": "4"
      }
    ],
    "finalAnswer": "B. $4$",
    "commonMistakes": [
      "Dùng cos30° và tính chiều dài chiếu ngang."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s023",
    "questionId": "math10-m4-q023",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Gọi khoảng cách từ điểm gần đến chân tháp là x, lập hai phương trình tang."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$h=x\\sqrt3=(x+40)/\\sqrt3$, suy ra 3x=x+40, x=20 và h=20\\sqrt3$.",
        "result": "20\\sqrt3"
      }
    ],
    "finalAnswer": "C. $20\\sqrt3$",
    "commonMistakes": [
      "Cộng hai khoảng cách theo sai thứ tự điểm gần–xa."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s024",
    "questionId": "math10-m4-q024",
    "recognition": "Dạng đo đạc thực tế: dựng tam giác từ phương nhìn, góc nâng hoặc hướng chuyển động; xác định rõ cạnh kề, đối và góc xen giữa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng định lí cosin và chú ý cos120° âm."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$d^2=3600+6400-2\\cdot60\\cdot80(-1/2)=14800$, nên $d=20\\sqrt{37}$.",
        "result": "20\\sqrt{37}"
      }
    ],
    "finalAnswer": "D. $20\\sqrt{37}$",
    "commonMistakes": [
      "Thay cos120° bằng +1/2 làm khoảng cách bị giảm."
    ],
    "reviewSuggestions": [
      "Vẽ tam giác và ghi cạnh đối diện từng góc trước khi chọn định lí."
    ]
  },
  {
    "id": "math10-m4-s025",
    "questionId": "math10-m4-q025",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng bảng giá trị lượng giác góc đặc biệt."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin30°=1/2$.",
        "result": "\\frac12"
      }
    ],
    "finalAnswer": "A. $\\frac12$",
    "commonMistakes": [
      "Nhầm sin30° với cos30°."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s026",
    "questionId": "math10-m4-q026",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng bảng góc đặc biệt."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos60°=1/2$.",
        "result": "\\frac12"
      }
    ],
    "finalAnswer": "B. $\\frac12$",
    "commonMistakes": [
      "Cho cos60° âm dù 60° là góc nhọn."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s027",
    "questionId": "math10-m4-q027",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang là tỉ số sin/cos tại cùng góc."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Sin45°=cos45°, nên tan45°=1.",
        "result": "1"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Nhầm tan45° với tan60°."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s028",
    "questionId": "math10-m4-q028",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "120° nằm trong góc phần tư II trên nửa đường tròn."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Ở khoảng (90°,180°), hoành độ âm nên cos âm.",
        "result": "Âm"
      }
    ],
    "finalAnswer": "D. Âm",
    "commonMistakes": [
      "Cho rằng sin và cos đều dương trên 0°–180°."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s029",
    "questionId": "math10-m4-q029",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng $\\sin(180°-\\alpha)=\\sin\\alpha$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin150°=\\sin30°=1/2$.",
        "result": "\\frac12"
      }
    ],
    "finalAnswer": "A. $\\frac12$",
    "commonMistakes": [
      "Đổi dấu sin của góc bù."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s030",
    "questionId": "math10-m4-q030",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "135°=180°−45° và cos đổi dấu."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos135°=-\\cos45°=-\\sqrt2/2$.",
        "result": "-\\frac{\\sqrt2}{2}"
      }
    ],
    "finalAnswer": "B. $-\\frac{\\sqrt2}{2}$",
    "commonMistakes": [
      "Giữ dấu dương cho cos góc tù."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s031",
    "questionId": "math10-m4-q031",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang góc bù đổi dấu."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\tan135°=-\\tan45°=-1$.",
        "result": "-1"
      }
    ],
    "finalAnswer": "C. $-1$",
    "commonMistakes": [
      "Cho tang dương trong góc phần tư II."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s032",
    "questionId": "math10-m4-q032",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Đọc tung độ điểm đầu của nửa đường tròn đơn vị."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Tại 0°, điểm có tọa độ (1;0), nên sin=0.",
        "result": "0"
      }
    ],
    "finalAnswer": "D. $0$",
    "commonMistakes": [
      "Nhầm sin0° với cos0°."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s033",
    "questionId": "math10-m4-q033",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Đọc hoành độ điểm cuối nửa đường tròn đơn vị."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Tại 180°, điểm là (−1;0), nên cos=−1.",
        "result": "-1"
      }
    ],
    "finalAnswer": "A. $-1$",
    "commonMistakes": [
      "Cho cos180° bằng 1 do bỏ dấu."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s034",
    "questionId": "math10-m4-q034",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Thay từng giá trị góc đặc biệt rồi cộng."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$1/2+1/2=1$.",
        "result": "1"
      }
    ],
    "finalAnswer": "B. $1$",
    "commonMistakes": [
      "Nhầm một trong hai giá trị thành √3/2."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s035",
    "questionId": "math10-m4-q035",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng hệ thức cơ bản $\\sin^2x+\\cos^2x=1$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Hệ thức đúng với mọi góc mà hai hàm được xác định.",
        "result": "1"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Bình phương tổng thay vì cộng hai bình phương."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s036",
    "questionId": "math10-m4-q036",
    "recognition": "Dạng giá trị góc: nhận diện góc đặc biệt và vị trí trên nửa đường tròn để chọn đúng độ lớn lẫn dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "120°=180°−60° và sin giữ nguyên."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin120°=\\sin60°=\\sqrt3/2$.",
        "result": "\\frac{\\sqrt3}{2}"
      }
    ],
    "finalAnswer": "D. $\\frac{\\sqrt3}{2}$",
    "commonMistakes": [
      "Cho sin góc tù mang dấu âm."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s037",
    "questionId": "math10-m4-q037",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Sin của hai góc bù bằng nhau."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin(180°-\\alpha)=\\sin\\alpha$.",
        "result": "\\sin\\alpha"
      }
    ],
    "finalAnswer": "A. $\\sin\\alpha$",
    "commonMistakes": [
      "Đổi dấu sin như đối với cos."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s038",
    "questionId": "math10-m4-q038",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Cos góc bù đối nhau."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos(180°-\\alpha)=-\\cos\\alpha$.",
        "result": "-\\cos\\alpha"
      }
    ],
    "finalAnswer": "B. $-\\cos\\alpha$",
    "commonMistakes": [
      "Giữ dấu của cos khi chuyển sang góc tù."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s039",
    "questionId": "math10-m4-q039",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang góc bù đổi dấu."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\tan(180°-\\alpha)=-\\tan\\alpha$.",
        "result": "-\\tan\\alpha"
      }
    ],
    "finalAnswer": "C. $-\\tan\\alpha$",
    "commonMistakes": [
      "Nhầm với công thức sin góc bù."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s040",
    "questionId": "math10-m4-q040",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng $\\cos^2\\alpha=1-\\sin^2\\alpha$ và chọn dấu theo góc nhọn."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\cos^2=16/25$; cos dương nên cos=4/5.",
        "result": "\\frac45"
      }
    ],
    "finalAnswer": "D. $\\frac45$",
    "commonMistakes": [
      "Quên chọn dấu phù hợp miền góc."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s041",
    "questionId": "math10-m4-q041",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng hệ thức cơ bản và sin dương trong góc phần tư II."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\sin^2=1-25/169=144/169$, nên sin=12/13.",
        "result": "\\frac{12}{13}"
      }
    ],
    "finalAnswer": "A. $\\frac{12}{13}$",
    "commonMistakes": [
      "Cho sin âm chỉ vì cos âm."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s042",
    "questionId": "math10-m4-q042",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang bằng sin chia cos."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$(3/5)/(4/5)=3/4$.",
        "result": "\\frac34"
      }
    ],
    "finalAnswer": "B. $\\frac34$",
    "commonMistakes": [
      "Đảo thành cos/sin."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s043",
    "questionId": "math10-m4-q043",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Nhận dạng hệ thức lượng giác cơ bản."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Đẳng thức đúng với mọi x.",
        "result": "1"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Cho rằng chỉ đúng với góc đặc biệt."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s044",
    "questionId": "math10-m4-q044",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Chia hệ thức $\\sin^2x+\\cos^2x=1$ cho $\\cos^2x$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$\\tan^2x+1=1/\\cos^2x$.",
        "result": "\\frac1{\\cos^2x}"
      }
    ],
    "finalAnswer": "D. $\\frac1{\\cos^2x}$",
    "commonMistakes": [
      "Chia sai và đổi sang 1/sin²x."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s045",
    "questionId": "math10-m4-q045",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng hệ thức cơ bản cho hai số hạng đầu."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Hai bình phương có tổng 1 và tan45°=1, nên kết quả 2.",
        "result": "2"
      }
    ],
    "finalAnswer": "A. $2$",
    "commonMistakes": [
      "Cộng sin30°+cos30° thay vì bình phương."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s046",
    "questionId": "math10-m4-q046",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng tam giác tỉ lệ 3–4–5 và xác định dấu ở góc phần tư II."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Sin dương, cos âm, và |tan|=3/4.",
        "result": "(\\frac35;-\\frac45)"
      }
    ],
    "finalAnswer": "B. $(\\frac35;-\\frac45)$",
    "commonMistakes": [
      "Cho cả sin và cos cùng âm."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s047",
    "questionId": "math10-m4-q047",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Thay $1-\\sin^2x=\\cos^2x$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Tử và mẫu bằng nhau, mẫu khác 0, nên thương bằng 1.",
        "result": "1"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Rút gọn mà không nhận dạng hệ thức cơ bản."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s048",
    "questionId": "math10-m4-q048",
    "recognition": "Dạng hệ thức lượng giác: dùng góc bù, sin²+cos²=1 và dấu của góc để chọn nghiệm đúng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Bình phương hai vế và dùng sin²+cos²=1."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$1/4=1+2\\sin x\\cos x$, nên tích bằng −3/8.",
        "result": "-\\frac38"
      }
    ],
    "finalAnswer": "D. $-\\frac38$",
    "commonMistakes": [
      "Viết $(sin+cos)^2=sin^2+cos^2$ và bỏ số hạng kép."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s049",
    "questionId": "math10-m4-q049",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Sin dương và bằng nhau tại hai góc bù."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Góc chuẩn 30°; góc còn lại là 180°−30°=150°.",
        "result": "x=30^\\circ\\text{ hoặc }150^\\circ"
      }
    ],
    "finalAnswer": "A. $x=30^\\circ\\text{ hoặc }150^\\circ$",
    "commonMistakes": [
      "Chỉ lấy góc nhọn do máy tính trả arcsin."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s050",
    "questionId": "math10-m4-q050",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Cos là hoành độ trên nửa đường tròn đơn vị."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Hoành độ bằng 0 tại điểm đỉnh (0;1), ứng với 90°.",
        "result": "x=90^\\circ"
      }
    ],
    "finalAnswer": "B. $x=90^\\circ$",
    "commonMistakes": [
      "Nhầm cos0° với 0."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s051",
    "questionId": "math10-m4-q051",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang dương ở góc phần tư I và âm ở góc phần tư II."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Góc chuẩn có tan=1 là 45°; 135° có tan=−1.",
        "result": "x=45^\\circ"
      }
    ],
    "finalAnswer": "C. $x=45^\\circ$",
    "commonMistakes": [
      "Lấy cả góc 135° vì chỉ xét độ lớn."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s052",
    "questionId": "math10-m4-q052",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Cos âm nên góc tù; góc phụ chuẩn là 30°."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$x=180°-30°=150°$.",
        "result": "x=150^\\circ"
      }
    ],
    "finalAnswer": "D. $x=150^\\circ$",
    "commonMistakes": [
      "Chọn 30° và bỏ dấu âm."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s053",
    "questionId": "math10-m4-q053",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng hệ thức cơ bản rồi chọn cos âm cho góc tù."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$|cos|=3/5$; vì α>90° nên cos=−3/5.",
        "result": "-\\frac35"
      }
    ],
    "finalAnswer": "A. $-\\frac35$",
    "commonMistakes": [
      "Luôn lấy căn dương."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s054",
    "questionId": "math10-m4-q054",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Thay hai giá trị đều bằng 1/2."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$2(1/2)-3(1/2)=1-3/2=-1/2$.",
        "result": "-\\frac12"
      }
    ],
    "finalAnswer": "B. $-\\frac12$",
    "commonMistakes": [
      "Nhầm cos60° thành √3/2."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s055",
    "questionId": "math10-m4-q055",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Trên khoảng góc tam giác, cos âm đúng ở (90°,180°)."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Do đó A là góc tù.",
        "result": "Góc tù"
      }
    ],
    "finalAnswer": "C. Góc tù",
    "commonMistakes": [
      "Cho rằng cos của mọi góc tam giác đều dương."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s056",
    "questionId": "math10-m4-q056",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tang âm ở góc phần tư II; góc chuẩn là 45°."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$x=180°-45°=135°$.",
        "result": "x=135^\\circ"
      }
    ],
    "finalAnswer": "D. $x=135^\\circ$",
    "commonMistakes": [
      "Lấy 45° vì tan45° có cùng độ lớn."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s057",
    "questionId": "math10-m4-q057",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Đưa về cos x=1/2 và xét dấu."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Cos dương chỉ ở [0°,90°), nên nhận x=60°.",
        "result": "x=60^\\circ"
      }
    ],
    "finalAnswer": "A. $x=60^\\circ$",
    "commonMistakes": [
      "Dùng tính đối xứng của sin và lấy thêm 120°."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s058",
    "questionId": "math10-m4-q058",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tính cos từ bộ 5–12–13 và chọn dấu âm."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$cos=-5/13$, nên tan=(12/13)/(−5/13)=−12/5.",
        "result": "-\\frac{12}{5}"
      }
    ],
    "finalAnswer": "B. $-\\frac{12}{5}$",
    "commonMistakes": [
      "Cho cos dương và làm tan dương."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s059",
    "questionId": "math10-m4-q059",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Dùng $1-\\cos^2x=\\sin^2x$."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "Tử bằng mẫu khác 0 nên P=1.",
        "result": "1"
      }
    ],
    "finalAnswer": "C. $1$",
    "commonMistakes": [
      "Đổi nhầm thành cos²/sin²."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  },
  {
    "id": "math10-m4-s060",
    "questionId": "math10-m4-q060",
    "recognition": "Dạng suy luận từ giá trị lượng giác: xác định góc chuẩn và dấu, hoặc khôi phục các tỉ số còn lại từ một tỉ số đã biết.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận dạng dữ kiện",
        "explanation": "Tính sin dương từ bộ 8–15–17 rồi suy ra tan âm."
      },
      {
        "order": 2,
        "title": "Áp dụng và kiểm tra",
        "explanation": "$sin=15/17$, $tan=-15/8$; tổng $120/136-255/136=-135/136$.",
        "result": "-\\frac{135}{136}"
      }
    ],
    "finalAnswer": "D. $-\\frac{135}{136}$",
    "commonMistakes": [
      "Cộng phân số sai hoặc chọn sai dấu cos."
    ],
    "reviewSuggestions": [
      "Đặt góc trên nửa đường tròn để kiểm tra dấu trước khi biến đổi."
    ]
  }
];
