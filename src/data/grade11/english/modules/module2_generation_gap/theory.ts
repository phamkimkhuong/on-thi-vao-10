import type { TheoryBlock } from '@/data/schema';

const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];

export const g11EnglishModule2Theory: TheoryBlock[] = [
  {
    id: 'eng11-theory-u2-pronunciation',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-pronunciation'],
    questionTypeIds: ['eng11-qt-u2-pronunciation'],
    sourceIds,
    title: 'Contracted forms',
    objectives: ['Mở rộng dạng rút gọn chính xác.', 'Phân biệt các dạng rút gọn giống mặt chữ bằng ngữ cảnh.'],
    content: [
      'Dạng rút gọn nối đại từ hoặc danh từ với trợ động từ/động từ khuyết thiếu: I will → I’ll, we are → we’re, they have → they’ve. Dạng phủ định gồm do not → don’t, cannot → can’t và must not → mustn’t.',
      'Một hình thức có thể có nhiều cách mở rộng. She’s working nghĩa là she is working; she’s finished nghĩa là she has finished. Hãy nhìn dạng động từ theo sau để phân biệt.',
      'Dạng rút gọn tự nhiên trong hội thoại và văn viết thân mật. Trong văn bản rất trang trọng, dạng đầy đủ thường phù hợp hơn.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['’ll = will', '’re = are; ’ve = have', '’s có thể là is hoặc has', 'n’t thể hiện phủ định'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-pronunciation',
        title: 'Phân biệt she’s',
        problem: 'Mở rộng “She’s completed the task.”',
        steps: ['Completed là past participle.', 'Cấu trúc cần Present Perfect: she has completed.'],
        answer: 'She has completed the task.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-pron-1', question: 'We’ll được mở rộng thành:', options: ['We are', 'We will', 'We have', 'We would have'], correctAnswer: 'B', explanation: '’ll là dạng rút gọn của will.' },
      { id: 'eng11-cp-u2-pron-2', question: 'Trong “He’s waiting”, ’s là:', options: ['has', 'does', 'is', 'was'], correctAnswer: 'C', explanation: 'Waiting là V-ing nên cấu trúc là he is waiting.' },
      { id: 'eng11-cp-u2-pron-3', question: 'Dạng nào phù hợp hơn trong báo cáo rất trang trọng?', options: ['mustn’t', 'can’t', 'is not', 'we’ll'], correctAnswer: 'C', explanation: 'Văn bản trang trọng thường ưu tiên dạng đầy đủ.' }
    ],
    orderIndex: 1,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u2-vocabulary',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-getting-started', 'eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-vocabulary'],
    questionTypeIds: ['eng11-qt-u2-vocabulary'],
    sourceIds,
    title: 'Vocabulary: generations, values and family relationships',
    objectives: ['Hiểu các khái niệm về khác biệt thế hệ.', 'Dùng đúng collocation khi mô tả quan hệ gia đình.'],
    content: [
      'Generation gap là khác biệt về thái độ, giá trị, hành vi hoặc trải nghiệm giữa các nhóm tuổi. Difference mang nghĩa trung tính; disagreement là bất đồng; conflict thường mạnh hơn.',
      'Các cụm cần nhớ gồm set family rules, respect someone’s privacy, follow a tradition, express an opinion, resolve a conflict và reach a compromise.',
      'Value là điều một người hoặc nhóm coi là quan trọng. Attitude là cách nghĩ/cảm nhận; behaviour là cách hành động có thể quan sát.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['generation gap không nhất thiết là conflict', 'respect privacy', 'resolve conflict', 'reach a compromise'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-vocabulary',
        title: 'Phân biệt ba khái niệm',
        problem: 'Chọn từ cho “Honesty is an important family ___.”',
        steps: ['Honesty là điều gia đình coi trọng.', 'Danh từ phù hợp là value.'],
        answer: 'value'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-vocab-1', question: 'Cụm nào có nghĩa đạt được sự thỏa hiệp?', options: ['reach a compromise', 'make a gap', 'do a value', 'take a conflict'], correctAnswer: 'A', explanation: 'Reach a compromise là đi đến giải pháp các bên cùng chấp nhận.' },
      { id: 'eng11-cp-u2-vocab-2', question: 'Behaviour chỉ:', options: ['Điều ta coi trọng', 'Cách ta hành động', 'Tuổi của một người', 'Một quy định pháp luật'], correctAnswer: 'B', explanation: 'Behaviour là hành vi có thể quan sát.' }
    ],
    orderIndex: 2,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u2-grammar',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-grammar'],
    questionTypeIds: ['eng11-qt-u2-grammar'],
    sourceIds,
    title: 'Modal verbs: must, have to and should',
    objectives: ['Phân biệt nghĩa vụ với lời khuyên.', 'Phân biệt cấm đoán với không cần thiết.'],
    content: [
      'Must diễn tả nghĩa vụ mạnh hoặc điều người nói coi là cần thiết. Have to thường diễn tả nghĩa vụ đến từ quy định hay hoàn cảnh bên ngoài. Trong nhiều ngữ cảnh hai dạng gần nghĩa, nhưng nguồn nghĩa vụ giúp chọn chính xác hơn.',
      'Should đưa lời khuyên hoặc điều được mong đợi, yếu hơn must. Sau must và should dùng động từ nguyên mẫu không to; have to giữ to.',
      'Mustn’t nghĩa là bị cấm. Don’t/doesn’t have to nghĩa là không cần thiết nhưng vẫn có thể làm. Shouldn’t là lời khuyên không nên làm.'
    ].join('\n\n'),
    formulas: [
      {
        id: 'eng11-form-u2-modal',
        label: 'Modal verb pattern',
        expression: 'S + must/should + V',
        variables: [{ symbol: 'S', meaning: 'Chủ ngữ' }, { symbol: 'V', meaning: 'Động từ nguyên mẫu không to' }],
        conditions: ['Dùng must cho nghĩa vụ mạnh; should cho lời khuyên']
      },
      {
        id: 'eng11-form-u2-have-to',
        label: 'Have to pattern',
        expression: 'S + have/has\\ to + V',
        variables: [{ symbol: 'S', meaning: 'Chủ ngữ' }, { symbol: 'V', meaning: 'Động từ nguyên mẫu' }],
        conditions: ['Thường dùng cho quy định hoặc hoàn cảnh bên ngoài']
      }
    ],
    keyPoints: ['must/have to = nghĩa vụ', 'should = lời khuyên', 'mustn’t = bị cấm', 'don’t have to = không cần'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-grammar-1',
        title: 'Quy định bên ngoài',
        problem: 'Students ___ wear an ID card because it is a school rule.',
        steps: ['Nghĩa vụ đến từ school rule.', 'Have to phù hợp với quy định bên ngoài.'],
        answer: 'have to'
      },
      {
        id: 'eng11-ex-u2-grammar-2',
        title: 'Cấm đoán và không cần',
        problem: 'You ___ share this password. It is confidential.',
        steps: ['Câu diễn tả điều bị cấm, không phải việc không cần.', 'Dùng mustn’t.'],
        answer: 'mustn’t'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-grammar-1', question: 'You ___ enter this area. It is forbidden.', options: ['don’t have to', 'should', 'mustn’t', 'have to'], correctAnswer: 'C', explanation: 'Forbidden tương ứng với mustn’t.' },
      { id: 'eng11-cp-u2-grammar-2', question: 'You ___ bring food; the school provides lunch.', options: ['don’t have to', 'mustn’t', 'must', 'shouldn’t'], correctAnswer: 'A', explanation: 'Không cần mang vì đã được cung cấp, nhưng không bị cấm.' },
      { id: 'eng11-cp-u2-grammar-3', question: 'Sau should dùng:', options: ['to + V', 'V-ing', 'V nguyên mẫu', 'V2'], correctAnswer: 'C', explanation: 'Modal verb đi với động từ nguyên mẫu không to.' }
    ],
    orderIndex: 3,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u2-reading',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-reading'],
    outcomeIds: ['eng11-out-u2-reading'],
    questionTypeIds: ['eng11-qt-u2-reading'],
    sourceIds,
    title: 'Reading strategies: argument, attitude and evidence',
    objectives: ['Nhận diện luận điểm và bằng chứng.', 'Phân biệt thái độ tác giả với lời của nhân vật.'],
    content: [
      'Văn bản về khoảng cách thế hệ thường có nhiều quan điểm. Hãy ghi rõ ai nói điều gì và không tự động xem lời của một nhân vật là quan điểm của tác giả.',
      'Tín hiệu thái độ có thể nằm ở động từ đánh giá, trạng từ và cách tác giả kết luận. Các từ như may, can và often thể hiện mức độ thận trọng; always hoặc completely là khẳng định mạnh.',
      'Khi suy luận, chọn kết luận được nhiều chi tiết hỗ trợ nhất và tránh đáp án tuyệt đối hóa.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Theo dõi người phát ngôn.', 'Phân biệt claim và evidence.', 'Cẩn thận với đáp án always/never nếu bài không khẳng định tuyệt đối.'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-reading',
        title: 'Nhận diện thái độ thận trọng',
        problem: 'Tác giả viết “This approach may reduce conflict.” Có thể kết luận chắc chắn nó luôn hiệu quả không?',
        steps: ['May chỉ khả năng, không phải sự chắc chắn.', 'Always mạnh hơn bằng chứng mà câu cung cấp.'],
        answer: 'Không; tác giả chỉ nêu khả năng.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-read-1', question: 'Từ nào thể hiện mức độ thận trọng?', options: ['always', 'completely', 'may', 'never'], correctAnswer: 'C', explanation: 'May biểu thị khả năng thay vì chắc chắn.' },
      { id: 'eng11-cp-u2-read-2', question: 'Một ví dụ hoặc số liệu trong lập luận thường đóng vai trò:', options: ['Tiêu đề', 'Bằng chứng', 'Đại từ', 'Từ nối'], correctAnswer: 'B', explanation: 'Ví dụ và số liệu hỗ trợ cho claim của tác giả.' }
    ],
    orderIndex: 4,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u2-writing',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-writing'],
    outcomeIds: ['eng11-out-u2-writing'],
    questionTypeIds: ['eng11-qt-u2-writing'],
    sourceIds,
    title: 'Writing indirectly: presenting views and solutions',
    objectives: ['Tổ chức đoạn nêu vấn đề và giải pháp.', 'Giữ nguyên sắc thái khi viết lại câu với modal.'],
    content: [
      'Đoạn văn về bất đồng gia đình có thể theo cấu trúc: nêu vấn đề → giải thích hai phía → đề xuất giải pháp/thỏa hiệp → kết luận. However cần một ý trước để tạo tương phản; Therefore cần một nguyên nhân trước.',
      'Khi viết lại câu, It is necessary tương ứng với must/have to tùy nguồn nghĩa vụ; It is advisable tương ứng với should. It is not necessary tương ứng với do not have to, không phải must not.',
      'Bài viết tự do về chủ đề này được tách khỏi đề tự chấm; phần runtime hiện đánh giá tổ chức và lựa chọn ngôn ngữ gián tiếp.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Problem → perspectives → compromise → conclusion.', 'Giữ nguyên mức độ nghĩa vụ.', 'Not necessary ≠ mustn’t.'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-writing',
        title: 'Viết lại nghĩa không cần thiết',
        problem: 'It is not necessary for you to attend the meeting.',
        steps: ['Câu nói việc tham dự không bắt buộc.', 'Dùng do not have to, không dùng must not.'],
        answer: 'You do not have to attend the meeting.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-write-1', question: 'It is advisable to listen first. Câu tương đương là:', options: ['You must listen first.', 'You should listen first.', 'You mustn’t listen.', 'You don’t listen.'], correctAnswer: 'B', explanation: 'Advisable diễn tả lời khuyên nên dùng should.' },
      { id: 'eng11-cp-u2-write-2', question: 'Từ nối biểu thị tương phản là:', options: ['Therefore', 'For example', 'However', 'As a result'], correctAnswer: 'C', explanation: 'However nối hai ý đối lập hoặc tương phản.' }
    ],
    orderIndex: 5,
    reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u2-communication',
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonIds: ['eng11-u2-communication-culture'],
    outcomeIds: ['eng11-out-u2-communication'],
    questionTypeIds: ['eng11-qt-u2-communication'],
    sourceIds,
    title: 'Expressing disagreement and reaching compromise',
    objectives: ['Không đồng ý lịch sự.', 'Làm rõ ý và đề xuất giải pháp hai bên chấp nhận.'],
    content: [
      'Để không đồng ý lịch sự, có thể bắt đầu bằng I see your point, but..., I understand why you think that; however..., hoặc I’m not sure I agree because.... Cách này phản hồi ý kiến thay vì công kích người nói.',
      'Khi chưa rõ ý, dùng Do you mean...? hoặc Could you explain what you mean by...? Sau khi hiểu hai phía, đề xuất thỏa hiệp bằng How about...? hoặc Could we agree to...?',
      'Một phản hồi tốt vừa thể hiện lập trường vừa giữ cơ hội tiếp tục đối thoại.'
    ].join('\n\n'),
    formulas: [],
    keyPoints: ['Ghi nhận trước khi bất đồng.', 'Hỏi lại khi chưa rõ.', 'Đề xuất giải pháp cụ thể và công bằng.'],
    workedExamples: [
      {
        id: 'eng11-ex-u2-communication',
        title: 'Bất đồng mang tính xây dựng',
        problem: 'A: Teenagers should never use phones at home. B: ___',
        steps: ['Ghi nhận mối lo của A.', 'Nêu bất đồng mềm và một giải pháp thay thế.'],
        answer: 'I understand your concern, but perhaps families could agree on phone-free times instead.'
      }
    ],
    checkpoints: [
      { id: 'eng11-cp-u2-comm-1', question: 'Cách không đồng ý lịch sự nhất là:', options: ['That is nonsense.', 'You are wrong.', 'I see your point, but I have a different view.', 'Stop talking.'], correctAnswer: 'C', explanation: 'Câu này ghi nhận ý kiến trước khi nêu bất đồng.' },
      { id: 'eng11-cp-u2-comm-2', question: 'Câu nào đề xuất thỏa hiệp?', options: ['Do you know him?', 'How about agreeing on a time that works for both of us?', 'You must accept my rule.', 'I refuse to explain.'], correctAnswer: 'B', explanation: 'How about... đưa ra phương án để hai bên cùng xem xét.' }
    ],
    orderIndex: 6,
    reviewStatus: 'source_checked'
  }
];
