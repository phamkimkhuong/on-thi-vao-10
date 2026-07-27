import type { TheoryBlock, TheoryFormula } from '@/data/schema';

type BlockSpec = {
  number: number; lesson: number; title: string; objectives: string[];
  paragraphs: string[]; formulas: TheoryFormula[]; keyPoints: string[];
  example: { problem: string; steps: string[]; answer: string };
  checkpoint: { question: string; options: [string, string, string, string]; answer: 'A' | 'B' | 'C' | 'D'; explanation: string };
};

const block = (spec: BlockSpec): TheoryBlock => ({
  id: `tb-math11-m4-0${spec.number}`, courseId: 'grade11:math', moduleId: 'math11-m4',
  lessonIds: [`math11-kntt-l${spec.lesson}`], outcomeIds: [`out-math11-m4-0${spec.number}`],
  questionTypeIds: [`math11-qt${9 + spec.number}`],
  sourceIds: ['math11-source-official-program', 'math11-source-kntt-textbook-1'],
  title: spec.title, objectives: spec.objectives, content: spec.paragraphs.join('\n\n'),
  formulas: spec.formulas, keyPoints: spec.keyPoints,
  workedExamples: [{ id: `ex-math11-m4-0${spec.number}`, title: 'Ví dụ định hướng', ...spec.example }],
  checkpoints: [{ id: `cp-math11-m4-0${spec.number}`, question: spec.checkpoint.question, options: spec.checkpoint.options, correctAnswer: spec.checkpoint.answer, explanation: spec.checkpoint.explanation }],
  orderIndex: 9 + spec.number, reviewStatus: 'source_checked'
});

export const math11Module4Theory: TheoryBlock[] = [
  block({
    number: 1, lesson: 10, title: 'Đường thẳng và mặt phẳng trong không gian',
    objectives: ['Nhận biết quan hệ liên thuộc và ba cách xác định mặt phẳng.', 'Tìm giao điểm, giao tuyến; nhận biết hình chóp và tứ diện.'],
    paragraphs: [
      'Một mặt phẳng được xác định duy nhất bởi ba điểm không thẳng hàng; một đường thẳng và một điểm ngoài nó; hoặc hai đường thẳng cắt nhau. Hình vẽ chỉ là biểu diễn, nên mọi kết luận liên thuộc phải dựa trên giả thiết.',
      'Hai mặt phẳng phân biệt có điểm chung thì giao nhau theo một đường thẳng. Muốn tìm giao tuyến, tìm hai điểm phân biệt cùng thuộc cả hai mặt phẳng. Muốn tìm giao điểm của đường thẳng với mặt phẳng, thường đặt đường thẳng vào một mặt phẳng phụ rồi tìm giao tuyến.',
      'Hình chóp $S.A_1A_2\\ldots A_n$ có đỉnh $S$ ngoài mặt phẳng đáy. Tứ diện là hình chóp tam giác; hai cạnh không cùng một mặt được gọi là hai cạnh đối.'
    ],
    formulas: [{ id: 'form-math11-m4-01-intersection', label: 'Giao tuyến qua hai điểm chung', expression: 'A,B\\in(P)\\cap(Q),\\ A\\ne B\\Rightarrow(P)\\cap(Q)=AB', variables: [{ symbol: '(P),(Q)', meaning: 'Hai mặt phẳng phân biệt' }], conditions: ['$A,B$ là hai điểm chung phân biệt'] }],
    keyPoints: ['Ba điểm xác định mặt phẳng phải không thẳng hàng.', 'Giao tuyến cần hai điểm chung.', 'Không suy luận quan hệ chỉ bằng mắt từ hình vẽ.'],
    example: { problem: 'Trong hình chóp $S.ABCD$, biết $O=AC\\cap BD$. Tìm giao tuyến của $(SAC)$ và $(SBD)$.', steps: ['$S$ thuộc cả hai mặt phẳng.', '$O$ thuộc $AC$ và $BD$, nên thuộc cả hai mặt phẳng.'], answer: 'Giao tuyến là $SO$.' },
    checkpoint: { question: 'Dữ kiện nào xác định duy nhất một mặt phẳng?', options: ['Ba điểm bất kỳ', 'Ba điểm không thẳng hàng', 'Hai điểm', 'Một đường thẳng'], answer: 'B', explanation: 'Ba điểm không thẳng hàng xác định duy nhất một mặt phẳng.' }
  }),
  block({
    number: 2, lesson: 11, title: 'Hai đường thẳng song song trong không gian',
    objectives: ['Phân loại bốn vị trí tương đối của hai đường thẳng.', 'Vận dụng tính chất cơ bản để chứng minh song song.'],
    paragraphs: [
      'Hai đường thẳng trong không gian có thể trùng nhau, cắt nhau, song song hoặc chéo nhau. Hai đường song song phải đồng phẳng và không có điểm chung; hai đường chéo nhau không đồng phẳng.',
      'Nếu hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau. Trong một mặt phẳng, có thể dùng đường trung bình, định lí Thalès hoặc các tính chất hình phẳng đã biết.',
      'Để chứng minh chéo nhau, thường chỉ ra chúng thuộc hai mặt phẳng khác nhau và không thể cùng nằm trong một mặt phẳng; không đủ nếu chỉ quan sát rằng chúng không cắt trên hình.'
    ],
    formulas: [{ id: 'form-math11-m4-02-transitive', label: 'Tính chất bắc cầu', expression: 'a\\parallel c,\\ b\\parallel c,\\ a\\ne b\\Rightarrow a\\parallel b', variables: [{ symbol: 'a,b,c', meaning: 'Các đường thẳng trong không gian' }], conditions: ['$a,b$ phân biệt'] }],
    keyPoints: ['Song song: đồng phẳng và không cắt.', 'Chéo nhau: không đồng phẳng.', 'Có thể dùng một đường thứ ba làm cầu nối song song.'],
    example: { problem: 'Trong hình hộp $ABCD.A\\prime B\\prime C\\prime D\\prime$, chứng minh $AB\\parallel C\\prime D\\prime$.', steps: ['$AB\\parallel CD$ trong đáy.', '$CD\\parallel C\\prime D\\prime$ theo các cạnh tương ứng của hình hộp.'], answer: '$AB\\parallel C\\prime D\\prime$.' },
    checkpoint: { question: 'Hai đường thẳng chéo nhau là hai đường:', options: ['Không có điểm chung', 'Không đồng phẳng', 'Cùng vuông góc một đường', 'Cùng nằm trong một mặt phẳng'], answer: 'B', explanation: 'Dấu hiệu phân biệt cốt lõi của hai đường chéo nhau là không đồng phẳng.' }
  }),
  block({
    number: 3, lesson: 12, title: 'Đường thẳng song song với mặt phẳng',
    objectives: ['Nhận biết và chứng minh đường thẳng song song với mặt phẳng.', 'Dùng tính chất giao tuyến của mặt phẳng phụ.'],
    paragraphs: [
      'Đường thẳng $d$ song song với mặt phẳng $(P)$ khi chúng không có điểm chung. Điều kiện thường dùng: $d$ không nằm trong $(P)$ và $d$ song song với một đường thẳng $a$ nằm trong $(P)$.',
      'Nếu $d\\parallel(P)$ và mặt phẳng $(Q)$ chứa $d$ cắt $(P)$ theo giao tuyến $a$, thì $a\\parallel d$. Tính chất này giúp tìm phương của giao tuyến mà không cần xác định hai điểm cụ thể.',
      'Khi chứng minh, cần nêu rõ đường chuẩn nằm trong mặt phẳng và loại trường hợp đường cần xét nằm luôn trong mặt phẳng.'
    ],
    formulas: [{ id: 'form-math11-m4-03-condition', label: 'Điều kiện song song đường–mặt', expression: 'a\\subset(P),\\ d\\parallel a,\\ d\\not\\subset(P)\\Rightarrow d\\parallel(P)', variables: [{ symbol: 'd,a', meaning: 'Hai đường thẳng' }, { symbol: '(P)', meaning: 'Mặt phẳng' }], conditions: ['$a$ nằm trong $(P)$'] }],
    keyPoints: ['Tìm một đường chuẩn nằm trong mặt phẳng.', 'Phải loại trường hợp đường nằm trong mặt phẳng.', 'Mặt phẳng phụ cho giao tuyến song song với đường đã cho.'],
    example: { problem: 'Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SB$. Chứng minh $MN\\parallel(ABC)$.', steps: ['$MN\\parallel AB$ theo đường trung bình tam giác $SAB$.', '$AB\\subset(ABC)$ và $MN$ không nằm trong đáy.'], answer: '$MN\\parallel(ABC)$.' },
    checkpoint: { question: 'Nếu $d\\parallel a$, $a\\subset(P)$ và $d\\not\\subset(P)$ thì:', options: ['$d\\subset(P)$', '$d\\parallel(P)$', '$d\\perp(P)$', '$d$ cắt $(P)$'], answer: 'B', explanation: 'Đây là điều kiện cơ bản để đường thẳng song song với mặt phẳng.' }
  }),
  block({
    number: 4, lesson: 13, title: 'Hai mặt phẳng song song, Thalès và lăng trụ',
    objectives: ['Chứng minh và khai thác hai mặt phẳng song song.', 'Vận dụng Thalès trong không gian và tính chất lăng trụ, hình hộp.'],
    paragraphs: [
      'Hai mặt phẳng song song nếu không có điểm chung. Nếu một mặt phẳng chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia thì hai mặt phẳng song song.',
      'Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba tạo ra hai giao tuyến song song. Ba mặt phẳng đôi một song song chắn trên hai cát tuyến các đoạn tương ứng tỉ lệ; đây là định lí Thalès trong không gian.',
      'Trong lăng trụ, hai đáy là các đa giác bằng nhau nằm trên hai mặt phẳng song song; các cạnh bên song song và bằng nhau, các mặt bên là hình bình hành. Hình hộp là lăng trụ có đáy là hình bình hành.'
    ],
    formulas: [{ id: 'form-math11-m4-04-thales', label: 'Thalès trong không gian', expression: '\\frac{AB}{BC}=\\frac{A\\prime B\\prime}{B\\prime C\\prime}', variables: [{ symbol: 'A,B,C', meaning: 'Giao điểm trên cát tuyến thứ nhất' }, { symbol: 'A\\prime,B\\prime,C\\prime', meaning: 'Giao điểm tương ứng trên cát tuyến thứ hai' }], conditions: ['Ba mặt phẳng qua các cặp điểm tương ứng đôi một song song'] }],
    keyPoints: ['Chứng minh mặt phẳng song song cần hai phương cắt nhau.', 'Giao tuyến với mặt phẳng thứ ba song song nhau.', 'Ghép đúng các đoạn tương ứng khi dùng Thalès.'],
    example: { problem: 'Ba mặt phẳng song song cắt hai cát tuyến tại $A,B,C$ và $A\\prime,B\\prime,C\\prime$. Biết $AB/BC=2/3$, $B\\prime C\\prime=6$. Tính $A\\prime B\\prime$.', steps: ['$\\frac{A\\prime B\\prime}{B\\prime C\\prime}=\\frac{AB}{BC}=\\frac23$.', '$A\\prime B\\prime=6\\cdot\\frac23=4$.'], answer: '$A\\prime B\\prime=4$.' },
    checkpoint: { question: 'Mặt bên của một lăng trụ là:', options: ['Tam giác', 'Hình bình hành', 'Hình tròn', 'Hình thang bất kỳ'], answer: 'B', explanation: 'Các cạnh bên song song và bằng nhau nên mỗi mặt bên là hình bình hành.' }
  }),
  block({
    number: 5, lesson: 14, title: 'Phép chiếu song song và hình biểu diễn',
    objectives: ['Nhận biết mặt phẳng chiếu, phương chiếu và ảnh.', 'Dùng tính chất phép chiếu để vẽ, đọc hình biểu diễn.'],
    paragraphs: [
      'Cho mặt phẳng chiếu $(P)$ và phương $l$ không song song với $(P)$. Ảnh của điểm $M$ là giao điểm $M\\prime$ của $(P)$ với đường qua $M$ song song $l$.',
      'Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự điểm trên một đường, tính song song và tỉ số của hai đoạn cùng nằm trên một đường hoặc trên hai đường song song. Nó không bảo toàn độ dài hay góc nói chung.',
      'Hình biểu diễn phải giữ các quan hệ liên thuộc và song song cần thiết. Đường tròn thường được biểu diễn bằng elip; đoạn bị che có thể vẽ nét đứt theo quy ước.'
    ],
    formulas: [{ id: 'form-math11-m4-05-ratio', label: 'Bảo toàn tỉ số trên các đường song song', expression: '\\frac{AB}{CD}=\\frac{A\\prime B\\prime}{C\\prime D\\prime}', variables: [{ symbol: 'A\\prime,B\\prime,C\\prime,D\\prime', meaning: 'Các ảnh qua phép chiếu song song' }], conditions: ['$AB$ và $CD$ cùng phương hoặc cùng nằm trên một đường'] }],
    keyPoints: ['Phương chiếu không song song mặt phẳng chiếu.', 'Bảo toàn thẳng hàng, song song và một số tỉ số.', 'Không bảo toàn độ dài và góc nói chung.'],
    example: { problem: 'Qua phép chiếu song song, $A,B,C$ thẳng hàng và $AB=BC$. Biết ảnh là $A\\prime,B\\prime,C\\prime$. So sánh $A\\prime B\\prime$ và $B\\prime C\\prime$.', steps: ['Phép chiếu bảo toàn tỉ số trên một đường.', '$A\\prime B\\prime/B\\prime C\\prime=AB/BC=1$.'], answer: '$A\\prime B\\prime=B\\prime C\\prime$.' },
    checkpoint: { question: 'Phép chiếu song song luôn bảo toàn tính chất nào?', options: ['Độ dài', 'Số đo góc', 'Tính thẳng hàng', 'Hình tròn'], answer: 'C', explanation: 'Ba điểm thẳng hàng được chiếu thành ba điểm thẳng hàng.' }
  })
];

math11Module4Theory[0].content += '\n\nKhi tìm giao tuyến, hãy lập danh sách các đối tượng thuộc từng mặt phẳng và ưu tiên các giao điểm đã có sẵn. Nếu mới có một điểm chung, dựng thêm điểm thứ hai bằng cách cho một đường trong mặt phẳng này cắt một đường trong mặt phẳng kia.';
math11Module4Theory[0].workedExamples.push(
  {id:'ex-math11-m4-01-faces',title:'Giao tuyến qua cạnh chung',problem:'Xác định giao tuyến của $(ABC)$ và $(ABD)$ trong tứ diện $ABCD$.',steps:['Hai điểm $A,B$ cùng thuộc cả hai mặt phẳng.','$A\\ne B$ nên chúng xác định đường thẳng chung.'],answer:'Giao tuyến là $AB$.'},
  {id:'ex-math11-m4-01-section',title:'Giao tuyến trong tứ diện',problem:'$M\\in AC$, $N\\in AD$. Tìm giao tuyến của $(BMN)$ và $(ACD)$.',steps:['$M,N$ thuộc $(BMN)$.','$M,N$ cũng thuộc $(ACD)$.'],answer:'Giao tuyến là $MN$.'}
);
math11Module4Theory[0].checkpoints.push(
  {id:'cp-math11-m4-01-line-plane',question:'Hai điểm phân biệt thuộc một mặt phẳng thì đường qua chúng:',options:['Thuộc mặt phẳng','Song song mặt phẳng','Vuông góc mặt phẳng','Chỉ có đoạn nối thuộc mặt phẳng'],correctAnswer:'A',explanation:'Mặt phẳng chứa trọn đường thẳng qua hai điểm.'},
  {id:'cp-math11-m4-01-intersection',question:'Hai mặt phẳng phân biệt có hai điểm chung phân biệt thì giao tuyến là:',options:['Đường qua hai điểm','Một điểm','Một mặt phẳng','Không tồn tại'],correctAnswer:'A',explanation:'Hai điểm xác định đường thẳng chung.'},
  {id:'cp-math11-m4-01-tetra',question:'Tứ diện có số mặt tam giác là:',options:['$3$','$4$','$5$','$6$'],correctAnswer:'B',explanation:'Mỗi cách bỏ một trong bốn đỉnh tạo một mặt.'}
);

math11Module4Theory[1].content += '\n\nQuy trình phân loại hai đường: kiểm tra có đồng phẳng không; nếu đồng phẳng thì xét có điểm chung hay không; nếu không đồng phẳng thì kết luận chéo nhau. “Không cắt” một mình chưa đủ để kết luận song song.';
math11Module4Theory[1].workedExamples.push(
  {id:'ex-math11-m4-02-skew',title:'Nhận biết hai đường chéo nhau',problem:'Trong tứ diện $ABCD$, xác định vị trí của $AB$ và $CD$.',steps:['Hai cạnh không có điểm chung.','Nếu cùng thuộc một mặt phẳng thì cả bốn đỉnh đồng phẳng, trái với tứ diện.'],answer:'$AB$ và $CD$ chéo nhau.'},
  {id:'ex-math11-m4-02-midline',title:'Chứng minh song song bằng Thalès',problem:'Trong tam giác $SAB$, $SM/SA=SN/SB$. Chứng minh $MN\\parallel AB$.',steps:['$M,N$ nằm lần lượt trên $SA,SB$.','Hai tỉ số tính từ đỉnh $S$ bằng nhau.'],answer:'Theo Thalès đảo, $MN\\parallel AB$.'}
);
math11Module4Theory[1].checkpoints.push(
  {id:'cp-math11-m4-02-parallel',question:'Hai đường song song phải:',options:['Không đồng phẳng','Đồng phẳng và không cắt','Cắt nhau','Vuông góc'],correctAnswer:'B',explanation:'Đây là định nghĩa trong không gian.'},
  {id:'cp-math11-m4-02-skew',question:'Hai đường chéo nhau là hai đường:',options:['Không đồng phẳng','Đồng phẳng','Song song','Trùng nhau'],correctAnswer:'A',explanation:'Không đồng phẳng là dấu hiệu quyết định.'},
  {id:'cp-math11-m4-02-transitive',question:'Nếu $a\\parallel c$, $b\\parallel c$ và $a\\ne b$ thì:',options:['$a\\parallel b$','$a\\perp b$','$a,b$ chéo nhau','$a$ cắt $b$'],correctAnswer:'A',explanation:'Dùng tính chất bắc cầu.'}
);

math11Module4Theory[2].content += '\n\nNgoài điều kiện nhận biết, cần phân biệt rõ $d\\parallel(P)$ với $d\\subset(P)$. Trong bài giao tuyến, mặt phẳng phụ chứa $d$ phải thực sự cắt $(P)$; khi đó giao tuyến có cùng phương với $d$.';
math11Module4Theory[2].workedExamples.push(
  {id:'ex-math11-m4-03-tetra',title:'Đường trung bình song song mặt phẳng',problem:'Trong tứ diện $SABC$, $M,N$ là trung điểm $SA,SB$. Chứng minh $MN\\parallel(ABC)$.',steps:['$MN\\parallel AB$ trong tam giác $SAB$.','$AB\\subset(ABC)$ và $MN$ không nằm trong đáy.'],answer:'$MN\\parallel(ABC)$.'},
  {id:'ex-math11-m4-03-intersection',title:'Phương của giao tuyến',problem:'$d\\parallel(P)$; $(Q)$ chứa $d$ và cắt $(P)$ theo $a$. Tìm quan hệ giữa $a,d$.',steps:['Nếu $a$ cắt $d$ thì $d$ có điểm chung với $(P)$, mâu thuẫn.','$a,d$ cùng thuộc $(Q)$.'],answer:'$a\\parallel d$.'}
);
math11Module4Theory[2].checkpoints.push(
  {id:'cp-math11-m4-03-outside',question:'Điều kiện $d\\parallel a$, $a\\subset(P)$ cần bổ sung:',options:['$d\\not\\subset(P)$','$d\\perp a$','$d=a$','$a\\perp(P)$'],correctAnswer:'A',explanation:'Phải loại trường hợp đường nằm trong mặt phẳng.'},
  {id:'cp-math11-m4-03-common',question:'Nếu $d\\parallel(P)$ thì số điểm chung là:',options:['$0$','$1$','$2$','Vô số'],correctAnswer:'A',explanation:'Theo định nghĩa đường song song mặt phẳng.'},
  {id:'cp-math11-m4-03-auxiliary',question:'Mặt phẳng phụ chứa $d\\parallel(P)$ cắt $(P)$ theo $a$ thì:',options:['$a\\parallel d$','$a\\perp d$','$a=d$','$a$ chéo $d$'],correctAnswer:'A',explanation:'Tính chất giao tuyến của mặt phẳng phụ.'}
);

math11Module4Theory[3].content += '\n\nĐể chứng minh hai mặt phẳng song song, nên chọn hai đường cắt nhau dễ nhận thấy trong một mặt phẳng và tìm hai phương tương ứng trong mặt phẳng kia. Khi dùng Thalès không gian, hãy ghi thứ tự các mặt phẳng song song để ghép đúng các đoạn chắn.';
math11Module4Theory[3].workedExamples.push(
  {id:'ex-math11-m4-04-cube',title:'Hai mặt phẳng đối diện',problem:'Chứng minh hai mặt đáy của hình hộp song song.',steps:['Trong đáy thứ nhất chọn hai cạnh cắt nhau.','Hai cạnh tương ứng ở đáy thứ hai lần lượt song song với chúng.'],answer:'Hai mặt phẳng đáy song song.'},
  {id:'ex-math11-m4-04-ratio',title:'Thalès trên hai cát tuyến',problem:'Ba mặt phẳng song song chắn các đoạn tương ứng 4,6 và 10,$x$. Tìm $x$.',steps:['Lập tỉ lệ $4/6=10/x$.','Nhân chéo được $4x=60$.'],answer:'$x=15$.'}
);
math11Module4Theory[3].checkpoints.push(
  {id:'cp-math11-m4-04-two-directions',question:'Chứng minh hai mặt phẳng song song thường cần:',options:['Một cặp đường song song','Hai cặp đường cắt nhau tương ứng song song','Một điểm chung','Một góc vuông'],correctAnswer:'B',explanation:'Cần xác định hai phương độc lập của mặt phẳng.'},
  {id:'cp-math11-m4-04-section',question:'Hai mặt phẳng song song cắt mặt phẳng thứ ba theo hai giao tuyến:',options:['Song song','Vuông góc','Cắt nhau','Trùng nhau luôn'],correctAnswer:'A',explanation:'Tính chất của hai mặt phẳng song song.'},
  {id:'cp-math11-m4-04-prism',question:'Các cạnh bên của lăng trụ:',options:['Song song và bằng nhau','Vuông góc nhau','Cắt nhau','Không bằng nhau'],correctAnswer:'A',explanation:'Đây là tính chất cơ bản của lăng trụ.'}
);

math11Module4Theory[4].content += '\n\nKhi đọc hình biểu diễn, chỉ dùng các quan hệ được phép bảo toàn hoặc được kí hiệu rõ. Độ dài và góc nhìn thấy trên hình có thể bị biến dạng; vì vậy không được suy ra vuông góc hay bằng nhau chỉ bằng quan sát.';
math11Module4Theory[4].workedExamples.push(
  {id:'ex-math11-m4-05-ratio',title:'Bảo toàn tỉ số',problem:'$A,B,C$ thẳng hàng, $AB=3BC$. So sánh tỉ số các đoạn ảnh.',steps:['Phép chiếu song song bảo toàn tỉ số trên một đường nếu ảnh không suy biến.','$A_1B_1/B_1C_1=AB/BC$.'],answer:'$A_1B_1/B_1C_1=3$.'},
  {id:'ex-math11-m4-05-parallelogram',title:'Ảnh của hình bình hành',problem:'Giải thích vì sao ảnh không suy biến của hình bình hành vẫn là hình bình hành.',steps:['Hai cặp cạnh đối ban đầu song song.','Phép chiếu song song bảo toàn tính song song.'],answer:'Ảnh có hai cặp cạnh đối song song nên là hình bình hành.'}
);
math11Module4Theory[4].checkpoints.push(
  {id:'cp-math11-m4-05-angle',question:'Phép chiếu song song có bảo toàn góc không?',options:['Luôn có','Không nói chung','Chỉ góc vuông','Chỉ góc nhọn'],correctAnswer:'B',explanation:'Góc có thể bị biến dạng bởi phương chiếu.'},
  {id:'cp-math11-m4-05-circle',question:'Đường tròn thường được biểu diễn thành:',options:['Elip','Tam giác','Đoạn thẳng luôn','Hình vuông'],correctAnswer:'A',explanation:'Hình chiếu song song không suy biến của đường tròn thường là elip.'},
  {id:'cp-math11-m4-05-hidden',question:'Cạnh khuất thường được vẽ bằng:',options:['Nét đứt','Nét đỏ','Không vẽ','Nét kép'],correctAnswer:'A',explanation:'Đây là quy ước hình biểu diễn.'}
);
