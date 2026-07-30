import type { TheoryBlock } from '@/data/schema';

const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];

export const g11EnglishModule3Theory: TheoryBlock[] = [
  {
    id: 'eng11-theory-u3-pronunciation',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-pronunciation'],
    questionTypeIds: ['eng11-qt-u3-pronunciation'],
    sourceIds,
    title: 'Linking final consonants to initial vowels',
    objectives: ['Nhận diện ranh giới nối âm.', 'Phân biệt âm phát ra với chữ viết.'],
    content: [
      'Trong lời nói liền mạch, phụ âm cuối của một từ thường được nối với nguyên âm đầu của từ kế tiếp: live‿in, cities‿of, turn‿on. Người nghe có thể cảm thấy phụ âm thuộc về âm tiết sau.',
      'Quy tắc dựa trên âm, không chỉ chữ cái. Chữ e câm trong make không tạo nguyên âm cuối; âm /k/ vẫn có thể nối với nguyên âm đầu của từ sau trong make‿it.',
      'Dấu câu hoặc quãng ngắt có thể ngăn nối âm. Phần luyện trên web yêu cầu nhận biết ranh giới; không chấm phát âm trực tiếp.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Phụ âm cuối + nguyên âm đầu → có thể nối.', 'Xét âm thực tế.', 'Quãng ngắt có thể chặn nối.'],
    workedExamples: [
      { id: 'eng11-ex-u3-pron', title: 'Đánh dấu nối âm', problem: 'Đánh dấu vị trí nối trong “The bus is electric.”', steps: ['Bus kết thúc bằng /s/, is bắt đầu bằng nguyên âm.', 'Is kết thúc bằng /z/, electric bắt đầu bằng nguyên âm.'], answer: 'bus‿is‿electric' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-pron-1', question: 'Cụm nào có nối phụ âm-nguyên âm?', options: ['smart city', 'green park', 'lives in', 'clean street'], correctAnswer: 'C', explanation: 'Lives kết thúc bằng /z/ và in bắt đầu bằng nguyên âm.' },
      { id: 'eng11-cp-u3-pron-2', question: 'Nối âm được xác định chủ yếu bằng:', options: ['Màu chữ', 'Âm phát ra', 'Độ dài từ', 'Loại câu'], correctAnswer: 'B', explanation: 'Cần xét âm cuối và âm đầu thực tế.' }
    ],
    orderIndex: 1,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u3-vocabulary',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-getting-started', 'eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-vocabulary'],
    questionTypeIds: ['eng11-qt-u3-vocabulary'],
    sourceIds,
    title: 'Vocabulary: infrastructure and smart living',
    objectives: ['Hiểu từ vựng đô thị cốt lõi.', 'Dùng đúng collocation khi mô tả giải pháp.'],
    content: [
      'Infrastructure là hệ thống nền tảng như đường, điện, nước và mạng thông tin. Congestion là tình trạng quá tải, thường gặp trong traffic congestion. Pedestrian là người đi bộ; pedestrian zone là khu ưu tiên hoặc dành cho người đi bộ.',
      'Smart-city systems có thể dùng sensors để thu thập dữ liệu, nhưng dữ liệu chỉ hữu ích khi được quản lý có mục đích và bảo vệ quyền riêng tư.',
      'Các cụm trọng tâm gồm renewable energy, public transport, affordable housing, reduce emissions, ease congestion và improve quality of life.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['urban infrastructure', 'public transport', 'renewable energy', 'reduce emissions/congestion'],
    workedExamples: [
      { id: 'eng11-ex-u3-vocab', title: 'Chọn collocation', problem: 'A new metro line may ___ traffic congestion.', steps: ['Sau may cần động từ nguyên mẫu.', 'Ease congestion là làm giảm tình trạng tắc nghẽn.'], answer: 'ease' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-vocab-1', question: 'Infrastructure bao gồm:', options: ['Chỉ một ngôi nhà', 'Hệ thống đường, điện và nước', 'Một ứng dụng', 'Một lễ hội'], correctAnswer: 'B', explanation: 'Infrastructure là hệ thống nền tảng phục vụ thành phố.' },
      { id: 'eng11-cp-u3-vocab-2', question: 'Cụm nào đúng?', options: ['renewable energy', 'repeat energy', 'return energy', 'renewing traffic'], correctAnswer: 'A', explanation: 'Renewable energy là năng lượng tái tạo.' }
    ],
    orderIndex: 2,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u3-grammar',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-grammar'],
    questionTypeIds: ['eng11-qt-u3-grammar'],
    sourceIds,
    title: 'Stative verbs in continuous forms and linking verbs',
    objectives: ['Nhận biết sự thay đổi nghĩa của stative verbs.', 'Dùng adjective sau linking verbs.'],
    content: [
      'Động từ trạng thái thường mô tả nhận thức, sở hữu, giác quan hoặc cảm xúc và thường dùng ở simple forms: I think the plan is useful; the city has a metro.',
      'Một số động từ có thể dùng tiếp diễn khi mang nghĩa hành động hoặc tạm thời: I am thinking about the proposal (đang cân nhắc); we are having a meeting (đang tham gia); the chef is tasting the soup (đang nếm).',
      'Linking verbs như be, seem, become, look, feel, smell và taste nối chủ ngữ với phần mô tả. Khi mô tả chủ ngữ, dùng adjective: The street looks safe; the air smells fresh.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'eng11-form-u3-linking',
        label: 'Linking verb pattern',
        expression: 'S + linking\\ verb + adjective',
        variables: [{ symbol: 'S', meaning: 'Chủ ngữ được mô tả' }, { symbol: 'adjective', meaning: 'Tính từ mô tả chủ ngữ' }],
        conditions: ['Động từ đang làm chức năng nối, không phải động từ hành động']
      }
    ],
    keyPoints: ['Xét nghĩa trước khi chọn simple/continuous.', 'think = tin rằng; be thinking = cân nhắc.', 'Linking verb + adjective.'],
    workedExamples: [
      { id: 'eng11-ex-u3-grammar-1', title: 'Stative verb chuyển nghĩa', problem: 'The council ___ about a new pedestrian zone this week.', steps: ['Think about ở đây là quá trình cân nhắc.', 'This week cho thấy hoạt động tạm thời.'], answer: 'is thinking' },
      { id: 'eng11-ex-u3-grammar-2', title: 'Linking verb', problem: 'The new park looks ___.', steps: ['Look mô tả chủ ngữ park.', 'Cần tính từ sau linking verb.'], answer: 'attractive' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-grammar-1', question: 'I ___ this solution is practical.', options: ['am thinking', 'think', 'am thought', 'thinking'], correctAnswer: 'B', explanation: 'Think mang nghĩa tin/cho rằng nên dùng simple form.' },
      { id: 'eng11-cp-u3-grammar-2', question: 'The air smells ___.', options: ['freshly', 'fresh', 'freshness', 'freshen'], correctAnswer: 'B', explanation: 'Smell là linking verb nên theo sau là adjective.' },
      { id: 'eng11-cp-u3-grammar-3', question: 'We ___ a planning meeting now.', options: ['have', 'are having', 'has', 'having'], correctAnswer: 'B', explanation: 'Have mang nghĩa tham gia/tổ chức hoạt động nên dùng tiếp diễn.' }
    ],
    orderIndex: 3,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u3-reading',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-reading'],
    outcomeIds: ['eng11-out-u3-reading'],
    questionTypeIds: ['eng11-qt-u3-reading'],
    sourceIds,
    title: 'Reading urban solutions critically',
    objectives: ['Liên kết vấn đề với giải pháp và bằng chứng.', 'Nhận diện đánh đổi và giới hạn.'],
    content: [
      'Khi đọc về đô thị thông minh, xác định bốn thành phần: vấn đề, giải pháp, cơ chế tác động và bằng chứng. Một đoạn chỉ mô tả công nghệ chưa chứng minh công nghệ đó hiệu quả.',
      'Tìm các tín hiệu đánh đổi như however, while, although và unless. Chúng thường giới thiệu chi phí, quyền riêng tư, khả năng tiếp cận hoặc tác động ngoài dự kiến.',
      'Với câu suy luận, không chọn kết luận rằng giải pháp “hoàn toàn” giải quyết vấn đề nếu văn bản chỉ dùng may, can hoặc could.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Problem → solution → mechanism → evidence.', 'Tìm trade-off.', 'Không mạnh hóa mức độ khẳng định.'],
    workedExamples: [
      { id: 'eng11-ex-u3-read', title: 'Đánh giá bằng chứng', problem: 'Một thành phố lắp cảm biến nhưng không đo thay đổi sau đó. Có thể kết luận dự án thành công không?', steps: ['Việc lắp đặt chỉ mô tả đầu vào.', 'Thiếu dữ liệu kết quả hoặc tác động.'], answer: 'Chưa thể kết luận dự án thành công.' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-read-1', question: 'Từ nào thường báo hiệu hạn chế?', options: ['However', 'Similarly', 'First', 'For example'], correctAnswer: 'A', explanation: 'However thường giới thiệu ý tương phản hoặc hạn chế.' },
      { id: 'eng11-cp-u3-read-2', question: 'Bằng chứng tốt nhất về giảm tắc đường là:', options: ['Tên dự án', 'Số liệu thời gian di chuyển trước và sau', 'Màu của xe buýt', 'Một khẩu hiệu'], correctAnswer: 'B', explanation: 'So sánh dữ liệu trước-sau trực tiếp đo tác động.' }
    ],
    orderIndex: 4,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u3-writing',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-writing'],
    outcomeIds: ['eng11-out-u3-writing'],
    questionTypeIds: ['eng11-qt-u3-writing'],
    sourceIds,
    title: 'Writing indirectly: problem, solution and evaluation',
    objectives: ['Tổ chức đoạn problem-solution.', 'Liên kết tác động và điều kiện hợp lý.'],
    content: [
      'Một đoạn problem-solution nên giới thiệu vấn đề cụ thể, nêu giải pháp, giải thích cách giải pháp hoạt động và đánh giá điều kiện hoặc giới hạn. Chỉ liệt kê công nghệ không tạo thành lập luận.',
      'Therefore/as a result biểu thị kết quả; because/since biểu thị nguyên nhân; however/although biểu thị hạn chế hoặc tương phản.',
      'Câu kết nên quay lại tiêu chí ban đầu như khả năng tiếp cận, bền vững hoặc chất lượng sống, thay vì thêm một giải pháp hoàn toàn mới.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Problem → solution → mechanism → evaluation.', 'Từ nối phải đúng logic.', 'Kết luận không mở ý mới.'],
    workedExamples: [
      { id: 'eng11-ex-u3-write', title: 'Sắp xếp lập luận', problem: 'Đặt “Bus lanes reduce delay” trước hay sau “Buses are often stuck in traffic”?', steps: ['Câu thứ hai nêu vấn đề.', 'Câu đầu nêu giải pháp/tác động.'], answer: 'Nêu vấn đề trước, sau đó nêu tác động của bus lanes.' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-write-1', question: 'Từ nối chỉ kết quả là:', options: ['Although', 'Therefore', 'Because', 'Meanwhile'], correctAnswer: 'B', explanation: 'Therefore giới thiệu kết quả.' },
      { id: 'eng11-cp-u3-write-2', question: 'Câu kết tốt nên:', options: ['Mở một chủ đề mới', 'Lặp nguyên văn', 'Đánh giá giải pháp theo tiêu chí', 'Chỉ nêu tên công nghệ'], correctAnswer: 'C', explanation: 'Kết luận cần tổng hợp hoặc đánh giá lập luận.' }
    ],
    orderIndex: 5,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u3-communication',
    courseId: 'grade11:english',
    moduleId: 'eng11-m3',
    lessonIds: ['eng11-u3-communication-culture'],
    outcomeIds: ['eng11-out-u3-communication'],
    questionTypeIds: ['eng11-qt-u3-communication'],
    sourceIds,
    title: 'Predicting and proposing urban solutions',
    objectives: ['Diễn đạt mức độ chắc chắn phù hợp.', 'Đề xuất và phản hồi giải pháp có điều kiện.'],
    content: [
      'Dùng will khi người nói có cơ sở xem kết quả là chắc chắn; may, might và could cho khả năng. Be likely to diễn tả xác suất tương đối cao nhưng vẫn không tuyệt đối.',
      'Khi đề xuất, dùng Why don’t we...?, We could... hoặc I suggest + V-ing. Phản hồi xây dựng có thể ghi nhận lợi ích rồi nêu điều kiện: That could work if it remains affordable.',
      'Giải pháp đô thị cần xét người sử dụng khác nhau, không chỉ nhóm thuận tiện nhất.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['may/might/could = khả năng', 'suggest + V-ing', 'Đánh giá lợi ích kèm điều kiện.'],
    workedExamples: [
      { id: 'eng11-ex-u3-comm', title: 'Phản hồi đề xuất', problem: 'A: We could replace all tickets with an app. B: ___', steps: ['Ghi nhận sự tiện lợi.', 'Nêu điều kiện tiếp cận cho người không có điện thoại thông minh.'], answer: 'That may be convenient, but we should keep another option for people without smartphones.' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u3-comm-1', question: 'Cách diễn đạt dự đoán chưa chắc chắn là:', options: ['It must happen.', 'It might reduce congestion.', 'It always works.', 'It is guaranteed.'], correctAnswer: 'B', explanation: 'Might cho biết một khả năng.' },
      { id: 'eng11-cp-u3-comm-2', question: 'Cấu trúc đúng là:', options: ['I suggest build', 'I suggest to building', 'I suggest building', 'I suggest built'], correctAnswer: 'C', explanation: 'Suggest đi với V-ing trong cấu trúc này.' }
    ],
    orderIndex: 6,
    reviewStatus: 'source_checked'
  }
];
