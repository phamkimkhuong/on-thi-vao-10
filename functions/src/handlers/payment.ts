import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { db, payOS } from "../config.js";

export const createPaymentLink = onCall({
  cors: true,
}, async (request) => {
  if (!payOS) {
    throw new HttpsError("failed-precondition", "Cổng thanh toán PayOS chưa được cấu hình trên máy chủ.");
  }

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
        price: amount,
      },
    ],
  };

  try {
    const response = await payOS.paymentRequests.create(paymentData);

    await db.collection("transactions").doc(String(orderCode)).set({
      orderCode,
      userId: uid,
      email,
      amount,
      status: "pending",
      paymentLinkId: response.paymentLinkId,
      checkoutUrl: response.checkoutUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      checkoutUrl: response.checkoutUrl,
      orderCode,
    };
  } catch (error: any) {
    console.error("Lỗi tạo link thanh toán PayOS:", error);
    throw new HttpsError("internal", `Không thể tạo liên kết thanh toán: ${error.message}`);
  }
});

export const payosWebhook = onRequest({
  cors: true,
}, async (req, res) => {
  if (!payOS) {
    res.status(500).json({
      success: false,
      message: "PayOS is not configured on the server",
    });
    return;
  }

  try {
    const body = req.body;

    // Kiểm tra xem có phải request ping/test từ PayOS không
    if (!body || !body.data || !body.signature) {
      res.status(200).json({
        success: true,
        message: "Webhook ping received successfully",
      });
      return;
    }

    // Xác thực chữ ký dữ liệu từ PayOS gửi sang
    // Ép kiểu sang any vì kiểu WebhookData của SDK có thể thiếu thuộc tính status tại compile-time
    const verifiedData = (await payOS.webhooks.verify(body)) as any;

    const { orderCode, status } = verifiedData;

    if (status === "PAID") {
      const txRef = db.collection("transactions").doc(String(orderCode));
      const txDoc = await txRef.get();

      if (txDoc.exists) {
        const txData = txDoc.data();
        if (txData && txData.status !== "completed") {
          const batch = db.batch();

          batch.update(txRef, {
            status: "completed",
            updatedAt: new Date(),
          });

          const userRef = db.collection("users").doc(txData.userId);
          batch.set(userRef, {
            isPremium: true,
            role: "premium",
            premiumUpdatedAt: new Date(),
          }, { merge: true });

          await batch.commit();
          console.log(`[Webhook] Nâng cấp Premium thành công cho user: ${txData.userId}, orderCode: ${orderCode}`);
        }
      } else {
        console.warn(`[Webhook] Không tìm thấy bản ghi giao dịch cho orderCode: ${orderCode}`);
      }
    }

    res.status(200).json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error: any) {
    console.error("Lỗi xử lý webhook PayOS:", error);
    res.status(400).json({
      success: false,
      message: `Invalid signature or error: ${error.message}`,
    });
  }
});
