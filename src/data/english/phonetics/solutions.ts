import { Solution } from '@/types';

export const phoneticsSolutions: Solution[] = [
  {
    "id": "eng-s1",
    "questionId": "eng-q1",
    "recognition": "Đề bài hỏi phát âm đuôi -s của danh từ số nhiều. Ta cần xác định phụ âm cuối của từ gốc trước khi thêm -s.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định phụ âm cuối của từ \"cup\"",
        "explanation": "Từ gốc \"cup\" kết thúc bằng âm /p/ (âm vô thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /s/.",
        "result": "cups -> /kʌps/"
      },
      {
        "order": 2,
        "title": "Xác định phụ âm cuối của từ \"book\"",
        "explanation": "Từ gốc \"book\" kết thúc bằng âm /k/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.",
        "result": "books -> /bʊks/"
      },
      {
        "order": 3,
        "title": "Xác định phụ âm cuối của từ \"bat\"",
        "explanation": "Từ gốc \"bat\" kết thúc bằng âm /t/ (âm vô thanh). Do đó, khi thêm -s đuôi sẽ phát âm là /s/.",
        "result": "bats -> /bæts/"
      },
      {
        "order": 4,
        "title": "Xác định phụ âm cuối của từ \"bag\" và so sánh",
        "explanation": "Từ gốc \"bag\" kết thúc bằng âm /ɡ/ (âm hữu thanh). Theo quy tắc, khi thêm -s đuôi sẽ phát âm là /z/. So sánh 4 từ, \"bags\" phát âm là /z/ trong khi 3 từ còn lại phát âm là /s/.",
        "result": "bags -> /bæɡz/ (Đáp án khác biệt)"
      }
    ],
    "finalAnswer": "D. bags",
    "commonMistakes": [
      "Đọc lướt nhanh dẫn đến nhầm âm /g/ là âm vô thanh",
      "Quên quy tắc nhớ nhanh \"Thảo Phải Kính Phật Tổ\" đại diện cho /θ/, /p/, /k/, /f/, /t/"
    ],
    "reviewSuggestions": [
      "Ôn tập quy tắc phát âm đuôi -s/-es",
      "Học phân biệt âm vô thanh và hữu thanh trong bảng phiên âm quốc tế IPA"
    ]
  },
  {
    "id": "eng-s2",
    "questionId": "eng-q2",
    "recognition": "Đề bài hỏi về quy tắc phát âm đuôi -ed của động từ quá khứ. Ta cần xem xét âm cuối của từ gốc trước khi thêm -ed.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xét phát âm từ gốc của \"wash\"",
        "explanation": "Từ gốc \"wash\" kết thúc bằng âm /ʃ/. Đây là âm vô thanh rít, do đó đuôi -ed sẽ được phát âm là /t/.",
        "result": "washed -> /wɒʃt/"
      },
      {
        "order": 2,
        "title": "Xét phát âm từ gốc của \"work\"",
        "explanation": "Từ gốc \"work\" kết thúc bằng âm /k/ (âm vô thanh). Do đó, đuôi -ed sẽ được phát âm là /t/.",
        "result": "worked -> /wɜːkt/"
      },
      {
        "order": 3,
        "title": "Xét phát âm từ gốc của \"play\"",
        "explanation": "Từ gốc \"play\" kết thúc bằng nguyên âm /eɪ/ (âm hữu thanh). Theo quy tắc, đuôi -ed sẽ được phát âm là /d/.",
        "result": "played -> /pleɪd/"
      },
      {
        "order": 4,
        "title": "Xét phát âm từ gốc của \"watch\" và chọn đáp án",
        "explanation": "Từ gốc \"watch\" kết thúc bằng âm /tʃ/ (âm vô thanh). Đuôi -ed phát âm là /t/. Vậy chỉ có \"played\" có đuôi phát âm là /d/, 3 đáp án còn lại phát âm là /t/.",
        "result": "played -> /pleɪd/ (Đáp án khác biệt là C)"
      }
    ],
    "finalAnswer": "C. played",
    "commonMistakes": [
      "Nhầm lẫn phát âm của \"watched\" và \"washed\" do chữ viết có nét tương đồng"
    ],
    "reviewSuggestions": [
      "Ôn tập quy tắc phát âm đuôi -ed",
      "Đọc to các động từ quá khứ để rèn luyện trí nhớ âm thanh"
    ]
  }
];
