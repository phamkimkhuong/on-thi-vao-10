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

export const phy11Module2Theory: TheoryBlock[] = [
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
