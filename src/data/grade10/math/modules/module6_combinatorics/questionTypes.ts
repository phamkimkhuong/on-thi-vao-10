import type { QuestionType } from '@/types';
import {
  g10MathModule6TheoryByQuestionTypeId,
  g10MathModule6TheoryCheckpointsByQuestionTypeId
} from './theory';
import { g10MathModule6PracticeBlueprints } from './practiceBlueprint';

export const g10MathModule6QuestionTypes: QuestionType[] = [
  {
    "id": "math10-qt8",
    "topicId": "math10-t6",
    "name": "Quy tắc đếm và bao hàm–loại trừ",
    "slug": "quy-tac-dem-bao-ham-loai-tru",
    "description": "Phân biệt trường hợp loại trừ nhau, công đoạn liên tiếp và tình huống có phần giao để thiết lập phép đếm đúng.",
    "recognitionSigns": [
      "Đề hỏi số cách thực hiện một công việc qua nhiều lựa chọn hoặc công đoạn.",
      "Cần xác định các trường hợp có giao nhau hay không trước khi cộng hoặc nhân."
    ],
    "solvingSteps": [
      "Xác định chính xác một kết quả cần đếm.",
      "Tách bài toán thành trường hợp hoặc công đoạn.",
      "Chọn quy tắc cộng, nhân, bao hàm–loại trừ hoặc biến cố đối.",
      "Tính và kiểm tra có đếm trùng hay bỏ sót."
    ],
    "commonMistakes": [
      "Dùng cộng cho các công đoạn liên tiếp.",
      "Không trừ phần giao khi cộng hai nhóm.",
      "Đếm cả phương án không thỏa điều kiện."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m6-q001",
    "theory": [
      "Quy tắc cộng áp dụng cho các trường hợp loại trừ nhau.",
      "Quy tắc nhân áp dụng cho chuỗi công đoạn.",
      "|A∪B|=|A|+|B|−|A∩B|."
    ]
  },
  {
    "id": "math10-qt9",
    "topicId": "math10-t6",
    "name": "Hoán vị, chỉnh hợp và tổ hợp",
    "slug": "hoan-vi-chinh-hop-to-hop",
    "description": "Nhận diện việc có dùng toàn bộ phần tử hay không và thứ tự có tạo kết quả mới hay không.",
    "recognitionSigns": [
      "Xếp toàn bộ thường là hoán vị; chọn vào vị trí phân biệt thường là chỉnh hợp.",
      "Chọn một nhóm không xét thứ tự thường là tổ hợp."
    ],
    "solvingSteps": [
      "Xác định n phần tử và số phần tử k được dùng.",
      "Hỏi xem đổi thứ tự có tạo kết quả khác không.",
      "Chọn P_n, A_n^k hoặc C_n^k.",
      "Xử lí ràng buộc bằng gộp khối, cố định hoặc biến cố đối."
    ],
    "commonMistakes": [
      "Dùng tổ hợp cho bài phân chức vụ.",
      "Quên nhân số cách đổi chỗ trong khối.",
      "Không loại các trường hợp vi phạm ràng buộc."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m6-q037",
    "theory": [
      "P_n=n!.",
      "A_n^k=n!/(n−k)!.",
      "C_n^k=n!/[k!(n−k)!]."
    ]
  },
  {
    "id": "math10-qt10",
    "topicId": "math10-t6",
    "name": "Nhị thức Newton và hệ số",
    "slug": "nhi-thuc-newton-he-so",
    "description": "Khai triển nhị thức và khai thác số hạng tổng quát để tìm hệ số hoặc số hạng không chứa biến.",
    "recognitionSigns": [
      "Biểu thức có dạng (a+b)^n hoặc yêu cầu hệ số trong khai triển.",
      "Bài số hạng đặc biệt cần làm việc với số hạng tổng quát thay vì khai triển toàn bộ."
    ],
    "solvingSteps": [
      "Đặt đúng hai số hạng u, v và số mũ n.",
      "Viết số hạng tổng quát C_n^k u^{n−k}v^k.",
      "Dùng điều kiện về số mũ để tìm k nếu cần.",
      "Tính hệ số và kiểm tra dấu."
    ],
    "commonMistakes": [
      "Bỏ hệ số C_n^k.",
      "Nhầm k với số mũ của biến.",
      "Mất dấu khi số hạng thứ hai âm."
    ],
    "difficulty": "hard",
    "examFrequency": "medium",
    "exampleQuestionId": "math10-m6-q073",
    "theory": [
      "(u+v)^n=Σ_{k=0}^n C_n^k u^{n−k}v^k.",
      "Số hạng thứ k+1 là C_n^k u^{n−k}v^k.",
      "Muốn tìm số hạng không chứa x, đặt số mũ của x bằng 0."
    ]
  }
];

for (const questionType of g10MathModule6QuestionTypes) {
  questionType.theory =
    g10MathModule6TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
  questionType.theoryCheckpoints =
    g10MathModule6TheoryCheckpointsByQuestionTypeId[questionType.id] ??
    questionType.theoryCheckpoints;

  const practiceBlueprint = g10MathModule6PracticeBlueprints.find(
    blueprint => blueprint.questionTypeId === questionType.id
  );
  if (practiceBlueprint) {
    questionType.subTypes = practiceBlueprint.subTypes;
    questionType.practiceCoverage = practiceBlueprint.coverage;
  }
}
