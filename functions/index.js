import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

// Hạn mức số lượng câu hỏi tối đa của mỗi tài khoản (100 câu hỏi/ngày)
const DAILY_REQUEST_LIMIT = 100;

// Hàm tạo Vector Embedding sử dụng Gemini Embedding API
async function getEmbedding(text, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "models/gemini-embedding-001",
      content: {
        parts: [{ text }]
      },
      outputDimensionality: 1536
    })
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to generate embedding: ${errText}`);
  }
  const data = await response.json();
  return data?.embedding?.values;
}

// Hàm viết lại câu truy vấn của học sinh dựa trên lịch sử hội thoại bằng LLM
async function rewriteQuery(chatHistory, currentMessage, apiKey) {
  let historyText = "";
  if (chatHistory && chatHistory.length > 0) {
    historyText = chatHistory.map(h => {
      const roleName = h.role === "user" ? "Học sinh" : "Gia sư";
      const text = h.parts?.map(p => p.text).join(" ") || "";
      return `${roleName}: ${text}`;
    }).join("\n");
  }

  const prompt = `Bạn là một trợ lý AI phân tích ngữ cảnh hội thoại ôn thi lớp 10 môn Toán & Tiếng Anh.
Nhiệm vụ của bạn là: Đọc lịch sử trò chuyện và tin nhắn mới nhất của học sinh dưới đây, sau đó VIẾT LẠI tin nhắn mới nhất thành một câu truy vấn tìm kiếm tri thức (search query) độc lập, rõ ràng và đầy đủ ngữ cảnh để tra cứu tài liệu lý thuyết.

Yêu cầu:
- Câu truy vấn mới phải chứa đầy đủ từ khóa chuyên môn (ví dụ: tên thì ngữ pháp, tên định lý, dạng toán, công thức).
- Nếu tin nhắn mới nhất là câu chào hỏi, xã giao (ví dụ: "chào thầy", "em hiểu rồi", "cảm ơn ạ") hoặc KHÔNG chứa bất kỳ thắc mắc kiến thức nào cần tra cứu, hãy trả về chính xác từ khóa "NONE".
- Chỉ trả về duy nhất câu truy vấn được viết lại (hoặc "NONE"), tuyệt đối không giải thích, không thêm ký tự markdown hay từ ngữ thừa thãi.

Lịch sử trò chuyện:
${historyText || "(Không có lịch sử)"}

Tin nhắn mới nhất của học sinh: "${currentMessage}"

Câu truy vấn tìm kiếm tri thức được viết lại (hoặc "NONE"):`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }]
      })
    });
    if (!response.ok) {
      console.warn("LLM rewriteQuery trả về lỗi HTTP:", response.status);
      return currentMessage;
    }
    const data = await response.json();
    const rewritten = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return rewritten || currentMessage;
  } catch (err) {
    console.error("Lỗi khi viết lại query với LLM:", err);
    return currentMessage; // Fallback về câu gốc
  }
}

export const callGeminiProxy = onCall({
  cors: true
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

  const { prompt, contents, systemInstruction, useRag, subjectId, image } = request.data;
  if (!prompt && !contents) {
    throw new HttpsError("invalid-argument", "Thiếu tham số prompt hoặc contents.");
  }

  // 1.1 Kiểm tra hạn mức sử dụng ngày hôm nay cho tất cả tài khoản
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  try {
    const logsSnap = await db.collection("ai_usage_logs")
      .where("userId", "==", uid)
      .where("timestamp", ">=", startOfDay)
      .get();

    const todayRequests = logsSnap.size;

    if (todayRequests >= DAILY_REQUEST_LIMIT) {
      throw new HttpsError(
        "resource-exhausted",
        `Tài khoản của bạn đã dùng hết hạn mức AI hàng ngày (${DAILY_REQUEST_LIMIT} câu hỏi). Vui lòng quay lại vào ngày mai nhé!`
      );
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
        // Stage 2 Semantic Filter: Viết lại câu truy vấn bằng LLM và check NONE
        const chatHistory = contents ? contents.slice(0, -1) : [];
        const rewrittenQuery = await rewriteQuery(chatHistory, queryText, apiKey);
        console.log(`[RAG] LLM rewritten query: "${rewrittenQuery}"`);

        if (rewrittenQuery.toUpperCase() === "NONE") {
          console.log(`[RAG] Query classified as conversational/social by LLM. Skipping RAG.`);
        } else {
          console.log(`[RAG] Generating embedding for: "${rewrittenQuery.substring(0, 50)}..."`);
          const queryEmbedding = await getEmbedding(rewrittenQuery, apiKey);
        if (queryEmbedding) {
          console.log(`[RAG] Querying Firestore vector search for subject: ${subjectId}`);
          const query = db.collection("knowledge_base")
            .where("subjectId", "==", subjectId)
            .findNearest({
              vectorField: "embedding",
              queryVector: queryEmbedding,
              distanceMeasure: "COSINE",
              limit: 3
            });
          const snapshot = await query.get();
          const documents = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            documents.push({
              title: data.title,
              parentTitle: data.parentTitle,
              content: data.content
            });
          });

          if (documents.length > 0) {
            console.log(`[RAG] Found ${documents.length} matching document(s).`);
            ragContext = "\n\nTÀI LIỆU THAM KHẢO LIÊN QUAN:\n" + documents.map(d => `---
[Chủ đề: ${d.parentTitle ? `${d.parentTitle} -> ${d.title}` : d.title}]
Nội dung: ${d.content}`).join("\n") + "\n---";
          } else {
            console.log("[RAG] No matching documents found.");
          }
        }
      }
      }
    } catch (err) {
      console.error("Lỗi khi thực hiện RAG (sẽ tiếp tục chạy không RAG):", err);
    }
  }

  // 1.3 Thiết lập cấu trúc contents & systemInstruction gửi đi
  let finalContents = contents;
  if (!finalContents && prompt) {
    const parts = [{ text: prompt }];
    if (image && image.data && image.mimeType) {
      parts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.data
        }
      });
    }
    finalContents = [{ role: "user", parts }];
  } else if (image && image.data && image.mimeType) {
    // Clone contents để tránh mutate data của client gửi lên
    finalContents = JSON.parse(JSON.stringify(contents));
    let lastUserMsg = null;
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
          data: image.data
        }
      });
    }
  }

  // Kết hợp System Instruction gốc với tài liệu RAG
  let finalSystemInstruction = systemInstruction || "";
  if (ragContext) {
    finalSystemInstruction += ragContext;
  }

  // 2. Định nghĩa danh sách các model dự phòng
  const MODELS = [
    "gemini-3.1-flash-lite", // Ưu tiên 1 (500 câu/ngày)
    "gemini-2.5-flash-lite", // Ưu tiên 2 (20 câu/ngày)
    "gemini-2.5-flash",      // Ưu tiên 3 (20 câu/ngày)
    "gemini-3.5-flash",      // Ưu tiên 4 (20 câu/ngày)
    "gemini-3-flash"         // Ưu tiên 5 (20 câu/ngày)
  ];

  let responseText = "";
  let lastError = null;
  let successUsage = null;

  // Chạy vòng lặp thử từng model
  for (const model of MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const reqPayload = {
      contents: finalContents
    };
    if (finalSystemInstruction) {
      reqPayload.systemInstruction = {
        parts: [{ text: finalSystemInstruction }]
      };
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqPayload)
      });

      // Nếu gặp lỗi quá tần suất gọi (429), ghi log và tiếp tục thử model tiếp theo
      if (response.status === 429) {
        console.warn(`Model ${model} đã hết hạn mức (429). Đang tự động chuyển sang model dự phòng...`);
        lastError = new Error(`Model ${model} trả về lỗi quá hạn mức (429)`);
        continue;
      }

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const errMsg = errData?.error?.message || `HTTP error! status: ${response.status}`;
        lastError = new Error(`Lỗi từ ${model}: ${errMsg}`);
        continue; 
      }

      const data = await response.json();
      responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!responseText) {
        lastError = new Error(`Không nhận được văn bản trả lời từ ${model}`);
        continue;
      }

      // Lấy dữ liệu token tiêu thụ của model chạy thành công
      successUsage = data.usageMetadata;
      console.log(`Gọi thành công model: ${model}`);
      break; // Gọi thành công, thoát khỏi vòng lặp thử model
    } catch (err) {
      console.error(`Lỗi kết nối khi gọi model ${model}:`, err);
      lastError = err;
    }
  }

  // Nếu duyệt qua toàn bộ danh sách mà vẫn không lấy được kết quả
  if (!responseText) {
    throw new HttpsError(
      "internal",
      `Tất cả các model AI dự phòng đều đang bận hoặc hết hạn mức. Chi tiết lỗi cuối: ${lastError?.message}`
    );
  }

  try {
    // 3. Ghi nhận nhật ký sử dụng vào Firestore nếu gọi thành công
    if (successUsage) {
      await db.collection("ai_usage_logs").add({
        userId: uid,
        email: email,
        promptTokens: successUsage.promptTokenCount || 0,
        candidatesTokens: successUsage.candidatesTokenCount || 0,
        totalTokens: successUsage.totalTokenCount || 0,
        timestamp: new Date()
      });
    }
  } catch (err) {
    console.error("Lỗi ghi nhật ký sử dụng token:", err);
  }

  return { text: responseText };
});
