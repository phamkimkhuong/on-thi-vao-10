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
