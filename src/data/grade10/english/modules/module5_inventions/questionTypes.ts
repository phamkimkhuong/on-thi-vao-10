import { QuestionType } from '@/types';

export const g10EnglishModule5QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt6",
    topicId: "eng10-t5",
    name: "Thì Hiện tại hoàn thành (Present Perfect)",
    slug: "thi-hien-tai-hoan-thanh",
    description: "Nắm vững cấu trúc, cách dùng thì Hiện tại hoàn thành để diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại, hoặc một kinh nghiệm, trải nghiệm thực tế. Đây là phần ngữ pháp trọng tâm của Unit 5: Inventions.",
    exampleQuestionId: "eng10-q41",
    theory: [
      "**Thì Hiện tại hoàn thành (Present Perfect)**:\n- **Công thức**: \n  * Khẳng định: $S + has/have + V_{3/ed}$\n  * Phủ định: $S + has/have + not + V_{3/ed}$\n  * Nghi vấn: $Have/Has + S + V_{3/ed}?$\n- **Cách dùng chính**:\n  * Diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại và có thể tiếp diễn trong tương lai (thường đi với *since* + mốc thời gian, *for* + khoảng thời gian).\n  * Diễn tả hành động đã hoàn thành tính đến thời điểm hiện tại nhưng không nói rõ thời gian (diễn tả kinh nghiệm, trải nghiệm, đi với *ever, never, already, yet, before*).\n  * Diễn tả hành động vừa mới xảy ra (đi với *just, recently*)."
    ],
    subTypes: [
      {
        name: "Chia động từ ở Hiện tại hoàn thành với since/for",
        example: "Scientists (develop) __________ many useful inventions since the turn of the century.",
        note: "Có dấu hiệu \"since + mốc thời gian\" nên chia Hiện tại hoàn thành. Chủ ngữ \"Scientists\" số nhiều nên dùng \"have\": have developed."
      },
      {
        name: "Trải nghiệm với ever/never",
        example: "Have you ever (use) __________ a 3D printer before?",
        note: "Cấu trúc câu hỏi trải nghiệm với \"ever\", chia động từ phân từ hai: used."
      },
      {
        name: "Câu phủ định với yet",
        example: "He has not (finish) __________ his science essay yet.",
        note: "Có trạng từ \"yet\" đứng cuối câu phủ định của thì Hiện tại hoàn thành. Chia: finished."
      }
    ],
    recognitionSigns: [
      "Câu chứa các trạng từ thời gian đặc trưng: *since, for, already, yet, ever, never, just, recently, so far*."
    ],
    solvingSteps: [
      "Bước 1: Tìm các trạng từ chỉ thời gian báo hiệu thì Hiện tại hoàn thành.",
      "Bước 2: Phân tích số ít hay số nhiều của chủ ngữ để chọn trợ động từ tương ứng: \"has\" (số ít) hoặc \"have\" (số nhiều, I, we, you, they).",
      "Bước 3: Chuyển đổi động từ chính sang dạng phân từ hai cột 3 (V3/ed)."
    ],
    commonMistakes: [
      "Chia sai động từ cột 3 của các động từ bất quy tắc.",
      "Dùng nhầm \"has\" cho chủ ngữ số nhiều hoặc ngược lại."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt8",
    topicId: "eng10-t5",
    name: "Danh động từ & Động từ nguyên mẫu (Gerunds & Infinitives)",
    slug: "danh-dong-tu-va-dong-tu-nguyen-mau-unit5",
    description: "Học cách sử dụng Danh động từ (V-ing) làm tân ngữ của một số động từ đặc biệt và giới từ, hoặc dùng cụm To-V và V-ing để chỉ mục đích, chức năng sử dụng của các phát minh. Chủ điểm xuất hiện ở Unit 5: Inventions.",
    exampleQuestionId: "eng10-q43",
    theory: [
      "**1. Danh động từ (Gerunds / V-ing) làm tân ngữ**:\n- Theo sau các động từ đặc biệt như: *avoid, enjoy, mind, dislike, practice, spend (time), postpone, finish, recommend*...\n- Theo sau các giới từ: *about, of, in, for, on, at*...\n- Ví dụ: *We should avoid spending too much time on phones.*",
      "**2. Cấu trúc chỉ mục đích và chức năng (Purpose and Function)**:\n- **Chỉ mục đích của người (To-V)**: Sử dụng để diễn tả lý do ai đó làm việc gì.\n  * Cấu trúc: $S + V + to-V-bare$\n  * Ví dụ: *I use my laptop to study online.* (Tôi dùng laptop để học trực tuyến).\n- **Chỉ chức năng của vật (For + V-ing hoặc To-V)**: Sử dụng để mô tả công dụng của một công cụ, phát minh.\n  * Cấu trúc: $S + be + used + for + V-ing$ hoặc $S + be + used + to + V-bare$\n  * Ví dụ: *Robotic vacuum is used for cleaning floors* hoặc *is used to clean floors*."
    ],
    subTypes: [
      {
        name: "Danh động từ làm tân ngữ sau động từ chỉ sở thích/phòng tránh",
        example: "We should avoid (use) __________ single-use plastic bags to protect the environment.",
        note: "Sau động từ \"avoid\" là V-ing, chia: using."
      },
      {
        name: "Danh động từ chỉ mục đích sau giới từ",
        example: "This smart device is used for (track) __________ daily calorie intake.",
        note: "Sau giới từ \"for\" chỉ mục đích sử dụng của đồ vật, ta dùng động từ dạng V-ing. Chia: tracking."
      },
      {
        name: "Động từ nguyên mẫu chỉ mục đích của người",
        example: "I bought this e-reader (read) __________ books anywhere.",
        note: "Người nói mua máy đọc sách nhằm mục đích đọc sách (chỉ mục đích của người), dùng: to read."
      }
    ],
    recognitionSigns: [
      "Câu có động từ chính là các từ yêu cầu theo sau là V-ing như *avoid, enjoy, spend, practice* hoặc có chứa giới từ.",
      "Câu hỏi kiểm tra cấu trúc chỉ mục đích của các phát minh công nghệ (*used for V-ing* hoặc *used to V*)."
    ],
    solvingSteps: [
      "Bước 1: Xác định xem vị trí cần chia động từ đứng sau động từ chỉ hoạt động, sau giới từ, hay đứng trong cấu trúc chỉ công dụng (*be used for*).",
      "Bước 2: Lựa chọn dạng động từ thích hợp: V-ing sau giới từ hoặc sau động từ đặc trưng; To-V nếu chỉ mục đích của người thực hiện.",
      "Bước 3: Chọn phương án phù hợp."
    ],
    commonMistakes: [
      "Lẫn lộn cấu trúc giữa *be used to + V-bare* (được dùng để làm gì) và *be used for + V-ing* (được dùng cho việc gì).",
      "Nhầm lẫn cấu trúc chỉ mục đích của người (dùng To-V) thành V-ing."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt13",
    topicId: "eng10-t5",
    name: "Từ vựng trọng tâm: Inventions",
    slug: "tu-vung-inventions",
    description: "Học và làm chủ các từ vựng về phát minh, thiết bị thông minh, công nghệ số và trí tuệ nhân tạo. Chủ điểm thuộc Unit 5: Inventions.",
    exampleQuestionId: "eng10-q71",
    theory: [
      "**Danh sách từ vựng trọng tâm (Unit 5)**:\n\n1. **Invention** (n) /in'venʃn/: phát minh, sáng chế.\n   * *Example*: The internet is considered one of the greatest inventions of all time.\n\n2. **Device** (n) /dɪˈvaɪs/: thiết bị, dụng cụ công nghệ.\n   * *Example*: Smartphones are useful devices that help us stay connected.\n\n3. **Processor** (n) /ˈprəʊsesə(r)/: bộ vi xử lý (trong máy tính/điện thoại).\n   * *Example*: The computer runs very fast because it has a powerful processor.\n\n4. **Robotic** (adj) /rəʊˈbɒtɪk/: thuộc về robot (tự động hóa).\n   * *Example*: They bought a robotic vacuum to clean the house.\n\n5. **AI (Artificial Intelligence)** (n.phr) /ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/: trí tuệ nhân tạo.\n   * *Example*: AI is playing an increasingly important role in our daily lives."
    ],
    subTypes: [
      {
        name: "Chọn từ vựng chủ đề công nghệ",
        example: "A smartphone is a pocket-sized __________ that has many smart features.",
        note: "Điện thoại thông minh là một thiết bị công nghệ, từ thích hợp: device."
      }
    ],
    recognitionSigns: [
      "Câu chứa các từ khóa về thiết bị phần cứng, phần mềm, robot, sáng chế khoa học."
    ],
    solvingSteps: [
      "Bước 1: Xác định ngữ cảnh phát minh hoặc công nghệ của câu.",
      "Bước 2: Phân tích từ loại và ý nghĩa từ cần điền.",
      "Bước 3: Chọn từ vựng đúng."
    ],
    commonMistakes: [
      "Nhầm lẫn giữa invention (sự phát minh - vật mới hoàn toàn) và discovery (sự khám phá - vật đã có sẵn trong tự nhiên)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt18",
    topicId: "eng10-t5",
    name: "Trọng âm của danh từ ghép và cụm danh từ",
    slug: "trong-am-danh-tu-ghep-cum-danh-tu",
    description: "Quy tắc xác định trọng âm cho các từ ghép (compound nouns) và cụm danh từ (noun phrases) liên quan đến chủ đề công nghệ trong Unit 5: Inventions.",
    exampleQuestionId: "eng10-q88",
    theory: [
      "**Trọng âm của từ ghép và cụm từ**:\n1. **Danh từ ghép (Compound Nouns)**: Thường được tạo thành bởi `Danh từ + Danh từ` hoặc `Tính từ + Danh từ` viết liền hoặc có dấu nối. Trọng âm chính rơi vào **danh từ thứ nhất (âm tiết đầu tiên)**.\n   * Ví dụ: *smartphone* /ˈsmɑːt.fəʊn/ (nhấn âm 1), *laptop* /ˈlæp.tɒp/ (nhấn âm 1), *greenhouse* /ˈɡriːn.haʊs/ (nhấn âm 1).\n2. **Cụm danh từ (Noun Phrases)**: Thường gồm `Tính từ + Danh từ` chỉ một ý nghĩa mô tả chung (không tạo thành một từ ghép cố định). Trọng âm rơi vào **từ thứ hai (danh từ chính)**.\n   * Ví dụ: *smart device* /ˌsmɑːt dɪˈvaɪs/ (nhấn chính ở âm tiết 2 của device), *solar panel* /ˌsəʊ.lə ˈpæn.əl/."
    ],
    subTypes: [
      {
        name: "Trọng âm danh từ ghép vs cụm danh từ",
        example: "Identify the word with a different stress pattern: A. laptop, B. smartphone, C. greenhouse, D. white house (cụm danh từ chỉ ngôi nhà sơn màu trắng)",
        note: "A, B, C là danh từ ghép nhấn trọng âm 1; D là cụm danh từ nhấn âm 2. Chọn D."
      }
    ],
    recognitionSigns: [
      "Đề bài chứa các danh từ ghép công nghệ phổ biến hoặc cụm danh từ."
    ],
    solvingSteps: [
      "Bước 1: Phân biệt từ đó là danh từ ghép (viết liền/nối) hay cụm danh từ (viết tách).",
      "Bước 2: Xác định vị trí nhấn âm chính (âm đầu tiên cho danh từ ghép, âm thứ hai cho cụm danh từ).",
      "Bước 3: So sánh vị trí trọng âm."
    ],
    commonMistakes: [
      "Nhấn âm tiết thứ 2 của danh từ ghép (ví dụ đọc smartPHONE thay vì SMARTphone)."
    ],
    difficulty: "medium",
    examFrequency: "medium"
  }
];
