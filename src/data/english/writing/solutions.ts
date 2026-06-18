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
    "id": "eng-s831",
    "questionId": "eng-q831",
    "recognition": "Biến đổi câu chỉ nguyên nhân - kết quả bằng cách chuyển từ liên từ chỉ kết quả 'so' sang liên từ chỉ nguyên nhân 'because'.",
    "translation": "Trời đã mưa rất to, vì vậy chúng tôi đã ở nhà.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định mối quan hệ nguyên nhân - kết quả",
        "explanation": "Câu gốc: 'It was raining heavily, so we stayed at home' (Trời mưa to, vì vậy chúng tôi ở nhà). Nguyên nhân là 'It was raining heavily' (Trời mưa to), kết quả là 'we stayed at home' (chúng tôi ở nhà).",
        "result": "Nguyên nhân: It was raining heavily"
      },
      {
        "order": 2,
        "title": "Áp dụng cấu trúc because",
        "explanation": "Cấu trúc: Kết quả + because + Nguyên nhân (chủ ngữ + động từ). Do đó ta có: 'We stayed at home because it was raining heavily'.",
        "result": "Viết lại: because it was raining heavily"
      }
    ],
    "finalAnswer": "it was raining heavily",
    "commonMistakes": [
      "Viết thiếu chủ ngữ 'it' hoặc chia sai động từ ở vế nguyên nhân.",
      "Giữ nguyên liên từ 'so' trong câu viết lại."
    ],
    "reviewSuggestions": [
      "Học thuộc cấu trúc: S + V + because + S + V.",
      "Luyện tập chuyển đổi giữa 'so' và 'because'."
    ]
  },
  {
    "id": "eng-s832",
    "questionId": "eng-q832",
    "recognition": "Chuyển đổi câu chỉ kết quả dùng 'so' sang câu chỉ nguyên nhân dùng 'because'.",
    "translation": "Con đường đã bị ngập, vì vậy xe buýt đã đến muộn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích câu gốc",
        "explanation": "Câu gốc: 'The road was flooded, so the bus arrived late' (Đường bị ngập, vì vậy xe buýt đến muộn). Nguyên nhân là đường ngập, kết quả là xe buýt đến muộn.",
        "result": "Nguyên nhân: The road was flooded"
      },
      {
        "order": 2,
        "title": "Ghép nối với because",
        "explanation": "Cấu trúc: S + V + because + S + V. Ta đưa mệnh đề nguyên nhân ra sau 'because' để tạo thành: 'The bus arrived late because the road was flooded'.",
        "result": "Cụm từ cần điền: the road was flooded"
      }
    ],
    "finalAnswer": "the road was flooded",
    "commonMistakes": [
      "Nhầm lẫn trật tự mệnh đề nguyên nhân và kết quả.",
      "Viết sai chính tả từ 'flooded'."
    ],
    "reviewSuggestions": [
      "Ôn tập phân biệt mệnh đề chỉ kết quả (bắt đầu bằng so) và mệnh đề chỉ nguyên nhân (bắt đầu bằng because)."
    ]
  },
  {
    "id": "eng-s833",
    "questionId": "eng-q833",
    "recognition": "Chuyển đổi cụm từ chỉ nguyên nhân (because of + danh từ/cụm danh từ) sang mệnh đề chỉ nguyên nhân (because + mệnh đề S-V).",
    "translation": "Chuyến bay đã bị hủy vì thời tiết xấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cụm từ sau because of",
        "explanation": "Cụm từ chỉ nguyên nhân là 'the bad weather' (thời tiết xấu). Ta cần đổi cụm danh từ này thành một mệnh đề hoàn chỉnh (có đầy đủ Chủ ngữ + Động từ).",
        "result": "Cụm danh từ: the bad weather"
      },
      {
        "order": 2,
        "title": "Chuyển đổi cụm danh từ sang mệnh đề",
        "explanation": "Chuyển 'the bad weather' thành mệnh đề: 'the weather was bad'. Sử dụng động từ to be ở quá khứ 'was' vì câu gốc dùng động từ chia ở quá khứ 'was cancelled'.",
        "result": "Mệnh đề: the weather was bad"
      }
    ],
    "finalAnswer": "the weather was bad",
    "commonMistakes": [
      "Sau because lại sử dụng nguyên cụm danh từ 'the bad weather' hoặc thiếu động từ to be 'was'.",
      "Dùng sai thì của động từ to be (ví dụ dùng is thay vì was)."
    ],
    "reviewSuggestions": [
      "Luyện tập đổi các cụm danh từ tính từ + danh từ (bad weather) thành mệnh đề tương ứng (weather is/was bad)."
    ]
  },
  {
    "id": "eng-s834",
    "questionId": "eng-q834",
    "recognition": "Chuyển đổi mệnh đề chỉ nguyên nhân (because + mệnh đề S-V) sang cụm danh từ/V-ing chỉ nguyên nhân (because of + danh từ/cụm danh từ/V-ing).",
    "translation": "Lan đã không thể đi học vì cô ấy bị ốm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định mệnh đề nguyên nhân",
        "explanation": "Mệnh đề sau 'because' là 'she was ill' (cô ấy bị ốm), với chủ ngữ là 'she' và tính từ là 'ill'.",
        "result": "Mệnh đề: she was ill"
      },
      {
        "order": 2,
        "title": "Biến đổi mệnh đề sang cụm danh từ hoặc V-ing",
        "explanation": "Cách 1: Sử dụng tính từ sở hữu tương ứng với 'she' là 'her' + danh từ của 'ill' là 'illness' -> 'her illness'. Cách 2: Do hai vế cùng chủ ngữ 'Lan' và 'she', ta có thể dùng dạng V-ing của to be 'was' là 'being' -> 'being ill'.",
        "result": "Cụm danh từ: her illness (hoặc being ill)"
      }
    ],
    "finalAnswer": "her illness",
    "commonMistakes": [
      "Viết nguyên mệnh đề 'she was ill' sau 'because of'.",
      "Sử dụng sai dạng danh từ của 'ill' (như viết nhầm thành illment hoặc giữ nguyên ill).",
      "Quên đổi tính từ sở hữu tương ứng với chủ ngữ."
    ],
    "reviewSuggestions": [
      "Học thuộc danh sách danh từ của các tính từ thông dụng (ill -> illness, poor -> poverty, hot -> heat, rain -> rain)."
    ]
  },
  {
    "id": "eng-s835",
    "questionId": "eng-q835",
    "recognition": "Chuyển đổi mệnh đề chỉ nguyên nhân bắt đầu với 'because' thành cụm danh từ bắt đầu bằng 'because of'.",
    "translation": "Chúng tôi đã đi vào trong nhà vì trời bắt đầu mưa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định mệnh đề nguyên nhân",
        "explanation": "Mệnh đề nguyên nhân là 'it started to rain' (trời bắt đầu mưa). Ta cần rút gọn mệnh đề này thành một danh từ hoặc cụm danh từ chỉ cơn mưa.",
        "result": "Mệnh đề: it started to rain"
      },
      {
        "order": 2,
        "title": "Chuyển đổi sang danh từ/cụm danh từ",
        "explanation": "Rút gọn hành động 'it started to rain' thành cụm danh từ đơn giản nhất là 'the rain' (cơn mưa). Ta có câu hoàn chỉnh: 'We went indoors because of the rain'.",
        "result": "Cụm danh từ: the rain"
      }
    ],
    "finalAnswer": "the rain",
    "commonMistakes": [
      "Viết là 'because of it started to rain' (lỗi ngữ pháp nghiêm trọng vì sau because of là danh từ, không phải mệnh đề).",
      "Nhầm lẫn giữa rain (danh từ/động từ) và rainy (tính từ)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ quy tắc: sau 'because of' luôn sử dụng danh từ, đại từ, hoặc V-ing."
    ]
  },
  {
    "id": "eng-s836",
    "questionId": "eng-q836",
    "recognition": "Chuyển đổi cụm từ chỉ nguyên nhân (because of + cụm danh từ) sang mệnh đề chỉ nguyên nhân (because + mệnh đề S-V).",
    "translation": "Vì sự chăm chỉ của mình, Nam đã thi đỗ kỳ thi tuyển sinh.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cụm danh từ",
        "explanation": "Cụm danh từ chỉ nguyên nhân là 'his hard work' (sự chăm chỉ của anh ấy). Ta cần chuyển cụm này thành mệnh đề chứa chủ ngữ 'he' và động từ tương ứng với 'hard work'.",
        "result": "Cụm danh từ: his hard work"
      },
      {
        "order": 2,
        "title": "Xây dựng mệnh đề",
        "explanation": "Chủ ngữ tương ứng với tính từ sở hữu 'his' là 'he'. Cụm 'hard work' diễn đạt hành động làm việc chăm chỉ, ta chuyển thành động từ 'work' bổ nghĩa bởi trạng từ 'hard' -> 'work hard'. Vì động từ chính 'passed' chia ở quá khứ đơn, ta chia động từ ở quá khứ đơn là 'worked hard'.",
        "result": "Mệnh đề: he worked hard"
      }
    ],
    "finalAnswer": "he worked hard",
    "commonMistakes": [
      "Chia sai thì của động từ (ví dụ dùng hiện tại đơn 'he works hard' trong khi câu gốc ở quá khứ đơn 'passed').",
      "Quên chủ ngữ 'he' hoặc dùng tính từ 'hard' đứng trước động từ."
    ],
    "reviewSuggestions": [
      "Luyện tập chuyển cụm 'possessive adjective + noun' thành 'subject + verb' và chia đúng thì phù hợp với mệnh đề chính."
    ]
  },
  {
    "id": "eng-s837",
    "questionId": "eng-q837",
    "recognition": "Biến đổi câu mệnh lệnh dạng khẳng định nối bằng 'and' sang câu điều kiện loại 1.",
    "translation": "Hãy học tập chăm chỉ, và bạn sẽ vượt qua kỳ thi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc câu gốc",
        "explanation": "Câu gốc: 'Study hard, and you will pass the exam' (Hãy học chăm chỉ, và bạn sẽ đỗ kỳ thi). Đây là câu lời khuyên có tính chất nguyên nhân - kết quả tích cực nối bằng 'and'.",
        "result": "Cấu trúc: V-inf, and S + will + V"
      },
      {
        "order": 2,
        "title": "Chuyển đổi sang câu điều kiện loại 1",
        "explanation": "Khi nối bằng 'and', ta chuyển trực tiếp thành câu điều kiện khẳng định: 'If + S + V (hiện tại đơn), S + will + V (nguyên thể)'. Với chủ ngữ 'you', ta viết: 'If you study hard, you will pass the exam'.",
        "result": "Mệnh đề if: If you study hard"
      }
    ],
    "finalAnswer": "study hard, you will pass the exam",
    "commonMistakes": [
      "Dùng từ 'will' trong mệnh đề If (ví dụ: 'If you will study hard' là sai ngữ pháp).",
      "Giữ nguyên liên từ 'and' trong câu điều kiện (ví dụ: 'If you study hard and you will...')."
    ],
    "reviewSuggestions": [
      "Ghi nhớ công thức điều kiện loại 1: Mệnh đề If dùng Hiện tại đơn, mệnh đề chính dùng Tương lai đơn (will + V)."
    ]
  },
  {
    "id": "eng-s838",
    "questionId": "eng-q838",
    "recognition": "Biến đổi câu mệnh lệnh nối bằng liên từ 'or' (hoặc là) sang câu điều kiện loại 1 dạng phủ định.",
    "translation": "Nhanh lên, nếu không bạn sẽ lỡ xe buýt.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích ý nghĩa câu gốc",
        "explanation": "Câu gốc: 'Hurry up, or you will miss the bus' (Nhanh lên, nếu không bạn sẽ lỡ xe buýt). Liên từ 'or' mang nghĩa 'nếu không thì', chỉ một hậu quả tiêu cực nếu hành động đầu không được thực hiện.",
        "result": "Ý nghĩa: Nếu không nhanh lên thì sẽ lỡ xe"
      },
      {
        "order": 2,
        "title": "Áp dụng cấu trúc If ở dạng phủ định",
        "explanation": "Khi chuyển sang 'If', mệnh đề If phải ở dạng phủ định để giữ nguyên nghĩa: 'If you don't hurry up, you will miss the bus'.",
        "result": "Mệnh đề If: If you don't hurry up"
      }
    ],
    "finalAnswer": "don't hurry up, you will miss the bus",
    "commonMistakes": [
      "Viết mệnh đề If ở dạng khẳng định: 'If you hurry up, you will miss the bus' (ngược nghĩa hoàn toàn).",
      "Giữ nguyên liên từ 'or' trong câu điều kiện."
    ],
    "reviewSuggestions": [
      "Ghi nhớ quy tắc chuyển đổi: V-inf + or + S + will... -> If you don't + V-inf, S + will..."
    ]
  },
  {
    "id": "eng-s839",
    "questionId": "eng-q839",
    "recognition": "Biến đổi câu mệnh lệnh phủ định nối bằng 'or' sang câu điều kiện loại 1 dạng khẳng định.",
    "translation": "Đừng chạm vào sợi dây đó, nếu không bạn có thể bị điện giật.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích ý nghĩa câu gốc",
        "explanation": "Câu gốc: 'Don’t touch that wire, or you may get an electric shock' (Đừng chạm vào sợi dây đó, nếu không bạn có thể bị điện giật). Đây là câu cảnh báo: nếu thực hiện hành động cấm đoán thì sẽ chịu hậu quả.",
        "result": "Ý nghĩa: Nếu chạm vào dây thì bị giật"
      },
      {
        "order": 2,
        "title": "Chuyển đổi sang cấu trúc If",
        "explanation": "Vì câu gốc cảnh báo 'Đừng làm X, nếu không sẽ bị Y', nghĩa là 'Nếu làm X thì sẽ bị Y'. Do đó mệnh đề If viết ở dạng khẳng định: 'If you touch that wire, you may get an electric shock'.",
        "result": "Mệnh đề If: If you touch that wire"
      }
    ],
    "finalAnswer": "touch that wire, you may get an electric shock",
    "commonMistakes": [
      "Giữ nguyên dạng phủ định trong mệnh đề If: 'If you don't touch that wire...' (sai nghĩa).",
      "Giữ lại từ 'or' trong câu viết lại."
    ],
    "reviewSuggestions": [
      "Nhớ quy tắc: Don't + V-inf, or... -> If you + V-inf, ..."
    ]
  },
  {
    "id": "eng-s840",
    "questionId": "eng-q840",
    "recognition": "Chuyển đổi câu mệnh lệnh khẳng định nối bằng 'and' sang câu điều kiện loại 1 khẳng định.",
    "translation": "Hãy tái chế nhiều hơn, và chúng ta sẽ giảm lượng rác thải.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc câu gốc",
        "explanation": "Câu gốc: 'Recycle more, and we will reduce the amount of waste' (Tái chế nhiều hơn, và chúng ta sẽ giảm lượng rác thải). Mệnh đề hành động đầu là nguyên nhân tích cực dẫn đến kết quả sau 'and'.",
        "result": "Nguyên nhân: Tái chế nhiều hơn"
      },
      {
        "order": 2,
        "title": "Áp dụng cấu trúc điều kiện loại 1 với chủ ngữ we",
        "explanation": "Đề bài gợi ý bắt đầu bằng 'If we...', ta đưa động từ nguyên mẫu 'recycle' đi kèm trạng từ 'more' vào mệnh đề If ở thì hiện tại đơn: 'If we recycle more, we will reduce the amount of waste'.",
        "result": "Viết lại: recycle more, we will reduce the amount of waste"
      }
    ],
    "finalAnswer": "recycle more, we will reduce the amount of waste",
    "commonMistakes": [
      "Dùng 'will' trong mệnh đề If: 'If we will recycle more...'.",
      "Nhầm lẫn chủ ngữ của mệnh đề If (ví dụ dùng you thay vì we như đề bài định hướng)."
    ],
    "reviewSuggestions": [
      "Luôn đọc kỹ cụm từ gợi ý của đề để xác định đúng chủ ngữ được yêu cầu."
    ]
  },
  {
    "id": "eng-s841",
    "questionId": "eng-q841",
    "recognition": "Biến đổi câu mệnh lệnh nối bằng liên từ 'or' sang câu điều kiện loại 1 dạng phủ định.",
    "translation": "Hãy mang theo ô, nếu không bạn sẽ bị ướt.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích mối quan hệ của câu gốc",
        "explanation": "Câu gốc: 'Take an umbrella, or you will get wet' (Mang ô đi, nếu không bạn sẽ bị ướt). 'Or' chỉ ra rằng nếu hành động 'mang ô' không xảy ra, kết quả là bạn bị ướt.",
        "result": "Ý nghĩa: Nếu không mang ô thì bị ướt"
      },
      {
        "order": 2,
        "title": "Chuyển sang cấu trúc If",
        "explanation": "Mệnh đề If phải ở thể phủ định: 'If you don't take an umbrella, you will get wet'. Chúng ta chia trợ động từ phủ định ở hiện tại đơn là 'don't' đi với chủ ngữ 'you'.",
        "result": "Cụm từ cần viết: don't take an umbrella, you will get wet"
      }
    ],
    "finalAnswer": "don't take an umbrella, you will get wet",
    "commonMistakes": [
      "Dùng khẳng định 'If you take an umbrella, you will get wet' (ngược nghĩa).",
      "Dùng trợ động từ phủ định ở thì quá khứ (didn't) thay vì hiện tại đơn (don't)."
    ],
    "reviewSuggestions": [
      "Ôn tập quy tắc: Do/Take..., or S + will... -> If you don't + Do/Take..., S + will..."
    ]
  },
  {
    "id": "eng-s842",
    "questionId": "eng-q842",
    "recognition": "Chuyển đổi câu mệnh lệnh nối bằng 'and' sang câu điều kiện loại 1 với mệnh đề If đứng sau mệnh đề chính.",
    "translation": "Hãy tập thể dục đều đặn, và sức khỏe của bạn sẽ được cải thiện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc câu gốc",
        "explanation": "Câu gốc: 'Exercise regularly, and your health will improve' (Tập thể dục thường xuyên, và sức khỏe của bạn sẽ cải thiện). Khi viết lại, mệnh đề kết quả 'Your health will improve' đã được đưa lên đầu.",
        "result": "Mệnh đề chính đứng trước"
      },
      {
        "order": 2,
        "title": "Viết mệnh đề If sau mệnh đề chính",
        "explanation": "Cấu trúc: S + will + V + if + S + V (hiện tại đơn). Ta đưa hành động 'tập thể dục' vào mệnh đề If với chủ ngữ 'you': 'if you exercise regularly'. Lưu ý khi mệnh đề If đứng sau thì giữa hai vế không dùng dấu phẩy.",
        "result": "Mệnh đề If: if you exercise regularly"
      }
    ],
    "finalAnswer": "you exercise regularly",
    "commonMistakes": [
      "Sử dụng dấu phẩy ngăn cách khi mệnh đề If đứng sau mệnh đề chính.",
      "Dùng will ở vế If: 'if you will exercise regularly'."
    ],
    "reviewSuggestions": [
      "Lưu ý quy tắc dấu phẩy trong câu điều kiện: If đứng đầu câu có dấu phẩy ở giữa; If đứng giữa câu không dùng dấu phẩy."
    ]
  },
  {
    "id": "eng-s843",
    "questionId": "eng-q843",
    "recognition": "Kết hợp hai câu đơn sử dụng mệnh đề quan hệ xác định với đại từ quan hệ chỉ người 'who' đóng vai trò làm chủ ngữ.",
    "translation": "Cô gái đã giành giải nhất. Cô ấy là em họ của tôi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định danh từ chung và đại từ thay thế",
        "explanation": "Trong hai câu đơn: 'The girl won first prize. She is my cousin.', từ 'The girl' ở câu đầu và đại từ 'She' ở câu sau cùng chỉ một đối tượng.",
        "result": "Đối tượng chung: The girl / She"
      },
      {
        "order": 2,
        "title": "Thay thế bằng đại từ quan hệ và lồng mệnh đề",
        "explanation": "Vì 'The girl' chỉ người và 'She' làm chủ ngữ ở câu sau, ta dùng đại từ quan hệ 'who' thay thế cho 'She'. Đưa toàn bộ mệnh đề quan hệ 'who won first prize' ra ngay sau danh từ 'The girl' mà nó bổ nghĩa: 'The girl who won first prize is my cousin'.",
        "result": "Câu hoàn chỉnh: The girl who won first prize is my cousin."
      }
    ],
    "finalAnswer": "who won first prize is my cousin",
    "commonMistakes": [
      "Giữ nguyên đại từ 'she' sau khi đã dùng 'who' (ví dụ: 'The girl who she won...').",
      "Sử dụng đại từ quan hệ 'which' thay vì 'who' để bổ nghĩa cho danh từ chỉ người."
    ],
    "reviewSuggestions": [
      "Ghi nhớ: Danh từ chỉ người + who + V... để làm chủ ngữ trong mệnh đề quan hệ."
    ]
  },
  {
    "id": "eng-s844",
    "questionId": "eng-q844",
    "recognition": "Kết hợp hai câu sử dụng mệnh đề quan hệ với đại từ quan hệ chỉ vật 'which' (hoặc 'that') đóng vai trò tân ngữ.",
    "translation": "Cuốn sách rất thú vị. Tôi đã mượn nó từ thư viện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định danh từ lặp lại",
        "explanation": "Hai câu: 'The book is very interesting. I borrowed it from the library.' Đối tượng trùng nhau là 'The book' và đại từ 'it' ở câu 2.",
        "result": "Đối tượng chung: The book / it"
      },
      {
        "order": 2,
        "title": "Chọn đại từ quan hệ và kết hợp",
        "explanation": "Vì 'The book' chỉ vật và 'it' đóng vai trò tân ngữ, ta dùng 'which' hoặc 'that' thay thế cho 'it' (và loại bỏ 'it'). Đưa mệnh đề quan hệ 'which I borrowed from the library' vào sau danh từ 'The book': 'The book which I borrowed from the library is very interesting'.",
        "result": "Câu hoàn chỉnh: The book which I borrowed from the library is very interesting."
      }
    ],
    "finalAnswer": "which I borrowed from the library is very interesting",
    "commonMistakes": [
      "Vẫn giữ nguyên đại từ tân ngữ 'it' ở câu sau (ví dụ: 'The book which I borrowed it...').",
      "Dùng sai đại từ quan hệ chỉ người 'who' cho danh từ chỉ vật 'the book'."
    ],
    "reviewSuggestions": [
      "Khi dùng đại từ quan hệ làm tân ngữ (who/whom/which/that), bắt buộc phải lược bỏ đại từ tân ngữ tương ứng ở câu gốc."
    ]
  },
  {
    "id": "eng-s845",
    "questionId": "eng-q845",
    "recognition": "Sử dụng trạng từ quan hệ chỉ nơi chốn 'where' để kết hợp hai câu.",
    "translation": "Quy Nhơn là một thành phố ven biển. Tôi đã được sinh ra ở đó.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích thành phần nơi chốn",
        "explanation": "Hai câu gốc: 'Quy Nhon is a coastal city. I was born there.'. Từ 'there' đóng vai trò trạng từ chỉ nơi chốn thay cho danh từ 'a coastal city'.",
        "result": "Trạng từ chỉ nơi chốn: there"
      },
      {
        "order": 2,
        "title": "Thay thế bằng trạng từ quan hệ",
        "explanation": "Ta dùng trạng từ quan hệ chỉ nơi chốn 'where' thay thế cho 'there' và kết nối hai mệnh đề: 'Quy Nhon is a coastal city where I was born'.",
        "result": "Cụm từ cần điền: where I was born"
      }
    ],
    "finalAnswer": "where I was born",
    "commonMistakes": [
      "Giữ lại từ 'there' trong mệnh đề quan hệ: 'where I was born there' (thừa từ chỉ nơi chốn).",
      "Dùng 'which' trực tiếp mà thiếu giới từ 'in' (ví dụ: 'which I was born' là sai, phải là 'in which I was born' hoặc 'which I was born in')."
    ],
    "reviewSuggestions": [
      "Ghi nhớ mối quan hệ: where = giới từ (in/on/at) + which."
    ]
  },
  {
    "id": "eng-s846",
    "questionId": "eng-q846",
    "recognition": "Sử dụng đại từ quan hệ chỉ sở hữu 'whose' kết hợp hai câu có dùng mệnh đề quan hệ không xác định (dùng dấu phẩy).",
    "translation": "Thầy Brown là giáo viên tiếng Anh của chúng tôi. Các bài học của thầy rất dễ hiểu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định tính chất sở hữu",
        "explanation": "Hai câu: 'Mr Brown is our English teacher. His lessons are easy to understand.'. Tính từ sở hữu 'His' ở câu sau bổ nghĩa cho danh từ 'lessons', chỉ sự sở hữu của 'Mr Brown'.",
        "result": "Sở hữu: His lessons"
      },
      {
        "order": 2,
        "title": "Sử dụng whose và lồng mệnh đề",
        "explanation": "Thay 'His' bằng đại từ quan hệ sở hữu 'whose' tạo thành cụm 'whose lessons'. Vì Mr Brown là tên riêng (danh từ xác định), ta phải dùng mệnh đề quan hệ không xác định ngăn cách bằng dấu phẩy: 'Mr Brown, whose lessons are easy to understand, is our English teacher'.",
        "result": "Viết lại: Mr Brown, whose lessons are easy to understand, is our English teacher."
      }
    ],
    "finalAnswer": "whose lessons are easy to understand, is our English teacher",
    "commonMistakes": [
      "Giữ nguyên tính từ sở hữu 'his' sau 'whose' (ví dụ: 'whose his lessons').",
      "Quên dấu phẩy ngăn cách mệnh đề quan hệ không xác định khi bổ nghĩa cho danh từ riêng 'Mr Brown'."
    ],
    "reviewSuggestions": [
      "Quy tắc sử dụng: Noun (người/vật) + whose + Noun (thuộc sở hữu) + V/S-V."
    ]
  },
  {
    "id": "eng-s847",
    "questionId": "eng-q847",
    "recognition": "Sử dụng đại từ quan hệ chỉ vật 'which' trong mệnh đề quan hệ không xác định để kết hợp câu.",
    "translation": "Chiếc xe đạp của tôi đã bị trộm ngày hôm qua. Nó đã được mua vào tháng trước.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định đối tượng chung",
        "explanation": "Hai câu: 'My bicycle was stolen yesterday. It was bought last month.'. Đối tượng trùng nhau là 'My bicycle' và 'It'. 'My bicycle' là danh từ đã xác định rõ bằng tính từ sở hữu 'My', do đó cần dùng mệnh đề không xác định có dấu phẩy.",
        "result": "Đối tượng: My bicycle (đã xác định)"
      },
      {
        "order": 2,
        "title": "Kết nối sử dụng which",
        "explanation": "Thay 'It' bằng 'which' và đưa mệnh đề quan hệ 'which was bought last month' vào giữa chủ ngữ và động từ chính của câu 1: 'My bicycle, which was bought last month, was stolen yesterday.'.",
        "result": "Cụm từ điền vào: which was bought last month, was stolen yesterday"
      }
    ],
    "finalAnswer": "which was bought last month, was stolen yesterday",
    "commonMistakes": [
      "Sử dụng đại từ quan hệ 'that' sau dấu phẩy (trong mệnh đề quan hệ không xác định không bao giờ được dùng 'that').",
      "Quên dấu phẩy bao quanh mệnh đề bổ nghĩa cho 'My bicycle'."
    ],
    "reviewSuggestions": [
      "Tuyệt đối ghi nhớ: Không dùng 'that' sau dấu phẩy (mệnh đề quan hệ không xác định) hoặc sau giới từ."
    ]
  },
  {
    "id": "eng-s848",
    "questionId": "eng-q848",
    "recognition": "Kết hợp hai câu sử dụng mệnh đề quan hệ không xác định với đại từ quan hệ 'which' bổ nghĩa cho danh từ riêng.",
    "translation": "Câu lạc bộ tiếng Anh giúp học sinh luyện nói. Nó sinh hoạt vào mỗi thứ Sáu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích chủ ngữ của câu",
        "explanation": "Chủ ngữ 'The English club' là một danh từ riêng/xác định cụ thể. Đại từ thay thế ở câu sau là 'It' (chỉ vật/sự việc làm chủ ngữ).",
        "result": "Chủ ngữ: The English club"
      },
      {
        "order": 2,
        "title": "Viết mệnh đề quan hệ không xác định",
        "explanation": "Thay 'It' bằng 'which' tạo thành mệnh đề 'which meets every Friday'. Đặt mệnh đề này ngay sau 'The English club' và cách biệt bằng dấu phẩy: 'The English club, which meets every Friday, helps students practise speaking.'.",
        "result": "Viết lại: which meets every Friday, helps students practise speaking"
      }
    ],
    "finalAnswer": "which meets every Friday, helps students practise speaking",
    "commonMistakes": [
      "Quên đặt dấu phẩy sau cụm mệnh đề quan hệ bổ trợ.",
      "Dùng 'that' thay thế cho 'which' trong mệnh đề quan hệ không xác định này."
    ],
    "reviewSuggestions": [
      "Luyện tập nhận diện danh từ xác định (tên riêng, danh từ có tính từ sở hữu, danh từ đi kèm this/that/these/those) để dùng mệnh đề quan hệ có dấu phẩy."
    ]
  },
  {
    "id": "eng-s849",
    "questionId": "eng-q849",
    "recognition": "Chuyển đổi câu hỏi trực tiếp dạng Có/Không (Yes/No Question) sang câu gián tiếp (Tường thuật) sử dụng liên từ 'if' hoặc 'whether'.",
    "translation": "Mary đã hỏi Peter: 'Bạn có biết đường đến nhà ga không?'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Nhận diện loại câu hỏi và áp dụng công thức",
        "explanation": "Câu hỏi trực tiếp trong ngoặc kép là: 'Do you know the way to the station?'. Đây là câu hỏi Yes/No, công thức gián tiếp: asked + O + if/whether + S + V (lùi thì, đổi trật tự như câu khẳng định).",
        "result": "Cấu trúc: asked + O + if/whether + S + V (lùi thì)"
      },
      {
        "order": 2,
        "title": "Biến đổi ngôi và lùi thì động từ",
        "explanation": "Ngôi 'you' đổi theo tân ngữ người nghe 'Peter' thành 'he'. Động từ chính 'know' (hiện tại đơn) lùi thì thành 'knew' (quá khứ đơn). Bỏ trợ động từ 'do'. Ta được cụm: 'he knew the way to the station'.",
        "result": "Cụm từ gián tiếp: he knew the way to the station"
      }
    ],
    "finalAnswer": "he knew the way to the station",
    "commonMistakes": [
      "Giữ nguyên trợ động từ hoặc đảo ngữ: 'if did he know...' hoặc 'if he did know...'.",
      "Quên lùi thì động từ 'know' sang 'knew'.",
      "Không đổi đại từ 'you' thành 'he' tương ứng với người nghe."
    ],
    "reviewSuggestions": [
      "Ghi nhớ: Trong câu tường thuật gián tiếp, trật tự từ luôn là trật tự câu khẳng định (S + V), không được đảo trợ động từ lên trước chủ ngữ."
    ]
  },
  {
    "id": "eng-s850",
    "questionId": "eng-q850",
    "recognition": "Chuyển đổi câu hỏi trực tiếp Yes/No sang câu tường thuật gián tiếp với 'if'.",
    "translation": "Giáo viên đã hỏi tôi: 'Em đã sẵn sàng cho bài kiểm tra chưa?'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích thành phần câu trực tiếp",
        "explanation": "Câu trực tiếp: 'Are you ready for the test?'. Đây là câu hỏi Yes/No có động từ to be 'Are' chia ở hiện tại đi với chủ ngữ 'you'.",
        "result": "Câu hỏi Yes/No với to be"
      },
      {
        "order": 2,
        "title": "Đổi đại từ và lùi thì động từ",
        "explanation": "Chủ ngữ 'you' được đổi theo tân ngữ người nghe 'me' thành 'I'. Động từ to be 'are' lùi thì tương ứng với chủ ngữ 'I' trong quá khứ là 'was'. Ta viết mệnh đề gián tiếp dạng khẳng định: 'I was ready for the test'.",
        "result": "Cụm từ tường thuật: I was ready for the test"
      }
    ],
    "finalAnswer": "I was ready for the test",
    "commonMistakes": [
      "Giữ nguyên trật tự câu hỏi: 'if was I ready...' (sai trật tự câu tường thuật).",
      "Chia động từ to be ở quá khứ không hòa hợp với chủ ngữ (ví dụ dùng 'if you were ready')."
    ],
    "reviewSuggestions": [
      "Ôn tập sự hòa hợp giữa chủ ngữ mới (I) và to be quá khứ (was) trong câu tường thuật."
    ]
  },
  {
    "id": "eng-s851",
    "questionId": "eng-q851",
    "recognition": "Chuyển đổi câu hỏi trực tiếp có từ để hỏi (Wh-Question) sang câu tường thuật gián tiếp.",
    "translation": "Nam đã hỏi Lan: 'Bạn sống ở đâu?'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ để hỏi và cấu trúc",
        "explanation": "Câu trực tiếp là 'Where do you live?'. Từ để hỏi là 'Where'. Công thức tường thuật: S + asked + O + Wh-word + S + V (lùi thì).",
        "result": "Cấu trúc: Nam asked Lan where + S + V (lùi thì)"
      },
      {
        "order": 2,
        "title": "Đổi đại từ và chia động từ",
        "explanation": "Đại từ 'you' đổi theo người nghe 'Lan' (nữ) thành 'she'. Động từ 'live' ở hiện tại đơn lùi thì thành quá khứ đơn 'lived'. Bỏ trợ động từ 'do'. Ta được mệnh đề gián tiếp: 'she lived'.",
        "result": "Cụm từ: she lived"
      }
    ],
    "finalAnswer": "she lived",
    "commonMistakes": [
      "Đảo trợ động từ hoặc giữ trợ động từ quá khứ: 'where did she live' (lỗi cực kỳ phổ biến).",
      "Quên lùi thì động từ 'live' thành 'lived'."
    ],
    "reviewSuggestions": [
      "Hãy luôn nhớ quy tắc vàng: Bỏ trợ động từ do/does/did trong câu hỏi gián tiếp và đưa động từ về dạng khẳng định lùi thì."
    ]
  },
  {
    "id": "eng-s852",
    "questionId": "eng-q852",
    "recognition": "Chuyển đổi câu trần thuật trực tiếp sang câu tường thuật gián tiếp, chú ý lùi thì động từ và đổi trạng từ chỉ thời gian.",
    "translation": "Lan đã nói: 'Mình sẽ đến thăm Quy Nhơn vào tuần tới.'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định các thành phần cần biến đổi",
        "explanation": "Câu trực tiếp: 'I will visit Quy Nhon next week.'. Ta cần đổi: 1. Đại từ 'I' -> 'she' (theo người nói Lan). 2. Động từ khuyết thiếu 'will' -> 'would'. 3. Cụm trạng từ thời gian 'next week' -> 'the following week' hoặc 'the next week'.",
        "result": "Biến đổi: I -> she; will -> would; next week -> the following week"
      },
      {
        "order": 2,
        "title": "Lắp ráp thành câu gián tiếp",
        "explanation": "Ta ghép các phần đã biến đổi lại sau 'Lan said that': 'she would visit Quy Nhon the following week'.",
        "result": "Mệnh đề hoàn chỉnh: she would visit Quy Nhon the following week"
      }
    ],
    "finalAnswer": "she would visit Quy Nhon the following week",
    "commonMistakes": [
      "Quên không đổi trạng từ chỉ thời gian 'next week' sang 'the following week'.",
      "Giữ nguyên từ 'will' mà không chuyển thành 'would'."
    ],
    "reviewSuggestions": [
      "Học thuộc bảng chuyển đổi các từ chỉ thời gian và nơi chốn trong câu tường thuật."
    ]
  },
  {
    "id": "eng-s853",
    "questionId": "eng-q853",
    "recognition": "Chuyển đổi câu mệnh lệnh phủ định (cấm đoán) trực tiếp sang câu gián tiếp.",
    "translation": "Mẹ tôi đã nói với tôi: 'Đừng thức khuya.'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc câu mệnh lệnh phủ định gián tiếp",
        "explanation": "Câu trực tiếp bắt đầu bằng 'Don't stay...'. Đây là câu mệnh lệnh phủ định. Công thức gián tiếp: told + O + not + to + V (nguyên mẫu).",
        "result": "Cấu trúc: told + me + not to + V"
      },
      {
        "order": 2,
        "title": "Biến đổi động từ",
        "explanation": "Động từ chính là 'stay'. Áp dụng công thức, ta chuyển 'Don't stay up late' thành cụm gián tiếp: 'not to stay up late'.",
        "result": "Cụm từ gián tiếp: not to stay up late"
      }
    ],
    "finalAnswer": "not to stay up late",
    "commonMistakes": [
      "Viết nhầm vị trí của 'not': 'to not stay' thay vì 'not to stay'.",
      "Quên giới từ 'to': 'not stay' (thiếu to) hoặc giữ nguyên trợ động từ 'don't to stay'."
    ],
    "reviewSuggestions": [
      "Phân biệt: Mệnh lệnh khẳng định dùng 'to V'; mệnh lệnh phủ định dùng 'not to V'."
    ]
  },
  {
    "id": "eng-s854",
    "questionId": "eng-q854",
    "recognition": "Chuyển đổi câu mệnh lệnh khẳng định (yêu cầu lịch sự) sang câu tường thuật gián tiếp.",
    "translation": "Giáo viên đã nói với các học sinh: 'Các em vui lòng mở sách ra.'",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc câu gián tiếp",
        "explanation": "Câu trực tiếp: 'Please open your books.'. Đây là câu yêu cầu khẳng định lịch sự (có please). Công thức gián tiếp: asked + O + to + V (nguyên mẫu). Bỏ từ 'Please' khi tường thuật.",
        "result": "Cấu trúc: asked + students + to + V"
      },
      {
        "order": 2,
        "title": "Đổi tính từ sở hữu và động từ",
        "explanation": "Đổi tính từ sở hữu 'your' theo tân ngữ người nghe 'the students' (số nhiều) thành 'their'. Động từ 'open' chuyển sang dạng 'to open'. Ta được cụm: 'to open their books'.",
        "result": "Cụm từ gián tiếp: to open their books"
      }
    ],
    "finalAnswer": "to open their books",
    "commonMistakes": [
      "Giữ nguyên tính từ sở hữu 'your' (ví dụ: 'to open your books' là sai vì người nghe đã được thay đổi thành ngôi thứ ba số nhiều).",
      "Giữ lại từ 'please' trong câu gián tiếp (ví dụ: 'to please open...')."
    ],
    "reviewSuggestions": [
      "Chú ý đổi tất cả các tính từ sở hữu và đại từ tương ứng theo ngữ cảnh người nói và người nghe trong câu tường thuật."
    ]
  }
];
