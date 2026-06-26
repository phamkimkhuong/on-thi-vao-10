import { ChatContent } from "../types.js";

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
