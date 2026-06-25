import { Question, MockExam, Solution } from '../types';

// Danh sách câu hỏi cho Đề thi thử Tiếng Anh Vào 10 - Số 1 (34 câu)
export const englishMockQuestions: Question[] = [
  // --- PHẦN 1 & 2: PHÁT ÂM VÀ TRỌNG ÂM (Q1 - Q4) ---
  {
    id: 'mock-eng-1-q1',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Choose the word whose underlined part is pronounced differently from the others:',
    options: [
      'A. cleaned',
      'B. helped',
      'C. worked',
      'D. watched'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q2',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Choose the word whose underlined part is pronounced differently from the others:',
    options: [
      'A. great',
      'B. beautiful',
      'C. teacher',
      'D. cheap'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q3',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Choose the word whose main stress pattern is placed differently from the others:',
    options: [
      'A. return',
      'B. decide',
      'C. visit',
      'D. improve'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q4',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Choose the word whose main stress pattern is placed differently from the others:',
    options: [
      'A. environment',
      'B. vocabulary',
      'C. conversation',
      'D. original'
    ],
    correctAnswer: 'C',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },

  // --- PHẦN 3: NGỮ PHÁP & TỪ VỰNG - ĐỐI THOẠI (Q5 - Q13) ---
  {
    id: 'mock-eng-1-q5',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'If we __________ water, we will have to pay more money next month.',
    options: [
      'A. waste',
      'B. save',
      'C. protect',
      'D. clean'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q6',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'She is very proud __________ her daughter who won the first prize in the English contest.',
    options: [
      'A. of',
      'B. on',
      'C. at',
      'D. in'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q7',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'The children were playing soccer when it __________ to rain heavily.',
    options: [
      'A. start',
      'B. started',
      'C. starts',
      'D. was starting'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q8',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'You have read the book about our solar system, __________ you?',
    options: [
      'A. do',
      'B. don\'t',
      'C. have',
      'D. haven\'t'
    ],
    correctAnswer: 'D',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q9',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'My father suggests __________ to the countryside this weekend to relax.',
    options: [
      'A. go',
      'B. to go',
      'C. going',
      'D. went'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q10',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'The city of Barcelona __________ a lot since it worked on green designs.',
    options: [
      'A. improved',
      'B. has improved',
      'C. improves',
      'D. was improving'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q11',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'What does a "KEEP OFF THE GRASS" sign mean?',
    options: [
      'A. You can sit on the grass.',
      'B. You must not walk on the grass.',
      'C. You should water the grass.',
      'D. You are allowed to play here.'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q12',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'What does a "NO LITTERING" sign mean?',
    options: [
      'A. You must throw trash here.',
      'B. You should recycle your paper.',
      'C. You must not throw trash on the ground.',
      'D. You are allowed to park your car.'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q13',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt6',
    content: 'Peter: "Why don\'t we go to the beach for a change?"\nMary: "__________"',
    options: [
      'A. That\'s a good idea.',
      'B. You\'re welcome.',
      'C. Yes, I do.',
      'D. I don\'t feel like.'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },

  // --- SẮP XẾP HỘI THOẠI/EMAIL/ĐOẠN VĂN (Q14 - Q16 - TỪ ẢNH 1 - eng-qt12) ---
  {
    id: 'mock-eng-1-q14',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt12',
    content: `Reorder the following sentences to make a complete dialogue:

a. Jane: No, I haven't. I don't feel like reading it right now.
b. Paul: Have you read the book about our solar system?
c. Jane: Okay, I'll think about that.
d. Paul: Why don't you give it a try? I'm sure you'll like it.`,
    options: [
      'A. d-b-c-a',
      'B. a-d-c-b',
      'C. b-a-d-c',
      'D. b-c-d-a'
    ],
    correctAnswer: 'C',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q15',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt12',
    content: `Reorder the following sentences to make a complete email:

Dear Sir,
a. Please review the agenda I sent earlier and let me know if any changes are required.
b. I look forward to your feedback and confirmation.
c. We will also discuss the timeline for the upcoming tasks.
d. I would like to confirm that the meeting tomorrow at 10 a.m. will cover the project updates and next steps.
Best regards,`,
    options: [
      'A. b-a-d-c',
      'B. d-a-c-b',
      'C. c-d-a-b',
      'D. a-b-d-c'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q16',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt12',
    content: `Reorder the following sentences to make a complete paragraph:

a. Also, we take care of the garden by watering plants and picking up leaves.
b. Students at our school help to keep the school clean.
c. First, we put trash in the bins and never throw litter on the ground.
d. In conclusion, we all feel proud because a clean school is a nice place to learn.
e. Then, some students clean the classrooms by sweeping floors and wiping desks.`,
    options: [
      'A. e-c-d-a-b',
      'B. d-a-c-e-b',
      'C. c-b-d-a-e',
      'D. b-c-e-a-d'
    ],
    correctAnswer: 'D',
    difficulty: 'hard',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },

  // --- PART 4: ĐỌC HIỂU TRẮC NGHIỆM (Q17 - Q20 - TỪ ẢNH 2 - eng-qt13) ---
  {
    id: 'mock-eng-1-q17',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt13',
    content: `Read the following passage and choose the best answer for the question:

When we think of cities, we often imagine busy streets, tall buildings, and air pollution. But now, many cities are trying to be greener and cleaner. A green city uses smart ideas to help the environment and raise the quality of life. This means people benefit greatly from more green spaces, better public transport and cleaner energy.
Barcelona is a good example. Since 1859, it has worked on green designs. In 1992, before the Olympic Games, the city improved a lot. Now, many people use buses and trains, and there are many recycling bins around the city.
Portland, in the USA, is also a green city. Since 1903, it has made parks and long walking and bike paths. People can even choose clean energy like solar or wind for a small extra cost.
More cities around the world are becoming green. This trend is growing and helping the planet.

Question 17: The passage is mainly about _______.`,
    options: [
      'A. cities with tall buildings and busy roads',
      'B. how cities are trying to become greener',
      'C. the best cities to visit on holiday',
      'D. problems with transport in big cities'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q18',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt13',
    content: `[Reading Passage: Green Cities]

Question 18: The word "improved" in the passage is closest in meaning to _______.`,
    options: [
      'A. fixed',
      'B. changed',
      'C. built',
      'D. made better'
    ],
    correctAnswer: 'D',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q19',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt13',
    content: `[Reading Passage: Green Cities]

Question 19: What kind of transport do many people use in Barcelona now?`,
    options: [
      'A. taxis and private cars',
      'B. trains and airplanes',
      'C. buses and trains',
      'D. boats and scooters'
    ],
    correctAnswer: 'C',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q20',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt13',
    content: `[Reading Passage: Green Cities]

Question 20: Which of the following is TRUE about Portland?`,
    options: [
      'A. It has long bike and walking paths.',
      'B. It has many shopping malls.',
      'C. It has very tall office towers.',
      'D. It has lots of traffic lights.'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },

  // --- PART 5: ĐỌC HIỂU ĐÚNG / SAI (Q21 - Q24 - TỪ ẢNH 3 - eng-qt14) ---
  {
    id: 'mock-eng-1-q21',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt14',
    content: `Read the following passage and decide if the statements that follow are TRUE (T) or FALSE (F):

Viet Nam is home to some amazing islands, and three of the best are Côn Đảo, Phú Quốc, and Lý Sơn. Phú Quốc is probably the most popular island among the three. It's a lot more accessible with regular flights connecting to major cities in Viet Nam. It has many scenic attractions including beaches, smaller islands, and a national park. Côn Đảo is the perfect island for people who want to relax. It isn't as exciting as Phú Quốc, but there are still plenty of things to do. Lý Sơn is much smaller and isn't as accessible because you can only reach it by boat from Quảng Ngãi. It doesn't have the typical long, sandy beaches, but the beaches here are far more scenic than in many other places. All three islands have something unique to offer. Therefore, whichever you choose, you can be sure to have an amazing experience.

Question 21: Phú Quốc is considered the most popular island because it is easy to reach.`,
    options: [
      'A. TRUE (T)',
      'B. FALSE (F)'
    ],
    correctAnswer: 'A',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q22',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt14',
    content: `[Reading Passage: Amazing Islands in Viet Nam]

Question 22: Côn Đảo is the perfect island for people who look for relaxation.`,
    options: [
      'A. TRUE (T)',
      'B. FALSE (F)'
    ],
    correctAnswer: 'A',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q23',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt14',
    content: `[Reading Passage: Amazing Islands in Viet Nam]

Question 23: Lý Sơn is typical of long, sandy beaches, though there're only a few scenic ones.`,
    options: [
      'A. TRUE (T)',
      'B. FALSE (F)'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },
  {
    id: 'mock-eng-1-q24',
    subjectId: 'english',
    topicId: 'eng-t3',
    questionTypeId: 'eng-qt14',
    content: `[Reading Passage: Amazing Islands in Viet Nam]

Question 24: Whichever island tourists want to visit, there's always a good choice of transport means.`,
    options: [
      'A. TRUE (T)',
      'B. FALSE (F)'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'choice'
  },

  // --- PART 6: WORD FORM - TỰ LUẬN ĐIỀN TỪ (Q25 - Q28 - TỪ ẢNH 4 - eng-qt7) ---
  {
    id: 'mock-eng-1-q25',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt7',
    content: 'Give the correct form of word in brackets:\n\nThe Internet is one of the most important (invent) ____________________ of our time.',
    correctAnswer: 'inventions',
    acceptedAnswers: ['invention', 'inventions'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q26',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt7',
    content: 'Give the correct form of word in brackets:\n\nMy teacher suggests (study) ____________________ more about space to understand its mysteries.',
    correctAnswer: 'studying',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q27',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt7',
    content: 'Give the correct form of word in brackets:\n\nWe should adopt a green lifestyle to help conserve the (nature) ____________________ resources.',
    correctAnswer: 'natural',
    difficulty: 'easy',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q28',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt7',
    content: 'Give the correct form of word in brackets:\n\nI\'ll talk about our (please) ____________________ experience when we couldn\'t find any lodging in that village.',
    correctAnswer: 'unpleasant',
    acceptedAnswers: ['unpleasant', 'unpleasurable'],
    difficulty: 'hard',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },

  // --- PART 7: TÌM LỖI SAI & SỬA LẠI (Q29 - Q30 - TỪ ẢNH 4 - eng-qt11) ---
  {
    id: 'mock-eng-1-q29',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt11',
    content: 'Identify the mistake and write the corrected word in the answer box:\n\n*We were very tiring after the long walk in the mountains.*',
    correctAnswer: 'tired',
    acceptedAnswers: ['tiring -> tired', 'tired'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q30',
    subjectId: 'english',
    topicId: 'eng-t2',
    questionTypeId: 'eng-qt11',
    content: 'Identify the mistake and write the corrected word in the answer box:\n\n*Typical English cuisine has developed since many centuries.*',
    correctAnswer: 'for',
    acceptedAnswers: ['since -> for', 'for'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },

  // --- PART 8: VIẾT LẠI CÂU - KHÔNG QUÁ 4 TỪ (Q31 - Q34 - TỪ ẢNH 4 - eng-qt15) ---
  {
    id: 'mock-eng-1-q31',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt15',
    content: '"Do you know the way to the Italian restaurant?" Mary asked Peter.\n\n-> Mary asked Peter ________________________________________ to the Italian restaurant. (Use NO MORE THAN FOUR WORDS)',
    correctAnswer: 'if he knew the way',
    acceptedAnswers: ['whether he knew the way', 'if he knew the way', 'whether he knew way'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q32',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt15',
    content: 'It\'s raining heavily outside so we can\'t leave now.\n\n-> We can\'t leave now ________________________________________ heavily outside. (Use NO MORE THAN FOUR WORDS)',
    correctAnswer: 'because it is raining',
    acceptedAnswers: ['because it\'s raining', 'because it is raining', 'as it is raining', 'since it is raining'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q33',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt15',
    content: 'Venus, the second planet from the Sun, is sometimes called the Earth\'s sister.\n\n-> The second planet from the Sun is Venus, ________________________________________ the Earth\'s sister. (Use NO MORE THAN FOUR WORDS)',
    correctAnswer: 'which is sometimes called',
    acceptedAnswers: ['sometimes called', 'which is sometimes called', 'which is called'],
    difficulty: 'hard',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  },
  {
    id: 'mock-eng-1-q34',
    subjectId: 'english',
    topicId: 'eng-t4',
    questionTypeId: 'eng-qt15',
    content: 'Do exercise regularly and your health will improve.\n\n-> Your health will improve ________________________________________ regularly. (Use NO MORE THAN FOUR WORDS)',
    correctAnswer: 'if you exercise',
    acceptedAnswers: ['if you do exercise', 'if you exercise', 'if you work out'],
    difficulty: 'medium',
    sourceType: 'mock_exam',
    validatorType: 'exact'
  }
];

// Danh sách câu hỏi cho Đề thi thử Toán học Vào 10 - Số 1 (5 câu)
export const mathMockQuestions: Question[] = [
  {
    id: 'mock-math-1-q1',
    subjectId: 'math',
    topicId: 'math-t1',
    questionTypeId: 'math-qt1',
    content: `Bài 1. (1,5 điểm)

1. Tính giá trị của biểu thức \\(A = 2\\sqrt{3} - \\sqrt{12} + \\sqrt{4}\\).

2. Giải phương trình \\(2x - 6 = 0\\).

3. Giải bất phương trình \\(4x \\ge x + 3\\).`,
    difficulty: 'easy',
    sourceType: 'mock_exam',
    correctAnswer: 'A = 2; x = 3; x >= 1',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'A', label: 'A =', valueType: 'number', placeholder: '2', hint: 'Nhập giá trị biểu thức A.' },
        { key: 'pt', label: 'x =', valueType: 'number', placeholder: '3', hint: 'Nhập nghiệm của phương trình 2x - 6 = 0.' },
        { key: 'bpt', label: 'Nghiệm BPT:', valueType: 'expression', placeholder: 'x >= 1', hint: 'Nhập nghiệm của bất phương trình (Ví dụ: x >= 1).' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      A: '2',
      pt: '3',
      bpt: 'x >= 1'
    },
    acceptedFinalAnswers: [
      { A: '2', pt: '3', bpt: 'x>=1' }
    ]
  },
  {
    id: 'mock-math-1-q2',
    subjectId: 'math',
    topicId: 'math-t2',
    questionTypeId: 'math-qt2',
    content: `Bài 2. (2,0 điểm)

1. Cho hàm số \\(y = ax^2\\) (\\(a \\neq 0\\)) có đồ thị đi qua điểm \\(A(1; 1)\\). Xác định hệ số \\(a\\).

2. Cho hai biểu thức: \\(M = \\frac{2\\sqrt{x}+1}{\\sqrt{x}+1}\\) và \\(N = \\frac{\\sqrt{x}}{\\sqrt{x}+2} + \\frac{1}{\\sqrt{x}-2} - \\frac{4}{x-4}\\) với \\(x \\ge 0, x \\neq 4\\).

a) Rút gọn biểu thức \\(N\\).

b) Tìm tất cả giá trị nguyên của \\(x\\) để biểu thức \\(P = M \\cdot N\\) nhận giá trị là số nguyên.`,
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'a = 1; N = (\\sqrt{x}+1)/(\\sqrt{x}+2); x = 1',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'a', label: 'a =', valueType: 'number', placeholder: '1', hint: 'Nhập hệ số a của hàm số.' },
        { key: 'N', label: 'N =', valueType: 'expression', placeholder: '(sqrt(x)+1)/(sqrt(x)+2)', hint: 'Nhập biểu thức N đã rút gọn.' },
        { key: 'x', label: 'x =', valueType: 'number', placeholder: '1', hint: 'Nhập giá trị nguyên của x để P nhận giá trị nguyên.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      a: '1',
      N: '(sqrt(x)+1)/(sqrt(x)+2)',
      x: '1'
    },
    acceptedFinalAnswers: [
      { a: '1', N: '(√x+1)/(√x+2)', x: '1' },
      { a: '1', N: '(sqrt(x) + 1)/(sqrt(x) + 2)', x: '1' }
    ]
  },
  {
    id: 'mock-math-1-q3',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: `Bài 3. (1,5 điểm)

Tại một cửa hàng điện máy, tổng giá tiền niêm yết của một chiếc ti vi và một chiếc tủ lạnh là 25 triệu đồng. Tuy nhiên, trong dịp khai trương cửa hàng giảm 10% giá niêm yết mặt hàng ti vi và giảm 20% giá niêm yết mặt hàng tủ lạnh. Vì thế, bà My đã mua một chiếc ti vi và một chiếc tủ lạnh chỉ với tổng số tiền là 21 triệu đồng. Hỏi giá niêm yết của mỗi mặt hàng ban đầu là bao nhiêu?`,
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'Tivi: 10 triệu; Tủ lạnh: 15 triệu',
    answerSchema: {
      type: 'system-solution',
      fields: [
        { key: 'tivi', label: 'Giá tivi (triệu đồng):', valueType: 'number', placeholder: '10' },
        { key: 'tulanh', label: 'Giá tủ lạnh (triệu đồng):', valueType: 'number', placeholder: '15' }
      ],
      proofImageRequired: true,
      orderMatters: true,
      autoCheckMode: 'keyed-numeric'
    },
    correctFinalAnswer: {
      tivi: '10',
      tulanh: '15'
    }
  },
  {
    id: 'mock-math-1-q4',
    subjectId: 'math',
    topicId: 'math-t3',
    questionTypeId: 'math-qt4',
    content: `Bài 4. (2,0 điểm)

1. Bác An mua một khúc gỗ hình trụ có đường kính đáy 0,6 mét và chiều cao 2 mét. Biết rằng mỗi mét khối gỗ có giá 5.000.000 đồng. Tính thể tích của khúc gỗ và số tiền bác An mua khúc gỗ đó (làm tròn kết quả đến hàng chục nghìn).

2. Một hộp đựng 15 tấm thẻ cùng loại được ghi số từ 1 đến 15, hai thẻ khác nhau thì ghi hai số khác nhau. Xét phép thử "Rút ngẫu nhiên một tấm thẻ trong hộp". Viết không gian mẫu của phép thử và tính xác suất của biến cố \\(A\\): "Rút được thẻ ghi số chia hết cho 5".`,
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'V = 0.57 m3; Tiền = 2,830,000 đồng; P(A) = 1/5',
    answerSchema: {
      type: 'expression',
      fields: [
        { key: 'V', label: 'V (m³) ≈', valueType: 'number', placeholder: '0.57', hint: 'Tính thể tích khúc gỗ (Lấy pi ≈ 3.14)' },
        { key: 'tien', label: 'Số tiền (đồng) =', valueType: 'number', placeholder: '2830000', hint: 'Làm tròn kết quả đến hàng chục nghìn.' },
        { key: 'P_A', label: 'P(A) =', valueType: 'fraction', placeholder: '1/5', hint: 'Xác suất rút được thẻ ghi số chia hết cho 5.' }
      ],
      proofImageRequired: true,
      autoCheckMode: 'expression-loose'
    },
    correctFinalAnswer: {
      V: '0.57',
      tien: '2830000',
      P_A: '1/5'
    },
    acceptedFinalAnswers: [
      { V: '0.5652', tien: '2830000', P_A: '0.2' },
      { V: '0.57', tien: '2830000', P_A: '1/5' }
    ]
  },
  {
    id: 'mock-math-1-q5',
    subjectId: 'math',
    topicId: 'math-t5',
    questionTypeId: 'math-qt6',
    content: `Bài 5. (3,0 điểm)

Cho tam giác nhọn \\(ABC\\) (\\(AB < AC\\)) nội tiếp trong đường tròn \\((O)\\). Hai đường cao \\(BD\\) và \\(CE\\) (\\(D\\) thuộc \\(AC\\); \\(E\\) thuộc \\(AB\\)) của tam giác \\(ABC\\) cắt nhau tại \\(H\\).

1. Chứng minh bốn điểm \\(A, D, H, E\\) cùng thuộc một đường tròn.

2. Tia \\(BD\\) cắt đường tròn \\((O)\\) tại điểm thứ hai là \\(M\\) (\\(M\\) khác \\(B\\)). Gọi \\(K\\) là trung điểm của \\(BC\\). Chứng minh tam giác \\(MHC\\) cân và \\(AH = 2OK\\).

3. Đường thẳng \\(AH\\) cắt đường thẳng \\(BC\\) tại \\(F\\), đường thẳng \\(DE\\) cắt đường thẳng \\(BC\\) tại \\(N\\). Chứng minh \\(BN \\cdot CF = CN \\cdot BF\\).`,
    difficulty: 'hard',
    sourceType: 'mock_exam',
    correctAnswer: 'Chứng minh các tính chất hình học theo yêu cầu.',
    answerSchema: {
      type: 'proof-upload',
      fields: [],
      proofImageRequired: true,
      autoCheckMode: 'manual'
    }
  }
];

// Cấu hình các đề thi thử trong hệ thống
export const mockExamsList: MockExam[] = [
  {
    id: 'exam-english-1',
    subjectId: 'english',
    title: 'Đề thi thử Tiếng Anh tuyển sinh Vào 10 - Số 1',
    duration: 60, // 60 phút
    questionIds: englishMockQuestions.map(q => q.id),
    createdAt: new Date().toISOString()
  },
  {
    id: 'exam-math-1',
    subjectId: 'math',
    title: 'Đề thi thử Toán học tuyển sinh Vào 10 - Số 1',
    duration: 120, // 120 phút
    questionIds: mathMockQuestions.map(q => q.id),
    createdAt: new Date().toISOString()
  }
];

// Định nghĩa giải thích chi tiết (Solutions) cho các câu hỏi thi thử
export const mockSolutionsList: Solution[] = [
  {
    "id": "sol-eng-1-q1",
    "questionId": "mock-eng-1-q1",
    "recognition": "Đuôi -ed phát âm /d/ hoặc /t/",
    "translation": "Chọn từ có phần gạch chân phát âm khác với các từ còn lại:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích quy tắc phát âm -ed",
        "explanation": "Phát âm là /t/ sau phụ âm vô thanh (/p/, /k/, /f/, /s/, /ʃ/, /tʃ/). Phát âm là /id/ sau /t/, /d/. Phát âm là /d/ sau các phụ âm hữu thanh còn lại và các nguyên âm.",
        "result": "Áp dụng quy tắc."
      },
      {
        "order": 2,
        "title": "Áp dụng cho từng phương án",
        "explanation": "- cleaned: kết thúc là âm hữu thanh /n/ => phát âm là /d/\n- helped: kết thúc là âm vô thanh /p/ => phát âm là /t/\n- worked: kết thúc là âm vô thanh /k/ => phát âm là /t/\n- watched: kết thúc là âm vô thanh /tʃ/ => phát âm là /t/",
        "result": "cleaned phát âm là /d/, các từ còn lại phát âm là /t/."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Không nhớ nhóm phụ âm vô thanh phát âm /t/."
    ],
    "reviewSuggestions": [
      "Xem lại Chuyên đề phát âm đuôi -ed."
    ]
  },
  {
    "id": "sol-eng-1-q2",
    "questionId": "mock-eng-1-q2",
    "recognition": "Phát âm nguyên âm ea",
    "translation": "Chọn từ có phần gạch chân phát âm khác với các từ còn lại:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích phát âm nguyên âm",
        "explanation": "Phân tích cách phát âm của các từ chứa nhóm kí tự \"ea\" hoặc tương ứng trong từ.",
        "result": "Xác định phiên âm."
      },
      {
        "order": 2,
        "title": "Xác định phiên âm từng từ",
        "explanation": "- great: phát âm là /ɡreɪt/ (âm /eɪ/)\n- beautiful: phát âm là /ˈbjuːtɪfl/ (chữ \"eau\" phát âm là /juː/)\n- teacher: phát âm là /ˈtiːtʃə(r)/ (âm /iː/)\n- cheap: phát âm là /tʃiːp/ (âm /iː/)",
        "result": "great có phần \"ea\" phát âm là /eɪ/, khác với âm /iː/ của teacher và cheap."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm lẫn \"great\" phát âm là /i:/."
    ],
    "reviewSuggestions": [
      "Học các trường hợp phát âm đặc biệt của nhóm nguyên âm \"ea\" (great, break, steak)."
    ]
  },
  {
    "id": "sol-eng-1-q3",
    "questionId": "mock-eng-1-q3",
    "recognition": "Trọng âm từ có 2 âm tiết",
    "translation": "Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích trọng âm động từ và danh/tính từ",
        "explanation": "Thông thường động từ 2 âm tiết có trọng âm rơi vào âm tiết thứ 2, danh/tính từ 2 âm tiết có trọng âm rơi vào âm tiết thứ 1.",
        "result": "Quy tắc trọng âm."
      },
      {
        "order": 2,
        "title": "Xác định trọng âm từng từ",
        "explanation": "- return: động từ, trọng âm rơi vào âm tiết 2 /rɪˈtɜːn/\n- decide: động từ, trọng âm rơi vào âm tiết 2 /dɪˈsaɪd/\n- visit: động từ đặc biệt, trọng âm rơi vào âm tiết 1 /ˈvɪzɪt/\n- improve: động từ, trọng âm rơi vào âm tiết 2 /ɪmˈpruːv/",
        "result": "visit nhấn âm tiết 1, còn lại nhấn âm tiết 2."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nghĩ rằng mọi động từ 2 âm tiết đều nhấn âm tiết 2 (bỏ qua ngoại lệ visit, answer, open, offer...)."
    ],
    "reviewSuggestions": [
      "Ôn tập Chuyên đề trọng âm từ 2 âm tiết và các ngoại lệ động từ."
    ]
  },
  {
    "id": "sol-eng-1-q4",
    "questionId": "mock-eng-1-q4",
    "recognition": "Trọng âm từ có nhiều âm tiết",
    "translation": "Chọn từ có trọng âm chính rơi vào vị trí khác với các từ còn lại:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Quy tắc trọng âm với hậu tố",
        "explanation": "Từ kết thúc bằng đuôi \"-tion\" nhấn vào âm tiết ngay trước nó. Các từ còn lại áp dụng quy tắc trọng âm từ có 3, 4 âm tiết.",
        "result": "Áp dụng quy tắc hậu tố."
      },
      {
        "order": 2,
        "title": "Xác định trọng âm từng từ",
        "explanation": "- environment: nhấn âm tiết 2 /ɪnˈvaɪrənmənt/\n- vocabulary: nhấn âm tiết 2 /vəˈkæbjələri/\n- conversation: nhấn âm tiết 3 /ˌkɒnvəˈseɪʃn/ (do đuôi -tion)\n- original: nhấn âm tiết 2 /əˈrɪdʒənl/",
        "result": "conversation nhấn âm tiết 3, các từ còn lại nhấn âm tiết 2."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Xác định sai vị trí trọng âm của các từ dài như vocabulary hay environment."
    ],
    "reviewSuggestions": [
      "Ghi nhớ quy tắc hậu tố -tion, -ity, -ic... ảnh hưởng đến trọng âm."
    ]
  },
  {
    "id": "sol-eng-1-q5",
    "questionId": "mock-eng-1-q5",
    "recognition": "Từ vựng & Câu điều kiện loại 1",
    "translation": "Nếu chúng ta __________ nước, chúng ta sẽ phải trả nhiều tiền hơn vào tháng tới.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích ngữ nghĩa ngữ cảnh",
        "explanation": "Vế sau \"we will have to pay more money next month\" (sẽ phải trả nhiều tiền hơn) chỉ ra hành động ở vế If phải là một hành động tiêu cực/lãng phí tài nguyên.",
        "result": "Cần tìm động từ mang nghĩa lãng phí."
      },
      {
        "order": 2,
        "title": "Lựa chọn từ phù hợp nhất",
        "explanation": "- waste: lãng phí\n- save: tiết kiệm\n- protect: bảo vệ\n- clean: làm sạch",
        "result": "Đáp án là \"waste\" (lãng phí)."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Dịch sai nghĩa vế sau hoặc nhầm lẫn giữa waste (lãng phí) và save (tiết kiệm)."
    ],
    "reviewSuggestions": [
      "Học từ vựng chủ đề môi trường và cấu trúc câu điều kiện loại 1."
    ]
  },
  {
    "id": "sol-eng-1-q6",
    "questionId": "mock-eng-1-q6",
    "recognition": "Giới từ đi sau tính từ",
    "translation": "Cô ấy rất tự hào __________ con gái mình, người đã giành giải nhất trong cuộc thi tiếng Anh.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc đi với \"proud\"",
        "explanation": "Tính từ \"proud\" (tự hào, kiêu hãnh) luôn đi kèm với giới từ \"of\" tạo thành cụm \"be proud of sth/sb\".",
        "result": "proud + of"
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Dịch nghĩa \"tự hào về\" nên chọn giới từ \"about\" hoặc \"on\" theo thói quen dịch Word-to-Word."
    ],
    "reviewSuggestions": [
      "Ghi nhớ các cụm Tính từ + Giới từ cố định (proud of, fond of, interested in, good at...)."
    ]
  },
  {
    "id": "sol-eng-1-q7",
    "questionId": "mock-eng-1-q7",
    "recognition": "Thì Quá khứ tiếp diễn kết hợp Quá khứ đơn",
    "translation": "Lũ trẻ đang chơi bóng đá thì trời __________ mưa to.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định mối quan hệ giữa hai hành động",
        "explanation": "Hành động \"chơi bóng đá\" đang diễn ra (playing soccer - chia Quá khứ tiếp diễn) thì hành động \"trời mưa\" đột ngột xen vào. Hành động xen vào phải chia ở thì Quá khứ đơn.",
        "result": "Chia động từ ở Quá khứ đơn."
      },
      {
        "order": 2,
        "title": "Chia động từ \"start\" ở quá khứ",
        "explanation": "Động từ \"start\" là động từ có quy tắc, dạng quá khứ đơn là \"started\".",
        "result": "Đáp án là \"started\"."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chia thì hiện tại đơn hoặc quá khứ tiếp diễn song song."
    ],
    "reviewSuggestions": [
      "Xem lại cách dùng từ nối \"when\" và \"while\" trong kết hợp thì quá khứ."
    ]
  },
  {
    "id": "sol-eng-1-q8",
    "questionId": "mock-eng-1-q8",
    "recognition": "Câu hỏi đuôi (Tag question)",
    "translation": "Bạn đã đọc cuốn sách về hệ mặt trời của chúng ta rồi, có phải không?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định trợ động từ và chủ ngữ của mệnh đề chính",
        "explanation": "Mệnh đề chính dùng thì Hiện tại hoàn thành khẳng định: \"You have read...\" với trợ động từ \"have\" và chủ ngữ \"You\".",
        "result": "Trợ động từ khẳng định \"have\"."
      },
      {
        "order": 2,
        "title": "Thành lập phần đuôi",
        "explanation": "Quy tắc câu hỏi đuôi: Mệnh đề chính khẳng định -> phần đuôi phủ định. Ta lấy phủ định của trợ động từ \"have\" là \"haven't\" kết hợp chủ ngữ \"you\".",
        "result": "-> haven't you?"
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Dùng sai trợ động từ sang \"don't\" hoặc \"haven't\" nhưng quên đổi dấu khẳng định/phủ định."
    ],
    "reviewSuggestions": [
      "Học chắc Chuyên đề câu hỏi đuôi với các thì hoàn thành và động từ khuyết thiếu."
    ]
  },
  {
    "id": "sol-eng-1-q9",
    "questionId": "mock-eng-1-q9",
    "recognition": "Danh động từ sau động từ suggest",
    "translation": "Bố tôi gợi ý __________ về quê cuối tuần này để thư giãn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc của động từ \"suggest\"",
        "explanation": "Cấu trúc gợi ý làm việc gì: S + suggest + V-ing.",
        "result": "Động từ thêm đuôi -ing."
      },
      {
        "order": 2,
        "title": "Chia động từ \"go\"",
        "explanation": "Động từ \"go\" thêm -ing thành \"going\".",
        "result": "going"
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Chọn \"to go\" (to-infinitive) do nhầm lẫn với các động từ chỉ mong muốn như want, hope, decide."
    ],
    "reviewSuggestions": [
      "Ghi nhớ danh sách các động từ đi sau bởi V-ing (suggest, avoid, enjoy, practice, mind...)."
    ]
  },
  {
    "id": "sol-eng-1-q10",
    "questionId": "mock-eng-1-q10",
    "recognition": "Thì Hiện tại hoàn thành với từ chỉ mốc thời gian since",
    "translation": "Thành phố Barcelona __________ rất nhiều kể từ khi họ thực hiện các thiết kế xanh.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định dấu hiệu thời gian",
        "explanation": "Trong câu có liên từ \"since\" kết nối mệnh đề chia ở quá khứ đơn \"it worked on green designs\". Mệnh đề chính đứng trước \"since\" diễn tả hành động kéo dài từ quá khứ đến hiện tại, phải chia ở thì Hiện tại hoàn thành.",
        "result": "Chia thì Hiện tại hoàn thành."
      },
      {
        "order": 2,
        "title": "Chia động từ cho chủ ngữ số ít",
        "explanation": "Chủ ngữ \"The city of Barcelona\" là danh từ số ít, đi kèm trợ động từ \"has\" và phân từ hai \"improved\".",
        "result": "has improved"
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chia thì quá khứ đơn \"improved\" do nhầm mốc thời gian."
    ],
    "reviewSuggestions": [
      "Xem lại Chuyên đề thì Hiện tại hoàn thành và phân biệt \"since\" và \"for\"."
    ]
  },
  {
    "id": "sol-eng-1-q11",
    "questionId": "mock-eng-1-q11",
    "recognition": "Đọc hiểu biển báo chỉ dẫn cấm đoán",
    "translation": "Biển báo \"KEEP OFF THE GRASS\" có nghĩa là gì?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Dịch nghĩa biển báo",
        "explanation": "\"Keep off the grass\" nghĩa là \"Tránh xa bãi cỏ / Cấm đi lên cỏ\".",
        "result": "Biển báo cấm giẫm lên cỏ."
      },
      {
        "order": 2,
        "title": "Chọn đáp án tương đương nghĩa",
        "explanation": "- A. Bạn có thể ngồi trên cỏ (sai)\n- B. Bạn không được đi bộ trên cỏ (đúng: must not walk)\n- C. Bạn nên tưới nước cho cỏ (sai)\n- D. Bạn được phép chơi ở đây (sai)",
        "result": "Phương án B phản ánh chính xác nội dung biển báo."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Không hiểu nghĩa của cụm từ \"keep off\"."
    ],
    "reviewSuggestions": [
      "Học các cụm từ biển báo thông dụng (Keep off, No littering, Caution, One way...)."
    ]
  },
  {
    "id": "sol-eng-1-q12",
    "questionId": "mock-eng-1-q12",
    "recognition": "Đọc hiểu biển báo cấm vứt rác",
    "translation": "Biển báo \"NO LITTERING\" có nghĩa là gì?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Dịch nghĩa biển báo",
        "explanation": "\"Litter\" có nghĩa là vứt rác bừa bãi. \"No littering\" là biển báo \"Cấm vứt rác\".",
        "result": "Biển báo cấm xả rác."
      },
      {
        "order": 2,
        "title": "Lựa chọn phương án đồng nghĩa",
        "explanation": "Must not throw trash on the ground (Không được vứt rác xuống đất) đồng nghĩa hoàn toàn với biển báo cấm xả rác.",
        "result": "Chọn C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Lựa chọn nhầm sang hành động tích cực khuyên bảo như tái chế (recycle) hoặc bỏ rác vào thùng (throw trash here). Biển \"No littering\" nhấn mạnh sự cấm đoán xả rác bừa bãi."
    ],
    "reviewSuggestions": [
      "Phân biệt động từ khuyết thiếu chỉ sự cấm đoán \"must not\" với lời khuyên \"should\"."
    ]
  },
  {
    "id": "sol-eng-1-q13",
    "questionId": "mock-eng-1-q13",
    "recognition": "Giao tiếp - Lời đề nghị/gợi ý",
    "translation": "Peter: \"Tại sao chúng ta không đi tắm biển để thay đổi không khí nhỉ?\"\nMary: \"__________\"",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định loại câu giao tiếp",
        "explanation": "Câu \"Why don't we + V...?\" là một lời gợi ý, đề xuất cùng làm một việc gì đó.",
        "result": "Lời gợi ý."
      },
      {
        "order": 2,
        "title": "Đáp lại lời gợi ý phù hợp",
        "explanation": "Để đồng ý với lời gợi ý, người bản xứ thường dùng cấu trúc \"That's a good idea\" (Đó là một ý kiến hay). Các phương án khác không phù hợp ngữ cảnh hoặc cấu trúc ngữ pháp.",
        "result": "Chọn A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm lẫn chọn \"Yes, I do\" vì nghĩ đây là câu hỏi Yes/No thông thường."
    ],
    "reviewSuggestions": [
      "Học các mẫu câu phản hồi giao tiếp thông dụng (đồng ý/từ chối lời mời, lời gợi ý)."
    ]
  },
  {
    "id": "sol-eng-1-q14",
    "questionId": "mock-eng-1-q14",
    "recognition": "Sắp xếp hội thoại thành bài hoàn chỉnh",
    "translation": "Sắp xếp các câu sau để tạo thành đoạn hội thoại hợp lý:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm câu mở đầu cuộc hội thoại",
        "explanation": "Câu mở đầu phải là câu khơi gợi chủ đề. Ở đây là câu (b) của Paul hỏi Jane: \"Have you read the book about our solar system?\" (Bạn đã đọc cuốn sách về hệ mặt trời chưa?)",
        "result": "Bắt đầu bằng b."
      },
      {
        "order": 2,
        "title": "Tìm câu phản hồi tiếp theo",
        "explanation": "Jane trả lời câu hỏi Yes/No của Paul: câu (a) \"No, I haven't. I don't feel like reading it right now.\" (Chưa, mình chưa đọc...)",
        "result": "Tiếp nối bằng a."
      },
      {
        "order": 3,
        "title": "Liên kết các câu còn lại",
        "explanation": "Paul đưa ra lời khuyên khích lệ: câu (d) \"Why don't you give it a try? I'm sure you'll like it.\" (Sao bạn không thử đọc xem? Chắc chắn bạn sẽ thích nó). Jane đồng ý suy nghĩ lại: câu (c) \"Okay, I'll think about that.\" (Được rồi, mình sẽ nghĩ về việc đó).",
        "result": "Trình tự hoàn chỉnh: b-a-d-c."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm lẫn trình tự lập luận khiến đoạn hội thoại mất đi tính liên kết tự nhiên."
    ],
    "reviewSuggestions": [
      "Chú ý các từ chỉ quan hệ nhân quả, câu hỏi và câu trả lời tương ứng trong giao tiếp."
    ]
  },
  {
    "id": "sol-eng-1-q15",
    "questionId": "mock-eng-1-q15",
    "recognition": "Sắp xếp email thương mại/trang trọng",
    "translation": "Sắp xếp các câu sau thành một email hoàn chỉnh:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định câu mở đầu thông tin",
        "explanation": "Sau từ chào hỏi \"Dear Sir,\", email thường bắt đầu bằng mục đích viết thư. Câu (d) giới thiệu mục đích xác nhận cuộc họp ngày mai: \"I would like to confirm that the meeting tomorrow...\"",
        "result": "Bắt đầu bằng d."
      },
      {
        "order": 2,
        "title": "Sắp xếp các yêu cầu chi tiết",
        "explanation": "Sau khi giới thiệu cuộc họp, viết câu yêu cầu hành động từ người nhận: câu (a) \"Please review the agenda...\" (Vui lòng xem lại chương trình họp...). Tiếp theo bổ sung thêm nội dung thảo luận: câu (c) \"We will also discuss the timeline...\" (Chúng ta cũng sẽ thảo luận về mốc thời gian...).",
        "result": "Tiếp nối là a rồi đến c."
      },
      {
        "order": 3,
        "title": "Xác định câu kết thư",
        "explanation": "Câu kết thư hướng tới tương lai là câu (b): \"I look forward to your feedback and confirmation.\" (Tôi mong nhận được phản hồi và xác nhận từ ông).",
        "result": "Trình tự hoàn chỉnh: d-a-c-b."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đưa câu kết thư hoặc bổ sung chi tiết lên trước câu nêu mục đích chính của email."
    ],
    "reviewSuggestions": [
      "Học cấu trúc chuẩn của một bức thư/email trang trọng bằng tiếng Anh."
    ]
  },
  {
    "id": "sol-eng-1-q16",
    "questionId": "mock-eng-1-q16",
    "recognition": "Sắp xếp câu viết đoạn văn hoàn chỉnh",
    "translation": "Sắp xếp các câu sau thành một đoạn văn hoàn chỉnh:",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm câu chủ đề (Topic sentence)",
        "explanation": "Câu chủ đề giới thiệu khái quát nội dung đoạn văn. Câu (b): \"Students at our school help to keep the school clean.\" (Học sinh trường tôi giúp giữ trường lớp sạch sẽ) là câu mở đầu hoàn hảo.",
        "result": "Bắt đầu bằng b."
      },
      {
        "order": 2,
        "title": "Sắp xếp theo từ nối trình tự (Transition words)",
        "explanation": "Sắp xếp các hành động hỗ trợ dựa trên các từ chỉ trình tự:\n- Đầu tiên (First) ở câu (c): \"First, we put trash...\"\n- Tiếp theo (Then) ở câu (e): \"Then, some students...\"\n- Ngoài ra (Also) ở câu (a): \"Also, we take care...\"",
        "result": "Trình tự triển khai ý: c -> e -> a."
      },
      {
        "order": 3,
        "title": "Tìm câu kết luận (Concluding sentence)",
        "explanation": "Câu kết luận có từ chỉ báo hiệu: câu (d) \"In conclusion, we all feel proud...\" (Tóm lại, chúng tôi đều cảm thấy tự hào...).",
        "result": "Trình tự hoàn chỉnh là: b-c-e-a-d."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Bỏ qua các từ nối chỉ thứ tự logic (First, Then, Also, In conclusion) dẫn đến xếp lộn xộn các câu."
    ],
    "reviewSuggestions": [
      "Luyện tập kỹ năng đọc lướt tìm từ khóa liên kết (cohesive devices) trong đoạn văn."
    ]
  },
  {
    "id": "sol-eng-1-q17",
    "questionId": "mock-eng-1-q17",
    "recognition": "Đọc hiểu - Tìm ý chính của đoạn văn",
    "translation": "Đoạn văn chủ yếu nói về điều gì?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đọc câu chủ đề và từ khóa nổi bật",
        "explanation": "Đoạn văn nói về xu hướng đô thị xanh: \"But now, many cities are trying to be greener and cleaner.\" Sau đó cung cấp hai ví dụ thực tế là Barcelona và Portland.",
        "result": "Tìm ý khái quát nhất."
      },
      {
        "order": 2,
        "title": "Lựa chọn phương án chính xác",
        "explanation": "Phương án B: \"how cities are trying to become greener\" (các thành phố đang cố gắng trở nên xanh hơn như thế nào) phản ánh đầy đủ nhất ý chính của toàn bài.",
        "result": "Chọn B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn phương án quá chi tiết chỉ nói riêng về Barcelona hay Portland, hoặc phương án quá chung chung."
    ],
    "reviewSuggestions": [
      "Rèn luyện kỹ năng đọc lướt (skimming) để tìm ý tưởng chủ đạo của bài đọc."
    ]
  },
  {
    "id": "sol-eng-1-q18",
    "questionId": "mock-eng-1-q18",
    "recognition": "Đọc hiểu - Từ vựng đồng nghĩa trong ngữ cảnh",
    "translation": "Từ \"improved\" trong đoạn văn gần nghĩa nhất với từ nào?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích ngữ cảnh chứa từ khóa",
        "explanation": "Câu trong bài: \"before the Olympic Games, the city improved a lot.\" (trước Thế vận hội, thành phố đã [improved] rất nhiều). Điều này chỉ ra thành phố đã có những thay đổi tích cực, phát triển hơn.",
        "result": "improved có nghĩa là cải thiện, phát triển tốt lên."
      },
      {
        "order": 2,
        "title": "Chọn từ đồng nghĩa",
        "explanation": "- fixed: sửa chữa\n- changed: thay đổi (chưa rõ tốt hay xấu)\n- built: xây dựng\n- made better: làm tốt hơn, cải tiến (đồng nghĩa với improve)",
        "result": "Chọn D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Chọn \"changed\" vì cho rằng cải thiện chỉ đơn giản là thay đổi, thiếu đi sắc thái ý nghĩa \"tốt lên\" của từ."
    ],
    "reviewSuggestions": [
      "Trau dồi vốn từ vựng đồng nghĩa trái nghĩa thông dụng trong các kỳ thi tuyển sinh."
    ]
  },
  {
    "id": "sol-eng-1-q19",
    "questionId": "mock-eng-1-q19",
    "recognition": "Đọc hiểu - Tìm thông tin chi tiết trong bài",
    "translation": "Loại phương tiện giao thông nào được nhiều người sử dụng ở Barcelona hiện nay?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Định vị từ khóa trong bài đọc",
        "explanation": "Tìm đoạn viết về thành phố Barcelona (đoạn 2). Câu có chứa từ khóa phương tiện: \"Now, many people use buses and trains...\" (Hiện nay, nhiều người sử dụng xe buýt và tàu hỏa...)",
        "result": "Thông tin nằm ở đoạn 2."
      },
      {
        "order": 2,
        "title": "Đối chiếu với các phương án",
        "explanation": "Phương án C ghi \"buses and trains\" khớp hoàn toàn với thông tin trong văn bản.",
        "result": "Chọn C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc lướt nhanh quá dẫn đến nhìn nhầm các loại phương tiện khác như taxi hay máy bay."
    ],
    "reviewSuggestions": [
      "Luyện kỹ năng quét thông tin chi tiết (scanning) theo từ khóa của câu hỏi."
    ]
  },
  {
    "id": "sol-eng-1-q20",
    "questionId": "mock-eng-1-q20",
    "recognition": "Đọc hiểu - Nhận định Đúng/Sai theo bài đọc",
    "translation": "Điều nào sau đây là ĐÚNG về Portland?",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Định vị từ khóa và đối chiếu thông tin",
        "explanation": "Tìm đoạn viết về thành phố Portland (đoạn 3). Văn bản ghi: \"Since 1903, it has made parks and long walking and bike paths.\" (Kể từ năm 1903, nó đã tạo ra các công viên, các lối đi bộ dài và đường dành cho xe đạp).",
        "result": "Thông tin nằm ở đoạn 3."
      },
      {
        "order": 2,
        "title": "Đối chiếu các phương án",
        "explanation": "- A. Nó có đường đi bộ và đường xe đạp dài (Đúng)\n- B, C, D không được đề cập hoặc sai lệch thông tin trong bài.",
        "result": "Chọn A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Suy diễn thông tin ngoài bài đọc thay vì bám sát dữ liệu thực tế của văn bản."
    ],
    "reviewSuggestions": [
      "Luôn kiểm chứng mọi nhận định bằng cách gạch chân trực tiếp dòng thông tin trong bài khóa."
    ]
  },
  {
    "id": "sol-eng-1-q21",
    "questionId": "mock-eng-1-q21",
    "recognition": "Đọc hiểu True/False đảo Côn Đảo, Phú Quốc, Lý Sơn",
    "translation": "Phú Quốc được coi là hòn đảo nổi tiếng nhất vì nó dễ tiếp cận/dễ đi đến.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm thông tin về đảo Phú Quốc",
        "explanation": "Đoạn văn viết: \"Phú Quốc is probably the most popular island among the three. It's a lot more accessible with regular flights...\" (Phú Quốc có lẽ là đảo nổi tiếng nhất trong ba đảo. Nó dễ tiếp cận hơn nhiều nhờ các chuyến bay thường xuyên...).",
        "result": "Đúng như nhận định."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm lẫn thông tin giữa Phú Quốc và Lý Sơn (Lý Sơn khó đi hơn vì chỉ có tàu thủy)."
    ],
    "reviewSuggestions": [
      "Chú ý các từ đồng nghĩa như \"easy to reach\" tương đương với \"accessible\"."
    ]
  },
  {
    "id": "sol-eng-1-q22",
    "questionId": "mock-eng-1-q22",
    "recognition": "Đọc hiểu True/False đảo Côn Đảo",
    "translation": "Côn Đảo là hòn đảo hoàn hảo cho những người tìm kiếm sự thư giãn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm thông tin về đảo Côn Đảo",
        "explanation": "Văn bản ghi: \"Côn Đảo is the perfect island for people who want to relax.\" (Côn Đảo là hòn đảo hoàn hảo cho những ai muốn thư giãn). Nhận định trùng khớp nghĩa (\"look for relaxation\" đồng nghĩa với \"want to relax\").",
        "result": "Nhận định này Đúng (True)."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Đọc không kỹ từ đồng nghĩa dẫn đến nghi ngờ tính chính xác."
    ],
    "reviewSuggestions": [
      "Tích lũy từ đồng nghĩa (relax -> relaxation, perfect -> ideal)."
    ]
  },
  {
    "id": "sol-eng-1-q23",
    "questionId": "mock-eng-1-q23",
    "recognition": "Đọc hiểu True/False đảo Lý Sơn",
    "translation": "Lý Sơn đặc trưng bởi những bãi cát dài, mặc dù chỉ có một vài bãi có cảnh đẹp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm thông tin về bãi biển ở Lý Sơn",
        "explanation": "Bài viết ghi: \"It doesn't have the typical long, sandy beaches, but the beaches here are far more scenic...\" (Nó không có những bãi cát dài điển hình, nhưng những bãi biển ở đây có cảnh sắc đẹp hơn nhiều...). Nhận định ghi Lý Sơn có bãi cát dài điển hình là sai thông tin.",
        "result": "Nhận định này Sai (False)."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Không chú ý đến từ phủ định \"doesn't have\" trong bài đọc."
    ],
    "reviewSuggestions": [
      "Tập trung vào các từ mang tính phủ định hoặc tuyệt đối (never, all, none, doesn't)."
    ]
  },
  {
    "id": "sol-eng-1-q24",
    "questionId": "mock-eng-1-q24",
    "recognition": "Đọc hiểu True/False phương tiện di chuyển ra đảo",
    "translation": "Bất kể hòn đảo nào du khách muốn ghé thăm, luôn có sự lựa chọn tốt về phương tiện di chuyển.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Kiểm tra thông tin phương tiện cho từng đảo",
        "explanation": "Bài viết chỉ ra Lý Sơn khó tiếp cận hơn vì chỉ đi được bằng tàu thủy: \"Lý Sơn is... isn't as accessible because you can only reach it by boat...\". Do đó không phải đảo nào cũng có nhiều lựa chọn phương tiện thuận lợi.",
        "result": "Nhận định này Sai (False)."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Bị đánh lừa bởi câu kết luận mang tính tích cực chung của bài viết."
    ],
    "reviewSuggestions": [
      "Xem xét tính logic chặt chẽ của các từ hạn định mạnh như \"always\", \"any\", \"whichever\"."
    ]
  },
  {
    "id": "sol-eng-1-q25",
    "questionId": "mock-eng-1-q25",
    "recognition": "Word form sau cụm \"one of the most\"",
    "translation": "Internet là một trong những (invent) quan trọng nhất của thời đại chúng ta.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ loại cần điền",
        "explanation": "Đứng sau cấu trúc \"one of the + so sánh nhất + tính từ\" bắt buộc phải là một danh từ số nhiều (plural noun).",
        "result": "Cần điền một danh từ số nhiều."
      },
      {
        "order": 2,
        "title": "Biến đổi từ loại",
        "explanation": "Động từ \"invent\" (phát minh) chuyển thành danh từ là \"invention\". Thêm \"s\" ở dạng số nhiều thành \"inventions\".",
        "result": "Đáp án đúng là \"inventions\"."
      }
    ],
    "finalAnswer": "inventions",
    "commonMistakes": [
      "Ghi danh từ số ít \"invention\" dẫn đến bị mất điểm."
    ],
    "reviewSuggestions": [
      "Ôn lại danh từ số nhiều sau cấu trúc \"one of the...\""
    ]
  },
  {
    "id": "sol-eng-1-q26",
    "questionId": "mock-eng-1-q26",
    "recognition": "Word form sau động từ suggest",
    "translation": "Giáo viên của tôi gợi ý (study) nhiều hơn về không gian để hiểu các bí ẩn của nó.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định dạng động từ sau \"suggest\"",
        "explanation": "Theo quy tắc ngữ pháp, động từ đứng ngay sau \"suggest\" khi diễn đạt lời khuyên/gợi ý trực tiếp phải ở dạng V-ing.",
        "result": "Động từ dạng Gerund (V-ing)."
      },
      {
        "order": 2,
        "title": "Chia động từ \"study\"",
        "explanation": "study + -ing -> studying.",
        "result": "Đáp án đúng là \"studying\"."
      }
    ],
    "finalAnswer": "studying",
    "commonMistakes": [
      "Điền \"to study\" do thói quen suy luận từ cấu trúc của các động từ khác."
    ],
    "reviewSuggestions": [
      "Ghi nhớ các cấu trúc với suggest: suggest + V-ing hoặc suggest + that + S + (should) + V-infinitive."
    ]
  },
  {
    "id": "sol-eng-1-q27",
    "questionId": "mock-eng-1-q27",
    "recognition": "Word form tính từ đứng trước danh từ",
    "translation": "Chúng ta nên áp dụng lối sống xanh để giúp bảo tồn các tài nguyên (nature).",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ loại dựa vào vị trí",
        "explanation": "Chỗ trống đứng trước danh từ \"resources\" (các tài nguyên). Theo quy tắc, trước danh từ cần một tính từ (adjective) để bổ nghĩa cho nó.",
        "result": "Cần một tính từ."
      },
      {
        "order": 2,
        "title": "Biến đổi từ gốc \"nature\"",
        "explanation": "Danh từ \"nature\" (tự nhiên) có tính từ tương ứng là \"natural\" (thuộc về tự nhiên). Cụm từ \"natural resources\" nghĩa là tài nguyên thiên nhiên.",
        "result": "Đáp án là \"natural\"."
      }
    ],
    "finalAnswer": "natural",
    "commonMistakes": [
      "Giữ nguyên danh từ nature hoặc điền trạng từ naturally."
    ],
    "reviewSuggestions": [
      "Học chắc các vị trí cơ bản của danh từ, động từ, tính từ và trạng từ trong câu."
    ]
  },
  {
    "id": "sol-eng-1-q28",
    "questionId": "mock-eng-1-q28",
    "recognition": "Word form tính từ mang nghĩa phủ định",
    "translation": "Tôi sẽ kể về trải nghiệm (please) của chúng tôi khi không thể tìm thấy bất kỳ chỗ trọ nào ở ngôi làng đó.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ loại và ngữ cảnh ý nghĩa",
        "explanation": "Chỗ trống đứng trước danh từ \"experience\" nên cần điền một tính từ. Ngữ cảnh vế sau \"couldn't find any lodging\" (không tìm được chỗ trọ nào) biểu thị một trải nghiệm tồi tệ, không vui vẻ.",
        "result": "Cần tính từ mang nghĩa phủ định."
      },
      {
        "order": 2,
        "title": "Biến đổi từ gốc \"please\"",
        "explanation": "Động từ \"please\" có tính từ khẳng định là \"pleasant\" (dễ chịu). Trái nghĩa của nó là tính từ ghép có tiền tố phủ định \"unpleasant\" (khó chịu, không dễ chịu).",
        "result": "Đáp án đúng là \"unpleasant\"."
      }
    ],
    "finalAnswer": "unpleasant",
    "commonMistakes": [
      "Chỉ điền tính từ dạng khẳng định \"pleasant\" vì bỏ qua ngữ cảnh không tìm được chỗ trọ ở vế sau."
    ],
    "reviewSuggestions": [
      "Luyện tập chuyên đề từ ghép và tiền tố phủ định (un-, im-, in-, ir-...)."
    ]
  },
  {
    "id": "sol-eng-1-q29",
    "questionId": "mock-eng-1-q29",
    "recognition": "Sửa lỗi sai Adjective đuôi -ed/-ing",
    "translation": "Chúng tôi đã rất mệt sau chuyến đi bộ dài trên núi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định vị trí lỗi sai",
        "explanation": "Từ \"tiring\" trong câu là tính từ bổ nghĩa cho cảm xúc của con người (\"We\").",
        "result": "Lỗi nằm ở từ \"tiring\"."
      },
      {
        "order": 2,
        "title": "Sửa lỗi sai",
        "explanation": "Tính từ đuôi \"-ing\" dùng để chỉ tính chất của vật/việc gây ra cảm xúc. Tính từ đuôi \"-ed\" dùng để chỉ cảm xúc, cảm nhận của người. Do chủ ngữ là con người cảm nhận sự mệt mỏi, nên phải dùng tính từ \"tired\".",
        "result": "Sửa \"tiring\" thành \"tired\"."
      }
    ],
    "finalAnswer": "tired",
    "commonMistakes": [
      "Nhầm lẫn cách dùng giữa tính từ đuôi -ing và đuôi -ed."
    ],
    "reviewSuggestions": [
      "Học chắc chuyên đề tính từ đuôi -ing và -ed."
    ]
  },
  {
    "id": "sol-eng-1-q30",
    "questionId": "mock-eng-1-q30",
    "recognition": "Sửa lỗi sai giới từ chỉ thời gian since/for",
    "translation": "Ẩm thực Anh đặc trưng đã phát triển kể từ nhiều thế kỷ qua.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phát hiện lỗi sai giới từ",
        "explanation": "Cụm từ chỉ thời gian đứng sau giới từ là \"many centuries\" (nhiều thế kỷ). Đây là một khoảng thời gian (period of time), không phải mốc thời gian.",
        "result": "Lỗi nằm ở từ \"since\"."
      },
      {
        "order": 2,
        "title": "Thay thế bằng giới từ đúng",
        "explanation": "Ta có quy tắc ở thì hiện tại hoàn thành:\n- \"since\" + mốc thời gian (ví dụ: since 2000, since yesterday)\n- \"for\" + khoảng thời gian (ví dụ: for 5 years, for centuries)\nDo đó phải thay \"since\" bằng \"for\".",
        "result": "Sửa \"since\" thành \"for\"."
      }
    ],
    "finalAnswer": "for",
    "commonMistakes": [
      "Nhầm lẫn giữa mốc thời gian và khoảng thời gian."
    ],
    "reviewSuggestions": [
      "Hệ thống lại cách dùng của since và for trong thì Hiện tại hoàn thành."
    ]
  },
  {
    "id": "sol-eng-1-q31",
    "questionId": "mock-eng-1-q31",
    "recognition": "Câu tường thuật Yes/No question",
    "translation": "\"Bạn có biết đường đến nhà hàng Ý không?\" Mary hỏi Peter.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định dạng câu tường thuật",
        "explanation": "Đây là câu hỏi Yes/No trực tiếp. Khi chuyển sang gián tiếp ta sử dụng: S + asked + O + if/whether + S + V(lùi thì).",
        "result": "Áp dụng công thức gián tiếp."
      },
      {
        "order": 2,
        "title": "Thực hiện lùi thì và đổi đại từ",
        "explanation": "- Đổi đại từ \"you\" thành \"he\" (chỉ Peter).\n- Lùi thì: \"know\" (hiện tại đơn) đổi thành \"knew\" (quá khứ đơn).\n- Loại bỏ trợ động từ \"Do\".",
        "result": "-> Mary asked Peter \"if he knew the way\" (hoặc \"whether he knew the way\")."
      }
    ],
    "finalAnswer": "if he knew the way",
    "commonMistakes": [
      "Quên lùi thì động từ hoặc vẫn giữ nguyên trợ động từ \"do\"."
    ],
    "reviewSuggestions": [
      "Học kỹ các bước lùi thì và đổi ngôi trong Câu tường thuật."
    ]
  },
  {
    "id": "sol-eng-1-q32",
    "questionId": "mock-eng-1-q32",
    "recognition": "Viết lại câu sử dụng liên từ chỉ nguyên nhân",
    "translation": "Trời đang mưa to ngoài trời nên chúng tôi không thể rời đi lúc này.\n\n-> Chúng tôi không thể rời đi lúc này __________ ngoài trời mưa to.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định liên hệ nguyên nhân kết quả",
        "explanation": "Câu gốc có cấu trúc nguyên nhân -> kết quả nối bằng \"so\" (nên). Viết lại bắt đầu bằng kết quả \"We can't leave now\", ta cần liên từ chỉ nguyên nhân để nối với vế \"raining heavily outside\".",
        "result": "Cần liên từ chỉ nguyên nhân: because, as, since."
      },
      {
        "order": 2,
        "title": "Lập cấu trúc hoàn chỉnh",
        "explanation": "Vế sau là mệnh đề \"it is raining heavily outside\". Do đó liên từ cần dùng là \"because\" (hoặc \"as\" / \"since\"). Sử dụng dạng rút gọn \"because it's raining\" hoặc viết đầy đủ \"because it is raining\".",
        "result": "Đáp án là \"because it is raining\" hoặc \"because it's raining\"."
      }
    ],
    "finalAnswer": "because it is raining",
    "commonMistakes": [
      "Nhầm lẫn dùng \"because of\" (đi với danh từ/V-ing) thay vì \"because\" (đi với mệnh đề)."
    ],
    "reviewSuggestions": [
      "Học cách chuyển đổi giữa because / because of và although / despite."
    ]
  },
  {
    "id": "sol-eng-1-q33",
    "questionId": "mock-eng-1-q33",
    "recognition": "Viết lại câu với Mệnh đề quan hệ không xác định",
    "translation": "Sao Kim, hành tinh thứ hai tính từ Mặt Trời, đôi khi được gọi là chị em của Trái Đất.\n\n-> Hành tinh thứ hai tính từ Mặt Trời là Sao Kim, __________ chị em của Trái Đất.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc mệnh đề quan hệ",
        "explanation": "Câu gốc viết ở dạng đồng cách danh từ \"Venus, the second planet..., is...\". Khi viết lại, \"the second planet... is Venus\" đóng vai trò mệnh đề chính, phần còn lại cần viết dưới dạng mệnh đề quan hệ bổ nghĩa cho danh từ riêng \"Venus\".",
        "result": "Sử dụng đại từ quan hệ \"which\" và dấu phẩy."
      },
      {
        "order": 2,
        "title": "Thành lập mệnh đề quan hệ",
        "explanation": "Vì bổ nghĩa cho vật (Venus), ta dùng \"which\" làm chủ ngữ của mệnh đề quan hệ: \", which is sometimes called the Earth's sister\". Hoặc có thể rút gọn mệnh đề quan hệ dạng bị động thành cụm phân từ: \", sometimes called the Earth's sister\".",
        "result": "Đáp án là \"which is sometimes called\" (hoặc rút gọn \"sometimes called\")."
      }
    ],
    "finalAnswer": "which is sometimes called",
    "commonMistakes": [
      "Dùng sai đại từ quan hệ \"who\" hoặc \"that\" (không được dùng that sau dấu phẩy)."
    ],
    "reviewSuggestions": [
      "Học chuyên đề Mệnh đề quan hệ và các trường hợp rút gọn mệnh đề quan hệ."
    ]
  },
  {
    "id": "sol-eng-1-q34",
    "questionId": "mock-eng-1-q34",
    "recognition": "Viết lại câu sử dụng câu điều kiện từ câu mệnh lệnh",
    "translation": "Hãy tập thể dục đều đặn và sức khỏe của bạn sẽ cải thiện.\n\n-> Sức khỏe của bạn sẽ cải thiện __________ đều đặn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc câu mệnh lệnh + and",
        "explanation": "Cấu trúc \"V (mệnh lệnh) + and + S + will + V\" tương đương cấu trúc câu điều kiện loại 1 diễn tả giả định tích cực: \"If you + V, S + will + V\".",
        "result": "Sử dụng cấu trúc \"If you + V\"."
      },
      {
        "order": 2,
        "title": "Áp dụng vào câu",
        "explanation": "Động từ ở câu mệnh lệnh là \"Do exercise\". Viết lại: \"If you exercise\" hoặc \"If you do exercise\". Trạng từ \"regularly\" đã có sẵn ở cuối câu.",
        "result": "Đáp án đúng là \"if you exercise\" hoặc \"if you do exercise\"."
      }
    ],
    "finalAnswer": "if you exercise",
    "commonMistakes": [
      "Quên đổi động từ mệnh lệnh thành mệnh đề điều kiện có đầy đủ chủ ngữ \"you\"."
    ],
    "reviewSuggestions": [
      "Ôn tập các biến thể của Câu điều kiện loại 1 (kết hợp với câu mệnh lệnh)."
    ]
  },
  {
    "id": "sol-math-1-q1",
    "questionId": "mock-math-1-q1",
    "recognition": "Rút gọn căn thức, phương trình bậc nhất, bất phương trình bậc nhất",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính biểu thức A",
        "explanation": "Phân tích các căn thức:\n- \\(\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}\\)\n- \\(\\sqrt{4} = 2\\)\nThay vào biểu thức:\n\\(A = 2\\sqrt{3} - 2\\sqrt{3} + 2 = 2\\)",
        "result": "A = 2"
      },
      {
        "order": 2,
        "title": "Giải phương trình 2x - 6 = 0",
        "explanation": "Chuyển vế:\n\\(2x = 6 \\Leftrightarrow x = 3\\)",
        "result": "x = 3"
      },
      {
        "order": 3,
        "title": "Giải bất phương trình 4x >= x + 3",
        "explanation": "Chuyển vế các hạng tử chứa x:\n\\(4x - x \\ge 3 \\Leftrightarrow 3x \\ge 3 \\Leftrightarrow x \\ge 1\\)",
        "result": "Nghiệm là x >= 1."
      }
    ],
    "finalAnswer": "A = 2; x = 3; x >= 1",
    "commonMistakes": [
      "Sai dấu khi chuyển vế trong bất phương trình.",
      "Rút gọn sai căn thức sqrt(12)."
    ],
    "reviewSuggestions": [
      "Luyện thêm phép biến đổi căn thức cơ bản và chuyển vế đổi dấu."
    ]
  },
  {
    "id": "sol-math-1-q2",
    "questionId": "mock-math-1-q2",
    "recognition": "Parabol đi qua điểm, rút gọn phân thức đại số, tìm x nguyên để biểu thức nguyên",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định hệ số a",
        "explanation": "Đồ thị hàm số \\(y = ax^2\\) đi qua điểm \\(A(1;1)\\). Thay \\(x = 1, y = 1\\) vào phương trình:\n\\(1 = a \\cdot 1^2 \\Rightarrow a = 1\\) (thỏa mãn \\(a \\neq 0\\)).",
        "result": "a = 1"
      },
      {
        "order": 2,
        "title": "Rút gọn biểu thức N",
        "explanation": "Quy đồng biểu thức với mẫu thức chung là \\(x - 4 = (\\sqrt{x}+2)(\\sqrt{x}-2)\\):\n\\(N = \\frac{\\sqrt{x}(\\sqrt{x}-2) + 1(\\sqrt{x}+2) - 4}{x-4}\\)\n\\(N = \\frac{x - 2\\sqrt{x} + \\sqrt{x} + 2 - 4}{x-4}\\)\n\\(N = \\frac{x - \\sqrt{x} - 2}{x-4} = \\frac{(\\sqrt{x}-2)(\\sqrt{x}+1)}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\frac{\\sqrt{x}+1}{\\sqrt{x}+2}\\)",
        "result": "N = (sqrt(x)+1)/(sqrt(x)+2)"
      },
      {
        "order": 3,
        "title": "Biện luận x nguyên để P = M.N nguyên",
        "explanation": "Ta có:\n\\(P = M \\cdot N = \\frac{2\\sqrt{x}+1}{\\sqrt{x}+1} \\cdot \\frac{\\sqrt{x}+1}{\\sqrt{x}+2} = \\frac{2\\sqrt{x}+1}{\\sqrt{x}+2}\\)\nPhân tích tử số theo mẫu:\n\\(P = \\frac{2(\\sqrt{x}+2) - 3}{\\sqrt{x}+2} = 2 - \\frac{3}{\\sqrt{x}+2}\\)\nĐể P nguyên thì \\(\\sqrt{x}+2\\) phải là ước của 3. Do \\(x \\ge 0 \\Rightarrow \\sqrt{x}+2 \\ge 2\\).\nƯớc của 3 lớn hơn hoặc bằng 2 chỉ có duy nhất giá trị 3.\nDo đó, \\(\\sqrt{x}+2 = 3 \\Leftrightarrow \\sqrt{x} = 1 \\Leftrightarrow x = 1\\) (thỏa mãn ĐKXĐ).",
        "result": "x = 1"
      }
    ],
    "finalAnswer": "a = 1; N = (sqrt(x)+1)/(sqrt(x)+2); x = 1",
    "commonMistakes": [
      "Quên đặt điều kiện ước lớn hơn hoặc bằng 2, dẫn đến lấy cả nghiệm âm.",
      "Rút gọn mẫu chung sai."
    ],
    "reviewSuggestions": [
      "Ôn tập dạng toán chia hết và biện luận giá trị nguyên của biểu thức chứa căn."
    ]
  },
  {
    "id": "sol-math-1-q3",
    "questionId": "mock-math-1-q3",
    "recognition": "Giải bài toán bằng cách lập hệ phương trình phần trăm giảm giá",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đặt ẩn và lập điều kiện",
        "explanation": "Gọi x (triệu đồng) là giá niêm yết ban đầu của tivi, y (triệu đồng) là giá niêm yết tủ lạnh.\nĐiều kiện: \\(0 < x, y < 25\\).",
        "result": "Đặt x, y."
      },
      {
        "order": 2,
        "title": "Lập hệ phương trình",
        "explanation": "- Theo giá niêm yết ban đầu: \\(x + y = 25\\) (1)\n- Sau khi giảm giá (tivi giảm 10% còn 90%, tủ lạnh giảm 20% còn 80%): \\(0.9x + 0.8y = 21\\) (2)",
        "result": "Hệ phương trình: { x + y = 25; 0.9x + 0.8y = 21"
      },
      {
        "order": 3,
        "title": "Giải hệ phương trình",
        "explanation": "Nhân hai vế của (1) với 0.8 ta được: \\(0.8x + 0.8y = 20\\) (3).\nLấy (2) trừ đi (3):\n\\(0.1x = 1 \\Rightarrow x = 10\\).\nThay x = 10 vào (1): \\(10 + y = 25 \\Rightarrow y = 15\\) (thỏa mãn điều kiện).",
        "result": "x = 10, y = 15."
      }
    ],
    "finalAnswer": "Giá tivi: 10 triệu; Giá tủ lạnh: 15 triệu",
    "commonMistakes": [
      "Tính sai phần trăm giảm giá (ví dụ viết nhầm tivi giảm 10% thành 0.1x thay vì 0.9x)."
    ],
    "reviewSuggestions": [
      "Rèn luyện giải toán thực tế lập hệ phương trình phần trăm tài chính."
    ]
  },
  {
    "id": "sol-math-1-q4",
    "questionId": "mock-math-1-q4",
    "recognition": "Thể tích hình trụ, tính tiền thực tế, xác xuất thực tế",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính thể tích khúc gỗ hình trụ",
        "explanation": "Đường kính đáy là \\(0.6\\) m nên bán kính đáy là \\(r = 0.3\\) m.\nChiều cao hình trụ là \\(h = 2\\) m.\nThể tích hình trụ:\n\\(V = \\pi r^2 h \\approx 3.14 \\times (0.3)^2 \\times 2 = 0.5652\\) (m³). Làm tròn đến 2 chữ số thập phân là \\(0.57\\) m³.",
        "result": "V ≈ 0.57 m³ (hoặc 0.5652 m³)"
      },
      {
        "order": 2,
        "title": "Tính số tiền bác An mua gỗ",
        "explanation": "Số tiền bằng thể tích thực tế nhân với đơn giá:\n\\(0.5652 \\times 5,000,000 = 2,826,000\\) đồng.\nLàm tròn kết quả đến hàng chục nghìn ta được \\(2,830,000\\) đồng.",
        "result": "Số tiền: 2.830.000 đồng"
      },
      {
        "order": 3,
        "title": "Tính xác suất của biến cố A",
        "explanation": "Không gian mẫu của phép thử rút ngẫu nhiên 1 thẻ từ 15 thẻ:\n\\(S = \\{1; 2; 3; ...; 15\\} \\Rightarrow n(S) = 15\\).\nCác thẻ ghi số chia hết cho 5 trong hộp là: \\(\\{5; 10; 15\\} \\Rightarrow n(A) = 3\\).\nXác suất của biến cố A:\n\\(P(A) = \\frac{n(A)}{n(S)} = \\frac{3}{15} = \\frac{1}{5} = 0.2\\).",
        "result": "P(A) = 1/5"
      }
    ],
    "finalAnswer": "V = 0.57 m3; Tiền = 2,830,000 đồng; P(A) = 1/5",
    "commonMistakes": [
      "Tính sai bán kính đáy (dùng luôn đường kính 0.6 m vào công thức).",
      "Làm tròn tiền sai cách."
    ],
    "reviewSuggestions": [
      "Ghi nhớ kỹ công thức thể tích hình trụ V = pi * r^2 * h và công thức xác suất cổ điển."
    ]
  },
  {
    "id": "sol-math-1-q5",
    "questionId": "mock-math-1-q5",
    "recognition": "Tứ giác nội tiếp, tam giác cân, tỉ lệ đoạn thẳng hình học lớp 9",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Chứng minh bốn điểm A, D, H, E cùng thuộc một đường tròn",
        "explanation": "Ta có \\(BD\\) và \\(CE\\) là hai đường cao của tam giác \\(ABC\\).\n\\(\\Rightarrow BD \\perp AC \\Rightarrow \\widehat{ADH} = 90^\\circ\\).\n\\(\\Rightarrow CE \\perp AB \\Rightarrow \\widehat{AEH} = 90^\\circ\\).\nTứ giác \\(ADHE\\) có \\(\\widehat{ADH} + \\widehat{AEH} = 90^\\circ + 90^\\circ = 180^\\circ\\).\nDo đó, tứ giác \\(ADHE\\) nội tiếp đường tròn đường kính \\(AH\\).\nNên bốn điểm \\(A, D, H, E\\) cùng thuộc một đường tròn.",
        "result": "Tứ giác ADHE nội tiếp."
      },
      {
        "order": 2,
        "title": "Chứng minh tam giác MHC cân và AH = 2OK",
        "explanation": "- Ta có \\(\\widehat{ABM} = \\widehat{ACM}\\) (hai góc nội tiếp cùng chắn cung \\(AM\\) của \\((O)\\)).\n- Mặt khác, trong tam giác vuông \\(ABD\\) và \\(ACE\\) có chung góc \\(A\\) nên \\(\\widehat{ABD} = \\widehat{ACE}\\).\n- Do đó \\(\\widehat{HCM} = \\widehat{HCM}\\) dẫn đến \\(AC\\) là đường trung trực của \\(HM\\) (do H là trực tâm, D là chân đường cao).\n- Vì thế \\(HC = MC\\) suy ra tam giác \\(MHC\\) cân tại \\(C\\).\n- Để chứng minh \\(AH = 2OK\\): Kẻ đường kính \\(AP\\) của đường tròn \\((O)\\). Dễ dàng chứng minh tứ giác \\(BHCP\\) là hình bình hành (vì có các cặp cạnh đối song song cùng vuông góc với \\(AB, AC\\)).\n- Do đó, K (trung điểm \\(BC\\)) cũng là trung điểm của đường chéo \\(HP\\).\n- Xét tam giác \\(APH\\) có \\(O\\) là trung điểm \\(AP\\) (tâm đường tròn) và \\(K\\) là trung điểm \\(HP\\).\n- Suy ra \\(OK\\) là đường trung bình của tam giác \\(APH\\).\n- Do đó \\(OK = \\frac{1}{2} AH \\Rightarrow AH = 2OK\\) (đpcm).",
        "result": "ΔMHC cân tại C và AH = 2OK."
      },
      {
        "order": 3,
        "title": "Chứng minh BN . CF = CN . BF",
        "explanation": "- Cách chứng minh đơn giản nhất là chứng minh hệ thức tỷ lệ: \\(\\frac{BN}{CN} = \\frac{BF}{CF}\\).\n- Kẻ đường thẳng qua \\(A\\) song song với \\(BC\\), cắt \\(DE\\) tại \\(I\\).\n- Sử dụng định lý Thales và tính chất chùm đường thẳng cực hoặc tính chất tỉ số kép.\n- Ta cũng có thể sử dụng tính chất của hàng điểm điều hòa. Vì \\(H\\) là trực tâm, \\(F\\) là chân đường cao hạ từ \\(A\\) xuống \\(BC\\). Cát tuyến \\(NDE\\) cắt \\(BC\\) tại \\(N\\).\n- Theo tính chất của tứ giác nội tiếp và trực tâm, bộ bốn điểm \\((N, F, B, C)\\) tạo thành một hàng điểm điều hòa.\n- Suy ra: \\(\\frac{NB}{NC} = \\frac{FB}{FC} \\Rightarrow BN \\cdot CF = CN \\cdot BF\\) (đpcm).",
        "result": "BN . CF = CN . BF."
      }
    ],
    "finalAnswer": "Chứng minh các tính chất hình học theo yêu cầu.",
    "commonMistakes": [
      "Không vẽ hình chính xác dẫn đến ngộ nhận các tính chất hình học.",
      "Không chứng minh được mối liên hệ trung điểm K trong hình bình hành BHCP."
    ],
    "reviewSuggestions": [
      "Học chắc chuyên đề Đường tròn ngoại tiếp, Trực tâm tam giác và Đường trung bình."
    ]
  }
];
