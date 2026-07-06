import { QuestionType } from '@/types';

export const g10EnglishQuestionTypes: QuestionType[] = [
  {
    id: 'eng10-qt1',
    topicId: 'eng10-t1',
    name: 'Thì Hiện tại đơn & Hiện tại tiếp diễn',
    slug: 'hien-tai-don-hien-tai-tiep-dien',
    description: 'Học cách phân biệt và chia động từ ở hai thì cơ bản: Hiện tại đơn (diễn tả thói quen, sự thật hiển nhiên) và Hiện tại tiếp diễn (diễn tả hành động đang diễn ra tại thời điểm nói hoặc một xu hướng thay đổi). Đây là chủ điểm ngữ pháp cốt lõi của Unit 1: Family Life.',
    exampleQuestionId: 'eng10-q1',
    theory: [
      '**1. Thì Hiện tại đơn (Present Simple)**:\n- **Công thức**: \n  * Động từ thường: $S + V(s/es)$\n  * Động từ tobe: $S + am/is/are + adj/noun$\n- **Cách dùng chính**:\n  * Diễn tả một thói quen, hành động lặp đi lặp lại ở hiện tại (ví dụ: *I usually do the laundry on weekends*).\n  * Diễn tả một sự thật hiển nhiên, chân lý (ví dụ: *The sun rises in the east*).\n- **Dấu hiệu nhận biết**: Các trạng từ chỉ tần suất như *always, usually, often, sometimes, rarely, never, every day/week/month*...',
      '**2. Thì Hiện tại tiếp diễn (Present Continuous)**:\n- **Công thức**: $S + am/is/are + V-ing$\n- **Cách dùng chính**:\n  * Diễn tả hành động đang xảy ra ngay tại thời điểm nói (ví dụ: *Listen! Someone is singing*).\n  * Diễn tả một hành động mang tính chất tạm thời (ví dụ: *I am staying with my uncle this week*).\n  * Diễn tả một xu hướng biến đổi dần dần (đi kèm các động từ *get, become, grow* - ví dụ: *Green technology is becoming popular*).\n- **Dấu hiệu nhận biết**: *now, right now, at the moment, at present*, hoặc các câu mệnh lệnh gây chú ý như *Look!, Listen!, Be quiet!*...',
      '**3. Lưu ý đặc biệt về Động từ trạng thái (State Verbs)**:\n- Các động từ chỉ trạng thái cảm xúc, nhận thức, sở hữu như *like, love, hate, know, believe, understand, want, remember, see, hear, possess*... **không chia ở thì tiếp diễn** ngay cả khi câu có dấu hiệu hiện tại tiếp diễn (ví dụ: viết *I understand the lesson now*, không viết *I am understanding...*).'
    ],
    subTypes: [
      {
        name: 'Chia động từ ở Hiện tại đơn',
        example: 'My mother (cook) __________ dinner for the family every evening.',
        note: 'Chủ ngữ "My mother" là ngôi thứ ba số ít, câu diễn tả thói quen hàng ngày (every evening) nên chia Hiện tại đơn: cooks.'
      },
      {
        name: 'Chia động từ ở Hiện tại tiếp diễn',
        example: 'Look! The dog (chase) __________ the cat in the garden.',
        note: 'Có từ mệnh lệnh "Look!" chỉ hành động đang diễn ra nên chia Hiện tại tiếp diễn: is chasing.'
      },
      {
        name: 'Sử dụng động từ trạng thái ở Hiện tại đơn',
        example: 'At the moment, I (want) __________ to buy a new laptop.',
        note: 'Dù có "At the moment" nhưng "want" là động từ trạng thái chỉ mong muốn, không chia tiếp diễn. Đáp án đúng là: want.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi yêu cầu chia thì của động từ trong ngoặc hoặc chọn phương án trắc nghiệm đúng.',
      'Câu có các trạng từ chỉ tần suất (*always, usually, often*) hoặc trạng từ chỉ thời điểm tiếp diễn (*now, at the moment, Look!, Listen!*).'
    ],
    solvingSteps: [
      'Bước 1: Tìm các trạng từ chỉ thời gian hoặc từ khóa mang tính chất mệnh lệnh để xác định thời điểm hành động.',
      'Bước 2: Phân tích động từ trong câu xem đó là động từ chỉ hành động (action verb) hay động từ trạng thái (state verb).',
      'Bước 3: Xác định ngôi và số (ít hay nhiều) của chủ ngữ để chia dạng động từ tương thích (ví dụ chủ ngữ số ít thêm s/es ở hiện tại đơn).'
    ],
    commonMistakes: [
      'Quên thêm "s/es" khi chủ ngữ là danh từ số ít ở Hiện tại đơn.',
      'Chia Hiện tại tiếp diễn cho các động từ trạng thái như *like, want, know*.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt2',
    topicId: 'eng10-t2',
    name: 'Tương lai với "Will" vs. "Be going to"',
    slug: 'tuong-lai-will-va-be-going-to',
    description: 'Phân biệt cách nói về các hành động trong tương lai bằng cách sử dụng trợ động từ "will" (quyết định tức thì, dự đoán cá nhân) và cấu trúc "be going to" (kế hoạch sẵn có, dự đoán có căn cứ). Đây là phần trọng tâm ngữ pháp của Unit 2: Humans and the Environment.',
    exampleQuestionId: 'eng10-q11',
    theory: [
      '**1. Cách dùng "Will" (Tương lai đơn)**:\n- **Cấu trúc**: $S + will + V-bare$\n- **Cách dùng**:\n  * Đưa ra quyết định ngay tại thời điểm nói (ví dụ: *A: "The phone is ringing." B: "I will answer it."*).\n  * Dự đoán tương lai dựa trên ý kiến cá nhân, không có căn cứ rõ ràng (thường đi với *think, believe, hope, perhaps*).\n  * Diễn tả một lời hứa, lời đe dọa hoặc lời đề nghị giúp đỡ (ví dụ: *I will help you carry these bags*).',
      '**2. Cách dùng "Be going to" (Tương lai gần)**:\n- **Cấu trúc**: $S + am/is/are + going + to + V-bare$\n- **Cách dùng**:\n  * Diễn tả một kế hoạch, dự định đã được lên lịch từ trước khi nói (ví dụ: *We are going to visit our grandparents this weekend*).\n  * Đưa ra dự đoán về tương lai dựa trên những dấu hiệu thực tế ở hiện tại (ví dụ: *Look at those dark clouds! It is going to rain*).'
    ],
    subTypes: [
      {
        name: 'Quyết định tức thời (Will)',
        example: 'A: "There is no milk left." B: "Oh, really? I (go) __________ to the supermarket to buy some."',
        note: 'Người nói B chỉ quyết định đi mua sữa sau khi nghe tin hết sữa (quyết định tức thời), do đó dùng: will go.'
      },
      {
        name: 'Kế hoạch chuẩn bị sẵn (Be going to)',
        example: 'I have bought the tickets. We (watch) __________ a football match this Saturday.',
        note: 'Hành động mua vé chứng tỏ kế hoạch đã được chuẩn bị sẵn từ trước, dùng: are going to watch.'
      },
      {
        name: 'Dự đoán có căn cứ thực tế (Be going to)',
        example: 'Look at the driver! He is driving too fast. He (crash) __________ into that tree.',
        note: 'Dấu hiệu thực tế "driving too fast" cho thấy một tai nạn sắp xảy ra, dùng: is going to crash.'
      }
    ],
    recognitionSigns: [
      'Câu chứa các ngữ cảnh hội thoại biểu thị phản ứng nhanh (A nói - B đáp).',
      'Câu chứa các bằng chứng rõ ràng ở hiện tại (*dark clouds, ticket bought, driving too fast*).'
    ],
    solvingSteps: [
      'Bước 1: Xác định xem hành động tương lai này là dự định đã lên lịch trước đó hay quyết định phát sinh ngay lúc đối thoại.',
      'Bước 2: Nếu là dự đoán, xem xét có dấu hiệu hoặc bằng chứng thực tế tại hiện trường hay chỉ là dự đoán cảm tính (think/hope).',
      'Bước 3: Chia động từ thích hợp. Chú ý chia động từ "to be" (am/is/are) cho cấu trúc "be going to" hợp với chủ ngữ.'
    ],
    commonMistakes: [
      'Sử dụng nhầm "will" cho các kế hoạch đã lên lịch từ trước.',
      'Quên chia động từ "to be" khi viết cấu trúc "going to" (ví dụ viết nhầm: *He going to play*).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt3',
    topicId: 'eng10-t2',
    name: 'Câu bị động (Passive Voice) của các thì cơ bản',
    slug: 'cau-bi-dong-thi-co-ban',
    description: 'Học sinh hiểu bản chất của câu bị động và làm chủ kỹ năng biến đổi từ câu chủ động sang câu bị động, cũng như cách chia động từ bị động ở các thì Hiện tại đơn, Quá khứ đơn, Hiện tại hoàn thành và Tương lai đơn. Chủ điểm xuất hiện ở Unit 2: Humans and the Environment.',
    exampleQuestionId: 'eng10-q16',
    theory: [
      '**1. Nguyên tắc biến đổi câu bị động**:\n- **Chủ động**: $S_{chủ} + V + O_{chủ}$\n- **Bị động**: $S_{bị} (O_{chủ}) + be + V_{3/ed} + [by + O_{bị} (S_{chủ})]$\n- **Lưu ý**:\n  * Động từ "to be" được chia theo thì của câu chủ động và hợp số ít/nhiều với chủ ngữ mới.\n  * Trạng từ chỉ nơi chốn đứng trước *by + O* (ví dụ: *in the kitchen by my mom*).\n  * Trạng từ chỉ thời gian đứng sau *by + O* (ví dụ: *by my mom yesterday*).',
      '**2. Công thức câu bị động ở các thì cơ bản**:\n- **Hiện tại đơn**: $S + am/is/are + V_{3/ed}$\n- **Quá khứ đơn**: $S + was/were + V_{3/ed}$\n- **Hiện tại hoàn thành**: $S + has/have + been + V_{3/ed}$\n- **Tương lai đơn**: $S + will + be + V_{3/ed}$'
    ],
    subTypes: [
      {
        name: 'Bị động thì Hiện tại đơn',
        example: 'Garbage (collect) __________ by the sanitation workers every day.',
        note: 'Chủ ngữ "Garbage" không tự thu gom mà được thu gom (bị động). Trạng từ "every day" chỉ thì hiện tại đơn. Garbage là danh từ không đếm được (số ít) nên chia: is collected.'
      },
      {
        name: 'Bị động thì Quá khứ đơn',
        example: 'The book (write) __________ by a young author in 2020.',
        note: 'Mốc thời gian "in 2020" ở quá khứ, câu mang nghĩa bị động: was written.'
      },
      {
        name: 'Bị động thì Tương lai đơn',
        example: 'A new eco-friendly park (build) __________ in this area next year.',
        note: 'Dấu hiệu "next year" chỉ tương lai đơn, câu bị động: will be built.'
      }
    ],
    recognitionSigns: [
      'Chủ ngữ của câu là danh từ chỉ vật hoặc danh từ không thể tự thực hiện hành động chính.',
      'Trong câu thường xuất hiện giới từ "by" đứng trước tác nhân gây ra hành động.'
    ],
    solvingSteps: [
      'Bước 1: Xác định thì của câu dựa vào các trạng từ chỉ thời gian (*every day, yesterday, next week, since 2010*).',
      'Bước 2: Kiểm tra xem chủ ngữ có khả năng tự thực hiện hành động hay không để xác định câu mang nghĩa bị động.',
      'Bước 3: Lắp ráp công thức bị động của thì đó: Be + V3/ed (lưu ý đổi động từ sang dạng quá khứ phân từ và chia động từ be hợp với số của chủ ngữ).'
    ],
    commonMistakes: [
      'Nhầm lẫn phân từ hai của các động từ bất quy tắc (ví dụ viết *writed* thay vì *written*, *buyed* thay vì *bought*).',
      'Quên chia động từ "to be" theo số ít/số nhiều của chủ ngữ mới.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt4',
    topicId: 'eng10-t3',
    name: 'Động từ nguyên mẫu có To và không To (To-V & Bare-V)',
    slug: 'dong-tu-nguyen-mau-to-va-bare-v',
    description: 'Học cách phân loại các động từ đi sau bởi động từ nguyên mẫu có "to" (to-infinitive) và động từ nguyên mẫu không "to" (bare infinitive). Chủ điểm xuất hiện ở Unit 3: Music.',
    exampleQuestionId: 'eng10-q21',
    theory: [
      '**1. Động từ nguyên mẫu có "To" (To-infinitive)**:\n- Theo sau các động từ diễn tả ý định, mong muốn, quyết định, kế hoạch: *decide, want, hope, plan, promise, agree, refuse, expect, manage, offer, seem, choose*...\n- Công thức: $S + V_1 + to-V_2$\n- Ví dụ: *She decided to enter the music contest.*',
      '**2. Động từ nguyên mẫu không "To" (Bare infinitive / V-bare)**:\n- Theo sau các động từ khuyết thiếu: *can, could, may, might, should, must*...\n- Theo sau các động từ cầu khiến, chỉ giác quan: *make, let, hear, see, watch* (cấu trúc: *make/let + O + V-bare*).\n- Ví dụ: *My parents let me go to the music concert.*'
    ],
    subTypes: [
      {
        name: 'Động từ đi với To-V',
        example: 'He promises (practice) __________ the piano every day before school.',
        note: 'Sau động từ "promise" là to-V, chia: to practice.'
      },
      {
        name: 'Động từ đi với Bare-V',
        example: 'The upbeat music made us (feel) __________ energetic and happy.',
        note: 'Áp dụng cấu trúc cầu khiến: make + O + V-bare. Do đó chia: feel.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi kiểm tra dạng động từ đứng sau các động từ chính cho sẵn (*decide, make, let, promise*).'
    ],
    solvingSteps: [
      'Bước 1: Xác định động từ chính đứng liền trước khoảng trống cần chia.',
      'Bước 2: Tra cứu động từ chính đó thuộc nhóm đi với to-infinitive hay bare infinitive (hoặc cấu trúc V + O + V-bare).',
      'Bước 3: Chọn phương án phù hợp.'
    ],
    commonMistakes: [
      'Dùng V-ing sau các từ như *decide, plan* vì dịch nghĩa tiếng Việt là "quyết định việc gì đó".'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt7',
    topicId: 'eng10-t3',
    name: 'Câu ghép với các liên từ kết hợp (Compound Sentences)',
    slug: 'cau-ghep-lien-tu-ket-hop',
    description: 'Sử dụng các liên từ kết hợp (and, or, but, so) để liên kết hai mệnh đề độc lập thành một câu ghép hoàn chỉnh. Đây là ngữ pháp trọng tâm của Unit 3: Music.',
    exampleQuestionId: 'eng10-q26',
    theory: [
      '**Câu ghép với các liên từ kết hợp (Coordinating Conjunctions)**:\n- Sử dụng các liên từ **FANBOYS** (phổ biến nhất ở lớp 10 là *and, or, but, so*) để nối hai mệnh đề độc lập. Luôn có dấu phẩy đứng trước liên từ khi nối hai mệnh đề độc lập:\n  * **and**: dùng để bổ sung thông tin tương đồng (ví dụ: *She loves classical music, and she also plays the violin*).\n  * **but**: dùng để diễn tả sự đối lập, tương phản (ví dụ: *He wanted to attend the concert, but he could not buy the tickets*).\n  * **or**: dùng để diễn tả sự lựa chọn, thay thế (ví dụ: *You can practice singing at home, or you can join a music class*).\n  * **so**: dùng để chỉ kết quả, hậu quả của hành động trước đó (ví dụ: *The melody is catchy, so the song becomes a hit*).'
    ],
    subTypes: [
      {
        name: 'Liên từ and (bổ sung)',
        example: 'She plays the guitar, __________ she also composes her own songs.',
        note: 'Hai vế tương đồng bổ sung ý nghĩa cho nhau, dùng: and.'
      },
      {
        name: 'Liên từ but (đối lập)',
        example: 'I wanted to see the show, __________ I was too busy.',
        note: 'Vế sau thể hiện sự cản trở tương phản với vế trước, dùng: but.'
      },
      {
        name: 'Liên từ or (lựa chọn)',
        example: 'We can go to the concert, __________ we can watch it live on TV.',
        note: 'Hai phương án hành động có thể lựa chọn thay thế nhau, dùng: or.'
      },
      {
        name: 'Liên từ so (kết quả)',
        example: 'The weather was bad, __________ the outdoor concert was cancelled.',
        note: 'Vế sau là kết quả trực tiếp của nguyên nhân thời tiết xấu ở vế trước, dùng: so.'
      }
    ],
    recognitionSigns: [
      'Câu kiểm tra trắc nghiệm chọn liên từ thích hợp (*and, or, but, so*) đứng sau dấu phẩy để nối hai mệnh đề.'
    ],
    solvingSteps: [
      'Bước 1: Đọc và dịch nghĩa cả hai mệnh đề độc lập.',
      'Bước 2: Phân tích mối quan hệ logic giữa hai mệnh đề (đối lập, lựa chọn, nhân quả hay bổ sung).',
      'Bước 3: Chọn liên từ tương ứng phù hợp nhất.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa so (kết quả) và but (tương phản).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt5',
    topicId: 'eng10-t4',
    name: 'Quá khứ đơn vs. Quá khứ tiếp diễn với When/While',
    slug: 'qua-khu-don-va-qua-khu-tiep-dien-when-while',
    description: 'Cách kết hợp hai thì quá khứ trong cùng một câu để diễn đạt các hành động cắt ngang nhau hoặc song song diễn ra trong quá khứ thông qua liên từ "when" và "while". Đây là điểm ngữ pháp cốt lõi của Unit 4: For a Better Community.',
    exampleQuestionId: 'eng10-q31',
    theory: [
      '**1. Hành động xen vào nhau (Interrupted Actions)**:\n- Diễn tả một hành động **đang diễn ra** ở quá khứ (chia Quá khứ tiếp diễn) thì một hành động khác **xen ngang** vào (chia Quá khứ đơn).\n- **Cấu trúc liên kết**:\n  * $S + was/were + V-ing + when + S + V_{2/ed}$\n  * $When + S + V_{2/ed}, S + was/were + V-ing$\n  * $S + V_{2/ed} + while + S + was/were + V-ing$\n- Ví dụ: *We were collecting garbage when it started to rain.* (Chúng tôi đang gom rác thì trời bắt đầu mưa - gom rác là đang diễn ra, mưa là xen ngang).',
      '**2. Hai hành động song song (Parallel Actions)**:\n- Diễn tả hai hành động **xảy ra đồng thời, song song** tại cùng một thời điểm trong quá khứ (cả hai động từ đều chia Quá khứ tiếp diễn, thường đi với *while*).\n- **Cấu trúc**: $S + was/were + V-ing + while + S + was/were + V-ing$\n- Ví dụ: *While I was cleaning the beach, my friends were planting trees.*'
    ],
    subTypes: [
      {
        name: 'Hành động đang diễn ra bị cắt ngang (vế when)',
        example: 'When the volunteers arrived at the nursing home, the elderly residents (have) __________ breakfast.',
        note: 'Hành động các cụ già đang ăn sáng là hành động đang diễn ra (chia QKTD), hành động tình nguyện viên đến là xen ngang (chia QKĐ). Resident là số nhiều nên chia: were having.'
      },
      {
        name: 'Hành động đang diễn ra bị cắt ngang (vế while)',
        example: 'While we (clean) __________ up the schoolyard, a sudden storm broke out.',
        note: 'Sau "While" diễn tả hành động đang diễn ra trong quá khứ, chia QKTD. Chủ ngữ "we" là số nhiều nên chia: were cleaning.'
      },
      {
        name: 'Hai hành động song song xảy ra đồng thời',
        example: 'While my brother was cooking, I (sweep) __________ the floor.',
        note: 'Hai hành động diễn ra song song cùng lúc trong quá khứ, cả hai cùng chia QKTD. Chia: was sweeping.'
      }
    ],
    recognitionSigns: [
      'Câu chứa hai hành động trong quá khứ có các liên từ nối *when* hoặc *while*.',
      'Một trong các động từ đã được chia sẵn ở Quá khứ đơn hoặc Quá khứ tiếp diễn, yêu cầu chia động từ còn lại.'
    ],
    solvingSteps: [
      'Bước 1: Xác định mối quan hệ giữa hai hành động (xen vào nhau hay song song đồng thời).',
      'Bước 2: Xác định hành động nào kéo dài hơn (chia Quá khứ tiếp diễn: was/were + V-ing) và hành động nào đột ngột cắt ngang (chia Quá khứ đơn: V2/ed).',
      'Bước 3: Chia động từ chú ý sự phù hợp giữa tobe (was/were) và chủ ngữ số ít/số nhiều.'
    ],
    commonMistakes: [
      'Chia sai dạng động từ tobe (dùng *was* cho chủ ngữ số nhiều hoặc ngược lại).',
      'Chia nhầm thì giữa hành động xen ngang và hành động đang diễn ra.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt6',
    topicId: 'eng10-t5',
    name: 'Thì Hiện tại hoàn thành (Present Perfect)',
    slug: 'thi-hien-tai-hoan-thanh',
    description: 'Nắm vững cấu trúc, cách dùng thì Hiện tại hoàn thành để diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại, hoặc một kinh nghiệm, trải nghiệm thực tế. Đây là phần ngữ pháp trọng tâm của Unit 5: Inventions.',
    exampleQuestionId: 'eng10-q41',
    theory: [
      '**Thì Hiện tại hoàn thành (Present Perfect)**:\n- **Công thức**: \n  * Khẳng định: $S + has/have + V_{3/ed}$\n  * Phủ định: $S + has/have + not + V_{3/ed}$\n  * Nghi vấn: $Have/Has + S + V_{3/ed}?$\n- **Cách dùng chính**:\n  * Diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại và có thể tiếp diễn trong tương lai (thường đi với *since* + mốc thời gian, *for* + khoảng thời gian).\n  * Diễn tả hành động đã hoàn thành tính đến thời điểm hiện tại nhưng không nói rõ thời gian (diễn tả kinh nghiệm, trải nghiệm, đi với *ever, never, already, yet, before*).\n  * Diễn tả hành động vừa mới xảy ra (đi với *just, recently*).'
    ],
    subTypes: [
      {
        name: 'Chia động từ ở Hiện tại hoàn thành với since/for',
        example: 'Scientists (develop) __________ many useful inventions since the turn of the century.',
        note: 'Có dấu hiệu "since + mốc thời gian" nên chia Hiện tại hoàn thành. Chủ ngữ "Scientists" số nhiều nên dùng "have": have developed.'
      },
      {
        name: 'Trải nghiệm với ever/never',
        example: 'Have you ever (use) __________ a 3D printer before?',
        note: 'Cấu trúc câu hỏi trải nghiệm với "ever", chia động từ phân từ hai: used.'
      },
      {
        name: 'Câu phủ định với yet',
        example: 'He has not (finish) __________ his science essay yet.',
        note: 'Có trạng từ "yet" đứng cuối câu phủ định của thì Hiện tại hoàn thành. Chia: finished.'
      }
    ],
    recognitionSigns: [
      'Câu chứa các trạng từ thời gian đặc trưng: *since, for, already, yet, ever, never, just, recently, so far*.'
    ],
    solvingSteps: [
      'Bước 1: Tìm các trạng từ chỉ thời gian báo hiệu thì Hiện tại hoàn thành.',
      'Bước 2: Phân tích số ít hay số nhiều của chủ ngữ để chọn trợ động từ tương ứng: "has" (số ít) hoặc "have" (số nhiều, I, we, you, they).',
      'Bước 3: Chuyển đổi động từ chính sang dạng phân từ hai cột 3 (V3/ed).'
    ],
    commonMistakes: [
      'Chia sai động từ cột 3 của các động từ bất quy tắc.',
      'Dùng nhầm "has" cho chủ ngữ số nhiều hoặc ngược lại.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt8',
    topicId: 'eng10-t5',
    name: 'Danh động từ & Động từ nguyên mẫu (Gerunds & Infinitives)',
    slug: 'danh-dong-tu-va-dong-tu-nguyen-mau-unit5',
    description: 'Học cách sử dụng Danh động từ (V-ing) làm tân ngữ của một số động từ đặc biệt và giới từ, hoặc dùng cụm To-V và V-ing để chỉ mục đích, chức năng sử dụng của các phát minh. Chủ điểm xuất hiện ở Unit 5: Inventions.',
    exampleQuestionId: 'eng10-q43',
    theory: [
      '**1. Danh động từ (Gerunds / V-ing) làm tân ngữ**:\n- Theo sau các động từ đặc biệt như: *avoid, enjoy, mind, dislike, practice, spend (time), postpone, finish, recommend*...\n- Theo sau các giới từ: *about, of, in, for, on, at*...\n- Ví dụ: *We should avoid spending too much time on phones.*',
      '**2. Cấu trúc chỉ mục đích và chức năng (Purpose and Function)**:\n- **Chỉ mục đích của người (To-V)**: Sử dụng để diễn tả lý do ai đó làm việc gì.\n  * Cấu trúc: $S + V + to-V-bare$\n  * Ví dụ: *I use my laptop to study online.* (Tôi dùng laptop để học trực tuyến).\n- **Chỉ chức năng của vật (For + V-ing hoặc To-V)**: Sử dụng để mô tả công dụng của một công cụ, phát minh.\n  * Cấu trúc: $S + be + used + for + V-ing$ hoặc $S + be + used + to + V-bare$\n  * Ví dụ: *Robotic vacuum is used for cleaning floors* hoặc *is used to clean floors*.'
    ],
    subTypes: [
      {
        name: 'Danh động từ làm tân ngữ sau động từ chỉ sở thích/phòng tránh',
        example: 'We should avoid (use) __________ single-use plastic bags to protect the environment.',
        note: 'Sau động từ "avoid" là V-ing, chia: using.'
      },
      {
        name: 'Danh động từ chỉ mục đích sau giới từ',
        example: 'This smart device is used for (track) __________ daily calorie intake.',
        note: 'Sau giới từ "for" chỉ mục đích sử dụng của đồ vật, ta dùng động từ dạng V-ing. Chia: tracking.'
      },
      {
        name: 'Động từ nguyên mẫu chỉ mục đích của người',
        example: 'I bought this e-reader (read) __________ books anywhere.',
        note: 'Người nói mua máy đọc sách nhằm mục đích đọc sách (chỉ mục đích của người), dùng: to read.'
      }
    ],
    recognitionSigns: [
      'Câu có động từ chính là các từ yêu cầu theo sau là V-ing như *avoid, enjoy, spend, practice* hoặc có chứa giới từ.',
      'Câu hỏi kiểm tra cấu trúc chỉ mục đích của các phát minh công nghệ (*used for V-ing* hoặc *used to V*).'
    ],
    solvingSteps: [
      'Bước 1: Xác định xem vị trí cần chia động từ đứng sau động từ chỉ hoạt động, sau giới từ, hay đứng trong cấu trúc chỉ công dụng (*be used for*).',
      'Bước 2: Lựa chọn dạng động từ thích hợp: V-ing sau giới từ hoặc sau động từ đặc trưng; To-V nếu chỉ mục đích của người thực hiện.',
      'Bước 3: Chọn phương án phù hợp.'
    ],
    commonMistakes: [
      'Lẫn lộn cấu trúc giữa *be used to + V-bare* (được dùng để làm gì) và *be used for + V-ing* (được dùng cho việc gì).',
      'Nhầm lẫn cấu trúc chỉ mục đích của người (dùng To-V) thành V-ing.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt9',
    topicId: 'eng10-t1',
    name: 'Từ vựng trọng tâm: Family Life',
    slug: 'tu-vung-family-life',
    description: 'Học và làm chủ các từ vựng chủ chốt liên quan đến cuộc sống gia đình, công việc nhà, vai trò và trách nhiệm của các thành viên. Chủ điểm thuộc Unit 1: Family Life.',
    exampleQuestionId: 'eng10-q2',
    theory: [
      '**Danh sách từ vựng trọng tâm (Unit 1)**:\n\n1. **Breadwinner** (n) /ˈbredwɪnə(r)/: người trụ cột (kiếm tiền chính trong gia đình).\n   * *Example*: In many traditional societies, the husband is the breadwinner.\n\n2. **Homemaker** (n) /ˈhəʊmmeɪkə(r)/: người nội trợ (chăm sóc gia đình, dọn dẹp nhà cửa).\n   * *Example*: After retiring, she decided to be a homemaker to take care of her kids.\n\n3. **Household chores** (n.phr) /ˈhaʊshəʊld tʃɔːz/: công việc nhà (lau nhà, rửa bát, nấu ăn).\n   * *Example*: We split the household chores equally among family members.\n\n4. **Heavy lifting** (n.phr) /ˌhevi ˈlɪftɪŋ/: việc nặng nhọc (mang vác nặng).\n   * *Example*: In my house, my father and older brother do the heavy lifting.\n\n5. **Groceries** (n) /ˈɡrəʊsəriz/: thực phẩm, đồ tạp hóa.\n   * *Example*: I usually help my mother buy groceries at the supermarket on Sundays.'
    ],
    subTypes: [
      {
        name: 'Nhận diện nghĩa của từ',
        example: 'A __________ is a person who manages the home and raises children instead of earning money.',
        note: 'Định nghĩa chỉ người nội trợ, từ thích hợp là: homemaker.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi yêu cầu hoàn thành câu với từ vựng phù hợp nhất về chủ đề gia đình.'
    ],
    solvingSteps: [
      'Bước 1: Đọc kỹ ngữ cảnh và định nghĩa của các từ lựa chọn.',
      'Bước 2: Tìm các từ bổ trợ xung quanh (ví dụ: earn money -> breadwinner, housework -> chores).',
      'Bước 3: Lựa chọn từ có ý nghĩa và từ loại phù hợp nhất.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa homemaker (người nội trợ) và breadwinner (trụ cột tài chính).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt10',
    topicId: 'eng10-t2',
    name: 'Từ vựng trọng tâm: Humans and the Environment',
    slug: 'tu-vung-humans-and-environment',
    description: 'Học và làm chủ các từ vựng về lối sống xanh, bảo vệ môi trường, các hoạt động tái chế và ảnh hưởng của con người. Chủ điểm thuộc Unit 2: Humans and the Environment.',
    exampleQuestionId: 'eng10-q16',
    theory: [
      '**Danh sách từ vựng trọng tâm (Unit 2)**:\n\n1. **Eco-friendly** (adj) /ˌiːkəʊ ˈfrendli/: thân thiện với môi trường.\n   * *Example*: Using public transport is more eco-friendly than driving cars.\n\n2. **Carbon footprint** (n.phr) /ˌkɑːbən ˈfʊtprɪnt/: lượng khí thải carbon, dấu chân carbon.\n   * *Example*: Planting more trees is a great way to reduce your carbon footprint.\n\n3. **Green living** (n.phr) /ˌɡriːn ˈlɪvɪŋ/: lối sống xanh (bảo vệ môi trường).\n   * *Example*: More people are adopting green living by recycling and using solar energy.\n\n4. **Single-use** (adj) /ˌsɪŋɡl ˈjuːs/: chỉ dùng một lần (như cốc nhựa, túi nilon).\n   * *Example*: We should ban single-use plastics to protect our oceans.\n\n5. **Pollute** (v) /pəˈluːt/: làm ô nhiễm (nguồn nước, không khí).\n   * *Example*: Toxic waste from factories can pollute nearby rivers.'
    ],
    subTypes: [
      {
        name: 'Chọn từ vựng bảo vệ môi trường',
        example: 'We are trying to reduce our __________ by saving electricity.',
        note: 'Tiết kiệm điện giúp giảm lượng khí thải carbon, từ phù hợp: carbon footprint.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi điền từ liên quan đến các vấn đề môi trường, rác thải hoặc năng lượng sạch.'
    ],
    solvingSteps: [
      'Bước 1: Phân tích ngữ cảnh câu (ví dụ nói về túi nhựa dùng một lần -> single-use).',
      'Bước 2: Xác định từ loại cần điền (danh từ, động từ hay tính từ).',
      'Bước 3: Chọn từ đúng nghĩa.'
    ],
    commonMistakes: [
      'Không phân biệt được giữa tính từ eco-friendly và danh từ/cụm danh từ green living.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt11',
    topicId: 'eng10-t3',
    name: 'Từ vựng trọng tâm: Music',
    slug: 'tu-vung-music',
    description: 'Học và làm chủ các từ vựng về thể loại nhạc, nhạc cụ, các cuộc thi âm nhạc và buổi biểu diễn. Chủ điểm thuộc Unit 3: Music.',
    exampleQuestionId: 'eng10-q21',
    theory: [
      '**Danh sách từ vựng trọng tâm (Unit 3)**:\n\n1. **Phenomenon** (n) /fəˈnɒmɪnən/: hiện tượng (sự việc, người nổi bật lạ thường).\n   * *Example*: The young singer became a global music phenomenon overnight.\n\n2. **Instrument** (n) /ˈɪnstrəmənt/: nhạc cụ (đàn, sáo, trống...).\n   * *Example*: The violin is a very difficult musical instrument to play.\n\n3. **Audience** (n) /ˈɔːdiəns/: khán giả, thính giả (người xem buổi biểu diễn).\n   * *Example*: The audience cheered loudly at the end of the concert.\n\n4. **Talented** (adj) /ˈtæləntɪd/: tài năng, có khiếu.\n   * *Example*: She is a talented pianist who started playing at the age of four.\n\n5. **Contest** (n) /ˈkɒntest/: cuộc thi (tài năng, ca hát).\n   * *Example*: Thousands of people signed up for the singing contest.'
    ],
    subTypes: [
      {
        name: 'Chọn từ vựng nhạc cụ/nghệ sĩ',
        example: 'He can play many musical __________ like the drums, guitar, and piano.',
        note: 'Đàn, trống là các nhạc cụ, từ thích hợp: instruments.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi chứa các từ khóa về buổi biểu diễn, ban nhạc, ca sĩ, cuộc thi âm nhạc.'
    ],
    solvingSteps: [
      'Bước 1: Xác định chủ đề âm nhạc của câu.',
      'Bước 2: Đối chiếu từ loại và ngữ cảnh (khán giả xem biểu diễn -> audience).',
      'Bước 3: Chọn từ vựng thích hợp.'
    ],
    commonMistakes: [
      'Viết sai danh từ số nhiều phenomenon (số nhiều là phenomena).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt12',
    topicId: 'eng10-t4',
    name: 'Từ vựng trọng tâm: For a Better Community',
    slug: 'tu-vung-for-a-better-community',
    description: 'Học và làm chủ các từ vựng về hoạt động tình nguyện, phát triển cộng đồng, quyên góp và các tổ chức phi lợi nhuận. Chủ điểm thuộc Unit 4: For a Better Community.',
    exampleQuestionId: 'eng10-q37',
    theory: [
      '**Danh sách từ vựng trọng tâm (Unit 4)**:\n\n1. **Volunteer** (n/v) /ˌvɒlənˈtɪə(r)/: tình nguyện viên, làm tình nguyện.\n   * *Example*: She works as a volunteer at the local children\'s hospital.\n\n2. **Non-profit** (adj) /ˌnɒn ˈprɒfɪt/: phi lợi nhuận.\n   * *Example*: They set up a non-profit organization to help disabled children.\n\n3. **Remote** (adj) /rɪˈməʊt/: xa xôi, hẻo lánh (nơi khó tiếp cận).\n   * *Example*: The group built schools for kids living in remote villages.\n\n4. **Donate** (v) /dəʊˈneɪt/: quyên góp, hiến tặng.\n   * *Example*: People donated food and warm clothes to the flood victims.\n\n5. **Charity** (n) /ˈtʃærəti/: từ thiện (tổ chức quyên góp giúp đỡ người nghèo).\n   * *Example*: Half of the concert proceeds will be given to local charities.'
    ],
    subTypes: [
      {
        name: 'Chọn từ vựng chủ đề thiện nguyện',
        example: 'We decided to __________ some books and school things to children in need.',
        note: 'Quyên góp sách và đồ dùng cho trẻ em khó khăn, động từ thích hợp: donate.'
      }
    ],
    recognitionSigns: [
      'Câu chứa các từ khóa cứu trợ, quyên góp, mái ấm, vùng cao hẻo lánh.'
    ],
    solvingSteps: [
      'Bước 1: Tìm hiểu nghĩa tổng quát của câu (giúp đỡ người nghèo, quyên góp đồ dùng).',
      'Bước 2: Chọn từ loại thích hợp (động từ, danh từ hoặc tính từ).',
      'Bước 3: Chọn từ đúng nghĩa.'
    ],
    commonMistakes: [
      'Nhầm lẫn vai trò ngữ pháp của volunteer (vừa là danh từ vừa là động từ) và voluntary (tính từ).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt13',
    topicId: 'eng10-t5',
    name: 'Từ vựng trọng tâm: Inventions',
    slug: 'tu-vung-inventions',
    description: 'Học và làm chủ các từ vựng về phát minh, thiết bị thông minh, công nghệ số và trí tuệ nhân tạo. Chủ điểm thuộc Unit 5: Inventions.',
    exampleQuestionId: 'eng10-q41',
    theory: [
      '**Danh sách từ vựng trọng tâm (Unit 5)**:\n\n1. **Invention** (n) /in\'venʃn/: phát minh, sáng chế.\n   * *Example*: The internet is considered one of the greatest inventions of all time.\n\n2. **Device** (n) /dɪˈvaɪs/: thiết bị, dụng cụ công nghệ.\n   * *Example*: Smartphones are useful devices that help us stay connected.\n\n3. **Processor** (n) /ˈprəʊsesə(r)/: bộ vi xử lý (trong máy tính/điện thoại).\n   * *Example*: The computer runs very fast because it has a powerful processor.\n\n4. **Robotic** (adj) /rəʊˈbɒtɪk/: thuộc về robot (tự động hóa).\n   * *Example*: They bought a robotic vacuum to clean the house.\n\n5. **AI (Artificial Intelligence)** (n.phr) /ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/: trí tuệ nhân tạo.\n   * *Example*: AI is playing an increasingly important role in our daily lives.'
    ],
    subTypes: [
      {
        name: 'Chọn từ vựng chủ đề công nghệ',
        example: 'A smartphone is a pocket-sized __________ that has many smart features.',
        note: 'Điện thoại thông minh là một thiết bị công nghệ, từ thích hợp: device.'
      }
    ],
    recognitionSigns: [
      'Câu chứa các từ khóa về thiết bị phần cứng, phần mềm, robot, sáng chế khoa học.'
    ],
    solvingSteps: [
      'Bước 1: Xác định ngữ cảnh phát minh hoặc công nghệ của câu.',
      'Bước 2: Phân tích từ loại và ý nghĩa từ cần điền.',
      'Bước 3: Chọn từ vựng đúng.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa invention (sự phát minh - vật mới hoàn toàn) và discovery (sự khám phá - vật đã có sẵn trong tự nhiên).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt14',
    topicId: 'eng10-t1',
    name: 'Phát âm cụm phụ âm /br/, /kr/, /tr/',
    slug: 'phat-am-cum-phu-am-br-kr-tr',
    description: 'Học cách nhận biết, phát âm và phân biệt các cụm phụ âm ghép bắt đầu bằng /b/, /k/, /t/ kết hợp với âm /r/ trong Unit 1: Family Life.',
    exampleQuestionId: 'eng10-q76',
    theory: [
      '**Cụm phụ âm ghép (Consonant Clusters)**:\n- **Cụm /br/**: Hai âm /b/ và /r/ được phát âm liền nhau rất nhanh, không có nguyên âm xen giữa.\n  * Ví dụ: *bread* /bred/, *brother* /ˈbrʌðə(r)/, *brainwinner* (hoặc *breadwinner* /ˈbredwɪnə(r)/).\n- **Cụm /kr/**: Âm /k/ và /r/ kết hợp.\n  * Ví dụ: *crash* /kræʃ/, *create* /kriˈeɪt/, *cricket* /ˈkrɪkɪt/.\n- **Cụm /tr/**: Âm /t/ và /r/ kết hợp.\n  * Ví dụ: *tree* /triː/, *truth* /truːθ/, *train* /treɪn/.'
    ],
    subTypes: [
      {
        name: 'Tìm từ có phần gạch chân phát âm khác',
        example: 'Identify the word that has the underlined part pronounced differently: A. **br**ead, B. **br**other, C. **kr**eal (typo for **cr**eate), D. **tr**ee',
        note: 'Các từ bread, brother có cụm /br/, tree có cụm /tr/. Phần phát âm khác biệt là D.'
      }
    ],
    recognitionSigns: [
      'Câu hỏi yêu cầu tìm từ có âm của phần phụ âm đầu gạch chân phát âm khác với các từ còn lại.'
    ],
    solvingSteps: [
      'Bước 1: Đọc to từng từ và chú ý cách phát âm cụm phụ âm đầu.',
      'Bước 2: Phân loại các từ vào nhóm âm tương ứng (/br/, /kr/ hoặc /tr/).',
      'Bước 3: Xác định từ có âm khác biệt nhất.'
    ],
    commonMistakes: [
      'Phát âm thêm nguyên âm /ơ/ vào giữa các phụ âm (ví dụ đọc tree thành /tờ-ri/).'
    ],
    difficulty: 'easy',
    examFrequency: 'medium'
  },
  {
    id: 'eng10-qt15',
    topicId: 'eng10-t2',
    name: 'Phát âm cụm phụ âm /kl/, /pl/, /gr/, /pr/',
    slug: 'phat-am-cum-phu-am-kl-pl-gr-pr',
    description: 'Rèn luyện và nhận diện cách phát âm chính xác của đóng vai trò rất quan trọng ở Unit 2: Humans and the Environment.',
    exampleQuestionId: 'eng10-q79',
    theory: [
      '**Các cụm phụ âm đi với /l/ và /r/ (Unit 2)**:\n- **Cụm /kl/**: *clean* /kliːn/, *club* /klʌb/, *climate* /ˈklaɪmət/.\n- **Cụm /pl/**: *please* /pliːz/, *plastic* /ˈplæstɪk/, *plough* /plaʊ/.\n- **Cụm /gr/**: *green* /ɡriːn/, *group* /ɡruːp/, *grow* /ɡrəʊ/.\n- **Cụm /pr/**: *practise* /ˈpræktɪs/, *protect* /pəˈtekt/ (ở đây pr bị giảm âm nhẹ nhưng vẫn phát âm /pr/), *present* /ˈpreznt/.'
    ],
    subTypes: [
      {
        name: 'Phân biệt âm gạch chân',
        example: 'Choose the word whose underlined part is pronounced differently: A. **cl**ean, B. **cl**ub, C. **pl**astic, D. **cl**imate',
        note: 'Các từ A, B, D bắt đầu bằng âm /kl/, trong khi plastic bắt đầu bằng âm /pl/. Chọn C.'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu tìm từ có cách phát âm của phụ âm ghép gạch chân khác biệt.'
    ],
    solvingSteps: [
      'Bước 1: Phát âm các từ để xác định âm đi với /l/ hay /r/.',
      'Bước 2: Phân nhóm cụ thể (/kl/, /pl/, /gr/, /pr/).',
      'Bước 3: Chọn phương án khác loại.'
    ],
    commonMistakes: [
      'Lẫn lộn âm /kl/ và /pl/ hoặc /gr/ và /pr/ do khẩu hình miệng tương tự.'
    ],
    difficulty: 'easy',
    examFrequency: 'medium'
  },
  {
    id: 'eng10-qt16',
    topicId: 'eng10-t3',
    name: 'Trọng âm của từ 2 âm tiết',
    slug: 'trong-am-tu-2-am-tiet',
    description: 'Nắm vững các quy tắc đánh dấu trọng âm cơ bản cho các từ có 2 âm tiết (danh từ, tính từ và động từ). Chủ điểm thuộc Unit 3: Music.',
    exampleQuestionId: 'eng10-q82',
    theory: [
      '**Quy tắc trọng âm từ 2 âm tiết cơ bản**:\n1. **Động từ có 2 âm tiết**: Trọng âm thường rơi vào **âm tiết thứ 2**.\n   * Ví dụ: *perform* /pəˈfɔːm/, *decide* /dɪˈsaɪd/, *attract* /əˈtrækt/.\n2. **Danh từ và Tính từ có 2 âm tiết**: Trọng âm thường rơi vào **âm tiết thứ 1**.\n   * Ví dụ: *music* /ˈmjuːzɪk/, *singer* /ˈsɪŋə(r)/, *famous* /ˈfeɪməs/.\n3. **Ngoại lệ**:\n   * Động từ có âm tiết thứ hai chứa nguyên âm ngắn và kết thúc bằng một phụ âm: trọng âm rơi vào **âm tiết thứ 1** (ví dụ: *enter* /ˈentə(r)/, *offer* /ˈɒfə(r)/).\n   * Danh từ có âm tiết thứ nhất chứa nguyên âm ngắn /ə/ hoặc /ɪ/: trọng âm rơi vào **âm tiết thứ 2** (ví dụ: *advice* /ədˈvaɪs/).'
    ],
    subTypes: [
      {
        name: 'Tìm từ có trọng âm chính khác biệt',
        example: 'Choose the word that has a different stress pattern: A. perform, B. decide, C. singer, D. attract',
        note: 'perform, decide, attract nhấn âm 2; singer nhấn âm 1. Chọn C.'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu tìm từ có trọng âm chính (primary stress) rơi vào vị trí khác các từ còn lại.'
    ],
    solvingSteps: [
      'Bước 1: Xác định từ loại của từng từ (danh, động, tính).',
      'Bước 2: Áp dụng quy tắc trọng âm 2 âm tiết thông dụng và lọc ra các từ ngoại lệ.',
      'Bước 3: Đối chiếu vị trí trọng âm (âm 1 hay âm 2) để chọn đáp án.'
    ],
    commonMistakes: [
      'Quên quy tắc ngoại lệ của các động từ kết thúc bằng đuôi -er, -en như enter, happen, offer (nhấn âm 1).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt17',
    topicId: 'eng10-t4',
    name: 'Trọng âm của từ 3 âm tiết',
    slug: 'trong-am-tu-3-am-tiet',
    description: 'Nắm vững quy tắc xác định trọng âm chính cho các từ có 3 âm tiết dựa trên từ loại và các hậu tố (suffixes) phổ biến trong Unit 4: For a Better Community.',
    exampleQuestionId: 'eng10-q85',
    theory: [
      '**Quy tắc trọng âm từ 3 âm tiết**:\n1. **Quy tắc đuôi (Hậu tố)**:\n   * Các từ tận cùng là đuôi `-tion`, `-sion`, `-ic`, `-ity`, `-ian`: trọng âm rơi vào **âm tiết ngay trước nó**.\n     * Ví dụ: *donation* /dəʊˈneɪʃn/ (nhấn âm 2), *artistic* /ɑːˈtɪstɪk/ (nhấn âm 2).\n   * Các từ tận cùng là đuôi `-y`, `-ce`, `-ate`, `-tude`: trọng âm thường rơi vào **âm tiết thứ 3 từ cuối lên (tức âm tiết thứ nhất của từ 3 âm tiết)**.\n     * Ví dụ: *charity* /ˈtʃærəti/ (nhấn âm 1), *organise* /ˈɔːɡənaɪz/ (nhấn âm 1).\n2. **Động từ 3 âm tiết**: Nếu âm tiết thứ 3 chứa nguyên âm ngắn hoặc âm /ə/, trọng âm rơi vào **âm tiết thứ 2**.\n   * Ví dụ: *encounter* /ɪnˈkaʊntə(r)/ (nhấn âm 2).'
    ],
    subTypes: [
      {
        name: 'Trọng âm từ có hậu tố',
        example: 'Choose the word with different stress: A. charity, B. organise, C. donation, D. benefit',
        note: 'charity, organise, benefit nhấn âm 1; donation nhấn âm 2. Chọn C.'
      }
    ],
    recognitionSigns: [
      'Từ trong đề bài gồm 3 âm tiết, thường đi kèm các hậu tố nhận biết.'
    ],
    solvingSteps: [
      'Bước 1: Tìm các hậu tố đặc trưng ở đuôi từ để áp dụng quy tắc nhanh.',
      'Bước 2: Phát âm thử từ để xác định vị trí nhấn âm (âm tiết 1, 2 hay 3).',
      'Bước 3: So sánh và chọn phương án.'
    ],
    commonMistakes: [
      'Đánh sai vị trí trọng âm của các từ có hậu tố -ate, -ise (thường nhấn âm 1 chứ không nhấn sát đuôi).'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt18',
    topicId: 'eng10-t5',
    name: 'Trọng âm của danh từ ghép và cụm danh từ',
    slug: 'trong-am-danh-tu-ghep-cum-danh-tu',
    description: 'Quy tắc xác định trọng âm cho các từ ghép (compound nouns) và cụm danh từ (noun phrases) liên quan đến chủ đề công nghệ trong Unit 5: Inventions.',
    exampleQuestionId: 'eng10-q88',
    theory: [
      '**Trọng âm của từ ghép và cụm từ**:\n1. **Danh từ ghép (Compound Nouns)**: Thường được tạo thành bởi `Danh từ + Danh từ` hoặc `Tính từ + Danh từ` viết liền hoặc có dấu nối. Trọng âm chính rơi vào **danh từ thứ nhất (âm tiết đầu tiên)**.\n   * Ví dụ: *smartphone* /ˈsmɑːt.fəʊn/ (nhấn âm 1), *laptop* /ˈlæp.tɒp/ (nhấn âm 1), *greenhouse* /ˈɡriːn.haʊs/ (nhấn âm 1).\n2. **Cụm danh từ (Noun Phrases)**: Thường gồm `Tính từ + Danh từ` chỉ một ý nghĩa mô tả chung (không tạo thành một từ ghép cố định). Trọng âm rơi vào **từ thứ hai (danh từ chính)**.\n   * Ví dụ: *smart device* /ˌsmɑːt dɪˈvaɪs/ (nhấn chính ở âm tiết 2 của device), *solar panel* /ˌsəʊ.lə ˈpæn.əl/.'
    ],
    subTypes: [
      {
        name: 'Trọng âm danh từ ghép vs cụm danh từ',
        example: 'Identify the word with a different stress pattern: A. laptop, B. smartphone, C. greenhouse, D. white house (cụm danh từ chỉ ngôi nhà sơn màu trắng)',
        note: 'A, B, C là danh từ ghép nhấn trọng âm 1; D là cụm danh từ nhấn âm 2. Chọn D.'
      }
    ],
    recognitionSigns: [
      'Đề bài chứa các danh từ ghép công nghệ phổ biến hoặc cụm danh từ.'
    ],
    solvingSteps: [
      'Bước 1: Phân biệt từ đó là danh từ ghép (viết liền/nối) hay cụm danh từ (viết tách).',
      'Bước 2: Xác định vị trí nhấn âm chính (âm đầu tiên cho danh từ ghép, âm thứ hai cho cụm danh từ).',
      'Bước 3: So sánh vị trí trọng âm.'
    ],
    commonMistakes: [
      'Nhấn âm tiết thứ 2 của danh từ ghép (ví dụ đọc smartPHONE thay vì SMARTphone).'
    ],
    difficulty: 'medium',
    examFrequency: 'medium'
  }
];
