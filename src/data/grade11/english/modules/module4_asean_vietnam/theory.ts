import type { TheoryBlock } from '@/data/schema';

const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
export const g11EnglishModule4Theory: TheoryBlock[] = [
  {
    id: 'eng11-theory-u4-pronunciation', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-language'], outcomeIds: ['eng11-out-u4-pronunciation'], questionTypeIds: ['eng11-qt-u4-pronunciation'], sourceIds,
    title: 'Elision of vowels',
    objectives: ['Nhận biết nguyên âm không nhấn có thể bị lược.', 'Không lược âm tùy ý dựa vào mặt chữ.'],
    content: [
      'Elision là hiện tượng một âm không được phát ra trong lời nói tự nhiên. Ở một số từ nhiều âm tiết, nguyên âm yếu ở giữa có thể bị lược, làm cụm phụ âm đứng gần nhau hơn.',
      'Ví dụ thường gặp gồm family, different, history, comfortable và camera trong nhiều cách phát âm chuẩn. Số âm tiết nghe được có thể ít hơn cách người học đoán từ chữ viết.',
      'Elision phụ thuộc từ và cách phát âm được chấp nhận; không phải quy tắc cho phép tùy ý bỏ mọi schwa. Phần web kiểm tra nhận biết, không chấm phát âm trực tiếp.'
    ].join('\n\n'),
    formulas: [], keyPoints: ['Elision thường xảy ra ở âm không nhấn.', 'Học theo phát âm chuẩn của từng từ.', 'Không suy ra chỉ từ chính tả.'],
    workedExamples: [{ id: 'eng11-ex-u4-pron', title: 'Nhận biết số âm tiết', problem: 'Tại sao comfortable thường nghe ít âm tiết hơn cách viết gợi ý?', steps: ['Một nguyên âm giữa không nhấn có thể bị lược.', 'Các phụ âm còn lại được phát âm liền mạch hơn.'], answer: 'Do vowel elision trong lời nói tự nhiên.' }],
    checkpoints: [
      { id: 'eng11-cp-u4-pron-1', question: 'Elision thường tác động đến:', options: ['Âm nhấn chính', 'Nguyên âm không nhấn', 'Mọi phụ âm đầu', 'Dấu câu'], correctAnswer: 'B', explanation: 'Âm yếu, không nhấn dễ bị lược trong lời nói tự nhiên.' },
      { id: 'eng11-cp-u4-pron-2', question: 'Cách học an toàn nhất là:', options: ['Bỏ mọi schwa', 'Đọc mọi chữ cái', 'Đối chiếu phát âm chuẩn của từng từ', 'Tự giảm mọi từ dài'], correctAnswer: 'C', explanation: 'Elision mang tính từ vựng và biến thể phát âm.' }
    ],
    orderIndex: 1, reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u4-vocabulary', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-getting-started', 'eng11-u4-language'], outcomeIds: ['eng11-out-u4-vocabulary'], questionTypeIds: ['eng11-qt-u4-vocabulary'], sourceIds,
    title: 'Vocabulary: ASEAN, regional cooperation and diversity',
    objectives: ['Hiểu khái niệm hợp tác khu vực.', 'Dùng đúng từ loại và collocation.'],
    content: [
      'A member state là quốc gia thành viên. Regional cooperation là hợp tác giữa các quốc gia trong một khu vực và có thể bao gồm giáo dục, môi trường, văn hóa, y tế và kinh tế.',
      'Diversity là sự đa dạng; identity là bản sắc; participant là người tham gia; participation là sự tham gia. Cần phân biệt từ loại khi điền vào câu.',
      'Các cụm trọng tâm gồm promote cooperation, strengthen ties, host a summit, participate in a programme, exchange ideas và preserve cultural identity.'
    ].join('\n\n'),
    formulas: [], keyPoints: ['member state', 'regional cooperation', 'cultural diversity/identity', 'participate in'],
    workedExamples: [{ id: 'eng11-ex-u4-vocab', title: 'Chọn từ loại', problem: 'Youth ___ in regional projects can build practical skills.', steps: ['Vị trí chủ ngữ cần danh từ.', 'Participation là danh từ chỉ sự tham gia.'], answer: 'participation' }],
    checkpoints: [
      { id: 'eng11-cp-u4-vocab-1', question: 'Cụm nào đúng?', options: ['promote cooperation', 'do cooperation', 'take a diversity', 'make a member'], correctAnswer: 'A', explanation: 'Promote cooperation là thúc đẩy hợp tác.' },
      { id: 'eng11-cp-u4-vocab-2', question: 'Participant là:', options: ['Một hoạt động', 'Người tham gia', 'Sự đa dạng', 'Một quốc gia'], correctAnswer: 'B', explanation: 'Participant là danh từ chỉ người.' }
    ],
    orderIndex: 2, reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u4-grammar', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-language'], outcomeIds: ['eng11-out-u4-grammar'], questionTypeIds: ['eng11-qt-u4-grammar'], sourceIds,
    title: 'Gerunds as subjects and objects',
    objectives: ['Dùng gerund phrase làm chủ ngữ.', 'Dùng gerund sau động từ và giới từ phù hợp.'],
    content: [
      'Gerund có dạng V-ing nhưng hoạt động như danh từ. Một gerund phrase có thể làm chủ ngữ và thường đi với động từ số ít: Learning about other cultures broadens our perspective.',
      'Gerund làm tân ngữ sau một số động từ như enjoy, avoid, consider, suggest, practise, finish và mind. Không áp dụng cho mọi động từ; want và decide thường đi với to-infinitive.',
      'Sau giới từ dùng V-ing: interested in joining, responsible for organising, before travelling. To trong look forward to là giới từ nên theo sau là V-ing.'
    ].join('\n\n'),
    formulas: [
      { id: 'eng11-form-u4-gerund-subject', label: 'Gerund phrase as subject', expression: 'V\\text{-}ing\\ phrase + singular\\ verb', variables: [{ symbol: 'V-ing phrase', meaning: 'Cụm danh động từ làm chủ ngữ' }], conditions: ['Cụm gerund được xem như một hoạt động/ý niệm số ít'] },
      { id: 'eng11-form-u4-gerund-object', label: 'Gerund after verb/preposition', expression: 'verb/preposition + V\\text{-}ing', variables: [{ symbol: 'V-ing', meaning: 'Danh động từ làm tân ngữ' }], conditions: ['Động từ đứng trước phải thuộc nhóm nhận gerund hoặc có giới từ'] }
    ],
    keyPoints: ['Gerund phrase làm chủ ngữ → verb số ít.', 'enjoy/avoid/suggest + V-ing.', 'preposition + V-ing.'],
    workedExamples: [
      { id: 'eng11-ex-u4-grammar-1', title: 'Gerund làm chủ ngữ', problem: '___ in an exchange programme helps students grow.', steps: ['Cần một hoạt động làm chủ ngữ.', 'Dùng Participating; helps ở số ít.'], answer: 'Participating' },
      { id: 'eng11-ex-u4-grammar-2', title: 'Sau giới từ', problem: 'She is interested in ___ more about ASEAN.', steps: ['In là giới từ.', 'Sau giới từ dùng V-ing.'], answer: 'learning' }
    ],
    checkpoints: [
      { id: 'eng11-cp-u4-grammar-1', question: '___ languages takes time.', options: ['Learn', 'Learning', 'To learning', 'Learned'], correctAnswer: 'B', explanation: 'Learning là gerund phrase làm chủ ngữ.' },
      { id: 'eng11-cp-u4-grammar-2', question: 'They enjoy ___ ideas.', options: ['exchange', 'to exchanging', 'exchanging', 'exchanged'], correctAnswer: 'C', explanation: 'Enjoy đi với V-ing.' },
      { id: 'eng11-cp-u4-grammar-3', question: 'We look forward to ___ you.', options: ['meet', 'meeting', 'met', 'be meet'], correctAnswer: 'B', explanation: 'To ở đây là giới từ trong look forward to.' }
    ],
    orderIndex: 3, reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u4-reading', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-reading'], outcomeIds: ['eng11-out-u4-reading'], questionTypeIds: ['eng11-qt-u4-reading'], sourceIds,
    title: 'Reading regional cooperation and participation',
    objectives: ['Nhận diện mục tiêu và cơ chế hợp tác.', 'Đánh giá khả năng tiếp cận và phân phối lợi ích.'],
    content: [
      'Văn bản về hợp tác khu vực thường phân biệt mục tiêu chung với hoạt động cụ thể. Hãy tìm ai tham gia, mỗi bên đóng góp gì và cơ chế nào tạo ra kết quả.',
      'Để đánh giá công bằng, chú ý điều kiện tham gia như ngôn ngữ, chi phí, thời gian, hạ tầng và khả năng đại diện. “Mở cho mọi người” chưa chắc đồng nghĩa mọi người có thể tiếp cận.',
      'Câu suy luận phải dựa vào chi tiết thiết kế hoặc kết quả, không dựa vào giả định rằng mọi chương trình quốc tế đều tự động thành công.'
    ].join('\n\n'),
    formulas: [], keyPoints: ['Goal khác activity và outcome.', 'Xác định các bên và đóng góp.', 'Kiểm tra rào cản tiếp cận.'],
    workedExamples: [{ id: 'eng11-ex-u4-read', title: 'Mục tiêu và bằng chứng', problem: 'Một chương trình tuyên bố tăng trao đổi nhưng không ghi nhận ai tham gia. Có thể đánh giá tính bao trùm không?', steps: ['Mục tiêu không phải bằng chứng.', 'Thiếu dữ liệu về người tham gia và rào cản.'], answer: 'Chưa thể đánh giá tính bao trùm.' }],
    checkpoints: [
      { id: 'eng11-cp-u4-read-1', question: 'Chi tiết nào phản ánh khả năng tiếp cận?', options: ['Màu logo', 'Hỗ trợ chi phí và ngôn ngữ', 'Tên phòng họp', 'Độ dài tiêu đề'], correctAnswer: 'B', explanation: 'Chi phí và ngôn ngữ là rào cản thực tế.' },
      { id: 'eng11-cp-u4-read-2', question: 'Outcome là:', options: ['Kết quả quan sát được', 'Tên chương trình', 'Khẩu hiệu', 'Danh sách ý tưởng chưa làm'], correctAnswer: 'A', explanation: 'Outcome là thay đổi hoặc kết quả sau hoạt động.' }
    ],
    orderIndex: 4, reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u4-writing', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-writing'], outcomeIds: ['eng11-out-u4-writing'], questionTypeIds: ['eng11-qt-u4-writing'], sourceIds,
    title: 'Writing indirectly: notices, invitations and programme descriptions',
    objectives: ['Tổ chức thông tin theo nhu cầu người đọc.', 'Viết lời kêu gọi hành động rõ ràng.'],
    content: [
      'Thông báo cần trả lời: hoạt động gì, dành cho ai, khi nào, ở đâu/cách nào, mục đích gì và đăng ký ra sao. Thông tin quan trọng phải xuất hiện trước chi tiết phụ.',
      'Thư hoặc lời mời nên có lý do liên hệ, thông tin thiết yếu và yêu cầu phản hồi. Giọng điệu phụ thuộc quan hệ giữa người gửi và người nhận.',
      'Khi mô tả chương trình, tránh khẳng định kết quả chưa có bằng chứng; dùng aims to, is designed to hoặc may help cho mục tiêu dự kiến.'
    ].join('\n\n'),
    formulas: [], keyPoints: ['Purpose → eligibility → logistics → action.', 'Giọng điệu phù hợp người đọc.', 'Phân biệt mục tiêu với kết quả.'],
    workedExamples: [{ id: 'eng11-ex-u4-write', title: 'Sắp xếp thông báo', problem: 'Nên đặt deadline trước hay sau khi giới thiệu hoạt động?', steps: ['Người đọc cần biết hoạt động và đối tượng trước.', 'Deadline và cách đăng ký theo sau thông tin chính.'], answer: 'Giới thiệu hoạt động trước, sau đó nêu deadline/cách đăng ký.' }],
    checkpoints: [
      { id: 'eng11-cp-u4-write-1', question: 'Thông báo thiếu gì nếu chỉ có tên sự kiện?', options: ['Từ dài', 'Thông tin thời gian và cách tham gia', 'Tính từ', 'Một câu đùa'], correctAnswer: 'B', explanation: 'Người đọc cần logistics và hành động.' },
      { id: 'eng11-cp-u4-write-2', question: 'Cụm nào phù hợp khi nói về mục tiêu chưa được kiểm chứng?', options: ['has certainly solved', 'always guarantees', 'aims to improve', 'proved everything'], correctAnswer: 'C', explanation: 'Aims to mô tả mục tiêu mà không giả định kết quả.' }
    ],
    orderIndex: 5, reviewStatus: 'source_checked'
  },
  {
    id: 'eng11-theory-u4-communication', courseId: 'grade11:english', moduleId: 'eng11-m4',
    lessonIds: ['eng11-u4-communication-culture'], outcomeIds: ['eng11-out-u4-communication'], questionTypeIds: ['eng11-qt-u4-communication'], sourceIds,
    title: 'Inviting, requesting information and discussing culture respectfully',
    objectives: ['Mời và hỏi thông tin lịch sự.', 'Tránh định kiến khi nói về văn hóa.'],
    content: [
      'Dùng Would you like to...?, We’d be delighted if you could... cho lời mời; Could you tell me...? hoặc I’d like to know... cho yêu cầu thông tin.',
      'Khi nói về văn hóa, tránh everyone, always và never nếu không có bằng chứng. Có thể dùng many people, in some contexts hoặc based on my experience.',
      'Nếu chưa rõ một thực hành, hãy hỏi người tham gia giải thích thay vì đoán ý nghĩa dựa trên định kiến.'
    ].join('\n\n'),
    formulas: [], keyPoints: ['Would you like to...?', 'Could you tell me...?', 'Dùng ngôn ngữ thận trọng và hỏi trải nghiệm cụ thể.'],
    workedExamples: [{ id: 'eng11-ex-u4-comm', title: 'Hỏi về một thực hành văn hóa', problem: 'Thay câu “Why do all people there do that?” bằng câu lịch sự hơn.', steps: ['Bỏ khái quát all people.', 'Hỏi ý nghĩa trong ngữ cảnh cụ thể.'], answer: 'Could you explain what this practice means in your community?' }],
    checkpoints: [
      { id: 'eng11-cp-u4-comm-1', question: 'Lời mời lịch sự là:', options: ['Join now.', 'Would you like to join us?', 'You must attend.', 'Attendance is you.'], correctAnswer: 'B', explanation: 'Would you like to...? là cấu trúc mời lịch sự.' },
      { id: 'eng11-cp-u4-comm-2', question: 'Câu nào tránh định kiến?', options: ['Everyone in that country is the same.', 'They always behave like that.', 'Could you share your own experience?', 'No explanation is needed.'], correctAnswer: 'C', explanation: 'Câu hỏi tập trung vào trải nghiệm cụ thể thay vì khái quát.' }
    ],
    orderIndex: 6, reviewStatus: 'source_checked'
  }
];
