import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

// Hạn mức số lượng câu hỏi tối đa của mỗi tài khoản (100 câu hỏi/ngày)
const DAILY_REQUEST_LIMIT = 100;

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

  const { prompt, image } = request.data;
  if (!prompt) {
    throw new HttpsError("invalid-argument", "Thiếu tham số prompt.");
  }

  // 1.1 Kiểm tra hạn mức sử dụng ngày hôm nay cho tất cả tài khoản (cả học sinh và giáo viên)
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

  // 2. Định nghĩa danh sách các model dự phòng (Fallback List) để tối đa hóa hạn mức miễn phí
  const MODELS = [
    "gemini-3.1-flash-lite", // Ưu tiên 1 (500 câu/ngày)
    "gemini-2.5-flash-lite", // Ưu tiên 2 (20 câu/ngày)
    "gemini-2.5-flash",      // Ưu tiên 3 (20 câu/ngày)
    "gemini-3.5-flash",      // Ưu tiên 4 (20 câu/ngày)
    "gemini-3-flash"         // Ưu tiên 5 (20 câu/ngày)
  ];

  const parts = [{ text: prompt }];

  if (image && image.data && image.mimeType) {
    parts.push({
      inlineData: {
        mimeType: image.mimeType,
        data: image.data
      }
    });
  }

  const contents = [{ parts }];
  let responseText = "";
  let lastError = null;
  let successUsage = null;

  // Chạy vòng lặp thử từng model, nếu model trước bị quá hạn mức (429) sẽ tự động chuyển sang model tiếp theo
  for (const model of MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ contents })
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
      // Tiếp tục vòng lặp sang model tiếp theo
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
