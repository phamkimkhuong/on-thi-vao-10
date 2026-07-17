import { QuestionType } from '@/types';

export const g10BiologyModule3QuestionTypes: QuestionType[] = [
  {
    id: "bio10-qt4",
    topicId: "bio10-t3",
    name: "Trao đổi chất qua màng sinh chất",
    slug: "trao-doi-chat-qua-mang",
    description: "Cơ chế vận chuyển thụ động, chủ động, xuất bào và nhập bào.",
    exampleQuestionId: "bio10-q4",
    recognitionSigns: [
      "Đề cho chênh lệch nồng độ, tính thấm của màng, ATP hoặc protein vận chuyển.",
      "Đề mô tả tế bào trong môi trường ưu trương, nhược trương hoặc đẳng trương."
    ],
    solvingSteps: [
      "Xác định chính xác chất nào đang di chuyển và màng có cho chất đó đi qua hay không.",
      "So sánh gradient: cùng chiều gradient thường là thụ động; ngược gradient cần vận chuyển chủ động.",
      "Nếu xét nước, chuyển sang phân tích thẩm thấu và dự đoán thay đổi thể tích tế bào."
    ],
    commonMistakes: [
      "Nhầm chiều di chuyển của nước với chiều di chuyển của chất tan hoặc cho rằng có protein màng thì luôn tốn ATP."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
