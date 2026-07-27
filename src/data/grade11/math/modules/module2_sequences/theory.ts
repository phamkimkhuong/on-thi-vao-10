import type { TheoryBlock } from '@/data/schema';

export const math11Module2Theory: TheoryBlock[] = [
  {
    id: 'tb-math11-m2-01',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l5'],
    outcomeIds: ['out-math11-m2-01'],
    questionTypeIds: ['math11-qt05'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Dãy số: cách cho dãy và tính chất',
    objectives: [
      'Nhận biết dãy hữu hạn, dãy vô hạn và ba cách cho dãy thường gặp.',
      'Tính số hạng từ công thức tổng quát hoặc hệ thức truy hồi; xét tăng, giảm và bị chặn.'
    ],
    content: [
      'Dãy số là một hàm số xác định trên tập các số nguyên dương hoặc một tập hữu hạn gồm các số nguyên dương đầu tiên. Giá trị tại $n$ được kí hiệu là $u_n$ và gọi là số hạng thứ $n$. Vì vậy, chỉ số $n$ và giá trị $u_n$ là hai đại lượng khác nhau.',
      'Một dãy có thể được cho bằng cách liệt kê, bằng công thức số hạng tổng quát $u_n=f(n)$, hoặc bằng hệ thức truy hồi. Với dãy truy hồi, phải biết đủ số hạng đầu và quy tắc tính số hạng sau từ các số hạng trước.',
      'Dãy tăng nếu $u_{n+1}>u_n$ với mọi $n$ hợp lệ; dãy giảm nếu $u_{n+1}<u_n$. Cách thường dùng là xét dấu $u_{n+1}-u_n$. Dãy bị chặn trên nếu tồn tại $M$ sao cho $u_n\\le M$ với mọi $n$, và bị chặn dưới nếu tồn tại $m$ sao cho $u_n\\ge m$.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m2-01-monotone',
        label: 'Tiêu chuẩn hiệu để xét đơn điệu',
        expression: 'u_{n+1}-u_n>0\\Rightarrow (u_n)\\text{ tăng};\\qquad u_{n+1}-u_n<0\\Rightarrow (u_n)\\text{ giảm}',
        variables: [
          { symbol: 'u_n', meaning: 'Số hạng thứ $n$ của dãy' },
          { symbol: 'n', meaning: 'Chỉ số nguyên dương thuộc miền xác định' }
        ],
        conditions: ['Bất đẳng thức phải đúng với mọi $n$ hợp lệ']
      },
      {
        id: 'form-math11-m2-01-bounds',
        label: 'Dãy bị chặn',
        expression: 'm\\le u_n\\le M',
        variables: [
          { symbol: 'm', meaning: 'Một cận dưới của dãy' },
          { symbol: 'M', meaning: 'Một cận trên của dãy' }
        ],
        conditions: ['Bất đẳng thức đúng với mọi số hạng của dãy']
      }
    ],
    keyPoints: [
      '$u_n$ là giá trị số hạng, còn $n$ là vị trí của số hạng.',
      'Dãy truy hồi cần số hạng đầu và quy tắc truy hồi.',
      'Không kết luận đơn điệu chỉ từ vài số hạng; phải chứng minh cho mọi $n$.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m2-01',
        title: 'Tính số hạng và xét tính tăng',
        problem: 'Cho $u_n=2n-1$. Tính $u_5$ và xét tính tăng của dãy.',
        steps: [
          'Thay $n=5$: $u_5=2\\cdot5-1=9$.',
          '$u_{n+1}-u_n=[2(n+1)-1]-(2n-1)=2>0$ với mọi $n$, nên dãy tăng.'
        ],
        answer: '$u_5=9$ và dãy $(u_n)$ tăng.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m2-01',
        question: 'Cho $u_1=2$, $u_{n+1}=u_n+3$. Giá trị $u_3$ là:',
        options: ['$5$', '$8$', '$9$', '$11$'],
        correctAnswer: 'B',
        explanation: '$u_2=2+3=5$ và $u_3=5+3=8$.'
      }
    ],
    orderIndex: 5,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m2-02',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l6'],
    outcomeIds: ['out-math11-m2-02'],
    questionTypeIds: ['math11-qt06'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Cấp số cộng',
    objectives: [
      'Nhận biết cấp số cộng và xác định công sai.',
      'Tính số hạng tổng quát, tổng hữu hạn và mô hình hóa đại lượng thay đổi đều.'
    ],
    content: [
      'Cấp số cộng là dãy số mà kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng ngay trước cộng với một số không đổi $d$. Số $d$ gọi là công sai. Vì thế hiệu $u_{n+1}-u_n$ phải không đổi.',
      'Từ $u_1$ đến $u_n$ có đúng $n-1$ lần cộng công sai, nên $u_n=u_1+(n-1)d$. Ba số liên tiếp $u_{k-1},u_k,u_{k+1}$ thỏa $2u_k=u_{k-1}+u_{k+1}$.',
      'Tổng $n$ số hạng đầu có thể tính bằng trung bình cộng của số đầu và số cuối nhân với số số hạng. Trong bài toán thực tế, trước hết phải xác định hàng hoặc chu kì đầu tiên tương ứng với $u_1$, tránh lệch một bước.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m2-02-term',
        label: 'Số hạng tổng quát của cấp số cộng',
        expression: 'u_n=u_1+(n-1)d',
        variables: [
          { symbol: 'u_1', meaning: 'Số hạng đầu' },
          { symbol: 'd', meaning: 'Công sai' },
          { symbol: 'n', meaning: 'Chỉ số nguyên dương' }
        ],
        conditions: ['$n\\ge1$']
      },
      {
        id: 'form-math11-m2-02-sum',
        label: 'Tổng $n$ số hạng đầu',
        expression: 'S_n=\\frac{n(u_1+u_n)}2=\\frac n2\\left[2u_1+(n-1)d\\right]',
        variables: [
          { symbol: 'S_n', meaning: 'Tổng $u_1+u_2+\\cdots+u_n$' },
          { symbol: 'n', meaning: 'Số số hạng được cộng' }
        ],
        conditions: ['$n$ là số nguyên dương']
      }
    ],
    keyPoints: [
      'Cấp số cộng có hiệu hai số hạng liên tiếp không đổi.',
      'Số lần cộng từ $u_1$ đến $u_n$ là $n-1$.',
      '$S_n$ bằng số số hạng nhân trung bình cộng của số đầu và số cuối.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m2-02',
        title: 'Tìm số hạng và tổng',
        problem: 'Cho cấp số cộng có $u_1=3$, $d=2$. Tính $u_{10}$ và $S_{10}$.',
        steps: [
          '$u_{10}=3+(10-1)\\cdot2=21$.',
          '$S_{10}=\\frac{10(3+21)}2=120$.'
        ],
        answer: '$u_{10}=21$, $S_{10}=120$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m2-02',
        question: 'Cấp số cộng có $u_1=5$, $d=-2$. Số hạng $u_4$ là:',
        options: ['$-3$', '$-1$', '$1$', '$3$'],
        correctAnswer: 'B',
        explanation: '$u_4=5+(4-1)(-2)=-1$.'
      }
    ],
    orderIndex: 6,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m2-03',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l7'],
    outcomeIds: ['out-math11-m2-03'],
    questionTypeIds: ['math11-qt07'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Cấp số nhân',
    objectives: [
      'Nhận biết cấp số nhân và xác định công bội.',
      'Tính số hạng tổng quát, tổng hữu hạn và vận dụng trong mô hình tăng trưởng theo tỉ lệ.'
    ],
    content: [
      'Cấp số nhân là dãy số mà kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng ngay trước nhân với một số không đổi $q$. Số $q$ gọi là công bội. Khi số hạng trước khác 0, tỉ số $\\frac{u_{n+1}}{u_n}$ phải không đổi.',
      'Từ $u_1$ đến $u_n$ có $n-1$ lần nhân với $q$, nên $u_n=u_1q^{n-1}$. Ba số hạng liên tiếp thỏa $u_k^2=u_{k-1}u_{k+1}$. Nếu $q<0$, dấu các số hạng khác 0 luân phiên; không được mặc định dãy tăng.',
      'Với $q\\ne1$, tổng $n$ số hạng đầu được tính bằng $S_n=u_1\\frac{1-q^n}{1-q}$. Mô hình tăng $r\\%$ mỗi chu kì có công bội $1+\\frac r{100}$; mô hình giảm $r\\%$ có công bội $1-\\frac r{100}$.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'form-math11-m2-03-term',
        label: 'Số hạng tổng quát của cấp số nhân',
        expression: 'u_n=u_1q^{n-1}',
        variables: [
          { symbol: 'u_1', meaning: 'Số hạng đầu' },
          { symbol: 'q', meaning: 'Công bội' },
          { symbol: 'n', meaning: 'Chỉ số nguyên dương' }
        ],
        conditions: ['$n\\ge1$']
      },
      {
        id: 'form-math11-m2-03-sum',
        label: 'Tổng $n$ số hạng đầu',
        expression: 'S_n=u_1\\frac{1-q^n}{1-q}',
        variables: [
          { symbol: 'S_n', meaning: 'Tổng $u_1+u_2+\\cdots+u_n$' },
          { symbol: 'q', meaning: 'Công bội' }
        ],
        conditions: ['$q\\ne1$', '$n$ là số nguyên dương']
      }
    ],
    keyPoints: [
      'Cấp số nhân nhân với cùng công bội, không cộng cùng một lượng.',
      'Số mũ trong $u_n$ là $n-1$.',
      'Tăng $r\\%$ mỗi chu kì tương ứng công bội $1+\\frac r{100}$.'
    ],
    workedExamples: [
      {
        id: 'ex-math11-m2-03',
        title: 'Tìm số hạng và tổng',
        problem: 'Cho cấp số nhân có $u_1=2$, $q=3$. Tính $u_5$ và $S_5$.',
        steps: [
          '$u_5=2\\cdot3^{5-1}=162$.',
          '$S_5=2\\frac{1-3^5}{1-3}=242$.'
        ],
        answer: '$u_5=162$, $S_5=242$.'
      }
    ],
    checkpoints: [
      {
        id: 'cp-math11-m2-03',
        question: 'Cấp số nhân có $u_1=3$, $q=2$. Số hạng $u_4$ là:',
        options: ['$12$', '$18$', '$24$', '$48$'],
        correctAnswer: 'C',
        explanation: '$u_4=3\\cdot2^{4-1}=24$.'
      }
    ],
    orderIndex: 7,
    reviewStatus: 'source_checked'
  }
];

math11Module2Theory[0].content += '\n\nVới dãy cho bởi công thức, tìm chỉ số là giải phương trình theo số nguyên dương $n$. Với dãy truy hồi, nên lập bảng vài số hạng để hiểu quy luật nhưng mọi kết luận đơn điệu hoặc bị chặn vẫn cần chứng minh cho mọi chỉ số.';
math11Module2Theory[0].workedExamples.push(
  {id:'ex-math11-m2-01-index',title:'Tìm chỉ số của số hạng',problem:'Cho $u_n=4n-7$. Số 45 là số hạng thứ mấy?',steps:['Giải $4n-7=45$.','$4n=52$, suy ra $n=13$ và đây là số nguyên dương.'],answer:'45 là số hạng thứ 13.'},
  {id:'ex-math11-m2-01-recursive',title:'Tính dãy truy hồi',problem:'Cho $u_1=1$, $u_{n+1}=2u_n+1$. Tính $u_4$.',steps:['$u_2=3$, $u_3=7$.','$u_4=2\\cdot7+1=15$.'],answer:'$u_4=15$.'}
);
math11Module2Theory[0].checkpoints.push(
  {id:'cp-math11-m2-01-index',question:'Cho $u_n=3n+1$. Số 16 là số hạng thứ:',options:['$4$','$5$','$6$','$7$'],correctAnswer:'B',explanation:'Giải $3n+1=16$ được $n=5$.'},
  {id:'cp-math11-m2-01-monotone',question:'Muốn chứng minh dãy tăng, thường xét:',options:['$u_1$','$u_{n+1}-u_n$','$u_n^2$','Chỉ ba số hạng đầu'],correctAnswer:'B',explanation:'Cần chứng minh hiệu dương với mọi chỉ số hợp lệ.'},
  {id:'cp-math11-m2-01-start',question:'Dãy truy hồi cần thêm dữ kiện nào để xác định?',options:['Số hạng đầu thích hợp','Một cận trên','Tổng vô hạn','Đạo hàm'],correctAnswer:'A',explanation:'Quy tắc truy hồi cần điểm khởi đầu.'}
);

math11Module2Theory[1].content += '\n\nTrong bài toán ngược, có thể lập hệ từ hai số hạng để tìm $u_1,d$. Với các số hạng có chỉ số đối xứng, $u_p+u_q=2u_{(p+q)/2}$ khi chỉ số giữa là số nguyên; tính chất này giúp rút gọn nhiều bài khó.';
math11Module2Theory[1].workedExamples.push(
  {id:'ex-math11-m2-02-reverse',title:'Tìm cấp số cộng từ hai số hạng',problem:'Cho $u_3=7$, $u_9=25$. Tìm $u_1$ và $d$.',steps:['Lấy hiệu: $u_9-u_3=6d=18$, nên $d=3$.','$u_1=u_3-2d=1$.'],answer:'$u_1=1$, $d=3$.'},
  {id:'ex-math11-m2-02-model',title:'Mô hình số ghế',problem:'Hàng đầu có 18 ghế, mỗi hàng sau thêm 2 ghế. Tính tổng số ghế của 10 hàng.',steps:['$u_{10}=18+9\\cdot2=36$.','$S_{10}=10(18+36)/2$.'],answer:'Có 270 ghế.'}
);
math11Module2Theory[1].checkpoints.push(
  {id:'cp-math11-m2-02-difference',question:'Cấp số cộng có $u_2=5$, $u_6=17$. Công sai bằng:',options:['$2$','$3$','$4$','$6$'],correctAnswer:'B',explanation:'$u_6-u_2=4d=12$.'},
  {id:'cp-math11-m2-02-middle',question:'Ba số $4,x,12$ lập thành cấp số cộng. $x$ bằng:',options:['$6$','$8$','$10$','$16$'],correctAnswer:'B',explanation:'Số giữa là trung bình cộng của hai số ngoài.'},
  {id:'cp-math11-m2-02-sum',question:'$1+2+\\cdots+10$ bằng:',options:['$45$','$50$','$55$','$60$'],correctAnswer:'C',explanation:'$10(1+10)/2=55$.'}
);

math11Module2Theory[2].content += '\n\nTrong bài toán ngược, tỉ số hai số hạng cho một lũy thừa của $q$; cần xét thêm dấu hoặc điều kiện thực tế để chọn công bội. Với tăng trưởng theo phần trăm, số mũ là số chu kì đã trôi qua, nên phải tránh lệch một chu kì.';
math11Module2Theory[2].workedExamples.push(
  {id:'ex-math11-m2-03-reverse',title:'Tìm công bội từ hai số hạng',problem:'Cấp số nhân có $u_2=6$, $u_5=162$ và $q>0$. Tìm $q,u_1$.',steps:['$u_5/u_2=q^3=27$, nên $q=3$.','$u_1=u_2/q=2$.'],answer:'$q=3$, $u_1=2$.'},
  {id:'ex-math11-m2-03-growth',title:'Mô hình tăng trưởng',problem:'Một quần thể ban đầu 1000 cá thể, tăng 20% mỗi năm. Tính số lượng sau 3 năm.',steps:['Công bội tăng trưởng là $1+20/100=1{,}2$.','Sau 3 chu kì: $1000\\cdot1{,}2^3$.'],answer:'Có 1728 cá thể.'}
);
math11Module2Theory[2].checkpoints.push(
  {id:'cp-math11-m2-03-ratio',question:'Cấp số nhân có $u_1=2$, $u_3=18$, $q>0$. Công bội bằng:',options:['$2$','$3$','$6$','$9$'],correctAnswer:'B',explanation:'$2q^2=18$, nên $q=3$.'},
  {id:'cp-math11-m2-03-middle',question:'Ba số dương $2,x,8$ lập thành cấp số nhân. $x$ bằng:',options:['$3$','$4$','$5$','$6$'],correctAnswer:'B',explanation:'$x^2=2\\cdot8=16$.'},
  {id:'cp-math11-m2-03-percent',question:'Đại lượng tăng 15% mỗi chu kì có công bội:',options:['$0{,}15$','$0{,}85$','$1{,}15$','$15$'],correctAnswer:'C',explanation:'Giá trị mới bằng 115% giá trị cũ.'}
);
