import { QuestionType } from '@/types';

export const g10EnglishModule4QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt5",
    topicId: "eng10-t4",
    name: "Quá khứ đơn vs. Quá khứ tiếp diễn với When/While",
    slug: "qua-khu-don-va-qua-khu-tiep-dien-when-while",
    description: "Cách kết hợp hai thì quá khứ trong cùng một câu để diễn đạt các hành động cắt ngang nhau hoặc song song diễn ra trong quá khứ thông qua liên từ \"when\" và \"while\". Đây là điểm ngữ pháp cốt lõi của Unit 4: For a Better Community.",
    exampleQuestionId: "eng10-q31",
    theory: [
      "**1. Hành động xen vào nhau (Interrupted Actions)**:\n- Diễn tả một hành động **đang diễn ra** ở quá khứ (chia Quá khứ tiếp diễn) thì một hành động khác **xen ngang** vào (chia Quá khứ đơn).\n- **Cấu trúc liên kết**:\n  * $S + was/were + V-ing + when + S + V_{2/ed}$\n  * $When + S + V_{2/ed}, S + was/were + V-ing$\n  * $S + V_{2/ed} + while + S + was/were + V-ing$\n- Ví dụ: *We were collecting garbage when it started to rain.* (Chúng tôi đang gom rác thì trời bắt đầu mưa - gom rác là đang diễn ra, mưa là xen ngang).",
      "**2. Hai hành động song song (Parallel Actions)**:\n- Diễn tả hai hành động **xảy ra đồng thời, song song** tại cùng một thời điểm trong quá khứ (cả hai động từ đều chia Quá khứ tiếp diễn, thường đi với *while*).\n- **Cấu trúc**: $S + was/were + V-ing + while + S + was/were + V-ing$\n- Ví dụ: *While I was cleaning the beach, my friends were planting trees.*"
    ],
    subTypes: [
      {
        name: "Hành động đang diễn ra bị cắt ngang (vế when)",
        example: "When the volunteers arrived at the nursing home, the elderly residents (have) __________ breakfast.",
        note: "Hành động các cụ già đang ăn sáng là hành động đang diễn ra (chia QKTD), hành động tình nguyện viên đến là xen ngang (chia QKĐ). Resident là số nhiều nên chia: were having."
      },
      {
        name: "Hành động đang diễn ra bị cắt ngang (vế while)",
        example: "While we (clean) __________ up the schoolyard, a sudden storm broke out.",
        note: "Sau \"While\" diễn tả hành động đang diễn ra trong quá khứ, chia QKTD. Chủ ngữ \"we\" là số nhiều nên chia: were cleaning."
      },
      {
        name: "Hai hành động song song xảy ra đồng thời",
        example: "While my brother was cooking, I (sweep) __________ the floor.",
        note: "Hai hành động diễn ra song song cùng lúc trong quá khứ, cả hai cùng chia QKTD. Chia: was sweeping."
      }
    ],
    recognitionSigns: [
      "Câu chứa hai hành động trong quá khứ có các liên từ nối *when* hoặc *while*.",
      "Một trong các động từ đã được chia sẵn ở Quá khứ đơn hoặc Quá khứ tiếp diễn, yêu cầu chia động từ còn lại."
    ],
    solvingSteps: [
      "Bước 1: Xác định mối quan hệ giữa hai hành động (xen vào nhau hay song song đồng thời).",
      "Bước 2: Xác định hành động nào kéo dài hơn (chia Quá khứ tiếp diễn: was/were + V-ing) và hành động nào đột ngột cắt ngang (chia Quá khứ đơn: V2/ed).",
      "Bước 3: Chia động từ chú ý sự phù hợp giữa tobe (was/were) và chủ ngữ số ít/số nhiều."
    ],
    commonMistakes: [
      "Chia sai dạng động từ tobe (dùng *was* cho chủ ngữ số nhiều hoặc ngược lại).",
      "Chia nhầm thì giữa hành động xen ngang và hành động đang diễn ra."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt12",
    topicId: "eng10-t4",
    name: "Từ vựng trọng tâm: For a Better Community",
    slug: "tu-vung-for-a-better-community",
    description: "Học và làm chủ các từ vựng về hoạt động tình nguyện, phát triển cộng đồng, quyên góp và các tổ chức phi lợi nhuận. Chủ điểm thuộc Unit 4: For a Better Community.",
    exampleQuestionId: "eng10-q66",
    theory: [
      "**Danh sách từ vựng trọng tâm (Unit 4)**:\n\n1. **Volunteer** (n/v) /ˌvɒlənˈtɪə(r)/: tình nguyện viên, làm tình nguyện.\n   * *Example*: She works as a volunteer at the local children's hospital.\n\n2. **Non-profit** (adj) /ˌnɒn ˈprɒfɪt/: phi lợi nhuận.\n   * *Example*: They set up a non-profit organization to help disabled children.\n\n3. **Remote** (adj) /rɪˈməʊt/: xa xôi, hẻo lánh (nơi khó tiếp cận).\n   * *Example*: The group built schools for kids living in remote villages.\n\n4. **Donate** (v) /dəʊˈneɪt/: quyên góp, hiến tặng.\n   * *Example*: People donated food and warm clothes to the flood victims.\n\n5. **Charity** (n) /ˈtʃærəti/: từ thiện (tổ chức quyên góp giúp đỡ người nghèo).\n   * *Example*: Half of the concert proceeds will be given to local charities."
    ],
    subTypes: [
      {
        name: "Chọn từ vựng chủ đề thiện nguyện",
        example: "We decided to __________ some books and school things to children in need.",
        note: "Quyên góp sách và đồ dùng cho trẻ em khó khăn, động từ thích hợp: donate."
      }
    ],
    recognitionSigns: [
      "Câu chứa các từ khóa cứu trợ, quyên góp, mái ấm, vùng cao hẻo lánh."
    ],
    solvingSteps: [
      "Bước 1: Tìm hiểu nghĩa tổng quát của câu (giúp đỡ người nghèo, quyên góp đồ dùng).",
      "Bước 2: Chọn từ loại thích hợp (động từ, danh từ hoặc tính từ).",
      "Bước 3: Chọn từ đúng nghĩa."
    ],
    commonMistakes: [
      "Nhầm lẫn vai trò ngữ pháp của volunteer (vừa là danh từ vừa là động từ) và voluntary (tính từ)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt17",
    topicId: "eng10-t4",
    name: "Trọng âm của từ 3 âm tiết",
    slug: "trong-am-tu-3-am-tiet",
    description: "Nắm vững quy tắc xác định trọng âm chính cho các từ có 3 âm tiết dựa trên từ loại và các hậu tố (suffixes) phổ biến trong Unit 4: For a Better Community.",
    exampleQuestionId: "eng10-q85",
    theory: [
      "**Quy tắc trọng âm từ 3 âm tiết**:\n1. **Quy tắc đuôi (Hậu tố)**:\n   * Các từ tận cùng là đuôi `-tion`, `-sion`, `-ic`, `-ity`, `-ian`: trọng âm rơi vào **âm tiết ngay trước nó**.\n     * Ví dụ: *donation* /dəʊˈneɪʃn/ (nhấn âm 2), *artistic* /ɑːˈtɪstɪk/ (nhấn âm 2).\n   * Các từ tận cùng là đuôi `-y`, `-ce`, `-ate`, `-tude`: trọng âm thường rơi vào **âm tiết thứ 3 từ cuối lên (tức âm tiết thứ nhất của từ 3 âm tiết)**.\n     * Ví dụ: *charity* /ˈtʃærəti/ (nhấn âm 1), *organise* /ˈɔːɡənaɪz/ (nhấn âm 1).\n2. **Động từ 3 âm tiết**: Nếu âm tiết thứ 3 chứa nguyên âm ngắn hoặc âm /ə/, trọng âm rơi vào **âm tiết thứ 2**.\n   * Ví dụ: *encounter* /ɪnˈkaʊntə(r)/ (nhấn âm 2)."
    ],
    subTypes: [
      {
        name: "Trọng âm từ có hậu tố",
        example: "Choose the word with different stress: A. charity, B. organise, C. donation, D. benefit",
        note: "charity, organise, benefit nhấn âm 1; donation nhấn âm 2. Chọn C."
      }
    ],
    recognitionSigns: [
      "Từ trong đề bài gồm 3 âm tiết, thường đi kèm các hậu tố nhận biết."
    ],
    solvingSteps: [
      "Bước 1: Tìm các hậu tố đặc trưng ở đuôi từ để áp dụng quy tắc nhanh.",
      "Bước 2: Phát âm thử từ để xác định vị trí nhấn âm (âm tiết 1, 2 hay 3).",
      "Bước 3: So sánh và chọn phương án."
    ],
    commonMistakes: [
      "Đánh sai vị trí trọng âm của các từ có hậu tố -ate, -ise (thường nhấn âm 1 chứ không nhấn sát đuôi)."
    ],
    difficulty: "medium",
    examFrequency: "high"
  }
];
