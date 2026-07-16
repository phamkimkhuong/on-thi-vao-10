import { QuestionType } from '@/types';

export const g10EnglishModule6QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt19",
    topicId: "eng10-t6",
    name: "Câu bị động với động từ khuyết thiếu",
    slug: "passive-voice-with-modals",
    description: "Phân biệt chủ động và bị động với can, could, may, might, must và should trong ngữ cảnh bình đẳng giới.",
    exampleQuestionId: "eng10-q229",
    theory: [
      "**Chủ động**: $S + modal + V + O$. **Bị động**: $S + modal + be + V_{3/ed}$. Động từ khuyết thiếu không đổi theo chủ ngữ.",
      "Chỉ dùng bị động khi chủ ngữ nhận hành động. Nếu chủ ngữ tự thực hiện hành động, giữ $modal + V$."
    ],
    subTypes: [
      {
        name: "Chọn chủ động hoặc bị động",
        example: "Women can (lead) organisations.",
        note: "Women tự thực hiện hành động: can lead."
      },
      {
        name: "Bị động với modal",
        example: "Equal opportunities should (provide) to everyone.",
        note: "Opportunities nhận hành động: should be provided."
      },
      {
        name: "Phủ định và modal hoàn thành",
        example: "The rule must not (apply) unfairly.",
        note: "must not be applied."
      }
    ],
    recognitionSigns: [
      "Trong câu có modal verb và chỗ trống chứa động từ chính.",
      "Chủ ngữ thường là người/vật nhận hành động; có thể xuất hiện by + tác nhân."
    ],
    solvingSteps: [
      "Bước 1: Xác định chủ ngữ thực hiện hay nhận hành động.",
      "Bước 2: Giữ modal verb, thêm be nếu câu mang nghĩa bị động.",
      "Bước 3: Đổi động từ chính sang V3/ed và kiểm tra nghĩa toàn câu."
    ],
    commonMistakes: [
      "Viết modal + V3 mà thiếu be.",
      "Dùng bị động chỉ vì chủ ngữ là vật, dù vật đó có thể thực hiện hành động."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt20",
    topicId: "eng10-t6",
    name: "Từ vựng trọng tâm: Gender Equality",
    slug: "vocabulary-gender-equality",
    description: "Từ vựng về cơ hội bình đẳng, định kiến giới, việc làm, giáo dục và vai trò lãnh đạo.",
    exampleQuestionId: "eng10-q241",
    theory: [
      "Nhóm từ lõi: *equality, equal, gender, discrimination, opportunity, qualified, pursue, leadership, income, domestic violence*.",
      "Học theo collocation và word family: *equal opportunities, gender discrimination, pursue a career, be qualified for, leadership position*."
    ],
    subTypes: [
      {
        name: "Chọn từ theo ngữ cảnh",
        example: "Everyone deserves equal ___.",
        note: "opportunities."
      },
      {
        name: "Collocation",
        example: "pursue a ___.",
        note: "career."
      },
      {
        name: "Word family",
        example: "gender ___.",
        note: "equality."
      }
    ],
    recognitionSigns: [
      "Bốn phương án gần nghĩa hoặc cùng họ từ.",
      "Cần kết hợp nghĩa, từ loại và collocation."
    ],
    solvingSteps: [
      "Bước 1: Xác định từ loại cần điền.",
      "Bước 2: Đọc các từ xung quanh để nhận diện collocation.",
      "Bước 3: Thay phương án vào câu và loại lựa chọn sai sắc thái."
    ],
    commonMistakes: [
      "Chọn đúng nghĩa tiếng Việt nhưng sai từ loại.",
      "Nhầm equality với equity hoặc equal."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt21",
    topicId: "eng10-t6",
    name: "Trọng âm tính từ và động từ ba âm tiết",
    slug: "stress-three-syllable-adjectives-verbs",
    description: "Nhận diện trọng âm chính của các tính từ và động từ ba âm tiết trong Unit 6.",
    exampleQuestionId: "eng10-q253",
    theory: [
      "Tính từ và động từ ba âm tiết thường nhấn âm đầu hoặc âm thứ hai; ví dụ *medical, opposite, organise, benefit* nhấn âm đầu; *expensive, fantastic, develop, encourage* nhấn âm hai.",
      "Quy tắc chỉ là xu hướng. Cần đọc thành tiếng, nhận diện hậu tố và ghi nhớ ngoại lệ."
    ],
    subTypes: [
      {
        name: "Tìm từ có trọng âm khác",
        example: "medical – opposite – expensive – organise",
        note: "expensive nhấn âm hai."
      }
    ],
    recognitionSigns: [
      "Đề yêu cầu chọn từ có primary stress khác.",
      "Các phương án chủ yếu là tính từ hoặc động từ ba âm tiết."
    ],
    solvingSteps: [
      "Bước 1: Tách mỗi từ thành các âm tiết.",
      "Bước 2: Đánh dấu âm tiết mang trọng âm chính.",
      "Bước 3: Nhóm ba từ cùng mẫu và chọn từ còn lại."
    ],
    commonMistakes: [
      "Đếm chữ cái thay vì âm tiết.",
      "Suy đoán hoàn toàn từ từ loại mà không kiểm tra cách phát âm."
    ],
    difficulty: "medium",
    examFrequency: "medium"
  }
];
