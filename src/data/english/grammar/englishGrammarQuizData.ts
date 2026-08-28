import { IGrammarLesson } from './englishGrammarData';

export type QuizDifficulty = 'easy' | 'medium' | 'hard';
export type QuizQuestionType = 'fill_blank' | 'error_find' | 'transformation' | 'rule_check';

export interface IGrammarQuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  trapNote?: string;
  difficulty?: QuizDifficulty;
  type?: QuizQuestionType;
}

/**
 * Ngân hàng câu hỏi trắc nghiệm tiếng Anh 100% chuẩn cấu trúc đề thi tuyển sinh Vào 10 & THPT.
 * Mỗi bài học có trọn vẹn 10 câu hỏi với 4 đáp án A, B, C, D bằng tiếng Anh tự nhiên.
 */
export const GRAMMAR_QUIZ_DATABASE: Record<string, IGrammarQuizQuestion[]> = {
  // ==========================================
  // CHỦ ĐIỂM 01: DANH TỪ & LƯỢNG TỪ
  // ==========================================
  'lesson-1-1': [
    {
      id: 'q-1-1-1',
      lessonId: 'lesson-1-1',
      question: 'Could you please give me some _______ about the upcoming entrance exam?',
      options: ['information', 'informations', 'an information', 'informative'],
      correctIndex: 0,
      explanation: '"Information" (thông tin) là danh từ KHÔNG đếm được trong tiếng Anh. Do đó, tuyệt đối không thêm số nhiều "-s" và không đi với mạo từ "a/an".',
      trapNote: 'Bẫy kinh điển: Không bao giờ có từ "informations" trong tiếng Anh chuẩn.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-2',
      lessonId: 'lesson-1-1',
      question: 'We bought some new _______ for our living room yesterday.',
      options: ['furnitures', 'furniture', 'piece of furnitures', 'a furniture'],
      correctIndex: 1,
      explanation: '"Furniture" (đồ đạc/nội thất) là danh từ không đếm được ➔ dùng "some furniture", không thêm "-s".',
      trapNote: 'Tránh nhầm lẫn: furniture luôn ở dạng số ít không đếm được.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-3',
      lessonId: 'lesson-1-1',
      question: 'My teacher gave me useful _______ on how to improve my speaking skills.',
      options: ['an advice', 'advices', 'advice', 'advise'],
      correctIndex: 2,
      explanation: '"Advice" (lời khuyên) là danh từ không đếm được, không thêm "-s", không dùng "an advice". Muốn đếm phải dùng "a piece of advice".',
      trapNote: 'Phân biệt danh từ "advice" (không đếm được) và động từ "advise".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-4',
      lessonId: 'lesson-1-1',
      question: 'There is too much _______ on the highway during rush hour.',
      options: ['traffic', 'traffics', 'cars', 'vehicle'],
      correctIndex: 0,
      explanation: 'Sau lượng từ "too much" (đi với danh từ không đếm được), ta phải chọn danh từ không đếm được "traffic" (giao thông).',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-5',
      lessonId: 'lesson-1-1',
      question: 'She bought three _______ of bread at the local bakery this morning.',
      options: ['loaves', 'loafs', 'loaveses', 'loaf'],
      correctIndex: 0,
      explanation: 'Để đếm danh từ không đếm được "bread", ta dùng đơn vị đo lường: "a loaf of bread" ➔ số nhiều biến đổi thành "three loaves of bread".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-6',
      lessonId: 'lesson-1-1',
      question: 'Find the underlined error: "The teacher [A] gave us [B] many useful [C] homeworks [D] to complete."',
      options: ['The teacher', 'gave us', 'many useful', 'homeworks'],
      correctIndex: 3,
      explanation: '"Homework" là danh từ không đếm được ➔ Không có dạng số nhiều "homeworks". Phải sửa thành "much useful homework" hoặc "assignments".',
      trapNote: 'Lỗi thêm -s vào homework là bẫy thi thường xuyên xuất hiện ở câu tìm lỗi sai.',
      difficulty: 'hard',
      type: 'error_find'
    },
    {
      id: 'q-1-1-7',
      lessonId: 'lesson-1-1',
      question: 'Which of the following words is an UNCOUNTABLE NOUN?',
      options: ['Luggage', 'Suitcase', 'Bag', 'Backpack'],
      correctIndex: 0,
      explanation: '"Luggage" (hành lý) là danh từ không đếm được đại diện cho tập hợp. Trong khi đó, suitcase, bag, backpack đều là danh từ đếm được.',
      difficulty: 'medium',
      type: 'rule_check'
    },
    {
      id: 'q-1-1-8',
      lessonId: 'lesson-1-1',
      question: 'The bad news _______ announced on the television yesterday evening.',
      options: ['were', 'was', 'are', 'is'],
      correctIndex: 1,
      explanation: '"News" (tin tức) mặc dù tận cùng có chữ "s" nhưng là danh từ KHÔNG đếm được ➔ Động từ to be luôn chia số ít ở quá khứ: "was".',
      trapNote: 'Bẫy hình thức: News có đuôi -s nhưng luôn chia động từ số ít.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-9',
      lessonId: 'lesson-1-1',
      question: 'How _______ luggage are you planning to bring on the flight?',
      options: ['many', 'much', 'few', 'little'],
      correctIndex: 1,
      explanation: 'Hỏi về số lượng của danh từ không đếm được ("luggage") ➔ Dùng cụm từ để hỏi "How much".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-1-10',
      lessonId: 'lesson-1-1',
      question: 'Which sentence is GRAMMATICALLY CORRECT?',
      options: [
        'He gave me an advice about my career.',
        'I need some information about the train schedule.',
        'There are many traffics in the city center today.',
        'We need to buy new furnitures for the office.'
      ],
      correctIndex: 1,
      explanation: 'Câu "I need some information about the train schedule." hoàn toàn chính xác. Các câu còn lại đều sai vì: "an advice" (sai), "many traffics" (sai), "furnitures" (sai).',
      trapNote: 'Ghi nhớ bộ 4 danh từ không đếm được kinh điển: information, advice, furniture, luggage.',
      difficulty: 'hard',
      type: 'rule_check'
    }
  ],

  'lesson-1-2': [
    {
      id: 'q-1-2-1',
      lessonId: 'lesson-1-2',
      question: 'A group of _______ were playing football in the school playground.',
      options: ['children', 'childs', 'childrens', 'child'],
      correctIndex: 0,
      explanation: 'Danh từ số nhiều bất quy tắc của "child" là "children" (không thêm -s).',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-2',
      lessonId: 'lesson-1-2',
      question: 'You should brush your _______ at least twice every day.',
      options: ['tooths', 'teeth', 'teeths', 'toothes'],
      correctIndex: 1,
      explanation: 'Số nhiều của "tooth" biến đổi nguyên âm thành "teeth".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-3',
      lessonId: 'lesson-1-2',
      question: 'The cat chased three _______ that were running across the kitchen floor.',
      options: ['mouses', 'mouse', 'mice', 'mices'],
      correctIndex: 2,
      explanation: 'Số nhiều bất quy tắc của "mouse" (con chuột) là "mice".',
      trapNote: 'Không dùng "mouses" khi nói về loài chuột sinh học.',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-4',
      lessonId: 'lesson-1-2',
      question: 'There are many _______ working in this modern hospital.',
      options: ['woman doctors', 'women doctors', 'woman doctor', 'womens doctors'],
      correctIndex: 1,
      explanation: 'Khi danh từ ghép chứa "man/woman", khi đổi sang số nhiều cả hai thành phần đều phải chuyển sang số nhiều: "women doctors".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-5',
      lessonId: 'lesson-1-2',
      question: 'The farmer has a large flock of fifty _______ on his hillside farm.',
      options: ['sheeps', 'sheep', 'sheepes', 'sheeves'],
      correctIndex: 1,
      explanation: 'Danh từ "sheep" (con cừu) có hình thức số ít và số nhiều giống hệt nhau: 1 sheep ➔ 50 sheep (không thêm -s).',
      trapNote: 'Bộ 3 danh từ số nhiều giữ nguyên hình thức: sheep, deer, fish.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-6',
      lessonId: 'lesson-1-2',
      question: 'His _______ were aching after walking for more than ten kilometers.',
      options: ['foots', 'feets', 'feet', 'foot'],
      correctIndex: 2,
      explanation: 'Số nhiều của "foot" (bàn chân) là "feet".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-7',
      lessonId: 'lesson-1-2',
      question: 'Several wild _______ were spotted near the stream in the national park.',
      options: ['deers', 'deer', 'deeres', 'deerss'],
      correctIndex: 1,
      explanation: '"Deer" (hươu/nai) là danh từ bất biến ở số nhiều ➔ "several wild deer".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-8',
      lessonId: 'lesson-1-2',
      question: 'Find the underlined error: "Two [A] policemans [B] arrived at [C] the crime scene immediately [D]."',
      options: ['Two', 'policemans', 'at', 'immediately'],
      correctIndex: 1,
      explanation: 'Số nhiều của "policeman" phải là "policemen", không thêm -s thành "policemans".',
      difficulty: 'medium',
      type: 'error_find'
    },
    {
      id: 'q-1-2-9',
      lessonId: 'lesson-1-2',
      question: 'How many _______ attended the annual conference last weekend?',
      options: ['persons', 'people', 'peoples', 'person'],
      correctIndex: 1,
      explanation: 'Số nhiều thông dụng nhất của "person" trong tiếng Anh là "people".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-2-10',
      lessonId: 'lesson-1-2',
      question: 'Which of the following plural forms is INCORRECT?',
      options: [
        'half ➔ halves',
        'knife ➔ knives',
        'roof ➔ rooves',
        'leaf ➔ leaves'
      ],
      correctIndex: 2,
      explanation: 'Ngoại lệ: "roof" (mái nhà) đổi sang số nhiều chỉ thêm -s thành "roofs", KHÔNG biến đổi thành "rooves".',
      trapNote: 'Bẫy đề thi: roof ➔ roofs; cliff ➔ cliffs (không biến f thành ves).',
      difficulty: 'hard',
      type: 'rule_check'
    }
  ],

  'lesson-1-3': [
    {
      id: 'q-1-3-1',
      lessonId: 'lesson-1-3',
      question: 'I don\'t have _______ money left to buy that expensive jacket.',
      options: ['many', 'much', 'a few', 'few'],
      correctIndex: 1,
      explanation: '"Money" là danh từ không đếm được, trong câu phủ định dùng "much": "not have much money".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-2',
      lessonId: 'lesson-1-3',
      question: 'There are _______ students in the library today because of the rainy weather.',
      options: ['much', 'a little', 'few', 'little'],
      correctIndex: 2,
      explanation: '"Students" là danh từ đếm được số nhiều mang nghĩa tiêu cực (rất ít, hầu như không có) ➔ Dùng "few".',
      trapNote: 'Few/A few + danh từ đếm được số nhiều; Little/A little + danh từ không đếm được.',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-3',
      lessonId: 'lesson-1-3',
      question: 'Don\'t worry! We still have _______ time before the train departs.',
      options: ['a little', 'little', 'a few', 'few'],
      correctIndex: 0,
      explanation: '"Time" (thời gian) không đếm được, mang nghĩa tích cực (còn một chút, đủ dùng) ➔ Dùng "a little time".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-4',
      lessonId: 'lesson-1-3',
      question: 'Would you like _______ sugar in your coffee?',
      options: ['any', 'some', 'many', 'few'],
      correctIndex: 1,
      explanation: 'Trong câu LỜI MỜI hoặc YÊU CẦU lịch sự ("Would you like...", "Can I have..."), ta dùng "SOME" chứ không dùng "any".',
      trapNote: 'Bẫy thi kinh điển: Câu hỏi nhưng là lời mời ➔ dùng SOME.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-5',
      lessonId: 'lesson-1-3',
      question: 'Are there _______ apples left in the refrigerator?',
      options: ['some', 'any', 'much', 'a little'],
      correctIndex: 1,
      explanation: 'Trong câu hỏi nghi vấn thông thường với danh từ số nhiều, ta dùng "ANY".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-6',
      lessonId: 'lesson-1-3',
      question: 'He has lived here for two years, but he has very _______ friends.',
      options: ['few', 'a few', 'little', 'a little'],
      correctIndex: 0,
      explanation: 'Sau từ "very", thể hiện sự hiếm hoi mang nghĩa tiêu cực với danh từ số nhiều "friends" ➔ dùng "very few friends".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-7',
      lessonId: 'lesson-1-3',
      question: 'There are _______ interesting books on the shelf that you should read.',
      options: ['a lot of', 'much', 'a little', 'any'],
      correctIndex: 0,
      explanation: '"A lot of" dùng được với cả danh từ đếm được số nhiều ("books") và danh từ không đếm được trong câu khẳng định.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-8',
      lessonId: 'lesson-1-3',
      question: 'Find the underlined error: "She has [A] too many [B] luggages [C] for this short trip [D]."',
      options: ['has', 'too many', 'luggages', 'for'],
      correctIndex: 2,
      explanation: '"Luggage" không đếm được, không có số nhiều "luggages" và phải đi kèm "too much luggage".',
      difficulty: 'hard',
      type: 'error_find'
    },
    {
      id: 'q-1-3-9',
      lessonId: 'lesson-1-3',
      question: 'Hurry up! We have _______ time left and the gate is closing.',
      options: ['little', 'a little', 'few', 'a few'],
      correctIndex: 0,
      explanation: 'Ngữ cảnh khẩn cấp: "Hurry up" thể hiện hầu như không còn thời gian (nghĩa tiêu cực) ➔ Dùng "little time".',
      trapNote: 'Phân biệt "little" (hầu như không có, không đủ) vs "a little" (có một ít, đủ dùng).',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-1-3-10',
      lessonId: 'lesson-1-3',
      question: 'Can I borrow _______ pens? Mine are out of ink.',
      options: ['any', 'a few', 'a little', 'much'],
      correctIndex: 1,
      explanation: '"Pens" là danh từ đếm được số nhiều, câu đề nghị mượn một vài cái ➔ dùng "a few".',
      difficulty: 'medium',
      type: 'fill_blank'
    }
  ],

  // ==========================================
  // CHỦ ĐIỂM 12: CÂU HỎI
  // ==========================================
  'lesson-12-6': [
    {
      id: 'q-12-6-1',
      lessonId: 'lesson-12-6',
      question: '_______ broke the classroom window yesterday afternoon?',
      options: ['Who did break', 'Who broke', 'Whom broke', 'Did who break'],
      correctIndex: 1,
      explanation: 'Câu hỏi cho CHỦ NGỮ (Subject Question): "Who" đóng vai trò chủ ngữ thực hiện hành động. Quy tắc: TUYỆT ĐỐI KHÔNG mượn trợ động từ do/does/did, chia trực tiếp động từ chính theo thì quá khứ đơn ("Who broke...").',
      trapNote: 'Tránh chọn "Who did break" vì chỉ mượn trợ động từ khi hỏi cho tân ngữ.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-2',
      lessonId: 'lesson-12-6',
      question: 'Which author _______ the famous novel "Harry Potter"?',
      options: ['did write', 'wrote', 'does write', 'writing'],
      correctIndex: 1,
      explanation: 'Câu hỏi hỏi về chủ ngữ thực hiện hành động viết cuốn sách ("Which author" là Subject) ➔ Không mượn trợ động từ "did", chia trực tiếp động từ quá khứ "wrote".',
      trapNote: 'Học sinh hay quen tay thêm trợ động từ "did write".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-3',
      lessonId: 'lesson-12-6',
      question: 'Who _______ you invite to your birthday party last Sunday?',
      options: ['did', 'do', 'was', 'were'],
      correctIndex: 0,
      explanation: 'Câu hỏi cho TÂN NGỮ (Object Question): chủ ngữ là "you", còn "Who" là đối tượng được mời (tân ngữ). Cấu trúc: Wh-word + Trợ động từ (did) + S (you) + V-nguyên thể (invite)?',
      trapNote: 'Phân biệt: "Who invited you?" (Ai mời bạn - hỏi chủ ngữ) vs "Who did you invite?" (Bạn mời ai - hỏi tân ngữ).',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-4',
      lessonId: 'lesson-12-6',
      question: 'What _______ happen if we miss the last train tonight?',
      options: ['will', 'does', 'did', 'is'],
      correctIndex: 0,
      explanation: '"What" làm chủ ngữ của mệnh đề chính trong câu điều kiện loại 1 ➔ "What will happen if...?" (Điều gì sẽ xảy ra nếu...?).',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-5',
      lessonId: 'lesson-12-6',
      question: 'What _______ you usually do when you have free time on weekends?',
      options: ['are', 'do', 'did', 'does'],
      correctIndex: 1,
      explanation: 'Câu hỏi cho tân ngữ ở thì Hiện tại đơn với chủ ngữ "you" ➔ Mượn trợ động từ "do": "What do you usually do...?".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-6',
      lessonId: 'lesson-12-6',
      question: 'Find the underlined error: "Who [A] did call [B] you when [C] you were having [D] dinner?"',
      options: ['Who', 'did call', 'when', 'were having'],
      correctIndex: 1,
      explanation: 'Hành động gọi điện là do người gọi (chủ ngữ "Who") thực hiện ➔ Câu hỏi cho chủ ngữ không dùng trợ động từ "did call", phải sửa thành "called".',
      trapNote: 'Lỗi dùng trợ động từ trong câu hỏi chủ ngữ là bẫy phổ biến nhất trong đề thi vào 10.',
      difficulty: 'hard',
      type: 'error_find'
    },
    {
      id: 'q-12-6-7',
      lessonId: 'lesson-12-6',
      question: 'Something fell from the roof. ➔ Which question asks for "Something"?',
      options: [
        'What did fall from the roof?',
        'What fell from the roof?',
        'What did it fall from the roof?',
        'What was fallen from the roof?'
      ],
      correctIndex: 1,
      explanation: '"Something" đóng vai trò làm chủ ngữ gây ra hành động rơi ➔ Chuyển thành câu hỏi chủ ngữ: "What fell from the roof?".',
      difficulty: 'medium',
      type: 'transformation'
    },
    {
      id: 'q-12-6-8',
      lessonId: 'lesson-12-6',
      question: 'Whom _______ the manager interview for the sales position this morning?',
      options: ['did', 'was', 'does', 'has'],
      correctIndex: 0,
      explanation: '"Whom" luôn chỉ tân ngữ ➔ Bắt buộc phải đảo trợ động từ lên trước chủ ngữ ("the manager"): "Whom did the manager interview...?".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-9',
      lessonId: 'lesson-12-6',
      question: 'How many students _______ the scholarship to study abroad last year?',
      options: ['did win', 'won', 'were won', 'did they win'],
      correctIndex: 1,
      explanation: '"How many students" làm chủ ngữ trực tiếp của hành động giành học bổng (won) ➔ Chia trực tiếp thì quá khứ đơn "won", không mượn trợ động từ.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-12-6-10',
      lessonId: 'lesson-12-6',
      question: 'Which of the following questions is GRAMMATICALLY CORRECT?',
      options: [
        'Who did paint the Mona Lisa?',
        'What caused the big fire in the factory?',
        'Which team did win the championship yesterday?',
        'Who did tell you that secret story?'
      ],
      correctIndex: 1,
      explanation: 'Câu "What caused the big fire in the factory?" đúng ngữ pháp vì "What" là chủ ngữ gây ra vụ hỏa hoạn và động từ chia thẳng "caused". Các câu còn lại đều sai vì dùng thừa trợ động từ "did" trong câu hỏi chủ ngữ.',
      trapNote: 'Bẫy thi: Đề thi thường yêu cầu tìm câu đúng giữa các câu hỏi chủ ngữ thừa "did".',
      difficulty: 'hard',
      type: 'rule_check'
    }
  ],

  // ==========================================
  // CHỦ ĐIỂM 13: V-ING & TO-V
  // ==========================================
  'lesson-13-1': [
    {
      id: 'q-13-1-1',
      lessonId: 'lesson-13-1',
      question: 'My sister enjoys _______ science fiction books before going to bed.',
      options: ['read', 'reading', 'to read', 'to reading'],
      correctIndex: 1,
      explanation: 'Động từ "enjoy" bắt buộc theo sau bởi danh động từ V-ing ➔ "enjoy reading".',
      trapNote: 'Không dùng "enjoy to read".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-2',
      lessonId: 'lesson-13-1',
      question: 'Would you mind _______ the window? It is getting quite noisy outside.',
      options: ['close', 'closed', 'closing', 'to close'],
      correctIndex: 2,
      explanation: 'Cấu trúc "Do/Would you mind + V-ing" (Bạn có phiền lòng làm gì không) ➔ chọn "closing".',
      trapNote: 'Sau "mind" luôn luôn là V-ing.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-3',
      lessonId: 'lesson-13-1',
      question: 'The teacher suggested _______ more exercises to improve our test scores.',
      options: ['doing', 'to do', 'do', 'did'],
      correctIndex: 0,
      explanation: 'Cấu trúc "suggest + V-ing" (gợi ý làm việc gì) ➔ chọn "doing".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-4',
      lessonId: 'lesson-13-1',
      question: 'You should avoid _______ too much fast food because it is bad for your health.',
      options: ['to eat', 'eat', 'eating', 'ate'],
      correctIndex: 2,
      explanation: 'Động từ "avoid" (tránh) theo sau bởi V-ing ➔ "avoid eating".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-5',
      lessonId: 'lesson-13-1',
      question: 'He apologized for _______ late to the important business meeting.',
      options: ['arrive', 'to arrive', 'arriving', 'arrived'],
      correctIndex: 2,
      explanation: 'Quy tắc vàng: Sau MỌI giới từ (for, in, at, on, about, of...) động từ luôn ở dạng V-ing ➔ "for arriving".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-6',
      lessonId: 'lesson-13-1',
      question: 'I am really looking forward to _______ from you soon.',
      options: ['hear', 'hearing', 'to hear', 'heard'],
      correctIndex: 1,
      explanation: 'Cấu trúc "look forward to + V-ing" (từ "to" ở đây là GIỚI TỪ, không phải to-infinitive) ➔ Bắt buộc theo sau là V-ing: "hearing".',
      trapNote: 'Bẫy đề thi cực lớn: rất nhiều học sinh thấy chữ "to" là chọn động từ nguyên thể "hear".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-7',
      lessonId: 'lesson-13-1',
      question: 'It is no use _______ over spilt milk.',
      options: ['cry', 'to cry', 'crying', 'cried'],
      correctIndex: 2,
      explanation: 'Thành ngữ cố định: "It is no use / It is no good + V-ing" (Vô ích khi làm gì) ➔ "crying".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-8',
      lessonId: 'lesson-13-1',
      question: 'The criminal admitted _______ the expensive necklace from the jewelry store.',
      options: ['steal', 'stealing', 'to steal', 'stole'],
      correctIndex: 1,
      explanation: 'Động từ "admit" (thừa nhận) theo sau bởi V-ing ➔ "admitted stealing".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-13-1-9',
      lessonId: 'lesson-13-1',
      question: 'Find the underlined error: "My father [A] gave up [B] to smoke [C] three years [D] ago."',
      options: ['My father', 'gave up', 'to smoke', 'three years'],
      correctIndex: 2,
      explanation: '"Give up" là cụm động từ kết thúc bằng giới từ "up" ➔ Động từ theo sau bắt buộc là V-ing, sửa "to smoke" thành "smoking".',
      trapNote: 'Sau tất cả các Phrasal Verbs có giới từ (give up, keep on, put off...) đều là V-ing.',
      difficulty: 'hard',
      type: 'error_find'
    },
    {
      id: 'q-13-1-10',
      lessonId: 'lesson-13-1',
      question: 'She spends two hours every day _______ English communication skills.',
      options: ['practice', 'to practice', 'practicing', 'practiced'],
      correctIndex: 2,
      explanation: 'Cấu trúc "spend + time + (on) V-ing" (dành thời gian làm việc gì) ➔ chọn "practicing".',
      trapNote: 'Phân biệt với cấu trúc "It takes + time + TO-V".',
      difficulty: 'hard',
      type: 'fill_blank'
    }
  ],

  // ==========================================
  // CHỦ ĐIỂM 20: VĂN PHẠM GIAO TIẾP
  // ==========================================
  'lesson-20-1': [
    {
      id: 'q-20-1-1',
      lessonId: 'lesson-20-1',
      question: 'The weather today is very pleasant, _______ ?',
      options: ['is it', 'isn\'t it', 'does it', 'doesn\'t it'],
      correctIndex: 1,
      explanation: 'Nguyên tắc trái dấu trong Câu hỏi đuôi: Mệnh đề chính khẳng định ("The weather is...") ➔ Phần đuôi phải phủ định và dùng trợ động từ "isn\'t it?".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-2',
      lessonId: 'lesson-20-1',
      question: 'You didn\'t lock the back door before leaving, _______ ?',
      options: ['did you', 'didn\'t you', 'do you', 'don\'t you'],
      correctIndex: 0,
      explanation: 'Mệnh đề chính phủ định ("didn\'t lock") ➔ Phần đuôi khẳng định: "did you?".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-3',
      lessonId: 'lesson-20-1',
      question: 'I am right about this matter, _______ ?',
      options: ['am not I', 'amn\'t I', 'aren\'t I', 'ain\'t I'],
      correctIndex: 2,
      explanation: 'Trường hợp ngoại lệ đặc biệt: "I am..." thì phần đuôi BẮT BUỘC là "aren\'t I?". Tiếng Anh chuẩn không tồn tại từ *amn\'t I.',
      trapNote: 'Bẫy đề thi kinh điển: luôn nhớ "I am ➔ aren\'t I?".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-4',
      lessonId: 'lesson-20-1',
      question: 'There is a post office near your apartment, _______ ?',
      options: ['isn\'t it', 'isn\'t there', 'is there', 'is it'],
      correctIndex: 1,
      explanation: 'Mệnh đề có cấu trúc "There is..." ➔ Phần đuôi giữ nguyên chủ ngữ giả "there": "isn\'t there?".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-5',
      lessonId: 'lesson-20-1',
      question: 'Nobody called me while I was out, _______ ?',
      options: ['did they', 'didn\'t they', 'did he', 'didn\'t he'],
      correctIndex: 0,
      explanation: 'Các đại từ bất định "Nobody, No one, Nothing, Never, Rarely" mang nghĩa PHỦ ĐỊNH ➔ Phần đuôi phải ở thể KHẲNG ĐỊNH. Với "Nobody", đại từ thay thế ở đuôi là "they" ➔ "did they?".',
      trapNote: 'Chủ ngữ "Nobody" làm câu mang nghĩa phủ định, nên đuôi phải là khẳng định.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-6',
      lessonId: 'lesson-20-1',
      question: 'Let\'s go for a picnic this weekend, _______ ?',
      options: ['will you', 'shall we', 'do we', 'can we'],
      correctIndex: 1,
      explanation: 'Cấu trúc rủ rê với "Let\'s + V..." ➔ Phần đuôi cố định luôn là "SHALL WE?".',
      trapNote: 'Bẫy: Let\'s do sth ➔ shall we? Nhưng Let us do sth (xin phép) ➔ will you?.',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-7',
      lessonId: 'lesson-20-1',
      question: 'Don\'t open that confidential file, _______ ?',
      options: ['will you', 'shall we', 'do you', 'don\'t you'],
      correctIndex: 0,
      explanation: 'Câu mệnh lệnh phủ định ("Don\'t + V...") ➔ Phần đuôi luôn luôn là "WILL YOU?".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-8',
      lessonId: 'lesson-20-1',
      question: 'Nothing serious happened to the passengers in the accident, _______ ?',
      options: ['did it', 'didn\'t it', 'did they', 'didn\'t they'],
      correctIndex: 0,
      explanation: '"Nothing" mang nghĩa phủ định và là đại từ chỉ vật số ít (thay bằng "it") ➔ Đuôi khẳng định: "did it?".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-9',
      lessonId: 'lesson-20-1',
      question: 'She rarely watches horror movies late at night, _______ ?',
      options: ['does she', 'doesn\'t she', 'is she', 'isn\'t she'],
      correctIndex: 0,
      explanation: 'Trạng từ "rarely" (hiếm khi) mang nghĩa bán phủ định ➔ Câu coi như là phủ định, phần đuôi phải là khẳng định: "does she?".',
      trapNote: 'Bẫy: Các trạng từ hardly, seldom, rarely, barely làm câu mang nghĩa phủ định.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 'q-20-1-10',
      lessonId: 'lesson-20-1',
      question: 'You must finish this report by 5 PM, _______ ?',
      options: ['mustn\'t you', 'needn\'t you', 'don\'t you', 'won\'t you'],
      correctIndex: 0,
      explanation: '"Must" diễn tả sự bắt buộc hoặc cần thiết ➔ Phần đuôi phủ định dùng "mustn\'t you?".',
      difficulty: 'medium',
      type: 'fill_blank'
    }
  ]
};

/**
 * Ngân hàng câu hỏi dự phòng chuyên sâu theo từng chủ điểm ngữ pháp lớn (Topic-level pool).
 * ĐẢM BẢO 100% CÂU HỎI VÀ TẤT CẢ CÁC ĐÁP ÁN A, B, C, D ĐỀU LÀ TIẾNG ANH CHUẨN ĐỀ THI,
 * TUYỆT ĐỐI KHÔNG CÓ BẤT KỲ ĐÁP ÁN TIẾNG VIỆT META NÀO NHƯ "Một dạng khác" hay "Cách dùng sai".
 */
const TOPIC_FALLBACK_QUESTIONS: Record<string, IGrammarQuizQuestion[]> = {
  // Topic 02: Pronouns & Possessives
  'topic-02': [
    {
      id: 't2-q1',
      lessonId: '',
      question: 'Lan and _______ went to the school library to borrow some reference books.',
      options: ['me', 'I', 'mine', 'myself'],
      correctIndex: 1,
      explanation: 'Đứng ở vị trí chủ ngữ kết hợp ("Lan and I") ➔ Dùng đại từ nhân xưng chủ ngữ "I", không dùng đại từ tân ngữ "me".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't2-q2',
      lessonId: '',
      question: 'This is my notebook, and that one over there is _______.',
      options: ['your', 'yours', 'you', 'yourself'],
      correctIndex: 1,
      explanation: 'Đại từ sở hữu "yours" = "your notebook", đứng một mình làm tân ngữ/bổ ngữ không cần danh từ theo sau.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't2-q3',
      lessonId: '',
      question: 'The little boy prepared breakfast all by _______ this morning.',
      options: ['him', 'his', 'himself', 'he'],
      correctIndex: 2,
      explanation: 'Cụm từ "by oneself" (tự mình làm) với chủ ngữ "The little boy" ➔ dùng "himself".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't2-q4',
      lessonId: '',
      question: 'Our house is much bigger than _______.',
      options: ['their', 'theirs', 'them', 'they'],
      correctIndex: 1,
      explanation: '"Theirs" = "their house" là đại từ sở hữu thay thế cho danh từ đã nhắc phía trước.',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't2-q5',
      lessonId: '',
      question: 'The children enjoyed _______ very much at the amusement park.',
      options: ['themselves', 'theirselves', 'them', 'they'],
      correctIndex: 0,
      explanation: 'Cấu trúc "enjoy oneself" (chơi vui vẻ): chủ ngữ số nhiều "The children" ➔ "themselves". Không tồn tại từ *theirselves.',
      trapNote: 'Bẫy chính tả: themselves (đúng), theirselves (sai).',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't2-q6',
      lessonId: '',
      question: 'Please help _______ to some fruits and drinks on the table.',
      options: ['you', 'yourself', 'your', 'yours'],
      correctIndex: 1,
      explanation: 'Thành ngữ mời khách: "Help yourself to sth" (Cứ tự nhiên dùng món gì).',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't2-q7',
      lessonId: '',
      question: 'My sister cut _______ while she was preparing dinner.',
      options: ['her', 'hers', 'herself', 'she'],
      correctIndex: 2,
      explanation: 'Hành động tự gây thương tích cho bản thân: "cut herself".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't2-q8',
      lessonId: '',
      question: 'Whose car is parked outside? - It is _______.',
      options: ['her', 'hers', 'she', 'herself'],
      correctIndex: 1,
      explanation: 'Trả lời cho câu hỏi sở hữu "Whose" mà không có danh từ theo sau ➔ dùng đại từ sở hữu "hers".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't2-q9',
      lessonId: '',
      question: 'Neither of the students finished _______ test on time.',
      options: ['their', 'his or her', 'theirs', 'them'],
      correctIndex: 1,
      explanation: 'Trong ngữ pháp chuẩn học thuật, "Neither of + danh từ số nhiều" đi với đại từ sở hữu số ít "his or her".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't2-q10',
      lessonId: '',
      question: 'Each of the participants was given a certificate of _______.',
      options: ['them', 'theirs', 'their own', 'themselves'],
      correctIndex: 2,
      explanation: 'Cụm từ "of one\'s own" diễn tả tính sở hữu độc lập ➔ "of their own".',
      difficulty: 'hard',
      type: 'fill_blank'
    }
  ],

  // Topic 03: Prepositions
  'topic-03': [
    {
      id: 't3-q1',
      lessonId: '',
      question: 'The final examination will take place _______ June 15th.',
      options: ['in', 'on', 'at', 'by'],
      correctIndex: 1,
      explanation: 'Đi kèm ngày tháng cụ thể ("June 15th") bắt buộc dùng giới từ "ON".',
      trapNote: 'Tháng đứng một mình dùng IN (in June), có ngày đi kèm phải dùng ON (on June 15th).',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't3-q2',
      lessonId: '',
      question: 'My father usually drinks a cup of coffee _______ the morning.',
      options: ['on', 'in', 'at', 'for'],
      correctIndex: 1,
      explanation: 'Các buổi trong ngày dùng: "in the morning", "in the afternoon", "in the evening".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't3-q3',
      lessonId: '',
      question: 'We agreed to meet each other _______ 7:30 PM outside the cinema.',
      options: ['in', 'on', 'at', 'to'],
      correctIndex: 2,
      explanation: 'Mốc thời gian giờ giấc cụ thể trên đồng hồ dùng giới từ "AT": "at 7:30 PM".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't3-q4',
      lessonId: '',
      question: 'They often go to the countryside _______ the weekend.',
      options: ['at / on', 'in', 'by', 'to'],
      correctIndex: 0,
      explanation: 'Cuối tuần có thể dùng "at the weekend" (Anh-Anh) hoặc "on the weekend" (Anh-Mỹ). Cả hai đều đúng.',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't3-q5',
      lessonId: '',
      question: 'The pharmacy is located _______ the post office and the bank.',
      options: ['among', 'between', 'opposite', 'behind'],
      correctIndex: 1,
      explanation: 'Cấu trúc định vị giữa hai đối tượng: "between A and B".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't3-q6',
      lessonId: '',
      question: 'My house is quite close to school, so I usually go _______ foot.',
      options: ['by', 'on', 'in', 'with'],
      correctIndex: 1,
      explanation: 'Đi bộ dùng cụm cố định "ON FOOT", các phương tiện khác mới dùng "by" (by bus, by car).',
      trapNote: 'Bẫy thi: Không dùng *by foot, phải là on foot.',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't3-q7',
      lessonId: '',
      question: 'We arrived _______ Noi Bai International Airport late at night.',
      options: ['in', 'at', 'to', 'on'],
      correctIndex: 1,
      explanation: 'Đến địa điểm cụ thể nhỏ hẹp (sân bay, nhà ga, trường học) dùng "arrive AT"; đến thành phố/quốc gia dùng "arrive IN".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't3-q8',
      lessonId: '',
      question: 'I will see you _______ Monday morning for our group project.',
      options: ['in', 'at', 'on', 'by'],
      correctIndex: 2,
      explanation: 'Khi có thứ trong tuần đứng trước buổi (Monday morning) ➔ Ưu tiên dùng "ON".',
      trapNote: 'In the morning nhưng ON Monday morning.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't3-q9',
      lessonId: '',
      question: 'Vietnam gained its independence _______ 1945.',
      options: ['on', 'in', 'at', 'since'],
      correctIndex: 1,
      explanation: 'Đi với năm ("1945") dùng giới từ "IN".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't3-q10',
      lessonId: '',
      question: 'The students are sitting _______ the desk doing their assignments.',
      options: ['in', 'at', 'on', 'with'],
      correctIndex: 1,
      explanation: 'Ngồi vào bàn học/làm việc dùng cụm "sit at the desk".',
      difficulty: 'hard',
      type: 'fill_blank'
    }
  ],

  // Topic 05: Present Tenses
  'topic-05': [
    {
      id: 't5-q1',
      lessonId: '',
      question: 'The sun _______ in the east and sets in the west.',
      options: ['rises', 'is rising', 'rose', 'has risen'],
      correctIndex: 0,
      explanation: 'Sự thật hiển nhiên / chân lý tự nhiên luôn chia ở thì Hiện tại đơn: "rises".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't5-q2',
      lessonId: '',
      question: 'Listen! Someone _______ the piano in the music room upstairs.',
      options: ['plays', 'is playing', 'played', 'has played'],
      correctIndex: 1,
      explanation: 'Có dấu hiệu mệnh lệnh "Listen!" thể hiện hành động đang xảy ra ➔ Thì Hiện tại tiếp diễn: "is playing".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't5-q3',
      lessonId: '',
      question: 'I _______ what you mean, but I still disagree with your decision.',
      options: ['am understanding', 'understand', 'understood', 'am understood'],
      correctIndex: 1,
      explanation: '"Understand" là động từ chỉ nhận thức/trạng thái (Stative verb) ➔ TUYỆT ĐỐI KHÔNG chia ở thì tiếp diễn, dùng "understand".',
      trapNote: 'Stative verbs (know, believe, understand, love, hate...) không dùng ở dạng tiếp diễn.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't5-q4',
      lessonId: '',
      question: 'My brother usually _______ to school by bicycle, but today he is taking the bus.',
      options: ['goes', 'is going', 'went', 'has gone'],
      correctIndex: 0,
      explanation: 'Thói quen lặp đi lặp lại có trạng từ "usually" ➔ Chia Hiện tại đơn: "goes".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't5-q5',
      lessonId: '',
      question: 'Look! That strange man _______ to open the car door.',
      options: ['tries', 'is trying', 'tried', 'has tried'],
      correctIndex: 1,
      explanation: 'Dấu hiệu "Look!" ➔ Hành động đang diễn ra trước mắt: "is trying".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't5-q6',
      lessonId: '',
      question: 'The train to Hue _______ at exactly 8:15 tomorrow morning.',
      options: ['leaves', 'is leaving', 'will leave', 'left'],
      correctIndex: 0,
      explanation: 'Lịch trình tàu xe, máy bay cố định (timetables) dùng thì Hiện tại đơn mang nghĩa tương lai ➔ "leaves".',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't5-q7',
      lessonId: '',
      question: 'This delicious soup _______ very good.',
      options: ['is tasting', 'tastes', 'taste', 'was tasting'],
      correctIndex: 1,
      explanation: '"Taste" với nghĩa "có vị như thế nào" là động từ chỉ tri giác ➔ Chia thì Hiện tại đơn: "tastes".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: 't5-q8',
      lessonId: '',
      question: 'Why _______ you always _______ your keys? It is so annoying!',
      options: ['do / lose', 'are / losing', 'did / lose', 'have / lost'],
      correctIndex: 1,
      explanation: 'Hiện tại tiếp diễn đi kèm "always" dùng để phàn nàn về một thói quen gây khó chịu ➔ "are you always losing".',
      trapNote: 'Bẫy thi: "Always" đi với Hiện tại tiếp diễn để diễn tả sự phàn nàn/bực mình.',
      difficulty: 'hard',
      type: 'fill_blank'
    },
    {
      id: 't5-q9',
      lessonId: '',
      question: 'Water _______ at 0 degrees Celsius.',
      options: ['freezes', 'is freezing', 'froze', 'freeze'],
      correctIndex: 0,
      explanation: 'Quy luật vật lý ➔ Hiện tại đơn: "freezes".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: 't5-q10',
      lessonId: '',
      question: 'At the moment, our teacher _______ our final test papers.',
      options: ['grades', 'is grading', 'graded', 'has graded'],
      correctIndex: 1,
      explanation: 'Dấu hiệu "At the moment" ➔ Hiện tại tiếp diễn: "is grading".',
      difficulty: 'easy',
      type: 'fill_blank'
    }
  ]
};

/**
 * Trích xuất đủ 10 câu trắc nghiệm tiếng Anh chuẩn cho từng bài học.
 * Nếu bài học chưa có trong Database, tự động lấy các câu hỏi thực tế cùng chuyên đề lớn (Topic).
 * ĐẢM BẢO 100% CÂU VÀ ĐÁP ÁN ĐỀU LÀ TIẾNG ANH CHUẨN, KHÔNG CÓ TEXT PLACEHOLDER.
 */
export const getGrammarQuizForLesson = (lesson: IGrammarLesson): IGrammarQuizQuestion[] => {
  // 1. Kiểm tra trực tiếp ID bài học
  const directList = GRAMMAR_QUIZ_DATABASE[lesson.id];
  if (directList && directList.length >= 10) {
    return directList.slice(0, 10);
  }

  // 2. Tìm theo chuyên đề lớn (Topic ID)
  // Xác định topicId từ lessonId (ví dụ: lesson-1-1 -> topic-01, lesson-13-2 -> topic-13)
  const match = lesson.id.match(/^lesson-(\d+)-/);
  const topicNum = match ? parseInt(match[1], 10) : 1;
  const topicKey = `topic-${topicNum < 10 ? '0' + topicNum : topicNum}`;

  const topicList = TOPIC_FALLBACK_QUESTIONS[topicKey];

  if (topicList && topicList.length >= 10) {
    return topicList.map((q, idx) => ({
      ...q,
      id: `${lesson.id}-gen-${idx + 1}`,
      lessonId: lesson.id
    }));
  }

  // 3. Dự phòng toàn diện bằng bộ 10 câu trắc nghiệm tổng hợp chuẩn ôn thi vào 10
  // 100% Tiếng Anh, phân loại cấp độ rõ ràng:
  return [
    {
      id: `${lesson.id}-core-1`,
      lessonId: lesson.id,
      question: 'My parents _______ in this beautiful town since they got married.',
      options: ['live', 'lived', 'have lived', 'are living'],
      correctIndex: 2,
      explanation: 'Có dấu hiệu "since + mốc quá khứ" ➔ Thì Hiện tại hoàn thành: "have lived".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-2`,
      lessonId: lesson.id,
      question: 'If the weather _______ fine tomorrow, we will go camping in the forest.',
      options: ['is', 'will be', 'was', 'were'],
      correctIndex: 0,
      explanation: 'Mệnh đề If của câu điều kiện loại 1 chia ở thì Hiện tại đơn: "If the weather is fine...".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-3`,
      lessonId: lesson.id,
      question: 'This house _______ by my grandfather more than fifty years ago.',
      options: ['built', 'was built', 'is built', 'has been built'],
      correctIndex: 1,
      explanation: 'Câu bị động quá khứ đơn có "ago" ➔ S + was/were + V3: "was built".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-4`,
      lessonId: lesson.id,
      question: 'She asked me where I _______ during the summer vacation.',
      options: ['go', 'went', 'had gone', 'have gone'],
      correctIndex: 2,
      explanation: 'Câu tường thuật gián tiếp lùi thì từ Quá khứ đơn về Quá khứ hoàn thành: "had gone".',
      difficulty: 'medium',
      type: 'transformation'
    },
    {
      id: `${lesson.id}-core-5`,
      lessonId: lesson.id,
      question: 'The man _______ car was stolen reported the incident to the police.',
      options: ['who', 'whom', 'whose', 'which'],
      correctIndex: 2,
      explanation: 'Đại từ quan hệ chỉ sở hữu đứng trước danh từ "car" ➔ dùng "whose car".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-6`,
      lessonId: lesson.id,
      question: 'My father decided _______ smoking because of his health issues.',
      options: ['stop', 'stopping', 'to stop', 'stopped'],
      correctIndex: 2,
      explanation: 'Động từ "decide" theo sau bởi To-V: "decide to stop".',
      difficulty: 'easy',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-7`,
      lessonId: lesson.id,
      question: 'Although it rained very heavily, _______ to school on time.',
      options: ['but they went', 'they went', 'however they went', 'so they went'],
      correctIndex: 1,
      explanation: 'Mệnh đề có "Although" thì mệnh đề chính TUYỆT ĐỐI KHÔNG dùng "but" hoặc "so": "they went".',
      trapNote: 'Bẫy thi: Đã có Although thì không được có But.',
      difficulty: 'hard',
      type: 'rule_check'
    },
    {
      id: `${lesson.id}-core-8`,
      lessonId: lesson.id,
      question: 'Find the underlined error: "She didn\'t [A] used to [B] drink milk when [C] she was [D] small."',
      options: ["didn't", 'used to', 'when', 'was'],
      correctIndex: 1,
      explanation: 'Sau trợ động từ "didn\'t", động từ "used to" phải trở về nguyên thể là "use to", không để có đuôi -d.',
      difficulty: 'hard',
      type: 'error_find'
    },
    {
      id: `${lesson.id}-core-9`,
      lessonId: lesson.id,
      question: 'You haven\'t finished your homework yet, _______ ?',
      options: ['have you', 'haven\'t you', 'do you', 'don\'t you'],
      correctIndex: 0,
      explanation: 'Câu hỏi đuôi: Mệnh đề chính phủ định ("haven\'t finished") ➔ Đuôi khẳng định: "have you?".',
      difficulty: 'medium',
      type: 'fill_blank'
    },
    {
      id: `${lesson.id}-core-10`,
      lessonId: lesson.id,
      question: 'It was _______ cold that we couldn\'t go outside for a walk.',
      options: ['so', 'such', 'too', 'very'],
      correctIndex: 0,
      explanation: 'Cấu trúc: "SO + Tính từ + THAT + Mệnh đề": "so cold that...".',
      difficulty: 'hard',
      type: 'fill_blank'
    }
  ];
};
