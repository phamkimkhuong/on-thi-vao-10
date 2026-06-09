import { onCall, HttpsError } from "firebase-functions/v2/https";
import { updateStudentProfileFromSession, consolidateProfile } from "../services/profile.js";

export const diagnoseSession = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập.");
  }

  const uid = request.auth.uid;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new HttpsError("failed-precondition", "API Key chưa được cấu hình ở phía máy chủ.");
  }

  const { chatHistory, subjectId } = request.data;
  if (!chatHistory || !Array.isArray(chatHistory)) {
    throw new HttpsError("invalid-argument", "Thiếu lịch sử chat hoặc định dạng không hợp lệ.");
  }

  try {
    const cleanSubjectId = subjectId || "math";
    // Chạy bất đồng bộ chẩn đoán và dọn dẹp dưới nền
    updateStudentProfileFromSession(uid, cleanSubjectId, chatHistory, apiKey)
      .then(() => {
        return consolidateProfile(uid, cleanSubjectId, apiKey);
      })
      .catch((err) => {
        console.error(`Lỗi khi chạy chẩn đoán session/consolidate môn ${cleanSubjectId}:`, err);
      });

    return { success: true };
  } catch (error: any) {
    throw new HttpsError("internal", `Lỗi chẩn đoán phiên: ${error.message}`);
  }
});
