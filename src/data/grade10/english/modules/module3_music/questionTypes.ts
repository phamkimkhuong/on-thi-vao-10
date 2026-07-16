import { QuestionType } from '@/types';

export const g10EnglishModule3QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt4",
    topicId: "eng10-t3",
    name: "Động từ nguyên mẫu có To và không To (To-V & Bare-V)",
    slug: "dong-tu-nguyen-mau-to-va-bare-v",
    description: "Học cách phân loại các động từ đi sau bởi động từ nguyên mẫu có \"to\" (to-infinitive) và động từ nguyên mẫu không \"to\" (bare infinitive). Chủ điểm xuất hiện ở Unit 3: Music.",
    exampleQuestionId: "eng10-q21",
    theory: [
      "**1. Động từ nguyên mẫu có \"To\" (To-infinitive)**:\n- Theo sau các động từ diễn tả ý định, mong muốn, quyết định, kế hoạch: *decide, want, hope, plan, promise, agree, refuse, expect, manage, offer, seem, choose*...\n- Công thức: $S + V_1 + to-V_2$\n- Ví dụ: *She decided to enter the music contest.*",
      "**2. Động từ nguyên mẫu không \"To\" (Bare infinitive / V-bare)**:\n- Theo sau các động từ khuyết thiếu: *can, could, may, might, should, must*...\n- Theo sau các động từ cầu khiến, chỉ giác quan: *make, let, hear, see, watch* (cấu trúc: *make/let + O + V-bare*).\n- Ví dụ: *My parents let me go to the music concert.*"
    ],
    subTypes: [
      {
        name: "Động từ đi với To-V",
        example: "He promises (practice) __________ the piano every day before school.",
        note: "Sau động từ \"promise\" là to-V, chia: to practice."
      },
      {
        name: "Động từ đi với Bare-V",
        example: "The upbeat music made us (feel) __________ energetic and happy.",
        note: "Áp dụng cấu trúc cầu khiến: make + O + V-bare. Do đó chia: feel."
      }
    ],
    recognitionSigns: [
      "Câu hỏi kiểm tra dạng động từ đứng sau các động từ chính cho sẵn (*decide, make, let, promise*)."
    ],
    solvingSteps: [
      "Bước 1: Xác định động từ chính đứng liền trước khoảng trống cần chia.",
      "Bước 2: Tra cứu động từ chính đó thuộc nhóm đi với to-infinitive hay bare infinitive (hoặc cấu trúc V + O + V-bare).",
      "Bước 3: Chọn phương án phù hợp."
    ],
    commonMistakes: [
      "Dùng V-ing sau các từ như *decide, plan* vì dịch nghĩa tiếng Việt là \"quyết định việc gì đó\"."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt7",
    topicId: "eng10-t3",
    name: "Câu ghép với các liên từ kết hợp (Compound Sentences)",
    slug: "cau-ghep-lien-tu-ket-hop",
    description: "Sử dụng các liên từ kết hợp (and, or, but, so) để liên kết hai mệnh đề độc lập thành một câu ghép hoàn chỉnh. Đây là ngữ pháp trọng tâm của Unit 3: Music.",
    exampleQuestionId: "eng10-q26",
    theory: [
      "**Câu ghép với các liên từ kết hợp (Coordinating Conjunctions)**:\n- Sử dụng các liên từ **FANBOYS** (phổ biến nhất ở lớp 10 là *and, or, but, so*) để nối hai mệnh đề độc lập. Luôn có dấu phẩy đứng trước liên từ khi nối hai mệnh đề độc lập:\n  * **and**: dùng để bổ sung thông tin tương đồng (ví dụ: *She loves classical music, and she also plays the violin*).\n  * **but**: dùng để diễn tả sự đối lập, tương phản (ví dụ: *He wanted to attend the concert, but he could not buy the tickets*).\n  * **or**: dùng để diễn tả sự lựa chọn, thay thế (ví dụ: *You can practice singing at home, or you can join a music class*).\n  * **so**: dùng để chỉ kết quả, hậu quả của hành động trước đó (ví dụ: *The melody is catchy, so the song becomes a hit*)."
    ],
    subTypes: [
      {
        name: "Liên từ and (bổ sung)",
        example: "She plays the guitar, __________ she also composes her own songs.",
        note: "Hai vế tương đồng bổ sung ý nghĩa cho nhau, dùng: and."
      },
      {
        name: "Liên từ but (đối lập)",
        example: "I wanted to see the show, __________ I was too busy.",
        note: "Vế sau thể hiện sự cản trở tương phản với vế trước, dùng: but."
      },
      {
        name: "Liên từ or (lựa chọn)",
        example: "We can go to the concert, __________ we can watch it live on TV.",
        note: "Hai phương án hành động có thể lựa chọn thay thế nhau, dùng: or."
      },
      {
        name: "Liên từ so (kết quả)",
        example: "The weather was bad, __________ the outdoor concert was cancelled.",
        note: "Vế sau là kết quả trực tiếp của nguyên nhân thời tiết xấu ở vế trước, dùng: so."
      }
    ],
    recognitionSigns: [
      "Câu kiểm tra trắc nghiệm chọn liên từ thích hợp (*and, or, but, so*) đứng sau dấu phẩy để nối hai mệnh đề."
    ],
    solvingSteps: [
      "Bước 1: Đọc và dịch nghĩa cả hai mệnh đề độc lập.",
      "Bước 2: Phân tích mối quan hệ logic giữa hai mệnh đề (đối lập, lựa chọn, nhân quả hay bổ sung).",
      "Bước 3: Chọn liên từ tương ứng phù hợp nhất."
    ],
    commonMistakes: [
      "Nhầm lẫn giữa so (kết quả) và but (tương phản)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt11",
    topicId: "eng10-t3",
    name: "Từ vựng trọng tâm: Music",
    slug: "tu-vung-music",
    description: "Học và làm chủ các từ vựng về thể loại nhạc, nhạc cụ, các cuộc thi âm nhạc và buổi biểu diễn. Chủ điểm thuộc Unit 3: Music.",
    exampleQuestionId: "eng10-q61",
    theory: [
      "**Danh sách từ vựng trọng tâm (Unit 3)**:\n\n1. **Phenomenon** (n) /fəˈnɒmɪnən/: hiện tượng (sự việc, người nổi bật lạ thường).\n   * *Example*: The young singer became a global music phenomenon overnight.\n\n2. **Instrument** (n) /ˈɪnstrəmənt/: nhạc cụ (đàn, sáo, trống...).\n   * *Example*: The violin is a very difficult musical instrument to play.\n\n3. **Audience** (n) /ˈɔːdiəns/: khán giả, thính giả (người xem buổi biểu diễn).\n   * *Example*: The audience cheered loudly at the end of the concert.\n\n4. **Talented** (adj) /ˈtæləntɪd/: tài năng, có khiếu.\n   * *Example*: She is a talented pianist who started playing at the age of four.\n\n5. **Contest** (n) /ˈkɒntest/: cuộc thi (tài năng, ca hát).\n   * *Example*: Thousands of people signed up for the singing contest."
    ],
    subTypes: [
      {
        name: "Chọn từ vựng nhạc cụ/nghệ sĩ",
        example: "He can play many musical __________ like the drums, guitar, and piano.",
        note: "Đàn, trống là các nhạc cụ, từ thích hợp: instruments."
      }
    ],
    recognitionSigns: [
      "Câu hỏi chứa các từ khóa về buổi biểu diễn, ban nhạc, ca sĩ, cuộc thi âm nhạc."
    ],
    solvingSteps: [
      "Bước 1: Xác định chủ đề âm nhạc của câu.",
      "Bước 2: Đối chiếu từ loại và ngữ cảnh (khán giả xem biểu diễn -> audience).",
      "Bước 3: Chọn từ vựng thích hợp."
    ],
    commonMistakes: [
      "Viết sai danh từ số nhiều phenomenon (số nhiều là phenomena)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt16",
    topicId: "eng10-t3",
    name: "Trọng âm của từ 2 âm tiết",
    slug: "trong-am-tu-2-am-tiet",
    description: "Nắm vững các quy tắc đánh dấu trọng âm cơ bản cho các từ có 2 âm tiết (danh từ, tính từ và động từ). Chủ điểm thuộc Unit 3: Music.",
    exampleQuestionId: "eng10-q82",
    theory: [
      "**Quy tắc trọng âm từ 2 âm tiết cơ bản**:\n1. **Động từ có 2 âm tiết**: Trọng âm thường rơi vào **âm tiết thứ 2**.\n   * Ví dụ: *perform* /pəˈfɔːm/, *decide* /dɪˈsaɪd/, *attract* /əˈtrækt/.\n2. **Danh từ và Tính từ có 2 âm tiết**: Trọng âm thường rơi vào **âm tiết thứ 1**.\n   * Ví dụ: *music* /ˈmjuːzɪk/, *singer* /ˈsɪŋə(r)/, *famous* /ˈfeɪməs/.\n3. **Ngoại lệ**:\n   * Động từ có âm tiết thứ hai chứa nguyên âm ngắn và kết thúc bằng một phụ âm: trọng âm rơi vào **âm tiết thứ 1** (ví dụ: *enter* /ˈentə(r)/, *offer* /ˈɒfə(r)/).\n   * Danh từ có âm tiết thứ nhất chứa nguyên âm ngắn /ə/ hoặc /ɪ/: trọng âm rơi vào **âm tiết thứ 2** (ví dụ: *advice* /ədˈvaɪs/)."
    ],
    subTypes: [
      {
        name: "Tìm từ có trọng âm chính khác biệt",
        example: "Choose the word that has a different stress pattern: A. perform, B. decide, C. singer, D. attract",
        note: "perform, decide, attract nhấn âm 2; singer nhấn âm 1. Chọn C."
      }
    ],
    recognitionSigns: [
      "Đề bài yêu cầu tìm từ có trọng âm chính (primary stress) rơi vào vị trí khác các từ còn lại."
    ],
    solvingSteps: [
      "Bước 1: Xác định từ loại của từng từ (danh, động, tính).",
      "Bước 2: Áp dụng quy tắc trọng âm 2 âm tiết thông dụng và lọc ra các từ ngoại lệ.",
      "Bước 3: Đối chiếu vị trí trọng âm (âm 1 hay âm 2) để chọn đáp án."
    ],
    commonMistakes: [
      "Quên quy tắc ngoại lệ của các động từ kết thúc bằng đuôi -er, -en như enter, happen, offer (nhấn âm 1)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
