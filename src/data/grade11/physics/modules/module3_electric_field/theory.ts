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
  moduleId: 'phy11-m3',
  sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
  reviewStatus: 'source_checked',
  ...value
});

const phy11Module3BaseTheory: TheoryBlock[] = [
  block({
    id: 'phy11-theory-m3-coulomb',
    lessonIds: ['phy11-kntt-l16'],
    outcomeIds: ['out-phy11-m3-01'],
    questionTypeIds: ['phy11-qt15'],
    title: 'Điện tích và định luật Coulomb',
    objectives: [
      'Xác định đúng phương, chiều của lực tương tác giữa hai điện tích điểm.',
      'Tính độ lớn lực Coulomb trong không khí hoặc chân không.',
      'Tổng hợp các lực điện bằng quy tắc vector.'
    ],
    content:
      'Hai điện tích cùng dấu đẩy nhau, trái dấu hút nhau. Lực Coulomb có phương trùng đường thẳng nối hai điện tích; hai lực tương tác tạo thành một cặp trực đối. Khi có nhiều điện tích nguồn, lực tổng hợp tác dụng lên điện tích khảo sát bằng tổng vector các lực thành phần.',
    formulas: [
      {
        id: 'phy11-formula-m3-coulomb',
        label: 'Độ lớn lực Coulomb',
        expression: 'F=k\\frac{|q_1q_2|}{r^2}',
        variables: [
          variable('F', 'độ lớn lực tương tác điện', 'N'),
          variable('q_1,q_2', 'các điện tích điểm', 'C'),
          variable('r', 'khoảng cách giữa hai điện tích', 'm'),
          variable('k', 'hằng số Coulomb', 'N·m²/C²', '$k\\approx9,0\\times10^9$ trong chân không')
        ],
        conditions: [
          'Các vật được coi là điện tích điểm; công thức trên dùng cho chân không hoặc gần đúng trong không khí.'
        ],
        notes: ['Giá trị tuyệt đối chỉ dùng để tính độ lớn; chiều lực phải xét từ dấu điện tích.']
      },
      {
        id: 'phy11-formula-m3-force-superposition',
        label: 'Nguyên lí chồng chất lực điện',
        expression: '\\vec F=\\vec F_1+\\vec F_2+\\cdots',
        variables: [variable('\\vec F_i', 'lực do điện tích nguồn thứ i gây ra', 'N')],
        conditions: ['Các lực thành phần đều tác dụng lên cùng điện tích khảo sát.']
      }
    ],
    keyPoints: [
      'Đổi microcoulomb, nanocoulomb và centimet về đơn vị SI trước khi thay số.',
      'Không cộng độ lớn nếu các lực không cùng phương, cùng chiều.',
      'Lực Coulomb tỉ lệ nghịch với bình phương khoảng cách.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-coulomb',
        title: 'Lực giữa hai điện tích',
        problem: 'Hai điện tích $q_1=2\\,\\mu C$, $q_2=-3\\,\\mu C$ cách nhau 0,30 m trong không khí. Tính lực tương tác.',
        steps: [
          'Hai điện tích trái dấu nên hút nhau dọc theo đường nối hai điện tích.',
          'Thay số: $F=9\\times10^9\\,|2\\times10^{-6}\\cdot(-3\\times10^{-6})|/0,30^2=0,60$ N.'
        ],
        answer: 'Hai điện tích hút nhau với lực có độ lớn $0,60$ N.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-coulomb',
        question: 'Giữ nguyên hai điện tích và tăng khoảng cách lên gấp đôi thì lực Coulomb thay đổi thế nào?',
        options: ['Tăng 2 lần', 'Giảm 2 lần', 'Giảm 4 lần', 'Không đổi'],
        correctAnswer: 'C',
        explanation: 'Vì $F$ tỉ lệ nghịch với $r^2$, khoảng cách gấp đôi làm lực còn một phần tư.'
      }
    ],
    orderIndex: 1
  }),
  block({
    id: 'phy11-theory-m3-field-concept',
    lessonIds: ['phy11-kntt-l17'],
    outcomeIds: ['out-phy11-m3-02'],
    questionTypeIds: ['phy11-qt16'],
    title: 'Điện trường và vector cường độ điện trường',
    objectives: [
      'Nêu được điện trường là môi trường truyền tương tác điện.',
      'Phân biệt cường độ điện trường với lực điện.',
      'Xác định lực tác dụng lên điện tích dương hoặc âm đặt trong điện trường.'
    ],
    content:
      'Điện trường tồn tại xung quanh điện tích và tác dụng lực điện lên điện tích khác đặt trong nó. Cường độ điện trường tại một điểm đặc trưng cho khả năng tác dụng lực của điện trường tại điểm đó, do các điện tích nguồn quyết định và không phụ thuộc điện tích thử.',
    formulas: [
      {
        id: 'phy11-formula-m3-field-definition',
        label: 'Định nghĩa cường độ điện trường',
        expression: '\\vec E=\\frac{\\vec F}{q_0}',
        variables: [
          variable('\\vec E', 'vector cường độ điện trường', 'N/C hoặc V/m'),
          variable('\\vec F', 'lực điện tác dụng lên điện tích thử dương', 'N'),
          variable('q_0', 'điện tích thử dương đủ nhỏ', 'C')
        ],
        conditions: ['Điện tích thử đủ nhỏ để không làm thay đổi đáng kể điện trường đang khảo sát.']
      },
      {
        id: 'phy11-formula-m3-electric-force',
        label: 'Lực điện trong điện trường',
        expression: '\\vec F=q\\vec E',
        variables: [variable('q', 'điện tích đặt trong điện trường', 'C')],
        conditions: ['Nếu q dương, lực cùng chiều E; nếu q âm, lực ngược chiều E.']
      }
    ],
    keyPoints: [
      'E là đặc trưng của điện trường; F còn phụ thuộc điện tích q đặt vào trường.',
      'Chiều của E là chiều lực tác dụng lên điện tích thử dương.',
      'Đơn vị N/C tương đương V/m.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-field-concept',
        title: 'Lực lên điện tích âm',
        problem: 'Tại một điểm có $E=2,0\\times10^4$ N/C hướng sang phải. Đặt electron có điện tích $-1,6\\times10^{-19}$ C tại đó.',
        steps: [
          'Tính độ lớn $F=|q|E=1,6\\times10^{-19}\\cdot2,0\\times10^4=3,2\\times10^{-15}$ N.',
          'Electron mang điện âm nên lực ngược chiều điện trường.'
        ],
        answer: '$F=3,2\\times10^{-15}$ N, hướng sang trái.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-field-concept',
        question: 'Thay điện tích thử dương bằng điện tích thử nhỏ hơn tại cùng điểm thì E thay đổi thế nào?',
        options: ['Tăng', 'Giảm', 'Đổi chiều', 'Không đổi'],
        correctAnswer: 'D',
        explanation: 'Cường độ điện trường do điện tích nguồn quyết định, không phụ thuộc điện tích thử.'
      }
    ],
    orderIndex: 2
  }),
  block({
    id: 'phy11-theory-m3-point-charge-field',
    lessonIds: ['phy11-kntt-l17'],
    outcomeIds: ['out-phy11-m3-03'],
    questionTypeIds: ['phy11-qt17'],
    title: 'Điện trường của điện tích điểm và hệ điện tích',
    objectives: [
      'Tính điện trường do một điện tích điểm gây ra.',
      'Xác định đúng chiều vector điện trường theo dấu điện tích nguồn.',
      'Vận dụng nguyên lí chồng chất điện trường.'
    ],
    content:
      'Điện trường của điện tích điểm có phương theo đường nối điện tích nguồn với điểm khảo sát. Vector E hướng ra xa điện tích dương và hướng về điện tích âm. Điện trường tổng hợp của nhiều điện tích bằng tổng vector các điện trường thành phần.',
    formulas: [
      {
        id: 'phy11-formula-m3-point-field',
        label: 'Điện trường của điện tích điểm',
        expression: 'E=k\\frac{|Q|}{r^2}',
        variables: [
          variable('Q', 'điện tích nguồn', 'C'),
          variable('r', 'khoảng cách từ nguồn đến điểm khảo sát', 'm'),
          variable('E', 'độ lớn cường độ điện trường', 'N/C')
        ],
        conditions: ['Nguồn được coi là điện tích điểm; môi trường là chân không hoặc gần đúng không khí.']
      },
      {
        id: 'phy11-formula-m3-field-superposition',
        label: 'Nguyên lí chồng chất điện trường',
        expression: '\\vec E=\\vec E_1+\\vec E_2+\\cdots',
        variables: [variable('\\vec E_i', 'điện trường do nguồn thứ i gây ra', 'N/C')],
        conditions: ['Các vector thành phần được xác định tại cùng một điểm khảo sát.']
      }
    ],
    keyPoints: [
      'Chiều E phụ thuộc dấu điện tích nguồn, không phụ thuộc điện tích thử.',
      'Tại điểm giữa hai điện tích cùng dấu bằng nhau, hai vector E triệt tiêu.',
      'Với các vector vuông góc, dùng định lí Pythagore để tính độ lớn tổng hợp.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-point-charge-field',
        title: 'Điện trường của điện tích điểm',
        problem: 'Điện tích $Q=-4\\,\\text{nC}$. Tìm E tại điểm cách Q 0,20 m.',
        steps: [
          'Tính $E=9\\times10^9\\cdot4\\times10^{-9}/0,20^2=900$ N/C.',
          'Q âm nên vector E hướng từ điểm khảo sát về Q.'
        ],
        answer: '$E=900$ N/C, hướng về điện tích Q.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-point-charge-field',
        question: 'Vector điện trường do điện tích âm gây ra tại một điểm hướng thế nào?',
        options: ['Ra xa điện tích', 'Về phía điện tích', 'Luôn hướng lên', 'Phụ thuộc điện tích thử'],
        correctAnswer: 'B',
        explanation: 'Đường sức và vector E hướng vào điện tích âm.'
      }
    ],
    orderIndex: 3
  }),
  block({
    id: 'phy11-theory-m3-field-lines',
    lessonIds: ['phy11-kntt-l17'],
    outcomeIds: ['out-phy11-m3-04'],
    questionTypeIds: ['phy11-qt18'],
    title: 'Đường sức điện và phổ đường sức',
    objectives: [
      'Đọc được chiều và độ mạnh tương đối từ hình đường sức.',
      'Vẽ đường sức của điện tích điểm, hai điện tích và điện trường đều.',
      'Nhận diện hình biểu diễn đường sức không hợp lệ.'
    ],
    content:
      'Đường sức điện là đường có tiếp tuyến tại mỗi điểm trùng phương và chiều của vector E tại điểm đó. Đường sức đi ra từ điện tích dương và đi vào điện tích âm hoặc kéo dài tới vô cực. Nơi đường sức được vẽ mau hơn biểu diễn điện trường mạnh hơn.',
    formulas: [],
    keyPoints: [
      'Các đường sức không cắt nhau vì tại một điểm E chỉ có một phương, chiều xác định.',
      'Đường sức điện tĩnh không phải quỹ đạo bắt buộc của hạt mang điện.',
      'Điện trường đều được biểu diễn bằng các đường thẳng song song, cùng chiều và cách đều.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-field-lines',
        title: 'Đánh giá hình đường sức',
        problem: 'Một hình vẽ có hai đường sức cắt nhau tại điểm M. Hình đó có hợp lệ không?',
        steps: [
          'Tại M, tiếp tuyến của mỗi đường sức cho một hướng của E.',
          'Hai đường cắt nhau sẽ cho hai hướng E khác nhau tại cùng một điểm, điều này không thể xảy ra.'
        ],
        answer: 'Hình không hợp lệ; các đường sức điện không cắt nhau.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-field-lines',
        question: 'Vùng có đường sức mau hơn biểu diễn điều gì?',
        options: ['Điện thế luôn bằng không', 'Điện trường mạnh hơn', 'Không có lực điện', 'Điện tích thử âm'],
        correctAnswer: 'B',
        explanation: 'Mật độ đường sức được dùng để biểu diễn độ lớn tương đối của điện trường.'
      }
    ],
    orderIndex: 4
  }),
  block({
    id: 'phy11-theory-m3-uniform-field',
    lessonIds: ['phy11-kntt-l18'],
    outcomeIds: ['out-phy11-m3-05'],
    questionTypeIds: ['phy11-qt19'],
    title: 'Điện trường đều',
    objectives: [
      'Nhận biết điện trường đều từ vector hoặc đường sức.',
      'Vận dụng quan hệ giữa E, hiệu điện thế và khoảng cách.',
      'Tính lực và công của lực điện trong điện trường đều.'
    ],
    content:
      'Điện trường đều có vector E như nhau tại mọi điểm. Giữa hai bản kim loại phẳng song song tích điện trái dấu, bỏ qua hiệu ứng mép, điện trường gần đều và hướng từ bản dương sang bản âm. Điện thế giảm theo chiều điện trường.',
    formulas: [
      {
        id: 'phy11-formula-m3-uniform-field',
        label: 'Cường độ điện trường giữa hai bản',
        expression: 'E=\\frac{|U|}{d}',
        variables: [
          variable('U', 'hiệu điện thế giữa hai bản', 'V'),
          variable('d', 'khoảng cách giữa hai bản theo phương đường sức', 'm')
        ],
        conditions: ['Điện trường đều; d đo theo phương của đường sức.']
      },
      {
        id: 'phy11-formula-m3-uniform-work',
        label: 'Công của lực điện',
        expression: 'A=qEs\\cos\\alpha',
        variables: [
          variable('s', 'độ dài độ dời', 'm'),
          variable('\\alpha', 'góc giữa độ dời và vector E')
        ],
        conditions: ['E không đổi trên toàn bộ độ dời.']
      }
    ],
    keyPoints: [
      'Khoảng cách d trong $E=|U|/d$ không phải một đường đi tùy ý.',
      'Điện tích dương chịu lực cùng chiều E; điện tích âm chịu lực ngược chiều E.',
      'Độ dời vuông góc E thì công của lực điện bằng không.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-uniform-field',
        title: 'Điện trường giữa hai bản',
        problem: 'Hai bản song song cách nhau 2,0 cm, hiệu điện thế 600 V. Tính E.',
        steps: [
          'Đổi $d=2,0\\times10^{-2}$ m.',
          'Tính $E=600/(2,0\\times10^{-2})=3,0\\times10^4$ V/m.'
        ],
        answer: '$E=3,0\\times10^4$ V/m.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-uniform-field',
        question: 'Trong điện trường đều, dịch chuyển vuông góc với đường sức thì công lực điện bằng bao nhiêu?',
        options: ['$qEs$', '$-qEs$', '0', 'Phụ thuộc khối lượng'],
        correctAnswer: 'C',
        explanation: 'Khi $\\alpha=90^\\circ$ thì $\\cos\\alpha=0$.'
      }
    ],
    orderIndex: 5
  }),
  block({
    id: 'phy11-theory-m3-charged-particle',
    lessonIds: ['phy11-kntt-l18'],
    outcomeIds: ['out-phy11-m3-06'],
    questionTypeIds: ['phy11-qt20'],
    title: 'Chuyển động của điện tích trong điện trường đều',
    objectives: [
      'Xác định gia tốc của hạt mang điện.',
      'Phân tích chuyển động dọc hoặc vuông góc đường sức.',
      'Viết phương trình quỹ đạo trong trường hợp phù hợp.'
    ],
    content:
      'Trong điện trường đều và bỏ qua trọng lực, hạt mang điện chịu lực điện không đổi nên có gia tốc không đổi. Nếu vận tốc đầu cùng phương E, chuyển động là thẳng biến đổi đều. Nếu vận tốc đầu vuông góc E, chuyển động theo phương ban đầu là đều và theo phương lực điện là biến đổi đều, tạo quỹ đạo parabol.',
    formulas: [
      {
        id: 'phy11-formula-m3-particle-acceleration',
        label: 'Gia tốc của hạt mang điện',
        expression: '\\vec a=\\frac{q\\vec E}{m}',
        variables: [
          variable('m', 'khối lượng hạt', 'kg'),
          variable('q', 'điện tích của hạt', 'C')
        ],
        conditions: ['Điện trường đều; bỏ qua các lực khác hoặc đã xét riêng.']
      },
      {
        id: 'phy11-formula-m3-particle-perpendicular',
        label: 'Chuyển động vào vuông góc đường sức',
        expression: 'x=v_0t,\\qquad y=\\frac12\\frac{qE}{m}t^2',
        variables: [
          variable('v_0', 'vận tốc đầu theo trục x', 'm/s'),
          variable('x,y', 'tọa độ theo hai trục đã chọn', 'm')
        ],
        conditions: ['Chọn Ox theo vận tốc đầu, Oy theo chiều E; hạt đi vào tại gốc tọa độ.'],
        notes: ['Dấu của y phụ thuộc dấu q và quy ước chiều Oy.']
      }
    ],
    keyPoints: [
      'Luôn xác định chiều lực từ dấu q trước khi viết phương trình.',
      'Không trộn vận tốc hoặc gia tốc giữa hai trục vuông góc.',
      'Electron lệch ngược chiều E.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-charged-particle',
        title: 'Gia tốc của proton',
        problem: 'Proton có $q=1,6\\times10^{-19}$ C, $m=1,67\\times10^{-27}$ kg trong điện trường $E=10^4$ V/m.',
        steps: [
          'Proton dương nên gia tốc cùng chiều E.',
          'Tính $a=qE/m\\approx9,58\\times10^{11}$ m/s².'
        ],
        answer: '$a\\approx9,58\\times10^{11}$ m/s², cùng chiều E.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-charged-particle',
        question: 'Hạt có vận tốc đầu vuông góc E và chịu lực điện không đổi có quỹ đạo gì?',
        options: ['Đường tròn', 'Parabol', 'Đường thẳng đều', 'Elip'],
        correctAnswer: 'B',
        explanation: 'Một phương chuyển động đều, phương vuông góc biến đổi đều nên quỹ đạo là parabol.'
      }
    ],
    orderIndex: 6
  }),
  block({
    id: 'phy11-theory-m3-potential-energy',
    lessonIds: ['phy11-kntt-l19'],
    outcomeIds: ['out-phy11-m3-07'],
    questionTypeIds: ['phy11-qt21'],
    title: 'Công của lực điện và thế năng điện',
    objectives: [
      'Liên hệ công lực điện với độ biến thiên thế năng.',
      'Xác định dấu của công và sự tăng giảm thế năng.',
      'Vận dụng tính chất thế của điện trường tĩnh.'
    ],
    content:
      'Lực điện tĩnh là lực thế: công khi điện tích dịch chuyển giữa hai điểm không phụ thuộc đường đi, chỉ phụ thuộc vị trí đầu và cuối. Khi lực điện sinh công dương, thế năng điện giảm; khi ngoại lực thực hiện công chống lại lực điện, thế năng có thể tăng.',
    formulas: [
      {
        id: 'phy11-formula-m3-work-potential-energy',
        label: 'Công và độ biến thiên thế năng',
        expression: 'A_{MN}=W_M-W_N=-\\Delta W',
        variables: [
          variable('A_{MN}', 'công của lực điện từ M đến N', 'J'),
          variable('W_M,W_N', 'thế năng tại M và N', 'J'),
          variable('\\Delta W', 'độ biến thiên thế năng $W_N-W_M$', 'J')
        ],
        conditions: ['Xét công của lực điện trong điện trường tĩnh.']
      }
    ],
    keyPoints: [
      'Không viết $A=\\Delta W$; công lực điện bằng âm độ biến thiên thế năng.',
      'Công lực điện trên một đường kín bằng không.',
      'Mốc thế năng có thể chọn tùy ý, nhưng độ biến thiên thế năng không phụ thuộc mốc.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-potential-energy',
        title: 'Thế năng sau khi lực điện sinh công',
        problem: 'Lực điện thực hiện công $3,0\\times10^{-4}$ J khi điện tích đi từ M đến N. Biết $W_M=5,0\\times10^{-4}$ J.',
        steps: [
          'Dùng $A_{MN}=W_M-W_N$.',
          'Suy ra $W_N=W_M-A_{MN}=2,0\\times10^{-4}$ J.'
        ],
        answer: '$W_N=2,0\\times10^{-4}$ J.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-potential-energy',
        question: 'Khi công của lực điện dương thì thế năng điện thay đổi thế nào?',
        options: ['Tăng', 'Giảm', 'Không đổi', 'Luôn bằng không'],
        correctAnswer: 'B',
        explanation: '$A=-\\Delta W>0$ nên $\\Delta W<0$.'
      }
    ],
    orderIndex: 7
  }),
  block({
    id: 'phy11-theory-m3-potential-voltage',
    lessonIds: ['phy11-kntt-l20'],
    outcomeIds: ['out-phy11-m3-08'],
    questionTypeIds: ['phy11-qt22'],
    title: 'Điện thế và hiệu điện thế',
    objectives: [
      'Phân biệt điện thế tại một điểm với hiệu điện thế giữa hai điểm.',
      'Vận dụng quan hệ giữa công, điện tích và hiệu điện thế.',
      'Xác định chiều giảm điện thế trong điện trường.'
    ],
    content:
      'Điện thế V đặc trưng riêng cho điện trường tại một điểm về phương diện tạo thế năng trên một đơn vị điện tích. Hiệu điện thế giữa hai điểm là độ chênh điện thế có thứ tự. Điện thế giảm theo chiều vector điện trường.',
    formulas: [
      {
        id: 'phy11-formula-m3-potential',
        label: 'Điện thế tại một điểm',
        expression: 'V=\\frac{W}{q}',
        variables: [
          variable('V', 'điện thế', 'V'),
          variable('W', 'thế năng điện của điện tích q', 'J'),
          variable('q', 'điện tích đặt tại điểm xét', 'C')
        ],
        conditions: ['W và V được xác định theo cùng mốc thế năng, điện thế.']
      },
      {
        id: 'phy11-formula-m3-voltage',
        label: 'Hiệu điện thế và công',
        expression: 'U_{MN}=V_M-V_N=\\frac{A_{MN}}{q}',
        variables: [
          variable('U_{MN}', 'hiệu điện thế từ M đến N', 'V'),
          variable('A_{MN}', 'công của lực điện khi q đi từ M đến N', 'J')
        ],
        conditions: ['Giữ đúng thứ tự chỉ số M, N trong toàn bộ phép tính.']
      }
    ],
    keyPoints: [
      'V là giá trị tại một điểm; U là hiệu giữa hai điểm.',
      'Đổi thứ tự chỉ số làm đổi dấu: $U_{NM}=-U_{MN}$.',
      'Điện tích dương tự chuyển động theo chiều giảm điện thế nếu chỉ chịu lực điện.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-potential-voltage',
        title: 'Công qua hiệu điện thế',
        problem: 'Điện tích $q=2,0\\,\\mu C$ đi từ M đến N với $U_{MN}=50$ V. Tính công lực điện.',
        steps: [
          'Đổi $q=2,0\\times10^{-6}$ C.',
          'Tính $A_{MN}=qU_{MN}=2,0\\times10^{-6}\\cdot50=1,0\\times10^{-4}$ J.'
        ],
        answer: '$A_{MN}=1,0\\times10^{-4}$ J.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-potential-voltage',
        question: 'Nếu $V_M=20$ V và $V_N=50$ V thì $U_{MN}$ bằng bao nhiêu?',
        options: ['70 V', '30 V', '-30 V', '-70 V'],
        correctAnswer: 'C',
        explanation: '$U_{MN}=V_M-V_N=20-50=-30$ V.'
      }
    ],
    orderIndex: 8
  }),
  block({
    id: 'phy11-theory-m3-capacitor',
    lessonIds: ['phy11-kntt-l21'],
    outcomeIds: ['out-phy11-m3-09'],
    questionTypeIds: ['phy11-qt23'],
    title: 'Tụ điện và điện dung',
    objectives: [
      'Nêu được cấu tạo và công dụng cơ bản của tụ điện.',
      'Vận dụng quan hệ giữa điện tích, điện dung và hiệu điện thế.',
      'Đọc điện dung, điện áp định mức và sử dụng tụ an toàn.'
    ],
    content:
      'Tụ điện gồm hai vật dẫn đặt gần nhau và ngăn cách bởi lớp điện môi. Khi nối với nguồn, hai bản tích các điện tích có độ lớn bằng nhau và trái dấu. Điện dung đặc trưng cho khả năng tích điện của tụ, phụ thuộc cấu tạo và điện môi, không phụ thuộc Q hay U trong giới hạn làm việc của tụ lí tưởng.',
    formulas: [
      {
        id: 'phy11-formula-m3-capacitance',
        label: 'Định nghĩa điện dung',
        expression: 'C=\\frac{Q}{U},\\qquad Q=CU',
        variables: [
          variable('C', 'điện dung của tụ', 'F'),
          variable('Q', 'độ lớn điện tích trên mỗi bản', 'C'),
          variable('U', 'hiệu điện thế giữa hai bản', 'V')
        ],
        conditions: ['Tụ làm việc dưới điện áp định mức và điện môi chưa bị đánh thủng.']
      },
      {
        id: 'phy11-formula-m3-parallel-capacitor',
        label: 'Điện dung tụ phẳng',
        expression: 'C=\\varepsilon_0\\varepsilon_r\\frac{S}{d}',
        variables: [
          variable('S', 'diện tích phần đối diện của mỗi bản', 'm²'),
          variable('d', 'khoảng cách giữa hai bản', 'm'),
          variable('\\varepsilon_r', 'hằng số điện môi tương đối')
        ],
        conditions: ['Hai bản phẳng song song, khoảng cách nhỏ so với kích thước bản; bỏ qua hiệu ứng mép.']
      }
    ],
    keyPoints: [
      'Các tiền tố thường gặp: $1\\,\\mu F=10^{-6}$ F, $1\\,nF=10^{-9}$ F, $1\\,pF=10^{-12}$ F.',
      'Không đặt tụ vào điện áp vượt giá trị định mức.',
      'Tụ có thể còn tích điện sau khi ngắt nguồn; cần quy trình phóng điện an toàn.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m3-capacitor',
        title: 'Điện tích của tụ',
        problem: 'Tụ $C=20\\,\\mu F$ được đặt dưới hiệu điện thế 12 V. Tìm Q.',
        steps: [
          'Đổi $C=20\\times10^{-6}$ F.',
          'Tính $Q=CU=20\\times10^{-6}\\cdot12=2,4\\times10^{-4}$ C.'
        ],
        answer: '$Q=2,4\\times10^{-4}$ C hay $240\\,\\mu C$.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m3-capacitor',
        question: 'Với một tụ lí tưởng cố định, tăng U gấp đôi thì điện dung C thay đổi thế nào?',
        options: ['Tăng đôi', 'Giảm đôi', 'Tăng bốn lần', 'Không đổi'],
        correctAnswer: 'D',
        explanation: 'Điện dung phụ thuộc cấu tạo và điện môi; Q tăng theo U để C không đổi.'
      }
    ],
    orderIndex: 9
  })
];

export const phy11Module3Theory: TheoryBlock[] = phy11Module3BaseTheory.map(block => ({
  ...block,
  workedExamples: [
    ...(block.workedExamples ?? []),
    {
      id: `${block.id}-example-2`,
      title: `Kiểm tra mô hình: ${block.title}`,
      problem: `Khi xử lí một tình huống thuộc “${block.title}”, cần kiểm tra những điểm nào trước khi kết luận?`,
      steps: [
        block.keyPoints?.[0] ?? 'Xác định đại lượng và quy ước dấu.',
        block.keyPoints?.[1] ?? 'Chọn quan hệ vật lí đúng điều kiện.',
        'Đổi đơn vị, thực hiện phép tính và kiểm tra chiều hoặc dấu của kết quả.'
      ],
      answer: block.keyPoints?.[2] ?? 'Kết luận phải phù hợp mô hình và điều kiện áp dụng.'
    }
  ],
  checkpoints: [
    ...(block.checkpoints ?? []),
    {
      id: `${block.id}-check-2`,
      question: `Điểm cần ghi nhớ khi học “${block.title}” là`,
      options: [
        block.keyPoints?.[0] ?? 'Xác định đúng đại lượng vật lí.',
        'Bỏ qua dấu của điện tích.',
        'Không cần đổi đơn vị.',
        'Luôn cộng các độ lớn như số vô hướng.'
      ],
      correctAnswer: 'A',
      explanation: block.keyPoints?.[0] ?? 'Cần xác định đúng đại lượng trước khi giải.'
    },
    {
      id: `${block.id}-check-3`,
      question: `Thao tác kiểm tra phù hợp nhất sau khi giải bài “${block.title}” là`,
      options: [
        'Chỉ kiểm tra chữ số cuối.',
        'Bỏ qua chiều vector.',
        'Kiểm tra đơn vị, dấu và điều kiện áp dụng.',
        'Thay mọi điện tích bằng số dương.'
      ],
      correctAnswer: 'C',
      explanation: 'Kết quả vật lí chỉ có ý nghĩa khi đúng đơn vị, dấu, chiều và điều kiện mô hình.'
    }
  ]
}));
