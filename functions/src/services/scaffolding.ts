import { ChatContent } from "../types.js";

/**
 * Các loại ý định (Intent) của học sinh khi gửi tin nhắn.
 * - "summarize": Học sinh muốn nhận kiến thức tổng hợp (tóm tắt, liệt kê, giải thích khái niệm, so sánh...)
 * - "solve": Học sinh gửi bài tập cụ thể cần hướng dẫn giải
 * - "general": Các trường hợp còn lại (trao đổi tự do)
 */
export type UserIntent = "summarize" | "solve" | "general";

/**
 * Danh sách từ khóa nhận diện ý định "summarize" (muốn nhận kiến thức trực tiếp).
 * Được sắp xếp theo thứ tự ưu tiên: cụm từ dài trước (tránh match sai).
 */
const SUMMARIZE_KEYWORDS = [
  // Cụm từ dài (ưu tiên match trước)
  "kiến thức trọng tâm",
  "kiến thức cơ bản",
  "kiến thức cần nhớ",
  "kiến thức quan trọng",
  "tóm tắt kiến thức",
  "tóm tắt lý thuyết",
  "tóm tắt lí thuyết",
  "tóm tắt nội dung",
  "tóm tắt công thức",
  "tổng hợp kiến thức",
  "tổng hợp lý thuyết",
  "tổng hợp công thức",
  "cho em lý thuyết",
  "cho em lí thuyết",
  "cho em kiến thức",
  "cần lý thuyết",
  "cần lí thuyết",
  "hệ thống kiến thức",
  "hệ thống lại",
  "ôn tập lý thuyết",
  "ôn tập lí thuyết",
  // Từ khóa đơn
  "tóm tắt",
  "tổng hợp",
  "liệt kê",
  "nêu các",
  "nêu những",
  "kể tên",
  "so sánh",
  "phân biệt",
  "định nghĩa",
  "khái niệm",
  "giải thích",
  "trình bày",
  "phân tích",
  "hãy nêu",
  "hãy liệt kê",
  "hãy trình bày",
  "hãy giải thích",
  "là gì",
  "là gì?",
  "như thế nào",
  "các dạng",
  "các loại",
  "các bước",
  "các công thức",
  "công thức",
  "quy tắc",
  "tính chất",
  "đặc điểm",
  "phương pháp",
];

/**
 * Danh sách từ khóa nhận diện ý định "solve" (muốn AI hướng dẫn giải bài).
 */
const SOLVE_KEYWORDS = [
  "giải bài",
  "giải giúp",
  "giải hộ",
  "làm bài",
  "tìm x",
  "tính giá trị",
  "chứng minh",
  "chứng minh rằng",
  "tính diện tích",
  "tính chu vi",
  "tính thể tích",
  "giải phương trình",
  "giải hệ",
  "giải bất phương trình",
  "bài này",
  "bài tập",
  "câu này",
  "em không biết làm",
  "em chưa hiểu cách làm",
  "hướng dẫn em giải",
  "hướng dẫn em làm",
];

/**
 * Nhận diện ý định (Intent) của học sinh dựa trên tin nhắn cuối cùng.
 * Phân tích từ khóa trong text của tin nhắn user cuối để xác định:
 * - "summarize": Muốn kiến thức tổng hợp → AI nên trả lời trực tiếp
 * - "solve": Muốn giải bài → Giữ nguyên Socratic
 * - "general": Mặc định → Giữ nguyên Socratic
 */
export function detectUserIntent(contents?: ChatContent[]): UserIntent {
  if (!contents || contents.length === 0) return "general";

  // Tìm tin nhắn user cuối cùng
  let lastUserText = "";
  for (let i = contents.length - 1; i >= 0; i--) {
    if (contents[i].role === "user") {
      const parts = contents[i].parts;
      if (parts) {
        for (const part of parts) {
          if ("text" in part && part.text) {
            lastUserText = part.text;
          }
        }
      }
      break;
    }
  }

  if (!lastUserText) return "general";

  const normalizedText = lastUserText.toLowerCase().trim();

  // Kiểm tra intent "summarize" trước (ưu tiên cao hơn)
  for (const keyword of SUMMARIZE_KEYWORDS) {
    if (normalizedText.includes(keyword)) {
      return "summarize";
    }
  }

  // Kiểm tra intent "solve"
  for (const keyword of SOLVE_KEYWORDS) {
    if (normalizedText.includes(keyword)) {
      return "solve";
    }
  }

  return "general";
}

/**
 * Trả về đoạn instruction ghi đè Scaffolding khi phát hiện intent "summarize".
 * Cho phép AI cung cấp kiến thức trực tiếp, có cấu trúc, thay vì hỏi ngược Socratic.
 */
export function getIntentOverrideInstruction(intent: UserIntent): string | null {
  if (intent !== "summarize") return null;

  return `

[GHI ĐÈ CHẾ ĐỘ GỢI Ý - INTENT: CUNG CẤP KIẾN THỨC TRỰC TIẾP]
Học sinh đang yêu cầu rõ ràng được nhận kiến thức tổng hợp (tóm tắt, liệt kê, giải thích, so sánh...).
TRONG TRƯỜNG HỢP NÀY, bạn PHẢI:
1. **CÓ TRÁCH NHIỆM cung cấp nội dung kiến thức trực tiếp, đầy đủ và có cấu trúc rõ ràng** (dùng heading, danh sách, bảng so sánh nếu phù hợp).
2. Trình bày kiến thức theo thứ tự logic: Định nghĩa → Tính chất/Công thức → Ví dụ minh họa ngắn gọn.
3. KHÔNG hỏi ngược kiểu "Em hãy nhớ lại..." hay "Em có biết... không?" khi mới bắt đầu trả lời. Thay vào đó, hãy đưa kiến thức trước.
4. Sau khi trình bày xong kiến thức, bạn CÓ THỂ đặt 1-2 câu hỏi gợi mở cuối cùng để kiểm tra sự hiểu biết của học sinh.
5. Giữ nguyên các quy tắc LaTeX và SVG đã được quy định.`;
}

/**
 * Xác định cấp độ gợi ý động (Dynamic Scaffolding Level) dựa trên số lượt trao đổi trong lịch sử chat.
 * - Cấp 1 (Khơi gợi khái niệm): 0-2 lượt trao đổi (mặc định)
 * - Cấp 2 (Gợi ý cấu trúc): 3-4 lượt trao đổi
 * - Cấp 3 (Chỉ điểm chi tiết): ≥5 lượt trao đổi
 */
export function determineScaffoldingLevel(contents?: ChatContent[]): number {
  if (!contents || contents.length === 0) return 1;

  // Đếm số lượt trao đổi (user→model pairs)
  let rounds = 0;
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].role === "user") {
      rounds++;
    }
  }

  // Trừ đi 1 vì lượt hiện tại chưa được AI trả lời
  const completedRounds = Math.max(0, rounds - 1);

  if (completedRounds >= 5) return 3;
  if (completedRounds >= 3) return 2;
  return 1;
}

/**
 * Tạo đoạn prompt hướng dẫn AI tuân thủ cấp độ gợi ý tương ứng.
 */
export function getScaffoldingInstruction(level: number, subjectId: string): string {
  const isMath = subjectId === "math";

  const levelDescriptions: { [key: number]: string } = {
    1: isMath
      ? `[CẤP ĐỘ GỢI Ý: 1 - KHƠI GỢI KHÁI NIỆM]
Học sinh mới bắt đầu trao đổi. Hãy gợi ý ở mức độ tổng quát nhất:
- Chỉ hỏi về công thức, định lý tổng quát liên quan (ví dụ: "Muốn tính diện tích tam giác ta cần biết các đại lượng nào?").
- KHÔNG chỉ ra bước giải cụ thể. Chỉ gợi mở hướng suy nghĩ.
- Khuyến khích học sinh nhớ lại kiến thức nền tảng.`
      : `[CẤP ĐỘ GỢI Ý: 1 - KHƠI GỢI KHÁI NIỆM]
Học sinh mới bắt đầu trao đổi. Hãy gợi ý ở mức độ tổng quát nhất:
- Chỉ hỏi về quy tắc ngữ pháp tổng quát (ví dụ: "Em nhớ cấu trúc thì hiện tại hoàn thành có dạng gì không?").
- KHÔNG chỉ ra đáp án hay sửa lỗi cụ thể. Chỉ gợi mở hướng suy nghĩ.
- Khuyến khích học sinh nhớ lại kiến thức nền tảng.`,

    2: isMath
      ? `[CẤP ĐỘ GỢI Ý: 2 - GỢI Ý CẤU TRÚC BIẾN ĐỔI]
Học sinh đã trao đổi nhiều lượt mà chưa giải được. Hãy tăng mức hỗ trợ:
- Hướng dẫn hướng đi cụ thể hơn (ví dụ: "Thử nhóm các hạng tử chứa $x$ chung lại xem sao nhé").
- Gợi ý bước biến đổi tiếp theo nhưng KHÔNG làm thay.
- Có thể chỉ ra phương pháp giải (ví dụ: "Bài này nên dùng phương pháp đặt ẩn phụ").`
      : `[CẤP ĐỘ GỢI Ý: 2 - GỢI Ý CẤU TRÚC]
Học sinh đã trao đổi nhiều lượt mà chưa giải được. Hãy tăng mức hỗ trợ:
- Hướng dẫn cấu trúc cụ thể hơn (ví dụ: "Câu này cần dùng mệnh đề quan hệ rút gọn, em thử bỏ 'who' và chuyển động từ sang dạng V-ing xem").
- Gợi ý dạng ngữ pháp cần dùng nhưng KHÔNG cho đáp án hoàn chỉnh.
- Có thể đưa ví dụ tương tự để học sinh liên hệ.`,

    3: isMath
      ? `[CẤP ĐỘ GỢI Ý: 3 - CHỈ ĐIỂM CHI TIẾT]
Học sinh đã gặp khó khăn kéo dài (≥5 lượt trao đổi). Hãy hỗ trợ tối đa:
- Chỉ ra lỗi sai số học cụ thể (ví dụ: "Em xem lại phép tính $2 \\times (-3)$ ở dòng thứ 2 xem đã đúng dấu chưa").
- Có thể giải mẫu 1 bước trung gian để học sinh bắt chước làm bước tiếp.
- Vẫn giữ tinh thần Socratic nhưng cho phép "mở khoá" nhiều hơn để học sinh không bị bế tắc quá lâu.`
      : `[CẤP ĐỘ GỢI Ý: 3 - CHỈ ĐIỂM CHI TIẾT]
Học sinh đã gặp khó khăn kéo dài (≥5 lượt trao đổi). Hãy hỗ trợ tối đa:
- Chỉ ra lỗi sai cụ thể trong câu trả lời (ví dụ: "Ở đây em dùng 'since' thì động từ phải chia thì hiện tại hoàn thành, không phải quá khứ đơn nhé").
- Có thể cho ví dụ đáp án đúng của một câu tương tự để học sinh đối chiếu.
- Vẫn giữ tinh thần Socratic nhưng cho phép "mở khoá" nhiều hơn để học sinh không bị bế tắc quá lâu.`,
  };

  return "\n\n" + (levelDescriptions[level] || levelDescriptions[1]);
}
