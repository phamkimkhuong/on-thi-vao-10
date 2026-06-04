import { Solution } from '@/types';

export const writingSolutions: Solution[] = [
  {
    "id": "eng-s3",
    "questionId": "eng-q3",
    "recognition": "Câu chủ động có cấu trúc: S (They) + V (built) + O (a new bridge) + Adv (across the river last year). Động từ \"built\" ở thì Quá khứ đơn (Simple Past), nên khi đổi sang bị động ta dùng was/were + V3.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đưa tân ngữ lên làm chủ ngữ câu bị động",
        "explanation": "Tân ngữ \"a new bridge\" (số ít) được đưa lên làm chủ ngữ mới.",
        "result": "Chủ ngữ mới: A new bridge (số ít)"
      },
      {
        "order": 2,
        "title": "Chọn động từ to be thích hợp ở quá khứ đơn",
        "explanation": "Vì câu gốc ở quá khứ đơn và chủ ngữ mới \"a new bridge\" là danh từ số ít, ta sử dụng \"was\".",
        "result": "to be -> was"
      },
      {
        "order": 3,
        "title": "Đổi động từ chính sang dạng phân từ hai V3",
        "explanation": "Động từ \"build\" bất quy tắc chuyển sang quá khứ và phân từ hai đều là \"built\".",
        "result": "V3 -> built"
      },
      {
        "order": 4,
        "title": "Lắp ráp câu hoàn chỉnh và loại trừ đáp án",
        "explanation": "Ta được câu bị động: \"A new bridge was built across the river last year.\" Đối chiếu với các đáp án:\n- A sai vì dùng \"is\" (thì hiện tại)\n- C sai vì dùng \"has been\" (thì hiện tại hoàn thành)\n- D sai vì dùng \"were\" (sai sự hòa hợp với danh từ số ít)\n- B là câu đúng hoàn toàn.",
        "result": "Đáp án đúng là B"
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Dùng nhầm động từ \"were\" cho danh từ số ít \"a new bridge\"",
      "Nhầm lẫn thì của câu gốc từ quá khứ sang hiện tại đơn dẫn đến chọn A"
    ],
    "reviewSuggestions": [
      "Ôn tập các thì ngữ pháp cơ bản trong Tiếng Anh",
      "Luyện tập chuyển đổi câu bị động với nhiều thì khác nhau"
    ]
  },
  {
    "id": "eng-s4",
    "questionId": "eng-q4",
    "recognition": "Câu gốc chỉ thực tế ở hiện tại: \"Anh ấy không có đủ tiền (hiện tại đơn phủ định), vì vậy anh ấy không thể mua điện thoại (hiện tại đơn phủ định)\". Để chuyển sang câu điều kiện, ta phải dùng câu điều kiện loại 2 (trái với thực tế ở hiện tại) và chuyển thể khẳng định/phủ định tương ứng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định loại câu điều kiện",
        "explanation": "Sự thật ở hiện tại không có tiền và không mua được điện thoại, giả thiết trái thực tế hiện tại yêu cầu câu điều kiện loại 2.",
        "result": "Điều kiện loại 2: If + S + V2/ed (were cho mọi ngôi), S + would/could + V0"
      },
      {
        "order": 2,
        "title": "Biến đổi mệnh đề If (giả thiết)",
        "explanation": "Câu gốc phủ định \"doesn't have\" chuyển sang khẳng định quá khứ đơn \"had\".",
        "result": "If he had enough money,"
      },
      {
        "order": 3,
        "title": "Biến đổi mệnh đề chính (kết quả)",
        "explanation": "Câu gốc phủ định \"cannot buy\" chuyển sang khẳng định \"could buy\".",
        "result": "he could buy that smartphone."
      },
      {
        "order": 4,
        "title": "Kết hợp câu và loại trừ đáp án",
        "explanation": "Câu hoàn chỉnh: \"If he had enough money, he could buy that smartphone.\" Đối chiếu: A sai loại 1; B dùng \"can\" ở mệnh đề chính (sai cấu trúc); D giữ nguyên phủ định.",
        "result": "Đáp án đúng là C"
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Quên không đổi thể khẳng định sang phủ định và ngược lại.",
      "Nhầm lẫn cấu trúc mệnh đề chính loại 2 dùng could/would thành can/will."
    ],
    "reviewSuggestions": [
      "Ghi nhớ cấu trúc điều kiện loại 2 trái ngược thực tế hiện tại.",
      "Ôn lại các biến đổi khẳng định/phủ định giữa câu gốc và câu điều kiện."
    ]
  },
  {
    "id": "eng-s94",
    "questionId": "eng-q94",
    "recognition": "Câu gốc dùng liên từ nối \"but\" chỉ sự đối lập giữa hai mệnh đề: \"Anh ấy mệt\" và \"Anh ấy hoàn thành bài tập\". Đề yêu cầu viết lại dùng \"Although\" (Mặc dù).",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc Although",
        "explanation": "Although + Clause 1, Clause 2 (không dùng but ở giữa hai mệnh đề).",
        "result": "Although + Mệnh đề chỉ sự nhượng bộ"
      },
      {
        "order": 2,
        "title": "Biến đổi và viết câu",
        "explanation": "Đưa mệnh đề nguyên nhân đối lập ra sau Although và bỏ \"but\" ở câu gốc: \"Although he was tired, he finished his homework.\"",
        "result": "Although he was tired, he finished his homework."
      }
    ],
    "finalAnswer": "Although he was tired, he finished his homework.",
    "commonMistakes": [
      "Vẫn giữ nguyên từ \"but\" trong câu viết lại (lỗi cực kỳ phổ biến)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ: Although... và ...but không được đi cùng nhau trong một câu."
    ]
  },
  {
    "id": "eng-s95",
    "questionId": "eng-q95",
    "recognition": "Câu gốc chỉ lý do bằng cụm danh từ sau because of: \"because of his illness\" (vì bệnh của anh ấy). Yêu cầu viết lại bằng liên từ \"because\" (theo sau là một mệnh đề gồm chủ-vị).",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đổi cụm danh từ sang mệnh đề",
        "explanation": "Cụm \"his illness\" có chủ ngữ tương ứng là \"he\", tính từ mô tả là \"ill\" hoặc \"sick\". Động từ to be ở quá khứ đơn vì vế trước là \"couldn't\".",
        "result": "he was ill / he was sick"
      }
    ],
    "finalAnswer": "he was ill",
    "commonMistakes": [
      "Chia sai thì động từ to be (ví dụ dùng is thay vì was).",
      "Viết sai tính từ illness (illness là danh từ, sau be phải dùng tính từ ill)."
    ],
    "reviewSuggestions": [
      "Luyện cách chuyển đổi: because of + N/V-ing <-> because + S + V."
    ]
  },
  {
    "id": "eng-s96",
    "questionId": "eng-q96",
    "recognition": "Câu gốc là câu trực tiếp: \"I know the way,\" he said to me. Yêu cầu chuyển sang câu tường thuật dùng động từ giới hạn trong ngoặc (KNEW), viết từ 3-5 từ.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng quy tắc câu tường thuật",
        "explanation": "Đổi ngôi \"I\" thành \"he\", lùi thì động từ \"know\" (hiện tại đơn) sang quá khứ đơn \"knew\".",
        "result": "he knew the way"
      },
      {
        "order": 2,
        "title": "Đếm số từ",
        "explanation": "Cụm \"he knew the way\" gồm đúng 4 từ, thỏa mãn điều kiện từ 3-5 từ.",
        "result": "4 từ"
      }
    ],
    "finalAnswer": "he knew the way",
    "commonMistakes": [
      "Quên lùi thì động từ, giữ nguyên là know.",
      "Viết quá dài vượt quá 5 từ."
    ],
    "reviewSuggestions": [
      "Ôn quy tắc chuyển đổi câu trực tiếp sang gián tiếp: đổi ngôi, lùi thì, đổi trạng ngữ."
    ]
  },
  {
    "id": "eng-s97",
    "questionId": "eng-q97",
    "recognition": "Đề bài cho hai câu đơn: \"This is the computer. It is sometimes called a PC.\" và yêu cầu kết hợp dùng đại từ quan hệ \"which\", khống chế từ 3-5 từ.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ lặp và thay thế",
        "explanation": "Từ lặp \"It\" ở câu 2 đại diện cho \"the computer\" ở câu 1. Thay \"It\" bằng đại từ quan hệ \"which\" và ghép hai câu.",
        "result": "This is the computer which is sometimes called a PC."
      },
      {
        "order": 2,
        "title": "Xác định phần điền vào chỗ trống",
        "explanation": "Đề bài đã cho sẵn: \"This is the computer...\". Vậy phần cần viết thêm bắt đầu từ \"which\" cho đến trước từ \"PC\". Cụm đó là: \"which is sometimes called a\".",
        "result": "which is sometimes called a (5 từ)"
      }
    ],
    "finalAnswer": "which is sometimes called a",
    "commonMistakes": [
      "Viết lại cả câu đầy đủ dẫn đến thừa từ.",
      "Vẫn giữ nguyên đại từ \"it\" sau khi đã có \"which\" (ví dụ: which it is...)."
    ],
    "reviewSuggestions": [
      "Ôn tập cách kết hợp câu dùng đại từ quan hệ who, whom, which, that."
    ]
  },
  {
    "id": "eng-s100",
    "questionId": "eng-q100",
    "recognition": "Sắp xếp các câu để làm cuộc trò chuyện logic.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tìm câu mở đầu",
        "explanation": "Câu B (\"Hi, Nam. Where are you going?\") là lời chào và câu hỏi tự nhiên mở đầu hội thoại.",
        "result": "B đứng đầu"
      },
      {
        "order": 2,
        "title": "Tìm câu phản hồi",
        "explanation": "Nam phản hồi lại lời chào của Mai ở câu D (\"Hi, Mai. I'm going to borrow some books.\").",
        "result": "Thứ tự: B -> D"
      },
      {
        "order": 3,
        "title": "Liên kết ý tiếp theo",
        "explanation": "Mai hỏi tiếp và làm rõ địa điểm ở câu A (\"Sure. I am going to the Hoai Nhon library.\"). Sau đó Nam phản hồi bằng câu C để kết thúc (\"Oh, can I go with you?...\").",
        "result": "Thứ tự đầy đủ: B -> D -> A -> C"
      }
    ],
    "finalAnswer": "BDAC",
    "commonMistakes": [
      "Nhầm lẫn giữa câu D và A làm câu chuyện rời rạc."
    ],
    "reviewSuggestions": [
      "Luyện tập tìm các cặp câu Hỏi - Đáp liên tiếp."
    ]
  }
];
