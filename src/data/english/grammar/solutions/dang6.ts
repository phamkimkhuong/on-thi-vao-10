import { Solution } from '@/types';

export const dang6Solutions: Solution[] = [
  {
    "id": "eng-s811",
    "questionId": "eng-q811",
    "recognition": "Lỗi sai về chia động từ ở thì Hiện tại đơn với chủ ngữ số ít.",
    "translation": "Bố tôi thường đi làm bằng xe máy.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định chủ ngữ và thì của câu",
        "explanation": "Từ chỉ tần suất 'usually' chỉ ra hành động diễn ra ở thì Hiện tại đơn. Chủ ngữ chính là 'My father' (danh từ số ít / ngôi thứ ba số ít).",
        "result": "Chủ ngữ số ít, Hiện tại đơn"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Với chủ ngữ số ít 'My father' ở thì Hiện tại đơn, động từ 'go' bắt buộc phải chia số ít bằng cách thêm đuôi -es để trở thành 'goes'.",
        "result": "go -> goes"
      }
    ],
    "finalAnswer": "goes",
    "commonMistakes": [
      "Học sinh quên chia động từ hoặc nhầm lẫn sang các thì quá khứ do không chú ý từ chỉ tần suất 'usually'."
    ],
    "reviewSuggestions": [
      "Ôn tập lại quy tắc chia động từ ngôi thứ ba số ít và quy tắc thêm đuôi -es sau động từ kết thúc bằng đuôi 'o'."
    ]
  },
  {
    "id": "eng-s812",
    "questionId": "eng-q812",
    "recognition": "Lỗi sai về dạng động từ đứng sau trợ động từ phủ định ở quá khứ đơn.",
    "translation": "Hôm qua tôi đã không đi học vì bị ốm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc câu phủ định quá khứ đơn",
        "explanation": "Trong câu phủ định của thì Quá khứ đơn, cấu trúc chuẩn là: S + didn't + Verb nguyên thể (V0).",
        "result": "Cần động từ nguyên thể sau didn't"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Động từ 'went' ở dạng quá khứ cột 2 là sai cấu trúc sau trợ động từ 'didn't'. Phải sửa 'went' thành động từ nguyên thể 'go'.",
        "result": "went -> go"
      }
    ],
    "finalAnswer": "go",
    "commonMistakes": [
      "Giữ nguyên dạng quá khứ 'went' dù đã có trợ động từ phủ định 'didn't' phía trước (lỗi chia quá khứ hai lần)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ công thức phủ định: S + didn't + V (nguyên thể) và nghi vấn: Did + S + V (nguyên thể)? ở thì quá khứ đơn."
    ]
  },
  {
    "id": "eng-s813",
    "questionId": "eng-q813",
    "recognition": "Lỗi sai về sự hòa hợp chủ-vị của động từ to be ở quá khứ.",
    "translation": "Lũ trẻ đang chơi bóng đá lúc 5 giờ chiều hôm qua.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích chủ ngữ của câu",
        "explanation": "Chủ ngữ chính của câu là 'The children' (lũ trẻ) - đây là danh từ số nhiều của danh từ 'child'.",
        "result": "Chủ ngữ số nhiều"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Động từ to be ở dạng quá khứ đi với chủ ngữ số nhiều phải là 'were', không được dùng trợ động từ số ít 'was'. Sửa 'was' thành 'were'.",
        "result": "was -> were"
      }
    ],
    "finalAnswer": "were",
    "commonMistakes": [
      "Nhầm danh từ 'children' là số ít vì nó không kết thúc bằng chữ 's' như các danh từ số nhiều thông thường khác."
    ],
    "reviewSuggestions": [
      "Ôn tập lại các danh từ số nhiều bất quy tắc thông dụng: children (trẻ em), people (người), teeth (răng), feet (bàn chân), mice (chuột)."
    ]
  },
  {
    "id": "eng-s814",
    "questionId": "eng-q814",
    "recognition": "Lỗi sai về cách sử dụng giới từ chỉ thời gian trong thì Hiện tại hoàn thành (Đề thi Bình Định 2025).",
    "translation": "Cô ấy đã sống ở ngôi làng này được năm năm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích trạng ngữ chỉ thời gian",
        "explanation": "Cụm từ 'five years' (năm năm) diễn tả một khoảng thời gian (a period of time).",
        "result": "five years là khoảng thời gian"
      },
      {
        "order": 2,
        "title": "Phát hiện giới từ sai và sửa lại",
        "explanation": "Trong thì Hiện tại hoàn thành, giới từ đi với khoảng thời gian là 'for', còn 'since' đi với mốc thời gian. Do đó, dùng 'since' là sai, phải sửa thành 'for'.",
        "result": "since -> for"
      }
    ],
    "finalAnswer": "for",
    "commonMistakes": [
      "Không phân biệt được khoảng thời gian (duration) và mốc thời gian (point of time) dẫn đến nhầm lẫn giữa since và for."
    ],
    "reviewSuggestions": [
      "Ghi nhớ mẹo: for + con số chỉ thời gian (for 5 years, for 3 months), since + mốc cụ thể có tên/số năm (since 2020, since last Monday)."
    ]
  },
  {
    "id": "eng-s815",
    "questionId": "eng-q815",
    "recognition": "Lỗi sai về cách dùng tính từ đuôi -ed và -ing diễn tả cảm giác của con người (Đề thi Bình Định 2025).",
    "translation": "Chúng tôi đã rất mệt sau khi đi bộ suốt ba tiếng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích đối tượng cảm nhận trong câu",
        "explanation": "Câu diễn đạt cảm xúc, trạng thái cảm nhận của chủ ngữ chỉ người 'We' (chúng tôi) sau khi đi bộ dài.",
        "result": "Diễn tả cảm nhận của con người"
      },
      {
        "order": 2,
        "title": "Phân biệt tính từ -ed/-ing và sửa lại",
        "explanation": "Tính từ đuôi -ing (tiring) dùng để chỉ tính chất của sự vật/sự việc gây ra cảm giác. Tính từ đuôi -ed (tired) mới chỉ cảm nhận của con người. Do đó phải sửa 'tiring' thành 'tired'.",
        "result": "tiring -> tired"
      }
    ],
    "finalAnswer": "tired",
    "commonMistakes": [
      "Sửa sai từ 'tiring' ở vế 'a tiring day' (một ngày mệt mỏi) - cụm này đúng vì miêu tả bản chất của ngày gây mệt mỏi."
    ],
    "reviewSuggestions": [
      "Phân biệt: tính từ -ing chỉ bản chất/đặc điểm của vật/sự việc; tính từ -ed chỉ cảm nhận/cảm xúc của con người đối với vật/sự việc đó."
    ]
  },
  {
    "id": "eng-s816",
    "questionId": "eng-q816",
    "recognition": "Lỗi sai về cấu trúc động từ đi sau động từ 'enjoy'.",
    "translation": "Anh ấy thích đọc sách tiếng Anh vào thời gian rảnh rỗi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định công thức của động từ enjoy",
        "explanation": "Theo quy tắc cấu trúc dạng động từ trong tiếng Anh, theo sau động từ chỉ sở thích 'enjoy' luôn là một động từ thêm đuôi -ing (Gerund).",
        "result": "enjoy + V-ing"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Sử dụng dạng động từ to V 'to read' sau 'enjoys' là sai ngữ pháp. Phải sửa 'to read' thành danh động từ 'reading'.",
        "result": "to read -> reading"
      }
    ],
    "finalAnswer": "reading",
    "commonMistakes": [
      "Nhầm lẫn chia động từ nguyên mẫu không to hoặc chia to-V do dịch theo nghĩa tiếng Việt (thích 'để' làm gì)."
    ],
    "reviewSuggestions": [
      "Học thuộc nhóm động từ bắt buộc đi kèm V-ing: enjoy, dislike, avoid, practice, suggest, mind, finish."
    ]
  },
  {
    "id": "eng-s817",
    "questionId": "eng-q817",
    "recognition": "Lỗi sai về cấu trúc động từ nguyên mẫu có 'to' sau cấu trúc 'ask somebody'.",
    "translation": "Giáo viên đã yêu cầu chúng tôi hoàn thành bài tập trước thứ Sáu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc của động từ ask",
        "explanation": "Cấu trúc yêu cầu ai đó làm việc gì là: ask + somebody + to + V nguyên mẫu.",
        "result": "ask sb + to V"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Động từ 'finish' đứng sau tân ngữ 'us' đang ở dạng nguyên mẫu không to (V0) là sai cấu trúc. Phải sửa 'finish' thành 'to finish'.",
        "result": "finish -> to finish"
      }
    ],
    "finalAnswer": "to finish",
    "commonMistakes": [
      "Dùng động từ dạng V-ing 'finishing' hoặc giữ nguyên V0 do ảnh hưởng từ các cấu trúc khuyên bảo khác."
    ],
    "reviewSuggestions": [
      "Ghi nhớ các cấu trúc giao tiếp phổ biến: ask sb to V (yêu cầu ai làm gì), tell sb to V (bảo ai làm gì), want sb to V (muốn ai làm gì)."
    ]
  },
  {
    "id": "eng-s818",
    "questionId": "eng-q818",
    "recognition": "Lỗi sai về dạng động từ đi sau động từ khuyết thiếu 'should'.",
    "translation": "Học sinh nên bảo vệ môi trường.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định quy tắc sau động từ khuyết thiếu",
        "explanation": "Theo sau các động từ khuyết thiếu (modal verbs) như should, can, must, may, will... bắt buộc phải là động từ nguyên mẫu không 'to' (V0).",
        "result": "should + V0"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Cụm động từ 'to protect' chứa giới từ 'to' là sai cấu trúc sau động từ khuyết thiếu 'should'. Phải bỏ 'to' để sửa thành động từ nguyên thể 'protect'.",
        "result": "to protect -> protect"
      }
    ],
    "finalAnswer": "protect",
    "commonMistakes": [
      "Thêm 'to' vào trước động từ do nhầm với các động từ thường khác chỉ mục đích."
    ],
    "reviewSuggestions": [
      "Ôn tập lại danh sách động từ khuyết thiếu và nhớ quy tắc: Modal Verb + V0."
    ]
  },
  {
    "id": "eng-s819",
    "questionId": "eng-q819",
    "recognition": "Lỗi sai về giới từ đi kèm tính từ 'interested'.",
    "translation": "Cô ấy hứng thú với việc tìm hiểu về các thành phố xanh.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cụm tính từ đi kèm giới từ cố định",
        "explanation": "Cụm tính từ cố định diễn tả sự quan tâm, thích thú với điều gì là: be interested + in + Noun/V-ing.",
        "result": "be interested in"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Giới từ 'on' đi sau tính từ 'interested' là sai quy tắc kết hợp từ (collocation). Phải sửa 'on' thành giới từ 'in'.",
        "result": "on -> in"
      }
    ],
    "finalAnswer": "in",
    "commonMistakes": [
      "Dùng 'on', 'at' hoặc 'with' do dịch từ ngữ nghĩa tiếng Việt 'thích thú VỚI' hoặc 'quan tâm LÊN'."
    ],
    "reviewSuggestions": [
      "Học thuộc lòng cả cụm giới từ cố định để tránh bị bẫy dịch nghĩa thô từ tiếng Việt."
    ]
  },
  {
    "id": "eng-s820",
    "questionId": "eng-q820",
    "recognition": "Lỗi sai về dạng động từ sau cụm từ 'look forward to'.",
    "translation": "Chúng tôi rất mong đợi được gặp bạn vào tuần tới.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc look forward to",
        "explanation": "Trong cụm từ 'look forward to', từ 'to' đóng vai trò là một giới từ thực sự chứ không phải là từ tạo động từ nguyên mẫu. Do đó, theo sau giới từ này bắt buộc phải là một danh động từ dạng V-ing.",
        "result": "look forward to + V-ing"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Sử dụng động từ nguyên thể 'meet' sau cụm 'look forward to' là sai ngữ pháp. Phải sửa 'meet' thành 'meeting'.",
        "result": "meet -> meeting"
      }
    ],
    "finalAnswer": "meeting",
    "commonMistakes": [
      "Nhầm lẫn từ 'to' ở đây là to-infinitive nên chia động từ nguyên mẫu 'meet' (lỗi siêu phổ biến)."
    ],
    "reviewSuggestions": [
      "Nhớ kỹ quy tắc đặc biệt: look forward to + V-ing (mong đợi, trông ngóng việc gì)."
    ]
  },
  {
    "id": "eng-s821",
    "questionId": "eng-q821",
    "recognition": "Lỗi sai về sự hòa hợp chủ-vị giữa cụm chủ ngữ chứa giới từ và động từ chính.",
    "translation": "Các học sinh trong lớp tôi học tiếng Anh mỗi ngày.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc chủ ngữ của câu",
        "explanation": "Trong cụm chủ ngữ 'The students in my class', danh từ chính đứng trước giới từ là 'The students' (số nhiều), còn 'in my class' chỉ là cụm bổ ngữ phụ họa. Do đó động từ chính phải chia theo danh từ chính số nhiều.",
        "result": "Chủ ngữ chính là The students (số nhiều)"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Động từ 'studies' đang chia ở dạng số ít cho danh từ 'class' là sai quy tắc hòa hợp. Phải sửa thành dạng nguyên thể 'study' để hòa hợp với chủ ngữ số nhiều.",
        "result": "studies -> study"
      }
    ],
    "finalAnswer": "study",
    "commonMistakes": [
      "Nhìn thấy danh từ đứng ngay trước động từ là 'class' (số ít) nên vội vàng chia động từ số ít 'studies'."
    ],
    "reviewSuggestions": [
      "Khi chủ ngữ có dạng: N1 + giới từ + N2 -> Động từ luôn luôn chia hòa hợp theo N1."
    ]
  },
  {
    "id": "eng-s822",
    "questionId": "eng-q822",
    "recognition": "Lỗi sai về so sánh kép (Double Comparison) của tính từ ngắn.",
    "translation": "Bài tập này dễ hơn bài tập trước.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc so sánh hơn của tính từ ngắn",
        "explanation": "Từ gốc 'easy' là tính từ ngắn (2 âm tiết kết thúc bằng y). So sánh hơn của tính từ ngắn được cấu tạo bằng cách thêm đuôi '-er' (easier) và không đi kèm từ 'more' ở trước.",
        "result": "easier là tính từ ngắn dạng so sánh hơn"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Cụm từ 'more easier' phạm lỗi sử dụng đồng thời hai hình thức so sánh hơn (so sánh kép). Phải bỏ từ 'more' để giữ lại dạng so sánh đúng duy nhất là 'easier'.",
        "result": "more easier -> easier"
      }
    ],
    "finalAnswer": "easier",
    "commonMistakes": [
      "Thêm 'more' trước tính từ ngắn đã thêm đuôi '-er' hoặc biến đổi sai chữ y dài của 'easy'."
    ],
    "reviewSuggestions": [
      "Tuyệt đối không dùng đồng thời 'more' và đuôi '-er' trong cấu trúc so sánh hơn."
    ]
  },
  {
    "id": "eng-s823",
    "questionId": "eng-q823",
    "recognition": "Lỗi sai về việc sử dụng tính từ thay cho trạng từ để bổ nghĩa cho động từ thường.",
    "translation": "Cô ấy nói tiếng Anh rất trôi chảy.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định từ loại cần dùng để bổ nghĩa",
        "explanation": "Động từ chính trong câu là động từ hành động thường 'speaks' (nói). Quy tắc ngữ pháp: để bổ nghĩa cho động từ thường, ta phải dùng một trạng từ chỉ cách thức đứng sau.",
        "result": "Cần trạng từ bổ nghĩa cho speaks"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Từ 'fluent' là tính từ, đứng sau bổ nghĩa cho động từ 'speaks' là sai ngữ pháp. Phải sửa thành trạng từ 'fluently'.",
        "result": "fluent -> fluently"
      }
    ],
    "finalAnswer": "fluently",
    "commonMistakes": [
      "Nhầm lẫn giữa động từ liên kết (linking verbs) và động từ hành động thường dẫn đến dùng sai tính từ."
    ],
    "reviewSuggestions": [
      "Ôn tập kỹ: Động từ thường + Trạng từ (-ly); Động từ liên kết (be, feel, look...) + Tính từ."
    ]
  },
  {
    "id": "eng-s824",
    "questionId": "eng-q824",
    "recognition": "Lỗi sai về dạng danh từ số ít sau cấu trúc chỉ số lượng đặc biệt.",
    "translation": "Quy Nhơn là một trong những địa điểm đẹp nhất ở miền Trung Việt Nam.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu trúc 'one of the'",
        "explanation": "Cấu trúc 'one of the + so sánh nhất + Danh từ' diễn tả một trong số nhiều đối tượng. Do đó danh từ theo sau bắt buộc phải ở dạng số nhiều đếm được.",
        "result": "one of the... + Danh từ số nhiều"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Danh từ 'place' đang ở dạng số ít là sai ngữ pháp. Phải sửa thành danh từ số nhiều 'places'.",
        "result": "place -> places"
      }
    ],
    "finalAnswer": "places",
    "commonMistakes": [
      "Quên thêm 's' vào danh từ chính do nhầm lẫn giữa dịch nghĩa số ít 'một trong những'."
    ],
    "reviewSuggestions": [
      "Luôn kiểm tra danh từ đi sau các từ chỉ lượng lớn/nhóm đối tượng như 'one of the...', 'many', 'some', 'several'."
    ]
  },
  {
    "id": "eng-s825",
    "questionId": "eng-q825",
    "recognition": "Lỗi sai chia thì động từ do bỏ sót trạng từ chỉ thời gian liên kết.",
    "translation": "Tôi đã ghé thăm Phú Quốc ba lần tính cho tới nay.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định dấu hiệu thời gian của câu",
        "explanation": "Cụm từ 'so far' (tính cho tới nay) đi kèm số lần thực hiện hành động 'three times' là dấu hiệu đặc trưng yêu cầu sử dụng thì Hiện tại hoàn thành.",
        "result": "so far -> thì Hiện tại hoàn thành"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Động từ 'visited' đang được chia ở thì Quá khứ đơn là sai ngữ cảnh. Với chủ ngữ 'I', ta phải chia động từ ở thì hiện tại hoàn thành là 'have visited'.",
        "result": "visited -> have visited"
      }
    ],
    "finalAnswer": "have visited",
    "commonMistakes": [
      "Chia quá khứ đơn 'visited' do thói quen dịch nghĩa hành động đã xảy ra mà không chú ý từ chỉ liên kết 'so far'."
    ],
    "reviewSuggestions": [
      "Ghi nhớ các từ khóa chỉ thì Hiện tại hoàn thành: so far, up to now, since, for, recently, already, yet, times."
    ]
  },
  {
    "id": "eng-s826",
    "questionId": "eng-q826",
    "recognition": "Lỗi sai về cấu trúc động từ đi sau động từ 'suggest'.",
    "translation": "Giáo viên của tôi đã gợi ý việc học từ mới mỗi ngày.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định công thức của động từ suggest",
        "explanation": "Khi muốn đưa ra lời đề xuất, gợi ý làm hành động gì mà không có mệnh đề bắt đầu bằng 'that', cấu trúc chuẩn là: suggest + V-ing.",
        "result": "suggest + V-ing"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Sử dụng dạng động từ to V 'to study' sau 'suggested' là sai cấu trúc ngữ pháp. Phải sửa 'to study' thành danh động từ 'studying'.",
        "result": "to study -> studying"
      }
    ],
    "finalAnswer": "studying",
    "commonMistakes": [
      "Nhầm lẫn chia 'to study' do thói quen áp dụng công thức khuyên bảo chung của các từ như advise, encourage, ask."
    ],
    "reviewSuggestions": [
      "Ôn tập lại cấu trúc: suggest + V-ing và suggest + that + S + (should) + V0."
    ]
  },
  {
    "id": "eng-s827",
    "questionId": "eng-q827",
    "recognition": "Lỗi sai về từ chỉ lượng đi với danh từ đếm được số nhiều.",
    "translation": "Có rất nhiều cuốn sách hữu ích trong thư viện trường.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích danh từ đi kèm từ lượng",
        "explanation": "Từ đứng sau là 'books' (những cuốn sách) - đây là danh từ đếm được ở số nhiều.",
        "result": "books là danh từ đếm được số nhiều"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Từ chỉ lượng 'much' chỉ đi kèm danh từ không đếm được. Để diễn tả lượng nhiều của danh từ đếm được số nhiều, ta phải dùng 'many'. Sửa 'much' thành 'many'.",
        "result": "much -> many"
      }
    ],
    "finalAnswer": "many",
    "commonMistakes": [
      "Dùng 'much' cho tất cả danh từ chỉ lượng nhiều mà không phân biệt đếm được hay không đếm được."
    ],
    "reviewSuggestions": [
      "Quy tắc lượng từ: many + N số nhiều đếm được; much + N không đếm được; a lot of / lots of + cả hai loại."
    ]
  },
  {
    "id": "eng-s828",
    "questionId": "eng-q828",
    "recognition": "Lỗi sai về chia động từ với danh từ không đếm được làm chủ ngữ.",
    "translation": "Tin tức này rất đáng ngạc nhiên.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích tính chất của danh từ news",
        "explanation": "Danh từ 'news' (tin tức) mặc dù có hình thức kết thúc bằng đuôi '-s' giống như danh từ số nhiều, nhưng bản chất ngữ pháp của nó lại là danh từ không đếm được (uncountable noun).",
        "result": "news là danh từ không đếm được"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Danh từ không đếm được làm chủ ngữ luôn đi kèm động từ chia ở số ít. Do đó, dùng động từ to be 'are' là sai ngữ pháp, phải sửa thành 'is'.",
        "result": "are -> is"
      }
    ],
    "finalAnswer": "is",
    "commonMistakes": [
      "Nhầm lẫn 'news' là danh từ số nhiều do kết thúc bằng chữ 's' và chia to be là 'are'."
    ],
    "reviewSuggestions": [
      "Ghi nhớ các danh từ không đếm được có đuôi '-s' nhưng luôn chia động từ số ít: news, physics (vật lý), mathematics (toán học), gymnastics (thể dục)."
    ]
  },
  {
    "id": "eng-s829",
    "questionId": "eng-q829",
    "recognition": "Lỗi sai về việc dùng tính từ đuôi -ed và -ing chỉ tính chất của sự vật.",
    "translation": "Bộ phim chán đến nỗi vài học sinh đã ngủ gật.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích đối tượng được miêu tả trong câu",
        "explanation": "Tính từ đứng sau động từ liên kết 'was' được dùng để miêu tả đặc điểm/tính chất của chủ ngữ chỉ sự vật 'The film' (bộ phim) - tác nhân gây ra cảm giác chán nản.",
        "result": "Miêu tả tính chất của sự vật gây cảm giác"
      },
      {
        "order": 2,
        "title": "Phân biệt tính từ -ed/-ing và sửa lại",
        "explanation": "Tính từ đuôi -ed (bored) chỉ dùng để diễn tả cảm xúc/cảm nhận của con người đối với sự vật. Tính từ đuôi -ing (boring) mới dùng để chỉ bản chất của sự vật. Do đó phải sửa 'bored' thành 'boring'.",
        "result": "bored -> boring"
      }
    ],
    "finalAnswer": "boring",
    "commonMistakes": [
      "Dùng 'bored' để mô tả sự vật, sự việc (như 'bored film', 'bored book' là hoàn toàn sai nghĩa)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ quy tắc chung: Sự vật/sự việc gây cảm giác -> dùng đuôi -ing; Con người cảm thấy/bị tác động -> dùng đuôi -ed."
    ]
  },
  {
    "id": "eng-s830",
    "questionId": "eng-q830",
    "recognition": "Lỗi sai về trật tự từ giữa tính từ và trạng từ 'enough'.",
    "translation": "Cô ấy đủ cao để có thể chạm tới ngăn kệ trên cùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định vị trí chuẩn của trạng từ enough",
        "explanation": "Quy tắc cấu trúc của từ 'enough' kết hợp với tính từ (adjective) hoặc trạng từ (adverb) là: Adjective/Adverb + enough + to V (đủ... để làm gì).",
        "result": "Công thức: Adj + enough"
      },
      {
        "order": 2,
        "title": "Phát hiện lỗi sai và sửa lại",
        "explanation": "Cụm từ 'enough tall' đang đặt từ 'enough' đứng trước tính từ 'tall' là sai trật tự từ chuẩn. Phải đảo lại thành 'tall enough'.",
        "result": "enough tall -> tall enough"
      }
    ],
    "finalAnswer": "tall enough",
    "commonMistakes": [
      "Nhầm lẫn vị trí của 'enough' với danh từ (enough + Noun) áp đặt sang tính từ dẫn đến dùng 'enough tall'."
    ],
    "reviewSuggestions": [
      "Học thuộc hai công thức kinh điển của enough: 1. Adj/Adv + enough; 2. enough + Noun."
    ]
  }
];
