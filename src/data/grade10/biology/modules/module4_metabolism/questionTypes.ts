import { QuestionType } from '@/types';

export const g10BiologyModule4QuestionTypes: QuestionType[] = [
  {
    id: "bio10-qt5",
    topicId: "bio10-t4",
    name: "Khái quát về hoạt tính của enzyme",
    slug: "khai-quat-enzyme",
    description: "Cơ chế hoạt động, các yếu tố ảnh hưởng đến hoạt tính enzyme.",
    exampleQuestionId: "bio10-q5",
    recognitionSigns: [
      "Đề mô tả phức hợp enzyme–cơ chất, năng lượng hoạt hóa hoặc tính đặc hiệu.",
      "Đề cung cấp bảng/đồ thị tốc độ phản ứng theo nhiệt độ, pH hay nồng độ."
    ],
    solvingSteps: [
      "Xác định biến độc lập, biến phụ thuộc và khoảng điều kiện đang khảo sát.",
      "Đọc xu hướng dữ liệu trước khi gắn với cơ chế tác động lên enzyme.",
      "Phân biệt tăng va chạm trong giới hạn thích hợp với biến tính làm giảm hoạt tính."
    ],
    commonMistakes: [
      "Kết luận tăng nhiệt độ luôn làm tăng hoạt tính hoặc cho rằng enzyme cung cấp năng lượng và bị tiêu hao."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
