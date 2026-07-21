import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { db, payOS } from "../config.js";
import { FieldValue } from "firebase-admin/firestore";

export const validateAffiliateCode = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập để sử dụng mã giảm giá.");
  }

  const codeInput = request.data?.code;
  if (!codeInput || typeof codeInput !== "string") {
    throw new HttpsError("invalid-argument", "Thiếu mã giảm giá.");
  }

  const planId = request.data?.planId === "plan_3m" ? "plan_3m" : "plan_12m";
  const baseAmount = planId === "plan_3m" ? 89000 : 129000;

  const cleanCode = codeInput.trim().toUpperCase();
  const codeDoc = await db.collection("affiliateCodes").doc(cleanCode).get();

  if (!codeDoc.exists) {
    return {
      valid: false,
      message: "Mã giảm giá không tồn tại.",
    };
  }

  const codeData = codeDoc.data() || {};
  if (codeData.isActive === false) {
    return {
      valid: false,
      message: "Mã giảm giá này đã tạm dừng hoạt động.",
    };
  }

  if (codeData.expiresAt && new Date(codeData.expiresAt) < new Date()) {
    return {
      valid: false,
      message: "Mã giảm giá này đã hết hạn sử dụng.",
    };
  }

  if (
    typeof codeData.maxUsage === "number" &&
    codeData.maxUsage > 0 &&
    (codeData.usageCount || 0) >= codeData.maxUsage
  ) {
    return {
      valid: false,
      message: "Mã giảm giá này đã hết lượt sử dụng.",
    };
  }

  const discountPercent = typeof codeData.discountPercent === "number" ? codeData.discountPercent : 20;
  const discountAmount = Math.round((baseAmount * discountPercent) / 100);
  const finalAmount = Math.max(0, baseAmount - discountAmount);

  return {
    valid: true,
    code: cleanCode,
    sellerName: codeData.sellerName || "Đối tác",
    discountPercent,
    originalAmount: baseAmount,
    discountAmount,
    finalAmount,
    message: `Áp dụng mã thành công! Giảm ${discountPercent}% (-${discountAmount.toLocaleString("vi-VN")}đ)`,
  };
});

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

  const { returnUrl, cancelUrl, affiliateCode: rawAffiliateCode, planId: rawPlanId } = request.data;
  if (!returnUrl || !cancelUrl) {
    throw new HttpsError("invalid-argument", "Thiếu tham số returnUrl hoặc cancelUrl.");
  }

  const planId = rawPlanId === "plan_3m" ? "plan_3m" : "plan_12m";
  const durationMonths = planId === "plan_3m" ? 3 : 12;
  const baseAmount = planId === "plan_3m" ? 89000 : 129000;
  let finalAmount = baseAmount;
  let discountAmount = 0;
  let discountPercent = 0;
  let commissionAmount = 0;
  let sellerUid: string | null = null;
  let affiliateCode: string | null = null;

  const description = planId === "plan_3m" ? "Premium ezonthi 3M" : "Premium ezonthi 12M";
  const orderCode = Number(String(Date.now()).slice(-7) + String(Math.floor(Math.random() * 900 + 100)));

  // Tra cứu và kiểm tra mã giảm giá nếu người dùng nhập
  if (rawAffiliateCode && typeof rawAffiliateCode === "string") {
    const cleanCode = rawAffiliateCode.trim().toUpperCase();
    const codeDoc = await db.collection("affiliateCodes").doc(cleanCode).get();

    if (codeDoc.exists) {
      const codeData = codeDoc.data() || {};
      const isExpired = codeData.expiresAt && new Date(codeData.expiresAt) < new Date();
      const isMaxed = typeof codeData.maxUsage === "number" && (codeData.usageCount || 0) >= codeData.maxUsage;

      if (codeData.isActive !== false && !isExpired && !isMaxed) {
        affiliateCode = cleanCode;
        sellerUid = codeData.sellerUid || null;
        discountPercent = typeof codeData.discountPercent === "number" ? codeData.discountPercent : 20;
        discountAmount = Math.round((baseAmount * discountPercent) / 100);
        finalAmount = Math.max(1000, baseAmount - discountAmount);

        const commissionPercent = typeof codeData.commissionPercent === "number" ? codeData.commissionPercent : (75 - discountPercent);
        commissionAmount = Math.round((baseAmount * commissionPercent) / 100);
      }
    }
  }

  const paymentData = {
    orderCode,
    amount: finalAmount,
    description: description.slice(0, 25),
    cancelUrl,
    returnUrl,
    items: [
      {
        name: affiliateCode ? `Premium ${durationMonths}M (-${discountPercent}%)` : `Premium Account ${durationMonths}M`,
        quantity: 1,
        price: finalAmount,
      },
    ],
  };

  try {
    const response = await payOS.paymentRequests.create(paymentData);

    await db.collection("transactions").doc(String(orderCode)).set({
      orderCode,
      userId: uid,
      email,
      planId,
      durationMonths,
      originalAmount: baseAmount,
      discountAmount,
      discountPercent,
      amount: finalAmount,
      affiliateCode,
      sellerUid,
      commissionAmount,
      commissionStatus: sellerUid ? "pending" : null,
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

    if (!body || !body.data || !body.signature) {
      res.status(200).json({
        success: true,
        message: "Webhook ping received successfully",
      });
      return;
    }

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
            commissionStatus: txData.sellerUid ? "credited" : null,
            updatedAt: new Date(),
          });

          // Tính toán số ngày cộng thêm vào hạn dùng Premium
          const durationMonths = txData.durationMonths || (txData.planId === "plan_3m" ? 3 : 12);
          const userRef = db.collection("users").doc(txData.userId);
          const userDoc = await userRef.get();
          let currentExpiry = new Date();

          if (userDoc.exists && userDoc.data()?.premiumUntil) {
            const existingExpiry = new Date(userDoc.data()?.premiumUntil);
            if (existingExpiry > currentExpiry) {
              currentExpiry = existingExpiry;
            }
          }

          const addedMs = durationMonths === 3 ? 90 * 24 * 60 * 60 * 1000 : 365 * 24 * 60 * 60 * 1000;
          const newExpiryDate = new Date(currentExpiry.getTime() + addedMs);

          batch.set(userRef, {
            isPremium: true,
            role: "premium",
            premiumUntil: newExpiryDate.toISOString(),
            premiumUpdatedAt: new Date(),
          }, { merge: true });

          // Cộng tiền hoa hồng cho Seller nguyên tử (atomic)
          if (txData.sellerUid && txData.commissionAmount > 0) {
            const walletRef = db.collection("affiliateWallets").doc(txData.sellerUid);
            batch.set(walletRef, {
              sellerUid: txData.sellerUid,
              balance: FieldValue.increment(txData.commissionAmount),
              totalEarned: FieldValue.increment(txData.commissionAmount),
              updatedAt: new Date(),
            }, { merge: true });
          }

          // Tăng lượt sử dụng cho mã giảm giá
          if (txData.affiliateCode) {
            const codeRef = db.collection("affiliateCodes").doc(txData.affiliateCode);
            batch.update(codeRef, {
              usageCount: FieldValue.increment(1),
            });
          }

          await batch.commit();
          console.log(`[Webhook] Nâng cấp Premium (${durationMonths}M - Hạn tới ${newExpiryDate.toISOString()}) cho user: ${txData.userId}, orderCode: ${orderCode}`);
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


export const grantPremiumByEmail = onCall({
  cors: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Yêu cầu đăng nhập để thực hiện tác vụ này.");
  }

  const callerUid = request.auth.uid;

  // Kiểm tra quyền giáo viên
  const isBootstrap = callerUid === "hzSKwkaroTR1LKcXp09E5wL7F6f1";
  let isAuthorizedTeacher = isBootstrap;

  if (!isAuthorizedTeacher) {
    const teacherDoc = await db.collection("teachers").doc(callerUid).get();
    if (
      teacherDoc.exists &&
      teacherDoc.data()?.active === true &&
      teacherDoc.data()?.role === "teacher"
    ) {
      isAuthorizedTeacher = true;
    }
  }

  if (!isAuthorizedTeacher) {
    throw new HttpsError("permission-denied", "Chỉ giáo viên mới có quyền thực hiện tác vụ này.");
  }

  const { studentEmail } = request.data;
  if (!studentEmail || typeof studentEmail !== "string") {
    throw new HttpsError("invalid-argument", "Thiếu hoặc sai định dạng email học sinh.");
  }

  const targetEmail = studentEmail.trim().toLowerCase();

  // Tìm học sinh theo email
  const usersRef = db.collection("users");
  const querySnapshot = await usersRef.where("email", "==", targetEmail).get();

  if (querySnapshot.empty) {
    throw new HttpsError(
      "not-found",
      `Không tìm thấy tài khoản học sinh với email: ${studentEmail}. Học sinh cần đăng nhập vào hệ thống ít nhất một lần để tạo tài khoản trước.`
    );
  }

  const userDoc = querySnapshot.docs[0];
  const userRef = userDoc.ref;
  const userData = userDoc.data();

  if (userData.isPremium === true || userData.role === "premium") {
    return {
      success: true,
      message: `Học sinh với email ${studentEmail} đã là tài khoản Premium từ trước.`,
      studentName: userData.name || "Học sinh",
    };
  }

  await userRef.set({
    isPremium: true,
    role: "premium",
    premiumUpdatedAt: new Date(),
    grantedByTeacher: callerUid,
  }, { merge: true });

  return {
    success: true,
    message: `Đã cấp quyền Premium thành công cho học sinh ${userData.name || ""} (${targetEmail})!`,
    studentName: userData.name || "Học sinh",
  };
});
