import type { TheoryBlock } from '@/data/schema';

const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];

export const g11EnglishModule1Theory: TheoryBlock[] = [
  {
    id: 'eng11-theory-u1-pronunciation',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-pronunciation'],
    questionTypeIds: ['eng11-qt-u1-pronunciation'],
    sourceIds,
    title: 'Strong and weak forms of auxiliary verbs',
    objectives: ['Nhận biết trợ động từ mang hoặc không mang trọng âm.', 'Phân biệt dạng phát âm trong câu hỏi và câu trả lời ngắn.'],
    content: [
      'Trong lời nói tự nhiên, trợ động từ thường được phát âm yếu khi chỉ làm nhiệm vụ ngữ pháp và không mang thông tin mới. Ví dụ, have trong “Have you finished?” thường yếu.',
      'Trợ động từ thường mang dạng mạnh khi được nhấn để khẳng định, phủ định tương phản, dùng trong câu trả lời ngắn hoặc đứng ở cuối cụm: “Yes, I have.”',
      'Bài tập trên nền tảng kiểm tra nhận biết trọng âm và ngữ cảnh bằng văn bản; không chấm khả năng nói của học sinh.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Câu hỏi trung tính: trợ động từ thường yếu.', 'Câu trả lời ngắn hoặc nhấn mạnh: trợ động từ thường mạnh.', 'Luôn xét chức năng trong câu, không chỉ nhìn mặt chữ.'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-pronunciation',
        title: 'Xác định dạng mạnh',
        problem: 'Trong “Can you swim?” — “Yes, I can.”, từ can nào thường mang dạng mạnh?',
        steps: ['Can trong câu hỏi là trợ động từ không được nhấn.', 'Can trong câu trả lời ngắn đứng cuối và mang thông tin xác nhận.'],
        answer: 'Can trong “Yes, I can.” thường mang dạng mạnh.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-pron-1', question: 'Trợ động từ thường mang dạng mạnh khi nào?', options: ['Trong mọi câu hỏi', 'Trong câu trả lời ngắn', 'Trước chủ ngữ', 'Trước động từ chính'], correctAnswer: 'B', explanation: 'Câu trả lời ngắn thường nhấn trợ động từ để xác nhận hoặc phủ định.' },
      { id: 'eng11-cp-u1-pron-2', question: 'Trong “Have you eaten?”, have thường:', options: ['Mang dạng yếu', 'Mang dạng mạnh bắt buộc', 'Không được phát âm', 'Là động từ chính'], correctAnswer: 'A', explanation: 'Have chỉ làm trợ động từ trong câu hỏi trung tính nên thường không mang trọng âm.' }
    ],
    orderIndex: 1,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u1-vocabulary',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-getting-started', 'eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-vocabulary'],
    questionTypeIds: ['eng11-qt-u1-vocabulary'],
    sourceIds,
    title: 'Vocabulary: health, fitness and longevity',
    objectives: ['Hiểu từ vựng cốt lõi về sức khỏe.', 'Dùng đúng collocation trong câu.'],
    content: [
      'Học từ theo cụm giúp tránh chọn từ gần nghĩa nhưng không tự nhiên. Các cụm trọng tâm gồm balanced diet, regular exercise, boost the immune system, life expectancy, break an unhealthy habit và suffer from a disease.',
      'Phân biệt disease (một bệnh cụ thể), illness (tình trạng bị bệnh) và health (trạng thái sức khỏe). Ingredient là thành phần dùng để chế biến; nutrient là chất dinh dưỡng mà cơ thể cần.',
      'Khi làm câu điền từ, xác định từ loại trước, sau đó kiểm tra collocation và cuối cùng đọc lại nghĩa toàn câu.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['balanced diet, regular exercise', 'boost the immune system', 'life expectancy', 'break/form a habit'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-vocabulary',
        title: 'Chọn collocation',
        problem: 'Regular exercise can ___ your immune system.',
        steps: ['Sau modal can cần động từ nguyên mẫu.', 'Collocation tự nhiên là boost the immune system.'],
        answer: 'boost'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-vocab-1', question: 'Cụm nào đúng?', options: ['heavy diet', 'balanced diet', 'equal diet', 'stable diet'], correctAnswer: 'B', explanation: 'Balanced diet là collocation chỉ chế độ ăn cân bằng.' },
      { id: 'eng11-cp-u1-vocab-2', question: 'Life expectancy có nghĩa là:', options: ['Thói quen sống', 'Chất lượng bữa ăn', 'Tuổi thọ kỳ vọng', 'Bảo hiểm sức khỏe'], correctAnswer: 'C', explanation: 'Life expectancy là số năm trung bình một người được kỳ vọng sẽ sống.' }
    ],
    orderIndex: 2,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u1-grammar',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-grammar'],
    questionTypeIds: ['eng11-qt-u1-grammar'],
    sourceIds,
    title: 'Past Simple vs. Present Perfect',
    objectives: ['Phân biệt hai thì theo trục thời gian.', 'Dùng đúng since, for và các dấu hiệu thời gian.'],
    content: [
      'Past Simple diễn tả hành động đã xảy ra và kết thúc trong một thời gian quá khứ xác định: yesterday, last week, two years ago, in 2022. Cấu trúc khẳng định dùng V2/ed.',
      'Present Perfect diễn tả trải nghiệm không nêu thời gian đã kết thúc, kết quả còn liên hệ hiện tại hoặc trạng thái bắt đầu trong quá khứ và còn tiếp tục. Cấu trúc: have/has + past participle.',
      'Since đi với mốc bắt đầu; for đi với khoảng thời gian. Không dùng Present Perfect cùng yesterday, last... hoặc ago.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'eng11-form-u1-past-simple',
        label: 'Past Simple',
        expression: 'S + V_{2/ed}',
        variables: [{ symbol: 'S', meaning: 'Chủ ngữ' }, { symbol: 'V_{2/ed}', meaning: 'Động từ ở quá khứ đơn' }],
        conditions: ['Hành động đã kết thúc trong thời gian quá khứ xác định']
      },
      {
        id: 'eng11-form-u1-present-perfect',
        label: 'Present Perfect',
        expression: 'S + have/has + V_3',
        variables: [{ symbol: 'S', meaning: 'Chủ ngữ' }, { symbol: 'V_3', meaning: 'Quá khứ phân từ' }],
        conditions: ['Trải nghiệm, kết quả hiện tại hoặc trạng thái kéo dài đến hiện tại']
      }
    ],
    keyPoints: ['yesterday/ago/last → Past Simple', 'since/for/so far/yet → thường dùng Present Perfect', 'Không ghép Present Perfect với mốc quá khứ đã kết thúc.'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-grammar-1',
        title: 'Mốc thời gian đã kết thúc',
        problem: 'She ___ a health check last Monday.',
        steps: ['Last Monday là thời gian quá khứ đã kết thúc.', 'Dùng Past Simple của have là had.'],
        answer: 'had'
      },
      {
        id: 'eng11-ex-u1-grammar-2',
        title: 'Khoảng thời gian kéo dài',
        problem: 'They ___ in this town for ten years.',
        steps: ['For ten years cho biết một khoảng thời gian.', 'Nếu họ vẫn sống ở đây, dùng Present Perfect.'],
        answer: 'have lived'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-grammar-1', question: 'I ___ him yesterday.', options: ['see', 'saw', 'have seen', 'has seen'], correctAnswer: 'B', explanation: 'Yesterday yêu cầu Past Simple.' },
      { id: 'eng11-cp-u1-grammar-2', question: 'She has exercised regularly ___ 2024.', options: ['for', 'since', 'ago', 'last'], correctAnswer: 'B', explanation: '2024 là mốc bắt đầu nên dùng since.' },
      { id: 'eng11-cp-u1-grammar-3', question: 'Have you ever ___ yoga?', options: ['try', 'tried', 'trying', 'tries'], correctAnswer: 'B', explanation: 'Present Perfect dùng have + past participle.' }
    ],
    orderIndex: 3,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u1-reading',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-reading'],
    outcomeIds: ['eng11-out-u1-reading'],
    questionTypeIds: ['eng11-qt-u1-reading'],
    sourceIds,
    title: 'Reading strategies: main idea, detail and inference',
    objectives: ['Đọc văn bản 250–280 từ có chiến lược.', 'Phân biệt thông tin trực tiếp với suy luận.'],
    content: [
      'Với câu hỏi ý chính, đọc câu đầu, câu cuối và ý lặp lại ở mỗi đoạn. Đáp án đúng phải bao quát toàn bài, không chỉ một chi tiết.',
      'Với câu hỏi chi tiết, dùng từ khóa để định vị nhưng phải đọc cả câu trước và sau. Với câu quy chiếu, thay đại từ bằng danh từ dự đoán rồi kiểm tra ngữ pháp và nghĩa.',
      'Suy luận phải dựa trên bằng chứng trong bài. Một đáp án hợp lý ngoài đời nhưng không được văn bản hỗ trợ vẫn là đáp án sai.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Main idea phải bao quát.', 'Detail cần được đối chiếu đúng đoạn.', 'Inference luôn cần bằng chứng.'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-reading',
        title: 'Loại đáp án quá hẹp',
        problem: 'Một bài nói về giấc ngủ, dinh dưỡng và vận động. Đáp án “Benefits of sleep” có thể là main idea không?',
        steps: ['Xác định bài có ba nhóm ý.', 'Đáp án chỉ bao phủ một nhóm nên quá hẹp.'],
        answer: 'Không; cần một đáp án bao quát toàn bộ các thói quen lành mạnh.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-read-1', question: 'Câu hỏi main idea yêu cầu:', options: ['Một con số', 'Ý bao quát toàn bài', 'Một từ đồng nghĩa', 'Ý kiến cá nhân'], correctAnswer: 'B', explanation: 'Main idea phải thể hiện trọng tâm chung của văn bản.' },
      { id: 'eng11-cp-u1-read-2', question: 'Khi gặp đại từ it, bước phù hợp nhất là:', options: ['Bỏ qua', 'Chọn danh từ gần nhất bất kỳ', 'Thay từng danh từ khả dĩ và kiểm tra nghĩa', 'Dịch riêng từ it'], correctAnswer: 'C', explanation: 'Khoảng cách gần chưa đủ; cần kiểm tra cả ngữ pháp và ý nghĩa.' }
    ],
    orderIndex: 4,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u1-writing',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-writing'],
    outcomeIds: ['eng11-out-u1-writing'],
    questionTypeIds: ['eng11-qt-u1-writing'],
    sourceIds,
    title: 'Writing indirectly: paragraph unity and cohesion',
    objectives: ['Nhận biết cấu trúc đoạn văn.', 'Sắp xếp và liên kết ý mạch lạc.'],
    content: [
      'Một đoạn văn rõ thường có câu chủ đề, các câu hỗ trợ và câu kết. Câu chủ đề nêu ý kiểm soát; mỗi câu hỗ trợ phải giải thích, minh họa hoặc chứng minh cho ý đó.',
      'Khi sắp xếp câu, tìm câu có thể đứng độc lập để mở đoạn. Các câu bắt đầu bằng This, These, They hoặc từ nối như Therefore thường phải đi sau thông tin mà chúng quy chiếu.',
      'Bài luyện trên nền tảng đánh giá writing gián tiếp. Bài viết tự do 150–180 từ cần rubric và tự/giáo viên đánh giá, không trộn vào bài kiểm tra tự chấm.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Topic sentence → supporting details → concluding sentence.', 'Theo dõi đại từ quy chiếu.', 'Từ nối phải đúng quan hệ logic.'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-writing',
        title: 'Xác định thứ tự',
        problem: 'Sắp xếp: (a) Therefore, I now sleep better. (b) I stopped drinking coffee late at night.',
        steps: ['Therefore báo hiệu kết quả.', 'Hành động ngừng uống cà phê phải xuất hiện trước kết quả.'],
        answer: '(b) → (a)'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-write-1', question: 'Câu nào thường đứng đầu đoạn?', options: ['Câu bắt đầu bằng Therefore', 'Câu chủ đề', 'Một đại từ không có từ quy chiếu', 'Chi tiết cuối cùng'], correctAnswer: 'B', explanation: 'Câu chủ đề giới thiệu ý kiểm soát của đoạn.' },
      { id: 'eng11-cp-u1-write-2', question: 'Từ nối nào biểu thị kết quả?', options: ['However', 'For example', 'Therefore', 'Meanwhile'], correctAnswer: 'C', explanation: 'Therefore nối nguyên nhân với kết quả.' }
    ],
    orderIndex: 5,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u1-communication',
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonIds: ['eng11-u1-communication-culture'],
    outcomeIds: ['eng11-out-u1-communication'],
    questionTypeIds: ['eng11-qt-u1-communication'],
    sourceIds,
    title: 'Giving advice and responding appropriately',
    objectives: ['Nhận diện mục đích giao tiếp.', 'Chọn phản hồi lịch sự và liên quan.'],
    content: [
      'Có thể đưa lời khuyên bằng You should..., You could..., Why don’t you...? hoặc If I were you, I would.... Should khá trực tiếp; could mềm hơn; must thường thể hiện nghĩa vụ mạnh.',
      'Phản hồi tích cực gồm Thanks, I’ll try that hoặc That sounds helpful. Nếu không đồng ý, nên nêu lý do lịch sự thay vì phủ định cụt.',
      'Đáp án đúng phải nối được với cả lượt lời trước và lượt lời sau, đồng thời phù hợp quan hệ giữa người nói.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Xác định speech act trước.', 'Chọn mức độ lịch sự phù hợp.', 'Kiểm tra tính liên kết của toàn hội thoại.'],
    workedExamples: [
      {
        id: 'eng11-ex-u1-communication',
        title: 'Đáp lại lời khuyên',
        problem: 'A: You should get more sleep. B: ___',
        steps: ['A đang đưa lời khuyên.', 'B cần ghi nhận hoặc phản hồi trực tiếp với lời khuyên.'],
        answer: 'Thanks. I’ll try going to bed earlier.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u1-comm-1', question: 'Phản hồi phù hợp với một lời khuyên là:', options: ['Never mind.', 'Thanks, I’ll try that.', 'It is not yours.', 'So did I.'], correctAnswer: 'B', explanation: 'Câu này ghi nhận lời khuyên một cách lịch sự.' },
      { id: 'eng11-cp-u1-comm-2', question: 'Cách đưa lời khuyên mềm nhất là:', options: ['Do it now.', 'You must do it.', 'You could try taking a short walk.', 'You are wrong.'], correctAnswer: 'C', explanation: 'Could đưa ra một lựa chọn nhẹ nhàng, không mang tính ra lệnh.' }
    ],
    orderIndex: 6,
    reviewStatus: 'source_checked'
  }
];
