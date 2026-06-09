import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hàm xóa toàn bộ tài liệu trong collection theo batch (tối đa 500 tài liệu mỗi batch)
async function deleteCollection(db, collectionPath, batchSize = 100) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, resolve, reject);
  });
}

async function deleteQueryBatch(db, query, resolve, reject) {
  try {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
      resolve();
      return;
    }

    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // Tiếp tục đệ quy xóa batch tiếp theo
    process.nextTick(() => {
      deleteQueryBatch(db, query, resolve, reject);
    });
  } catch (err) {
    reject(err);
  }
}

async function run() {
  const args = process.argv.slice(2);
  const shouldClear = args.includes("--clear") || args.includes("clear") || args.includes("-c");

  const projectId = "on-thi-vao-10-7d87c";
  const serviceAccountPath = path.join(__dirname, "service-account.json");

  // Khởi tạo Firebase Admin SDK
  if (process.env.FIRESTORE_EMULATOR_HOST) {
    admin.initializeApp({ projectId });
  } else if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId
    });
  } else {
    admin.initializeApp({ projectId });
  }

  const db = admin.firestore();

  if (shouldClear) {
    console.log("Quyết định xóa sạch dữ liệu nhật ký sử dụng trong collection 'ai_usage_logs'...");
    
    // Lấy số lượng tài liệu trước khi xóa
    const countSnapshot = await db.collection("ai_usage_logs").get();
    const count = countSnapshot.size;

    if (count === 0) {
      console.log("✨ Collection 'ai_usage_logs' đã trống sẵn rồi. Không cần xóa.");
      return;
    }

    await deleteCollection(db, "ai_usage_logs", 100);
    console.log(`\n✨ Đã xóa sạch thành công ${count} nhật ký sử dụng cũ trên Firestore!`);
    console.log("🚀 Giờ đây bạn có thể bắt đầu cuộc hội thoại mới trên web và chạy lại lệnh này để đo lường chính xác từ 0.");
    return;
  }

  console.log("Đang kết nối tới Firestore và truy vấn dữ liệu ai_usage_logs...\n");

  // Lấy 100 log sử dụng gần nhất
  const snapshot = await db.collection("ai_usage_logs")
    .orderBy("timestamp", "desc")
    .limit(100)
    .get();

  if (snapshot.empty) {
    console.log("❌ Không tìm thấy bản ghi nhật ký sử dụng nào trong collection 'ai_usage_logs'.");
    console.log("💡 Mẹo: Hãy mở web chat thử vài câu rồi chạy lại lệnh này, hoặc dùng 'node functions/analyzeTokens.js --clear' để làm sạch.");
    return;
  }

  const typeMapNames = {
    "tutor": "Gia sư AI (Tutor)",
    "rewrite": "Viết lại câu hỏi (Rewrite)",
    "summary": "Tóm tắt lịch sử (Summary)",
    "diagnose": "Chẩn đoán phiên (Diagnose)",
    "consolidate": "Tinh gọn bộ nhớ (Consolidate)",
    "proof_grading": "Chấm bài tự luận (Grading)"
  };

  const logs = [];
  let totalPrompt = 0;
  let totalCandidates = 0;
  let totalAll = 0;

  const breakdown = {};
  Object.keys(typeMapNames).forEach(k => {
    breakdown[k] = { count: 0, promptTokens: 0, candidatesTokens: 0, totalTokens: 0 };
  });

  snapshot.forEach(doc => {
    const data = doc.data();
    const rawType = data.type || "tutor";
    const type = typeMapNames[rawType] ? rawType : "tutor";

    logs.push({
      id: doc.id,
      email: data.email || "N/A",
      promptTokens: data.promptTokens || 0,
      candidatesTokens: data.candidatesTokens || 0,
      totalTokens: data.totalTokens || 0,
      type: typeMapNames[type],
      time: data.timestamp ? data.timestamp.toDate().toLocaleString("vi-VN") : "N/A"
    });

    totalPrompt += data.promptTokens || 0;
    totalCandidates += data.candidatesTokens || 0;
    totalAll += data.totalTokens || 0;

    breakdown[type].count++;
    breakdown[type].promptTokens += data.promptTokens || 0;
    breakdown[type].candidatesTokens += data.candidatesTokens || 0;
    breakdown[type].totalTokens += data.totalTokens || 0;
  });

  const count = logs.length;
  const avgPrompt = Math.round(totalPrompt / count);
  const avgCandidates = Math.round(totalCandidates / count);
  const avgTotal = Math.round(totalAll / count);

  // Tìm min/max
  const maxLog = logs.reduce((max, log) => log.totalTokens > max.totalTokens ? log : max, logs[0]);
  const minLog = logs.reduce((min, log) => log.totalTokens < min.totalTokens ? log : min, logs[0]);

  // Bảng giá Gemini 3.1 Flash Lite (Thương mại - Ngoài Free Tier)
  const rateInput = 0.075 / 1000000;
  const rateOutput = 0.30 / 1000000;
  const usdToVnd = 25400; // Tỷ giá tạm tính

  const costUSD = (totalPrompt * rateInput) + (totalCandidates * rateOutput);
  const costVND = costUSD * usdToVnd;
  
  const avgCostUSD = costUSD / count;
  const avgCostVND = costVND / count;

  console.log(`=== BÁO CÁO THỐNG KÊ TOKEN VÀ CHI PHÍ (${count} LƯỢT GỌI GẦN NHẤT) ===\n`);
  
  console.log("📊 CHI TIẾT THEO PHÂN LOẠI TÁC VỤ (BREAKDOWN):");
  const breakdownTable = [];
  Object.entries(breakdown).forEach(([key, stats]) => {
    if (stats.count > 0) {
      const typeCostUSD = (stats.promptTokens * rateInput) + (stats.candidatesTokens * rateOutput);
      const typeCostVND = typeCostUSD * usdToVnd;
      breakdownTable.push({
        "Loại tác vụ": typeMapNames[key],
        "Số lượt gọi": stats.count,
        "Input Tokens": stats.promptTokens.toLocaleString(),
        "Output Tokens": stats.candidatesTokens.toLocaleString(),
        "Tổng Tokens": stats.totalTokens.toLocaleString(),
        "Chi phí VND": `~ ${Math.round(typeCostVND).toLocaleString()} VNĐ`
      });
    }
  });
  console.table(breakdownTable);
  console.log();

  console.log(`📊 PHÂN TÍCH TRUNG BÌNH MỖI REQUEST (CHUNG):`);
  console.log(`- Prompt Tokens trung bình (Input):     ${avgPrompt.toLocaleString()} tokens`);
  console.log(`- Candidates Tokens trung bình (Output):  ${avgCandidates.toLocaleString()} tokens`);
  console.log(`- Tổng số Tokens trung bình:             ${avgTotal.toLocaleString()} tokens`);
  console.log(`- Chi phí thương mại trung bình:        $${avgCostUSD.toFixed(6)} (~ ${avgCostVND.toFixed(2)} VNĐ)`);
  console.log();

  console.log(`🔥 LƯỢT GỌI TIÊU THỤ LỚN NHẤT:`);
  console.log(`- ID: ${maxLog.id} (${maxLog.time})`);
  console.log(`- Tác vụ: ${maxLog.type}`);
  console.log(`- Chi tiết: Input ${maxLog.promptTokens.toLocaleString()} | Output ${maxLog.candidatesTokens.toLocaleString()} | Tổng ${maxLog.totalTokens.toLocaleString()}`);
  console.log();

  console.log(`❄️ LƯỢT GỌI TIÊU THỤ THẤP NHẤT:`);
  console.log(`- ID: ${minLog.id} (${minLog.time})`);
  console.log(`- Tác vụ: ${minLog.type}`);
  console.log(`- Chi tiết: Input ${minLog.promptTokens.toLocaleString()} | Output ${minLog.candidatesTokens.toLocaleString()} | Tổng ${minLog.totalTokens.toLocaleString()}`);
  console.log();

  console.log(`💰 TỔNG LƯỢNG TOKEN & CHI PHÍ THƯƠNG MẠI TIÊU THỤ (Toàn bộ ${count} lượt gọi):`);
  console.log(`- Tổng Prompt Tokens:                    ${totalPrompt.toLocaleString()} tokens`);
  console.log(`- Tổng Candidates Tokens:                ${totalCandidates.toLocaleString()} tokens`);
  console.log(`- Tổng cộng:                             ${totalAll.toLocaleString()} tokens`);
  console.log(`- Ước tính chi phí thương mại:           $${costUSD.toFixed(4)} (~ ${costVND.toFixed(0)} VNĐ)`);
  console.log(`- Chi phí thực tế (Free Tier AI Studio):  0 VNĐ (Hoàn toàn miễn phí)`);
  console.log();

  console.log("📝 CHI TIẾT 10 LƯỢT GỌI GẦN NHẤT:");
  console.table(logs.slice(0, 10).map(l => ({
    "Thời gian": l.time.split(" ")[1] + " " + l.time.split(" ")[0],
    "Tài khoản": l.email,
    "Tác vụ": l.type,
    "Input Tokens": l.promptTokens,
    "Output Tokens": l.candidatesTokens,
    "Tổng Tokens": l.totalTokens,
  })));
}

run().catch(console.error);
