import { onCall, HttpsError } from "firebase-functions/v2/https";
import { db, DAILY_REQUEST_LIMIT } from "../config.js";
import { GeminiProxyRequest, ChatContent, ChatPart } from "../types.js";
import {
  getEmbedding,
  extractKeywords,
  summarizeHistory,
  rewriteQuery,
  FALLBACK_MODELS,
} from "../services/gemini.js";
import { updateStudentProfile } from "../services/profile.js";

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
      const strengths: string[] = studentProfile.strengths || [];
      const weaknesses: string[] = studentProfile.weaknesses || [];
      const summary: string = studentProfile.learningSummary || "";

      profileInstruction = `\n\nHỒ SƠ NĂNG LỰC HỌC SINH HIỆN TẠI:`;
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
            console.log(`[RAG] Running Hybrid Search for query: "${rewrittenQuery}"`);

            // 1. Tạo Promise 1: Semantic Vector Search
            const vectorQuery = db.collection("knowledge_base")
              .where("subjectId", "==", subjectId)
              .findNearest({
                vectorField: "embedding",
                queryVector: queryEmbedding,
                distanceMeasure: "COSINE",
                limit: 2,
                distanceThreshold: 0.3,
              });

            // 2. Tạo Promise 2: Keyword Search (array-contains-any)
            const queryKeywords = extractKeywords(rewrittenQuery);
            let keywordQueryPromise = Promise.resolve({ docs: [] } as any);

            if (queryKeywords.length > 0) {
              console.log(`[RAG] Keyword Search query tokens: ${JSON.stringify(queryKeywords)}`);
              keywordQueryPromise = db.collection("knowledge_base")
                .where("subjectId", "==", subjectId)
                .where("keywords", "array-contains-any", queryKeywords)
                .limit(2)
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
                source: "vector",
              });
            });

            // Đọc kết quả từ Keyword Search
            keywordSnap.forEach((doc: any) => {
              const data = doc.data();
              const uniqueId = doc.id;
              // Nếu đã có trong map, đánh dấu là match cả hai, nếu chưa thì thêm mới
              if (mergedDocsMap.has(uniqueId)) {
                mergedDocsMap.get(uniqueId).source += "+keyword";
              } else {
                mergedDocsMap.set(uniqueId, {
                  id: uniqueId,
                  title: data.title,
                  parentTitle: data.parentTitle,
                  content: data.content,
                  source: "keyword",
                });
              }
            });

            // Lấy danh sách kết quả đã loại trùng và giới hạn tối đa 2 tài liệu (Tối ưu hóa token)
            const mergedDocuments = Array.from(mergedDocsMap.values()).slice(0, 2);
            console.log(`[RAG] Hybrid search merged ${mergedDocuments.length} unique document(s). Sources: ${mergedDocuments.map(d => `${d.id}(${d.source})`).join(", ")}`);

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

  // 1.25 Thực hiện nén lịch sử chat nếu quá dài (Sliding Window + LLM Summarization)
  let historySummary = "";
  let finalContents: ChatContent[] | undefined = contents;

  if (contents && contents.length > 5) {
    try {
      // Trích xuất phần hội thoại cũ cần tóm tắt (trừ 4 tin nhắn gần nhất và tin nhắn mới nhất)
      const historyToCompress = contents.slice(0, -5);
      console.log(`[Compression] Summarizing ${historyToCompress.length} legacy chat messages...`);
      historySummary = await summarizeHistory(historyToCompress, apiKey);
      if (historySummary) {
        console.log(`[Compression] Legacy chat summary: "${historySummary}"`);
      }

      // Giữ lại 4 tin nhắn gần nhất + 1 tin nhắn cuối vừa gửi
      finalContents = contents.slice(-5);
    } catch (err) {
      console.error("Lỗi khi thực hiện nén lịch sử chat (sẽ fallback giữ nguyên):", err);
      finalContents = contents;
    }
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

  let responseText = "";
  let lastError: any = null;
  let successUsage: any = null;

  // Chạy vòng lặp thử từng model
  for (const model of FALLBACK_MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const reqPayload: any = {
      contents: finalContents,
    };
    if (finalSystemInstruction) {
      reqPayload.systemInstruction = {
        parts: [{ text: finalSystemInstruction }],
      };
    }
    if (responseMimeType || responseSchema || typeof temperature === "number") {
      reqPayload.generationConfig = {};
      if (responseMimeType) {
        reqPayload.generationConfig.responseMimeType = responseMimeType;
      }
      if (responseSchema) {
        reqPayload.generationConfig.responseSchema = responseSchema;
      }
      if (typeof temperature === "number") {
        reqPayload.generationConfig.temperature = temperature;
      }
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
      console.log(`Gọi thành công model: ${model}`);

      // Pha cập nhật (Update Memory): Phân tích cuộc hội thoại hiện tại để cập nhật hồ sơ học sinh (Chạy bất đồng bộ, bỏ qua tin nhắn xã giao ngắn để tối ưu hóa tokens & latency)
      if (uid && responseText && queryText) {
        const cleanedQuery = queryText.trim().toLowerCase();
        const socialRegex = /^(chào|helo|hello|hi|chào thầy|chào cô|xin chào|dạ|vâng|ok|oke|cảm ơn|cám ơn|thanks|thank you|em cảm ơn|dạ em cảm ơn|dạ vâng|vâng ạ|em hiểu rồi|dạ em hiểu rồi|dạ rõ rồi|ok ạ|dạ ok|dạ vâng ạ|ạ)[.!?;]*$/i;
        const isSocialQuery = cleanedQuery.length < 15 && socialRegex.test(cleanedQuery);

        if (!isSocialQuery) {
          updateStudentProfile(uid, queryText, responseText, studentProfile, apiKey).catch((err) => {
            console.error("Lỗi cập nhật hồ sơ học sinh (async):", err);
          });
        }
      }

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
        timestamp: new Date(),
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
      totalTokens: successUsage.totalTokenCount || 0,
    } : null,
  };
});
