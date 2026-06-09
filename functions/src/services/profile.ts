import { db } from "../config.js";

export async function updateStudentProfile(
  uid: string,
  subjectId: string,
  userMessage: string,
  assistantMessage: string,
  currentProfile: any,
  apiKey: string
): Promise<void> {
  const subProfile = currentProfile?.[subjectId] || {};
  let oldStrengths: string[] = subProfile.strengths || [];
  let oldWeaknesses: string[] = subProfile.weaknesses || [];
  let oldSummary: string = subProfile.learningSummary || "";

  // Tự động di trú dữ liệu cũ từ cấu trúc phẳng sang cấu trúc môn học mới
  if (!currentProfile?.[subjectId] && subjectId === "math") {
    if (currentProfile?.strengths) oldStrengths = currentProfile.strengths;
    if (currentProfile?.weaknesses) oldWeaknesses = currentProfile.weaknesses;
    if (currentProfile?.learningSummary) oldSummary = currentProfile.learningSummary;
  }

  const prompt = `Bạn là một chuyên gia tâm lý giáo dục và chẩn đoán năng lực học sinh ôn thi lớp 10 môn ${subjectId === "math" ? "Toán" : "Tiếng Anh"}.
Nhiệm vụ của bạn là: Đọc lượt hội thoại cuối cùng dưới đây giữa Học sinh và Gia sư AI, đối chiếu với Hồ sơ cũ của học sinh, và trích xuất thêm các điểm mạnh mới, điểm yếu/lỗi sai mới, cũng như cập nhật lại câu tóm tắt tiến trình học tập của học sinh.

Hội thoại cuối cùng:
- Học sinh: "${userMessage}"
- Gia sư AI: "${assistantMessage}"

Hồ sơ cũ của học sinh môn ${subjectId === "math" ? "Toán" : "Tiếng Anh"}:
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      console.warn("LLM updateStudentProfile trả về lỗi HTTP:", response.status);
      return;
    }

    const data = (await response.json()) as any;
    let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    // Clean JSON wrappers if any
    if (rawText.startsWith("```")) {
      rawText = rawText
        .replace(/^```json\s*/i, "")
        .replace(/```\s*$/, "")
        .trim();
    }

    const parsed = JSON.parse(rawText);
    const { newStrengths = [], newWeaknesses = [], learningSummary = "" } = parsed;

    // Merge strengths and weaknesses (remove duplicates and empty values)
    const mergeAndUnique = (oldArr: string[], newArr: any[]) => {
      const combined = [...oldArr, ...newArr.map((s) => String(s).trim())].filter(Boolean);
      return [...new Set(combined)];
    };

    const updatedStrengths = mergeAndUnique(oldStrengths, newStrengths);
    const updatedWeaknesses = mergeAndUnique(oldWeaknesses, newWeaknesses);
    const finalSummary = learningSummary || oldSummary;

    // Cập nhật lên Firestore
    await db.collection("student_profiles").doc(uid).set(
      {
        [subjectId]: {
          strengths: updatedStrengths,
          weaknesses: updatedWeaknesses,
          learningSummary: finalSummary,
          lastUpdated: new Date(),
        },
        lastUpdated: new Date(),
      },
      { merge: true }
    );

    console.log(
      `[Memory] Updated student profile (${subjectId}) for uid: ${uid}. Added strengths: ${JSON.stringify(
        newStrengths
      )}, weaknesses: ${JSON.stringify(newWeaknesses)}`
    );
  } catch (err) {
    console.error("Lỗi khi cập nhật hồ sơ học sinh:", err);
  }
}

export async function updateStudentProfileFromSession(
  uid: string,
  subjectId: string,
  chatHistory: Array<{ role: "user" | "model"; text: string }>,
  apiKey: string
): Promise<void> {
  try {
    const profileDoc = await db.collection("student_profiles").doc(uid).get();
    const currentProfile = profileDoc.exists ? profileDoc.data() : null;

    const subProfile = currentProfile?.[subjectId] || {};
    let oldStrengths: string[] = subProfile.strengths || [];
    let oldWeaknesses: string[] = subProfile.weaknesses || [];
    let oldSummary: string = subProfile.learningSummary || "";

    // Tự động di trú dữ liệu cũ từ cấu trúc phẳng sang cấu trúc môn học mới
    if (!currentProfile?.[subjectId] && subjectId === "math") {
      if (currentProfile?.strengths) oldStrengths = currentProfile.strengths;
      if (currentProfile?.weaknesses) oldWeaknesses = currentProfile.weaknesses;
      if (currentProfile?.learningSummary) oldSummary = currentProfile.learningSummary;
    }

    // Định dạng lịch sử chat thành văn bản đọc được
    const historyText = chatHistory
      .map((m) => {
        const roleName = m.role === "user" ? "Học sinh" : "Gia sư AI";
        return `${roleName}: ${m.text}`;
      })
      .join("\n");

    const prompt = `Bạn là một chuyên gia tâm lý giáo dục và chẩn đoán năng lực học sinh ôn thi lớp 10 môn ${subjectId === "math" ? "Toán" : "Tiếng Anh"}.
Nhiệm vụ của bạn là: Đọc toàn bộ cuộc hội thoại dưới đây giữa Học sinh và Gia sư AI trong một phiên làm bài tập môn ${subjectId === "math" ? "Toán" : "Tiếng Anh"}, đối chiếu với Hồ sơ cũ của học sinh, và trích xuất các điểm mạnh mới, điểm yếu/lỗi sai mới thực sự nổi bật và lặp lại, đồng thời cập nhật lại câu tóm tắt tiến trình học tập của học sinh.

Cuộc hội thoại trong phiên học:
${historyText}

Hồ sơ cũ của học sinh môn ${subjectId === "math" ? "Toán" : "Tiếng Anh"}:
- Điểm mạnh cũ: ${oldStrengths.length > 0 ? JSON.stringify(oldStrengths) : "(Không có)"}
- Điểm yếu/Lỗi sai cũ: ${oldWeaknesses.length > 0 ? JSON.stringify(oldWeaknesses) : "(Không có)"}
- Tóm tắt cũ: "${oldSummary || "(Không có)"}"

Yêu cầu trích xuất:
1. Phân tích cả quá trình: Đừng ghi nhận những lỗi sai nhất thời mà học sinh đã tự sửa được ở các câu sau. Chỉ ghi nhận Điểm yếu mới (newWeaknesses) khi học sinh liên tục tính toán sai, quên điều kiện áp dụng, hoặc lúng túng bền vững ở một phần kiến thức.
2. Điểm mạnh mới (newStrengths): Chỉ ghi nhận khi học sinh tự giải đúng bài tập, hiểu bài nhanh, hoặc áp dụng tốt các gợi ý để tự tìm ra đáp số.
3. Tóm tắt mới (learningSummary): Viết lại 1 câu duy nhất (dưới 30 từ) tóm tắt tiến trình năng lực học sinh sau phiên hội thoại này.
4. Mỗi ý điểm mạnh/yếu chỉ viết từ 3-7 từ ngắn gọn (ví dụ: "Quên đk delta >= 0", "Nhầm dấu công thức Vi-ét").
5. Trả về kết quả dưới dạng cấu trúc JSON sạch, không bọc trong markdown (không dùng \`\`\`json ... \`\`\`), có dạng:
{
  "newStrengths": ["...", "..."],
  "newWeaknesses": ["...", "..."],
  "learningSummary": "..."
}

Kết quả JSON:`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      console.warn("LLM updateStudentProfileFromSession trả về lỗi HTTP:", response.status);
      return;
    }

    const data = (await response.json()) as any;
    let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (rawText.startsWith("```")) {
      rawText = rawText
        .replace(/^```json\s*/i, "")
        .replace(/```\s*$/, "")
        .trim();
    }

    const parsed = JSON.parse(rawText);
    const { newStrengths = [], newWeaknesses = [], learningSummary = "" } = parsed;

    const mergeAndUnique = (oldArr: string[], newArr: any[]) => {
      const combined = [...oldArr, ...newArr.map((s) => String(s).trim())].filter(Boolean);
      return [...new Set(combined)];
    };

    const updatedStrengths = mergeAndUnique(oldStrengths, newStrengths);
    const updatedWeaknesses = mergeAndUnique(oldWeaknesses, newWeaknesses);
    const finalSummary = learningSummary || oldSummary;

    await db.collection("student_profiles").doc(uid).set(
      {
        [subjectId]: {
          strengths: updatedStrengths,
          weaknesses: updatedWeaknesses,
          learningSummary: finalSummary,
          lastUpdated: new Date(),
        },
        lastUpdated: new Date(),
      },
      { merge: true }
    );

    console.log(
      `[Memory] Session diagnosed and updated student profile (${subjectId}) for uid: ${uid}. Added strengths: ${JSON.stringify(
        newStrengths
      )}, weaknesses: ${JSON.stringify(newWeaknesses)}`
    );
  } catch (err) {
    console.error("Lỗi khi cập nhật hồ sơ học sinh từ phiên hội thoại:", err);
  }
}
