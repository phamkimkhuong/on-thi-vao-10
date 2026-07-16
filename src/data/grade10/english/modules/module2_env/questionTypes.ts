import { QuestionType } from '@/types';

export const g10EnglishModule2QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt2",
    topicId: "eng10-t2",
    name: "Tương lai với \"Will\" vs. \"Be going to\"",
    slug: "tuong-lai-will-va-be-going-to",
    description: "Phân biệt cách nói về các hành động trong tương lai bằng cách sử dụng trợ động từ \"will\" (quyết định tức thì, dự đoán cá nhân) và cấu trúc \"be going to\" (kế hoạch sẵn có, dự đoán có căn cứ). Đây là phần trọng tâm ngữ pháp của Unit 2: Humans and the Environment.",
    exampleQuestionId: "eng10-q11",
    theory: [
      "**1. Cách dùng \"Will\" (Tương lai đơn)**:\n- **Cấu trúc**: $S + will + V-bare$\n- **Cách dùng**:\n  * Đưa ra quyết định ngay tại thời điểm nói (ví dụ: *A: \"The phone is ringing.\" B: \"I will answer it.\"*).\n  * Dự đoán tương lai dựa trên ý kiến cá nhân, không có căn cứ rõ ràng (thường đi với *think, believe, hope, perhaps*).\n  * Diễn tả một lời hứa, lời đe dọa hoặc lời đề nghị giúp đỡ (ví dụ: *I will help you carry these bags*).",
      "**2. Cách dùng \"Be going to\" (Tương lai gần)**:\n- **Cấu trúc**: $S + am/is/are + going + to + V-bare$\n- **Cách dùng**:\n  * Diễn tả một kế hoạch, dự định đã được lên lịch từ trước khi nói (ví dụ: *We are going to visit our grandparents this weekend*).\n  * Đưa ra dự đoán về tương lai dựa trên những dấu hiệu thực tế ở hiện tại (ví dụ: *Look at those dark clouds! It is going to rain*)."
    ],
    subTypes: [
      {
        name: "Quyết định tức thời (Will)",
        example: "A: \"There is no milk left.\" B: \"Oh, really? I (go) __________ to the supermarket to buy some.\"",
        note: "Người nói B chỉ quyết định đi mua sữa sau khi nghe tin hết sữa (quyết định tức thời), do đó dùng: will go."
      },
      {
        name: "Kế hoạch chuẩn bị sẵn (Be going to)",
        example: "I have bought the tickets. We (watch) __________ a football match this Saturday.",
        note: "Hành động mua vé chứng tỏ kế hoạch đã được chuẩn bị sẵn từ trước, dùng: are going to watch."
      },
      {
        name: "Dự đoán có căn cứ thực tế (Be going to)",
        example: "Look at the driver! He is driving too fast. He (crash) __________ into that tree.",
        note: "Dấu hiệu thực tế \"driving too fast\" cho thấy một tai nạn sắp xảy ra, dùng: is going to crash."
      }
    ],
    recognitionSigns: [
      "Câu chứa các ngữ cảnh hội thoại biểu thị phản ứng nhanh (A nói - B đáp).",
      "Câu chứa các bằng chứng rõ ràng ở hiện tại (*dark clouds, ticket bought, driving too fast*)."
    ],
    solvingSteps: [
      "Bước 1: Xác định xem hành động tương lai này là dự định đã lên lịch trước đó hay quyết định phát sinh ngay lúc đối thoại.",
      "Bước 2: Nếu là dự đoán, xem xét có dấu hiệu hoặc bằng chứng thực tế tại hiện trường hay chỉ là dự đoán cảm tính (think/hope).",
      "Bước 3: Chia động từ thích hợp. Chú ý chia động từ \"to be\" (am/is/are) cho cấu trúc \"be going to\" hợp với chủ ngữ."
    ],
    commonMistakes: [
      "Sử dụng nhầm \"will\" cho các kế hoạch đã lên lịch từ trước.",
      "Quên chia động từ \"to be\" khi viết cấu trúc \"going to\" (ví dụ viết nhầm: *He going to play*)."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt3",
    topicId: "eng10-t2",
    name: "Câu bị động (Passive Voice) của các thì cơ bản",
    slug: "cau-bi-dong-thi-co-ban",
    description: "Học sinh hiểu bản chất của câu bị động và làm chủ kỹ năng biến đổi từ câu chủ động sang câu bị động, cũng như cách chia động từ bị động ở các thì Hiện tại đơn, Quá khứ đơn, Hiện tại hoàn thành và Tương lai đơn. Chủ điểm xuất hiện ở Unit 2: Humans and the Environment.",
    exampleQuestionId: "eng10-q16",
    theory: [
      "**1. Nguyên tắc biến đổi câu bị động**:\n- **Chủ động**: $S_{chủ} + V + O_{chủ}$\n- **Bị động**: $S_{bị} (O_{chủ}) + be + V_{3/ed} + [by + O_{bị} (S_{chủ})]$\n- **Lưu ý**:\n  * Động từ \"to be\" được chia theo thì của câu chủ động và hợp số ít/nhiều với chủ ngữ mới.\n  * Trạng từ chỉ nơi chốn đứng trước *by + O* (ví dụ: *in the kitchen by my mom*).\n  * Trạng từ chỉ thời gian đứng sau *by + O* (ví dụ: *by my mom yesterday*).",
      "**2. Công thức câu bị động ở các thì cơ bản**:\n- **Hiện tại đơn**: $S + am/is/are + V_{3/ed}$\n- **Quá khứ đơn**: $S + was/were + V_{3/ed}$\n- **Hiện tại hoàn thành**: $S + has/have + been + V_{3/ed}$\n- **Tương lai đơn**: $S + will + be + V_{3/ed}$"
    ],
    subTypes: [
      {
        name: "Bị động thì Hiện tại đơn",
        example: "Garbage (collect) __________ by the sanitation workers every day.",
        note: "Chủ ngữ \"Garbage\" không tự thu gom mà được thu gom (bị động). Trạng từ \"every day\" chỉ thì hiện tại đơn. Garbage là danh từ không đếm được (số ít) nên chia: is collected."
      },
      {
        name: "Bị động thì Quá khứ đơn",
        example: "The book (write) __________ by a young author in 2020.",
        note: "Mốc thời gian \"in 2020\" ở quá khứ, câu mang nghĩa bị động: was written."
      },
      {
        name: "Bị động thì Tương lai đơn",
        example: "A new eco-friendly park (build) __________ in this area next year.",
        note: "Dấu hiệu \"next year\" chỉ tương lai đơn, câu bị động: will be built."
      }
    ],
    recognitionSigns: [
      "Chủ ngữ của câu là danh từ chỉ vật hoặc danh từ không thể tự thực hiện hành động chính.",
      "Trong câu thường xuất hiện giới từ \"by\" đứng trước tác nhân gây ra hành động."
    ],
    solvingSteps: [
      "Bước 1: Xác định thì của câu dựa vào các trạng từ chỉ thời gian (*every day, yesterday, next week, since 2010*).",
      "Bước 2: Kiểm tra xem chủ ngữ có khả năng tự thực hiện hành động hay không để xác định câu mang nghĩa bị động.",
      "Bước 3: Lắp ráp công thức bị động của thì đó: Be + V3/ed (lưu ý đổi động từ sang dạng quá khứ phân từ và chia động từ be hợp với số của chủ ngữ)."
    ],
    commonMistakes: [
      "Nhầm lẫn phân từ hai của các động từ bất quy tắc (ví dụ viết *writed* thay vì *written*, *buyed* thay vì *bought*).",
      "Quên chia động từ \"to be\" theo số ít/số nhiều của chủ ngữ mới."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt10",
    topicId: "eng10-t2",
    name: "Từ vựng trọng tâm: Humans and the Environment",
    slug: "tu-vung-humans-and-environment",
    description: "Học và làm chủ các từ vựng về lối sống xanh, bảo vệ môi trường, các hoạt động tái chế và ảnh hưởng của con người. Chủ điểm thuộc Unit 2: Humans and the Environment.",
    exampleQuestionId: "eng10-q56",
    theory: [
      "**Danh sách từ vựng trọng tâm (Unit 2)**:\n\n1. **Eco-friendly** (adj) /ˌiːkəʊ ˈfrendli/: thân thiện với môi trường.\n   * *Example*: Using public transport is more eco-friendly than driving cars.\n\n2. **Carbon footprint** (n.phr) /ˌkɑːbən ˈfʊtprɪnt/: lượng khí thải carbon, dấu chân carbon.\n   * *Example*: Planting more trees is a great way to reduce your carbon footprint.\n\n3. **Green living** (n.phr) /ˌɡriːn ˈlɪvɪŋ/: lối sống xanh (bảo vệ môi trường).\n   * *Example*: More people are adopting green living by recycling and using solar energy.\n\n4. **Single-use** (adj) /ˌsɪŋɡl ˈjuːs/: chỉ dùng một lần (như cốc nhựa, túi nilon).\n   * *Example*: We should ban single-use plastics to protect our oceans.\n\n5. **Pollute** (v) /pəˈluːt/: làm ô nhiễm (nguồn nước, không khí).\n   * *Example*: Toxic waste from factories can pollute nearby rivers."
    ],
    subTypes: [
      {
        name: "Chọn từ vựng bảo vệ môi trường",
        example: "We are trying to reduce our __________ by saving electricity.",
        note: "Tiết kiệm điện giúp giảm lượng khí thải carbon, từ phù hợp: carbon footprint."
      }
    ],
    recognitionSigns: [
      "Câu hỏi điền từ liên quan đến các vấn đề môi trường, rác thải hoặc năng lượng sạch."
    ],
    solvingSteps: [
      "Bước 1: Phân tích ngữ cảnh câu (ví dụ nói về túi nhựa dùng một lần -> single-use).",
      "Bước 2: Xác định từ loại cần điền (danh từ, động từ hay tính từ).",
      "Bước 3: Chọn từ đúng nghĩa."
    ],
    commonMistakes: [
      "Không phân biệt được giữa tính từ eco-friendly và danh từ/cụm danh từ green living."
    ],
    difficulty: "easy",
    examFrequency: "high"
  },
  {
    id: "eng10-qt15",
    topicId: "eng10-t2",
    name: "Phát âm cụm phụ âm /kl/, /pl/, /gr/, /pr/",
    slug: "phat-am-cum-phu-am-kl-pl-gr-pr",
    description: "Rèn luyện và nhận diện cách phát âm chính xác của đóng vai trò rất quan trọng ở Unit 2: Humans and the Environment.",
    exampleQuestionId: "eng10-q79",
    theory: [
      "**Các cụm phụ âm đi với /l/ và /r/ (Unit 2)**:\n- **Cụm /kl/**: *clean* /kliːn/, *club* /klʌb/, *climate* /ˈklaɪmət/.\n- **Cụm /pl/**: *please* /pliːz/, *plastic* /ˈplæstɪk/, *plough* /plaʊ/.\n- **Cụm /gr/**: *green* /ɡriːn/, *group* /ɡruːp/, *grow* /ɡrəʊ/.\n- **Cụm /pr/**: *practise* /ˈpræktɪs/, *protect* /pəˈtekt/ (ở đây pr bị giảm âm nhẹ nhưng vẫn phát âm /pr/), *present* /ˈpreznt/."
    ],
    subTypes: [
      {
        name: "Phân biệt cụm phụ âm đầu",
        example: "Choose the word whose initial consonant cluster is pronounced differently: A. **cl**ean, B. **cl**ub, C. **pl**astic, D. **cl**imate",
        note: "Các từ A, B, D bắt đầu bằng âm /kl/, trong khi plastic bắt đầu bằng âm /pl/. Chọn C."
      }
    ],
    recognitionSigns: [
      "Đề bài yêu cầu tìm từ có cách phát âm của cụm phụ âm đầu khác biệt."
    ],
    solvingSteps: [
      "Bước 1: Phát âm các từ để xác định âm đi với /l/ hay /r/.",
      "Bước 2: Phân nhóm cụ thể (/kl/, /pl/, /gr/, /pr/).",
      "Bước 3: Chọn phương án khác loại."
    ],
    commonMistakes: [
      "Lẫn lộn âm /kl/ và /pl/ hoặc /gr/ và /pr/ do khẩu hình miệng tương tự."
    ],
    difficulty: "easy",
    examFrequency: "medium"
  }
];
