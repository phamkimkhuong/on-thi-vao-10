import { QuestionType } from '@/types';

export const g10EnglishModule10QuestionTypes: QuestionType[] = [
  {
    "id": "eng10-qt31",
    "topicId": "eng10-t10",
    "name": "Câu điều kiện loại 1 và loại 2",
    "slug": "conditional-sentences-types-1-2",
    "description": "Phân biệt tình huống có thật/có thể xảy ra với tình huống giả định hoặc khó xảy ra; chia đúng động từ ở mệnh đề if và mệnh đề chính.",
    "exampleQuestionId": "eng10-q373",
    "theory": [
      "Loại 1: $If + S + V_{present}, S + will/can/may + V$ — điều kiện thực hoặc có khả năng trong hiện tại/tương lai.",
      "Loại 2: $If + S + V_{past}, S + would/could/might + V$ — tình huống không có thật hoặc khó xảy ra; *were* dùng được cho mọi chủ ngữ."
    ],
    "subTypes": [
      {
        "name": "Type 1",
        "example": "If tourists follow the rules, they will protect the habitat.",
        "note": "Khả năng thực trong tương lai."
      },
      {
        "name": "Type 2",
        "example": "If I were a park manager, I would limit visitor numbers.",
        "note": "Giả định trái hiện tại."
      }
    ],
    "recognitionSigns": [
      "Có if và quan hệ điều kiện–kết quả.",
      "Từ ngữ cho biết khả năng thực (tomorrow, probably) hoặc giả định (were, would, imagine)."
    ],
    "solvingSteps": [
      "Bước 1: Xét ý nghĩa: có thể xảy ra hay giả định/khó xảy ra.",
      "Bước 2: Chọn cặp thì loại 1 hoặc loại 2.",
      "Bước 3: Kiểm tra không dùng will/would trong mệnh đề if thông thường."
    ],
    "commonMistakes": [
      "Dùng will sau if trong cấu trúc cơ bản.",
      "Nhìn hình thức quá khứ mà quên loại 2 nói về hiện tại/tương lai giả định."
    ],
    "difficulty": "medium",
    "examFrequency": "high"
  },
  {
    "id": "eng10-qt32",
    "topicId": "eng10-t10",
    "name": "Từ vựng trọng tâm: Ecotourism",
    "slug": "vocabulary-ecotourism",
    "description": "Từ và cụm từ về du lịch sinh thái, trách nhiệm của du khách, tác động môi trường và lợi ích cho cộng đồng địa phương.",
    "exampleQuestionId": "eng10-q385",
    "theory": [
      "Từ lõi: *eco-friendly, field trip, litter, responsible, aware, impact, local business, profit, traditional arts and crafts, brochure, wildlife, preservation*.",
      "Collocation: *be responsible for, be aware of, have an impact on, make a profit, leave litter behind, local products/services*."
    ],
    "subTypes": [
      {
        "name": "Nghĩa theo ngữ cảnh",
        "example": "be aware of the damage",
        "note": "Nhận thức được thiệt hại."
      },
      {
        "name": "Collocation và từ loại",
        "example": "environmental impact",
        "note": "environmental là tính từ bổ nghĩa cho impact."
      }
    ],
    "recognitionSigns": [
      "Ngữ cảnh tham quan thiên nhiên, bảo vệ môi trường hoặc hỗ trợ người dân địa phương.",
      "Chỗ trống đòi hỏi đúng từ loại, giới từ hoặc cụm kết hợp cố định."
    ],
    "solvingSteps": [
      "Bước 1: Xác định từ loại và quan hệ nghĩa.",
      "Bước 2: Tìm collocation/dấu hiệu ngữ cảnh.",
      "Bước 3: Loại từ cùng chủ đề nhưng không hợp cấu trúc."
    ],
    "commonMistakes": [
      "Nhầm tourist với tourism.",
      "Nhầm responsible for với responsible to trong nghĩa chịu trách nhiệm làm việc gì."
    ],
    "difficulty": "medium",
    "examFrequency": "high"
  },
  {
    "id": "eng10-qt33",
    "topicId": "eng10-t10",
    "name": "Ngữ điệu câu trần thuật và câu hỏi",
    "slug": "intonation-statements-questions",
    "description": "Chọn ngữ điệu xuống cho câu trần thuật và Wh-question, ngữ điệu lên cho Yes/No question; vận dụng trong hội thoại.",
    "exampleQuestionId": "eng10-q397",
    "theory": [
      "Câu trần thuật thường xuống giọng (↘) ở cuối.",
      "Wh-question thường xuống giọng (↘); Yes/No question thường lên giọng (↗).",
      "Ngữ điệu phụ thuộc chức năng giao tiếp thực tế, không chỉ dấu câu."
    ],
    "subTypes": [
      {
        "name": "Falling intonation",
        "example": "What is an eco-friendly field trip? ↘",
        "note": "Wh-question hỏi thông tin."
      },
      {
        "name": "Rising intonation",
        "example": "Can we bring snacks? ↗",
        "note": "Yes/No question."
      }
    ],
    "recognitionSigns": [
      "Đề hỏi intonation, rising/falling hoặc mũi tên ↗/↘.",
      "Phải xác định loại câu và mục đích giao tiếp."
    ],
    "solvingSteps": [
      "Bước 1: Nhận diện statement, Wh-question hay Yes/No question.",
      "Bước 2: Áp dụng quy tắc ngữ điệu cơ bản.",
      "Bước 3: Với hội thoại, kiểm tra câu đang hỏi thông tin hay xác nhận."
    ],
    "commonMistakes": [
      "Cho rằng mọi câu hỏi đều lên giọng.",
      "Chỉ nhìn dấu hỏi mà không nhận diện Wh-question."
    ],
    "difficulty": "medium",
    "examFrequency": "medium"
  }
];
