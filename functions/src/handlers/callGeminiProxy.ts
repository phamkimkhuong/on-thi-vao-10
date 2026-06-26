import { onCall, HttpsError } from "firebase-functions/v2/https";
import { db, DAILY_REQUEST_LIMIT } from "../config.js";
import { GeminiProxyRequest, ChatContent, ChatPart } from "../types.js";
import {
  getEmbedding,
  extractKeywords,
  rewriteQuery,
  removeAccents,
  FALLBACK_MODELS,
} from "../services/gemini.js";
import { createHash } from "crypto";

async function callKiraAiApi(
  apiKey: string,
  modelName: string,
  finalContents: ChatContent[] | undefined,
  finalSystemInstruction: string,
  temperature: number | undefined,
  responseMimeType: string | undefined,
  image: { mimeType: string; data: string } | undefined
): Promise<{ text: string; usage: any }> {
  const messages: Array<{ role: string; content: any }> = [];

  // 1. System instruction
  if (finalSystemInstruction) {
    messages.push({
      role: "system",
      content: finalSystemInstruction
    });
  }

  // 2. Chat history (contents)
  if (finalContents && finalContents.length > 0) {
    finalContents.forEach(c => {
      const role = c.role === "model" ? "assistant" : "user";
      const textParts = c.parts.filter(p => p.text).map(p => p.text).join("\n");
      const imageParts = c.parts.filter(p => p.inlineData);
      
      if (imageParts.length > 0) {
        const contentArray: any[] = [];
        if (textParts) {
          contentArray.push({ type: "text", text: textParts });
        }
        imageParts.forEach(img => {
          contentArray.push({
            type: "image_url",
            image_url: {
              url: `data:${img.inlineData!.mimeType};base64,${img.inlineData!.data}`
            }
          });
        });
        messages.push({
          role,
          content: contentArray
        });
      } else {
        messages.push({
          role,
          content: textParts
        });
      }
    });
  }

  // 3. Fallback for direct grading (only system message + image)
  if (messages.length === 1 && messages[0].role === "system" && image) {
    messages.push({
      role: "user",
      content: [
        { type: "text", text: "Hãy chấm bài làm này theo các chỉ dẫn hệ thống ở trên." },
        {
          type: "image_url",
          image_url: {
            url: `data:${image.mimeType};base64,${image.data}`
          }
        }
      ]
    });
  }

  const payload: any = {
    model: modelName,
    messages,
    temperature: temperature ?? 0.7,
  };

  const isJsonRequired = responseMimeType === "application/json" || !responseMimeType;
  if (isJsonRequired) {
    payload.response_format = { type: "json_object" };
  }

  const response = await fetch("https://kiraai.vn/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Kira AI API returned ${response.status}: ${errText}`);
  }

  const data = (await response.json()) as any;
  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Empty response from Kira AI API");
  }

  return {
    text,
    usage: {
      promptTokens: data.usage?.prompt_tokens || 0,
      candidatesTokens: data.usage?.completion_tokens || 0,
      totalTokens: data.usage?.total_tokens || 0
    }
  };
}

async function callGroqAiApi(
  apiKey: string,
  modelName: string,
  finalContents: ChatContent[] | undefined,
  finalSystemInstruction: string,
  temperature: number | undefined,
  responseMimeType: string | undefined,
  image: { mimeType: string; data: string } | undefined
): Promise<{ text: string; usage: any }> {
  const messages: Array<{ role: string; content: any }> = [];

  // 1. System instruction
  if (finalSystemInstruction) {
    messages.push({
      role: "system",
      content: finalSystemInstruction
    });
  }

  // 2. Chat history (contents)
  if (finalContents && finalContents.length > 0) {
    finalContents.forEach(c => {
      const role = c.role === "model" ? "assistant" : "user";
      const textParts = c.parts.filter(p => p.text).map(p => p.text).join("\n");
      const imageParts = c.parts.filter(p => p.inlineData);
      
      if (imageParts.length > 0) {
        const contentArray: any[] = [];
        if (textParts) {
          contentArray.push({ type: "text", text: textParts });
        }
        imageParts.forEach(img => {
          contentArray.push({
            type: "image_url",
            image_url: {
              url: `data:${img.inlineData!.mimeType};base64,${img.inlineData!.data}`
            }
          });
        });
        messages.push({
          role,
          content: contentArray
        });
      } else {
        messages.push({
          role,
          content: textParts
        });
      }
    });
  }

  // 3. Fallback for direct grading (only system message + image)
  if (messages.length === 1 && messages[0].role === "system" && image) {
    messages.push({
      role: "user",
      content: [
        { type: "text", text: "Hãy chấm bài làm này theo các chỉ dẫn hệ thống ở trên." },
        {
          type: "image_url",
          image_url: {
            url: `data:${image.mimeType};base64,${image.data}`
          }
        }
      ]
    });
  }

  const payload: any = {
    model: modelName,
    messages,
    temperature: temperature ?? 0.7,
  };

  // Cấu hình mở khóa thinking và tăng mức độ suy nghĩ theo yêu cầu của user
  if (modelName.startsWith("qwen/qwen3.6")) {
    payload.reasoning_effort = "default";
  } else if (modelName.startsWith("openai/gpt-oss")) {
    payload.reasoning = { effort: "high" };
  }

  const isJsonRequired = responseMimeType === "application/json" || !responseMimeType;
  if (isJsonRequired) {
    payload.response_format = { type: "json_object" };
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq AI API returned ${response.status}: ${errText}`);
  }

  const data = (await response.json()) as any;
  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Empty response from Groq AI API");
  }

  return {
    text,
    usage: {
      promptTokens: data.usage?.prompt_tokens || 0,
      candidatesTokens: data.usage?.completion_tokens || 0,
      totalTokens: data.usage?.total_tokens || 0
    }
  };
}

/**
 * Xác định cấp độ gợi ý động (Dynamic Scaffolding Level) dựa trên số lượt trao đổi trong lịch sử chat.
 * - Cấp 1 (Khơi gợi khái niệm): 0-2 lượt trao đổi (mặc định)
 * - Cấp 2 (Gợi ý cấu trúc): 3-4 lượt trao đổi
 * - Cấp 3 (Chỉ điểm chi tiết): ≥5 lượt trao đổi
 */
function determineScaffoldingLevel(contents?: ChatContent[]): number {
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
function getScaffoldingInstruction(level: number, subjectId: string): string {
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

function isRelevantToTopic(item: string, topicName: string): boolean {
  if (!topicName) return true; // Nếu không có tên chuyên đề, giữ lại tất cả
  
  const cleanStr = (s: string) => {
    return removeAccents(s.toLowerCase())
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 2);
  };

  const topicWords = cleanStr(topicName);
  const itemWords = cleanStr(item);

  // 1. Kiểm tra từ trùng nhau trực tiếp
  const hasDirectOverlap = itemWords.some(w => topicWords.includes(w));
  if (hasDirectOverlap) return true;

  // 2. Tra cứu chéo từ đồng nghĩa/liên quan
  const topicNormalized = removeAccents(topicName.toLowerCase());
  const relatedMap: { [key: string]: string[] } = {
    "vi et": ["vi et", "viét", "delta", "nghiem", "he thuc", "bac hai"],
    "can thuc": ["can", "rut gon", "bieu thuc", "mau thuc", "hang dang thuc"],
    "dai so": ["can", "rut gon", "bieu thuc"],
    "he phuong trinh": ["he", "thuc te", "chuyen dong", "nang suat", "cong viec"],
    "toan thuc te": ["he", "thuc te", "chuyen dong", "nang suat", "cong viec", "phan tram"],
    "ham so": ["ham", "parabol", "duong thang", "cat", "giao diem", "toa do", "tiep xuc"],
    "do thi": ["ham", "parabol", "duong thang", "cat", "giao diem", "toa do", "tiep xuc"],
    "duong tron": ["tron", "tiep tuyen", "noi tiep", "goc", "cung", "day", "tam giac"],
    "hinh hoc": ["tron", "tiep tuyen", "noi tiep", "goc", "cung", "day", "tam giac"],
    "tu vung": ["tu vung", "vocabulary", "word", "nghia"],
    "ngu phap": ["ngu phap", "grammar", "thi", "tense", "verb", "dong tu", "tu loai"],
    "viet": ["viet", "bien doi", "rewrite", "dong", "indirect", "gian tiep", "conditional", "dieu kien", "wish", "although", "despite"]
  };

  for (const [key, relatedWords] of Object.entries(relatedMap)) {
    if (topicNormalized.includes(key)) {
      const itemNormalized = removeAccents(item.toLowerCase());
      const hasRelated = relatedWords.some(word => itemNormalized.includes(word));
      if (hasRelated) return true;
    }
  }

  return false;
}

function shouldRewriteQuery(query: string, chatHistory?: ChatContent[]): boolean {
  if (!chatHistory || chatHistory.length === 0) {
    return false;
  }

  const cleanQuery = query.toLowerCase().trim();
  
  // Các từ khóa chỉ điểm ngữ cảnh phụ thuộc (Việt & Anh)
  const contextIndicators = [
    "tại sao", "vì sao", "sao lại", "thế nào", "như vậy", "này", "kia", "đó", 
    "chỗ", "dòng", "bước", "câu này", "câu đó", "đáp án", "giải thích thêm", 
    "rõ hơn", "chi tiết hơn", "phần này", "đoạn", "hướng dẫn tiếp", "lại",
    "why", "how so", "it", "this", "that", "them", "those", "explain more",
    "why is", "why does", "what about", "again", "then", "step", "đối chiếu"
  ];

  const hasIndicator = contextIndicators.some(indicator => cleanQuery.includes(indicator));
  if (hasIndicator) {
    return true;
  }

  // Nếu câu hỏi quá ngắn, rất có thể đang phụ thuộc ngữ cảnh trò chuyện trước đó
  if (cleanQuery.length < 15) {
    return true;
  }

  return false;
}

export const callGeminiProxy = onCall({
  cors: true,
}, async (request) => {
  // 1. Kiểm tra xác thực (chỉ cho phép user đã đăng nhập hệ thống của chúng ta)
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập để sử dụng tính năng AI.");
  }

  const uid = request.auth.uid;
  const email = request.auth.token?.email || "";

  // Lấy API Key từ biến môi trường của server
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new HttpsError("failed-precondition", "API Key chưa được cấu hình ở phía máy chủ.");
  }

  const data = request.data as GeminiProxyRequest;
  const {
    prompt,
    contents,
    systemInstruction,
    useRag,
    subjectId,
    image,
    responseMimeType,
    responseSchema,
    temperature,
    topicName,
    chatId,
  } = data;

  if (!prompt && !contents) {
    throw new HttpsError("invalid-argument", "Thiếu tham số prompt hoặc contents.");
  }

  // 1.15 Tải hồ sơ năng lực học sinh (Long-term Memory)
  let studentProfile: any = null;
  let profileInstruction = "";
  try {
    const profileDoc = await db.collection("student_profiles").doc(uid).get();
    if (profileDoc.exists) {
      studentProfile = profileDoc.data();
      const cleanSubjectId = subjectId || "math";
      const subProfile = studentProfile[cleanSubjectId] || {};
      
      let strengths: string[] = subProfile.strengths || [];
      let weaknesses: string[] = subProfile.weaknesses || [];
      let summary: string = subProfile.learningSummary || "";

      // Di trú nếu chưa có cấu trúc môn học mới
      if (!studentProfile[cleanSubjectId] && cleanSubjectId === "math") {
        if (studentProfile.strengths) strengths = studentProfile.strengths;
        if (studentProfile.weaknesses) weaknesses = studentProfile.weaknesses;
        if (studentProfile.learningSummary) summary = studentProfile.learningSummary;
      }

      // Lọc điểm mạnh/yếu theo độ liên quan ngữ nghĩa (Semantic/Keyword Relevance) của chuyên đề (Topic)
      if (topicName) {
        const originalStrengthsCount = strengths.length;
        const originalWeaknessesCount = weaknesses.length;

        strengths = strengths.filter(s => isRelevantToTopic(s, topicName));
        weaknesses = weaknesses.filter(w => isRelevantToTopic(w, topicName));

        console.log(`[Relevance Filter] Topic: "${topicName}". Strengths: ${originalStrengthsCount} -> ${strengths.length}, Weaknesses: ${originalWeaknessesCount} -> ${weaknesses.length}`);
      }

      const subjectName = cleanSubjectId === "math" ? "Toán" : "Tiếng Anh";

      if (strengths.length > 0 || weaknesses.length > 0 || summary) {
        profileInstruction = `\n\nHỒ SƠ NĂNG LỰC HỌC SINH MÔN ${subjectName.toUpperCase()} HIỆN TẠI:`;
        if (strengths.length > 0) {
          profileInstruction += `\n- Điểm mạnh: ${strengths.join(", ")}`;
        }
        if (weaknesses.length > 0) {
          profileInstruction += `\n- Điểm yếu / Lỗi sai thường gặp: ${weaknesses.join(", ")}`;
        }
        if (summary) {
          profileInstruction += `\n- Tóm tắt tiến trình học tập: ${summary}`;
        }
        profileInstruction += `\nLưu ý: Hãy khéo léo nhắc nhở học sinh sửa các lỗi sai thường gặp và tận dụng điểm mạnh của mình nếu chủ đề hội thoại liên quan. Tuyệt đối KHÔNG liệt kê trực tiếp toàn bộ hồ sơ này cho học sinh xem, chỉ dùng làm ngữ cảnh sư phạm ngầm để giảng dạy.`;
      }
    }
  } catch (err) {
    console.error("Lỗi khi tải hồ sơ học sinh:", err);
  }

  // 1.05 Kiểm tra xem người dùng có phải là Premium hay không
  let isPremium = false;
  try {
    const userDoc = await db.collection("users").doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      isPremium = userData?.isPremium === true || userData?.role === "premium";
    }
  } catch (err) {
    console.error("Lỗi khi tải thông tin user để check Premium:", err);
  }

  // 1.1 Kiểm tra hạn mức sử dụng ngày hôm nay
  const dailyLimit = isPremium ? DAILY_REQUEST_LIMIT : 20;
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  try {
    const logsSnap = await db.collection("ai_usage_logs")
      .where("userId", "==", uid)
      .where("timestamp", ">=", startOfDay)
      .get();

    const todayRequests = logsSnap.size;

    if (todayRequests >= dailyLimit) {
      if (!isPremium) {
        throw new HttpsError(
          "resource-exhausted",
          "Hôm nay bạn đã dùng hết hạn mức 20 câu hỏi miễn phí. Hãy nâng cấp tài khoản Premium để không giới hạn ôn luyện cùng AI!"
        );
      } else {
        throw new HttpsError(
          "resource-exhausted",
          `Tài khoản của bạn đã dùng hết hạn mức AI hàng ngày (${dailyLimit} câu hỏi). Vui lòng quay lại vào ngày mai nhé!`
        );
      }
    }
  } catch (err) {
    if (err instanceof HttpsError) throw err;
    console.error("Lỗi truy vấn logs sử dụng:", err);
  }

  // 1.2 Thực hiện RAG (Retrieval-Augmented Generation) nếu được yêu cầu
  let ragContext = "";
  let queryText = "";

  // Lấy câu hỏi hiện tại để phân tích
  if (contents && contents.length > 0) {
    for (let i = contents.length - 1; i >= 0; i--) {
      if (contents[i].role === "user") {
        const textParts = contents[i].parts?.filter(p => p.text).map(p => p.text) || [];
        queryText = textParts.join(" ");
        break;
      }
    }
  }
  if (!queryText && prompt) {
    queryText = prompt;
  }

  if (useRag && subjectId && queryText) {
    try {
      console.log(`[RAG] Analyzing query: "${queryText.substring(0, 50)}..."`);

      const cleanedText = queryText.trim().toLowerCase();
      // Stage 1 Fast Filter: Phát hiện nhanh câu chào hỏi/xã giao cực ngắn bằng Regex
      const socialRegex = /^(chào|helo|hello|hi|chào thầy|chào cô|xin chào|dạ|vâng|ok|oke|cảm ơn|cám ơn|thanks|thank you|em cảm ơn|dạ em cảm ơn|dạ vâng|vâng ạ|em hiểu rồi|dạ em hiểu rồi|dạ rõ rồi|ok ạ|dạ ok|dạ vâng ạ|ạ)[.!?;]*$/i;

      if (cleanedText.length < 15 && socialRegex.test(cleanedText)) {
        console.log(`[RAG] Fast-filter triggered: Query classified as conversational/social ("${cleanedText}"). Skipping RAG.`);
      } else {
        const chatHistory = contents ? contents.slice(0, -1) : [];
        let rewrittenQuery = queryText;

        if (shouldRewriteQuery(queryText, chatHistory)) {
          const rewriteResult = await rewriteQuery(chatHistory, queryText, apiKey);
          rewrittenQuery = rewriteResult.rewrittenQuery;
          console.log(`[RAG] LLM rewritten query (context dependent): "${rewrittenQuery}"`);

          if (rewriteResult.usageMetadata) {
            db.collection("ai_usage_logs").add({
              userId: uid,
              email: email,
              promptTokens: rewriteResult.usageMetadata.promptTokenCount || 0,
              candidatesTokens: rewriteResult.usageMetadata.candidatesTokenCount || 0,
              cachedTokens: rewriteResult.usageMetadata.cachedContentTokenCount || 0,
              totalTokens: rewriteResult.usageMetadata.totalTokenCount || 0,
              timestamp: new Date(),
              type: "rewrite",
              model: "gemini-1.5-flash",
              provider: "gemini"
            }).catch((err) => {
              console.error("Lỗi khi ghi log rewriteQuery:", err);
            });
          }
        } else {
          console.log(`[RAG] Bypassed query rewrite (context independent). Using original: "${rewrittenQuery}"`);
        }

        if (rewrittenQuery.toUpperCase() === "NONE") {
          console.log(`[RAG] Query classified as conversational/social by LLM. Skipping RAG.`);
        } else {
          console.log(`[RAG] Generating embedding for: "${rewrittenQuery.substring(0, 50)}..."`);
          const queryEmbedding = await getEmbedding(rewrittenQuery, apiKey);
          if (queryEmbedding) {
            console.log(`[RAG] Running Hybrid Search for query: "${rewrittenQuery}"`);

            // 1. Tạo Promise 1: Semantic Vector Search
            const vectorQuery = db.collection("knowledge_base")
              .where("subjectId", "==", subjectId)
              .findNearest({
                vectorField: "embedding",
                queryVector: queryEmbedding,
                distanceMeasure: "COSINE",
                limit: 4,
                distanceThreshold: 0.4,
              });

            // 2. Tạo Promise 2: Keyword Search (array-contains-any)
            const queryKeywords = extractKeywords(rewrittenQuery);
            let keywordQueryPromise = Promise.resolve({ docs: [] } as any);

            if (queryKeywords.length > 0) {
              console.log(`[RAG] Keyword Search query tokens: ${JSON.stringify(queryKeywords)}`);
              keywordQueryPromise = db.collection("knowledge_base")
                .where("subjectId", "==", subjectId)
                .where("keywords", "array-contains-any", queryKeywords)
                .limit(4)
                .get()
                .catch((err) => {
                  console.error("Lỗi khi truy vấn keyword search (sẽ bỏ qua):", err);
                  return { docs: [] };
                });
            }

            // Chạy song song cả hai truy vấn
            const [vectorSnap, keywordSnap] = await Promise.all([
              vectorQuery.get(),
              keywordQueryPromise,
            ]);

            const mergedDocsMap = new Map<string, any>();

            // Đọc kết quả từ Vector Search trước (độ ưu tiên cao hơn)
            vectorSnap.forEach((doc: any) => {
              const data = doc.data();
              const uniqueId = doc.id;
              mergedDocsMap.set(uniqueId, {
                id: uniqueId,
                title: data.title,
                parentTitle: data.parentTitle,
                content: data.content,
                chunkType: data.chunkType || "overview",
                difficulty: data.difficulty || "medium",
                source: "vector",
                score: 1.0, // Điểm cơ sở cho vector search
              });
            });

            // Đọc kết quả từ Keyword Search
            keywordSnap.forEach((doc: any) => {
              const data = doc.data();
              const uniqueId = doc.id;
              // Nếu đã có trong map, đánh dấu là match cả hai, nếu chưa thì thêm mới
              if (mergedDocsMap.has(uniqueId)) {
                const docObj = mergedDocsMap.get(uniqueId);
                docObj.source += "+keyword";
                docObj.score += 0.5; // Điểm bonus nếu khớp cả hai
              } else {
                mergedDocsMap.set(uniqueId, {
                  id: uniqueId,
                  title: data.title,
                  parentTitle: data.parentTitle,
                  content: data.content,
                  chunkType: data.chunkType || "overview",
                  difficulty: data.difficulty || "medium",
                  source: "keyword",
                  score: 0.7, // Điểm cơ sở cho keyword search
                });
              }
            });

            const candidateDocs = Array.from(mergedDocsMap.values());

            // Thực hiện Reranking / Scoring trong bộ nhớ
            candidateDocs.forEach((doc) => {
              // 1. Khớp chuyên đề (Topic matching)
              if (topicName && doc.parentTitle) {
                const cleanTopic = removeAccents(topicName.toLowerCase()).trim();
                const cleanParentTitle = removeAccents(doc.parentTitle.toLowerCase()).trim();
                if (cleanParentTitle.includes(cleanTopic) || cleanTopic.includes(cleanParentTitle)) {
                  doc.score += 1.5; // Cộng điểm mạnh nếu trùng hoặc tương tự chuyên đề hiện tại
                }
              }

              // 2. Khớp ý định của học sinh (Intent matching dựa trên query)
              const cleanQuery = rewrittenQuery.toLowerCase();
              
              // Nếu hỏi về lỗi sai, cảnh báo -> Ưu tiên chunk 'mistakes'
              if (doc.chunkType === "mistakes" && (cleanQuery.includes("sai") || cleanQuery.includes("lỗi") || cleanQuery.includes("nhầm") || cleanQuery.includes("sửa") || cleanQuery.includes("cảnh báo"))) {
                doc.score += 1.0;
              }
              
              // Nếu hỏi về phương pháp/các bước -> Ưu tiên chunk 'method'
              if (doc.chunkType === "method" && (cleanQuery.includes("làm sao") || cleanQuery.includes("bước") || cleanQuery.includes("cách") || cleanQuery.includes("hướng dẫn") || cleanQuery.includes("phương pháp"))) {
                doc.score += 1.0;
              }

              // Nếu hỏi về ví dụ/mẫu -> Ưu tiên chunk 'example'
              if (doc.chunkType === "example" && (cleanQuery.includes("ví dụ") || cleanQuery.includes("mẫu") || cleanQuery.includes("đề bài") || cleanQuery.includes("phân dạng"))) {
                doc.score += 1.0;
              }

              // 3. Khớp tần suất từ khóa của câu hỏi với tiêu đề chunk (Keyword frequency matching)
              if (queryKeywords && queryKeywords.length > 0 && doc.title) {
                const titleKeywords = extractKeywords(doc.title);
                const matchingKeywordsCount = queryKeywords.filter(k => titleKeywords.includes(k)).length;
                if (matchingKeywordsCount > 0) {
                  doc.score += matchingKeywordsCount * 0.3; // Cộng thêm 0.3 điểm cho mỗi từ khóa trùng khớp trong tiêu đề
                }
              }
            });

            // Sắp xếp giảm dần theo score
            candidateDocs.sort((a, b) => b.score - a.score);

            // Lấy tối đa 2 tài liệu tối ưu nhất để tránh làm phình token context
            const mergedDocuments = candidateDocs.slice(0, 2);
            console.log(`[RAG] Reranked ${candidateDocs.length} candidates. Selected: ${mergedDocuments.map(d => `${d.id}(score:${d.score.toFixed(1)}, source:${d.source}, type:${d.chunkType})`).join(", ")}`);

            if (mergedDocuments.length > 0) {
              ragContext = "\n\nTÀI LIỆU THAM KHẢO LIÊN QUAN:\n" + mergedDocuments.map((d) => `---
[Chủ đề: ${d.parentTitle ? `${d.parentTitle} -> ${d.title}` : d.title}]
Nội dung: ${d.content}`).join("\n") + "\n---";
            } else {
              console.log("[RAG] No matching documents found through Hybrid search.");
            }
          }
        }
      }
    } catch (err) {
      console.error("Lỗi khi thực hiện RAG (sẽ tiếp tục chạy không RAG):", err);
    }
  }

  // 1.25 Thực hiện nén lịch sử chat định kỳ (Batch Summarization + Firestore Caching)
  let historySummary = "";
  let finalContents: ChatContent[] | undefined;

  try {
    // Định vị tài liệu chat tương ứng để đọc/ghi lịch sử tóm tắt
    let chatDocRef;
    if (chatId && chatId !== "general") {
      chatDocRef = db.collection("users").doc(uid).collection("chats").doc(chatId);
    } else {
      chatDocRef = db.collection("users").doc(uid).collection("general_chats").doc(subjectId || "math");
    }

    // Đọc tóm tắt đã lưu trong Firestore
    const chatDoc = await chatDocRef.get();
    const chatData = chatDoc.exists ? chatDoc.data() : null;
    let existingSummary = chatData?.historySummary || "";
    const fullHistory = chatData?.messages || [];

    // Nếu số lượng tin nhắn trong Firestore (lịch sử đầy đủ) đạt chặng >= 10
    if (fullHistory.length >= 10) {
      // Nếu số lượng tin nhắn đạt điểm chốt (checkpoint chia hết cho 5, ví dụ 10, 15, 20...)
      if (fullHistory.length % 5 === 0) {
        // Ta cần tóm tắt toàn bộ phần lịch sử cũ trừ 5 tin nhắn gần nhất
        const messagesToSummarize = fullHistory.slice(0, -5);
        let textToCompress = "";
        
        if (existingSummary) {
          // Gộp tóm tắt cũ với các tin nhắn mới phát sinh từ checkpoint cũ đến nay
          const newMessagesText = messagesToSummarize.slice(5).map((m: any) => {
            const roleName = m.role === "user" ? "Học sinh" : "Gia sư";
            const text = m.text || "";
            return `${roleName}: ${text}`;
          }).join("\n");
          
          textToCompress = `Tóm tắt hội thoại trước đó: ${existingSummary}\nCác lượt hội thoại mới:\n${newMessagesText}`;
        } else {
          // Nếu chưa có tóm tắt cũ, tóm tắt toàn bộ
          textToCompress = messagesToSummarize.map((m: any) => {
            const roleName = m.role === "user" ? "Học sinh" : "Gia sư";
            const text = m.text || "";
            return `${roleName}: ${text}`;
          }).join("\n");
        }

        console.log(`[Compression] Generating new batch summary at checkpoint length: ${fullHistory.length}`);
        
        // Gọi LLM tóm tắt phần text này
        const prompt = `Bạn là một trợ lý AI hỗ trợ tóm tắt hội thoại học tập.
Hãy đọc phần lịch sử và tóm tắt cũ dưới đây để tạo ra 1 câu tóm tắt mới duy nhất (dưới 30 từ), chỉ rõ học sinh hiện tại đã hiểu được kiến thức gì và đang thắc mắc ở chỗ nào.
Không ghi lời dẫn, chỉ trả về đúng 1 câu tóm tắt bằng tiếng Việt.

Nội dung cần tóm tắt:
${textToCompress}

Câu tóm tắt duy nhất:`;

        const summarizeUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;
        const summaryResponse = await fetch(summarizeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          }),
        });

        let newSummary = "";
        let summaryUsage: any = null;
        if (summaryResponse.ok) {
          const summaryData = await summaryResponse.json() as any;
          newSummary = summaryData?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
          summaryUsage = summaryData?.usageMetadata;
        }

        if (newSummary) {
          console.log(`[Compression] Updated batch summary: "${newSummary}"`);
          existingSummary = newSummary;
          // Lưu ngược lại Firestore
          await chatDocRef.set({ historySummary: newSummary }, { merge: true });

          if (summaryUsage) {
            db.collection("ai_usage_logs").add({
              userId: uid,
              email: email,
              promptTokens: summaryUsage.promptTokenCount || 0,
              candidatesTokens: summaryUsage.candidatesTokenCount || 0,
              cachedTokens: summaryUsage.cachedContentTokenCount || 0,
              totalTokens: summaryUsage.totalTokenCount || 0,
              timestamp: new Date(),
              type: "summary",
              model: "gemini-3.1-flash-lite",
              provider: "gemini"
            }).catch((err) => {
              console.error("Lỗi khi ghi log summary:", err);
            });
          }
        }
      }
    }

    historySummary = existingSummary;

    // Để đảm bảo an toàn và tương thích ngược (Backward Compatibility):
    // - Nếu Client mới gửi lên sliding window rút gọn (contents <= 9), ta dùng nguyên contents.
    // - Nếu Client cũ gửi lên toàn bộ history dài (> 9), ta tự động cắt lát lấy 8 tin nhắn gần nhất.
    if (contents && contents.length > 9) {
      finalContents = contents.slice(-8);
    } else {
      finalContents = contents;
    }

    console.log(`[Compression] Sending cached history summary + ${finalContents?.length || 0} messages context.`);

  } catch (err) {
    console.error("Lỗi khi thực hiện Batch Summarization (sẽ gửi toàn bộ):", err);
    finalContents = contents;
  }

  // 1.3 Thiết lập cấu trúc contents & systemInstruction gửi đi
  if (!finalContents && prompt) {
    const parts: ChatPart[] = [{ text: prompt }];
    if (image && image.data && image.mimeType) {
      parts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.data,
        },
      });
    }
    finalContents = [{ role: "user", parts }];
  } else if (image && image.data && image.mimeType && finalContents) {
    // Clone finalContents để tránh mutate data của client gửi lên
    finalContents = JSON.parse(JSON.stringify(finalContents)) as ChatContent[];
    let lastUserMsg: ChatContent | null = null;
    for (let i = finalContents.length - 1; i >= 0; i--) {
      if (finalContents[i].role === "user") {
        lastUserMsg = finalContents[i];
        break;
      }
    }
    if (lastUserMsg) {
      if (!lastUserMsg.parts) lastUserMsg.parts = [];
      lastUserMsg.parts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.data,
        },
      });
    }
  }

  // Kết hợp System Instruction gốc với hồ sơ học sinh, tài liệu RAG và Tóm tắt lịch sử
  let finalSystemInstruction = systemInstruction || "";
  if (profileInstruction) {
    finalSystemInstruction += profileInstruction;
  }
  if (historySummary) {
    finalSystemInstruction += `\n\nTÓM TẮT TIẾN TRÌNH HỘI THOẠI TRƯỚC ĐÓ:\n- ${historySummary}\n`;
  }
  if (ragContext) {
    finalSystemInstruction += ragContext;
  }

  // Xác định và gắn cấp độ gợi ý động (Dynamic Scaffolding) dựa trên số lượt trao đổi
  const scaffoldingLevel = determineScaffoldingLevel(finalContents);
  const cleanSubjectForScaffolding = subjectId || "math";
  if (scaffoldingLevel > 0) {
    const scaffoldingInstruction = getScaffoldingInstruction(scaffoldingLevel, cleanSubjectForScaffolding);
    finalSystemInstruction += scaffoldingInstruction;
    console.log(`[Scaffolding] Subject: "${cleanSubjectForScaffolding}", Detected level: ${scaffoldingLevel}/3 (based on ${finalContents?.length || 0} messages)`);
  }

  // Thêm chỉ thị định dạng JSON bắt buộc nếu đây là Chat Tutor
  if (!responseMimeType) {
    finalSystemInstruction += `\n\n[ĐỊNH DẠNG ĐẦU RA BẮT BUỘC]
Bạn phải trả về phản hồi dưới dạng JSON khớp hoàn toàn với cấu trúc sau:
{
  "tutorResponse": "Lời giảng gợi mở Socratic của thầy bằng tiếng Việt...",
  "newStrengths": ["...", "..."],
  "newWeaknesses": ["...", "..."],
  "learningSummary": "..."
}
Chú ý:
- Lời giảng trong "tutorResponse" phải tuân thủ nghiêm ngặt phương pháp Socratic và định dạng LaTeX inline đô la đơn ($...$).
- "newStrengths" và "newWeaknesses" chỉ ghi nhận các điểm mạnh/yếu mới bộc lộ trong lượt chat này của học sinh. Mỗi điểm từ 3-7 từ. Để trống mảng nếu không phát hiện điểm mới nào.
- "learningSummary" là câu tóm tắt tiến trình học lực hiện tại của học sinh môn này sau lượt chat (dưới 30 từ).`;
  }


  let responseText = "";
  let lastError: any = null;
  let successUsage: any = null;
  let selectedModel = "";
  let selectedProvider = "";

  const instructionHash = createHash("md5").update(finalSystemInstruction).digest("hex");

  const kiraApiKey = process.env.KIRA_API_KEY;
  let kiraSuccess = false;

  if (kiraApiKey) {
    const kiraModels = ["kira-3.5-flash", "kira-2.5-pro"];
    for (const kModel of kiraModels) {
      try {
        console.log(`[Kira AI] Thử kết nối model: ${kModel}...`);
        const result = await callKiraAiApi(
          kiraApiKey,
          kModel,
          finalContents,
          finalSystemInstruction,
          temperature,
          responseMimeType,
          image
        );
        responseText = result.text;
        
        // Cấu hình successUsage tương thích cấu trúc của Gemini để log Firestore hoạt động bình thường
        successUsage = {
          promptTokenCount: result.usage?.promptTokens || 0,
          candidatesTokenCount: result.usage?.candidatesTokens || 0,
          cachedContentTokenCount: 0,
          totalTokenCount: result.usage?.totalTokens || 0
        };
        
        selectedModel = kModel;
        selectedProvider = "kira";
        kiraSuccess = true;
        console.log(`[Kira AI] Thành công sử dụng model: ${kModel}`);
        break;
      } catch (err: any) {
        console.warn(`[Kira AI] Thử model ${kModel} thất bại:`, err.message || err);
        lastError = err;
      }
    }
  }

  const groqApiKey = process.env.GROQ_API_KEY;
  let groqSuccess = false;

  // Nếu Kira thất bại và có Groq API key, ta chạy qua các model của Groq
  if (!kiraSuccess && groqApiKey) {
    const groqModels = ["qwen/qwen3.6-27b", "openai/gpt-oss-120b", "openai/gpt-oss-20b"];
    for (const gModel of groqModels) {
      try {
        console.log(`[Groq AI] Thử kết nối model: ${gModel}...`);
        const result = await callGroqAiApi(
          groqApiKey,
          gModel,
          finalContents,
          finalSystemInstruction,
          temperature,
          responseMimeType,
          image
        );
        responseText = result.text;
        
        successUsage = {
          promptTokenCount: result.usage?.promptTokens || 0,
          candidatesTokenCount: result.usage?.candidatesTokens || 0,
          cachedContentTokenCount: 0,
          totalTokenCount: result.usage?.totalTokens || 0
        };
        
        selectedModel = gModel;
        selectedProvider = "groq";
        groqSuccess = true;
        console.log(`[Groq AI] Thành công sử dụng model: ${gModel}`);
        break;
      } catch (err: any) {
        console.warn(`[Groq AI] Thử model ${gModel} thất bại:`, err.message || err);
        lastError = err;
      }
    }
  }

  // Nếu Kira AI và Groq AI không chạy được hoặc không cấu hình key, ta chạy fallback Gemini
  if (!kiraSuccess && !groqSuccess) {
    console.log("[Fallback] Đang chuyển sang gọi các model Gemini...");
    // Chạy vòng lặp thử từng model
    for (const model of FALLBACK_MODELS) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      let cachedContentName = "";
      try {
        const cacheDocId = `${subjectId || "math"}_${model.replace(/\//g, "_")}`;
        const cacheDocRef = db.collection("users").doc(uid).collection("cached_contexts").doc(cacheDocId);
        const cacheDoc = await cacheDocRef.get();
        const now = new Date();
        
        if (cacheDoc.exists) {
          const cacheData = cacheDoc.data();
          const expiresAt = cacheData?.expiresAt ? new Date(cacheData.expiresAt.seconds ? cacheData.expiresAt.seconds * 1000 : cacheData.expiresAt) : new Date(0);
          
          if (
            cacheData?.hash === instructionHash &&
            cacheData?.model === model &&
            expiresAt > now
          ) {
            cachedContentName = cacheData.cacheName;
            console.log(`[Cache Hit] Reusing context cache: ${cachedContentName} for model ${model}`);
          }
        }
        
        if (!cachedContentName) {
          console.log(`[Cache Miss] Creating context cache for model ${model}...`);
          const fullModelName = model.startsWith("models/") ? model : `models/${model}`;
          const cacheCreateUrl = `https://generativelanguage.googleapis.com/v1beta/cachedContents?key=${apiKey}`;
          
          const cacheResponse = await fetch(cacheCreateUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: fullModelName,
              contents: [
                {
                  role: "user",
                  parts: [{ text: finalSystemInstruction }]
                }
              ],
              ttl: "600s" // 10 minutes cache
            }),
          });
          
          if (cacheResponse.ok) {
            const cacheResult = await cacheResponse.json() as any;
            if (cacheResult?.name) {
              cachedContentName = cacheResult.name;
              const expiresAtDate = cacheResult.expireTime ? new Date(cacheResult.expireTime) : new Date(Date.now() + 600 * 1000);
              
              await cacheDocRef.set({
                cacheName: cachedContentName,
                hash: instructionHash,
                model: model,
                expiresAt: expiresAtDate,
                createdAt: new Date()
              });
              console.log(`[Cache Created] Cache ID: ${cachedContentName}, expires: ${expiresAtDate}`);
            }
          } else {
            const errText = await cacheResponse.text();
            console.warn(`[Cache Failure] Model ${model} does not support caching or error occurred:`, errText);
          }
        }
      } catch (cacheErr) {
        console.error(`[Cache Error] Failed to handle caching for ${model}:`, cacheErr);
      }

      const reqPayload: any = {
        contents: finalContents,
      };
      
      if (cachedContentName) {
        reqPayload.cachedContent = cachedContentName;
      } else if (finalSystemInstruction) {
        reqPayload.systemInstruction = {
          parts: [{ text: finalSystemInstruction }],
        };
      }

      reqPayload.generationConfig = {};
      if (typeof temperature === "number") {
        reqPayload.generationConfig.temperature = temperature;
      }

      if (responseMimeType) {
        reqPayload.generationConfig.responseMimeType = responseMimeType;
        if (responseSchema) {
          reqPayload.generationConfig.responseSchema = responseSchema;
        }
      } else {
        // Bắt buộc đầu ra JSON cấu trúc đối với Chat Tutor
        reqPayload.generationConfig.responseMimeType = "application/json";
        reqPayload.generationConfig.responseSchema = {
          type: "OBJECT",
          properties: {
            tutorResponse: {
              type: "STRING"
            },
            newStrengths: {
              type: "ARRAY",
              items: { type: "STRING" }
            },
            newWeaknesses: {
              type: "ARRAY",
              items: { type: "STRING" }
            },
            learningSummary: {
              type: "STRING"
            }
          },
          required: ["tutorResponse", "newStrengths", "newWeaknesses", "learningSummary"]
        };
      }

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqPayload),
        });

        // Nếu gặp lỗi quá tần suất gọi (429), ghi log và tiếp tục thử model tiếp theo
        if (response.status === 429) {
          console.warn(`Model ${model} đã hết hạn mức (429). Đang tự động chuyển sang model dự phòng...`);
          lastError = new Error(`Model ${model} trả về lỗi quá hạn mức (429)`);
          continue;
        }

        if (!response.ok) {
          const errData = (await response.json().catch(() => ({}))) as any;
          const errMsg = errData?.error?.message || `HTTP error! status: ${response.status}`;
          lastError = new Error(`Lỗi từ ${model}: ${errMsg}`);
          continue;
        }

        const data = (await response.json()) as any;
        responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!responseText) {
          lastError = new Error(`Không nhận được văn bản trả lời từ ${model}`);
          continue;
        }

        // Lấy dữ liệu token tiêu thụ của model chạy thành công
        successUsage = data.usageMetadata;
        selectedModel = model;
        selectedProvider = "gemini";
        console.log(`Gọi thành công model: ${model}`);
        break; // Gọi thành công, thoát khỏi vòng lặp thử model
      } catch (err) {
        console.error(`Lỗi kết nối khi gọi model ${model}:`, err);
        lastError = err;
      }
    }
  }

  // Nếu duyệt qua toàn bộ danh sách mà vẫn không lấy được kết quả
  if (!responseText) {
    throw new HttpsError(
      "internal",
      `Tất cả các model AI dự phòng đều đang bận hoặc hết hạn mức. Chi tiết lỗi cuối: ${lastError?.message}`
    );
  }

  // Nếu là cuộc gọi chat (không phải bài tự luận cần JSON từ frontend), bóc tách JSON và tự động cập nhật profile
  if (!responseMimeType) {
    try {
      let cleanJson = responseText.trim();
      if (cleanJson.startsWith("```")) {
        cleanJson = cleanJson
          .replace(/^```json\s*/i, "")
          .replace(/```\s*$/, "")
          .trim();
      }
      // Chuẩn hóa các dấu backslash đơn (chưa được escape) trước các lệnh LaTeX như \times, \frac để tránh bị JSON.parse chuyển đổi thành phím Tab, phím Form Feed...
      cleanJson = cleanJson.replace(/(?<!\\)\\([a-zA-Z]+)/g, (match, p1) => {
        if (p1 === 'n') {
          return match;
        }
        return '\\\\' + p1;
      });
      const parsed = JSON.parse(cleanJson);
      responseText = parsed.tutorResponse || responseText;
      
      if (uid) {
        const hasNewData = (parsed.newStrengths && parsed.newStrengths.length > 0) || 
                          (parsed.newWeaknesses && parsed.newWeaknesses.length > 0) ||
                          (parsed.learningSummary && parsed.learningSummary !== studentProfile?.[subjectId || "math"]?.learningSummary);
        
        if (hasNewData) {
          const cleanSubjectId = subjectId || "math";
          const subProfile = studentProfile?.[cleanSubjectId] || {};
          const oldStrengths = subProfile.strengths || [];
          const oldWeaknesses = subProfile.weaknesses || [];
          const oldSummary = subProfile.learningSummary || "";
          
          const mergeAndUnique = (oldArr: string[], newArr: any[]) => {
            const combined = [...oldArr, ...newArr.map((s) => String(s).trim())].filter(Boolean);
            return [...new Set(combined)];
          };
          
          const updatedStrengths = mergeAndUnique(oldStrengths, parsed.newStrengths || []);
          const updatedWeaknesses = mergeAndUnique(oldWeaknesses, parsed.newWeaknesses || []);
          const finalSummary = parsed.learningSummary || oldSummary;
          
          await db.collection("student_profiles").doc(uid).set({
            [cleanSubjectId]: {
              strengths: updatedStrengths,
              weaknesses: updatedWeaknesses,
              learningSummary: finalSummary,
              lastUpdated: new Date()
            },
            lastUpdated: new Date()
          }, { merge: true });
          
          console.log(`[Memory] Merged and updated student profile directly via Tutor Socratic response.`);
        }
      }
    } catch (parseErr) {
      console.error("Lỗi phân tích JSON từ phản hồi Tutor gộp:", responseText, parseErr);
    }
  }

  try {
    // 3. Ghi nhận nhật ký sử dụng vào Firestore nếu gọi thành công
    if (successUsage) {
      await db.collection("ai_usage_logs").add({
        userId: uid,
        email: email,
        promptTokens: successUsage.promptTokenCount || 0,
        candidatesTokens: successUsage.candidatesTokenCount || 0,
        cachedTokens: successUsage.cachedContentTokenCount || 0,
        totalTokens: successUsage.totalTokenCount || 0,
        timestamp: new Date(),
        type: responseMimeType ? "proof_grading" : "tutor",
        model: selectedModel,
        provider: selectedProvider
      });
    }
  } catch (err) {
    console.error("Lỗi ghi nhật ký sử dụng token:", err);
  }

  return {
    text: responseText,
    usage: successUsage ? {
      promptTokens: successUsage.promptTokenCount || 0,
      candidatesTokens: successUsage.candidatesTokenCount || 0,
      cachedTokens: successUsage.cachedContentTokenCount || 0,
      totalTokens: successUsage.totalTokenCount || 0,
    } : null,
  };
});
