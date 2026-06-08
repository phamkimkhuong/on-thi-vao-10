import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config Firebase Client (từ src/services/firebase.ts)
const firebaseConfig = {
  apiKey: "AIzaSyC--Q8dDklMtRVrTkgczovpDPma28jq8xI",
  authDomain: "on-thi-vao-10-7d87c.firebaseapp.com",
  projectId: "on-thi-vao-10-7d87c",
  storageBucket: "on-thi-vao-10-7d87c.firebasestorage.app",
  messagingSenderId: "326319018998",
  appId: "1:326319018998:web:02bdb2d1afd36e218dedd7"
};

async function run() {
  // 1. Khởi tạo Admin SDK để tạo Custom Token
  const serviceAccountPath = path.join(__dirname, "service-account.json");
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: "on-thi-vao-10-7d87c"
  });

  const db = admin.firestore();
  await db.collection("student_profiles").doc("test-diagnostic-user").delete();
  console.log("Đã xóa sạch hồ sơ học sinh cũ test-diagnostic-user.");

  const customToken = await admin.auth().createCustomToken("test-diagnostic-user", {
    email: "diagnostic@test.com"
  });
  console.log("Đã tạo Custom Token thành công.");

  // 2. Khởi tạo Client SDK và đăng nhập bằng Custom Token
  const clientApp = initializeApp(firebaseConfig);
  const clientAuth = getAuth(clientApp);
  await signInWithCustomToken(clientAuth, customToken);
  console.log("Đăng nhập Client thành công với User:", clientAuth.currentUser?.uid);

  // 3. Gọi Cloud Function
  const clientFunctions = getFunctions(clientApp);
  const callGeminiProxy = httpsCallable(clientFunctions, "callGeminiProxy");

  console.log("Đang gọi callGeminiProxy...");
  const params = {
    contents: [
      {
        role: "model",
        parts: [{ text: "Chào em! Hôm nay chúng ta sẽ ôn luyện về chuyên đề Biện luận nghiệm phương trình bậc hai & Hệ thức Vi-ét nhé." }]
      },
      {
        role: "user",
        parts: [{ text: "Dạ thầy, em đang làm bài tính x1^2 + x2^2." }]
      },
      {
        role: "model",
        parts: [{ text: "Với bài này, em cần tính biệt thức delta trước để kiểm tra điều kiện phương trình có nghiệm, sau đó áp dụng hệ thức Vi-ét để biểu diễn x1 + x2 và x1 * x2." }]
      },
      {
        role: "user",
        parts: [{ text: "Thế còn biệt thức delta tính thế nào hả thầy?" }]
      },
      {
        role: "model",
        parts: [{ text: "Biệt thức delta tính theo công thức: Delta = b^2 - 4ac. Nếu Delta >= 0 thì phương trình có nghiệm. Sau đó em áp dụng Vi-ét." }]
      },
      {
        role: "user",
        parts: [{ text: "Em tính ra Delta rồi, giờ biến đổi x1^2 + x2^2 thế nào tiếp theo ạ?" }]
      },
      {
        role: "model",
        parts: [{ text: "Em dùng hằng đẳng thức đáng nhớ: x1^2 + x2^2 = (x1 + x2)^2 - 2x1x2. Từ đó thay S = x1 + x2 và P = x1x2 vào." }]
      },
      {
        role: "user",
        parts: [{ text: "Nếu đề bài bắt tính thêm trị tuyệt đối của x1 - x2 thì biến đổi sao hả thầy?" }]
      }
    ],
    systemInstruction: "Bạn là một Gia sư AI môn Toán ôn thi lớp 10.",
    useRag: true,
    subjectId: "math"
  };

  try {
    const result = await callGeminiProxy(params);
    console.log("\n==================================================");
    console.log("TEST CASE 1: CONVERSATIONAL QUERY REWRITING");
    console.log("Kết quả từ Cloud Function:", JSON.stringify(result, null, 2));
    console.log("==================================================\n");
  } catch (err) {
    console.error("Lỗi khi gọi Test Case 1:", err);
  }

  // Test Case 2: Kiểm tra Stage 1 Fast Filter (Xã giao ngắn)
  console.log("Đang gọi Test Case 2 (Xã giao ngắn, mong đợi khớp Fast Filter)...");
  const paramsSocialShort = {
    contents: [
      ...params.contents.slice(0, -1),
      {
        role: "user",
        parts: [{ text: "dạ vâng ạ" }]
      }
    ],
    systemInstruction: "Bạn là một Gia sư AI môn Toán ôn thi lớp 10.",
    useRag: true,
    subjectId: "math"
  };

  try {
    const resultSocialShort = await callGeminiProxy(paramsSocialShort);
    console.log("\n==================================================");
    console.log("TEST CASE 2: CONDITIONAL RAG - FAST FILTER (STAGE 1)");
    console.log("Kết quả từ Cloud Function:", JSON.stringify(resultSocialShort, null, 2));
    console.log("==================================================\n");
  } catch (err) {
    console.error("Lỗi khi gọi Test Case 2:", err);
  }

  // Test Case 3: Kiểm tra Stage 2 Semantic Filter (Xã giao dài)
  console.log("Đang gọi Test Case 3 (Xã giao dài, mong đợi khớp Semantic Filter)...");
  const paramsSocialLong = {
    contents: [
      ...params.contents.slice(0, -1),
      {
        role: "user",
        parts: [{ text: "Dạ em cảm ơn thầy nhiều ạ, em đã nắm rõ các bước giải rồi!" }]
      }
    ],
    systemInstruction: "Bạn là một Gia sư AI môn Toán ôn thi lớp 10.",
    useRag: true,
    subjectId: "math"
  };

  try {
    const resultSocialLong = await callGeminiProxy(paramsSocialLong);
    console.log("\n==================================================");
    console.log("TEST CASE 3: CONDITIONAL RAG - SEMANTIC FILTER (STAGE 2)");
    console.log("Kết quả từ Cloud Function:", JSON.stringify(resultSocialLong, null, 2));
    console.log("==================================================\n");
  } catch (err) {
    console.error("Lỗi khi gọi Test Case 3:", err);
  }

  // Test Case 4: Kiểm tra Trí nhớ Dài hạn (student_profiles)
  console.log("Đang gọi Test Case 4 (Học sinh mắc lỗi sai, mong đợi hệ thống ghi nhận vào Firestore)...");
  const paramsMemoryTrigger = {
    contents: [
      {
        role: "user",
        parts: [{ text: "Thưa thầy, em tính ra biệt thức delta bằng 5 rồi. Thế là phương trình vô nghiệm đúng không thầy?" }]
      }
    ],
    systemInstruction: "Bạn là một Gia sư AI môn Toán ôn thi lớp 10.",
    useRag: false,
    subjectId: "math"
  };

  try {
    const resultMemoryTrigger = await callGeminiProxy(paramsMemoryTrigger);
    console.log("\n==================================================");
    console.log("TEST CASE 4.1: MẮC LỖI SAI (Ghi nhận điểm yếu)");
    console.log("AI phản hồi:", resultMemoryTrigger.data.text);
    console.log("==================================================\n");

    // Đợi 2 giây để chắc chắn Firestore đã được ghi nhận
    console.log("Đang chờ 2 giây để Firestore lưu trữ...");
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Đọc hồ sơ học sinh trên Firestore
    const docSnap = await db.collection("student_profiles").doc("test-diagnostic-user").get();
    console.log("==================================================");
    console.log("KẾT QUẢ HỒ SƠ HỌC SINH LƯU TRÊN FIRESTORE:");
    console.log(JSON.stringify(docSnap.data(), null, 2));
    console.log("==================================================\n");

    // Gọi lần thứ 2 với một câu hỏi bình thường để xem AI có tải điểm yếu của học sinh từ Firestore vào ngữ cảnh học hay không
    console.log("Đang gọi Test Case 4.2 (Nhắc nhở từ Trí nhớ dài hạn)...");
    const paramsMemoryRecall = {
      contents: [
        {
          role: "user",
          parts: [{ text: "Thưa thầy, em tính ra biệt thức delta bằng 5 rồi. Thế là phương trình vô nghiệm đúng không thầy?" }]
        },
        {
          role: "model",
          parts: [{ text: resultMemoryTrigger.data.text }]
        },
        {
          role: "user",
          parts: [{ text: "Em hiểu rồi ạ, thầy cho em xin một bài tập tự luyện nhỏ về phần này với ạ." }]
        }
      ],
      systemInstruction: "Bạn là một Gia sư AI môn Toán ôn thi lớp 10.",
      useRag: false,
      subjectId: "math"
    };

    const resultMemoryRecall = await callGeminiProxy(paramsMemoryRecall);
    console.log("\n==================================================");
    console.log("TEST CASE 4.2: NHẮC NHỞ TỪ TRÍ NHỚ DÀI HẠN (RECALL)");
    console.log("AI phản hồi (Mong đợi AI tự động chú ý hoặc nhắc nhở điểm yếu về dấu delta):");
    console.log(resultMemoryRecall.data.text);
    console.log("==================================================\n");

  } catch (err) {
    console.error("Lỗi khi gọi Test Case 4:", err);
  }

  // Test Case 5: Kiểm tra Hybrid Search (Tìm kiếm Lai kết hợp Vector + Keywords không dấu)
  console.log("Đang gọi Test Case 5 (Kiểm tra Hybrid Search với từ khóa không dấu 'although because')...");
  const paramsHybridSearch = {
    contents: [
      {
        role: "user",
        parts: [{ text: "thay huong dan em cach viet lai cau although because voi a" }]
      }
    ],
    systemInstruction: "Bạn là một Gia sư AI môn Tiếng Anh ôn thi lớp 10.",
    useRag: true,
    subjectId: "english"
  };

  try {
    const resultHybridSearch = await callGeminiProxy(paramsHybridSearch);
    console.log("\n==================================================");
    console.log("TEST CASE 5: HYBRID SEARCH VERIFICATION (Accents-less Keyword Match)");
    console.log("AI phản hồi (Mong đợi tìm đúng tài liệu Although/Because và giảng giải cách chuyển đổi):");
    console.log(resultHybridSearch.data.text);
    console.log("==================================================\n");
  } catch (err) {
    console.error("Lỗi khi gọi Test Case 5:", err);
  }
}

run().catch(console.error);
