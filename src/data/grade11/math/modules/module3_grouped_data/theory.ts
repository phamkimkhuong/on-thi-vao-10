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
