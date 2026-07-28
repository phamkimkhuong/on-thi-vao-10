import type { QuestionTypePracticeBlueprint } from '@/types';

export const g10MathModule8PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    "questionTypeId": "math10-qt14",
    "subTypes": [
      {
        "id": "math10-qt14-st1",
        "name": "Lập phương trình đường thẳng",
        "example": "Viết phương trình từ điểm và vectơ pháp tuyến/chỉ phương.",
        "recognitionSigns": [
          "Đề cho điểm thuộc đường và một vectơ.",
          "Cần xác định vectơ đó là chỉ phương hay pháp tuyến."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt14-st2",
        "name": "Vị trí tương đối và góc",
        "example": "Phân biệt song song, trùng, vuông góc hoặc cắt nhau.",
        "recognitionSigns": [
          "Đề cho hai phương trình đường thẳng.",
          "Cần so sánh cả pháp tuyến và hệ số tự do."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt14-st3",
        "name": "Khoảng cách và ứng dụng",
        "example": "Tính khoảng cách từ điểm đến đường thẳng.",
        "recognitionSigns": [
          "Đề cho M(x0,y0) và ax+by+c=0.",
          "Công thức có giá trị tuyệt đối ở tử và độ dài pháp tuyến ở mẫu."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "targetQuestionCount": 48,
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
        "equation",
        "diagram",
        "graph"
      ],
      "masteryHoldoutCount": 2
    }
  },
  {
    "questionTypeId": "math10-qt15",
    "subTypes": [
      {
        "id": "math10-qt15-st1",
        "name": "Nhận dạng tâm và bán kính",
        "example": "Đọc tâm, bán kính từ phương trình chuẩn.",
        "recognitionSigns": [
          "Phương trình là tổng hai bình phương.",
          "Dấu tọa độ tâm ngược với dấu trong ngoặc."
        ],
        "targetQuestionCount": 12
      },
      {
        "id": "math10-qt15-st2",
        "name": "Lập phương trình đường tròn",
        "example": "Viết phương trình từ tâm và bán kính.",
        "recognitionSigns": [
          "Đề cho tâm trực tiếp hoặc đủ dữ kiện tìm tâm.",
          "Vế phải của dạng chuẩn là R²."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt15-st3",
        "name": "Tiếp tuyến và vị trí tương đối",
        "example": "Viết tiếp tuyến tại điểm thuộc đường tròn.",
        "recognitionSigns": [
          "Có tâm và tiếp điểm.",
          "Bán kính tại tiếp điểm vuông góc tiếp tuyến."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "targetQuestionCount": 48,
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
        "equation",
        "diagram",
        "graph"
      ],
      "masteryHoldoutCount": 2
    }
  },
  {
    "questionTypeId": "math10-qt16",
    "subTypes": [
      {
        "id": "math10-qt16-st1",
        "name": "Elip",
        "example": "Tính tiêu điểm, trục và tâm sai của elip.",
        "recognitionSigns": [
          "Hai bình phương cùng dấu cộng.",
          "Mẫu lớn ứng với bán trục lớn."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt16-st2",
        "name": "Hypebol",
        "example": "Tính tiêu điểm, trục thực và tâm sai của hypebol.",
        "recognitionSigns": [
          "Hai bình phương trái dấu.",
          "Số hạng dương xác định hướng trục thực."
        ],
        "targetQuestionCount": 18
      },
      {
        "id": "math10-qt16-st3",
        "name": "Parabol",
        "example": "Xác định tiêu điểm và đường chuẩn từ dạng chính tắc.",
        "recognitionSigns": [
          "Chỉ một biến được bình phương.",
          "So sánh hệ số với 4a trước khi kết luận."
        ],
        "targetQuestionCount": 18
      }
    ],
    "coverage": {
      "targetQuestionCount": 54,
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
        "equation",
        "diagram",
        "graph"
      ],
      "masteryHoldoutCount": 2
    }
  }
];
