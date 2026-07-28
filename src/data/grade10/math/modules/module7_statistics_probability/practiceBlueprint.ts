import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10MathModule7PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    "questionTypeId": "math10-qt11",
    "subTypes": [
      {
        "id": "math10-qt11-st1",
        "name": "Số gần đúng và sai số",
        "example": "Làm tròn, tính sai số tuyệt đối hoặc tương đối.",
        "recognitionSigns": [
          "Đề nêu hàng làm tròn hoặc độ chính xác.",
          "Cần phân biệt đơn vị của sai số tuyệt đối và phần trăm tương đối."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt11-st2",
        "name": "Số trung bình cộng",
        "example": "Tính giá trị trung bình từ danh sách hoặc bảng tần số.",
        "recognitionSigns": [
          "Mọi quan sát đều tham gia vào phép tính.",
          "Giá trị lặp lại phải được tính đúng số lần."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt11-st3",
        "name": "Trung vị và tứ phân vị",
        "example": "Tìm Q1, Q2, Q3 theo vị trí trong mẫu đã sắp.",
        "recognitionSigns": [
          "Đề hỏi mốc chia mẫu thay vì tổng.",
          "Phải sắp dữ liệu trước khi xác định vị trí."
        ],
        "targetQuestionCount": 12
      }
    ],
    "coverage": {
      "targetQuestionCount": 36,
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
      "requiredRepresentations": [
        "text",
        "table",
        "graph",
        "equation"
      ],
      "masteryHoldoutCount": 2
    }
  },
  {
    "questionTypeId": "math10-qt12",
    "subTypes": [
      {
        "id": "math10-qt12-st1",
        "name": "Khoảng biến thiên, IQR và ngoại lệ",
        "example": "Tính độ rộng tổng thể hoặc độ rộng của 50% dữ liệu giữa.",
        "recognitionSigns": [
          "Đề hỏi range, IQR hoặc ngưỡng ngoại lệ.",
          "Cần biết min, max, Q1 và Q3."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt12-st2",
        "name": "Phương sai và độ lệch chuẩn",
        "example": "Đo độ lệch quanh số trung bình.",
        "recognitionSigns": [
          "Đề yêu cầu phương sai hoặc độ lệch chuẩn.",
          "Cần bình phương độ lệch trước khi lấy trung bình."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt12-st3",
        "name": "So sánh và diễn giải độ phân tán",
        "example": "Chọn mẫu ổn định hơn từ các chỉ số hoặc dữ liệu.",
        "recognitionSigns": [
          "Đề có từ hai mẫu trở lên.",
          "Mẫu có chỉ số phân tán nhỏ hơn thường ổn định hơn."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "targetQuestionCount": 42,
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
      "requiredRepresentations": [
        "text",
        "table",
        "graph",
        "equation"
      ],
      "masteryHoldoutCount": 2
    }
  },
  {
    "questionTypeId": "math10-qt13",
    "subTypes": [
      {
        "id": "math10-qt13-st1",
        "name": "Không gian mẫu và biến cố",
        "example": "Mô tả hoặc đếm toàn bộ kết quả sơ cấp.",
        "recognitionSigns": [
          "Đề hỏi các kết quả có thể xảy ra.",
          "Thứ tự có thể làm hai kết quả khác nhau."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt13-st2",
        "name": "Xác suất cổ điển bằng phép đếm",
        "example": "Lấy số kết quả thuận lợi chia tổng số kết quả đồng khả năng.",
        "recognitionSigns": [
          "Không gian mẫu hữu hạn và đồng khả năng.",
          "Cần đếm chính xác biến cố trước khi lập tỉ số."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt13-st3",
        "name": "Biến cố đối và hợp biến cố",
        "example": "Tính xác suất “không”, “ít nhất một” hoặc “A hoặc B”.",
        "recognitionSigns": [
          "Đề có biến cố đối hoặc hợp hai biến cố.",
          "Cần tránh đếm trùng phần giao."
        ],
        "targetQuestionCount": 12
      }
    ],
    "coverage": {
      "targetQuestionCount": 36,
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
      "requiredRepresentations": [
        "text",
        "table",
        "graph",
        "equation"
      ],
      "masteryHoldoutCount": 2
    }
  }
];
