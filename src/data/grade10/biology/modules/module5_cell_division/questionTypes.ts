import { QuestionType } from '@/types';

export const g10BiologyModule5QuestionTypes: QuestionType[] = [
  {
    id: "bio10-qt6",
    topicId: "bio10-t5",
    name: "Quá trình Nguyên phân",
    slug: "qua-trinh-nguyen-phan",
    description: "Các kì nguyên phân và ý nghĩa của nguyên phân.",
    exampleQuestionId: "bio10-q6",
    recognitionSigns: [
      "Đề mô tả trạng thái nhiễm sắc thể, vị trí trên thoi phân bào hoặc sự phân li chromatid.",
      "Đề hỏi số tế bào, số nhiễm sắc thể hoặc ý nghĩa sau một số lần nguyên phân."
    ],
    solvingSteps: [
      "Xác định tế bào đang ở kì nào dựa trên trạng thái và vị trí nhiễm sắc thể.",
      "Tách rõ số nhiễm sắc thể, số chromatid và lượng DNA; không dùng chúng thay thế lẫn nhau.",
      "Kiểm tra kết quả cuối: một tế bào mẹ tạo hai tế bào con có bộ nhiễm sắc thể cơ bản giống nhau."
    ],
    commonMistakes: [
      "Cho rằng DNA nhân đôi làm số nhiễm sắc thể tăng gấp đôi hoặc nhầm kì sau với kì giữa."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
