import { QuestionType } from '@/types';

export const g10BiologyModule6QuestionTypes: QuestionType[] = [
  {
    id: "bio10-qt7",
    topicId: "bio10-t6",
    name: "Các hình thức dinh dưỡng ở vi sinh vật",
    slug: "cac-hinh-thuc-dinh-duong-vi-sinh-vat",
    description: "Phân loại vi sinh vật dựa trên nguồn carbon và nguồn năng lượng.",
    exampleQuestionId: "bio10-q7",
    recognitionSigns: [
      "Đề cho nguồn năng lượng là ánh sáng/hóa học và nguồn carbon là CO₂/chất hữu cơ.",
      "Đề mô tả môi trường sống hoặc quá trình chuyển hóa để yêu cầu suy ra kiểu dinh dưỡng."
    ],
    solvingSteps: [
      "Lập hai trục độc lập: nguồn năng lượng và nguồn carbon.",
      "Ánh sáng → quang; phản ứng hóa học → hóa; CO₂ → tự dưỡng; chất hữu cơ → dị dưỡng.",
      "Ghép hai kết quả để gọi đúng kiểu dinh dưỡng và kiểm tra với ví dụ trong đề."
    ],
    commonMistakes: [
      "Cho rằng tự dưỡng nghĩa là tự tạo ra năng lượng hoặc chỉ nhìn nguồn năng lượng mà bỏ qua nguồn carbon."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
