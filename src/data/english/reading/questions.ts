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
  }
];
