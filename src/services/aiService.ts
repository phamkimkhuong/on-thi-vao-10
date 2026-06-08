import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import { Question, Solution } from '../types';

interface CallGeminiParams {
  prompt?: string;
  contents?: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }>;
  systemInstruction?: string;
  useRag?: boolean;
  subjectId?: string;
  image?: { data: string; mimeType: string };
}

export const aiService = {
  async callGemini(params: CallGeminiParams): Promise<string> {
    try {
      const callGeminiProxy = httpsCallable<CallGeminiParams, { text: string }>(
        functions,
        'callGeminiProxy'
      );
      const result = await callGeminiProxy(params);
      console.log("[callGemini] Raw result:", result);
      console.log("[callGemini] result.data:", result.data);
      console.log("[callGemini] result.data.text:", result.data?.text);
      return result.data.text;
    } catch (err: any) {
      console.error("Lỗi khi gọi callGeminiProxy:", err);
      // Xử lý thông điệp thân thiện với người dùng
      const message = err.message || 'Không nhận được câu trả lời từ AI.';
      throw new Error(message, { cause: err });
    }
  },

  async askTutor(
    question: Question,
    solution: Solution | undefined,
    studentAnswer: string,
    history: Array<{ role: 'user' | 'model'; text: string }>,
    message: string
  ): Promise<string> {
    const isMath = question.subjectId === 'math';
    const subjectName = isMath ? 'môn Toán' : 'môn Tiếng Anh';
    
    const specificGuidelines = isMath 
      ? `Hướng dẫn chuyên biệt cho môn Toán:
- Sử dụng các biểu thức toán học định dạng LaTeX (ví dụ: $x^2 + 2x + 1 = 0$, $\\frac{a}{b}$) để hiển thị công thức đẹp mắt và chính xác.
- Khi gợi ý suy luận, hãy tập trung vào các khái niệm toán học, định lý, công thức biến đổi và cách vẽ hình (nếu có).
- Gợi ý học sinh phân tích đề bài, xác định các đại lượng đã biết và cần tìm.`
      : `Hướng dẫn chuyên biệt cho môn Tiếng Anh:
- Tập trung vào các quy tắc ngữ pháp, cấu trúc câu, nghĩa của từ vựng, từ loại (verb, noun, adjective...) hoặc ngữ cảnh sử dụng từ trong câu.
- Giải thích các cấu trúc đặc biệt hoặc các bẫy thường gặp trong các đề thi Tiếng Anh vào lớp 10.
- Khuyến khích học sinh xác định "key words" (từ khóa) hoặc các dấu hiệu nhận biết ngữ pháp trong đề bài.`;

    const systemInstruction = `Bạn là một Gia sư AI tận tâm hỗ trợ học sinh Việt Nam ôn thi vào lớp 10 ${subjectName}.
Học sinh đang giải câu hỏi sau:
Đề bài: ${question.content}
${question.options ? 'Các phương án chọn: ' + question.options.join(', ') : ''}
Đáp án đúng chuẩn: ${question.correctAnswer}
${solution ? 'Lời giải chi tiết chuẩn:\n- Nhận dạng: ' + solution.recognition + '\n- Các bước:\n' + solution.detailedSteps.map(s => `+ Bước ${s.order} (${s.title}): ${s.explanation}`).join('\n') : ''}

Học sinh đã trả lời: ${studentAnswer || 'Chưa trả lời'}

Nhiệm vụ của bạn:
1. Đóng vai Gia sư hỗ trợ giải đáp thắc mắc của học sinh về câu hỏi này.
2. Tuyệt đối tuân thủ phương pháp Socratic: KHÔNG đưa ra đáp án cuối cùng hoặc lời giải đầy đủ ngay lập tức. Hãy gợi ý từng bước, đặt câu hỏi ngược lại, chỉ ra lỗi sai nhỏ trong suy luận của học sinh để giúp học sinh tự tư duy và tìm ra đáp số.
3. Trả lời bằng tiếng Việt, ngắn gọn (khoảng 3-4 câu), thân thiện, động viên.
4. Tuyệt đối KHÔNG giải thích, trả lời hoặc bàn luận bất kỳ câu hỏi nào ngoài lề không liên quan đến đề bài này hoặc kiến thức môn học ${subjectName} ôn thi lớp 10 (ví dụ: tin tức xã hội, địa lý chung, đời tư, giải trí, v.v.). Nếu học sinh hỏi ngoài lề, hãy từ chối một cách lịch sự, thân thiện và định hướng học sinh tập trung quay lại giải quyết bài tập hiện tại.

${specificGuidelines}`;

    // Chuyển đổi lịch sử chat sang định dạng contents chuẩn của Gemini
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Thêm tin nhắn hiện tại của học sinh vào contents
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    return this.callGemini({
      contents,
      systemInstruction,
      useRag: true,
      subjectId: question.subjectId
    });
  },

  async gradeProofAttempt(
    question: Question,
    solution: Solution | undefined,
    studentAnswer: string,
    image?: { data: string; mimeType: string }
  ): Promise<{ isCorrect: boolean; feedback: string }> {
    const isMath = question.subjectId === 'math';
    
    const criteria = isMath
      ? 'Kiểm tra xem lời giải và đáp số của học sinh có đúng logic toán học, các bước biến đổi chính xác và đạt yêu cầu không.'
      : 'Kiểm tra xem lời giải/câu trả lời của học sinh có chính xác ngữ pháp, từ vựng, cấu trúc câu và đạt yêu cầu của đề bài không.';

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
2. ${criteria}
3. Trả về kết quả dưới định dạng JSON chính xác như sau (TUYỆT ĐỐI không bao quanh bởi ký tự markdown như \`\`\`json hoặc bất kỳ ký tự nào ngoài JSON):
{
  "isCorrect": true hoặc false,
  "feedback": "Lời nhận xét chi tiết, chỉ ra lỗi sai cụ thể trong bài làm hoặc khen ngợi nếu học sinh giải xuất sắc. Viết bằng tiếng Việt thân thiện, súc tích (2-3 câu)."
}`;

    const textResponse = await this.callGemini({
      prompt,
      image
    });
    
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
