import { Question } from '@/types';

export const readingQuestions: Question[] = [
  {
    "id": "eng-q90",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Fill in the blank (1) for the advertisement below:\n\n**ANNOUNCEMENT: SCHOOL ENGLISH CLUB**\nAre you interested **(1) ______** speaking English? Join our club this Thursday at Room 204.",
    "options": [
      "A. on",
      "B. in",
      "C. at",
      "D. for"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q91",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Fill in the blank (2) for the notice below:\n\n**NOTICE: VOLUNTEER ACTIVITY**\nOur school will organize a clean-up campaign **(2) ______** Sunday, June 10th. All volunteers are welcome!",
    "options": [
      "A. in",
      "B. on",
      "C. at",
      "D. since"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q501",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Read the advertisement below and select the correct answer for each blank:\n\n**WORKSHOP: ENGLISH FOR BEGINNERS**\n\nDo you want to improve your speaking skills? Our workshop shows you **(1) ______** to choose the right vocabulary.\n\nInstead of just studying grammar, choosing and **(2) ______** phrasebooks is very helpful.\n\nYou will **(3) ______** be able to practice speaking with our guest speakers.\n\nWe will also give you professional **(4) ______** to help you fix common mistakes.",
    "options": [
      "what, how, when, where",
      "read, reading, readed, to read",
      "either, also, still, so",
      "luggage, equipment, feedback, permission"
    ],
    "correctAnswer": "how, reading, also, feedback",
    "correctFinalAnswer": {
      "blank1": "how",
      "blank2": "reading",
      "blank3": "also",
      "blank4": "feedback"
    },
    "acceptedFinalAnswers": [
      {
        "blank1": "B",
        "blank2": "B",
        "blank3": "B",
        "blank4": "C"
      },
      {
        "blank1": "how",
        "blank2": "reading",
        "blank3": "also",
        "blank4": "feedback"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "blank1", "label": "Chỗ trống (1)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (1)" },
        { "key": "blank2", "label": "Chỗ trống (2)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (2)" },
        { "key": "blank3", "label": "Chỗ trống (3)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (3)" },
        { "key": "blank4", "label": "Chỗ trống (4)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (4)" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q502",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Read the notice below and select the correct answer for each blank:\n\n**NOTICE: GREEN SCHOOL PROJECT**\n\nOur school is planning a special campaign to save energy. We will start **(1) ______** Monday, September 15th.\n\nEveryone is encouraged to turn **(2) ______** lights and fans when leaving the classrooms.\n\nBy **(3) ______** energy, we can help protect the environment and cut down on electricity costs.\n\nIf you have any suggestions, please feel free to **(4) ______** the student committee.",
    "options": [
      "in, on, at, for",
      "off, on, up, down",
      "save, saving, saved, to save",
      "contact, connect, request, discuss"
    ],
    "correctAnswer": "on, off, saving, contact",
    "correctFinalAnswer": {
      "blank1": "on",
      "blank2": "off",
      "blank3": "saving",
      "blank4": "contact"
    },
    "acceptedFinalAnswers": [
      {
        "blank1": "B",
        "blank2": "A",
        "blank3": "B",
        "blank4": "A"
      },
      {
        "blank1": "on",
        "blank2": "off",
        "blank3": "saving",
        "blank4": "contact"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "blank1", "label": "Chỗ trống (1)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (1)" },
        { "key": "blank2", "label": "Chỗ trống (2)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (2)" },
        { "key": "blank3", "label": "Chỗ trống (3)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (3)" },
        { "key": "blank4", "label": "Chỗ trống (4)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (4)" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q503",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Read the notice below and select the correct answer for each blank:\n\n**NOTICE: SCHOOL LIBRARY RULES**\n\nTo maintain a quiet and productive study environment, all students must follow these rules. First, please remember to show your student ID card **(1) ______** entering.\n\nSecond, you should turn off or set your mobile phones **(2) ______** silent mode.\n\nIf you want to borrow books, you need **(3) ______** them to the service desk.\n\nFinally, eating and drinking are not allowed in the library to keep it clean. We hope you will **(4) ______** these rules to help make the library a great place for everyone.",
    "options": [
      "before, after, during, until",
      "in, on, at, to",
      "take, taking, to take, took",
      "follow, break, ignore, watch"
    ],
    "correctAnswer": "before, to, to take, follow",
    "correctFinalAnswer": {
      "blank1": "before",
      "blank2": "to",
      "blank3": "to take",
      "blank4": "follow"
    },
    "acceptedFinalAnswers": [
      {
        "blank1": "A",
        "blank2": "D",
        "blank3": "C",
        "blank4": "A"
      },
      {
        "blank1": "before",
        "blank2": "to",
        "blank3": "to take",
        "blank4": "follow"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "blank1", "label": "Chỗ trống (1)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (1)" },
        { "key": "blank2", "label": "Chỗ trống (2)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (2)" },
        { "key": "blank3", "label": "Chỗ trống (3)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (3)" },
        { "key": "blank4", "label": "Chỗ trống (4)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (4)" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q504",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt8",
    "content": "Read the advertisement below and select the correct answer for each blank:\n\n**ADVERTISEMENT: SUMMER YOUTH CAMP**\n\nAre you looking for an exciting summer activity? Our camp offers a wide range of outdoor programs. By **(1) ______** us, you can learn teamwork, camping, and survival skills.\n\nYou do not need to have any experience; **(2) ______**, you must be willing to join all activities.\n\nOur professional camp leaders will ensure your safety and provide helpful **(3) ______** throughout the trip.\n\nPlease sign up before June 5th **(4) ______** we have limited slots available. Don't miss this opportunity!",
    "options": [
      "join, joining, joined, to join",
      "however, therefore, because, although",
      "guidance, luggage, permission, feedback",
      "although, but, because, so"
    ],
    "correctAnswer": "joining, however, guidance, because",
    "correctFinalAnswer": {
      "blank1": "joining",
      "blank2": "however",
      "blank3": "guidance",
      "blank4": "because"
    },
    "acceptedFinalAnswers": [
      {
        "blank1": "B",
        "blank2": "A",
        "blank3": "A",
        "blank4": "C"
      },
      {
        "blank1": "joining",
        "blank2": "however",
        "blank3": "guidance",
        "blank4": "because"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "blank1", "label": "Chỗ trống (1)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (1)" },
        { "key": "blank2", "label": "Chỗ trống (2)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (2)" },
        { "key": "blank3", "label": "Chỗ trống (3)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (3)" },
        { "key": "blank4", "label": "Chỗ trống (4)", "valueType": "choice", "placeholder": "Chọn đáp án cho chỗ trống (4)" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q101",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt13",
    "content": "Read the passage and choose the best answer:\n\nEnglish is the official language in many countries. It is spoken by millions of people around the world as a first or second language. Learning English helps students access global knowledge, study abroad, and find better jobs. Many high schools in Binh Dinh, including THPT Nguyen Du, place a strong emphasis on English education to prepare their students for the future.\n\nWhat is the main topic of the passage?",
    "options": [
      "A. The history of Binh Dinh province",
      "B. The importance and popularity of English",
      "C. How to study at THPT Nguyen Du",
      "D. The number of high schools in Vietnam"
    ],
    "correctAnswer": "B",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q601",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete conversation:\n\na. Lan: That’s a good idea. What time shall we meet?\nb. Minh: Why don’t we join the school clean-up day this Sunday?\nc. Minh: Let’s meet at 7 a.m. at the school gate.",
    "options": [
      "A. a – b – c",
      "B. b – a – c",
      "C. b – c – a",
      "D. c – a – b"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q602",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete conversation:\n\na. Tom: Yes, I have. It is really useful.\nb. Mai: Have you tried the new English-learning app?\nc. Mai: What do you like most about it?\nd. Tom: The pronunciation practice. It helps me speak more clearly.",
    "options": [
      "A. b – a – c – d",
      "B. a – b – d – c",
      "C. b – c – a – d",
      "D. c – d – b – a"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q603",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete conversation:\n\na. Hoa: I’m sorry, but I can’t. I have an exam next Monday.\nb. Nam: Would you like to go to the book fair with me this Saturday?\nc. Nam: No problem. Maybe we can go together another time.",
    "options": [
      "A. a – b – c",
      "B. b – c – a",
      "C. b – a – c",
      "D. c – b – a"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q604",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete conversation:\n\na. Student: Yes, please. I’m looking for a book about green cities.\nb. Librarian: Can I help you?\nc. Librarian: It is on the second shelf near the window.\nd. Student: Thank you very much.",
    "options": [
      "A. b – a – c – d",
      "B. a – b – d – c",
      "C. b – c – a – d",
      "D. c – a – b – d"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q605",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete email:\n\na. Please let me know if you can join us.\nb. Dear Hoa,\nc. We are going to visit the science museum this Sunday.\nd. Best wishes,\nLan\ne. The bus will leave the school at 7 a.m.",
    "options": [
      "A. b – a – c – e – d",
      "B. b – c – e – a – d",
      "C. c – b – a – e – d",
      "D. b – e – c – d – a"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q606",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a formal email/letter asking for information:\n\na. Thank you for your attention.\nb. Dear Sir or Madam,\nc. I am writing to ask for information about your English course.\nd. Could you tell me the course fee and starting date?\ne. I look forward to hearing from you.",
    "options": [
      "A. b – d – c – e – a",
      "B. c – b – d – a – e",
      "C. b – c – d – e – a",
      "D. b – c – e – d – a"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q607",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete paragraph:\n\na. As a result, the school has become cleaner and greener.\nb. Students at our school are working together to protect the environment.\nc. First, they separate paper and plastic waste.\nd. Next, they plant trees around the schoolyard.\ne. Finally, they remind other students not to litter.",
    "options": [
      "A. b – c – d – e – a",
      "B. c – b – d – a – e",
      "C. b – d – c – e – a",
      "D. c – d – e – b – a"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q608",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt12",
    "content": "Choose the correct arrangement of the sentences to make a complete paragraph:\n\na. Therefore, regular reading can improve both language skills and general knowledge.\nb. Reading English books is a useful habit for students.\nc. It helps them learn new words in context.\nd. In addition, students can understand different cultures through stories.\ne. This habit also improves their ability to write clearly.",
    "options": [
      "A. b – e – c – d – a",
      "B. c – b – e – d – a",
      "C. b – c – e – d – a",
      "D. b – d – c – a – e"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "validatorType": "choice"
  },
  {
    "id": "eng-q701",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt13",
    "content": "Read the passage below and select the correct answer for each question:\n\n**A GREENER SCHOOL**\n\nLast year, Green Valley Secondary School started a project to make the school more environmentally friendly. First, the school placed separate bins for paper, plastic and food waste in every classroom. Students were taught how to use the bins correctly. The school also stopped selling drinks in single-use plastic cups.\n\nIn addition, students planted more than fifty trees around the schoolyard. These trees provide shade and make the air cleaner. Every Friday afternoon, members of the Green Club check the schoolyard and collect any rubbish they find.\n\nThe project has reduced the amount of waste produced by the school. It has also helped students understand that small daily actions can protect the environment.",
    "options": [
      "A. How students prepare for Friday classes | B. A school project to protect the environment | C. Why schools should sell more drinks | D. The difficulties of planting trees",
      "A. increased | B. collected | C. decreased | D. separated",
      "A. Teaching students about waste | B. Planting trees in the schoolyard | C. Using separate rubbish bins | D. Selling drinks in disposable plastic cups",
      "A. Students planted fewer than twenty trees. | B. The Green Club checks the schoolyard every day. | C. The project has helped students become more environmentally aware. | D. Food waste and plastic waste are put in the same bin."
    ],
    "correctAnswer": "B, C, D, C",
    "correctFinalAnswer": {
      "q1": "B",
      "q2": "C",
      "q3": "D",
      "q4": "C"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "B",
        "q2": "C",
        "q3": "D",
        "q4": "C"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "Câu 1: What is the passage mainly about?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 1" },
        { "key": "q2", "label": "Câu 2: The word \"reduced\" is closest in meaning to ______.", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 2" },
        { "key": "q3", "label": "Câu 3: What did the school stop doing?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 3" },
        { "key": "q4", "label": "Câu 4: Which of the following is TRUE according to the passage?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 4" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q702",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt13",
    "content": "Read the passage below and select the correct answer for each question:\n\n**THE COMMUNITY LIBRARY**\n\nFive years ago, the people of An Hoa village did not have a public library. Students had to travel several kilometres to borrow books. To solve this problem, local residents turned an old meeting room into a small community library.\n\nAt first, the library had only 300 books. Most of them were donated by teachers and families in the village. Today, more than 2,000 books are available, including novels, reference books and English-learning materials. The library is open every afternoon from Monday to Saturday.\n\nThe library is managed by volunteers. They help visitors find suitable books and organize reading activities for children at weekends. Thanks to the library, village students now have a quiet place to study and can access books more easily.",
    "options": [
      "A. Students needed an easier way to access books. | B. The village wanted to build a new meeting room. | C. Teachers needed a place to work. | D. Local residents wanted to sell old books.",
      "A. expensive | B. ready to be used | C. difficult to understand | D. borrowed by students",
      "A. English teachers | B. Village students | C. Volunteers | D. Local shop owners",
      "A. The library opens only at weekends. | B. The library originally had more than 2,000 books. | C. All the books were bought by the village government. | D. Children can join reading activities at weekends."
    ],
    "correctAnswer": "A, B, C, D",
    "correctFinalAnswer": {
      "q1": "A",
      "q2": "B",
      "q3": "C",
      "q4": "D"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "A",
        "q2": "B",
        "q3": "C",
        "q4": "D"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "Câu 5: Why was the community library created?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 5" },
        { "key": "q2", "label": "Câu 6: The word \"available\" is closest in meaning to ______.", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 6" },
        { "key": "q3", "label": "Câu 7: Who manages the library?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 7" },
        { "key": "q4", "label": "Câu 8: Which statement is TRUE?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 8" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q703",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt13",
    "content": "Read the passage below and select the correct answer for each question:\n\n**VISITING QUY NHON**\n\nQuy Nhon has become a popular destination for both Vietnamese and international visitors. The coastal city is known for its clean beaches, fresh seafood and peaceful atmosphere. Unlike some larger tourist cities, Quy Nhon is usually less crowded, so visitors can enjoy a more relaxing holiday.\n\nMany tourists visit Ky Co Beach because of its clear blue water and beautiful scenery. Others travel to Eo Gio to walk along the coast and take photographs. Visitors who are interested in history can visit the Twin Towers and learn about Cham culture.\n\nThe best time to visit Quy Nhon is usually from March to September, when the weather is generally sunny. However, tourists should check the weather forecast before travelling because heavy rain can sometimes affect outdoor activities.",
    "options": [
      "A. The history of Cham culture | B. Reasons why tourists visit Quy Nhon | C. Problems caused by tourism | D. How to cook seafood in Quy Nhon",
      "A. The city has no historical sites. | B. All outdoor activities are free. | C. It is generally less crowded than larger tourist cities. | D. The weather is always sunny.",
      "A. At Ky Co Beach | B. At the Twin Towers | C. At Eo Gio | D. At a seafood market",
      "A. Quy Nhon is known for its beaches and seafood. | B. Tourists can take coastal photographs at Eo Gio. | C. The weather from March to September is generally sunny. | D. Heavy rain never affects outdoor activities."
    ],
    "correctAnswer": "B, C, B, D",
    "correctFinalAnswer": {
      "q1": "B",
      "q2": "C",
      "q3": "B",
      "q4": "D"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "B",
        "q2": "C",
        "q3": "B",
        "q4": "D"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "Câu 9: What is the main idea of the passage?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 9" },
        { "key": "q2", "label": "Câu 10: Why can visitors have a more relaxing holiday in Quy Nhon?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 10" },
        { "key": "q3", "label": "Câu 11: Where can visitors learn about Cham culture?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 11" },
        { "key": "q4", "label": "Câu 12: Which of the following is NOT TRUE according to the passage?", "valueType": "choice", "placeholder": "Chọn đáp án cho câu 12" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q801",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt14",
    "content": "Read the passage below and decide whether the statements are True (T) or False (F):\n\n**A SCHOOL RECYCLING PROJECT**\n\nLast September, Nguyen Du Secondary School started a recycling project. The school placed separate bins for paper, plastic and food waste in every classroom. Teachers showed students how to put rubbish into the correct bins.\n\nEvery Friday afternoon, members of the Green Club collect the recyclable waste and take it to a local recycling centre. The money earned from recycling paper and plastic is used to buy young trees for the schoolyard.\n\nAfter six months, the school produced less waste than before. However, some students still forgot to use the correct bins, so the teachers decided to provide more instructions.",
    "correctAnswer": "T, F, T, F",
    "correctFinalAnswer": {
      "q1": "T",
      "q2": "F",
      "q3": "T",
      "q4": "F"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "T",
        "q2": "F",
        "q3": "T",
        "q4": "F"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "The recycling project began in September.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q2", "label": "Students take recyclable waste to the recycling centre every day.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q3", "label": "The school uses recycling money to buy trees.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q4", "label": "Every student always puts rubbish into the correct bin.", "valueType": "choice", "placeholder": "Chọn T hoặc F" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q802",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt14",
    "content": "Read the passage below and decide whether the statements are True (T) or False (F):\n\n**A COMMUNITY ENGLISH CLUB**\n\nThree years ago, a group of university students opened a free English club in An Hoa village. The club meets every Saturday evening at the village community centre. At first, only fifteen secondary school students joined the club, but now it has more than fifty members.\n\nDuring each meeting, students practise speaking through games, group discussions and short presentations. The volunteers do not give traditional grammar lessons. Instead, they encourage members to use English confidently in real situations.\n\nThe club is free, but students need to bring their own notebooks and pens. Members who attend regularly often become more confident and communicate more easily in English.",
    "correctAnswer": "F, T, F, T",
    "correctFinalAnswer": {
      "q1": "F",
      "q2": "T",
      "q3": "F",
      "q4": "T"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "F",
        "q2": "T",
        "q3": "F",
        "q4": "T"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "The English club was opened by secondary school teachers.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q2", "label": "The number of club members has increased.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q3", "label": "The volunteers mainly teach traditional grammar lessons.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q4", "label": "Students do not have to pay to join the club.", "valueType": "choice", "placeholder": "Chọn T hoặc F" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "eng-q803",
    "subjectId": "english",
    "topicId": "eng-t3",
    "questionTypeId": "eng-qt14",
    "content": "Read the passage below and decide whether the statements are True (T) or False (F):\n\n**TRAVELLING TO LY SON**\n\nLy Son is a small island district in Quang Ngai Province. Visitors cannot travel there by plane. Most tourists first go to Sa Ky Port and then take a boat to the island. The boat journey usually takes about thirty-five minutes, although it may take longer when the sea is rough.\n\nLy Son is famous for its volcanic landscape, clear water and garlic farms. Many visitors rent motorbikes to explore the island. They can visit To Vo Gate, climb Thoi Loi Mountain or enjoy fresh seafood near the harbour.\n\nThe best time to visit is usually from March to August. However, tourists should check the weather forecast because boats may stop running during storms.",
    "correctAnswer": "F, T, T, F",
    "correctFinalAnswer": {
      "q1": "F",
      "q2": "T",
      "q3": "T",
      "q4": "F"
    },
    "acceptedFinalAnswers": [
      {
        "q1": "F",
        "q2": "T",
        "q3": "T",
        "q4": "F"
      }
    ],
    "answerSchema": {
      "type": "self-check",
      "fields": [
        { "key": "q1", "label": "Tourists can fly directly to Ly Son.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q2", "label": "The boat trip may be longer in bad sea conditions.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q3", "label": "Visitors can travel around the island by rented motorbike.", "valueType": "choice", "placeholder": "Chọn T hoặc F" },
        { "key": "q4", "label": "Boats always operate, even during storms.", "valueType": "choice", "placeholder": "Chọn T hoặc F" }
      ],
      "proofImageRequired": false,
      "autoCheckMode": "exact"
    },
    "difficulty": "medium",
    "sourceType": "mock_exam"
  }
];
