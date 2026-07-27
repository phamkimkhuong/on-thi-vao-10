import type { TheoryBlock } from '@/data/schema';

export const math11Module3Theory: TheoryBlock[] = [
  {
    id: 'tb-math11-m3-01',
    courseId: 'grade11:math',
    moduleId: 'math11-m3',
    lessonIds: ['math11-kntt-l8'],
    outcomeIds: ['out-math11-m3-01'],
    questionTypeIds: ['math11-qt08'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Mẫu số liệu ghép nhóm',
    objectives: ['Đọc và lập bảng tần số ghép nhóm.', 'Xác định cỡ mẫu, độ dài nhóm, tần số tương đối và giá trị đại diện.'],
    content: [
      'Mẫu số liệu ghép nhóm chia miền giá trị thành các khoảng không giao nhau, thường viết $[a_i;a_{i+1})$. Tần số $n_i$ là số quan sát thuộc nhóm thứ $i$; cỡ mẫu là tổng các tần số.',
      'Quy ước $[a;b)$ nhận đầu mút trái $a$ nhưng không nhận đầu mút phải $b$. Các nhóm kề nhau nhờ đó không đếm trùng dữ liệu ở ranh giới.',
      'Giá trị đại diện của nhóm là trung điểm $x_i=\\frac{a_i+a_{i+1}}2$. Khi thay mọi giá trị trong nhóm bằng $x_i$, ta mất chi tiết dữ liệu gốc nhưng thuận tiện cho việc ước lượng.'
    ].join('\n\n'),
    formulas: [
      { id: 'form-math11-m3-01-size', label: 'Cỡ mẫu', expression: 'n=n_1+n_2+\\cdots+n_k', variables: [{ symbol: 'n_i', meaning: 'Tần số nhóm thứ $i$' }], conditions: ['$n_i$ là số nguyên không âm'] },
      { id: 'form-math11-m3-01-midpoint', label: 'Giá trị đại diện', expression: 'x_i=\\frac{a_i+a_{i+1}}2', variables: [{ symbol: 'a_i,a_{i+1}', meaning: 'Hai đầu mút của nhóm' }], conditions: ['Nhóm có dạng $[a_i;a_{i+1})$'] },
      { id: 'form-math11-m3-01-relative', label: 'Tần số tương đối', expression: 'f_i=\\frac{n_i}{n}', variables: [{ symbol: 'f_i', meaning: 'Tần số tương đối nhóm thứ $i$' }], conditions: ['$n>0$'] }
    ],
    keyPoints: ['Cỡ mẫu bằng tổng tần số.', '$[a;b)$ chứa $a$ nhưng không chứa $b$.', 'Giá trị đại diện là trung điểm nhóm.'],
    workedExamples: [{
      id: 'ex-math11-m3-01',
      title: 'Đọc bảng ghép nhóm',
      problem: 'Hai nhóm $[0;10)$, $[10;20)$ có tần số lần lượt 4 và 6. Tìm cỡ mẫu và giá trị đại diện.',
      steps: ['$n=4+6=10$.', 'Hai giá trị đại diện là $5$ và $15$.'],
      answer: 'Cỡ mẫu 10; các giá trị đại diện là 5 và 15.'
    }],
    checkpoints: [{
      id: 'cp-math11-m3-01',
      question: 'Giá trị 20 thuộc nhóm nào trong hai nhóm $[10;20)$ và $[20;30)$?',
      options: ['$[10;20)$', '$[20;30)$', 'Cả hai nhóm', 'Không nhóm nào'],
      correctAnswer: 'B',
      explanation: 'Đầu mút phải bị loại khỏi nhóm trước và là đầu mút trái của nhóm sau.'
    }],
    orderIndex: 8,
    reviewStatus: 'source_checked'
  },
  {
    id: 'tb-math11-m3-02',
    courseId: 'grade11:math',
    moduleId: 'math11-m3',
    lessonIds: ['math11-kntt-l9'],
    outcomeIds: ['out-math11-m3-02'],
    questionTypeIds: ['math11-qt09'],
    sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
    title: 'Các số đặc trưng đo xu thế trung tâm',
    objectives: ['Ước lượng số trung bình và mốt.', 'Xác định nhóm chứa và nội suy trung vị, tứ phân vị.', 'Giải thích kết quả theo bối cảnh.'],
    content: [
      'Số trung bình của mẫu ghép nhóm được ước lượng bằng trung bình có trọng số của các giá trị đại diện. Nhóm chứa mốt là nhóm có tần số lớn nhất; công thức mốt còn xét chênh lệch với hai nhóm kề.',
      'Để tìm trung vị hoặc tứ phân vị, trước hết lập tần số tích lũy và xác định nhóm chứa vị trí $\\frac n2$, $\\frac n4$ hoặc $\\frac{3n}{4}$. Sau đó nội suy tuyến tính trong nhóm.',
      'Các kết quả là xấp xỉ vì không biết vị trí chính xác của từng quan sát trong mỗi nhóm. Khi giải thích, phải ghi đơn vị và nói rõ đại lượng đại diện cho xu thế trung tâm hay vị trí chia mẫu.'
    ].join('\n\n'),
    formulas: [
      { id: 'form-math11-m3-02-mean', label: 'Số trung bình', expression: '\\bar x\\approx\\frac{n_1x_1+\\cdots+n_kx_k}{n}', variables: [{ symbol: 'x_i', meaning: 'Giá trị đại diện nhóm thứ $i$' }, { symbol: 'n_i', meaning: 'Tần số nhóm thứ $i$' }], conditions: ['$n=\\sum n_i>0$'] },
      { id: 'form-math11-m3-02-median', label: 'Trung vị ghép nhóm', expression: 'M_e=L+\\frac{\\frac n2-F}{f}h', variables: [{ symbol: 'L', meaning: 'Cận dưới nhóm chứa trung vị' }, { symbol: 'F', meaning: 'Tần số tích lũy trước nhóm' }, { symbol: 'f', meaning: 'Tần số của nhóm' }, { symbol: 'h', meaning: 'Độ dài nhóm' }], conditions: ['$f>0$'] },
      { id: 'form-math11-m3-02-mode', label: 'Mốt ghép nhóm', expression: 'M_o=L+\\frac{f_m-f_{m-1}}{2f_m-f_{m-1}-f_{m+1}}h', variables: [{ symbol: 'f_m', meaning: 'Tần số nhóm chứa mốt' }, { symbol: 'f_{m-1},f_{m+1}', meaning: 'Tần số hai nhóm kề' }], conditions: ['Mẫu có nhóm tần số lớn nhất phù hợp để nội suy'] }
    ],
    keyPoints: ['Dùng trung điểm nhóm khi tính trung bình.', 'Dùng tần số tích lũy để xác định nhóm trung vị và tứ phân vị.', 'Kết quả từ bảng ghép nhóm là xấp xỉ.'],
    workedExamples: [{
      id: 'ex-math11-m3-02',
      title: 'Ước lượng số trung bình',
      problem: 'Hai nhóm $[0;10)$, $[10;20)$ có tần số 2 và 3. Ước lượng số trung bình.',
      steps: ['Giá trị đại diện là 5 và 15; cỡ mẫu bằng 5.', '$\\bar x\\approx\\frac{2\\cdot5+3\\cdot15}{5}=11$.'],
      answer: '$\\bar x\\approx11$.'
    }],
    checkpoints: [{
      id: 'cp-math11-m3-02',
      question: 'Để xác định nhóm chứa trung vị, đại lượng nào cần dùng?',
      options: ['Tần số tương đối duy nhất', 'Tần số tích lũy', 'Cận trên lớn nhất', 'Độ dài nhóm nhỏ nhất'],
      correctAnswer: 'B',
      explanation: 'Tần số tích lũy cho biết vị trí $n/2$ rơi vào nhóm nào.'
    }],
    orderIndex: 9,
    reviewStatus: 'source_checked'
  }
];

math11Module3Theory[0].content += '\n\nQuy trình lập bảng: chọn các khoảng liên tiếp không chồng lấn; xếp từng quan sát theo đúng quy ước đầu mút; kiểm tra tổng tần số bằng cỡ mẫu; sau đó mới tính tần số tương đối và giá trị đại diện.';
math11Module3Theory[0].workedExamples.push(
  {id:'ex-math11-m3-01-group',title:'Ghép dữ liệu thô',problem:'Ghép các giá trị $5,8,10,14,19$ vào $[0;10)$ và $[10;20)$.',steps:['5 và 8 thuộc nhóm đầu.','10, 14 và 19 thuộc nhóm thứ hai vì nhóm nhận đầu mút trái.'],answer:'Hai tần số lần lượt là 2 và 3.'},
  {id:'ex-math11-m3-01-relative',title:'Tần số tương đối',problem:'Một nhóm có tần số 12 trong mẫu 40 quan sát. Tính tần số tương đối.',steps:['Dùng $f_i=n_i/n$.','$f_i=12/40=0{,}3$.'],answer:'Tần số tương đối là $0{,}3=30\\%$. '}
);
math11Module3Theory[0].checkpoints.push(
  {id:'cp-math11-m3-01-size',question:'Các tần số là 3, 7, 10. Cỡ mẫu bằng:',options:['$10$','$17$','$20$','$30$'],correctAnswer:'C',explanation:'Cộng tất cả tần số.'},
  {id:'cp-math11-m3-01-midpoint',question:'Giá trị đại diện của $[10;20)$ là:',options:['$10$','$15$','$20$','$30$'],correctAnswer:'B',explanation:'Lấy trung điểm của hai đầu mút.'},
  {id:'cp-math11-m3-01-relative',question:'Tổng tần số tương đối của một bảng đầy đủ bằng:',options:['$0$','$1$','$n$','$100$'],correctAnswer:'B',explanation:'Các nhóm chia toàn bộ mẫu.'}
);

math11Module3Theory[1].content += '\n\nTrước khi tính các số đặc trưng, nên bổ sung ba cột: giá trị đại diện, tích $n_ix_i$ và tần số tích lũy. Trung bình dùng hai cột đầu; trung vị và tứ phân vị dùng cột tích lũy; mốt dùng tần số nhóm lớn nhất và hai nhóm kề.';
math11Module3Theory[1].workedExamples.push(
  {id:'ex-math11-m3-02-median',title:'Nội suy trung vị',problem:'Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số 4, 8, 8. Ước lượng trung vị.',steps:['Cỡ mẫu 20, vị trí trung vị là 10.','Nhóm chứa trung vị là $[10;20)$, với $L=10,F=4,f=8,h=10$.','Thay vào công thức nội suy.'],answer:'$M_e\\approx17{,}5$.'},
  {id:'ex-math11-m3-02-mode',title:'Nội suy mốt',problem:'Nhóm $[10;20)$ có tần số 8; hai nhóm kề có tần số 5 và 3. Ước lượng mốt.',steps:['Nhóm mốt có $L=10,h=10,f_m=8$.','Thay $f_{m-1}=5,f_{m+1}=3$ vào công thức.'],answer:'$M_o\\approx13{,}75$.'}
);
math11Module3Theory[1].checkpoints.push(
  {id:'cp-math11-m3-02-mean',question:'Khi tính trung bình ghép nhóm, dùng:',options:['Cận trên nhóm','Giá trị đại diện nhóm','Chỉ tần số lớn nhất','Tần số tích lũy duy nhất'],correctAnswer:'B',explanation:'Trung bình là trung bình có trọng số của các trung điểm nhóm.'},
  {id:'cp-math11-m3-02-median',question:'Nhóm trung vị được xác định bằng:',options:['Tần số tích lũy','Độ dài nhóm lớn nhất','Cận dưới nhỏ nhất','Giá trị đại diện lớn nhất'],correctAnswer:'A',explanation:'Cần xác định vị trí $n/2$ rơi vào nhóm nào.'},
  {id:'cp-math11-m3-02-quartile',question:'Khoảng tứ phân vị bằng:',options:['$Q_1+Q_3$','$Q_3-Q_1$','$Q_2-Q_1$','$Q_3/Q_1$'],correctAnswer:'B',explanation:'Đây là định nghĩa khoảng tứ phân vị.'}
);
