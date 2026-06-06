import { QuestionType } from '@/types';

export const englishQuestionTypes: QuestionType[] = [
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
    description: 'Dạng bài chia dạng đúng của từ trong ngoặc để hoàn thành câu, chiếm điểm số trực tiếp trong Part 6 của đề thi tuyển sinh lớp 10 Bình Định. Dạng bài này kiểm tra khả năng vận dụng ngữ pháp kết hợp biến đổi từ loại (Danh - Động - Tính - Trạng) từ một gốc từ cho trước (như inventions, studying, natural, unpleasant). Đây là bước tiếp nối trực tiếp ngay sau khi học sinh đã nắm vững Vị trí từ loại (Dạng 5) để thực hiện biến đổi từ chính xác theo cấu trúc câu thay vì đoán nghĩa.',
    recognitionSigns: [
      'Cuối câu hỏi có một từ gốc viết hoa đặt trong ngoặc đơn như (INVENT), (STUDY), (NATURE), (PLEASE)...',
      'Trong câu có một chỗ trống cần điền một từ loại đã được biến đổi chính xác để hoàn thành cấu trúc ngữ pháp và ý nghĩa của câu.'
    ],
    solvingSteps: [
      'Bước 1: Xác định vị trí chỗ trống và phân tích cấu trúc ngữ pháp xung quanh (ví dụ: đứng sau tính từ cần danh từ, đứng trước danh từ cần tính từ, đứng sau động từ thường cần trạng từ...).',
      'Bước 2: Quyết định loại từ cần điền: Danh từ (Noun), Động từ (Verb), Tính từ (Adjective) hay Trạng từ (Adverb).',
      'Bước 3: Biến đổi từ gốc trong ngoặc sang đúng từ loại đã chọn bằng cách áp dụng các hậu tố phổ biến (-tion, -ment, -ful, -ly...) hoặc các tiền tố phù hợp.',
      'Bước 4: Kiểm tra lại các yếu tố phụ trợ: Danh từ cần ở dạng số ít hay số nhiều (như sau "one of the" phải là danh từ số nhiều), từ cần mang nghĩa khẳng định hay phủ định (ví dụ pleasant vs unpleasant dựa trên ngữ cảnh).'
    ],
    commonMistakes: [
      'Xác định sai loại từ cần điền (nhầm lẫn giữa tính từ và trạng từ, hoặc điền động từ vào vị trí danh từ).',
      'Quên chia danh từ số nhiều: Ghi danh từ số ít (ví dụ "invention") khi đứng sau các cụm từ yêu cầu số nhiều như "one of the...", "many", "some" (đáp án đúng phải là "inventions").',
      'Bỏ qua phân tích nghĩa phủ định của câu: Điền từ mang nghĩa khẳng định trong ngữ cảnh tiêu cực (ví dụ: ghi "pleasant" khi ngữ cảnh câu chỉ sự khó chịu "không tìm được khách sạn", đúng ra phải là "unpleasant").',
      'Sai chính tả khi thêm hậu tố (quên gấp đôi phụ âm, biến đổi sai đuôi "y" thành "i" trước khi thêm hậu tố, viết sai đuôi tiền tố phủ định).'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    exampleQuestionId: 'eng-q85',
    subTypes: [
      {
        name: 'Dạng 1: Biến đổi Động từ thành Danh từ (Verb -> Noun)',
        example: 'The telephone is one of the most useful inventions of the 20th century. (INVENT)',
        note: 'Đứng sau cụm "one of the most useful" (so sánh nhất + tính từ) bắt buộc phải là một danh từ số nhiều. Ta chuyển động từ "invent" thành danh từ "invention" rồi thêm "s" thành "inventions". Các cặp động - danh từ phổ biến: invent -> invention, decide -> decision, communicate -> communication, educate -> education, inform -> information, perform -> performance, attract -> attraction, protect -> protection.'
      },
      {
        name: 'Dạng 2: Biến đổi Danh từ thành Tính từ (Noun -> Adjective)',
        example: 'They are trying to protect the natural beauty of the area. (NATURE)',
        note: 'Đứng trước danh từ "beauty" để bổ nghĩa cho nó cần một tính từ. Ta biến đổi danh từ "nature" thành tính từ "natural". Các cặp danh - tính từ hay gặp: nature -> natural, beauty -> beautiful, danger -> dangerous, environment -> environmental, use -> useful/useless, success -> successful, care -> careful/careless, peace -> peaceful.'
      },
      {
        name: 'Dạng 3: Biến đổi Tính từ thành Trạng từ (Adjective -> Adverb)',
        example: 'She speaks English very fluently. (FLUENT)',
        note: 'Đứng sau để bổ nghĩa cho động từ hành động "speaks" cần một trạng từ chỉ cách thức. Ta thêm đuôi "-ly" vào sau tính từ "fluent" để thành trạng từ "fluently". Các trạng từ phổ biến: carefully, quickly, clearly, fluently, successfully, naturally.'
      },
      {
        name: 'Dạng 4: Tạo từ mang nghĩa phủ định (Negative Prefixes)',
        example: 'It was an unpleasant experience because we couldn\'t find a hotel. (PLEASE)',
        note: 'Ngữ cảnh chỉ việc "không thể tìm thấy khách sạn" mang nghĩa tiêu cực. Ta cần chuyển "please" thành tính từ "pleasant" rồi thêm tiền tố phủ định "un-" thành "unpleasant". Các tiền tố phủ định thường gặp: un- (unhappy, unhealthy), im- (impossible, impatient), in- (incorrect, inactive), dis- (dishonest, disappear), il- (illegal), ir- (irregular).'
      }
    ]
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
