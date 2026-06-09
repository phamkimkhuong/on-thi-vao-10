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
    // Await để đảm bảo tác vụ được hoàn thành đầy đủ trên GCP trước khi đóng function container
    await updateStudentProfileFromSession(uid, cleanSubjectId, chatHistory, apiKey);
    await consolidateProfile(uid, cleanSubjectId, apiKey);

    return { success: true };
  } catch (error: any) {
    throw new HttpsError("internal", `Lỗi chẩn đoán phiên: ${error.message}`);
  }
});
