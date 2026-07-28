import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10MathModule6PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    "questionTypeId": "math10-qt8",
    "subTypes": [
      {
        "id": "math10-qt8-st1",
        "name": "Quy tắc cộng",
        "example": "Chọn đúng một phương án từ các nhóm rời nhau.",
        "recognitionSigns": [
          "Đề có từ “hoặc” và chỉ thực hiện một trường hợp.",
          "Các nhóm lựa chọn không giao nhau."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt8-st2",
        "name": "Quy tắc nhân",
        "example": "Thực hiện liên tiếp một lựa chọn ở mỗi công đoạn.",
        "recognitionSigns": [
          "Đề có từ “và”, “gồm các bước” hoặc cấu tạo theo nhiều vị trí.",
          "Mỗi kết quả được tạo bởi một lựa chọn ở từng công đoạn."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt8-st3",
        "name": "Bao hàm–loại trừ và biến cố đối",
        "example": "Đếm hợp của hai nhóm có giao hoặc phần nằm ngoài hợp.",
        "recognitionSigns": [
          "Hai nhóm có phần tử chung nên có nguy cơ đếm trùng.",
          "Đề hỏi “ít nhất một”, “không thuộc nhóm nào” hoặc “đúng một nhóm”."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "minimumQuestionsPerSubType": 12,
      "requiredPracticeRoles": [
        "guided",
        "near_transfer",
        "representation_switch",
        "misconception_check",
        "far_transfer",
        "retention",
        "mastery_holdout"
      ],
      "masteryHoldoutCount": 2,
      "targetQuestionCount": 42,
      "requiredRepresentations": [
        "text",
        "equation",
        "table"
      ]
    }
  },
  {
    "questionTypeId": "math10-qt9",
    "subTypes": [
      {
        "id": "math10-qt9-st1",
        "name": "Hoán vị và xếp hàng có điều kiện",
        "example": "Sắp xếp toàn bộ phần tử, có thể kèm ràng buộc cạnh nhau.",
        "recognitionSigns": [
          "Dùng toàn bộ n phần tử khác nhau.",
          "Thứ tự xếp tạo kết quả mới."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt9-st2",
        "name": "Chỉnh hợp và phân vị trí",
        "example": "Chọn k phần tử từ n phần tử vào k vị trí phân biệt.",
        "recognitionSigns": [
          "Chỉ dùng k<n phần tử.",
          "Các chức vụ hoặc vị trí có vai trò khác nhau."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt9-st3",
        "name": "Tổ hợp và chọn nhóm",
        "example": "Chọn k phần tử mà không xét thứ tự.",
        "recognitionSigns": [
          "Đề hỏi chọn tổ, đội, nhóm hoặc tập con.",
          "Đổi thứ tự liệt kê không tạo phương án mới."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "minimumQuestionsPerSubType": 12,
      "requiredPracticeRoles": [
        "guided",
        "near_transfer",
        "representation_switch",
        "misconception_check",
        "far_transfer",
        "retention",
        "mastery_holdout"
      ],
      "masteryHoldoutCount": 2,
      "targetQuestionCount": 54,
      "requiredRepresentations": [
        "text",
        "equation",
        "table"
      ]
    }
  },
  {
    "questionTypeId": "math10-qt10",
    "subTypes": [
      {
        "id": "math10-qt10-st1",
        "name": "Khai triển nhị thức",
        "example": "Viết đầy đủ đa thức từ công thức Newton.",
        "recognitionSigns": [
          "Đề yêu cầu khai triển hoặc rút gọn toàn bộ.",
          "Phải tính mọi số hạng từ k=0 đến n."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt10-st2",
        "name": "Tìm hệ số của lũy thừa xác định",
        "example": "Chọn đúng số hạng tổng quát có số mũ x theo yêu cầu.",
        "recognitionSigns": [
          "Đề chỉ hỏi hệ số của x^m.",
          "Không cần khai triển toàn bộ biểu thức."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt10-st3",
        "name": "Số hạng không chứa biến",
        "example": "Đặt số mũ của biến trong số hạng tổng quát bằng 0.",
        "recognitionSigns": [
          "Biểu thức thường chứa cả x và 1/x.",
          "Cần kiểm tra chỉ số k tìm được là số nguyên trong [0,n]."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "minimumQuestionsPerSubType": 12,
      "requiredPracticeRoles": [
        "guided",
        "near_transfer",
        "representation_switch",
        "misconception_check",
        "far_transfer",
        "retention",
        "mastery_holdout"
      ],
      "masteryHoldoutCount": 2,
      "targetQuestionCount": 54,
      "requiredRepresentations": [
        "text",
        "equation",
        "table"
      ]
    }
  }
];
