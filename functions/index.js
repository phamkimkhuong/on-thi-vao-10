import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";

initializeApp();

export const callGeminiProxy = onCall({
  cors: true
}, async (request) => {
  // 1. Kiểm tra xác thực (chỉ cho phép user đã đăng nhập hệ thống của chúng ta)
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập để sử dụng tính năng AI.");
  }

  // 2. Lấy API Key từ biến môi trường của server (Secret Manager)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new HttpsError("failed-precondition", "API Key chưa được cấu hình ở phía máy chủ.");
  }

  const { prompt, image } = request.data;
  if (!prompt) {
    throw new HttpsError("invalid-argument", "Thiếu tham số prompt.");
  }

  // 3. Xây dựng payload để gọi đến Gemini API (sử dụng gemini-2.5-flash làm mặc định)
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

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

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ contents })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errMsg = errData?.error?.message || `HTTP error! status: ${response.status}`;
      throw new HttpsError("internal", `Lỗi kết nối Gemini API: ${errMsg}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new HttpsError("internal", "Không nhận được câu trả lời từ Gemini API.");
    }

    return { text };
  } catch (err) {
    console.error("Lỗi gọi Gemini từ backend:", err);
    throw new HttpsError("internal", err.message || "Lỗi xử lý cuộc gọi AI.");
  }
});
