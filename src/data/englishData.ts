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
    examFrequency: 'high',
    exampleQuestionId: 'eng-q96'
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
  },
  {
    id: 'eng-qt7',
    topicId: 'eng-t2',
    name: 'Chia dạng từ (Word Form)',
    slug: 'chia-dang-tu-word-form',
    description: 'Dạng bài chia dạng đúng của từ trong ngoặc (danh từ, động từ, tính từ, trạng từ) để hoàn thành câu, xuất hiện phổ biến trong đề thi tuyển sinh vào 10 Bình Định.',
    recognitionSigns: [
      'Câu có từ gợi ý trong ngoặc đơn ở cuối câu (ví dụ: (INVENT), (STUDY)...)',
      'Yêu cầu điền từ thích hợp vào chỗ trống.'
    ],
    solvingSteps: [
      'Xác định loại từ cần điền (danh từ, động từ, tính từ, hay trạng từ) dựa vào vị trí của chỗ trống và các từ xung quanh.',
      'Xét ngữ cảnh và ý nghĩa của câu để xác định từ đó mang nghĩa khẳng định hay phủ định, số ít hay số nhiều.',
      'Biến đổi từ gốc trong ngoặc theo đúng dạng và viết lại chính xác.'
    ],
    commonMistakes: [
      'Xác định sai loại từ cần điền (ví dụ cần tính từ nhưng điền trạng từ).',
      'Quên không chia số nhiều của danh từ (ví dụ viết "invention" thay vì "inventions").',
      'Không đổi sang nghĩa phủ định khi câu yêu cầu (ví dụ viết "pleasant" thay vì "unpleasant").'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q85'
  },
  {
    id: 'eng-qt8',
    topicId: 'eng-t3',
    name: 'Đọc điền từ quảng cáo/thông báo',
    slug: 'doc-dien-tu-quang-cao-thong-bao',
    description: 'Đọc hiểu các văn bản ngắn dạng thông báo, quảng cáo, tin nhắn và chọn từ thích hợp (giới từ, từ loại, liên từ) điền vào chỗ trống.',
    recognitionSigns: [
      'Đề bài cung cấp một bảng thông báo hoặc quảng cáo ngắn kèm theo các chỗ trống được đánh số.',
      'Có các câu hỏi trắc nghiệm A, B, C, D đi kèm.'
    ],
    solvingSteps: [
      'Đọc lướt qua văn bản để nắm nội dung chính và định dạng của văn bản (quảng cáo học tập, thông báo hoạt động xã hội...).',
      'Xem xét kỹ các từ đứng ngay trước và ngay sau chỗ trống để xác định mối liên kết ngữ pháp (ví dụ giới từ đi kèm tính từ, trạng từ chỉ thời gian).',
      'Loại trừ phương án sai và chọn đáp án thích hợp.'
    ],
    commonMistakes: [
      'Dịch nghĩa từng từ một mà không chú ý đến cụm từ cố định (collocation) hoặc giới từ đi kèm.',
      'Nhầm lẫn giới từ chỉ thời gian (như in, on, at).'
    ],
    difficulty: 'medium',
    examFrequency: 'medium',
    exampleQuestionId: 'eng-q90'
  },
  {
    id: 'eng-qt9',
    topicId: 'eng-t3',
    name: 'Đọc hiểu True/False',
    slug: 'doc-hieu-true-false',
    description: 'Đọc một đoạn văn ngắn và xác định các phát biểu cho trước là Đúng (True) hay Sai (False) dựa trên thông tin thực tế trong bài đọc.',
    recognitionSigns: [
      'Đề bài cho một đoạn văn và các câu phát biểu ngắn.',
      'Lựa chọn trả lời dạng trắc nghiệm A. True hoặc B. False.'
    ],
    solvingSteps: [
      'Đọc kỹ câu phát biểu và xác định các từ khóa chính (danh từ riêng, số lượng, thời gian, hành động).',
      'Dò tìm từ khóa hoặc các từ đồng nghĩa trong đoạn văn bài đọc.',
      'Đối chiếu kỹ lưỡng thông tin trong bài đọc với câu phát biểu. Nếu thông tin khớp hoàn toàn chọn True, ngược lại chọn False.'
    ],
    commonMistakes: [
      'Suy luận cảm tính ngoài đời thực thay vì bám sát thông tin trong bài đọc.',
      'Bị bẫy bởi các từ mang tính phủ định ngầm hoặc hạn chế (như only, rarely, never).'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q92'
  },
  {
    id: 'eng-qt10',
    topicId: 'eng-t4',
    name: 'Viết lại câu cùng nghĩa (Although/Because)',
    slug: 'viet-lai-cau-although-because',
    description: 'Biến đổi câu sử dụng các liên từ nhượng bộ (Although/Even though) hoặc nguyên nhân (Because/Because of) sao cho ý nghĩa câu không thay đổi.',
    recognitionSigns: [
      'Đề bài cho câu gốc và từ khóa viết lại trong ngoặc (ví dụ: (ALTHOUGH), (BECAUSE)).',
      'Yêu cầu hoàn thành câu thứ hai bắt đầu bằng từ cho sẵn.'
    ],
    solvingSteps: [
      'Xác định mối quan hệ giữa hai vế trong câu gốc (đối lập hay nguyên nhân - kết quả).',
      'Áp dụng công thức biến đổi tương ứng giữa liên từ nối mệnh đề và cụm danh từ (ví dụ: Because + clause <-> Because of + N-phrase; Although + clause <-> In spite of + N-phrase).',
      'Viết lại câu mới và kiểm tra kỹ thì của động từ, bỏ các liên từ cũ bị thừa (như but, so).'
    ],
    commonMistakes: [
      'Vẫn giữ lại từ "but" khi dùng "Although", hoặc giữ lại "so" khi dùng "Because" (lỗi cực kỳ phổ biến).',
      'Không chuyển đổi đúng từ mệnh đề sang cụm danh từ/V-ing khi sử dụng because of / in spite of.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q94'
  },
  {
    id: 'eng-qt11',
    topicId: 'eng-t2',
    name: 'Tìm và sửa lỗi sai',
    slug: 'tim-va-sua-loi-sai',
    description: 'Phát hiện lỗi sai ngữ pháp hoặc từ vựng trong câu và sửa lại cho đúng, rèn luyện tư duy phân tích ngữ pháp sâu.',
    recognitionSigns: [
      'Đề bài cho một câu có lỗi sai ngữ pháp.',
      'Yêu cầu chỉ ra lỗi sai và viết lại từ đúng để thay thế.'
    ],
    solvingSteps: [
      'Đọc toàn bộ câu để hiểu nghĩa và xác định thì chủ đạo của câu.',
      'Kiểm tra sự hòa hợp chủ-vị, cách chia thì động từ, dạng động từ (V-ing/to-V), vị trí từ loại, giới từ, liên từ.',
      'Xác định từ viết sai, tìm từ đúng thay thế và điền vào câu trả lời.'
    ],
    commonMistakes: [
      'Chỉ ra đúng từ sai nhưng sửa lại thành một từ khác vẫn sai ngữ pháp.',
      'Sửa các từ vốn đã đúng cấu trúc ngữ pháp do phán đoán vội vàng.'
    ],
    difficulty: 'hard',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q98'
  },
  {
    id: 'eng-qt12',
    topicId: 'eng-t4',
    name: 'Sắp xếp hội thoại',
    slug: 'sap-xep-hoi-thoai',
    description: 'Sắp xếp các câu thoại rời rạc theo đúng thứ tự logic để tạo thành một cuộc trò chuyện giao tiếp tự nhiên.',
    recognitionSigns: [
      'Đề bài cho 4 câu thoại ký hiệu A, B, C, D không theo thứ tự.',
      'Yêu cầu viết thứ tự sắp xếp đúng (ví dụ: BDAC).'
    ],
    solvingSteps: [
      'Đọc và dịch nghĩa của cả 4 câu thoại để hiểu bối cảnh trò chuyện.',
      'Tìm câu mở đầu tự nhiên (thường là lời chào hoặc câu hỏi khơi gợi vấn đề).',
      'Liên kết các cặp câu Hỏi - Đáp liên tiếp dựa vào từ khóa và lô-gích hội thoại để hoàn thành chuỗi sắp xếp.'
    ],
    commonMistakes: [
      'Xác định sai câu mở đầu dẫn đến toàn bộ chuỗi sắp xếp phía sau bị đảo lộn.',
      'Bỏ qua các từ nối hoặc đại từ chỉ định liên kết giữa các câu thoại.'
    ],
    difficulty: 'medium',
    examFrequency: 'medium',
    exampleQuestionId: 'eng-q100'
  },
  {
    id: 'eng-qt13',
    topicId: 'eng-t3',
    name: 'Đọc hiểu trắc nghiệm',
    slug: 'doc-hieu-trac-nghiem',
    description: 'Đọc một đoạn văn dài hơn và trả lời câu hỏi trắc nghiệm A, B, C, D về nội dung chi tiết hoặc ý chính của bài đọc.',
    recognitionSigns: [
      'Đề bài cho đoạn văn đọc hiểu và câu hỏi trắc nghiệm.',
      'Câu hỏi yêu cầu tìm ý chính (main topic), chi tiết đúng/sai, hoặc giải nghĩa từ vựng.'
    ],
    solvingSteps: [
      'Đọc câu hỏi trước để định hướng thông tin cần tìm trong bài.',
      'Đọc quét (scanning) đoạn văn để định vị vùng thông tin chứa câu trả lời.',
      'Đọc kỹ vùng thông tin đó, đối chiếu với các phương án lựa chọn và dùng phương pháp loại trừ.'
    ],
    commonMistakes: [
      'Chọn đáp án chỉ dựa vào từ khóa giống hệt trong bài mà không đọc kỹ nghĩa của cả câu.',
      'Nhầm lẫn ý chính của toàn bài với một chi tiết minh họa nhỏ.'
    ],
    difficulty: 'hard',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q101'
  }
];

export const englishQuestions: Question[] = [
  // Phát âm đuôi -s/-es (qt1)
  {
    id: "eng-q1",
    subjectId: "english",
    topicId: "eng-t1",
    questionTypeId: "eng-qt1",
    content: "Choose the word whose underlined part is pronounced differently from that of the others:",
    options: ["A. cups", "B. books", "C. bats", "D. bags"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2024,
    correctAnswer: "D",
    validatorType: "choice"
  },
  // Phát âm đuôi -ed (qt2)
  {
    id: "eng-q2",
    subjectId: "english",
    topicId: "eng-t1",
    questionTypeId: "eng-qt2",
    content: "Choose the word whose underlined part is pronounced differently from that of the others:",
    options: ["A. washed", "B. worked", "C. played", "D. watched"],
    difficulty: "easy",
    sourceType: "mock_exam",
    correctAnswer: "C",
    validatorType: "choice"
  },
  // Câu bị động (qt3 - topic t4)
  {
    id: "eng-q3",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt3",
    content: "They built a new bridge across the river last year.\n\n-> Choose the correct passive sentence:",
    options: [
      "A. A new bridge is built across the river last year.",
      "B. A new bridge was built across the river last year.",
      "C. A new bridge has been built across the river last year.",
      "D. A new bridge were built across the river last year."
    ],
    difficulty: "medium",
    sourceType: "mock_exam",
    correctAnswer: "B",
    validatorType: "choice"
  },
  // Câu điều kiện (qt4 - topic t4)
  {
    id: "eng-q4",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt4",
    content: "He doesn't have enough money, so he cannot buy that smartphone.\n\n-> Choose the correct conditional sentence:",
    options: [
      "A. If he has enough money, he can buy that smartphone.",
      "B. If he had enough money, he can buy that smartphone.",
      "C. If he had enough money, he could buy that smartphone.",
      "D. If he didn't have enough money, he couldn't buy that smartphone."
    ],
    difficulty: "medium",
    sourceType: "official_exam",
    province: "Hà Nội",
    year: 2023,
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q5",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She usually ______ to school by bike to protect the environment.",
    options: ["A. go", "B. gets", "C. goes", "D. went"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q6",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "They ______ English lessons twice a week at THPT Nguyen Du.",
    options: ["A. have", "B. has", "C. had", "D. are having"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q7",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The sun ______ in the East and sets in the West.",
    options: ["A. rise", "B. rises", "C. rose", "D. is rising"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q8",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Water ______ at 100 degrees Celsius under normal atmospheric pressure.",
    options: ["A. boil", "B. boils", "C. boiled", "D. is boiling"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q9",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My mother rarely ______ coffee, but she always ______ tea in the morning.",
    options: ["A. drink / drink", "B. drinks / drinks", "C. drank / drank", "D. is drinking / is drinking"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q10",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "How often ______ your sister ______ English vocabulary on her smartphone?",
    options: ["A. do / practice", "B. does / practices", "C. does / practice", "D. is / practicing"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q11",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Many students in my school ______ very hard because they want to pass the entrance exam.",
    options: ["A. study", "B. studies", "C. studied", "D. are studying"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q12",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The train to Quy Nhon ______ at 6:30 AM every morning from the station.",
    options: ["A. leave", "B. leaves", "C. left", "D. is leaving"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q13",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "He promises that he ______ the book to me as soon as he ______ reading it.",
    options: ["A. returns / finishes", "B. will return / will finish", "C. will return / finishes", "D. returns / will finish"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q14",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "If you ______ a lot of noise, the baby ______ awake immediately.",
    options: ["A. make / wakes", "B. make / will wake", "C. will make / wakes", "D. will make / will wake"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q15",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Every morning, my father ______ the newspaper while drinking tea.",
    options: ["A. read", "B. reads", "C. is reading", "D. readed"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q16",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ up early in the morning to do exercise at Quy Nhon beach.",
    options: ["A. get", "B. gets", "C. got", "D. are getting"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q17",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Our teacher ______ very helpful and always explains everything clearly.",
    options: ["A. is", "B. are", "C. was", "D. be"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q18",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ like playing computer games; she prefers reading books.",
    options: ["A. doesn't", "B. don't", "C. isn't", "D. not"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q19",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Normally, the school yard ______ very noisy during the recess.",
    options: ["A. become", "B. becomes", "C. is becoming", "D. became"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q20",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My brother ______ to the library on Saturdays, but sometimes he ______ at home.",
    options: ["A. goes / stays", "B. go / stay", "C. goes / stay", "D. go / stays"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q21",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The Earth ______ around the Sun, which ______ about 365 days.",
    options: ["A. goes / takes", "B. go / take", "C. goes / take", "D. go / takes"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q22",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "How ______ you usually ______ to school every day, Nam?",
    options: ["A. do / go", "B. does / go", "C. do / goes", "D. are / going"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q23",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The flight to Ho Chi Minh City ______ at 8:00 PM tonight, so we must arrive at the airport early.",
    options: ["A. leaves", "B. will leave", "C. is leaving", "D. leave"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q24",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "If she ______ enough time tomorrow, she ______ her grandparents in Quy Nhon.",
    options: ["A. has / will visit", "B. will have / will visit", "C. has / visits", "D. will have / visits"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q25",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ THPT Nguyen Du last year to learn about its traditions.",
    options: ["A. visit", "B. visits", "C. visited", "D. are visiting"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q26",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Yesterday, our English teacher ______ us a very interesting story about Quy Nhon city.",
    options: ["A. tell", "B. tells", "C. told", "D. is telling"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q27",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "They ______ a new community center in Hoai Nhon district two years ago.",
    options: ["A. build", "B. builds", "C. built", "D. was building"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q28",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ my English homework last night, so I could answer all questions today.",
    options: ["A. do", "B. did", "C. does", "D. have done"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q29",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Where ______ you ______ your summer holiday with your family last year?",
    options: ["A. do / spend", "B. did / spend", "C. did / spent", "D. were / spend"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q30",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ to the stadium yesterday because it ______ heavily all day.",
    options: ["A. didn't go / rain", "B. didn't go / rained", "C. don't go / rained", "D. didn't went / rained"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q31",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The students ______ very excited when they ______ the exam results yesterday afternoon.",
    options: ["A. are / receive", "B. was / received", "C. were / received", "D. were / receive"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q32",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "When he was young, he ______ swimming in the river near his house every afternoon.",
    options: ["A. goes", "B. went", "C. was going", "D. has gone"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q33",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The plane ______ off safely, and then it ______ into the dark clouds.",
    options: ["A. took / disappeared", "B. takes / disappears", "C. was taking / disappeared", "D. took / was disappearing"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q34",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ a letter, ______ it in an envelope, and ______ it in the mailbox near her house.",
    options: ["A. writes / puts / drops", "B. wrote / put / dropped", "C. wrote / putted / dropped", "D. wrote / was putting / dropped"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q35",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Last Sunday, we ______ trash along the beach in Quy Nhon to protect the environment.",
    options: ["A. collected", "B. collect", "C. collects", "D. are collecting"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q36",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ a beautiful shirt for my mother's birthday last week.",
    options: ["A. bought", "B. buy", "C. buys", "D. was buying"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q37",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "They ______ to the cinema together three days ago.",
    options: ["A. went", "B. go", "C. goes", "D. are going"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q38",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ not attend the English class yesterday because she was sick.",
    options: ["A. did", "B. does", "C. is", "D. was"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q39",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Last year, my family ______ a wonderful holiday in Da Lat, and we ______ many beautiful places.",
    options: ["A. had / visited", "B. have / visit", "C. had / visit", "D. have / visited"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q40",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Why ______ you ______ the class meeting yesterday morning?",
    options: ["A. didn't / join", "B. don't / join", "C. didn't / joined", "D. weren't / join"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q41",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The historic storm ______ the town in 2020, but the local people ______ it together.",
    options: ["A. hit / rebuilt", "B. hitted / rebuilt", "C. hit / rebuilded", "D. hitted / rebuilded"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q42",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ her keys on the way home, so she ______ to call her roommate.",
    options: ["A. lost / had", "B. lose / had", "C. lost / has", "D. losted / had"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q43",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "As soon as the teacher ______ the classroom, all the students ______ talking.",
    options: ["A. entered / stopped", "B. enters / stops", "C. entered / stop", "D. was entering / stopped"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q44",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "He ______ his bike quickly, ______ the corner, and then ______ into the school yard just in time.",
    options: ["A. rode / turned / entered", "B. ride / turn / enter", "C. was riding / turned / entered", "D. rode / turned / was entering"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q45",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Listen! My sister ______ English in the next room.",
    options: ["A. speaks", "B. is speaking", "C. spoke", "D. speak"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q46",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ for the bus at the bus stop right now. It is late.",
    options: ["A. wait", "B. are waiting", "C. is waiting", "D. waited"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q47",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Look! The children ______ football in the school yard.",
    options: ["A. play", "B. is playing", "C. are playing", "D. played"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q48",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Please be quiet! My father ______ in his bedroom at the moment.",
    options: ["A. sleeps", "B. is sleeping", "C. slept", "D. sleep"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q49",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The climate of the earth ______ warmer and warmer due to serious global warming.",
    options: ["A. get", "B. is getting", "C. gets", "D. was getting"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q50",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "These days, many grade-9 students ______ extremely hard to prepare for the entrance exam.",
    options: ["A. study", "B. studied", "C. are studying", "D. studies"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q51",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ a book tonight to prepare for the discussion tomorrow, so I cannot join you.",
    options: ["A. read", "B. is reading", "C. am reading", "D. readed"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q52",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Why ______ you ______ at me like that? Is there something wrong with my face?",
    options: ["A. are / looking", "B. do / look", "C. did / look", "D. is / looking"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q53",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "He is so lazy! He ______ always ______ his homework at the last minute!",
    options: ["A. does / do", "B. is / doing", "C. was / doing", "D. is / do"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q54",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "At present, my brother ______ a new car, but he ______ it because he doesn't have a license yet.",
    options: ["A. owns / isn't driving", "B. is owning / isn't driving", "C. owns / doesn't drive", "D. is owning / doesn't drive"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q55",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Keep silent! The baby ______ in the next room.",
    options: ["A. is sleeping", "B. sleeps", "C. slept", "D. was sleeping"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q56",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Hurry up! The train ______ to leave the station.",
    options: ["A. is preparing", "B. prepares", "C. prepared", "D. was preparing"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q57",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "At present, the students ______ a math test in their classroom.",
    options: ["A. are doing", "B. do", "C. did", "D. were doing"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q58",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Listen! Someone ______ at the front door.",
    options: ["A. is knocking", "B. knocks", "C. knocked", "D. was knocking"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q59",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Look! That car ______ so fast. It is very dangerous.",
    options: ["A. is running", "B. runs", "C. ran", "D. was running"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q60",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ for her final exam these days, so she doesn't have much free time.",
    options: ["A. is studying", "B. studies", "C. studied", "D. was studying"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q61",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The number of people using public transport in Quy Nhon ______ rapidly this year.",
    options: ["A. is increasing", "B. are increasing", "C. increases", "D. was increasing"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q62",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Why ______ you ______ that jacket? It is very warm today.",
    options: ["A. are / wearing", "B. do / wear", "C. did / wear", "D. is / wearing"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q63",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "He ______ always ______ his room dirty, which annoys his mother very much!",
    options: ["A. is / leaving", "B. does / leave", "C. was / leaving", "D. is / leave"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q64",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "At the moment, I ______ that he is right, but I still ______ the situation.",
    options: ["A. think / am analyzing", "B. am thinking / analyze", "C. think / analyze", "D. am thinking / am analyzing"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q65",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "At 8 o'clock yesterday evening, we ______ English online with our teacher.",
    options: ["A. study", "B. studied", "C. were studying", "D. was studying"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q66",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While she ______ a book in her room, the lights suddenly went out.",
    options: ["A. read", "B. is reading", "C. was reading", "D. were reading"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q67",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My mother ______ dinner when my father came back home from work.",
    options: ["A. prepare", "B. prepared", "C. was preparing", "D. is preparing"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q68",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "What ______ you ______ at this time yesterday when I called you?",
    options: ["A. do / do", "B. did / do", "C. were / doing", "D. was / doing"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q69",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While I ______ my homework, my little brother ______ video games in the living room.",
    options: ["A. did / played", "B. was doing / was playing", "C. am doing / is playing", "D. was doing / played"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q70",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "When I saw her at the party yesterday, she ______ a beautiful red dress.",
    options: ["A. wears", "B. wore", "C. was wearing", "D. is wearing"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q71",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The student ______ to the teacher because he ______ about something else.",
    options: ["A. didn't listen / thought", "B. wasn't listening / was thinking", "C. wasn't listening / thought", "D. didn't listen / was thinking"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q72",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I lost my keys while I ______ in the garden yesterday morning.",
    options: ["A. work", "B. worked", "C. was working", "D. is working"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q73",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "It was a beautiful morning. The sun ______ and the birds ______ in the trees when I woke up.",
    options: ["A. shone / sang", "B. shines / sing", "C. was shining / were singing", "D. shone / were singing"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "C",
    validatorType: "choice"
  },
  {
    id: "eng-q74",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While the teacher ______ the lesson, the students ______ notes, but one boy ______ in the back row.",
    options: ["A. explained / took / slept", "B. was explaining / were taking / was sleeping", "C. explained / was taking / was sleeping", "D. was explaining / took / slept"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "B",
    validatorType: "choice"
  },
  {
    id: "eng-q75",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "At this time last Sunday, we ______ a football match on TV.",
    options: ["A. were watching", "B. watched", "C. was watching", "D. are watching"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q76",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While my father ______ the garden, it started to rain.",
    options: ["A. was watering", "B. watered", "C. is watering", "D. were watering"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q77",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ a bath when the phone rang.",
    options: ["A. was having", "B. had", "C. is having", "D. were having"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q78",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "What ______ they ______ at 9:00 PM yesterday?",
    options: ["A. were / doing", "B. did / do", "C. was / doing", "D. are / doing"],
    difficulty: "easy",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q79",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While we ______ along the beach, we ______ a beautiful seashell.",
    options: ["A. were walking / found", "B. walked / was finding", "C. were walking / were finding", "D. walked / found"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q80",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ my friend while I ______ down the street yesterday.",
    options: ["A. saw / was walking", "B. was seeing / walked", "C. saw / walked", "D. was seeing / was walking"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q81",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While my mother ______ dinner, my sister ______ the house.",
    options: ["A. was preparing / was cleaning", "B. prepared / cleaned", "C. was preparing / cleaned", "D. prepared / was cleaning"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q82",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Yesterday afternoon, I ______ my homework while my sister ______ to music.",
    options: ["A. was doing / was listening", "B. did / listened", "C. was doing / listened", "D. did / was listening"],
    difficulty: "medium",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q83",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The wind ______ loudly and the rain ______ against the window when we woke up last night.",
    options: ["A. was blowing / was beating", "B. blew / beat", "C. was blowing / beat", "D. blew / was beating"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q84",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "While the guide ______ the history of Quy Nhon, some tourists ______ photos, and others ______ notes.",
    options: ["A. was explaining / were taking / were making", "B. explained / took / made", "C. was explaining / took / were making", "D. explained / were taking / made"],
    difficulty: "hard",
    sourceType: "manual",
    correctAnswer: "A",
    validatorType: "choice"
  },
  {
    id: "eng-q85",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt7",
    content: "Complete the sentence with the correct form of the word in brackets:\n\nThe telephone is one of the most useful ________ of the 20th century. (INVENT)",
    correctAnswer: "inventions",
    acceptedAnswers: ["inventions", "Inventions"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q86",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt7",
    content: "Complete the sentence with the correct form of the word in brackets:\n\nShe spends two hours ________ English every day. (STUDY)",
    correctAnswer: "studying",
    acceptedAnswers: ["studying", "Studying"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q87",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt7",
    content: "Complete the sentence with the correct form of the word in brackets:\n\nThey are trying to protect the ________ beauty of the area. (NATURE)",
    correctAnswer: "natural",
    acceptedAnswers: ["natural", "Natural"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q88",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt7",
    content: "Complete the sentence with the correct form of the word in brackets:\n\nThe weather was very ________ yesterday, so we had to cancel our picnic. (PLEASE)",
    correctAnswer: "unpleasant",
    acceptedAnswers: ["unpleasant", "Unpleasant"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q89",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt7",
    content: "Complete the sentence with the correct form of the word in brackets:\n\nHe wants to become a ________ football player in the future. (PROFESSION)",
    correctAnswer: "professional",
    acceptedAnswers: ["professional", "Professional"],
    difficulty: "easy",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2024,
    validatorType: "exact"
  },
  {
    id: "eng-q90",
    subjectId: "english",
    topicId: "eng-t3",
    questionTypeId: "eng-qt8",
    content: "Fill in the blank (1) for the advertisement below:\n\n**ANNOUNCEMENT: SCHOOL ENGLISH CLUB**\nAre you interested **(1) ______** speaking English? Join our club this Thursday at Room 204.",
    options: ["A. on", "B. in", "C. at", "D. for"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "mock_exam",
    validatorType: "choice"
  },
  {
    id: "eng-q91",
    subjectId: "english",
    topicId: "eng-t3",
    questionTypeId: "eng-qt8",
    content: "Fill in the blank (2) for the notice below:\n\n**NOTICE: VOLUNTEER ACTIVITY**\nOur school will organize a clean-up campaign **(2) ______** Sunday, June 10th. All volunteers are welcome!",
    options: ["A. in", "B. on", "C. at", "D. since"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "mock_exam",
    validatorType: "choice"
  },
  {
    id: "eng-q92",
    subjectId: "english",
    topicId: "eng-t3",
    questionTypeId: "eng-qt9",
    content: "Read the passage and choose whether the statement is True or False:\n\n*Passage:* My school, THPT Nguyen Du, was established in Hoai Nhon, Binh Dinh. It has about 1,200 students. In the school year 2024-2025, the school admitted 437 tenth-graders.\n\n*Statement:* THPT Nguyen Du is located in Quy Nhon city.",
    options: ["A. True", "B. False"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "mock_exam",
    validatorType: "choice"
  },
  {
    id: "eng-q93",
    subjectId: "english",
    topicId: "eng-t3",
    questionTypeId: "eng-qt9",
    content: "Read the passage and choose whether the statement is True or False:\n\n*Passage:* My school, THPT Nguyen Du, was established in Hoai Nhon, Binh Dinh. It has about 1,200 students. In the school year 2024-2025, the school admitted 437 tenth-graders.\n\n*Statement:* The school admitted 437 new tenth-grade students in the school year 2024-2025.",
    options: ["A. True", "B. False"],
    correctAnswer: "A",
    difficulty: "easy",
    sourceType: "mock_exam",
    validatorType: "choice"
  },
  {
    id: "eng-q94",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt10",
    content: "Rewrite the sentence using the word in brackets so that it has the same meaning:\n\nHe was very tired, but he finished his homework. (ALTHOUGH)\n\n-> Although...",
    correctAnswer: "Although he was tired, he finished his homework.",
    acceptedAnswers: [
      "Although he was tired, he finished his homework.",
      "although he was tired, he finished his homework",
      "Although he was tired, he finished his homework"
    ],
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "exact"
  },
  {
    id: "eng-q95",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt10",
    content: "Rewrite the sentence using the word in brackets so that it has the same meaning:\n\nHe couldn't go to school because of his illness. (BECAUSE)\n\n-> He couldn't go to school because...",
    correctAnswer: "he was ill",
    acceptedAnswers: [
      "he was ill",
      "he was sick",
      "he was ill.",
      "he was sick.",
      "he was ill"
    ],
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "exact"
  },
  {
    id: "eng-q96",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt5",
    content: "Complete the second sentence so that it has a similar meaning to the first one, using the word in brackets. Do not change the word given. (Write between 3 and 5 words):\n\n\"I know the way,\" he said to me. (KNEW)\n\n-> He told me that...",
    correctAnswer: "he knew the way",
    acceptedAnswers: [
      "he knew the way",
      "he knew the way.",
      "that he knew the way",
      "that he knew the way."
    ],
    difficulty: "hard",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q97",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt5",
    content: "Complete the second sentence so that it has a similar meaning to the first one, using the word in brackets. Do not change the word given. (Write between 3 and 5 words):\n\nThis is the computer. It is sometimes called a PC. (WHICH)\n\n-> This is the computer...",
    correctAnswer: "which is sometimes called a",
    acceptedAnswers: [
      "which is sometimes called a",
      "which is sometimes called a PC",
      "which is sometimes called a PC.",
      "that is sometimes called a"
    ],
    difficulty: "hard",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q98",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt11",
    content: "Identify the mistake in the sentence and write the correct word to replace it:\n\nAfter a tiring day, he felt extremely tiring.",
    correctAnswer: "tired",
    acceptedAnswers: ["tired", "tiring -> tired", "tiring to tired"],
    difficulty: "hard",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q99",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt11",
    content: "Identify the mistake in the sentence and write the correct word to replace it:\n\nShe has lived in Hoai Nhon since five years.",
    correctAnswer: "for",
    acceptedAnswers: ["for", "since -> for", "since to for"],
    difficulty: "hard",
    sourceType: "official_exam",
    province: "Bình Định",
    year: 2025,
    validatorType: "exact"
  },
  {
    id: "eng-q100",
    subjectId: "english",
    topicId: "eng-t4",
    questionTypeId: "eng-qt12",
    content: "Arrange the following sentences (A, B, C, D) to make a complete conversation:\n\nA. Sure. I am going to the Hoai Nhon library.\nB. Hi, Nam. Where are you going?\nC. Oh, can I go with you? I need to find some English books.\nD. Hi, Mai. I'm going to borrow some books.\n\n(Write the letters in the correct order, e.g., ABCD)",
    correctAnswer: "BDAC",
    acceptedAnswers: ["BDAC", "B - D - A - C", "b-d-a-c", "bdac"],
    difficulty: "medium",
    sourceType: "mock_exam",
    validatorType: "exact"
  },
  {
    id: "eng-q101",
    subjectId: "english",
    topicId: "eng-t3",
    questionTypeId: "eng-qt13",
    content: "Read the passage and choose the best answer:\n\nEnglish is the official language in many countries. It is spoken by millions of people around the world as a first or second language. Learning English helps students access global knowledge, study abroad, and find better jobs. Many high schools in Binh Dinh, including THPT Nguyen Du, place a strong emphasis on English education to prepare their students for the future.\n\nWhat is the main topic of the passage?",
    options: [
      "A. The history of Binh Dinh province",
      "B. The importance and popularity of English",
      "C. How to study at THPT Nguyen Du",
      "D. The number of high schools in Vietnam"
    ],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "mock_exam",
    validatorType: "choice"
  },
  {
    id: "eng-q102",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "It usually ______ at this time of the year.",
    options: ["A. rain", "B. rains", "C. rained", "D. is raining"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q103",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My mother often ______ breakfast at 6 a.m.",
    options: ["A. cooks", "B. cook", "C. cooked", "D. is cooking"],
    correctAnswer: "A",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q104",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Students at our school ______ the classrooms clean.",
    options: ["A. keeps", "B. kept", "C. keep", "D. are keeping"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q105",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "He usually ______ to school by bike.",
    options: ["A. go", "B. goes", "C. went", "D. is going"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q106",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "They ______ English every Monday and Friday.",
    options: ["A. study", "B. studies", "C. studied", "D. are studying"],
    correctAnswer: "A",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q107",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My father ______ coffee every morning.",
    options: ["A. drink", "B. drinks", "C. drank", "D. is drinking"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q108",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We often ______ part in school activities.",
    options: ["A. takes", "B. took", "C. take", "D. are taking"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q109",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ her younger brother after school.",
    options: ["A. look after", "B. looks after", "C. looked after", "D. is looking after"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q110",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "This workshop ______ teenagers how to cook healthy dishes.",
    options: ["A. show", "B. shows", "C. showed", "D. is showing"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q111",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Our professional cooks usually ______ students useful feedback.",
    options: ["A. give", "B. gives", "C. gave", "D. are giving"],
    correctAnswer: "A",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q112",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "A green city ______ smart ideas to protect the environment.",
    options: ["A. use", "B. uses", "C. used", "D. is using"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q113",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Public transport ______ people travel more easily in big cities.",
    options: ["A. help", "B. helps", "C. helped", "D. is helping"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q114",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Phu Quoc ______ many beautiful beaches and scenic attractions.",
    options: ["A. have", "B. has", "C. had", "D. is having"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q115",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Ly Son ______ a small island in Quang Ngai.",
    options: ["A. be", "B. are", "C. is", "D. was"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q116",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Barcelona ______ many recycling bins around the city.",
    options: ["A. have", "B. has", "C. had", "D. is having"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q117",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The number of students in this class ______ not very large.",
    options: ["A. are", "B. is", "C. were", "D. be"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q118",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Many people in my village ______ unnecessary expenses to save money.",
    options: ["A. cuts down on", "B. cut down on", "C. cutted down on", "D. are cut down on"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q119",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My teacher ______ us to read English texts every day.",
    options: ["A. encourage", "B. encourages", "C. encouraged", "D. is encouraging"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q120",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "______ your sister usually help you with English homework?",
    options: ["A. Do", "B. Does", "C. Is", "D. Did"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q121",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The Internet ______ an important role in modern education.",
    options: ["A. play", "B. plays", "C. played", "D. is playing"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q122",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "James ______ back from Japan last week.",
    options: ["A. come", "B. came", "C. comes", "D. is coming"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q123",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ a great time during our trip to Quy Nhon yesterday.",
    options: ["A. have", "B. has", "C. had", "D. are having"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q124",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My sister ______ her homework last night.",
    options: ["A. finishes", "B. finished", "C. is finishing", "D. finish"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q125",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "They ______ football after school yesterday afternoon.",
    options: ["A. play", "B. plays", "C. played", "D. are playing"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q126",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The students ______ the classrooms clean last Friday.",
    options: ["A. keep", "B. keeps", "C. kept", "D. are keeping"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q127",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "I ______ a new English book two days ago.",
    options: ["A. buy", "B. buys", "C. bought", "D. am buying"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q128",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My father ______ me to school this morning.",
    options: ["A. takes", "B. took", "C. take", "D. is taking"],
    correctAnswer: "B",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q129",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "She ______ very happy after the exam.",
    options: ["A. is", "B. are", "C. was", "D. were"],
    correctAnswer: "C",
    difficulty: "easy",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q130",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The city ______ a lot before the Olympic Games in 1992.",
    options: ["A. improve", "B. improves", "C. improved", "D. is improving"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q131",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Barcelona ______ many green designs many years ago.",
    options: ["A. starts", "B. started", "C. start", "D. is starting"],
    correctAnswer: "B",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q132",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Portland ______ more parks and walking paths in the past.",
    options: ["A. make", "B. makes", "C. made", "D. is making"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q133",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The workshop ______ teenagers how to cook healthy dishes last summer.",
    options: ["A. teach", "B. teaches", "C. taught", "D. is teaching"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q134",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Our teacher ______ us useful feedback after the speaking activity.",
    options: ["A. give", "B. gives", "C. gave", "D. is giving"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q135",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ meat and vegetables at a nearby supermarket yesterday.",
    options: ["A. buy", "B. buys", "C. bought", "D. are buying"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q136",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The microphone ______ working during the presentation.",
    options: ["A. stop", "B. stops", "C. stopped", "D. is stopping"],
    correctAnswer: "C",
    difficulty: "medium",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q137",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "The people in my village ______ to move downhill after years of delay.",
    options: ["A. decide", "B. decides", "C. decided", "D. are deciding"],
    correctAnswer: "C",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q138",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "Côn Đảo ______ as exciting as Phú Quốc, but it was peaceful.",
    options: ["A. isn’t", "B. wasn’t", "C. weren’t", "D. doesn’t"],
    correctAnswer: "B",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q139",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "We ______ any lodging in that village last night.",
    options: ["A. don’t find", "B. doesn’t find", "C. didn’t find", "D. weren’t find"],
    correctAnswer: "C",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q140",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "______ you visit Ly Son Island last summer?",
    options: ["A. Do", "B. Does", "C. Did", "D. Were"],
    correctAnswer: "C",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  },
  {
    id: "eng-q141",
    subjectId: "english",
    topicId: "eng-t2",
    questionTypeId: "eng-qt6",
    content: "My classmates ______ late for the meeting yesterday morning.",
    options: ["A. is", "B. are", "C. was", "D. were"],
    correctAnswer: "D",
    difficulty: "hard",
    sourceType: "manual",
    validatorType: "choice"
  }
];

export const englishSolutions: Solution[] = [
  {
    id: "eng-s1",
    questionId: "eng-q1",
    recognition: "Đề bài hỏi phát âm đuôi -s của danh từ số nhiều. Ta cần xác định phụ âm cuối của từ gốc trước khi thêm -s.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định phụ âm cuối của từ \"cup\"",
        explanation: "Từ gốc \"cup\" kết thúc bằng âm /p/ (âm vô thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /s/.",
        result: "cups -> /kʌps/"
      },
      {
        order: 2,
        title: "Xác định phụ âm cuối của từ \"book\"",
        explanation: "Từ gốc \"book\" kết thúc bằng âm /k/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.",
        result: "books -> /bʊks/"
      },
      {
        order: 3,
        title: "Xác định phụ âm cuối của từ \"bat\"",
        explanation: "Từ gốc \"bat\" kết thúc bằng âm /t/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.",
        result: "bats -> /bæts/"
      },
      {
        order: 4,
        title: "Xác định phụ âm cuối của từ \"bag\" và so sánh",
        explanation: "Từ gốc \"bag\" kết thúc bằng âm /ɡ/ (âm hữu thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /z/. So sánh 4 từ, \"bags\" phát âm là /z/ trong khi 3 từ còn lại phát âm là /s/.",
        result: "bags -> /bæɡz/ (Đáp án khác biệt)"
      }
    ],
    finalAnswer: "D. bags",
    commonMistakes: [
      "Đọc lướt nhanh dẫn đến nhầm âm /g/ là âm vô thanh",
      "Quên quy tắc nhớ nhanh \"Thảo Phải Kính Phật Tổ\" đại diện cho /θ/, /p/, /k/, /f/, /t/"
    ],
    reviewSuggestions: [
      "Ôn tập quy tắc phát âm đuôi -s/-es",
      "Học phân biệt âm vô thanh và hữu thanh trong bảng phiên âm quốc tế IPA"
    ]
  },
  {
    id: "eng-s2",
    questionId: "eng-q2",
    recognition: "Đề bài hỏi về quy tắc phát âm đuôi -ed của động từ quá khứ. Ta cần xem xét âm cuối của từ gốc trước khi thêm -ed.",
    detailedSteps: [
      {
        order: 1,
        title: "Xét phát âm từ gốc của \"wash\"",
        explanation: "Từ gốc \"wash\" kết thúc bằng âm /ʃ/. Đây là âm vô thanh rít, do đó đuôi -ed sẽ được phát âm là /t/.",
        result: "washed -> /wɒʃt/"
      },
      {
        order: 2,
        title: "Xét phát âm từ gốc của \"work\"",
        explanation: "Từ gốc \"work\" kết thúc bằng âm /k/ (âm vô thanh). Do đó, đuôi -ed sẽ được phát âm là /t/.",
        result: "worked -> /wɜːkt/"
      },
      {
        order: 3,
        title: "Xét phát âm từ gốc của \"play\"",
        explanation: "Từ gốc \"play\" kết thúc bằng nguyên âm /eɪ/ (âm hữu thanh). Theo quy tắc, đuôi -ed sẽ được phát âm là /d/.",
        result: "played -> /pleɪd/"
      },
      {
        order: 4,
        title: "Xét phát âm từ gốc của \"watch\" và chọn đáp án",
        explanation: "Từ gốc \"watch\" kết thúc bằng âm /tʃ/ (âm vô thanh). Đuôi -ed phát âm là /t/. Vậy chỉ có \"played\" có đuôi phát âm là /d/, 3 đáp án còn lại phát âm là /t/.",
        result: "played -> /pleɪd/ (Đáp án khác biệt là C)"
      }
    ],
    finalAnswer: "C. played",
    commonMistakes: [
      "Nhầm lẫn phát âm của \"watched\" và \"washed\" do chữ viết có nét tương đồng"
    ],
    reviewSuggestions: [
      "Ôn tập quy tắc phát âm đuôi -ed",
      "Đọc to các động từ quá khứ để rèn luyện trí nhớ âm thanh"
    ]
  },
  {
    id: "eng-s3",
    questionId: "eng-q3",
    recognition: "Câu chủ động có cấu trúc: S (They) + V (built) + O (a new bridge) + Adv (across the river last year). Động từ \"built\" ở thì Quá khứ đơn (Simple Past), nên khi đổi sang bị động ta dùng was/were + V3.",
    detailedSteps: [
      {
        order: 1,
        title: "Đưa tân ngữ lên làm chủ ngữ câu bị động",
        explanation: "Tân ngữ \"a new bridge\" (số ít) được đưa lên làm chủ ngữ mới.",
        result: "Chủ ngữ mới: A new bridge (số ít)"
      },
      {
        order: 2,
        title: "Chọn động từ to be thích hợp ở quá khứ đơn",
        explanation: "Vì câu gốc ở quá khứ đơn và chủ ngữ mới \"a new bridge\" là danh từ số ít, ta sử dụng \"was\".",
        result: "to be -> was"
      },
      {
        order: 3,
        title: "Đổi động từ chính sang dạng phân từ hai V3",
        explanation: "Động từ \"build\" bất quy tắc chuyển sang quá khứ và phân từ hai đều là \"built\".",
        result: "V3 -> built"
      },
      {
        order: 4,
        title: "Lắp ráp câu hoàn chỉnh và loại trừ đáp án",
        explanation: "Ta được câu bị động: \"A new bridge was built across the river last year.\" Đối chiếu với các đáp án:\n- A sai vì dùng \"is\" (thì hiện tại)\n- C sai vì dùng \"has been\" (thì hiện tại hoàn thành)\n- D sai vì dùng \"were\" (sai sự hòa hợp với danh từ số ít)\n- B là câu đúng hoàn toàn.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Dùng nhầm động từ \"were\" cho danh từ số ít \"a new bridge\"",
      "Nhầm lẫn thì của câu gốc từ quá khứ sang hiện tại đơn dẫn đến chọn A"
    ],
    reviewSuggestions: [
      "Ôn tập các thì ngữ pháp cơ bản trong Tiếng Anh",
      "Luyện tập chuyển đổi câu bị động với nhiều thì khác nhau"
    ]
  },
  {
    id: "eng-s4",
    questionId: "eng-q4",
    recognition: "Câu gốc chỉ thực tế ở hiện tại: \"Anh ấy không có đủ tiền (hiện tại đơn phủ định), vì vậy anh ấy không thể mua điện thoại (hiện tại đơn phủ định)\". Để chuyển sang câu điều kiện, ta phải dùng câu điều kiện loại 2 (trái với thực tế ở hiện tại) và chuyển thể khẳng định/phủ định tương ứng.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định loại câu điều kiện",
        explanation: "Sự thật ở hiện tại không có tiền và không mua được điện thoại, giả thiết trái thực tế hiện tại yêu cầu câu điều kiện loại 2.",
        result: "Điều kiện loại 2: If + S + V2/ed (were cho mọi ngôi), S + would/could + V0"
      },
      {
        order: 2,
        title: "Biến đổi mệnh đề If (giả thiết)",
        explanation: "Câu gốc phủ định \"doesn't have\" chuyển sang khẳng định quá khứ đơn \"had\".",
        result: "If he had enough money,"
      },
      {
        order: 3,
        title: "Biến đổi mệnh đề chính (kết quả)",
        explanation: "Câu gốc phủ định \"cannot buy\" chuyển sang khẳng định \"could buy\".",
        result: "he could buy that smartphone."
      },
      {
        order: 4,
        title: "Kết hợp câu và loại trừ đáp án",
        explanation: "Câu hoàn chỉnh: \"If he had enough money, he could buy that smartphone.\" Đối chiếu: A sai loại 1; B dùng \"can\" ở mệnh đề chính (sai cấu trúc); D giữ nguyên phủ định.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Quên không đổi thể khẳng định sang phủ định và ngược lại.",
      "Nhầm lẫn cấu trúc mệnh đề chính loại 2 dùng could/would thành can/will."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc điều kiện loại 2 trái ngược thực tế hiện tại.",
      "Ôn lại các biến đổi khẳng định/phủ định giữa câu gốc và câu điều kiện."
    ]
  },
  {
    id: "eng-s5",
    questionId: "eng-q5",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có trạng từ tần suất 'usually' chỉ thói quen.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She' là ngôi thứ ba số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Với ngôi thứ ba số ít ở hiện tại đơn, động từ 'go' kết thúc bằng 'o' nên thêm đuôi 'es' thành 'goes'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (goes) là động từ chia đúng ngôi thứ ba số ít.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Chọn gets vì nhầm động từ đi đến trường (goes to school)."
    ],
    reviewSuggestions: [
      "Học kỹ cụm từ: go to school bằng phương tiện gì."
    ]
  },
  {
    id: "eng-s6",
    questionId: "eng-q6",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có cụm từ tần suất 'twice a week' chỉ hành động lặp lại.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'They' là số nhiều.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Với chủ ngữ số nhiều, động từ giữ nguyên mẫu 'have'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (have) là dạng nguyên mẫu thích hợp cho chủ ngữ 'They'.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm dùng has cho chủ ngữ số nhiều They."
    ],
    reviewSuggestions: [
      "Ghi nhớ các chủ ngữ đi với V nguyên mẫu và V-s/es."
    ]
  },
  {
    id: "eng-s7",
    questionId: "eng-q7",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu mô tả sự thật hiển nhiên (mặt trời mọc ở hướng Đông và lặn ở hướng Tây).",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The sun' là số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'rise' thêm 's' thành 'rises' theo ngôi thứ ba số ít.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (rises) đúng ngữ pháp cho sự thật hiển nhiên.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nhầm rise nguyên mẫu hoặc chia sang quá khứ rose."
    ],
    reviewSuggestions: [
      "Lưu ý các trường hợp sự thật hiển nhiên luôn chia hiện tại đơn."
    ]
  },
  {
    id: "eng-s8",
    questionId: "eng-q8",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu mô tả sự thật khoa học hiển nhiên (nước sôi ở 100 độ C).",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Water' là danh từ không đếm được (tính là số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'boil' thêm 's' thành 'boils' với danh từ không đếm được.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (boils) phù hợp với danh từ không đếm được.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nghĩ nước đếm được hoặc chia thì tiếp diễn đang sôi."
    ],
    reviewSuggestions: [
      "Xem lại phân loại danh từ đếm được và không đếm được."
    ]
  },
  {
    id: "eng-s9",
    questionId: "eng-q9",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu chứa các trạng từ 'rarely' và 'always' chỉ thói quen hàng ngày.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'My mother' và 'she' đều là ngôi thứ ba số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'drink' thêm 's' thành 'drinks' cho cả hai vế.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (drinks / drinks) chia đúng cả hai vế.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Quên thêm s vào động từ cho ngôi thứ ba số ít."
    ],
    reviewSuggestions: [
      "Học kỹ vị trí của trạng từ tần suất: đứng trước động từ thường."
    ]
  },
  {
    id: "eng-s10",
    questionId: "eng-q10",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu hỏi tần suất với từ để hỏi 'How often'.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'your sister' là số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trong câu hỏi với trợ động từ 'does', động từ chính giữ nguyên mẫu 'practice'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (does / practice) tuân thủ đúng cấu trúc nghi vấn.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Vẫn chia s cho động từ chính sau khi đã dùng trợ động từ does."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc câu hỏi thì Hiện tại đơn: Do/Does + S + V0."
    ]
  },
  {
    id: "eng-s11",
    questionId: "eng-q11",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mô tả mong muốn ở hiện tại (want) nên hành động học tập cũng diễn ra ở hiện tại.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Many students' là số nhiều.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ chính 'study' giữ nguyên mẫu vì chủ ngữ là số nhiều.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (study) giữ nguyên mẫu là lựa chọn duy nhất đúng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia study thêm s/es cho danh từ số nhiều."
    ],
    reviewSuggestions: [
      "Xem lại sự hòa hợp chủ ngữ và động từ."
    ]
  },
  {
    id: "eng-s12",
    questionId: "eng-q12",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mô tả lịch trình, giờ chạy cố định của phương tiện giao thông (tàu đi Quy Nhơn).",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The train' là số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'leave' thêm 's' thành 'leaves' biểu thị lịch trình cố định.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (leaves) thể hiện lịch trình chuẩn xác.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nghĩ xe đang rời ga dùng tiếp diễn hoặc chia quá khứ."
    ],
    reviewSuggestions: [
      "Học cách dùng Hiện tại đơn cho lịch trình xe lửa, máy bay, lịch học."
    ]
  },
  {
    id: "eng-s13",
    questionId: "eng-q13",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu chứa liên từ chỉ thời gian 'as soon as' dùng để chỉ tương lai.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'he' ở cả hai vế đều là ngôi thứ ba số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Mệnh đề sau 'as soon as' dùng hiện tại đơn (he finishes), mệnh đề chính hứa hẹn trong tương lai dùng tương lai đơn (will return).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (will return / finishes) phù hợp với sự kết hợp thì chỉ tương lai.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Dùng will ở cả hai mệnh đề chính và phụ chỉ thời gian."
    ],
    reviewSuggestions: [
      "Luyện tập sự phối hợp thì trong câu chứa mệnh đề chỉ thời gian tương lai."
    ]
  },
  {
    id: "eng-s14",
    questionId: "eng-q14",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu điều kiện loại 1 diễn tả giả định có thể xảy ra ở hiện tại hoặc tương lai.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế If là 'you', chủ ngữ vế chính là 'the baby' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Mệnh đề If dùng hiện tại đơn (you make), mệnh đề chính dùng tương lai đơn (will wake).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (make / will wake) là công thức chuẩn của câu điều kiện loại 1.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nhầm lẫn sang câu điều kiện loại 2 hoặc dùng will ở vế If."
    ],
    reviewSuggestions: [
      "Học thuộc cấu trúc câu điều kiện loại 1: If + S + V(s/es), S + will + V0."
    ]
  },
  {
    id: "eng-s15",
    questionId: "eng-q15",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ 'Every morning' chỉ thói quen lặp lại hàng ngày.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'my father' là danh từ số ít (tương đương với He).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Với chủ ngữ số ít ở hiện tại đơn, động từ 'read' thêm 's' thành 'reads'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (reads) chia đúng ngôi thứ ba số ít.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Quên thêm s hoặc chia quá khứ readed (read bất quy tắc dạng quá khứ viết giống nhưng đọc khác)."
    ],
    reviewSuggestions: [
      "Chú ý chia động từ số ít với các thói quen hàng ngày."
    ]
  },
  {
    id: "eng-s16",
    questionId: "eng-q16",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả thói quen lặp lại hàng ngày 'in the morning'.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'We' là ngôi thứ nhất số nhiều.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Với chủ ngữ số nhiều, động từ giữ nguyên mẫu 'get'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (get) giữ nguyên mẫu là đáp án đúng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Thêm 's' vào động từ cho chủ ngữ số nhiều."
    ],
    reviewSuggestions: [
      "Nhớ kỹ sự hòa hợp chủ ngữ số nhiều đi với động từ nguyên mẫu."
    ]
  },
  {
    id: "eng-s17",
    questionId: "eng-q17",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu diễn tả tính chất ổn định ở hiện tại với trạng từ 'always'.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Our teacher' là danh từ số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ to be đi với chủ ngữ số ít ở hiện tại là 'is'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is) chia đúng động từ to be ở hiện tại.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm dùng are hoặc dùng động từ nguyên thể be."
    ],
    reviewSuggestions: [
      "Ôn lại cách chia động từ to be ở hiện tại: am, is, are."
    ]
  },
  {
    id: "eng-s18",
    questionId: "eng-q18",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu phủ định diễn tả sở thích ổn định ở hiện tại (like, prefers).",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She' là ngôi thứ ba số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ phủ định đi với ngôi thứ ba số ít là 'doesn't'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (doesn't) đúng cấu trúc phủ định Hiện tại đơn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng don't cho ngôi thứ ba số ít hoặc dùng isn't với động từ thường like."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc phủ định: S + don't/doesn't + V0."
    ]
  },
  {
    id: "eng-s19",
    questionId: "eng-q19",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng từ 'Normally' diễn tả thói quen, quy luật thông thường ở hiện tại.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'the school yard' là danh từ số ít chỉ vật.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'become' thêm 's' thành 'becomes' với chủ ngữ số ít.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (becomes) chia đúng thì Hiện tại đơn.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Dùng become nguyên mẫu hoặc nhầm chia thì quá khứ became."
    ],
    reviewSuggestions: [
      "Nhận biết các trạng từ chỉ tần suất/thông lệ như normally, generally."
    ]
  },
  {
    id: "eng-s20",
    questionId: "eng-q20",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Cả hai vế đều có trạng từ 'on Saturdays' và 'sometimes' chỉ thói quen lặp lại.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'My brother' (số ít) và vế 2 là 'he' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ ở cả hai vế đều thêm s/es: 'go' -> 'goes', 'stay' -> 'stays'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (goes / stays) chia đúng động từ ở cả hai vế.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Quên thêm s/es cho một trong hai động từ."
    ],
    reviewSuggestions: [
      "Luôn kiểm tra kỹ chủ ngữ của từng mệnh đề trong câu ghép."
    ]
  },
  {
    id: "eng-s21",
    questionId: "eng-q21",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả sự thật khoa học hiển nhiên (Trái đất quay quanh Mặt trời).",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'The Earth' là số ít, vế 2 'which' thay thế cho mệnh đề trước cũng tương đương số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cả hai động từ đều chia số ít: 'go' -> 'goes', 'take' -> 'takes'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (goes / takes) là lựa chọn chính xác.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Không nhận diện được 'which' đóng vai trò chủ ngữ số ít ở vế sau."
    ],
    reviewSuggestions: [
      "Học cách xác định sự hòa hợp chủ-vị trong mệnh đề quan hệ."
    ]
  },
  {
    id: "eng-s22",
    questionId: "eng-q22",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu hỏi thói quen có từ nhận biết 'usually' và 'every day'.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'you' (ngôi thứ hai).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ tương ứng là 'do', động từ chính 'go' giữ nguyên mẫu.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (do / go) tuân thủ đúng công thức nghi vấn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm dùng trợ động từ does hoặc chia động từ chính."
    ],
    reviewSuggestions: [
      "Thực hành cấu trúc câu hỏi thông tin: Wh- + do/does + S + V0?."
    ]
  },
  {
    id: "eng-s23",
    questionId: "eng-q23",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả lịch trình, thời gian biểu cố định trong tương lai (giờ máy bay cất cánh '8:00 PM tonight').",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The flight' là danh từ số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Sử dụng thì Hiện tại đơn chia động từ số ít: 'leave' -> 'leaves' để chỉ lịch trình tương lai.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (leaves) là lựa chọn chuẩn ngữ pháp nhất.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chọn tương lai đơn 'will leave' vì thấy từ khóa chỉ tương lai 'tonight'."
    ],
    reviewSuggestions: [
      "Ghi nhớ cách dùng đặc biệt của Hiện tại đơn đối với lịch trình tàu xe, máy bay."
    ]
  },
  {
    id: "eng-s24",
    questionId: "eng-q24",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu điều kiện loại 1 diễn tả giả định có thể xảy ra ở tương lai.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ mệnh đề If là 'she' (số ít), mệnh đề chính là 'she'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Mệnh đề If chia Hiện tại đơn số ít ('has'), mệnh đề chính chia Tương lai đơn ('will visit').",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (has / will visit) đúng cấu trúc điều kiện loại 1.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng will ở cả hai mệnh đề (will have / will visit)."
    ],
    reviewSuggestions: [
      "Luyện tập công thức điều kiện loại 1: If + S + V(s/es), S + will + V0."
    ]
  },
  {
    id: "eng-s25",
    questionId: "eng-q25",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có trạng từ thời gian quá khứ xác định 'last year'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'We' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'visit' là động từ có quy tắc, chỉ cần thêm '-ed' thành 'visited'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (visited) là động từ chia ở quá khứ đúng.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Quên thêm ed hoặc nhầm sang thì hiện tại."
    ],
    reviewSuggestions: [
      "Học thuộc bảng động từ bất quy tắc thông dụng."
    ]
  },
  {
    id: "eng-s26",
    questionId: "eng-q26",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có trạng từ chỉ thời gian quá khứ 'Yesterday'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'our English teacher' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'tell' là động từ bất quy tắc, cột 2 (quá khứ) là 'told'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (told) là động từ bất quy tắc chia quá khứ chính xác.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nhầm lẫn viết tell thành telled do không thuộc bảng bất quy tắc."
    ],
    reviewSuggestions: [
      "Luyện tập phát âm và cách viết của các động từ bất quy tắc thường gặp."
    ]
  },
  {
    id: "eng-s27",
    questionId: "eng-q27",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có dấu hiệu thời gian quá khứ 'two years ago'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'They' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'build' là động từ bất quy tắc, cột 2 (quá khứ) là 'built'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (built) chia đúng thì quá khứ đơn.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nhầm build thành builded."
    ],
    reviewSuggestions: [
      "Ghi nhớ các động từ bất quy tắc kết thúc bằng d chuyển sang t (send->sent, build->built)."
    ]
  },
  {
    id: "eng-s28",
    questionId: "eng-q28",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có dấu hiệu thời gian quá khứ 'last night'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ là 'I'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'do' bất quy tắc chuyển thành 'did' ở quá khứ đơn.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (did) chia đúng động từ ở quá khứ.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nhầm did thành done hoặc has done."
    ],
    reviewSuggestions: [
      "Học cách phân biệt trợ động từ did và động từ chính did."
    ]
  },
  {
    id: "eng-s29",
    questionId: "eng-q29",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu hỏi có chứa trạng ngữ quá khứ 'last year'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'you'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Sử dụng trợ động từ 'did' đặt trước chủ ngữ, động từ chính 'spend' giữ nguyên mẫu.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (did / spend) đúng cấu trúc nghi vấn quá khứ đơn.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Vẫn chia spent dạng quá khứ sau trợ động từ did."
    ],
    reviewSuggestions: [
      "Ghi nhớ: Did + S + V0 trong câu hỏi quá khứ."
    ]
  },
  {
    id: "eng-s30",
    questionId: "eng-q30",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có trạng từ quá khứ 'yesterday' làm dấu mốc.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế đầu là 'I', vế sau là 'it'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Vế 1 dùng phủ định 'didn't' + động từ nguyên mẫu 'go'. Vế 2 dùng khẳng định quá khứ đơn của động từ có quy tắc 'rain' + '-ed' thành 'rained'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (didn't go / rained) đúng cả thể phủ định và khẳng định.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Dùng didn't went (sai vì sau didn't phải dùng V nguyên mẫu)."
    ],
    reviewSuggestions: [
      "Học thuộc công thức câu phủ định quá khứ đơn: S + didn't + V0."
    ]
  },
  {
    id: "eng-s31",
    questionId: "eng-q31",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu mô tả việc nhận kết quả thi và cảm xúc đã diễn ra vào 'yesterday afternoon'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'The students' (số nhiều), vế 2 là 'they'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Vế 1 đi kèm to be quá khứ 'were' cho chủ ngữ số nhiều. Vế 2 động từ 'receive' có quy tắc thêm '-d' thành 'received'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (were / received) chia đúng động từ to be và động từ thường.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Chia sai động từ to be thành was cho chủ ngữ số nhiều students."
    ],
    reviewSuggestions: [
      "Xem lại cách chia động từ to be ở quá khứ: was (số ít) và were (số nhiều)."
    ]
  },
  {
    id: "eng-s32",
    questionId: "eng-q32",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu bắt đầu bằng mệnh đề thời gian quá khứ 'When he was young'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'he' trong quá khứ.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Mặc dù có 'every afternoon' (tần suất), nhưng thói quen này nằm trong quá khứ đã kết thúc nên dùng 'went' (quá khứ của go).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (went) thể hiện thói quen quá khứ chuẩn xác.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Bị lừa bởi 'every afternoon' nên chia thì hiện tại đơn 'goes'."
    ],
    reviewSuggestions: [
      "Lưu ý ngữ cảnh thói quen trong quá khứ (không dùng hiện tại đơn)."
    ]
  },
  {
    id: "eng-s33",
    questionId: "eng-q33",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả chuỗi hành động cất cánh rồi biến mất nối tiếp nhau trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The plane' và 'it' đều là danh từ chỉ vật số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'take' bất quy tắc chuyển thành 'took' ở quá khứ. Động từ 'disappear' có quy tắc thêm '-ed' thành 'disappeared'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (took / disappeared) chia đúng thì quá khứ đơn cho cả hai vế.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nghĩ máy bay đang cất cánh nên chia quá khứ tiếp diễn."
    ],
    reviewSuggestions: [
      "Ghi nhớ cách dùng quá khứ đơn diễn tả các hành động xảy ra nối tiếp nhau."
    ]
  },
  {
    id: "eng-s34",
    questionId: "eng-q34",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mô tả một loạt các hành động viết thư, dán phong bì, và bỏ vào hòm thư xảy ra liên tiếp trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She' thực hiện một chuỗi hành động.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'write' -> 'wrote', 'put' -> 'put' (giữ nguyên), và 'drop' -> 'dropped' (gấp đôi phụ âm cuối p trước khi thêm ed).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (wrote / put / dropped) là các dạng quá khứ chuẩn.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Viết quá khứ của put thành putted hoặc quên gấp đôi p trong dropped."
    ],
    reviewSuggestions: [
      "Học thuộc quy tắc gấp đôi phụ âm cuối đối với động từ một âm tiết trước khi thêm ed."
    ]
  },
  {
    id: "eng-s35",
    questionId: "eng-q35",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'Last Sunday'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'we' (ngôi thứ nhất số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'collect' có quy tắc thêm đuôi '-ed' thành 'collected'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (collected) chia đúng thì Quá khứ đơn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia thì hiện tại đơn collect hoặc tiếp diễn."
    ],
    reviewSuggestions: [
      "Chú ý nhận biết trạng ngữ chỉ thời gian quá khứ để chia đúng."
    ]
  },
  {
    id: "eng-s36",
    questionId: "eng-q36",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'last week'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'I'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'buy' bất quy tắc chuyển thành 'bought' ở quá khứ.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (bought) là dạng quá khứ bất quy tắc chính xác.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm động từ bất quy tắc thành buyed."
    ],
    reviewSuggestions: [
      "Luyện nhớ bảng động từ bất quy tắc thông dụng hàng ngày."
    ]
  },
  {
    id: "eng-s37",
    questionId: "eng-q37",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'three days ago'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'They'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'go' bất quy tắc chuyển thành 'went' ở quá khứ.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (went) là dạng quá khứ đúng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm chia thì hiện tại do bỏ sót từ ago."
    ],
    reviewSuggestions: [
      "Ghi nhớ ago luôn đi với thì quá khứ đơn."
    ]
  },
  {
    id: "eng-s38",
    questionId: "eng-q38",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'yesterday'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ phủ định đi kèm với 'not' + động từ thường 'attend' ở quá khứ là 'did'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (did) đúng cấu trúc phủ định quá khứ đơn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng trợ động từ does ở hiện tại hoặc nhầm dùng was (was không đứng trước động từ thường nguyên mẫu attend)."
    ],
    reviewSuggestions: [
      "Xem lại cấu trúc phủ định quá khứ đơn: S + did + not + V0."
    ]
  },
  {
    id: "eng-s39",
    questionId: "eng-q39",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'Last year' tác động lên cả hai hành động nối tiếp.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'my family' và 'we'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'have' -> 'had' (bất quy tắc), và 'visit' -> 'visited' (có quy tắc).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (had / visited) chia đúng cả hai vế ở quá khứ đơn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Quên không chia động từ thứ hai ở vế sau."
    ],
    reviewSuggestions: [
      "Đảm bảo tính song hành của các động từ khi được nối bởi liên từ 'and'."
    ]
  },
  {
    id: "eng-s40",
    questionId: "eng-q40",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ chỉ thời gian quá khứ 'yesterday morning'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'you'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ quá khứ ở thể phủ định là 'didn't', động từ chính 'join' giữ nguyên mẫu.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (didn't / join) đúng cấu trúc câu hỏi phủ định quá khứ đơn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Vẫn thêm '-ed' vào động từ chính (joined) sau trợ động từ didn't."
    ],
    reviewSuggestions: [
      "Quy tắc: Sau did/didn't động từ chính luôn ở dạng nguyên mẫu."
    ]
  },
  {
    id: "eng-s41",
    questionId: "eng-q41",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mốc thời gian xác định trong quá khứ 'in 2020'.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'The historic storm', vế 2 'the local people'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'hit' bất quy tắc giữ nguyên là 'hit' ở cột 2. Động từ 'rebuild' bất quy tắc chuyển thành 'rebuilt'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (hit / rebuilt) đúng dạng bất quy tắc của cả hai động từ.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Thêm '-ed' thành hitted hoặc rebuilded do không nhớ dạng bất quy tắc."
    ],
    reviewSuggestions: [
      "Học thuộc các động từ có 3 cột giống nhau (hit-hit-hit, cut-cut-cut) và đuôi -ld chuyển thành -lt."
    ]
  },
  {
    id: "eng-s42",
    questionId: "eng-q42",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hành động mất chìa khóa dẫn đến việc phải gọi bạn cùng phòng diễn ra trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'lose' bất quy tắc chuyển thành 'lost'. Động từ 'have' chuyển thành 'had'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (lost / had) chia đúng thì quá khứ đơn cho hai vế.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Viết sai dạng quá khứ của lose thành losted hoặc giữ nguyên vế sau has."
    ],
    reviewSuggestions: [
      "Xem lại sự phối hợp nguyên nhân - kết quả trong chuỗi hành động quá khứ."
    ]
  },
  {
    id: "eng-s43",
    questionId: "eng-q43",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mô tả hai hành động diễn ra liên tiếp ngay sau nhau trong quá khứ (thầy vào lớp và học sinh dừng nói chuyện).",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'the teacher' và 'all the students'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cả hai hành động đều dùng quá khứ đơn: 'enter' -> 'entered', 'stop' -> 'stopped' (gấp đôi p trước khi thêm ed).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (entered / stopped) thể hiện đúng tính chất hành động liên tiếp quá khứ.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nghĩ hành động vào lớp kéo dài nên chia tiếp diễn (was entering)."
    ],
    reviewSuggestions: [
      "Ghi nhớ liên từ 'As soon as' diễn tả hành động xảy ra nối tiếp nhau dùng quá khứ đơn cho cả hai vế."
    ]
  },
  {
    id: "eng-s44",
    questionId: "eng-q44",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả một chuỗi các hành động liên tiếp nối đuôi nhau trong quá khứ (đạp xe, rẽ góc, đi vào sân trường).",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'He' thực hiện chuỗi hành động này.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Tất cả các động từ đều chia quá khứ đơn: 'ride' -> 'rode', 'turn' -> 'turned', 'enter' -> 'entered'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (rode / turned / entered) là đáp án đúng duy nhất.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm lẫn chia tiếp diễn cho một trong các hành động trong chuỗi hành động liên tiếp."
    ],
    reviewSuggestions: [
      "Chuỗi hành động liên tiếp trong quá khứ luôn chia quá khứ đơn cho tất cả động từ."
    ]
  },
  {
    id: "eng-s45",
    questionId: "eng-q45",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có từ cảm thán thu hút sự chú ý 'Listen!' ở đầu câu.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'My sister' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cấu trúc Hiện tại tiếp diễn: am/is/are + V-ing. Chủ ngữ số ít đi với 'is' -> 'is speaking'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (is speaking) chia chính xác theo cấu trúc tiếp diễn.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chia thì hiện tại đơn speaks do không chú ý dấu hiệu Listen!."
    ],
    reviewSuggestions: [
      "Ghi nhớ các dấu hiệu bắt đầu bằng từ cảm thán: Look!, Listen!, Keep silent!."
    ]
  },
  {
    id: "eng-s46",
    questionId: "eng-q46",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có trạng từ chỉ thời điểm hiện tại 'right now'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'We' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ số nhiều đi với 'are' -> 'are waiting'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (are waiting) phù hợp với chủ ngữ số nhiều.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Nhầm dùng to be 'is' cho chủ ngữ số nhiều We."
    ],
    reviewSuggestions: [
      "Học thuộc bảng chia động từ to be theo chủ ngữ."
    ]
  },
  {
    id: "eng-s47",
    questionId: "eng-q47",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu bắt đầu bằng từ cảm thán 'Look!'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The children' (danh từ số nhiều của child).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ số nhiều đi với 'are' -> 'are playing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (are playing) đúng ngữ pháp cho danh từ số nhiều children.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nghĩ children là số ít nên chọn is playing (children là danh từ số nhiều đặc biệt)."
    ],
    reviewSuggestions: [
      "Ghi nhớ các danh từ số nhiều đặc biệt: child -> children, person -> people."
    ]
  },
  {
    id: "eng-s48",
    questionId: "eng-q48",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có mệnh đề mệnh lệnh 'Please be quiet!' và trạng ngữ 'at the moment'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'My father' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ số ít đi với 'is' -> 'is sleeping'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (is sleeping) chia đúng to be số ít.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chia hiện tại đơn sleeps hoặc quá khứ."
    ],
    reviewSuggestions: [
      "Luyện viết cấu trúc tiếp diễn đầy đủ gồm cả to be và V-ing."
    ]
  },
  {
    id: "eng-s49",
    questionId: "eng-q49",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu diễn tả xu hướng đang thay đổi dần dần ở hiện tại với cụm 'warmer and warmer'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The climate of the earth' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'get' thêm -ing phải gấp đôi phụ âm cuối t thành 'getting' -> 'is getting'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (is getting) đúng cấu trúc xu hướng thay đổi.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Viết sai chính tả geting (thiếu một chữ t) hoặc chia hiện tại đơn."
    ],
    reviewSuggestions: [
      "Xem lại quy tắc gấp đôi phụ âm cuối của động từ có một nguyên âm đứng giữa hai phụ âm."
    ]
  },
  {
    id: "eng-s50",
    questionId: "eng-q50",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu chứa cụm thời gian 'These days' chỉ hành động tạm thời dạo gần đây.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Many grade-9 students' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ số nhiều đi với 'are' -> 'are studying'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (are studying) phù hợp với bối cảnh tạm thời.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nghĩ dạo này chỉ thói quen nên chia hiện tại đơn study."
    ],
    reviewSuggestions: [
      "Học cách nhận biết các trạng ngữ chỉ tình huống tạm thời: these days, this week."
    ]
  },
  {
    id: "eng-s51",
    questionId: "eng-q51",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu nói về kế hoạch đã lên lịch cụ thể vào tối nay ('tonight').",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'I'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ 'I' đi với to be 'am' -> 'am reading' (diễn tả tương lai có kế hoạch).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (am reading) thể hiện kế hoạch tương lai chắc chắn.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nghĩ tương lai phải dùng will read mặc dù đã có kế hoạch rõ ràng."
    ],
    reviewSuggestions: [
      "Học cách dùng Hiện tại tiếp diễn để diễn tả lịch trình cá nhân trong tương lai gần."
    ]
  },
  {
    id: "eng-s52",
    questionId: "eng-q52",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hỏi về một hành động đang đập vào mắt người nói lúc đang đối thoại.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'you'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ 'are' đặt trước chủ ngữ, động từ chính thêm -ing thành 'looking'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (are / looking) đúng cấu trúc nghi vấn tiếp diễn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng trợ động từ do/does của thì hiện tại đơn."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc câu hỏi thì Hiện tại tiếp diễn: Am/Is/Are + S + V-ing?."
    ]
  },
  {
    id: "eng-s53",
    questionId: "eng-q53",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu diễn tả sự bực mình, phàn nàn của người nói đi với trạng từ 'always'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'He' (ngôi thứ ba số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hiện tại tiếp diễn phối hợp 'always' diễn tả phàn nàn: is + always + V-ing -> 'is always doing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (is / doing) là cấu trúc phàn nàn duy nhất đúng.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Dùng thì hiện tại đơn 'always does' dẫn đến mất sắc thái biểu thị sự bực mình."
    ],
    reviewSuggestions: [
      "Học cách dùng đặc biệt của always trong thì Hiện tại tiếp diễn để phàn nàn."
    ]
  },
  {
    id: "eng-s54",
    questionId: "eng-q54",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu chứa trạng ngữ 'At present' chỉ thời điểm hiện tại và động từ chỉ sở hữu 'own'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'my brother' (số ít), vế 2 là 'he' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ trạng thái 'own' không chia tiếp diễn -> chia Hiện tại đơn 'owns'. Vế 2 chỉ hành động tạm thời không lái xe lúc này nên chia tiếp diễn 'isn't driving'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (owns / isn't driving) đáp ứng đúng tính chất động từ trạng thái và động từ hành động.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia 'is owning' (lỗi nặng vì own là động từ trạng thái không được chia tiếp diễn)."
    ],
    reviewSuggestions: [
      "Tìm hiểu về Động từ trạng thái (Stative Verbs) không dùng ở các thì tiếp diễn."
    ]
  },
  {
    id: "eng-s55",
    questionId: "eng-q55",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu bắt đầu bằng từ mệnh lệnh 'Keep silent!' chỉ hành động đang xảy ra.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The baby' là số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'sleep' chia ở hiện tại tiếp diễn là 'is sleeping'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is sleeping) đúng cấu trúc thì tiếp diễn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia hiện tại đơn sleeps do quen miệng."
    ],
    reviewSuggestions: [
      "Nhớ rằng các câu mệnh lệnh yêu cầu người khác giữ yên lặng luôn đi với thì tiếp diễn."
    ]
  },
  {
    id: "eng-s56",
    questionId: "eng-q56",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Từ cảm thán hối thúc 'Hurry up!' chỉ hành động đang diễn ra ngay lúc nói.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'The train' là danh từ số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'prepare' bỏ 'e' thêm 'ing' và đi kèm 'is' -> 'is preparing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is preparing) đúng cấu trúc tiếp diễn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia hiện tại đơn prepares."
    ],
    reviewSuggestions: [
      "Ghi nhớ quy tắc bỏ e tận cùng trước khi thêm ing."
    ]
  },
  {
    id: "eng-s57",
    questionId: "eng-q57",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Cụm trạng ngữ thời gian chỉ hiện tại 'At present'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'the students' là danh từ số nhiều.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'do' chia ở tiếp diễn là 'are doing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (are doing) là đáp án chia đúng động từ to be cho số nhiều.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Nhầm chia số ít is doing hoặc chia hiện tại đơn do."
    ],
    reviewSuggestions: [
      "Xác định rõ danh từ số nhiều có tận cùng bằng s để dùng to be phù hợp."
    ]
  },
  {
    id: "eng-s58",
    questionId: "eng-q58",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu bắt đầu bằng từ cảm thán 'Listen!' chỉ hành động đang xảy ra.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Someone' là đại từ bất định (luôn tính là ngôi thứ ba số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'knock' chia số ít ở tiếp diễn là 'is knocking'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is knocking) là đáp án đúng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng to be are knocking vì nghĩ 'someone' là nhiều người."
    ],
    reviewSuggestions: [
      "Các đại từ bất định như someone, everyone, nobody luôn đi với động từ số ít."
    ]
  },
  {
    id: "eng-s59",
    questionId: "eng-q59",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Từ cảm thán 'Look!' hướng sự chú ý vào chiếc xe đang chạy rất nhanh lúc nói.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'That car' là danh từ số ít.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'run' một âm tiết kết thúc bằng phụ âm và trước nó là một nguyên âm, nên nhân đôi phụ âm n thành 'running' -> 'is running'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is running) viết đúng chính tả tiếp diễn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Viết thiếu chữ n (runing) hoặc chia hiện tại đơn."
    ],
    reviewSuggestions: [
      "Ôn lại quy tắc nhân đôi phụ âm cuối trước khi thêm ing."
    ]
  },
  {
    id: "eng-s60",
    questionId: "eng-q60",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Cụm từ chỉ thời gian tạm thời 'these days' (dạo này).",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'She' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Động từ 'study' chia tiếp diễn là 'is studying'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is studying) chia đúng to be và động từ.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia Hiện tại đơn vì nghĩ dạo này là thói quen lâu dài."
    ],
    reviewSuggestions: [
      "Phân biệt thói quen lâu dài (Hiện tại đơn) và thói quen tạm thời/xu hướng dạo gần đây (Hiện tại tiếp diễn)."
    ]
  },
  {
    id: "eng-s61",
    questionId: "eng-q61",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu diễn tả xu hướng biến động tăng dần với từ chỉ thời gian 'this year'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ bắt đầu bằng cụm 'The number of + N số nhiều' (luôn chia động từ số ít), phân biệt với 'A number of' (chia số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chia động từ số ít ở tiếp diễn: 'is increasing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is increasing) chia đúng động từ to be số ít.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chọn 'are increasing' do nhìn thấy danh từ số nhiều 'people' ở gần chỗ trống."
    ],
    reviewSuggestions: [
      "Ghi nhớ quy tắc: 'The number of + N' + V số ít; 'A number of + N' + V số nhiều."
    ]
  },
  {
    id: "eng-s62",
    questionId: "eng-q62",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hỏi về hành động đang mặc áo khoác diễn ra ngay lúc nói, dựa vào vế sau 'It is very warm today'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ là 'you'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ 'are' và động từ 'wearing' -> 'are / wearing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (are / wearing) phù hợp ngữ cảnh đối thoại.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia hiện tại đơn do/wear chỉ thói quen thường xuyên mặc áo."
    ],
    reviewSuggestions: [
      "Quan sát kỹ ngữ cảnh để xem hành động đang diễn ra hay là thói quen lâu dài."
    ]
  },
  {
    id: "eng-s63",
    questionId: "eng-q63",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mệnh đề sau 'which annoys his mother' thể hiện sự bực bội, phiền toái.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'He' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Diễn tả sự phàn nàn dùng Hiện tại tiếp diễn kết hợp với 'always': is + always + V-ing -> 'is / leaving'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (is / leaving) thể hiện chính xác sắc thái phàn nàn.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chọn B (does / leave) vì cho rằng always chỉ đi với Hiện tại đơn."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc: S + am/is/are + always + V-ing dùng để phàn nàn về một thói quen xấu."
    ]
  },
  {
    id: "eng-s64",
    questionId: "eng-q64",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Hiện tại tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Trạng ngữ 'At the moment' tác động lên hai động từ 'think' và 'analyze'.",
        result: "Thì Hiện tại tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Động từ 'think' mang nghĩa tin rằng/nghĩ rằng là động từ trạng thái (không chia tiếp diễn). Động từ 'analyze' (phân tích) là hành động chủ động nên chia tiếp diễn.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chia vế 1 là Hiện tại đơn 'think', vế 2 là Hiện tại tiếp diễn 'am analyzing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (think / am analyzing) chia đúng loại động từ.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia cả hai vế ở tiếp diễn (am thinking / am analyzing) vì thấy 'At the moment'."
    ],
    reviewSuggestions: [
      "Học kỹ nhóm Stative Verbs (like, love, think, believe, understand) không dùng ở thì tiếp diễn khi chỉ trạng thái."
    ]
  },
  {
    id: "eng-s65",
    questionId: "eng-q65",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có thời điểm cụ thể trong quá khứ 'At 8 o'clock yesterday evening'.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'we' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cấu trúc Quá khứ tiếp diễn: was/were + V-ing. Chủ ngữ số nhiều đi với 'were' -> 'were studying'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (were studying) chia đúng to be số nhiều ở quá khứ.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Dùng was studying cho chủ ngữ số nhiều we."
    ],
    reviewSuggestions: [
      "Xem lại cách phân biệt was (số ít) và were (số nhiều)."
    ]
  },
  {
    id: "eng-s66",
    questionId: "eng-q66",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có liên từ 'While' chỉ một hành động đang xảy ra trong quá khứ.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'she' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chủ ngữ số ít đi với 'was' -> 'was reading'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (was reading) chia đúng cho chủ ngữ she.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nhầm chia quá khứ đơn read."
    ],
    reviewSuggestions: [
      "Ghi nhớ cách dùng: While + S + was/were + V-ing."
    ]
  },
  {
    id: "eng-s67",
    questionId: "eng-q67",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu diễn tả một hành động đang xảy ra (chuẩn bị bữa tối) thì hành động khác xen vào (bố về nhà - quá khứ đơn).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'My mother' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hành động kéo dài đang diễn ra dùng Quá khứ tiếp diễn: 'was preparing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (was preparing) chia đúng thì tiếp diễn.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Chia cả hai vế quá khứ đơn hoặc chia vế preparing ở quá khứ đơn."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc xen vào trong quá khứ: S + was/were + V-ing + when + S + V2/ed."
    ]
  },
  {
    id: "eng-s68",
    questionId: "eng-q68",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu hỏi về thời điểm cụ thể trong quá khứ 'at this time yesterday'.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'you'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Trợ động từ quá khứ 'were' cho chủ ngữ 'you' + động từ 'doing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (were / doing) đúng dạng nghi vấn quá khứ tiếp diễn.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Nhầm dùng trợ động từ did của quá khứ đơn."
    ],
    reviewSuggestions: [
      "Học thuộc công thức câu hỏi thì Quá khứ tiếp diễn: Was/Were + S + V-ing?."
    ]
  },
  {
    id: "eng-s69",
    questionId: "eng-q69",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Liên từ 'While' chỉ hai hành động đang xảy ra song song đồng thời trong quá khứ.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'I', vế 2 là 'my little brother' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cấu trúc song song quá khứ dùng Quá khứ tiếp diễn cho cả hai vế: 'was doing' và 'was playing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (was doing / was playing) chia đúng cả hai vế.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chia một vế hoặc cả hai vế ở quá khứ đơn (did / played)."
    ],
    reviewSuggestions: [
      "Luyện tập nhận diện hai hành động diễn ra song song trong quá khứ."
    ]
  },
  {
    id: "eng-s70",
    questionId: "eng-q70",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả trạng thái trang phục đang mặc tại thời điểm nhìn thấy trong quá khứ.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'she' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Dùng Quá khứ tiếp diễn mô tả trạng thái trang phục: 'was wearing'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (was wearing) là lựa chọn mô tả chính xác.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Dùng quá khứ đơn wore chỉ hành động ngắn."
    ],
    reviewSuggestions: [
      "Học cách mô tả trạng thái quần áo, thời tiết tại một thời điểm trong quá khứ."
    ]
  },
  {
    id: "eng-s71",
    questionId: "eng-q71",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hai hành động song song kéo dài đồng thời trong quá khứ (không nghe giảng vì đang nghĩ việc khác).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'The student' (số ít), vế 2 là 'he' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hai hành động song song chia quá khứ tiếp diễn: 'wasn't listening' và 'was thinking'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (wasn't listening / was thinking) phù hợp ngữ cảnh song song.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Dùng quá khứ đơn didn't listen / thought."
    ],
    reviewSuggestions: [
      "Ghi nhớ các liên kết chỉ hành động kéo dài đồng thời."
    ]
  },
  {
    id: "eng-s72",
    questionId: "eng-q72",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu chứa hành động đang diễn ra (đang làm vườn) thì hành động bất chợt xen vào (mất chìa khóa - quá khứ đơn).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ sau while là 'I'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Mệnh đề sau while chia Quá khứ tiếp diễn: 'was working'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (was working) đúng công thức sau while.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Chia quá khứ đơn worked sau while."
    ],
    reviewSuggestions: [
      "Luyện tập phối hợp thì Quá khứ tiếp diễn và Quá khứ đơn."
    ]
  },
  {
    id: "eng-s73",
    questionId: "eng-q73",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả các hành động mô tả ngữ cảnh nền của một câu chuyện trong quá khứ (mặt trời chiếu sáng, chim hót) khi nhân vật thức dậy.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'The sun' (số ít), vế 2 là 'the birds' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Các hành động nền chia Quá khứ tiếp diễn: 'was shining' (bỏ e thêm ing) và 'were singing' (were đi với danh từ số nhiều).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án C (was shining / were singing) chia đúng số ít/số nhiều cho hai chủ ngữ.",
        result: "Đáp án đúng là C"
      }
    ],
    finalAnswer: "C",
    commonMistakes: [
      "Chia quá khứ đơn cho hành động nền (shone / sang)."
    ],
    reviewSuggestions: [
      "Học cách dùng Quá khứ tiếp diễn để mô tả ngữ cảnh nền trong văn kể chuyện."
    ]
  },
  {
    id: "eng-s74",
    questionId: "eng-q74",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Mô tả các hành động đang xảy ra đồng thời tại một thời điểm quá khứ trong lớp học (giảng bài, ghi chép, ngủ).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'the teacher' (số ít), vế 2 là 'the students' (số nhiều), vế 3 là 'one boy' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cấu trúc song song 3 vế dùng Quá khứ tiếp diễn: 'was explaining', 'were taking', 'was sleeping'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án B (was explaining / were taking / was sleeping) thỏa mãn đồng thời cấu trúc 3 vế.",
        result: "Đáp án đúng là B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chia các vế ở quá khứ đơn nối tiếp nhau."
    ],
    reviewSuggestions: [
      "Thực hành viết các câu phức chứa nhiều mệnh đề chia ở các thì quá khứ tiếp diễn song song."
    ]
  },
  {
    id: "eng-s75",
    questionId: "eng-q75",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Câu có thời điểm cụ thể trong quá khứ 'At this time last Sunday'.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ là 'we' (ngôi thứ nhất số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chia Quá khứ tiếp diễn cho số nhiều là 'were watching'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (were watching) đúng ngữ pháp.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia số ít was watching hoặc chia quá khứ đơn."
    ],
    reviewSuggestions: [
      "Xác định rõ chủ ngữ số nhiều we để dùng were."
    ]
  },
  {
    id: "eng-s76",
    questionId: "eng-q76",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Liên từ 'While' diễn tả hành động đang diễn ra (tưới vườn) thì hành động khác xen vào (mưa - quá khứ đơn).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ sau while là 'my father' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hành động đang diễn ra chia Quá khứ tiếp diễn: 'was watering'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was watering) chia đúng to be số ít.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia quá khứ đơn watered sau while."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc xen vào: While + S + was/were + V-ing, S + V2/ed."
    ]
  },
  {
    id: "eng-s77",
    questionId: "eng-q77",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hành động đang tắm (kéo dài) thì hành động chuông điện thoại reo xen vào (quá khứ đơn rang).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ là 'She' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hành động kéo dài chia Quá khứ tiếp diễn: 'was having' (bỏ e thêm ing).",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was having) đúng cấu trúc và chính tả.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng had ở quá khứ đơn cho hành động kéo dài."
    ],
    reviewSuggestions: [
      "Học cách nhận biết hành động kéo dài đang diễn ra bị ngắt quãng bởi hành động ngắn."
    ]
  },
  {
    id: "eng-s78",
    questionId: "eng-q78",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Thời điểm cụ thể trong quá khứ 'at 9:00 PM yesterday'.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ câu hỏi là 'they' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cấu trúc nghi vấn quá khứ tiếp diễn với trợ động từ 'were' đứng trước chủ ngữ 'they'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (were / doing) đúng công thức.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng trợ động từ did của quá khứ đơn hoặc was cho chủ ngữ số nhiều."
    ],
    reviewSuggestions: [
      "Nhớ công thức nghi vấn: Wh- + was/were + S + V-ing?."
    ]
  },
  {
    id: "eng-s79",
    questionId: "eng-q79",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hành động đi dạo dọc bãi biển (đang diễn ra) thì hành động nhặt được vỏ sò xen vào (nhất thời).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 là 'we', vế 2 là 'we'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hành động đi dạo chia tiếp diễn 'were walking'. Hành động tìm thấy là động từ nhận thức/nhất thời chia quá khứ đơn 'found'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (were walking / found) phối hợp đúng các thì.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia cả hai vế ở quá khứ đơn hoặc vế tìm thấy ở tiếp diễn."
    ],
    reviewSuggestions: [
      "Lưu ý động từ find/see thường chỉ hành động ngắn xen vào, ít khi chia tiếp diễn."
    ]
  },
  {
    id: "eng-s80",
    questionId: "eng-q80",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hành động đi bộ dưới phố (kéo dài) thì hành động nhìn thấy bạn xen vào (bất chợt).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ cả hai vế là 'I'.",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hành động ngắn xen vào chia quá khứ đơn 'saw'. Hành động kéo dài sau while chia quá khứ tiếp diễn 'was walking'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (saw / was walking) chia đúng dạng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia 'was seeing' (see là động từ chỉ giác quan không chia tiếp diễn trong ngữ cảnh này)."
    ],
    reviewSuggestions: [
      "Tránh chia tiếp diễn cho động từ chỉ giác quan như see, hear."
    ]
  },
  {
    id: "eng-s81",
    questionId: "eng-q81",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hai hành động nấu ăn và dọn nhà diễn ra song song, đồng thời trong quá khứ nhờ liên từ 'While'.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'my mother' (số ít), vế 2 'my sister' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Cả hai hành động đều chia Quá khứ tiếp diễn: 'was preparing' và 'was cleaning'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was preparing / was cleaning) đúng cấu trúc song song.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia quá khứ đơn cho một trong hai hoặc cả hai vế."
    ],
    reviewSuggestions: [
      "Khi hai hành động kéo dài diễn ra song song độc lập, chia quá khứ tiếp diễn cho cả hai."
    ]
  },
  {
    id: "eng-s82",
    questionId: "eng-q82",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Hai hành động làm bài tập và nghe nhạc diễn ra song song trong quá khứ.",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'I', vế 2 'my sister' (số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Hai hành động song song chia tiếp diễn: 'was doing' và 'was listening'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was doing / was listening) chia đúng.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng quá khứ đơn cho hành động làm bài tập."
    ],
    reviewSuggestions: [
      "Xác định tính kéo dài song song của hai hành động trong quá khứ."
    ]
  },
  {
    id: "eng-s83",
    questionId: "eng-q83",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả ngữ cảnh nền của thời tiết (gió thổi, mưa đập vào cửa) khi hành động thức dậy xen vào ('when we woke up').",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'The wind' (số ít), vế 2 'the rain' (không đếm được, tương đương số ít).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Các hành động mô tả ngữ cảnh chia Quá khứ tiếp diễn: 'was blowing' và 'was beating'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was blowing / was beating) chia đúng ngữ cảnh nền.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Dùng quá khứ đơn cho các hành động nền của thời tiết."
    ],
    reviewSuggestions: [
      "Nhớ rằng thời tiết đang diễn ra làm nền cho sự việc khác thường chia ở tiếp diễn."
    ]
  },
  {
    id: "eng-s84",
    questionId: "eng-q84",
    recognition: "Nhận diện: Câu hỏi thuộc phần chia thì động từ. Dấu hiệu trong câu là thì Quá khứ tiếp diễn.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm dấu hiệu thời gian / ngữ cảnh",
        explanation: "Diễn tả nhiều hành động cùng đang xảy ra song song tại một thời điểm trong quá khứ (hướng dẫn viên giảng bài, du khách chụp ảnh và ghi chép).",
        result: "Thì Quá khứ tiếp diễn"
      },
      {
        order: 2,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ vế 1 'the guide' (số ít), vế 2 'some tourists' (số nhiều), vế 3 'others' (số nhiều).",
        result: "Xác định ngôi của chủ ngữ"
      },
      {
        order: 3,
        title: "Áp dụng công thức chia động từ",
        explanation: "Chia Quá khứ tiếp diễn cho cả 3 vế: 'was explaining', 'were taking', 'were making'.",
        result: "Tìm được động từ chia đúng"
      },
      {
        order: 4,
        title: "Đối chiếu các phương án",
        explanation: "Phương án A (was explaining / were taking / were making) chia đúng tất cả các chủ ngữ.",
        result: "Đáp án đúng là A"
      }
    ],
    finalAnswer: "A",
    commonMistakes: [
      "Chia quá khứ đơn cho vế chụp ảnh hoặc ghi chép."
    ],
    reviewSuggestions: [
      "Thực hành cấu trúc song song nhiều vế diễn tả các hoạt động cùng diễn ra."
    ]
  },
  {
    id: "eng-s85",
    questionId: "eng-q85",
    recognition: "Chỗ trống đứng sau tính từ \"useful\" (hữu ích) và trước cụm từ \"of the 20th century\". Ngoài ra, phía trước có cấu trúc \"one of the most...\" (một trong những...) chỉ số nhiều.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định loại từ cần điền",
        explanation: "Đứng sau tính từ để làm chủ thể cho câu cần một danh từ. Cấu trúc \"one of the + N (số nhiều)\" yêu cầu danh từ này phải ở dạng số nhiều.",
        result: "Danh từ số nhiều"
      },
      {
        order: 2,
        title: "Biến đổi từ gốc (INVENT)",
        explanation: "Từ gốc \"invent\" (động từ: phát minh) có dạng danh từ chỉ vật là \"invention\" (sự phát minh). Chuyển sang số nhiều bằng cách thêm s ta được \"inventions\".",
        result: "inventions"
      }
    ],
    finalAnswer: "inventions",
    commonMistakes: [
      "Viết sai chính tả hoặc quên thêm đuôi số nhiều \"s\", chỉ viết là \"invention\" (mất điểm hoàn toàn)."
    ],
    reviewSuggestions: [
      "Học thuộc gia đình từ của invent: invent -> inventor (người phát minh) -> invention (sự phát minh) -> inventive (sáng tạo)."
    ]
  },
  {
    id: "eng-s86",
    questionId: "eng-q86",
    recognition: "Chỗ trống đứng sau cấu trúc \"spend time\" (dành thời gian cho việc gì).",
    detailedSteps: [
      {
        order: 1,
        title: "Nhận diện công thức cấu trúc",
        explanation: "Công thức cấu trúc dành thời gian là: S + spend + time + V-ing.",
        result: "Động từ dạng V-ing"
      },
      {
        order: 2,
        title: "Chia động từ (STUDY)",
        explanation: "Động từ \"study\" thêm đuôi -ing thành \"studying\".",
        result: "studying"
      }
    ],
    finalAnswer: "studying",
    commonMistakes: [
      "Nhầm sang to-V (to study) hoặc chia động từ ở quá khứ."
    ],
    reviewSuggestions: [
      "Ghi nhớ: spend + time/money + V-ing, waste + time/money + V-ing."
    ]
  },
  {
    id: "eng-s87",
    questionId: "eng-q87",
    recognition: "Chỗ trống đứng trước danh từ \"beauty\" (vẻ đẹp) và sau mạo từ \"the\".",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định loại từ cần điền",
        explanation: "Bổ nghĩa cho danh từ \"beauty\" đứng sau, ta cần điền một tính từ.",
        result: "Tính từ (Adjective)"
      },
      {
        order: 2,
        title: "Biến đổi từ gốc (NATURE)",
        explanation: "Danh từ \"nature\" (tự nhiên) có tính từ tương ứng là \"natural\" (thuộc về tự nhiên).",
        result: "natural"
      }
    ],
    finalAnswer: "natural",
    commonMistakes: [
      "Nhầm lẫn viết thành trạng từ naturally."
    ],
    reviewSuggestions: [
      "Ghi nhớ gia đình từ của nature: nature -> natural -> naturally -> naturalist (nhà tự nhiên học)."
    ]
  },
  {
    id: "eng-s88",
    questionId: "eng-q88",
    recognition: "Chỗ trống đứng sau trạng từ mức độ \"very\" và động từ liên kết \"was\" (be). Phía sau có mệnh đề kết quả \"so we had to cancel our picnic\" (vì vậy chúng tôi phải hủy buổi dã ngoại).",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định loại từ cần điền",
        explanation: "Sau động từ liên kết was/be và trạng từ very là một tính từ.",
        result: "Tính từ (Adjective)"
      },
      {
        order: 2,
        title: "Xác định ý nghĩa từ loại",
        explanation: "Gốc từ \"please\" (vui lòng) có các tính từ như \"pleasant\" (dễ chịu) và \"unpleasant\" (khó chịu). Vì phải hủy dã ngoại, thời tiết phải rất xấu/khó chịu. Ta chọn dạng phủ định \"unpleasant\".",
        result: "unpleasant"
      }
    ],
    finalAnswer: "unpleasant",
    commonMistakes: [
      "Điền tính từ khẳng định pleasant dẫn đến câu bị mâu thuẫn ý nghĩa.",
      "Viết sai tiền tố phủ định."
    ],
    reviewSuggestions: [
      "Luyện tập nhận diện tiền tố trái nghĩa: pleasant -> unpleasant, happy -> unhappy, polite -> impolite."
    ]
  },
  {
    id: "eng-s89",
    questionId: "eng-q89",
    recognition: "Chỗ trống đứng sau mạo từ \"a\", đứng trước danh từ ghép \"football player\" (cầu thủ bóng đá).",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định loại từ cần điền",
        explanation: "Đứng trước cụm danh từ để bổ nghĩa, ta cần điền một tính từ.",
        result: "Tính từ (Adjective)"
      },
      {
        order: 2,
        title: "Biến đổi từ gốc (PROFESSION)",
        explanation: "Danh từ \"profession\" (nghề nghiệp) có tính từ tương ứng là \"professional\" (chuyên nghiệp).",
        result: "professional"
      }
    ],
    finalAnswer: "professional",
    commonMistakes: [
      "Viết sai đuôi tính từ hoặc nhầm sang trạng từ professionally."
    ],
    reviewSuggestions: [
      "Ghi nhớ: profession -> professional -> professionally."
    ]
  },
  {
    id: "eng-s90",
    questionId: "eng-q90",
    recognition: "Câu kiểm tra giới từ đi kèm sau tính từ \"interested\".",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định cấu trúc giới từ",
        explanation: "Ta có cụm tính từ cố định: be interested + in (thích thú/quan tâm đến việc gì).",
        result: "Giới từ in"
      }
    ],
    finalAnswer: "B. in",
    commonMistakes: [
      "Dịch nghĩa tiếng Việt \"quan tâm VỚI\" dẫn đến chọn with hoặc at."
    ],
    reviewSuggestions: [
      "Ôn tập các cụm tính từ + giới từ thường gặp."
    ]
  },
  {
    id: "eng-s91",
    questionId: "eng-q91",
    recognition: "Chỗ trống đứng trước cụm từ thời gian cụ thể \"Sunday, June 10th\" (ngày Chủ nhật, mùng 10 tháng 6).",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định giới từ chỉ thời gian",
        explanation: "Quy tắc giới từ thời gian: dùng \"on\" trước các thứ trong tuần và các ngày cụ thể có ngày-tháng.",
        result: "Giới từ on"
      }
    ],
    finalAnswer: "B. on",
    commonMistakes: [
      "Thấy có tháng June nên vội vàng chọn in (in June), bỏ quên mất có ngày 10th đứng trước/sau hoặc thứ Sunday."
    ],
    reviewSuggestions: [
      "Quy tắc ghi nhớ: in + tháng/năm, on + thứ/ngày, at + giờ."
    ]
  },
  {
    id: "eng-s92",
    questionId: "eng-q92",
    recognition: "Xác nhận thông tin địa điểm của trường THPT Nguyen Du.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm thông tin trong bài đọc",
        explanation: "Bài đọc viết: \"My school, THPT Nguyen Du, was established in Hoai Nhon, Binh Dinh.\"",
        result: "Địa điểm: Hoai Nhon"
      },
      {
        order: 2,
        title: "Đối chiếu với phát biểu",
        explanation: "Phát biểu ghi trường nằm ở Quy Nhon city. Đây là thông tin sai lệch so với bài đọc.",
        result: "False"
      }
    ],
    finalAnswer: "B. False",
    commonMistakes: [
      "Không đọc kỹ tên huyện/thành phố, nhầm lẫn Binh Dinh thì phải đi với Quy Nhơn."
    ],
    reviewSuggestions: [
      "Luyện tập so khớp từ khóa địa điểm cụ thể."
    ]
  },
  {
    id: "eng-s93",
    questionId: "eng-q93",
    recognition: "Xác nhận số lượng học sinh lớp 10 mới trúng tuyển năm 2024-2025.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm thông tin trong bài đọc",
        explanation: "Bài đọc viết: \"In the school year 2024-2025, the school admitted 437 tenth-graders.\"",
        result: "Số lượng: 437"
      },
      {
        order: 2,
        title: "Đối chiếu phát biểu",
        explanation: "Phát biểu ghi: \"admitted 437 new tenth-grade students\". Ý này hoàn toàn trùng khớp.",
        result: "True"
      }
    ],
    finalAnswer: "A. True",
    commonMistakes: [
      "Nhầm số 437 với tổng số 1,200 học sinh của trường."
    ],
    reviewSuggestions: [
      "Đọc kỹ và đối chiếu số lượng với danh từ đi kèm."
    ]
  },
  {
    id: "eng-s94",
    questionId: "eng-q94",
    recognition: "Câu gốc dùng liên từ nối \"but\" chỉ sự đối lập giữa hai mệnh đề: \"Anh ấy mệt\" và \"Anh ấy hoàn thành bài tập\". Đề yêu cầu viết lại dùng \"Although\" (Mặc dù).",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định cấu trúc Although",
        explanation: "Although + Clause 1, Clause 2 (không dùng but ở giữa hai mệnh đề).",
        result: "Although + Mệnh đề chỉ sự nhượng bộ"
      },
      {
        order: 2,
        title: "Biến đổi và viết câu",
        explanation: "Đưa mệnh đề nguyên nhân đối lập ra sau Although và bỏ \"but\" ở câu gốc: \"Although he was tired, he finished his homework.\"",
        result: "Although he was tired, he finished his homework."
      }
    ],
    finalAnswer: "Although he was tired, he finished his homework.",
    commonMistakes: [
      "Vẫn giữ nguyên từ \"but\" trong câu viết lại (lỗi cực kỳ phổ biến)."
    ],
    reviewSuggestions: [
      "Ghi nhớ: Although... và ...but không được đi cùng nhau trong một câu."
    ]
  },
  {
    id: "eng-s95",
    questionId: "eng-q95",
    recognition: "Câu gốc chỉ lý do bằng cụm danh từ sau because of: \"because of his illness\" (vì bệnh của anh ấy). Yêu cầu viết lại bằng liên từ \"because\" (theo sau là một mệnh đề gồm chủ-vị).",
    detailedSteps: [
      {
        order: 1,
        title: "Đổi cụm danh từ sang mệnh đề",
        explanation: "Cụm \"his illness\" có chủ ngữ tương ứng là \"he\", tính từ mô tả là \"ill\" hoặc \"sick\". Động từ to be ở quá khứ đơn vì vế trước là \"couldn't\".",
        result: "he was ill / he was sick"
      }
    ],
    finalAnswer: "he was ill",
    commonMistakes: [
      "Chia sai thì động từ to be (ví dụ dùng is thay vì was).",
      "Viết sai tính từ illness (illness là danh từ, sau be phải dùng tính từ ill)."
    ],
    reviewSuggestions: [
      "Luyện cách chuyển đổi: because of + N/V-ing <-> because + S + V."
    ]
  },
  {
    id: "eng-s96",
    questionId: "eng-q96",
    recognition: "Câu gốc là câu trực tiếp: \"I know the way,\" he said to me. Yêu cầu chuyển sang câu tường thuật dùng động từ giới hạn trong ngoặc (KNEW), viết từ 3-5 từ.",
    detailedSteps: [
      {
        order: 1,
        title: "Áp dụng quy tắc câu tường thuật",
        explanation: "Đổi ngôi \"I\" thành \"he\", lùi thì động từ \"know\" (hiện tại đơn) sang quá khứ đơn \"knew\".",
        result: "he knew the way"
      },
      {
        order: 2,
        title: "Đếm số từ",
        explanation: "Cụm \"he knew the way\" gồm đúng 4 từ, thỏa mãn điều kiện từ 3-5 từ.",
        result: "4 từ"
      }
    ],
    finalAnswer: "he knew the way",
    commonMistakes: [
      "Quên lùi thì động từ, giữ nguyên là know.",
      "Viết quá dài vượt quá 5 từ."
    ],
    reviewSuggestions: [
      "Ôn quy tắc chuyển đổi câu trực tiếp sang gián tiếp: đổi ngôi, lùi thì, đổi trạng ngữ."
    ]
  },
  {
    id: "eng-s97",
    questionId: "eng-q97",
    recognition: "Đề bài cho hai câu đơn: \"This is the computer. It is sometimes called a PC.\" và yêu cầu kết hợp dùng đại từ quan hệ \"which\", khống chế từ 3-5 từ.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định từ lặp và thay thế",
        explanation: "Từ lặp \"It\" ở câu 2 đại diện cho \"the computer\" ở câu 1. Thay \"It\" bằng đại từ quan hệ \"which\" và ghép hai câu.",
        result: "This is the computer which is sometimes called a PC."
      },
      {
        order: 2,
        title: "Xác định phần điền vào chỗ trống",
        explanation: "Đề bài đã cho sẵn: \"This is the computer...\". Vậy phần cần viết thêm bắt đầu từ \"which\" cho đến trước từ \"PC\". Cụm đó là: \"which is sometimes called a\".",
        result: "which is sometimes called a (5 từ)"
      }
    ],
    finalAnswer: "which is sometimes called a",
    commonMistakes: [
      "Viết lại cả câu đầy đủ dẫn đến thừa từ.",
      "Vẫn giữ nguyên đại từ \"it\" sau khi đã có \"which\" (ví dụ: which it is...)."
    ],
    reviewSuggestions: [
      "Ôn tập cách kết hợp câu dùng đại từ quan hệ who, whom, which, that."
    ]
  },
  {
    id: "eng-s98",
    questionId: "eng-q98",
    recognition: "Câu có lỗi sai về cách dùng tính từ đuôi -ed và -ing.",
    detailedSteps: [
      {
        order: 1,
        title: "Phân tích tính chất của tính từ trong câu",
        explanation: "Chủ ngữ là \"he\" (người). Tính từ đứng sau felt mô tả cảm xúc của anh ấy sau một ngày làm việc mệt mỏi. Cần dùng tính từ đuôi -ed chỉ cảm nhận.",
        result: "tiring -> tired"
      }
    ],
    finalAnswer: "tired",
    commonMistakes: [
      "Sửa lỗi \"tiring\" đầu tiên ở cụm \"a tiring day\". Cụm này đúng vì mô tả tính chất của một ngày gây mệt mỏi."
    ],
    reviewSuggestions: [
      "Phân biệt: tính từ -ing chỉ bản chất/tính chất của vật/sự việc; tính từ -ed chỉ cảm xúc/cảm nhận của con người."
    ]
  },
  {
    id: "eng-s99",
    questionId: "eng-q99",
    recognition: "Câu có lỗi sai về giới từ chỉ thời gian trong thì Hiện tại hoàn thành.",
    detailedSteps: [
      {
        order: 1,
        title: "Phân tích trạng ngữ thời gian",
        explanation: "Cụm \"five years\" (5 năm) là một khoảng thời gian. Trong thì hiện tại hoàn thành, giới từ đi với khoảng thời gian là \"for\", còn \"since\" đi với mốc thời gian.",
        result: "since -> for"
      }
    ],
    finalAnswer: "for",
    commonMistakes: [
      "Sửa động từ \"has lived\" thành quá khứ."
    ],
    reviewSuggestions: [
      "Ghi nhớ phân biệt: since + mốc thời gian (ví dụ: since 2010), for + khoảng thời gian (ví dụ: for 10 years)."
    ]
  },
  {
    id: "eng-s100",
    questionId: "eng-q100",
    recognition: "Sắp xếp các câu để làm cuộc trò chuyện logic.",
    detailedSteps: [
      {
        order: 1,
        title: "Tìm câu mở đầu",
        explanation: "Câu B (\"Hi, Nam. Where are you going?\") là lời chào và câu hỏi tự nhiên mở đầu hội thoại.",
        result: "B đứng đầu"
      },
      {
        order: 2,
        title: "Tìm câu phản hồi",
        explanation: "Nam phản hồi lại lời chào của Mai ở câu D (\"Hi, Mai. I'm going to borrow some books.\").",
        result: "Thứ tự: B -> D"
      },
      {
        order: 3,
        title: "Liên kết ý tiếp theo",
        explanation: "Mai hỏi tiếp và làm rõ địa điểm ở câu A (\"Sure. I am going to the Hoai Nhon library.\"). Sau đó Nam phản hồi bằng câu C để kết thúc (\"Oh, can I go with you?...\").",
        result: "Thứ tự đầy đủ: B -> D -> A -> C"
      }
    ],
    finalAnswer: "BDAC",
    commonMistakes: [
      "Nhầm lẫn giữa câu D và A làm câu chuyện rời rạc."
    ],
    reviewSuggestions: [
      "Luyện tập tìm các cặp câu Hỏi - Đáp liên tiếp."
    ]
  },
  {
    id: "eng-s101",
    questionId: "eng-q101",
    recognition: "Câu hỏi yêu cầu tìm ý chính (main topic) của bài đọc.",
    detailedSteps: [
      {
        order: 1,
        title: "Đọc và tóm tắt ý chính của từng câu",
        explanation: "Câu 1: English is the official language. Câu 2: Millions speak English. Câu 3: Learning English helps students... Câu 4: Schools in Binh Dinh emphasize English. Tất cả đều xoay quanh vai trò và sự phổ biến của tiếng Anh.",
        result: "Chủ đề: Sự quan trọng và phổ biến của tiếng Anh"
      },
      {
        order: 2,
        title: "Đối chiếu các phương án",
        explanation: "A nói về lịch sử Bình Định (sai); C nói về cách học ở Nguyễn Du (chỉ là ví dụ nhỏ); D nói về số lượng trường học (sai). Chỉ có B là chủ đề bao quát chính xác.",
        result: "Chọn B"
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chọn phương án C vì thấy có nhắc đến trường THPT Nguyễn Du ở cuối bài, nhưng đó chỉ là một chi tiết minh họa chứ không phải ý chính của cả bài."
    ],
    reviewSuggestions: [
      "Học cách tìm câu chủ đề (topic sentence) thường nằm ở đầu hoặc cuối bài để xác định main idea."
    ]
  },
  {
    id: "eng-s102",
    questionId: "eng-q102",
    recognition: "Có trạng từ tần suất 'usually' chỉ thói quen, hành động lặp đi lặp lại ở hiện tại.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì của câu",
        explanation: "Từ khóa 'usually' (thường xuyên) là dấu hiệu nhận biết tiêu biểu của thì Hiện tại đơn.",
        result: "Thì Hiện tại đơn"
      },
      {
        order: 2,
        title: "Chia động từ theo chủ ngữ",
        explanation: "Chủ ngữ là đại từ 'It' (ngôi thứ ba số ít), động từ 'rain' cần thêm đuôi -s.",
        result: "It + rains"
      }
    ],
    finalAnswer: "B. rains",
    commonMistakes: [
      "Nhầm lẫn chia động từ nguyên mẫu (rain) cho chủ ngữ số ít."
    ],
    reviewSuggestions: [
      "Ghi nhớ các trạng từ chỉ tần suất hiện tại đơn và quy tắc thêm -s/-es."
    ]
  },
  {
    id: "eng-s103",
    questionId: "eng-q103",
    recognition: "Có trạng từ tần suất 'often' chỉ thói quen ở hiện tại.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chủ ngữ",
        explanation: "Dấu hiệu 'often' chỉ thì Hiện tại đơn. Chủ ngữ 'My mother' là danh từ số ít.",
        result: "Hiện tại đơn, chủ ngữ số ít"
      },
      {
        order: 2,
        title: "Chia động từ",
        explanation: "Động từ 'cook' thêm đuôi -s đi kèm chủ ngữ số ít 'My mother'.",
        result: "My mother + cooks"
      }
    ],
    finalAnswer: "A. cooks",
    commonMistakes: [
      "Chọn động từ nguyên mẫu 'cook' do quên chia động từ ngôi thứ ba số ít."
    ],
    reviewSuggestions: [
      "Ôn tập cách chia động từ với danh từ số ít chỉ người."
    ]
  },
  {
    id: "eng-s104",
    questionId: "eng-q104",
    recognition: "Diễn tả thực tế hiển nhiên hoặc thói quen của học sinh tại trường học.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ",
        explanation: "Chủ ngữ 'Students at our school' tập trung vào danh từ chính 'Students' (số nhiều).",
        result: "Chủ ngữ số nhiều"
      },
      {
        order: 2,
        title: "Chia động từ ở hiện tại đơn",
        explanation: "Với chủ ngữ số nhiều, động từ ở thì hiện tại đơn giữ nguyên dạng nguyên mẫu.",
        result: "Students + keep"
      }
    ],
    finalAnswer: "C. keep",
    commonMistakes: [
      "Nhầm lẫn 'our school' (số ít) là chủ ngữ chính và chia động từ số ít 'keeps'."
    ],
    reviewSuggestions: [
      "Luyện tập xác định danh từ chính đứng trước giới từ trong cụm chủ ngữ dài."
    ]
  },
  {
    id: "eng-s105",
    questionId: "eng-q105",
    recognition: "Có từ tín hiệu 'usually' chỉ thói quen đi học.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ đi với chủ ngữ số ít",
        explanation: "Chủ ngữ 'He' (ngôi thứ ba số ít) đi với động từ thêm -es cho các từ kết thúc bằng 'o'.",
        result: "He + goes"
      }
    ],
    finalAnswer: "B. goes",
    commonMistakes: [
      "Nhầm lẫn viết dạng nguyên thể 'go' hoặc chia quá khứ 'went' khi có 'usually'."
    ],
    reviewSuggestions: [
      "Ôn quy tắc thêm -es sau các động từ tận cùng bằng o, x, s, z, ch, sh."
    ]
  },
  {
    id: "eng-s106",
    questionId: "eng-q106",
    recognition: "Dấu hiệu 'every Monday and Friday' chỉ lịch trình lặp lại vào các thứ hai và thứ sáu.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ và động từ",
        explanation: "Chủ ngữ 'They' (số nhiều) đi kèm động từ nguyên mẫu 'study' ở thì Hiện tại đơn.",
        result: "They + study"
      }
    ],
    finalAnswer: "A. study",
    commonMistakes: [
      "Nhầm lẫn chia 'studies' (dành cho chủ ngữ số ít)."
    ],
    reviewSuggestions: [
      "Nhớ quy tắc động từ nguyên mẫu đi với các đại từ nhân xưng số nhiều (They, We, You)."
    ]
  },
  {
    id: "eng-s107",
    questionId: "eng-q107",
    recognition: "Dấu hiệu 'every morning' (mỗi sáng) chỉ thói quen ở hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ theo chủ ngữ số ít",
        explanation: "Chủ ngữ 'My father' (số ít) đi với động từ thêm -s là 'drinks'.",
        result: "My father + drinks"
      }
    ],
    finalAnswer: "B. drinks",
    commonMistakes: [
      "Chọn dạng nguyên thể 'drink' hoặc chia thì tiếp diễn khi nói về thói quen cố định."
    ],
    reviewSuggestions: [
      "Phân biệt rõ cách dùng thì Hiện tại đơn (thói quen) và Hiện tại tiếp diễn."
    ]
  },
  {
    id: "eng-s108",
    questionId: "eng-q108",
    recognition: "Có trạng từ tần suất 'often' chỉ hành động thường xuyên.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ đi kèm cụm 'take part in'",
        explanation: "Chủ ngữ 'We' (số nhiều) đi với động từ nguyên mẫu 'take' trong cụm 'take part in' (tham gia).",
        result: "We + take"
      }
    ],
    finalAnswer: "C. take",
    commonMistakes: [
      "Dùng động từ số ít 'takes' hoặc chia quá khứ 'took' do không chú ý trạng từ 'often'."
    ],
    reviewSuggestions: [
      "Học các cụm từ cố định (collocations) phổ biến như take part in, join in."
    ]
  },
  {
    id: "eng-s109",
    questionId: "eng-q109",
    recognition: "Diễn tả hành động thói quen lặp lại sau giờ học hàng ngày.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia cụm động từ 'look after'",
        explanation: "Chủ ngữ 'She' (số ít) đi kèm động từ thêm -s: 'looks after' (chăm sóc).",
        result: "She + looks after"
      }
    ],
    finalAnswer: "B. looks after",
    commonMistakes: [
      "Quên thêm -s vào động từ chính 'look' trong cụm động từ ghép."
    ],
    reviewSuggestions: [
      "Luyện chia động từ cho các cụm phrasal verbs thông dụng."
    ]
  },
  {
    id: "eng-s110",
    questionId: "eng-q110",
    recognition: "Diễn tả tính chất, chức năng khách quan của buổi hội thảo (sự thật hiển nhiên).",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ ở hiện tại đơn",
        explanation: "Chủ ngữ 'This workshop' (Buổi hội thảo này - danh từ số ít) đi với động từ thêm -s là 'shows'.",
        result: "This workshop + shows"
      }
    ],
    finalAnswer: "B. shows",
    commonMistakes: [
      "Nhầm lẫn chia động từ nguyên mẫu 'show' hoặc quá khứ 'showed' khi mô tả công dụng cố định."
    ],
    reviewSuggestions: [
      "Ôn tập cách dùng thì Hiện tại đơn cho sự thật khách quan và chức năng của sự vật."
    ]
  },
  {
    id: "eng-s111",
    questionId: "eng-q111",
    recognition: "Có trạng từ 'usually' chỉ lịch trình, thói quen.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ chính",
        explanation: "Chủ ngữ 'Our professional cooks' có danh từ chính là 'cooks' (đầu bếp - số nhiều).",
        result: "Chủ ngữ số nhiều"
      },
      {
        order: 2,
        title: "Chia động từ",
        explanation: "Đi với chủ ngữ số nhiều ở thì hiện tại đơn, động từ 'give' giữ nguyên mẫu.",
        result: "cooks + give"
      }
    ],
    finalAnswer: "A. give",
    commonMistakes: [
      "Bị nhầm từ 'cooks' là động từ chia số ít của 'cook' thay vì danh từ chỉ người số nhiều."
    ],
    reviewSuggestions: [
      "Phân biệt danh từ 'cook' (đầu bếp) và động từ 'cook' (nấu ăn)."
    ]
  },
  {
    id: "eng-s112",
    questionId: "eng-q112",
    recognition: "Diễn tả một đặc điểm, đặc tính phổ quát của một thành phố xanh ở hiện tại.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ và động từ",
        explanation: "Chủ ngữ 'A green city' (số ít) đi kèm động từ chia số ít thêm -s: 'uses'.",
        result: "A green city + uses"
      }
    ],
    finalAnswer: "B. uses",
    commonMistakes: [
      "Chọn động từ nguyên mẫu 'use' hoặc nhầm sang tiếp diễn."
    ],
    reviewSuggestions: [
      "Xác định mạo từ 'A/An' biểu thị một danh từ số ít làm chủ ngữ."
    ]
  },
  {
    id: "eng-s113",
    questionId: "eng-q113",
    recognition: "Diễn tả lợi ích thực tế khách quan của phương tiện giao thông công cộng.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ không đếm được",
        explanation: "Chủ ngữ 'Public transport' (phương tiện công cộng) là danh từ không đếm được, tương đương ngôi thứ ba số ít.",
        result: "Chủ ngữ ngôi thứ ba số ít"
      },
      {
        order: 2,
        title: "Chia động từ",
        explanation: "Động từ 'help' thêm -s tạo thành 'helps'.",
        result: "helps"
      }
    ],
    finalAnswer: "B. helps",
    commonMistakes: [
      "Nghĩ rằng phương tiện công cộng bao gồm nhiều xe nên chia động từ nguyên mẫu 'help'."
    ],
    reviewSuggestions: [
      "Học danh sách các danh từ không đếm được phổ biến luôn chia động từ số ít."
    ]
  },
  {
    id: "eng-s114",
    questionId: "eng-q114",
    recognition: "Diễn tả thực tế địa lý tồn tại ở hiện tại của đảo Phú Quốc.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ có/sở hữu",
        explanation: "Chủ ngữ 'Phu Quoc' là danh từ riêng số ít, đi với dạng động từ 'has' (có).",
        result: "Phu Quoc + has"
      }
    ],
    finalAnswer: "B. has",
    commonMistakes: [
      "Dùng 'have' cho danh từ số ít hoặc dùng 'is having' (đang có) vốn không dùng cho trạng thái sở hữu cố định."
    ],
    reviewSuggestions: [
      "Ôn quy tắc chia động từ bất quy tắc 'have/has' ở hiện tại đơn."
    ]
  },
  {
    id: "eng-s115",
    questionId: "eng-q115",
    recognition: "Diễn tả sự thật địa lý về đảo Lý Sơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ to be",
        explanation: "Chủ ngữ 'Ly Son' là danh từ số ít, dạng to be tương ứng ở hiện tại đơn là 'is'.",
        result: "Ly Son + is"
      }
    ],
    finalAnswer: "C. is",
    commonMistakes: [
      "Chọn dạng nguyên thể 'be' hoặc chia quá khứ 'was' dù đảo vẫn đang tồn tại ở hiện tại."
    ],
    reviewSuggestions: [
      "Ghi nhớ cách chia động từ to be (am, is, are) theo các nhóm chủ ngữ."
    ]
  },
  {
    id: "eng-s116",
    questionId: "eng-q116",
    recognition: "Diễn tả đặc điểm thực tế hiển nhiên ở hiện tại của thành phố Barcelona.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ có/sở hữu",
        explanation: "Chủ ngữ 'Barcelona' là danh từ riêng số ít, đi với 'has' biểu thị tính chất sở hữu.",
        result: "Barcelona + has"
      }
    ],
    finalAnswer: "B. has",
    commonMistakes: [
      "Chọn 'have' do nhầm lẫn danh từ riêng chỉ địa điểm là số nhiều."
    ],
    reviewSuggestions: [
      "Khắc sâu quy tắc danh từ riêng chỉ tên địa danh luôn chia động từ số ít."
    ]
  },
  {
    id: "eng-s117",
    questionId: "eng-q117",
    recognition: "Sự hòa hợp chủ ngữ bắt đầu bằng cấu trúc 'The number of'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định quy tắc 'The number of'",
        explanation: "Khác với 'A number of' (chia số nhiều), cấu trúc 'The number of + danh từ số nhiều' chỉ số lượng cụ thể và luôn đi với động từ số ít.",
        result: "The number of + N số nhiều -> Động từ số ít"
      },
      {
        order: 2,
        title: "Chia động từ to be",
        explanation: "Động từ to be số ít phù hợp ở hiện tại đơn là 'is'.",
        result: "is"
      }
    ],
    finalAnswer: "B. is",
    commonMistakes: [
      "Nhìn thấy 'students' số nhiều và vội vàng chọn 'are'."
    ],
    reviewSuggestions: [
      "Học thuộc lòng sự khác biệt giữa 'The number of' (động từ số ít) và 'A number of' (động từ số nhiều)."
    ]
  },
  {
    id: "eng-s118",
    questionId: "eng-q118",
    recognition: "Diễn tả thói quen tiết kiệm tiền của người dân trong làng.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ chính",
        explanation: "Chủ ngữ 'Many people in my village' tập trung vào danh từ chính đứng trước giới từ: 'Many people' (số nhiều).",
        result: "Chủ ngữ số nhiều"
      },
      {
        order: 2,
        title: "Chia cụm động từ 'cut down on'",
        explanation: "Chủ ngữ số nhiều đi với động từ nguyên mẫu: 'cut down on' (cắt giảm).",
        result: "Many people + cut down on"
      }
    ],
    finalAnswer: "B. cut down on",
    commonMistakes: [
      "Chọn 'cuts down on' do nhầm chủ ngữ là 'my village' số ít."
    ],
    reviewSuggestions: [
      "Chú ý danh từ đứng trước cụm giới từ 'in...' để chia động từ chính xác."
    ]
  },
  {
    id: "eng-s119",
    questionId: "eng-q119",
    recognition: "Có trạng từ chỉ tần suất 'every day' (mỗi ngày) ở hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ theo chủ ngữ số ít",
        explanation: "Chủ ngữ 'My teacher' (số ít) đi với động từ thêm -s: 'encourages' (khuyến khích).",
        result: "My teacher + encourages"
      }
    ],
    finalAnswer: "B. encourages",
    commonMistakes: [
      "Dùng động từ nguyên mẫu 'encourage' hoặc chia thì quá khứ 'encouraged'."
    ],
    reviewSuggestions: [
      "Luyện tập chia động từ ngôi thứ ba số ít ở hiện tại đơn."
    ]
  },
  {
    id: "eng-s120",
    questionId: "eng-q120",
    recognition: "Câu hỏi nghi vấn Có/Không (Yes/No Question) ở hiện tại đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định chủ ngữ ngôi thứ ba số ít",
        explanation: "Chủ ngữ câu hỏi là 'your sister' (chị/em gái bạn - danh từ số ít).",
        result: "Chủ ngữ số ít"
      },
      {
        order: 2,
        title: "Chọn trợ động từ phù hợp",
        explanation: "Trợ động từ dùng cho chủ ngữ số ít ở dạng nghi vấn hiện tại đơn là 'Does'.",
        result: "Does your sister..."
      }
    ],
    finalAnswer: "B. Does",
    commonMistakes: [
      "Chọn trợ động từ 'Do' hoặc dùng 'Is' (vì nhầm lẫn cấu trúc câu hỏi có động từ thường 'help')."
    ],
    reviewSuggestions: [
      "Ghi nhớ cấu trúc câu hỏi nghi vấn hiện tại đơn: Do/Does + S + V(nguyên mẫu)?"
    ]
  },
  {
    id: "eng-s121",
    questionId: "eng-q121",
    recognition: "Diễn tả vai trò quan trọng của Internet trong cuộc sống hiện đại (sự thật khách quan).",
    detailedSteps: [
      {
        order: 1,
        title: "Chia động từ đi kèm cụm 'play a role'",
        explanation: "Chủ ngữ 'The Internet' là số ít, đi với động từ thêm -s là 'plays' trong cụm 'play an important role' (đóng vai trò quan trọng).",
        result: "The Internet + plays"
      }
    ],
    finalAnswer: "B. plays",
    commonMistakes: [
      "Chọn động từ nguyên mẫu 'play' hoặc chia quá khứ 'played' do không chú ý ngữ cảnh hiện đại."
    ],
    reviewSuggestions: [
      "Học thuộc cụm từ hay 'play an important role in something'."
    ]
  },
  {
    id: "eng-s122",
    questionId: "eng-q122",
    recognition: "Nhận biết qua trạng ngữ thời gian trong quá khứ 'last week'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu thời gian",
        explanation: "Cụm từ 'last week' (tuần trước) chỉ hành động đã xảy ra và chấm dứt trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'come' là động từ bất quy tắc, dạng quá khứ cột 2 (V2) của nó là 'came'.",
        result: "came"
      }
    ],
    finalAnswer: "B. came",
    commonMistakes: [
      "Chọn động từ nguyên mẫu 'come' hoặc chia hiện tại đơn 'comes'."
    ],
    reviewSuggestions: [
      "Học thuộc bảng động từ bất quy tắc thông dụng."
    ]
  },
  {
    id: "eng-s123",
    questionId: "eng-q123",
    recognition: "Nhận biết qua trạng từ chỉ thời gian trong quá khứ 'yesterday'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu thời gian",
        explanation: "Từ 'yesterday' (ngày hôm qua) là dấu hiệu rõ ràng của thì Quá khứ đơn.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'have' có dạng quá khứ đơn (V2) bất quy tắc là 'had'.",
        result: "had"
      }
    ],
    finalAnswer: "C. had",
    commonMistakes: [
      "Nhầm sang thì Hiện tại tiếp diễn hoặc giữ nguyên mẫu."
    ],
    reviewSuggestions: [
      "Ghi nhớ cụm từ: have a great time (có một khoảng thời gian tuyệt vời)."
    ]
  },
  {
    id: "eng-s124",
    questionId: "eng-q124",
    recognition: "Nhận biết qua cụm từ chỉ thời gian quá khứ 'last night'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì của câu",
        explanation: "Trạng ngữ 'last night' (tối qua) cho biết hành động xảy ra trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ có quy tắc",
        explanation: "Động từ 'finish' là động từ có quy tắc, chỉ cần thêm đuôi -ed thành 'finished'.",
        result: "finished"
      }
    ],
    finalAnswer: "B. finished",
    commonMistakes: [
      "Nhầm lẫn chia hiện tại đơn 'finishes' hoặc dùng dạng nguyên mẫu."
    ],
    reviewSuggestions: [
      "Ôn tập cách thêm đuôi -ed đối với động từ có quy tắc."
    ]
  },
  {
    id: "eng-s125",
    questionId: "eng-q125",
    recognition: "Nhận biết qua trạng ngữ chỉ thời gian quá khứ 'yesterday afternoon'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chia động từ",
        explanation: "Cụm 'yesterday afternoon' (chiều hôm qua) chỉ hành động đã xảy ra ở quá khứ đơn. Động từ 'play' có quy tắc, chia là 'played'.",
        result: "played"
      }
    ],
    finalAnswer: "C. played",
    commonMistakes: [
      "Chọn đáp án chỉ thì Hiện tại tiếp diễn do nhầm lẫn ngữ cảnh."
    ],
    reviewSuggestions: [
      "Luyện tập nhận diện các cụm từ đi với 'yesterday' (yesterday morning, yesterday afternoon...)."
    ]
  },
  {
    id: "eng-s126",
    questionId: "eng-q126",
    recognition: "Nhận biết qua cụm từ chỉ thời gian quá khứ 'last Friday'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chia động từ",
        explanation: "Dấu hiệu 'last Friday' (thứ Sáu tuần trước) yêu cầu chia động từ ở quá khứ đơn. Động từ 'keep' bất quy tắc có dạng quá khứ là 'kept'.",
        result: "kept"
      }
    ],
    finalAnswer: "C. kept",
    commonMistakes: [
      "Giữ nguyên mẫu hoặc nhầm chia thêm -s như ở hiện tại."
    ],
    reviewSuggestions: [
      "Học thuộc dạng quá khứ của động từ bất quy tắc 'keep' là 'kept'."
    ]
  },
  {
    id: "eng-s127",
    questionId: "eng-q127",
    recognition: "Nhận biết qua trạng ngữ chỉ thời gian quá khứ 'two days ago'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì của câu",
        explanation: "Từ 'ago' (trước đây) là dấu hiệu điển hình của thì Quá khứ đơn.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'buy' bất quy tắc có quá khứ cột 2 (V2) là 'bought'.",
        result: "bought"
      }
    ],
    finalAnswer: "C. bought",
    commonMistakes: [
      "Nhầm lẫn chia động từ nguyên mẫu 'buy' hoặc dạng tiếp diễn."
    ],
    reviewSuggestions: [
      "Luyện tập phát âm và viết đúng động từ 'buy -> bought'."
    ]
  },
  {
    id: "eng-s128",
    questionId: "eng-q128",
    recognition: "Nhận biết qua ngữ cảnh thời gian đã qua trong buổi sáng 'this morning'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định ngữ cảnh thời gian",
        explanation: "Cụm 'this morning' (sáng nay) khi nói vào thời điểm muộn hơn trong ngày biểu thị hành động đã kết thúc.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'take' bất quy tắc có dạng quá khứ là 'took'.",
        result: "took"
      }
    ],
    finalAnswer: "B. took",
    commonMistakes: [
      "Nhầm chia ở hiện tại đơn 'takes' do nghĩ sáng nay vẫn là hiện tại."
    ],
    reviewSuggestions: [
      "Lưu ý ngữ cảnh khi sử dụng 'this morning' thường được chia ở quá khứ đơn."
    ]
  },
  {
    id: "eng-s129",
    questionId: "eng-q129",
    recognition: "Nhận biết qua ngữ cảnh hành động đã hoàn thành sau kì thi 'after the exam'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chủ ngữ",
        explanation: "Ngữ cảnh miêu tả trạng thái sau kì thi đã kết thúc. Chủ ngữ 'She' là ngôi thứ ba số ít.",
        result: "Quá khứ đơn, chủ ngữ số ít"
      },
      {
        order: 2,
        title: "Chia động từ to be",
        explanation: "Động từ to be ở quá khứ đơn đi với chủ ngữ số ít (I/He/She/It) là 'was'.",
        result: "was"
      }
    ],
    finalAnswer: "C. was",
    commonMistakes: [
      "Dùng 'were' cho chủ ngữ số ít hoặc chọn 'is' ở hiện tại."
    ],
    reviewSuggestions: [
      "Ghi nhớ cách chia động từ to be trong quá khứ: was (số ít), were (số nhiều)."
    ]
  },
  {
    id: "eng-s130",
    questionId: "eng-q130",
    recognition: "Nhận biết mốc thời gian lịch sử trong quá khứ 'in 1992'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu mốc thời gian",
        explanation: "Năm '1992' là một mốc thời gian xác định đã qua trong lịch sử, biểu thị hành động xảy ra và kết thúc trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ có quy tắc",
        explanation: "Động từ 'improve' tận cùng bằng 'e', ta chỉ cần thêm đuôi -d thành 'improved'.",
        result: "improved"
      }
    ],
    finalAnswer: "C. improved",
    commonMistakes: [
      "Chọn thì hiện tại đơn hoặc tiếp diễn không phù hợp với mốc thời gian lịch sử."
    ],
    reviewSuggestions: [
      "Ôn tập cách chia động từ có quy tắc tận cùng bằng chữ cái 'e'."
    ]
  },
  {
    id: "eng-s131",
    questionId: "eng-q131",
    recognition: "Nhận biết qua trạng ngữ thời gian quá khứ 'many years ago'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chia động từ",
        explanation: "Cụm 'many years ago' (nhiều năm trước) chỉ hành động đã xảy ra trong quá khứ. Động từ 'start' có quy tắc, thêm -ed thành 'started'.",
        result: "started"
      }
    ],
    finalAnswer: "B. started",
    commonMistakes: [
      "Chọn hiện tại đơn chia số ít 'starts' hoặc động từ nguyên mẫu."
    ],
    reviewSuggestions: [
      "Ghi nhớ trạng từ 'ago' luôn đi với thì Quá khứ đơn."
    ]
  },
  {
    id: "eng-s132",
    questionId: "eng-q132",
    recognition: "Nhận biết qua trạng ngữ thời gian trong quá khứ 'in the past'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu thời gian",
        explanation: "Cụm từ 'in the past' (trong quá khứ) là dấu hiệu của thì Quá khứ đơn.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'make' bất quy tắc có dạng quá khứ (V2) là 'made'.",
        result: "made"
      }
    ],
    finalAnswer: "C. made",
    commonMistakes: [
      "Chia ở hiện tại đơn 'makes' hoặc nhầm sang tiếp diễn."
    ],
    reviewSuggestions: [
      "Học kỹ dạng động từ bất quy tắc của 'make' -> 'made'."
    ]
  },
  {
    id: "eng-s133",
    questionId: "eng-q133",
    recognition: "Nhận biết qua trạng ngữ chỉ thời gian quá khứ 'last summer'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chia động từ",
        explanation: "Trạng ngữ 'last summer' (mùa hè năm ngoái) chỉ thời gian trong quá khứ. Động từ 'teach' bất quy tắc có dạng quá khứ là 'taught'.",
        result: "taught"
      }
    ],
    finalAnswer: "C. taught",
    commonMistakes: [
      "Nhầm lẫn chia động từ nguyên mẫu 'teach' hoặc chia hiện tại 'teaches'."
    ],
    reviewSuggestions: [
      "Chú ý dạng viết và cách đọc của động từ bất quy tắc 'teach -> taught'."
    ]
  },
  {
    id: "eng-s134",
    questionId: "eng-q134",
    recognition: "Nhận biết qua mốc thời gian hành động đã kết thúc 'after the speaking activity'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định ngữ cảnh hành động",
        explanation: "Giáo viên nhận xét sau khi hoạt động nói đã kết thúc hoàn toàn, biểu thị một sự việc trong quá khứ.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ bất quy tắc",
        explanation: "Động từ 'give' có dạng quá khứ bất quy tắc là 'gave'.",
        result: "gave"
      }
    ],
    finalAnswer: "C. gave",
    commonMistakes: [
      "Nhầm lẫn chia ở hiện tại 'gives' do quen dùng."
    ],
    reviewSuggestions: [
      "Phân tích kĩ ngữ cảnh hoạt động đã kết thúc hay chưa trước khi chia động từ."
    ]
  },
  {
    id: "eng-s135",
    questionId: "eng-q135",
    recognition: "Nhận biết qua trạng ngữ chỉ thời gian trong quá khứ 'yesterday'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chia động từ",
        explanation: "Trạng ngữ 'yesterday' (ngày hôm qua) chỉ hành động trong quá khứ. Động từ 'buy' bất quy tắc chia cột 2 (V2) là 'bought'.",
        result: "bought"
      }
    ],
    finalAnswer: "C. bought",
    commonMistakes: [
      "Chọn dạng nguyên mẫu 'buy' hoặc chia 'buys'."
    ],
    reviewSuggestions: [
      "Ôn tập động từ bất quy tắc 'buy -> bought'."
    ]
  },
  {
    id: "eng-s136",
    questionId: "eng-q136",
    recognition: "Nhận biết qua ngữ cảnh diễn tả sự việc đã xảy ra 'during the presentation'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định ngữ cảnh thời gian",
        explanation: "Hành động cái mic ngừng hoạt động diễn ra trong suốt buổi thuyết trình đã kết thúc.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ có quy tắc và nhân đôi phụ âm",
        explanation: "Động từ 'stop' là động từ 1 âm tiết kết thúc bằng 1 phụ âm trước đó là 1 nguyên âm. Khi thêm -ed cần gấp đôi phụ âm cuối 'p' thành 'stopped'.",
        result: "stopped"
      }
    ],
    finalAnswer: "C. stopped",
    commonMistakes: [
      "Thêm -ed nhưng không gấp đôi phụ âm cuối 'p' thành 'stoped'."
    ],
    reviewSuggestions: [
      "Ôn tập quy tắc gấp đôi phụ âm cuối khi thêm đuôi -ed."
    ]
  },
  {
    id: "eng-s137",
    questionId: "eng-q137",
    recognition: "Nhận biết qua cụm từ diễn tả sự việc trong quá khứ 'after years of delay'.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định ngữ cảnh hành động",
        explanation: "Việc người dân quyết định di dời sau nhiều năm trì hoãn là một sự kiện đã xảy ra và được kể lại.",
        result: "Thì Quá khứ đơn"
      },
      {
        order: 2,
        title: "Chia động từ có quy tắc",
        explanation: "Động từ 'decide' kết thúc bằng 'e', chỉ cần thêm đuôi -d thành 'decided'.",
        result: "decided"
      }
    ],
    finalAnswer: "C. decided",
    commonMistakes: [
      "Chọn phương án hiện tại đơn do nhầm lẫn ngữ cảnh của sự việc."
    ],
    reviewSuggestions: [
      "Đọc hiểu toàn bộ câu để nắm vững ý nghĩa tường thuật của ngữ cảnh."
    ]
  },
  {
    id: "eng-s138",
    questionId: "eng-q138",
    recognition: "Sự hòa hợp giữa động từ to be ở quá khứ và chủ ngữ số ít.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định thì và chủ ngữ",
        explanation: "Vế sau có động từ 'was' chỉ quá khứ đơn. Chủ ngữ 'Côn Đảo' ở vế trước là danh từ số ít.",
        result: "Quá khứ đơn, chủ ngữ số ít"
      },
      {
        order: 2,
        title: "Chia động từ to be thể phủ định",
        explanation: "To be phủ định đi với chủ ngữ số ít ở quá khứ đơn là 'was not' (viết tắt là 'wasn't').",
        result: "wasn't"
      }
    ],
    finalAnswer: "B. wasn't",
    commonMistakes: [
      "Chọn 'weren't' do nhầm lẫn sự hòa hợp chủ-vị hoặc chọn 'isn't' ở hiện tại."
    ],
    reviewSuggestions: [
      "Ôn tập dạng phủ định của động từ to be ở quá khứ đơn: wasn't / weren't."
    ]
  },
  {
    id: "eng-s139",
    questionId: "eng-q139",
    recognition: "Cấu trúc phủ định của động từ thường ở thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu thời gian và thể phủ định",
        explanation: "Dấu hiệu 'last night' chỉ quá khứ đơn. Câu mang ý phủ định vì có 'any lodging' (không tìm thấy bất kì nơi lưu trú nào).",
        result: "Thể phủ định quá khứ đơn"
      },
      {
        order: 2,
        title: "Áp dụng cấu trúc phủ định",
        explanation: "Công thức: S + didn't + V(nguyên mẫu). Động từ 'find' giữ nguyên mẫu sau trợ động từ 'didn't'.",
        result: "didn't find"
      }
    ],
    finalAnswer: "C. didn't find",
    commonMistakes: [
      "Chọn 'didn't + V2' (didn't found) hoặc nhầm dùng to be 'weren't find'."
    ],
    reviewSuggestions: [
      "Ghi nhớ quy tắc: Sau trợ động từ 'did/didn't', động từ chính luôn ở dạng nguyên mẫu."
    ]
  },
  {
    id: "eng-s140",
    questionId: "eng-q140",
    recognition: "Cấu trúc câu hỏi nghi vấn (Yes/No Question) ở thì Quá khứ đơn.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu thời gian và loại câu",
        explanation: "Dấu hiệu 'last summer' chỉ quá khứ đơn. Động từ trong câu là động từ thường 'visit' ở dạng nguyên mẫu, nên đây là câu hỏi với động từ thường.",
        result: "Câu hỏi quá khứ đơn với động từ thường"
      },
      {
        order: 2,
        title: "Chọn trợ động từ phù hợp đặt đầu câu",
        explanation: "Công thức câu hỏi quá khứ đơn: Did + S + V(nguyên mẫu)? Do đó ta cần mượn trợ động từ 'Did'.",
        result: "Did"
      }
    ],
    finalAnswer: "C. Did",
    commonMistakes: [
      "Chọn trợ động từ 'Do/Does' của hiện tại hoặc chọn 'Were' (to be)."
    ],
    reviewSuggestions: [
      "Học kĩ cấu trúc câu hỏi nghi vấn thì quá khứ đơn với động từ thường và động từ to be."
    ]
  },
  {
    id: "eng-s141",
    questionId: "eng-q141",
    recognition: "Sự hòa hợp giữa động từ to be ở quá khứ đơn và chủ ngữ số nhiều.",
    detailedSteps: [
      {
        order: 1,
        title: "Xác định dấu hiệu và chủ ngữ",
        explanation: "Dấu hiệu 'yesterday morning' chỉ quá khứ đơn. Chủ ngữ 'My classmates' (các bạn cùng lớp của tôi) là danh từ số nhiều.",
        result: "Quá khứ đơn, chủ ngữ số nhiều"
      },
      {
        order: 2,
        title: "Chia động từ to be",
        explanation: "Động từ to be ở quá khứ đơn đi với chủ ngữ số nhiều (We/You/They/Danh từ số nhiều) là 'were'.",
        result: "were"
      }
    ],
    finalAnswer: "D. were",
    commonMistakes: [
      "Chọn 'was' do không chú ý chữ 's' số nhiều ở chủ ngữ 'classmates' hoặc chia hiện tại 'are'."
    ],
    reviewSuggestions: [
      "Lưu ý phân tích kĩ danh từ số ít hay số nhiều ở chủ ngữ trước khi chia động từ to be."
    ]
  }
];
