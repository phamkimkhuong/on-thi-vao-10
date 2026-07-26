import type { TheoryBlock, TheoryFormulaVariable } from '@/data/schema';

const variable = (
  symbol: string,
  meaning: string,
  unit?: string,
  note?: string
): TheoryFormulaVariable => ({ symbol, meaning, unit, note });

const block = (
  value: Omit<
    TheoryBlock,
    'courseId' | 'moduleId' | 'sourceIds' | 'reviewStatus'
  >
): TheoryBlock => ({
  courseId: 'grade11:physics',
  moduleId: 'phy11-m4',
  sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
  reviewStatus: 'source_checked',
  ...value
});

export const phy11Module4Theory: TheoryBlock[] = [
  block({
    id: 'phy11-theory-m4-microscopic-current',
    lessonIds: ['phy11-kntt-l22'],
    outcomeIds: ['out-phy11-m4-01'],
    questionTypeIds: ['phy11-qt24'],
    title: 'Cường độ dòng điện ở mức vi mô',
    objectives: [
      'Giải thích dòng điện là chuyển động có hướng của hạt tải điện.',
      'Liên hệ cường độ dòng điện với mật độ hạt, tiết diện và tốc độ trôi.',
      'Phân biệt tốc độ trôi với tốc độ lan truyền tín hiệu điện.'
    ],
    content:
      'Trong kim loại, electron tự do chuyển động nhiệt hỗn loạn; khi có điện trường, chúng có thêm chuyển động có hướng ngược chiều điện trường. Chiều dòng điện quy ước là chiều chuyển động của điện tích dương nên ngược chiều chuyển động có hướng của electron. Tốc độ trôi của hạt tải rất nhỏ so với tốc độ thiết lập điện trường trong mạch.',
    formulas: [
      {
        id: 'phy11-formula-m4-microscopic-current',
        label: 'Cường độ dòng điện theo mô hình vi mô',
        expression: 'I=n|q|Sv_d',
        variables: [
          variable('I', 'cường độ dòng điện', 'A'),
          variable('n', 'mật độ hạt tải điện', 'm⁻³'),
          variable('|q|', 'độ lớn điện tích mỗi hạt tải', 'C'),
          variable('S', 'diện tích tiết diện dây', 'm²'),
          variable('v_d', 'tốc độ dịch chuyển có hướng', 'm/s')
        ],
        conditions: ['Mật độ hạt và tốc độ trôi được coi gần như đều trên tiết diện dây.']
      }
    ],
    keyPoints: [
      'Đổi $\\text{mm}^2$ sang $\\text{m}^2$ trước khi tính.',
      'Dùng độ lớn điện tích hạt tải để tính độ lớn I.',
      'Electron không chạy từ công tắc đến bóng đèn với tốc độ của tín hiệu điện.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-microscopic-current',
        title: 'Tính dòng điện từ hạt tải',
        problem: 'Dây có $n=8,5\\times10^{28}$ m⁻³, $S=1,0$ mm², $v_d=7,4\\times10^{-5}$ m/s; mỗi electron có $|e|=1,6\\times10^{-19}$ C.',
        steps: [
          'Đổi $S=1,0\\times10^{-6}$ m².',
          'Tính $I=n|e|Sv_d\\approx1,0$ A.'
        ],
        answer: '$I\\approx1,0$ A.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-microscopic-current',
        question: 'Trong kim loại, chiều chuyển động có hướng của electron so với chiều dòng điện quy ước thế nào?',
        options: ['Cùng chiều', 'Ngược chiều', 'Vuông góc', 'Không xác định'],
        correctAnswer: 'B',
        explanation: 'Electron mang điện âm nên chuyển động có hướng ngược chiều dòng điện quy ước.'
      }
    ],
    orderIndex: 1
  }),
  block({
    id: 'phy11-theory-m4-charge-current',
    lessonIds: ['phy11-kntt-l22'],
    outcomeIds: ['out-phy11-m4-02'],
    questionTypeIds: ['phy11-qt25'],
    title: 'Điện lượng và cường độ dòng điện',
    objectives: [
      'Nêu được ý nghĩa của cường độ dòng điện.',
      'Tính điện lượng qua tiết diện dây trong một khoảng thời gian.',
      'Quy đổi điện lượng thành số hạt tải điện.'
    ],
    content:
      'Cường độ dòng điện cho biết lượng điện tích dịch chuyển qua một tiết diện thẳng của vật dẫn trong một đơn vị thời gian. Dòng điện không đổi có chiều và cường độ không thay đổi theo thời gian. Một ampere tương ứng một coulomb điện lượng qua tiết diện trong một giây.',
    formulas: [
      {
        id: 'phy11-formula-m4-current-definition',
        label: 'Định nghĩa cường độ dòng điện',
        expression: 'I=\\frac{\\Delta q}{\\Delta t}',
        variables: [
          variable('\\Delta q', 'điện lượng qua tiết diện', 'C'),
          variable('\\Delta t', 'khoảng thời gian khảo sát', 's')
        ],
        conditions: ['I là giá trị trung bình trong khoảng thời gian; với dòng không đổi, I có giá trị không đổi.']
      },
      {
        id: 'phy11-formula-m4-carrier-count',
        label: 'Điện lượng và số hạt tải',
        expression: '\\Delta q=N|q_0|',
        variables: [
          variable('N', 'số hạt tải đi qua tiết diện'),
          variable('|q_0|', 'độ lớn điện tích mỗi hạt', 'C')
        ],
        conditions: ['Các hạt tải được xét cùng loại và có cùng độ lớn điện tích.']
      }
    ],
    keyPoints: [
      'Coulomb là đơn vị điện lượng; ampere là đơn vị cường độ dòng điện.',
      'Số hạt N không âm và thường phải là số nguyên trong mô hình đếm hạt.',
      'Với electron, dùng $|e|=1,6\\times10^{-19}$ C khi tính số lượng.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-charge-current',
        title: 'Điện lượng qua dây',
        problem: 'Dòng điện không đổi 0,50 A chạy trong dây trong 2 phút. Tính điện lượng qua tiết diện.',
        steps: [
          'Đổi thời gian: $t=2\\times60=120$ s.',
          'Tính $q=It=0,50\\times120=60$ C.'
        ],
        answer: '$q=60$ C.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-charge-current',
        question: 'Dòng điện 2 A truyền điện lượng bao nhiêu qua tiết diện trong 3 s?',
        options: ['0,67 C', '1,5 C', '5 C', '6 C'],
        correctAnswer: 'D',
        explanation: '$q=It=2\\times3=6$ C.'
      }
    ],
    orderIndex: 2
  }),
  block({
    id: 'phy11-theory-m4-resistance-temperature',
    lessonIds: ['phy11-kntt-l23'],
    outcomeIds: ['out-phy11-m4-03'],
    questionTypeIds: ['phy11-qt26'],
    title: 'Điện trở và sự phụ thuộc nhiệt độ',
    objectives: [
      'Phân biệt điện trở với điện trở suất.',
      'Phân tích ảnh hưởng của vật liệu và kích thước đến điện trở.',
      'Mô tả gần đúng sự phụ thuộc nhiệt độ và điện trở nhiệt.'
    ],
    content:
      'Điện trở đặc trưng cho mức cản trở dòng điện của vật dẫn. Với dây đồng chất, tiết diện đều, điện trở tăng theo chiều dài, giảm khi tiết diện tăng và phụ thuộc vật liệu qua điện trở suất. Điện trở kim loại thường tăng khi nhiệt độ tăng; điện trở nhiệt NTC thường giảm điện trở khi nhiệt độ tăng, còn PTC có chiều biến thiên ngược lại trong vùng làm việc.',
    formulas: [
      {
        id: 'phy11-formula-m4-resistance-geometry',
        label: 'Điện trở của dây dẫn',
        expression: 'R=\\rho\\frac{\\ell}{S}',
        variables: [
          variable('R', 'điện trở', 'Ω'),
          variable('\\rho', 'điện trở suất của vật liệu', 'Ω·m'),
          variable('\\ell', 'chiều dài dây', 'm'),
          variable('S', 'diện tích tiết diện', 'm²')
        ],
        conditions: ['Dây đồng chất, tiết diện đều và xét tại nhiệt độ xác định.']
      },
      {
        id: 'phy11-formula-m4-resistance-temperature',
        label: 'Gần đúng tuyến tính theo nhiệt độ',
        expression: 'R=R_0\\left[1+\\alpha(T-T_0)\\right]',
        variables: [
          variable('R_0', 'điện trở tại nhiệt độ $T_0$', 'Ω'),
          variable('\\alpha', 'hệ số nhiệt điện trở', 'K⁻¹'),
          variable('T-T_0', 'độ biến thiên nhiệt độ', 'K hoặc °C')
        ],
        conditions: ['Chỉ dùng trong khoảng nhiệt độ mà quan hệ tuyến tính là gần đúng phù hợp.']
      }
    ],
    keyPoints: [
      'R phụ thuộc cả vật liệu, hình học và nhiệt độ; $\\rho$ là đặc trưng vật liệu tại nhiệt độ cho trước.',
      'Không áp dụng tuyến tính ngoài khoảng được cung cấp.',
      'NTC và PTC phải được nhận diện từ đặc tuyến hoặc mô tả linh kiện.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-resistance-temperature',
        title: 'Điện trở của dây',
        problem: 'Dây có $\\rho=1,7\\times10^{-8}$ Ω·m, dài 10 m, tiết diện 1,0 mm². Tính R.',
        steps: [
          'Đổi $S=1,0\\times10^{-6}$ m².',
          'Tính $R=1,7\\times10^{-8}\\cdot10/(1,0\\times10^{-6})=0,17$ Ω.'
        ],
        answer: '$R=0,17$ Ω.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-resistance-temperature',
        question: 'Giữ nguyên vật liệu và chiều dài, tăng tiết diện dây gấp đôi thì R thế nào?',
        options: ['Tăng đôi', 'Giảm một nửa', 'Tăng bốn lần', 'Không đổi'],
        correctAnswer: 'B',
        explanation: '$R$ tỉ lệ nghịch với tiết diện S.'
      }
    ],
    orderIndex: 3
  }),
  block({
    id: 'phy11-theory-m4-current-voltage-characteristic',
    lessonIds: ['phy11-kntt-l23'],
    outcomeIds: ['out-phy11-m4-04'],
    questionTypeIds: ['phy11-qt27'],
    title: 'Đặc tuyến dòng điện–điện áp',
    objectives: [
      'Đọc đúng trục và đơn vị trên đặc tuyến I–U.',
      'Phân biệt vật dẫn tuyến tính với linh kiện phi tuyến.',
      'Suy ra điện trở từ đặc tuyến trong trường hợp phù hợp.'
    ],
    content:
      'Đặc tuyến dòng điện–điện áp biểu diễn sự phụ thuộc của I vào U. Với vật dẫn tuân theo định luật Ohm ở nhiệt độ không đổi, đồ thị I theo U là đường thẳng qua gốc. Linh kiện phi tuyến có tỉ số U/I thay đổi theo điểm làm việc nên không thể dùng một điện trở không đổi cho toàn đặc tuyến.',
    formulas: [
      {
        id: 'phy11-formula-m4-characteristic-slope',
        label: 'Hệ số góc đặc tuyến I–U của vật dẫn Ohm',
        expression: '\\frac{\\Delta I}{\\Delta U}=\\frac1R',
        variables: [
          variable('\\Delta I/\\Delta U', 'hệ số góc khi trục đứng là I và trục ngang là U', 'A/V'),
          variable('R', 'điện trở không đổi của vật dẫn', 'Ω')
        ],
        conditions: ['Đặc tuyến là đường thẳng qua gốc và nhiệt độ vật dẫn được giữ không đổi.']
      },
      {
        id: 'phy11-formula-m4-static-resistance',
        label: 'Tỉ số tại một điểm làm việc',
        expression: 'R=\\frac{U}{I}',
        variables: [
          variable('U', 'điện áp tại điểm đang xét', 'V'),
          variable('I', 'dòng điện tại điểm đang xét', 'A')
        ],
        conditions: ['Với linh kiện phi tuyến, giá trị này chỉ mô tả điểm làm việc đang xét, không phải hằng số toàn đặc tuyến.']
      }
    ],
    keyPoints: [
      'Nếu đồ thị là I theo U, hệ số góc là $1/R$, không phải R.',
      'Nếu đồ thị là U theo I, hệ số góc mới bằng R với vật dẫn Ohm.',
      'Luôn đọc nhãn trục và hệ số đơn vị trước khi tính.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-current-voltage-characteristic',
        title: 'Điện trở từ đồ thị I–U',
        problem: 'Đường thẳng I–U qua điểm $U=6$ V, $I=0,30$ A. Tìm R.',
        steps: [
          'Đường thẳng qua gốc cho thấy vật dẫn tuân theo Ohm trong miền khảo sát.',
          'Tính $R=U/I=6/0,30=20$ Ω.'
        ],
        answer: '$R=20$ Ω.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-current-voltage-characteristic',
        question: 'Trên đồ thị I theo U của điện trở Ohm, đường nào có độ dốc lớn hơn ứng với R thế nào?',
        options: ['R lớn hơn', 'R nhỏ hơn', 'R bằng không mọi trường hợp', 'Không liên quan'],
        correctAnswer: 'B',
        explanation: 'Độ dốc bằng $1/R$, nên dốc lớn hơn thì R nhỏ hơn.'
      }
    ],
    orderIndex: 4
  }),
  block({
    id: 'phy11-theory-m4-ohm-law',
    lessonIds: ['phy11-kntt-l23'],
    outcomeIds: ['out-phy11-m4-05'],
    questionTypeIds: ['phy11-qt28'],
    title: 'Định luật Ohm và mạch điện trở',
    objectives: [
      'Vận dụng định luật Ohm đúng cho đoạn mạch đang xét.',
      'Nêu được điều kiện vật dẫn có điện trở không đổi.',
      'Tính điện trở tương đương của mạch nối tiếp hoặc song song cơ bản.'
    ],
    content:
      'Định luật Ohm cho biết cường độ dòng điện qua vật dẫn tỉ lệ thuận với hiệu điện thế hai đầu khi các điều kiện vật lí, đặc biệt nhiệt độ, không đổi. Trong mạch nối tiếp, dòng điện qua các phần tử bằng nhau; trong mạch song song, hiệu điện thế trên các nhánh bằng nhau.',
    formulas: [
      {
        id: 'phy11-formula-m4-ohm',
        label: 'Định luật Ohm',
        expression: 'U=IR',
        variables: [
          variable('U', 'hiệu điện thế hai đầu đoạn mạch', 'V'),
          variable('I', 'cường độ dòng điện qua đoạn mạch', 'A'),
          variable('R', 'điện trở của đoạn mạch', 'Ω')
        ],
        conditions: ['Áp dụng cho vật dẫn Ohm trong điều kiện điện trở được coi không đổi.']
      },
      {
        id: 'phy11-formula-m4-equivalent-resistance',
        label: 'Điện trở tương đương',
        expression: 'R_{nt}=R_1+R_2+\\cdots,\\qquad \\frac1{R_{ss}}=\\frac1{R_1}+\\frac1{R_2}+\\cdots',
        variables: [
          variable('R_{nt}', 'điện trở tương đương nối tiếp', 'Ω'),
          variable('R_{ss}', 'điện trở tương đương song song', 'Ω')
        ],
        conditions: ['Các điện trở được nhận diện đúng là nối tiếp hoặc song song.']
      }
    ],
    keyPoints: [
      'Không mặc định mọi linh kiện phi tuyến đều có R không đổi.',
      'Mạch nối tiếp có $R_{tđ}$ lớn hơn từng điện trở thành phần.',
      'Mạch song song có $R_{tđ}$ nhỏ hơn điện trở nhánh nhỏ nhất.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-ohm-law',
        title: 'Hai điện trở nối tiếp',
        problem: 'Hai điện trở 10 Ω và 20 Ω nối tiếp dưới hiệu điện thế 6 V. Tính dòng điện.',
        steps: [
          'Tính $R_{tđ}=10+20=30$ Ω.',
          'Áp dụng Ohm: $I=U/R_{tđ}=6/30=0,20$ A.'
        ],
        answer: '$I=0,20$ A.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-ohm-law',
        question: 'Hai điện trở 6 Ω và 3 Ω mắc song song có điện trở tương đương bằng bao nhiêu?',
        options: ['9 Ω', '3 Ω', '2 Ω', '1 Ω'],
        correctAnswer: 'C',
        explanation: '$1/R=1/6+1/3=1/2$ nên $R=2$ Ω.'
      }
    ],
    orderIndex: 5
  }),
  block({
    id: 'phy11-theory-m4-source-emf',
    lessonIds: ['phy11-kntt-l24'],
    outcomeIds: ['out-phy11-m4-06'],
    questionTypeIds: ['phy11-qt29'],
    title: 'Nguồn điện, suất điện động và điện trở trong',
    objectives: [
      'Nêu được vai trò của nguồn và ý nghĩa suất điện động.',
      'Phân biệt suất điện động với điện áp hai cực khi có dòng.',
      'Vận dụng định luật Ohm cho mạch kín và đánh giá các trạng thái tải.'
    ],
    content:
      'Nguồn điện thực hiện công để tách và dịch chuyển điện tích, duy trì hiệu điện thế giữa hai cực. Suất điện động đặc trưng cho công của lực lạ trên một đơn vị điện tích. Nguồn thực có điện trở trong r nên khi phát điện, điện áp hai cực thường nhỏ hơn suất điện động.',
    formulas: [
      {
        id: 'phy11-formula-m4-emf-definition',
        label: 'Định nghĩa suất điện động',
        expression: '\\mathcal{E}=\\frac{A_{nguồn}}{q}',
        variables: [
          variable('\\mathcal{E}', 'suất điện động của nguồn', 'V'),
          variable('A_{nguồn}', 'công của lực lạ trong nguồn', 'J'),
          variable('q', 'điện lượng được dịch chuyển', 'C')
        ],
        conditions: ['Công được tính cho quá trình dịch chuyển điện tích bên trong nguồn.']
      },
      {
        id: 'phy11-formula-m4-closed-circuit',
        label: 'Mạch kín đơn giản',
        expression: 'I=\\frac{\\mathcal{E}}{R+r},\\qquad U=\\mathcal{E}-Ir=IR',
        variables: [
          variable('R', 'điện trở mạch ngoài', 'Ω'),
          variable('r', 'điện trở trong của nguồn', 'Ω'),
          variable('U', 'hiệu điện thế hai cực nguồn khi phát điện', 'V')
        ],
        conditions: ['Một nguồn đang phát điện trong mạch kín đơn giản, dây nối coi như có điện trở không đáng kể.']
      }
    ],
    keyPoints: [
      'Hở mạch lí tưởng: $I=0$ nên $U=\\mathcal{E}$.',
      'Ngắn mạch: $R\\approx0$, dòng $I_{sc}=\\mathcal{E}/r$ có thể rất lớn và nguy hiểm.',
      'Không bỏ điện trở trong khi đề cho r khác không.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-source-emf',
        title: 'Nguồn mắc với tải',
        problem: 'Nguồn có $\\mathcal{E}=6$ V, $r=1$ Ω nối với $R=5$ Ω. Tìm I và U.',
        steps: [
          'Tính $I=\\mathcal{E}/(R+r)=6/(5+1)=1$ A.',
          'Tính $U=IR=1\\cdot5=5$ V, cũng bằng $6-1\\cdot1$.'
        ],
        answer: '$I=1$ A và $U=5$ V.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-source-emf',
        question: 'Khi nguồn đang phát điện và I khác 0, điện áp cực nguồn liên hệ thế nào với suất điện động?',
        options: ['$U=\\mathcal{E}+Ir$', '$U=\\mathcal{E}-Ir$', '$U=Ir$', '$U=0$'],
        correctAnswer: 'B',
        explanation: 'Một phần suất điện động bị sụt trên điện trở trong: $U=\\mathcal{E}-Ir$.'
      }
    ],
    orderIndex: 6
  }),
  block({
    id: 'phy11-theory-m4-energy-power',
    lessonIds: ['phy11-kntt-l25'],
    outcomeIds: ['out-phy11-m4-07'],
    questionTypeIds: ['phy11-qt30'],
    title: 'Điện năng và công suất điện',
    objectives: [
      'Tính điện năng và công suất của thiết bị.',
      'Đổi đúng giữa joule và kilowatt-hour.',
      'Đánh giá sử dụng điện hiệu quả và an toàn từ thông số định mức.'
    ],
    content:
      'Điện năng mà đoạn mạch tiêu thụ bằng công của lực điện thực hiện trong đoạn mạch. Công suất cho biết tốc độ tiêu thụ hoặc chuyển hóa điện năng. Công suất định mức chỉ đạt khi thiết bị hoạt động đúng điện áp và điều kiện do nhà sản xuất quy định.',
    formulas: [
      {
        id: 'phy11-formula-m4-electric-energy',
        label: 'Điện năng và công suất',
        expression: 'A=UIt=Pt,\\qquad P=UI',
        variables: [
          variable('A', 'điện năng tiêu thụ', 'J hoặc kWh'),
          variable('P', 'công suất điện', 'W'),
          variable('t', 'thời gian hoạt động', 's hoặc h')
        ],
        conditions: ['U và I được coi không đổi trong khoảng thời gian khảo sát; đơn vị phải đồng bộ.']
      },
      {
        id: 'phy11-formula-m4-resistor-power',
        label: 'Công suất và nhiệt lượng trên điện trở',
        expression: 'P=I^2R=\\frac{U^2}{R},\\qquad Q=I^2Rt',
        variables: [
          variable('Q', 'nhiệt lượng tỏa ra trên điện trở', 'J'),
          variable('R', 'điện trở của phần tử', 'Ω')
        ],
        conditions: ['Phần tử thuần điện trở và áp dụng được định luật Ohm.']
      }
    ],
    keyPoints: [
      '$1\\,\\text{kWh}=3,6\\times10^6$ J; kW là công suất, kWh là năng lượng.',
      'Không dùng công suất định mức nếu thiết bị không hoạt động đúng điện áp định mức.',
      'Cần xét tổng công suất tải, giới hạn dây dẫn và thiết bị bảo vệ khi đánh giá an toàn.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-energy-power',
        title: 'Điện năng của thiết bị',
        problem: 'Ấm điện 1,5 kW hoạt động 20 phút mỗi ngày trong 30 ngày. Tính điện năng.',
        steps: [
          'Đổi tổng thời gian: $20/60\\times30=10$ h.',
          'Tính $A=Pt=1,5\\times10=15$ kWh.'
        ],
        answer: 'Điện năng tiêu thụ là 15 kWh.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-energy-power',
        question: 'Đơn vị nào là đơn vị điện năng?',
        options: ['kW', 'kWh', 'A', 'V/s'],
        correctAnswer: 'B',
        explanation: 'kWh là tích công suất với thời gian nên là đơn vị năng lượng.'
      }
    ],
    orderIndex: 7
  }),
  block({
    id: 'phy11-theory-m4-source-experiment',
    lessonIds: ['phy11-kntt-l26'],
    outcomeIds: ['out-phy11-m4-08'],
    questionTypeIds: ['phy11-qt31'],
    title: 'Thực hành đo suất điện động và điện trở trong',
    objectives: [
      'Mắc đúng ampe kế, vôn kế và biến trở trong mạch đo.',
      'Xử lí bảng hoặc đồ thị U–I để xác định suất điện động và điện trở trong.',
      'Nhận diện nguồn sai số và thực hiện phép đo an toàn.'
    ],
    content:
      'Mắc ampe kế nối tiếp để đo dòng mạch và vôn kế song song với hai cực nguồn để đo điện áp. Thay đổi biến trở để thu nhiều cặp $(I,U)$ trong giới hạn an toàn. Theo $U=\\mathcal{E}-rI$, đồ thị U theo I gần là đường thẳng: tung độ gốc cho suất điện động và độ lớn hệ số góc cho điện trở trong.',
    formulas: [
      {
        id: 'phy11-formula-m4-source-graph',
        label: 'Phương trình tuyến tính của phép đo',
        expression: 'U=\\mathcal{E}-rI',
        variables: [
          variable('U', 'điện áp cực nguồn đo được', 'V'),
          variable('I', 'dòng điện mạch ngoài', 'A'),
          variable('\\mathcal{E}', 'tung độ gốc của đồ thị U–I', 'V'),
          variable('-r', 'hệ số góc của đồ thị U–I', 'V/A')
        ],
        conditions: ['Nguồn ổn định, r gần như không đổi và dụng cụ đo làm việc trong giới hạn.']
      },
      {
        id: 'phy11-formula-m4-source-two-points',
        label: 'Tính từ hai điểm đo',
        expression: 'r=-\\frac{U_2-U_1}{I_2-I_1},\\qquad \\mathcal{E}=U+rI',
        variables: [
          variable('U_1,U_2', 'hai giá trị điện áp đo được', 'V'),
          variable('I_1,I_2', 'hai giá trị dòng điện tương ứng', 'A')
        ],
        conditions: ['Hai điểm khác nhau nằm trên đường xu hướng tuyến tính; nên dùng nhiều điểm và đường khớp để giảm sai số.']
      }
    ],
    keyPoints: [
      'Không mắc ampe kế trực tiếp song song với nguồn vì có thể gây ngắn mạch.',
      'Trên đồ thị U theo I, hệ số góc âm và $r$ là độ lớn của hệ số góc.',
      'Mở khóa K khi không đo; đọc đúng giới hạn đo và đơn vị dụng cụ.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m4-source-experiment',
        title: 'Xử lí hai điểm U–I',
        problem: 'Hai điểm đo là $(I_1=0,20\\,A;U_1=1,40\\,V)$ và $(I_2=0,60\\,A;U_2=1,20\\,V)$.',
        steps: [
          'Tính $r=-(1,20-1,40)/(0,60-0,20)=0,50$ Ω.',
          'Tính $\\mathcal{E}=U_1+rI_1=1,40+0,50\\cdot0,20=1,50$ V.'
        ],
        answer: '$r=0,50$ Ω và $\\mathcal{E}=1,50$ V.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m4-source-experiment',
        question: 'Trên đồ thị U theo I, đại lượng nào bằng độ lớn hệ số góc?',
        options: ['Suất điện động', 'Điện trở trong', 'Điện lượng', 'Công suất'],
        correctAnswer: 'B',
        explanation: 'Từ $U=\\mathcal{E}-rI$, hệ số góc bằng $-r$.'
      }
    ],
    orderIndex: 8
  })
];
