import { QuestionType } from '@/types';

export const g10BiologyModule2QuestionTypes: QuestionType[] = [
  {
    id: "bio10-qt3",
    topicId: "bio10-t2",
    name: "Cấu trúc tế bào nhân thực",
    slug: "cau-truc-te-bao-nhan-thuc",
    description: "Hiểu cấu tạo và chức năng của các bào quan chính trong tế bào nhân thực.",
    exampleQuestionId: "bio10-q3",
    recognitionSigns: [
      "Đề cung cấp hình, mô tả màng, số lớp màng hoặc chức năng để nhận diện bào quan.",
      "Đề mô tả một tế bào chuyên hóa rồi hỏi bào quan nào phát triển."
    ],
    solvingSteps: [
      "Xác định dấu hiệu cấu trúc: có màng hay không, màng đơn hay kép, có DNA/ribosome riêng hay không.",
      "Nối chức năng được nêu với bào quan trực tiếp đảm nhiệm và hệ bào quan phối hợp.",
      "Đối chiếu loại tế bào để loại các cấu trúc không tồn tại trong tế bào đó."
    ],
    commonMistakes: [
      "Học thuộc mỗi bào quan chỉ có một chức năng hoặc cho rằng mọi tế bào nhân thực đều có đầy đủ cùng một bộ bào quan."
    ],
    difficulty: "easy",
    examFrequency: "high"
  }
];
