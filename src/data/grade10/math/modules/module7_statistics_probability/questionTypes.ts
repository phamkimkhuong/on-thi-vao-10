import type { QuestionType } from '@/types';
import {
  g10MathModule7TheoryByQuestionTypeId,
  g10MathModule7TheoryCheckpointsByQuestionTypeId
} from './theory';
import { g10MathModule7PracticeBlueprints } from './practiceBlueprint';

export const g10MathModule7QuestionTypes: QuestionType[] = [
  {
    "id": "math10-qt11",
    "topicId": "math10-t7",
    "name": "Số gần đúng và các đại lượng xu thế trung tâm",
    "slug": "so-gan-dung-xu-the-trung-tam",
    "description": "Xử lí số gần đúng, số trung bình, trung vị và tứ phân vị để mô tả vị trí trung tâm của mẫu.",
    "recognitionSigns": [
      "Đề yêu cầu làm tròn, sai số hoặc một giá trị đại diện cho mẫu.",
      "Trung bình sử dụng mọi giá trị; trung vị và tứ phân vị phụ thuộc vị trí sau khi sắp xếp."
    ],
    "solvingSteps": [
      "Xác định loại đại lượng được hỏi.",
      "Chuẩn hóa hoặc sắp xếp số liệu nếu cần.",
      "Áp dụng đúng công thức hay quy tắc vị trí.",
      "Ghi đơn vị và mức làm tròn."
    ],
    "commonMistakes": [
      "Không sắp dữ liệu trước khi tìm trung vị.",
      "Chia tổng cho số giá trị khác nhau.",
      "Nhầm sai số tuyệt đối với sai số tương đối."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m7-q001",
    "theory": [
      "Sai số tương đối bằng sai số tuyệt đối chia cho độ lớn giá trị gần đúng.",
      "Số trung bình bằng tổng số liệu chia số quan sát.",
      "Q1, Q2, Q3 chia mẫu đã sắp thành bốn phần."
    ]
  },
  {
    "id": "math10-qt12",
    "topicId": "math10-t7",
    "name": "Độ phân tán và giá trị ngoại lệ",
    "slug": "do-phan-tan-gia-tri-ngoai-le",
    "description": "Đo mức biến động bằng khoảng biến thiên, IQR, phương sai và độ lệch chuẩn; so sánh độ ổn định.",
    "recognitionSigns": [
      "Đề hỏi dữ liệu phân tán, ổn định hoặc đồng đều đến mức nào.",
      "Giá trị ngoại lệ được xét qua các ngưỡng dựa trên IQR."
    ],
    "solvingSteps": [
      "Tính các đại lượng trung tâm cần dùng.",
      "Tính độ lệch hoặc các tứ phân vị.",
      "Tính chỉ số phân tán.",
      "Diễn giải chỉ số trong bối cảnh."
    ],
    "commonMistakes": [
      "Dùng trung bình để kết luận độ ổn định.",
      "Quên bình phương độ lệch.",
      "Nhầm phương sai với độ lệch chuẩn."
    ],
    "difficulty": "hard",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m7-q037",
    "theory": [
      "Khoảng biến thiên=max−min; IQR=Q3−Q1.",
      "Phương sai là trung bình các bình phương độ lệch.",
      "Độ lệch chuẩn là căn bậc hai của phương sai."
    ]
  },
  {
    "id": "math10-qt13",
    "topicId": "math10-t7",
    "name": "Không gian mẫu và xác suất cổ điển",
    "slug": "khong-gian-mau-xac-suat-co-dien",
    "description": "Mô tả kết quả sơ cấp, đếm biến cố và vận dụng xác suất cổ điển, biến cố đối, hợp biến cố.",
    "recognitionSigns": [
      "Phép thử có hữu hạn kết quả và cần xác định kết quả thuận lợi.",
      "Phải kiểm tra các kết quả sơ cấp có đồng khả năng trước khi dùng tỉ số."
    ],
    "solvingSteps": [
      "Mô tả một kết quả sơ cấp.",
      "Đếm không gian mẫu.",
      "Đếm kết quả thuận lợi.",
      "Lập tỉ số và rút gọn; dùng biến cố đối nếu thuận lợi."
    ],
    "commonMistakes": [
      "Chọn không gian mẫu có các phần tử không đồng khả năng.",
      "Quên thứ tự của kết quả.",
      "Cộng xác suất hai biến cố có giao."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m7-q073",
    "theory": [
      "P(A)=n(A)/n(Ω) khi các kết quả sơ cấp đồng khả năng.",
      "P(Ā)=1−P(A).",
      "P(A∪B)=P(A)+P(B)−P(A∩B)."
    ]
  }
];

for (const questionType of g10MathModule7QuestionTypes) {
  questionType.theory =
    g10MathModule7TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
  questionType.theoryCheckpoints =
    g10MathModule7TheoryCheckpointsByQuestionTypeId[questionType.id] ??
    questionType.theoryCheckpoints;

  const practiceBlueprint = g10MathModule7PracticeBlueprints.find(
    blueprint => blueprint.questionTypeId === questionType.id
  );
  if (practiceBlueprint) {
    questionType.subTypes = practiceBlueprint.subTypes;
    questionType.practiceCoverage = practiceBlueprint.coverage;
  }
}
