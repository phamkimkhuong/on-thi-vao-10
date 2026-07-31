import { onCall, HttpsError } from "firebase-functions/v2/https";
import { db } from "../config.js";

interface SendEmailParams {
  apiKey?: string;
  fromName?: string;
  fromEmail?: string;
  to: string | string[];
  subject: string;
  html: string;
}

interface SendBroadcastBatchParams {
  apiKey?: string;
  batchIndex: number; // 0-indexed (0 là Đợt 1)
  batchSize?: number; // Mặc định 95
  fromName?: string;
  fromEmail?: string;
  subject: string;
  html: string;
}

// 1. Hàm gửi đơn lẻ / test email qua Resend
export const sendResendEmail = onCall({
  cors: true,
}, async (request) => {
  const { apiKey, fromName, fromEmail, to, subject, html } = (request.data || {}) as SendEmailParams;

  const activeApiKey = (apiKey && apiKey.trim()) || process.env.RESEND_API_KEY;

  if (!activeApiKey || !activeApiKey.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu Resend API Key trên server.");
  }
  if (!to) {
    throw new HttpsError("invalid-argument", "Thiếu địa chỉ email người nhận.");
  }
  if (!subject || !subject.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu tiêu đề email.");
  }
  if (!html || !html.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu nội dung email.");
  }

  const senderName = fromName || "Ban Giáo Dục ezonthi";
  const senderEmail = fromEmail || "thongbao@ezonthi.com";
  const recipients = Array.isArray(to) ? to : [to];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${activeApiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${senderName} <${senderEmail}>`,
        to: recipients,
        subject: subject.trim(),
        html: html,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || result.error?.message || "Gửi email qua Resend thất bại.");
    }

    return {
      success: true,
      id: result.id,
      message: `Đã gửi email thành công tới ${recipients.join(", ")}`,
    };
  } catch (err: any) {
    console.error("Lỗi gửi email qua Resend Cloud Function:", err);
    throw new HttpsError("internal", err.message || "Lỗi server khi gửi email.");
  }
});

// 2. Hàm đồng bộ toàn bộ email hiện có về document `system/email_directory` (Chỉ cần quét 1 lần)
export const syncEmailDirectory = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập.");
  }

  try {
    const snapshot = await db.collection("users").get();
    const emailSet = new Set<string>();

    snapshot.docs.forEach((docSnap) => {
      const data = docSnap.data();
      const email = data.email || data.userEmail;
      if (email && typeof email === "string" && email.includes("@")) {
        emailSet.add(email.trim().toLowerCase());
      }
    });

    const emails = Array.from(emailSet);
    const directoryRef = db.collection("system").doc("email_directory");

    await directoryRef.set({
      emails: emails,
      totalCount: emails.length,
      updatedAt: new Date().toISOString(),
    }, { merge: true });

    return {
      success: true,
      totalCount: emails.length,
      emails: emails,
      message: `Đã đồng bộ thành công ${emails.length} email học viên vào system/email_directory`,
    };
  } catch (err: any) {
    console.error("Lỗi đồng bộ email_directory:", err);
    throw new HttpsError("internal", err.message || "Không thể đồng bộ danh bạ email.");
  }
});

// 3. Hàm lấy thông tin danh bạ email `system/email_directory` (Chỉ tốn 1 READ!)
export const getEmailDirectory = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập.");
  }

  try {
    const docSnap = await db.collection("system").doc("email_directory").get();
    if (!docSnap.exists) {
      // Nếu chưa có, tiến hành đồng bộ tự động
      const snapshot = await db.collection("users").get();
      const emailSet = new Set<string>();
      snapshot.docs.forEach((d) => {
        const email = d.data().email || d.data().userEmail;
        if (email && typeof email === "string" && email.includes("@")) {
          emailSet.add(email.trim().toLowerCase());
        }
      });

      const emails = Array.from(emailSet);
      const data = {
        emails: emails,
        totalCount: emails.length,
        updatedAt: new Date().toISOString(),
      };
      await db.collection("system").doc("email_directory").set(data);
      return { success: true, ...data };
    }

    const data = docSnap.data() || {};
    return {
      success: true,
      emails: data.emails || [],
      totalCount: data.totalCount || (data.emails ? data.emails.length : 0),
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch (err: any) {
    console.error("Lỗi đọc system/email_directory:", err);
    throw new HttpsError("internal", err.message || "Không thể đọc danh bạ email.");
  }
});

// 4. Hàm gửi email hàng loạt theo Đợt (Phân đợt 95 email/ngày)
export const sendBroadcastBatch = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập.");
  }

  const { apiKey, batchIndex = 0, batchSize = 95, fromName, fromEmail, subject, html } = (request.data || {}) as SendBroadcastBatchParams;
  const activeApiKey = (apiKey && apiKey.trim()) || process.env.RESEND_API_KEY;

  if (!activeApiKey || !activeApiKey.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu Resend API Key trên server.");
  }
  if (!subject || !subject.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu tiêu đề email.");
  }
  if (!html || !html.trim()) {
    throw new HttpsError("invalid-argument", "Thiếu nội dung email.");
  }

  try {
    // Chỉ 1 READ từ document system/email_directory
    const docSnap = await db.collection("system").doc("email_directory").get();
    if (!docSnap.exists) {
      throw new Error("Danh bạ email chưa khởi tạo. Vui lòng bấm 'Đồng bộ danh bạ' trước.");
    }

    const allEmails: string[] = docSnap.data()?.emails || [];
    if (allEmails.length === 0) {
      throw new Error("Danh bạ email trống. Không có học sinh nào để gửi.");
    }

    const totalEmails = allEmails.length;
    const totalBatches = Math.ceil(totalEmails / batchSize);
    const start = batchIndex * batchSize;
    const end = Math.min(start + batchSize, totalEmails);

    if (start >= totalEmails) {
      throw new Error(`Đợt ${batchIndex + 1} vượt quá tổng số học sinh (${totalEmails}).`);
    }

    const batchRecipients = allEmails.slice(start, end);
    const senderName = fromName || "Ban Giáo Dục ezonthi";
    const senderEmail = fromEmail || "thongbao@ezonthi.com";

    // Gửi lần lượt hoặc theo batch 50 (Resend hỗ trợ gửi mảng 'to' hoặc batch gửi từng mail)
    let successCount = 0;
    const failedEmails: string[] = [];

    // Gửi theo từng batch nhỏ 50 emails để tối ưu Resend API limits
    for (let i = 0; i < batchRecipients.length; i += 50) {
      const chunk = batchRecipients.slice(i, i + 50);
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${activeApiKey.trim()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `${senderName} <${senderEmail}>`,
            to: chunk,
            subject: subject.trim(),
            html: html,
          }),
        });

        if (response.ok) {
          successCount += chunk.length;
        } else {
          const errRes = await response.json();
          console.error("Lỗi chunk send:", errRes);
          failedEmails.push(...chunk);
        }
      } catch (err) {
        console.error("Lỗi fetch chunk:", err);
        failedEmails.push(...chunk);
      }
    }

    return {
      success: true,
      batchIndex: batchIndex,
      totalBatches: totalBatches,
      sentCount: successCount,
      failedCount: failedEmails.length,
      totalRecipientsInBatch: batchRecipients.length,
      totalSystemEmails: totalEmails,
      message: `🎉 Đã gửi thành công ${successCount}/${batchRecipients.length} email thuộc Đợt ${batchIndex + 1}/${totalBatches}!`,
    };
  } catch (err: any) {
    console.error("Lỗi sendBroadcastBatch:", err);
    throw new HttpsError("internal", err.message || "Lỗi khi thực hiện gửi email hàng loạt.");
  }
});
