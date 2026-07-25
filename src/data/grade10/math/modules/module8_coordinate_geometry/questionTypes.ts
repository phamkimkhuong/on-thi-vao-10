import type { QuestionType } from '@/types';
import { g10MathModule8TheoryByQuestionTypeId } from './theory';

export const g10MathModule8QuestionTypes: QuestionType[] = [
  {
    "id": "math10-qt14",
    "topicId": "math10-t8",
    "name": "Phương trình đường thẳng, vị trí và khoảng cách",
    "slug": "duong-thang-vi-tri-khoang-cach",
    "description": "Lập phương trình đường thẳng, xét vị trí tương đối và tính khoảng cách trong mặt phẳng tọa độ.",
    "recognitionSigns": [
      "Dữ kiện thường gồm điểm, vectơ chỉ phương/pháp tuyến hoặc phương trình ax+by+c=0.",
      "Vị trí và khoảng cách được xử lí qua cặp hệ số a, b."
    ],
    "solvingSteps": [
      "Xác định vectơ chỉ phương hoặc pháp tuyến.",
      "Chọn dạng phương trình phù hợp.",
      "Chuẩn hóa hệ số nếu cần.",
      "Kiểm tra điểm thuộc đường và kết luận hình học."
    ],
    "commonMistakes": [
      "Nhầm vectơ chỉ phương với pháp tuyến.",
      "Kết luận trùng nhau khi mới kiểm tra hai hệ số đầu.",
      "Quên căn ở mẫu công thức khoảng cách."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m8-q001",
    "theory": [
      "Qua M(x0,y0), pháp tuyến (a,b): a(x−x0)+b(y−y0)=0.",
      "Hai đường vuông góc khi hai vectơ pháp tuyến có tích vô hướng bằng 0.",
      "d(M,d)=|ax0+by0+c|/√(a²+b²)."
    ]
  },
  {
    "id": "math10-qt15",
    "topicId": "math10-t8",
    "name": "Đường tròn và tiếp tuyến",
    "slug": "duong-tron-tiep-tuyen",
    "description": "Nhận dạng, lập phương trình đường tròn và viết tiếp tuyến tại một điểm thuộc đường tròn.",
    "recognitionSigns": [
      "Phương trình chuẩn có tổng hai bình phương bằng R².",
      "Bán kính đi qua tiếp điểm là pháp tuyến của tiếp tuyến."
    ],
    "solvingSteps": [
      "Đưa phương trình về dạng chuẩn.",
      "Xác định tâm và bán kính.",
      "Kiểm tra điểm thuộc đường tròn nếu có.",
      "Dùng bán kính làm pháp tuyến khi viết tiếp tuyến."
    ],
    "commonMistakes": [
      "Đọc tâm sai dấu.",
      "Nhầm R với R².",
      "Dùng bán kính làm vectơ chỉ phương tiếp tuyến."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m8-q037",
    "theory": [
      "(x−a)²+(y−b)²=R² có tâm I(a,b).",
      "Tiếp tuyến tại M vuông góc với IM.",
      "Khoảng cách từ tâm đến tiếp tuyến bằng bán kính."
    ]
  },
  {
    "id": "math10-qt16",
    "topicId": "math10-t8",
    "name": "Elip, hypebol và parabol",
    "slug": "elip-hypebol-parabol",
    "description": "Nhận dạng phương trình chính tắc và tính các yếu tố cơ bản của ba đường conic.",
    "recognitionSigns": [
      "Hai bình phương cùng dấu gợi elip; trái dấu gợi hypebol.",
      "Parabol chính tắc có một biến bình phương và biến kia bậc nhất."
    ],
    "solvingSteps": [
      "Nhận dạng loại conic.",
      "Đọc đúng a², b² hoặc 4a.",
      "Tính c và các yếu tố hình học.",
      "Kiểm tra dấu và hướng trục."
    ],
    "commonMistakes": [
      "Dùng cùng một công thức c cho elip và hypebol.",
      "Đọc nhầm trục từ mẫu số.",
      "Lấy 4a làm tọa độ tiêu điểm parabol."
    ],
    "difficulty": "hard",
    "examFrequency": "medium",
    "exampleQuestionId": "math10-m8-q073",
    "theory": [
      "Elip: c²=a²−b².",
      "Hypebol: c²=a²+b².",
      "Parabol y²=4ax có tiêu điểm (a,0), đường chuẩn x=−a."
    ]
  }
];

for (const questionType of g10MathModule8QuestionTypes) {
  questionType.theory =
    g10MathModule8TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
}
