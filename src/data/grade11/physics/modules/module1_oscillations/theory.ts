import type { TheoryBlock, TheoryFormulaVariable } from '@/data/schema';

const variable = (
  symbol: string,
  meaning: string,
  unit?: string,
  note?: string
): TheoryFormulaVariable => ({ symbol, meaning, unit, note });

const phy11Module1BaseTheory: TheoryBlock[] = [
  {
    id: 'phy11-theory-m1-characteristics',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1', 'phy11-kntt-l2'],
    outcomeIds: ['out-phy11-m1-01'],
    questionTypeIds: ['phy11-qt01'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Dao động điều hòa và các đại lượng đặc trưng',
    objectives: [
      'Nhận biết dao động, dao động tuần hoàn và dao động điều hòa.',
      'Đọc được biên độ, chu kì, tần số, tần số góc và pha từ phương trình hoặc đồ thị.',
      'Đổi đúng giữa chu kì, tần số và tần số góc.'
    ],
    content:
      'Dao động là chuyển động qua lại quanh vị trí cân bằng. Dao động tuần hoàn lặp lại trạng thái sau những khoảng thời gian bằng nhau. Dao động điều hòa là dao động có li độ biến thiên theo hàm cos hoặc sin của thời gian. Biên độ là độ lệch lớn nhất tính từ vị trí cân bằng và luôn dương; pha cho biết trạng thái dao động tại một thời điểm.',
    formulas: [
      {
        id: 'phy11-formula-m1-x',
        label: 'Phương trình li độ',
        expression: 'x=A\\cos(\\omega t+\\varphi)',
        variables: [
          variable('x', 'li độ tại thời điểm t', 'm hoặc cm'),
          variable('A', 'biên độ dao động', 'm hoặc cm', 'A > 0'),
          variable('\\omega', 'tần số góc', 'rad/s'),
          variable('t', 'thời gian', 's'),
          variable('\\varphi', 'pha ban đầu', 'rad')
        ],
        conditions: ['Gốc thời gian và chiều dương phải được chọn rõ ràng.'],
        notes: ['Pha tại thời điểm t là $\\omega t+\\varphi$.']
      },
      {
        id: 'phy11-formula-m1-frequency',
        label: 'Quan hệ chu kì – tần số – tần số góc',
        expression: 'f=\\frac{1}{T},\\qquad \\omega=2\\pi f=\\frac{2\\pi}{T}',
        variables: [
          variable('T', 'chu kì', 's'),
          variable('f', 'tần số', 'Hz'),
          variable('\\omega', 'tần số góc', 'rad/s')
        ],
        conditions: ['Các đại lượng mô tả cùng một dao động.']
      }
    ],
    keyPoints: [
      'Khoảng thời gian giữa hai trạng thái giống hệt nhau gần nhất là một chu kì.',
      'Khoảng cách giữa hai biên bằng $2A$, không phải A.',
      'Hệ số âm trước cos phải được chuyển vào pha; biên độ không nhận giá trị âm.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-characteristics',
        title: 'Đọc phương trình dao động',
        problem: 'Vật dao động theo $x=4\\cos(5\\pi t-\\pi/3)$ cm. Tìm A, T và f.',
        steps: [
          'Đối chiếu dạng chuẩn được $A=4$ cm và $\\omega=5\\pi$ rad/s.',
          'Tính $T=2\\pi/\\omega=0,4$ s.',
          'Tính $f=1/T=2,5$ Hz.'
        ],
        answer: '$A=4$ cm, $T=0,4$ s, $f=2,5$ Hz.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-characteristics',
        question: 'Đại lượng nào luôn dương trong phương trình dao động điều hòa dạng chuẩn?',
        options: ['Li độ x', 'Pha ban đầu', 'Biên độ A', 'Vận tốc v'],
        correctAnswer: 'C',
        explanation: 'Biên độ là độ lớn cực đại của li độ nên A luôn dương.'
      }
    ],
    orderIndex: 1,
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-theory-m1-motion',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l3', 'phy11-kntt-l4'],
    outcomeIds: ['out-phy11-m1-02'],
    questionTypeIds: ['phy11-qt02'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Li độ, vận tốc và gia tốc trong dao động điều hòa',
    objectives: [
      'Viết được biểu thức vận tốc và gia tốc từ phương trình li độ.',
      'Xác định được giá trị cực đại và trạng thái chuyển động.',
      'Vận dụng hệ thức độc lập thời gian.'
    ],
    content:
      'Vận tốc cho biết chiều và mức độ nhanh chậm của chuyển động. Vận tốc sớm pha $\\pi/2$ so với li độ và đạt độ lớn cực đại tại vị trí cân bằng. Gia tốc luôn hướng về vị trí cân bằng, ngược pha với li độ và đạt độ lớn cực đại tại hai biên.',
    formulas: [
      {
        id: 'phy11-formula-m1-velocity',
        label: 'Vận tốc và vận tốc cực đại',
        expression: 'v=-\\omega A\\sin(\\omega t+\\varphi),\\qquad v_{\\max}=\\omega A',
        variables: [
          variable('v', 'vận tốc tức thời', 'm/s hoặc cm/s'),
          variable('v_{\\max}', 'độ lớn vận tốc cực đại', 'm/s hoặc cm/s')
        ],
        conditions: ['Đơn vị của A phải thống nhất với đơn vị vận tốc cần tìm.']
      },
      {
        id: 'phy11-formula-m1-acceleration',
        label: 'Gia tốc và gia tốc cực đại',
        expression: 'a=-\\omega^2x,\\qquad a_{\\max}=\\omega^2A',
        variables: [
          variable('a', 'gia tốc tức thời', 'm/s² hoặc cm/s²'),
          variable('a_{\\max}', 'độ lớn gia tốc cực đại', 'm/s² hoặc cm/s²')
        ],
        conditions: ['Dấu của a được xác định từ dấu của x.']
      },
      {
        id: 'phy11-formula-m1-independent',
        label: 'Hệ thức độc lập thời gian',
        expression: 'v^2=\\omega^2\\left(A^2-x^2\\right)',
        variables: [
          variable('x', 'li độ', 'm hoặc cm'),
          variable('v', 'vận tốc', 'm/s hoặc cm/s')
        ],
        conditions: ['A và x dùng cùng đơn vị; công thức cho độ lớn v, chiều phải xét riêng.']
      }
    ],
    keyPoints: [
      'Tại vị trí cân bằng: $|v|=v_{\\max}$ và $a=0$.',
      'Tại hai biên: $v=0$ và $|a|=a_{\\max}$.',
      'Nếu x và v cùng dấu, vật đang đi xa vị trí cân bằng; trái dấu thì đang đi về.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-motion',
        title: 'Tìm vận tốc tại một li độ',
        problem: 'Dao động có $A=5$ cm, $\\omega=4$ rad/s. Tìm độ lớn v khi $x=3$ cm.',
        steps: [
          'Dùng $v^2=\\omega^2(A^2-x^2)$.',
          'Thay số: $|v|=4\\sqrt{5^2-3^2}=16$ cm/s.',
          'Muốn biết dấu của v cần thêm chiều chuyển động.'
        ],
        answer: '$|v|=16$ cm/s.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-motion',
        question: 'Khi vật ở biên dương, gia tốc có chiều nào?',
        options: ['Chiều dương', 'Chiều âm, về vị trí cân bằng', 'Bằng không', 'Cùng chiều vận tốc'],
        correctAnswer: 'B',
        explanation: '$a=-\\omega^2x$ nên x dương thì a âm.'
      }
    ],
    orderIndex: 2,
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-theory-m1-energy',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l5', 'phy11-kntt-l7'],
    outcomeIds: ['out-phy11-m1-03'],
    questionTypeIds: ['phy11-qt03'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Năng lượng trong dao động điều hòa',
    objectives: [
      'Mô tả được sự chuyển hóa giữa động năng và thế năng.',
      'Tính được cơ năng và năng lượng tại một trạng thái.',
      'Nêu đúng điều kiện bảo toàn cơ năng.'
    ],
    content:
      'Trong dao động điều hòa lí tưởng, động năng và thế năng liên tục chuyển hóa cho nhau nhưng tổng cơ năng không đổi. Với con lắc lò xo chọn mốc thế năng tại vị trí cân bằng, thế năng phụ thuộc bình phương li độ. Ở biên toàn bộ cơ năng là thế năng; tại vị trí cân bằng toàn bộ cơ năng là động năng.',
    formulas: [
      {
        id: 'phy11-formula-m1-potential-energy',
        label: 'Thế năng và động năng',
        expression: 'W_t=\\frac12kx^2,\\qquad W_đ=\\frac12mv^2',
        variables: [
          variable('k', 'độ cứng lò xo', 'N/m'),
          variable('m', 'khối lượng vật', 'kg'),
          variable('x', 'li độ', 'm'),
          variable('v', 'vận tốc', 'm/s')
        ],
        conditions: ['Mốc thế năng đàn hồi được chọn tại vị trí cân bằng.']
      },
      {
        id: 'phy11-formula-m1-mechanical-energy',
        label: 'Cơ năng dao động',
        expression: 'W=W_đ+W_t=\\frac12kA^2=\\frac12m\\omega^2A^2',
        variables: [
          variable('W', 'cơ năng', 'J'),
          variable('A', 'biên độ', 'm')
        ],
        conditions: ['Bỏ qua ma sát và lực cản; hệ dao động lí tưởng.']
      }
    ],
    keyPoints: [
      'Động năng và thế năng không bảo toàn riêng lẻ.',
      'Tỉ số $W_t/W=x^2/A^2$ và $W_đ/W=1-x^2/A^2$.',
      'Cơ năng tỉ lệ với bình phương biên độ.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-energy',
        title: 'Tỉ lệ động năng tại một vị trí',
        problem: 'Vật dao động điều hòa tại $|x|=0,6A$. Hỏi động năng chiếm bao nhiêu phần trăm cơ năng?',
        steps: [
          'Tính $W_t/W=x^2/A^2=0,6^2=0,36$.',
          'Suy ra $W_đ/W=1-0,36=0,64$.'
        ],
        answer: 'Động năng chiếm $64\\%$ cơ năng.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-energy',
        question: 'Tại vị trí cân bằng của dao động lí tưởng, đại lượng nào cực đại?',
        options: ['Thế năng', 'Động năng', 'Li độ', 'Gia tốc'],
        correctAnswer: 'B',
        explanation: 'Tại x = 0, thế năng nhỏ nhất và động năng cực đại.'
      }
    ],
    orderIndex: 3,
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-theory-m1-damped-forced',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l6'],
    outcomeIds: ['out-phy11-m1-04'],
    questionTypeIds: ['phy11-qt04'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Dao động tắt dần và dao động cưỡng bức',
    objectives: [
      'Phân biệt dao động tự do, tắt dần và cưỡng bức.',
      'Giải thích sự giảm biên độ do mất mát năng lượng.',
      'Xác định tần số của dao động cưỡng bức ở trạng thái ổn định.'
    ],
    content:
      'Dao động tắt dần là dao động có biên độ và cơ năng giảm dần vì lực cản thực hiện công âm. Dao động cưỡng bức xuất hiện khi hệ chịu ngoại lực tuần hoàn; sau giai đoạn chuyển tiếp, hệ dao động ổn định theo tần số của ngoại lực. Biên độ cưỡng bức phụ thuộc độ lệch giữa tần số kích thích và tần số riêng, đồng thời phụ thuộc lực cản.',
    formulas: [],
    keyPoints: [
      'Lực cản càng lớn, dao động thường tắt càng nhanh.',
      'Tần số cưỡng bức ổn định bằng tần số ngoại lực, không mặc định bằng tần số riêng.',
      'Ngoại lực tuần hoàn cung cấp năng lượng để bù phần bị tiêu hao.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-damped-forced',
        title: 'Nhận diện dao động cưỡng bức',
        problem: 'Một bệ máy có tần số riêng 4 Hz, chịu lực tuần hoàn 6 Hz. Khi ổn định bệ rung với tần số nào?',
        steps: ['Xác định đây là dao động cưỡng bức.', 'Tần số ổn định bằng tần số ngoại lực.'],
        answer: 'Bệ rung với tần số 6 Hz.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-damped-forced',
        question: 'Đại lượng nào giảm dần trong dao động tắt dần?',
        options: ['Cơ năng', 'Thời gian', 'Khối lượng', 'Tần số ngoại lực'],
        correctAnswer: 'A',
        explanation: 'Lực cản làm cơ năng của hệ giảm theo thời gian.'
      }
    ],
    orderIndex: 4,
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-theory-m1-resonance',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l6'],
    outcomeIds: ['out-phy11-m1-05'],
    questionTypeIds: ['phy11-qt05'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Hiện tượng cộng hưởng',
    objectives: [
      'Nêu được điều kiện xảy ra cộng hưởng.',
      'Giải thích ảnh hưởng của lực cản tới đỉnh cộng hưởng.',
      'Phân tích lợi ích và tác hại của cộng hưởng.'
    ],
    content:
      'Cộng hưởng là trường hợp đặc biệt của dao động cưỡng bức khi tần số ngoại lực bằng hoặc rất gần tần số riêng, làm biên độ ổn định đạt giá trị lớn. Lực cản nhỏ tạo đỉnh cộng hưởng cao và hẹp; lực cản lớn làm biên độ cực đại nhỏ hơn. Cộng hưởng có thể được khai thác trong nhạc cụ nhưng cũng có thể gây rung nguy hiểm cho cầu, nhà và máy móc.',
    formulas: [],
    keyPoints: [
      'Không phải mọi dao động cưỡng bức đều là cộng hưởng.',
      'Điều kiện cốt lõi: $f\\approx f_0$.',
      'Có thể hạn chế cộng hưởng có hại bằng đổi tần số kích thích hoặc tăng giảm chấn.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-resonance',
        title: 'Tránh cộng hưởng của máy',
        problem: 'Máy có tốc độ quay làm tần số kích thích gần tần số riêng của bệ và rung mạnh. Nên xử lí thế nào?',
        steps: [
          'Nhận diện hệ đang ở gần cộng hưởng.',
          'Điều chỉnh tốc độ quay để tần số kích thích rời xa tần số riêng hoặc tăng giảm chấn.'
        ],
        answer: 'Tránh vùng tần số cộng hưởng và bổ sung giảm chấn phù hợp.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-resonance',
        question: 'Khi nào biên độ cưỡng bức thường lớn nhất?',
        options: ['Khi ngoại lực bằng 0', 'Khi tần số kích thích gần tần số riêng', 'Khi không có dao động', 'Khi khối lượng bằng 0'],
        correctAnswer: 'B',
        explanation: 'Đó là điều kiện gần cộng hưởng.'
      }
    ],
    orderIndex: 5,
    reviewStatus: 'source_checked'
  },
  {
    id: 'phy11-theory-m1-experiment',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1'],
    outcomeIds: ['out-phy11-m1-06'],
    questionTypeIds: ['phy11-qt06'],
    sourceIds: ['phy11-source-official-guide', 'phy11-source-kntt-textbook'],
    title: 'Khảo sát dao động bằng thực nghiệm',
    objectives: [
      'Xác định mục tiêu, biến đo và biến kiểm soát.',
      'Đo chu kì bằng đồng hồ, cảm biến hoặc video.',
      'Xử lí phép đo lặp và nhận diện dữ liệu ngoại lai.'
    ],
    content:
      'Một thí nghiệm dao động đáng tin cậy phải nêu rõ đại lượng cần đo, dụng cụ, quy trình và điều kiện giữ không đổi. Để giảm sai số phản xạ khi bấm giờ, nên đo thời gian của nhiều chu kì rồi chia cho số chu kì. Với video, tốc độ khung hình cho phép đổi số khung thành thời gian. Cần lặp phép đo, lấy trung bình và kiểm tra giá trị lệch xa trước khi kết luận.',
    formulas: [
      {
        id: 'phy11-formula-m1-experiment-period',
        label: 'Suy ra chu kì và tần số từ phép đo',
        expression: 'T=\\frac{t_N}{N},\\qquad f=\\frac{1}{T}=\\frac{N}{t_N}',
        variables: [
          variable('t_N', 'thời gian của N dao động', 's'),
          variable('N', 'số dao động toàn phần'),
          variable('T', 'chu kì trung bình', 's'),
          variable('f', 'tần số', 'Hz')
        ],
        conditions: ['Đếm đúng số khoảng chu kì và đo từ hai trạng thái cùng pha.']
      }
    ],
    keyPoints: [
      'Đo nhiều chu kì giúp giảm sai số tương đối do thao tác bấm giờ.',
      'Chỉ thay một biến độc lập khi khảo sát quan hệ nhân quả.',
      'Giá trị ngoại lai cần được kiểm tra, không tự động đưa vào trung bình.'
    ],
    workedExamples: [
      {
        id: 'phy11-example-m1-experiment',
        title: 'Xử lí phép đo nhiều chu kì',
        problem: 'Ba lần đo thời gian 10 dao động là 12,1 s; 12,3 s; 12,2 s. Tìm chu kì trung bình.',
        steps: [
          'Tính thời gian trung bình: $(12,1+12,3+12,2)/3=12,2$ s.',
          'Chia cho 10 dao động: $T=12,2/10=1,22$ s.'
        ],
        answer: '$T=1,22$ s.'
      }
    ],
    checkpoints: [
      {
        id: 'phy11-check-m1-experiment',
        question: 'Cách nào giảm sai số phản xạ khi dùng đồng hồ bấm giây?',
        options: ['Đo một phần tư chu kì', 'Đo nhiều chu kì rồi chia', 'Chỉ đo một lần', 'Không cần chọn mốc'],
        correctAnswer: 'B',
        explanation: 'Tổng thời gian lớn hơn làm sai số thao tác chiếm tỉ lệ nhỏ hơn.'
      }
    ],
    orderIndex: 6,
    reviewStatus: 'source_checked'
  }
];

const theoryEnrichment: Record<
  string,
  Pick<TheoryBlock, 'workedExamples' | 'checkpoints'>
> = {
  'phy11-theory-m1-characteristics': {
    workedExamples: [{
      id: 'phy11-example-m1-characteristics-2',
      title: 'Lập phương trình từ trạng thái ban đầu',
      problem: 'Vật có $A=5$ cm, $T=1$ s; tại $t=0$ vật qua vị trí cân bằng theo chiều âm. Lập phương trình dạng cos.',
      steps: [
        'Tính $\\omega=2\\pi/T=2\\pi$ rad/s.',
        'Điều kiện $x(0)=0$ cho $\\cos\\varphi=0$.',
        'Vì $v(0)=-\\omega A\\sin\\varphi<0$, chọn $\\varphi=\\pi/2$.'
      ],
      answer: '$x=5\\cos(2\\pi t+\\pi/2)$ cm.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-characteristics-2',
        question: 'Hai trạng thái cùng li độ nhưng ngược chiều chuyển động có chắc chắn cùng pha không?',
        options: ['Có', 'Không', 'Chỉ khi ở biên', 'Chỉ khi ở cân bằng'],
        correctAnswer: 'B',
        explanation: 'Cùng pha đòi hỏi đồng thời cùng li độ và cùng chiều chuyển động.'
      },
      {
        id: 'phy11-check-m1-characteristics-3',
        question: 'Trong dạng chuẩn, nếu hệ số trước cos âm thì thao tác đúng là',
        options: ['Nhận biên độ âm', 'Bỏ dấu âm', 'Chuyển dấu âm vào pha thêm $\\pi$', 'Đổi tần số góc'],
        correctAnswer: 'C',
        explanation: 'Biên độ luôn dương; $-\\cos\\alpha=\\cos(\\alpha+\\pi)$.'
      }
    ]
  },
  'phy11-theory-m1-motion': {
    workedExamples: [{
      id: 'phy11-example-m1-motion-2',
      title: 'Xác định dấu vận tốc và gia tốc',
      problem: 'Vật ở $x=-A/2$ và đang đi về vị trí cân bằng. Xác định dấu của v và a.',
      steps: [
        'Vật ở phía âm và đi về cân bằng nên chuyển động theo chiều dương: $v>0$.',
        'Dùng $a=-\\omega^2x$; vì $x<0$ nên $a>0$.'
      ],
      answer: '$v>0$ và $a>0$.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-motion-2',
        question: 'Tại vị trí cân bằng, đại lượng nào có độ lớn cực đại?',
        options: ['Li độ', 'Vận tốc', 'Gia tốc', 'Thế năng'],
        correctAnswer: 'B',
        explanation: 'Tại $x=0$, tốc độ đạt $\\omega A$ còn gia tốc bằng 0.'
      },
      {
        id: 'phy11-check-m1-motion-3',
        question: 'Khi vật ở biên âm, gia tốc hướng',
        options: ['Theo chiều âm', 'Theo chiều dương', 'Bằng 0', 'Theo chiều vận tốc'],
        correctAnswer: 'B',
        explanation: 'Gia tốc luôn hướng về vị trí cân bằng.'
      }
    ]
  },
  'phy11-theory-m1-energy': {
    workedExamples: [{
      id: 'phy11-example-m1-energy-2',
      title: 'Tìm li độ từ tỉ lệ năng lượng',
      problem: 'Tại vị trí nào động năng bằng ba lần thế năng?',
      steps: [
        '$W=W_đ+W_t=4W_t$ nên $W_t/W=1/4$.',
        'Mà $W_t/W=x^2/A^2$, suy ra $|x|=A/2$.'
      ],
      answer: '$x=\\pm A/2$.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-energy-2',
        question: 'Nếu biên độ tăng gấp đôi thì cơ năng tăng',
        options: ['2 lần', '4 lần', '8 lần', 'Không đổi'],
        correctAnswer: 'B',
        explanation: 'Cơ năng tỉ lệ với bình phương biên độ.'
      },
      {
        id: 'phy11-check-m1-energy-3',
        question: 'Tại vị trí cân bằng của dao động lí tưởng',
        options: ['Thế năng cực đại', 'Động năng bằng 0', 'Động năng cực đại', 'Cơ năng bằng 0'],
        correctAnswer: 'C',
        explanation: 'Li độ bằng 0 làm thế năng nhỏ nhất và động năng cực đại.'
      }
    ]
  },
  'phy11-theory-m1-damped-forced': {
    workedExamples: [{
      id: 'phy11-example-m1-damped-forced-2',
      title: 'Tần số của dao động cưỡng bức',
      problem: 'Hệ có tần số riêng 3 Hz, chịu ngoại lực tuần hoàn 4 Hz. Khi ổn định, hệ dao động với tần số nào?',
      steps: [
        'Ở trạng thái cưỡng bức ổn định, tần số hệ bằng tần số ngoại lực.',
        'Tần số riêng chỉ chi phối mức biên độ đáp ứng.'
      ],
      answer: 'Hệ dao động với tần số 4 Hz.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-damped-forced-2',
        question: 'Trong dao động tắt dần, cơ năng chuyển chủ yếu thành',
        options: ['Nhiệt năng và dạng năng lượng khác', 'Điện năng vô hạn', 'Khối lượng', 'Tần số'],
        correctAnswer: 'A',
        explanation: 'Lực cản thực hiện công âm và làm tiêu hao cơ năng.'
      },
      {
        id: 'phy11-check-m1-damped-forced-3',
        question: 'Tần số của dao động cưỡng bức ổn định bằng',
        options: ['Tần số riêng trong mọi trường hợp', 'Tần số ngoại lực', 'Hiệu hai tần số', 'Không xác định'],
        correctAnswer: 'B',
        explanation: 'Ngoại lực tuần hoàn quyết định tần số dao động cưỡng bức ổn định.'
      }
    ]
  },
  'phy11-theory-m1-resonance': {
    workedExamples: [{
      id: 'phy11-example-m1-resonance-2',
      title: 'Đổi tốc độ quay sang tần số kích thích',
      problem: 'Máy quay 900 vòng/phút, kết cấu có tần số riêng 15 Hz. Đánh giá nguy cơ cộng hưởng.',
      steps: [
        'Đổi $900$ vòng/phút thành $900/60=15$ vòng/s.',
        'Tần số kích thích 15 Hz trùng tần số riêng.'
      ],
      answer: 'Có nguy cơ cộng hưởng rõ rệt.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-resonance-2',
        question: 'Tăng lực cản thường làm đỉnh cộng hưởng',
        options: ['Cao hơn và hẹp hơn', 'Thấp hơn', 'Dịch tới tần số vô hạn', 'Không đổi'],
        correctAnswer: 'B',
        explanation: 'Lực cản lớn làm năng lượng mất nhiều hơn nên biên độ cực đại giảm.'
      },
      {
        id: 'phy11-check-m1-resonance-3',
        question: 'Muốn hạn chế cộng hưởng có hại, có thể',
        options: ['Luôn giảm lực cản', 'Đưa tần số riêng gần tần số kích thích', 'Tăng giảm chấn hoặc dịch tần số riêng', 'Tăng biên độ ngoại lực'],
        correctAnswer: 'C',
        explanation: 'Hai hướng chính là hạ đỉnh đáp ứng và tránh vùng trùng tần số.'
      }
    ]
  },
  'phy11-theory-m1-experiment': {
    workedExamples: [{
      id: 'phy11-example-m1-experiment-2',
      title: 'Đếm đúng số khoảng chu kì',
      problem: 'Từ đỉnh thứ nhất đến đỉnh thứ sáu của đồ thị cách nhau 2,5 s. Tính chu kì.',
      steps: [
        'Sáu đỉnh tạo năm khoảng thời gian bằng chu kì.',
        'Tính $T=2,5/5=0,50$ s.'
      ],
      answer: '$T=0,50$ s.'
    }],
    checkpoints: [
      {
        id: 'phy11-check-m1-experiment-2',
        question: 'Sáu đỉnh liên tiếp tạo ra bao nhiêu khoảng chu kì?',
        options: ['5', '6', '7', '12'],
        correctAnswer: 'A',
        explanation: 'Số khoảng giữa N mốc liên tiếp là N−1.'
      },
      {
        id: 'phy11-check-m1-experiment-3',
        question: 'Một giá trị lệch xa các lần đo còn lại nên được xử lí đầu tiên bằng cách',
        options: ['Xóa ngay không kiểm tra', 'Kiểm tra thao tác và điều kiện đo', 'Luôn lấy làm kết quả', 'Nhân đôi giá trị'],
        correctAnswer: 'B',
        explanation: 'Cần xác định nguyên nhân ngoại lai trước khi quyết định giữ hay loại dữ liệu.'
      }
    ]
  }
};

export const phy11Module1Theory: TheoryBlock[] = phy11Module1BaseTheory.map(block => {
  const enrichment = theoryEnrichment[block.id];
  if (!enrichment) return block;
  return {
    ...block,
    workedExamples: [...(block.workedExamples ?? []), ...(enrichment.workedExamples ?? [])],
    checkpoints: [...(block.checkpoints ?? []), ...(enrichment.checkpoints ?? [])]
  };
});
