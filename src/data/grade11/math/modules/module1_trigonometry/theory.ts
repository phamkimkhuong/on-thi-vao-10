import type { TheoryBlock } from '@/data/schema';

export const math11Module1Theory: TheoryBlock[] = [
  {
    id: 'tb-math11-m1-01',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l1'],
    outcomeIds: ['out-math11-m1-01'],
    questionTypeIds: ['math11-qt01'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Góc lượng giác và giá trị lượng giác',
    objectives: [
      'Nhận biết số đo radian, góc cùng tia đầu–tia cuối và hệ thức Chasles.',
      'Tính giá trị lượng giác bằng đường tròn lượng giác và xác định đúng dấu theo góc phần tư.'
    ],
    content: [
      'Góc lượng giác $(Ou,Ov)$ mô tả phép quay có hướng từ tia $Ou$ đến tia $Ov$. Chiều ngược kim đồng hồ là chiều dương; chiều kim đồng hồ là chiều âm. Các góc cùng tia đầu và tia cuối có số đo sai khác nhau một bội của $2\\pi$.',
      'Trên đường tròn lượng giác, điểm biểu diễn góc $\\alpha$ có tọa độ $M(\\cos\\alpha;\\sin\\alpha)$. Vì vậy dấu của $\\sin\\alpha$ và $\\cos\\alpha$ được xác định trực tiếp từ tọa độ của điểm $M$.',
      'Khi biết một giá trị lượng giác, dùng hệ thức cơ bản để tìm độ lớn của giá trị còn lại, sau đó dùng khoảng chứa góc để chọn dấu. Không được lấy căn rồi tự động chọn dấu dương.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m1-01-chasles',
        label: 'Hệ thức Chasles',
        expression: '\\operatorname{sđ}(Ou,Ov)+\\operatorname{sđ}(Ov,Ow)=\\operatorname{sđ}(Ou,Ow)+2k\\pi',
        variables: [
          { symbol: 'k', meaning: 'Số nguyên biểu diễn số vòng quay đầy đủ' }
        ],
        conditions: ['Ba tia $Ou,Ov,Ow$ có chung gốc $O$', '$k\\in\\mathbb Z$']
      },
      {
        id: 'form-math11-m1-01-fundamental',
        label: 'Hệ thức lượng giác cơ bản',
        expression: '\\sin^2\\alpha+\\cos^2\\alpha=1',
        variables: [
          { symbol: '\\alpha', meaning: 'Góc lượng giác bất kỳ' }
        ],
        conditions: ['Đúng với mọi $\\alpha\\in\\mathbb R$']
      },
      {
        id: 'form-math11-m1-01-tan',
        label: 'Liên hệ tan và cot',
        expression: '\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha},\\qquad \\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}',
        variables: [
          { symbol: '\\alpha', meaning: 'Góc lượng giác' }
        ],
        conditions: ['$\\cos\\alpha\\ne0$ đối với $\\tan\\alpha$', '$\\sin\\alpha\\ne0$ đối với $\\cot\\alpha$']
      }
    ],
    keyPoints: [
      'Góc cùng tia cuối: $\\alpha+2k\\pi$, $k\\in\\mathbb Z$.',
      'Tọa độ điểm trên đường tròn lượng giác là $(\\cos\\alpha;\\sin\\alpha)$.',
      'Tính độ lớn trước, chọn dấu sau theo góc phần tư.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m1-01',
        title: 'Tính cos khi biết sin',
        problem: 'Cho $\\sin\\alpha=\\frac35$ và $\\frac\\pi2<\\alpha<\\pi$. Tính $\\cos\\alpha$.',
        steps: [
          'Từ $\\sin^2\\alpha+\\cos^2\\alpha=1$, suy ra $\\cos^2\\alpha=1-\\frac9{25}=\\frac{16}{25}$.',
          'Góc $\\alpha$ thuộc phần tư II nên $\\cos\\alpha<0$. Do đó $\\cos\\alpha=-\\frac45$.'
        ],
        answer: '$\\cos\\alpha=-\\frac45$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m1-01',
        question: 'Nếu $\\alpha$ thuộc phần tư III thì cặp dấu nào đúng?',
        options: ['$\\sin\\alpha>0,\\cos\\alpha>0$', '$\\sin\\alpha>0,\\cos\\alpha<0$', '$\\sin\\alpha<0,\\cos\\alpha<0$', '$\\sin\\alpha<0,\\cos\\alpha>0$'],
        correctAnswer: 'C',
        explanation: 'Ở phần tư III, cả tung độ và hoành độ của điểm trên đường tròn lượng giác đều âm.'
      }
    ],
    orderIndex: 1,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m1-02',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l2'],
    outcomeIds: ['out-math11-m1-02'],
    questionTypeIds: ['math11-qt02'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Công thức và phép biến đổi lượng giác',
    objectives: [
      'Phân biệt đúng dấu trong các công thức cộng.',
      'Vận dụng công thức nhân đôi và biến đổi tích–tổng để tính, rút gọn biểu thức.'
    ],
    content: [
      'Công thức cộng là nền tảng để suy ra các công thức góc nhân đôi và nhiều phép biến đổi khác. Một cách ghi nhớ an toàn: công thức sin giữ dấu ở giữa hai hạng; công thức cos đổi dấu ở hạng tích hai sin.',
      'Không nên áp dụng công thức theo hình thức. Trước mỗi phép biến đổi, cần xác định mục tiêu: tạo góc đặc biệt, giảm số phép tính, chuyển tổng thành tích để giải phương trình, hoặc chuyển tích thành tổng để xử lí biểu thức.',
      'Khi biến đổi, giữ nguyên từng bước đủ rõ để kiểm tra dấu và hệ số. Các công thức tích–tổng đều có hệ số $\\frac12$ hoặc $2$ nên rất dễ bị bỏ sót.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m1-02-addition',
        label: 'Công thức cộng',
        expression: '\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b,\\qquad \\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b',
        variables: [
          { symbol: 'a,b', meaning: 'Các góc lượng giác' }
        ],
        conditions: ['Đúng với mọi $a,b\\in\\mathbb R$']
      },
      {
        id: 'form-math11-m1-02-double',
        label: 'Công thức góc nhân đôi',
        expression: '\\sin2a=2\\sin a\\cos a,\\qquad \\cos2a=\\cos^2a-\\sin^2a',
        variables: [
          { symbol: 'a', meaning: 'Góc lượng giác' }
        ],
        conditions: ['Đúng với mọi $a\\in\\mathbb R$']
      },
      {
        id: 'form-math11-m1-02-sum-product',
        label: 'Một công thức biến đổi tổng thành tích',
        expression: '\\cos a+\\cos b=2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}',
        variables: [
          { symbol: 'a,b', meaning: 'Các góc lượng giác' }
        ],
        conditions: ['Đúng với mọi $a,b\\in\\mathbb R$']
      }
    ],
    keyPoints: [
      'Sin giữ dấu, cos đổi dấu trong công thức cộng.',
      'Xác định đích biến đổi trước khi chọn công thức.',
      'Luôn kiểm tra hệ số 2 hoặc $\\frac12$ trong công thức tích–tổng.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m1-02',
        title: 'Tính giá trị góc không đặc biệt',
        problem: 'Tính $\\cos75^\\circ$.',
        steps: [
          'Viết $75^\\circ=45^\\circ+30^\\circ$ và dùng công thức $\\cos(a+b)$.',
          '$\\cos75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}-\\frac{\\sqrt2}{2}\\frac12=\\frac{\\sqrt6-\\sqrt2}{4}$.'
        ],
        answer: '$\\cos75^\\circ=\\frac{\\sqrt6-\\sqrt2}{4}$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m1-02',
        question: 'Công thức nào đúng?',
        options: ['$\\cos(a+b)=\\cos a\\cos b+\\sin a\\sin b$', '$\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$', '$\\sin(a+b)=\\sin a\\cos b-\\cos a\\sin b$', '$\\sin2a=\\sin a\\cos a$'],
        correctAnswer: 'B',
        explanation: 'Công thức cos của tổng có dấu trừ giữa hai tích.'
      }
    ],
    orderIndex: 2,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m1-03',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l3'],
    outcomeIds: ['out-math11-m1-03'],
    questionTypeIds: ['math11-qt03'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Hàm số lượng giác và đồ thị',
    objectives: [
      'Xác định miền xác định, tập giá trị, tính chẵn lẻ và chu kì của bốn hàm lượng giác.',
      'Đọc các điểm đặc biệt và khoảng đơn điệu trên đồ thị.'
    ],
    content: [
      'Bốn hàm số lượng giác được xác định từ đường tròn lượng giác. Hàm $\\sin x$ và $\\cos x$ có tập xác định $\\mathbb R$, tập giá trị $[-1;1]$ và chu kì $2\\pi$. Hàm $\\tan x$ và $\\cot x$ có tập giá trị $\\mathbb R$, chu kì $\\pi$ nhưng bị gián đoạn tại những điểm mẫu số bằng 0.',
      '$\\sin x$ và $\\tan x$ là các hàm lẻ; $\\cos x$ là hàm chẵn; $\\cot x$ là hàm lẻ trên miền xác định. Tính chẵn lẻ giúp suy ra tính đối xứng của đồ thị.',
      'Khi đọc đồ thị, cần kiểm tra đồng thời chu kì, vị trí nghiệm, điểm cực trị và đường tiệm cận đứng. Chỉ một đặc điểm thường chưa đủ để nhận dạng chắc chắn.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m1-03-period',
        label: 'Tính tuần hoàn',
        expression: '\\sin(x+2\\pi)=\\sin x,\\quad \\cos(x+2\\pi)=\\cos x,\\quad \\tan(x+\\pi)=\\tan x',
        variables: [
          { symbol: 'x', meaning: 'Biến số thực thuộc miền xác định của hàm tương ứng' }
        ],
        conditions: ['$x\\in\\mathbb R$ đối với sin, cos', '$x\\ne\\frac\\pi2+k\\pi$ đối với tan']
      },
      {
        id: 'form-math11-m1-03-domain',
        label: 'Miền xác định của tan và cot',
        expression: 'D_{\\tan}=\\mathbb R\\setminus\\left\\{\\frac\\pi2+k\\pi\\right\\},\\qquad D_{\\cot}=\\mathbb R\\setminus\\{k\\pi\\}',
        variables: [
          { symbol: 'k', meaning: 'Số nguyên' }
        ],
        conditions: ['$k\\in\\mathbb Z$']
      }
    ],
    keyPoints: [
      'Sin, cos có chu kì $2\\pi$; tan, cot có chu kì $\\pi$.',
      'Sin, tan, cot là hàm lẻ; cos là hàm chẵn.',
      'Tan và cot không xác định tại các điểm làm mẫu số bằng 0.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m1-03',
        title: 'Tìm tập xác định',
        problem: 'Tìm tập xác định của $y=\\tan(2x)$.',
        steps: [
          'Hàm tan xác định khi $\\cos(2x)\\ne0$, tức $2x\\ne\\frac\\pi2+k\\pi$.',
          'Chia hai vế cho 2: $x\\ne\\frac\\pi4+k\\frac\\pi2$, với $k\\in\\mathbb Z$.'
        ],
        answer: '$D=\\mathbb R\\setminus\\left\\{\\frac\\pi4+k\\frac\\pi2\\mid k\\in\\mathbb Z\\right\\}$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m1-03',
        question: 'Khẳng định nào đúng?',
        options: ['$y=\\sin x$ là hàm chẵn', '$y=\\cos x$ là hàm lẻ', '$y=\\tan x$ có chu kì $\\pi$', '$y=\\cot x$ xác định với mọi số thực'],
        correctAnswer: 'C',
        explanation: '$\\tan(x+\\pi)=\\tan x$, nên hàm tan có chu kì $\\pi$.'
      }
    ],
    orderIndex: 3,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m1-04',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l4'],
    outcomeIds: ['out-math11-m1-04'],
    questionTypeIds: ['math11-qt04'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Phương trình lượng giác cơ bản',
    objectives: [
      'Viết đúng công thức nghiệm của bốn phương trình lượng giác cơ bản.',
      'Giải phương trình đưa trực tiếp về dạng cơ bản và lọc nghiệm theo miền.'
    ],
    content: [
      'Phương trình lượng giác cơ bản được giải bằng cách đối chiếu giá trị trên đường tròn hoặc đồ thị lượng giác. Với sin và cos thường có hai họ nghiệm trong một chu kì; với tan và cot có một họ nghiệm theo chu kì $\\pi$.',
      'Trước khi viết nghiệm cần kiểm tra điều kiện tồn tại: $|m|\\le1$ đối với $\\sin u=m$ và $\\cos u=m$. Sau khi tìm nghiệm của biến trung gian $u$, phải giải tiếp phương trình theo biến $x$.',
      'Nếu đề giới hạn nghiệm trên một đoạn hoặc khoảng, hãy viết nghiệm tổng quát trước rồi tìm các số nguyên $k$ thỏa miền. Không nên chỉ nhìn đồ thị và liệt kê thiếu nghiệm ở đầu mút.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m1-04-sin',
        label: 'Nghiệm phương trình sin',
        expression: '\\sin x=\\sin\\alpha\\Leftrightarrow\\begin{cases}x=\\alpha+2k\\pi\\\\x=\\pi-\\alpha+2k\\pi\\end{cases}',
        variables: [
          { symbol: 'k', meaning: 'Số nguyên' },
          { symbol: '\\alpha', meaning: 'Góc có giá trị sin đã biết' }
        ],
        conditions: ['$k\\in\\mathbb Z$']
      },
      {
        id: 'form-math11-m1-04-cos',
        label: 'Nghiệm phương trình cos',
        expression: '\\cos x=\\cos\\alpha\\Leftrightarrow x=\\pm\\alpha+2k\\pi',
        variables: [
          { symbol: 'k', meaning: 'Số nguyên' },
          { symbol: '\\alpha', meaning: 'Góc có giá trị cos đã biết' }
        ],
        conditions: ['$k\\in\\mathbb Z$']
      },
      {
        id: 'form-math11-m1-04-tan',
        label: 'Nghiệm phương trình tan',
        expression: '\\tan x=\\tan\\alpha\\Leftrightarrow x=\\alpha+k\\pi',
        variables: [
          { symbol: 'k', meaning: 'Số nguyên' },
          { symbol: '\\alpha', meaning: 'Góc có giá trị tan đã biết' }
        ],
        conditions: ['$k\\in\\mathbb Z$', 'Các biểu thức tan phải xác định']
      }
    ],
    keyPoints: [
      'Sin và cos: kiểm tra $|m|\\le1$.',
      'Sin thường có hai họ nghiệm; tan và cot có chu kì nghiệm $\\pi$.',
      'Giải xong biến trung gian rồi mới lọc nghiệm theo miền.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m1-04',
        title: 'Giải phương trình có góc bội',
        problem: 'Giải phương trình $\\cos(2x)=\\cos\\frac\\pi3$.',
        steps: [
          'Dùng công thức nghiệm cos: $2x=\\pm\\frac\\pi3+k2\\pi$.',
          'Chia hai vế cho 2: $x=\\pm\\frac\\pi6+k\\pi$, với $k\\in\\mathbb Z$.'
        ],
        answer: '$x=\\pm\\frac\\pi6+k\\pi$, $k\\in\\mathbb Z$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m1-04',
        question: 'Nghiệm của $\\tan x=1$ là:',
        options: ['$x=\\frac\\pi4+k\\pi$', '$x=\\frac\\pi4+k2\\pi$', '$x=\\pm\\frac\\pi4+k2\\pi$', '$x=\\frac{3\\pi}4+k\\pi$'],
        correctAnswer: 'A',
        explanation: '$1=\\tan\\frac\\pi4$ và hàm tan có chu kì $\\pi$.'
      }
    ],
    orderIndex: 4,
    reviewStatus: 'source_checked'
  }
];

math11Module1Theory[0].content += '\n\nKhi xử lí góc, nên đưa số đo về một khoảng chuẩn bằng cách cộng hoặc trừ bội của $2\\pi$, rồi mới xác định góc phần tư và dấu. Khi biết một giá trị lượng giác, dùng hệ thức cơ bản để tìm độ lớn và dùng vị trí tia cuối để chọn dấu.';
math11Module1Theory[0].workedExamples.push(
  {id:'ex-math11-m1-01-coterminal',title:'Tìm góc cùng tia cuối',problem:'Tìm góc trong $[0;2\\pi)$ cùng tia cuối với $-17\\pi/6$.',steps:['Cộng một bội thích hợp của $2\\pi$.','$-17\\pi/6+4\\pi=7\\pi/6$.'],answer:'Góc cần tìm là $7\\pi/6$.'},
  {id:'ex-math11-m1-01-values',title:'Tính giá trị theo góc phần tư',problem:'Biết $\\sin\\alpha=3/5$ và $\\alpha$ ở góc phần tư II. Tính $\\cos\\alpha$.',steps:['Từ $\\sin^2\\alpha+\\cos^2\\alpha=1$, suy ra $|\\cos\\alpha|=4/5$.','Cos âm ở góc phần tư II.'],answer:'$\\cos\\alpha=-4/5$.'}
);
math11Module1Theory[0].checkpoints.push(
  {id:'cp-math11-m1-01-radian',question:'$180^\\circ$ bằng:',options:['$\\pi/2$ rad','$\\pi$ rad','$2\\pi$ rad','$180\\pi$ rad'],correctAnswer:'B',explanation:'Quy đổi cơ bản $180^\\circ=\\pi$ rad.'},
  {id:'cp-math11-m1-01-ray',question:'Hai góc cùng tia cuối hơn kém nhau:',options:['$k\\pi$','$2k\\pi$','$\\pi/2$','$2\\pi+1$'],correctAnswer:'B',explanation:'Hiệu hai số đo phải là bội nguyên của một vòng đầy.'},
  {id:'cp-math11-m1-01-sign',question:'Ở góc phần tư III, dấu của sin và cos là:',options:['Đều dương','Sin dương, cos âm','Đều âm','Sin âm, cos dương'],correctAnswer:'C',explanation:'Cả tung độ và hoành độ của điểm trên đường tròn đều âm.'}
);

math11Module1Theory[1].content += '\n\nCó thể kiểm tra nhanh công thức bằng các góc đặc biệt như 0 hoặc $\\pi/2$. Với biểu thức phức tạp, xác định mục tiêu trước: tạo góc đặc biệt, hạ bậc, chuyển tổng thành tích để tìm nghiệm hoặc chuyển tích thành tổng để thu gọn.';
math11Module1Theory[1].workedExamples.push(
  {id:'ex-math11-m1-02-double',title:'Khai thác góc nhân đôi',problem:'Biết $\\sin x=3/5$, $\\cos x=4/5$. Tính $\\sin2x$ và $\\cos2x$.',steps:['$\\sin2x=2\\sin x\\cos x=24/25$.','$\\cos2x=\\cos^2x-\\sin^2x=7/25$.'],answer:'$\\sin2x=24/25$, $\\cos2x=7/25$.'},
  {id:'ex-math11-m1-02-sum-product',title:'Rút gọn tổng thành tích',problem:'Rút gọn $\\cos5x+\\cos3x$.',steps:['Nửa tổng hai góc là $4x$.','Nửa hiệu hai góc là $x$.','Áp dụng công thức tổng hai cos.'],answer:'$2\\cos4x\\cos x$.'}
);
math11Module1Theory[1].checkpoints.push(
  {id:'cp-math11-m1-02-sine',question:'$\\sin(a+b)$ bằng:',options:['$\\sin a\\cos b+\\cos a\\sin b$','$\\sin a\\sin b+\\cos a\\cos b$','$\\sin a\\cos b-\\cos a\\sin b$','$\\cos a\\cos b-\\sin a\\sin b$'],correctAnswer:'A',explanation:'Sin của tổng giữ dấu cộng.'},
  {id:'cp-math11-m1-02-double',question:'$\\sin2x$ bằng:',options:['$\\sin x\\cos x$','$2\\sin x\\cos x$','$2\\sin x$','$\\sin^2x$'],correctAnswer:'B',explanation:'Công thức góc nhân đôi có hệ số 2.'},
  {id:'cp-math11-m1-02-product',question:'$\\cos a+\\cos b$ được đổi thành:',options:['$2\\cos\\frac{a+b}2\\cos\\frac{a-b}2$','$2\\sin\\frac{a+b}2\\sin\\frac{a-b}2$','$\\cos(a+b)$','$\\cos(a-b)$'],correctAnswer:'A',explanation:'Đây là công thức tổng thành tích của hai cos.'}
);

math11Module1Theory[2].content += '\n\nVới hàm dạng $y=A\\sin(ax+b)+d$ hoặc $A\\cos(ax+b)+d$, biên độ là $|A|$, chu kì là $2\\pi/|a|$ và đường trung bình là $y=d$. Việc kết hợp ba đặc điểm này giúp nhận dạng đồ thị chắc chắn hơn.';
math11Module1Theory[2].workedExamples.push(
  {id:'ex-math11-m1-03-transform',title:'Đọc tham số đồ thị',problem:'Xác định biên độ, chu kì và tập giá trị của $y=3\\sin(2x)-1$.',steps:['Biên độ là $|3|=3$.','Chu kì là $2\\pi/2=\\pi$.','Dịch tập $[-3;3]$ xuống 1 đơn vị.'],answer:'Biên độ 3, chu kì $\\pi$, tập giá trị $[-4;2]$.'},
  {id:'ex-math11-m1-03-tangent-domain',title:'Miền xác định hàm tan',problem:'Tìm tập xác định của $y=\\tan(3x-\\pi/2)$.',steps:['Cần $3x-\\pi/2\\ne\\pi/2+k\\pi$.','Suy ra $3x\\ne\\pi+k\\pi$.'],answer:'$x\\ne(k+1)\\pi/3$, $k\\in\\mathbb Z$.'}
);
math11Module1Theory[2].checkpoints.push(
  {id:'cp-math11-m1-03-period-sin',question:'Chu kì của $y=\\sin(4x)$ là:',options:['$2\\pi$','$\\pi$','$\\pi/2$','$\\pi/4$'],correctAnswer:'C',explanation:'$T=2\\pi/4=\\pi/2$.'},
  {id:'cp-math11-m1-03-range',question:'Tập giá trị của $y=2\\cos x+1$ là:',options:['$[-1;3]$','$[-2;2]$','$[0;3]$','$\\mathbb R$'],correctAnswer:'A',explanation:'Nhân $[-1;1]$ với 2 rồi cộng 1.'},
  {id:'cp-math11-m1-03-parity',question:'Hàm nào sau đây là hàm chẵn?',options:['$\\sin x$','$\\cos x$','$\\tan x$','$\\cot x$'],correctAnswer:'B',explanation:'$\\cos(-x)=\\cos x$.'}
);

math11Module1Theory[3].content += '\n\nKhi tìm nghiệm trên một miền, hãy viết nghiệm tổng quát trước, giải bất đẳng thức theo tham số nguyên $k$, rồi kiểm tra riêng các đầu mút. Với phương trình bậc hai theo một giá trị lượng giác, đặt ẩn phụ nhưng phải giữ điều kiện $[-1;1]$ cho sin hoặc cos.';
math11Module1Theory[3].workedExamples.push(
  {id:'ex-math11-m1-04-interval',title:'Lọc nghiệm trên đoạn',problem:'Giải $\\sin x=1/2$ trên $[0;2\\pi]$.',steps:['Nghiệm tổng quát: $x=\\pi/6+2k\\pi$ hoặc $x=5\\pi/6+2k\\pi$.','Lọc các giá trị nằm trong đoạn.'],answer:'$x=\\pi/6$ hoặc $x=5\\pi/6$.'},
  {id:'ex-math11-m1-04-quadratic',title:'Phương trình bậc hai theo cos',problem:'Giải $2\\cos^2x-3\\cos x+1=0$.',steps:['Đặt $t=\\cos x\\in[-1;1]$.','$(2t-1)(t-1)=0$, nên $t=1/2$ hoặc $t=1$.','Giải hai phương trình cos cơ bản.'],answer:'$x=\\pm\\pi/3+2k\\pi$ hoặc $x=2k\\pi$, $k\\in\\mathbb Z$.'}
);
math11Module1Theory[3].checkpoints.push(
  {id:'cp-math11-m1-04-cos',question:'$\\cos x=1$ có nghiệm:',options:['$x=k\\pi$','$x=2k\\pi$','$x=\\pi/2+k\\pi$','$x=\\pi+2k\\pi$'],correctAnswer:'B',explanation:'Cos bằng 1 tại các góc trọn vòng.'},
  {id:'cp-math11-m1-04-existence',question:'Phương trình $\\sin x=3/2$:',options:['Có một nghiệm','Có hai nghiệm','Có vô số nghiệm','Vô nghiệm'],correctAnswer:'D',explanation:'Sin chỉ nhận giá trị trong $[-1;1]$.'},
  {id:'cp-math11-m1-04-count',question:'$\\cos x=0$ có bao nhiêu nghiệm trên $[0;2\\pi]$?',options:['$1$','$2$','$3$','$4$'],correctAnswer:'B',explanation:'Hai nghiệm là $\\pi/2$ và $3\\pi/2$.'}
);
