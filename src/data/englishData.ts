import { Topic, QuestionType, Question, Solution } from '../types';

export const englishTopics: Topic[] = [
  { id: 'eng-t1', subjectId: 'english', name: 'Ngữ âm', slug: 'ngu-am', orderIndex: 1, tier: 1 },
  { id: 'eng-t2', subjectId: 'english', name: 'Từ vựng & Ngữ pháp', slug: 'tu-vung-va-ngu-phap', orderIndex: 2, tier: 2 },
  { id: 'eng-t3', subjectId: 'english', name: 'Đọc hiểu', slug: 'doc-hieu', orderIndex: 3, tier: 3 },
  { id: 'eng-t4', subjectId: 'english', name: 'Viết & Biến đổi câu', slug: 'viet-va-bien-doi-cau', orderIndex: 4, tier: 3 }
];

export const englishQuestionTypes: QuestionType[] = [
  // Topic 1
  {
    id: 'eng-qt1',
    topicId: 'eng-t1',
    name: 'Phát âm đuôi -s/-es',
    slug: 'phat-am-duoi-s-es',
    description: 'Quy tắc phát âm đuôi danh từ số nhiều hoặc động từ chia ngôi thứ ba số ít, xuất hiện phổ biến trong phần ngữ âm trắc nghiệm.',
    recognitionSigns: [
      'Câu hỏi chọn từ có phần gạch chân phát âm khác các từ còn lại',
      'Cả 4 từ đều tận cùng bằng đuôi -s hoặc -es'
    ],
    solvingSteps: [
      'Xác định âm tận cùng của từ gốc trước khi thêm -s/-es:',
      '- Nhóm 1: Phát âm là /ɪz/ khi từ gốc tận cùng bằng các âm rít: /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ (mẹo nhớ: s, x, z, ch, sh, ge/ce)',
      '- Nhóm 2: Phát âm là /s/ khi từ gốc tận cùng bằng các âm vô thanh: /p/, /t/, /k/, /f/, /θ/ (mẹo nhớ: Thảo Phải Kính Phật Tổ)',
      '- Nhóm 3: Phát âm là /z/ cho các trường hợp còn lại (âm hữu thanh và nguyên âm)',
      'Phân loại 4 từ trong đề bài vào 3 nhóm trên để tìm ra từ khác biệt'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa âm tận cùng trong chữ viết và âm thực tế trong phát âm (ví dụ: từ "laugh" kết thúc bằng "gh" nhưng phát âm là /f/, do đó phát âm đuôi là /s/ chứ không phải /z/)',
      'Quên mất quy tắc phát âm đuôi -es sau các đuôi đặc biệt như "ce", "se", "ge"'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng-qt2',
    topicId: 'eng-t1',
    name: 'Phát âm đuôi -ed',
    slug: 'phat-am-duoi-ed',
    description: 'Quy tắc phát âm đuôi động từ quá khứ hoặc phân từ hai, là câu hỏi kinh điển luôn có trong đề thi tuyển sinh.',
    recognitionSigns: [
      'Câu hỏi chọn từ gạch chân phát âm khác',
      'Cả 4 từ đều tận cùng bằng đuôi -ed'
    ],
    solvingSteps: [
      'Xác định âm tận cùng của động từ gốc trước khi thêm -ed:',
      '- Nhóm 1: Phát âm là /ɪd/ khi từ gốc tận cùng bằng âm /t/ hoặc /d/ (mẹo nhớ: Tiền Đô)',
      '- Nhóm 2: Phát âm là /t/ khi từ gốc tận cùng bằng các âm vô thanh: /p/, /k/, /f/, /s/, /ʃ/, /tʃ/ (mẹo nhớ: Sáng Sớm Chạy Phố Không Phanh)',
      '- Nhóm 3: Phát âm là /d/ cho các trường hợp còn lại (âm hữu thanh)',
      'Phân loại 4 từ và chọn đáp án khác biệt nhất'
    ],
    commonMistakes: [
      'Bị lừa bởi một số tính từ tận cùng bằng -ed phát âm ngoại lệ là /ɪd/ như: decided, naked, wicked, beloved, sacred, hatred',
      'Nhầm lẫn âm vô thanh và hữu thanh dẫn đến phân loại sai'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  // Topic 2
  {
    id: 'eng-qt3',
    topicId: 'eng-t2',
    name: 'Câu bị động (Passive Voice)',
    slug: 'cau-bi-dong',
    description: 'Cấu trúc nhấn mạnh hành động được thực hiện lên chủ ngữ, biến đổi từ câu chủ động tương ứng theo các thì ngữ pháp.',
    recognitionSigns: [
      'Chủ ngữ của câu là vật hoặc người chịu tác động của hành động',
      'Phía sau chỗ trống thường có từ "by" + tân ngữ chỉ tác nhân, hoặc không có tân ngữ trực tiếp theo sau động từ chính',
      'Đề bài yêu cầu biến đổi câu chủ động sang bị động hoặc ngược lại'
    ],
    solvingSteps: [
      'Xác định thì của động từ trong câu chủ động',
      'Xác định tân ngữ của câu chủ động để đưa lên làm chủ ngữ câu bị động',
      'Áp dụng cấu trúc bị động tổng quát: S + be + V3/ed + (by O)',
      'Chia động từ "to be" chính xác theo thì của câu gốc và hòa hợp với chủ ngữ mới (số ít/số nhiều)',
      'Động từ chính chuyển sang dạng phân từ hai V3 (Past Participle)'
    ],
    commonMistakes: [
      'Chia sai động từ "to be" do nhầm thì hoặc không hòa hợp với chủ ngữ mới số nhiều/số ít',
      'Quên không bỏ các đại từ bất định như "someone, people, they" khi chuyển sang "by..."',
      'Viết sai dạng phân từ hai của động từ bất quy tắc'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng-qt4',
    topicId: 'eng-t2',
    name: 'Câu điều kiện (Conditional Sentences)',
    slug: 'cau-dieu-kien',
    description: 'Cấu trúc diễn tả một giả thiết về một sự việc và kết quả tương ứng, thường thi loại 1 và loại 2 trong kỳ thi vào 10.',
    recognitionSigns: [
      'Câu chứa từ liên kết "If" hoặc "Unless" (If... not)',
      'Đề bài yêu cầu chia động từ của một trong hai mệnh đề (mệnh đề If hoặc mệnh đề chính)',
      'Đề bài yêu cầu viết lại câu sử dụng If/Unless thay cho "because", "so", "or"'
    ],
    solvingSteps: [
      'Phân biệt loại câu điều kiện cần sử dụng:',
      '- Loại 1: Diễn tả sự việc có thật/có thể xảy ra ở hiện tại hoặc tương lai. Cấu trúc: If + S + V(hiện tại đơn), S + will/can/must + V(nguyên thể)',
      '- Loại 2: Diễn tả sự việc không có thật/không thể xảy ra ở hiện tại. Cấu trúc: If + S + V2/ed (were cho mọi ngôi), S + would/could + V(nguyên thể)',
      'Chia động từ chính xác ở mệnh đề còn thiếu hoặc biến đổi viết lại câu phù hợp',
      'Lưu ý: "Unless" = "If... not", khi đổi cần đổi thể khẳng định/phủ định tương ứng'
    ],
    commonMistakes: [
      'Dùng sai loại điều kiện (ví dụ: thực tế ở hiện tại không có thật nhưng lại viết điều kiện loại 1)',
      'Dùng "was" thay vì "were" cho các ngôi số ít trong mệnh đề If của câu điều kiện loại 2 (mặc dù văn nói chấp nhận nhưng đề thi chuẩn luôn yêu cầu "were")',
      'Quên không đổi thể khẳng định/phủ định khi viết lại câu giữa "If not" và "Unless"'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  // Topic 4
  {
    id: 'eng-qt5',
    topicId: 'eng-t4',
    name: 'Viết lại câu với Mệnh đề quan hệ',
    slug: 'viet-lai-cau-menh-de-quan-he',
    description: 'Kết hợp hai câu đơn thành một câu phức sử dụng đại từ quan hệ (who, whom, which, that, whose) hoặc trạng từ quan hệ (where, when, why).',
    recognitionSigns: [
      'Đề bài cho hai câu đơn và yêu cầu nối lại thành một câu sử dụng đại từ thích hợp',
      'Chỗ trống trong câu trắc nghiệm nằm trước một mệnh đề giải thích cho danh từ đứng trước'
    ],
    solvingSteps: [
      'Tìm danh từ chung lặp lại xuất hiện ở cả hai câu đơn',
      'Xác định vai trò của danh từ lặp lại trong câu thứ hai để chọn đại từ quan hệ phù hợp:',
      '- Chỉ người, làm chủ ngữ: dùng **who** / **that**',
      '- Chỉ người, làm tân ngữ: dùng **whom** / **who** / **that**',
      '- Chỉ vật, làm chủ ngữ/tân ngữ: dùng **which** / **that**',
      '- Chỉ sở hữu: dùng **whose** + danh từ',
      '- Chỉ địa điểm: dùng **where** (không dùng sau giới từ)',
      'Viết mệnh đề quan hệ ngay sau danh từ nó bổ nghĩa ở câu thứ nhất'
    ],
    commonMistakes: [
      'Viết mệnh đề quan hệ sai vị trí (phải viết ngay sau danh từ đứng trước ở câu thứ nhất chứ không phải cuối câu)',
      'Vẫn giữ lại đại từ nhân xưng lặp lại ở câu thứ hai (ví dụ: "This is the book which I bought **it** yesterday" - thừa từ "it")',
      'Dùng "that" trong mệnh đề quan hệ có dấu phẩy (mệnh đề không xác định) hoặc sau giới từ'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng-qt6',
    topicId: 'eng-t2',
    name: 'Trắc nghiệm Ngữ pháp & Từ vựng',
    slug: 'trac-nghiem-ngu-phap-va-tu-vung',
    description: 'Chuyên đề ôn luyện 8 câu hỏi trắc nghiệm khách quan (chiếm 2 điểm) luôn đứng đầu cấu trúc đề thi Tiếng Anh tuyển sinh vào 10 Bình Định. Chuyên đề tập trung giúp học sinh củng cố và ăn chắc điểm các mảng ngữ pháp và từ vựng nền tảng bao gồm thì động từ, dạng động từ (to V/V-ing/V0), giới từ & phrasal verbs thông dụng, câu so sánh, và vị trí của danh - động - tính - trạng trong câu.',
    recognitionSigns: [
      'Đề bài cho một câu đơn có chứa một chỗ trống cần điền.',
      'Cung cấp 4 lựa chọn trả lời dạng trắc nghiệm A, B, C, D.',
      'Câu chứa các dấu hiệu thời gian đặc trưng, động từ thái độ hoặc các liên từ so sánh.'
    ],
    solvingSteps: [
      'Bước 1: Quét nhanh câu hỏi để tìm các "tín hiệu trực quan" (ví dụ: trạng từ chỉ thời gian như yesterday, ago, since...; động từ đứng trước chỗ trống như enjoy, decide, should...; hoặc các từ so sánh như than, as, the...).',
      'Bước 2: Xác định mảng kiến thức tương ứng với tín hiệu đó (ví dụ: thấy "three years ago" -> Quá khứ đơn; thấy "interested" -> tìm giới từ "in"; thấy "than" -> tìm So sánh hơn).',
      'Bước 3: Thực hiện loại trừ các phương án sai cấu trúc ngữ pháp (ví dụ: chia động từ sai ngôi, dùng sai dạng từ loại đứng trước/sau danh từ).',
      'Bước 4: Chọn đáp án đúng nhất và điền vào phiếu trả lời.'
    ],
    commonMistakes: [
      'Lỗi bỏ sót từ tín hiệu ở cuối câu dẫn đến chia sai thì động từ.',
      'Dịch nghĩa cảm tính giới từ từ tiếng Việt sang dẫn đến dùng sai giới từ cố định (ví dụ chọn interested with/at thay vì interested in).',
      'Không phân biệt được vị trí của tính từ và trạng từ trong mối quan hệ với danh từ và động từ thường.',
      'Chia động từ không hòa hợp với chủ ngữ số ít/số nhiều ở thì hiện tại đơn.'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q5',
    subTypes: [
      {
        name: 'Dạng 1: Thì động từ cơ bản (Hiện tại đơn, Quá khứ đơn, Hiện tại tiếp diễn, Hiện tại hoàn thành, Tương lai đơn)',
        example: 'He has lived in Binh Dinh since he was a child.',
        note: 'Căn cứ vào tín hiệu "since + mệnh đề quá khứ đơn" để chọn thì Hiện tại hoàn thành.'
      },
      {
        name: 'Dạng 2: Cấu trúc động từ (to V, V-ing, V0)',
        example: 'We enjoy playing football after school.',
        note: 'Nhìn động từ "enjoy" đứng trước chỗ trống để áp dụng công thức enjoy + V-ing.'
      },
      {
        name: 'Dạng 3: Giới từ & Phrasal verbs cơ bản',
        example: 'She is interested in learning English.',
        note: 'Ghi nhớ cụm giới từ cố định: be interested in (thích thú/quan tâm cái gì).'
      },
      {
        name: 'Dạng 4: So sánh hơn, so sánh nhất và so sánh bằng',
        example: 'This exam is more difficult than the last one.',
        note: 'Dựa vào từ khóa "than" để xác định cấu trúc so sánh hơn của tính từ.'
      },
      {
        name: 'Dạng 5: Vị trí của các loại từ (Danh - Động - Tính - Trạng)',
        example: 'My uncle is a careful driver.',
        note: 'Nhận diện vị trí tính từ đứng trước bổ nghĩa cho danh từ: a + Adj + Noun.'
      }
    ]
  }
];

export const englishQuestions: Question[] = [
  // Phát âm đuôi -s/-es
  {
    id: 'eng-q1',
    subjectId: 'english',
    topicId: 'eng-t1',
    questionTypeId: 'eng-qt1',
    content: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: ['A. cups', 'B. books', 'C. bats', 'D. bags'],
    difficulty: 'easy',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2024,
    correctAnswer: 'D',
    validatorType: 'choice'
  },
  // Phát âm đuôi -ed
  {
    id: 'eng-q2',
    subjectId: 'english',
    topicId: 'eng-t1',
    questionTypeId: 'eng-qt2',
    content: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: ['A. washed', 'B. worked', 'C. played', 'D. watched'],
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  // Câu bị động
  {
    id: 'eng-q3',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt3',
    content: 'They built a new bridge across the river last year.\n\n-> Choose the correct passive sentence:',
    options: [
      'A. A new bridge is built across the river last year.',
      'B. A new bridge was built across the river last year.',
      'C. A new bridge has been built across the river last year.',
      'D. A new bridge were built across the river last year.'
    ],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  // Câu điều kiện
  {
    id: 'eng-q4',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt4',
    content: 'He doesn\'t have enough money, so he cannot buy that smartphone.\n\n-> Choose the correct conditional sentence:',
    options: [
      'A. If he has enough money, he can buy that smartphone.',
      'B. If he had enough money, he can buy that smartphone.',
      'C. If he had enough money, he could buy that smartphone.',
      'D. If he didn\'t have enough money, he couldn\'t buy that smartphone.'
    ],
    difficulty: 'medium',
    sourceType: 'official_exam',
    province: 'Hà Nội',
    year: 2023,
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  // Trắc nghiệm Ngữ pháp & Từ vựng tổng hợp
  {
    id: 'eng-q5',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'He ________ in Binh Dinh since he was a child.',
    options: [
      'A. lives',
      'B. lived',
      'C. has lived',
      'D. is living'
    ],
    difficulty: 'easy',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2025,
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'eng-q6',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'My sister ________ high school three years ago.',
    options: [
      'A. finishes',
      'B. finished',
      'C. has finished',
      'D. was finishing'
    ],
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'eng-q7',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'We really enjoy ________ football with our friends at the weekend.',
    options: [
      'A. play',
      'B. playing',
      'C. to play',
      'D. played'
    ],
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'eng-q8',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'They decided ________ a new laptop for their son\'s online study.',
    options: [
      'A. buy',
      'B. buying',
      'C. to buy',
      'D. bought'
    ],
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'eng-q9',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'She is very interested ________ learning English because she wants to study abroad.',
    options: [
      'A. in',
      'B. at',
      'C. on',
      'D. for'
    ],
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'A',
    validatorType: 'choice'
  },
  {
    id: 'eng-q10',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Remember to ________ the lights before you leave the classroom to save energy.',
    options: [
      'A. turn on',
      'B. turn off',
      'C. look after',
      'D. take part in'
    ],
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'eng-q11',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'This English exam is ________ than the one we took last month.',
    options: [
      'A. difficult',
      'B. more difficult',
      'C. most difficult',
      'D. the most difficult'
    ],
    difficulty: 'easy',
    sourceType: 'official_exam',
    province: 'Bình Định',
    year: 2025,
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'eng-q12',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'An is the ________ student in my class. He always gets good marks in English.',
    options: [
      'A. good',
      'B. better',
      'C. best',
      'D. well'
    ],
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'C',
    validatorType: 'choice'
  },
  {
    id: 'eng-q13',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'My uncle is a ________ driver. He never drives fast or causes accidents.',
    options: [
      'A. care',
      'B. careful',
      'C. carefully',
      'D. careless'
    ],
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    validatorType: 'choice'
  },
  {
    id: 'eng-q14',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'If you want to pass the entrance exam to high school, you must study ________.',
    options: [
      'A. hard',
      'B. hardly',
      'C. good',
      'D. careful'
    ],
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'A',
    validatorType: 'choice'
  }
];

export const englishSolutions: Solution[] = [
  {
    id: 'eng-s1',
    questionId: 'eng-q1',
    recognition: 'Đề bài hỏi phát âm đuôi -s của danh từ số nhiều. Ta cần xác định phụ âm cuối của từ gốc trước khi thêm -s.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định phụ âm cuối của từ "cup"',
        explanation: 'Từ gốc "cup" kết thúc bằng âm /p/ (âm vô thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /s/.',
        result: 'cups -> /kʌps/'
      },
      {
        order: 2,
        title: 'Xác định phụ âm cuối của từ "book"',
        explanation: 'Từ gốc "book" kết thúc bằng âm /k/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.',
        result: 'books -> /bʊks/'
      },
      {
        order: 3,
        title: 'Xác định phụ âm cuối của từ "bat"',
        explanation: 'Từ gốc "bat" kết thúc bằng âm /t/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.',
        result: 'bats -> /bæts/'
      },
      {
        order: 4,
        title: 'Xác định phụ âm cuối của từ "bag" và so sánh',
        explanation: 'Từ gốc "bag" kết thúc bằng âm /ɡ/ (âm hữu thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /z/. So sánh 4 từ, "bags" phát âm là /z/ trong khi 3 từ còn lại phát âm là /s/.',
        result: 'bags -> /bæɡz/ (Đáp án khác biệt)'
      }
    ],
    finalAnswer: 'D. bags',
    commonMistakes: [
      'Đọc lướt nhanh dẫn đến nhầm âm /g/ là âm vô thanh',
      'Quên quy tắc nhớ nhanh "Thảo Phải Kính Phật Tổ" đại diện cho /θ/, /p/, /k/, /f/, /t/'
    ],
    reviewSuggestions: [
      'Ôn tập quy tắc phát âm đuôi -s/-es',
      'Học phân biệt âm vô thanh và hữu thanh trong bảng phiên âm quốc tế IPA'
    ]
  },
  {
    id: 'eng-s2',
    questionId: 'eng-q2',
    recognition: 'Đề bài hỏi về quy tắc phát âm đuôi -ed của động từ quá khứ. Ta cần xem xét âm cuối của từ gốc trước khi thêm -ed.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xét phát âm từ gốc của "wash"',
        explanation: 'Từ gốc "wash" kết thúc bằng âm /ʃ/. Đây là âm vô thanh rít, do đó đuôi -ed sẽ được phát âm là /t/.',
        result: 'washed -> /wɒʃt/'
      },
      {
        order: 2,
        title: 'Xét phát âm từ gốc của "work"',
        explanation: 'Từ gốc "work" kết thúc bằng âm /k/ (âm vô thanh). Do đó, đuôi -ed sẽ được phát âm là /t/.',
        result: 'worked -> /wɜːkt/'
      },
      {
        order: 3,
        title: 'Xét phát âm từ gốc của "play"',
        explanation: 'Từ gốc "play" kết thúc bằng nguyên âm /eɪ/ (âm hữu thanh). Theo quy tắc, đuôi -ed sẽ được phát âm là /d/.',
        result: 'played -> /pleɪd/'
      },
      {
        order: 4,
        title: 'Xét phát âm từ gốc của "watch" và chọn đáp án',
        explanation: 'Từ gốc "watch" kết thúc bằng âm /tʃ/ (âm vô thanh). Đuôi -ed phát âm là /t/. Vậy chỉ có "played" có đuôi phát âm là /d/, 3 đáp án còn lại phát âm là /t/.',
        result: 'played -> /pleɪd/ (Đáp án khác biệt là C)'
      }
    ],
    finalAnswer: 'C. played',
    commonMistakes: [
      'Nhầm lẫn phát âm của "watched" và "washed" do chữ viết có nét tương đồng'
    ],
    reviewSuggestions: [
      'Ôn tập quy tắc phát âm đuôi -ed',
      'Đọc to các động từ quá khứ để rèn luyện trí nhớ âm thanh'
    ]
  },
  {
    id: 'eng-s3',
    questionId: 'eng-q3',
    recognition: 'Câu chủ động có cấu trúc: S (They) + V (built) + O (a new bridge) + Adv (across the river last year). Động từ "built" ở thì Quá khứ đơn (Simple Past), nên khi đổi sang bị động ta dùng was/were + V3.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đưa tân ngữ lên làm chủ ngữ câu bị động',
        explanation: 'Tân ngữ "a new bridge" (số ít) được đưa lên làm chủ ngữ mới.',
        result: 'Chủ ngữ mới: A new bridge (số ít)'
      },
      {
        order: 2,
        title: 'Chọn động từ to be thích hợp ở quá khứ đơn',
        explanation: 'Vì câu gốc ở quá khứ đơn và chủ ngữ mới "a new bridge" là danh từ số ít, ta sử dụng "was".',
        result: 'to be -> was'
      },
      {
        order: 3,
        title: 'Đổi động từ chính sang dạng phân từ hai V3',
        explanation: 'Động từ "build" bất quy tắc chuyển sang quá khứ và phân từ hai đều là "built".',
        result: 'V3 -> built'
      },
      {
        order: 4,
        title: 'Lắp ráp câu hoàn chỉnh và loại trừ đáp án',
        explanation: 'Ta được câu bị động: "A new bridge was built across the river last year." Đối chiếu với các đáp án:\n- A sai vì dùng "is" (thì hiện tại)\n- C sai vì dùng "has been" (thì hiện tại hoàn thành)\n- D sai vì dùng "were" (sai sự hòa hợp với danh từ số ít)\n- B là câu đúng hoàn toàn.',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Dùng nhầm động từ "were" cho danh từ số ít "a new bridge"',
      'Nhầm lẫn thì của câu gốc từ quá khứ sang hiện tại đơn dẫn đến chọn A'
    ],
    reviewSuggestions: [
      'Ôn tập các thì ngữ pháp cơ bản trong Tiếng Anh',
      'Luyện tập chuyển đổi câu bị động với nhiều thì khác nhau'
    ]
  },
  {
    id: 'eng-s4',
    questionId: 'eng-q4',
    recognition: 'Câu gốc chỉ thực tế ở hiện tại: "Anh ấy không có đủ tiền (hiện tại đơn phủ định), vì vậy anh ấy không thể mua điện thoại (hiện tại đơn phủ định)". Để chuyển sang câu điều kiện, ta phải dùng câu điều kiện loại 2 (trái với thực tế ở hiện tại) và chuyển thể khẳng định/phủ định tương ứng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định loại câu điều kiện',
        explanation: 'Sự thật ở hiện tại không có tiền và không mua được điện thoại, giả thiết trái thực tế hiện tại yêu cầu câu điều kiện loại 2.',
        result: 'Điều kiện loại 2: If + S + V2/ed (were), S + would/could + V0'
      },
      {
        order: 2,
        title: 'Biến đổi mệnh đề If (giả thiết)',
        explanation: 'Câu gốc phủ định "doesn\'t have" chuyển sang khẳng định quá khứ đơn "had".',
        result: 'If he had enough money,'
      },
      {
        order: 3,
        title: 'Biến đổi mệnh đề chính (kết quả)',
        explanation: 'Câu gốc phủ định "cannot buy" chuyển sang khẳng định "could buy".',
        result: 'he could buy that smartphone.'
      },
      {
        order: 4,
        title: 'Kết hợp câu và loại trừ đáp án',
        explanation: 'Câu hoàn chỉnh: "If he had enough money, he could buy that smartphone." Đối chiếu: A sai loại 1; B dùng "can" ở mệnh đề chính (sai cấu trúc); D giữ nguyên phủ định.',
        result: 'Đáp án đúng là C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Quên không đổi thể khẳng định sang phủ định và ngược lại.',
      'Nhầm lẫn cấu trúc mệnh đề chính loại 2 dùng could/would thành can/will.'
    ],
    reviewSuggestions: [
      'Ghi nhớ cấu trúc điều kiện loại 2 trái ngược thực tế hiện tại.',
      'Ôn lại các biến đổi khẳng định/phủ định giữa câu gốc và câu điều kiện.'
    ]
  },
  {
    id: 'eng-s5',
    questionId: 'eng-q5',
    recognition: 'Nhìn nhanh câu hỏi thấy có trạng từ liên kết "since" đi kèm một mệnh đề chia ở quá khứ đơn ("since he was a child"). Đây là dấu hiệu kinh điển của thì Hiện tại hoàn thành.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm từ khóa tín hiệu thời gian',
        explanation: 'Trạng từ "since" (từ khi) liên kết một mốc thời gian trong quá khứ là dấu hiệu nhận biết của thì Hiện tại hoàn thành.',
        result: 'Tín hiệu: since he was a child'
      },
      {
        order: 2,
        title: 'Áp dụng công thức tương ứng',
        explanation: 'Chủ ngữ "He" (ngôi thứ ba số ít) đi kèm với trợ động từ "has" và động từ chính ở dạng phân từ hai V3/ed ("lived").',
        result: 'Cấu trúc: He + has + lived'
      },
      {
        order: 3,
        title: 'Loại trừ phương án sai',
        explanation: 'A (lives) là Hiện tại đơn; B (lived) là Quá khứ đơn; D (is living) là Hiện tại tiếp diễn.',
        result: 'Đáp án đúng là C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Nhầm lẫn giữa since và for dẫn đến việc chọn sai cách dùng.',
      'Chọn Quá khứ đơn B do thấy mệnh đề was ở sau, nhưng thực tế mệnh đề trước since phải là Hiện tại hoàn thành.'
    ],
    reviewSuggestions: [
      'Học thuộc công thức: S + has/have + V3/ed + since + S + V2/ed.'
    ]
  },
  {
    id: 'eng-s6',
    questionId: 'eng-q6',
    recognition: 'Nhìn nhanh ở cuối câu thấy trạng từ chỉ thời gian "three years ago" (3 năm trước). Đây là dấu hiệu nhận biết đặc trưng của thì Quá khứ đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm từ khóa tín hiệu thời gian',
        explanation: 'Trạng từ "ago" (trước đây) là tín hiệu xác định một hành động đã xảy ra và kết thúc trong quá khứ.',
        result: 'Tín hiệu: ago'
      },
      {
        order: 2,
        title: 'Xác định thì động từ và chia',
        explanation: 'Chia động từ "finish" ở quá khứ đơn bằng cách thêm đuôi -ed ta được "finished".',
        result: 'finished'
      },
      {
        order: 3,
        title: 'Loại trừ đáp án',
        explanation: 'A là Hiện tại đơn; C là Hiện tại hoàn thành; D là Quá khứ tiếp diễn.',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Bỏ sót từ ago ở cuối câu dẫn đến chia nhầm thì hiện tại.',
      'Nhầm lẫn dạng bất quy tắc của động từ (từ finish là động từ có quy tắc, chỉ cần thêm -ed).'
    ],
    reviewSuggestions: [
      'Học thuộc danh sách trạng từ quá khứ đơn: yesterday, ago, last week/month/year.'
    ]
  },
  {
    id: 'eng-s7',
    questionId: 'eng-q7',
    recognition: 'Nhìn trực diện động từ đứng ngay trước chỗ trống là "enjoy" (thích thú). Ta áp dụng ngay cấu trúc động từ đi kèm sau enjoy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ khóa đứng trước chỗ trống',
        explanation: 'Động từ "enjoy" yêu cầu động từ theo sau nó phải ở dạng V-ing.',
        result: 'Công thức: enjoy + V-ing'
      },
      {
        order: 2,
        title: 'Chọn đáp án phù hợp',
        explanation: 'Động từ "play" thêm đuôi -ing thành "playing".',
        result: 'playing'
      },
      {
        order: 3,
        title: 'Loại trừ đáp án',
        explanation: 'A (play) là V0; C (to play) là to V; D (played) là V2/ed.',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn to play (C) do thói quen dịch nghĩa thích "để làm gì". Ghi nhớ enjoy chỉ đi với V-ing.'
    ],
    reviewSuggestions: [
      'Ghi nhớ nhóm từ đi với V-ing thông dụng: enjoy, avoid, dislike, mind, practice, spend time.'
    ]
  },
  {
    id: 'eng-s8',
    questionId: 'eng-q8',
    recognition: 'Nhìn trực diện động từ đứng ngay trước chỗ trống là "decided" (đã quyết định - quá khứ của decide). Ta áp dụng cấu trúc động từ đi kèm sau decide.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ khóa đứng trước chỗ trống',
        explanation: 'Động từ "decide" yêu cầu động từ theo sau nó phải ở dạng to V.',
        result: 'Công thức: decide + to V'
      },
      {
        order: 2,
        title: 'Chọn đáp án phù hợp',
        explanation: 'Động từ "buy" chuyển sang dạng "to buy".',
        result: 'to buy'
      },
      {
        order: 3,
        title: 'Loại trừ các phương án còn lại',
        explanation: 'A (buy) là V0; B (buying) là V-ing; D (bought) là V2/ed.',
        result: 'Đáp án đúng là C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Nhầm lẫn giữa nhóm từ đi kèm to V và V-ing dẫn đến việc chọn buying (B).'
    ],
    reviewSuggestions: [
      'Ghi nhớ nhóm từ đi với to V thông dụng: decide, want, hope, promise, would like.'
    ]
  },
  {
    id: 'eng-s9',
    questionId: 'eng-q9',
    recognition: 'Chỗ trống đứng sau tính từ "interested". Đây là cụm từ chỉ sở thích cố định trong Tiếng Anh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm cụm từ cố định liên kết',
        explanation: 'Tính từ "interested" (quan tâm/thích thú) luôn đi với giới từ "in".',
        result: 'Cấu trúc: be interested in'
      },
      {
        order: 2,
        title: 'Loại trừ các giới từ khác',
        explanation: 'Các giới từ B (at), C (on), D (for) đều không đi với interested trong ngữ cảnh này.',
        result: 'Đáp án đúng là A'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Dịch nghĩa cảm tính sang tiếng Việt thích "với" cái gì nên chọn interested with hoặc interested at.'
    ],
    reviewSuggestions: [
      'Học thuộc các cặp tính từ + giới từ kinh điển lớp 9: good/bad at, interested in, proud of, famous for, different from.'
    ]
  },
  {
    id: 'eng-s10',
    questionId: 'eng-q10',
    recognition: 'Câu kiểm tra phrasal verb của động từ "turn". Cần đọc kỹ ngữ cảnh phía sau: "trước khi rời lớp học" (before you leave) và "để tiết kiệm điện" (to save energy).',
    detailedSteps: [
      {
        order: 1,
        title: 'Dịch ngữ cảnh của câu',
        explanation: 'Để tiết kiệm điện trước khi ra khỏi phòng học, ta cần phải tắt đèn.',
        result: 'Hành động: Tắt đèn'
      },
      {
        order: 2,
        title: 'Tìm phrasal verb tương ứng',
        explanation: 'Ta có cụm "turn off" nghĩa là tắt (thiết bị điện), còn "turn on" là bật.',
        result: 'turn off'
      },
      {
        order: 3,
        title: 'Loại trừ phương án khác',
        explanation: 'A (turn on) trái nghĩa; C (look after) là chăm sóc; D (take part in) là tham gia.',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Không đọc hết câu nên nhầm lẫn giữa bật (turn on) và tắt (turn off).'
    ],
    reviewSuggestions: [
      'Ôn tập các cụm động từ cơ bản sách giáo khoa: turn on/off, look after, look for, go on, give up.'
    ]
  },
  {
    id: 'eng-s11',
    questionId: 'eng-q11',
    recognition: 'Nhìn nhanh câu hỏi, ta phát hiện từ khóa so sánh "than" (hơn) đứng sau chỗ trống. Đây là dấu hiệu của câu so sánh hơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm từ khóa so sánh',
        explanation: 'Từ "than" chỉ ra đây là cấu trúc so sánh hơn giữa đề thi này và đề thi tháng trước.',
        result: 'Tín hiệu: than'
      },
      {
        order: 2,
        title: 'Xác định loại tính từ',
        explanation: 'Tính từ "difficult" (khó) là tính từ dài (3 âm tiết), cấu trúc so sánh hơn của tính từ dài là "more + adj".',
        result: 'Công thức: more difficult than'
      },
      {
        order: 3,
        title: 'Loại trừ các đáp án khác',
        explanation: 'A là tính từ thường; C và D là dạng so sánh nhất.',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn the most difficult (D) do bỏ sót từ than phía sau.',
      'Nhầm lẫn tính từ ngắn và tính từ dài khi thêm đuôi -er.'
    ],
    reviewSuggestions: [
      'Nắm chắc công thức: short adj + er + than / more + long adj + than.'
    ]
  },
  {
    id: 'eng-s12',
    questionId: 'eng-q12',
    recognition: 'Ta thấy mạo từ "the" đứng ngay trước chỗ trống và ngữ cảnh "trong lớp tôi" (in my class). Đây là dấu hiệu của so sánh nhất.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm từ khóa so sánh',
        explanation: 'Mạo từ "the" đứng trước chỗ trống và phạm vi so sánh "in my class" chỉ ra cấu trúc so sánh nhất.',
        result: 'Tín hiệu: the + so sánh nhất'
      },
      {
        order: 2,
        title: 'Chia dạng so sánh nhất của tính từ đặc biệt',
        explanation: 'Tính từ "good" biến đổi đặc biệt ở dạng so sánh nhất là "best" (tốt nhất).',
        result: 'best'
      },
      {
        order: 3,
        title: 'Loại trừ các phương án',
        explanation: 'A (good) là tính từ gốc; B (better) là so sánh hơn; D (well) là trạng từ.',
        result: 'Đáp án đúng là C'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Nhầm lẫn giữa so sánh hơn better và so sánh nhất best.',
      'Nhầm sang trạng từ well khi bổ nghĩa cho danh từ student.'
    ],
    reviewSuggestions: [
      'Ghi nhớ các tính từ biến đổi đặc biệt: good -> better -> best, bad -> worse -> worst, far -> further -> furthest.'
    ]
  },
  {
    id: 'eng-s13',
    questionId: 'eng-q13',
    recognition: 'Chỗ trống đứng sau mạo từ "a" và đứng trước danh từ "driver" (tài xế). Ta cần xác định loại từ phù hợp để điền vào chỗ trống này.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định loại từ cần điền',
        explanation: 'Theo trật tự từ, đứng trước danh từ để bổ nghĩa cho danh từ đó phải là một tính từ.',
        result: 'Công thức: a/an/the + Adj + Noun'
      },
      {
        order: 2,
        title: 'Chọn tính từ phù hợp ngữ cảnh',
        explanation: 'Xét hậu tố từ: "careful" là tính từ (cẩn thận). Phù hợp với nghĩa vế sau "never drives fast" (không lái nhanh).',
        result: 'careful'
      },
      {
        order: 3,
        title: 'Loại trừ các phương án',
        explanation: 'A (care) là danh/động từ; C (carefully) là trạng từ; D (careless) là bất cẩn (trái nghĩa vế sau).',
        result: 'Đáp án đúng là B'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn trạng từ carefully (C) vì nghĩ động từ drive đứng sau, nhưng ở đây driver là danh từ.',
      'Chọn careless (D) do nhầm nghĩa tính từ phản nghĩa với ngữ cảnh cẩn thận.'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy tắc vị trí tính từ: đứng trước danh từ và đứng sau động từ to-be.'
    ]
  },
  {
    id: 'eng-s14',
    questionId: 'eng-q14',
    recognition: 'Chỗ trống đứng sau động từ thường "study" (học tập). Ta cần xác định từ loại phù hợp để bổ nghĩa cho động từ thường này.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định loại từ cần điền',
        explanation: 'Bổ nghĩa cho động từ thường "study" phải là một trạng từ.',
        result: 'Cấu trúc: Verb + Adverb'
      },
      {
        order: 2,
        title: 'Chọn trạng từ và dịch nghĩa từ đặc biệt',
        explanation: 'Từ "hard" vừa là tính từ và trạng từ (chăm chỉ). Trạng từ "hardly" nghĩa là "hầu như không" (sai nghĩa).',
        result: 'hard'
      },
      {
        order: 3,
        title: 'Loại trừ phương án sai',
        explanation: 'B (hardly) sai nghĩa; C (good) là tính từ; D (careful) là tính từ.',
        result: 'Đáp án đúng là A'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Chọn hardly (B) vì nghĩ mọi trạng từ đều phải thêm đuôi -ly (hardly mang nghĩa phủ định gần như không làm gì).',
      'Chọn good (C) do thói quen nói tốt nhưng good là tính từ, trạng từ của nó phải là well.'
    ],
    reviewSuggestions: [
      'Ghi nhớ các trạng từ đặc biệt giữ nguyên dạng tính từ: hard, fast, late, early.'
    ]
  }
];
