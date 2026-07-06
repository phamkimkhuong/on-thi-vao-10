import { Solution } from '@/types';

export const g10EnglishSolutions: Solution[] = [
  // CHUYÊN ĐỀ 1: Family Life (s1 - s10)
  {
    id: 'eng10-s1',
    questionId: 'eng10-q1',
    recognition: 'Nhận biết thì Hiện tại tiếp diễn qua động từ chỉ mệnh lệnh Look!.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định dấu hiệu thời gian',
        explanation: 'Từ gây chú ý "Look!" ở đầu câu báo hiệu hành động đang diễn ra tại thời điểm nói. Động từ cần chia ở thì Hiện tại tiếp diễn.',
        result: 'Chia động từ ở Hiện tại tiếp diễn.'
      },
      {
        order: 2,
        title: 'Chia động từ theo đúng chủ ngữ',
        explanation: 'Chủ ngữ "The children" là danh từ số nhiều (những đứa trẻ), đi với động từ tobe "are" và động từ "cooking". Chọn đáp án B.',
        result: 'are cooking'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "is cooking" do nhầm lẫn "children" là số ít.', 'Chọn "cook" vì tưởng là thói quen.'],
    reviewSuggestions: ['Ghi nhớ các từ mệnh lệnh gây chú ý ở đầu câu luôn đi với thì Hiện tại tiếp diễn.']
  },
  {
    id: 'eng10-s2',
    questionId: 'eng10-q2',
    recognition: 'Nhận biết thì Hiện tại đơn qua sự thật hiển nhiên/thói quen và chủ ngữ số ít.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định ngữ cảnh của câu',
        explanation: 'Câu diễn tả một sự thật hiển nhiên hoặc công việc thường nhật: "bố tôi là người kiếm tiền chính, ông ấy làm việc vất vả để nuôi chúng tôi". Do đó ta chia thì Hiện tại đơn.',
        result: 'Chia ở Hiện tại đơn.'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Chủ ngữ "he" là ngôi thứ ba số ít nên động từ "work" phải thêm "s" thành "works". Chọn đáp án B.',
        result: 'works'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Giữ nguyên động từ "work" không thêm s/es.'],
    reviewSuggestions: ['Chú ý chia động từ số ít ở Hiện tại đơn đối với các ngôi he, she, it và danh từ số ít.']
  },
  {
    id: 'eng10-s3',
    questionId: 'eng10-q3',
    recognition: 'Nhận biết thì Hiện tại đơn qua trạng từ chỉ tần suất usually.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định dấu hiệu thời gian và thì',
        explanation: 'Có trạng từ chỉ tần suất "usually" (thường xuyên), câu diễn tả một thói quen ở hiện tại nên chia thì Hiện tại đơn.',
        result: 'Thì Hiện tại đơn'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Chủ ngữ "My mother" là ngôi thứ ba số ít nên động từ "divide" thêm "s" thành "divides". Chọn đáp án A.',
        result: 'divides'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng chia tiếp diễn do thói quen dịch nghĩa đang phân chia.'],
    reviewSuggestions: ['Trạng từ tần suất như usually, always, often là dấu hiệu điển hình của thì Hiện tại đơn.']
  },
  {
    id: 'eng10-s4',
    questionId: 'eng10-q4',
    recognition: 'Nhận biết thì Hiện tại tiếp diễn qua cụm từ chỉ thời gian at the moment.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định dấu hiệu thời gian và thì',
        explanation: 'Cụm từ "At the moment" (ngay lúc này) chỉ hành động đang diễn ra tại thời điểm nói, do đó động từ chia ở Hiện tại tiếp diễn.',
        result: 'Thì Hiện tại tiếp diễn'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Chủ ngữ "my sister" là số ít, đi với "is sweeping". Chọn đáp án C.',
        result: 'is sweeping'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "sweeps" do không chú ý cụm từ chỉ thời gian cụ thể "at the moment".'],
    reviewSuggestions: ['Nhận biết nhanh các dấu hiệu tiếp diễn: at the moment, currently, at present.']
  },
  {
    id: 'eng10-s5',
    questionId: 'eng10-q5',
    recognition: 'Cấu trúc động từ theo sau help.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc ngữ pháp của help',
        explanation: 'Động từ chính là "help" có cấu trúc: help + someone + V-bare hoặc to-V (giúp ai đó làm gì).',
        result: 'help + someone + V-bare'
      },
      {
        order: 2,
        title: 'Lựa chọn phương án đúng',
        explanation: 'Trong các đáp án, "take" ở dạng nguyên mẫu không "to" phù hợp cấu trúc. Chọn đáp án A.',
        result: 'take'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng V-ing sau động từ help.'],
    reviewSuggestions: ['Ghi nhớ cấu trúc: help + sb + do/to do sth. Cả hai dạng nguyên mẫu có to và không to đều được chấp nhận.']
  },
  {
    id: 'eng10-s6',
    questionId: 'eng10-q6',
    recognition: 'Nhận biết thì Hiện tại tiếp diễn qua ngữ cảnh giải thích hành động tạm thời.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ cảnh câu',
        explanation: 'Lời từ chối "I\'m sorry, I can\'t go out with you now" (Tôi xin lỗi, bây giờ tôi không đi chơi được) ngầm định người nói đang bận làm việc gì đó ngay lúc này (đang chuẩn bị cơm tối). Do đó dùng Hiện tại tiếp diễn.',
        result: 'Thì Hiện tại tiếp diễn'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Chủ ngữ "I" đi kèm với "am preparing". Chọn đáp án C.',
        result: 'am preparing'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng Hiện tại đơn do thói quen chia động từ thông thường.'],
    reviewSuggestions: ['Khi một hành động giải thích lý do không thể thực hiện hành động khác ở hiện tại, hành động đó thường chia ở tiếp diễn.']
  },
  {
    id: 'eng10-s7',
    questionId: 'eng10-q7',
    recognition: 'Nhận biết thì Hiện tại đơn qua trạng từ chỉ tần suất every day.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thì của câu',
        explanation: 'Trạng từ "Every day" (mỗi ngày) diễn tả hành động lặp đi lặp lại thường xuyên, do đó chia Hiện tại đơn.',
        result: 'Thì Hiện tại đơn'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Chủ ngữ "my mother" là danh từ số ít (ngôi thứ ba số ít), động từ "do" biến đổi thành "does". Chọn đáp án B.',
        result: 'does'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "do" do quên không chia động từ cho chủ ngữ số ít.'],
    reviewSuggestions: ['Chủ ngữ số ít đi với động từ thêm s/es. Động từ tận cùng bằng o, ch, sh, x, s thì thêm "es" (do -> does).']
  },
  {
    id: 'eng10-s8',
    questionId: 'eng10-q8',
    recognition: 'Nhận biết thì Hiện tại tiếp diễn qua động từ mệnh lệnh Be quiet!.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích dấu hiệu nhận biết',
        explanation: 'Từ khóa "Be quiet!" (Hãy yên lặng!) yêu cầu giữ trật tự vì một sự việc đang diễn ra (em bé đang ngủ), chia Hiện tại tiếp diễn.',
        result: 'Thì Hiện tại tiếp diễn'
      },
      {
        order: 2,
        title: 'Lựa chọn đáp án',
        explanation: 'Chủ ngữ "The baby" là số ít, đi với "is sleeping". Chọn đáp án C.',
        result: 'is sleeping'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "sleeps" do thói quen chia Hiện tại đơn.'],
    reviewSuggestions: ['Các câu mệnh lệnh gây chú ý ở hiện tại luôn báo hiệu hành động đang diễn ra.']
  },
  {
    id: 'eng10-s9',
    questionId: 'eng10-q9',
    recognition: 'Động từ trạng thái know chia ở Hiện tại đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá tính chất của động từ',
        explanation: 'Động từ "know" (biết) là động từ chỉ trạng thái nhận thức (state verb). Theo quy tắc, các động từ trạng thái không chia tiếp diễn.',
        result: 'State Verb'
      },
      {
        order: 2,
        title: 'Lựa chọn thì đúng',
        explanation: 'Vì không chia tiếp diễn, ta dùng Hiện tại đơn: "know" (chủ ngữ I giữ nguyên). Chọn đáp án A.',
        result: 'know'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "am knowing" do dịch nghĩa đang diễn ra.'],
    reviewSuggestions: ['Học thuộc danh sách động từ trạng thái không dùng ở dạng tiếp diễn: know, believe, like, love, understand.']
  },
  {
    id: 'eng10-s10',
    questionId: 'eng10-q10',
    recognition: 'Động từ trạng thái need chia ở Hiện tại đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá tính chất động từ',
        explanation: 'Động từ "need" (cần) là động từ trạng thái biểu thị mong muốn/nhu cầu, không chia ở dạng tiếp diễn bất kể có trạng từ thời gian hiện tại.',
        result: 'State Verb'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Chủ ngữ "she" số ít, động từ chia Hiện tại đơn thêm s thành "needs". Chọn đáp án B.',
        result: 'needs'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "is needing" do nhầm lẫn với trạng ngữ "at present".'],
    reviewSuggestions: ['Động từ chỉ nhu cầu như want, need luôn ưu tiên chia ở các thì đơn giản, tránh chia ở tiếp diễn.']
  },

  // CHUYÊN ĐỀ 2: Humans and the Environment (s11 - s20)
  {
    id: 'eng10-s11',
    questionId: 'eng10-q11',
    recognition: 'Dự đoán tương lai có căn cứ thực tế sử dụng Be going to.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm căn cứ thực tế ở hiện tại',
        explanation: 'Trong câu có bằng chứng thực tế "dark clouds in the sky" (những đám mây đen trên bầu trời). Đây là cơ sở thực tế chắc chắn.',
        result: 'Bằng chứng thực tế'
      },
      {
        order: 2,
        title: 'Lựa chọn cấu trúc tương lai phù hợp',
        explanation: 'Dự đoán tương lai có bằng chứng thực tế rõ ràng ở hiện tại phải dùng cấu trúc "be going to": is going to rain. Chọn đáp án C.',
        result: 'is going to rain'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "will rain" do thói quen dịch nghĩa tương lai chung chung.'],
    reviewSuggestions: ['Sử dụng be going to khi có bằng chứng thực tế tại thời điểm nói chỉ ra sự việc sắp xảy ra.']
  },
  {
    id: 'eng10-s12',
    questionId: 'eng10-q12',
    recognition: 'Quyết định tức thời ngay tại thời điểm nói dùng Will.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ cảnh hội thoại',
        explanation: 'Người nói B chỉ biết tin thùng rác đầy sau khi người nói A thông báo ("bin is full"), và lập tức đưa ra quyết định dọn dẹp ("I... empty it right now").',
        result: 'Quyết định tức thời'
      },
      {
        order: 2,
        title: 'Lựa chọn cấu trúc tương lai',
        explanation: 'Quyết định đưa ra ngay tại thời điểm nói không chuẩn bị trước dùng "will": will empty. Chọn đáp án B.',
        result: 'will empty'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Dùng "am going to empty" vốn chỉ dùng cho dự định định sẵn từ trước.'],
    reviewSuggestions: ['Trong các đoạn hội thoại hỏi - đáp nhanh phát sinh hành động mới, luôn dùng Will.']
  },
  {
    id: 'eng10-s13',
    questionId: 'eng10-q13',
    recognition: 'Kế hoạch đã chuẩn bị sẵn từ trước dùng Be going to.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định sự chuẩn bị của hành động',
        explanation: 'Vế sau có thông tin "We have already registered" (Chúng tôi đã đăng ký rồi). Điều này chứng tỏ hành động tham gia chiến dịch xanh đã được lên kế hoạch và sắp xếp trước.',
        result: 'Dự định có chuẩn bị sẵn'
      },
      {
        order: 2,
        title: 'Lựa chọn cấu trúc phù hợp',
        explanation: 'Hành động tương lai có kế hoạch chuẩn bị từ trước dùng "be going to": are going to join. Chọn đáp án C.',
        result: 'are going to join'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng "will join" do không đọc hết vế sau chỉ sự chuẩn bị.'],
    reviewSuggestions: ['Luôn đọc hết câu để tìm các chi tiết bổ trợ như "buy tickets, register, make plans" báo hiệu cấu trúc be going to.']
  },
  {
    id: 'eng10-s14',
    questionId: 'eng10-q14',
    recognition: 'Dự đoán tương lai không có căn cứ rõ ràng dùng Will sau hope.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ khóa nhận định cá nhân',
        explanation: 'Câu bắt đầu bằng động từ "hope" (hy vọng) thể hiện mong muốn và dự đoán mang tính chủ quan của người nói về tương lai.',
        result: 'Dự đoán chủ quan'
      },
      {
        order: 2,
        title: 'Lựa chọn trợ động từ',
        explanation: 'Dự đoán chủ quan không có bằng chứng thực tế đi kèm các từ *hope, think, believe* dùng "will": will use. Chọn đáp án A.',
        result: 'will use'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng "are going to use" do nhầm lẫn về mức độ chắc chắn.'],
    reviewSuggestions: ['Các động từ biểu đạt suy nghĩ chủ quan như think, hope, believe, expect, promise... thường đi kèm với Will.']
  },
  {
    id: 'eng10-s15',
    questionId: 'eng10-q15',
    recognition: 'Dự định được quyết định từ trước dùng Be going to.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích dấu hiệu dự định',
        explanation: 'Cụm từ "She has made up her mind" (Cô ấy đã quyết định rồi) chứng tỏ việc đi xe đạp đến trường đã được suy nghĩ và lên kế hoạch từ trước.',
        result: 'Quyết định từ trước'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Cấu trúc tương lai diễn tả quyết định từ trước là "be going to": is going to cycle. Chọn đáp án C.',
        result: 'is going to cycle'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "will cycle" vì dịch nhanh nghĩa tương lai.'],
    reviewSuggestions: ['Make up one\'s mind là cụm từ chỉ việc đã quyết định xong xuôi, luôn đi với cấu trúc be going to.']
  },
  {
    id: 'eng10-s16',
    questionId: 'eng10-q16',
    recognition: 'Câu bị động thì Hiện tại đơn của chủ ngữ số nhiều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định nghĩa bị động và thì',
        explanation: 'Chủ ngữ "Single-use plastic bags" (Túi nilon dùng một lần) là vật, không thể tự cấm ("ban") mà bị cấm. Trạng từ "nowadays" chỉ hiện tại đơn.',
        result: 'Bị động Hiện tại đơn'
      },
      {
        order: 2,
        title: 'Chia động từ bị động',
        explanation: 'Công thức: $S + am/is/are + V_{3/ed}$. Chủ ngữ số nhiều "plastic bags" đi với "are banned". Chọn đáp án B.',
        result: 'are banned'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "is banned" do nhầm lẫn danh từ số nhiều thành không đếm được.'],
    reviewSuggestions: ['Danh từ số nhiều kết thúc bằng "s" luôn đi với động từ số nhiều (are).']
  },
  {
    id: 'eng10-s17',
    questionId: 'eng10-q17',
    recognition: 'Câu bị động thì Tương lai đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thì của câu',
        explanation: 'Trạng ngữ "next year" (năm tới) là dấu hiệu của thì Tương lai đơn.',
        result: 'Tương lai đơn'
      },
      {
        order: 2,
        title: 'Xác định thể bị động và chia động từ',
        explanation: 'Công viên ("A new eco-friendly park") được xây dựng chứ không tự xây dựng. Bị động Tương lai đơn: $will + be + V_{3/ed} \\Rightarrow$ will be built. Chọn đáp án C.',
        result: 'will be built'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "will build" ở dạng chủ động.'],
    reviewSuggestions: ['Cần ghi nhớ dạng phân từ hai của các động từ bất quy tắc phổ biến (build -> built).']
  },
  {
    id: 'eng10-s18',
    questionId: 'eng10-q18',
    recognition: 'Câu bị động thì Quá khứ đơn chủ ngữ số nhiều.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định dấu hiệu thời gian và thì',
        explanation: 'Cụm từ "last week" (tuần trước) chỉ thời gian đã chấm dứt trong quá khứ, chia Quá khứ đơn.',
        result: 'Quá khứ đơn'
      },
      {
        order: 2,
        title: 'Chia bị động theo chủ ngữ',
        explanation: 'Cây cối được trồng (bị động). Chủ ngữ "Thousands of young trees" là số nhiều, đi với "were" ở quá khứ đơn: were planted. Chọn đáp án B.',
        result: 'were planted'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "was planted" do nhầm lẫn danh từ số nhiều hoặc không phân biệt was/were.'],
    reviewSuggestions: ['Chủ ngữ số nhiều đi với were, chủ ngữ số ít đi với was ở thể bị động quá khứ.']
  },
  {
    id: 'eng10-s19',
    questionId: 'eng10-q19',
    recognition: 'Câu bị động thì Hiện tại hoàn thành.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thì của câu',
        explanation: 'Liên từ "since" nối hai vế hành động bắt đầu từ quá khứ kéo dài đến hiện tại, báo hiệu thì Hiện tại hoàn thành ở vế chính.',
        result: 'Hiện tại hoàn thành'
      },
      {
        order: 2,
        title: 'Chia bị động theo chủ ngữ',
        explanation: 'Rác thải ("A lot of household waste") là danh từ không đếm được (số ít), đi với "has". Công thức bị động HTHT: $has/have + been + V_{3/ed} \\Rightarrow$ has been collected. Chọn đáp án A.',
        result: 'has been collected'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "have been collected" do nhầm "a lot of" đi với động từ số nhiều.'],
    reviewSuggestions: ['Household waste là danh từ không đếm được, luôn chia động từ ở dạng số ít (has).']
  },
  {
    id: 'eng10-s20',
    questionId: 'eng10-q20',
    recognition: 'Câu bị động thì Hiện tại đơn diễn tả sự việc lặp lại hằng ngày.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thì và thể bị động',
        explanation: 'Có từ "every day" (mỗi ngày) chỉ hành động lặp lại ở hiện tại đơn. Môi trường ("The environment") bị ô nhiễm (bị động).',
        result: 'Bị động Hiện tại đơn'
      },
      {
        order: 2,
        title: 'Lựa chọn phương án',
        explanation: 'Chủ ngữ "The environment" là danh từ số ít, đi với "is" + V3: is polluted. Chọn đáp án A.',
        result: 'is polluted'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "is polluting" là thể chủ động/tiếp diễn.'],
    reviewSuggestions: ['Chú ý phân biệt động từ đuôi -ing (chủ động) và đuôi -ed (bị động) trong cấu trúc câu.']
  },

  // CHUYÊN ĐỀ 3: Music (s21 - s30)
  {
    id: 'eng10-s21',
    questionId: 'eng10-q21',
    recognition: 'Động từ đi kèm sau decide.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tra cứu cấu trúc động từ chính',
        explanation: 'Động từ chính đứng trước là "decide" (quyết định). Theo quy tắc, sau decide là một động từ nguyên mẫu có to.',
        result: 'decide + to-V'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Dạng to-V của "participate" là "to participate". Chọn đáp án A.',
        result: 'to participate'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "participating" do thói quen dịch nghĩa tiếng Việt.'],
    reviewSuggestions: ['Học thuộc nhóm các động từ quyết định/mong muốn đi với To-V: decide, plan, want, wish.']
  },
  {
    id: 'eng10-s22',
    questionId: 'eng10-q22',
    recognition: 'Động từ đi kèm sau cấu trúc make.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng cấu trúc cầu khiến',
        explanation: 'Cấu trúc cầu khiến phổ biến: make + someone + V-bare (khiến ai đó làm gì/như thế nào).',
        result: 'make + O + V-bare'
      },
      {
        order: 2,
        title: 'Lựa chọn dạng động từ',
        explanation: 'Động từ "feel" giữ ở dạng nguyên mẫu không to. Chọn đáp án C.',
        result: 'feel'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "to feel" hoặc "feeling" do nhầm lẫn các cấu trúc động từ khác.'],
    reviewSuggestions: ['Ghi nhớ hai động từ đặc biệt đi với V-bare ở dạng cầu khiến là: Make và Let.']
  },
  {
    id: 'eng10-s23',
    questionId: 'eng10-q23',
    recognition: 'Động từ đi kèm sau cấu trúc let.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng cấu trúc cho phép',
        explanation: 'Cấu trúc: let + someone + V-bare (cho phép ai làm gì).',
        result: 'let + O + V-bare'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Động từ "stay" giữ ở dạng nguyên mẫu không to. Chọn đáp án B.',
        result: 'stay'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Dùng "to stay" vì nhầm với cấu trúc allow + O + to-V.'],
    reviewSuggestions: ['Phân biệt: let + sb + do sth và allow + sb + to do sth (cùng nghĩa cho phép).']
  },
  {
    id: 'eng10-s24',
    questionId: 'eng10-q24',
    recognition: 'Động từ đi kèm sau plan.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của plan',
        explanation: 'Động từ "plan" (lên kế hoạch) yêu cầu một động từ nguyên mẫu có to đi kèm phía sau.',
        result: 'plan + to-V'
      },
      {
        order: 2,
        title: 'Chọn dạng đúng',
        explanation: 'Dạng to-V của "organize" là "to organize". Chọn đáp án A.',
        result: 'to organize'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "organizing" do ảnh hưởng dịch nghĩa.'],
    reviewSuggestions: ['Lập bảng chia hai cột To-V và V-ing để ôn tập thường xuyên.']
  },
  {
    id: 'eng10-s25',
    questionId: 'eng10-q25',
    recognition: 'Động từ đi kèm sau expect.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của expect',
        explanation: 'Động từ "expect" (mong đợi, kỳ vọng) yêu cầu động từ nguyên mẫu có to đi sau.',
        result: 'expect + to-V'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Dạng to-V của "meet" là "to meet". Chọn đáp án A.',
        result: 'to meet'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "meeting" do nhầm lẫn.'],
    reviewSuggestions: ['Expect to do something là cấu trúc chuẩn để diễn tả kỳ vọng tương lai.']
  },
  {
    id: 'eng10-s26',
    questionId: 'eng10-q26',
    recognition: 'Lựa chọn liên từ ghép chỉ sự tương phản.',
    detailedSteps: [
      {
        order: 1,
        title: 'Dịch nghĩa hai mệnh đề',
        explanation: 'Mệnh đề 1: "Anh ấy muốn mua vé" (ý định tốt). Mệnh đề 2: "Vé bán hết trong mười phút" (trở ngại thực tế). Mối quan hệ là đối lập.',
        result: 'Mối quan hệ tương phản'
      },
      {
        order: 2,
        title: 'Chọn liên từ thích hợp',
        explanation: 'Liên từ thể hiện sự tương phản giữa hai mệnh đề độc lập là "but" (nhưng). Chọn đáp án C.',
        result: 'but'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "so" chỉ kết quả do dịch vội.'],
    reviewSuggestions: ['Đọc kỹ cả hai vế câu để hiểu rõ logic kết nối trước khi điền liên từ.']
  },
  {
    id: 'eng10-s27',
    questionId: 'eng10-q27',
    recognition: 'Lựa chọn liên từ ghép chỉ sự lựa chọn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích logic hai phương án hành động',
        explanation: 'Mệnh đề 1: "luyện hát ở nhà". Mệnh đề 2: "tham gia lớp nhạc chuyên nghiệp". Đây là hai lựa chọn thay thế cho nhau.',
        result: 'Sự lựa chọn'
      },
      {
        order: 2,
        title: 'Chọn liên từ',
        explanation: 'Liên từ dùng để chỉ sự lựa chọn, thay thế là "or" (hoặc). Chọn đáp án B.',
        result: 'or'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "and" do thói quen nối thông tin.'],
    reviewSuggestions: ['or dùng cho lựa chọn (A hoặc B), and dùng cho bổ sung thông tin song song (cả A và B).']
  },
  {
    id: 'eng10-s28',
    questionId: 'eng10-q28',
    recognition: 'Lựa chọn liên từ ghép chỉ kết quả.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mối quan hệ nguyên nhân - kết quả',
        explanation: 'Nguyên nhân: Giai điệu bài hát rất bắt tai (melody is catchy). Kết quả: Bài hát nhanh chóng thành hit trên mạng xã hội.',
        result: 'Nguyên nhân -> Kết quả'
      },
      {
        order: 2,
        title: 'Chọn liên từ đúng',
        explanation: 'Liên từ diễn tả kết quả của hành động đứng trước là "so" (vì vậy). Chọn đáp án A.',
        result: 'so'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "but" do không nhận diện được quan hệ nhân quả.'],
    reviewSuggestions: ['So dùng để mở đầu mệnh đề chỉ kết quả, đứng sau dấu phẩy.']
  },
  {
    id: 'eng10-s29',
    questionId: 'eng10-q29',
    recognition: 'Lựa chọn liên từ ghép chỉ sự bổ sung thông tin đồng thuận.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mối liên kết thông tin',
        explanation: 'Mệnh đề 1: "yêu nhạc cổ điển" (thông tin 1). Mệnh đề 2: "thích chơi violin" (thông tin 2 bổ trợ cùng hướng). Mối quan hệ bổ sung thông tin.',
        result: 'Bổ sung thông tin'
      },
      {
        order: 2,
        title: 'Chọn liên từ thích hợp',
        explanation: 'Liên từ chỉ sự bổ sung, đồng thuận là "and" (và). Chọn đáp án C.',
        result: 'and'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "but" hoặc "or" làm sai lệch ý nghĩa câu.'],
    reviewSuggestions: ['Sử dụng and khi nối các mệnh đề bổ trợ thông tin có ý nghĩa tích cực hoặc tiêu cực cùng hướng.']
  },
  {
    id: 'eng10-s30',
    questionId: 'eng10-q30',
    recognition: 'Động từ đi kèm sau promise.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của promise',
        explanation: 'Động từ "promise" (hứa) yêu cầu động từ nguyên mẫu có to đi sau.',
        result: 'promise + to-V'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Dạng to-V của "do" là "to do". Chọn đáp án B.',
        result: 'to do'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "doing" vì thói quen nhầm lẫn.'],
    reviewSuggestions: ['Promise to do something diễn tả lời hứa thực hiện hành động nào đó.']
  },

  // CHUYÊN ĐỀ 4: For a Better Community (s31 - s40)
  {
    id: 'eng10-s31',
    questionId: 'eng10-q31',
    recognition: 'Phối hợp thì Quá khứ đơn & Quá khứ tiếp diễn với liên từ While chỉ hành động đang diễn ra.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tính chất của hai hành động',
        explanation: 'Hành động "dạy học cho trẻ mồ côi" là hành động đang diễn ra kéo dài trong quá khứ (QKTD), hành động "trời bắt đầu mưa" là đột ngột xen vào (QKĐ).',
        result: 'Hành động đang diễn ra'
      },
      {
        order: 2,
        title: 'Chia động từ sau While',
        explanation: 'Sau "while" diễn tả hành động đang diễn ra chia QKTD. Chủ ngữ "the volunteers" số nhiều đi với "were": were teaching. Chọn đáp án A.',
        result: 'were teaching'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "was teaching" do nhầm "volunteers" là danh từ số ít.'],
    reviewSuggestions: ['Sau While thường là mệnh đề chia ở các thì tiếp diễn để nhấn mạnh quá trình diễn ra của hành động.']
  },
  {
    id: 'eng10-s32',
    questionId: 'eng10-q32',
    recognition: 'Phối hợp thì Quá khứ đơn & Quá khứ tiếp diễn với liên từ When chỉ hành động bị xen ngang.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định tính chất hành động',
        explanation: 'Hành động "chúng tôi đến" là xen ngang (QKĐ), hành động "lũ trẻ chơi trò chơi" là hành động đang diễn ra sẵn tại đó (QKTD).',
        result: 'Hành động đang diễn ra sẵn'
      },
      {
        order: 2,
        title: 'Chia động từ vế chính',
        explanation: 'Hành động đang diễn ra chia QKTD. Chủ ngữ "the children" số nhiều đi với "were playing". Chọn đáp án C.',
        result: 'were playing'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "played" ở quá khứ đơn do nhầm lẫn hai hành động xảy ra liên tiếp.'],
    reviewSuggestions: ['Đọc ngữ cảnh để phân biệt hành động xảy ra nối tiếp nhau (đều chia QKĐ) và hành động đang diễn ra bị cắt ngang (QKTD + QKĐ).']
  },
  {
    id: 'eng10-s33',
    questionId: 'eng10-q33',
    recognition: 'Hai hành động quá khứ song song xảy ra đồng thời với While.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định quan hệ giữa hai hành động',
        explanation: 'Hành động "tôi dọn dẹp bãi biển" và hành động "các bạn tôi gom chai nhựa" diễn ra song song cùng lúc trong quá khứ, nối với nhau bằng "while".',
        result: 'Hành động song song'
      },
      {
        order: 2,
        title: 'Chia động từ vế đầu',
        explanation: 'Cả hai vế song song đều chia QKTD. Chủ ngữ "I" đi với "was cleaning". Chọn đáp án A.',
        result: 'was cleaning'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "cleaned" ở quá khứ đơn.'],
    reviewSuggestions: ['Khi hai hành động diễn ra song song không ảnh hưởng cắt ngang nhau trong quá khứ, cả hai đều chia Quá khứ tiếp diễn.']
  },
  {
    id: 'eng10-s34',
    questionId: 'eng10-q34',
    recognition: 'Hành động xen ngang trong quá khứ chia Quá khứ đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hành động xen ngang',
        explanation: 'Hành động "đang khiêng thùng đồ quyên góp" là hành động kéo dài (QKTD), hành động "ngã xuống" là hành động bất ngờ cắt ngang (QKĐ).',
        result: 'Hành động xen ngang'
      },
      {
        order: 2,
        title: 'Chia động từ xen ngang',
        explanation: 'Hành động xen ngang chia QKĐ. Động từ bất quy tắc của "fall" ở cột 2 là "fell". Chọn đáp án B.',
        result: 'fell'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "was falling" do nhầm chia tiếp diễn cho cả hai vế.'],
    reviewSuggestions: ['Các hành động mang tính chất khoảnh khắc, diễn ra nhanh đột ngột như ngã, mất điện, vỡ... thường chia ở Quá khứ đơn khi cắt ngang hành động khác.']
  },
  {
    id: 'eng10-s35',
    questionId: 'eng10-q35',
    recognition: 'Hành động đang diễn ra bị hành động khác xen ngang (when + QKĐ).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vế hành động đang diễn ra',
        explanation: 'Vế sau "when the electricity went out" là hành động xen ngang ở QKĐ. Vế trước biểu thị hành động đang diễn ra: "họ đang thảo luận về dự án".',
        result: 'Hành động đang diễn ra'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Chia QKTD cho chủ ngữ số nhiều "They" là "were discussing". Chọn đáp án A.',
        result: 'were discussing'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "was discussing" do nhầm lẫn chia động từ tobe.'],
    reviewSuggestions: ['Động từ tobe ở quá khứ tiếp diễn chia theo chủ ngữ: I/He/She/It đi với was; We/You/They đi với were.']
  },
  {
    id: 'eng10-s36',
    questionId: 'eng10-q36',
    recognition: 'Hành động đang diễn ra tại thời điểm cụ thể trong quá khứ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thời điểm xem hành động',
        explanation: 'Ngữ cảnh "When I saw him yesterday" (Khi tôi nhìn thấy anh ấy ngày hôm qua) nhấn mạnh vào khoảnh khắc người nói bắt gặp hành động của đối phương đang diễn ra (đang quyên góp quần áo ấm).',
        result: 'Hành động đang diễn ra tại mốc thời gian quá khứ'
      },
      {
        order: 2,
        title: 'Lựa chọn phương án',
        explanation: 'Hành động đang diễn ra chia QKTD: "was donating" (chủ ngữ he số ít). Chọn đáp án B.',
        result: 'was donating'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "donated" ở quá khứ đơn.'],
    reviewSuggestions: ['Khi bắt gặp ai đó đang làm gì trong quá khứ, hành động được nhìn thấy chia ở Quá khứ tiếp diễn.']
  },
  {
    id: 'eng10-s37',
    questionId: 'eng10-q37',
    recognition: 'Nhận biết thì Quá khứ đơn qua trạng ngữ chỉ thời gian xác định last year.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm dấu hiệu thời gian',
        explanation: 'Có trạng từ chỉ thời gian quá khứ xác định rõ ràng "last year" (năm ngoái), do đó chia động từ ở thì Quá khứ đơn.',
        result: 'Quá khứ đơn'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Động từ "join" có quy tắc, thêm -ed thành "joined". Chọn đáp án A.',
        result: 'joined'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng Hiện tại hoàn thành "has joined" do không chú ý từ "last year".'],
    reviewSuggestions: ['Khi có các mốc thời gian đã kết thúc như yesterday, ago, last week/year, in + năm quá khứ, bắt buộc dùng Quá khứ đơn.']
  },
  {
    id: 'eng10-s38',
    questionId: 'eng10-q38',
    recognition: 'Hai hành động song song xảy ra cùng lúc trong quá khứ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mối quan hệ hành động',
        explanation: 'Từ "While" (Trong khi) ở đầu câu cho thấy giáo viên giảng bài và học sinh nghe bài là hai hành động song song diễn ra cùng lúc trong lớp học.',
        result: 'Hành động song song'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Vế trước chia QKTD ("was explaining") thì vế sau cũng chia QKTD để thể hiện tính song song. Chủ ngữ số nhiều "the students" đi với "were listening". Chọn đáp án B.',
        result: 'were listening'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "was listening" do nhầm chủ ngữ học sinh là số ít.'],
    reviewSuggestions: ['Cần chú ý cẩn thận danh từ tận cùng có "s" là danh từ số nhiều để chia đúng động từ tobe "were".']
  },
  {
    id: 'eng10-s39',
    questionId: 'eng10-q39',
    recognition: 'Hành động xen ngang bất ngờ (làm mất ví) chia Quá khứ đơn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định hành động xen ngang và đang diễn ra',
        explanation: 'Hành động "làm tình nguyện ở ngân hàng thực phẩm" là hành động kéo dài (QKTD), việc "làm mất ví" xảy ra đột ngột và kết thúc ngay (QKĐ).',
        result: 'Làm mất ví là hành động xen ngang'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Động từ "lose" chia QKĐ ở dạng bất quy tắc là "lost". Chọn đáp án A.',
        result: 'lost'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "was losing" (không hợp lý vì việc mất ví diễn ra tức thời).'],
    reviewSuggestions: ['Các động từ chỉ việc mất mát, rơi, phát hiện... thường chia ở thì đơn giản thay vì tiếp diễn.']
  },
  {
    id: 'eng10-s40',
    questionId: 'eng10-q40',
    recognition: 'Hành động đang diễn ra tại mốc thời gian quá khứ cụ thể.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định mốc thời gian trong câu hỏi',
        explanation: 'Câu hỏi có mốc thời gian rất cụ thể trong quá khứ: "at 8 p.m. yesterday" (lúc 8 giờ tối hôm qua).',
        result: 'Thời điểm cụ thể trong quá khứ'
      },
      {
        order: 2,
        title: 'Chia động từ nghi vấn',
        explanation: 'Hành động đang diễn ra tại thời điểm cụ thể trong quá khứ phải chia Quá khứ tiếp diễn. Dạng nghi vấn với chủ ngữ "you" là: "were you doing". Chọn đáp án B.',
        result: 'were you doing'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "did you do" do nhầm với quá khứ đơn giản chung chung.'],
    reviewSuggestions: ['Nếu chỉ nói "yesterday" thì dùng Quá khứ đơn, nhưng có giờ cụ thể "at 8 p.m. yesterday" thì phải dùng Quá khứ tiếp diễn.']
  },

  // CHUYÊN ĐỀ 5: Inventions (s41 - s50)
  {
    id: 'eng10-s41',
    questionId: 'eng10-q41',
    recognition: 'Nhận biết thì Hiện tại hoàn thành qua dấu hiệu since + mốc thời gian.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm dấu hiệu nhận biết thì',
        explanation: 'Cụm từ "since the start of the 21st century" (từ đầu thế kỷ 21) là dấu hiệu điển hình chỉ hành động kéo dài từ quá khứ đến hiện tại.',
        result: 'Dấu hiệu "since"'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Dùng thì Hiện tại hoàn thành. Chủ ngữ số nhiều "Scientists" đi kèm trợ động từ "have" và phân từ hai "invented": have invented. Chọn đáp án C.',
        result: 'have invented'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "invented" ở quá khứ đơn vì bỏ qua từ "since".'],
    reviewSuggestions: ['Since + mốc thời gian và For + khoảng thời gian là hai dấu hiệu quan trọng nhất của thì Hiện tại hoàn thành.']
  },
  {
    id: 'eng10-s42',
    questionId: 'eng10-q42',
    recognition: 'Nhận biết thì Hiện tại hoàn thành qua dấu hiệu for + khoảng thời gian.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm dấu hiệu thời gian',
        explanation: 'Cụm từ "for three years" (trong vòng 3 năm) diễn tả hành động sử dụng điện thoại kéo dài từ quá khứ đến hiện tại.',
        result: 'Dấu hiệu "for"'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Chia Hiện tại hoàn thành cho chủ ngữ "I": have used. Chọn đáp án B.',
        result: 'have used'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "use" ở hiện tại hoặc "used" ở quá khứ đơn.'],
    reviewSuggestions: ['Học sinh thường quên chia Hiện tại hoàn thành khi gặp "for + khoảng thời gian" mà chỉ chia theo thói quen Hiện tại đơn.']
  },
  {
    id: 'eng10-s43',
    questionId: 'eng10-q43',
    recognition: 'Động từ đi kèm sau avoid.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của avoid',
        explanation: 'Động từ "avoid" (tránh, phòng ngừa) bắt buộc theo sau là một danh động từ (V-ing).',
        result: 'avoid + V-ing'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Dạng V-ing của động từ "spend" là "spending". Chọn đáp án C.',
        result: 'spending'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "to spend" do dịch nghĩa "tránh để tiêu tốn thời gian".'],
    reviewSuggestions: ['Ghi nhớ một số động từ phổ biến luôn đi với V-ing: avoid, enjoy, mind, dislike, finish, suggest.']
  },
  {
    id: 'eng10-s44',
    questionId: 'eng10-q44',
    recognition: 'Danh động từ đứng sau giới từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ loại đứng trước chỗ trống',
        explanation: 'Trước khoảng trống là giới từ "for". Theo quy tắc ngữ pháp, sau tất cả các giới từ (trừ to) động từ phải chia ở dạng V-ing.',
        result: 'Giới từ + V-ing'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Dạng V-ing của "search" là "searching". Chọn đáp án B.',
        result: 'searching'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Dùng động từ nguyên mẫu "search" sau giới từ.'],
    reviewSuggestions: ['Smartphone/Laptop is used for + V-ing (dùng cho mục đích của vật).']
  },
  {
    id: 'eng10-s45',
    questionId: 'eng10-q45',
    recognition: 'Câu hỏi kinh nghiệm trong quá khứ kéo dài đến hiện tại dùng Hiện tại hoàn thành.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích dấu hiệu nhận biết trải nghiệm',
        explanation: 'Từ "before" ở cuối câu hỏi và từ chỉ tần suất trải nghiệm "ever" chỉ việc hỏi thăm kinh nghiệm đã từng làm gì đó hay chưa.',
        result: 'Hỏi về trải nghiệm'
      },
      {
        order: 2,
        title: 'Lựa chọn phương án đúng',
        explanation: 'Sử dụng cấu trúc nghi vấn của thì Hiện tại hoàn thành: $Have/Has + S + ever + V_{3/ed} \\Rightarrow$ Have you ever tried. Chọn đáp án C.',
        result: 'Have you ever tried'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "Did you ever try" ở quá khứ đơn.'],
    reviewSuggestions: ['Khi hỏi về việc đã từng làm gì "trước đây" (before) hoặc "bao giờ chưa" (ever), luôn dùng thì Hiện tại hoàn thành.']
  },
  {
    id: 'eng10-s46',
    questionId: 'eng10-q46',
    recognition: 'Động từ đi kèm sau enjoy.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của enjoy',
        explanation: 'Động từ "enjoy" (thích thú, tận hưởng) yêu cầu theo sau là danh động từ V-ing.',
        result: 'enjoy + V-ing'
      },
      {
        order: 2,
        title: 'Chọn dạng đúng',
        explanation: 'Dạng V-ing của "study" là "studying". Chọn đáp án C.',
        result: 'studying'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "to study" do thói quen dịch nghĩa thích để học.'],
    reviewSuggestions: ['Các động từ chỉ sở thích như enjoy, dislike, hate, adore đều theo sau bởi V-ing.']
  },
  {
    id: 'eng10-s47',
    questionId: 'eng10-q47',
    recognition: 'Nhận biết thì Hiện tại hoàn thành qua từ already.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định trạng từ nhận biết',
        explanation: 'Trong câu xuất hiện trạng từ "already" (đã... rồi) chỉ hành động đã hoàn thành trước thời điểm nói, báo hiệu thì Hiện tại hoàn thành.',
        result: 'Trạng từ "already"'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Chủ ngữ "She" số ít, đi với "has downloaded". Chọn đáp án A.',
        result: 'has downloaded'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "downloaded" ở quá khứ đơn.'],
    reviewSuggestions: ['Trạng từ already thường đứng giữa trợ động từ has/have và động từ phân từ hai V3.']
  },
  {
    id: 'eng10-s48',
    questionId: 'eng10-q48',
    recognition: 'Động từ đi kèm sau recommend.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định cấu trúc của recommend',
        explanation: 'Động từ "recommend" (khuyên nghị, giới thiệu) đi kèm trực tiếp với một động từ dạng V-ing.',
        result: 'recommend + V-ing'
      },
      {
        order: 2,
        title: 'Lựa chọn phương án',
        explanation: 'Dạng V-ing của "buy" là "buying". Chọn đáp án C.',
        result: 'buying'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng "to buy" do nhầm lẫn cấu trúc khuyên bảo thông thường.'],
    reviewSuggestions: ['Chú ý cấu trúc đặc biệt: recommend doing something (khuyên làm việc gì).']
  },
  {
    id: 'eng10-s49',
    questionId: 'eng10-q49',
    recognition: 'Danh động từ chỉ mục đích đứng sau giới từ for.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích chức năng của giới từ',
        explanation: 'Giới từ "for" kết hợp với động từ V-ing ở vế sau để chỉ mục đích, chức năng hoạt động của đồ vật (robotic vacuum - máy hút bụi robot).',
        result: 'for + V-ing chỉ mục đích sử dụng'
      },
      {
        order: 2,
        title: 'Chia động từ',
        explanation: 'Dạng V-ing của "sweep" là "sweeping". Chọn đáp án B.',
        result: 'sweeping'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Dùng "to sweep" sau giới từ "for".'],
    reviewSuggestions: ['Không dùng to-V ngay sau giới từ. Sau giới từ luôn là danh động từ V-ing.']
  },
  {
    id: 'eng10-s50',
    questionId: 'eng10-q50',
    recognition: 'Nhận biết thể phủ định thì Hiện tại hoàn thành qua từ yet.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm dấu hiệu thời gian',
        explanation: 'Trạng từ "yet" (vẫn chưa) đứng cuối câu là dấu hiệu đặc trưng của câu phủ định hoặc nghi vấn thì Hiện tại hoàn thành.',
        result: 'Dấu hiệu "yet" ở câu phủ định'
      },
      {
        order: 2,
        title: 'Chia động từ phù hợp',
        explanation: 'Thể phủ định Hiện tại hoàn thành của chủ ngữ "He" là "has not finished". Chọn đáp án A.',
        result: 'has not finished'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "did not finish" ở quá khứ đơn.'],
    reviewSuggestions: ['Từ yet xuất hiện cuối câu phủ định để diễn tả hành động mong đợi vẫn chưa được hoàn thành cho tới nay.']
  },
  // GIẢI THÍCH CHI TIẾT CHO CÁC CÂU HỎI TỪ VỰNG (s51 - s75)
  // Dạng 9: Từ vựng trọng tâm: Family Life (s51 - s55)
  {
    id: 'eng10-s51',
    questionId: 'eng10-q51',
    recognition: 'Nhận biết nghĩa của từ trụ cột gia đình breadwinner.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ cảnh câu',
        explanation: 'Câu nói về vai trò kiếm tiền trong gia đình: "người chồng không còn là __________ duy nhất, vì người vợ cũng đi làm".',
        result: 'Từ cần tìm liên quan đến người kiếm tiền'
      },
      {
        order: 2,
        title: 'Chọn từ vựng đúng nghĩa',
        explanation: 'Từ "breadwinner" có nghĩa là người trụ cột kiếm tiền chính để nuôi gia đình. Chọn đáp án B.',
        result: 'breadwinner'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "homemaker" (người nội trợ - ngược nghĩa).'],
    reviewSuggestions: ['Ghi nhớ cặp từ trái nghĩa/bổ trợ: breadwinner (kiếm tiền) và homemaker (làm việc nhà).']
  },
  {
    id: 'eng10-s52',
    questionId: 'eng10-q52',
    recognition: 'Nhận biết nghĩa của từ người nội trợ homemaker.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ cảnh câu',
        explanation: 'Câu giới thiệu: "Mẹ tôi là người phụ nữ của gia đình (housewife) và là một __________ tuyệt vời; bà chăm sóc nhà cửa rất chu đáo".',
        result: 'Từ chỉ người làm việc chăm sóc gia đình'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Người làm công việc nội trợ, chăm sóc gia đình là "homemaker". Chọn đáp án B.',
        result: 'homemaker'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "breadwinner" do nhầm vai trò.'],
    reviewSuggestions: ['Housewife đồng nghĩa với homemaker.']
  },
  {
    id: 'eng10-s53',
    questionId: 'eng10-q53',
    recognition: 'Cụm từ cố định household chores.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích kết hợp từ',
        explanation: 'Câu nói về việc chia sẻ công việc: "Chia sẻ __________ đều giữa các thành viên giúp tăng kết nối gia đình".',
        result: 'Chia sẻ công việc nhà'
      },
      {
        order: 2,
        title: 'Chọn cụm từ cố định',
        explanation: 'Cụm từ "household chores" nghĩa là công việc nhà. Chọn đáp án B.',
        result: 'household chores'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "groceries" (đồ tạp hóa) không phù hợp động từ "splitting".'],
    reviewSuggestions: ['Học thuộc cụm collocations: do/divide/split household chores.']
  },
  {
    id: 'eng10-s54',
    questionId: 'eng10-q54',
    recognition: 'Cụm từ cố định heavy lifting.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ví dụ trong câu',
        explanation: 'Câu đưa ra các ví dụ: "bê vác hộp nặng, sửa mái nhà". Đây là các công việc nặng nhọc cơ bắp.',
        result: 'Công việc nặng nhọc'
      },
      {
        order: 2,
        title: 'Chọn từ đúng',
        explanation: 'Cụm từ chỉ công việc nặng nhọc là "heavy lifting". Chọn đáp án A.',
        result: 'heavy lifting'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "laundry" (giặt là - không phải việc nặng).'],
    reviewSuggestions: ['Do the heavy lifting là cụm từ chỉ việc khuân vác, làm việc nặng.']
  },
  {
    id: 'eng10-s55',
    questionId: 'eng10-q55',
    recognition: 'Nhận biết nghĩa của từ thực phẩm, đồ tạp hóa groceries.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích hành động đi chợ',
        explanation: 'Câu nói: "Mỗi sáng thứ Bảy, mẹ tôi đi chợ để mua __________ cho cả tuần".',
        result: 'Đồ đi chợ mua ăn uống hàng ngày'
      },
      {
        order: 2,
        title: 'Chọn từ vựng',
        explanation: 'Đồ ăn và nhu yếu phẩm mua ở chợ/siêu thị là "groceries". Chọn đáp án B.',
        result: 'groceries'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "devices" (thiết bị - không mua ở chợ cho cả tuần).'],
    reviewSuggestions: ['Buy groceries nghĩa là mua thực phẩm và đồ dùng gia đình hàng ngày.']
  },
  // Dạng 10: Từ vựng trọng tâm: Humans and the Environment (s56 - s60)
  {
    id: 'eng10-s56',
    questionId: 'eng10-q56',
    recognition: 'Tính từ eco-friendly thân thiện với môi trường.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mục đích của việc mua sắm',
        explanation: 'Câu nói: "Chúng tôi cố gắng mua bao bì __________ hơn để giảm thiểu rác thải trong khu dân cư".',
        result: 'Bao bì tốt cho môi trường'
      },
      {
        order: 2,
        title: 'Chọn tính từ bổ nghĩa',
        explanation: 'Tính từ chỉ sự thân thiện, an toàn với môi trường là "eco-friendly". Chọn đáp án B.',
        result: 'eco-friendly'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "single-use" (dùng một lần - làm tăng rác thải, ngược nghĩa).'],
    reviewSuggestions: ['Eco-friendly là tính từ ghép được dùng rất nhiều trong chủ đề môi trường của lớp 10.']
  },
  {
    id: 'eng10-s57',
    questionId: 'eng10-q57',
    recognition: 'Cụm từ carbon footprint.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ý nghĩa hành động',
        explanation: 'Đi xe đạp thay vì đi xe máy giúp giảm lượng khí thải CO2 ra môi trường.',
        result: 'Giảm khí thải'
      },
      {
        order: 2,
        title: 'Lựa chọn cụm từ',
        explanation: 'Cụm từ "carbon footprint" dùng để chỉ lượng khí nhà kính phát thải do hoạt động của con người. Chọn đáp án B.',
        result: 'carbon footprint'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "energy" hoặc "waste footprint" không phải cụm từ chuẩn.'],
    reviewSuggestions: ['Học thuộc cụm từ carbon footprint (dấu chân carbon) để làm tốt các bài đọc hiểu môi trường.']
  },
  {
    id: 'eng10-s58',
    questionId: 'eng10-q58',
    recognition: 'Cụm từ green living lối sống xanh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mục tiêu hành động',
        explanation: 'Áp dụng phong cách sống bảo vệ tài nguyên thiên nhiên và động vật hoang dã là lối sống xanh.',
        result: 'Lối sống thân thiện môi trường'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Lối sống xanh được gọi là "green living". Chọn đáp án B.',
        result: 'green living'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "robotic" hoặc "single-use".'],
    reviewSuggestions: ['Green living là danh từ chỉ phong cách sống thân thiện với thiên nhiên.']
  },
  {
    id: 'eng10-s59',
    questionId: 'eng10-q59',
    recognition: 'Tính từ single-use dùng một lần.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xem xét các ví dụ',
        explanation: 'Các ví dụ được đưa ra: "cốc nhựa và ống hút nhựa" (những thứ dùng xong rồi vứt bỏ ngay).',
        result: 'Đồ dùng một lần rồi vứt'
      },
      {
        order: 2,
        title: 'Chọn tính từ đúng',
        explanation: 'Tính từ chỉ đồ dùng một lần là "single-use". Chọn đáp án C.',
        result: 'single-use'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "reusable" (tái sử dụng - ngược nghĩa).'],
    reviewSuggestions: ['Single-use plastics là tác nhân chính gây ra ô nhiễm rác thải nhựa hiện nay.']
  },
  {
    id: 'eng10-s60',
    questionId: 'eng10-q60',
    recognition: 'Động từ pollute làm ô nhiễm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích tác hại của hóa chất',
        explanation: 'Hóa chất độc hại xả ra hồ nước làm chết cá và cây cối, thể hiện hành động làm ô nhiễm.',
        result: 'Hành động gây hại cho nước hồ'
      },
      {
        order: 2,
        title: 'Chọn động từ thích hợp',
        explanation: 'Động từ làm ô nhiễm là "pollute". Chọn đáp án B.',
        result: 'pollute'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "protect" (bảo vệ - ngược nghĩa).'],
    reviewSuggestions: ['Nắm chắc các dạng của từ: pollute (v), pollution (n), polluted (adj).']
  },
  // Dạng 11: Từ vựng trọng tâm: Music (s61 - s65)
  {
    id: 'eng10-s61',
    questionId: 'eng10-q61',
    recognition: 'Nhận biết nghĩa của từ hiện tượng phenomenon.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ cảnh',
        explanation: 'Câu nói về ca sĩ trẻ nổi tiếng toàn cầu chỉ sau một đêm khi video lan truyền mạnh mẽ: "trở thành một __________ nhạc pop".',
        result: 'Một sự kiện/người nổi lên nhanh chóng'
      },
      {
        order: 2,
        title: 'Lựa chọn từ đúng',
        explanation: 'Từ "phenomenon" dùng để chỉ một người hoặc sự việc nổi bật kỳ lạ, một hiện tượng. Chọn đáp án B.',
        result: 'phenomenon'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "audience" (khán giả).'],
    reviewSuggestions: ['Music phenomenon là cụm từ mô tả hiện tượng âm nhạc nổi tiếng cực nhanh.']
  },
  {
    id: 'eng10-s62',
    questionId: 'eng10-q62',
    recognition: 'Danh từ instrument nhạc cụ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích thể loại của guitar',
        explanation: 'Guitar là một dụng cụ để chơi nhạc, thuộc nhóm nhạc cụ.',
        result: 'Dụng cụ chơi nhạc'
      },
      {
        order: 2,
        title: 'Chọn từ vựng',
        explanation: 'Từ "instrument" (trong cụm musical instrument) nghĩa là nhạc cụ. Chọn đáp án C.',
        result: 'instrument'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "device" (thiết bị công nghệ - không dùng cho guitar gỗ truyền thống).'],
    reviewSuggestions: ['Musical instrument là cụm từ chỉ các loại nhạc cụ nói chung.']
  },
  {
    id: 'eng10-s63',
    questionId: 'eng10-q63',
    recognition: 'Danh từ chỉ nhóm người xem audience.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích hành động đứng dậy vỗ tay',
        explanation: 'Hành động vỗ tay khen ngợi buổi biểu diễn của ca sĩ thuộc về tập thể người xem ở khán đài.',
        result: 'Khán giả xem concert'
      },
      {
        order: 2,
        title: 'Lựa chọn từ',
        explanation: 'Khán giả xem hoặc nghe nhạc trực tiếp là "audience". Chọn đáp án A.',
        result: 'audience'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "competitors" (người thi đấu - đây là buổi biểu diễn, không phải cuộc thi).'],
    reviewSuggestions: ['Phân biệt: audience (khán giả phòng trà, concert), spectator (khán giả xem thể thao ngoài sân vận động).']
  },
  {
    id: 'eng10-s64',
    questionId: 'eng10-q64',
    recognition: 'Tính từ talented tài năng.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích thành tích nhân vật',
        explanation: 'Nhân vật chơi piano giỏi và thắng cuộc thi quốc gia khi mới 6 tuổi, thể hiện là một người rất có tài năng.',
        result: 'Có tài năng thiên bẩm'
      },
      {
        order: 2,
        title: 'Chọn tính từ đúng',
        explanation: 'Tính từ chỉ người có tài năng là "talented". Chọn đáp án A.',
        result: 'talented'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "robotic" hoặc "remote".'],
    reviewSuggestions: ['Talented pianist/singer là cách diễn đạt phổ biến để ca ngợi tài năng âm nhạc.']
  },
  {
    id: 'eng10-s65',
    questionId: 'eng10-q65',
    recognition: 'Danh từ contest cuộc thi.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mục đích của việc đăng ký',
        explanation: 'Cô ấy đăng ký tham gia một sự kiện âm nhạc địa phương để trình diễn tài năng ca hát và tranh tài.',
        result: 'Cuộc tranh tài ca hát'
      },
      {
        order: 2,
        title: 'Chọn từ vựng',
        explanation: 'Cuộc thi, tranh tài là "contest". Chọn đáp án C.',
        result: 'contest'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "audience" (khán giả).'],
    reviewSuggestions: ['Singing contest nghĩa là cuộc thi ca hát.']
  },
  // Dạng 12: Từ vựng trọng tâm: For a Better Community (s66 - s70)
  {
    id: 'eng10-s66',
    questionId: 'eng10-q66',
    recognition: 'Danh từ volunteer tình nguyện viên.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích công việc dạy học miễn phí',
        explanation: 'Cô ấy dạy tiếng Anh cho trẻ em nghèo tại trung tâm cộng đồng mà không nhận lương, đóng vai trò người làm từ thiện tự nguyện.',
        result: 'Người làm việc tự nguyện không lương'
      },
      {
        order: 2,
        title: 'Lựa chọn từ',
        explanation: 'Tình nguyện viên là "volunteer". Chọn đáp án B.',
        result: 'volunteer'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "homemaker" (người nội trợ).'],
    reviewSuggestions: ['Volunteer vừa là danh từ (tình nguyện viên) vừa là động từ (làm tình nguyện).']
  },
  {
    id: 'eng10-s67',
    questionId: 'eng10-q67',
    recognition: 'Tính từ non-profit phi lợi nhuận.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích nguyên tắc hoạt động',
        explanation: 'Câu giải thích: "Chúng tôi không làm việc vì tiền mà vì cộng đồng". Đây là tổ chức không tìm kiếm lợi nhuận tài chính.',
        result: 'Tổ chức xã hội phi lợi nhuận'
      },
      {
        order: 2,
        title: 'Chọn tính từ đúng',
        explanation: 'Tính từ phi lợi nhuận là "non-profit". Chọn đáp án A.',
        result: 'non-profit'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "commercial" (mang tính thương mại - ngược nghĩa).'],
    reviewSuggestions: ['Non-profit organization (viết tắt là NPO) là cụm danh từ xuất hiện nhiều trong chủ đề cộng đồng.']
  },
  {
    id: 'eng10-s68',
    questionId: 'eng10-q68',
    recognition: 'Tính từ remote hẻo lánh, xa xôi.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định đặc điểm địa lý',
        explanation: 'Các tình nguyện viên phải đi đến "những ngôi làng __________ trên núi để xây cầu". Đây là các vùng sâu vùng xa khó đi lại.',
        result: 'Vùng sâu vùng xa'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Tính từ chỉ nơi xa xôi, hẻo lánh là "remote". Chọn đáp án A.',
        result: 'remote'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "near" (gần) hoặc "urban" (đô thị - không khớp ngữ cảnh xây cầu trên núi).'],
    reviewSuggestions: ['Remote areas/villages dùng để chỉ những khu vực hẻo lánh gặp khó khăn về hạ tầng giao thông.']
  },
  {
    id: 'eng10-s69',
    questionId: 'eng10-q69',
    recognition: 'Động từ donate quyên góp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích mục đích hành động',
        explanation: 'Người dân trao tiền và thức ăn để hỗ trợ những người gặp thiên tai (lũ lụt), thể hiện hành động ủng hộ từ thiện.',
        result: 'Ủng hộ, quyên góp'
      },
      {
        order: 2,
        title: 'Chọn động từ',
        explanation: 'Động từ quyên góp là "donate". Chọn đáp án B.',
        result: 'donate'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "polluted" (gây ô nhiễm - không hợp nghĩa).'],
    reviewSuggestions: ['Donate sth to sb/sth nghĩa là quyên góp cái gì cho ai/tổ chức nào.']
  },
  {
    id: 'eng10-s70',
    questionId: 'eng10-q70',
    recognition: 'Danh từ charity tổ chức từ thiện.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích đối tượng nhận tiền',
        explanation: 'Tiền quyên góp được gửi tới một tổ chức giúp đỡ trẻ em mồ côi.',
        result: 'Tổ chức hỗ trợ xã hội'
      },
      {
        order: 2,
        title: 'Chọn từ vựng',
        explanation: 'Tổ chức từ thiện là "charity". Chọn đáp án B.',
        result: 'charity'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "device" (thiết bị) hoặc "instrument" (nhạc cụ).'],
    reviewSuggestions: ['Charity là danh từ không đếm được (lòng từ thiện) hoặc danh từ đếm được (tổ chức từ thiện).']
  },
  // Dạng 13: Từ vựng trọng tâm: Inventions (s71 - s75)
  {
    id: 'eng10-s71',
    questionId: 'eng10-q71',
    recognition: 'Danh từ invention phát minh.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đánh giá tính chất của động cơ hơi nước',
        explanation: 'Động cơ hơi nước (steam engine) do con người sáng chế ra lần đầu tiên, không có sẵn trong tự nhiên.',
        result: 'Một sáng chế mới của con người'
      },
      {
        order: 2,
        title: 'Chọn từ đúng nghĩa',
        explanation: 'Phát minh, sáng chế của con người là "invention". Chọn đáp án C.',
        result: 'invention'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "volunteer" hoặc "charity".'],
    reviewSuggestions: ['Phát minh (invention) là việc tạo ra một vật hoàn toàn mới chưa từng có trước đây.']
  },
  {
    id: 'eng10-s72',
    questionId: 'eng10-q72',
    recognition: 'Danh từ device thiết bị.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định bản chất của điện thoại thông minh',
        explanation: 'Điện thoại thông minh là một loại máy móc, công cụ kỹ thuật số gọn nhẹ hỗ trợ con người.',
        result: 'Thiết bị kỹ thuật số'
      },
      {
        order: 2,
        title: 'Chọn từ thích hợp',
        explanation: 'Thiết bị là "device" (digital/smart device). Chọn đáp án B.',
        result: 'device'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "instrument" (nhạc cụ - chỉ dùng cho âm nhạc).'],
    reviewSuggestions: ['Smart device/digital device dùng để chỉ các thiết bị thông minh nhỏ gọn như tablet, smartphone.']
  },
  {
    id: 'eng10-s73',
    questionId: 'eng10-q73',
    recognition: 'Danh từ processor bộ vi xử lý.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tìm bộ phận giúp máy tính chạy mượt',
        explanation: 'Bộ phận đầu não xử lý thông tin giúp phần cứng máy tính hoạt động trơn tru là bộ vi xử lý.',
        result: 'Bộ xử lý của máy tính'
      },
      {
        order: 2,
        title: 'Chọn từ vựng',
        explanation: 'Bộ vi xử lý là "processor". Chọn đáp án B.',
        result: 'processor'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn "homemaker" hoặc "charity".'],
    reviewSuggestions: ['Processor là linh kiện bán dẫn quan trọng quyết định tốc độ của máy tính, điện thoại.']
  },
  {
    id: 'eng10-s74',
    questionId: 'eng10-q74',
    recognition: 'Tính từ robotic tự động hóa, thuộc về robot.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích thuộc tính tự động cắt cỏ',
        explanation: 'Máy cắt cỏ có khả năng tự động cắt cỏ trong vườn mà không cần con người đẩy trực tiếp, thể hiện tính chất tự động như robot.',
        result: 'Tự động hóa dạng robot'
      },
      {
        order: 2,
        title: 'Chọn tính từ thích hợp',
        explanation: 'Thuộc về robot, tự động hóa là "robotic" (robotic vacuum, robotic lawn mower). Chọn đáp án A.',
        result: 'robotic'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn "heavy" (nặng nề - không nhấn mạnh tính tự động).'],
    reviewSuggestions: ['Robotic là tính từ bổ nghĩa cho các thiết bị gia dụng tự động thông minh.']
  },
  {
    id: 'eng10-s75',
    questionId: 'eng10-q75',
    recognition: 'Cụm từ viết tắt AI (Artificial Intelligence).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích chức năng thông minh của công cụ tìm kiếm',
        explanation: 'Các công cụ tìm kiếm dùng trí tuệ nhân tạo để hiểu rõ hơn ngôn ngữ tự nhiên và ý định tìm kiếm của con người.',
        result: 'Trí tuệ nhân tạo'
      },
      {
        order: 2,
        title: 'Lựa chọn từ viết tắt',
        explanation: 'Trí tuệ nhân tạo viết tắt là "AI" (Artificial Intelligence). Chọn đáp án C.',
        result: 'AI'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn "devices" không phù hợp động từ "use" ở số ít sau đó (use AI).'],
    reviewSuggestions: ['AI là công nghệ cốt lõi đứng sau hầu hết các phát minh hiện đại ở Unit 5.']
  },
  // GIẢI THÍCH CHI TIẾT CHO CÁC CÂU HỎI NGỮ ÂM & TRỌNG ÂM (s76 - s90)
  // Dạng 14: Phát âm cụm phụ âm /br/, /kr/, /tr/ (s76 - s78)
  {
    id: 'eng10-s76',
    questionId: 'eng10-q76',
    recognition: 'Phát âm cụm phụ âm ghép /br/ và /kr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm các từ lựa chọn',
        explanation: 'Đọc to từng từ:\n- *breadwinner* /ˈbredwɪnə(r)/ -> bắt đầu bằng cụm /br/\n- *break* /breɪk/ -> bắt đầu bằng cụm /br/\n- *create* /kriˈeɪt/ -> bắt đầu bằng cụm /kr/\n- *brown* /braʊn/ -> bắt đầu bằng cụm /br/',
        result: 'Phân loại các cụm phụ âm đầu'
      },
      {
        order: 2,
        title: 'Chọn từ khác biệt',
        explanation: 'Từ "create" bắt đầu bằng âm /kr/, các từ còn lại bắt đầu bằng âm /br/. Chọn đáp án C.',
        result: 'create'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Không nghe kỹ âm bật hơi /k/ trong cụm /kr/.'],
    reviewSuggestions: ['Hãy luyện phát âm tròn môi âm /r/ sau các phụ âm bật /b/ và /k/.']
  },
  {
    id: 'eng10-s77',
    questionId: 'eng10-q77',
    recognition: 'Phát âm cụm phụ âm ghép /tr/ và /br/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích âm đầu của các từ',
        explanation: 'Đọc to từng từ:\n- *tree* /triː/ -> bắt đầu bằng cụm /tr/\n- *track* /træk/ -> bắt đầu bằng cụm /tr/\n- *brain* /breɪn/ -> bắt đầu bằng cụm /br/\n- *travel* /ˈtrævl/ -> bắt đầu bằng cụm /tr/',
        result: 'Nhận diện âm /tr/ và /br/'
      },
      {
        order: 2,
        title: 'Lọc ra đáp án đúng',
        explanation: 'Từ "brain" bắt đầu bằng âm /br/, các từ còn lại đều bắt đầu bằng âm /tr/. Chọn đáp án C.',
        result: 'brain'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ "tree" thành "tờ-ri" (sai cách phát âm cụm âm ghép).'],
    reviewSuggestions: ['Cụm /tr/ phát âm bằng cách đặt lưỡi ở vị trí âm /t/ rồi uốn nhanh sang âm /r/.']
  },
  {
    id: 'eng10-s78',
    questionId: 'eng10-q78',
    recognition: 'Phát âm cụm phụ âm ghép /kr/ và /tr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc và đối chiếu âm đầu',
        explanation: 'Đọc to các từ:\n- *crash* /kræʃ/ -> bắt đầu bằng cụm /kr/\n- *truth* /truːθ/ -> bắt đầu bằng cụm /tr/\n- *crowd* /kraʊd/ -> bắt đầu bằng cụm /kr/\n- *critique* /krɪˈtiːk/ -> bắt đầu bằng cụm /kr/',
        result: 'Xác định phụ âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "truth" bắt đầu bằng âm /tr/, các từ còn lại bắt đầu bằng âm /kr/. Chọn đáp án B.',
        result: 'truth'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn từ critique do trọng âm rơi vào âm tiết thứ hai, nhưng phụ âm ghép đầu vẫn là /kr/.'],
    reviewSuggestions: ['Hãy tập thói quen phát âm liền mạch hai phụ âm đầu của từ ghép.']
  },
  // Dạng 15: Phát âm cụm phụ âm /kl/, /pl/, /gr/, /pr/ (s79 - s81)
  {
    id: 'eng10-s79',
    questionId: 'eng10-q79',
    recognition: 'Phát âm cụm phụ âm /kl/ và /pl/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định âm đầu từng từ',
        explanation: 'Đọc to:\n- *clean* /kliːn/ -> phụ âm đầu /kl/\n- *plastic* /ˈplæstɪk/ -> phụ âm đầu /pl/\n- *please* /pliːz/ -> phụ âm đầu /pl/\n- *plot* /plɒt/ -> phụ âm đầu /pl/',
        result: 'Phân nhóm cụm phụ âm đi với âm /l/'
      },
      {
        order: 2,
        title: 'Xác định từ khác biệt',
        explanation: 'Từ "clean" có âm /kl/, các từ còn lại có âm /pl/. Chọn đáp án A.',
        result: 'clean'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc nhanh lướt qua âm /l/ khiến không phân biệt rõ /kl/ và /pl/.'],
    reviewSuggestions: ['Khi phát âm âm /l/ trong cụm, đầu lưỡi phải chạm vào phần lợi phía sau răng cửa trên.']
  },
  {
    id: 'eng10-s80',
    questionId: 'eng10-q80',
    recognition: 'Phát âm cụm phụ âm /gr/ và /pr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm các từ',
        explanation: 'Đọc to:\n- *green* /ɡriːn/ -> bắt đầu bằng âm /gr/\n- *group* /ɡruːp/ -> bắt đầu bằng âm /gr/\n- *present* /ˈpreznt/ -> bắt đầu bằng âm /pr/\n- *grow* /ɡrəʊ/ -> bắt đầu bằng âm /gr/',
        result: 'Phân nhóm cụm phụ âm đi với âm /r/'
      },
      {
        order: 2,
        title: 'Tìm ra đáp án',
        explanation: 'Từ "present" bắt đầu bằng âm /pr/, các từ còn lại bắt đầu bằng âm /gr/. Chọn đáp án C.',
        result: 'present'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Không phân biệt được âm hữu thanh /g/ và vô thanh /p/ khi kết hợp với /r/.'],
    reviewSuggestions: ['Âm /g/ là âm rung dây thanh quản (hữu thanh), còn /p/ là âm bật hơi bằng môi (vô thanh).']
  },
  {
    id: 'eng10-s81',
    questionId: 'eng10-q81',
    recognition: 'Phát âm cụm phụ âm /kl/ và /gr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xem xét phát âm phần gạch chân',
        explanation: 'Đọc to:\n- *club* /klʌb/ -> phụ âm đầu /kl/\n- *climate* /ˈklaɪmət/ -> phụ âm đầu /kl/\n- *clear* /klɪə(r)/ -> phụ âm đầu /kl/\n- *grass* /ɡrɑːs/ -> phụ âm đầu /gr/',
        result: 'Phân tích âm đầu'
      },
      {
        order: 2,
        title: 'Lựa chọn đáp án',
        explanation: 'Từ "grass" bắt đầu bằng âm /gr/, các từ còn lại bắt đầu bằng âm /kl/. Chọn đáp án D.',
        result: 'grass'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc nhầm âm /kl/ thành /kr/.'],
    reviewSuggestions: ['Chú ý sự khác biệt rõ rệt giữa âm đi kèm /l/ (lưỡi thẳng lên lợi trên) và âm đi kèm /r/ (lưỡi cong vào trong).']
  },
  // Dạng 16: Trọng âm của từ 2 âm tiết (s82 - s84)
  {
    id: 'eng10-s82',
    questionId: 'eng10-q82',
    recognition: 'Trọng âm từ có 2 âm tiết (Unit 3).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vị trí trọng âm',
        explanation: 'Phân tích vị trí trọng âm chính:\n- *perform* /pəˈfɔːm/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *singer* /ˈsɪŋə(r)/ -> Danh từ 2 âm tiết, nhấn âm 1.\n- *concert* /ˈkɒnsət/ -> Danh từ 2 âm tiết, nhấn âm 1.\n- *music* /ˈmjuːzɪk/ -> Danh từ 2 âm tiết, nhấn âm 1.',
        result: 'Vị trí trọng âm từng từ'
      },
      {
        order: 2,
        title: 'Lọc ra đáp án khác biệt',
        explanation: 'Từ "perform" nhấn âm 2, ba từ còn lại nhấn âm 1. Chọn đáp án A.',
        result: 'perform'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc sai trọng âm của từ "concert" thành âm 2 (conSERT là sai).'],
    reviewSuggestions: ['Học thuộc quy tắc chung: Danh từ/tính từ 2 âm tiết nhấn âm 1; Động từ 2 âm tiết nhấn âm 2.']
  },
  {
    id: 'eng10-s83',
    questionId: 'eng10-q83',
    recognition: 'Trọng âm từ có 2 âm tiết - trường hợp ngoại lệ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vị trí trọng âm',
        explanation: 'Phân tích các từ:\n- *decide* /dɪˈsaɪd/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *attract* /əˈtrækt/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *receive* /rɪˈsiːv/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *enter* /ˈentə(r)/ -> Động từ 2 âm tiết nhưng âm thứ hai /ə/ là nguyên âm ngắn, nên trọng âm rơi vào âm 1.',
        result: 'Đánh dấu trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "enter" nhấn âm 1, các từ còn lại nhấn âm 2. Chọn đáp án D.',
        result: 'enter'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc "enter" nhấn âm 2 theo quy tắc động từ thông thường.'],
    reviewSuggestions: ['Các động từ tận cùng bằng -er (enter, offer, gather) hoặc -en (happen, listen) luôn nhấn âm tiết thứ nhất.']
  },
  {
    id: 'eng10-s84',
    questionId: 'eng10-q84',
    recognition: 'Trọng âm từ 2 âm tiết (tính từ và động từ).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định trọng âm từng từ',
        explanation: 'Đọc và phân tích:\n- *common* /ˈkɒmən/ -> Tính từ 2 âm tiết, nhấn âm 1.\n- *famous* /ˈfeɪməs/ -> Tính từ 2 âm tiết, nhấn âm 1.\n- *avoid* /əˈvɔɪd/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *busy* /ˈbɪzi/ -> Tính từ 2 âm tiết, nhấn âm 1.',
        result: 'Xác định vị trí nhấn âm'
      },
      {
        order: 2,
        title: 'Lọc ra đáp án đúng',
        explanation: 'Từ "avoid" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án C.',
        result: 'avoid'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ "famous" nhấn âm 2 do ảnh hưởng phát âm sai.'],
    reviewSuggestions: ['Học sinh nên nghe file phát âm chuẩn của từ mới để định hình trọng âm đúng ngay từ đầu.']
  },
  // Dạng 17: Trọng âm của từ 3 âm tiết (s85 - s87)
  {
    id: 'eng10-s85',
    questionId: 'eng10-q85',
    recognition: 'Trọng âm của từ có 3 âm tiết đi kèm hậu tố.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích quy tắc hậu tố',
        explanation: '- *donation* /dəʊˈneɪʃn/ -> Tận cùng là đuôi -tion, trọng âm rơi vào âm tiết ngay trước nó là âm tiết thứ 2.\n- *charity* /ˈtʃærəti/ -> Tận cùng là đuôi -y, trọng âm dịch chuyển về âm tiết thứ 3 từ cuối lên, tức âm tiết thứ nhất.\n- *benefit* /ˈbenɪfɪt/ -> Danh từ 3 âm tiết có âm 2 và âm 3 chứa nguyên âm ngắn, nhấn âm 1.\n- *organise* /ˈɔːɡənaɪz/ -> Động từ tận cùng đuôi -ise, nhấn âm 1.',
        result: 'Xác định vị trí nhấn âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "donation" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án A.',
        result: 'donation'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm lẫn trọng âm của organise nhấn âm 2 hoặc âm 3.'],
    reviewSuggestions: ['Đuôi -tion là dấu hiệu cực kỳ mạnh và dễ nhận biết nhất, luôn nhấn vào âm tiết ngay trước nó.']
  },
  {
    id: 'eng10-s86',
    questionId: 'eng10-q86',
    recognition: 'Trọng âm của từ 3 âm tiết đặc biệt.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định trọng âm các từ',
        explanation: '- *volunteer* /ˌvɒlənˈtɪə(r)/ -> Tận cùng là đuôi -eer, trọng âm nhận chính ở đuôi này (âm tiết 3).\n- *understand* /ˌʌndəˈstænd/ -> Động từ ghép, trọng âm chính rơi vào âm tiết thứ 3.\n- *afternoon* /ˌɑːftəˈnuːn/ -> Nhấn vào âm tiết cuối cùng (âm tiết 3).\n- *community* /kəˈmjuːnəti/ -> Từ tận cùng là đuôi -ity, nhấn vào âm ngay trước nó (âm tiết thứ 2).',
        result: 'Vị trí trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "community" nhấn âm 2, ba từ còn lại nhấn âm 3. Chọn đáp án D.',
        result: 'community'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Quên rằng hậu tố -eer (như volunteer, engineer) luôn nhận trọng âm.'],
    reviewSuggestions: ['Ghi nhớ quy tắc hậu tố nhận trọng âm: -ee, -eer, -ese, -esque, -ique.']
  },
  {
    id: 'eng10-s87',
    questionId: 'eng10-q87',
    recognition: 'Trọng âm của từ 3 âm tiết kết thúc bằng đuôi -ic và -al.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc đuôi từ',
        explanation: '- *critical* /ˈkrɪtɪkl/ -> Hậu tố -al không ảnh hưởng trọng âm của từ gốc (critic nhấn âm 1), nhấn âm 1.\n- *typical* /ˈtɪpɪkl/ -> Tương tự, nhấn âm 1.\n- *physical* /ˈfɪzɪkl/ -> Nhấn âm 1.\n- *electric* /ɪˈlektrɪk/ -> Tận cùng là đuôi -ic, trọng âm rơi vào âm tiết ngay trước nó (âm tiết 2).',
        result: 'Xác định vị trí trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "electric" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án D.',
        result: 'electric'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ electric nhấn âm 1 (Électric là sai).'],
    reviewSuggestions: ['Học thuộc quy tắc đuôi -ic luôn làm trọng âm rơi vào âm trước nó: electric, artistic, scientific.']
  },
  // Dạng 18: Trọng âm của danh từ ghép và cụm danh từ (s88 - s90)
  {
    id: 'eng10-s88',
    questionId: 'eng10-q88',
    recognition: 'Trọng âm danh từ ghép vs cụm danh từ công nghệ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các từ ghép và cụm từ',
        explanation: '- *laptop* /ˈlæptɒp/ -> Danh từ ghép (Danh từ + Danh từ), nhấn âm 1.\n- *smartphone* /ˈsmɑːtfəʊn/ -> Danh từ ghép (Tính từ + Danh từ), nhấn âm 1.\n- *greenhouse* /ˈɡriːnhaʊs/ -> Danh từ ghép (Tính từ + Danh từ), nhấn âm 1.\n- *solar panel* /ˌsəʊlə ˈpæn.əl/ -> Cụm danh từ, trọng âm chính rơi vào từ thứ hai là "panel" (nhấn âm 1 của panel, tổng thể là âm 3 của cụm).',
        result: 'Xác định vị trí trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án khác biệt',
        explanation: 'Từ "solar panel" có trọng âm chính ở từ thứ hai, các danh từ ghép còn lại nhấn ở từ thứ nhất. Chọn đáp án D.',
        result: 'solar panel'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Nhầm lẫn solar panel là danh từ ghép và đánh trọng âm vào solar.'],
    reviewSuggestions: ['Học thuộc: Danh từ ghép (viết liền/có nối) nhấn từ thứ 1; Cụm danh từ (viết rời) nhấn từ thứ 2.']
  },
  {
    id: 'eng10-s89',
    questionId: 'eng10-q89',
    recognition: 'Trọng âm cụm từ có chứa V-ing.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích tính chất ngữ nghĩa các cụm',
        explanation: '- *smart device* /ˌsmɑːt dɪˈvaɪs/ -> Cụm danh từ (Tính từ + Danh từ), nhấn từ 2 (device).\n- *washing machine* /ˈwɒʃɪŋ məʃiːn/ -> Danh từ ghép dạng Danh động từ (V-ing) + Danh từ chỉ công cụ. Theo quy tắc, danh từ ghép dạng này nhấn ở V-ing (âm 1).\n- *computer screen* /kəmˈpjuːtə skriːn/ -> Cụm danh từ, nhấn từ 2 (screen).\n- *mobile phone* /ˌməʊbaɪl ˈfəʊn/ -> Cụm danh từ, nhấn từ 2 (phone).',
        result: 'Vị trí trọng âm chính'
      },
      {
        order: 2,
        title: 'Lọc ra đáp án đúng',
        explanation: 'Cụm "washing machine" có trọng âm chính rơi vào từ thứ nhất, các cụm còn lại có trọng âm rơi vào từ thứ hai. Chọn đáp án B.',
        result: 'washing machine'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Không phân biệt được danh từ ghép chứa V-ing (như washing machine, sewing machine) và cụm danh từ bình thường.'],
    reviewSuggestions: ['Các cụm từ ghép chỉ máy móc thực hiện chức năng (V-ing + N) luôn nhấn ở từ đầu tiên.']
  },
  {
    id: 'eng10-s90',
    questionId: 'eng10-q90',
    recognition: 'Phần biệt danh từ ghép và cụm danh từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích trọng âm các từ',
        explanation: '- *food waste* /ˈfuːd weɪst/ -> Danh từ ghép, nhấn âm 1 (food).\n- *software* /ˈsɒftweə(r)/ -> Danh từ ghép, nhấn âm 1 (soft).\n- *cell phone* /ˈsel fəʊn/ -> Danh từ ghép, nhấn âm 1 (cell).\n- *online class* /ˌɒnlaɪn ˈklɑːs/ -> Cụm danh từ, nhấn từ thứ 2 (class).',
        result: 'Vị trí trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Cụm "online class" nhấn từ thứ hai, các từ ghép còn lại nhấn từ thứ nhất. Chọn đáp án D.',
        result: 'online class'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ cell phone nhấn âm tiết thứ hai (cell PHONE là sai).'],
    reviewSuggestions: ['Hầu hết các danh từ ghép viết liền hoặc rời nhưng chỉ một khái niệm vật dụng quen thuộc đều nhấn từ đầu tiên.']
  },
  // BỔ SUNG 35 LỜI GIẢI PHÂN HOÁ CHI TIẾT (s91 - s125)
  // Dạng 14: Phát âm cụm phụ âm /br/, /kr/, /tr/ (s91 - s97)
  {
    id: 'eng10-s91',
    questionId: 'eng10-q91',
    recognition: 'Phát âm cụm phụ âm ghép /br/ và /kr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích âm đầu các từ',
        explanation: 'Đọc to các từ:\n- *brush* /brʌʃ/ -> phụ âm đầu /br/\n- *crust* /krʌst/ -> phụ âm đầu /kr/\n- *branch* /brɑːntʃ/ -> phụ âm đầu /br/\n- *brick* /brɪk/ -> phụ âm đầu /br/',
        result: 'Nhận diện phụ âm ghép'
      },
      {
        order: 2,
        title: 'Lựa chọn từ khác biệt',
        explanation: 'Từ "crust" bắt đầu bằng âm /kr/, các từ còn lại bắt đầu bằng /br/. Chọn đáp án B.',
        result: 'crust'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Phát âm sai âm u ngắn trong brush và crust.'],
    reviewSuggestions: ['Chú ý khẩu hình miệng khi bật âm /k/ rồi uốn lưỡi âm /r/ cho từ crust.']
  },
  {
    id: 'eng10-s92',
    questionId: 'eng10-q92',
    recognition: 'Phát âm cụm phụ âm ghép /tr/ và /kr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm và phân nhóm',
        explanation: 'Đọc to:\n- *trust* /trʌst/ -> phụ âm ghép /tr/\n- *true* /truː/ -> phụ âm ghép /tr/\n- *crystal* /ˈkrɪstl/ -> phụ âm ghép /kr/\n- *transfer* /trænsˈfɜː(r)/ -> phụ âm ghép /tr/',
        result: 'Phân loại âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "crystal" có âm /kr/, các từ khác đều có âm /tr/. Chọn đáp án C.',
        result: 'crystal'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc nhầm từ transfer nhấn âm 2 và quên phụ âm /tr/ ở âm tiết đầu.'],
    reviewSuggestions: ['Crystal có âm y phát âm thành /ɪ/ đi sau cụm phụ âm ghép /kr/.']
  },
  {
    id: 'eng10-s93',
    questionId: 'eng10-q93',
    recognition: 'Phát âm cụm phụ âm ghép /kr/ và /tr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc to từng từ',
        explanation: 'Phân tích âm đầu:\n- *cram* /kræm/ -> bắt đầu bằng âm /kr/\n- *tray* /treɪ/ -> bắt đầu bằng âm /tr/\n- *crawl* /krɔːl/ -> bắt đầu bằng âm /kr/\n- *crazy* /ˈkreɪzi/ -> bắt đầu bằng âm /kr/',
        result: 'Nhóm phụ âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "tray" bắt đầu bằng âm /tr/, các từ còn lại bắt đầu bằng âm /kr/. Chọn đáp án B.',
        result: 'tray'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn phát âm nguyên âm diphthong /eɪ/ trong tray và crazy.'],
    reviewSuggestions: ['Crazy và tray cùng vần nguyên âm nhưng có phụ âm đầu khác nhau (/kr/ vs /tr/).']
  },
  {
    id: 'eng10-s94',
    questionId: 'eng10-q94',
    recognition: 'Phát âm cụm phụ âm ghép /br/ và /tr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định phụ âm đầu',
        explanation: 'Đọc to:\n- *bridge* /brɪdʒ/ -> bắt đầu bằng âm /br/\n- *brave* /breɪv/ -> bắt đầu bằng âm /br/\n- *trip* /trɪp/ -> bắt đầu bằng âm /tr/\n- *bride* /braɪd/ -> bắt đầu bằng âm /br/',
        result: 'Phân loại âm'
      },
      {
        order: 2,
        title: 'Tìm ra đáp án',
        explanation: 'Từ "trip" bắt đầu bằng âm /tr/, các từ khác bắt đầu bằng âm /br/. Chọn đáp án C.',
        result: 'trip'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ bride thành bright hoặc nhầm lẫn âm cuối /dʒ/ của bridge.'],
    reviewSuggestions: ['Chú ý phân biệt bride (cô dâu - âm /br/) và trip (chuyến đi - âm /tr/).']
  },
  {
    id: 'eng10-s95',
    questionId: 'eng10-q95',
    recognition: 'Phát âm cụm phụ âm ghép /kr/ và /tr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc các từ',
        explanation: 'Đọc to và phân tích:\n- *creep* /kriːp/ -> bắt đầu bằng âm /kr/\n- *trend* /trend/ -> bắt đầu bằng âm /tr/\n- *trunk* /trʌŋk/ -> bắt đầu bằng âm /tr/\n- *trade* /treɪd/ -> bắt đầu bằng âm /tr/',
        result: 'Xác định phụ âm ghép'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "creep" bắt đầu bằng âm /kr/, các từ khác bắt đầu bằng âm /tr/. Chọn đáp án A.',
        result: 'creep'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Phát âm sai âm cuối /ŋk/ của trunk.'],
    reviewSuggestions: ['Creep là động từ đi với âm /kr/ có nghĩa là bò, trườn.']
  },
  {
    id: 'eng10-s96',
    questionId: 'eng10-q96',
    recognition: 'Phát âm cụm phụ âm ghép /br/ và /kr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc to các từ',
        explanation: 'Phân tích âm đầu:\n- *broom* /bruːm/ -> bắt đầu bằng âm /br/\n- *breed* /briːd/ -> bắt đầu bằng âm /br/\n- *craft* /krɑːft/ -> bắt đầu bằng âm /kr/\n- *brought* /brɔːt/ -> bắt đầu bằng âm /br/',
        result: 'Phân loại âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "craft" bắt đầu bằng âm /kr/, các từ còn lại bắt đầu bằng âm /br/. Chọn đáp án C.',
        result: 'craft'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn cách phát âm của động từ quá khứ brought.'],
    reviewSuggestions: ['Brought là dạng quá khứ của buy (bought) hay bring (brought)? Bring -> brought, do đó âm đầu của nó là /br/.']
  },
  {
    id: 'eng10-s97',
    questionId: 'eng10-q97',
    recognition: 'Phát âm cụm phụ âm ghép /tr/ và /br/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích phụ âm đầu',
        explanation: 'Đọc to:\n- *tractor* /ˈtræktə(r)/ -> bắt đầu bằng cụm /tr/\n- *bronze* /brɒnz/ -> bắt đầu bằng cụm /br/\n- *traffic* /ˈtræfɪk/ -> bắt đầu bằng cụm /tr/\n- *traditional* /təˈdɪʃənl/ (tr ở đây phát âm /tr/), -> bắt đầu bằng cụm /tr/',
        result: 'Phân loại âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "bronze" bắt đầu bằng âm /br/, các từ còn lại bắt đầu bằng âm /tr/. Chọn đáp án B.',
        result: 'bronze'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đọc từ traditional lướt nhanh phụ âm đầu.'],
    reviewSuggestions: ['Bronze nghĩa là đồng thiếc, là từ vựng thuộc nhóm màu sắc/kim loại đi với âm /br/.']
  },
  // Dạng 15: Phát âm cụm phụ âm /kl/, /pl/, /gr/, /pr/ (s98 - s104)
  {
    id: 'eng10-s98',
    questionId: 'eng10-q98',
    recognition: 'Phát âm cụm phụ âm /pl/ và /kl/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định âm gạch chân',
        explanation: 'Đọc to các từ:\n- *plum* /plʌm/ -> phụ âm đầu /pl/\n- *clay* /kleɪ/ -> phụ âm đầu /kl/\n- *clever* /ˈklevə(r)/ -> phụ âm đầu /kl/\n- *click* /klɪk/ -> phụ âm đầu /kl/',
        result: 'Xác định cụm phụ âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "plum" bắt đầu bằng âm /pl/, các từ còn lại bắt đầu bằng âm /kl/. Chọn đáp án A.',
        result: 'plum'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc nhầm clever thành /ple-vơ/.'],
    reviewSuggestions: ['Plum nghĩa là quả mận, bắt đầu bằng phụ âm bật môi vô thanh /p/ đi kèm âm /l/.']
  },
  {
    id: 'eng10-s99',
    questionId: 'eng10-q99',
    recognition: 'Phát âm cụm phụ âm /gr/ và /pr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm các từ',
        explanation: 'Đọc to:\n- *grand* /ɡrænd/ -> bắt đầu bằng âm /gr/\n- *price* /praɪs/ -> bắt đầu bằng âm /pr/\n- *grate* /ɡreɪt/ -> bắt đầu bằng âm /gr/\n- *ground* /ɡraʊnd/ -> bắt đầu bằng âm /gr/',
        result: 'Phân loại phụ âm ghép'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "price" bắt đầu bằng âm /pr/, các từ khác bắt đầu bằng âm /gr/. Chọn đáp án B.',
        result: 'price'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn từ grate (mài, cọ xát) và great (tuyệt vời) do phát âm giống nhau /gret/.'],
    reviewSuggestions: ['Cả grate và great đều phát âm là /ɡreɪt/ và đều bắt đầu bằng âm /gr/ hữu thanh.']
  },
  {
    id: 'eng10-s100',
    questionId: 'eng10-q100',
    recognition: 'Phát âm cụm phụ âm /pr/ và /kl/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc to các từ',
        explanation: 'Phân tích âm gạch chân:\n- *prove* /pruːv/ -> âm đầu /pr/\n- *print* /prɪnt/ -> âm đầu /pr/\n- *clap* /klæp/ -> âm đầu /kl/\n- *pray* /preɪ/ -> âm đầu /pr/',
        result: 'Phân loại phụ âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "clap" bắt đầu bằng âm /kl/, các từ còn lại bắt đầu bằng âm /pr/. Chọn đáp án C.',
        result: 'clap'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Phát âm sai âm cuối /p/ của clap.'],
    reviewSuggestions: ['Clap là vỗ tay, bắt đầu bằng âm tắc thanh hầu vô thanh /k/ đi kèm /l/.']
  },
  {
    id: 'eng10-s101',
    questionId: 'eng10-q101',
    recognition: 'Phát âm cụm phụ âm /kl/ và /pl/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định âm đầu từng từ',
        explanation: 'Đọc to:\n- *close* /kləʊz/ -> bắt đầu bằng âm /kl/\n- *place* /pleɪs/ -> bắt đầu bằng âm /pl/\n- *cleaner* /ˈkliːnə(r)/ -> bắt đầu bằng âm /kl/\n- *classroom* /ˈklɑːsruːm/ -> bắt đầu bằng âm /kl/',
        result: 'Xác định phụ âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "place" bắt đầu bằng âm /pl/, các từ khác bắt đầu bằng âm /kl/. Chọn đáp án B.',
        result: 'place'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đọc lướt âm /l/ khiến place nghe giống pace.'],
    reviewSuggestions: ['Hãy tập đọc chậm từng âm /p/ rồi hạ lưỡi nhanh sang âm /l/ để phát âm chuẩn place.']
  },
  {
    id: 'eng10-s102',
    questionId: 'eng10-q102',
    recognition: 'Phát âm cụm phụ âm /pl/ và /gr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc và đối chiếu',
        explanation: 'Đọc to:\n- *planet* /ˈplænɪt/ -> bắt đầu bằng âm /pl/\n- *plant* /plɑːnt/ -> bắt đầu bằng âm /pl/\n- *grace* /ɡreɪs/ -> bắt đầu bằng âm /gr/\n- *play* /pleɪ/ -> bắt đầu bằng âm /pl/',
        result: 'Phân nhóm âm đầu'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "grace" bắt đầu bằng âm /gr/, các từ còn lại bắt đầu bằng âm /pl/. Chọn đáp án C.',
        result: 'grace'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn plant và planet do cách viết gần giống nhau.'],
    reviewSuggestions: ['Cả planet (hành tinh) và plant (thực vật) đều bắt đầu bằng âm /pl/ chỉ khác nhau về nguyên âm và số âm tiết.']
  },
  {
    id: 'eng10-s103',
    questionId: 'eng10-q103',
    recognition: 'Phát âm cụm phụ âm /gr/ và /pr/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích phụ âm đầu',
        explanation: 'Đọc to:\n- *grasp* /ɡrɑːsp/ -> bắt đầu bằng âm /gr/\n- *great* /ɡreɪt/ -> bắt đầu bằng âm /gr/\n- *proud* /praʊd/ -> bắt đầu bằng âm /pr/\n- *graph* /ɡrɑːf/ -> bắt đầu bằng âm /gr/',
        result: 'Phân tích âm gạch chân'
      },
      {
        order: 2,
        title: 'Lựa chọn đáp án',
        explanation: 'Từ "proud" bắt đầu bằng âm /pr/, các từ còn lại bắt đầu bằng âm /gr/. Chọn đáp án C.',
        result: 'proud'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Phát âm sai âm cuối /sp/ của grasp.'],
    reviewSuggestions: ['Grasp nghĩa là nắm lấy, hiểu được, bắt đầu bằng âm /gr/ giống như great và graph.']
  },
  {
    id: 'eng10-s104',
    questionId: 'eng10-q104',
    recognition: 'Phát âm cụm phụ âm /pr/ và /kl/.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc to các từ',
        explanation: 'Phân tích âm gạch chân:\n- *prepare* /prɪˈpeə(r)/ -> bắt đầu bằng âm /pr/\n- *climb* /klaɪm/ -> bắt đầu bằng âm /kl/\n- *prevent* /prɪˈvent/ -> bắt đầu bằng âm /pr/\n- *practical* /ˈpræktɪkl/ -> bắt đầu bằng âm /pr/',
        result: 'Phân loại âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "climb" bắt đầu bằng âm /kl/, các từ còn lại bắt đầu bằng âm /pr/. Chọn đáp án B.',
        result: 'climb'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Phát âm âm /b/ ở cuối từ climb (âm b ở đây là âm câm, đọc đúng là /klaɪm/).'],
    reviewSuggestions: ['Ghi nhớ âm câm trong tiếng Anh: climb (âm b câm), honest (âm h câm).']
  },
  // Dạng 16: Trọng âm của từ 2 âm tiết (s105 - s111)
  {
    id: 'eng10-s105',
    questionId: 'eng10-q105',
    recognition: 'Trọng âm từ có 2 âm tiết (danh từ vs động từ).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ loại và trọng âm',
        explanation: '- *support* /səˈpɔːt/ -> Động từ, nhấn âm 2.\n- *produce* /prəˈdjuːs/ -> Động từ, nhấn âm 2.\n- *parent* /ˈpeərənt/ -> Danh từ, nhấn âm 1.\n- *design* /dɪˈzaɪn/ -> Động từ, nhấn âm 2.',
        result: 'Vị trí trọng âm từng từ'
      },
      {
        order: 2,
        title: 'Chọn đáp án khác biệt',
        explanation: 'Từ "parent" nhấn âm 1, các động từ còn lại nhấn âm 2. Chọn đáp án C.',
        result: 'parent'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ support nhấn âm 1 (SÚP-pót là sai).'],
    reviewSuggestions: ['Hầu hết các động từ có 2 âm tiết đều nhấn âm tiết thứ hai.']
  },
  {
    id: 'eng10-s106',
    questionId: 'eng10-q106',
    recognition: 'Trọng âm động từ 2 âm tiết - trường hợp ngoại lệ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vị trí trọng âm',
        explanation: '- *listen* /ˈlɪsn/ -> Động từ 2 âm tiết, nhấn âm 1 (ngoại lệ do đuôi -en chứa nguyên âm ngắn /n/).\n- *prepare* /prɪˈpeə(r)/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *enjoy* /ɪnˈdʒɔɪ/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *suggest* /səˈdʒest/ -> Động từ 2 âm tiết, nhấn âm 2.',
        result: 'Vị trí nhấn âm'
      },
      {
        order: 2,
        title: 'Lọc ra đáp án đúng',
        explanation: 'Từ "listen" nhấn âm 1, các từ còn lại nhấn âm 2. Chọn đáp án A.',
        result: 'listen'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc "listen" nhấn âm 2 theo thói quen động từ.'],
    reviewSuggestions: ['Các động từ như listen, happen, enter, open luôn nhấn âm tiết thứ nhất.']
  },
  {
    id: 'eng10-s107',
    questionId: 'eng10-q107',
    recognition: 'Trọng âm từ có 2 âm tiết (tính từ vs danh từ).',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc và xác định trọng âm',
        explanation: '- *public* /ˈpʌblɪk/ -> Tính từ, nhấn âm 1.\n- *device* /dɪˈvaɪs/ -> Danh từ có âm đầu chứa nguyên âm ngắn /ɪ/, nhấn âm 2.\n- *local* /ˈləʊkl/ -> Tính từ, nhấn âm 1.\n- *rural* /ˈrʊərəl/ -> Tính từ, nhấn âm 1.',
        result: 'Xác định nhấn âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "device" nhấn âm 2, các tính từ khác nhấn âm 1. Chọn đáp án B.',
        result: 'device'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đọc từ device nhấn âm 1 (đọc DE-vice là sai).'],
    reviewSuggestions: ['Danh từ device /dɪˈvaɪs/ có nguồn gốc từ động từ devise, nên vẫn giữ trọng âm 2.']
  },
  {
    id: 'eng10-s108',
    questionId: 'eng10-q108',
    recognition: 'Trọng âm động từ vs danh từ/tính từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các từ',
        explanation: '- *offer* /ˈɒfə(r)/ -> Động từ 2 âm tiết kết thúc bằng đuôi -er, nhấn âm 1.\n- *happen* /ˈhæpən/ -> Động từ 2 âm tiết kết thúc bằng đuôi -en, nhấn âm 1.\n- *reduce* /rɪˈdjuːs/ -> Động từ 2 âm tiết, nhấn âm 2.\n- *standard* /ˈstændəd/ -> Danh từ, nhấn âm 1.',
        result: 'Đánh giá trọng âm'
      },
      {
        order: 2,
        title: 'Lựa chọn đáp án',
        explanation: 'Từ "reduce" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án C.',
        result: 'reduce'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn từ happen hoặc offer nhấn âm 2.'],
    reviewSuggestions: ['Các động từ có đuôi yếu (chứa âm /ə/) luôn bị đẩy trọng âm về âm tiết thứ nhất.']
  },
  {
    id: 'eng10-s109',
    questionId: 'eng10-q109',
    recognition: 'Trọng âm của động từ đặc biệt.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vị trí trọng âm',
        explanation: '- *donate* /dəʊˈneɪt/ -> Động từ, nhấn âm 2.\n- *create* /kriˈeɪt/ -> Động từ, nhấn âm 2.\n- *protect* /pəˈtekt/ -> Động từ, nhấn âm 2.\n- *practice* /ˈpræktɪs/ -> Động từ kết thúc bằng đuôi -ice, nhấn âm 1.',
        result: 'Nhận diện trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "practice" nhấn âm 1, các động từ còn lại nhấn âm 2. Chọn đáp án D.',
        result: 'practice'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Nhầm lẫn trọng âm của donate do từ này có thể nhấn âm 1 theo tiếng Anh-Mỹ, nhưng chương trình học chuẩn luôn nhấn âm 2.'],
    reviewSuggestions: ['Practice có đuôi /tɪs/ là đuôi yếu, trọng âm rơi vào âm 1.']
  },
  {
    id: 'eng10-s110',
    questionId: 'eng10-q110',
    recognition: 'Trọng âm danh từ 2 âm tiết.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các danh từ',
        explanation: '- *system* /ˈsɪstəm/ -> Danh từ, nhấn âm 1.\n- *value* /ˈvæljuː/ -> Danh từ, nhấn âm 1.\n- *device* /dɪˈvaɪs/ -> Danh từ, nhấn âm 2.\n- *program* /ˈprəʊɡræm/ -> Danh từ, nhấn âm 1.',
        result: 'Nhóm trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "device" nhấn âm 2, các danh từ khác nhấn âm 1. Chọn đáp án C.',
        result: 'device'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc sai trọng âm của từ value.'],
    reviewSuggestions: ['Hãy lưu ý danh từ device là từ rất đặc biệt nhấn âm 2 xuất hiện lặp lại nhiều lần ở bài thi tốt nghiệp.']
  },
  {
    id: 'eng10-s111',
    questionId: 'eng10-q111',
    recognition: 'Trọng âm từ có 2 âm tiết.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc và đối chiếu trọng âm',
        explanation: '- *perform* /pəˈfɔːm/ -> Động từ, nhấn âm 2.\n- *release* /rɪˈliːs/ -> Động từ, nhấn âm 2.\n- *correct* /kəˈrekt/ -> Tính từ/Động từ, nhấn âm 2.\n- *carbon* /ˈkɑːbən/ -> Danh từ, nhấn âm 1.',
        result: 'Vị trí trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "carbon" nhấn âm 1, ba từ còn lại nhấn âm 2. Chọn đáp án D.',
        result: 'carbon'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ release nhấn âm 1 (đọc RÉ-release là sai).'],
    reviewSuggestions: ['Carbon có âm tiết thứ hai là /bən/ chứa nguyên âm yếu /ə/ nên không nhận trọng âm.']
  },
  // Dạng 17: Trọng âm của từ 3 âm tiết (s112 - s118)
  {
    id: 'eng10-s112',
    questionId: 'eng10-q112',
    recognition: 'Trọng âm từ có 3 âm tiết (Unit 2 & 4).',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định vị trí trọng âm chính',
        explanation: '- *pollution* /pəˈluːʃn/ -> Đuôi -tion nhấn âm trước nó là âm 2.\n- *direction* /daɪˈrekʃn/ -> Đuôi -tion nhấn âm trước nó là âm 2.\n- *energy* /ˈenədʒi/ -> Danh từ 3 âm tiết tận cùng là đuôi -y, nhấn âm 1.\n- *exciting* /ɪkˈsaɪtɪŋ/ -> Tính từ bắt đầu bằng tiền tố ex-, nhấn âm 2.',
        result: 'Xác định trọng âm từng từ'
      },
      {
        order: 2,
        title: 'Lựa chọn đáp án',
        explanation: 'Từ "energy" nhấn âm 1, các từ còn lại nhấn âm 2. Chọn đáp án C.',
        result: 'energy'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm lẫn trọng âm của direction hoặc đọc sai exciting nhấn âm 1.'],
    reviewSuggestions: ['Tiền tố ex- hoặc de- không bao giờ nhận trọng âm trong các từ 3 âm tiết thông dụng.']
  },
  {
    id: 'eng10-s113',
    questionId: 'eng10-q113',
    recognition: 'Trọng âm từ 3 âm tiết có đuôi đặc biệt.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc đuôi từ',
        explanation: '- *volunteer* /ˌvɒlənˈtɪə(r)/ -> Tận cùng đuôi -eer, nhấn âm chính vào chính đuôi này (âm 3).\n- *engineer* /ˌendʒɪˈnɪə(r)/ -> Tận cùng đuôi -eer, nhấn chính ở đuôi này (âm 3).\n- *pioneer* /ˌpaɪəˈnɪə(r)/ -> Tận cùng đuôi -eer, nhấn chính ở đuôi này (âm 3).\n- *atmosphere* /ˈætməsfɪə(r)/ -> Danh từ ghép cổ nhấn âm 1.',
        result: 'Xác định trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "atmosphere" nhấn âm 1, ba từ còn lại nhấn âm 3. Chọn đáp án D.',
        result: 'atmosphere'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ atmosphere nhấn âm 3 (at-mos-PHERE là sai).'],
    reviewSuggestions: ['Quy tắc: Đuôi -eer luôn nhận trọng âm chính.']
  },
  {
    id: 'eng10-s114',
    questionId: 'eng10-q114',
    recognition: 'Trọng âm từ có 3 âm tiết.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định trọng âm các tính từ',
        explanation: '- *general* /ˈdʒenrəl/ -> Tính từ 3 âm tiết có âm 2 chứa nguyên âm câm, nhấn âm 1.\n- *creative* /kriˈeɪtɪv/ -> Tính từ có đuôi -tive, nhấn vào nguyên âm dài /ei/ trước nó (âm 2).\n- *chemical* /ˈkemɪkl/ -> Tính từ có đuôi -ical, nhấn âm 1.\n- *positive* /ˈpɒzətɪv/ -> Tính từ có đuôi -tive nhưng nguyên âm đứng trước là nguyên âm ngắn, nhấn âm 1.',
        result: 'Vội vàng kết luận trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "creative" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án B.',
        result: 'creative'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đọc từ creative nhấn âm 1 (CRE-ative là sai).'],
    reviewSuggestions: ['Từ creative /kriˈeɪtɪv/ có động từ gốc là create /kriˈeɪt/ nhấn âm 2, nên vẫn giữ nguyên vị trí này.']
  },
  {
    id: 'eng10-s115',
    questionId: 'eng10-q115',
    recognition: 'Trọng âm từ có 3 âm tiết (danh từ).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các từ',
        explanation: '- *character* /ˈkærəktə(r)/ -> Danh từ 3 âm tiết, nhấn âm 1.\n- *computer* /kəmˈpjuːtə(r)/ -> Danh từ 3 âm tiết có âm đầu /kəm/ chứa nguyên âm yếu /ə/, nhấn âm 2.\n- *connection* /kəˈnekʃn/ -> Danh từ có đuôi -tion, nhấn âm trước nó là âm 2.\n- *attention* /əˈtenʃn/ -> Danh từ có đuôi -tion, nhấn âm trước nó là âm 2.',
        result: 'Vị trí nhấn âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "character" nhấn âm 1, các từ còn lại nhấn âm 2. Chọn đáp án A.',
        result: 'character'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc từ character nhấn âm 2 (cha-RAC-ter là sai).'],
    reviewSuggestions: ['Từ character là từ ngoại lệ phổ biến, tuy có cấu trúc 3 âm tiết nhưng luôn nhấn âm 1.']
  },
  {
    id: 'eng10-s116',
    questionId: 'eng10-q116',
    recognition: 'Trọng âm danh từ 3 âm tiết.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm và phân tích',
        explanation: '- *memory* /ˈmeməri/ -> Nhấn âm 1.\n- *family* /ˈfæməli/ -> Nhấn âm 1.\n- *location* /ləʊˈkeɪʃn/ -> Hậu tố -tion làm trọng âm rơi vào âm trước nó là âm 2.\n- *holiday* /ˈhɒlɪdeɪ/ -> Nhấn âm 1.',
        result: 'Vị trí trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "location" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án C.',
        result: 'location'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ holiday nhấn âm 3.'],
    reviewSuggestions: ['Các danh từ 3 âm tiết chỉ khái niệm thời gian hoặc ký ức thường nhấn âm 1.']
  },
  {
    id: 'eng10-s117',
    questionId: 'eng10-q117',
    recognition: 'Trọng âm từ 3 âm tiết kết thúc bằng đuôi -ic.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng quy tắc đuôi từ',
        explanation: '- *organic* /ɔːˈɡænɪk/ -> Đuôi -ic nhấn âm 2.\n- *artistic* /ɑːˈtɪstɪk/ -> Đuôi -ic nhấn âm 2.\n- *dynamic* /daɪˈnæmɪk/ -> Đuôi -ic nhấn âm 2.\n- *celebrate* /ˈselɪbreɪt/ -> Động từ kết thúc bằng đuôi -ate, nhấn âm 1.',
        result: 'Nhóm trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "celebrate" nhấn âm 1, ba từ còn lại nhấn âm 2. Chọn đáp án D.',
        result: 'celebrate'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ organic nhấn âm 1.'],
    reviewSuggestions: ['Quy tắc đuôi -ic là quy tắc vàng: luôn nhấn trọng âm vào âm tiết ngay trước nó.']
  },
  {
    id: 'eng10-s118',
    questionId: 'eng10-q118',
    recognition: 'Trọng âm từ có 3 âm tiết cơ bản.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phát âm và phân loại',
        explanation: '- *register* /ˈredʒɪstə(r)/ -> Nhấn âm 1.\n- *influence* /ˈɪnfluəns/ -> Nhấn âm 1.\n- *reference* /ˈrefrəns/ -> Nhấn âm 1.\n- *relation* /rɪˈleɪʃn/ -> Đuôi -tion nhấn âm ngay trước nó (âm 2).',
        result: 'Định vị trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Từ "relation" nhấn âm 2, các từ còn lại nhấn âm 1. Chọn đáp án D.',
        result: 'relation'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đọc từ influence nhấn âm 2 (in-FLU-ence là sai).'],
    reviewSuggestions: ['Influence vừa là động từ vừa là danh từ, luôn nhấn âm tiết thứ nhất.']
  },
  // Dạng 18: Trọng âm của danh từ ghép và cụm danh từ (s119 - s125)
  {
    id: 'eng10-s119',
    questionId: 'eng10-q119',
    recognition: 'Trọng âm danh từ ghép công nghệ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định từ loại các phương án',
        explanation: '- *keyboard* /ˈkiːbɔːd/ -> Danh từ ghép, nhấn từ thứ 1.\n- *e-reader* /ˈiː riːdə(r)/ -> Danh từ ghép có dấu nối, nhấn từ thứ 1.\n- *solar panel* /ˌsəʊlə ˈpæn.əl/ -> Cụm danh từ, trọng âm rơi vào từ thứ hai là panel.\n- *headphone* /ˈhedfəʊn/ -> Danh từ ghép, nhấn từ thứ 1.',
        result: 'Phân tích trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Từ "solar panel" nhấn từ thứ hai, các danh từ ghép khác nhấn từ thứ nhất. Chọn đáp án C.',
        result: 'solar panel'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc e-reader nhấn vào reader (e-READER là sai).'],
    reviewSuggestions: ['Các thiết bị kỹ thuật số dạng danh từ ghép (e-reader, smartphone, laptop) đều nhấn âm 1.']
  },
  {
    id: 'eng10-s120',
    questionId: 'eng10-q120',
    recognition: 'Trọng âm danh từ ghép vs cụm danh từ chỉ địa điểm.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân biệt cấu trúc từ',
        explanation: '- *public school* /ˌpʌblɪk ˈskuːl/ -> Cụm danh từ (Tính từ + Danh từ), nhấn từ thứ hai (school).\n- *high school* /ˈhaɪ skuːl/ -> Danh từ ghép cố định, nhấn từ thứ nhất (high).\n- *post office* /ˈpəʊst ɒfɪs/ -> Danh từ ghép cố định, nhấn từ thứ nhất (post).\n- *bus stop* /ˈbʌs stɒp/ -> Danh từ ghép cố định, nhấn từ thứ nhất (bus).',
        result: 'Vị trí trọng âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Cụm "public school" có trọng âm chính ở từ thứ hai, các từ khác nhấn ở từ thứ nhất. Chọn đáp án A.',
        result: 'public school'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc high school nhấn vào school (high SCHOOL là sai).'],
    reviewSuggestions: ['High school và public school tuy cùng cấu trúc ngữ pháp nhưng high school là danh từ ghép cố định nên nhấn âm 1.']
  },
  {
    id: 'eng10-s121',
    questionId: 'eng10-q121',
    recognition: 'Trọng âm danh từ ghép và cụm danh từ đặc biệt (độ phân hoá cao).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích ngữ nghĩa để xác định trọng âm',
        explanation: '- *greenhouse* /ˈɡriːnhaʊs/ -> Danh từ ghép (nhà kính trồng cây), nhấn từ 1.\n- *smart phone* /ˈsmɑːtfəʊn/ -> Danh từ ghép (điện thoại thông minh), nhấn từ 1.\n- *white house (President)* /ˈwaɪt haʊs/ -> Danh từ ghép (Nhà Trắng - văn phòng tổng thống Mỹ), nhấn từ 1.\n- *white house (a white house)* /ˌwaɪt ˈhaʊs/ -> Cụm danh từ (ngôi nhà sơn màu trắng), nhấn từ 2 (house).',
        result: 'Vị trí trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Cụm "white house (a white house)" nhấn từ thứ hai, các từ ghép còn lại nhấn từ thứ nhất. Chọn đáp án D.',
        result: 'white house (a white house)'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Không phân biệt được danh từ riêng White House và cụm từ white house thông thường.'],
    reviewSuggestions: ['Đây là dạng câu hỏi phân hoá nâng cao, đòi hỏi học sinh phải hiểu ngữ cảnh và cách viết để phân biệt.']
  },
  {
    id: 'eng10-s122',
    questionId: 'eng10-q122',
    recognition: 'Trọng âm danh từ ghép vs cụm danh từ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đọc và đối chiếu',
        explanation: '- *online game* /ˌɒnlaɪn ˈɡeɪm/ -> Cụm danh từ, nhấn từ thứ 2 (game).\n- *credit card* /ˈkredɪt kɑːd/ -> Danh từ ghép, nhấn từ thứ 1 (credit).\n- *software* /ˈsɒftweə(r)/ -> Danh từ ghép, nhấn từ thứ 1 (soft).\n- *raincoat* /ˈreɪnkəʊt/ -> Danh từ ghép, nhấn từ thứ 1 (rain).',
        result: 'Xác định nhấn âm'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Cụm "online game" nhấn từ thứ hai, các danh từ ghép khác nhấn từ thứ nhất. Chọn đáp án A.',
        result: 'online game'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đọc credit card nhấn vào card.'],
    reviewSuggestions: ['Raincoat và credit card tuy viết rời hoặc liền nhưng đều là danh từ ghép biểu thị một khái niệm vật dụng duy nhất.']
  },
  {
    id: 'eng10-s123',
    questionId: 'eng10-q123',
    recognition: 'Trọng âm danh từ ghép có chứa đuôi V-ing.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích các từ ghép và cụm danh từ',
        explanation: '- *living room* /ˈlɪvɪŋ ruːm/ -> Danh từ ghép dạng V-ing + N, nhấn từ 1.\n- *smart device* /ˌsmɑːt dɪˈvaɪs/ -> Cụm danh từ, nhấn từ 2 (device).\n- *dining room* /ˈdaɪnɪŋ ruːm/ -> Danh từ ghép dạng V-ing + N, nhấn từ 1.\n- *shopping mall* /ˈʃɒpɪŋ mɔːl/ -> Danh từ ghép dạng V-ing + N, nhấn từ 1.',
        result: 'Vị trí trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án đúng',
        explanation: 'Cụm "smart device" nhấn từ thứ hai, các từ ghép khác nhấn từ thứ nhất. Chọn đáp án B.',
        result: 'smart device'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm lẫn living room và dining room là cụm danh từ và nhấn từ thứ hai.'],
    reviewSuggestions: ['Tất cả các phòng trong nhà dạng V-ing + room (living room, dining room, waiting room) đều là danh từ ghép và nhấn từ đầu tiên.']
  },
  {
    id: 'eng10-s124',
    questionId: 'eng10-q124',
    recognition: 'Trọng âm cụm từ có cấu trúc phức tạp (độ phân hoá cao).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích trọng âm các cụm từ',
        explanation: '- *digital camera* /ˌdɪdʒɪtl ˈkæmrə/ -> Cụm danh từ, nhấn từ thứ 2 (camera).\n- *robotic vacuum* /rəʊˌbɒtɪk ˈvækjuːm/ -> Cụm danh từ, nhấn từ 2 (vacuum).\n- *air conditioner* /ˈeə kəndɪʃnə(r)/ -> Danh từ ghép, nhấn từ 1 (air).\n- *washing machine* /ˈwɒʃɪŋ məʃiːn/ -> Danh từ ghép, nhấn từ 1 (washing).',
        result: 'Phân tích cấu trúc từ'
      },
      {
        order: 2,
        title: 'Xác định lại đáp án khác biệt',
        explanation: 'Cụm "washing machine" là danh từ ghép thuần túy chứa V-ing nhấn âm 1. Chọn đáp án D.',
        result: 'washing machine'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Nhầm lẫn trọng âm của digital camera.'],
    reviewSuggestions: ['Washing machine là danh từ ghép cố định chứa V-ing làm nhiệm vụ chỉ chức năng của máy móc, luôn nhấn từ thứ nhất.']
  },
  {
    id: 'eng10-s125',
    questionId: 'eng10-q125',
    recognition: 'Trọng âm danh từ ghép và cụm danh từ chủ đề mạng internet.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích vị trí trọng âm',
        explanation: '- *website* /ˈwebsaɪt/ -> Danh từ ghép, nhấn âm 1.\n- *search engine* /ˈsɜːtʃ endʒɪn/ -> Danh từ ghép, nhấn từ thứ 1 (search).\n- *social media* /ˌsəʊʃl ˈmiːdiə/ -> Cụm danh từ, nhấn từ thứ 2 (media).\n- *password* /ˈpɑːswɜːd/ -> Danh từ ghép, nhấn âm 1.',
        result: 'Xác định trọng âm chính'
      },
      {
        order: 2,
        title: 'Chọn đáp án',
        explanation: 'Cụm "social media" nhấn từ thứ hai, các từ khác nhấn từ thứ nhất. Chọn đáp án C.',
        result: 'social media'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc từ website hoặc password nhấn âm tiết thứ hai.'],
    reviewSuggestions: ['Các thuật ngữ công nghệ thông tin dạng từ ghép (website, password, database) đều nhấn âm tiết thứ nhất.']
  }
];
