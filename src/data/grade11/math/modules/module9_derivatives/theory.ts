import type { TheoryBlock } from '@/data/schema';

export const math11Module9Theory: TheoryBlock[] = [
  {
    id: 'tb-math11-m9-01',
    courseId: 'grade11:math',
    moduleId: 'math11-m9',
    lessonIds: ['math11-kntt-l31'],
    outcomeIds: ['out-math11-m9-01'],
    questionTypeIds: ['math11-qt31'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-2'],
    title: 'Định nghĩa và ý nghĩa của đạo hàm',
    objectives: [
      'Nhận biết bài toán tốc độ biến thiên tức thời và định nghĩa đạo hàm tại một điểm.',
      'Tính đạo hàm của hàm số đơn giản bằng định nghĩa và xét sự tồn tại bằng đạo hàm một phía.',
      'Dùng ý nghĩa hình học để xác định hệ số góc, viết tiếp tuyến và nhận biết số e.'
    ],
    content: [
      'Cho hàm số $y=f(x)$ xác định quanh $x_0$. Khi biến số thay đổi từ $x_0$ đến $x$, tỉ số $\\dfrac{f(x)-f(x_0)}{x-x_0}$ mô tả tốc độ biến thiên trung bình. Cho $x$ tiến tới $x_0$ biến tỉ số này thành tốc độ biến thiên tức thời.',
      'Nếu giới hạn hữu hạn của tỉ số biến thiên tồn tại thì giới hạn đó là đạo hàm của $f$ tại $x_0$. Có thể đặt $\\Delta x=x-x_0$ rồi cho $\\Delta x\\to0$. Khi tính bằng định nghĩa: lập tỉ số, biến đổi để khử dạng $0/0$, sau đó mới lấy giới hạn.',
      'Đạo hàm tại $x_0$ tồn tại khi đạo hàm bên trái và bên phải cùng tồn tại, hữu hạn và bằng nhau. Hàm khả vi tại một điểm thì liên tục tại điểm đó; chiều ngược lại không luôn đúng, chẳng hạn $f(x)=|x|$ liên tục nhưng không có đạo hàm tại 0.',
      'Về hình học, $f^{\\prime}(x_0)$ là hệ số góc của tiếp tuyến với đồ thị $y=f(x)$ tại $M(x_0;f(x_0))$. Vì vậy tiếp tuyến có phương trình $y-f(x_0)=f^{\\prime}(x_0)(x-x_0)$. Nếu đạo hàm bằng 0 thì tiếp tuyến song song với trục $Ox$.',
      'Nếu $s=s(t)$ là quãng đường hoặc tọa độ của vật theo thời gian thì vận tốc tức thời là $v(t)=s^{\\prime}(t)$. Tương tự, đạo hàm biểu diễn tốc độ thay đổi tức thời của nhiệt độ, điện lượng hoặc đại lượng thực tế khác; đơn vị của đạo hàm bằng đơn vị đại lượng chia cho đơn vị biến.',
      'Số $e\\approx2{,}71828$ xuất hiện từ mô hình lãi kép liên tục và có thể nhận biết qua giới hạn $e=\\lim\\limits_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^n$. Số này là cơ số tự nhiên của hàm mũ và lôgarit.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m9-01-definition',
        label: 'Đạo hàm tại một điểm',
        expression:
          'f^{\\prime}(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}',
        variables: [
          { symbol: 'x_0', meaning: 'Điểm cần tính đạo hàm' },
          { symbol: 'f', meaning: 'Hàm số xác định trong lân cận của điểm' }
        ],
        conditions: ['Giới hạn tồn tại và hữu hạn']
      },
      {
        id: 'form-math11-m9-01-increment',
        label: 'Dạng số gia',
        expression:
          'f^{\\prime}(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}',
        variables: [{ symbol: 'h', meaning: 'Số gia của biến số' }],
        conditions: ['$h\\ne0$ trước khi lấy giới hạn', 'Giới hạn tồn tại và hữu hạn']
      },
      {
        id: 'form-math11-m9-01-tangent',
        label: 'Phương trình tiếp tuyến',
        expression:
          'y-f(x_0)=f^{\\prime}(x_0)(x-x_0)',
        variables: [
          { symbol: 'M(x_0;f(x_0))', meaning: 'Tiếp điểm' },
          { symbol: 'f^{\\prime}(x_0)', meaning: 'Hệ số góc tiếp tuyến' }
        ],
        conditions: ['$f$ có đạo hàm tại $x_0$']
      },
      {
        id: 'form-math11-m9-01-velocity',
        label: 'Vận tốc tức thời',
        expression: 'v(t_0)=s^{\\prime}(t_0)',
        variables: [
          { symbol: 's(t)', meaning: 'Tọa độ hoặc quãng đường theo thời gian' },
          { symbol: 'v(t_0)', meaning: 'Vận tốc tức thời tại thời điểm $t_0$' }
        ],
        conditions: ['$s$ có đạo hàm tại $t_0$']
      },
      {
        id: 'form-math11-m9-01-e',
        label: 'Một giới hạn xác định số e',
        expression:
          'e=\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n',
        variables: [{ symbol: 'n', meaning: 'Số lần ghép lãi trong mô hình lãi kép' }],
        conditions: ['$n$ là số nguyên dương']
      }
    ],
    keyPoints: [
      'Đạo hàm là giới hạn của tỉ số biến thiên, không phải một tỉ số tại $x=x_0$.',
      'Đạo hàm hai phía tồn tại khi hai đạo hàm một phía bằng nhau và hữu hạn.',
      'Hệ số góc tiếp tuyến và tốc độ biến thiên tức thời đều được biểu diễn bằng đạo hàm.',
      'Viết tiếp tuyến phải tính đủ $x_0$, $f(x_0)$ và $f^{\\prime}(x_0)$.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m9-01-definition',
        title: 'Tính đạo hàm bằng định nghĩa',
        problem: 'Dùng định nghĩa tính đạo hàm của $f(x)=x^2$ tại $x_0=2$.',
        steps: [
          'Lập tỉ số $\\dfrac{f(2+h)-f(2)}{h}=\\dfrac{(2+h)^2-4}{h}$.',
          'Với $h\\ne0$, rút gọn được $\\dfrac{4h+h^2}{h}=4+h$.',
          'Cho $h\\to0$, giới hạn bằng 4.'
        ],
        answer: '$f^{\\prime}(2)=4$.'
      },
      {
        id: 'ex-math11-m9-01-tangent',
        title: 'Viết phương trình tiếp tuyến',
        problem: 'Viết tiếp tuyến của đồ thị $y=x^2$ tại điểm có hoành độ 1.',
        steps: [
          'Tiếp điểm là $M(1;1)$ và $f^{\\prime}(x)=2x$.',
          'Hệ số góc tại $x_0=1$ là $f^{\\prime}(1)=2$.',
          'Dùng $y-1=2(x-1)$ rồi rút gọn.'
        ],
        answer: '$y=2x-1$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m9-01-definition',
        question: 'Đạo hàm của $f$ tại $x_0$ biểu diễn đại lượng nào sau đây?',
        options: [
          'Giá trị lớn nhất của hàm số',
          'Tốc độ biến thiên tức thời tại $x_0$',
          'Tốc độ biến thiên trung bình trên mọi khoảng',
          'Diện tích phía dưới đồ thị'
        ],
        correctAnswer: 'B',
        explanation:
          'Đạo hàm là giới hạn của tốc độ biến thiên trung bình khi độ dài khoảng tiến tới 0.'
      }
    ],
    orderIndex: 31,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m9-02',
    courseId: 'grade11:math',
    moduleId: 'math11-m9',
    lessonIds: ['math11-kntt-l32'],
    outcomeIds: ['out-math11-m9-02'],
    questionTypeIds: ['math11-qt32'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-2'],
    title: 'Các quy tắc tính đạo hàm',
    objectives: [
      'Ghi nhớ đạo hàm của các hàm số sơ cấp cơ bản trong đúng miền xác định.',
      'Sử dụng đúng quy tắc đạo hàm của tổng, hiệu, tích, thương và hàm hợp.',
      'Tính đạo hàm trong bài toán đại số, lượng giác, mũ–lôgarit và thực tiễn đơn giản.'
    ],
    content: [
      'Các công thức đạo hàm cơ bản giúp thay thế việc dùng định nghĩa trong mỗi bài toán. Cần nhận dạng hàm ngoài cùng trước: tổng, tích, thương hay hàm hợp; sau đó áp dụng quy tắc tương ứng từ ngoài vào trong.',
      'Đối với lũy thừa, $(x^n)^{\\prime}=nx^{n-1}$. Công thức căn bậc hai là trường hợp số mũ $1/2$ nhưng đạo hàm chỉ xác định khi $x>0$. Đạo hàm của hằng số bằng 0 và đạo hàm của hàm bậc nhất $ax+b$ bằng $a$.',
      'Các hàm lượng giác có công thức riêng: sin đổi thành cos, cos đổi thành trừ sin; tan và cot có mẫu bình phương. Phải giữ điều kiện xác định của hàm số ban đầu.',
      'Với hàm mũ, cơ số $e$ cho đạo hàm không đổi dạng; cơ số $a$ sinh thêm hệ số $\\ln a$. Với lôgarit, $\\ln x$ có đạo hàm $1/x$ và $\\log_a x$ có thêm $\\ln a$ ở mẫu.',
      'Đạo hàm của tích không phải tích hai đạo hàm và đạo hàm của thương không phải thương hai đạo hàm. Với hàm hợp $y=f(u(x))$, sau khi đạo hàm hàm ngoài theo $u$ phải nhân với $u^{\\prime}(x)$. Đây là hệ số thường bị bỏ quên.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m9-02-power',
        label: 'Hằng số, lũy thừa và căn',
        expression:
          '(C)^{\\prime}=0,\\quad(x^n)^{\\prime}=nx^{n-1},\\quad(\\sqrt{x})^{\\prime}=\\frac1{2\\sqrt{x}}',
        variables: [
          { symbol: 'C', meaning: 'Hằng số' },
          { symbol: 'n', meaning: 'Số nguyên dương' }
        ],
        conditions: ['$x>0$ đối với đạo hàm của $\\sqrt{x}$']
      },
      {
        id: 'form-math11-m9-02-trigonometric',
        label: 'Đạo hàm lượng giác',
        expression:
          '(\\sin x)^{\\prime}=\\cos x,\\quad(\\cos x)^{\\prime}=-\\sin x,\\quad(\\tan x)^{\\prime}=\\frac1{\\cos^2x},\\quad(\\cot x)^{\\prime}=-\\frac1{\\sin^2x}',
        variables: [{ symbol: 'x', meaning: 'Biến số' }],
        conditions: [
          '$\\cos x\\ne0$ đối với $\\tan x$',
          '$\\sin x\\ne0$ đối với $\\cot x$'
        ]
      },
      {
        id: 'form-math11-m9-02-exponential-log',
        label: 'Đạo hàm mũ và lôgarit',
        expression:
          '(e^x)^{\\prime}=e^x,\\quad(a^x)^{\\prime}=a^x\\ln a,\\quad(\\ln x)^{\\prime}=\\frac1x,\\quad(\\log_ax)^{\\prime}=\\frac1{x\\ln a}',
        variables: [{ symbol: 'a', meaning: 'Cơ số của hàm mũ hoặc lôgarit' }],
        conditions: ['$a>0$, $a\\ne1$', '$x>0$ đối với hàm lôgarit']
      },
      {
        id: 'form-math11-m9-02-operations',
        label: 'Tổng, tích và thương',
        expression:
          '(u\\pm v)^{\\prime}=u^{\\prime}\\pm v^{\\prime},\\quad(uv)^{\\prime}=u^{\\prime}v+uv^{\\prime},\\quad\\left(\\frac uv\\right)^{\\prime}=\\frac{u^{\\prime}v-uv^{\\prime}}{v^2}',
        variables: [
          { symbol: 'u,v', meaning: 'Các hàm số có đạo hàm' }
        ],
        conditions: ['$v\\ne0$ trong quy tắc thương']
      },
      {
        id: 'form-math11-m9-02-composite',
        label: 'Đạo hàm hàm hợp',
        expression:
          '\\bigl(f(u(x))\\bigr)^{\\prime}=f^{\\prime}(u(x))u^{\\prime}(x)',
        variables: [
          { symbol: 'f', meaning: 'Hàm bên ngoài' },
          { symbol: 'u', meaning: 'Hàm bên trong' }
        ],
        conditions: ['$u$ và $f$ có đạo hàm tại các điểm tương ứng']
      }
    ],
    keyPoints: [
      'Nhận dạng phép toán ngoài cùng trước khi lấy đạo hàm.',
      'Tích dùng $u^{\\prime}v+uv^{\\prime}$; thương dùng mẫu $v^2$.',
      'Hàm hợp luôn cần nhân với đạo hàm của hàm bên trong.',
      'Giữ điều kiện xác định của căn thức, thương, tan, cot và lôgarit.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m9-02-product',
        title: 'Quy tắc tích',
        problem: 'Tính đạo hàm của $y=x^2\\sin x$.',
        steps: [
          'Đặt $u=x^2$, $v=\\sin x$ nên $u^{\\prime}=2x$, $v^{\\prime}=\\cos x$.',
          'Áp dụng $(uv)^{\\prime}=u^{\\prime}v+uv^{\\prime}$.'
        ],
        answer: '$y^{\\prime}=2x\\sin x+x^2\\cos x$.'
      },
      {
        id: 'ex-math11-m9-02-composite',
        title: 'Quy tắc hàm hợp',
        problem: 'Tính đạo hàm của $y=(2x+1)^3$.',
        steps: [
          'Hàm ngoài là $u^3$, hàm trong là $u=2x+1$.',
          'Đạo hàm hàm ngoài là $3u^2$ và $u^{\\prime}=2$.',
          'Nhân hai kết quả theo quy tắc hàm hợp.'
        ],
        answer: '$y^{\\prime}=6(2x+1)^2$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m9-02-rules',
        question: 'Đạo hàm của $y=(3x-1)^2$ là:',
        options: ['$2(3x-1)$', '$6(3x-1)$', '$6x-2$', '$(3x-1)^2$'],
        correctAnswer: 'B',
        explanation:
          'Đạo hàm hàm ngoài là $2(3x-1)$ rồi nhân đạo hàm hàm trong bằng 3.'
      }
    ],
    orderIndex: 32,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m9-03',
    courseId: 'grade11:math',
    moduleId: 'math11-m9',
    lessonIds: ['math11-kntt-l33'],
    outcomeIds: ['out-math11-m9-03'],
    questionTypeIds: ['math11-qt33'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-2'],
    title: 'Đạo hàm cấp hai',
    objectives: [
      'Nhận biết đạo hàm cấp hai là đạo hàm của đạo hàm cấp một.',
      'Tính đạo hàm cấp hai của hàm đa thức, lượng giác, mũ và lôgarit đơn giản.',
      'Giải thích vận tốc và gia tốc trong mô hình chuyển động.'
    ],
    content: [
      'Nếu hàm số $f$ có đạo hàm $f^{\\prime}$ và $f^{\\prime}$ tiếp tục có đạo hàm thì đạo hàm của $f^{\\prime}$ được gọi là đạo hàm cấp hai của $f$, kí hiệu $f^{\\prime\\prime}$ hoặc $y^{\\prime\\prime}$. Ta lấy đạo hàm lần lượt hai lần, không bình phương kết quả lần thứ nhất.',
      'Khi tính, nên viết rõ $f^{\\prime}(x)$ trước rồi mới tính $f^{\\prime\\prime}(x)$. Mỗi lần đều phải áp dụng lại đầy đủ quy tắc tích, thương hoặc hàm hợp nếu biểu thức vẫn có cấu trúc tương ứng.',
      'Trong chuyển động thẳng có tọa độ $s(t)$, vận tốc là đạo hàm cấp một $v(t)=s^{\\prime}(t)$ và gia tốc là đạo hàm của vận tốc: $a(t)=v^{\\prime}(t)=s^{\\prime\\prime}(t)$. Nếu $s$ đo bằng mét và $t$ bằng giây thì vận tốc có đơn vị m/s, gia tốc có đơn vị m/s$^2$.',
      'Khi đề cho trực tiếp hàm vận tốc $v(t)$, chỉ cần lấy một đạo hàm để tìm gia tốc. Khi đề cho hàm tọa độ $s(t)$, phải lấy hai đạo hàm. Luôn thay đúng thời điểm sau khi đã tìm được hàm cần dùng.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m9-03-second',
        label: 'Đạo hàm cấp hai',
        expression:
          'f^{\\prime\\prime}(x)=\\left(f^{\\prime}(x)\\right)^{\\prime}',
        variables: [
          { symbol: 'f^{\\prime}', meaning: 'Đạo hàm cấp một' },
          { symbol: 'f^{\\prime\\prime}', meaning: 'Đạo hàm cấp hai' }
        ],
        conditions: ['$f^{\\prime}$ có đạo hàm tại điểm đang xét']
      },
      {
        id: 'form-math11-m9-03-motion',
        label: 'Vận tốc và gia tốc',
        expression:
          'v(t)=s^{\\prime}(t),\\qquad a(t)=v^{\\prime}(t)=s^{\\prime\\prime}(t)',
        variables: [
          { symbol: 's(t)', meaning: 'Tọa độ theo thời gian' },
          { symbol: 'v(t)', meaning: 'Vận tốc tức thời' },
          { symbol: 'a(t)', meaning: 'Gia tốc tức thời' }
        ],
        conditions: ['$s$ có đạo hàm cấp hai tại thời điểm đang xét']
      }
    ],
    keyPoints: [
      '$f^{\\prime\\prime}$ là đạo hàm của $f^{\\prime}$, không phải $(f^{\\prime})^2$.',
      'Cho tọa độ thì đạo hàm hai lần để tìm gia tốc; cho vận tốc thì đạo hàm một lần.',
      'Đơn vị gia tốc là đơn vị độ dài chia cho bình phương đơn vị thời gian.',
      'Thay thời điểm sau khi đã tìm đúng hàm vận tốc hoặc gia tốc.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m9-03-second',
        title: 'Tính đạo hàm cấp hai',
        problem: 'Tìm đạo hàm cấp hai của $f(x)=x^3-2x$.',
        steps: [
          'Đạo hàm lần thứ nhất: $f^{\\prime}(x)=3x^2-2$.',
          'Đạo hàm lần thứ hai: $f^{\\prime\\prime}(x)=6x$.'
        ],
        answer: '$f^{\\prime\\prime}(x)=6x$.'
      },
      {
        id: 'ex-math11-m9-03-acceleration',
        title: 'Tính gia tốc',
        problem: 'Một vật có tọa độ $s(t)=t^3-2t$. Tính gia tốc tại $t=2$.',
        steps: [
          'Vận tốc: $v(t)=s^{\\prime}(t)=3t^2-2$.',
          'Gia tốc: $a(t)=v^{\\prime}(t)=6t$.',
          'Thay $t=2$ được $a(2)=12$.'
        ],
        answer: 'Gia tốc tại $t=2$ bằng $12$ đơn vị độ dài trên đơn vị thời gian bình phương.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m9-03-second',
        question: 'Nếu $s(t)$ là tọa độ thì gia tốc tức thời bằng:',
        options: ['$s(t)^2$', '$s^{\\prime}(t)$', '$s^{\\prime\\prime}(t)$', '$1/s(t)$'],
        correctAnswer: 'C',
        explanation:
          'Vận tốc là đạo hàm cấp một của tọa độ và gia tốc là đạo hàm của vận tốc.'
      }
    ],
    orderIndex: 33,
    reviewStatus: 'source_checked'
  }
];

math11Module9Theory[0].content += '\n\nQuy trình an toàn khi dùng định nghĩa: tính $f(x_0)$; lập tỉ số số gia; biến đổi với $h\\ne0$; lấy giới hạn; nếu hàm từng đoạn thì phải so sánh hai đạo hàm một phía. Với tiếp tuyến, luôn xác định đủ tiếp điểm và hệ số góc trước khi viết phương trình.';
math11Module9Theory[0].workedExamples.push({
  id:'ex-math11-m9-01-one-sided',
  title:'Kiểm tra đạo hàm một phía',
  problem:'Xét sự tồn tại đạo hàm của $f(x)=|x|$ tại $x=0$.',
  steps:[
    'Với $h>0$, $[f(h)-f(0)]/h=h/h=1$.',
    'Với $h<0$, $[f(h)-f(0)]/h=(-h)/h=-1$.',
    'Hai giới hạn một phía không bằng nhau.'
  ],
  answer:'Hàm không có đạo hàm tại 0.'
});
math11Module9Theory[0].checkpoints.push(
  {id:'cp-math11-m9-01-continuity',question:'Nếu hàm có đạo hàm tại $x_0$ thì hàm:',options:['Chắc chắn liên tục tại $x_0$','Chắc chắn gián đoạn','Có giá trị bằng 0','Có tiếp tuyến đứng'],correctAnswer:'A',explanation:'Khả vi tại một điểm kéo theo liên tục tại điểm đó.'},
  {id:'cp-math11-m9-01-tangent',question:'Nếu $f^{\\prime}(x_0)=0$ thì tiếp tuyến tại điểm đó:',options:['Song song $Oy$','Song song $Ox$','Luôn đi qua gốc tọa độ','Không tồn tại'],correctAnswer:'B',explanation:'Hệ số góc tiếp tuyến bằng 0.'},
  {id:'cp-math11-m9-01-velocity',question:'Nếu $s(t)$ là tọa độ thì vận tốc tức thời là:',options:['$s(t)^2$','$s^{\\prime}(t)$','$s^{\\prime\\prime}(t)$','$1/s(t)$'],correctAnswer:'B',explanation:'Vận tốc là tốc độ biến thiên tức thời của tọa độ theo thời gian.'}
);

math11Module9Theory[1].content += '\n\nKhi biểu thức có nhiều lớp, nên đánh dấu hàm ngoài và hàm trong trước khi đạo hàm. Sau cùng, kiểm tra lại ba lỗi phổ biến: thiếu một hạng của quy tắc tích, đảo sai thứ tự tử của quy tắc thương và quên nhân đạo hàm hàm trong.';
math11Module9Theory[1].workedExamples.push({
  id:'ex-math11-m9-02-mixed',
  title:'Kết hợp quy tắc thương và hàm hợp',
  problem:'Tính đạo hàm của $y=\\dfrac{\\ln(1+x^2)}{x}$ với $x\\ne0$.',
  steps:[
    'Đặt $u=\\ln(1+x^2)$, $v=x$.',
    '$u^{\\prime}=2x/(1+x^2)$ và $v^{\\prime}=1$.',
    'Dùng quy tắc thương $(u/v)^{\\prime}=(u^{\\prime}v-uv^{\\prime})/v^2$.'
  ],
  answer:'$y^{\\prime}=\\dfrac{2x^2/(1+x^2)-\\ln(1+x^2)}{x^2}$.'
});
math11Module9Theory[1].checkpoints.push(
  {id:'cp-math11-m9-02-product',question:'$(uv)^{\\prime}$ bằng:',options:['$u^{\\prime}v^{\\prime}$','$u^{\\prime}v+uv^{\\prime}$','$u^{\\prime}+v^{\\prime}$','$uv$'],correctAnswer:'B',explanation:'Đây là quy tắc đạo hàm của tích.'},
  {id:'cp-math11-m9-02-chain',question:'Đạo hàm của $(2x+1)^3$ là:',options:['$3(2x+1)^2$','$6(2x+1)^2$','$6x^2$','$(2x+1)^2$'],correctAnswer:'B',explanation:'Đạo hàm hàm ngoài rồi nhân đạo hàm hàm trong bằng 2.'},
  {id:'cp-math11-m9-02-log',question:'Đạo hàm của $\\ln(1+x^2)$ là:',options:['$1/(1+x^2)$','$2x/(1+x^2)$','$2x\\ln x$','$\\ln(2x)$'],correctAnswer:'B',explanation:'Dùng quy tắc hàm hợp với hàm trong $1+x^2$.'}
);

math11Module9Theory[2].content += '\n\nĐạo hàm cấp hai có thể tiếp tục chứa tích, thương hoặc hàm hợp, vì vậy mỗi lần đạo hàm đều phải áp dụng lại các quy tắc đầy đủ. Trong bài chuyển động, dấu của vận tốc mô tả chiều chuyển động còn dấu của gia tốc mô tả chiều biến thiên của vận tốc; không nên đồng nhất hai dấu này.';
math11Module9Theory[2].workedExamples.push({
  id:'ex-math11-m9-03-product',
  title:'Đạo hàm cấp hai của một tích',
  problem:'Tính $f^{\\prime\\prime}(x)$ với $f(x)=xe^x$.',
  steps:[
    '$f^{\\prime}(x)=e^x+xe^x=e^x(1+x)$.',
    'Lấy đạo hàm lần nữa và tiếp tục dùng quy tắc tích.',
    '$f^{\\prime\\prime}(x)=e^x(1+x)+e^x$.'
  ],
  answer:'$f^{\\prime\\prime}(x)=e^x(x+2)$.'
});
math11Module9Theory[2].checkpoints.push(
  {id:'cp-math11-m9-03-not-square',question:'Đạo hàm cấp hai $f^{\\prime\\prime}$ là:',options:['$(f^{\\prime})^2$','Đạo hàm của $f^{\\prime}$','$2f^{\\prime}$','$f^2$'],correctAnswer:'B',explanation:'Đó là phép lấy đạo hàm liên tiếp hai lần.'},
  {id:'cp-math11-m9-03-velocity',question:'Nếu đề cho trực tiếp $v(t)$, gia tốc được tính bằng:',options:['$v(t)^2$','$v^{\\prime}(t)$','$v^{\\prime\\prime}(t)$','$1/v(t)$'],correctAnswer:'B',explanation:'Gia tốc là đạo hàm của vận tốc.'},
  {id:'cp-math11-m9-03-unit',question:'Nếu quãng đường đo bằng m và thời gian bằng s, đơn vị gia tốc là:',options:['m','$\\mathrm{m/s}$','$\\mathrm{m/s^2}$','$\\mathrm{s/m}$'],correctAnswer:'C',explanation:'Gia tốc là đạo hàm bậc hai của vị trí theo thời gian.'}
);
