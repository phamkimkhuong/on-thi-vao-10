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
  }
];
