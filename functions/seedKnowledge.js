import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Đọc file env của functions để lấy API Key
function loadApiKey() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    throw new Error("Không tìm thấy file functions/.env để lấy API Key.");
  }
  const content = fs.readFileSync(envPath, "utf8");
  const match = content.match(/GEMINI_API_KEY\s*=\s*["']?(.*?)["']?(\s|$)/);
  if (!match || !match[1]) {
    throw new Error("Không tìm thấy biến GEMINI_API_KEY trong file functions/.env");
  }
  return match[1].trim();
}

// 2. Hàm gọi Gemini Embedding API
async function getEmbedding(text, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "models/gemini-embedding-001",
      content: {
        parts: [{ text }]
      },
      outputDimensionality: 1536
    })
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Lỗi tạo embedding: ${errText}`);
  }
  const data = await response.json();
  return data?.embedding?.values;
}

// 3. Hàm phụ trợ loại bỏ cú pháp TypeScript để import dạng JS
function parseTsFileToJs(tsFilePath, tempJsFileName) {
  const rawCode = fs.readFileSync(tsFilePath, "utf8");
  // Loại bỏ các câu lệnh import
  let jsCode = rawCode.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "");
  // Loại bỏ khai báo kiểu TypeScript như : Topic[] hoặc : QuestionType[]
  jsCode = jsCode.replace(/:\s*\w+(\[\])?(?=\s*=)/g, "");
  
  const tempPath = path.join(__dirname, tempJsFileName);
  fs.writeFileSync(tempPath, jsCode, "utf8");
  return tempPath;
}

async function run() {
  const apiKey = loadApiKey();
  console.log("Đã đọc thành công Gemini API Key.");

  // 4. Khởi tạo Firebase Admin SDK
  const projectId = "on-thi-vao-10-7d87c";
  const serviceAccountPath = path.join(__dirname, "service-account.json");

  if (process.env.FIRESTORE_EMULATOR_HOST) {
    console.log(`[Emulator] Đang kết nối tới Firestore Emulator tại: ${process.env.FIRESTORE_EMULATOR_HOST}`);
    admin.initializeApp({
      projectId: projectId
    });
  } else if (fs.existsSync(serviceAccountPath)) {
    console.log("[Production] Đang kết nối tới Firestore Production bằng Service Account...");
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: projectId
    });
  } else {
    console.log("[Production] Đang kết nối tới Firestore Production bằng mặc định (ADC)...");
    admin.initializeApp({
      projectId: projectId
    });
  }

  const db = admin.firestore();
  const collectionRef = db.collection("knowledge_base");

  // 5. Chuyển đổi và Import dữ liệu từ src/data
  console.log("\n--- BẮT ĐẦU ĐỌC DỮ LIỆU TỪ SRC/DATA ---");
  
  const mathTsPath = path.resolve(__dirname, "../src/data/mathData.ts");
  const engTopicsTsPath = path.resolve(__dirname, "../src/data/english/topics.ts");
  const engQTypesTsPath = path.resolve(__dirname, "../src/data/english/questionTypes.ts");

  const tempMathJs = parseTsFileToJs(mathTsPath, "temp_math.js");
  const tempEngTopicsJs = parseTsFileToJs(engTopicsTsPath, "temp_eng_topics.js");
  const tempEngQTypesJs = parseTsFileToJs(engQTypesTsPath, "temp_eng_qtypes.js");

  // Import động các file JS tạm thời
  const { mathQuestionTypes } = await import("./temp_math.js");
  const { englishQuestionTypes } = await import("./temp_eng_qtypes.js");

  console.log(`Đã đọc ${mathQuestionTypes.length} dạng bài Toán và ${englishQuestionTypes.length} dạng bài Tiếng Anh.`);

  const allQuestionTypes = [
    ...mathQuestionTypes.map(q => ({ ...q, subjectId: "math" })),
    ...englishQuestionTypes.map(q => ({ ...q, subjectId: "english" }))
  ];

  for (const qType of allQuestionTypes) {
    const subjectName = qType.subjectId === "math" ? "Toán" : "Tiếng Anh";
    console.log(`\nĐang xử lý dạng bài: "${qType.name}" (${subjectName})...`);

    // Xây dựng nội dung tài liệu Markdown có cấu trúc chất lượng cao
    const markdownContent = `DẠNG BÀI: ${qType.name} (Môn: ${subjectName})
Mô tả chuyên đề: ${qType.description}

Dấu hiệu nhận biết dạng bài này:
${qType.recognitionSigns ? qType.recognitionSigns.map(s => `- ${s}`).join("\n") : "- Không có"}

Các bước giải chi tiết:
${qType.solvingSteps ? qType.solvingSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n") : "- Không có"}

Các lỗi học sinh thường mắc phải:
${qType.commonMistakes ? qType.commonMistakes.map(s => `- ${s}`).join("\n") : "- Không có"}

${qType.subTypes && qType.subTypes.length > 0 ? `Các dạng bài tập nhỏ và ví dụ mẫu:
` + qType.subTypes.map(sub => `---
* ${sub.name}
  - Ví dụ: ${sub.example}
  - Hướng dẫn/Lưu ý: ${sub.note}`).join("\n") : ""}`;

    try {
      // Gọi API để lấy vector
      const embedding = await getEmbedding(markdownContent, apiKey);
      if (!embedding || embedding.length === 0) {
        console.error(`- Thất bại: Không nhận được vector embedding.`);
        continue;
      }
      console.log(`- Tạo vector embedding thành công (độ dài: ${embedding.length} chiều).`);

      // Ghi nhận vào Firestore
      const docId = `${qType.subjectId}_${qType.id}`;
      await collectionRef.doc(docId).set({
        subjectId: qType.subjectId,
        title: qType.name,
        content: markdownContent,
        embedding: admin.firestore.FieldValue.vector(embedding),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`- Đã ghi thành công vào Firestore với ID: ${docId}`);
    } catch (err) {
      console.error(`- Lỗi khi xử lý dạng bài "${qType.name}":`, err.message);
    }
  }

  // Dọn dẹp các file tạm thời
  try {
    fs.unlinkSync(tempMathJs);
    fs.unlinkSync(tempEngTopicsJs);
    fs.unlinkSync(tempEngQTypesJs);
    console.log("\n Đã dọn dẹp các file biên dịch tạm thời.");
  } catch (err) {
    console.error("Lỗi khi dọn dẹp file tạm:", err.message);
  }

  console.log("\n Hoàn thành đồng bộ toàn bộ tri thức từ src/data lên Firestore!");
}

run().catch(console.error);
