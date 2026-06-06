import { Solution } from '@/types';

export const readingSolutions: Solution[] = [
  {
    "id": "eng-s90",
    "questionId": "eng-q90",
    "recognition": "Câu kiểm tra giới từ đi kèm sau tính từ \"interested\".",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định cấu trúc giới từ",
        "explanation": "Ta có cụm tính từ cố định: be interested + in (thích thú/quan tâm đến việc gì).",
        "result": "Giới từ in"
      }
    ],
    "finalAnswer": "B. in",
    "commonMistakes": [
      "Dịch nghĩa tiếng Việt \"quan tâm VỚI\" dẫn đến chọn with hoặc at."
    ],
    "reviewSuggestions": [
      "Ôn tập các cụm tính từ + giới từ thường gặp."
    ]
  },
  {
    "id": "eng-s91",
    "questionId": "eng-q91",
    "recognition": "Chỗ trống đứng trước cụm từ thời gian cụ thể \"Sunday, June 10th\" (ngày Chủ nhật, mùng 10 tháng 6).",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định giới từ chỉ thời gian",
        "explanation": "Quy tắc giới từ thời gian: dùng \"on\" trước các thứ trong tuần và các ngày cụ thể có ngày-tháng.",
        "result": "Giới từ on"
      }
    ],
    "finalAnswer": "B. on",
    "commonMistakes": [
      "Thấy có tháng June nên vội vàng chọn in (in June), bỏ quên mất có ngày 10th đứng trước/sau hoặc thứ Sunday."
    ],
    "reviewSuggestions": [
      "Quy tắc ghi nhớ: in + tháng/năm, on + thứ/ngày, at + giờ."
    ]
  },
  {
    "id": "eng-s101",
    "questionId": "eng-q101",
    "recognition": "Câu hỏi yêu cầu tìm ý chính (main topic) của bài đọc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đọc và tóm tắt ý chính của từng câu",
        "explanation": "Câu 1: English is the official language. Câu 2: Millions speak English. Câu 3: Learning English helps students... Câu 4: Schools in Binh Dinh emphasize English. Tất cả đều xoay quanh vai trò và sự phổ biến của tiếng Anh.",
        "result": "Chủ đề: Sự quan trọng và phổ biến của tiếng Anh"
      },
      {
        "order": 2,
        "title": "Đối chiếu các phương án",
        "explanation": "A nói về lịch sử Bình Định (sai); C nói về cách học ở Nguyễn Du (chỉ là ví dụ nhỏ); D nói về số lượng trường học (sai). Chỉ có B là chủ đề bao quát chính xác.",
        "result": "Chọn B"
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn phương án C vì thấy có nhắc đến trường THPT Nguyễn Du ở cuối bài, nhưng đó chỉ là một chi tiết minh họa chứ không phải ý chính của cả bài."
    ],
    "reviewSuggestions": [
      "Học cách tìm câu chủ đề (topic sentence) thường nằm ở đầu hoặc cuối bài để xác định main idea."
    ]
  }
];
