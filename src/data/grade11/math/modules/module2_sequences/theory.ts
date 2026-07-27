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
