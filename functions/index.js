import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import PayOS from "@payos/node";

initializeApp();
const db = getFirestore();

const payOS = new PayOS(
  process.env.PAYOS_CLIENT_ID || "",
  process.env.PAYOS_API_KEY || "",
  process.env.PAYOS_CHECKSUM_KEY || ""
);

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

// Hàm loại bỏ dấu tiếng Việt (đưa về ký tự không dấu)
function removeAccents(str) {
  if (!str) return "";
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");
}

// Hàm trích xuất danh sách các từ khóa có nghĩa (hỗ trợ có dấu và không dấu)
function extractKeywords(text) {
  if (!text) return [];
  const cleanWithAccents = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'\[\]]/g, " ");
  const cleanNoAccents = removeAccents(cleanWithAccents);
  
  const wordsWithAccents = cleanWithAccents.split(/\s+/).filter(w => w.length >= 2);
  const wordsNoAccents = cleanNoAccents.split(/\s+/).filter(w => w.length >= 2);
  
  const combined = [...wordsWithAccents, ...wordsNoAccents];
  // Loại bỏ trùng lặp và giới hạn tối đa 30 từ (do Firestore array-contains-any chỉ hỗ trợ tối đa 30 phần tử)
  return [...new Set(combined)].slice(0, 30);
}

// Hàm tóm tắt hội thoại cũ thành 1 câu duy nhất bằng LLM
async function summarizeHistory(historyToCompress, apiKey) {
  let textToCompress = historyToCompress.map(h => {
    const roleName = h.role === "user" ? "Học sinh" : "Gia sư";
    const text = h.parts?.map(p => p.text).join(" ") || "";
    return `${roleName}: ${text}`;
  }).join("\n");

  const prompt = `Bạn là một trợ lý AI hỗ trợ tóm tắt hội thoại học tập.
Hãy đọc lịch sử hội thoại ôn thi lớp 10 dưới đây và tóm tắt ngắn gọn trạng thái hiện tại của cuộc hội thoại trong đúng 1 CÂU DUY NHẤT.

Yêu cầu tóm tắt:
- Chỉ rõ học sinh đã nắm được kiến thức gì và hiện tại đang gặp khó khăn hay thắc mắc ở phần kiến thức cụ thể nào.
- Trả về duy nhất 1 câu tóm tắt bằng tiếng Việt, ngắn gọn (dưới 30 từ), không có lời dẫn hay giải thích gì thêm.

Hội thoại cần tóm tắt:
${textToCompress}

Câu tóm tắt duy nhất:`;

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
      console.warn("LLM summarizeHistory trả về lỗi HTTP:", response.status);
      return "";
    }
    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
  } catch (err) {
    console.error("Lỗi khi tóm tắt lịch sử chat:", err);
    return "";
  }
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

// Hàm phân tích hội thoại hiện tại và cập nhật hồ sơ học sinh (student_profiles)
async function updateStudentProfile(uid, userMessage, assistantMessage, currentProfile, apiKey) {
  const oldStrengths = currentProfile?.strengths || [];
  const oldWeaknesses = currentProfile?.weaknesses || [];
  const oldSummary = currentProfile?.learningSummary || "";

  const prompt = `Bạn là một chuyên gia tâm lý giáo dục và chẩn đoán năng lực học sinh ôn thi lớp 10.
Nhiệm vụ của bạn là: Đọc lượt hội thoại cuối cùng dưới đây giữa Học sinh và Gia sư AI, đối chiếu với Hồ sơ cũ của học sinh, và trích xuất thêm các điểm mạnh mới, điểm yếu/lỗi sai mới, cũng như cập nhật lại câu tóm tắt tiến trình học tập của học sinh.

Hội thoại cuối cùng:
- Học sinh: "${userMessage}"
- Gia sư AI: "${assistantMessage}"

Hồ sơ cũ của học sinh:
- Điểm mạnh cũ: ${oldStrengths.length > 0 ? JSON.stringify(oldStrengths) : "(Không có)"}
- Điểm yếu/Lỗi sai cũ: ${oldWeaknesses.length > 0 ? JSON.stringify(oldWeaknesses) : "(Không có)"}
- Tóm tắt cũ: "${oldSummary || "(Không có)"}"

Yêu cầu trích xuất:
1. Điểm mạnh mới (newStrengths): Chỉ ghi nhận khi học sinh tự giải đúng bài tập, hiểu bài nhanh, áp dụng đúng công thức, hoặc biết liên kết các kiến thức khó.
2. Điểm yếu mới (newWeaknesses): Ghi nhận khi học sinh tính toán sai số học, quên điều kiện áp dụng, áp dụng sai công thức, nhầm lẫn khái niệm, hoặc thể hiện sự lúng túng ở một phần kiến thức cụ thể.
3. Tóm tắt mới (learningSummary): Viết lại 1 câu duy nhất (dưới 30 từ) tóm tắt toàn bộ tiến trình năng lực hiện tại của học sinh sau lượt hội thoại này.
4. Chỉ ghi nhận các điểm mạnh/yếu THỰC SỰ NỔI BẬT và MỚI (không trùng lặp ngữ nghĩa với Hồ sơ cũ). Mỗi ý chỉ viết từ 3-7 từ ngắn gọn (ví dụ: "Quên đk delta >= 0", "Nhầm dấu công thức Vi-ét").
5. Trả về kết quả dưới dạng cấu trúc JSON sạch, không bọc trong markdown (không dùng \`\`\`json ... \`\`\`), có dạng:
{
  "newStrengths": ["...", "..."],
  "newWeaknesses": ["...", "..."],
  "learningSummary": "..."
}

Kết quả JSON:`;

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
      console.warn("LLM updateStudentProfile trả về lỗi HTTP:", response.status);
      return;
    }
    const data = await response.json();
    let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    
    // Clean JSON wrappers if any
    if (rawText.startsWith("```")) {
      rawText = rawText.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
    }
    
    const parsed = JSON.parse(rawText);
    const { newStrengths = [], newWeaknesses = [], learningSummary = "" } = parsed;

    // Merge strengths and weaknesses (remove duplicates and empty values)
    const mergeAndUnique = (oldArr, newArr) => {
      const combined = [...oldArr, ...newArr.map(s => s.trim())].filter(Boolean);
      return [...new Set(combined)];
    };

    const updatedStrengths = mergeAndUnique(oldStrengths, newStrengths);
    const updatedWeaknesses = mergeAndUnique(oldWeaknesses, newWeaknesses);
    const finalSummary = learningSummary || oldSummary;

    // Cập nhật lên Firestore
    await db.collection("student_profiles").doc(uid).set({
      strengths: updatedStrengths,
      weaknesses: updatedWeaknesses,
      learningSummary: finalSummary,
      lastUpdated: new Date()
    }, { merge: true });
    
    console.log(`[Memory] Updated student profile for uid: ${uid}. Added strengths: ${JSON.stringify(newStrengths)}, weaknesses: ${JSON.stringify(newWeaknesses)}`);
  } catch (err) {
    console.error("Lỗi khi cập nhật hồ sơ học sinh:", err);
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

  const { prompt, contents, systemInstruction, useRag, subjectId, image, responseMimeType, responseSchema, temperature } = request.data;
  if (!prompt && !contents) {
    throw new HttpsError("invalid-argument", "Thiếu tham số prompt hoặc contents.");
  }

  // 1.15 Tải hồ sơ năng lực học sinh (Long-term Memory)
  let studentProfile = null;
  let profileInstruction = "";
  try {
    const profileDoc = await db.collection("student_profiles").doc(uid).get();
    if (profileDoc.exists) {
      studentProfile = profileDoc.data();
      const strengths = studentProfile.strengths || [];
      const weaknesses = studentProfile.weaknesses || [];
      const summary = studentProfile.learningSummary || "";
      
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
      isPremium = userData.isPremium === true || userData.role === "premium";
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
                distanceThreshold: 0.3
              });

            // 2. Tạo Promise 2: Keyword Search (array-contains-any)
            const queryKeywords = extractKeywords(rewrittenQuery);
            let keywordQueryPromise = Promise.resolve({ docs: [] });
            
            if (queryKeywords.length > 0) {
              console.log(`[RAG] Keyword Search query tokens: ${JSON.stringify(queryKeywords)}`);
              keywordQueryPromise = db.collection("knowledge_base")
                .where("subjectId", "==", subjectId)
                .where("keywords", "array-contains-any", queryKeywords)
                .limit(2)
                .get()
                .catch(err => {
                  console.error("Lỗi khi truy vấn keyword search (sẽ bỏ qua):", err);
                  return { docs: [] };
                });
            }

            // Chạy song song cả hai truy vấn
            const [vectorSnap, keywordSnap] = await Promise.all([
              vectorQuery.get(),
              keywordQueryPromise
            ]);

            const mergedDocsMap = new Map();

            // Đọc kết quả từ Vector Search trước (độ ưu tiên cao hơn)
            vectorSnap.forEach(doc => {
              const data = doc.data();
              const uniqueId = doc.id;
              mergedDocsMap.set(uniqueId, {
                id: uniqueId,
                title: data.title,
                parentTitle: data.parentTitle,
                content: data.content,
                source: "vector"
              });
            });

            // Đọc kết quả từ Keyword Search
            keywordSnap.forEach(doc => {
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
                  source: "keyword"
                });
              }
            });

            // Lấy danh sách kết quả đã loại trùng và giới hạn tối đa 2 tài liệu (Tối ưu hóa token)
            const mergedDocuments = Array.from(mergedDocsMap.values()).slice(0, 2);
            console.log(`[RAG] Hybrid search merged ${mergedDocuments.length} unique document(s). Sources: ${mergedDocuments.map(d => `${d.id}(${d.source})`).join(", ")}`);

            if (mergedDocuments.length > 0) {
              ragContext = "\n\nTÀI LIỆU THAM KHẢO LIÊN QUAN:\n" + mergedDocuments.map(d => `---
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
  let finalContents = contents;
  
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
    // Clone finalContents để tránh mutate data của client gửi lên
    finalContents = JSON.parse(JSON.stringify(finalContents));
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

      // Pha cập nhật (Update Memory): Phân tích cuộc hội thoại hiện tại để cập nhật hồ sơ học sinh (Chạy bất đồng bộ, bỏ qua tin nhắn xã giao ngắn để tối ưu hóa tokens & latency)
      if (uid && responseText && queryText) {
        const cleanedQuery = queryText.trim().toLowerCase();
        const socialRegex = /^(chào|helo|hello|hi|chào thầy|chào cô|xin chào|dạ|vâng|ok|oke|cảm ơn|cám ơn|thanks|thank you|em cảm ơn|dạ em cảm ơn|dạ vâng|vâng ạ|em hiểu rồi|dạ em hiểu rồi|dạ rõ rồi|ok ạ|dạ ok|dạ vâng ạ|ạ)[.!?;]*$/i;
        const isSocialQuery = cleanedQuery.length < 15 && socialRegex.test(cleanedQuery);
        
        if (!isSocialQuery) {
          updateStudentProfile(uid, queryText, responseText, studentProfile, apiKey).catch(err => {
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
        timestamp: new Date()
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
      totalTokens: successUsage.totalTokenCount || 0
    } : null
  };
});

export const createPaymentLink = onCall({
  cors: true
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập để mua gói Premium.");
  }

  const uid = request.auth.uid;
  const email = request.auth.token?.email || "";

  // Gói Premium giá 99.000 VNĐ
  const amount = 99000;
  const description = "Rut gon, Vi-et, hinh hoc 10"; 
  
  // PayOS orderCode must be a positive integer (53-bit integer limit)
  const orderCode = Number(String(Date.now()).slice(-7) + String(Math.floor(Math.random() * 900 + 100)));

  const { returnUrl, cancelUrl } = request.data;
  if (!returnUrl || !cancelUrl) {
    throw new HttpsError("invalid-argument", "Thiếu tham số returnUrl hoặc cancelUrl.");
  }

  const paymentData = {
    orderCode,
    amount,
    description: description.slice(0, 25),
    cancelUrl,
    returnUrl,
    items: [
      {
        name: "Premium Account",
        quantity: 1,
        price: amount
      }
    ]
  };

  try {
    const response = await payOS.createPaymentLink(paymentData);

    await db.collection("transactions").doc(String(orderCode)).set({
      orderCode,
      userId: uid,
      email,
      amount,
      status: "pending",
      paymentLinkId: response.paymentLinkId,
      checkoutUrl: response.checkoutUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return {
      checkoutUrl: response.checkoutUrl,
      orderCode
    };
  } catch (error) {
    console.error("Lỗi tạo link thanh toán PayOS:", error);
    throw new HttpsError("internal", `Không thể tạo liên kết thanh toán: ${error.message}`);
  }
});

export const payosWebhook = onRequest({
  cors: true
}, async (req, res) => {
  try {
    const body = req.body;
    
    // Xác thực chữ ký dữ liệu từ PayOS gửi sang
    const verifiedData = payOS.verifyPaymentWebhookData(body);

    const { orderCode, status } = verifiedData;
    
    if (status === "PAID") {
      const txRef = db.collection("transactions").doc(String(orderCode));
      const txDoc = await txRef.get();

      if (txDoc.exists) {
        const txData = txDoc.data();
        if (txData.status !== "completed") {
          const batch = db.batch();

          batch.update(txRef, {
            status: "completed",
            updatedAt: new Date()
          });

          const userRef = db.collection("users").doc(txData.userId);
          batch.set(userRef, {
            isPremium: true,
            role: "premium",
            premiumUpdatedAt: new Date()
          }, { merge: true });

          await batch.commit();
          console.log(`[Webhook] Nâng cấp Premium thành công cho user: ${txData.userId}, orderCode: ${orderCode}`);
        }
      } else {
        console.warn(`[Webhook] Không tìm thấy bản ghi giao dịch cho orderCode: ${orderCode}`);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Webhook processed successfully"
    });
  } catch (error) {
    console.error("Lỗi xử lý webhook PayOS:", error);
    return res.status(400).json({
      success: false,
      message: `Invalid signature or error: ${error.message}`
    });
  }
});
