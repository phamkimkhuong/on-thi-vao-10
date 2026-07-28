import type {
  TheoryBlock,
  TheoryFormulaVariable
} from '@/data/schema';

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
  moduleId: 'phy11-m2',
  sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
  reviewStatus: 'source_checked',
  ...value
});

const phy11Module2BaseTheory: TheoryBlock[] = [
  block({
    id: 'phy11-theory-m2-description',
    lessonIds: ['phy11-kntt-l8'],
    outcomeIds: ['out-phy11-m2-01'],
    questionTypeIds: ['phy11-qt07'],
    title: 'Mô tả sóng và đọc đồ thị sóng',
    objectives: [
      'Phân biệt đồ thị độ dịch chuyển–vị trí với độ dịch chuyển–thời gian.',
      'Đọc biên độ, bước sóng, chu kì và tần số.',
      'Xác định khoảng cách hoặc thời gian giữa các trạng thái cùng pha.'
    ],
    content:
      'Sóng là sự lan truyền dao động trong không gian. Đồ thị $u-x$ là ảnh của nhiều phần tử tại cùng một thời điểm: khoảng lặp theo trục x là bước sóng. Đồ thị $u-t$ mô tả một phần tử theo thời gian: khoảng lặp theo trục t là chu kì. Biên độ được đọc từ độ dịch chuyển cực đại so với vị trí cân bằng.',
    formulas: [
      {
        id: 'phy11-formula-m2-wave-quantities',
        label: 'Các đại lượng đặc trưng',
        expression: 'f=\\frac1T,\\qquad k=\\frac{2\\pi}{\\lambda},\\qquad \\Delta\\varphi=\\frac{2\\pi\\Delta x}{\\lambda}',
        variables: [
          variable('T', 'chu kì dao động của một phần tử', 's'),
          variable('f', 'tần số', 'Hz'),
          variable('\\lambda', 'bước sóng', 'm'),
          variable('k', 'số sóng', 'rad/m')
        ],
        conditions: ['Độ lệch pha theo không gian được xét tại cùng một thời điểm.']
      }
    ],
    keyPoints: [
      'Hai đỉnh gần nhau trên $u-x$ cách nhau $\\lambda$.',
      'Hai đỉnh gần nhau trên $u-t$ cách nhau T.',
      'Đỉnh đến hõm gần nhất ứng với nửa bước sóng hoặc nửa chu kì.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-description',
        title: 'Đọc ảnh dạng sóng',
        problem: 'Hai đỉnh liên tiếp trên đồ thị $u-x$ ở 0,20 m và 0,80 m; biên trên là 3 cm. Tìm A và $\\lambda$.',
        steps: [
          'Biên độ là độ dịch chuyển cực đại: $A=3$ cm.',
          'Bước sóng là khoảng hai đỉnh: $\\lambda=0,80-0,20=0,60$ m.'
        ],
        answer: '$A=3$ cm và $\\lambda=0,60$ m.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-description',
        question: 'Trên đồ thị u–t, khoảng giữa hai đỉnh liên tiếp là đại lượng nào?',
        options: ['Biên độ', 'Bước sóng', 'Chu kì', 'Tốc độ sóng'],
        correctAnswer: 'C',
        explanation: 'Trục ngang là thời gian nên khoảng lặp là chu kì.'
      }
    ],
    orderIndex: 1
  }),
  block({
    id: 'phy11-theory-m2-speed-energy',
    lessonIds: ['phy11-kntt-l8', 'phy11-kntt-l9', 'phy11-kntt-l14'],
    outcomeIds: ['out-phy11-m2-02'],
    questionTypeIds: ['phy11-qt08'],
    title: 'Tốc độ truyền sóng và sự truyền năng lượng',
    objectives: [
      'Vận dụng quan hệ giữa tốc độ, bước sóng và tần số.',
      'Phân biệt tốc độ truyền sóng với tốc độ dao động của phần tử.',
      'Giải thích sóng truyền năng lượng nhưng không chuyển toàn bộ vật chất theo sóng.'
    ],
    content:
      'Trong thời gian một chu kì, trạng thái dao động truyền đi một bước sóng. Tốc độ truyền sóng phụ thuộc môi trường; khi nguồn đổi tần số trong cùng môi trường, tốc độ gần như giữ nguyên và bước sóng thay đổi. Các phần tử môi trường chỉ dao động quanh vị trí cân bằng và truyền tương tác cho phần tử kế cận.',
    formulas: [
      {
        id: 'phy11-formula-m2-speed',
        label: 'Tốc độ truyền sóng',
        expression: 'v=\\frac{\\lambda}{T}=\\lambda f',
        variables: [
          variable('v', 'tốc độ truyền sóng', 'm/s'),
          variable('\\lambda', 'bước sóng', 'm'),
          variable('T', 'chu kì', 's'),
          variable('f', 'tần số', 'Hz')
        ],
        conditions: ['Các đại lượng phải thuộc cùng một sóng trong cùng môi trường.']
      }
    ],
    keyPoints: [
      'Không đồng nhất v với vận tốc tức thời của phần tử môi trường.',
      'Trong cùng môi trường, f tăng thì $\\lambda$ giảm.',
      'Năng lượng và trạng thái dao động lan truyền; phần tử vật chất không đi theo sóng đến nơi nhận.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-speed',
        title: 'Tính bước sóng',
        problem: 'Sóng truyền với tốc độ 12 m/s và tần số 4 Hz. Tìm bước sóng.',
        steps: ['Dùng $\\lambda=v/f$.', 'Thay số: $\\lambda=12/4=3$ m.'],
        answer: '$\\lambda=3$ m.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-speed',
        question: 'Một chiếc lá nổi làm gì khi gợn sóng đi qua?',
        options: ['Đi theo sóng tới bờ', 'Dao động quanh vị trí cân bằng', 'Đứng yên tuyệt đối', 'Chuyển động thẳng đều'],
        correctAnswer: 'B',
        explanation: 'Phần tử và vật nổi dao động cục bộ, không được sóng mang đi toàn bộ.'
      }
    ],
    orderIndex: 2
  }),
  block({
    id: 'phy11-theory-m2-wave-types',
    lessonIds: ['phy11-kntt-l9'],
    outcomeIds: ['out-phy11-m2-03'],
    questionTypeIds: ['phy11-qt09'],
    title: 'Sóng ngang, sóng dọc và môi trường truyền',
    objectives: [
      'Phân loại sóng theo quan hệ giữa phương dao động và phương truyền.',
      'Nêu được ví dụ sóng ngang, sóng dọc.',
      'Giải thích vì sao sóng cơ cần môi trường vật chất.'
    ],
    content:
      'Sóng ngang có phương dao động của phần tử vuông góc phương truyền; sóng trên dây căng là ví dụ điển hình. Sóng dọc có phương dao động trùng phương truyền và xuất hiện dưới dạng các vùng nén–dãn; âm trong không khí là sóng dọc. Sóng cơ truyền nhờ tương tác giữa các phần tử môi trường nên không truyền được trong chân không.',
    formulas: [],
    keyPoints: [
      'Không phân loại sóng chỉ dựa vào đường hình sin được vẽ.',
      'Cần xác định cả phương dao động thật của phần tử và phương truyền.',
      'Sóng âm có thể truyền trong rắn, lỏng và khí nhưng không truyền trong chân không.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-wave-types',
        title: 'Phân loại sóng trên lò xo',
        problem: 'Các vòng lò xo nén–dãn dọc theo trục, vùng nén truyền theo trục. Đây là sóng gì?',
        steps: ['Phương dao động của vòng lò xo trùng phương truyền.', 'Kết luận là sóng dọc.'],
        answer: 'Sóng dọc.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-wave-types',
        question: 'Sóng âm trong không khí thuộc loại nào?',
        options: ['Sóng ngang', 'Sóng dọc', 'Sóng điện từ', 'Sóng không mang năng lượng'],
        correctAnswer: 'B',
        explanation: 'Các phần tử không khí dao động theo phương truyền của vùng nén–dãn.'
      }
    ],
    orderIndex: 3
  }),
  block({
    id: 'phy11-theory-m2-sound-frequency',
    lessonIds: ['phy11-kntt-l10'],
    outcomeIds: ['out-phy11-m2-04'],
    questionTypeIds: ['phy11-qt10'],
    title: 'Thực hành đo tần số của sóng âm',
    objectives: [
      'Mô tả được vai trò của nguồn âm, micro và thiết bị hiển thị.',
      'Đo nhiều chu kì trên tín hiệu rồi tính tần số.',
      'Nhận diện nhiễu, cắt đỉnh và sai thang thời gian.'
    ],
    content:
      'Micro biến dao động áp suất của âm thành tín hiệu điện. Dao động kí hoặc phần mềm hiển thị tín hiệu theo thời gian. Cần điều chỉnh tín hiệu đủ rõ, không cắt đỉnh; chọn nhiều chu kì ổn định, đo tổng thời gian rồi chia. Mười một đỉnh liên tiếp chỉ tạo mười khoảng chu kì.',
    formulas: [
      {
        id: 'phy11-formula-m2-sound-frequency',
        label: 'Tần số từ tín hiệu nhiều chu kì',
        expression: 'T=\\frac{\\Delta t}{N},\\qquad f=\\frac{N}{\\Delta t}',
        variables: [
          variable('\\Delta t', 'tổng thời gian của N chu kì', 's'),
          variable('N', 'số khoảng chu kì'),
          variable('f', 'tần số âm', 'Hz')
        ],
        conditions: ['Hai mốc đo phải là hai trạng thái cùng pha.']
      }
    ],
    keyPoints: [
      'Đọc đúng đơn vị ms và s trên trục thời gian.',
      'Đo nhiều chu kì để giảm sai số tương đối.',
      'Giảm nhiễu môi trường và tránh tín hiệu bị cắt đỉnh.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-sound-frequency',
        title: 'Tần số từ dao động kí',
        problem: 'Tín hiệu có 5 chu kì trong 10 ms. Tìm tần số.',
        steps: ['$T=10\\text{ ms}/5=2$ ms $=0,002$ s.', '$f=1/T=500$ Hz.'],
        answer: '$f=500$ Hz.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-sound-frequency',
        question: 'Vì sao nên đo nhiều chu kì tín hiệu?',
        options: ['Để đổi tần số nguồn', 'Để giảm sai số tương đối', 'Để tăng tốc độ âm', 'Để loại bỏ micro'],
        correctAnswer: 'B',
        explanation: 'Sai số đọc hai đầu chiếm tỉ lệ nhỏ hơn trên một khoảng thời gian dài.'
      }
    ],
    orderIndex: 4
  }),
  block({
    id: 'phy11-theory-m2-electromagnetic',
    lessonIds: ['phy11-kntt-l11'],
    outcomeIds: ['out-phy11-m2-05'],
    questionTypeIds: ['phy11-qt11'],
    title: 'Sóng điện từ và phổ sóng điện từ',
    objectives: [
      'Nêu được sóng điện từ truyền được trong chân không.',
      'Sắp xếp các miền phổ theo tần số hoặc bước sóng.',
      'Liên hệ mỗi miền với ứng dụng và yêu cầu an toàn.'
    ],
    content:
      'Sóng điện từ là điện từ trường lan truyền trong không gian và không cần môi trường vật chất. Trong chân không, mọi miền phổ truyền với cùng tốc độ c. Theo chiều tăng tần số có thể ghi nhớ: sóng vô tuyến, vi ba, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma; bước sóng biến thiên theo chiều ngược lại.',
    formulas: [
      {
        id: 'phy11-formula-m2-em',
        label: 'Quan hệ sóng điện từ trong chân không',
        expression: 'c=\\lambda f\\approx3,0\\times10^8\\ \\text{m/s}',
        variables: [
          variable('c', 'tốc độ ánh sáng trong chân không', 'm/s'),
          variable('\\lambda', 'bước sóng', 'm'),
          variable('f', 'tần số', 'Hz')
        ],
        conditions: ['Giá trị c dùng cho chân không, gần đúng cho không khí.']
      }
    ],
    keyPoints: [
      'Tần số tăng thì bước sóng giảm.',
      'Hồng ngoại liên quan điều khiển từ xa và ảnh nhiệt; tia X dùng tạo ảnh xương.',
      'Bức xạ năng lượng cao cần kiểm soát thời gian, khoảng cách và che chắn.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-em',
        title: 'Tần số sóng vô tuyến',
        problem: 'Sóng có bước sóng 3 m trong chân không. Tìm tần số.',
        steps: ['$f=c/\\lambda$.', '$f=3\\times10^8/3=10^8$ Hz.'],
        answer: '$f=100$ MHz.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-em',
        question: 'Miền nào có bước sóng ngắn hơn ánh sáng nhìn thấy?',
        options: ['Hồng ngoại', 'Sóng vô tuyến', 'Tử ngoại', 'Vi ba'],
        correctAnswer: 'C',
        explanation: 'Tử ngoại có tần số cao hơn nên bước sóng ngắn hơn.'
      }
    ],
    orderIndex: 5
  }),
  block({
    id: 'phy11-theory-m2-interference',
    lessonIds: ['phy11-kntt-l12', 'phy11-kntt-l14'],
    outcomeIds: ['out-phy11-m2-06'],
    questionTypeIds: ['phy11-qt12'],
    title: 'Giao thoa sóng',
    objectives: [
      'Nêu được điều kiện hai nguồn kết hợp.',
      'Xác định cực đại, cực tiểu với hai nguồn cùng pha.',
      'Xử lí khoảng cách giữa các cực trị trên đoạn nối hai nguồn.'
    ],
    content:
      'Giao thoa là sự tổng hợp của hai sóng kết hợp tạo nên các vị trí tăng cường và triệt tiêu ổn định. Hai nguồn kết hợp phải cùng tần số và có độ lệch pha không đổi. Với hai nguồn cùng pha, hiệu đường đi quyết định trạng thái tại điểm khảo sát. Trên đoạn nối hai nguồn cùng pha, các cực đại liên tiếp cách nhau $\\lambda/2$.',
    formulas: [
      {
        id: 'phy11-formula-m2-interference',
        label: 'Điều kiện cực đại – cực tiểu với hai nguồn cùng pha',
        expression: '\\text{Cực đại: }|d_2-d_1|=k\\lambda;\\qquad \\text{Cực tiểu: }|d_2-d_1|=\\left(k+\\frac12\\right)\\lambda',
        variables: [
          variable('d_1,d_2', 'khoảng cách từ điểm khảo sát tới hai nguồn', 'm'),
          variable('k', 'số nguyên'),
          variable('\\lambda', 'bước sóng', 'm')
        ],
        conditions: ['Hai nguồn kết hợp và cùng pha.']
      }
    ],
    keyPoints: [
      'Cùng tần số chưa đủ; độ lệch pha giữa hai nguồn phải ổn định.',
      'Trên trung trực hai nguồn cùng pha, hiệu đường đi bằng 0 nên là cực đại trung tâm.',
      'Cần giới hạn nghiệm trong miền hình học của bài.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-interference',
        title: 'Xác định cực trị',
        problem: 'Hai nguồn cùng pha có $\\lambda=2$ cm. Tại M, $|d_2-d_1|=5$ cm. M thuộc cực đại hay cực tiểu?',
        steps: ['$5\\text{ cm}=2,5\\lambda$.', 'Hiệu đường đi là nửa nguyên lần bước sóng nên M là cực tiểu.'],
        answer: 'M là cực tiểu giao thoa.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-interference',
        question: 'Hai nguồn cùng tần số nhưng lệch pha thay đổi ngẫu nhiên có tạo hệ ổn định không?',
        options: ['Luôn có', 'Không bảo đảm', 'Mọi điểm đều cực đại', 'Mọi điểm đều cực tiểu'],
        correctAnswer: 'B',
        explanation: 'Nguồn kết hợp cần độ lệch pha không đổi.'
      }
    ],
    orderIndex: 6
  }),
  block({
    id: 'phy11-theory-m2-standing-wave',
    lessonIds: ['phy11-kntt-l13', 'phy11-kntt-l14'],
    outcomeIds: ['out-phy11-m2-07'],
    questionTypeIds: ['phy11-qt13'],
    title: 'Sóng dừng trên dây',
    objectives: [
      'Giải thích sự hình thành sóng dừng từ sóng tới và sóng phản xạ.',
      'Nhận biết nút, bụng và khoảng cách giữa chúng.',
      'Vận dụng điều kiện biên cho dây hai đầu cố định hoặc một đầu tự do.'
    ],
    content:
      'Sóng dừng hình thành do chồng chất hai sóng cùng tần số, cùng phương truyền ngược chiều. Nút là vị trí có biên độ bằng 0; bụng là vị trí có biên độ cực đại. Hai nút hoặc hai bụng liên tiếp cách nhau $\\lambda/2$; một nút và bụng gần nhất cách nhau $\\lambda/4$. Đầu cố định là nút, đầu tự do lí tưởng là bụng.',
    formulas: [
      {
        id: 'phy11-formula-m2-standing-fixed',
        label: 'Dây có hai đầu cùng loại biên',
        expression: 'L=n\\frac{\\lambda}{2},\\qquad n=1,2,3,\\ldots',
        variables: [
          variable('L', 'chiều dài dây', 'm'),
          variable('n', 'số bó sóng'),
          variable('\\lambda', 'bước sóng', 'm')
        ],
        conditions: ['Hai đầu đều là nút hoặc hai đầu đều là bụng.']
      },
      {
        id: 'phy11-formula-m2-standing-mixed',
        label: 'Dây một đầu nút, một đầu bụng',
        expression: 'L=(2n+1)\\frac{\\lambda}{4},\\qquad n=0,1,2,\\ldots',
        variables: [
          variable('L', 'chiều dài dây', 'm'),
          variable('n', 'bậc mode bắt đầu từ 0')
        ],
        conditions: ['Một đầu cố định và một đầu tự do lí tưởng.']
      }
    ],
    keyPoints: [
      'Phải xác định điều kiện hai đầu trước khi chọn công thức.',
      'Dây hai đầu cố định có n bó sóng thì có n + 1 nút.',
      'Tần số được tìm tiếp bằng $f=v/\\lambda$.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-standing',
        title: 'Ba bó sóng trên dây',
        problem: 'Dây dài 1,2 m, hai đầu cố định, có 3 bó sóng. Tìm bước sóng.',
        steps: ['$L=3\\lambda/2$.', '$\\lambda=2L/3=0,8$ m.'],
        answer: '$\\lambda=0,8$ m.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-standing',
        question: 'Khoảng cách giữa hai nút liên tiếp là bao nhiêu?',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        correctAnswer: 'B',
        explanation: 'Hai nút liên tiếp cách nhau nửa bước sóng.'
      }
    ],
    orderIndex: 7
  }),
  block({
    id: 'phy11-theory-m2-sound-speed',
    lessonIds: ['phy11-kntt-l15'],
    outcomeIds: ['out-phy11-m2-08'],
    questionTypeIds: ['phy11-qt14'],
    title: 'Thực hành đo tốc độ truyền âm',
    objectives: [
      'Mô tả phép đo bằng cộng hưởng hoặc độ trễ thời gian.',
      'Xử lí nhiều lần đo để tìm bước sóng hoặc tốc độ.',
      'Nêu nguồn sai số và biện pháp cải thiện.'
    ],
    content:
      'Có thể đo tốc độ âm bằng ống cộng hưởng hoặc bằng hai micro. Trong ống một đầu kín, hiệu hai chiều dài cộng hưởng liên tiếp bằng nửa bước sóng; cách lấy hiệu giúp giảm ảnh hưởng của hiệu chỉnh đầu ống. Với hai micro, đo khoảng cách và độ trễ của cùng một xung âm. Nhiệt độ không khí, vị trí cảm biến và độ phân giải thời gian là các nguồn sai số chính.',
    formulas: [
      {
        id: 'phy11-formula-m2-resonance-speed',
        label: 'Phương pháp cộng hưởng',
        expression: '\\lambda=2\\Delta L,\\qquad v=\\lambda f',
        variables: [
          variable('\\Delta L', 'hiệu hai chiều dài cộng hưởng liên tiếp', 'm'),
          variable('\\lambda', 'bước sóng âm', 'm'),
          variable('f', 'tần số nguồn âm', 'Hz')
        ],
        conditions: ['Hai trạng thái cộng hưởng phải liên tiếp và cùng điều kiện thí nghiệm.']
      },
      {
        id: 'phy11-formula-m2-time-speed',
        label: 'Phương pháp độ trễ',
        expression: 'v=\\frac{\\Delta s}{\\Delta t}',
        variables: [
          variable('\\Delta s', 'khoảng cách chênh lệch đường truyền', 'm'),
          variable('\\Delta t', 'độ trễ thời gian', 's')
        ],
        conditions: ['Hai cảm biến ghi cùng một tín hiệu và đồng bộ thời gian.']
      }
    ],
    keyPoints: [
      'Đổi mili giây sang giây trước khi tính.',
      'Dùng nhiều cặp cộng hưởng hoặc nhiều lần đo và lấy trung bình.',
      'Khoảng cách lớn hơn có thể giảm sai số tương đối do độ phân giải thời gian, nếu tín hiệu vẫn đủ rõ.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m2-sound-speed',
        title: 'Đo bằng hai micro',
        problem: 'Hai micro cách nhau 1,70 m nhận cùng xung lệch nhau 5,0 ms. Tìm tốc độ âm.',
        steps: ['$5,0$ ms $=0,005$ s.', '$v=1,70/0,005=340$ m/s.'],
        answer: '$v=340$ m/s.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m2-sound-speed',
        question: 'Hai vị trí cộng hưởng liên tiếp trong ống cách nhau đại lượng nào?',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        correctAnswer: 'B',
        explanation: 'Các mode cộng hưởng liên tiếp hơn kém nhau nửa bước sóng.'
      }
    ],
    orderIndex: 8
  })
];

const theoryEnrichment: Record<
  string,
  Pick<TheoryBlock, 'workedExamples' | 'checkpoints'>
> = {
  'phy11-theory-m2-description': {
    workedExamples: [{
      id: 'phy11-example-m2-description-2',
      title: 'Phân biệt đồ thị không gian và thời gian',
      problem: 'Một đồ thị $u-x$ có hai đỉnh liên tiếp cách 1,8 m. Một đồ thị $u-t$ tại M có hai đỉnh cách 0,30 s. Xác định $\\lambda$ và T.',
      steps: [
        'Khoảng lặp trên đồ thị $u-x$ là bước sóng: $\\lambda=1,8$ m.',
        'Khoảng lặp trên đồ thị $u-t$ là chu kì: $T=0,30$ s.'
      ],
      answer: '$\\lambda=1,8$ m và $T=0,30$ s.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-description-2',
        question: 'Khoảng giữa hai đỉnh liên tiếp trên đồ thị $u-x$ biểu diễn',
        options: ['Chu kì', 'Bước sóng', 'Tần số', 'Tốc độ phần tử'],
        correctAnswer: 'B',
        explanation: 'Trục ngang là vị trí nên khoảng lặp là bước sóng.'
      },
      {
        id: 'phy11-check-m2-description-3',
        question: 'Khoảng từ một đỉnh tới đáy gần nhất trên ảnh sóng bằng',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        correctAnswer: 'B',
        explanation: 'Đỉnh và đáy gần nhất lệch nhau nửa chu kì không gian.'
      }
    ]
  },
  'phy11-theory-m2-speed-energy': {
    workedExamples: [{
      id: 'phy11-example-m2-speed-energy-2',
      title: 'Đếm số khoảng thời gian',
      problem: 'Từ đỉnh sóng thứ nhất đến đỉnh thứ 11 qua M mất 2,0 s. Tốc độ sóng 5 m/s. Tính bước sóng.',
      steps: [
        'Mười một đỉnh tạo mười chu kì: $T=2,0/10=0,20$ s.',
        'Tính $\\lambda=vT=5\\times0,20=1,0$ m.'
      ],
      answer: '$\\lambda=1,0$ m.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-speed-energy-2',
        question: 'Khi sóng truyền, phần tử môi trường',
        options: ['Đi theo sóng tới vô hạn', 'Dao động quanh vị trí cân bằng', 'Luôn đứng yên', 'Biến thành năng lượng'],
        correctAnswer: 'B',
        explanation: 'Sóng truyền trạng thái dao động và năng lượng, không tải vật chất theo cùng tốc độ.'
      },
      {
        id: 'phy11-check-m2-speed-energy-3',
        question: 'Nguồn giữ nguyên f, tốc độ truyền giảm thì bước sóng',
        options: ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'],
        correctAnswer: 'B',
        explanation: 'Theo $\\lambda=v/f$, với f không đổi thì λ biến thiên cùng chiều với v.'
      }
    ]
  },
  'phy11-theory-m2-wave-types': {
    workedExamples: [{
      id: 'phy11-example-m2-wave-types-2',
      title: 'Phân loại từ phương dao động',
      problem: 'Các vòng lò xo dao động dọc theo trục trong khi vùng nén truyền dọc trục. Đây là sóng gì?',
      steps: [
        'Phương dao động của vòng lò xo song song phương truyền.',
        'Theo định nghĩa, đó là sóng dọc.'
      ],
      answer: 'Sóng dọc.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-wave-types-2',
        question: 'Sóng trên dây căng thường là sóng ngang vì',
        options: ['Phần tử dao động vuông góc phương truyền', 'Dây nằm ngang', 'Sóng có hình sin', 'Tốc độ không đổi'],
        correctAnswer: 'A',
        explanation: 'Phân loại dựa trên quan hệ giữa hai phương, không dựa vào hình vẽ.'
      },
      {
        id: 'phy11-check-m2-wave-types-3',
        question: 'Sóng cơ không truyền được trong',
        options: ['Chất rắn', 'Chất lỏng', 'Chất khí', 'Chân không'],
        correctAnswer: 'D',
        explanation: 'Sóng cơ cần môi trường vật chất để truyền biến dạng.'
      }
    ]
  },
  'phy11-theory-m2-sound-frequency': {
    workedExamples: [{
      id: 'phy11-example-m2-sound-frequency-2',
      title: 'Đo nhiều chu kì trên tín hiệu',
      problem: 'Trên màn hình, khoảng từ đỉnh thứ nhất đến đỉnh thứ chín là 16 ms. Tính tần số.',
      steps: [
        'Chín đỉnh tạo tám chu kì: $T=16/8=2$ ms.',
        'Đổi $T=0,002$ s và tính $f=1/T=500$ Hz.'
      ],
      answer: '$f=500$ Hz.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-sound-frequency-2',
        question: 'Đo tám chu kì thay vì một chu kì chủ yếu giúp',
        options: ['Tăng tần số thật', 'Giảm sai số tương đối khi đọc thời gian', 'Đổi loại âm', 'Loại mọi sai số hệ thống'],
        correctAnswer: 'B',
        explanation: 'Khoảng đo dài hơn làm sai số đọc chiếm tỉ lệ nhỏ hơn.'
      },
      {
        id: 'phy11-check-m2-sound-frequency-3',
        question: '$2$ ms bằng',
        options: ['$2$ s', '$0,2$ s', '$0,02$ s', '$0,002$ s'],
        correctAnswer: 'D',
        explanation: 'Một mili giây bằng $10^{-3}$ giây.'
      }
    ]
  },
  'phy11-theory-m2-electromagnetic': {
    workedExamples: [{
      id: 'phy11-example-m2-electromagnetic-2',
      title: 'So sánh tần số từ bước sóng',
      problem: 'Hai bức xạ có bước sóng $600$ nm và $300$ nm trong chân không. So sánh tần số.',
      steps: [
        'Trong chân không, cả hai truyền với cùng tốc độ c.',
        'Vì $f=c/\\lambda$, bước sóng giảm một nửa làm tần số tăng gấp đôi.'
      ],
      answer: 'Bức xạ 300 nm có tần số gấp đôi bức xạ 600 nm.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-electromagnetic-2',
        question: 'Sóng điện từ có truyền được trong chân không không?',
        options: ['Có', 'Không', 'Chỉ tia sáng', 'Chỉ sóng vô tuyến'],
        correctAnswer: 'A',
        explanation: 'Sóng điện từ không cần môi trường vật chất.'
      },
      {
        id: 'phy11-check-m2-electromagnetic-3',
        question: 'Trong chân không, bức xạ có bước sóng ngắn hơn thì',
        options: ['Tần số nhỏ hơn', 'Tần số lớn hơn', 'Tốc độ lớn hơn c', 'Không có năng lượng'],
        correctAnswer: 'B',
        explanation: 'Do $c=\\lambda f$ không đổi, λ và f biến thiên ngược chiều.'
      }
    ]
  },
  'phy11-theory-m2-interference': {
    workedExamples: [{
      id: 'phy11-example-m2-interference-2',
      title: 'Nguồn ngược pha',
      problem: 'Hai nguồn ngược pha. Tại M có $|d_2-d_1|=2,5\\lambda$. M là cực đại hay cực tiểu?',
      steps: [
        'Nguồn ngược pha cho cực đại khi hiệu đường đi bằng nửa nguyên lần bước sóng.',
        '$2,5\\lambda=(2+1/2)\\lambda$ nên thỏa điều kiện cực đại.'
      ],
      answer: 'M là điểm cực đại.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-interference-2',
        question: 'Hai nguồn cùng pha, trên trung trực của đoạn nối nguồn có',
        options: ['Hiệu đường đi bằng 0 và cực đại', 'Hiệu đường đi bằng λ/2', 'Luôn cực tiểu', 'Không giao thoa'],
        correctAnswer: 'A',
        explanation: 'Mọi điểm trên trung trực cách đều hai nguồn nên hai sóng tới cùng pha.'
      },
      {
        id: 'phy11-check-m2-interference-3',
        question: 'Trên đoạn nối hai nguồn cùng pha, hai cực đại liên tiếp cách',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        correctAnswer: 'B',
        explanation: 'Hiệu đường đi thay đổi hai lần nhanh hơn tọa độ trên đoạn nối nguồn.'
      }
    ]
  },
  'phy11-theory-m2-standing-wave': {
    workedExamples: [{
      id: 'phy11-example-m2-standing-wave-2',
      title: 'Tần số cơ bản của dây biên hỗn hợp',
      problem: 'Dây dài 0,60 m, một đầu cố định một đầu tự do, tốc độ sóng 48 m/s. Tính tần số cơ bản.',
      steps: [
        'Mode cơ bản có $L=\\lambda/4$, nên $\\lambda=4L=2,4$ m.',
        'Tính $f_1=v/\\lambda=48/2,4=20$ Hz.'
      ],
      answer: '$f_1=20$ Hz.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-standing-wave-2',
        question: 'Dây hai đầu cố định có 4 bó sóng thì có bao nhiêu nút kể cả hai đầu?',
        options: ['3', '4', '5', '8'],
        correctAnswer: 'C',
        explanation: 'Số nút bằng số bó cộng một.'
      },
      {
        id: 'phy11-check-m2-standing-wave-3',
        question: 'Biên hỗn hợp chỉ cho phép các họa âm',
        options: ['Mọi số nguyên', 'Số lẻ', 'Số chẵn', 'Số nguyên tố'],
        correctAnswer: 'B',
        explanation: 'Điều kiện $L=(2n+1)\\lambda/4$ tạo các tần số lẻ của tần số cơ bản.'
      }
    ]
  },
  'phy11-theory-m2-sound-speed': {
    workedExamples: [{
      id: 'phy11-example-m2-sound-speed-2',
      title: 'Lấy trung bình nhiều lần đo',
      problem: 'Bốn lần đo tốc độ âm cho 338, 342, 341 và 339 m/s. Tính giá trị trung bình.',
      steps: [
        'Cộng bốn kết quả được 1360 m/s.',
        'Chia cho 4: $\\bar v=340$ m/s.'
      ],
      answer: '$\\bar v=340$ m/s.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m2-sound-speed-2',
        question: 'Trong phương pháp hai micro, tốc độ âm được tính bằng',
        options: ['$v=\\Delta t/s$', '$v=s/\\Delta t$', '$v=s\\Delta t$', '$v=1/(s\\Delta t)$'],
        correctAnswer: 'B',
        explanation: 'Tốc độ bằng quãng đường truyền chia độ trễ thời gian.'
      },
      {
        id: 'phy11-check-m2-sound-speed-3',
        question: 'Tăng khoảng cách hai micro, vẫn đo chính xác độ trễ, thường giúp',
        options: ['Giảm sai số tương đối thời gian', 'Tốc độ thật tăng', 'Âm đổi tần số', 'Không cần đổi ms sang s'],
        correctAnswer: 'A',
        explanation: 'Độ trễ lớn hơn làm cùng sai số tuyệt đối thời gian chiếm tỉ lệ nhỏ hơn.'
      }
    ]
  }
};

export const phy11Module2Theory: TheoryBlock[] = phy11Module2BaseTheory.map(block => {
  const enrichment = theoryEnrichment[block.id];
  if (!enrichment) return block;
  return {
    ...block,
    workedExamples: [...(block.workedExamples ?? []), ...(enrichment.workedExamples ?? [])],
    checkpoints: [...(block.checkpoints ?? []), ...(enrichment.checkpoints ?? [])]
  };
});
