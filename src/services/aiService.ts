import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import { Question, Solution } from '../types';

export const aiService = {
  async callGemini(prompt: string, image?: { data: string; mimeType: string }): Promise<string> {
    try {
      const callGeminiProxy = httpsCallable<{ prompt: string; image?: { data: string; mimeType: string } }, { text: string }>(
        functions,
        'callGeminiProxy'
      );
      const result = await callGeminiProxy({ prompt, image });
      return result.data.text;
    } catch (err: any) {
      console.error("Lỗi khi gọi callGeminiProxy:", err);
      // Xử lý thông điệp thân thiện với người dùng
      const message = err.message || 'Không nhận được câu trả lời từ AI.';
      throw new Error(message);
    }
  },

  async askTutor(
    question: Question,
    solution: Solution | undefined,
    studentAnswer: string,
    history: Array<{ role: 'user' | 'model'; text: string }>,
    message: string
  ): Promise<string> {
    const systemPrompt = `Bạn là một Gia sư AI tận tâm hỗ trợ học sinh Việt Nam ôn thi vào lớp 10 môn Toán và Tiếng Anh.
Học sinh đang giải câu hỏi sau:
Đề bài: ${question.content}
${question.options ? 'Các phương án chọn: ' + question.options.join(', ') : ''}
Đáp án đúng chuẩn: ${question.correctAnswer}
${solution ? 'Lời giải chi tiết chuẩn:\n- Nhận dạng: ' + solution.recognition + '\n- Các bước:\n' + solution.detailedSteps.map(s => `+ Bước ${s.order} (${s.title}): ${s.explanation}`).join('\n') : ''}

Học sinh đã trả lời: ${studentAnswer || 'Chưa trả lời'}

Nhiệm vụ của bạn:
1. Đóng vai Gia sư hỗ trợ giải đáp thắc mắc của học sinh về câu hỏi này.
2. Tuyệt đối tuân thủ phương pháp Socratic: KHÔNG đưa ra đáp án cuối cùng hoặc lời giải đầy đủ ngay lập tức. Hãy gợi ý từng bước, đặt câu hỏi ngược lại, chỉ ra lỗi sai nhỏ trong suy luận của học sinh để giúp học sinh tự tư duy và tìm ra đáp số.
3. Trả lời bằng tiếng Việt, ngắn gọn (khoảng 3-4 câu), thân thiện, động viên.`;

    let prompt = `${systemPrompt}\n\nLịch sử trò chuyện:\n`;
    history.forEach(h => {
      prompt += `${h.role === 'user' ? 'Học sinh' : 'Gia sư'}: ${h.text}\n`;
    });
    prompt += `Học sinh: ${message}\nGia sư:`;

    return this.callGemini(prompt);
  },

  async gradeProofAttempt(
    question: Question,
    solution: Solution | undefined,
    studentAnswer: string,
    image?: { data: string; mimeType: string }
  ): Promise<{ isCorrect: boolean; feedback: string }> {
    const prompt = `Bạn là một giáo viên chấm thi tuyển sinh vào lớp 10 chuyên nghiệp tại Việt Nam.
Hãy chấm bài làm của học sinh cho câu hỏi sau:
Đề bài: ${question.content}
Đáp án đúng chuẩn: ${question.correctAnswer}
${solution ? 'Lời giải chi tiết chuẩn:\n- Nhận dạng: ' + solution.recognition + '\n- Các bước:\n' + solution.detailedSteps.map(s => `+ Bước ${s.order} (${s.title}): ${s.explanation}`).join('\n') : ''}

Bài làm của học sinh:
- Đáp án/Văn bản nộp: ${studentAnswer || 'Không ghi đáp án bằng chữ'}
${image ? '- Có ảnh đính kèm bài làm viết tay của học sinh bên dưới.' : ''}

Nhiệm vụ của bạn:
1. Đọc và phân tích kỹ bài làm của học sinh (đọc hiểu chữ viết tay trong ảnh nếu có).
2. Kiểm tra xem lời giải và đáp số của học sinh có đúng logic toán học và đạt yêu cầu không.
3. Trả về kết quả dưới định dạng JSON chính xác như sau (TUYỆT ĐỐI không bao quanh bởi ký tự markdown như \`\`\`json hoặc bất kỳ ký tự nào ngoài JSON):
{
  "isCorrect": true hoặc false,
  "feedback": "Lời nhận xét chi tiết, chỉ ra lỗi sai cụ thể trong bài làm hoặc khen ngợi nếu học sinh giải xuất sắc. Viết bằng tiếng Việt thân thiện, súc tích (2-3 câu)."
}`;

    const textResponse = await this.callGemini(prompt, image);
    
    try {
      const cleaned = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleaned);
    } catch (err) {
      console.error("Lỗi parse JSON kết quả chấm của Gemini:", textResponse, err);
      return {
        isCorrect: textResponse.toLowerCase().includes('"iscorrect": true') || textResponse.toLowerCase().includes('"iscorrect":true'),
        feedback: textResponse.substring(0, 200) || 'Đã chấm bài làm.'
      };
    }
  }
};
